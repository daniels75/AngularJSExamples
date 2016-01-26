'use strict';
var app = angular.module("myApp", []);

app.controller("MyCtrl", function($scope) {
    console.log($scope);
});
app.controller("MyCtrl2", ['$scope', '$http', function(a, b) {
    console.log(b);
}]
);
app.directive("myDirective", function(){
    return {
        scope: {},
        restrict: 'E',
        link: function(scope, element, attrs) {
            console.log(element);
        }
    }
})




