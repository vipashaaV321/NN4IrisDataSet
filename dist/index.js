// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"iris.json":[function(require,module,exports) {
module.exports = [{
  "sepal_length": 5.1,
  "sepal_width": 3.5,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.7,
  "sepal_width": 3.2,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.6,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.4,
  "petal_length": 1.4,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.4,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.4,
  "sepal_width": 2.9,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.7,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3.4,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3,
  "petal_length": 1.4,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 4.3,
  "sepal_width": 3,
  "petal_length": 1.1,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5.8,
  "sepal_width": 4,
  "petal_length": 1.2,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.7,
  "sepal_width": 4.4,
  "petal_length": 1.5,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.9,
  "petal_length": 1.3,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.5,
  "petal_length": 1.4,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.7,
  "sepal_width": 3.8,
  "petal_length": 1.7,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.8,
  "petal_length": 1.5,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.4,
  "petal_length": 1.7,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.7,
  "petal_length": 1.5,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.6,
  "petal_length": 1,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.3,
  "petal_length": 1.7,
  "petal_width": 0.5,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3.4,
  "petal_length": 1.9,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.4,
  "petal_length": 1.6,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.2,
  "sepal_width": 3.5,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.2,
  "sepal_width": 3.4,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.7,
  "sepal_width": 3.2,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3.1,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3.4,
  "petal_length": 1.5,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.2,
  "sepal_width": 4.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5.5,
  "sepal_width": 4.2,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.2,
  "petal_length": 1.2,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.5,
  "sepal_width": 3.5,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.9,
  "sepal_width": 3.1,
  "petal_length": 1.5,
  "petal_width": 0.1,
  "species": "setosa"
}, {
  "sepal_length": 4.4,
  "sepal_width": 3,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.4,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.5,
  "petal_length": 1.3,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 4.5,
  "sepal_width": 2.3,
  "petal_length": 1.3,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 4.4,
  "sepal_width": 3.2,
  "petal_length": 1.3,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.5,
  "petal_length": 1.6,
  "petal_width": 0.6,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.8,
  "petal_length": 1.9,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 4.8,
  "sepal_width": 3,
  "petal_length": 1.4,
  "petal_width": 0.3,
  "species": "setosa"
}, {
  "sepal_length": 5.1,
  "sepal_width": 3.8,
  "petal_length": 1.6,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 4.6,
  "sepal_width": 3.2,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5.3,
  "sepal_width": 3.7,
  "petal_length": 1.5,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 5,
  "sepal_width": 3.3,
  "petal_length": 1.4,
  "petal_width": 0.2,
  "species": "setosa"
}, {
  "sepal_length": 7,
  "sepal_width": 3.2,
  "petal_length": 4.7,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 6.4,
  "sepal_width": 3.2,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.1,
  "petal_length": 4.9,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.3,
  "petal_length": 4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.5,
  "sepal_width": 2.8,
  "petal_length": 4.6,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.8,
  "petal_length": 4.5,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 3.3,
  "petal_length": 4.7,
  "petal_width": 1.6,
  "species": "versicolor"
}, {
  "sepal_length": 4.9,
  "sepal_width": 2.4,
  "petal_length": 3.3,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 6.6,
  "sepal_width": 2.9,
  "petal_length": 4.6,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.2,
  "sepal_width": 2.7,
  "petal_length": 3.9,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5,
  "sepal_width": 2,
  "petal_length": 3.5,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.9,
  "sepal_width": 3,
  "petal_length": 4.2,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 2.2,
  "petal_length": 4,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.9,
  "petal_length": 4.7,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.9,
  "petal_length": 3.6,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.1,
  "petal_length": 4.4,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 3,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 4.1,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 6.2,
  "sepal_width": 2.2,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.5,
  "petal_length": 3.9,
  "petal_width": 1.1,
  "species": "versicolor"
}, {
  "sepal_length": 5.9,
  "sepal_width": 3.2,
  "petal_length": 4.8,
  "petal_width": 1.8,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.8,
  "petal_length": 4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.5,
  "petal_length": 4.9,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.8,
  "petal_length": 4.7,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.9,
  "petal_length": 4.3,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.6,
  "sepal_width": 3,
  "petal_length": 4.4,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 6.8,
  "sepal_width": 2.8,
  "petal_length": 4.8,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3,
  "petal_length": 5,
  "petal_width": 1.7,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 2.9,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.6,
  "petal_length": 3.5,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.4,
  "petal_length": 3.8,
  "petal_width": 1.1,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.4,
  "petal_length": 3.7,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 3.9,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 2.7,
  "petal_length": 5.1,
  "petal_width": 1.6,
  "species": "versicolor"
}, {
  "sepal_length": 5.4,
  "sepal_width": 3,
  "petal_length": 4.5,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6,
  "sepal_width": 3.4,
  "petal_length": 4.5,
  "petal_width": 1.6,
  "species": "versicolor"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.1,
  "petal_length": 4.7,
  "petal_width": 1.5,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.3,
  "petal_length": 4.4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 3,
  "petal_length": 4.1,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.5,
  "petal_length": 4,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.5,
  "sepal_width": 2.6,
  "petal_length": 4.4,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6.1,
  "sepal_width": 3,
  "petal_length": 4.6,
  "petal_width": 1.4,
  "species": "versicolor"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.6,
  "petal_length": 4,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 5,
  "sepal_width": 2.3,
  "petal_length": 3.3,
  "petal_width": 1,
  "species": "versicolor"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.7,
  "petal_length": 4.2,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 3,
  "petal_length": 4.2,
  "petal_width": 1.2,
  "species": "versicolor"
}, {
  "sepal_length": 6.2,
  "sepal_width": 2.9,
  "petal_length": 4.3,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 5.1,
  "sepal_width": 2.5,
  "petal_length": 3,
  "petal_width": 1.1,
  "species": "versicolor"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.8,
  "petal_length": 4.1,
  "petal_width": 1.3,
  "species": "versicolor"
}, {
  "sepal_length": 6.3,
  "sepal_width": 3.3,
  "petal_length": 6,
  "petal_width": 2.5,
  "species": "virginica"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 5.1,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 7.1,
  "sepal_width": 3,
  "petal_length": 5.9,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.9,
  "petal_length": 5.6,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3,
  "petal_length": 5.8,
  "petal_width": 2.2,
  "species": "virginica"
}, {
  "sepal_length": 7.6,
  "sepal_width": 3,
  "petal_length": 6.6,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 4.9,
  "sepal_width": 2.5,
  "petal_length": 4.5,
  "petal_width": 1.7,
  "species": "virginica"
}, {
  "sepal_length": 7.3,
  "sepal_width": 2.9,
  "petal_length": 6.3,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 2.5,
  "petal_length": 5.8,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 7.2,
  "sepal_width": 3.6,
  "petal_length": 6.1,
  "petal_width": 2.5,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3.2,
  "petal_length": 5.1,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.7,
  "petal_length": 5.3,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 6.8,
  "sepal_width": 3,
  "petal_length": 5.5,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.5,
  "petal_length": 5,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.8,
  "petal_length": 5.1,
  "petal_width": 2.4,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 3.2,
  "petal_length": 5.3,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3,
  "petal_length": 5.5,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 3.8,
  "petal_length": 6.7,
  "petal_width": 2.2,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 2.6,
  "petal_length": 6.9,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6,
  "sepal_width": 2.2,
  "petal_length": 5,
  "petal_width": 1.5,
  "species": "virginica"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.2,
  "petal_length": 5.7,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 5.6,
  "sepal_width": 2.8,
  "petal_length": 4.9,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 2.8,
  "petal_length": 6.7,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.7,
  "petal_length": 4.9,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.3,
  "petal_length": 5.7,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 7.2,
  "sepal_width": 3.2,
  "petal_length": 6,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.2,
  "sepal_width": 2.8,
  "petal_length": 4.8,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.1,
  "sepal_width": 3,
  "petal_length": 4.9,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.8,
  "petal_length": 5.6,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 7.2,
  "sepal_width": 3,
  "petal_length": 5.8,
  "petal_width": 1.6,
  "species": "virginica"
}, {
  "sepal_length": 7.4,
  "sepal_width": 2.8,
  "petal_length": 6.1,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 7.9,
  "sepal_width": 3.8,
  "petal_length": 6.4,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 2.8,
  "petal_length": 5.6,
  "petal_width": 2.2,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.8,
  "petal_length": 5.1,
  "petal_width": 1.5,
  "species": "virginica"
}, {
  "sepal_length": 6.1,
  "sepal_width": 2.6,
  "petal_length": 5.6,
  "petal_width": 1.4,
  "species": "virginica"
}, {
  "sepal_length": 7.7,
  "sepal_width": 3,
  "petal_length": 6.1,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 3.4,
  "petal_length": 5.6,
  "petal_width": 2.4,
  "species": "virginica"
}, {
  "sepal_length": 6.4,
  "sepal_width": 3.1,
  "petal_length": 5.5,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6,
  "sepal_width": 3,
  "petal_length": 4.8,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.1,
  "petal_length": 5.4,
  "petal_width": 2.1,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.1,
  "petal_length": 5.6,
  "petal_width": 2.4,
  "species": "virginica"
}, {
  "sepal_length": 6.9,
  "sepal_width": 3.1,
  "petal_length": 5.1,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 5.8,
  "sepal_width": 2.7,
  "petal_length": 5.1,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 6.8,
  "sepal_width": 3.2,
  "petal_length": 5.9,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3.3,
  "petal_length": 5.7,
  "petal_width": 2.5,
  "species": "virginica"
}, {
  "sepal_length": 6.7,
  "sepal_width": 3,
  "petal_length": 5.2,
  "petal_width": 2.3,
  "species": "virginica"
}, {
  "sepal_length": 6.3,
  "sepal_width": 2.5,
  "petal_length": 5,
  "petal_width": 1.9,
  "species": "virginica"
}, {
  "sepal_length": 6.5,
  "sepal_width": 3,
  "petal_length": 5.2,
  "petal_width": 2,
  "species": "virginica"
}, {
  "sepal_length": 6.2,
  "sepal_width": 3.4,
  "petal_length": 5.4,
  "petal_width": 2.3,
  "species": "virginica"
}];
},{}],"testing_iris.json":[function(require,module,exports) {
module.exports = [{
  "sepal_length": 5.4,
  "sepal_width": 3.9,
  "petal_length": 1.7,
  "petal_width": 0.4,
  "species": "setosa"
}, {
  "sepal_length": 5.9,
  "sepal_width": 3,
  "petal_length": 5.1,
  "petal_width": 1.8,
  "species": "virginica"
}, {
  "sepal_length": 5.7,
  "sepal_width": 2.9,
  "petal_length": 4.2,
  "petal_width": 1.3,
  "species": "versicolor"
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

var tf = _interopRequireWildcard(require("@tensorflow/tfjs"));

require("@tensorflow/tfjs-node");

var _iris = _interopRequireDefault(require("./iris.json"));

var _testing_iris = _interopRequireDefault(require("./testing_iris.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// convert/setup our data
const trainingData = tf.tensor2d(_iris.default.map(item => [item.sepal_length, item.sepal_width, item.petal_length, item.petal_width]));
const outputData = tf.tensor2d(_iris.default.map(item => [item.species === "setosa" ? 1 : 0, item.species === "virginica" ? 1 : 0, item.species === "versicolor" ? 1 : 0]));
const testingData = tf.tensor2d(_testing_iris.default.map(item => [item.sepal_length, item.sepal_width, item.petal_length, item.petal_width])); // build neural network

const model = tf.sequential();
model.add(tf.layers.dense({
  inputShape: [4],
  activation: "sigmoid",
  units: 5
}));
model.add(tf.layers.dense({
  inputShape: [5],
  activation: "sigmoid",
  units: 3
}));
model.add(tf.layers.dense({
  activation: "sigmoid",
  units: 3
}));
model.compile({
  loss: "meanSquaredError",
  optimizer: tf.train.adam(.06)
}); // train/fit our network

const startTime = Date.now();
model.fit(trainingData, outputData, {
  epochs: 100
}).then(history => {
  console.log(history);
  model.predict(testingData).print();
}); // test network
},{"./iris.json":"iris.json","./testing_iris.json":"testing_iris.json"}]},{},["index.js"], null)
//# sourceMappingURL=/index.js.map