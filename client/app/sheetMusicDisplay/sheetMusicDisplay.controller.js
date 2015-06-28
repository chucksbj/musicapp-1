'use strict';

angular.module('musicappApp')
  .controller('SheetMusicDisplayCtrl', function ($scope, $http, socket, $rootScope, selections) {
    $scope.sheetMusicDisplay = {};
    $scope.sheetMusicDisplays = [];
    $scope.folder = {};
    $scope.directory = {};
    $scope.instrumentSelect = selections.getInstrument();
    $scope.folder.name = $scope.instrumentSelect.name.replace(/\s+/g,'');
    $scope.songSelect = selections.getSong();
    $scope.letterSelect = selections.getLetter();
    $scope.directory.name = "./assets/images/"+$scope.folder.name+"/"+$scope.letterSelect+"/"+$scope.songSelect.name+".jpg";

    $http.get('/api/things').success(function(awesomeThings) {
    	$scope.awesomeThings = awesomeThings;
    	socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.currentSongSelected = function() {
        selections.setSong($scope.awesomeThings[$scope.awesomeThings.length - 1]);
        $scope.songSelect = $scope.awesomeThings[$scope.awesomeThings.length - 1];
    };

  });
