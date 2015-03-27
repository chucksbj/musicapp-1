'use strict';

angular.module('musicappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('song', {
        url: '/song',
        templateUrl: 'app/song/song.html',
        controller: 'SongCtrl'
      });
  });