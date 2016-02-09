'use strict';
var app = angular.module("app", ['ngRoute']);

app.directive("country", function(){
    return {
        restrict: "E",
        controller: function(){
            this.makeAnnouncement = function(message) {
                console.log("Country says: " + message);
            }
        }
    }
})
app.directive("state", function(){
    return {
        restrict: "E",
        require: "^country",
        link: function(scope, element, attrs, countryCtrl) {
        },
        controller: function(){
            this.makeLaw = function(law) {
                console.log("State says: " + law);
            }
        }
    }
})
// 1st
/*
app.directive("city", function(){
    return {
        restrict: "E",
        require: "^country",
        link: function(scope, element, attrs, countryCtrl) {
            countryCtrl.makeAnnouncement("This city rocks");
        }
    }
})
*/
// 2nd
/*
app.directive("city", function(){
    return {
        restrict: "E",
        require: "^state",
        link: function(scope, element, attrs, stateCtrl) {
            stateCtrl.makeLaw("Jump higher");
        }
    }
})
*/

// 3rd
app.directive("city", function(){
    return {
        restrict: "E",
        require: ["^country","^state"],
        link: function(scope, element, attrs, ctrls) {
            ctrls[0].makeAnnouncement("from city");
            ctrls[1].makeLaw("Jump higher");
        }
    }
})
