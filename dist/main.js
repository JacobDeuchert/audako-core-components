var Ha = Object.defineProperty;
var ja = (t, e, n) => e in t ? Ha(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var st = (t, e, n) => (ja(t, typeof e != "symbol" ? e + "" : e, n), n);
var G;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage";
})(G || (G = {}));
const Kg = {
  [G.Group]: "fas fa-folder",
  [G.Dashboard]: "adk adk-dashboard",
  [G.Signal]: "fas fa-code",
  [G.DataConnection]: "fas fa-circle-notch",
  [G.DataSource]: "fas fa-server"
}, La = {
  Group: "/base/Group",
  Signal: "/daq/Signal",
  Formula: "/daq/Formula",
  Dashboard: "/base/Dashboard",
  DashboardTab: "/base/DashboardTab",
  DataConnection: "/daq/DataConnection",
  DataSource: "/daq/DataSource",
  EventCondition: "/base/condition",
  ProcessImage: "/scada/ProcessImage",
  EventCategory: "/base/EventCategory",
  EventDefinition: "/base/EventDefinition"
};
class ir {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class ze {
  constructor(e) {
    this.Name = new ir(), this.Description = new ir(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class Fa extends ze {
  constructor() {
    super();
  }
}
class Ba extends ze {
}
class za extends ze {
}
class Wa extends ze {
}
var vo;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.DataConnectionFailureConditionSettings = "DataConnectionFailureConditionSettings";
})(vo || (vo = {}));
class al {
}
class Yg extends al {
}
class Qg extends al {
}
var _o;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter";
})(_o || (_o = {}));
class Va extends ze {
}
var bo;
(function(t) {
  t.S7 = "S7", t.ModBus = "ModBus";
})(bo || (bo = {}));
class qa extends ze {
}
class Zg {
}
class Ga {
  constructor(e) {
    Object.assign(this, e);
  }
}
class em {
}
var yo;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniservalInput", t.UniversalInOut = "UniversalInOut";
})(yo || (yo = {}));
class Ja extends ze {
}
class Ri {
}
class tm extends Ri {
}
class nm extends Ri {
}
class rm extends Ri {
}
var wo;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(wo || (wo = {}));
class Xa extends ze {
}
class Ka extends ze {
}
class Ya extends ze {
}
var So;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(So || (So = {}));
class Qa extends ze {
}
const Za = {
  [G.Group]: Fa,
  [G.Signal]: Ja,
  [G.Dashboard]: Ba,
  [G.DashboardTab]: Xa,
  [G.DataConnection]: qa,
  [G.DataSource]: Va,
  [G.EventCategory]: Ka,
  [G.EventCondition]: Wa,
  [G.EventDefinition]: za,
  [G.Formula]: Ya,
  [G.ProcessImage]: Qa
};
class im {
  static getEntityPropertiesByType(e, n) {
    const r = Za[e];
    if (!r)
      throw new Error(`Entity type ${e} is not supported`);
    const i = new r();
    return this._getObjectKeys(i, n);
  }
  static getPropertyValue(e, n) {
    const r = n.split(".");
    let i = e;
    for (const o of r) {
      if (!i)
        return null;
      i = i[o];
    }
    return ir.isField(i) ? i.Value : i;
  }
  static _getObjectKeys(e, n) {
    if (!e)
      return [];
    const r = Object.keys(e);
    if (!n)
      return r.map((o) => ({
        keys: [],
        name: o,
        type: typeof e[o]
      }));
    const i = [];
    for (const o of r) {
      const s = e[o];
      ir.isField(s) ? i.push({
        keys: [],
        name: o,
        type: "Field"
      }) : s == null ? i.push({
        keys: [],
        name: o,
        type: "null"
      }) : typeof s == "object" ? i.push({
        keys: this._getObjectKeys(s, n),
        name: o,
        type: typeof s
      }) : i.push({
        keys: [],
        name: o,
        type: typeof s
      });
    }
    return i;
  }
}
function ec(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var cl = { exports: {} }, Di = { exports: {} }, ul = function(e, n) {
  return function() {
    for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
      i[o] = arguments[o];
    return e.apply(n, i);
  };
}, tc = ul, Oi = Object.prototype.toString, Ni = function(t) {
  return function(e) {
    var n = Oi.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Dt(t) {
  return t = t.toLowerCase(), function(n) {
    return Ni(n) === t;
  };
}
function Ui(t) {
  return Array.isArray(t);
}
function or(t) {
  return typeof t > "u";
}
function nc(t) {
  return t !== null && !or(t) && t.constructor !== null && !or(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var fl = Dt("ArrayBuffer");
function rc(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && fl(t.buffer), e;
}
function ic(t) {
  return typeof t == "string";
}
function oc(t) {
  return typeof t == "number";
}
function dl(t) {
  return t !== null && typeof t == "object";
}
function Gn(t) {
  if (Ni(t) !== "object")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var sc = Dt("Date"), lc = Dt("File"), ac = Dt("Blob"), cc = Dt("FileList");
function Mi(t) {
  return Oi.call(t) === "[object Function]";
}
function uc(t) {
  return dl(t) && Mi(t.pipe);
}
function fc(t) {
  var e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Oi.call(t) === e || Mi(t.toString) && t.toString() === e);
}
var dc = Dt("URLSearchParams");
function hc(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function pc() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Hi(t, e) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Ui(t))
      for (var n = 0, r = t.length; n < r; n++)
        e.call(null, t[n], n, t);
    else
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
}
function fi() {
  var t = {};
  function e(i, o) {
    Gn(t[o]) && Gn(i) ? t[o] = fi(t[o], i) : Gn(i) ? t[o] = fi({}, i) : Ui(i) ? t[o] = i.slice() : t[o] = i;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    Hi(arguments[n], e);
  return t;
}
function gc(t, e, n) {
  return Hi(e, function(i, o) {
    n && typeof i == "function" ? t[o] = tc(i, n) : t[o] = i;
  }), t;
}
function mc(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function vc(t, e, n, r) {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, n && Object.assign(t.prototype, n);
}
function _c(t, e, n) {
  var r, i, o, s = {};
  e = e || {};
  do {
    for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0; )
      o = r[i], s[o] || (e[o] = t[o], s[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}
function bc(t, e, n) {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  var r = t.indexOf(e, n);
  return r !== -1 && r === n;
}
function yc(t) {
  if (!t)
    return null;
  var e = t.length;
  if (or(e))
    return null;
  for (var n = new Array(e); e-- > 0; )
    n[e] = t[e];
  return n;
}
var wc = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), _e = {
  isArray: Ui,
  isArrayBuffer: fl,
  isBuffer: nc,
  isFormData: fc,
  isArrayBufferView: rc,
  isString: ic,
  isNumber: oc,
  isObject: dl,
  isPlainObject: Gn,
  isUndefined: or,
  isDate: sc,
  isFile: lc,
  isBlob: ac,
  isFunction: Mi,
  isStream: uc,
  isURLSearchParams: dc,
  isStandardBrowserEnv: pc,
  forEach: Hi,
  merge: fi,
  extend: gc,
  trim: hc,
  stripBOM: mc,
  inherits: vc,
  toFlatObject: _c,
  kindOf: Ni,
  kindOfTest: Dt,
  endsWith: bc,
  toArray: yc,
  isTypedArray: wc,
  isFileList: cc
}, Ut = _e;
function Co(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var hl = function(e, n, r) {
  if (!n)
    return e;
  var i;
  if (r)
    i = r(n);
  else if (Ut.isURLSearchParams(n))
    i = n.toString();
  else {
    var o = [];
    Ut.forEach(n, function(a, c) {
      a === null || typeof a > "u" || (Ut.isArray(a) ? c = c + "[]" : a = [a], Ut.forEach(a, function(d) {
        Ut.isDate(d) ? d = d.toISOString() : Ut.isObject(d) && (d = JSON.stringify(d)), o.push(Co(c) + "=" + Co(d));
      }));
    }), i = o.join("&");
  }
  if (i) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}, Sc = _e;
function br() {
  this.handlers = [];
}
br.prototype.use = function(e, n, r) {
  return this.handlers.push({
    fulfilled: e,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
br.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
br.prototype.forEach = function(e) {
  Sc.forEach(this.handlers, function(r) {
    r !== null && e(r);
  });
};
var Cc = br, Ec = _e, kc = function(e, n) {
  Ec.forEach(e, function(i, o) {
    o !== n && o.toUpperCase() === n.toUpperCase() && (e[n] = i, delete e[o]);
  });
}, pl = _e;
function Gt(t, e, n, r, i) {
  Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
pl.inherits(Gt, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var gl = Gt.prototype, ml = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(t) {
  ml[t] = { value: t };
});
Object.defineProperties(Gt, ml);
Object.defineProperty(gl, "isAxiosError", { value: !0 });
Gt.from = function(t, e, n, r, i, o) {
  var s = Object.create(gl);
  return pl.toFlatObject(t, s, function(a) {
    return a !== Error.prototype;
  }), Gt.call(s, t.message, e, n, r, i), s.name = t.name, o && Object.assign(s, o), s;
};
var ln = Gt, vl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ue = _e;
function $c(t, e) {
  e = e || new FormData();
  var n = [];
  function r(o) {
    return o === null ? "" : Ue.isDate(o) ? o.toISOString() : Ue.isArrayBuffer(o) || Ue.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function i(o, s) {
    if (Ue.isPlainObject(o) || Ue.isArray(o)) {
      if (n.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + s);
      n.push(o), Ue.forEach(o, function(a, c) {
        if (!Ue.isUndefined(a)) {
          var u = s ? s + "." + c : c, d;
          if (a && !s && typeof a == "object") {
            if (Ue.endsWith(c, "{}"))
              a = JSON.stringify(a);
            else if (Ue.endsWith(c, "[]") && (d = Ue.toArray(a))) {
              d.forEach(function(f) {
                !Ue.isUndefined(f) && e.append(u, r(f));
              });
              return;
            }
          }
          i(a, u);
        }
      }), n.pop();
    } else
      e.append(s, r(o));
  }
  return i(t), e;
}
var _l = $c, Ar, Eo;
function Tc() {
  if (Eo)
    return Ar;
  Eo = 1;
  var t = ln;
  return Ar = function(n, r, i) {
    var o = i.config.validateStatus;
    !i.status || !o || o(i.status) ? n(i) : r(new t("Request failed with status code " + i.status, [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i));
  }, Ar;
}
var Pr, ko;
function xc() {
  if (ko)
    return Pr;
  ko = 1;
  var t = _e;
  return Pr = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(r, i, o, s, l, a) {
        var c = [];
        c.push(r + "=" + encodeURIComponent(i)), t.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), t.isString(s) && c.push("path=" + s), t.isString(l) && c.push("domain=" + l), a === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(r) {
        var i = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return i ? decodeURIComponent(i[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), Pr;
}
var Ac = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Pc = function(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}, Ic = Ac, Rc = Pc, bl = function(e, n) {
  return e && !Ic(n) ? Rc(e, n) : n;
}, Ir, $o;
function Dc() {
  if ($o)
    return Ir;
  $o = 1;
  var t = _e, e = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Ir = function(r) {
    var i = {}, o, s, l;
    return r && t.forEach(r.split(`
`), function(c) {
      if (l = c.indexOf(":"), o = t.trim(c.substr(0, l)).toLowerCase(), s = t.trim(c.substr(l + 1)), o) {
        if (i[o] && e.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? i[o] = (i[o] ? i[o] : []).concat([s]) : i[o] = i[o] ? i[o] + ", " + s : s;
      }
    }), i;
  }, Ir;
}
var Rr, To;
function Oc() {
  if (To)
    return Rr;
  To = 1;
  var t = _e;
  return Rr = t.isStandardBrowserEnv() ? function() {
    var n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), i;
    function o(s) {
      var l = s;
      return n && (r.setAttribute("href", l), l = r.href), r.setAttribute("href", l), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return i = o(window.location.href), function(l) {
      var a = t.isString(l) ? o(l) : l;
      return a.protocol === i.protocol && a.host === i.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Rr;
}
var Dr, xo;
function yr() {
  if (xo)
    return Dr;
  xo = 1;
  var t = ln, e = _e;
  function n(r) {
    t.call(this, r == null ? "canceled" : r, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(n, t, {
    __CANCEL__: !0
  }), Dr = n, Dr;
}
var Or, Ao;
function Nc() {
  return Ao || (Ao = 1, Or = function(e) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return n && n[1] || "";
  }), Or;
}
var Nr, Po;
function Io() {
  if (Po)
    return Nr;
  Po = 1;
  var t = _e, e = Tc(), n = xc(), r = hl, i = bl, o = Dc(), s = Oc(), l = vl, a = ln, c = yr(), u = Nc();
  return Nr = function(f) {
    return new Promise(function(p, g) {
      var m = f.data, T = f.headers, b = f.responseType, _;
      function y() {
        f.cancelToken && f.cancelToken.unsubscribe(_), f.signal && f.signal.removeEventListener("abort", _);
      }
      t.isFormData(m) && t.isStandardBrowserEnv() && delete T["Content-Type"];
      var v = new XMLHttpRequest();
      if (f.auth) {
        var w = f.auth.username || "", E = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        T.Authorization = "Basic " + btoa(w + ":" + E);
      }
      var S = i(f.baseURL, f.url);
      v.open(f.method.toUpperCase(), r(S, f.params, f.paramsSerializer), !0), v.timeout = f.timeout;
      function N() {
        if (!!v) {
          var ee = "getAllResponseHeaders" in v ? o(v.getAllResponseHeaders()) : null, O = !b || b === "text" || b === "json" ? v.responseText : v.response, M = {
            data: O,
            status: v.status,
            statusText: v.statusText,
            headers: ee,
            config: f,
            request: v
          };
          e(function(Ke) {
            p(Ke), y();
          }, function(Ke) {
            g(Ke), y();
          }, M), v = null;
        }
      }
      if ("onloadend" in v ? v.onloadend = N : v.onreadystatechange = function() {
        !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(N);
      }, v.onabort = function() {
        !v || (g(new a("Request aborted", a.ECONNABORTED, f, v)), v = null);
      }, v.onerror = function() {
        g(new a("Network Error", a.ERR_NETWORK, f, v, v)), v = null;
      }, v.ontimeout = function() {
        var O = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded", M = f.transitional || l;
        f.timeoutErrorMessage && (O = f.timeoutErrorMessage), g(new a(O, M.clarifyTimeoutError ? a.ETIMEDOUT : a.ECONNABORTED, f, v)), v = null;
      }, t.isStandardBrowserEnv()) {
        var L = (f.withCredentials || s(S)) && f.xsrfCookieName ? n.read(f.xsrfCookieName) : void 0;
        L && (T[f.xsrfHeaderName] = L);
      }
      "setRequestHeader" in v && t.forEach(T, function(O, M) {
        typeof m > "u" && M.toLowerCase() === "content-type" ? delete T[M] : v.setRequestHeader(M, O);
      }), t.isUndefined(f.withCredentials) || (v.withCredentials = !!f.withCredentials), b && b !== "json" && (v.responseType = f.responseType), typeof f.onDownloadProgress == "function" && v.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && (_ = function(ee) {
        !v || (g(!ee || ee && ee.type ? new c() : ee), v.abort(), v = null);
      }, f.cancelToken && f.cancelToken.subscribe(_), f.signal && (f.signal.aborted ? _() : f.signal.addEventListener("abort", _))), m || (m = null);
      var X = u(S);
      if (X && ["http", "https", "file"].indexOf(X) === -1) {
        g(new a("Unsupported protocol " + X + ":", a.ERR_BAD_REQUEST, f));
        return;
      }
      v.send(m);
    });
  }, Nr;
}
var Ur, Ro;
function Uc() {
  return Ro || (Ro = 1, Ur = null), Ur;
}
var ae = _e, Do = kc, Oo = ln, Mc = vl, Hc = _l, jc = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function No(t, e) {
  !ae.isUndefined(t) && ae.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function Lc() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Io()), t;
}
function Fc(t, e, n) {
  if (ae.isString(t))
    try {
      return (e || JSON.parse)(t), ae.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
var wr = {
  transitional: Mc,
  adapter: Lc(),
  transformRequest: [function(e, n) {
    if (Do(n, "Accept"), Do(n, "Content-Type"), ae.isFormData(e) || ae.isArrayBuffer(e) || ae.isBuffer(e) || ae.isStream(e) || ae.isFile(e) || ae.isBlob(e))
      return e;
    if (ae.isArrayBufferView(e))
      return e.buffer;
    if (ae.isURLSearchParams(e))
      return No(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var r = ae.isObject(e), i = n && n["Content-Type"], o;
    if ((o = ae.isFileList(e)) || r && i === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return Hc(o ? { "files[]": e } : e, s && new s());
    } else if (r || i === "application/json")
      return No(n, "application/json"), Fc(e);
    return e;
  }],
  transformResponse: [function(e) {
    var n = this.transitional || wr.transitional, r = n && n.silentJSONParsing, i = n && n.forcedJSONParsing, o = !r && this.responseType === "json";
    if (o || i && ae.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Oo.from(s, Oo.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Uc()
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
ae.forEach(["delete", "get", "head"], function(e) {
  wr.headers[e] = {};
});
ae.forEach(["post", "put", "patch"], function(e) {
  wr.headers[e] = ae.merge(jc);
});
var ji = wr, Bc = _e, zc = ji, Wc = function(e, n, r) {
  var i = this || zc;
  return Bc.forEach(r, function(s) {
    e = s.call(i, e, n);
  }), e;
}, Mr, Uo;
function yl() {
  return Uo || (Uo = 1, Mr = function(e) {
    return !!(e && e.__CANCEL__);
  }), Mr;
}
var Mo = _e, Hr = Wc, Vc = yl(), qc = ji, Gc = yr();
function jr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Gc();
}
var Jc = function(e) {
  jr(e), e.headers = e.headers || {}, e.data = Hr.call(e, e.data, e.headers, e.transformRequest), e.headers = Mo.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), Mo.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(i) {
    delete e.headers[i];
  });
  var n = e.adapter || qc.adapter;
  return n(e).then(function(i) {
    return jr(e), i.data = Hr.call(e, i.data, i.headers, e.transformResponse), i;
  }, function(i) {
    return Vc(i) || (jr(e), i && i.response && (i.response.data = Hr.call(e, i.response.data, i.response.headers, e.transformResponse))), Promise.reject(i);
  });
}, De = _e, wl = function(e, n) {
  n = n || {};
  var r = {};
  function i(u, d) {
    return De.isPlainObject(u) && De.isPlainObject(d) ? De.merge(u, d) : De.isPlainObject(d) ? De.merge({}, d) : De.isArray(d) ? d.slice() : d;
  }
  function o(u) {
    if (De.isUndefined(n[u])) {
      if (!De.isUndefined(e[u]))
        return i(void 0, e[u]);
    } else
      return i(e[u], n[u]);
  }
  function s(u) {
    if (!De.isUndefined(n[u]))
      return i(void 0, n[u]);
  }
  function l(u) {
    if (De.isUndefined(n[u])) {
      if (!De.isUndefined(e[u]))
        return i(void 0, e[u]);
    } else
      return i(void 0, n[u]);
  }
  function a(u) {
    if (u in n)
      return i(e[u], n[u]);
    if (u in e)
      return i(void 0, e[u]);
  }
  var c = {
    url: s,
    method: s,
    data: s,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a
  };
  return De.forEach(Object.keys(e).concat(Object.keys(n)), function(d) {
    var f = c[d] || o, h = f(d);
    De.isUndefined(h) && f !== a || (r[d] = h);
  }), r;
}, Lr, Ho;
function Sl() {
  return Ho || (Ho = 1, Lr = {
    version: "0.27.2"
  }), Lr;
}
var Xc = Sl().version, ct = ln, Li = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  Li[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var jo = {};
Li.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + Xc + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return function(o, s, l) {
    if (e === !1)
      throw new ct(i(s, " has been removed" + (n ? " in " + n : "")), ct.ERR_DEPRECATED);
    return n && !jo[s] && (jo[s] = !0, console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))), e ? e(o, s, l) : !0;
  };
};
function Kc(t, e, n) {
  if (typeof t != "object")
    throw new ct("options must be an object", ct.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
    var o = r[i], s = e[o];
    if (s) {
      var l = t[o], a = l === void 0 || s(l, o, t);
      if (a !== !0)
        throw new ct("option " + o + " must be " + a, ct.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ct("Unknown option " + o, ct.ERR_BAD_OPTION);
  }
}
var Yc = {
  assertOptions: Kc,
  validators: Li
}, Cl = _e, Qc = hl, Lo = Cc, Fo = Jc, Sr = wl, Zc = bl, El = Yc, Mt = El.validators;
function Jt(t) {
  this.defaults = t, this.interceptors = {
    request: new Lo(),
    response: new Lo()
  };
}
Jt.prototype.request = function(e, n) {
  typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Sr(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && El.assertOptions(r, {
    silentJSONParsing: Mt.transitional(Mt.boolean),
    forcedJSONParsing: Mt.transitional(Mt.boolean),
    clarifyTimeoutError: Mt.transitional(Mt.boolean)
  }, !1);
  var i = [], o = !0;
  this.interceptors.request.forEach(function(h) {
    typeof h.runWhen == "function" && h.runWhen(n) === !1 || (o = o && h.synchronous, i.unshift(h.fulfilled, h.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(h) {
    s.push(h.fulfilled, h.rejected);
  });
  var l;
  if (!o) {
    var a = [Fo, void 0];
    for (Array.prototype.unshift.apply(a, i), a = a.concat(s), l = Promise.resolve(n); a.length; )
      l = l.then(a.shift(), a.shift());
    return l;
  }
  for (var c = n; i.length; ) {
    var u = i.shift(), d = i.shift();
    try {
      c = u(c);
    } catch (f) {
      d(f);
      break;
    }
  }
  try {
    l = Fo(c);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; )
    l = l.then(s.shift(), s.shift());
  return l;
};
Jt.prototype.getUri = function(e) {
  e = Sr(this.defaults, e);
  var n = Zc(e.baseURL, e.url);
  return Qc(n, e.params, e.paramsSerializer);
};
Cl.forEach(["delete", "get", "head", "options"], function(e) {
  Jt.prototype[e] = function(n, r) {
    return this.request(Sr(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
Cl.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, l) {
      return this.request(Sr(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  Jt.prototype[e] = n(), Jt.prototype[e + "Form"] = n(!0);
});
var eu = Jt, Fr, Bo;
function tu() {
  if (Bo)
    return Fr;
  Bo = 1;
  var t = yr();
  function e(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    var i = this;
    this.promise.then(function(o) {
      if (!!i._listeners) {
        var s, l = i._listeners.length;
        for (s = 0; s < l; s++)
          i._listeners[s](o);
        i._listeners = null;
      }
    }), this.promise.then = function(o) {
      var s, l = new Promise(function(a) {
        i.subscribe(a), s = a;
      }).then(o);
      return l.cancel = function() {
        i.unsubscribe(s);
      }, l;
    }, n(function(s) {
      i.reason || (i.reason = new t(s), r(i.reason));
    });
  }
  return e.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, e.prototype.subscribe = function(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }, e.prototype.unsubscribe = function(r) {
    if (!!this._listeners) {
      var i = this._listeners.indexOf(r);
      i !== -1 && this._listeners.splice(i, 1);
    }
  }, e.source = function() {
    var r, i = new e(function(s) {
      r = s;
    });
    return {
      token: i,
      cancel: r
    };
  }, Fr = e, Fr;
}
var Br, zo;
function nu() {
  return zo || (zo = 1, Br = function(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }), Br;
}
var zr, Wo;
function ru() {
  if (Wo)
    return zr;
  Wo = 1;
  var t = _e;
  return zr = function(n) {
    return t.isObject(n) && n.isAxiosError === !0;
  }, zr;
}
var Vo = _e, iu = ul, Jn = eu, ou = wl, su = ji;
function kl(t) {
  var e = new Jn(t), n = iu(Jn.prototype.request, e);
  return Vo.extend(n, Jn.prototype, e), Vo.extend(n, e), n.create = function(i) {
    return kl(ou(t, i));
  }, n;
}
var Ie = kl(su);
Ie.Axios = Jn;
Ie.CanceledError = yr();
Ie.CancelToken = tu();
Ie.isCancel = yl();
Ie.VERSION = Sl().version;
Ie.toFormData = _l;
Ie.AxiosError = ln;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(e) {
  return Promise.all(e);
};
Ie.spread = nu();
Ie.isAxiosError = ru();
Di.exports = Ie;
Di.exports.default = Ie;
(function(t) {
  t.exports = Di.exports;
})(cl);
const Oe = /* @__PURE__ */ ec(cl.exports);
var di = function(t, e) {
  return di = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, di(t, e);
};
function Ge(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  di(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function lu(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function $l(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(c) {
    return function(u) {
      return a([c, u]);
    };
  }
  function a(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (u) {
        c = [6, u], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Xt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n)
    return n.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pt(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n)
    return t;
  var r = n.call(t), i, o = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
function gt(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function zt(t) {
  return this instanceof zt ? (this.v = t, this) : new zt(t);
}
function au(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(f) {
    r[f] && (i[f] = function(h) {
      return new Promise(function(p, g) {
        o.push([f, h, p, g]) > 1 || l(f, h);
      });
    });
  }
  function l(f, h) {
    try {
      a(r[f](h));
    } catch (p) {
      d(o[0][3], p);
    }
  }
  function a(f) {
    f.value instanceof zt ? Promise.resolve(f.value.v).then(c, u) : d(o[0][2], f);
  }
  function c(f) {
    l("next", f);
  }
  function u(f) {
    l("throw", f);
  }
  function d(f, h) {
    f(h), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function cu(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Xt == "function" ? Xt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(o) {
    n[o] = t[o] && function(s) {
      return new Promise(function(l, a) {
        s = t[o](s), i(l, a, s.done, s.value);
      });
    };
  }
  function i(o, s, l, a) {
    Promise.resolve(a).then(function(c) {
      o({ value: c, done: l });
    }, s);
  }
}
function re(t) {
  return typeof t == "function";
}
function Fi(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Wr = Fi(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function sr(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var In = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, o;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var l = Xt(s), a = l.next(); !a.done; a = l.next()) {
              var c = a.value;
              c.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              a && !a.done && (n = l.return) && n.call(l);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          s.remove(this);
      var u = this.initialTeardown;
      if (re(u))
        try {
          u();
        } catch (g) {
          o = g instanceof Wr ? g.errors : [g];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = Xt(d), h = f.next(); !h.done; h = f.next()) {
            var p = h.value;
            try {
              qo(p);
            } catch (g) {
              o = o != null ? o : [], g instanceof Wr ? o = gt(gt([], pt(o)), pt(g.errors)) : o.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            h && !h.done && (i = f.return) && i.call(f);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (o)
        throw new Wr(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        qo(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && sr(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && sr(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Tl = In.EMPTY;
function xl(t) {
  return t instanceof In || t && "closed" in t && re(t.remove) && re(t.add) && re(t.unsubscribe);
}
function qo(t) {
  re(t) ? t() : t.unsubscribe();
}
var Cr = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, lr = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = lr.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, gt([t, e], pt(n))) : setTimeout.apply(void 0, gt([t, e], pt(n)));
  },
  clearTimeout: function(t) {
    var e = lr.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Al(t) {
  lr.setTimeout(function() {
    throw t;
  });
}
function hi() {
}
var uu = function() {
  return Bi("C", void 0, void 0);
}();
function fu(t) {
  return Bi("E", void 0, t);
}
function du(t) {
  return Bi("N", t, void 0);
}
function Bi(t, e, n) {
  return {
    kind: t,
    value: e,
    error: n
  };
}
var Nn = null;
function Xn(t) {
  if (Cr.useDeprecatedSynchronousErrorHandling) {
    var e = !Nn;
    if (e && (Nn = { errorThrown: !1, error: null }), t(), e) {
      var n = Nn, r = n.errorThrown, i = n.error;
      if (Nn = null, r)
        throw i;
    }
  } else
    t();
}
var zi = function(t) {
  Ge(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, xl(n) && n.add(r)) : r.destination = mu, r;
  }
  return e.create = function(n, r, i) {
    return new Kt(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped ? qr(du(n), this) : this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped ? qr(fu(n), this) : (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped ? qr(uu, this) : (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(In), hu = Function.prototype.bind;
function Vr(t, e) {
  return hu.call(t, e);
}
var pu = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Un(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Un(r);
      }
    else
      Un(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Un(n);
      }
  }, t;
}(), Kt = function(t) {
  Ge(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    if (re(n) || !n)
      s = {
        next: n != null ? n : void 0,
        error: r != null ? r : void 0,
        complete: i != null ? i : void 0
      };
    else {
      var l;
      o && Cr.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && Vr(n.next, l),
        error: n.error && Vr(n.error, l),
        complete: n.complete && Vr(n.complete, l)
      }) : s = n;
    }
    return o.destination = new pu(s), o;
  }
  return e;
}(zi);
function Un(t) {
  Al(t);
}
function gu(t) {
  throw t;
}
function qr(t, e) {
  var n = Cr.onStoppedNotification;
  n && lr.setTimeout(function() {
    return n(t, e);
  });
}
var mu = {
  closed: !0,
  next: hi,
  error: gu,
  complete: hi
}, Wi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function an(t) {
  return t;
}
function vu(t) {
  return t.length === 0 ? an : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Ce = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, o = bu(e) ? e : new Kt(e, n, r);
    return Xn(function() {
      var s = i, l = s.operator, a = s.source;
      o.add(l ? l.call(o, a) : a ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Go(n), new n(function(i, o) {
      var s = new Kt({
        next: function(l) {
          try {
            e(l);
          } catch (a) {
            o(a), s.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      r.subscribe(s);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Wi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return vu(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Go(e), new e(function(r, i) {
      var o;
      n.subscribe(function(s) {
        return o = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(o);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Go(t) {
  var e;
  return (e = t != null ? t : Cr.Promise) !== null && e !== void 0 ? e : Promise;
}
function _u(t) {
  return t && re(t.next) && re(t.error) && re(t.complete);
}
function bu(t) {
  return t && t instanceof zi || _u(t) && xl(t);
}
function yu(t) {
  return re(t == null ? void 0 : t.lift);
}
function $e(t) {
  return function(e) {
    if (yu(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function fe(t, e, n, r, i) {
  return new wu(t, e, n, r, i);
}
var wu = function(t) {
  Ge(e, t);
  function e(n, r, i, o, s, l) {
    var a = t.call(this, n) || this;
    return a.onFinalize = s, a.shouldUnsubscribe = l, a._next = r ? function(c) {
      try {
        r(c);
      } catch (u) {
        n.error(u);
      }
    } : t.prototype._next, a._error = o ? function(c) {
      try {
        o(c);
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, a._complete = i ? function() {
      try {
        i();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, a;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(zi), Su = Fi(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), we = function(t) {
  Ge(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Jo(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Su();
  }, e.prototype.next = function(n) {
    var r = this;
    Xn(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Xt(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
            var a = l.value;
            a.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            l && !l.done && (o = s.return) && o.call(s);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    Xn(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Xn(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, o = i.hasError, s = i.isStopped, l = i.observers;
    return o || s ? Tl : (this.currentObservers = null, l.push(n), new In(function() {
      r.currentObservers = null, sr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Ce();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Jo(n, r);
  }, e;
}(Ce), Jo = function(t) {
  Ge(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Tl;
  }, e;
}(we), Vi = function(t) {
  Ge(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, o = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), o;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(we), qi = {
  now: function() {
    return (qi.delegate || Date).now();
  },
  delegate: void 0
}, Pl = function(t) {
  Ge(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = qi);
    var o = t.call(this) || this;
    return o._bufferSize = n, o._windowTime = r, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = !0, o._infiniteTimeWindow = r === 1 / 0, o._bufferSize = Math.max(1, n), o._windowTime = Math.max(1, r), o;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, o = r._buffer, s = r._infiniteTimeWindow, l = r._timestampProvider, a = r._windowTime;
    i || (o.push(n), !s && o.push(l.now() + a)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, o = i._infiniteTimeWindow, s = i._buffer, l = s.slice(), a = 0; a < l.length && !n.closed; a += o ? 1 : 2)
      n.next(l[a]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, o = n._buffer, s = n._infiniteTimeWindow, l = (s ? 1 : 2) * r;
    if (r < 1 / 0 && l < o.length && o.splice(0, o.length - l), !s) {
      for (var a = i.now(), c = 0, u = 1; u < o.length && o[u] <= a; u += 2)
        c = u;
      c && o.splice(0, c + 1);
    }
  }, e;
}(we), Cu = function(t) {
  Ge(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(In), ar = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = ar.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, gt([t, e], pt(n))) : setInterval.apply(void 0, gt([t, e], pt(n)));
  },
  clearInterval: function(t) {
    var e = ar.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, Eu = function(t) {
  Ge(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var i = this.id, o = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(o, i, r)), this.pending = !0, this.delay = r, this.id = this.id || this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), ar.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    ar.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = !1, o;
    try {
      this.work(n);
    } catch (s) {
      i = !0, o = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, sr(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Cu), Xo = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = qi.now, t;
}(), ku = function(t) {
  Ge(e, t);
  function e(n, r) {
    r === void 0 && (r = Xo.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i._scheduled = void 0, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
}(Xo), Er = new ku(Eu), $u = Er, Tu = new Ce(function(t) {
  return t.complete();
});
function Il(t) {
  return t && re(t.schedule);
}
function Rl(t) {
  return t[t.length - 1];
}
function xu(t) {
  return re(Rl(t)) ? t.pop() : void 0;
}
function Gi(t) {
  return Il(Rl(t)) ? t.pop() : void 0;
}
var Dl = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Ol(t) {
  return re(t == null ? void 0 : t.then);
}
function Nl(t) {
  return re(t[Wi]);
}
function Ul(t) {
  return Symbol.asyncIterator && re(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Ml(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Au() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Hl = Au();
function jl(t) {
  return re(t == null ? void 0 : t[Hl]);
}
function Ll(t) {
  return au(this, arguments, function() {
    var n, r, i, o;
    return $l(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, zt(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, zt(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, zt(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Fl(t) {
  return re(t == null ? void 0 : t.getReader);
}
function We(t) {
  if (t instanceof Ce)
    return t;
  if (t != null) {
    if (Nl(t))
      return Pu(t);
    if (Dl(t))
      return Iu(t);
    if (Ol(t))
      return Ru(t);
    if (Ul(t))
      return Bl(t);
    if (jl(t))
      return Du(t);
    if (Fl(t))
      return Ou(t);
  }
  throw Ml(t);
}
function Pu(t) {
  return new Ce(function(e) {
    var n = t[Wi]();
    if (re(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Iu(t) {
  return new Ce(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Ru(t) {
  return new Ce(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Al);
  });
}
function Du(t) {
  return new Ce(function(e) {
    var n, r;
    try {
      for (var i = Xt(t), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (l) {
      n = { error: l };
    } finally {
      try {
        o && !o.done && (r = i.return) && r.call(i);
      } finally {
        if (n)
          throw n.error;
      }
    }
    e.complete();
  });
}
function Bl(t) {
  return new Ce(function(e) {
    Nu(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Ou(t) {
  return Bl(Ll(t));
}
function Nu(t, e) {
  var n, r, i, o;
  return lu(this, void 0, void 0, function() {
    var s, l;
    return $l(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), n = cu(t), a.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = a.sent(), !!r.done)
            return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return l = a.sent(), i = { error: l }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i)
            throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function et(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function zl(t, e) {
  return e === void 0 && (e = 0), $e(function(n, r) {
    n.subscribe(fe(r, function(i) {
      return et(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return et(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return et(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Wl(t, e) {
  return e === void 0 && (e = 0), $e(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Uu(t, e) {
  return We(t).pipe(Wl(e), zl(e));
}
function Mu(t, e) {
  return We(t).pipe(Wl(e), zl(e));
}
function Hu(t, e) {
  return new Ce(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function ju(t, e) {
  return new Ce(function(n) {
    var r;
    return et(n, e, function() {
      r = t[Hl](), et(n, e, function() {
        var i, o, s;
        try {
          i = r.next(), o = i.value, s = i.done;
        } catch (l) {
          n.error(l);
          return;
        }
        s ? n.complete() : n.next(o);
      }, 0, !0);
    }), function() {
      return re(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Vl(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Ce(function(n) {
    et(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      et(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Lu(t, e) {
  return Vl(Ll(t), e);
}
function Fu(t, e) {
  if (t != null) {
    if (Nl(t))
      return Uu(t, e);
    if (Dl(t))
      return Hu(t, e);
    if (Ol(t))
      return Mu(t, e);
    if (Ul(t))
      return Vl(t, e);
    if (jl(t))
      return ju(t, e);
    if (Fl(t))
      return Lu(t, e);
  }
  throw Ml(t);
}
function Ot(t, e) {
  return e ? Fu(t, e) : We(t);
}
function Wt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Gi(t);
  return Ot(t, n);
}
function pi(t) {
  return !!t && (t instanceof Ce || re(t.lift) && re(t.subscribe));
}
var Bu = Fi(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Yt(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new Kt({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new Bu());
      }
    });
    t.subscribe(o);
  });
}
function zu(t) {
  return t instanceof Date && !isNaN(t);
}
function Qt(t, e) {
  return $e(function(n, r) {
    var i = 0;
    n.subscribe(fe(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var Wu = Array.isArray;
function Vu(t, e) {
  return Wu(e) ? t.apply(void 0, gt([], pt(e))) : t(e);
}
function qu(t) {
  return Qt(function(e) {
    return Vu(t, e);
  });
}
var Gu = Array.isArray, Ju = Object.getPrototypeOf, Xu = Object.prototype, Ku = Object.keys;
function Yu(t) {
  if (t.length === 1) {
    var e = t[0];
    if (Gu(e))
      return { args: e, keys: null };
    if (Qu(e)) {
      var n = Ku(e);
      return {
        args: n.map(function(r) {
          return e[r];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function Qu(t) {
  return t && typeof t == "object" && Ju(t) === Xu;
}
function Zu(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function ql() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Gi(t), r = xu(t), i = Yu(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return Ot([], n);
  var l = new Ce(ef(o, n, s ? function(a) {
    return Zu(s, a);
  } : an));
  return r ? l.pipe(qu(r)) : l;
}
function ef(t, e, n) {
  return n === void 0 && (n = an), function(r) {
    Ko(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, a = function(u) {
        Ko(e, function() {
          var d = Ot(t[u], e), f = !1;
          d.subscribe(fe(r, function(h) {
            o[u] = h, f || (f = !0, l--), l || r.next(n(o.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, c = 0; c < i; c++)
        a(c);
    }, r);
  };
}
function Ko(t, e, n) {
  t ? et(n, t, e) : e();
}
function tf(t, e, n, r, i, o, s, l) {
  var a = [], c = 0, u = 0, d = !1, f = function() {
    d && !a.length && !c && e.complete();
  }, h = function(g) {
    return c < r ? p(g) : a.push(g);
  }, p = function(g) {
    o && e.next(g), c++;
    var m = !1;
    We(n(g, u++)).subscribe(fe(e, function(T) {
      i == null || i(T), o ? h(T) : e.next(T);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          c--;
          for (var T = function() {
            var b = a.shift();
            s ? et(e, s, function() {
              return p(b);
            }) : p(b);
          }; a.length && c < r; )
            T();
          f();
        } catch (b) {
          e.error(b);
        }
    }));
  };
  return t.subscribe(fe(e, h, function() {
    d = !0, f();
  })), function() {
    l == null || l();
  };
}
function Gl(t, e, n) {
  return n === void 0 && (n = 1 / 0), re(e) ? Gl(function(r, i) {
    return Qt(function(o, s) {
      return e(r, o, i, s);
    })(We(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), $e(function(r, i) {
    return tf(r, i, t, n);
  }));
}
function nf(t) {
  return t === void 0 && (t = 1 / 0), Gl(an, t);
}
function rf() {
  return nf(1);
}
function of() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return rf()(Ot(t, Gi(t)));
}
function Jl(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = $u);
  var r = -1;
  return e != null && (Il(e) ? n = e : r = e), new Ce(function(i) {
    var o = zu(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function wn(t, e) {
  return $e(function(n, r) {
    var i = 0;
    n.subscribe(fe(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function sf(t) {
  return $e(function(e, n) {
    var r = !1, i = null, o = null, s = !1, l = function() {
      if (o == null || o.unsubscribe(), o = null, r) {
        r = !1;
        var c = i;
        i = null, n.next(c);
      }
      s && n.complete();
    }, a = function() {
      o = null, s && n.complete();
    };
    e.subscribe(fe(n, function(c) {
      r = !0, i = c, o || We(t(c)).subscribe(o = fe(n, l, a));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function lf(t, e) {
  return e === void 0 && (e = Er), sf(function() {
    return Jl(t, e);
  });
}
function Xl(t) {
  return $e(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(fe(n, void 0, void 0, function(s) {
      o = We(t(s, Xl(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function af(t, e) {
  return e === void 0 && (e = Er), $e(function(n, r) {
    var i = null, o = null, s = null, l = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = o;
        o = null, r.next(c);
      }
    };
    function a() {
      var c = s + t, u = e.now();
      if (u < c) {
        i = this.schedule(void 0, c - u), r.add(i);
        return;
      }
      l();
    }
    n.subscribe(fe(r, function(c) {
      o = c, s = e.now(), i || (i = e.schedule(a, t), r.add(i));
    }, function() {
      l(), r.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function cf(t) {
  return t <= 0 ? function() {
    return Tu;
  } : $e(function(e, n) {
    var r = 0;
    e.subscribe(fe(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function uf(t) {
  return Qt(function() {
    return t;
  });
}
function ff(t, e) {
  return e === void 0 && (e = an), t = t != null ? t : df, $e(function(n, r) {
    var i, o = !0;
    n.subscribe(fe(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function df(t, e) {
  return t === e;
}
function hf(t, e) {
  return ff(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function pf(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new we();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, a = l === void 0 ? !0 : l;
  return function(c) {
    var u, d, f, h = 0, p = !1, g = !1, m = function() {
      d == null || d.unsubscribe(), d = void 0;
    }, T = function() {
      m(), u = f = void 0, p = g = !1;
    }, b = function() {
      var _ = u;
      T(), _ == null || _.unsubscribe();
    };
    return $e(function(_, y) {
      h++, !g && !p && m();
      var v = f = f != null ? f : n();
      y.add(function() {
        h--, h === 0 && !g && !p && (d = Gr(b, a));
      }), v.subscribe(y), !u && h > 0 && (u = new Kt({
        next: function(w) {
          return v.next(w);
        },
        error: function(w) {
          g = !0, m(), d = Gr(T, i, w), v.error(w);
        },
        complete: function() {
          p = !0, m(), d = Gr(T, s), v.complete();
        }
      }), We(_).subscribe(u));
    })(c);
  };
}
function Gr(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new Kt({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, gt([], pt(n))).subscribe(i);
  }
}
function gf(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t != null ? t : 1 / 0, pf({
    connector: function() {
      return new Pl(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function mf(t) {
  return wn(function(e, n) {
    return t <= n;
  });
}
function Kl(t, e) {
  return $e(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(fe(r, function(a) {
      i == null || i.unsubscribe();
      var c = 0, u = o++;
      We(t(a, u)).subscribe(i = fe(r, function(d) {
        return r.next(e ? e(a, d, u, c++) : d);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function tt(t) {
  return $e(function(e, n) {
    We(t).subscribe(fe(n, function() {
      return n.complete();
    }, hi)), !n.closed && e.subscribe(n);
  });
}
function vf(t, e, n) {
  var r = re(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? $e(function(i, o) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var l = !0;
    i.subscribe(fe(o, function(a) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, a), o.next(a);
    }, function() {
      var a;
      l = !1, (a = r.complete) === null || a === void 0 || a.call(r), o.complete();
    }, function(a) {
      var c;
      l = !1, (c = r.error) === null || c === void 0 || c.call(r, a), o.error(a);
    }, function() {
      var a, c;
      l && ((a = r.unsubscribe) === null || a === void 0 || a.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : an;
}
var Yl = {
  leading: !0,
  trailing: !1
};
function _f(t, e) {
  return e === void 0 && (e = Yl), $e(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, a = null, c = !1, u = function() {
      a == null || a.unsubscribe(), a = null, o && (h(), c && r.complete());
    }, d = function() {
      a = null, c && r.complete();
    }, f = function(p) {
      return a = We(t(p)).subscribe(fe(r, u, d));
    }, h = function() {
      if (s) {
        s = !1;
        var p = l;
        l = null, r.next(p), !c && f(p);
      }
    };
    n.subscribe(fe(r, function(p) {
      s = !0, l = p, !(a && !a.closed) && (i ? h() : f(p));
    }, function() {
      c = !0, !(o && s && a && !a.closed) && r.complete();
    }));
  });
}
function bf(t, e, n) {
  e === void 0 && (e = Er), n === void 0 && (n = Yl);
  var r = Jl(t, e);
  return _f(function() {
    return r;
  }, n);
}
class Kn {
  static isPromise(e) {
    return e && typeof e.then == "function";
  }
}
var yf = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class cn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, Kn.isPromise(n) ? n.then((r) => this.accessToken = r) : this.accessToken = n;
  }
  getAuthorizationHeader() {
    return yf(this, void 0, void 0, function* () {
      return pi(this.accessToken) ? yield Yt(this.accessToken) : Kn.isPromise(this.accessToken) ? yield this.accessToken : this.accessToken, {
        Authorization: `Bearer ${this.accessToken}`
      };
    });
  }
  getAccessTokenAsPromise() {
    return pi(this.accessToken) ? Yt(this.accessToken) : Kn.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
  getStructureUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Structure}`;
  }
  static requestHttpConfig(e) {
    return Oe.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
}
var dn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class It extends cn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return dn(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return dn(this, void 0, void 0, function* () {
      let i = `${this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield Oe.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return dn(this, void 0, void 0, function* () {
      const o = `${this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), a = yield Oe.post(o, s, { headers: l });
      if (r) {
        console.log(a.headers);
        const c = JSON.parse(a.headers["paging-headers"]), u = Number(c.TotalCount);
        return {
          data: a.data,
          total: u
        };
      }
      return {
        data: a.data,
        total: a.data.length
      };
    });
  }
  resolvePathName(e) {
    return dn(this, void 0, void 0, function* () {
      const n = yield this.queryConfiguration(G.Group, { Id: { $in: e } });
      return e.map((r) => {
        var i, o;
        return (o = (i = n.data.find((s) => s.Id === r)) === null || i === void 0 ? void 0 : i.Name) !== null && o !== void 0 ? o : r;
      }).join("/");
    });
  }
  uploadProcessImage(e, n, r = "process-image.svg") {
    return dn(this, void 0, void 0, function* () {
      const i = `${this._createBaseUrlByType(G.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield Oe.post(i, l, { headers: o });
    });
  }
  _createBaseUrlByType(e) {
    return `${this.getStructureUrl()}${La[e]}`;
  }
}
var Jr = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class Sn extends cn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return Jr(this, void 0, void 0, function* () {
      const n = `${this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield Oe.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return Jr(this, void 0, void 0, function* () {
      const e = `${this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield Oe.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return Jr(this, void 0, void 0, function* () {
      const n = `${this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield Oe.get(n, { headers: r })).data;
    });
  }
}
var Xr = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class Cn {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, n, r = !1, i) {
    return Xr(this, void 0, void 0, function* () {
      const o = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let s = yield this.resolvePathName(o.Path.splice(i ? o.Path.length - i : 0, o.Path.length));
      return r && (s = s + "/" + o.Name.Value), s;
    });
  }
  resolvePathName(e) {
    return Xr(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Yt(ql(e.map((n) => this.resolveName(G.Group, n))).pipe(Qt((n) => n.join(" / "))));
    });
  }
  resolveName(e, n) {
    return Xr(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = Ot(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(Qt((r) => r.Name.Value), gf(1), Xl(() => Wt(n)))), Yt(this._nameCache[n]);
    });
  }
}
var wf = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class om extends cn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return wf(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield Oe.get(`${this.getStructureUrl()}/userprofile`, {
          headers: e
        });
        if (n.status == 200)
          return n.data;
      } catch (e) {
        throw new Error("Failed to request user profile with error: " + (e == null ? void 0 : e.message));
      }
    });
  }
}
var Sf = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class gi extends cn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return Sf(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield Oe.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Driver}`;
  }
}
class Zt extends Error {
  constructor(e, n) {
    const r = new.target.prototype;
    super(`${e}: Status code '${n}'`), this.statusCode = n, this.__proto__ = r;
  }
}
class Ji extends Error {
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class En extends Error {
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Cf extends Error {
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.transport = n, this.errorType = "UnsupportedTransportError", this.__proto__ = r;
  }
}
class Ef extends Error {
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.transport = n, this.errorType = "DisabledTransportError", this.__proto__ = r;
  }
}
class kf extends Error {
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.transport = n, this.errorType = "FailedToStartTransportError", this.__proto__ = r;
  }
}
class $f extends Error {
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class Tf extends Error {
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.innerErrors = n, this.__proto__ = r;
  }
}
class Ql {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class Xi {
  get(e, n) {
    return this.send({
      ...n,
      method: "GET",
      url: e
    });
  }
  post(e, n) {
    return this.send({
      ...n,
      method: "POST",
      url: e
    });
  }
  delete(e, n) {
    return this.send({
      ...n,
      method: "DELETE",
      url: e
    });
  }
  getCookieString(e) {
    return "";
  }
}
var C;
(function(t) {
  t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
})(C || (C = {}));
class kn {
  constructor() {
  }
  log(e, n) {
  }
}
kn.instance = new kn();
const xf = "6.0.8";
class ue {
  static isRequired(e, n) {
    if (e == null)
      throw new Error(`The '${n}' argument is required.`);
  }
  static isNotEmpty(e, n) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${n}' argument should not be empty.`);
  }
  static isIn(e, n, r) {
    if (!(e in n))
      throw new Error(`Unknown ${r} value: ${e}.`);
  }
}
class ge {
  static get isBrowser() {
    return typeof window == "object" && typeof window.document == "object";
  }
  static get isWebWorker() {
    return typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return typeof window == "object" && typeof window.document > "u";
  }
  static get isNode() {
    return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
  }
}
function $n(t, e) {
  let n = "";
  return Ki(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Af(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Af(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    n += `0x${r < 16 ? "0" : ""}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function Ki(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || t.constructor && t.constructor.name === "ArrayBuffer");
}
async function Zl(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const f = await i();
    f && (l = {
      Authorization: `Bearer ${f}`
    });
  }
  const [a, c] = en();
  l[a] = c, t.log(C.Trace, `(${e} transport) sending data. ${$n(o, s.logMessageContent)}.`);
  const u = Ki(o) ? "arraybuffer" : "text", d = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(C.Trace, `(${e} transport) request complete. Response status: ${d.statusCode}.`);
}
function Pf(t) {
  return t === void 0 ? new cr(C.Information) : t === null ? kn.instance : t.log !== void 0 ? t : new cr(t);
}
class If {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class cr {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, n) {
    if (e >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${C[e]}: ${n}`;
      switch (e) {
        case C.Critical:
        case C.Error:
          this.out.error(r);
          break;
        case C.Warning:
          this.out.warn(r);
          break;
        case C.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function en() {
  let t = "X-SignalR-User-Agent";
  return ge.isNode && (t = "User-Agent"), [t, Rf(xf, Df(), Nf(), Of())];
}
function Rf(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Df() {
  if (ge.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function Of() {
  if (ge.isNode)
    return process.versions.node;
}
function Nf() {
  return ge.isNode ? "NodeJS" : "Browser";
}
function Yo(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Uf() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class Mf extends Xi {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Uf());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new En();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new En();
    });
    let i = null;
    if (e.timeout) {
      const a = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(C.Warning, "Timeout from HTTP request."), r = new Ji();
      }, a);
    }
    let o;
    try {
      o = await this._fetchType(e.url, {
        body: e.content,
        cache: "no-cache",
        credentials: e.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          ...e.headers
        },
        method: e.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal
      });
    } catch (a) {
      throw r || (this._logger.log(C.Warning, `Error from HTTP request. ${a}.`), a);
    } finally {
      i && clearTimeout(i), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!o.ok) {
      const a = await Qo(o, "text");
      throw new Zt(a || o.statusText, o.status);
    }
    const l = await Qo(o, e.responseType);
    return new Ql(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return ge.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function Qo(t, e) {
  let n;
  switch (e) {
    case "arraybuffer":
      n = t.arrayBuffer();
      break;
    case "text":
      n = t.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      n = t.text();
      break;
  }
  return n;
}
class Hf extends Xi {
  constructor(e) {
    super(), this._logger = e;
  }
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new En()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new En());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new Ql(i.status, i.statusText, i.response || i.responseText)) : r(new Zt(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(C.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new Zt(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(C.Warning, "Timeout from HTTP request."), r(new Ji());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class jf extends Xi {
  constructor(e) {
    if (super(), typeof fetch < "u" || ge.isNode)
      this._httpClient = new Mf(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Hf(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new En()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class Ne {
  static write(e) {
    return `${e}${Ne.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== Ne.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(Ne.RecordSeparator);
    return n.pop(), n;
  }
}
Ne.RecordSeparatorCode = 30;
Ne.RecordSeparator = String.fromCharCode(Ne.RecordSeparatorCode);
class Lf {
  writeHandshakeRequest(e) {
    return Ne.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (Ki(e)) {
      const l = new Uint8Array(e), a = l.indexOf(Ne.RecordSeparatorCode);
      if (a === -1)
        throw new Error("Message is incomplete.");
      const c = a + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(l.slice(0, c))), r = l.byteLength > c ? l.slice(c).buffer : null;
    } else {
      const l = e, a = l.indexOf(Ne.RecordSeparator);
      if (a === -1)
        throw new Error("Message is incomplete.");
      const c = a + 1;
      n = l.substring(0, c), r = l.length > c ? l.substring(c) : null;
    }
    const i = Ne.parse(n), o = JSON.parse(i[0]);
    if (o.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, o];
  }
}
var Q;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(Q || (Q = {}));
class Ff {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const n of this.observers)
      n.next(e);
  }
  error(e) {
    for (const n of this.observers)
      n.error && n.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new If(this, e);
  }
}
const Bf = 30 * 1e3, zf = 15 * 1e3;
var ne;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(ne || (ne = {}));
class Yi {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(C.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, ue.isRequired(e, "connection"), ue.isRequired(n, "logger"), ue.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = Bf, this.keepAliveIntervalInMilliseconds = zf, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new Lf(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = ne.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: Q.Ping });
  }
  static create(e, n, r, i) {
    return new Yi(e, n, r, i);
  }
  get state() {
    return this._connectionState;
  }
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  set baseUrl(e) {
    if (this._connectionState !== ne.Disconnected && this._connectionState !== ne.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== ne.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = ne.Connecting, this._logger.log(C.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), ge.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = ne.Connected, this._connectionStarted = !0, this._logger.log(C.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = ne.Disconnected, this._logger.log(C.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((n, r) => {
      this._handshakeResolver = n, this._handshakeRejecter = r;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      const n = {
        protocol: this._protocol.name,
        version: this._protocol.version
      };
      if (this._logger.log(C.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(C.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
    } catch (n) {
      throw this._logger.log(C.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
    }
  }
  async stop() {
    const e = this._startPromise;
    this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    return this._connectionState === ne.Disconnected ? (this._logger.log(C.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === ne.Disconnecting ? (this._logger.log(C.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = ne.Disconnecting, this._logger.log(C.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(C.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
  }
  stream(e, ...n) {
    const [r, i] = this._replaceStreamingParams(n), o = this._createStreamInvocation(e, n, i);
    let s;
    const l = new Ff();
    return l.cancelCallback = () => {
      const a = this._createCancelInvocation(o.invocationId);
      return delete this._callbacks[o.invocationId], s.then(() => this._sendWithProtocol(a));
    }, this._callbacks[o.invocationId] = (a, c) => {
      if (c) {
        l.error(c);
        return;
      } else
        a && (a.type === Q.Completion ? a.error ? l.error(new Error(a.error)) : l.complete() : l.next(a.item));
    }, s = this._sendWithProtocol(o).catch((a) => {
      l.error(a), delete this._callbacks[o.invocationId];
    }), this._launchStreams(r, s), l;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  _sendWithProtocol(e) {
    return this._sendMessage(this._protocol.writeMessage(e));
  }
  send(e, ...n) {
    const [r, i] = this._replaceStreamingParams(n), o = this._sendWithProtocol(this._createInvocation(e, n, !0, i));
    return this._launchStreams(r, o), o;
  }
  invoke(e, ...n) {
    const [r, i] = this._replaceStreamingParams(n), o = this._createInvocation(e, n, !1, i);
    return new Promise((l, a) => {
      this._callbacks[o.invocationId] = (u, d) => {
        if (d) {
          a(d);
          return;
        } else
          u && (u.type === Q.Completion ? u.error ? a(new Error(u.error)) : l(u.result) : a(new Error(`Unexpected message type: ${u.type}`)));
      };
      const c = this._sendWithProtocol(o).catch((u) => {
        a(u), delete this._callbacks[o.invocationId];
      });
      this._launchStreams(r, c);
    });
  }
  on(e, n) {
    !e || !n || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(n) === -1 && this._methods[e].push(n));
  }
  off(e, n) {
    if (!e)
      return;
    e = e.toLowerCase();
    const r = this._methods[e];
    if (!!r)
      if (n) {
        const i = r.indexOf(n);
        i !== -1 && (r.splice(i, 1), r.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  onreconnected(e) {
    e && this._reconnectedCallbacks.push(e);
  }
  _processIncomingData(e) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
      const n = this._protocol.parseMessages(e, this._logger);
      for (const r of n)
        switch (r.type) {
          case Q.Invocation:
            this._invokeClientMethod(r);
            break;
          case Q.StreamItem:
          case Q.Completion: {
            const i = this._callbacks[r.invocationId];
            if (i) {
              r.type === Q.Completion && delete this._callbacks[r.invocationId];
              try {
                i(r);
              } catch (o) {
                this._logger.log(C.Error, `Stream callback threw error: ${Yo(o)}`);
              }
            }
            break;
          }
          case Q.Ping:
            break;
          case Q.Close: {
            this._logger.log(C.Information, "Close message received from server.");
            const i = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            r.allowReconnect === !0 ? this.connection.stop(i) : this._stopPromise = this._stopInternal(i);
            break;
          }
          default:
            this._logger.log(C.Warning, `Invalid message type: ${r.type}.`);
            break;
        }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let n, r;
    try {
      [r, n] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (i) {
      const o = "Error parsing handshake response: " + i;
      this._logger.log(C.Error, o);
      const s = new Error(o);
      throw this._handshakeRejecter(s), s;
    }
    if (n.error) {
      const i = "Server returned handshake error: " + n.error;
      this._logger.log(C.Error, i);
      const o = new Error(i);
      throw this._handshakeRejecter(o), o;
    } else
      this._logger.log(C.Debug, "Server handshake complete.");
    return this._handshakeResolver(), r;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - new Date().getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === ne.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, e);
    }
  }
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  _invokeClientMethod(e) {
    const n = this._methods[e.target.toLowerCase()];
    if (n) {
      try {
        n.forEach((r) => r.apply(this, e.arguments));
      } catch (r) {
        this._logger.log(C.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${r}'.`);
      }
      if (e.invocationId) {
        const r = "Server requested a response, which is not supported in this version of the client.";
        this._logger.log(C.Error, r), this._stopPromise = this._stopInternal(new Error(r));
      }
    } else
      this._logger.log(C.Warning, `No client method with the name '${e.target}' found.`);
  }
  _connectionClosed(e) {
    this._logger.log(C.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === ne.Disconnecting ? this._completeClose(e) : this._connectionState === ne.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === ne.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = ne.Disconnected, this._connectionStarted = !1, ge.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [e]));
      } catch (n) {
        this._logger.log(C.Error, `An onclose callback called with error '${e}' threw error '${n}'.`);
      }
    }
  }
  async _reconnect(e) {
    const n = Date.now();
    let r = 0, i = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), o = this._getNextRetryDelay(r++, 0, i);
    if (o === null) {
      this._logger.log(C.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = ne.Reconnecting, e ? this._logger.log(C.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(C.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(C.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== ne.Reconnecting) {
        this._logger.log(C.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(C.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== ne.Reconnecting) {
        this._logger.log(C.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = ne.Connected, this._logger.log(C.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(C.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(C.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== ne.Reconnecting) {
          this._logger.log(C.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === ne.Disconnecting && this._completeClose();
          return;
        }
        i = s instanceof Error ? s : new Error(s.toString()), o = this._getNextRetryDelay(r++, Date.now() - n, i);
      }
    }
    this._logger.log(C.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: e,
        retryReason: r
      });
    } catch (i) {
      return this._logger.log(C.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${n}) threw error '${i}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const n = this._callbacks;
    this._callbacks = {}, Object.keys(n).forEach((r) => {
      const i = n[r];
      try {
        i(null, e);
      } catch (o) {
        this._logger.log(C.Error, `Stream 'error' callback called with '${e}' threw error: ${Yo(o)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, n, r, i) {
    if (r)
      return i.length !== 0 ? {
        arguments: n,
        streamIds: i,
        target: e,
        type: Q.Invocation
      } : {
        arguments: n,
        target: e,
        type: Q.Invocation
      };
    {
      const o = this._invocationId;
      return this._invocationId++, i.length !== 0 ? {
        arguments: n,
        invocationId: o.toString(),
        streamIds: i,
        target: e,
        type: Q.Invocation
      } : {
        arguments: n,
        invocationId: o.toString(),
        target: e,
        type: Q.Invocation
      };
    }
  }
  _launchStreams(e, n) {
    if (e.length !== 0) {
      n || (n = Promise.resolve());
      for (const r in e)
        e[r].subscribe({
          complete: () => {
            n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(r)));
          },
          error: (i) => {
            let o;
            i instanceof Error ? o = i.message : i && i.toString ? o = i.toString() : o = "Unknown error", n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(r, o)));
          },
          next: (i) => {
            n = n.then(() => this._sendWithProtocol(this._createStreamItemMessage(r, i)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const n = [], r = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      if (this._isObservable(o)) {
        const s = this._invocationId;
        this._invocationId++, n[s] = o, r.push(s.toString()), e.splice(i, 1);
      }
    }
    return [n, r];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, n, r) {
    const i = this._invocationId;
    return this._invocationId++, r.length !== 0 ? {
      arguments: n,
      invocationId: i.toString(),
      streamIds: r,
      target: e,
      type: Q.StreamInvocation
    } : {
      arguments: n,
      invocationId: i.toString(),
      target: e,
      type: Q.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: Q.CancelInvocation
    };
  }
  _createStreamItemMessage(e, n) {
    return {
      invocationId: e,
      item: n,
      type: Q.StreamItem
    };
  }
  _createCompletionMessage(e, n, r) {
    return n ? {
      error: n,
      invocationId: e,
      type: Q.Completion
    } : {
      invocationId: e,
      result: r,
      type: Q.Completion
    };
  }
}
const Wf = [0, 2e3, 1e4, 3e4, null];
class Zo {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : Wf;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class $t {
}
$t.Authorization = "Authorization";
$t.Cookie = "Cookie";
var le;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(le || (le = {}));
var ye;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(ye || (ye = {}));
class Vf {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
}
class es {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new Vf(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (ue.isRequired(e, "url"), ue.isRequired(n, "transferFormat"), ue.isIn(n, ye, "transferFormat"), this._url = e, this._logger.log(C.Trace, "(LongPolling transport) Connecting."), n === ye.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = en(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === ye.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const a = `${e}&_=${Date.now()}`;
    this._logger.log(C.Trace, `(LongPolling transport) polling: ${a}.`);
    const c = await this._httpClient.get(a, s);
    c.statusCode !== 200 ? (this._logger.log(C.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new Zt(c.statusText || "", c.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[$t.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[$t.Authorization] && delete e.headers[$t.Authorization];
  }
  async _poll(e, n) {
    try {
      for (; this._running; ) {
        const r = await this._getAccessToken();
        this._updateHeaderToken(n, r);
        try {
          const i = `${e}&_=${Date.now()}`;
          this._logger.log(C.Trace, `(LongPolling transport) polling: ${i}.`);
          const o = await this._httpClient.get(i, n);
          o.statusCode === 204 ? (this._logger.log(C.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(C.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new Zt(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(C.Trace, `(LongPolling transport) data received. ${$n(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(C.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof Ji ? this._logger.log(C.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(C.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(C.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Zl(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(C.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(C.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = en();
      e[n] = r;
      const i = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      }, o = await this._getAccessToken();
      this._updateHeaderToken(i, o), await this._httpClient.delete(this._url, i), this._logger.log(C.Trace, "(LongPolling transport) DELETE request sent.");
    } finally {
      this._logger.log(C.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(C.Trace, e), this.onclose(this._closeError);
    }
  }
}
class qf {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (ue.isRequired(e, "url"), ue.isRequired(n, "transferFormat"), ue.isIn(n, ye, "transferFormat"), this._logger.log(C.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== ye.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (ge.isBrowser || ge.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), a = {};
        a.Cookie = l;
        const [c, u] = en();
        a[c] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...a, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(C.Trace, `(SSE transport) data received. ${$n(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
            } catch (a) {
              this._close(a);
              return;
            }
        }, s.onerror = (l) => {
          o ? this._close() : i(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, s.onopen = () => {
          this._logger.log(C.Information, `SSE connected to ${this._url}`), this._eventSource = s, o = !0, r();
        };
      } catch (l) {
        i(l);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Zl(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class Gf {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (ue.isRequired(e, "url"), ue.isRequired(n, "transferFormat"), ue.isIn(n, ye, "transferFormat"), this._logger.log(C.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (ge.isNode) {
        const a = {}, [c, u] = en();
        a[c] = u, s && (a[$t.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...a, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === ye.Binary && (o.binaryType = "arraybuffer"), o.onopen = (a) => {
        this._logger.log(C.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (a) => {
        let c = null;
        typeof ErrorEvent < "u" && a instanceof ErrorEvent ? c = a.error : c = "There was an error with the transport", this._logger.log(C.Information, `(WebSockets transport) ${c}.`);
      }, o.onmessage = (a) => {
        if (this._logger.log(C.Trace, `(WebSockets transport) data received. ${$n(a.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(a.data);
          } catch (c) {
            this._close(c);
            return;
          }
      }, o.onclose = (a) => {
        if (l)
          this._close(a);
        else {
          let c = null;
          typeof ErrorEvent < "u" && a instanceof ErrorEvent ? c = a.error : c = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", i(new Error(c));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(C.Trace, `(WebSockets transport) sending data. ${$n(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(C.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const ts = 100;
class Jf {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, ue.isRequired(e, "url"), this._logger = Pf(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (ge.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !ge.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : ge.isNode && !n.WebSocket && r && (n.WebSocket = r), !ge.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : ge.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new jf(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || ye.Binary, ue.isIn(e, ye, "transferFormat"), this._logger.log(C.Debug, `Starting connection with transfer format '${ye[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(C.Error, n), await this._stopPromise, Promise.reject(new Error(n));
    } else if (this._connectionState !== "Connected") {
      const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(C.Error, n), Promise.reject(new Error(n));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Qi(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(C.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(C.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((n) => {
      this._stopPromiseResolver = n;
    }), await this._stopInternal(e), await this._stopPromise;
  }
  async _stopInternal(e) {
    this._stopError = e;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (n) {
        this._logger.log(C.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(C.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let n = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === le.WebSockets)
          this.transport = this._constructTransport(le.WebSockets), await this._startTransport(n, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let r = null, i = 0;
        do {
          if (r = await this._getNegotiationResponse(n), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new Error("The connection was stopped during negotiation.");
          if (r.error)
            throw new Error(r.error);
          if (r.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (r.url && (n = r.url), r.accessToken) {
            const o = r.accessToken;
            this._accessTokenFactory = () => o;
          }
          i++;
        } while (r.url && i < ts);
        if (i === ts && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof es && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(C.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(C.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[$t.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = en();
    n[r] = i;
    const o = this._resolveNegotiateUrl(e);
    this._logger.log(C.Debug, `Sending negotiation request: ${o}.`);
    try {
      const s = await this._httpClient.post(o, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (s.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${s.statusCode}'`));
      const l = JSON.parse(s.content);
      return (!l.negotiateVersion || l.negotiateVersion < 1) && (l.connectionToken = l.connectionId), l;
    } catch (s) {
      let l = "Failed to complete negotiation with the server: " + s;
      return s instanceof Zt && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(C.Error, l), Promise.reject(new $f(l));
    }
  }
  _createConnectUrl(e, n) {
    return n ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : e;
  }
  async _createTransport(e, n, r, i) {
    let o = this._createConnectUrl(e, r.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(C.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(o, i), this.connectionId = r.connectionId;
      return;
    }
    const s = [], l = r.availableTransports || [];
    let a = r;
    for (const c of l) {
      const u = this._resolveTransportOrError(c, n, i);
      if (u instanceof Error)
        s.push(`${c.transport} failed:`), s.push(u);
      else if (this._isITransport(u)) {
        if (this.transport = u, !a) {
          try {
            a = await this._getNegotiationResponse(e);
          } catch (d) {
            return Promise.reject(d);
          }
          o = this._createConnectUrl(e, a.connectionToken);
        }
        try {
          await this._startTransport(o, i), this.connectionId = a.connectionId;
          return;
        } catch (d) {
          if (this._logger.log(C.Error, `Failed to start the transport '${c.transport}': ${d}`), a = void 0, s.push(new kf(`${c.transport} failed: ${d}`, le[c.transport])), this._connectionState !== "Connecting") {
            const f = "Failed to select transport before stop() was called.";
            return this._logger.log(C.Debug, f), Promise.reject(new Error(f));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new Tf(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case le.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Gf(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case le.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new qf(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case le.LongPolling:
        return new es(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = le[e.transport];
    if (i == null)
      return this._logger.log(C.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (Xf(n, i))
      if (e.transferFormats.map((s) => ye[s]).indexOf(r) >= 0) {
        if (i === le.WebSockets && !this._options.WebSocket || i === le.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(C.Debug, `Skipping transport '${le[i]}' because it is not supported in your environment.'`), new Cf(`'${le[i]}' is not supported in your environment.`, i);
        this._logger.log(C.Debug, `Selecting transport '${le[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(C.Debug, `Skipping transport '${le[i]}' because it does not support the requested transfer format '${ye[r]}'.`), new Error(`'${le[i]}' does not support ${ye[r]}.`);
    else
      return this._logger.log(C.Debug, `Skipping transport '${le[i]}' because it was disabled by the client.`), new Ef(`'${le[i]}' is disabled by the client.`, i);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(C.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(C.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(C.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(C.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(C.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
      this._logger.log(C.Error, `TransportSendQueue.stop() threw error '${n}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (n) {
        this._logger.log(C.Error, `HttpConnection.onclose(${e}) threw error '${n}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!ge.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const n = window.document.createElement("a");
    return n.href = e, this._logger.log(C.Information, `Normalizing '${e}' to '${n.href}'.`), n.href;
  }
  _resolveNegotiateUrl(e) {
    const n = e.indexOf("?");
    let r = e.substring(0, n === -1 ? e.length : n);
    return r[r.length - 1] !== "/" && (r += "/"), r += "negotiate", r += n === -1 ? "" : e.substring(n), r.indexOf("negotiateVersion") === -1 && (r += n === -1 ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r;
  }
}
function Xf(t, e) {
  return !t || (e & t) !== 0;
}
class Qi {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Mn(), this._transportResult = new Mn(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new Mn()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(e) {
    if (this._buffer.length && typeof this._buffer[0] != typeof e)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
    this._buffer.push(e), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new Mn();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : Qi._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(n), e.resolve();
      } catch (r) {
        e.reject(r);
      }
    }
  }
  static _concatBuffers(e) {
    const n = e.map((o) => o.byteLength).reduce((o, s) => o + s), r = new Uint8Array(n);
    let i = 0;
    for (const o of e)
      r.set(new Uint8Array(o), i), i += o.byteLength;
    return r.buffer;
  }
}
class Mn {
  constructor() {
    this.promise = new Promise((e, n) => [this._resolver, this._rejecter] = [e, n]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const Kf = "json";
class Yf {
  constructor() {
    this.name = Kf, this.version = 1, this.transferFormat = ye.Text;
  }
  parseMessages(e, n) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    n === null && (n = kn.instance);
    const r = Ne.parse(e), i = [];
    for (const o of r) {
      const s = JSON.parse(o);
      if (typeof s.type != "number")
        throw new Error("Invalid payload.");
      switch (s.type) {
        case Q.Invocation:
          this._isInvocationMessage(s);
          break;
        case Q.StreamItem:
          this._isStreamItemMessage(s);
          break;
        case Q.Completion:
          this._isCompletionMessage(s);
          break;
        case Q.Ping:
          break;
        case Q.Close:
          break;
        default:
          n.log(C.Information, "Unknown message type '" + s.type + "' ignored.");
          continue;
      }
      i.push(s);
    }
    return i;
  }
  writeMessage(e) {
    return Ne.write(JSON.stringify(e));
  }
  _isInvocationMessage(e) {
    this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(e) {
    if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(e) {
    if (e.result && e.error)
      throw new Error("Invalid payload for Completion message.");
    !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
  }
  _assertNotEmptyString(e, n) {
    if (typeof e != "string" || e === "")
      throw new Error(n);
  }
}
const Qf = {
  trace: C.Trace,
  debug: C.Debug,
  info: C.Information,
  information: C.Information,
  warn: C.Warning,
  warning: C.Warning,
  error: C.Error,
  critical: C.Critical,
  none: C.None
};
function Zf(t) {
  const e = Qf[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class ed {
  configureLogging(e) {
    if (ue.isRequired(e, "logging"), td(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = Zf(e);
      this.logger = new cr(n);
    } else
      this.logger = new cr(e);
    return this;
  }
  withUrl(e, n) {
    return ue.isRequired(e, "url"), ue.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  withHubProtocol(e) {
    return ue.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new Zo(e) : this.reconnectPolicy = e : this.reconnectPolicy = new Zo(), this;
  }
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new Jf(this.url, e);
    return Yi.create(n, this.logger || kn.instance, this.protocol || new Yf(), this.reconnectPolicy);
  }
}
function td(t) {
  return t.log !== void 0;
}
var bn;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})(bn || (bn = {}));
var ns;
(function(t) {
  t.Send = "Send";
})(ns || (ns = {}));
var rs;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC";
})(rs || (rs = {}));
class mi {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new we(), this._connectionEstablished = new Vi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new we(), this._subscribeRequested = new we(), this._handleSubscriptionQueue();
  }
  connect() {
    return this.connectWithUrl(`${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Live}/hub`);
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), this._connectionEstablished.pipe(wn((n) => n), uf(null));
  }
  dispose() {
    var e;
    (e = this.hubConnection) === null || e === void 0 || e.stop(), this.hubConnection = null, this._unsub.next(), this._unsub.complete();
  }
  subscribeToSignalValues(e) {
    const n = e.map((r) => `S:${r}`);
    return this.subscribeLiveValuePackages(n);
  }
  subscribeToSignalOffsets(e) {
    const n = e.map((r) => `SO:${r}`);
    return this.subscribeLiveValuePackages(n);
  }
  subscribeToTimestamp(e) {
    return this.subscribeLiveValuePackages(e);
  }
  subscribeLiveValuePackages(e) {
    const n = e.filter((o) => !this._subscribedIds.includes(o));
    this.hubConnection && n.length > 0 && this._enqueueIdsToSubscribe(n);
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(Qt((o) => o.filter((s) => e.includes(s.identifier))), wn((o) => o.length > 0));
    return r.length > 0 ? of(Wt(r), i) : i;
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(tt(this._unsub), lf(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(bn.SubscribeMany, e), this._subscribedIds.push(...e);
    });
  }
  _getCachedValuePackages(e) {
    return e.map((n) => this._valueCache[n]).filter((n) => n !== void 0);
  }
  _sendMessage(e, ...n) {
    this.hubConnection && this.hubConnection.send(e, ...n);
  }
  _handleHubMessage(e) {
    Array.isArray(e) ? (e.forEach((n) => {
      this._valueCache[n.identifier] = n;
    }), this._livePackageObserver.next(e)) : console.info("Unknown message: ", e);
  }
  _establishConnectionAndHandleEvents(e) {
    e.start().then(() => {
      this._sendMessage(bn.ChangeModeAsync, !0), this._sendMessage(bn.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new ed().withUrl(e, {
      accessTokenFactory: () => this.getAccessTokenAsPromise()
    }).build();
  }
  getAccessTokenAsPromise() {
    return pi(this.accessToken) ? Yt(this.accessToken) : Kn.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
}
var Hn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class sm extends cn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return Hn(this, void 0, void 0, function* () {
      const n = `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Historian}/value/manyflat`, r = yield this.getAuthorizationHeader(), i = yield Oe.post(n, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return Hn(this, void 0, void 0, function* () {
      const n = this.getUrl(), r = yield this.getAuthorizationHeader();
      return Oe.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return Hn(this, void 0, void 0, function* () {
      const n = this.getUrl(), r = yield this.getAuthorizationHeader();
      return Oe.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return Hn(this, void 0, void 0, function* () {
      const n = this.getUrl(), r = yield this.getAuthorizationHeader();
      return Oe.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Historian}`;
  }
}
var vi;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(vi || (vi = {}));
const Te = vi;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _i = function(t, e) {
  return _i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, _i(t, e);
};
function Zi(t, e) {
  _i(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function nd(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function rd(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(c) {
    return function(u) {
      return a([c, u]);
    };
  }
  function a(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (u) {
        c = [6, u], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function jn(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n)
    return n.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ur(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n)
    return t;
  var r = n.call(t), i, o = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
function Ct() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(ur(arguments[e]));
  return t;
}
function ea(t) {
  return !!t.useClass;
}
function bi(t) {
  return !!t.useFactory;
}
var ta = function() {
  function t(e) {
    this.wrap = e, this.reflectMethods = [
      "get",
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyDescriptor",
      "defineProperty",
      "has",
      "set",
      "deleteProperty",
      "apply",
      "construct",
      "ownKeys"
    ];
  }
  return t.prototype.createProxy = function(e) {
    var n = this, r = {}, i = !1, o, s = function() {
      return i || (o = e(n.wrap()), i = !0), o;
    };
    return new Proxy(r, this.createHandler(s));
  }, t.prototype.createHandler = function(e) {
    var n = {}, r = function(i) {
      n[i] = function() {
        for (var o = [], s = 0; s < arguments.length; s++)
          o[s] = arguments[s];
        o[0] = e();
        var l = Reflect[i];
        return l.apply(void 0, Ct(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function Ht(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function id(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function is(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function od(t) {
  return typeof t == "function" || t instanceof ta;
}
function Yn(t) {
  return !!t.useToken;
}
function Qn(t) {
  return t.useValue != null;
}
function sd(t) {
  return ea(t) || Qn(t) || Yn(t) || bi(t);
}
var eo = function() {
  function t() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  return t.prototype.entries = function() {
    return this._registryMap.entries();
  }, t.prototype.getAll = function(e) {
    return this.ensure(e), this._registryMap.get(e);
  }, t.prototype.get = function(e) {
    this.ensure(e);
    var n = this._registryMap.get(e);
    return n[n.length - 1] || null;
  }, t.prototype.set = function(e, n) {
    this.ensure(e), this._registryMap.get(e).push(n);
  }, t.prototype.setAll = function(e, n) {
    this._registryMap.set(e, n);
  }, t.prototype.has = function(e) {
    return this.ensure(e), this._registryMap.get(e).length > 0;
  }, t.prototype.clear = function() {
    this._registryMap.clear();
  }, t.prototype.ensure = function(e) {
    this._registryMap.has(e) || this._registryMap.set(e, []);
  }, t;
}(), ld = function(t) {
  Zi(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(eo), os = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function ad(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function cd(t, e, n) {
  return n === void 0 && (n = "    "), Ct([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function ud(t, e, n) {
  var r = ur(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = ad(o, e);
  return cd("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function fd(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var dd = function(t) {
  Zi(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(eo), hd = function(t) {
  Zi(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(eo), pd = function() {
  function t() {
    this.preResolution = new dd(), this.postResolution = new hd();
  }
  return t;
}(), gd = /* @__PURE__ */ new Map(), md = function() {
  function t(e) {
    this.parent = e, this._registry = new ld(), this.interceptors = new pd(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Te.Transient }), this.ensureNotDisposed();
    var i;
    if (sd(n) ? i = n : i = { useClass: n }, Yn(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + Ct(o, [l]).join(" -> "));
        o.push(l);
        var a = this._registry.get(l);
        a && Yn(a.provider) ? s = a.provider : s = null;
      }
    if ((r.lifecycle === Te.Singleton || r.lifecycle == Te.ContainerScoped || r.lifecycle == Te.ResolutionScoped) && (Qn(i) || bi(i)))
      throw new Error('Cannot use lifecycle "' + Te[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: i, options: r }), this;
  }, t.prototype.registerType = function(e, n) {
    return this.ensureNotDisposed(), Ht(n) ? this.register(e, {
      useToken: n
    }) : this.register(e, {
      useClass: n
    });
  }, t.prototype.registerInstance = function(e, n) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: n
    });
  }, t.prototype.registerSingleton = function(e, n) {
    if (this.ensureNotDisposed(), Ht(e)) {
      if (Ht(n))
        return this.register(e, {
          useToken: n
        }, { lifecycle: Te.Singleton });
      if (n)
        return this.register(e, {
          useClass: n
        }, { lifecycle: Te.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return n && !Ht(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Te.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new os()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && Ht(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (od(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = jn(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
          var a = l.value;
          a.options.frequency != "Once" && o.push(a), a.callback(e, n);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          l && !l.done && (i = s.return) && i.call(s);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.interceptors.preResolution.setAll(e, o);
    }
  }, t.prototype.executePostResolutionInterceptor = function(e, n, r) {
    var i, o;
    if (this.interceptors.postResolution.has(e)) {
      var s = [];
      try {
        for (var l = jn(this.interceptors.postResolution.getAll(e)), a = l.next(); !a.done; a = l.next()) {
          var c = a.value;
          c.options.frequency != "Once" && s.push(c), c.callback(e, n, r);
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          a && !a.done && (o = l.return) && o.call(l);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.interceptors.postResolution.setAll(e, s);
    }
  }, t.prototype.resolveRegistration = function(e, n) {
    if (this.ensureNotDisposed(), e.options.lifecycle === Te.ResolutionScoped && n.scopedResolutions.has(e))
      return n.scopedResolutions.get(e);
    var r = e.options.lifecycle === Te.Singleton, i = e.options.lifecycle === Te.ContainerScoped, o = r || i, s;
    return Qn(e.provider) ? s = e.provider.useValue : Yn(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : ea(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : bi(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Te.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new os()), this.ensureNotDisposed();
    var i = this.getAllRegistrations(e);
    if (!i && Ht(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "All"), i) {
      var o = i.map(function(l) {
        return r.resolveRegistration(l, n);
      });
      return this.executePostResolutionInterceptor(e, o, "All"), o;
    }
    var s = [this.construct(e, n)];
    return this.executePostResolutionInterceptor(e, s, "All"), s;
  }, t.prototype.isRegistered = function(e, n) {
    return n === void 0 && (n = !1), this.ensureNotDisposed(), this._registry.has(e) || n && (this.parent || !1) && this.parent.isRegistered(e, !0);
  }, t.prototype.reset = function() {
    this.ensureNotDisposed(), this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear();
  }, t.prototype.clearInstances = function() {
    var e, n;
    this.ensureNotDisposed();
    try {
      for (var r = jn(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = ur(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(a) {
          return !Qn(a.provider);
        }).map(function(a) {
          return a.instance = void 0, a;
        }));
      }
    } catch (a) {
      e = { error: a };
    } finally {
      try {
        i && !i.done && (n = r.return) && n.call(r);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.createChildContainer = function() {
    var e, n;
    this.ensureNotDisposed();
    var r = new t(this);
    try {
      for (var i = jn(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = ur(o.value, 2), l = s[0], a = s[1];
        a.some(function(c) {
          var u = c.options;
          return u.lifecycle === Te.ContainerScoped;
        }) && r._registry.setAll(l, a.map(function(c) {
          return c.options.lifecycle === Te.ContainerScoped ? {
            provider: c.provider,
            options: c.options
          } : c;
        }));
      }
    } catch (c) {
      e = { error: c };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return r;
  }, t.prototype.beforeResolution = function(e, n, r) {
    r === void 0 && (r = { frequency: "Always" }), this.interceptors.preResolution.set(e, {
      callback: n,
      options: r
    });
  }, t.prototype.afterResolution = function(e, n, r) {
    r === void 0 && (r = { frequency: "Always" }), this.interceptors.postResolution.set(e, {
      callback: n,
      options: r
    });
  }, t.prototype.dispose = function() {
    return nd(this, void 0, void 0, function() {
      var e;
      return rd(this, function(n) {
        switch (n.label) {
          case 0:
            return this.disposed = !0, e = [], this.disposables.forEach(function(r) {
              var i = r.dispose();
              i && e.push(i);
            }), [4, Promise.all(e)];
          case 1:
            return n.sent(), [2];
        }
      });
    });
  }, t.prototype.getRegistration = function(e) {
    return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null;
  }, t.prototype.getAllRegistrations = function(e) {
    return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null;
  }, t.prototype.construct = function(e, n) {
    var r = this;
    if (e instanceof ta)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = gd.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, Ct([void 0], s)))();
    }();
    return fd(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, a;
      try {
        return id(i) ? is(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, Ct([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, Ct([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : is(i) ? (a = r.resolve(i.transform, e)).transform.apply(a, Ct([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (c) {
        throw new Error(ud(n, o, c));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), na = new md();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function J() {
}
function vd(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function _d(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function ra(t) {
  return t();
}
function ss() {
  return /* @__PURE__ */ Object.create(null);
}
function it(t) {
  t.forEach(ra);
}
function ia(t) {
  return typeof t == "function";
}
function se(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function bd(t) {
  return Object.keys(t).length === 0;
}
function He(t, e, n, r) {
  if (t) {
    const i = oa(t, e, n, r);
    return t[0](i);
  }
}
function oa(t, e, n, r) {
  return t[1] && r ? vd(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function je(t, e, n, r) {
  if (t[2] && r) {
    const i = t[2](r(n));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(e.dirty.length, i.length);
      for (let l = 0; l < s; l += 1)
        o[l] = e.dirty[l] | i[l];
      return o;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Le(t, e, n, r, i, o) {
  if (i) {
    const s = oa(e, n, r, o);
    t.p(s, i);
  }
}
function Fe(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function Pe(t) {
  return t == null ? "" : t;
}
function yd(t) {
  return t && ia(t.destroy) ? t.destroy : J;
}
function A(t, e) {
  t.appendChild(e);
}
function un(t, e, n) {
  const r = wd(t);
  if (!r.getElementById(e)) {
    const i = I("style");
    i.id = e, i.textContent = n, Sd(r, i);
  }
}
function wd(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Sd(t, e) {
  A(t.head || t, e);
}
function D(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode.removeChild(t);
}
function Rt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function I(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function U() {
  return j(" ");
}
function kr() {
  return j("");
}
function ie(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function $(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Cd(t) {
  return Array.from(t.childNodes);
}
function Se(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function fr(t, e) {
  t.value = e == null ? "" : e;
}
function yi(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Ed(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Tn;
function Ze(t) {
  Tn = t;
}
function Nt() {
  if (!Tn)
    throw new Error("Function called outside component initialization");
  return Tn;
}
function sa(t) {
  Nt().$$.on_mount.push(t);
}
function kd(t) {
  Nt().$$.after_update.push(t);
}
function vt(t) {
  Nt().$$.on_destroy.push(t);
}
function Ve() {
  const t = Nt();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Ed(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ut(t, e) {
  return Nt().$$.context.set(t, e), e;
}
function Ae(t) {
  return Nt().$$.context.get(t);
}
const vn = [], ke = [], Zn = [], wi = [], $d = Promise.resolve();
let Si = !1;
function Td() {
  Si || (Si = !0, $d.then(no));
}
function Ci(t) {
  Zn.push(t);
}
function to(t) {
  wi.push(t);
}
const Kr = /* @__PURE__ */ new Set();
let Ln = 0;
function no() {
  const t = Tn;
  do {
    for (; Ln < vn.length; ) {
      const e = vn[Ln];
      Ln++, Ze(e), xd(e.$$);
    }
    for (Ze(null), vn.length = 0, Ln = 0; ke.length; )
      ke.pop()();
    for (let e = 0; e < Zn.length; e += 1) {
      const n = Zn[e];
      Kr.has(n) || (Kr.add(n), n());
    }
    Zn.length = 0;
  } while (vn.length);
  for (; wi.length; )
    wi.pop()();
  Si = !1, Kr.clear(), Ze(t);
}
function xd(t) {
  if (t.fragment !== null) {
    t.update(), it(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ci);
  }
}
const er = /* @__PURE__ */ new Set();
let kt;
function me() {
  kt = {
    r: 0,
    c: [],
    p: kt
  };
}
function ve() {
  kt.r || it(kt.c), kt = kt.p;
}
function x(t, e) {
  t && t.i && (er.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (er.has(t))
      return;
    er.add(t), kt.c.push(() => {
      er.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function dr(t, e) {
  const n = e.token = {};
  function r(i, o, s, l) {
    if (e.token !== n)
      return;
    e.resolved = l;
    let a = e.ctx;
    s !== void 0 && (a = a.slice(), a[s] = l);
    const c = i && (e.current = i)(a);
    let u = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, f) => {
      f !== o && d && (me(), P(d, 1, 1, () => {
        e.blocks[f] === d && (e.blocks[f] = null);
      }), ve());
    }) : e.block.d(1), c.c(), x(c, 1), c.m(e.mount(), e.anchor), u = !0), e.block = c, e.blocks && (e.blocks[o] = c), u && no();
  }
  if (_d(t)) {
    const i = Nt();
    if (t.then((o) => {
      Ze(i), r(e.then, 1, e.value, o), Ze(null);
    }, (o) => {
      if (Ze(i), r(e.catch, 2, e.error, o), Ze(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function la(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function ro(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function z(t) {
  t && t.c();
}
function F(t, e, n, r) {
  const { fragment: i, on_mount: o, on_destroy: s, after_update: l } = t.$$;
  i && i.m(e, n), r || Ci(() => {
    const a = o.map(ra).filter(ia);
    s ? s.push(...a) : it(a), t.$$.on_mount = [];
  }), l.forEach(Ci);
}
function B(t, e) {
  const n = t.$$;
  n.fragment !== null && (it(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ad(t, e) {
  t.$$.dirty[0] === -1 && (vn.push(t), Td(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function de(t, e, n, r, i, o, s, l = [-1]) {
  const a = Tn;
  Ze(t);
  const c = t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: J,
    not_equal: i,
    bound: ss(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: ss(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (d, f, ...h) => {
    const p = h.length ? h[0] : f;
    return c.ctx && i(c.ctx[d], c.ctx[d] = p) && (!c.skip_bound && c.bound[d] && c.bound[d](p), u && Ad(t, d)), f;
  }) : [], c.update(), u = !0, it(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Cd(e.target);
      c.fragment && c.fragment.l(d), d.forEach(R);
    } else
      c.fragment && c.fragment.c();
    e.intro && x(t.$$.fragment), F(t, e.target, e.anchor, e.customElement), no();
  }
  Ze(a);
}
class he {
  $destroy() {
    B(this, 1), this.$destroy = J;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !bd(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Pd = {
  [Sn.toString()]: "TenantHttpService",
  [gi.toString()]: "DataSourceHttpService",
  [It.toString()]: "EntityHttpService",
  [Cn.toString()]: "EntityNameService",
  [cn.toString()]: "BaseHttpService",
  [mi.toString()]: "LiveValueService"
};
function Re(t, e = null) {
  var i, o;
  let n = (i = Pd[t.toString()]) != null ? i : t.toString(), r = (o = window.dependencyContainer) != null ? o : na;
  if (r.isRegistered(t))
    return r.resolve(t);
  if (r.isRegistered(n))
    return r.resolve(n);
  if (window[n])
    return window[n];
  if (e)
    return e;
  throw new Error(`Service ${n == null ? void 0 : n.toString()} not found`);
}
function St(t, e) {
  var r;
  const n = (r = window.dependencyContainer) != null ? r : na;
  try {
    if (n.isRegistered(t))
      return;
    n.register(t, { useValue: e });
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
  return e;
}
function io(...t) {
  const e = {
    config: {},
    state: {}
  };
  for (const {
    config: n,
    props: r
  } of t)
    Object.assign(e.config, n), Object.assign(e.state, r);
  return e;
}
const aa = new Vi(!1), Id = aa.asObservable().pipe(wn((t) => !t), cf(1)), ls = {}, oo = /* @__PURE__ */ new Map(), so = new we();
so.asObservable();
function Rd(t) {
  oo.set(t.name, t), so.next({
    type: "add",
    store: t
  });
}
function Dd(t) {
  oo.delete(t.name), so.next({
    type: "remove",
    store: t
  });
}
function Od() {
  return oo;
}
class lo extends Vi {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Rd(this);
  }
  get name() {
    return this.storeDef.name;
  }
  getConfig() {
    return this.storeDef.config;
  }
  query(e) {
    return e(this.getValue());
  }
  update(...e) {
    const n = this.getValue();
    let r = e.reduce((i, o) => (i = o(i, this.context), i), n);
    ls.preStoreUpdate && (r = ls.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, aa.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Id.subscribe(() => {
      super.next(this.state), this.batchInProgress = !1;
    })) : super.next(this.state));
  }
  getValue() {
    return this.state;
  }
  reset() {
    this.update(() => this.initialState);
  }
  combine(e) {
    let n = !0;
    const r = {};
    return new Ce((i) => {
      for (const [o, s] of Object.entries(e))
        i.add(s.subscribe((l) => {
          r[o] = l, n = !0;
        }));
      return this.subscribe({
        next() {
          n && (i.next(r), n = !1);
        },
        error(o) {
          i.error(o);
        },
        complete() {
          i.complete();
        }
      });
    });
  }
  destroy() {
    Dd(this), this.reset();
  }
  next(e) {
    this.update(() => e);
  }
  error() {
  }
  complete() {
  }
}
function Nd(t, ...e) {
  const {
    state: n,
    config: r
  } = io(...e), {
    name: i
  } = t;
  return new lo({
    name: i,
    state: n,
    config: r
  });
}
function ao(t) {
  return {
    props: t,
    config: void 0
  };
}
function Ud(t, e) {
  var n;
  const r = {
    source: (c) => c,
    preStoreInit: (c) => c,
    key: (n = e.key) != null ? n : `${t.name}@store`,
    runGuard() {
      return typeof window < "u";
    }
  }, i = Object.assign({}, r, e);
  if (!(i.runGuard != null && i.runGuard()))
    return {
      initialized$: Wt(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new Pl(1), l = Ot(o.getItem(i.key)).subscribe((c) => {
    c && t.update((u) => i.preStoreInit(Object.assign({}, u, c))), s.next(!0), s.complete();
  }), a = i.source(t).pipe(mf(1), Kl((c) => o.setItem(i.key, c))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      a.unsubscribe(), l.unsubscribe();
    }
  };
}
function Md(t) {
  if (!!t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return Wt(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), Wt(!0);
      },
      removeItem(e) {
        return t.removeItem(e), Wt(!0);
      }
    };
}
const Hd = Md(typeof localStorage < "u" ? localStorage : void 0), jt = [];
function hr(t, e = J) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (se(t, l) && (t = l, n)) {
      const a = !jt.length;
      for (const c of r)
        c[1](), jt.push(c, t);
      if (a) {
        for (let c = 0; c < jt.length; c += 2)
          jt[c][0](jt[c + 1]);
        jt.length = 0;
      }
    }
  }
  function o(l) {
    i(l(t));
  }
  function s(l, a = J) {
    const c = [l, a];
    return r.add(c), r.size === 1 && (n = e(i) || J), l(t), () => {
      r.delete(c), r.size === 0 && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
const as = hr(G.Signal), { config: jd, state: Ld } = io(ao({
  queryWithSubGroups: !0,
  selectedTenant: null
})), Tt = Nd({ name: "entity-select-selection" }, ao({
  selectedEntities: []
})), xt = new lo({ state: Ld, config: jd, name: "entity-select-global" });
Ud(xt, {
  key: "entity-select-global",
  storage: Hd
});
const tn = (t) => {
  const e = Od().get(`entity-select-type-${as}`);
  if (e)
    return e;
  const { state: n, config: r } = io(ao({
    filter: null,
    selectedGroup: null,
    lastSelectedEntities: []
  }));
  return new lo({ state: n, config: r, name: `entity-select-type-${as}` });
};
function cs(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function Fd(t) {
  let e;
  return {
    c() {
      e = I("div"), $(e, "class", t[5]`p-[10px]`);
    },
    m(n, r) {
      D(n, e, r);
    },
    p: J,
    d(n) {
      n && R(e);
    }
  };
}
function Bd(t) {
  let e;
  function n(o, s) {
    return o[0] ? Wd : zd;
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = I("div"), i.c(), $(e, "class", t[5]`flex items-center`);
    },
    m(o, s) {
      D(o, e, s), i.m(e, null);
    },
    p(o, s) {
      r === (r = n(o)) && i ? i.p(o, s) : (i.d(1), i = r(o), i && (i.c(), i.m(e, null)));
    },
    d(o) {
      o && R(e), i.d();
    }
  };
}
function zd(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("span"), n = j("chevron_right"), $(e, "class", t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`);
    },
    m(o, s) {
      D(o, e, s), A(e, n), r || (i = ie(e, "click", t[9]), r = !0);
    },
    p: J,
    d(o) {
      o && R(e), r = !1, i();
    }
  };
}
function Wd(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("span"), n = j("expand_more"), $(e, "class", t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`);
    },
    m(o, s) {
      D(o, e, s), A(e, n), r || (i = ie(e, "click", t[8]), r = !0);
    },
    p: J,
    d(o) {
      o && R(e), r = !1, i();
    }
  };
}
function us(t) {
  let e, n, r, i, o, s, l, a, c = t[4], u = [];
  for (let f = 0; f < c.length; f += 1)
    u[f] = fs(cs(t, c, f));
  const d = (f) => P(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      e = I("div"), n = I("div"), i = U(), o = I("div");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      $(n, "class", r = t[5]`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`), $(o, "class", s = t[5]`w-full`), $(e, "class", l = t[5]`flex w-full`);
    },
    m(f, h) {
      D(f, e, h), A(e, n), A(e, i), A(e, o);
      for (let p = 0; p < u.length; p += 1)
        u[p].m(o, null);
      a = !0;
    },
    p(f, h) {
      if (h & 28) {
        c = f[4];
        let p;
        for (p = 0; p < c.length; p += 1) {
          const g = cs(f, c, p);
          u[p] ? (u[p].p(g, h), x(u[p], 1)) : (u[p] = fs(g), u[p].c(), x(u[p], 1), u[p].m(o, null));
        }
        for (me(), p = c.length; p < u.length; p += 1)
          d(p);
        ve();
      }
    },
    i(f) {
      if (!a) {
        for (let h = 0; h < c.length; h += 1)
          x(u[h]);
        a = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        P(u[h]);
      a = !1;
    },
    d(f) {
      f && R(e), Rt(u, f);
    }
  };
}
function fs(t) {
  let e, n;
  return e = new ca({
    props: {
      group: t[16],
      level: t[2] + 1,
      entityType: t[3]
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & 16 && (o.group = r[16]), i & 4 && (o.level = r[2] + 1), i & 8 && (o.entityType = r[3]), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Vd(t) {
  var T, b;
  let e, n, r, i, o, s, l = ((b = (T = t[1]) == null ? void 0 : T.Name) == null ? void 0 : b.Value) + "", a, c, u, d, f;
  function h(_, y) {
    return _[4].length > 0 ? Bd : Fd;
  }
  let p = h(t), g = p(t), m = t[0] && us(t);
  return {
    c() {
      e = I("div"), n = I("div"), r = I("div"), i = U(), g.c(), o = U(), s = I("div"), a = j(l), c = U(), m && m.c(), $(s, "class", t[5]`overflow-hidden whitespace-nowrap text-ellipsis w-full`), $(n, "class", t[5]`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`), $(e, "class", t[5]`group cursor-pointer`);
    },
    m(_, y) {
      D(_, e, y), A(e, n), A(n, r), A(n, i), g.m(n, null), A(n, o), A(n, s), A(s, a), A(e, c), m && m.m(e, null), u = !0, d || (f = ie(n, "click", t[10]), d = !0);
    },
    p(_, [y]) {
      var v, w;
      p === (p = h(_)) && g ? g.p(_, y) : (g.d(1), g = p(_), g && (g.c(), g.m(n, o))), (!u || y & 2) && l !== (l = ((w = (v = _[1]) == null ? void 0 : v.Name) == null ? void 0 : w.Value) + "") && Se(a, l), _[0] ? m ? (m.p(_, y), y & 1 && x(m, 1)) : (m = us(_), m.c(), x(m, 1), m.m(e, null)) : m && (me(), P(m, 1, 1, () => {
        m = null;
      }), ve());
    },
    i(_) {
      u || (x(m), u = !0);
    },
    o(_) {
      P(m), u = !1;
    },
    d(_) {
      _ && R(e), g.d(), m && m.d(), d = !1, f();
    }
  };
}
function qd(t, e, n) {
  const r = Re(It);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, a = Ae("tw"), c = [], u = new we(), d = tn();
  d.pipe(tt(u), hf("selectedGroup")).subscribe((b) => {
    var _, y;
    (_ = b.selectedGroup) == null || _.Id, i == null || i.Id, i && ((y = b.selectedGroup) == null ? void 0 : y.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function f() {
    try {
      n(4, c = await (await r.queryConfiguration(G.Group, { GroupId: i.Id })).data);
    } catch (b) {
      console.error(b);
    }
  }
  function h() {
    n(0, o = !o);
  }
  function p() {
    d.update((b) => ({ ...b, selectedGroup: i }));
  }
  vt(() => {
    u.next(), u.complete();
  });
  const g = () => h(), m = () => h(), T = () => p();
  return t.$$set = (b) => {
    "group" in b && n(1, i = b.group), "expanded" in b && n(0, o = b.expanded), "level" in b && n(2, s = b.level), "entityType" in b && n(3, l = b.entityType);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && i && f();
  }, [
    o,
    i,
    s,
    l,
    c,
    a,
    h,
    p,
    g,
    m,
    T
  ];
}
class ca extends he {
  constructor(e) {
    super(), de(this, e, qd, Vd, se, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function Gd(t) {
  un(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function Jd(t) {
  let e;
  return {
    c() {
      e = j(t[0]);
    },
    m(n, r) {
      D(n, e, r);
    },
    p(n, r) {
      r & 1 && Se(e, n[0]);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Xd(t) {
  let e, n, r, i, o, s, l, a, c, u;
  const d = t[11].default, f = He(d, t, t[10], null), h = f || Jd(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = U(), o = I("span"), h && h.c(), $(n, "class", Pe(t[5]`ripple bg-gray-200 bg-opacity-50`) + " svelte-1b4yyah"), $(n, "style", r = t[4] ? "width: 100% !important; height: 100% !important" : ""), $(o, "class", Pe(t[5]`material-symbols-rounded z-[1] select-none" style="font-size: {iconFontSize}px`) + " svelte-1b4yyah"), $(e, "class", s = Pe(t[5]`container group ${t[1]}`) + " svelte-1b4yyah"), $(e, "style", l = "height: " + t[3] + "px; width: " + t[3] + "px; " + (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(p, g) {
      D(p, e, g), A(e, n), A(e, i), A(e, o), h && h.m(o, null), a = !0, c || (u = [
        ie(e, "mousedown", t[12]),
        ie(e, "mouseup", t[13]),
        ie(e, "mouseout", t[14]),
        ie(e, "click", t[15]),
        ie(e, "blur", Kd)
      ], c = !0);
    },
    p(p, [g]) {
      (!a || g & 16 && r !== (r = p[4] ? "width: 100% !important; height: 100% !important" : "")) && $(n, "style", r), f ? f.p && (!a || g & 1024) && Le(f, d, p, p[10], a ? je(d, p[10], g, null) : Fe(p[10]), null) : h && h.p && (!a || g & 1) && h.p(p, a ? g : -1), (!a || g & 2 && s !== (s = Pe(p[5]`container group ${p[1]}`) + " svelte-1b4yyah")) && $(e, "class", s), (!a || g & 12 && l !== (l = "height: " + p[3] + "px; width: " + p[3] + "px; " + (p[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && $(e, "style", l);
    },
    i(p) {
      a || (x(h, p), a = !0);
    },
    o(p) {
      P(h, p), a = !1;
    },
    d(p) {
      p && R(e), h && h.d(p), c = !1, it(u);
    }
  };
}
const Kd = (t) => {
};
function Yd(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: a = !1 } = e, c = Ae("tw"), u, d, f, h = Ve();
  function p(v) {
    a || (n(4, d = !0), f = v.timeStamp);
  }
  function g(v) {
    const w = v.timeStamp - f;
    w < 300 ? setTimeout(() => {
      n(4, d = !1);
    }, 300 - w) : n(4, d = !1);
  }
  function m(v) {
    a || h("click", v);
  }
  const T = (v) => p(v), b = (v) => g(v), _ = (v) => g(v), y = (v) => m(v);
  return t.$$set = (v) => {
    "icon" in v && n(0, o = v.icon), "size" in v && n(9, s = v.size), "className" in v && n(1, l = v.className), "disabled" in v && n(2, a = v.disabled), "$$scope" in v && n(10, i = v.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & 512)
      switch (s) {
        case "small":
          n(3, u = 24);
          break;
        case "medium":
          n(3, u = 40);
          break;
        case "large":
          n(3, u = 56);
          break;
      }
  }, [
    o,
    l,
    a,
    u,
    d,
    c,
    p,
    g,
    m,
    s,
    i,
    r,
    T,
    b,
    _,
    y
  ];
}
class ht extends he {
  constructor(e) {
    super(), de(this, e, Yd, Xd, se, {
      icon: 0,
      size: 9,
      className: 1,
      disabled: 2
    }, Gd);
  }
}
function Qd(t) {
  let e, n, r, i, o, s, l, a, c;
  return {
    c() {
      e = I("div"), n = I("input"), i = U(), o = I("div"), s = j(t[1]), $(n, "type", "checkbox"), $(n, "class", r = t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), $(e, "class", l = t[2]`flex items-center cursor-pointer`);
    },
    m(u, d) {
      D(u, e, d), A(e, n), t[6](n), n.checked = t[0], A(e, i), A(e, o), A(o, s), a || (c = [
        ie(n, "change", t[7]),
        ie(e, "click", t[8])
      ], a = !0);
    },
    p(u, [d]) {
      d & 4 && r !== (r = u[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && $(n, "class", r), d & 1 && (n.checked = u[0]), d & 2 && Se(s, u[1]), d & 4 && l !== (l = u[2]`flex items-center cursor-pointer`) && $(e, "class", l);
    },
    i: J,
    o: J,
    d(u) {
      u && R(e), t[6](null), a = !1, it(c);
    }
  };
}
function Zd(t, e, n) {
  let { label: r = "" } = e, { checked: i = !1 } = e, { indeterminate: o = !1 } = e, { tw: s = Ae("tw") } = e, l = Ve(), a;
  function c(h) {
    n(0, i = !i), l("change", { checked: i });
  }
  function u(h) {
    ke[h ? "unshift" : "push"](() => {
      a = h, n(3, a), n(5, o), n(0, i);
    });
  }
  function d() {
    i = this.checked, n(0, i);
  }
  const f = (h) => c();
  return t.$$set = (h) => {
    "label" in h && n(1, r = h.label), "checked" in h && n(0, i = h.checked), "indeterminate" in h && n(5, o = h.indeterminate), "tw" in h && n(2, s = h.tw);
  }, t.$$.update = () => {
    t.$$.dirty & 41 && (o && a && !i ? n(3, a.indeterminate = !0, a) : a && (n(3, a.indeterminate = !1, a), n(3, a.checked = i, a)));
  }, [
    i,
    r,
    s,
    a,
    c,
    o,
    u,
    d,
    f
  ];
}
class Rn extends he {
  constructor(e) {
    super(), de(this, e, Zd, Qd, se, {
      label: 1,
      checked: 0,
      indeterminate: 5,
      tw: 2
    });
  }
}
function ds(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function eh(t) {
  let e;
  return {
    c() {
      e = j("edit");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function hs(t) {
  let e, n, r, i;
  return n = new ca({
    props: {
      group: t[3],
      expanded: !0,
      entityType: t[0]
    }
  }), {
    c() {
      e = I("div"), z(n.$$.fragment), $(e, "class", r = t[7]`flex-[2] overflow-auto`);
    },
    m(o, s) {
      D(o, e, s), F(n, e, null), i = !0;
    },
    p(o, s) {
      const l = {};
      s & 8 && (l.group = o[3]), s & 1 && (l.entityType = o[0]), n.$set(l);
    },
    i(o) {
      i || (x(n.$$.fragment, o), i = !0);
    },
    o(o) {
      P(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && R(e), B(n);
    }
  };
}
function ps(t) {
  let e, n, r = t[4], i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = ms(ds(t, r, s));
  const o = (s) => P(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = kr();
    },
    m(s, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a].m(s, l);
      D(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & 757) {
        r = s[4];
        let a;
        for (a = 0; a < r.length; a += 1) {
          const c = ds(s, r, a);
          i[a] ? (i[a].p(c, l), x(i[a], 1)) : (i[a] = ms(c), i[a].c(), x(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (me(), a = r.length; a < i.length; a += 1)
          o(a);
        ve();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          x(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        P(i[l]);
      n = !1;
    },
    d(s) {
      Rt(i, s), s && R(e);
    }
  };
}
function gs(t) {
  let e, n;
  return e = new Rn({
    props: {
      checked: t[5][t[18]]
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & 48 && (o.checked = r[5][r[18]]), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function th(t) {
  return { c: J, m: J, p: J, d: J };
}
function nh(t) {
  let e = t[21] + "", n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      D(r, n, i);
    },
    p(r, i) {
      i & 17 && e !== (e = r[21] + "") && Se(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function rh(t) {
  return { c: J, m: J, p: J, d: J };
}
function ms(t) {
  let e, n, r, i, o, s, l, a = t[2] && gs(t), c = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: rh,
    then: nh,
    catch: th,
    value: 21
  };
  dr(r = t[6].resolveName(t[0], t[18]), c);
  function u() {
    return t[11](t[18]);
  }
  return {
    c() {
      e = I("div"), a && a.c(), n = U(), c.block.c(), i = U(), $(e, "class", t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`);
    },
    m(d, f) {
      D(d, e, f), a && a.m(e, null), A(e, n), c.block.m(e, c.anchor = null), c.mount = () => e, c.anchor = i, A(e, i), o = !0, s || (l = ie(e, "click", u), s = !0);
    },
    p(d, f) {
      t = d, t[2] ? a ? (a.p(t, f), f & 4 && x(a, 1)) : (a = gs(t), a.c(), x(a, 1), a.m(e, n)) : a && (me(), P(a, 1, 1, () => {
        a = null;
      }), ve()), c.ctx = t, f & 17 && r !== (r = t[6].resolveName(t[0], t[18])) && dr(r, c) || la(c, t, f);
    },
    i(d) {
      o || (x(a), o = !0);
    },
    o(d) {
      P(a), o = !1;
    },
    d(d) {
      d && R(e), a && a.d(), c.block.d(), c.token = null, c = null, s = !1, l();
    }
  };
}
function ih(t) {
  var b;
  let e, n, r = ((b = t[1]) == null ? void 0 : b.Name) + "", i, o, s, l, a, c, u, d, f, h, p, g;
  s = new ht({
    props: {
      size: "small",
      $$slots: { default: [eh] },
      $$scope: { ctx: t }
    }
  });
  let m = t[3] && hs(t), T = t[4] && t[4].length > 0 && ps(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = j(r), o = U(), z(s.$$.fragment), l = U(), m && m.c(), a = U(), c = I("div"), u = I("div"), d = j("Zuletzt ausgew\xE4hlt"), f = U(), T && T.c(), $(n, "class", t[7]`font-bold text-lg flex items-center cursor-pointer group`), $(u, "class", t[7]`font-bold text-gray-700`), $(c, "class", t[7]`flex-1`), $(e, "class", t[7]`flex flex-col w-full h-full overflow-hidden`);
    },
    m(_, y) {
      D(_, e, y), A(e, n), A(n, i), A(n, o), F(s, n, null), A(e, l), m && m.m(e, null), A(e, a), A(e, c), A(c, u), A(u, d), A(c, f), T && T.m(c, null), h = !0, p || (g = ie(n, "click", t[10]), p = !0);
    },
    p(_, [y]) {
      var w;
      (!h || y & 2) && r !== (r = ((w = _[1]) == null ? void 0 : w.Name) + "") && Se(i, r);
      const v = {};
      y & 4194304 && (v.$$scope = { dirty: y, ctx: _ }), s.$set(v), _[3] ? m ? (m.p(_, y), y & 8 && x(m, 1)) : (m = hs(_), m.c(), x(m, 1), m.m(e, a)) : m && (me(), P(m, 1, 1, () => {
        m = null;
      }), ve()), _[4] && _[4].length > 0 ? T ? (T.p(_, y), y & 16 && x(T, 1)) : (T = ps(_), T.c(), x(T, 1), T.m(c, null)) : T && (me(), P(T, 1, 1, () => {
        T = null;
      }), ve());
    },
    i(_) {
      h || (x(s.$$.fragment, _), x(m), x(T), h = !0);
    },
    o(_) {
      P(s.$$.fragment, _), P(m), P(T), h = !1;
    },
    d(_) {
      _ && R(e), B(s), m && m.d(), T && T.d(), p = !1, g();
    }
  };
}
function oh(t, e, n) {
  let r = Re(It), i = Re(Cn), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, a = Ae("tw"), c = null, u, d = [], f = {}, h = Ve(), p = new we(), g = tn();
  g.pipe(tt(p)).subscribe((v) => {
    n(4, u = v.lastSelectedEntities);
  });
  const m = Tt.subscribe((v) => {
    d = v.selectedEntities, n(5, f = {});
    for (let w of d)
      n(5, f[w.Id] = !0, f);
  });
  async function T(v) {
    var w;
    try {
      n(3, c = await r.getEntityById(G.Group, v)), (!((w = g.value) != null && w.selectedGroup) || g.value.selectedGroup.Id != c.Id) && g.update((E) => ({ ...E, selectedGroup: c }));
    } catch (E) {
      console.log(E);
    }
  }
  async function b(v) {
    let w = await r.getEntityById(o, v);
    l ? f[v] ? d = d.filter((E) => E.Id !== v) : d.push(w) : d = [w], Tt.update((E) => ({ ...E, selectedEntities: d }));
  }
  kd(() => {
    try {
      s && s.Root && c === null && T(s.Root);
    } catch {
    }
  }), vt(() => {
    console.log("onDestroy"), m.unsubscribe();
  });
  const _ = () => h("changeTenant"), y = (v) => b(v);
  return t.$$set = (v) => {
    "entityType" in v && n(0, o = v.entityType), "selectedTenant" in v && n(1, s = v.selectedTenant), "selectMultiple" in v && n(2, l = v.selectMultiple);
  }, [
    o,
    s,
    l,
    c,
    u,
    f,
    i,
    a,
    h,
    b,
    _,
    y
  ];
}
class sh extends he {
  constructor(e) {
    super(), de(this, e, oh, ih, se, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const lh = (t) => ({}), vs = (t) => ({});
function ah(t) {
  let e, n, r, i;
  const o = t[2].default, s = He(o, t, t[1], null), l = t[2].pagination, a = He(l, t, t[1], vs);
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), r = U(), a && a.c(), $(n, "class", "w-full overflow-auto flex-1"), $(e, "class", "flex flex-col h-full");
    },
    m(c, u) {
      D(c, e, u), A(e, n), s && s.m(n, null), A(e, r), a && a.m(e, null), i = !0;
    },
    p(c, [u]) {
      s && s.p && (!i || u & 2) && Le(s, o, c, c[1], i ? je(o, c[1], u, null) : Fe(c[1]), null), a && a.p && (!i || u & 2) && Le(a, l, c, c[1], i ? je(l, c[1], u, lh) : Fe(c[1]), vs);
    },
    i(c) {
      i || (x(s, c), x(a, c), i = !0);
    },
    o(c) {
      P(s, c), P(a, c), i = !1;
    },
    d(c) {
      c && R(e), s && s.d(c), a && a.d(c);
    }
  };
}
function ch(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = Ve(), l = hr(o);
  ut("audako:table:sort", l);
  let a = l.subscribe((c) => {
    s("sort", c);
  });
  return vt(() => {
    a();
  }), t.$$set = (c) => {
    "startSort" in c && n(0, o = c.startSort), "$$scope" in c && n(1, i = c.$$scope);
  }, [o, i, r];
}
class uh extends he {
  constructor(e) {
    super(), de(this, e, ch, ah, se, { startSort: 0 });
  }
}
function fh(t) {
  un(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function dh(t) {
  let e, n;
  const r = t[2].default, i = He(r, t, t[1], null);
  return {
    c() {
      e = I("div"), i && i.c(), $(e, "class", "audako-tableheader-flexrow");
    },
    m(o, s) {
      D(o, e, s), i && i.m(e, null), t[3](e), n = !0;
    },
    p(o, [s]) {
      i && i.p && (!n || s & 2) && Le(i, r, o, o[1], n ? je(r, o[1], s, null) : Fe(o[1]), null);
    },
    i(o) {
      n || (x(i, o), n = !0);
    },
    o(o) {
      P(i, o), n = !1;
    },
    d(o) {
      o && R(e), i && i.d(o), t[3](null);
    }
  };
}
function hh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    ke[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class ph extends he {
  constructor(e) {
    super(), de(this, e, hh, dh, se, {}, fh);
  }
}
function gh(t) {
  un(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function _s(t) {
  let e, n, r;
  return {
    c() {
      e = I("span"), n = j("north"), $(e, "class", "material-symbols-rounded text-xs transition-all"), $(e, "style", r = (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(i, o) {
      D(i, e, o), A(e, n);
    },
    p(i, o) {
      o & 4 && r !== (r = (i[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && $(e, "style", r);
    },
    d(i) {
      i && R(e);
    }
  };
}
function mh(t) {
  let e, n, r, i, o, s, l;
  const a = t[6].default, c = He(a, t, t[5], null);
  let u = t[0] && _s(t);
  return {
    c() {
      e = I("div"), n = I("div"), c && c.c(), r = U(), u && u.c(), $(e, "class", i = "header-cell " + (t[0] ? "cursor-pointer" : "") + " " + t[1] + " svelte-11sxgak");
    },
    m(d, f) {
      D(d, e, f), A(e, n), c && c.m(n, null), A(e, r), u && u.m(e, null), o = !0, s || (l = ie(e, "click", t[7]), s = !0);
    },
    p(d, [f]) {
      c && c.p && (!o || f & 32) && Le(c, a, d, d[5], o ? je(a, d[5], f, null) : Fe(d[5]), null), d[0] ? u ? u.p(d, f) : (u = _s(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || f & 3 && i !== (i = "header-cell " + (d[0] ? "cursor-pointer" : "") + " " + d[1] + " svelte-11sxgak")) && $(e, "class", i);
    },
    i(d) {
      o || (x(c, d), o = !0);
    },
    o(d) {
      P(c, d), o = !1;
    },
    d(d) {
      d && R(e), c && c.d(d), u && u.d(), s = !1, l();
    }
  };
}
function vh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, a = "asc", c = Ae("audako:table:sort");
  console.log(c);
  let u = c.subscribe((h) => {
    s && (h == null ? void 0 : h.active) === s ? n(2, a = h.direction) : n(2, a = null);
  });
  function d() {
    a === "asc" ? n(2, a = "desc") : a === "desc" ? n(2, a = null) : n(2, a = "asc"), c.set(a ? { active: s, direction: a } : null);
  }
  vt(() => {
    u();
  });
  const f = () => d();
  return t.$$set = (h) => {
    "sortable" in h && n(0, o = h.sortable), "id" in h && n(4, s = h.id), "container$class" in h && n(1, l = h.container$class), "$$scope" in h && n(5, i = h.$$scope);
  }, [
    o,
    l,
    a,
    d,
    s,
    i,
    r,
    f
  ];
}
class Ei extends he {
  constructor(e) {
    super(), de(this, e, vh, mh, se, { sortable: 0, id: 4, container$class: 1 }, gh);
  }
}
function _h(t) {
  un(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function bh(t) {
  let e, n, r, i, o;
  const s = t[3].default, l = He(s, t, t[2], null);
  return {
    c() {
      e = I("div"), l && l.c(), $(e, "class", n = "audako-tablebody-flexrow " + t[0]);
    },
    m(a, c) {
      D(a, e, c), l && l.m(e, null), r = !0, i || (o = ie(e, "click", t[1]), i = !0);
    },
    p(a, [c]) {
      l && l.p && (!r || c & 4) && Le(l, s, a, a[2], r ? je(s, a[2], c, null) : Fe(a[2]), null), (!r || c & 1 && n !== (n = "audako-tablebody-flexrow " + a[0])) && $(e, "class", n);
    },
    i(a) {
      r || (x(l, a), r = !0);
    },
    o(a) {
      P(l, a), r = !1;
    },
    d(a) {
      a && R(e), l && l.d(a), i = !1, o();
    }
  };
}
function yh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = Ve();
  function l(a) {
    s("click", a);
  }
  return t.$$set = (a) => {
    "flexrow$class" in a && n(0, o = a.flexrow$class), "$$scope" in a && n(2, i = a.$$scope);
  }, [o, l, i, r];
}
class wh extends he {
  constructor(e) {
    super(), de(this, e, yh, bh, se, { flexrow$class: 0 }, _h);
  }
}
function Sh(t) {
  let e, n, r;
  const i = t[3].default, o = He(i, t, t[2], null);
  return {
    c() {
      e = I("div"), o && o.c(), $(e, "class", n = t[1]`border-t overflow-hidden ${t[0]}`);
    },
    m(s, l) {
      D(s, e, l), o && o.m(e, null), r = !0;
    },
    p(s, [l]) {
      o && o.p && (!r || l & 4) && Le(o, i, s, s[2], r ? je(i, s[2], l, null) : Fe(s[2]), null), (!r || l & 1 && n !== (n = s[1]`border-t overflow-hidden ${s[0]}`)) && $(e, "class", n);
    },
    i(s) {
      r || (x(o, s), r = !0);
    },
    o(s) {
      P(o, s), r = !1;
    },
    d(s) {
      s && R(e), o && o.d(s);
    }
  };
}
function Ch(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = Ae("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class ki extends he {
  constructor(e) {
    super(), de(this, e, Ch, Sh, se, { container$class: 0 });
  }
}
var Fn, Eh = new Uint8Array(16);
function kh() {
  if (!Fn && (Fn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Fn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fn(Eh);
}
const $h = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Th(t) {
  return typeof t == "string" && $h.test(t);
}
var pe = [];
for (var Yr = 0; Yr < 256; ++Yr)
  pe.push((Yr + 256).toString(16).substr(1));
function xh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (pe[t[e + 0]] + pe[t[e + 1]] + pe[t[e + 2]] + pe[t[e + 3]] + "-" + pe[t[e + 4]] + pe[t[e + 5]] + "-" + pe[t[e + 6]] + pe[t[e + 7]] + "-" + pe[t[e + 8]] + pe[t[e + 9]] + "-" + pe[t[e + 10]] + pe[t[e + 11]] + pe[t[e + 12]] + pe[t[e + 13]] + pe[t[e + 14]] + pe[t[e + 15]]).toLowerCase();
  if (!Th(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function Ah(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || kh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return xh(r);
}
const Ph = {
  backdrop: !0,
  positioning: "center",
  closeOnClickOutside: !0,
  anchorElement: null,
  customPosition: {
    x: 0,
    y: 0
  }
};
class pr {
  constructor(e) {
    st(this, "_popupContainer");
    st(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    var u, d, f;
    r = { ...Ph, ...r }, console.log("openPopup", r);
    const i = Ah(), o = new we(), s = (u = this._popupContainer[e]) != null ? u : this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
    r.inTransitionClassList && (l.style.transition = `all ${(d = r.inTransitionDuration) != null ? d : 100}ms`, l.classList.add(r.inTransitionClassList)), s.appendChild(l);
    const a = () => {
      console.log("close"), this._removePopupWrapper(l, r), o.next(null), o.complete();
    };
    return r.closeOnClickOutside && s.addEventListener("click", (h) => {
      h.target === s && a();
    }), this._positionPopup(s, l, r), n.style.visibility = "visible", r.inTransitionClassList && (n.classList.add(r.inTransitionClassList), n.style.transition = `all ${(f = r.inTransitionDuration) != null ? f : 100}ms`), {
      popupId: i,
      afterClosed: Yt(o).then(() => console.log("afterClosed")),
      close: a
    };
  }
  _removePopupWrapper(e, n) {
    var o, s;
    const r = e.parentElement, i = () => {
      e.remove(), r.children.length === 0 && this._removeContainer(r.id);
    };
    n.outTransitionClassList ? (e.style.transition = `all ${(o = n.outTransitionDuration) != null ? o : 100}ms`, e.classList.remove(n.inTransitionClassList), e.classList.add(n.outTransitionClassList), setTimeout(() => {
      i();
    }, (s = n.outTransitionDuration) != null ? s : 100)) : i();
  }
  _removeContainer(e) {
    document.getElementById(e).remove(), this._popupContainer[e] = void 0;
  }
  _createPopupContainer(e, n) {
    const r = Object.keys(this._popupContainer).length, i = document.createElement("div");
    return i.id = e, i.classList.add(`${e}`), i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.overflowY = "hidden", i.style.overflowX = "hidden", i.style.zIndex = (1e3 + r).toString(), n.backdrop && (i.style.backgroundColor = "rgba(0,0,0,0.5)"), this.rootElement.appendChild(i), this._popupContainer[e] = i, i;
  }
  _createPopupWrapper(e, n) {
    const r = document.createElement("div");
    return r.classList.add("popup-wrapper"), r.style.position = "absolute", r.appendChild(e), r;
  }
  _positionPopup(e, n, r) {
    var a, c, u, d, f, h, p, g, m, T, b;
    const i = n.style, o = e.getBoundingClientRect(), s = n.getBoundingClientRect();
    console.log("popupRect", s, n.style);
    const l = (a = r.anchorElement) == null ? void 0 : a.getBoundingClientRect();
    i.position = "absolute", r.positioning === "center" ? (i.top = "50%", i.left = "50%", i.transform = "translate(-50%, -50%)") : r.positioning === "anchor" ? (n.style.top = `${this._getTopPosition(l.top, s.height, o.height, l.height, (c = r.anchorVertical) != null ? c : "bottom") + ((d = (u = r.customPosition) == null ? void 0 : u.y) != null ? d : 0)}px`, n.style.left = `${this._getLeftPosition(l.left - 4, s.width, o.width, (f = r.anchorHorizontal) != null ? f : "right") + ((p = (h = r.customPosition) == null ? void 0 : h.x) != null ? p : 0)}px`) : r.positioning === "custom" && (n.style.top = `${this._getTopPosition(r.customPosition.y, s.height, o.height) + ((m = (g = r.customPosition) == null ? void 0 : g.y) != null ? m : 0)}px`, n.style.left = `${this._getLeftPosition(r.customPosition.x, s.width, o.width) + ((b = (T = r.customPosition) == null ? void 0 : T.x) != null ? b : 0)}px`);
  }
  _getTopPosition(e, n, r, i = 0, o = "bottom") {
    return o == "top" ? e + n + 40 < r ? e + i / 3 : e - n + i / 3 : e - n > 40 ? e - n + i / 3 : e + i / 3;
  }
  _getLeftPosition(e, n, r, i = "right") {
    return console.log(arguments), i == "left" ? e : e - n > 40 ? e - n : e + n;
  }
}
var Ih = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Rh(t) {
  return Ih.get(t);
}
function Dh(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function Oh(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var te = (t, e) => !!~t.indexOf(e), V = (t, e = "-") => t.join(e), $i = (t, e) => V(t.filter(Boolean), e), W = (t, e = 1) => t.slice(e), Nh = (t) => t, ua = () => {
}, nt = (t) => t[0].toUpperCase() + W(t), co = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), At = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, fa = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, da = (t, e) => !te("@:&", t[0]) && (te("rg", (typeof e)[5]) || Array.isArray(e)), uo = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = At(e[i], n);
  return da(i, o) ? r[co(i)] = o : r[i] = i[0] == "@" && te("figa", i[1]) ? (r[i] || []).concat(o) : uo(r[i] || {}, o, n), r;
}, t) : t, ha = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), $r = (t) => (Array.isArray(t) || (t = [t]), "@media " + V(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || V(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), Qr = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Uh = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, rt, Vt, ft = (t = "") => (rt.push(t), ""), fo = (t) => {
  rt.length = Math.max(rt.lastIndexOf("") + ~~t, 0);
}, Mh = (t) => t && !te("!:", t[0]), Hh = (t) => t[0] == ":", pa = (t, e) => {
  Vt.push({
    v: rt.filter(Hh),
    d: t,
    n: e,
    i: te(rt, "!"),
    $: ""
  });
}, bs = (t) => {
  const e = t[0] == "-";
  e && (t = W(t));
  const n = V(rt.filter(Mh));
  return pa(t == "&" ? n : (n && n + "-") + t, e), "";
}, yn = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && ft(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && ft(n), ft();
        break;
      case "!":
        ft(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && bs(n), fo(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? ft(":" + n) : n.slice(-1) == "-" ? ft(n.slice(0, -1)) : bs(n));
}, ga = (t) => {
  ft(), gr(t), fo();
}, jh = (t, e) => {
  if (e) {
    ft();
    const n = te("tbu", (typeof e)[1]);
    yn(t, n), n && ga(e), fo();
  }
}, gr = (t) => {
  switch (typeof t) {
    case "string":
      yn(t);
      break;
    case "function":
      pa(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(ga) : t && Object.keys(t).forEach((e) => {
        jh(e, t[e]);
      });
  }
}, ys = /* @__PURE__ */ new WeakMap(), Lh = (t) => {
  let e = ys.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || te(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (a) => {
          o == n && (r = ""), r += i, te("rg", (typeof a)[5]) ? r += a : a && (yn(r), r = "", gr(a)), o == t.length - 1 && yn(r);
        };
      const s = Vt = [];
      yn(i);
      const l = [...rt];
      return Vt = [], (a) => {
        Vt.push(...s), rt = [...l], a && gr(a);
      };
    }), ys.set(t, e);
  }
  return e;
}, Ti = (t) => (rt = [], Vt = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? Lh(t[0]).forEach((e, n) => e(t[n + 1])) : gr(t), Vt), xi, Fh = (t, e) => (typeof e == "function" && (xi = !1), e), Bh = (t) => {
  xi = !0;
  const e = JSON.stringify(t, Fh);
  return xi && e;
}, ws = /* @__PURE__ */ new WeakMap(), zh = (t, e) => {
  const n = Bh(e);
  let r;
  if (n) {
    var i = ws.get(t);
    i || ws.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, At(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), fa(i, 1e4))), r;
}, Wh = (t, { css: e }) => e(Ti(t)), Vh = (...t) => zh(Wh, t), ma = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[$i([r, l, i])] = e, s), {});
  }
}, qh = /* @__PURE__ */ ma((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), tr = (t) => {
  const e = ({ x: "lr", y: "tb" }[t] || t || "").split("").sort();
  for (let n = e.length; n--; )
    if (!(e[n] = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left"
    }[e[n]]))
      return;
  if (e.length)
    return e;
}, Ai = /* @__PURE__ */ ma(tr), Gh = (t, e) => t + (e[1] == ":" ? W(e, 2) + ":" : W(e)) + ":", Ss = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(Gh, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, k, Et, K, Bn = (t) => t == "cols" ? "columns" : "rows", Dn = (t) => (e, n, r) => ({
  [t]: r + ((k = V(e)) && "-" + k)
}), oe = (t, e) => (n, r, i) => (k = V(n, e)) && {
  [t || i]: k
}, be = (t) => (e, { theme: n }, r) => (k = n(t || r, e)) && {
  [t || r]: k
}, zn = (t, e) => (n, { theme: r }, i) => (k = r(t || i, n, V(n, e))) && {
  [t || i]: k
}, qe = (t, e) => (n, r) => t(n, r, e), Ye = Dn("display"), hn = Dn("position"), Lt = Dn("textTransform"), Ft = Dn("textDecoration"), Wn = Dn("fontStyle"), lt = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), Vn = (t, { theme: e }, n) => (k = e("inset", t)) && { [n]: k }, _n = (t, e, n, r = n) => (k = e(r + "Opacity", W(t))) && {
  [`--tw-${n}-opacity`]: k
}, Zr = (t, e) => Math.round(parseInt(t, 16) * e), mr = (t, e, n) => t && t[0] == "#" && (k = (t.length - 1) / 3) && (K = [17, 1, 0.062272][k - 1]) ? `rgba(${Zr(t.substr(1, k), K)},${Zr(t.substr(1 + k, k), K)},${Zr(t.substr(1 + 2 * k, k), K)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, nr = (t, e, n) => n && typeof n == "string" ? (k = mr(n, e + "-opacity")) && k !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, k]
} : { [t]: n } : void 0, Cs = (t) => (K = mr(t, "", "0")) == k ? "transparent" : K, Es = (t, { theme: e }, n, r, i, o) => (k = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (K = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [K]: "1"
} : {
  [K]: "0",
  [$i([i, k[0], o])]: (Et = e(r, W(t))) && `calc(${Et} * var(${K}))`,
  [$i([i, k[1], o])]: Et && [Et, `calc(${Et} * calc(1 - var(${K})))`]
} : void 0, va = (t, e) => e[0] && {
  [t]: (te("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, ei = (t) => (e) => te(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : va(t, e), ks = (t) => (e, { theme: n }) => {
  if (k = n("grid" + nt(t), e, ""))
    return { ["grid-" + t]: k };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return (k = n("grid" + nt(t) + nt(e[0]), W(e), V(W(e)))) && {
        [`grid-${t}-${e[0]}`]: k
      };
  }
}, $s = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return oe("borderStyle")(t);
    case "collapse":
    case "separate":
      return oe("borderCollapse")(t);
    case "opacity":
      return _n(t, e, n);
  }
  return (k = e(n + "Width", t, "")) ? { borderWidth: k } : nr("borderColor", n, e(n + "Color", t));
}, Pi = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", ti = (t, e, n) => t[0] && (k = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && k,
  [`--tw-${n}-y`]: t[0] !== "x" && k,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${k})`, Pi()]
}, _a = (t) => (e, n, r) => r[1] ? Ai(n.theme(t, e), r[1], t) : be(t)(e, n, r), bt = _a("padding"), yt = _a("margin"), Ts = (t, { theme: e }, n) => (k = { w: "width", h: "height" }[t[0]]) && {
  [k = `${n}${nt(k)}`]: e(k, W(t))
}, Me = (t, { theme: e }, n) => {
  const r = n.split("-"), i = r[0] == "backdrop" ? r[0] + "-" : "";
  if (i || t.unshift(...r), t[0] == "filter") {
    const o = [
      "blur",
      "brightness",
      "contrast",
      "grayscale",
      "hue-rotate",
      "invert",
      i && "opacity",
      "saturate",
      "sepia",
      !i && "drop-shadow"
    ].filter(Boolean);
    return t[1] == "none" ? { [i + "filter"]: "none" } : o.reduce((s, l) => (s["--tw-" + i + l] = "var(--tw-empty,/*!*/ /*!*/)", s), {
      [i + "filter"]: o.map((s) => `var(--tw-${i}${s})`).join(" ")
    });
  }
  return K = t.shift(), te(["hue", "drop"], K) && (K += nt(t.shift())), (k = e(i ? "backdrop" + nt(K) : K, t)) && {
    ["--tw-" + i + K]: (Array.isArray(k) ? k : [k]).map((o) => `${co(K)}(${o})`).join(" ")
  };
}, Jh = {
  group: (t, { tag: e }, n) => e(V([n, ...t])),
  hidden: qe(Ye, "none"),
  inline: Ye,
  block: Ye,
  contents: Ye,
  flow: Ye,
  table: (t, e, n) => te(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : Ye(t, e, n),
  flex(t, e, n) {
    switch (t[0]) {
      case "row":
      case "col":
        return {
          flexDirection: V(t[0] == "col" ? ["column", ...W(t)] : t)
        };
      case "nowrap":
      case "wrap":
        return { flexWrap: V(t) };
      case "grow":
      case "shrink":
        return k = e.theme("flex" + nt(t[0]), W(t), t[1] || 1), k != null && {
          ["flex-" + t[0]]: "" + k
        };
    }
    return (k = e.theme("flex", t, "")) ? { flex: k } : Ye(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return (k = e.theme("gridTemplate" + nt(Bn(t[0])), W(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : V(W(t)))) && {
          ["gridTemplate-" + Bn(t[0])]: k
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: V(t[1] == "col" ? ["column", ...W(t, 2)] : W(t), " ")
        };
    }
    return Ye(t, e, n);
  },
  auto: (t, { theme: e }) => te(["cols", "rows"], t[0]) && (k = e("gridAuto" + nt(Bn(t[0])), W(t), V(W(t)))) && {
    ["gridAuto-" + Bn(t[0])]: k
  },
  static: hn,
  fixed: hn,
  absolute: hn,
  relative: hn,
  sticky: hn,
  visible: { visibility: "visible" },
  invisible: { visibility: "hidden" },
  antialiased: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  },
  "subpixel-antialiased": {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
  },
  truncate: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  "sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
  },
  "not-sr-only": {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
  },
  resize: (t) => ({
    resize: { x: "horizontal", y: "vertical" }[t[0]] || t[0] || "both"
  }),
  box: (t) => t[0] && { boxSizing: t[0] + "-box" },
  appearance: oe(),
  cursor: zn(),
  float: oe(),
  clear: oe(),
  decoration: oe("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: oe(),
  "mix-blend": oe("mixBlendMode"),
  top: Vn,
  right: Vn,
  bottom: Vn,
  left: Vn,
  inset: (t, { theme: e }) => (k = tr(t[0])) ? Ai(e("inset", W(t)), t[0]) : (k = e("inset", t)) && {
    top: k,
    right: k,
    bottom: k,
    left: k
  },
  underline: Ft,
  "line-through": Ft,
  "no-underline": qe(Ft, "none"),
  "text-underline": qe(Ft, "underline"),
  "text-no-underline": qe(Ft, "none"),
  "text-line-through": qe(Ft, "line-through"),
  uppercase: Lt,
  lowercase: Lt,
  capitalize: Lt,
  "normal-case": qe(Lt, "none"),
  "text-normal-case": qe(Lt, "none"),
  italic: Wn,
  "not-italic": qe(Wn, "normal"),
  "font-italic": qe(Wn, "italic"),
  "font-not-italic": qe(Wn, "normal"),
  font: (t, e, n) => (k = e.theme("fontFamily", t, "")) ? { fontFamily: k } : be("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: te(["start", "end"], t[0]) ? "flex-" + t[0] : V(t)
  },
  "justify-self": oe(),
  "justify-items": oe(),
  justify: ei("justifyContent"),
  content: ei("alignContent"),
  self: ei("alignSelf"),
  place: (t) => t[0] && va("place-" + t[0], W(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: ks("column"),
  row: ks("row"),
  duration: be("transitionDuration"),
  delay: be("transitionDelay"),
  tracking: be("letterSpacing"),
  leading: be("lineHeight"),
  z: be("zIndex"),
  opacity: be(),
  ease: be("transitionTimingFunction"),
  p: bt,
  py: bt,
  px: bt,
  pt: bt,
  pr: bt,
  pb: bt,
  pl: bt,
  m: yt,
  my: yt,
  mx: yt,
  mt: yt,
  mr: yt,
  mb: yt,
  ml: yt,
  w: be("width"),
  h: be("height"),
  min: Ts,
  max: Ts,
  fill: be(),
  order: be(),
  origin: zn("transformOrigin", " "),
  select: oe("userSelect"),
  "pointer-events": oe(),
  align: oe("verticalAlign"),
  whitespace: oe("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: lt("ordinal"),
  "slashed-zero": lt("slashed-zero"),
  "lining-nums": lt("numeric-figure"),
  "oldstyle-nums": lt("numeric-figure"),
  "proportional-nums": lt("numeric-spacing"),
  "tabular-nums": lt("numeric-spacing"),
  "diagonal-fractions": lt("numeric-fraction"),
  "stacked-fractions": lt("numeric-fraction"),
  overflow: (t, e, n) => te(["ellipsis", "clip"], t[0]) ? oe("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : oe()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: Pi(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => (k = e("rotate", t)) && {
    "--tw-rotate": k,
    transform: [`rotate(${k})`, Pi()]
  },
  scale: ti,
  translate: ti,
  skew: ti,
  gap: (t, e, n) => (k = { x: "column", y: "row" }[t[0]]) ? { [k + "Gap"]: e.theme("gap", W(t)) } : be("gap")(t, e, n),
  stroke: (t, e, n) => (k = e.theme("stroke", t, "")) ? { stroke: k } : be("strokeWidth")(t, e, n),
  outline: (t, { theme: e }) => (k = e("outline", t)) && {
    outline: k[0],
    outlineOffset: k[1]
  },
  "break-normal": {
    wordBreak: "normal",
    overflowWrap: "normal"
  },
  "break-words": { overflowWrap: "break-word" },
  "break-all": { wordBreak: "break-all" },
  text(t, { theme: e }, n) {
    switch (t[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return { textAlign: t[0] };
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return Lt([], k, t[0]);
      case "opacity":
        return _n(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : {
      fontSize: r[0],
      ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1]
    } : nr("color", "text", e("textColor", t));
  },
  bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return oe("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return oe("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && oe("backgroundRepeat")(t);
      case "repeat":
        return te("xy", t[1]) ? oe("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return _n(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return oe("background-blend-mode")(W(t));
      case "gradient":
        if (t[1] == "to" && (k = tr(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${V(k, " ")},var(--tw-gradient-stops))`
          };
    }
    return (k = e("backgroundPosition", t, "")) ? { backgroundPosition: k } : (k = e("backgroundSize", t, "")) ? { backgroundSize: k } : (k = e("backgroundImage", t, "")) ? { backgroundImage: k } : nr("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => (k = e("gradientColorStops", t)) && {
    "--tw-gradient-from": k,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Cs(k)})`
  },
  via: (t, { theme: e }) => (k = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${k},var(--tw-gradient-to,${Cs(k)})`
  },
  to: (t, { theme: e }) => (k = e("gradientColorStops", t)) && {
    "--tw-gradient-to": k
  },
  border: (t, e, n) => tr(t[0]) ? Ai(e.theme("borderWidth", W(t)), t[0], "border", "width") : $s(t, e, n),
  divide: (t, e, n) => (k = Es(t, e, n, "divideWidth", "border", "width") || $s(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": k
  },
  space: (t, e, n) => (k = Es(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": k
  },
  placeholder: (t, { theme: e }, n) => (k = t[0] == "opacity" ? _n(t, e, n) : nr("color", "placeholder", e("placeholderColor", t))) && {
    "&::placeholder": k
  },
  shadow: (t, { theme: e }) => (k = e("boxShadow", t)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": k == "none" ? "0 0 transparent" : k,
    boxShadow: [
      k,
      "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"
    ]
  },
  animate: (t, { theme: e, tag: n }) => {
    if (K = e("animation", t)) {
      const r = K.split(" ");
      return (k = e("keyframes", r[0], Et = {})) !== Et ? (K = n(r[0])) && {
        animation: K + " " + V(W(r), " "),
        ["@keyframes " + K]: k
      } : { animation: K };
    }
  },
  ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return _n(t, e, n);
      case "offset":
        return (k = e("ringOffsetWidth", W(t), "")) ? {
          "--tw-ring-offset-width": k
        } : {
          "--tw-ring-offset-color": e("ringOffsetColor", W(t))
        };
    }
    return (k = e("ringWidth", t, "")) ? {
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${k} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": e("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": e("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": mr(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": mr(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => te(["contain", "cover", "fill", "none", "scale-down"], V(t)) ? { objectFit: V(t) } : zn("objectPosition", " ")(t, e, n),
  list: (t, e, n) => V(t) == "item" ? Ye(t, e, n) : te(["inside", "outside"], V(t)) ? { listStylePosition: t[0] } : zn("listStyleType")(t, e, n),
  rounded: (t, e, n) => qh(e.theme("borderRadius", W(t), ""), t[0], "border", "radius") || be("borderRadius")(t, e, n),
  "transition-none": { transitionProperty: "none" },
  transition: (t, { theme: e }) => ({
    transitionProperty: e("transitionProperty", t),
    transitionTimingFunction: e("transitionTimingFunction", ""),
    transitionDuration: e("transitionDuration", "")
  }),
  container: (t, { theme: e }) => {
    const { screens: n = e("screens"), center: r, padding: i } = e("container"), o = (s) => (k = i && (typeof i == "string" ? i : i[s] || i.DEFAULT)) ? {
      paddingRight: k,
      paddingLeft: k
    } : {};
    return Object.keys(n).reduce((s, l) => ((K = n[l]) && typeof K == "string" && (s[$r(K)] = {
      "&": {
        "max-width": K,
        ...o(l)
      }
    }), s), {
      width: "100%",
      ...r ? { marginRight: "auto", marginLeft: "auto" } : {},
      ...o("xs")
    });
  },
  filter: Me,
  blur: Me,
  brightness: Me,
  contrast: Me,
  grayscale: Me,
  "hue-rotate": Me,
  invert: Me,
  saturate: Me,
  sepia: Me,
  "drop-shadow": Me,
  backdrop: Me
}, Xh = (t) => ({
  ":root": { tabSize: 4 },
  "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" },
  button: { backgroundColor: "transparent", backgroundImage: "none" },
  'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" },
  "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] },
  "fieldset,ol,ul,legend": { padding: "0" },
  "ol,ul": { listStyle: "none" },
  html: {
    lineHeight: "1.5",
    WebkitTextSizeAdjust: "100%",
    fontFamily: t("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
  },
  body: { fontFamily: "inherit", lineHeight: "inherit" },
  "*,::before,::after": {
    boxSizing: "border-box",
    border: `0 solid ${t("borderColor.DEFAULT", "currentColor")}`
  },
  hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
  img: { borderStyle: "solid" },
  textarea: { resize: "vertical" },
  "input::placeholder,textarea::placeholder": {
    opacity: "1",
    color: t("placeholderColor.DEFAULT", t("colors.gray.400", "#a1a1aa"))
  },
  'button,[role="button"]': { cursor: "pointer" },
  table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" },
  "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
  a: { color: "inherit", textDecoration: "inherit" },
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    margin: "0",
    padding: "0",
    lineHeight: "inherit",
    color: "inherit"
  },
  "button,select": { textTransform: "none" },
  "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
  ":-moz-focusring": { outline: "1px dotted ButtonText" },
  ":-moz-ui-invalid": { boxShadow: "none" },
  progress: { verticalAlign: "baseline" },
  "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" },
  '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
  "::-webkit-search-decoration": { WebkitAppearance: "none" },
  "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" },
  summary: { display: "list-item" },
  "abbr[title]": { textDecoration: "underline dotted" },
  "b,strong": { fontWeight: "bolder" },
  "pre,code,kbd,samp": {
    fontFamily: t("fontFamily", "mono", "ui-monospace,monospace"),
    fontSize: "1em"
  },
  "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" },
  sub: { bottom: "-0.25em" },
  sup: { top: "-0.5em" },
  "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" },
  "img,video": { maxWidth: "100%", height: "auto" }
}), Kh = {
  dark: "@media (prefers-color-scheme:dark)",
  sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
  "motion-reduce": "@media (prefers-reduced-motion:reduce)",
  "motion-safe": "@media (prefers-reduced-motion:no-preference)",
  first: "&:first-child",
  last: "&:last-child",
  even: "&:nth-child(2n)",
  odd: "&:nth-child(odd)",
  children: "&>*",
  siblings: "&~*",
  sibling: "&+*",
  override: "&&"
}, xs = "__twind", Yh = (t) => {
  let e = self[xs];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = xs, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, ba = ({
  nonce: t,
  target: e = Yh(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, Qh = () => ({
  target: null,
  insert: ua
}), ho = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + V(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), As = /* @__PURE__ */ ho((t) => console.warn(t)), Zh = /* @__PURE__ */ ho((t) => {
  throw new Error(t);
}), ep = /* @__PURE__ */ ho(ua), Qe = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, tp = (t, e, n) => {
  let r = "";
  const i = Rh(t);
  i && (r += `${Qe(i, e, n)};`);
  let o = Dh(t);
  return o & 1 && (r += `-webkit-${Qe(t, e, n)};`), o & 2 && (r += `-moz-${Qe(t, e, n)};`), o & 4 && (r += `-ms-${Qe(t, e, n)};`), o = Oh(t, e), o & 1 && (r += `${Qe(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${Qe(t, `-moz-${e}`, n)};`), o & 4 && (r += `${Qe(t, `-ms-${e}`, n)};`), r += Qe(t, e, n), r;
}, pn = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, at = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, xe = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, Z = (t) => (e) => e(t), np = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    yellow: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    green: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    }
  },
  spacing: {
    px: "1px",
    0: "0px",
    .../* @__PURE__ */ xe(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ xe(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ xe(64, "rem", 4, 16, 4),
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  durations: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms"
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite"
  },
  backdropBlur: /* @__PURE__ */ Z("blur"),
  backdropBrightness: /* @__PURE__ */ Z("brightness"),
  backdropContrast: /* @__PURE__ */ Z("contrast"),
  backdropGrayscale: /* @__PURE__ */ Z("grayscale"),
  backdropHueRotate: /* @__PURE__ */ Z("hueRotate"),
  backdropInvert: /* @__PURE__ */ Z("invert"),
  backdropOpacity: /* @__PURE__ */ Z("opacity"),
  backdropSaturate: /* @__PURE__ */ Z("saturate"),
  backdropSepia: /* @__PURE__ */ Z("sepia"),
  backgroundColor: /* @__PURE__ */ Z("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ Z("opacity"),
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  blur: {
    0: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px"
  },
  brightness: {
    .../* @__PURE__ */ xe(200, "", 100, 0, 50),
    .../* @__PURE__ */ xe(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: (t) => ({
    ...t("colors"),
    DEFAULT: t("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ Z("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "1/2": "50%",
    full: "9999px"
  },
  borderWidth: {
    DEFAULT: "1px",
    .../* @__PURE__ */ at(8, "px")
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
    md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none"
  },
  contrast: {
    .../* @__PURE__ */ xe(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  divideColor: /* @__PURE__ */ Z("borderColor"),
  divideOpacity: /* @__PURE__ */ Z("borderOpacity"),
  divideWidth: /* @__PURE__ */ Z("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgba(0,0,0,0.05)",
    DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
    md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
    lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
    xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
    "2xl": "0 25px 25px rgba(0,0,0,0.15)",
    none: "0 0 #0000"
  },
  fill: { current: "currentColor" },
  grayscale: {
    0: "0",
    DEFAULT: "100%"
  },
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg"
  },
  invert: {
    0: "0",
    DEFAULT: "100%"
  },
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
  },
  fontSize: {
    xs: ["0.75rem", "1rem"],
    sm: ["0.875rem", "1.25rem"],
    base: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "1.75rem"],
    "2xl": ["1.5rem", "2rem"],
    "3xl": ["1.875rem", "2.25rem"],
    "4xl": ["2.25rem", "2.5rem"],
    "5xl": ["3rem", "1"],
    "6xl": ["3.75rem", "1"],
    "7xl": ["4.5rem", "1"],
    "8xl": ["6rem", "1"],
    "9xl": ["8rem", "1"]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridAutoColumns: {
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridAutoRows: {
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridColumn: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gridRow: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gap: /* @__PURE__ */ Z("spacing"),
  gradientColorStops: /* @__PURE__ */ Z("colors"),
  height: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...pn(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...pn(2, 4),
    full: "100%"
  }),
  keyframes: {
    spin: {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ping: {
      "0%": {
        transform: "scale(1)",
        opacity: "1"
      },
      "75%,100%": {
        transform: "scale(2)",
        opacity: "0"
      }
    },
    pulse: {
      "0%,100%": {
        opacity: "1"
      },
      "50%": {
        opacity: ".5"
      }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    .../* @__PURE__ */ xe(10, "rem", 4, 3)
  },
  margin: (t) => ({
    auto: "auto",
    ...t("spacing")
  }),
  maxHeight: (t) => ({
    ...t("spacing"),
    full: "100%",
    screen: "100vh"
  }),
  maxWidth: (t, { breakpoints: e }) => ({
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    prose: "65ch",
    ...e(t("screens"))
  }),
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh"
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content"
  },
  opacity: {
    .../* @__PURE__ */ xe(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ xe(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ Z("spacing"),
  placeholderColor: /* @__PURE__ */ Z("colors"),
  placeholderOpacity: /* @__PURE__ */ Z("opacity"),
  ringColor: (t) => ({
    DEFAULT: t("colors.blue.500", "#3b82f6"),
    ...t("colors")
  }),
  ringOffsetColor: /* @__PURE__ */ Z("colors"),
  ringOffsetWidth: /* @__PURE__ */ at(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ at(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ at(2, "deg"),
    .../* @__PURE__ */ at(12, "deg", 3),
    .../* @__PURE__ */ at(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ xe(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ xe(150, "", 100, 0, 50),
    .../* @__PURE__ */ xe(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ at(2, "deg"),
    .../* @__PURE__ */ at(12, "deg", 3)
  },
  space: /* @__PURE__ */ Z("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ xe(2),
  textColor: /* @__PURE__ */ Z("colors"),
  textOpacity: /* @__PURE__ */ Z("opacity"),
  transitionDuration: (t) => ({
    DEFAULT: "150ms",
    ...t("durations")
  }),
  transitionDelay: /* @__PURE__ */ Z("durations"),
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    colors: "background-color,border-color,color,fill,stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform"
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
    linear: "linear",
    in: "cubic-bezier(0.4,0,1,1)",
    out: "cubic-bezier(0,0,0.2,1)",
    "in-out": "cubic-bezier(0.4,0,0.2,1)"
  },
  translate: (t) => ({
    ...t("spacing"),
    ...pn(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...pn(2, 6),
    ...pn(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ xe(50, "", 1, 0, 10)
  }
}, ya = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[V(n)] = i, e[V(n, ".")] = i);
  const o = [...n, r];
  e[V(o)] = i, e[V(o, ".")] = i, i && typeof i == "object" && ya(i, e, o);
}, e), e), rp = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, ip = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && te(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (te(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), op = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...np, ...t }, r = (o, s) => {
    const l = o && o[s], a = typeof l == "function" ? l(i, rp) : l;
    return a && s == "colors" ? ya(a) : a;
  }, i = (o, s, l) => {
    const a = o.split(".");
    o = a[0], a.length > 1 && (l = s, s = V(W(a), "."));
    let c = e.get(o);
    if (c || (e.set(o, c = { ...r(n, o) }), Object.assign(c, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? V(s) : s) || "DEFAULT";
      const u = ip(o, s) || c[s];
      return u == null ? l : Array.isArray(u) && !te(["fontSize", "outline", "dropShadow"], o) ? V(u, ",") : u;
    }
    return c;
  };
  return i;
}, sp = (t, e) => (n, r) => {
  if (typeof n.d == "function")
    return n.d(e);
  const i = n.d.split(/-(?![^[]*])/g);
  if (!r && i[0] == "tw" && n.$ == n.d)
    return n.$;
  for (let o = i.length; o; o--) {
    const s = V(i.slice(0, o));
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      const l = t[s];
      return typeof l == "function" ? l(W(i, o), e, s) : typeof l == "string" ? e[r ? "css" : "tw"](l) : l;
    }
  }
}, gn, wa = /^:(group(?:(?!-focus).+?)*)-(.+)$/, Sa = /^(:not)-(.+)/, Ca = (t) => t[1] == "[" ? W(t) : t, lp = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (gn = n("screens", W(s), "")) ? { [$r(gn)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (gn = wa.exec(s)) ? { [`.${ha(r(gn[1]))}:${gn[2]} &`]: o } : {
    [e[W(s)] || "&" + s.replace(Sa, (l, a, c) => a + "(" + Ca(":" + c) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, Ee, Ea = (t) => (((Ee = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Ee[1] / (Ee[2] ? 15 : 1) / 10 : 0) & 31) << 22, ka = (t) => {
  Ee = 0;
  for (let e = t.length; e--; )
    Ee += te("-:,", t[e]);
  return Ee;
}, $a = (t) => (ka(t) & 15) << 18, ap = [
  "rst",
  "st",
  "en",
  "d",
  "nk",
  "sited",
  "pty",
  "ecked",
  "cus-w",
  "ver",
  "cus",
  "cus-v",
  "tive",
  "sable",
  "ad-on",
  "tiona",
  "quire"
], cp = (t) => 1 << (~(Ee = ap.indexOf(t.replace(wa, ":$2").slice(3, 8))) ? Ee : 17), up = (t, e) => (n, r) => n | ((Ee = t("screens", W(r), "")) ? 1 << 27 | Ea($r(Ee)) : r == ":dark" ? 1 << 30 : (Ee = e[r] || r.replace(Sa, ":$2"))[0] == "@" ? $a(Ee) : cp(r)), fp = (t) => t[0] == "-" ? 0 : ka(t) + ((Ee = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Ee[1] || -!!Ee[2] : 0) + 1, ni = (t, e) => e + "{" + t + "}", dp = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (d, f) => "--" + i(f), s = (d) => `${d}`.replace(/--(tw-[\w-]+)\b/g, o), l = (d, f, h) => (d = s(d), Array.isArray(f) ? V(f.filter(Boolean).map((p) => t(d, s(p), h)), ";") : t(d, s(f), h));
  let a;
  const c = (d, f, h, p, g) => {
    if (Array.isArray(p)) {
      p.forEach((_) => _ && c(d, f, h, _, g));
      return;
    }
    let m = "", T = 0, b = 0;
    p["@apply"] && (p = uo(At(Vh(p["@apply"]), n), { ...p, "@apply": void 0 }, n)), Object.keys(p).forEach((_) => {
      const y = At(p[_], n);
      if (da(_, y)) {
        if (y !== "" && _.length > 1) {
          const v = co(_);
          b += 1, T = Math.max(T, fp(v)), m = (m && m + ";") + l(v, y, g);
        }
      } else if (y)
        if (_ == ":global" && (_ = "@global"), _[0] == "@")
          if (_[1] == "g")
            c([], "", 0, y, g);
          else if (_[1] == "f")
            c([], _, 0, y, g);
          else if (_[1] == "k") {
            const v = a.length;
            c([], "", 0, y, g);
            const w = a.splice(v, a.length - v);
            a.push({
              r: ni(V(w.map((E) => E.r), ""), _),
              p: w.reduce((E, S) => E + S.p, 0)
            });
          } else
            _[1] == "i" ? (Array.isArray(y) ? y : [y]).forEach((v) => v && a.push({ p: 0, r: `${_} ${v};` })) : (_[2] == "c" && (_ = $r(n.theme("screens", W(_, 8).trim()))), c([...d, _], f, h | Ea(_) | $a(_), y, g));
        else
          c(d, f ? f.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (v, w, E) => _.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (S, N, L) => (te(N, "&") ? N.replace(/&/g, w) : (w && w + " ") + N) + L) + E) : _, h, y, g);
    }), b && a.push({
      r: d.reduceRight(ni, ni(m, f)),
      p: h * (1 << 8) + ((Math.max(0, 15 - b) & 15) << 4 | (T || 15) & 15)
    });
  }, u = up(r, e);
  return (d, f, h, p = 0) => (p <<= 28, a = [], c([], f ? "." + ha(f) : "", h ? h.v.reduceRight(u, p) : p, d, h && h.i), a);
}, hp = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const a = Uh(i, l);
      try {
        t.insert(s, a), i.splice(a, 0, l);
      } catch (c) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: c }, r);
      }
    }
  };
}, ri = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, pp = (t) => (typeof t == "string" ? { t: Zh, a: As, i: ep }[t[1]] : t) || As, gp = { _: { value: "", writable: !0 } }, mp = (t = {}) => {
  const e = op(t.theme), n = pp(t.mode), r = ri(t.hash, !1, !1, Qr), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], a = {
    tw: (...E) => v(E),
    theme: (E, S, N) => {
      var L;
      const X = (L = e(E, S, N)) != null ? L : n.unknown(E, S == null || Array.isArray(S) ? S : S.split("."), N != null, a);
      return o.n && X && te("rg", (typeof X)[5]) ? `calc(${X} * -1)` : X;
    },
    tag: (E) => r ? r(E) : E,
    css: (E) => {
      s++;
      const S = l.length;
      try {
        (typeof E == "string" ? Ti([E]) : E).forEach(y);
        const N = Object.create(null, gp);
        for (let L = S; L < l.length; L++) {
          const X = l[L];
          if (X)
            switch (typeof X) {
              case "object":
                uo(N, X, a);
                break;
              case "string":
                N._ += (N._ && " ") + X;
            }
        }
        return N;
      } finally {
        l.length = S, s--;
      }
    }
  }, c = sp({ ...Jh, ...t.plugins }, a), u = (E) => {
    const S = o;
    o = E;
    try {
      return At(c(E), a);
    } finally {
      o = S;
    }
  }, d = { ...Kh, ...t.variants }, f = lp(t.darkMode || "media", d, a), h = dp(ri(t.prefix, tp, Qe), d, a), p = t.sheet || (typeof window > "u" ? Qh() : ba(t)), { init: g = (E) => E() } = p, m = hp(p, n, g, a);
  let T;
  g((E = /* @__PURE__ */ new Map()) => T = E);
  const b = /* @__PURE__ */ new WeakMap(), _ = (E, S) => E == "_" ? void 0 : typeof S == "function" ? JSON.stringify(At(S, a), _) : S, y = (E) => {
    !s && o.v.length && (E = { ...E, v: [...o.v, ...E.v], $: "" }), E.$ || (E.$ = Ss(E, b.get(E.d)));
    let S = s ? null : T.get(E.$);
    if (S == null) {
      let N = u(E);
      if (E.$ || (E.$ = Qr(JSON.stringify(N, _)), b.set(E.d, E.$), E.$ = Ss(E, E.$)), N && typeof N == "object")
        if (E.v = E.v.map(Ca), i && (E.i = i), N = f(N, E), s)
          l.push(N);
        else {
          const L = typeof E.d == "function" ? typeof N._ == "string" ? 1 : 3 : 2;
          S = r || typeof E.d == "function" ? (r || Qr)(L + E.$) : E.$, h(N, S, E, L).forEach(m), N._ && (S += " " + N._);
        }
      else
        typeof N == "string" ? S = N : (S = E.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: S }, a)), s && typeof E.d != "function" && l.push(S);
      s || (T.set(E.$, S), fa(T, 3e4));
    }
    return S;
  }, v = (E) => V(Ti(E).map(y).filter(Boolean), " "), w = ri(t.preflight, Nh, !1);
  if (w) {
    const E = Xh(e), S = h(typeof w == "function" ? At(w(E, a), a) || E : { ...E, ...w });
    g((N = (S.forEach(m), !0)) => N);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, a),
    process: v
  };
}, Ta = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = mp(o));
  };
  t && n(t);
  let r;
  return {
    tw: Object.defineProperties((...o) => e(o), {
      theme: {
        get: ((o) => () => (r || e([
          (s) => (r = s, "")
        ]), r[o]))("theme")
      }
    }),
    setup: (o) => n(o)
  };
}, { tw: Be, setup: vp } = /* @__PURE__ */ Ta();
function _p(t) {
  let e, n, r, i;
  const o = t[13].default, s = He(o, t, t[12], null);
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), yi(n, "display", "none"), $(n, "class", r = Be` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${t[0]}`), $(e, "class", "popup-element-wrapper"), yi(e, "position", "absolute");
    },
    m(l, a) {
      D(l, e, a), A(e, n), s && s.m(n, null), t[14](n), t[15](e), i = !0;
    },
    p(l, [a]) {
      s && s.p && (!i || a & 4096) && Le(s, o, l, l[12], i ? je(o, l[12], a, null) : Fe(l[12]), null), (!i || a & 1 && r !== (r = Be` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${l[0]}`)) && $(n, "class", r);
    },
    i(l) {
      i || (x(s, l), i = !0);
    },
    o(l) {
      P(s, l), i = !1;
    },
    d(l) {
      l && R(e), s && s.d(l), t[14](null), t[15](null);
    }
  };
}
function bp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { sizeToAnchor: s = !1 } = e, { anchorElement: l = null } = e, { position: a = null } = e, { popupClass: c = "" } = e, { preferedVerticalAlignment: u = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: f = { x: 0, y: 0 } } = e, h = Re("PopupContainerService", new pr(document.body)), p, g, m;
  function T() {
    const w = {
      backdrop: !1,
      closeOnClickOutside: o,
      positioning: s ? "anchor" : "custom",
      anchorElement: l,
      customPosition: s ? f : a,
      anchorHorizontal: d,
      anchorVertical: u
    };
    document.body.appendChild(p), n(1, p.style.display = "block", p), console.log(p.getBoundingClientRect(), p);
    const E = l == null ? void 0 : l.offsetWidth, S = p.offsetWidth;
    E && s && S < E && (console.log("setting width"), n(1, p.style.width = `${E}px`, p)), n(1, p.style.position = "static", p), g = h.openPopup("popup-container", p, w), g.afterClosed.then(() => {
      _(), m.appendChild(p), console.log("closing popup", p.getBoundingClientRect());
    });
  }
  function b() {
    g == null || g.close();
  }
  function _() {
    n(1, p.style.display = "none", p), n(1, p.style.position = "absolute", p), n(1, p.style.width = "auto", p);
  }
  function y(w) {
    ke[w ? "unshift" : "push"](() => {
      p = w, n(1, p);
    });
  }
  function v(w) {
    ke[w ? "unshift" : "push"](() => {
      m = w, n(2, m);
    });
  }
  return t.$$set = (w) => {
    "closeOnClick" in w && n(3, o = w.closeOnClick), "sizeToAnchor" in w && n(4, s = w.sizeToAnchor), "anchorElement" in w && n(5, l = w.anchorElement), "position" in w && n(6, a = w.position), "popupClass" in w && n(0, c = w.popupClass), "preferedVerticalAlignment" in w && n(7, u = w.preferedVerticalAlignment), "preferedHorizontalAlignment" in w && n(8, d = w.preferedHorizontalAlignment), "positionOffset" in w && n(9, f = w.positionOffset), "$$scope" in w && n(12, i = w.$$scope);
  }, [
    c,
    p,
    m,
    o,
    s,
    l,
    a,
    u,
    d,
    f,
    T,
    b,
    i,
    r,
    y,
    v
  ];
}
class yp extends he {
  constructor(e) {
    super(), de(this, e, bp, _p, se, {
      closeOnClick: 3,
      sizeToAnchor: 4,
      anchorElement: 5,
      position: 6,
      popupClass: 0,
      preferedVerticalAlignment: 7,
      preferedHorizontalAlignment: 8,
      positionOffset: 9,
      openPopup: 10,
      closePopup: 11
    });
  }
  get openPopup() {
    return this.$$.ctx[10];
  }
  get closePopup() {
    return this.$$.ctx[11];
  }
}
function wp(t) {
  un(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Ps(t) {
  let e, n;
  return {
    c() {
      e = I("div"), $(e, "class", n = Pe(Be`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
    },
    m(r, i) {
      D(r, e, i);
    },
    p: J,
    d(r) {
      r && R(e);
    }
  };
}
function Sp(t) {
  let e, n, r, i, o;
  function s(a) {
    t[7](a);
  }
  let l = { tw: Be };
  return t[0] !== void 0 && (l.checked = t[0]), n = new Rn({ props: l }), ke.push(() => ro(n, "checked", s)), {
    c() {
      e = I("div"), z(n.$$.fragment), $(e, "class", i = Pe(Be`p-1`) + " svelte-oysah1");
    },
    m(a, c) {
      D(a, e, c), F(n, e, null), o = !0;
    },
    p(a, c) {
      const u = {};
      !r && c & 1 && (r = !0, u.checked = a[0], to(() => r = !1)), n.$set(u);
    },
    i(a) {
      o || (x(n.$$.fragment, a), o = !0);
    },
    o(a) {
      P(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && R(e), B(n);
    }
  };
}
function Cp(t) {
  let e, n, r, i, o, s, l, a, c = t[0] && !t[2] && Ps(), u = t[2] && Sp(t);
  const d = t[6].default, f = He(d, t, t[5], null);
  return {
    c() {
      e = I("div"), c && c.c(), n = U(), u && u.c(), r = U(), i = I("span"), f && f.c(), $(e, "class", o = Pe(Be`flex hover:(${qn}) items-center ${t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${t[0] && !t[2] ? qn : ""}`) + " svelte-oysah1");
    },
    m(h, p) {
      D(h, e, p), c && c.m(e, null), A(e, n), u && u.m(e, null), A(e, r), A(e, i), f && f.m(i, null), t[8](i), s = !0, l || (a = ie(e, "click", t[3]), l = !0);
    },
    p(h, [p]) {
      h[0] && !h[2] ? c ? c.p(h, p) : (c = Ps(), c.c(), c.m(e, n)) : c && (c.d(1), c = null), h[2] && u.p(h, p), f && f.p && (!s || p & 32) && Le(f, d, h, h[5], s ? je(d, h[5], p, null) : Fe(h[5]), null), (!s || p & 1 && o !== (o = Pe(Be`flex hover:(${qn}) items-center ${h[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${h[0] && !h[2] ? qn : ""}`) + " svelte-oysah1")) && $(e, "class", o);
    },
    i(h) {
      s || (x(u), x(f, h), s = !0);
    },
    o(h) {
      P(u), P(f, h), s = !1;
    },
    d(h) {
      h && R(e), c && c.d(), u && u.d(), f && f.d(h), t[8](null), l = !1, a();
    }
  };
}
let qn = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Ep(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, a = null, c, u;
  const d = Ae("audako:select:multiple"), f = Ae("audako:select:close"), h = Ae("audako:select:value"), p = Ae("audako:select:value:changed"), g = Ae("audako:select:displayValue");
  sa(() => {
    var y;
    u = (y = c.innerText) == null ? void 0 : y.trim(), g.subscribe((v) => {
      a = v;
    }), h.subscribe((v) => {
      l = v, d ? n(0, s = v == null ? void 0 : v.includes(o)) : n(0, s = v === o), T();
    });
  });
  function m(y) {
    y.preventDefault(), y.stopPropagation();
    let v = null;
    d ? s ? v = l.filter((w) => w !== o) : (console.log("add value", l, o), v = Array.isArray(l) ? [...l, o] : [o]) : (v = o, f()), h.set(v), p.next(v);
  }
  function T() {
    if (d) {
      const y = a;
      s && !y.includes(u) ? g.set([...y, u]) : !s && y.includes(u) && g.set(y.filter((v) => v !== u));
    } else
      s && g.set(u);
  }
  function b(y) {
    s = y, n(0, s);
  }
  function _(y) {
    ke[y ? "unshift" : "push"](() => {
      c = y, n(1, c);
    });
  }
  return t.$$set = (y) => {
    "value" in y && n(4, o = y.value), "$$scope" in y && n(5, i = y.$$scope);
  }, [
    s,
    c,
    d,
    m,
    o,
    i,
    r,
    b,
    _
  ];
}
class xa extends he {
  constructor(e) {
    super(), de(this, e, Ep, Cp, se, { value: 4 }, wp);
  }
}
function Is(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const kp = (t) => ({}), Rs = (t) => ({});
function $p(t) {
  let e = t[26].label + "", n, r;
  return {
    c() {
      n = j(e), r = U();
    },
    m(i, o) {
      D(i, n, o), D(i, r, o);
    },
    p(i, o) {
      o & 16 && e !== (e = i[26].label + "") && Se(n, e);
    },
    d(i) {
      i && R(n), i && R(r);
    }
  };
}
function Ds(t) {
  let e, n;
  return e = new xa({
    props: {
      value: t[26].value,
      $$slots: { default: [$p] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & 16 && (o.value = r[26].value), i & 131088 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Tp(t) {
  let e, n, r;
  const i = t[13].default, o = He(i, t, t[17], null);
  let s = t[4], l = [];
  for (let c = 0; c < s.length; c += 1)
    l[c] = Ds(Is(t, s, c));
  const a = (c) => P(l[c], 1, 1, () => {
    l[c] = null;
  });
  return {
    c() {
      o && o.c(), e = U();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      n = kr();
    },
    m(c, u) {
      o && o.m(c, u), D(c, e, u);
      for (let d = 0; d < l.length; d += 1)
        l[d].m(c, u);
      D(c, n, u), r = !0;
    },
    p(c, u) {
      if (o && o.p && (!r || u & 131072) && Le(o, i, c, c[17], r ? je(i, c[17], u, null) : Fe(c[17]), null), u & 16) {
        s = c[4];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const f = Is(c, s, d);
          l[d] ? (l[d].p(f, u), x(l[d], 1)) : (l[d] = Ds(f), l[d].c(), x(l[d], 1), l[d].m(n.parentNode, n));
        }
        for (me(), d = s.length; d < l.length; d += 1)
          a(d);
        ve();
      }
    },
    i(c) {
      if (!r) {
        x(o, c);
        for (let u = 0; u < s.length; u += 1)
          x(l[u]);
        r = !0;
      }
    },
    o(c) {
      P(o, c), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        P(l[u]);
      r = !1;
    },
    d(c) {
      o && o.d(c), c && R(e), Rt(l, c), c && R(n);
    }
  };
}
function xp(t) {
  let e, n, r, i, o, s, l, a, c, u, d, f, h, p;
  const g = t[13].prefix, m = He(g, t, t[17], Rs);
  let T = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: t[8],
    $$slots: { default: [Tp] },
    $$scope: { ctx: t }
  };
  return d = new yp({ props: T }), t[16](d), {
    c() {
      e = I("div"), m && m.c(), n = U(), r = I("input"), o = U(), s = I("div"), l = j("arrow_drop_down"), u = U(), z(d.$$.fragment), r.disabled = t[6], $(r, "placeholder", t[0]), r.readOnly = !0, $(r, "class", i = t[5]`w-full outline-none cursor-pointer ${t[1]}`), $(s, "class", a = t[5]`material-symbols-rounded pointer-events-none cursor-pointer text-md ${t[3]}`), $(e, "class", c = t[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${t[2]}`);
    },
    m(b, _) {
      D(b, e, _), m && m.m(e, null), A(e, n), A(e, r), fr(r, t[7]), t[15](r), A(e, o), A(e, s), A(s, l), D(b, u, _), F(d, b, _), f = !0, h || (p = [
        ie(r, "input", t[14]),
        yd(Ap.call(null, e)),
        ie(e, "click", t[10])
      ], h = !0);
    },
    p(b, [_]) {
      m && m.p && (!f || _ & 131072) && Le(m, g, b, b[17], f ? je(g, b[17], _, kp) : Fe(b[17]), Rs), (!f || _ & 64) && (r.disabled = b[6]), (!f || _ & 1) && $(r, "placeholder", b[0]), (!f || _ & 34 && i !== (i = b[5]`w-full outline-none cursor-pointer ${b[1]}`)) && $(r, "class", i), _ & 128 && r.value !== b[7] && fr(r, b[7]), (!f || _ & 40 && a !== (a = b[5]`material-symbols-rounded pointer-events-none cursor-pointer text-md ${b[3]}`)) && $(s, "class", a), (!f || _ & 36 && c !== (c = b[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${b[2]}`)) && $(e, "class", c);
      const y = {};
      _ & 256 && (y.anchorElement = b[8]), _ & 131088 && (y.$$scope = { dirty: _, ctx: b }), d.$set(y);
    },
    i(b) {
      f || (x(m, b), x(d.$$.fragment, b), f = !0);
    },
    o(b) {
      P(m, b), P(d.$$.fragment, b), f = !1;
    },
    d(b) {
      b && R(e), m && m.d(b), t[15](null), b && R(u), t[16](null), B(d, b), h = !1, it(p);
    }
  };
}
function Ap(t) {
  console.log("Render", t);
}
function Pp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: a = "" } = e, { container$class: c = "" } = e, { suffixIcon$class: u = "" } = e, { options: d = [] } = e, { tw: f = Be } = e, { disabled: h = !1 } = e, p = "", g, m, T = Ve(), b = hr(o);
  const _ = b.subscribe((O) => {
    n(11, o = O), console.log("Select Value", o);
  });
  let y = new we();
  const v = y.subscribe((O) => {
    T("valueChanged", O);
  });
  let w = hr(s ? [] : ""), E = w.subscribe((O) => {
    console.log("displayValueStore", O), N(O);
  });
  function S(O) {
    console.log("open menu"), O && (O.preventDefault(), O.stopPropagation()), !h && (m == null || m.openPopup());
  }
  function N(O) {
    if (O == null || O.length === 0) {
      n(7, p = null);
      return;
    }
    Array.isArray(O) ? n(7, p = O.join(", ")) : n(7, p = O);
  }
  ut("audako:select:multiple", s), ut("audako:select:value", b), ut("audako:select:value:changed", y), ut("audako:select:displayValue", w), ut("audako:select:close", () => m.closePopup()), vt(() => {
    _(), v.unsubscribe(), E();
  });
  function L() {
    p = this.value, n(7, p);
  }
  function X(O) {
    ke[O ? "unshift" : "push"](() => {
      g = O, n(8, g);
    });
  }
  function ee(O) {
    ke[O ? "unshift" : "push"](() => {
      m = O, n(9, m);
    });
  }
  return t.$$set = (O) => {
    "value" in O && n(11, o = O.value), "multiple" in O && n(12, s = O.multiple), "placeholder" in O && n(0, l = O.placeholder), "textfield$class" in O && n(1, a = O.textfield$class), "container$class" in O && n(2, c = O.container$class), "suffixIcon$class" in O && n(3, u = O.suffixIcon$class), "options" in O && n(4, d = O.options), "tw" in O && n(5, f = O.tw), "disabled" in O && n(6, h = O.disabled), "$$scope" in O && n(17, i = O.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & 32 && (ut("tw", f), console.log("setcontext", f));
  }, [
    l,
    a,
    c,
    u,
    d,
    f,
    h,
    p,
    g,
    m,
    S,
    o,
    s,
    r,
    L,
    X,
    ee,
    i
  ];
}
class Aa extends he {
  constructor(e) {
    super(), de(this, e, Pp, xp, se, {
      value: 11,
      multiple: 12,
      placeholder: 0,
      textfield$class: 1,
      container$class: 2,
      suffixIcon$class: 3,
      options: 4,
      tw: 5,
      disabled: 6
    });
  }
}
function Os(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function Ip(t) {
  let e = t[18] + "", n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      D(r, n, i);
    },
    p(r, i) {
      i & 8 && e !== (e = r[18] + "") && Se(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Ns(t) {
  let e, n;
  return e = new xa({
    props: {
      value: t[18],
      $$slots: { default: [Ip] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & 8 && (o.value = r[18]), i & 2097160 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Rp(t) {
  let e, n, r = t[3], i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ns(Os(t, r, s));
  const o = (s) => P(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = kr();
    },
    m(s, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a].m(s, l);
      D(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & 8) {
        r = s[3];
        let a;
        for (a = 0; a < r.length; a += 1) {
          const c = Os(s, r, a);
          i[a] ? (i[a].p(c, l), x(i[a], 1)) : (i[a] = Ns(c), i[a].c(), x(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (me(), a = r.length; a < i.length; a += 1)
          o(a);
        ve();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          x(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        P(i[l]);
      n = !1;
    },
    d(s) {
      Rt(i, s), s && R(e);
    }
  };
}
function Dp(t) {
  let e;
  return {
    c() {
      e = j("first_page");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Op(t) {
  let e;
  return {
    c() {
      e = j("navigate_before");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Np(t) {
  let e;
  return {
    c() {
      e = j("navigate_next");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Up(t) {
  let e;
  return {
    c() {
      e = j("last_page");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Mp(t) {
  let e, n, r, i, o, s, l, a, c, u = t[1] * t[0] + 1 + "", d, f, h = (t[1] + 1) * t[0] + "", p, g, m, T, b, _, y, v, w, E, S, N, L, X;
  function ee(M) {
    t[10](M);
  }
  let O = {
    tw: t[5],
    textfield$class: t[5]`text-xs text-gray-600`,
    suffixIcon$class: t[5]`!top-[2px] !text-[20px]`,
    $$slots: { default: [Rp] },
    $$scope: { ctx: t }
  };
  return t[0] !== void 0 && (O.value = t[0]), s = new Aa({ props: O }), ke.push(() => ro(s, "value", ee)), s.$on("valueChanged", t[11]), y = new ht({
    props: {
      disabled: t[1] === 0,
      $$slots: { default: [Dp] },
      $$scope: { ctx: t }
    }
  }), y.$on("click", t[12]), w = new ht({
    props: {
      disabled: t[1] === 0,
      $$slots: { default: [Op] },
      $$scope: { ctx: t }
    }
  }), w.$on("click", t[13]), S = new ht({
    props: {
      disabled: t[1] === t[4],
      $$slots: { default: [Np] },
      $$scope: { ctx: t }
    }
  }), S.$on("click", t[14]), L = new ht({
    props: {
      disabled: t[1] === t[4],
      $$slots: { default: [Up] },
      $$scope: { ctx: t }
    }
  }), L.$on("click", t[15]), {
    c() {
      e = I("div"), n = I("div"), r = j("Items per page:"), i = U(), o = I("div"), z(s.$$.fragment), a = U(), c = I("div"), d = j(u), f = j("\xA0-\xA0"), p = j(h), g = U(), m = I("div"), T = j("of "), b = j(t[2]), _ = U(), z(y.$$.fragment), v = U(), z(w.$$.fragment), E = U(), z(S.$$.fragment), N = U(), z(L.$$.fragment), $(n, "class", t[5]`mr-1 text-xs text-gray-600`), $(o, "class", t[5]`w-[50px]`), $(c, "class", t[5]`ml-4 text-xs mr-1 text-gray-600`), $(m, "class", t[5]`text-xs mr-4 text-gray-600`), $(e, "class", t[5]`flex w-full items-center justify-end pt-1`);
    },
    m(M, Y) {
      D(M, e, Y), A(e, n), A(n, r), A(e, i), A(e, o), F(s, o, null), A(e, a), A(e, c), A(c, d), A(c, f), A(c, p), A(e, g), A(e, m), A(m, T), A(m, b), A(e, _), F(y, e, null), A(e, v), F(w, e, null), A(e, E), F(S, e, null), A(e, N), F(L, e, null), X = !0;
    },
    p(M, [Y]) {
      const Ke = {};
      Y & 2097160 && (Ke.$$scope = { dirty: Y, ctx: M }), !l && Y & 1 && (l = !0, Ke.value = M[0], to(() => l = !1)), s.$set(Ke), (!X || Y & 3) && u !== (u = M[1] * M[0] + 1 + "") && Se(d, u), (!X || Y & 3) && h !== (h = (M[1] + 1) * M[0] + "") && Se(p, h), (!X || Y & 4) && Se(b, M[2]);
      const fn = {};
      Y & 2 && (fn.disabled = M[1] === 0), Y & 2097152 && (fn.$$scope = { dirty: Y, ctx: M }), y.$set(fn);
      const H = {};
      Y & 2 && (H.disabled = M[1] === 0), Y & 2097152 && (H.$$scope = { dirty: Y, ctx: M }), w.$set(H);
      const q = {};
      Y & 18 && (q.disabled = M[1] === M[4]), Y & 2097152 && (q.$$scope = { dirty: Y, ctx: M }), S.$set(q);
      const ot = {};
      Y & 18 && (ot.disabled = M[1] === M[4]), Y & 2097152 && (ot.$$scope = { dirty: Y, ctx: M }), L.$set(ot);
    },
    i(M) {
      X || (x(s.$$.fragment, M), x(y.$$.fragment, M), x(w.$$.fragment, M), x(S.$$.fragment, M), x(L.$$.fragment, M), X = !0);
    },
    o(M) {
      P(s.$$.fragment, M), P(y.$$.fragment, M), P(w.$$.fragment, M), P(S.$$.fragment, M), P(L.$$.fragment, M), X = !1;
    },
    d(M) {
      M && R(e), B(s), B(y), B(w), B(S), B(L);
    }
  };
}
function Us(t, e) {
  return console.log(), Math.max(Math.floor(e / t) - 1, 0);
}
function Hp(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Ae("tw"), l, { pageSizeOptions: a = [10, 20, 50, 100] } = e, c = Ve();
  function u(v) {
    n(1, r = r + v), p();
  }
  function d() {
    n(1, r = 0), p();
  }
  function f() {
    n(1, r = l), p();
  }
  function h(v) {
    console.log("changePageSize", v), n(0, i = v), n(4, l = Us(i, o)), n(1, r = Math.min(r, l)), p();
  }
  function p() {
    c("changePage", { pageIndex: r, pageSize: i });
  }
  function g(v) {
    i = v, n(0, i);
  }
  const m = (v) => h(v.detail), T = () => d(), b = () => u(-1), _ = () => u(1), y = () => f();
  return t.$$set = (v) => {
    "pageIndex" in v && n(1, r = v.pageIndex), "pageSize" in v && n(0, i = v.pageSize), "totalCount" in v && n(2, o = v.totalCount), "pageSizeOptions" in v && n(3, a = v.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & 5 && n(4, l = Us(i, o)), t.$$.dirty & 1 && console.log("pageSize", i);
  }, [
    i,
    r,
    o,
    a,
    l,
    s,
    u,
    d,
    f,
    h,
    g,
    m,
    T,
    b,
    _,
    y
  ];
}
class jp extends he {
  constructor(e) {
    super(), de(this, e, Hp, Mp, se, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function Lp(t) {
  un(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Ms(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function Hs(t) {
  let e, n;
  return e = new Ei({
    props: {
      container$class: t[9]`basis-[50px] flex-[0] cursor-default`,
      id: "Name",
      $$slots: { default: [Fp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & 32 | i[1] & 64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Fp(t) {
  let e, n;
  return e = new Rn({
    props: {
      checked: t[5] === "checked",
      indeterminate: t[5] === "indeterminate"
    }
  }), e.$on("change", t[15]), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & 32 && (o.checked = r[5] === "checked"), i[0] & 32 && (o.indeterminate = r[5] === "indeterminate"), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Bp(t) {
  let e;
  return {
    c() {
      e = j("Name");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function zp(t) {
  let e;
  return {
    c() {
      e = j("Group");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Wp(t) {
  let e, n, r, i, o, s = t[0] && Hs(t);
  return n = new Ei({
    props: {
      container$class: t[9]`flex-[2] cursor-default"`,
      id: "Name",
      $$slots: { default: [Bp] },
      $$scope: { ctx: t }
    }
  }), i = new Ei({
    props: {
      container$class: t[9]`flex-1 curstor-default`,
      id: "Name",
      $$slots: { default: [zp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = U(), z(n.$$.fragment), r = U(), z(i.$$.fragment);
    },
    m(l, a) {
      s && s.m(l, a), D(l, e, a), F(n, l, a), D(l, r, a), F(i, l, a), o = !0;
    },
    p(l, a) {
      l[0] ? s ? (s.p(l, a), a[0] & 1 && x(s, 1)) : (s = Hs(l), s.c(), x(s, 1), s.m(e.parentNode, e)) : s && (me(), P(s, 1, 1, () => {
        s = null;
      }), ve());
      const c = {};
      a[1] & 64 && (c.$$scope = { dirty: a, ctx: l }), n.$set(c);
      const u = {};
      a[1] & 64 && (u.$$scope = { dirty: a, ctx: l }), i.$set(u);
    },
    i(l) {
      o || (x(s), x(n.$$.fragment, l), x(i.$$.fragment, l), o = !0);
    },
    o(l) {
      P(s), P(n.$$.fragment, l), P(i.$$.fragment, l), o = !1;
    },
    d(l) {
      s && s.d(l), l && R(e), B(n, l), l && R(r), B(i, l);
    }
  };
}
function Vp(t) {
  let e;
  return {
    c() {
      e = I("div"), $(e, "class", Pe(t[9]`w-full h-[3px]`) + " svelte-15xwzh7");
    },
    m(n, r) {
      D(n, e, r);
    },
    p: J,
    d(n) {
      n && R(e);
    }
  };
}
function qp(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = I("div"), $(n, "class", Pe(t[9]`progress-bar-value-animation wfull h-full bg-blue-600 `) + " svelte-15xwzh7"), $(e, "class", Pe(t[9]`w-full h-[3px] overflow-hidden bg-blue-200`) + " svelte-15xwzh7");
    },
    m(r, i) {
      D(r, e, i), A(e, n);
    },
    p: J,
    d(r) {
      r && R(e);
    }
  };
}
function js(t) {
  let e, n;
  return e = new ki({
    props: {
      container$class: t[9]`basis-[50px] flex-[0]`,
      $$slots: { default: [Gp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & 24 | i[1] & 64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Gp(t) {
  let e, n;
  return e = new Rn({
    props: {
      checked: t[4][t[33].Id]
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & 24 && (o.checked = r[4][r[33].Id]), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function Jp(t) {
  var i;
  let e, n = ((i = t[33].Name) == null ? void 0 : i.Value) + "", r;
  return {
    c() {
      e = I("div"), r = j(n), $(e, "class", Pe(t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`) + " svelte-15xwzh7");
    },
    m(o, s) {
      D(o, e, s), A(e, r);
    },
    p(o, s) {
      var l;
      s[0] & 8 && n !== (n = ((l = o[33].Name) == null ? void 0 : l.Value) + "") && Se(r, n);
    },
    d(o) {
      o && R(e);
    }
  };
}
function Xp(t) {
  return { c: J, m: J, p: J, d: J };
}
function Kp(t) {
  let e = t[36] + "", n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      D(r, n, i);
    },
    p(r, i) {
      i[0] & 8 && e !== (e = r[36] + "") && Se(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Yp(t) {
  return { c: J, m: J, p: J, d: J };
}
function Qp(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Yp,
    then: Kp,
    catch: Xp,
    value: 36
  };
  return dr(n = t[8].resolveName(G.Group, t[33].GroupId), r), {
    c() {
      e = I("span"), r.block.c(), $(e, "class", Pe(t[9]` text-sm overflow-hidden whitespace-nowrap text-ellipsis`) + " svelte-15xwzh7");
    },
    m(i, o) {
      D(i, e, o), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null;
    },
    p(i, o) {
      t = i, r.ctx = t, o[0] & 8 && n !== (n = t[8].resolveName(G.Group, t[33].GroupId)) && dr(n, r) || la(r, t, o);
    },
    d(i) {
      i && R(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function Zp(t) {
  let e, n, r, i, o, s, l = t[0] && js(t);
  return n = new ki({
    props: {
      container$class: t[9]`flex-[2]`,
      $$slots: { default: [Jp] },
      $$scope: { ctx: t }
    }
  }), i = new ki({
    props: {
      container$class: t[9]`flex-1`,
      $$slots: { default: [Qp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = U(), z(n.$$.fragment), r = U(), z(i.$$.fragment), o = U();
    },
    m(a, c) {
      l && l.m(a, c), D(a, e, c), F(n, a, c), D(a, r, c), F(i, a, c), D(a, o, c), s = !0;
    },
    p(a, c) {
      a[0] ? l ? (l.p(a, c), c[0] & 1 && x(l, 1)) : (l = js(a), l.c(), x(l, 1), l.m(e.parentNode, e)) : l && (me(), P(l, 1, 1, () => {
        l = null;
      }), ve());
      const u = {};
      c[0] & 8 | c[1] & 64 && (u.$$scope = { dirty: c, ctx: a }), n.$set(u);
      const d = {};
      c[0] & 8 | c[1] & 64 && (d.$$scope = { dirty: c, ctx: a }), i.$set(d);
    },
    i(a) {
      s || (x(l), x(n.$$.fragment, a), x(i.$$.fragment, a), s = !0);
    },
    o(a) {
      P(l), P(n.$$.fragment, a), P(i.$$.fragment, a), s = !1;
    },
    d(a) {
      l && l.d(a), a && R(e), B(n, a), a && R(r), B(i, a), a && R(o);
    }
  };
}
function Ls(t) {
  let e, n;
  function r() {
    return t[16](t[33]);
  }
  return e = new wh({
    props: {
      flexrow$class: t[9]`cursor-pointer hover:bg-gray-100`,
      $$slots: { default: [Zp] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", r), {
    c() {
      z(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, o) {
      t = i;
      const s = {};
      o[0] & 25 | o[1] & 64 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (x(e.$$.fragment, i), n = !0);
    },
    o(i) {
      P(e.$$.fragment, i), n = !1;
    },
    d(i) {
      B(e, i);
    }
  };
}
function eg(t) {
  let e, n, r, i, o;
  e = new ph({
    props: {
      $$slots: { default: [Wp] },
      $$scope: { ctx: t }
    }
  });
  function s(f, h) {
    return f[7] ? qp : Vp;
  }
  let l = s(t), a = l(t), c = t[3], u = [];
  for (let f = 0; f < c.length; f += 1)
    u[f] = Ls(Ms(t, c, f));
  const d = (f) => P(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      z(e.$$.fragment), n = U(), a.c(), r = U();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      i = kr();
    },
    m(f, h) {
      F(e, f, h), D(f, n, h), a.m(f, h), D(f, r, h);
      for (let p = 0; p < u.length; p += 1)
        u[p].m(f, h);
      D(f, i, h), o = !0;
    },
    p(f, h) {
      const p = {};
      if (h[0] & 33 | h[1] & 64 && (p.$$scope = { dirty: h, ctx: f }), e.$set(p), l === (l = s(f)) && a ? a.p(f, h) : (a.d(1), a = l(f), a && (a.c(), a.m(r.parentNode, r))), h[0] & 1817) {
        c = f[3];
        let g;
        for (g = 0; g < c.length; g += 1) {
          const m = Ms(f, c, g);
          u[g] ? (u[g].p(m, h), x(u[g], 1)) : (u[g] = Ls(m), u[g].c(), x(u[g], 1), u[g].m(i.parentNode, i));
        }
        for (me(), g = c.length; g < u.length; g += 1)
          d(g);
        ve();
      }
    },
    i(f) {
      if (!o) {
        x(e.$$.fragment, f);
        for (let h = 0; h < c.length; h += 1)
          x(u[h]);
        o = !0;
      }
    },
    o(f) {
      P(e.$$.fragment, f), u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        P(u[h]);
      o = !1;
    },
    d(f) {
      B(e, f), f && R(n), a.d(f), f && R(r), Rt(u, f), f && R(i);
    }
  };
}
function tg(t) {
  let e, n;
  return e = new jp({
    props: {
      slot: "pagination",
      pageIndex: t[1],
      pageSize: t[2],
      totalCount: t[6]
    }
  }), e.$on("changePage", t[12]), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & 2 && (o.pageIndex = r[1]), i[0] & 4 && (o.pageSize = r[2]), i[0] & 64 && (o.totalCount = r[6]), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function ng(t) {
  let e, n, r;
  return n = new uh({
    props: {
      $$slots: {
        pagination: [tg],
        default: [eg]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = I("div"), z(n.$$.fragment), $(e, "class", Pe(t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`) + " svelte-15xwzh7");
    },
    m(i, o) {
      D(i, e, o), F(n, e, null), r = !0;
    },
    p(i, o) {
      const s = {};
      o[0] & 255 | o[1] & 64 && (s.$$scope = { dirty: o, ctx: i }), n.$set(s);
    },
    i(i) {
      r || (x(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && R(e), B(n);
    }
  };
}
function rg(t, e, n) {
  let r = Re(It), i = Re(Cn), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, a = Ae("tw"), c = [], u = new we(), d = [], f = {}, h = "unchecked", p, g, m, T = !1, b = 0, _ = 10, y = 0, v = tn(), w = xt, E = !1, S = !0, N = new we();
  Tt.pipe(tt(N)).subscribe((H) => {
    d = H.selectedEntities, Y(), O();
  }), ql([w.asObservable(), v.asObservable()]).pipe(tt(N)).subscribe(([H, q]) => {
    var ot;
    console.log("combineLatest"), m = q.selectedGroup, g = (ot = q.selectedGroup) == null ? void 0 : ot.Id, p = q.filter, T = H.queryWithSubGroups, E = !0, n(1, b = 0), u.next();
  });
  function L() {
    const H = { $and: [] };
    T ? H.$and.push({ Path: g }) : H.$and.push({ GroupId: g }), p && H.$and.push({
      $or: [
        {
          "Name.Value": { $regex: p, $options: "i" }
        },
        {
          "Description.Value": { $regex: p, $options: "i" }
        }
      ]
    }), l && H.$and.push(l);
    const q = {
      limit: _,
      skip: b * _
    };
    return console.log(o), Ot(r.queryConfiguration(o, H, q));
  }
  function X(H) {
    s ? (d.find((q) => q.Id === H.Id) ? (d = d.filter((q) => q.Id !== H.Id), n(4, f[H.Id] = !1, f)) : (d.push(H), n(4, f[H.Id] = !0, f)), O()) : d = [H], Tt.update((q) => ({ ...q, selectedEntities: d }));
  }
  function ee(H) {
    H ? d = [
      ...d,
      ...c.filter((q) => !f[q.Id])
    ] : d = d.filter((q) => !c.find((ot) => ot.Id === q.Id)), Y(), O(), Tt.update((q) => ({ ...q, selectedEntities: d }));
  }
  function O() {
    let H = Object.keys(f).filter((q) => f[q]);
    H.length === 0 ? n(5, h = "unchecked") : H.length === c.length ? n(5, h = "checked") : n(5, h = "indeterminate");
  }
  function M(H) {
    const q = H.detail;
    q.pageSize != _ ? (n(1, b = 0), n(2, _ = q.pageSize)) : n(1, b = q.pageIndex);
  }
  function Y() {
    n(4, f = {}), c.forEach((H) => {
      n(4, f[H.Id] = d.find((q) => q.Id === H.Id) != null, f);
    });
  }
  vt(() => {
    N.next(), N.complete();
  }), u.pipe(tt(N), wn(() => E && !!g), bf(250), vf(() => n(7, S = !0)), Kl(() => L())).subscribe((H) => {
    n(7, S = !1), n(3, c = H.data), Y(), O(), o === G.Group && c.unshift(m), n(6, y = H.total);
  });
  const Ke = (H) => {
    var q;
    return ee((q = H.detail) == null ? void 0 : q.checked);
  }, fn = (H) => X(H);
  return t.$$set = (H) => {
    "entityType" in H && n(13, o = H.entityType), "selectMultiple" in H && n(0, s = H.selectMultiple), "additionalFilter" in H && n(14, l = H.additionalFilter);
  }, t.$$.update = () => {
    t.$$.dirty[0] & 2 && (n(1, b), n(24, u), n(2, _), u.next()), t.$$.dirty[0] & 4 && (n(2, _), n(24, u), n(1, b = 0), u.next());
  }, [
    s,
    b,
    _,
    c,
    f,
    h,
    y,
    S,
    i,
    a,
    X,
    ee,
    M,
    o,
    l,
    Ke,
    fn
  ];
}
class ig extends he {
  constructor(e) {
    super(), de(this, e, rg, ng, se, {
      entityType: 13,
      selectMultiple: 0,
      additionalFilter: 14
    }, Lp, [-1, -1]);
  }
}
function Fs(t) {
  let e, n, r, i, o;
  n = new ht({ props: { icon: "done_all" } }), n.$on("click", t[10]);
  let s = t[4].length > 0 && Bs(t);
  return {
    c() {
      e = I("div"), z(n.$$.fragment), r = U(), s && s.c(), $(e, "class", i = t[5]`mx-2 relative`);
    },
    m(l, a) {
      D(l, e, a), F(n, e, null), A(e, r), s && s.m(e, null), o = !0;
    },
    p(l, a) {
      l[4].length > 0 ? s ? s.p(l, a) : (s = Bs(l), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    i(l) {
      o || (x(n.$$.fragment, l), o = !0);
    },
    o(l) {
      P(n.$$.fragment, l), o = !1;
    },
    d(l) {
      l && R(e), B(n), s && s.d();
    }
  };
}
function Bs(t) {
  let e, n = t[4].length + "", r, i;
  return {
    c() {
      e = I("div"), r = j(n), $(e, "class", i = t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`);
    },
    m(o, s) {
      D(o, e, s), A(e, r);
    },
    p(o, s) {
      s & 16 && n !== (n = o[4].length + "") && Se(r, n);
    },
    d(o) {
      o && R(e);
    }
  };
}
function og(t) {
  let e, n, r, i, o, s, l, a, c, u, d, f, h, p, g, m = t[0] && Fs(t);
  function T(_) {
    t[11](_);
  }
  let b = { label: "Mit Untergruppen" };
  return t[1] !== void 0 && (b.checked = t[1]), d = new Rn({ props: b }), ke.push(() => ro(d, "checked", T)), {
    c() {
      e = I("div"), n = I("div"), r = I("div"), i = I("span"), o = j("search"), s = U(), l = I("input"), a = U(), m && m.c(), c = U(), u = I("div"), z(d.$$.fragment), $(i, "class", t[5]`material-symbols-rounded mr-2`), $(l, "placeholder", "Search"), $(l, "class", t[5]`w-full outline-none`), $(r, "class", t[5]`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`), $(n, "class", t[5]`flex items-center`), $(u, "class", t[5]`flex justify-end mt-2`), $(e, "class", t[5]`flex flex-col`);
    },
    m(_, y) {
      D(_, e, y), A(e, n), A(n, r), A(r, i), A(i, o), A(r, s), A(r, l), t[8](l), fr(l, t[2]), A(n, a), m && m.m(n, null), A(e, c), A(e, u), F(d, u, null), h = !0, p || (g = ie(l, "input", t[9]), p = !0);
    },
    p(_, [y]) {
      y & 4 && l.value !== _[2] && fr(l, _[2]), _[0] ? m ? (m.p(_, y), y & 1 && x(m, 1)) : (m = Fs(_), m.c(), x(m, 1), m.m(n, null)) : m && (me(), P(m, 1, 1, () => {
        m = null;
      }), ve());
      const v = {};
      !f && y & 2 && (f = !0, v.checked = _[1], to(() => f = !1)), d.$set(v);
    },
    i(_) {
      h || (x(m), x(d.$$.fragment, _), h = !0);
    },
    o(_) {
      P(m), P(d.$$.fragment, _), h = !1;
    },
    d(_) {
      _ && R(e), t[8](null), m && m.d(), B(d), p = !1, g();
    }
  };
}
function sg(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = Ae("tw"), s = Ve(), l = tn(), a = !1, c = l.value.filter, u, d = new we(), f = new we(), h = [];
  xt.pipe(tt(d)).subscribe((v) => {
    n(1, a = v.queryWithSubGroups);
  }), f.pipe(tt(d), af(200)).subscribe((v) => {
    l.update((w) => ({ ...w, filter: v }));
  }), Tt.pipe(tt(d)).subscribe((v) => {
    n(4, h = v.selectedEntities);
  });
  function p(v) {
    console.log("onSubGroupsToggled", v), v != xt.value.queryWithSubGroups && xt.update((w) => ({
      ...w,
      queryWithSubGroups: v
    }));
  }
  function g() {
    s("acceptSelection");
  }
  sa(() => {
    m();
  });
  function m() {
    u && setTimeout(() => {
      u.focus(), u.select();
    }, 0);
  }
  vt(() => {
    d.next(), d.complete();
  });
  function T(v) {
    ke[v ? "unshift" : "push"](() => {
      u = v, n(3, u);
    });
  }
  function b() {
    c = this.value, n(2, c);
  }
  const _ = () => g();
  function y(v) {
    a = v, n(1, a);
  }
  return t.$$set = (v) => {
    "entityType" in v && n(7, r = v.entityType), "selectMultiple" in v && n(0, i = v.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & 4 && f.next(c), t.$$.dirty & 2 && p(a);
  }, [
    i,
    a,
    c,
    u,
    h,
    o,
    g,
    r,
    T,
    b,
    _,
    y
  ];
}
class lg extends he {
  constructor(e) {
    super(), de(this, e, sg, og, se, { entityType: 7, selectMultiple: 0 });
  }
}
function zs(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function Ws(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function Vs(t) {
  let e, n;
  return e = new ht({
    props: {
      size: "small",
      $$slots: { default: [ag] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", t[8]), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & 1048576 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function ag(t) {
  let e;
  return {
    c() {
      e = j("arrow_back");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function qs(t) {
  let e, n = t[15].Name + "", r, i = t[19] == t[2].length - 1 ? "" : " /", o, s, l, a, c;
  function u() {
    return t[9](t[15]);
  }
  return {
    c() {
      e = I("div"), r = j(n), o = j(i), s = U(), $(e, "class", l = t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(d, f) {
      D(d, e, f), A(e, r), A(e, o), A(e, s), a || (c = ie(e, "click", u), a = !0);
    },
    p(d, f) {
      t = d, f & 4 && n !== (n = t[15].Name + "") && Se(r, n), f & 4 && i !== (i = t[19] == t[2].length - 1 ? "" : " /") && Se(o, i), f & 2 && l !== (l = t[1]`cursor-pointer hover:bg-slate-100 p-1`) && $(e, "class", l);
    },
    d(d) {
      d && R(e), a = !1, c();
    }
  };
}
function Gs(t) {
  let e, n, r;
  function i(...o) {
    return t[10](t[15], ...o);
  }
  return n = new ht({
    props: {
      $$slots: { default: [cg] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = I("div"), z(n.$$.fragment);
    },
    m(o, s) {
      D(o, e, s), F(n, e, null), r = !0;
    },
    p(o, s) {
      t = o;
      const l = {};
      s & 1048576 && (l.$$scope = { dirty: s, ctx: t }), n.$set(l);
    },
    i(o) {
      r || (x(n.$$.fragment, o), r = !0);
    },
    o(o) {
      P(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(e), B(n);
    }
  };
}
function cg(t) {
  let e;
  return {
    c() {
      e = j("done");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Js(t) {
  var p;
  let e, n, r = ((p = t[15]) == null ? void 0 : p.Name) + "", i, o, s, l, a, c, u, d, f = t[15].Root && Gs(t);
  function h() {
    return t[11](t[15]);
  }
  return {
    c() {
      e = I("div"), n = I("div"), i = j(r), s = U(), f && f.c(), l = U(), $(n, "class", o = t[1]`mt-2 ml-2 `), $(e, "class", a = t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(g, m) {
      D(g, e, m), A(e, n), A(n, i), A(e, s), f && f.m(e, null), A(e, l), c = !0, u || (d = ie(e, "click", h), u = !0);
    },
    p(g, m) {
      var T;
      t = g, (!c || m & 8) && r !== (r = ((T = t[15]) == null ? void 0 : T.Name) + "") && Se(i, r), (!c || m & 2 && o !== (o = t[1]`mt-2 ml-2 `)) && $(n, "class", o), t[15].Root ? f ? (f.p(t, m), m & 8 && x(f, 1)) : (f = Gs(t), f.c(), x(f, 1), f.m(e, l)) : f && (me(), P(f, 1, 1, () => {
        f = null;
      }), ve()), (!c || m & 2 && a !== (a = t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && $(e, "class", a);
    },
    i(g) {
      c || (x(f), c = !0);
    },
    o(g) {
      P(f), c = !1;
    },
    d(g) {
      g && R(e), f && f.d(), u = !1, d();
    }
  };
}
function ug(t) {
  let e, n, r, i, o, s, l, a, c, u, d, f, h, p, g, m = t[0] && Vs(t), T = t[2], b = [];
  for (let w = 0; w < T.length; w += 1)
    b[w] = qs(Ws(t, T, w));
  let _ = t[3], y = [];
  for (let w = 0; w < _.length; w += 1)
    y[w] = Js(zs(t, _, w));
  const v = (w) => P(y[w], 1, 1, () => {
    y[w] = null;
  });
  return {
    c() {
      e = I("div"), n = I("div"), m && m.c(), r = U(), i = I("div"), o = j("Mandant ausw\xE4hlen"), a = U(), c = I("div");
      for (let w = 0; w < b.length; w += 1)
        b[w].c();
      d = U(), f = I("div");
      for (let w = 0; w < y.length; w += 1)
        y[w].c();
      $(i, "class", s = t[1]`font-bold text-gray-600 text-lg`), $(n, "class", l = t[1]`flex items-center`), $(c, "class", u = t[1]`flex mb-1`), yi(f, "grid-auto-rows", "60px"), $(f, "class", h = t[1]`grid grid-cols-2 gap-2 h-full overflow-auto`), $(e, "class", p = t[1]`w-full overflow-hidden`);
    },
    m(w, E) {
      D(w, e, E), A(e, n), m && m.m(n, null), A(n, r), A(n, i), A(i, o), A(e, a), A(e, c);
      for (let S = 0; S < b.length; S += 1)
        b[S].m(c, null);
      A(e, d), A(e, f);
      for (let S = 0; S < y.length; S += 1)
        y[S].m(f, null);
      g = !0;
    },
    p(w, [E]) {
      if (w[0] ? m ? (m.p(w, E), E & 1 && x(m, 1)) : (m = Vs(w), m.c(), x(m, 1), m.m(n, r)) : m && (me(), P(m, 1, 1, () => {
        m = null;
      }), ve()), (!g || E & 2 && s !== (s = w[1]`font-bold text-gray-600 text-lg`)) && $(i, "class", s), (!g || E & 2 && l !== (l = w[1]`flex items-center`)) && $(n, "class", l), E & 70) {
        T = w[2];
        let S;
        for (S = 0; S < T.length; S += 1) {
          const N = Ws(w, T, S);
          b[S] ? b[S].p(N, E) : (b[S] = qs(N), b[S].c(), b[S].m(c, null));
        }
        for (; S < b.length; S += 1)
          b[S].d(1);
        b.length = T.length;
      }
      if ((!g || E & 2 && u !== (u = w[1]`flex mb-1`)) && $(c, "class", u), E & 170) {
        _ = w[3];
        let S;
        for (S = 0; S < _.length; S += 1) {
          const N = zs(w, _, S);
          y[S] ? (y[S].p(N, E), x(y[S], 1)) : (y[S] = Js(N), y[S].c(), x(y[S], 1), y[S].m(f, null));
        }
        for (me(), S = _.length; S < y.length; S += 1)
          v(S);
        ve();
      }
      (!g || E & 2 && h !== (h = w[1]`grid grid-cols-2 gap-2 h-full overflow-auto`)) && $(f, "class", h), (!g || E & 2 && p !== (p = w[1]`w-full overflow-hidden`)) && $(e, "class", p);
    },
    i(w) {
      if (!g) {
        x(m);
        for (let E = 0; E < _.length; E += 1)
          x(y[E]);
        g = !0;
      }
    },
    o(w) {
      P(m), y = y.filter(Boolean);
      for (let E = 0; E < y.length; E += 1)
        P(y[E]);
      g = !1;
    },
    d(w) {
      w && R(e), m && m.d(), Rt(b, w), Rt(y, w);
    }
  };
}
function fg(t, e, n) {
  let r = Re(Sn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const a = Ve();
  async function c() {
    const b = await r.getTopTenants();
    if (b.length === 1) {
      const _ = b[0];
      if (_.Root == null) {
        d(_);
        return;
      }
    }
    n(2, s = [new Ga({ Id: "start", Name: "Start" })]), n(3, l = b);
  }
  async function u(b) {
    const _ = await r.getNextTenants(b.Id);
    n(3, l = _);
  }
  async function d(b) {
    n(2, s = [...s, b]), u(b);
  }
  async function f(b) {
    if (b.Id == "start") {
      c();
      return;
    }
    const _ = s.findIndex((y) => y.Id === b.Id);
    n(2, s = s.slice(0, _ + 1)), u(b);
  }
  function h(b, _) {
    console.log(b, _), b.detail.stopPropagation(), a("tenantSelected", { tenant: _ });
  }
  c();
  const p = () => a("back"), g = (b) => f(b), m = (b, _) => h(_, b), T = (b) => d(b);
  return t.$$set = (b) => {
    "allowBack" in b && n(0, i = b.allowBack), "tw" in b && n(1, o = b.tw);
  }, [
    i,
    o,
    s,
    l,
    a,
    d,
    f,
    h,
    p,
    g,
    m,
    T
  ];
}
class Pa extends he {
  constructor(e) {
    super(), de(this, e, fg, ug, se, { allowBack: 0, tw: 1 });
  }
}
function dg(t) {
  let e, n, r, i, o, s, l, a, c, u, d, f, h, p;
  return n = new sh({
    props: {
      selectMultiple: t[1],
      entityType: t[0],
      selectedTenant: t[4]
    }
  }), n.$on("changeTenant", t[11]), l = new lg({
    props: {
      entityType: t[0],
      selectMultiple: t[1]
    }
  }), l.$on("acceptSelection", t[12]), u = new ig({
    props: {
      selectMultiple: t[1],
      entityType: t[0],
      additionalFilter: t[2]
    }
  }), {
    c() {
      e = I("div"), z(n.$$.fragment), i = U(), o = I("div"), s = I("div"), z(l.$$.fragment), a = U(), c = I("div"), z(u.$$.fragment), $(e, "class", r = t[3]`flex-1 border-r border-slate-400 overflow-hidden`), $(c, "class", d = t[3]`flex-1 overflow-hidden mt-3`), $(s, "class", f = t[3]`flex flex-col h-full overflow-hidden`), $(o, "class", h = t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(g, m) {
      D(g, e, m), F(n, e, null), D(g, i, m), D(g, o, m), A(o, s), F(l, s, null), A(s, a), A(s, c), F(u, c, null), p = !0;
    },
    p(g, m) {
      const T = {};
      m & 2 && (T.selectMultiple = g[1]), m & 1 && (T.entityType = g[0]), m & 16 && (T.selectedTenant = g[4]), n.$set(T), (!p || m & 8 && r !== (r = g[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && $(e, "class", r);
      const b = {};
      m & 1 && (b.entityType = g[0]), m & 2 && (b.selectMultiple = g[1]), l.$set(b);
      const _ = {};
      m & 2 && (_.selectMultiple = g[1]), m & 1 && (_.entityType = g[0]), m & 4 && (_.additionalFilter = g[2]), u.$set(_), (!p || m & 8 && d !== (d = g[3]`flex-1 overflow-hidden mt-3`)) && $(c, "class", d), (!p || m & 8 && f !== (f = g[3]`flex flex-col h-full overflow-hidden`)) && $(s, "class", f), (!p || m & 8 && h !== (h = g[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && $(o, "class", h);
    },
    i(g) {
      p || (x(n.$$.fragment, g), x(l.$$.fragment, g), x(u.$$.fragment, g), p = !0);
    },
    o(g) {
      P(n.$$.fragment, g), P(l.$$.fragment, g), P(u.$$.fragment, g), p = !1;
    },
    d(g) {
      g && R(e), B(n), g && R(i), g && R(o), B(l), B(u);
    }
  };
}
function hg(t) {
  let e, n;
  return e = new Pa({
    props: {
      tw: t[3],
      allowBack: !!t[4]
    }
  }), e.$on("back", t[9]), e.$on("tenantSelected", t[10]), {
    c() {
      z(e.$$.fragment);
    },
    m(r, i) {
      F(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & 8 && (o.tw = r[3]), i & 16 && (o.allowBack = !!r[4]), e.$set(o);
    },
    i(r) {
      n || (x(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      B(e, r);
    }
  };
}
function pg(t) {
  let e, n, r, i, o;
  const s = [hg, dg], l = [];
  function a(c, u) {
    return c[5] ? 0 : 1;
  }
  return n = a(t), r = l[n] = s[n](t), {
    c() {
      e = I("div"), r.c(), $(e, "class", i = t[3]`flex w-full h-full`);
    },
    m(c, u) {
      D(c, e, u), l[n].m(e, null), o = !0;
    },
    p(c, [u]) {
      let d = n;
      n = a(c), n === d ? l[n].p(c, u) : (me(), P(l[d], 1, 1, () => {
        l[d] = null;
      }), ve(), r = l[n], r ? r.p(c, u) : (r = l[n] = s[n](c), r.c()), x(r, 1), r.m(e, null)), (!o || u & 8 && i !== (i = c[3]`flex w-full h-full`)) && $(e, "class", i);
    },
    i(c) {
      o || (x(r), o = !0);
    },
    o(c) {
      P(r), o = !1;
    },
    d(c) {
      c && R(e), l[n].d();
    }
  };
}
function gg(t, e, n) {
  let { entityType: r = G.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = Be } = e, l = Re(It), a = Re(Sn), c, u = !1, d = [], f = Ve(), h = xt.subscribe((S) => {
    S.selectedTenant ? (n(5, u = !1), m(S.selectedTenant)) : n(5, u = !0);
  }), p = Tt.subscribe((S) => {
    S.selectedEntities && !i ? (g(S.selectedEntities), f("selectedEntities", S.selectedEntities[0])) : d = S.selectedEntities;
  });
  function g(S) {
    const N = tn(), L = N.value.lastSelectedEntities, X = S.filter((ee) => !L.includes(ee.Id)).map((ee) => ee.Id);
    L.unshift(...X), L.splice(5), N.update((ee) => ({
      ...ee,
      lastSelectedEntities: L
    }));
  }
  async function m(S) {
    try {
      n(4, c = await a.getTenantViewById(S));
    } catch (N) {
      console.error(N), n(5, u = !0);
    }
  }
  async function T(S) {
    console.log("Tenant selected", S);
    const N = await l.getEntityById(G.Group, S.Root);
    xt.update((L) => ({ ...L, selectedTenant: S.Id })), tn().update((L) => ({ ...L, selectedGroup: N }));
  }
  function b() {
    n(5, u = !0);
  }
  function _() {
    g(d), f("selectedEntities", d);
  }
  vt(() => {
    h.unsubscribe(), p.unsubscribe();
  });
  const y = () => n(5, u = !1), v = (S) => T(S.detail.tenant), w = () => b(), E = () => _();
  return t.$$set = (S) => {
    "entityType" in S && n(0, r = S.entityType), "selectMultiple" in S && n(1, i = S.selectMultiple), "additionalFilter" in S && n(2, o = S.additionalFilter), "tw" in S && n(3, s = S.tw);
  }, t.$$.update = () => {
    t.$$.dirty & 8 && ut("tw", s);
  }, [
    r,
    i,
    o,
    s,
    c,
    u,
    T,
    b,
    _,
    y,
    v,
    w,
    E
  ];
}
class Ia extends he {
  constructor(e) {
    super(), de(this, e, gg, pg, se, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
function mg(t) {
  let e, n, r, i, o, s, l, a, c = {
    selectMultiple: t[1],
    entityType: t[0],
    additionalFilter: t[2]
  };
  return r = new Ia({ props: c }), t[9](r), r.$on("selectedEntities", t[10]), {
    c() {
      e = I("div"), n = I("div"), z(r.$$.fragment), $(n, "class", i = t[3]`h-full w-full`), $(e, "class", o = t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, d) {
      D(u, e, d), A(e, n), F(r, n, null), t[11](e), s = !0, l || (a = [
        ie(e, "keydown", t[6]),
        ie(e, "click", vg)
      ], l = !0);
    },
    p(u, [d]) {
      const f = {};
      d & 2 && (f.selectMultiple = u[1]), d & 1 && (f.entityType = u[0]), d & 4 && (f.additionalFilter = u[2]), r.$set(f), (!s || d & 8 && i !== (i = u[3]`h-full w-full`)) && $(n, "class", i), (!s || d & 8 && o !== (o = u[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`)) && $(e, "class", o);
    },
    i(u) {
      s || (x(r.$$.fragment, u), s = !0);
    },
    o(u) {
      P(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && R(e), t[9](null), B(r), t[11](null), l = !1, it(a);
    }
  };
}
const vg = (t) => t.stopPropagation();
function _g(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = G.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = Be } = e, a = Re("PopupService", new pr(document.body)), c, u, d;
  const f = Ve();
  function h(y, v) {
    y && !d && v ? (d = a.openPopup("entity-select-dialog", v, {
      backdrop: !0,
      closeOnClickOutside: !0,
      positioning: "center",
      inTransitionClassList: "scale-100",
      inTransitionDuration: 125,
      outTransitionClassList: "!scale-50",
      outTransitionDuration: 125
    }), d.afterClosed.then(() => {
      console.log("dialog closed", u), u == null || u.$destroy(), d = null;
    })) : p();
  }
  function p() {
    console.log("closeDialog"), d == null || d.close();
  }
  function g(y) {
    console.log(y), y.key === "Escape" && p();
  }
  function m(y) {
    f("selectedEntities", y.detail);
  }
  function T(y) {
    ke[y ? "unshift" : "push"](() => {
      u = y, n(5, u);
    });
  }
  const b = (y) => m(y);
  function _(y) {
    ke[y ? "unshift" : "push"](() => {
      c = y, n(4, c);
    });
  }
  return t.$$set = (y) => {
    "open" in y && n(8, r = y.open), "entityType" in y && n(0, i = y.entityType), "selectMultiple" in y && n(1, o = y.selectMultiple), "additionalFilter" in y && n(2, s = y.additionalFilter), "tw" in y && n(3, l = y.tw);
  }, t.$$.update = () => {
    t.$$.dirty & 272 && h(r, c);
  }, [
    i,
    o,
    s,
    l,
    c,
    u,
    g,
    m,
    r,
    T,
    b,
    _
  ];
}
class bg extends he {
  constructor(e) {
    super(), de(this, e, _g, mg, se, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class Xs {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new bg({
      target: document.body,
      props: {
        entityType: e,
        open: !1,
        selectMultiple: n,
        additionalFilter: r
      }
    });
    return setTimeout(() => {
      i.$set({ open: !0 });
    }, 50), new Promise((o, s) => {
      i.$on("selectedEntities", (l) => {
        i.$set({ open: !1 }), setTimeout(() => {
          i.$destroy();
        }, 200), o(l.detail);
      });
    });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rr = window, po = rr.ShadowRoot && (rr.ShadyCSS === void 0 || rr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, go = Symbol(), Ks = /* @__PURE__ */ new WeakMap();
class Ra {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== go)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (po && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = Ks.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Ks.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const yg = (t) => new Ra(typeof t == "string" ? t : t + "", void 0, go), mo = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new Ra(n, t, go);
}, wg = (t, e) => {
  po ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = rr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, Ys = po ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return yg(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ii;
const vr = window, Qs = vr.trustedTypes, Sg = Qs ? Qs.emptyScript : "", Zs = vr.reactiveElementPolyfillSupport, Ii = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Sg : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let n = t;
  switch (e) {
    case Boolean:
      n = t !== null;
      break;
    case Number:
      n = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(t);
      } catch {
        n = null;
      }
  }
  return n;
} }, Da = (t, e) => e !== t && (e == e || t == t), oi = { attribute: !0, type: String, converter: Ii, reflect: !1, hasChanged: Da };
class Bt extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(e) {
    var n;
    (n = this.h) !== null && n !== void 0 || (this.h = []), this.h.push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((n, r) => {
      const i = this._$Ep(r, n);
      i !== void 0 && (this._$Ev.set(i, r), e.push(i));
    }), e;
  }
  static createProperty(e, n = oi) {
    if (n.state && (n.attribute = !1), this.finalize(), this.elementProperties.set(e, n), !n.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const r = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, r, n);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, n, r) {
    return { get() {
      return this[n];
    }, set(i) {
      const o = this[e];
      this[n] = i, this.requestUpdate(e, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || oi;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const n = this.properties, r = [...Object.getOwnPropertyNames(n), ...Object.getOwnPropertySymbols(n)];
      for (const i of r)
        this.createProperty(i, n[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const n = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r)
        n.unshift(Ys(i));
    } else
      e !== void 0 && n.push(Ys(e));
    return n;
  }
  static _$Ep(e, n) {
    const r = n.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  u() {
    var e;
    this._$E_ = new Promise((n) => this.enableUpdating = n), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((n) => n(this));
  }
  addController(e) {
    var n, r;
    ((n = this._$ES) !== null && n !== void 0 ? n : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) === null || r === void 0 || r.call(e));
  }
  removeController(e) {
    var n;
    (n = this._$ES) === null || n === void 0 || n.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, n) => {
      this.hasOwnProperty(n) && (this._$Ei.set(n, this[n]), delete this[n]);
    });
  }
  createRenderRoot() {
    var e;
    const n = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return wg(n, this.constructor.elementStyles), n;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
      var r;
      return (r = n.hostConnected) === null || r === void 0 ? void 0 : r.call(n);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
      var r;
      return (r = n.hostDisconnected) === null || r === void 0 ? void 0 : r.call(n);
    });
  }
  attributeChangedCallback(e, n, r) {
    this._$AK(e, r);
  }
  _$EO(e, n, r = oi) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : Ii).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : Ii;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || Da)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (n) {
      Promise.reject(n);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, o) => this[o] = i), this._$Ei = void 0);
    let n = !1;
    const r = this._$AL;
    try {
      n = this.shouldUpdate(r), n ? (this.willUpdate(r), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var o;
        return (o = i.hostUpdate) === null || o === void 0 ? void 0 : o.call(i);
      }), this.update(r)) : this._$Ek();
    } catch (i) {
      throw n = !1, this._$Ek(), i;
    }
    n && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var n;
    (n = this._$ES) === null || n === void 0 || n.forEach((r) => {
      var i;
      return (i = r.hostUpdated) === null || i === void 0 ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((n, r) => this._$EO(r, this[r], n)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Bt.finalized = !0, Bt.elementProperties = /* @__PURE__ */ new Map(), Bt.elementStyles = [], Bt.shadowRootOptions = { mode: "open" }, Zs == null || Zs({ ReactiveElement: Bt }), ((ii = vr.reactiveElementVersions) !== null && ii !== void 0 ? ii : vr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var si;
const _r = window, nn = _r.trustedTypes, el = nn ? nn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, dt = `lit$${(Math.random() + "").slice(9)}$`, Oa = "?" + dt, Cg = `<${Oa}>`, rn = document, xn = (t = "") => rn.createComment(t), An = (t) => t === null || typeof t != "object" && typeof t != "function", Na = Array.isArray, Eg = (t) => Na(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", mn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tl = /-->/g, nl = />/g, wt = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), rl = /'/g, il = /"/g, Ua = /^(?:script|style|textarea|title)$/i, on = Symbol.for("lit-noChange"), ce = Symbol.for("lit-nothing"), ol = /* @__PURE__ */ new WeakMap(), kg = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new On(e.insertBefore(xn(), l), l, void 0, n != null ? n : {});
  }
  return s._$AI(t), s;
}, qt = rn.createTreeWalker(rn, 129, null, !1), $g = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = mn;
  for (let a = 0; a < n; a++) {
    const c = t[a];
    let u, d, f = -1, h = 0;
    for (; h < c.length && (s.lastIndex = h, d = s.exec(c), d !== null); )
      h = s.lastIndex, s === mn ? d[1] === "!--" ? s = tl : d[1] !== void 0 ? s = nl : d[2] !== void 0 ? (Ua.test(d[2]) && (i = RegExp("</" + d[2], "g")), s = wt) : d[3] !== void 0 && (s = wt) : s === wt ? d[0] === ">" ? (s = i != null ? i : mn, f = -1) : d[1] === void 0 ? f = -2 : (f = s.lastIndex - d[2].length, u = d[1], s = d[3] === void 0 ? wt : d[3] === '"' ? il : rl) : s === il || s === rl ? s = wt : s === tl || s === nl ? s = mn : (s = wt, i = void 0);
    const p = s === wt && t[a + 1].startsWith("/>") ? " " : "";
    o += s === mn ? c + Cg : f >= 0 ? (r.push(u), c.slice(0, f) + "$lit$" + c.slice(f) + dt + p) : c + dt + (f === -2 ? (r.push(void 0), a) : p);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [el !== void 0 ? el.createHTML(l) : l, r];
};
class Pn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, a = this.parts, [c, u] = $g(e, n);
    if (this.el = Pn.createElement(c, r), qt.currentNode = this.el.content, n === 2) {
      const d = this.el.content, f = d.firstChild;
      f.remove(), d.append(...f.childNodes);
    }
    for (; (i = qt.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const d = [];
          for (const f of i.getAttributeNames())
            if (f.endsWith("$lit$") || f.startsWith(dt)) {
              const h = u[s++];
              if (d.push(f), h !== void 0) {
                const p = i.getAttribute(h.toLowerCase() + "$lit$").split(dt), g = /([.?@])?(.*)/.exec(h);
                a.push({ type: 1, index: o, name: g[2], strings: p, ctor: g[1] === "." ? xg : g[1] === "?" ? Pg : g[1] === "@" ? Ig : Tr });
              } else
                a.push({ type: 6, index: o });
            }
          for (const f of d)
            i.removeAttribute(f);
        }
        if (Ua.test(i.tagName)) {
          const d = i.textContent.split(dt), f = d.length - 1;
          if (f > 0) {
            i.textContent = nn ? nn.emptyScript : "";
            for (let h = 0; h < f; h++)
              i.append(d[h], xn()), qt.nextNode(), a.push({ type: 2, index: ++o });
            i.append(d[f], xn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Oa)
          a.push({ type: 2, index: o });
        else {
          let d = -1;
          for (; (d = i.data.indexOf(dt, d + 1)) !== -1; )
            a.push({ type: 7, index: o }), d += dt.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = rn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function sn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === on)
    return e;
  let a = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const c = An(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== c && ((o = a == null ? void 0 : a._$AO) === null || o === void 0 || o.call(a, !1), c === void 0 ? a = void 0 : (a = new c(t), a._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = a : n._$Cu = a), a !== void 0 && (e = sn(t, a._$AS(t, e.values), a, r)), e;
}
class Tg {
  constructor(e, n) {
    this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(e) {
    var n;
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : rn).importNode(r, !0);
    qt.currentNode = o;
    let s = qt.nextNode(), l = 0, a = 0, c = i[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let u;
        c.type === 2 ? u = new On(s, s.nextSibling, this, e) : c.type === 1 ? u = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (u = new Rg(s, this, e)), this.v.push(u), c = i[++a];
      }
      l !== (c == null ? void 0 : c.index) && (s = qt.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class On {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = ce, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var e, n;
    return (n = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && n !== void 0 ? n : this._$C_;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && e.nodeType === 11 && (e = n.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, n = this) {
    e = sn(this, e, n), An(e) ? e === ce || e == null || e === "" ? (this._$AH !== ce && this._$AR(), this._$AH = ce) : e !== this._$AH && e !== on && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : Eg(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== ce && An(this._$AH) ? this._$AA.nextSibling.data = e : this.k(rn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Pn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new Tg(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = ol.get(e.strings);
    return n === void 0 && ol.set(e.strings, n = new Pn(e)), n;
  }
  O(e) {
    Na(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new On(this.S(xn()), this.S(xn()), this, this.options)) : r = n[i], r._$AI(o), i++;
    i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
  }
  _$AR(e = this._$AA.nextSibling, n) {
    var r;
    for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, n); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var n;
    this._$AM === void 0 && (this._$C_ = e, (n = this._$AP) === null || n === void 0 || n.call(this, e));
  }
}
class Tr {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = ce, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = ce;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, n = this, r, i) {
    const o = this.strings;
    let s = !1;
    if (o === void 0)
      e = sn(this, e, n, 0), s = !An(e) || e !== this._$AH && e !== on, s && (this._$AH = e);
    else {
      const l = e;
      let a, c;
      for (e = o[0], a = 0; a < o.length - 1; a++)
        c = sn(this, l[r + a], n, a), c === on && (c = this._$AH[a]), s || (s = !An(c) || c !== this._$AH[a]), c === ce ? e = ce : e !== ce && (e += (c != null ? c : "") + o[a + 1]), this._$AH[a] = c;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === ce ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "");
  }
}
class xg extends Tr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === ce ? void 0 : e;
  }
}
const Ag = nn ? nn.emptyScript : "";
class Pg extends Tr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== ce ? this.element.setAttribute(this.name, Ag) : this.element.removeAttribute(this.name);
  }
}
class Ig extends Tr {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = sn(this, e, n, 0)) !== null && r !== void 0 ? r : ce) === on)
      return;
    const i = this._$AH, o = e === ce && i !== ce || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== ce && (i === ce || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Rg {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    sn(this, e);
  }
}
const sl = _r.litHtmlPolyfillSupport;
sl == null || sl(Pn, On), ((si = _r.litHtmlVersions) !== null && si !== void 0 ? si : _r.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var li, ai;
class Pt extends Bt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, n;
    const r = super.createRenderRoot();
    return (e = (n = this.renderOptions).renderBefore) !== null && e !== void 0 || (n.renderBefore = r.firstChild), r;
  }
  update(e) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = kg(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return on;
  }
}
Pt.finalized = !0, Pt._$litElement$ = !0, (li = globalThis.litElementHydrateSupport) === null || li === void 0 || li.call(globalThis, { LitElement: Pt });
const ll = globalThis.litElementPolyfillSupport;
ll == null || ll({ LitElement: Pt });
((ai = globalThis.litElementVersions) !== null && ai !== void 0 ? ai : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dg = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Je(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : Dg(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ci;
((ci = window.HTMLSlotElement) === null || ci === void 0 ? void 0 : ci.prototype.assignedElements) != null;
const Og = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class mt {
  constructor(e) {
    var n;
    this._theme = e, e || (this._theme = (n = this._theme) != null ? n : Og);
  }
  createTwindContext(e) {
    if (e)
      return vp({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: Be, styleSheet: null };
    {
      const n = ba({ target: new CSSStyleSheet() }), { tw: r } = Ta({
        sheet: n,
        theme: {
          extend: this._buildTwindThemeConfig()
        }
      });
      return { tw: r, styleSheet: n };
    }
  }
  getTheme() {
    return this._theme;
  }
  _buildTwindThemeConfig() {
    return {
      colors: this._theme,
      boxShadow: {
        sm: "0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)",
        md: "0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",
        lg: "0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)",
        xl: "0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)"
      }
    };
  }
}
var Ng = Object.defineProperty, Ug = Object.getOwnPropertyDescriptor, Ma = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Ug(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Ng(e, n, i), i;
};
const { tw: Mg, styleSheet: Hg } = Re(mt, new mt()).createTwindContext(), jg = mo`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
class xr extends Pt {
  constructor() {
    super();
    st(this, "_element");
    St(pr, new pr(document.body));
  }
  render() {
    var r;
    (r = this._element) == null || r.$destroy();
    const n = document.createElement("div");
    return n.style.width = "100%", n.style.height = "100%", n.style.overflow = "hidden", this._trySetupEntitySelect(this.shadowRoot), n;
  }
  _trySetupEntitySelect(n) {
    if (!this._isValidEntityType(this.entityType))
      return;
    const r = this.getAttribute("multiple") === "true", i = JSON.parse(this.getAttribute("filter") || "{}");
    this._element = new Ia({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Mg
      }
    }), this._element.$on("selectedEntities", (o) => {
      console.log("selectedEntities", o), this.dispatchEvent(new CustomEvent("selected", {
        detail: o.detail,
        bubbles: !0,
        composed: !0
      }));
    }), console.log("connectedCallback", this._element);
  }
  _isValidEntityType(n) {
    return Object.values(G).includes(n);
  }
}
st(xr, "styles", [Hg.target, jg]);
Ma([
  Je({ type: String, attribute: "entitytype" })
], xr.prototype, "entityType", 2);
Ma([
  Je({ type: Boolean, attribute: "multiple" })
], xr.prototype, "multiple", 2);
var Lg = Object.defineProperty, Fg = Object.getOwnPropertyDescriptor, _t = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Fg(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Lg(e, n, i), i;
};
const { tw: Bg, styleSheet: zg } = Re(mt, new mt()).createTwindContext(), Wg = mo`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
class Xe extends Pt {
  constructor() {
    super();
    st(this, "_select");
    this.multiple = !1, this.options = [];
  }
  render() {
    return document.createElement("div"), this._select = new Aa({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayValue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffix$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: Bg
      }
    }), this._select.$on("valueChanged", (n) => {
      console.log(n), this.dispatchEvent(new CustomEvent("valueChanged", {
        detail: n.detail
      }));
    }), null;
  }
  disconnectedCallback() {
    var n;
    super.disconnectedCallback(), (n = this._select) == null || n.$destroy();
  }
}
st(Xe, "styles", [zg.target, Wg]);
_t([
  Je({ attribute: "value", type: String })
], Xe.prototype, "value", 2);
_t([
  Je({ attribute: "arrayValue", type: Array })
], Xe.prototype, "arrayValue", 2);
_t([
  Je({ attribute: "multiple", type: Boolean })
], Xe.prototype, "multiple", 2);
_t([
  Je({ attribute: "options", type: Array })
], Xe.prototype, "options", 2);
_t([
  Je({ attribute: "placeholder", type: String })
], Xe.prototype, "placeholder", 2);
_t([
  Je({ attribute: "container$class", type: String })
], Xe.prototype, "container$class", 2);
_t([
  Je({ attribute: "textfield$class", type: String })
], Xe.prototype, "textfield$class", 2);
_t([
  Je({ attribute: "suffix$class", type: String })
], Xe.prototype, "suffix$class", 2);
const { tw: Vg, styleSheet: lm } = Re(mt, new mt()).createTwindContext();
mo`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
class qg extends Pt {
  constructor() {
    super();
    st(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new Pa({
      target: n,
      props: {
        tw: Vg
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
const Gg = xr, Jg = qg;
function am() {
  ui("audako-entity-select", Gg), ui("audako-tenant-select", Jg), ui("audako-select", Xe), Re(mt, new mt()).createTwindContext(!0);
}
function cm(t, e) {
  const n = new It(t, e);
  St(mi, new mi(t, e)), St(It, n), St(Sn, new Sn(t, e)), St(Cn, new Cn(n)), St(gi, new gi(t, e)), St(Xs, new Xs());
}
function ui(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  cn as BaseHttpService,
  wo as CompressionInterval,
  al as ConditionSettings,
  ze as ConfigurationEntity,
  Ba as Dashboard,
  Xa as DashboardTab,
  qa as DataConnection,
  Qg as DataConnectionFailureConditionSettings,
  Zg as DataConnectionSettings,
  Va as DataSource,
  gi as DataSourceHttpService,
  _o as DataSourceType,
  La as EntityHttpEndpoints,
  It as EntityHttpService,
  Kg as EntityIcons,
  Cn as EntityNameService,
  Gg as EntitySelect,
  Xs as EntitySelectDialogService,
  G as EntityType,
  Za as EntityTypeClassMapping,
  im as EntityUtils,
  Ka as EventCategory,
  Wa as EventCondition,
  vo as EventConditionSettingsType,
  za as EventDefinition,
  ir as Field,
  Ya as Formula,
  Fa as Group,
  sm as HistoricalValueService,
  ns as LiveHubEvent,
  bn as LiveHubMethod,
  mi as LiveValueService,
  Qa as ProcessImage,
  Ja as Signal,
  nm as SignalAnalogSettings,
  Yg as SignalConditionSettings,
  rm as SignalCounterSettings,
  tm as SignalDigitalSettings,
  Ri as SignalSettings,
  yo as SignalType,
  rs as SubscriptionPrefix,
  Sn as TenantHttpService,
  Jg as TenantSelect,
  Ga as TenantView,
  em as UserProfile,
  om as UserProfileHttpService,
  cm as registerCoreServices,
  am as registerCustomElements,
  Re as resolveService,
  St as tryRegisterService
};
