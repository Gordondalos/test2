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

       $scope.time = new Date();

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

        $scope.grafick = function(){

            var chart = AmCharts.makeChart( "chartdiv", {
                "theme": "light",
                "type": "serial",
                "dataProvider": [ {
                    "country": "One",
                    "year2004": $scope.a1,
                    "year2005": $scope.b1,
                    "scrollbar": ($scope.a1 + $scope.b1)
                }, {
                    "country": "Two",
                    "year2004": $scope.a2,
                    "year2005": $scope.b2,
                    "scrollbar": ($scope.a2 + $scope.b2)
                }, {
                    "country": "Three",
                    "year2004": $scope.a3,
                    "year2005": $scope.b3,
                    "scrollbar": ($scope.a3 + $scope.b3)
                }, {
                    "country": "Four",
                    "year2004": $scope.a4,
                    "year2005": $scope.b4,
                    "scrollbar": ($scope.a4 + $scope.b4)
                }, {
                    "country": "Five",
                    "year2004": $scope.a5,
                    "year2005": $scope.b5,
                    "scrollbar": ($scope.a5 + $scope.b5)
                }, {
                    "country": "Six",
                    "year2004": $scope.a6,
                    "year2005": $scope.b6,
                    "scrollbar": ($scope.a6 + $scope.b6)
                },  {
                    "country": "Seven",
                    "year2004": $scope.a7,
                    "year2005": $scope.b7,
                    "scrollbar": ($scope.a7 + $scope.b7)
                } ],
                "valueAxes": [ {
                    "title": "Показатели А+Б",
                    "stackType": "regular"
                } ],
                "graphs": [ {
                    "balloonText": "A",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,

                    "type": "column",
                    "valueField": "year2004"
                }, {
                    "balloonText": "B",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,

                    "type": "column",
                    "valueField": "year2005"
                }, {
                    "id": "scrollbar",
                    "valueField": "scrollbar",
                    "lineAlpha": 0
                } ],
                "categoryField": "country",
                "categoryAxis": {
                    "gridPosition": "start",
                    "position": "top"
                },

            } );

            if($scope.a1 < $scope.b1){
                $('g[aria-label~="One"]').find('path').attr('fill','#D802BA');

            }
            if($scope.a2 < $scope.b2){
                $('g[aria-label~="Two"]').find('path').attr('fill','#D802BA');

            }
            if($scope.a3 < $scope.b3){
                $('g[aria-label~="Three"]').find('path').attr('fill','#D802BA');

            }
            if($scope.a4 < $scope.b4){
                $('g[aria-label~="Four"]').find('path').attr('fill','#D802BA');

            }
            if($scope.a5 < $scope.b5){
                $('g[aria-label~="Five"]').find('path').attr('fill','#D802BA');

            }
            if($scope.a6 < $scope.b6){
                $('g[aria-label~="Six"]').find('path').attr('fill','#D802BA');

            }
            if($scope.a7 < $scope.b7){
                $('g[aria-label~="Seven"]').find('path').attr('fill','#D802BA');

            }


            var chart2 = AmCharts.makeChart("chartdiv2", {
                "type": "pie",
                "theme": "light",
                "innerRadius": "40%",
                "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
                "dataProvider": [{
                    "country": "one",
                    "litres": $scope.a1 + $scope.b1
                }, {
                    "country": "two",
                    "litres": $scope.a2 + $scope.b2
                }, {
                    "country": "three",
                    "litres": $scope.a3 + $scope.b3
                }, {
                    "country": "four",
                    "litres": $scope.a4 + $scope.b4
                }, {
                    "country": "five",
                    "litres": $scope.a5 + $scope.b6
                }, {
                    "country": "six",
                    "litres": $scope.a7 + $scope.b7
                }, {
                    "country": "seven",
                    "litres": $scope.a8 + $scope.b8
                }],
                "balloonText": "[[value]]",
                "valueField": "litres",
                "titleField": "country",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#FFFFFF",
                    "fontSize": 16
                },
                "export": {
                    "enabled": true
                }
            });

        };

        var chart = AmCharts.makeChart( "chartdiv", {
            "theme": "light",
            "type": "serial",


            "dataProvider": [ {
                "country": "One",
                "year2004": 5,
                "year2005": 5,
                "scrollbar": (5 + 5)
            }, {
                "country": "Two",
                "year2004": 7,
                "year2005": 7,
                "scrollbar": (7+ 7)
            }, {
                "country": "Three",
                "year2004": 5,
                "year2005": 8,
                "scrollbar": (5 + 8)
            }, {
                "country": "Four",
                "year2004": 3,
                "year2005": 4,
                "scrollbar": (3 + 4)
            }, {
                "country": "Five",
                "year2004": 4,
                "year2005": 2,
                "scrollbar": (4 + 2)
            }, {
                "country": "Six",
                "year2004": 3,
                "year2005": 6,
                "scrollbar": (3 + 6)
            },  {
                "country": "Seven",
                "year2004": 9,
                "year2005": 10,
                "scrollbar": (9 + 10)
            } ],
            "valueAxes": [ {
                "title": "Показатели А + Б",
                "stackType": "regular"
            } ],
            "graphs": [ {
                "balloonText": "A",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,

                "type": "column",
                "valueField": "year2004"
            }, {
                "balloonText": "B",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,

                "type": "column",
                "valueField": "year2005"
            }, {
                "id": "scrollbar",
                "valueField": "scrollbar",
                "lineAlpha": 0
            } ],

            "categoryAxis": {
                "gridPosition": "start",
                "position": "top"
            },
            "chartScrollbar": {
            "graph": "scrollbar",
                "graphType": "column",
                "scrollbarHeight": 15,
                "position": "bottom"
        }

        } );




    }]);
// Three


myTestApp.controller('threeCtrl', ['$scope',
    function($scope) {
        $scope.name = "Федя"
    }]);