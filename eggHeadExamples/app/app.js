'use strict';

var myApp = angular.module("myApp", []);

myApp.factory('Avengers', function(){
    var Avengers = {};
    Avengers.cast = [{
        name: "Tom",
        character: "Loki"
    },
        {
            name: "Paul",
            character: "Jarvis"
        },
        {
            name: "Tina",
            character: "Scientist"
        }
    ]

    return Avengers;
})
myApp.controller("AvengersCtrl", function($scope, Avengers){
    $scope.avengers = Avengers;
})

