'use strict';
var app = angular.module("app", ['ngRoute']);

app.controller("RoomCtrl", function(){
    this.openDoor = function(){
        alert("openDoor");
    }
    this.buttonTitle = "Simple Button";
})

