'use strict';

angular.module('musicappApp')
.filter('truncate', function() {
	// Usage in view: {... | truncate:20 }
    // See: http://jsfiddle.net/tUyyx/
    return function(text, length, end) {
      if (text === null) {
        return '';
      }

      if (isNaN(length)) {
        length = 10;
      }

      if (end === undefined) {
        end = '...';
      }

      if (text.length <= length || text.length - end.length <= length) {
        return text;
      } else {
        return String(text).substring(0, length - end.length) + end;
      }
    };
  });