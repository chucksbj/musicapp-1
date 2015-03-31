'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, socket) {
    $scope.song = {};
   $scope.songs = [];

    $http.get('/api/songs').success(function(songs) {
      $scope.songs = songs;
      socket.syncUpdates('song', $scope.songs);
    });

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

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('song');
    });
  });
