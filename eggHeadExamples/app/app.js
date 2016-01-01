'use strict';
var app = angular.module("myApp", []);

app.directive("zippy", function(){
    return {
        restrict: 'E',
        transclude: true,
        scope : {
            title: '@'
        },

        template: '<div><h3 ng-click="toggleContent()">{{title}}</h3></div>' +
        '<div ng-transclude="" ng-show="isContentVisible">Hello world {{title}}</div></div>',
        link: function(scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
})




