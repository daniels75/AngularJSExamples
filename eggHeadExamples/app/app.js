'use strict';
var app = angular.module("myApp", []);

app.directive('dumbPassword', function(){
    return {
        restrict: 'E',
        replace: true,
        template: "<div>\n  <input type=\"\" ng-model=\'model.input\'>\n    <div>{{model.input}}</div>\n</div>",
        link: function(scope) {
            scope.$watch("model.input", function(value){
                if (value == 'password') {
                    console.log("change it");
                }

            })
        }
    }
});




