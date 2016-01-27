'use strict';
var app = angular.module("myApp", []);
// 3rd
app.run(function ($templateCache) {
    $templateCache.put("zippy.html",'<div><h3 ng-click="toggleContent()">{{title}}</h3> <div ng-show="isContentVisible" ng-transclude=""></div> </div>');
    $templateCache.info();
});
app.directive("zippy", function($templateCache) {
    //console.log($templateCache.get("zippy.html"));

    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: "@"
        },
        // 1st templateUrl: 'zippy.html',
        // 2nd template: $templateCache.get("zippy.html"),
        templateUrl: 'zippy.html',
        link: function(scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function(){
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }})




