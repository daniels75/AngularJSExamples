'use strict';

var app = angular.module("superhero", []);

app.directive("superman", function() {
    return {
        restrict: "A",
        link: function() {
            alert("I'm working stronger");
        }
    }
})
app.directive("flash", function() {
    return {
        restrict: "A",
        link: function() {
            alert("I'm working faster");
        }
    }
})

app.directive("supermanWithClass", function() {
    return {
        restrict: "C",
        link: function() {
            alert("Hello from class");
        }
    }
})



