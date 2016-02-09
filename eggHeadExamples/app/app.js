'use strict';
var app = angular.module("app", ['ngRoute']);

// turn of debug
app.config(function($logProvider){
    $logProvider.debugEnabled(true);
})

app.run(function($rootScope, $log) {
    $rootScope.$log = $log;
})


