'use strict';

angular.module('angularTest')
  .controller('garageDetailCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    function setUrl(coords) {
        var url = "https://www.google.com/maps/embed/v1/view?key=AIzaSyC6St3QaNWIb0GUTu_hEqz3S1vkoE3Dgbo&center="+ coords[1] + coords[0];
        return url;
    };
    function formatData (item) {
        $scope.garage={};
        $scope.garage.name=item.name;
        $scope.garage.totalSpace=item.longCapacity + item.shortCapacity;
        $scope.garage.freeSpace=item.freeSpaceLong + item.freeSpaceShort;
        $scope.garage.url=setUrl(item.coords);
    };
    formatData($rootScope.selectedGarage.garage);

    function close() {
        $scope.selectedGarage = null;
        $scope.details = false;
    };


  }]);
