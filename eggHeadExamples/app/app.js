'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "AppCtrl",
                resolve: {
                    loadData : appCtrl.loadData,
                    prepData : appCtrl.prepData
                }
            })
});
var  appCtrl = app.controller("AppCtrl", function($scope, $q){
    $scope.model = {
        message: "I'm great "
    }
});
appCtrl.loadData = function ($q, $timeout, $route){
    console.log($route)
    var defer = $q.defer();
    $timeout(function () {
        defer.resolve("looadData1");
    },2000)
    return defer.promise;
}
appCtrl.prepData = function ($q, $timeout){
    var defer = $q.defer();
    $timeout(function () {
        defer.resolve("prepData2");
    },2000)
    return defer.promise;
}

