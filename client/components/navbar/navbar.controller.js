'use strict';

angular.module('musicappApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Songs',
      'link': '/song'
    },
    {
      'title': 'Words',
      'link': '/word'
    },
    {
      'title': 'Instrument',
      'link': '/instrument'
    },
    {
      'title': 'Sheet Music',
      'link': '/sheetMusic'
    },
    {
      'title': 'Sheet Music Display',
      'link': '/sheetMusicDisplay'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });