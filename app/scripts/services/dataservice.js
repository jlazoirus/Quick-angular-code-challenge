'use strict';

/**
 * @ngdoc service
 * @name angularTest.dataService
 * @description
 * # dataService
 * Service in the angularTest.
 */
angular.module('angularTest')
  .service('dataService', ['$http', '$q', function ($http, $q) {
     return {
        getData:  function(){
            var deferred = $q.defer();

            function formatGarageData(data) {
              var tmpArray = [];
              data.features.forEach(function(garage) {
                var tmpObj = {};
                tmpObj.name = garage.properties.title;
                tmpObj.coords = garage.geometry.coordinates;
                tmpObj.freeSpaceLong = garage.properties.layers["parking.garage"].data.FreeSpaceLong;
                tmpObj.freeSpaceShort = garage.properties.layers["parking.garage"].data.FreeSpaceShort;
                tmpObj.longCapacity = garage.properties.layers["parking.garage"].data.LongCapacity;
                tmpObj.shortCapacity = garage.properties.layers["parking.garage"].data.ShortCapacity;
                tmpObj.freeSpace = tmpObj.freeSpaceShort != 0 || tmpObj.freeSpaceLong != 0;
                tmpArray.push(tmpObj);           
              });
              return tmpArray;
            };

            $http.get('http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25').success(function(data) {
              var garageFeed = formatGarageData(data);
              return deferred.resolve(garageFeed);
            });

            return deferred.promise;
        }
     };

  }]);
