/*global define*/
'use strict';

/**
 * The main controller for the our app
 */

define(['app', 'common/manager', 'services/data', "directives/scrollto"], function (app, manager, appdata, scrolldirective) {

    // App controller creation
    app.controller('appController', ['appData', '$scope', "$interval", function(appData, $scope, $interval) {
        var map;
        $scope.$on('mapInitialized', function(evt, evtMap) {
            map = evtMap;
        });



        $scope.mapZoom = 4;
        $scope.realLoc = $scope.address = [37.6,-95.665];
        $scope.predictionLoc = [];

        $scope.keyboardOn = true;

        $scope.pointA;
        $scope.pointB;


        $scope.setMapHeight = function() {
            var newMapHeight = (($(window).height() / 2) + "px");
            $("map").css({"height" : newMapHeight});
        };

        var updateRealLocation = function() {
            navigator.geolocation.getCurrentPosition(successCallback,
                errorCallback,
                {maximumAge:600000});

            $scope.realLoc = [31.9789025,34.9684705];
            $scope.pointB = new google.maps.LatLng($scope.realLoc[0], $scope.realLoc[1]);

            function successCallback(position) {
                alert(position);
                $scope.realLoc = [location.coords.latitude, location.coords.longitude];
                $scope.pointB = new google.maps.LatLng($scope.realLoc[0], $scope.realLoc[1]);

                $scope.$apply();
            }

            function errorCallback(error) {
                alert(error);
                $scope.realLoc = [31.9789025,34.9684705];
                $scope.pointB = new google.maps.LatLng($scope.realLoc[0], $scope.realLoc[1]);

                $scope.$apply();

            }

        };

        var getSearchLocation = function() {
            var searchAddress = $("#inputWhere").val();

            var autocomplete = new google.maps.places.AutocompleteService(null, {
                types: ['geocode']
            });
            autocomplete.getPlacePredictions({input: searchAddress}, function(predictions, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var firstPredictions = (predictions[0]);

                    var s = new google.maps.places
                        .PlacesService((document.createElement('div')));
                    s.getDetails({reference: firstPredictions.reference},
                        function(details,status){

                            var geometry = (details.geometry.location);
                            var newLatLng = [geometry.k, geometry.B];
                            $scope.address = newLatLng;
                            $scope.predictionLoc = newLatLng;

                            $scope.pointA =  new google.maps.LatLng(newLatLng[0], newLatLng[1]);

                            /*
                                 @[scrap
                                    @@name checkDis
                                    @@context $scope
                                    @@assert ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA, $scope.pointB) < 5000,'points are to far')
                                 ]@
                             */_cat.core.action(this, { scrap:{"name":["checkDis"],"context":["thi$","$scope"],"assert":["ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA, $scope.pointB) < 5000,'points are to far')"],"file":"/Users/ransnir/Documents/workspace/GTAC/cat-project/target/gtaccatjs/js/controllers/app.js","scrapinfo":{"start":{"line":84,"col":33},"end":{"line":88,"col":35}},"commentinfo":{"start":{"line":83,"col":28},"end":{"line":89,"col":31}},"single":{"name":true,"context":false,"assert":false,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"auto":true,"injectcode":true,"id":true,"$type":true,"numCommands":true},"singleton":{"name":-1,"context":1,"assert":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"auto":-1,"injectcode":-1,"id":-1,"$type":-1,"numCommands":-1},"arguments":["thi$","$scope"],"auto":true,"injectcode":false,"id":"scrap_bdc20cee-116d-384f-a332-a30c2873e921","$type":"js","numCommands":1,"pkgName":"gtaccatjs.js.controllers.app.checkDis"}},this, $scope);
                            $scope.$apply();
                        });
                }
            });
        };

        $scope.go = function() {

            updateRealLocation();
            getSearchLocation();

            $("#floatingUI").addClass("removeFloating");
            $("#mapWrapper").addClass("removeBlur");
//            $scope.mapZoom = 15;

            setTimeout(function() {
                $("#floatingUI").remove();
            },1000);

        };


        $scope.keyboardManagment = function() {
            if ($scope.keyboardOn) {
                $("#wrapperGoBtn").addClass("disableBtn");
            } else {
                $("#wrapperGoBtn").removeClass("disableBtn");
            }
            $scope.keyboardOn = !$scope.keyboardOn;

        };

        $scope.setDynamicHeight = function(isGoBtn) {

            var parent = $("#UIWrapper");

            if (isGoBtn) {
                $("#wrapperGoBtn").css({"height" : parent.width()});
            } else {
                var calcTemp = ((parent.height() - $("#wrapperGoBtn").height()));
                if (calcTemp > 0) {
                    $("#floatingTextWrapper").css({"height" : (parent.height() - $("#wrapperGoBtn").height())});
                }
                var resizeText = function () {
                    var el = $("#amIatText");

                    while(el.outerWidth() < el.parent().width()) {
                        var elNewFontSize = (parseInt((el).css('font-size').slice(0, -2)) + 2) + 'px';
                        (el).css({'font-size' : elNewFontSize});
                    }
                }();
            }

        };


        // Initial selected section as empty
        $scope.selectedSection = {name: "", data: undefined};

        // On meta-data retrieved setup the UI accordingly
        appData.then(function(data) {
            // Set the data into scope
            $scope.pages = data.all();

            // Run the common script
            var _interval;

            if (data) {
                _interval = $interval(function(){
                    if (manager.init($scope, scrolldirective, data)) {
                        $interval.cancel(_interval);

                    }
                }, 200) ;
            }

        });


    }]);

});
