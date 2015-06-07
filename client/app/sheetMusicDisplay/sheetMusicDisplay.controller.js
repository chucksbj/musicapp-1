'use strict';

angular.module('musicappApp')
  .controller('SheetMusicDisplayCtrl', function ($scope, $http, $rootScope) {
    $scope.sheetMusicDisplay = {};
    $scope.sheetMusicDisplays = [];
    $scope.instrumentSelect = $rootScope.instrumentSelect;
    $scope.songSelect = $rootScope.songSelect;
  });
