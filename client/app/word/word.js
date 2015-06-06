'use strict';

angular.module('musicappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('word', {
        url: '/word',
        templateUrl: 'app/word/word.html',
        controller: 'WordCtrl'
      });
  });