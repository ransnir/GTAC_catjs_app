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