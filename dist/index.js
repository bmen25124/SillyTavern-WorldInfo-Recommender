import { renderStoryString as _1, persona_description_positions as Zg } from "../../../../power-user.js";
import { parseMesExamples as b1, baseChatReplace as S1, chat_metadata as Os, getMaxContextSize as w1, name1 as Sa, name2 as $r, this_chid as xn, extension_prompt_types as wa, depth_prompt_role_default as E1, depth_prompt_depth_default as C1 } from "../../../../../script.js";
import { createWorldInfoEntry as k1, world_info_include_names as A1, wi_anchor_position as T1, selected_world_info as x1, METADATA_KEY as N1, world_info as O1, world_names as M1 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as R1, formatInstructModeSystemPrompt as j1 } from "../../../../instruct-mode.js";
import { appendFileContent as D1 } from "../../../../chats.js";
import { setOpenAIMessages as z1, setOpenAIMessageExamples as L1, formatWorldInfo as P1, getPromptPosition as I1, getPromptRole as B1, prepareOpenAIMessages as U1 } from "../../../../openai.js";
import { metadata_keys as Ms } from "../../../../authors-note.js";
import { getGroupDepthPrompts as H1, selected_group as pn, groups as Gg } from "../../../../group-chats.js";
import { runRegexScript as q1, getRegexedString as Z1, regex_placement as Vg } from "../../../regex/engine.js";
import { getCharaFilename as G1, removeFromArray as Yg, runAfterAnimation as V1 } from "../../../../utils.js";
import { commonEnumProviders as Y1 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Si, fixToastrForDialogs as Ud } from "../../../../popup.js";
import $g from "../../../../../lib/dialog-polyfill.esm.js";
function Lf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Hd = { exports: {} }, Rs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xg;
function $1() {
  if (Xg) return Rs;
  Xg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(i, o, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      c = {};
      for (var m in o)
        m !== "key" && (c[m] = o[m]);
    } else c = o;
    return o = c.ref, {
      $$typeof: n,
      type: i,
      key: f,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return Rs.Fragment = r, Rs.jsx = s, Rs.jsxs = s, Rs;
}
var Fg;
function X1() {
  return Fg || (Fg = 1, Hd.exports = $1()), Hd.exports;
}
var N = X1(), qd = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qg;
function F1() {
  if (Qg) return De;
  Qg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
  function _(I) {
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
  function A(I, H, ne) {
    this.props = I, this.context = H, this.refs = C, this.updater = ne || S;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(I, H) {
    if (typeof I != "object" && typeof I != "function" && I != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, I, H, "setState");
  }, A.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function O() {
  }
  O.prototype = A.prototype;
  function x(I, H, ne) {
    this.props = I, this.context = H, this.refs = C, this.updater = ne || S;
  }
  var z = x.prototype = new O();
  z.constructor = x, h(z, A.prototype), z.isPureReactComponent = !0;
  var l = Array.isArray, v = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, H, ne, oe, q, ee) {
    return ne = ee.ref, {
      $$typeof: n,
      type: I,
      key: H,
      ref: ne !== void 0 ? ne : null,
      props: ee
    };
  }
  function R(I, H) {
    return k(
      I.type,
      H,
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
    var H = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ne) {
      return H[ne];
    });
  }
  var P = /\/+/g;
  function G(I, H) {
    return typeof I == "object" && I !== null && I.key != null ? j("" + I.key) : H.toString(36);
  }
  function X() {
  }
  function Y(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(X, X) : (I.status = "pending", I.then(
          function(H) {
            I.status === "pending" && (I.status = "fulfilled", I.value = H);
          },
          function(H) {
            I.status === "pending" && (I.status = "rejected", I.reason = H);
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
  function J(I, H, ne, oe, q) {
    var ee = typeof I;
    (ee === "undefined" || ee === "boolean") && (I = null);
    var te = !1;
    if (I === null) te = !0;
    else
      switch (ee) {
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
              return te = I._init, J(
                te(I._payload),
                H,
                ne,
                oe,
                q
              );
          }
      }
    if (te)
      return q = q(I), te = oe === "" ? "." + G(I, 0) : oe, l(q) ? (ne = "", te != null && (ne = te.replace(P, "$&/") + "/"), J(q, H, ne, "", function(he) {
        return he;
      })) : q != null && (L(q) && (q = R(
        q,
        ne + (q.key == null || I && I.key === q.key ? "" : ("" + q.key).replace(
          P,
          "$&/"
        ) + "/") + te
      )), H.push(q)), 1;
    te = 0;
    var de = oe === "" ? "." : oe + ":";
    if (l(I))
      for (var le = 0; le < I.length; le++)
        oe = I[le], ee = de + G(oe, le), te += J(
          oe,
          H,
          ne,
          ee,
          q
        );
    else if (le = _(I), typeof le == "function")
      for (I = le.call(I), le = 0; !(oe = I.next()).done; )
        oe = oe.value, ee = de + G(oe, le++), te += J(
          oe,
          H,
          ne,
          ee,
          q
        );
    else if (ee === "object") {
      if (typeof I.then == "function")
        return J(
          Y(I),
          H,
          ne,
          oe,
          q
        );
      throw H = String(I), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function M(I, H, ne) {
    if (I == null) return I;
    var oe = [], q = 0;
    return J(I, oe, "", "", function(ee) {
      return H.call(ne, ee, q++);
    }), oe;
  }
  function B(I) {
    if (I._status === -1) {
      var H = I._result;
      H = H(), H.then(
        function(ne) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = ne);
        },
        function(ne) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = ne);
        }
      ), I._status === -1 && (I._status = 0, I._result = H);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var Q = typeof reportError == "function" ? reportError : function(I) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof I == "object" && I !== null && typeof I.message == "string" ? String(I.message) : String(I),
        error: I
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", I);
      return;
    }
    console.error(I);
  };
  function re() {
  }
  return De.Children = {
    map: M,
    forEach: function(I, H, ne) {
      M(
        I,
        function() {
          H.apply(this, arguments);
        },
        ne
      );
    },
    count: function(I) {
      var H = 0;
      return M(I, function() {
        H++;
      }), H;
    },
    toArray: function(I) {
      return M(I, function(H) {
        return H;
      }) || [];
    },
    only: function(I) {
      if (!L(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, De.Component = A, De.Fragment = s, De.Profiler = o, De.PureComponent = x, De.StrictMode = i, De.Suspense = p, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return v.H.useMemoCache(I);
    }
  }, De.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, De.cloneElement = function(I, H, ne) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var oe = h({}, I.props), q = I.key, ee = void 0;
    if (H != null)
      for (te in H.ref !== void 0 && (ee = void 0), H.key !== void 0 && (q = "" + H.key), H)
        !w.call(H, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && H.ref === void 0 || (oe[te] = H[te]);
    var te = arguments.length - 2;
    if (te === 1) oe.children = ne;
    else if (1 < te) {
      for (var de = Array(te), le = 0; le < te; le++)
        de[le] = arguments[le + 2];
      oe.children = de;
    }
    return k(I.type, q, void 0, void 0, ee, oe);
  }, De.createContext = function(I) {
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
  }, De.createElement = function(I, H, ne) {
    var oe, q = {}, ee = null;
    if (H != null)
      for (oe in H.key !== void 0 && (ee = "" + H.key), H)
        w.call(H, oe) && oe !== "key" && oe !== "__self" && oe !== "__source" && (q[oe] = H[oe]);
    var te = arguments.length - 2;
    if (te === 1) q.children = ne;
    else if (1 < te) {
      for (var de = Array(te), le = 0; le < te; le++)
        de[le] = arguments[le + 2];
      q.children = de;
    }
    if (I && I.defaultProps)
      for (oe in te = I.defaultProps, te)
        q[oe] === void 0 && (q[oe] = te[oe]);
    return k(I, ee, void 0, void 0, null, q);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, De.isValidElement = L, De.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, De.memo = function(I, H) {
    return {
      $$typeof: b,
      type: I,
      compare: H === void 0 ? null : H
    };
  }, De.startTransition = function(I) {
    var H = v.T, ne = {};
    v.T = ne;
    try {
      var oe = I(), q = v.S;
      q !== null && q(ne, oe), typeof oe == "object" && oe !== null && typeof oe.then == "function" && oe.then(re, Q);
    } catch (ee) {
      Q(ee);
    } finally {
      v.T = H;
    }
  }, De.unstable_useCacheRefresh = function() {
    return v.H.useCacheRefresh();
  }, De.use = function(I) {
    return v.H.use(I);
  }, De.useActionState = function(I, H, ne) {
    return v.H.useActionState(I, H, ne);
  }, De.useCallback = function(I, H) {
    return v.H.useCallback(I, H);
  }, De.useContext = function(I) {
    return v.H.useContext(I);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(I, H) {
    return v.H.useDeferredValue(I, H);
  }, De.useEffect = function(I, H, ne) {
    var oe = v.H;
    if (typeof ne == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return oe.useEffect(I, H);
  }, De.useId = function() {
    return v.H.useId();
  }, De.useImperativeHandle = function(I, H, ne) {
    return v.H.useImperativeHandle(I, H, ne);
  }, De.useInsertionEffect = function(I, H) {
    return v.H.useInsertionEffect(I, H);
  }, De.useLayoutEffect = function(I, H) {
    return v.H.useLayoutEffect(I, H);
  }, De.useMemo = function(I, H) {
    return v.H.useMemo(I, H);
  }, De.useOptimistic = function(I, H) {
    return v.H.useOptimistic(I, H);
  }, De.useReducer = function(I, H, ne) {
    return v.H.useReducer(I, H, ne);
  }, De.useRef = function(I) {
    return v.H.useRef(I);
  }, De.useState = function(I) {
    return v.H.useState(I);
  }, De.useSyncExternalStore = function(I, H, ne) {
    return v.H.useSyncExternalStore(
      I,
      H,
      ne
    );
  }, De.useTransition = function() {
    return v.H.useTransition();
  }, De.version = "19.1.1", De;
}
var Kg;
function Pf() {
  return Kg || (Kg = 1, qd.exports = F1()), qd.exports;
}
var ie = Pf();
const dl = /* @__PURE__ */ Lf(ie);
var Zd = { exports: {} }, js = {}, Gd = { exports: {} }, Vd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function Q1() {
  return Jg || (Jg = 1, (function(n) {
    function r(M, B) {
      var Q = M.length;
      M.push(B);
      e: for (; 0 < Q; ) {
        var re = Q - 1 >>> 1, I = M[re];
        if (0 < o(I, B))
          M[re] = B, M[Q] = I, Q = re;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function i(M) {
      if (M.length === 0) return null;
      var B = M[0], Q = M.pop();
      if (Q !== B) {
        M[0] = Q;
        e: for (var re = 0, I = M.length, H = I >>> 1; re < H; ) {
          var ne = 2 * (re + 1) - 1, oe = M[ne], q = ne + 1, ee = M[q];
          if (0 > o(oe, Q))
            q < I && 0 > o(ee, oe) ? (M[re] = ee, M[q] = Q, re = q) : (M[re] = oe, M[ne] = Q, re = ne);
          else if (q < I && 0 > o(ee, Q))
            M[re] = ee, M[q] = Q, re = q;
          else break e;
        }
      }
      return B;
    }
    function o(M, B) {
      var Q = M.sortIndex - B.sortIndex;
      return Q !== 0 ? Q : M.id - B.id;
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
    var p = [], b = [], g = 1, E = null, _ = 3, S = !1, h = !1, C = !1, A = !1, O = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function l(M) {
      for (var B = s(b); B !== null; ) {
        if (B.callback === null) i(b);
        else if (B.startTime <= M)
          i(b), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(b);
      }
    }
    function v(M) {
      if (C = !1, l(M), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, G());
        else {
          var B = s(b);
          B !== null && J(v, B.startTime - M);
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
            var Q = _;
            try {
              t: {
                for (l(M), E = s(p); E !== null && !(E.expirationTime > M && j()); ) {
                  var re = E.callback;
                  if (typeof re == "function") {
                    E.callback = null, _ = E.priorityLevel;
                    var I = re(
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
                  var H = s(b);
                  H !== null && J(
                    v,
                    H.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, _ = Q, S = !1;
            }
            B = void 0;
          }
        } finally {
          B ? G() : w = !1;
        }
      }
    }
    var G;
    if (typeof z == "function")
      G = function() {
        z(P);
      };
    else if (typeof MessageChannel < "u") {
      var X = new MessageChannel(), Y = X.port2;
      X.port1.onmessage = P, G = function() {
        Y.postMessage(null);
      };
    } else
      G = function() {
        O(P, 0);
      };
    function J(M, B) {
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
      return _;
    }, n.unstable_next = function(M) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = _;
      }
      var Q = _;
      _ = B;
      try {
        return M();
      } finally {
        _ = Q;
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
      var Q = _;
      _ = M;
      try {
        return B();
      } finally {
        _ = Q;
      }
    }, n.unstable_scheduleCallback = function(M, B, Q) {
      var re = n.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? re + Q : re) : Q = re, M) {
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
      return I = Q + I, M = {
        id: g++,
        callback: B,
        priorityLevel: M,
        startTime: Q,
        expirationTime: I,
        sortIndex: -1
      }, Q > re ? (M.sortIndex = Q, r(b, M), s(p) === null && M === s(b) && (C ? (x(k), k = -1) : C = !0, J(v, Q - re))) : (M.sortIndex = I, r(p, M), h || S || (h = !0, w || (w = !0, G()))), M;
    }, n.unstable_shouldYield = j, n.unstable_wrapCallback = function(M) {
      var B = _;
      return function() {
        var Q = _;
        _ = B;
        try {
          return M.apply(this, arguments);
        } finally {
          _ = Q;
        }
      };
    };
  })(Vd)), Vd;
}
var Wg;
function K1() {
  return Wg || (Wg = 1, Gd.exports = Q1()), Gd.exports;
}
var Yd = { exports: {} }, It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function J1() {
  if (ev) return It;
  ev = 1;
  var n = Pf();
  function r(p) {
    var b = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        b += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, o = Symbol.for("react.portal");
  function c(p, b, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: b,
      implementation: g
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, b) {
    if (p === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, It.createPortal = function(p, b) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(r(299));
    return c(p, b, null, g);
  }, It.flushSync = function(p) {
    var b = f.T, g = i.p;
    try {
      if (f.T = null, i.p = 2, p) return p();
    } finally {
      f.T = b, i.p = g, i.d.f();
    }
  }, It.preconnect = function(p, b) {
    typeof p == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, i.d.C(p, b));
  }, It.prefetchDNS = function(p) {
    typeof p == "string" && i.d.D(p);
  }, It.preinit = function(p, b) {
    if (typeof p == "string" && b && typeof b.as == "string") {
      var g = b.as, E = m(g, b.crossOrigin), _ = typeof b.integrity == "string" ? b.integrity : void 0, S = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      g === "style" ? i.d.S(
        p,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: E,
          integrity: _,
          fetchPriority: S
        }
      ) : g === "script" && i.d.X(p, {
        crossOrigin: E,
        integrity: _,
        fetchPriority: S,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, It.preinitModule = function(p, b) {
    if (typeof p == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var g = m(
            b.as,
            b.crossOrigin
          );
          i.d.M(p, {
            crossOrigin: g,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && i.d.M(p);
  }, It.preload = function(p, b) {
    if (typeof p == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var g = b.as, E = m(g, b.crossOrigin);
      i.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, It.preloadModule = function(p, b) {
    if (typeof p == "string")
      if (b) {
        var g = m(b.as, b.crossOrigin);
        i.d.m(p, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: g,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else i.d.m(p);
  }, It.requestFormReset = function(p) {
    i.d.r(p);
  }, It.unstable_batchedUpdates = function(p, b) {
    return p(b);
  }, It.useFormState = function(p, b, g) {
    return f.H.useFormState(p, b, g);
  }, It.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, It.version = "19.1.1", It;
}
var tv;
function Z0() {
  if (tv) return Yd.exports;
  tv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Yd.exports = J1(), Yd.exports;
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
var nv;
function W1() {
  if (nv) return js;
  nv = 1;
  var n = K1(), r = Pf(), s = Z0();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
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
    for (var a = e, u = t; ; ) {
      var d = a.return;
      if (d === null) break;
      var y = d.alternate;
      if (y === null) {
        if (u = d.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (d.child === y.child) {
        for (y = d.child; y; ) {
          if (y === a) return m(d), e;
          if (y === u) return m(d), t;
          y = y.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== u.return) a = d, u = y;
      else {
        for (var T = !1, D = d.child; D; ) {
          if (D === a) {
            T = !0, a = d, u = y;
            break;
          }
          if (D === u) {
            T = !0, u = d, a = y;
            break;
          }
          D = D.sibling;
        }
        if (!T) {
          for (D = y.child; D; ) {
            if (D === a) {
              T = !0, a = y, u = d;
              break;
            }
            if (D === u) {
              T = !0, u = y, a = d;
              break;
            }
            D = D.sibling;
          }
          if (!T) throw Error(i(189));
        }
      }
      if (a.alternate !== u) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), x = Symbol.for("react.consumer"), z = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), j = Symbol.for("react.memo_cache_sentinel"), P = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = Symbol.for("react.client.reference");
  function Y(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === X ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case A:
        return "Profiler";
      case C:
        return "StrictMode";
      case v:
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
  var J = Array.isArray, M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], I = -1;
  function H(e) {
    return { current: e };
  }
  function ne(e) {
    0 > I || (e.current = re[I], re[I] = null, I--);
  }
  function oe(e, t) {
    I++, re[I] = e.current, e.current = t;
  }
  var q = H(null), ee = H(null), te = H(null), de = H(null);
  function le(e, t) {
    switch (oe(te, t), oe(ee, e), oe(q, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = vg(t), e = yg(t, e);
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
    ne(q), oe(q, e);
  }
  function he() {
    ne(q), ne(ee), ne(te);
  }
  function Re(e) {
    e.memoizedState !== null && oe(de, e);
    var t = q.current, a = yg(t, e.type);
    t !== a && (oe(ee, e), oe(q, a));
  }
  function be(e) {
    ee.current === e && (ne(q), ne(ee)), de.current === e && (ne(de), ks._currentValue = Q);
  }
  var me = Object.prototype.hasOwnProperty, ge = n.unstable_scheduleCallback, Pe = n.unstable_cancelCallback, xe = n.unstable_shouldYield, Je = n.unstable_requestPaint, lt = n.unstable_now, Jn = n.unstable_getCurrentPriorityLevel, On = n.unstable_ImmediatePriority, ye = n.unstable_UserBlockingPriority, Se = n.unstable_NormalPriority, Ye = n.unstable_LowPriority, Ve = n.unstable_IdlePriority, nt = n.log, Er = n.unstable_setDisableYieldValue, Wn = null, ht = null;
  function Bn(e) {
    if (typeof nt == "function" && Er(e), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(Wn, e);
      } catch {
      }
  }
  var qt = Math.clz32 ? Math.clz32 : ra, gn = Math.log, na = Math.LN2;
  function ra(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gn(e) / na | 0) | 0;
  }
  var er = 256, Un = 4194304;
  function vn(e) {
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
  function Zt(e, t, a) {
    var u = e.pendingLanes;
    if (u === 0) return 0;
    var d = 0, y = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var D = u & 134217727;
    return D !== 0 ? (u = D & ~y, u !== 0 ? d = vn(u) : (T &= D, T !== 0 ? d = vn(T) : a || (a = D & ~e, a !== 0 && (d = vn(a))))) : (D = u & ~y, D !== 0 ? d = vn(D) : T !== 0 ? d = vn(T) : a || (a = u & ~e, a !== 0 && (d = vn(a)))), d === 0 ? 0 : t !== 0 && t !== d && (t & y) === 0 && (y = d & -d, a = t & -t, y >= a || y === 32 && (a & 4194048) !== 0) ? t : d;
  }
  function $t(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function uu(e, t) {
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
  function za() {
    var e = er;
    return er <<= 1, (er & 4194048) === 0 && (er = 256), e;
  }
  function th() {
    var e = Un;
    return Un <<= 1, (Un & 62914560) === 0 && (Un = 4194304), e;
  }
  function Nl(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function zi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function u_(e, t, a, u, d, y) {
    var T = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var D = e.entanglements, U = e.expirationTimes, F = e.hiddenUpdates;
    for (a = T & ~a; 0 < a; ) {
      var ae = 31 - qt(a), ue = 1 << ae;
      D[ae] = 0, U[ae] = -1;
      var K = F[ae];
      if (K !== null)
        for (F[ae] = null, ae = 0; ae < K.length; ae++) {
          var W = K[ae];
          W !== null && (W.lane &= -536870913);
        }
      a &= ~ue;
    }
    u !== 0 && nh(e, u, 0), y !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= y & ~(T & ~t));
  }
  function nh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var u = 31 - qt(t);
    e.entangledLanes |= t, e.entanglements[u] = e.entanglements[u] | 1073741824 | a & 4194090;
  }
  function rh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var u = 31 - qt(a), d = 1 << u;
      d & t | e[u] & t && (e[u] |= t), a &= ~d;
    }
  }
  function Ol(e) {
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
  function Ml(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ah() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Pg(e.type));
  }
  function o_(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Cr = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Cr, Xt = "__reactProps$" + Cr, La = "__reactContainer$" + Cr, Rl = "__reactEvents$" + Cr, l_ = "__reactListeners$" + Cr, c_ = "__reactHandles$" + Cr, ih = "__reactResources$" + Cr, Li = "__reactMarker$" + Cr;
  function jl(e) {
    delete e[Lt], delete e[Xt], delete e[Rl], delete e[l_], delete e[c_];
  }
  function Pa(e) {
    var t = e[Lt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[La] || a[Lt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = wg(e); e !== null; ) {
            if (a = e[Lt]) return a;
            e = wg(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ia(e) {
    if (e = e[Lt] || e[La]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Pi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ba(e) {
    var t = e[ih];
    return t || (t = e[ih] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function kt(e) {
    e[Li] = !0;
  }
  var sh = /* @__PURE__ */ new Set(), uh = {};
  function aa(e, t) {
    Ua(e, t), Ua(e + "Capture", t);
  }
  function Ua(e, t) {
    for (uh[e] = t, e = 0; e < t.length; e++)
      sh.add(t[e]);
  }
  var d_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), oh = {}, lh = {};
  function f_(e) {
    return me.call(lh, e) ? !0 : me.call(oh, e) ? !1 : d_.test(e) ? lh[e] = !0 : (oh[e] = !0, !1);
  }
  function ou(e, t, a) {
    if (f_(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function lu(e, t, a) {
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
  function tr(e, t, a, u) {
    if (u === null) e.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + u);
    }
  }
  var Dl, ch;
  function Ha(e) {
    if (Dl === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Dl = t && t[1] || "", ch = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Dl + e + ch;
  }
  var zl = !1;
  function Ll(e, t) {
    if (!e || zl) return "";
    zl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
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
                } catch (W) {
                  var K = W;
                }
                Reflect.construct(e, [], ue);
              } else {
                try {
                  ue.call();
                } catch (W) {
                  K = W;
                }
                e.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                K = W;
              }
              (ue = e()) && typeof ue.catch == "function" && ue.catch(function() {
              });
            }
          } catch (W) {
            if (W && K && typeof W.stack == "string")
              return [W.stack, K.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var y = u.DetermineComponentFrameRoot(), T = y[0], D = y[1];
      if (T && D) {
        var U = T.split(`
`), F = D.split(`
`);
        for (d = u = 0; u < U.length && !U[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; d < F.length && !F[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (u === U.length || d === F.length)
          for (u = U.length - 1, d = F.length - 1; 1 <= u && 0 <= d && U[u] !== F[d]; )
            d--;
        for (; 1 <= u && 0 <= d; u--, d--)
          if (U[u] !== F[d]) {
            if (u !== 1 || d !== 1)
              do
                if (u--, d--, 0 > d || U[u] !== F[d]) {
                  var ae = `
` + U[u].replace(" at new ", " at ");
                  return e.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", e.displayName)), ae;
                }
              while (1 <= u && 0 <= d);
            break;
          }
      }
    } finally {
      zl = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ha(a) : "";
  }
  function h_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ha(e.type);
      case 16:
        return Ha("Lazy");
      case 13:
        return Ha("Suspense");
      case 19:
        return Ha("SuspenseList");
      case 0:
      case 15:
        return Ll(e.type, !1);
      case 11:
        return Ll(e.type.render, !1);
      case 1:
        return Ll(e.type, !0);
      case 31:
        return Ha("Activity");
      default:
        return "";
    }
  }
  function dh(e) {
    try {
      var t = "";
      do
        t += h_(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function yn(e) {
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
  function fh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function p_(e) {
    var t = fh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), u = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var d = a.get, y = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(T) {
          u = "" + T, y.call(this, T);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(T) {
          u = "" + T;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function cu(e) {
    e._valueTracker || (e._valueTracker = p_(e));
  }
  function hh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return e && (u = fh(e) ? e.checked ? "true" : "false" : e.value), e = u, e !== a ? (t.setValue(e), !0) : !1;
  }
  function du(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var m_ = /[\n"\\]/g;
  function _n(e) {
    return e.replace(
      m_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pl(e, t, a, u, d, y, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), t != null ? T === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + yn(t)) : e.value !== "" + yn(t) && (e.value = "" + yn(t)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), t != null ? Il(e, T, yn(t)) : a != null ? Il(e, T, yn(a)) : u != null && e.removeAttribute("value"), d == null && y != null && (e.defaultChecked = !!y), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + yn(D) : e.removeAttribute("name");
  }
  function ph(e, t, a, u, d, y, T, D) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.type = y), t != null || a != null) {
      if (!(y !== "submit" && y !== "reset" || t != null))
        return;
      a = a != null ? "" + yn(a) : "", t = t != null ? "" + yn(t) : a, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    u = u ?? d, u = typeof u != "function" && typeof u != "symbol" && !!u, e.checked = D ? e.checked : !!u, e.defaultChecked = !!u, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Il(e, t, a) {
    t === "number" && du(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function qa(e, t, a, u) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < a.length; d++)
        t["$" + a[d]] = !0;
      for (a = 0; a < e.length; a++)
        d = t.hasOwnProperty("$" + e[a].value), e[a].selected !== d && (e[a].selected = d), d && u && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + yn(a), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === a) {
          e[d].selected = !0, u && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mh(e, t, a) {
    if (t != null && (t = "" + yn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + yn(a) : "";
  }
  function gh(e, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(i(92));
        if (J(u)) {
          if (1 < u.length) throw Error(i(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = yn(t), e.defaultValue = a, u = e.textContent, u === a && u !== "" && u !== null && (e.value = u);
  }
  function Za(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var g_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vh(e, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : u ? e.setProperty(t, a) : typeof a != "number" || a === 0 || g_.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function yh(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(i(62));
    if (e = e.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? e.setProperty(u, "") : u === "float" ? e.cssFloat = "" : e[u] = "");
      for (var d in t)
        u = t[d], t.hasOwnProperty(d) && a[d] !== u && vh(e, d, u);
    } else
      for (var y in t)
        t.hasOwnProperty(y) && vh(e, y, t[y]);
  }
  function Bl(e) {
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
  var v_ = /* @__PURE__ */ new Map([
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
  ]), y_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fu(e) {
    return y_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ul = null;
  function Hl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ga = null, Va = null;
  function _h(e) {
    var t = Ia(e);
    if (t && (e = t.stateNode)) {
      var a = e[Xt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Pl(
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
              'input[name="' + _n(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== e && u.form === e.form) {
                var d = u[Xt] || null;
                if (!d) throw Error(i(90));
                Pl(
                  u,
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
              u = a[t], u.form === e.form && hh(u);
          }
          break e;
        case "textarea":
          mh(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && qa(e, !!a.multiple, t, !1);
      }
    }
  }
  var ql = !1;
  function bh(e, t, a) {
    if (ql) return e(t, a);
    ql = !0;
    try {
      var u = e(t);
      return u;
    } finally {
      if (ql = !1, (Ga !== null || Va !== null) && (Ku(), Ga && (t = Ga, e = Va, Va = Ga = null, _h(t), e)))
        for (t = 0; t < e.length; t++) _h(e[t]);
    }
  }
  function Ii(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var u = a[Xt] || null;
    if (u === null) return null;
    a = u[t];
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
        (u = !u.disabled) || (e = e.type, u = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !u;
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
  var nr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = !1;
  if (nr)
    try {
      var Bi = {};
      Object.defineProperty(Bi, "passive", {
        get: function() {
          Zl = !0;
        }
      }), window.addEventListener("test", Bi, Bi), window.removeEventListener("test", Bi, Bi);
    } catch {
      Zl = !1;
    }
  var kr = null, Gl = null, hu = null;
  function Sh() {
    if (hu) return hu;
    var e, t = Gl, a = t.length, u, d = "value" in kr ? kr.value : kr.textContent, y = d.length;
    for (e = 0; e < a && t[e] === d[e]; e++) ;
    var T = a - e;
    for (u = 1; u <= T && t[a - u] === d[y - u]; u++) ;
    return hu = d.slice(e, 1 < u ? 1 - u : void 0);
  }
  function pu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function mu() {
    return !0;
  }
  function wh() {
    return !1;
  }
  function Ft(e) {
    function t(a, u, d, y, T) {
      this._reactName = a, this._targetInst = d, this.type = u, this.nativeEvent = y, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (a = e[D], this[D] = a ? a(y) : y[D]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? mu : wh, this.isPropagationStopped = wh, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = mu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = mu);
      },
      persist: function() {
      },
      isPersistent: mu
    }), t;
  }
  var ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, gu = Ft(ia), Ui = g({}, ia, { view: 0, detail: 0 }), __ = Ft(Ui), Vl, Yl, Hi, vu = g({}, Ui, {
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
    getModifierState: Xl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Hi && (Hi && e.type === "mousemove" ? (Vl = e.screenX - Hi.screenX, Yl = e.screenY - Hi.screenY) : Yl = Vl = 0, Hi = e), Vl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Yl;
    }
  }), Eh = Ft(vu), b_ = g({}, vu, { dataTransfer: 0 }), S_ = Ft(b_), w_ = g({}, Ui, { relatedTarget: 0 }), $l = Ft(w_), E_ = g({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), C_ = Ft(E_), k_ = g({}, ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), A_ = Ft(k_), T_ = g({}, ia, { data: 0 }), Ch = Ft(T_), x_ = {
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
  }, N_ = {
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
  }, O_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function M_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = O_[e]) ? !!t[e] : !1;
  }
  function Xl() {
    return M_;
  }
  var R_ = g({}, Ui, {
    key: function(e) {
      if (e.key) {
        var t = x_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? N_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xl,
    charCode: function(e) {
      return e.type === "keypress" ? pu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), j_ = Ft(R_), D_ = g({}, vu, {
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
  }), kh = Ft(D_), z_ = g({}, Ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xl
  }), L_ = Ft(z_), P_ = g({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), I_ = Ft(P_), B_ = g({}, vu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), U_ = Ft(B_), H_ = g({}, ia, {
    newState: 0,
    oldState: 0
  }), q_ = Ft(H_), Z_ = [9, 13, 27, 32], Fl = nr && "CompositionEvent" in window, qi = null;
  nr && "documentMode" in document && (qi = document.documentMode);
  var G_ = nr && "TextEvent" in window && !qi, Ah = nr && (!Fl || qi && 8 < qi && 11 >= qi), Th = " ", xh = !1;
  function Nh(e, t) {
    switch (e) {
      case "keyup":
        return Z_.indexOf(t.keyCode) !== -1;
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
  function Oh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ya = !1;
  function V_(e, t) {
    switch (e) {
      case "compositionend":
        return Oh(t);
      case "keypress":
        return t.which !== 32 ? null : (xh = !0, Th);
      case "textInput":
        return e = t.data, e === Th && xh ? null : e;
      default:
        return null;
    }
  }
  function Y_(e, t) {
    if (Ya)
      return e === "compositionend" || !Fl && Nh(e, t) ? (e = Sh(), hu = Gl = kr = null, Ya = !1, e) : null;
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
        return Ah && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var $_ = {
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
  function Mh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$_[e.type] : t === "textarea";
  }
  function Rh(e, t, a, u) {
    Ga ? Va ? Va.push(u) : Va = [u] : Ga = u, t = ro(t, "onChange"), 0 < t.length && (a = new gu(
      "onChange",
      "change",
      null,
      a,
      u
    ), e.push({ event: a, listeners: t }));
  }
  var Zi = null, Gi = null;
  function X_(e) {
    fg(e, 0);
  }
  function yu(e) {
    var t = Pi(e);
    if (hh(t)) return e;
  }
  function jh(e, t) {
    if (e === "change") return t;
  }
  var Dh = !1;
  if (nr) {
    var Ql;
    if (nr) {
      var Kl = "oninput" in document;
      if (!Kl) {
        var zh = document.createElement("div");
        zh.setAttribute("oninput", "return;"), Kl = typeof zh.oninput == "function";
      }
      Ql = Kl;
    } else Ql = !1;
    Dh = Ql && (!document.documentMode || 9 < document.documentMode);
  }
  function Lh() {
    Zi && (Zi.detachEvent("onpropertychange", Ph), Gi = Zi = null);
  }
  function Ph(e) {
    if (e.propertyName === "value" && yu(Gi)) {
      var t = [];
      Rh(
        t,
        Gi,
        e,
        Hl(e)
      ), bh(X_, t);
    }
  }
  function F_(e, t, a) {
    e === "focusin" ? (Lh(), Zi = t, Gi = a, Zi.attachEvent("onpropertychange", Ph)) : e === "focusout" && Lh();
  }
  function Q_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yu(Gi);
  }
  function K_(e, t) {
    if (e === "click") return yu(t);
  }
  function J_(e, t) {
    if (e === "input" || e === "change")
      return yu(t);
  }
  function W_(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rn = typeof Object.is == "function" ? Object.is : W_;
  function Vi(e, t) {
    if (rn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var d = a[u];
      if (!me.call(t, d) || !rn(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function Ih(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bh(e, t) {
    var a = Ih(e);
    e = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = e + a.textContent.length, e <= t && u >= t)
          return { node: a, offset: t - e };
        e = u;
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
      a = Ih(a);
    }
  }
  function Uh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = du(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = du(e.document);
    }
    return t;
  }
  function Jl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var eb = nr && "documentMode" in document && 11 >= document.documentMode, $a = null, Wl = null, Yi = null, ec = !1;
  function qh(e, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ec || $a == null || $a !== du(u) || (u = $a, "selectionStart" in u && Jl(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Yi && Vi(Yi, u) || (Yi = u, u = ro(Wl, "onSelect"), 0 < u.length && (t = new gu(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: u }), t.target = $a)));
  }
  function sa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Xa = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, tc = {}, Zh = {};
  nr && (Zh = document.createElement("div").style, "AnimationEvent" in window || (delete Xa.animationend.animation, delete Xa.animationiteration.animation, delete Xa.animationstart.animation), "TransitionEvent" in window || delete Xa.transitionend.transition);
  function ua(e) {
    if (tc[e]) return tc[e];
    if (!Xa[e]) return e;
    var t = Xa[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Zh)
        return tc[e] = t[a];
    return e;
  }
  var Gh = ua("animationend"), Vh = ua("animationiteration"), Yh = ua("animationstart"), tb = ua("transitionrun"), nb = ua("transitionstart"), rb = ua("transitioncancel"), $h = ua("transitionend"), Xh = /* @__PURE__ */ new Map(), nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  nc.push("scrollEnd");
  function Mn(e, t) {
    Xh.set(e, t), aa(t, [e]);
  }
  var Fh = /* @__PURE__ */ new WeakMap();
  function bn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Fh.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: dh(t)
      }, Fh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: dh(t)
    };
  }
  var Sn = [], Fa = 0, rc = 0;
  function _u() {
    for (var e = Fa, t = rc = Fa = 0; t < e; ) {
      var a = Sn[t];
      Sn[t++] = null;
      var u = Sn[t];
      Sn[t++] = null;
      var d = Sn[t];
      Sn[t++] = null;
      var y = Sn[t];
      if (Sn[t++] = null, u !== null && d !== null) {
        var T = u.pending;
        T === null ? d.next = d : (d.next = T.next, T.next = d), u.pending = d;
      }
      y !== 0 && Qh(a, d, y);
    }
  }
  function bu(e, t, a, u) {
    Sn[Fa++] = e, Sn[Fa++] = t, Sn[Fa++] = a, Sn[Fa++] = u, rc |= u, e.lanes |= u, e = e.alternate, e !== null && (e.lanes |= u);
  }
  function ac(e, t, a, u) {
    return bu(e, t, a, u), Su(e);
  }
  function Qa(e, t) {
    return bu(e, null, null, t), Su(e);
  }
  function Qh(e, t, a) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a);
    for (var d = !1, y = e.return; y !== null; )
      y.childLanes |= a, u = y.alternate, u !== null && (u.childLanes |= a), y.tag === 22 && (e = y.stateNode, e === null || e._visibility & 1 || (d = !0)), e = y, y = y.return;
    return e.tag === 3 ? (y = e.stateNode, d && t !== null && (d = 31 - qt(a), e = y.hiddenUpdates, u = e[d], u === null ? e[d] = [t] : u.push(t), t.lane = a | 536870912), y) : null;
  }
  function Su(e) {
    if (50 < vs)
      throw vs = 0, cd = null, Error(i(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ka = {};
  function ab(e, t, a, u) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, a, u) {
    return new ab(e, t, a, u);
  }
  function ic(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function rr(e, t) {
    var a = e.alternate;
    return a === null ? (a = an(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Kh(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function wu(e, t, a, u, d, y) {
    var T = 0;
    if (u = e, typeof e == "function") ic(e) && (T = 1);
    else if (typeof e == "string")
      T = s1(
        e,
        a,
        q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = an(31, a, t, d), e.elementType = L, e.lanes = y, e;
        case h:
          return oa(a.children, d, y, t);
        case C:
          T = 8, d |= 24;
          break;
        case A:
          return e = an(12, a, t, d | 2), e.elementType = A, e.lanes = y, e;
        case v:
          return e = an(13, a, t, d), e.elementType = v, e.lanes = y, e;
        case w:
          return e = an(19, a, t, d), e.elementType = w, e.lanes = y, e;
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
                T = 16, u = null;
                break e;
            }
          T = 29, a = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), u = null;
      }
    return t = an(T, a, t, d), t.elementType = e, t.type = u, t.lanes = y, t;
  }
  function oa(e, t, a, u) {
    return e = an(7, e, u, t), e.lanes = a, e;
  }
  function sc(e, t, a) {
    return e = an(6, e, null, t), e.lanes = a, e;
  }
  function uc(e, t, a) {
    return t = an(
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
  var Ja = [], Wa = 0, Eu = null, Cu = 0, wn = [], En = 0, la = null, ar = 1, ir = "";
  function ca(e, t) {
    Ja[Wa++] = Cu, Ja[Wa++] = Eu, Eu = e, Cu = t;
  }
  function Jh(e, t, a) {
    wn[En++] = ar, wn[En++] = ir, wn[En++] = la, la = e;
    var u = ar;
    e = ir;
    var d = 32 - qt(u) - 1;
    u &= ~(1 << d), a += 1;
    var y = 32 - qt(t) + d;
    if (30 < y) {
      var T = d - d % 5;
      y = (u & (1 << T) - 1).toString(32), u >>= T, d -= T, ar = 1 << 32 - qt(t) + d | a << d | u, ir = y + e;
    } else
      ar = 1 << y | a << d | u, ir = e;
  }
  function oc(e) {
    e.return !== null && (ca(e, 1), Jh(e, 1, 0));
  }
  function lc(e) {
    for (; e === Eu; )
      Eu = Ja[--Wa], Ja[Wa] = null, Cu = Ja[--Wa], Ja[Wa] = null;
    for (; e === la; )
      la = wn[--En], wn[En] = null, ir = wn[--En], wn[En] = null, ar = wn[--En], wn[En] = null;
  }
  var Gt = null, ct = null, Ge = !1, da = null, Hn = !1, cc = Error(i(519));
  function fa(e) {
    var t = Error(i(418, ""));
    throw Fi(bn(t, e)), cc;
  }
  function Wh(e) {
    var t = e.stateNode, a = e.type, u = e.memoizedProps;
    switch (t[Lt] = e, t[Xt] = u, a) {
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
        for (a = 0; a < _s.length; a++)
          Be(_s[a], t);
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
        Be("invalid", t), ph(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), cu(t);
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), gh(t, u.value, u.defaultValue, u.children), cu(t);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || gg(t.textContent, a) ? (u.popover != null && (Be("beforetoggle", t), Be("toggle", t)), u.onScroll != null && Be("scroll", t), u.onScrollEnd != null && Be("scrollend", t), u.onClick != null && (t.onclick = ao), t = !0) : t = !1, t || fa(e);
  }
  function ep(e) {
    for (Gt = e.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 13:
          Hn = !1;
          return;
        case 27:
        case 3:
          Hn = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function $i(e) {
    if (e !== Gt) return !1;
    if (!Ge) return ep(e), Ge = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ad(e.type, e.memoizedProps)), a = !a), a && ct && fa(e), ep(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                ct = jn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        ct = null;
      }
    } else
      t === 27 ? (t = ct, Hr(e.type) ? (e = Od, Od = null, ct = e) : ct = t) : ct = Gt ? jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    ct = Gt = null, Ge = !1;
  }
  function tp() {
    var e = da;
    return e !== null && (Jt === null ? Jt = e : Jt.push.apply(
      Jt,
      e
    ), da = null), e;
  }
  function Fi(e) {
    da === null ? da = [e] : da.push(e);
  }
  var dc = H(null), ha = null, sr = null;
  function Ar(e, t, a) {
    oe(dc, t._currentValue), t._currentValue = a;
  }
  function ur(e) {
    e._currentValue = dc.current, ne(dc);
  }
  function fc(e, t, a) {
    for (; e !== null; ) {
      var u = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function hc(e, t, a, u) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var y = d.dependencies;
      if (y !== null) {
        var T = d.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var D = y;
          y = d;
          for (var U = 0; U < t.length; U++)
            if (D.context === t[U]) {
              y.lanes |= a, D = y.alternate, D !== null && (D.lanes |= a), fc(
                y.return,
                a,
                e
              ), u || (T = null);
              break e;
            }
          y = D.next;
        }
      } else if (d.tag === 18) {
        if (T = d.return, T === null) throw Error(i(341));
        T.lanes |= a, y = T.alternate, y !== null && (y.lanes |= a), fc(T, a, e), T = null;
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
  function Qi(e, t, a, u) {
    e = null;
    for (var d = t, y = !1; d !== null; ) {
      if (!y) {
        if ((d.flags & 524288) !== 0) y = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var T = d.alternate;
        if (T === null) throw Error(i(387));
        if (T = T.memoizedProps, T !== null) {
          var D = d.type;
          rn(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === de.current) {
        if (T = d.alternate, T === null) throw Error(i(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(ks) : e = [ks]);
      }
      d = d.return;
    }
    e !== null && hc(
      t,
      e,
      a,
      u
    ), t.flags |= 262144;
  }
  function ku(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function pa(e) {
    ha = e, sr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pt(e) {
    return np(ha, e);
  }
  function Au(e, t) {
    return ha === null && pa(e), np(e, t);
  }
  function np(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, sr === null) {
      if (e === null) throw Error(i(308));
      sr = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else sr = sr.next = t;
    return a;
  }
  var ib = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        e.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, sb = n.unstable_scheduleCallback, ub = n.unstable_NormalPriority, St = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pc() {
    return {
      controller: new ib(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ki(e) {
    e.refCount--, e.refCount === 0 && sb(ub, function() {
      e.controller.abort();
    });
  }
  var Ji = null, mc = 0, ei = 0, ti = null;
  function ob(e, t) {
    if (Ji === null) {
      var a = Ji = [];
      mc = 0, ei = vd(), ti = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return mc++, t.then(rp, rp), t;
  }
  function rp() {
    if (--mc === 0 && Ji !== null) {
      ti !== null && (ti.status = "fulfilled");
      var e = Ji;
      Ji = null, ei = 0, ti = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function lb(e, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        a.push(d);
      }
    };
    return e.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var d = 0; d < a.length; d++) (0, a[d])(t);
      },
      function(d) {
        for (u.status = "rejected", u.reason = d, d = 0; d < a.length; d++)
          (0, a[d])(void 0);
      }
    ), u;
  }
  var ap = M.S;
  M.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && ob(e, t), ap !== null && ap(e, t);
  };
  var ma = H(null);
  function gc() {
    var e = ma.current;
    return e !== null ? e : et.pooledCache;
  }
  function Tu(e, t) {
    t === null ? oe(ma, ma.current) : oe(ma, t.pool);
  }
  function ip() {
    var e = gc();
    return e === null ? null : { parent: St._currentValue, pool: e };
  }
  var Wi = Error(i(460)), sp = Error(i(474)), xu = Error(i(542)), vc = { then: function() {
  } };
  function up(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Nu() {
  }
  function op(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Nu, Nu), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, cp(e), e;
      default:
        if (typeof t.status == "string") t.then(Nu, Nu);
        else {
          if (e = et, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = t, e.status = "pending", e.then(
            function(u) {
              if (t.status === "pending") {
                var d = t;
                d.status = "fulfilled", d.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var d = t;
                d.status = "rejected", d.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, cp(e), e;
        }
        throw es = t, Wi;
    }
  }
  var es = null;
  function lp() {
    if (es === null) throw Error(i(459));
    var e = es;
    return es = null, e;
  }
  function cp(e) {
    if (e === Wi || e === xu)
      throw Error(i(483));
  }
  var Tr = !1;
  function yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function xr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Nr(e, t, a) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (u = u.shared, ($e & 2) !== 0) {
      var d = u.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, t = Su(e), Qh(e, null, a), t;
    }
    return bu(e, u, t, a), Su(e);
  }
  function ts(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= e.pendingLanes, a |= u, t.lanes = a, rh(e, a);
    }
  }
  function bc(e, t) {
    var a = e.updateQueue, u = e.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var d = null, y = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var T = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          y === null ? d = y = T : y = y.next = T, a = a.next;
        } while (a !== null);
        y === null ? d = y = t : y = y.next = t;
      } else d = y = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: y,
        shared: u.shared,
        callbacks: u.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Sc = !1;
  function ns() {
    if (Sc) {
      var e = ti;
      if (e !== null) throw e;
    }
  }
  function rs(e, t, a, u) {
    Sc = !1;
    var d = e.updateQueue;
    Tr = !1;
    var y = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var U = D, F = U.next;
      U.next = null, T === null ? y = F : T.next = F, T = U;
      var ae = e.alternate;
      ae !== null && (ae = ae.updateQueue, D = ae.lastBaseUpdate, D !== T && (D === null ? ae.firstBaseUpdate = F : D.next = F, ae.lastBaseUpdate = U));
    }
    if (y !== null) {
      var ue = d.baseState;
      T = 0, ae = F = U = null, D = y;
      do {
        var K = D.lane & -536870913, W = K !== D.lane;
        if (W ? (qe & K) === K : (u & K) === K) {
          K !== 0 && K === ei && (Sc = !0), ae !== null && (ae = ae.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Ce = e, we = D;
            K = t;
            var Ke = a;
            switch (we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  ue = Ce.call(Ke, ue, K);
                  break e;
                }
                ue = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, K = typeof Ce == "function" ? Ce.call(Ke, ue, K) : Ce, K == null) break e;
                ue = g({}, ue, K);
                break e;
              case 2:
                Tr = !0;
            }
          }
          K = D.callback, K !== null && (e.flags |= 64, W && (e.flags |= 8192), W = d.callbacks, W === null ? d.callbacks = [K] : W.push(K));
        } else
          W = {
            lane: K,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, ae === null ? (F = ae = W, U = ue) : ae = ae.next = W, T |= K;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          W = D, D = W.next, W.next = null, d.lastBaseUpdate = W, d.shared.pending = null;
        }
      } while (!0);
      ae === null && (U = ue), d.baseState = U, d.firstBaseUpdate = F, d.lastBaseUpdate = ae, y === null && (d.shared.lanes = 0), Pr |= T, e.lanes = T, e.memoizedState = ue;
    }
  }
  function dp(e, t) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(t);
  }
  function fp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        dp(a[e], t);
  }
  var ni = H(null), Ou = H(0);
  function hp(e, t) {
    e = pr, oe(Ou, e), oe(ni, t), pr = e | t.baseLanes;
  }
  function wc() {
    oe(Ou, pr), oe(ni, ni.current);
  }
  function Ec() {
    pr = Ou.current, ne(ni), ne(Ou);
  }
  var Or = 0, ze = null, Fe = null, vt = null, Mu = !1, ri = !1, ga = !1, Ru = 0, as = 0, ai = null, cb = 0;
  function pt() {
    throw Error(i(321));
  }
  function Cc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!rn(e[a], t[a])) return !1;
    return !0;
  }
  function kc(e, t, a, u, d, y) {
    return Or = y, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Qp : Kp, ga = !1, y = a(u, d), ga = !1, ri && (y = mp(
      t,
      a,
      u,
      d
    )), pp(e), y;
  }
  function pp(e) {
    M.H = Iu;
    var t = Fe !== null && Fe.next !== null;
    if (Or = 0, vt = Fe = ze = null, Mu = !1, as = 0, ai = null, t) throw Error(i(300));
    e === null || At || (e = e.dependencies, e !== null && ku(e) && (At = !0));
  }
  function mp(e, t, a, u) {
    ze = e;
    var d = 0;
    do {
      if (ri && (ai = null), as = 0, ri = !1, 25 <= d) throw Error(i(301));
      if (d += 1, vt = Fe = null, e.updateQueue != null) {
        var y = e.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      M.H = vb, y = t(a, u);
    } while (ri);
    return y;
  }
  function db() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? is(t) : t, e = e.useState()[0], (Fe !== null ? Fe.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function Ac() {
    var e = Ru !== 0;
    return Ru = 0, e;
  }
  function Tc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function xc(e) {
    if (Mu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Mu = !1;
    }
    Or = 0, vt = Fe = ze = null, ri = !1, as = Ru = 0, ai = null;
  }
  function Qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? ze.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function yt() {
    if (Fe === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = vt === null ? ze.memoizedState : vt.next;
    if (t !== null)
      vt = t, Fe = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(i(467)) : Error(i(310));
      Fe = e, e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null
      }, vt === null ? ze.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function Nc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function is(e) {
    var t = as;
    return as += 1, ai === null && (ai = []), e = op(ai, e, t), t = ze, (vt === null ? t.memoizedState : vt.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Qp : Kp), e;
  }
  function ju(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return is(e);
      if (e.$$typeof === z) return Pt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Oc(e) {
    var t = null, a = ze.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = ze.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Nc(), ze.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), u = 0; u < e; u++)
        a[u] = j;
    return t.index++, a;
  }
  function or(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Du(e) {
    var t = yt();
    return Mc(t, Fe, e);
  }
  function Mc(e, t, a) {
    var u = e.queue;
    if (u === null) throw Error(i(311));
    u.lastRenderedReducer = a;
    var d = e.baseQueue, y = u.pending;
    if (y !== null) {
      if (d !== null) {
        var T = d.next;
        d.next = y.next, y.next = T;
      }
      t.baseQueue = d = y, u.pending = null;
    }
    if (y = e.baseState, d === null) e.memoizedState = y;
    else {
      t = d.next;
      var D = T = null, U = null, F = t, ae = !1;
      do {
        var ue = F.lane & -536870913;
        if (ue !== F.lane ? (qe & ue) === ue : (Or & ue) === ue) {
          var K = F.revertLane;
          if (K === 0)
            U !== null && (U = U.next = {
              lane: 0,
              revertLane: 0,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            }), ue === ei && (ae = !0);
          else if ((Or & K) === K) {
            F = F.next, K === ei && (ae = !0);
            continue;
          } else
            ue = {
              lane: 0,
              revertLane: F.revertLane,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            }, U === null ? (D = U = ue, T = y) : U = U.next = ue, ze.lanes |= K, Pr |= K;
          ue = F.action, ga && a(y, ue), y = F.hasEagerState ? F.eagerState : a(y, ue);
        } else
          K = {
            lane: ue,
            revertLane: F.revertLane,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          }, U === null ? (D = U = K, T = y) : U = U.next = K, ze.lanes |= ue, Pr |= ue;
        F = F.next;
      } while (F !== null && F !== t);
      if (U === null ? T = y : U.next = D, !rn(y, e.memoizedState) && (At = !0, ae && (a = ti, a !== null)))
        throw a;
      e.memoizedState = y, e.baseState = T, e.baseQueue = U, u.lastRenderedState = y;
    }
    return d === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function Rc(e) {
    var t = yt(), a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var u = a.dispatch, d = a.pending, y = t.memoizedState;
    if (d !== null) {
      a.pending = null;
      var T = d = d.next;
      do
        y = e(y, T.action), T = T.next;
      while (T !== d);
      rn(y, t.memoizedState) || (At = !0), t.memoizedState = y, t.baseQueue === null && (t.baseState = y), a.lastRenderedState = y;
    }
    return [y, u];
  }
  function gp(e, t, a) {
    var u = ze, d = yt(), y = Ge;
    if (y) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var T = !rn(
      (Fe || d).memoizedState,
      a
    );
    T && (d.memoizedState = a, At = !0), d = d.queue;
    var D = _p.bind(null, u, d, e);
    if (ss(2048, 8, D, [e]), d.getSnapshot !== t || T || vt !== null && vt.memoizedState.tag & 1) {
      if (u.flags |= 2048, ii(
        9,
        zu(),
        yp.bind(
          null,
          u,
          d,
          a,
          t
        ),
        null
      ), et === null) throw Error(i(349));
      y || (Or & 124) !== 0 || vp(u, t, a);
    }
    return a;
  }
  function vp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ze.updateQueue, t === null ? (t = Nc(), ze.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function yp(e, t, a, u) {
    t.value = a, t.getSnapshot = u, bp(t) && Sp(e);
  }
  function _p(e, t, a) {
    return a(function() {
      bp(t) && Sp(e);
    });
  }
  function bp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !rn(e, a);
    } catch {
      return !0;
    }
  }
  function Sp(e) {
    var t = Qa(e, 2);
    t !== null && cn(t, e, 2);
  }
  function jc(e) {
    var t = Qt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ga) {
        Bn(!0);
        try {
          a();
        } finally {
          Bn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e
    }, t;
  }
  function wp(e, t, a, u) {
    return e.baseState = a, Mc(
      e,
      Fe,
      typeof u == "function" ? u : or
    );
  }
  function fb(e, t, a, u, d) {
    if (Pu(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var y = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(T) {
          y.listeners.push(T);
        }
      };
      M.T !== null ? a(!0) : y.isTransition = !1, u(y), a = t.pending, a === null ? (y.next = t.pending = y, Ep(t, y)) : (y.next = a.next, t.pending = a.next = y);
    }
  }
  function Ep(e, t) {
    var a = t.action, u = t.payload, d = e.state;
    if (t.isTransition) {
      var y = M.T, T = {};
      M.T = T;
      try {
        var D = a(d, u), U = M.S;
        U !== null && U(T, D), Cp(e, t, D);
      } catch (F) {
        Dc(e, t, F);
      } finally {
        M.T = y;
      }
    } else
      try {
        y = a(d, u), Cp(e, t, y);
      } catch (F) {
        Dc(e, t, F);
      }
  }
  function Cp(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        kp(e, t, u);
      },
      function(u) {
        return Dc(e, t, u);
      }
    ) : kp(e, t, a);
  }
  function kp(e, t, a) {
    t.status = "fulfilled", t.value = a, Ap(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ep(e, a)));
  }
  function Dc(e, t, a) {
    var u = e.pending;
    if (e.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Ap(t), t = t.next;
      while (t !== u);
    }
    e.action = null;
  }
  function Ap(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Tp(e, t) {
    return t;
  }
  function xp(e, t) {
    if (Ge) {
      var a = et.formState;
      if (a !== null) {
        e: {
          var u = ze;
          if (Ge) {
            if (ct) {
              t: {
                for (var d = ct, y = Hn; d.nodeType !== 8; ) {
                  if (!y) {
                    d = null;
                    break t;
                  }
                  if (d = jn(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                y = d.data, d = y === "F!" || y === "F" ? d : null;
              }
              if (d) {
                ct = jn(
                  d.nextSibling
                ), u = d.data === "F!";
                break e;
              }
            }
            fa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Qt(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tp,
      lastRenderedState: t
    }, a.queue = u, a = $p.bind(
      null,
      ze,
      u
    ), u.dispatch = a, u = jc(!1), y = Bc.bind(
      null,
      ze,
      !1,
      u.queue
    ), u = Qt(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, u.queue = d, a = fb.bind(
      null,
      ze,
      d,
      y,
      a
    ), d.dispatch = a, u.memoizedState = e, [t, a, !1];
  }
  function Np(e) {
    var t = yt();
    return Op(t, Fe, e);
  }
  function Op(e, t, a) {
    if (t = Mc(
      e,
      t,
      Tp
    )[0], e = Du(or)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = is(t);
      } catch (T) {
        throw T === Wi ? xu : T;
      }
    else u = t;
    t = yt();
    var d = t.queue, y = d.dispatch;
    return a !== t.memoizedState && (ze.flags |= 2048, ii(
      9,
      zu(),
      hb.bind(null, d, a),
      null
    )), [u, y, e];
  }
  function hb(e, t) {
    e.action = t;
  }
  function Mp(e) {
    var t = yt(), a = Fe;
    if (a !== null)
      return Op(t, a, e);
    yt(), t = t.memoizedState, a = yt();
    var u = a.queue.dispatch;
    return a.memoizedState = e, [t, u, !1];
  }
  function ii(e, t, a, u) {
    return e = { tag: e, create: a, deps: u, inst: t, next: null }, t = ze.updateQueue, t === null && (t = Nc(), ze.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (u = a.next, a.next = e, e.next = u, t.lastEffect = e), e;
  }
  function zu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Rp() {
    return yt().memoizedState;
  }
  function Lu(e, t, a, u) {
    var d = Qt();
    u = u === void 0 ? null : u, ze.flags |= e, d.memoizedState = ii(
      1 | t,
      zu(),
      a,
      u
    );
  }
  function ss(e, t, a, u) {
    var d = yt();
    u = u === void 0 ? null : u;
    var y = d.memoizedState.inst;
    Fe !== null && u !== null && Cc(u, Fe.memoizedState.deps) ? d.memoizedState = ii(t, y, a, u) : (ze.flags |= e, d.memoizedState = ii(
      1 | t,
      y,
      a,
      u
    ));
  }
  function jp(e, t) {
    Lu(8390656, 8, e, t);
  }
  function Dp(e, t) {
    ss(2048, 8, e, t);
  }
  function zp(e, t) {
    return ss(4, 2, e, t);
  }
  function Lp(e, t) {
    return ss(4, 4, e, t);
  }
  function Pp(e, t) {
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
  function Ip(e, t, a) {
    a = a != null ? a.concat([e]) : null, ss(4, 4, Pp.bind(null, t, e), a);
  }
  function zc() {
  }
  function Bp(e, t) {
    var a = yt();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Cc(t, u[1]) ? u[0] : (a.memoizedState = [e, t], e);
  }
  function Up(e, t) {
    var a = yt();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Cc(t, u[1]))
      return u[0];
    if (u = e(), ga) {
      Bn(!0);
      try {
        e();
      } finally {
        Bn(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function Lc(e, t, a) {
    return a === void 0 || (Or & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Zm(), ze.lanes |= e, Pr |= e, a);
  }
  function Hp(e, t, a, u) {
    return rn(a, t) ? a : ni.current !== null ? (e = Lc(e, a, u), rn(e, t) || (At = !0), e) : (Or & 42) === 0 ? (At = !0, e.memoizedState = a) : (e = Zm(), ze.lanes |= e, Pr |= e, t);
  }
  function qp(e, t, a, u, d) {
    var y = B.p;
    B.p = y !== 0 && 8 > y ? y : 8;
    var T = M.T, D = {};
    M.T = D, Bc(e, !1, t, a);
    try {
      var U = d(), F = M.S;
      if (F !== null && F(D, U), U !== null && typeof U == "object" && typeof U.then == "function") {
        var ae = lb(
          U,
          u
        );
        us(
          e,
          t,
          ae,
          ln(e)
        );
      } else
        us(
          e,
          t,
          u,
          ln(e)
        );
    } catch (ue) {
      us(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: ue },
        ln()
      );
    } finally {
      B.p = y, M.T = T;
    }
  }
  function pb() {
  }
  function Pc(e, t, a, u) {
    if (e.tag !== 5) throw Error(i(476));
    var d = Zp(e).queue;
    qp(
      e,
      d,
      t,
      Q,
      a === null ? pb : function() {
        return Gp(e), a(u);
      }
    );
  }
  function Zp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: or,
        lastRenderedState: Q
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
        lastRenderedReducer: or,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Gp(e) {
    var t = Zp(e).next.queue;
    us(e, t, {}, ln());
  }
  function Ic() {
    return Pt(ks);
  }
  function Vp() {
    return yt().memoizedState;
  }
  function Yp() {
    return yt().memoizedState;
  }
  function mb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ln();
          e = xr(a);
          var u = Nr(t, e, a);
          u !== null && (cn(u, t, a), ts(u, t, a)), t = { cache: pc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function gb(e, t, a) {
    var u = ln();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pu(e) ? Xp(t, a) : (a = ac(e, t, a, u), a !== null && (cn(a, e, u), Fp(a, t, u)));
  }
  function $p(e, t, a) {
    var u = ln();
    us(e, t, a, u);
  }
  function us(e, t, a, u) {
    var d = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pu(e)) Xp(t, d);
    else {
      var y = e.alternate;
      if (e.lanes === 0 && (y === null || y.lanes === 0) && (y = t.lastRenderedReducer, y !== null))
        try {
          var T = t.lastRenderedState, D = y(T, a);
          if (d.hasEagerState = !0, d.eagerState = D, rn(D, T))
            return bu(e, t, d, 0), et === null && _u(), !1;
        } catch {
        } finally {
        }
      if (a = ac(e, t, d, u), a !== null)
        return cn(a, e, u), Fp(a, t, u), !0;
    }
    return !1;
  }
  function Bc(e, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: vd(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pu(e)) {
      if (t) throw Error(i(479));
    } else
      t = ac(
        e,
        a,
        u,
        2
      ), t !== null && cn(t, e, 2);
  }
  function Pu(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function Xp(e, t) {
    ri = Mu = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Fp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= e.pendingLanes, a |= u, t.lanes = a, rh(e, a);
    }
  }
  var Iu = {
    readContext: Pt,
    use: ju,
    useCallback: pt,
    useContext: pt,
    useEffect: pt,
    useImperativeHandle: pt,
    useLayoutEffect: pt,
    useInsertionEffect: pt,
    useMemo: pt,
    useReducer: pt,
    useRef: pt,
    useState: pt,
    useDebugValue: pt,
    useDeferredValue: pt,
    useTransition: pt,
    useSyncExternalStore: pt,
    useId: pt,
    useHostTransitionStatus: pt,
    useFormState: pt,
    useActionState: pt,
    useOptimistic: pt,
    useMemoCache: pt,
    useCacheRefresh: pt
  }, Qp = {
    readContext: Pt,
    use: ju,
    useCallback: function(e, t) {
      return Qt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Pt,
    useEffect: jp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Lu(
        4194308,
        4,
        Pp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Lu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Lu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Qt();
      t = t === void 0 ? null : t;
      var u = e();
      if (ga) {
        Bn(!0);
        try {
          e();
        } finally {
          Bn(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(e, t, a) {
      var u = Qt();
      if (a !== void 0) {
        var d = a(t);
        if (ga) {
          Bn(!0);
          try {
            a(t);
          } finally {
            Bn(!1);
          }
        }
      } else d = t;
      return u.memoizedState = u.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, u.queue = e, e = e.dispatch = gb.bind(
        null,
        ze,
        e
      ), [u.memoizedState, e];
    },
    useRef: function(e) {
      var t = Qt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = jc(e);
      var t = e.queue, a = $p.bind(null, ze, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var a = Qt();
      return Lc(a, e, t);
    },
    useTransition: function() {
      var e = jc(!1);
      return e = qp.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Qt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var u = ze, d = Qt();
      if (Ge) {
        if (a === void 0)
          throw Error(i(407));
        a = a();
      } else {
        if (a = t(), et === null)
          throw Error(i(349));
        (qe & 124) !== 0 || vp(u, t, a);
      }
      d.memoizedState = a;
      var y = { value: a, getSnapshot: t };
      return d.queue = y, jp(_p.bind(null, u, y, e), [
        e
      ]), u.flags |= 2048, ii(
        9,
        zu(),
        yp.bind(
          null,
          u,
          y,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Qt(), t = et.identifierPrefix;
      if (Ge) {
        var a = ir, u = ar;
        a = (u & ~(1 << 32 - qt(u) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Ru++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = cb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ic,
    useFormState: xp,
    useActionState: xp,
    useOptimistic: function(e) {
      var t = Qt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Bc.bind(
        null,
        ze,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Oc,
    useCacheRefresh: function() {
      return Qt().memoizedState = mb.bind(
        null,
        ze
      );
    }
  }, Kp = {
    readContext: Pt,
    use: ju,
    useCallback: Bp,
    useContext: Pt,
    useEffect: Dp,
    useImperativeHandle: Ip,
    useInsertionEffect: zp,
    useLayoutEffect: Lp,
    useMemo: Up,
    useReducer: Du,
    useRef: Rp,
    useState: function() {
      return Du(or);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var a = yt();
      return Hp(
        a,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Du(or)[0], t = yt().memoizedState;
      return [
        typeof e == "boolean" ? e : is(e),
        t
      ];
    },
    useSyncExternalStore: gp,
    useId: Vp,
    useHostTransitionStatus: Ic,
    useFormState: Np,
    useActionState: Np,
    useOptimistic: function(e, t) {
      var a = yt();
      return wp(a, Fe, e, t);
    },
    useMemoCache: Oc,
    useCacheRefresh: Yp
  }, vb = {
    readContext: Pt,
    use: ju,
    useCallback: Bp,
    useContext: Pt,
    useEffect: Dp,
    useImperativeHandle: Ip,
    useInsertionEffect: zp,
    useLayoutEffect: Lp,
    useMemo: Up,
    useReducer: Rc,
    useRef: Rp,
    useState: function() {
      return Rc(or);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var a = yt();
      return Fe === null ? Lc(a, e, t) : Hp(
        a,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Rc(or)[0], t = yt().memoizedState;
      return [
        typeof e == "boolean" ? e : is(e),
        t
      ];
    },
    useSyncExternalStore: gp,
    useId: Vp,
    useHostTransitionStatus: Ic,
    useFormState: Mp,
    useActionState: Mp,
    useOptimistic: function(e, t) {
      var a = yt();
      return Fe !== null ? wp(a, Fe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Oc,
    useCacheRefresh: Yp
  }, si = null, os = 0;
  function Bu(e) {
    var t = os;
    return os += 1, si === null && (si = []), op(si, e, t);
  }
  function ls(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Uu(e, t) {
    throw t.$$typeof === E ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Jp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wp(e) {
    function t(V, Z) {
      if (e) {
        var $ = V.deletions;
        $ === null ? (V.deletions = [Z], V.flags |= 16) : $.push(Z);
      }
    }
    function a(V, Z) {
      if (!e) return null;
      for (; Z !== null; )
        t(V, Z), Z = Z.sibling;
      return null;
    }
    function u(V) {
      for (var Z = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? Z.set(V.key, V) : Z.set(V.index, V), V = V.sibling;
      return Z;
    }
    function d(V, Z) {
      return V = rr(V, Z), V.index = 0, V.sibling = null, V;
    }
    function y(V, Z, $) {
      return V.index = $, e ? ($ = V.alternate, $ !== null ? ($ = $.index, $ < Z ? (V.flags |= 67108866, Z) : $) : (V.flags |= 67108866, Z)) : (V.flags |= 1048576, Z);
    }
    function T(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function D(V, Z, $, se) {
      return Z === null || Z.tag !== 6 ? (Z = sc($, V.mode, se), Z.return = V, Z) : (Z = d(Z, $), Z.return = V, Z);
    }
    function U(V, Z, $, se) {
      var pe = $.type;
      return pe === h ? ae(
        V,
        Z,
        $.props.children,
        se,
        $.key
      ) : Z !== null && (Z.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === R && Jp(pe) === Z.type) ? (Z = d(Z, $.props), ls(Z, $), Z.return = V, Z) : (Z = wu(
        $.type,
        $.key,
        $.props,
        null,
        V.mode,
        se
      ), ls(Z, $), Z.return = V, Z);
    }
    function F(V, Z, $, se) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== $.containerInfo || Z.stateNode.implementation !== $.implementation ? (Z = uc($, V.mode, se), Z.return = V, Z) : (Z = d(Z, $.children || []), Z.return = V, Z);
    }
    function ae(V, Z, $, se, pe) {
      return Z === null || Z.tag !== 7 ? (Z = oa(
        $,
        V.mode,
        se,
        pe
      ), Z.return = V, Z) : (Z = d(Z, $), Z.return = V, Z);
    }
    function ue(V, Z, $) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return Z = sc(
          "" + Z,
          V.mode,
          $
        ), Z.return = V, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case _:
            return $ = wu(
              Z.type,
              Z.key,
              Z.props,
              null,
              V.mode,
              $
            ), ls($, Z), $.return = V, $;
          case S:
            return Z = uc(
              Z,
              V.mode,
              $
            ), Z.return = V, Z;
          case R:
            var se = Z._init;
            return Z = se(Z._payload), ue(V, Z, $);
        }
        if (J(Z) || G(Z))
          return Z = oa(
            Z,
            V.mode,
            $,
            null
          ), Z.return = V, Z;
        if (typeof Z.then == "function")
          return ue(V, Bu(Z), $);
        if (Z.$$typeof === z)
          return ue(
            V,
            Au(V, Z),
            $
          );
        Uu(V, Z);
      }
      return null;
    }
    function K(V, Z, $, se) {
      var pe = Z !== null ? Z.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return pe !== null ? null : D(V, Z, "" + $, se);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case _:
            return $.key === pe ? U(V, Z, $, se) : null;
          case S:
            return $.key === pe ? F(V, Z, $, se) : null;
          case R:
            return pe = $._init, $ = pe($._payload), K(V, Z, $, se);
        }
        if (J($) || G($))
          return pe !== null ? null : ae(V, Z, $, se, null);
        if (typeof $.then == "function")
          return K(
            V,
            Z,
            Bu($),
            se
          );
        if ($.$$typeof === z)
          return K(
            V,
            Z,
            Au(V, $),
            se
          );
        Uu(V, $);
      }
      return null;
    }
    function W(V, Z, $, se, pe) {
      if (typeof se == "string" && se !== "" || typeof se == "number" || typeof se == "bigint")
        return V = V.get($) || null, D(Z, V, "" + se, pe);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case _:
            return V = V.get(
              se.key === null ? $ : se.key
            ) || null, U(Z, V, se, pe);
          case S:
            return V = V.get(
              se.key === null ? $ : se.key
            ) || null, F(Z, V, se, pe);
          case R:
            var Le = se._init;
            return se = Le(se._payload), W(
              V,
              Z,
              $,
              se,
              pe
            );
        }
        if (J(se) || G(se))
          return V = V.get($) || null, ae(Z, V, se, pe, null);
        if (typeof se.then == "function")
          return W(
            V,
            Z,
            $,
            Bu(se),
            pe
          );
        if (se.$$typeof === z)
          return W(
            V,
            Z,
            $,
            Au(Z, se),
            pe
          );
        Uu(Z, se);
      }
      return null;
    }
    function Ce(V, Z, $, se) {
      for (var pe = null, Le = null, ve = Z, Ee = Z = 0, xt = null; ve !== null && Ee < $.length; Ee++) {
        ve.index > Ee ? (xt = ve, ve = null) : xt = ve.sibling;
        var Ze = K(
          V,
          ve,
          $[Ee],
          se
        );
        if (Ze === null) {
          ve === null && (ve = xt);
          break;
        }
        e && ve && Ze.alternate === null && t(V, ve), Z = y(Ze, Z, Ee), Le === null ? pe = Ze : Le.sibling = Ze, Le = Ze, ve = xt;
      }
      if (Ee === $.length)
        return a(V, ve), Ge && ca(V, Ee), pe;
      if (ve === null) {
        for (; Ee < $.length; Ee++)
          ve = ue(V, $[Ee], se), ve !== null && (Z = y(
            ve,
            Z,
            Ee
          ), Le === null ? pe = ve : Le.sibling = ve, Le = ve);
        return Ge && ca(V, Ee), pe;
      }
      for (ve = u(ve); Ee < $.length; Ee++)
        xt = W(
          ve,
          V,
          Ee,
          $[Ee],
          se
        ), xt !== null && (e && xt.alternate !== null && ve.delete(
          xt.key === null ? Ee : xt.key
        ), Z = y(
          xt,
          Z,
          Ee
        ), Le === null ? pe = xt : Le.sibling = xt, Le = xt);
      return e && ve.forEach(function(Yr) {
        return t(V, Yr);
      }), Ge && ca(V, Ee), pe;
    }
    function we(V, Z, $, se) {
      if ($ == null) throw Error(i(151));
      for (var pe = null, Le = null, ve = Z, Ee = Z = 0, xt = null, Ze = $.next(); ve !== null && !Ze.done; Ee++, Ze = $.next()) {
        ve.index > Ee ? (xt = ve, ve = null) : xt = ve.sibling;
        var Yr = K(V, ve, Ze.value, se);
        if (Yr === null) {
          ve === null && (ve = xt);
          break;
        }
        e && ve && Yr.alternate === null && t(V, ve), Z = y(Yr, Z, Ee), Le === null ? pe = Yr : Le.sibling = Yr, Le = Yr, ve = xt;
      }
      if (Ze.done)
        return a(V, ve), Ge && ca(V, Ee), pe;
      if (ve === null) {
        for (; !Ze.done; Ee++, Ze = $.next())
          Ze = ue(V, Ze.value, se), Ze !== null && (Z = y(Ze, Z, Ee), Le === null ? pe = Ze : Le.sibling = Ze, Le = Ze);
        return Ge && ca(V, Ee), pe;
      }
      for (ve = u(ve); !Ze.done; Ee++, Ze = $.next())
        Ze = W(ve, V, Ee, Ze.value, se), Ze !== null && (e && Ze.alternate !== null && ve.delete(Ze.key === null ? Ee : Ze.key), Z = y(Ze, Z, Ee), Le === null ? pe = Ze : Le.sibling = Ze, Le = Ze);
      return e && ve.forEach(function(y1) {
        return t(V, y1);
      }), Ge && ca(V, Ee), pe;
    }
    function Ke(V, Z, $, se) {
      if (typeof $ == "object" && $ !== null && $.type === h && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case _:
            e: {
              for (var pe = $.key; Z !== null; ) {
                if (Z.key === pe) {
                  if (pe = $.type, pe === h) {
                    if (Z.tag === 7) {
                      a(
                        V,
                        Z.sibling
                      ), se = d(
                        Z,
                        $.props.children
                      ), se.return = V, V = se;
                      break e;
                    }
                  } else if (Z.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === R && Jp(pe) === Z.type) {
                    a(
                      V,
                      Z.sibling
                    ), se = d(Z, $.props), ls(se, $), se.return = V, V = se;
                    break e;
                  }
                  a(V, Z);
                  break;
                } else t(V, Z);
                Z = Z.sibling;
              }
              $.type === h ? (se = oa(
                $.props.children,
                V.mode,
                se,
                $.key
              ), se.return = V, V = se) : (se = wu(
                $.type,
                $.key,
                $.props,
                null,
                V.mode,
                se
              ), ls(se, $), se.return = V, V = se);
            }
            return T(V);
          case S:
            e: {
              for (pe = $.key; Z !== null; ) {
                if (Z.key === pe)
                  if (Z.tag === 4 && Z.stateNode.containerInfo === $.containerInfo && Z.stateNode.implementation === $.implementation) {
                    a(
                      V,
                      Z.sibling
                    ), se = d(Z, $.children || []), se.return = V, V = se;
                    break e;
                  } else {
                    a(V, Z);
                    break;
                  }
                else t(V, Z);
                Z = Z.sibling;
              }
              se = uc($, V.mode, se), se.return = V, V = se;
            }
            return T(V);
          case R:
            return pe = $._init, $ = pe($._payload), Ke(
              V,
              Z,
              $,
              se
            );
        }
        if (J($))
          return Ce(
            V,
            Z,
            $,
            se
          );
        if (G($)) {
          if (pe = G($), typeof pe != "function") throw Error(i(150));
          return $ = pe.call($), we(
            V,
            Z,
            $,
            se
          );
        }
        if (typeof $.then == "function")
          return Ke(
            V,
            Z,
            Bu($),
            se
          );
        if ($.$$typeof === z)
          return Ke(
            V,
            Z,
            Au(V, $),
            se
          );
        Uu(V, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint" ? ($ = "" + $, Z !== null && Z.tag === 6 ? (a(V, Z.sibling), se = d(Z, $), se.return = V, V = se) : (a(V, Z), se = sc($, V.mode, se), se.return = V, V = se), T(V)) : a(V, Z);
    }
    return function(V, Z, $, se) {
      try {
        os = 0;
        var pe = Ke(
          V,
          Z,
          $,
          se
        );
        return si = null, pe;
      } catch (ve) {
        if (ve === Wi || ve === xu) throw ve;
        var Le = an(29, ve, null, V.mode);
        return Le.lanes = se, Le.return = V, Le;
      } finally {
      }
    };
  }
  var ui = Wp(!0), em = Wp(!1), Cn = H(null), qn = null;
  function Mr(e) {
    var t = e.alternate;
    oe(wt, wt.current & 1), oe(Cn, e), qn === null && (t === null || ni.current !== null || t.memoizedState !== null) && (qn = e);
  }
  function tm(e) {
    if (e.tag === 22) {
      if (oe(wt, wt.current), oe(Cn, e), qn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (qn = e);
      }
    } else Rr();
  }
  function Rr() {
    oe(wt, wt.current), oe(Cn, Cn.current);
  }
  function lr(e) {
    ne(Cn), qn === e && (qn = null), ne(wt);
  }
  var wt = H(0);
  function Hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Nd(a)))
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
  function Uc(e, t, a, u) {
    t = e.memoizedState, a = a(u, t), a = a == null ? t : g({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Hc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var u = ln(), d = xr(u);
      d.payload = t, a != null && (d.callback = a), t = Nr(e, d, u), t !== null && (cn(t, e, u), ts(t, e, u));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var u = ln(), d = xr(u);
      d.tag = 1, d.payload = t, a != null && (d.callback = a), t = Nr(e, d, u), t !== null && (cn(t, e, u), ts(t, e, u));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = ln(), u = xr(a);
      u.tag = 2, t != null && (u.callback = t), t = Nr(e, u, a), t !== null && (cn(t, e, a), ts(t, e, a));
    }
  };
  function nm(e, t, a, u, d, y, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, y, T) : t.prototype && t.prototype.isPureReactComponent ? !Vi(a, u) || !Vi(d, y) : !0;
  }
  function rm(e, t, a, u) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== e && Hc.enqueueReplaceState(t, t.state, null);
  }
  function va(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (e = e.defaultProps) {
      a === t && (a = g({}, a));
      for (var d in e)
        a[d] === void 0 && (a[d] = e[d]);
    }
    return a;
  }
  var qu = typeof reportError == "function" ? reportError : function(e) {
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
  function am(e) {
    qu(e);
  }
  function im(e) {
    console.error(e);
  }
  function sm(e) {
    qu(e);
  }
  function Zu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function um(e, t, a) {
    try {
      var u = e.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function qc(e, t, a) {
    return a = xr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Zu(e, t);
    }, a;
  }
  function om(e) {
    return e = xr(e), e.tag = 3, e;
  }
  function lm(e, t, a, u) {
    var d = a.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var y = u.value;
      e.payload = function() {
        return d(y);
      }, e.callback = function() {
        um(t, a, u);
      };
    }
    var T = a.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      um(t, a, u), typeof d != "function" && (Ir === null ? Ir = /* @__PURE__ */ new Set([this]) : Ir.add(this));
      var D = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function yb(e, t, a, u, d) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && Qi(
        t,
        a,
        d,
        !0
      ), a = Cn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return qn === null ? fd() : a.alternate === null && dt === 0 && (dt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = d, u === vc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), pd(e, u, d)), !1;
          case 22:
            return a.flags |= 65536, u === vc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), pd(e, u, d)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return pd(e, u, d), fd(), !1;
    }
    if (Ge)
      return t = Cn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, u !== cc && (e = Error(i(422), { cause: u }), Fi(bn(e, a)))) : (u !== cc && (t = Error(i(423), {
        cause: u
      }), Fi(
        bn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, u = bn(u, a), d = qc(
        e.stateNode,
        u,
        d
      ), bc(e, d), dt !== 4 && (dt = 2)), !1;
    var y = Error(i(520), { cause: u });
    if (y = bn(y, a), gs === null ? gs = [y] : gs.push(y), dt !== 4 && (dt = 2), t === null) return !0;
    u = bn(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = d & -d, a.lanes |= e, e = qc(a.stateNode, u, e), bc(a, e), !1;
        case 1:
          if (t = a.type, y = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Ir === null || !Ir.has(y))))
            return a.flags |= 65536, d &= -d, a.lanes |= d, d = om(d), lm(
              d,
              e,
              a,
              u
            ), bc(a, d), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cm = Error(i(461)), At = !1;
  function Mt(e, t, a, u) {
    t.child = e === null ? em(t, null, a, u) : ui(
      t,
      e.child,
      a,
      u
    );
  }
  function dm(e, t, a, u, d) {
    a = a.render;
    var y = t.ref;
    if ("ref" in u) {
      var T = {};
      for (var D in u)
        D !== "ref" && (T[D] = u[D]);
    } else T = u;
    return pa(t), u = kc(
      e,
      t,
      a,
      T,
      y,
      d
    ), D = Ac(), e !== null && !At ? (Tc(e, t, d), cr(e, t, d)) : (Ge && D && oc(t), t.flags |= 1, Mt(e, t, u, d), t.child);
  }
  function fm(e, t, a, u, d) {
    if (e === null) {
      var y = a.type;
      return typeof y == "function" && !ic(y) && y.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = y, hm(
        e,
        t,
        y,
        u,
        d
      )) : (e = wu(
        a.type,
        null,
        u,
        t,
        t.mode,
        d
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (y = e.child, !Qc(e, d)) {
      var T = y.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Vi, a(T, u) && e.ref === t.ref)
        return cr(e, t, d);
    }
    return t.flags |= 1, e = rr(y, u), e.ref = t.ref, e.return = t, t.child = e;
  }
  function hm(e, t, a, u, d) {
    if (e !== null) {
      var y = e.memoizedProps;
      if (Vi(y, u) && e.ref === t.ref)
        if (At = !1, t.pendingProps = u = y, Qc(e, d))
          (e.flags & 131072) !== 0 && (At = !0);
        else
          return t.lanes = e.lanes, cr(e, t, d);
    }
    return Zc(
      e,
      t,
      a,
      u,
      d
    );
  }
  function pm(e, t, a) {
    var u = t.pendingProps, d = u.children, y = e !== null ? e.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = y !== null ? y.baseLanes | a : a, e !== null) {
          for (d = t.child = e.child, y = 0; d !== null; )
            y = y | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = y & ~u;
        } else t.childLanes = 0, t.child = null;
        return mm(
          e,
          t,
          u,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Tu(
          t,
          y !== null ? y.cachePool : null
        ), y !== null ? hp(t, y) : wc(), tm(t);
      else
        return t.lanes = t.childLanes = 536870912, mm(
          e,
          t,
          y !== null ? y.baseLanes | a : a,
          a
        );
    } else
      y !== null ? (Tu(t, y.cachePool), hp(t, y), Rr(), t.memoizedState = null) : (e !== null && Tu(t, null), wc(), Rr());
    return Mt(e, t, d, a), t.child;
  }
  function mm(e, t, a, u) {
    var d = gc();
    return d = d === null ? null : { parent: St._currentValue, pool: d }, t.memoizedState = {
      baseLanes: a,
      cachePool: d
    }, e !== null && Tu(t, null), wc(), tm(t), e !== null && Qi(e, t, u, !0), null;
  }
  function Gu(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Zc(e, t, a, u, d) {
    return pa(t), a = kc(
      e,
      t,
      a,
      u,
      void 0,
      d
    ), u = Ac(), e !== null && !At ? (Tc(e, t, d), cr(e, t, d)) : (Ge && u && oc(t), t.flags |= 1, Mt(e, t, a, d), t.child);
  }
  function gm(e, t, a, u, d, y) {
    return pa(t), t.updateQueue = null, a = mp(
      t,
      u,
      a,
      d
    ), pp(e), u = Ac(), e !== null && !At ? (Tc(e, t, y), cr(e, t, y)) : (Ge && u && oc(t), t.flags |= 1, Mt(e, t, a, y), t.child);
  }
  function vm(e, t, a, u, d) {
    if (pa(t), t.stateNode === null) {
      var y = Ka, T = a.contextType;
      typeof T == "object" && T !== null && (y = Pt(T)), y = new a(u, y), t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = Hc, t.stateNode = y, y._reactInternals = t, y = t.stateNode, y.props = u, y.state = t.memoizedState, y.refs = {}, yc(t), T = a.contextType, y.context = typeof T == "object" && T !== null ? Pt(T) : Ka, y.state = t.memoizedState, T = a.getDerivedStateFromProps, typeof T == "function" && (Uc(
        t,
        a,
        T,
        u
      ), y.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (T = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), T !== y.state && Hc.enqueueReplaceState(y, y.state, null), rs(t, u, y, d), ns(), y.state = t.memoizedState), typeof y.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (e === null) {
      y = t.stateNode;
      var D = t.memoizedProps, U = va(a, D);
      y.props = U;
      var F = y.context, ae = a.contextType;
      T = Ka, typeof ae == "object" && ae !== null && (T = Pt(ae));
      var ue = a.getDerivedStateFromProps;
      ae = typeof ue == "function" || typeof y.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, ae || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (D || F !== T) && rm(
        t,
        y,
        u,
        T
      ), Tr = !1;
      var K = t.memoizedState;
      y.state = K, rs(t, u, y, d), ns(), F = t.memoizedState, D || K !== F || Tr ? (typeof ue == "function" && (Uc(
        t,
        a,
        ue,
        u
      ), F = t.memoizedState), (U = Tr || nm(
        t,
        a,
        U,
        u,
        K,
        F,
        T
      )) ? (ae || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = F), y.props = u, y.state = F, y.context = T, u = U) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      y = t.stateNode, _c(e, t), T = t.memoizedProps, ae = va(a, T), y.props = ae, ue = t.pendingProps, K = y.context, F = a.contextType, U = Ka, typeof F == "object" && F !== null && (U = Pt(F)), D = a.getDerivedStateFromProps, (F = typeof D == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (T !== ue || K !== U) && rm(
        t,
        y,
        u,
        U
      ), Tr = !1, K = t.memoizedState, y.state = K, rs(t, u, y, d), ns();
      var W = t.memoizedState;
      T !== ue || K !== W || Tr || e !== null && e.dependencies !== null && ku(e.dependencies) ? (typeof D == "function" && (Uc(
        t,
        a,
        D,
        u
      ), W = t.memoizedState), (ae = Tr || nm(
        t,
        a,
        ae,
        u,
        K,
        W,
        U
      ) || e !== null && e.dependencies !== null && ku(e.dependencies)) ? (F || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(u, W, U), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
        u,
        W,
        U
      )), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || T === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = W), y.props = u, y.state = W, y.context = U, u = ae) : (typeof y.componentDidUpdate != "function" || T === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), u = !1);
    }
    return y = u, Gu(e, t), u = (t.flags & 128) !== 0, y || u ? (y = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : y.render(), t.flags |= 1, e !== null && u ? (t.child = ui(
      t,
      e.child,
      null,
      d
    ), t.child = ui(
      t,
      null,
      a,
      d
    )) : Mt(e, t, a, d), t.memoizedState = y.state, e = t.child) : e = cr(
      e,
      t,
      d
    ), e;
  }
  function ym(e, t, a, u) {
    return Xi(), t.flags |= 256, Mt(e, t, a, u), t.child;
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vc(e) {
    return { baseLanes: e, cachePool: ip() };
  }
  function Yc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= kn), e;
  }
  function _m(e, t, a) {
    var u = t.pendingProps, d = !1, y = (t.flags & 128) !== 0, T;
    if ((T = y) || (T = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), T && (d = !0, t.flags &= -129), T = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ge) {
        if (d ? Mr(t) : Rr(), Ge) {
          var D = ct, U;
          if (U = D) {
            e: {
              for (U = D, D = Hn; U.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (U = jn(
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
              treeContext: la !== null ? { id: ar, overflow: ir } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, U = an(
              18,
              null,
              null,
              0
            ), U.stateNode = D, U.return = t, t.child = U, Gt = t, ct = null, U = !0) : U = !1;
          }
          U || fa(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Nd(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        lr(t);
      }
      return D = u.children, u = u.fallback, d ? (Rr(), d = t.mode, D = Vu(
        { mode: "hidden", children: D },
        d
      ), u = oa(
        u,
        d,
        a,
        null
      ), D.return = t, u.return = t, D.sibling = u, t.child = D, d = t.child, d.memoizedState = Vc(a), d.childLanes = Yc(
        e,
        T,
        a
      ), t.memoizedState = Gc, u) : (Mr(t), $c(t, D));
    }
    if (U = e.memoizedState, U !== null && (D = U.dehydrated, D !== null)) {
      if (y)
        t.flags & 256 ? (Mr(t), t.flags &= -257, t = Xc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Rr(), t.child = e.child, t.flags |= 128, t = null) : (Rr(), d = u.fallback, D = t.mode, u = Vu(
          { mode: "visible", children: u.children },
          D
        ), d = oa(
          d,
          D,
          a,
          null
        ), d.flags |= 2, u.return = t, d.return = t, u.sibling = d, t.child = u, ui(
          t,
          e.child,
          null,
          a
        ), u = t.child, u.memoizedState = Vc(a), u.childLanes = Yc(
          e,
          T,
          a
        ), t.memoizedState = Gc, t = d);
      else if (Mr(t), Nd(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var F = T.dgst;
        T = F, u = Error(i(419)), u.stack = "", u.digest = T, Fi({ value: u, source: null, stack: null }), t = Xc(
          e,
          t,
          a
        );
      } else if (At || Qi(e, t, a, !1), T = (a & e.childLanes) !== 0, At || T) {
        if (T = et, T !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Ol(u), u = (u & (T.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== U.retryLane))
          throw U.retryLane = u, Qa(e, u), cn(T, e, u), cm;
        D.data === "$?" || fd(), t = Xc(
          e,
          t,
          a
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, ct = jn(
          D.nextSibling
        ), Gt = t, Ge = !0, da = null, Hn = !1, e !== null && (wn[En++] = ar, wn[En++] = ir, wn[En++] = la, ar = e.id, ir = e.overflow, la = t), t = $c(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return d ? (Rr(), d = u.fallback, D = t.mode, U = e.child, F = U.sibling, u = rr(U, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = U.subtreeFlags & 65011712, F !== null ? d = rr(F, d) : (d = oa(
      d,
      D,
      a,
      null
    ), d.flags |= 2), d.return = t, u.return = t, u.sibling = d, t.child = u, u = d, d = t.child, D = e.child.memoizedState, D === null ? D = Vc(a) : (U = D.cachePool, U !== null ? (F = St._currentValue, U = U.parent !== F ? { parent: F, pool: F } : U) : U = ip(), D = {
      baseLanes: D.baseLanes | a,
      cachePool: U
    }), d.memoizedState = D, d.childLanes = Yc(
      e,
      T,
      a
    ), t.memoizedState = Gc, u) : (Mr(t), a = e.child, e = a.sibling, a = rr(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, e !== null && (T = t.deletions, T === null ? (t.deletions = [e], t.flags |= 16) : T.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function $c(e, t) {
    return t = Vu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Vu(e, t) {
    return e = an(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Xc(e, t, a) {
    return ui(t, e.child, null, a), e = $c(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function bm(e, t, a) {
    e.lanes |= t;
    var u = e.alternate;
    u !== null && (u.lanes |= t), fc(e.return, t, a);
  }
  function Fc(e, t, a, u, d) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: d
    } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = u, y.tail = a, y.tailMode = d);
  }
  function Sm(e, t, a) {
    var u = t.pendingProps, d = u.revealOrder, y = u.tail;
    if (Mt(e, t, u.children, a), u = wt.current, (u & 2) !== 0)
      u = u & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && bm(e, a, t);
          else if (e.tag === 19)
            bm(e, a, t);
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
      u &= 1;
    }
    switch (oe(wt, u), d) {
      case "forwards":
        for (a = t.child, d = null; a !== null; )
          e = a.alternate, e !== null && Hu(e) === null && (d = a), a = a.sibling;
        a = d, a === null ? (d = t.child, t.child = null) : (d = a.sibling, a.sibling = null), Fc(
          t,
          !1,
          d,
          a,
          y
        );
        break;
      case "backwards":
        for (a = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Hu(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = a, a = d, d = e;
        }
        Fc(
          t,
          !0,
          a,
          null,
          y
        );
        break;
      case "together":
        Fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function cr(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Qi(
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
      for (e = t.child, a = rr(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = rr(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Qc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ku(e)));
  }
  function _b(e, t, a) {
    switch (t.tag) {
      case 3:
        le(t, t.stateNode.containerInfo), Ar(t, St, e.memoizedState.cache), Xi();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        le(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ar(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (Mr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? _m(e, t, a) : (Mr(t), e = cr(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Mr(t);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (Qi(
          e,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), d) {
          if (u)
            return Sm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), oe(wt, wt.current), u) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, pm(e, t, a);
      case 24:
        Ar(t, St, e.memoizedState.cache);
    }
    return cr(e, t, a);
  }
  function wm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        At = !0;
      else {
        if (!Qc(e, a) && (t.flags & 128) === 0)
          return At = !1, _b(
            e,
            t,
            a
          );
        At = (e.flags & 131072) !== 0;
      }
    else
      At = !1, Ge && (t.flags & 1048576) !== 0 && Jh(t, Cu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var u = t.elementType, d = u._init;
          if (u = d(u._payload), t.type = u, typeof u == "function")
            ic(u) ? (e = va(u, e), t.tag = 1, t = vm(
              null,
              t,
              u,
              e,
              a
            )) : (t.tag = 0, t = Zc(
              null,
              t,
              u,
              e,
              a
            ));
          else {
            if (u != null) {
              if (d = u.$$typeof, d === l) {
                t.tag = 11, t = dm(
                  null,
                  t,
                  u,
                  e,
                  a
                );
                break e;
              } else if (d === k) {
                t.tag = 14, t = fm(
                  null,
                  t,
                  u,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = Y(u) || u, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, d = va(
          u,
          t.pendingProps
        ), vm(
          e,
          t,
          u,
          d,
          a
        );
      case 3:
        e: {
          if (le(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          u = t.pendingProps;
          var y = t.memoizedState;
          d = y.element, _c(e, t), rs(t, u, null, a);
          var T = t.memoizedState;
          if (u = T.cache, Ar(t, St, u), u !== y.cache && hc(
            t,
            [St],
            a,
            !0
          ), ns(), u = T.element, y.isDehydrated)
            if (y = {
              element: u,
              isDehydrated: !1,
              cache: T.cache
            }, t.updateQueue.baseState = y, t.memoizedState = y, t.flags & 256) {
              t = ym(
                e,
                t,
                u,
                a
              );
              break e;
            } else if (u !== d) {
              d = bn(
                Error(i(424)),
                t
              ), Fi(d), t = ym(
                e,
                t,
                u,
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
              for (ct = jn(e.firstChild), Gt = t, Ge = !0, da = null, Hn = !0, a = em(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Xi(), u === d) {
              t = cr(
                e,
                t,
                a
              );
              break e;
            }
            Mt(
              e,
              t,
              u,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Gu(e, t), e === null ? (a = Ag(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ge || (a = t.type, e = t.pendingProps, u = io(
          te.current
        ).createElement(a), u[Lt] = t, u[Xt] = e, jt(u, a, e), kt(u), t.stateNode = u) : t.memoizedState = Ag(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(t), e === null && Ge && (u = t.stateNode = Eg(
          t.type,
          t.pendingProps,
          te.current
        ), Gt = t, Hn = !0, d = ct, Hr(t.type) ? (Od = d, ct = jn(
          u.firstChild
        )) : ct = d), Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Gu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ge && ((d = u = ct) && (u = $b(
          u,
          t.type,
          t.pendingProps,
          Hn
        ), u !== null ? (t.stateNode = u, Gt = t, ct = jn(
          u.firstChild
        ), Hn = !1, d = !0) : d = !1), d || fa(t)), Re(t), d = t.type, y = t.pendingProps, T = e !== null ? e.memoizedProps : null, u = y.children, Ad(d, y) ? u = null : T !== null && Ad(d, T) && (t.flags |= 32), t.memoizedState !== null && (d = kc(
          e,
          t,
          db,
          null,
          null,
          a
        ), ks._currentValue = d), Gu(e, t), Mt(e, t, u, a), t.child;
      case 6:
        return e === null && Ge && ((e = a = ct) && (a = Xb(
          a,
          t.pendingProps,
          Hn
        ), a !== null ? (t.stateNode = a, Gt = t, ct = null, e = !0) : e = !1), e || fa(t)), null;
      case 13:
        return _m(e, t, a);
      case 4:
        return le(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, e === null ? t.child = ui(
          t,
          null,
          u,
          a
        ) : Mt(
          e,
          t,
          u,
          a
        ), t.child;
      case 11:
        return dm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Mt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, Ar(t, t.type, u.value), Mt(
          e,
          t,
          u.children,
          a
        ), t.child;
      case 9:
        return d = t.type._context, u = t.pendingProps.children, pa(t), d = Pt(d), u = u(d), t.flags |= 1, Mt(e, t, u, a), t.child;
      case 14:
        return fm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return hm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Sm(e, t, a);
      case 31:
        return u = t.pendingProps, a = t.mode, u = {
          mode: u.mode,
          children: u.children
        }, e === null ? (a = Vu(
          u,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = rr(e.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return pm(e, t, a);
      case 24:
        return pa(t), u = Pt(St), e === null ? (d = gc(), d === null && (d = et, y = pc(), d.pooledCache = y, y.refCount++, y !== null && (d.pooledCacheLanes |= a), d = y), t.memoizedState = {
          parent: u,
          cache: d
        }, yc(t), Ar(t, St, d)) : ((e.lanes & a) !== 0 && (_c(e, t), rs(t, null, null, a), ns()), d = e.memoizedState, y = t.memoizedState, d.parent !== u ? (d = { parent: u, cache: u }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Ar(t, St, u)) : (u = y.cache, Ar(t, St, u), u !== d.cache && hc(
          t,
          [St],
          a,
          !0
        ))), Mt(
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
  function dr(e) {
    e.flags |= 4;
  }
  function Em(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Mg(t)) {
      if (t = Cn.current, t !== null && ((qe & 4194048) === qe ? qn !== null : (qe & 62914560) !== qe && (qe & 536870912) === 0 || t !== qn))
        throw es = vc, sp;
      e.flags |= 8192;
    }
  }
  function Yu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? th() : 536870912, e.lanes |= t, di |= t);
  }
  function cs(e, t) {
    if (!Ge)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
      }
  }
  function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, u = 0;
    if (t)
      for (var d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, u |= d.subtreeFlags & 65011712, u |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= u, e.childLanes = a, t;
  }
  function bb(e, t, a) {
    var u = t.pendingProps;
    switch (lc(t), t.tag) {
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
        return st(t), null;
      case 1:
        return st(t), null;
      case 3:
        return a = t.stateNode, u = null, e !== null && (u = e.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ur(St), he(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && ($i(t) ? dr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, tp())), st(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (dr(t), a !== null ? (st(t), Em(t, a)) : (st(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (dr(t), st(t), Em(t, a)) : (st(t), t.flags &= -16777217) : (e.memoizedProps !== u && dr(t), st(t), t.flags &= -16777217), null;
      case 27:
        be(t), a = te.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== u && dr(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(i(166));
            return st(t), null;
          }
          e = q.current, $i(t) ? Wh(t) : (e = Eg(d, u, a), t.stateNode = e, dr(t));
        }
        return st(t), null;
      case 5:
        if (be(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== u && dr(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(i(166));
            return st(t), null;
          }
          if (e = q.current, $i(t))
            Wh(t);
          else {
            switch (d = io(
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
                    e = typeof u.is == "string" ? d.createElement("select", { is: u.is }) : d.createElement("select"), u.multiple ? e.multiple = !0 : u.size && (e.size = u.size);
                    break;
                  default:
                    e = typeof u.is == "string" ? d.createElement(a, { is: u.is }) : d.createElement(a);
                }
            }
            e[Lt] = t, e[Xt] = u;
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
            e: switch (jt(e, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!u.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && dr(t);
          }
        }
        return st(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== u && dr(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(i(166));
          if (e = te.current, $i(t)) {
            if (e = t.stateNode, a = t.memoizedProps, u = null, d = Gt, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  u = d.memoizedProps;
              }
            e[Lt] = t, e = !!(e.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || gg(e.nodeValue, a)), e || fa(t);
          } else
            e = io(e).createTextNode(
              u
            ), e[Lt] = t, t.stateNode = e;
        }
        return st(t), null;
      case 13:
        if (u = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = $i(t), u !== null && u.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[Lt] = t;
            } else
              Xi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            st(t), d = !1;
          } else
            d = tp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (lr(t), t) : (lr(t), null);
        }
        if (lr(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = u !== null, e = e !== null && e.memoizedState !== null, a) {
          u = t.child, d = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (d = u.alternate.memoizedState.cachePool.pool);
          var y = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (y = u.memoizedState.cachePool.pool), y !== d && (u.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Yu(t, t.updateQueue), st(t), null;
      case 4:
        return he(), e === null && Sd(t.stateNode.containerInfo), st(t), null;
      case 10:
        return ur(t.type), st(t), null;
      case 19:
        if (ne(wt), d = t.memoizedState, d === null) return st(t), null;
        if (u = (t.flags & 128) !== 0, y = d.rendering, y === null)
          if (u) cs(d, !1);
          else {
            if (dt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (y = Hu(e), y !== null) {
                  for (t.flags |= 128, cs(d, !1), e = y.updateQueue, t.updateQueue = e, Yu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Kh(a, e), a = a.sibling;
                  return oe(
                    wt,
                    wt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && lt() > Fu && (t.flags |= 128, u = !0, cs(d, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Hu(y), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Yu(t, e), cs(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !Ge)
                return st(t), null;
            } else
              2 * lt() - d.renderingStartTime > Fu && a !== 536870912 && (t.flags |= 128, u = !0, cs(d, !1), t.lanes = 4194304);
          d.isBackwards ? (y.sibling = t.child, t.child = y) : (e = d.last, e !== null ? e.sibling = y : t.child = y, d.last = y);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = lt(), t.sibling = null, e = wt.current, oe(wt, u ? e & 1 | 2 : e & 1), t) : (st(t), null);
      case 22:
      case 23:
        return lr(t), Ec(), u = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : st(t), a = t.updateQueue, a !== null && Yu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), e !== null && ne(ma), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ur(St), st(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Sb(e, t) {
    switch (lc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(St), he(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (lr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(i(340));
          Xi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ne(wt), null;
      case 4:
        return he(), null;
      case 10:
        return ur(t.type), null;
      case 22:
      case 23:
        return lr(t), Ec(), e !== null && ne(ma), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ur(St), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cm(e, t) {
    switch (lc(t), t.tag) {
      case 3:
        ur(St), he();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        he();
        break;
      case 13:
        lr(t);
        break;
      case 19:
        ne(wt);
        break;
      case 10:
        ur(t.type);
        break;
      case 22:
      case 23:
        lr(t), Ec(), e !== null && ne(ma);
        break;
      case 24:
        ur(St);
    }
  }
  function ds(e, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        a = d;
        do {
          if ((a.tag & e) === e) {
            u = void 0;
            var y = a.create, T = a.inst;
            u = y(), T.destroy = u;
          }
          a = a.next;
        } while (a !== d);
      }
    } catch (D) {
      We(t, t.return, D);
    }
  }
  function jr(e, t, a) {
    try {
      var u = t.updateQueue, d = u !== null ? u.lastEffect : null;
      if (d !== null) {
        var y = d.next;
        u = y;
        do {
          if ((u.tag & e) === e) {
            var T = u.inst, D = T.destroy;
            if (D !== void 0) {
              T.destroy = void 0, d = t;
              var U = a, F = D;
              try {
                F();
              } catch (ae) {
                We(
                  d,
                  U,
                  ae
                );
              }
            }
          }
          u = u.next;
        } while (u !== y);
      }
    } catch (ae) {
      We(t, t.return, ae);
    }
  }
  function km(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        fp(t, a);
      } catch (u) {
        We(e, e.return, u);
      }
    }
  }
  function Am(e, t, a) {
    a.props = va(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      We(e, t, u);
    }
  }
  function fs(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = e.stateNode;
            break;
          case 30:
            u = e.stateNode;
            break;
          default:
            u = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(u) : a.current = u;
      }
    } catch (d) {
      We(e, t, d);
    }
  }
  function Zn(e, t) {
    var a = e.ref, u = e.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (d) {
          We(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (d) {
          We(e, t, d);
        }
      else a.current = null;
  }
  function Tm(e) {
    var t = e.type, a = e.memoizedProps, u = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break e;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (d) {
      We(e, e.return, d);
    }
  }
  function Kc(e, t, a) {
    try {
      var u = e.stateNode;
      qb(u, e.type, a, t), u[Xt] = t;
    } catch (d) {
      We(e, e.return, d);
    }
  }
  function xm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hr(e.type) || e.tag === 4;
  }
  function Jc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wc(e, t, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ao));
    else if (u !== 4 && (u === 27 && Hr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Wc(e, t, a), e = e.sibling; e !== null; )
        Wc(e, t, a), e = e.sibling;
  }
  function $u(e, t, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (u !== 4 && (u === 27 && Hr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($u(e, t, a), e = e.sibling; e !== null; )
        $u(e, t, a), e = e.sibling;
  }
  function Nm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var u = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      jt(t, u, a), t[Lt] = e, t[Xt] = a;
    } catch (y) {
      We(e, e.return, y);
    }
  }
  var fr = !1, mt = !1, ed = !1, Om = typeof WeakSet == "function" ? WeakSet : Set, Tt = null;
  function wb(e, t) {
    if (e = e.containerInfo, Cd = fo, e = Hh(e), Jl(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var d = u.anchorOffset, y = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, y.nodeType;
            } catch {
              a = null;
              break e;
            }
            var T = 0, D = -1, U = -1, F = 0, ae = 0, ue = e, K = null;
            t: for (; ; ) {
              for (var W; ue !== a || d !== 0 && ue.nodeType !== 3 || (D = T + d), ue !== y || u !== 0 && ue.nodeType !== 3 || (U = T + u), ue.nodeType === 3 && (T += ue.nodeValue.length), (W = ue.firstChild) !== null; )
                K = ue, ue = W;
              for (; ; ) {
                if (ue === e) break t;
                if (K === a && ++F === d && (D = T), K === y && ++ae === u && (U = T), (W = ue.nextSibling) !== null) break;
                ue = K, K = ue.parentNode;
              }
              ue = W;
            }
            a = D === -1 || U === -1 ? null : { start: D, end: U };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (kd = { focusedElem: e, selectionRange: a }, fo = !1, Tt = t; Tt !== null; )
      if (t = Tt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Tt = e;
      else
        for (; Tt !== null; ) {
          switch (t = Tt, y = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && y !== null) {
                e = void 0, a = t, d = y.memoizedProps, y = y.memoizedState, u = a.stateNode;
                try {
                  var Ce = va(
                    a.type,
                    d,
                    a.elementType === a.type
                  );
                  e = u.getSnapshotBeforeUpdate(
                    Ce,
                    y
                  ), u.__reactInternalSnapshotBeforeUpdate = e;
                } catch (we) {
                  We(
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
                  xd(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xd(e);
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
            e.return = t.return, Tt = e;
            break;
          }
          Tt = t.return;
        }
  }
  function Mm(e, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Dr(e, a), u & 4 && ds(5, a);
        break;
      case 1:
        if (Dr(e, a), u & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (T) {
              We(a, a.return, T);
            }
          else {
            var d = va(
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
              We(
                a,
                a.return,
                T
              );
            }
          }
        u & 64 && km(a), u & 512 && fs(a, a.return);
        break;
      case 3:
        if (Dr(e, a), u & 64 && (e = a.updateQueue, e !== null)) {
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
            fp(e, t);
          } catch (T) {
            We(a, a.return, T);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Nm(a);
      case 26:
      case 5:
        Dr(e, a), t === null && u & 4 && Tm(a), u & 512 && fs(a, a.return);
        break;
      case 12:
        Dr(e, a);
        break;
      case 13:
        Dr(e, a), u & 4 && Dm(e, a), u & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Mb.bind(
          null,
          a
        ), Fb(e, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || fr, !u) {
          t = t !== null && t.memoizedState !== null || mt, d = fr;
          var y = mt;
          fr = u, (mt = t) && !y ? zr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Dr(e, a), fr = d, mt = y;
        }
        break;
      case 30:
        break;
      default:
        Dr(e, a);
    }
  }
  function Rm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && jl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var rt = null, Kt = !1;
  function hr(e, t, a) {
    for (a = a.child; a !== null; )
      jm(e, t, a), a = a.sibling;
  }
  function jm(e, t, a) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(Wn, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        mt || Zn(a, t), hr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        mt || Zn(a, t);
        var u = rt, d = Kt;
        Hr(a.type) && (rt = a.stateNode, Kt = !1), hr(
          e,
          t,
          a
        ), Ss(a.stateNode), rt = u, Kt = d;
        break;
      case 5:
        mt || Zn(a, t);
      case 6:
        if (u = rt, d = Kt, rt = null, hr(
          e,
          t,
          a
        ), rt = u, Kt = d, rt !== null)
          if (Kt)
            try {
              (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(a.stateNode);
            } catch (y) {
              We(
                a,
                t,
                y
              );
            }
          else
            try {
              rt.removeChild(a.stateNode);
            } catch (y) {
              We(
                a,
                t,
                y
              );
            }
        break;
      case 18:
        rt !== null && (Kt ? (e = rt, Sg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Ns(e)) : Sg(rt, a.stateNode));
        break;
      case 4:
        u = rt, d = Kt, rt = a.stateNode.containerInfo, Kt = !0, hr(
          e,
          t,
          a
        ), rt = u, Kt = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        mt || jr(2, a, t), mt || jr(4, a, t), hr(
          e,
          t,
          a
        );
        break;
      case 1:
        mt || (Zn(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Am(
          a,
          t,
          u
        )), hr(
          e,
          t,
          a
        );
        break;
      case 21:
        hr(
          e,
          t,
          a
        );
        break;
      case 22:
        mt = (u = mt) || a.memoizedState !== null, hr(
          e,
          t,
          a
        ), mt = u;
        break;
      default:
        hr(
          e,
          t,
          a
        );
    }
  }
  function Dm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ns(e);
      } catch (a) {
        We(t, t.return, a);
      }
  }
  function Eb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Om()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Om()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function td(e, t) {
    var a = Eb(e);
    t.forEach(function(u) {
      var d = Rb.bind(null, e, u);
      a.has(u) || (a.add(u), u.then(d, d));
    });
  }
  function sn(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var d = a[u], y = e, T = t, D = T;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Hr(D.type)) {
                rt = D.stateNode, Kt = !1;
                break e;
              }
              break;
            case 5:
              rt = D.stateNode, Kt = !1;
              break e;
            case 3:
            case 4:
              rt = D.stateNode.containerInfo, Kt = !0;
              break e;
          }
          D = D.return;
        }
        if (rt === null) throw Error(i(160));
        jm(y, T, d), rt = null, Kt = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        zm(t, e), t = t.sibling;
  }
  var Rn = null;
  function zm(e, t) {
    var a = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        sn(t, e), un(e), u & 4 && (jr(3, e, e.return), ds(3, e), jr(5, e, e.return));
        break;
      case 1:
        sn(t, e), un(e), u & 512 && (mt || a === null || Zn(a, a.return)), u & 64 && fr && (e = e.updateQueue, e !== null && (u = e.callbacks, u !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var d = Rn;
        if (sn(t, e), un(e), u & 512 && (mt || a === null || Zn(a, a.return)), u & 4) {
          var y = a !== null ? a.memoizedState : null;
          if (u = e.memoizedState, a === null)
            if (u === null)
              if (e.stateNode === null) {
                e: {
                  u = e.type, a = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (u) {
                    case "title":
                      y = d.getElementsByTagName("title")[0], (!y || y[Li] || y[Lt] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = d.createElement(u), d.head.insertBefore(
                        y,
                        d.querySelector("head > title")
                      )), jt(y, u, a), y[Lt] = e, kt(y), u = y;
                      break e;
                    case "link":
                      var T = Ng(
                        "link",
                        "href",
                        d
                      ).get(u + (a.href || ""));
                      if (T) {
                        for (var D = 0; D < T.length; D++)
                          if (y = T[D], y.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && y.getAttribute("rel") === (a.rel == null ? null : a.rel) && y.getAttribute("title") === (a.title == null ? null : a.title) && y.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      y = d.createElement(u), jt(y, u, a), d.head.appendChild(y);
                      break;
                    case "meta":
                      if (T = Ng(
                        "meta",
                        "content",
                        d
                      ).get(u + (a.content || ""))) {
                        for (D = 0; D < T.length; D++)
                          if (y = T[D], y.getAttribute("content") === (a.content == null ? null : "" + a.content) && y.getAttribute("name") === (a.name == null ? null : a.name) && y.getAttribute("property") === (a.property == null ? null : a.property) && y.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && y.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      y = d.createElement(u), jt(y, u, a), d.head.appendChild(y);
                      break;
                    default:
                      throw Error(i(468, u));
                  }
                  y[Lt] = e, kt(y), u = y;
                }
                e.stateNode = u;
              } else
                Og(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = xg(
                d,
                u,
                e.memoizedProps
              );
          else
            y !== u ? (y === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : y.count--, u === null ? Og(
              d,
              e.type,
              e.stateNode
            ) : xg(
              d,
              u,
              e.memoizedProps
            )) : u === null && e.stateNode !== null && Kc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        sn(t, e), un(e), u & 512 && (mt || a === null || Zn(a, a.return)), a !== null && u & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (sn(t, e), un(e), u & 512 && (mt || a === null || Zn(a, a.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Za(d, "");
          } catch (W) {
            We(e, e.return, W);
          }
        }
        u & 4 && e.stateNode != null && (d = e.memoizedProps, Kc(
          e,
          d,
          a !== null ? a.memoizedProps : d
        )), u & 1024 && (ed = !0);
        break;
      case 6:
        if (sn(t, e), un(e), u & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          u = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = u;
          } catch (W) {
            We(e, e.return, W);
          }
        }
        break;
      case 3:
        if (oo = null, d = Rn, Rn = so(t.containerInfo), sn(t, e), Rn = d, un(e), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ns(t.containerInfo);
          } catch (W) {
            We(e, e.return, W);
          }
        ed && (ed = !1, Lm(e));
        break;
      case 4:
        u = Rn, Rn = so(
          e.stateNode.containerInfo
        ), sn(t, e), un(e), Rn = u;
        break;
      case 12:
        sn(t, e), un(e);
        break;
      case 13:
        sn(t, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ud = lt()), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, td(e, u)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var U = a !== null && a.memoizedState !== null, F = fr, ae = mt;
        if (fr = F || d, mt = ae || U, sn(t, e), mt = ae, fr = F, un(e), u & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (a === null || U || fr || mt || ya(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                U = a = t;
                try {
                  if (y = U.stateNode, d)
                    T = y.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                  else {
                    D = U.stateNode;
                    var ue = U.memoizedProps.style, K = ue != null && ue.hasOwnProperty("display") ? ue.display : null;
                    D.style.display = K == null || typeof K == "boolean" ? "" : ("" + K).trim();
                  }
                } catch (W) {
                  We(U, U.return, W);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = d ? "" : U.memoizedProps;
                } catch (W) {
                  We(U, U.return, W);
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
        u & 4 && (u = e.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, td(e, a))));
        break;
      case 19:
        sn(t, e), un(e), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, td(e, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        sn(t, e), un(e);
    }
  }
  function un(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, u = e.return; u !== null; ) {
          if (xm(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var d = a.stateNode, y = Jc(e);
            $u(e, y, d);
            break;
          case 5:
            var T = a.stateNode;
            a.flags & 32 && (Za(T, ""), a.flags &= -33);
            var D = Jc(e);
            $u(e, D, T);
            break;
          case 3:
          case 4:
            var U = a.stateNode.containerInfo, F = Jc(e);
            Wc(
              e,
              F,
              U
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (ae) {
        We(e, e.return, ae);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Lm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Dr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Mm(e, t.alternate, t), t = t.sibling;
  }
  function ya(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jr(4, t, t.return), ya(t);
          break;
        case 1:
          Zn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Am(
            t,
            t.return,
            a
          ), ya(t);
          break;
        case 27:
          Ss(t.stateNode);
        case 26:
        case 5:
          Zn(t, t.return), ya(t);
          break;
        case 22:
          t.memoizedState === null && ya(t);
          break;
        case 30:
          ya(t);
          break;
        default:
          ya(t);
      }
      e = e.sibling;
    }
  }
  function zr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, d = e, y = t, T = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          zr(
            d,
            y,
            a
          ), ds(4, y);
          break;
        case 1:
          if (zr(
            d,
            y,
            a
          ), u = y, d = u.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (F) {
              We(u, u.return, F);
            }
          if (u = y, d = u.updateQueue, d !== null) {
            var D = u.stateNode;
            try {
              var U = d.shared.hiddenCallbacks;
              if (U !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < U.length; d++)
                  dp(U[d], D);
            } catch (F) {
              We(u, u.return, F);
            }
          }
          a && T & 64 && km(y), fs(y, y.return);
          break;
        case 27:
          Nm(y);
        case 26:
        case 5:
          zr(
            d,
            y,
            a
          ), a && u === null && T & 4 && Tm(y), fs(y, y.return);
          break;
        case 12:
          zr(
            d,
            y,
            a
          );
          break;
        case 13:
          zr(
            d,
            y,
            a
          ), a && T & 4 && Dm(d, y);
          break;
        case 22:
          y.memoizedState === null && zr(
            d,
            y,
            a
          ), fs(y, y.return);
          break;
        case 30:
          break;
        default:
          zr(
            d,
            y,
            a
          );
      }
      t = t.sibling;
    }
  }
  function nd(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ki(a));
  }
  function rd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ki(e));
  }
  function Gn(e, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Pm(
          e,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function Pm(e, t, a, u) {
    var d = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gn(
          e,
          t,
          a,
          u
        ), d & 2048 && ds(9, t);
        break;
      case 1:
        Gn(
          e,
          t,
          a,
          u
        );
        break;
      case 3:
        Gn(
          e,
          t,
          a,
          u
        ), d & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ki(e)));
        break;
      case 12:
        if (d & 2048) {
          Gn(
            e,
            t,
            a,
            u
          ), e = t.stateNode;
          try {
            var y = t.memoizedProps, T = y.id, D = y.onPostCommit;
            typeof D == "function" && D(
              T,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (U) {
            We(t, t.return, U);
          }
        } else
          Gn(
            e,
            t,
            a,
            u
          );
        break;
      case 13:
        Gn(
          e,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        y = t.stateNode, T = t.alternate, t.memoizedState !== null ? y._visibility & 2 ? Gn(
          e,
          t,
          a,
          u
        ) : hs(e, t) : y._visibility & 2 ? Gn(
          e,
          t,
          a,
          u
        ) : (y._visibility |= 2, oi(
          e,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && nd(T, t);
        break;
      case 24:
        Gn(
          e,
          t,
          a,
          u
        ), d & 2048 && rd(t.alternate, t);
        break;
      default:
        Gn(
          e,
          t,
          a,
          u
        );
    }
  }
  function oi(e, t, a, u, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var y = e, T = t, D = a, U = u, F = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          oi(
            y,
            T,
            D,
            U,
            d
          ), ds(8, T);
          break;
        case 23:
          break;
        case 22:
          var ae = T.stateNode;
          T.memoizedState !== null ? ae._visibility & 2 ? oi(
            y,
            T,
            D,
            U,
            d
          ) : hs(
            y,
            T
          ) : (ae._visibility |= 2, oi(
            y,
            T,
            D,
            U,
            d
          )), d && F & 2048 && nd(
            T.alternate,
            T
          );
          break;
        case 24:
          oi(
            y,
            T,
            D,
            U,
            d
          ), d && F & 2048 && rd(T.alternate, T);
          break;
        default:
          oi(
            y,
            T,
            D,
            U,
            d
          );
      }
      t = t.sibling;
    }
  }
  function hs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, u = t, d = u.flags;
        switch (u.tag) {
          case 22:
            hs(a, u), d & 2048 && nd(
              u.alternate,
              u
            );
            break;
          case 24:
            hs(a, u), d & 2048 && rd(u.alternate, u);
            break;
          default:
            hs(a, u);
        }
        t = t.sibling;
      }
  }
  var ps = 8192;
  function li(e) {
    if (e.subtreeFlags & ps)
      for (e = e.child; e !== null; )
        Im(e), e = e.sibling;
  }
  function Im(e) {
    switch (e.tag) {
      case 26:
        li(e), e.flags & ps && e.memoizedState !== null && o1(
          Rn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        li(e);
        break;
      case 3:
      case 4:
        var t = Rn;
        Rn = so(e.stateNode.containerInfo), li(e), Rn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ps, ps = 16777216, li(e), ps = t) : li(e));
        break;
      default:
        li(e);
    }
  }
  function Bm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ms(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Tt = u, Hm(
            u,
            e
          );
        }
      Bm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Um(e), e = e.sibling;
  }
  function Um(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ms(e), e.flags & 2048 && jr(9, e, e.return);
        break;
      case 3:
        ms(e);
        break;
      case 12:
        ms(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : ms(e);
        break;
      default:
        ms(e);
    }
  }
  function Xu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Tt = u, Hm(
            u,
            e
          );
        }
      Bm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          jr(8, t, t.return), Xu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Xu(t));
          break;
        default:
          Xu(t);
      }
      e = e.sibling;
    }
  }
  function Hm(e, t) {
    for (; Tt !== null; ) {
      var a = Tt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          jr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Ki(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Tt = u;
      else
        e: for (a = e; Tt !== null; ) {
          u = Tt;
          var d = u.sibling, y = u.return;
          if (Rm(u), u === a) {
            Tt = null;
            break e;
          }
          if (d !== null) {
            d.return = y, Tt = d;
            break e;
          }
          Tt = y;
        }
    }
  }
  var Cb = {
    getCacheForType: function(e) {
      var t = Pt(St), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, kb = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, et = null, Ie = null, qe = 0, Xe = 0, on = null, Lr = !1, ci = !1, ad = !1, pr = 0, dt = 0, Pr = 0, _a = 0, id = 0, kn = 0, di = 0, gs = null, Jt = null, sd = !1, ud = 0, Fu = 1 / 0, Qu = null, Ir = null, Rt = 0, Br = null, fi = null, hi = 0, od = 0, ld = null, qm = null, vs = 0, cd = null;
  function ln() {
    if (($e & 2) !== 0 && qe !== 0)
      return qe & -qe;
    if (M.T !== null) {
      var e = ei;
      return e !== 0 ? e : vd();
    }
    return ah();
  }
  function Zm() {
    kn === 0 && (kn = (qe & 536870912) === 0 || Ge ? za() : 536870912);
    var e = Cn.current;
    return e !== null && (e.flags |= 32), kn;
  }
  function cn(e, t, a) {
    (e === et && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (pi(e, 0), Ur(
      e,
      qe,
      kn,
      !1
    )), zi(e, a), (($e & 2) === 0 || e !== et) && (e === et && (($e & 2) === 0 && (_a |= a), dt === 4 && Ur(
      e,
      qe,
      kn,
      !1
    )), Vn(e));
  }
  function Gm(e, t, a) {
    if (($e & 6) !== 0) throw Error(i(327));
    var u = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $t(e, t), d = u ? xb(e, t) : hd(e, t, !0), y = u;
    do {
      if (d === 0) {
        ci && !u && Ur(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, y && !Ab(a)) {
          d = hd(e, t, !1), y = !1;
          continue;
        }
        if (d === 2) {
          if (y = t, e.errorRecoveryDisabledLanes & y)
            var T = 0;
          else
            T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            t = T;
            e: {
              var D = e;
              d = gs;
              var U = D.current.memoizedState.isDehydrated;
              if (U && (pi(D, T).flags |= 256), T = hd(
                D,
                T,
                !1
              ), T !== 2) {
                if (ad && !U) {
                  D.errorRecoveryDisabledLanes |= y, _a |= y, d = 4;
                  break e;
                }
                y = Jt, Jt = d, y !== null && (Jt === null ? Jt = y : Jt.push.apply(
                  Jt,
                  y
                ));
              }
              d = T;
            }
            if (y = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          pi(e, 0), Ur(e, t, 0, !0);
          break;
        }
        e: {
          switch (u = e, y = d, y) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ur(
                u,
                t,
                kn,
                !Lr
              );
              break e;
            case 2:
              Jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (d = ud + 300 - lt(), 10 < d)) {
            if (Ur(
              u,
              t,
              kn,
              !Lr
            ), Zt(u, 0, !0) !== 0) break e;
            u.timeoutHandle = _g(
              Vm.bind(
                null,
                u,
                a,
                Jt,
                Qu,
                sd,
                t,
                kn,
                _a,
                di,
                Lr,
                y,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          Vm(
            u,
            a,
            Jt,
            Qu,
            sd,
            t,
            kn,
            _a,
            di,
            Lr,
            y,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vn(e);
  }
  function Vm(e, t, a, u, d, y, T, D, U, F, ae, ue, K, W) {
    if (e.timeoutHandle = -1, ue = t.subtreeFlags, (ue & 8192 || (ue & 16785408) === 16785408) && (Cs = { stylesheets: null, count: 0, unsuspend: u1 }, Im(t), ue = l1(), ue !== null)) {
      e.cancelPendingCommit = ue(
        Jm.bind(
          null,
          e,
          t,
          y,
          a,
          u,
          d,
          T,
          D,
          U,
          ae,
          1,
          K,
          W
        )
      ), Ur(e, y, T, !F);
      return;
    }
    Jm(
      e,
      t,
      y,
      a,
      u,
      d,
      T,
      D,
      U
    );
  }
  function Ab(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var d = a[u], y = d.getSnapshot;
          d = d.value;
          try {
            if (!rn(y(), d)) return !1;
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
  function Ur(e, t, a, u) {
    t &= ~id, t &= ~_a, e.suspendedLanes |= t, e.pingedLanes &= ~t, u && (e.warmLanes |= t), u = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var y = 31 - qt(d), T = 1 << y;
      u[y] = -1, d &= ~T;
    }
    a !== 0 && nh(e, a, t);
  }
  function Ku() {
    return ($e & 6) === 0 ? (ys(0), !1) : !0;
  }
  function dd() {
    if (Ie !== null) {
      if (Xe === 0)
        var e = Ie.return;
      else
        e = Ie, sr = ha = null, xc(e), si = null, os = 0, e = Ie;
      for (; e !== null; )
        Cm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function pi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Gb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), dd(), et = e, Ie = a = rr(e.current, null), qe = t, Xe = 0, on = null, Lr = !1, ci = $t(e, t), ad = !1, di = kn = id = _a = Pr = dt = 0, Jt = gs = null, sd = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= t; 0 < u; ) {
        var d = 31 - qt(u), y = 1 << d;
        t |= e[d], u &= ~y;
      }
    return pr = t, _u(), a;
  }
  function Ym(e, t) {
    ze = null, M.H = Iu, t === Wi || t === xu ? (t = lp(), Xe = 3) : t === sp ? (t = lp(), Xe = 4) : Xe = t === cm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, on = t, Ie === null && (dt = 1, Zu(
      e,
      bn(t, e.current)
    ));
  }
  function $m() {
    var e = M.H;
    return M.H = Iu, e === null ? Iu : e;
  }
  function Xm() {
    var e = M.A;
    return M.A = Cb, e;
  }
  function fd() {
    dt = 4, Lr || (qe & 4194048) !== qe && Cn.current !== null || (ci = !0), (Pr & 134217727) === 0 && (_a & 134217727) === 0 || et === null || Ur(
      et,
      qe,
      kn,
      !1
    );
  }
  function hd(e, t, a) {
    var u = $e;
    $e |= 2;
    var d = $m(), y = Xm();
    (et !== e || qe !== t) && (Qu = null, pi(e, t)), t = !1;
    var T = dt;
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          var D = Ie, U = on;
          switch (Xe) {
            case 8:
              dd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Cn.current === null && (t = !0);
              var F = Xe;
              if (Xe = 0, on = null, mi(e, D, U, F), a && ci) {
                T = 0;
                break e;
              }
              break;
            default:
              F = Xe, Xe = 0, on = null, mi(e, D, U, F);
          }
        }
        Tb(), T = dt;
        break;
      } catch (ae) {
        Ym(e, ae);
      }
    while (!0);
    return t && e.shellSuspendCounter++, sr = ha = null, $e = u, M.H = d, M.A = y, Ie === null && (et = null, qe = 0, _u()), T;
  }
  function Tb() {
    for (; Ie !== null; ) Fm(Ie);
  }
  function xb(e, t) {
    var a = $e;
    $e |= 2;
    var u = $m(), d = Xm();
    et !== e || qe !== t ? (Qu = null, Fu = lt() + 500, pi(e, t)) : ci = $t(
      e,
      t
    );
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          t = Ie;
          var y = on;
          t: switch (Xe) {
            case 1:
              Xe = 0, on = null, mi(e, t, y, 1);
              break;
            case 2:
            case 9:
              if (up(y)) {
                Xe = 0, on = null, Qm(t);
                break;
              }
              t = function() {
                Xe !== 2 && Xe !== 9 || et !== e || (Xe = 7), Vn(e);
              }, y.then(t, t);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              up(y) ? (Xe = 0, on = null, Qm(t)) : (Xe = 0, on = null, mi(e, t, y, 7));
              break;
            case 5:
              var T = null;
              switch (Ie.tag) {
                case 26:
                  T = Ie.memoizedState;
                case 5:
                case 27:
                  var D = Ie;
                  if (!T || Mg(T)) {
                    Xe = 0, on = null;
                    var U = D.sibling;
                    if (U !== null) Ie = U;
                    else {
                      var F = D.return;
                      F !== null ? (Ie = F, Ju(F)) : Ie = null;
                    }
                    break t;
                  }
              }
              Xe = 0, on = null, mi(e, t, y, 5);
              break;
            case 6:
              Xe = 0, on = null, mi(e, t, y, 6);
              break;
            case 8:
              dd(), dt = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        Nb();
        break;
      } catch (ae) {
        Ym(e, ae);
      }
    while (!0);
    return sr = ha = null, M.H = u, M.A = d, $e = a, Ie !== null ? 0 : (et = null, qe = 0, _u(), dt);
  }
  function Nb() {
    for (; Ie !== null && !xe(); )
      Fm(Ie);
  }
  function Fm(e) {
    var t = wm(e.alternate, e, pr);
    e.memoizedProps = e.pendingProps, t === null ? Ju(e) : Ie = t;
  }
  function Qm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = gm(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          qe
        );
        break;
      case 11:
        t = gm(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          qe
        );
        break;
      case 5:
        xc(t);
      default:
        Cm(a, t), t = Ie = Kh(t, pr), t = wm(a, t, pr);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ju(e) : Ie = t;
  }
  function mi(e, t, a, u) {
    sr = ha = null, xc(t), si = null, os = 0;
    var d = t.return;
    try {
      if (yb(
        e,
        d,
        t,
        a,
        qe
      )) {
        dt = 1, Zu(
          e,
          bn(a, e.current)
        ), Ie = null;
        return;
      }
    } catch (y) {
      if (d !== null) throw Ie = d, y;
      dt = 1, Zu(
        e,
        bn(a, e.current)
      ), Ie = null;
      return;
    }
    t.flags & 32768 ? (Ge || u === 1 ? e = !0 : ci || (qe & 536870912) !== 0 ? e = !1 : (Lr = e = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Cn.current, u !== null && u.tag === 13 && (u.flags |= 16384))), Km(t, e)) : Ju(t);
  }
  function Ju(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Km(
          t,
          Lr
        );
        return;
      }
      e = t.return;
      var a = bb(
        t.alternate,
        t,
        pr
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
    dt === 0 && (dt = 5);
  }
  function Km(e, t) {
    do {
      var a = Sb(e.alternate, e);
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
    dt = 6, Ie = null;
  }
  function Jm(e, t, a, u, d, y, T, D, U) {
    e.cancelPendingCommit = null;
    do
      Wu();
    while (Rt !== 0);
    if (($e & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (y = t.lanes | t.childLanes, y |= rc, u_(
        e,
        a,
        y,
        T,
        D,
        U
      ), e === et && (Ie = et = null, qe = 0), fi = t, Br = e, hi = a, od = y, ld = d, qm = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, jb(Se, function() {
        return rg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = M.T, M.T = null, d = B.p, B.p = 2, T = $e, $e |= 4;
        try {
          wb(e, t, a);
        } finally {
          $e = T, B.p = d, M.T = u;
        }
      }
      Rt = 1, Wm(), eg(), tg();
    }
  }
  function Wm() {
    if (Rt === 1) {
      Rt = 0;
      var e = Br, t = fi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var u = B.p;
        B.p = 2;
        var d = $e;
        $e |= 4;
        try {
          zm(t, e);
          var y = kd, T = Hh(e.containerInfo), D = y.focusedElem, U = y.selectionRange;
          if (T !== D && D && D.ownerDocument && Uh(
            D.ownerDocument.documentElement,
            D
          )) {
            if (U !== null && Jl(D)) {
              var F = U.start, ae = U.end;
              if (ae === void 0 && (ae = F), "selectionStart" in D)
                D.selectionStart = F, D.selectionEnd = Math.min(
                  ae,
                  D.value.length
                );
              else {
                var ue = D.ownerDocument || document, K = ue && ue.defaultView || window;
                if (K.getSelection) {
                  var W = K.getSelection(), Ce = D.textContent.length, we = Math.min(U.start, Ce), Ke = U.end === void 0 ? we : Math.min(U.end, Ce);
                  !W.extend && we > Ke && (T = Ke, Ke = we, we = T);
                  var V = Bh(
                    D,
                    we
                  ), Z = Bh(
                    D,
                    Ke
                  );
                  if (V && Z && (W.rangeCount !== 1 || W.anchorNode !== V.node || W.anchorOffset !== V.offset || W.focusNode !== Z.node || W.focusOffset !== Z.offset)) {
                    var $ = ue.createRange();
                    $.setStart(V.node, V.offset), W.removeAllRanges(), we > Ke ? (W.addRange($), W.extend(Z.node, Z.offset)) : ($.setEnd(Z.node, Z.offset), W.addRange($));
                  }
                }
              }
            }
            for (ue = [], W = D; W = W.parentNode; )
              W.nodeType === 1 && ue.push({
                element: W,
                left: W.scrollLeft,
                top: W.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < ue.length; D++) {
              var se = ue[D];
              se.element.scrollLeft = se.left, se.element.scrollTop = se.top;
            }
          }
          fo = !!Cd, kd = Cd = null;
        } finally {
          $e = d, B.p = u, M.T = a;
        }
      }
      e.current = t, Rt = 2;
    }
  }
  function eg() {
    if (Rt === 2) {
      Rt = 0;
      var e = Br, t = fi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var u = B.p;
        B.p = 2;
        var d = $e;
        $e |= 4;
        try {
          Mm(e, t.alternate, t);
        } finally {
          $e = d, B.p = u, M.T = a;
        }
      }
      Rt = 3;
    }
  }
  function tg() {
    if (Rt === 4 || Rt === 3) {
      Rt = 0, Je();
      var e = Br, t = fi, a = hi, u = qm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0, fi = Br = null, ng(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ir = null), Ml(a), t = t.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            Wn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = M.T, d = B.p, B.p = 2, M.T = null;
        try {
          for (var y = e.onRecoverableError, T = 0; T < u.length; T++) {
            var D = u[T];
            y(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          M.T = t, B.p = d;
        }
      }
      (hi & 3) !== 0 && Wu(), Vn(e), d = e.pendingLanes, (a & 4194090) !== 0 && (d & 42) !== 0 ? e === cd ? vs++ : (vs = 0, cd = e) : vs = 0, ys(0);
    }
  }
  function ng(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ki(t)));
  }
  function Wu(e) {
    return Wm(), eg(), tg(), rg();
  }
  function rg() {
    if (Rt !== 5) return !1;
    var e = Br, t = od;
    od = 0;
    var a = Ml(hi), u = M.T, d = B.p;
    try {
      B.p = 32 > a ? 32 : a, M.T = null, a = ld, ld = null;
      var y = Br, T = hi;
      if (Rt = 0, fi = Br = null, hi = 0, ($e & 6) !== 0) throw Error(i(331));
      var D = $e;
      if ($e |= 4, Um(y.current), Pm(
        y,
        y.current,
        T,
        a
      ), $e = D, ys(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(Wn, y);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, M.T = u, ng(e, t);
    }
  }
  function ag(e, t, a) {
    t = bn(a, t), t = qc(e.stateNode, t, 2), e = Nr(e, t, 2), e !== null && (zi(e, 2), Vn(e));
  }
  function We(e, t, a) {
    if (e.tag === 3)
      ag(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ag(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ir === null || !Ir.has(u))) {
            e = bn(a, e), a = om(2), u = Nr(t, a, 2), u !== null && (lm(
              a,
              u,
              t,
              e
            ), zi(u, 2), Vn(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function pd(e, t, a) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new kb();
      var d = /* @__PURE__ */ new Set();
      u.set(t, d);
    } else
      d = u.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(t, d));
    d.has(a) || (ad = !0, d.add(a), e = Ob.bind(null, e, t, a), t.then(e, e));
  }
  function Ob(e, t, a) {
    var u = e.pingCache;
    u !== null && u.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, et === e && (qe & a) === a && (dt === 4 || dt === 3 && (qe & 62914560) === qe && 300 > lt() - ud ? ($e & 2) === 0 && pi(e, 0) : id |= a, di === qe && (di = 0)), Vn(e);
  }
  function ig(e, t) {
    t === 0 && (t = th()), e = Qa(e, t), e !== null && (zi(e, t), Vn(e));
  }
  function Mb(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), ig(e, a);
  }
  function Rb(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode, d = e.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    u !== null && u.delete(t), ig(e, a);
  }
  function jb(e, t) {
    return ge(e, t);
  }
  var eo = null, gi = null, md = !1, to = !1, gd = !1, ba = 0;
  function Vn(e) {
    e !== gi && e.next === null && (gi === null ? eo = gi = e : gi = gi.next = e), to = !0, md || (md = !0, zb());
  }
  function ys(e, t) {
    if (!gd && to) {
      gd = !0;
      do
        for (var a = !1, u = eo; u !== null; ) {
          if (e !== 0) {
            var d = u.pendingLanes;
            if (d === 0) var y = 0;
            else {
              var T = u.suspendedLanes, D = u.pingedLanes;
              y = (1 << 31 - qt(42 | e) + 1) - 1, y &= d & ~(T & ~D), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (a = !0, lg(u, y));
          } else
            y = qe, y = Zt(
              u,
              u === et ? y : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (y & 3) === 0 || $t(u, y) || (a = !0, lg(u, y));
          u = u.next;
        }
      while (a);
      gd = !1;
    }
  }
  function Db() {
    sg();
  }
  function sg() {
    to = md = !1;
    var e = 0;
    ba !== 0 && (Zb() && (e = ba), ba = 0);
    for (var t = lt(), a = null, u = eo; u !== null; ) {
      var d = u.next, y = ug(u, t);
      y === 0 ? (u.next = null, a === null ? eo = d : a.next = d, d === null && (gi = a)) : (a = u, (e !== 0 || (y & 3) !== 0) && (to = !0)), u = d;
    }
    ys(e);
  }
  function ug(e, t) {
    for (var a = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, y = e.pendingLanes & -62914561; 0 < y; ) {
      var T = 31 - qt(y), D = 1 << T, U = d[T];
      U === -1 ? ((D & a) === 0 || (D & u) !== 0) && (d[T] = uu(D, t)) : U <= t && (e.expiredLanes |= D), y &= ~D;
    }
    if (t = et, a = qe, a = Zt(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), u = e.callbackNode, a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return u !== null && u !== null && Pe(u), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || $t(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (u !== null && Pe(u), Ml(a)) {
        case 2:
        case 8:
          a = ye;
          break;
        case 32:
          a = Se;
          break;
        case 268435456:
          a = Ve;
          break;
        default:
          a = Se;
      }
      return u = og.bind(null, e), a = ge(a, u), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return u !== null && u !== null && Pe(u), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function og(e, t) {
    if (Rt !== 0 && Rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Wu() && e.callbackNode !== a)
      return null;
    var u = qe;
    return u = Zt(
      e,
      e === et ? u : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), u === 0 ? null : (Gm(e, u, t), ug(e, lt()), e.callbackNode != null && e.callbackNode === a ? og.bind(null, e) : null);
  }
  function lg(e, t) {
    if (Wu()) return null;
    Gm(e, t, !0);
  }
  function zb() {
    Vb(function() {
      ($e & 6) !== 0 ? ge(
        On,
        Db
      ) : sg();
    });
  }
  function vd() {
    return ba === 0 && (ba = za()), ba;
  }
  function cg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : fu("" + e);
  }
  function dg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Lb(e, t, a, u, d) {
    if (t === "submit" && a && a.stateNode === d) {
      var y = cg(
        (d[Xt] || null).action
      ), T = u.submitter;
      T && (t = (t = T[Xt] || null) ? cg(t.formAction) : T.getAttribute("formAction"), t !== null && (y = t, T = null));
      var D = new gu(
        "action",
        "action",
        null,
        u,
        d
      );
      e.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ba !== 0) {
                  var U = T ? dg(d, T) : new FormData(d);
                  Pc(
                    a,
                    {
                      pending: !0,
                      data: U,
                      method: d.method,
                      action: y
                    },
                    null,
                    U
                  );
                }
              } else
                typeof y == "function" && (D.preventDefault(), U = T ? dg(d, T) : new FormData(d), Pc(
                  a,
                  {
                    pending: !0,
                    data: U,
                    method: d.method,
                    action: y
                  },
                  y,
                  U
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var yd = 0; yd < nc.length; yd++) {
    var _d = nc[yd], Pb = _d.toLowerCase(), Ib = _d[0].toUpperCase() + _d.slice(1);
    Mn(
      Pb,
      "on" + Ib
    );
  }
  Mn(Gh, "onAnimationEnd"), Mn(Vh, "onAnimationIteration"), Mn(Yh, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(tb, "onTransitionRun"), Mn(nb, "onTransitionStart"), Mn(rb, "onTransitionCancel"), Mn($h, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Bb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_s)
  );
  function fg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var u = e[a], d = u.event;
      u = u.listeners;
      e: {
        var y = void 0;
        if (t)
          for (var T = u.length - 1; 0 <= T; T--) {
            var D = u[T], U = D.instance, F = D.currentTarget;
            if (D = D.listener, U !== y && d.isPropagationStopped())
              break e;
            y = D, d.currentTarget = F;
            try {
              y(d);
            } catch (ae) {
              qu(ae);
            }
            d.currentTarget = null, y = U;
          }
        else
          for (T = 0; T < u.length; T++) {
            if (D = u[T], U = D.instance, F = D.currentTarget, D = D.listener, U !== y && d.isPropagationStopped())
              break e;
            y = D, d.currentTarget = F;
            try {
              y(d);
            } catch (ae) {
              qu(ae);
            }
            d.currentTarget = null, y = U;
          }
      }
    }
  }
  function Be(e, t) {
    var a = t[Rl];
    a === void 0 && (a = t[Rl] = /* @__PURE__ */ new Set());
    var u = e + "__bubble";
    a.has(u) || (hg(t, e, 2, !1), a.add(u));
  }
  function bd(e, t, a) {
    var u = 0;
    t && (u |= 4), hg(
      a,
      e,
      u,
      t
    );
  }
  var no = "_reactListening" + Math.random().toString(36).slice(2);
  function Sd(e) {
    if (!e[no]) {
      e[no] = !0, sh.forEach(function(a) {
        a !== "selectionchange" && (Bb.has(a) || bd(a, !1, e), bd(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[no] || (t[no] = !0, bd("selectionchange", !1, t));
    }
  }
  function hg(e, t, a, u) {
    switch (Pg(t)) {
      case 2:
        var d = f1;
        break;
      case 8:
        d = h1;
        break;
      default:
        d = zd;
    }
    a = d.bind(
      null,
      t,
      a,
      e
    ), d = void 0, !Zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), u ? d !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, a, !0) : d !== void 0 ? e.addEventListener(t, a, {
      passive: d
    }) : e.addEventListener(t, a, !1);
  }
  function wd(e, t, a, u, d) {
    var y = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      e: for (; ; ) {
        if (u === null) return;
        var T = u.tag;
        if (T === 3 || T === 4) {
          var D = u.stateNode.containerInfo;
          if (D === d) break;
          if (T === 4)
            for (T = u.return; T !== null; ) {
              var U = T.tag;
              if ((U === 3 || U === 4) && T.stateNode.containerInfo === d)
                return;
              T = T.return;
            }
          for (; D !== null; ) {
            if (T = Pa(D), T === null) return;
            if (U = T.tag, U === 5 || U === 6 || U === 26 || U === 27) {
              u = y = T;
              continue e;
            }
            D = D.parentNode;
          }
        }
        u = u.return;
      }
    bh(function() {
      var F = y, ae = Hl(a), ue = [];
      e: {
        var K = Xh.get(e);
        if (K !== void 0) {
          var W = gu, Ce = e;
          switch (e) {
            case "keypress":
              if (pu(a) === 0) break e;
            case "keydown":
            case "keyup":
              W = j_;
              break;
            case "focusin":
              Ce = "focus", W = $l;
              break;
            case "focusout":
              Ce = "blur", W = $l;
              break;
            case "beforeblur":
            case "afterblur":
              W = $l;
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
              W = Eh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = S_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = L_;
              break;
            case Gh:
            case Vh:
            case Yh:
              W = C_;
              break;
            case $h:
              W = I_;
              break;
            case "scroll":
            case "scrollend":
              W = __;
              break;
            case "wheel":
              W = U_;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = A_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = kh;
              break;
            case "toggle":
            case "beforetoggle":
              W = q_;
          }
          var we = (t & 4) !== 0, Ke = !we && (e === "scroll" || e === "scrollend"), V = we ? K !== null ? K + "Capture" : null : K;
          we = [];
          for (var Z = F, $; Z !== null; ) {
            var se = Z;
            if ($ = se.stateNode, se = se.tag, se !== 5 && se !== 26 && se !== 27 || $ === null || V === null || (se = Ii(Z, V), se != null && we.push(
              bs(Z, se, $)
            )), Ke) break;
            Z = Z.return;
          }
          0 < we.length && (K = new W(
            K,
            Ce,
            null,
            a,
            ae
          ), ue.push({ event: K, listeners: we }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (K = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", K && a !== Ul && (Ce = a.relatedTarget || a.fromElement) && (Pa(Ce) || Ce[La]))
            break e;
          if ((W || K) && (K = ae.window === ae ? ae : (K = ae.ownerDocument) ? K.defaultView || K.parentWindow : window, W ? (Ce = a.relatedTarget || a.toElement, W = F, Ce = Ce ? Pa(Ce) : null, Ce !== null && (Ke = c(Ce), we = Ce.tag, Ce !== Ke || we !== 5 && we !== 27 && we !== 6) && (Ce = null)) : (W = null, Ce = F), W !== Ce)) {
            if (we = Eh, se = "onMouseLeave", V = "onMouseEnter", Z = "mouse", (e === "pointerout" || e === "pointerover") && (we = kh, se = "onPointerLeave", V = "onPointerEnter", Z = "pointer"), Ke = W == null ? K : Pi(W), $ = Ce == null ? K : Pi(Ce), K = new we(
              se,
              Z + "leave",
              W,
              a,
              ae
            ), K.target = Ke, K.relatedTarget = $, se = null, Pa(ae) === F && (we = new we(
              V,
              Z + "enter",
              Ce,
              a,
              ae
            ), we.target = $, we.relatedTarget = Ke, se = we), Ke = se, W && Ce)
              t: {
                for (we = W, V = Ce, Z = 0, $ = we; $; $ = vi($))
                  Z++;
                for ($ = 0, se = V; se; se = vi(se))
                  $++;
                for (; 0 < Z - $; )
                  we = vi(we), Z--;
                for (; 0 < $ - Z; )
                  V = vi(V), $--;
                for (; Z--; ) {
                  if (we === V || V !== null && we === V.alternate)
                    break t;
                  we = vi(we), V = vi(V);
                }
                we = null;
              }
            else we = null;
            W !== null && pg(
              ue,
              K,
              W,
              we,
              !1
            ), Ce !== null && Ke !== null && pg(
              ue,
              Ke,
              Ce,
              we,
              !0
            );
          }
        }
        e: {
          if (K = F ? Pi(F) : window, W = K.nodeName && K.nodeName.toLowerCase(), W === "select" || W === "input" && K.type === "file")
            var pe = jh;
          else if (Mh(K))
            if (Dh)
              pe = J_;
            else {
              pe = Q_;
              var Le = F_;
            }
          else
            W = K.nodeName, !W || W.toLowerCase() !== "input" || K.type !== "checkbox" && K.type !== "radio" ? F && Bl(F.elementType) && (pe = jh) : pe = K_;
          if (pe && (pe = pe(e, F))) {
            Rh(
              ue,
              pe,
              a,
              ae
            );
            break e;
          }
          Le && Le(e, K, F), e === "focusout" && F && K.type === "number" && F.memoizedProps.value != null && Il(K, "number", K.value);
        }
        switch (Le = F ? Pi(F) : window, e) {
          case "focusin":
            (Mh(Le) || Le.contentEditable === "true") && ($a = Le, Wl = F, Yi = null);
            break;
          case "focusout":
            Yi = Wl = $a = null;
            break;
          case "mousedown":
            ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ec = !1, qh(ue, a, ae);
            break;
          case "selectionchange":
            if (eb) break;
          case "keydown":
          case "keyup":
            qh(ue, a, ae);
        }
        var ve;
        if (Fl)
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
          Ya ? Nh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Ah && a.locale !== "ko" && (Ya || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Ya && (ve = Sh()) : (kr = ae, Gl = "value" in kr ? kr.value : kr.textContent, Ya = !0)), Le = ro(F, Ee), 0 < Le.length && (Ee = new Ch(
          Ee,
          e,
          null,
          a,
          ae
        ), ue.push({ event: Ee, listeners: Le }), ve ? Ee.data = ve : (ve = Oh(a), ve !== null && (Ee.data = ve)))), (ve = G_ ? V_(e, a) : Y_(e, a)) && (Ee = ro(F, "onBeforeInput"), 0 < Ee.length && (Le = new Ch(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          ae
        ), ue.push({
          event: Le,
          listeners: Ee
        }), Le.data = ve)), Lb(
          ue,
          e,
          F,
          a,
          ae
        );
      }
      fg(ue, t);
    });
  }
  function bs(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function ro(e, t) {
    for (var a = t + "Capture", u = []; e !== null; ) {
      var d = e, y = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || y === null || (d = Ii(e, a), d != null && u.unshift(
        bs(e, d, y)
      ), d = Ii(e, t), d != null && u.push(
        bs(e, d, y)
      )), e.tag === 3) return u;
      e = e.return;
    }
    return [];
  }
  function vi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function pg(e, t, a, u, d) {
    for (var y = t._reactName, T = []; a !== null && a !== u; ) {
      var D = a, U = D.alternate, F = D.stateNode;
      if (D = D.tag, U !== null && U === u) break;
      D !== 5 && D !== 26 && D !== 27 || F === null || (U = F, d ? (F = Ii(a, y), F != null && T.unshift(
        bs(a, F, U)
      )) : d || (F = Ii(a, y), F != null && T.push(
        bs(a, F, U)
      ))), a = a.return;
    }
    T.length !== 0 && e.push({ event: t, listeners: T });
  }
  var Ub = /\r\n?/g, Hb = /\u0000|\uFFFD/g;
  function mg(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ub, `
`).replace(Hb, "");
  }
  function gg(e, t) {
    return t = mg(t), mg(e) === t;
  }
  function ao() {
  }
  function Qe(e, t, a, u, d, y) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Za(e, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Za(e, "" + u);
        break;
      case "className":
        lu(e, "class", u);
        break;
      case "tabIndex":
        lu(e, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        lu(e, a, u);
        break;
      case "style":
        yh(e, u, y);
        break;
      case "data":
        if (t !== "object") {
          lu(e, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        u = fu("" + u), e.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof y == "function" && (a === "formAction" ? (t !== "input" && Qe(e, t, "name", d.name, d, null), Qe(
            e,
            t,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Qe(
            e,
            t,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Qe(
            e,
            t,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Qe(e, t, "encType", d.encType, d, null), Qe(e, t, "method", d.method, d, null), Qe(e, t, "target", d.target, d, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        u = fu("" + u), e.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (e.onclick = ao);
        break;
      case "onScroll":
        u != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        u != null && Be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(i(61));
          if (a = u.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        e.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = fu("" + u), e.setAttributeNS(
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
        u != null && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(a, "" + u) : e.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? e.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(a, u) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? e.setAttribute(a, u) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? e.removeAttribute(a) : e.setAttribute(a, u);
        break;
      case "popover":
        Be("beforetoggle", e), Be("toggle", e), ou(e, "popover", u);
        break;
      case "xlinkActuate":
        tr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        tr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        tr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        tr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        tr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        tr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        tr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        tr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        tr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        ou(e, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = v_.get(a) || a, ou(e, a, u));
    }
  }
  function Ed(e, t, a, u, d, y) {
    switch (a) {
      case "style":
        yh(e, u, y);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(i(61));
          if (a = u.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Za(e, u) : (typeof u == "number" || typeof u == "bigint") && Za(e, "" + u);
        break;
      case "onScroll":
        u != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        u != null && Be("scrollend", e);
        break;
      case "onClick":
        u != null && (e.onclick = ao);
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
        if (!uh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (d = a.endsWith("Capture"), t = a.slice(2, d ? a.length - 7 : void 0), y = e[Xt] || null, y = y != null ? y[a] : null, typeof y == "function" && e.removeEventListener(t, y, d), typeof u == "function")) {
              typeof y != "function" && y !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, u, d);
              break e;
            }
            a in e ? e[a] = u : u === !0 ? e.setAttribute(a, "") : ou(e, a, u);
          }
    }
  }
  function jt(e, t, a) {
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
        var u = !1, d = !1, y;
        for (y in a)
          if (a.hasOwnProperty(y)) {
            var T = a[y];
            if (T != null)
              switch (y) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Qe(e, t, y, T, a, null);
              }
          }
        d && Qe(e, t, "srcSet", a.srcSet, a, null), u && Qe(e, t, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
        var D = y = T = d = null, U = null, F = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var ae = a[u];
            if (ae != null)
              switch (u) {
                case "name":
                  d = ae;
                  break;
                case "type":
                  T = ae;
                  break;
                case "checked":
                  U = ae;
                  break;
                case "defaultChecked":
                  F = ae;
                  break;
                case "value":
                  y = ae;
                  break;
                case "defaultValue":
                  D = ae;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ae != null)
                    throw Error(i(137, t));
                  break;
                default:
                  Qe(e, t, u, ae, a, null);
              }
          }
        ph(
          e,
          y,
          D,
          U,
          F,
          T,
          d,
          !1
        ), cu(e);
        return;
      case "select":
        Be("invalid", e), u = T = y = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (D = a[d], D != null))
            switch (d) {
              case "value":
                y = D;
                break;
              case "defaultValue":
                T = D;
                break;
              case "multiple":
                u = D;
              default:
                Qe(e, t, d, D, a, null);
            }
        t = y, a = T, e.multiple = !!u, t != null ? qa(e, !!u, t, !1) : a != null && qa(e, !!u, a, !0);
        return;
      case "textarea":
        Be("invalid", e), y = d = u = null;
        for (T in a)
          if (a.hasOwnProperty(T) && (D = a[T], D != null))
            switch (T) {
              case "value":
                u = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                y = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(i(91));
                break;
              default:
                Qe(e, t, T, D, a, null);
            }
        gh(e, u, d, y), cu(e);
        return;
      case "option":
        for (U in a)
          if (a.hasOwnProperty(U) && (u = a[U], u != null))
            switch (U) {
              case "selected":
                e.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                Qe(e, t, U, u, a, null);
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
        for (u = 0; u < _s.length; u++)
          Be(_s[u], e);
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
        for (F in a)
          if (a.hasOwnProperty(F) && (u = a[F], u != null))
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Qe(e, t, F, u, a, null);
            }
        return;
      default:
        if (Bl(t)) {
          for (ae in a)
            a.hasOwnProperty(ae) && (u = a[ae], u !== void 0 && Ed(
              e,
              t,
              ae,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (D in a)
      a.hasOwnProperty(D) && (u = a[D], u != null && Qe(e, t, D, u, a, null));
  }
  function qb(e, t, a, u) {
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
        var d = null, y = null, T = null, D = null, U = null, F = null, ae = null;
        for (W in a) {
          var ue = a[W];
          if (a.hasOwnProperty(W) && ue != null)
            switch (W) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                U = ue;
              default:
                u.hasOwnProperty(W) || Qe(e, t, W, null, u, ue);
            }
        }
        for (var K in u) {
          var W = u[K];
          if (ue = a[K], u.hasOwnProperty(K) && (W != null || ue != null))
            switch (K) {
              case "type":
                y = W;
                break;
              case "name":
                d = W;
                break;
              case "checked":
                F = W;
                break;
              case "defaultChecked":
                ae = W;
                break;
              case "value":
                T = W;
                break;
              case "defaultValue":
                D = W;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null)
                  throw Error(i(137, t));
                break;
              default:
                W !== ue && Qe(
                  e,
                  t,
                  K,
                  W,
                  u,
                  ue
                );
            }
        }
        Pl(
          e,
          T,
          D,
          U,
          F,
          ae,
          y,
          d
        );
        return;
      case "select":
        W = T = D = K = null;
        for (y in a)
          if (U = a[y], a.hasOwnProperty(y) && U != null)
            switch (y) {
              case "value":
                break;
              case "multiple":
                W = U;
              default:
                u.hasOwnProperty(y) || Qe(
                  e,
                  t,
                  y,
                  null,
                  u,
                  U
                );
            }
        for (d in u)
          if (y = u[d], U = a[d], u.hasOwnProperty(d) && (y != null || U != null))
            switch (d) {
              case "value":
                K = y;
                break;
              case "defaultValue":
                D = y;
                break;
              case "multiple":
                T = y;
              default:
                y !== U && Qe(
                  e,
                  t,
                  d,
                  y,
                  u,
                  U
                );
            }
        t = D, a = T, u = W, K != null ? qa(e, !!a, K, !1) : !!u != !!a && (t != null ? qa(e, !!a, t, !0) : qa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        W = K = null;
        for (D in a)
          if (d = a[D], a.hasOwnProperty(D) && d != null && !u.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, t, D, null, u, d);
            }
        for (T in u)
          if (d = u[T], y = a[T], u.hasOwnProperty(T) && (d != null || y != null))
            switch (T) {
              case "value":
                K = d;
                break;
              case "defaultValue":
                W = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== y && Qe(e, t, T, d, u, y);
            }
        mh(e, K, W);
        return;
      case "option":
        for (var Ce in a)
          if (K = a[Ce], a.hasOwnProperty(Ce) && K != null && !u.hasOwnProperty(Ce))
            switch (Ce) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Qe(
                  e,
                  t,
                  Ce,
                  null,
                  u,
                  K
                );
            }
        for (U in u)
          if (K = u[U], W = a[U], u.hasOwnProperty(U) && K !== W && (K != null || W != null))
            switch (U) {
              case "selected":
                e.selected = K && typeof K != "function" && typeof K != "symbol";
                break;
              default:
                Qe(
                  e,
                  t,
                  U,
                  K,
                  u,
                  W
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
          K = a[we], a.hasOwnProperty(we) && K != null && !u.hasOwnProperty(we) && Qe(e, t, we, null, u, K);
        for (F in u)
          if (K = u[F], W = a[F], u.hasOwnProperty(F) && K !== W && (K != null || W != null))
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (K != null)
                  throw Error(i(137, t));
                break;
              default:
                Qe(
                  e,
                  t,
                  F,
                  K,
                  u,
                  W
                );
            }
        return;
      default:
        if (Bl(t)) {
          for (var Ke in a)
            K = a[Ke], a.hasOwnProperty(Ke) && K !== void 0 && !u.hasOwnProperty(Ke) && Ed(
              e,
              t,
              Ke,
              void 0,
              u,
              K
            );
          for (ae in u)
            K = u[ae], W = a[ae], !u.hasOwnProperty(ae) || K === W || K === void 0 && W === void 0 || Ed(
              e,
              t,
              ae,
              K,
              u,
              W
            );
          return;
        }
    }
    for (var V in a)
      K = a[V], a.hasOwnProperty(V) && K != null && !u.hasOwnProperty(V) && Qe(e, t, V, null, u, K);
    for (ue in u)
      K = u[ue], W = a[ue], !u.hasOwnProperty(ue) || K === W || K == null && W == null || Qe(e, t, ue, K, u, W);
  }
  var Cd = null, kd = null;
  function io(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yg(e, t) {
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
  function Ad(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Td = null;
  function Zb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Td ? !1 : (Td = e, !0) : (Td = null, !1);
  }
  var _g = typeof setTimeout == "function" ? setTimeout : void 0, Gb = typeof clearTimeout == "function" ? clearTimeout : void 0, bg = typeof Promise == "function" ? Promise : void 0, Vb = typeof queueMicrotask == "function" ? queueMicrotask : typeof bg < "u" ? function(e) {
    return bg.resolve(null).then(e).catch(Yb);
  } : _g;
  function Yb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hr(e) {
    return e === "head";
  }
  function Sg(e, t) {
    var a = t, u = 0, d = 0;
    do {
      var y = a.nextSibling;
      if (e.removeChild(a), y && y.nodeType === 8)
        if (a = y.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var T = e.ownerDocument;
            if (a & 1 && Ss(T.documentElement), a & 2 && Ss(T.body), a & 4)
              for (a = T.head, Ss(a), T = a.firstChild; T; ) {
                var D = T.nextSibling, U = T.nodeName;
                T[Li] || U === "SCRIPT" || U === "STYLE" || U === "LINK" && T.rel.toLowerCase() === "stylesheet" || a.removeChild(T), T = D;
              }
          }
          if (d === 0) {
            e.removeChild(y), Ns(t);
            return;
          }
          d--;
        } else
          a === "$" || a === "$?" || a === "$!" ? d++ : u = a.charCodeAt(0) - 48;
      else u = 0;
      a = y;
    } while (a);
    Ns(t);
  }
  function xd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xd(a), jl(a);
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
  function $b(e, t, a, u) {
    for (; e.nodeType === 1; ) {
      var d = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (u) {
        if (!e[Li])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (y = e.getAttribute("rel"), y === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (y !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (y = e.getAttribute("src"), (y !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && y && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var y = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === y)
          return e;
      } else return e;
      if (e = jn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Xb(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = jn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Nd(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Fb(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), e._reactRetry = u;
    }
  }
  function jn(e) {
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
  var Od = null;
  function wg(e) {
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
  function Eg(e, t, a) {
    switch (t = io(a), e) {
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
  function Ss(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    jl(e);
  }
  var An = /* @__PURE__ */ new Map(), Cg = /* @__PURE__ */ new Set();
  function so(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var mr = B.d;
  B.d = {
    f: Qb,
    r: Kb,
    D: Jb,
    C: Wb,
    L: e1,
    m: t1,
    X: r1,
    S: n1,
    M: a1
  };
  function Qb() {
    var e = mr.f(), t = Ku();
    return e || t;
  }
  function Kb(e) {
    var t = Ia(e);
    t !== null && t.tag === 5 && t.type === "form" ? Gp(t) : mr.r(e);
  }
  var yi = typeof document > "u" ? null : document;
  function kg(e, t, a) {
    var u = yi;
    if (u && typeof t == "string" && t) {
      var d = _n(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof a == "string" && (d += '[crossorigin="' + a + '"]'), Cg.has(d) || (Cg.add(d), e = { rel: e, crossOrigin: a, href: t }, u.querySelector(d) === null && (t = u.createElement("link"), jt(t, "link", e), kt(t), u.head.appendChild(t)));
    }
  }
  function Jb(e) {
    mr.D(e), kg("dns-prefetch", e, null);
  }
  function Wb(e, t) {
    mr.C(e, t), kg("preconnect", e, t);
  }
  function e1(e, t, a) {
    mr.L(e, t, a);
    var u = yi;
    if (u && e && t) {
      var d = 'link[rel="preload"][as="' + _n(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (d += '[imagesrcset="' + _n(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (d += '[imagesizes="' + _n(
        a.imageSizes
      ) + '"]')) : d += '[href="' + _n(e) + '"]';
      var y = d;
      switch (t) {
        case "style":
          y = _i(e);
          break;
        case "script":
          y = bi(e);
      }
      An.has(y) || (e = g(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), An.set(y, e), u.querySelector(d) !== null || t === "style" && u.querySelector(ws(y)) || t === "script" && u.querySelector(Es(y)) || (t = u.createElement("link"), jt(t, "link", e), kt(t), u.head.appendChild(t)));
    }
  }
  function t1(e, t) {
    mr.m(e, t);
    var a = yi;
    if (a && e) {
      var u = t && typeof t.as == "string" ? t.as : "script", d = 'link[rel="modulepreload"][as="' + _n(u) + '"][href="' + _n(e) + '"]', y = d;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = bi(e);
      }
      if (!An.has(y) && (e = g({ rel: "modulepreload", href: e }, t), An.set(y, e), a.querySelector(d) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Es(y)))
              return;
        }
        u = a.createElement("link"), jt(u, "link", e), kt(u), a.head.appendChild(u);
      }
    }
  }
  function n1(e, t, a) {
    mr.S(e, t, a);
    var u = yi;
    if (u && e) {
      var d = Ba(u).hoistableStyles, y = _i(e);
      t = t || "default";
      var T = d.get(y);
      if (!T) {
        var D = { loading: 0, preload: null };
        if (T = u.querySelector(
          ws(y)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = An.get(y)) && Md(e, a);
          var U = T = u.createElement("link");
          kt(U), jt(U, "link", e), U._p = new Promise(function(F, ae) {
            U.onload = F, U.onerror = ae;
          }), U.addEventListener("load", function() {
            D.loading |= 1;
          }), U.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, uo(T, t, u);
        }
        T = {
          type: "stylesheet",
          instance: T,
          count: 1,
          state: D
        }, d.set(y, T);
      }
    }
  }
  function r1(e, t) {
    mr.X(e, t);
    var a = yi;
    if (a && e) {
      var u = Ba(a).hoistableScripts, d = bi(e), y = u.get(d);
      y || (y = a.querySelector(Es(d)), y || (e = g({ src: e, async: !0 }, t), (t = An.get(d)) && Rd(e, t), y = a.createElement("script"), kt(y), jt(y, "link", e), a.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, u.set(d, y));
    }
  }
  function a1(e, t) {
    mr.M(e, t);
    var a = yi;
    if (a && e) {
      var u = Ba(a).hoistableScripts, d = bi(e), y = u.get(d);
      y || (y = a.querySelector(Es(d)), y || (e = g({ src: e, async: !0, type: "module" }, t), (t = An.get(d)) && Rd(e, t), y = a.createElement("script"), kt(y), jt(y, "link", e), a.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, u.set(d, y));
    }
  }
  function Ag(e, t, a, u) {
    var d = (d = te.current) ? so(d) : null;
    if (!d) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = _i(a.href), a = Ba(
          d
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = _i(a.href);
          var y = Ba(
            d
          ).hoistableStyles, T = y.get(e);
          if (T || (d = d.ownerDocument || d, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, y.set(e, T), (y = d.querySelector(
            ws(e)
          )) && !y._p && (T.instance = y, T.state.loading = 5), An.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, An.set(e, a), y || i1(
            d,
            e,
            a,
            T.state
          ))), t && u === null)
            throw Error(i(528, ""));
          return T;
        }
        if (t && u !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bi(a), a = Ba(
          d
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function _i(e) {
    return 'href="' + _n(e) + '"';
  }
  function ws(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Tg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function i1(e, t, a, u) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = e.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), jt(t, "link", a), kt(t), e.head.appendChild(t));
  }
  function bi(e) {
    return '[src="' + _n(e) + '"]';
  }
  function Es(e) {
    return "script[async]" + e;
  }
  function xg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = e.querySelector(
            'style[data-href~="' + _n(a.href) + '"]'
          );
          if (u)
            return t.instance = u, kt(u), u;
          var d = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (e.ownerDocument || e).createElement(
            "style"
          ), kt(u), jt(u, "style", d), uo(u, a.precedence, e), t.instance = u;
        case "stylesheet":
          d = _i(a.href);
          var y = e.querySelector(
            ws(d)
          );
          if (y)
            return t.state.loading |= 4, t.instance = y, kt(y), y;
          u = Tg(a), (d = An.get(d)) && Md(u, d), y = (e.ownerDocument || e).createElement("link"), kt(y);
          var T = y;
          return T._p = new Promise(function(D, U) {
            T.onload = D, T.onerror = U;
          }), jt(y, "link", u), t.state.loading |= 4, uo(y, a.precedence, e), t.instance = y;
        case "script":
          return y = bi(a.src), (d = e.querySelector(
            Es(y)
          )) ? (t.instance = d, kt(d), d) : (u = a, (d = An.get(y)) && (u = g({}, a), Rd(u, d)), e = e.ownerDocument || e, d = e.createElement("script"), kt(d), jt(d, "link", u), e.head.appendChild(d), t.instance = d);
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, uo(u, a.precedence, e));
    return t.instance;
  }
  function uo(e, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = u.length ? u[u.length - 1] : null, y = d, T = 0; T < u.length; T++) {
      var D = u[T];
      if (D.dataset.precedence === t) y = D;
      else if (y !== d) break;
    }
    y ? y.parentNode.insertBefore(e, y.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Md(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Rd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var oo = null;
  function Ng(e, t, a) {
    if (oo === null) {
      var u = /* @__PURE__ */ new Map(), d = oo = /* @__PURE__ */ new Map();
      d.set(a, u);
    } else
      d = oo, u = d.get(a), u || (u = /* @__PURE__ */ new Map(), d.set(a, u));
    if (u.has(e)) return u;
    for (u.set(e, null), a = a.getElementsByTagName(e), d = 0; d < a.length; d++) {
      var y = a[d];
      if (!(y[Li] || y[Lt] || e === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = y.getAttribute(t) || "";
        T = e + T;
        var D = u.get(T);
        D ? D.push(y) : u.set(T, [y]);
      }
    }
    return u;
  }
  function Og(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function s1(e, t, a) {
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
  function Mg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Cs = null;
  function u1() {
  }
  function o1(e, t, a) {
    if (Cs === null) throw Error(i(475));
    var u = Cs;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = _i(a.href), y = e.querySelector(
          ws(d)
        );
        if (y) {
          e = y._p, e !== null && typeof e == "object" && typeof e.then == "function" && (u.count++, u = lo.bind(u), e.then(u, u)), t.state.loading |= 4, t.instance = y, kt(y);
          return;
        }
        y = e.ownerDocument || e, a = Tg(a), (d = An.get(d)) && Md(a, d), y = y.createElement("link"), kt(y);
        var T = y;
        T._p = new Promise(function(D, U) {
          T.onload = D, T.onerror = U;
        }), jt(y, "link", a), t.instance = y;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = lo.bind(u), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function l1() {
    if (Cs === null) throw Error(i(475));
    var e = Cs;
    return e.stylesheets && e.count === 0 && jd(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && jd(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function lo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) jd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var co = null;
  function jd(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, co = /* @__PURE__ */ new Map(), t.forEach(c1, e), co = null, lo.call(e));
  }
  function c1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = co.get(e);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), co.set(e, a);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), y = 0; y < d.length; y++) {
          var T = d[y];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (a.set(T.dataset.precedence, T), u = T);
        }
        u && a.set(null, u);
      }
      d = t.instance, T = d.getAttribute("data-precedence"), y = a.get(T) || u, y === u && a.set(null, d), a.set(T, d), this.count++, u = lo.bind(this), d.addEventListener("load", u), d.addEventListener("error", u), y ? y.parentNode.insertBefore(d, y.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function d1(e, t, a, u, d, y, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.hiddenUpdates = Nl(null), this.identifierPrefix = u, this.onUncaughtError = d, this.onCaughtError = y, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Rg(e, t, a, u, d, y, T, D, U, F, ae, ue) {
    return e = new d1(
      e,
      t,
      a,
      T,
      D,
      U,
      F,
      ue
    ), t = 1, y === !0 && (t |= 24), y = an(3, null, null, t), e.current = y, y.stateNode = e, t = pc(), t.refCount++, e.pooledCache = t, t.refCount++, y.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, yc(y), e;
  }
  function jg(e) {
    return e ? (e = Ka, e) : Ka;
  }
  function Dg(e, t, a, u, d, y) {
    d = jg(d), u.context === null ? u.context = d : u.pendingContext = d, u = xr(t), u.payload = { element: a }, y = y === void 0 ? null : y, y !== null && (u.callback = y), a = Nr(e, u, t), a !== null && (cn(a, e, t), ts(a, e, t));
  }
  function zg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Dd(e, t) {
    zg(e, t), (e = e.alternate) && zg(e, t);
  }
  function Lg(e) {
    if (e.tag === 13) {
      var t = Qa(e, 67108864);
      t !== null && cn(t, e, 67108864), Dd(e, 67108864);
    }
  }
  var fo = !0;
  function f1(e, t, a, u) {
    var d = M.T;
    M.T = null;
    var y = B.p;
    try {
      B.p = 2, zd(e, t, a, u);
    } finally {
      B.p = y, M.T = d;
    }
  }
  function h1(e, t, a, u) {
    var d = M.T;
    M.T = null;
    var y = B.p;
    try {
      B.p = 8, zd(e, t, a, u);
    } finally {
      B.p = y, M.T = d;
    }
  }
  function zd(e, t, a, u) {
    if (fo) {
      var d = Ld(u);
      if (d === null)
        wd(
          e,
          t,
          u,
          ho,
          a
        ), Ig(e, u);
      else if (m1(
        d,
        e,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (Ig(e, u), t & 4 && -1 < p1.indexOf(e)) {
        for (; d !== null; ) {
          var y = Ia(d);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (y = y.stateNode, y.current.memoizedState.isDehydrated) {
                  var T = vn(y.pendingLanes);
                  if (T !== 0) {
                    var D = y;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; T; ) {
                      var U = 1 << 31 - qt(T);
                      D.entanglements[1] |= U, T &= ~U;
                    }
                    Vn(y), ($e & 6) === 0 && (Fu = lt() + 500, ys(0));
                  }
                }
                break;
              case 13:
                D = Qa(y, 2), D !== null && cn(D, y, 2), Ku(), Dd(y, 2);
            }
          if (y = Ld(u), y === null && wd(
            e,
            t,
            u,
            ho,
            a
          ), y === d) break;
          d = y;
        }
        d !== null && u.stopPropagation();
      } else
        wd(
          e,
          t,
          u,
          null,
          a
        );
    }
  }
  function Ld(e) {
    return e = Hl(e), Pd(e);
  }
  var ho = null;
  function Pd(e) {
    if (ho = null, e = Pa(e), e !== null) {
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
    return ho = e, null;
  }
  function Pg(e) {
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
        switch (Jn()) {
          case On:
            return 2;
          case ye:
            return 8;
          case Se:
          case Ye:
            return 32;
          case Ve:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Id = !1, qr = null, Zr = null, Gr = null, As = /* @__PURE__ */ new Map(), Ts = /* @__PURE__ */ new Map(), Vr = [], p1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ig(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Gr = null;
        break;
      case "pointerover":
      case "pointerout":
        As.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ts.delete(t.pointerId);
    }
  }
  function xs(e, t, a, u, d, y) {
    return e === null || e.nativeEvent !== y ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: y,
      targetContainers: [d]
    }, t !== null && (t = Ia(t), t !== null && Lg(t)), e) : (e.eventSystemFlags |= u, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function m1(e, t, a, u, d) {
    switch (t) {
      case "focusin":
        return qr = xs(
          qr,
          e,
          t,
          a,
          u,
          d
        ), !0;
      case "dragenter":
        return Zr = xs(
          Zr,
          e,
          t,
          a,
          u,
          d
        ), !0;
      case "mouseover":
        return Gr = xs(
          Gr,
          e,
          t,
          a,
          u,
          d
        ), !0;
      case "pointerover":
        var y = d.pointerId;
        return As.set(
          y,
          xs(
            As.get(y) || null,
            e,
            t,
            a,
            u,
            d
          )
        ), !0;
      case "gotpointercapture":
        return y = d.pointerId, Ts.set(
          y,
          xs(
            Ts.get(y) || null,
            e,
            t,
            a,
            u,
            d
          )
        ), !0;
    }
    return !1;
  }
  function Bg(e) {
    var t = Pa(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, o_(e.priority, function() {
              if (a.tag === 13) {
                var u = ln();
                u = Ol(u);
                var d = Qa(a, u);
                d !== null && cn(d, a, u), Dd(a, u);
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
  function po(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Ld(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        Ul = u, a.target.dispatchEvent(u), Ul = null;
      } else
        return t = Ia(a), t !== null && Lg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Ug(e, t, a) {
    po(e) && a.delete(t);
  }
  function g1() {
    Id = !1, qr !== null && po(qr) && (qr = null), Zr !== null && po(Zr) && (Zr = null), Gr !== null && po(Gr) && (Gr = null), As.forEach(Ug), Ts.forEach(Ug);
  }
  function mo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Id || (Id = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      g1
    )));
  }
  var go = null;
  function Hg(e) {
    go !== e && (go = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        go === e && (go = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], u = e[t + 1], d = e[t + 2];
          if (typeof u != "function") {
            if (Pd(u || a) === null)
              continue;
            break;
          }
          var y = Ia(a);
          y !== null && (e.splice(t, 3), t -= 3, Pc(
            y,
            {
              pending: !0,
              data: d,
              method: a.method,
              action: u
            },
            u,
            d
          ));
        }
      }
    ));
  }
  function Ns(e) {
    function t(U) {
      return mo(U, e);
    }
    qr !== null && mo(qr, e), Zr !== null && mo(Zr, e), Gr !== null && mo(Gr, e), As.forEach(t), Ts.forEach(t);
    for (var a = 0; a < Vr.length; a++) {
      var u = Vr[a];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < Vr.length && (a = Vr[0], a.blockedOn === null); )
      Bg(a), a.blockedOn === null && Vr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var d = a[u], y = a[u + 1], T = d[Xt] || null;
        if (typeof y == "function")
          T || Hg(a);
        else if (T) {
          var D = null;
          if (y && y.hasAttribute("formAction")) {
            if (d = y, T = y[Xt] || null)
              D = T.formAction;
            else if (Pd(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? a[u + 1] = D : (a.splice(u, 3), u -= 3), Hg(a);
        }
      }
  }
  function Bd(e) {
    this._internalRoot = e;
  }
  vo.prototype.render = Bd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var a = t.current, u = ln();
    Dg(a, u, e, t, null, null);
  }, vo.prototype.unmount = Bd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Dg(e.current, 2, null, e, null, null), Ku(), t[La] = null;
    }
  };
  function vo(e) {
    this._internalRoot = e;
  }
  vo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ah();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Vr.length && t !== 0 && t < Vr[a].priority; a++) ;
      Vr.splice(a, 0, e), a === 0 && Bg(e);
    }
  };
  var qg = r.version;
  if (qg !== "19.1.1")
    throw Error(
      i(
        527,
        qg,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = p(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var v1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yo.isDisabled && yo.supportsFiber)
      try {
        Wn = yo.inject(
          v1
        ), ht = yo;
      } catch {
      }
  }
  return js.createRoot = function(e, t) {
    if (!o(e)) throw Error(i(299));
    var a = !1, u = "", d = am, y = im, T = sm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (y = t.onCaughtError), t.onRecoverableError !== void 0 && (T = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = Rg(
      e,
      1,
      !1,
      null,
      null,
      a,
      u,
      d,
      y,
      T,
      D,
      null
    ), e[La] = t.current, Sd(e), new Bd(t);
  }, js.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(i(299));
    var u = !1, d = "", y = am, T = im, D = sm, U = null, F = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (d = a.identifierPrefix), a.onUncaughtError !== void 0 && (y = a.onUncaughtError), a.onCaughtError !== void 0 && (T = a.onCaughtError), a.onRecoverableError !== void 0 && (D = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (U = a.unstable_transitionCallbacks), a.formState !== void 0 && (F = a.formState)), t = Rg(
      e,
      1,
      !0,
      t,
      a ?? null,
      u,
      d,
      y,
      T,
      D,
      U,
      F
    ), t.context = jg(null), a = t.current, u = ln(), u = Ol(u), d = xr(u), d.callback = null, Nr(a, d, u), a = u, t.current.lanes = a, zi(t, a), Vn(t), e[La] = t.current, Sd(e), new vo(t);
  }, js.version = "19.1.1", js;
}
var rv;
function e2() {
  if (rv) return Zd.exports;
  rv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Zd.exports = W1(), Zd.exports;
}
var t2 = e2();
const av = /* @__PURE__ */ Lf(t2);
var n2 = Object.defineProperty, r2 = (n, r, s) => r in n ? n2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, iv = (n, r, s) => r2(n, typeof r != "symbol" ? r + "" : r, s);
class G0 {
  constructor(r, s) {
    iv(this, "settingsKey"), iv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
    const { strategy: s = "recursive" } = r, i = this.defaultSettings.version, o = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: i ?? ""
      },
      formatVersion: {
        changed: !1,
        new: o ?? ""
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
      let p = function(b, g) {
        let E = !1;
        for (const _ of Object.keys(g))
          b[_] === void 0 ? (b[_] = g[_], E = !0) : typeof g[_] == "object" && g[_] !== null && (b[_] = b[_] || {}, p(b[_], g[_]) && (E = !0));
        return E;
      };
      i && c.version !== i && (m.version.changed = !0, m.version.new = i, c.version = i), o && o !== "*" && c.formatVersion !== o && (m.formatVersion.changed = !0, m.formatVersion.new = o, c.formatVersion = o), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      i && !c.version && (c.version = i, m.version.changed = !0, m.version.new = i), o && !c.formatVersion && (c.formatVersion = o, m.formatVersion.changed = !0, m.formatVersion.new = o);
      let p = structuredClone(c), b = c.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((_) => _.from === b);
          if (E && E.to > b)
            p = await E.action(p), b = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const _ of s)
              if (_.from === "*" && _.to > b && b !== _.to) {
                p = await _.action(p), b = _.to, p.formatVersion = _.to, g = !0;
                break;
              }
        } while (g);
        if (b !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = b;
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
function br(n) {
  return Array.isArray ? Array.isArray(n) : $0(n) === "[object Array]";
}
function a2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function i2(n) {
  return n == null ? "" : a2(n);
}
function Yn(n) {
  return typeof n == "string";
}
function V0(n) {
  return typeof n == "number";
}
function s2(n) {
  return n === !0 || n === !1 || u2(n) && $0(n) == "[object Boolean]";
}
function Y0(n) {
  return typeof n == "object";
}
function u2(n) {
  return Y0(n) && n !== null;
}
function mn(n) {
  return n != null;
}
function $d(n) {
  return !n.trim().length;
}
function $0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const o2 = "Incorrect 'index' type", l2 = (n) => `Invalid value for key ${n}`, c2 = (n) => `Pattern length exceeds max of ${n}.`, d2 = (n) => `Missing ${n} property in key`, f2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, sv = Object.prototype.hasOwnProperty;
class h2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((i) => {
      let o = X0(i);
      this._keys.push(o), this._keyMap[o.id] = o, s += o.weight;
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
function X0(n) {
  let r = null, s = null, i = null, o = 1, c = null;
  if (Yn(n) || br(n))
    i = n, r = uv(n), s = mf(n);
  else {
    if (!sv.call(n, "name"))
      throw new Error(d2("name"));
    const f = n.name;
    if (i = f, sv.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(f2(f));
    r = uv(f), s = mf(f), c = n.getFn;
  }
  return { path: r, id: s, weight: o, src: i, getFn: c };
}
function uv(n) {
  return br(n) ? n : n.split(".");
}
function mf(n) {
  return br(n) ? n.join(".") : n;
}
function p2(n, r) {
  let s = [], i = !1;
  const o = (c, f, m) => {
    if (mn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const b = c[p];
        if (!mn(b))
          return;
        if (m === f.length - 1 && (Yn(b) || V0(b) || s2(b)))
          s.push(i2(b));
        else if (br(b)) {
          i = !0;
          for (let g = 0, E = b.length; g < E; g += 1)
            o(b[g], f, m + 1);
        } else f.length && o(b, f, m + 1);
      }
  };
  return o(n, Yn(r) ? r.split(".") : r, 0), i ? s : s[0];
}
const m2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, g2 = {
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
}, v2 = {
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
}, y2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: p2,
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
  ...g2,
  ...m2,
  ...v2,
  ...y2
};
const _2 = /[^ ]+/g;
function b2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), i = Math.pow(10, r);
  return {
    get(o) {
      const c = o.match(_2).length;
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
class If {
  constructor({
    getFn: r = Te.getFn,
    fieldNormWeight: s = Te.fieldNormWeight
  } = {}) {
    this.norm = b2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, Yn(this.docs[0]) ? this.docs.forEach((r, s) => {
      this._addString(r, s);
    }) : this.docs.forEach((r, s) => {
      this._addObject(r, s);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const s = this.size();
    Yn(r) ? this._addString(r, s) : this._addObject(r, s);
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
    if (!mn(r) || $d(r))
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
    this.keys.forEach((o, c) => {
      let f = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (mn(f)) {
        if (br(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: b, value: g } = p.pop();
            if (mn(g))
              if (Yn(g) && !$d(g)) {
                let E = {
                  v: g,
                  i: b,
                  n: this.norm.get(g)
                };
                m.push(E);
              } else br(g) && g.forEach((E, _) => {
                p.push({
                  nestedArrIndex: _,
                  value: E
                });
              });
          }
          i.$[c] = m;
        } else if (Yn(f) && !$d(f)) {
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
function F0(n, r, { getFn: s = Te.getFn, fieldNormWeight: i = Te.fieldNormWeight } = {}) {
  const o = new If({ getFn: s, fieldNormWeight: i });
  return o.setKeys(n.map(X0)), o.setSources(r), o.create(), o;
}
function S2(n, { getFn: r = Te.getFn, fieldNormWeight: s = Te.fieldNormWeight } = {}) {
  const { keys: i, records: o } = n, c = new If({ getFn: r, fieldNormWeight: s });
  return c.setKeys(i), c.setIndexRecords(o), c;
}
function _o(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: i = 0,
  distance: o = Te.distance,
  ignoreLocation: c = Te.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (c)
    return f;
  const m = Math.abs(i - s);
  return o ? f + m / o : m ? 1 : f;
}
function w2(n = [], r = Te.minMatchCharLength) {
  let s = [], i = -1, o = -1, c = 0;
  for (let f = n.length; c < f; c += 1) {
    let m = n[c];
    m && i === -1 ? i = c : !m && i !== -1 && (o = c - 1, o - i + 1 >= r && s.push([i, o]), i = -1);
  }
  return n[c - 1] && c - i >= r && s.push([i, c - 1]), s;
}
const xa = 32;
function E2(n, r, s, {
  location: i = Te.location,
  distance: o = Te.distance,
  threshold: c = Te.threshold,
  findAllMatches: f = Te.findAllMatches,
  minMatchCharLength: m = Te.minMatchCharLength,
  includeMatches: p = Te.includeMatches,
  ignoreLocation: b = Te.ignoreLocation
} = {}) {
  if (r.length > xa)
    throw new Error(c2(xa));
  const g = r.length, E = n.length, _ = Math.max(0, Math.min(i, E));
  let S = c, h = _;
  const C = m > 1 || p, A = C ? Array(E) : [];
  let O;
  for (; (O = n.indexOf(r, h)) > -1; ) {
    let k = _o(r, {
      currentLocation: O,
      expectedLocation: _,
      distance: o,
      ignoreLocation: b
    });
    if (S = Math.min(k, S), h = O + g, C) {
      let R = 0;
      for (; R < g; )
        A[O + R] = 1, R += 1;
    }
  }
  h = -1;
  let x = [], z = 1, l = g + E;
  const v = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let R = 0, L = l;
    for (; R < L; )
      _o(r, {
        errors: k,
        currentLocation: _ + L,
        expectedLocation: _,
        distance: o,
        ignoreLocation: b
      }) <= S ? R = L : l = L, L = Math.floor((l - R) / 2 + R);
    l = L;
    let j = Math.max(1, _ - L + 1), P = f ? E : Math.min(_ + L, E) + g, G = Array(P + 2);
    G[P + 1] = (1 << k) - 1;
    for (let Y = P; Y >= j; Y -= 1) {
      let J = Y - 1, M = s[n.charAt(J)];
      if (C && (A[J] = +!!M), G[Y] = (G[Y + 1] << 1 | 1) & M, k && (G[Y] |= (x[Y + 1] | x[Y]) << 1 | 1 | x[Y + 1]), G[Y] & v && (z = _o(r, {
        errors: k,
        currentLocation: J,
        expectedLocation: _,
        distance: o,
        ignoreLocation: b
      }), z <= S)) {
        if (S = z, h = J, h <= _)
          break;
        j = Math.max(1, 2 * _ - h);
      }
    }
    if (_o(r, {
      errors: k + 1,
      currentLocation: _,
      expectedLocation: _,
      distance: o,
      ignoreLocation: b
    }) > S)
      break;
    x = G;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, z)
  };
  if (C) {
    const k = w2(A, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function C2(n) {
  let r = {};
  for (let s = 0, i = n.length; s < i; s += 1) {
    const o = n.charAt(s);
    r[o] = (r[o] || 0) | 1 << i - s - 1;
  }
  return r;
}
const fl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class Q0 {
  constructor(r, {
    location: s = Te.location,
    threshold: i = Te.threshold,
    distance: o = Te.distance,
    includeMatches: c = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: b = Te.ignoreDiacritics,
    ignoreLocation: g = Te.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: i,
      distance: o,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: b,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = b ? fl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: C2(S),
        startIndex: h
      });
    }, _ = this.pattern.length;
    if (_ > xa) {
      let S = 0;
      const h = _ % xa, C = _ - h;
      for (; S < C; )
        E(this.pattern.substr(S, xa), S), S += xa;
      if (h) {
        const A = _ - xa;
        E(this.pattern.substr(A), A);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: i, includeMatches: o } = this.options;
    if (r = s ? r : r.toLowerCase(), r = i ? fl(r) : r, this.pattern === r) {
      let C = {
        isMatch: !0,
        score: 0
      };
      return o && (C.indices = [[0, r.length - 1]]), C;
    }
    const {
      location: c,
      distance: f,
      threshold: m,
      findAllMatches: p,
      minMatchCharLength: b,
      ignoreLocation: g
    } = this.options;
    let E = [], _ = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: A, startIndex: O }) => {
      const { isMatch: x, score: z, indices: l } = E2(r, C, A, {
        location: c + O,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: b,
        includeMatches: o,
        ignoreLocation: g
      });
      x && (S = !0), _ += z, x && l && (E = [...E, ...l]);
    });
    let h = {
      isMatch: S,
      score: S ? _ / this.chunks.length : 1
    };
    return S && o && (h.indices = E), h;
  }
}
class Wr {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return ov(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return ov(r, this.singleRegex);
  }
  search() {
  }
}
function ov(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class k2 extends Wr {
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
class A2 extends Wr {
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
class T2 extends Wr {
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
class x2 extends Wr {
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
class N2 extends Wr {
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
class O2 extends Wr {
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
class K0 extends Wr {
  constructor(r, {
    location: s = Te.location,
    threshold: i = Te.threshold,
    distance: o = Te.distance,
    includeMatches: c = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: b = Te.ignoreDiacritics,
    ignoreLocation: g = Te.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new Q0(r, {
      location: s,
      threshold: i,
      distance: o,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: b,
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
class J0 extends Wr {
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
    const o = [], c = this.pattern.length;
    for (; (i = r.indexOf(this.pattern, s)) > -1; )
      s = i + c, o.push([i, s - 1]);
    const f = !!o.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: o
    };
  }
}
const gf = [
  k2,
  J0,
  T2,
  x2,
  O2,
  N2,
  A2,
  K0
], lv = gf.length, M2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, R2 = "|";
function j2(n, r = {}) {
  return n.split(R2).map((s) => {
    let i = s.trim().split(M2).filter((c) => c && !!c.trim()), o = [];
    for (let c = 0, f = i.length; c < f; c += 1) {
      const m = i[c];
      let p = !1, b = -1;
      for (; !p && ++b < lv; ) {
        const g = gf[b];
        let E = g.isMultiMatch(m);
        E && (o.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (b = -1; ++b < lv; ) {
          const g = gf[b];
          let E = g.isSingleMatch(m);
          if (E) {
            o.push(new g(E, r));
            break;
          }
        }
    }
    return o;
  });
}
const D2 = /* @__PURE__ */ new Set([K0.type, J0.type]);
class z2 {
  constructor(r, {
    isCaseSensitive: s = Te.isCaseSensitive,
    ignoreDiacritics: i = Te.ignoreDiacritics,
    includeMatches: o = Te.includeMatches,
    minMatchCharLength: c = Te.minMatchCharLength,
    ignoreLocation: f = Te.ignoreLocation,
    findAllMatches: m = Te.findAllMatches,
    location: p = Te.location,
    threshold: b = Te.threshold,
    distance: g = Te.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: i,
      includeMatches: o,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: b,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = i ? fl(r) : r, this.pattern = r, this.query = j2(this.pattern, this.options);
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
    const { includeMatches: i, isCaseSensitive: o, ignoreDiacritics: c } = this.options;
    r = o ? r : r.toLowerCase(), r = c ? fl(r) : r;
    let f = 0, m = [], p = 0;
    for (let b = 0, g = s.length; b < g; b += 1) {
      const E = s[b];
      m.length = 0, f = 0;
      for (let _ = 0, S = E.length; _ < S; _ += 1) {
        const h = E[_], { isMatch: C, indices: A, score: O } = h.search(r);
        if (C) {
          if (f += 1, p += O, i) {
            const x = h.constructor.type;
            D2.has(x) ? m = [...m, ...A] : m.push(A);
          }
        } else {
          p = 0, f = 0, m.length = 0;
          break;
        }
      }
      if (f) {
        let _ = {
          isMatch: !0,
          score: p / f
        };
        return i && (_.indices = m), _;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const vf = [];
function L2(...n) {
  vf.push(...n);
}
function yf(n, r) {
  for (let s = 0, i = vf.length; s < i; s += 1) {
    let o = vf[s];
    if (o.condition(n, r))
      return new o(n, r);
  }
  return new Q0(n, r);
}
const hl = {
  AND: "$and",
  OR: "$or"
}, _f = {
  PATH: "$path",
  PATTERN: "$val"
}, bf = (n) => !!(n[hl.AND] || n[hl.OR]), P2 = (n) => !!n[_f.PATH], I2 = (n) => !br(n) && Y0(n) && !bf(n), cv = (n) => ({
  [hl.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function W0(n, r, { auto: s = !0 } = {}) {
  const i = (o) => {
    let c = Object.keys(o);
    const f = P2(o);
    if (!f && c.length > 1 && !bf(o))
      return i(cv(o));
    if (I2(o)) {
      const p = f ? o[_f.PATH] : c[0], b = f ? o[_f.PATTERN] : o[p];
      if (!Yn(b))
        throw new Error(l2(p));
      const g = {
        keyId: mf(p),
        pattern: b
      };
      return s && (g.searcher = yf(b, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const b = o[p];
      br(b) && b.forEach((g) => {
        m.children.push(i(g));
      });
    }), m;
  };
  return bf(n) || (n = cv(n)), i(n);
}
function B2(n, { ignoreFieldNorm: r = Te.ignoreFieldNorm }) {
  n.forEach((s) => {
    let i = 1;
    s.matches.forEach(({ key: o, norm: c, score: f }) => {
      const m = o ? o.weight : null;
      i *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = i;
  });
}
function U2(n, r) {
  const s = n.matches;
  r.matches = [], mn(s) && s.forEach((i) => {
    if (!mn(i.indices) || !i.indices.length)
      return;
    const { indices: o, value: c } = i;
    let f = {
      indices: o,
      value: c
    };
    i.key && (f.key = i.key.src), i.idx > -1 && (f.refIndex = i.idx), r.matches.push(f);
  });
}
function H2(n, r) {
  r.score = n.score;
}
function q2(n, r, {
  includeMatches: s = Te.includeMatches,
  includeScore: i = Te.includeScore
} = {}) {
  const o = [];
  return s && o.push(U2), i && o.push(H2), n.map((c) => {
    const { idx: f } = c, m = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((p) => {
      p(c, m);
    }), m;
  });
}
class Di {
  constructor(r, s = {}, i) {
    this.options = { ...Te, ...s }, this.options.useExtendedSearch, this._keyStore = new h2(this.options.keys), this.setCollection(r, i);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof If))
      throw new Error(o2);
    this._myIndex = s || F0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    mn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let i = 0, o = this._docs.length; i < o; i += 1) {
      const c = this._docs[i];
      r(c, i) && (this.removeAt(i), i -= 1, o -= 1, s.push(c));
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
      includeScore: o,
      shouldSort: c,
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Yn(r) ? Yn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return B2(p, { ignoreFieldNorm: m }), c && p.sort(f), V0(s) && s > -1 && (p = p.slice(0, s)), q2(p, this._docs, {
      includeMatches: i,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const s = yf(r, this.options), { records: i } = this._myIndex, o = [];
    return i.forEach(({ v: c, i: f, n: m }) => {
      if (!mn(c))
        return;
      const { isMatch: p, score: b, indices: g } = s.searchIn(c);
      p && o.push({
        item: c,
        idx: f,
        matches: [{ score: b, value: c, norm: m, indices: g }]
      });
    }), o;
  }
  _searchLogical(r) {
    const s = W0(r, this.options), i = (m, p, b) => {
      if (!m.children) {
        const { keyId: E, searcher: _ } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: _
        });
        return S && S.length ? [
          {
            idx: b,
            item: p,
            matches: S
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, _ = m.children.length; E < _; E += 1) {
        const S = m.children[E], h = i(S, p, b);
        if (h.length)
          g.push(...h);
        else if (m.operator === hl.AND)
          return [];
      }
      return g;
    }, o = this._myIndex.records, c = {}, f = [];
    return o.forEach(({ $: m, i: p }) => {
      if (mn(m)) {
        let b = i(s, m, p);
        b.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), b.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = yf(r, this.options), { keys: i, records: o } = this._myIndex, c = [];
    return o.forEach(({ $: f, i: m }) => {
      if (!mn(f))
        return;
      let p = [];
      i.forEach((b, g) => {
        p.push(
          ...this._findMatches({
            key: b,
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
    if (!mn(s))
      return [];
    let o = [];
    if (br(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!mn(c))
          return;
        const { isMatch: p, score: b, indices: g } = i.searchIn(c);
        p && o.push({
          score: b,
          key: r,
          value: c,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: b } = i.searchIn(c);
      m && o.push({ score: p, key: r, value: c, norm: f, indices: b });
    }
    return o;
  }
}
Di.version = "7.1.0";
Di.createIndex = F0;
Di.parseIndex = S2;
Di.config = Te;
Di.parseQuery = W0;
L2(z2);
var Z2 = Object.defineProperty, G2 = (n, r, s) => r in n ? Z2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, V2 = (n, r, s) => G2(n, r + "", s);
let Y2 = class {
  constructor() {
    V2(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const o = SillyTavern.getContext(), c = o.uuidv4(), f = ((i = r?.custom) == null ? void 0 : i.stream) ?? !1;
    if (this.requestMap.set(c, {
      abortController: s?.abortController,
      isStream: f,
      options: s
    }), f)
      try {
        const m = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        s != null && s.onStart && await s.onStart(c);
        let p;
        for await (const b of m())
          p = b, s != null && s.onEntry && await s.onEntry(c, b);
        s != null && s.onFinish && await s.onFinish(c, p);
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    else
      try {
        s != null && s.onStart && await s.onStart(c);
        const m = await o.ConnectionManagerRequestService.sendRequest(
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
async function $2(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function _e(n, r, { escapeHtml: s = !0 } = {}) {
  await $2("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function Xd(n) {
  return w1(n);
}
function dv(n, r) {
  return b1(n, r);
}
function bo(n, r, s) {
  return S1(n, r, s);
}
function X2(n, r, s) {
  return R1(n, r, s);
}
function F2(n, r) {
  return j1(n, r);
}
function Q2(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return _1(n, { customStoryString: r, customInstructSettings: s });
}
function Ea(n) {
  return B1(n);
}
function K2() {
  return {
    prompt: Os[Ms.prompt],
    interval: Os[Ms.interval],
    position: Os[Ms.position],
    depth: Os[Ms.depth],
    role: Os[Ms.role]
  };
}
function J2(n, r) {
  return H1(n, r);
}
function W2({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: i,
  worldInfoBefore: o,
  worldInfoAfter: c,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: b,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: _,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: A
}, O) {
  return U1(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: i,
      worldInfoBefore: o,
      worldInfoAfter: c,
      bias: f,
      type: m,
      quietPrompt: p,
      quietImage: b,
      cyclePrompt: E,
      systemPromptOverride: _,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: A
    },
    O
  );
}
function e3(n) {
  return z1(n);
}
function t3(n) {
  return L1(n);
}
function n3(n, r, {
  characterOverride: s,
  isMarkdown: i,
  isPrompt: o,
  isEdit: c,
  depth: f
}) {
  return Z1(n, r, { characterOverride: s, isMarkdown: i, isPrompt: o, isEdit: c, depth: f });
}
function r3(n, r, { characterOverride: s = null } = {}) {
  return q1(n, r, { characterOverride: s });
}
async function a3(n, r) {
  return await D1(n, r);
}
function fv(n, {
  wiFormat: r
} = {}) {
  return P1(n, { wiFormat: r });
}
function Ds(n) {
  return I1(n);
}
function ey(n, {
  manualAvatarKey: r
} = {}) {
  return G1(n, { manualAvatarKey: r });
}
function Bf(n, r) {
  return k1(n, r);
}
class i3 {
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
var s3 = Object.defineProperty, u3 = (n, r, s) => r in n ? s3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, So = (n, r, s) => u3(n, typeof r != "symbol" ? r + "" : r, s);
class o3 {
  constructor(r) {
    So(this, "messages", []), So(this, "tokenizer"), So(this, "maxContext"), So(this, "currentTokenCount", 0), this.tokenizer = new i3(), this.maxContext = r;
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
    const s = r.filter((m) => m.content), i = s.map((m) => this.getTokenCount(m)), o = i.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += o, !0;
    let c = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], b = i[m];
      if (this.currentTokenCount + c + b <= this.maxContext)
        f.unshift(p), c += b;
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
async function ty(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: i,
  contextName: o,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: b,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var _, S, h, C, A, O, x, z, l, v, w, k, R, L;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const j = SillyTavern.getContext();
  let { description: P, personality: G, persona: X, scenario: Y, mesExamples: J, system: M, jailbreak: B } = p ? {
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
  const Q = n === "textgenerationwebui" ? (_ = j.getPresetManager("instruct")) == null ? void 0 : _.getCompletionPresetByName(i) : void 0, re = !!(Q != null && Q.enabled);
  let I = dv(J, re);
  function H() {
    var ye, Se;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return Xd();
    if (typeof f == "number")
      return f;
    let Ye;
    if (n === "textgenerationwebui") {
      const Ve = (ye = j.getPresetManager("textgenerationwebui")) == null ? void 0 : ye.getCompletionPresetByName(s);
      Ye = Ve?.max_length;
    } else {
      const Ve = (Se = j.getPresetManager("openai")) == null ? void 0 : Se.getCompletionPresetByName(s);
      Ye = Ve?.openai_max_context;
    }
    return typeof Ye == "number" ? Ye : Xd();
  }
  let ne = [];
  const oe = H();
  if (oe <= 0)
    return { result: [], warnings: ne };
  const q = new o3(oe), ee = j.ToolManager.isToolCallingSupported(), te = E?.start ?? 0, de = E != null && E.end ? E.end + 1 : void 0;
  let le = te === -1 && de === 0 ? [] : j.chat.slice(te, de).filter((ye) => {
    var Se;
    return !ye.is_system || ee && Array.isArray((Se = ye.extra) == null ? void 0 : Se.tool_invocations);
  });
  le = await Promise.all(
    le.map(async (ye, Se) => {
      var Ye, Ve;
      let nt = ye.mes, Er = ye.is_user ? Vg.USER_INPUT : Vg.AI_OUTPUT, Wn = { isPrompt: !0, depth: le.length - Se - 1 }, ht = n3(nt, Er, Wn);
      return ht = await a3(ye, ht), (Ye = ye?.extra) != null && Ye.append_title && (Ve = ye?.extra) != null && Ve.title && (ht = `${ht}

${ye.extra.title}`), {
        ...ye,
        mes: ht,
        index: Se
      };
    })
  );
  const he = le.map((ye) => A1 ? `${ye.name}: ${ye.mes}` : ye.mes).reverse(), { worldInfoString: Re, worldInfoBefore: be, worldInfoAfter: me, worldInfoExamples: ge, worldInfoDepth: Pe, anBefore: xe, anAfter: Je } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await j.getWorldInfoPrompt(he, oe, !1);
  for (const ye of ge) {
    const Se = ye.content;
    if (Se.length === 0)
      continue;
    const Ye = bo(Se, Sa, $r), Ve = dv(Ye, re);
    ye.position === T1.before ? I.unshift(...Ve) : I.push(...Ve);
  }
  function lt() {
    const ye = [];
    for (let Se = le.length - 1; Se >= 0; Se--) {
      const Ye = le[Se], Ve = Ye.name === "System" && !Ye.is_user ? "system" : Ye.is_user ? "user" : "assistant";
      ye.unshift({
        role: Ve,
        content: m && Ve != "system" ? `${Ye.name}: ${Ye.mes}` : Ye.mes,
        source: Ye
      });
    }
    q.addMany(ye);
  }
  if (n === "textgenerationwebui") {
    const ye = [...I];
    I && (I = X2(I, Sa, $r));
    const Se = (S = j.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(c);
    Se && (M = j.powerUserSettings.prefer_character_prompt && M ? M : bo(Se.content, Sa, $r), M = re ? F2(
      j.substituteParams(M, Sa, $r, Se.content),
      Q
    ) : M);
    const Ye = {
      description: P,
      personality: G,
      persona: j.powerUserSettings.persona_description_position == Zg.IN_PROMPT ? X : "",
      scenario: Y,
      system: M,
      char: $r,
      user: Sa,
      wiBefore: be,
      wiAfter: me,
      loreBefore: be,
      loreAfter: me,
      mesExamples: I.join(""),
      mesExamplesRaw: ye.join("")
    }, Ve = (h = j.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(o);
    let nt = Q2(Ye, {
      customInstructSettings: Q,
      customStoryString: Ve?.story_string
    });
    nt && q.add({ role: "system", content: nt, ignoreInstruct: !0 }), lt();
  } else {
    let ye = function(Zt) {
      const $t = gn.find((za) => za.identifier === Zt);
      if ($t)
        return $t;
      const uu = nt.prompts.find((za) => za.identifier === Zt);
      if (uu)
        return uu;
    }, Se = e3(le), Ye = t3(I);
    async function Ve() {
      let [Zt, $t] = await W2(
        {
          name2: $r,
          charDescription: P,
          charPersonality: G,
          Scenario: Y,
          worldInfoBefore: be,
          worldInfoAfter: me,
          extensionPrompts: j.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: M,
          jailbreakPromptOverride: B,
          personaDescription: X,
          messages: Se,
          messageExamples: Ye
        },
        !1
      );
      q.addMany(Zt);
    }
    if (!s)
      return ne.push("No preset name provided. Using default preset."), await Ve(), { result: q.getMessages(), warnings: ne };
    const nt = (C = j.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!nt)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ne.push(`Preset not found: ${s}. Using current preset.`), Ve(), { result: q.getMessages(), warnings: ne };
    let Er = (A = nt.prompt_order) == null ? void 0 : A.find((Zt) => Zt.character_id === xn);
    if (!Er && nt.prompt_order && nt.prompt_order.length > 0 && (Er = nt.prompt_order[0]), !Er)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ne.push(`No prompt order found for preset: ${s}. Using current preset.`), Ve(), { result: q.getMessages(), warnings: ne };
    const Wn = Y && nt.scenario_format ? j.substituteParams(nt.scenario_format) : "", ht = G && nt.personality_format ? j.substituteParams(nt.personality_format) : "", Bn = j.substituteParams(nt.group_nudge_prompt), qt = nt.impersonation_prompt ? j.substituteParams(nt.impersonation_prompt) : "", gn = [];
    g || gn.push(
      {
        role: "system",
        content: fv(be, { wiFormat: nt.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: fv(me, { wiFormat: nt.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || gn.push(
      { role: "system", content: P, identifier: "charDescription" },
      { role: "system", content: ht, identifier: "charPersonality" },
      { role: "system", content: Wn, identifier: "scenario" }
    ), gn.push(
      { role: "system", content: qt, identifier: "impersonate" },
      { role: "system", content: Bn, identifier: "groupNudge" }
    );
    const na = j.extensionPrompts["1_memory"];
    na && na.value && gn.push({
      role: Ea(na.role),
      content: na.value,
      identifier: "summary",
      position: Ds(na.position)
    });
    const ra = j.extensionPrompts["2_floating_prompt"];
    !b && ra && ra.value && gn.push({
      role: Ea(ra.role),
      content: ra.value,
      identifier: "authorsNote",
      position: Ds(ra.position)
    });
    const er = j.extensionPrompts["3_vectors"];
    er && er.value && gn.push({
      role: "system",
      content: er.value,
      identifier: "vectorsMemory",
      position: Ds(er.position)
    });
    const Un = j.extensionPrompts["4_vectors_data_bank"];
    Un && Un.value && gn.push({
      role: Ea(Un.role),
      content: Un.value,
      identifier: "vectorsDataBank",
      position: Ds(Un.position)
    });
    const vn = j.extensionPrompts.chromadb;
    vn && vn.value && gn.push({
      role: "system",
      content: vn.value,
      identifier: "smartContext",
      position: Ds(vn.position)
    }), !p && j.powerUserSettings.persona_description && j.powerUserSettings.persona_description_position === Zg.IN_PROMPT && gn.push({
      role: "system",
      content: j.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Er.order.forEach((Zt) => {
      if (!Zt.enabled)
        return;
      const $t = ye(Zt.identifier);
      if ($t && $t.content) {
        q.add({
          role: $t.role ?? "system",
          content: j.substituteParams($t.content)
        });
        return;
      }
      Zt.identifier === "chatHistory" && lt();
    });
  }
  const Jn = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ye in j.extensionPrompts)
    if (Object.hasOwn(j.extensionPrompts, ye)) {
      const Se = j.extensionPrompts[ye];
      if (Jn.includes(ye) || !j.extensionPrompts[ye].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(Se.position) || typeof Se.filter == "function" && !await Se.filter()) continue;
      const Ye = {
        role: Ea(Se.role) ?? "system",
        content: Se.value
      };
      if (Se.position === wa.BEFORE_PROMPT)
        q.insert(Se.depth, Ye);
      else if (Se.position === wa.IN_PROMPT) {
        const Ve = q.getMessages();
        q.insert(Ve.length - Se.depth, Ye);
      }
    }
  for (const ye of Pe) {
    const Se = q.getMessages();
    q.insert(Se.length - ye.depth, {
      role: Ea(ye.role),
      content: ye.entries.join(`
`)
    });
  }
  if (!p) {
    const ye = J2(pn, Number(xn));
    if (pn && Array.isArray(ye) && ye.length > 0)
      ye.filter((Se) => Se.text).forEach((Se, Ye) => {
        const Ve = q.getMessages();
        q.insert(Ve.length - Se.depth, { role: Se.role, content: Se.text });
      });
    else {
      const Se = bo(
        (v = (l = (z = (x = (O = j.characters[xn]) == null ? void 0 : O.data) == null ? void 0 : x.extensions) == null ? void 0 : z.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : v.trim(),
        Sa,
        $r
      ) || "";
      if (Se) {
        const Ye = C1, Ve = ((L = (R = (k = (w = j.characters[xn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : R.depth_prompt) == null ? void 0 : L.role) ?? E1, nt = q.getMessages();
        q.insert(nt.length - Ye, {
          role: Ea(Ve),
          content: Se
        });
      }
    }
  }
  let On = -1;
  if (!b) {
    const ye = K2();
    if (ye.prompt) {
      ye.prompt = bo(ye.prompt, Sa, $r);
      const Se = { role: Ea(ye.role), content: ye.prompt };
      switch (ye.position) {
        case wa.IN_PROMPT:
          q.insert(1, Se), On = 1;
          break;
        case wa.IN_CHAT:
          On = q.getMessages().length - ye.depth, q.insert(On, Se);
          break;
        case wa.BEFORE_PROMPT:
          q.addFront(Se), On = 0;
          break;
      }
    }
  }
  return On >= 0 && (xe.length > 0 && (q.insert(On, { role: "system", content: xe.join(`
`) }), On++), Je.length > 0 && q.insert(On + 1, { role: "system", content: Je.join(`
`) })), { result: q.getMessages(), warnings: ne };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function hv(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), s.push.apply(s, i);
  }
  return s;
}
function Fn(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? hv(Object(s), !0).forEach(function(i) {
      l3(n, i, s[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : hv(Object(s)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(s, i));
    });
  }
  return n;
}
function al(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? al = function(r) {
    return typeof r;
  } : al = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, al(n);
}
function l3(n, r, s) {
  return r in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function Sr() {
  return Sr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
    }
    return n;
  }, Sr.apply(this, arguments);
}
function c3(n, r) {
  if (n == null) return {};
  var s = {}, i = Object.keys(n), o, c;
  for (c = 0; c < i.length; c++)
    o = i[c], !(r.indexOf(o) >= 0) && (s[o] = n[o]);
  return s;
}
function d3(n, r) {
  if (n == null) return {};
  var s = c3(n, r), i, o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (o = 0; o < c.length; o++)
      i = c[o], !(r.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (s[i] = n[i]);
  }
  return s;
}
var f3 = "1.15.6";
function yr(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var wr = yr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), nu = yr(/Edge/i), pv = yr(/firefox/i), Fs = yr(/safari/i) && !yr(/chrome/i) && !yr(/android/i), Uf = yr(/iP(ad|od|hone)/i), ny = yr(/chrome/i) && yr(/android/i), ry = {
  capture: !1,
  passive: !1
};
function He(n, r, s) {
  n.addEventListener(r, s, !wr && ry);
}
function Ue(n, r, s) {
  n.removeEventListener(r, s, !wr && ry);
}
function pl(n, r) {
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
function ay(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Pn(n, r, s, i) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && pl(n, r) : pl(n, r)) || i && n === s)
        return n;
      if (n === s) break;
    } while (n = ay(n));
  }
  return null;
}
var mv = /\s+/g;
function fn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var i = (" " + n.className + " ").replace(mv, " ").replace(" " + r + " ", " ");
      n.className = (i + (s ? " " + r : "")).replace(mv, " ");
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
function Mi(n, r) {
  var s = "";
  if (typeof n == "string")
    s = n;
  else
    do {
      var i = ke(n, "transform");
      i && i !== "none" && (s = i + " " + s);
    } while (!r && (n = n.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(s);
}
function iy(n, r, s) {
  if (n) {
    var i = n.getElementsByTagName(r), o = 0, c = i.length;
    if (s)
      for (; o < c; o++)
        s(i[o], o);
    return i;
  }
  return [];
}
function $n() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function bt(n, r, s, i, o) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, f, m, p, b, g, E;
    if (n !== window && n.parentNode && n !== $n() ? (c = n.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, b = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, b = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (o = o || n.parentNode, !wr))
      do
        if (o && o.getBoundingClientRect && (ke(o, "transform") !== "none" || s && ke(o, "position") !== "static")) {
          var _ = o.getBoundingClientRect();
          f -= _.top + parseInt(ke(o, "border-top-width")), m -= _.left + parseInt(ke(o, "border-left-width")), p = f + c.height, b = m + c.width;
          break;
        }
      while (o = o.parentNode);
    if (i && n !== window) {
      var S = Mi(o || n), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, g /= C, p = f + g, b = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: b,
      width: E,
      height: g
    };
  }
}
function gv(n, r, s) {
  for (var i = Jr(n, !0), o = bt(n)[r]; i; ) {
    var c = bt(i)[s], f = void 0;
    if (f = o >= c, !f) return i;
    if (i === $n()) break;
    i = Jr(i, !1);
  }
  return !1;
}
function ji(n, r, s, i) {
  for (var o = 0, c = 0, f = n.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Ae.ghost && (i || f[c] !== Ae.dragged) && Pn(f[c], s.draggable, n, !1)) {
      if (o === r)
        return f[c];
      o++;
    }
    c++;
  }
  return null;
}
function Hf(n, r) {
  for (var s = n.lastElementChild; s && (s === Ae.ghost || ke(s, "display") === "none" || r && !pl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Tn(n, r) {
  var s = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Ae.clone && (!r || pl(n, r)) && s++;
  return s;
}
function vv(n) {
  var r = 0, s = 0, i = $n();
  if (n)
    do {
      var o = Mi(n), c = o.a, f = o.d;
      r += n.scrollLeft * c, s += n.scrollTop * f;
    } while (n !== i && (n = n.parentNode));
  return [r, s];
}
function h3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var i in r)
        if (r.hasOwnProperty(i) && r[i] === n[s][i]) return Number(s);
    }
  return -1;
}
function Jr(n, r) {
  if (!n || !n.getBoundingClientRect) return $n();
  var s = n, i = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var o = ke(s);
      if (s.clientWidth < s.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return $n();
        if (i || r) return s;
        i = !0;
      }
    }
  while (s = s.parentNode);
  return $n();
}
function p3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function Fd(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Qs;
function sy(n, r) {
  return function() {
    if (!Qs) {
      var s = arguments, i = this;
      s.length === 1 ? n.call(i, s[0]) : n.apply(i, s), Qs = setTimeout(function() {
        Qs = void 0;
      }, r);
    }
  };
}
function m3() {
  clearTimeout(Qs), Qs = void 0;
}
function uy(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function oy(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function ly(n, r, s) {
  var i = {};
  return Array.from(n.children).forEach(function(o) {
    var c, f, m, p;
    if (!(!Pn(o, r.draggable, n, !1) || o.animated || o === s)) {
      var b = bt(o);
      i.left = Math.min((c = i.left) !== null && c !== void 0 ? c : 1 / 0, b.left), i.top = Math.min((f = i.top) !== null && f !== void 0 ? f : 1 / 0, b.top), i.right = Math.max((m = i.right) !== null && m !== void 0 ? m : -1 / 0, b.right), i.bottom = Math.max((p = i.bottom) !== null && p !== void 0 ? p : -1 / 0, b.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var tn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function g3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(o) {
          if (!(ke(o, "display") === "none" || o === Ae.ghost)) {
            n.push({
              target: o,
              rect: bt(o)
            });
            var c = Fn({}, n[n.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = Mi(o, !0);
              f && (c.top -= f.f, c.left -= f.e);
            }
            o.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(i) {
      n.push(i);
    },
    removeAnimationState: function(i) {
      n.splice(h3(n, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof i == "function" && i();
        return;
      }
      var c = !1, f = 0;
      n.forEach(function(m) {
        var p = 0, b = m.target, g = b.fromRect, E = bt(b), _ = b.prevFromRect, S = b.prevToRect, h = m.rect, C = Mi(b, !0);
        C && (E.top -= C.f, E.left -= C.e), b.toRect = E, b.thisAnimationDuration && Fd(_, E) && !Fd(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = y3(h, _, S, o.options)), Fd(E, g) || (b.prevFromRect = g, b.prevToRect = E, p || (p = o.options.animation), o.animate(b, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(b.animationResetTimer), b.animationResetTimer = setTimeout(function() {
          b.animationTime = 0, b.prevFromRect = null, b.fromRect = null, b.prevToRect = null, b.thisAnimationDuration = null;
        }, p), b.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof i == "function" && i();
      }, f) : typeof i == "function" && i(), n = [];
    },
    animate: function(i, o, c, f) {
      if (f) {
        ke(i, "transition", ""), ke(i, "transform", "");
        var m = Mi(this.el), p = m && m.a, b = m && m.d, g = (o.left - c.left) / (p || 1), E = (o.top - c.top) / (b || 1);
        i.animatingX = !!g, i.animatingY = !!E, ke(i, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = v3(i), ke(i, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), ke(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          ke(i, "transition", ""), ke(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, f);
      }
    }
  };
}
function v3(n) {
  return n.offsetWidth;
}
function y3(n, r, s, i) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * i.animation;
}
var wi = [], Qd = {
  initializeByDefault: !0
}, ru = {
  mount: function(r) {
    for (var s in Qd)
      Qd.hasOwnProperty(s) && !(s in r) && (r[s] = Qd[s]);
    wi.forEach(function(i) {
      if (i.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), wi.push(r);
  },
  pluginEvent: function(r, s, i) {
    var o = this;
    this.eventCanceled = !1, i.cancel = function() {
      o.eventCanceled = !0;
    };
    var c = r + "Global";
    wi.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](Fn({
        sortable: s
      }, i)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](Fn({
        sortable: s
      }, i)));
    });
  },
  initializePlugins: function(r, s, i, o) {
    wi.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var b = new m(r, s, r.options);
        b.sortable = r, b.options = r.options, r[p] = b, Sr(i, b.defaults);
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
    return wi.forEach(function(o) {
      typeof o.eventProperties == "function" && Sr(i, o.eventProperties.call(s[o.pluginName], r));
    }), i;
  },
  modifyOption: function(r, s, i) {
    var o;
    return wi.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (o = c.optionListeners[s].call(r[c.pluginName], i));
    }), o;
  }
};
function _3(n) {
  var r = n.sortable, s = n.rootEl, i = n.name, o = n.targetEl, c = n.cloneEl, f = n.toEl, m = n.fromEl, p = n.oldIndex, b = n.newIndex, g = n.oldDraggableIndex, E = n.newDraggableIndex, _ = n.originalEvent, S = n.putSortable, h = n.extraEventProperties;
  if (r = r || s && s[tn], !!r) {
    var C, A = r.options, O = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !wr && !nu ? C = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(i, !0, !0)), C.to = f || s, C.from = m || s, C.item = o || s, C.clone = c, C.oldIndex = p, C.newIndex = b, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = _, C.pullMode = S ? S.lastPutMode : void 0;
    var x = Fn(Fn({}, h), ru.getEventProperties(i, r));
    for (var z in x)
      C[z] = x[z];
    s && s.dispatchEvent(C), A[O] && A[O].call(r, C);
  }
}
var b3 = ["evt"], Wt = function(r, s) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.evt, c = d3(i, b3);
  ru.pluginEvent.bind(Ae)(r, s, Fn({
    dragEl: fe,
    parentEl: ft,
    ghostEl: Me,
    rootEl: at,
    nextEl: Aa,
    lastDownEl: il,
    cloneEl: ut,
    cloneHidden: Kr,
    dragStarted: Gs,
    putSortable: Dt,
    activeSortable: Ae.active,
    originalEvent: o,
    oldIndex: xi,
    oldDraggableIndex: Ks,
    newIndex: hn,
    newDraggableIndex: Qr,
    hideGhostForTarget: hy,
    unhideGhostForTarget: py,
    cloneNowHidden: function() {
      Kr = !0;
    },
    cloneNowShown: function() {
      Kr = !1;
    },
    dispatchSortableEvent: function(m) {
      Vt({
        sortable: s,
        name: m,
        originalEvent: o
      });
    }
  }, c));
};
function Vt(n) {
  _3(Fn({
    putSortable: Dt,
    cloneEl: ut,
    targetEl: fe,
    rootEl: at,
    oldIndex: xi,
    oldDraggableIndex: Ks,
    newIndex: hn,
    newDraggableIndex: Qr
  }, n));
}
var fe, ft, Me, at, Aa, il, ut, Kr, xi, hn, Ks, Qr, wo, Dt, Ti = !1, ml = !1, gl = [], Ca, Dn, Kd, Jd, yv, _v, Gs, Ei, Js, Ws = !1, Eo = !1, sl, Bt, Wd = [], Sf = !1, vl = [], Cl = typeof document < "u", Co = Uf, bv = nu || wr ? "cssFloat" : "float", S3 = Cl && !ny && !Uf && "draggable" in document.createElement("div"), cy = (function() {
  if (Cl) {
    if (wr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), dy = function(r, s) {
  var i = ke(r), o = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), c = ji(r, 0, s), f = ji(r, 1, s), m = c && ke(c), p = f && ke(f), b = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + bt(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + bt(f).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || b >= o && i[bv] === "none" || f && i[bv] === "none" && b + g > o) ? "vertical" : "horizontal";
}, w3 = function(r, s, i) {
  var o = i ? r.left : r.top, c = i ? r.right : r.bottom, f = i ? r.width : r.height, m = i ? s.left : s.top, p = i ? s.right : s.bottom, b = i ? s.width : s.height;
  return o === m || c === p || o + f / 2 === m + b / 2;
}, E3 = function(r, s) {
  var i;
  return gl.some(function(o) {
    var c = o[tn].options.emptyInsertThreshold;
    if (!(!c || Hf(o))) {
      var f = bt(o), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return i = o;
    }
  }), i;
}, fy = function(r) {
  function s(c, f) {
    return function(m, p, b, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (c == null && (f || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (f && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, p, b, g), f)(m, p, b, g);
      var _ = (f ? m : p).options.group.name;
      return c === !0 || typeof c == "string" && c === _ || c.join && c.indexOf(_) > -1;
    };
  }
  var i = {}, o = r.group;
  (!o || al(o) != "object") && (o = {
    name: o
  }), i.name = o.name, i.checkPull = s(o.pull, !0), i.checkPut = s(o.put), i.revertClone = o.revertClone, r.group = i;
}, hy = function() {
  !cy && Me && ke(Me, "display", "none");
}, py = function() {
  !cy && Me && ke(Me, "display", "");
};
Cl && !ny && document.addEventListener("click", function(n) {
  if (ml)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), ml = !1, !1;
}, !0);
var ka = function(r) {
  if (fe) {
    r = r.touches ? r.touches[0] : r;
    var s = E3(r.clientX, r.clientY);
    if (s) {
      var i = {};
      for (var o in r)
        r.hasOwnProperty(o) && (i[o] = r[o]);
      i.target = i.rootEl = s, i.preventDefault = void 0, i.stopPropagation = void 0, s[tn]._onDragOver(i);
    }
  }
}, C3 = function(r) {
  fe && fe.parentNode[tn]._isOutsideThisEl(r.target);
};
function Ae(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = Sr({}, r), n[tn] = this;
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
      return dy(n, this.options);
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
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Fs || Uf),
    emptyInsertThreshold: 5
  };
  ru.initializePlugins(this, n, s);
  for (var i in s)
    !(i in r) && (r[i] = s[i]);
  fy(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : S3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(n, "pointerdown", this._onTapStart) : (He(n, "mousedown", this._onTapStart), He(n, "touchstart", this._onTapStart)), this.nativeDraggable && (He(n, "dragover", this), He(n, "dragenter", this)), gl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Sr(this, g3());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ei = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, fe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, i = this.el, o = this.options, c = o.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, b = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = o.filter;
      if (R3(i), !fe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !b.isContentEditable && !(!this.nativeDraggable && Fs && p && p.tagName.toUpperCase() === "SELECT") && (p = Pn(p, o.draggable, i, !1), !(p && p.animated) && il !== p)) {
        if (xi = Tn(p), Ks = Tn(p, o.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Vt({
              sortable: s,
              rootEl: b,
              name: "filter",
              targetEl: p,
              toEl: i,
              fromEl: i
            }), Wt("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = Pn(b, E.trim(), i, !1), E)
            return Vt({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: i,
              toEl: i
            }), Wt("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          c && r.preventDefault();
          return;
        }
        o.handle && !Pn(b, o.handle, i, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, i) {
    var o = this, c = o.el, f = o.options, m = c.ownerDocument, p;
    if (i && !fe && i.parentNode === c) {
      var b = bt(i);
      if (at = c, fe = i, ft = fe.parentNode, Aa = fe.nextSibling, il = i, wo = f.group, Ae.dragged = fe, Ca = {
        target: fe,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, yv = Ca.clientX - b.left, _v = Ca.clientY - b.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, fe.style["will-change"] = "all", p = function() {
        if (Wt("delayEnded", o, {
          evt: r
        }), Ae.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !pv && o.nativeDraggable && (fe.draggable = !0), o._triggerDragStart(r, s), Vt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), fn(fe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        iy(fe, g.trim(), ef);
      }), He(m, "dragover", ka), He(m, "mousemove", ka), He(m, "touchmove", ka), f.supportPointer ? (He(m, "pointerup", o._onDrop), !this.nativeDraggable && He(m, "pointercancel", o._onDrop)) : (He(m, "mouseup", o._onDrop), He(m, "touchend", o._onDrop), He(m, "touchcancel", o._onDrop)), pv && this.nativeDraggable && (this.options.touchStartThreshold = 4, fe.draggable = !0), Wt("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(nu || wr))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (He(m, "pointerup", o._disableDelayedDrag), He(m, "pointercancel", o._disableDelayedDrag)) : (He(m, "mouseup", o._disableDelayedDrag), He(m, "touchend", o._disableDelayedDrag), He(m, "touchcancel", o._disableDelayedDrag)), He(m, "mousemove", o._delayedDragTouchMoveHandler), He(m, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && He(m, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    fe && ef(fe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(fe, "dragend", this), He(at, "dragstart", this._onDragStart));
    try {
      document.selection ? ul(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (Ti = !1, at && fe) {
      Wt("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", C3);
      var i = this.options;
      !r && fn(fe, i.dragClass, !1), fn(fe, i.ghostClass, !0), Ae.active = this, r && this._appendGhost(), Vt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Dn) {
      this._lastX = Dn.clientX, this._lastY = Dn.clientY, hy();
      for (var r = document.elementFromPoint(Dn.clientX, Dn.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Dn.clientX, Dn.clientY), r !== s); )
        s = r;
      if (fe.parentNode[tn]._isOutsideThisEl(r), s)
        do {
          if (s[tn]) {
            var i = void 0;
            if (i = s[tn]._onDragOver({
              clientX: Dn.clientX,
              clientY: Dn.clientY,
              target: r,
              rootEl: s
            }), i && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = ay(s));
      py();
    }
  },
  _onTouchMove: function(r) {
    if (Ca) {
      var s = this.options, i = s.fallbackTolerance, o = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Me && Mi(Me, !0), m = Me && f && f.a, p = Me && f && f.d, b = Co && Bt && vv(Bt), g = (c.clientX - Ca.clientX + o.x) / (m || 1) + (b ? b[0] - Wd[0] : 0) / (m || 1), E = (c.clientY - Ca.clientY + o.y) / (p || 1) + (b ? b[1] - Wd[1] : 0) / (p || 1);
      if (!Ae.active && !Ti) {
        if (i && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < i)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += g - (Kd || 0), f.f += E - (Jd || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var _ = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        ke(Me, "webkitTransform", _), ke(Me, "mozTransform", _), ke(Me, "msTransform", _), ke(Me, "transform", _), Kd = g, Jd = E, Dn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : at, s = bt(fe, !0, Co, !0, r), i = this.options;
      if (Co) {
        for (Bt = r; ke(Bt, "position") === "static" && ke(Bt, "transform") === "none" && Bt !== document; )
          Bt = Bt.parentNode;
        Bt !== document.body && Bt !== document.documentElement ? (Bt === document && (Bt = $n()), s.top += Bt.scrollTop, s.left += Bt.scrollLeft) : Bt = $n(), Wd = vv(Bt);
      }
      Me = fe.cloneNode(!0), fn(Me, i.ghostClass, !1), fn(Me, i.fallbackClass, !0), fn(Me, i.dragClass, !0), ke(Me, "transition", ""), ke(Me, "transform", ""), ke(Me, "box-sizing", "border-box"), ke(Me, "margin", 0), ke(Me, "top", s.top), ke(Me, "left", s.left), ke(Me, "width", s.width), ke(Me, "height", s.height), ke(Me, "opacity", "0.8"), ke(Me, "position", Co ? "absolute" : "fixed"), ke(Me, "zIndex", "100000"), ke(Me, "pointerEvents", "none"), Ae.ghost = Me, r.appendChild(Me), ke(Me, "transform-origin", yv / parseInt(Me.style.width) * 100 + "% " + _v / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var i = this, o = r.dataTransfer, c = i.options;
    if (Wt("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    Wt("setupClone", this), Ae.eventCanceled || (ut = oy(fe), ut.removeAttribute("id"), ut.draggable = !1, ut.style["will-change"] = "", this._hideClone(), fn(ut, this.options.chosenClass, !1), Ae.clone = ut), i.cloneId = ul(function() {
      Wt("clone", i), !Ae.eventCanceled && (i.options.removeCloneOnHide || at.insertBefore(ut, fe), i._hideClone(), Vt({
        sortable: i,
        name: "clone"
      }));
    }), !s && fn(fe, c.dragClass, !0), s ? (ml = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (Ue(document, "mouseup", i._onDrop), Ue(document, "touchend", i._onDrop), Ue(document, "touchcancel", i._onDrop), o && (o.effectAllowed = "move", c.setData && c.setData.call(i, o, fe)), He(document, "drop", i), ke(fe, "transform", "translateZ(0)")), Ti = !0, i._dragStartId = ul(i._dragStarted.bind(i, s, r)), He(document, "selectstart", i), Gs = !0, window.getSelection().removeAllRanges(), Fs && ke(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, i = r.target, o, c, f, m = this.options, p = m.group, b = Ae.active, g = wo === p, E = m.sort, _ = Dt || b, S, h = this, C = !1;
    if (Sf) return;
    function A(Q, re) {
      Wt(Q, h, Fn({
        evt: r,
        isOwner: g,
        axis: S ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: c,
        canSort: E,
        fromSortable: _,
        target: i,
        completed: x,
        onMove: function(H, ne) {
          return ko(at, s, fe, o, H, bt(H), r, ne);
        },
        changed: z
      }, re));
    }
    function O() {
      A("dragOverAnimationCapture"), h.captureAnimationState(), h !== _ && _.captureAnimationState();
    }
    function x(Q) {
      return A("dragOverCompleted", {
        insertion: Q
      }), Q && (g ? b._hideClone() : b._showClone(h), h !== _ && (fn(fe, Dt ? Dt.options.ghostClass : b.options.ghostClass, !1), fn(fe, m.ghostClass, !0)), Dt !== h && h !== Ae.active ? Dt = h : h === Ae.active && Dt && (Dt = null), _ === h && (h._ignoreWhileAnimating = i), h.animateAll(function() {
        A("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (i === fe && !fe.animated || i === s && !i.animated) && (Ei = null), !m.dragoverBubble && !r.rootEl && i !== document && (fe.parentNode[tn]._isOutsideThisEl(r.target), !Q && ka(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function z() {
      hn = Tn(fe), Qr = Tn(fe, m.draggable), Vt({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: hn,
        newDraggableIndex: Qr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), i = Pn(i, m.draggable, s, !0), A("dragOver"), Ae.eventCanceled) return C;
    if (fe.contains(r.target) || i.animated && i.animatingX && i.animatingY || h._ignoreWhileAnimating === i)
      return x(!1);
    if (ml = !1, b && !m.disabled && (g ? E || (f = ft !== at) : Dt === this || (this.lastPutMode = wo.checkPull(this, b, fe, r)) && p.checkPut(this, b, fe, r))) {
      if (S = this._getDirection(r, i) === "vertical", o = bt(fe), A("dragOverValid"), Ae.eventCanceled) return C;
      if (f)
        return ft = at, O(), this._hideClone(), A("revert"), Ae.eventCanceled || (Aa ? at.insertBefore(fe, Aa) : at.appendChild(fe)), x(!0);
      var l = Hf(s, m.draggable);
      if (!l || x3(r, S, this) && !l.animated) {
        if (l === fe)
          return x(!1);
        if (l && s === r.target && (i = l), i && (c = bt(i)), ko(at, s, fe, o, i, c, r, !!i) !== !1)
          return O(), l && l.nextSibling ? s.insertBefore(fe, l.nextSibling) : s.appendChild(fe), ft = s, z(), x(!0);
      } else if (l && T3(r, S, this)) {
        var v = ji(s, 0, m, !0);
        if (v === fe)
          return x(!1);
        if (i = v, c = bt(i), ko(at, s, fe, o, i, c, r, !1) !== !1)
          return O(), s.insertBefore(fe, v), ft = s, z(), x(!0);
      } else if (i.parentNode === s) {
        c = bt(i);
        var w = 0, k, R = fe.parentNode !== s, L = !w3(fe.animated && fe.toRect || o, i.animated && i.toRect || c, S), j = S ? "top" : "left", P = gv(i, "top", "top") || gv(fe, "top", "top"), G = P ? P.scrollTop : void 0;
        Ei !== i && (k = c[j], Ws = !1, Eo = !L && m.invertSwap || R), w = N3(r, i, c, S, L ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Eo, Ei === i);
        var X;
        if (w !== 0) {
          var Y = Tn(fe);
          do
            Y -= w, X = ft.children[Y];
          while (X && (ke(X, "display") === "none" || X === Me));
        }
        if (w === 0 || X === i)
          return x(!1);
        Ei = i, Js = w;
        var J = i.nextElementSibling, M = !1;
        M = w === 1;
        var B = ko(at, s, fe, o, i, c, r, M);
        if (B !== !1)
          return (B === 1 || B === -1) && (M = B === 1), Sf = !0, setTimeout(A3, 30), O(), M && !J ? s.appendChild(fe) : i.parentNode.insertBefore(fe, M ? J : i), P && uy(P, 0, G - P.scrollTop), ft = fe.parentNode, k !== void 0 && !Eo && (sl = Math.abs(k - bt(i)[j])), z(), x(!0);
      }
      if (s.contains(fe))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", ka), Ue(document, "mousemove", ka), Ue(document, "touchmove", ka);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._onDrop), Ue(r, "touchend", this._onDrop), Ue(r, "pointerup", this._onDrop), Ue(r, "pointercancel", this._onDrop), Ue(r, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, i = this.options;
    if (hn = Tn(fe), Qr = Tn(fe, i.draggable), Wt("drop", this, {
      evt: r
    }), ft = fe && fe.parentNode, hn = Tn(fe), Qr = Tn(fe, i.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    Ti = !1, Eo = !1, Ws = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), wf(this.cloneId), wf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fs && ke(document.body, "user-select", ""), ke(fe, "transform", ""), r && (Gs && (r.cancelable && r.preventDefault(), !i.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (at === ft || Dt && Dt.lastPutMode !== "clone") && ut && ut.parentNode && ut.parentNode.removeChild(ut), fe && (this.nativeDraggable && Ue(fe, "dragend", this), ef(fe), fe.style["will-change"] = "", Gs && !Ti && fn(fe, Dt ? Dt.options.ghostClass : this.options.ghostClass, !1), fn(fe, this.options.chosenClass, !1), Vt({
      sortable: this,
      name: "unchoose",
      toEl: ft,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), at !== ft ? (hn >= 0 && (Vt({
      rootEl: ft,
      name: "add",
      toEl: ft,
      fromEl: at,
      originalEvent: r
    }), Vt({
      sortable: this,
      name: "remove",
      toEl: ft,
      originalEvent: r
    }), Vt({
      rootEl: ft,
      name: "sort",
      toEl: ft,
      fromEl: at,
      originalEvent: r
    }), Vt({
      sortable: this,
      name: "sort",
      toEl: ft,
      originalEvent: r
    })), Dt && Dt.save()) : hn !== xi && hn >= 0 && (Vt({
      sortable: this,
      name: "update",
      toEl: ft,
      originalEvent: r
    }), Vt({
      sortable: this,
      name: "sort",
      toEl: ft,
      originalEvent: r
    })), Ae.active && ((hn == null || hn === -1) && (hn = xi, Qr = Ks), Vt({
      sortable: this,
      name: "end",
      toEl: ft,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Wt("nulling", this), at = fe = ft = Me = Aa = ut = il = Kr = Ca = Dn = Gs = hn = Qr = xi = Ks = Ei = Js = Dt = wo = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, vl.forEach(function(r) {
      r.checked = !0;
    }), vl.length = Kd = Jd = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        fe && (this._onDragOver(r), k3(r));
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
    for (var r = [], s, i = this.el.children, o = 0, c = i.length, f = this.options; o < c; o++)
      s = i[o], Pn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || M3(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var i = {}, o = this.el;
    this.toArray().forEach(function(c, f) {
      var m = o.children[f];
      Pn(m, this.options.draggable, o, !1) && (i[c] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(c) {
      i[c] && (o.removeChild(i[c]), o.appendChild(i[c]));
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
    return Pn(r, s || this.options.draggable, this.el, !1);
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
    var o = ru.modifyOption(this, r, s);
    typeof o < "u" ? i[r] = o : i[r] = s, r === "group" && fy(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Wt("destroy", this);
    var r = this.el;
    r[tn] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gl.splice(gl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Kr) {
      if (Wt("hideClone", this), Ae.eventCanceled) return;
      ke(ut, "display", "none"), this.options.removeCloneOnHide && ut.parentNode && ut.parentNode.removeChild(ut), Kr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Kr) {
      if (Wt("showClone", this), Ae.eventCanceled) return;
      fe.parentNode == at && !this.options.group.revertClone ? at.insertBefore(ut, fe) : Aa ? at.insertBefore(ut, Aa) : at.appendChild(ut), this.options.group.revertClone && this.animate(fe, ut), ke(ut, "display", ""), Kr = !1;
    }
  }
};
function k3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function ko(n, r, s, i, o, c, f, m) {
  var p, b = n[tn], g = b.options.onMove, E;
  return window.CustomEvent && !wr && !nu ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = s, p.draggedRect = i, p.related = o || r, p.relatedRect = c || bt(r), p.willInsertAfter = m, p.originalEvent = f, n.dispatchEvent(p), g && (E = g.call(b, p, f)), E;
}
function ef(n) {
  n.draggable = !1;
}
function A3() {
  Sf = !1;
}
function T3(n, r, s) {
  var i = bt(ji(s.el, 0, s.options, !0)), o = ly(s.el, s.options, Me), c = 10;
  return r ? n.clientX < o.left - c || n.clientY < i.top && n.clientX < i.right : n.clientY < o.top - c || n.clientY < i.bottom && n.clientX < i.left;
}
function x3(n, r, s) {
  var i = bt(Hf(s.el, s.options.draggable)), o = ly(s.el, s.options, Me), c = 10;
  return r ? n.clientX > o.right + c || n.clientY > i.bottom && n.clientX > i.left : n.clientY > o.bottom + c || n.clientX > i.right && n.clientY > i.top;
}
function N3(n, r, s, i, o, c, f, m) {
  var p = i ? n.clientY : n.clientX, b = i ? s.height : s.width, g = i ? s.top : s.left, E = i ? s.bottom : s.right, _ = !1;
  if (!f) {
    if (m && sl < b * o) {
      if (!Ws && (Js === 1 ? p > g + b * c / 2 : p < E - b * c / 2) && (Ws = !0), Ws)
        _ = !0;
      else if (Js === 1 ? p < g + sl : p > E - sl)
        return -Js;
    } else if (p > g + b * (1 - o) / 2 && p < E - b * (1 - o) / 2)
      return O3(r);
  }
  return _ = _ || f, _ && (p < g + b * c / 2 || p > E - b * c / 2) ? p > g + b / 2 ? 1 : -1 : 0;
}
function O3(n) {
  return Tn(fe) < Tn(n) ? 1 : -1;
}
function M3(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, i = 0; s--; )
    i += r.charCodeAt(s);
  return i.toString(36);
}
function R3(n) {
  vl.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var i = r[s];
    i.checked && vl.push(i);
  }
}
function ul(n) {
  return setTimeout(n, 0);
}
function wf(n) {
  return clearTimeout(n);
}
Cl && He(document, "touchmove", function(n) {
  (Ae.active || Ti) && n.cancelable && n.preventDefault();
});
Ae.utils = {
  on: He,
  off: Ue,
  css: ke,
  find: iy,
  is: function(r, s) {
    return !!Pn(r, s, r, !1);
  },
  extend: p3,
  throttle: sy,
  closest: Pn,
  toggleClass: fn,
  clone: oy,
  index: Tn,
  nextTick: ul,
  cancelNextTick: wf,
  detectDirection: dy,
  getChild: ji,
  expando: tn
};
Ae.get = function(n) {
  return n[tn];
};
Ae.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (Ae.utils = Fn(Fn({}, Ae.utils), i.utils)), ru.mount(i);
  });
};
Ae.create = function(n, r) {
  return new Ae(n, r);
};
Ae.version = f3;
var _t = [], Vs, Ef, Cf = !1, tf, nf, yl, Ys;
function j3() {
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
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), Sv(), ol(), m3();
    },
    nulling: function() {
      yl = Ef = Vs = Cf = Ys = tf = nf = null, _t.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, i) {
      var o = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (yl = s, i || this.options.forceAutoScrollFallback || nu || wr || Fs) {
        rf(s, this.options, m, i);
        var p = Jr(m, !0);
        Cf && (!Ys || c !== tf || f !== nf) && (Ys && Sv(), Ys = setInterval(function() {
          var b = Jr(document.elementFromPoint(c, f), !0);
          b !== p && (p = b, ol()), rf(s, o.options, b, i);
        }, 10), tf = c, nf = f);
      } else {
        if (!this.options.bubbleScroll || Jr(m, !0) === $n()) {
          ol();
          return;
        }
        rf(s, this.options, Jr(m, !1), !1);
      }
    }
  }, Sr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ol() {
  _t.forEach(function(n) {
    clearInterval(n.pid);
  }), _t = [];
}
function Sv() {
  clearInterval(Ys);
}
var rf = sy(function(n, r, s, i) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = $n(), b = !1, g;
    Ef !== s && (Ef = s, ol(), Vs = r.scroll, g = r.scrollFn, Vs === !0 && (Vs = Jr(s, !0)));
    var E = 0, _ = Vs;
    do {
      var S = _, h = bt(S), C = h.top, A = h.bottom, O = h.left, x = h.right, z = h.width, l = h.height, v = void 0, w = void 0, k = S.scrollWidth, R = S.scrollHeight, L = ke(S), j = S.scrollLeft, P = S.scrollTop;
      S === p ? (v = z < k && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), w = l < R && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (v = z < k && (L.overflowX === "auto" || L.overflowX === "scroll"), w = l < R && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var G = v && (Math.abs(x - o) <= f && j + z < k) - (Math.abs(O - o) <= f && !!j), X = w && (Math.abs(A - c) <= f && P + l < R) - (Math.abs(C - c) <= f && !!P);
      if (!_t[E])
        for (var Y = 0; Y <= E; Y++)
          _t[Y] || (_t[Y] = {});
      (_t[E].vx != G || _t[E].vy != X || _t[E].el !== S) && (_t[E].el = S, _t[E].vx = G, _t[E].vy = X, clearInterval(_t[E].pid), (G != 0 || X != 0) && (b = !0, _t[E].pid = setInterval((function() {
        i && this.layer === 0 && Ae.active._onTouchMove(yl);
        var J = _t[this.layer].vy ? _t[this.layer].vy * m : 0, M = _t[this.layer].vx ? _t[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Ae.dragged.parentNode[tn], M, J, n, yl, _t[this.layer].el) !== "continue" || uy(_t[this.layer].el, M, J);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && _ !== p && (_ = Jr(_, !1)));
    Cf = b;
  }
}, 30), my = function(r) {
  var s = r.originalEvent, i = r.putSortable, o = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var b = i || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), b && !b.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: o,
      putSortable: i
    }));
  }
};
function qf() {
}
qf.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var o = ji(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(s, o) : this.sortable.el.appendChild(s), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: my
};
Sr(qf, {
  pluginName: "revertOnSpill"
});
function Zf() {
}
Zf.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable, o = i || this.sortable;
    o.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), o.animateAll();
  },
  drop: my
};
Sr(Zf, {
  pluginName: "removeOnSpill"
});
Ae.mount(new j3());
Ae.mount(Zf, qf);
async function ll(n, r, s) {
  var i, o, c;
  function f(g) {
    return n.includes("all") || n.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const b = x1;
  if (f("global") && b != null && b.length)
    for (const g of b) {
      const E = await D3(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((_) => {
        p[g].push(_);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[N1];
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((_) => {
        p[g].push(_);
      });
    }
  }
  if (f("character") && s) {
    const g = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const _ = (o = (i = g?.data) == null ? void 0 : i.extensions) == null ? void 0 : o.world;
    _ && E.add(_);
    const S = ey(s), h = (c = O1.charLore) == null ? void 0 : c.find((C) => C.name === S);
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
      E && Object.values(E.entries).forEach((_) => {
        p[g].push(_);
      });
    }
  }
  return p;
}
async function D3(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const z3 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, L3 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, P3 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, I3 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, B3 = `If you are creating a new entry you should write it like this:
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
\`\`\``, U3 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, H3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", q3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", Z3 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, gy = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", G3 = gy + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", V3 = "[" + gy + "][" + G3 + "]*", Y3 = new RegExp("^" + V3 + "$");
function vy(n, r) {
  const s = [];
  let i = r.exec(n);
  for (; i; ) {
    const o = [];
    o.startIndex = r.lastIndex - i[0].length;
    const c = i.length;
    for (let f = 0; f < c; f++)
      o.push(i[f]);
    s.push(o), i = r.exec(n);
  }
  return s;
}
const Gf = function(n) {
  const r = Y3.exec(n);
  return !(r === null || typeof r > "u");
};
function $3(n) {
  return typeof n < "u";
}
const X3 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function F3(n, r) {
  r = Object.assign({}, X3, r);
  const s = [];
  let i = !1, o = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = Ev(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let f = c;
      if (c++, n[c] === "!") {
        c = Cv(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !r8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", gt("InvalidTag", E, Yt(n, c));
        }
        const b = J3(n, c);
        if (b === !1)
          return gt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Yt(n, c));
        let g = b.value;
        if (c = b.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const _ = kv(g, r);
          if (_ === !0)
            i = !0;
          else
            return gt(_.err.code, _.err.msg, Yt(n, E + _.err.line));
        } else if (m)
          if (b.tagClosed) {
            if (g.trim().length > 0)
              return gt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Yt(n, f));
            if (s.length === 0)
              return gt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Yt(n, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let _ = Yt(n, E.tagStartPos);
                return gt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + _.line + ", col " + _.col + ") instead of closing tag '" + p + "'.",
                  Yt(n, f)
                );
              }
              s.length == 0 && (o = !0);
            }
          } else return gt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Yt(n, c));
        else {
          const E = kv(g, r);
          if (E !== !0)
            return gt(E.err.code, E.err.msg, Yt(n, c - g.length + E.err.line));
          if (o === !0)
            return gt("InvalidXml", "Multiple possible root nodes found.", Yt(n, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), i = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = Cv(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = Ev(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = t8(n, c);
            if (E == -1)
              return gt("InvalidChar", "char '&' is not expected.", Yt(n, c));
            c = E;
          } else if (o === !0 && !wv(n[c]))
            return gt("InvalidXml", "Extra text at the end", Yt(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (wv(n[c]))
        continue;
      return gt("InvalidChar", "char '" + n[c] + "' is not expected.", Yt(n, c));
    }
  if (i) {
    if (s.length == 1)
      return gt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Yt(n, s[0].tagStartPos));
    if (s.length > 0)
      return gt("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return gt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function wv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Ev(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const i = n.substr(s, r - s);
      if (r > 5 && i === "xml")
        return gt("InvalidXml", "XML declaration allowed only at the start of the document.", Yt(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Cv(n, r) {
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
const Q3 = '"', K3 = "'";
function J3(n, r) {
  let s = "", i = "", o = !1;
  for (; r < n.length; r++) {
    if (n[r] === Q3 || n[r] === K3)
      i === "" ? i = n[r] : i !== n[r] || (i = "");
    else if (n[r] === ">" && i === "") {
      o = !0;
      break;
    }
    s += n[r];
  }
  return i !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: o
  };
}
const W3 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function kv(n, r) {
  const s = vy(n, W3), i = {};
  for (let o = 0; o < s.length; o++) {
    if (s[o][1].length === 0)
      return gt("InvalidAttr", "Attribute '" + s[o][2] + "' has no space in starting.", zs(s[o]));
    if (s[o][3] !== void 0 && s[o][4] === void 0)
      return gt("InvalidAttr", "Attribute '" + s[o][2] + "' is without value.", zs(s[o]));
    if (s[o][3] === void 0 && !r.allowBooleanAttributes)
      return gt("InvalidAttr", "boolean attribute '" + s[o][2] + "' is not allowed.", zs(s[o]));
    const c = s[o][2];
    if (!n8(c))
      return gt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", zs(s[o]));
    if (!i.hasOwnProperty(c))
      i[c] = 1;
    else
      return gt("InvalidAttr", "Attribute '" + c + "' is repeated.", zs(s[o]));
  }
  return !0;
}
function e8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function t8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, e8(n, r);
  let s = 0;
  for (; r < n.length; r++, s++)
    if (!(n[r].match(/\w/) && s < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function gt(n, r, s) {
  return {
    err: {
      code: n,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function n8(n) {
  return Gf(n);
}
function r8(n) {
  return Gf(n);
}
function Yt(n, r) {
  const s = n.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function zs(n) {
  return n.startIndex + n[1].length;
}
const a8 = {
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
}, i8 = function(n) {
  return Object.assign({}, a8, n);
};
class Ls {
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
function s8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let i = 1, o = !1, c = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (o && l8(n, r)) {
          r += 7;
          let m, p;
          [m, p, r] = u8(n, r + 1), p.indexOf("&") === -1 && (s[h8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (o && c8(n, r)) r += 8;
        else if (o && d8(n, r)) r += 8;
        else if (o && f8(n, r)) r += 9;
        else if (o8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        i++, f = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, i--) : i--, i === 0)
          break;
      } else n[r] === "[" ? o = !0 : f += n[r];
    if (i !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function u8(n, r) {
  let s = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    s += n[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const i = n[r++];
  let o = "";
  for (; r < n.length && n[r] !== i; r++)
    o += n[r];
  return [s, o, r];
}
function o8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function l8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function c8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function d8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function f8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function h8(n) {
  if (Gf(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const p8 = /^[-+]?0x[a-fA-F0-9]+$/, m8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, g8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function v8(n, r = {}) {
  if (r = Object.assign({}, g8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && p8.test(s))
    return _8(s, 16);
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
    const i = m8.exec(s);
    if (i) {
      const o = i[1], c = i[2];
      let f = y8(i[3]);
      if (!r.leadingZeros && c.length > 0 && o && s[2] !== ".") return n;
      if (!r.leadingZeros && c.length > 0 && !o && s[1] !== ".") return n;
      if (r.leadingZeros && c === n) return 0;
      {
        const m = Number(s), p = "" + m;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? m : n : s.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || o && p === "-" + f ? m : n : c ? f === p || o + f === p ? m : n : s === p || s === o + p ? m : n;
      }
    } else
      return n;
  }
}
function y8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function _8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function b8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class S8 {
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
    }, this.addExternalEntities = w8, this.parseXml = T8, this.parseTextData = E8, this.resolveNameSpace = C8, this.buildAttributesMap = A8, this.isItStopNode = M8, this.replaceEntitiesValue = N8, this.readStopNodeData = j8, this.saveTextToParentTag = O8, this.addChild = x8, this.ignoreAttributesFn = b8(this.options.ignoreAttributes);
  }
}
function w8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    this.lastEntities[i] = {
      regex: new RegExp("&" + i + ";", "g"),
      val: n[i]
    };
  }
}
function E8(n, r, s, i, o, c, f) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, o, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? Af(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? Af(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function C8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const k8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function A8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const i = vy(n, k8), o = i.length, c = {};
    for (let f = 0; f < o; f++) {
      const m = this.resolveNameSpace(i[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = i[f][4], b = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (b = this.options.transformAttributeName(b)), b === "__proto__" && (b = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[b] = p : typeof g != typeof p || g !== p ? c[b] = g : c[b] = Af(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[b] = !0);
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
const T8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Ls("!xml");
  let s = r, i = "", o = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Na(n, ">", c, "Closing Tag is not closed.");
        let p = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (i = this.saveTextToParentTag(i, s, o));
        const b = o.substring(o.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        b && this.options.unpairedTags.indexOf(b) !== -1 ? (g = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = o.lastIndexOf("."), o = o.substring(0, g), s = this.tagsNodeStack.pop(), i = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = kf(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (i = this.saveTextToParentTag(i, s, o), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Ls(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, o, m.tagName)), this.addChild(s, p, o);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Na(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(c + 4, m - 2);
          i = this.saveTextToParentTag(i, s, o), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = s8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Na(n, "]]>", c, "CDATA is not closed.") - 2, p = n.substring(c + 9, m);
        i = this.saveTextToParentTag(i, s, o);
        let b = this.parseTextData(p, s.tagname, o, !0, !1, !0, !0);
        b == null && (b = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, b), c = m + 2;
      } else {
        let m = kf(n, c, this.options.removeNSPrefix), p = m.tagName;
        const b = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, _ = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && i && s.tagname !== "!xml" && (i = this.saveTextToParentTag(i, s, o, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), p !== r.tagname && (o += o ? "." + p : p), this.isItStopNode(this.options.stopNodes, o, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), o = o.substr(0, o.length - 1), g = p) : g = g.substr(0, g.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            c = m.closeIndex;
          else {
            const A = this.readStopNodeData(n, b, _ + 1);
            if (!A) throw new Error(`Unexpected end of ${b}`);
            c = A.i, h = A.tagContent;
          }
          const C = new Ls(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, o, p)), h && (h = this.parseTextData(h, p, o, !0, E, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, o);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), o = o.substr(0, o.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Ls(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, o, p)), this.addChild(s, h, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const h = new Ls(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, o, p)), this.addChild(s, h, o), s = h;
          }
          i = "", c = _;
        }
      }
    else
      i += n[c];
  return r.child;
};
function x8(n, r, s) {
  const i = this.options.updateTag(r.tagname, s, r[":@"]);
  i === !1 || (typeof i == "string" && (r.tagname = i), n.addChild(r));
}
const N8 = function(n) {
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
function O8(n, r, s, i) {
  return n && (i === void 0 && (i = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    i
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function M8(n, r, s) {
  const i = "*." + s;
  for (const o in n) {
    const c = n[o];
    if (i === c || r === c) return !0;
  }
  return !1;
}
function R8(n, r, s = ">") {
  let i, o = "";
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
            data: o,
            index: c
          };
      } else
        return {
          data: o,
          index: c
        };
    else f === "	" && (f = " ");
    o += f;
  }
}
function Na(n, r, s, i) {
  const o = n.indexOf(r, s);
  if (o === -1)
    throw new Error(i);
  return o + r.length - 1;
}
function kf(n, r, s, i = ">") {
  const o = R8(n, r + 1, i);
  if (!o) return;
  let c = o.data;
  const f = o.index, m = c.search(/\s/);
  let p = c, b = !0;
  m !== -1 && (p = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), b = p !== o.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: f,
    attrExpPresent: b,
    rawTagName: g
  };
}
function j8(n, r, s) {
  const i = s;
  let o = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Na(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (o--, o === 0))
          return {
            tagContent: n.substring(i, s),
            i: c
          };
        s = c;
      } else if (n[s + 1] === "?")
        s = Na(n, "?>", s + 1, "StopNode is not closed.");
      else if (n.substr(s + 1, 3) === "!--")
        s = Na(n, "-->", s + 3, "StopNode is not closed.");
      else if (n.substr(s + 1, 2) === "![")
        s = Na(n, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = kf(n, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && o++, s = c.closeIndex);
      }
}
function Af(n, r, s) {
  if (r && typeof n == "string") {
    const i = n.trim();
    return i === "true" ? !0 : i === "false" ? !1 : v8(n, s);
  } else
    return $3(n) ? n : "";
}
function D8(n, r) {
  return yy(n, r);
}
function yy(n, r, s) {
  let i;
  const o = {};
  for (let c = 0; c < n.length; c++) {
    const f = n[c], m = z8(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      i === void 0 ? i = f[m] : i += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let b = yy(f[m], r, p);
        const g = P8(b, r);
        f[":@"] ? L8(b, f[":@"], p, r) : Object.keys(b).length === 1 && b[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? b = b[r.textNodeName] : Object.keys(b).length === 0 && (r.alwaysCreateTextNode ? b[r.textNodeName] = "" : b = ""), o[m] !== void 0 && o.hasOwnProperty(m) ? (Array.isArray(o[m]) || (o[m] = [o[m]]), o[m].push(b)) : r.isArray(m, p, g) ? o[m] = [b] : o[m] = b;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (o[r.textNodeName] = i) : i !== void 0 && (o[r.textNodeName] = i), o;
}
function z8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (i !== ":@") return i;
  }
}
function L8(n, r, s, i) {
  if (r) {
    const o = Object.keys(r), c = o.length;
    for (let f = 0; f < c; f++) {
      const m = o[f];
      i.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function P8(n, r) {
  const { textNodeName: s } = r, i = Object.keys(n).length;
  return !!(i === 0 || i === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class I8 {
  constructor(r) {
    this.externalEntities = {}, this.options = i8(r);
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
      const c = F3(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const i = new S8(this.options);
    i.addExternalEntities(this.externalEntities);
    const o = i.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : D8(o, this.options);
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
const B8 = new I8();
function U8(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function _y(n, r = {}) {
  let s = n;
  const { previousContent: i } = r;
  if (s = s.replace(/```xml/g, "").replace(/```/g, ""), i && (s = i + s.trimEnd()), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const o = {};
  try {
    const c = B8.parse(s);
    if (!c.lorebooks)
      return o;
    const f = c.lorebooks.entry?.content ? [c.lorebooks.entry] : c.lorebooks.entry;
    for (const m of f) {
      const p = m.worldName;
      p && (o[p] || (o[p] = []), o[p].push({
        uid: m.id ?? U8(6),
        key: m.triggers?.split(",").map((b) => b.trim()) ?? [],
        content: m.content,
        comment: m.name,
        disable: !1,
        keysecondary: []
      }));
    }
    return o;
  } catch (c) {
    throw console.error(c), new Error("Model response is not valid XML");
  }
}
function H8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function q8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}</content>
  </entry>
</lorebooks>`;
}
var Ao = { exports: {} }, To = { exports: {} }, zn = {}, en = {}, Av;
function nn() {
  if (Av) return en;
  Av = 1, en.__esModule = !0, en.extend = o, en.indexOf = p, en.escapeExpression = b, en.isEmpty = g, en.createFrame = E, en.blockParams = _, en.appendContextPath = S;
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
  function o(h) {
    for (var C = 1; C < arguments.length; C++)
      for (var A in arguments[C])
        Object.prototype.hasOwnProperty.call(arguments[C], A) && (h[A] = arguments[C][A]);
    return h;
  }
  var c = Object.prototype.toString;
  en.toString = c;
  var f = function(C) {
    return typeof C == "function";
  };
  f(/x/) && (en.isFunction = f = function(h) {
    return typeof h == "function" && c.call(h) === "[object Function]";
  }), en.isFunction = f;
  var m = Array.isArray || function(h) {
    return h && typeof h == "object" ? c.call(h) === "[object Array]" : !1;
  };
  en.isArray = m;
  function p(h, C) {
    for (var A = 0, O = h.length; A < O; A++)
      if (h[A] === C)
        return A;
    return -1;
  }
  function b(h) {
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
    var C = o({}, h);
    return C._parent = h, C;
  }
  function _(h, C) {
    return h.path = C, h;
  }
  function S(h, C) {
    return (h ? h + "." : "") + C;
  }
  return en;
}
var xo = { exports: {} }, Tv;
function In() {
  return Tv || (Tv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function i(o, c) {
      var f = c && c.loc, m = void 0, p = void 0, b = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, b = f.start.column, g = f.end.column, o += " - " + m + ":" + b);
      for (var E = Error.prototype.constructor.call(this, o), _ = 0; _ < s.length; _++)
        this[s[_]] = E[s[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, i);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: b,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = b, this.endColumn = g));
      } catch {
      }
    }
    i.prototype = new Error(), r.default = i, n.exports = r.default;
  })(xo, xo.exports)), xo.exports;
}
var Ps = {}, No = { exports: {} }, xv;
function Z8() {
  return xv || (xv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = nn();
    r.default = function(i) {
      i.registerHelper("blockHelperMissing", function(o, c) {
        var f = c.inverse, m = c.fn;
        if (o === !0)
          return m(this);
        if (o === !1 || o == null)
          return f(this);
        if (s.isArray(o))
          return o.length > 0 ? (c.ids && (c.ids = [c.name]), i.helpers.each(o, c)) : f(this);
        if (c.data && c.ids) {
          var p = s.createFrame(c.data);
          p.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: p };
        }
        return m(o, c);
      });
    }, n.exports = r.default;
  })(No, No.exports)), No.exports;
}
var Oo = { exports: {} }, Nv;
function G8() {
  return Nv || (Nv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = nn(), o = In(), c = s(o);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var b = p.fn, g = p.inverse, E = 0, _ = "", S = void 0, h = void 0;
        p.data && p.ids && (h = i.appendContextPath(p.data.contextPath, p.ids[0]) + "."), i.isFunction(m) && (m = m.call(this)), p.data && (S = i.createFrame(p.data));
        function C(l, v, w) {
          S && (S.key = l, S.index = v, S.first = v === 0, S.last = !!w, h && (S.contextPath = h + l)), _ = _ + b(m[l], {
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
              Object.keys(m).forEach(function(v) {
                l !== void 0 && C(l, E - 1), l = v, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (_ = g(this)), _;
      });
    }, n.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Mo = { exports: {} }, Ov;
function V8() {
  return Ov || (Ov = 1, (function(n, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var i = In(), o = s(i);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var Ro = { exports: {} }, Mv;
function Y8() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = nn(), o = In(), c = s(o);
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
  })(Ro, Ro.exports)), Ro.exports;
}
var jo = { exports: {} }, Rv;
function $8() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var i = [void 0], o = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          i.push(arguments[c]);
        var f = 1;
        o.hash.level != null ? f = o.hash.level : o.data && o.data.level != null && (f = o.data.level), i[0] = f, s.log.apply(s, i);
      });
    }, n.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var Do = { exports: {} }, jv;
function X8() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(i, o, c) {
        return i && c.lookupProperty(i, o);
      });
    }, n.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var zo = { exports: {} }, Dv;
function F8() {
  return Dv || (Dv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = nn(), o = In(), c = s(o);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        i.isFunction(m) && (m = m.call(this));
        var b = p.fn;
        if (i.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = i.createFrame(p.data), g.contextPath = i.appendContextPath(p.data.contextPath, p.ids[0])), b(m, {
          data: g,
          blockParams: i.blockParams([m], [g && g.contextPath])
        });
      });
    }, n.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var zv;
function by() {
  if (zv) return Ps;
  zv = 1, Ps.__esModule = !0, Ps.registerDefaultHelpers = C, Ps.moveHelperToHooks = A;
  function n(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = Z8(), s = n(r), i = G8(), o = n(i), c = V8(), f = n(c), m = Y8(), p = n(m), b = $8(), g = n(b), E = X8(), _ = n(E), S = F8(), h = n(S);
  function C(O) {
    s.default(O), o.default(O), f.default(O), p.default(O), g.default(O), _.default(O), h.default(O);
  }
  function A(O, x, z) {
    O.helpers[x] && (O.hooks[x] = O.helpers[x], z || delete O.helpers[x]);
  }
  return Ps;
}
var Lo = {}, Po = { exports: {} }, Lv;
function Q8() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = nn();
    r.default = function(i) {
      i.registerDecorator("inline", function(o, c, f, m) {
        var p = o;
        return c.partials || (c.partials = {}, p = function(b, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var _ = o(b, g);
          return f.partials = E, _;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, n.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Pv;
function K8() {
  if (Pv) return Lo;
  Pv = 1, Lo.__esModule = !0, Lo.registerDefaultDecorators = i;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = Q8(), s = n(r);
  function i(o) {
    s.default(o);
  }
  return Lo;
}
var Io = { exports: {} }, Iv;
function Sy() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = nn(), i = {
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
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
            p[b - 1] = arguments[b];
          console[f].apply(console, p);
        }
      }
    };
    r.default = i, n.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var Ci = {}, Bo = {}, Bv;
function J8() {
  if (Bv) return Bo;
  Bv = 1, Bo.__esModule = !0, Bo.createNewLookupObject = r;
  var n = nn();
  function r() {
    for (var s = arguments.length, i = Array(s), o = 0; o < s; o++)
      i[o] = arguments[o];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(i));
  }
  return Bo;
}
var Uv;
function wy() {
  if (Uv) return Ci;
  Uv = 1, Ci.__esModule = !0, Ci.createProtoAccessControl = c, Ci.resultIsAllowed = f, Ci.resetLoggedProperties = b;
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = J8(), s = Sy(), i = n(s), o = /* @__PURE__ */ Object.create(null);
  function c(g) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var _ = /* @__PURE__ */ Object.create(null);
    return _.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(_, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, E, _) {
    return m(typeof g == "function" ? E.methods : E.properties, _);
  }
  function m(g, E) {
    return g.whitelist[E] !== void 0 ? g.whitelist[E] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (p(E), !1);
  }
  function p(g) {
    o[g] !== !0 && (o[g] = !0, i.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function b() {
    Object.keys(o).forEach(function(g) {
      delete o[g];
    });
  }
  return Ci;
}
var Hv;
function Vf() {
  if (Hv) return zn;
  Hv = 1, zn.__esModule = !0, zn.HandlebarsEnvironment = h;
  function n(A) {
    return A && A.__esModule ? A : { default: A };
  }
  var r = nn(), s = In(), i = n(s), o = by(), c = K8(), f = Sy(), m = n(f), p = wy(), b = "4.7.8";
  zn.VERSION = b;
  var g = 8;
  zn.COMPILER_REVISION = g;
  var E = 7;
  zn.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var _ = {
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
  zn.REVISION_CHANGES = _;
  var S = "[object Object]";
  function h(A, O, x) {
    this.helpers = A || {}, this.partials = O || {}, this.decorators = x || {}, o.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
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
  return zn.log = C, zn.createFrame = r.createFrame, zn.logger = m.default, zn;
}
var Uo = { exports: {} }, qv;
function W8() {
  return qv || (qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(i) {
      this.string = i;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var gr = {}, Ho = {}, Zv;
function eS() {
  if (Zv) return Ho;
  Zv = 1, Ho.__esModule = !0, Ho.wrapHelper = n;
  function n(r, s) {
    if (typeof r != "function")
      return r;
    var i = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return i;
  }
  return Ho;
}
var Gv;
function tS() {
  if (Gv) return gr;
  Gv = 1, gr.__esModule = !0, gr.checkRevision = g, gr.template = E, gr.wrapProgram = _, gr.resolvePartial = S, gr.invokePartial = h, gr.noop = C;
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    if (l && l.__esModule)
      return l;
    var v = {};
    if (l != null)
      for (var w in l)
        Object.prototype.hasOwnProperty.call(l, w) && (v[w] = l[w]);
    return v.default = l, v;
  }
  var s = nn(), i = r(s), o = In(), c = n(o), f = Vf(), m = by(), p = eS(), b = wy();
  function g(l) {
    var v = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(v >= f.LAST_COMPATIBLE_COMPILER_REVISION && v <= f.COMPILER_REVISION))
      if (v < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], R = f.REVISION_CHANGES[v];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + R + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + l[1] + ").");
  }
  function E(l, v) {
    if (!v)
      throw new c.default("No environment passed to template");
    if (!l || !l.main)
      throw new c.default("Unknown template object: " + typeof l);
    l.main.decorator = l.main_d, v.VM.checkRevision(l.compiler);
    var w = l.compiler && l.compiler[0] === 7;
    function k(j, P, G) {
      G.hash && (P = i.extend({}, P, G.hash), G.ids && (G.ids[0] = !0)), j = v.VM.resolvePartial.call(this, j, P, G);
      var X = i.extend({}, G, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), Y = v.VM.invokePartial.call(this, j, P, X);
      if (Y == null && v.compile && (G.partials[G.name] = v.compile(j, l.compilerOptions, v), Y = G.partials[G.name](P, X)), Y != null) {
        if (G.indent) {
          for (var J = Y.split(`
`), M = 0, B = J.length; M < B && !(!J[M] && M + 1 === B); M++)
            J[M] = G.indent + J[M];
          Y = J.join(`
`);
        }
        return Y;
      } else
        throw new c.default("The partial " + G.name + " could not be compiled when running in runtime-only mode");
    }
    var R = {
      strict: function(P, G, X) {
        if (!P || !(G in P))
          throw new c.default('"' + G + '" not defined in ' + P, {
            loc: X
          });
        return R.lookupProperty(P, G);
      },
      lookupProperty: function(P, G) {
        var X = P[G];
        if (X == null || Object.prototype.hasOwnProperty.call(P, G) || b.resultIsAllowed(X, R.protoAccessControl, G))
          return X;
      },
      lookup: function(P, G) {
        for (var X = P.length, Y = 0; Y < X; Y++) {
          var J = P[Y] && R.lookupProperty(P[Y], G);
          if (J != null)
            return P[Y][G];
        }
      },
      lambda: function(P, G) {
        return typeof P == "function" ? P.call(G) : P;
      },
      escapeExpression: i.escapeExpression,
      invokePartial: k,
      fn: function(P) {
        var G = l[P];
        return G.decorator = l[P + "_d"], G;
      },
      programs: [],
      program: function(P, G, X, Y, J) {
        var M = this.programs[P], B = this.fn(P);
        return G || J || Y || X ? M = _(this, P, B, G, X, Y, J) : M || (M = this.programs[P] = _(this, P, B)), M;
      },
      data: function(P, G) {
        for (; P && G--; )
          P = P._parent;
        return P;
      },
      mergeIfNeeded: function(P, G) {
        var X = P || G;
        return P && G && P !== G && (X = i.extend({}, G, P)), X;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: v.VM.noop,
      compilerInfo: l.compiler
    };
    function L(j) {
      var P = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], G = P.data;
      L._setup(P), !P.partial && l.useData && (G = A(j, G));
      var X = void 0, Y = l.useBlockParams ? [] : void 0;
      l.useDepths && (P.depths ? X = j != P.depths[0] ? [j].concat(P.depths) : P.depths : X = [j]);
      function J(M) {
        return "" + l.main(R, M, R.helpers, R.partials, G, Y, X);
      }
      return J = O(l.main, J, R, P.depths || [], G, Y), J(j, P);
    }
    return L.isTop = !0, L._setup = function(j) {
      if (j.partial)
        R.protoAccessControl = j.protoAccessControl, R.helpers = j.helpers, R.partials = j.partials, R.decorators = j.decorators, R.hooks = j.hooks;
      else {
        var P = i.extend({}, v.helpers, j.helpers);
        x(P, R), R.helpers = P, l.usePartial && (R.partials = R.mergeIfNeeded(j.partials, v.partials)), (l.usePartial || l.useDecorators) && (R.decorators = i.extend({}, v.decorators, j.decorators)), R.hooks = {}, R.protoAccessControl = b.createProtoAccessControl(j);
        var G = j.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(R, "helperMissing", G), m.moveHelperToHooks(R, "blockHelperMissing", G);
      }
    }, L._child = function(j, P, G, X) {
      if (l.useBlockParams && !G)
        throw new c.default("must pass block params");
      if (l.useDepths && !X)
        throw new c.default("must pass parent depths");
      return _(R, j, l[j], P, 0, G, X);
    }, L;
  }
  function _(l, v, w, k, R, L, j) {
    function P(G) {
      var X = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Y = j;
      return j && G != j[0] && !(G === l.nullContext && j[0] === null) && (Y = [G].concat(j)), w(l, G, l.helpers, l.partials, X.data || k, L && [X.blockParams].concat(L), Y);
    }
    return P = O(w, P, l, j, k, L), P.program = v, P.depth = j ? j.length : 0, P.blockParams = R || 0, P;
  }
  function S(l, v, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, v, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var R = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var L = w.fn;
      R = w.data["partial-block"] = function(P) {
        var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return G.data = f.createFrame(G.data), G.data["partial-block"] = k, L(P, G);
      }, L.partials && (w.partials = i.extend({}, w.partials, L.partials));
    })(), l === void 0 && R && (l = R), l === void 0)
      throw new c.default("The partial " + w.name + " could not be found");
    if (l instanceof Function)
      return l(v, w);
  }
  function C() {
    return "";
  }
  function A(l, v) {
    return (!v || !("root" in v)) && (v = v ? f.createFrame(v) : {}, v.root = l), v;
  }
  function O(l, v, w, k, R, L) {
    if (l.decorator) {
      var j = {};
      v = l.decorator(v, j, w, k && k[0], R, L, k), i.extend(v, j);
    }
    return v;
  }
  function x(l, v) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = z(k, v);
    });
  }
  function z(l, v) {
    var w = v.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return i.extend({ lookupProperty: w }, k);
    });
  }
  return gr;
}
var qo = { exports: {} }, Vv;
function Ey() {
  return Vv || (Vv = 1, (function(n, r) {
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
  })(qo, qo.exports)), qo.exports;
}
var Yv;
function nS() {
  return Yv || (Yv = 1, (function(n, r) {
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
    var o = Vf(), c = i(o), f = W8(), m = s(f), p = In(), b = s(p), g = nn(), E = i(g), _ = tS(), S = i(_), h = Ey(), C = s(h);
    function A() {
      var x = new c.HandlebarsEnvironment();
      return E.extend(x, c), x.SafeString = m.default, x.Exception = b.default, x.Utils = E, x.escapeExpression = E.escapeExpression, x.VM = S, x.template = function(z) {
        return S.template(z, x);
      }, x;
    }
    var O = A();
    O.create = A, C.default(O), O.default = O, r.default = O, n.exports = r.default;
  })(To, To.exports)), To.exports;
}
var Zo = { exports: {} }, $v;
function Cy() {
  return $v || ($v = 1, (function(n, r) {
    r.__esModule = !0;
    var s = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(o) {
          return o.type === "SubExpression" || (o.type === "MustacheStatement" || o.type === "BlockStatement") && !!(o.params && o.params.length || o.hash);
        },
        scopedId: function(o) {
          return /^\.|this\b/.test(o.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(o) {
          return o.parts.length === 1 && !s.helpers.scopedId(o) && !o.depth;
        }
      }
    };
    r.default = s, n.exports = r.default;
  })(Zo, Zo.exports)), Zo.exports;
}
var ki = {}, Go = { exports: {} }, Xv;
function rS() {
  return Xv || (Xv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var i = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, b, g, E, _, S) {
          var h = _.length - 1;
          switch (E) {
            case 1:
              return _[h - 1];
            case 2:
              this.$ = g.prepareProgram(_[h]);
              break;
            case 3:
              this.$ = _[h];
              break;
            case 4:
              this.$ = _[h];
              break;
            case 5:
              this.$ = _[h];
              break;
            case 6:
              this.$ = _[h];
              break;
            case 7:
              this.$ = _[h];
              break;
            case 8:
              this.$ = _[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(_[h]),
                strip: g.stripFlags(_[h], _[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[h],
                value: _[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 12:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[h - 5], path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: g.stripFlags(_[h - 5], _[h]) };
              break;
            case 16:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: g.stripFlags(_[h - 5], _[h]) };
              break;
            case 17:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: g.stripFlags(_[h - 5], _[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(_[h - 1], _[h - 1]), program: _[h] };
              break;
            case 19:
              var C = g.prepareBlock(_[h - 2], _[h - 1], _[h], _[h], !1, this._$), A = g.prepareProgram([C], _[h - 1].loc);
              A.chained = !0, this.$ = { strip: _[h - 2].strip, program: A, chain: !0 };
              break;
            case 20:
              this.$ = _[h];
              break;
            case 21:
              this.$ = { path: _[h - 1], strip: g.stripFlags(_[h - 2], _[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], g.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], g.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                indent: "",
                strip: g.stripFlags(_[h - 4], _[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 26:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1], strip: g.stripFlags(_[h - 4], _[h]) };
              break;
            case 27:
              this.$ = _[h];
              break;
            case 28:
              this.$ = _[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(_[h - 2]), value: _[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(_[h - 1]);
              break;
            case 33:
              this.$ = _[h];
              break;
            case 34:
              this.$ = _[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[h], original: _[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[h]), original: Number(_[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[h] === "true", original: _[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[h];
              break;
            case 41:
              this.$ = _[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, _[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, _[h], this._$);
              break;
            case 44:
              _[h - 2].push({ part: g.id(_[h]), original: _[h], separator: _[h - 1] }), this.$ = _[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(_[h]), original: _[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              _[h - 1].push(_[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              _[h - 1].push(_[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              _[h - 1].push(_[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              _[h - 1].push(_[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              _[h - 1].push(_[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              _[h - 1].push(_[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              _[h - 1].push(_[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              _[h - 1].push(_[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              _[h - 1].push(_[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              _[h - 1].push(_[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              _[h - 1].push(_[h]);
              break;
            case 98:
              this.$ = [_[h]];
              break;
            case 99:
              _[h - 1].push(_[h]);
              break;
            case 100:
              this.$ = [_[h]];
              break;
            case 101:
              _[h - 1].push(_[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, p) {
          throw new Error(m);
        },
        parse: function(m) {
          var p = this, b = [0], g = [null], E = [], _ = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var A = this.lexer.yylloc;
          E.push(A);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function x() {
            var X;
            return X = p.lexer.lex() || 1, typeof X != "number" && (X = p.symbols_[X] || X), X;
          }
          for (var z, l, v, w, k = {}, R, L, j, P; ; ) {
            if (l = b[b.length - 1], this.defaultActions[l] ? v = this.defaultActions[l] : ((z === null || typeof z > "u") && (z = x()), v = _[l] && _[l][z]), typeof v > "u" || !v.length || !v[0]) {
              var G = "";
              {
                P = [];
                for (R in _[l]) this.terminals_[R] && R > 2 && P.push("'" + this.terminals_[R] + "'");
                this.lexer.showPosition ? G = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + P.join(", ") + ", got '" + (this.terminals_[z] || z) + "'" : G = "Parse error on line " + (h + 1) + ": Unexpected " + (z == 1 ? "end of input" : "'" + (this.terminals_[z] || z) + "'"), this.parseError(G, { text: this.lexer.match, token: this.terminals_[z] || z, line: this.lexer.yylineno, loc: A, expected: P });
              }
            }
            if (v[0] instanceof Array && v.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + z);
            switch (v[0]) {
              case 1:
                b.push(z), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), b.push(v[1]), z = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, A = this.lexer.yylloc;
                break;
              case 2:
                if (L = this.productions_[v[1]][1], k.$ = g[g.length - L], k._$ = { first_line: E[E.length - (L || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (L || 1)].first_column, last_column: E[E.length - 1].last_column }, O && (k._$.range = [E[E.length - (L || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, v[1], g, E), typeof w < "u")
                  return w;
                L && (b = b.slice(0, -1 * L * 2), g = g.slice(0, -1 * L), E = E.slice(0, -1 * L)), b.push(this.productions_[v[1]][0]), g.push(k.$), E.push(k._$), j = _[b[b.length - 2]][b[b.length - 1]], b.push(j);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var f = {
          EOF: 1,
          parseError: function(p, b) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, b);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var b = p.match(/(?:\r\n?|\n).*/g);
            return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var b = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var _ = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - b
            }, this.options.ranges && (this.yylloc.range = [_[0], _[0] + this.yyleng - b]), this;
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
            var p = this.pastInput(), b = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + b + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, b, g, E, _;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (g = this._input.match(this.rules[S[h]]), !(g && (!b || g[0].length > b[0].length) && (b = g, E = h, !this.options.flex))); h++)
              ;
            return b ? (_ = b[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
            }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(p, b, g, E) {
          function _(S, h) {
            return b.yytext = b.yytext.substring(S, b.yyleng - h + S);
          }
          switch (g) {
            case 0:
              if (b.yytext.slice(-2) === "\\\\" ? (_(0, 1), this.begin("mu")) : b.yytext.slice(-1) === "\\" ? (_(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (_(5, 9), "END_RAW_BLOCK");
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
              this.unput(b.yytext), this.popState(), this.begin("com");
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
              return b.yytext = _(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return b.yytext = _(1, 2).replace(/\\'/g, "'"), 80;
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
              return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      i.lexer = o;
      function c() {
        this.yy = {};
      }
      return c.prototype = i, i.Parser = c, new c();
    })();
    r.default = s, n.exports = r.default;
  })(Go, Go.exports)), Go.exports;
}
var Vo = { exports: {} }, Yo = { exports: {} }, Fv;
function ky() {
  return Fv || (Fv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var i = In(), o = s(i);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(g, E) {
        var _ = this.accept(g[E]);
        if (this.mutating) {
          if (_ && !c.prototype[_.type])
            throw new o.default('Unexpected node type "' + _.type + '" found when accepting ' + E + " on " + g.type);
          g[E] = _;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(g, E) {
        if (this.acceptKey(g, E), !g[E])
          throw new o.default(g.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(g) {
        for (var E = 0, _ = g.length; E < _; E++)
          this.acceptKey(g, E), g[E] || (g.splice(E, 1), E--, _--);
      },
      accept: function(g) {
        if (g) {
          if (!this[g.type])
            throw new o.default("Unknown type: " + g.type, g);
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
    function f(b) {
      this.acceptRequired(b, "path"), this.acceptArray(b.params), this.acceptKey(b, "hash");
    }
    function m(b) {
      f.call(this, b), this.acceptKey(b, "program"), this.acceptKey(b, "inverse");
    }
    function p(b) {
      this.acceptRequired(b, "name"), this.acceptArray(b.params), this.acceptKey(b, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var Qv;
function aS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var i = ky(), o = s(i);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new o.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = g.body, h = 0, C = S.length; h < C; h++) {
        var A = S[h], O = this.accept(A);
        if (O) {
          var x = f(S, h, _), z = m(S, h, _), l = O.openStandalone && x, v = O.closeStandalone && z, w = O.inlineStandalone && x && z;
          O.close && p(S, h, !0), O.open && b(S, h, !0), E && w && (p(S, h), b(S, h) && A.type === "PartialStatement" && (A.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && l && (p((A.program || A.inverse).body), b(S, h)), E && v && (p(S, h), b((A.inverse || A.program).body));
        }
      }
      return g;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var E = g.program || g.inverse, _ = g.program && g.inverse, S = _, h = _;
      if (_ && _.chained)
        for (S = _.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((S || E).body)
      };
      if (g.openStrip.close && p(E.body, null, !0), _) {
        var A = g.inverseStrip;
        A.open && b(E.body, null, !0), A.close && p(S.body, null, !0), g.closeStrip.open && b(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (b(E.body), p(S.body));
      } else g.closeStrip.open && b(E.body, null, !0);
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
    function f(g, E, _) {
      E === void 0 && (E = g.length);
      var S = g[E - 1], h = g[E - 2];
      if (!S)
        return _;
      if (S.type === "ContentStatement")
        return (h || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(S.original);
    }
    function m(g, E, _) {
      E === void 0 && (E = -1);
      var S = g[E + 1], h = g[E + 2];
      if (!S)
        return _;
      if (S.type === "ContentStatement")
        return (h || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(S.original);
    }
    function p(g, E, _) {
      var S = g[E == null ? 0 : E + 1];
      if (!(!S || S.type !== "ContentStatement" || !_ && S.rightStripped)) {
        var h = S.value;
        S.value = S.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), S.rightStripped = S.value !== h;
      }
    }
    function b(g, E, _) {
      var S = g[E == null ? g.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !_ && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })(Vo, Vo.exports)), Vo.exports;
}
var dn = {}, Kv;
function iS() {
  if (Kv) return dn;
  Kv = 1, dn.__esModule = !0, dn.SourceLocation = o, dn.id = c, dn.stripFlags = f, dn.stripComment = m, dn.preparePath = p, dn.prepareMustache = b, dn.prepareRawBlock = g, dn.prepareBlock = E, dn.prepareProgram = _, dn.preparePartialBlock = S;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = In(), s = n(r);
  function i(h, C) {
    if (C = C.path ? C.path.original : C, h.path.original !== C) {
      var A = { loc: h.path.loc };
      throw new s.default(h.path.original + " doesn't match " + C, A);
    }
  }
  function o(h, C) {
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
    for (var O = h ? "@" : "", x = [], z = 0, l = 0, v = C.length; l < v; l++) {
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
  function b(h, C, A, O, x, z) {
    var l = O.charAt(3) || O.charAt(2), v = l !== "{" && l !== "&", w = /\*/.test(O);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: A,
      escaped: v,
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
    var v = void 0, w = void 0;
    if (A) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", A);
      A.chain && (A.program.body[0].closeStrip = O.strip), w = A.strip, v = A.program;
    }
    return x && (x = v, v = C, C = x), {
      type: l ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      inverse: v,
      openStrip: h.strip,
      inverseStrip: w,
      closeStrip: O && O.strip,
      loc: this.locInfo(z)
    };
  }
  function _(h, C) {
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
  return dn;
}
var Jv;
function sS() {
  if (Jv) return ki;
  Jv = 1, ki.__esModule = !0, ki.parseWithoutProcessing = g, ki.parse = E;
  function n(_) {
    if (_ && _.__esModule)
      return _;
    var S = {};
    if (_ != null)
      for (var h in _)
        Object.prototype.hasOwnProperty.call(_, h) && (S[h] = _[h]);
    return S.default = _, S;
  }
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var s = rS(), i = r(s), o = aS(), c = r(o), f = iS(), m = n(f), p = nn();
  ki.parser = i.default;
  var b = {};
  p.extend(b, m);
  function g(_, S) {
    if (_.type === "Program")
      return _;
    i.default.yy = b, b.locInfo = function(C) {
      return new b.SourceLocation(S && S.srcName, C);
    };
    var h = i.default.parse(_);
    return h;
  }
  function E(_, S) {
    var h = g(_, S), C = new c.default(S);
    return C.accept(h);
  }
  return ki;
}
var Ai = {}, Wv;
function uS() {
  if (Wv) return Ai;
  Wv = 1, Ai.__esModule = !0, Ai.Compiler = m, Ai.precompile = p, Ai.compile = b;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = In(), s = n(r), i = nn(), o = Cy(), c = n(o), f = [].slice;
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
  function p(_, S, h) {
    if (_ == null || typeof _ != "string" && _.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + _);
    S = S || {}, "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = h.parse(_, S), A = new h.Compiler().compile(C, S);
    return new h.JavaScriptCompiler().compile(A, S);
  }
  function b(_, S, h) {
    if (S === void 0 && (S = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    S = i.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function A() {
      var x = h.parse(_, S), z = new h.Compiler().compile(x, S), l = new h.JavaScriptCompiler().compile(z, S, void 0, !0);
      return h.template(l);
    }
    function O(x, z) {
      return C || (C = A()), C.call(this, x, z);
    }
    return O._setup = function(x) {
      return C || (C = A()), C._setup(x);
    }, O._child = function(x, z, l, v) {
      return C || (C = A()), C._child(x, z, l, v);
    }, O;
  }
  function g(_, S) {
    if (_ === S)
      return !0;
    if (i.isArray(_) && i.isArray(S) && _.length === S.length) {
      for (var h = 0; h < _.length; h++)
        if (!g(_[h], S[h]))
          return !1;
      return !0;
    }
  }
  function E(_) {
    if (!_.path.parts) {
      var S = _.path;
      _.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [S.original + ""],
        original: S.original + "",
        loc: S.loc
      };
    }
  }
  return Ai;
}
var $o = { exports: {} }, Xo = { exports: {} }, Is = {}, af = {}, Fo = {}, Qo = {}, e0;
function oS() {
  if (e0) return Qo;
  e0 = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Qo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Qo.decode = function(r) {
    var s = 65, i = 90, o = 97, c = 122, f = 48, m = 57, p = 43, b = 47, g = 26, E = 52;
    return s <= r && r <= i ? r - s : o <= r && r <= c ? r - o + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == b ? 63 : -1;
  }, Qo;
}
var t0;
function Ay() {
  if (t0) return Fo;
  t0 = 1;
  var n = oS(), r = 5, s = 1 << r, i = s - 1, o = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, b = m >> 1;
    return p ? -b : b;
  }
  return Fo.encode = function(p) {
    var b = "", g, E = c(p);
    do
      g = E & i, E >>>= r, E > 0 && (g |= o), b += n.encode(g);
    while (E > 0);
    return b;
  }, Fo.decode = function(p, b, g) {
    var E = p.length, _ = 0, S = 0, h, C;
    do {
      if (b >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(p.charCodeAt(b++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(b - 1));
      h = !!(C & o), C &= i, _ = _ + (C << S), S += r;
    } while (h);
    g.value = f(_), g.rest = b;
  }, Fo;
}
var sf = {}, n0;
function au() {
  return n0 || (n0 = 1, (function(n) {
    function r(l, v, w) {
      if (v in l)
        return l[v];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + v + '" is a required argument.');
    }
    n.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
    function o(l) {
      var v = l.match(s);
      return v ? {
        scheme: v[1],
        auth: v[2],
        host: v[3],
        port: v[4],
        path: v[5]
      } : null;
    }
    n.urlParse = o;
    function c(l) {
      var v = "";
      return l.scheme && (v += l.scheme + ":"), v += "//", l.auth && (v += l.auth + "@"), l.host && (v += l.host), l.port && (v += ":" + l.port), l.path && (v += l.path), v;
    }
    n.urlGenerate = c;
    function f(l) {
      var v = l, w = o(l);
      if (w) {
        if (!w.path)
          return l;
        v = w.path;
      }
      for (var k = n.isAbsolute(v), R = v.split(/\/+/), L, j = 0, P = R.length - 1; P >= 0; P--)
        L = R[P], L === "." ? R.splice(P, 1) : L === ".." ? j++ : j > 0 && (L === "" ? (R.splice(P + 1, j), j = 0) : (R.splice(P, 2), j--));
      return v = R.join("/"), v === "" && (v = k ? "/" : "."), w ? (w.path = v, c(w)) : v;
    }
    n.normalize = f;
    function m(l, v) {
      l === "" && (l = "."), v === "" && (v = ".");
      var w = o(v), k = o(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || v.match(i))
        return v;
      if (k && !k.host && !k.path)
        return k.host = v, c(k);
      var R = v.charAt(0) === "/" ? v : f(l.replace(/\/+$/, "") + "/" + v);
      return k ? (k.path = R, c(k)) : R;
    }
    n.join = m, n.isAbsolute = function(l) {
      return l.charAt(0) === "/" || s.test(l);
    };
    function p(l, v) {
      l === "" && (l = "."), l = l.replace(/\/$/, "");
      for (var w = 0; v.indexOf(l + "/") !== 0; ) {
        var k = l.lastIndexOf("/");
        if (k < 0 || (l = l.slice(0, k), l.match(/^([^\/]+:\/)?\/*$/)))
          return v;
        ++w;
      }
      return Array(w + 1).join("../") + v.substr(l.length + 1);
    }
    n.relative = p;
    var b = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function g(l) {
      return l;
    }
    function E(l) {
      return S(l) ? "$" + l : l;
    }
    n.toSetString = b ? g : E;
    function _(l) {
      return S(l) ? l.slice(1) : l;
    }
    n.fromSetString = b ? g : _;
    function S(l) {
      if (!l)
        return !1;
      var v = l.length;
      if (v < 9 || l.charCodeAt(v - 1) !== 95 || l.charCodeAt(v - 2) !== 95 || l.charCodeAt(v - 3) !== 111 || l.charCodeAt(v - 4) !== 116 || l.charCodeAt(v - 5) !== 111 || l.charCodeAt(v - 6) !== 114 || l.charCodeAt(v - 7) !== 112 || l.charCodeAt(v - 8) !== 95 || l.charCodeAt(v - 9) !== 95)
        return !1;
      for (var w = v - 10; w >= 0; w--)
        if (l.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function h(l, v, w) {
      var k = A(l.source, v.source);
      return k !== 0 || (k = l.originalLine - v.originalLine, k !== 0) || (k = l.originalColumn - v.originalColumn, k !== 0 || w) || (k = l.generatedColumn - v.generatedColumn, k !== 0) || (k = l.generatedLine - v.generatedLine, k !== 0) ? k : A(l.name, v.name);
    }
    n.compareByOriginalPositions = h;
    function C(l, v, w) {
      var k = l.generatedLine - v.generatedLine;
      return k !== 0 || (k = l.generatedColumn - v.generatedColumn, k !== 0 || w) || (k = A(l.source, v.source), k !== 0) || (k = l.originalLine - v.originalLine, k !== 0) || (k = l.originalColumn - v.originalColumn, k !== 0) ? k : A(l.name, v.name);
    }
    n.compareByGeneratedPositionsDeflated = C;
    function A(l, v) {
      return l === v ? 0 : l === null ? 1 : v === null ? -1 : l > v ? 1 : -1;
    }
    function O(l, v) {
      var w = l.generatedLine - v.generatedLine;
      return w !== 0 || (w = l.generatedColumn - v.generatedColumn, w !== 0) || (w = A(l.source, v.source), w !== 0) || (w = l.originalLine - v.originalLine, w !== 0) || (w = l.originalColumn - v.originalColumn, w !== 0) ? w : A(l.name, v.name);
    }
    n.compareByGeneratedPositionsInflated = O;
    function x(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = x;
    function z(l, v, w) {
      if (v = v || "", l && (l[l.length - 1] !== "/" && v[0] !== "/" && (l += "/"), v = l + v), w) {
        var k = o(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var R = k.path.lastIndexOf("/");
          R >= 0 && (k.path = k.path.substring(0, R + 1));
        }
        v = m(c(k), v);
      }
      return f(v);
    }
    n.computeSourceURL = z;
  })(sf)), sf;
}
var uf = {}, r0;
function Ty() {
  if (r0) return uf;
  r0 = 1;
  var n = au(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function i() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(c, f) {
    for (var m = new i(), p = 0, b = c.length; p < b; p++)
      m.add(c[p], f);
    return m;
  }, i.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(c, f) {
    var m = s ? c : n.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), b = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, b) : this._set[m] = b);
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
  }, uf.ArraySet = i, uf;
}
var of = {}, a0;
function lS() {
  if (a0) return of;
  a0 = 1;
  var n = au();
  function r(i, o) {
    var c = i.generatedLine, f = o.generatedLine, m = i.generatedColumn, p = o.generatedColumn;
    return f > c || f == c && p >= m || n.compareByGeneratedPositionsInflated(i, o) <= 0;
  }
  function s() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return s.prototype.unsortedForEach = function(o, c) {
    this._array.forEach(o, c);
  }, s.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, s.prototype.toArray = function() {
    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, of.MappingList = s, of;
}
var i0;
function xy() {
  if (i0) return af;
  i0 = 1;
  var n = Ay(), r = au(), s = Ty().ArraySet, i = lS().MappingList;
  function o(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new i(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new o({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(b) {
      var g = {
        generated: {
          line: b.generatedLine,
          column: b.generatedColumn
        }
      };
      b.source != null && (g.source = b.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: b.originalLine,
        column: b.originalColumn
      }, b.name != null && (g.name = b.name)), p.addMapping(g);
    }), f.sources.forEach(function(b) {
      var g = b;
      m !== null && (g = r.relative(m, b)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(b);
      E != null && p.setSourceContent(b, E);
    }), p;
  }, o.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), b = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, b, g), b != null && (b = String(b), this._sources.has(b) || this._sources.add(b)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: b,
      name: g
    });
  }, o.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, m, p) {
    var b = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      b = f.file;
    }
    var g = this._sourceRoot;
    g != null && (b = r.relative(g, b));
    var E = new s(), _ = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === b && S.originalLine != null) {
        var h = f.originalPositionFor({
          line: S.originalLine,
          column: S.originalColumn
        });
        h.source != null && (S.source = h.source, p != null && (S.source = r.join(p, S.source)), g != null && (S.source = r.relative(g, S.source)), S.originalLine = h.line, S.originalColumn = h.column, h.name != null && (S.name = h.name));
      }
      var C = S.source;
      C != null && !E.has(C) && E.add(C);
      var A = S.name;
      A != null && !_.has(A) && _.add(A);
    }, this), this._sources = E, this._names = _, f.sources.forEach(function(S) {
      var h = f.sourceContentFor(S);
      h != null && (p != null && (S = r.join(p, S)), g != null && (S = r.relative(g, S)), this.setSourceContent(S, h));
    }, this);
  }, o.prototype._validateMapping = function(f, m, p, b) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !b)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: b
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, b = 0, g = 0, E = 0, _ = "", S, h, C, A, O = this._mappings.toArray(), x = 0, z = O.length; x < z; x++) {
      if (h = O[x], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (x > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, O[x - 1]))
          continue;
        S += ",";
      }
      S += n.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (A = this._sources.indexOf(h.source), S += n.encode(A - E), E = A, S += n.encode(h.originalLine - 1 - b), b = h.originalLine - 1, S += n.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += n.encode(C - g), g = C)), _ += S;
    }
    return _;
  }, o.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var b = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, b) ? this._sourcesContents[b] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, af.SourceMapGenerator = o, af;
}
var Bs = {}, lf = {}, s0;
function cS() {
  return s0 || (s0 = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, i, o, c, f, m) {
      var p = Math.floor((i - s) / 2) + s, b = f(o, c[p], !0);
      return b === 0 ? p : b > 0 ? i - p > 1 ? r(p, i, o, c, f, m) : m == n.LEAST_UPPER_BOUND ? i < c.length ? i : -1 : p : p - s > 1 ? r(s, p, o, c, f, m) : m == n.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    n.search = function(i, o, c, f) {
      if (o.length === 0)
        return -1;
      var m = r(
        -1,
        o.length,
        i,
        o,
        c,
        f || n.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(o[m], o[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(lf)), lf;
}
var cf = {}, u0;
function dS() {
  if (u0) return cf;
  u0 = 1;
  function n(i, o, c) {
    var f = i[o];
    i[o] = i[c], i[c] = f;
  }
  function r(i, o) {
    return Math.round(i + Math.random() * (o - i));
  }
  function s(i, o, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      n(i, m, f);
      for (var b = i[f], g = c; g < f; g++)
        o(i[g], b) <= 0 && (p += 1, n(i, p, g));
      n(i, p + 1, g);
      var E = p + 1;
      s(i, o, c, E - 1), s(i, o, E + 1, f);
    }
  }
  return cf.quickSort = function(i, o) {
    s(i, o, 0, i.length - 1);
  }, cf;
}
var o0;
function fS() {
  if (o0) return Bs;
  o0 = 1;
  var n = au(), r = cS(), s = Ty().ArraySet, i = Ay(), o = dS().quickSort;
  function c(b, g) {
    var E = b;
    return typeof b == "string" && (E = n.parseSourceMapInput(b)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  c.fromSourceMap = function(b, g) {
    return f.fromSourceMap(b, g);
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
    var _ = g.charAt(E);
    return _ === ";" || _ === ",";
  }, c.prototype._parseMappings = function(g, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(g, E, _) {
    var S = E || null, h = _ || c.GENERATED_ORDER, C;
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
    var E = n.getArg(g, "line"), _ = {
      source: n.getArg(g, "source"),
      originalLine: E,
      originalColumn: n.getArg(g, "column", 0)
    };
    if (_.source = this._findSourceIndex(_.source), _.source < 0)
      return [];
    var S = [], h = this._findMapping(
      _,
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
  }, Bs.SourceMapConsumer = c;
  function f(b, g) {
    var E = b;
    typeof b == "string" && (E = n.parseSourceMapInput(b));
    var _ = n.getArg(E, "version"), S = n.getArg(E, "sources"), h = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), A = n.getArg(E, "sourcesContent", null), O = n.getArg(E, "mappings"), x = n.getArg(E, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    C && (C = n.normalize(C)), S = S.map(String).map(n.normalize).map(function(z) {
      return C && n.isAbsolute(C) && n.isAbsolute(z) ? n.relative(C, z) : z;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(z) {
      return n.computeSourceURL(C, z, g);
    }), this.sourceRoot = C, this.sourcesContent = A, this._mappings = O, this._sourceMapURL = g, this.file = x;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(b) {
    var g = b;
    if (this.sourceRoot != null && (g = n.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == b)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var _ = Object.create(f.prototype), S = _._names = s.fromArray(g._names.toArray(), !0), h = _._sources = s.fromArray(g._sources.toArray(), !0);
    _.sourceRoot = g._sourceRoot, _.sourcesContent = g._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = g._file, _._sourceMapURL = E, _._absoluteSources = _._sources.toArray().map(function(w) {
      return n.computeSourceURL(_.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), A = _.__generatedMappings = [], O = _.__originalMappings = [], x = 0, z = C.length; x < z; x++) {
      var l = C[x], v = new m();
      v.generatedLine = l.generatedLine, v.generatedColumn = l.generatedColumn, l.source && (v.source = h.indexOf(l.source), v.originalLine = l.originalLine, v.originalColumn = l.originalColumn, l.name && (v.name = S.indexOf(l.name)), O.push(v)), A.push(v);
    }
    return o(_.__originalMappings, n.compareByOriginalPositions), _;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var _ = 1, S = 0, h = 0, C = 0, A = 0, O = 0, x = g.length, z = 0, l = {}, v = {}, w = [], k = [], R, L, j, P, G; z < x; )
      if (g.charAt(z) === ";")
        _++, z++, S = 0;
      else if (g.charAt(z) === ",")
        z++;
      else {
        for (R = new m(), R.generatedLine = _, P = z; P < x && !this._charIsMappingSeparator(g, P); P++)
          ;
        if (L = g.slice(z, P), j = l[L], j)
          z += L.length;
        else {
          for (j = []; z < P; )
            i.decode(g, z, v), G = v.value, z = v.rest, j.push(G);
          if (j.length === 2)
            throw new Error("Found a source, but no line and column");
          if (j.length === 3)
            throw new Error("Found a source and line, but no column");
          l[L] = j;
        }
        R.generatedColumn = S + j[0], S = R.generatedColumn, j.length > 1 && (R.source = A + j[1], A += j[1], R.originalLine = h + j[2], h = R.originalLine, R.originalLine += 1, R.originalColumn = C + j[3], C = R.originalColumn, j.length > 4 && (R.name = O + j[4], O += j[4])), k.push(R), typeof R.originalLine == "number" && w.push(R);
      }
    o(k, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(w, n.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(g, E, _, S, h, C) {
    if (g[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[_]);
    if (g[S] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[S]);
    return r.search(g, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var E = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var _ = this._generatedMappings[g + 1];
        if (E.generatedLine === _.generatedLine) {
          E.lastGeneratedColumn = _.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, _ = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var S = this._generatedMappings[_];
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
    var _ = this._findSourceIndex(g);
    if (_ >= 0)
      return this.sourcesContent[_];
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
    var _ = {
      source: E,
      originalLine: n.getArg(g, "line"),
      originalColumn: n.getArg(g, "column")
    }, S = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var h = this._originalMappings[S];
      if (h.source === _.source)
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
  }, Bs.BasicSourceMapConsumer = f;
  function p(b, g) {
    var E = b;
    typeof b == "string" && (E = n.parseSourceMapInput(b));
    var _ = n.getArg(E, "version"), S = n.getArg(E, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
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
      for (var b = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          b.push(this._sections[g].consumer.sources[E]);
      return b;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, _ = r.search(
      E,
      this._sections,
      function(h, C) {
        var A = h.generatedLine - C.generatedOffset.generatedLine;
        return A || h.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), S = this._sections[_];
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
    for (var _ = 0; _ < this._sections.length; _++) {
      var S = this._sections[_], h = S.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var E = 0; E < this._sections.length; E++) {
      var _ = this._sections[E];
      if (_.consumer._findSourceIndex(n.getArg(g, "source")) !== -1) {
        var S = _.consumer.generatedPositionFor(g);
        if (S) {
          var h = {
            line: S.line + (_.generatedOffset.generatedLine - 1),
            column: S.column + (_.generatedOffset.generatedLine === S.line ? _.generatedOffset.generatedColumn - 1 : 0)
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
    for (var _ = 0; _ < this._sections.length; _++)
      for (var S = this._sections[_], h = S.consumer._generatedMappings, C = 0; C < h.length; C++) {
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
    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions);
  }, Bs.IndexedSourceMapConsumer = p, Bs;
}
var df = {}, l0;
function hS() {
  if (l0) return df;
  l0 = 1;
  var n = xy().SourceMapGenerator, r = au(), s = /(\r?\n)/, i = 10, o = "$$$isSourceNode$$$";
  function c(f, m, p, b, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[o] = !0, b != null && this.add(b);
  }
  return c.fromStringWithSourceMap = function(m, p, b) {
    var g = new c(), E = m.split(s), _ = 0, S = function() {
      var x = l(), z = l() || "";
      return x + z;
      function l() {
        return _ < E.length ? E[_++] : void 0;
      }
    }, h = 1, C = 0, A = null;
    return p.eachMapping(function(x) {
      if (A !== null)
        if (h < x.generatedLine)
          O(A, S()), h++, C = 0;
        else {
          var z = E[_] || "", l = z.substr(0, x.generatedColumn - C);
          E[_] = z.substr(x.generatedColumn - C), C = x.generatedColumn, O(A, l), A = x;
          return;
        }
      for (; h < x.generatedLine; )
        g.add(S()), h++;
      if (C < x.generatedColumn) {
        var z = E[_] || "";
        g.add(z.substr(0, x.generatedColumn)), E[_] = z.substr(x.generatedColumn), C = x.generatedColumn;
      }
      A = x;
    }, this), _ < E.length && (A && O(A, S()), g.add(E.splice(_).join(""))), p.sources.forEach(function(x) {
      var z = p.sourceContentFor(x);
      z != null && (b != null && (x = r.join(b, x)), g.setSourceContent(x, z));
    }), g;
    function O(x, z) {
      if (x === null || x.source === void 0)
        g.add(z);
      else {
        var l = b ? r.join(b, x.source) : x.source;
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
    else if (m[o] || typeof m == "string")
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
    else if (m[o] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var p, b = 0, g = this.children.length; b < g; b++)
      p = this.children[b], p[o] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var p, b, g = this.children.length;
    if (g > 0) {
      for (p = [], b = 0; b < g - 1; b++)
        p.push(this.children[b]), p.push(m);
      p.push(this.children[b]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(m, p) {
    var b = this.children[this.children.length - 1];
    return b[o] ? b.replaceRight(m, p) : typeof b == "string" ? this.children[this.children.length - 1] = b.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, c.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, c.prototype.walkSourceContents = function(m) {
    for (var p = 0, b = this.children.length; p < b; p++)
      this.children[p][o] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, b = g.length; p < b; p++)
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
    }, b = new n(m), g = !1, E = null, _ = null, S = null, h = null;
    return this.walk(function(C, A) {
      p.code += C, A.source !== null && A.line !== null && A.column !== null ? ((E !== A.source || _ !== A.line || S !== A.column || h !== A.name) && b.addMapping({
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
      }), E = A.source, _ = A.line, S = A.column, h = A.name, g = !0) : g && (b.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var O = 0, x = C.length; O < x; O++)
        C.charCodeAt(O) === i ? (p.line++, p.column = 0, O + 1 === x ? (E = null, g = !1) : g && b.addMapping({
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
      b.setSourceContent(C, A);
    }), { code: p.code, map: b };
  }, df.SourceNode = c, df;
}
var c0;
function pS() {
  return c0 || (c0 = 1, Is.SourceMapGenerator = xy().SourceMapGenerator, Is.SourceMapConsumer = fS().SourceMapConsumer, Is.SourceNode = hS().SourceNode), Is;
}
var d0;
function mS() {
  return d0 || (d0 = 1, (function(n, r) {
    r.__esModule = !0;
    var s = nn(), i = void 0;
    try {
      var o = pS();
      i = o.SourceNode;
    } catch {
    }
    i || (i = function(m, p, b, g) {
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
    function c(m, p, b) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, _ = m.length; E < _; E++)
          g.push(p.wrap(m[E], b));
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
      prepend: function(p, b) {
        this.source.unshift(this.wrap(p, b));
      },
      push: function(p, b) {
        this.source.push(this.wrap(p, b));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(b) {
          p.add(["  ", b, `
`]);
        }), p;
      },
      each: function(p) {
        for (var b = 0, g = this.source.length; b < g; b++)
          p(this.source[b]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new i(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var b = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof i ? p : (p = c(p, this, b), new i(b.start.line, b.start.column, this.srcFile, p));
      },
      functionCall: function(p, b, g) {
        return g = this.generateList(g), this.wrap([p, b ? "." + b + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var b = this, g = [];
        Object.keys(p).forEach(function(_) {
          var S = c(p[_], b);
          S !== "undefined" && g.push([b.quotedString(_), ":", S]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var b = this.empty(), g = 0, E = p.length; g < E; g++)
          g && b.add(","), b.add(c(p[g], this));
        return b;
      },
      generateArray: function(p) {
        var b = this.generateList(p);
        return b.prepend("["), b.add("]"), b;
      }
    }, r.default = f, n.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var f0;
function gS() {
  return f0 || (f0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var i = Vf(), o = In(), c = s(o), f = nn(), m = mS(), p = s(m);
    function b(_) {
      this.value = _;
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
        var O = S.opcodes, x = void 0, z = void 0, l = void 0, v = void 0;
        for (l = 0, v = O.length; l < v; l++)
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
        for (l = 0, v = L.length; l < v; l++)
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
          var v = h.aliases[l];
          v.children && v.referenceCount > 1 && (C += ", alias" + ++O + "=" + l, v.children[0] = "alias" + O);
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
            var v = x.nameLookup(l, h[C], S);
            return A ? [" && ", v] : [" != null ? ", v, " : ", l];
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
            var v = this.context.programs.length;
            A.index = v, A.name = "program" + v, this.context.programs[v] = O.compile(A, h, this.context, !this.precompile), this.context.decorators[v] = O.decorators, this.context.environments[v] = A, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, A.useDepths = this.useDepths, A.useBlockParams = this.useBlockParams;
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
        return S instanceof b || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new b(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, A = void 0, O = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var x = this.popStack(!0);
        if (x instanceof b)
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
          if (A instanceof b)
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
        if (!S && C instanceof b)
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
        return h instanceof b ? h.value : h;
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
        var A = {}, O = [], x = [], z = [], l = !C, v = void 0;
        l && (C = []), A.name = this.quotedString(S), A.hash = this.popStack(), this.trackIds && (A.hashIds = this.popStack()), this.stringParams && (A.hashTypes = this.popStack(), A.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (A.fn = k || "container.noop", A.inverse = w || "container.noop");
        for (var R = h; R--; )
          v = this.popStack(), C[R] = v, this.trackIds && (z[R] = this.popStack()), this.stringParams && (x[R] = this.popStack(), O[R] = this.popStack());
        return l && (A.args = this.source.generateArray(C)), this.trackIds && (A.ids = this.source.generateArray(z)), this.stringParams && (A.types = this.source.generateArray(x), A.contexts = this.source.generateArray(O)), this.options.data && (A.data = "data"), this.useBlockParams && (A.blockParams = "blockParams"), A;
      },
      setupHelperArgs: function(S, h, C, A) {
        var O = this.setupParams(S, h, C);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), A ? (this.useRegister("options"), C.push("options"), ["options=", O]) : C ? (C.push(O), "") : O;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = g.RESERVED_WORDS = {}, h = 0, C = _.length; h < C; h++)
        S[_[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(_) {
      return !g.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function E(_, S, h, C, A) {
      var O = S.popStack(), x = h.length;
      for (_ && x--; C < x; C++)
        O = S.nameLookup(O, h[C], A);
      return _ ? [S.aliasable("container.strict"), "(", O, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : O;
    }
    r.default = g, n.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var h0;
function vS() {
  return h0 || (h0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    var i = nS(), o = s(i), c = Cy(), f = s(c), m = sS(), p = uS(), b = gS(), g = s(b), E = ky(), _ = s(E), S = Ey(), h = s(S), C = o.default.create;
    function A() {
      var x = C();
      return x.compile = function(z, l) {
        return p.compile(z, l, x);
      }, x.precompile = function(z, l) {
        return p.precompile(z, l, x);
      }, x.AST = f.default, x.Compiler = p.Compiler, x.JavaScriptCompiler = g.default, x.Parser = m.parser, x.parse = m.parse, x.parseWithoutProcessing = m.parseWithoutProcessing, x;
    }
    var O = A();
    O.create = A, h.default(O), O.Visitor = _.default, O.default = O, r.default = O, n.exports = r.default;
  })(Ao, Ao.exports)), Ao.exports;
}
var Qn = vS();
const je = SillyTavern.getContext();
new G0("dumb", {}).getSettings();
async function Ny({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: i,
  entriesGroupByWorldName: o,
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
  const E = g.api ? je.CONNECT_API_MAP[g.api].selected : void 0;
  if (!E)
    throw new Error(`Could not determine API for profile "${g.name}".`);
  const _ = {};
  _.user = "{{user}}", _.char = "{{char}}", _.persona = "{{persona}}", _.blackListedEntries = i.blackListedEntries;
  const S = r.trim();
  p && p.mode === "revise" ? _.userInstructions = "" : _.userInstructions = Qn.compile(S, { noEscape: !0 })(_);
  {
    const x = {};
    Object.entries(o).filter(
      ([z, l]) => l.length > 0 && i.selectedWorldNames.includes(z) && l.some((v) => !v?.disable)
    ).forEach(([z, l]) => {
      let v = l.filter((k) => !k?.disable);
      const w = i.selectedEntryUids?.[z];
      if (w && w.length > 0) {
        const k = new Set(w);
        v = v.filter((R) => k.has(R.uid));
      }
      v.length > 0 && (x[z] = v);
    }), _.currentLorebooks = x;
  }
  {
    const x = {};
    Object.entries(i.suggestedEntries).filter(([z, l]) => l.length > 0).forEach(([z, l]) => {
      x[z] = l.filter(
        (v) => !(z === p?.worldName && v.uid === p.entry.uid && v.comment === p.entry.comment)
      );
    }), _.suggestedLorebooks = x;
  }
  const h = [];
  {
    for (const x of f) {
      if (x.promptName === "chatHistory") {
        h.push(...(await ty(E, s)).result);
        continue;
      }
      const z = c[x.promptName];
      if (!z)
        continue;
      const l = {
        role: x.role,
        content: Qn.compile(z.content, { noEscape: !0 })(_)
      };
      l.content = je.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: H8(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: q8(p.worldName, p.entry)
    }), S && h.push({
      role: "user",
      content: S
    })));
  }
  const C = await je.ConnectionManagerRequestService.sendRequest(
    n,
    h,
    m
  ), A = h.find((x) => x.role === "assistant");
  if (!C.content)
    return {};
  let O = _y(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? A?.content : void 0
  });
  return Object.keys(O).length === 0 ? {} : (Object.entries(O).forEach(([x, z]) => {
    o[x] && z.forEach((l) => {
      const v = o[x]?.find((w) => w.uid === l.uid);
      v && (l.key.length === 0 && (l.key = v.key), l.comment || (l.comment = v.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), O = p ? { [p.worldName]: [O[p.worldName][0]] } : O, O);
}
function yS(n, r, s) {
  s[r] || (s[r] = []);
  const i = s[r], o = i.findIndex((m) => m.uid === n.uid);
  let c;
  const f = o !== -1;
  if (f)
    c = i[o];
  else {
    const m = { entries: {} };
    i.forEach((g) => m.entries[g.uid] = g);
    const p = Bf(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const b = i.length > 0 ? i[i.length - 1] : void 0;
    if (b) {
      const g = p.uid;
      Object.assign(p, b), p.uid = g;
    }
    c = p, i.push(c);
  }
  return c.key = n.key, c.content = n.content, c.comment = n.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function _S() {
  const n = je.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((i) => i.name?.includes(s))?.name
  }));
}
const Ni = "SillyTavern-WorldInfo-Recommender", bS = "0.2.0", SS = "F_1.3", wS = {
  EXTENSION: "worldInfoRecommender"
}, Ko = [
  "stDescription",
  "currentLorebooks",
  "blackListedEntries",
  "suggestedLorebooks",
  "responseRules",
  "taskDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription"
], Nt = {
  stDescription: z3,
  currentLorebooks: L3,
  blackListedEntries: P3,
  suggestedLorebooks: I3,
  responseRules: B3,
  taskDescription: U3,
  reviseJsonPrompt: H3,
  reviseXmlPrompt: q3,
  reviseTaskDescription: Z3
}, Yf = {
  version: bS,
  formatVersion: SS,
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
      content: Nt.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: Nt.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: Nt.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: Nt.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: Nt.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: Nt.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: Nt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: Nt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: Nt.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
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
function p0(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let i = !1;
  return s.map((o, c) => {
    const f = o.replace(/^\d+/, "");
    if (f) {
      const m = i ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return i || (i = !0), m;
    }
    return "";
  }).join("");
}
const Ut = new G0(wS.EXTENSION, Yf);
async function ES() {
  return new Promise((n, r) => {
    Ut.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const i = {
              ...Yf,
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
{{userInstructions}}` ? (i.prompts.taskDescription.content = Nt.taskDescription, i.prompts.taskDescription.isDefault = !0) : i.prompts.taskDescription.isDefault = !1, i;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.3", i.defaultPromptEngineeringMode = "native", i.prompts || (i.prompts = {}), i.prompts.reviseJsonPrompt = {
              content: Nt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, i.prompts.reviseXmlPrompt = {
              content: Nt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, i.prompts.reviseTaskDescription = {
              content: Nt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (i.prompts.currentLorebooks.content = Nt.currentLorebooks, i.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (i.prompts.blackListedEntries.content = Nt.blackListedEntries, i.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (i.prompts.suggestedLorebooks.content = Nt.suggestedLorebooks, i.prompts.suggestedLorebooks.isDefault = !0), i;
          }
        }
      ]
    }).then((s) => {
      n();
    }).catch((s) => {
      console.error(`[${Ni}] Error initializing settings:`, s), _e("error", `[${Ni}] Failed to initialize settings: ${s.message}`), je.Popup.show.confirm(
        `[${Ni}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((i) => {
        i && (Ut.resetSettings(), _e("success", `[${Ni}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const Ne = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const o = ie.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("button", { className: o, ...i, children: n });
}, Oy = ({ label: n, className: r, overrideDefaults: s = !1, type: i = "text", ...o }) => {
  const c = ie.useMemo(() => {
    const f = [];
    return s || (i === "text" || i === "number" || i === "password" || i === "email" || i === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, i]);
  if (i === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: f, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...o }),
      n && /* @__PURE__ */ N.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: i, className: c, ...o });
}, _l = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const o = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("select", { className: o, ...i, children: n });
}, _r = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const o = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("textarea", { className: o, ...i, children: n });
};
var CS = Z0(), zt = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(zt || {}), Fr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Fr || {});
const kS = SillyTavern.getContext(), Xn = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: i = {},
  preventEscape: o = !1,
  onComplete: c
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [b, g] = ie.useState(!1), [E, _] = ie.useState(null), S = ie.useRef(kS.uuidv4()), h = ie.useRef({
    id: S.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ie.useEffect(() => {
    const x = m.current;
    if (!x) return;
    const z = (l) => {
      l.preventDefault(), o || C(Fr.CANCELLED);
    };
    return x.addEventListener("cancel", z), h.current.dlg = x, h.current.mainInput = p.current, Si.util.popups.push(h.current), x.showModal || (x.classList.add("poly_dialog"), $g.registerDialog(x), new ResizeObserver((l) => {
      for (const v of l)
        $g.reposition(v.target);
    }).observe(x)), x.showModal(), Ud(), () => {
      Yg(Si.util.popups, h.current), Ud(), x.removeEventListener("cancel", z);
    };
  }, []);
  const C = async (x) => {
    var z, l;
    let v = x;
    if (r === zt.INPUT && (x >= Fr.AFFIRMATIVE ? v = (z = p.current) == null ? void 0 : z.value : x === Fr.NEGATIVE ? v = !1 : x === Fr.CANCELLED ? v = null : v = !1), (l = i.customInputs) != null && l.length) {
      const k = new Map(
        i.customInputs.map((R) => {
          var L;
          const j = (L = m.current) == null ? void 0 : L.querySelector(`#${R.id}`);
          return [j.id, j.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = x, h.current.value = v, i.onClosing && !await i.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Si.util.lastResult = {
      value: v,
      result: x,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Ud(), V1(w, async () => {
      var k;
      if (w.close(), i.onClose && await i.onClose(h.current), Yg(Si.util.popups, h.current), Si.util.popups.length > 0) {
        const R = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), L = R?.getAttribute("data-id"), j = Si.util.popups.find((P) => P.id === L);
        j && j.lastFocus && j.lastFocus.focus();
      }
      c(v);
    }));
  }, A = (x) => {
    x.target instanceof HTMLElement && x.target !== m.current && (_(x.target), h.current.lastFocus = x.target);
  }, O = async (x) => {
  };
  return CS.createPortal(
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
          r === zt.INPUT && /* @__PURE__ */ N.jsx(
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
          r !== zt.DISPLAY && /* @__PURE__ */ N.jsxs("div", { className: "popup-controls", children: [
            (f = i.customButtons) == null ? void 0 : f.map((x, z) => {
              const l = typeof x == "string" ? { text: x, result: z + 2 } : x;
              return /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${l.classes ?? ""}`,
                  "data-result": l.result,
                  onClick: () => {
                    var v;
                    (v = l.action) == null || v.call(l), C(l.result ?? z + 2);
                  },
                  "data-i18n": l.text,
                  children: l.text
                },
                z
              );
            }),
            r !== zt.DISPLAY && i.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Fr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof i.okButton == "string" ? i.okButton : "OK"
              }
            ),
            r !== zt.DISPLAY && i.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Fr.NEGATIVE),
                "data-result": "0",
                children: typeof i.cancelButton == "string" ? i.cancelButton : "Cancel"
              }
            )
          ] }),
          r === zt.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Fr.CANCELLED),
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
}, Us = (n, r, s) => {
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
}, vr = SillyTavern.getContext(), My = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: i,
  onCreate: o,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = ie.useState(n ?? ""), [b, g] = ie.useState(Date.now()), { isEnabled: E, profiles: _, connectApiMap: S } = ie.useMemo(() => {
    var A, O;
    return (A = vr.extensionSettings.disabledExtensions) != null && A.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = vr.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: vr.CONNECT_API_MAP
    };
  }, [b]);
  ie.useEffect(() => {
    if (!E) return;
    const A = (z) => {
      Us(z, r, S) && (g(Date.now()), o?.(z));
    }, O = (z, l) => {
      const v = Us(z, r, S), w = Us(l, r, S);
      (v || w) && g(Date.now()), c?.(z, l), m === z.id && !w && (p(""), i?.(void 0));
    }, x = (z) => {
      Us(z, r, S) && (g(Date.now()), f?.(z), m === z.id && (p(""), i?.(void 0)));
    };
    return vr.eventSource.on("CONNECTION_PROFILE_CREATED", A), vr.eventSource.on("CONNECTION_PROFILE_UPDATED", O), vr.eventSource.on("CONNECTION_PROFILE_DELETED", x), () => {
      vr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", A), vr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), vr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", x);
    };
  }, [E, m, r, S, i, o, c, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const A = _.filter((x) => Us(x, r, S)), O = {};
    for (const [x, z] of Object.entries(r))
      O[x] = { label: z, profiles: [] };
    for (const x of A) {
      const z = S[x.api];
      O[z.selected] && O[z.selected].profiles.push(x);
    }
    for (const x of Object.values(O))
      x.profiles.sort((z, l) => (z.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(O).filter((x) => x.profiles.length > 0);
  }, [E, _, r, S]), C = ie.useCallback(
    (A) => {
      const O = A.target.value;
      p(O);
      const x = _.find((z) => z.id === O);
      i?.(x);
    },
    [_, i]
  );
  return E ? /* @__PURE__ */ N.jsxs(_l, { value: m, onChange: C, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: s }),
    h.map((A) => /* @__PURE__ */ N.jsx("optgroup", { label: A.label, children: A.profiles.map((O) => /* @__PURE__ */ N.jsx("option", { value: O.id, children: O.name }, O.id)) }, A.label))
  ] }) : /* @__PURE__ */ N.jsx(_l, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, AS = dl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: i, onToggle: o, onDelete: c, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: b,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: _ = !0,
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
      opacity: r && !b ? 0.6 : 1
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
      i && _ && S && /* @__PURE__ */ N.jsx(
        _l,
        {
          value: C,
          onChange: (z) => f(m, z.target.value),
          disabled: !b,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : h.map((z) => /* @__PURE__ */ N.jsx("option", { value: z.value, children: z.label }, z.value))
        }
      ),
      i && (!_ || !S) && /* @__PURE__ */ N.jsx("span", { style: x }),
      r && E && /* @__PURE__ */ N.jsx(
        Ne,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${b ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: b ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(m)
        }
      ),
      r && !E && /* @__PURE__ */ N.jsx("span", { style: x }),
      s && g && /* @__PURE__ */ N.jsx(
        Ne,
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
), Ry = ({
  items: n,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: i = !1,
  showSelectInput: o = !1,
  sortableJsOptions: c = {}
}) => {
  const f = ie.useRef(null), m = ie.useRef(null);
  ie.useEffect(() => (f.current && (m.current = Ae.create(f.current, {
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
      const { oldIndex: _, newIndex: S } = E;
      if (_ === void 0 || S === void 0 || _ === S)
        return;
      const h = Array.from(n), [C] = h.splice(_, 1);
      h.splice(S, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [n, r, c]);
  const p = (E) => {
    r(n.map((_) => _.id === E ? { ..._, enabled: !_.enabled } : _));
  }, b = (E) => {
    r(n.filter((_) => _.id !== E));
  }, g = (E, _) => {
    r(n.map((S) => S.id === E ? { ...S, selectValue: _ } : S));
  };
  return /* @__PURE__ */ N.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((E) => /* @__PURE__ */ N.jsx(
    AS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: i,
      showSelectInput: o,
      onToggle: p,
      onDelete: b,
      onSelectChange: g
    },
    E.id
  )) });
}, jy = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: i = "Select items...",
  closeOnSelect: o = !1,
  multiple: c = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: b = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: _,
  containerClasses: S
}) => {
  const [h, C] = ie.useState(!1), [A, O] = ie.useState(""), x = ie.useRef(null);
  ie.useEffect(() => {
    const k = (R) => {
      x.current && !x.current.contains(R.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ie.useEffect(() => {
    h || O("");
  }, [h]);
  const z = ie.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new Di(n, k);
  }, [n, p, E]), l = ie.useMemo(() => !p || !A.trim() || !z ? n : z.search(A.trim()).map((k) => k.item), [n, A, p, z]), v = async (k) => {
    let R;
    c ? R = r.includes(k) ? r.filter((L) => L !== k) : [...r, k] : R = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, R))) && (s(R), o && C(!1));
  }, w = ie.useMemo(() => {
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
                    Oy,
                    {
                      type: "text",
                      placeholder: b,
                      value: A,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: _
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ N.jsx(
                TS,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: v
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
}, TS = dl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [i, o] = ie.useState(!1);
  return /* @__PURE__ */ N.jsxs(
    "li",
    {
      onClick: () => s(n.value),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
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
}), ff = SillyTavern.getContext(), Tf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: i,
  onChange: o,
  onItemsChange: c,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: b,
  onRename: g,
  onDelete: E,
  buttons: _
}) => {
  const S = ie.useMemo(() => r.find((x) => x.value === n), [r, n]), h = ie.useCallback((x) => x ? s.includes(x) : !1, [s]), C = async () => {
    const x = await ff.Popup.show.input(
      `Create a new ${i}`,
      `Please enter a name for the new ${i}:`,
      ""
    );
    if (!x || x.trim() === "") return;
    const z = x.trim();
    if (r.some((v) => v.value === z)) {
      await _e("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: z, label: z };
    if (b) {
      const v = await Promise.resolve(b(z));
      if (!v.confirmed) return;
      v.value && (typeof v.value == "string" ? l = { value: v.value, label: v.value } : l = v.value);
    }
    c([...r, l]), o(l.value, n);
  }, A = async () => {
    if (!S) {
      await _e("warning", `Please select a ${i} to rename.`);
      return;
    }
    if (h(S.value)) {
      await _e("warning", `This ${i} cannot be renamed as it is read-only.`);
      return;
    }
    const x = await ff.Popup.show.input(
      `Rename ${i}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!x || x.trim() === "" || x.trim() === S.value) return;
    const z = x.trim();
    if (r.some((w) => w.value === z)) {
      await _e("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: z, label: z };
    if (g) {
      const w = await Promise.resolve(g(S.value, z));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const v = r.map((w) => w.value === S.value ? l : w);
    c(v), o(l.value, n);
  }, O = async () => {
    var x;
    if (!S) {
      await _e("warning", `Please select a ${i} to delete.`);
      return;
    }
    if (h(S.value)) {
      await _e("warning", `This ${i} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await ff.Popup.show.confirm(
      `Delete ${i}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const z = r.findIndex((w) => w.value === S.value), l = r.filter((w) => w.value !== S.value);
    c(l);
    let v;
    if (l.length > 0) {
      const w = Math.min(z, l.length - 1);
      v = (x = l[w]) == null ? void 0 : x.value;
    }
    o(v, n);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(_l, { value: n ?? "", onChange: (x) => o(x.target.value, n), children: r.map((x) => /* @__PURE__ */ N.jsx("option", { value: x.value, children: x.label }, x.value)) }),
    f && /* @__PURE__ */ N.jsx(
      Ne,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${i}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${i}`
      }
    ),
    m && /* @__PURE__ */ N.jsx(
      Ne,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${i}`,
        onClick: A,
        disabled: !S,
        "data-i18n": `[title]Rename selected ${i}`
      }
    ),
    p && /* @__PURE__ */ N.jsx(
      Ne,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${i}`,
        onClick: O,
        disabled: !S,
        "data-i18n": `[title]Delete selected ${i}`
      }
    ),
    _?.map((x) => /* @__PURE__ */ N.jsx(
      Ne,
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
}, Dy = () => {
  const [, n] = ie.useState(0);
  return ie.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, hf = SillyTavern.getContext(), xS = () => {
  const n = Dy(), r = Ut.getSettings(), [s, i] = ie.useState(Ko[0]), o = ie.useCallback(
    (l) => {
      const v = Ut.getSettings();
      l(v), Ut.saveSettings(), n();
    },
    [n]
  ), c = ie.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((l) => ({
      value: l,
      label: l
    })),
    [r.mainContextTemplatePresets]
  ), f = ie.useMemo(
    () => Object.keys(r.prompts).map((l) => {
      const v = r.prompts[l];
      return {
        value: l,
        label: v ? `${v.label} (${l})` : l
      };
    }),
    [r.prompts]
  ), m = ie.useMemo(() => {
    const l = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return l ? l.prompts.map((v) => {
      const w = r.prompts[v.promptName], k = w ? `${w.label} (${v.promptName})` : v.promptName;
      return {
        id: v.promptName,
        label: k,
        enabled: v.enabled,
        selectValue: v.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (l) => {
    o((v) => {
      v.mainContextTemplatePreset = l ?? "default";
    });
  }, b = (l) => {
    o((v) => {
      const w = {}, k = v.mainContextTemplatePresets;
      l.forEach((R) => {
        w[R.value] = k[R.value] ?? structuredClone(k[v.mainContextTemplatePreset] ?? k.default);
      }), v.mainContextTemplatePresets = w;
    });
  }, g = (l) => {
    o((v) => {
      const w = l.map((R) => ({
        promptName: R.id,
        enabled: R.enabled,
        role: R.selectValue ?? "user"
      })), k = {
        ...v.mainContextTemplatePresets[v.mainContextTemplatePreset],
        prompts: w
      };
      v.mainContextTemplatePresets = {
        ...v.mainContextTemplatePresets,
        [v.mainContextTemplatePreset]: k
      };
    });
  }, E = async () => {
    await hf.Popup.show.confirm("Restore default", "Are you sure?") && o((v) => {
      v.mainContextTemplatePresets = {
        ...v.mainContextTemplatePresets,
        default: structuredClone(Yf.mainContextTemplatePresets.default)
      }, v.mainContextTemplatePreset = "default";
    });
  }, _ = (l) => {
    o((v) => {
      const w = {}, k = v.prompts, R = Object.keys(k), L = l.map((P) => P.value);
      L.forEach((P) => {
        w[P] = k[P] ?? { content: "", isDefault: !1, label: P };
      }), v.prompts = w;
      const j = R.filter((P) => !L.includes(P));
      if (j.length > 0) {
        const P = Object.fromEntries(
          Object.entries(v.mainContextTemplatePresets).map(([G, X]) => [
            G,
            {
              ...X,
              prompts: X.prompts.filter((Y) => !j.includes(Y.promptName))
            }
          ])
        );
        v.mainContextTemplatePresets = P;
      }
    });
  }, S = (l) => {
    const v = p0(l);
    return v ? r.prompts[v] ? (_e("error", `Prompt name already exists: ${v}`), { confirmed: !1 }) : (o((w) => {
      w.prompts = {
        ...w.prompts,
        [v]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: l
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, R]) => [
          k,
          {
            ...R,
            prompts: [...R.prompts, { enabled: !0, promptName: v, role: "user" }]
          }
        ])
      );
    }), i(v), { confirmed: !0, value: v }) : (_e("error", `Invalid prompt name: ${l}`), { confirmed: !1 });
  }, h = (l, v) => {
    const w = p0(v);
    return w ? r.prompts[w] ? (_e("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (o((k) => {
      const { [l]: R, ...L } = k.prompts;
      k.prompts = {
        ...L,
        [w]: { ...R, label: v }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([j, P]) => [
          j,
          {
            ...P,
            prompts: P.prompts.map((G) => G.promptName === l ? { ...G, promptName: w } : G)
          }
        ])
      );
    }), i(w), { confirmed: !0, value: w }) : (_e("error", `Invalid prompt name: ${v}`), { confirmed: !1 });
  }, C = (l) => {
    const v = l.target.value;
    o((w) => {
      const k = w.prompts[s];
      k && (w.prompts = {
        ...w.prompts,
        [s]: {
          ...k,
          content: v,
          isDefault: Ko.includes(s) ? Nt[s] === v : !1
        }
      });
    });
  }, A = async () => {
    const l = r.prompts[s];
    if (!l) return _e("warning", "No prompt selected.");
    await hf.Popup.show.confirm("Restore Default", `Restore default for "${l.label}"?`) && o((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: Nt[s]
        }
      };
    });
  }, O = async () => {
    await hf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Ut.resetSettings(), n(), _e("success", "Settings reset. The UI has been updated."));
  }, x = r.prompts[s]?.content ?? "", z = Ko.includes(s);
  return /* @__PURE__ */ N.jsxs("div", { className: "world-info-recommender-settings", children: [
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ N.jsx(
          Ne,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Tf,
        {
          label: "Template",
          items: c,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: b,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ N.jsx(
        Ry,
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
          Ne,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: A
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Tf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: Ko,
          onChange: (l) => i(l ?? ""),
          onItemsChange: _,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: S,
          onRename: h
        }
      ),
      /* @__PURE__ */ N.jsx(
        _r,
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
    /* @__PURE__ */ N.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ N.jsxs(Ne, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ N.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
};
var cl = { exports: {} }, NS = cl.exports, m0;
function OS() {
  return m0 || (m0 = 1, (function(n) {
    (function() {
      function r(l) {
        var v = {
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
          return JSON.parse(JSON.stringify(v));
        var w = {};
        for (var k in v)
          v.hasOwnProperty(k) && (w[k] = v[k].defaultValue);
        return w;
      }
      function s() {
        var l = r(!0), v = {};
        for (var w in l)
          l.hasOwnProperty(w) && (v[w] = !0);
        return v;
      }
      var i = {}, o = {}, c = {}, f = r(!0), m = "vanilla", p = {
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
      i.helper = {}, i.extensions = {}, i.setOption = function(l, v) {
        return f[l] = v, this;
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
        var v = p[l];
        m = l;
        for (var w in v)
          v.hasOwnProperty(w) && (f[w] = v[w]);
      }, i.getFlavor = function() {
        return m;
      }, i.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
      }, i.getDefaultOptions = function(l) {
        return r(l);
      }, i.subParser = function(l, v) {
        if (i.helper.isString(l))
          if (typeof v < "u")
            o[l] = v;
          else {
            if (o.hasOwnProperty(l))
              return o[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, i.extension = function(l, v) {
        if (!i.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = i.helper.stdExtName(l), i.helper.isUndefined(v)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof v == "function" && (v = v()), i.helper.isArray(v) || (v = [v]);
          var w = b(v, l);
          if (w.valid)
            c[l] = v;
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
      function b(l, v) {
        var w = v ? "Error in " + v + " extension->" : "Error in unnamed extension", k = {
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
            for (var G in j.listeners)
              if (j.listeners.hasOwnProperty(G) && typeof j.listeners[G] != "function")
                return k.valid = !1, k.error = L + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + G + " must be a function but " + typeof j.listeners[G] + " given", k;
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
        var v = b(l, null);
        return v.valid ? !0 : (console.warn(v.error), !1);
      }, i.hasOwnProperty("helper") || (i.helper = {}), i.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, i.helper.isFunction = function(l) {
        var v = {};
        return l && v.toString.call(l) === "[object Function]";
      }, i.helper.isArray = function(l) {
        return Array.isArray(l);
      }, i.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, i.helper.forEach = function(l, v) {
        if (i.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (i.helper.isUndefined(v))
          throw new Error("callback param is required");
        if (!i.helper.isFunction(v))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(v);
        else if (i.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            v(l[w], w, l);
        else if (typeof l == "object")
          for (var k in l)
            l.hasOwnProperty(k) && v(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, i.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, v) {
        var w = v.charCodeAt(0);
        return "¨E" + w + "E";
      }
      i.helper.escapeCharactersCallback = g, i.helper.escapeCharacters = function(l, v, w) {
        var k = "([" + v.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var R = new RegExp(k, "g");
        return l = l.replace(R, g), l;
      }, i.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, v, w, k) {
        var R = k || "", L = R.indexOf("g") > -1, j = new RegExp(v + "|" + w, "g" + R.replace(/g/g, "")), P = new RegExp(v, R.replace(/g/g, "")), G = [], X, Y, J, M, B;
        do
          for (X = 0; J = j.exec(l); )
            if (P.test(J[0]))
              X++ || (Y = j.lastIndex, M = Y - J[0].length);
            else if (X && !--X) {
              B = J.index + J[0].length;
              var Q = {
                left: { start: M, end: Y },
                match: { start: Y, end: J.index },
                right: { start: J.index, end: B },
                wholeMatch: { start: M, end: B }
              };
              if (G.push(Q), !L)
                return G;
            }
        while (X && (j.lastIndex = Y));
        return G;
      };
      i.helper.matchRecursiveRegExp = function(l, v, w, k) {
        for (var R = E(l, v, w, k), L = [], j = 0; j < R.length; ++j)
          L.push([
            l.slice(R[j].wholeMatch.start, R[j].wholeMatch.end),
            l.slice(R[j].match.start, R[j].match.end),
            l.slice(R[j].left.start, R[j].left.end),
            l.slice(R[j].right.start, R[j].right.end)
          ]);
        return L;
      }, i.helper.replaceRecursiveRegExp = function(l, v, w, k, R) {
        if (!i.helper.isFunction(v)) {
          var L = v;
          v = function() {
            return L;
          };
        }
        var j = E(l, w, k, R), P = l, G = j.length;
        if (G > 0) {
          var X = [];
          j[0].wholeMatch.start !== 0 && X.push(l.slice(0, j[0].wholeMatch.start));
          for (var Y = 0; Y < G; ++Y)
            X.push(
              v(
                l.slice(j[Y].wholeMatch.start, j[Y].wholeMatch.end),
                l.slice(j[Y].match.start, j[Y].match.end),
                l.slice(j[Y].left.start, j[Y].left.end),
                l.slice(j[Y].right.start, j[Y].right.end)
              )
            ), Y < G - 1 && X.push(l.slice(j[Y].wholeMatch.end, j[Y + 1].wholeMatch.start));
          j[G - 1].wholeMatch.end < l.length && X.push(l.slice(j[G - 1].wholeMatch.end)), P = X.join("");
        }
        return P;
      }, i.helper.regexIndexOf = function(l, v, w) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(v instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(v);
        return k >= 0 ? k + (w || 0) : k;
      }, i.helper.splitAtIndex = function(l, v) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, v), l.substring(v)];
      }, i.helper.encodeEmailAddress = function(l) {
        var v = [
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
            w = v[Math.floor(Math.random() * 2)](w);
          else {
            var k = Math.random();
            w = k > 0.9 ? v[2](w) : k > 0.45 ? v[1](w) : v[0](w);
          }
          return w;
        }), l;
      }, i.helper.padEnd = function(v, w, k) {
        return w = w >> 0, k = String(k || " "), v.length > w ? String(v) : (w = w - v.length, w > k.length && (k += k.repeat(w / k.length)), String(v) + k.slice(0, w));
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
        var v = {}, w = [], k = [], R = {}, L = m, j = {
          parsed: {},
          raw: "",
          format: ""
        };
        P();
        function P() {
          l = l || {};
          for (var M in f)
            f.hasOwnProperty(M) && (v[M] = f[M]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (v[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          v.extensions && i.helper.forEach(v.extensions, G);
        }
        function G(M, B) {
          if (B = B || null, i.helper.isString(M))
            if (M = i.helper.stdExtName(M), B = M, i.extensions[M]) {
              console.warn("DEPRECATION WARNING: " + M + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), X(i.extensions[M], M);
              return;
            } else if (!i.helper.isUndefined(c[M]))
              M = c[M];
            else
              throw Error('Extension "' + M + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof M == "function" && (M = M()), i.helper.isArray(M) || (M = [M]);
          var Q = b(M, B);
          if (!Q.valid)
            throw Error(Q.error);
          for (var re = 0; re < M.length; ++re) {
            switch (M[re].type) {
              case "lang":
                w.push(M[re]);
                break;
              case "output":
                k.push(M[re]);
                break;
            }
            if (M[re].hasOwnProperty("listeners"))
              for (var I in M[re].listeners)
                M[re].listeners.hasOwnProperty(I) && Y(I, M[re].listeners[I]);
          }
        }
        function X(M, B) {
          typeof M == "function" && (M = M(new i.Converter())), i.helper.isArray(M) || (M = [M]);
          var Q = b(M, B);
          if (!Q.valid)
            throw Error(Q.error);
          for (var re = 0; re < M.length; ++re)
            switch (M[re].type) {
              case "lang":
                w.push(M[re]);
                break;
              case "output":
                k.push(M[re]);
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
        function J(M) {
          var B = M.match(/^\s*/)[0].length, Q = new RegExp("^\\s{0," + B + "}", "gm");
          return M.replace(Q, "");
        }
        this._dispatch = function(B, Q, re, I) {
          if (R.hasOwnProperty(B))
            for (var H = 0; H < R[B].length; ++H) {
              var ne = R[B][H](B, Q, this, re, I);
              ne && typeof ne < "u" && (Q = ne);
            }
          return Q;
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
`), M = M.replace(/\u00A0/g, "&nbsp;"), v.smartIndentationFix && (M = J(M)), M = `

` + M + `

`, M = i.subParser("detab")(M, v, B), M = M.replace(/^[ \t]+$/mg, ""), i.helper.forEach(w, function(Q) {
            M = i.subParser("runExtension")(Q, M, v, B);
          }), M = i.subParser("metadata")(M, v, B), M = i.subParser("hashPreCodeTags")(M, v, B), M = i.subParser("githubCodeBlocks")(M, v, B), M = i.subParser("hashHTMLBlocks")(M, v, B), M = i.subParser("hashCodeTags")(M, v, B), M = i.subParser("stripLinkDefinitions")(M, v, B), M = i.subParser("blockGamut")(M, v, B), M = i.subParser("unhashHTMLSpans")(M, v, B), M = i.subParser("unescapeSpecialChars")(M, v, B), M = M.replace(/¨D/g, "$$"), M = M.replace(/¨T/g, "¨"), M = i.subParser("completeHTMLDocument")(M, v, B), i.helper.forEach(k, function(Q) {
            M = i.subParser("runExtension")(Q, M, v, B);
          }), j = B.metadata, M;
        }, this.makeMarkdown = this.makeMd = function(M, B) {
          if (M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
            if (window && window.document)
              B = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var Q = B.createElement("div");
          Q.innerHTML = M;
          var re = {
            preList: q(Q)
          };
          oe(Q);
          for (var I = Q.childNodes, H = "", ne = 0; ne < I.length; ne++)
            H += i.subParser("makeMarkdown.node")(I[ne], re);
          function oe(ee) {
            for (var te = 0; te < ee.childNodes.length; ++te) {
              var de = ee.childNodes[te];
              de.nodeType === 3 ? !/\S/.test(de.nodeValue) && !/^[ ]+$/.test(de.nodeValue) ? (ee.removeChild(de), --te) : (de.nodeValue = de.nodeValue.split(`
`).join(" "), de.nodeValue = de.nodeValue.replace(/(\s)+/g, "$1")) : de.nodeType === 1 && oe(de);
            }
          }
          function q(ee) {
            for (var te = ee.querySelectorAll("pre"), de = [], le = 0; le < te.length; ++le)
              if (te[le].childElementCount === 1 && te[le].firstChild.tagName.toLowerCase() === "code") {
                var he = te[le].firstChild.innerHTML.trim(), Re = te[le].firstChild.getAttribute("data-language") || "";
                if (Re === "")
                  for (var be = te[le].firstChild.className.split(" "), me = 0; me < be.length; ++me) {
                    var ge = be[me].match(/^language-(.+)$/);
                    if (ge !== null) {
                      Re = ge[1];
                      break;
                    }
                  }
                he = i.helper.unescapeHTMLEntities(he), de.push(he), te[le].outerHTML = '<precode language="' + Re + '" precodenum="' + le.toString() + '"></precode>';
              } else
                de.push(te[le].innerHTML), te[le].innerHTML = "", te[le].setAttribute("prenum", le.toString());
            return de;
          }
          return H;
        }, this.setOption = function(M, B) {
          v[M] = B;
        }, this.getOption = function(M) {
          return v[M];
        }, this.getOptions = function() {
          return v;
        }, this.addExtension = function(M, B) {
          B = B || null, G(M, B);
        }, this.useExtension = function(M) {
          G(M);
        }, this.setFlavor = function(M) {
          if (!p.hasOwnProperty(M))
            throw Error(M + " flavor was not found");
          var B = p[M];
          L = M;
          for (var Q in B)
            B.hasOwnProperty(Q) && (v[Q] = B[Q]);
        }, this.getFlavor = function() {
          return L;
        }, this.removeExtension = function(M) {
          i.helper.isArray(M) || (M = [M]);
          for (var B = 0; B < M.length; ++B) {
            for (var Q = M[B], re = 0; re < w.length; ++re)
              w[re] === Q && w.splice(re, 1);
            for (var I = 0; I < k.length; ++I)
              k[I] === Q && k.splice(I, 1);
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
      }, i.subParser("anchors", function(l, v, w) {
        l = w.converter._dispatch("anchors.before", l, v, w);
        var k = function(R, L, j, P, G, X, Y) {
          if (i.helper.isUndefined(Y) && (Y = ""), j = j.toLowerCase(), R.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            P = "";
          else if (!P)
            if (j || (j = L.toLowerCase().replace(/ ?\n/g, " ")), P = "#" + j, !i.helper.isUndefined(w.gUrls[j]))
              P = w.gUrls[j], i.helper.isUndefined(w.gTitles[j]) || (Y = w.gTitles[j]);
            else
              return R;
          P = P.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var J = '<a href="' + P + '"';
          return Y !== "" && Y !== null && (Y = Y.replace(/"/g, "&quot;"), Y = Y.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), J += ' title="' + Y + '"'), v.openLinksInNewWindow && !/^#/.test(P) && (J += ' rel="noopener noreferrer" target="¨E95Eblank"'), J += ">" + L + "</a>", J;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), v.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(R, L, j, P, G) {
          if (j === "\\")
            return L + P;
          if (!i.helper.isString(v.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var X = v.ghMentionsLink.replace(/\{u}/g, G), Y = "";
          return v.openLinksInNewWindow && (Y = ' rel="noopener noreferrer" target="¨E95Eblank"'), L + '<a href="' + X + '"' + Y + ">" + P + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, v, w), l;
      });
      var _ = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, A = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, O = function(l) {
        return function(v, w, k, R, L, j, P) {
          k = k.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var G = k, X = "", Y = "", J = w || "", M = P || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && j && (X = j), l.openLinksInNewWindow && (Y = ' rel="noopener noreferrer" target="¨E95Eblank"'), J + '<a href="' + k + '"' + Y + ">" + G + "</a>" + X + M;
        };
      }, x = function(l, v) {
        return function(w, k, R) {
          var L = "mailto:";
          return k = k || "", R = i.subParser("unescapeSpecialChars")(R, l, v), l.encodeEmails ? (L = i.helper.encodeEmailAddress(L + R), R = i.helper.encodeEmailAddress(R)) : L = L + R, k + '<a href="' + L + '">' + R + "</a>";
        };
      };
      i.subParser("autoLinks", function(l, v, w) {
        return l = w.converter._dispatch("autoLinks.before", l, v, w), l = l.replace(h, O(v)), l = l.replace(A, x(v, w)), l = w.converter._dispatch("autoLinks.after", l, v, w), l;
      }), i.subParser("simplifiedAutoLinks", function(l, v, w) {
        return v.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, v, w), v.excludeTrailingPunctuationFromURLs ? l = l.replace(S, O(v)) : l = l.replace(_, O(v)), l = l.replace(C, x(v, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, v, w)), l;
      }), i.subParser("blockGamut", function(l, v, w) {
        return l = w.converter._dispatch("blockGamut.before", l, v, w), l = i.subParser("blockQuotes")(l, v, w), l = i.subParser("headers")(l, v, w), l = i.subParser("horizontalRule")(l, v, w), l = i.subParser("lists")(l, v, w), l = i.subParser("codeBlocks")(l, v, w), l = i.subParser("tables")(l, v, w), l = i.subParser("hashHTMLBlocks")(l, v, w), l = i.subParser("paragraphs")(l, v, w), l = w.converter._dispatch("blockGamut.after", l, v, w), l;
      }), i.subParser("blockQuotes", function(l, v, w) {
        l = w.converter._dispatch("blockQuotes.before", l, v, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return v.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(R) {
          return R = R.replace(/^[ \t]*>[ \t]?/gm, ""), R = R.replace(/¨0/g, ""), R = R.replace(/^[ \t]+$/gm, ""), R = i.subParser("githubCodeBlocks")(R, v, w), R = i.subParser("blockGamut")(R, v, w), R = R.replace(/(^|\n)/g, "$1  "), R = R.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(L, j) {
            var P = j;
            return P = P.replace(/^  /mg, "¨0"), P = P.replace(/¨0/g, ""), P;
          }), i.subParser("hashBlock")(`<blockquote>
` + R + `
</blockquote>`, v, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, v, w), l;
      }), i.subParser("codeBlocks", function(l, v, w) {
        l = w.converter._dispatch("codeBlocks.before", l, v, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(R, L, j) {
          var P = L, G = j, X = `
`;
          return P = i.subParser("outdent")(P, v, w), P = i.subParser("encodeCode")(P, v, w), P = i.subParser("detab")(P, v, w), P = P.replace(/^\n+/g, ""), P = P.replace(/\n+$/g, ""), v.omitExtraWLInCodeBlocks && (X = ""), P = "<pre><code>" + P + X + "</code></pre>", i.subParser("hashBlock")(P, v, w) + G;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, v, w), l;
      }), i.subParser("codeSpans", function(l, v, w) {
        return l = w.converter._dispatch("codeSpans.before", l, v, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, R, L, j) {
            var P = j;
            return P = P.replace(/^([ \t]*)/g, ""), P = P.replace(/[ \t]*$/g, ""), P = i.subParser("encodeCode")(P, v, w), P = R + "<code>" + P + "</code>", P = i.subParser("hashHTMLSpans")(P, v, w), P;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, v, w), l;
      }), i.subParser("completeHTMLDocument", function(l, v, w) {
        if (!v.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, v, w);
        var k = "html", R = `<!DOCTYPE HTML>
`, L = "", j = `<meta charset="utf-8">
`, P = "", G = "";
        typeof w.metadata.parsed.doctype < "u" && (R = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (j = '<meta charset="utf-8">'));
        for (var X in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(X))
            switch (X.toLowerCase()) {
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
                P = ' lang="' + w.metadata.parsed[X] + '"', G += '<meta name="' + X + '" content="' + w.metadata.parsed[X] + `">
`;
                break;
              default:
                G += '<meta name="' + X + '" content="' + w.metadata.parsed[X] + `">
`;
            }
        return l = R + "<html" + P + `>
<head>
` + L + j + G + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, v, w), l;
      }), i.subParser("detab", function(l, v, w) {
        return l = w.converter._dispatch("detab.before", l, v, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, R) {
          for (var L = R, j = 4 - L.length % 4, P = 0; P < j; P++)
            L += " ";
          return L;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, v, w), l;
      }), i.subParser("ellipsis", function(l, v, w) {
        return v.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, v, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, v, w)), l;
      }), i.subParser("emoji", function(l, v, w) {
        if (!v.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, v, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(R, L) {
          return i.helper.emojis.hasOwnProperty(L) ? i.helper.emojis[L] : R;
        }), l = w.converter._dispatch("emoji.after", l, v, w), l;
      }), i.subParser("encodeAmpsAndAngles", function(l, v, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, v, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, v, w), l;
      }), i.subParser("encodeBackslashEscapes", function(l, v, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, v, w), l = l.replace(/\\(\\)/g, i.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, v, w), l;
      }), i.subParser("encodeCode", function(l, v, w) {
        return l = w.converter._dispatch("encodeCode.before", l, v, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, v, w), l;
      }), i.subParser("escapeSpecialCharsWithinTagAttributes", function(l, v, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, v, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, R = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(L) {
          return L.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = l.replace(R, function(L) {
          return L.replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, v, w), l;
      }), i.subParser("githubCodeBlocks", function(l, v, w) {
        return v.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, v, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, R, L, j) {
          var P = v.omitExtraWLInCodeBlocks ? "" : `
`;
          return j = i.subParser("encodeCode")(j, v, w), j = i.subParser("detab")(j, v, w), j = j.replace(/^\n+/g, ""), j = j.replace(/\n+$/g, ""), j = "<pre><code" + (L ? ' class="' + L + " language-" + L + '"' : "") + ">" + j + P + "</code></pre>", j = i.subParser("hashBlock")(j, v, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: j }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, v, w)) : l;
      }), i.subParser("hashBlock", function(l, v, w) {
        return l = w.converter._dispatch("hashBlock.before", l, v, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, v, w), l;
      }), i.subParser("hashCodeTags", function(l, v, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, v, w);
        var k = function(R, L, j, P) {
          var G = j + i.subParser("encodeCode")(L, v, w) + P;
          return "¨C" + (w.gHtmlSpans.push(G) - 1) + "C";
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, v, w), l;
      }), i.subParser("hashElement", function(l, v, w) {
        return function(k, R) {
          var L = R;
          return L = L.replace(/\n\n/g, `
`), L = L.replace(/^\n/, ""), L = L.replace(/\n+$/g, ""), L = `

¨K` + (w.gHtmlBlocks.push(L) - 1) + `K

`, L;
        };
      }), i.subParser("hashHTMLBlocks", function(l, v, w) {
        l = w.converter._dispatch("hashHTMLBlocks.before", l, v, w);
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
        ], R = function(M, B, Q, re) {
          var I = M;
          return Q.search(/\bmarkdown\b/) !== -1 && (I = Q + w.converter.makeHtml(B) + re), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        v.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(M, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var L = 0; L < k.length; ++L)
          for (var j, P = new RegExp("^ {0,3}(<" + k[L] + "\\b[^>]*>)", "im"), G = "<" + k[L] + "\\b[^>]*>", X = "</" + k[L] + ">"; (j = i.helper.regexIndexOf(l, P)) !== -1; ) {
            var Y = i.helper.splitAtIndex(l, j), J = i.helper.replaceRecursiveRegExp(Y[1], R, G, X, "im");
            if (J === Y[1])
              break;
            l = Y[0].concat(J);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, v, w)
        ), l = i.helper.replaceRecursiveRegExp(l, function(M) {
          return `

¨K` + (w.gHtmlBlocks.push(M) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, v, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, v, w), l;
      }), i.subParser("hashHTMLSpans", function(l, v, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, v, w);
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
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, v, w), l;
      }), i.subParser("unhashHTMLSpans", function(l, v, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, v, w);
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
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, v, w), l;
      }), i.subParser("hashPreCodeTags", function(l, v, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, v, w);
        var k = function(R, L, j, P) {
          var G = j + i.subParser("encodeCode")(L, v, w) + P;
          return `

¨G` + (w.ghCodeBlocks.push({ text: R, codeblock: G }) - 1) + `G

`;
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, v, w), l;
      }), i.subParser("headers", function(l, v, w) {
        l = w.converter._dispatch("headers.before", l, v, w);
        var k = isNaN(parseInt(v.headerLevelStart)) ? 1 : parseInt(v.headerLevelStart), R = v.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, L = v.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(R, function(G, X) {
          var Y = i.subParser("spanGamut")(X, v, w), J = v.noHeaderId ? "" : ' id="' + P(X) + '"', M = k, B = "<h" + M + J + ">" + Y + "</h" + M + ">";
          return i.subParser("hashBlock")(B, v, w);
        }), l = l.replace(L, function(G, X) {
          var Y = i.subParser("spanGamut")(X, v, w), J = v.noHeaderId ? "" : ' id="' + P(X) + '"', M = k + 1, B = "<h" + M + J + ">" + Y + "</h" + M + ">";
          return i.subParser("hashBlock")(B, v, w);
        });
        var j = v.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(j, function(G, X, Y) {
          var J = Y;
          v.customizedHeaderId && (J = Y.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var M = i.subParser("spanGamut")(J, v, w), B = v.noHeaderId ? "" : ' id="' + P(Y) + '"', Q = k - 1 + X.length, re = "<h" + Q + B + ">" + M + "</h" + Q + ">";
          return i.subParser("hashBlock")(re, v, w);
        });
        function P(G) {
          var X, Y;
          if (v.customizedHeaderId) {
            var J = G.match(/\{([^{]+?)}\s*$/);
            J && J[1] && (G = J[1]);
          }
          return X = G, i.helper.isString(v.prefixHeaderId) ? Y = v.prefixHeaderId : v.prefixHeaderId === !0 ? Y = "section-" : Y = "", v.rawPrefixHeaderId || (X = Y + X), v.ghCompatibleHeaderId ? X = X.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : v.rawHeaderId ? X = X.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : X = X.replace(/[^\w]/g, "").toLowerCase(), v.rawPrefixHeaderId && (X = Y + X), w.hashLinkCounts[X] ? X = X + "-" + w.hashLinkCounts[X]++ : w.hashLinkCounts[X] = 1, X;
        }
        return l = w.converter._dispatch("headers.after", l, v, w), l;
      }), i.subParser("horizontalRule", function(l, v, w) {
        l = w.converter._dispatch("horizontalRule.before", l, v, w);
        var k = i.subParser("hashBlock")("<hr />", v, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, v, w), l;
      }), i.subParser("images", function(l, v, w) {
        l = w.converter._dispatch("images.before", l, v, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, L = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, j = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, P = /!\[([^\[\]]+)]()()()()()/g;
        function G(Y, J, M, B, Q, re, I, H) {
          return B = B.replace(/\s/g, ""), X(Y, J, M, B, Q, re, I, H);
        }
        function X(Y, J, M, B, Q, re, I, H) {
          var ne = w.gUrls, oe = w.gTitles, q = w.gDimensions;
          if (M = M.toLowerCase(), H || (H = ""), Y.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((M === "" || M === null) && (M = J.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + M, !i.helper.isUndefined(ne[M]))
              B = ne[M], i.helper.isUndefined(oe[M]) || (H = oe[M]), i.helper.isUndefined(q[M]) || (Q = q[M].width, re = q[M].height);
            else
              return Y;
          J = J.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), B = B.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var ee = '<img src="' + B + '" alt="' + J + '"';
          return H && i.helper.isString(H) && (H = H.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), ee += ' title="' + H + '"'), Q && re && (Q = Q === "*" ? "auto" : Q, re = re === "*" ? "auto" : re, ee += ' width="' + Q + '"', ee += ' height="' + re + '"'), ee += " />", ee;
        }
        return l = l.replace(j, X), l = l.replace(L, G), l = l.replace(R, X), l = l.replace(k, X), l = l.replace(P, X), l = w.converter._dispatch("images.after", l, v, w), l;
      }), i.subParser("italicsAndBold", function(l, v, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, v, w);
        function k(R, L, j) {
          return L + R + j;
        }
        return v.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(R, L) {
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
        })), v.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(R, L, j) {
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
        })), l = w.converter._dispatch("italicsAndBold.after", l, v, w), l;
      }), i.subParser("lists", function(l, v, w) {
        function k(j, P) {
          w.gListLevel++, j = j.replace(/\n{2,}$/, `
`), j += "¨0";
          var G = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, X = /\n[ \t]*\n(?!¨0)/.test(j);
          return v.disableForced4SpacesIndentedSublists && (G = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), j = j.replace(G, function(Y, J, M, B, Q, re, I) {
            I = I && I.trim() !== "";
            var H = i.subParser("outdent")(Q, v, w), ne = "";
            return re && v.tasklists && (ne = ' class="task-list-item" style="list-style-type: none;"', H = H.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var oe = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (oe += " checked"), oe += ">", oe;
            })), H = H.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(oe) {
              return "¨A" + oe;
            }), J || H.search(/\n{2,}/) > -1 ? (H = i.subParser("githubCodeBlocks")(H, v, w), H = i.subParser("blockGamut")(H, v, w)) : (H = i.subParser("lists")(H, v, w), H = H.replace(/\n$/, ""), H = i.subParser("hashHTMLBlocks")(H, v, w), H = H.replace(/\n\n+/g, `

`), X ? H = i.subParser("paragraphs")(H, v, w) : H = i.subParser("spanGamut")(H, v, w)), H = H.replace("¨A", ""), H = "<li" + ne + ">" + H + `</li>
`, H;
          }), j = j.replace(/¨0/g, ""), w.gListLevel--, P && (j = j.replace(/\s+$/, "")), j;
        }
        function R(j, P) {
          if (P === "ol") {
            var G = j.match(/^ *(\d+)\./);
            if (G && G[1] !== "1")
              return ' start="' + G[1] + '"';
          }
          return "";
        }
        function L(j, P, G) {
          var X = v.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, Y = v.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, J = P === "ul" ? X : Y, M = "";
          if (j.search(J) !== -1)
            (function Q(re) {
              var I = re.search(J), H = R(j, P);
              I !== -1 ? (M += `

<` + P + H + `>
` + k(re.slice(0, I), !!G) + "</" + P + `>
`, P = P === "ul" ? "ol" : "ul", J = P === "ul" ? X : Y, Q(re.slice(I))) : M += `

<` + P + H + `>
` + k(re, !!G) + "</" + P + `>
`;
            })(j);
          else {
            var B = R(j, P);
            M = `

<` + P + B + `>
` + k(j, !!G) + "</" + P + `>
`;
          }
          return M;
        }
        return l = w.converter._dispatch("lists.before", l, v, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, P, G) {
            var X = G.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(P, X, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, P, G, X) {
            var Y = X.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(G, Y, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, v, w), l;
      }), i.subParser("metadata", function(l, v, w) {
        if (!v.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, v, w);
        function k(R) {
          w.metadata.raw = R, R = R.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), R = R.replace(/\n {4}/g, " "), R.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(L, j, P) {
            return w.metadata.parsed[j] = P, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(R, L, j) {
          return k(j), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(R, L, j) {
          return L && (w.metadata.format = L), k(j), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, v, w), l;
      }), i.subParser("outdent", function(l, v, w) {
        return l = w.converter._dispatch("outdent.before", l, v, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, v, w), l;
      }), i.subParser("paragraphs", function(l, v, w) {
        l = w.converter._dispatch("paragraphs.before", l, v, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), R = [], L = k.length, j = 0; j < L; j++) {
          var P = k[j];
          P.search(/¨(K|G)(\d+)\1/g) >= 0 ? R.push(P) : P.search(/\S/) >= 0 && (P = i.subParser("spanGamut")(P, v, w), P = P.replace(/^([ \t]*)/g, "<p>"), P += "</p>", R.push(P));
        }
        for (L = R.length, j = 0; j < L; j++) {
          for (var G = "", X = R[j], Y = !1; /¨(K|G)(\d+)\1/.test(X); ) {
            var J = RegExp.$1, M = RegExp.$2;
            J === "K" ? G = w.gHtmlBlocks[M] : Y ? G = i.subParser("encodeCode")(w.ghCodeBlocks[M].text, v, w) : G = w.ghCodeBlocks[M].codeblock, G = G.replace(/\$/g, "$$$$"), X = X.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, G), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(X) && (Y = !0);
          }
          R[j] = X;
        }
        return l = R.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, v, w);
      }), i.subParser("runExtension", function(l, v, w, k) {
        if (l.filter)
          v = l.filter(v, k.converter, w);
        else if (l.regex) {
          var R = l.regex;
          R instanceof RegExp || (R = new RegExp(R, "g")), v = v.replace(R, l.replace);
        }
        return v;
      }), i.subParser("spanGamut", function(l, v, w) {
        return l = w.converter._dispatch("spanGamut.before", l, v, w), l = i.subParser("codeSpans")(l, v, w), l = i.subParser("escapeSpecialCharsWithinTagAttributes")(l, v, w), l = i.subParser("encodeBackslashEscapes")(l, v, w), l = i.subParser("images")(l, v, w), l = i.subParser("anchors")(l, v, w), l = i.subParser("autoLinks")(l, v, w), l = i.subParser("simplifiedAutoLinks")(l, v, w), l = i.subParser("emoji")(l, v, w), l = i.subParser("underline")(l, v, w), l = i.subParser("italicsAndBold")(l, v, w), l = i.subParser("strikethrough")(l, v, w), l = i.subParser("ellipsis")(l, v, w), l = i.subParser("hashHTMLSpans")(l, v, w), l = i.subParser("encodeAmpsAndAngles")(l, v, w), v.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, v, w), l;
      }), i.subParser("strikethrough", function(l, v, w) {
        function k(R) {
          return v.simplifiedAutoLink && (R = i.subParser("simplifiedAutoLinks")(R, v, w)), "<del>" + R + "</del>";
        }
        return v.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, v, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(R, L) {
          return k(L);
        }), l = w.converter._dispatch("strikethrough.after", l, v, w)), l;
      }), i.subParser("stripLinkDefinitions", function(l, v, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, R = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var L = function(j, P, G, X, Y, J, M) {
          return P = P.toLowerCase(), l.toLowerCase().split(P).length - 1 < 2 ? j : (G.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[P] = G.replace(/\s/g, "") : w.gUrls[P] = i.subParser("encodeAmpsAndAngles")(G, v, w), J ? J + M : (M && (w.gTitles[P] = M.replace(/"|'/g, "&quot;")), v.parseImgDimensions && X && Y && (w.gDimensions[P] = {
            width: X,
            height: Y
          }), ""));
        };
        return l = l.replace(R, L), l = l.replace(k, L), l = l.replace(/¨0/, ""), l;
      }), i.subParser("tables", function(l, v, w) {
        if (!v.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, R = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function L(Y) {
          return /^:[ \t]*--*$/.test(Y) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(Y) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(Y) ? ' style="text-align:center;"' : "";
        }
        function j(Y, J) {
          var M = "";
          return Y = Y.trim(), (v.tablesHeaderId || v.tableHeaderId) && (M = ' id="' + Y.replace(/ /g, "_").toLowerCase() + '"'), Y = i.subParser("spanGamut")(Y, v, w), "<th" + M + J + ">" + Y + `</th>
`;
        }
        function P(Y, J) {
          var M = i.subParser("spanGamut")(Y, v, w);
          return "<td" + J + ">" + M + `</td>
`;
        }
        function G(Y, J) {
          for (var M = `<table>
<thead>
<tr>
`, B = Y.length, Q = 0; Q < B; ++Q)
            M += Y[Q];
          for (M += `</tr>
</thead>
<tbody>
`, Q = 0; Q < J.length; ++Q) {
            M += `<tr>
`;
            for (var re = 0; re < B; ++re)
              M += J[Q][re];
            M += `</tr>
`;
          }
          return M += `</tbody>
</table>
`, M;
        }
        function X(Y) {
          var J, M = Y.split(`
`);
          for (J = 0; J < M.length; ++J)
            /^ {0,3}\|/.test(M[J]) && (M[J] = M[J].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(M[J]) && (M[J] = M[J].replace(/\|[ \t]*$/, "")), M[J] = i.subParser("codeSpans")(M[J], v, w);
          var B = M[0].split("|").map(function(ee) {
            return ee.trim();
          }), Q = M[1].split("|").map(function(ee) {
            return ee.trim();
          }), re = [], I = [], H = [], ne = [];
          for (M.shift(), M.shift(), J = 0; J < M.length; ++J)
            M[J].trim() !== "" && re.push(
              M[J].split("|").map(function(ee) {
                return ee.trim();
              })
            );
          if (B.length < Q.length)
            return Y;
          for (J = 0; J < Q.length; ++J)
            H.push(L(Q[J]));
          for (J = 0; J < B.length; ++J)
            i.helper.isUndefined(H[J]) && (H[J] = ""), I.push(j(B[J], H[J]));
          for (J = 0; J < re.length; ++J) {
            for (var oe = [], q = 0; q < I.length; ++q)
              i.helper.isUndefined(re[J][q]), oe.push(P(re[J][q], H[q]));
            ne.push(oe);
          }
          return G(I, ne);
        }
        return l = w.converter._dispatch("tables.before", l, v, w), l = l.replace(/\\(\|)/g, i.helper.escapeCharactersCallback), l = l.replace(k, X), l = l.replace(R, X), l = w.converter._dispatch("tables.after", l, v, w), l;
      }), i.subParser("underline", function(l, v, w) {
        return v.underline && (l = w.converter._dispatch("underline.before", l, v, w), v.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        })), l = l.replace(/(_)/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, v, w)), l;
      }), i.subParser("unescapeSpecialChars", function(l, v, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, v, w), l = l.replace(/¨E(\d+)E/g, function(k, R) {
          var L = parseInt(R);
          return String.fromCharCode(L);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, v, w), l;
      }), i.subParser("makeMarkdown.blockquote", function(l, v) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L) {
            var j = i.subParser("makeMarkdown.node")(k[L], v);
            j !== "" && (w += j);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), i.subParser("makeMarkdown.codeBlock", function(l, v) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + v.preList[k] + "\n```";
      }), i.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), i.subParser("makeMarkdown.emphasis", function(l, v) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], v);
          w += "*";
        }
        return w;
      }), i.subParser("makeMarkdown.header", function(l, v, w) {
        var k = new Array(w + 1).join("#"), R = "";
        if (l.hasChildNodes()) {
          R = k + " ";
          for (var L = l.childNodes, j = L.length, P = 0; P < j; ++P)
            R += i.subParser("makeMarkdown.node")(L[P], v);
        }
        return R;
      }), i.subParser("makeMarkdown.hr", function() {
        return "---";
      }), i.subParser("makeMarkdown.image", function(l) {
        var v = "";
        return l.hasAttribute("src") && (v += "![" + l.getAttribute("alt") + "](", v += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (v += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (v += ' "' + l.getAttribute("title") + '"'), v += ")"), v;
      }), i.subParser("makeMarkdown.links", function(l, v) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, R = k.length;
          w = "[";
          for (var L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], v);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), i.subParser("makeMarkdown.list", function(l, v, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var R = l.childNodes, L = R.length, j = l.getAttribute("start") || 1, P = 0; P < L; ++P)
          if (!(typeof R[P].tagName > "u" || R[P].tagName.toLowerCase() !== "li")) {
            var G = "";
            w === "ol" ? G = j.toString() + ". " : G = "- ", k += G + i.subParser("makeMarkdown.listItem")(R[P], v), ++j;
          }
        return k += `
<!-- -->
`, k.trim();
      }), i.subParser("makeMarkdown.listItem", function(l, v) {
        for (var w = "", k = l.childNodes, R = k.length, L = 0; L < R; ++L)
          w += i.subParser("makeMarkdown.node")(k[L], v);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), i.subParser("makeMarkdown.node", function(l, v, w) {
        w = w || !1;
        var k = "";
        if (l.nodeType === 3)
          return i.subParser("makeMarkdown.txt")(l, v);
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
            w || (k = i.subParser("makeMarkdown.header")(l, v, 1) + `

`);
            break;
          case "h2":
            w || (k = i.subParser("makeMarkdown.header")(l, v, 2) + `

`);
            break;
          case "h3":
            w || (k = i.subParser("makeMarkdown.header")(l, v, 3) + `

`);
            break;
          case "h4":
            w || (k = i.subParser("makeMarkdown.header")(l, v, 4) + `

`);
            break;
          case "h5":
            w || (k = i.subParser("makeMarkdown.header")(l, v, 5) + `

`);
            break;
          case "h6":
            w || (k = i.subParser("makeMarkdown.header")(l, v, 6) + `

`);
            break;
          case "p":
            w || (k = i.subParser("makeMarkdown.paragraph")(l, v) + `

`);
            break;
          case "blockquote":
            w || (k = i.subParser("makeMarkdown.blockquote")(l, v) + `

`);
            break;
          case "hr":
            w || (k = i.subParser("makeMarkdown.hr")(l, v) + `

`);
            break;
          case "ol":
            w || (k = i.subParser("makeMarkdown.list")(l, v, "ol") + `

`);
            break;
          case "ul":
            w || (k = i.subParser("makeMarkdown.list")(l, v, "ul") + `

`);
            break;
          case "precode":
            w || (k = i.subParser("makeMarkdown.codeBlock")(l, v) + `

`);
            break;
          case "pre":
            w || (k = i.subParser("makeMarkdown.pre")(l, v) + `

`);
            break;
          case "table":
            w || (k = i.subParser("makeMarkdown.table")(l, v) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = i.subParser("makeMarkdown.codeSpan")(l, v);
            break;
          case "em":
          case "i":
            k = i.subParser("makeMarkdown.emphasis")(l, v);
            break;
          case "strong":
          case "b":
            k = i.subParser("makeMarkdown.strong")(l, v);
            break;
          case "del":
            k = i.subParser("makeMarkdown.strikethrough")(l, v);
            break;
          case "a":
            k = i.subParser("makeMarkdown.links")(l, v);
            break;
          case "img":
            k = i.subParser("makeMarkdown.image")(l, v);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), i.subParser("makeMarkdown.paragraph", function(l, v) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], v);
        return w = w.trim(), w;
      }), i.subParser("makeMarkdown.pre", function(l, v) {
        var w = l.getAttribute("prenum");
        return "<pre>" + v.preList[w] + "</pre>";
      }), i.subParser("makeMarkdown.strikethrough", function(l, v) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], v);
          w += "~~";
        }
        return w;
      }), i.subParser("makeMarkdown.strong", function(l, v) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += i.subParser("makeMarkdown.node")(k[L], v);
          w += "**";
        }
        return w;
      }), i.subParser("makeMarkdown.table", function(l, v) {
        var w = "", k = [[], []], R = l.querySelectorAll("thead>tr>th"), L = l.querySelectorAll("tbody>tr"), j, P;
        for (j = 0; j < R.length; ++j) {
          var G = i.subParser("makeMarkdown.tableCell")(R[j], v), X = "---";
          if (R[j].hasAttribute("style")) {
            var Y = R[j].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (Y) {
              case "text-align:left;":
                X = ":---";
                break;
              case "text-align:right;":
                X = "---:";
                break;
              case "text-align:center;":
                X = ":---:";
                break;
            }
          }
          k[0][j] = G.trim(), k[1][j] = X;
        }
        for (j = 0; j < L.length; ++j) {
          var J = k.push([]) - 1, M = L[j].getElementsByTagName("td");
          for (P = 0; P < R.length; ++P) {
            var B = " ";
            typeof M[P] < "u" && (B = i.subParser("makeMarkdown.tableCell")(M[P], v)), k[J].push(B);
          }
        }
        var Q = 3;
        for (j = 0; j < k.length; ++j)
          for (P = 0; P < k[j].length; ++P) {
            var re = k[j][P].length;
            re > Q && (Q = re);
          }
        for (j = 0; j < k.length; ++j) {
          for (P = 0; P < k[j].length; ++P)
            j === 1 ? k[j][P].slice(-1) === ":" ? k[j][P] = i.helper.padEnd(k[j][P].slice(-1), Q - 1, "-") + ":" : k[j][P] = i.helper.padEnd(k[j][P], Q, "-") : k[j][P] = i.helper.padEnd(k[j][P], Q);
          w += "| " + k[j].join(" | ") + ` |
`;
        }
        return w.trim();
      }), i.subParser("makeMarkdown.tableCell", function(l, v) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
          w += i.subParser("makeMarkdown.node")(k[L], v, !0);
        return w.trim();
      }), i.subParser("makeMarkdown.txt", function(l) {
        var v = l.nodeValue;
        return v = v.replace(/ +/g, " "), v = v.replace(/¨NBSP;/g, " "), v = i.helper.unescapeHTMLEntities(v), v = v.replace(/([*_~|`])/g, "\\$1"), v = v.replace(/^(\s*)>/g, "\\$1>"), v = v.replace(/^#/gm, "\\#"), v = v.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), v = v.replace(/^( {0,3}\d+)\./gm, "$1\\."), v = v.replace(/^( {0,3})([+-])/gm, "$1\\$2"), v = v.replace(/]([\s]*)\(/g, "\\]$1\\("), v = v.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), v;
      });
      var z = this;
      n.exports ? n.exports = i : z.showdown = i;
    }).call(NS);
  })(cl)), cl.exports;
}
var MS = OS();
const RS = /* @__PURE__ */ Lf(MS);
var ea = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, i) {
      i === void 0 && (i = {});
      var o;
      typeof i == "function" ? (o = i, i = {}) : "callback" in i && (o = i.callback);
      var c = this.castInput(r, i), f = this.castInput(s, i), m = this.removeEmpty(this.tokenize(c, i)), p = this.removeEmpty(this.tokenize(f, i));
      return this.diffWithOptionsObj(m, p, i, o);
    }, n.prototype.diffWithOptionsObj = function(r, s, i, o) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, i), o) {
          setTimeout(function() {
            o(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, b = r.length, g = 1, E = p + b;
      i.maxEditLength != null && (E = Math.min(E, i.maxEditLength));
      var _ = (f = i.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + _, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, i);
      if (h[0].oldPos + 1 >= b && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var A = -1 / 0, O = 1 / 0, x = function() {
        for (var l = Math.max(A, -g); l <= Math.min(O, g); l += 2) {
          var v = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var R = !1;
          if (k) {
            var L = k.oldPos - l;
            R = k && 0 <= L && L < p;
          }
          var j = w && w.oldPos + 1 < b;
          if (!R && !j) {
            h[l] = void 0;
            continue;
          }
          if (!j || R && w.oldPos < k.oldPos ? v = c.addToPath(k, !0, !1, 0, i) : v = c.addToPath(w, !1, !0, 1, i), C = c.extractCommon(v, s, r, l, i), v.oldPos + 1 >= b && C + 1 >= p)
            return m(c.buildValues(v.lastComponent, s, r)) || !0;
          h[l] = v, v.oldPos + 1 >= b && (O = Math.min(O, l - 1)), C + 1 >= p && (A = Math.max(A, l + 1));
        }
        g++;
      };
      if (o)
        (function l() {
          setTimeout(function() {
            if (g > E || Date.now() > S)
              return o(void 0);
            x() || l();
          }, 0);
        })();
      else
        for (; g <= E && Date.now() <= S; ) {
          var z = x();
          if (z)
            return z;
        }
    }, n.prototype.addToPath = function(r, s, i, o, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === i ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: f.count + 1, added: s, removed: i, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: s, removed: i, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, s, i, o, c) {
      for (var f = s.length, m = i.length, p = r.oldPos, b = p - o, g = 0; b + 1 < f && p + 1 < m && this.equals(i[p + 1], s[b + 1], c); )
        b++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, b;
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
      for (var o = [], c; r; )
        o.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      o.reverse();
      for (var f = o.length, m = 0, p = 0, b = 0; m < f; m++) {
        var g = o[m];
        if (g.removed)
          g.value = this.join(i.slice(b, b + g.count)), b += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(_, S) {
              var h = i[b + S];
              return h.length > _.length ? h : _;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (b += g.count);
        }
      }
      return o;
    }, n;
  })()
), jS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
})(), DS = (
  /** @class */
  (function(n) {
    jS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(ea)
);
new DS();
function g0(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function v0(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function xf(n, r, s) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + n.slice(r.length);
}
function Nf(n, r, s) {
  if (!r)
    return n + s;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + s;
}
function Hs(n, r) {
  return xf(n, r, "");
}
function Jo(n, r) {
  return Nf(n, r, "");
}
function y0(n, r) {
  return r.slice(0, zS(n, r));
}
function zS(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var i = r.length;
  n.length < r.length && (i = n.length);
  var o = Array(i), c = 0;
  o[0] = 0;
  for (var f = 1; f < i; f++) {
    for (r[f] == r[c] ? o[f] = o[c] : o[f] = c; c > 0 && r[f] != r[c]; )
      c = o[c];
    r[f] == r[c] && c++;
  }
  c = 0;
  for (var m = s; m < n.length; m++) {
    for (; c > 0 && n[m] != r[c]; )
      c = o[c];
    n[m] == r[c] && c++;
  }
  return c;
}
function qs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Xr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var zy = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
})(), bl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", LS = new RegExp("[".concat(bl, "]+|\\s+|[^").concat(bl, "]"), "ug"), PS = (
  /** @class */
  (function(n) {
    zy(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, i, o) {
      return o.ignoreCase && (s = s.toLowerCase(), i = i.toLowerCase()), s.trim() === i.trim();
    }, r.prototype.tokenize = function(s, i) {
      i === void 0 && (i = {});
      var o;
      if (i.intlSegmenter) {
        var c = i.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(c.segment(s), function(p) {
          return p.segment;
        });
      } else
        o = s.match(LS) || [];
      var f = [], m = null;
      return o.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(i, o) {
        return o == 0 ? i : i.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, i) {
      if (!s || i.oneChangePerToken)
        return s;
      var o = null, c = null, f = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? f = m : ((c || f) && _0(o, f, c, m), o = m, c = null, f = null);
      }), (c || f) && _0(o, f, c, null), s;
    }, r;
  })(ea)
), IS = new PS();
function Ly(n, r, s) {
  return IS.diff(n, r, s);
}
function _0(n, r, s, i) {
  if (r && s) {
    var o = Xr(r.value), c = qs(r.value), f = Xr(s.value), m = qs(s.value);
    if (n) {
      var p = g0(o, f);
      n.value = Nf(n.value, f, p), r.value = Hs(r.value, p), s.value = Hs(s.value, p);
    }
    if (i) {
      var b = v0(c, m);
      i.value = xf(i.value, m, b), r.value = Jo(r.value, b), s.value = Jo(s.value, b);
    }
  } else if (s) {
    if (n) {
      var g = Xr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (i) {
      var g = Xr(i.value);
      i.value = i.value.substring(g.length);
    }
  } else if (n && i) {
    var E = Xr(i.value), _ = Xr(r.value), S = qs(r.value), h = g0(E, _);
    r.value = Hs(r.value, h);
    var C = v0(Hs(E, h), S);
    r.value = Jo(r.value, C), i.value = xf(i.value, E, C), n.value = Nf(n.value, E, E.slice(0, E.length - C.length));
  } else if (i) {
    var A = Xr(i.value), O = qs(r.value), x = y0(O, A);
    r.value = Jo(r.value, x);
  } else if (n) {
    var z = qs(n.value), l = Xr(r.value), x = y0(z, l);
    r.value = Hs(r.value, x);
  }
}
var BS = (
  /** @class */
  (function(n) {
    zy(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var i = new RegExp("(\\r?\\n)|[".concat(bl, "]+|[^\\S\\n\\r]+|[^").concat(bl, "]"), "ug");
      return s.match(i) || [];
    }, r;
  })(ea)
);
new BS();
var US = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
})(), HS = (
  /** @class */
  (function(n) {
    US(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = Py, s;
    }
    return r.prototype.equals = function(s, i, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), i.endsWith(`
`) && (i = i.slice(0, -1))), n.prototype.equals.call(this, s, i, o);
    }, r;
  })(ea)
);
new HS();
function Py(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var s = [], i = n.split(/(\n|\r\n)/);
  i[i.length - 1] || i.pop();
  for (var o = 0; o < i.length; o++) {
    var c = i[o];
    o % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var qS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
})(), ZS = (
  /** @class */
  (function(n) {
    qS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ea)
);
new ZS();
var GS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
})(), VS = (
  /** @class */
  (function(n) {
    GS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(ea)
);
new VS();
var YS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
})(), $S = (
  /** @class */
  (function(n) {
    YS(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = Py, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, i) {
      var o = i.undefinedReplacement, c = i.stringifyReplacer, f = c === void 0 ? function(m, p) {
        return typeof p > "u" ? o : p;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Of(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, i, o) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), i.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ea)
);
new $S();
function Of(n, r, s, i, o) {
  r = r || [], s = s || [], i && (n = i(o === void 0 ? "" : o, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), s.push(f), c = 0; c < n.length; c += 1)
      f[c] = Of(n[c], r, s, i, String(c));
    return r.pop(), s.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, s.push(f);
    var m = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Of(n[p], r, s, i, p);
    r.pop(), s.pop();
  } else
    f = n;
  return f;
}
var XS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
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
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.slice();
    }, r.prototype.join = function(s) {
      return s;
    }, r.prototype.removeEmpty = function(s) {
      return s;
    }, r;
  })(ea)
);
new FS();
const QS = ({ originalEntry: n, newEntry: r }) => {
  const s = ie.useMemo(() => {
    const i = Ly(n.content, r.content);
    let o = "", c = "";
    return i.forEach((f) => {
      const p = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${f.value}</span>`;
      f.added || (o += p), f.removed || (c += p);
    }), { originalHtml: o, newHtml: c };
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
}, KS = SillyTavern.getContext(), JS = ie.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [i, o] = ie.useState([]), [c, f] = ie.useState(n.comment), [m, p] = ie.useState(n.key.join(", ")), [b, g] = ie.useState(n.content), [E, _] = ie.useState([]);
  ie.useEffect(() => {
    const O = KS.extensionSettings.regex ?? [];
    o(O);
    const x = Object.entries(r).map(([z, l]) => {
      const v = O.find((w) => w.id === z);
      return v ? { id: v.id, label: v.scriptName, enabled: !l?.disabled } : null;
    }).filter((z) => z !== null);
    _(x);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const O = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((z) => z.trim()).filter(Boolean),
        content: b
      }, x = E.reduce(
        (z, l) => (z[l.id] = { disabled: !l.enabled }, z),
        {}
      );
      return { updatedEntry: O, updatedRegexIds: x };
    }
  }));
  const S = ie.useMemo(
    () => i.map((O) => ({ value: O.id, label: O.scriptName })),
    [i]
  ), h = ie.useMemo(() => E.map((O) => O.id), [E]), C = ie.useCallback(() => {
    let O = n.content;
    const x = E.filter((z) => z.enabled);
    for (const z of x) {
      const l = i.find((v) => v.id === z.id);
      l && (O = r3(l, O));
    }
    g(O);
  }, [E, i, n.content]), A = (O) => {
    const x = O.map((z) => {
      const l = E.find((w) => w.id === z);
      if (l) return l;
      const v = i.find((w) => w.id === z);
      return v ? { id: v.id, label: v.scriptName, enabled: !0 } : null;
    }).filter((z) => z !== null);
    _(x);
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
        jy,
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
        Ry,
        {
          items: E,
          onItemsChange: _,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx(Ne, { onClick: C, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ N.jsx(
      _r,
      {
        value: b,
        onChange: (O) => g(O.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function ce(n, r, s) {
  function i(m, p) {
    var b;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (b = m._zod).traits ?? (b.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, p);
    for (const g in f.prototype)
      g in m || Object.defineProperty(m, g, { value: f.prototype[g].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const o = s?.Parent ?? Object;
  class c extends o {
  }
  Object.defineProperty(c, "name", { value: n });
  function f(m) {
    var p;
    const b = s?.Parent ? new c() : this;
    i(b, m), (p = b._zod).deferred ?? (p.deferred = []);
    for (const g of b._zod.deferred)
      g();
    return b;
  }
  return Object.defineProperty(f, "init", { value: i }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Ri extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Iy extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const By = {};
function Ma(n) {
  return By;
}
function Uy(n) {
  const r = Object.values(n).filter((i) => typeof i == "number");
  return Object.entries(n).filter(([i, o]) => r.indexOf(+i) === -1).map(([i, o]) => o);
}
function Mf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function $f(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Xf(n) {
  return n == null;
}
function Ff(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const b0 = Symbol("evaluating");
function tt(n, r, s) {
  let i;
  Object.defineProperty(n, r, {
    get() {
      if (i !== b0)
        return i === void 0 && (i = b0, i = s()), i;
    },
    set(o) {
      Object.defineProperty(n, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ja(n, r, s) {
  Object.defineProperty(n, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Da(...n) {
  const r = {};
  for (const s of n) {
    const i = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, i);
  }
  return Object.defineProperties({}, r);
}
function S0(n) {
  return JSON.stringify(n);
}
const Hy = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Sl(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const WS = $f(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function eu(n) {
  if (Sl(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(Sl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function qy(n) {
  return eu(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const ew = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function kl(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ta(n, r, s) {
  const i = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (i._zod.parent = n), i;
}
function Oe(n) {
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
function tw(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function nw(n, r) {
  const s = n._zod.def, i = Da(n._zod.def, {
    get shape() {
      const o = {};
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (o[c] = s.shape[c]);
      }
      return ja(this, "shape", o), o;
    },
    checks: []
  });
  return ta(n, i);
}
function rw(n, r) {
  const s = n._zod.def, i = Da(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete o[c];
      }
      return ja(this, "shape", o), o;
    },
    checks: []
  });
  return ta(n, i);
}
function aw(n, r) {
  if (!eu(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = n._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Da(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", c), c;
    },
    checks: []
  });
  return ta(n, o);
}
function iw(n, r) {
  if (!eu(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const i = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", i), i;
    },
    checks: n._zod.def.checks
  };
  return ta(n, s);
}
function sw(n, r) {
  const s = Da(n._zod.def, {
    get shape() {
      const i = { ...n._zod.def.shape, ...r._zod.def.shape };
      return ja(this, "shape", i), i;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ta(n, s);
}
function uw(n, r, s) {
  const i = Da(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, c = { ...o };
      if (s)
        for (const f in s) {
          if (!(f in o))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = n ? new n({
            type: "optional",
            innerType: o[f]
          }) : o[f]);
        }
      else
        for (const f in o)
          c[f] = n ? new n({
            type: "optional",
            innerType: o[f]
          }) : o[f];
      return ja(this, "shape", c), c;
    },
    checks: []
  });
  return ta(r, i);
}
function ow(n, r, s) {
  const i = Da(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, c = { ...o };
      if (s)
        for (const f in s) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = new n({
            type: "nonoptional",
            innerType: o[f]
          }));
        }
      else
        for (const f in o)
          c[f] = new n({
            type: "nonoptional",
            innerType: o[f]
          });
      return ja(this, "shape", c), c;
    },
    checks: []
  });
  return ta(r, i);
}
function Oi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function Zy(n, r) {
  return r.map((s) => {
    var i;
    return (i = s).path ?? (i.path = []), s.path.unshift(n), s;
  });
}
function Wo(n) {
  return typeof n == "string" ? n : n?.message;
}
function Ra(n, r, s) {
  const i = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const o = Wo(n.inst?._zod.def?.error?.(n)) ?? Wo(r?.error?.(n)) ?? Wo(s.customError?.(n)) ?? Wo(s.localeError?.(n)) ?? "Invalid input";
    i.message = o;
  }
  return delete i.inst, delete i.continue, r?.reportInput || delete i.input, i;
}
function Qf(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function tu(...n) {
  const [r, s, i] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: i
  } : { ...r };
}
const Gy = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, Mf, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Vy = ce("$ZodError", Gy), Yy = ce("$ZodError", Gy, { Parent: Error });
function lw(n, r = (s) => s.message) {
  const s = {}, i = [];
  for (const o of n.issues)
    o.path.length > 0 ? (s[o.path[0]] = s[o.path[0]] || [], s[o.path[0]].push(r(o))) : i.push(r(o));
  return { formErrors: i, fieldErrors: s };
}
function cw(n, r = (s) => s.message) {
  const s = { _errors: [] }, i = (o) => {
    for (const c of o.issues)
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
const Kf = (n) => (r, s, i, o) => {
  const c = i ? Object.assign(i, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new Ri();
  if (f.issues.length) {
    const m = new (o?.Err ?? n)(f.issues.map((p) => Ra(p, c, Ma())));
    throw Hy(m, o?.callee), m;
  }
  return f.value;
}, Jf = (n) => async (r, s, i, o) => {
  const c = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (o?.Err ?? n)(f.issues.map((p) => Ra(p, c, Ma())));
    throw Hy(m, o?.callee), m;
  }
  return f.value;
}, Al = (n) => (r, s, i) => {
  const o = i ? { ...i, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, o);
  if (c instanceof Promise)
    throw new Ri();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? Vy)(c.issues.map((f) => Ra(f, o, Ma())))
  } : { success: !0, data: c.value };
}, dw = /* @__PURE__ */ Al(Yy), Tl = (n) => async (r, s, i) => {
  const o = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, o);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((f) => Ra(f, o, Ma())))
  } : { success: !0, data: c.value };
}, fw = /* @__PURE__ */ Tl(Yy), hw = (n) => (r, s, i) => {
  const o = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Kf(n)(r, s, o);
}, pw = (n) => (r, s, i) => Kf(n)(r, s, i), mw = (n) => async (r, s, i) => {
  const o = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Jf(n)(r, s, o);
}, gw = (n) => async (r, s, i) => Jf(n)(r, s, i), vw = (n) => (r, s, i) => {
  const o = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Al(n)(r, s, o);
}, yw = (n) => (r, s, i) => Al(n)(r, s, i), _w = (n) => async (r, s, i) => {
  const o = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Tl(n)(r, s, o);
}, bw = (n) => async (r, s, i) => Tl(n)(r, s, i), Sw = /^[cC][^\s-]{8,}$/, ww = /^[0-9a-z]+$/, Ew = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Cw = /^[0-9a-vA-V]{20}$/, kw = /^[A-Za-z0-9]{27}$/, Aw = /^[a-zA-Z0-9_-]{21}$/, Tw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, xw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, w0 = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Nw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ow = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Mw() {
  return new RegExp(Ow, "u");
}
const Rw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, jw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Dw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, zw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Lw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, $y = /^[A-Za-z0-9_-]*$/, Pw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Iw = /^\+(?:[0-9]){6,14}[0-9]$/, Xy = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Bw = /* @__PURE__ */ new RegExp(`^${Xy}$`);
function Fy(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Uw(n) {
  return new RegExp(`^${Fy(n)}$`);
}
function Hw(n) {
  const r = Fy({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${Xy}T(?:${i})$`);
}
const qw = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, Zw = /^[^A-Z]*$/, Gw = /^[^a-z]*$/, Kn = /* @__PURE__ */ ce("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), Vw = /* @__PURE__ */ ce("$ZodCheckMaxLength", (n, r) => {
  var s;
  Kn.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const o = i.value;
    return !Xf(o) && o.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const o = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (i._zod.bag.maximum = r.maximum);
  }), n._zod.check = (i) => {
    const o = i.value;
    if (o.length <= r.maximum)
      return;
    const f = Qf(o);
    i.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), Yw = /* @__PURE__ */ ce("$ZodCheckMinLength", (n, r) => {
  var s;
  Kn.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const o = i.value;
    return !Xf(o) && o.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const o = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (i._zod.bag.minimum = r.minimum);
  }), n._zod.check = (i) => {
    const o = i.value;
    if (o.length >= r.minimum)
      return;
    const f = Qf(o);
    i.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), $w = /* @__PURE__ */ ce("$ZodCheckLengthEquals", (n, r) => {
  var s;
  Kn.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const o = i.value;
    return !Xf(o) && o.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const o = i._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (i) => {
    const o = i.value, c = o.length;
    if (c === r.length)
      return;
    const f = Qf(o), m = c > r.length;
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
}), xl = /* @__PURE__ */ ce("$ZodCheckStringFormat", (n, r) => {
  var s, i;
  Kn.init(n, r), n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.format = r.format, r.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r.pattern));
  }), r.pattern ? (s = n._zod).check ?? (s.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (i = n._zod).check ?? (i.check = () => {
  });
}), Xw = /* @__PURE__ */ ce("$ZodCheckRegex", (n, r) => {
  xl.init(n, r), n._zod.check = (s) => {
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
}), Fw = /* @__PURE__ */ ce("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = Zw), xl.init(n, r);
}), Qw = /* @__PURE__ */ ce("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = Gw), xl.init(n, r);
}), Kw = /* @__PURE__ */ ce("$ZodCheckIncludes", (n, r) => {
  Kn.init(n, r);
  const s = kl(r.includes), i = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = i, n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(i);
  }), n._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Jw = /* @__PURE__ */ ce("$ZodCheckStartsWith", (n, r) => {
  Kn.init(n, r);
  const s = new RegExp(`^${kl(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const o = i._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(s);
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
}), Ww = /* @__PURE__ */ ce("$ZodCheckEndsWith", (n, r) => {
  Kn.init(n, r);
  const s = new RegExp(`.*${kl(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const o = i._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(s);
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
}), eE = /* @__PURE__ */ ce("$ZodCheckOverwrite", (n, r) => {
  Kn.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class tE {
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
`).filter((f) => f), o = Math.min(...i.map((f) => f.length - f.trimStart().length)), c = i.map((f) => f.slice(o)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, o = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, o.join(`
`));
  }
}
const nE = {
  major: 4,
  minor: 1,
  patch: 12
}, Ct = /* @__PURE__ */ ce("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = nE;
  const i = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && i.unshift(n);
  for (const o of i)
    for (const c of o._zod.onattach)
      c(n);
  if (i.length === 0)
    (s = n._zod).deferred ?? (s.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const o = (f, m, p) => {
      let b = Oi(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (b)
          continue;
        const _ = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new Ri();
        if (g || S instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== _ && (b || (b = Oi(f, _)));
          });
        else {
          if (f.issues.length === _)
            continue;
          b || (b = Oi(f, _));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (Oi(f))
        return f.aborted = !0, f;
      const b = o(m, i, p);
      if (b instanceof Promise) {
        if (p.async === !1)
          throw new Ri();
        return b.then((g) => n._zod.parse(g, p));
      }
      return n._zod.parse(b, p);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const b = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return b instanceof Promise ? b.then((g) => c(g, f, m)) : c(b, f, m);
      }
      const p = n._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Ri();
        return p.then((b) => o(b, i, m));
      }
      return o(p, i, m);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const c = dw(n, o);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return fw(n, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Wf = /* @__PURE__ */ ce("$ZodString", (n, r) => {
  Ct.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? qw(n._zod.bag), n._zod.parse = (s, i) => {
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
}), it = /* @__PURE__ */ ce("$ZodStringFormat", (n, r) => {
  xl.init(n, r), Wf.init(n, r);
}), rE = /* @__PURE__ */ ce("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = xw), it.init(n, r);
}), aE = /* @__PURE__ */ ce("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = w0(i));
  } else
    r.pattern ?? (r.pattern = w0());
  it.init(n, r);
}), iE = /* @__PURE__ */ ce("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Nw), it.init(n, r);
}), sE = /* @__PURE__ */ ce("$ZodURL", (n, r) => {
  it.init(n, r), n._zod.check = (s) => {
    try {
      const i = s.value.trim(), o = new URL(i);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Pw.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.normalize ? s.value = o.href : s.value = i;
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
}), uE = /* @__PURE__ */ ce("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Mw()), it.init(n, r);
}), oE = /* @__PURE__ */ ce("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Aw), it.init(n, r);
}), lE = /* @__PURE__ */ ce("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Sw), it.init(n, r);
}), cE = /* @__PURE__ */ ce("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = ww), it.init(n, r);
}), dE = /* @__PURE__ */ ce("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Ew), it.init(n, r);
}), fE = /* @__PURE__ */ ce("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Cw), it.init(n, r);
}), hE = /* @__PURE__ */ ce("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = kw), it.init(n, r);
}), pE = /* @__PURE__ */ ce("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = Hw(r)), it.init(n, r);
}), mE = /* @__PURE__ */ ce("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = Bw), it.init(n, r);
}), gE = /* @__PURE__ */ ce("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = Uw(r)), it.init(n, r);
}), vE = /* @__PURE__ */ ce("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = Tw), it.init(n, r);
}), yE = /* @__PURE__ */ ce("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Rw), it.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv4";
  });
}), _E = /* @__PURE__ */ ce("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = jw), it.init(n, r), n._zod.onattach.push((s) => {
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
}), bE = /* @__PURE__ */ ce("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Dw), it.init(n, r);
}), SE = /* @__PURE__ */ ce("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = zw), it.init(n, r), n._zod.check = (s) => {
    const i = s.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [o, c] = i;
      if (!c)
        throw new Error();
      const f = Number(c);
      if (`${f}` !== c)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${o}]`);
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
function Qy(n) {
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
const wE = /* @__PURE__ */ ce("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Lw), it.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    Qy(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function EE(n) {
  if (!$y.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Qy(s);
}
const CE = /* @__PURE__ */ ce("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = $y), it.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    EE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), kE = /* @__PURE__ */ ce("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = Iw), it.init(n, r);
});
function AE(n, r = null) {
  try {
    const s = n.split(".");
    if (s.length !== 3)
      return !1;
    const [i] = s;
    if (!i)
      return !1;
    const o = JSON.parse(atob(i));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const TE = /* @__PURE__ */ ce("$ZodJWT", (n, r) => {
  it.init(n, r), n._zod.check = (s) => {
    AE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), xE = /* @__PURE__ */ ce("$ZodUnknown", (n, r) => {
  Ct.init(n, r), n._zod.parse = (s) => s;
}), NE = /* @__PURE__ */ ce("$ZodNever", (n, r) => {
  Ct.init(n, r), n._zod.parse = (s, i) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function E0(n, r, s) {
  n.issues.length && r.issues.push(...Zy(s, n.issues)), r.value[s] = n.value;
}
const OE = /* @__PURE__ */ ce("$ZodArray", (n, r) => {
  Ct.init(n, r), n._zod.parse = (s, i) => {
    const o = s.value;
    if (!Array.isArray(o))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: n
      }), s;
    s.value = Array(o.length);
    const c = [];
    for (let f = 0; f < o.length; f++) {
      const m = o[f], p = r.element._zod.run({
        value: m,
        issues: []
      }, i);
      p instanceof Promise ? c.push(p.then((b) => E0(b, s, f))) : E0(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function wl(n, r, s, i) {
  n.issues.length && r.issues.push(...Zy(s, n.issues)), n.value === void 0 ? s in i && (r.value[s] = void 0) : r.value[s] = n.value;
}
function Ky(n) {
  const r = Object.keys(n.shape);
  for (const i of r)
    if (!n.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const s = tw(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function Jy(n, r, s, i, o, c) {
  const f = [], m = o.keySet, p = o.catchall._zod, b = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (b === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, i);
    E instanceof Promise ? n.push(E.then((_) => wl(_, s, g, r))) : wl(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const ME = /* @__PURE__ */ ce("$ZodObject", (n, r) => {
  if (Ct.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const i = $f(() => Ky(r));
  tt(n._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const b in m) {
      const g = m[b]._zod;
      if (g.values) {
        p[b] ?? (p[b] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[b].add(E);
      }
    }
    return p;
  });
  const o = Sl, c = r.catchall;
  let f;
  n._zod.parse = (m, p) => {
    f ?? (f = i.value);
    const b = m.value;
    if (!o(b))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: b,
        inst: n
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const _ of f.keys) {
      const h = E[_]._zod.run({ value: b[_], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => wl(C, m, _, b))) : wl(h, m, _, b);
    }
    return c ? Jy(g, b, m, p, i.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), RE = /* @__PURE__ */ ce("$ZodObjectJIT", (n, r) => {
  ME.init(n, r);
  const s = n._zod.parse, i = $f(() => Ky(r)), o = (_) => {
    const S = new tE(["shape", "payload", "ctx"]), h = i.value, C = (z) => {
      const l = S0(z);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const A = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const z of h.keys)
      A[z] = `key_${O++}`;
    S.write("const newResult = {};");
    for (const z of h.keys) {
      const l = A[z], v = S0(z);
      S.write(`const ${l} = ${C(z)};`), S.write(`
        if (${l}.issues.length) {
          payload.issues = payload.issues.concat(${l}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${v}, ...iss.path] : [${v}]
          })));
        }
        
        
        if (${l}.value === undefined) {
          if (${v} in input) {
            newResult[${v}] = undefined;
          }
        } else {
          newResult[${v}] = ${l}.value;
        }
        
      `);
    }
    S.write("payload.value = newResult;"), S.write("return payload;");
    const x = S.compile();
    return (z, l) => x(_, z, l);
  };
  let c;
  const f = Sl, m = !By.jitless, b = m && WS.value, g = r.catchall;
  let E;
  n._zod.parse = (_, S) => {
    E ?? (E = i.value);
    const h = _.value;
    return f(h) ? m && b && S?.async === !1 && S.jitless !== !0 ? (c || (c = o(r.shape)), _ = c(_, S), g ? Jy([], h, _, S, E, n) : _) : s(_, S) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), _);
  };
});
function C0(n, r, s, i) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const o = n.filter((c) => !Oi(c));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((f) => Ra(f, i, Ma())))
  }), r);
}
const jE = /* @__PURE__ */ ce("$ZodUnion", (n, r) => {
  Ct.init(n, r), tt(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), tt(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), tt(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), tt(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${o.map((c) => Ff(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, i = r.options[0]._zod.run;
  n._zod.parse = (o, c) => {
    if (s)
      return i(o, c);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const b = p._zod.run({
        value: o.value,
        issues: []
      }, c);
      if (b instanceof Promise)
        m.push(b), f = !0;
      else {
        if (b.issues.length === 0)
          return b;
        m.push(b);
      }
    }
    return f ? Promise.all(m).then((p) => C0(p, o, n, c)) : C0(m, o, n, c);
  };
}), DE = /* @__PURE__ */ ce("$ZodIntersection", (n, r) => {
  Ct.init(n, r), n._zod.parse = (s, i) => {
    const o = s.value, c = r.left._zod.run({ value: o, issues: [] }, i), f = r.right._zod.run({ value: o, issues: [] }, i);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, b]) => k0(s, p, b)) : k0(s, c, f);
  };
});
function Rf(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (eu(n) && eu(r)) {
    const s = Object.keys(r), i = Object.keys(n).filter((c) => s.indexOf(c) !== -1), o = { ...n, ...r };
    for (const c of i) {
      const f = Rf(n[c], r[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      o[c] = f.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let i = 0; i < n.length; i++) {
      const o = n[i], c = r[i], f = Rf(o, c);
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
function k0(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), Oi(n))
    return n;
  const i = Rf(r.value, s.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return n.value = i.data, n;
}
const zE = /* @__PURE__ */ ce("$ZodEnum", (n, r) => {
  Ct.init(n, r);
  const s = Uy(r.entries), i = new Set(s);
  n._zod.values = i, n._zod.pattern = new RegExp(`^(${s.filter((o) => ew.has(typeof o)).map((o) => typeof o == "string" ? kl(o) : o.toString()).join("|")})$`), n._zod.parse = (o, c) => {
    const f = o.value;
    return i.has(f) || o.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: n
    }), o;
  };
}), LE = /* @__PURE__ */ ce("$ZodTransform", (n, r) => {
  Ct.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new Iy(n.constructor.name);
    const o = r.transform(s.value, s);
    if (i.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (s.value = f, s));
    if (o instanceof Promise)
      throw new Ri();
    return s.value = o, s;
  };
});
function A0(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const PE = /* @__PURE__ */ ce("$ZodOptional", (n, r) => {
  Ct.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", tt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), tt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Ff(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, i) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(s, i);
      return o instanceof Promise ? o.then((c) => A0(c, s.value)) : A0(o, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, i);
  };
}), IE = /* @__PURE__ */ ce("$ZodNullable", (n, r) => {
  Ct.init(n, r), tt(n._zod, "optin", () => r.innerType._zod.optin), tt(n._zod, "optout", () => r.innerType._zod.optout), tt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Ff(s.source)}|null)$`) : void 0;
  }), tt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, i) => s.value === null ? s : r.innerType._zod.run(s, i);
}), BE = /* @__PURE__ */ ce("$ZodDefault", (n, r) => {
  Ct.init(n, r), n._zod.optin = "optional", tt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const o = r.innerType._zod.run(s, i);
    return o instanceof Promise ? o.then((c) => T0(c, r)) : T0(o, r);
  };
});
function T0(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const UE = /* @__PURE__ */ ce("$ZodPrefault", (n, r) => {
  Ct.init(n, r), n._zod.optin = "optional", tt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => (i.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, i));
}), HE = /* @__PURE__ */ ce("$ZodNonOptional", (n, r) => {
  Ct.init(n, r), tt(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((i) => i !== void 0)) : void 0;
  }), n._zod.parse = (s, i) => {
    const o = r.innerType._zod.run(s, i);
    return o instanceof Promise ? o.then((c) => x0(c, n)) : x0(o, n);
  };
});
function x0(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const qE = /* @__PURE__ */ ce("$ZodCatch", (n, r) => {
  Ct.init(n, r), tt(n._zod, "optin", () => r.innerType._zod.optin), tt(n._zod, "optout", () => r.innerType._zod.optout), tt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const o = r.innerType._zod.run(s, i);
    return o instanceof Promise ? o.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => Ra(f, i, Ma()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = o.value, o.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: o.issues.map((c) => Ra(c, i, Ma()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), ZE = /* @__PURE__ */ ce("$ZodPipe", (n, r) => {
  Ct.init(n, r), tt(n._zod, "values", () => r.in._zod.values), tt(n._zod, "optin", () => r.in._zod.optin), tt(n._zod, "optout", () => r.out._zod.optout), tt(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, i) => {
    if (i.direction === "backward") {
      const c = r.out._zod.run(s, i);
      return c instanceof Promise ? c.then((f) => el(f, r.in, i)) : el(c, r.in, i);
    }
    const o = r.in._zod.run(s, i);
    return o instanceof Promise ? o.then((c) => el(c, r.out, i)) : el(o, r.out, i);
  };
});
function el(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const GE = /* @__PURE__ */ ce("$ZodReadonly", (n, r) => {
  Ct.init(n, r), tt(n._zod, "propValues", () => r.innerType._zod.propValues), tt(n._zod, "values", () => r.innerType._zod.values), tt(n._zod, "optin", () => r.innerType._zod.optin), tt(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const o = r.innerType._zod.run(s, i);
    return o instanceof Promise ? o.then(N0) : N0(o);
  };
});
function N0(n) {
  return n.value = Object.freeze(n.value), n;
}
const VE = /* @__PURE__ */ ce("$ZodCustom", (n, r) => {
  Kn.init(n, r), Ct.init(n, r), n._zod.parse = (s, i) => s, n._zod.check = (s) => {
    const i = s.value, o = r.fn(i);
    if (o instanceof Promise)
      return o.then((c) => O0(c, s, i, n));
    O0(o, s, i, n);
  };
});
function O0(n, r, s, i) {
  if (!n) {
    const o = {
      code: "custom",
      input: s,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (o.params = i._zod.def.params), r.issues.push(tu(o));
  }
}
class Wy {
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
      const o = { ...i, ...this._map.get(r) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function YE() {
  return new Wy();
}
const $s = /* @__PURE__ */ YE();
function $E(n, r) {
  return new n({
    type: "string",
    ...Oe(r)
  });
}
function XE(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function M0(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function FE(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function QE(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Oe(r)
  });
}
function KE(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Oe(r)
  });
}
function JE(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Oe(r)
  });
}
function WE(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function e4(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function t4(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function n4(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function r4(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function a4(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function i4(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function s4(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function u4(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function o4(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function l4(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function c4(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function d4(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function f4(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function h4(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function p4(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function m4(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Oe(r)
  });
}
function g4(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...Oe(r)
  });
}
function v4(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Oe(r)
  });
}
function y4(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Oe(r)
  });
}
function _4(n) {
  return new n({
    type: "unknown"
  });
}
function b4(n, r) {
  return new n({
    type: "never",
    ...Oe(r)
  });
}
function e_(n, r) {
  return new Vw({
    check: "max_length",
    ...Oe(r),
    maximum: n
  });
}
function El(n, r) {
  return new Yw({
    check: "min_length",
    ...Oe(r),
    minimum: n
  });
}
function t_(n, r) {
  return new $w({
    check: "length_equals",
    ...Oe(r),
    length: n
  });
}
function S4(n, r) {
  return new Xw({
    check: "string_format",
    format: "regex",
    ...Oe(r),
    pattern: n
  });
}
function w4(n) {
  return new Fw({
    check: "string_format",
    format: "lowercase",
    ...Oe(n)
  });
}
function E4(n) {
  return new Qw({
    check: "string_format",
    format: "uppercase",
    ...Oe(n)
  });
}
function C4(n, r) {
  return new Kw({
    check: "string_format",
    format: "includes",
    ...Oe(r),
    includes: n
  });
}
function k4(n, r) {
  return new Jw({
    check: "string_format",
    format: "starts_with",
    ...Oe(r),
    prefix: n
  });
}
function A4(n, r) {
  return new Ww({
    check: "string_format",
    format: "ends_with",
    ...Oe(r),
    suffix: n
  });
}
function iu(n) {
  return new eE({
    check: "overwrite",
    tx: n
  });
}
function T4(n) {
  return iu((r) => r.normalize(n));
}
function x4() {
  return iu((n) => n.trim());
}
function N4() {
  return iu((n) => n.toLowerCase());
}
function O4() {
  return iu((n) => n.toUpperCase());
}
function M4(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Oe(s)
  });
}
function R4(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...Oe(s)
  });
}
function j4(n) {
  const r = D4((s) => (s.addIssue = (i) => {
    if (typeof i == "string")
      s.issues.push(tu(i, s.value, r._zod.def));
    else {
      const o = i;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = s.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), s.issues.push(tu(o));
    }
  }, n(s.value, s)));
  return r;
}
function D4(n, r) {
  const s = new Kn({
    check: "custom",
    ...Oe(r)
  });
  return s._zod.check = n, s;
}
class R0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? $s, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var i;
    const o = r._zod.def, c = {
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
      }, _ = r._zod.parent;
      if (_)
        m.ref = _, this.process(_, E), this.seen.get(_).isParent = !0;
      else {
        const S = m.schema;
        switch (o.type) {
          case "string": {
            const h = S;
            h.type = "string";
            const { minimum: C, maximum: A, format: O, patterns: x, contentEncoding: z } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof A == "number" && (h.maxLength = A), O && (h.format = c[O] ?? O, h.format === "" && delete h.format), z && (h.contentEncoding = z), x && x.size > 0) {
              const l = [...x];
              l.length === 1 ? h.pattern = l[0].source : l.length > 1 && (m.schema.allOf = [
                ...l.map((v) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: v.source
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
            typeof C == "number" && (h.minItems = C), typeof A == "number" && (h.maxItems = A), h.type = "array", h.items = this.process(o.element, { ...E, path: [...E.path, "items"] });
            break;
          }
          case "object": {
            const h = S;
            h.type = "object", h.properties = {};
            const C = o.shape;
            for (const x in C)
              h.properties[x] = this.process(C[x], {
                ...E,
                path: [...E.path, "properties", x]
              });
            const A = new Set(Object.keys(C)), O = new Set([...A].filter((x) => {
              const z = o.shape[x]._zod;
              return this.io === "input" ? z.optin === void 0 : z.optout === void 0;
            }));
            O.size > 0 && (h.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : o.catchall ? o.catchall && (h.additionalProperties = this.process(o.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = S, C = o.options.map((A, O) => this.process(A, {
              ...E,
              path: [...E.path, "anyOf", O]
            }));
            h.anyOf = C;
            break;
          }
          case "intersection": {
            const h = S, C = this.process(o.left, {
              ...E,
              path: [...E.path, "allOf", 0]
            }), A = this.process(o.right, {
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
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", A = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((v, w) => this.process(v, {
              ...E,
              path: [...E.path, C, w]
            })), x = o.rest ? this.process(o.rest, {
              ...E,
              path: [...E.path, A, ...this.target === "openapi-3.0" ? [o.items.length] : []]
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
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(o.keyType, {
              ...E,
              path: [...E.path, "propertyNames"]
            })), h.additionalProperties = this.process(o.valueType, {
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
            const h = S, C = Uy(o.entries);
            C.every((A) => typeof A == "number") && (h.type = "number"), C.every((A) => typeof A == "string") && (h.type = "string"), h.enum = C;
            break;
          }
          case "literal": {
            const h = S, C = [];
            for (const A of o.values)
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
            const h = this.process(o.innerType, E);
            this.target === "openapi-3.0" ? (m.ref = o.innerType, S.nullable = !0) : S.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, E), m.ref = o.innerType;
            break;
          }
          case "success": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, E), m.ref = o.innerType, S.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, E), m.ref = o.innerType, this.io === "input" && (S._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, E), m.ref = o.innerType;
            let h;
            try {
              h = o.catchValue(void 0);
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
            const h = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(h, E), m.ref = h;
            break;
          }
          case "readonly": {
            this.process(o.innerType, E), m.ref = o.innerType, S.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, E), m.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, E), m.ref = o.innerType;
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
    const b = this.metadataRegistry.get(r);
    return b && Object.assign(m.schema, b), this.io === "input" && Et(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((i = m.schema).default ?? (i.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const i = {
      cycles: s?.cycles ?? "ref",
      reused: s?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: s?.external ?? void 0
    }, o = this.seen.get(r);
    if (!o)
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
      if (g[1] === o)
        return { ref: "#" };
      const S = `#/${E}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: S + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const E = g[1], { ref: _, defId: S } = c(g);
      E.def = { ...E.schema }, S && (E.defId = S);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = _;
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
      const _ = this.seen.get(g), S = _.def ?? _.schema, h = { ...S };
      if (_.ref === null)
        return;
      const C = _.ref;
      if (_.ref = null, C) {
        m(C, E);
        const A = this.seen.get(C).schema;
        A.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (S.allOf = S.allOf ?? [], S.allOf.push(A)) : (Object.assign(S, A), Object.assign(S, h));
      }
      _.isParent || this.override({
        zodSchema: g,
        jsonSchema: S,
        path: _.path ?? []
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
    Object.assign(p, o.def);
    const b = i.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (b[E.defId] = E.def);
    }
    i.external || Object.keys(b).length > 0 && (this.target === "draft-2020-12" ? p.$defs = b : p.definitions = b);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function z4(n, r) {
  if (n instanceof Wy) {
    const i = new R0(r), o = {};
    for (const m of n._idmap.entries()) {
      const [p, b] = m;
      i.process(b);
    }
    const c = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: o
    };
    for (const m of n._idmap.entries()) {
      const [p, b] = m;
      c[p] = i.emit(b, {
        ...r,
        external: f
      });
    }
    if (Object.keys(o).length > 0) {
      const m = i.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: o
      };
    }
    return { schemas: c };
  }
  const s = new R0(r);
  return s.process(n), s.emit(n, r);
}
function Et(n, r) {
  const s = r ?? { seen: /* @__PURE__ */ new Set() };
  if (s.seen.has(n))
    return !1;
  s.seen.add(n);
  const o = n._zod.def;
  switch (o.type) {
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
      return Et(o.element, s);
    case "object": {
      for (const c in o.shape)
        if (Et(o.shape[c], s))
          return !0;
      return !1;
    }
    case "union": {
      for (const c of o.options)
        if (Et(c, s))
          return !0;
      return !1;
    }
    case "intersection":
      return Et(o.left, s) || Et(o.right, s);
    case "tuple": {
      for (const c of o.items)
        if (Et(c, s))
          return !0;
      return !!(o.rest && Et(o.rest, s));
    }
    case "record":
      return Et(o.keyType, s) || Et(o.valueType, s);
    case "map":
      return Et(o.keyType, s) || Et(o.valueType, s);
    case "set":
      return Et(o.valueType, s);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Et(o.innerType, s);
    case "lazy":
      return Et(o.getter(), s);
    case "default":
      return Et(o.innerType, s);
    case "prefault":
      return Et(o.innerType, s);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Et(o.in, s) || Et(o.out, s);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const L4 = /* @__PURE__ */ ce("ZodISODateTime", (n, r) => {
  pE.init(n, r), ot.init(n, r);
});
function P4(n) {
  return m4(L4, n);
}
const I4 = /* @__PURE__ */ ce("ZodISODate", (n, r) => {
  mE.init(n, r), ot.init(n, r);
});
function B4(n) {
  return g4(I4, n);
}
const U4 = /* @__PURE__ */ ce("ZodISOTime", (n, r) => {
  gE.init(n, r), ot.init(n, r);
});
function H4(n) {
  return v4(U4, n);
}
const q4 = /* @__PURE__ */ ce("ZodISODuration", (n, r) => {
  vE.init(n, r), ot.init(n, r);
});
function Z4(n) {
  return y4(q4, n);
}
const G4 = (n, r) => {
  Vy.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => cw(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => lw(n, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        n.issues.push(s), n.message = JSON.stringify(n.issues, Mf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        n.issues.push(...s), n.message = JSON.stringify(n.issues, Mf, 2);
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
}, Nn = ce("ZodError", G4, {
  Parent: Error
}), V4 = /* @__PURE__ */ Kf(Nn), Y4 = /* @__PURE__ */ Jf(Nn), $4 = /* @__PURE__ */ Al(Nn), X4 = /* @__PURE__ */ Tl(Nn), F4 = /* @__PURE__ */ hw(Nn), Q4 = /* @__PURE__ */ pw(Nn), K4 = /* @__PURE__ */ mw(Nn), J4 = /* @__PURE__ */ gw(Nn), W4 = /* @__PURE__ */ vw(Nn), eC = /* @__PURE__ */ yw(Nn), tC = /* @__PURE__ */ _w(Nn), nC = /* @__PURE__ */ bw(Nn), Ot = /* @__PURE__ */ ce("ZodType", (n, r) => (Ct.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(Da(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
})), n.clone = (s, i) => ta(n, s, i), n.brand = () => n, n.register = ((s, i) => (s.add(n, i), n)), n.parse = (s, i) => V4(n, s, i, { callee: n.parse }), n.safeParse = (s, i) => $4(n, s, i), n.parseAsync = async (s, i) => Y4(n, s, i, { callee: n.parseAsync }), n.safeParseAsync = async (s, i) => X4(n, s, i), n.spa = n.safeParseAsync, n.encode = (s, i) => F4(n, s, i), n.decode = (s, i) => Q4(n, s, i), n.encodeAsync = async (s, i) => K4(n, s, i), n.decodeAsync = async (s, i) => J4(n, s, i), n.safeEncode = (s, i) => W4(n, s, i), n.safeDecode = (s, i) => eC(n, s, i), n.safeEncodeAsync = async (s, i) => tC(n, s, i), n.safeDecodeAsync = async (s, i) => nC(n, s, i), n.refine = (s, i) => n.check(VC(s, i)), n.superRefine = (s) => n.check(YC(s)), n.overwrite = (s) => n.check(iu(s)), n.optional = () => z0(n), n.nullable = () => L0(n), n.nullish = () => z0(L0(n)), n.nonoptional = (s) => IC(n, s), n.array = () => Oa(n), n.or = (s) => TC([n, s]), n.and = (s) => NC(n, s), n.transform = (s) => P0(n, RC(s)), n.default = (s) => zC(n, s), n.prefault = (s) => PC(n, s), n.catch = (s) => UC(n, s), n.pipe = (s) => P0(n, s), n.readonly = () => ZC(n), n.describe = (s) => {
  const i = n.clone();
  return $s.add(i, { description: s }), i;
}, Object.defineProperty(n, "description", {
  get() {
    return $s.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...s) => {
  if (s.length === 0)
    return $s.get(n);
  const i = n.clone();
  return $s.add(i, s[0]), i;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), n_ = /* @__PURE__ */ ce("_ZodString", (n, r) => {
  Wf.init(n, r), Ot.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...i) => n.check(S4(...i)), n.includes = (...i) => n.check(C4(...i)), n.startsWith = (...i) => n.check(k4(...i)), n.endsWith = (...i) => n.check(A4(...i)), n.min = (...i) => n.check(El(...i)), n.max = (...i) => n.check(e_(...i)), n.length = (...i) => n.check(t_(...i)), n.nonempty = (...i) => n.check(El(1, ...i)), n.lowercase = (i) => n.check(w4(i)), n.uppercase = (i) => n.check(E4(i)), n.trim = () => n.check(x4()), n.normalize = (...i) => n.check(T4(...i)), n.toLowerCase = () => n.check(N4()), n.toUpperCase = () => n.check(O4());
}), rC = /* @__PURE__ */ ce("ZodString", (n, r) => {
  Wf.init(n, r), n_.init(n, r), n.email = (s) => n.check(XE(aC, s)), n.url = (s) => n.check(WE(iC, s)), n.jwt = (s) => n.check(p4(bC, s)), n.emoji = (s) => n.check(e4(sC, s)), n.guid = (s) => n.check(M0(j0, s)), n.uuid = (s) => n.check(FE(tl, s)), n.uuidv4 = (s) => n.check(QE(tl, s)), n.uuidv6 = (s) => n.check(KE(tl, s)), n.uuidv7 = (s) => n.check(JE(tl, s)), n.nanoid = (s) => n.check(t4(uC, s)), n.guid = (s) => n.check(M0(j0, s)), n.cuid = (s) => n.check(n4(oC, s)), n.cuid2 = (s) => n.check(r4(lC, s)), n.ulid = (s) => n.check(a4(cC, s)), n.base64 = (s) => n.check(d4(vC, s)), n.base64url = (s) => n.check(f4(yC, s)), n.xid = (s) => n.check(i4(dC, s)), n.ksuid = (s) => n.check(s4(fC, s)), n.ipv4 = (s) => n.check(u4(hC, s)), n.ipv6 = (s) => n.check(o4(pC, s)), n.cidrv4 = (s) => n.check(l4(mC, s)), n.cidrv6 = (s) => n.check(c4(gC, s)), n.e164 = (s) => n.check(h4(_C, s)), n.datetime = (s) => n.check(P4(s)), n.date = (s) => n.check(B4(s)), n.time = (s) => n.check(H4(s)), n.duration = (s) => n.check(Z4(s));
});
function Ht(n) {
  return $E(rC, n);
}
const ot = /* @__PURE__ */ ce("ZodStringFormat", (n, r) => {
  it.init(n, r), n_.init(n, r);
}), aC = /* @__PURE__ */ ce("ZodEmail", (n, r) => {
  iE.init(n, r), ot.init(n, r);
}), j0 = /* @__PURE__ */ ce("ZodGUID", (n, r) => {
  rE.init(n, r), ot.init(n, r);
}), tl = /* @__PURE__ */ ce("ZodUUID", (n, r) => {
  aE.init(n, r), ot.init(n, r);
}), iC = /* @__PURE__ */ ce("ZodURL", (n, r) => {
  sE.init(n, r), ot.init(n, r);
}), sC = /* @__PURE__ */ ce("ZodEmoji", (n, r) => {
  uE.init(n, r), ot.init(n, r);
}), uC = /* @__PURE__ */ ce("ZodNanoID", (n, r) => {
  oE.init(n, r), ot.init(n, r);
}), oC = /* @__PURE__ */ ce("ZodCUID", (n, r) => {
  lE.init(n, r), ot.init(n, r);
}), lC = /* @__PURE__ */ ce("ZodCUID2", (n, r) => {
  cE.init(n, r), ot.init(n, r);
}), cC = /* @__PURE__ */ ce("ZodULID", (n, r) => {
  dE.init(n, r), ot.init(n, r);
}), dC = /* @__PURE__ */ ce("ZodXID", (n, r) => {
  fE.init(n, r), ot.init(n, r);
}), fC = /* @__PURE__ */ ce("ZodKSUID", (n, r) => {
  hE.init(n, r), ot.init(n, r);
}), hC = /* @__PURE__ */ ce("ZodIPv4", (n, r) => {
  yE.init(n, r), ot.init(n, r);
}), pC = /* @__PURE__ */ ce("ZodIPv6", (n, r) => {
  _E.init(n, r), ot.init(n, r);
}), mC = /* @__PURE__ */ ce("ZodCIDRv4", (n, r) => {
  bE.init(n, r), ot.init(n, r);
}), gC = /* @__PURE__ */ ce("ZodCIDRv6", (n, r) => {
  SE.init(n, r), ot.init(n, r);
}), vC = /* @__PURE__ */ ce("ZodBase64", (n, r) => {
  wE.init(n, r), ot.init(n, r);
}), yC = /* @__PURE__ */ ce("ZodBase64URL", (n, r) => {
  CE.init(n, r), ot.init(n, r);
}), _C = /* @__PURE__ */ ce("ZodE164", (n, r) => {
  kE.init(n, r), ot.init(n, r);
}), bC = /* @__PURE__ */ ce("ZodJWT", (n, r) => {
  TE.init(n, r), ot.init(n, r);
}), SC = /* @__PURE__ */ ce("ZodUnknown", (n, r) => {
  xE.init(n, r), Ot.init(n, r);
});
function D0() {
  return _4(SC);
}
const wC = /* @__PURE__ */ ce("ZodNever", (n, r) => {
  NE.init(n, r), Ot.init(n, r);
});
function EC(n) {
  return b4(wC, n);
}
const CC = /* @__PURE__ */ ce("ZodArray", (n, r) => {
  OE.init(n, r), Ot.init(n, r), n.element = r.element, n.min = (s, i) => n.check(El(s, i)), n.nonempty = (s) => n.check(El(1, s)), n.max = (s, i) => n.check(e_(s, i)), n.length = (s, i) => n.check(t_(s, i)), n.unwrap = () => n.element;
});
function Oa(n, r) {
  return M4(CC, n, r);
}
const kC = /* @__PURE__ */ ce("ZodObject", (n, r) => {
  RE.init(n, r), Ot.init(n, r), tt(n, "shape", () => r.shape), n.keyof = () => OC(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: D0() }), n.loose = () => n.clone({ ...n._zod.def, catchall: D0() }), n.strict = () => n.clone({ ...n._zod.def, catchall: EC() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => aw(n, s), n.safeExtend = (s) => iw(n, s), n.merge = (s) => sw(n, s), n.pick = (s) => nw(n, s), n.omit = (s) => rw(n, s), n.partial = (...s) => uw(r_, n, s[0]), n.required = (...s) => ow(a_, n, s[0]);
});
function su(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...Oe(r)
  };
  return new kC(s);
}
const AC = /* @__PURE__ */ ce("ZodUnion", (n, r) => {
  jE.init(n, r), Ot.init(n, r), n.options = r.options;
});
function TC(n, r) {
  return new AC({
    type: "union",
    options: n,
    ...Oe(r)
  });
}
const xC = /* @__PURE__ */ ce("ZodIntersection", (n, r) => {
  DE.init(n, r), Ot.init(n, r);
});
function NC(n, r) {
  return new xC({
    type: "intersection",
    left: n,
    right: r
  });
}
const jf = /* @__PURE__ */ ce("ZodEnum", (n, r) => {
  zE.init(n, r), Ot.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (i, o) => {
    const c = {};
    for (const f of i)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new jf({
      ...r,
      checks: [],
      ...Oe(o),
      entries: c
    });
  }, n.exclude = (i, o) => {
    const c = { ...r.entries };
    for (const f of i)
      if (s.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new jf({
      ...r,
      checks: [],
      ...Oe(o),
      entries: c
    });
  };
});
function OC(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((i) => [i, i])) : n;
  return new jf({
    type: "enum",
    entries: s,
    ...Oe(r)
  });
}
const MC = /* @__PURE__ */ ce("ZodTransform", (n, r) => {
  LE.init(n, r), Ot.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new Iy(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(tu(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = n), s.issues.push(tu(f));
      }
    };
    const o = r.transform(s.value, s);
    return o instanceof Promise ? o.then((c) => (s.value = c, s)) : (s.value = o, s);
  };
});
function RC(n) {
  return new MC({
    type: "transform",
    transform: n
  });
}
const r_ = /* @__PURE__ */ ce("ZodOptional", (n, r) => {
  PE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function z0(n) {
  return new r_({
    type: "optional",
    innerType: n
  });
}
const jC = /* @__PURE__ */ ce("ZodNullable", (n, r) => {
  IE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function L0(n) {
  return new jC({
    type: "nullable",
    innerType: n
  });
}
const DC = /* @__PURE__ */ ce("ZodDefault", (n, r) => {
  BE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function zC(n, r) {
  return new DC({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : qy(r);
    }
  });
}
const LC = /* @__PURE__ */ ce("ZodPrefault", (n, r) => {
  UE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function PC(n, r) {
  return new LC({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : qy(r);
    }
  });
}
const a_ = /* @__PURE__ */ ce("ZodNonOptional", (n, r) => {
  HE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function IC(n, r) {
  return new a_({
    type: "nonoptional",
    innerType: n,
    ...Oe(r)
  });
}
const BC = /* @__PURE__ */ ce("ZodCatch", (n, r) => {
  qE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function UC(n, r) {
  return new BC({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const HC = /* @__PURE__ */ ce("ZodPipe", (n, r) => {
  ZE.init(n, r), Ot.init(n, r), n.in = r.in, n.out = r.out;
});
function P0(n, r) {
  return new HC({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const qC = /* @__PURE__ */ ce("ZodReadonly", (n, r) => {
  GE.init(n, r), Ot.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function ZC(n) {
  return new qC({
    type: "readonly",
    innerType: n
  });
}
const GC = /* @__PURE__ */ ce("ZodCustom", (n, r) => {
  VE.init(n, r), Ot.init(n, r);
});
function VC(n, r = {}) {
  return R4(GC, n, r);
}
function YC(n) {
  return j4(n);
}
const I0 = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Df = "placeholder-chatHistory", $C = su({
  justification: Ht().describe("A brief, friendly explanation of the changes made."),
  name: Ht().describe("The entry's new name/comment."),
  triggers: Oa(Ht()).describe("The entry's new keywords/triggers."),
  content: Ht().describe("The entry's new content.")
}), XC = su({
  worldName: Ht().describe("The name of the world where the new entry should be added."),
  name: Ht().describe("The new entry's name/comment."),
  triggers: Oa(Ht()).describe("The new entry's triggers."),
  content: Ht().describe("The new entry's content.")
}), FC = su({
  worldName: Ht().describe("The name of the world containing the entry to change."),
  originalName: Ht().describe("The original name/comment of the entry to change, used for identification."),
  newName: Ht().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: Oa(Ht()).optional().describe("The entry's new list of triggers."),
  content: Ht().optional().describe("The entry's new content.")
}), QC = su({
  worldName: Ht().describe("The name of the world containing the entry to remove."),
  name: Ht().describe("The name/comment of the entry to remove.")
}), KC = su({
  justification: Ht().describe("A brief, friendly explanation of all the operations performed."),
  add: Oa(XC).optional().describe("A list of new entries to add."),
  change: Oa(FC).optional().describe("A list of existing entries to change."),
  remove: Oa(QC).optional().describe("A list of existing entries to remove.")
});
function pf(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function zf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((i) => i !== null && typeof i == "object" ? `${s}<item>
${zf(i, r + 1)}${s}</item>
` : `${s}<item>${pf(i)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let i = "";
    for (const o of Object.keys(n)) {
      const c = n[o];
      c !== null && typeof c == "object" ? i += `${s}<${o}>
${zf(c, r + 1)}${s}</${o}>
` : i += `${s}<${o}>${pf(c)}</${o}>
`;
    }
    return i;
  }
  return `${s}<value>${pf(n)}</value>
`;
}
function JC(n, r) {
  const s = Ta(n);
  return r === "xml" ? `<entry>
${zf(s, 1)}</entry>` : JSON.stringify(s, null, 2);
}
function WC(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function ek(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ta(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = WC(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const i = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (i) return Ta(i);
  switch (ek(n.type)) {
    case "object": {
      const c = {}, f = n.properties || {};
      for (const m of Object.keys(f))
        c[m] = Ta(f[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = Ta(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [Ta(c)];
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
      return n.properties || n.additionalProperties ? Ta({ ...n, type: "object" }) : n.items ? Ta({ ...n, type: "array" }) : null;
  }
}
const tk = new Y2();
async function B0(n, r, s, i, o, c) {
  const f = !i.json_schema && !1;
  return new Promise((m, p) => {
    const b = new AbortController(), g = c ?? b.signal;
    c && c.addEventListener("abort", () => b.abort(), { once: !0 }), tk.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: i
      },
      {
        abortController: b,
        onEntry: void 0,
        onFinish: (E, _, S) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : _ === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (_ || p(new Error("No data received from LLM")), S ? p(S) : m(_))
      }
    );
  });
}
async function U0(n, r, s, i, o, c, f) {
  const m = Ut.getSettings();
  let p, b;
  const g = z4(s);
  if (o === "native") {
    if (p = await B0(
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
    b = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const _ = o, S = JC(g, _), h = JSON.stringify(g, null, 2), C = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", A = m.prompts[C]?.content;
    if (!A)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const O = {
      example_response: S,
      schema: h
    }, z = { role: "system", content: Qn.compile(A, { noEscape: !0, strict: !0 })(O) };
    if (p = await B0(
      n,
      [...r, z],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    if (_ === "xml") {
      const l = _y(p.content), v = Object.values(l).flat();
      if (v.length > 0) {
        const w = v[0];
        b = {
          justification: "Updated via XML.",
          // Justification is hard with XML parsing this way
          name: w.comment,
          triggers: w.key,
          content: w.content
        };
      } else
        throw new Error("Could not find a valid entry in the XML response.");
    } else
      b = JSON.parse(p.content);
  }
  const E = s.safeParse(b);
  if (!E.success) {
    const _ = `Model response failed schema validation for ${i}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", b), await _e("error", _), new Error(_);
  }
  return E.data;
}
const nk = ({ originalContent: n, newContent: r }) => {
  const s = ie.useMemo(() => {
    const i = Ly(n, r);
    let o = "", c = "";
    return i.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), b = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (o += b), f.removed || (c += b);
    }), { originalHtml: o, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, i_ = ({ before: n, after: r }) => {
  const s = ie.useMemo(() => {
    const i = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && i.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && i.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && i.push({ label: "Content", before: n.content || "", after: r.content || "" })), i;
  }, [n, r]);
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: s.map(({ label: i, before: o, after: c }) => /* @__PURE__ */ N.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ N.jsx("h4", { children: i }),
    /* @__PURE__ */ N.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ N.jsx("span", { children: "Before" }),
      /* @__PURE__ */ N.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ N.jsx(nk, { originalContent: o, newContent: c })
  ] }, i)) });
}, rk = ({ before: n, after: r }) => {
  const { added: s, removed: i, changed: o } = ie.useMemo(() => {
    const f = n || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([_, S]) => {
      S.forEach((h) => {
        const C = `${_}::${h.uid}`;
        m.set(C, { worldName: _, entry: h });
      });
    });
    const p = [], b = [], g = [], E = Object.entries(r || {}).flatMap(
      ([_, S]) => S.map((h) => ({ worldName: _, entry: h }))
    );
    for (const { worldName: _, entry: S } of E) {
      const h = `${_}::${S.uid}`;
      if (m.has(h)) {
        const A = m.get(h).entry;
        (A.comment !== S.comment || A.content !== S.content || (A.key || []).join(",") !== (S.key || []).join(",")) && g.push({ worldName: _, before: A, after: S }), m.delete(h);
      } else
        p.push({ worldName: _, entry: S });
    }
    return m.forEach(({ worldName: _, entry: S }) => {
      b.push({ worldName: _, entry: S });
    }), { added: p, removed: b, changed: g };
  }, [n, r]), c = s.length > 0 || i.length > 0 || o.length > 0;
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
    o.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Changed Entries (",
        o.length,
        ")"
      ] }),
      o.map(({ worldName: f, before: m, after: p }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry changed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          p.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx(i_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, eh = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ N.jsx(rk, { before: r, after: s }) : /* @__PURE__ */ N.jsx(i_, { before: r, after: s }) })
] }), ak = ({ currentState: n, initialState: r }) => {
  const [s, i] = ie.useState(!1), o = ie.useMemo(
    () => [
      { label: "Name", value: n.comment },
      { label: "Triggers", value: n.key.join(", ") },
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
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(eh, { sessionType: "entry", before: r, after: n }) : o.map(({ label: c, value: f }) => /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ N.jsx("label", { children: c }),
      /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, ik = ({ currentState: n, initialState: r }) => {
  const [s, i] = ie.useState(!1);
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (o) => i(o.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(eh, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([o, c]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
      /* @__PURE__ */ N.jsx("h4", { children: o }),
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
    ] }, o)) })
  ] });
}, Zs = SillyTavern.getContext(), sk = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, uk = (n, r) => {
  const s = structuredClone(n);
  if (r.remove)
    for (const i of r.remove) {
      const { worldName: o, name: c } = i;
      s[o] && (s[o] = s[o].filter((f) => f.comment !== c));
    }
  if (r.change)
    for (const i of r.change) {
      const { worldName: o, originalName: c } = i, f = s[o]?.find((m) => m.comment === c);
      f ? (i.newName !== void 0 && (f.comment = i.newName), i.triggers !== void 0 && (f.key = i.triggers), i.content !== void 0 && (f.content = i.content)) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${o}"`), _e("warning", `Could not find entry to change: "${c}" in world "${o}"`));
    }
  if (r.add)
    for (const i of r.add) {
      const { worldName: o, name: c, triggers: f, content: m } = i;
      s[o] || (s[o] = []);
      const p = { entries: Object.fromEntries(s[o].map((g) => [g.uid, g])) }, b = Bf(o, p);
      b && (b.comment = c, b.key = f, b.content = m, s[o].push(b));
    }
  return s;
}, ok = ({ initialState: n, onSave: r, onClose: s }) => {
  const [i, o] = ie.useState(n.comment), [c, f] = ie.useState(n.key.join(", ")), [m, p] = ie.useState(n.content), b = () => {
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
        /* @__PURE__ */ N.jsxs(Ne, { onClick: b, children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ N.jsxs(Ne, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Name" }),
        /* @__PURE__ */ N.jsx(Oy, { type: "text", value: i, onInput: (g) => o(g.currentTarget.value) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ N.jsx(_r, { value: c, onChange: (g) => f(g.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Content" }),
        /* @__PURE__ */ N.jsx(_r, { value: m, onChange: (g) => p(g.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, lk = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: i,
  initialState: o,
  chatContextOptions: c
}) => {
  const [f, m] = ie.useState(n.messages), [p, b] = ie.useState(""), [g, E] = ie.useState(!1), [_, S] = ie.useState(null), [h, C] = ie.useState(!1), [A, O] = ie.useState(!1), [x, z] = ie.useState(null), [l, v] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const R = ie.useCallback(
    async (H, ne, oe, q) => {
      const ee = Ut.getSettings();
      if (!n.profileId) {
        _e("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), oe(), E(!0);
      try {
        const te = [], de = Zs.extensionSettings.connectionManager?.profiles?.find(
          (xe) => xe.id === n.profileId
        ), le = de?.api ? Zs.CONNECT_API_MAP[de.api].selected : void 0;
        for (const xe of H)
          if (xe.id === Df && le) {
            const Je = await ty(le, c);
            Je.warnings?.length && Je.warnings.forEach((lt) => _e("warning", lt)), te.push(...Je.result);
          } else
            te.push(xe);
        const he = H.slice(0, H.length - (ne ? 0 : 1)).reverse().find((xe) => xe.stateSnapshot)?.stateSnapshot ?? o;
        let Re = "";
        if (n.type === "global") {
          const xe = ee.prompts.currentLorebooks?.content;
          if (xe) {
            const Je = { currentLorebooks: he };
            Re = Qn.compile(xe, { noEscape: !0 })(Je);
          }
        } else {
          const xe = he;
          Re = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${xe.comment})
Triggers: ${(xe.key || []).join(", ")}
Content: ${xe.content}`;
        }
        if (Re = Zs.substituteParams(Re.trim()), Re) {
          const xe = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: Re
          }, Je = te.pop();
          te.push(xe), Je && te.push(Je);
        }
        let be, me;
        if (n.type === "entry") {
          const xe = await U0(
            n.profileId,
            te,
            $C,
            I0.ENTRY,
            n.promptEngineeringMode,
            ee.maxResponseToken,
            k.current.signal
          );
          be = sk(he, xe), me = xe.justification;
        } else {
          const xe = await U0(
            n.profileId,
            te,
            KC,
            I0.GLOBAL,
            n.promptEngineeringMode,
            ee.maxResponseToken,
            k.current.signal
          );
          be = uk(he, xe), me = xe.justification;
        }
        const ge = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: me,
          stateSnapshot: be
        }, Pe = [...H, ge];
        m(Pe), i({ ...n, messages: Pe });
      } catch (te) {
        te.name === "AbortError" ? _e("info", "Request was cancelled.") : (console.error("Revise request failed:", te), _e("error", `Request failed: ${te.message}`)), q();
      } finally {
        E(!1), k.current = null;
      }
    },
    [n, i, o, c]
  ), L = ie.useCallback(async () => {
    if (!p.trim() || g) return;
    const H = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, ne = f;
    await R(
      [...f, H],
      !1,
      () => {
        m([...f, H]), b("");
      },
      () => m(ne)
    );
  }, [p, g, f, R]), j = ie.useCallback(async () => {
    if (g || f.length === 0) return;
    const ne = f[f.length - 1].role === "assistant" ? f.slice(0, -1) : [...f], oe = f;
    await R(
      ne,
      !0,
      () => m(ne),
      () => m(oe)
    );
  }, [g, f, R]), P = () => {
    const H = f.slice().reverse().find((ne) => ne.stateSnapshot)?.stateSnapshot ?? o;
    s(H), r();
  }, G = (H) => {
    const ne = f.findIndex((ee) => ee.id === H);
    if (ne < 0 || !f[ne].stateSnapshot) return;
    const oe = f[ne].stateSnapshot;
    let q = o;
    for (let ee = ne - 1; ee >= 0; ee--)
      if (f[ee].stateSnapshot) {
        q = f[ee].stateSnapshot;
        break;
      }
    S({ before: q, after: oe });
  }, X = (H) => {
    z(H.id), v(H.content);
  }, Y = () => {
    z(null), v("");
  }, J = async () => {
    if (!x) return;
    const H = f.findIndex((de) => de.id === x);
    if (H === -1 || !await Zs.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const oe = f, q = f.slice(0, H), ee = { ...f[H], content: l }, te = [...q, ee];
    Y(), await R(
      te,
      !1,
      () => m(te),
      () => m(oe)
    );
  }, M = async (H) => {
    const ne = f.findIndex((te) => te.id === H);
    if (ne === -1) return;
    const oe = !!f[ne].isInitial;
    if (!await Zs.Popup.show.confirm(
      "Delete Message",
      oe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const ee = oe ? f.filter((te) => te.isInitial && te.id !== H) : f.slice(0, ne);
    m(ee), i({ ...n, messages: ee }), _e("info", "Message history has been updated.");
  }, B = (H) => {
    const ne = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: H
    }, oe = [...f, ne];
    m(oe), i({ ...n, messages: oe }), O(!1);
  }, Q = f.slice().reverse().find((H) => H.stateSnapshot)?.stateSnapshot ?? o, re = f.filter((H) => H.isInitial), I = f.filter((H) => !H.isInitial);
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h2", { children: n.name }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsx(
          My,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (H) => i({ ...n, profileId: H?.id ?? "" })
          }
        ),
        /* @__PURE__ */ N.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (H) => i({ ...n, promptEngineeringMode: H.target.value }),
            title: "Prompt Engineering Mode",
            children: [
              /* @__PURE__ */ N.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ N.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ N.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(Ne, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        n.type === "entry" && /* @__PURE__ */ N.jsx(Ne, { onClick: () => O(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ N.jsx(Ne, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ N.jsxs(Ne, { onClick: P, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-messages", children: [
      re.length > 0 && /* @__PURE__ */ N.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ N.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ N.jsx("div", { className: "initial-messages-content", children: re.map(
          (H) => x === H.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ N.jsx(_r, { value: l, onChange: (ne) => v(ne.target.value), rows: 5 }),
            /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ N.jsxs(Ne, { onClick: J, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ N.jsxs(Ne, { onClick: Y, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, H.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper initial-context ${H.role}`, children: [
            /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${H.role} initial`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: H.content }) }),
            !g && H.id !== Df && /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ N.jsx(
                Ne,
                {
                  className: "message-action-button",
                  onClick: () => X(H),
                  title: "Edit Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ N.jsx(
                Ne,
                {
                  className: "message-action-button danger_button",
                  onClick: () => M(H.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, H.id)
        ) })
      ] }),
      I.map(
        (H) => x === H.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ N.jsx(_r, { value: l, onChange: (ne) => v(ne.target.value), rows: 3 }),
          /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ N.jsxs(Ne, { onClick: J, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ N.jsxs(Ne, { onClick: Y, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, H.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper ${H.role}`, children: [
          /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
            H.role === "user" && !H.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              Ne,
              {
                className: "message-action-button",
                onClick: () => X(H),
                title: "Edit and Fork",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            H.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              Ne,
              {
                className: "message-action-button",
                onClick: () => G(H.id),
                title: "Compare changes",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ N.jsx(
              Ne,
              {
                className: "message-action-button danger_button",
                onClick: () => M(H.id),
                title: "Delete Message",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${H.role}`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: H.content }) })
        ] }, H.id)
      ),
      I.length > 0 && !g && /* @__PURE__ */ N.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ N.jsxs(Ne, { onClick: j, title: "Regenerate response", children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      g && /* @__PURE__ */ N.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ N.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ N.jsx(
          Ne,
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
        _r,
        {
          value: p,
          onChange: (H) => b(H.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!x,
          onKeyDown: (H) => {
            H.key === "Enter" && !H.shiftKey && (H.preventDefault(), L());
          }
        }
      ),
      /* @__PURE__ */ N.jsx(Ne, { onClick: L, disabled: g || !p.trim() || !!x, children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    _ && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(eh, { sessionType: n.type, before: _.before, after: _.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ N.jsx(ak, { currentState: Q, initialState: o }) : /* @__PURE__ */ N.jsx(
          ik,
          {
            currentState: Q,
            initialState: o
          }
        ),
        onComplete: () => C(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    A && n.type === "entry" && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          ok,
          {
            initialState: Q,
            onSave: (H) => {
              B(H), O(!1);
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
async function ck(n, r, s, i, o, c, f) {
  const m = Ut.getSettings(), p = m.mainContextTemplatePresets[i];
  if (!p)
    throw new Error(`Main context template preset "${i}" not found.`);
  const b = [], g = {
    user: je.name1 || "You",
    char: je.name2 || "Character",
    persona: je.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (o.worldInfo)
    if (r === "global")
      g.currentLorebooks = n;
    else {
      const _ = {};
      Object.entries(f).filter(([S]) => c.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(c.selectedEntryUids[S] ?? []), A = C.size > 0 ? h.filter((O) => C.has(O.uid)) : h.filter((O) => !O.disable);
        A.length > 0 && (_[S] = A);
      }), g.currentLorebooks = _;
    }
  if (r === "entry") {
    const _ = n;
    g.entryToRevise = {
      worldName: s,
      name: _.comment,
      triggers: _.key.join(", "),
      content: _.content
    };
  }
  for (const _ of p.prompts) {
    if (!_.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(_.promptName)) continue;
    if (_.promptName === "chatHistory") {
      b.push({
        id: Df,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[_.promptName];
    if (S) {
      let h = Qn.compile(S.content, { noEscape: !0 })(g);
      h = je.substituteParams(h), h.trim() && b.push({
        id: `im-${b.length}`,
        role: _.role,
        content: h.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const _ = Qn.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? n.comment : ""
    });
    b.push({
      id: `im-${b.length}`,
      role: "system",
      content: _,
      isInitial: !0
    });
  }
  return b;
}
const nl = SillyTavern.getContext(), H0 = "worldInfoRecommender_reviseSessions", s_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: i,
  sessionForContext: o,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [b, g] = ie.useState(null), [E, _] = ie.useState(!0), S = ie.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(H0) || "[]");
    p(w), _(!1);
  }, []);
  const h = ie.useMemo(() => n.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, n.type, S]), C = (w) => {
    localStorage.setItem(H0, JSON.stringify(w)), p(w);
  }, A = async () => {
    const w = await nl.Popup.show.input(
      "New Session Name",
      n.type === "entry" ? `Revise "${n.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = Ut.getSettings();
        if (!k.profileId) {
          _e("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const R = await ck(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          o,
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
          promptEngineeringMode: k.defaultPromptEngineeringMode
        };
        g(L);
      } catch (k) {
        const R = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), _e("error", `Failed to create session: ${R}`);
      }
  }, O = (w) => {
    g(w);
  }, x = async (w) => {
    if (await nl.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
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
  if (b) {
    const w = nl.extensionSettings.connectionManager?.profiles?.find(
      (L) => L.id === b.profileId
    ), k = f.messages, R = {
      targetCharacterId: xn,
      ignoreCharacterFields: !f.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !f.authorNote,
      includeNames: !!pn,
      presetName: w?.preset,
      contextName: w?.context,
      instructName: w?.instruct
    };
    if (!xn && !pn)
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
          const L = nl.chat?.length ?? 0, j = k.last ?? 10;
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
      lk,
      {
        session: b,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: z,
        initialState: r,
        chatContextOptions: R
      }
    );
  }
  const v = n.type === "entry" ? `Revise Sessions for "${n.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ N.jsx("div", { className: "popup_header", children: /* @__PURE__ */ N.jsx("h2", { children: v }) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ N.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "session-info", onClick: () => O(w), children: [
        /* @__PURE__ */ N.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ N.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ N.jsx(Ne, { className: "danger_button", onClick: () => x(w.id), children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-actions", children: /* @__PURE__ */ N.jsxs(Ne, { onClick: A, className: "menu_button", children: [
      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, dk = new RS.Converter(), fk = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: i,
  sessionRegexIds: o,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: b,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [_, S] = ie.useState(() => s.find((I) => I === n) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [A, O] = ie.useState(!1), [x, z] = ie.useState(!1), [l, v] = ie.useState(!1), [w, k] = ie.useState(!1), [R, L] = ie.useState(!1), [j, P] = ie.useState(""), G = ie.useRef(null), X = ie.useMemo(
    () => !!b[_]?.find((re) => re.uid === r.uid && re.comment === r.comment),
    [_, r.uid, r.comment, b]
  ), Y = A || x, J = async () => {
    C(!0), await c(r, n, _);
  }, M = async () => {
    O(!0), await m({ worldName: n, entry: r, prompt: j, mode: "continue" }), O(!1);
  }, B = async () => {
    z(!0), await m({ worldName: n, entry: r, prompt: j, mode: "revise" }), z(!1);
  }, Q = (re) => {
    p(n, r, re, o);
  };
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ N.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: _,
            onChange: (re) => S(re.target.value),
            children: s.map((re) => /* @__PURE__ */ N.jsx("option", { value: re, children: re }, re))
          }
        ),
        /* @__PURE__ */ N.jsx(Ne, { onClick: J, disabled: h || Y, className: "menu_button interactable add", children: X ? "Update" : "Add" }),
        /* @__PURE__ */ N.jsxs(
          Ne,
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
          Ne,
          {
            onClick: M,
            disabled: Y,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: A ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ N.jsx(
          Ne,
          {
            onClick: B,
            disabled: Y,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: x ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ N.jsx(Ne, { onClick: () => v(!0), disabled: Y, className: "menu_button interactable edit", children: "Edit" }),
        X && /* @__PURE__ */ N.jsx(
          Ne,
          {
            onClick: () => k(!0),
            disabled: Y,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ N.jsx(
          Ne,
          {
            onClick: () => f(r, n, !0),
            disabled: Y,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ N.jsx(
          Ne,
          {
            onClick: () => f(r, n, !1),
            disabled: Y,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ N.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ N.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: dk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ N.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
        _r,
        {
          value: j,
          onChange: (re) => P(re.target.value),
          placeholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    l && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(JS, { ref: G, entry: r, initialRegexIds: o }),
        onComplete: (re) => {
          if (re && G.current) {
            const { updatedEntry: I, updatedRegexIds: H } = G.current.getFormData();
            p(n, r, I, H);
          }
          v(!1);
        }
      }
    ),
    w && i && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(QS, { originalEntry: i, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    R && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          s_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => L(!1),
            onApply: Q,
            sessionForContext: g,
            allEntries: b,
            contextToSend: E
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, q0 = ie.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, i) => {
    const [o, c] = ie.useState(""), [f, m] = ie.useState(() => {
      const _ = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([S, h]) => {
        h.forEach((C) => _.add(`${S}::${C}`));
      }), _;
    }), p = ie.useMemo(() => {
      if (!o)
        return n;
      const _ = o.toLowerCase(), S = {};
      return Object.entries(n).forEach(([h, C]) => {
        const A = C.filter(
          (O) => O.comment.toLowerCase().includes(_) || h.toLowerCase().includes(_)
        );
        A.length > 0 && (S[h] = A);
      }), S;
    }, [o, n]);
    ie.useImperativeHandle(i, () => ({
      getSelection: () => {
        const _ = {};
        return f.forEach((S) => {
          const [h, C] = S.split("::"), A = parseInt(C, 10);
          _[h] || (_[h] = []), _[h].push(A);
        }), _;
      }
    }));
    const b = (_, S) => {
      const h = `${_}::${S}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, g = () => {
      const _ = /* @__PURE__ */ new Set();
      Object.entries(p).forEach(([S, h]) => {
        h.forEach((C) => _.add(`${S}::${C.uid}`));
      }), m(_);
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
            value: o,
            onChange: (_) => c(_.target.value)
          }
        ),
        /* @__PURE__ */ N.jsx(Ne, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ N.jsx(Ne, { onClick: E, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "entry-list", children: Object.keys(p).length === 0 ? /* @__PURE__ */ N.jsx("p", { children: "No entries match your filter." }) : Object.entries(p).map(([_, S]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ N.jsx("h4", { children: _ }),
        /* @__PURE__ */ N.jsx("ul", { children: S.map((h) => /* @__PURE__ */ N.jsx("li", { children: /* @__PURE__ */ N.jsxs("label", { children: [
          /* @__PURE__ */ N.jsx(
            "input",
            {
              type: "checkbox",
              checked: f.has(`${_}::${h.uid}`),
              onChange: () => b(_, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, _)) })
    ] });
  }
);
Qn.helpers.join || Qn.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
Qn.helpers.is_not_empty || Qn.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Ln = SillyTavern.getContext(), rl = () => xn ? ey(xn) : pn, hk = () => {
  const n = Dy(), r = Ut.getSettings(), [s, i] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [o, c] = ie.useState([]), [f, m] = ie.useState({}), [p, b] = ie.useState([]), [g, E] = ie.useState(!0), [_, S] = ie.useState(!1), [h, C] = ie.useState(!1), [A, O] = ie.useState(!1), [x, z] = ie.useState(!1), l = ie.useRef(null), v = ie.useRef(null), w = ie.useMemo(() => rl() ?? "_global", [xn, pn]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), b([]);
      const ee = rl(), te = `worldInfoRecommend_${w}`, de = JSON.parse(localStorage.getItem(te) ?? "{}"), le = {
        suggestedEntries: de.suggestedEntries ?? {},
        blackListedEntries: de.blackListedEntries ?? [],
        selectedWorldNames: de.selectedWorldNames ?? [],
        selectedEntryUids: de.selectedEntryUids ?? {},
        regexIds: de.regexIds ?? {}
      };
      let he = {};
      if (ee)
        if (pn) {
          const me = await ll(["chat", "persona", "global"]);
          me && (he = me);
          const ge = Gg.find((Pe) => Pe.id === pn);
          if (ge)
            for (const Pe of ge.members) {
              const xe = Ln.characters.findIndex((Je) => Je.avatar === Pe);
              if (xe !== -1) {
                const Je = await ll(["character"], !0, xe);
                Je && (he = { ...he, ...Je });
              }
            }
        } else
          he = await ll(["all"], !0, xn);
      else
        for (const me of M1) {
          const ge = await Ln.loadWorldInfo(me);
          ge && (he[me] = Object.values(ge.entries));
        }
      m(he);
      const Re = Object.keys(he);
      c(Re), le.selectedWorldNames.length === 0 && w !== "_global" ? le.selectedWorldNames = [...Re] : le.selectedWorldNames = le.selectedWorldNames.filter(
        (me) => Re.includes(me)
      );
      const be = {};
      if (le.selectedEntryUids) {
        for (const [me, ge] of Object.entries(le.selectedEntryUids))
          if (he[me]) {
            const Pe = new Set(he[me].map((Je) => Je.uid)), xe = ge.filter((Je) => Pe.has(Je));
            xe.length > 0 && (be[me] = xe);
          }
      }
      if (le.selectedEntryUids = be, i(le), pn) {
        const me = Gg.find((ge) => ge.id === pn);
        if (me?.generation_mode === 0) {
          const ge = me.members.map((Pe) => Ln.characters.find((xe) => xe.avatar === Pe)).filter((Pe) => !!Pe);
          b(ge);
        }
      }
      E(!1);
    })();
  }, [w]), ie.useEffect(() => {
    if (g) return;
    const q = `worldInfoRecommend_${w}`;
    localStorage.setItem(q, JSON.stringify(s));
  }, [s, w, g]);
  const k = (q, ee) => {
    Ut.getSettings()[q] = ee, Ut.saveSettings(), n();
  }, R = (q, ee) => {
    Ut.getSettings().contextToSend[q] = ee, Ut.saveSettings(), n();
  }, L = ie.useCallback(
    async (q, ee, te = !1) => {
      const de = structuredClone(f);
      de[ee] || (de[ee] = []);
      const le = de[ee].find((be) => be.uid === q.uid), he = !!le;
      let Re;
      if (he) {
        const be = (q.content || "") !== (le.content || ""), me = (q.comment || "") !== (le.comment || ""), ge = (q.key || []).slice().sort().join(",") !== (le.key || []).slice().sort().join(",");
        if (!be && !me && !ge)
          return "unchanged";
        Re = le;
      } else {
        const be = { entries: Object.fromEntries(de[ee].map((ge) => [ge.uid, ge])) }, me = Bf(ee, be);
        if (!me) throw new Error("Failed to create new World Info entry.");
        Re = me, de[ee].push(Re);
      }
      if (Object.assign(Re, { key: q.key, content: q.content, comment: q.comment }), m(de), !te) {
        const be = { entries: Object.fromEntries(de[ee].map((me) => [me.uid, me])) };
        await Ln.saveWorldInfo(ee, be), Ln.reloadWorldInfoEditor(ee, !0);
      }
      return he ? "updated" : "added";
    },
    [f]
  ), j = ie.useCallback(
    async (q) => {
      if (!r.profileId) return _e("warning", "Please select a connection profile.");
      const ee = q?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!q && !ee)
        return _e("warning", "Please enter a prompt.");
      S(!0);
      try {
        const te = Ln.extensionSettings.connectionManager?.profiles?.find(
          (ge) => ge.id === r.profileId
        );
        if (!te) throw new Error("Connection profile not found.");
        const de = rl(), le = {
          presetName: te.preset,
          contextName: te.context,
          instructName: te.instruct,
          syspromptName: te.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!pn
        };
        if (!de)
          le.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              le.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              le.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const ge = r.contextToSend.messages.last ?? 10, Pe = Ln.chat?.length ?? 0;
              le.messageIndexesBetween = {
                end: Math.max(0, Pe - 1),
                start: Math.max(0, Pe - ge)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (le.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const he = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete he.stDescription, (!r.contextToSend.worldInfo || s.selectedWorldNames.length === 0) && delete he.currentLorebooks;
        const Re = Object.values(s.suggestedEntries).some((ge) => ge.length > 0);
        (!r.contextToSend.suggestedEntries || !Re) && delete he.suggestedLorebooks, s.blackListedEntries.length === 0 && delete he.blackListedEntries;
        const be = q ? { worldName: q.worldName, entry: q.entry, mode: q.mode } : void 0, me = await Ny({
          profileId: r.profileId,
          userPrompt: ee,
          buildPromptOptions: le,
          session: s,
          entriesGroupByWorldName: f,
          promptSettings: he,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((ge) => ge.enabled).map((ge) => ({ promptName: ge.promptName, role: ge.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: be
        });
        Object.keys(me).length > 0 ? i(q ? (ge) => {
          const Pe = structuredClone(ge.suggestedEntries), xe = q.worldName, Je = me[xe]?.[0];
          if (Pe[xe] && Je) {
            const lt = Pe[xe].findIndex(
              (Jn) => Jn.uid === q.entry.uid && Jn.comment === q.entry.comment
            );
            lt !== -1 && (Pe[xe][lt] = Je);
          }
          return { ...ge, suggestedEntries: Pe };
        } : (ge) => {
          const Pe = structuredClone(ge.suggestedEntries);
          for (const [xe, Je] of Object.entries(me)) {
            Pe[xe] || (Pe[xe] = []);
            for (const lt of Je)
              Pe[xe].some((Jn) => Jn.uid === lt.uid && Jn.comment === lt.comment) || Pe[xe].push(lt);
          }
          return { ...ge, suggestedEntries: Pe };
        }) : _e("warning", "No results from AI");
      } catch (te) {
        console.error(te), _e("error", te instanceof Error ? te.message : String(te));
      } finally {
        S(!1);
      }
    },
    [r, s, f]
  ), P = ie.useCallback(
    async (q, ee, te) => {
      try {
        const de = await L(q, te);
        de === "unchanged" ? _e("info", `No changes detected for "${q.comment}". Entry was not updated.`) : _e("success", de === "added" ? "Entry added" : "Entry updated"), i((le) => {
          const he = { ...le.suggestedEntries };
          return he[ee] && (he[ee] = he[ee].filter(
            (Re) => !(Re.uid === q.uid && Re.comment === q.comment)
          )), { ...le, suggestedEntries: he };
        });
      } catch (de) {
        console.error(de), _e("error", `Failed to add entry: ${de.message}`);
      }
    },
    [L]
  ), G = async () => {
    const q = Object.values(s.suggestedEntries).flat().length;
    if (q === 0) return _e("warning", "No entries to add.");
    if (!await Ln.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${q} suggested entries?`
    )) return;
    S(!0);
    let te = 0, de = 0, le = 0;
    const he = /* @__PURE__ */ new Set(), Re = [];
    Object.entries(s.suggestedEntries).forEach(([be, me]) => {
      me.forEach((ge) => {
        const Pe = o.includes(be) ? be : o[0] ?? "";
        Pe && Re.push({ worldName: Pe, entry: ge });
      });
    });
    for (const { worldName: be, entry: me } of Re)
      try {
        const ge = await L(me, be, !0);
        ge === "added" ? te++ : ge === "updated" ? de++ : le++, ge !== "unchanged" && he.add(be);
      } catch {
        _e("error", `Failed to process entry: ${me.comment}`);
      }
    for (const be of he)
      try {
        const me = { entries: Object.fromEntries(f[be].map((ge) => [ge.uid, ge])) };
        await Ln.saveWorldInfo(be, me), Ln.reloadWorldInfoEditor(be, !0);
      } catch {
        _e("error", `Failed to save world: ${be}`);
      }
    i((be) => ({ ...be, suggestedEntries: {} })), _e("success", `Processed: ${te} new, ${de} updated, ${le} unchanged.`), S(!1);
  }, X = async () => {
    await Ln.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (i((ee) => ({
      ...ee,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: rl() ? [...o] : [],
      selectedEntryUids: {}
    })), _e("success", "Reset successful"));
  }, Y = (q, ee, te) => {
    i((de) => {
      const le = { ...de };
      te && (le.blackListedEntries = [...le.blackListedEntries, `${ee} (${q.comment})`]);
      const he = { ...le.suggestedEntries };
      return he[ee] && (he[ee] = he[ee].filter(
        (Re) => !(Re.uid === q.uid && Re.comment === q.comment)
      )), le.suggestedEntries = he, le;
    });
  }, J = (q, ee, te, de) => {
    i((le) => {
      const he = { ...le.suggestedEntries };
      if (he[q]) {
        const be = he[q].findIndex(
          (me) => me.uid === ee.uid && me.comment === ee.comment
        );
        be !== -1 && (he[q][be] = te);
      }
      const Re = { ...le, suggestedEntries: he };
      return de && (Re.regexIds = de), Re;
    });
  }, M = ie.useCallback(
    (q) => {
      i((ee) => {
        const te = structuredClone(ee.suggestedEntries);
        let de = 0;
        for (const [le, he] of Object.entries(q))
          if (f[le]) {
            te[le] || (te[le] = []);
            for (const Re of he) {
              if (te[le].some((ge) => ge.uid === Re)) continue;
              const me = f[le].find((ge) => ge.uid === Re);
              me && (te[le].push(structuredClone(me)), de++);
            }
          }
        return de > 0 && _e("success", `Imported ${de} entries for revision.`), { ...ee, suggestedEntries: te };
      });
    },
    [f]
  ), B = ie.useMemo(() => {
    const q = {};
    return s.selectedWorldNames.forEach((ee) => {
      f[ee] && (q[ee] = f[ee]);
    }), q;
  }, [s.selectedWorldNames, f]), Q = ie.useMemo(() => {
    const q = JSON.parse(JSON.stringify(B)), ee = /* @__PURE__ */ new Map();
    return Object.entries(s.suggestedEntries).forEach(([te, de]) => {
      de.forEach((le) => {
        le.uid && ee.set(le.uid, { worldName: te, entry: le });
      });
    }), Object.entries(q).forEach(([, te]) => {
      te.forEach((de, le) => {
        de.uid && ee.has(de.uid) && (te[le] = ee.get(de.uid).entry, ee.delete(de.uid));
      });
    }), ee.forEach(({ worldName: te, entry: de }) => {
      q[te] || (q[te] = []), q[te].some((le) => le.uid === de.uid) || q[te].push(de);
    }), q;
  }, [B, s.suggestedEntries]), re = (q) => {
    const ee = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([de, le]) => {
      le.forEach((he) => {
        ee.set(`${de}::${he.uid}`, he);
      });
    });
    const te = {};
    Object.entries(q).forEach(([de, le]) => {
      le.forEach((he) => {
        const Re = `${de}::${he.uid}`, be = ee.get(Re);
        let me = !1;
        if (!be)
          me = !0;
        else {
          const ge = (he.content || "") !== (be.content || ""), Pe = (he.comment || "") !== (be.comment || ""), xe = (he.key || []).slice().sort().join(",") !== (be.key || []).slice().sort().join(",");
          (ge || Pe || xe) && (me = !0);
        }
        me && (te[de] || (te[de] = []), te[de].push(he));
      });
    }), i((de) => ({ ...de, suggestedEntries: te })), _e("success", "Changes from global revise session applied.");
  }, I = ie.useMemo(
    () => Object.keys(r.promptPresets).map((q) => ({ value: q, label: q })),
    [r.promptPresets]
  ), H = ie.useMemo(
    () => o.map((q) => ({ value: q, label: q })),
    [o]
  ), ne = ie.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((q, ee) => q + ee.length, 0),
    [s.selectedEntryUids]
  );
  if (g)
    return /* @__PURE__ */ N.jsx("div", { children: "Loading..." });
  const oe = Object.entries(s.suggestedEntries).flatMap(
    ([q, ee]) => ee.map((te) => ({ worldName: q, entry: te }))
  );
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ N.jsx("h2", { children: "World Info Recommender" }),
      /* @__PURE__ */ N.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Connection Profile" }),
            /* @__PURE__ */ N.jsx(
              My,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (q) => k("profileId", q?.id)
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
                    onChange: (q) => R("stDescription", q.target.checked)
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
                    onChange: (q) => R("messages", {
                      ...r.contextToSend.messages,
                      type: q.target.value
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
                      onChange: (q) => R("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(q.target.value) || 10
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
                      onChange: (q) => R("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(q.target.value) || 10
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
                      onChange: (q) => R("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(q.target.value) || 0
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
                      onChange: (q) => R("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(q.target.value) || 10
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
                    onChange: (q) => R("charCard", q.target.checked)
                  }
                ),
                "Char Card"
              ] }),
              p.length > 0 && /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Select Character" }),
                /* @__PURE__ */ N.jsx("select", { className: "text_pole", title: "Select character for your group.", children: p.map((q) => /* @__PURE__ */ N.jsx("option", { value: q.avatar, children: q.name }, q.avatar)) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (q) => R("authorNote", q.target.checked)
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
                    onChange: (q) => R("worldInfo", q.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ N.jsx(
                  jy,
                  {
                    items: H,
                    value: s.selectedWorldNames,
                    onChange: (q) => {
                      i((ee) => {
                        const te = { ...ee.selectedEntryUids };
                        return ee.selectedWorldNames.filter((le) => !q.includes(le)).forEach((le) => delete te[le]), { ...ee, selectedWorldNames: q, selectedEntryUids: te };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              s.selectedWorldNames.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ N.jsxs(
                  Ne,
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
                /* @__PURE__ */ N.jsx("span", { children: ne > 0 ? `${ne} selected` : "All entries included" })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (q) => R("suggestedEntries", q.target.checked)
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
                  onChange: (q) => k("maxContextType", q.target.value),
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
                onChange: (q) => k("maxContextValue", parseInt(q.target.value) || 2048)
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
                  onChange: (q) => k("maxResponseToken", parseInt(q.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Your Prompt" }),
            /* @__PURE__ */ N.jsx(
              Tf,
              {
                label: "Prompt Preset",
                items: I,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (q) => k("promptPreset", q ?? "default"),
                onItemsChange: (q) => {
                  const ee = q.reduce(
                    (te, de) => (te[de.value] = r.promptPresets[de.value] ?? { content: "" }, te),
                    {}
                  );
                  k("promptPresets", ee);
                },
                enableCreate: !0,
                enableRename: !0,
                enableDelete: !0
              }
            ),
            /* @__PURE__ */ N.jsx(
              _r,
              {
                value: r.promptPresets[r.promptPreset]?.content ?? "",
                onChange: (q) => {
                  const ee = { ...r.promptPresets };
                  ee[r.promptPreset] && (ee[r.promptPreset].content = q.target.value, k("promptPresets", ee));
                },
                placeholder: "e.g., 'Suggest entries for places {{user}} visited.'",
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ N.jsx(
              Ne,
              {
                onClick: () => j(),
                disabled: _,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: _ ? "Generating..." : "Send Prompt"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "wide-column", children: /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ N.jsx("h3", { children: "Suggested Entries" }),
          /* @__PURE__ */ N.jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ N.jsx(
              Ne,
              {
                onClick: G,
                disabled: _ || oe.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ N.jsxs(
              Ne,
              {
                onClick: () => z(!0),
                disabled: _,
                className: "menu_button interactable",
                title: "Revise all selected existing entries and current suggestions in a single chat session",
                children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
                  " Global Revise"
                ]
              }
            ),
            /* @__PURE__ */ N.jsx(
              Ne,
              {
                onClick: () => O(!0),
                disabled: _,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ N.jsx(Ne, { onClick: X, disabled: _, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { children: [
            oe.length === 0 && /* @__PURE__ */ N.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            oe.map(({ worldName: q, entry: ee }) => /* @__PURE__ */ N.jsx(
              fk,
              {
                initialWorldName: q,
                entry: ee,
                allWorldNames: o,
                existingEntry: f[q]?.find((te) => te.uid === ee.uid),
                sessionRegexIds: s.regexIds,
                onAdd: P,
                onRemove: Y,
                onContinue: j,
                onUpdate: J,
                entriesGroupByWorldName: f,
                sessionForContext: s,
                contextToSend: r.contextToSend
              },
              `${q}-${ee.uid}-${ee.comment}`
            ))
          ] })
        ] }) })
      ] })
    ] }),
    h && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          q0,
          {
            ref: l,
            entriesByWorldName: B,
            initialSelectedUids: s.selectedEntryUids,
            title: "Select Entries to Include in Context"
          }
        ),
        onComplete: (q) => {
          if (q && l.current) {
            const ee = l.current.getSelection();
            i((te) => ({ ...te, selectedEntryUids: ee }));
          }
          C(!1);
        },
        options: { wide: !0 }
      }
    ),
    A && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          q0,
          {
            ref: v,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (q) => {
          if (q && v.current) {
            const ee = v.current.getSelection();
            M(ee);
          }
          O(!1);
        },
        options: { wide: !0 }
      }
    ),
    x && /* @__PURE__ */ N.jsx(
      Xn,
      {
        type: zt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          s_,
          {
            target: { type: "global" },
            initialState: Q,
            onClose: () => z(!1),
            onApply: re,
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
}, pk = () => {
  const [n, r] = ie.useState(!1), s = () => r(!0), i = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, n ? /* @__PURE__ */ N.jsx(
    Xn,
    {
      content: /* @__PURE__ */ N.jsx(hk, {}),
      type: zt.DISPLAY,
      onComplete: i,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function mk() {
  function n(r) {
    if (!r)
      return null;
    const s = [], i = Array.isArray(r) ? r : [r];
    for (const o of i) {
      let c = o.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let b = 0; b < c.length; b++) {
        const g = c[b];
        g === '"' || g === "'" ? b > 0 && c[b - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  je.SlashCommandParser.addCommandObject(
    je.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: je.ARGUMENT_TYPE.BOOLEAN
    })
  ), je.SlashCommandParser.addCommandObject(
    je.SlashCommand.fromProps({
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
      returns: je.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        je.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: _S
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: Y1.worlds
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [je.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [je.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [je.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        je.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const i = r.silent ?? !1;
        try {
          const o = Ut.getSettings(), c = Array.isArray(s) ? s.join(" ") : s, f = r.profile;
          let m;
          if (!c)
            throw new Error("Prompt argument is required.");
          if (!f)
            throw new Error("Profile argument is required.");
          const p = je.extensionSettings?.connectionManager?.profiles?.find(
            (B) => B.id === f || B.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const b = n(r.lorebooks);
          let g;
          if (b !== null) {
            g = {};
            for (const B of b) {
              const Q = await je.loadWorldInfo(B);
              Q && (g[B] = Object.values(Q.entries));
            }
          } else
            g = await ll(["all"], !0, xn);
          const E = Object.keys(g);
          let _;
          if (b !== null) {
            if (_ = b.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (i || _e("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), _.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            _ = E;
          _.length === 0 && (i || _e("warning", "No active lorebooks found to use for context."));
          const S = n(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), A = h.includes("update"), O = /* @__PURE__ */ new Set(), x = n(r["editable-entries"]);
          x !== null && x.forEach((B) => {
            O.add(B.trim());
          });
          const z = O.size > 0, l = n(r.context), v = { ...o.contextToSend };
          if (l !== null) {
            const B = l.map((Q) => Q.trim());
            v.stDescription = B.includes("stdescription"), v.messages.type = B.includes("messages") ? v.messages.type : "none", v.charCard = B.includes("charcard"), v.authorNote = B.includes("authornote"), v.worldInfo = B.includes("worldinfo"), v.suggestedEntries = !1;
          }
          if (r.messages && v.messages.type !== "none") {
            const B = r.messages.toLowerCase().trim();
            if (B === "all") v.messages.type = "all";
            else if (B === "none") v.messages.type = "none";
            else if (B.startsWith("first:"))
              v.messages.type = "first", v.messages.first = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("last:"))
              v.messages.type = "last", v.messages.last = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("range:")) {
              const Q = B.split(":")[1].split("-");
              v.messages.type = "range", v.messages.range = {
                start: parseInt(Q[0]) || 0,
                end: parseInt(Q[1]) || 10
              };
            } else
              i || _e("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
          }
          const w = {
            // Let runWorldInfoRecommendation determine these from profile
            presetName: void 0,
            contextName: void 0,
            instructName: void 0,
            syspromptName: void 0,
            // Use derived contextToSend settings
            ignoreCharacterFields: !v.charCard,
            ignoreWorldInfo: !0,
            // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !v.authorNote,
            maxContext: r["max-context"] ?? (o.maxContextType === "custom" ? o.maxContextValue : o.maxContextType === "profile" ? "preset" : "active"),
            includeNames: !!pn,
            targetCharacterId: pn ? xn : void 0
            // Simplification: Use current char in group context
          };
          switch (v.messages.type) {
            case "none":
              w.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              w.messageIndexesBetween = { start: 0, end: v.messages.first ?? 10 };
              break;
            case "last":
              const B = v.messages.last ?? 10, Q = je.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, Q - 1),
                start: Math.max(0, Q - B)
              };
              break;
            case "range":
              v.messages.range && (w.messageIndexesBetween = {
                start: v.messages.range.start,
                end: v.messages.range.end
              });
              break;
            case "all":
            default:
              break;
          }
          const k = {
            selectedWorldNames: _,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, R = r["max-response"] ? parseInt(r["max-response"]) : void 0, L = structuredClone(o.prompts);
          v.stDescription || delete L.stDescription, (!v.worldInfo || _.length === 0) && delete L.currentLorebooks, delete L.suggestedLorebooks;
          const j = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: L,
            mainContextList: o.mainContextTemplatePresets[r["main-context-template"] ?? o.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: R ?? o.maxResponseToken
          };
          i || _e("info", "Running World Info Recommender...");
          const P = await Ny(j);
          if (Object.keys(P).length === 0)
            return i || _e("info", "AI returned no suggestions."), !0;
          let G = 0, X = 0, Y = 0;
          const J = /* @__PURE__ */ new Set(), M = structuredClone(g);
          for (const [B, Q] of Object.entries(P)) {
            let re = B;
            if (!_.includes(re))
              if (E.includes(re)) {
                i || _e(
                  "warning",
                  `AI suggested entry for "${re}", but it wasn't in the specified 'lorebooks'. Skipping ${Q.length} entries.`
                ), Y += Q.length;
                continue;
              } else if (_.length > 0)
                re = _[0], i || _e(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${re}".`
                );
              else {
                i || _e(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${Q.length} entries.`
                ), Y += Q.length;
                continue;
              }
            for (const I of Q) {
              if (M[re]?.some(
                (ne) => ne.uid === I.uid && ne.comment === I.comment
              )) {
                if (!A) {
                  i || _e(
                    "info",
                    `Skipping update for "${re}.${I.comment || I.uid}" (updates disallowed).`
                  ), Y++;
                  continue;
                }
                if (z) {
                  const ne = `${re}.${I.comment}`, oe = `${re}.${I.uid}`;
                  if (!O.has(ne) && !O.has(oe)) {
                    i || _e(
                      "info",
                      `Skipping update for "${re}.${I.comment || I.uid}" (not in editable-entries).`
                    ), Y++;
                    continue;
                  }
                }
              } else if (!C) {
                i || _e(
                  "info",
                  `Skipping add for "${re}.${I.comment || "New Entry"}" (adds disallowed).`
                ), Y++;
                continue;
              }
              try {
                const { status: ne } = yS(I, re, M);
                ne === "added" ? G++ : X++, J.add(re);
              } catch (ne) {
                i || _e(
                  "error",
                  `Failed to prepare modification for "${re}.${I.comment || I.uid}": ${ne.message}`
                ), Y++;
              }
            }
          }
          if (J.size > 0) {
            i || _e("info", `Saving changes to ${J.size} lorebook(s)...`);
            for (const B of J) {
              const Q = M[B], re = { entries: {} };
              Q.forEach((I) => re.entries[I.uid] = I), await je.saveWorldInfo(B, re), je.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!i) {
            const B = [];
            (G > 0 || X > 0 || Y > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${G}</li>
                  <li><strong>Updated:</strong> ${X}</li>
                  <li><strong>Skipped:</strong> ${Y}</li>
                  </ul>
                </div>
                `), J.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(J).map((re) => `<li>${re}</li>`).join("")}
                  </ul>
                </div>
                `);
            const Q = B.length > 0 ? `
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
            _e("success", Q, { escapeHtml: !1 });
          }
          return !0;
        } catch (o) {
          return console.error("Error running world-info-recommender-run command:", o), i || _e("error", `World Info Recommender command failed: ${o.message}`), !1;
        }
      }
    })
  );
}
const Xs = SillyTavern.getContext();
async function gk() {
  const n = await Xs.renderExtensionTemplateAsync(
    `third-party/${Ni}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), av.createRoot(r).render(
    /* @__PURE__ */ N.jsx(dl.StrictMode, { children: /* @__PURE__ */ N.jsx(xS, {}) })
  ));
  const i = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), av.createRoot(c).render(
    /* @__PURE__ */ N.jsx(dl.StrictMode, { children: /* @__PURE__ */ N.jsx(pk, {}) })
  ), o.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = i.trim();
    const b = p.firstChild;
    b && (m.prepend(b), b.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function vk() {
  return !(!Xs.ConnectionManagerRequestService || !Xs.getCharacterCardFields || !Xs.getWorldInfoPrompt || !Xs.reloadWorldInfoEditor);
}
vk() ? ES().then(() => {
  gk(), mk();
}) : _e("error", `[${Ni}] Make sure ST is updated.`);
export {
  gk as init
};
