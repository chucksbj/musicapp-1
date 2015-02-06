define(function (require) {

	// Define angular contrllers under
	// assets/js/controllers
  
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
  
  Controllers.controller('angSongController', require('controllers/angSongController'));
  
  return Controllers;
  
});