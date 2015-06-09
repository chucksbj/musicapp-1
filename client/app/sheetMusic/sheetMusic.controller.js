'use strict';

angular.module('musicappApp')
  .controller('SheetMusicCtrl', function ($scope, $http, socket, $rootScope, uiGridConstants) {
  	$scope.sheetMusic = {};
    $scope.sheetMusics = [];
    $scope.showForm = false;
    $scope.isEdit = false;
    $scope.awesomeThings = [];
    $scope.instrumentSelect = $rootScope.instrumentSelect;

    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
        multiSelect: false,
        sortInfo: {fields:['title'], directions:['asc']},
        columnDefs: [
          { field: '_id', visible: false },
          { name: 'instrument', displayName: 'Instrument', width: 150, enableSorting: true, sort: {direction: uiGridConstants.ASC , priority: 1}, enableFiltering: true},
          { name: 'name', displayName: 'Song Name', enableSorting: true, sort: {direction: uiGridConstants.ASC , priority: 2}, enableFiltering: true, cellTemplate: '<a href="/sheetMusicDisplay" ng-click="grid.appScope.songSelected(row.entity)" >{{row.entity.name}}</a>'},
          { name: 'edit', displayName: 'Edit', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="editBtn" type="button" class="btn btn-small" ng-click="grid.appScope.editSheetMusic(row.entity) ">Edit</button>'},
          { name: 'delete', displayName: 'Delete', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-small" ng-click="grid.appScope.deleteSheetMusic(row.entity)" >Delete</button> '}
        ]
      };


    $http.get('/api/sheetMusics').success(function(sheetMusics) {
      $scope.sheetMusics = sheetMusics;
      $scope.gridOptions.data = sheetMusics;
      socket.syncUpdates('sheetMusic', $scope.sheetMusics);
    });

    $http.get('/api/instruments').success(function(instruments) {
      $scope.instruments = instruments;
      socket.syncUpdates('instrument', $scope.instruments);
    });

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    };

    $scope.addData = function (add) {
      // Show or hide the song form
      $scope.showForm = add;
    };

    $scope.addSheetMusic = function() {
      if($scope.sheetMusic === '') {
        return;
      }
    	if ($scope.isEdit) {
	    $http.put('/api/sheetMusics/' + $scope.sheetMusic._id, { name: $scope.sheetMusic.name});
	    $scope.isEdit = false;
	  } else {
	  	$http.post('/api/sheetMusics',  { name: $scope.sheetMusic.name,
                                        instrument: $scope.sheetMusic.instrument });
	  }

      $scope.sheetMusic = '';
    };

    $scope.editSheetMusic = function(entity) {
      // has binding to the SheetMusic form
      $scope.sheetMusic = entity;
      $scope.isEdit = true;
      $scope.showForm = true;
    };

    $scope.deleteSheetMusic = function(entity) {
      $http.delete('/api/sheetMusics/' + entity._id);
    };

    $scope.songSelected = function(entity) {
        $rootScope.songSelect = entity;
    };

    $scope.currentSongSelected = function() {
        $rootScope.songSelect = $scope.awesomeThings[$scope.awesomeThings.length - 1];
    };

    $scope.resize = function() {
        return {height:(30 * $scope.gridOptions.data.length + 51)+"px"};
    };

  });
