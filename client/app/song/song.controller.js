'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, $scope) {
  	$scope.songs = [];

    $http.get('/api/song').success(function(songs) {
      $scope.songs = songs;
    });
  });
