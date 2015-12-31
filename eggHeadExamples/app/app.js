'use strict';

var app = angular.module("myApp", []);

app.controller("AppCtrol", function($scope) {
    $scope.ctrlFlavor = 'blackberry';
})
// 2nd approach
app.directive("drink", function(){
    return {
        scope: {
            flavor: '@'
        },
        template: "<div>{{flavor}}</div>"
    }
})
/* 1st approach
app.directive("drink", function(){
    return {
        template: "<div>{{flavor}}</div>",
        link: function(scope, element, attrs) {
            scope.flavor =  attrs.flavor
        }
    }
})
*/



