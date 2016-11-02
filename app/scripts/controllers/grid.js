'use strict';


angular.module('angularTest')
  .controller('gridCtrl', ['$scope', '$rootScope','$location', 'dataService',function($scope, $rootScope, $location, dataService) {

    $scope.garages = [];
    $scope.detailsUrl = "/garageDetail.html"; 
    dataService.getData().then(function(data) {
        $scope.garages = data;
    });
    $scope.showDetails = function(item) {
      $rootScope.selectedGarage = item;
      $location.path( "/grid/detail" );
    };
  }]);
