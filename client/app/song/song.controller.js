'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, socket) {
    $scope.song = {};
    $scope.songs = [];
    $scope.showForm = false;

    $scope.edit = function edit(row){
      console.log("Here I need to know which button was selected " + row.entity.name);
    };

    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
        columnDefs: [ 
          { name: 'title', displayName: 'Title', enableSorting: true, enableFiltering: true },
          { name: 'words', displayName: 'Words', enableSorting: true, enableFiltering: true },
          { name: 'startKey', displayName: 'Start Key', enableSorting: true, enableFiltering: true },
          { name: 'auxKey', displayName: 'Aux Key',  enableSorting: false, enableFiltering: false },
          { field: '_id', visible: false },
          { field: '__V', visible: false },
          {name: 'edit', displayName: 'Edit', enableSorting: false, enableFiltering: false, cellTemplate: '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit(row)">Edit</button>'}
        ]
      };

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    };


    $http.get('/api/songs').success(function(songs) {
      $scope.songs = songs;
      $scope.gridOptions.data = songs;
      socket.syncUpdates('song', $scope.songs);
    });

    $scope.addData = function (add) {
      $scope.showForm = add;
    };

    $scope.addSong = function() {
      if($scope.song === '') {
        return;
      }
      $http.post('/api/songs', { title: $scope.song.title,
                                 words: $scope.song.words,
                                 startKey: $scope.song.startKey,
                                 auxKey: $scope.song.auxKey});
      $scope.song = '';
    };

    $scope.deleteSong = function(song) {
      $http.delete('/api/songs/' + song._id);
    };

    $scope.clickHandler = {
      onClick: function(value) {
        window.alert('Name: '+value);
      }
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('song');
    });

  });
