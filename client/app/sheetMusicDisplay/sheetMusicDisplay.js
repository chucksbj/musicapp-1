'use strict';

angular.module('musicappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sheetMusicDisplay', {
        url: '/sheetMusicDisplay',
        templateUrl: 'app/sheetMusicDisplay/sheetMusicDisplay.html',
        controller: 'SheetMusicDisplayCtrl'
      });
  });