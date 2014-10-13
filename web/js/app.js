/*global define*/
'use strict';

/**
 * Angular Main Module
 */
define(['angular'], function (angular) {
    
	var app;

    app = angular.module('jqueryspa', ['ngRoute', 'ngMap', 'ui.bootstrap'], function() {
        // module was loaded
       
    });
    
    return app;
});
