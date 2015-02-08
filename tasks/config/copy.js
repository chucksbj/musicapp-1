/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {
  grunt.config.set('copy', {
      dev: {
          files: [{
              expand: true,
              cwd: './assets',
              src: ['**/*.!(coffee|less)'],
              dest: '.tmp/public'
          },{
              expand: true,
              // bower_components moved here
              // by the .bowerrc file
              cwd: './assets/js/vendor',
              src: [
              	  'html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
                  'angular/angular.js',
                  'angular-route/angular-route.js',
                  'angular-mocks/angular-mocks.js',
                  'angular-loader/angular-loader.js',
                  'angular-ui-grid/ui-grid.js',
                  'requirejs/require.js'
              ],
              flatten: true,
              dest: '.tmp/public/js/dependencies'
          },{ // add bootstrap css
                 expand: true,
                 cwd: './assets/js/vendor',
                 src: [
                 'html5-boilerplate/css/normalize.css',
                 'html5-boilerplate/css/main.css',
                 'bootstrap/dist/css/bootstrap.css',
                 'bootstrap/dist/css/bootstrap.css.map',
                 'bootstrap/dist/css/bootstrap-theme.css',
                 'bootstrap/dist/css/bootstrap-theme.css.map',
                 'angular-ui-grid/ui-grid.css'
                 ],
                 flatten: true,
                 dest: '.tmp/public/styles'
             }]
      },
      build: {
          files: [{
              expand: true,
              cwd: '.tmp/public',
              src: ['**/*'],
              dest: 'www'
          }]
      }
      });
      grunt.loadNpmTasks('grunt-contrib-copy');
  };
