'use strict';

/* Services */

var myTestAppServices = angular.module('myTestAppServices', ['ngResource']);

myTestAppServices.factory('DropTable', ['$resource',
    function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);
