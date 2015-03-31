'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, socket) {
    $scope.songs = [];

    $http.get('/api/songs').success(function(songs) {
      $scope.songs = songs;
      socket.syncUpdates('song', $scope.songs);
    });

    $scope.addSong = function() {
      if($scope.newSong === '') {
        return;
      }
      $http.post('/api/songs', { name: $scope.newSong });
      $scope.newSong = '';
    };

    $scope.deleteSong = function(song) {
      $http.delete('/api/songs/' + song._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('song');
    });
  });
