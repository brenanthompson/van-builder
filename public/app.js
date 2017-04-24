var app = angular.module('vanBuilder', ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider){

    $routeProvider

        .when('/home',{
            templateUrl: "home/home.html",

            controller: "HomeController"
        })

        .otherwise({
            redirectTo: "/home"
        })

}])

