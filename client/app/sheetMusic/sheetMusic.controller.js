  'use strict';

angular.module('musicappApp')
  .controller('SheetMusicCtrl', function ($scope, $http, socket, uiGridConstants, selections) {
  	$scope.sheetMusic = {};
    $scope.sheetMusics = [];
    $scope.letters = [];
    $scope.showForm = false;
    $scope.isEdit = false;
    $scope.awesomeThings = [];
    $scope.instrumentSelect = selections.getInstrument();
    $scope.songSelect = selections.getSong();
    $scope.letterSelect = selections.getLetter();
    if($scope.letterSelect == "") {
      $scope.letterSelect = "A";
      selections.setLetter("A");
    }
    $scope.letters.letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "SL", "SE", "BOA", "SBS"];

    $scope.gridOptions = {
        enableSorting: true, 
        enableFiltering: false,
        multiSelect: false,
        enableGridMenu: true,
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        enableColumnResizing: true,
        rowHeight: 33,
        minimumRowsToShow: 30,
        useExternalFiltering: true,
        
        columnDefs: [
          { field: '_id', visible: false },
          //{ name: 'instrument', visible: true, displayName: 'Instrument', width: 150, enableSorting: true, sort: {direction: uiGridConstants.ASC , priority: 1}, enableFiltering: true },
          { name: 'name', displayName: 'Song Name', enableSorting: true, sort: {direction: uiGridConstants.ASC , priority: 2}, enableFiltering: true, cellTemplate: '<a href="/sheetMusicDisplay" ng-click="grid.appScope.songSelected(row.entity)" >{{row.entity.name}}</a>'},
          { name: 'edit', displayName: 'Edit', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<a href="/sheetMusic" ng-click="grid.appScope.editSheetMusic(row.entity) ">Edit</a>'},
          { name: 'delete', displayName: 'Delete', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<a href="/sheetMusic" ng-click="grid.appScope.deleteSheetMusic(row.entity)" >Delete</a> '}
        ]
      };

    $http.get('/api/sheetMusics/'+$scope.instrumentSelect.name).success(function(sheetMusics) {
      $scope.sheetMusics = sheetMusics;
      $scope.gridOptions.data = sheetMusics;
      socket.syncUpdates('sheetMusic', $scope.sheetMusics);
    });

    //gets instrument database entries for instrument dropdown menu for adding songs
    $http.get('/api/instruments').success(function(instruments) {
      $scope.instruments = instruments;
      socket.syncUpdates('instrument', $scope.instruments);
    });

    //gets 'things' (default) database entries, used for next song next song up selection
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
      
      $scope.songSelect=$scope.gridApi.selection.getSelectedRows();

      /*gridApi.selection.on.rowSelectionChanged($scope, function(rows) {
        $scope.songSelect = gridApi.selection.getSelectedRows(rows);
        selections.setSong($scope.songSelect.name);
        $location.path('/sheetMusicDisplay');
      });
      */

    };

    // Show or hide the song form
    $scope.addData = function (add) {
      $scope.showForm = add;
    };

    //handles adding/editing songs
    $scope.addSheetMusic = function() {
      if($scope.sheetMusic === '') {
        return;
      }
      //for editing
    	if ($scope.isEdit) {
        $http.put('/api/sheetMusics/' + $scope.sheetMusic._id, { name: $scope.sheetMusic.name,
                                                                instrument: $scope.sheetMusic.instrument });
        $scope.isEdit = false;
      //for adding
      } else {
        $http.post('/api/sheetMusics',  { name: $scope.sheetMusic.name,
                                          instrument: $scope.sheetMusic.instrument });
      }
      $scope.sheetMusic = '';
    };

    //changes song data
    $scope.editSheetMusic = function(entity) {
      // has binding to the SheetMusic form
      $scope.sheetMusic = entity;
      $scope.isEdit = true;
      $scope.showForm = true;
    };

    //for deleting a song
    $scope.deleteSheetMusic = function(entity) {
      $http.delete('/api/sheetMusics/' + entity._id);
    };

    //passes song that gets selected to display
    $scope.songSelected = function(entity) {
      selections.setSong(entity);
    };

    //'next song' selection (set by song leader selecting next song)
    $scope.currentSongSelected = function() {
        $scope.songSelect = $scope.awesomeThings[$scope.awesomeThings.length - 1];
        selections.setSong($scope.songSelect);
        //used for extraction of beginning letter of song name
        var strLength = 0 - $scope.songSelect.name.length + 1;
        //auto detect beginning letter for next song
        selections.setLetter($scope.songSelect.name.slice(0, strLength));
    };

    //for setting letter folder and song filter for grid (eventually)
    $scope.letterSelected = function(value) {
      $scope.letterSelect = value;
      selections.setLetter(value);
    }

    //for auto-sizing of ui-grid for length of content
    $scope.resize = function() {
        return {height:(33 * $scope.gridOptions.data.length + 51)+'px'};
    };
  
  });