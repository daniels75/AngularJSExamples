'use strict';
var app = angular.module("myApp", ['ngRoute']);

app.factory("game", function(){
     return {
        title: "StarCraft"
      }
 })

// 1st
/*
angular.injector(["myApp"]).invoke(function(game){
    alert(game.title);
})
*/

var appCtrl  = app.controller("AppCtrl", function($scope, game, $injector){
    // 2nd
    $injector.invoke(function(game){
            alert(game.title);
    })
    $scope.title = game.title;
})
