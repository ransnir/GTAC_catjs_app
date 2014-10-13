_cat.core.declare('gtaccatjs.js.config.bootstrapInitTest$$cat', {
  scrap: {
    "name": ["bootstrapInitTest"],
    "assert": ["ok(true, \"Bootstrap Initialization failed\")"],
    "file": "/Users/ransnir/Documents/workspace/GTAC/cat-project/target/gtaccatjs/js/config.js",
    "scrapinfo": {
      "start": {
        "line": 59,
        "col": 9
      },
      "end": {
        "line": 62,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 58,
        "col": 8
      },
      "end": {
        "line": 63,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_706e0dcb-d022-11d0-7452-bfe62096640e",
    "$type": "js",
    "numCommands": 1,
    "pkgName": "gtaccatjs.js.config.bootstrapInitTest"
  }
}, 'scrap');
_cat.core.define("gtaccatjs.js.config.bootstrapInitTest$$cat", function(thi$) {

  var pkgName = "gtaccatjs.js.config.bootstrapInitTest$$cat",
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
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok(true,\"Bootstrap Initialization failed\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.define("gtaccatjs.js.config.bootstrapInitTest", function() {

  var pkgName = "gtaccatjs.js.config.bootstrapInitTest";

  return {

    /**
     * Init functionality for scrap gtaccatjs.js.config.bootstrapInitTest
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.declare('gtaccatjs.js.controllers.app.checkDis$$cat', {
  scrap: {
    "name": ["checkDis"],
    "context": ["thi$", "$scope"],
    "assert": ["ok(google.maps.geometry.spherical.computeDistanceBetween($scope.pointA, $scope.pointB) < 5000,'points are to far')"],
    "file": "/Users/ransnir/Documents/workspace/GTAC/cat-project/target/gtaccatjs/js/controllers/app.js",
    "scrapinfo": {
      "start": {
        "line": 84,
        "col": 33
      },
      "end": {
        "line": 88,
        "col": 35
      }
    },
    "commentinfo": {
      "start": {
        "line": 83,
        "col": 28
      },
      "end": {
        "line": 89,
        "col": 31
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
    "id": "scrap_bdc20cee-116d-384f-a332-a30c2873e921",
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
_cat.core.define("gtaccatjs.js.controllers.app.menuTest", function() {

  var pkgName = "gtaccatjs.js.controllers.app.menuTest";

  return {

    /**
     * Init functionality for scrap gtaccatjs.js.controllers.app.menuTest
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("gtaccatjs.js.controllers.app.menuItemsAction", function() {

  var pkgName = "gtaccatjs.js.controllers.app.menuItemsAction";

  return {

    /**
     * Init functionality for scrap gtaccatjs.js.controllers.app.menuItemsAction
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
    "file": "/Users/ransnir/Documents/workspace/GTAC/cat-project/target/gtaccatjs/pages/map.html",
    "scrapinfo": {
      "start": {
        "line": 6,
        "col": 14
      },
      "end": {
        "line": 10,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 5,
        "col": 8
      },
      "end": {
        "line": 11,
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
    "id": "scrap_272e8235-7053-c64f-24e2-d3415cec86d1",
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
    "file": "/Users/ransnir/Documents/workspace/GTAC/cat-project/target/gtaccatjs/pages/map.html",
    "scrapinfo": {
      "start": {
        "line": 27,
        "col": 14
      },
      "end": {
        "line": 31,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 26,
        "col": 8
      },
      "end": {
        "line": 32,
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
    "id": "scrap_057f2c55-3d0c-a599-9b4f-050992b9b610",
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