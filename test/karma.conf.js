// Karma configuration

module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,

    basePath: '../',

    frameworks: [
      'jasmine'
    ],

    files: [
      // bower:js
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [
    ],

    // web server port
    port: 8080,
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
  });
};
