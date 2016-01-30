'use strict';
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "ViewCtrl",
                resolve: {
                    loadData : appCtrl.loadData
                }
            })
});
app.directive("error", function($rootScope){
    return {
        restrict: "E",
        template: '<div class="callout alert" ng-show="isError">Error!!!</div>',
        link: function(scope){
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
                scope.isError = true;
            })
        }
    }
})
var appCtrl  = app.controller("AppCtrl", function($rootScope){
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
        console.log("Failure - reason: " + rejection);
    })
})
var  viewCtrl = app.controller("ViewCtrl", function($scope, $q){
    $scope.model = {
        message: "I'm great "
    }
});
viewCtrl.loadData = function ($q, $timeout, $route){
    console.log($route)
    var defer = $q.defer();
    $timeout(function () {
        defer.reject("your network is done");
    },2000)
    return defer.promise;
}

