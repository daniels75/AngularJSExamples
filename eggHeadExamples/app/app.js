'use strict';
var app = angular.module("app", ['ngRoute']);

app.controller("MainCtrl", function(){
    this.things = ["one", "two", "three"]
})