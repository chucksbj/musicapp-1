'use strict';

angular.module('musicappApp')
  .controller('SheetMusicDisplayCtrl', function ($scope, $http, socket, $rootScope) {
    $scope.sheetMusicDisplay = {};
    $scope.sheetMusicDisplays = [];
    $scope.instrumentSelect = $rootScope.instrumentSelect;
    $scope.songSelect = $rootScope.songSelect;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.currentSongSelected = function() {
        $scope.songSelect = $scope.awesomeThings[$scope.awesomeThings.length - 1];
    };

  });
