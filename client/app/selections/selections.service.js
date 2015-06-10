'use strict';

angular.module('musicappApp')
  .service('selections', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var instrument = [];
    var music = [];
    var song = [];

    return {
    	getInstrument: function() {
    		return instrument;
    	},
    	setInstrument: function(value) {
    		instrument = value;
    	},
    	getMusic: function() {
    		return music;
    	},
    	setMusic: function(value) {
    		music = value;
    	},
    	getSong: function() {
    		return song;
    	},
    	setSong: function(value) {
    		song = value;
    	}
    };
  });
