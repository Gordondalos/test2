myTestApp.config(['$routeProvider', function($routeProvide){

    $routeProvide
        .when ('/',{
        templateUrl:'view/home.html',
        controller: 'homeCtrl'
    })
        .when ('/one',{
        templateUrl:'view/one.html',
        controller: 'oneCtrl'
    })
        .when ('/two',{
        templateUrl:'view/two.html',
        controller: 'twoCtrl'
    })
        .when ('/three',{
        templateUrl:'view/three.html',
        controller: 'threeCtrl'
    })
        .otherwise({
            redirectTo: '/'
        });
}])