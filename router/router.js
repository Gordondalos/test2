myTestApp.config(['$routeProvider', function($routeProvide){

    $routeProvide
        .when ('/',{
        templateUrl:'view/home.html',

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