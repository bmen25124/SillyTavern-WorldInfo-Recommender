import { renderStoryString as C1, persona_description_positions as $g } from "../../../../power-user.js";
import { parseMesExamples as k1, baseChatReplace as A1, chat_metadata as js, getMaxContextSize as T1, name1 as Ea, name2 as Xr, this_chid as an, extension_prompt_types as Ca, depth_prompt_role_default as x1, depth_prompt_depth_default as N1 } from "../../../../../script.js";
import { createWorldInfoEntry as O1, world_info_include_names as M1, wi_anchor_position as R1, selected_world_info as j1, METADATA_KEY as D1, world_info as z1, world_names as L1 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as P1, formatInstructModeSystemPrompt as I1 } from "../../../../instruct-mode.js";
import { appendFileContent as B1 } from "../../../../chats.js";
import { setOpenAIMessages as U1, setOpenAIMessageExamples as H1, formatWorldInfo as q1, getPromptPosition as Z1, getPromptRole as G1, prepareOpenAIMessages as V1 } from "../../../../openai.js";
import { metadata_keys as Ds } from "../../../../authors-note.js";
import { getGroupDepthPrompts as Y1, selected_group as Xt, groups as Xg } from "../../../../group-chats.js";
import { runRegexScript as $1, getRegexedString as X1, regex_placement as Fg } from "../../../regex/engine.js";
import { getCharaFilename as F1, removeFromArray as Qg, runAfterAnimation as Q1 } from "../../../../utils.js";
import { commonEnumProviders as K1 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ei, fixToastrForDialogs as qd } from "../../../../popup.js";
import Kg from "../../../../../lib/dialog-polyfill.esm.js";
function Uf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Zd = { exports: {} }, zs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function J1() {
  if (Jg) return zs;
  Jg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(i, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: i,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return zs.Fragment = r, zs.jsx = s, zs.jsxs = s, zs;
}
var Wg;
function W1() {
  return Wg || (Wg = 1, Zd.exports = J1()), Zd.exports;
}
var N = W1(), Gd = { exports: {} }, Re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function e2() {
  if (ev) return Re;
  ev = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
  function v(I) {
    return I === null || typeof I != "object" ? null : (I = E && I[E] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, C = {};
  function A(I, $, le) {
    this.props = I, this.context = $, this.refs = C, this.updater = le || S;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(I, $) {
    if (typeof I != "object" && typeof I != "function" && I != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, I, $, "setState");
  }, A.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function O() {
  }
  O.prototype = A.prototype;
  function x(I, $, le) {
    this.props = I, this.context = $, this.refs = C, this.updater = le || S;
  }
  var z = x.prototype = new O();
  z.constructor = x, h(z, A.prototype), z.isPureReactComponent = !0;
  var l = Array.isArray, _ = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, $, le, V, H, ne) {
    return le = ne.ref, {
      $$typeof: n,
      type: I,
      key: $,
      ref: le !== void 0 ? le : null,
      props: ne
    };
  }
  function R(I, $) {
    return k(
      I.type,
      $,
      void 0,
      void 0,
      void 0,
      I.props
    );
  }
  function L(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function j(I) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(le) {
      return $[le];
    });
  }
  var P = /\/+/g;
  function Z(I, $) {
    return typeof I == "object" && I !== null && I.key != null ? j("" + I.key) : $.toString(36);
  }
  function F() {
  }
  function Y(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(F, F) : (I.status = "pending", I.then(
          function($) {
            I.status === "pending" && (I.status = "fulfilled", I.value = $);
          },
          function($) {
            I.status === "pending" && (I.status = "rejected", I.reason = $);
          }
        )), I.status) {
          case "fulfilled":
            return I.value;
          case "rejected":
            throw I.reason;
        }
    }
    throw I;
  }
  function W(I, $, le, V, H) {
    var ne = typeof I;
    (ne === "undefined" || ne === "boolean") && (I = null);
    var te = !1;
    if (I === null) te = !0;
    else
      switch (ne) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (I.$$typeof) {
            case n:
            case r:
              te = !0;
              break;
            case g:
              return te = I._init, W(
                te(I._payload),
                $,
                le,
                V,
                H
              );
          }
      }
    if (te)
      return H = H(I), te = V === "" ? "." + Z(I, 0) : V, l(H) ? (le = "", te != null && (le = te.replace(P, "$&/") + "/"), W(H, $, le, "", function(pe) {
        return pe;
      })) : H != null && (L(H) && (H = R(
        H,
        le + (H.key == null || I && I.key === H.key ? "" : ("" + H.key).replace(
          P,
          "$&/"
        ) + "/") + te
      )), $.push(H)), 1;
    te = 0;
    var ce = V === "" ? "." : V + ":";
    if (l(I))
      for (var re = 0; re < I.length; re++)
        V = I[re], ne = ce + Z(V, re), te += W(
          V,
          $,
          le,
          ne,
          H
        );
    else if (re = v(I), typeof re == "function")
      for (I = re.call(I), re = 0; !(V = I.next()).done; )
        V = V.value, ne = ce + Z(V, re++), te += W(
          V,
          $,
          le,
          ne,
          H
        );
    else if (ne === "object") {
      if (typeof I.then == "function")
        return W(
          Y(I),
          $,
          le,
          V,
          H
        );
      throw $ = String(I), Error(
        "Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function M(I, $, le) {
    if (I == null) return I;
    var V = [], H = 0;
    return W(I, V, "", "", function(ne) {
      return $.call(le, ne, H++);
    }), V;
  }
  function B(I) {
    if (I._status === -1) {
      var $ = I._result;
      $ = $(), $.then(
        function(le) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = le);
        },
        function(le) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = le);
        }
      ), I._status === -1 && (I._status = 0, I._result = $);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var K = typeof reportError == "function" ? reportError : function(I) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var $ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof I == "object" && I !== null && typeof I.message == "string" ? String(I.message) : String(I),
        error: I
      });
      if (!window.dispatchEvent($)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", I);
      return;
    }
    console.error(I);
  };
  function ae() {
  }
  return Re.Children = {
    map: M,
    forEach: function(I, $, le) {
      M(
        I,
        function() {
          $.apply(this, arguments);
        },
        le
      );
    },
    count: function(I) {
      var $ = 0;
      return M(I, function() {
        $++;
      }), $;
    },
    toArray: function(I) {
      return M(I, function($) {
        return $;
      }) || [];
    },
    only: function(I) {
      if (!L(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, Re.Component = A, Re.Fragment = s, Re.Profiler = u, Re.PureComponent = x, Re.StrictMode = i, Re.Suspense = p, Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, Re.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return _.H.useMemoCache(I);
    }
  }, Re.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, Re.cloneElement = function(I, $, le) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var V = h({}, I.props), H = I.key, ne = void 0;
    if ($ != null)
      for (te in $.ref !== void 0 && (ne = void 0), $.key !== void 0 && (H = "" + $.key), $)
        !w.call($, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && $.ref === void 0 || (V[te] = $[te]);
    var te = arguments.length - 2;
    if (te === 1) V.children = le;
    else if (1 < te) {
      for (var ce = Array(te), re = 0; re < te; re++)
        ce[re] = arguments[re + 2];
      V.children = ce;
    }
    return k(I.type, H, void 0, void 0, ne, V);
  }, Re.createContext = function(I) {
    return I = {
      $$typeof: f,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, I.Provider = I, I.Consumer = {
      $$typeof: c,
      _context: I
    }, I;
  }, Re.createElement = function(I, $, le) {
    var V, H = {}, ne = null;
    if ($ != null)
      for (V in $.key !== void 0 && (ne = "" + $.key), $)
        w.call($, V) && V !== "key" && V !== "__self" && V !== "__source" && (H[V] = $[V]);
    var te = arguments.length - 2;
    if (te === 1) H.children = le;
    else if (1 < te) {
      for (var ce = Array(te), re = 0; re < te; re++)
        ce[re] = arguments[re + 2];
      H.children = ce;
    }
    if (I && I.defaultProps)
      for (V in te = I.defaultProps, te)
        H[V] === void 0 && (H[V] = te[V]);
    return k(I, ne, void 0, void 0, null, H);
  }, Re.createRef = function() {
    return { current: null };
  }, Re.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, Re.isValidElement = L, Re.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, Re.memo = function(I, $) {
    return {
      $$typeof: y,
      type: I,
      compare: $ === void 0 ? null : $
    };
  }, Re.startTransition = function(I) {
    var $ = _.T, le = {};
    _.T = le;
    try {
      var V = I(), H = _.S;
      H !== null && H(le, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(ae, K);
    } catch (ne) {
      K(ne);
    } finally {
      _.T = $;
    }
  }, Re.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, Re.use = function(I) {
    return _.H.use(I);
  }, Re.useActionState = function(I, $, le) {
    return _.H.useActionState(I, $, le);
  }, Re.useCallback = function(I, $) {
    return _.H.useCallback(I, $);
  }, Re.useContext = function(I) {
    return _.H.useContext(I);
  }, Re.useDebugValue = function() {
  }, Re.useDeferredValue = function(I, $) {
    return _.H.useDeferredValue(I, $);
  }, Re.useEffect = function(I, $, le) {
    var V = _.H;
    if (typeof le == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return V.useEffect(I, $);
  }, Re.useId = function() {
    return _.H.useId();
  }, Re.useImperativeHandle = function(I, $, le) {
    return _.H.useImperativeHandle(I, $, le);
  }, Re.useInsertionEffect = function(I, $) {
    return _.H.useInsertionEffect(I, $);
  }, Re.useLayoutEffect = function(I, $) {
    return _.H.useLayoutEffect(I, $);
  }, Re.useMemo = function(I, $) {
    return _.H.useMemo(I, $);
  }, Re.useOptimistic = function(I, $) {
    return _.H.useOptimistic(I, $);
  }, Re.useReducer = function(I, $, le) {
    return _.H.useReducer(I, $, le);
  }, Re.useRef = function(I) {
    return _.H.useRef(I);
  }, Re.useState = function(I) {
    return _.H.useState(I);
  }, Re.useSyncExternalStore = function(I, $, le) {
    return _.H.useSyncExternalStore(
      I,
      $,
      le
    );
  }, Re.useTransition = function() {
    return _.H.useTransition();
  }, Re.version = "19.1.1", Re;
}
var tv;
function Hf() {
  return tv || (tv = 1, Gd.exports = e2()), Gd.exports;
}
var se = Hf();
const hl = /* @__PURE__ */ Uf(se);
var Vd = { exports: {} }, Ls = {}, Yd = { exports: {} }, $d = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function t2() {
  return nv || (nv = 1, (function(n) {
    function r(M, B) {
      var K = M.length;
      M.push(B);
      e: for (; 0 < K; ) {
        var ae = K - 1 >>> 1, I = M[ae];
        if (0 < u(I, B))
          M[ae] = B, M[K] = I, K = ae;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function i(M) {
      if (M.length === 0) return null;
      var B = M[0], K = M.pop();
      if (K !== B) {
        M[0] = K;
        e: for (var ae = 0, I = M.length, $ = I >>> 1; ae < $; ) {
          var le = 2 * (ae + 1) - 1, V = M[le], H = le + 1, ne = M[H];
          if (0 > u(V, K))
            H < I && 0 > u(ne, V) ? (M[ae] = ne, M[H] = K, ae = H) : (M[ae] = V, M[le] = K, ae = le);
          else if (H < I && 0 > u(ne, K))
            M[ae] = ne, M[H] = K, ae = H;
          else break e;
        }
      }
      return B;
    }
    function u(M, B) {
      var K = M.sortIndex - B.sortIndex;
      return K !== 0 ? K : M.id - B.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], y = [], g = 1, E = null, v = 3, S = !1, h = !1, C = !1, A = !1, O = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function l(M) {
      for (var B = s(y); B !== null; ) {
        if (B.callback === null) i(y);
        else if (B.startTime <= M)
          i(y), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(y);
      }
    }
    function _(M) {
      if (C = !1, l(M), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, Z());
        else {
          var B = s(y);
          B !== null && W(_, B.startTime - M);
        }
    }
    var w = !1, k = -1, R = 5, L = -1;
    function j() {
      return A ? !0 : !(n.unstable_now() - L < R);
    }
    function P() {
      if (A = !1, w) {
        var M = n.unstable_now();
        L = M;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, x(k), k = -1), S = !0;
            var K = v;
            try {
              t: {
                for (l(M), E = s(p); E !== null && !(E.expirationTime > M && j()); ) {
                  var ae = E.callback;
                  if (typeof ae == "function") {
                    E.callback = null, v = E.priorityLevel;
                    var I = ae(
                      E.expirationTime <= M
                    );
                    if (M = n.unstable_now(), typeof I == "function") {
                      E.callback = I, l(M), B = !0;
                      break t;
                    }
                    E === s(p) && i(p), l(M);
                  } else i(p);
                  E = s(p);
                }
                if (E !== null) B = !0;
                else {
                  var $ = s(y);
                  $ !== null && W(
                    _,
                    $.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, v = K, S = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Z() : w = !1;
        }
      }
    }
    var Z;
    if (typeof z == "function")
      Z = function() {
        z(P);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), Y = F.port2;
      F.port1.onmessage = P, Z = function() {
        Y.postMessage(null);
      };
    } else
      Z = function() {
        O(P, 0);
      };
    function W(M, B) {
      k = O(function() {
        M(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : R = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, n.unstable_next = function(M) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = v;
      }
      var K = v;
      v = B;
      try {
        return M();
      } finally {
        v = K;
      }
    }, n.unstable_requestPaint = function() {
      A = !0;
    }, n.unstable_runWithPriority = function(M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var K = v;
      v = M;
      try {
        return B();
      } finally {
        v = K;
      }
    }, n.unstable_scheduleCallback = function(M, B, K) {
      var ae = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ae + K : ae) : K = ae, M) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = K + I, M = {
        id: g++,
        callback: B,
        priorityLevel: M,
        startTime: K,
        expirationTime: I,
        sortIndex: -1
      }, K > ae ? (M.sortIndex = K, r(y, M), s(p) === null && M === s(y) && (C ? (x(k), k = -1) : C = !0, W(_, K - ae))) : (M.sortIndex = I, r(p, M), h || S || (h = !0, w || (w = !0, Z()))), M;
    }, n.unstable_shouldYield = j, n.unstable_wrapCallback = function(M) {
      var B = v;
      return function() {
        var K = v;
        v = B;
        try {
          return M.apply(this, arguments);
        } finally {
          v = K;
        }
      };
    };
  })($d)), $d;
}
var rv;
function n2() {
  return rv || (rv = 1, Yd.exports = t2()), Yd.exports;
}
var Xd = { exports: {} }, Ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function r2() {
  if (av) return Ut;
  av = 1;
  var n = Hf();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        y += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var i = {
    d: {
      f: s,
      r: function() {
        throw Error(r(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function c(p, y, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: y,
      implementation: g
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Ut.createPortal = function(p, y) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return c(p, y, null, g);
  }, Ut.flushSync = function(p) {
    var y = f.T, g = i.p;
    try {
      if (f.T = null, i.p = 2, p) return p();
    } finally {
      f.T = y, i.p = g, i.d.f();
    }
  }, Ut.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, i.d.C(p, y));
  }, Ut.prefetchDNS = function(p) {
    typeof p == "string" && i.d.D(p);
  }, Ut.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var g = y.as, E = m(g, y.crossOrigin), v = typeof y.integrity == "string" ? y.integrity : void 0, S = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      g === "style" ? i.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: E,
          integrity: v,
          fetchPriority: S
        }
      ) : g === "script" && i.d.X(p, {
        crossOrigin: E,
        integrity: v,
        fetchPriority: S,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var g = m(
            y.as,
            y.crossOrigin
          );
          i.d.M(p, {
            crossOrigin: g,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && i.d.M(p);
  }, Ut.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var g = y.as, E = m(g, y.crossOrigin);
      i.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, Ut.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var g = m(y.as, y.crossOrigin);
        i.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: g,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else i.d.m(p);
  }, Ut.requestFormReset = function(p) {
    i.d.r(p);
  }, Ut.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, Ut.useFormState = function(p, y, g) {
    return f.H.useFormState(p, y, g);
  }, Ut.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ut.version = "19.1.1", Ut;
}
var iv;
function $0() {
  if (iv) return Xd.exports;
  iv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Xd.exports = r2(), Xd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function a2() {
  if (sv) return Ls;
  sv = 1;
  var n = n2(), r = Hf(), s = $0();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(i(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, o = t; ; ) {
      var d = a.return;
      if (d === null) break;
      var b = d.alternate;
      if (b === null) {
        if (o = d.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (d.child === b.child) {
        for (b = d.child; b; ) {
          if (b === a) return m(d), e;
          if (b === o) return m(d), t;
          b = b.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) a = d, o = b;
      else {
        for (var T = !1, D = d.child; D; ) {
          if (D === a) {
            T = !0, a = d, o = b;
            break;
          }
          if (D === o) {
            T = !0, o = d, a = b;
            break;
          }
          D = D.sibling;
        }
        if (!T) {
          for (D = b.child; D; ) {
            if (D === a) {
              T = !0, a = b, o = d;
              break;
            }
            if (D === o) {
              T = !0, o = b, a = d;
              break;
            }
            D = D.sibling;
          }
          if (!T) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = y(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), v = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), x = Symbol.for("react.consumer"), z = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), j = Symbol.for("react.memo_cache_sentinel"), P = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Symbol.for("react.client.reference");
  function Y(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case A:
        return "Profiler";
      case C:
        return "StrictMode";
      case _:
        return "Suspense";
      case w:
        return "SuspenseList";
      case L:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case z:
          return (e.displayName || "Context") + ".Provider";
        case x:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : Y(e.type) || "Memo";
        case R:
          t = e._payload, e = e._init;
          try {
            return Y(e(t));
          } catch {
          }
      }
    return null;
  }
  var W = Array.isArray, M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], I = -1;
  function $(e) {
    return { current: e };
  }
  function le(e) {
    0 > I || (e.current = ae[I], ae[I] = null, I--);
  }
  function V(e, t) {
    I++, ae[I] = e.current, e.current = t;
  }
  var H = $(null), ne = $(null), te = $(null), ce = $(null);
  function re(e, t) {
    switch (V(te, t), V(ne, e), V(H, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Sg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Sg(t), e = wg(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    le(H), V(H, e);
  }
  function pe() {
    le(H), le(ne), le(te);
  }
  function je(e) {
    e.memoizedState !== null && V(ce, e);
    var t = H.current, a = wg(t, e.type);
    t !== a && (V(ne, e), V(H, a));
  }
  function Le(e) {
    ne.current === e && (le(H), le(ne)), ce.current === e && (le(ce), xs._currentValue = K);
  }
  var ge = Object.prototype.hasOwnProperty, he = n.unstable_scheduleCallback, _e = n.unstable_cancelCallback, De = n.unstable_shouldYield, We = n.unstable_requestPaint, Fe = n.unstable_now, jn = n.unstable_getCurrentPriorityLevel, dt = n.unstable_ImmediatePriority, ve = n.unstable_UserBlockingPriority, ye = n.unstable_NormalPriority, qe = n.unstable_LowPriority, Ze = n.unstable_IdlePriority, et = n.log, Zn = n.unstable_setDisableYieldValue, Dn = null, mt = null;
  function Gn(e) {
    if (typeof et == "function" && Zn(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(Dn, e);
      } catch {
      }
  }
  var Zt = Math.clz32 ? Math.clz32 : ia, bn = Math.log, aa = Math.LN2;
  function ia(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bn(e) / aa | 0) | 0;
  }
  var nr = 256, Vn = 4194304;
  function Sn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Gt(e, t, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, b = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~b, o !== 0 ? d = Sn(o) : (T &= D, T !== 0 ? d = Sn(T) : a || (a = D & ~e, a !== 0 && (d = Sn(a))))) : (D = o & ~b, D !== 0 ? d = Sn(D) : T !== 0 ? d = Sn(T) : a || (a = o & ~e, a !== 0 && (d = Sn(a)))), d === 0 ? 0 : t !== 0 && t !== d && (t & b) === 0 && (b = d & -d, a = t & -t, b >= a || b === 32 && (a & 4194048) !== 0) ? t : d;
  }
  function Ft(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function lo(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pa() {
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function ih() {
    var e = Vn;
    return Vn <<= 1, (Vn & 62914560) === 0 && (Vn = 4194304), e;
  }
  function Ml(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ii(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function f_(e, t, a, o, d, b) {
    var T = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var D = e.entanglements, U = e.expirationTimes, Q = e.hiddenUpdates;
    for (a = T & ~a; 0 < a; ) {
      var ie = 31 - Zt(a), ue = 1 << ie;
      D[ie] = 0, U[ie] = -1;
      var J = Q[ie];
      if (J !== null)
        for (Q[ie] = null, ie = 0; ie < J.length; ie++) {
          var ee = J[ie];
          ee !== null && (ee.lane &= -536870913);
        }
      a &= ~ue;
    }
    o !== 0 && sh(e, o, 0), b !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(T & ~t));
  }
  function sh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Zt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function oh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var o = 31 - Zt(a), d = 1 << o;
      d & t | e[o] & t && (e[o] |= t), a &= ~d;
    }
  }
  function Rl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function jl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function uh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Hg(e.type));
  }
  function h_(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var kr = Math.random().toString(36).slice(2), It = "__reactFiber$" + kr, Qt = "__reactProps$" + kr, Ia = "__reactContainer$" + kr, Dl = "__reactEvents$" + kr, p_ = "__reactListeners$" + kr, m_ = "__reactHandles$" + kr, lh = "__reactResources$" + kr, Bi = "__reactMarker$" + kr;
  function zl(e) {
    delete e[It], delete e[Qt], delete e[Dl], delete e[p_], delete e[m_];
  }
  function Ba(e) {
    var t = e[It];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ia] || a[It]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Ag(e); e !== null; ) {
            if (a = e[It]) return a;
            e = Ag(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ua(e) {
    if (e = e[It] || e[Ia]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ui(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ha(e) {
    var t = e[lh];
    return t || (t = e[lh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Tt(e) {
    e[Bi] = !0;
  }
  var ch = /* @__PURE__ */ new Set(), dh = {};
  function sa(e, t) {
    qa(e, t), qa(e + "Capture", t);
  }
  function qa(e, t) {
    for (dh[e] = t, e = 0; e < t.length; e++)
      ch.add(t[e]);
  }
  var g_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fh = {}, hh = {};
  function v_(e) {
    return ge.call(hh, e) ? !0 : ge.call(fh, e) ? !1 : g_.test(e) ? hh[e] = !0 : (fh[e] = !0, !1);
  }
  function co(e, t, a) {
    if (v_(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function fo(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function rr(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
    }
  }
  var Ll, ph;
  function Za(e) {
    if (Ll === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Ll = t && t[1] || "", ph = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ll + e + ph;
  }
  var Pl = !1;
  function Il(e, t) {
    if (!e || Pl) return "";
    Pl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var ue = function() {
                throw Error();
              };
              if (Object.defineProperty(ue.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ue, []);
                } catch (ee) {
                  var J = ee;
                }
                Reflect.construct(e, [], ue);
              } else {
                try {
                  ue.call();
                } catch (ee) {
                  J = ee;
                }
                e.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ee) {
                J = ee;
              }
              (ue = e()) && typeof ue.catch == "function" && ue.catch(function() {
              });
            }
          } catch (ee) {
            if (ee && J && typeof ee.stack == "string")
              return [ee.stack, J.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var b = o.DetermineComponentFrameRoot(), T = b[0], D = b[1];
      if (T && D) {
        var U = T.split(`
`), Q = D.split(`
`);
        for (d = o = 0; o < U.length && !U[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < Q.length && !Q[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === U.length || d === Q.length)
          for (o = U.length - 1, d = Q.length - 1; 1 <= o && 0 <= d && U[o] !== Q[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (U[o] !== Q[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || U[o] !== Q[d]) {
                  var ie = `
` + U[o].replace(" at new ", " at ");
                  return e.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", e.displayName)), ie;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      Pl = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Za(a) : "";
  }
  function y_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Za(e.type);
      case 16:
        return Za("Lazy");
      case 13:
        return Za("Suspense");
      case 19:
        return Za("SuspenseList");
      case 0:
      case 15:
        return Il(e.type, !1);
      case 11:
        return Il(e.type.render, !1);
      case 1:
        return Il(e.type, !0);
      case 31:
        return Za("Activity");
      default:
        return "";
    }
  }
  function mh(e) {
    try {
      var t = "";
      do
        t += y_(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function wn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function gh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function __(e) {
    var t = gh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var d = a.get, b = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(T) {
          o = "" + T, b.call(this, T);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(T) {
          o = "" + T;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ho(e) {
    e._valueTracker || (e._valueTracker = __(e));
  }
  function vh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), o = "";
    return e && (o = gh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (t.setValue(e), !0) : !1;
  }
  function po(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var b_ = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      b_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bl(e, t, a, o, d, b, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), t != null ? T === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wn(t)) : e.value !== "" + wn(t) && (e.value = "" + wn(t)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), t != null ? Ul(e, T, wn(t)) : a != null ? Ul(e, T, wn(a)) : o != null && e.removeAttribute("value"), d == null && b != null && (e.defaultChecked = !!b), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + wn(D) : e.removeAttribute("name");
  }
  function yh(e, t, a, o, d, b, T, D) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), t != null || a != null) {
      if (!(b !== "submit" && b !== "reset" || t != null))
        return;
      a = a != null ? "" + wn(a) : "", t = t != null ? "" + wn(t) : a, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Ul(e, t, a) {
    t === "number" && po(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ga(e, t, a, o) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < a.length; d++)
        t["$" + a[d]] = !0;
      for (a = 0; a < e.length; a++)
        d = t.hasOwnProperty("$" + e[a].value), e[a].selected !== d && (e[a].selected = d), d && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + wn(a), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === a) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _h(e, t, a) {
    if (t != null && (t = "" + wn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + wn(a) : "";
  }
  function bh(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (W(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), t = a;
    }
    a = wn(t), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function Va(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var S_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sh(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, a) : typeof a != "number" || a === 0 || S_.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function wh(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(i(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in t)
        o = t[d], t.hasOwnProperty(d) && a[d] !== o && Sh(e, d, o);
    } else
      for (var b in t)
        t.hasOwnProperty(b) && Sh(e, b, t[b]);
  }
  function Hl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var w_ = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), E_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mo(e) {
    return E_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var ql = null;
  function Zl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, $a = null;
  function Eh(e) {
    var t = Ua(e);
    if (t && (e = t.stateNode)) {
      var a = e[Qt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Bl(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + En(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var d = o[Qt] || null;
                if (!d) throw Error(i(90));
                Bl(
                  o,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              o = a[t], o.form === e.form && vh(o);
          }
          break e;
        case "textarea":
          _h(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ga(e, !!a.multiple, t, !1);
      }
    }
  }
  var Gl = !1;
  function Ch(e, t, a) {
    if (Gl) return e(t, a);
    Gl = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (Gl = !1, (Ya !== null || $a !== null) && (eu(), Ya && (t = Ya, e = $a, $a = Ya = null, Eh(t), e)))
        for (t = 0; t < e.length; t++) Eh(e[t]);
    }
  }
  function Hi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Qt] || null;
    if (o === null) return null;
    a = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        i(231, t, typeof a)
      );
    return a;
  }
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vl = !1;
  if (ar)
    try {
      var qi = {};
      Object.defineProperty(qi, "passive", {
        get: function() {
          Vl = !0;
        }
      }), window.addEventListener("test", qi, qi), window.removeEventListener("test", qi, qi);
    } catch {
      Vl = !1;
    }
  var Ar = null, Yl = null, go = null;
  function kh() {
    if (go) return go;
    var e, t = Yl, a = t.length, o, d = "value" in Ar ? Ar.value : Ar.textContent, b = d.length;
    for (e = 0; e < a && t[e] === d[e]; e++) ;
    var T = a - e;
    for (o = 1; o <= T && t[a - o] === d[b - o]; o++) ;
    return go = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function vo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yo() {
    return !0;
  }
  function Ah() {
    return !1;
  }
  function Kt(e) {
    function t(a, o, d, b, T) {
      this._reactName = a, this._targetInst = d, this.type = o, this.nativeEvent = b, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (a = e[D], this[D] = a ? a(b) : b[D]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? yo : Ah, this.isPropagationStopped = Ah, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yo);
      },
      persist: function() {
      },
      isPersistent: yo
    }), t;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _o = Kt(oa), Zi = g({}, oa, { view: 0, detail: 0 }), C_ = Kt(Zi), $l, Xl, Gi, bo = g({}, Zi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ql,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? ($l = e.screenX - Gi.screenX, Xl = e.screenY - Gi.screenY) : Xl = $l = 0, Gi = e), $l);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Xl;
    }
  }), Th = Kt(bo), k_ = g({}, bo, { dataTransfer: 0 }), A_ = Kt(k_), T_ = g({}, Zi, { relatedTarget: 0 }), Fl = Kt(T_), x_ = g({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), N_ = Kt(x_), O_ = g({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), M_ = Kt(O_), R_ = g({}, oa, { data: 0 }), xh = Kt(R_), j_ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, D_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, z_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function L_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = z_[e]) ? !!t[e] : !1;
  }
  function Ql() {
    return L_;
  }
  var P_ = g({}, Zi, {
    key: function(e) {
      if (e.key) {
        var t = j_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? D_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ql,
    charCode: function(e) {
      return e.type === "keypress" ? vo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), I_ = Kt(P_), B_ = g({}, bo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Nh = Kt(B_), U_ = g({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ql
  }), H_ = Kt(U_), q_ = g({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Z_ = Kt(q_), G_ = g({}, bo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), V_ = Kt(G_), Y_ = g({}, oa, {
    newState: 0,
    oldState: 0
  }), $_ = Kt(Y_), X_ = [9, 13, 27, 32], Kl = ar && "CompositionEvent" in window, Vi = null;
  ar && "documentMode" in document && (Vi = document.documentMode);
  var F_ = ar && "TextEvent" in window && !Vi, Oh = ar && (!Kl || Vi && 8 < Vi && 11 >= Vi), Mh = " ", Rh = !1;
  function jh(e, t) {
    switch (e) {
      case "keyup":
        return X_.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Dh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xa = !1;
  function Q_(e, t) {
    switch (e) {
      case "compositionend":
        return Dh(t);
      case "keypress":
        return t.which !== 32 ? null : (Rh = !0, Mh);
      case "textInput":
        return e = t.data, e === Mh && Rh ? null : e;
      default:
        return null;
    }
  }
  function K_(e, t) {
    if (Xa)
      return e === "compositionend" || !Kl && jh(e, t) ? (e = kh(), go = Yl = Ar = null, Xa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Oh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var J_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function zh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!J_[e.type] : t === "textarea";
  }
  function Lh(e, t, a, o) {
    Ya ? $a ? $a.push(o) : $a = [o] : Ya = o, t = su(t, "onChange"), 0 < t.length && (a = new _o(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: t }));
  }
  var Yi = null, $i = null;
  function W_(e) {
    gg(e, 0);
  }
  function So(e) {
    var t = Ui(e);
    if (vh(t)) return e;
  }
  function Ph(e, t) {
    if (e === "change") return t;
  }
  var Ih = !1;
  if (ar) {
    var Jl;
    if (ar) {
      var Wl = "oninput" in document;
      if (!Wl) {
        var Bh = document.createElement("div");
        Bh.setAttribute("oninput", "return;"), Wl = typeof Bh.oninput == "function";
      }
      Jl = Wl;
    } else Jl = !1;
    Ih = Jl && (!document.documentMode || 9 < document.documentMode);
  }
  function Uh() {
    Yi && (Yi.detachEvent("onpropertychange", Hh), $i = Yi = null);
  }
  function Hh(e) {
    if (e.propertyName === "value" && So($i)) {
      var t = [];
      Lh(
        t,
        $i,
        e,
        Zl(e)
      ), Ch(W_, t);
    }
  }
  function eb(e, t, a) {
    e === "focusin" ? (Uh(), Yi = t, $i = a, Yi.attachEvent("onpropertychange", Hh)) : e === "focusout" && Uh();
  }
  function tb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return So($i);
  }
  function nb(e, t) {
    if (e === "click") return So(t);
  }
  function rb(e, t) {
    if (e === "input" || e === "change")
      return So(t);
  }
  function ab(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var on = typeof Object.is == "function" ? Object.is : ab;
  function Xi(e, t) {
    if (on(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var d = a[o];
      if (!ge.call(t, d) || !on(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function qh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zh(e, t) {
    var a = qh(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= t && o >= t)
          return { node: a, offset: t - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = qh(a);
    }
  }
  function Gh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Vh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = po(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = po(e.document);
    }
    return t;
  }
  function ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ib = ar && "documentMode" in document && 11 >= document.documentMode, Fa = null, tc = null, Fi = null, nc = !1;
  function Yh(e, t, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    nc || Fa == null || Fa !== po(o) || (o = Fa, "selectionStart" in o && ec(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Fi && Xi(Fi, o) || (Fi = o, o = su(tc, "onSelect"), 0 < o.length && (t = new _o(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: o }), t.target = Fa)));
  }
  function ua(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Qa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, rc = {}, $h = {};
  ar && ($h = document.createElement("div").style, "AnimationEvent" in window || (delete Qa.animationend.animation, delete Qa.animationiteration.animation, delete Qa.animationstart.animation), "TransitionEvent" in window || delete Qa.transitionend.transition);
  function la(e) {
    if (rc[e]) return rc[e];
    if (!Qa[e]) return e;
    var t = Qa[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in $h)
        return rc[e] = t[a];
    return e;
  }
  var Xh = la("animationend"), Fh = la("animationiteration"), Qh = la("animationstart"), sb = la("transitionrun"), ob = la("transitionstart"), ub = la("transitioncancel"), Kh = la("transitionend"), Jh = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function zn(e, t) {
    Jh.set(e, t), sa(t, [e]);
  }
  var Wh = /* @__PURE__ */ new WeakMap();
  function Cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Wh.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: mh(t)
      }, Wh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: mh(t)
    };
  }
  var kn = [], Ka = 0, ic = 0;
  function wo() {
    for (var e = Ka, t = ic = Ka = 0; t < e; ) {
      var a = kn[t];
      kn[t++] = null;
      var o = kn[t];
      kn[t++] = null;
      var d = kn[t];
      kn[t++] = null;
      var b = kn[t];
      if (kn[t++] = null, o !== null && d !== null) {
        var T = o.pending;
        T === null ? d.next = d : (d.next = T.next, T.next = d), o.pending = d;
      }
      b !== 0 && ep(a, d, b);
    }
  }
  function Eo(e, t, a, o) {
    kn[Ka++] = e, kn[Ka++] = t, kn[Ka++] = a, kn[Ka++] = o, ic |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function sc(e, t, a, o) {
    return Eo(e, t, a, o), Co(e);
  }
  function Ja(e, t) {
    return Eo(e, null, null, t), Co(e);
  }
  function ep(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var d = !1, b = e.return; b !== null; )
      b.childLanes |= a, o = b.alternate, o !== null && (o.childLanes |= a), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (d = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, d && t !== null && (d = 31 - Zt(a), e = b.hiddenUpdates, o = e[d], o === null ? e[d] = [t] : o.push(t), t.lane = a | 536870912), b) : null;
  }
  function Co(e) {
    if (50 < bs)
      throw bs = 0, fd = null, Error(i(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {};
  function lb(e, t, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function un(e, t, a, o) {
    return new lb(e, t, a, o);
  }
  function oc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, t) {
    var a = e.alternate;
    return a === null ? (a = un(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function tp(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ko(e, t, a, o, d, b) {
    var T = 0;
    if (o = e, typeof e == "function") oc(e) && (T = 1);
    else if (typeof e == "string")
      T = d1(
        e,
        a,
        H.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = un(31, a, t, d), e.elementType = L, e.lanes = b, e;
        case h:
          return ca(a.children, d, b, t);
        case C:
          T = 8, d |= 24;
          break;
        case A:
          return e = un(12, a, t, d | 2), e.elementType = A, e.lanes = b, e;
        case _:
          return e = un(13, a, t, d), e.elementType = _, e.lanes = b, e;
        case w:
          return e = un(19, a, t, d), e.elementType = w, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case z:
                T = 10;
                break e;
              case x:
                T = 9;
                break e;
              case l:
                T = 11;
                break e;
              case k:
                T = 14;
                break e;
              case R:
                T = 16, o = null;
                break e;
            }
          T = 29, a = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = un(T, a, t, d), t.elementType = e, t.type = o, t.lanes = b, t;
  }
  function ca(e, t, a, o) {
    return e = un(7, e, o, t), e.lanes = a, e;
  }
  function uc(e, t, a) {
    return e = un(6, e, null, t), e.lanes = a, e;
  }
  function lc(e, t, a) {
    return t = un(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var ei = [], ti = 0, Ao = null, To = 0, An = [], Tn = 0, da = null, sr = 1, or = "";
  function fa(e, t) {
    ei[ti++] = To, ei[ti++] = Ao, Ao = e, To = t;
  }
  function np(e, t, a) {
    An[Tn++] = sr, An[Tn++] = or, An[Tn++] = da, da = e;
    var o = sr;
    e = or;
    var d = 32 - Zt(o) - 1;
    o &= ~(1 << d), a += 1;
    var b = 32 - Zt(t) + d;
    if (30 < b) {
      var T = d - d % 5;
      b = (o & (1 << T) - 1).toString(32), o >>= T, d -= T, sr = 1 << 32 - Zt(t) + d | a << d | o, or = b + e;
    } else
      sr = 1 << b | a << d | o, or = e;
  }
  function cc(e) {
    e.return !== null && (fa(e, 1), np(e, 1, 0));
  }
  function dc(e) {
    for (; e === Ao; )
      Ao = ei[--ti], ei[ti] = null, To = ei[--ti], ei[ti] = null;
    for (; e === da; )
      da = An[--Tn], An[Tn] = null, or = An[--Tn], An[Tn] = null, sr = An[--Tn], An[Tn] = null;
  }
  var Vt = null, ft = null, Ye = !1, ha = null, Yn = !1, fc = Error(i(519));
  function pa(e) {
    var t = Error(i(418, ""));
    throw Ji(Cn(t, e)), fc;
  }
  function rp(e) {
    var t = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (t[It] = e, t[Qt] = o, a) {
      case "dialog":
        Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ws.length; a++)
          Be(ws[a], t);
        break;
      case "source":
        Be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "input":
        Be("invalid", t), yh(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), ho(t);
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), bh(t, o.value, o.defaultValue, o.children), ho(t);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || o.suppressHydrationWarning === !0 || bg(t.textContent, a) ? (o.popover != null && (Be("beforetoggle", t), Be("toggle", t)), o.onScroll != null && Be("scroll", t), o.onScrollEnd != null && Be("scrollend", t), o.onClick != null && (t.onclick = ou), t = !0) : t = !1, t || pa(e);
  }
  function ap(e) {
    for (Vt = e.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 13:
          Yn = !1;
          return;
        case 27:
        case 3:
          Yn = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function Qi(e) {
    if (e !== Vt) return !1;
    if (!Ye) return ap(e), Ye = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || xd(e.type, e.memoizedProps)), a = !a), a && ft && pa(e), ap(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                ft = Pn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      t === 27 ? (t = ft, qr(e.type) ? (e = Rd, Rd = null, ft = e) : ft = t) : ft = Vt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ki() {
    ft = Vt = null, Ye = !1;
  }
  function ip() {
    var e = ha;
    return e !== null && (en === null ? en = e : en.push.apply(
      en,
      e
    ), ha = null), e;
  }
  function Ji(e) {
    ha === null ? ha = [e] : ha.push(e);
  }
  var hc = $(null), ma = null, ur = null;
  function Tr(e, t, a) {
    V(hc, t._currentValue), t._currentValue = a;
  }
  function lr(e) {
    e._currentValue = hc.current, le(hc);
  }
  function pc(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function mc(e, t, a, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var b = d.dependencies;
      if (b !== null) {
        var T = d.child;
        b = b.firstContext;
        e: for (; b !== null; ) {
          var D = b;
          b = d;
          for (var U = 0; U < t.length; U++)
            if (D.context === t[U]) {
              b.lanes |= a, D = b.alternate, D !== null && (D.lanes |= a), pc(
                b.return,
                a,
                e
              ), o || (T = null);
              break e;
            }
          b = D.next;
        }
      } else if (d.tag === 18) {
        if (T = d.return, T === null) throw Error(i(341));
        T.lanes |= a, b = T.alternate, b !== null && (b.lanes |= a), pc(T, a, e), T = null;
      } else T = d.child;
      if (T !== null) T.return = d;
      else
        for (T = d; T !== null; ) {
          if (T === e) {
            T = null;
            break;
          }
          if (d = T.sibling, d !== null) {
            d.return = T.return, T = d;
            break;
          }
          T = T.return;
        }
      d = T;
    }
  }
  function Wi(e, t, a, o) {
    e = null;
    for (var d = t, b = !1; d !== null; ) {
      if (!b) {
        if ((d.flags & 524288) !== 0) b = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var T = d.alternate;
        if (T === null) throw Error(i(387));
        if (T = T.memoizedProps, T !== null) {
          var D = d.type;
          on(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === ce.current) {
        if (T = d.alternate, T === null) throw Error(i(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(xs) : e = [xs]);
      }
      d = d.return;
    }
    e !== null && mc(
      t,
      e,
      a,
      o
    ), t.flags |= 262144;
  }
  function xo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!on(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ga(e) {
    ma = e, ur = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Bt(e) {
    return sp(ma, e);
  }
  function No(e, t) {
    return ma === null && ga(e), sp(e, t);
  }
  function sp(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ur === null) {
      if (e === null) throw Error(i(308));
      ur = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ur = ur.next = t;
    return a;
  }
  var cb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, db = n.unstable_scheduleCallback, fb = n.unstable_NormalPriority, Et = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gc() {
    return {
      controller: new cb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function es(e) {
    e.refCount--, e.refCount === 0 && db(fb, function() {
      e.controller.abort();
    });
  }
  var ts = null, vc = 0, ni = 0, ri = null;
  function hb(e, t) {
    if (ts === null) {
      var a = ts = [];
      vc = 0, ni = _d(), ri = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return vc++, t.then(op, op), t;
  }
  function op() {
    if (--vc === 0 && ts !== null) {
      ri !== null && (ri.status = "fulfilled");
      var e = ts;
      ts = null, ni = 0, ri = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function pb(e, t) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        a.push(d);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = t;
        for (var d = 0; d < a.length; d++) (0, a[d])(t);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < a.length; d++)
          (0, a[d])(void 0);
      }
    ), o;
  }
  var up = M.S;
  M.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && hb(e, t), up !== null && up(e, t);
  };
  var va = $(null);
  function yc() {
    var e = va.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Oo(e, t) {
    t === null ? V(va, va.current) : V(va, t.pool);
  }
  function lp() {
    var e = yc();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var ns = Error(i(460)), cp = Error(i(474)), Mo = Error(i(542)), _c = { then: function() {
  } };
  function dp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ro() {
  }
  function fp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Ro, Ro), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, pp(e), e;
      default:
        if (typeof t.status == "string") t.then(Ro, Ro);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = t, e.status = "pending", e.then(
            function(o) {
              if (t.status === "pending") {
                var d = t;
                d.status = "fulfilled", d.value = o;
              }
            },
            function(o) {
              if (t.status === "pending") {
                var d = t;
                d.status = "rejected", d.reason = o;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, pp(e), e;
        }
        throw rs = t, ns;
    }
  }
  var rs = null;
  function hp() {
    if (rs === null) throw Error(i(459));
    var e = rs;
    return rs = null, e;
  }
  function pp(e) {
    if (e === ns || e === Mo)
      throw Error(i(483));
  }
  var xr = !1;
  function bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Sc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Nr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Or(e, t, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ($e & 2) !== 0) {
      var d = o.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, t = Co(e), ep(e, null, a), t;
    }
    return Eo(e, o, t, a), Co(e);
  }
  function as(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, oh(e, a);
    }
  }
  function wc(e, t) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var d = null, b = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var T = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          b === null ? d = b = T : b = b.next = T, a = a.next;
        } while (a !== null);
        b === null ? d = b = t : b = b.next = t;
      } else d = b = t;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: b,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Ec = !1;
  function is() {
    if (Ec) {
      var e = ri;
      if (e !== null) throw e;
    }
  }
  function ss(e, t, a, o) {
    Ec = !1;
    var d = e.updateQueue;
    xr = !1;
    var b = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var U = D, Q = U.next;
      U.next = null, T === null ? b = Q : T.next = Q, T = U;
      var ie = e.alternate;
      ie !== null && (ie = ie.updateQueue, D = ie.lastBaseUpdate, D !== T && (D === null ? ie.firstBaseUpdate = Q : D.next = Q, ie.lastBaseUpdate = U));
    }
    if (b !== null) {
      var ue = d.baseState;
      T = 0, ie = Q = U = null, D = b;
      do {
        var J = D.lane & -536870913, ee = J !== D.lane;
        if (ee ? (Ge & J) === J : (o & J) === J) {
          J !== 0 && J === ni && (Ec = !0), ie !== null && (ie = ie.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Ce = e, we = D;
            J = t;
            var Je = a;
            switch (we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  ue = Ce.call(Je, ue, J);
                  break e;
                }
                ue = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, J = typeof Ce == "function" ? Ce.call(Je, ue, J) : Ce, J == null) break e;
                ue = g({}, ue, J);
                break e;
              case 2:
                xr = !0;
            }
          }
          J = D.callback, J !== null && (e.flags |= 64, ee && (e.flags |= 8192), ee = d.callbacks, ee === null ? d.callbacks = [J] : ee.push(J));
        } else
          ee = {
            lane: J,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, ie === null ? (Q = ie = ee, U = ue) : ie = ie.next = ee, T |= J;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          ee = D, D = ee.next, ee.next = null, d.lastBaseUpdate = ee, d.shared.pending = null;
        }
      } while (!0);
      ie === null && (U = ue), d.baseState = U, d.firstBaseUpdate = Q, d.lastBaseUpdate = ie, b === null && (d.shared.lanes = 0), Ir |= T, e.lanes = T, e.memoizedState = ue;
    }
  }
  function mp(e, t) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(t);
  }
  function gp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        mp(a[e], t);
  }
  var ai = $(null), jo = $(0);
  function vp(e, t) {
    e = gr, V(jo, e), V(ai, t), gr = e | t.baseLanes;
  }
  function Cc() {
    V(jo, gr), V(ai, ai.current);
  }
  function kc() {
    gr = jo.current, le(ai), le(jo);
  }
  var Mr = 0, ze = null, Qe = null, _t = null, Do = !1, ii = !1, ya = !1, zo = 0, os = 0, si = null, mb = 0;
  function gt() {
    throw Error(i(321));
  }
  function Ac(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!on(e[a], t[a])) return !1;
    return !0;
  }
  function Tc(e, t, a, o, d, b) {
    return Mr = b, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? em : tm, ya = !1, b = a(o, d), ya = !1, ii && (b = _p(
      t,
      a,
      o,
      d
    )), yp(e), b;
  }
  function yp(e) {
    M.H = Ho;
    var t = Qe !== null && Qe.next !== null;
    if (Mr = 0, _t = Qe = ze = null, Do = !1, os = 0, si = null, t) throw Error(i(300));
    e === null || xt || (e = e.dependencies, e !== null && xo(e) && (xt = !0));
  }
  function _p(e, t, a, o) {
    ze = e;
    var d = 0;
    do {
      if (ii && (si = null), os = 0, ii = !1, 25 <= d) throw Error(i(301));
      if (d += 1, _t = Qe = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      M.H = wb, b = t(a, o);
    } while (ii);
    return b;
  }
  function gb() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? us(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function xc() {
    var e = zo !== 0;
    return zo = 0, e;
  }
  function Nc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Oc(e) {
    if (Do) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Do = !1;
    }
    Mr = 0, _t = Qe = ze = null, ii = !1, os = zo = 0, si = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? ze.memoizedState = _t = e : _t = _t.next = e, _t;
  }
  function bt() {
    if (Qe === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = _t === null ? ze.memoizedState : _t.next;
    if (t !== null)
      _t = t, Qe = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(i(467)) : Error(i(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, _t === null ? ze.memoizedState = _t = e : _t = _t.next = e;
    }
    return _t;
  }
  function Mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var t = os;
    return os += 1, si === null && (si = []), e = fp(si, e, t), t = ze, (_t === null ? t.memoizedState : _t.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? em : tm), e;
  }
  function Lo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === z) return Bt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Rc(e) {
    var t = null, a = ze.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var o = ze.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Mc(), ze.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), o = 0; o < e; o++)
        a[o] = j;
    return t.index++, a;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Po(e) {
    var t = bt();
    return jc(t, Qe, e);
  }
  function jc(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var d = e.baseQueue, b = o.pending;
    if (b !== null) {
      if (d !== null) {
        var T = d.next;
        d.next = b.next, b.next = T;
      }
      t.baseQueue = d = b, o.pending = null;
    }
    if (b = e.baseState, d === null) e.memoizedState = b;
    else {
      t = d.next;
      var D = T = null, U = null, Q = t, ie = !1;
      do {
        var ue = Q.lane & -536870913;
        if (ue !== Q.lane ? (Ge & ue) === ue : (Mr & ue) === ue) {
          var J = Q.revertLane;
          if (J === 0)
            U !== null && (U = U.next = {
              lane: 0,
              revertLane: 0,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), ue === ni && (ie = !0);
          else if ((Mr & J) === J) {
            Q = Q.next, J === ni && (ie = !0);
            continue;
          } else
            ue = {
              lane: 0,
              revertLane: Q.revertLane,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }, U === null ? (D = U = ue, T = b) : U = U.next = ue, ze.lanes |= J, Ir |= J;
          ue = Q.action, ya && a(b, ue), b = Q.hasEagerState ? Q.eagerState : a(b, ue);
        } else
          J = {
            lane: ue,
            revertLane: Q.revertLane,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, U === null ? (D = U = J, T = b) : U = U.next = J, ze.lanes |= ue, Ir |= ue;
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (U === null ? T = b : U.next = D, !on(b, e.memoizedState) && (xt = !0, ie && (a = ri, a !== null)))
        throw a;
      e.memoizedState = b, e.baseState = T, e.baseQueue = U, o.lastRenderedState = b;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Dc(e) {
    var t = bt(), a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, d = a.pending, b = t.memoizedState;
    if (d !== null) {
      a.pending = null;
      var T = d = d.next;
      do
        b = e(b, T.action), T = T.next;
      while (T !== d);
      on(b, t.memoizedState) || (xt = !0), t.memoizedState = b, t.baseQueue === null && (t.baseState = b), a.lastRenderedState = b;
    }
    return [b, o];
  }
  function bp(e, t, a) {
    var o = ze, d = bt(), b = Ye;
    if (b) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var T = !on(
      (Qe || d).memoizedState,
      a
    );
    T && (d.memoizedState = a, xt = !0), d = d.queue;
    var D = Ep.bind(null, o, d, e);
    if (ls(2048, 8, D, [e]), d.getSnapshot !== t || T || _t !== null && _t.memoizedState.tag & 1) {
      if (o.flags |= 2048, oi(
        9,
        Io(),
        wp.bind(
          null,
          o,
          d,
          a,
          t
        ),
        null
      ), nt === null) throw Error(i(349));
      b || (Mr & 124) !== 0 || Sp(o, t, a);
    }
    return a;
  }
  function Sp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ze.updateQueue, t === null ? (t = Mc(), ze.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function wp(e, t, a, o) {
    t.value = a, t.getSnapshot = o, Cp(t) && kp(e);
  }
  function Ep(e, t, a) {
    return a(function() {
      Cp(t) && kp(e);
    });
  }
  function Cp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !on(e, a);
    } catch {
      return !0;
    }
  }
  function kp(e) {
    var t = Ja(e, 2);
    t !== null && hn(t, e, 2);
  }
  function zc(e) {
    var t = Jt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ya) {
        Gn(!0);
        try {
          a();
        } finally {
          Gn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, t;
  }
  function Ap(e, t, a, o) {
    return e.baseState = a, jc(
      e,
      Qe,
      typeof o == "function" ? o : cr
    );
  }
  function vb(e, t, a, o, d) {
    if (Uo(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var b = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(T) {
          b.listeners.push(T);
        }
      };
      M.T !== null ? a(!0) : b.isTransition = !1, o(b), a = t.pending, a === null ? (b.next = t.pending = b, Tp(t, b)) : (b.next = a.next, t.pending = a.next = b);
    }
  }
  function Tp(e, t) {
    var a = t.action, o = t.payload, d = e.state;
    if (t.isTransition) {
      var b = M.T, T = {};
      M.T = T;
      try {
        var D = a(d, o), U = M.S;
        U !== null && U(T, D), xp(e, t, D);
      } catch (Q) {
        Lc(e, t, Q);
      } finally {
        M.T = b;
      }
    } else
      try {
        b = a(d, o), xp(e, t, b);
      } catch (Q) {
        Lc(e, t, Q);
      }
  }
  function xp(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        Np(e, t, o);
      },
      function(o) {
        return Lc(e, t, o);
      }
    ) : Np(e, t, a);
  }
  function Np(e, t, a) {
    t.status = "fulfilled", t.value = a, Op(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Tp(e, a)));
  }
  function Lc(e, t, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = a, Op(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function Op(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Mp(e, t) {
    return t;
  }
  function Rp(e, t) {
    if (Ye) {
      var a = nt.formState;
      if (a !== null) {
        e: {
          var o = ze;
          if (Ye) {
            if (ft) {
              t: {
                for (var d = ft, b = Yn; d.nodeType !== 8; ) {
                  if (!b) {
                    d = null;
                    break t;
                  }
                  if (d = Pn(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                b = d.data, d = b === "F!" || b === "F" ? d : null;
              }
              if (d) {
                ft = Pn(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            pa(o);
          }
          o = !1;
        }
        o && (t = a[0]);
      }
    }
    return a = Jt(), a.memoizedState = a.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mp,
      lastRenderedState: t
    }, a.queue = o, a = Kp.bind(
      null,
      ze,
      o
    ), o.dispatch = a, o = zc(!1), b = Hc.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = Jt(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, a = vb.bind(
      null,
      ze,
      d,
      b,
      a
    ), d.dispatch = a, o.memoizedState = e, [t, a, !1];
  }
  function jp(e) {
    var t = bt();
    return Dp(t, Qe, e);
  }
  function Dp(e, t, a) {
    if (t = jc(
      e,
      t,
      Mp
    )[0], e = Po(cr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = us(t);
      } catch (T) {
        throw T === ns ? Mo : T;
      }
    else o = t;
    t = bt();
    var d = t.queue, b = d.dispatch;
    return a !== t.memoizedState && (ze.flags |= 2048, oi(
      9,
      Io(),
      yb.bind(null, d, a),
      null
    )), [o, b, e];
  }
  function yb(e, t) {
    e.action = t;
  }
  function zp(e) {
    var t = bt(), a = Qe;
    if (a !== null)
      return Dp(t, a, e);
    bt(), t = t.memoizedState, a = bt();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [t, o, !1];
  }
  function oi(e, t, a, o) {
    return e = { tag: e, create: a, deps: o, inst: t, next: null }, t = ze.updateQueue, t === null && (t = Mc(), ze.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, t.lastEffect = e), e;
  }
  function Io() {
    return { destroy: void 0, resource: void 0 };
  }
  function Lp() {
    return bt().memoizedState;
  }
  function Bo(e, t, a, o) {
    var d = Jt();
    o = o === void 0 ? null : o, ze.flags |= e, d.memoizedState = oi(
      1 | t,
      Io(),
      a,
      o
    );
  }
  function ls(e, t, a, o) {
    var d = bt();
    o = o === void 0 ? null : o;
    var b = d.memoizedState.inst;
    Qe !== null && o !== null && Ac(o, Qe.memoizedState.deps) ? d.memoizedState = oi(t, b, a, o) : (ze.flags |= e, d.memoizedState = oi(
      1 | t,
      b,
      a,
      o
    ));
  }
  function Pp(e, t) {
    Bo(8390656, 8, e, t);
  }
  function Ip(e, t) {
    ls(2048, 8, e, t);
  }
  function Bp(e, t) {
    return ls(4, 2, e, t);
  }
  function Up(e, t) {
    return ls(4, 4, e, t);
  }
  function Hp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function qp(e, t, a) {
    a = a != null ? a.concat([e]) : null, ls(4, 4, Hp.bind(null, t, e), a);
  }
  function Pc() {
  }
  function Zp(e, t) {
    var a = bt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && Ac(t, o[1]) ? o[0] : (a.memoizedState = [e, t], e);
  }
  function Gp(e, t) {
    var a = bt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    if (t !== null && Ac(t, o[1]))
      return o[0];
    if (o = e(), ya) {
      Gn(!0);
      try {
        e();
      } finally {
        Gn(!1);
      }
    }
    return a.memoizedState = [o, t], o;
  }
  function Ic(e, t, a) {
    return a === void 0 || (Mr & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = $m(), ze.lanes |= e, Ir |= e, a);
  }
  function Vp(e, t, a, o) {
    return on(a, t) ? a : ai.current !== null ? (e = Ic(e, a, o), on(e, t) || (xt = !0), e) : (Mr & 42) === 0 ? (xt = !0, e.memoizedState = a) : (e = $m(), ze.lanes |= e, Ir |= e, t);
  }
  function Yp(e, t, a, o, d) {
    var b = B.p;
    B.p = b !== 0 && 8 > b ? b : 8;
    var T = M.T, D = {};
    M.T = D, Hc(e, !1, t, a);
    try {
      var U = d(), Q = M.S;
      if (Q !== null && Q(D, U), U !== null && typeof U == "object" && typeof U.then == "function") {
        var ie = pb(
          U,
          o
        );
        cs(
          e,
          t,
          ie,
          fn(e)
        );
      } else
        cs(
          e,
          t,
          o,
          fn(e)
        );
    } catch (ue) {
      cs(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: ue },
        fn()
      );
    } finally {
      B.p = b, M.T = T;
    }
  }
  function _b() {
  }
  function Bc(e, t, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var d = $p(e).queue;
    Yp(
      e,
      d,
      t,
      K,
      a === null ? _b : function() {
        return Xp(e), a(o);
      }
    );
  }
  function $p(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: K
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Xp(e) {
    var t = $p(e).next.queue;
    cs(e, t, {}, fn());
  }
  function Uc() {
    return Bt(xs);
  }
  function Fp() {
    return bt().memoizedState;
  }
  function Qp() {
    return bt().memoizedState;
  }
  function bb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = fn();
          e = Nr(a);
          var o = Or(t, e, a);
          o !== null && (hn(o, t, a), as(o, t, a)), t = { cache: gc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Sb(e, t, a) {
    var o = fn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e) ? Jp(t, a) : (a = sc(e, t, a, o), a !== null && (hn(a, e, o), Wp(a, t, o)));
  }
  function Kp(e, t, a) {
    var o = fn();
    cs(e, t, a, o);
  }
  function cs(e, t, a, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Uo(e)) Jp(t, d);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = t.lastRenderedReducer, b !== null))
        try {
          var T = t.lastRenderedState, D = b(T, a);
          if (d.hasEagerState = !0, d.eagerState = D, on(D, T))
            return Eo(e, t, d, 0), nt === null && wo(), !1;
        } catch {
        } finally {
        }
      if (a = sc(e, t, d, o), a !== null)
        return hn(a, e, o), Wp(a, t, o), !0;
    }
    return !1;
  }
  function Hc(e, t, a, o) {
    if (o = {
      lane: 2,
      revertLane: _d(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e)) {
      if (t) throw Error(i(479));
    } else
      t = sc(
        e,
        a,
        o,
        2
      ), t !== null && hn(t, e, 2);
  }
  function Uo(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function Jp(e, t) {
    ii = Do = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Wp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, oh(e, a);
    }
  }
  var Ho = {
    readContext: Bt,
    use: Lo,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, em = {
    readContext: Bt,
    use: Lo,
    useCallback: function(e, t) {
      return Jt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Bt,
    useEffect: Pp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Bo(
        4194308,
        4,
        Hp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Bo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Bo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Jt();
      t = t === void 0 ? null : t;
      var o = e();
      if (ya) {
        Gn(!0);
        try {
          e();
        } finally {
          Gn(!1);
        }
      }
      return a.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, a) {
      var o = Jt();
      if (a !== void 0) {
        var d = a(t);
        if (ya) {
          Gn(!0);
          try {
            a(t);
          } finally {
            Gn(!1);
          }
        }
      } else d = t;
      return o.memoizedState = o.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, o.queue = e, e = e.dispatch = Sb.bind(
        null,
        ze,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = Jt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = zc(e);
      var t = e.queue, a = Kp.bind(null, ze, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var a = Jt();
      return Ic(a, e, t);
    },
    useTransition: function() {
      var e = zc(!1);
      return e = Yp.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var o = ze, d = Jt();
      if (Ye) {
        if (a === void 0)
          throw Error(i(407));
        a = a();
      } else {
        if (a = t(), nt === null)
          throw Error(i(349));
        (Ge & 124) !== 0 || Sp(o, t, a);
      }
      d.memoizedState = a;
      var b = { value: a, getSnapshot: t };
      return d.queue = b, Pp(Ep.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, oi(
        9,
        Io(),
        wp.bind(
          null,
          o,
          b,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Jt(), t = nt.identifierPrefix;
      if (Ye) {
        var a = or, o = sr;
        a = (o & ~(1 << 32 - Zt(o) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = zo++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = mb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Uc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(e) {
      var t = Jt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Hc.bind(
        null,
        ze,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Rc,
    useCacheRefresh: function() {
      return Jt().memoizedState = bb.bind(
        null,
        ze
      );
    }
  }, tm = {
    readContext: Bt,
    use: Lo,
    useCallback: Zp,
    useContext: Bt,
    useEffect: Ip,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Gp,
    useReducer: Po,
    useRef: Lp,
    useState: function() {
      return Po(cr);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var a = bt();
      return Vp(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Po(cr)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        t
      ];
    },
    useSyncExternalStore: bp,
    useId: Fp,
    useHostTransitionStatus: Uc,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(e, t) {
      var a = bt();
      return Ap(a, Qe, e, t);
    },
    useMemoCache: Rc,
    useCacheRefresh: Qp
  }, wb = {
    readContext: Bt,
    use: Lo,
    useCallback: Zp,
    useContext: Bt,
    useEffect: Ip,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Gp,
    useReducer: Dc,
    useRef: Lp,
    useState: function() {
      return Dc(cr);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var a = bt();
      return Qe === null ? Ic(a, e, t) : Vp(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Dc(cr)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        t
      ];
    },
    useSyncExternalStore: bp,
    useId: Fp,
    useHostTransitionStatus: Uc,
    useFormState: zp,
    useActionState: zp,
    useOptimistic: function(e, t) {
      var a = bt();
      return Qe !== null ? Ap(a, Qe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: Qp
  }, ui = null, ds = 0;
  function qo(e) {
    var t = ds;
    return ds += 1, ui === null && (ui = []), fp(ui, e, t);
  }
  function fs(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Zo(e, t) {
    throw t.$$typeof === E ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function nm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rm(e) {
    function t(G, q) {
      if (e) {
        var X = G.deletions;
        X === null ? (G.deletions = [q], G.flags |= 16) : X.push(q);
      }
    }
    function a(G, q) {
      if (!e) return null;
      for (; q !== null; )
        t(G, q), q = q.sibling;
      return null;
    }
    function o(G) {
      for (var q = /* @__PURE__ */ new Map(); G !== null; )
        G.key !== null ? q.set(G.key, G) : q.set(G.index, G), G = G.sibling;
      return q;
    }
    function d(G, q) {
      return G = ir(G, q), G.index = 0, G.sibling = null, G;
    }
    function b(G, q, X) {
      return G.index = X, e ? (X = G.alternate, X !== null ? (X = X.index, X < q ? (G.flags |= 67108866, q) : X) : (G.flags |= 67108866, q)) : (G.flags |= 1048576, q);
    }
    function T(G) {
      return e && G.alternate === null && (G.flags |= 67108866), G;
    }
    function D(G, q, X, oe) {
      return q === null || q.tag !== 6 ? (q = uc(X, G.mode, oe), q.return = G, q) : (q = d(q, X), q.return = G, q);
    }
    function U(G, q, X, oe) {
      var me = X.type;
      return me === h ? ie(
        G,
        q,
        X.props.children,
        oe,
        X.key
      ) : q !== null && (q.elementType === me || typeof me == "object" && me !== null && me.$$typeof === R && nm(me) === q.type) ? (q = d(q, X.props), fs(q, X), q.return = G, q) : (q = ko(
        X.type,
        X.key,
        X.props,
        null,
        G.mode,
        oe
      ), fs(q, X), q.return = G, q);
    }
    function Q(G, q, X, oe) {
      return q === null || q.tag !== 4 || q.stateNode.containerInfo !== X.containerInfo || q.stateNode.implementation !== X.implementation ? (q = lc(X, G.mode, oe), q.return = G, q) : (q = d(q, X.children || []), q.return = G, q);
    }
    function ie(G, q, X, oe, me) {
      return q === null || q.tag !== 7 ? (q = ca(
        X,
        G.mode,
        oe,
        me
      ), q.return = G, q) : (q = d(q, X), q.return = G, q);
    }
    function ue(G, q, X) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return q = uc(
          "" + q,
          G.mode,
          X
        ), q.return = G, q;
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case v:
            return X = ko(
              q.type,
              q.key,
              q.props,
              null,
              G.mode,
              X
            ), fs(X, q), X.return = G, X;
          case S:
            return q = lc(
              q,
              G.mode,
              X
            ), q.return = G, q;
          case R:
            var oe = q._init;
            return q = oe(q._payload), ue(G, q, X);
        }
        if (W(q) || Z(q))
          return q = ca(
            q,
            G.mode,
            X,
            null
          ), q.return = G, q;
        if (typeof q.then == "function")
          return ue(G, qo(q), X);
        if (q.$$typeof === z)
          return ue(
            G,
            No(G, q),
            X
          );
        Zo(G, q);
      }
      return null;
    }
    function J(G, q, X, oe) {
      var me = q !== null ? q.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return me !== null ? null : D(G, q, "" + X, oe);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case v:
            return X.key === me ? U(G, q, X, oe) : null;
          case S:
            return X.key === me ? Q(G, q, X, oe) : null;
          case R:
            return me = X._init, X = me(X._payload), J(G, q, X, oe);
        }
        if (W(X) || Z(X))
          return me !== null ? null : ie(G, q, X, oe, null);
        if (typeof X.then == "function")
          return J(
            G,
            q,
            qo(X),
            oe
          );
        if (X.$$typeof === z)
          return J(
            G,
            q,
            No(G, X),
            oe
          );
        Zo(G, X);
      }
      return null;
    }
    function ee(G, q, X, oe, me) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return G = G.get(X) || null, D(q, G, "" + oe, me);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case v:
            return G = G.get(
              oe.key === null ? X : oe.key
            ) || null, U(q, G, oe, me);
          case S:
            return G = G.get(
              oe.key === null ? X : oe.key
            ) || null, Q(q, G, oe, me);
          case R:
            var Pe = oe._init;
            return oe = Pe(oe._payload), ee(
              G,
              q,
              X,
              oe,
              me
            );
        }
        if (W(oe) || Z(oe))
          return G = G.get(X) || null, ie(q, G, oe, me, null);
        if (typeof oe.then == "function")
          return ee(
            G,
            q,
            X,
            qo(oe),
            me
          );
        if (oe.$$typeof === z)
          return ee(
            G,
            q,
            X,
            No(q, oe),
            me
          );
        Zo(q, oe);
      }
      return null;
    }
    function Ce(G, q, X, oe) {
      for (var me = null, Pe = null, be = q, Ee = q = 0, Ot = null; be !== null && Ee < X.length; Ee++) {
        be.index > Ee ? (Ot = be, be = null) : Ot = be.sibling;
        var Ve = J(
          G,
          be,
          X[Ee],
          oe
        );
        if (Ve === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Ve.alternate === null && t(G, be), q = b(Ve, q, Ee), Pe === null ? me = Ve : Pe.sibling = Ve, Pe = Ve, be = Ot;
      }
      if (Ee === X.length)
        return a(G, be), Ye && fa(G, Ee), me;
      if (be === null) {
        for (; Ee < X.length; Ee++)
          be = ue(G, X[Ee], oe), be !== null && (q = b(
            be,
            q,
            Ee
          ), Pe === null ? me = be : Pe.sibling = be, Pe = be);
        return Ye && fa(G, Ee), me;
      }
      for (be = o(be); Ee < X.length; Ee++)
        Ot = ee(
          be,
          G,
          Ee,
          X[Ee],
          oe
        ), Ot !== null && (e && Ot.alternate !== null && be.delete(
          Ot.key === null ? Ee : Ot.key
        ), q = b(
          Ot,
          q,
          Ee
        ), Pe === null ? me = Ot : Pe.sibling = Ot, Pe = Ot);
      return e && be.forEach(function($r) {
        return t(G, $r);
      }), Ye && fa(G, Ee), me;
    }
    function we(G, q, X, oe) {
      if (X == null) throw Error(i(151));
      for (var me = null, Pe = null, be = q, Ee = q = 0, Ot = null, Ve = X.next(); be !== null && !Ve.done; Ee++, Ve = X.next()) {
        be.index > Ee ? (Ot = be, be = null) : Ot = be.sibling;
        var $r = J(G, be, Ve.value, oe);
        if ($r === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && $r.alternate === null && t(G, be), q = b($r, q, Ee), Pe === null ? me = $r : Pe.sibling = $r, Pe = $r, be = Ot;
      }
      if (Ve.done)
        return a(G, be), Ye && fa(G, Ee), me;
      if (be === null) {
        for (; !Ve.done; Ee++, Ve = X.next())
          Ve = ue(G, Ve.value, oe), Ve !== null && (q = b(Ve, q, Ee), Pe === null ? me = Ve : Pe.sibling = Ve, Pe = Ve);
        return Ye && fa(G, Ee), me;
      }
      for (be = o(be); !Ve.done; Ee++, Ve = X.next())
        Ve = ee(be, G, Ee, Ve.value, oe), Ve !== null && (e && Ve.alternate !== null && be.delete(Ve.key === null ? Ee : Ve.key), q = b(Ve, q, Ee), Pe === null ? me = Ve : Pe.sibling = Ve, Pe = Ve);
      return e && be.forEach(function(E1) {
        return t(G, E1);
      }), Ye && fa(G, Ee), me;
    }
    function Je(G, q, X, oe) {
      if (typeof X == "object" && X !== null && X.type === h && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case v:
            e: {
              for (var me = X.key; q !== null; ) {
                if (q.key === me) {
                  if (me = X.type, me === h) {
                    if (q.tag === 7) {
                      a(
                        G,
                        q.sibling
                      ), oe = d(
                        q,
                        X.props.children
                      ), oe.return = G, G = oe;
                      break e;
                    }
                  } else if (q.elementType === me || typeof me == "object" && me !== null && me.$$typeof === R && nm(me) === q.type) {
                    a(
                      G,
                      q.sibling
                    ), oe = d(q, X.props), fs(oe, X), oe.return = G, G = oe;
                    break e;
                  }
                  a(G, q);
                  break;
                } else t(G, q);
                q = q.sibling;
              }
              X.type === h ? (oe = ca(
                X.props.children,
                G.mode,
                oe,
                X.key
              ), oe.return = G, G = oe) : (oe = ko(
                X.type,
                X.key,
                X.props,
                null,
                G.mode,
                oe
              ), fs(oe, X), oe.return = G, G = oe);
            }
            return T(G);
          case S:
            e: {
              for (me = X.key; q !== null; ) {
                if (q.key === me)
                  if (q.tag === 4 && q.stateNode.containerInfo === X.containerInfo && q.stateNode.implementation === X.implementation) {
                    a(
                      G,
                      q.sibling
                    ), oe = d(q, X.children || []), oe.return = G, G = oe;
                    break e;
                  } else {
                    a(G, q);
                    break;
                  }
                else t(G, q);
                q = q.sibling;
              }
              oe = lc(X, G.mode, oe), oe.return = G, G = oe;
            }
            return T(G);
          case R:
            return me = X._init, X = me(X._payload), Je(
              G,
              q,
              X,
              oe
            );
        }
        if (W(X))
          return Ce(
            G,
            q,
            X,
            oe
          );
        if (Z(X)) {
          if (me = Z(X), typeof me != "function") throw Error(i(150));
          return X = me.call(X), we(
            G,
            q,
            X,
            oe
          );
        }
        if (typeof X.then == "function")
          return Je(
            G,
            q,
            qo(X),
            oe
          );
        if (X.$$typeof === z)
          return Je(
            G,
            q,
            No(G, X),
            oe
          );
        Zo(G, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, q !== null && q.tag === 6 ? (a(G, q.sibling), oe = d(q, X), oe.return = G, G = oe) : (a(G, q), oe = uc(X, G.mode, oe), oe.return = G, G = oe), T(G)) : a(G, q);
    }
    return function(G, q, X, oe) {
      try {
        ds = 0;
        var me = Je(
          G,
          q,
          X,
          oe
        );
        return ui = null, me;
      } catch (be) {
        if (be === ns || be === Mo) throw be;
        var Pe = un(29, be, null, G.mode);
        return Pe.lanes = oe, Pe.return = G, Pe;
      } finally {
      }
    };
  }
  var li = rm(!0), am = rm(!1), xn = $(null), $n = null;
  function Rr(e) {
    var t = e.alternate;
    V(Ct, Ct.current & 1), V(xn, e), $n === null && (t === null || ai.current !== null || t.memoizedState !== null) && ($n = e);
  }
  function im(e) {
    if (e.tag === 22) {
      if (V(Ct, Ct.current), V(xn, e), $n === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && ($n = e);
      }
    } else jr();
  }
  function jr() {
    V(Ct, Ct.current), V(xn, xn.current);
  }
  function dr(e) {
    le(xn), $n === e && ($n = null), le(Ct);
  }
  var Ct = $(0);
  function Go(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Md(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function qc(e, t, a, o) {
    t = e.memoizedState, a = a(o, t), a = a == null ? t : g({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Zc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var o = fn(), d = Nr(o);
      d.payload = t, a != null && (d.callback = a), t = Or(e, d, o), t !== null && (hn(t, e, o), as(t, e, o));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var o = fn(), d = Nr(o);
      d.tag = 1, d.payload = t, a != null && (d.callback = a), t = Or(e, d, o), t !== null && (hn(t, e, o), as(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = fn(), o = Nr(a);
      o.tag = 2, t != null && (o.callback = t), t = Or(e, o, a), t !== null && (hn(t, e, a), as(t, e, a));
    }
  };
  function sm(e, t, a, o, d, b, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, T) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, o) || !Xi(d, b) : !0;
  }
  function om(e, t, a, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== e && Zc.enqueueReplaceState(t, t.state, null);
  }
  function _a(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t)
        o !== "ref" && (a[o] = t[o]);
    }
    if (e = e.defaultProps) {
      a === t && (a = g({}, a));
      for (var d in e)
        a[d] === void 0 && (a[d] = e[d]);
    }
    return a;
  }
  var Vo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function um(e) {
    Vo(e);
  }
  function lm(e) {
    console.error(e);
  }
  function cm(e) {
    Vo(e);
  }
  function Yo(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function dm(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Gc(e, t, a) {
    return a = Nr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Yo(e, t);
    }, a;
  }
  function fm(e) {
    return e = Nr(e), e.tag = 3, e;
  }
  function hm(e, t, a, o) {
    var d = a.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var b = o.value;
      e.payload = function() {
        return d(b);
      }, e.callback = function() {
        dm(t, a, o);
      };
    }
    var T = a.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      dm(t, a, o), typeof d != "function" && (Br === null ? Br = /* @__PURE__ */ new Set([this]) : Br.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function Eb(e, t, a, o, d) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = a.alternate, t !== null && Wi(
        t,
        a,
        d,
        !0
      ), a = xn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return $n === null ? pd() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = d, o === _c ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), gd(e, o, d)), !1;
          case 22:
            return a.flags |= 65536, o === _c ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), gd(e, o, d)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return gd(e, o, d), pd(), !1;
    }
    if (Ye)
      return t = xn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, o !== fc && (e = Error(i(422), { cause: o }), Ji(Cn(e, a)))) : (o !== fc && (t = Error(i(423), {
        cause: o
      }), Ji(
        Cn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Cn(o, a), d = Gc(
        e.stateNode,
        o,
        d
      ), wc(e, d), ht !== 4 && (ht = 2)), !1;
    var b = Error(i(520), { cause: o });
    if (b = Cn(b, a), _s === null ? _s = [b] : _s.push(b), ht !== 4 && (ht = 2), t === null) return !0;
    o = Cn(o, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = d & -d, a.lanes |= e, e = Gc(a.stateNode, o, e), wc(a, e), !1;
        case 1:
          if (t = a.type, b = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Br === null || !Br.has(b))))
            return a.flags |= 65536, d &= -d, a.lanes |= d, d = fm(d), hm(
              d,
              e,
              a,
              o
            ), wc(a, d), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var pm = Error(i(461)), xt = !1;
  function Rt(e, t, a, o) {
    t.child = e === null ? am(t, null, a, o) : li(
      t,
      e.child,
      a,
      o
    );
  }
  function mm(e, t, a, o, d) {
    a = a.render;
    var b = t.ref;
    if ("ref" in o) {
      var T = {};
      for (var D in o)
        D !== "ref" && (T[D] = o[D]);
    } else T = o;
    return ga(t), o = Tc(
      e,
      t,
      a,
      T,
      b,
      d
    ), D = xc(), e !== null && !xt ? (Nc(e, t, d), fr(e, t, d)) : (Ye && D && cc(t), t.flags |= 1, Rt(e, t, o, d), t.child);
  }
  function gm(e, t, a, o, d) {
    if (e === null) {
      var b = a.type;
      return typeof b == "function" && !oc(b) && b.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = b, vm(
        e,
        t,
        b,
        o,
        d
      )) : (e = ko(
        a.type,
        null,
        o,
        t,
        t.mode,
        d
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (b = e.child, !Jc(e, d)) {
      var T = b.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(T, o) && e.ref === t.ref)
        return fr(e, t, d);
    }
    return t.flags |= 1, e = ir(b, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vm(e, t, a, o, d) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Xi(b, o) && e.ref === t.ref)
        if (xt = !1, t.pendingProps = o = b, Jc(e, d))
          (e.flags & 131072) !== 0 && (xt = !0);
        else
          return t.lanes = e.lanes, fr(e, t, d);
    }
    return Vc(
      e,
      t,
      a,
      o,
      d
    );
  }
  function ym(e, t, a) {
    var o = t.pendingProps, d = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | a : a, e !== null) {
          for (d = t.child = e.child, b = 0; d !== null; )
            b = b | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = b & ~o;
        } else t.childLanes = 0, t.child = null;
        return _m(
          e,
          t,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Oo(
          t,
          b !== null ? b.cachePool : null
        ), b !== null ? vp(t, b) : Cc(), im(t);
      else
        return t.lanes = t.childLanes = 536870912, _m(
          e,
          t,
          b !== null ? b.baseLanes | a : a,
          a
        );
    } else
      b !== null ? (Oo(t, b.cachePool), vp(t, b), jr(), t.memoizedState = null) : (e !== null && Oo(t, null), Cc(), jr());
    return Rt(e, t, d, a), t.child;
  }
  function _m(e, t, a, o) {
    var d = yc();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, t.memoizedState = {
      baseLanes: a,
      cachePool: d
    }, e !== null && Oo(t, null), Cc(), im(t), e !== null && Wi(e, t, o, !0), null;
  }
  function $o(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Vc(e, t, a, o, d) {
    return ga(t), a = Tc(
      e,
      t,
      a,
      o,
      void 0,
      d
    ), o = xc(), e !== null && !xt ? (Nc(e, t, d), fr(e, t, d)) : (Ye && o && cc(t), t.flags |= 1, Rt(e, t, a, d), t.child);
  }
  function bm(e, t, a, o, d, b) {
    return ga(t), t.updateQueue = null, a = _p(
      t,
      o,
      a,
      d
    ), yp(e), o = xc(), e !== null && !xt ? (Nc(e, t, b), fr(e, t, b)) : (Ye && o && cc(t), t.flags |= 1, Rt(e, t, a, b), t.child);
  }
  function Sm(e, t, a, o, d) {
    if (ga(t), t.stateNode === null) {
      var b = Wa, T = a.contextType;
      typeof T == "object" && T !== null && (b = Bt(T)), b = new a(o, b), t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Zc, t.stateNode = b, b._reactInternals = t, b = t.stateNode, b.props = o, b.state = t.memoizedState, b.refs = {}, bc(t), T = a.contextType, b.context = typeof T == "object" && T !== null ? Bt(T) : Wa, b.state = t.memoizedState, T = a.getDerivedStateFromProps, typeof T == "function" && (qc(
        t,
        a,
        T,
        o
      ), b.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (T = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), T !== b.state && Zc.enqueueReplaceState(b, b.state, null), ss(t, o, b, d), is(), b.state = t.memoizedState), typeof b.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = t.stateNode;
      var D = t.memoizedProps, U = _a(a, D);
      b.props = U;
      var Q = b.context, ie = a.contextType;
      T = Wa, typeof ie == "object" && ie !== null && (T = Bt(ie));
      var ue = a.getDerivedStateFromProps;
      ie = typeof ue == "function" || typeof b.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, ie || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (D || Q !== T) && om(
        t,
        b,
        o,
        T
      ), xr = !1;
      var J = t.memoizedState;
      b.state = J, ss(t, o, b, d), is(), Q = t.memoizedState, D || J !== Q || xr ? (typeof ue == "function" && (qc(
        t,
        a,
        ue,
        o
      ), Q = t.memoizedState), (U = xr || sm(
        t,
        a,
        U,
        o,
        J,
        Q,
        T
      )) ? (ie || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = Q), b.props = o, b.state = Q, b.context = T, o = U) : (typeof b.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      b = t.stateNode, Sc(e, t), T = t.memoizedProps, ie = _a(a, T), b.props = ie, ue = t.pendingProps, J = b.context, Q = a.contextType, U = Wa, typeof Q == "object" && Q !== null && (U = Bt(Q)), D = a.getDerivedStateFromProps, (Q = typeof D == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (T !== ue || J !== U) && om(
        t,
        b,
        o,
        U
      ), xr = !1, J = t.memoizedState, b.state = J, ss(t, o, b, d), is();
      var ee = t.memoizedState;
      T !== ue || J !== ee || xr || e !== null && e.dependencies !== null && xo(e.dependencies) ? (typeof D == "function" && (qc(
        t,
        a,
        D,
        o
      ), ee = t.memoizedState), (ie = xr || sm(
        t,
        a,
        ie,
        o,
        J,
        ee,
        U
      ) || e !== null && e.dependencies !== null && xo(e.dependencies)) ? (Q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, ee, U), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        ee,
        U
      )), typeof b.componentDidUpdate == "function" && (t.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = ee), b.props = o, b.state = ee, b.context = U, o = ie) : (typeof b.componentDidUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return b = o, $o(e, t), o = (t.flags & 128) !== 0, b || o ? (b = t.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : b.render(), t.flags |= 1, e !== null && o ? (t.child = li(
      t,
      e.child,
      null,
      d
    ), t.child = li(
      t,
      null,
      a,
      d
    )) : Rt(e, t, a, d), t.memoizedState = b.state, e = t.child) : e = fr(
      e,
      t,
      d
    ), e;
  }
  function wm(e, t, a, o) {
    return Ki(), t.flags |= 256, Rt(e, t, a, o), t.child;
  }
  var Yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $c(e) {
    return { baseLanes: e, cachePool: lp() };
  }
  function Xc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Nn), e;
  }
  function Em(e, t, a) {
    var o = t.pendingProps, d = !1, b = (t.flags & 128) !== 0, T;
    if ((T = b) || (T = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), T && (d = !0, t.flags &= -129), T = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ye) {
        if (d ? Rr(t) : jr(), Ye) {
          var D = ft, U;
          if (U = D) {
            e: {
              for (U = D, D = Yn; U.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (U = Pn(
                  U.nextSibling
                ), U === null) {
                  D = null;
                  break e;
                }
              }
              D = U;
            }
            D !== null ? (t.memoizedState = {
              dehydrated: D,
              treeContext: da !== null ? { id: sr, overflow: or } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, U = un(
              18,
              null,
              null,
              0
            ), U.stateNode = D, U.return = t, t.child = U, Vt = t, ft = null, U = !0) : U = !1;
          }
          U || pa(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Md(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        dr(t);
      }
      return D = o.children, o = o.fallback, d ? (jr(), d = t.mode, D = Xo(
        { mode: "hidden", children: D },
        d
      ), o = ca(
        o,
        d,
        a,
        null
      ), D.return = t, o.return = t, D.sibling = o, t.child = D, d = t.child, d.memoizedState = $c(a), d.childLanes = Xc(
        e,
        T,
        a
      ), t.memoizedState = Yc, o) : (Rr(t), Fc(t, D));
    }
    if (U = e.memoizedState, U !== null && (D = U.dehydrated, D !== null)) {
      if (b)
        t.flags & 256 ? (Rr(t), t.flags &= -257, t = Qc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (jr(), t.child = e.child, t.flags |= 128, t = null) : (jr(), d = o.fallback, D = t.mode, o = Xo(
          { mode: "visible", children: o.children },
          D
        ), d = ca(
          d,
          D,
          a,
          null
        ), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, li(
          t,
          e.child,
          null,
          a
        ), o = t.child, o.memoizedState = $c(a), o.childLanes = Xc(
          e,
          T,
          a
        ), t.memoizedState = Yc, t = d);
      else if (Rr(t), Md(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var Q = T.dgst;
        T = Q, o = Error(i(419)), o.stack = "", o.digest = T, Ji({ value: o, source: null, stack: null }), t = Qc(
          e,
          t,
          a
        );
      } else if (xt || Wi(e, t, a, !1), T = (a & e.childLanes) !== 0, xt || T) {
        if (T = nt, T !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Rl(o), o = (o & (T.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== U.retryLane))
          throw U.retryLane = o, Ja(e, o), hn(T, e, o), pm;
        D.data === "$?" || pd(), t = Qc(
          e,
          t,
          a
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, ft = Pn(
          D.nextSibling
        ), Vt = t, Ye = !0, ha = null, Yn = !1, e !== null && (An[Tn++] = sr, An[Tn++] = or, An[Tn++] = da, sr = e.id, or = e.overflow, da = t), t = Fc(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return d ? (jr(), d = o.fallback, D = t.mode, U = e.child, Q = U.sibling, o = ir(U, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = U.subtreeFlags & 65011712, Q !== null ? d = ir(Q, d) : (d = ca(
      d,
      D,
      a,
      null
    ), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, D = e.child.memoizedState, D === null ? D = $c(a) : (U = D.cachePool, U !== null ? (Q = Et._currentValue, U = U.parent !== Q ? { parent: Q, pool: Q } : U) : U = lp(), D = {
      baseLanes: D.baseLanes | a,
      cachePool: U
    }), d.memoizedState = D, d.childLanes = Xc(
      e,
      T,
      a
    ), t.memoizedState = Yc, o) : (Rr(t), a = e.child, e = a.sibling, a = ir(a, {
      mode: "visible",
      children: o.children
    }), a.return = t, a.sibling = null, e !== null && (T = t.deletions, T === null ? (t.deletions = [e], t.flags |= 16) : T.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Fc(e, t) {
    return t = Xo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Xo(e, t) {
    return e = un(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Qc(e, t, a) {
    return li(t, e.child, null, a), e = Fc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cm(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), pc(e.return, t, a);
  }
  function Kc(e, t, a, o, d) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: d
    } : (b.isBackwards = t, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = a, b.tailMode = d);
  }
  function km(e, t, a) {
    var o = t.pendingProps, d = o.revealOrder, b = o.tail;
    if (Rt(e, t, o.children, a), o = Ct.current, (o & 2) !== 0)
      o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Cm(e, a, t);
          else if (e.tag === 19)
            Cm(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (V(Ct, o), d) {
      case "forwards":
        for (a = t.child, d = null; a !== null; )
          e = a.alternate, e !== null && Go(e) === null && (d = a), a = a.sibling;
        a = d, a === null ? (d = t.child, t.child = null) : (d = a.sibling, a.sibling = null), Kc(
          t,
          !1,
          d,
          a,
          b
        );
        break;
      case "backwards":
        for (a = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Go(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = a, a = d, d = e;
        }
        Kc(
          t,
          !0,
          a,
          null,
          b
        );
        break;
      case "together":
        Kc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fr(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ir |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Wi(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, a = ir(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ir(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Jc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && xo(e)));
  }
  function Cb(e, t, a) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo), Tr(t, Et, e.memoizedState.cache), Ki();
        break;
      case 27:
      case 5:
        je(t);
        break;
      case 4:
        re(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tr(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Rr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Em(e, t, a) : (Rr(t), e = fr(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Rr(t);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (a & t.childLanes) !== 0, o || (Wi(
          e,
          t,
          a,
          !1
        ), o = (a & t.childLanes) !== 0), d) {
          if (o)
            return km(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), V(Ct, Ct.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ym(e, t, a);
      case 24:
        Tr(t, Et, e.memoizedState.cache);
    }
    return fr(e, t, a);
  }
  function Am(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        xt = !0;
      else {
        if (!Jc(e, a) && (t.flags & 128) === 0)
          return xt = !1, Cb(
            e,
            t,
            a
          );
        xt = (e.flags & 131072) !== 0;
      }
    else
      xt = !1, Ye && (t.flags & 1048576) !== 0 && np(t, To, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType, d = o._init;
          if (o = d(o._payload), t.type = o, typeof o == "function")
            oc(o) ? (e = _a(o, e), t.tag = 1, t = Sm(
              null,
              t,
              o,
              e,
              a
            )) : (t.tag = 0, t = Vc(
              null,
              t,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                t.tag = 11, t = mm(
                  null,
                  t,
                  o,
                  e,
                  a
                );
                break e;
              } else if (d === k) {
                t.tag = 14, t = gm(
                  null,
                  t,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = Y(o) || o, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Vc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return o = t.type, d = _a(
          o,
          t.pendingProps
        ), Sm(
          e,
          t,
          o,
          d,
          a
        );
      case 3:
        e: {
          if (re(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          o = t.pendingProps;
          var b = t.memoizedState;
          d = b.element, Sc(e, t), ss(t, o, null, a);
          var T = t.memoizedState;
          if (o = T.cache, Tr(t, Et, o), o !== b.cache && mc(
            t,
            [Et],
            a,
            !0
          ), is(), o = T.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: T.cache
            }, t.updateQueue.baseState = b, t.memoizedState = b, t.flags & 256) {
              t = wm(
                e,
                t,
                o,
                a
              );
              break e;
            } else if (o !== d) {
              d = Cn(
                Error(i(424)),
                t
              ), Ji(d), t = wm(
                e,
                t,
                o,
                a
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ft = Pn(e.firstChild), Vt = t, Ye = !0, ha = null, Yn = !0, a = am(
                t,
                null,
                o,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ki(), o === d) {
              t = fr(
                e,
                t,
                a
              );
              break e;
            }
            Rt(
              e,
              t,
              o,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return $o(e, t), e === null ? (a = Og(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ye || (a = t.type, e = t.pendingProps, o = uu(
          te.current
        ).createElement(a), o[It] = t, o[Qt] = e, Dt(o, a, e), Tt(o), t.stateNode = o) : t.memoizedState = Og(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return je(t), e === null && Ye && (o = t.stateNode = Tg(
          t.type,
          t.pendingProps,
          te.current
        ), Vt = t, Yn = !0, d = ft, qr(t.type) ? (Rd = d, ft = Pn(
          o.firstChild
        )) : ft = d), Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), $o(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ye && ((d = o = ft) && (o = Jb(
          o,
          t.type,
          t.pendingProps,
          Yn
        ), o !== null ? (t.stateNode = o, Vt = t, ft = Pn(
          o.firstChild
        ), Yn = !1, d = !0) : d = !1), d || pa(t)), je(t), d = t.type, b = t.pendingProps, T = e !== null ? e.memoizedProps : null, o = b.children, xd(d, b) ? o = null : T !== null && xd(d, T) && (t.flags |= 32), t.memoizedState !== null && (d = Tc(
          e,
          t,
          gb,
          null,
          null,
          a
        ), xs._currentValue = d), $o(e, t), Rt(e, t, o, a), t.child;
      case 6:
        return e === null && Ye && ((e = a = ft) && (a = Wb(
          a,
          t.pendingProps,
          Yn
        ), a !== null ? (t.stateNode = a, Vt = t, ft = null, e = !0) : e = !1), e || pa(t)), null;
      case 13:
        return Em(e, t, a);
      case 4:
        return re(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = li(
          t,
          null,
          o,
          a
        ) : Rt(
          e,
          t,
          o,
          a
        ), t.child;
      case 11:
        return mm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Rt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return o = t.pendingProps, Tr(t, t.type, o.value), Rt(
          e,
          t,
          o.children,
          a
        ), t.child;
      case 9:
        return d = t.type._context, o = t.pendingProps.children, ga(t), d = Bt(d), o = o(d), t.flags |= 1, Rt(e, t, o, a), t.child;
      case 14:
        return gm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return vm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return km(e, t, a);
      case 31:
        return o = t.pendingProps, a = t.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = Xo(
          o,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = ir(e.child, o), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return ym(e, t, a);
      case 24:
        return ga(t), o = Bt(Et), e === null ? (d = yc(), d === null && (d = nt, b = gc(), d.pooledCache = b, b.refCount++, b !== null && (d.pooledCacheLanes |= a), d = b), t.memoizedState = {
          parent: o,
          cache: d
        }, bc(t), Tr(t, Et, d)) : ((e.lanes & a) !== 0 && (Sc(e, t), ss(t, null, null, a), is()), d = e.memoizedState, b = t.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Tr(t, Et, o)) : (o = b.cache, Tr(t, Et, o), o !== d.cache && mc(
          t,
          [Et],
          a,
          !0
        ))), Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function hr(e) {
    e.flags |= 4;
  }
  function Tm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !zg(t)) {
      if (t = xn.current, t !== null && ((Ge & 4194048) === Ge ? $n !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || t !== $n))
        throw rs = _c, cp;
      e.flags |= 8192;
    }
  }
  function Fo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ih() : 536870912, e.lanes |= t, hi |= t);
  }
  function hs(e, t) {
    if (!Ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (t)
      for (var d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, t;
  }
  function kb(e, t, a) {
    var o = t.pendingProps;
    switch (dc(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ut(t), null;
      case 1:
        return ut(t), null;
      case 3:
        return a = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), lr(Et), pe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Qi(t) ? hr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ip())), ut(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (hr(t), a !== null ? (ut(t), Tm(t, a)) : (ut(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (hr(t), ut(t), Tm(t, a)) : (ut(t), t.flags &= -16777217) : (e.memoizedProps !== o && hr(t), ut(t), t.flags &= -16777217), null;
      case 27:
        Le(t), a = te.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== o && hr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(i(166));
            return ut(t), null;
          }
          e = H.current, Qi(t) ? rp(t) : (e = Tg(d, o, a), t.stateNode = e, hr(t));
        }
        return ut(t), null;
      case 5:
        if (Le(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && hr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(i(166));
            return ut(t), null;
          }
          if (e = H.current, Qi(t))
            rp(t);
          else {
            switch (d = uu(
              te.current
            ), e) {
              case 1:
                e = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? d.createElement(a, { is: o.is }) : d.createElement(a);
                }
            }
            e[It] = t, e[Qt] = o;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                e.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = e;
            e: switch (Dt(e, a, o), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && hr(t);
          }
        }
        return ut(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && hr(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(i(166));
          if (e = te.current, Qi(t)) {
            if (e = t.stateNode, a = t.memoizedProps, o = null, d = Vt, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[It] = t, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || bg(e.nodeValue, a)), e || pa(t);
          } else
            e = uu(e).createTextNode(
              o
            ), e[It] = t, t.stateNode = e;
        }
        return ut(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Qi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[It] = t;
            } else
              Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ut(t), d = !1;
          } else
            d = ip(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (dr(t), t) : (dr(t), null);
        }
        if (dr(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = t.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var b = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (b = o.memoizedState.cachePool.pool), b !== d && (o.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Fo(t, t.updateQueue), ut(t), null;
      case 4:
        return pe(), e === null && Ed(t.stateNode.containerInfo), ut(t), null;
      case 10:
        return lr(t.type), ut(t), null;
      case 19:
        if (le(Ct), d = t.memoizedState, d === null) return ut(t), null;
        if (o = (t.flags & 128) !== 0, b = d.rendering, b === null)
          if (o) hs(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (b = Go(e), b !== null) {
                  for (t.flags |= 128, hs(d, !1), e = b.updateQueue, t.updateQueue = e, Fo(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    tp(a, e), a = a.sibling;
                  return V(
                    Ct,
                    Ct.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Fe() > Jo && (t.flags |= 128, o = !0, hs(d, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Go(b), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Fo(t, e), hs(d, !0), d.tail === null && d.tailMode === "hidden" && !b.alternate && !Ye)
                return ut(t), null;
            } else
              2 * Fe() - d.renderingStartTime > Jo && a !== 536870912 && (t.flags |= 128, o = !0, hs(d, !1), t.lanes = 4194304);
          d.isBackwards ? (b.sibling = t.child, t.child = b) : (e = d.last, e !== null ? e.sibling = b : t.child = b, d.last = b);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Fe(), t.sibling = null, e = Ct.current, V(Ct, o ? e & 1 | 2 : e & 1), t) : (ut(t), null);
      case 22:
      case 23:
        return dr(t), kc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), a = t.updateQueue, a !== null && Fo(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== a && (t.flags |= 2048), e !== null && le(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), lr(Et), ut(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Ab(e, t) {
    switch (dc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return lr(Et), pe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Le(t), null;
      case 13:
        if (dr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(i(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return le(Ct), null;
      case 4:
        return pe(), null;
      case 10:
        return lr(t.type), null;
      case 22:
      case 23:
        return dr(t), kc(), e !== null && le(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return lr(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xm(e, t) {
    switch (dc(t), t.tag) {
      case 3:
        lr(Et), pe();
        break;
      case 26:
      case 27:
      case 5:
        Le(t);
        break;
      case 4:
        pe();
        break;
      case 13:
        dr(t);
        break;
      case 19:
        le(Ct);
        break;
      case 10:
        lr(t.type);
        break;
      case 22:
      case 23:
        dr(t), kc(), e !== null && le(va);
        break;
      case 24:
        lr(Et);
    }
  }
  function ps(e, t) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        a = d;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var b = a.create, T = a.inst;
            o = b(), T.destroy = o;
          }
          a = a.next;
        } while (a !== d);
      }
    } catch (D) {
      tt(t, t.return, D);
    }
  }
  function Dr(e, t, a) {
    try {
      var o = t.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var b = d.next;
        o = b;
        do {
          if ((o.tag & e) === e) {
            var T = o.inst, D = T.destroy;
            if (D !== void 0) {
              T.destroy = void 0, d = t;
              var U = a, Q = D;
              try {
                Q();
              } catch (ie) {
                tt(
                  d,
                  U,
                  ie
                );
              }
            }
          }
          o = o.next;
        } while (o !== b);
      }
    } catch (ie) {
      tt(t, t.return, ie);
    }
  }
  function Nm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        gp(t, a);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function Om(e, t, a) {
    a.props = _a(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      tt(e, t, o);
    }
  }
  function ms(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (d) {
      tt(e, t, d);
    }
  }
  function Xn(e, t) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          tt(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (d) {
          tt(e, t, d);
        }
      else a.current = null;
  }
  function Mm(e) {
    var t = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function Wc(e, t, a) {
    try {
      var o = e.stateNode;
      $b(o, e.type, a, t), o[Qt] = t;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function Rm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && qr(e.type) || e.tag === 4;
  }
  function ed(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && qr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function td(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ou));
    else if (o !== 4 && (o === 27 && qr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (td(e, t, a), e = e.sibling; e !== null; )
        td(e, t, a), e = e.sibling;
  }
  function Qo(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && qr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Qo(e, t, a), e = e.sibling; e !== null; )
        Qo(e, t, a), e = e.sibling;
  }
  function jm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      Dt(t, o, a), t[It] = e, t[Qt] = a;
    } catch (b) {
      tt(e, e.return, b);
    }
  }
  var pr = !1, vt = !1, nd = !1, Dm = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function Tb(e, t) {
    if (e = e.containerInfo, Ad = pu, e = Vh(e), ec(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var d = o.anchorOffset, b = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, b.nodeType;
            } catch {
              a = null;
              break e;
            }
            var T = 0, D = -1, U = -1, Q = 0, ie = 0, ue = e, J = null;
            t: for (; ; ) {
              for (var ee; ue !== a || d !== 0 && ue.nodeType !== 3 || (D = T + d), ue !== b || o !== 0 && ue.nodeType !== 3 || (U = T + o), ue.nodeType === 3 && (T += ue.nodeValue.length), (ee = ue.firstChild) !== null; )
                J = ue, ue = ee;
              for (; ; ) {
                if (ue === e) break t;
                if (J === a && ++Q === d && (D = T), J === b && ++ie === o && (U = T), (ee = ue.nextSibling) !== null) break;
                ue = J, J = ue.parentNode;
              }
              ue = ee;
            }
            a = D === -1 || U === -1 ? null : { start: D, end: U };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Td = { focusedElem: e, selectionRange: a }, pu = !1, Nt = t; Nt !== null; )
      if (t = Nt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Nt = e;
      else
        for (; Nt !== null; ) {
          switch (t = Nt, b = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && b !== null) {
                e = void 0, a = t, d = b.memoizedProps, b = b.memoizedState, o = a.stateNode;
                try {
                  var Ce = _a(
                    a.type,
                    d,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ce,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (we) {
                  tt(
                    a,
                    a.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Od(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Od(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Nt = e;
            break;
          }
          Nt = t.return;
        }
  }
  function zm(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        zr(e, a), o & 4 && ps(5, a);
        break;
      case 1:
        if (zr(e, a), o & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (T) {
              tt(a, a.return, T);
            }
          else {
            var d = _a(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (T) {
              tt(
                a,
                a.return,
                T
              );
            }
          }
        o & 64 && Nm(a), o & 512 && ms(a, a.return);
        break;
      case 3:
        if (zr(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            gp(e, t);
          } catch (T) {
            tt(a, a.return, T);
          }
        }
        break;
      case 27:
        t === null && o & 4 && jm(a);
      case 26:
      case 5:
        zr(e, a), t === null && o & 4 && Mm(a), o & 512 && ms(a, a.return);
        break;
      case 12:
        zr(e, a);
        break;
      case 13:
        zr(e, a), o & 4 && Im(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Lb.bind(
          null,
          a
        ), e1(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || pr, !o) {
          t = t !== null && t.memoizedState !== null || vt, d = pr;
          var b = vt;
          pr = o, (vt = t) && !b ? Lr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : zr(e, a), pr = d, vt = b;
        }
        break;
      case 30:
        break;
      default:
        zr(e, a);
    }
  }
  function Lm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, Wt = !1;
  function mr(e, t, a) {
    for (a = a.child; a !== null; )
      Pm(e, t, a), a = a.sibling;
  }
  function Pm(e, t, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Dn, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Xn(a, t), mr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Xn(a, t);
        var o = at, d = Wt;
        qr(a.type) && (at = a.stateNode, Wt = !1), mr(
          e,
          t,
          a
        ), Cs(a.stateNode), at = o, Wt = d;
        break;
      case 5:
        vt || Xn(a, t);
      case 6:
        if (o = at, d = Wt, at = null, mr(
          e,
          t,
          a
        ), at = o, Wt = d, at !== null)
          if (Wt)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(a.stateNode);
            } catch (b) {
              tt(
                a,
                t,
                b
              );
            }
          else
            try {
              at.removeChild(a.stateNode);
            } catch (b) {
              tt(
                a,
                t,
                b
              );
            }
        break;
      case 18:
        at !== null && (Wt ? (e = at, kg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Rs(e)) : kg(at, a.stateNode));
        break;
      case 4:
        o = at, d = Wt, at = a.stateNode.containerInfo, Wt = !0, mr(
          e,
          t,
          a
        ), at = o, Wt = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Dr(2, a, t), vt || Dr(4, a, t), mr(
          e,
          t,
          a
        );
        break;
      case 1:
        vt || (Xn(a, t), o = a.stateNode, typeof o.componentWillUnmount == "function" && Om(
          a,
          t,
          o
        )), mr(
          e,
          t,
          a
        );
        break;
      case 21:
        mr(
          e,
          t,
          a
        );
        break;
      case 22:
        vt = (o = vt) || a.memoizedState !== null, mr(
          e,
          t,
          a
        ), vt = o;
        break;
      default:
        mr(
          e,
          t,
          a
        );
    }
  }
  function Im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rs(e);
      } catch (a) {
        tt(t, t.return, a);
      }
  }
  function xb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Dm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dm()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function rd(e, t) {
    var a = xb(e);
    t.forEach(function(o) {
      var d = Pb.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(d, d));
    });
  }
  function ln(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var d = a[o], b = e, T = t, D = T;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (qr(D.type)) {
                at = D.stateNode, Wt = !1;
                break e;
              }
              break;
            case 5:
              at = D.stateNode, Wt = !1;
              break e;
            case 3:
            case 4:
              at = D.stateNode.containerInfo, Wt = !0;
              break e;
          }
          D = D.return;
        }
        if (at === null) throw Error(i(160));
        Pm(b, T, d), at = null, Wt = !1, b = d.alternate, b !== null && (b.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Bm(t, e), t = t.sibling;
  }
  var Ln = null;
  function Bm(e, t) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(t, e), cn(e), o & 4 && (Dr(3, e, e.return), ps(3, e), Dr(5, e, e.return));
        break;
      case 1:
        ln(t, e), cn(e), o & 512 && (vt || a === null || Xn(a, a.return)), o & 64 && pr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var d = Ln;
        if (ln(t, e), cn(e), o & 512 && (vt || a === null || Xn(a, a.return)), o & 4) {
          var b = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      b = d.getElementsByTagName("title")[0], (!b || b[Bi] || b[It] || b.namespaceURI === "http://www.w3.org/2000/svg" || b.hasAttribute("itemprop")) && (b = d.createElement(o), d.head.insertBefore(
                        b,
                        d.querySelector("head > title")
                      )), Dt(b, o, a), b[It] = e, Tt(b), o = b;
                      break e;
                    case "link":
                      var T = jg(
                        "link",
                        "href",
                        d
                      ).get(o + (a.href || ""));
                      if (T) {
                        for (var D = 0; D < T.length; D++)
                          if (b = T[D], b.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && b.getAttribute("rel") === (a.rel == null ? null : a.rel) && b.getAttribute("title") === (a.title == null ? null : a.title) && b.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), Dt(b, o, a), d.head.appendChild(b);
                      break;
                    case "meta":
                      if (T = jg(
                        "meta",
                        "content",
                        d
                      ).get(o + (a.content || ""))) {
                        for (D = 0; D < T.length; D++)
                          if (b = T[D], b.getAttribute("content") === (a.content == null ? null : "" + a.content) && b.getAttribute("name") === (a.name == null ? null : a.name) && b.getAttribute("property") === (a.property == null ? null : a.property) && b.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && b.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), Dt(b, o, a), d.head.appendChild(b);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  b[It] = e, Tt(b), o = b;
                }
                e.stateNode = o;
              } else
                Dg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Rg(
                d,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : b.count--, o === null ? Dg(
              d,
              e.type,
              e.stateNode
            ) : Rg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Wc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        ln(t, e), cn(e), o & 512 && (vt || a === null || Xn(a, a.return)), a !== null && o & 4 && Wc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (ln(t, e), cn(e), o & 512 && (vt || a === null || Xn(a, a.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Va(d, "");
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, Wc(
          e,
          d,
          a !== null ? a.memoizedProps : d
        )), o & 1024 && (nd = !0);
        break;
      case 6:
        if (ln(t, e), cn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (du = null, d = Ln, Ln = lu(t.containerInfo), ln(t, e), Ln = d, cn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rs(t.containerInfo);
          } catch (ee) {
            tt(e, e.return, ee);
          }
        nd && (nd = !1, Um(e));
        break;
      case 4:
        o = Ln, Ln = lu(
          e.stateNode.containerInfo
        ), ln(t, e), cn(e), Ln = o;
        break;
      case 12:
        ln(t, e), cn(e);
        break;
      case 13:
        ln(t, e), cn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ld = Fe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, rd(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var U = a !== null && a.memoizedState !== null, Q = pr, ie = vt;
        if (pr = Q || d, vt = ie || U, ln(t, e), vt = ie, pr = Q, cn(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (a === null || U || pr || vt || ba(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                U = a = t;
                try {
                  if (b = U.stateNode, d)
                    T = b.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                  else {
                    D = U.stateNode;
                    var ue = U.memoizedProps.style, J = ue != null && ue.hasOwnProperty("display") ? ue.display : null;
                    D.style.display = J == null || typeof J == "boolean" ? "" : ("" + J).trim();
                  }
                } catch (ee) {
                  tt(U, U.return, ee);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = d ? "" : U.memoizedProps;
                } catch (ee) {
                  tt(U, U.return, ee);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, rd(e, a))));
        break;
      case 19:
        ln(t, e), cn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, rd(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(t, e), cn(e);
    }
  }
  function cn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (Rm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var d = a.stateNode, b = ed(e);
            Qo(e, b, d);
            break;
          case 5:
            var T = a.stateNode;
            a.flags & 32 && (Va(T, ""), a.flags &= -33);
            var D = ed(e);
            Qo(e, D, T);
            break;
          case 3:
          case 4:
            var U = a.stateNode.containerInfo, Q = ed(e);
            td(
              e,
              Q,
              U
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (ie) {
        tt(e, e.return, ie);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Um(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Um(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function zr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        zm(e, t.alternate, t), t = t.sibling;
  }
  function ba(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dr(4, t, t.return), ba(t);
          break;
        case 1:
          Xn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Om(
            t,
            t.return,
            a
          ), ba(t);
          break;
        case 27:
          Cs(t.stateNode);
        case 26:
        case 5:
          Xn(t, t.return), ba(t);
          break;
        case 22:
          t.memoizedState === null && ba(t);
          break;
        case 30:
          ba(t);
          break;
        default:
          ba(t);
      }
      e = e.sibling;
    }
  }
  function Lr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, d = e, b = t, T = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Lr(
            d,
            b,
            a
          ), ps(4, b);
          break;
        case 1:
          if (Lr(
            d,
            b,
            a
          ), o = b, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (Q) {
              tt(o, o.return, Q);
            }
          if (o = b, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var U = d.shared.hiddenCallbacks;
              if (U !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < U.length; d++)
                  mp(U[d], D);
            } catch (Q) {
              tt(o, o.return, Q);
            }
          }
          a && T & 64 && Nm(b), ms(b, b.return);
          break;
        case 27:
          jm(b);
        case 26:
        case 5:
          Lr(
            d,
            b,
            a
          ), a && o === null && T & 4 && Mm(b), ms(b, b.return);
          break;
        case 12:
          Lr(
            d,
            b,
            a
          );
          break;
        case 13:
          Lr(
            d,
            b,
            a
          ), a && T & 4 && Im(d, b);
          break;
        case 22:
          b.memoizedState === null && Lr(
            d,
            b,
            a
          ), ms(b, b.return);
          break;
        case 30:
          break;
        default:
          Lr(
            d,
            b,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ad(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && es(a));
  }
  function id(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && es(e));
  }
  function Fn(e, t, a, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Hm(
          e,
          t,
          a,
          o
        ), t = t.sibling;
  }
  function Hm(e, t, a, o) {
    var d = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fn(
          e,
          t,
          a,
          o
        ), d & 2048 && ps(9, t);
        break;
      case 1:
        Fn(
          e,
          t,
          a,
          o
        );
        break;
      case 3:
        Fn(
          e,
          t,
          a,
          o
        ), d & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && es(e)));
        break;
      case 12:
        if (d & 2048) {
          Fn(
            e,
            t,
            a,
            o
          ), e = t.stateNode;
          try {
            var b = t.memoizedProps, T = b.id, D = b.onPostCommit;
            typeof D == "function" && D(
              T,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (U) {
            tt(t, t.return, U);
          }
        } else
          Fn(
            e,
            t,
            a,
            o
          );
        break;
      case 13:
        Fn(
          e,
          t,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        b = t.stateNode, T = t.alternate, t.memoizedState !== null ? b._visibility & 2 ? Fn(
          e,
          t,
          a,
          o
        ) : gs(e, t) : b._visibility & 2 ? Fn(
          e,
          t,
          a,
          o
        ) : (b._visibility |= 2, ci(
          e,
          t,
          a,
          o,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && ad(T, t);
        break;
      case 24:
        Fn(
          e,
          t,
          a,
          o
        ), d & 2048 && id(t.alternate, t);
        break;
      default:
        Fn(
          e,
          t,
          a,
          o
        );
    }
  }
  function ci(e, t, a, o, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var b = e, T = t, D = a, U = o, Q = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          ci(
            b,
            T,
            D,
            U,
            d
          ), ps(8, T);
          break;
        case 23:
          break;
        case 22:
          var ie = T.stateNode;
          T.memoizedState !== null ? ie._visibility & 2 ? ci(
            b,
            T,
            D,
            U,
            d
          ) : gs(
            b,
            T
          ) : (ie._visibility |= 2, ci(
            b,
            T,
            D,
            U,
            d
          )), d && Q & 2048 && ad(
            T.alternate,
            T
          );
          break;
        case 24:
          ci(
            b,
            T,
            D,
            U,
            d
          ), d && Q & 2048 && id(T.alternate, T);
          break;
        default:
          ci(
            b,
            T,
            D,
            U,
            d
          );
      }
      t = t.sibling;
    }
  }
  function gs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, o = t, d = o.flags;
        switch (o.tag) {
          case 22:
            gs(a, o), d & 2048 && ad(
              o.alternate,
              o
            );
            break;
          case 24:
            gs(a, o), d & 2048 && id(o.alternate, o);
            break;
          default:
            gs(a, o);
        }
        t = t.sibling;
      }
  }
  var vs = 8192;
  function di(e) {
    if (e.subtreeFlags & vs)
      for (e = e.child; e !== null; )
        qm(e), e = e.sibling;
  }
  function qm(e) {
    switch (e.tag) {
      case 26:
        di(e), e.flags & vs && e.memoizedState !== null && h1(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var t = Ln;
        Ln = lu(e.stateNode.containerInfo), di(e), Ln = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = vs, vs = 16777216, di(e), vs = t) : di(e));
        break;
      default:
        di(e);
    }
  }
  function Zm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ys(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          Nt = o, Vm(
            o,
            e
          );
        }
      Zm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Gm(e), e = e.sibling;
  }
  function Gm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ys(e), e.flags & 2048 && Dr(9, e, e.return);
        break;
      case 3:
        ys(e);
        break;
      case 12:
        ys(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ko(e)) : ys(e);
        break;
      default:
        ys(e);
    }
  }
  function Ko(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          Nt = o, Vm(
            o,
            e
          );
        }
      Zm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Dr(8, t, t.return), Ko(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Ko(t));
          break;
        default:
          Ko(t);
      }
      e = e.sibling;
    }
  }
  function Vm(e, t) {
    for (; Nt !== null; ) {
      var a = Nt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Dr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          es(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, Nt = o;
      else
        e: for (a = e; Nt !== null; ) {
          o = Nt;
          var d = o.sibling, b = o.return;
          if (Lm(o), o === a) {
            Nt = null;
            break e;
          }
          if (d !== null) {
            d.return = b, Nt = d;
            break e;
          }
          Nt = b;
        }
    }
  }
  var Nb = {
    getCacheForType: function(e) {
      var t = Bt(Et), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, Ob = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, nt = null, Ie = null, Ge = 0, Xe = 0, dn = null, Pr = !1, fi = !1, sd = !1, gr = 0, ht = 0, Ir = 0, Sa = 0, od = 0, Nn = 0, hi = 0, _s = null, en = null, ud = !1, ld = 0, Jo = 1 / 0, Wo = null, Br = null, jt = 0, Ur = null, pi = null, mi = 0, cd = 0, dd = null, Ym = null, bs = 0, fd = null;
  function fn() {
    if (($e & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (M.T !== null) {
      var e = ni;
      return e !== 0 ? e : _d();
    }
    return uh();
  }
  function $m() {
    Nn === 0 && (Nn = (Ge & 536870912) === 0 || Ye ? Pa() : 536870912);
    var e = xn.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function hn(e, t, a) {
    (e === nt && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (gi(e, 0), Hr(
      e,
      Ge,
      Nn,
      !1
    )), Ii(e, a), (($e & 2) === 0 || e !== nt) && (e === nt && (($e & 2) === 0 && (Sa |= a), ht === 4 && Hr(
      e,
      Ge,
      Nn,
      !1
    )), Qn(e));
  }
  function Xm(e, t, a) {
    if (($e & 6) !== 0) throw Error(i(327));
    var o = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Ft(e, t), d = o ? jb(e, t) : md(e, t, !0), b = o;
    do {
      if (d === 0) {
        fi && !o && Hr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, b && !Mb(a)) {
          d = md(e, t, !1), b = !1;
          continue;
        }
        if (d === 2) {
          if (b = t, e.errorRecoveryDisabledLanes & b)
            var T = 0;
          else
            T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            t = T;
            e: {
              var D = e;
              d = _s;
              var U = D.current.memoizedState.isDehydrated;
              if (U && (gi(D, T).flags |= 256), T = md(
                D,
                T,
                !1
              ), T !== 2) {
                if (sd && !U) {
                  D.errorRecoveryDisabledLanes |= b, Sa |= b, d = 4;
                  break e;
                }
                b = en, en = d, b !== null && (en === null ? en = b : en.push.apply(
                  en,
                  b
                ));
              }
              d = T;
            }
            if (b = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          gi(e, 0), Hr(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, b = d, b) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Hr(
                o,
                t,
                Nn,
                !Pr
              );
              break e;
            case 2:
              en = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (d = ld + 300 - Fe(), 10 < d)) {
            if (Hr(
              o,
              t,
              Nn,
              !Pr
            ), Gt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Eg(
              Fm.bind(
                null,
                o,
                a,
                en,
                Wo,
                ud,
                t,
                Nn,
                Sa,
                hi,
                Pr,
                b,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          Fm(
            o,
            a,
            en,
            Wo,
            ud,
            t,
            Nn,
            Sa,
            hi,
            Pr,
            b,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qn(e);
  }
  function Fm(e, t, a, o, d, b, T, D, U, Q, ie, ue, J, ee) {
    if (e.timeoutHandle = -1, ue = t.subtreeFlags, (ue & 8192 || (ue & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: f1 }, qm(t), ue = p1(), ue !== null)) {
      e.cancelPendingCommit = ue(
        ng.bind(
          null,
          e,
          t,
          b,
          a,
          o,
          d,
          T,
          D,
          U,
          ie,
          1,
          J,
          ee
        )
      ), Hr(e, b, T, !Q);
      return;
    }
    ng(
      e,
      t,
      b,
      a,
      o,
      d,
      T,
      D,
      U
    );
  }
  function Mb(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var d = a[o], b = d.getSnapshot;
          d = d.value;
          try {
            if (!on(b(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Hr(e, t, a, o) {
    t &= ~od, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var b = 31 - Zt(d), T = 1 << b;
      o[b] = -1, d &= ~T;
    }
    a !== 0 && sh(e, a, t);
  }
  function eu() {
    return ($e & 6) === 0 ? (Ss(0), !1) : !0;
  }
  function hd() {
    if (Ie !== null) {
      if (Xe === 0)
        var e = Ie.return;
      else
        e = Ie, ur = ma = null, Oc(e), ui = null, ds = 0, e = Ie;
      for (; e !== null; )
        xm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function gi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Fb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hd(), nt = e, Ie = a = ir(e.current, null), Ge = t, Xe = 0, dn = null, Pr = !1, fi = Ft(e, t), sd = !1, hi = Nn = od = Sa = Ir = ht = 0, en = _s = null, ud = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var d = 31 - Zt(o), b = 1 << d;
        t |= e[d], o &= ~b;
      }
    return gr = t, wo(), a;
  }
  function Qm(e, t) {
    ze = null, M.H = Ho, t === ns || t === Mo ? (t = hp(), Xe = 3) : t === cp ? (t = hp(), Xe = 4) : Xe = t === pm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, dn = t, Ie === null && (ht = 1, Yo(
      e,
      Cn(t, e.current)
    ));
  }
  function Km() {
    var e = M.H;
    return M.H = Ho, e === null ? Ho : e;
  }
  function Jm() {
    var e = M.A;
    return M.A = Nb, e;
  }
  function pd() {
    ht = 4, Pr || (Ge & 4194048) !== Ge && xn.current !== null || (fi = !0), (Ir & 134217727) === 0 && (Sa & 134217727) === 0 || nt === null || Hr(
      nt,
      Ge,
      Nn,
      !1
    );
  }
  function md(e, t, a) {
    var o = $e;
    $e |= 2;
    var d = Km(), b = Jm();
    (nt !== e || Ge !== t) && (Wo = null, gi(e, t)), t = !1;
    var T = ht;
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          var D = Ie, U = dn;
          switch (Xe) {
            case 8:
              hd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xn.current === null && (t = !0);
              var Q = Xe;
              if (Xe = 0, dn = null, vi(e, D, U, Q), a && fi) {
                T = 0;
                break e;
              }
              break;
            default:
              Q = Xe, Xe = 0, dn = null, vi(e, D, U, Q);
          }
        }
        Rb(), T = ht;
        break;
      } catch (ie) {
        Qm(e, ie);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ur = ma = null, $e = o, M.H = d, M.A = b, Ie === null && (nt = null, Ge = 0, wo()), T;
  }
  function Rb() {
    for (; Ie !== null; ) Wm(Ie);
  }
  function jb(e, t) {
    var a = $e;
    $e |= 2;
    var o = Km(), d = Jm();
    nt !== e || Ge !== t ? (Wo = null, Jo = Fe() + 500, gi(e, t)) : fi = Ft(
      e,
      t
    );
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          t = Ie;
          var b = dn;
          t: switch (Xe) {
            case 1:
              Xe = 0, dn = null, vi(e, t, b, 1);
              break;
            case 2:
            case 9:
              if (dp(b)) {
                Xe = 0, dn = null, eg(t);
                break;
              }
              t = function() {
                Xe !== 2 && Xe !== 9 || nt !== e || (Xe = 7), Qn(e);
              }, b.then(t, t);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              dp(b) ? (Xe = 0, dn = null, eg(t)) : (Xe = 0, dn = null, vi(e, t, b, 7));
              break;
            case 5:
              var T = null;
              switch (Ie.tag) {
                case 26:
                  T = Ie.memoizedState;
                case 5:
                case 27:
                  var D = Ie;
                  if (!T || zg(T)) {
                    Xe = 0, dn = null;
                    var U = D.sibling;
                    if (U !== null) Ie = U;
                    else {
                      var Q = D.return;
                      Q !== null ? (Ie = Q, tu(Q)) : Ie = null;
                    }
                    break t;
                  }
              }
              Xe = 0, dn = null, vi(e, t, b, 5);
              break;
            case 6:
              Xe = 0, dn = null, vi(e, t, b, 6);
              break;
            case 8:
              hd(), ht = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        Db();
        break;
      } catch (ie) {
        Qm(e, ie);
      }
    while (!0);
    return ur = ma = null, M.H = o, M.A = d, $e = a, Ie !== null ? 0 : (nt = null, Ge = 0, wo(), ht);
  }
  function Db() {
    for (; Ie !== null && !De(); )
      Wm(Ie);
  }
  function Wm(e) {
    var t = Am(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, t === null ? tu(e) : Ie = t;
  }
  function eg(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = bm(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ge
        );
        break;
      case 11:
        t = bm(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ge
        );
        break;
      case 5:
        Oc(t);
      default:
        xm(a, t), t = Ie = tp(t, gr), t = Am(a, t, gr);
    }
    e.memoizedProps = e.pendingProps, t === null ? tu(e) : Ie = t;
  }
  function vi(e, t, a, o) {
    ur = ma = null, Oc(t), ui = null, ds = 0;
    var d = t.return;
    try {
      if (Eb(
        e,
        d,
        t,
        a,
        Ge
      )) {
        ht = 1, Yo(
          e,
          Cn(a, e.current)
        ), Ie = null;
        return;
      }
    } catch (b) {
      if (d !== null) throw Ie = d, b;
      ht = 1, Yo(
        e,
        Cn(a, e.current)
      ), Ie = null;
      return;
    }
    t.flags & 32768 ? (Ye || o === 1 ? e = !0 : fi || (Ge & 536870912) !== 0 ? e = !1 : (Pr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = xn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), tg(t, e)) : tu(t);
  }
  function tu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        tg(
          t,
          Pr
        );
        return;
      }
      e = t.return;
      var a = kb(
        t.alternate,
        t,
        gr
      );
      if (a !== null) {
        Ie = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function tg(e, t) {
    do {
      var a = Ab(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ie = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = a;
    } while (e !== null);
    ht = 6, Ie = null;
  }
  function ng(e, t, a, o, d, b, T, D, U) {
    e.cancelPendingCommit = null;
    do
      nu();
    while (jt !== 0);
    if (($e & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (b = t.lanes | t.childLanes, b |= ic, f_(
        e,
        a,
        b,
        T,
        D,
        U
      ), e === nt && (Ie = nt = null, Ge = 0), pi = t, Ur = e, mi = a, cd = b, dd = d, Ym = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ib(ye, function() {
        return og(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = M.T, M.T = null, d = B.p, B.p = 2, T = $e, $e |= 4;
        try {
          Tb(e, t, a);
        } finally {
          $e = T, B.p = d, M.T = o;
        }
      }
      jt = 1, rg(), ag(), ig();
    }
  }
  function rg() {
    if (jt === 1) {
      jt = 0;
      var e = Ur, t = pi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = $e;
        $e |= 4;
        try {
          Bm(t, e);
          var b = Td, T = Vh(e.containerInfo), D = b.focusedElem, U = b.selectionRange;
          if (T !== D && D && D.ownerDocument && Gh(
            D.ownerDocument.documentElement,
            D
          )) {
            if (U !== null && ec(D)) {
              var Q = U.start, ie = U.end;
              if (ie === void 0 && (ie = Q), "selectionStart" in D)
                D.selectionStart = Q, D.selectionEnd = Math.min(
                  ie,
                  D.value.length
                );
              else {
                var ue = D.ownerDocument || document, J = ue && ue.defaultView || window;
                if (J.getSelection) {
                  var ee = J.getSelection(), Ce = D.textContent.length, we = Math.min(U.start, Ce), Je = U.end === void 0 ? we : Math.min(U.end, Ce);
                  !ee.extend && we > Je && (T = Je, Je = we, we = T);
                  var G = Zh(
                    D,
                    we
                  ), q = Zh(
                    D,
                    Je
                  );
                  if (G && q && (ee.rangeCount !== 1 || ee.anchorNode !== G.node || ee.anchorOffset !== G.offset || ee.focusNode !== q.node || ee.focusOffset !== q.offset)) {
                    var X = ue.createRange();
                    X.setStart(G.node, G.offset), ee.removeAllRanges(), we > Je ? (ee.addRange(X), ee.extend(q.node, q.offset)) : (X.setEnd(q.node, q.offset), ee.addRange(X));
                  }
                }
              }
            }
            for (ue = [], ee = D; ee = ee.parentNode; )
              ee.nodeType === 1 && ue.push({
                element: ee,
                left: ee.scrollLeft,
                top: ee.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < ue.length; D++) {
              var oe = ue[D];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          pu = !!Ad, Td = Ad = null;
        } finally {
          $e = d, B.p = o, M.T = a;
        }
      }
      e.current = t, jt = 2;
    }
  }
  function ag() {
    if (jt === 2) {
      jt = 0;
      var e = Ur, t = pi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = $e;
        $e |= 4;
        try {
          zm(e, t.alternate, t);
        } finally {
          $e = d, B.p = o, M.T = a;
        }
      }
      jt = 3;
    }
  }
  function ig() {
    if (jt === 4 || jt === 3) {
      jt = 0, We();
      var e = Ur, t = pi, a = mi, o = Ym;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? jt = 5 : (jt = 0, pi = Ur = null, sg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Br = null), jl(a), t = t.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            Dn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = M.T, d = B.p, B.p = 2, M.T = null;
        try {
          for (var b = e.onRecoverableError, T = 0; T < o.length; T++) {
            var D = o[T];
            b(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          M.T = t, B.p = d;
        }
      }
      (mi & 3) !== 0 && nu(), Qn(e), d = e.pendingLanes, (a & 4194090) !== 0 && (d & 42) !== 0 ? e === fd ? bs++ : (bs = 0, fd = e) : bs = 0, Ss(0);
    }
  }
  function sg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, es(t)));
  }
  function nu(e) {
    return rg(), ag(), ig(), og();
  }
  function og() {
    if (jt !== 5) return !1;
    var e = Ur, t = cd;
    cd = 0;
    var a = jl(mi), o = M.T, d = B.p;
    try {
      B.p = 32 > a ? 32 : a, M.T = null, a = dd, dd = null;
      var b = Ur, T = mi;
      if (jt = 0, pi = Ur = null, mi = 0, ($e & 6) !== 0) throw Error(i(331));
      var D = $e;
      if ($e |= 4, Gm(b.current), Hm(
        b,
        b.current,
        T,
        a
      ), $e = D, Ss(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(Dn, b);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, M.T = o, sg(e, t);
    }
  }
  function ug(e, t, a) {
    t = Cn(a, t), t = Gc(e.stateNode, t, 2), e = Or(e, t, 2), e !== null && (Ii(e, 2), Qn(e));
  }
  function tt(e, t, a) {
    if (e.tag === 3)
      ug(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ug(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Br === null || !Br.has(o))) {
            e = Cn(a, e), a = fm(2), o = Or(t, a, 2), o !== null && (hm(
              a,
              o,
              t,
              e
            ), Ii(o, 2), Qn(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function gd(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Ob();
      var d = /* @__PURE__ */ new Set();
      o.set(t, d);
    } else
      d = o.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(t, d));
    d.has(a) || (sd = !0, d.add(a), e = zb.bind(null, e, t, a), t.then(e, e));
  }
  function zb(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, nt === e && (Ge & a) === a && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Fe() - ld ? ($e & 2) === 0 && gi(e, 0) : od |= a, hi === Ge && (hi = 0)), Qn(e);
  }
  function lg(e, t) {
    t === 0 && (t = ih()), e = Ja(e, t), e !== null && (Ii(e, t), Qn(e));
  }
  function Lb(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), lg(e, a);
  }
  function Pb(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, d = e.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), lg(e, a);
  }
  function Ib(e, t) {
    return he(e, t);
  }
  var ru = null, yi = null, vd = !1, au = !1, yd = !1, wa = 0;
  function Qn(e) {
    e !== yi && e.next === null && (yi === null ? ru = yi = e : yi = yi.next = e), au = !0, vd || (vd = !0, Ub());
  }
  function Ss(e, t) {
    if (!yd && au) {
      yd = !0;
      do
        for (var a = !1, o = ru; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var b = 0;
            else {
              var T = o.suspendedLanes, D = o.pingedLanes;
              b = (1 << 31 - Zt(42 | e) + 1) - 1, b &= d & ~(T & ~D), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (a = !0, hg(o, b));
          } else
            b = Ge, b = Gt(
              o,
              o === nt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || Ft(o, b) || (a = !0, hg(o, b));
          o = o.next;
        }
      while (a);
      yd = !1;
    }
  }
  function Bb() {
    cg();
  }
  function cg() {
    au = vd = !1;
    var e = 0;
    wa !== 0 && (Xb() && (e = wa), wa = 0);
    for (var t = Fe(), a = null, o = ru; o !== null; ) {
      var d = o.next, b = dg(o, t);
      b === 0 ? (o.next = null, a === null ? ru = d : a.next = d, d === null && (yi = a)) : (a = o, (e !== 0 || (b & 3) !== 0) && (au = !0)), o = d;
    }
    Ss(e);
  }
  function dg(e, t) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var T = 31 - Zt(b), D = 1 << T, U = d[T];
      U === -1 ? ((D & a) === 0 || (D & o) !== 0) && (d[T] = lo(D, t)) : U <= t && (e.expiredLanes |= D), b &= ~D;
    }
    if (t = nt, a = Ge, a = Gt(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && _e(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ft(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (o !== null && _e(o), jl(a)) {
        case 2:
        case 8:
          a = ve;
          break;
        case 32:
          a = ye;
          break;
        case 268435456:
          a = Ze;
          break;
        default:
          a = ye;
      }
      return o = fg.bind(null, e), a = he(a, o), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return o !== null && o !== null && _e(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function fg(e, t) {
    if (jt !== 0 && jt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (nu() && e.callbackNode !== a)
      return null;
    var o = Ge;
    return o = Gt(
      e,
      e === nt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Xm(e, o, t), dg(e, Fe()), e.callbackNode != null && e.callbackNode === a ? fg.bind(null, e) : null);
  }
  function hg(e, t) {
    if (nu()) return null;
    Xm(e, t, !0);
  }
  function Ub() {
    Qb(function() {
      ($e & 6) !== 0 ? he(
        dt,
        Bb
      ) : cg();
    });
  }
  function _d() {
    return wa === 0 && (wa = Pa()), wa;
  }
  function pg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mo("" + e);
  }
  function mg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Hb(e, t, a, o, d) {
    if (t === "submit" && a && a.stateNode === d) {
      var b = pg(
        (d[Qt] || null).action
      ), T = o.submitter;
      T && (t = (t = T[Qt] || null) ? pg(t.formAction) : T.getAttribute("formAction"), t !== null && (b = t, T = null));
      var D = new _o(
        "action",
        "action",
        null,
        o,
        d
      );
      e.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (wa !== 0) {
                  var U = T ? mg(d, T) : new FormData(d);
                  Bc(
                    a,
                    {
                      pending: !0,
                      data: U,
                      method: d.method,
                      action: b
                    },
                    null,
                    U
                  );
                }
              } else
                typeof b == "function" && (D.preventDefault(), U = T ? mg(d, T) : new FormData(d), Bc(
                  a,
                  {
                    pending: !0,
                    data: U,
                    method: d.method,
                    action: b
                  },
                  b,
                  U
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var bd = 0; bd < ac.length; bd++) {
    var Sd = ac[bd], qb = Sd.toLowerCase(), Zb = Sd[0].toUpperCase() + Sd.slice(1);
    zn(
      qb,
      "on" + Zb
    );
  }
  zn(Xh, "onAnimationEnd"), zn(Fh, "onAnimationIteration"), zn(Qh, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(sb, "onTransitionRun"), zn(ob, "onTransitionStart"), zn(ub, "onTransitionCancel"), zn(Kh, "onTransitionEnd"), qa("onMouseEnter", ["mouseout", "mouseover"]), qa("onMouseLeave", ["mouseout", "mouseover"]), qa("onPointerEnter", ["pointerout", "pointerover"]), qa("onPointerLeave", ["pointerout", "pointerover"]), sa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), sa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), sa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), sa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), sa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), sa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Gb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function gg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], d = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (t)
          for (var T = o.length - 1; 0 <= T; T--) {
            var D = o[T], U = D.instance, Q = D.currentTarget;
            if (D = D.listener, U !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = Q;
            try {
              b(d);
            } catch (ie) {
              Vo(ie);
            }
            d.currentTarget = null, b = U;
          }
        else
          for (T = 0; T < o.length; T++) {
            if (D = o[T], U = D.instance, Q = D.currentTarget, D = D.listener, U !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = Q;
            try {
              b(d);
            } catch (ie) {
              Vo(ie);
            }
            d.currentTarget = null, b = U;
          }
      }
    }
  }
  function Be(e, t) {
    var a = t[Dl];
    a === void 0 && (a = t[Dl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (vg(t, e, 2, !1), a.add(o));
  }
  function wd(e, t, a) {
    var o = 0;
    t && (o |= 4), vg(
      a,
      e,
      o,
      t
    );
  }
  var iu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ed(e) {
    if (!e[iu]) {
      e[iu] = !0, ch.forEach(function(a) {
        a !== "selectionchange" && (Gb.has(a) || wd(a, !1, e), wd(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[iu] || (t[iu] = !0, wd("selectionchange", !1, t));
    }
  }
  function vg(e, t, a, o) {
    switch (Hg(t)) {
      case 2:
        var d = v1;
        break;
      case 8:
        d = y1;
        break;
      default:
        d = Pd;
    }
    a = d.bind(
      null,
      t,
      a,
      e
    ), d = void 0, !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, a, !0) : d !== void 0 ? e.addEventListener(t, a, {
      passive: d
    }) : e.addEventListener(t, a, !1);
  }
  function Cd(e, t, a, o, d) {
    var b = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var T = o.tag;
        if (T === 3 || T === 4) {
          var D = o.stateNode.containerInfo;
          if (D === d) break;
          if (T === 4)
            for (T = o.return; T !== null; ) {
              var U = T.tag;
              if ((U === 3 || U === 4) && T.stateNode.containerInfo === d)
                return;
              T = T.return;
            }
          for (; D !== null; ) {
            if (T = Ba(D), T === null) return;
            if (U = T.tag, U === 5 || U === 6 || U === 26 || U === 27) {
              o = b = T;
              continue e;
            }
            D = D.parentNode;
          }
        }
        o = o.return;
      }
    Ch(function() {
      var Q = b, ie = Zl(a), ue = [];
      e: {
        var J = Jh.get(e);
        if (J !== void 0) {
          var ee = _o, Ce = e;
          switch (e) {
            case "keypress":
              if (vo(a) === 0) break e;
            case "keydown":
            case "keyup":
              ee = I_;
              break;
            case "focusin":
              Ce = "focus", ee = Fl;
              break;
            case "focusout":
              Ce = "blur", ee = Fl;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Fl;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Th;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = A_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = H_;
              break;
            case Xh:
            case Fh:
            case Qh:
              ee = N_;
              break;
            case Kh:
              ee = Z_;
              break;
            case "scroll":
            case "scrollend":
              ee = C_;
              break;
            case "wheel":
              ee = V_;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = M_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Nh;
              break;
            case "toggle":
            case "beforetoggle":
              ee = $_;
          }
          var we = (t & 4) !== 0, Je = !we && (e === "scroll" || e === "scrollend"), G = we ? J !== null ? J + "Capture" : null : J;
          we = [];
          for (var q = Q, X; q !== null; ) {
            var oe = q;
            if (X = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || X === null || G === null || (oe = Hi(q, G), oe != null && we.push(
              Es(q, oe, X)
            )), Je) break;
            q = q.return;
          }
          0 < we.length && (J = new ee(
            J,
            Ce,
            null,
            a,
            ie
          ), ue.push({ event: J, listeners: we }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", J && a !== ql && (Ce = a.relatedTarget || a.fromElement) && (Ba(Ce) || Ce[Ia]))
            break e;
          if ((ee || J) && (J = ie.window === ie ? ie : (J = ie.ownerDocument) ? J.defaultView || J.parentWindow : window, ee ? (Ce = a.relatedTarget || a.toElement, ee = Q, Ce = Ce ? Ba(Ce) : null, Ce !== null && (Je = c(Ce), we = Ce.tag, Ce !== Je || we !== 5 && we !== 27 && we !== 6) && (Ce = null)) : (ee = null, Ce = Q), ee !== Ce)) {
            if (we = Th, oe = "onMouseLeave", G = "onMouseEnter", q = "mouse", (e === "pointerout" || e === "pointerover") && (we = Nh, oe = "onPointerLeave", G = "onPointerEnter", q = "pointer"), Je = ee == null ? J : Ui(ee), X = Ce == null ? J : Ui(Ce), J = new we(
              oe,
              q + "leave",
              ee,
              a,
              ie
            ), J.target = Je, J.relatedTarget = X, oe = null, Ba(ie) === Q && (we = new we(
              G,
              q + "enter",
              Ce,
              a,
              ie
            ), we.target = X, we.relatedTarget = Je, oe = we), Je = oe, ee && Ce)
              t: {
                for (we = ee, G = Ce, q = 0, X = we; X; X = _i(X))
                  q++;
                for (X = 0, oe = G; oe; oe = _i(oe))
                  X++;
                for (; 0 < q - X; )
                  we = _i(we), q--;
                for (; 0 < X - q; )
                  G = _i(G), X--;
                for (; q--; ) {
                  if (we === G || G !== null && we === G.alternate)
                    break t;
                  we = _i(we), G = _i(G);
                }
                we = null;
              }
            else we = null;
            ee !== null && yg(
              ue,
              J,
              ee,
              we,
              !1
            ), Ce !== null && Je !== null && yg(
              ue,
              Je,
              Ce,
              we,
              !0
            );
          }
        }
        e: {
          if (J = Q ? Ui(Q) : window, ee = J.nodeName && J.nodeName.toLowerCase(), ee === "select" || ee === "input" && J.type === "file")
            var me = Ph;
          else if (zh(J))
            if (Ih)
              me = rb;
            else {
              me = tb;
              var Pe = eb;
            }
          else
            ee = J.nodeName, !ee || ee.toLowerCase() !== "input" || J.type !== "checkbox" && J.type !== "radio" ? Q && Hl(Q.elementType) && (me = Ph) : me = nb;
          if (me && (me = me(e, Q))) {
            Lh(
              ue,
              me,
              a,
              ie
            );
            break e;
          }
          Pe && Pe(e, J, Q), e === "focusout" && Q && J.type === "number" && Q.memoizedProps.value != null && Ul(J, "number", J.value);
        }
        switch (Pe = Q ? Ui(Q) : window, e) {
          case "focusin":
            (zh(Pe) || Pe.contentEditable === "true") && (Fa = Pe, tc = Q, Fi = null);
            break;
          case "focusout":
            Fi = tc = Fa = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Yh(ue, a, ie);
            break;
          case "selectionchange":
            if (ib) break;
          case "keydown":
          case "keyup":
            Yh(ue, a, ie);
        }
        var be;
        if (Kl)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Xa ? jh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Oh && a.locale !== "ko" && (Xa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Xa && (be = kh()) : (Ar = ie, Yl = "value" in Ar ? Ar.value : Ar.textContent, Xa = !0)), Pe = su(Q, Ee), 0 < Pe.length && (Ee = new xh(
          Ee,
          e,
          null,
          a,
          ie
        ), ue.push({ event: Ee, listeners: Pe }), be ? Ee.data = be : (be = Dh(a), be !== null && (Ee.data = be)))), (be = F_ ? Q_(e, a) : K_(e, a)) && (Ee = su(Q, "onBeforeInput"), 0 < Ee.length && (Pe = new xh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          ie
        ), ue.push({
          event: Pe,
          listeners: Ee
        }), Pe.data = be)), Hb(
          ue,
          e,
          Q,
          a,
          ie
        );
      }
      gg(ue, t);
    });
  }
  function Es(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function su(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var d = e, b = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || b === null || (d = Hi(e, a), d != null && o.unshift(
        Es(e, d, b)
      ), d = Hi(e, t), d != null && o.push(
        Es(e, d, b)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function _i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yg(e, t, a, o, d) {
    for (var b = t._reactName, T = []; a !== null && a !== o; ) {
      var D = a, U = D.alternate, Q = D.stateNode;
      if (D = D.tag, U !== null && U === o) break;
      D !== 5 && D !== 26 && D !== 27 || Q === null || (U = Q, d ? (Q = Hi(a, b), Q != null && T.unshift(
        Es(a, Q, U)
      )) : d || (Q = Hi(a, b), Q != null && T.push(
        Es(a, Q, U)
      ))), a = a.return;
    }
    T.length !== 0 && e.push({ event: t, listeners: T });
  }
  var Vb = /\r\n?/g, Yb = /\u0000|\uFFFD/g;
  function _g(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vb, `
`).replace(Yb, "");
  }
  function bg(e, t) {
    return t = _g(t), _g(e) === t;
  }
  function ou() {
  }
  function Ke(e, t, a, o, d, b) {
    switch (a) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Va(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Va(e, "" + o);
        break;
      case "className":
        fo(e, "class", o);
        break;
      case "tabIndex":
        fo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fo(e, a, o);
        break;
      case "style":
        wh(e, o, b);
        break;
      case "data":
        if (t !== "object") {
          fo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = mo("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof b == "function" && (a === "formAction" ? (t !== "input" && Ke(e, t, "name", d.name, d, null), Ke(
            e,
            t,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Ke(
            e,
            t,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Ke(
            e,
            t,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Ke(e, t, "encType", d.encType, d, null), Ke(e, t, "method", d.method, d, null), Ke(e, t, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = mo("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = ou);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = mo("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        Be("beforetoggle", e), Be("toggle", e), co(e, "popover", o);
        break;
      case "xlinkActuate":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        co(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = w_.get(a) || a, co(e, a, o));
    }
  }
  function kd(e, t, a, o, d, b) {
    switch (a) {
      case "style":
        wh(e, o, b);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Va(e, o) : (typeof o == "number" || typeof o == "bigint") && Va(e, "" + o);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = ou);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!dh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (d = a.endsWith("Capture"), t = a.slice(2, d ? a.length - 7 : void 0), b = e[Qt] || null, b = b != null ? b[a] : null, typeof b == "function" && e.removeEventListener(t, b, d), typeof o == "function")) {
              typeof b != "function" && b !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, o, d);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : co(e, a, o);
          }
    }
  }
  function Dt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Be("error", e), Be("load", e);
        var o = !1, d = !1, b;
        for (b in a)
          if (a.hasOwnProperty(b)) {
            var T = a[b];
            if (T != null)
              switch (b) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Ke(e, t, b, T, a, null);
              }
          }
        d && Ke(e, t, "srcSet", a.srcSet, a, null), o && Ke(e, t, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
        var D = b = T = d = null, U = null, Q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var ie = a[o];
            if (ie != null)
              switch (o) {
                case "name":
                  d = ie;
                  break;
                case "type":
                  T = ie;
                  break;
                case "checked":
                  U = ie;
                  break;
                case "defaultChecked":
                  Q = ie;
                  break;
                case "value":
                  b = ie;
                  break;
                case "defaultValue":
                  D = ie;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ie != null)
                    throw Error(i(137, t));
                  break;
                default:
                  Ke(e, t, o, ie, a, null);
              }
          }
        yh(
          e,
          b,
          D,
          U,
          Q,
          T,
          d,
          !1
        ), ho(e);
        return;
      case "select":
        Be("invalid", e), o = T = b = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (D = a[d], D != null))
            switch (d) {
              case "value":
                b = D;
                break;
              case "defaultValue":
                T = D;
                break;
              case "multiple":
                o = D;
              default:
                Ke(e, t, d, D, a, null);
            }
        t = b, a = T, e.multiple = !!o, t != null ? Ga(e, !!o, t, !1) : a != null && Ga(e, !!o, a, !0);
        return;
      case "textarea":
        Be("invalid", e), b = d = o = null;
        for (T in a)
          if (a.hasOwnProperty(T) && (D = a[T], D != null))
            switch (T) {
              case "value":
                o = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                b = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(i(91));
                break;
              default:
                Ke(e, t, T, D, a, null);
            }
        bh(e, o, d, b), ho(e);
        return;
      case "option":
        for (U in a)
          if (a.hasOwnProperty(U) && (o = a[U], o != null))
            switch (U) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ke(e, t, U, o, a, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ws.length; o++)
          Be(ws[o], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Q in a)
          if (a.hasOwnProperty(Q) && (o = a[Q], o != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ke(e, t, Q, o, a, null);
            }
        return;
      default:
        if (Hl(t)) {
          for (ie in a)
            a.hasOwnProperty(ie) && (o = a[ie], o !== void 0 && kd(
              e,
              t,
              ie,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (D in a)
      a.hasOwnProperty(D) && (o = a[D], o != null && Ke(e, t, D, o, a, null));
  }
  function $b(e, t, a, o) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, b = null, T = null, D = null, U = null, Q = null, ie = null;
        for (ee in a) {
          var ue = a[ee];
          if (a.hasOwnProperty(ee) && ue != null)
            switch (ee) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                U = ue;
              default:
                o.hasOwnProperty(ee) || Ke(e, t, ee, null, o, ue);
            }
        }
        for (var J in o) {
          var ee = o[J];
          if (ue = a[J], o.hasOwnProperty(J) && (ee != null || ue != null))
            switch (J) {
              case "type":
                b = ee;
                break;
              case "name":
                d = ee;
                break;
              case "checked":
                Q = ee;
                break;
              case "defaultChecked":
                ie = ee;
                break;
              case "value":
                T = ee;
                break;
              case "defaultValue":
                D = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(i(137, t));
                break;
              default:
                ee !== ue && Ke(
                  e,
                  t,
                  J,
                  ee,
                  o,
                  ue
                );
            }
        }
        Bl(
          e,
          T,
          D,
          U,
          Q,
          ie,
          b,
          d
        );
        return;
      case "select":
        ee = T = D = J = null;
        for (b in a)
          if (U = a[b], a.hasOwnProperty(b) && U != null)
            switch (b) {
              case "value":
                break;
              case "multiple":
                ee = U;
              default:
                o.hasOwnProperty(b) || Ke(
                  e,
                  t,
                  b,
                  null,
                  o,
                  U
                );
            }
        for (d in o)
          if (b = o[d], U = a[d], o.hasOwnProperty(d) && (b != null || U != null))
            switch (d) {
              case "value":
                J = b;
                break;
              case "defaultValue":
                D = b;
                break;
              case "multiple":
                T = b;
              default:
                b !== U && Ke(
                  e,
                  t,
                  d,
                  b,
                  o,
                  U
                );
            }
        t = D, a = T, o = ee, J != null ? Ga(e, !!a, J, !1) : !!o != !!a && (t != null ? Ga(e, !!a, t, !0) : Ga(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        ee = J = null;
        for (D in a)
          if (d = a[D], a.hasOwnProperty(D) && d != null && !o.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, t, D, null, o, d);
            }
        for (T in o)
          if (d = o[T], b = a[T], o.hasOwnProperty(T) && (d != null || b != null))
            switch (T) {
              case "value":
                J = d;
                break;
              case "defaultValue":
                ee = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== b && Ke(e, t, T, d, o, b);
            }
        _h(e, J, ee);
        return;
      case "option":
        for (var Ce in a)
          if (J = a[Ce], a.hasOwnProperty(Ce) && J != null && !o.hasOwnProperty(Ce))
            switch (Ce) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ke(
                  e,
                  t,
                  Ce,
                  null,
                  o,
                  J
                );
            }
        for (U in o)
          if (J = o[U], ee = a[U], o.hasOwnProperty(U) && J !== ee && (J != null || ee != null))
            switch (U) {
              case "selected":
                e.selected = J && typeof J != "function" && typeof J != "symbol";
                break;
              default:
                Ke(
                  e,
                  t,
                  U,
                  J,
                  o,
                  ee
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in a)
          J = a[we], a.hasOwnProperty(we) && J != null && !o.hasOwnProperty(we) && Ke(e, t, we, null, o, J);
        for (Q in o)
          if (J = o[Q], ee = a[Q], o.hasOwnProperty(Q) && J !== ee && (J != null || ee != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(i(137, t));
                break;
              default:
                Ke(
                  e,
                  t,
                  Q,
                  J,
                  o,
                  ee
                );
            }
        return;
      default:
        if (Hl(t)) {
          for (var Je in a)
            J = a[Je], a.hasOwnProperty(Je) && J !== void 0 && !o.hasOwnProperty(Je) && kd(
              e,
              t,
              Je,
              void 0,
              o,
              J
            );
          for (ie in o)
            J = o[ie], ee = a[ie], !o.hasOwnProperty(ie) || J === ee || J === void 0 && ee === void 0 || kd(
              e,
              t,
              ie,
              J,
              o,
              ee
            );
          return;
        }
    }
    for (var G in a)
      J = a[G], a.hasOwnProperty(G) && J != null && !o.hasOwnProperty(G) && Ke(e, t, G, null, o, J);
    for (ue in o)
      J = o[ue], ee = a[ue], !o.hasOwnProperty(ue) || J === ee || J == null && ee == null || Ke(e, t, ue, J, o, ee);
  }
  var Ad = null, Td = null;
  function uu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Sg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function xd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Nd = null;
  function Xb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Nd ? !1 : (Nd = e, !0) : (Nd = null, !1);
  }
  var Eg = typeof setTimeout == "function" ? setTimeout : void 0, Fb = typeof clearTimeout == "function" ? clearTimeout : void 0, Cg = typeof Promise == "function" ? Promise : void 0, Qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cg < "u" ? function(e) {
    return Cg.resolve(null).then(e).catch(Kb);
  } : Eg;
  function Kb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function qr(e) {
    return e === "head";
  }
  function kg(e, t) {
    var a = t, o = 0, d = 0;
    do {
      var b = a.nextSibling;
      if (e.removeChild(a), b && b.nodeType === 8)
        if (a = b.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var T = e.ownerDocument;
            if (a & 1 && Cs(T.documentElement), a & 2 && Cs(T.body), a & 4)
              for (a = T.head, Cs(a), T = a.firstChild; T; ) {
                var D = T.nextSibling, U = T.nodeName;
                T[Bi] || U === "SCRIPT" || U === "STYLE" || U === "LINK" && T.rel.toLowerCase() === "stylesheet" || a.removeChild(T), T = D;
              }
          }
          if (d === 0) {
            e.removeChild(b), Rs(t);
            return;
          }
          d--;
        } else
          a === "$" || a === "$?" || a === "$!" ? d++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = b;
    } while (a);
    Rs(t);
  }
  function Od(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Od(a), zl(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Jb(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var d = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Bi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (b = e.getAttribute("rel"), b === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (b !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (b = e.getAttribute("src"), (b !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && b && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var b = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === b)
          return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Wb(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Md(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function e1(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var o = function() {
        t(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Rd = null;
  function Ag(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Tg(e, t, a) {
    switch (t = uu(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Cs(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    zl(e);
  }
  var On = /* @__PURE__ */ new Map(), xg = /* @__PURE__ */ new Set();
  function lu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = B.d;
  B.d = {
    f: t1,
    r: n1,
    D: r1,
    C: a1,
    L: i1,
    m: s1,
    X: u1,
    S: o1,
    M: l1
  };
  function t1() {
    var e = vr.f(), t = eu();
    return e || t;
  }
  function n1(e) {
    var t = Ua(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xp(t) : vr.r(e);
  }
  var bi = typeof document > "u" ? null : document;
  function Ng(e, t, a) {
    var o = bi;
    if (o && typeof t == "string" && t) {
      var d = En(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof a == "string" && (d += '[crossorigin="' + a + '"]'), xg.has(d) || (xg.add(d), e = { rel: e, crossOrigin: a, href: t }, o.querySelector(d) === null && (t = o.createElement("link"), Dt(t, "link", e), Tt(t), o.head.appendChild(t)));
    }
  }
  function r1(e) {
    vr.D(e), Ng("dns-prefetch", e, null);
  }
  function a1(e, t) {
    vr.C(e, t), Ng("preconnect", e, t);
  }
  function i1(e, t, a) {
    vr.L(e, t, a);
    var o = bi;
    if (o && e && t) {
      var d = 'link[rel="preload"][as="' + En(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (d += '[imagesrcset="' + En(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (d += '[imagesizes="' + En(
        a.imageSizes
      ) + '"]')) : d += '[href="' + En(e) + '"]';
      var b = d;
      switch (t) {
        case "style":
          b = Si(e);
          break;
        case "script":
          b = wi(e);
      }
      On.has(b) || (e = g(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), On.set(b, e), o.querySelector(d) !== null || t === "style" && o.querySelector(ks(b)) || t === "script" && o.querySelector(As(b)) || (t = o.createElement("link"), Dt(t, "link", e), Tt(t), o.head.appendChild(t)));
    }
  }
  function s1(e, t) {
    vr.m(e, t);
    var a = bi;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", d = 'link[rel="modulepreload"][as="' + En(o) + '"][href="' + En(e) + '"]', b = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = wi(e);
      }
      if (!On.has(b) && (e = g({ rel: "modulepreload", href: e }, t), On.set(b, e), a.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(As(b)))
              return;
        }
        o = a.createElement("link"), Dt(o, "link", e), Tt(o), a.head.appendChild(o);
      }
    }
  }
  function o1(e, t, a) {
    vr.S(e, t, a);
    var o = bi;
    if (o && e) {
      var d = Ha(o).hoistableStyles, b = Si(e);
      t = t || "default";
      var T = d.get(b);
      if (!T) {
        var D = { loading: 0, preload: null };
        if (T = o.querySelector(
          ks(b)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = On.get(b)) && jd(e, a);
          var U = T = o.createElement("link");
          Tt(U), Dt(U, "link", e), U._p = new Promise(function(Q, ie) {
            U.onload = Q, U.onerror = ie;
          }), U.addEventListener("load", function() {
            D.loading |= 1;
          }), U.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, cu(T, t, o);
        }
        T = {
          type: "stylesheet",
          instance: T,
          count: 1,
          state: D
        }, d.set(b, T);
      }
    }
  }
  function u1(e, t) {
    vr.X(e, t);
    var a = bi;
    if (a && e) {
      var o = Ha(a).hoistableScripts, d = wi(e), b = o.get(d);
      b || (b = a.querySelector(As(d)), b || (e = g({ src: e, async: !0 }, t), (t = On.get(d)) && Dd(e, t), b = a.createElement("script"), Tt(b), Dt(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function l1(e, t) {
    vr.M(e, t);
    var a = bi;
    if (a && e) {
      var o = Ha(a).hoistableScripts, d = wi(e), b = o.get(d);
      b || (b = a.querySelector(As(d)), b || (e = g({ src: e, async: !0, type: "module" }, t), (t = On.get(d)) && Dd(e, t), b = a.createElement("script"), Tt(b), Dt(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Og(e, t, a, o) {
    var d = (d = te.current) ? lu(d) : null;
    if (!d) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Si(a.href), a = Ha(
          d
        ).hoistableStyles, o = a.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Si(a.href);
          var b = Ha(
            d
          ).hoistableStyles, T = b.get(e);
          if (T || (d = d.ownerDocument || d, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, T), (b = d.querySelector(
            ks(e)
          )) && !b._p && (T.instance = b, T.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), b || c1(
            d,
            e,
            a,
            T.state
          ))), t && o === null)
            throw Error(i(528, ""));
          return T;
        }
        if (t && o !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = wi(a), a = Ha(
          d
        ).hoistableScripts, o = a.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Si(e) {
    return 'href="' + En(e) + '"';
  }
  function ks(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function c1(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), Dt(t, "link", a), Tt(t), e.head.appendChild(t));
  }
  function wi(e) {
    return '[src="' + En(e) + '"]';
  }
  function As(e) {
    return "script[async]" + e;
  }
  function Rg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + En(a.href) + '"]'
          );
          if (o)
            return t.instance = o, Tt(o), o;
          var d = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Tt(o), Dt(o, "style", d), cu(o, a.precedence, e), t.instance = o;
        case "stylesheet":
          d = Si(a.href);
          var b = e.querySelector(
            ks(d)
          );
          if (b)
            return t.state.loading |= 4, t.instance = b, Tt(b), b;
          o = Mg(a), (d = On.get(d)) && jd(o, d), b = (e.ownerDocument || e).createElement("link"), Tt(b);
          var T = b;
          return T._p = new Promise(function(D, U) {
            T.onload = D, T.onerror = U;
          }), Dt(b, "link", o), t.state.loading |= 4, cu(b, a.precedence, e), t.instance = b;
        case "script":
          return b = wi(a.src), (d = e.querySelector(
            As(b)
          )) ? (t.instance = d, Tt(d), d) : (o = a, (d = On.get(b)) && (o = g({}, a), Dd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), Tt(d), Dt(d, "link", o), e.head.appendChild(d), t.instance = d);
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, cu(o, a.precedence, e));
    return t.instance;
  }
  function cu(e, t, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, b = d, T = 0; T < o.length; T++) {
      var D = o[T];
      if (D.dataset.precedence === t) b = D;
      else if (b !== d) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function jd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Dd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var du = null;
  function jg(e, t, a) {
    if (du === null) {
      var o = /* @__PURE__ */ new Map(), d = du = /* @__PURE__ */ new Map();
      d.set(a, o);
    } else
      d = du, o = d.get(a), o || (o = /* @__PURE__ */ new Map(), d.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), d = 0; d < a.length; d++) {
      var b = a[d];
      if (!(b[Bi] || b[It] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = b.getAttribute(t) || "";
        T = e + T;
        var D = o.get(T);
        D ? D.push(b) : o.set(T, [b]);
      }
    }
    return o;
  }
  function Dg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function d1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function zg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ts = null;
  function f1() {
  }
  function h1(e, t, a) {
    if (Ts === null) throw Error(i(475));
    var o = Ts;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = Si(a.href), b = e.querySelector(
          ks(d)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = fu.bind(o), e.then(o, o)), t.state.loading |= 4, t.instance = b, Tt(b);
          return;
        }
        b = e.ownerDocument || e, a = Mg(a), (d = On.get(d)) && jd(a, d), b = b.createElement("link"), Tt(b);
        var T = b;
        T._p = new Promise(function(D, U) {
          T.onload = D, T.onerror = U;
        }), Dt(b, "link", a), t.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++, t = fu.bind(o), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function p1() {
    if (Ts === null) throw Error(i(475));
    var e = Ts;
    return e.stylesheets && e.count === 0 && zd(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && zd(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function fu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var hu = null;
  function zd(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hu = /* @__PURE__ */ new Map(), t.forEach(m1, e), hu = null, fu.call(e));
  }
  function m1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = hu.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), hu.set(e, a);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < d.length; b++) {
          var T = d[b];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (a.set(T.dataset.precedence, T), o = T);
        }
        o && a.set(null, o);
      }
      d = t.instance, T = d.getAttribute("data-precedence"), b = a.get(T) || o, b === o && a.set(null, d), a.set(T, d), this.count++, o = fu.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), b ? b.parentNode.insertBefore(d, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var xs = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function g1(e, t, a, o, d, b, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ml(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.hiddenUpdates = Ml(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = b, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Lg(e, t, a, o, d, b, T, D, U, Q, ie, ue) {
    return e = new g1(
      e,
      t,
      a,
      T,
      D,
      U,
      Q,
      ue
    ), t = 1, b === !0 && (t |= 24), b = un(3, null, null, t), e.current = b, b.stateNode = e, t = gc(), t.refCount++, e.pooledCache = t, t.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: t
    }, bc(b), e;
  }
  function Pg(e) {
    return e ? (e = Wa, e) : Wa;
  }
  function Ig(e, t, a, o, d, b) {
    d = Pg(d), o.context === null ? o.context = d : o.pendingContext = d, o = Nr(t), o.payload = { element: a }, b = b === void 0 ? null : b, b !== null && (o.callback = b), a = Or(e, o, t), a !== null && (hn(a, e, t), as(a, e, t));
  }
  function Bg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ld(e, t) {
    Bg(e, t), (e = e.alternate) && Bg(e, t);
  }
  function Ug(e) {
    if (e.tag === 13) {
      var t = Ja(e, 67108864);
      t !== null && hn(t, e, 67108864), Ld(e, 67108864);
    }
  }
  var pu = !0;
  function v1(e, t, a, o) {
    var d = M.T;
    M.T = null;
    var b = B.p;
    try {
      B.p = 2, Pd(e, t, a, o);
    } finally {
      B.p = b, M.T = d;
    }
  }
  function y1(e, t, a, o) {
    var d = M.T;
    M.T = null;
    var b = B.p;
    try {
      B.p = 8, Pd(e, t, a, o);
    } finally {
      B.p = b, M.T = d;
    }
  }
  function Pd(e, t, a, o) {
    if (pu) {
      var d = Id(o);
      if (d === null)
        Cd(
          e,
          t,
          o,
          mu,
          a
        ), qg(e, o);
      else if (b1(
        d,
        e,
        t,
        a,
        o
      ))
        o.stopPropagation();
      else if (qg(e, o), t & 4 && -1 < _1.indexOf(e)) {
        for (; d !== null; ) {
          var b = Ua(d);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var T = Sn(b.pendingLanes);
                  if (T !== 0) {
                    var D = b;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; T; ) {
                      var U = 1 << 31 - Zt(T);
                      D.entanglements[1] |= U, T &= ~U;
                    }
                    Qn(b), ($e & 6) === 0 && (Jo = Fe() + 500, Ss(0));
                  }
                }
                break;
              case 13:
                D = Ja(b, 2), D !== null && hn(D, b, 2), eu(), Ld(b, 2);
            }
          if (b = Id(o), b === null && Cd(
            e,
            t,
            o,
            mu,
            a
          ), b === d) break;
          d = b;
        }
        d !== null && o.stopPropagation();
      } else
        Cd(
          e,
          t,
          o,
          null,
          a
        );
    }
  }
  function Id(e) {
    return e = Zl(e), Bd(e);
  }
  var mu = null;
  function Bd(e) {
    if (mu = null, e = Ba(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return mu = e, null;
  }
  function Hg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (jn()) {
          case dt:
            return 2;
          case ve:
            return 8;
          case ye:
          case qe:
            return 32;
          case Ze:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ud = !1, Zr = null, Gr = null, Vr = null, Ns = /* @__PURE__ */ new Map(), Os = /* @__PURE__ */ new Map(), Yr = [], _1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function qg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zr = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        Vr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ns.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Os.delete(t.pointerId);
    }
  }
  function Ms(e, t, a, o, d, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [d]
    }, t !== null && (t = Ua(t), t !== null && Ug(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function b1(e, t, a, o, d) {
    switch (t) {
      case "focusin":
        return Zr = Ms(
          Zr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "dragenter":
        return Gr = Ms(
          Gr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "mouseover":
        return Vr = Ms(
          Vr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "pointerover":
        var b = d.pointerId;
        return Ns.set(
          b,
          Ms(
            Ns.get(b) || null,
            e,
            t,
            a,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return b = d.pointerId, Os.set(
          b,
          Ms(
            Os.get(b) || null,
            e,
            t,
            a,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function Zg(e) {
    var t = Ba(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, h_(e.priority, function() {
              if (a.tag === 13) {
                var o = fn();
                o = Rl(o);
                var d = Ja(a, o);
                d !== null && hn(d, a, o), Ld(a, o);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Id(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        ql = o, a.target.dispatchEvent(o), ql = null;
      } else
        return t = Ua(a), t !== null && Ug(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Gg(e, t, a) {
    gu(e) && a.delete(t);
  }
  function S1() {
    Ud = !1, Zr !== null && gu(Zr) && (Zr = null), Gr !== null && gu(Gr) && (Gr = null), Vr !== null && gu(Vr) && (Vr = null), Ns.forEach(Gg), Os.forEach(Gg);
  }
  function vu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ud || (Ud = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      S1
    )));
  }
  var yu = null;
  function Vg(e) {
    yu !== e && (yu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        yu === e && (yu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], o = e[t + 1], d = e[t + 2];
          if (typeof o != "function") {
            if (Bd(o || a) === null)
              continue;
            break;
          }
          var b = Ua(a);
          b !== null && (e.splice(t, 3), t -= 3, Bc(
            b,
            {
              pending: !0,
              data: d,
              method: a.method,
              action: o
            },
            o,
            d
          ));
        }
      }
    ));
  }
  function Rs(e) {
    function t(U) {
      return vu(U, e);
    }
    Zr !== null && vu(Zr, e), Gr !== null && vu(Gr, e), Vr !== null && vu(Vr, e), Ns.forEach(t), Os.forEach(t);
    for (var a = 0; a < Yr.length; a++) {
      var o = Yr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Yr.length && (a = Yr[0], a.blockedOn === null); )
      Zg(a), a.blockedOn === null && Yr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var d = a[o], b = a[o + 1], T = d[Qt] || null;
        if (typeof b == "function")
          T || Vg(a);
        else if (T) {
          var D = null;
          if (b && b.hasAttribute("formAction")) {
            if (d = b, T = b[Qt] || null)
              D = T.formAction;
            else if (Bd(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? a[o + 1] = D : (a.splice(o, 3), o -= 3), Vg(a);
        }
      }
  }
  function Hd(e) {
    this._internalRoot = e;
  }
  _u.prototype.render = Hd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var a = t.current, o = fn();
    Ig(a, o, e, t, null, null);
  }, _u.prototype.unmount = Hd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ig(e.current, 2, null, e, null, null), eu(), t[Ia] = null;
    }
  };
  function _u(e) {
    this._internalRoot = e;
  }
  _u.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = uh();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Yr.length && t !== 0 && t < Yr[a].priority; a++) ;
      Yr.splice(a, 0, e), a === 0 && Zg(e);
    }
  };
  var Yg = r.version;
  if (Yg !== "19.1.1")
    throw Error(
      i(
        527,
        Yg,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = p(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var w1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bu.isDisabled && bu.supportsFiber)
      try {
        Dn = bu.inject(
          w1
        ), mt = bu;
      } catch {
      }
  }
  return Ls.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var a = !1, o = "", d = um, b = lm, T = cm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (b = t.onCaughtError), t.onRecoverableError !== void 0 && (T = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = Lg(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      d,
      b,
      T,
      D,
      null
    ), e[Ia] = t.current, Ed(e), new Hd(t);
  }, Ls.hydrateRoot = function(e, t, a) {
    if (!u(e)) throw Error(i(299));
    var o = !1, d = "", b = um, T = lm, D = cm, U = null, Q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (d = a.identifierPrefix), a.onUncaughtError !== void 0 && (b = a.onUncaughtError), a.onCaughtError !== void 0 && (T = a.onCaughtError), a.onRecoverableError !== void 0 && (D = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (U = a.unstable_transitionCallbacks), a.formState !== void 0 && (Q = a.formState)), t = Lg(
      e,
      1,
      !0,
      t,
      a ?? null,
      o,
      d,
      b,
      T,
      D,
      U,
      Q
    ), t.context = Pg(null), a = t.current, o = fn(), o = Rl(o), d = Nr(o), d.callback = null, Or(a, d, o), a = o, t.current.lanes = a, Ii(t, a), Qn(t), e[Ia] = t.current, Ed(e), new _u(t);
  }, Ls.version = "19.1.1", Ls;
}
var ov;
function i2() {
  if (ov) return Vd.exports;
  ov = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Vd.exports = a2(), Vd.exports;
}
var s2 = i2();
const uv = /* @__PURE__ */ Uf(s2);
var o2 = Object.defineProperty, u2 = (n, r, s) => r in n ? o2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, lv = (n, r, s) => u2(n, typeof r != "symbol" ? r + "" : r, s);
class X0 {
  constructor(r, s) {
    lv(this, "settingsKey"), lv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: s = "recursive" } = r, i = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: i ?? ""
      },
      formatVersion: {
        changed: !1,
        new: u ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!c)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const m = {
      ...f,
      oldSettings: structuredClone(c),
      version: {
        changed: !1,
        old: c.version,
        new: c.version
      },
      formatVersion: {
        changed: !1,
        old: c.formatVersion,
        new: c.formatVersion
      }
    };
    if (s === "recursive") {
      let p = function(y, g) {
        let E = !1;
        for (const v of Object.keys(g))
          y[v] === void 0 ? (y[v] = g[v], E = !0) : typeof g[v] == "object" && g[v] !== null && (y[v] = y[v] || {}, p(y[v], g[v]) && (E = !0));
        return E;
      };
      i && c.version !== i && (m.version.changed = !0, m.version.new = i, c.version = i), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      i && !c.version && (c.version = i, m.version.changed = !0, m.version.new = i), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(c), y = c.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((v) => v.from === y);
          if (E && E.to > y)
            p = await E.action(p), y = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const v of s)
              if (v.from === "*" && v.to > y && y !== v.to) {
                p = await v.action(p), y = v.to, p.formatVersion = v.to, g = !0;
                break;
              }
        } while (g);
        if (y !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = y;
          const E = this.defaultSettings.version;
          E && (p.version = E);
        }
        if (m.formatVersion.changed) {
          for (const E of Object.keys(c))
            delete c[E];
          Object.assign(c, p), this.saveSettings();
        }
      } catch (g) {
        throw console.error("Failed to apply version changes:", g), new Error(`Version migration failed: ${g instanceof Error ? g.message : g}`, {
          cause: g
        });
      }
    }
    return m.newSettings = c, m;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, s) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = s, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function wr(n) {
  return Array.isArray ? Array.isArray(n) : K0(n) === "[object Array]";
}
function l2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function c2(n) {
  return n == null ? "" : l2(n);
}
function Kn(n) {
  return typeof n == "string";
}
function F0(n) {
  return typeof n == "number";
}
function d2(n) {
  return n === !0 || n === !1 || f2(n) && K0(n) == "[object Boolean]";
}
function Q0(n) {
  return typeof n == "object";
}
function f2(n) {
  return Q0(n) && n !== null;
}
function vn(n) {
  return n != null;
}
function Fd(n) {
  return !n.trim().length;
}
function K0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const h2 = "Incorrect 'index' type", p2 = (n) => `Invalid value for key ${n}`, m2 = (n) => `Pattern length exceeds max of ${n}.`, g2 = (n) => `Missing ${n} property in key`, v2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, cv = Object.prototype.hasOwnProperty;
class y2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((i) => {
      let u = J0(i);
      this._keys.push(u), this._keyMap[u.id] = u, s += u.weight;
    }), this._keys.forEach((i) => {
      i.weight /= s;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function J0(n) {
  let r = null, s = null, i = null, u = 1, c = null;
  if (Kn(n) || wr(n))
    i = n, r = dv(n), s = vf(n);
  else {
    if (!cv.call(n, "name"))
      throw new Error(g2("name"));
    const f = n.name;
    if (i = f, cv.call(n, "weight") && (u = n.weight, u <= 0))
      throw new Error(v2(f));
    r = dv(f), s = vf(f), c = n.getFn;
  }
  return { path: r, id: s, weight: u, src: i, getFn: c };
}
function dv(n) {
  return wr(n) ? n : n.split(".");
}
function vf(n) {
  return wr(n) ? n.join(".") : n;
}
function _2(n, r) {
  let s = [], i = !1;
  const u = (c, f, m) => {
    if (vn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const y = c[p];
        if (!vn(y))
          return;
        if (m === f.length - 1 && (Kn(y) || F0(y) || d2(y)))
          s.push(c2(y));
        else if (wr(y)) {
          i = !0;
          for (let g = 0, E = y.length; g < E; g += 1)
            u(y[g], f, m + 1);
        } else f.length && u(y, f, m + 1);
      }
  };
  return u(n, Kn(r) ? r.split(".") : r, 0), i ? s : s[0];
}
const b2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, S2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (n, r) => n.score === r.score ? n.idx < r.idx ? -1 : 1 : n.score < r.score ? -1 : 1
}, w2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, E2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: _2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Te = {
  ...S2,
  ...b2,
  ...w2,
  ...E2
};
const C2 = /[^ ]+/g;
function k2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), i = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(C2).length;
      if (s.has(c))
        return s.get(c);
      const f = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(f * i) / i);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class qf {
  constructor({
    getFn: r = Te.getFn,
    fieldNormWeight: s = Te.fieldNormWeight
  } = {}) {
    this.norm = k2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((s, i) => {
      this._keysMap[s.id] = i;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Kn(this.docs[0]) ? this.docs.forEach((r, s) => {
      this._addString(r, s);
    }) : this.docs.forEach((r, s) => {
      this._addObject(r, s);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const s = this.size();
    Kn(r) ? this._addString(r, s) : this._addObject(r, s);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let s = r, i = this.size(); s < i; s += 1)
      this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(r, s) {
    return r[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, s) {
    if (!vn(r) || Fd(r))
      return;
    let i = {
      v: r,
      i: s,
      n: this.norm.get(r)
    };
    this.records.push(i);
  }
  _addObject(r, s) {
    let i = { i: s, $: {} };
    this.keys.forEach((u, c) => {
      let f = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (vn(f)) {
        if (wr(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: y, value: g } = p.pop();
            if (vn(g))
              if (Kn(g) && !Fd(g)) {
                let E = {
                  v: g,
                  i: y,
                  n: this.norm.get(g)
                };
                m.push(E);
              } else wr(g) && g.forEach((E, v) => {
                p.push({
                  nestedArrIndex: v,
                  value: E
                });
              });
          }
          i.$[c] = m;
        } else if (Kn(f) && !Fd(f)) {
          let m = {
            v: f,
            n: this.norm.get(f)
          };
          i.$[c] = m;
        }
      }
    }), this.records.push(i);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function W0(n, r, { getFn: s = Te.getFn, fieldNormWeight: i = Te.fieldNormWeight } = {}) {
  const u = new qf({ getFn: s, fieldNormWeight: i });
  return u.setKeys(n.map(J0)), u.setSources(r), u.create(), u;
}
function A2(n, { getFn: r = Te.getFn, fieldNormWeight: s = Te.fieldNormWeight } = {}) {
  const { keys: i, records: u } = n, c = new qf({ getFn: r, fieldNormWeight: s });
  return c.setKeys(i), c.setIndexRecords(u), c;
}
function Su(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: i = 0,
  distance: u = Te.distance,
  ignoreLocation: c = Te.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (c)
    return f;
  const m = Math.abs(i - s);
  return u ? f + m / u : m ? 1 : f;
}
function T2(n = [], r = Te.minMatchCharLength) {
  let s = [], i = -1, u = -1, c = 0;
  for (let f = n.length; c < f; c += 1) {
    let m = n[c];
    m && i === -1 ? i = c : !m && i !== -1 && (u = c - 1, u - i + 1 >= r && s.push([i, u]), i = -1);
  }
  return n[c - 1] && c - i >= r && s.push([i, c - 1]), s;
}
const Oa = 32;
function x2(n, r, s, {
  location: i = Te.location,
  distance: u = Te.distance,
  threshold: c = Te.threshold,
  findAllMatches: f = Te.findAllMatches,
  minMatchCharLength: m = Te.minMatchCharLength,
  includeMatches: p = Te.includeMatches,
  ignoreLocation: y = Te.ignoreLocation
} = {}) {
  if (r.length > Oa)
    throw new Error(m2(Oa));
  const g = r.length, E = n.length, v = Math.max(0, Math.min(i, E));
  let S = c, h = v;
  const C = m > 1 || p, A = C ? Array(E) : [];
  let O;
  for (; (O = n.indexOf(r, h)) > -1; ) {
    let k = Su(r, {
      currentLocation: O,
      expectedLocation: v,
      distance: u,
      ignoreLocation: y
    });
    if (S = Math.min(k, S), h = O + g, C) {
      let R = 0;
      for (; R < g; )
        A[O + R] = 1, R += 1;
    }
  }
  h = -1;
  let x = [], z = 1, l = g + E;
  const _ = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let R = 0, L = l;
    for (; R < L; )
      Su(r, {
        errors: k,
        currentLocation: v + L,
        expectedLocation: v,
        distance: u,
        ignoreLocation: y
      }) <= S ? R = L : l = L, L = Math.floor((l - R) / 2 + R);
    l = L;
    let j = Math.max(1, v - L + 1), P = f ? E : Math.min(v + L, E) + g, Z = Array(P + 2);
    Z[P + 1] = (1 << k) - 1;
    for (let Y = P; Y >= j; Y -= 1) {
      let W = Y - 1, M = s[n.charAt(W)];
      if (C && (A[W] = +!!M), Z[Y] = (Z[Y + 1] << 1 | 1) & M, k && (Z[Y] |= (x[Y + 1] | x[Y]) << 1 | 1 | x[Y + 1]), Z[Y] & _ && (z = Su(r, {
        errors: k,
        currentLocation: W,
        expectedLocation: v,
        distance: u,
        ignoreLocation: y
      }), z <= S)) {
        if (S = z, h = W, h <= v)
          break;
        j = Math.max(1, 2 * v - h);
      }
    }
    if (Su(r, {
      errors: k + 1,
      currentLocation: v,
      expectedLocation: v,
      distance: u,
      ignoreLocation: y
    }) > S)
      break;
    x = Z;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, z)
  };
  if (C) {
    const k = T2(A, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function N2(n) {
  let r = {};
  for (let s = 0, i = n.length; s < i; s += 1) {
    const u = n.charAt(s);
    r[u] = (r[u] || 0) | 1 << i - s - 1;
  }
  return r;
}
const pl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class ey {
  constructor(r, {
    location: s = Te.location,
    threshold: i = Te.threshold,
    distance: u = Te.distance,
    includeMatches: c = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: y = Te.ignoreDiacritics,
    ignoreLocation: g = Te.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: i,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: y,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = y ? pl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: N2(S),
        startIndex: h
      });
    }, v = this.pattern.length;
    if (v > Oa) {
      let S = 0;
      const h = v % Oa, C = v - h;
      for (; S < C; )
        E(this.pattern.substr(S, Oa), S), S += Oa;
      if (h) {
        const A = v - Oa;
        E(this.pattern.substr(A), A);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: i, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = i ? pl(r) : r, this.pattern === r) {
      let C = {
        isMatch: !0,
        score: 0
      };
      return u && (C.indices = [[0, r.length - 1]]), C;
    }
    const {
      location: c,
      distance: f,
      threshold: m,
      findAllMatches: p,
      minMatchCharLength: y,
      ignoreLocation: g
    } = this.options;
    let E = [], v = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: A, startIndex: O }) => {
      const { isMatch: x, score: z, indices: l } = x2(r, C, A, {
        location: c + O,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: y,
        includeMatches: u,
        ignoreLocation: g
      });
      x && (S = !0), v += z, x && l && (E = [...E, ...l]);
    });
    let h = {
      isMatch: S,
      score: S ? v / this.chunks.length : 1
    };
    return S && u && (h.indices = E), h;
  }
}
class ta {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return fv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return fv(r, this.singleRegex);
  }
  search() {
  }
}
function fv(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class O2 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const s = r === this.pattern;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class M2 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const i = r.indexOf(this.pattern) === -1;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class R2 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const s = r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class j2 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const s = !r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class D2 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const s = r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class z2 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const s = !r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class ty extends ta {
  constructor(r, {
    location: s = Te.location,
    threshold: i = Te.threshold,
    distance: u = Te.distance,
    includeMatches: c = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: y = Te.ignoreDiacritics,
    ignoreLocation: g = Te.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new ey(r, {
      location: s,
      threshold: i,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: y,
      ignoreLocation: g
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class ny extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let s = 0, i;
    const u = [], c = this.pattern.length;
    for (; (i = r.indexOf(this.pattern, s)) > -1; )
      s = i + c, u.push([i, s - 1]);
    const f = !!u.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: u
    };
  }
}
const yf = [
  O2,
  ny,
  R2,
  j2,
  z2,
  D2,
  M2,
  ty
], hv = yf.length, L2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, P2 = "|";
function I2(n, r = {}) {
  return n.split(P2).map((s) => {
    let i = s.trim().split(L2).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = i.length; c < f; c += 1) {
      const m = i[c];
      let p = !1, y = -1;
      for (; !p && ++y < hv; ) {
        const g = yf[y];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (y = -1; ++y < hv; ) {
          const g = yf[y];
          let E = g.isSingleMatch(m);
          if (E) {
            u.push(new g(E, r));
            break;
          }
        }
    }
    return u;
  });
}
const B2 = /* @__PURE__ */ new Set([ty.type, ny.type]);
class U2 {
  constructor(r, {
    isCaseSensitive: s = Te.isCaseSensitive,
    ignoreDiacritics: i = Te.ignoreDiacritics,
    includeMatches: u = Te.includeMatches,
    minMatchCharLength: c = Te.minMatchCharLength,
    ignoreLocation: f = Te.ignoreLocation,
    findAllMatches: m = Te.findAllMatches,
    location: p = Te.location,
    threshold: y = Te.threshold,
    distance: g = Te.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: i,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: y,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = i ? pl(r) : r, this.pattern = r, this.query = I2(this.pattern, this.options);
  }
  static condition(r, s) {
    return s.useExtendedSearch;
  }
  searchIn(r) {
    const s = this.query;
    if (!s)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: i, isCaseSensitive: u, ignoreDiacritics: c } = this.options;
    r = u ? r : r.toLowerCase(), r = c ? pl(r) : r;
    let f = 0, m = [], p = 0;
    for (let y = 0, g = s.length; y < g; y += 1) {
      const E = s[y];
      m.length = 0, f = 0;
      for (let v = 0, S = E.length; v < S; v += 1) {
        const h = E[v], { isMatch: C, indices: A, score: O } = h.search(r);
        if (C) {
          if (f += 1, p += O, i) {
            const x = h.constructor.type;
            B2.has(x) ? m = [...m, ...A] : m.push(A);
          }
        } else {
          p = 0, f = 0, m.length = 0;
          break;
        }
      }
      if (f) {
        let v = {
          isMatch: !0,
          score: p / f
        };
        return i && (v.indices = m), v;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const _f = [];
function H2(...n) {
  _f.push(...n);
}
function bf(n, r) {
  for (let s = 0, i = _f.length; s < i; s += 1) {
    let u = _f[s];
    if (u.condition(n, r))
      return new u(n, r);
  }
  return new ey(n, r);
}
const ml = {
  AND: "$and",
  OR: "$or"
}, Sf = {
  PATH: "$path",
  PATTERN: "$val"
}, wf = (n) => !!(n[ml.AND] || n[ml.OR]), q2 = (n) => !!n[Sf.PATH], Z2 = (n) => !wr(n) && Q0(n) && !wf(n), pv = (n) => ({
  [ml.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function ry(n, r, { auto: s = !0 } = {}) {
  const i = (u) => {
    let c = Object.keys(u);
    const f = q2(u);
    if (!f && c.length > 1 && !wf(u))
      return i(pv(u));
    if (Z2(u)) {
      const p = f ? u[Sf.PATH] : c[0], y = f ? u[Sf.PATTERN] : u[p];
      if (!Kn(y))
        throw new Error(p2(p));
      const g = {
        keyId: vf(p),
        pattern: y
      };
      return s && (g.searcher = bf(y, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const y = u[p];
      wr(y) && y.forEach((g) => {
        m.children.push(i(g));
      });
    }), m;
  };
  return wf(n) || (n = pv(n)), i(n);
}
function G2(n, { ignoreFieldNorm: r = Te.ignoreFieldNorm }) {
  n.forEach((s) => {
    let i = 1;
    s.matches.forEach(({ key: u, norm: c, score: f }) => {
      const m = u ? u.weight : null;
      i *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = i;
  });
}
function V2(n, r) {
  const s = n.matches;
  r.matches = [], vn(s) && s.forEach((i) => {
    if (!vn(i.indices) || !i.indices.length)
      return;
    const { indices: u, value: c } = i;
    let f = {
      indices: u,
      value: c
    };
    i.key && (f.key = i.key.src), i.idx > -1 && (f.refIndex = i.idx), r.matches.push(f);
  });
}
function Y2(n, r) {
  r.score = n.score;
}
function $2(n, r, {
  includeMatches: s = Te.includeMatches,
  includeScore: i = Te.includeScore
} = {}) {
  const u = [];
  return s && u.push(V2), i && u.push(Y2), n.map((c) => {
    const { idx: f } = c, m = {
      item: r[f],
      refIndex: f
    };
    return u.length && u.forEach((p) => {
      p(c, m);
    }), m;
  });
}
class Pi {
  constructor(r, s = {}, i) {
    this.options = { ...Te, ...s }, this.options.useExtendedSearch, this._keyStore = new y2(this.options.keys), this.setCollection(r, i);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof qf))
      throw new Error(h2);
    this._myIndex = s || W0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    vn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let i = 0, u = this._docs.length; i < u; i += 1) {
      const c = this._docs[i];
      r(c, i) && (this.removeAt(i), i -= 1, u -= 1, s.push(c));
    }
    return s;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: s = -1 } = {}) {
    const {
      includeMatches: i,
      includeScore: u,
      shouldSort: c,
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Kn(r) ? Kn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return G2(p, { ignoreFieldNorm: m }), c && p.sort(f), F0(s) && s > -1 && (p = p.slice(0, s)), $2(p, this._docs, {
      includeMatches: i,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = bf(r, this.options), { records: i } = this._myIndex, u = [];
    return i.forEach(({ v: c, i: f, n: m }) => {
      if (!vn(c))
        return;
      const { isMatch: p, score: y, indices: g } = s.searchIn(c);
      p && u.push({
        item: c,
        idx: f,
        matches: [{ score: y, value: c, norm: m, indices: g }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = ry(r, this.options), i = (m, p, y) => {
      if (!m.children) {
        const { keyId: E, searcher: v } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: v
        });
        return S && S.length ? [
          {
            idx: y,
            item: p,
            matches: S
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, v = m.children.length; E < v; E += 1) {
        const S = m.children[E], h = i(S, p, y);
        if (h.length)
          g.push(...h);
        else if (m.operator === ml.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (vn(m)) {
        let y = i(s, m, p);
        y.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), y.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = bf(r, this.options), { keys: i, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!vn(f))
        return;
      let p = [];
      i.forEach((y, g) => {
        p.push(
          ...this._findMatches({
            key: y,
            value: f[g],
            searcher: s
          })
        );
      }), p.length && c.push({
        idx: m,
        item: f,
        matches: p
      });
    }), c;
  }
  _findMatches({ key: r, value: s, searcher: i }) {
    if (!vn(s))
      return [];
    let u = [];
    if (wr(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!vn(c))
          return;
        const { isMatch: p, score: y, indices: g } = i.searchIn(c);
        p && u.push({
          score: y,
          key: r,
          value: c,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: y } = i.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: y });
    }
    return u;
  }
}
Pi.version = "7.1.0";
Pi.createIndex = W0;
Pi.parseIndex = A2;
Pi.config = Te;
Pi.parseQuery = ry;
H2(U2);
var X2 = Object.defineProperty, F2 = (n, r, s) => r in n ? X2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, Q2 = (n, r, s) => F2(n, r + "", s);
let K2 = class {
  constructor() {
    Q2(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var s;
    const i = this.requestMap.get(r);
    if (i) {
      if (i.abortController)
        try {
          i.abortController.abort();
        } catch {
        }
      (s = i.options) != null && s.onFinish && await i.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, s) {
    var i;
    const u = SillyTavern.getContext(), c = u.uuidv4(), f = ((i = r?.custom) == null ? void 0 : i.stream) ?? !1;
    if (this.requestMap.set(c, {
      abortController: s?.abortController,
      isStream: f,
      options: s
    }), f)
      try {
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        s != null && s.onStart && await s.onStart(c);
        let p;
        for await (const y of m())
          p = y, s != null && s.onEntry && await s.onEntry(c, y);
        s != null && s.onFinish && await s.onFinish(c, p);
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    else
      try {
        s != null && s.onStart && await s.onStart(c);
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(c) && (s != null && s.onEntry && await s.onEntry(c, m), s != null && s.onFinish && await s.onFinish(c, m));
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    return c;
  }
  getActiveRequest(r) {
    var s;
    return (s = this.requestMap.get(r)) == null ? void 0 : s.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [s, i] of this.requestMap)
      r.set(s, i.abortController);
    return r;
  }
};
async function J2(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Se(n, r, { escapeHtml: s = !0 } = {}) {
  await J2("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function Qd(n) {
  return T1(n);
}
function mv(n, r) {
  return k1(n, r);
}
function wu(n, r, s) {
  return A1(n, r, s);
}
function W2(n, r, s) {
  return P1(n, r, s);
}
function e3(n, r) {
  return I1(n, r);
}
function t3(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return C1(n, { customStoryString: r, customInstructSettings: s });
}
function ka(n) {
  return G1(n);
}
function n3() {
  return {
    prompt: js[Ds.prompt],
    interval: js[Ds.interval],
    position: js[Ds.position],
    depth: js[Ds.depth],
    role: js[Ds.role]
  };
}
function r3(n, r) {
  return Y1(n, r);
}
function a3({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: i,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: y,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: v,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: A
}, O) {
  return V1(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: i,
      worldInfoBefore: u,
      worldInfoAfter: c,
      bias: f,
      type: m,
      quietPrompt: p,
      quietImage: y,
      cyclePrompt: E,
      systemPromptOverride: v,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: A
    },
    O
  );
}
function i3(n) {
  return U1(n);
}
function s3(n) {
  return H1(n);
}
function o3(n, r, {
  characterOverride: s,
  isMarkdown: i,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return X1(n, r, { characterOverride: s, isMarkdown: i, isPrompt: u, isEdit: c, depth: f });
}
function u3(n, r, { characterOverride: s = null } = {}) {
  return $1(n, r, { characterOverride: s });
}
async function l3(n, r) {
  return await B1(n, r);
}
function gv(n, {
  wiFormat: r
} = {}) {
  return q1(n, { wiFormat: r });
}
function Ps(n) {
  return Z1(n);
}
function ay(n, {
  manualAvatarKey: r
} = {}) {
  return F1(n, { manualAvatarKey: r });
}
function Zf(n, r) {
  return O1(n, r);
}
class c3 {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const s = Math.ceil(r.length / 4);
    return new Array(s).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var d3 = Object.defineProperty, f3 = (n, r, s) => r in n ? d3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, Eu = (n, r, s) => f3(n, typeof r != "symbol" ? r + "" : r, s);
class h3 {
  constructor(r) {
    Eu(this, "messages", []), Eu(this, "tokenizer"), Eu(this, "maxContext"), Eu(this, "currentTokenCount", 0), this.tokenizer = new c3(), this.maxContext = r;
  }
  getTokenCount(r) {
    var s, i;
    return r.content ? ((i = (s = r.source) == null ? void 0 : s.extra) == null ? void 0 : i.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += s, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += s, !0);
  }
  addMany(r) {
    const s = r.filter((m) => m.content), i = s.map((m) => this.getTokenCount(m)), u = i.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let c = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], y = i[m];
      if (this.currentTokenCount + c + y <= this.maxContext)
        f.unshift(p), c += y;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += c), f.length === s.length;
  }
  insert(r, s) {
    if (!s.content) return !0;
    const i = this.getTokenCount(s);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.splice(r, 0, s), this.currentTokenCount += i, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function iy(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: i,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: y,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var v, S, h, C, A, O, x, z, l, _, w, k, R, L;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const j = SillyTavern.getContext();
  let { description: P, personality: Z, persona: F, scenario: Y, mesExamples: W, system: M, jailbreak: B } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : j.getCharacterCardFields({
    chid: r
  });
  const K = n === "textgenerationwebui" ? (v = j.getPresetManager("instruct")) == null ? void 0 : v.getCompletionPresetByName(i) : void 0, ae = !!(K != null && K.enabled);
  let I = mv(W, ae);
  function $() {
    var ve, ye;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return Qd();
    if (typeof f == "number")
      return f;
    let qe;
    if (n === "textgenerationwebui") {
      const Ze = (ve = j.getPresetManager("textgenerationwebui")) == null ? void 0 : ve.getCompletionPresetByName(s);
      qe = Ze?.max_length;
    } else {
      const Ze = (ye = j.getPresetManager("openai")) == null ? void 0 : ye.getCompletionPresetByName(s);
      qe = Ze?.openai_max_context;
    }
    return typeof qe == "number" ? qe : Qd();
  }
  let le = [];
  const V = $();
  if (V <= 0)
    return { result: [], warnings: le };
  const H = new h3(V), ne = j.ToolManager.isToolCallingSupported(), te = E?.start ?? 0, ce = E != null && E.end ? E.end + 1 : void 0;
  let re = te === -1 && ce === 0 ? [] : j.chat.slice(te, ce).filter((ve) => {
    var ye;
    return !ve.is_system || ne && Array.isArray((ye = ve.extra) == null ? void 0 : ye.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ve, ye) => {
      var qe, Ze;
      let et = ve.mes, Zn = ve.is_user ? Fg.USER_INPUT : Fg.AI_OUTPUT, Dn = { isPrompt: !0, depth: re.length - ye - 1 }, mt = o3(et, Zn, Dn);
      return mt = await l3(ve, mt), (qe = ve?.extra) != null && qe.append_title && (Ze = ve?.extra) != null && Ze.title && (mt = `${mt}

${ve.extra.title}`), {
        ...ve,
        mes: mt,
        index: ye
      };
    })
  );
  const pe = re.map((ve) => M1 ? `${ve.name}: ${ve.mes}` : ve.mes).reverse(), { worldInfoString: je, worldInfoBefore: Le, worldInfoAfter: ge, worldInfoExamples: he, worldInfoDepth: _e, anBefore: De, anAfter: We } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await j.getWorldInfoPrompt(pe, V, !1);
  for (const ve of he) {
    const ye = ve.content;
    if (ye.length === 0)
      continue;
    const qe = wu(ye, Ea, Xr), Ze = mv(qe, ae);
    ve.position === R1.before ? I.unshift(...Ze) : I.push(...Ze);
  }
  function Fe() {
    const ve = [];
    for (let ye = re.length - 1; ye >= 0; ye--) {
      const qe = re[ye], Ze = qe.name === "System" && !qe.is_user ? "system" : qe.is_user ? "user" : "assistant";
      ve.unshift({
        role: Ze,
        content: m && Ze != "system" ? `${qe.name}: ${qe.mes}` : qe.mes,
        source: qe
      });
    }
    H.addMany(ve);
  }
  if (n === "textgenerationwebui") {
    const ve = [...I];
    I && (I = W2(I, Ea, Xr));
    const ye = (S = j.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(c);
    ye && (M = j.powerUserSettings.prefer_character_prompt && M ? M : wu(ye.content, Ea, Xr), M = ae ? e3(
      j.substituteParams(M, Ea, Xr, ye.content),
      K
    ) : M);
    const qe = {
      description: P,
      personality: Z,
      persona: j.powerUserSettings.persona_description_position == $g.IN_PROMPT ? F : "",
      scenario: Y,
      system: M,
      char: Xr,
      user: Ea,
      wiBefore: Le,
      wiAfter: ge,
      loreBefore: Le,
      loreAfter: ge,
      mesExamples: I.join(""),
      mesExamplesRaw: ve.join("")
    }, Ze = (h = j.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let et = t3(qe, {
      customInstructSettings: K,
      customStoryString: Ze?.story_string
    });
    et && H.add({ role: "system", content: et, ignoreInstruct: !0 }), Fe();
  } else {
    let ve = function(Gt) {
      const Ft = bn.find((Pa) => Pa.identifier === Gt);
      if (Ft)
        return Ft;
      const lo = et.prompts.find((Pa) => Pa.identifier === Gt);
      if (lo)
        return lo;
    }, ye = i3(re), qe = s3(I);
    async function Ze() {
      let [Gt, Ft] = await a3(
        {
          name2: Xr,
          charDescription: P,
          charPersonality: Z,
          Scenario: Y,
          worldInfoBefore: Le,
          worldInfoAfter: ge,
          extensionPrompts: j.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: M,
          jailbreakPromptOverride: B,
          personaDescription: F,
          messages: ye,
          messageExamples: qe
        },
        !1
      );
      H.addMany(Gt);
    }
    if (!s)
      return le.push("No preset name provided. Using default preset."), await Ze(), { result: H.getMessages(), warnings: le };
    const et = (C = j.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!et)
      return console.warn(`Preset not found: ${s}. Using current preset.`), le.push(`Preset not found: ${s}. Using current preset.`), Ze(), { result: H.getMessages(), warnings: le };
    let Zn = (A = et.prompt_order) == null ? void 0 : A.find((Gt) => Gt.character_id === an);
    if (!Zn && et.prompt_order && et.prompt_order.length > 0 && (Zn = et.prompt_order[et.prompt_order.length - 1]), !Zn)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), le.push(`No prompt order found for preset: ${s}. Using current preset.`), Ze(), { result: H.getMessages(), warnings: le };
    const Dn = Y && et.scenario_format ? j.substituteParams(et.scenario_format) : "", mt = Z && et.personality_format ? j.substituteParams(et.personality_format) : "", Gn = j.substituteParams(et.group_nudge_prompt), Zt = et.impersonation_prompt ? j.substituteParams(et.impersonation_prompt) : "", bn = [];
    g || bn.push(
      {
        role: "system",
        content: gv(Le, { wiFormat: et.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: gv(ge, { wiFormat: et.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || bn.push(
      { role: "system", content: P, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: Dn, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: Zt, identifier: "impersonate" },
      { role: "system", content: Gn, identifier: "groupNudge" }
    );
    const aa = j.extensionPrompts["1_memory"];
    aa && aa.value && bn.push({
      role: ka(aa.role),
      content: aa.value,
      identifier: "summary",
      position: Ps(aa.position)
    });
    const ia = j.extensionPrompts["2_floating_prompt"];
    !y && ia && ia.value && bn.push({
      role: ka(ia.role),
      content: ia.value,
      identifier: "authorsNote",
      position: Ps(ia.position)
    });
    const nr = j.extensionPrompts["3_vectors"];
    nr && nr.value && bn.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Ps(nr.position)
    });
    const Vn = j.extensionPrompts["4_vectors_data_bank"];
    Vn && Vn.value && bn.push({
      role: ka(Vn.role),
      content: Vn.value,
      identifier: "vectorsDataBank",
      position: Ps(Vn.position)
    });
    const Sn = j.extensionPrompts.chromadb;
    Sn && Sn.value && bn.push({
      role: "system",
      content: Sn.value,
      identifier: "smartContext",
      position: Ps(Sn.position)
    }), !p && j.powerUserSettings.persona_description && j.powerUserSettings.persona_description_position === $g.IN_PROMPT && bn.push({
      role: "system",
      content: j.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Zn.order.forEach((Gt) => {
      if (!Gt.enabled)
        return;
      const Ft = ve(Gt.identifier);
      if (Ft && Ft.content) {
        H.add({
          role: Ft.role ?? "system",
          content: j.substituteParams(Ft.content)
        });
        return;
      }
      Gt.identifier === "chatHistory" && Fe();
    });
  }
  const jn = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ve in j.extensionPrompts)
    if (Object.hasOwn(j.extensionPrompts, ve)) {
      const ye = j.extensionPrompts[ve];
      if (jn.includes(ve) || !j.extensionPrompts[ve].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(ye.position) || typeof ye.filter == "function" && !await ye.filter()) continue;
      const qe = {
        role: ka(ye.role) ?? "system",
        content: ye.value
      };
      if (ye.position === Ca.BEFORE_PROMPT)
        H.insert(ye.depth, qe);
      else if (ye.position === Ca.IN_PROMPT) {
        const Ze = H.getMessages();
        H.insert(Ze.length - ye.depth, qe);
      }
    }
  for (const ve of _e) {
    const ye = H.getMessages();
    H.insert(ye.length - ve.depth, {
      role: ka(ve.role),
      content: ve.entries.join(`
`)
    });
  }
  if (!p) {
    const ve = r3(Xt, Number(an));
    if (Xt && Array.isArray(ve) && ve.length > 0)
      ve.filter((ye) => ye.text).forEach((ye, qe) => {
        const Ze = H.getMessages();
        H.insert(Ze.length - ye.depth, { role: ye.role, content: ye.text });
      });
    else {
      const ye = wu(
        (_ = (l = (z = (x = (O = j.characters[an]) == null ? void 0 : O.data) == null ? void 0 : x.extensions) == null ? void 0 : z.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : _.trim(),
        Ea,
        Xr
      ) || "";
      if (ye) {
        const qe = N1, Ze = ((L = (R = (k = (w = j.characters[an]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : R.depth_prompt) == null ? void 0 : L.role) ?? x1, et = H.getMessages();
        H.insert(et.length - qe, {
          role: ka(Ze),
          content: ye
        });
      }
    }
  }
  let dt = -1;
  if (!y) {
    const ve = n3();
    if (ve.prompt) {
      ve.prompt = wu(ve.prompt, Ea, Xr);
      const ye = { role: ka(ve.role), content: ve.prompt };
      switch (ve.position) {
        case Ca.IN_PROMPT:
          H.insert(1, ye), dt = 1;
          break;
        case Ca.IN_CHAT:
          dt = H.getMessages().length - ve.depth, H.insert(dt, ye);
          break;
        case Ca.BEFORE_PROMPT:
          H.addFront(ye), dt = 0;
          break;
      }
    }
  }
  return dt >= 0 && (De.length > 0 && (H.insert(dt, { role: "system", content: De.join(`
`) }), dt++), We.length > 0 && H.insert(dt + 1, { role: "system", content: We.join(`
`) })), { result: H.getMessages(), warnings: le };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function vv(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), s.push.apply(s, i);
  }
  return s;
}
function er(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vv(Object(s), !0).forEach(function(i) {
      p3(n, i, s[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : vv(Object(s)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(s, i));
    });
  }
  return n;
}
function sl(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sl = function(r) {
    return typeof r;
  } : sl = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, sl(n);
}
function p3(n, r, s) {
  return r in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function Er() {
  return Er = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
    }
    return n;
  }, Er.apply(this, arguments);
}
function m3(n, r) {
  if (n == null) return {};
  var s = {}, i = Object.keys(n), u, c;
  for (c = 0; c < i.length; c++)
    u = i[c], !(r.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function g3(n, r) {
  if (n == null) return {};
  var s = m3(n, r), i, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      i = c[u], !(r.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (s[i] = n[i]);
  }
  return s;
}
var v3 = "1.15.6";
function br(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Cr = br(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ao = br(/Edge/i), yv = br(/firefox/i), Ks = br(/safari/i) && !br(/chrome/i) && !br(/android/i), Gf = br(/iP(ad|od|hone)/i), sy = br(/chrome/i) && br(/android/i), oy = {
  capture: !1,
  passive: !1
};
function He(n, r, s) {
  n.addEventListener(r, s, !Cr && oy);
}
function Ue(n, r, s) {
  n.removeEventListener(r, s, !Cr && oy);
}
function gl(n, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(r);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(r);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function uy(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Hn(n, r, s, i) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && gl(n, r) : gl(n, r)) || i && n === s)
        return n;
      if (n === s) break;
    } while (n = uy(n));
  }
  return null;
}
var _v = /\s+/g;
function mn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var i = (" " + n.className + " ").replace(_v, " ").replace(" " + r + " ", " ");
      n.className = (i + (s ? " " + r : "")).replace(_v, " ");
    }
}
function ke(n, r, s) {
  var i = n && n.style;
  if (i) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (s = n.currentStyle), r === void 0 ? s : s[r];
    !(r in i) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), i[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function Di(n, r) {
  var s = "";
  if (typeof n == "string")
    s = n;
  else
    do {
      var i = ke(n, "transform");
      i && i !== "none" && (s = i + " " + s);
    } while (!r && (n = n.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function ly(n, r, s) {
  if (n) {
    var i = n.getElementsByTagName(r), u = 0, c = i.length;
    if (s)
      for (; u < c; u++)
        s(i[u], u);
    return i;
  }
  return [];
}
function Jn() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function wt(n, r, s, i, u) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, f, m, p, y, g, E;
    if (n !== window && n.parentNode && n !== Jn() ? (c = n.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, y = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, y = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (u = u || n.parentNode, !Cr))
      do
        if (u && u.getBoundingClientRect && (ke(u, "transform") !== "none" || s && ke(u, "position") !== "static")) {
          var v = u.getBoundingClientRect();
          f -= v.top + parseInt(ke(u, "border-top-width")), m -= v.left + parseInt(ke(u, "border-left-width")), p = f + c.height, y = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (i && n !== window) {
      var S = Di(u || n), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, g /= C, p = f + g, y = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: y,
      width: E,
      height: g
    };
  }
}
function bv(n, r, s) {
  for (var i = Wr(n, !0), u = wt(n)[r]; i; ) {
    var c = wt(i)[s], f = void 0;
    if (f = u >= c, !f) return i;
    if (i === Jn()) break;
    i = Wr(i, !1);
  }
  return !1;
}
function Li(n, r, s, i) {
  for (var u = 0, c = 0, f = n.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Ae.ghost && (i || f[c] !== Ae.dragged) && Hn(f[c], s.draggable, n, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function Vf(n, r) {
  for (var s = n.lastElementChild; s && (s === Ae.ghost || ke(s, "display") === "none" || r && !gl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Mn(n, r) {
  var s = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Ae.clone && (!r || gl(n, r)) && s++;
  return s;
}
function Sv(n) {
  var r = 0, s = 0, i = Jn();
  if (n)
    do {
      var u = Di(n), c = u.a, f = u.d;
      r += n.scrollLeft * c, s += n.scrollTop * f;
    } while (n !== i && (n = n.parentNode));
  return [r, s];
}
function y3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var i in r)
        if (r.hasOwnProperty(i) && r[i] === n[s][i]) return Number(s);
    }
  return -1;
}
function Wr(n, r) {
  if (!n || !n.getBoundingClientRect) return Jn();
  var s = n, i = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = ke(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return Jn();
        if (i || r) return s;
        i = !0;
      }
    }
  while (s = s.parentNode);
  return Jn();
}
function _3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function Kd(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Js;
function cy(n, r) {
  return function() {
    if (!Js) {
      var s = arguments, i = this;
      s.length === 1 ? n.call(i, s[0]) : n.apply(i, s), Js = setTimeout(function() {
        Js = void 0;
      }, r);
    }
  };
}
function b3() {
  clearTimeout(Js), Js = void 0;
}
function dy(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function fy(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function hy(n, r, s) {
  var i = {};
  return Array.from(n.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!Hn(u, r.draggable, n, !1) || u.animated || u === s)) {
      var y = wt(u);
      i.left = Math.min((c = i.left) !== null && c !== void 0 ? c : 1 / 0, y.left), i.top = Math.min((f = i.top) !== null && f !== void 0 ? f : 1 / 0, y.top), i.right = Math.max((m = i.right) !== null && m !== void 0 ? m : -1 / 0, y.right), i.bottom = Math.max((p = i.bottom) !== null && p !== void 0 ? p : -1 / 0, y.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var rn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function S3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(u) {
          if (!(ke(u, "display") === "none" || u === Ae.ghost)) {
            n.push({
              target: u,
              rect: wt(u)
            });
            var c = er({}, n[n.length - 1].rect);
            if (u.thisAnimationDuration) {
              var f = Di(u, !0);
              f && (c.top -= f.f, c.left -= f.e);
            }
            u.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(i) {
      n.push(i);
    },
    removeAnimationState: function(i) {
      n.splice(y3(n, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof i == "function" && i();
        return;
      }
      var c = !1, f = 0;
      n.forEach(function(m) {
        var p = 0, y = m.target, g = y.fromRect, E = wt(y), v = y.prevFromRect, S = y.prevToRect, h = m.rect, C = Di(y, !0);
        C && (E.top -= C.f, E.left -= C.e), y.toRect = E, y.thisAnimationDuration && Kd(v, E) && !Kd(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = E3(h, v, S, u.options)), Kd(E, g) || (y.prevFromRect = g, y.prevToRect = E, p || (p = u.options.animation), u.animate(y, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(y.animationResetTimer), y.animationResetTimer = setTimeout(function() {
          y.animationTime = 0, y.prevFromRect = null, y.fromRect = null, y.prevToRect = null, y.thisAnimationDuration = null;
        }, p), y.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof i == "function" && i();
      }, f) : typeof i == "function" && i(), n = [];
    },
    animate: function(i, u, c, f) {
      if (f) {
        ke(i, "transition", ""), ke(i, "transform", "");
        var m = Di(this.el), p = m && m.a, y = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (y || 1);
        i.animatingX = !!g, i.animatingY = !!E, ke(i, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = w3(i), ke(i, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), ke(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          ke(i, "transition", ""), ke(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, f);
      }
    }
  };
}
function w3(n) {
  return n.offsetWidth;
}
function E3(n, r, s, i) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * i.animation;
}
var Ci = [], Jd = {
  initializeByDefault: !0
}, io = {
  mount: function(r) {
    for (var s in Jd)
      Jd.hasOwnProperty(s) && !(s in r) && (r[s] = Jd[s]);
    Ci.forEach(function(i) {
      if (i.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ci.push(r);
  },
  pluginEvent: function(r, s, i) {
    var u = this;
    this.eventCanceled = !1, i.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    Ci.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](er({
        sortable: s
      }, i)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](er({
        sortable: s
      }, i)));
    });
  },
  initializePlugins: function(r, s, i, u) {
    Ci.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var y = new m(r, s, r.options);
        y.sortable = r, y.options = r.options, r[p] = y, Er(i, y.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var f = this.modifyOption(r, c, r.options[c]);
        typeof f < "u" && (r.options[c] = f);
      }
  },
  getEventProperties: function(r, s) {
    var i = {};
    return Ci.forEach(function(u) {
      typeof u.eventProperties == "function" && Er(i, u.eventProperties.call(s[u.pluginName], r));
    }), i;
  },
  modifyOption: function(r, s, i) {
    var u;
    return Ci.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], i));
    }), u;
  }
};
function C3(n) {
  var r = n.sortable, s = n.rootEl, i = n.name, u = n.targetEl, c = n.cloneEl, f = n.toEl, m = n.fromEl, p = n.oldIndex, y = n.newIndex, g = n.oldDraggableIndex, E = n.newDraggableIndex, v = n.originalEvent, S = n.putSortable, h = n.extraEventProperties;
  if (r = r || s && s[rn], !!r) {
    var C, A = r.options, O = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !Cr && !ao ? C = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(i, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = y, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = v, C.pullMode = S ? S.lastPutMode : void 0;
    var x = er(er({}, h), io.getEventProperties(i, r));
    for (var z in x)
      C[z] = x[z];
    s && s.dispatchEvent(C), A[O] && A[O].call(r, C);
  }
}
var k3 = ["evt"], tn = function(r, s) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = i.evt, c = g3(i, k3);
  io.pluginEvent.bind(Ae)(r, s, er({
    dragEl: fe,
    parentEl: pt,
    ghostEl: Oe,
    rootEl: it,
    nextEl: xa,
    lastDownEl: ol,
    cloneEl: lt,
    cloneHidden: Jr,
    dragStarted: Ys,
    putSortable: zt,
    activeSortable: Ae.active,
    originalEvent: u,
    oldIndex: Mi,
    oldDraggableIndex: Ws,
    newIndex: gn,
    newDraggableIndex: Kr,
    hideGhostForTarget: vy,
    unhideGhostForTarget: yy,
    cloneNowHidden: function() {
      Jr = !0;
    },
    cloneNowShown: function() {
      Jr = !1;
    },
    dispatchSortableEvent: function(m) {
      Yt({
        sortable: s,
        name: m,
        originalEvent: u
      });
    }
  }, c));
};
function Yt(n) {
  C3(er({
    putSortable: zt,
    cloneEl: lt,
    targetEl: fe,
    rootEl: it,
    oldIndex: Mi,
    oldDraggableIndex: Ws,
    newIndex: gn,
    newDraggableIndex: Kr
  }, n));
}
var fe, pt, Oe, it, xa, ol, lt, Jr, Mi, gn, Ws, Kr, Cu, zt, Oi = !1, vl = !1, yl = [], Aa, In, Wd, ef, wv, Ev, Ys, ki, eo, to = !1, ku = !1, ul, Ht, tf = [], Ef = !1, _l = [], Al = typeof document < "u", Au = Gf, Cv = ao || Cr ? "cssFloat" : "float", A3 = Al && !sy && !Gf && "draggable" in document.createElement("div"), py = (function() {
  if (Al) {
    if (Cr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), my = function(r, s) {
  var i = ke(r), u = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), c = Li(r, 0, s), f = Li(r, 1, s), m = c && ke(c), p = f && ke(f), y = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + wt(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + wt(f).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || y >= u && i[Cv] === "none" || f && i[Cv] === "none" && y + g > u) ? "vertical" : "horizontal";
}, T3 = function(r, s, i) {
  var u = i ? r.left : r.top, c = i ? r.right : r.bottom, f = i ? r.width : r.height, m = i ? s.left : s.top, p = i ? s.right : s.bottom, y = i ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + y / 2;
}, x3 = function(r, s) {
  var i;
  return yl.some(function(u) {
    var c = u[rn].options.emptyInsertThreshold;
    if (!(!c || Vf(u))) {
      var f = wt(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return i = u;
    }
  }), i;
}, gy = function(r) {
  function s(c, f) {
    return function(m, p, y, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (c == null && (f || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (f && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, p, y, g), f)(m, p, y, g);
      var v = (f ? m : p).options.group.name;
      return c === !0 || typeof c == "string" && c === v || c.join && c.indexOf(v) > -1;
    };
  }
  var i = {}, u = r.group;
  (!u || sl(u) != "object") && (u = {
    name: u
  }), i.name = u.name, i.checkPull = s(u.pull, !0), i.checkPut = s(u.put), i.revertClone = u.revertClone, r.group = i;
}, vy = function() {
  !py && Oe && ke(Oe, "display", "none");
}, yy = function() {
  !py && Oe && ke(Oe, "display", "");
};
Al && !sy && document.addEventListener("click", function(n) {
  if (vl)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), vl = !1, !1;
}, !0);
var Ta = function(r) {
  if (fe) {
    r = r.touches ? r.touches[0] : r;
    var s = x3(r.clientX, r.clientY);
    if (s) {
      var i = {};
      for (var u in r)
        r.hasOwnProperty(u) && (i[u] = r[u]);
      i.target = i.rootEl = s, i.preventDefault = void 0, i.stopPropagation = void 0, s[rn]._onDragOver(i);
    }
  }
}, N3 = function(r) {
  fe && fe.parentNode[rn]._isOutsideThisEl(r.target);
};
function Ae(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = Er({}, r), n[rn] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return my(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, m) {
      f.setData("Text", m.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Ks || Gf),
    emptyInsertThreshold: 5
  };
  io.initializePlugins(this, n, s);
  for (var i in s)
    !(i in r) && (r[i] = s[i]);
  gy(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : A3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(n, "pointerdown", this._onTapStart) : (He(n, "mousedown", this._onTapStart), He(n, "touchstart", this._onTapStart)), this.nativeDraggable && (He(n, "dragover", this), He(n, "dragenter", this)), yl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Er(this, S3());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (ki = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, fe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, i = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, y = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (P3(i), !fe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !y.isContentEditable && !(!this.nativeDraggable && Ks && p && p.tagName.toUpperCase() === "SELECT") && (p = Hn(p, u.draggable, i, !1), !(p && p.animated) && ol !== p)) {
        if (Mi = Mn(p), Ws = Mn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Yt({
              sortable: s,
              rootEl: y,
              name: "filter",
              targetEl: p,
              toEl: i,
              fromEl: i
            }), tn("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = Hn(y, E.trim(), i, !1), E)
            return Yt({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: i,
              toEl: i
            }), tn("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          c && r.preventDefault();
          return;
        }
        u.handle && !Hn(y, u.handle, i, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, i) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (i && !fe && i.parentNode === c) {
      var y = wt(i);
      if (it = c, fe = i, pt = fe.parentNode, xa = fe.nextSibling, ol = i, Cu = f.group, Ae.dragged = fe, Aa = {
        target: fe,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, wv = Aa.clientX - y.left, Ev = Aa.clientY - y.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, fe.style["will-change"] = "all", p = function() {
        if (tn("delayEnded", u, {
          evt: r
        }), Ae.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !yv && u.nativeDraggable && (fe.draggable = !0), u._triggerDragStart(r, s), Yt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), mn(fe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        ly(fe, g.trim(), nf);
      }), He(m, "dragover", Ta), He(m, "mousemove", Ta), He(m, "touchmove", Ta), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), yv && this.nativeDraggable && (this.options.touchStartThreshold = 4, fe.draggable = !0), tn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(ao || Cr))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (He(m, "pointerup", u._disableDelayedDrag), He(m, "pointercancel", u._disableDelayedDrag)) : (He(m, "mouseup", u._disableDelayedDrag), He(m, "touchend", u._disableDelayedDrag), He(m, "touchcancel", u._disableDelayedDrag)), He(m, "mousemove", u._delayedDragTouchMoveHandler), He(m, "touchmove", u._delayedDragTouchMoveHandler), f.supportPointer && He(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    fe && nf(fe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(fe, "dragend", this), He(it, "dragstart", this._onDragStart));
    try {
      document.selection ? ll(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (Oi = !1, it && fe) {
      tn("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", N3);
      var i = this.options;
      !r && mn(fe, i.dragClass, !1), mn(fe, i.ghostClass, !0), Ae.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, vy();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== s); )
        s = r;
      if (fe.parentNode[rn]._isOutsideThisEl(r), s)
        do {
          if (s[rn]) {
            var i = void 0;
            if (i = s[rn]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: s
            }), i && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = uy(s));
      yy();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var s = this.options, i = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Oe && Di(Oe, !0), m = Oe && f && f.a, p = Oe && f && f.d, y = Au && Ht && Sv(Ht), g = (c.clientX - Aa.clientX + u.x) / (m || 1) + (y ? y[0] - tf[0] : 0) / (m || 1), E = (c.clientY - Aa.clientY + u.y) / (p || 1) + (y ? y[1] - tf[1] : 0) / (p || 1);
      if (!Ae.active && !Oi) {
        if (i && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < i)
          return;
        this._onDragStart(r, !0);
      }
      if (Oe) {
        f ? (f.e += g - (Wd || 0), f.f += E - (ef || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var v = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        ke(Oe, "webkitTransform", v), ke(Oe, "mozTransform", v), ke(Oe, "msTransform", v), ke(Oe, "transform", v), Wd = g, ef = E, In = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Oe) {
      var r = this.options.fallbackOnBody ? document.body : it, s = wt(fe, !0, Au, !0, r), i = this.options;
      if (Au) {
        for (Ht = r; ke(Ht, "position") === "static" && ke(Ht, "transform") === "none" && Ht !== document; )
          Ht = Ht.parentNode;
        Ht !== document.body && Ht !== document.documentElement ? (Ht === document && (Ht = Jn()), s.top += Ht.scrollTop, s.left += Ht.scrollLeft) : Ht = Jn(), tf = Sv(Ht);
      }
      Oe = fe.cloneNode(!0), mn(Oe, i.ghostClass, !1), mn(Oe, i.fallbackClass, !0), mn(Oe, i.dragClass, !0), ke(Oe, "transition", ""), ke(Oe, "transform", ""), ke(Oe, "box-sizing", "border-box"), ke(Oe, "margin", 0), ke(Oe, "top", s.top), ke(Oe, "left", s.left), ke(Oe, "width", s.width), ke(Oe, "height", s.height), ke(Oe, "opacity", "0.8"), ke(Oe, "position", Au ? "absolute" : "fixed"), ke(Oe, "zIndex", "100000"), ke(Oe, "pointerEvents", "none"), Ae.ghost = Oe, r.appendChild(Oe), ke(Oe, "transform-origin", wv / parseInt(Oe.style.width) * 100 + "% " + Ev / parseInt(Oe.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var i = this, u = r.dataTransfer, c = i.options;
    if (tn("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    tn("setupClone", this), Ae.eventCanceled || (lt = fy(fe), lt.removeAttribute("id"), lt.draggable = !1, lt.style["will-change"] = "", this._hideClone(), mn(lt, this.options.chosenClass, !1), Ae.clone = lt), i.cloneId = ll(function() {
      tn("clone", i), !Ae.eventCanceled && (i.options.removeCloneOnHide || it.insertBefore(lt, fe), i._hideClone(), Yt({
        sortable: i,
        name: "clone"
      }));
    }), !s && mn(fe, c.dragClass, !0), s ? (vl = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (Ue(document, "mouseup", i._onDrop), Ue(document, "touchend", i._onDrop), Ue(document, "touchcancel", i._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(i, u, fe)), He(document, "drop", i), ke(fe, "transform", "translateZ(0)")), Oi = !0, i._dragStartId = ll(i._dragStarted.bind(i, s, r)), He(document, "selectstart", i), Ys = !0, window.getSelection().removeAllRanges(), Ks && ke(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, i = r.target, u, c, f, m = this.options, p = m.group, y = Ae.active, g = Cu === p, E = m.sort, v = zt || y, S, h = this, C = !1;
    if (Ef) return;
    function A(K, ae) {
      tn(K, h, er({
        evt: r,
        isOwner: g,
        axis: S ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: c,
        canSort: E,
        fromSortable: v,
        target: i,
        completed: x,
        onMove: function($, le) {
          return Tu(it, s, fe, u, $, wt($), r, le);
        },
        changed: z
      }, ae));
    }
    function O() {
      A("dragOverAnimationCapture"), h.captureAnimationState(), h !== v && v.captureAnimationState();
    }
    function x(K) {
      return A("dragOverCompleted", {
        insertion: K
      }), K && (g ? y._hideClone() : y._showClone(h), h !== v && (mn(fe, zt ? zt.options.ghostClass : y.options.ghostClass, !1), mn(fe, m.ghostClass, !0)), zt !== h && h !== Ae.active ? zt = h : h === Ae.active && zt && (zt = null), v === h && (h._ignoreWhileAnimating = i), h.animateAll(function() {
        A("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (i === fe && !fe.animated || i === s && !i.animated) && (ki = null), !m.dragoverBubble && !r.rootEl && i !== document && (fe.parentNode[rn]._isOutsideThisEl(r.target), !K && Ta(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function z() {
      gn = Mn(fe), Kr = Mn(fe, m.draggable), Yt({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: gn,
        newDraggableIndex: Kr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), i = Hn(i, m.draggable, s, !0), A("dragOver"), Ae.eventCanceled) return C;
    if (fe.contains(r.target) || i.animated && i.animatingX && i.animatingY || h._ignoreWhileAnimating === i)
      return x(!1);
    if (vl = !1, y && !m.disabled && (g ? E || (f = pt !== it) : zt === this || (this.lastPutMode = Cu.checkPull(this, y, fe, r)) && p.checkPut(this, y, fe, r))) {
      if (S = this._getDirection(r, i) === "vertical", u = wt(fe), A("dragOverValid"), Ae.eventCanceled) return C;
      if (f)
        return pt = it, O(), this._hideClone(), A("revert"), Ae.eventCanceled || (xa ? it.insertBefore(fe, xa) : it.appendChild(fe)), x(!0);
      var l = Vf(s, m.draggable);
      if (!l || j3(r, S, this) && !l.animated) {
        if (l === fe)
          return x(!1);
        if (l && s === r.target && (i = l), i && (c = wt(i)), Tu(it, s, fe, u, i, c, r, !!i) !== !1)
          return O(), l && l.nextSibling ? s.insertBefore(fe, l.nextSibling) : s.appendChild(fe), pt = s, z(), x(!0);
      } else if (l && R3(r, S, this)) {
        var _ = Li(s, 0, m, !0);
        if (_ === fe)
          return x(!1);
        if (i = _, c = wt(i), Tu(it, s, fe, u, i, c, r, !1) !== !1)
          return O(), s.insertBefore(fe, _), pt = s, z(), x(!0);
      } else if (i.parentNode === s) {
        c = wt(i);
        var w = 0, k, R = fe.parentNode !== s, L = !T3(fe.animated && fe.toRect || u, i.animated && i.toRect || c, S), j = S ? "top" : "left", P = bv(i, "top", "top") || bv(fe, "top", "top"), Z = P ? P.scrollTop : void 0;
        ki !== i && (k = c[j], to = !1, ku = !L && m.invertSwap || R), w = D3(r, i, c, S, L ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, ku, ki === i);
        var F;
        if (w !== 0) {
          var Y = Mn(fe);
          do
            Y -= w, F = pt.children[Y];
          while (F && (ke(F, "display") === "none" || F === Oe));
        }
        if (w === 0 || F === i)
          return x(!1);
        ki = i, eo = w;
        var W = i.nextElementSibling, M = !1;
        M = w === 1;
        var B = Tu(it, s, fe, u, i, c, r, M);
        if (B !== !1)
          return (B === 1 || B === -1) && (M = B === 1), Ef = !0, setTimeout(M3, 30), O(), M && !W ? s.appendChild(fe) : i.parentNode.insertBefore(fe, M ? W : i), P && dy(P, 0, Z - P.scrollTop), pt = fe.parentNode, k !== void 0 && !ku && (ul = Math.abs(k - wt(i)[j])), z(), x(!0);
      }
      if (s.contains(fe))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", Ta), Ue(document, "mousemove", Ta), Ue(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._onDrop), Ue(r, "touchend", this._onDrop), Ue(r, "pointerup", this._onDrop), Ue(r, "pointercancel", this._onDrop), Ue(r, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, i = this.options;
    if (gn = Mn(fe), Kr = Mn(fe, i.draggable), tn("drop", this, {
      evt: r
    }), pt = fe && fe.parentNode, gn = Mn(fe), Kr = Mn(fe, i.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    Oi = !1, ku = !1, to = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Cf(this.cloneId), Cf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ks && ke(document.body, "user-select", ""), ke(fe, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !i.dropBubble && r.stopPropagation()), Oe && Oe.parentNode && Oe.parentNode.removeChild(Oe), (it === pt || zt && zt.lastPutMode !== "clone") && lt && lt.parentNode && lt.parentNode.removeChild(lt), fe && (this.nativeDraggable && Ue(fe, "dragend", this), nf(fe), fe.style["will-change"] = "", Ys && !Oi && mn(fe, zt ? zt.options.ghostClass : this.options.ghostClass, !1), mn(fe, this.options.chosenClass, !1), Yt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), it !== pt ? (gn >= 0 && (Yt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: it,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Yt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: it,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), zt && zt.save()) : gn !== Mi && gn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Ae.active && ((gn == null || gn === -1) && (gn = Mi, Kr = Ws), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    tn("nulling", this), it = fe = pt = Oe = xa = lt = ol = Jr = Aa = In = Ys = gn = Kr = Mi = Ws = ki = eo = zt = Cu = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, _l.forEach(function(r) {
      r.checked = !0;
    }), _l.length = Wd = ef = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        fe && (this._onDragOver(r), O3(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], s, i = this.el.children, u = 0, c = i.length, f = this.options; u < c; u++)
      s = i[u], Hn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || L3(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var i = {}, u = this.el;
    this.toArray().forEach(function(c, f) {
      var m = u.children[f];
      Hn(m, this.options.draggable, u, !1) && (i[c] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(c) {
      i[c] && (u.removeChild(i[c]), u.appendChild(i[c]));
    }), s && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, s) {
    return Hn(r, s || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, s) {
    var i = this.options;
    if (s === void 0)
      return i[r];
    var u = io.modifyOption(this, r, s);
    typeof u < "u" ? i[r] = u : i[r] = s, r === "group" && gy(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    tn("destroy", this);
    var r = this.el;
    r[rn] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), yl.splice(yl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Jr) {
      if (tn("hideClone", this), Ae.eventCanceled) return;
      ke(lt, "display", "none"), this.options.removeCloneOnHide && lt.parentNode && lt.parentNode.removeChild(lt), Jr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Jr) {
      if (tn("showClone", this), Ae.eventCanceled) return;
      fe.parentNode == it && !this.options.group.revertClone ? it.insertBefore(lt, fe) : xa ? it.insertBefore(lt, xa) : it.appendChild(lt), this.options.group.revertClone && this.animate(fe, lt), ke(lt, "display", ""), Jr = !1;
    }
  }
};
function O3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function Tu(n, r, s, i, u, c, f, m) {
  var p, y = n[rn], g = y.options.onMove, E;
  return window.CustomEvent && !Cr && !ao ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = s, p.draggedRect = i, p.related = u || r, p.relatedRect = c || wt(r), p.willInsertAfter = m, p.originalEvent = f, n.dispatchEvent(p), g && (E = g.call(y, p, f)), E;
}
function nf(n) {
  n.draggable = !1;
}
function M3() {
  Ef = !1;
}
function R3(n, r, s) {
  var i = wt(Li(s.el, 0, s.options, !0)), u = hy(s.el, s.options, Oe), c = 10;
  return r ? n.clientX < u.left - c || n.clientY < i.top && n.clientX < i.right : n.clientY < u.top - c || n.clientY < i.bottom && n.clientX < i.left;
}
function j3(n, r, s) {
  var i = wt(Vf(s.el, s.options.draggable)), u = hy(s.el, s.options, Oe), c = 10;
  return r ? n.clientX > u.right + c || n.clientY > i.bottom && n.clientX > i.left : n.clientY > u.bottom + c || n.clientX > i.right && n.clientY > i.top;
}
function D3(n, r, s, i, u, c, f, m) {
  var p = i ? n.clientY : n.clientX, y = i ? s.height : s.width, g = i ? s.top : s.left, E = i ? s.bottom : s.right, v = !1;
  if (!f) {
    if (m && ul < y * u) {
      if (!to && (eo === 1 ? p > g + y * c / 2 : p < E - y * c / 2) && (to = !0), to)
        v = !0;
      else if (eo === 1 ? p < g + ul : p > E - ul)
        return -eo;
    } else if (p > g + y * (1 - u) / 2 && p < E - y * (1 - u) / 2)
      return z3(r);
  }
  return v = v || f, v && (p < g + y * c / 2 || p > E - y * c / 2) ? p > g + y / 2 ? 1 : -1 : 0;
}
function z3(n) {
  return Mn(fe) < Mn(n) ? 1 : -1;
}
function L3(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, i = 0; s--; )
    i += r.charCodeAt(s);
  return i.toString(36);
}
function P3(n) {
  _l.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var i = r[s];
    i.checked && _l.push(i);
  }
}
function ll(n) {
  return setTimeout(n, 0);
}
function Cf(n) {
  return clearTimeout(n);
}
Al && He(document, "touchmove", function(n) {
  (Ae.active || Oi) && n.cancelable && n.preventDefault();
});
Ae.utils = {
  on: He,
  off: Ue,
  css: ke,
  find: ly,
  is: function(r, s) {
    return !!Hn(r, s, r, !1);
  },
  extend: _3,
  throttle: cy,
  closest: Hn,
  toggleClass: mn,
  clone: fy,
  index: Mn,
  nextTick: ll,
  cancelNextTick: Cf,
  detectDirection: my,
  getChild: Li,
  expando: rn
};
Ae.get = function(n) {
  return n[rn];
};
Ae.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (Ae.utils = er(er({}, Ae.utils), i.utils)), io.mount(i);
  });
};
Ae.create = function(n, r) {
  return new Ae(n, r);
};
Ae.version = v3;
var St = [], $s, kf, Af = !1, rf, af, bl, Xs;
function I3() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return n.prototype = {
    dragStarted: function(s) {
      var i = s.originalEvent;
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var i = s.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), kv(), cl(), b3();
    },
    nulling: function() {
      bl = kf = $s = Af = Xs = rf = af = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, i) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (bl = s, i || this.options.forceAutoScrollFallback || ao || Cr || Ks) {
        sf(s, this.options, m, i);
        var p = Wr(m, !0);
        Af && (!Xs || c !== rf || f !== af) && (Xs && kv(), Xs = setInterval(function() {
          var y = Wr(document.elementFromPoint(c, f), !0);
          y !== p && (p = y, cl()), sf(s, u.options, y, i);
        }, 10), rf = c, af = f);
      } else {
        if (!this.options.bubbleScroll || Wr(m, !0) === Jn()) {
          cl();
          return;
        }
        sf(s, this.options, Wr(m, !1), !1);
      }
    }
  }, Er(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function cl() {
  St.forEach(function(n) {
    clearInterval(n.pid);
  }), St = [];
}
function kv() {
  clearInterval(Xs);
}
var sf = cy(function(n, r, s, i) {
  if (r.scroll) {
    var u = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = Jn(), y = !1, g;
    kf !== s && (kf = s, cl(), $s = r.scroll, g = r.scrollFn, $s === !0 && ($s = Wr(s, !0)));
    var E = 0, v = $s;
    do {
      var S = v, h = wt(S), C = h.top, A = h.bottom, O = h.left, x = h.right, z = h.width, l = h.height, _ = void 0, w = void 0, k = S.scrollWidth, R = S.scrollHeight, L = ke(S), j = S.scrollLeft, P = S.scrollTop;
      S === p ? (_ = z < k && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), w = l < R && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (_ = z < k && (L.overflowX === "auto" || L.overflowX === "scroll"), w = l < R && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var Z = _ && (Math.abs(x - u) <= f && j + z < k) - (Math.abs(O - u) <= f && !!j), F = w && (Math.abs(A - c) <= f && P + l < R) - (Math.abs(C - c) <= f && !!P);
      if (!St[E])
        for (var Y = 0; Y <= E; Y++)
          St[Y] || (St[Y] = {});
      (St[E].vx != Z || St[E].vy != F || St[E].el !== S) && (St[E].el = S, St[E].vx = Z, St[E].vy = F, clearInterval(St[E].pid), (Z != 0 || F != 0) && (y = !0, St[E].pid = setInterval((function() {
        i && this.layer === 0 && Ae.active._onTouchMove(bl);
        var W = St[this.layer].vy ? St[this.layer].vy * m : 0, M = St[this.layer].vx ? St[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Ae.dragged.parentNode[rn], M, W, n, bl, St[this.layer].el) !== "continue" || dy(St[this.layer].el, M, W);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && v !== p && (v = Wr(v, !1)));
    Af = y;
  }
}, 30), _y = function(r) {
  var s = r.originalEvent, i = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var y = i || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), y && !y.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: i
    }));
  }
};
function Yf() {
}
Yf.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var u = Li(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: _y
};
Er(Yf, {
  pluginName: "revertOnSpill"
});
function $f() {
}
$f.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable, u = i || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: _y
};
Er($f, {
  pluginName: "removeOnSpill"
});
Ae.mount(new I3());
Ae.mount($f, Yf);
async function dl(n, r, s) {
  var i, u, c;
  function f(g) {
    return n.includes("all") || n.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const y = j1;
  if (f("global") && y != null && y.length)
    for (const g of y) {
      const E = await B3(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((v) => {
        p[g].push(v);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[D1];
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((v) => {
        p[g].push(v);
      });
    }
  }
  if (f("character") && s) {
    const g = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const v = (u = (i = g?.data) == null ? void 0 : i.extensions) == null ? void 0 : u.world;
    v && E.add(v);
    const S = ay(s), h = (c = z1.charLore) == null ? void 0 : c.find((C) => C.name === S);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const A = await m.loadWorldInfo(C);
      !A || p[C] || (p[C] = [], Object.values(A.entries).forEach((O) => {
        p[C].push(O);
      }));
    }
  }
  if (f("persona")) {
    const g = m.powerUserSettings.persona_description_lorebook;
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((v) => {
        p[g].push(v);
      });
    }
  }
  return p;
}
async function B3(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const U3 = `=== SILLYTAVERN===

**SillyTavern** is a popular open-source front-end interface designed for interacting with AI language models. It's primarily used for role-playing, creative writing, and conversational experiences, offering a user-friendly platform to customize interactions with AI. Here's an overview:

### Key Features:
1. **AI Backend Compatibility**: Works with APIs like OpenAI (GPT), KoboldAI, Claude, or local models (via services like Text-generation-webui or Ollama).
2. **Customization**:
   - Create and import character cards (with personas, scenarios, and dialogue examples).
   - Adjust model parameters (temperature, repetition penalties) for tailored responses.
3. **Plugins & Extensions**: Adds features like text-to-speech, image generation, emotion recognition, and world-building tools.
4. **Privacy**: Self-hosted locally, giving users control over data (unlike cloud-based services).

### Use Cases:
- Role-playing with AI characters.
- Collaborative storytelling or creative writing.
- Experimental AI interactions (users often share character templates and scripts in communities).

### Requirements:
- Technical setup involves installing Node.js, cloning the GitHub repo, and configuring API connections.
- Requires access to an AI model backend (e.g., OpenAI API key or a locally hosted model).

### Community & Ethics:
- Active communities on platforms like GitHub and Reddit share guides, characters, and plugins.
- Encourages responsible use, as the tool can generate unrestricted content depending on the AI backend.

SillyTavern is not an AI itself but a flexible interface to enhance interactions with LLMs.

=== WORLDINFO (LOREBOOKS) ===

**World Info** (often called **Lorebooks**) is a feature used in AI-driven storytelling and role-playing platforms (like SillyTavern, NovelAI, KoboldAI, or Text-generation-webui) to help AI models maintain consistency in fictional worlds. It acts as a dynamic knowledge base that the AI references during interactions to avoid contradictions and keep track of key details.

---

### **What is World Info/Lorebooks?**
- **A structured database**: Stores details about characters, locations, rules, events, or concepts in your fictional world.
- **Contextual triggers**: Entries activate automatically when specific keywords or phrases appear in the conversation/story.
- **Prevents "amnesia"**: Ensures the AI remembers critical lore without relying solely on its limited context window.

---

### **How It Works**
1. **Create Entries**: Define elements (e.g., a character’s backstory, a magic system’s rules).
2. **Set Triggers**: Link entries to keywords (e.g., mention "Dragonstone" → inject lore about that location).
3. **Dynamic Injection**: When a trigger word appears in the chat/story, the relevant entry is temporarily added to the AI’s context.

---

### **Key Features**
- **Hierarchy**: Organize entries into categories (e.g., factions, items, timelines).
- **Priority**: Set which entries take precedence if multiple triggers occur.
- **Cross-references**: Link entries to each other (e.g., a character entry references their home city).
- **Formatting**: Use markdown, JSON, or plain text depending on the platform.

---

### **Example Lorebook Entry**
\`\`\`plaintext
Name: Dragonstone Citadel
Triggers: Dragonstone, Citadel, Obsidian Fortress
Content:
  A volcanic fortress built from black obsidian. Home to the ancient Order of Flames,
  who guard the Eternal Fire—a magical flame that grants visions of the future.
  The citadel is rumored to be cursed, as its rulers never live past 40 years.
\`\`\`

---

### **Use Cases**
1. **Complex Worldbuilding**: Track political factions, religions, or history.
2. **Character Consistency**: Ensure the AI remembers a character’s motives, secrets, or relationships.
3. **Magic/Science Systems**: Define rules (e.g., "Magic drains lifeforce" or "Robots cannot harm humans").
4. **Plot Hooks**: Store hidden clues or foreshadowing for the AI to weave into the narrative.

---

### **Tools Supporting Lorebooks**
- **SillyTavern**: Integrates with lorebooks via extensions or prompts.
- **NovelAI**: Has a built-in "Lorebook" feature with advanced triggers.
- **KoboldAI/Text-generation-webui**: Use "world info" files or scripts.
- **AIDungeon** (historically): Early adopter of world info, though less popular now.

---

### **Best Practices**
- **Keep entries concise**: AI models process information best in short, clear snippets.
- **Balance detail**: Too many entries can overwhelm the context window.
- **Test triggers**: Ensure keywords are unique enough to avoid false activations.
- **Update dynamically**: Add/remove entries as the story evolves.

Lorebooks are essential for long-term storytelling with AI.`, H3 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, q3 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, Z3 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, G3 = `If you are creating a new entry you should write it like this:
\`\`\`xml
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>
\`\`\`

If you are updating an existing entry you should specify the id of the entry. Like this:
\`\`\`xml
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <id>15</id> // Id should be the id of the entry
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>
\`\`\``, V3 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, Y3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", $3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", X3 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, F3 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, Q3 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, K3 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, by = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J3 = by + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", W3 = "[" + by + "][" + J3 + "]*", e8 = new RegExp("^" + W3 + "$");
function Sy(n, r) {
  const s = [];
  let i = r.exec(n);
  for (; i; ) {
    const u = [];
    u.startIndex = r.lastIndex - i[0].length;
    const c = i.length;
    for (let f = 0; f < c; f++)
      u.push(i[f]);
    s.push(u), i = r.exec(n);
  }
  return s;
}
const Xf = function(n) {
  const r = e8.exec(n);
  return !(r === null || typeof r > "u");
};
function t8(n) {
  return typeof n < "u";
}
const n8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function wy(n, r) {
  r = Object.assign({}, n8, r);
  const s = [];
  let i = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = Tv(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let f = c;
      if (c++, n[c] === "!") {
        c = xv(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !c8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, $t(n, c));
        }
        const y = i8(n, c);
        if (y === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", $t(n, c));
        let g = y.value;
        if (c = y.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const v = Nv(g, r);
          if (v === !0)
            i = !0;
          else
            return yt(v.err.code, v.err.msg, $t(n, E + v.err.line));
        } else if (m)
          if (y.tagClosed) {
            if (g.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", $t(n, f));
            if (s.length === 0)
              return yt("InvalidTag", "Closing tag '" + p + "' has not been opened.", $t(n, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let v = $t(n, E.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + p + "'.",
                  $t(n, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", $t(n, c));
        else {
          const E = Nv(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, $t(n, c - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", $t(n, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), i = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = xv(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = Tv(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = u8(n, c);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", $t(n, c));
            c = E;
          } else if (u === !0 && !Av(n[c]))
            return yt("InvalidXml", "Extra text at the end", $t(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (Av(n[c]))
        continue;
      return yt("InvalidChar", "char '" + n[c] + "' is not expected.", $t(n, c));
    }
  if (i) {
    if (s.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", $t(n, s[0].tagStartPos));
    if (s.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Av(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Tv(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const i = n.substr(s, r - s);
      if (r > 5 && i === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", $t(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function xv(n, r) {
  if (n.length > r + 5 && n[r + 1] === "-" && n[r + 2] === "-") {
    for (r += 3; r < n.length; r++)
      if (n[r] === "-" && n[r + 1] === "-" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (n.length > r + 8 && n[r + 1] === "D" && n[r + 2] === "O" && n[r + 3] === "C" && n[r + 4] === "T" && n[r + 5] === "Y" && n[r + 6] === "P" && n[r + 7] === "E") {
    let s = 1;
    for (r += 8; r < n.length; r++)
      if (n[r] === "<")
        s++;
      else if (n[r] === ">" && (s--, s === 0))
        break;
  } else if (n.length > r + 9 && n[r + 1] === "[" && n[r + 2] === "C" && n[r + 3] === "D" && n[r + 4] === "A" && n[r + 5] === "T" && n[r + 6] === "A" && n[r + 7] === "[") {
    for (r += 8; r < n.length; r++)
      if (n[r] === "]" && n[r + 1] === "]" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const r8 = '"', a8 = "'";
function i8(n, r) {
  let s = "", i = "", u = !1;
  for (; r < n.length; r++) {
    if (n[r] === r8 || n[r] === a8)
      i === "" ? i = n[r] : i !== n[r] || (i = "");
    else if (n[r] === ">" && i === "") {
      u = !0;
      break;
    }
    s += n[r];
  }
  return i !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const s8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Nv(n, r) {
  const s = Sy(n, s8), i = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Is(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Is(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Is(s[u]));
    const c = s[u][2];
    if (!l8(c))
      return yt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Is(s[u]));
    if (!i.hasOwnProperty(c))
      i[c] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + c + "' is repeated.", Is(s[u]));
  }
  return !0;
}
function o8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function u8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, o8(n, r);
  let s = 0;
  for (; r < n.length; r++, s++)
    if (!(n[r].match(/\w/) && s < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(n, r, s) {
  return {
    err: {
      code: n,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function l8(n) {
  return Xf(n);
}
function c8(n) {
  return Xf(n);
}
function $t(n, r) {
  const s = n.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Is(n) {
  return n.startIndex + n[1].length;
}
const d8 = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(n, r) {
    return r;
  },
  attributeValueProcessor: function(n, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(n, r, s) {
    return n;
  }
  // skipEmptyListItem: false
}, f8 = function(n) {
  return Object.assign({}, d8, n);
};
class Bs {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, s) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: s });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function h8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let i = 1, u = !1, c = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (u && g8(n, r)) {
          r += 7;
          let m, p;
          [m, p, r] = p8(n, r + 1), p.indexOf("&") === -1 && (s[b8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && v8(n, r)) r += 8;
        else if (u && y8(n, r)) r += 8;
        else if (u && _8(n, r)) r += 9;
        else if (m8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        i++, f = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, i--) : i--, i === 0)
          break;
      } else n[r] === "[" ? u = !0 : f += n[r];
    if (i !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function p8(n, r) {
  let s = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    s += n[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const i = n[r++];
  let u = "";
  for (; r < n.length && n[r] !== i; r++)
    u += n[r];
  return [s, u, r];
}
function m8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function g8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function v8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function y8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function _8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function b8(n) {
  if (Xf(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const S8 = /^[-+]?0x[a-fA-F0-9]+$/, w8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, E8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function C8(n, r = {}) {
  if (r = Object.assign({}, E8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && S8.test(s))
    return A8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const i = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (i) {
      if (r.leadingZeros)
        s = (i[1] || "") + i[3];
      else if (!(i[2] === "0" && i[3][0] === ".")) return n;
      return r.eNotation ? Number(s) : n;
    } else
      return n;
  } else {
    const i = w8.exec(s);
    if (i) {
      const u = i[1], c = i[2];
      let f = k8(i[3]);
      if (!r.leadingZeros && c.length > 0 && u && s[2] !== ".") return n;
      if (!r.leadingZeros && c.length > 0 && !u && s[1] !== ".") return n;
      if (r.leadingZeros && c === n) return 0;
      {
        const m = Number(s), p = "" + m;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? m : n : s.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || u && p === "-" + f ? m : n : c ? f === p || u + f === p ? m : n : s === p || s === u + p ? m : n;
      }
    } else
      return n;
  }
}
function k8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function A8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function T8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class x8 {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (s, i) => String.fromCodePoint(Number.parseInt(i, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (s, i) => String.fromCodePoint(Number.parseInt(i, 16)) }
    }, this.addExternalEntities = N8, this.parseXml = D8, this.parseTextData = O8, this.resolveNameSpace = M8, this.buildAttributesMap = j8, this.isItStopNode = I8, this.replaceEntitiesValue = L8, this.readStopNodeData = U8, this.saveTextToParentTag = P8, this.addChild = z8, this.ignoreAttributesFn = T8(this.options.ignoreAttributes);
  }
}
function N8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    this.lastEntities[i] = {
      regex: new RegExp("&" + i + ";", "g"),
      val: n[i]
    };
  }
}
function O8(n, r, s, i, u, c, f) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? xf(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? xf(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function M8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const R8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function j8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const i = Sy(n, R8), u = i.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(i[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = i[f][4], y = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (y = this.options.transformAttributeName(y)), y === "__proto__" && (y = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[y] = p : typeof g != typeof p || g !== p ? c[y] = g : c[y] = xf(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[y] = !0);
    }
    if (!Object.keys(c).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = c, f;
    }
    return c;
  }
}
const D8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Bs("!xml");
  let s = r, i = "", u = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Ma(n, ">", c, "Closing Tag is not closed.");
        let p = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (i = this.saveTextToParentTag(i, s, u));
        const y = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        y && this.options.unpairedTags.indexOf(y) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), i = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = Tf(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (i = this.saveTextToParentTag(i, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Bs(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Ma(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(c + 4, m - 2);
          i = this.saveTextToParentTag(i, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = h8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Ma(n, "]]>", c, "CDATA is not closed.") - 2, p = n.substring(c + 9, m);
        i = this.saveTextToParentTag(i, s, u);
        let y = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        y == null && (y = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, y), c = m + 2;
      } else {
        let m = Tf(n, c, this.options.removeNSPrefix), p = m.tagName;
        const y = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, v = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && i && s.tagname !== "!xml" && (i = this.saveTextToParentTag(i, s, u, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            c = m.closeIndex;
          else {
            const A = this.readStopNodeData(n, y, v + 1);
            if (!A) throw new Error(`Unexpected end of ${y}`);
            c = A.i, h = A.tagContent;
          }
          const C = new Bs(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Bs(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new Bs(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), s = h;
          }
          i = "", c = v;
        }
      }
    else
      i += n[c];
  return r.child;
};
function z8(n, r, s) {
  const i = this.options.updateTag(r.tagname, s, r[":@"]);
  i === !1 || (typeof i == "string" && (r.tagname = i), n.addChild(r));
}
const L8 = function(n) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const s = this.docTypeEntities[r];
      n = n.replace(s.regx, s.val);
    }
    for (let r in this.lastEntities) {
      const s = this.lastEntities[r];
      n = n.replace(s.regex, s.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const s = this.htmlEntities[r];
        n = n.replace(s.regex, s.val);
      }
    n = n.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return n;
};
function P8(n, r, s, i) {
  return n && (i === void 0 && (i = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    i
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function I8(n, r, s) {
  const i = "*." + s;
  for (const u in n) {
    const c = n[u];
    if (i === c || r === c) return !0;
  }
  return !1;
}
function B8(n, r, s = ">") {
  let i, u = "";
  for (let c = r; c < n.length; c++) {
    let f = n[c];
    if (i)
      f === i && (i = "");
    else if (f === '"' || f === "'")
      i = f;
    else if (f === s[0])
      if (s[1]) {
        if (n[c + 1] === s[1])
          return {
            data: u,
            index: c
          };
      } else
        return {
          data: u,
          index: c
        };
    else f === "	" && (f = " ");
    u += f;
  }
}
function Ma(n, r, s, i) {
  const u = n.indexOf(r, s);
  if (u === -1)
    throw new Error(i);
  return u + r.length - 1;
}
function Tf(n, r, s, i = ">") {
  const u = B8(n, r + 1, i);
  if (!u) return;
  let c = u.data;
  const f = u.index, m = c.search(/\s/);
  let p = c, y = !0;
  m !== -1 && (p = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), y = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: f,
    attrExpPresent: y,
    rawTagName: g
  };
}
function U8(n, r, s) {
  const i = s;
  let u = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Ma(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: n.substring(i, s),
            i: c
          };
        s = c;
      } else if (n[s + 1] === "?")
        s = Ma(n, "?>", s + 1, "StopNode is not closed.");
      else if (n.substr(s + 1, 3) === "!--")
        s = Ma(n, "-->", s + 3, "StopNode is not closed.");
      else if (n.substr(s + 1, 2) === "![")
        s = Ma(n, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = Tf(n, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function xf(n, r, s) {
  if (r && typeof n == "string") {
    const i = n.trim();
    return i === "true" ? !0 : i === "false" ? !1 : C8(n, s);
  } else
    return t8(n) ? n : "";
}
function H8(n, r) {
  return Ey(n, r);
}
function Ey(n, r, s) {
  let i;
  const u = {};
  for (let c = 0; c < n.length; c++) {
    const f = n[c], m = q8(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      i === void 0 ? i = f[m] : i += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let y = Ey(f[m], r, p);
        const g = G8(y, r);
        f[":@"] ? Z8(y, f[":@"], p, r) : Object.keys(y).length === 1 && y[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? y = y[r.textNodeName] : Object.keys(y).length === 0 && (r.alwaysCreateTextNode ? y[r.textNodeName] = "" : y = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(y)) : r.isArray(m, p, g) ? u[m] = [y] : u[m] = y;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (u[r.textNodeName] = i) : i !== void 0 && (u[r.textNodeName] = i), u;
}
function q8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (i !== ":@") return i;
  }
}
function Z8(n, r, s, i) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      i.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function G8(n, r) {
  const { textNodeName: s } = r, i = Object.keys(n).length;
  return !!(i === 0 || i === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class Cy {
  constructor(r) {
    this.externalEntities = {}, this.options = f8(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, s) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (s) {
      s === !0 && (s = {});
      const c = wy(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const i = new x8(this.options);
    i.addExternalEntities(this.externalEntities);
    const u = i.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : H8(u, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, s) {
    if (s.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (s === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = s;
  }
}
const V8 = {
  validate: wy
};
function _n(n) {
  return Array.isArray(n?.key) ? n.key : [];
}
function ea(n) {
  return {
    ...n,
    key: _n(n),
    comment: n.comment ?? "",
    content: n.content ?? ""
  };
}
const Y8 = new Cy();
function $8(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function X8(n, r = {}) {
  let s = n;
  const { previousContent: i } = r;
  if (s = s.replace(/```xml/g, "").replace(/```/g, ""), i && (s = i + s.trimEnd()), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const u = {};
  try {
    const c = Y8.parse(s);
    if (!c.lorebooks)
      return u;
    const f = c.lorebooks.entry?.content ? [c.lorebooks.entry] : c.lorebooks.entry;
    for (const m of f) {
      const p = m.worldName;
      p && (u[p] || (u[p] = []), u[p].push({
        uid: m.id ?? $8(6),
        key: m.triggers?.split(",").map((y) => y.trim()) ?? [],
        content: m.content,
        comment: m.name,
        disable: !1,
        keysecondary: []
      }));
    }
    return u;
  } catch (c) {
    throw console.error(c), new Error("Model response is not valid XML");
  }
}
function F8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${_n(r).join(",")}</triggers>
    <content>${r.content}`;
}
function Q8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${_n(r).join(",")}</triggers>
    <content>${r.content}</content>
  </entry>
</lorebooks>`;
}
var xu = { exports: {} }, Nu = { exports: {} }, Bn = {}, nn = {}, Ov;
function sn() {
  if (Ov) return nn;
  Ov = 1, nn.__esModule = !0, nn.extend = u, nn.indexOf = p, nn.escapeExpression = y, nn.isEmpty = g, nn.createFrame = E, nn.blockParams = v, nn.appendContextPath = S;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function i(h) {
    return n[h];
  }
  function u(h) {
    for (var C = 1; C < arguments.length; C++)
      for (var A in arguments[C])
        Object.prototype.hasOwnProperty.call(arguments[C], A) && (h[A] = arguments[C][A]);
    return h;
  }
  var c = Object.prototype.toString;
  nn.toString = c;
  var f = function(C) {
    return typeof C == "function";
  };
  f(/x/) && (nn.isFunction = f = function(h) {
    return typeof h == "function" && c.call(h) === "[object Function]";
  }), nn.isFunction = f;
  var m = Array.isArray || function(h) {
    return h && typeof h == "object" ? c.call(h) === "[object Array]" : !1;
  };
  nn.isArray = m;
  function p(h, C) {
    for (var A = 0, O = h.length; A < O; A++)
      if (h[A] === C)
        return A;
    return -1;
  }
  function y(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return s.test(h) ? h.replace(r, i) : h;
  }
  function g(h) {
    return !h && h !== 0 ? !0 : !!(m(h) && h.length === 0);
  }
  function E(h) {
    var C = u({}, h);
    return C._parent = h, C;
  }
  function v(h, C) {
    return h.path = C, h;
  }
  function S(h, C) {
    return (h ? h + "." : "") + C;
  }
  return nn;
}
var Ou = { exports: {} }, Mv;
function qn() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function i(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, y = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, y = f.start.column, g = f.end.column, u += " - " + m + ":" + y);
      for (var E = Error.prototype.constructor.call(this, u), v = 0; v < s.length; v++)
        this[s[v]] = E[s[v]];
      Error.captureStackTrace && Error.captureStackTrace(this, i);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: y,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = y, this.endColumn = g));
      } catch {
      }
    }
    i.prototype = new Error(), r.default = i, n.exports = r.default;
  })(Ou, Ou.exports)), Ou.exports;
}
var Us = {}, Mu = { exports: {} }, Rv;
function K8() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = sn();
    r.default = function(i) {
      i.registerHelper("blockHelperMissing", function(u, c) {
        var f = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return f(this);
        if (s.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), i.helpers.each(u, c)) : f(this);
        if (c.data && c.ids) {
          var p = s.createFrame(c.data);
          p.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: p };
        }
        return m(u, c);
      });
    }, n.exports = r.default;
  })(Mu, Mu.exports)), Mu.exports;
}
var Ru = { exports: {} }, jv;
function J8() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = sn(), u = qn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var y = p.fn, g = p.inverse, E = 0, v = "", S = void 0, h = void 0;
        p.data && p.ids && (h = i.appendContextPath(p.data.contextPath, p.ids[0]) + "."), i.isFunction(m) && (m = m.call(this)), p.data && (S = i.createFrame(p.data));
        function C(l, _, w) {
          S && (S.key = l, S.index = _, S.first = _ === 0, S.last = !!w, h && (S.contextPath = h + l)), v = v + y(m[l], {
            data: S,
            blockParams: i.blockParams([m[l], l], [h + l, null])
          });
        }
        if (m && typeof m == "object")
          if (i.isArray(m))
            for (var A = m.length; E < A; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var O = [], x = m[Symbol.iterator](), z = x.next(); !z.done; z = x.next())
              O.push(z.value);
            m = O;
            for (var A = m.length; E < A; E++)
              C(E, E, E === m.length - 1);
          } else
            (function() {
              var l = void 0;
              Object.keys(m).forEach(function(_) {
                l !== void 0 && C(l, E - 1), l = _, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (v = g(this)), v;
      });
    }, n.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var ju = { exports: {} }, Dv;
function W8() {
  return Dv || (Dv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var i = qn(), u = s(i);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var Du = { exports: {} }, zv;
function eS() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = sn(), u = qn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("if", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return i.isFunction(m) && (m = m.call(this)), !p.hash.includeZero && !m || i.isEmpty(m) ? p.inverse(this) : p.fn(this);
      }), f.registerHelper("unless", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, m, {
          fn: p.inverse,
          inverse: p.fn,
          hash: p.hash
        });
      });
    }, n.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var zu = { exports: {} }, Lv;
function tS() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var i = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          i.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), i[0] = f, s.log.apply(s, i);
      });
    }, n.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Lu = { exports: {} }, Pv;
function nS() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(i, u, c) {
        return i && c.lookupProperty(i, u);
      });
    }, n.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var Pu = { exports: {} }, Iv;
function rS() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = sn(), u = qn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        i.isFunction(m) && (m = m.call(this));
        var y = p.fn;
        if (i.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = i.createFrame(p.data), g.contextPath = i.appendContextPath(p.data.contextPath, p.ids[0])), y(m, {
          data: g,
          blockParams: i.blockParams([m], [g && g.contextPath])
        });
      });
    }, n.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Bv;
function ky() {
  if (Bv) return Us;
  Bv = 1, Us.__esModule = !0, Us.registerDefaultHelpers = C, Us.moveHelperToHooks = A;
  function n(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = K8(), s = n(r), i = J8(), u = n(i), c = W8(), f = n(c), m = eS(), p = n(m), y = tS(), g = n(y), E = nS(), v = n(E), S = rS(), h = n(S);
  function C(O) {
    s.default(O), u.default(O), f.default(O), p.default(O), g.default(O), v.default(O), h.default(O);
  }
  function A(O, x, z) {
    O.helpers[x] && (O.hooks[x] = O.helpers[x], z || delete O.helpers[x]);
  }
  return Us;
}
var Iu = {}, Bu = { exports: {} }, Uv;
function aS() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = sn();
    r.default = function(i) {
      i.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(y, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var v = u(y, g);
          return f.partials = E, v;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, n.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Hv;
function iS() {
  if (Hv) return Iu;
  Hv = 1, Iu.__esModule = !0, Iu.registerDefaultDecorators = i;
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = aS(), s = n(r);
  function i(u) {
    s.default(u);
  }
  return Iu;
}
var Uu = { exports: {} }, qv;
function Ay() {
  return qv || (qv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = sn(), i = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var f = s.indexOf(i.methodMap, c.toLowerCase());
          f >= 0 ? c = f : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = i.lookupLevel(c), typeof console < "u" && i.lookupLevel(i.level) <= c) {
          var f = i.methodMap[c];
          console[f] || (f = "log");
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
            p[y - 1] = arguments[y];
          console[f].apply(console, p);
        }
      }
    };
    r.default = i, n.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Ai = {}, Hu = {}, Zv;
function sS() {
  if (Zv) return Hu;
  Zv = 1, Hu.__esModule = !0, Hu.createNewLookupObject = r;
  var n = sn();
  function r() {
    for (var s = arguments.length, i = Array(s), u = 0; u < s; u++)
      i[u] = arguments[u];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(i));
  }
  return Hu;
}
var Gv;
function Ty() {
  if (Gv) return Ai;
  Gv = 1, Ai.__esModule = !0, Ai.createProtoAccessControl = c, Ai.resultIsAllowed = f, Ai.resetLoggedProperties = y;
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = sS(), s = Ay(), i = n(s), u = /* @__PURE__ */ Object.create(null);
  function c(g) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var v = /* @__PURE__ */ Object.create(null);
    return v.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(v, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, E, v) {
    return m(typeof g == "function" ? E.methods : E.properties, v);
  }
  function m(g, E) {
    return g.whitelist[E] !== void 0 ? g.whitelist[E] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (p(E), !1);
  }
  function p(g) {
    u[g] !== !0 && (u[g] = !0, i.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function y() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Ai;
}
var Vv;
function Ff() {
  if (Vv) return Bn;
  Vv = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = h;
  function n(A) {
    return A && A.__esModule ? A : { default: A };
  }
  var r = sn(), s = qn(), i = n(s), u = ky(), c = iS(), f = Ay(), m = n(f), p = Ty(), y = "4.7.8";
  Bn.VERSION = y;
  var g = 8;
  Bn.COMPILER_REVISION = g;
  var E = 7;
  Bn.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var v = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  Bn.REVISION_CHANGES = v;
  var S = "[object Object]";
  function h(A, O, x) {
    this.helpers = A || {}, this.partials = O || {}, this.decorators = x || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(O, x) {
      if (r.toString.call(O) === S) {
        if (x)
          throw new i.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, O);
      } else
        this.helpers[O] = x;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, x) {
      if (r.toString.call(O) === S)
        r.extend(this.partials, O);
      else {
        if (typeof x > "u")
          throw new i.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = x;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, x) {
      if (r.toString.call(O) === S) {
        if (x)
          throw new i.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, O);
      } else
        this.decorators[O] = x;
    },
    unregisterDecorator: function(O) {
      delete this.decorators[O];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      p.resetLoggedProperties();
    }
  };
  var C = m.default.log;
  return Bn.log = C, Bn.createFrame = r.createFrame, Bn.logger = m.default, Bn;
}
var qu = { exports: {} }, Yv;
function oS() {
  return Yv || (Yv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(i) {
      this.string = i;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })(qu, qu.exports)), qu.exports;
}
var yr = {}, Zu = {}, $v;
function uS() {
  if ($v) return Zu;
  $v = 1, Zu.__esModule = !0, Zu.wrapHelper = n;
  function n(r, s) {
    if (typeof r != "function")
      return r;
    var i = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return i;
  }
  return Zu;
}
var Xv;
function lS() {
  if (Xv) return yr;
  Xv = 1, yr.__esModule = !0, yr.checkRevision = g, yr.template = E, yr.wrapProgram = v, yr.resolvePartial = S, yr.invokePartial = h, yr.noop = C;
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    if (l && l.__esModule)
      return l;
    var _ = {};
    if (l != null)
      for (var w in l)
        Object.prototype.hasOwnProperty.call(l, w) && (_[w] = l[w]);
    return _.default = l, _;
  }
  var s = sn(), i = r(s), u = qn(), c = n(u), f = Ff(), m = ky(), p = uS(), y = Ty();
  function g(l) {
    var _ = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(_ >= f.LAST_COMPATIBLE_COMPILER_REVISION && _ <= f.COMPILER_REVISION))
      if (_ < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], R = f.REVISION_CHANGES[_];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + R + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + l[1] + ").");
  }
  function E(l, _) {
    if (!_)
      throw new c.default("No environment passed to template");
    if (!l || !l.main)
      throw new c.default("Unknown template object: " + typeof l);
    l.main.decorator = l.main_d, _.VM.checkRevision(l.compiler);
    var w = l.compiler && l.compiler[0] === 7;
    function k(j, P, Z) {
      Z.hash && (P = i.extend({}, P, Z.hash), Z.ids && (Z.ids[0] = !0)), j = _.VM.resolvePartial.call(this, j, P, Z);
      var F = i.extend({}, Z, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), Y = _.VM.invokePartial.call(this, j, P, F);
      if (Y == null && _.compile && (Z.partials[Z.name] = _.compile(j, l.compilerOptions, _), Y = Z.partials[Z.name](P, F)), Y != null) {
        if (Z.indent) {
          for (var W = Y.split(`
`), M = 0, B = W.length; M < B && !(!W[M] && M + 1 === B); M++)
            W[M] = Z.indent + W[M];
          Y = W.join(`
`);
        }
        return Y;
      } else
        throw new c.default("The partial " + Z.name + " could not be compiled when running in runtime-only mode");
    }
    var R = {
      strict: function(P, Z, F) {
        if (!P || !(Z in P))
          throw new c.default('"' + Z + '" not defined in ' + P, {
            loc: F
          });
        return R.lookupProperty(P, Z);
      },
      lookupProperty: function(P, Z) {
        var F = P[Z];
        if (F == null || Object.prototype.hasOwnProperty.call(P, Z) || y.resultIsAllowed(F, R.protoAccessControl, Z))
          return F;
      },
      lookup: function(P, Z) {
        for (var F = P.length, Y = 0; Y < F; Y++) {
          var W = P[Y] && R.lookupProperty(P[Y], Z);
          if (W != null)
            return P[Y][Z];
        }
      },
      lambda: function(P, Z) {
        return typeof P == "function" ? P.call(Z) : P;
      },
      escapeExpression: i.escapeExpression,
      invokePartial: k,
      fn: function(P) {
        var Z = l[P];
        return Z.decorator = l[P + "_d"], Z;
      },
      programs: [],
      program: function(P, Z, F, Y, W) {
        var M = this.programs[P], B = this.fn(P);
        return Z || W || Y || F ? M = v(this, P, B, Z, F, Y, W) : M || (M = this.programs[P] = v(this, P, B)), M;
      },
      data: function(P, Z) {
        for (; P && Z--; )
          P = P._parent;
        return P;
      },
      mergeIfNeeded: function(P, Z) {
        var F = P || Z;
        return P && Z && P !== Z && (F = i.extend({}, Z, P)), F;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: _.VM.noop,
      compilerInfo: l.compiler
    };
    function L(j) {
      var P = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Z = P.data;
      L._setup(P), !P.partial && l.useData && (Z = A(j, Z));
      var F = void 0, Y = l.useBlockParams ? [] : void 0;
      l.useDepths && (P.depths ? F = j != P.depths[0] ? [j].concat(P.depths) : P.depths : F = [j]);
      function W(M) {
        return "" + l.main(R, M, R.helpers, R.partials, Z, Y, F);
      }
      return W = O(l.main, W, R, P.depths || [], Z, Y), W(j, P);
    }
    return L.isTop = !0, L._setup = function(j) {
      if (j.partial)
        R.protoAccessControl = j.protoAccessControl, R.helpers = j.helpers, R.partials = j.partials, R.decorators = j.decorators, R.hooks = j.hooks;
      else {
        var P = i.extend({}, _.helpers, j.helpers);
        x(P, R), R.helpers = P, l.usePartial && (R.partials = R.mergeIfNeeded(j.partials, _.partials)), (l.usePartial || l.useDecorators) && (R.decorators = i.extend({}, _.decorators, j.decorators)), R.hooks = {}, R.protoAccessControl = y.createProtoAccessControl(j);
        var Z = j.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(R, "helperMissing", Z), m.moveHelperToHooks(R, "blockHelperMissing", Z);
      }
    }, L._child = function(j, P, Z, F) {
      if (l.useBlockParams && !Z)
        throw new c.default("must pass block params");
      if (l.useDepths && !F)
        throw new c.default("must pass parent depths");
      return v(R, j, l[j], P, 0, Z, F);
    }, L;
  }
  function v(l, _, w, k, R, L, j) {
    function P(Z) {
      var F = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Y = j;
      return j && Z != j[0] && !(Z === l.nullContext && j[0] === null) && (Y = [Z].concat(j)), w(l, Z, l.helpers, l.partials, F.data || k, L && [F.blockParams].concat(L), Y);
    }
    return P = O(w, P, l, j, k, L), P.program = _, P.depth = j ? j.length : 0, P.blockParams = R || 0, P;
  }
  function S(l, _, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, _, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var R = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var L = w.fn;
      R = w.data["partial-block"] = function(P) {
        var Z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Z.data = f.createFrame(Z.data), Z.data["partial-block"] = k, L(P, Z);
      }, L.partials && (w.partials = i.extend({}, w.partials, L.partials));
    })(), l === void 0 && R && (l = R), l === void 0)
      throw new c.default("The partial " + w.name + " could not be found");
    if (l instanceof Function)
      return l(_, w);
  }
  function C() {
    return "";
  }
  function A(l, _) {
    return (!_ || !("root" in _)) && (_ = _ ? f.createFrame(_) : {}, _.root = l), _;
  }
  function O(l, _, w, k, R, L) {
    if (l.decorator) {
      var j = {};
      _ = l.decorator(_, j, w, k && k[0], R, L, k), i.extend(_, j);
    }
    return _;
  }
  function x(l, _) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = z(k, _);
    });
  }
  function z(l, _) {
    var w = _.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return i.extend({ lookupProperty: w }, k);
    });
  }
  return yr;
}
var Gu = { exports: {} }, Fv;
function xy() {
  return Fv || (Fv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var i = globalThis.Handlebars;
      s.noConflict = function() {
        return globalThis.Handlebars === s && (globalThis.Handlebars = i), s;
      };
    }, n.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var Qv;
function cS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    function i(x) {
      if (x && x.__esModule)
        return x;
      var z = {};
      if (x != null)
        for (var l in x)
          Object.prototype.hasOwnProperty.call(x, l) && (z[l] = x[l]);
      return z.default = x, z;
    }
    var u = Ff(), c = i(u), f = oS(), m = s(f), p = qn(), y = s(p), g = sn(), E = i(g), v = lS(), S = i(v), h = xy(), C = s(h);
    function A() {
      var x = new c.HandlebarsEnvironment();
      return E.extend(x, c), x.SafeString = m.default, x.Exception = y.default, x.Utils = E, x.escapeExpression = E.escapeExpression, x.VM = S, x.template = function(z) {
        return S.template(z, x);
      }, x;
    }
    var O = A();
    O.create = A, C.default(O), O.default = O, r.default = O, n.exports = r.default;
  })(Nu, Nu.exports)), Nu.exports;
}
var Vu = { exports: {} }, Kv;
function Ny() {
  return Kv || (Kv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(u) {
          return u.type === "SubExpression" || (u.type === "MustacheStatement" || u.type === "BlockStatement") && !!(u.params && u.params.length || u.hash);
        },
        scopedId: function(u) {
          return /^\.|this\b/.test(u.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(u) {
          return u.parts.length === 1 && !s.helpers.scopedId(u) && !u.depth;
        }
      }
    };
    r.default = s, n.exports = r.default;
  })(Vu, Vu.exports)), Vu.exports;
}
var Ti = {}, Yu = { exports: {} }, Jv;
function dS() {
  return Jv || (Jv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var i = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, y, g, E, v, S) {
          var h = v.length - 1;
          switch (E) {
            case 1:
              return v[h - 1];
            case 2:
              this.$ = g.prepareProgram(v[h]);
              break;
            case 3:
              this.$ = v[h];
              break;
            case 4:
              this.$ = v[h];
              break;
            case 5:
              this.$ = v[h];
              break;
            case 6:
              this.$ = v[h];
              break;
            case 7:
              this.$ = v[h];
              break;
            case 8:
              this.$ = v[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(v[h]),
                strip: g.stripFlags(v[h], v[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: v[h],
                value: v[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(v[h - 2], v[h - 1], v[h], this._$);
              break;
            case 12:
              this.$ = { path: v[h - 3], params: v[h - 2], hash: v[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(v[h - 3], v[h - 2], v[h - 1], v[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(v[h - 3], v[h - 2], v[h - 1], v[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: v[h - 5], path: v[h - 4], params: v[h - 3], hash: v[h - 2], blockParams: v[h - 1], strip: g.stripFlags(v[h - 5], v[h]) };
              break;
            case 16:
              this.$ = { path: v[h - 4], params: v[h - 3], hash: v[h - 2], blockParams: v[h - 1], strip: g.stripFlags(v[h - 5], v[h]) };
              break;
            case 17:
              this.$ = { path: v[h - 4], params: v[h - 3], hash: v[h - 2], blockParams: v[h - 1], strip: g.stripFlags(v[h - 5], v[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(v[h - 1], v[h - 1]), program: v[h] };
              break;
            case 19:
              var C = g.prepareBlock(v[h - 2], v[h - 1], v[h], v[h], !1, this._$), A = g.prepareProgram([C], v[h - 1].loc);
              A.chained = !0, this.$ = { strip: v[h - 2].strip, program: A, chain: !0 };
              break;
            case 20:
              this.$ = v[h];
              break;
            case 21:
              this.$ = { path: v[h - 1], strip: g.stripFlags(v[h - 2], v[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(v[h - 3], v[h - 2], v[h - 1], v[h - 4], g.stripFlags(v[h - 4], v[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(v[h - 3], v[h - 2], v[h - 1], v[h - 4], g.stripFlags(v[h - 4], v[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: v[h - 3],
                params: v[h - 2],
                hash: v[h - 1],
                indent: "",
                strip: g.stripFlags(v[h - 4], v[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(v[h - 2], v[h - 1], v[h], this._$);
              break;
            case 26:
              this.$ = { path: v[h - 3], params: v[h - 2], hash: v[h - 1], strip: g.stripFlags(v[h - 4], v[h]) };
              break;
            case 27:
              this.$ = v[h];
              break;
            case 28:
              this.$ = v[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: v[h - 3],
                params: v[h - 2],
                hash: v[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: v[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(v[h - 2]), value: v[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(v[h - 1]);
              break;
            case 33:
              this.$ = v[h];
              break;
            case 34:
              this.$ = v[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: v[h], original: v[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(v[h]), original: Number(v[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: v[h] === "true", original: v[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = v[h];
              break;
            case 41:
              this.$ = v[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, v[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, v[h], this._$);
              break;
            case 44:
              v[h - 2].push({ part: g.id(v[h]), original: v[h], separator: v[h - 1] }), this.$ = v[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(v[h]), original: v[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              v[h - 1].push(v[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              v[h - 1].push(v[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              v[h - 1].push(v[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              v[h - 1].push(v[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              v[h - 1].push(v[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              v[h - 1].push(v[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              v[h - 1].push(v[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              v[h - 1].push(v[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              v[h - 1].push(v[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              v[h - 1].push(v[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              v[h - 1].push(v[h]);
              break;
            case 98:
              this.$ = [v[h]];
              break;
            case 99:
              v[h - 1].push(v[h]);
              break;
            case 100:
              this.$ = [v[h]];
              break;
            case 101:
              v[h - 1].push(v[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, p) {
          throw new Error(m);
        },
        parse: function(m) {
          var p = this, y = [0], g = [null], E = [], v = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var A = this.lexer.yylloc;
          E.push(A);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function x() {
            var F;
            return F = p.lexer.lex() || 1, typeof F != "number" && (F = p.symbols_[F] || F), F;
          }
          for (var z, l, _, w, k = {}, R, L, j, P; ; ) {
            if (l = y[y.length - 1], this.defaultActions[l] ? _ = this.defaultActions[l] : ((z === null || typeof z > "u") && (z = x()), _ = v[l] && v[l][z]), typeof _ > "u" || !_.length || !_[0]) {
              var Z = "";
              {
                P = [];
                for (R in v[l]) this.terminals_[R] && R > 2 && P.push("'" + this.terminals_[R] + "'");
                this.lexer.showPosition ? Z = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + P.join(", ") + ", got '" + (this.terminals_[z] || z) + "'" : Z = "Parse error on line " + (h + 1) + ": Unexpected " + (z == 1 ? "end of input" : "'" + (this.terminals_[z] || z) + "'"), this.parseError(Z, { text: this.lexer.match, token: this.terminals_[z] || z, line: this.lexer.yylineno, loc: A, expected: P });
              }
            }
            if (_[0] instanceof Array && _.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + z);
            switch (_[0]) {
              case 1:
                y.push(z), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), y.push(_[1]), z = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, A = this.lexer.yylloc;
                break;
              case 2:
                if (L = this.productions_[_[1]][1], k.$ = g[g.length - L], k._$ = { first_line: E[E.length - (L || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (L || 1)].first_column, last_column: E[E.length - 1].last_column }, O && (k._$.range = [E[E.length - (L || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, _[1], g, E), typeof w < "u")
                  return w;
                L && (y = y.slice(0, -1 * L * 2), g = g.slice(0, -1 * L), E = E.slice(0, -1 * L)), y.push(this.productions_[_[1]][0]), g.push(k.$), E.push(k._$), j = v[y[y.length - 2]][y[y.length - 1]], y.push(j);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, u = (function() {
        var f = {
          EOF: 1,
          parseError: function(p, y) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, y);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var y = p.match(/(?:\r\n?|\n).*/g);
            return y ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var y = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - y - 1), this.offset -= y;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var v = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - y
            }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - y]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(p) {
            this.unput(this.match.slice(p));
          },
          pastInput: function() {
            var p = this.matched.substr(0, this.matched.length - this.match.length);
            return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var p = this.match;
            return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var p = this.pastInput(), y = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + y + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, y, g, E, v;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (g = this._input.match(this.rules[S[h]]), !(g && (!y || g[0].length > y[0].length) && (y = g, E = h, !this.options.flex))); h++)
              ;
            return y ? (v = y[0].match(/(?:\r\n?|\n).*/g), v && (this.yylineno += v.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: v ? v[v.length - 1].length - v[v.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + y[0].length
            }, this.yytext += y[0], this.match += y[0], this.matches = y, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(y[0].length), this.matched += y[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var p = this.next();
            return typeof p < "u" ? p : this.lex();
          },
          begin: function(p) {
            this.conditionStack.push(p);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(p) {
            this.begin(p);
          }
        };
        return f.options = {}, f.performAction = function(p, y, g, E) {
          function v(S, h) {
            return y.yytext = y.yytext.substring(S, y.yyleng - h + S);
          }
          switch (g) {
            case 0:
              if (y.yytext.slice(-2) === "\\\\" ? (v(0, 1), this.begin("mu")) : y.yytext.slice(-1) === "\\" ? (v(0, 1), this.begin("emu")) : this.begin("mu"), y.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (v(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(y.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return y.yytext = v(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return y.yytext = v(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return y.yytext = y.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      i.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = i, i.Parser = c, new c();
    })();
    r.default = s, n.exports = r.default;
  })(Yu, Yu.exports)), Yu.exports;
}
var $u = { exports: {} }, Xu = { exports: {} }, Wv;
function Oy() {
  return Wv || (Wv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var i = qn(), u = s(i);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(g, E) {
        var v = this.accept(g[E]);
        if (this.mutating) {
          if (v && !c.prototype[v.type])
            throw new u.default('Unexpected node type "' + v.type + '" found when accepting ' + E + " on " + g.type);
          g[E] = v;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(g, E) {
        if (this.acceptKey(g, E), !g[E])
          throw new u.default(g.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(g) {
        for (var E = 0, v = g.length; E < v; E++)
          this.acceptKey(g, E), g[E] || (g.splice(E, 1), E--, v--);
      },
      accept: function(g) {
        if (g) {
          if (!this[g.type])
            throw new u.default("Unknown type: " + g.type, g);
          this.current && this.parents.unshift(this.current), this.current = g;
          var E = this[g.type](g);
          if (this.current = this.parents.shift(), !this.mutating || E)
            return E;
          if (E !== !1)
            return g;
        }
      },
      Program: function(g) {
        this.acceptArray(g.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: p,
      PartialBlockStatement: function(g) {
        p.call(this, g), this.acceptKey(g, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(g) {
        this.acceptArray(g.pairs);
      },
      HashPair: function(g) {
        this.acceptRequired(g, "value");
      }
    };
    function f(y) {
      this.acceptRequired(y, "path"), this.acceptArray(y.params), this.acceptKey(y, "hash");
    }
    function m(y) {
      f.call(this, y), this.acceptKey(y, "program"), this.acceptKey(y, "inverse");
    }
    function p(y) {
      this.acceptRequired(y, "name"), this.acceptArray(y.params), this.acceptKey(y, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Xu, Xu.exports)), Xu.exports;
}
var e0;
function fS() {
  return e0 || (e0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var i = Oy(), u = s(i);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new u.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, v = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = g.body, h = 0, C = S.length; h < C; h++) {
        var A = S[h], O = this.accept(A);
        if (O) {
          var x = f(S, h, v), z = m(S, h, v), l = O.openStandalone && x, _ = O.closeStandalone && z, w = O.inlineStandalone && x && z;
          O.close && p(S, h, !0), O.open && y(S, h, !0), E && w && (p(S, h), y(S, h) && A.type === "PartialStatement" && (A.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && l && (p((A.program || A.inverse).body), y(S, h)), E && _ && (p(S, h), y((A.inverse || A.program).body));
        }
      }
      return g;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var E = g.program || g.inverse, v = g.program && g.inverse, S = v, h = v;
      if (v && v.chained)
        for (S = v.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((S || E).body)
      };
      if (g.openStrip.close && p(E.body, null, !0), v) {
        var A = g.inverseStrip;
        A.open && y(E.body, null, !0), A.close && p(S.body, null, !0), g.closeStrip.open && y(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (y(E.body), p(S.body));
      } else g.closeStrip.open && y(E.body, null, !0);
      return C;
    }, c.prototype.Decorator = c.prototype.MustacheStatement = function(g) {
      return g.strip;
    }, c.prototype.PartialStatement = c.prototype.CommentStatement = function(g) {
      var E = g.strip || {};
      return {
        inlineStandalone: !0,
        open: E.open,
        close: E.close
      };
    };
    function f(g, E, v) {
      E === void 0 && (E = g.length);
      var S = g[E - 1], h = g[E - 2];
      if (!S)
        return v;
      if (S.type === "ContentStatement")
        return (h || !v ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(S.original);
    }
    function m(g, E, v) {
      E === void 0 && (E = -1);
      var S = g[E + 1], h = g[E + 2];
      if (!S)
        return v;
      if (S.type === "ContentStatement")
        return (h || !v ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(S.original);
    }
    function p(g, E, v) {
      var S = g[E == null ? 0 : E + 1];
      if (!(!S || S.type !== "ContentStatement" || !v && S.rightStripped)) {
        var h = S.value;
        S.value = S.value.replace(v ? /^\s+/ : /^[ \t]*\r?\n?/, ""), S.rightStripped = S.value !== h;
      }
    }
    function y(g, E, v) {
      var S = g[E == null ? g.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !v && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(v ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var pn = {}, t0;
function hS() {
  if (t0) return pn;
  t0 = 1, pn.__esModule = !0, pn.SourceLocation = u, pn.id = c, pn.stripFlags = f, pn.stripComment = m, pn.preparePath = p, pn.prepareMustache = y, pn.prepareRawBlock = g, pn.prepareBlock = E, pn.prepareProgram = v, pn.preparePartialBlock = S;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = qn(), s = n(r);
  function i(h, C) {
    if (C = C.path ? C.path.original : C, h.path.original !== C) {
      var A = { loc: h.path.loc };
      throw new s.default(h.path.original + " doesn't match " + C, A);
    }
  }
  function u(h, C) {
    this.source = h, this.start = {
      line: C.first_line,
      column: C.first_column
    }, this.end = {
      line: C.last_line,
      column: C.last_column
    };
  }
  function c(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, C) {
    return {
      open: h.charAt(2) === "~",
      close: C.charAt(C.length - 3) === "~"
    };
  }
  function m(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function p(h, C, A) {
    A = this.locInfo(A);
    for (var O = h ? "@" : "", x = [], z = 0, l = 0, _ = C.length; l < _; l++) {
      var w = C[l].part, k = C[l].original !== w;
      if (O += (C[l].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (x.length > 0)
          throw new s.default("Invalid path: " + O, { loc: A });
        w === ".." && z++;
      } else
        x.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: z,
      parts: x,
      original: O,
      loc: A
    };
  }
  function y(h, C, A, O, x, z) {
    var l = O.charAt(3) || O.charAt(2), _ = l !== "{" && l !== "&", w = /\*/.test(O);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: A,
      escaped: _,
      strip: x,
      loc: this.locInfo(z)
    };
  }
  function g(h, C, A, O) {
    i(h, A), O = this.locInfo(O);
    var x = {
      type: "Program",
      body: C,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function E(h, C, A, O, x, z) {
    O && O.path && i(h, O);
    var l = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var _ = void 0, w = void 0;
    if (A) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", A);
      A.chain && (A.program.body[0].closeStrip = O.strip), w = A.strip, _ = A.program;
    }
    return x && (x = _, _ = C, C = x), {
      type: l ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      inverse: _,
      openStrip: h.strip,
      inverseStrip: w,
      closeStrip: O && O.strip,
      loc: this.locInfo(z)
    };
  }
  function v(h, C) {
    if (!C && h.length) {
      var A = h[0].loc, O = h[h.length - 1].loc;
      A && O && (C = {
        source: A.source,
        start: {
          line: A.start.line,
          column: A.start.column
        },
        end: {
          line: O.end.line,
          column: O.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: C
    };
  }
  function S(h, C, A, O) {
    return i(h, A), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: h.strip,
      closeStrip: A && A.strip,
      loc: this.locInfo(O)
    };
  }
  return pn;
}
var n0;
function pS() {
  if (n0) return Ti;
  n0 = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = g, Ti.parse = E;
  function n(v) {
    if (v && v.__esModule)
      return v;
    var S = {};
    if (v != null)
      for (var h in v)
        Object.prototype.hasOwnProperty.call(v, h) && (S[h] = v[h]);
    return S.default = v, S;
  }
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var s = dS(), i = r(s), u = fS(), c = r(u), f = hS(), m = n(f), p = sn();
  Ti.parser = i.default;
  var y = {};
  p.extend(y, m);
  function g(v, S) {
    if (v.type === "Program")
      return v;
    i.default.yy = y, y.locInfo = function(C) {
      return new y.SourceLocation(S && S.srcName, C);
    };
    var h = i.default.parse(v);
    return h;
  }
  function E(v, S) {
    var h = g(v, S), C = new c.default(S);
    return C.accept(h);
  }
  return Ti;
}
var xi = {}, r0;
function mS() {
  if (r0) return xi;
  r0 = 1, xi.__esModule = !0, xi.Compiler = m, xi.precompile = p, xi.compile = y;
  function n(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = qn(), s = n(r), i = sn(), u = Ny(), c = n(u), f = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(S) {
      var h = this.opcodes.length;
      if (S.opcodes.length !== h)
        return !1;
      for (var C = 0; C < h; C++) {
        var A = this.opcodes[C], O = S.opcodes[C];
        if (A.opcode !== O.opcode || !g(A.args, O.args))
          return !1;
      }
      h = this.children.length;
      for (var C = 0; C < h; C++)
        if (!this.children[C].equals(S.children[C]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(S, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = i.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(S);
    },
    compileProgram: function(S) {
      var h = new this.compiler(), C = h.compile(S, this.options), A = this.guid++;
      return this.usePartial = this.usePartial || C.usePartial, this.children[A] = C, this.useDepths = this.useDepths || C.useDepths, A;
    },
    accept: function(S) {
      if (!this[S.type])
        throw new s.default("Unknown type: " + S.type, S);
      this.sourceNode.unshift(S);
      var h = this[S.type](S);
      return this.sourceNode.shift(), h;
    },
    Program: function(S) {
      this.options.blockParams.unshift(S.blockParams);
      for (var h = S.body, C = h.length, A = 0; A < C; A++)
        this.accept(h[A]);
      return this.options.blockParams.shift(), this.isSimple = C === 1, this.blockParams = S.blockParams ? S.blockParams.length : 0, this;
    },
    BlockStatement: function(S) {
      E(S);
      var h = S.program, C = S.inverse;
      h = h && this.compileProgram(h), C = C && this.compileProgram(C);
      var A = this.classifySexpr(S);
      A === "helper" ? this.helperSexpr(S, h, C) : A === "simple" ? (this.simpleSexpr(S), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("blockValue", S.path.original)) : (this.ambiguousSexpr(S, h, C), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(S) {
      var h = S.program && this.compileProgram(S.program), C = this.setupFullMustacheParams(S, h, void 0), A = S.path;
      this.useDecorators = !0, this.opcode("registerDecorator", C.length, A.original);
    },
    PartialStatement: function(S) {
      this.usePartial = !0;
      var h = S.program;
      h && (h = this.compileProgram(S.program));
      var C = S.params;
      if (C.length > 1)
        throw new s.default("Unsupported number of partial arguments: " + C.length, S);
      C.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : C.push({ type: "PathExpression", parts: [], depth: 0 }));
      var A = S.name.original, O = S.name.type === "SubExpression";
      O && this.accept(S.name), this.setupFullMustacheParams(S, h, void 0, !0);
      var x = S.indent || "";
      this.options.preventIndent && x && (this.opcode("appendContent", x), x = ""), this.opcode("invokePartial", O, A, x), this.opcode("append");
    },
    PartialBlockStatement: function(S) {
      this.PartialStatement(S);
    },
    MustacheStatement: function(S) {
      this.SubExpression(S), S.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(S) {
      this.DecoratorBlock(S);
    },
    ContentStatement: function(S) {
      S.value && this.opcode("appendContent", S.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(S) {
      E(S);
      var h = this.classifySexpr(S);
      h === "simple" ? this.simpleSexpr(S) : h === "helper" ? this.helperSexpr(S) : this.ambiguousSexpr(S);
    },
    ambiguousSexpr: function(S, h, C) {
      var A = S.path, O = A.parts[0], x = h != null || C != null;
      this.opcode("getContext", A.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), A.strict = !0, this.accept(A), this.opcode("invokeAmbiguous", O, x);
    },
    simpleSexpr: function(S) {
      var h = S.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(S, h, C) {
      var A = this.setupFullMustacheParams(S, h, C), O = S.path, x = O.parts[0];
      if (this.options.knownHelpers[x])
        this.opcode("invokeKnownHelper", A.length, x);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + x, S);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", A.length, O.original, c.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(S) {
      this.addDepth(S.depth), this.opcode("getContext", S.depth);
      var h = S.parts[0], C = c.default.helpers.scopedId(S), A = !S.depth && !C && this.blockParamIndex(h);
      A ? this.opcode("lookupBlockParam", A, S.parts) : h ? S.data ? (this.options.data = !0, this.opcode("lookupData", S.depth, S.parts, S.strict)) : this.opcode("lookupOnContext", S.parts, S.falsy, S.strict, C) : this.opcode("pushContext");
    },
    StringLiteral: function(S) {
      this.opcode("pushString", S.value);
    },
    NumberLiteral: function(S) {
      this.opcode("pushLiteral", S.value);
    },
    BooleanLiteral: function(S) {
      this.opcode("pushLiteral", S.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(S) {
      var h = S.pairs, C = 0, A = h.length;
      for (this.opcode("pushHash"); C < A; C++)
        this.pushParam(h[C].value);
      for (; C--; )
        this.opcode("assignToHash", h[C].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(S) {
      this.opcodes.push({
        opcode: S,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(S) {
      S && (this.useDepths = !0);
    },
    classifySexpr: function(S) {
      var h = c.default.helpers.simpleId(S.path), C = h && !!this.blockParamIndex(S.path.parts[0]), A = !C && c.default.helpers.helperExpression(S), O = !C && (A || h);
      if (O && !A) {
        var x = S.path.parts[0], z = this.options;
        z.knownHelpers[x] ? A = !0 : z.knownHelpersOnly && (O = !1);
      }
      return A ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(S) {
      for (var h = 0, C = S.length; h < C; h++)
        this.pushParam(S[h]);
    },
    pushParam: function(S) {
      var h = S.value != null ? S.value : S.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), S.depth && this.addDepth(S.depth), this.opcode("getContext", S.depth || 0), this.opcode("pushStringParam", h, S.type), S.type === "SubExpression" && this.accept(S);
      else {
        if (this.trackIds) {
          var C = void 0;
          if (S.parts && !c.default.helpers.scopedId(S) && !S.depth && (C = this.blockParamIndex(S.parts[0])), C) {
            var A = S.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", C, A);
          } else
            h = S.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", S.type, h);
        }
        this.accept(S);
      }
    },
    setupFullMustacheParams: function(S, h, C, A) {
      var O = S.params;
      return this.pushParams(O), this.opcode("pushProgram", h), this.opcode("pushProgram", C), S.hash ? this.accept(S.hash) : this.opcode("emptyHash", A), O;
    },
    blockParamIndex: function(S) {
      for (var h = 0, C = this.options.blockParams.length; h < C; h++) {
        var A = this.options.blockParams[h], O = A && i.indexOf(A, S);
        if (A && O >= 0)
          return [h, O];
      }
    }
  };
  function p(v, S, h) {
    if (v == null || typeof v != "string" && v.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + v);
    S = S || {}, "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = h.parse(v, S), A = new h.Compiler().compile(C, S);
    return new h.JavaScriptCompiler().compile(A, S);
  }
  function y(v, S, h) {
    if (S === void 0 && (S = {}), v == null || typeof v != "string" && v.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + v);
    S = i.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function A() {
      var x = h.parse(v, S), z = new h.Compiler().compile(x, S), l = new h.JavaScriptCompiler().compile(z, S, void 0, !0);
      return h.template(l);
    }
    function O(x, z) {
      return C || (C = A()), C.call(this, x, z);
    }
    return O._setup = function(x) {
      return C || (C = A()), C._setup(x);
    }, O._child = function(x, z, l, _) {
      return C || (C = A()), C._child(x, z, l, _);
    }, O;
  }
  function g(v, S) {
    if (v === S)
      return !0;
    if (i.isArray(v) && i.isArray(S) && v.length === S.length) {
      for (var h = 0; h < v.length; h++)
        if (!g(v[h], S[h]))
          return !1;
      return !0;
    }
  }
  function E(v) {
    if (!v.path.parts) {
      var S = v.path;
      v.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [S.original + ""],
        original: S.original + "",
        loc: S.loc
      };
    }
  }
  return xi;
}
var Fu = { exports: {} }, Qu = { exports: {} }, Hs = {}, of = {}, Ku = {}, Ju = {}, a0;
function gS() {
  if (a0) return Ju;
  a0 = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ju.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Ju.decode = function(r) {
    var s = 65, i = 90, u = 97, c = 122, f = 48, m = 57, p = 43, y = 47, g = 26, E = 52;
    return s <= r && r <= i ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == y ? 63 : -1;
  }, Ju;
}
var i0;
function My() {
  if (i0) return Ku;
  i0 = 1;
  var n = gS(), r = 5, s = 1 << r, i = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, y = m >> 1;
    return p ? -y : y;
  }
  return Ku.encode = function(p) {
    var y = "", g, E = c(p);
    do
      g = E & i, E >>>= r, E > 0 && (g |= u), y += n.encode(g);
    while (E > 0);
    return y;
  }, Ku.decode = function(p, y, g) {
    var E = p.length, v = 0, S = 0, h, C;
    do {
      if (y >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(p.charCodeAt(y++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(y - 1));
      h = !!(C & u), C &= i, v = v + (C << S), S += r;
    } while (h);
    g.value = f(v), g.rest = y;
  }, Ku;
}
var uf = {}, s0;
function so() {
  return s0 || (s0 = 1, (function(n) {
    function r(l, _, w) {
      if (_ in l)
        return l[_];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + _ + '" is a required argument.');
    }
    n.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
    function u(l) {
      var _ = l.match(s);
      return _ ? {
        scheme: _[1],
        auth: _[2],
        host: _[3],
        port: _[4],
        path: _[5]
      } : null;
    }
    n.urlParse = u;
    function c(l) {
      var _ = "";
      return l.scheme && (_ += l.scheme + ":"), _ += "//", l.auth && (_ += l.auth + "@"), l.host && (_ += l.host), l.port && (_ += ":" + l.port), l.path && (_ += l.path), _;
    }
    n.urlGenerate = c;
    function f(l) {
      var _ = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        _ = w.path;
      }
      for (var k = n.isAbsolute(_), R = _.split(/\/+/), L, j = 0, P = R.length - 1; P >= 0; P--)
        L = R[P], L === "." ? R.splice(P, 1) : L === ".." ? j++ : j > 0 && (L === "" ? (R.splice(P + 1, j), j = 0) : (R.splice(P, 2), j--));
      return _ = R.join("/"), _ === "" && (_ = k ? "/" : "."), w ? (w.path = _, c(w)) : _;
    }
    n.normalize = f;
    function m(l, _) {
      l === "" && (l = "."), _ === "" && (_ = ".");
      var w = u(_), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || _.match(i))
        return _;
      if (k && !k.host && !k.path)
        return k.host = _, c(k);
      var R = _.charAt(0) === "/" ? _ : f(l.replace(/\/+$/, "") + "/" + _);
      return k ? (k.path = R, c(k)) : R;
    }
    n.join = m, n.isAbsolute = function(l) {
      return l.charAt(0) === "/" || s.test(l);
    };
    function p(l, _) {
      l === "" && (l = "."), l = l.replace(/\/$/, "");
      for (var w = 0; _.indexOf(l + "/") !== 0; ) {
        var k = l.lastIndexOf("/");
        if (k < 0 || (l = l.slice(0, k), l.match(/^([^\/]+:\/)?\/*$/)))
          return _;
        ++w;
      }
      return Array(w + 1).join("../") + _.substr(l.length + 1);
    }
    n.relative = p;
    var y = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function g(l) {
      return l;
    }
    function E(l) {
      return S(l) ? "$" + l : l;
    }
    n.toSetString = y ? g : E;
    function v(l) {
      return S(l) ? l.slice(1) : l;
    }
    n.fromSetString = y ? g : v;
    function S(l) {
      if (!l)
        return !1;
      var _ = l.length;
      if (_ < 9 || l.charCodeAt(_ - 1) !== 95 || l.charCodeAt(_ - 2) !== 95 || l.charCodeAt(_ - 3) !== 111 || l.charCodeAt(_ - 4) !== 116 || l.charCodeAt(_ - 5) !== 111 || l.charCodeAt(_ - 6) !== 114 || l.charCodeAt(_ - 7) !== 112 || l.charCodeAt(_ - 8) !== 95 || l.charCodeAt(_ - 9) !== 95)
        return !1;
      for (var w = _ - 10; w >= 0; w--)
        if (l.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function h(l, _, w) {
      var k = A(l.source, _.source);
      return k !== 0 || (k = l.originalLine - _.originalLine, k !== 0) || (k = l.originalColumn - _.originalColumn, k !== 0 || w) || (k = l.generatedColumn - _.generatedColumn, k !== 0) || (k = l.generatedLine - _.generatedLine, k !== 0) ? k : A(l.name, _.name);
    }
    n.compareByOriginalPositions = h;
    function C(l, _, w) {
      var k = l.generatedLine - _.generatedLine;
      return k !== 0 || (k = l.generatedColumn - _.generatedColumn, k !== 0 || w) || (k = A(l.source, _.source), k !== 0) || (k = l.originalLine - _.originalLine, k !== 0) || (k = l.originalColumn - _.originalColumn, k !== 0) ? k : A(l.name, _.name);
    }
    n.compareByGeneratedPositionsDeflated = C;
    function A(l, _) {
      return l === _ ? 0 : l === null ? 1 : _ === null ? -1 : l > _ ? 1 : -1;
    }
    function O(l, _) {
      var w = l.generatedLine - _.generatedLine;
      return w !== 0 || (w = l.generatedColumn - _.generatedColumn, w !== 0) || (w = A(l.source, _.source), w !== 0) || (w = l.originalLine - _.originalLine, w !== 0) || (w = l.originalColumn - _.originalColumn, w !== 0) ? w : A(l.name, _.name);
    }
    n.compareByGeneratedPositionsInflated = O;
    function x(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = x;
    function z(l, _, w) {
      if (_ = _ || "", l && (l[l.length - 1] !== "/" && _[0] !== "/" && (l += "/"), _ = l + _), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var R = k.path.lastIndexOf("/");
          R >= 0 && (k.path = k.path.substring(0, R + 1));
        }
        _ = m(c(k), _);
      }
      return f(_);
    }
    n.computeSourceURL = z;
  })(uf)), uf;
}
var lf = {}, o0;
function Ry() {
  if (o0) return lf;
  o0 = 1;
  var n = so(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function i() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(c, f) {
    for (var m = new i(), p = 0, y = c.length; p < y; p++)
      m.add(c[p], f);
    return m;
  }, i.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(c, f) {
    var m = s ? c : n.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), y = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, y) : this._set[m] = y);
  }, i.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var f = n.toSetString(c);
    return r.call(this._set, f);
  }, i.prototype.indexOf = function(c) {
    if (s) {
      var f = this._set.get(c);
      if (f >= 0)
        return f;
    } else {
      var m = n.toSetString(c);
      if (r.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, i.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, i.prototype.toArray = function() {
    return this._array.slice();
  }, lf.ArraySet = i, lf;
}
var cf = {}, u0;
function vS() {
  if (u0) return cf;
  u0 = 1;
  var n = so();
  function r(i, u) {
    var c = i.generatedLine, f = u.generatedLine, m = i.generatedColumn, p = u.generatedColumn;
    return f > c || f == c && p >= m || n.compareByGeneratedPositionsInflated(i, u) <= 0;
  }
  function s() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return s.prototype.unsortedForEach = function(u, c) {
    this._array.forEach(u, c);
  }, s.prototype.add = function(u) {
    r(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, s.prototype.toArray = function() {
    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, cf.MappingList = s, cf;
}
var l0;
function jy() {
  if (l0) return of;
  l0 = 1;
  var n = My(), r = so(), s = Ry().ArraySet, i = vS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new i(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(y) {
      var g = {
        generated: {
          line: y.generatedLine,
          column: y.generatedColumn
        }
      };
      y.source != null && (g.source = y.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: y.originalLine,
        column: y.originalColumn
      }, y.name != null && (g.name = y.name)), p.addMapping(g);
    }), f.sources.forEach(function(y) {
      var g = y;
      m !== null && (g = r.relative(m, y)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(y);
      E != null && p.setSourceContent(y, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), y = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, y, g), y != null && (y = String(y), this._sources.has(y) || this._sources.add(y)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: y,
      name: g
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var y = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      y = f.file;
    }
    var g = this._sourceRoot;
    g != null && (y = r.relative(g, y));
    var E = new s(), v = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === y && S.originalLine != null) {
        var h = f.originalPositionFor({
          line: S.originalLine,
          column: S.originalColumn
        });
        h.source != null && (S.source = h.source, p != null && (S.source = r.join(p, S.source)), g != null && (S.source = r.relative(g, S.source)), S.originalLine = h.line, S.originalColumn = h.column, h.name != null && (S.name = h.name));
      }
      var C = S.source;
      C != null && !E.has(C) && E.add(C);
      var A = S.name;
      A != null && !v.has(A) && v.add(A);
    }, this), this._sources = E, this._names = v, f.sources.forEach(function(S) {
      var h = f.sourceContentFor(S);
      h != null && (p != null && (S = r.join(p, S)), g != null && (S = r.relative(g, S)), this.setSourceContent(S, h));
    }, this);
  }, u.prototype._validateMapping = function(f, m, p, y) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !y)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: y
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, y = 0, g = 0, E = 0, v = "", S, h, C, A, O = this._mappings.toArray(), x = 0, z = O.length; x < z; x++) {
      if (h = O[x], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (x > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, O[x - 1]))
          continue;
        S += ",";
      }
      S += n.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (A = this._sources.indexOf(h.source), S += n.encode(A - E), E = A, S += n.encode(h.originalLine - 1 - y), y = h.originalLine - 1, S += n.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += n.encode(C - g), g = C)), v += S;
    }
    return v;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var y = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, y) ? this._sourcesContents[y] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, of.SourceMapGenerator = u, of;
}
var qs = {}, df = {}, c0;
function yS() {
  return c0 || (c0 = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, i, u, c, f, m) {
      var p = Math.floor((i - s) / 2) + s, y = f(u, c[p], !0);
      return y === 0 ? p : y > 0 ? i - p > 1 ? r(p, i, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? i < c.length ? i : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    n.search = function(i, u, c, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        i,
        u,
        c,
        f || n.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(df)), df;
}
var ff = {}, d0;
function _S() {
  if (d0) return ff;
  d0 = 1;
  function n(i, u, c) {
    var f = i[u];
    i[u] = i[c], i[c] = f;
  }
  function r(i, u) {
    return Math.round(i + Math.random() * (u - i));
  }
  function s(i, u, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      n(i, m, f);
      for (var y = i[f], g = c; g < f; g++)
        u(i[g], y) <= 0 && (p += 1, n(i, p, g));
      n(i, p + 1, g);
      var E = p + 1;
      s(i, u, c, E - 1), s(i, u, E + 1, f);
    }
  }
  return ff.quickSort = function(i, u) {
    s(i, u, 0, i.length - 1);
  }, ff;
}
var f0;
function bS() {
  if (f0) return qs;
  f0 = 1;
  var n = so(), r = yS(), s = Ry().ArraySet, i = My(), u = _S().quickSort;
  function c(y, g) {
    var E = y;
    return typeof y == "string" && (E = n.parseSourceMapInput(y)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  c.fromSourceMap = function(y, g) {
    return f.fromSourceMap(y, g);
  }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), c.prototype._charIsMappingSeparator = function(g, E) {
    var v = g.charAt(E);
    return v === ";" || v === ",";
  }, c.prototype._parseMappings = function(g, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(g, E, v) {
    var S = E || null, h = v || c.GENERATED_ORDER, C;
    switch (h) {
      case c.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var A = this.sourceRoot;
    C.map(function(O) {
      var x = O.source === null ? null : this._sources.at(O.source);
      return x = n.computeSourceURL(A, x, this._sourceMapURL), {
        source: x,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(g, S);
  }, c.prototype.allGeneratedPositionsFor = function(g) {
    var E = n.getArg(g, "line"), v = {
      source: n.getArg(g, "source"),
      originalLine: E,
      originalColumn: n.getArg(g, "column", 0)
    };
    if (v.source = this._findSourceIndex(v.source), v.source < 0)
      return [];
    var S = [], h = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var C = this._originalMappings[h];
      if (g.column === void 0)
        for (var A = C.originalLine; C && C.originalLine === A; )
          S.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
      else
        for (var O = C.originalColumn; C && C.originalLine === E && C.originalColumn == O; )
          S.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return S;
  }, qs.SourceMapConsumer = c;
  function f(y, g) {
    var E = y;
    typeof y == "string" && (E = n.parseSourceMapInput(y));
    var v = n.getArg(E, "version"), S = n.getArg(E, "sources"), h = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), A = n.getArg(E, "sourcesContent", null), O = n.getArg(E, "mappings"), x = n.getArg(E, "file", null);
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    C && (C = n.normalize(C)), S = S.map(String).map(n.normalize).map(function(z) {
      return C && n.isAbsolute(C) && n.isAbsolute(z) ? n.relative(C, z) : z;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(z) {
      return n.computeSourceURL(C, z, g);
    }), this.sourceRoot = C, this.sourcesContent = A, this._mappings = O, this._sourceMapURL = g, this.file = x;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(y) {
    var g = y;
    if (this.sourceRoot != null && (g = n.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == y)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var v = Object.create(f.prototype), S = v._names = s.fromArray(g._names.toArray(), !0), h = v._sources = s.fromArray(g._sources.toArray(), !0);
    v.sourceRoot = g._sourceRoot, v.sourcesContent = g._generateSourcesContent(
      v._sources.toArray(),
      v.sourceRoot
    ), v.file = g._file, v._sourceMapURL = E, v._absoluteSources = v._sources.toArray().map(function(w) {
      return n.computeSourceURL(v.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), A = v.__generatedMappings = [], O = v.__originalMappings = [], x = 0, z = C.length; x < z; x++) {
      var l = C[x], _ = new m();
      _.generatedLine = l.generatedLine, _.generatedColumn = l.generatedColumn, l.source && (_.source = h.indexOf(l.source), _.originalLine = l.originalLine, _.originalColumn = l.originalColumn, l.name && (_.name = S.indexOf(l.name)), O.push(_)), A.push(_);
    }
    return u(v.__originalMappings, n.compareByOriginalPositions), v;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var v = 1, S = 0, h = 0, C = 0, A = 0, O = 0, x = g.length, z = 0, l = {}, _ = {}, w = [], k = [], R, L, j, P, Z; z < x; )
      if (g.charAt(z) === ";")
        v++, z++, S = 0;
      else if (g.charAt(z) === ",")
        z++;
      else {
        for (R = new m(), R.generatedLine = v, P = z; P < x && !this._charIsMappingSeparator(g, P); P++)
          ;
        if (L = g.slice(z, P), j = l[L], j)
          z += L.length;
        else {
          for (j = []; z < P; )
            i.decode(g, z, _), Z = _.value, z = _.rest, j.push(Z);
          if (j.length === 2)
            throw new Error("Found a source, but no line and column");
          if (j.length === 3)
            throw new Error("Found a source and line, but no column");
          l[L] = j;
        }
        R.generatedColumn = S + j[0], S = R.generatedColumn, j.length > 1 && (R.source = A + j[1], A += j[1], R.originalLine = h + j[2], h = R.originalLine, R.originalLine += 1, R.originalColumn = C + j[3], C = R.originalColumn, j.length > 4 && (R.name = O + j[4], O += j[4])), k.push(R), typeof R.originalLine == "number" && w.push(R);
      }
    u(k, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, n.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(g, E, v, S, h, C) {
    if (g[v] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[v]);
    if (g[S] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[S]);
    return r.search(g, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var E = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var v = this._generatedMappings[g + 1];
        if (E.generatedLine === v.generatedLine) {
          E.lastGeneratedColumn = v.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, v = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var S = this._generatedMappings[v];
      if (S.generatedLine === E.generatedLine) {
        var h = n.getArg(S, "source", null);
        h !== null && (h = this._sources.at(h), h = n.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var C = n.getArg(S, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: h,
          line: n.getArg(S, "originalLine", null),
          column: n.getArg(S, "originalColumn", null),
          name: C
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(g, E) {
    if (!this.sourcesContent)
      return null;
    var v = this._findSourceIndex(g);
    if (v >= 0)
      return this.sourcesContent[v];
    var S = g;
    this.sourceRoot != null && (S = n.relative(this.sourceRoot, S));
    var h;
    if (this.sourceRoot != null && (h = n.urlParse(this.sourceRoot))) {
      var C = S.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + S))
        return this.sourcesContent[this._sources.indexOf("/" + S)];
    }
    if (E)
      return null;
    throw new Error('"' + S + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(g) {
    var E = n.getArg(g, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var v = {
      source: E,
      originalLine: n.getArg(g, "line"),
      originalColumn: n.getArg(g, "column")
    }, S = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var h = this._originalMappings[S];
      if (h.source === v.source)
        return {
          line: n.getArg(h, "generatedLine", null),
          column: n.getArg(h, "generatedColumn", null),
          lastColumn: n.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, qs.BasicSourceMapConsumer = f;
  function p(y, g) {
    var E = y;
    typeof y == "string" && (E = n.parseSourceMapInput(y));
    var v = n.getArg(E, "version"), S = n.getArg(E, "sections");
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    this._sources = new s(), this._names = new s();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = S.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var A = n.getArg(C, "offset"), O = n.getArg(A, "line"), x = n.getArg(A, "column");
      if (O < h.line || O === h.line && x < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = A, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: x + 1
        },
        consumer: new c(n.getArg(C, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(c.prototype), p.prototype.constructor = c, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var y = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          y.push(this._sections[g].consumer.sources[E]);
      return y;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, v = r.search(
      E,
      this._sections,
      function(h, C) {
        var A = h.generatedLine - C.generatedOffset.generatedLine;
        return A || h.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), S = this._sections[v];
    return S ? S.consumer.originalPositionFor({
      line: E.generatedLine - (S.generatedOffset.generatedLine - 1),
      column: E.generatedColumn - (S.generatedOffset.generatedLine === E.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(g, E) {
    for (var v = 0; v < this._sections.length; v++) {
      var S = this._sections[v], h = S.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var E = 0; E < this._sections.length; E++) {
      var v = this._sections[E];
      if (v.consumer._findSourceIndex(n.getArg(g, "source")) !== -1) {
        var S = v.consumer.generatedPositionFor(g);
        if (S) {
          var h = {
            line: S.line + (v.generatedOffset.generatedLine - 1),
            column: S.column + (v.generatedOffset.generatedLine === S.line ? v.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(g, E) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var v = 0; v < this._sections.length; v++)
      for (var S = this._sections[v], h = S.consumer._generatedMappings, C = 0; C < h.length; C++) {
        var A = h[C], O = S.consumer._sources.at(A.source);
        O = n.computeSourceURL(S.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var x = null;
        A.name && (x = S.consumer._names.at(A.name), this._names.add(x), x = this._names.indexOf(x));
        var z = {
          source: O,
          generatedLine: A.generatedLine + (S.generatedOffset.generatedLine - 1),
          generatedColumn: A.generatedColumn + (S.generatedOffset.generatedLine === A.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
          originalLine: A.originalLine,
          originalColumn: A.originalColumn,
          name: x
        };
        this.__generatedMappings.push(z), typeof z.originalLine == "number" && this.__originalMappings.push(z);
      }
    u(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), u(this.__originalMappings, n.compareByOriginalPositions);
  }, qs.IndexedSourceMapConsumer = p, qs;
}
var hf = {}, h0;
function SS() {
  if (h0) return hf;
  h0 = 1;
  var n = jy().SourceMapGenerator, r = so(), s = /(\r?\n)/, i = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, y, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, y != null && this.add(y);
  }
  return c.fromStringWithSourceMap = function(m, p, y) {
    var g = new c(), E = m.split(s), v = 0, S = function() {
      var x = l(), z = l() || "";
      return x + z;
      function l() {
        return v < E.length ? E[v++] : void 0;
      }
    }, h = 1, C = 0, A = null;
    return p.eachMapping(function(x) {
      if (A !== null)
        if (h < x.generatedLine)
          O(A, S()), h++, C = 0;
        else {
          var z = E[v] || "", l = z.substr(0, x.generatedColumn - C);
          E[v] = z.substr(x.generatedColumn - C), C = x.generatedColumn, O(A, l), A = x;
          return;
        }
      for (; h < x.generatedLine; )
        g.add(S()), h++;
      if (C < x.generatedColumn) {
        var z = E[v] || "";
        g.add(z.substr(0, x.generatedColumn)), E[v] = z.substr(x.generatedColumn), C = x.generatedColumn;
      }
      A = x;
    }, this), v < E.length && (A && O(A, S()), g.add(E.splice(v).join(""))), p.sources.forEach(function(x) {
      var z = p.sourceContentFor(x);
      z != null && (y != null && (x = r.join(y, x)), g.setSourceContent(x, z));
    }), g;
    function O(x, z) {
      if (x === null || x.source === void 0)
        g.add(z);
      else {
        var l = y ? r.join(y, x.source) : x.source;
        g.add(new c(
          x.originalLine,
          x.originalColumn,
          l,
          z,
          x.name
        ));
      }
    }
  }, c.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(p) {
        this.add(p);
      }, this);
    else if (m[u] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var p = m.length - 1; p >= 0; p--)
        this.prepend(m[p]);
    else if (m[u] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var p, y = 0, g = this.children.length; y < g; y++)
      p = this.children[y], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var p, y, g = this.children.length;
    if (g > 0) {
      for (p = [], y = 0; y < g - 1; y++)
        p.push(this.children[y]), p.push(m);
      p.push(this.children[y]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(m, p) {
    var y = this.children[this.children.length - 1];
    return y[u] ? y.replaceRight(m, p) : typeof y == "string" ? this.children[this.children.length - 1] = y.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, c.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, c.prototype.walkSourceContents = function(m) {
    for (var p = 0, y = this.children.length; p < y; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, y = g.length; p < y; p++)
      m(r.fromSetString(g[p]), this.sourceContents[g[p]]);
  }, c.prototype.toString = function() {
    var m = "";
    return this.walk(function(p) {
      m += p;
    }), m;
  }, c.prototype.toStringWithSourceMap = function(m) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, y = new n(m), g = !1, E = null, v = null, S = null, h = null;
    return this.walk(function(C, A) {
      p.code += C, A.source !== null && A.line !== null && A.column !== null ? ((E !== A.source || v !== A.line || S !== A.column || h !== A.name) && y.addMapping({
        source: A.source,
        original: {
          line: A.line,
          column: A.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: A.name
      }), E = A.source, v = A.line, S = A.column, h = A.name, g = !0) : g && (y.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var O = 0, x = C.length; O < x; O++)
        C.charCodeAt(O) === i ? (p.line++, p.column = 0, O + 1 === x ? (E = null, g = !1) : g && y.addMapping({
          source: A.source,
          original: {
            line: A.line,
            column: A.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: A.name
        })) : p.column++;
    }), this.walkSourceContents(function(C, A) {
      y.setSourceContent(C, A);
    }), { code: p.code, map: y };
  }, hf.SourceNode = c, hf;
}
var p0;
function wS() {
  return p0 || (p0 = 1, Hs.SourceMapGenerator = jy().SourceMapGenerator, Hs.SourceMapConsumer = bS().SourceMapConsumer, Hs.SourceNode = SS().SourceNode), Hs;
}
var m0;
function ES() {
  return m0 || (m0 = 1, (function(n, r) {
    r.__esModule = !0;
    var s = sn(), i = void 0;
    try {
      var u = wS();
      i = u.SourceNode;
    } catch {
    }
    i || (i = function(m, p, y, g) {
      this.src = "", g && this.add(g);
    }, i.prototype = {
      add: function(p) {
        s.isArray(p) && (p = p.join("")), this.src += p;
      },
      prepend: function(p) {
        s.isArray(p) && (p = p.join("")), this.src = p + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(m, p, y) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, v = m.length; E < v; E++)
          g.push(p.wrap(m[E], y));
        return g;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function f(m) {
      this.srcFile = m, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(p, y) {
        this.source.unshift(this.wrap(p, y));
      },
      push: function(p, y) {
        this.source.push(this.wrap(p, y));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(y) {
          p.add(["  ", y, `
`]);
        }), p;
      },
      each: function(p) {
        for (var y = 0, g = this.source.length; y < g; y++)
          p(this.source[y]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new i(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var y = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof i ? p : (p = c(p, this, y), new i(y.start.line, y.start.column, this.srcFile, p));
      },
      functionCall: function(p, y, g) {
        return g = this.generateList(g), this.wrap([p, y ? "." + y + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var y = this, g = [];
        Object.keys(p).forEach(function(v) {
          var S = c(p[v], y);
          S !== "undefined" && g.push([y.quotedString(v), ":", S]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var y = this.empty(), g = 0, E = p.length; g < E; g++)
          g && y.add(","), y.add(c(p[g], this));
        return y;
      },
      generateArray: function(p) {
        var y = this.generateList(p);
        return y.prepend("["), y.add("]"), y;
      }
    }, r.default = f, n.exports = r.default;
  })(Qu, Qu.exports)), Qu.exports;
}
var g0;
function CS() {
  return g0 || (g0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var i = Ff(), u = qn(), c = s(u), f = sn(), m = ES(), p = s(m);
    function y(v) {
      this.value = v;
    }
    function g() {
    }
    g.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(S, h) {
        return this.internalNameLookup(S, h);
      },
      depthedLookup: function(S) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(S), ")"];
      },
      compilerInfo: function() {
        var S = i.COMPILER_REVISION, h = i.REVISION_CHANGES[S];
        return [S, h];
      },
      appendToBuffer: function(S, h, C) {
        return f.isArray(S) || (S = [S]), S = this.source.wrap(S, h), this.environment.isSimple ? ["return ", S, ";"] : C ? ["buffer += ", S, ";"] : (S.appendToBuffer = !0, S);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(S, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", S, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(S, h, C, A) {
        this.environment = S, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !A, this.name = this.environment.name, this.isChild = !!C, this.context = C || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(S, h), this.useDepths = this.useDepths || S.useDepths || S.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || S.useBlockParams;
        var O = S.opcodes, x = void 0, z = void 0, l = void 0, _ = void 0;
        for (l = 0, _ = O.length; l < _; l++)
          x = O[l], this.source.currentLocation = x.loc, z = z || x.loc, this[x.opcode].apply(this, x.args);
        if (this.source.currentLocation = z, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), A ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var w = this.createFunctionContext(A);
        if (this.isChild)
          return w;
        var k = {
          compiler: this.compilerInfo(),
          main: w
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var R = this.context, L = R.programs, j = R.decorators;
        for (l = 0, _ = L.length; l < _; l++)
          L[l] && (k[l] = L[l], j[l] && (k[l + "_d"] = j[l], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), A ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(S) {
        var h = this, C = "", A = this.stackVars.concat(this.registers.list);
        A.length > 0 && (C += ", " + A.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(l) {
          var _ = h.aliases[l];
          _.children && _.referenceCount > 1 && (C += ", alias" + ++O + "=" + l, _.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var x = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths");
        var z = this.mergeSource(C);
        return S ? (x.push(z), Function.apply(this, x)) : this.source.wrap(["function(", x.join(","), `) {
  `, z, "}"]);
      },
      mergeSource: function(S) {
        var h = this.environment.isSimple, C = !this.forceBuffer, A = void 0, O = void 0, x = void 0, z = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (x ? l.prepend("  + ") : x = l, z = l) : (x && (O ? x.prepend("buffer += ") : A = !0, z.add(";"), x = z = void 0), O = !0, h || (C = !1));
        }), C ? x ? (x.prepend("return "), z.add(";")) : O || this.source.push('return "";') : (S += ", buffer = " + (A ? "" : this.initializeBuffer()), x ? (x.prepend("return buffer + "), z.add(";")) : this.source.push("return buffer;")), S && this.source.prepend("var " + S.substring(2) + (A ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(S) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), C = [this.contextName(0)];
        this.setupHelperArgs(S, 0, C);
        var A = this.popStack();
        C.splice(1, 0, A), this.push(this.source.functionCall(h, "call", C));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var S = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var C = this.topStack();
        h.splice(1, 0, C), this.pushSource(["if (!", this.lastHelper, ") { ", C, " = ", this.source.functionCall(S, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(S) {
        this.pendingContent ? S = this.pendingContent + S : this.pendingLocation = this.source.currentLocation, this.pendingContent = S;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var S = this.popStack();
          this.pushSource(["if (", S, " != null) { ", this.appendToBuffer(S, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(S) {
        this.lastContext = S;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(S, h, C, A) {
        var O = 0;
        !A && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(S[O++])) : this.pushContext(), this.resolvePath("context", S, O, h, C);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(S, h) {
        this.useBlockParams = !0, this.push(["blockParams[", S[0], "][", S[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(S, h, C) {
        S ? this.pushStackLiteral("container.data(data, " + S + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, C);
      },
      resolvePath: function(S, h, C, A, O) {
        var x = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && O, this, h, C, S));
          return;
        }
        for (var z = h.length; C < z; C++)
          this.replaceStack(function(l) {
            var _ = x.nameLookup(l, h[C], S);
            return A ? [" && ", _] : [" != null ? ", _, " : ", l];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(S, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof S == "string" ? this.pushString(S) : this.pushStackLiteral(S));
      },
      emptyHash: function(S) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(S ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var S = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(S.ids)), this.stringParams && (this.push(this.objectLiteral(S.contexts)), this.push(this.objectLiteral(S.types))), this.push(this.objectLiteral(S.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(S) {
        this.pushStackLiteral(this.quotedString(S));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(S) {
        this.pushStackLiteral(S);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(S) {
        S != null ? this.pushStackLiteral(this.programExpression(S)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(S, h) {
        var C = this.nameLookup("decorators", h, "decorator"), A = this.setupHelperArgs(h, S);
        this.decorators.push(["fn = ", this.decorators.functionCall(C, "", ["fn", "props", "container", A]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(S, h, C) {
        var A = this.popStack(), O = this.setupHelper(S, h), x = [];
        C && x.push(O.name), x.push(A), this.options.strict || x.push(this.aliasable("container.hooks.helperMissing"));
        var z = ["(", this.itemsSeparatedBy(x, "||"), ")"], l = this.source.functionCall(z, "call", O.callParams);
        this.push(l);
      },
      itemsSeparatedBy: function(S, h) {
        var C = [];
        C.push(S[0]);
        for (var A = 1; A < S.length; A++)
          C.push(h, S[A]);
        return C;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(S, h) {
        var C = this.setupHelper(S, h);
        this.push(this.source.functionCall(C.name, "call", C.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(S, h) {
        this.useRegister("helper");
        var C = this.popStack();
        this.emptyHash();
        var A = this.setupHelper(0, S, h), O = this.lastHelper = this.nameLookup("helpers", S, "helper"), x = ["(", "(helper = ", O, " || ", C, ")"];
        this.options.strict || (x[0] = "(helper = ", x.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", x, A.paramsInit ? ["),(", A.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", A.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(S, h, C) {
        var A = [], O = this.setupParams(h, 1, A);
        S && (h = this.popStack(), delete O.name), C && (O.indent = JSON.stringify(C)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", S ? A.unshift(h) : A.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), A.push(O), this.push(this.source.functionCall("container.invokePartial", "", A));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(S) {
        var h = this.popStack(), C = void 0, A = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (A = this.popStack(), C = this.popStack());
        var x = this.hash;
        C && (x.contexts[S] = C), A && (x.types[S] = A), O && (x.ids[S] = O), x.values[S] = h;
      },
      pushId: function(S, h, C) {
        S === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : S === "PathExpression" ? this.pushString(h) : S === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(S, h) {
        for (var C = S.children, A = void 0, O = void 0, x = 0, z = C.length; x < z; x++) {
          A = C[x], O = new this.compiler();
          var l = this.matchExistingProgram(A);
          if (l == null) {
            this.context.programs.push("");
            var _ = this.context.programs.length;
            A.index = _, A.name = "program" + _, this.context.programs[_] = O.compile(A, h, this.context, !this.precompile), this.context.decorators[_] = O.decorators, this.context.environments[_] = A, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, A.useDepths = this.useDepths, A.useBlockParams = this.useBlockParams;
          } else
            A.index = l.index, A.name = "program" + l.index, this.useDepths = this.useDepths || l.useDepths, this.useBlockParams = this.useBlockParams || l.useBlockParams;
        }
      },
      matchExistingProgram: function(S) {
        for (var h = 0, C = this.context.environments.length; h < C; h++) {
          var A = this.context.environments[h];
          if (A && A.equals(S))
            return A;
        }
      },
      programExpression: function(S) {
        var h = this.environment.children[S], C = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths"), "container.program(" + C.join(", ") + ")";
      },
      useRegister: function(S) {
        this.registers[S] || (this.registers[S] = !0, this.registers.list.push(S));
      },
      push: function(S) {
        return S instanceof y || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new y(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, A = void 0, O = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var x = this.popStack(!0);
        if (x instanceof y)
          C = [x.value], h = ["(", C], O = !0;
        else {
          A = !0;
          var z = this.incrStack();
          h = ["((", this.push(z), " = ", x, ")"], C = this.topStack();
        }
        var l = S.call(this, C);
        O || this.popStack(), A && this.stackSlot--, this.push(h.concat(l, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var S = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, C = S.length; h < C; h++) {
          var A = S[h];
          if (A instanceof y)
            this.compileStack.push(A);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", A, ";"]), this.compileStack.push(O);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(S) {
        var h = this.isInline(), C = (h ? this.inlineStack : this.compileStack).pop();
        if (!S && C instanceof y)
          return C.value;
        if (!h) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return C;
      },
      topStack: function() {
        var S = this.isInline() ? this.inlineStack : this.compileStack, h = S[S.length - 1];
        return h instanceof y ? h.value : h;
      },
      contextName: function(S) {
        return this.useDepths && S ? "depths[" + S + "]" : "depth" + S;
      },
      quotedString: function(S) {
        return this.source.quotedString(S);
      },
      objectLiteral: function(S) {
        return this.source.objectLiteral(S);
      },
      aliasable: function(S) {
        var h = this.aliases[S];
        return h ? (h.referenceCount++, h) : (h = this.aliases[S] = this.source.wrap(S), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(S, h, C) {
        var A = [], O = this.setupHelperArgs(h, S, A, C), x = this.nameLookup("helpers", h, "helper"), z = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: A,
          paramsInit: O,
          name: x,
          callParams: [z].concat(A)
        };
      },
      setupParams: function(S, h, C) {
        var A = {}, O = [], x = [], z = [], l = !C, _ = void 0;
        l && (C = []), A.name = this.quotedString(S), A.hash = this.popStack(), this.trackIds && (A.hashIds = this.popStack()), this.stringParams && (A.hashTypes = this.popStack(), A.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (A.fn = k || "container.noop", A.inverse = w || "container.noop");
        for (var R = h; R--; )
          _ = this.popStack(), C[R] = _, this.trackIds && (z[R] = this.popStack()), this.stringParams && (x[R] = this.popStack(), O[R] = this.popStack());
        return l && (A.args = this.source.generateArray(C)), this.trackIds && (A.ids = this.source.generateArray(z)), this.stringParams && (A.types = this.source.generateArray(x), A.contexts = this.source.generateArray(O)), this.options.data && (A.data = "data"), this.useBlockParams && (A.blockParams = "blockParams"), A;
      },
      setupHelperArgs: function(S, h, C, A) {
        var O = this.setupParams(S, h, C);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), A ? (this.useRegister("options"), C.push("options"), ["options=", O]) : C ? (C.push(O), "") : O;
      }
    }, (function() {
      for (var v = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = g.RESERVED_WORDS = {}, h = 0, C = v.length; h < C; h++)
        S[v[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(v) {
      return !g.RESERVED_WORDS[v] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(v);
    };
    function E(v, S, h, C, A) {
      var O = S.popStack(), x = h.length;
      for (v && x--; C < x; C++)
        O = S.nameLookup(O, h[C], A);
      return v ? [S.aliasable("container.strict"), "(", O, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : O;
    }
    r.default = g, n.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var v0;
function kS() {
  return v0 || (v0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    var i = cS(), u = s(i), c = Ny(), f = s(c), m = pS(), p = mS(), y = CS(), g = s(y), E = Oy(), v = s(E), S = xy(), h = s(S), C = u.default.create;
    function A() {
      var x = C();
      return x.compile = function(z, l) {
        return p.compile(z, l, x);
      }, x.precompile = function(z, l) {
        return p.precompile(z, l, x);
      }, x.AST = f.default, x.Compiler = p.Compiler, x.JavaScriptCompiler = g.default, x.Parser = m.parser, x.parse = m.parse, x.parseWithoutProcessing = m.parseWithoutProcessing, x;
    }
    var O = A();
    O.create = A, h.default(O), O.Visitor = v.default, O.default = O, r.default = O, n.exports = r.default;
  })(xu, xu.exports)), xu.exports;
}
var yn = kS();
const Me = SillyTavern.getContext();
new X0("dumb", {}).getSettings();
async function Dy({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: i,
  entriesGroupByWorldName: u,
  promptSettings: c,
  mainContextList: f,
  maxResponseToken: m,
  continueFrom: p
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const g = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((x) => x.id === n);
  if (!g)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  const E = g.api ? Me.CONNECT_API_MAP[g.api].selected : void 0;
  if (!E)
    throw new Error(`Could not determine API for profile "${g.name}".`);
  const v = {};
  v.user = "{{user}}", v.char = "{{char}}", v.persona = "{{persona}}", v.blackListedEntries = i.blackListedEntries;
  const S = r.trim();
  p && p.mode === "revise" ? v.userInstructions = "" : v.userInstructions = yn.compile(S, { noEscape: !0 })(v);
  {
    const x = {};
    Object.entries(u).filter(
      ([z, l]) => l.length > 0 && i.selectedWorldNames.includes(z) && l.some((_) => !_?.disable)
    ).forEach(([z, l]) => {
      let _ = l.filter((k) => !k?.disable);
      const w = i.selectedEntryUids?.[z];
      if (w && w.length > 0) {
        const k = new Set(w);
        _ = _.filter((R) => k.has(R.uid));
      }
      _.length > 0 && (x[z] = _);
    }), v.currentLorebooks = x;
  }
  {
    const x = {};
    Object.entries(i.suggestedEntries).filter(([z, l]) => l.length > 0).forEach(([z, l]) => {
      x[z] = l.filter(
        (_) => !(z === p?.worldName && _.uid === p.entry.uid && _.comment === p.entry.comment)
      );
    }), v.suggestedLorebooks = x;
  }
  const h = [];
  {
    for (const x of f) {
      if (x.promptName === "chatHistory") {
        h.push(...(await iy(E, s)).result);
        continue;
      }
      const z = c[x.promptName];
      if (!z)
        continue;
      const l = {
        role: x.role,
        content: yn.compile(z.content, { noEscape: !0 })(v)
      };
      l.content = Me.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: F8(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: Q8(p.worldName, p.entry)
    }), S && h.push({
      role: "user",
      content: S
    })));
  }
  const C = await Me.ConnectionManagerRequestService.sendRequest(
    n,
    h,
    m
  ), A = h.find((x) => x.role === "assistant");
  if (!C.content)
    return {};
  let O = X8(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? A?.content : void 0
  });
  return Object.keys(O).length === 0 ? {} : (Object.entries(O).forEach(([x, z]) => {
    u[x] && z.forEach((l) => {
      Object.assign(l, ea(l));
      const _ = u[x]?.find((w) => w.uid === l.uid);
      _ && (_n(l).length === 0 && (l.key = _n(_)), l.comment || (l.comment = _.comment)), Object.assign(l, ea(l));
    });
  }), O = p ? { [p.worldName]: [O[p.worldName][0]] } : O, O);
}
function AS(n, r, s) {
  s[r] || (s[r] = []);
  const i = s[r], u = i.findIndex((p) => p.uid === n.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = i[u];
  else {
    const p = { entries: {} };
    i.forEach((E) => p.entries[E.uid] = E);
    const y = Zf(r, p);
    if (!y)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const g = i.length > 0 ? i[i.length - 1] : void 0;
    if (g) {
      const E = y.uid;
      Object.assign(y, g), y.uid = E;
    }
    c = y, i.push(c);
  }
  const m = ea(n);
  return c.key = m.key, c.content = m.content, c.comment = m.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function TS() {
  const n = Me.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((i) => i.name?.includes(s))?.name
  }));
}
const Ri = "SillyTavern-WorldInfo-Recommender", xS = "0.2.0", NS = "F_1.4", OS = {
  EXTENSION: "worldInfoRecommender"
}, Wu = [
  "stDescription",
  "currentLorebooks",
  "blackListedEntries",
  "suggestedLorebooks",
  "responseRules",
  "taskDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription",
  "reviseGlobalStateUpdate",
  "reviseGlobalStateUpdateAddedModified",
  "reviseGlobalStateUpdateRemoved"
], st = {
  stDescription: U3,
  currentLorebooks: H3,
  blackListedEntries: q3,
  suggestedLorebooks: Z3,
  responseRules: G3,
  taskDescription: V3,
  reviseJsonPrompt: Y3,
  reviseXmlPrompt: $3,
  reviseTaskDescription: X3,
  reviseGlobalStateUpdate: K3,
  reviseGlobalStateUpdateAddedModified: F3,
  reviseGlobalStateUpdateRemoved: Q3
}, Qf = {
  version: xS,
  formatVersion: NS,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "all",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    authorNote: !0,
    worldInfo: !0,
    suggestedEntries: !0
  },
  defaultPromptEngineeringMode: "native",
  prompts: {
    stDescription: {
      label: "SillyTavern Description",
      content: st.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: st.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: st.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: st.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: st.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: st.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: st.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: st.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: st.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    reviseGlobalStateUpdate: {
      content: st.reviseGlobalStateUpdate,
      isDefault: !0,
      label: "Revise Global State Update (Wrapper)"
    },
    reviseGlobalStateUpdateAddedModified: {
      content: st.reviseGlobalStateUpdateAddedModified,
      isDefault: !0,
      label: "Revise Global State (Added/Modified)"
    },
    reviseGlobalStateUpdateRemoved: {
      content: st.reviseGlobalStateUpdateRemoved,
      isDefault: !0,
      label: "Revise Global State (Removed)"
    }
  },
  promptPreset: "default",
  promptPresets: {
    default: {
      content: ""
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          promptName: "chatHistory",
          // this is exception, since chat history is not exactly a prompt
          enabled: !0,
          role: "system"
        },
        {
          promptName: "stDescription",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "currentLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "blackListedEntries",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "suggestedLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "responseRules",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "taskDescription",
          enabled: !0,
          role: "user"
        }
      ]
    }
  }
};
function y0(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let i = !1;
  return s.map((u, c) => {
    const f = u.replace(/^\d+/, "");
    if (f) {
      const m = i ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return i || (i = !0), m;
    }
    return "";
  }).join("");
}
const Pt = new X0(OS.EXTENSION, Qf);
async function MS() {
  return new Promise((n, r) => {
    Pt.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const i = {
              ...Qf,
              ...s
            };
            return delete i.stWorldInfoPrompt, delete i.usingDefaultStWorldInfoPrompt, delete i.lorebookDefinitionPrompt, delete i.usingDefaultLorebookDefinitionPrompt, delete i.lorebookRulesPrompt, delete i.usingDefaultLorebookRulesPrompt, delete i.responseRulesPrompt, delete i.usingDefaultResponseRulesPrompt, i;
          }
        },
        {
          from: "F_1.1",
          to: "F_1.2",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.2", i.prompts.taskDescription.content === `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}` ? (i.prompts.taskDescription.content = st.taskDescription, i.prompts.taskDescription.isDefault = !0) : i.prompts.taskDescription.isDefault = !1, i;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.3", i.defaultPromptEngineeringMode = "native", i.prompts || (i.prompts = {}), i.prompts.reviseJsonPrompt = {
              content: st.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, i.prompts.reviseXmlPrompt = {
              content: st.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, i.prompts.reviseTaskDescription = {
              content: st.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (i.prompts.currentLorebooks.content = st.currentLorebooks, i.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (i.prompts.blackListedEntries.content = st.blackListedEntries, i.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (i.prompts.suggestedLorebooks.content = st.suggestedLorebooks, i.prompts.suggestedLorebooks.isDefault = !0), i;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.4", i.prompts || (i.prompts = {}), i.prompts.reviseGlobalStateUpdate = {
              content: st.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, i.prompts.reviseGlobalStateUpdateAddedModified = {
              content: st.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, i.prompts.reviseGlobalStateUpdateRemoved = {
              content: st.reviseGlobalStateUpdateRemoved,
              isDefault: !0,
              label: "Revise Global State (Removed)"
            }, i;
          }
        }
      ]
    }).then((s) => {
      n();
    }).catch((s) => {
      console.error(`[${Ri}] Error initializing settings:`, s), Se("error", `[${Ri}] Failed to initialize settings: ${s.message}`), Me.Popup.show.confirm(
        `[${Ri}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((i) => {
        i && (Pt.resetSettings(), Se("success", `[${Ri}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const xe = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = se.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("button", { className: u, ...i, children: n });
}, zy = ({ label: n, className: r, overrideDefaults: s = !1, type: i = "text", ...u }) => {
  const c = se.useMemo(() => {
    const f = [];
    return s || (i === "text" || i === "number" || i === "password" || i === "email" || i === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, i]);
  if (i === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: f, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...u }),
      n && /* @__PURE__ */ N.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: i, className: c, ...u });
}, Sl = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = se.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("select", { className: u, ...i, children: n });
}, Sr = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = se.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("textarea", { className: u, ...i, children: n });
};
var RS = $0(), Lt = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(Lt || {}), Qr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Qr || {});
const jS = SillyTavern.getContext(), Wn = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: i = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = se.useRef(null), p = se.useRef(null), [y, g] = se.useState(!1), [E, v] = se.useState(null), S = se.useRef(jS.uuidv4()), h = se.useRef({
    id: S.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  se.useEffect(() => {
    const x = m.current;
    if (!x) return;
    const z = (l) => {
      l.preventDefault(), u || C(Qr.CANCELLED);
    };
    return x.addEventListener("cancel", z), h.current.dlg = x, h.current.mainInput = p.current, Ei.util.popups.push(h.current), x.showModal || (x.classList.add("poly_dialog"), Kg.registerDialog(x), new ResizeObserver((l) => {
      for (const _ of l)
        Kg.reposition(_.target);
    }).observe(x)), x.showModal(), qd(), () => {
      Qg(Ei.util.popups, h.current), qd(), x.removeEventListener("cancel", z);
    };
  }, []);
  const C = async (x) => {
    var z, l;
    let _ = x;
    if (r === Lt.INPUT && (x >= Qr.AFFIRMATIVE ? _ = (z = p.current) == null ? void 0 : z.value : x === Qr.NEGATIVE ? _ = !1 : x === Qr.CANCELLED ? _ = null : _ = !1), (l = i.customInputs) != null && l.length) {
      const k = new Map(
        i.customInputs.map((R) => {
          var L;
          const j = (L = m.current) == null ? void 0 : L.querySelector(`#${R.id}`);
          return [j.id, j.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = x, h.current.value = _, i.onClosing && !await i.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Ei.util.lastResult = {
      value: _,
      result: x,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), qd(), Q1(w, async () => {
      var k;
      if (w.close(), i.onClose && await i.onClose(h.current), Qg(Ei.util.popups, h.current), Ei.util.popups.length > 0) {
        const R = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), L = R?.getAttribute("data-id"), j = Ei.util.popups.find((P) => P.id === L);
        j && j.lastFocus && j.lastFocus.focus();
      }
      c(_);
    }));
  }, A = (x) => {
    x.target instanceof HTMLElement && x.target !== m.current && (v(x.target), h.current.lastFocus = x.target);
  }, O = async (x) => {
  };
  return RS.createPortal(
    /* @__PURE__ */ N.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const x = ["popup"];
          return i.wide && x.push("wide_dialogue_popup"), i.wider && x.push("wider_dialogue_popup"), i.large && x.push("large_dialogue_popup"), i.transparent && x.push("transparent_dialogue_popup"), i.allowHorizontalScrolling && x.push("horizontal_scrolling_dialogue_popup"), i.allowVerticalScrolling && x.push("vertical_scrolling_dialogue_popup"), i.animation && x.push(`popup--animation-${i.animation}`), x.join(" ");
        })(),
        "data-id": S.current,
        onKeyDown: O,
        onFocus: A,
        children: /* @__PURE__ */ N.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ N.jsx("div", { className: "popup-content", children: n }),
          r === Lt.INPUT && /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: i.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          i.customInputs && /* @__PURE__ */ N.jsx("div", { className: "popup-inputs", children: i.customInputs.map((x) => /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: x.id, children: [
            /* @__PURE__ */ N.jsx("input", { type: "checkbox", id: x.id, defaultChecked: x.defaultState }),
            /* @__PURE__ */ N.jsx("span", { "data-i18n": x.label, children: x.label }),
            x.tooltip && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: x.tooltip,
                "data-i18n": `[title]${x.tooltip}`
              }
            )
          ] }, x.id)) }),
          r !== Lt.DISPLAY && /* @__PURE__ */ N.jsxs("div", { className: "popup-controls", children: [
            (f = i.customButtons) == null ? void 0 : f.map((x, z) => {
              const l = typeof x == "string" ? { text: x, result: z + 2 } : x;
              return /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${l.classes ?? ""}`,
                  "data-result": l.result,
                  onClick: () => {
                    var _;
                    (_ = l.action) == null || _.call(l), C(l.result ?? z + 2);
                  },
                  "data-i18n": l.text,
                  children: l.text
                },
                z
              );
            }),
            r !== Lt.DISPLAY && i.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Qr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof i.okButton == "string" ? i.okButton : "OK"
              }
            ),
            r !== Lt.DISPLAY && i.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Qr.NEGATIVE),
                "data-result": "0",
                children: typeof i.cancelButton == "string" ? i.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Lt.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Qr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Zs = (n, r, s) => {
  if (!n || !n.api)
    return !1;
  const i = s[n.api];
  if (!i || !Object.hasOwn(r, i.selected))
    return !1;
  switch (i.selected) {
    case "openai":
      return !!i.source;
    case "textgenerationwebui":
      return !!i.type;
  }
  return !1;
}, _r = SillyTavern.getContext(), Ly = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: i,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = se.useState(n ?? ""), [y, g] = se.useState(Date.now()), { isEnabled: E, profiles: v, connectApiMap: S } = se.useMemo(() => {
    var A, O;
    return (A = _r.extensionSettings.disabledExtensions) != null && A.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = _r.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: _r.CONNECT_API_MAP
    };
  }, [y]);
  se.useEffect(() => {
    if (!E) return;
    const A = (z) => {
      Zs(z, r, S) && (g(Date.now()), u?.(z));
    }, O = (z, l) => {
      const _ = Zs(z, r, S), w = Zs(l, r, S);
      (_ || w) && g(Date.now()), c?.(z, l), m === z.id && !w && (p(""), i?.(void 0));
    }, x = (z) => {
      Zs(z, r, S) && (g(Date.now()), f?.(z), m === z.id && (p(""), i?.(void 0)));
    };
    return _r.eventSource.on("CONNECTION_PROFILE_CREATED", A), _r.eventSource.on("CONNECTION_PROFILE_UPDATED", O), _r.eventSource.on("CONNECTION_PROFILE_DELETED", x), () => {
      _r.eventSource.removeListener("CONNECTION_PROFILE_CREATED", A), _r.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), _r.eventSource.removeListener("CONNECTION_PROFILE_DELETED", x);
    };
  }, [E, m, r, S, i, u, c, f]);
  const h = se.useMemo(() => {
    if (!E) return [];
    const A = v.filter((x) => Zs(x, r, S)), O = {};
    for (const [x, z] of Object.entries(r))
      O[x] = { label: z, profiles: [] };
    for (const x of A) {
      const z = S[x.api];
      O[z.selected] && O[z.selected].profiles.push(x);
    }
    for (const x of Object.values(O))
      x.profiles.sort((z, l) => (z.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(O).filter((x) => x.profiles.length > 0);
  }, [E, v, r, S]), C = se.useCallback(
    (A) => {
      const O = A.target.value;
      p(O);
      const x = v.find((z) => z.id === O);
      i?.(x);
    },
    [v, i]
  );
  return E ? /* @__PURE__ */ N.jsxs(Sl, { value: m, onChange: C, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: s }),
    h.map((A) => /* @__PURE__ */ N.jsx("optgroup", { label: A.label, children: A.profiles.map((O) => /* @__PURE__ */ N.jsx("option", { value: O.id, children: O.name }, O.id)) }, A.label))
  ] }) : /* @__PURE__ */ N.jsx(Sl, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, DS = hl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: i, onToggle: u, onDelete: c, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: y,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: v = !0,
      canSelect: S = !0,
      selectOptions: h = [],
      selectValue: C
    } = n, A = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !y ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, x = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ N.jsxs("li", { className: "sortable-list-item", style: A, "data-id": m, children: [
      /* @__PURE__ */ N.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ N.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: p
        }
      ),
      i && v && S && /* @__PURE__ */ N.jsx(
        Sl,
        {
          value: C,
          onChange: (z) => f(m, z.target.value),
          disabled: !y,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : h.map((z) => /* @__PURE__ */ N.jsx("option", { value: z.value, children: z.label }, z.value))
        }
      ),
      i && (!v || !S) && /* @__PURE__ */ N.jsx("span", { style: x }),
      r && E && /* @__PURE__ */ N.jsx(
        xe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${y ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: y ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      r && !E && /* @__PURE__ */ N.jsx("span", { style: x }),
      s && g && /* @__PURE__ */ N.jsx(
        xe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(m)
        }
      ),
      s && !g && /* @__PURE__ */ N.jsx("span", { style: { ...x, marginRight: 0 } })
    ] });
  }
), Py = ({
  items: n,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: i = !1,
  showSelectInput: u = !1,
  sortableJsOptions: c = {}
}) => {
  const f = se.useRef(null), m = se.useRef(null);
  se.useEffect(() => (f.current && (m.current = Ae.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...c,
    onEnd: (E) => {
      const { oldIndex: v, newIndex: S } = E;
      if (v === void 0 || S === void 0 || v === S)
        return;
      const h = Array.from(n), [C] = h.splice(v, 1);
      h.splice(S, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [n, r, c]);
  const p = (E) => {
    r(n.map((v) => v.id === E ? { ...v, enabled: !v.enabled } : v));
  }, y = (E) => {
    r(n.filter((v) => v.id !== E));
  }, g = (E, v) => {
    r(n.map((S) => S.id === E ? { ...S, selectValue: v } : S));
  };
  return /* @__PURE__ */ N.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((E) => /* @__PURE__ */ N.jsx(
    DS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: i,
      showSelectInput: u,
      onToggle: p,
      onDelete: y,
      onSelectChange: g
    },
    E.id
  )) });
}, Iy = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: i = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: y = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: v,
  containerClasses: S
}) => {
  const [h, C] = se.useState(!1), [A, O] = se.useState(""), x = se.useRef(null);
  se.useEffect(() => {
    const k = (R) => {
      x.current && !x.current.contains(R.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), se.useEffect(() => {
    h || O("");
  }, [h]);
  const z = se.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new Pi(n, k);
  }, [n, p, E]), l = se.useMemo(() => !p || !A.trim() || !z ? n : z.search(A.trim()).map((k) => k.item), [n, A, p, z]), _ = async (k) => {
    let R;
    c ? R = r.includes(k) ? r.filter((L) => L !== k) : [...r, k] : R = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, R))) && (s(R), u && C(!1));
  }, w = se.useMemo(() => {
    var k;
    return r.length === 0 ? i : r.length === 1 ? ((k = n.find((R) => R.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, i]);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: x,
      className: `fancy-dropdown-container ${S ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && C(!h),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ N.jsx("span", { className: "fancy-dropdown-trigger-text", children: w }),
              /* @__PURE__ */ N.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              p && /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ N.jsx(
                    zy,
                    {
                      type: "text",
                      placeholder: y,
                      value: A,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: v
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ N.jsx(
                zS,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: _
                },
                k.value
              )) : /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: g
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, zS = hl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [i, u] = se.useState(!1);
  return /* @__PURE__ */ N.jsxs(
    "li",
    {
      onClick: () => s(n.value),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : i ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ N.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ N.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), pf = SillyTavern.getContext(), Nf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: i,
  onChange: u,
  onItemsChange: c,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: y,
  onRename: g,
  onDelete: E,
  buttons: v
}) => {
  const S = se.useMemo(() => r.find((x) => x.value === n), [r, n]), h = se.useCallback((x) => x ? s.includes(x) : !1, [s]), C = async () => {
    const x = await pf.Popup.show.input(
      `Create a new ${i}`,
      `Please enter a name for the new ${i}:`,
      ""
    );
    if (!x || x.trim() === "") return;
    const z = x.trim();
    if (r.some((_) => _.value === z)) {
      await Se("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: z, label: z };
    if (y) {
      const _ = await Promise.resolve(y(z));
      if (!_.confirmed) return;
      _.value && (typeof _.value == "string" ? l = { value: _.value, label: _.value } : l = _.value);
    }
    c([...r, l]), u(l.value, n);
  }, A = async () => {
    if (!S) {
      await Se("warning", `Please select a ${i} to rename.`);
      return;
    }
    if (h(S.value)) {
      await Se("warning", `This ${i} cannot be renamed as it is read-only.`);
      return;
    }
    const x = await pf.Popup.show.input(
      `Rename ${i}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!x || x.trim() === "" || x.trim() === S.value) return;
    const z = x.trim();
    if (r.some((w) => w.value === z)) {
      await Se("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: z, label: z };
    if (g) {
      const w = await Promise.resolve(g(S.value, z));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const _ = r.map((w) => w.value === S.value ? l : w);
    c(_), u(l.value, n);
  }, O = async () => {
    var x;
    if (!S) {
      await Se("warning", `Please select a ${i} to delete.`);
      return;
    }
    if (h(S.value)) {
      await Se("warning", `This ${i} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pf.Popup.show.confirm(
      `Delete ${i}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const z = r.findIndex((w) => w.value === S.value), l = r.filter((w) => w.value !== S.value);
    c(l);
    let _;
    if (l.length > 0) {
      const w = Math.min(z, l.length - 1);
      _ = (x = l[w]) == null ? void 0 : x.value;
    }
    u(_, n);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(Sl, { value: n ?? "", onChange: (x) => u(x.target.value, n), children: r.map((x) => /* @__PURE__ */ N.jsx("option", { value: x.value, children: x.label }, x.value)) }),
    f && /* @__PURE__ */ N.jsx(
      xe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${i}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${i}`
      }
    ),
    m && /* @__PURE__ */ N.jsx(
      xe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${i}`,
        onClick: A,
        disabled: !S,
        "data-i18n": `[title]Rename selected ${i}`
      }
    ),
    p && /* @__PURE__ */ N.jsx(
      xe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${i}`,
        onClick: O,
        disabled: !S,
        "data-i18n": `[title]Delete selected ${i}`
      }
    ),
    v?.map((x) => /* @__PURE__ */ N.jsx(
      xe,
      {
        className: x.icon,
        title: x.title,
        onClick: x.onClick,
        disabled: x.disabled,
        "data-i18n": x.i18n ? `[title]${x.i18n}` : void 0
      },
      x.key
    ))
  ] });
}, By = () => {
  const [, n] = se.useState(0);
  return se.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, mf = SillyTavern.getContext(), LS = () => {
  const n = By(), r = Pt.getSettings(), [s, i] = se.useState(Wu[0]), u = se.useCallback(
    (l) => {
      const _ = Pt.getSettings();
      l(_), Pt.saveSettings(), n();
    },
    [n]
  ), c = se.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((l) => ({
      value: l,
      label: l
    })),
    [r.mainContextTemplatePresets]
  ), f = se.useMemo(
    () => Object.keys(r.prompts).map((l) => {
      const _ = r.prompts[l];
      return {
        value: l,
        label: _ ? `${_.label} (${l})` : l
      };
    }),
    [r.prompts]
  ), m = se.useMemo(() => {
    const l = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return l ? l.prompts.map((_) => {
      const w = r.prompts[_.promptName], k = w ? `${w.label} (${_.promptName})` : _.promptName;
      return {
        id: _.promptName,
        label: k,
        enabled: _.enabled,
        selectValue: _.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (l) => {
    u((_) => {
      _.mainContextTemplatePreset = l ?? "default";
    });
  }, y = (l) => {
    u((_) => {
      const w = {}, k = _.mainContextTemplatePresets;
      l.forEach((R) => {
        w[R.value] = k[R.value] ?? structuredClone(k[_.mainContextTemplatePreset] ?? k.default);
      }), _.mainContextTemplatePresets = w;
    });
  }, g = (l) => {
    u((_) => {
      const w = l.map((R) => ({
        promptName: R.id,
        enabled: R.enabled,
        role: R.selectValue ?? "user"
      })), k = {
        ..._.mainContextTemplatePresets[_.mainContextTemplatePreset],
        prompts: w
      };
      _.mainContextTemplatePresets = {
        ..._.mainContextTemplatePresets,
        [_.mainContextTemplatePreset]: k
      };
    });
  }, E = async () => {
    await mf.Popup.show.confirm("Restore default", "Are you sure?") && u((_) => {
      _.mainContextTemplatePresets = {
        ..._.mainContextTemplatePresets,
        default: structuredClone(Qf.mainContextTemplatePresets.default)
      }, _.mainContextTemplatePreset = "default";
    });
  }, v = (l) => {
    u((_) => {
      const w = {}, k = _.prompts, R = Object.keys(k), L = l.map((P) => P.value);
      L.forEach((P) => {
        w[P] = k[P] ?? { content: "", isDefault: !1, label: P };
      }), _.prompts = w;
      const j = R.filter((P) => !L.includes(P));
      if (j.length > 0) {
        const P = Object.fromEntries(
          Object.entries(_.mainContextTemplatePresets).map(([Z, F]) => [
            Z,
            {
              ...F,
              prompts: F.prompts.filter((Y) => !j.includes(Y.promptName))
            }
          ])
        );
        _.mainContextTemplatePresets = P;
      }
    });
  }, S = (l) => {
    const _ = y0(l);
    return _ ? r.prompts[_] ? (Se("error", `Prompt name already exists: ${_}`), { confirmed: !1 }) : (u((w) => {
      w.prompts = {
        ...w.prompts,
        [_]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: l
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, R]) => [
          k,
          {
            ...R,
            prompts: [...R.prompts, { enabled: !0, promptName: _, role: "user" }]
          }
        ])
      );
    }), i(_), { confirmed: !0, value: _ }) : (Se("error", `Invalid prompt name: ${l}`), { confirmed: !1 });
  }, h = (l, _) => {
    const w = y0(_);
    return w ? r.prompts[w] ? (Se("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
      const { [l]: R, ...L } = k.prompts;
      k.prompts = {
        ...L,
        [w]: { ...R, label: _ }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([j, P]) => [
          j,
          {
            ...P,
            prompts: P.prompts.map((Z) => Z.promptName === l ? { ...Z, promptName: w } : Z)
          }
        ])
      );
    }), i(w), { confirmed: !0, value: w }) : (Se("error", `Invalid prompt name: ${_}`), { confirmed: !1 });
  }, C = (l) => {
    const _ = l.target.value;
    u((w) => {
      const k = w.prompts[s];
      k && (w.prompts = {
        ...w.prompts,
        [s]: {
          ...k,
          content: _,
          isDefault: Wu.includes(s) ? st[s] === _ : !1
        }
      });
    });
  }, A = async () => {
    const l = r.prompts[s];
    if (!l) return Se("warning", "No prompt selected.");
    await mf.Popup.show.confirm("Restore Default", `Restore default for "${l.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: st[s]
        }
      };
    });
  }, O = async () => {
    await mf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Pt.resetSettings(), n(), Se("success", "Settings reset. The UI has been updated."));
  }, x = r.prompts[s]?.content ?? "", z = Wu.includes(s);
  return /* @__PURE__ */ N.jsxs("div", { className: "world-info-recommender-settings", children: [
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Nf,
        {
          label: "Template",
          items: c,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: y,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ N.jsx(
        Py,
        {
          items: m,
          onItemsChange: g,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: "Prompt Templates" }),
        z && /* @__PURE__ */ N.jsx(
          xe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: A
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Nf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: Wu,
          onChange: (l) => i(l ?? ""),
          onItemsChange: v,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: S,
          onRename: h
        }
      ),
      /* @__PURE__ */ N.jsx(
        Sr,
        {
          value: x,
          onChange: C,
          placeholder: "Edit the selected system prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ N.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ N.jsxs(xe, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ N.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
};
var fl = { exports: {} }, PS = fl.exports, _0;
function IS() {
  return _0 || (_0 = 1, (function(n) {
    (function() {
      function r(l) {
        var _ = {
          omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: !1,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: !1,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: !1,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: !1,
            describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: !1,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: !1,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: !1,
            describe: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: !1,
            describe: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: !1,
            describe: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: !1,
            describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: !1,
            describe: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: !0,
            describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: !1,
            describe: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: !1,
            describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: !1,
            describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: !1,
            describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          ellipsis: {
            defaultValue: !0,
            describe: "Replaces three dots with the ellipsis unicode character",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: !1,
            describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: !1,
            describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: !1,
            describe: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (l === !1)
          return JSON.parse(JSON.stringify(_));
        var w = {};
        for (var k in _)
          _.hasOwnProperty(k) && (w[k] = _[k].defaultValue);
        return w;
      }
      function s() {
        var l = r(!0), _ = {};
        for (var w in l)
          l.hasOwnProperty(w) && (_[w] = !0);
        return _;
      }
      var i = {}, u = {}, c = {}, f = r(!0), m = "vanilla", p = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0
        },
        original: {
          noHeaderId: !0,
          ghCodeBlocks: !1
        },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0
        },
        vanilla: r(!0),
        allOn: s()
      };
      i.helper = {}, i.extensions = {}, i.setOption = function(l, _) {
        return f[l] = _, this;
      }, i.getOption = function(l) {
        return f[l];
      }, i.getOptions = function() {
        return f;
      }, i.resetOptions = function() {
        f = r(!0);
      }, i.setFlavor = function(l) {
        if (!p.hasOwnProperty(l))
          throw Error(l + " flavor was not found");
        i.resetOptions();
        var _ = p[l];
        m = l;
        for (var w in _)
          _.hasOwnProperty(w) && (f[w] = _[w]);
      }, i.getFlavor = function() {
        return m;
      }, i.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
      }, i.getDefaultOptions = function(l) {
        return r(l);
      }, i.subParser = function(l, _) {
        if (i.helper.isString(l))
          if (typeof _ < "u")
            u[l] = _;
          else {
            if (u.hasOwnProperty(l))
              return u[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, i.extension = function(l, _) {
        if (!i.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = i.helper.stdExtName(l), i.helper.isUndefined(_)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof _ == "function" && (_ = _()), i.helper.isArray(_) || (_ = [_]);
          var w = y(_, l);
          if (w.valid)
            c[l] = _;
          else
            throw Error(w.error);
        }
      }, i.getAllExtensions = function() {
        return c;
      }, i.removeExtension = function(l) {
        delete c[l];
      }, i.resetExtensions = function() {
        c = {};
      };
      function y(l, _) {
        var w = _ ? "Error in " + _ + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        i.helper.isArray(l) || (l = [l]);
        for (var R = 0; R < l.length; ++R) {
          var L = w + " sub-extension " + R + ": ", j = l[R];
          if (typeof j != "object")
            return k.valid = !1, k.error = L + "must be an object, but " + typeof j + " given", k;
          if (!i.helper.isString(j.type))
            return k.valid = !1, k.error = L + 'property "type" must be a string, but ' + typeof j.type + " given", k;
          var P = j.type = j.type.toLowerCase();
          if (P === "language" && (P = j.type = "lang"), P === "html" && (P = j.type = "output"), P !== "lang" && P !== "output" && P !== "listener")
            return k.valid = !1, k.error = L + "type " + P + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (P === "listener") {
            if (i.helper.isUndefined(j.listeners))
              return k.valid = !1, k.error = L + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (i.helper.isUndefined(j.filter) && i.helper.isUndefined(j.regex))
            return k.valid = !1, k.error = L + P + ' extensions must define either a "regex" property or a "filter" method', k;
          if (j.listeners) {
            if (typeof j.listeners != "object")
              return k.valid = !1, k.error = L + '"listeners" property must be an object but ' + typeof j.listeners + " given", k;
            for (var Z in j.listeners)
              if (j.listeners.hasOwnProperty(Z) && typeof j.listeners[Z] != "function")
                return k.valid = !1, k.error = L + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + Z + " must be a function but " + typeof j.listeners[Z] + " given", k;
          }
          if (j.filter) {
            if (typeof j.filter != "function")
              return k.valid = !1, k.error = L + '"filter" must be a function, but ' + typeof j.filter + " given", k;
          } else if (j.regex) {
            if (i.helper.isString(j.regex) && (j.regex = new RegExp(j.regex, "g")), !(j.regex instanceof RegExp))
              return k.valid = !1, k.error = L + '"regex" property must either be a string or a RegExp object, but ' + typeof j.regex + " given", k;
            if (i.helper.isUndefined(j.replace))
              return k.valid = !1, k.error = L + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      i.validateExtension = function(l) {
        var _ = y(l, null);
        return _.valid ? !0 : (console.warn(_.error), !1);
      }, i.hasOwnProperty("helper") || (i.helper = {}), i.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, i.helper.isFunction = function(l) {
        var _ = {};
        return l && _.toString.call(l) === "[object Function]";
      }, i.helper.isArray = function(l) {
        return Array.isArray(l);
      }, i.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, i.helper.forEach = function(l, _) {
        if (i.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (i.helper.isUndefined(_))
          throw new Error("callback param is required");
        if (!i.helper.isFunction(_))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(_);
        else if (i.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            _(l[w], w, l);
        else if (typeof l == "object")
          for (var k in l)
            l.hasOwnProperty(k) && _(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, i.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, _) {
        var w = _.charCodeAt(0);
        return "¨E" + w + "E";
      }
      i.helper.escapeCharactersCallback = g, i.helper.escapeCharacters = function(l, _, w) {
        var k = "([" + _.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var R = new RegExp(k, "g");
        return l = l.replace(R, g), l;
      }, i.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, _, w, k) {
        var R = k || "", L = R.indexOf("g") > -1, j = new RegExp(_ + "|" + w, "g" + R.replace(/g/g, "")), P = new RegExp(_, R.replace(/g/g, "")), Z = [], F, Y, W, M, B;
        do
          for (F = 0; W = j.exec(l); )
            if (P.test(W[0]))
              F++ || (Y = j.lastIndex, M = Y - W[0].length);
            else if (F && !--F) {
              B = W.index + W[0].length;
              var K = {
                left: { start: M, end: Y },
                match: { start: Y, end: W.index },
                right: { start: W.index, end: B },
                wholeMatch: { start: M, end: B }
              };
              if (Z.push(K), !L)
                return Z;
            }
        while (F && (j.lastIndex = Y));
        return Z;
      };
      i.helper.matchRecursiveRegExp = function(l, _, w, k) {
        for (var R = E(l, _, w, k), L = [], j = 0; j < R.length; ++j)
          L.push([
            l.slice(R[j].wholeMatch.start, R[j].wholeMatch.end),
            l.slice(R[j].match.start, R[j].match.end),
            l.slice(R[j].left.start, R[j].left.end),
            l.slice(R[j].right.start, R[j].right.end)
          ]);
        return L;
      }, i.helper.replaceRecursiveRegExp = function(l, _, w, k, R) {
        if (!i.helper.isFunction(_)) {
          var L = _;
          _ = function() {
            return L;
          };
        }
        var j = E(l, w, k, R), P = l, Z = j.length;
        if (Z > 0) {
          var F = [];
          j[0].wholeMatch.start !== 0 && F.push(l.slice(0, j[0].wholeMatch.start));
          for (var Y = 0; Y < Z; ++Y)
            F.push(
              _(
                l.slice(j[Y].wholeMatch.start, j[Y].wholeMatch.end),
                l.slice(j[Y].match.start, j[Y].match.end),
                l.slice(j[Y].left.start, j[Y].left.end),
                l.slice(j[Y].right.start, j[Y].right.end)
              )
            ), Y < Z - 1 && F.push(l.slice(j[Y].wholeMatch.end, j[Y + 1].wholeMatch.start));
          j[Z - 1].wholeMatch.end < l.length && F.push(l.slice(j[Z - 1].wholeMatch.end)), P = F.join("");
        }
        return P;
      }, i.helper.regexIndexOf = function(l, _, w) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(_ instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(_);
        return k >= 0 ? k + (w || 0) : k;
      }, i.helper.splitAtIndex = function(l, _) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, _), l.substring(_)];
      }, i.helper.encodeEmailAddress = function(l) {
        var _ = [
          function(w) {
            return "&#" + w.charCodeAt(0) + ";";
          },
          function(w) {
            return "&#x" + w.charCodeAt(0).toString(16) + ";";
          },
          function(w) {
            return w;
          }
        ];
        return l = l.replace(/./g, function(w) {
          if (w === "@")
            w = _[Math.floor(Math.random() * 2)](w);
          else {
            var k = Math.random();
            w = k > 0.9 ? _[2](w) : k > 0.45 ? _[1](w) : _[0](w);
          }
          return w;
        }), l;
      }, i.helper.padEnd = function(_, w, k) {
        return w = w >> 0, k = String(k || " "), _.length > w ? String(_) : (w = w - _.length, w > k.length && (k += k.repeat(w / k.length)), String(_) + k.slice(0, w));
      }, typeof console > "u" && (console = {
        warn: function(l) {
          alert(l);
        },
        log: function(l) {
          alert(l);
        },
        error: function(l) {
          throw l;
        }
      }), i.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, i.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        /* special emojis :P */
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
      }, i.Converter = function(l) {
        var _ = {}, w = [], k = [], R = {}, L = m, j = {
          parsed: {},
          raw: "",
          format: ""
        };
        P();
        function P() {
          l = l || {};
          for (var M in f)
            f.hasOwnProperty(M) && (_[M] = f[M]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (_[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          _.extensions && i.helper.forEach(_.extensions, Z);
        }
        function Z(M, B) {
          if (B = B || null, i.helper.isString(M))
            if (M = i.helper.stdExtName(M), B = M, i.extensions[M]) {
              console.warn("DEPRECATION WARNING: " + M + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), F(i.extensions[M], M);
              return;
            } else if (!i.helper.isUndefined(c[M]))
              M = c[M];
            else
              throw Error('Extension "' + M + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof M == "function" && (M = M()), i.helper.isArray(M) || (M = [M]);
          var K = y(M, B);
          if (!K.valid)
            throw Error(K.error);
          for (var ae = 0; ae < M.length; ++ae) {
            switch (M[ae].type) {
              case "lang":
                w.push(M[ae]);
                break;
              case "output":
                k.push(M[ae]);
                break;
            }
            if (M[ae].hasOwnProperty("listeners"))
              for (var I in M[ae].listeners)
                M[ae].listeners.hasOwnProperty(I) && Y(I, M[ae].listeners[I]);
          }
        }
        function F(M, B) {
          typeof M == "function" && (M = M(new i.Converter())), i.helper.isArray(M) || (M = [M]);
          var K = y(M, B);
          if (!K.valid)
            throw Error(K.error);
          for (var ae = 0; ae < M.length; ++ae)
            switch (M[ae].type) {
              case "lang":
                w.push(M[ae]);
                break;
              case "output":
                k.push(M[ae]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function Y(M, B) {
          if (!i.helper.isString(M))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof M + " given");
          if (typeof B != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
          R.hasOwnProperty(M) || (R[M] = []), R[M].push(B);
        }
        function W(M) {
          var B = M.match(/^\s*/)[0].length, K = new RegExp("^\\s{0," + B + "}", "gm");
          return M.replace(K, "");
        }
        this._dispatch = function(B, K, ae, I) {
          if (R.hasOwnProperty(B))
            for (var $ = 0; $ < R[B].length; ++$) {
              var le = R[B][$](B, K, this, ae, I);
              le && typeof le < "u" && (K = le);
            }
          return K;
        }, this.listen = function(M, B) {
          return Y(M, B), this;
        }, this.makeHtml = function(M) {
          if (!M)
            return M;
          var B = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: w,
            outputModifiers: k,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          return M = M.replace(/¨/g, "¨T"), M = M.replace(/\$/g, "¨D"), M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/\u00A0/g, "&nbsp;"), _.smartIndentationFix && (M = W(M)), M = `

` + M + `

`, M = i.subParser("detab")(M, _, B), M = M.replace(/^[ \t]+$/mg, ""), i.helper.forEach(w, function(K) {
            M = i.subParser("runExtension")(K, M, _, B);
          }), M = i.subParser("metadata")(M, _, B), M = i.subParser("hashPreCodeTags")(M, _, B), M = i.subParser("githubCodeBlocks")(M, _, B), M = i.subParser("hashHTMLBlocks")(M, _, B), M = i.subParser("hashCodeTags")(M, _, B), M = i.subParser("stripLinkDefinitions")(M, _, B), M = i.subParser("blockGamut")(M, _, B), M = i.subParser("unhashHTMLSpans")(M, _, B), M = i.subParser("unescapeSpecialChars")(M, _, B), M = M.replace(/¨D/g, "$$"), M = M.replace(/¨T/g, "¨"), M = i.subParser("completeHTMLDocument")(M, _, B), i.helper.forEach(k, function(K) {
            M = i.subParser("runExtension")(K, M, _, B);
          }), j = B.metadata, M;
        }, this.makeMarkdown = this.makeMd = function(M, B) {
          if (M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
            if (window && window.document)
              B = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var K = B.createElement("div");
          K.innerHTML = M;
          var ae = {
            preList: H(K)
          };
          V(K);
          for (var I = K.childNodes, $ = "", le = 0; le < I.length; le++)
            $ += i.subParser("makeMarkdown.node")(I[le], ae);
          function V(ne) {
            for (var te = 0; te < ne.childNodes.length; ++te) {
              var ce = ne.childNodes[te];
              ce.nodeType === 3 ? !/\S/.test(ce.nodeValue) && !/^[ ]+$/.test(ce.nodeValue) ? (ne.removeChild(ce), --te) : (ce.nodeValue = ce.nodeValue.split(`
`).join(" "), ce.nodeValue = ce.nodeValue.replace(/(\s)+/g, "$1")) : ce.nodeType === 1 && V(ce);
            }
          }
          function H(ne) {
            for (var te = ne.querySelectorAll("pre"), ce = [], re = 0; re < te.length; ++re)
              if (te[re].childElementCount === 1 && te[re].firstChild.tagName.toLowerCase() === "code") {
                var pe = te[re].firstChild.innerHTML.trim(), je = te[re].firstChild.getAttribute("data-language") || "";
                if (je === "")
                  for (var Le = te[re].firstChild.className.split(" "), ge = 0; ge < Le.length; ++ge) {
                    var he = Le[ge].match(/^language-(.+)$/);
                    if (he !== null) {
                      je = he[1];
                      break;
                    }
                  }
                pe = i.helper.unescapeHTMLEntities(pe), ce.push(pe), te[re].outerHTML = '<precode language="' + je + '" precodenum="' + re.toString() + '"></precode>';
              } else
                ce.push(te[re].innerHTML), te[re].innerHTML = "", te[re].setAttribute("prenum", re.toString());
            return ce;
          }
          return $;
        }, this.setOption = function(M, B) {
          _[M] = B;
        }, this.getOption = function(M) {
          return _[M];
        }, this.getOptions = function() {
          return _;
        }, this.addExtension = function(M, B) {
          B = B || null, Z(M, B);
        }, this.useExtension = function(M) {
          Z(M);
        }, this.setFlavor = function(M) {
          if (!p.hasOwnProperty(M))
            throw Error(M + " flavor was not found");
          var B = p[M];
          L = M;
          for (var K in B)
            B.hasOwnProperty(K) && (_[K] = B[K]);
        }, this.getFlavor = function() {
          return L;
        }, this.removeExtension = function(M) {
          i.helper.isArray(M) || (M = [M]);
          for (var B = 0; B < M.length; ++B) {
            for (var K = M[B], ae = 0; ae < w.length; ++ae)
              w[ae] === K && w.splice(ae, 1);
            for (var I = 0; I < k.length; ++I)
              k[I] === K && k.splice(I, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: k
          };
        }, this.getMetadata = function(M) {
          return M ? j.raw : j.parsed;
        }, this.getMetadataFormat = function() {
          return j.format;
        }, this._setMetadataPair = function(M, B) {
          j.parsed[M] = B;
        }, this._setMetadataFormat = function(M) {
          j.format = M;
        }, this._setMetadataRaw = function(M) {
          j.raw = M;
        };
      }, i.subParser("anchors", function(l, _, w) {
        l = w.converter._dispatch("anchors.before", l, _, w);
        var k = function(R, L, j, P, Z, F, Y) {
          if (i.helper.isUndefined(Y) && (Y = ""), j = j.toLowerCase(), R.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            P = "";
          else if (!P)
            if (j || (j = L.toLowerCase().replace(/ ?\n/g, " ")), P = "#" + j, !i.helper.isUndefined(w.gUrls[j]))
              P = w.gUrls[j], i.helper.isUndefined(w.gTitles[j]) || (Y = w.gTitles[j]);
            else
              return R;
          P = P.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var W = '<a href="' + P + '"';
          return Y !== "" && Y !== null && (Y = Y.replace(/"/g, "&quot;"), Y = Y.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), W += ' title="' + Y + '"'), _.openLinksInNewWindow && !/^#/.test(P) && (W += ' rel="noopener noreferrer" target="¨E95Eblank"'), W += ">" + L + "</a>", W;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), _.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(R, L, j, P, Z) {
          if (j === "\\")
            return L + P;
          if (!i.helper.isString(_.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var F = _.ghMentionsLink.replace(/\{u}/g, Z), Y = "";
          return _.openLinksInNewWindow && (Y = ' rel="noopener noreferrer" target="¨E95Eblank"'), L + '<a href="' + F + '"' + Y + ">" + P + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, _, w), l;
      });
      var v = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, A = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, O = function(l) {
        return function(_, w, k, R, L, j, P) {
          k = k.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var Z = k, F = "", Y = "", W = w || "", M = P || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && j && (F = j), l.openLinksInNewWindow && (Y = ' rel="noopener noreferrer" target="¨E95Eblank"'), W + '<a href="' + k + '"' + Y + ">" + Z + "</a>" + F + M;
        };
      }, x = function(l, _) {
        return function(w, k, R) {
          var L = "mailto:";
          return k = k || "", R = i.subParser("unescapeSpecialChars")(R, l, _), l.encodeEmails ? (L = i.helper.encodeEmailAddress(L + R), R = i.helper.encodeEmailAddress(R)) : L = L + R, k + '<a href="' + L + '">' + R + "</a>";
        };
      };
      i.subParser("autoLinks", function(l, _, w) {
        return l = w.converter._dispatch("autoLinks.before", l, _, w), l = l.replace(h, O(_)), l = l.replace(A, x(_, w)), l = w.converter._dispatch("autoLinks.after", l, _, w), l;
      }), i.subParser("simplifiedAutoLinks", function(l, _, w) {
        return _.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, _, w), _.excludeTrailingPunctuationFromURLs ? l = l.replace(S, O(_)) : l = l.replace(v, O(_)), l = l.replace(C, x(_, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, _, w)), l;
      }), i.subParser("blockGamut", function(l, _, w) {
        return l = w.converter._dispatch("blockGamut.before", l, _, w), l = i.subParser("blockQuotes")(l, _, w), l = i.subParser("headers")(l, _, w), l = i.subParser("horizontalRule")(l, _, w), l = i.subParser("lists")(l, _, w), l = i.subParser("codeBlocks")(l, _, w), l = i.subParser("tables")(l, _, w), l = i.subParser("hashHTMLBlocks")(l, _, w), l = i.subParser("paragraphs")(l, _, w), l = w.converter._dispatch("blockGamut.after", l, _, w), l;
      }), i.subParser("blockQuotes", function(l, _, w) {
        l = w.converter._dispatch("blockQuotes.before", l, _, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return _.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(R) {
          return R = R.replace(/^[ \t]*>[ \t]?/gm, ""), R = R.replace(/¨0/g, ""), R = R.replace(/^[ \t]+$/gm, ""), R = i.subParser("githubCodeBlocks")(R, _, w), R = i.subParser("blockGamut")(R, _, w), R = R.replace(/(^|\n)/g, "$1  "), R = R.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(L, j) {
            var P = j;
            return P = P.replace(/^  /mg, "¨0"), P = P.replace(/¨0/g, ""), P;
          }), i.subParser("hashBlock")(`<blockquote>
` + R + `
</blockquote>`, _, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, _, w), l;
      }), i.subParser("codeBlocks", function(l, _, w) {
        l = w.converter._dispatch("codeBlocks.before", l, _, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(R, L, j) {
          var P = L, Z = j, F = `
`;
          return P = i.subParser("outdent")(P, _, w), P = i.subParser("encodeCode")(P, _, w), P = i.subParser("detab")(P, _, w), P = P.replace(/^\n+/g, ""), P = P.replace(/\n+$/g, ""), _.omitExtraWLInCodeBlocks && (F = ""), P = "<pre><code>" + P + F + "</code></pre>", i.subParser("hashBlock")(P, _, w) + Z;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, _, w), l;
      }), i.subParser("codeSpans", function(l, _, w) {
        return l = w.converter._dispatch("codeSpans.before", l, _, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, R, L, j) {
            var P = j;
            return P = P.replace(/^([ \t]*)/g, ""), P = P.replace(/[ \t]*$/g, ""), P = i.subParser("encodeCode")(P, _, w), P = R + "<code>" + P + "</code>", P = i.subParser("hashHTMLSpans")(P, _, w), P;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, _, w), l;
      }), i.subParser("completeHTMLDocument", function(l, _, w) {
        if (!_.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, _, w);
        var k = "html", R = `<!DOCTYPE HTML>
`, L = "", j = `<meta charset="utf-8">
`, P = "", Z = "";
        typeof w.metadata.parsed.doctype < "u" && (R = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (j = '<meta charset="utf-8">'));
        for (var F in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(F))
            switch (F.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                L = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? j = '<meta charset="' + w.metadata.parsed.charset + `">
` : j = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                P = ' lang="' + w.metadata.parsed[F] + '"', Z += '<meta name="' + F + '" content="' + w.metadata.parsed[F] + `">
`;
                break;
              default:
                Z += '<meta name="' + F + '" content="' + w.metadata.parsed[F] + `">
`;
            }
        return l = R + "<html" + P + `>
<head>
` + L + j + Z + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, _, w), l;
      }), i.subParser("detab", function(l, _, w) {
        return l = w.converter._dispatch("detab.before", l, _, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, R) {
          for (var L = R, j = 4 - L.length % 4, P = 0; P < j; P++)
            L += " ";
          return L;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, _, w), l;
      }), i.subParser("ellipsis", function(l, _, w) {
        return _.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, _, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, _, w)), l;
      }), i.subParser("emoji", function(l, _, w) {
        if (!_.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, _, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(R, L) {
          return i.helper.emojis.hasOwnProperty(L) ? i.helper.emojis[L] : R;
        }), l = w.converter._dispatch("emoji.after", l, _, w), l;
      }), i.subParser("encodeAmpsAndAngles", function(l, _, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, _, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, _, w), l;
      }), i.subParser("encodeBackslashEscapes", function(l, _, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, _, w), l = l.replace(/\\(\\)/g, i.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, _, w), l;
      }), i.subParser("encodeCode", function(l, _, w) {
        return l = w.converter._dispatch("encodeCode.before", l, _, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, _, w), l;
      }), i.subParser("escapeSpecialCharsWithinTagAttributes", function(l, _, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, _, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, R = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(L) {
          return L.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = l.replace(R, function(L) {
          return L.replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, _, w), l;
      }), i.subParser("githubCodeBlocks", function(l, _, w) {
        return _.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, _, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, R, L, j) {
          var P = _.omitExtraWLInCodeBlocks ? "" : `
`;
          return j = i.subParser("encodeCode")(j, _, w), j = i.subParser("detab")(j, _, w), j = j.replace(/^\n+/g, ""), j = j.replace(/\n+$/g, ""), j = "<pre><code" + (L ? ' class="' + L + " language-" + L + '"' : "") + ">" + j + P + "</code></pre>", j = i.subParser("hashBlock")(j, _, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: j }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, _, w)) : l;
      }), i.subParser("hashBlock", function(l, _, w) {
        return l = w.converter._dispatch("hashBlock.before", l, _, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, _, w), l;
      }), i.subParser("hashCodeTags", function(l, _, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, _, w);
        var k = function(R, L, j, P) {
          var Z = j + i.subParser("encodeCode")(L, _, w) + P;
          return "¨C" + (w.gHtmlSpans.push(Z) - 1) + "C";
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, _, w), l;
      }), i.subParser("hashElement", function(l, _, w) {
        return function(k, R) {
          var L = R;
          return L = L.replace(/\n\n/g, `
`), L = L.replace(/^\n/, ""), L = L.replace(/\n+$/g, ""), L = `

¨K` + (w.gHtmlBlocks.push(L) - 1) + `K

`, L;
        };
      }), i.subParser("hashHTMLBlocks", function(l, _, w) {
        l = w.converter._dispatch("hashHTMLBlocks.before", l, _, w);
        var k = [
          "pre",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "table",
          "dl",
          "ol",
          "ul",
          "script",
          "noscript",
          "form",
          "fieldset",
          "iframe",
          "math",
          "style",
          "section",
          "header",
          "footer",
          "nav",
          "article",
          "aside",
          "address",
          "audio",
          "canvas",
          "figure",
          "hgroup",
          "output",
          "video",
          "p"
        ], R = function(M, B, K, ae) {
          var I = M;
          return K.search(/\bmarkdown\b/) !== -1 && (I = K + w.converter.makeHtml(B) + ae), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        _.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(M, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var L = 0; L < k.length; ++L)
          for (var j, P = new RegExp("^ {0,3}(<" + k[L] + "\\b[^>]*>)", "im"), Z = "<" + k[L] + "\\b[^>]*>", F = "</" + k[L] + ">"; (j = i.helper.regexIndexOf(l, P)) !== -1; ) {
            var Y = i.helper.splitAtIndex(l, j), W = i.helper.replaceRecursiveRegExp(Y[1], R, Z, F, "im");
            if (W === Y[1])
              break;
            l = Y[0].concat(W);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, _, w)
        ), l = i.helper.replaceRecursiveRegExp(l, function(M) {
          return `

¨K` + (w.gHtmlBlocks.push(M) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, _, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, _, w), l;
      }), i.subParser("hashHTMLSpans", function(l, _, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, _, w);
        function k(R) {
          return "¨C" + (w.gHtmlSpans.push(R) - 1) + "C";
        }
        return l = l.replace(/<[^>]+?\/>/gi, function(R) {
          return k(R);
        }), l = l.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(R) {
          return k(R);
        }), l = l.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(R) {
          return k(R);
        }), l = l.replace(/<[^>]+?>/gi, function(R) {
          return k(R);
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, _, w), l;
      }), i.subParser("unhashHTMLSpans", function(l, _, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, _, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var R = w.gHtmlSpans[k], L = 0; /¨C(\d+)C/.test(R); ) {
            var j = RegExp.$1;
            if (R = R.replace("¨C" + j + "C", w.gHtmlSpans[j]), L === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++L;
          }
          l = l.replace("¨C" + k + "C", R);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, _, w), l;
      }), i.subParser("hashPreCodeTags", function(l, _, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, _, w);
        var k = function(R, L, j, P) {
          var Z = j + i.subParser("encodeCode")(L, _, w) + P;
          return `

¨G` + (w.ghCodeBlocks.push({ text: R, codeblock: Z }) - 1) + `G

`;
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, _, w), l;
      }), i.subParser("headers", function(l, _, w) {
        l = w.converter._dispatch("headers.before", l, _, w);
        var k = isNaN(parseInt(_.headerLevelStart)) ? 1 : parseInt(_.headerLevelStart), R = _.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, L = _.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(R, function(Z, F) {
          var Y = i.subParser("spanGamut")(F, _, w), W = _.noHeaderId ? "" : ' id="' + P(F) + '"', M = k, B = "<h" + M + W + ">" + Y + "</h" + M + ">";
          return i.subParser("hashBlock")(B, _, w);
        }), l = l.replace(L, function(Z, F) {
          var Y = i.subParser("spanGamut")(F, _, w), W = _.noHeaderId ? "" : ' id="' + P(F) + '"', M = k + 1, B = "<h" + M + W + ">" + Y + "</h" + M + ">";
          return i.subParser("hashBlock")(B, _, w);
        });
        var j = _.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(j, function(Z, F, Y) {
          var W = Y;
          _.customizedHeaderId && (W = Y.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var M = i.subParser("spanGamut")(W, _, w), B = _.noHeaderId ? "" : ' id="' + P(Y) + '"', K = k - 1 + F.length, ae = "<h" + K + B + ">" + M + "</h" + K + ">";
          return i.subParser("hashBlock")(ae, _, w);
        });
        function P(Z) {
          var F, Y;
          if (_.customizedHeaderId) {
            var W = Z.match(/\{([^{]+?)}\s*$/);
            W && W[1] && (Z = W[1]);
          }
          return F = Z, i.helper.isString(_.prefixHeaderId) ? Y = _.prefixHeaderId : _.prefixHeaderId === !0 ? Y = "section-" : Y = "", _.rawPrefixHeaderId || (F = Y + F), _.ghCompatibleHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : _.rawHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : F = F.replace(/[^\w]/g, "").toLowerCase(), _.rawPrefixHeaderId && (F = Y + F), w.hashLinkCounts[F] ? F = F + "-" + w.hashLinkCounts[F]++ : w.hashLinkCounts[F] = 1, F;
        }
        return l = w.converter._dispatch("headers.after", l, _, w), l;
      }), i.subParser("horizontalRule", function(l, _, w) {
        l = w.converter._dispatch("horizontalRule.before", l, _, w);
        var k = i.subParser("hashBlock")("<hr />", _, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, _, w), l;
      }), i.subParser("images", function(l, _, w) {
        l = w.converter._dispatch("images.before", l, _, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, L = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, j = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, P = /!\[([^\[\]]+)]()()()()()/g;
        function Z(Y, W, M, B, K, ae, I, $) {
          return B = B.replace(/\s/g, ""), F(Y, W, M, B, K, ae, I, $);
        }
        function F(Y, W, M, B, K, ae, I, $) {
          var le = w.gUrls, V = w.gTitles, H = w.gDimensions;
          if (M = M.toLowerCase(), $ || ($ = ""), Y.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((M === "" || M === null) && (M = W.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + M, !i.helper.isUndefined(le[M]))
              B = le[M], i.helper.isUndefined(V[M]) || ($ = V[M]), i.helper.isUndefined(H[M]) || (K = H[M].width, ae = H[M].height);
            else
              return Y;
          W = W.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), B = B.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var ne = '<img src="' + B + '" alt="' + W + '"';
          return $ && i.helper.isString($) && ($ = $.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), ne += ' title="' + $ + '"'), K && ae && (K = K === "*" ? "auto" : K, ae = ae === "*" ? "auto" : ae, ne += ' width="' + K + '"', ne += ' height="' + ae + '"'), ne += " />", ne;
        }
        return l = l.replace(j, F), l = l.replace(L, Z), l = l.replace(R, F), l = l.replace(k, F), l = l.replace(P, F), l = w.converter._dispatch("images.after", l, _, w), l;
      }), i.subParser("italicsAndBold", function(l, _, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, _, w);
        function k(R, L, j) {
          return L + R + j;
        }
        return _.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(R, L) {
          return k(L, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(R, L) {
          return k(L, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(R, L) {
          return k(L, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : R;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : R;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : R;
        })), _.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(R, L, j) {
          return k(j, L + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(R, L, j) {
          return k(j, L + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(R, L, j) {
          return k(j, L + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : R;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : R;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : R;
        })), l = w.converter._dispatch("italicsAndBold.after", l, _, w), l;
      }), i.subParser("lists", function(l, _, w) {
        function k(j, P) {
          w.gListLevel++, j = j.replace(/\n{2,}$/, `
`), j += "¨0";
          var Z = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, F = /\n[ \t]*\n(?!¨0)/.test(j);
          return _.disableForced4SpacesIndentedSublists && (Z = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), j = j.replace(Z, function(Y, W, M, B, K, ae, I) {
            I = I && I.trim() !== "";
            var $ = i.subParser("outdent")(K, _, w), le = "";
            return ae && _.tasklists && (le = ' class="task-list-item" style="list-style-type: none;"', $ = $.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var V = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (V += " checked"), V += ">", V;
            })), $ = $.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(V) {
              return "¨A" + V;
            }), W || $.search(/\n{2,}/) > -1 ? ($ = i.subParser("githubCodeBlocks")($, _, w), $ = i.subParser("blockGamut")($, _, w)) : ($ = i.subParser("lists")($, _, w), $ = $.replace(/\n$/, ""), $ = i.subParser("hashHTMLBlocks")($, _, w), $ = $.replace(/\n\n+/g, `

`), F ? $ = i.subParser("paragraphs")($, _, w) : $ = i.subParser("spanGamut")($, _, w)), $ = $.replace("¨A", ""), $ = "<li" + le + ">" + $ + `</li>
`, $;
          }), j = j.replace(/¨0/g, ""), w.gListLevel--, P && (j = j.replace(/\s+$/, "")), j;
        }
        function R(j, P) {
          if (P === "ol") {
            var Z = j.match(/^ *(\d+)\./);
            if (Z && Z[1] !== "1")
              return ' start="' + Z[1] + '"';
          }
          return "";
        }
        function L(j, P, Z) {
          var F = _.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, Y = _.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, W = P === "ul" ? F : Y, M = "";
          if (j.search(W) !== -1)
            (function K(ae) {
              var I = ae.search(W), $ = R(j, P);
              I !== -1 ? (M += `

<` + P + $ + `>
` + k(ae.slice(0, I), !!Z) + "</" + P + `>
`, P = P === "ul" ? "ol" : "ul", W = P === "ul" ? F : Y, K(ae.slice(I))) : M += `

<` + P + $ + `>
` + k(ae, !!Z) + "</" + P + `>
`;
            })(j);
          else {
            var B = R(j, P);
            M = `

<` + P + B + `>
` + k(j, !!Z) + "</" + P + `>
`;
          }
          return M;
        }
        return l = w.converter._dispatch("lists.before", l, _, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, P, Z) {
            var F = Z.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(P, F, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, P, Z, F) {
            var Y = F.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(Z, Y, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, _, w), l;
      }), i.subParser("metadata", function(l, _, w) {
        if (!_.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, _, w);
        function k(R) {
          w.metadata.raw = R, R = R.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), R = R.replace(/\n {4}/g, " "), R.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(L, j, P) {
            return w.metadata.parsed[j] = P, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(R, L, j) {
          return k(j), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(R, L, j) {
          return L && (w.metadata.format = L), k(j), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, _, w), l;
      }), i.subParser("outdent", function(l, _, w) {
        return l = w.converter._dispatch("outdent.before", l, _, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, _, w), l;
      }), i.subParser("paragraphs", function(l, _, w) {
        l = w.converter._dispatch("paragraphs.before", l, _, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), R = [], L = k.length, j = 0; j < L; j++) {
          var P = k[j];
          P.search(/¨(K|G)(\d+)\1/g) >= 0 ? R.push(P) : P.search(/\S/) >= 0 && (P = i.subParser("spanGamut")(P, _, w), P = P.replace(/^([ \t]*)/g, "<p>"), P += "</p>", R.push(P));
        }
        for (L = R.length, j = 0; j < L; j++) {
          for (var Z = "", F = R[j], Y = !1; /¨(K|G)(\d+)\1/.test(F); ) {
            var W = RegExp.$1, M = RegExp.$2;
            W === "K" ? Z = w.gHtmlBlocks[M] : Y ? Z = i.subParser("encodeCode")(w.ghCodeBlocks[M].text, _, w) : Z = w.ghCodeBlocks[M].codeblock, Z = Z.replace(/\$/g, "$$$$"), F = F.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, Z), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(F) && (Y = !0);
          }
          R[j] = F;
        }
        return l = R.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, _, w);
      }), i.subParser("runExtension", function(l, _, w, k) {
        if (l.filter)
          _ = l.filter(_, k.converter, w);
        else if (l.regex) {
          var R = l.regex;
          R instanceof RegExp || (R = new RegExp(R, "g")), _ = _.replace(R, l.replace);
        }
        return _;
      }), i.subParser("spanGamut", function(l, _, w) {
        return l = w.converter._dispatch("spanGamut.before", l, _, w), l = i.subParser("codeSpans")(l, _, w), l = i.subParser("escapeSpecialCharsWithinTagAttributes")(l, _, w), l = i.subParser("encodeBackslashEscapes")(l, _, w), l = i.subParser("images")(l, _, w), l = i.subParser("anchors")(l, _, w), l = i.subParser("autoLinks")(l, _, w), l = i.subParser("simplifiedAutoLinks")(l, _, w), l = i.subParser("emoji")(l, _, w), l = i.subParser("underline")(l, _, w), l = i.subParser("italicsAndBold")(l, _, w), l = i.subParser("strikethrough")(l, _, w), l = i.subParser("ellipsis")(l, _, w), l = i.subParser("hashHTMLSpans")(l, _, w), l = i.subParser("encodeAmpsAndAngles")(l, _, w), _.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, _, w), l;
      }), i.subParser("strikethrough", function(l, _, w) {
        function k(R) {
          return _.simplifiedAutoLink && (R = i.subParser("simplifiedAutoLinks")(R, _, w)), "<del>" + R + "</del>";
        }
        return _.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, _, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(R, L) {
          return k(L);
        }), l = w.converter._dispatch("strikethrough.after", l, _, w)), l;
      }), i.subParser("stripLinkDefinitions", function(l, _, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, R = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var L = function(j, P, Z, F, Y, W, M) {
          return P = P.toLowerCase(), l.toLowerCase().split(P).length - 1 < 2 ? j : (Z.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[P] = Z.replace(/\s/g, "") : w.gUrls[P] = i.subParser("encodeAmpsAndAngles")(Z, _, w), W ? W + M : (M && (w.gTitles[P] = M.replace(/"|'/g, "&quot;")), _.parseImgDimensions && F && Y && (w.gDimensions[P] = {
            width: F,
            height: Y
          }), ""));
        };
        return l = l.replace(R, L), l = l.replace(k, L), l = l.replace(/¨0/, ""), l;
      }), i.subParser("tables", function(l, _, w) {
        if (!_.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, R = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function L(Y) {
          return /^:[ \t]*--*$/.test(Y) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(Y) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(Y) ? ' style="text-align:center;"' : "";
        }
        function j(Y, W) {
          var M = "";
          return Y = Y.trim(), (_.tablesHeaderId || _.tableHeaderId) && (M = ' id="' + Y.replace(/ /g, "_").toLowerCase() + '"'), Y = i.subParser("spanGamut")(Y, _, w), "<th" + M + W + ">" + Y + `</th>
`;
        }
        function P(Y, W) {
          var M = i.subParser("spanGamut")(Y, _, w);
          return "<td" + W + ">" + M + `</td>
`;
        }
        function Z(Y, W) {
          for (var M = `<table>
<thead>
<tr>
`, B = Y.length, K = 0; K < B; ++K)
            M += Y[K];
          for (M += `</tr>
</thead>
<tbody>
`, K = 0; K < W.length; ++K) {
            M += `<tr>
`;
            for (var ae = 0; ae < B; ++ae)
              M += W[K][ae];
            M += `</tr>
`;
          }
          return M += `</tbody>
</table>
`, M;
        }
        function F(Y) {
          var W, M = Y.split(`
`);
          for (W = 0; W < M.length; ++W)
            /^ {0,3}\|/.test(M[W]) && (M[W] = M[W].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(M[W]) && (M[W] = M[W].replace(/\|[ \t]*$/, "")), M[W] = i.subParser("codeSpans")(M[W], _, w);
          var B = M[0].split("|").map(function(ne) {
            return ne.trim();
          }), K = M[1].split("|").map(function(ne) {
            return ne.trim();
          }), ae = [], I = [], $ = [], le = [];
          for (M.shift(), M.shift(), W = 0; W < M.length; ++W)
            M[W].trim() !== "" && ae.push(
              M[W].split("|").map(function(ne) {
                return ne.trim();
              })
            );
          if (B.length < K.length)
            return Y;
          for (W = 0; W < K.length; ++W)
            $.push(L(K[W]));
          for (W = 0; W < B.length; ++W)
            i.helper.isUndefined($[W]) && ($[W] = ""), I.push(j(B[W], $[W]));
          for (W = 0; W < ae.length; ++W) {
            for (var V = [], H = 0; H < I.length; ++H)
              i.helper.isUndefined(ae[W][H]), V.push(P(ae[W][H], $[H]));
            le.push(V);
          }
          return Z(I, le);
        }
        return l = w.converter._dispatch("tables.before", l, _, w), l = l.replace(/\\(\|)/g, i.helper.escapeCharactersCallback), l = l.replace(k, F), l = l.replace(R, F), l = w.converter._dispatch("tables.after", l, _, w), l;
      }), i.subParser("underline", function(l, _, w) {
        return _.underline && (l = w.converter._dispatch("underline.before", l, _, w), _.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        })), l = l.replace(/(_)/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, _, w)), l;
      }), i.subParser("unescapeSpecialChars", function(l, _, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, _, w), l = l.replace(/¨E(\d+)E/g, function(k, R) {
          var L = parseInt(R);
          return String.fromCharCode(L);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, _, w), l;
      }), i.subParser("makeMarkdown.blockquote", function(l, _) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L) {
            var j = i.subParser("makeMarkdown.node")(k[L], _);
            j !== "" && (w += j);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), i.subParser("makeMarkdown.codeBlock", function(l, _) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + _.preList[k] + "\n```";
      }), i.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), i.subParser("makeMarkdown.emphasis", function(l, _) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], _);
          w += "*";
        }
        return w;
      }), i.subParser("makeMarkdown.header", function(l, _, w) {
        var k = new Array(w + 1).join("#"), R = "";
        if (l.hasChildNodes()) {
          R = k + " ";
          for (var L = l.childNodes, j = L.length, P = 0; P < j; ++P)
            R += i.subParser("makeMarkdown.node")(L[P], _);
        }
        return R;
      }), i.subParser("makeMarkdown.hr", function() {
        return "---";
      }), i.subParser("makeMarkdown.image", function(l) {
        var _ = "";
        return l.hasAttribute("src") && (_ += "![" + l.getAttribute("alt") + "](", _ += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (_ += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (_ += ' "' + l.getAttribute("title") + '"'), _ += ")"), _;
      }), i.subParser("makeMarkdown.links", function(l, _) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, R = k.length;
          w = "[";
          for (var L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], _);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), i.subParser("makeMarkdown.list", function(l, _, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var R = l.childNodes, L = R.length, j = l.getAttribute("start") || 1, P = 0; P < L; ++P)
          if (!(typeof R[P].tagName > "u" || R[P].tagName.toLowerCase() !== "li")) {
            var Z = "";
            w === "ol" ? Z = j.toString() + ". " : Z = "- ", k += Z + i.subParser("makeMarkdown.listItem")(R[P], _), ++j;
          }
        return k += `
<!-- -->
`, k.trim();
      }), i.subParser("makeMarkdown.listItem", function(l, _) {
        for (var w = "", k = l.childNodes, R = k.length, L = 0; L < R; ++L)
          w += i.subParser("makeMarkdown.node")(k[L], _);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), i.subParser("makeMarkdown.node", function(l, _, w) {
        w = w || !1;
        var k = "";
        if (l.nodeType === 3)
          return i.subParser("makeMarkdown.txt")(l, _);
        if (l.nodeType === 8)
          return "<!--" + l.data + `-->

`;
        if (l.nodeType !== 1)
          return "";
        var R = l.tagName.toLowerCase();
        switch (R) {
          //
          // BLOCKS
          //
          case "h1":
            w || (k = i.subParser("makeMarkdown.header")(l, _, 1) + `

`);
            break;
          case "h2":
            w || (k = i.subParser("makeMarkdown.header")(l, _, 2) + `

`);
            break;
          case "h3":
            w || (k = i.subParser("makeMarkdown.header")(l, _, 3) + `

`);
            break;
          case "h4":
            w || (k = i.subParser("makeMarkdown.header")(l, _, 4) + `

`);
            break;
          case "h5":
            w || (k = i.subParser("makeMarkdown.header")(l, _, 5) + `

`);
            break;
          case "h6":
            w || (k = i.subParser("makeMarkdown.header")(l, _, 6) + `

`);
            break;
          case "p":
            w || (k = i.subParser("makeMarkdown.paragraph")(l, _) + `

`);
            break;
          case "blockquote":
            w || (k = i.subParser("makeMarkdown.blockquote")(l, _) + `

`);
            break;
          case "hr":
            w || (k = i.subParser("makeMarkdown.hr")(l, _) + `

`);
            break;
          case "ol":
            w || (k = i.subParser("makeMarkdown.list")(l, _, "ol") + `

`);
            break;
          case "ul":
            w || (k = i.subParser("makeMarkdown.list")(l, _, "ul") + `

`);
            break;
          case "precode":
            w || (k = i.subParser("makeMarkdown.codeBlock")(l, _) + `

`);
            break;
          case "pre":
            w || (k = i.subParser("makeMarkdown.pre")(l, _) + `

`);
            break;
          case "table":
            w || (k = i.subParser("makeMarkdown.table")(l, _) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = i.subParser("makeMarkdown.codeSpan")(l, _);
            break;
          case "em":
          case "i":
            k = i.subParser("makeMarkdown.emphasis")(l, _);
            break;
          case "strong":
          case "b":
            k = i.subParser("makeMarkdown.strong")(l, _);
            break;
          case "del":
            k = i.subParser("makeMarkdown.strikethrough")(l, _);
            break;
          case "a":
            k = i.subParser("makeMarkdown.links")(l, _);
            break;
          case "img":
            k = i.subParser("makeMarkdown.image")(l, _);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), i.subParser("makeMarkdown.paragraph", function(l, _) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], _);
        return w = w.trim(), w;
      }), i.subParser("makeMarkdown.pre", function(l, _) {
        var w = l.getAttribute("prenum");
        return "<pre>" + _.preList[w] + "</pre>";
      }), i.subParser("makeMarkdown.strikethrough", function(l, _) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], _);
          w += "~~";
        }
        return w;
      }), i.subParser("makeMarkdown.strong", function(l, _) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], _);
          w += "**";
        }
        return w;
      }), i.subParser("makeMarkdown.table", function(l, _) {
        var w = "", k = [[], []], R = l.querySelectorAll("thead>tr>th"), L = l.querySelectorAll("tbody>tr"), j, P;
        for (j = 0; j < R.length; ++j) {
          var Z = i.subParser("makeMarkdown.tableCell")(R[j], _), F = "---";
          if (R[j].hasAttribute("style")) {
            var Y = R[j].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (Y) {
              case "text-align:left;":
                F = ":---";
                break;
              case "text-align:right;":
                F = "---:";
                break;
              case "text-align:center;":
                F = ":---:";
                break;
            }
          }
          k[0][j] = Z.trim(), k[1][j] = F;
        }
        for (j = 0; j < L.length; ++j) {
          var W = k.push([]) - 1, M = L[j].getElementsByTagName("td");
          for (P = 0; P < R.length; ++P) {
            var B = " ";
            typeof M[P] < "u" && (B = i.subParser("makeMarkdown.tableCell")(M[P], _)), k[W].push(B);
          }
        }
        var K = 3;
        for (j = 0; j < k.length; ++j)
          for (P = 0; P < k[j].length; ++P) {
            var ae = k[j][P].length;
            ae > K && (K = ae);
          }
        for (j = 0; j < k.length; ++j) {
          for (P = 0; P < k[j].length; ++P)
            j === 1 ? k[j][P].slice(-1) === ":" ? k[j][P] = i.helper.padEnd(k[j][P].slice(-1), K - 1, "-") + ":" : k[j][P] = i.helper.padEnd(k[j][P], K, "-") : k[j][P] = i.helper.padEnd(k[j][P], K);
          w += "| " + k[j].join(" | ") + ` |
`;
        }
        return w.trim();
      }), i.subParser("makeMarkdown.tableCell", function(l, _) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
          w += i.subParser("makeMarkdown.node")(k[L], _, !0);
        return w.trim();
      }), i.subParser("makeMarkdown.txt", function(l) {
        var _ = l.nodeValue;
        return _ = _.replace(/ +/g, " "), _ = _.replace(/¨NBSP;/g, " "), _ = i.helper.unescapeHTMLEntities(_), _ = _.replace(/([*_~|`])/g, "\\$1"), _ = _.replace(/^(\s*)>/g, "\\$1>"), _ = _.replace(/^#/gm, "\\#"), _ = _.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), _ = _.replace(/^( {0,3}\d+)\./gm, "$1\\."), _ = _.replace(/^( {0,3})([+-])/gm, "$1\\$2"), _ = _.replace(/]([\s]*)\(/g, "\\]$1\\("), _ = _.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), _;
      });
      var z = this;
      n.exports ? n.exports = i : z.showdown = i;
    }).call(PS);
  })(fl)), fl.exports;
}
var BS = IS();
const US = /* @__PURE__ */ Uf(BS);
var na = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, i) {
      i === void 0 && (i = {});
      var u;
      typeof i == "function" ? (u = i, i = {}) : "callback" in i && (u = i.callback);
      var c = this.castInput(r, i), f = this.castInput(s, i), m = this.removeEmpty(this.tokenize(c, i)), p = this.removeEmpty(this.tokenize(f, i));
      return this.diffWithOptionsObj(m, p, i, u);
    }, n.prototype.diffWithOptionsObj = function(r, s, i, u) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, i), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, y = r.length, g = 1, E = p + y;
      i.maxEditLength != null && (E = Math.min(E, i.maxEditLength));
      var v = (f = i.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + v, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, i);
      if (h[0].oldPos + 1 >= y && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var A = -1 / 0, O = 1 / 0, x = function() {
        for (var l = Math.max(A, -g); l <= Math.min(O, g); l += 2) {
          var _ = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var R = !1;
          if (k) {
            var L = k.oldPos - l;
            R = k && 0 <= L && L < p;
          }
          var j = w && w.oldPos + 1 < y;
          if (!R && !j) {
            h[l] = void 0;
            continue;
          }
          if (!j || R && w.oldPos < k.oldPos ? _ = c.addToPath(k, !0, !1, 0, i) : _ = c.addToPath(w, !1, !0, 1, i), C = c.extractCommon(_, s, r, l, i), _.oldPos + 1 >= y && C + 1 >= p)
            return m(c.buildValues(_.lastComponent, s, r)) || !0;
          h[l] = _, _.oldPos + 1 >= y && (O = Math.min(O, l - 1)), C + 1 >= p && (A = Math.max(A, l + 1));
        }
        g++;
      };
      if (u)
        (function l() {
          setTimeout(function() {
            if (g > E || Date.now() > S)
              return u(void 0);
            x() || l();
          }, 0);
        })();
      else
        for (; g <= E && Date.now() <= S; ) {
          var z = x();
          if (z)
            return z;
        }
    }, n.prototype.addToPath = function(r, s, i, u, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === i ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: i, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: i, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, s, i, u, c) {
      for (var f = s.length, m = i.length, p = r.oldPos, y = p - u, g = 0; y + 1 < f && p + 1 < m && this.equals(i[p + 1], s[y + 1], c); )
        y++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, y;
    }, n.prototype.equals = function(r, s, i) {
      return i.comparator ? i.comparator(r, s) : r === s || !!i.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var s = [], i = 0; i < r.length; i++)
        r[i] && s.push(r[i]);
      return s;
    }, n.prototype.castInput = function(r, s) {
      return r;
    }, n.prototype.tokenize = function(r, s) {
      return Array.from(r);
    }, n.prototype.join = function(r) {
      return r.join("");
    }, n.prototype.postProcess = function(r, s) {
      return r;
    }, Object.defineProperty(n.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.buildValues = function(r, s, i) {
      for (var u = [], c; r; )
        u.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      u.reverse();
      for (var f = u.length, m = 0, p = 0, y = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(i.slice(y, y + g.count)), y += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(v, S) {
              var h = i[y + S];
              return h.length > v.length ? h : v;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (y += g.count);
        }
      }
      return u;
    }, n;
  })()
), HS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), qS = (
  /** @class */
  (function(n) {
    HS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(na)
);
new qS();
function b0(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function S0(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function Of(n, r, s) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + n.slice(r.length);
}
function Mf(n, r, s) {
  if (!r)
    return n + s;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + s;
}
function Gs(n, r) {
  return Of(n, r, "");
}
function el(n, r) {
  return Mf(n, r, "");
}
function w0(n, r) {
  return r.slice(0, ZS(n, r));
}
function ZS(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var i = r.length;
  n.length < r.length && (i = n.length);
  var u = Array(i), c = 0;
  u[0] = 0;
  for (var f = 1; f < i; f++) {
    for (r[f] == r[c] ? u[f] = u[c] : u[f] = c; c > 0 && r[f] != r[c]; )
      c = u[c];
    r[f] == r[c] && c++;
  }
  c = 0;
  for (var m = s; m < n.length; m++) {
    for (; c > 0 && n[m] != r[c]; )
      c = u[c];
    n[m] == r[c] && c++;
  }
  return c;
}
function Vs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Fr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var Uy = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), wl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", GS = new RegExp("[".concat(wl, "]+|\\s+|[^").concat(wl, "]"), "ug"), VS = (
  /** @class */
  (function(n) {
    Uy(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, i, u) {
      return u.ignoreCase && (s = s.toLowerCase(), i = i.toLowerCase()), s.trim() === i.trim();
    }, r.prototype.tokenize = function(s, i) {
      i === void 0 && (i = {});
      var u;
      if (i.intlSegmenter) {
        var c = i.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(c.segment(s), function(p) {
          return p.segment;
        });
      } else
        u = s.match(GS) || [];
      var f = [], m = null;
      return u.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(i, u) {
        return u == 0 ? i : i.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, i) {
      if (!s || i.oneChangePerToken)
        return s;
      var u = null, c = null, f = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? f = m : ((c || f) && E0(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && E0(u, f, c, null), s;
    }, r;
  })(na)
), YS = new VS();
function Hy(n, r, s) {
  return YS.diff(n, r, s);
}
function E0(n, r, s, i) {
  if (r && s) {
    var u = Fr(r.value), c = Vs(r.value), f = Fr(s.value), m = Vs(s.value);
    if (n) {
      var p = b0(u, f);
      n.value = Mf(n.value, f, p), r.value = Gs(r.value, p), s.value = Gs(s.value, p);
    }
    if (i) {
      var y = S0(c, m);
      i.value = Of(i.value, m, y), r.value = el(r.value, y), s.value = el(s.value, y);
    }
  } else if (s) {
    if (n) {
      var g = Fr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (i) {
      var g = Fr(i.value);
      i.value = i.value.substring(g.length);
    }
  } else if (n && i) {
    var E = Fr(i.value), v = Fr(r.value), S = Vs(r.value), h = b0(E, v);
    r.value = Gs(r.value, h);
    var C = S0(Gs(E, h), S);
    r.value = el(r.value, C), i.value = Of(i.value, E, C), n.value = Mf(n.value, E, E.slice(0, E.length - C.length));
  } else if (i) {
    var A = Fr(i.value), O = Vs(r.value), x = w0(O, A);
    r.value = el(r.value, x);
  } else if (n) {
    var z = Vs(n.value), l = Fr(r.value), x = w0(z, l);
    r.value = Gs(r.value, x);
  }
}
var $S = (
  /** @class */
  (function(n) {
    Uy(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var i = new RegExp("(\\r?\\n)|[".concat(wl, "]+|[^\\S\\n\\r]+|[^").concat(wl, "]"), "ug");
      return s.match(i) || [];
    }, r;
  })(na)
);
new $S();
var XS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), FS = (
  /** @class */
  (function(n) {
    XS(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = qy, s;
    }
    return r.prototype.equals = function(s, i, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !i.includes(`
`)) && (i = i.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), i.endsWith(`
`) && (i = i.slice(0, -1))), n.prototype.equals.call(this, s, i, u);
    }, r;
  })(na)
);
new FS();
function qy(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var s = [], i = n.split(/(\n|\r\n)/);
  i[i.length - 1] || i.pop();
  for (var u = 0; u < i.length; u++) {
    var c = i[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var QS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), KS = (
  /** @class */
  (function(n) {
    QS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(na)
);
new KS();
var JS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), WS = (
  /** @class */
  (function(n) {
    JS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(na)
);
new WS();
var ew = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), tw = (
  /** @class */
  (function(n) {
    ew(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = qy, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, i) {
      var u = i.undefinedReplacement, c = i.stringifyReplacer, f = c === void 0 ? function(m, p) {
        return typeof p > "u" ? u : p;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Rf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, i, u) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), i.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(na)
);
new tw();
function Rf(n, r, s, i, u) {
  r = r || [], s = s || [], i && (n = i(u === void 0 ? "" : u, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), s.push(f), c = 0; c < n.length; c += 1)
      f[c] = Rf(n[c], r, s, i, String(c));
    return r.pop(), s.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, s.push(f);
    var m = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Rf(n[p], r, s, i, p);
    r.pop(), s.pop();
  } else
    f = n;
  return f;
}
var nw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), rw = (
  /** @class */
  (function(n) {
    nw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.slice();
    }, r.prototype.join = function(s) {
      return s;
    }, r.prototype.removeEmpty = function(s) {
      return s;
    }, r;
  })(na)
);
new rw();
const aw = ({ originalEntry: n, newEntry: r }) => {
  const s = se.useMemo(() => {
    const i = Hy(n.content, r.content);
    let u = "", c = "";
    return i.forEach((f) => {
      const p = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${f.value}</span>`;
      f.added || (u += p), f.removed || (c += p);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: "Compare Changes" }),
    /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: "Original Content" }),
        /* @__PURE__ */ N.jsx(
          "div",
          {
            style: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "400px",
              overflowY: "auto"
            },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: "New Content (Suggestion)" }),
        /* @__PURE__ */ N.jsx(
          "div",
          {
            style: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "400px",
              overflowY: "auto"
            },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, iw = SillyTavern.getContext(), sw = se.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [i, u] = se.useState([]), [c, f] = se.useState(n.comment), [m, p] = se.useState(_n(n).join(", ")), [y, g] = se.useState(n.content), [E, v] = se.useState([]);
  se.useEffect(() => {
    const O = iw.extensionSettings.regex ?? [];
    u(O);
    const x = Object.entries(r).map(([z, l]) => {
      const _ = O.find((w) => w.id === z);
      return _ ? { id: _.id, label: _.scriptName, enabled: !l?.disabled } : null;
    }).filter((z) => z !== null);
    v(x);
  }, [r]), se.useImperativeHandle(s, () => ({
    getFormData: () => {
      const O = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((z) => z.trim()).filter(Boolean),
        content: y
      }, x = E.reduce(
        (z, l) => (z[l.id] = { disabled: !l.enabled }, z),
        {}
      );
      return { updatedEntry: O, updatedRegexIds: x };
    }
  }));
  const S = se.useMemo(
    () => i.map((O) => ({ value: O.id, label: O.scriptName })),
    [i]
  ), h = se.useMemo(() => E.map((O) => O.id), [E]), C = se.useCallback(() => {
    let O = n.content;
    const x = E.filter((z) => z.enabled);
    for (const z of x) {
      const l = i.find((_) => _.id === z.id);
      l && (O = u3(l, O));
    }
    g(O);
  }, [E, i, n.content]), A = (O) => {
    const x = O.map((z) => {
      const l = E.find((w) => w.id === z);
      if (l) return l;
      const _ = i.find((w) => w.id === z);
      return _ ? { id: _.id, label: _.scriptName, enabled: !0 } : null;
    }).filter((z) => z !== null);
    v(x);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: "Title" }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: c, onChange: (O) => f(O.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (O) => p(O.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ N.jsx(
        Iy,
        {
          items: S,
          value: h,
          onChange: A,
          multiple: !0,
          enableSearch: !0,
          placeholder: "Select regex scripts..."
        }
      ),
      E.length > 0 && /* @__PURE__ */ N.jsx(
        Py,
        {
          items: E,
          onItemsChange: v,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx(xe, { onClick: C, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ N.jsx(
      Sr,
      {
        value: y,
        onChange: (O) => g(O.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function de(n, r, s) {
  function i(m, p) {
    var y;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (y = m._zod).traits ?? (y.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, p);
    for (const g in f.prototype)
      g in m || Object.defineProperty(m, g, { value: f.prototype[g].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const u = s?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: n });
  function f(m) {
    var p;
    const y = s?.Parent ? new c() : this;
    i(y, m), (p = y._zod).deferred ?? (p.deferred = []);
    for (const g of y._zod.deferred)
      g();
    return y;
  }
  return Object.defineProperty(f, "init", { value: i }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class zi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Zy extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const Gy = {};
function ja(n) {
  return Gy;
}
function Vy(n) {
  const r = Object.values(n).filter((i) => typeof i == "number");
  return Object.entries(n).filter(([i, u]) => r.indexOf(+i) === -1).map(([i, u]) => u);
}
function jf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Kf(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Jf(n) {
  return n == null;
}
function Wf(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const C0 = Symbol("evaluating");
function rt(n, r, s) {
  let i;
  Object.defineProperty(n, r, {
    get() {
      if (i !== C0)
        return i === void 0 && (i = C0, i = s()), i;
    },
    set(u) {
      Object.defineProperty(n, r, {
        value: u
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function za(n, r, s) {
  Object.defineProperty(n, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function La(...n) {
  const r = {};
  for (const s of n) {
    const i = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, i);
  }
  return Object.defineProperties({}, r);
}
function k0(n) {
  return JSON.stringify(n);
}
const Yy = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function El(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const ow = Kf(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function no(n) {
  if (El(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(El(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function $y(n) {
  return no(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const uw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Tl(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ra(n, r, s) {
  const i = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (i._zod.parent = n), i;
}
function Ne(n) {
  const r = n;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function lw(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function cw(n, r) {
  const s = n._zod.def, i = La(n._zod.def, {
    get shape() {
      const u = {};
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = s.shape[c]);
      }
      return za(this, "shape", u), u;
    },
    checks: []
  });
  return ra(n, i);
}
function dw(n, r) {
  const s = n._zod.def, i = La(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete u[c];
      }
      return za(this, "shape", u), u;
    },
    checks: []
  });
  return ra(n, i);
}
function fw(n, r) {
  if (!no(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = n._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = La(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return za(this, "shape", c), c;
    },
    checks: []
  });
  return ra(n, u);
}
function hw(n, r) {
  if (!no(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const i = { ...n._zod.def.shape, ...r };
      return za(this, "shape", i), i;
    },
    checks: n._zod.def.checks
  };
  return ra(n, s);
}
function pw(n, r) {
  const s = La(n._zod.def, {
    get shape() {
      const i = { ...n._zod.def.shape, ...r._zod.def.shape };
      return za(this, "shape", i), i;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ra(n, s);
}
function mw(n, r, s) {
  const i = La(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = n ? new n({
            type: "optional",
            innerType: u[f]
          }) : u[f]);
        }
      else
        for (const f in u)
          c[f] = n ? new n({
            type: "optional",
            innerType: u[f]
          }) : u[f];
      return za(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, i);
}
function gw(n, r, s) {
  const i = La(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          }));
        }
      else
        for (const f in u)
          c[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          });
      return za(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, i);
}
function ji(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function Xy(n, r) {
  return r.map((s) => {
    var i;
    return (i = s).path ?? (i.path = []), s.path.unshift(n), s;
  });
}
function tl(n) {
  return typeof n == "string" ? n : n?.message;
}
function Da(n, r, s) {
  const i = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const u = tl(n.inst?._zod.def?.error?.(n)) ?? tl(r?.error?.(n)) ?? tl(s.customError?.(n)) ?? tl(s.localeError?.(n)) ?? "Invalid input";
    i.message = u;
  }
  return delete i.inst, delete i.continue, r?.reportInput || delete i.input, i;
}
function eh(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function ro(...n) {
  const [r, s, i] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: i
  } : { ...r };
}
const Fy = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, jf, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Qy = de("$ZodError", Fy), Ky = de("$ZodError", Fy, { Parent: Error });
function vw(n, r = (s) => s.message) {
  const s = {}, i = [];
  for (const u of n.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : i.push(r(u));
  return { formErrors: i, fieldErrors: s };
}
function yw(n, r = (s) => s.message) {
  const s = { _errors: [] }, i = (u) => {
    for (const c of u.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((f) => i({ issues: f }));
      else if (c.code === "invalid_key")
        i({ issues: c.issues });
      else if (c.code === "invalid_element")
        i({ issues: c.issues });
      else if (c.path.length === 0)
        s._errors.push(r(c));
      else {
        let f = s, m = 0;
        for (; m < c.path.length; ) {
          const p = c.path[m];
          m === c.path.length - 1 ? (f[p] = f[p] || { _errors: [] }, f[p]._errors.push(r(c))) : f[p] = f[p] || { _errors: [] }, f = f[p], m++;
        }
      }
  };
  return i(n), s;
}
const th = (n) => (r, s, i, u) => {
  const c = i ? Object.assign(i, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new zi();
  if (f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Da(p, c, ja())));
    throw Yy(m, u?.callee), m;
  }
  return f.value;
}, nh = (n) => async (r, s, i, u) => {
  const c = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Da(p, c, ja())));
    throw Yy(m, u?.callee), m;
  }
  return f.value;
}, xl = (n) => (r, s, i) => {
  const u = i ? { ...i, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new zi();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? Qy)(c.issues.map((f) => Da(f, u, ja())))
  } : { success: !0, data: c.value };
}, _w = /* @__PURE__ */ xl(Ky), Nl = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((f) => Da(f, u, ja())))
  } : { success: !0, data: c.value };
}, bw = /* @__PURE__ */ Nl(Ky), Sw = (n) => (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return th(n)(r, s, u);
}, ww = (n) => (r, s, i) => th(n)(r, s, i), Ew = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return nh(n)(r, s, u);
}, Cw = (n) => async (r, s, i) => nh(n)(r, s, i), kw = (n) => (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return xl(n)(r, s, u);
}, Aw = (n) => (r, s, i) => xl(n)(r, s, i), Tw = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Nl(n)(r, s, u);
}, xw = (n) => async (r, s, i) => Nl(n)(r, s, i), Nw = /^[cC][^\s-]{8,}$/, Ow = /^[0-9a-z]+$/, Mw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Rw = /^[0-9a-vA-V]{20}$/, jw = /^[A-Za-z0-9]{27}$/, Dw = /^[a-zA-Z0-9_-]{21}$/, zw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Lw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, A0 = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Pw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Iw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Bw() {
  return new RegExp(Iw, "u");
}
const Uw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, qw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Zw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Gw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Jy = /^[A-Za-z0-9_-]*$/, Vw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Yw = /^\+(?:[0-9]){6,14}[0-9]$/, Wy = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", $w = /* @__PURE__ */ new RegExp(`^${Wy}$`);
function e_(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Xw(n) {
  return new RegExp(`^${e_(n)}$`);
}
function Fw(n) {
  const r = e_({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${Wy}T(?:${i})$`);
}
const Qw = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, Kw = /^[^A-Z]*$/, Jw = /^[^a-z]*$/, tr = /* @__PURE__ */ de("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), Ww = /* @__PURE__ */ de("$ZodCheckMaxLength", (n, r) => {
  var s;
  tr.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !Jf(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (i._zod.bag.maximum = r.maximum);
  }), n._zod.check = (i) => {
    const u = i.value;
    if (u.length <= r.maximum)
      return;
    const f = eh(u);
    i.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), eE = /* @__PURE__ */ de("$ZodCheckMinLength", (n, r) => {
  var s;
  tr.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !Jf(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (i._zod.bag.minimum = r.minimum);
  }), n._zod.check = (i) => {
    const u = i.value;
    if (u.length >= r.minimum)
      return;
    const f = eh(u);
    i.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), tE = /* @__PURE__ */ de("$ZodCheckLengthEquals", (n, r) => {
  var s;
  tr.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !Jf(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), n._zod.check = (i) => {
    const u = i.value, c = u.length;
    if (c === r.length)
      return;
    const f = eh(u), m = c > r.length;
    i.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Ol = /* @__PURE__ */ de("$ZodCheckStringFormat", (n, r) => {
  var s, i;
  tr.init(n, r), n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.format = r.format, r.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r.pattern));
  }), r.pattern ? (s = n._zod).check ?? (s.check = (u) => {
    r.pattern.lastIndex = 0, !r.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: u.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (i = n._zod).check ?? (i.check = () => {
  });
}), nE = /* @__PURE__ */ de("$ZodCheckRegex", (n, r) => {
  Ol.init(n, r), n._zod.check = (s) => {
    r.pattern.lastIndex = 0, !r.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: s.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), rE = /* @__PURE__ */ de("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = Kw), Ol.init(n, r);
}), aE = /* @__PURE__ */ de("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = Jw), Ol.init(n, r);
}), iE = /* @__PURE__ */ de("$ZodCheckIncludes", (n, r) => {
  tr.init(n, r);
  const s = Tl(r.includes), i = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = i, n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(i);
  }), n._zod.check = (u) => {
    u.value.includes(r.includes, r.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: u.value,
      inst: n,
      continue: !r.abort
    });
  };
}), sE = /* @__PURE__ */ de("$ZodCheckStartsWith", (n, r) => {
  tr.init(n, r);
  const s = new RegExp(`^${Tl(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.startsWith(r.prefix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), oE = /* @__PURE__ */ de("$ZodCheckEndsWith", (n, r) => {
  tr.init(n, r);
  const s = new RegExp(`.*${Tl(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.endsWith(r.suffix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), uE = /* @__PURE__ */ de("$ZodCheckOverwrite", (n, r) => {
  tr.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class lE {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const i = r.split(`
`).filter((f) => f), u = Math.min(...i.map((f) => f.length - f.trimStart().length)), c = i.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, u.join(`
`));
  }
}
const cE = {
  major: 4,
  minor: 1,
  patch: 12
}, At = /* @__PURE__ */ de("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = cE;
  const i = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && i.unshift(n);
  for (const u of i)
    for (const c of u._zod.onattach)
      c(n);
  if (i.length === 0)
    (s = n._zod).deferred ?? (s.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const u = (f, m, p) => {
      let y = ji(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (y)
          continue;
        const v = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new zi();
        if (g || S instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== v && (y || (y = ji(f, v)));
          });
        else {
          if (f.issues.length === v)
            continue;
          y || (y = ji(f, v));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (ji(f))
        return f.aborted = !0, f;
      const y = u(m, i, p);
      if (y instanceof Promise) {
        if (p.async === !1)
          throw new zi();
        return y.then((g) => n._zod.parse(g, p));
      }
      return n._zod.parse(y, p);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const y = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return y instanceof Promise ? y.then((g) => c(g, f, m)) : c(y, f, m);
      }
      const p = n._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new zi();
        return p.then((y) => u(y, i, m));
      }
      return u(p, i, m);
    };
  }
  n["~standard"] = {
    validate: (u) => {
      try {
        const c = _w(n, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return bw(n, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), rh = /* @__PURE__ */ de("$ZodString", (n, r) => {
  At.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Qw(n._zod.bag), n._zod.parse = (s, i) => {
    if (r.coerce)
      try {
        s.value = String(s.value);
      } catch {
      }
    return typeof s.value == "string" || s.issues.push({
      expected: "string",
      code: "invalid_type",
      input: s.value,
      inst: n
    }), s;
  };
}), ot = /* @__PURE__ */ de("$ZodStringFormat", (n, r) => {
  Ol.init(n, r), rh.init(n, r);
}), dE = /* @__PURE__ */ de("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Lw), ot.init(n, r);
}), fE = /* @__PURE__ */ de("$ZodUUID", (n, r) => {
  if (r.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = A0(i));
  } else
    r.pattern ?? (r.pattern = A0());
  ot.init(n, r);
}), hE = /* @__PURE__ */ de("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Pw), ot.init(n, r);
}), pE = /* @__PURE__ */ de("$ZodURL", (n, r) => {
  ot.init(n, r), n._zod.check = (s) => {
    try {
      const i = s.value.trim(), u = new URL(i);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Vw.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.normalize ? s.value = u.href : s.value = i;
      return;
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "url",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), mE = /* @__PURE__ */ de("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Bw()), ot.init(n, r);
}), gE = /* @__PURE__ */ de("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Dw), ot.init(n, r);
}), vE = /* @__PURE__ */ de("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Nw), ot.init(n, r);
}), yE = /* @__PURE__ */ de("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Ow), ot.init(n, r);
}), _E = /* @__PURE__ */ de("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Mw), ot.init(n, r);
}), bE = /* @__PURE__ */ de("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Rw), ot.init(n, r);
}), SE = /* @__PURE__ */ de("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = jw), ot.init(n, r);
}), wE = /* @__PURE__ */ de("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = Fw(r)), ot.init(n, r);
}), EE = /* @__PURE__ */ de("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = $w), ot.init(n, r);
}), CE = /* @__PURE__ */ de("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = Xw(r)), ot.init(n, r);
}), kE = /* @__PURE__ */ de("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = zw), ot.init(n, r);
}), AE = /* @__PURE__ */ de("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Uw), ot.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv4";
  });
}), TE = /* @__PURE__ */ de("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Hw), ot.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv6";
  }), n._zod.check = (s) => {
    try {
      new URL(`http://[${s.value}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), xE = /* @__PURE__ */ de("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = qw), ot.init(n, r);
}), NE = /* @__PURE__ */ de("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = Zw), ot.init(n, r), n._zod.check = (s) => {
    const i = s.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [u, c] = i;
      if (!c)
        throw new Error();
      const f = Number(c);
      if (`${f}` !== c)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${u}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function t_(n) {
  if (n === "")
    return !0;
  if (n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const OE = /* @__PURE__ */ de("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Gw), ot.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    t_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function ME(n) {
  if (!Jy.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return t_(s);
}
const RE = /* @__PURE__ */ de("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = Jy), ot.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    ME(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), jE = /* @__PURE__ */ de("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = Yw), ot.init(n, r);
});
function DE(n, r = null) {
  try {
    const s = n.split(".");
    if (s.length !== 3)
      return !1;
    const [i] = s;
    if (!i)
      return !1;
    const u = JSON.parse(atob(i));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || r && (!("alg" in u) || u.alg !== r));
  } catch {
    return !1;
  }
}
const zE = /* @__PURE__ */ de("$ZodJWT", (n, r) => {
  ot.init(n, r), n._zod.check = (s) => {
    DE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), LE = /* @__PURE__ */ de("$ZodUnknown", (n, r) => {
  At.init(n, r), n._zod.parse = (s) => s;
}), PE = /* @__PURE__ */ de("$ZodNever", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function T0(n, r, s) {
  n.issues.length && r.issues.push(...Xy(s, n.issues)), r.value[s] = n.value;
}
const IE = /* @__PURE__ */ de("$ZodArray", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => {
    const u = s.value;
    if (!Array.isArray(u))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: n
      }), s;
    s.value = Array(u.length);
    const c = [];
    for (let f = 0; f < u.length; f++) {
      const m = u[f], p = r.element._zod.run({
        value: m,
        issues: []
      }, i);
      p instanceof Promise ? c.push(p.then((y) => T0(y, s, f))) : T0(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function Cl(n, r, s, i) {
  n.issues.length && r.issues.push(...Xy(s, n.issues)), n.value === void 0 ? s in i && (r.value[s] = void 0) : r.value[s] = n.value;
}
function n_(n) {
  const r = Object.keys(n.shape);
  for (const i of r)
    if (!n.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const s = lw(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function r_(n, r, s, i, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, y = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (y === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, i);
    E instanceof Promise ? n.push(E.then((v) => Cl(v, s, g, r))) : Cl(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const BE = /* @__PURE__ */ de("$ZodObject", (n, r) => {
  if (At.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const m = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const p = { ...m };
        return Object.defineProperty(r, "shape", {
          value: p
        }), p;
      }
    });
  }
  const i = Kf(() => n_(r));
  rt(n._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const y in m) {
      const g = m[y]._zod;
      if (g.values) {
        p[y] ?? (p[y] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[y].add(E);
      }
    }
    return p;
  });
  const u = El, c = r.catchall;
  let f;
  n._zod.parse = (m, p) => {
    f ?? (f = i.value);
    const y = m.value;
    if (!u(y))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: n
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const v of f.keys) {
      const h = E[v]._zod.run({ value: y[v], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => Cl(C, m, v, y))) : Cl(h, m, v, y);
    }
    return c ? r_(g, y, m, p, i.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), UE = /* @__PURE__ */ de("$ZodObjectJIT", (n, r) => {
  BE.init(n, r);
  const s = n._zod.parse, i = Kf(() => n_(r)), u = (v) => {
    const S = new lE(["shape", "payload", "ctx"]), h = i.value, C = (z) => {
      const l = k0(z);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const A = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const z of h.keys)
      A[z] = `key_${O++}`;
    S.write("const newResult = {};");
    for (const z of h.keys) {
      const l = A[z], _ = k0(z);
      S.write(`const ${l} = ${C(z)};`), S.write(`
        if (${l}.issues.length) {
          payload.issues = payload.issues.concat(${l}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${_}, ...iss.path] : [${_}]
          })));
        }
        
        
        if (${l}.value === undefined) {
          if (${_} in input) {
            newResult[${_}] = undefined;
          }
        } else {
          newResult[${_}] = ${l}.value;
        }
        
      `);
    }
    S.write("payload.value = newResult;"), S.write("return payload;");
    const x = S.compile();
    return (z, l) => x(v, z, l);
  };
  let c;
  const f = El, m = !Gy.jitless, y = m && ow.value, g = r.catchall;
  let E;
  n._zod.parse = (v, S) => {
    E ?? (E = i.value);
    const h = v.value;
    return f(h) ? m && y && S?.async === !1 && S.jitless !== !0 ? (c || (c = u(r.shape)), v = c(v, S), g ? r_([], h, v, S, E, n) : v) : s(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), v);
  };
});
function x0(n, r, s, i) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = n.filter((c) => !ji(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((f) => Da(f, i, ja())))
  }), r);
}
const HE = /* @__PURE__ */ de("$ZodUnion", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), rt(n._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), rt(n._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), rt(n._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => Wf(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, i = r.options[0]._zod.run;
  n._zod.parse = (u, c) => {
    if (s)
      return i(u, c);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const y = p._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (y instanceof Promise)
        m.push(y), f = !0;
      else {
        if (y.issues.length === 0)
          return y;
        m.push(y);
      }
    }
    return f ? Promise.all(m).then((p) => x0(p, u, n, c)) : x0(m, u, n, c);
  };
}), qE = /* @__PURE__ */ de("$ZodIntersection", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, i), f = r.right._zod.run({ value: u, issues: [] }, i);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, y]) => N0(s, p, y)) : N0(s, c, f);
  };
});
function Df(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (no(n) && no(r)) {
    const s = Object.keys(r), i = Object.keys(n).filter((c) => s.indexOf(c) !== -1), u = { ...n, ...r };
    for (const c of i) {
      const f = Df(n[c], r[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      u[c] = f.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let i = 0; i < n.length; i++) {
      const u = n[i], c = r[i], f = Df(u, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...f.mergeErrorPath]
        };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function N0(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), ji(n))
    return n;
  const i = Df(r.value, s.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return n.value = i.data, n;
}
const ZE = /* @__PURE__ */ de("$ZodEnum", (n, r) => {
  At.init(n, r);
  const s = Vy(r.entries), i = new Set(s);
  n._zod.values = i, n._zod.pattern = new RegExp(`^(${s.filter((u) => uw.has(typeof u)).map((u) => typeof u == "string" ? Tl(u) : u.toString()).join("|")})$`), n._zod.parse = (u, c) => {
    const f = u.value;
    return i.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: n
    }), u;
  };
}), GE = /* @__PURE__ */ de("$ZodTransform", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new Zy(n.constructor.name);
    const u = r.transform(s.value, s);
    if (i.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new zi();
    return s.value = u, s;
  };
});
function O0(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const VE = /* @__PURE__ */ de("$ZodOptional", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Wf(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, i) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, i);
      return u instanceof Promise ? u.then((c) => O0(c, s.value)) : O0(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, i);
  };
}), YE = /* @__PURE__ */ de("$ZodNullable", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Wf(s.source)}|null)$`) : void 0;
  }), rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, i) => s.value === null ? s : r.innerType._zod.run(s, i);
}), $E = /* @__PURE__ */ de("$ZodDefault", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => M0(c, r)) : M0(u, r);
  };
});
function M0(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const XE = /* @__PURE__ */ de("$ZodPrefault", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => (i.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, i));
}), FE = /* @__PURE__ */ de("$ZodNonOptional", (n, r) => {
  At.init(n, r), rt(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((i) => i !== void 0)) : void 0;
  }), n._zod.parse = (s, i) => {
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => R0(c, n)) : R0(u, n);
  };
});
function R0(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const QE = /* @__PURE__ */ de("$ZodCatch", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => Da(f, i, ja()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => Da(c, i, ja()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), KE = /* @__PURE__ */ de("$ZodPipe", (n, r) => {
  At.init(n, r), rt(n._zod, "values", () => r.in._zod.values), rt(n._zod, "optin", () => r.in._zod.optin), rt(n._zod, "optout", () => r.out._zod.optout), rt(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, i) => {
    if (i.direction === "backward") {
      const c = r.out._zod.run(s, i);
      return c instanceof Promise ? c.then((f) => nl(f, r.in, i)) : nl(c, r.in, i);
    }
    const u = r.in._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => nl(c, r.out, i)) : nl(u, r.out, i);
  };
});
function nl(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const JE = /* @__PURE__ */ de("$ZodReadonly", (n, r) => {
  At.init(n, r), rt(n._zod, "propValues", () => r.innerType._zod.propValues), rt(n._zod, "values", () => r.innerType._zod.values), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then(j0) : j0(u);
  };
});
function j0(n) {
  return n.value = Object.freeze(n.value), n;
}
const WE = /* @__PURE__ */ de("$ZodCustom", (n, r) => {
  tr.init(n, r), At.init(n, r), n._zod.parse = (s, i) => s, n._zod.check = (s) => {
    const i = s.value, u = r.fn(i);
    if (u instanceof Promise)
      return u.then((c) => D0(c, s, i, n));
    D0(u, s, i, n);
  };
});
function D0(n, r, s, i) {
  if (!n) {
    const u = {
      code: "custom",
      input: s,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (u.params = i._zod.def.params), r.issues.push(ro(u));
  }
}
class a_ {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...s) {
    const i = s[0];
    if (this._map.set(r, i), i && typeof i == "object" && "id" in i) {
      if (this._idmap.has(i.id))
        throw new Error(`ID ${i.id} already exists in the registry`);
      this._idmap.set(i.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const s = this._map.get(r);
    return s && typeof s == "object" && "id" in s && this._idmap.delete(s.id), this._map.delete(r), this;
  }
  get(r) {
    const s = r._zod.parent;
    if (s) {
      const i = { ...this.get(s) ?? {} };
      delete i.id;
      const u = { ...i, ...this._map.get(r) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function e4() {
  return new a_();
}
const Fs = /* @__PURE__ */ e4();
function t4(n, r) {
  return new n({
    type: "string",
    ...Ne(r)
  });
}
function n4(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function z0(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function r4(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function a4(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Ne(r)
  });
}
function i4(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Ne(r)
  });
}
function s4(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Ne(r)
  });
}
function o4(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function u4(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function l4(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function c4(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function d4(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function f4(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function h4(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function p4(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function m4(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function g4(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function v4(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function y4(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function _4(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function b4(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function S4(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function w4(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function E4(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Ne(r)
  });
}
function C4(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...Ne(r)
  });
}
function k4(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Ne(r)
  });
}
function A4(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Ne(r)
  });
}
function T4(n) {
  return new n({
    type: "unknown"
  });
}
function x4(n, r) {
  return new n({
    type: "never",
    ...Ne(r)
  });
}
function i_(n, r) {
  return new Ww({
    check: "max_length",
    ...Ne(r),
    maximum: n
  });
}
function kl(n, r) {
  return new eE({
    check: "min_length",
    ...Ne(r),
    minimum: n
  });
}
function s_(n, r) {
  return new tE({
    check: "length_equals",
    ...Ne(r),
    length: n
  });
}
function N4(n, r) {
  return new nE({
    check: "string_format",
    format: "regex",
    ...Ne(r),
    pattern: n
  });
}
function O4(n) {
  return new rE({
    check: "string_format",
    format: "lowercase",
    ...Ne(n)
  });
}
function M4(n) {
  return new aE({
    check: "string_format",
    format: "uppercase",
    ...Ne(n)
  });
}
function R4(n, r) {
  return new iE({
    check: "string_format",
    format: "includes",
    ...Ne(r),
    includes: n
  });
}
function j4(n, r) {
  return new sE({
    check: "string_format",
    format: "starts_with",
    ...Ne(r),
    prefix: n
  });
}
function D4(n, r) {
  return new oE({
    check: "string_format",
    format: "ends_with",
    ...Ne(r),
    suffix: n
  });
}
function oo(n) {
  return new uE({
    check: "overwrite",
    tx: n
  });
}
function z4(n) {
  return oo((r) => r.normalize(n));
}
function L4() {
  return oo((n) => n.trim());
}
function P4() {
  return oo((n) => n.toLowerCase());
}
function I4() {
  return oo((n) => n.toUpperCase());
}
function B4(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Ne(s)
  });
}
function U4(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...Ne(s)
  });
}
function H4(n) {
  const r = q4((s) => (s.addIssue = (i) => {
    if (typeof i == "string")
      s.issues.push(ro(i, s.value, r._zod.def));
    else {
      const u = i;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(ro(u));
    }
  }, n(s.value, s)));
  return r;
}
function q4(n, r) {
  const s = new tr({
    check: "custom",
    ...Ne(r)
  });
  return s._zod.check = n, s;
}
class L0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Fs, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var i;
    const u = r._zod.def, c = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, s.schemaPath.includes(r) && (f.cycle = s.path), f.schema;
    const m = { schema: {}, count: 1, cycle: void 0, path: s.path };
    this.seen.set(r, m);
    const p = r._zod.toJSONSchema?.();
    if (p)
      m.schema = p;
    else {
      const E = {
        ...s,
        schemaPath: [...s.schemaPath, r],
        path: s.path
      }, v = r._zod.parent;
      if (v)
        m.ref = v, this.process(v, E), this.seen.get(v).isParent = !0;
      else {
        const S = m.schema;
        switch (u.type) {
          case "string": {
            const h = S;
            h.type = "string";
            const { minimum: C, maximum: A, format: O, patterns: x, contentEncoding: z } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof A == "number" && (h.maxLength = A), O && (h.format = c[O] ?? O, h.format === "" && delete h.format), z && (h.contentEncoding = z), x && x.size > 0) {
              const l = [...x];
              l.length === 1 ? h.pattern = l[0].source : l.length > 1 && (m.schema.allOf = [
                ...l.map((_) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: _.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = S, { minimum: C, maximum: A, format: O, multipleOf: x, exclusiveMaximum: z, exclusiveMinimum: l } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? h.type = "integer" : h.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = l, h.exclusiveMinimum = !0) : h.exclusiveMinimum = l), typeof C == "number" && (h.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof z == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = z, h.exclusiveMaximum = !0) : h.exclusiveMaximum = z), typeof A == "number" && (h.maximum = A, typeof z == "number" && this.target !== "draft-4" && (z <= A ? delete h.maximum : delete h.exclusiveMaximum)), typeof x == "number" && (h.multipleOf = x);
            break;
          }
          case "boolean": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (S.type = "string", S.nullable = !0, S.enum = [null]) : S.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            S.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = S, { minimum: C, maximum: A } = r._zod.bag;
            typeof C == "number" && (h.minItems = C), typeof A == "number" && (h.maxItems = A), h.type = "array", h.items = this.process(u.element, { ...E, path: [...E.path, "items"] });
            break;
          }
          case "object": {
            const h = S;
            h.type = "object", h.properties = {};
            const C = u.shape;
            for (const x in C)
              h.properties[x] = this.process(C[x], {
                ...E,
                path: [...E.path, "properties", x]
              });
            const A = new Set(Object.keys(C)), O = new Set([...A].filter((x) => {
              const z = u.shape[x]._zod;
              return this.io === "input" ? z.optin === void 0 : z.optout === void 0;
            }));
            O.size > 0 && (h.required = Array.from(O)), u.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : u.catchall ? u.catchall && (h.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = S, C = u.options.map((A, O) => this.process(A, {
              ...E,
              path: [...E.path, "anyOf", O]
            }));
            h.anyOf = C;
            break;
          }
          case "intersection": {
            const h = S, C = this.process(u.left, {
              ...E,
              path: [...E.path, "allOf", 0]
            }), A = this.process(u.right, {
              ...E,
              path: [...E.path, "allOf", 1]
            }), O = (z) => "allOf" in z && Object.keys(z).length === 1, x = [
              ...O(C) ? C.allOf : [C],
              ...O(A) ? A.allOf : [A]
            ];
            h.allOf = x;
            break;
          }
          case "tuple": {
            const h = S;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", A = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = u.items.map((_, w) => this.process(_, {
              ...E,
              path: [...E.path, C, w]
            })), x = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, A, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = O, x && (h.items = x)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: O
            }, x && h.items.anyOf.push(x), h.minItems = O.length, x || (h.maxItems = O.length)) : (h.items = O, x && (h.additionalItems = x));
            const { minimum: z, maximum: l } = r._zod.bag;
            typeof z == "number" && (h.minItems = z), typeof l == "number" && (h.maxItems = l);
            break;
          }
          case "record": {
            const h = S;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(u.keyType, {
              ...E,
              path: [...E.path, "propertyNames"]
            })), h.additionalProperties = this.process(u.valueType, {
              ...E,
              path: [...E.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const h = S, C = Vy(u.entries);
            C.every((A) => typeof A == "number") && (h.type = "number"), C.every((A) => typeof A == "string") && (h.type = "string"), h.enum = C;
            break;
          }
          case "literal": {
            const h = S, C = [];
            for (const A of u.values)
              if (A === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof A == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                C.push(Number(A));
              } else
                C.push(A);
            if (C.length !== 0) if (C.length === 1) {
              const A = C[0];
              h.type = A === null ? "null" : typeof A, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [A] : h.const = A;
            } else
              C.every((A) => typeof A == "number") && (h.type = "number"), C.every((A) => typeof A == "string") && (h.type = "string"), C.every((A) => typeof A == "boolean") && (h.type = "string"), C.every((A) => A === null) && (h.type = "null"), h.enum = C;
            break;
          }
          case "file": {
            const h = S, C = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: A, maximum: O, mime: x } = r._zod.bag;
            A !== void 0 && (C.minLength = A), O !== void 0 && (C.maxLength = O), x ? x.length === 1 ? (C.contentMediaType = x[0], Object.assign(h, C)) : h.anyOf = x.map((z) => ({ ...C, contentMediaType: z })) : Object.assign(h, C);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(u.innerType, E);
            this.target === "openapi-3.0" ? (m.ref = u.innerType, S.nullable = !0) : S.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "success": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(u.innerType, E), m.ref = u.innerType, S.default = JSON.parse(JSON.stringify(u.defaultValue));
            break;
          }
          case "prefault": {
            this.process(u.innerType, E), m.ref = u.innerType, this.io === "input" && (S._prefault = JSON.parse(JSON.stringify(u.defaultValue)));
            break;
          }
          case "catch": {
            this.process(u.innerType, E), m.ref = u.innerType;
            let h;
            try {
              h = u.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            S.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = S, C = r._zod.pattern;
            if (!C)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = C.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? u.in._zod.def.type === "transform" ? u.out : u.in : u.out;
            this.process(h, E), m.ref = h;
            break;
          }
          case "readonly": {
            this.process(u.innerType, E), m.ref = u.innerType, S.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "optional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, E), m.ref = h;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const y = this.metadataRegistry.get(r);
    return y && Object.assign(m.schema, y), this.io === "input" && kt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((i = m.schema).default ?? (i.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const i = {
      cycles: s?.cycles ?? "ref",
      reused: s?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: s?.external ?? void 0
    }, u = this.seen.get(r);
    if (!u)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const c = (g) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (i.external) {
        const C = i.external.registry.get(g[0])?.id, A = i.external.uri ?? ((x) => x);
        if (C)
          return { ref: A(C) };
        const O = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = O, { defId: O, ref: `${A("__shared")}#/${E}/${O}` };
      }
      if (g[1] === u)
        return { ref: "#" };
      const S = `#/${E}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: S + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const E = g[1], { ref: v, defId: S } = c(g);
      E.def = { ...E.schema }, S && (E.defId = S);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = v;
    };
    if (i.cycles === "throw")
      for (const g of this.seen.entries()) {
        const E = g[1];
        if (E.cycle)
          throw new Error(`Cycle detected: #/${E.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const g of this.seen.entries()) {
      const E = g[1];
      if (r === g[0]) {
        f(g);
        continue;
      }
      if (i.external) {
        const S = i.external.registry.get(g[0])?.id;
        if (r !== g[0] && S) {
          f(g);
          continue;
        }
      }
      if (this.metadataRegistry.get(g[0])?.id) {
        f(g);
        continue;
      }
      if (E.cycle) {
        f(g);
        continue;
      }
      if (E.count > 1 && i.reused === "ref") {
        f(g);
        continue;
      }
    }
    const m = (g, E) => {
      const v = this.seen.get(g), S = v.def ?? v.schema, h = { ...S };
      if (v.ref === null)
        return;
      const C = v.ref;
      if (v.ref = null, C) {
        m(C, E);
        const A = this.seen.get(C).schema;
        A.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (S.allOf = S.allOf ?? [], S.allOf.push(A)) : (Object.assign(S, A), Object.assign(S, h));
      }
      v.isParent || this.override({
        zodSchema: g,
        jsonSchema: S,
        path: v.path ?? []
      });
    };
    for (const g of [...this.seen.entries()].reverse())
      m(g[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), i.external?.uri) {
      const g = i.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      p.$id = i.external.uri(g);
    }
    Object.assign(p, u.def);
    const y = i.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (y[E.defId] = E.def);
    }
    i.external || Object.keys(y).length > 0 && (this.target === "draft-2020-12" ? p.$defs = y : p.definitions = y);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Z4(n, r) {
  if (n instanceof a_) {
    const i = new L0(r), u = {};
    for (const m of n._idmap.entries()) {
      const [p, y] = m;
      i.process(y);
    }
    const c = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: u
    };
    for (const m of n._idmap.entries()) {
      const [p, y] = m;
      c[p] = i.emit(y, {
        ...r,
        external: f
      });
    }
    if (Object.keys(u).length > 0) {
      const m = i.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: u
      };
    }
    return { schemas: c };
  }
  const s = new L0(r);
  return s.process(n), s.emit(n, r);
}
function kt(n, r) {
  const s = r ?? { seen: /* @__PURE__ */ new Set() };
  if (s.seen.has(n))
    return !1;
  s.seen.add(n);
  const u = n._zod.def;
  switch (u.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return kt(u.element, s);
    case "object": {
      for (const c in u.shape)
        if (kt(u.shape[c], s))
          return !0;
      return !1;
    }
    case "union": {
      for (const c of u.options)
        if (kt(c, s))
          return !0;
      return !1;
    }
    case "intersection":
      return kt(u.left, s) || kt(u.right, s);
    case "tuple": {
      for (const c of u.items)
        if (kt(c, s))
          return !0;
      return !!(u.rest && kt(u.rest, s));
    }
    case "record":
      return kt(u.keyType, s) || kt(u.valueType, s);
    case "map":
      return kt(u.keyType, s) || kt(u.valueType, s);
    case "set":
      return kt(u.valueType, s);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return kt(u.innerType, s);
    case "lazy":
      return kt(u.getter(), s);
    case "default":
      return kt(u.innerType, s);
    case "prefault":
      return kt(u.innerType, s);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return kt(u.in, s) || kt(u.out, s);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${u.type}`);
}
const G4 = /* @__PURE__ */ de("ZodISODateTime", (n, r) => {
  wE.init(n, r), ct.init(n, r);
});
function V4(n) {
  return E4(G4, n);
}
const Y4 = /* @__PURE__ */ de("ZodISODate", (n, r) => {
  EE.init(n, r), ct.init(n, r);
});
function $4(n) {
  return C4(Y4, n);
}
const X4 = /* @__PURE__ */ de("ZodISOTime", (n, r) => {
  CE.init(n, r), ct.init(n, r);
});
function F4(n) {
  return k4(X4, n);
}
const Q4 = /* @__PURE__ */ de("ZodISODuration", (n, r) => {
  kE.init(n, r), ct.init(n, r);
});
function K4(n) {
  return A4(Q4, n);
}
const J4 = (n, r) => {
  Qy.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => yw(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => vw(n, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        n.issues.push(s), n.message = JSON.stringify(n.issues, jf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        n.issues.push(...s), n.message = JSON.stringify(n.issues, jf, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Rn = de("ZodError", J4, {
  Parent: Error
}), W4 = /* @__PURE__ */ th(Rn), eC = /* @__PURE__ */ nh(Rn), tC = /* @__PURE__ */ xl(Rn), nC = /* @__PURE__ */ Nl(Rn), rC = /* @__PURE__ */ Sw(Rn), aC = /* @__PURE__ */ ww(Rn), iC = /* @__PURE__ */ Ew(Rn), sC = /* @__PURE__ */ Cw(Rn), oC = /* @__PURE__ */ kw(Rn), uC = /* @__PURE__ */ Aw(Rn), lC = /* @__PURE__ */ Tw(Rn), cC = /* @__PURE__ */ xw(Rn), Mt = /* @__PURE__ */ de("ZodType", (n, r) => (At.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(La(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
})), n.clone = (s, i) => ra(n, s, i), n.brand = () => n, n.register = ((s, i) => (s.add(n, i), n)), n.parse = (s, i) => W4(n, s, i, { callee: n.parse }), n.safeParse = (s, i) => tC(n, s, i), n.parseAsync = async (s, i) => eC(n, s, i, { callee: n.parseAsync }), n.safeParseAsync = async (s, i) => nC(n, s, i), n.spa = n.safeParseAsync, n.encode = (s, i) => rC(n, s, i), n.decode = (s, i) => aC(n, s, i), n.encodeAsync = async (s, i) => iC(n, s, i), n.decodeAsync = async (s, i) => sC(n, s, i), n.safeEncode = (s, i) => oC(n, s, i), n.safeDecode = (s, i) => uC(n, s, i), n.safeEncodeAsync = async (s, i) => lC(n, s, i), n.safeDecodeAsync = async (s, i) => cC(n, s, i), n.refine = (s, i) => n.check(WC(s, i)), n.superRefine = (s) => n.check(ek(s)), n.overwrite = (s) => n.check(oo(s)), n.optional = () => B0(n), n.nullable = () => U0(n), n.nullish = () => B0(U0(n)), n.nonoptional = (s) => YC(n, s), n.array = () => Ra(n), n.or = (s) => zC([n, s]), n.and = (s) => PC(n, s), n.transform = (s) => H0(n, UC(s)), n.default = (s) => ZC(n, s), n.prefault = (s) => VC(n, s), n.catch = (s) => XC(n, s), n.pipe = (s) => H0(n, s), n.readonly = () => KC(n), n.describe = (s) => {
  const i = n.clone();
  return Fs.add(i, { description: s }), i;
}, Object.defineProperty(n, "description", {
  get() {
    return Fs.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...s) => {
  if (s.length === 0)
    return Fs.get(n);
  const i = n.clone();
  return Fs.add(i, s[0]), i;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), o_ = /* @__PURE__ */ de("_ZodString", (n, r) => {
  rh.init(n, r), Mt.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...i) => n.check(N4(...i)), n.includes = (...i) => n.check(R4(...i)), n.startsWith = (...i) => n.check(j4(...i)), n.endsWith = (...i) => n.check(D4(...i)), n.min = (...i) => n.check(kl(...i)), n.max = (...i) => n.check(i_(...i)), n.length = (...i) => n.check(s_(...i)), n.nonempty = (...i) => n.check(kl(1, ...i)), n.lowercase = (i) => n.check(O4(i)), n.uppercase = (i) => n.check(M4(i)), n.trim = () => n.check(L4()), n.normalize = (...i) => n.check(z4(...i)), n.toLowerCase = () => n.check(P4()), n.toUpperCase = () => n.check(I4());
}), dC = /* @__PURE__ */ de("ZodString", (n, r) => {
  rh.init(n, r), o_.init(n, r), n.email = (s) => n.check(n4(fC, s)), n.url = (s) => n.check(o4(hC, s)), n.jwt = (s) => n.check(w4(xC, s)), n.emoji = (s) => n.check(u4(pC, s)), n.guid = (s) => n.check(z0(P0, s)), n.uuid = (s) => n.check(r4(rl, s)), n.uuidv4 = (s) => n.check(a4(rl, s)), n.uuidv6 = (s) => n.check(i4(rl, s)), n.uuidv7 = (s) => n.check(s4(rl, s)), n.nanoid = (s) => n.check(l4(mC, s)), n.guid = (s) => n.check(z0(P0, s)), n.cuid = (s) => n.check(c4(gC, s)), n.cuid2 = (s) => n.check(d4(vC, s)), n.ulid = (s) => n.check(f4(yC, s)), n.base64 = (s) => n.check(_4(kC, s)), n.base64url = (s) => n.check(b4(AC, s)), n.xid = (s) => n.check(h4(_C, s)), n.ksuid = (s) => n.check(p4(bC, s)), n.ipv4 = (s) => n.check(m4(SC, s)), n.ipv6 = (s) => n.check(g4(wC, s)), n.cidrv4 = (s) => n.check(v4(EC, s)), n.cidrv6 = (s) => n.check(y4(CC, s)), n.e164 = (s) => n.check(S4(TC, s)), n.datetime = (s) => n.check(V4(s)), n.date = (s) => n.check($4(s)), n.time = (s) => n.check(F4(s)), n.duration = (s) => n.check(K4(s));
});
function qt(n) {
  return t4(dC, n);
}
const ct = /* @__PURE__ */ de("ZodStringFormat", (n, r) => {
  ot.init(n, r), o_.init(n, r);
}), fC = /* @__PURE__ */ de("ZodEmail", (n, r) => {
  hE.init(n, r), ct.init(n, r);
}), P0 = /* @__PURE__ */ de("ZodGUID", (n, r) => {
  dE.init(n, r), ct.init(n, r);
}), rl = /* @__PURE__ */ de("ZodUUID", (n, r) => {
  fE.init(n, r), ct.init(n, r);
}), hC = /* @__PURE__ */ de("ZodURL", (n, r) => {
  pE.init(n, r), ct.init(n, r);
}), pC = /* @__PURE__ */ de("ZodEmoji", (n, r) => {
  mE.init(n, r), ct.init(n, r);
}), mC = /* @__PURE__ */ de("ZodNanoID", (n, r) => {
  gE.init(n, r), ct.init(n, r);
}), gC = /* @__PURE__ */ de("ZodCUID", (n, r) => {
  vE.init(n, r), ct.init(n, r);
}), vC = /* @__PURE__ */ de("ZodCUID2", (n, r) => {
  yE.init(n, r), ct.init(n, r);
}), yC = /* @__PURE__ */ de("ZodULID", (n, r) => {
  _E.init(n, r), ct.init(n, r);
}), _C = /* @__PURE__ */ de("ZodXID", (n, r) => {
  bE.init(n, r), ct.init(n, r);
}), bC = /* @__PURE__ */ de("ZodKSUID", (n, r) => {
  SE.init(n, r), ct.init(n, r);
}), SC = /* @__PURE__ */ de("ZodIPv4", (n, r) => {
  AE.init(n, r), ct.init(n, r);
}), wC = /* @__PURE__ */ de("ZodIPv6", (n, r) => {
  TE.init(n, r), ct.init(n, r);
}), EC = /* @__PURE__ */ de("ZodCIDRv4", (n, r) => {
  xE.init(n, r), ct.init(n, r);
}), CC = /* @__PURE__ */ de("ZodCIDRv6", (n, r) => {
  NE.init(n, r), ct.init(n, r);
}), kC = /* @__PURE__ */ de("ZodBase64", (n, r) => {
  OE.init(n, r), ct.init(n, r);
}), AC = /* @__PURE__ */ de("ZodBase64URL", (n, r) => {
  RE.init(n, r), ct.init(n, r);
}), TC = /* @__PURE__ */ de("ZodE164", (n, r) => {
  jE.init(n, r), ct.init(n, r);
}), xC = /* @__PURE__ */ de("ZodJWT", (n, r) => {
  zE.init(n, r), ct.init(n, r);
}), NC = /* @__PURE__ */ de("ZodUnknown", (n, r) => {
  LE.init(n, r), Mt.init(n, r);
});
function I0() {
  return T4(NC);
}
const OC = /* @__PURE__ */ de("ZodNever", (n, r) => {
  PE.init(n, r), Mt.init(n, r);
});
function MC(n) {
  return x4(OC, n);
}
const RC = /* @__PURE__ */ de("ZodArray", (n, r) => {
  IE.init(n, r), Mt.init(n, r), n.element = r.element, n.min = (s, i) => n.check(kl(s, i)), n.nonempty = (s) => n.check(kl(1, s)), n.max = (s, i) => n.check(i_(s, i)), n.length = (s, i) => n.check(s_(s, i)), n.unwrap = () => n.element;
});
function Ra(n, r) {
  return B4(RC, n, r);
}
const jC = /* @__PURE__ */ de("ZodObject", (n, r) => {
  UE.init(n, r), Mt.init(n, r), rt(n, "shape", () => r.shape), n.keyof = () => IC(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: I0() }), n.loose = () => n.clone({ ...n._zod.def, catchall: I0() }), n.strict = () => n.clone({ ...n._zod.def, catchall: MC() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => fw(n, s), n.safeExtend = (s) => hw(n, s), n.merge = (s) => pw(n, s), n.pick = (s) => cw(n, s), n.omit = (s) => dw(n, s), n.partial = (...s) => mw(u_, n, s[0]), n.required = (...s) => gw(l_, n, s[0]);
});
function uo(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...Ne(r)
  };
  return new jC(s);
}
const DC = /* @__PURE__ */ de("ZodUnion", (n, r) => {
  HE.init(n, r), Mt.init(n, r), n.options = r.options;
});
function zC(n, r) {
  return new DC({
    type: "union",
    options: n,
    ...Ne(r)
  });
}
const LC = /* @__PURE__ */ de("ZodIntersection", (n, r) => {
  qE.init(n, r), Mt.init(n, r);
});
function PC(n, r) {
  return new LC({
    type: "intersection",
    left: n,
    right: r
  });
}
const zf = /* @__PURE__ */ de("ZodEnum", (n, r) => {
  ZE.init(n, r), Mt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (i, u) => {
    const c = {};
    for (const f of i)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new zf({
      ...r,
      checks: [],
      ...Ne(u),
      entries: c
    });
  }, n.exclude = (i, u) => {
    const c = { ...r.entries };
    for (const f of i)
      if (s.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new zf({
      ...r,
      checks: [],
      ...Ne(u),
      entries: c
    });
  };
});
function IC(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((i) => [i, i])) : n;
  return new zf({
    type: "enum",
    entries: s,
    ...Ne(r)
  });
}
const BC = /* @__PURE__ */ de("ZodTransform", (n, r) => {
  GE.init(n, r), Mt.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new Zy(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(ro(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = n), s.issues.push(ro(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function UC(n) {
  return new BC({
    type: "transform",
    transform: n
  });
}
const u_ = /* @__PURE__ */ de("ZodOptional", (n, r) => {
  VE.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function B0(n) {
  return new u_({
    type: "optional",
    innerType: n
  });
}
const HC = /* @__PURE__ */ de("ZodNullable", (n, r) => {
  YE.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function U0(n) {
  return new HC({
    type: "nullable",
    innerType: n
  });
}
const qC = /* @__PURE__ */ de("ZodDefault", (n, r) => {
  $E.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function ZC(n, r) {
  return new qC({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : $y(r);
    }
  });
}
const GC = /* @__PURE__ */ de("ZodPrefault", (n, r) => {
  XE.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function VC(n, r) {
  return new GC({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : $y(r);
    }
  });
}
const l_ = /* @__PURE__ */ de("ZodNonOptional", (n, r) => {
  FE.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function YC(n, r) {
  return new l_({
    type: "nonoptional",
    innerType: n,
    ...Ne(r)
  });
}
const $C = /* @__PURE__ */ de("ZodCatch", (n, r) => {
  QE.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function XC(n, r) {
  return new $C({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const FC = /* @__PURE__ */ de("ZodPipe", (n, r) => {
  KE.init(n, r), Mt.init(n, r), n.in = r.in, n.out = r.out;
});
function H0(n, r) {
  return new FC({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const QC = /* @__PURE__ */ de("ZodReadonly", (n, r) => {
  JE.init(n, r), Mt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function KC(n) {
  return new QC({
    type: "readonly",
    innerType: n
  });
}
const JC = /* @__PURE__ */ de("ZodCustom", (n, r) => {
  WE.init(n, r), Mt.init(n, r);
});
function WC(n, r = {}) {
  return U4(JC, n, r);
}
function ek(n) {
  return H4(n);
}
const q0 = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Lf = "placeholder-chatHistory", tk = uo({
  justification: qt().describe("A brief, friendly explanation of the changes made."),
  name: qt().describe("The entry's new name/comment."),
  triggers: Ra(qt()).describe("The entry's new keywords/triggers."),
  content: qt().describe("The entry's new content.")
}), nk = uo({
  worldName: qt().describe("The name of the world where the new entry should be added."),
  name: qt().describe("The new entry's name/comment."),
  triggers: Ra(qt()).describe("The new entry's triggers."),
  content: qt().describe("The new entry's content.")
}), rk = uo({
  worldName: qt().describe("The name of the world containing the entry to change."),
  originalName: qt().describe("The original name/comment of the entry to change, used for identification."),
  newName: qt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: Ra(qt()).optional().describe("The entry's new list of triggers."),
  content: qt().optional().describe("The entry's new content.")
}), ak = uo({
  worldName: qt().describe("The name of the world containing the entry to remove."),
  name: qt().describe("The name/comment of the entry to remove.")
}), ik = uo({
  justification: qt().describe("A brief, friendly explanation of all the operations performed."),
  add: Ra(nk).optional().describe("A list of new entries to add."),
  change: Ra(rk).optional().describe("A list of existing entries to change."),
  remove: Ra(ak).optional().describe("A list of existing entries to remove.")
});
function gf(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Pf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((i) => i !== null && typeof i == "object" ? `${s}<item>
${Pf(i, r + 1)}${s}</item>
` : `${s}<item>${gf(i)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let i = "";
    for (const u of Object.keys(n)) {
      const c = n[u];
      c !== null && typeof c == "object" ? i += `${s}<${u}>
${Pf(c, r + 1)}${s}</${u}>
` : i += `${s}<${u}>${gf(c)}</${u}>
`;
    }
    return i;
  }
  return `${s}<value>${gf(n)}</value>
`;
}
function sk(n, r) {
  const s = Na(n);
  return r === "xml" ? `<root>
${Pf(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function ok(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function uk(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Na(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = ok(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const i = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (i) return Na(i);
  switch (uk(n.type)) {
    case "object": {
      const c = {}, f = n.properties || {};
      for (const m of Object.keys(f))
        c[m] = Na(f[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = Na(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [Na(c)];
    }
    case "string":
      return n.title || n.description || "string";
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return n.properties || n.additionalProperties ? Na({ ...n, type: "object" }) : n.items ? Na({ ...n, type: "array" }) : null;
  }
}
const lk = new Cy({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function If(n, r) {
  if (!(!r || !n || !r.properties))
    for (const s in r.properties) {
      if (!n.hasOwnProperty(s)) continue;
      const i = r.properties[s];
      let u = n[s];
      if (i.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], n[s] = u), i.type === "array" && i.items?.type === "object" && Array.isArray(u)) {
        const c = i.items.required || [], f = i.items.properties ? Object.keys(i.items.properties) : [], m = c.length > 0 ? c : f;
        if (m.length > 0) {
          const p = [];
          let y = !1;
          for (const g of u) {
            const E = (v) => typeof v != "object" || v === null ? !1 : m.some((S) => Object.prototype.hasOwnProperty.call(v, S));
            if (E(g))
              p.push(g);
            else {
              let v = !1;
              if (typeof g == "object" && g !== null)
                for (const S in g) {
                  const h = g[S];
                  if (E(h)) {
                    p.push(h), v = !0, y = !0;
                    break;
                  }
                  if (Array.isArray(h) && h.length > 0 && E(h[0])) {
                    p.push(...h), v = !0, y = !0;
                    break;
                  }
                }
              v || p.push(g);
            }
          }
          y && (u = p, n[s] = u);
        }
      }
      i.type === "object" && typeof u == "object" && u !== null ? If(u, i) : i.type === "array" && i.items?.type === "object" && Array.isArray(u) && u.forEach((c) => If(c, i.items)), i.type === "string" && typeof u != "string" ? n[s] = String(u) : i.type === "array" && i.items?.type === "string" && Array.isArray(u) && (n[s] = u.map(String));
    }
}
function ck(n, r, s = {}) {
  const i = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = n.match(i);
  let c = u ? u[1].trim() : n.trim();
  const { previousContent: f } = s;
  f && (c = f + c.trimEnd());
  try {
    switch (r) {
      case "xml":
        const m = V8.validate(c);
        if (m !== !0)
          throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        let p = lk.parse(c);
        return p.root && (p = p.root), s.schema && If(p, s.schema), p;
      case "json":
        return JSON.parse(c);
      case "none":
        return c;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (m) {
    throw console.error(`Error parsing response in format '${r}':`, m), console.error("Raw content received:", n), r === "xml" ? m.message.startsWith("Model response is not valid XML:") ? m : new Error(`Model response is not valid XML: ${m.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${m.message}`);
  }
}
const dk = new K2();
async function Bf(n, r, s, i, u, c) {
  const f = !i.json_schema && !1;
  return new Promise((m, p) => {
    const y = new AbortController(), g = c ?? y.signal;
    c && c.addEventListener("abort", () => y.abort(), { once: !0 }), dk.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: i
      },
      {
        abortController: y,
        onEntry: void 0,
        onFinish: (E, v, S) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : v === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (v || p(new Error("No data received from LLM")), S ? p(S) : m(v))
      }
    );
  });
}
async function fk(n, r, s, i) {
  const u = await Bf(n, r, s, {}, void 0, i);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function Z0(n, r, s, i, u, c, f) {
  const m = Pt.getSettings();
  let p, y;
  const g = Z4(s);
  if (u === "native") {
    if (p = await Bf(
      n,
      r,
      c,
      {
        json_schema: { name: i, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    y = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const v = u, S = sk(g, v), h = JSON.stringify(g, null, 2), C = v === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", A = m.prompts[C]?.content;
    if (!A)
      throw new Error(`Prompt template for mode "${v}" not found.`);
    const O = {
      example_response: S,
      schema: h
    }, z = { role: "system", content: yn.compile(A, { noEscape: !0, strict: !0 })(O) };
    if (p = await Bf(
      n,
      [...r, z],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    y = ck(p.content, v, { schema: g });
  }
  const E = s.safeParse(y);
  if (!E.success) {
    const v = `Model response failed schema validation for ${i}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", y), await Se("error", v), new Error(v);
  }
  return E.data;
}
const hk = ({ originalContent: n, newContent: r }) => {
  const s = se.useMemo(() => {
    const i = Hy(n, r);
    let u = "", c = "";
    return i.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), y = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += y), f.removed || (c += y);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, c_ = ({ before: n, after: r }) => {
  const s = se.useMemo(() => {
    const i = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && i.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && i.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && i.push({ label: "Content", before: n.content || "", after: r.content || "" })), i;
  }, [n, r]);
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: s.map(({ label: i, before: u, after: c }) => /* @__PURE__ */ N.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ N.jsx("h4", { children: i }),
    /* @__PURE__ */ N.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ N.jsx("span", { children: "Before" }),
      /* @__PURE__ */ N.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ N.jsx(hk, { originalContent: u, newContent: c })
  ] }, i)) });
}, pk = ({ before: n, after: r }) => {
  const { added: s, removed: i, changed: u } = se.useMemo(() => {
    const f = n || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([v, S]) => {
      S.forEach((h) => {
        const C = `${v}::${h.uid}`;
        m.set(C, { worldName: v, entry: h });
      });
    });
    const p = [], y = [], g = [], E = Object.entries(r || {}).flatMap(
      ([v, S]) => S.map((h) => ({ worldName: v, entry: h }))
    );
    for (const { worldName: v, entry: S } of E) {
      const h = `${v}::${S.uid}`;
      if (m.has(h)) {
        const A = m.get(h).entry;
        (A.comment !== S.comment || A.content !== S.content || (A.key || []).join(",") !== (S.key || []).join(",")) && g.push({ worldName: v, before: A, after: S }), m.delete(h);
      } else
        p.push({ worldName: v, entry: S });
    }
    return m.forEach(({ worldName: v, entry: S }) => {
      y.push({ worldName: v, entry: S });
    }), { added: p, removed: y, changed: g };
  }, [n, r]), c = s.length > 0 || i.length > 0 || u.length > 0;
  return /* @__PURE__ */ N.jsx("div", { className: "global-diff", children: c ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    s.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Added Entries (",
        s.length,
        ")"
      ] }),
      s.map(({ worldName: f, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry added", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    i.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Removed Entries (",
        i.length,
        ")"
      ] }),
      i.map(({ worldName: f, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry removed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(from ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    u.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Changed Entries (",
        u.length,
        ")"
      ] }),
      u.map(({ worldName: f, before: m, after: p }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry changed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          p.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx(c_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, ah = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ N.jsx(pk, { before: r, after: s }) : /* @__PURE__ */ N.jsx(c_, { before: r, after: s }) })
] }), mk = ({ currentState: n, initialState: r }) => {
  const [s, i] = se.useState(!1), u = se.useMemo(
    () => [
      { label: "Name", value: n.comment },
      { label: "Triggers", value: _n(n).join(", ") },
      { label: "Content", value: n.content }
    ],
    [n]
  );
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s ? "Comparing with Original State" : "Current Entry State" }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (c) => i(c.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(ah, { sessionType: "entry", before: r, after: n }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ N.jsx("label", { children: c }),
      /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, gk = ({ currentState: n, initialState: r }) => {
  const [s, i] = se.useState(!1);
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (u) => i(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(ah, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([u, c]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
      /* @__PURE__ */ N.jsx("h4", { children: u }),
      c.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle-text", children: "No entries in this world." }) : c.map((f) => /* @__PURE__ */ N.jsxs("div", { className: "state-field-group", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: "Name" }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f.comment || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: "Triggers" }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: (f.key || []).join(", ") || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: "Content" }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f.content || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] })
      ] }, f.uid))
    ] }, u)) })
  ] });
}, Ni = SillyTavern.getContext(), vk = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = Array.isArray(r.triggers) ? r.triggers : _n(n), s.content = r.content, ea(s);
}, yk = (n, r) => {
  const s = structuredClone(n);
  if (r.remove)
    for (const i of r.remove) {
      const { worldName: u, name: c } = i;
      s[u] && (s[u] = s[u].filter((f) => f.comment !== c));
    }
  if (r.change)
    for (const i of r.change) {
      const { worldName: u, originalName: c } = i, f = s[u]?.find((m) => m.comment === c);
      f ? (i.newName !== void 0 && (f.comment = i.newName), i.triggers !== void 0 && (f.key = Array.isArray(i.triggers) ? i.triggers : []), i.content !== void 0 && (f.content = i.content), Object.assign(f, ea(f))) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${u}"`), Se("warning", `Could not find entry to change: "${c}" in world "${u}"`));
    }
  if (r.add)
    for (const i of r.add) {
      const { worldName: u, name: c, triggers: f, content: m } = i;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, y = Zf(u, p);
      y && (y.comment = c, y.key = Array.isArray(f) ? f : [], y.content = m, s[u].push(ea(y)));
    }
  return s;
}, _k = ({ initialState: n, onSave: r, onClose: s }) => {
  const [i, u] = se.useState(n.comment), [c, f] = se.useState(_n(n).join(", ")), [m, p] = se.useState(n.content), y = () => {
    const g = {
      ...structuredClone(n),
      comment: i,
      key: c.split(",").map((E) => E.trim()).filter(Boolean),
      content: m
    };
    r(g);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: "Editing Entry State" }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsxs(xe, { onClick: y, children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ N.jsxs(xe, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Name" }),
        /* @__PURE__ */ N.jsx(zy, { type: "text", value: i, onInput: (g) => u(g.currentTarget.value) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ N.jsx(Sr, { value: c, onChange: (g) => f(g.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Content" }),
        /* @__PURE__ */ N.jsx(Sr, { value: m, onChange: (g) => p(g.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, bk = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: i,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = se.useState(n.messages), [p, y] = se.useState(""), [g, E] = se.useState(!1), [v, S] = se.useState(null), [h, C] = se.useState(!1), [A, O] = se.useState(!1), [x, z] = se.useState(null), [l, _] = se.useState(""), w = se.useRef(null), k = se.useRef(null);
  se.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const R = se.useCallback(
    (V, H, ne) => {
      if (JSON.stringify(ne) === JSON.stringify(H))
        return V;
      const te = Pt.getSettings();
      let ce = "";
      if (n.type === "global") {
        const re = te.prompts.reviseGlobalStateUpdate?.content, pe = te.prompts.reviseGlobalStateUpdateAddedModified?.content, je = te.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !je) return V;
        const Le = ne || {}, ge = H || {}, he = /* @__PURE__ */ new Map();
        Object.entries(Le).forEach(([dt, ve]) => {
          ve.forEach((ye) => {
            he.set(`${dt}::${ye.uid}`, ye);
          });
        });
        const _e = /* @__PURE__ */ new Map();
        Object.entries(ge).forEach(([dt, ve]) => {
          ve.forEach((ye) => {
            _e.set(`${dt}::${ye.uid}`, ye);
          });
        });
        const De = {}, We = [];
        if (_e.forEach((dt, ve) => {
          const [ye] = ve.split("::"), qe = he.get(ve);
          let Ze = !1;
          if (!qe)
            Ze = !0;
          else {
            const et = (dt.content || "") !== (qe.content || ""), Zn = (dt.comment || "") !== (qe.comment || ""), Dn = (dt.key || []).sort().join(",") !== (qe.key || []).sort().join(",");
            (et || Zn || Dn) && (Ze = !0);
          }
          Ze && (De[ye] || (De[ye] = []), De[ye].push(dt));
        }), he.forEach((dt, ve) => {
          if (!_e.has(ve)) {
            const [ye] = ve.split("::");
            We.push({ worldName: ye, comment: dt.comment });
          }
        }), Object.keys(De).length === 0 && We.length === 0)
          return V;
        const Fe = yn.compile(pe, { noEscape: !0 })({
          changedLorebooks: De
        }), jn = yn.compile(je, { noEscape: !0 })({ removedEntries: We });
        ce = yn.compile(re, { noEscape: !0 })({
          addedModifiedContent: Fe,
          removedContent: jn
        });
      } else {
        const re = H;
        ce = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${re.comment})
Triggers: ${(re.key || []).join(", ")}
Content: ${re.content}`;
      }
      if (ce = Ni.substituteParams(ce.trim()), ce) {
        const re = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ce,
          isStateUpdate: !0
        };
        return [...V, re];
      }
      return V;
    },
    [n.type, n.worldName]
  ), L = se.useCallback(
    async (V, H, ne, te) => {
      const ce = Pt.getSettings();
      if (!n.profileId) {
        Se("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ne(), E(!0);
      try {
        const re = [], pe = Ni.extensionSettings.connectionManager?.profiles?.find(
          (he) => he.id === n.profileId
        ), je = pe?.api ? Ni.CONNECT_API_MAP[pe.api].selected : void 0;
        if (!je) {
          Se("warning", "No API selected for this session.");
          return;
        }
        for (const he of V)
          if (he.id === Lf) {
            if (an === void 0 && !Xt) continue;
            const _e = await iy(je, c);
            _e.warnings?.length && _e.warnings.forEach((De) => Se("warning", De)), re.push(..._e.result);
          } else
            re.push(he);
        const Le = V.slice(0, V.length - (H ? 0 : 1)).reverse().find((he) => he.stateSnapshot)?.stateSnapshot ?? u;
        let ge = "";
        if (n.type === "global") {
          const he = ce.prompts.currentLorebooks?.content;
          if (he) {
            const _e = { currentLorebooks: Le };
            ge = yn.compile(he, { noEscape: !0 })(_e);
          }
        } else {
          const he = Le;
          ge = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${he.comment})
Triggers: ${(he.key || []).join(", ")}
Content: ${he.content}`;
        }
        if (ge = Ni.substituteParams(ge.trim()), ge) {
          const he = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: ge
          }, _e = re.pop();
          re.push(he), _e && re.push(_e);
        }
        if (n.isReadonly) {
          re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const he = await fk(
            n.profileId,
            re,
            ce.maxResponseToken,
            k.current.signal
          ), _e = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: he
          }, De = [...V, _e];
          m(De), i({ ...n, messages: De });
        } else {
          let he, _e;
          if (n.type === "entry") {
            const Fe = await Z0(
              n.profileId,
              re,
              tk,
              q0.ENTRY,
              n.promptEngineeringMode,
              ce.maxResponseToken,
              k.current.signal
            );
            he = vk(Le, Fe), _e = Fe.justification;
          } else {
            const Fe = await Z0(
              n.profileId,
              re,
              ik,
              q0.GLOBAL,
              n.promptEngineeringMode,
              ce.maxResponseToken,
              k.current.signal
            );
            he = yk(Le, Fe), _e = Fe.justification;
          }
          const De = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: _e,
            stateSnapshot: he
          };
          let We = [...V, De];
          We = R(We, he, Le), m(We), i({ ...n, messages: We });
        }
      } catch (re) {
        re.name === "AbortError" ? Se("info", "Request was cancelled.") : (console.error("Revise request failed:", re), Se("error", `Request failed: ${re.message}`)), te();
      } finally {
        E(!1), k.current = null;
      }
    },
    [n, i, u, c, R]
  ), j = se.useCallback(async () => {
    if (!p.trim() || g) return;
    const V = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, H = f;
    await L(
      [...f, V],
      !1,
      () => {
        m([...f, V]), y("");
      },
      () => m(H)
    );
  }, [p, g, f, L]), P = se.useCallback(async () => {
    if (g || f.length === 0) return;
    const V = f;
    let H = [...f];
    const ne = f.findLastIndex((te) => !te.isStateUpdate);
    ne > -1 && f[ne].role === "assistant" && (H = f.slice(0, ne)), await L(
      H,
      !0,
      () => m(H),
      () => m(V)
    );
  }, [g, f, L]), Z = () => {
    const V = f.slice().reverse().find((H) => H.stateSnapshot)?.stateSnapshot ?? u;
    s(V), r();
  }, F = (V) => {
    const H = f.findIndex((ce) => ce.id === V);
    if (H < 0 || !f[H].stateSnapshot) return;
    const ne = f[H].stateSnapshot;
    let te = u;
    for (let ce = H - 1; ce >= 0; ce--)
      if (f[ce].stateSnapshot) {
        te = f[ce].stateSnapshot;
        break;
      }
    S({ before: te, after: ne });
  }, Y = (V) => {
    z(V.id), _(V.content);
  }, W = () => {
    z(null), _("");
  }, M = async () => {
    if (!x) return;
    const V = f.findIndex((pe) => pe.id === x);
    if (V === -1 || !await Ni.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ne = f, te = f.slice(0, V), ce = { ...f[V], content: l }, re = [...te, ce];
    W(), await L(
      re,
      !1,
      () => m(re),
      () => m(ne)
    );
  }, B = async (V) => {
    const H = f.findIndex((re) => re.id === V);
    if (H === -1) return;
    const ne = !!f[H].isInitial;
    if (!await Ni.Popup.show.confirm(
      "Delete Message",
      ne ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const ce = ne ? f.filter((re) => re.isInitial && re.id !== V) : f.slice(0, H);
    m(ce), i({ ...n, messages: ce }), Se("info", "Message history has been updated.");
  }, K = (V) => {
    const H = f.slice().reverse().find((ce) => ce.stateSnapshot)?.stateSnapshot ?? u, ne = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: V
    };
    let te = [...f, ne];
    te = R(te, V, H), m(te), i({ ...n, messages: te }), O(!1);
  }, ae = f.slice().reverse().find((V) => V.stateSnapshot)?.stateSnapshot ?? u, I = f.filter((V) => !V.isStateUpdate), $ = I.filter((V) => V.isInitial), le = I.filter((V) => !V.isInitial);
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h2", { children: n.name }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ N.jsx(
            "input",
            {
              type: "checkbox",
              checked: n.isReadonly ?? !1,
              onChange: (V) => i({ ...n, isReadonly: V.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ N.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ N.jsx(
          Ly,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (V) => i({ ...n, profileId: V?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ N.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (V) => i({ ...n, promptEngineeringMode: V.target.value }),
            title: "Prompt Engineering Mode",
            disabled: n.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ N.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ N.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ N.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        n.type === "entry" && /* @__PURE__ */ N.jsx(xe, { onClick: () => O(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ N.jsx(xe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ N.jsxs(xe, { onClick: Z, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-messages", children: [
      $.length > 0 && /* @__PURE__ */ N.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ N.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ N.jsx("div", { className: "initial-messages-content", children: $.map(
          (V) => x === V.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ N.jsx(Sr, { value: l, onChange: (H) => _(H.target.value), rows: 5 }),
            /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ N.jsxs(xe, { onClick: M, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ N.jsxs(xe, { onClick: W, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, V.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: V.content }) }),
            !g && V.id !== Lf && /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ N.jsx(
                xe,
                {
                  className: "message-action-button",
                  onClick: () => Y(V),
                  title: "Edit Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ N.jsx(
                xe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => B(V.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, V.id)
        ) })
      ] }),
      le.map(
        (V) => x === V.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ N.jsx(Sr, { value: l, onChange: (H) => _(H.target.value), rows: 3 }),
          /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ N.jsxs(xe, { onClick: M, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ N.jsxs(xe, { onClick: W, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, V.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              xe,
              {
                className: "message-action-button",
                onClick: () => Y(V),
                title: "Edit and Fork",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            V.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              xe,
              {
                className: "message-action-button",
                onClick: () => F(V.id),
                title: "Compare changes",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ N.jsx(
              xe,
              {
                className: "message-action-button danger_button",
                onClick: () => B(V.id),
                title: "Delete Message",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${V.role}`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: V.content }) })
        ] }, V.id)
      ),
      le.length > 0 && !g && /* @__PURE__ */ N.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ N.jsxs(xe, { onClick: P, title: "Regenerate response", children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      g && /* @__PURE__ */ N.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ N.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => k.current?.abort(),
            className: "danger_button",
            title: "Cancel Request",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-stop" })
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("div", { ref: w })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ N.jsx(
        Sr,
        {
          value: p,
          onChange: (V) => y(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!x,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), j());
          }
        }
      ),
      /* @__PURE__ */ N.jsx(xe, { onClick: j, disabled: g || !p.trim() || !!x, children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    v && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(ah, { sessionType: n.type, before: v.before, after: v.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ N.jsx(mk, { currentState: ae, initialState: u }) : /* @__PURE__ */ N.jsx(
          gk,
          {
            currentState: ae,
            initialState: u
          }
        ),
        onComplete: () => C(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    A && n.type === "entry" && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          _k,
          {
            initialState: ae,
            onSave: (V) => {
              K(V), O(!1);
            },
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function Sk(n, r, s, i, u, c, f) {
  const m = Pt.getSettings(), p = m.mainContextTemplatePresets[i];
  if (!p)
    throw new Error(`Main context template preset "${i}" not found.`);
  const y = [], g = {
    user: Me.name1 || "You",
    char: Me.name2 || "Character",
    persona: Me.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = n;
    else {
      const v = {};
      Object.entries(f).filter(([S]) => c.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(c.selectedEntryUids[S] ?? []), A = C.size > 0 ? h.filter((O) => C.has(O.uid)) : h.filter((O) => !O.disable);
        A.length > 0 && (v[S] = A);
      }), g.currentLorebooks = v;
    }
  if (r === "entry") {
    const v = n;
    g.entryToRevise = {
      worldName: s,
      name: v.comment,
      triggers: _n(v).join(", "),
      content: v.content
    };
  }
  for (const v of p.prompts) {
    if (!v.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(v.promptName) || v.promptName === "chatHistory" && u.messages.type === "none" || an === void 0 && !Xt && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      y.push({
        id: Lf,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[v.promptName];
    if (S) {
      let h = yn.compile(S.content, { noEscape: !0 })(g);
      h = Me.substituteParams(h), h.trim() && y.push({
        id: `im-${y.length}`,
        role: v.role,
        content: h.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const v = yn.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? n.comment : ""
    });
    y.push({
      id: `im-${y.length}`,
      role: "system",
      content: v,
      isInitial: !0
    });
  }
  return y;
}
const al = SillyTavern.getContext(), G0 = "worldInfoRecommender_reviseSessions", d_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: i,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = se.useState([]), [y, g] = se.useState(null), [E, v] = se.useState(!0), S = se.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  se.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(G0) || "[]");
    p(w), v(!1);
  }, []);
  const h = se.useMemo(() => n.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, n.type, S]), C = (w) => {
    localStorage.setItem(G0, JSON.stringify(w)), p(w);
  }, A = async () => {
    const w = await al.Popup.show.input(
      "New Session Name",
      n.type === "entry" ? `Revise "${n.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = Pt.getSettings();
        if (!k.profileId) {
          Se("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const R = await Sk(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          c
        ), L = {
          id: `rs-${Date.now()}`,
          name: w,
          type: n.type,
          targetEntryIdentifier: n.type === "entry" ? S : void 0,
          worldName: n.type === "entry" ? n.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: R,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode,
          isReadonly: !1
        };
        g(L);
      } catch (k) {
        const R = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), Se("error", `Failed to create session: ${R}`);
      }
  }, O = (w) => {
    g(w);
  }, x = async (w) => {
    if (await al.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const R = m.filter((L) => L.id !== w);
      C(R);
    }
  }, z = (w) => {
    const k = m.findIndex((L) => L.id === w.id), R = [...m];
    k !== -1 ? R[k] = w : R.push(w), C(R), g(w);
  }, l = (w) => {
    n.type === "entry" ? i({
      worldName: n.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : i(w), s();
  };
  if (y) {
    const w = al.extensionSettings.connectionManager?.profiles?.find(
      (L) => L.id === y.profileId
    ), k = f.messages, R = {
      targetCharacterId: an,
      ignoreCharacterFields: !f.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !f.authorNote,
      includeNames: !!Xt,
      presetName: w?.preset,
      contextName: w?.context,
      instructName: w?.instruct
    };
    if (!an && !Xt)
      R.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (k.type) {
        case "none":
          R.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          R.messageIndexesBetween = { start: 0, end: k.first ?? 10 };
          break;
        case "last": {
          const L = al.chat?.length ?? 0, j = k.last ?? 10;
          R.messageIndexesBetween = {
            end: Math.max(0, L - 1),
            start: Math.max(0, L - j)
          };
          break;
        }
        case "range":
          k.range && (R.messageIndexesBetween = {
            start: k.range.start,
            end: k.range.end
          });
          break;
      }
    return /* @__PURE__ */ N.jsx(
      bk,
      {
        session: y,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: z,
        initialState: r,
        chatContextOptions: R
      }
    );
  }
  const _ = n.type === "entry" ? `Revise Sessions for "${n.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ N.jsx("div", { className: "popup_header", children: /* @__PURE__ */ N.jsx("h2", { children: _ }) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ N.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "session-info", onClick: () => O(w), children: [
        /* @__PURE__ */ N.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ N.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ N.jsx(xe, { className: "danger_button", onClick: () => x(w.id), children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-actions", children: /* @__PURE__ */ N.jsxs(xe, { onClick: A, className: "menu_button", children: [
      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, wk = new US.Converter(), Ek = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: i,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: y,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [v, S] = se.useState(() => s.find((I) => I === n) ?? s[0] ?? ""), [h, C] = se.useState(!1), [A, O] = se.useState(!1), [x, z] = se.useState(!1), [l, _] = se.useState(!1), [w, k] = se.useState(!1), [R, L] = se.useState(!1), [j, P] = se.useState(""), Z = se.useRef(null), F = se.useMemo(
    () => !!y[v]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [v, r.uid, r.comment, y]
  ), Y = A || x, W = async () => {
    C(!0), await c(r, n, v);
  }, M = async () => {
    O(!0), await m({ worldName: n, entry: r, prompt: j, mode: "continue" }), O(!1);
  }, B = async () => {
    z(!0), await m({ worldName: n, entry: r, prompt: j, mode: "revise" }), z(!1);
  }, K = (ae) => {
    p(n, r, ea(ae), u);
  };
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ N.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: v,
            onChange: (ae) => S(ae.target.value),
            children: s.map((ae) => /* @__PURE__ */ N.jsx("option", { value: ae, children: ae }, ae))
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: W, disabled: h || Y, className: "menu_button interactable add", children: F ? "Update" : "Add" }),
        /* @__PURE__ */ N.jsxs(
          xe,
          {
            onClick: () => L(!0),
            disabled: Y,
            className: "menu_button interactable",
            title: "Revise this entry with a chat-based AI session.",
            children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
              " Revise"
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: M,
            disabled: Y,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: A ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: B,
            disabled: Y,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: x ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: () => _(!0), disabled: Y, className: "menu_button interactable edit", children: "Edit" }),
        F && /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => k(!0),
            disabled: Y,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => f(r, n, !0),
            disabled: Y,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => f(r, n, !1),
            disabled: Y,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ N.jsx("div", { className: "key", children: _n(r).join(", ") }),
      /* @__PURE__ */ N.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: wk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ N.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
        Sr,
        {
          value: j,
          onChange: (ae) => P(ae.target.value),
          placeholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    l && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(sw, { ref: Z, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && Z.current) {
            const { updatedEntry: I, updatedRegexIds: $ } = Z.current.getFormData();
            p(n, r, I, $);
          }
          _(!1);
        }
      }
    ),
    w && i && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(aw, { originalEntry: i, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    R && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          d_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => L(!1),
            onApply: K,
            sessionForContext: g,
            allEntries: y,
            contextToSend: E
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, V0 = se.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, i) => {
    const [u, c] = se.useState(""), [f, m] = se.useState(() => {
      const v = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([S, h]) => {
        h.forEach((C) => v.add(`${S}::${C}`));
      }), v;
    }), p = se.useMemo(() => {
      if (!u)
        return n;
      const v = u.toLowerCase(), S = {};
      return Object.entries(n).forEach(([h, C]) => {
        const A = C.filter(
          (O) => O.comment.toLowerCase().includes(v) || h.toLowerCase().includes(v)
        );
        A.length > 0 && (S[h] = A);
      }), S;
    }, [u, n]);
    se.useImperativeHandle(i, () => ({
      getSelection: () => {
        const v = {};
        return f.forEach((S) => {
          const [h, C] = S.split("::"), A = parseInt(C, 10);
          v[h] || (v[h] = []), v[h].push(A);
        }), v;
      }
    }));
    const y = (v, S) => {
      const h = `${v}::${S}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, g = () => {
      const v = /* @__PURE__ */ new Set();
      Object.entries(p).forEach(([S, h]) => {
        h.forEach((C) => v.add(`${S}::${C.uid}`));
      }), m(v);
    }, E = () => {
      m(/* @__PURE__ */ new Set());
    };
    return /* @__PURE__ */ N.jsxs("div", { className: "select-entries-popup", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s }),
      /* @__PURE__ */ N.jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ N.jsx(
          "input",
          {
            type: "text",
            className: "text_pole",
            placeholder: "Filter by name or lorebook...",
            value: u,
            onChange: (v) => c(v.target.value)
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ N.jsx(xe, { onClick: E, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "entry-list", children: Object.keys(p).length === 0 ? /* @__PURE__ */ N.jsx("p", { children: "No entries match your filter." }) : Object.entries(p).map(([v, S]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ N.jsx("h4", { children: v }),
        /* @__PURE__ */ N.jsx("ul", { children: S.map((h) => /* @__PURE__ */ N.jsx("li", { children: /* @__PURE__ */ N.jsxs("label", { children: [
          /* @__PURE__ */ N.jsx(
            "input",
            {
              type: "checkbox",
              checked: f.has(`${v}::${h.uid}`),
              onChange: () => y(v, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, v)) })
    ] });
  }
);
yn.helpers.join || yn.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
yn.helpers.is_not_empty || yn.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Un = SillyTavern.getContext(), il = () => an ? ay(an) : Xt;
function Y0(n, r, s) {
  const i = ea(n);
  s[r] || (s[r] = []);
  const u = s[r], c = u.find((p) => p.uid === i.uid), f = !!c;
  let m;
  if (f) {
    const p = (i.content || "") !== (c.content || ""), y = (i.comment || "") !== (c.comment || ""), g = _n(i).slice().sort().join(",") !== _n(c).slice().sort().join(",");
    if (!p && !y && !g)
      return "unchanged";
    m = c;
  } else {
    const p = { entries: Object.fromEntries(u.map((g) => [g.uid, g])) }, y = Zf(r, p);
    if (!y) throw new Error("Failed to create new World Info entry.");
    m = y, u.push(m);
  }
  return Object.assign(m, {
    key: i.key,
    content: i.content,
    comment: i.comment
  }), f ? "updated" : "added";
}
const Ck = () => {
  const n = By(), r = Pt.getSettings(), [s, i] = se.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, c] = se.useState([]), [f, m] = se.useState({}), [p, y] = se.useState([]), [g, E] = se.useState(!0), [v, S] = se.useState(!1), [h, C] = se.useState(!1), [A, O] = se.useState(!1), [x, z] = se.useState(!1), l = se.useRef(null), _ = se.useRef(null), w = se.useMemo(() => il() ?? "_global", [an, Xt]);
  se.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), y([]);
      const ne = il(), te = `worldInfoRecommend_${w}`, ce = JSON.parse(localStorage.getItem(te) ?? "{}"), re = {
        suggestedEntries: ce.suggestedEntries ?? {},
        blackListedEntries: ce.blackListedEntries ?? [],
        selectedWorldNames: ce.selectedWorldNames ?? [],
        selectedEntryUids: ce.selectedEntryUids ?? {},
        regexIds: ce.regexIds ?? {}
      };
      let pe = {};
      if (ne)
        if (Xt) {
          const ge = await dl(["chat", "persona", "global"]);
          ge && (pe = ge);
          const he = Xg.find((_e) => _e.id === Xt);
          if (he)
            for (const _e of he.members) {
              const De = Un.characters.findIndex((We) => We.avatar === _e);
              if (De !== -1) {
                const We = await dl(["character"], !0, De);
                We && (pe = { ...pe, ...We });
              }
            }
        } else
          pe = await dl(["all"], !0, an);
      else
        for (const ge of L1) {
          const he = await Un.loadWorldInfo(ge);
          he && (pe[ge] = Object.values(he.entries));
        }
      m(pe);
      const je = Object.keys(pe);
      c(je), re.selectedWorldNames.length === 0 && w !== "_global" ? re.selectedWorldNames = [...je] : re.selectedWorldNames = re.selectedWorldNames.filter(
        (ge) => je.includes(ge)
      );
      const Le = {};
      if (re.selectedEntryUids) {
        for (const [ge, he] of Object.entries(re.selectedEntryUids))
          if (pe[ge]) {
            const _e = new Set(pe[ge].map((We) => We.uid)), De = he.filter((We) => _e.has(We));
            De.length > 0 && (Le[ge] = De);
          }
      }
      if (re.selectedEntryUids = Le, i(re), Xt) {
        const ge = Xg.find((he) => he.id === Xt);
        if (ge?.generation_mode === 0) {
          const he = ge.members.map((_e) => Un.characters.find((De) => De.avatar === _e)).filter((_e) => !!_e);
          y(he);
        }
      }
      E(!1);
    })();
  }, [w]), se.useEffect(() => {
    if (g) return;
    const H = `worldInfoRecommend_${w}`;
    localStorage.setItem(H, JSON.stringify(s));
  }, [s, w, g]);
  const k = (H, ne) => {
    Pt.getSettings()[H] = ne, Pt.saveSettings(), n();
  }, R = (H, ne) => {
    Pt.getSettings().contextToSend[H] = ne, Pt.saveSettings(), n();
  }, L = se.useCallback(
    async (H, ne, te = !1) => {
      const ce = structuredClone(f), re = Y0(H, ne, ce);
      if (m(ce), !te) {
        const pe = { entries: Object.fromEntries(ce[ne].map((je) => [je.uid, je])) };
        await Un.saveWorldInfo(ne, pe), Un.reloadWorldInfoEditor(ne, !0);
      }
      return re;
    },
    [f]
  ), j = se.useCallback(
    async (H) => {
      if (!r.profileId) return Se("warning", "Please select a connection profile.");
      const ne = H?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!H && !ne)
        return Se("warning", "Please enter a prompt.");
      S(!0);
      try {
        const te = Un.extensionSettings.connectionManager?.profiles?.find(
          (he) => he.id === r.profileId
        );
        if (!te) throw new Error("Connection profile not found.");
        const ce = il(), re = {
          presetName: te.preset,
          contextName: te.context,
          instructName: te.instruct,
          syspromptName: te.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Xt
        };
        if (!ce)
          re.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              re.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              re.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const he = r.contextToSend.messages.last ?? 10, _e = Un.chat?.length ?? 0;
              re.messageIndexesBetween = {
                end: Math.max(0, _e - 1),
                start: Math.max(0, _e - he)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (re.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const pe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pe.stDescription, (!r.contextToSend.worldInfo || s.selectedWorldNames.length === 0) && delete pe.currentLorebooks;
        const je = Object.values(s.suggestedEntries).some((he) => he.length > 0);
        (!r.contextToSend.suggestedEntries || !je) && delete pe.suggestedLorebooks, s.blackListedEntries.length === 0 && delete pe.blackListedEntries;
        const Le = H ? { worldName: H.worldName, entry: H.entry, mode: H.mode } : void 0, ge = await Dy({
          profileId: r.profileId,
          userPrompt: ne,
          buildPromptOptions: re,
          session: s,
          entriesGroupByWorldName: f,
          promptSettings: pe,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((he) => he.enabled).map((he) => ({ promptName: he.promptName, role: he.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: Le
        });
        Object.keys(ge).length > 0 ? i(H ? (he) => {
          const _e = structuredClone(he.suggestedEntries), De = H.worldName, We = ge[De]?.[0];
          if (_e[De] && We) {
            const Fe = _e[De].findIndex(
              (jn) => jn.uid === H.entry.uid && jn.comment === H.entry.comment
            );
            Fe !== -1 && (_e[De][Fe] = We);
          }
          return { ...he, suggestedEntries: _e };
        } : (he) => {
          const _e = structuredClone(he.suggestedEntries);
          for (const [De, We] of Object.entries(ge)) {
            _e[De] || (_e[De] = []);
            for (const Fe of We)
              _e[De].some((jn) => jn.uid === Fe.uid && jn.comment === Fe.comment) || _e[De].push(Fe);
          }
          return { ...he, suggestedEntries: _e };
        }) : Se("warning", "No results from AI");
      } catch (te) {
        console.error(te), Se("error", te instanceof Error ? te.message : String(te));
      } finally {
        S(!1);
      }
    },
    [r, s, f]
  ), P = se.useCallback(
    async (H, ne, te) => {
      try {
        const ce = await L(H, te);
        ce === "unchanged" ? Se("info", `No changes detected for "${H.comment}". Entry was not updated.`) : Se("success", ce === "added" ? "Entry added" : "Entry updated"), i((re) => {
          const pe = { ...re.suggestedEntries };
          return pe[ne] && (pe[ne] = pe[ne].filter(
            (je) => !(je.uid === H.uid && je.comment === H.comment)
          )), { ...re, suggestedEntries: pe };
        });
      } catch (ce) {
        console.error(ce), Se("error", `Failed to add entry: ${ce.message}`);
      }
    },
    [L]
  ), Z = async () => {
    const H = Object.values(s.suggestedEntries).flat().length;
    if (H === 0) return Se("warning", "No entries to add.");
    if (!await Un.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${H} suggested entries?`
    )) return;
    S(!0);
    let te = 0, ce = 0, re = 0;
    const pe = /* @__PURE__ */ new Set(), je = [], Le = structuredClone(f);
    Object.entries(s.suggestedEntries).forEach(([ge, he]) => {
      he.forEach((_e) => {
        const De = u.includes(ge) ? ge : u[0] ?? "";
        De && je.push({ worldName: De, entry: _e });
      });
    });
    for (const { worldName: ge, entry: he } of je)
      try {
        const _e = Y0(he, ge, Le);
        _e === "added" ? te++ : _e === "updated" ? ce++ : re++, _e !== "unchanged" && pe.add(ge);
      } catch {
        Se("error", `Failed to process entry: ${he.comment}`);
      }
    for (const ge of pe)
      try {
        const he = { entries: Object.fromEntries(Le[ge].map((_e) => [_e.uid, _e])) };
        await Un.saveWorldInfo(ge, he), Un.reloadWorldInfoEditor(ge, !0);
      } catch {
        Se("error", `Failed to save world: ${ge}`);
      }
    m(Le), i((ge) => ({ ...ge, suggestedEntries: {} })), Se("success", `Processed: ${te} new, ${ce} updated, ${re} unchanged.`), S(!1);
  }, F = async () => {
    await Un.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (i((ne) => ({
      ...ne,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: il() ? [...u] : [],
      selectedEntryUids: {}
    })), Se("success", "Reset successful"));
  }, Y = (H, ne, te) => {
    i((ce) => {
      const re = { ...ce };
      te && (re.blackListedEntries = [...re.blackListedEntries, `${ne} (${H.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[ne] && (pe[ne] = pe[ne].filter(
        (je) => !(je.uid === H.uid && je.comment === H.comment)
      )), re.suggestedEntries = pe, re;
    });
  }, W = (H, ne, te, ce) => {
    i((re) => {
      const pe = { ...re.suggestedEntries };
      if (pe[H]) {
        const Le = pe[H].findIndex(
          (ge) => ge.uid === ne.uid && ge.comment === ne.comment
        );
        Le !== -1 && (pe[H][Le] = te);
      }
      const je = { ...re, suggestedEntries: pe };
      return ce && (je.regexIds = ce), je;
    });
  }, M = se.useCallback(
    (H) => {
      i((ne) => {
        const te = structuredClone(ne.suggestedEntries);
        let ce = 0;
        for (const [re, pe] of Object.entries(H))
          if (f[re]) {
            te[re] || (te[re] = []);
            for (const je of pe) {
              if (te[re].some((he) => he.uid === je)) continue;
              const ge = f[re].find((he) => he.uid === je);
              ge && (te[re].push(structuredClone(ge)), ce++);
            }
          }
        return ce > 0 && Se("success", `Imported ${ce} entries for revision.`), { ...ne, suggestedEntries: te };
      });
    },
    [f]
  ), B = se.useMemo(() => {
    const H = {};
    return s.selectedWorldNames.forEach((ne) => {
      f[ne] && (H[ne] = f[ne]);
    }), H;
  }, [s.selectedWorldNames, f]), K = se.useMemo(() => {
    const H = JSON.parse(JSON.stringify(B)), ne = /* @__PURE__ */ new Map();
    return Object.entries(s.suggestedEntries).forEach(([te, ce]) => {
      ce.forEach((re) => {
        re.uid && ne.set(re.uid, { worldName: te, entry: re });
      });
    }), Object.entries(H).forEach(([, te]) => {
      te.forEach((ce, re) => {
        ce.uid && ne.has(ce.uid) && (te[re] = ne.get(ce.uid).entry, ne.delete(ce.uid));
      });
    }), ne.forEach(({ worldName: te, entry: ce }) => {
      H[te] || (H[te] = []), H[te].some((re) => re.uid === ce.uid) || H[te].push(ce);
    }), H;
  }, [B, s.suggestedEntries]), ae = (H) => {
    const ne = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([ce, re]) => {
      re.forEach((pe) => {
        ne.set(`${ce}::${pe.uid}`, pe);
      });
    });
    const te = {};
    Object.entries(H).forEach(([ce, re]) => {
      re.forEach((pe) => {
        const je = `${ce}::${pe.uid}`, Le = ne.get(je);
        let ge = !1;
        if (!Le)
          ge = !0;
        else {
          const he = (pe.content || "") !== (Le.content || ""), _e = (pe.comment || "") !== (Le.comment || ""), De = (pe.key || []).slice().sort().join(",") !== (Le.key || []).slice().sort().join(",");
          (he || _e || De) && (ge = !0);
        }
        ge && (te[ce] || (te[ce] = []), te[ce].push(pe));
      });
    }), i((ce) => ({ ...ce, suggestedEntries: te })), Se("success", "Changes from global revise session applied.");
  }, I = se.useMemo(
    () => Object.keys(r.promptPresets).map((H) => ({ value: H, label: H })),
    [r.promptPresets]
  ), $ = se.useMemo(
    () => u.map((H) => ({ value: H, label: H })),
    [u]
  ), le = se.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((H, ne) => H + ne.length, 0),
    [s.selectedEntryUids]
  );
  if (g)
    return /* @__PURE__ */ N.jsx("div", { children: "Loading..." });
  const V = Object.entries(s.suggestedEntries).flatMap(
    ([H, ne]) => ne.map((te) => ({ worldName: H, entry: te }))
  );
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ N.jsx("h2", { children: "World Info Recommender" }),
      /* @__PURE__ */ N.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Connection Profile" }),
            /* @__PURE__ */ N.jsx(
              Ly,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (H) => k("profileId", H?.id)
              }
            )
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Context to Send" }),
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px" }, children: [
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.stDescription,
                    onChange: (H) => R("stDescription", H.target.checked)
                  }
                ),
                "Description of SillyTavern and Lorebook"
              ] }),
              w !== "_global" && /* @__PURE__ */ N.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Messages to Include" }),
                /* @__PURE__ */ N.jsxs(
                  "select",
                  {
                    className: "text_pole",
                    value: r.contextToSend.messages.type,
                    onChange: (H) => R("messages", {
                      ...r.contextToSend.messages,
                      type: H.target.value
                    }),
                    children: [
                      /* @__PURE__ */ N.jsx("option", { value: "none", children: "None" }),
                      /* @__PURE__ */ N.jsx("option", { value: "all", children: "All Messages" }),
                      /* @__PURE__ */ N.jsx("option", { value: "first", children: "First X Messages" }),
                      /* @__PURE__ */ N.jsx("option", { value: "last", children: "Last X Messages" }),
                      /* @__PURE__ */ N.jsx("option", { value: "range", children: "Range" })
                    ]
                  }
                ),
                r.contextToSend.messages.type === "first" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  "First",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.first ?? 10,
                      onChange: (H) => R("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(H.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "last" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  "Last",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.last ?? 10,
                      onChange: (H) => R("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(H.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "range" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  "Range:",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "0",
                      placeholder: "Start",
                      value: r.contextToSend.messages.range?.start ?? 0,
                      onChange: (H) => R("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(H.target.value) || 0
                        }
                      })
                    }
                  ),
                  " ",
                  "to",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      placeholder: "End",
                      value: r.contextToSend.messages.range?.end ?? 10,
                      onChange: (H) => R("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(H.target.value) || 10
                        }
                      })
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.charCard,
                    onChange: (H) => R("charCard", H.target.checked)
                  }
                ),
                "Char Card"
              ] }),
              p.length > 0 && /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Select Character" }),
                /* @__PURE__ */ N.jsx("select", { className: "text_pole", title: "Select character for your group.", children: p.map((H) => /* @__PURE__ */ N.jsx("option", { value: H.avatar, children: H.name }, H.avatar)) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (H) => R("authorNote", H.target.checked)
                  }
                ),
                " ",
                "Author Note"
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.worldInfo,
                    onChange: (H) => R("worldInfo", H.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ N.jsx(
                  Iy,
                  {
                    items: $,
                    value: s.selectedWorldNames,
                    onChange: (H) => {
                      i((ne) => {
                        const te = { ...ne.selectedEntryUids };
                        return ne.selectedWorldNames.filter((re) => !H.includes(re)).forEach((re) => delete te[re]), { ...ne, selectedWorldNames: H, selectedEntryUids: te };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              s.selectedWorldNames.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ N.jsxs(
                  xe,
                  {
                    className: "menu_button",
                    onClick: () => C(!0),
                    title: "Select specific entries from the chosen lorebooks",
                    children: [
                      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-list-check" }),
                      "Select Entries"
                    ]
                  }
                ),
                /* @__PURE__ */ N.jsx("span", { children: le > 0 ? `${le} selected` : "All entries included" })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (H) => R("suggestedEntries", H.target.checked)
                  }
                ),
                " ",
                "Existing Suggestions"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsxs("label", { children: [
              "Max Context",
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  title: "Select Max Context Type",
                  value: r.maxContextType,
                  onChange: (H) => k("maxContextType", H.target.value),
                  children: [
                    /* @__PURE__ */ N.jsx("option", { value: "profile", children: "Use profile preset" }),
                    /* @__PURE__ */ N.jsx("option", { value: "sampler", children: "Use active preset in sampler settings" }),
                    /* @__PURE__ */ N.jsx("option", { value: "custom", children: "Custom" })
                  ]
                }
              )
            ] }),
            r.maxContextType === "custom" && /* @__PURE__ */ N.jsx("label", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                min: "1",
                step: "1",
                placeholder: "Enter max tokens",
                value: r.maxContextValue,
                onChange: (H) => k("maxContextValue", parseInt(H.target.value) || 2048)
              }
            ) }),
            /* @__PURE__ */ N.jsxs("label", { style: { display: "block", marginTop: "10px" }, children: [
              "Max Response Tokens",
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  min: "1",
                  step: "1",
                  placeholder: "Enter max response tokens",
                  value: r.maxResponseToken,
                  onChange: (H) => k("maxResponseToken", parseInt(H.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Your Prompt" }),
            /* @__PURE__ */ N.jsx(
              Nf,
              {
                label: "Prompt Preset",
                items: I,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (H) => k("promptPreset", H ?? "default"),
                onItemsChange: (H) => {
                  const ne = H.reduce(
                    (te, ce) => (te[ce.value] = r.promptPresets[ce.value] ?? { content: "" }, te),
                    {}
                  );
                  k("promptPresets", ne);
                },
                enableCreate: !0,
                enableRename: !0,
                enableDelete: !0
              }
            ),
            /* @__PURE__ */ N.jsx(
              Sr,
              {
                value: r.promptPresets[r.promptPreset]?.content ?? "",
                onChange: (H) => {
                  const ne = { ...r.promptPresets };
                  ne[r.promptPreset] && (ne[r.promptPreset].content = H.target.value, k("promptPresets", ne));
                },
                placeholder: "e.g., 'Suggest entries for places {{user}} visited.'",
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ N.jsx(
              xe,
              {
                onClick: () => j(),
                disabled: v,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: v ? "Generating..." : "Send Prompt"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "wide-column", children: /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ N.jsx("h3", { children: "Suggested Entries" }),
          /* @__PURE__ */ N.jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ N.jsx(
              xe,
              {
                onClick: Z,
                disabled: v || V.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ N.jsxs(
              xe,
              {
                onClick: () => z(!0),
                disabled: v,
                className: "menu_button interactable",
                title: "Revise all selected existing entries and current suggestions in a single chat session",
                children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
                  " Global Revise"
                ]
              }
            ),
            /* @__PURE__ */ N.jsx(
              xe,
              {
                onClick: () => O(!0),
                disabled: v,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ N.jsx(xe, { onClick: F, disabled: v, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { children: [
            V.length === 0 && /* @__PURE__ */ N.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            V.map(({ worldName: H, entry: ne }) => /* @__PURE__ */ N.jsx(
              Ek,
              {
                initialWorldName: H,
                entry: ne,
                allWorldNames: u,
                existingEntry: f[H]?.find((te) => te.uid === ne.uid),
                sessionRegexIds: s.regexIds,
                onAdd: P,
                onRemove: Y,
                onContinue: j,
                onUpdate: W,
                entriesGroupByWorldName: f,
                sessionForContext: s,
                contextToSend: r.contextToSend
              },
              `${H}-${ne.uid}-${ne.comment}`
            ))
          ] })
        ] }) })
      ] })
    ] }),
    h && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          V0,
          {
            ref: l,
            entriesByWorldName: B,
            initialSelectedUids: s.selectedEntryUids,
            title: "Select Entries to Include in Context"
          }
        ),
        onComplete: (H) => {
          if (H && l.current) {
            const ne = l.current.getSelection();
            i((te) => ({ ...te, selectedEntryUids: ne }));
          }
          C(!1);
        },
        options: { wide: !0 }
      }
    ),
    A && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          V0,
          {
            ref: _,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (H) => {
          if (H && _.current) {
            const ne = _.current.getSelection();
            M(ne);
          }
          O(!1);
        },
        options: { wide: !0 }
      }
    ),
    x && /* @__PURE__ */ N.jsx(
      Wn,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          d_,
          {
            target: { type: "global" },
            initialState: K,
            onClose: () => z(!1),
            onApply: ae,
            sessionForContext: s,
            allEntries: f,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => z(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, kk = () => {
  const [n, r] = se.useState(!1), s = () => r(!0), i = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, n ? /* @__PURE__ */ N.jsx(
    Wn,
    {
      content: /* @__PURE__ */ N.jsx(Ck, {}),
      type: Lt.DISPLAY,
      onComplete: i,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function Ak() {
  function n(r) {
    if (!r)
      return null;
    const s = [], i = Array.isArray(r) ? r : [r];
    for (const u of i) {
      let c = u.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let y = 0; y < c.length; y++) {
        const g = c[y];
        g === '"' || g === "'" ? y > 0 && c[y - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  Me.SlashCommandParser.addCommandObject(
    Me.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: Me.ARGUMENT_TYPE.BOOLEAN
    })
  ), Me.SlashCommandParser.addCommandObject(
    Me.SlashCommand.fromProps({
      name: "world-info-recommender-run",
      helpString: `
              <div class="inline-drawer">
                  <details>
                      <summary>Run the World Info Recommender AI automatically.</summary>
                      <div class="list-group">
                          Executes the recommendation process using the specified parameters.
                          <br>
                          - <b>profile</b>: (Required) Connection profile ID/name to use for the AI request.
                          <br>
                          - <b>prompt</b>: (Required) The core task/instruction for the AI. Passed as unnamed argument(s).
                          <br>
                          - <b>lorebooks</b>: List of lorebook names to include as context. Defaults to currently active worlds.
                          <br>
                          - <b>allowed-ops</b>: List of operations allowed ('add', 'update'). Defaults to 'add,update'.
                          <br>
                          - <b>editable-entries</b>: Comma-separated list of specific entries allowed for update, format: <code>WorldName.EntryComment</code> or <code>WorldName.UID</code>. If provided, only these entries can be updated. Adds are still allowed if 'add' is in allowed-ops. Defaults to allowing updates for all entries.
                          <br>
                          - <b>context</b>: Context parts ('stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'). Defaults to extension settings.
                          <br>
                          - <b>messages</b>: Message range ('all', 'none', 'first:N', 'last:N', 'range:S-E'). Defaults to extension settings.
                          <br>
                          - <b>max-context</b>: Override context token limit (number). Defaults to extension settings.
                          <br>
                          - <b>max-response</b>: Override response token limit (number). Defaults to extension settings.
                          <br>
                          - <b>main-context-template</b>: Override main context template preset (string). Defaults to extension settings.
                          <br>
                          - <b>silent</b>: Suppress success/error messages (boolean). Defaults to false.
                      </div>
                      <div>
                          <b>Example:</b>
                          <pre><code>/wir-run profile=your_profile_id lorebooks=[CommonEvents,Characters] allowed-ops=[add] "Create 3 new entries about recent events in the tavern based on the last 5 messages."</code></pre>
                          <pre><code>/wir-run profile=your_profile_name editable-entries=[Characters.12345,Locations.The Docks] messages=last:10 prompt="Update the description for character UID 12345 and The Docks based on the recent fight."</code></pre>
                      </div>
                  </details>
              </div>
          `,
      returns: Me.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        Me.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [Me.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: TS
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Me.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: K1.worlds
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [Me.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [Me.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [Me.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [Me.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [Me.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [Me.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [Me.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Me.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [Me.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        Me.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [Me.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const i = r.silent ?? !1;
        try {
          const u = Pt.getSettings(), c = Array.isArray(s) ? s.join(" ") : s, f = r.profile;
          let m;
          if (!c)
            throw new Error("Prompt argument is required.");
          if (!f)
            throw new Error("Profile argument is required.");
          const p = Me.extensionSettings?.connectionManager?.profiles?.find(
            (B) => B.id === f || B.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const y = n(r.lorebooks);
          let g;
          if (y !== null) {
            g = {};
            for (const B of y) {
              const K = await Me.loadWorldInfo(B);
              K && (g[B] = Object.values(K.entries));
            }
          } else
            g = await dl(["all"], !0, an);
          const E = Object.keys(g);
          let v;
          if (y !== null) {
            if (v = y.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (i || Se("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), v.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            v = E;
          v.length === 0 && (i || Se("warning", "No active lorebooks found to use for context."));
          const S = n(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), A = h.includes("update"), O = /* @__PURE__ */ new Set(), x = n(r["editable-entries"]);
          x !== null && x.forEach((B) => {
            O.add(B.trim());
          });
          const z = O.size > 0, l = n(r.context), _ = { ...u.contextToSend };
          if (l !== null) {
            const B = l.map((K) => K.trim());
            _.stDescription = B.includes("stdescription"), _.messages.type = B.includes("messages") ? _.messages.type : "none", _.charCard = B.includes("charcard"), _.authorNote = B.includes("authornote"), _.worldInfo = B.includes("worldinfo"), _.suggestedEntries = !1;
          }
          if (r.messages && _.messages.type !== "none") {
            const B = r.messages.toLowerCase().trim();
            if (B === "all") _.messages.type = "all";
            else if (B === "none") _.messages.type = "none";
            else if (B.startsWith("first:"))
              _.messages.type = "first", _.messages.first = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("last:"))
              _.messages.type = "last", _.messages.last = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("range:")) {
              const K = B.split(":")[1].split("-");
              _.messages.type = "range", _.messages.range = {
                start: parseInt(K[0]) || 0,
                end: parseInt(K[1]) || 10
              };
            } else
              i || Se("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
          }
          const w = {
            // Let runWorldInfoRecommendation determine these from profile
            presetName: void 0,
            contextName: void 0,
            instructName: void 0,
            syspromptName: void 0,
            // Use derived contextToSend settings
            ignoreCharacterFields: !_.charCard,
            ignoreWorldInfo: !0,
            // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !_.authorNote,
            maxContext: r["max-context"] ?? (u.maxContextType === "custom" ? u.maxContextValue : u.maxContextType === "profile" ? "preset" : "active"),
            includeNames: !!Xt,
            targetCharacterId: Xt ? an : void 0
            // Simplification: Use current char in group context
          };
          switch (_.messages.type) {
            case "none":
              w.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              w.messageIndexesBetween = { start: 0, end: _.messages.first ?? 10 };
              break;
            case "last":
              const B = _.messages.last ?? 10, K = Me.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, K - 1),
                start: Math.max(0, K - B)
              };
              break;
            case "range":
              _.messages.range && (w.messageIndexesBetween = {
                start: _.messages.range.start,
                end: _.messages.range.end
              });
              break;
            case "all":
            default:
              break;
          }
          const k = {
            selectedWorldNames: v,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, R = r["max-response"] ? parseInt(r["max-response"]) : void 0, L = structuredClone(u.prompts);
          _.stDescription || delete L.stDescription, (!_.worldInfo || v.length === 0) && delete L.currentLorebooks, delete L.suggestedLorebooks;
          const j = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: L,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: R ?? u.maxResponseToken
          };
          i || Se("info", "Running World Info Recommender...");
          const P = await Dy(j);
          if (Object.keys(P).length === 0)
            return i || Se("info", "AI returned no suggestions."), !0;
          let Z = 0, F = 0, Y = 0;
          const W = /* @__PURE__ */ new Set(), M = structuredClone(g);
          for (const [B, K] of Object.entries(P)) {
            let ae = B;
            if (!v.includes(ae))
              if (E.includes(ae)) {
                i || Se(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${K.length} entries.`
                ), Y += K.length;
                continue;
              } else if (v.length > 0)
                ae = v[0], i || Se(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${ae}".`
                );
              else {
                i || Se(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${K.length} entries.`
                ), Y += K.length;
                continue;
              }
            for (const I of K) {
              if (M[ae]?.some(
                (le) => le.uid === I.uid && le.comment === I.comment
              )) {
                if (!A) {
                  i || Se(
                    "info",
                    `Skipping update for "${ae}.${I.comment || I.uid}" (updates disallowed).`
                  ), Y++;
                  continue;
                }
                if (z) {
                  const le = `${ae}.${I.comment}`, V = `${ae}.${I.uid}`;
                  if (!O.has(le) && !O.has(V)) {
                    i || Se(
                      "info",
                      `Skipping update for "${ae}.${I.comment || I.uid}" (not in editable-entries).`
                    ), Y++;
                    continue;
                  }
                }
              } else if (!C) {
                i || Se(
                  "info",
                  `Skipping add for "${ae}.${I.comment || "New Entry"}" (adds disallowed).`
                ), Y++;
                continue;
              }
              try {
                const { status: le } = AS(I, ae, M);
                le === "added" ? Z++ : F++, W.add(ae);
              } catch (le) {
                i || Se(
                  "error",
                  `Failed to prepare modification for "${ae}.${I.comment || I.uid}": ${le.message}`
                ), Y++;
              }
            }
          }
          if (W.size > 0) {
            i || Se("info", `Saving changes to ${W.size} lorebook(s)...`);
            for (const B of W) {
              const K = M[B], ae = { entries: {} };
              K.forEach((I) => ae.entries[I.uid] = I), await Me.saveWorldInfo(B, ae), Me.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!i) {
            const B = [];
            (Z > 0 || F > 0 || Y > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${Z}</li>
                  <li><strong>Updated:</strong> ${F}</li>
                  <li><strong>Skipped:</strong> ${Y}</li>
                  </ul>
                </div>
                `), W.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(W).map((ae) => `<li>${ae}</li>`).join("")}
                  </ul>
                </div>
                `);
            const K = B.length > 0 ? `
                <div class="wir-results">
                  <h4>World Info Recommender Results:</h4>
                  ${B.join("")}
                </div>
                ` : `
                <div class="wir-results">
                  <h4>World Info Recommender:</h4>
                  <p>No changes were made</p>
                </div>
                `;
            Se("success", K, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), i || Se("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Qs = SillyTavern.getContext();
async function Tk() {
  const n = await Qs.renderExtensionTemplateAsync(
    `third-party/${Ri}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), uv.createRoot(r).render(
    /* @__PURE__ */ N.jsx(hl.StrictMode, { children: /* @__PURE__ */ N.jsx(LS, {}) })
  ));
  const i = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), uv.createRoot(c).render(
    /* @__PURE__ */ N.jsx(hl.StrictMode, { children: /* @__PURE__ */ N.jsx(kk, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = i.trim();
    const y = p.firstChild;
    y && (m.prepend(y), y.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function xk() {
  return !(!Qs.ConnectionManagerRequestService || !Qs.getCharacterCardFields || !Qs.getWorldInfoPrompt || !Qs.reloadWorldInfoEditor);
}
xk() ? MS().then(() => {
  Tk(), Ak();
}) : Se("error", `[${Ri}] Make sure ST is updated.`);
export {
  Tk as init
};
