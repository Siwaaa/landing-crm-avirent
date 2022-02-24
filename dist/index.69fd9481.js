// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"guMDp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4278e53369fd9481";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8sKa2":[function(require,module,exports) {
/**
 * Swiper 6.4.11
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 6, 2021
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
    "use strict";
    function e1(e, t) {
        for(var a = 0; a < t.length; a++){
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    function t1() {
        return (t1 = Object.assign || function(e) {
            for(var t = 1; t < arguments.length; t++){
                var a = arguments[t];
                for(var i in a)Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
        }).apply(this, arguments);
    }
    function a1(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function i1(e, t) {
        void 0 === e && (e = {
        }), void 0 === t && (t = {
        }), Object.keys(t).forEach(function(s) {
            void 0 === e[s] ? e[s] = t[s] : a1(t[s]) && a1(e[s]) && Object.keys(t[s]).length > 0 && i1(e[s], t[s]);
        });
    }
    var s1 = {
        body: {
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        activeElement: {
            blur: function() {
            },
            nodeName: ""
        },
        querySelector: function() {
            return null;
        },
        querySelectorAll: function() {
            return [];
        },
        getElementById: function() {
            return null;
        },
        createEvent: function() {
            return {
                initEvent: function() {
                }
            };
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {
                },
                setAttribute: function() {
                },
                getElementsByTagName: function() {
                    return [];
                }
            };
        },
        createElementNS: function() {
            return {
            };
        },
        importNode: function() {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function r1() {
        var e = "undefined" != typeof document ? document : {
        };
        return i1(e, s1), e;
    }
    var n1 = {
        document: s1,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {
            },
            pushState: function() {
            },
            go: function() {
            },
            back: function() {
            }
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return "";
                }
            };
        },
        Image: function() {
        },
        Date: function() {
        },
        screen: {
        },
        setTimeout: function() {
        },
        clearTimeout: function() {
        },
        matchMedia: function() {
            return {
            };
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        }
    };
    function l1() {
        var e = "undefined" != typeof window ? window : {
        };
        return i1(e, n1), e;
    }
    function o1(e2) {
        return (o1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e2);
    }
    function d1(e3, t2) {
        return (d1 = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e3, t2);
    }
    function p1() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), !0;
        } catch (e) {
            return !1;
        }
    }
    function u1(e4, t3, a2) {
        return (u1 = p1() ? Reflect.construct : function(e, t, a) {
            var i = [
                null
            ];
            i.push.apply(i, t);
            var s = new (Function.bind.apply(e, i));
            return a && d1(s, a.prototype), s;
        }).apply(null, arguments);
    }
    function c1(e5) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (c1 = function(e) {
            if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
            var a;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, i);
            }
            function i() {
                return u1(e, arguments, o1(this).constructor);
            }
            return i.prototype = Object.create(e.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), d1(i, e);
        })(e5);
    }
    var h1 = function(e6) {
        var t4, a3;
        function i2(t) {
            var a, i, s;
            return a = e6.call.apply(e6, [
                this
            ].concat(t)) || this, i = (function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            })(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
                get: function() {
                    return s;
                },
                set: function(e) {
                    s.__proto__ = e;
                }
            }), a;
        }
        return a3 = e6, (t4 = i2).prototype = Object.create(a3.prototype), t4.prototype.constructor = t4, t4.__proto__ = a3, i2;
    }(c1(Array));
    function v1(e7) {
        void 0 === e7 && (e7 = []);
        var t = [];
        return e7.forEach(function(e) {
            Array.isArray(e) ? t.push.apply(t, v1(e)) : t.push(e);
        }), t;
    }
    function f1(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function m1(e8, t5) {
        var a4 = l1(), i3 = r1(), s2 = [];
        if (!t5 && e8 instanceof h1) return e8;
        if (!e8) return new h1(s2);
        if ("string" == typeof e8) {
            var n = e8.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var o = "div";
                0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
                var d = i3.createElement(o);
                d.innerHTML = n;
                for(var p = 0; p < d.childNodes.length; p += 1)s2.push(d.childNodes[p]);
            } else s2 = (function(e, t) {
                if ("string" != typeof e) return [
                    e
                ];
                for(var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1)a.push(i[s]);
                return a;
            })(e8.trim(), t5 || i3);
        } else if (e8.nodeType || e8 === a4 || e8 === i3) s2.push(e8);
        else if (Array.isArray(e8)) {
            if (e8 instanceof h1) return e8;
            s2 = e8;
        }
        return new h1(function(e) {
            for(var t = [], a = 0; a < e.length; a += 1)-1 === t.indexOf(e[a]) && t.push(e[a]);
            return t;
        }(s2));
    }
    m1.fn = h1.prototype;
    var g1, y1, w1, b1 = {
        addClass: function() {
            for(var e9 = arguments.length, t6 = new Array(e9), a = 0; a < e9; a++)t6[a] = arguments[a];
            var i = v1(t6.map(function(e) {
                return e.split(" ");
            }));
            return this.forEach(function(e) {
                var t;
                (t = e.classList).add.apply(t, i);
            }), this;
        },
        removeClass: function() {
            for(var e10 = arguments.length, t7 = new Array(e10), a = 0; a < e10; a++)t7[a] = arguments[a];
            var i = v1(t7.map(function(e) {
                return e.split(" ");
            }));
            return this.forEach(function(e) {
                var t;
                (t = e.classList).remove.apply(t, i);
            }), this;
        },
        hasClass: function() {
            for(var e11 = arguments.length, t8 = new Array(e11), a = 0; a < e11; a++)t8[a] = arguments[a];
            var i = v1(t8.map(function(e) {
                return e.split(" ");
            }));
            return f1(this, function(e) {
                return i.filter(function(t) {
                    return e.classList.contains(t);
                }).length > 0;
            }).length > 0;
        },
        toggleClass: function() {
            for(var e12 = arguments.length, t9 = new Array(e12), a = 0; a < e12; a++)t9[a] = arguments[a];
            var i = v1(t9.map(function(e) {
                return e.split(" ");
            }));
            this.forEach(function(e) {
                i.forEach(function(t) {
                    e.classList.toggle(t);
                });
            });
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for(var a = 0; a < this.length; a += 1)if (2 === arguments.length) this[a].setAttribute(e, t);
            else for(var i in e)this[a][i] = e[i], this[a].setAttribute(i, e[i]);
            return this;
        },
        removeAttr: function(e) {
            for(var t = 0; t < this.length; t += 1)this[t].removeAttribute(e);
            return this;
        },
        transform: function(e) {
            for(var t = 0; t < this.length; t += 1)this[t].style.transform = e;
            return this;
        },
        transition: function(e) {
            for(var t = 0; t < this.length; t += 1)this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this;
        },
        on: function() {
            for(var e13 = arguments.length, t10 = new Array(e13), a5 = 0; a5 < e13; a5++)t10[a5] = arguments[a5];
            var i4 = t10[0], s = t10[1], r = t10[2], n2 = t10[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), m1(t).is(s)) r.apply(t, a);
                    else for(var i = m1(t).parents(), n = 0; n < i.length; n += 1)m1(i[n]).is(s) && r.apply(i[n], a);
                }
            }
            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t10[1] && (i4 = t10[0], r = t10[1], n2 = t10[2], s = void 0), n2 || (n2 = !1);
            for(var d, p = i4.split(" "), u = 0; u < this.length; u += 1){
                var c = this[u];
                if (s) for(d = 0; d < p.length; d += 1){
                    var h = p[d];
                    c.dom7LiveListeners || (c.dom7LiveListeners = {
                    }), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
                        listener: r,
                        proxyListener: l
                    }), c.addEventListener(h, l, n2);
                }
                else for(d = 0; d < p.length; d += 1){
                    var v = p[d];
                    c.dom7Listeners || (c.dom7Listeners = {
                    }), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
                        listener: r,
                        proxyListener: o
                    }), c.addEventListener(v, o, n2);
                }
            }
            return this;
        },
        off: function() {
            for(var e = arguments.length, t = new Array(e), a = 0; a < e; a++)t[a] = arguments[a];
            var i = t[0], s = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);
            for(var l = i.split(" "), o = 0; o < l.length; o += 1)for(var d = l[o], p = 0; p < this.length; p += 1){
                var u = this[p], c = void 0;
                if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length) for(var h = c.length - 1; h >= 0; h -= 1){
                    var v = c[h];
                    r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
                }
            }
            return this;
        },
        trigger: function() {
            for(var e = l1(), t11 = arguments.length, a = new Array(t11), i = 0; i < t11; i++)a[i] = arguments[i];
            for(var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)for(var o = s[n], d = 0; d < this.length; d += 1){
                var p = this[d];
                if (e.CustomEvent) {
                    var u = new e.CustomEvent(o, {
                        detail: r,
                        bubbles: !0,
                        cancelable: !0
                    });
                    p.dom7EventData = a.filter(function(e, t) {
                        return t > 0;
                    }), p.dispatchEvent(u), p.dom7EventData = [], delete p.dom7EventData;
                }
            }
            return this;
        },
        transitionEnd: function(e) {
            var t = this;
            return e && t.on("transitionend", function a(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", a));
            }), this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            var e = l1();
            return this[0] ? e.getComputedStyle(this[0], null) : {
            };
        },
        offset: function() {
            if (this.length > 0) {
                var e = l1(), t = r1(), a = this[0], i = a.getBoundingClientRect(), s = t.body, n = a.clientTop || s.clientTop || 0, o = a.clientLeft || s.clientLeft || 0, d = a === e ? e.scrollY : a.scrollTop, p = a === e ? e.scrollX : a.scrollLeft;
                return {
                    top: i.top + d - n,
                    left: i.left + p - o
                };
            }
            return null;
        },
        css: function(e, t) {
            var a, i = l1();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for(a = 0; a < this.length; a += 1)for(var s in e)this[a].style[s] = e[s];
                    return this;
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for(a = 0; a < this.length; a += 1)this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            return e ? (this.forEach(function(t, a) {
                e.apply(t, [
                    t,
                    a
                ]);
            }), this) : this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for(var t = 0; t < this.length; t += 1)this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for(var t = 0; t < this.length; t += 1)this[t].textContent = e;
            return this;
        },
        is: function(e) {
            var t, a, i = l1(), s = r1(), n = this[0];
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for(t = m1(e), a = 0; a < t.length; a += 1)if (t[a] === n) return !0;
                return !1;
            }
            if (e === s) return n === s;
            if (e === i) return n === i;
            if (e.nodeType || e instanceof h1) {
                for(t = e.nodeType ? [
                    e
                ] : e, a = 0; a < t.length; a += 1)if (t[a] === n) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for(e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return m1([]);
            if (e < 0) {
                var a = t + e;
                return m1(a < 0 ? [] : [
                    this[a]
                ]);
            }
            return m1([
                this[e]
            ]);
        },
        append: function() {
            for(var e, t = r1(), a = 0; a < arguments.length; a += 1){
                e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                for(var i = 0; i < this.length; i += 1)if ("string" == typeof e) {
                    var s = t.createElement("div");
                    for(s.innerHTML = e; s.firstChild;)this[i].appendChild(s.firstChild);
                } else if (e instanceof h1) for(var n = 0; n < e.length; n += 1)this[i].appendChild(e[n]);
                else this[i].appendChild(e);
            }
            return this;
        },
        prepend: function(e) {
            var t, a, i = r1();
            for(t = 0; t < this.length; t += 1)if ("string" == typeof e) {
                var s = i.createElement("div");
                for(s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
            } else if (e instanceof h1) for(a = 0; a < e.length; a += 1)this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && m1(this[0].nextElementSibling).is(e) ? m1([
                this[0].nextElementSibling
            ]) : m1([]) : this[0].nextElementSibling ? m1([
                this[0].nextElementSibling
            ]) : m1([]) : m1([]);
        },
        nextAll: function(e) {
            var t = [], a = this[0];
            if (!a) return m1([]);
            for(; a.nextElementSibling;){
                var i = a.nextElementSibling;
                e ? m1(i).is(e) && t.push(i) : t.push(i), a = i;
            }
            return m1(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && m1(t.previousElementSibling).is(e) ? m1([
                    t.previousElementSibling
                ]) : m1([]) : t.previousElementSibling ? m1([
                    t.previousElementSibling
                ]) : m1([]);
            }
            return m1([]);
        },
        prevAll: function(e) {
            var t = [], a = this[0];
            if (!a) return m1([]);
            for(; a.previousElementSibling;){
                var i = a.previousElementSibling;
                e ? m1(i).is(e) && t.push(i) : t.push(i), a = i;
            }
            return m1(t);
        },
        parent: function(e) {
            for(var t = [], a = 0; a < this.length; a += 1)null !== this[a].parentNode && (e ? m1(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return m1(t);
        },
        parents: function(e) {
            for(var t = [], a = 0; a < this.length; a += 1)for(var i = this[a].parentNode; i;)e ? m1(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return m1(t);
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? m1([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            for(var t = [], a = 0; a < this.length; a += 1)for(var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)t.push(i[s]);
            return m1(t);
        },
        children: function(e) {
            for(var t = [], a = 0; a < this.length; a += 1)for(var i = this[a].children, s = 0; s < i.length; s += 1)e && !m1(i[s]).is(e) || t.push(i[s]);
            return m1(t);
        },
        filter: function(e) {
            return m1(f1(this, e));
        },
        remove: function() {
            for(var e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        }
    };
    function E1(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function x1() {
        return Date.now();
    }
    function T1(e14, t) {
        void 0 === t && (t = "x");
        var a, i, s, r = l1(), n = r.getComputedStyle(e14, null);
        return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
            return e.replace(",", ".");
        }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }
    function C1(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
    }
    function S1() {
        for(var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1){
            var a = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != a) for(var i = Object.keys(Object(a)), s = 0, r = i.length; s < r; s += 1){
                var n = i[s], l = Object.getOwnPropertyDescriptor(a, n);
                void 0 !== l && l.enumerable && (C1(e[n]) && C1(a[n]) ? S1(e[n], a[n]) : !C1(e[n]) && C1(a[n]) ? (e[n] = {
                }, S1(e[n], a[n])) : e[n] = a[n]);
            }
        }
        return e;
    }
    function M1(e, t) {
        Object.keys(t).forEach(function(a) {
            C1(t[a]) && Object.keys(t[a]).forEach(function(i) {
                "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
            }), e[a] = t[a];
        });
    }
    function z1() {
        return g1 || (g1 = (function() {
            var e = l1(), t12 = r1();
            return {
                touch: !!("ontouchstart" in e || e.DocumentTouch && t12 instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: (function() {
                    var t = !1;
                    try {
                        var a = Object.defineProperty({
                        }, "passive", {
                            get: function() {
                                t = !0;
                            }
                        });
                        e.addEventListener("testPassiveListener", null, a);
                    } catch (e) {
                    }
                    return t;
                })(),
                gestures: "ongesturestart" in e
            };
        })()), g1;
    }
    function P1(e15) {
        return void 0 === e15 && (e15 = {
        }), y1 || (y1 = (function(e) {
            var t = (void 0 === e ? {
            } : e).userAgent, a = z1(), i = l1(), s = i.navigator.platform, r = t || i.navigator.userAgent, n = {
                ios: !1,
                android: !1
            }, o = i.screen.width, d = i.screen.height, p = r.match(/(Android);?[\s\/]+([\d.]+)?/), u = r.match(/(iPad).*OS\s([\d_]+)/), c = r.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), v = "Win32" === s, f = "MacIntel" === s;
            return !u && f && a.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(o + "x" + d) >= 0 && ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [
                0,
                1,
                "13_0_0"
            ]), f = !1), p && !v && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n;
        })(e15)), y1;
    }
    function k1() {
        return w1 || (w1 = (function() {
            var e, t = l1();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            };
        })()), w1;
    }
    Object.keys(b1).forEach(function(e) {
        m1.fn[e] = b1[e];
    });
    var L1 = {
        name: "resize",
        create: function() {
            var e = this;
            S1(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange");
                    }
                }
            });
        },
        on: {
            init: function(e) {
                var t = l1();
                t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
            },
            destroy: function(e) {
                var t = l1();
                t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
            }
        }
    }, $1 = {
        attach: function(e16, t13) {
            void 0 === t13 && (t13 = {
            });
            var a = l1(), i = this, s = new (a.MutationObserver || a.WebkitMutationObserver)(function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        i.emit("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
                } else i.emit("observerUpdate", e[0]);
            });
            s.observe(e16, {
                attributes: void 0 === t13.attributes || t13.attributes,
                childList: void 0 === t13.childList || t13.childList,
                characterData: void 0 === t13.characterData || t13.characterData
            }), i.observer.observers.push(s);
        },
        init: function() {
            var e = this;
            if (e.support.observer && e.params.observer) {
                if (e.params.observeParents) for(var t = e.$el.parents(), a = 0; a < t.length; a += 1)e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                });
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect();
            }), this.observer.observers = [];
        }
    }, I1 = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            M1(this, {
                observer: t1({
                }, $1, {
                    observers: []
                })
            });
        },
        on: {
            init: function(e) {
                e.observer.init();
            },
            destroy: function(e) {
                e.observer.destroy();
            }
        }
    };
    function O1(e) {
        var t = this, a = r1(), i = l1(), s = t.touchEventsData, n = t.params, o = t.touches;
        if (!t.animating || !n.preventInteractionOnTransition) {
            var d = e;
            d.originalEvent && (d = d.originalEvent);
            var p = m1(d.target);
            if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) {
                if (s.isTouchEvent = "touchstart" === d.type, s.isTouchEvent || !("which" in d) || 3 !== d.which) {
                    if (!(!s.isTouchEvent && "button" in d && d.button > 0)) {
                        if (!s.isTouched || !s.isMoved) {
                            if (!!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m1(e.path[0])), n.noSwiping && p.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) t.allowClick = !0;
                            else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                                o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
                                var u = o.currentX, c = o.currentY, h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection, v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                                if (h && (u <= v || u >= i.innerWidth - v)) {
                                    if ("prevent" !== h) return;
                                    e.preventDefault();
                                }
                                if (S1(s, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), o.startX = u, o.startY = c, s.touchStartTime = x1(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
                                    var f = !0;
                                    p.is(s.formElements) && (f = !1), a.activeElement && m1(a.activeElement).is(s.formElements) && a.activeElement !== p[0] && a.activeElement.blur();
                                    var g = f && t.allowTouchMove && n.touchStartPreventDefault;
                                    !n.touchStartForcePreventDefault && !g || p[0].isContentEditable || d.preventDefault();
                                }
                                t.emit("touchStart", d);
                            }
                        }
                    }
                }
            }
        }
    }
    function A1(e) {
        var t = r1(), a = this, i = a.touchEventsData, s = a.params, n = a.touches, l = a.rtlTranslate, o = e;
        if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "touchmove" === o.type) {
                var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]), p = "touchmove" === o.type ? d.pageX : o.pageX, u = "touchmove" === o.type ? d.pageY : o.pageY;
                if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = u);
                if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (S1(n, {
                    startX: p,
                    startY: u,
                    currentX: p,
                    currentY: u
                }), i.touchStartTime = x1()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
                    if (a.isVertical()) {
                        if (u < n.startY && a.translate <= a.maxTranslate() || u > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
                    } else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
                }
                if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m1(o.target).is(i.formElements)) return i.isMoved = !0, void (a.allowClick = !1);
                if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                    n.currentX = p, n.currentY = u;
                    var c = n.currentX - n.startX, h = n.currentY - n.startY;
                    if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
                        if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                            var f = a.isHorizontal() ? c : h;
                            n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var g = !0, y = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (y = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, y))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, y))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: n[a.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: n[a.isHorizontal() ? "currentX" : "currentY"],
                                time: x1()
                            })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
    function D1(e) {
        var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, l = t.slidesGrid, o = t.snapGrid, d = e;
        if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, u = x1(), c = u - a.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x1(), E1(function() {
            t.destroyed || (t.allowClick = !0);
        }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
        if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) {
            if (i.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (a.velocities.length > 1) {
                        var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position, m = h.time - v.time;
                        t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x1() - h.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                    var g = 1000 * i.freeModeMomentumRatio, y = t.velocity * g, w = t.translate + y;
                    r && (w = -w);
                    var b, T, C = !1, S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), b = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);
                    else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), b = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);
                    else if (i.freeModeSticky) {
                        for(var M, z = 0; z < o.length; z += 1)if (o[z] > -w) {
                            M = z;
                            break;
                        }
                        w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
                    }
                    if (T && t.once("transitionEnd", function() {
                        t.loopFix();
                    }), 0 !== t.velocity) {
                        if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
                            var P = Math.abs((r ? -w : w) - t.translate), k = t.slidesSizesGrid[t.activeIndex];
                            g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
                        }
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                        t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function() {
                            t.setTranslate(b), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd();
                            });
                        }, 0));
                    })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd();
                    }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
                } else if (i.freeModeSticky) return void t.slideToClosest();
                (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
                for(var L = 0, $ = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup){
                    var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && (L = I, $ = l[I + O] - l[I]) : p >= l[I] && (L = I, $ = l[l.length - 1] - l[l.length - 2]);
                }
                var A = (p - l[L]) / $, D = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (c > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L));
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(L + D) : t.slideTo(L) : ("next" === t.swipeDirection && t.slideTo(L + D), "prev" === t.swipeDirection && t.slideTo(L));
                }
            }
        }
    }
    function G1() {
        var e = this, t = e.params, a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
    }
    function N1(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function B1() {
        var e = this, t = e.wrapperEl, a = e.rtlTranslate;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var i = e.maxTranslate() - e.minTranslate();
        (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
    var H1 = !1;
    function X1() {
    }
    var Y1 = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        nested: !1,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    }, V1 = {
        modular: {
            useParams: function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach(function(a) {
                    var i = t.modules[a];
                    i.params && S1(e, i.params);
                });
            },
            useModules: function(e17) {
                void 0 === e17 && (e17 = {
                });
                var t = this;
                t.modules && Object.keys(t.modules).forEach(function(a) {
                    var i = t.modules[a], s = e17[a] || {
                    };
                    i.on && t.on && Object.keys(i.on).forEach(function(e) {
                        t.on(e, i.on[e]);
                    }), i.create && i.create.bind(t)(s);
                });
            }
        },
        eventsEmitter: {
            on: function(e, t, a) {
                var i = this;
                if ("function" != typeof t) return i;
                var s = a ? "unshift" : "push";
                return e.split(" ").forEach(function(e) {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
                }), i;
            },
            once: function(e, t, a6) {
                var i = this;
                if ("function" != typeof t) return i;
                function s() {
                    i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                    for(var a = arguments.length, r = new Array(a), n = 0; n < a; n++)r[n] = arguments[n];
                    t.apply(i, r);
                }
                return s.__emitterProxy = t, i.on(e, s, a6);
            },
            onAny: function(e, t) {
                var a = this;
                if ("function" != typeof e) return a;
                var i = t ? "unshift" : "push";
                return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
            },
            offAny: function(e) {
                var t = this;
                if (!t.eventsAnyListeners) return t;
                var a = t.eventsAnyListeners.indexOf(e);
                return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
            },
            off: function(e, t) {
                var a = this;
                return a.eventsListeners ? (e.split(" ").forEach(function(e) {
                    void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function(i, s) {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
                    });
                }), a) : a;
            },
            emit: function() {
                var e18, t, a, i5 = this;
                if (!i5.eventsListeners) return i5;
                for(var s = arguments.length, r = new Array(s), n = 0; n < s; n++)r[n] = arguments[n];
                "string" == typeof r[0] || Array.isArray(r[0]) ? (e18 = r[0], t = r.slice(1, r.length), a = i5) : (e18 = r[0].events, t = r[0].data, a = r[0].context || i5), t.unshift(a);
                var l = Array.isArray(e18) ? e18 : e18.split(" ");
                return l.forEach(function(e19) {
                    i5.eventsAnyListeners && i5.eventsAnyListeners.length && i5.eventsAnyListeners.forEach(function(i) {
                        i.apply(a, [
                            e19
                        ].concat(t));
                    }), i5.eventsListeners && i5.eventsListeners[e19] && i5.eventsListeners[e19].forEach(function(e) {
                        e.apply(a, t);
                    });
                }), i5;
            }
        },
        update: {
            updateSize: function() {
                var e, t, a = this, i = a.$el;
                e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S1(a, {
                    width: e,
                    height: t,
                    size: a.isHorizontal() ? e : t
                }));
            },
            updateSlides: function() {
                var e20 = this, t14 = l1(), a = e20.params, i = e20.$wrapperEl, s = e20.size, r = e20.rtlTranslate, n = e20.wrongRTL, o = e20.virtual && a.virtual.enabled, d = o ? e20.virtual.slides.length : e20.slides.length, p = i.children("." + e20.params.slideClass), u = o ? e20.virtual.slides.length : p.length, c = [], h = [], v = [];
                function f(e, t) {
                    return !a.cssMode || t !== p.length - 1;
                }
                var m = a.slidesOffsetBefore;
                "function" == typeof m && (m = a.slidesOffsetBefore.call(e20));
                var g = a.slidesOffsetAfter;
                "function" == typeof g && (g = a.slidesOffsetAfter.call(e20));
                var y = e20.snapGrid.length, w = e20.slidesGrid.length, b = a.spaceBetween, E = -m, x = 0, T = 0;
                if (void 0 !== s) {
                    var C, M;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), e20.virtualSize = -b, r ? p.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : p.css({
                        marginRight: "",
                        marginBottom: ""
                    }), a.slidesPerColumn > 1 && (C = Math.floor(u / a.slidesPerColumn) === u / e20.params.slidesPerColumn ? u : Math.ceil(u / a.slidesPerColumn) * a.slidesPerColumn, "auto" !== a.slidesPerView && "row" === a.slidesPerColumnFill && (C = Math.max(C, a.slidesPerView * a.slidesPerColumn)));
                    for(var z, P = a.slidesPerColumn, k = C / P, L = Math.floor(u / a.slidesPerColumn), $ = 0; $ < u; $ += 1){
                        M = 0;
                        var I = p.eq($);
                        if (a.slidesPerColumn > 1) {
                            var O = void 0, A = void 0, D = void 0;
                            if ("row" === a.slidesPerColumnFill && a.slidesPerGroup > 1) {
                                var G = Math.floor($ / (a.slidesPerGroup * a.slidesPerColumn)), N = $ - a.slidesPerColumn * a.slidesPerGroup * G, B = 0 === G ? a.slidesPerGroup : Math.min(Math.ceil((u - G * P * a.slidesPerGroup) / P), a.slidesPerGroup);
                                O = (A = N - (D = Math.floor(N / B)) * B + G * a.slidesPerGroup) + D * C / P, I.css({
                                    "-webkit-box-ordinal-group": O,
                                    "-moz-box-ordinal-group": O,
                                    "-ms-flex-order": O,
                                    "-webkit-order": O,
                                    order: O
                                });
                            } else "column" === a.slidesPerColumnFill ? (D = $ - (A = Math.floor($ / P)) * P, (A > L || A === L && D === P - 1) && (D += 1) >= P && (D = 0, A += 1)) : A = $ - (D = Math.floor($ / k)) * k;
                            I.css("margin-" + (e20.isHorizontal() ? "top" : "left"), 0 !== D && a.spaceBetween && a.spaceBetween + "px");
                        }
                        if ("none" !== I.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                var H = t14.getComputedStyle(I[0], null), X = I[0].style.transform, Y = I[0].style.webkitTransform;
                                if (X && (I[0].style.transform = "none"), Y && (I[0].style.webkitTransform = "none"), a.roundLengths) M = e20.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                                else if (e20.isHorizontal()) {
                                    var V = parseFloat(H.getPropertyValue("width") || 0), F = parseFloat(H.getPropertyValue("padding-left") || 0), R = parseFloat(H.getPropertyValue("padding-right") || 0), W = parseFloat(H.getPropertyValue("margin-left") || 0), q = parseFloat(H.getPropertyValue("margin-right") || 0), j = H.getPropertyValue("box-sizing");
                                    if (j && "border-box" === j) M = V + W + q;
                                    else {
                                        var _ = I[0], U = _.clientWidth;
                                        M = V + F + R + W + q + (_.offsetWidth - U);
                                    }
                                } else {
                                    var K = parseFloat(H.getPropertyValue("height") || 0), Z = parseFloat(H.getPropertyValue("padding-top") || 0), J = parseFloat(H.getPropertyValue("padding-bottom") || 0), Q = parseFloat(H.getPropertyValue("margin-top") || 0), ee = parseFloat(H.getPropertyValue("margin-bottom") || 0), te = H.getPropertyValue("box-sizing");
                                    if (te && "border-box" === te) M = K + Q + ee;
                                    else {
                                        var ae = I[0], ie = ae.clientHeight;
                                        M = K + Z + J + Q + ee + (ae.offsetHeight - ie);
                                    }
                                }
                                X && (I[0].style.transform = X), Y && (I[0].style.webkitTransform = Y), a.roundLengths && (M = Math.floor(M));
                            } else M = (s - (a.slidesPerView - 1) * b) / a.slidesPerView, a.roundLengths && (M = Math.floor(M)), p[$] && (e20.isHorizontal() ? p[$].style.width = M + "px" : p[$].style.height = M + "px");
                            p[$] && (p[$].swiperSlideSize = M), v.push(M), a.centeredSlides ? (E = E + M / 2 + x / 2 + b, 0 === x && 0 !== $ && (E = E - s / 2 - b), 0 === $ && (E = E - s / 2 - b), Math.abs(E) < 0.001 && (E = 0), a.roundLengths && (E = Math.floor(E)), T % a.slidesPerGroup == 0 && c.push(E), h.push(E)) : (a.roundLengths && (E = Math.floor(E)), (T - Math.min(e20.params.slidesPerGroupSkip, T)) % e20.params.slidesPerGroup == 0 && c.push(E), h.push(E), E = E + M + b), e20.virtualSize += M + b, x = M, T += 1;
                        }
                    }
                    if (e20.virtualSize = Math.max(e20.virtualSize, s) + g, r && n && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                        width: e20.virtualSize + a.spaceBetween + "px"
                    }), a.setWrapperSize && (e20.isHorizontal() ? i.css({
                        width: e20.virtualSize + a.spaceBetween + "px"
                    }) : i.css({
                        height: e20.virtualSize + a.spaceBetween + "px"
                    })), a.slidesPerColumn > 1 && (e20.virtualSize = (M + a.spaceBetween) * C, e20.virtualSize = Math.ceil(e20.virtualSize / a.slidesPerColumn) - a.spaceBetween, e20.isHorizontal() ? i.css({
                        width: e20.virtualSize + a.spaceBetween + "px"
                    }) : i.css({
                        height: e20.virtualSize + a.spaceBetween + "px"
                    }), a.centeredSlides)) {
                        z = [];
                        for(var se = 0; se < c.length; se += 1){
                            var re = c[se];
                            a.roundLengths && (re = Math.floor(re)), c[se] < e20.virtualSize + c[0] && z.push(re);
                        }
                        c = z;
                    }
                    if (!a.centeredSlides) {
                        z = [];
                        for(var ne = 0; ne < c.length; ne += 1){
                            var le = c[ne];
                            a.roundLengths && (le = Math.floor(le)), c[ne] <= e20.virtualSize - s && z.push(le);
                        }
                        c = z, Math.floor(e20.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(e20.virtualSize - s);
                    }
                    if (0 === c.length && (c = [
                        0
                    ]), 0 !== a.spaceBetween && (e20.isHorizontal() ? r ? p.filter(f).css({
                        marginLeft: b + "px"
                    }) : p.filter(f).css({
                        marginRight: b + "px"
                    }) : p.filter(f).css({
                        marginBottom: b + "px"
                    })), a.centeredSlides && a.centeredSlidesBounds) {
                        var oe = 0;
                        v.forEach(function(e) {
                            oe += e + (a.spaceBetween ? a.spaceBetween : 0);
                        });
                        var de = (oe -= a.spaceBetween) - s;
                        c = c.map(function(e) {
                            return e < 0 ? -m : e > de ? de + g : e;
                        });
                    }
                    if (a.centerInsufficientSlides) {
                        var pe = 0;
                        if (v.forEach(function(e) {
                            pe += e + (a.spaceBetween ? a.spaceBetween : 0);
                        }), (pe -= a.spaceBetween) < s) {
                            var ue = (s - pe) / 2;
                            c.forEach(function(e, t) {
                                c[t] = e - ue;
                            }), h.forEach(function(e, t) {
                                h[t] = e + ue;
                            });
                        }
                    }
                    S1(e20, {
                        slides: p,
                        snapGrid: c,
                        slidesGrid: h,
                        slidesSizesGrid: v
                    }), u !== d && e20.emit("slidesLengthChange"), c.length !== y && (e20.params.watchOverflow && e20.checkOverflow(), e20.emit("snapGridLengthChange")), h.length !== w && e20.emit("slidesGridLengthChange"), (a.watchSlidesProgress || a.watchSlidesVisibility) && e20.updateSlidesOffset();
                }
            },
            updateAutoHeight: function(e21) {
                var t, a = this, i = [], s = 0;
                if ("number" == typeof e21 ? a.setTransition(e21) : !0 === e21 && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
                    if (a.params.centeredSlides) a.visibleSlides.each(function(e) {
                        i.push(e);
                    });
                    else for(t = 0; t < Math.ceil(a.params.slidesPerView); t += 1){
                        var r = a.activeIndex + t;
                        if (r > a.slides.length) break;
                        i.push(a.slides.eq(r)[0]);
                    }
                } else i.push(a.slides.eq(a.activeIndex)[0]);
                for(t = 0; t < i.length; t += 1)if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = n > s ? n : s;
                }
                s && a.$wrapperEl.css("height", s + "px");
            },
            updateSlidesOffset: function() {
                for(var e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this, a = t.params, i = t.slides, s = t.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = -e;
                    s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for(var n = 0; n < i.length; n += 1){
                        var l = i[n], o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
                        if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
                            var d = -(r - l.swiperSlideOffset), p = d + t.slidesSizesGrid[n];
                            (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
                        }
                        l.progress = s ? -o : o;
                    }
                    t.visibleSlides = m1(t.visibleSlides);
                }
            },
            updateProgress: function(e) {
                var t = this;
                if (void 0 === e) {
                    var a = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * a || 0;
                }
                var i = t.params, s = t.maxTranslate() - t.minTranslate(), r = t.progress, n = t.isBeginning, l = t.isEnd, o = n, d = l;
                0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), S1(t, {
                    progress: r,
                    isBeginning: n,
                    isEnd: l
                }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r);
            },
            updateSlidesClasses: function() {
                var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, l = t.virtual && i.virtual.enabled;
                a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
                var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
            },
            updateActiveIndex: function(e) {
                var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, l = a.activeIndex, o = a.realIndex, d = a.snapIndex, p = e;
                if (void 0 === p) {
                    for(var u = 0; u < s.length; u += 1)void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
                    n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
                }
                if (r.indexOf(i) >= 0) t = r.indexOf(i);
                else {
                    var c = Math.min(n.slidesPerGroupSkip, p);
                    t = c + Math.floor((p - c) / n.slidesPerGroup);
                }
                if (t >= r.length && (t = r.length - 1), p !== l) {
                    var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                    S1(a, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: l,
                        activeIndex: p
                    }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
                } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
            },
            updateClickedSlide: function(e) {
                var t = this, a = t.params, i = m1(e.target).closest("." + a.slideClass)[0], s = !1;
                if (i) for(var r = 0; r < t.slides.length; r += 1)t.slides[r] === i && (s = !0);
                if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(m1(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = m1(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
            }
        },
        translate: {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this, a = t.params, i = t.rtlTranslate, s = t.translate, r = t.$wrapperEl;
                if (a.virtualTranslate) return i ? -s : s;
                if (a.cssMode) return s;
                var n = T1(r[0], e);
                return i && (n = -n), n || 0;
            },
            setTranslate: function(e, t) {
                var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.wrapperEl, l = a.progress, o = 0, d = 0;
                a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
                var p = a.maxTranslate() - a.minTranslate();
                (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
            },
            minTranslate: function() {
                return -this.snapGrid[0];
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function(e22, t, a, i, s) {
                void 0 === e22 && (e22 = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
                var r = this, n = r.params, l = r.wrapperEl;
                if (r.animating && n.preventInteractionOnTransition) return !1;
                var o, d = r.minTranslate(), p = r.maxTranslate();
                if (o = i && e22 > d ? d : i && e22 < p ? p : e22, r.updateProgress(o), n.cssMode) {
                    var u, c = r.isHorizontal();
                    if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;
                    else if (l.scrollTo) l.scrollTo(((u = {
                    })[c ? "left" : "top"] = -o, u.behavior = "smooth", u));
                    else l[c ? "scrollLeft" : "scrollTop"] = -o;
                    return !0;
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
            }
        },
        transition: {
            setTransition: function(e, t) {
                var a = this;
                a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex;
                if (!s.cssMode) {
                    s.autoHeight && a.updateAutoHeight();
                    var n = t;
                    if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                        if ("reset" === n) return void a.emit("slideResetTransitionStart");
                        a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
                    }
                }
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var a = this, i = a.activeIndex, s = a.previousIndex, r = a.params;
                if (a.animating = !1, !r.cssMode) {
                    a.setTransition(0);
                    var n = t;
                    if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                        if ("reset" === n) return void a.emit("slideResetTransitionEnd");
                        a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
                    }
                }
            }
        },
        slide: {
            slideTo: function(e23, t, a, i) {
                if (void 0 === e23 && (e23 = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e23 && "string" != typeof e23) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e23 + "] given.");
                if ("string" == typeof e23) {
                    var s = parseInt(e23, 10);
                    if (!isFinite(s)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e23 + "] given.");
                    e23 = s;
                }
                var r = this, n = e23;
                n < 0 && (n = 0);
                var l = r.params, o = r.snapGrid, d = r.slidesGrid, p = r.previousIndex, u = r.activeIndex, c = r.rtlTranslate, h = r.wrapperEl;
                if (r.animating && l.preventInteractionOnTransition) return !1;
                var v = Math.min(r.params.slidesPerGroupSkip, n), f = v + Math.floor((n - v) / r.params.slidesPerGroup);
                f >= o.length && (f = o.length - 1), (u || l.initialSlide || 0) === (p || 0) && a && r.emit("beforeSlideChangeStart");
                var m, g = -o[f];
                if (r.updateProgress(g), l.normalizeSlideIndex) for(var y = 0; y < d.length; y += 1){
                    var w = -Math.floor(100 * g), b = Math.floor(100 * d[y]), E = Math.floor(100 * d[y + 1]);
                    void 0 !== d[y + 1] ? w >= b && w < E - (E - b) / 2 ? n = y : w >= b && w < E && (n = y + 1) : w >= b && (n = y);
                }
                if (r.initialized && n !== u) {
                    if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (u || 0) !== n) return !1;
                }
                if (m = n > u ? "next" : n < u ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)), !1;
                if (l.cssMode) {
                    var x, T = r.isHorizontal(), C = -g;
                    if (c && (C = h.scrollWidth - h.offsetWidth - C), 0 === t) h[T ? "scrollLeft" : "scrollTop"] = C;
                    else if (h.scrollTo) h.scrollTo(((x = {
                    })[T ? "left" : "top"] = C, x.behavior = "smooth", x));
                    else h[T ? "scrollLeft" : "scrollTop"] = C;
                    return !0;
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(a, m), r.transitionEnd(a, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(a, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(a, m));
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
            },
            slideToLoop: function(e, t, a, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                var s = this, r = e;
                return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
            },
            slideNext: function(e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this, s = i.params, r = i.animating, n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (r && s.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
                }
                return i.slideTo(i.activeIndex + n, e, t, a);
            },
            slidePrev: function(e24, t, a) {
                void 0 === e24 && (e24 = this.params.speed), void 0 === t && (t = !0);
                var i = this, s = i.params, r = i.animating, n = i.snapGrid, l = i.slidesGrid, o = i.rtlTranslate;
                if (s.loop) {
                    if (r && s.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                var p = d(o ? i.translate : -i.translate), u = n.map(function(e) {
                    return d(e);
                });
                n[u.indexOf(p)];
                var c, h = n[u.indexOf(p) - 1];
                return void 0 === h && s.cssMode && n.forEach(function(e) {
                    !h && p >= e && (h = e);
                }), void 0 !== h && (c = l.indexOf(h)) < 0 && (c = i.activeIndex - 1), i.slideTo(c, e24, t, a);
            },
            slideReset: function(e, t, a) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
            },
            slideToClosest: function(e, t, a, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = 0.5);
                var s = this, r = s.activeIndex, n = Math.min(s.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / s.params.slidesPerGroup), o = s.rtlTranslate ? s.translate : -s.translate;
                if (o >= s.snapGrid[l]) {
                    var d = s.snapGrid[l];
                    o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup);
                } else {
                    var p = s.snapGrid[l - 1];
                    o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
                }
                return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
            },
            slideToClickedSlide: function() {
                var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
                if (a.loop) {
                    if (t.animating) return;
                    e = parseInt(m1(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E1(function() {
                        t.slideTo(r);
                    })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E1(function() {
                        t.slideTo(r);
                    })) : t.slideTo(r);
                } else t.slideTo(r);
            }
        },
        loop: {
            loopCreate: function() {
                var e = this, t15 = r1(), a7 = e.params, i6 = e.$wrapperEl;
                i6.children("." + a7.slideClass + "." + a7.slideDuplicateClass).remove();
                var s = i6.children("." + a7.slideClass);
                if (a7.loopFillGroupWithBlank) {
                    var n = a7.slidesPerGroup - s.length % a7.slidesPerGroup;
                    if (n !== a7.slidesPerGroup) {
                        for(var l = 0; l < n; l += 1){
                            var o = m1(t15.createElement("div")).addClass(a7.slideClass + " " + a7.slideBlankClass);
                            i6.append(o);
                        }
                        s = i6.children("." + a7.slideClass);
                    }
                }
                "auto" !== a7.slidesPerView || a7.loopedSlides || (a7.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a7.loopedSlides || a7.slidesPerView, 10)), e.loopedSlides += a7.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
                var d = [], p = [];
                s.each(function(t, a) {
                    var i = m1(t);
                    a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
                });
                for(var u = 0; u < p.length; u += 1)i6.append(m1(p[u].cloneNode(!0)).addClass(a7.slideDuplicateClass));
                for(var c = d.length - 1; c >= 0; c -= 1)i6.prepend(m1(d[c].cloneNode(!0)).addClass(a7.slideDuplicateClass));
            },
            loopFix: function() {
                var e = this;
                e.emit("beforeLoopFix");
                var t, a = e.activeIndex, i = e.slides, s = e.loopedSlides, r = e.allowSlidePrev, n = e.allowSlideNext, l = e.snapGrid, o = e.rtlTranslate;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                var d = -l[a] - e.getTranslate();
                if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
                else if (a >= i.length - s) t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
                e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
            },
            loopDestroy: function() {
                var e = this, t = e.$wrapperEl, a = e.params, i = e.slides;
                t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                var t = this;
                if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                    var a = t.el;
                    a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
                }
            },
            unsetGrabCursor: function() {
                var e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
            }
        },
        manipulation: {
            appendSlide: function(e) {
                var t = this, a = t.$wrapperEl, i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for(var s = 0; s < e.length; s += 1)e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
            },
            prependSlide: function(e) {
                var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for(var n = 0; n < e.length; n += 1)e[n] && i.prepend(e[n]);
                    r = s + e.length;
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
            },
            addSlide: function(e, t) {
                var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex;
                s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (e >= n) a.appendSlide(t);
                else {
                    for(var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1){
                        var p = a.slides.eq(d);
                        p.remove(), o.unshift(p);
                    }
                    if ("object" == typeof t && "length" in t) {
                        for(var u = 0; u < t.length; u += 1)t[u] && i.append(t[u]);
                        l = r > e ? r + t.length : r;
                    } else i.append(t);
                    for(var c = 0; c < o.length; c += 1)i.append(o[c]);
                    s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
                }
            },
            removeSlide: function(e) {
                var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
                a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for(var l = 0; l < e.length; l += 1)r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0);
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
            },
            removeAllSlides: function() {
                for(var e = [], t = 0; t < this.slides.length; t += 1)e.push(t);
                this.removeSlide(e);
            }
        },
        events: {
            attachEvents: function() {
                var e = this, t = r1(), a = e.params, i = e.touchEvents, s = e.el, n = e.wrapperEl, l = e.device, o = e.support;
                e.onTouchStart = O1.bind(e), e.onTouchMove = A1.bind(e), e.onTouchEnd = D1.bind(e), a.cssMode && (e.onScroll = B1.bind(e)), e.onClick = N1.bind(e);
                var d = !!a.nested;
                if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);
                else {
                    if (o.touch) {
                        var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: d
                        } : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), H1 || (t.addEventListener("touchstart", X1), H1 = !0);
                    }
                    (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
                }
                (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G1, !0) : e.on("observerUpdate", G1, !0);
            },
            detachEvents: function() {
                var e = this, t = r1(), a = e.params, i = e.touchEvents, s = e.el, n = e.wrapperEl, l = e.device, o = e.support, d = !!a.nested;
                if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);
                else {
                    if (o.touch) {
                        var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
                    }
                    (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
                }
                (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G1);
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e25 = this, t16 = e25.activeIndex, a = e25.initialized, i = e25.loopedSlides, s = void 0 === i ? 0 : i, r = e25.params, n = e25.$el, l = r.breakpoints;
                if (l && (!l || 0 !== Object.keys(l).length)) {
                    var o = e25.getBreakpoint(l);
                    if (o && e25.currentBreakpoint !== o) {
                        var d = o in l ? l[o] : void 0;
                        d && [
                            "slidesPerView",
                            "spaceBetween",
                            "slidesPerGroup",
                            "slidesPerGroupSkip",
                            "slidesPerColumn"
                        ].forEach(function(e) {
                            var t = d[e];
                            void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
                        });
                        var p = d || e25.originalParams, u = r.slidesPerColumn > 1, c = p.slidesPerColumn > 1;
                        u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e25.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), "column" === p.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), e25.emitContainerClasses());
                        var h = p.direction && p.direction !== r.direction, v = r.loop && (p.slidesPerView !== r.slidesPerView || h);
                        h && a && e25.changeDirection(), S1(e25.params, p), S1(e25, {
                            allowTouchMove: e25.params.allowTouchMove,
                            allowSlideNext: e25.params.allowSlideNext,
                            allowSlidePrev: e25.params.allowSlidePrev
                        }), e25.currentBreakpoint = o, e25.emit("_beforeBreakpoint", p), v && a && (e25.loopDestroy(), e25.loopCreate(), e25.updateSlides(), e25.slideTo(t16 - s + e25.loopedSlides, 0, !1)), e25.emit("breakpoint", p);
                    }
                }
            },
            getBreakpoint: function(e26) {
                var t17 = l1();
                if (e26) {
                    var a8 = !1, i = Object.keys(e26).map(function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var a = parseFloat(e.substr(1));
                            return {
                                value: t17.innerHeight * a,
                                point: e
                            };
                        }
                        return {
                            value: e,
                            point: e
                        };
                    });
                    i.sort(function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10);
                    });
                    for(var s = 0; s < i.length; s += 1){
                        var r = i[s], n = r.point;
                        r.value <= t17.innerWidth && (a8 = n);
                    }
                    return a8 || "max";
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this, t = e.params, a = e.isLocked, i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
            }
        },
        classes: {
            addClasses: function() {
                var e27 = this, t = e27.classNames, a = e27.params, i = e27.rtl, s = e27.$el, r = e27.device, n = e27.support, l = [];
                l.push("initialized"), l.push(a.direction), n.pointerEvents && !n.touch && l.push("pointer-events"), a.freeMode && l.push("free-mode"), a.autoHeight && l.push("autoheight"), i && l.push("rtl"), a.slidesPerColumn > 1 && (l.push("multirow"), "column" === a.slidesPerColumnFill && l.push("multirow-column")), r.android && l.push("android"), r.ios && l.push("ios"), a.cssMode && l.push("css-mode"), l.forEach(function(e) {
                    t.push(a.containerModifierClass + e);
                }), s.addClass(t.join(" ")), e27.emitContainerClasses();
            },
            removeClasses: function() {
                var e = this, t = e.$el, a = e.classNames;
                t.removeClass(a.join(" ")), e.emitContainerClasses();
            }
        },
        images: {
            loadImage: function(e, t, a, i, s, r) {
                var n, o = l1();
                function d() {
                    r && r();
                }
                m1(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d();
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for(var a = 0; a < e.imagesToLoad.length; a += 1){
                    var i = e.imagesToLoad[a];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, F1 = {
    }, R1 = function() {
        function t18() {
            for(var e28, a, i8 = arguments.length, s4 = new Array(i8), r = 0; r < i8; r++)s4[r] = arguments[r];
            if (1 === s4.length && s4[0].constructor && s4[0].constructor === Object ? a = s4[0] : (e28 = s4[0], a = s4[1]), a || (a = {
            }), a = S1({
            }, a), e28 && !a.el && (a.el = e28), a.el && m1(a.el).length > 1) {
                var n = [];
                return m1(a.el).each(function(e) {
                    var i = S1({
                    }, a, {
                        el: e
                    });
                    n.push(new t18(i));
                }), n;
            }
            var l = this;
            l.support = z1(), l.device = P1({
                userAgent: a.userAgent
            }), l.browser = k1(), l.eventsListeners = {
            }, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {
            }), Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], s = t.params[i];
                    if ("object" != typeof s || null === s) return;
                    if (!(i in a) || !("enabled" in s)) return;
                    !0 === a[i] && (a[i] = {
                        enabled: !0
                    }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
                        enabled: !1
                    });
                }
            });
            var o, d, p = S1({
            }, Y1);
            return l.useParams(p), l.params = S1({
            }, p, F1, a), l.originalParams = S1({
            }, l.params), l.passedParams = S1({
            }, a), l.params && l.params.on && Object.keys(l.params.on).forEach(function(e) {
                l.on(e, l.params.on[e]);
            }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m1, S1(l, {
                el: e28,
                classNames: [],
                slides: m1(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function() {
                    return "horizontal" === l.params.direction;
                },
                isVertical: function() {
                    return "vertical" === l.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEvents: (o = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel"
                ], d = [
                    "mousedown",
                    "mousemove",
                    "mouseup"
                ], l.support.pointerEvents && (d = [
                    "pointerdown",
                    "pointermove",
                    "pointerup"
                ]), l.touchEventsTouch = {
                    start: o[0],
                    move: o[1],
                    end: o[2],
                    cancel: o[3]
                }, l.touchEventsDesktop = {
                    start: d[0],
                    move: d[1],
                    end: d[2]
                }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video, label",
                    lastClickTime: x1(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
        }
        var a10, i7, s3, r2 = t18.prototype;
        return r2.emitContainerClasses = function() {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t19 = e.el.className.split(" ").filter(function(t) {
                    return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
                });
                e.emit("_containerClasses", t19.join(" "));
            }
        }, r2.getSlideClasses = function(e29) {
            var t = this;
            return e29.className.split(" ").filter(function(e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
            }).join(" ");
        }, r2.emitSlidesClasses = function() {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each(function(a) {
                    var i = e.getSlideClasses(a);
                    t.push({
                        slideEl: a,
                        classNames: i
                    }), e.emit("_slideClass", a, i);
                }), e.emit("_slideClasses", t);
            }
        }, r2.slidesPerViewDynamic = function() {
            var e = this, t = e.params, a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1;
            if (t.centeredSlides) {
                for(var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
                for(var p = r - 1; p >= 0; p -= 1)a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0));
            } else for(var u = r + 1; u < a.length; u += 1)i[u] - i[r] < s && (n += 1);
            return n;
        }, r2.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, a = e.params;
                a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }
            function i() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate, a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
            }
        }, r2.changeDirection = function(e, t21) {
            void 0 === t21 && (t21 = !0);
            var a = this, i = a.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function(t) {
                "vertical" === e ? t.style.width = "" : t.style.height = "";
            }), a.emit("changeDirection"), t21 && a.update()), a;
        }, r2.mount = function(e30) {
            var t = this;
            if (t.mounted) return !0;
            var a, i = m1(e30 || t.params.el);
            return !!(e30 = i[0]) && (e30.swiper = t, e30 && e30.shadowRoot && e30.shadowRoot.querySelector ? (a = m1(e30.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function(e) {
                return i.children(e);
            } : a = i.children("." + t.params.wrapperClass), S1(t, {
                $el: i,
                el: e30,
                $wrapperEl: a,
                wrapperEl: a[0],
                mounted: !0,
                rtl: "rtl" === e30.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e30.dir.toLowerCase() || "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === a.css("display")
            }), !0);
        }, r2.init = function(e) {
            var t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
        }, r2.destroy = function(e31, t) {
            void 0 === e31 && (e31 = !0), void 0 === t && (t = !0);
            var a, i = this, s = i.params, r = i.$el, n = i.$wrapperEl, l = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([
                s.slideVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e);
            }), !1 !== e31 && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function(e) {
                try {
                    a[e] = null;
                } catch (e32) {
                }
                try {
                    delete a[e];
                } catch (e33) {
                }
            })), i.destroyed = !0), null;
        }, t18.extendDefaults = function(e) {
            S1(F1, e);
        }, t18.installModule = function(e) {
            t18.prototype.modules || (t18.prototype.modules = {
            });
            var a = e.name || Object.keys(t18.prototype.modules).length + "_" + x1();
            t18.prototype.modules[a] = e;
        }, t18.use = function(e34) {
            return Array.isArray(e34) ? (e34.forEach(function(e) {
                return t18.installModule(e);
            }), t18) : (t18.installModule(e34), t18);
        }, a10 = t18, s3 = [
            {
                key: "extendedDefaults",
                get: function() {
                    return F1;
                }
            },
            {
                key: "defaults",
                get: function() {
                    return Y1;
                }
            }
        ], i7 = null, s3 && e1(a10, s3), t18;
    }();
    Object.keys(V1).forEach(function(e) {
        Object.keys(V1[e]).forEach(function(t) {
            R1.prototype[t] = V1[e][t];
        });
    }), R1.use([
        L1,
        I1
    ]);
    var W1 = {
        update: function(e35) {
            var t22 = this, a = t22.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides, n = t22.params.virtual, l = n.addSlidesBefore, o = n.addSlidesAfter, d = t22.virtual, p = d.from, u = d.to, c = d.slides, h = d.slidesGrid, v = d.renderSlide, f = d.offset;
            t22.updateActiveIndex();
            var m, g, y, w = t22.activeIndex || 0;
            m = t22.rtlTranslate ? "right" : t22.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, y = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, y = s + l);
            var b = Math.max((w || 0) - y, 0), E = Math.min((w || 0) + g, c.length - 1), x = (t22.slidesGrid[b] || 0) - (t22.slidesGrid[0] || 0);
            function T() {
                t22.updateSlides(), t22.updateProgress(), t22.updateSlidesClasses(), t22.lazy && t22.params.lazy.enabled && t22.lazy.load();
            }
            if (S1(t22.virtual, {
                from: b,
                to: E,
                offset: x,
                slidesGrid: t22.slidesGrid
            }), p === b && u === E && !e35) return t22.slidesGrid !== h && x !== f && t22.slides.css(m, x + "px"), void t22.updateProgress();
            if (t22.params.virtual.renderExternal) return t22.params.virtual.renderExternal.call(t22, {
                offset: x,
                from: b,
                to: E,
                slides: function() {
                    for(var e = [], t = b; t <= E; t += 1)e.push(c[t]);
                    return e;
                }()
            }), void (t22.params.virtual.renderExternalUpdate && T());
            var C = [], M = [];
            if (e35) t22.$wrapperEl.find("." + t22.params.slideClass).remove();
            else for(var z = p; z <= u; z += 1)(z < b || z > E) && t22.$wrapperEl.find("." + t22.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
            for(var P = 0; P < c.length; P += 1)P >= b && P <= E && (void 0 === u || e35 ? M.push(P) : (P > u && M.push(P), P < p && C.push(P)));
            M.forEach(function(e) {
                t22.$wrapperEl.append(v(c[e], e));
            }), C.sort(function(e, t) {
                return t - e;
            }).forEach(function(e) {
                t22.$wrapperEl.prepend(v(c[e], e));
            }), t22.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
        },
        renderSlide: function(e, t) {
            var a = this, i = a.params.virtual;
            if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
            var s = i.renderSlide ? m1(i.renderSlide.call(a, e, t)) : m1('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
        },
        appendSlide: function(e) {
            var t = this;
            if ("object" == typeof e && "length" in e) for(var a = 0; a < e.length; a += 1)e[a] && t.virtual.slides.push(e[a]);
            else t.virtual.slides.push(e);
            t.virtual.update(!0);
        },
        prependSlide: function(e) {
            var t23 = this, a11 = t23.activeIndex, i = a11 + 1, s = 1;
            if (Array.isArray(e)) {
                for(var r = 0; r < e.length; r += 1)e[r] && t23.virtual.slides.unshift(e[r]);
                i = a11 + e.length, s = e.length;
            } else t23.virtual.slides.unshift(e);
            if (t23.params.virtual.cache) {
                var n = t23.virtual.cache, l = {
                };
                Object.keys(n).forEach(function(e) {
                    var t = n[e], a = t.attr("data-swiper-slide-index");
                    a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t;
                }), t23.virtual.cache = l;
            }
            t23.virtual.update(!0), t23.slideTo(i, 0);
        },
        removeSlide: function(e) {
            var t = this;
            if (null != e) {
                var a = t.activeIndex;
                if (Array.isArray(e)) for(var i = e.length - 1; i >= 0; i -= 1)t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
                else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
                t.virtual.update(!0), t.slideTo(a, 0);
            }
        },
        removeAllSlides: function() {
            var e = this;
            e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {
            }), e.virtual.update(!0), e.slideTo(0, 0);
        }
    }, q1 = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            M1(this, {
                virtual: t1({
                }, W1, {
                    slides: this.params.virtual.slides,
                    cache: {
                    }
                })
            });
        },
        on: {
            beforeInit: function(e) {
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    S1(e.params, t), S1(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                }
            },
            setTranslate: function(e) {
                e.params.virtual.enabled && e.virtual.update();
            }
        }
    }, j1 = {
        handle: function(e) {
            var t = this, a = l1(), i = r1(), s = t.rtlTranslate, n = e;
            n.originalEvent && (n = n.originalEvent);
            var o = n.keyCode || n.charCode, d = t.params.keyboard.pageUpDown, p = d && 33 === o, u = d && 34 === o, c = 37 === o, h = 39 === o, v = 38 === o, f = 40 === o;
            if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && v || p)) return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (p || u || c || h || v || f)) {
                    var m = !1;
                    if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                    var g = a.innerWidth, y = a.innerHeight, w = t.$el.offset();
                    s && (w.left -= t.$el[0].scrollLeft);
                    for(var b = [
                        [
                            w.left,
                            w.top
                        ],
                        [
                            w.left + t.width,
                            w.top
                        ],
                        [
                            w.left,
                            w.top + t.height
                        ],
                        [
                            w.left + t.width,
                            w.top + t.height
                        ]
                    ], E = 0; E < b.length; E += 1){
                        var x = b[E];
                        if (x[0] >= 0 && x[0] <= g && x[1] >= 0 && x[1] <= y) {
                            if (0 === x[0] && 0 === x[1]) continue;
                            m = !0;
                        }
                    }
                    if (!m) return;
                }
                t.isHorizontal() ? ((p || u || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((u || h) && !s || (p || c) && s) && t.slideNext(), ((p || c) && !s || (u || h) && s) && t.slidePrev()) : ((p || u || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (u || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o);
            }
        },
        enable: function() {
            var e = this, t = r1();
            e.keyboard.enabled || (m1(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
        },
        disable: function() {
            var e = this, t = r1();
            e.keyboard.enabled && (m1(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
        }
    }, _1 = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        },
        create: function() {
            M1(this, {
                keyboard: t1({
                    enabled: !1
                }, j1)
            });
        },
        on: {
            init: function(e) {
                e.params.keyboard.enabled && e.keyboard.enable();
            },
            destroy: function(e) {
                e.keyboard.enabled && e.keyboard.disable();
            }
        }
    };
    var U1 = {
        lastScrollTime: x1(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return l1().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : (function() {
                var e = r1(), t = "onwheel", a = t in e;
                if (!a) {
                    var i = e.createElement("div");
                    i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
                }
                return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
            })() ? "wheel" : "mousewheel";
        },
        normalize: function(e) {
            var t = 0, a = 0, i = 0, s = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            };
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0;
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1;
        },
        handle: function(e) {
            var t = e, a = this, i = a.params.mousewheel;
            a.params.cssMode && t.preventDefault();
            var s = a.$el;
            if ("container" !== a.params.mousewheel.eventsTarget && (s = m1(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0, n = a.rtlTranslate ? -1 : 1, l = U1.normalize(t);
            if (i.forceToAxis) {
                if (a.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                    r = -l.pixelX * n;
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                    r = -l.pixelY;
                }
            } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
            if (0 === r) return !0;
            i.invert && (r = -r);
            var o = a.getTranslate() + r * i.sensitivity;
            if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
                var d = {
                    time: x1(),
                    delta: Math.abs(r),
                    direction: Math.sign(r)
                }, p = a.mousewheel.lastEventBeforeSnap, u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;
                if (!u) {
                    a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
                    var c = a.getTranslate() + r * i.sensitivity, h = a.isBeginning, v = a.isEnd;
                    if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
                        clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
                        var f = a.mousewheel.recentWheelEvents;
                        f.length >= 15 && f.shift();
                        var g = f.length ? f[f.length - 1] : void 0, y = f[0];
                        if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);
                        else if (f.length >= 15 && d.time - y.time < 500 && y.delta - d.delta >= 1 && d.delta <= 6) {
                            var w = r > 0 ? 0.8 : 0.2;
                            a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E1(function() {
                                a.slideToClosest(a.params.speed, !0, void 0, w);
                            }, 0);
                        }
                        a.mousewheel.timeout || (a.mousewheel.timeout = E1(function() {
                            a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                        }, 500));
                    }
                    if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0;
                }
            } else {
                var b = {
                    time: x1(),
                    delta: Math.abs(r),
                    direction: Math.sign(r),
                    raw: e
                }, T = a.mousewheel.recentWheelEvents;
                T.length >= 2 && T.shift();
                var C = T.length ? T[T.length - 1] : void 0;
                if (T.push(b), C ? (b.direction !== C.direction || b.delta > C.delta || b.time > C.time + 150) && a.mousewheel.animateSlider(b) : a.mousewheel.animateSlider(b), a.mousewheel.releaseScroll(b)) return !0;
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
        },
        animateSlider: function(e) {
            var t = this, a = l1();
            return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x1() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x1() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new a.Date).getTime(), !1));
        },
        releaseScroll: function(e) {
            var t = this, a = t.params.mousewheel;
            if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
            } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
            return !1;
        },
        enable: function() {
            var e = this, t = U1.event();
            if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (e.mousewheel.enabled) return !1;
            var a = e.$el;
            return "container" !== e.params.mousewheel.eventsTarget && (a = m1(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
        },
        disable: function() {
            var e = this, t = U1.event();
            if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (!e.mousewheel.enabled) return !1;
            var a = e.$el;
            return "container" !== e.params.mousewheel.eventsTarget && (a = m1(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
        }
    }, K1 = {
        update: function() {
            var e = this, t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation, i = a.$nextEl, s = a.$prevEl;
                s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
            }
        },
        onPrevClick: function(e) {
            var t = this;
            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
        },
        onNextClick: function(e) {
            var t = this;
            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
        },
        init: function() {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = m1(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m1(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), S1(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }));
        },
        destroy: function() {
            var e = this, t = e.navigation, a = t.$nextEl, i = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
        }
    }, Z1 = {
        update: function() {
            var e36 = this, t24 = e36.rtl, a = e36.params.pagination;
            if (a.el && e36.pagination.el && e36.pagination.$el && 0 !== e36.pagination.$el.length) {
                var i, s5 = e36.virtual && e36.params.virtual.enabled ? e36.virtual.slides.length : e36.slides.length, r = e36.pagination.$el, n = e36.params.loop ? Math.ceil((s5 - 2 * e36.loopedSlides) / e36.params.slidesPerGroup) : e36.snapGrid.length;
                if (e36.params.loop ? ((i = Math.ceil((e36.activeIndex - e36.loopedSlides) / e36.params.slidesPerGroup)) > s5 - 1 - 2 * e36.loopedSlides && (i -= s5 - 2 * e36.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e36.params.paginationType && (i = n + i)) : i = void 0 !== e36.snapIndex ? e36.snapIndex : e36.activeIndex || 0, "bullets" === a.type && e36.pagination.bullets && e36.pagination.bullets.length > 0) {
                    var l, o, d, p = e36.pagination.bullets;
                    if (a.dynamicBullets && (e36.pagination.bulletSize = p.eq(0)[e36.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e36.isHorizontal() ? "width" : "height", e36.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e36.previousIndex && (e36.pagination.dynamicBulletIndex += i - e36.previousIndex, e36.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e36.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e36.pagination.dynamicBulletIndex < 0 && (e36.pagination.dynamicBulletIndex = 0)), l = i - e36.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function(e) {
                        var t = m1(e), s = t.index();
                        s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
                    });
                    else {
                        var u = p.eq(i), c = u.index();
                        if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
                            for(var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1)p.eq(f).addClass(a.bulletActiveClass + "-main");
                            if (e36.params.loop) {
                                if (c >= p.length - a.dynamicMainBullets) {
                                    for(var g = a.dynamicMainBullets; g >= 0; g -= 1)p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                                } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
                            } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
                        }
                    }
                    if (a.dynamicBullets) {
                        var y = Math.min(p.length, a.dynamicMainBullets + 4), w = (e36.pagination.bulletSize * y - e36.pagination.bulletSize) / 2 - d * e36.pagination.bulletSize, b = t24 ? "right" : "left";
                        p.css(e36.isHorizontal() ? b : "top", w + "px");
                    }
                }
                if ("fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(i + 1)), r.find("." + a.totalClass).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
                    var E;
                    E = a.progressbarOpposite ? e36.isHorizontal() ? "vertical" : "horizontal" : e36.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / n, T = 1, C = 1;
                    "horizontal" === E ? T = x : C = x, r.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e36.params.speed);
                }
                "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e36, i + 1, n)), e36.emit("paginationRender", r[0])) : e36.emit("paginationUpdate", r[0]), r[e36.params.watchOverflow && e36.isLocked ? "addClass" : "removeClass"](a.lockClass);
            }
        },
        render: function() {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, s = "";
                if ("bullets" === t.type) {
                    var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && !e.params.loop && r > a && (r = a);
                    for(var n = 0; n < r; n += 1)t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s), e.pagination.bullets = i.find("." + t.bulletClass.replace(/ /g, "."));
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
            }
        },
        init: function() {
            var e = this, t25 = e.params.pagination;
            if (t25.el) {
                var a12 = m1(t25.el);
                0 !== a12.length && (e.params.uniqueNavElements && "string" == typeof t25.el && a12.length > 1 && (a12 = e.$el.find(t25.el)), "bullets" === t25.type && t25.clickable && a12.addClass(t25.clickableClass), a12.addClass(t25.modifierClass + t25.type), "bullets" === t25.type && t25.dynamicBullets && (a12.addClass("" + t25.modifierClass + t25.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t25.dynamicMainBullets < 1 && (t25.dynamicMainBullets = 1)), "progressbar" === t25.type && t25.progressbarOpposite && a12.addClass(t25.progressbarOppositeClass), t25.clickable && a12.on("click", "." + t25.bulletClass.replace(/ /g, "."), function(t) {
                    t.preventDefault();
                    var a = m1(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                }), S1(e.pagination, {
                    $el: a12,
                    el: a12[0]
                }));
            }
        },
        destroy: function() {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass.replace(/ /g, "."));
            }
        }
    }, J1 = {
        setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl, l = t.$el, o = e.params.scrollbar, d = s, p = (r - s) * i;
                a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                    l[0].style.opacity = 0, l.transition(400);
                }, 1000));
            }
        },
        setTransition: function(e) {
            var t = this;
            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = t.$dragEl, i = t.$el;
                a[0].style.width = "", a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, l = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), S1(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: l,
                    dragSize: s
                }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function(e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, l = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
        },
        onDragStart: function(e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl;
            t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
        },
        onDragMove: function(e) {
            var t = this, a = t.scrollbar, i = t.$wrapperEl, s = a.$el, r = a.$dragEl;
            t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
        },
        onDragEnd: function(e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E1(function() {
                r.css("opacity", 0), r.transition(400);
            }, 1000)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = r1(), a = e.scrollbar, i = e.touchEventsTouch, s = e.touchEventsDesktop, n = e.params, l = e.support, o = a.$el[0], d = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, p = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
            }
        },
        disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = r1(), a = e.scrollbar, i = e.touchEventsTouch, s = e.touchEventsDesktop, n = e.params, l = e.support, o = a.$el[0], d = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, p = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
            }
        },
        init: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = m1(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = m1('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), S1(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && t.enableDraggable();
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable();
        }
    }, Q1 = {
        setTransform: function(e, t) {
            var a = this.rtl, i = m1(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0", n = i.attr("data-swiper-parallax-x"), l = i.attr("data-swiper-parallax-y"), o = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity");
            if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p;
            }
            if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
            else {
                var u = o - (o - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")");
            }
        },
        setTranslate: function() {
            var e = this, t26 = e.$el, a14 = e.slides, i = e.progress, s = e.snapGrid;
            t26.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t) {
                e.parallax.setTransform(t, i);
            }), a14.each(function(t27, a) {
                var r = t27.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m1(t27).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t) {
                    e.parallax.setTransform(t, r);
                });
            });
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t) {
                var a = m1(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0), a.transition(i);
            });
        }
    }, ee1 = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
        },
        onGestureStart: function(e) {
            var t = this, a = t.support, i = t.params.zoom, s = t.zoom, r = s.gesture;
            if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                s.fakeGestureTouched = !0, r.scaleStart = ee1.getDistanceBetweenTouches(e);
            }
            r.$slideEl && r.$slideEl.length || (r.$slideEl = m1(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
        },
        onGestureChange: function(e) {
            var t = this, a = t.support, i = t.params.zoom, s = t.zoom, r = s.gesture;
            if (!a.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                s.fakeGestureMoved = !0, r.scaleMove = ee1.getDistanceBetweenTouches(e);
            }
            r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
        },
        onGestureEnd: function(e) {
            var t = this, a = t.device, i = t.support, s = t.params.zoom, r = t.zoom, n = r.gesture;
            if (!i.gestures) {
                if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
                r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
            }
            n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
        },
        onTouchStart: function(e) {
            var t = this.device, a = this.zoom, i = a.gesture, s = a.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
        },
        onTouchMove: function(e) {
            var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T1(i.$imageWrapEl[0], "x") || 0, s.startY = T1(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var n = s.width * a.scale, l = s.height * a.scale;
                if (!(n < i.slideWidth && l < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
                    }
                    e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
                a.isTouched = !1, a.isMoved = !1;
                var s = 300, r = 300, n = i.x * s, l = a.currentX + n, o = i.y * r, d = a.currentY + o;
                0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = l, a.currentY = d;
                var u = a.width * e.scale, c = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
            }
        },
        onTransitionEnd: function() {
            var e = this, t = e.zoom, a = t.gesture;
            a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function(e) {
            var t, a, i, s, r, n, o, d, p, u, c, h, v, f, m, g, y = this, w = l1(), b = y.zoom, E = y.params.zoom, x = b.gesture, T = b.image;
            (x.$slideEl || (y.params.virtual && y.params.virtual.enabled && y.virtual ? x.$slideEl = y.$wrapperEl.children("." + y.params.slideActiveClass) : x.$slideEl = y.slides.eq(y.activeIndex), x.$imageEl = x.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), x.$imageWrapEl = x.$imageEl.parent("." + E.containerClass)), x.$imageEl && 0 !== x.$imageEl.length) && (x.$slideEl.addClass("" + E.zoomedSlideClass), void 0 === T.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = T.touchesStart.x, a = T.touchesStart.y), b.scale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio, b.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio, e ? (m = x.$slideEl[0].offsetWidth, g = x.$slideEl[0].offsetHeight, i = x.$slideEl.offset().left + w.scrollX + m / 2 - t, s = x.$slideEl.offset().top + w.scrollY + g / 2 - a, o = x.$imageEl[0].offsetWidth, d = x.$imageEl[0].offsetHeight, p = o * b.scale, u = d * b.scale, v = -(c = Math.min(m / 2 - p / 2, 0)), f = -(h = Math.min(g / 2 - u / 2, 0)), (r = i * b.scale) < c && (r = c), r > v && (r = v), (n = s * b.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), x.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
        },
        out: function() {
            var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture;
            i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
        },
        toggleGestures: function(e) {
            var t = this, a = t.zoom, i = a.slideSelector, s = a.passiveListener;
            t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
        },
        enableGestures: function() {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
        },
        disableGestures: function() {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
        },
        enable: function() {
            var e = this, t = e.support, a = e.zoom;
            if (!a.enabled) {
                a.enabled = !0;
                var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, s = !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }, r = "." + e.params.slideClass;
                e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
            }
        },
        disable: function() {
            var e = this, t = e.zoom;
            if (t.enabled) {
                var a = e.support;
                e.zoom.enabled = !1;
                var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, s = !a.passiveListener || {
                    passive: !1,
                    capture: !0
                }, r = "." + e.params.slideClass;
                a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
            }
        }
    }, te1 = {
        loadInSlide: function(e37, t28) {
            void 0 === t28 && (t28 = !0);
            var a = this, i = a.params.lazy;
            if (void 0 !== e37 && 0 !== a.slides.length) {
                var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e37 + '"]') : a.slides.eq(e37), r3 = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
                !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r3.push(s[0]), 0 !== r3.length && r3.each(function(e38) {
                    var r = m1(e38);
                    r.addClass(i.loadingClass);
                    var n = r.attr("data-background"), l = r.attr("data-src"), o = r.attr("data-srcset"), d = r.attr("data-sizes"), p = r.parent("picture");
                    a.loadImage(r[0], l || n, o, d, !1, function() {
                        if (null != a && a && (!a || a.params) && !a.destroyed) {
                            if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function(e) {
                                var t = m1(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                            }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t28) {
                                var e39 = s.attr("data-swiper-slide-index");
                                if (s.hasClass(a.params.slideDuplicateClass)) {
                                    var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e39 + '"]:not(.' + a.params.slideDuplicateClass + ")");
                                    a.lazy.loadInSlide(u.index(), !1);
                                } else {
                                    var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e39 + '"]');
                                    a.lazy.loadInSlide(c.index(), !1);
                                }
                            }
                            a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
                        }
                    }), a.emit("lazyImageLoad", s[0], r[0]);
                });
            }
        },
        load: function() {
            var e41 = this, t29 = e41.$wrapperEl, a15 = e41.params, i = e41.slides, s = e41.activeIndex, r = e41.virtual && a15.virtual.enabled, n = a15.lazy, l = a15.slidesPerView;
            function o(e) {
                if (r) {
                    if (t29.children("." + a15.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                } else if (i[e]) return !0;
                return !1;
            }
            function d(e) {
                return r ? m1(e).attr("data-swiper-slide-index") : m1(e).index();
            }
            if ("auto" === l && (l = 0), e41.lazy.initialImageLoaded || (e41.lazy.initialImageLoaded = !0), e41.params.watchSlidesVisibility) t29.children("." + a15.slideVisibleClass).each(function(t) {
                var a = r ? m1(t).attr("data-swiper-slide-index") : m1(t).index();
                e41.lazy.loadInSlide(a);
            });
            else if (l > 1) for(var p = s; p < s + l; p += 1)o(p) && e41.lazy.loadInSlide(p);
            else e41.lazy.loadInSlide(s);
            if (n.loadPrevNext) {
                if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    for(var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + l; f < h; f += 1)o(f) && e41.lazy.loadInSlide(f);
                    for(var g = v; g < s; g += 1)o(g) && e41.lazy.loadInSlide(g);
                } else {
                    var y = t29.children("." + a15.slideNextClass);
                    y.length > 0 && e41.lazy.loadInSlide(d(y));
                    var w = t29.children("." + a15.slidePrevClass);
                    w.length > 0 && e41.lazy.loadInSlide(d(w));
                }
            }
        },
        checkInViewOnLoad: function() {
            var e = l1(), t = this;
            if (t && !t.destroyed) {
                var a = t.params.lazy.scrollingElement ? m1(t.params.lazy.scrollingElement) : m1(e), i = a[0] === e, s = i ? e.innerWidth : a[0].offsetWidth, r = i ? e.innerHeight : a[0].offsetHeight, n = t.$el.offset(), o = !1;
                t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
                for(var d = [
                    [
                        n.left,
                        n.top
                    ],
                    [
                        n.left + t.width,
                        n.top
                    ],
                    [
                        n.left,
                        n.top + t.height
                    ],
                    [
                        n.left + t.width,
                        n.top + t.height
                    ]
                ], p = 0; p < d.length; p += 1){
                    var u = d[p];
                    if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
                        if (0 === u[0] && 0 === u[1]) continue;
                        o = !0;
                    }
                }
                o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad));
            }
        }
    }, ae1 = {
        LinearSpline: function(e42, t30) {
            var a, i, s, r, n, l = function(e, t) {
                for(i = -1, a = e.length; a - i > 1;)e[s = a + i >> 1] <= t ? i = s : a = s;
                return a;
            };
            return this.x = e42, this.y = t30, this.lastIndex = e42.length - 1, this.interpolate = function(e) {
                return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
            }, this;
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new ae1.LinearSpline(t.slidesGrid, e.slidesGrid) : new ae1.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function(e43, t31) {
            var a, i, s = this, r = s.controller.control, n = s.constructor;
            function l(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            if (Array.isArray(r)) for(var o = 0; o < r.length; o += 1)r[o] !== t31 && r[o] instanceof n && l(r[o]);
            else r instanceof n && t31 !== r && l(r);
        },
        setTransition: function(e, t32) {
            var a, i = this, s = i.constructor, r = i.controller.control;
            function n(t) {
                t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E1(function() {
                    t.updateAutoHeight();
                }), t.$wrapperEl.transitionEnd(function() {
                    r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
            }
            if (Array.isArray(r)) for(a = 0; a < r.length; a += 1)r[a] !== t32 && r[a] instanceof s && n(r[a]);
            else r instanceof s && t32 !== r && n(r);
        }
    }, ie1 = {
        getRandomNumber: function(e) {
            void 0 === e && (e = 16);
            return "x".repeat(e).replace(/x/g, function() {
                return Math.round(16 * Math.random()).toString(16);
            });
        },
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"), e;
        },
        makeElNotFocusable: function(e) {
            return e.attr("tabIndex", "-1"), e;
        },
        addElRole: function(e, t) {
            return e.attr("role", t), e;
        },
        addElRoleDescription: function(e, t) {
            return e.attr("aria-role-description", t), e;
        },
        addElControls: function(e, t) {
            return e.attr("aria-controls", t), e;
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t), e;
        },
        addElId: function(e, t) {
            return e.attr("id", t), e;
        },
        addElLive: function(e, t) {
            return e.attr("aria-live", t), e;
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0), e;
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function(e) {
            var t = this, a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = m1(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) && i[0].click();
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function() {
            var e = this;
            if (!e.params.loop && e.navigation) {
                var t = e.navigation, a = t.$nextEl, i = t.$prevEl;
                i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
            }
        },
        updatePagination: function() {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(a) {
                var i = m1(a);
                e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
            });
        },
        init: function() {
            var e = this, t33 = e.params.a11y;
            e.$el.append(e.a11y.liveRegion);
            var a16 = e.$el;
            t33.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a16, t33.containerRoleDescriptionMessage), t33.containerMessage && e.a11y.addElLabel(a16, t33.containerMessage);
            var i, s, r, n = e.$wrapperEl, l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
            e.a11y.addElId(n, l), i = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, i), t33.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m1(e.slides), t33.itemRoleDescriptionMessage), e.a11y.addElRole(m1(e.slides), "group"), e.slides.each(function(t) {
                var a = m1(t);
                e.a11y.addElLabel(a, a.index() + 1 + " / " + e.slides.length);
            }), e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(s, t33.nextSlideMessage), e.a11y.addElControls(s, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t33.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass.replace(/ /g, "."), e.a11y.onEnterKey);
        },
        destroy: function() {
            var e, t, a = this;
            a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass.replace(/ /g, "."), a.a11y.onEnterKey);
        }
    }, se1 = {
        init: function() {
            var e = this, t = l1();
            if (e.params.history) {
                if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                var a = e.history;
                a.initialized = !0, a.paths = se1.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
            }
        },
        destroy: function() {
            var e = l1();
            this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function() {
            var e = this;
            e.history.paths = se1.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
        },
        getPathValues: function(e44) {
            var t = l1(), a = (e44 ? new URL(e44) : t.location).pathname.slice(1).split("/").filter(function(e) {
                return "" !== e;
            }), i = a.length;
            return {
                key: a[i - 2],
                value: a[i - 1]
            };
        },
        setHistory: function(e, t) {
            var a = this, i = l1();
            if (a.history.initialized && a.params.history.enabled) {
                var s;
                s = a.params.url ? new URL(a.params.url) : i.location;
                var r = a.slides.eq(t), n = se1.slugify(r.attr("data-history"));
                s.pathname.includes(e) || (n = e + "/" + n);
                var o = i.history.state;
                o && o.value === n || (a.params.history.replaceState ? i.history.replaceState({
                    value: n
                }, null, n) : i.history.pushState({
                    value: n
                }, null, n));
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t) for(var s = 0, r = i.slides.length; s < r; s += 1){
                var n = i.slides.eq(s);
                if (se1.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                    var l = n.index();
                    i.slideTo(l, e, a);
                }
            }
            else i.slideTo(0, e, a);
        }
    }, re1 = {
        onHashCange: function() {
            var e = this, t = r1();
            e.emit("hashChange");
            var a = t.location.hash.replace("#", "");
            if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
                if (void 0 === i) return;
                e.slideTo(i);
            }
        },
        setHash: function() {
            var e = this, t = l1(), a = r1();
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) {
                if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash")), e.emit("hashSet");
                else {
                    var i = e.slides.eq(e.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                    a.location.hash = s || "", e.emit("hashSet");
                }
            }
        },
        init: function() {
            var e = this, t = r1(), a = l1();
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var i = t.location.hash.replace("#", "");
                if (i) for(var s = 0, n = e.slides.length; s < n; s += 1){
                    var o = e.slides.eq(s);
                    if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
                        var d = o.index();
                        e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
                    }
                }
                e.params.hashNavigation.watchState && m1(a).on("hashchange", e.hashNavigation.onHashCange);
            }
        },
        destroy: function() {
            var e = l1();
            this.params.hashNavigation.watchState && m1(e).off("hashchange", this.hashNavigation.onHashCange);
        }
    }, ne1 = {
        run: function() {
            var e = this, t34 = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay;
            t34.attr("data-swiper-autoplay") && (a = t34.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E1(function() {
                var t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
            }, a);
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
        },
        onVisibilityChange: function() {
            var e = this, t = r1();
            "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
        },
        onTransitionEnd: function(e) {
            var t = this;
            t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
        }
    }, le1 = {
        setTranslate: function() {
            for(var e = this, t = e.slides, a = 0; a < t.length; a += 1){
                var i = e.slides.eq(a), s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s, s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: n
                }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
            }
        },
        setTransition: function(e45) {
            var t = this, a17 = t.slides, i = t.$wrapperEl;
            if (a17.transition(e45), t.params.virtualTranslate && 0 !== e45) {
                var s = !1;
                a17.transitionEnd(function() {
                    if (!s && t && !t.destroyed) {
                        s = !0, t.animating = !1;
                        for(var e = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], a = 0; a < e.length; a += 1)i.trigger(e[a]);
                    }
                });
            }
        }
    }, oe1 = {
        setTranslate: function() {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, l = t.rtlTranslate, o = t.size, d = t.browser, p = t.params.cubeEffect, u = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, h = 0;
            p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m1('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                height: r + "px"
            })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m1('<div class="swiper-cube-shadow"></div>'), a.append(e)));
            for(var v = 0; v < s.length; v += 1){
                var f = s.eq(v), g = v;
                c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
                var y = 90 * g, w = Math.floor(y / 360);
                l && (y = -y, w = Math.floor(-y / 360));
                var b = Math.max(Math.min(f[0].progress, 1), -1), E = 0, x = 0, T = 0;
                g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), u || (x = E, E = 0);
                var C = "rotateX(" + (u ? 0 : -y) + "deg) rotateY(" + (u ? y : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";
                if (b <= 1 && b > -1 && (h = 90 * g + 90 * b, l && (h = 90 * -g - 90 * b)), f.transform(C), p.slideShadows) {
                    var S = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), M = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = m1('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m1('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-b, 0)), M.length && (M[0].style.opacity = Math.max(b, 0));
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                "transform-origin": "50% 50% -" + o / 2 + "px"
            }), p.shadow) {
                if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                else {
                    var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90), P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2), k = p.shadowScale, L = p.shadowScale / P, $ = p.shadowOffset;
                    e.transform("scale3d(" + k + ", 1, " + L + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / L + "px) rotateX(-90deg)");
                }
            }
            var I = d.isSafari || d.isWebView ? -o / 2 : 0;
            i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
        },
        setTransition: function(e) {
            var t = this, a = t.$el;
            t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
        }
    }, de1 = {
        setTranslate: function() {
            for(var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1){
                var s = t.eq(i), r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r, l = 0, o = -s[0].swiperSlideOffset, d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"), u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = m1('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = m1('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0));
                }
                s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)");
            }
        },
        setTransition: function(e46) {
            var t = this, a18 = t.slides, i = t.activeIndex, s = t.$wrapperEl;
            if (a18.transition(e46).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e46), t.params.virtualTranslate && 0 !== e46) {
                var r = !1;
                a18.eq(i).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for(var e = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], a = 0; a < e.length; a += 1)s.trigger(e[a]);
                    }
                });
            }
        }
    }, pe1 = {
        setTranslate: function() {
            for(var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1){
                var h = i.eq(u), v = s[u], f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier, g = n ? d * f : 0, y = n ? 0 : d * f, w = -p * Math.abs(f), b = r.stretch;
                "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(r.stretch) / 100 * v);
                var E = n ? 0 : b * f, x = n ? b * f : 0, T = 1 - (1 - r.scale) * Math.abs(f);
                Math.abs(x) < 0.001 && (x = 0), Math.abs(E) < 0.001 && (E = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(T) < 0.001 && (T = 0);
                var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + y + "deg) rotateY(" + g + "deg) scale(" + T + ")";
                if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
                    var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"), M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = m1('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m1('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
                }
            }
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        }
    }, ue1 = {
        init: function() {
            var e = this, t = e.params.thumbs;
            if (e.thumbs.initialized) return !1;
            e.thumbs.initialized = !0;
            var a = e.constructor;
            return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, S1(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), S1(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : C1(t.swiper) && (e.thumbs.swiper = new a(S1({
            }, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
        },
        onThumbClick: function() {
            var e = this, t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex, i = t.clickedSlide;
                if (!(i && m1(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                    var s;
                    if (s = t.params.loop ? parseInt(m1(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                        var r = e.activeIndex;
                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                        var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(), l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
                    }
                    e.slideTo(s);
                }
            }
        },
        update: function(e) {
            var t = this, a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView, s = t.params.thumbs.autoScrollOffset, r = s && !a.params.loop;
                if (t.realIndex !== a.realIndex || r) {
                    var n, l, o = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
                        var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev";
                    } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
                    r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && (n = n - i + 1), a.slideTo(n, e ? 0 : void 0));
                }
                var u = 1, c = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled) for(var h = 0; h < u; h += 1)a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
                else for(var v = 0; v < u; v += 1)a.slides.eq(t.realIndex + v).addClass(c);
            }
        }
    }, ce = [
        q1,
        _1,
        {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function() {
                M1(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: x1(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: U1.enable,
                        disable: U1.disable,
                        handle: U1.handle,
                        handleMouseEnter: U1.handleMouseEnter,
                        handleMouseLeave: U1.handleMouseLeave,
                        animateSlider: U1.animateSlider,
                        releaseScroll: U1.releaseScroll
                    }
                });
            },
            on: {
                init: function(e) {
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
                },
                destroy: function(e) {
                    e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
                }
            }
        },
        {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                M1(this, {
                    navigation: t1({
                    }, K1)
                });
            },
            on: {
                init: function(e) {
                    e.navigation.init(), e.navigation.update();
                },
                toEdge: function(e) {
                    e.navigation.update();
                },
                fromEdge: function(e) {
                    e.navigation.update();
                },
                destroy: function(e) {
                    e.navigation.destroy();
                },
                click: function(e, t) {
                    var a, i = e.navigation, s = i.$nextEl, r = i.$prevEl;
                    !e.params.navigation.hideOnClick || m1(t.target).is(r) || m1(t.target).is(s) || (s ? a = s.hasClass(e.params.navigation.hiddenClass) : r && (a = r.hasClass(e.params.navigation.hiddenClass)), !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"), s && s.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
                }
            }
        },
        {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e;
                    },
                    formatFractionTotal: function(e) {
                        return e;
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                M1(this, {
                    pagination: t1({
                        dynamicBulletIndex: 0
                    }, Z1)
                });
            },
            on: {
                init: function(e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update();
                },
                activeIndexChange: function(e) {
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
                },
                snapIndexChange: function(e) {
                    e.params.loop || e.pagination.update();
                },
                slidesLengthChange: function(e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update());
                },
                snapGridLengthChange: function(e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update());
                },
                destroy: function(e) {
                    e.pagination.destroy();
                },
                click: function(e, t) {
                    e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m1(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
                }
            }
        },
        {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                M1(this, {
                    scrollbar: t1({
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }, J1)
                });
            },
            on: {
                init: function(e) {
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                },
                update: function(e) {
                    e.scrollbar.updateSize();
                },
                resize: function(e) {
                    e.scrollbar.updateSize();
                },
                observerUpdate: function(e) {
                    e.scrollbar.updateSize();
                },
                setTranslate: function(e) {
                    e.scrollbar.setTranslate();
                },
                setTransition: function(e, t) {
                    e.scrollbar.setTransition(t);
                },
                destroy: function(e) {
                    e.scrollbar.destroy();
                }
            }
        },
        {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                M1(this, {
                    parallax: t1({
                    }, Q1)
                });
            },
            on: {
                beforeInit: function(e) {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
                },
                init: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate();
                },
                setTranslate: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate();
                },
                setTransition: function(e, t) {
                    e.params.parallax.enabled && e.parallax.setTransition(t);
                }
            }
        },
        {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this;
                M1(e, {
                    zoom: t1({
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {
                            },
                            touchesCurrent: {
                            }
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, ee1)
                });
                var a = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return a;
                    },
                    set: function(t) {
                        if (a !== t) {
                            var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, i, s);
                        }
                        a = t;
                    }
                });
            },
            on: {
                init: function(e) {
                    e.params.zoom.enabled && e.zoom.enable();
                },
                destroy: function(e) {
                    e.zoom.disable();
                },
                touchStart: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchStart(t);
                },
                touchEnd: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchEnd(t);
                },
                doubleTap: function(e, t) {
                    e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
                },
                transitionEnd: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                },
                slideChange: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
                }
            }
        },
        {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                M1(this, {
                    lazy: t1({
                        initialImageLoaded: !1
                    }, te1)
                });
            },
            on: {
                beforeInit: function(e) {
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                },
                init: function(e) {
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
                },
                scroll: function(e) {
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                },
                resize: function(e) {
                    e.params.lazy.enabled && e.lazy.load();
                },
                scrollbarDragMove: function(e) {
                    e.params.lazy.enabled && e.lazy.load();
                },
                transitionStart: function(e) {
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
                },
                transitionEnd: function(e) {
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                },
                slideChange: function(e) {
                    e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
                }
            }
        },
        {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                M1(this, {
                    controller: t1({
                        control: this.params.controller.control
                    }, ae1)
                });
            },
            on: {
                update: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
                },
                resize: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
                },
                observerUpdate: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
                },
                setTranslate: function(e, t, a) {
                    e.controller.control && e.controller.setTranslate(t, a);
                },
                setTransition: function(e, t, a) {
                    e.controller.control && e.controller.setTransition(t, a);
                }
            }
        },
        {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null
                }
            },
            create: function() {
                M1(this, {
                    a11y: t1({
                    }, ie1, {
                        liveRegion: m1('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                });
            },
            on: {
                afterInit: function(e) {
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                },
                toEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation();
                },
                fromEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation();
                },
                paginationUpdate: function(e) {
                    e.params.a11y.enabled && e.a11y.updatePagination();
                },
                destroy: function(e) {
                    e.params.a11y.enabled && e.a11y.destroy();
                }
            }
        },
        {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                M1(this, {
                    history: t1({
                    }, se1)
                });
            },
            on: {
                init: function(e) {
                    e.params.history.enabled && e.history.init();
                },
                destroy: function(e) {
                    e.params.history.enabled && e.history.destroy();
                },
                transitionEnd: function(e) {
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                },
                slideChange: function(e) {
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
                }
            }
        },
        {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                M1(this, {
                    hashNavigation: t1({
                        initialized: !1
                    }, re1)
                });
            },
            on: {
                init: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.init();
                },
                destroy: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                },
                transitionEnd: function(e) {
                    e.hashNavigation.initialized && e.hashNavigation.setHash();
                },
                slideChange: function(e) {
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
                }
            }
        },
        {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3000,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                M1(this, {
                    autoplay: t1({
                    }, ne1, {
                        running: !1,
                        paused: !1
                    })
                });
            },
            on: {
                init: function(e) {
                    e.params.autoplay.enabled && (e.autoplay.start(), r1().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
                },
                beforeTransitionStart: function(e, t, a) {
                    e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
                },
                sliderFirstMove: function(e) {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                },
                touchEnd: function(e) {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
                },
                destroy: function(e) {
                    e.autoplay.running && e.autoplay.stop(), r1().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
                }
            }
        },
        {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                M1(this, {
                    fadeEffect: t1({
                    }, le1)
                });
            },
            on: {
                beforeInit: function(e) {
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        S1(e.params, t), S1(e.originalParams, t);
                    }
                },
                setTranslate: function(e) {
                    "fade" === e.params.effect && e.fadeEffect.setTranslate();
                },
                setTransition: function(e, t) {
                    "fade" === e.params.effect && e.fadeEffect.setTransition(t);
                }
            }
        },
        {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            },
            create: function() {
                M1(this, {
                    cubeEffect: t1({
                    }, oe1)
                });
            },
            on: {
                beforeInit: function(e) {
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        S1(e.params, t), S1(e.originalParams, t);
                    }
                },
                setTranslate: function(e) {
                    "cube" === e.params.effect && e.cubeEffect.setTranslate();
                },
                setTransition: function(e, t) {
                    "cube" === e.params.effect && e.cubeEffect.setTransition(t);
                }
            }
        },
        {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                M1(this, {
                    flipEffect: t1({
                    }, de1)
                });
            },
            on: {
                beforeInit: function(e) {
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        S1(e.params, t), S1(e.originalParams, t);
                    }
                },
                setTranslate: function(e) {
                    "flip" === e.params.effect && e.flipEffect.setTranslate();
                },
                setTransition: function(e, t) {
                    "flip" === e.params.effect && e.flipEffect.setTransition(t);
                }
            }
        },
        {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                M1(this, {
                    coverflowEffect: t1({
                    }, pe1)
                });
            },
            on: {
                beforeInit: function(e) {
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
                },
                setTranslate: function(e) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                },
                setTransition: function(e, t) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
                }
            }
        },
        {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                M1(this, {
                    thumbs: t1({
                        swiper: null,
                        initialized: !1
                    }, ue1)
                });
            },
            on: {
                beforeInit: function(e) {
                    var t = e.params.thumbs;
                    t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                },
                slideChange: function(e) {
                    e.thumbs.swiper && e.thumbs.update();
                },
                update: function(e) {
                    e.thumbs.swiper && e.thumbs.update();
                },
                resize: function(e) {
                    e.thumbs.swiper && e.thumbs.update();
                },
                observerUpdate: function(e) {
                    e.thumbs.swiper && e.thumbs.update();
                },
                setTransition: function(e, t) {
                    var a = e.thumbs.swiper;
                    a && a.setTransition(t);
                },
                beforeDestroy: function(e) {
                    var t = e.thumbs.swiper;
                    t && e.thumbs.swiperCreated && t && t.destroy();
                }
            }
        }
    ];
    return R1.use(ce), R1;
}); //# sourceMappingURL=swiper-bundle.min.js.map

},{}]},["guMDp","8sKa2"], "8sKa2", "parcelRequirec448")

//# sourceMappingURL=index.69fd9481.js.map
