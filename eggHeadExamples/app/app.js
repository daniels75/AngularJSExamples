'use strict';

var app = angular.module("myApp", []);

app.controller("AppCtrl", function($scope){
    $scope.callHome = function(message) {
        console.log("calling home: " + message);
    }

})

app.directive("panel", function(){
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude class="callout">This is a panel component</div>'
    }
});


