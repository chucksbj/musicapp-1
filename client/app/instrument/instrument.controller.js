'use strict';

angular.module('musicappApp')
  .controller('InstrumentCtrl', function ($scope, $http, socket) {
    $scope.instruments = [];

    $http.get('/api/instruments').success(function(instruments) {
      $scope.instruments = instruments;
      socket.syncUpdates('instrument', $scope.instruments);
    });
  });
