_cat.core.declare('gtaccatjs.pages.map.html.setWhere$$cat', {
  scrap: {
    "name": ["setWhere"],
    "embed": ["true"],
    "jqm": ["setText(\"#inputWhere\", \"hp software israel\")"],
    "file": "/Users/ransnir/Documents/workspace/GTAC_catjs_app/cat-project/target/gtaccatjs/pages/map.html",
    "scrapinfo": {
      "start": {
        "line": 13,
        "col": 26
      },
      "end": {
        "line": 17,
        "col": 28
      }
    },
    "commentinfo": {
      "start": {
        "line": 12,
        "col": 20
      },
      "end": {
        "line": 18,
        "col": 23
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
    "id": "scrap_e30ddc2f-0e23-e298-833f-7623157af67a",
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
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setWhere', desc: 'setText(\"#inputWhere\", \"hp software israel\")',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setText(\"#inputWhere\", \"hp software israel\");"], {
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
        "line": 29,
        "col": 14
      },
      "end": {
        "line": 33,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 28,
        "col": 8
      },
      "end": {
        "line": 34,
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
    "id": "scrap_6e61d680-ba37-a3ad-b9a6-80c7451bba03",
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