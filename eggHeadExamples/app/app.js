'use strict';

var app = angular.module("myApp", []);

app.controller("AppCtrl", function($scope){
    $scope.callHome = function(message) {
        console.log("calling home: " + message);
    }

})
app.directive("phone", function(){
    return {
        scope: {
            dial: '&'
        },
        template: '<input type="text" ng-model="value">' +
            '<button ng-click="dial({message:value})">Call home</button>'
    }
})



