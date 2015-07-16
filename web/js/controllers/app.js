
'use strict';
/**
 * The main controller for the our app
 */
define(['app', 'common/manager', 'services/data', "directives/scrollto"], function (app, manager, appdata, scrolldirective) {

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
        $scope.clickGo = false;


        $scope.setMapHeight = function() {
            var newMapHeight = (($(window).height() / 2) + "px");
            $(".halfMap").css({"height" : newMapHeight});
            $("#startMap").css({"height" : (($(window).height()) + "px")});


            var resizeText = function () {
                var el = $(".mapText");

                while(el.outerWidth() < (el.parent().width() *0.7)) {
                    var elNewFontSize = (parseInt((el).css('font-size').slice(0, -2)) + 2) + 'px';
                    (el).css({'font-size' : elNewFontSize});
                }
            }();

        };

        var updateRealLocation = function() {
            navigator.geolocation.getCurrentPosition(successCallback,
                errorCallback,
                {maximumAge:60000000});

            $scope.realLoc = [51.5073509,-0.1277583];
            $scope.pointB = new google.maps.LatLng($scope.realLoc[0], $scope.realLoc[1]);

            function successCallback(position) {
                $scope.realLoc = [position.coords.latitude, position.coords.longitude];

//                $scope.realLoc = [47.669377,-122.196604];
                $scope.pointB = new google.maps.LatLng($scope.realLoc[0], $scope.realLoc[1]);

                $scope.$apply();
            }

            function errorCallback(error) {
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
                            if (status == "OK") {
                                setSearchResult(details);
                            }

                        });
                }
            });
        };

        var setSearchResult = function(details) {
            var geometry = (details.geometry.location);
            var newLatLng = [geometry.A, geometry.F] // [geometry.k, geometry.B];
            $scope.address = newLatLng;
            $scope.predictionLoc = newLatLng;

            $scope.pointA =  new google.maps.LatLng(newLatLng[0], newLatLng[1]);

            /*
             @[scrap
                 @@name checkDis
                 @@context $scope
                 @@assert ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA, $scope.pointB) < 5000,'points are to far')
             ]@
             */
            $scope.$apply();
        };

        $scope.go = function() {

            updateRealLocation();
            getSearchLocation();


            $(".wrapLiveMap").removeClass(". hideLiveMap");
            $("#floatingUI").addClass("removeFloating");
            $("#startMap").addClass("removeFloating");
            $("#mapWrapper").addClass("removeBlur");

            $("#guessedText").addClass("removeGuessedText");
            $("#whereIamText").addClass("removeRealText");

            dynamicAnimation();

            $scope.mapZoom = 15;
            setTimeout(function() {
                $("#floatingUI").remove();

            },1000);


        };

        var dynamicAnimation = function() {
            $("<style>")
                .prop("type", "text/css")
                .html("@-webkit-keyframes aniHeightGuessMap {\n" +
                    "0% {height : " + (($(window).height()) + "px") + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@keyframes aniHeightGuessMap {\n" +
                    "0% {height : " + (($(window).height()) + "px") + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@-moz-keyframes aniHeightGuessMap {\n" +
                    "0% {height : " + (($(window).height()) + "px") + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@-ms-keyframes aniHeightGuessMap {\n" +
                    "0% {height : " + (($(window).height()) + "px") + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@-o-keyframes aniHeightGuessMap {\n" +
                    "0% {height : " + (($(window).height()) + "px") + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +

                    "@-webkit-keyframes aniHeightRealMap {\n" +
                    "0% {height : " + "0px" + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@keyframes aniHeightRealMap {\n" +
                    "0% {height : " + "0px" + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@-moz-keyframes aniHeightRealMap {\n" +
                    "0% {height : " + "0px" + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@-ms-keyframes aniHeightRealMap {\n" +
                    "0% {height : " + "0px" + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n" +
                    "@-o-keyframes aniHeightRealMap {\n" +
                    "0% {height : " + "0px" + "}\n" +
                    "100% {height : " + (($(window).height() / 2) + "px") + "}\n" +
                    "}\n"

            )
                .appendTo("head");

            $("#guessmap").addClass("dynamicGuessMapHeight");
            $("#realmap").addClass("dynamicRealMapHeight");
        }

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
    // App controller creation

});
