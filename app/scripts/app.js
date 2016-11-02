'use strict';

/**
 * @ngdoc overview
 * @name angularTest
 * @description
 * # angularTest
 *
 * Main module of the application.
 */
angular
  .module('angularTest', [
    'ngRoute',
    'ngSanitize',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'gridCtrl',
        controllerAs: 'grid'
      })
      .when('/grid/detail', {
        templateUrl: 'views/garageDetail.html',
        controller: 'garageDetailCtrl',
        controllerAs: 'garageDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
