'use strict';

angular.module('musicappApp')
  .controller('SongCtrl', function ($scope, $http, $log, socket) {

    $scope.song = {};
    $scope.songs = [];
    $scope.showForm = false;
    $scope.isEdit = false;


    $scope.gridOptions = {
        paginationPageSizes: [10, 20, 30],
        paginationPageSize: 10,
        enablePagination: true,
        enablePaginationControls: true,
        enableSorting: true,
        enableFiltering: true,
        multiSelect: false,
        columnDefs: [
          { field: '_id', visible: false },
          { name: 'title', displayName: 'Title', enableSorting: true, enableFiltering: true },
          { name: 'words', displayName: 'Words', enableSorting: true, enableFiltering: true },
          { name: 'startKey', displayName: 'Start Key', width: 80, enableSorting: true, enableFiltering: true },
          { name: 'auxKey', displayName: 'Aux Key',  width: 80, enableSorting: false, enableFiltering: false },
          
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

    $scope.addData = function (add) {
      // Show or hide the song form
      $scope.showForm = add;
    };

    $scope.addSong = function() {
      if($scope.song === '') {
        return;
      }if ($scope.isEdit) {
        $http.put('/api/songs/'+$scope.song._id, { title: $scope.song.title,
                                 words: $scope.song.words,
                                 startKey: $scope.song.startKey,
                                 auxKey: $scope.song.auxKey});
        $scope.isEdit = false;
      } else {
        $http.post('/api/songs', { title: $scope.song.title,
                                 words: $scope.song.words,
                                 startKey: $scope.song.startKey,
                                 auxKey: $scope.song.auxKey});
      }
      $scope.song = '';
    };

    $scope.editSong = function(entity) {
      // has binding to the song form
      $scope.song = entity;
      $scope.isEdit = true;
      $scope.showForm = true;
    };

    $scope.deleteSong = function(song) {
      $http.delete('/api/songs/' + song._id);
    };


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('song');
    });

  });
