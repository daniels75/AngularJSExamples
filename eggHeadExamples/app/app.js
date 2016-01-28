'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/:country/:state/:city',
            {
                templateUrl: "app.html",
                controller: "AppCtrl"
            })

});
app.controller("AppCtrl", function($scope, $routeParams){
    $scope.model = {
        message: "Address "
        + " country: " + $routeParams.country
        + " state: " + $routeParams.state
        + " city: " + $routeParams.city
    }
});



