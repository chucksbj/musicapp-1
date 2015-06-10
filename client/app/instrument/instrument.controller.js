'use strict';

angular.module('musicappApp')
  .controller('InstrumentCtrl', function ($scope, $http, socket, uiGridConstants, selections) {
  	$scope.instrument = {};
    $scope.instruments = [];
    $scope.showForm = false;
    $scope.isEdit = false;
    $scope.instrumentSelect = selections.getInstrument();

    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: false,
        multiSelect: false,
        columnDefs: [
          { field: '_id', visible: false },
          { field: 'name', displayName: 'Instrument Name', enableSorting: true, sort: {direction: uiGridConstants.ASC , priority: 1}, enableFiltering: true, cellTemplate: '<a href="/sheetMusic" ng-click="grid.appScope.instrumentSelected(row.entity)" >{{row.entity.name}}</a>'},
          { name: 'edit', displayName: 'Edit', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="editBtn" type="button" class="btn btn-small" ng-click="grid.appScope.editInstrument(row.entity) ">Edit</button>'},
          { name: 'delete', displayName: 'Delete', width: 70, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-small" ng-click="grid.appScope.deleteInstrument(row.entity)" >Delete</button> '}
        ]
      };

    //Instrument Database access and asyncronous updates
    $http.get('/api/instruments').success(function(instruments) {
      $scope.instruments = instruments;
      $scope.gridOptions.data = instruments;
      socket.syncUpdates('instrument', $scope.instruments);
    });

    //"things" Database access and asyncronous updates (used to display the next song up)
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

    $scope.instrumentSelected = function(entity) {
      selections.setInstrument(entity);
    };

    $scope.resize = function() {
      //For Dynamic resizing of the instrument ui-grid
      return {height:(30 * $scope.gridOptions.data.length + 51)+"px"};

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('instrument');
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

});
