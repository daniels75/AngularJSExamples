'use strict';

var myApp = angular.module("myApp", []);

myApp.factory('Data', function(){
    return {message: "I'm data from service"}
})

myApp.filter("reverse", function(Data){
    return function(text) {
        return text.split("").reverse().join("") + Data.message;
    }
});

myApp.controller('FirstController', function($scope, Data) {
    $scope.data = Data;
});

myApp.controller('SecondController', function($scope, Data) {
    $scope.data = Data;
    $scope.reversedMesssage = function Reversed(message) {
        return message.split("").reverse().join("");
    }
});

