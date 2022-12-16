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
})({"cVgJb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"ebWYT":[function(require,module,exports) {
const listInfo = [
    {
        title: "\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430",
        text_main: "\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435: \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u043F\u043B\u0430\u0442\u0435\u0436\u0438, \u0431\u0430\u043B\u0430\u043D\u0441\u044B, \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0448\u0442\u0440\u0430\u0444\u044B \u0413\u0418\u0411\u0414\u0414.",
        text_desc: "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043D\u0435 \u0442\u0435\u0440\u044F\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0432 \u043A\u0430\u043A\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0435\u0437\u0434\u0438\u043B \u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435."
    },
    {
        title: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430",
        text_main: "\u0421\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0432\u044B\u0434\u0430\u0447\u0443 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F. \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0435\u0447\u0430\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 2 \u043A\u043B\u0438\u043A\u0430",
        text_desc: "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440. \u0412\u0441\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0438 \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0435\u0447\u0430\u0442\u044C."
    },
    {
        title: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0431\u0438\u043B\u043B\u0438\u043D\u0433\u0430",
        text_main: "\u041D\u0435 \u043D\u0443\u0436\u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u0443 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438 \u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E \u0441 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435\u043C \u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u0435.",
        text_desc: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0442\u0430\u0440\u0438\u0444\u0443 \u0438 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0441 \u043B\u044E\u0431\u043E\u0439 \u043A\u0430\u0440\u0442\u044B."
    },
    {
        title: "\u0428\u0442\u0440\u0430\u0444\u044B \u0413\u0418\u0411\u0414\u0414",
        text_main: "\u0412\u0435\u0441\u0442\u0438 \u0443\u0447\u0435\u0442 \u0448\u0442\u0440\u0430\u0444\u043E\u0432 \u0441\u0442\u0430\u043B\u043E \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435. \u041E\u043D\u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u043B\u0438\u0446\u0435\u0432\u043E\u043C \u0441\u0447\u0435\u0442\u0435 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F",
        text_desc: "\u0438 \u0432\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E \u043D\u0438\u043C. \u041F\u0440\u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0438 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0435\u0433\u043E \u043E\u043F\u043B\u0430\u0442\u0443. \u0428\u0442\u0440\u0430\u0444\u044B \u0413\u0418\u0411\u0414\u0414 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0438\u0437 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0413\u0418\u0421 \u0413\u041C\u041F."
    },
    {
        title: "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435",
        text_main: "\u0412\u0441\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439, \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0438\u0437\u043D\u043E\u0441\u0430 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0435\u0439 \u0432 \u0441\u0432\u044F\u0437\u043A\u0435 \u0441\u043E \u0441\u043A\u043B\u0430\u0434\u043E\u043C.",
        text_desc: "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u0430\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u0443 \u0438\u043B\u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C \u0432\u0430\u0448\u0438\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439, \u0438 \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0435\u0434\u0438\u043D\u0438\u0446\u044B \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0430 \u0438 \u0435\u0435 \u0440\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438."
    },
    {
        title: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439",
        text_main: "\u0412\u043D\u0435\u0441\u0442\u0438 \u043F\u043B\u0430\u0442\u0435\u0436, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0422\u041E, \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0448\u0442\u0440\u0430\u0444, \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0438\u0441 \u0430\u0432\u0442\u043E\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u2013 \u043E\u0431\u043E \u0432\u0441\u0435\u0445 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445 Avirent \u043D\u0430\u043F\u043E\u043C\u043D\u0438\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.",
        text_desc: "\u0421\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0438\u0441\u043A \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0434\u043E\u043B\u0433\u0430 \u0443 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439. \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044E \u043F\u043E\u043A\u0430 \u0430\u0440\u0435\u043D\u0434\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u0430."
    },
    {
        title: "\u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442",
        text_main: "\u0412\u0441\u0435 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u0443\u0447\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438.",
        text_desc: "\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0430\u0442\u043A\u0438. \u041A\u0430\u043A\u0438\u0435 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u043B\u0443\u0447\u0448\u0435 \u0437\u0430\u043A\u0443\u043F\u0438\u0442\u044C \u0432\u043F\u0440\u043E\u043A, \u043A\u0430\u043A\u0438\u0435 \u0445\u043E\u0434\u044F\u0442 \u0434\u043E\u043B\u044C\u0448\u0435, \u043A\u0430\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u0435\u043D \u043F\u043E \u0446\u0435\u043D\u0435 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0443? \u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B."
    },
    {
        title: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
        text_main: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0434\u043E\u0441\u0442\u0443\u043F\u0430: \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440, \u043C\u0430\u0441\u0442\u0435\u0440 \u0421\u0422\u041E",
        text_desc: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0443\u0436\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E."
    },
    {
        title: "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 \u0422\u0430\u043A\u0441\u0438",
        text_main: "\u0421\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435 \u0430\u0440\u0435\u043D\u0434\u0443 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0441 \u0442\u0430\u043A\u0441\u043E\u043C\u0435\u0442\u0440\u0430 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F.",
        text_desc: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0437\u0430 \u0430\u0440\u0435\u043D\u0434\u0443 \u0438 \u0441\u043F\u0438\u0448\u0435\u0442 \u0434\u0435\u043D\u044C\u0433\u0438 \u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440\u0441\u043A\u043E\u0439 \u042F\u043D\u0434\u0435\u043A\u0441 \u0422\u0430\u043A\u0441\u0438."
    },
    {
        title: "\u0424\u043E\u0442\u043E\u043E\u0441\u043C\u043E\u0442\u0440\u044B",
        text_main: "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0442\u0430\u0434\u0438\u044F\u0445 \u0440\u0430\u0431\u043E\u0442\u044B:",
        text_desc: "\u043D\u0430 \u0432\u044B\u0434\u0430\u0447\u0435, \u043D\u0430 \u043F\u0440\u0438\u0435\u043C\u0435 \u0438\u043B\u0438 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u043E\u0439 \u0430\u0440\u0435\u043D\u0434\u044B.  \u0421\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0439\u0442\u0435 \u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0434\u043E \u0438 \u043F\u043E\u0441\u043B\u0435 \u0432 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435. \u0412\u0441\u0435 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0437\u0430 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C."
    },
    {
        title: "\u041E\u0442\u0447\u0451\u0442\u044B",
        text_main: "\u0412\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F\u043C, \u043F\u043E \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C, \u043F\u043E \u0441\u043A\u043B\u0430\u0434\u0443 \u0438 \u0432\u0441\u0435\u043C\u0443 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0443 \u0432 1 \u043C\u0435\u0441\u0442\u0435.",
        text_desc: "\u041E\u0442\u0447\u0435\u0442\u044B \u043F\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F\u043C \u0438 \u0435\u0433\u043E \u0440\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438; \u043F\u043E \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C, \u043A\u0442\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u0438\u043D\u0435\u0441 \u0434\u0435\u043D\u0435\u0433 \u0432 \u043F\u0430\u0440\u043A, \u0430 \u043A\u0442\u043E \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u043B; \u043F\u043E \u0441\u043A\u043B\u0430\u0434\u0443: \u043E\u0441\u0442\u0430\u0442\u043A\u0438 \u0438 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0435\u0439; \u0441\u0432\u043E\u0434\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438."
    },
    {
        title: "\u041A\u0430\u0441\u0441\u0430",
        text_main: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u0443\u0447\u0435\u0442 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0430\u0432\u0442\u043E \u043F\u0440\u043E\u043A\u0430\u0442\u0435.",
        text_desc: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u043D\u0435\u0433 \u0443 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0441\u0447\u0435\u0442\u0443, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432 \u043A\u0430\u0441\u0441\u0435? \u0412\u0441\u0435 \u0432\u0438\u0434\u043D\u043E \u0438 \u0443\u0434\u043E\u0431\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C. \u041E\u0442\u0447\u0435\u0442\u044B \u043F\u043E \u043A\u0430\u0441\u0441\u0435."
    }
];
// focused nav link
const links = document.querySelectorAll(".link-nav");
links.forEach((e1)=>{
    e1.addEventListener("click", ()=>{
        links.forEach((el)=>{
            el.classList.remove("link-active");
        });
    });
});
// lazy loading
document.addEventListener("DOMContentLoaded", function() {
    const lazyloadImages = document.querySelectorAll("img[data-src]");
    let lazyloadThrottleTimeout;
    function lazyload() {
        if (lazyloadThrottleTimeout) clearTimeout(lazyloadThrottleTimeout);
        lazyloadThrottleTimeout = setTimeout(function() {
            lazyloadImages.forEach(function(img) {
                if (img.getBoundingClientRect().top - 200 <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== "none") {
                    const reg = img.nextSibling.firstChild.textContent.split(/"([^"]*)"/g);
                    img.src = reg[1];
                    if (reg[3]) img.srcset = reg[3];
                    img.removeAttribute("data-src");
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 200);
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});
// Scroll to #
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)anchor.addEventListener("click", function(e2) {
    e2.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: "smooth"
    });
});
// Accrdions
const accordionTrigger = document.querySelectorAll(".questions__item"), accordionBody = document.querySelectorAll(".questions__answer");
const accordionsToggle = (triggers, bodyElements)=>{
    triggers.forEach((el)=>{
        el.addEventListener("click", ()=>{
            //Находим контентную часть у ближайшего родителя
            const elBody = el.closest(".questions__item").querySelector(".questions__answer");
            // el.classList.toggle('accordion__trigger--active');
            elBody.style.height = `${elBody.scrollHeight}px`;
            elBody.style.marginTop = "20px";
            if (elBody.style.height === "0px" || window.getComputedStyle(elBody).height === "0px") {
                el.setAttribute("aria-expanded", "true");
                elBody.setAttribute("aria-hidden", "false");
            } else {
                elBody.style.height = "0";
                el.setAttribute("aria-expanded", "false");
                elBody.setAttribute("aria-hidden", "true");
                elBody.style.marginTop = "0";
            }
        });
    });
    bodyElements.forEach((el)=>{
        el.addEventListener("transitionend", ()=>{
            if (el.style.height !== "0px") el.style.height = "auto";
        });
    });
};
accordionsToggle(accordionTrigger, accordionBody);
// oppot
const radiosOpportunities = document.querySelectorAll('input[type=radio][name="oppo_desktop"]');
function changeHandlerOpportunities(event) {
    if (this.value) {
        document.querySelectorAll(".opportunities__img").forEach((t1)=>{
            t1.classList.remove("active");
        });
        document.querySelector("#oppo_img_" + this.value).classList.add("active");
        const info = document.querySelector(".opportunities__item-info");
        // формируем плашку с информацией
        info.children[0].textContent = listInfo[this.value - 1].title;
        info.children[1].textContent = listInfo[this.value - 1].text_main;
        info.children[2].textContent = listInfo[this.value - 1].text_desc;
    }
}
Array.prototype.forEach.call(radiosOpportunities, function(radio) {
    radio.addEventListener("change", changeHandlerOpportunities);
});
// oppot-mob
const selectOpportunities = document.getElementById("oppo_select");
function changeHandlerOpportunitiesMob(event) {
    if (event.target.value) {
        document.querySelectorAll(".opportunities__img").forEach((t2)=>{
            t2.classList.remove("active");
        });
        document.querySelector("#oppo_img_mob_" + event.target.value).classList.add("active");
        // формируем плашку с информацией
        const info = document.querySelector(".opportunities__item-info.mobile");
        info.children[0].textContent = listInfo[event.target.value - 1].title;
        info.children[1].innerHTML = listInfo[event.target.value - 1].text_main + "<br>" + listInfo[event.target.value - 1].text_desc;
    }
}
selectOpportunities.addEventListener("change", changeHandlerOpportunitiesMob);
// oppo desc
const oppoDesc = document.querySelector(".oppo_desc");
const oppoBtn = document.querySelector("#oppo_info_btn");
oppoBtn.addEventListener("click", ()=>{
    if (oppoBtn.textContent == "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435") {
        oppoDesc.style.display = "block";
        oppoBtn.textContent = "\u0421\u043A\u0440\u044B\u0442\u044C";
    } else {
        oppoDesc.style.display = "none";
        oppoBtn.textContent = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435";
    }
});
const oppoDescMob = document.querySelector(".opportunities__item-info.mobile");
const oppoBtnMob = document.querySelector(".browser-mob__i");
oppoBtnMob.addEventListener("click", ()=>{
    oppoDescMob.style.display = oppoDescMob.style.display === "block" ? "none" : "block";
});
// Animation
const e = document.querySelectorAll("[data-animate-on-scroll]");
const t = new IntersectionObserver((e3)=>{
    e3.forEach((e4)=>{
        e4.isIntersecting && e4.target.setAttribute("data-animate-on-scroll", "animated");
    });
}, {
    threshold: 0.25
});
e.forEach((e5)=>{
    t.observe(e5);
});
// interfaces
const radiosInterface = document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');
function changeHandlerInterface(event) {
    if (this.value) {
        document.querySelectorAll(".interface__img").forEach((t3)=>{
            t3.classList.remove("active");
        });
        document.querySelector("#int_img_" + this.value).classList.add("active");
    }
}
Array.prototype.forEach.call(radiosInterface, function(radio) {
    radio.addEventListener("change", changeHandlerInterface);
});
// interfaces-mob
const selectInterface = document.getElementById("int_select");
function changeHandlerInterfaceMob(event) {
    if (event.target.value) {
        document.querySelectorAll(".interface__img").forEach((t4)=>{
            t4.classList.remove("active");
        });
        document.querySelector("#int_img_mob_" + event.target.value).classList.add("active");
    }
}
selectInterface.addEventListener("change", changeHandlerInterfaceMob);
// mess 
const radiosMess = document.querySelectorAll('input[type=radio][name="messengers"]');
function changeHandlerMess(event) {
    if (this.value) document.querySelector("#input-mes").placeholder = "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432 " + this.value;
}
Array.prototype.forEach.call(radiosMess, function(radio) {
    radio.addEventListener("change", changeHandlerMess);
});
// cookie 
const cookieModal = document.querySelector(".cookie");
const closeBtn = document.querySelector(".cookie-close");
document.addEventListener("DOMContentLoaded", ()=>{
    // проверяем после загрузки страницы localStorage на наличие согласия cookie
    console.log(localStorage.getItem("consent_cookies"));
    if (localStorage.getItem("consent_cookies")) cookieModal.style.display = "none";
    else cookieModal.style.display = "block";
});
closeBtn.addEventListener("click", ()=>{
    localStorage.setItem("consent_cookies", true);
    cookieModal.style.display = "none";
});

},{}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequirec448")

//# sourceMappingURL=index.739bf03c.js.map
