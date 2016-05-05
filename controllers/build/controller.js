'use strict';
// One

myTestApp.controller('oneCtrl', ['$scope',
    function($scope) {

        $scope.result = {
            "one": false,
            "onetext": "",
            "two": false,
            "twotext": "",
            "three": false,
            "threetext": ""
        }

        //$scope.result.one = false;
        //$scope.result.two = false;
        //$scope.result.three = false;
        //$scope.result.twotext = "";
        //$scope.result.onetext = "";
        //$scope.result.threetext = "";

        $scope.checkselect = function(){
          var val = $('select').val();
            switch (val){
                case "1":
                    $scope.result.one = true;
                    $scope.result.two = false;
                    $scope.result.twotext = "";
                    $scope.result.three = false;
                    $scope.result.threetext = "";
                    break;
                case "2":
                    $scope.result.two = true;
                    $scope.result.one = false;
                    $scope.result.onetext = "";
                    $scope.result.three = false;
                    $scope.result.threetext = "";
                    break;
                case "3":
                    $scope.result.three = true;
                    $scope.result.two = false;
                    $scope.result.twotext = "";
                    $scope.result.one = false;
                    $scope.result.onetext = "";
                    break;
                case "4":
                    $scope.result.one = true;
                    $scope.result.three = true;
                    $scope.result.two = false;
                    $scope.result.twotext = "";
                    break;
                case "5":
                    $scope.result.two = true;
                    $scope.result.one = true;
                    $scope.result.three = true;
                    break;
            }

        };

        $scope.check = function(check) {
         var rone =  $scope.result.one;
         var rtwo =  $scope.result.two;
         var rthree =  $scope.result.three;
           if(rone === false){
               $scope.result.onetext = ""
           }
            if(rtwo === false){
                $scope.result.twotext = ""
            }
            if(rthree === false){
                $scope.result.threetext = ""
            }

        };
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