'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/:message',
            {
                templateUrl: "app.html",
                controller: "AppCtrl"
            })

});
app.controller("AppCtrl", function($scope, $routeParams){
    $scope.model = {
        message: "Message from param: " + $routeParams.message
    }
});



