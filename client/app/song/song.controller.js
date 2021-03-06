'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, $log, socket) {

    $scope.song = {};
    $scope.songs = [];
    $scope.showForm = false;


    $scope.gridOptions = {
        //paginationPageSizes: [10, 20, 30],
        //paginationPageSize: 10,
        //enablePagination: true,
        //enablePaginationControls: true,
        enableSorting: true,
        enableFiltering: false,
        multiSelect: false,
        enableGridMenu: true,
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        enableColumnResizing: true,
        rowHeight: 33,
        columnDefs: [
          { field: '_id', visible: false },
          { field: 'title', displayName: 'Title', enableSorting: true, enableFiltering: true, cellTemplate: '<a href="/word" ng-click="grid.appScope.addThing(row.entity) " >{{row.entity.title}}</a>' },
          { field: 'words', displayName: 'Words', enableSorting: true, enableFiltering: true },
          { field: 'startKey', displayName: 'Start Key', width: 80, enableSorting: true, enableFiltering: true },
          { field: 'auxKey', displayName: 'Aux Key',  width: 80, enableSorting: false, enableFiltering: false },
          
          //{ field: '__V', visible: false },
          {name: 'edit', displayName: 'Edit', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="editBtn" type="button" class="btn btn-small" ng-click="grid.appScope.editSong(row.entity) ">Edit</button>'},
          {name: 'delete', displayName: 'Delete', width: 65, enableSorting: false, enableFiltering: false, cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-small" ng-click="grid.appScope.deleteSong(row.entity)" >Delete</button> '}
        ]
      };

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    };

    $http.get('/api/songs').success(function(songs) {
      $scope.songs = songs;
      $scope.gridOptions.data = songs;
      socket.syncUpdates('song', $scope.songs);
    });

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addData = function (add) {
      // Show or hide the song form
      $scope.showForm = add;
    };

    $scope.addSong = function() {
      if($scope.song === '') {
        return;
      }
      $http.post('/api/songs', { title:     $scope.song.title,
                                 words:     $scope.song.words,
                                 startKey:  $scope.song.startKey,
                                 auxKey:    $scope.song.auxKey});
      $scope.song = '';
    };

    $scope.editSong = function(entity) {
      // has binding to the song form
      $scope.song = entity;
      $scope.showForm = true;
    };

    $scope.deleteSong = function(song) {
      $http.delete('/api/songs/' + song._id);
    };

    $scope.addThing = function(entity) {
      if ($scope.awesomeThings.length >0) {
        $http.delete('/api/things/' + $scope.awesomeThings[$scope.awesomeThings.length - 1]._id );
      }
        $http.post('/api/things', { name: entity.title });
        
    };

    $scope.resize = function() {
        return {height:(33 * $scope.gridOptions.data.length + 51)+'px'};
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('song');
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  });
