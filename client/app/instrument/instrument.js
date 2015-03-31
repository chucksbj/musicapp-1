'use strict';

angular.module('musicappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('instrument', {
        url: '/instrument',
        templateUrl: 'app/instrument/instrument.html',
        controller: 'InstrumentCtrl'
      });
  });