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
        $scope.songSelect = $scope.awesomeThings[$scope.awesomeThings.length - 1];
        selections.setSong($scope.songSelect);
        var strLength = 0 - $scope.songSelect.name.length + 1;
        $scope.letterSelect = $scope.songSelect.name.slice(0, strLength);
        selections.setLetter($scope.letterSelect);
    };

  });
