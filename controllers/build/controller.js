'use strict';
// One

myTestApp.controller('oneCtrl', ['$scope',
    function($scope) {
        $scope.name = "Вася"
    }]);
// Two


myTestApp.controller('twoCtrl', ['$scope',
    function($scope) {
        $scope.name = "Маша"
    }]);
// Three


myTestApp.controller('threeCtrl', ['$scope',
    function($scope) {
        $scope.name = "Федя"
    }]);