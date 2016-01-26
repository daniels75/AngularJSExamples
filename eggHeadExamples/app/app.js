'use strict';
var app = angular.module("myApp", []);

app.controller("MyCtrl", function($scope) {
    console.log($scope);
});
app.directive("myDirective", function(){
    return {
        restrict: 'E',
        link: function(scope) {
            console.log(scope);
        }
    }
})




