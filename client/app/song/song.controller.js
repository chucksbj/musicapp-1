'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, $log, socket) {

    $scope.song = {};
    $scope.songs = [];
    $scope.showForm = false;


    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
        multiSelect: false,
        columnDefs: [
          { field: '_id', visible: false },
          { name: 'title', displayName: 'Title', enableSorting: true, enableFiltering: true },
          { name: 'words', displayName: 'Words', enableSorting: true, enableFiltering: true },
          { name: 'startKey', displayName: 'Start Key', width: 80, enableSorting: true, enableFiltering: true },
          { name: 'auxKey', displayName: 'Aux Key',  width: 80, enableSorting: false, enableFiltering: false },
          
          //{ field: '__V', visible: false },
          {name: 'edit', displayName: 'Edit', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="editBtn" type="button" class="btn btn-small" ng-click="grid.appScope.editSong(row.entity) ">Edit</button>'},
          {name: 'delete', displayName: 'Delete', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-small" ng-click="grid.appScope.deleteSong(row.entity)" >Delete</button> '}
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

    $scope.editSong = function(entity) {
      $log.debug('Which button was selected ' + entity.title);
    };

    $scope.deleteSong = function(song) {
      $http.delete('/api/songs/' + song._id);
    };


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('song');
    });

  });
