'use strict';

angular.module('musicappApp')
  .controller('InstrumentCtrl', function ($scope, $http, socket) {
  	$scope.instrument = {};
    $scope.instruments = [];
    $scope.showForm = false;
    $scope.isEdit = false;

    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: false,
        multiSelect: false,
        sortInfo: {fields:['name'], directions:['asc']},
        columnDefs: [
          { field: '_id', visible: false },
          { field: 'name', displayName: 'Instrument Name', enableSorting: true, enableFiltering: true},
          { name: 'edit', displayName: 'Edit', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="editBtn" type="button" class="btn btn-small" ng-click="grid.appScope.editInstrument(row.entity) ">Edit</button>'},
          { name: 'delete', displayName: 'Delete', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-small" ng-click="grid.appScope.deleteInstrument(row.entity)" >Delete</button> '}
        ]
      };


    $http.get('/api/instruments').success(function(instruments) {
      $scope.instruments = instruments;
      $scope.gridOptions.data = instruments;
      socket.syncUpdates('instrument', $scope.instruments);
    });

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addData = function (add) {
      // Show or hide the song form
      $scope.showForm = add;
    };

    $scope.addInstrument = function() {
      if($scope.instrument === '') {
        return;
      }

    if ($scope.isEdit) {
	    $http.put('/api/instruments/'+$scope.instrument._id, { name: $scope.instrument.name});
	    $scope.isEdit = false;
	  } else {
	  	$http.post('/api/instruments', { name: $scope.instrument.name});
	  }

      $scope.instrument = '';
    };

    $scope.editInstrument = function(entity) {
      // has binding to the instrument form
      $scope.instrument = entity;
      $scope.isEdit = true;
      $scope.showForm = true;
    };

    $scope.deleteInstrument = function(entity) {
      $http.delete('/api/instruments/' + entity._id);
    };

    $scope.instrumentList = function(entity) {
      $scope.instrument = entity;
    };

    $scope.instrumentSelected = function(entity) {
        $scope.instrument = entity;


    };


  });
