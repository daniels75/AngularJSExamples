'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    /*
    $routeProvider.when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl"
        })
        */
});
app.controller("AppCtrl", function($scope, $route){
    // this doesn't work - it is too late
    $route.routes["/"] = {
        templateUrl: "app.html",
        controller: "AppCtrl"
    }
    $scope.model = {
        message: "This is my app!!!"
    }
});



