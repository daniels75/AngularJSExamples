'use strict';

var app = angular.module("myApp", []);
app.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function(){
        alert("Load more tweets");
    }
    $scope.deleteMoreTweets = function(){
        alert("Delete more tweets");
    }
});
app.directive("enter", function(){
    return function(scope, element, attrs) {
        element.bind("mouseenter", function(){
           // 1-st scope.loadMoreTweets();
            // 2nd scope.$apply("loadMoreTweets()")
            scope.$apply(attrs.enter)
        });
    }

});





