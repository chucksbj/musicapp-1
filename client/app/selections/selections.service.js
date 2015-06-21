'use strict';

angular.module('musicappApp')
  .service('selections', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var instrument = [];
    var music = [];
    var letter = [];
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
        getLetter: function() {
            return letter;
        },
        setLetter: function(value) {
            letter = value;
        },
    	getSong: function() {
    		return song;
    	},
    	setSong: function(value) {
    		song = value;
    	},
    };
  });
