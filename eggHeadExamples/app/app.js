'use strict';

angular.module("myApp", ["ui.router"])
    .config(function config($stateProvider) {
        $stateProvider.state("index", {
            url: "",
            controller: "FirstController as first",
            templateUrl: "templates/first.html"
        })
        $stateProvider.state("second", {
            url: "/second",
            controller: "SecondController as second",
            templateUrl: "templates/second.html"
        })

    })

    
    .service('greeting', function Greeting() {
        var greeting = this;
        greeting.message = "Default";
    })
    .controller('FirstController', function(greeting) {
        var first = this;
        first.greeting = greeting;
    })
    .controller('SecondController', function(greeting) {
        var second = this;
        second.greeting = greeting;
    })
;

