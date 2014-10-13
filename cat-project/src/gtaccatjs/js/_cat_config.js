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