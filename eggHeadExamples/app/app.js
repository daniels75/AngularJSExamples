'use strict';
var app = angular.module("myApp", []);
var validElement = angular.element("    <div>{{model.input}}</div>");
this.link = function(scope, element) {
    scope.$watch("model.input", function (value) {
        if (value === "password") {
            console.log("change it");
            validElement.toggleClass("callout alert");
        }

    });
};
app.directive("dumbPassword", function(){
    return {
        restrict: 'E',
        compile: function(tElem){
            tElem.append(validElement);
            return link;
        },
        replace: true,
        template: '<div>\n    <input type="text" ng-model="model.input">\n</div>'
    }
})




