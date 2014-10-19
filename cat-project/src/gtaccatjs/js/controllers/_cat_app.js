_cat.core.declare('gtaccatjs.js.controllers.app.checkDis$$cat', {
  scrap: {
    "name": ["checkDis"],
    "context": ["thi$", "$scope"],
    "assert": ["ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA, $scope.pointB) < 5000,'points are to far')"],
    "file": "/Users/ransnir/Documents/workspace/GTAC_catjs_app/cat-project/target/gtaccatjs/js/controllers/app.js",
    "scrapinfo": {
      "start": {
        "line": 88,
        "col": 13
      },
      "end": {
        "line": 92,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 87,
        "col": 12
      },
      "end": {
        "line": 93,
        "col": 15
      }
    },
    "single": {
      "name": true,
      "context": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "context": 1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$", "$scope"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_16cfe6ba-cbec-0338-b1b4-68e3bc95e7ca",
    "$type": "js",
    "numCommands": 1,
    "pkgName": "gtaccatjs.js.controllers.app.checkDis"
  }
}, 'scrap');
_cat.core.define("gtaccatjs.js.controllers.app.checkDis$$cat", function(thi$, $scope) {

  var pkgName = "gtaccatjs.js.controllers.app.checkDis$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$,$scope",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA,$scope.pointB)<5e3,\"points are to far\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});