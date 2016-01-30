'use strict';
var app = angular.module("myApp", ['ngRoute']);
// 1st approach
/*
 app.factory("fruit", function(){
     return {
        name: "orange1"
      }
 })
 */
app.provider("game", function() {
    var type;
    return {
        setType : function(value) {
            this.type = value;
         },
        $get : function(){
            return {
                title: this.type + "Craft"
            }
        }
    }
})
app.config(function($provide, gameProvider){
    gameProvider.setType("War");

    // 2nd approach
    $provide.factory("fruit", function() {
        return {
            name: "orange2"
        }
    })
    // 2nd approach
    /*
    $provide.provider("game1", function(){
        return {
            $get: function() {
                return {
                    title: "StarCraft2"
                }
            }

        }
    })
    */
});

var appCtrl  = app.controller("AppCtrl", function($scope, fruit, game){
    $scope.fruit = fruit.name;
    $scope.title = game.title;
})
