'use strict';

var app = angular.module("myApp", []);

app.controller("AppCtrl", function($scope){

    this.sayHi = function() {
        console.log("Say Hi");
    }

     return $scope.AppCtrl = this;
})



