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
})({"l4AUa":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
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

},{}],"ebWYT":[function(require,module,exports) {
const listInfo = [
    {
        title: 'Клиентская база',
        text_main: 'Все данные по клиенту в одном месте: фотографии, платежи, балансы, договора, штрафы ГИБДД.',
        text_desc: 'Помогает не терять постоянных клиентов. Вы сможете в любой момент времени проверить, какой водитель в какой момент ездил на автомобиле.'
    },
    {
        title: 'Договора',
        text_main: 'Сократите время на выдачу автомобиля. Формирование и печать договора в 2 клика',
        text_desc: 'Больше не нужно вручную заполнять договор. Все документы формируется автоматически из шаблона и моментально отправляются на печать.'
    },
    {
        title: 'Система биллинга',
        text_main: 'Не нужно считать оплаты вручную и звонить водителю с напоминанием.',
        text_desc: 'Робот производит автоматическое списание арендной платы согласно тарифу договора. Текущее состояние счета каждого водителя отображается на главном экране.'
    },
    {
        title: 'Штрафы ГИБДД',
        text_main: 'Вести учет штрафов стало намного проще. Штрафы фиксируются на лицевом счете водителя',
        text_desc: 'и вы больше не потеряете информацию по ним, а водитель всегда будет в курсе появления новых штрафов. Учет штрафов ГИБДД осуществляется напрямую из государственной базы ГИС ГМП.'
    },
    {
        title: 'Техническое обслуживание',
        text_main: 'Вся история обслуживания автомобилей, своевременный контроль износа запчастей в связке со складом.',
        text_desc: 'Предоставьте доступ автосервису или мастеру к карточкам ваших автомобилей, и вы всегда будете в курсе состояния каждой единицы автопарка и ее рентабельности.'
    },
    {
        title: 'Система напоминаний',
        text_main: 'Внести платеж, сделать ТО, оплатить штраф, заменить полис автострахования – обо всех основных вопросах CRM напомнит автоматически.',
        text_desc: 'Своевременное напоминание позволяет снизить риск возникновения долга у водителей. Автоматическая блокировка ограничит доступ к автомобилю пока аренда не будет оплачена.'
    },
    {
        title: 'Складской учет',
        text_main: 'Все запчасти в одном месте, учет установки на автомобили.',
        text_desc: ''
    },
    {
        title: 'Сотрудники',
        text_main: 'Несколько уровней доступа: администратор, менеджер, мастер СТО',
        text_desc: 'Каждый уровень доступа показывает нужную информацию.'
    },
    {
        title: 'Интеграция с Яндекс Такси',
        text_main: 'Списывайте аренду автоматически прямо с таксометра водителя.',
        text_desc: 'Система проверит задолжность водителя за аренду и спишет деньги диспетчерской Яндекс Такси.'
    },
    {
        title: 'Фотоосмотры',
        text_main: 'Системный контроль состояния автомобилей на всех стадиях работы:',
        text_desc: 'на выдаче, на приеме или в процессе долгосрочной аренды.  Сравнивайте сстояния до и после в интуитивно понятном экране. Все повреждения будут моментально выявляться и фиксироваться за водителем.'
    },
    {
        title: 'Отчёты',
        text_main: 'Вся информация по автомобилям, по водителям, по складу и всему автопарку в 1 месте.',
        text_desc: 'Отчеты по автомобилям и его рентабельности; по водителям, кто больше принес денег в парк, а кто потратил; по складу: остатки и движение запчастей; сводный отчет и основные показатели.'
    },
    {
        title: 'Касса',
        text_main: 'Контролируйте учет движения денежных средств в авто прокате.',
        text_desc: 'Сколько денег и менеджера, сколько на счету, сколько в кассе. Все видно и удобно планировать. Отчеты по кассе.'
    }
];
window.onload = function() {
    document.getElementById("link-active").focus();
};
// Scroll to #
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)anchor.addEventListener('click', function(e1) {
    e1.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth'
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
// BURGER OM-NOM-NOM
const burgerBtn = document.querySelector('#burger');
const navbarMenu = document.querySelector('.navpanel__menu');
burgerBtn.addEventListener('change', function() {
    if (this.checked) navbarMenu.style.height = '400px';
    else navbarMenu.style.height = '0';
});
// oppot
const radiosOpportunities = document.querySelectorAll('input[type=radio][name="oppo_desktop"]');
function changeHandlerOpportunities(event) {
    if (this.value) {
        document.querySelectorAll('.opportunities__img').forEach((t1)=>{
            t1.classList.remove('active');
        });
        document.querySelector('#oppo_img_' + this.value).classList.add('active');
        const info = document.querySelector('.opportunities__item-info');
        // формируем плашку с информацией
        info.children[0].textContent = listInfo[this.value - 1].title;
        info.children[1].textContent = listInfo[this.value - 1].text_main;
        info.children[2].textContent = listInfo[this.value - 1].text_desc;
    }
}
Array.prototype.forEach.call(radiosOpportunities, function(radio) {
    radio.addEventListener('change', changeHandlerOpportunities);
});
// oppot-mob
const selectOpportunities = document.getElementById("oppo_select");
function changeHandlerOpportunitiesMob(event) {
    if (event.target.value) {
        document.querySelectorAll('.opportunities__img').forEach((t2)=>{
            t2.classList.remove('active');
        });
        document.querySelector('#oppo_img_mob_' + event.target.value).classList.add('active');
        // формируем плашку с информацией
        const info = document.querySelector('.opportunities__item-info.mobile');
        info.children[0].textContent = listInfo[event.target.value - 1].title;
        info.children[1].innerHTML = listInfo[event.target.value - 1].text_main + '<br>' + listInfo[event.target.value - 1].text_desc;
    }
}
selectOpportunities.addEventListener('change', changeHandlerOpportunitiesMob);
// oppo desc
const oppoDesc = document.querySelector(".oppo_desc");
const oppoBtn = document.querySelector("#oppo_info_btn");
oppoBtn.addEventListener('click', ()=>{
    if (oppoBtn.textContent == "Подробнее") {
        oppoDesc.style.display = "block";
        oppoBtn.textContent = "Скрыть";
    } else {
        oppoDesc.style.display = "none";
        oppoBtn.textContent = "Подробнее";
    }
});
const oppoDescMob = document.querySelector(".opportunities__item-info.mobile");
const oppoBtnMob = document.querySelector(".browser-mob__i");
oppoBtnMob.addEventListener('click', ()=>{
    oppoDescMob.style.display = oppoDescMob.style.display === 'block' ? 'none' : 'block';
});
// Animation
const e = document.querySelectorAll("[data-animate-on-scroll]");
const t = new IntersectionObserver((e2)=>{
    e2.forEach((e3)=>{
        e3.isIntersecting && e3.target.setAttribute("data-animate-on-scroll", "animated");
    });
}, {
    threshold: 0.25
});
e.forEach((e4)=>{
    t.observe(e4);
});
// interfaces
const radiosInterface = document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');
function changeHandlerInterface(event) {
    if (this.value) {
        document.querySelectorAll('.interface__img').forEach((t3)=>{
            t3.classList.remove('active');
        });
        document.querySelector('#int_img_' + this.value).classList.add('active');
    }
}
Array.prototype.forEach.call(radiosInterface, function(radio) {
    radio.addEventListener('change', changeHandlerInterface);
});
// interfaces-mob
const selectInterface = document.getElementById("int_select");
function changeHandlerInterfaceMob(event) {
    if (event.target.value) {
        document.querySelectorAll('.interface__img').forEach((t4)=>{
            t4.classList.remove('active');
        });
        document.querySelector('#int_img_mob_' + event.target.value).classList.add('active');
    }
}
selectInterface.addEventListener('change', changeHandlerInterfaceMob);
// mess 
const radiosMess = document.querySelectorAll('input[type=radio][name="messengers"]');
function changeHandlerMess(event) {
    if (this.value) document.querySelector('#input-mes').placeholder = 'Ваш телефон в ' + this.value;
}
Array.prototype.forEach.call(radiosMess, function(radio) {
    radio.addEventListener('change', changeHandlerMess);
});
// fixed header
document.addEventListener('DOMContentLoaded', ()=>{
    const onScrollHeader = ()=>{
        const header = document.querySelector('.header__nav');
        let prevScroll = window.pageYOffset // на сколько была прокручена страница ранее
        ;
        let currentScroll // на сколько прокручена страница сейчас
        ;
        window.addEventListener('scroll', ()=>{
            currentScroll = window.pageYOffset;
            const headerHidden = ()=>header.classList.contains('header__nav-fixed') // узнаем скрыт header или нет
            ;
            if (currentScroll > prevScroll && !headerHidden()) header.classList.add('header__nav-fixed') // то скрываем header
            ;
            if (currentScroll < prevScroll && headerHidden()) header.classList.remove('header__nav-fixed') // то отображаем header
            ;
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
            ;
        });
    };
    onScrollHeader() // вызываем основную функцию onScrollHeader
    ;
});

},{}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequirec448")

//# sourceMappingURL=index.739bf03c.js.map
