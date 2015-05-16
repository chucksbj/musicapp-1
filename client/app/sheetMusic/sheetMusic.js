'use strict';

angular.module('musicappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sheetMusic', {
        url: '/sheetMusic',
        templateUrl: 'app/sheetMusic/sheetMusic.html',
        controller: 'SheetMusicCtrl'
      });
  });