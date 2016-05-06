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

myTestApp.controller("threeCtrl", function($scope) {

    $scope.displayForm = false;
    $scope.selectedItem = {};

    $scope.closeForm = function(){
        $scope.displayForm = false;
        $scope.selectedItem.color = $scope.color;
        $scope.color = "";
        $scope.selectedItem = {};
    }

    $scope.showModal = function(){

        $scope.displayForm = true;

        $scope.selectedItem = this.item;





    };

    $scope.models = [
        {listName: "A", items: [], dragging: false},
        {listName: "B", items: [], dragging: false}
    ];

    /**
     * dnd-dragging determines what data gets serialized and send to the receiver
     * of the drop. While we usually just send a single object, we send the array
     * of all selected items here.
     */
    $scope.getSelectedItemsIncluding = function(list, item) {
        item.selected = true;
        return list.items.filter(function(item) { return item.selected; });
    };

    /**
     * We set the list into dragging state, meaning the items that are being
     * dragged are hidden. We also use the HTML5 API directly to set a custom
     * image, since otherwise only the one item that the user actually dragged
     * would be shown as drag image.
     */
    $scope.onDragstart = function(list, event) {
        list.dragging = true;
        if (event.dataTransfer.setDragImage) {
            var img = new Image();
            img.src = 'framework/vendor/ic_content_copy_black_24dp_2x.png';
            event.dataTransfer.setDragImage(img, 0, 0);
        }
    };

    /**
     * In the dnd-drop callback, we now have to handle the data array that we
     * sent above. We handle the insertion into the list ourselves. By returning
     * true, the dnd-list directive won't do the insertion itself.
     */
    $scope.onDrop = function(list, items, index) {
        angular.forEach(items, function(item) { item.selected = false; });
        list.items = list.items.slice(0, index)
            .concat(items)
            .concat(list.items.slice(index));
        return true;
    }

    /**
     * Last but not least, we have to remove the previously dragged items in the
     * dnd-moved callback.
     */
    $scope.onMoved = function(list) {
        list.items = list.items.filter(function(item) { return !item.selected; });
    };

    // Generate the initial model
    angular.forEach($scope.models, function(list) {
        for (var i = 1; i <= 4; ++i) {
            list.items.push({label: "Item " + list.listName + i, color: '#fff'});
        }
    });

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});