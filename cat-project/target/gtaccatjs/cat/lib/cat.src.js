_cat.core.declare('gtaccatjs.js.controllers.app.checkDis$$cat', {
  scrap: {
    "name": ["checkDis"],
    "context": ["thi$", "$scope"],
    "assert": ["ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA, $scope.pointB) < 5000,'points are to far')"],
    "file": "/Users/ransnir/Documents/workspace/GTAC_catjs_app/cat-project/target/gtaccatjs/js/controllers/app.js",
    "scrapinfo": {
      "start": {
        "line": 98,
        "col": 13
      },
      "end": {
        "line": 102,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 97,
        "col": 12
      },
      "end": {
        "line": 103,
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
    "id": "scrap_5084fe99-4f47-c810-a605-08dac95cb91a",
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
_cat.core.define("gtaccatjs.js.controllers.app.checkDis", function() {

  var pkgName = "gtaccatjs.js.controllers.app.checkDis";

  return {

    /**
     * Init functionality for scrap gtaccatjs.js.controllers.app.checkDis
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.declare('gtaccatjs.pages.map.html.setWhere$$cat', {
  scrap: {
    "name": ["setWhere"],
    "embed": ["true"],
    "jqm": ["setText(\"#inputWhere\", \"google kirkland\")"],
    "file": "/Users/ransnir/Documents/workspace/GTAC_catjs_app/cat-project/target/gtaccatjs/pages/map.html",
    "scrapinfo": {
      "start": {
        "line": 14,
        "col": 26
      },
      "end": {
        "line": 18,
        "col": 28
      }
    },
    "commentinfo": {
      "start": {
        "line": 13,
        "col": 26
      },
      "end": {
        "line": 19,
        "col": 29
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_ff278754-83d8-9a97-2ad4-4973975e3cd0",
    "$type": "html",
    "numCommands": 2,
    "pkgName": "gtaccatjs.pages.map.html.setWhere"
  }
}, 'scrap');
_cat.core.define("gtaccatjs.pages.map.html.setWhere$$cat", function(thi$) {

  var pkgName = "gtaccatjs.pages.map.html.setWhere$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
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
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setWhere', desc: 'setText(\"#inputWhere\", \"google kirkland\")',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setText(\"#inputWhere\", \"google kirkland\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('gtaccatjs.pages.map.html.clickGo$$cat', {
  scrap: {
    "name": ["clickGo"],
    "embed": ["true"],
    "jqm": ["click(\"#goBtn\")"],
    "file": "/Users/ransnir/Documents/workspace/GTAC_catjs_app/cat-project/target/gtaccatjs/pages/map.html",
    "scrapinfo": {
      "start": {
        "line": 30,
        "col": 8
      },
      "end": {
        "line": 34,
        "col": 10
      }
    },
    "commentinfo": {
      "start": {
        "line": 29,
        "col": 8
      },
      "end": {
        "line": 35,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_329170e6-17df-bc9a-3618-2627b44413cc",
    "$type": "html",
    "numCommands": 2,
    "pkgName": "gtaccatjs.pages.map.html.clickGo"
  }
}, 'scrap');
_cat.core.define("gtaccatjs.pages.map.html.clickGo$$cat", function(thi$) {

  var pkgName = "gtaccatjs.pages.map.html.clickGo$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
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
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'clickGo', desc: 'click(\"#goBtn\")',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.click(\"#goBtn\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.define("gtaccatjs.pages.map.html.setWhere", function() {

  var pkgName = "gtaccatjs.pages.map.html.setWhere";

  return {

    /**
     * Init functionality for scrap gtaccatjs.pages.map.html.setWhere
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("gtaccatjs.pages.map.html.clickGo", function() {

  var pkgName = "gtaccatjs.pages.map.html.clickGo";

  return {

    /**
     * Init functionality for scrap gtaccatjs.pages.map.html.clickGo
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());