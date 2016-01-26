'use strict';
var app = angular.module("myApp", []);

app.directive('dumbPassword', function(){
    var validElement = angular.element("<div>{{model.input}}</div>");
    var link = function(scope) {
        scope.$watch("model.input", function(value){
            if (value === 'password') {
                validElement.toggleClass("alert callout");
            }
        })
    };
    return {
        restrict: 'E',
        replace: true,
        compile: function (tElement) {
            tElement.append(validElement);
            return link;
        },
        template: "<div>\n    <input type=\"text\" ng-model=\'model.input\'>\n</div>"

    }
    /* first version */
    /*
    var validElement = angular.element("<div>{{model.input}}</div>");
    return {
        restrict: 'E',
        replace: true,
        compile: function(tElement) {
            tElement.append(validElement);
        },
        template: "<div>\n    <input type=\"text\" ng-model=\'model.input\'>\n</div>",
        link: function(scope, element) {
            scope.$watch("model.input", function(value){
                if (value == 'password') {
                    element.children(0).toggleClass("alert callout");
                    console.log("change it");
                }

            })
        }
    }
    */
});




