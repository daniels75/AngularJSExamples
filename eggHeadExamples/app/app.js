'use strict';

var app = angular.module("myApp", []);

app.controller("ChoreCtr", function($scope) {
    $scope.logChore = function(chore){
        console.log(chore + "is done" )
    }
})

app.directive("kid", function(){
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore">' +
        ' {{chore}} </br> ' +
        '<button ng-click="done({chore:chore})">I\'m done</button>'
    }
});





