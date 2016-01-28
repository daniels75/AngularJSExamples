'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "AppCtrl"
            })
        .when('/pizza', {
            template: "Yum!!"
        })
        .otherwise(
            {
                template: "This doesn't exists"
            }
        )

});
app.controller("AppCtrl", function($scope){
    $scope.model = {
        message: "This is my app!!!"
    }
});



