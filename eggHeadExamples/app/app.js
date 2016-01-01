'use strict';
var app = angular.module("myApp", []);
var phoneApps = {};

phoneApps.controllers = {};
phoneApps.controllers.AppCtrl = function($scope) {

    this.sayHi = function() {
        console.log("Say Hi");
    }

    return $scope.AppCtrl = this;
}

phoneApps.directives = {};
phoneApps.directives.panel = function(){
    return {
        restrict: 'E'
    }
}

app.controller(phoneApps.controllers);
app.directive(phoneApps.directives);




