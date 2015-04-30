'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, socket) {
    $scope.song = {};
    $scope.songs = [];
    $scope.showForm = false;
    $scope.gridOptions = {
      enableSorting: true,
      enableFiltering: true,
      columnDefs: [ 
        { name: 'title', displayName: 'Title', enableSorting: true },
        { name: 'words', displayName: 'Words'},
        { name: 'startKey', displayName: 'Start Key', enableSorting: true },
        //{ name: 'auxKey', displayName: 'Aux Key',  enableSorting: false },
        //{ field: '_id', visible: false },
        //{ field: '__V', visible: false },
        {name: 'edit', displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Edit</button> '}
      ]
    };


    $http.get('/api/songs').success(function(songs) {
      $scope.songs = songs;
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
