/*global require*/
'use strict';

/*
    RequireJS configuration
 */
require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		angularoute: '../bower_components/angular-route/angular-route',
		jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap : "../bower_components/bootstrap/ui-bootstrap-tpls-0.11.2.min",
        async: '../bower_components/requirejs-plugins/src/async',
        goog: '../bower_components/requirejs-plugins/src/goog',
        ngMap:'../bower_components/ngmap/ngmap',
        propertyParser : '../bower_components/requirejs-plugins/src/propertyParser'

	},
    waitSeconds: 60,

    shim: {
        async: {
            deps:['jquery']
        },
        goog: {
            deps:['async']
        },
		angular: {
			exports: 'angular',
            deps:['jquery']
		},
        bootstrap : {
            deps:['jquery']
        },
        ngMap: {
            deps:['goog', 'angular']
        },
        angularoute: {
            deps:['angular']
        }
	}
});

/*
    @[scrap
        @@require[
            /cat/lib/cat.js
        ]
    ]@
*/
/*
    Initial require call
 */
require(['angular', 'angularoute', 'async!https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyBE1zkImviI4Vy-f8X9nDqUwb0gzbyXIuY', 'ngMap', 'bootstrap', 'app', 'config/router', 'controllers/app', 'directives/generatelt', 'directives/scrollto'], function (angular) {

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['jqueryspa']);

    });
        
});
