'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "AppCtrl"
            })
        .otherwise(
            {
                redirectTo: "/"
            }
        )
});
app.controller("AppCtrl", function($scope, $q){

    var defer = $q.defer();
    defer.promise
        .then(function(weapon){
            alert("I promised I would show up - " + weapon)
            return "bow"
        })
        .then(function(weapon){
            alert("me to - " + weapon)
            return "axe"
        })
        .then(function(weapon){
            alert("and I - " + weapon)

        })
    defer.resolve("sword");

    $scope.model = {
        message: "Address "
    }
});



