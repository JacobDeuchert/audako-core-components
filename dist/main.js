var Ki = Object.defineProperty;
var Qi = (n, e, t) => e in n ? Ki(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var vt = (n, e, t) => (Qi(n, typeof e != "symbol" ? e + "" : e, t), t);
var X;
(function(n) {
  n.Group = "Group", n.Signal = "Signal", n.Formula = "Formula", n.Dashboard = "Dashboard", n.DashboardTab = "DashboardTab", n.DataConnection = "DataConnection", n.DataSource = "DataSource", n.EventCondition = "EventCondition", n.EventDefinition = "EventDefinition", n.EventCategory = "EventCategory", n.ProcessImage = "ProcessImage";
})(X || (X = {}));
const Hf = {
  [X.Group]: "fas fa-folder",
  [X.Dashboard]: "adk adk-dashboard",
  [X.Signal]: "fas fa-code",
  [X.DataConnection]: "fas fa-circle-notch",
  [X.DataSource]: "fas fa-server"
}, Zi = {
  Group: "/base/Group",
  Signal: "/daq/Signal",
  Dashboard: "/base/Dashboard",
  DashboardTab: "/base/DashboardTab",
  DataConnection: "/daq/DataConnection",
  DataSource: "/daq/DataSource",
  EventCondition: "/base/condition",
  ProcessImage: "/scada/ProcessImage",
  EventCategory: "/base/EventCategory",
  EventDefinition: "/base/EventDefinition"
};
class Ir {
  constructor(e = null, t = []) {
    this.Value = e, this.OOAttributes = t;
  }
}
class Ge {
  constructor(e) {
    this.Name = new Ir(), this.Description = new Ir(), this.AdditionalFields = {}, Object.assign(this, e);
  }
}
class Lf extends Ge {
}
class Bf extends Ge {
}
class Ff extends Ge {
}
class qf extends Ge {
}
var Tr;
(function(n) {
  n.SignalConditionSettings = "SignalConditionSettings", n.DataConnectionFailureConditionSettings = "DataConnectionFailureConditionSettings";
})(Tr || (Tr = {}));
class Jo {
}
class Vf extends Jo {
}
class Wf extends Jo {
}
var Pr;
(function(n) {
  n.EdgeGateway = "EdgeGateway", n.DataAdapter = "DataAdapter";
})(Pr || (Pr = {}));
class Gf extends Ge {
}
var Rr;
(function(n) {
  n.S7 = "S7", n.ModBus = "ModBus";
})(Rr || (Rr = {}));
class Xf extends Ge {
}
class Jf {
}
class es {
  constructor(e) {
    Object.assign(this, e);
  }
}
class Yf {
}
var Ar;
(function(n) {
  n.AnalogInput = "AnalogInput", n.AnalogInOut = "AnalogInOut", n.DigitalInput = "DigitalInput", n.DigitalInOut = "DigitalInOut", n.Counter = "Counter", n.UniversalInput = "UniservalInput", n.UniversalInOut = "UniversalInOut";
})(Ar || (Ar = {}));
class Kf extends Ge {
}
class Yn {
}
class Qf extends Yn {
}
class Zf extends Yn {
}
class ed extends Yn {
}
var $r;
(function(n) {
  n.ProcessInterval = "ProcessInterval", n.SubInterval = "SubInterval", n.HourInterval = "HourInterval", n.TwoHourInterval = "TwoHourInterval", n.DayInterval = "DayInterval", n.WeekInterval = "WeekInterval", n.MonthInterval = "MonthInterval", n.QuarterInterval = "QuarterInterval", n.YearInterval = "YearInterval";
})($r || ($r = {}));
function ts(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Yo = { exports: {} }, Kn = { exports: {} }, Ko = function(e, t) {
  return function() {
    for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
      o[i] = arguments[i];
    return e.apply(t, o);
  };
}, ns = Ko, Qn = Object.prototype.toString, Zn = function(n) {
  return function(e) {
    var t = Qn.call(e);
    return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Xe(n) {
  return n = n.toLowerCase(), function(t) {
    return Zn(t) === n;
  };
}
function er(n) {
  return Array.isArray(n);
}
function Wt(n) {
  return typeof n > "u";
}
function rs(n) {
  return n !== null && !Wt(n) && n.constructor !== null && !Wt(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var Qo = Xe("ArrayBuffer");
function os(n) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && Qo(n.buffer), e;
}
function is(n) {
  return typeof n == "string";
}
function ss(n) {
  return typeof n == "number";
}
function Zo(n) {
  return n !== null && typeof n == "object";
}
function zt(n) {
  if (Zn(n) !== "object")
    return !1;
  var e = Object.getPrototypeOf(n);
  return e === null || e === Object.prototype;
}
var as = Xe("Date"), ls = Xe("File"), cs = Xe("Blob"), us = Xe("FileList");
function tr(n) {
  return Qn.call(n) === "[object Function]";
}
function fs(n) {
  return Zo(n) && tr(n.pipe);
}
function ds(n) {
  var e = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || Qn.call(n) === e || tr(n.toString) && n.toString() === e);
}
var hs = Xe("URLSearchParams");
function ps(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function gs() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function nr(n, e) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), er(n))
      for (var t = 0, r = n.length; t < r; t++)
        e.call(null, n[t], t, n);
    else
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && e.call(null, n[o], o, n);
}
function Nn() {
  var n = {};
  function e(o, i) {
    zt(n[i]) && zt(o) ? n[i] = Nn(n[i], o) : zt(o) ? n[i] = Nn({}, o) : er(o) ? n[i] = o.slice() : n[i] = o;
  }
  for (var t = 0, r = arguments.length; t < r; t++)
    nr(arguments[t], e);
  return n;
}
function ws(n, e, t) {
  return nr(e, function(o, i) {
    t && typeof o == "function" ? n[i] = ns(o, t) : n[i] = o;
  }), n;
}
function bs(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function ms(n, e, t, r) {
  n.prototype = Object.create(e.prototype, r), n.prototype.constructor = n, t && Object.assign(n.prototype, t);
}
function vs(n, e, t) {
  var r, o, i, s = {};
  e = e || {};
  do {
    for (r = Object.getOwnPropertyNames(n), o = r.length; o-- > 0; )
      i = r[o], s[i] || (e[i] = n[i], s[i] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}
function ys(n, e, t) {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  var r = n.indexOf(e, t);
  return r !== -1 && r === t;
}
function _s(n) {
  if (!n)
    return null;
  var e = n.length;
  if (Wt(e))
    return null;
  for (var t = new Array(e); e-- > 0; )
    t[e] = n[e];
  return t;
}
var ks = function(n) {
  return function(e) {
    return n && e instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), le = {
  isArray: er,
  isArrayBuffer: Qo,
  isBuffer: rs,
  isFormData: ds,
  isArrayBufferView: os,
  isString: is,
  isNumber: ss,
  isObject: Zo,
  isPlainObject: zt,
  isUndefined: Wt,
  isDate: as,
  isFile: ls,
  isBlob: cs,
  isFunction: tr,
  isStream: fs,
  isURLSearchParams: hs,
  isStandardBrowserEnv: gs,
  forEach: nr,
  merge: Nn,
  extend: ws,
  trim: ps,
  stripBOM: bs,
  inherits: ms,
  toFlatObject: vs,
  kindOf: Zn,
  kindOfTest: Xe,
  endsWith: ys,
  toArray: _s,
  isTypedArray: ks,
  isFileList: us
}, Ke = le;
function Dr(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var ei = function(e, t, r) {
  if (!t)
    return e;
  var o;
  if (r)
    o = r(t);
  else if (Ke.isURLSearchParams(t))
    o = t.toString();
  else {
    var i = [];
    Ke.forEach(t, function(l, c) {
      l === null || typeof l > "u" || (Ke.isArray(l) ? c = c + "[]" : l = [l], Ke.forEach(l, function(d) {
        Ke.isDate(d) ? d = d.toISOString() : Ke.isObject(d) && (d = JSON.stringify(d)), i.push(Dr(c) + "=" + Dr(d));
      }));
    }), o = i.join("&");
  }
  if (o) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}, Ss = le;
function rn() {
  this.handlers = [];
}
rn.prototype.use = function(e, t, r) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
rn.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
rn.prototype.forEach = function(e) {
  Ss.forEach(this.handlers, function(r) {
    r !== null && e(r);
  });
};
var xs = rn, Cs = le, Es = function(e, t) {
  Cs.forEach(e, function(o, i) {
    i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = o, delete e[i]);
  });
}, ti = le;
function st(n, e, t, r, o) {
  Error.call(this), this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), r && (this.request = r), o && (this.response = o);
}
ti.inherits(st, Error, {
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
var ni = st.prototype, ri = {};
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
].forEach(function(n) {
  ri[n] = { value: n };
});
Object.defineProperties(st, ri);
Object.defineProperty(ni, "isAxiosError", { value: !0 });
st.from = function(n, e, t, r, o, i) {
  var s = Object.create(ni);
  return ti.toFlatObject(n, s, function(l) {
    return l !== Error.prototype;
  }), st.call(s, n.message, e, t, r, o), s.name = n.name, i && Object.assign(s, i), s;
};
var gt = st, oi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ye = le;
function Is(n, e) {
  e = e || new FormData();
  var t = [];
  function r(i) {
    return i === null ? "" : ye.isDate(i) ? i.toISOString() : ye.isArrayBuffer(i) || ye.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function o(i, s) {
    if (ye.isPlainObject(i) || ye.isArray(i)) {
      if (t.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(i), ye.forEach(i, function(l, c) {
        if (!ye.isUndefined(l)) {
          var u = s ? s + "." + c : c, d;
          if (l && !s && typeof l == "object") {
            if (ye.endsWith(c, "{}"))
              l = JSON.stringify(l);
            else if (ye.endsWith(c, "[]") && (d = ye.toArray(l))) {
              d.forEach(function(f) {
                !ye.isUndefined(f) && e.append(u, r(f));
              });
              return;
            }
          }
          o(l, u);
        }
      }), t.pop();
    } else
      e.append(s, r(i));
  }
  return o(n), e;
}
var ii = Is, dn, Or;
function Ts() {
  if (Or)
    return dn;
  Or = 1;
  var n = gt;
  return dn = function(t, r, o) {
    var i = o.config.validateStatus;
    !o.status || !i || i(o.status) ? t(o) : r(new n("Request failed with status code " + o.status, [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o));
  }, dn;
}
var hn, Nr;
function Ps() {
  if (Nr)
    return hn;
  Nr = 1;
  var n = le;
  return hn = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(r, o, i, s, a, l) {
        var c = [];
        c.push(r + "=" + encodeURIComponent(o)), n.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), n.isString(s) && c.push("path=" + s), n.isString(a) && c.push("domain=" + a), l === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(r) {
        var o = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return o ? decodeURIComponent(o[3]) : null;
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
  }(), hn;
}
var Rs = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, As = function(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}, $s = Rs, Ds = As, si = function(e, t) {
  return e && !$s(t) ? Ds(e, t) : t;
}, pn, Mr;
function Os() {
  if (Mr)
    return pn;
  Mr = 1;
  var n = le, e = [
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
  return pn = function(r) {
    var o = {}, i, s, a;
    return r && n.forEach(r.split(`
`), function(c) {
      if (a = c.indexOf(":"), i = n.trim(c.substr(0, a)).toLowerCase(), s = n.trim(c.substr(a + 1)), i) {
        if (o[i] && e.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? o[i] = (o[i] ? o[i] : []).concat([s]) : o[i] = o[i] ? o[i] + ", " + s : s;
      }
    }), o;
  }, pn;
}
var gn, jr;
function Ns() {
  if (jr)
    return gn;
  jr = 1;
  var n = le;
  return gn = n.isStandardBrowserEnv() ? function() {
    var t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), o;
    function i(s) {
      var a = s;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return o = i(window.location.href), function(a) {
      var l = n.isString(a) ? i(a) : a;
      return l.protocol === o.protocol && l.host === o.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), gn;
}
var wn, Ur;
function on() {
  if (Ur)
    return wn;
  Ur = 1;
  var n = gt, e = le;
  function t(r) {
    n.call(this, r == null ? "canceled" : r, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(t, n, {
    __CANCEL__: !0
  }), wn = t, wn;
}
var bn, zr;
function Ms() {
  return zr || (zr = 1, bn = function(e) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || "";
  }), bn;
}
var mn, Hr;
function Lr() {
  if (Hr)
    return mn;
  Hr = 1;
  var n = le, e = Ts(), t = Ps(), r = ei, o = si, i = Os(), s = Ns(), a = oi, l = gt, c = on(), u = Ms();
  return mn = function(f) {
    return new Promise(function(w, p) {
      var b = f.data, y = f.headers, g = f.responseType, k;
      function m() {
        f.cancelToken && f.cancelToken.unsubscribe(k), f.signal && f.signal.removeEventListener("abort", k);
      }
      n.isFormData(b) && n.isStandardBrowserEnv() && delete y["Content-Type"];
      var v = new XMLHttpRequest();
      if (f.auth) {
        var j = f.auth.username || "", A = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        y.Authorization = "Basic " + btoa(j + ":" + A);
      }
      var ne = o(f.baseURL, f.url);
      v.open(f.method.toUpperCase(), r(ne, f.params, f.paramsSerializer), !0), v.timeout = f.timeout;
      function q() {
        if (!!v) {
          var ce = "getAllResponseHeaders" in v ? i(v.getAllResponseHeaders()) : null, $ = !g || g === "text" || g === "json" ? v.responseText : v.response, H = {
            data: $,
            status: v.status,
            statusText: v.statusText,
            headers: ce,
            config: f,
            request: v
          };
          e(function(D) {
            w(D), m();
          }, function(D) {
            p(D), m();
          }, H), v = null;
        }
      }
      if ("onloadend" in v ? v.onloadend = q : v.onreadystatechange = function() {
        !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(q);
      }, v.onabort = function() {
        !v || (p(new l("Request aborted", l.ECONNABORTED, f, v)), v = null);
      }, v.onerror = function() {
        p(new l("Network Error", l.ERR_NETWORK, f, v, v)), v = null;
      }, v.ontimeout = function() {
        var $ = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded", H = f.transitional || a;
        f.timeoutErrorMessage && ($ = f.timeoutErrorMessage), p(new l($, H.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED, f, v)), v = null;
      }, n.isStandardBrowserEnv()) {
        var re = (f.withCredentials || s(ne)) && f.xsrfCookieName ? t.read(f.xsrfCookieName) : void 0;
        re && (y[f.xsrfHeaderName] = re);
      }
      "setRequestHeader" in v && n.forEach(y, function($, H) {
        typeof b > "u" && H.toLowerCase() === "content-type" ? delete y[H] : v.setRequestHeader(H, $);
      }), n.isUndefined(f.withCredentials) || (v.withCredentials = !!f.withCredentials), g && g !== "json" && (v.responseType = f.responseType), typeof f.onDownloadProgress == "function" && v.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && (k = function(ce) {
        !v || (p(!ce || ce && ce.type ? new c() : ce), v.abort(), v = null);
      }, f.cancelToken && f.cancelToken.subscribe(k), f.signal && (f.signal.aborted ? k() : f.signal.addEventListener("abort", k))), b || (b = null);
      var R = u(ne);
      if (R && ["http", "https", "file"].indexOf(R) === -1) {
        p(new l("Unsupported protocol " + R + ":", l.ERR_BAD_REQUEST, f));
        return;
      }
      v.send(b);
    });
  }, mn;
}
var vn, Br;
function js() {
  return Br || (Br = 1, vn = null), vn;
}
var K = le, Fr = Es, qr = gt, Us = oi, zs = ii, Hs = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Vr(n, e) {
  !K.isUndefined(n) && K.isUndefined(n["Content-Type"]) && (n["Content-Type"] = e);
}
function Ls() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = Lr()), n;
}
function Bs(n, e, t) {
  if (K.isString(n))
    try {
      return (e || JSON.parse)(n), K.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(n);
}
var sn = {
  transitional: Us,
  adapter: Ls(),
  transformRequest: [function(e, t) {
    if (Fr(t, "Accept"), Fr(t, "Content-Type"), K.isFormData(e) || K.isArrayBuffer(e) || K.isBuffer(e) || K.isStream(e) || K.isFile(e) || K.isBlob(e))
      return e;
    if (K.isArrayBufferView(e))
      return e.buffer;
    if (K.isURLSearchParams(e))
      return Vr(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var r = K.isObject(e), o = t && t["Content-Type"], i;
    if ((i = K.isFileList(e)) || r && o === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return zs(i ? { "files[]": e } : e, s && new s());
    } else if (r || o === "application/json")
      return Vr(t, "application/json"), Bs(e);
    return e;
  }],
  transformResponse: [function(e) {
    var t = this.transitional || sn.transitional, r = t && t.silentJSONParsing, o = t && t.forcedJSONParsing, i = !r && this.responseType === "json";
    if (i || o && K.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? qr.from(s, qr.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: js()
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
K.forEach(["delete", "get", "head"], function(e) {
  sn.headers[e] = {};
});
K.forEach(["post", "put", "patch"], function(e) {
  sn.headers[e] = K.merge(Hs);
});
var rr = sn, Fs = le, qs = rr, Vs = function(e, t, r) {
  var o = this || qs;
  return Fs.forEach(r, function(s) {
    e = s.call(o, e, t);
  }), e;
}, yn, Wr;
function ai() {
  return Wr || (Wr = 1, yn = function(e) {
    return !!(e && e.__CANCEL__);
  }), yn;
}
var Gr = le, _n = Vs, Ws = ai(), Gs = rr, Xs = on();
function kn(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Xs();
}
var Js = function(e) {
  kn(e), e.headers = e.headers || {}, e.data = _n.call(e, e.data, e.headers, e.transformRequest), e.headers = Gr.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), Gr.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(o) {
    delete e.headers[o];
  });
  var t = e.adapter || Gs.adapter;
  return t(e).then(function(o) {
    return kn(e), o.data = _n.call(e, o.data, o.headers, e.transformResponse), o;
  }, function(o) {
    return Ws(o) || (kn(e), o && o.response && (o.response.data = _n.call(e, o.response.data, o.response.headers, e.transformResponse))), Promise.reject(o);
  });
}, me = le, li = function(e, t) {
  t = t || {};
  var r = {};
  function o(u, d) {
    return me.isPlainObject(u) && me.isPlainObject(d) ? me.merge(u, d) : me.isPlainObject(d) ? me.merge({}, d) : me.isArray(d) ? d.slice() : d;
  }
  function i(u) {
    if (me.isUndefined(t[u])) {
      if (!me.isUndefined(e[u]))
        return o(void 0, e[u]);
    } else
      return o(e[u], t[u]);
  }
  function s(u) {
    if (!me.isUndefined(t[u]))
      return o(void 0, t[u]);
  }
  function a(u) {
    if (me.isUndefined(t[u])) {
      if (!me.isUndefined(e[u]))
        return o(void 0, e[u]);
    } else
      return o(void 0, t[u]);
  }
  function l(u) {
    if (u in t)
      return o(e[u], t[u]);
    if (u in e)
      return o(void 0, e[u]);
  }
  var c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l
  };
  return me.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    var f = c[d] || i, h = f(d);
    me.isUndefined(h) && f !== l || (r[d] = h);
  }), r;
}, Sn, Xr;
function ci() {
  return Xr || (Xr = 1, Sn = {
    version: "0.27.2"
  }), Sn;
}
var Ys = ci().version, Ne = gt, or = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, e) {
  or[n] = function(r) {
    return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
var Jr = {};
or.transitional = function(e, t, r) {
  function o(i, s) {
    return "[Axios v" + Ys + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return function(i, s, a) {
    if (e === !1)
      throw new Ne(o(s, " has been removed" + (t ? " in " + t : "")), Ne.ERR_DEPRECATED);
    return t && !Jr[s] && (Jr[s] = !0, console.warn(o(s, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(i, s, a) : !0;
  };
};
function Ks(n, e, t) {
  if (typeof n != "object")
    throw new Ne("options must be an object", Ne.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(n), o = r.length; o-- > 0; ) {
    var i = r[o], s = e[i];
    if (s) {
      var a = n[i], l = a === void 0 || s(a, i, n);
      if (l !== !0)
        throw new Ne("option " + i + " must be " + l, Ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new Ne("Unknown option " + i, Ne.ERR_BAD_OPTION);
  }
}
var Qs = {
  assertOptions: Ks,
  validators: or
}, ui = le, Zs = ei, Yr = xs, Kr = Js, an = li, ea = si, fi = Qs, Qe = fi.validators;
function at(n) {
  this.defaults = n, this.interceptors = {
    request: new Yr(),
    response: new Yr()
  };
}
at.prototype.request = function(e, t) {
  typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = an(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var r = t.transitional;
  r !== void 0 && fi.assertOptions(r, {
    silentJSONParsing: Qe.transitional(Qe.boolean),
    forcedJSONParsing: Qe.transitional(Qe.boolean),
    clarifyTimeoutError: Qe.transitional(Qe.boolean)
  }, !1);
  var o = [], i = !0;
  this.interceptors.request.forEach(function(h) {
    typeof h.runWhen == "function" && h.runWhen(t) === !1 || (i = i && h.synchronous, o.unshift(h.fulfilled, h.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(h) {
    s.push(h.fulfilled, h.rejected);
  });
  var a;
  if (!i) {
    var l = [Kr, void 0];
    for (Array.prototype.unshift.apply(l, o), l = l.concat(s), a = Promise.resolve(t); l.length; )
      a = a.then(l.shift(), l.shift());
    return a;
  }
  for (var c = t; o.length; ) {
    var u = o.shift(), d = o.shift();
    try {
      c = u(c);
    } catch (f) {
      d(f);
      break;
    }
  }
  try {
    a = Kr(c);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; )
    a = a.then(s.shift(), s.shift());
  return a;
};
at.prototype.getUri = function(e) {
  e = an(this.defaults, e);
  var t = ea(e.baseURL, e.url);
  return Zs(t, e.params, e.paramsSerializer);
};
ui.forEach(["delete", "get", "head", "options"], function(e) {
  at.prototype[e] = function(t, r) {
    return this.request(an(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
ui.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(i, s, a) {
      return this.request(an(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  at.prototype[e] = t(), at.prototype[e + "Form"] = t(!0);
});
var ta = at, xn, Qr;
function na() {
  if (Qr)
    return xn;
  Qr = 1;
  var n = on();
  function e(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    var o = this;
    this.promise.then(function(i) {
      if (!!o._listeners) {
        var s, a = o._listeners.length;
        for (s = 0; s < a; s++)
          o._listeners[s](i);
        o._listeners = null;
      }
    }), this.promise.then = function(i) {
      var s, a = new Promise(function(l) {
        o.subscribe(l), s = l;
      }).then(i);
      return a.cancel = function() {
        o.unsubscribe(s);
      }, a;
    }, t(function(s) {
      o.reason || (o.reason = new n(s), r(o.reason));
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
      var o = this._listeners.indexOf(r);
      o !== -1 && this._listeners.splice(o, 1);
    }
  }, e.source = function() {
    var r, o = new e(function(s) {
      r = s;
    });
    return {
      token: o,
      cancel: r
    };
  }, xn = e, xn;
}
var Cn, Zr;
function ra() {
  return Zr || (Zr = 1, Cn = function(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }), Cn;
}
var En, eo;
function oa() {
  if (eo)
    return En;
  eo = 1;
  var n = le;
  return En = function(t) {
    return n.isObject(t) && t.isAxiosError === !0;
  }, En;
}
var to = le, ia = Ko, Ht = ta, sa = li, aa = rr;
function di(n) {
  var e = new Ht(n), t = ia(Ht.prototype.request, e);
  return to.extend(t, Ht.prototype, e), to.extend(t, e), t.create = function(o) {
    return di(sa(n, o));
  }, t;
}
var we = di(aa);
we.Axios = Ht;
we.CanceledError = on();
we.CancelToken = na();
we.isCancel = ai();
we.VERSION = ci().version;
we.toFormData = ii;
we.AxiosError = gt;
we.Cancel = we.CanceledError;
we.all = function(e) {
  return Promise.all(e);
};
we.spread = ra();
we.isAxiosError = oa();
Kn.exports = we;
Kn.exports.default = we;
(function(n) {
  n.exports = Kn.exports;
})(Yo);
const Ie = /* @__PURE__ */ ts(Yo.exports);
class la {
  static isPromise(e) {
    return e && typeof e.then == "function";
  }
}
class wt {
  constructor(e, t) {
    this.httpConfig = e, la.isPromise(t) ? t.then((r) => this.accessToken = r) : this.accessToken = t;
  }
  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.accessToken}`
    };
  }
  getStructureUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Structure}`;
  }
  static requestHttpConfig(e) {
    return Ie.get(`${e}/assets/conf/application.config`).then((t) => t.data);
  }
}
var yt = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
class We extends wt {
  constructor(e, t) {
    super(e, t);
  }
  getEntityById(e, t) {
    return yt(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, t, null);
    });
  }
  getPartialEntityById(e, t, r) {
    return yt(this, void 0, void 0, function* () {
      let o = `${this._createBaseUrlByType(e)}/${t}`;
      r && (o += `?$projection=${JSON.stringify(r)}`);
      const i = this.getAuthorizationHeader();
      return (yield Ie.get(o, { headers: i })).data;
    });
  }
  queryConfiguration(e, t, r, o) {
    return yt(this, void 0, void 0, function* () {
      const i = `${this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(t),
        $paging: r ? JSON.stringify(r) : null,
        $projection: o ? JSON.stringify(o) : null
      }, a = this.getAuthorizationHeader(), l = yield Ie.post(i, s, { headers: a });
      if (r) {
        console.log(l.headers);
        const c = JSON.parse(l.headers["paging-headers"]), u = Number(c.TotalCount);
        return {
          data: l.data,
          total: u
        };
      }
      return {
        data: l.data,
        total: l.data.length
      };
    });
  }
  resolvePathName(e) {
    return yt(this, void 0, void 0, function* () {
      const t = yield this.queryConfiguration(X.Group, { Id: { $in: e } });
      return e.map((r) => {
        var o, i;
        return (i = (o = t.data.find((s) => s.Id === r)) === null || o === void 0 ? void 0 : o.Name) !== null && i !== void 0 ? i : r;
      }).join("/");
    });
  }
  uploadProcessImage(e, t, r = "process-image.svg") {
    return yt(this, void 0, void 0, function* () {
      const o = `${this._createBaseUrlByType(X.ProcessImage)}/${e}/file/image`, i = this.getAuthorizationHeader(), s = new Blob([t], { type: "image/svg+xml" }), a = new FormData();
      a.append("file", s, "process-image.svg"), yield Ie.post(o, a, { headers: i });
    });
  }
  _createBaseUrlByType(e) {
    return `${this.getStructureUrl()}${Zi[e]}`;
  }
}
var In = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
class St extends wt {
  constructor(e, t) {
    super(e, t);
  }
  getTenantViewById(e) {
    return In(this, void 0, void 0, function* () {
      const t = `${this.getStructureUrl()}/tenant/${e}/view`, r = this.getAuthorizationHeader();
      return (yield Ie.get(t, { headers: r })).data;
    });
  }
  getTopTenants() {
    return In(this, void 0, void 0, function* () {
      const e = `${this.getStructureUrl()}/tenant/top`, t = this.getAuthorizationHeader();
      return (yield Ie.get(e, { headers: t })).data;
    });
  }
  getNextTenants(e) {
    return In(this, void 0, void 0, function* () {
      const t = `${this.getStructureUrl()}/tenant/${e}/next`, r = this.getAuthorizationHeader();
      return (yield Ie.get(t, { headers: r })).data;
    });
  }
}
var Mn = function(n, e) {
  return Mn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Mn(n, e);
};
function Pe(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Mn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function ca(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function hi(n, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return t.label++, { value: c[1], done: !1 };
          case 5:
            t.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              t = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              t.label = c[1];
              break;
            }
            if (c[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = c;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(c);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        c = e.call(n, t);
      } catch (u) {
        c = [6, u], o = 0;
      } finally {
        r = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function lt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function je(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var r = t.call(n), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function Ue(n, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = e.length, i; r < o; r++)
      (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return n.concat(i || Array.prototype.slice.call(e));
}
function ot(n) {
  return this instanceof ot ? (this.v = n, this) : new ot(n);
}
function ua(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(n, e || []), o, i = [];
  return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(f) {
    r[f] && (o[f] = function(h) {
      return new Promise(function(w, p) {
        i.push([f, h, w, p]) > 1 || a(f, h);
      });
    });
  }
  function a(f, h) {
    try {
      l(r[f](h));
    } catch (w) {
      d(i[0][3], w);
    }
  }
  function l(f) {
    f.value instanceof ot ? Promise.resolve(f.value.v).then(c, u) : d(i[0][2], f);
  }
  function c(f) {
    a("next", f);
  }
  function u(f) {
    a("throw", f);
  }
  function d(f, h) {
    f(h), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function fa(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof lt == "function" ? lt(n) : n[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(i) {
    t[i] = n[i] && function(s) {
      return new Promise(function(a, l) {
        s = n[i](s), o(a, l, s.done, s.value);
      });
    };
  }
  function o(i, s, a, l) {
    Promise.resolve(l).then(function(c) {
      i({ value: c, done: a });
    }, s);
  }
}
function G(n) {
  return typeof n == "function";
}
function ir(n) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var Tn = ir(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, o) {
      return o + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Gt(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var At = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, r, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var a = lt(s), l = a.next(); !l.done; l = a.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              l && !l.done && (t = a.return) && t.call(a);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          s.remove(this);
      var u = this.initialTeardown;
      if (G(u))
        try {
          u();
        } catch (p) {
          i = p instanceof Tn ? p.errors : [p];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = lt(d), h = f.next(); !h.done; h = f.next()) {
            var w = h.value;
            try {
              no(w);
            } catch (p) {
              i = i != null ? i : [], p instanceof Tn ? i = Ue(Ue([], je(i)), je(p.errors)) : i.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            h && !h.done && (o = f.return) && o.call(f);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (i)
        throw new Tn(i);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        no(e);
      else {
        if (e instanceof n) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, n.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, n.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, n.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && Gt(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && Gt(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}(), pi = At.EMPTY;
function gi(n) {
  return n instanceof At || n && "closed" in n && G(n.remove) && G(n.add) && G(n.unsubscribe);
}
function no(n) {
  G(n) ? n() : n.unsubscribe();
}
var ln = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Xt = {
  setTimeout: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var o = Xt.delegate;
    return o != null && o.setTimeout ? o.setTimeout.apply(o, Ue([n, e], je(t))) : setTimeout.apply(void 0, Ue([n, e], je(t)));
  },
  clearTimeout: function(n) {
    var e = Xt.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(n);
  },
  delegate: void 0
};
function wi(n) {
  Xt.setTimeout(function() {
    throw n;
  });
}
function jn() {
}
var da = function() {
  return sr("C", void 0, void 0);
}();
function ha(n) {
  return sr("E", void 0, n);
}
function pa(n) {
  return sr("N", n, void 0);
}
function sr(n, e, t) {
  return {
    kind: n,
    value: e,
    error: t
  };
}
var Dt = null;
function Lt(n) {
  if (ln.useDeprecatedSynchronousErrorHandling) {
    var e = !Dt;
    if (e && (Dt = { errorThrown: !1, error: null }), n(), e) {
      var t = Dt, r = t.errorThrown, o = t.error;
      if (Dt = null, r)
        throw o;
    }
  } else
    n();
}
var ar = function(n) {
  Pe(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r.isStopped = !1, t ? (r.destination = t, gi(t) && t.add(r)) : r.destination = ma, r;
  }
  return e.create = function(t, r, o) {
    return new ct(t, r, o);
  }, e.prototype.next = function(t) {
    this.isStopped ? Rn(pa(t), this) : this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped ? Rn(ha(t), this) : (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped ? Rn(da, this) : (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
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
}(At), ga = Function.prototype.bind;
function Pn(n, e) {
  return ga.call(n, e);
}
var wa = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        Ot(r);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        Ot(r);
      }
    else
      Ot(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        Ot(t);
      }
  }, n;
}(), ct = function(n) {
  Pe(e, n);
  function e(t, r, o) {
    var i = n.call(this) || this, s;
    if (G(t) || !t)
      s = {
        next: t != null ? t : void 0,
        error: r != null ? r : void 0,
        complete: o != null ? o : void 0
      };
    else {
      var a;
      i && ln.useDeprecatedNextContext ? (a = Object.create(t), a.unsubscribe = function() {
        return i.unsubscribe();
      }, s = {
        next: t.next && Pn(t.next, a),
        error: t.error && Pn(t.error, a),
        complete: t.complete && Pn(t.complete, a)
      }) : s = t;
    }
    return i.destination = new wa(s), i;
  }
  return e;
}(ar);
function Ot(n) {
  wi(n);
}
function ba(n) {
  throw n;
}
function Rn(n, e) {
  var t = ln.onStoppedNotification;
  t && Xt.setTimeout(function() {
    return t(n, e);
  });
}
var ma = {
  closed: !0,
  next: jn,
  error: ba,
  complete: jn
}, lr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bt(n) {
  return n;
}
function va(n) {
  return n.length === 0 ? bt : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(r, o) {
      return o(r);
    }, t);
  };
}
var he = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, r) {
    var o = this, i = _a(e) ? e : new ct(e, t, r);
    return Lt(function() {
      var s = o, a = s.operator, l = s.source;
      i.add(a ? a.call(i, l) : l ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var r = this;
    return t = ro(t), new t(function(o, i) {
      var s = new ct({
        next: function(a) {
          try {
            e(a);
          } catch (l) {
            i(l), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      r.subscribe(s);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[lr] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return va(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = ro(e), new e(function(r, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return r(i);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function ro(n) {
  var e;
  return (e = n != null ? n : ln.Promise) !== null && e !== void 0 ? e : Promise;
}
function ya(n) {
  return n && G(n.next) && G(n.error) && G(n.complete);
}
function _a(n) {
  return n && n instanceof ar || ya(n) && gi(n);
}
function ka(n) {
  return G(n == null ? void 0 : n.lift);
}
function pe(n) {
  return function(e) {
    if (ka(e))
      return e.lift(function(t) {
        try {
          return n(t, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Z(n, e, t, r, o) {
  return new Sa(n, e, t, r, o);
}
var Sa = function(n) {
  Pe(e, n);
  function e(t, r, o, i, s, a) {
    var l = n.call(this, t) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = a, l._next = r ? function(c) {
      try {
        r(c);
      } catch (u) {
        t.error(u);
      }
    } : n.prototype._next, l._error = i ? function(c) {
      try {
        i(c);
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._error, l._complete = o ? function() {
      try {
        o();
      } catch (c) {
        t.error(c);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      n.prototype.unsubscribe.call(this), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}(ar), xa = ir(function(n) {
  return function() {
    n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), fe = function(n) {
  Pe(e, n);
  function e() {
    var t = n.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new oo(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new xa();
  }, e.prototype.next = function(t) {
    var r = this;
    Lt(function() {
      var o, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = lt(r.currentObservers), a = s.next(); !a.done; a = s.next()) {
            var l = a.value;
            l.next(t);
          }
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            a && !a.done && (i = s.return) && i.call(s);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    Lt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = t;
        for (var o = r.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    Lt(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var r = t.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), n.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var r = this, o = this, i = o.hasError, s = o.isStopped, a = o.observers;
    return i || s ? pi : (this.currentObservers = null, a.push(t), new At(function() {
      r.currentObservers = null, Gt(a, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, o = r.hasError, i = r.thrownError, s = r.isStopped;
    o ? t.error(i) : s && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new he();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new oo(t, r);
  }, e;
}(he), oo = function(n) {
  Pe(e, n);
  function e(t, r) {
    var o = n.call(this) || this;
    return o.destination = t, o.source = r, o;
  }
  return e.prototype.next = function(t) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, t);
  }, e.prototype.error = function(t) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, t);
  }, e.prototype.complete = function() {
    var t, r;
    (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
  }, e.prototype._subscribe = function(t) {
    var r, o;
    return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && o !== void 0 ? o : pi;
  }, e;
}(fe), cr = function(n) {
  Pe(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(t) {
    var r = n.prototype._subscribe.call(this, t);
    return !r.closed && t.next(this._value), r;
  }, e.prototype.getValue = function() {
    var t = this, r = t.hasError, o = t.thrownError, i = t._value;
    if (r)
      throw o;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(t) {
    n.prototype.next.call(this, this._value = t);
  }, e;
}(fe), ur = {
  now: function() {
    return (ur.delegate || Date).now();
  },
  delegate: void 0
}, bi = function(n) {
  Pe(e, n);
  function e(t, r, o) {
    t === void 0 && (t = 1 / 0), r === void 0 && (r = 1 / 0), o === void 0 && (o = ur);
    var i = n.call(this) || this;
    return i._bufferSize = t, i._windowTime = r, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = r === 1 / 0, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, r), i;
  }
  return e.prototype.next = function(t) {
    var r = this, o = r.isStopped, i = r._buffer, s = r._infiniteTimeWindow, a = r._timestampProvider, l = r._windowTime;
    o || (i.push(t), !s && i.push(a.now() + l)), this._trimBuffer(), n.prototype.next.call(this, t);
  }, e.prototype._subscribe = function(t) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(t), o = this, i = o._infiniteTimeWindow, s = o._buffer, a = s.slice(), l = 0; l < a.length && !t.closed; l += i ? 1 : 2)
      t.next(a[l]);
    return this._checkFinalizedStatuses(t), r;
  }, e.prototype._trimBuffer = function() {
    var t = this, r = t._bufferSize, o = t._timestampProvider, i = t._buffer, s = t._infiniteTimeWindow, a = (s ? 1 : 2) * r;
    if (r < 1 / 0 && a < i.length && i.splice(0, i.length - a), !s) {
      for (var l = o.now(), c = 0, u = 1; u < i.length && i[u] <= l; u += 2)
        c = u;
      c && i.splice(0, c + 1);
    }
  }, e;
}(fe), Ca = function(n) {
  Pe(e, n);
  function e(t, r) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, r) {
    return this;
  }, e;
}(At), Jt = {
  setInterval: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var o = Jt.delegate;
    return o != null && o.setInterval ? o.setInterval.apply(o, Ue([n, e], je(t))) : setInterval.apply(void 0, Ue([n, e], je(t)));
  },
  clearInterval: function(n) {
    var e = Jt.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(n);
  },
  delegate: void 0
}, Ea = function(n) {
  Pe(e, n);
  function e(t, r) {
    var o = n.call(this, t, r) || this;
    return o.scheduler = t, o.work = r, o.pending = !1, o;
  }
  return e.prototype.schedule = function(t, r) {
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = t;
    var o = this.id, i = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(i, o, r)), this.pending = !0, this.delay = r, this.id = this.id || this.requestAsyncId(i, this.id, r), this;
  }, e.prototype.requestAsyncId = function(t, r, o) {
    return o === void 0 && (o = 0), Jt.setInterval(t.flush.bind(t, this), o);
  }, e.prototype.recycleAsyncId = function(t, r, o) {
    if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
      return r;
    Jt.clearInterval(r);
  }, e.prototype.execute = function(t, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var o = this._execute(t, r);
    if (o)
      return o;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, r) {
    var o = !1, i;
    try {
      this.work(t);
    } catch (s) {
      o = !0, i = s || new Error("Scheduled action threw falsy error");
    }
    if (o)
      return this.unsubscribe(), i;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, r = t.id, o = t.scheduler, i = o.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Gt(i, this), r != null && (this.id = this.recycleAsyncId(o, r, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, e;
}(Ca), io = function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.schedulerActionCtor = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, r) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
  }, n.now = ur.now, n;
}(), Ia = function(n) {
  Pe(e, n);
  function e(t, r) {
    r === void 0 && (r = io.now);
    var o = n.call(this, t, r) || this;
    return o.actions = [], o._active = !1, o._scheduled = void 0, o;
  }
  return e.prototype.flush = function(t) {
    var r = this.actions;
    if (this._active) {
      r.push(t);
      return;
    }
    var o;
    this._active = !0;
    do
      if (o = t.execute(t.state, t.delay))
        break;
    while (t = r.shift());
    if (this._active = !1, o) {
      for (; t = r.shift(); )
        t.unsubscribe();
      throw o;
    }
  }, e;
}(io), cn = new Ia(Ea), Ta = cn, Pa = new he(function(n) {
  return n.complete();
});
function mi(n) {
  return n && G(n.schedule);
}
function vi(n) {
  return n[n.length - 1];
}
function Ra(n) {
  return G(vi(n)) ? n.pop() : void 0;
}
function fr(n) {
  return mi(vi(n)) ? n.pop() : void 0;
}
var yi = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function _i(n) {
  return G(n == null ? void 0 : n.then);
}
function ki(n) {
  return G(n[lr]);
}
function Si(n) {
  return Symbol.asyncIterator && G(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function xi(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Aa() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ci = Aa();
function Ei(n) {
  return G(n == null ? void 0 : n[Ci]);
}
function Ii(n) {
  return ua(this, arguments, function() {
    var t, r, o, i;
    return hi(this, function(s) {
      switch (s.label) {
        case 0:
          t = n.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, ot(t.read())];
        case 3:
          return r = s.sent(), o = r.value, i = r.done, i ? [4, ot(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, ot(o)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Ti(n) {
  return G(n == null ? void 0 : n.getReader);
}
function Ce(n) {
  if (n instanceof he)
    return n;
  if (n != null) {
    if (ki(n))
      return $a(n);
    if (yi(n))
      return Da(n);
    if (_i(n))
      return Oa(n);
    if (Si(n))
      return Pi(n);
    if (Ei(n))
      return Na(n);
    if (Ti(n))
      return Ma(n);
  }
  throw xi(n);
}
function $a(n) {
  return new he(function(e) {
    var t = n[lr]();
    if (G(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Da(n) {
  return new he(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function Oa(n) {
  return new he(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, wi);
  });
}
function Na(n) {
  return new he(function(e) {
    var t, r;
    try {
      for (var o = lt(n), i = o.next(); !i.done; i = o.next()) {
        var s = i.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (a) {
      t = { error: a };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (t)
          throw t.error;
      }
    }
    e.complete();
  });
}
function Pi(n) {
  return new he(function(e) {
    ja(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function Ma(n) {
  return Pi(Ii(n));
}
function ja(n, e) {
  var t, r, o, i;
  return ca(this, void 0, void 0, function() {
    var s, a;
    return hi(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), t = fa(n), l.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (r = l.sent(), !!r.done)
            return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = l.sent(), o = { error: a }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (o)
            throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function Ae(n, e, t, r, o) {
  r === void 0 && (r = 0), o === void 0 && (o = !1);
  var i = e.schedule(function() {
    t(), o ? n.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (n.add(i), !o)
    return i;
}
function Ri(n, e) {
  return e === void 0 && (e = 0), pe(function(t, r) {
    t.subscribe(Z(r, function(o) {
      return Ae(r, n, function() {
        return r.next(o);
      }, e);
    }, function() {
      return Ae(r, n, function() {
        return r.complete();
      }, e);
    }, function(o) {
      return Ae(r, n, function() {
        return r.error(o);
      }, e);
    }));
  });
}
function Ai(n, e) {
  return e === void 0 && (e = 0), pe(function(t, r) {
    r.add(n.schedule(function() {
      return t.subscribe(r);
    }, e));
  });
}
function Ua(n, e) {
  return Ce(n).pipe(Ai(e), Ri(e));
}
function za(n, e) {
  return Ce(n).pipe(Ai(e), Ri(e));
}
function Ha(n, e) {
  return new he(function(t) {
    var r = 0;
    return e.schedule(function() {
      r === n.length ? t.complete() : (t.next(n[r++]), t.closed || this.schedule());
    });
  });
}
function La(n, e) {
  return new he(function(t) {
    var r;
    return Ae(t, e, function() {
      r = n[Ci](), Ae(t, e, function() {
        var o, i, s;
        try {
          o = r.next(), i = o.value, s = o.done;
        } catch (a) {
          t.error(a);
          return;
        }
        s ? t.complete() : t.next(i);
      }, 0, !0);
    }), function() {
      return G(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function $i(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new he(function(t) {
    Ae(t, e, function() {
      var r = n[Symbol.asyncIterator]();
      Ae(t, e, function() {
        r.next().then(function(o) {
          o.done ? t.complete() : t.next(o.value);
        });
      }, 0, !0);
    });
  });
}
function Ba(n, e) {
  return $i(Ii(n), e);
}
function Fa(n, e) {
  if (n != null) {
    if (ki(n))
      return Ua(n, e);
    if (yi(n))
      return Ha(n, e);
    if (_i(n))
      return za(n, e);
    if (Si(n))
      return $i(n, e);
    if (Ei(n))
      return La(n, e);
    if (Ti(n))
      return Ba(n, e);
  }
  throw xi(n);
}
function Je(n, e) {
  return e ? Fa(n, e) : Ce(n);
}
function it() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = fr(n);
  return Je(n, t);
}
var qa = ir(function(n) {
  return function() {
    n(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Un(n, e) {
  var t = typeof e == "object";
  return new Promise(function(r, o) {
    var i = new ct({
      next: function(s) {
        r(s), i.unsubscribe();
      },
      error: o,
      complete: function() {
        t ? r(e.defaultValue) : o(new qa());
      }
    });
    n.subscribe(i);
  });
}
function Va(n) {
  return n instanceof Date && !isNaN(n);
}
function ut(n, e) {
  return pe(function(t, r) {
    var o = 0;
    t.subscribe(Z(r, function(i) {
      r.next(n.call(e, i, o++));
    }));
  });
}
var Wa = Array.isArray;
function Ga(n, e) {
  return Wa(e) ? n.apply(void 0, Ue([], je(e))) : n(e);
}
function Xa(n) {
  return ut(function(e) {
    return Ga(n, e);
  });
}
var Ja = Array.isArray, Ya = Object.getPrototypeOf, Ka = Object.prototype, Qa = Object.keys;
function Za(n) {
  if (n.length === 1) {
    var e = n[0];
    if (Ja(e))
      return { args: e, keys: null };
    if (el(e)) {
      var t = Qa(e);
      return {
        args: t.map(function(r) {
          return e[r];
        }),
        keys: t
      };
    }
  }
  return { args: n, keys: null };
}
function el(n) {
  return n && typeof n == "object" && Ya(n) === Ka;
}
function tl(n, e) {
  return n.reduce(function(t, r, o) {
    return t[r] = e[o], t;
  }, {});
}
function Di() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = fr(n), r = Ra(n), o = Za(n), i = o.args, s = o.keys;
  if (i.length === 0)
    return Je([], t);
  var a = new he(nl(i, t, s ? function(l) {
    return tl(s, l);
  } : bt));
  return r ? a.pipe(Xa(r)) : a;
}
function nl(n, e, t) {
  return t === void 0 && (t = bt), function(r) {
    so(e, function() {
      for (var o = n.length, i = new Array(o), s = o, a = o, l = function(u) {
        so(e, function() {
          var d = Je(n[u], e), f = !1;
          d.subscribe(Z(r, function(h) {
            i[u] = h, f || (f = !0, a--), a || r.next(t(i.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, c = 0; c < o; c++)
        l(c);
    }, r);
  };
}
function so(n, e, t) {
  n ? Ae(t, n, e) : e();
}
function rl(n, e, t, r, o, i, s, a) {
  var l = [], c = 0, u = 0, d = !1, f = function() {
    d && !l.length && !c && e.complete();
  }, h = function(p) {
    return c < r ? w(p) : l.push(p);
  }, w = function(p) {
    i && e.next(p), c++;
    var b = !1;
    Ce(t(p, u++)).subscribe(Z(e, function(y) {
      o == null || o(y), i ? h(y) : e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var g = l.shift();
            s ? Ae(e, s, function() {
              return w(g);
            }) : w(g);
          }; l.length && c < r; )
            y();
          f();
        } catch (g) {
          e.error(g);
        }
    }));
  };
  return n.subscribe(Z(e, h, function() {
    d = !0, f();
  })), function() {
    a == null || a();
  };
}
function Oi(n, e, t) {
  return t === void 0 && (t = 1 / 0), G(e) ? Oi(function(r, o) {
    return ut(function(i, s) {
      return e(r, i, o, s);
    })(Ce(n(r, o)));
  }, t) : (typeof e == "number" && (t = e), pe(function(r, o) {
    return rl(r, o, n, t);
  }));
}
function ol(n) {
  return n === void 0 && (n = 1 / 0), Oi(bt, n);
}
function il() {
  return ol(1);
}
function sl() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return il()(Je(n, fr(n)));
}
function Ni(n, e, t) {
  n === void 0 && (n = 0), t === void 0 && (t = Ta);
  var r = -1;
  return e != null && (mi(e) ? t = e : r = e), new he(function(o) {
    var i = Va(n) ? +n - t.now() : n;
    i < 0 && (i = 0);
    var s = 0;
    return t.schedule(function() {
      o.closed || (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
    }, i);
  });
}
function xt(n, e) {
  return pe(function(t, r) {
    var o = 0;
    t.subscribe(Z(r, function(i) {
      return n.call(e, i, o++) && r.next(i);
    }));
  });
}
function al(n) {
  return pe(function(e, t) {
    var r = !1, o = null, i = null, s = !1, a = function() {
      if (i == null || i.unsubscribe(), i = null, r) {
        r = !1;
        var c = o;
        o = null, t.next(c);
      }
      s && t.complete();
    }, l = function() {
      i = null, s && t.complete();
    };
    e.subscribe(Z(t, function(c) {
      r = !0, o = c, i || Ce(n(c)).subscribe(i = Z(t, a, l));
    }, function() {
      s = !0, (!r || !i || i.closed) && t.complete();
    }));
  });
}
function ll(n, e) {
  return e === void 0 && (e = cn), al(function() {
    return Ni(n, e);
  });
}
function Mi(n) {
  return pe(function(e, t) {
    var r = null, o = !1, i;
    r = e.subscribe(Z(t, void 0, void 0, function(s) {
      i = Ce(n(s, Mi(n)(e))), r ? (r.unsubscribe(), r = null, i.subscribe(t)) : o = !0;
    })), o && (r.unsubscribe(), r = null, i.subscribe(t));
  });
}
function cl(n, e) {
  return e === void 0 && (e = cn), pe(function(t, r) {
    var o = null, i = null, s = null, a = function() {
      if (o) {
        o.unsubscribe(), o = null;
        var c = i;
        i = null, r.next(c);
      }
    };
    function l() {
      var c = s + n, u = e.now();
      if (u < c) {
        o = this.schedule(void 0, c - u), r.add(o);
        return;
      }
      a();
    }
    t.subscribe(Z(r, function(c) {
      i = c, s = e.now(), o || (o = e.schedule(l, n), r.add(o));
    }, function() {
      a(), r.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
function ul(n) {
  return n <= 0 ? function() {
    return Pa;
  } : pe(function(e, t) {
    var r = 0;
    e.subscribe(Z(t, function(o) {
      ++r <= n && (t.next(o), n <= r && t.complete());
    }));
  });
}
function fl(n) {
  return ut(function() {
    return n;
  });
}
function dl(n, e) {
  return e === void 0 && (e = bt), n = n != null ? n : hl, pe(function(t, r) {
    var o, i = !0;
    t.subscribe(Z(r, function(s) {
      var a = e(s);
      (i || !n(o, a)) && (i = !1, o = a, r.next(s));
    }));
  });
}
function hl(n, e) {
  return n === e;
}
function pl(n, e) {
  return dl(function(t, r) {
    return e ? e(t[n], r[n]) : t[n] === r[n];
  });
}
function gl(n) {
  n === void 0 && (n = {});
  var e = n.connector, t = e === void 0 ? function() {
    return new fe();
  } : e, r = n.resetOnError, o = r === void 0 ? !0 : r, i = n.resetOnComplete, s = i === void 0 ? !0 : i, a = n.resetOnRefCountZero, l = a === void 0 ? !0 : a;
  return function(c) {
    var u, d, f, h = 0, w = !1, p = !1, b = function() {
      d == null || d.unsubscribe(), d = void 0;
    }, y = function() {
      b(), u = f = void 0, w = p = !1;
    }, g = function() {
      var k = u;
      y(), k == null || k.unsubscribe();
    };
    return pe(function(k, m) {
      h++, !p && !w && b();
      var v = f = f != null ? f : t();
      m.add(function() {
        h--, h === 0 && !p && !w && (d = An(g, l));
      }), v.subscribe(m), !u && h > 0 && (u = new ct({
        next: function(j) {
          return v.next(j);
        },
        error: function(j) {
          p = !0, b(), d = An(y, o, j), v.error(j);
        },
        complete: function() {
          w = !0, b(), d = An(y, s), v.complete();
        }
      }), Ce(k).subscribe(u));
    })(c);
  };
}
function An(n, e) {
  for (var t = [], r = 2; r < arguments.length; r++)
    t[r - 2] = arguments[r];
  if (e === !0) {
    n();
    return;
  }
  if (e !== !1) {
    var o = new ct({
      next: function() {
        o.unsubscribe(), n();
      }
    });
    return e.apply(void 0, Ue([], je(t))).subscribe(o);
  }
}
function wl(n, e, t) {
  var r, o, i, s, a = !1;
  return n && typeof n == "object" ? (r = n.bufferSize, s = r === void 0 ? 1 / 0 : r, o = n.windowTime, e = o === void 0 ? 1 / 0 : o, i = n.refCount, a = i === void 0 ? !1 : i, t = n.scheduler) : s = n != null ? n : 1 / 0, gl({
    connector: function() {
      return new bi(s, e, t);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: a
  });
}
function bl(n) {
  return xt(function(e, t) {
    return n <= t;
  });
}
function ji(n, e) {
  return pe(function(t, r) {
    var o = null, i = 0, s = !1, a = function() {
      return s && !o && r.complete();
    };
    t.subscribe(Z(r, function(l) {
      o == null || o.unsubscribe();
      var c = 0, u = i++;
      Ce(n(l, u)).subscribe(o = Z(r, function(d) {
        return r.next(e ? e(l, d, u, c++) : d);
      }, function() {
        o = null, a();
      }));
    }, function() {
      s = !0, a();
    }));
  });
}
function $e(n) {
  return pe(function(e, t) {
    Ce(n).subscribe(Z(t, function() {
      return t.complete();
    }, jn)), !t.closed && e.subscribe(t);
  });
}
function ml(n, e, t) {
  var r = G(n) || e || t ? { next: n, error: e, complete: t } : n;
  return r ? pe(function(o, i) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var a = !0;
    o.subscribe(Z(i, function(l) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, l), i.next(l);
    }, function() {
      var l;
      a = !1, (l = r.complete) === null || l === void 0 || l.call(r), i.complete();
    }, function(l) {
      var c;
      a = !1, (c = r.error) === null || c === void 0 || c.call(r, l), i.error(l);
    }, function() {
      var l, c;
      a && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : bt;
}
var Ui = {
  leading: !0,
  trailing: !1
};
function vl(n, e) {
  return e === void 0 && (e = Ui), pe(function(t, r) {
    var o = e.leading, i = e.trailing, s = !1, a = null, l = null, c = !1, u = function() {
      l == null || l.unsubscribe(), l = null, i && (h(), c && r.complete());
    }, d = function() {
      l = null, c && r.complete();
    }, f = function(w) {
      return l = Ce(n(w)).subscribe(Z(r, u, d));
    }, h = function() {
      if (s) {
        s = !1;
        var w = a;
        a = null, r.next(w), !c && f(w);
      }
    };
    t.subscribe(Z(r, function(w) {
      s = !0, a = w, !(l && !l.closed) && (o ? h() : f(w));
    }, function() {
      c = !0, !(i && s && l && !l.closed) && r.complete();
    }));
  });
}
function yl(n, e, t) {
  e === void 0 && (e = cn), t === void 0 && (t = Ui);
  var r = Ni(n, e);
  return vl(function() {
    return r;
  }, t);
}
var $n = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
class Ct {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, t, r = !1, o) {
    return $n(this, void 0, void 0, function* () {
      const i = yield this.httpService.getPartialEntityById(e, t, { Name: 1, Path: 1 });
      let s = yield this.resolvePathName(i.Path.splice(o ? i.Path.length - o : 0, i.Path.length));
      return r && (s = s + "/" + i.Name.Value), s;
    });
  }
  resolvePathName(e) {
    return $n(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Un(Di(e.map((t) => this.resolveName(X.Group, t))).pipe(ut((t) => t.join(" / "))));
    });
  }
  resolveName(e, t) {
    return $n(this, void 0, void 0, function* () {
      return this._nameCache[t] || (this._nameCache[t] = Je(this.httpService.getPartialEntityById(e, t, { Name: 1 })).pipe(ut((r) => r.Name.Value), wl(1), Mi(() => it(t)))), Un(this._nameCache[t]);
    });
  }
}
var _l = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
class td extends wt {
  constructor(e, t) {
    super(e, t);
  }
  getUserProfile() {
    return _l(this, void 0, void 0, function* () {
      try {
        const e = yield Ie.get(`${this.getStructureUrl()}/userprofile`, {
          headers: this.getAuthorizationHeader()
        });
        if (e.status == 200)
          return e.data;
      } catch (e) {
        throw new Error("Failed to request user profile with error: " + (e == null ? void 0 : e.message));
      }
    });
  }
}
var kl = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
class zn extends wt {
  constructor(e, t) {
    super(e, t);
  }
  sendDatSrcConfiguration(e) {
    return kl(this, void 0, void 0, function* () {
      const t = `${this._getDriverUrl()}/command/source/${e}/configure`, r = this.getAuthorizationHeader();
      return (yield Ie.get(t, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Driver}`;
  }
}
class ft extends Error {
  constructor(e, t) {
    const r = new.target.prototype;
    super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = r;
  }
}
class dr extends Error {
  constructor(e = "A timeout occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class Et extends Error {
  constructor(e = "An abort occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class Sl extends Error {
  constructor(e, t) {
    const r = new.target.prototype;
    super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = r;
  }
}
class xl extends Error {
  constructor(e, t) {
    const r = new.target.prototype;
    super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = r;
  }
}
class Cl extends Error {
  constructor(e, t) {
    const r = new.target.prototype;
    super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = r;
  }
}
class El extends Error {
  constructor(e) {
    const t = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
  }
}
class Il extends Error {
  constructor(e, t) {
    const r = new.target.prototype;
    super(e), this.innerErrors = t, this.__proto__ = r;
  }
}
class zi {
  constructor(e, t, r) {
    this.statusCode = e, this.statusText = t, this.content = r;
  }
}
class hr {
  get(e, t) {
    return this.send({
      ...t,
      method: "GET",
      url: e
    });
  }
  post(e, t) {
    return this.send({
      ...t,
      method: "POST",
      url: e
    });
  }
  delete(e, t) {
    return this.send({
      ...t,
      method: "DELETE",
      url: e
    });
  }
  getCookieString(e) {
    return "";
  }
}
var _;
(function(n) {
  n[n.Trace = 0] = "Trace", n[n.Debug = 1] = "Debug", n[n.Information = 2] = "Information", n[n.Warning = 3] = "Warning", n[n.Error = 4] = "Error", n[n.Critical = 5] = "Critical", n[n.None = 6] = "None";
})(_ || (_ = {}));
class It {
  constructor() {
  }
  log(e, t) {
  }
}
It.instance = new It();
const Tl = "6.0.8";
class Q {
  static isRequired(e, t) {
    if (e == null)
      throw new Error(`The '${t}' argument is required.`);
  }
  static isNotEmpty(e, t) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${t}' argument should not be empty.`);
  }
  static isIn(e, t, r) {
    if (!(e in t))
      throw new Error(`Unknown ${r} value: ${e}.`);
  }
}
class ie {
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
function Tt(n, e) {
  let t = "";
  return pr(n) ? (t = `Binary data of length ${n.byteLength}`, e && (t += `. Content: '${Pl(n)}'`)) : typeof n == "string" && (t = `String data of length ${n.length}`, e && (t += `. Content: '${n}'`)), t;
}
function Pl(n) {
  const e = new Uint8Array(n);
  let t = "";
  return e.forEach((r) => {
    t += `0x${r < 16 ? "0" : ""}${r.toString(16)} `;
  }), t.substr(0, t.length - 1);
}
function pr(n) {
  return n && typeof ArrayBuffer < "u" && (n instanceof ArrayBuffer || n.constructor && n.constructor.name === "ArrayBuffer");
}
async function Hi(n, e, t, r, o, i, s) {
  let a = {};
  if (o) {
    const f = await o();
    f && (a = {
      Authorization: `Bearer ${f}`
    });
  }
  const [l, c] = dt();
  a[l] = c, n.log(_.Trace, `(${e} transport) sending data. ${Tt(i, s.logMessageContent)}.`);
  const u = pr(i) ? "arraybuffer" : "text", d = await t.post(r, {
    content: i,
    headers: { ...a, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  n.log(_.Trace, `(${e} transport) request complete. Response status: ${d.statusCode}.`);
}
function Rl(n) {
  return n === void 0 ? new Yt(_.Information) : n === null ? It.instance : n.log !== void 0 ? n : new Yt(n);
}
class Al {
  constructor(e, t) {
    this._subject = e, this._observer = t;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((t) => {
    });
  }
}
class Yt {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, t) {
    if (e >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${_[e]}: ${t}`;
      switch (e) {
        case _.Critical:
        case _.Error:
          this.out.error(r);
          break;
        case _.Warning:
          this.out.warn(r);
          break;
        case _.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function dt() {
  let n = "X-SignalR-User-Agent";
  return ie.isNode && (n = "User-Agent"), [n, $l(Tl, Dl(), Nl(), Ol())];
}
function $l(n, e, t, r) {
  let o = "Microsoft SignalR/";
  const i = n.split(".");
  return o += `${i[0]}.${i[1]}`, o += ` (${n}; `, e && e !== "" ? o += `${e}; ` : o += "Unknown OS; ", o += `${t}`, r ? o += `; ${r}` : o += "; Unknown Runtime Version", o += ")", o;
}
function Dl() {
  if (ie.isNode)
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
function Ol() {
  if (ie.isNode)
    return process.versions.node;
}
function Nl() {
  return ie.isNode ? "NodeJS" : "Browser";
}
function ao(n) {
  return n.stack ? n.stack : n.message ? n.message : `${n}`;
}
function Ml() {
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
class jl extends hr {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (t("tough-cookie")).CookieJar(), this._fetchType = t("node-fetch"), this._fetchType = t("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Ml());
    if (typeof AbortController > "u") {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = t("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new Et();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const t = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      t.abort(), r = new Et();
    });
    let o = null;
    if (e.timeout) {
      const l = e.timeout;
      o = setTimeout(() => {
        t.abort(), this._logger.log(_.Warning, "Timeout from HTTP request."), r = new dr();
      }, l);
    }
    let i;
    try {
      i = await this._fetchType(e.url, {
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
        signal: t.signal
      });
    } catch (l) {
      throw r || (this._logger.log(_.Warning, `Error from HTTP request. ${l}.`), l);
    } finally {
      o && clearTimeout(o), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!i.ok) {
      const l = await lo(i, "text");
      throw new ft(l || i.statusText, i.status);
    }
    const a = await lo(i, e.responseType);
    return new zi(i.status, i.statusText, a);
  }
  getCookieString(e) {
    let t = "";
    return ie.isNode && this._jar && this._jar.getCookies(e, (r, o) => t = o.join("; ")), t;
  }
}
function lo(n, e) {
  let t;
  switch (e) {
    case "arraybuffer":
      t = n.arrayBuffer();
      break;
    case "text":
      t = n.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      t = n.text();
      break;
  }
  return t;
}
class Ul extends hr {
  constructor(e) {
    super(), this._logger = e;
  }
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Et()) : e.method ? e.url ? new Promise((t, r) => {
      const o = new XMLHttpRequest();
      o.open(e.method, e.url, !0), o.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const i = e.headers;
      i && Object.keys(i).forEach((s) => {
        o.setRequestHeader(s, i[s]);
      }), e.responseType && (o.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        o.abort(), r(new Et());
      }), e.timeout && (o.timeout = e.timeout), o.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), o.status >= 200 && o.status < 300 ? t(new zi(o.status, o.statusText, o.response || o.responseText)) : r(new ft(o.response || o.responseText || o.statusText, o.status));
      }, o.onerror = () => {
        this._logger.log(_.Warning, `Error from HTTP request. ${o.status}: ${o.statusText}.`), r(new ft(o.statusText, o.status));
      }, o.ontimeout = () => {
        this._logger.log(_.Warning, "Timeout from HTTP request."), r(new dr());
      }, o.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class zl extends hr {
  constructor(e) {
    if (super(), typeof fetch < "u" || ie.isNode)
      this._httpClient = new jl(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Ul(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Et()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class ve {
  static write(e) {
    return `${e}${ve.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== ve.RecordSeparator)
      throw new Error("Message is incomplete.");
    const t = e.split(ve.RecordSeparator);
    return t.pop(), t;
  }
}
ve.RecordSeparatorCode = 30;
ve.RecordSeparator = String.fromCharCode(ve.RecordSeparatorCode);
class Hl {
  writeHandshakeRequest(e) {
    return ve.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let t, r;
    if (pr(e)) {
      const a = new Uint8Array(e), l = a.indexOf(ve.RecordSeparatorCode);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const c = l + 1;
      t = String.fromCharCode.apply(null, Array.prototype.slice.call(a.slice(0, c))), r = a.byteLength > c ? a.slice(c).buffer : null;
    } else {
      const a = e, l = a.indexOf(ve.RecordSeparator);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const c = l + 1;
      t = a.substring(0, c), r = a.length > c ? a.substring(c) : null;
    }
    const o = ve.parse(t), i = JSON.parse(o[0]);
    if (i.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, i];
  }
}
var B;
(function(n) {
  n[n.Invocation = 1] = "Invocation", n[n.StreamItem = 2] = "StreamItem", n[n.Completion = 3] = "Completion", n[n.StreamInvocation = 4] = "StreamInvocation", n[n.CancelInvocation = 5] = "CancelInvocation", n[n.Ping = 6] = "Ping", n[n.Close = 7] = "Close";
})(B || (B = {}));
class Ll {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const t of this.observers)
      t.next(e);
  }
  error(e) {
    for (const t of this.observers)
      t.error && t.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new Al(this, e);
  }
}
const Bl = 30 * 1e3, Fl = 15 * 1e3;
var V;
(function(n) {
  n.Disconnected = "Disconnected", n.Connecting = "Connecting", n.Connected = "Connected", n.Disconnecting = "Disconnecting", n.Reconnecting = "Reconnecting";
})(V || (V = {}));
class gr {
  constructor(e, t, r, o) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(_.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, Q.isRequired(e, "connection"), Q.isRequired(t, "logger"), Q.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = Bl, this.keepAliveIntervalInMilliseconds = Fl, this._logger = t, this._protocol = r, this.connection = e, this._reconnectPolicy = o, this._handshakeProtocol = new Hl(), this.connection.onreceive = (i) => this._processIncomingData(i), this.connection.onclose = (i) => this._connectionClosed(i), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = V.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: B.Ping });
  }
  static create(e, t, r, o) {
    return new gr(e, t, r, o);
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
    if (this._connectionState !== V.Disconnected && this._connectionState !== V.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== V.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = V.Connecting, this._logger.log(_.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), ie.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = V.Connected, this._connectionStarted = !0, this._logger.log(_.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = V.Disconnected, this._logger.log(_.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((t, r) => {
      this._handshakeResolver = t, this._handshakeRejecter = r;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      const t = {
        protocol: this._protocol.name,
        version: this._protocol.version
      };
      if (this._logger.log(_.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)), this._logger.log(_.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
    } catch (t) {
      throw this._logger.log(_.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t;
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
    return this._connectionState === V.Disconnected ? (this._logger.log(_.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === V.Disconnecting ? (this._logger.log(_.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = V.Disconnecting, this._logger.log(_.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(_.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
  }
  stream(e, ...t) {
    const [r, o] = this._replaceStreamingParams(t), i = this._createStreamInvocation(e, t, o);
    let s;
    const a = new Ll();
    return a.cancelCallback = () => {
      const l = this._createCancelInvocation(i.invocationId);
      return delete this._callbacks[i.invocationId], s.then(() => this._sendWithProtocol(l));
    }, this._callbacks[i.invocationId] = (l, c) => {
      if (c) {
        a.error(c);
        return;
      } else
        l && (l.type === B.Completion ? l.error ? a.error(new Error(l.error)) : a.complete() : a.next(l.item));
    }, s = this._sendWithProtocol(i).catch((l) => {
      a.error(l), delete this._callbacks[i.invocationId];
    }), this._launchStreams(r, s), a;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  _sendWithProtocol(e) {
    return this._sendMessage(this._protocol.writeMessage(e));
  }
  send(e, ...t) {
    const [r, o] = this._replaceStreamingParams(t), i = this._sendWithProtocol(this._createInvocation(e, t, !0, o));
    return this._launchStreams(r, i), i;
  }
  invoke(e, ...t) {
    const [r, o] = this._replaceStreamingParams(t), i = this._createInvocation(e, t, !1, o);
    return new Promise((a, l) => {
      this._callbacks[i.invocationId] = (u, d) => {
        if (d) {
          l(d);
          return;
        } else
          u && (u.type === B.Completion ? u.error ? l(new Error(u.error)) : a(u.result) : l(new Error(`Unexpected message type: ${u.type}`)));
      };
      const c = this._sendWithProtocol(i).catch((u) => {
        l(u), delete this._callbacks[i.invocationId];
      });
      this._launchStreams(r, c);
    });
  }
  on(e, t) {
    !e || !t || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(t) === -1 && this._methods[e].push(t));
  }
  off(e, t) {
    if (!e)
      return;
    e = e.toLowerCase();
    const r = this._methods[e];
    if (!!r)
      if (t) {
        const o = r.indexOf(t);
        o !== -1 && (r.splice(o, 1), r.length === 0 && delete this._methods[e]);
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
      const t = this._protocol.parseMessages(e, this._logger);
      for (const r of t)
        switch (r.type) {
          case B.Invocation:
            this._invokeClientMethod(r);
            break;
          case B.StreamItem:
          case B.Completion: {
            const o = this._callbacks[r.invocationId];
            if (o) {
              r.type === B.Completion && delete this._callbacks[r.invocationId];
              try {
                o(r);
              } catch (i) {
                this._logger.log(_.Error, `Stream callback threw error: ${ao(i)}`);
              }
            }
            break;
          }
          case B.Ping:
            break;
          case B.Close: {
            this._logger.log(_.Information, "Close message received from server.");
            const o = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            r.allowReconnect === !0 ? this.connection.stop(o) : this._stopPromise = this._stopInternal(o);
            break;
          }
          default:
            this._logger.log(_.Warning, `Invalid message type: ${r.type}.`);
            break;
        }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let t, r;
    try {
      [r, t] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (o) {
      const i = "Error parsing handshake response: " + o;
      this._logger.log(_.Error, i);
      const s = new Error(i);
      throw this._handshakeRejecter(s), s;
    }
    if (t.error) {
      const o = "Server returned handshake error: " + t.error;
      this._logger.log(_.Error, o);
      const i = new Error(o);
      throw this._handshakeRejecter(i), i;
    } else
      this._logger.log(_.Debug, "Server handshake complete.");
    return this._handshakeResolver(), r;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - new Date().getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === V.Connected)
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
    const t = this._methods[e.target.toLowerCase()];
    if (t) {
      try {
        t.forEach((r) => r.apply(this, e.arguments));
      } catch (r) {
        this._logger.log(_.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${r}'.`);
      }
      if (e.invocationId) {
        const r = "Server requested a response, which is not supported in this version of the client.";
        this._logger.log(_.Error, r), this._stopPromise = this._stopInternal(new Error(r));
      }
    } else
      this._logger.log(_.Warning, `No client method with the name '${e.target}' found.`);
  }
  _connectionClosed(e) {
    this._logger.log(_.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === V.Disconnecting ? this._completeClose(e) : this._connectionState === V.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === V.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = V.Disconnected, this._connectionStarted = !1, ie.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((t) => t.apply(this, [e]));
      } catch (t) {
        this._logger.log(_.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
      }
    }
  }
  async _reconnect(e) {
    const t = Date.now();
    let r = 0, o = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), i = this._getNextRetryDelay(r++, 0, o);
    if (i === null) {
      this._logger.log(_.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = V.Reconnecting, e ? this._logger.log(_.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(_.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(_.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== V.Reconnecting) {
        this._logger.log(_.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; i !== null; ) {
      if (this._logger.log(_.Information, `Reconnect attempt number ${r} will start in ${i} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, i);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== V.Reconnecting) {
        this._logger.log(_.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = V.Connected, this._logger.log(_.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(_.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(_.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== V.Reconnecting) {
          this._logger.log(_.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === V.Disconnecting && this._completeClose();
          return;
        }
        o = s instanceof Error ? s : new Error(s.toString()), i = this._getNextRetryDelay(r++, Date.now() - t, o);
      }
    }
    this._logger.log(_.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, t, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: t,
        previousRetryCount: e,
        retryReason: r
      });
    } catch (o) {
      return this._logger.log(_.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${o}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const t = this._callbacks;
    this._callbacks = {}, Object.keys(t).forEach((r) => {
      const o = t[r];
      try {
        o(null, e);
      } catch (i) {
        this._logger.log(_.Error, `Stream 'error' callback called with '${e}' threw error: ${ao(i)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, t, r, o) {
    if (r)
      return o.length !== 0 ? {
        arguments: t,
        streamIds: o,
        target: e,
        type: B.Invocation
      } : {
        arguments: t,
        target: e,
        type: B.Invocation
      };
    {
      const i = this._invocationId;
      return this._invocationId++, o.length !== 0 ? {
        arguments: t,
        invocationId: i.toString(),
        streamIds: o,
        target: e,
        type: B.Invocation
      } : {
        arguments: t,
        invocationId: i.toString(),
        target: e,
        type: B.Invocation
      };
    }
  }
  _launchStreams(e, t) {
    if (e.length !== 0) {
      t || (t = Promise.resolve());
      for (const r in e)
        e[r].subscribe({
          complete: () => {
            t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(r)));
          },
          error: (o) => {
            let i;
            o instanceof Error ? i = o.message : o && o.toString ? i = o.toString() : i = "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(r, i)));
          },
          next: (o) => {
            t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(r, o)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const t = [], r = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      if (this._isObservable(i)) {
        const s = this._invocationId;
        this._invocationId++, t[s] = i, r.push(s.toString()), e.splice(o, 1);
      }
    }
    return [t, r];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, t, r) {
    const o = this._invocationId;
    return this._invocationId++, r.length !== 0 ? {
      arguments: t,
      invocationId: o.toString(),
      streamIds: r,
      target: e,
      type: B.StreamInvocation
    } : {
      arguments: t,
      invocationId: o.toString(),
      target: e,
      type: B.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: B.CancelInvocation
    };
  }
  _createStreamItemMessage(e, t) {
    return {
      invocationId: e,
      item: t,
      type: B.StreamItem
    };
  }
  _createCompletionMessage(e, t, r) {
    return t ? {
      error: t,
      invocationId: e,
      type: B.Completion
    } : {
      invocationId: e,
      result: r,
      type: B.Completion
    };
  }
}
const ql = [0, 2e3, 1e4, 3e4, null];
class co {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : ql;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class Fe {
}
Fe.Authorization = "Authorization";
Fe.Cookie = "Cookie";
var Y;
(function(n) {
  n[n.None = 0] = "None", n[n.WebSockets = 1] = "WebSockets", n[n.ServerSentEvents = 2] = "ServerSentEvents", n[n.LongPolling = 4] = "LongPolling";
})(Y || (Y = {}));
var ue;
(function(n) {
  n[n.Text = 1] = "Text", n[n.Binary = 2] = "Binary";
})(ue || (ue = {}));
class Vl {
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
class uo {
  constructor(e, t, r, o) {
    this._httpClient = e, this._accessTokenFactory = t, this._logger = r, this._pollAbort = new Vl(), this._options = o, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, t) {
    if (Q.isRequired(e, "url"), Q.isRequired(t, "transferFormat"), Q.isIn(t, ue, "transferFormat"), this._url = e, this._logger.log(_.Trace, "(LongPolling transport) Connecting."), t === ue.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, o] = dt(), i = { [r]: o, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: i,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    t === ue.Binary && (s.responseType = "arraybuffer");
    const a = await this._getAccessToken();
    this._updateHeaderToken(s, a);
    const l = `${e}&_=${Date.now()}`;
    this._logger.log(_.Trace, `(LongPolling transport) polling: ${l}.`);
    const c = await this._httpClient.get(l, s);
    c.statusCode !== 200 ? (this._logger.log(_.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new ft(c.statusText || "", c.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, t) {
    if (e.headers || (e.headers = {}), t) {
      e.headers[Fe.Authorization] = `Bearer ${t}`;
      return;
    }
    e.headers[Fe.Authorization] && delete e.headers[Fe.Authorization];
  }
  async _poll(e, t) {
    try {
      for (; this._running; ) {
        const r = await this._getAccessToken();
        this._updateHeaderToken(t, r);
        try {
          const o = `${e}&_=${Date.now()}`;
          this._logger.log(_.Trace, `(LongPolling transport) polling: ${o}.`);
          const i = await this._httpClient.get(o, t);
          i.statusCode === 204 ? (this._logger.log(_.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : i.statusCode !== 200 ? (this._logger.log(_.Error, `(LongPolling transport) Unexpected response code: ${i.statusCode}.`), this._closeError = new ft(i.statusText || "", i.statusCode), this._running = !1) : i.content ? (this._logger.log(_.Trace, `(LongPolling transport) data received. ${Tt(i.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(i.content)) : this._logger.log(_.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (o) {
          this._running ? o instanceof dr ? this._logger.log(_.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = o, this._running = !1) : this._logger.log(_.Trace, `(LongPolling transport) Poll errored after shutdown: ${o.message}`);
        }
      }
    } finally {
      this._logger.log(_.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Hi(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(_.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(_.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [t, r] = dt();
      e[t] = r;
      const o = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      }, i = await this._getAccessToken();
      this._updateHeaderToken(o, i), await this._httpClient.delete(this._url, o), this._logger.log(_.Trace, "(LongPolling transport) DELETE request sent.");
    } finally {
      this._logger.log(_.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(_.Trace, e), this.onclose(this._closeError);
    }
  }
}
class Wl {
  constructor(e, t, r, o) {
    this._httpClient = e, this._accessTokenFactory = t, this._logger = r, this._options = o, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    if (Q.isRequired(e, "url"), Q.isRequired(t, "transferFormat"), Q.isIn(t, ue, "transferFormat"), this._logger.log(_.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, o) => {
      let i = !1;
      if (t !== ue.Text) {
        o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (ie.isBrowser || ie.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const a = this._httpClient.getCookieString(e), l = {};
        l.Cookie = a;
        const [c, u] = dt();
        l[c] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...l, ...this._options.headers } });
      }
      try {
        s.onmessage = (a) => {
          if (this.onreceive)
            try {
              this._logger.log(_.Trace, `(SSE transport) data received. ${Tt(a.data, this._options.logMessageContent)}.`), this.onreceive(a.data);
            } catch (l) {
              this._close(l);
              return;
            }
        }, s.onerror = (a) => {
          i ? this._close() : o(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, s.onopen = () => {
          this._logger.log(_.Information, `SSE connected to ${this._url}`), this._eventSource = s, i = !0, r();
        };
      } catch (a) {
        o(a);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Hi(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class Gl {
  constructor(e, t, r, o, i, s) {
    this._logger = r, this._accessTokenFactory = t, this._logMessageContent = o, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, t) {
    if (Q.isRequired(e, "url"), Q.isRequired(t, "transferFormat"), Q.isIn(t, ue, "transferFormat"), this._logger.log(_.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, o) => {
      e = e.replace(/^http/, "ws");
      let i;
      const s = this._httpClient.getCookieString(e);
      let a = !1;
      if (ie.isNode) {
        const l = {}, [c, u] = dt();
        l[c] = u, s && (l[Fe.Cookie] = `${s}`), i = new this._webSocketConstructor(e, void 0, {
          headers: { ...l, ...this._headers }
        });
      }
      i || (i = new this._webSocketConstructor(e)), t === ue.Binary && (i.binaryType = "arraybuffer"), i.onopen = (l) => {
        this._logger.log(_.Information, `WebSocket connected to ${e}.`), this._webSocket = i, a = !0, r();
      }, i.onerror = (l) => {
        let c = null;
        typeof ErrorEvent < "u" && l instanceof ErrorEvent ? c = l.error : c = "There was an error with the transport", this._logger.log(_.Information, `(WebSockets transport) ${c}.`);
      }, i.onmessage = (l) => {
        if (this._logger.log(_.Trace, `(WebSockets transport) data received. ${Tt(l.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(l.data);
          } catch (c) {
            this._close(c);
            return;
          }
      }, i.onclose = (l) => {
        if (a)
          this._close(l);
        else {
          let c = null;
          typeof ErrorEvent < "u" && l instanceof ErrorEvent ? c = l.error : c = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", o(new Error(c));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(_.Trace, `(WebSockets transport) sending data. ${Tt(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(_.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const fo = 100;
class Xl {
  constructor(e, t = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, Q.isRequired(e, "url"), this._logger = Rl(t.logger), this.baseUrl = this._resolveUrl(e), t = t || {}, t.logMessageContent = t.logMessageContent === void 0 ? !1 : t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0)
      t.withCredentials = t.withCredentials === void 0 ? !0 : t.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    t.timeout = t.timeout === void 0 ? 100 * 1e3 : t.timeout;
    let r = null, o = null;
    if (ie.isNode && typeof require < "u") {
      const i = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = i("ws"), o = i("eventsource");
    }
    !ie.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : ie.isNode && !t.WebSocket && r && (t.WebSocket = r), !ie.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : ie.isNode && !t.EventSource && typeof o < "u" && (t.EventSource = o), this._httpClient = t.httpClient || new zl(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || ue.Binary, Q.isIn(e, ue, "transferFormat"), this._logger.log(_.Debug, `Starting connection with transfer format '${ue[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const t = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(_.Error, t), await this._stopPromise, Promise.reject(new Error(t));
    } else if (this._connectionState !== "Connected") {
      const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(_.Error, t), Promise.reject(new Error(t));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new wr(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(_.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(_.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((t) => {
      this._stopPromiseResolver = t;
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
      } catch (t) {
        this._logger.log(_.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(_.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let t = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === Y.WebSockets)
          this.transport = this._constructTransport(Y.WebSockets), await this._startTransport(t, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let r = null, o = 0;
        do {
          if (r = await this._getNegotiationResponse(t), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new Error("The connection was stopped during negotiation.");
          if (r.error)
            throw new Error(r.error);
          if (r.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (r.url && (t = r.url), r.accessToken) {
            const i = r.accessToken;
            this._accessTokenFactory = () => i;
          }
          o++;
        } while (r.url && o < fo);
        if (o === fo && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(t, this._options.transport, r, e);
      }
      this.transport instanceof uo && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(_.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(_.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const t = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (t[Fe.Authorization] = `Bearer ${s}`);
    }
    const [r, o] = dt();
    t[r] = o;
    const i = this._resolveNegotiateUrl(e);
    this._logger.log(_.Debug, `Sending negotiation request: ${i}.`);
    try {
      const s = await this._httpClient.post(i, {
        content: "",
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (s.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${s.statusCode}'`));
      const a = JSON.parse(s.content);
      return (!a.negotiateVersion || a.negotiateVersion < 1) && (a.connectionToken = a.connectionId), a;
    } catch (s) {
      let a = "Failed to complete negotiation with the server: " + s;
      return s instanceof ft && s.statusCode === 404 && (a = a + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(_.Error, a), Promise.reject(new El(a));
    }
  }
  _createConnectUrl(e, t) {
    return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
  }
  async _createTransport(e, t, r, o) {
    let i = this._createConnectUrl(e, r.connectionToken);
    if (this._isITransport(t)) {
      this._logger.log(_.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(i, o), this.connectionId = r.connectionId;
      return;
    }
    const s = [], a = r.availableTransports || [];
    let l = r;
    for (const c of a) {
      const u = this._resolveTransportOrError(c, t, o);
      if (u instanceof Error)
        s.push(`${c.transport} failed:`), s.push(u);
      else if (this._isITransport(u)) {
        if (this.transport = u, !l) {
          try {
            l = await this._getNegotiationResponse(e);
          } catch (d) {
            return Promise.reject(d);
          }
          i = this._createConnectUrl(e, l.connectionToken);
        }
        try {
          await this._startTransport(i, o), this.connectionId = l.connectionId;
          return;
        } catch (d) {
          if (this._logger.log(_.Error, `Failed to start the transport '${c.transport}': ${d}`), l = void 0, s.push(new Cl(`${c.transport} failed: ${d}`, Y[c.transport])), this._connectionState !== "Connecting") {
            const f = "Failed to select transport before stop() was called.";
            return this._logger.log(_.Debug, f), Promise.reject(new Error(f));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new Il(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case Y.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Gl(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case Y.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new Wl(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case Y.LongPolling:
        return new uo(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, t) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, t);
  }
  _resolveTransportOrError(e, t, r) {
    const o = Y[e.transport];
    if (o == null)
      return this._logger.log(_.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (Jl(t, o))
      if (e.transferFormats.map((s) => ue[s]).indexOf(r) >= 0) {
        if (o === Y.WebSockets && !this._options.WebSocket || o === Y.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(_.Debug, `Skipping transport '${Y[o]}' because it is not supported in your environment.'`), new Sl(`'${Y[o]}' is not supported in your environment.`, o);
        this._logger.log(_.Debug, `Selecting transport '${Y[o]}'.`);
        try {
          return this._constructTransport(o);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(_.Debug, `Skipping transport '${Y[o]}' because it does not support the requested transfer format '${ue[r]}'.`), new Error(`'${Y[o]}' does not support ${ue[r]}.`);
    else
      return this._logger.log(_.Debug, `Skipping transport '${Y[o]}' because it was disabled by the client.`), new xl(`'${Y[o]}' is disabled by the client.`, o);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(_.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(_.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(_.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(_.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(_.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t) => {
      this._logger.log(_.Error, `TransportSendQueue.stop() threw error '${t}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (t) {
        this._logger.log(_.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!ie.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const t = window.document.createElement("a");
    return t.href = e, this._logger.log(_.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
  }
  _resolveNegotiateUrl(e) {
    const t = e.indexOf("?");
    let r = e.substring(0, t === -1 ? e.length : t);
    return r[r.length - 1] !== "/" && (r += "/"), r += "negotiate", r += t === -1 ? "" : e.substring(t), r.indexOf("negotiateVersion") === -1 && (r += t === -1 ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r;
  }
}
function Jl(n, e) {
  return !n || (e & n) !== 0;
}
class wr {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Nt(), this._transportResult = new Nt(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new Nt()), this._transportResult.promise;
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
      this._sendBufferedData = new Nt();
      const e = this._transportResult;
      this._transportResult = void 0;
      const t = typeof this._buffer[0] == "string" ? this._buffer.join("") : wr._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(t), e.resolve();
      } catch (r) {
        e.reject(r);
      }
    }
  }
  static _concatBuffers(e) {
    const t = e.map((i) => i.byteLength).reduce((i, s) => i + s), r = new Uint8Array(t);
    let o = 0;
    for (const i of e)
      r.set(new Uint8Array(i), o), o += i.byteLength;
    return r.buffer;
  }
}
class Nt {
  constructor() {
    this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const Yl = "json";
class Kl {
  constructor() {
    this.name = Yl, this.version = 1, this.transferFormat = ue.Text;
  }
  parseMessages(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    t === null && (t = It.instance);
    const r = ve.parse(e), o = [];
    for (const i of r) {
      const s = JSON.parse(i);
      if (typeof s.type != "number")
        throw new Error("Invalid payload.");
      switch (s.type) {
        case B.Invocation:
          this._isInvocationMessage(s);
          break;
        case B.StreamItem:
          this._isStreamItemMessage(s);
          break;
        case B.Completion:
          this._isCompletionMessage(s);
          break;
        case B.Ping:
          break;
        case B.Close:
          break;
        default:
          t.log(_.Information, "Unknown message type '" + s.type + "' ignored.");
          continue;
      }
      o.push(s);
    }
    return o;
  }
  writeMessage(e) {
    return ve.write(JSON.stringify(e));
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
  _assertNotEmptyString(e, t) {
    if (typeof e != "string" || e === "")
      throw new Error(t);
  }
}
const Ql = {
  trace: _.Trace,
  debug: _.Debug,
  info: _.Information,
  information: _.Information,
  warn: _.Warning,
  warning: _.Warning,
  error: _.Error,
  critical: _.Critical,
  none: _.None
};
function Zl(n) {
  const e = Ql[n.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${n}`);
}
class ec {
  configureLogging(e) {
    if (Q.isRequired(e, "logging"), tc(e))
      this.logger = e;
    else if (typeof e == "string") {
      const t = Zl(e);
      this.logger = new Yt(t);
    } else
      this.logger = new Yt(e);
    return this;
  }
  withUrl(e, t) {
    return Q.isRequired(e, "url"), Q.isNotEmpty(e, "url"), this.url = e, typeof t == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...t } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: t
    }, this;
  }
  withHubProtocol(e) {
    return Q.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new co(e) : this.reconnectPolicy = e : this.reconnectPolicy = new co(), this;
  }
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const t = new Xl(this.url, e);
    return gr.create(t, this.logger || It.instance, this.protocol || new Kl(), this.reconnectPolicy);
  }
}
function tc(n) {
  return n.log !== void 0;
}
var kt;
(function(n) {
  n.ChangeModeAsync = "ChangeModeAsync", n.ChangeIntervalAsync = "ChangeIntervalAsync", n.SubscribeMany = "SubscribeMany";
})(kt || (kt = {}));
var ho;
(function(n) {
  n.Send = "Send";
})(ho || (ho = {}));
var po;
(function(n) {
  n.S = "S", n.SO = "SO", n.T = "T", n.TC = "TC";
})(po || (po = {}));
class Hn {
  constructor(e, t) {
    this.httpConfig = e, this.accessToken = t, this._unsub = new fe(), this._connectionEstablished = new cr(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new fe(), this._subscribeRequested = new fe(), this._handleSubscriptionQueue();
  }
  connect() {
    return this.connectWithUrl(`${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Live}/hub`);
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), this._connectionEstablished.pipe(xt((t) => t), fl(null));
  }
  dispose() {
    var e;
    (e = this.hubConnection) === null || e === void 0 || e.stop(), this.hubConnection = null, this._unsub.next(), this._unsub.complete();
  }
  subscribeToSignalValues(e) {
    const t = e.map((r) => `S:${r}`);
    return this.subscribeLiveValuePackages(t);
  }
  subscribeToSignalOffsets(e) {
    const t = e.map((r) => `SO:${r}`);
    return this.subscribeLiveValuePackages(t);
  }
  subscribeToTimestamp(e) {
    return this.subscribeLiveValuePackages(e);
  }
  subscribeLiveValuePackages(e) {
    const t = e.filter((i) => !this._subscribedIds.includes(i));
    this.hubConnection && t.length > 0 && this._enqueueIdsToSubscribe(t);
    const r = this._getCachedValuePackages(e), o = this._livePackageObserver.pipe(ut((i) => i.filter((s) => e.includes(s.identifier))), xt((i) => i.length > 0));
    return r.length > 0 ? sl(it(r), o) : o;
  }
  _enqueueIdsToSubscribe(e) {
    const t = e.filter((r) => !this._queuedIds.includes(r));
    t.length > 0 && (this._queuedIds.push(...t), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe($e(this._unsub), ll(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(kt.SubscribeMany, e), this._subscribedIds.push(...e);
    });
  }
  _getCachedValuePackages(e) {
    return e.map((t) => this._valueCache[t]).filter((t) => t !== void 0);
  }
  _sendMessage(e, ...t) {
    this.hubConnection && this.hubConnection.send(e, ...t);
  }
  _handleHubMessage(e) {
    Array.isArray(e) ? (e.forEach((t) => {
      this._valueCache[t.identifier] = t;
    }), this._livePackageObserver.next(e)) : console.info("Unknown message: ", e);
  }
  _establishConnectionAndHandleEvents(e) {
    e.start().then(() => {
      this._sendMessage(kt.ChangeModeAsync, !0), this._sendMessage(kt.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (t) => this._handleHubMessage(t)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((t) => {
      this.hubConnection = null, this._connectionEstablished.error(t), console.log("Failed to start connection: " + t.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new ec().withUrl(e, {
      accessTokenFactory: () => this.accessToken
    }).build();
  }
}
var nc = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
};
class nd extends wt {
  constructor(e, t) {
    super(e, t);
  }
  requestHistoricalValues(e) {
    return nc(this, void 0, void 0, function* () {
      const t = `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Historian}/value/manyflat`, r = yield Ie.post(t, e, {
        headers: this.getAuthorizationHeader()
      });
      if (r.status !== 200)
        throw new Error(r.statusText);
      return r.data;
    });
  }
}
function F() {
}
function rc(n, e) {
  for (const t in e)
    n[t] = e[t];
  return n;
}
function oc(n) {
  return n && typeof n == "object" && typeof n.then == "function";
}
function Li(n) {
  return n();
}
function go() {
  return /* @__PURE__ */ Object.create(null);
}
function De(n) {
  n.forEach(Li);
}
function ic(n) {
  return typeof n == "function";
}
function J(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function sc(n) {
  return Object.keys(n).length === 0;
}
function _e(n, e, t, r) {
  if (n) {
    const o = Bi(n, e, t, r);
    return n[0](o);
  }
}
function Bi(n, e, t, r) {
  return n[1] && r ? rc(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function ke(n, e, t, r) {
  if (n[2] && r) {
    const o = n[2](r(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], s = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < s; a += 1)
        i[a] = e.dirty[a] | o[a];
      return i;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function Se(n, e, t, r, o, i) {
  if (o) {
    const s = Bi(e, t, r, i);
    n.p(s, o);
  }
}
function xe(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function C(n, e) {
  n.appendChild(e);
}
function mt(n, e, t) {
  const r = ac(n);
  if (!r.getElementById(e)) {
    const o = I("style");
    o.id = e, o.textContent = t, lc(r, o);
  }
}
function ac(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && e.host ? e : n.ownerDocument;
}
function lc(n, e) {
  C(n.head || n, e);
}
function P(n, e, t) {
  n.insertBefore(e, t || null);
}
function T(n) {
  n.parentNode.removeChild(n);
}
function ht(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function I(n) {
  return document.createElement(n);
}
function L(n) {
  return document.createTextNode(n);
}
function O() {
  return L(" ");
}
function un() {
  return L("");
}
function W(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function x(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function cc(n) {
  return Array.from(n.childNodes);
}
function de(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = e);
}
function Kt(n, e) {
  n.value = e == null ? "" : e;
}
function Pt(n, e, t, r) {
  t === null ? n.style.removeProperty(e) : n.style.setProperty(e, t, r ? "important" : "");
}
function uc(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  const o = document.createEvent("CustomEvent");
  return o.initCustomEvent(n, t, r, e), o;
}
let Rt;
function Re(n) {
  Rt = n;
}
function Ye() {
  if (!Rt)
    throw new Error("Function called outside component initialization");
  return Rt;
}
function Fi(n) {
  Ye().$$.on_mount.push(n);
}
function fc(n) {
  Ye().$$.after_update.push(n);
}
function ze(n) {
  Ye().$$.on_destroy.push(n);
}
function Ee() {
  const n = Ye();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const i = uc(e, t, { cancelable: r });
      return o.slice().forEach((s) => {
        s.call(n, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function tt(n, e) {
  return Ye().$$.context.set(n, e), e;
}
function nt(n) {
  return Ye().$$.context.get(n);
}
const _t = [], be = [], Bt = [], Ln = [], dc = Promise.resolve();
let Bn = !1;
function hc() {
  Bn || (Bn = !0, dc.then(mr));
}
function Fn(n) {
  Bt.push(n);
}
function br(n) {
  Ln.push(n);
}
const Dn = /* @__PURE__ */ new Set();
let Mt = 0;
function mr() {
  const n = Rt;
  do {
    for (; Mt < _t.length; ) {
      const e = _t[Mt];
      Mt++, Re(e), pc(e.$$);
    }
    for (Re(null), _t.length = 0, Mt = 0; be.length; )
      be.pop()();
    for (let e = 0; e < Bt.length; e += 1) {
      const t = Bt[e];
      Dn.has(t) || (Dn.add(t), t());
    }
    Bt.length = 0;
  } while (_t.length);
  for (; Ln.length; )
    Ln.pop()();
  Bn = !1, Dn.clear(), Re(n);
}
function pc(n) {
  if (n.fragment !== null) {
    n.update(), De(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Fn);
  }
}
const Ft = /* @__PURE__ */ new Set();
let Be;
function se() {
  Be = {
    r: 0,
    c: [],
    p: Be
  };
}
function ae() {
  Be.r || De(Be.c), Be = Be.p;
}
function S(n, e) {
  n && n.i && (Ft.delete(n), n.i(e));
}
function E(n, e, t, r) {
  if (n && n.o) {
    if (Ft.has(n))
      return;
    Ft.add(n), Be.c.push(() => {
      Ft.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function Qt(n, e) {
  const t = e.token = {};
  function r(o, i, s, a) {
    if (e.token !== t)
      return;
    e.resolved = a;
    let l = e.ctx;
    s !== void 0 && (l = l.slice(), l[s] = a);
    const c = o && (e.current = o)(l);
    let u = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, f) => {
      f !== i && d && (se(), E(d, 1, 1, () => {
        e.blocks[f] === d && (e.blocks[f] = null);
      }), ae());
    }) : e.block.d(1), c.c(), S(c, 1), c.m(e.mount(), e.anchor), u = !0), e.block = c, e.blocks && (e.blocks[i] = c), u && mr();
  }
  if (oc(n)) {
    const o = Ye();
    if (n.then((i) => {
      Re(o), r(e.then, 1, e.value, i), Re(null);
    }, (i) => {
      if (Re(o), r(e.catch, 2, e.error, i), Re(null), !e.hasCatch)
        throw i;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, n), !0;
    e.resolved = n;
  }
}
function qi(n, e, t) {
  const r = e.slice(), { resolved: o } = n;
  n.current === n.then && (r[n.value] = o), n.current === n.catch && (r[n.error] = o), n.block.p(r, t);
}
function vr(n, e, t) {
  const r = n.$$.props[e];
  r !== void 0 && (n.$$.bound[r] = t, t(n.$$.ctx[r]));
}
function U(n) {
  n && n.c();
}
function N(n, e, t, r) {
  const { fragment: o, on_mount: i, on_destroy: s, after_update: a } = n.$$;
  o && o.m(e, t), r || Fn(() => {
    const l = i.map(Li).filter(ic);
    s ? s.push(...l) : De(l), n.$$.on_mount = [];
  }), a.forEach(Fn);
}
function M(n, e) {
  const t = n.$$;
  t.fragment !== null && (De(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function gc(n, e) {
  n.$$.dirty[0] === -1 && (_t.push(n), hc(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(n, e, t, r, o, i, s, a = [-1]) {
  const l = Rt;
  Re(n);
  const c = n.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: F,
    not_equal: o,
    bound: go(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: go(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (d, f, ...h) => {
    const w = h.length ? h[0] : f;
    return c.ctx && o(c.ctx[d], c.ctx[d] = w) && (!c.skip_bound && c.bound[d] && c.bound[d](w), u && gc(n, d)), f;
  }) : [], c.update(), u = !0, De(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = cc(e.target);
      c.fragment && c.fragment.l(d), d.forEach(T);
    } else
      c.fragment && c.fragment.c();
    e.intro && S(n.$$.fragment), N(n, e.target, e.anchor, e.customElement), mr();
  }
  Re(l);
}
class te {
  $destroy() {
    M(this, 1), this.$destroy = F;
  }
  $on(e, t) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !sc(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
var qn;
(function(n) {
  n[n.Transient = 0] = "Transient", n[n.Singleton = 1] = "Singleton", n[n.ResolutionScoped = 2] = "ResolutionScoped", n[n.ContainerScoped = 3] = "ContainerScoped";
})(qn || (qn = {}));
const ge = qn;
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
var Vn = function(n, e) {
  return Vn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      r.hasOwnProperty(o) && (t[o] = r[o]);
  }, Vn(n, e);
};
function yr(n, e) {
  Vn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function wc(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(a, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function bc(n, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return t.label++, { value: c[1], done: !1 };
          case 5:
            t.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              t = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              t.label = c[1];
              break;
            }
            if (c[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = c;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(c);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        c = e.call(n, t);
      } catch (u) {
        c = [6, u], o = 0;
      } finally {
        r = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function jt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Zt(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var r = t.call(n), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function Le() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n = n.concat(Zt(arguments[e]));
  return n;
}
function Vi(n) {
  return !!n.useClass;
}
function Wn(n) {
  return !!n.useFactory;
}
var Wi = function() {
  function n(e) {
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
  return n.prototype.createProxy = function(e) {
    var t = this, r = {}, o = !1, i, s = function() {
      return o || (i = e(t.wrap()), o = !0), i;
    };
    return new Proxy(r, this.createHandler(s));
  }, n.prototype.createHandler = function(e) {
    var t = {}, r = function(o) {
      t[o] = function() {
        for (var i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        i[0] = e();
        var a = Reflect[o];
        return a.apply(void 0, Le(i));
      };
    };
    return this.reflectMethods.forEach(r), t;
  }, n;
}();
function Ze(n) {
  return typeof n == "string" || typeof n == "symbol";
}
function mc(n) {
  return typeof n == "object" && "token" in n && "multiple" in n;
}
function wo(n) {
  return typeof n == "object" && "token" in n && "transform" in n;
}
function vc(n) {
  return typeof n == "function" || n instanceof Wi;
}
function qt(n) {
  return !!n.useToken;
}
function Vt(n) {
  return n.useValue != null;
}
function yc(n) {
  return Vi(n) || Vt(n) || qt(n) || Wn(n);
}
var _r = function() {
  function n() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  return n.prototype.entries = function() {
    return this._registryMap.entries();
  }, n.prototype.getAll = function(e) {
    return this.ensure(e), this._registryMap.get(e);
  }, n.prototype.get = function(e) {
    this.ensure(e);
    var t = this._registryMap.get(e);
    return t[t.length - 1] || null;
  }, n.prototype.set = function(e, t) {
    this.ensure(e), this._registryMap.get(e).push(t);
  }, n.prototype.setAll = function(e, t) {
    this._registryMap.set(e, t);
  }, n.prototype.has = function(e) {
    return this.ensure(e), this._registryMap.get(e).length > 0;
  }, n.prototype.clear = function() {
    this._registryMap.clear();
  }, n.prototype.ensure = function(e) {
    this._registryMap.has(e) || this._registryMap.set(e, []);
  }, n;
}(), _c = function(n) {
  yr(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(_r), bo = function() {
  function n() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return n;
}();
function kc(n, e) {
  if (n === null)
    return "at position #" + e;
  var t = n.split(",")[e].trim();
  return '"' + t + '" at position #' + e;
}
function Sc(n, e, t) {
  return t === void 0 && (t = "    "), Le([n], e.message.split(`
`).map(function(r) {
    return t + r;
  })).join(`
`);
}
function xc(n, e, t) {
  var r = Zt(n.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), o = r[1], i = o === void 0 ? null : o, s = kc(i, e);
  return Sc("Cannot inject the dependency " + s + ' of "' + n.name + '" constructor. Reason:', t);
}
function Cc(n) {
  if (typeof n.dispose != "function")
    return !1;
  var e = n.dispose;
  return !(e.length > 0);
}
var Ec = function(n) {
  yr(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(_r), Ic = function(n) {
  yr(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(_r), Tc = function() {
  function n() {
    this.preResolution = new Ec(), this.postResolution = new Ic();
  }
  return n;
}(), Pc = /* @__PURE__ */ new Map(), Rc = function() {
  function n(e) {
    this.parent = e, this._registry = new _c(), this.interceptors = new Tc(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return n.prototype.register = function(e, t, r) {
    r === void 0 && (r = { lifecycle: ge.Transient }), this.ensureNotDisposed();
    var o;
    if (yc(t) ? o = t : o = { useClass: t }, qt(o))
      for (var i = [e], s = o; s != null; ) {
        var a = s.useToken;
        if (i.includes(a))
          throw new Error("Token registration cycle detected! " + Le(i, [a]).join(" -> "));
        i.push(a);
        var l = this._registry.get(a);
        l && qt(l.provider) ? s = l.provider : s = null;
      }
    if ((r.lifecycle === ge.Singleton || r.lifecycle == ge.ContainerScoped || r.lifecycle == ge.ResolutionScoped) && (Vt(o) || Wn(o)))
      throw new Error('Cannot use lifecycle "' + ge[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: o, options: r }), this;
  }, n.prototype.registerType = function(e, t) {
    return this.ensureNotDisposed(), Ze(t) ? this.register(e, {
      useToken: t
    }) : this.register(e, {
      useClass: t
    });
  }, n.prototype.registerInstance = function(e, t) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: t
    });
  }, n.prototype.registerSingleton = function(e, t) {
    if (this.ensureNotDisposed(), Ze(e)) {
      if (Ze(t))
        return this.register(e, {
          useToken: t
        }, { lifecycle: ge.Singleton });
      if (t)
        return this.register(e, {
          useClass: t
        }, { lifecycle: ge.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return t && !Ze(t) && (r = t), this.register(e, {
      useClass: r
    }, { lifecycle: ge.Singleton });
  }, n.prototype.resolve = function(e, t) {
    t === void 0 && (t = new bo()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && Ze(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var o = this.resolveRegistration(r, t);
      return this.executePostResolutionInterceptor(e, o, "Single"), o;
    }
    if (vc(e)) {
      var o = this.construct(e, t);
      return this.executePostResolutionInterceptor(e, o, "Single"), o;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, n.prototype.executePreResolutionInterceptor = function(e, t) {
    var r, o;
    if (this.interceptors.preResolution.has(e)) {
      var i = [];
      try {
        for (var s = jt(this.interceptors.preResolution.getAll(e)), a = s.next(); !a.done; a = s.next()) {
          var l = a.value;
          l.options.frequency != "Once" && i.push(l), l.callback(e, t);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          a && !a.done && (o = s.return) && o.call(s);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.interceptors.preResolution.setAll(e, i);
    }
  }, n.prototype.executePostResolutionInterceptor = function(e, t, r) {
    var o, i;
    if (this.interceptors.postResolution.has(e)) {
      var s = [];
      try {
        for (var a = jt(this.interceptors.postResolution.getAll(e)), l = a.next(); !l.done; l = a.next()) {
          var c = l.value;
          c.options.frequency != "Once" && s.push(c), c.callback(e, t, r);
        }
      } catch (u) {
        o = { error: u };
      } finally {
        try {
          l && !l.done && (i = a.return) && i.call(a);
        } finally {
          if (o)
            throw o.error;
        }
      }
      this.interceptors.postResolution.setAll(e, s);
    }
  }, n.prototype.resolveRegistration = function(e, t) {
    if (this.ensureNotDisposed(), e.options.lifecycle === ge.ResolutionScoped && t.scopedResolutions.has(e))
      return t.scopedResolutions.get(e);
    var r = e.options.lifecycle === ge.Singleton, o = e.options.lifecycle === ge.ContainerScoped, i = r || o, s;
    return Vt(e.provider) ? s = e.provider.useValue : qt(e.provider) ? s = i ? e.instance || (e.instance = this.resolve(e.provider.useToken, t)) : this.resolve(e.provider.useToken, t) : Vi(e.provider) ? s = i ? e.instance || (e.instance = this.construct(e.provider.useClass, t)) : this.construct(e.provider.useClass, t) : Wn(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, t), e.options.lifecycle === ge.ResolutionScoped && t.scopedResolutions.set(e, s), s;
  }, n.prototype.resolveAll = function(e, t) {
    var r = this;
    t === void 0 && (t = new bo()), this.ensureNotDisposed();
    var o = this.getAllRegistrations(e);
    if (!o && Ze(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "All"), o) {
      var i = o.map(function(a) {
        return r.resolveRegistration(a, t);
      });
      return this.executePostResolutionInterceptor(e, i, "All"), i;
    }
    var s = [this.construct(e, t)];
    return this.executePostResolutionInterceptor(e, s, "All"), s;
  }, n.prototype.isRegistered = function(e, t) {
    return t === void 0 && (t = !1), this.ensureNotDisposed(), this._registry.has(e) || t && (this.parent || !1) && this.parent.isRegistered(e, !0);
  }, n.prototype.reset = function() {
    this.ensureNotDisposed(), this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear();
  }, n.prototype.clearInstances = function() {
    var e, t;
    this.ensureNotDisposed();
    try {
      for (var r = jt(this._registry.entries()), o = r.next(); !o.done; o = r.next()) {
        var i = Zt(o.value, 2), s = i[0], a = i[1];
        this._registry.setAll(s, a.filter(function(l) {
          return !Vt(l.provider);
        }).map(function(l) {
          return l.instance = void 0, l;
        }));
      }
    } catch (l) {
      e = { error: l };
    } finally {
      try {
        o && !o.done && (t = r.return) && t.call(r);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, n.prototype.createChildContainer = function() {
    var e, t;
    this.ensureNotDisposed();
    var r = new n(this);
    try {
      for (var o = jt(this._registry.entries()), i = o.next(); !i.done; i = o.next()) {
        var s = Zt(i.value, 2), a = s[0], l = s[1];
        l.some(function(c) {
          var u = c.options;
          return u.lifecycle === ge.ContainerScoped;
        }) && r._registry.setAll(a, l.map(function(c) {
          return c.options.lifecycle === ge.ContainerScoped ? {
            provider: c.provider,
            options: c.options
          } : c;
        }));
      }
    } catch (c) {
      e = { error: c };
    } finally {
      try {
        i && !i.done && (t = o.return) && t.call(o);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return r;
  }, n.prototype.beforeResolution = function(e, t, r) {
    r === void 0 && (r = { frequency: "Always" }), this.interceptors.preResolution.set(e, {
      callback: t,
      options: r
    });
  }, n.prototype.afterResolution = function(e, t, r) {
    r === void 0 && (r = { frequency: "Always" }), this.interceptors.postResolution.set(e, {
      callback: t,
      options: r
    });
  }, n.prototype.dispose = function() {
    return wc(this, void 0, void 0, function() {
      var e;
      return bc(this, function(t) {
        switch (t.label) {
          case 0:
            return this.disposed = !0, e = [], this.disposables.forEach(function(r) {
              var o = r.dispose();
              o && e.push(o);
            }), [4, Promise.all(e)];
          case 1:
            return t.sent(), [2];
        }
      });
    });
  }, n.prototype.getRegistration = function(e) {
    return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null;
  }, n.prototype.getAllRegistrations = function(e) {
    return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null;
  }, n.prototype.construct = function(e, t) {
    var r = this;
    if (e instanceof Wi)
      return e.createProxy(function(i) {
        return r.resolve(i, t);
      });
    var o = function() {
      var i = Pc.get(e);
      if (!i || i.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = i.map(r.resolveParams(t, e));
      return new (e.bind.apply(e, Le([void 0], s)))();
    }();
    return Cc(o) && this.disposables.add(o), o;
  }, n.prototype.resolveParams = function(e, t) {
    var r = this;
    return function(o, i) {
      var s, a, l;
      try {
        return mc(o) ? wo(o) ? o.multiple ? (s = r.resolve(o.transform)).transform.apply(s, Le([r.resolveAll(o.token)], o.transformArgs)) : (a = r.resolve(o.transform)).transform.apply(a, Le([r.resolve(o.token, e)], o.transformArgs)) : o.multiple ? r.resolveAll(o.token) : r.resolve(o.token, e) : wo(o) ? (l = r.resolve(o.transform, e)).transform.apply(l, Le([r.resolve(o.token, e)], o.transformArgs)) : r.resolve(o, e);
      } catch (c) {
        throw new Error(xc(t, i, c));
      }
    };
  }, n.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, n;
}(), Gn = new Rc();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
const Ac = {
  [St.toString()]: "TenantHttpService",
  [zn.toString()]: "DataSourceHttpService",
  [We.toString()]: "EntityHttpService",
  [Ct.toString()]: "EntityNameService",
  [wt.toString()]: "BaseHttpService",
  [Hn.toString()]: "LiveValueService"
};
function Te(n, e = null) {
  var o, i;
  let t = (o = Ac[n.toString()]) != null ? o : n.toString(), r = (i = window.dependencyContainer) != null ? i : Gn;
  if (r.isRegistered(n))
    return r.resolve(n);
  if (r.isRegistered(t))
    return r.resolve(t);
  if (window[t])
    return window[t];
  if (e)
    return e;
  throw new Error(`Service ${t == null ? void 0 : t.toString()} not found`);
}
function rt(n, e) {
  try {
    if (Gn.isRegistered(n))
      return;
    Gn.register(n, { useValue: e });
  } catch {
    throw new Error(`Failed to register service: ${n == null ? void 0 : n.toString()}`);
  }
}
function kr(...n) {
  const e = {
    config: {},
    state: {}
  };
  for (const {
    config: t,
    props: r
  } of n)
    Object.assign(e.config, t), Object.assign(e.state, r);
  return e;
}
const Gi = new cr(!1), $c = Gi.asObservable().pipe(xt((n) => !n), ul(1)), mo = {}, Sr = /* @__PURE__ */ new Map(), xr = new fe();
xr.asObservable();
function Dc(n) {
  Sr.set(n.name, n), xr.next({
    type: "add",
    store: n
  });
}
function Oc(n) {
  Sr.delete(n.name), xr.next({
    type: "remove",
    store: n
  });
}
function Nc() {
  return Sr;
}
class Cr extends cr {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Dc(this);
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
    const t = this.getValue();
    let r = e.reduce((o, i) => (o = i(o, this.context), o), t);
    mo.preStoreUpdate && (r = mo.preStoreUpdate(t, r, this.name)), r !== t && (this.state = r, Gi.getValue() ? this.batchInProgress || (this.batchInProgress = !0, $c.subscribe(() => {
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
    let t = !0;
    const r = {};
    return new he((o) => {
      for (const [i, s] of Object.entries(e))
        o.add(s.subscribe((a) => {
          r[i] = a, t = !0;
        }));
      return this.subscribe({
        next() {
          t && (o.next(r), t = !1);
        },
        error(i) {
          o.error(i);
        },
        complete() {
          o.complete();
        }
      });
    });
  }
  destroy() {
    Oc(this), this.reset();
  }
  next(e) {
    this.update(() => e);
  }
  error() {
  }
  complete() {
  }
}
function Mc(n, ...e) {
  const {
    state: t,
    config: r
  } = kr(...e), {
    name: o
  } = n;
  return new Cr({
    name: o,
    state: t,
    config: r
  });
}
function Er(n) {
  return {
    props: n,
    config: void 0
  };
}
function jc(n, e) {
  var t;
  const r = {
    source: (c) => c,
    preStoreInit: (c) => c,
    key: (t = e.key) != null ? t : `${n.name}@store`,
    runGuard() {
      return typeof window < "u";
    }
  }, o = Object.assign({}, r, e);
  if (!(o.runGuard != null && o.runGuard()))
    return {
      initialized$: it(!1),
      unsubscribe() {
      }
    };
  const {
    storage: i
  } = e, s = new bi(1), a = Je(i.getItem(o.key)).subscribe((c) => {
    c && n.update((u) => o.preStoreInit(Object.assign({}, u, c))), s.next(!0), s.complete();
  }), l = o.source(n).pipe(bl(1), ji((c) => i.setItem(o.key, c))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      l.unsubscribe(), a.unsubscribe();
    }
  };
}
function Uc(n) {
  if (!!n)
    return {
      getItem(e) {
        const t = n.getItem(e);
        return it(t && JSON.parse(t));
      },
      setItem(e, t) {
        return n.setItem(e, JSON.stringify(t)), it(!0);
      },
      removeItem(e) {
        return n.removeItem(e), it(!0);
      }
    };
}
const zc = Uc(typeof localStorage < "u" ? localStorage : void 0), et = [];
function en(n, e = F) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (J(n, a) && (n = a, t)) {
      const l = !et.length;
      for (const c of r)
        c[1](), et.push(c, n);
      if (l) {
        for (let c = 0; c < et.length; c += 2)
          et[c][0](et[c + 1]);
        et.length = 0;
      }
    }
  }
  function i(a) {
    o(a(n));
  }
  function s(a, l = F) {
    const c = [a, l];
    return r.add(c), r.size === 1 && (t = e(o) || F), a(n), () => {
      r.delete(c), r.size === 0 && (t(), t = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
const vo = en(X.Signal), { config: Hc, state: Lc } = kr(Er({
  queryWithSubGroups: !0,
  selectedTenant: null
})), qe = Mc({ name: "entity-select-selection" }, Er({
  selectedEntities: []
})), Ve = new Cr({ state: Lc, config: Hc, name: "entity-select-global" });
jc(Ve, {
  key: "entity-select-global",
  storage: zc
});
const pt = (n) => {
  const e = Nc().get(`entity-select-type-${vo}`);
  if (e)
    return e;
  const { state: t, config: r } = kr(Er({
    filter: null,
    selectedGroup: null,
    lastSelectedEntities: []
  }));
  return new Cr({ state: t, config: r, name: `entity-select-type-${vo}` });
};
function yo(n, e, t) {
  const r = n.slice();
  return r[15] = e[t], r;
}
function Bc(n) {
  let e;
  return {
    c() {
      e = I("div"), x(e, "class", "p-[10px]");
    },
    m(t, r) {
      P(t, e, r);
    },
    p: F,
    d(t) {
      t && T(e);
    }
  };
}
function Fc(n) {
  let e;
  function t(i, s) {
    return i[0] ? Vc : qc;
  }
  let r = t(n), o = r(n);
  return {
    c() {
      e = I("div"), o.c(), x(e, "class", "flex items-center");
    },
    m(i, s) {
      P(i, e, s), o.m(e, null);
    },
    p(i, s) {
      r === (r = t(i)) && o ? o.p(i, s) : (o.d(1), o = r(i), o && (o.c(), o.m(e, null)));
    },
    d(i) {
      i && T(e), o.d();
    }
  };
}
function qc(n) {
  let e, t, r;
  return {
    c() {
      e = I("span"), e.textContent = "chevron_right", x(e, "class", "material-symbols-rounded text-[20px] w-[20px] cursor-pointer");
    },
    m(o, i) {
      P(o, e, i), t || (r = W(e, "click", n[9]), t = !0);
    },
    p: F,
    d(o) {
      o && T(e), t = !1, r();
    }
  };
}
function Vc(n) {
  let e, t, r;
  return {
    c() {
      e = I("span"), e.textContent = "expand_more", x(e, "class", "material-symbols-rounded text-[20px] w-[20px] cursor-pointer");
    },
    m(o, i) {
      P(o, e, i), t || (r = W(e, "click", n[8]), t = !0);
    },
    p: F,
    d(o) {
      o && T(e), t = !1, r();
    }
  };
}
function _o(n) {
  let e, t, r, o, i, s = n[4], a = [];
  for (let c = 0; c < s.length; c += 1)
    a[c] = ko(yo(n, s, c));
  const l = (c) => E(a[c], 1, 1, () => {
    a[c] = null;
  });
  return {
    c() {
      e = I("div"), t = I("div"), r = O(), o = I("div");
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      x(t, "class", "border-r group-hover:border-gray-300 border-transparent pl-1 mb-2"), Pt(t, "padding-right", n[2] * 4 + "px"), x(o, "class", "w-full"), x(e, "class", "flex w-full");
    },
    m(c, u) {
      P(c, e, u), C(e, t), C(e, r), C(e, o);
      for (let d = 0; d < a.length; d += 1)
        a[d].m(o, null);
      i = !0;
    },
    p(c, u) {
      if ((!i || u & 4) && Pt(t, "padding-right", c[2] * 4 + "px"), u & 28) {
        s = c[4];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const f = yo(c, s, d);
          a[d] ? (a[d].p(f, u), S(a[d], 1)) : (a[d] = ko(f), a[d].c(), S(a[d], 1), a[d].m(o, null));
        }
        for (se(), d = s.length; d < a.length; d += 1)
          l(d);
        ae();
      }
    },
    i(c) {
      if (!i) {
        for (let u = 0; u < s.length; u += 1)
          S(a[u]);
        i = !0;
      }
    },
    o(c) {
      a = a.filter(Boolean);
      for (let u = 0; u < a.length; u += 1)
        E(a[u]);
      i = !1;
    },
    d(c) {
      c && T(e), ht(a, c);
    }
  };
}
function ko(n) {
  let e, t;
  return e = new Xi({
    props: {
      group: n[15],
      level: n[2] + 1,
      entityType: n[3]
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o & 16 && (i.group = r[15]), o & 4 && (i.level = r[2] + 1), o & 8 && (i.entityType = r[3]), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function Wc(n) {
  var g, k;
  let e, t, r, o, i, s, a = ((k = (g = n[1]) == null ? void 0 : g.Name) == null ? void 0 : k.Value) + "", l, c, u, d, f, h;
  function w(m, v) {
    return m[4].length > 0 ? Fc : Bc;
  }
  let p = w(n), b = p(n), y = n[0] && _o(n);
  return {
    c() {
      e = I("div"), t = I("div"), r = I("div"), o = O(), b.c(), i = O(), s = I("div"), l = L(a), u = O(), y && y.c(), x(s, "class", "overflow-hidden whitespace-nowrap text-ellipsis w-full"), x(t, "class", c = "flex items-center hover:bg-slate-100 w-full " + (n[5] ? "!bg-slate-300" : "")), x(e, "class", "group cursor-pointer");
    },
    m(m, v) {
      P(m, e, v), C(e, t), C(t, r), C(t, o), b.m(t, null), C(t, i), C(t, s), C(s, l), C(e, u), y && y.m(e, null), d = !0, f || (h = W(t, "click", n[10]), f = !0);
    },
    p(m, [v]) {
      var j, A;
      p === (p = w(m)) && b ? b.p(m, v) : (b.d(1), b = p(m), b && (b.c(), b.m(t, i))), (!d || v & 2) && a !== (a = ((A = (j = m[1]) == null ? void 0 : j.Name) == null ? void 0 : A.Value) + "") && de(l, a), (!d || v & 32 && c !== (c = "flex items-center hover:bg-slate-100 w-full " + (m[5] ? "!bg-slate-300" : ""))) && x(t, "class", c), m[0] ? y ? (y.p(m, v), v & 1 && S(y, 1)) : (y = _o(m), y.c(), S(y, 1), y.m(e, null)) : y && (se(), E(y, 1, 1, () => {
        y = null;
      }), ae());
    },
    i(m) {
      d || (S(y), d = !0);
    },
    o(m) {
      E(y), d = !1;
    },
    d(m) {
      m && T(e), b.d(), y && y.d(), f = !1, h();
    }
  };
}
function Gc(n, e, t) {
  const r = Te(We);
  let { group: o } = e, { expanded: i = !1 } = e, { level: s = 1 } = e, { entityType: a } = e, l = [], c = !1, u = new fe(), d = pt();
  d.pipe($e(u), pl("selectedGroup")).subscribe((g) => {
    var k, m;
    t(5, c = ((k = g.selectedGroup) == null ? void 0 : k.Id) === (o == null ? void 0 : o.Id)), o && ((m = g.selectedGroup) == null ? void 0 : m.Path.includes(o.Id)) && t(0, i = !0);
  });
  async function f() {
    try {
      t(4, l = await (await r.queryConfiguration(X.Group, { GroupId: o.Id })).data);
    } catch (g) {
      console.error(g);
    }
  }
  function h() {
    t(0, i = !i);
  }
  function w() {
    d.update((g) => ({ ...g, selectedGroup: o }));
  }
  ze(() => {
    u.next(), u.complete();
  });
  const p = () => h(), b = () => h(), y = () => w();
  return n.$$set = (g) => {
    "group" in g && t(1, o = g.group), "expanded" in g && t(0, i = g.expanded), "level" in g && t(2, s = g.level), "entityType" in g && t(3, a = g.entityType);
  }, n.$$.update = () => {
    n.$$.dirty & 2 && o && f();
  }, [
    i,
    o,
    s,
    a,
    l,
    c,
    h,
    w,
    p,
    b,
    y
  ];
}
class Xi extends te {
  constructor(e) {
    super(), ee(this, e, Gc, Wc, J, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function Xc(n) {
  mt(n, "svelte-ji3t05", ".container.svelte-ji3t05{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-ji3t05{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function Jc(n) {
  let e;
  return {
    c() {
      e = L(n[0]);
    },
    m(t, r) {
      P(t, e, r);
    },
    p(t, r) {
      r & 1 && de(e, t[0]);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Yc(n) {
  let e, t, r, o, i, s, a, l, c, u;
  const d = n[11].default, f = _e(d, n, n[10], null), h = f || Jc(n);
  return {
    c() {
      e = I("div"), t = I("div"), o = O(), i = I("span"), h && h.c(), x(t, "class", "ripple bg-gray-200 bg-opacity-50 svelte-ji3t05"), x(t, "style", r = n[5] ? "width: 100% !important; height: 100% !important" : ""), x(i, "class", "material-symbols-rounded z-[1] select-none"), Pt(i, "font-size", n[4] + "px"), x(e, "class", s = "container group " + n[1] + " svelte-ji3t05"), x(e, "style", a = "height: " + n[3] + "px; width: " + n[3] + "px; " + (n[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(w, p) {
      P(w, e, p), C(e, t), C(e, o), C(e, i), h && h.m(i, null), l = !0, c || (u = [
        W(e, "mousedown", n[12]),
        W(e, "mouseup", n[13]),
        W(e, "mouseout", n[14]),
        W(e, "click", n[15]),
        W(e, "blur", Kc)
      ], c = !0);
    },
    p(w, [p]) {
      (!l || p & 32 && r !== (r = w[5] ? "width: 100% !important; height: 100% !important" : "")) && x(t, "style", r), f ? f.p && (!l || p & 1024) && Se(f, d, w, w[10], l ? ke(d, w[10], p, null) : xe(w[10]), null) : h && h.p && (!l || p & 1) && h.p(w, l ? p : -1), (!l || p & 16) && Pt(i, "font-size", w[4] + "px"), (!l || p & 2 && s !== (s = "container group " + w[1] + " svelte-ji3t05")) && x(e, "class", s), (!l || p & 12 && a !== (a = "height: " + w[3] + "px; width: " + w[3] + "px; " + (w[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && x(e, "style", a);
    },
    i(w) {
      l || (S(h, w), l = !0);
    },
    o(w) {
      E(h, w), l = !1;
    },
    d(w) {
      w && T(e), h && h.d(w), c = !1, De(u);
    }
  };
}
const Kc = (n) => {
};
function Qc(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { icon: i = null } = e, { size: s = "medium" } = e, { className: a = "" } = e, { disabled: l = !1 } = e, c, u, d, f, h = Ee();
  function w(v) {
    l || (t(5, d = !0), f = v.timeStamp);
  }
  function p(v) {
    const j = v.timeStamp - f;
    j < 300 ? setTimeout(() => {
      t(5, d = !1);
    }, 300 - j) : t(5, d = !1);
  }
  function b(v) {
    l || h("click", v);
  }
  const y = (v) => w(v), g = (v) => p(v), k = (v) => p(v), m = (v) => b(v);
  return n.$$set = (v) => {
    "icon" in v && t(0, i = v.icon), "size" in v && t(9, s = v.size), "className" in v && t(1, a = v.className), "disabled" in v && t(2, l = v.disabled), "$$scope" in v && t(10, o = v.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty & 512)
      switch (s) {
        case "small":
          t(3, c = 24), t(4, u = 20);
          break;
        case "medium":
          t(3, c = 40), t(4, u = 24);
          break;
        case "large":
          t(3, c = 56), t(4, u = 30);
          break;
      }
  }, [
    i,
    a,
    l,
    c,
    u,
    d,
    w,
    p,
    b,
    s,
    o,
    r,
    y,
    g,
    k,
    m
  ];
}
class Me extends te {
  constructor(e) {
    super(), ee(this, e, Qc, Yc, J, {
      icon: 0,
      size: 9,
      className: 1,
      disabled: 2
    }, Xc);
  }
}
function Zc(n) {
  let e, t, r, o, i, s, a;
  return {
    c() {
      e = I("div"), t = I("input"), r = O(), o = I("div"), i = L(n[1]), x(t, "type", "checkbox"), x(t, "class", "mr-2 h-[18px] w-[18px] cursor-pointer"), x(e, "class", "flex items-center cursor-pointer");
    },
    m(l, c) {
      P(l, e, c), C(e, t), n[5](t), t.checked = n[0], C(e, r), C(e, o), C(o, i), s || (a = [
        W(t, "change", n[6]),
        W(e, "click", n[7])
      ], s = !0);
    },
    p(l, [c]) {
      c & 1 && (t.checked = l[0]), c & 2 && de(i, l[1]);
    },
    i: F,
    o: F,
    d(l) {
      l && T(e), n[5](null), s = !1, De(a);
    }
  };
}
function eu(n, e, t) {
  let { label: r = "" } = e, { checked: o = !1 } = e, { indeterminate: i = !1 } = e, s = Ee(), a;
  function l(f) {
    t(0, o = !o), s("change", { checked: o });
  }
  function c(f) {
    be[f ? "unshift" : "push"](() => {
      a = f, t(2, a), t(4, i), t(0, o);
    });
  }
  function u() {
    o = this.checked, t(0, o);
  }
  const d = (f) => l();
  return n.$$set = (f) => {
    "label" in f && t(1, r = f.label), "checked" in f && t(0, o = f.checked), "indeterminate" in f && t(4, i = f.indeterminate);
  }, n.$$.update = () => {
    n.$$.dirty & 21 && (i && a && !o ? t(2, a.indeterminate = !0, a) : a && (t(2, a.indeterminate = !1, a), t(2, a.checked = o, a)));
  }, [
    o,
    r,
    a,
    l,
    i,
    c,
    u,
    d
  ];
}
class $t extends te {
  constructor(e) {
    super(), ee(this, e, eu, Zc, J, { label: 1, checked: 0, indeterminate: 4 });
  }
}
function So(n, e, t) {
  const r = n.slice();
  return r[17] = e[t], r[19] = t, r;
}
function tu(n) {
  let e;
  return {
    c() {
      e = L("edit");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function xo(n) {
  let e, t, r;
  return t = new Xi({
    props: {
      group: n[3],
      expanded: !0,
      entityType: n[0]
    }
  }), {
    c() {
      e = I("div"), U(t.$$.fragment), x(e, "class", "flex-[2] overflow-auto");
    },
    m(o, i) {
      P(o, e, i), N(t, e, null), r = !0;
    },
    p(o, i) {
      const s = {};
      i & 8 && (s.group = o[3]), i & 1 && (s.entityType = o[0]), t.$set(s);
    },
    i(o) {
      r || (S(t.$$.fragment, o), r = !0);
    },
    o(o) {
      E(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(e), M(t);
    }
  };
}
function Co(n) {
  let e, t, r = n[4], o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Io(So(n, r, s));
  const i = (s) => E(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = un();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l].m(s, a);
      P(s, e, a), t = !0;
    },
    p(s, a) {
      if (a & 373) {
        r = s[4];
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = So(s, r, l);
          o[l] ? (o[l].p(c, a), S(o[l], 1)) : (o[l] = Io(c), o[l].c(), S(o[l], 1), o[l].m(e.parentNode, e));
        }
        for (se(), l = r.length; l < o.length; l += 1)
          i(l);
        ae();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < r.length; a += 1)
          S(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        E(o[a]);
      t = !1;
    },
    d(s) {
      ht(o, s), s && T(e);
    }
  };
}
function Eo(n) {
  let e, t;
  return e = new $t({
    props: {
      checked: n[5][n[17]]
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o & 48 && (i.checked = r[5][r[17]]), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function nu(n) {
  return { c: F, m: F, p: F, d: F };
}
function ru(n) {
  let e = n[20] + "", t;
  return {
    c() {
      t = L(e);
    },
    m(r, o) {
      P(r, t, o);
    },
    p(r, o) {
      o & 17 && e !== (e = r[20] + "") && de(t, e);
    },
    d(r) {
      r && T(t);
    }
  };
}
function ou(n) {
  return { c: F, m: F, p: F, d: F };
}
function Io(n) {
  let e, t, r, o, i, s, a, l, c = n[2] && Eo(n), u = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ou,
    then: ru,
    catch: nu,
    value: 20
  };
  Qt(r = n[6].resolveName(n[0], n[17]), u);
  function d() {
    return n[10](n[17]);
  }
  return {
    c() {
      e = I("div"), c && c.c(), t = O(), u.block.c(), o = O(), x(e, "class", i = "flex w-full hover:bg-gray-200 cursor-pointer " + (n[19] < n[4].length - 1 ? "border-b" : ""));
    },
    m(f, h) {
      P(f, e, h), c && c.m(e, null), C(e, t), u.block.m(e, u.anchor = null), u.mount = () => e, u.anchor = o, C(e, o), s = !0, a || (l = W(e, "click", d), a = !0);
    },
    p(f, h) {
      n = f, n[2] ? c ? (c.p(n, h), h & 4 && S(c, 1)) : (c = Eo(n), c.c(), S(c, 1), c.m(e, t)) : c && (se(), E(c, 1, 1, () => {
        c = null;
      }), ae()), u.ctx = n, h & 17 && r !== (r = n[6].resolveName(n[0], n[17])) && Qt(r, u) || qi(u, n, h), (!s || h & 16 && i !== (i = "flex w-full hover:bg-gray-200 cursor-pointer " + (n[19] < n[4].length - 1 ? "border-b" : ""))) && x(e, "class", i);
    },
    i(f) {
      s || (S(c), s = !0);
    },
    o(f) {
      E(c), s = !1;
    },
    d(f) {
      f && T(e), c && c.d(), u.block.d(), u.token = null, u = null, a = !1, l();
    }
  };
}
function iu(n) {
  var y;
  let e, t, r = ((y = n[1]) == null ? void 0 : y.Name) + "", o, i, s, a, l, c, u, d, f, h, w;
  s = new Me({
    props: {
      size: "small",
      $$slots: { default: [tu] },
      $$scope: { ctx: n }
    }
  });
  let p = n[3] && xo(n), b = n[4] && n[4].length > 0 && Co(n);
  return {
    c() {
      e = I("div"), t = I("div"), o = L(r), i = O(), U(s.$$.fragment), a = O(), p && p.c(), l = O(), c = I("div"), u = I("div"), u.textContent = "Zuletzt ausgew\xE4hlt", d = O(), b && b.c(), x(t, "class", "font-bold text-lg flex items-center cursor-pointer group"), x(u, "class", "font-bold text-gray-700"), x(c, "class", "flex-1"), x(e, "class", "flex flex-col w-full h-full overflow-hidden");
    },
    m(g, k) {
      P(g, e, k), C(e, t), C(t, o), C(t, i), N(s, t, null), C(e, a), p && p.m(e, null), C(e, l), C(e, c), C(c, u), C(c, d), b && b.m(c, null), f = !0, h || (w = W(t, "click", n[9]), h = !0);
    },
    p(g, [k]) {
      var v;
      (!f || k & 2) && r !== (r = ((v = g[1]) == null ? void 0 : v.Name) + "") && de(o, r);
      const m = {};
      k & 2097152 && (m.$$scope = { dirty: k, ctx: g }), s.$set(m), g[3] ? p ? (p.p(g, k), k & 8 && S(p, 1)) : (p = xo(g), p.c(), S(p, 1), p.m(e, l)) : p && (se(), E(p, 1, 1, () => {
        p = null;
      }), ae()), g[4] && g[4].length > 0 ? b ? (b.p(g, k), k & 16 && S(b, 1)) : (b = Co(g), b.c(), S(b, 1), b.m(c, null)) : b && (se(), E(b, 1, 1, () => {
        b = null;
      }), ae());
    },
    i(g) {
      f || (S(s.$$.fragment, g), S(p), S(b), f = !0);
    },
    o(g) {
      E(s.$$.fragment, g), E(p), E(b), f = !1;
    },
    d(g) {
      g && T(e), M(s), p && p.d(), b && b.d(), h = !1, w();
    }
  };
}
function su(n, e, t) {
  let r = Te(We), o = Te(Ct), { entityType: i } = e, { selectedTenant: s } = e, { selectMultiple: a = !1 } = e, l = null, c, u = [], d = {}, f = Ee(), h = new fe(), w = pt();
  w.pipe($e(h)).subscribe((m) => {
    t(4, c = m.lastSelectedEntities);
  });
  const p = qe.subscribe((m) => {
    u = m.selectedEntities, t(5, d = {});
    for (let v of u)
      t(5, d[v.Id] = !0, d);
    console.log("selectedEntities", u, d);
  });
  async function b(m) {
    var v;
    try {
      t(3, l = await r.getEntityById(X.Group, m)), (!((v = w.value) != null && v.selectedGroup) || w.value.selectedGroup.Id != l.Id) && w.update((j) => ({ ...j, selectedGroup: l }));
    } catch (j) {
      console.log(j);
    }
  }
  async function y(m) {
    let v = await r.getEntityById(i, m);
    a ? d[m] ? u = u.filter((j) => j.Id !== m) : u.push(v) : u = [v], qe.update((j) => ({ ...j, selectedEntities: u }));
  }
  fc(() => {
    try {
      s && s.Root && l === null && b(s.Root);
    } catch {
    }
  }), ze(() => {
    console.log("onDestroy"), p.unsubscribe();
  });
  const g = () => f("changeTenant"), k = (m) => y(m);
  return n.$$set = (m) => {
    "entityType" in m && t(0, i = m.entityType), "selectedTenant" in m && t(1, s = m.selectedTenant), "selectMultiple" in m && t(2, a = m.selectMultiple);
  }, [
    i,
    s,
    a,
    l,
    c,
    d,
    o,
    f,
    y,
    g,
    k
  ];
}
class au extends te {
  constructor(e) {
    super(), ee(this, e, su, iu, J, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const lu = (n) => ({}), To = (n) => ({});
function cu(n) {
  let e, t, r, o;
  const i = n[2].default, s = _e(i, n, n[1], null), a = n[2].pagination, l = _e(a, n, n[1], To);
  return {
    c() {
      e = I("div"), t = I("div"), s && s.c(), r = O(), l && l.c(), x(t, "class", "w-full overflow-auto flex-1"), x(e, "class", "flex flex-col h-full");
    },
    m(c, u) {
      P(c, e, u), C(e, t), s && s.m(t, null), C(e, r), l && l.m(e, null), o = !0;
    },
    p(c, [u]) {
      s && s.p && (!o || u & 2) && Se(s, i, c, c[1], o ? ke(i, c[1], u, null) : xe(c[1]), null), l && l.p && (!o || u & 2) && Se(l, a, c, c[1], o ? ke(a, c[1], u, lu) : xe(c[1]), To);
    },
    i(c) {
      o || (S(s, c), S(l, c), o = !0);
    },
    o(c) {
      E(s, c), E(l, c), o = !1;
    },
    d(c) {
      c && T(e), s && s.d(c), l && l.d(c);
    }
  };
}
function uu(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { startSort: i = null } = e, s = Ee(), a = en(i);
  tt("audako:table:sort", a);
  let l = a.subscribe((c) => {
    s("sort", c);
  });
  return ze(() => {
    l();
  }), n.$$set = (c) => {
    "startSort" in c && t(0, i = c.startSort), "$$scope" in c && t(1, o = c.$$scope);
  }, [i, o, r];
}
class fu extends te {
  constructor(e) {
    super(), ee(this, e, uu, cu, J, { startSort: 0 });
  }
}
function du(n) {
  mt(n, "svelte-dvksjt", ".audako-tableheader-flexrow.svelte-dvksjt{display:flex;height:40px;position:-webkit-sticky;position:sticky;top:0;background:white}.audako-tableheader-flexrow > *{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow > *:first-child{padding-left:12px !important}.audako-tableheader-flexrow > *:last-child{padding-right:12px !important}");
}
function hu(n) {
  let e, t;
  const r = n[2].default, o = _e(r, n, n[1], null);
  return {
    c() {
      e = I("div"), o && o.c(), x(e, "class", "audako-tableheader-flexrow font-bold svelte-dvksjt");
    },
    m(i, s) {
      P(i, e, s), o && o.m(e, null), n[3](e), t = !0;
    },
    p(i, [s]) {
      o && o.p && (!t || s & 2) && Se(o, r, i, i[1], t ? ke(r, i[1], s, null) : xe(i[1]), null);
    },
    i(i) {
      t || (S(o, i), t = !0);
    },
    o(i) {
      E(o, i), t = !1;
    },
    d(i) {
      i && T(e), o && o.d(i), n[3](null);
    }
  };
}
function pu(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, i;
  function s(a) {
    be[a ? "unshift" : "push"](() => {
      i = a, t(0, i);
    });
  }
  return n.$$set = (a) => {
    "$$scope" in a && t(1, o = a.$$scope);
  }, [i, o, r, s];
}
class gu extends te {
  constructor(e) {
    super(), ee(this, e, pu, hu, J, {}, du);
  }
}
function Po(n) {
  let e, t, r;
  return {
    c() {
      e = I("span"), t = L("north"), x(e, "class", "material-symbols-rounded text-xs transition-all"), x(e, "style", r = (n[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (n[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(o, i) {
      P(o, e, i), C(e, t);
    },
    p(o, i) {
      i & 4 && r !== (r = (o[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (o[2] == null ? "opacity: 0;" : "opacity: 1;")) && x(e, "style", r);
    },
    d(o) {
      o && T(e);
    }
  };
}
function wu(n) {
  let e, t, r, o, i, s, a;
  const l = n[6].default, c = _e(l, n, n[5], null);
  let u = n[0] && Po(n);
  return {
    c() {
      e = I("div"), t = I("div"), c && c.c(), r = O(), u && u.c(), x(e, "class", o = "flex w-full h-full " + (n[0] ? "cursor-pointer" : "") + " " + n[1]);
    },
    m(d, f) {
      P(d, e, f), C(e, t), c && c.m(t, null), C(e, r), u && u.m(e, null), i = !0, s || (a = W(e, "click", n[7]), s = !0);
    },
    p(d, [f]) {
      c && c.p && (!i || f & 32) && Se(c, l, d, d[5], i ? ke(l, d[5], f, null) : xe(d[5]), null), d[0] ? u ? u.p(d, f) : (u = Po(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!i || f & 3 && o !== (o = "flex w-full h-full " + (d[0] ? "cursor-pointer" : "") + " " + d[1])) && x(e, "class", o);
    },
    i(d) {
      i || (S(c, d), i = !0);
    },
    o(d) {
      E(c, d), i = !1;
    },
    d(d) {
      d && T(e), c && c.d(d), u && u.d(), s = !1, a();
    }
  };
}
function bu(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { sortable: i = !1 } = e, { id: s } = e, { container$class: a = "" } = e, l = "asc", c = nt("audako:table:sort");
  console.log(c);
  let u = c.subscribe((h) => {
    s && (h == null ? void 0 : h.active) === s ? t(2, l = h.direction) : t(2, l = null);
  });
  function d() {
    l === "asc" ? t(2, l = "desc") : l === "desc" ? t(2, l = null) : t(2, l = "asc"), c.set(l ? { active: s, direction: l } : null);
  }
  ze(() => {
    u();
  });
  const f = () => d();
  return n.$$set = (h) => {
    "sortable" in h && t(0, i = h.sortable), "id" in h && t(4, s = h.id), "container$class" in h && t(1, a = h.container$class), "$$scope" in h && t(5, o = h.$$scope);
  }, [
    i,
    a,
    l,
    d,
    s,
    o,
    r,
    f
  ];
}
class Xn extends te {
  constructor(e) {
    super(), ee(this, e, bu, wu, J, { sortable: 0, id: 4, container$class: 1 });
  }
}
function mu(n) {
  mt(n, "svelte-o4pyhh", ".audako-tablebody-flexrow.svelte-o4pyhh{display:flex;height:40px}.audako-tablebody-flexrow > *{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow > *:first-child{padding-left:12px}.audako-tablebody-flexrow > *:last-child{padding-right:12px}");
}
function vu(n) {
  let e, t, r, o, i;
  const s = n[3].default, a = _e(s, n, n[2], null);
  return {
    c() {
      e = I("div"), a && a.c(), x(e, "class", t = "audako-tablebody-flexrow w-full " + n[0] + " svelte-o4pyhh");
    },
    m(l, c) {
      P(l, e, c), a && a.m(e, null), r = !0, o || (i = W(e, "click", n[1]), o = !0);
    },
    p(l, [c]) {
      a && a.p && (!r || c & 4) && Se(a, s, l, l[2], r ? ke(s, l[2], c, null) : xe(l[2]), null), (!r || c & 1 && t !== (t = "audako-tablebody-flexrow w-full " + l[0] + " svelte-o4pyhh")) && x(e, "class", t);
    },
    i(l) {
      r || (S(a, l), r = !0);
    },
    o(l) {
      E(a, l), r = !1;
    },
    d(l) {
      l && T(e), a && a.d(l), o = !1, i();
    }
  };
}
function yu(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { flexrow$class: i = "" } = e, s = Ee();
  function a(l) {
    s("click", l);
  }
  return n.$$set = (l) => {
    "flexrow$class" in l && t(0, i = l.flexrow$class), "$$scope" in l && t(2, o = l.$$scope);
  }, [i, a, o, r];
}
class _u extends te {
  constructor(e) {
    super(), ee(this, e, yu, vu, J, { flexrow$class: 0 }, mu);
  }
}
function ku(n) {
  let e, t, r;
  const o = n[2].default, i = _e(o, n, n[1], null);
  return {
    c() {
      e = I("div"), i && i.c(), x(e, "class", t = "border-t overflow-hidden " + n[0]);
    },
    m(s, a) {
      P(s, e, a), i && i.m(e, null), r = !0;
    },
    p(s, [a]) {
      i && i.p && (!r || a & 2) && Se(i, o, s, s[1], r ? ke(o, s[1], a, null) : xe(s[1]), null), (!r || a & 1 && t !== (t = "border-t overflow-hidden " + s[0])) && x(e, "class", t);
    },
    i(s) {
      r || (S(i, s), r = !0);
    },
    o(s) {
      E(i, s), r = !1;
    },
    d(s) {
      s && T(e), i && i.d(s);
    }
  };
}
function Su(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { container$class: i = "" } = e;
  return n.$$set = (s) => {
    "container$class" in s && t(0, i = s.container$class), "$$scope" in s && t(1, o = s.$$scope);
  }, [i, o, r];
}
class Jn extends te {
  constructor(e) {
    super(), ee(this, e, Su, ku, J, { container$class: 0 });
  }
}
var Ut, xu = new Uint8Array(16);
function Cu() {
  if (!Ut && (Ut = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Ut))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ut(xu);
}
const Eu = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Iu(n) {
  return typeof n == "string" && Eu.test(n);
}
var oe = [];
for (var On = 0; On < 256; ++On)
  oe.push((On + 256).toString(16).substr(1));
function Tu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = (oe[n[e + 0]] + oe[n[e + 1]] + oe[n[e + 2]] + oe[n[e + 3]] + "-" + oe[n[e + 4]] + oe[n[e + 5]] + "-" + oe[n[e + 6]] + oe[n[e + 7]] + "-" + oe[n[e + 8]] + oe[n[e + 9]] + "-" + oe[n[e + 10]] + oe[n[e + 11]] + oe[n[e + 12]] + oe[n[e + 13]] + oe[n[e + 14]] + oe[n[e + 15]]).toLowerCase();
  if (!Iu(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
function Pu(n, e, t) {
  n = n || {};
  var r = n.random || (n.rng || Cu)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (var o = 0; o < 16; ++o)
      e[t + o] = r[o];
    return e;
  }
  return Tu(r);
}
const Ru = {
  backdrop: !0,
  positioning: "center",
  closeOnClickOutside: !0,
  anchorElement: null,
  customPosition: {
    x: 0,
    y: 0
  }
};
class tn {
  constructor(e) {
    vt(this, "_popupContainer");
    vt(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, t, r) {
    var u, d, f;
    r = { ...Ru, ...r }, console.log("openPopup", r);
    const o = Pu(), i = new fe(), s = (u = this._popupContainer[e]) != null ? u : this._createPopupContainer(e, r), a = this._createPopupWrapper(t, r);
    r.inTransitionClassList && (a.style.transition = `all ${(d = r.inTransitionDuration) != null ? d : 100}ms`, a.classList.add(r.inTransitionClassList)), s.appendChild(a);
    const l = () => {
      console.log("close"), this._removePopupWrapper(a, r), i.next(null), i.complete();
    };
    return r.closeOnClickOutside && s.addEventListener("click", (h) => {
      h.target === s && l();
    }), this._positionPopup(s, a, r), t.style.visibility = "visible", r.inTransitionClassList && (t.classList.add(r.inTransitionClassList), t.style.transition = `all ${(f = r.inTransitionDuration) != null ? f : 100}ms`), {
      popupId: o,
      afterClosed: Un(i).then(() => console.log("afterClosed")),
      close: l
    };
  }
  _removePopupWrapper(e, t) {
    var i, s;
    const r = e.parentElement, o = () => {
      e.remove(), r.children.length === 0 && this._removeContainer(r.id);
    };
    t.outTransitionClassList ? (e.style.transition = `all ${(i = t.outTransitionDuration) != null ? i : 100}ms`, e.classList.remove(t.inTransitionClassList), e.classList.add(t.outTransitionClassList), setTimeout(() => {
      o();
    }, (s = t.outTransitionDuration) != null ? s : 100)) : o();
  }
  _removeContainer(e) {
    document.getElementById(e).remove(), this._popupContainer[e] = void 0;
  }
  _createPopupContainer(e, t) {
    const r = Object.keys(this._popupContainer).length, o = document.createElement("div");
    return o.id = e, o.classList.add(`${e}`), o.style.position = "fixed", o.style.top = "0", o.style.left = "0", o.style.width = "100%", o.style.height = "100%", o.style.overflowY = "hidden", o.style.overflowX = "hidden", o.style.zIndex = (1e3 + r).toString(), t.backdrop && (o.style.backgroundColor = "rgba(0,0,0,0.5)"), this.rootElement.appendChild(o), this._popupContainer[e] = o, o;
  }
  _createPopupWrapper(e, t) {
    const r = document.createElement("div");
    return r.classList.add("popup-wrapper"), r.style.position = "absolute", r.appendChild(e), r;
  }
  _positionPopup(e, t, r) {
    var l, c, u, d, f, h, w, p, b;
    const o = t.style, i = e.getBoundingClientRect(), s = t.getBoundingClientRect(), a = (l = r.anchorElement) == null ? void 0 : l.getBoundingClientRect();
    o.position = "absolute", r.positioning === "center" ? (o.top = "50%", o.left = "50%", o.transform = "translate(-50%, -50%)") : r.positioning === "anchor" ? (t.style.top = `${this._getTopPosition(a.top, s.height, i.height, a.height) + ((u = (c = r.customPosition) == null ? void 0 : c.y) != null ? u : 0)}px`, t.style.left = `${this._getLeftPosition(a.left - 4, s.width, i.width) + ((f = (d = r.customPosition) == null ? void 0 : d.x) != null ? f : 0)}px`) : r.positioning === "custom" && (t.style.top = `${this._getTopPosition(r.customPosition.y, s.height, i.height) + ((w = (h = r.customPosition) == null ? void 0 : h.y) != null ? w : 0)}px`, t.style.left = `${this._getLeftPosition(r.customPosition.x, s.width, i.width) + ((b = (p = r.customPosition) == null ? void 0 : p.x) != null ? b : 0)}px`);
  }
  _getTopPosition(e, t, r, o = 0, i = "bottom") {
    return i == "top" ? e + t + 40 < r ? e + o / 3 : e - t + o / 3 : e - t > 40 ? e - t + o / 3 : e + o / 3;
  }
  _getLeftPosition(e, t, r, o = "right") {
    return o == "left" ? e + t + 40 < r ? e : e + t : e - t > 40 ? e - t : e + t;
  }
}
function Au(n) {
  let e, t, r;
  const o = n[12].default, i = _e(o, n, n[11], null);
  return {
    c() {
      e = I("div"), i && i.c(), x(e, "class", t = "hidden absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border " + n[0]);
    },
    m(s, a) {
      P(s, e, a), i && i.m(e, null), n[13](e), r = !0;
    },
    p(s, [a]) {
      i && i.p && (!r || a & 2048) && Se(i, o, s, s[11], r ? ke(o, s[11], a, null) : xe(s[11]), null), (!r || a & 1 && t !== (t = "hidden absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border " + s[0])) && x(e, "class", t);
    },
    i(s) {
      r || (S(i, s), r = !0);
    },
    o(s) {
      E(i, s), r = !1;
    },
    d(s) {
      s && T(e), i && i.d(s), n[13](null);
    }
  };
}
function $u(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { closeOnClick: i = !0 } = e, { sizeToAnchor: s = !1 } = e, { anchorElement: a = null } = e, { position: l = null } = e, { popupClass: c = "" } = e, { preferedVerticalAlignment: u = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: f = { x: 0, y: 0 } } = e, h = Te("PopupContainerService", new tn(document.body)), w, p;
  function b() {
    console.log("openPopup");
    const k = {
      backdrop: !1,
      closeOnClickOutside: i,
      positioning: s ? "anchor" : "custom",
      anchorElement: a,
      customPosition: s ? f : l,
      anchorHorizontal: d,
      anchorVertical: u
    };
    t(1, w.style.display = "block", w), p = h.openPopup("popup-container", w, k);
  }
  function y() {
    p == null || p.close(), t(1, w.style.display = "none", w);
  }
  function g(k) {
    be[k ? "unshift" : "push"](() => {
      w = k, t(1, w);
    });
  }
  return n.$$set = (k) => {
    "closeOnClick" in k && t(2, i = k.closeOnClick), "sizeToAnchor" in k && t(3, s = k.sizeToAnchor), "anchorElement" in k && t(4, a = k.anchorElement), "position" in k && t(5, l = k.position), "popupClass" in k && t(0, c = k.popupClass), "preferedVerticalAlignment" in k && t(6, u = k.preferedVerticalAlignment), "preferedHorizontalAlignment" in k && t(7, d = k.preferedHorizontalAlignment), "positionOffset" in k && t(8, f = k.positionOffset), "$$scope" in k && t(11, o = k.$$scope);
  }, [
    c,
    w,
    i,
    s,
    a,
    l,
    u,
    d,
    f,
    b,
    y,
    o,
    r,
    g
  ];
}
class Du extends te {
  constructor(e) {
    super(), ee(this, e, $u, Au, J, {
      closeOnClick: 2,
      sizeToAnchor: 3,
      anchorElement: 4,
      position: 5,
      popupClass: 0,
      preferedVerticalAlignment: 6,
      preferedHorizontalAlignment: 7,
      positionOffset: 8,
      openPopup: 9,
      closePopup: 10
    });
  }
  get openPopup() {
    return this.$$.ctx[9];
  }
  get closePopup() {
    return this.$$.ctx[10];
  }
}
const Ou = (n) => ({}), Ro = (n) => ({});
function Nu(n) {
  let e;
  const t = n[11].default, r = _e(t, n, n[15], null);
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & 32768) && Se(r, t, o, o[15], e ? ke(t, o[15], i, null) : xe(o[15]), null);
    },
    i(o) {
      e || (S(r, o), e = !0);
    },
    o(o) {
      E(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Mu(n) {
  let e, t, r, o, i, s, a, l, c, u, d, f, h, w;
  const p = n[11].prefix, b = _e(p, n, n[15], Ro);
  let y = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: n[6],
    $$slots: { default: [Nu] },
    $$scope: { ctx: n }
  };
  return d = new Du({ props: y }), n[14](d), {
    c() {
      e = I("div"), b && b.c(), t = O(), r = I("input"), i = O(), s = I("div"), a = L("arrow_drop_down"), u = O(), U(d.$$.fragment), r.disabled = n[4], x(r, "placeholder", n[0]), r.readOnly = !0, x(r, "class", o = "w-full outline-none " + n[1]), x(s, "class", l = "material-symbols-rounded absolute right-1 pointer-events-none cursor-pointer text-md top-2 " + n[3]), x(e, "class", c = "flex items-center w-full focus-within:border-blue-300 border-gray-500 border-b-2 p-1 relative " + n[2]);
    },
    m(g, k) {
      P(g, e, k), b && b.m(e, null), C(e, t), C(e, r), Kt(r, n[5]), n[13](r), C(e, i), C(e, s), C(s, a), P(g, u, k), N(d, g, k), f = !0, h || (w = [
        W(r, "input", n[12]),
        W(r, "click", n[8])
      ], h = !0);
    },
    p(g, [k]) {
      b && b.p && (!f || k & 32768) && Se(b, p, g, g[15], f ? ke(p, g[15], k, Ou) : xe(g[15]), Ro), (!f || k & 16) && (r.disabled = g[4]), (!f || k & 1) && x(r, "placeholder", g[0]), (!f || k & 2 && o !== (o = "w-full outline-none " + g[1])) && x(r, "class", o), k & 32 && r.value !== g[5] && Kt(r, g[5]), (!f || k & 8 && l !== (l = "material-symbols-rounded absolute right-1 pointer-events-none cursor-pointer text-md top-2 " + g[3])) && x(s, "class", l), (!f || k & 4 && c !== (c = "flex items-center w-full focus-within:border-blue-300 border-gray-500 border-b-2 p-1 relative " + g[2])) && x(e, "class", c);
      const m = {};
      k & 64 && (m.anchorElement = g[6]), k & 32768 && (m.$$scope = { dirty: k, ctx: g }), d.$set(m);
    },
    i(g) {
      f || (S(b, g), S(d.$$.fragment, g), f = !0);
    },
    o(g) {
      E(b, g), E(d.$$.fragment, g), f = !1;
    },
    d(g) {
      g && T(e), b && b.d(g), n[13](null), g && T(u), n[14](null), M(d, g), h = !1, De(w);
    }
  };
}
function ju(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { value: i = null } = e, { multiple: s = !1 } = e, { placeholder: a = null } = e, { textfield$class: l = "" } = e, { container$class: c = "" } = e, { suffixIcon$class: u = "" } = e, { disabled: d = !1 } = e, f = "", h, w, p = Ee(), b = en(i);
  const y = b.subscribe((R) => {
    t(9, i = R), console.log("Select Value", i);
  });
  let g = new fe();
  const k = g.subscribe((R) => {
    p("valueChanged", R);
  });
  let m = en(s ? [] : ""), v = m.subscribe((R) => {
    console.log("displayValueStore", R), A(R);
  });
  function j(R) {
    console.log("open menu"), R && (R.preventDefault(), R.stopPropagation()), !d && (w == null || w.openPopup());
  }
  function A(R) {
    Array.isArray(R) ? t(5, f = R.join(",")) : t(5, f = R);
  }
  tt("audako:select:multiple", s), tt("audako:select:value", b), tt("audako:select:value:changed", g), tt("audako:select:displayValue", m), tt("audako:select:close", () => w.closePopup()), ze(() => {
    y(), k.unsubscribe(), v();
  });
  function ne() {
    f = this.value, t(5, f);
  }
  function q(R) {
    be[R ? "unshift" : "push"](() => {
      h = R, t(6, h);
    });
  }
  function re(R) {
    be[R ? "unshift" : "push"](() => {
      w = R, t(7, w);
    });
  }
  return n.$$set = (R) => {
    "value" in R && t(9, i = R.value), "multiple" in R && t(10, s = R.multiple), "placeholder" in R && t(0, a = R.placeholder), "textfield$class" in R && t(1, l = R.textfield$class), "container$class" in R && t(2, c = R.container$class), "suffixIcon$class" in R && t(3, u = R.suffixIcon$class), "disabled" in R && t(4, d = R.disabled), "$$scope" in R && t(15, o = R.$$scope);
  }, [
    a,
    l,
    c,
    u,
    d,
    f,
    h,
    w,
    j,
    i,
    s,
    r,
    ne,
    q,
    re,
    o
  ];
}
class Uu extends te {
  constructor(e) {
    super(), ee(this, e, ju, Mu, J, {
      value: 9,
      multiple: 10,
      placeholder: 0,
      textfield$class: 1,
      container$class: 2,
      suffixIcon$class: 3,
      disabled: 4
    });
  }
}
function Ao(n) {
  let e;
  return {
    c() {
      e = I("div"), x(e, "class", "h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function zu(n) {
  let e, t, r;
  function o(s) {
    n[7](s);
  }
  let i = {};
  return n[0] !== void 0 && (i.checked = n[0]), e = new $t({ props: i }), be.push(() => vr(e, "checked", o)), {
    c() {
      U(e.$$.fragment);
    },
    m(s, a) {
      N(e, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      !t && a & 1 && (t = !0, l.checked = s[0], br(() => t = !1)), e.$set(l);
    },
    i(s) {
      r || (S(e.$$.fragment, s), r = !0);
    },
    o(s) {
      E(e.$$.fragment, s), r = !1;
    },
    d(s) {
      M(e, s);
    }
  };
}
function Hu(n) {
  let e, t, r, o, i, s, a, l, c = n[0] && !n[2] && Ao(), u = n[2] && zu(n);
  const d = n[6].default, f = _e(d, n, n[5], null);
  return {
    c() {
      e = I("div"), c && c.c(), t = O(), u && u.c(), r = O(), o = I("span"), f && f.c(), x(e, "class", i = "flex items-center " + (n[2] ? "" : "pl-3 pb-2 pt-2") + " pr-3 cursor-pointer hover-highlight relative rounded-md " + (n[0] && !n[2] ? "highlighted" : ""));
    },
    m(h, w) {
      P(h, e, w), c && c.m(e, null), C(e, t), u && u.m(e, null), C(e, r), C(e, o), f && f.m(o, null), n[8](o), s = !0, a || (l = W(e, "click", n[3]), a = !0);
    },
    p(h, [w]) {
      h[0] && !h[2] ? c || (c = Ao(), c.c(), c.m(e, t)) : c && (c.d(1), c = null), h[2] && u.p(h, w), f && f.p && (!s || w & 32) && Se(f, d, h, h[5], s ? ke(d, h[5], w, null) : xe(h[5]), null), (!s || w & 1 && i !== (i = "flex items-center " + (h[2] ? "" : "pl-3 pb-2 pt-2") + " pr-3 cursor-pointer hover-highlight relative rounded-md " + (h[0] && !h[2] ? "highlighted" : ""))) && x(e, "class", i);
    },
    i(h) {
      s || (S(u), S(f, h), s = !0);
    },
    o(h) {
      E(u), E(f, h), s = !1;
    },
    d(h) {
      h && T(e), c && c.d(), u && u.d(), f && f.d(h), n[8](null), a = !1, l();
    }
  };
}
function Lu(n, e, t) {
  let { $$slots: r = {}, $$scope: o } = e, { value: i = null } = e, s = !1, a = null, l = null, c, u;
  const d = nt("audako:select:multiple"), f = nt("audako:select:close"), h = nt("audako:select:value"), w = nt("audako:select:value:changed"), p = nt("audako:select:displayValue");
  Fi(() => {
    var m;
    u = (m = c.innerText) == null ? void 0 : m.trim(), p.subscribe((v) => {
      l = v;
    }), h.subscribe((v) => {
      a = v, d ? t(0, s = v.includes(i)) : t(0, s = v === i), y();
    });
  });
  function b(m) {
    m.preventDefault(), m.stopPropagation();
    let v = null;
    d ? s ? v = a.filter((j) => j !== i) : v = [...a, i] : (v = i, f()), h.set(v), w.next(v);
  }
  function y() {
    if (d) {
      const m = l;
      s && !m.includes(u) ? p.set([...m, u]) : !s && m.includes(u) && p.set(m.filter((v) => v !== u));
    } else
      s && p.set(u);
  }
  function g(m) {
    s = m, t(0, s);
  }
  function k(m) {
    be[m ? "unshift" : "push"](() => {
      c = m, t(1, c);
    });
  }
  return n.$$set = (m) => {
    "value" in m && t(4, i = m.value), "$$scope" in m && t(5, o = m.$$scope);
  }, [
    s,
    c,
    d,
    b,
    i,
    o,
    r,
    g,
    k
  ];
}
class Bu extends te {
  constructor(e) {
    super(), ee(this, e, Lu, Hu, J, { value: 4 });
  }
}
function $o(n, e, t) {
  const r = n.slice();
  return r[17] = e[t], r;
}
function Fu(n) {
  let e = n[17] + "", t;
  return {
    c() {
      t = L(e);
    },
    m(r, o) {
      P(r, t, o);
    },
    p(r, o) {
      o & 8 && e !== (e = r[17] + "") && de(t, e);
    },
    d(r) {
      r && T(t);
    }
  };
}
function Do(n) {
  let e, t;
  return e = new Bu({
    props: {
      value: n[17],
      $$slots: { default: [Fu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o & 8 && (i.value = r[17]), o & 1048584 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function qu(n) {
  let e, t, r = n[3], o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Do($o(n, r, s));
  const i = (s) => E(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = un();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l].m(s, a);
      P(s, e, a), t = !0;
    },
    p(s, a) {
      if (a & 8) {
        r = s[3];
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = $o(s, r, l);
          o[l] ? (o[l].p(c, a), S(o[l], 1)) : (o[l] = Do(c), o[l].c(), S(o[l], 1), o[l].m(e.parentNode, e));
        }
        for (se(), l = r.length; l < o.length; l += 1)
          i(l);
        ae();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < r.length; a += 1)
          S(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        E(o[a]);
      t = !1;
    },
    d(s) {
      ht(o, s), s && T(e);
    }
  };
}
function Vu(n) {
  let e;
  return {
    c() {
      e = L("first_page");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Wu(n) {
  let e;
  return {
    c() {
      e = L("navigate_before");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Gu(n) {
  let e;
  return {
    c() {
      e = L("navigate_next");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Xu(n) {
  let e;
  return {
    c() {
      e = L("last_page");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Ju(n) {
  let e, t, r, o, i, s, a, l, c = n[1] * n[0] + 1 + "", u, d, f = (n[1] + 1) * n[0] + "", h, w, p, b, y, g, k, m, v, j, A, ne, q, re;
  function R($) {
    n[9]($);
  }
  let ce = {
    textfield$class: "text-xs text-gray-600",
    suffixIcon$class: "!top-[2px] !text-[20px]",
    $$slots: { default: [qu] },
    $$scope: { ctx: n }
  };
  return n[0] !== void 0 && (ce.value = n[0]), i = new Uu({ props: ce }), be.push(() => vr(i, "value", R)), i.$on("valueChanged", n[10]), k = new Me({
    props: {
      disabled: n[1] === 0,
      $$slots: { default: [Vu] },
      $$scope: { ctx: n }
    }
  }), k.$on("click", n[11]), v = new Me({
    props: {
      disabled: n[1] === 0,
      $$slots: { default: [Wu] },
      $$scope: { ctx: n }
    }
  }), v.$on("click", n[12]), A = new Me({
    props: {
      disabled: n[1] === n[4],
      $$slots: { default: [Gu] },
      $$scope: { ctx: n }
    }
  }), A.$on("click", n[13]), q = new Me({
    props: {
      disabled: n[1] === n[4],
      $$slots: { default: [Xu] },
      $$scope: { ctx: n }
    }
  }), q.$on("click", n[14]), {
    c() {
      e = I("div"), t = I("div"), t.textContent = "Items per page:", r = O(), o = I("div"), U(i.$$.fragment), a = O(), l = I("div"), u = L(c), d = L("\xA0-\xA0"), h = L(f), w = O(), p = I("div"), b = L("of "), y = L(n[2]), g = O(), U(k.$$.fragment), m = O(), U(v.$$.fragment), j = O(), U(A.$$.fragment), ne = O(), U(q.$$.fragment), x(t, "class", "mr-1 text-xs text-gray-600"), x(o, "class", "w-[50px]"), x(l, "class", "ml-4 text-xs mr-1 text-gray-600"), x(p, "class", "text-xs mr-4 text-gray-600"), x(e, "class", "flex w-full items-center justify-end pt-1");
    },
    m($, H) {
      P($, e, H), C(e, t), C(e, r), C(e, o), N(i, o, null), C(e, a), C(e, l), C(l, u), C(l, d), C(l, h), C(e, w), C(e, p), C(p, b), C(p, y), C(e, g), N(k, e, null), C(e, m), N(v, e, null), C(e, j), N(A, e, null), C(e, ne), N(q, e, null), re = !0;
    },
    p($, [H]) {
      const He = {};
      H & 1048584 && (He.$$scope = { dirty: H, ctx: $ }), !s && H & 1 && (s = !0, He.value = $[0], br(() => s = !1)), i.$set(He), (!re || H & 3) && c !== (c = $[1] * $[0] + 1 + "") && de(u, c), (!re || H & 3) && f !== (f = ($[1] + 1) * $[0] + "") && de(h, f), (!re || H & 4) && de(y, $[2]);
      const D = {};
      H & 2 && (D.disabled = $[1] === 0), H & 1048576 && (D.$$scope = { dirty: H, ctx: $ }), k.$set(D);
      const z = {};
      H & 2 && (z.disabled = $[1] === 0), H & 1048576 && (z.$$scope = { dirty: H, ctx: $ }), v.$set(z);
      const Oe = {};
      H & 18 && (Oe.disabled = $[1] === $[4]), H & 1048576 && (Oe.$$scope = { dirty: H, ctx: $ }), A.$set(Oe);
      const fn = {};
      H & 18 && (fn.disabled = $[1] === $[4]), H & 1048576 && (fn.$$scope = { dirty: H, ctx: $ }), q.$set(fn);
    },
    i($) {
      re || (S(i.$$.fragment, $), S(k.$$.fragment, $), S(v.$$.fragment, $), S(A.$$.fragment, $), S(q.$$.fragment, $), re = !0);
    },
    o($) {
      E(i.$$.fragment, $), E(k.$$.fragment, $), E(v.$$.fragment, $), E(A.$$.fragment, $), E(q.$$.fragment, $), re = !1;
    },
    d($) {
      $ && T(e), M(i), M(k), M(v), M(A), M(q);
    }
  };
}
function Oo(n, e) {
  return console.log(), Math.max(Math.floor(e / n) - 1, 0);
}
function Yu(n, e, t) {
  let { pageIndex: r } = e, { pageSize: o } = e, { totalCount: i } = e, s, { pageSizeOptions: a = [10, 20, 50, 100] } = e, l = Ee();
  function c(m) {
    t(1, r = r + m), h();
  }
  function u() {
    t(1, r = 0), h();
  }
  function d() {
    t(1, r = s), h();
  }
  function f(m) {
    console.log("changePageSize", m), t(0, o = m), t(4, s = Oo(o, i)), t(1, r = Math.min(r, s)), h();
  }
  function h() {
    l("changePage", { pageIndex: r, pageSize: o });
  }
  function w(m) {
    o = m, t(0, o);
  }
  const p = (m) => f(m.detail), b = () => u(), y = () => c(-1), g = () => c(1), k = () => d();
  return n.$$set = (m) => {
    "pageIndex" in m && t(1, r = m.pageIndex), "pageSize" in m && t(0, o = m.pageSize), "totalCount" in m && t(2, i = m.totalCount), "pageSizeOptions" in m && t(3, a = m.pageSizeOptions);
  }, n.$$.update = () => {
    n.$$.dirty & 5 && t(4, s = Oo(o, i)), n.$$.dirty & 1 && console.log("pageSize", o);
  }, [
    o,
    r,
    i,
    a,
    s,
    c,
    u,
    d,
    f,
    w,
    p,
    b,
    y,
    g,
    k
  ];
}
class Ku extends te {
  constructor(e) {
    super(), ee(this, e, Yu, Ju, J, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function Qu(n) {
  mt(n, "svelte-1ls4xm", ".progress-bar-value-animation.svelte-1ls4xm{-webkit-animation:svelte-1ls4xm-indeterminateAnimation 1s infinite linear;animation:svelte-1ls4xm-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@-webkit-keyframes svelte-1ls4xm-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}@keyframes svelte-1ls4xm-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function No(n, e, t) {
  const r = n.slice();
  return r[32] = e[t], r;
}
function Mo(n) {
  let e, t;
  return e = new Xn({
    props: {
      container$class: "basis-[50px] flex-[0] cursor-default",
      id: "Name",
      $$slots: { default: [Zu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & 32 | o[1] & 32 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function Zu(n) {
  let e, t;
  return e = new $t({
    props: {
      checked: n[5] === "checked",
      indeterminate: n[5] === "indeterminate"
    }
  }), e.$on("change", n[13]), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & 32 && (i.checked = r[5] === "checked"), o[0] & 32 && (i.indeterminate = r[5] === "indeterminate"), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function ef(n) {
  let e;
  return {
    c() {
      e = L("Name");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function tf(n) {
  let e;
  return {
    c() {
      e = L("Group");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function nf(n) {
  let e, t, r, o, i, s = n[0] && Mo(n);
  return t = new Xn({
    props: {
      container$class: "flex-[2] cursor-default",
      id: "Name",
      $$slots: { default: [ef] },
      $$scope: { ctx: n }
    }
  }), o = new Xn({
    props: {
      container$class: "flex-1 curstor-default",
      id: "Name",
      $$slots: { default: [tf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      s && s.c(), e = O(), U(t.$$.fragment), r = O(), U(o.$$.fragment);
    },
    m(a, l) {
      s && s.m(a, l), P(a, e, l), N(t, a, l), P(a, r, l), N(o, a, l), i = !0;
    },
    p(a, l) {
      a[0] ? s ? (s.p(a, l), l[0] & 1 && S(s, 1)) : (s = Mo(a), s.c(), S(s, 1), s.m(e.parentNode, e)) : s && (se(), E(s, 1, 1, () => {
        s = null;
      }), ae());
      const c = {};
      l[1] & 32 && (c.$$scope = { dirty: l, ctx: a }), t.$set(c);
      const u = {};
      l[1] & 32 && (u.$$scope = { dirty: l, ctx: a }), o.$set(u);
    },
    i(a) {
      i || (S(s), S(t.$$.fragment, a), S(o.$$.fragment, a), i = !0);
    },
    o(a) {
      E(s), E(t.$$.fragment, a), E(o.$$.fragment, a), i = !1;
    },
    d(a) {
      s && s.d(a), a && T(e), M(t, a), a && T(r), M(o, a);
    }
  };
}
function rf(n) {
  let e;
  return {
    c() {
      e = I("div"), x(e, "class", "w-full h-[3px]");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function of(n) {
  let e;
  return {
    c() {
      e = I("div"), e.innerHTML = '<div class="progress-bar-value-animation wfull h-full bg-blue-600  svelte-1ls4xm"></div>', x(e, "class", "w-full h-[3px] overflow-hidden bg-blue-200");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function jo(n) {
  let e, t;
  return e = new Jn({
    props: {
      container$class: "basis-[50px] flex-[0]",
      $$slots: { default: [sf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & 24 | o[1] & 32 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function sf(n) {
  let e, t;
  return e = new $t({
    props: {
      checked: n[4][n[32].Id]
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & 24 && (i.checked = r[4][r[32].Id]), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function af(n) {
  var o;
  let e, t = ((o = n[32].Name) == null ? void 0 : o.Value) + "", r;
  return {
    c() {
      e = I("div"), r = L(t), x(e, "class", "text-sm overflow-hidden whitespace-nowrap text-ellipsis");
    },
    m(i, s) {
      P(i, e, s), C(e, r);
    },
    p(i, s) {
      var a;
      s[0] & 8 && t !== (t = ((a = i[32].Name) == null ? void 0 : a.Value) + "") && de(r, t);
    },
    d(i) {
      i && T(e);
    }
  };
}
function lf(n) {
  return { c: F, m: F, p: F, d: F };
}
function cf(n) {
  let e = n[35] + "", t;
  return {
    c() {
      t = L(e);
    },
    m(r, o) {
      P(r, t, o);
    },
    p(r, o) {
      o[0] & 8 && e !== (e = r[35] + "") && de(t, e);
    },
    d(r) {
      r && T(t);
    }
  };
}
function uf(n) {
  return { c: F, m: F, p: F, d: F };
}
function ff(n) {
  let e, t, r = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !1,
    pending: uf,
    then: cf,
    catch: lf,
    value: 35
  };
  return Qt(t = n[8].resolveName(X.Group, n[32].GroupId), r), {
    c() {
      e = I("span"), r.block.c(), x(e, "class", "text-sm overflow-hidden whitespace-nowrap text-ellipsis");
    },
    m(o, i) {
      P(o, e, i), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null;
    },
    p(o, i) {
      n = o, r.ctx = n, i[0] & 8 && t !== (t = n[8].resolveName(X.Group, n[32].GroupId)) && Qt(t, r) || qi(r, n, i);
    },
    d(o) {
      o && T(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function df(n) {
  let e, t, r, o, i, s, a = n[0] && jo(n);
  return t = new Jn({
    props: {
      container$class: "flex-[2]",
      $$slots: { default: [af] },
      $$scope: { ctx: n }
    }
  }), o = new Jn({
    props: {
      container$class: "flex-1",
      $$slots: { default: [ff] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      a && a.c(), e = O(), U(t.$$.fragment), r = O(), U(o.$$.fragment), i = O();
    },
    m(l, c) {
      a && a.m(l, c), P(l, e, c), N(t, l, c), P(l, r, c), N(o, l, c), P(l, i, c), s = !0;
    },
    p(l, c) {
      l[0] ? a ? (a.p(l, c), c[0] & 1 && S(a, 1)) : (a = jo(l), a.c(), S(a, 1), a.m(e.parentNode, e)) : a && (se(), E(a, 1, 1, () => {
        a = null;
      }), ae());
      const u = {};
      c[0] & 8 | c[1] & 32 && (u.$$scope = { dirty: c, ctx: l }), t.$set(u);
      const d = {};
      c[0] & 8 | c[1] & 32 && (d.$$scope = { dirty: c, ctx: l }), o.$set(d);
    },
    i(l) {
      s || (S(a), S(t.$$.fragment, l), S(o.$$.fragment, l), s = !0);
    },
    o(l) {
      E(a), E(t.$$.fragment, l), E(o.$$.fragment, l), s = !1;
    },
    d(l) {
      a && a.d(l), l && T(e), M(t, l), l && T(r), M(o, l), l && T(i);
    }
  };
}
function Uo(n) {
  let e, t;
  function r() {
    return n[14](n[32]);
  }
  return e = new _u({
    props: {
      flexrow$class: "cursor-pointer hover:bg-gray-100",
      $$slots: { default: [df] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", r), {
    c() {
      U(e.$$.fragment);
    },
    m(o, i) {
      N(e, o, i), t = !0;
    },
    p(o, i) {
      n = o;
      const s = {};
      i[0] & 25 | i[1] & 32 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(o) {
      t || (S(e.$$.fragment, o), t = !0);
    },
    o(o) {
      E(e.$$.fragment, o), t = !1;
    },
    d(o) {
      M(e, o);
    }
  };
}
function hf(n) {
  let e, t, r, o, i;
  e = new gu({
    props: {
      $$slots: { default: [nf] },
      $$scope: { ctx: n }
    }
  });
  function s(f, h) {
    return f[7] ? of : rf;
  }
  let a = s(n), l = a(n), c = n[3], u = [];
  for (let f = 0; f < c.length; f += 1)
    u[f] = Uo(No(n, c, f));
  const d = (f) => E(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      U(e.$$.fragment), t = O(), l.c(), r = O();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      o = un();
    },
    m(f, h) {
      N(e, f, h), P(f, t, h), l.m(f, h), P(f, r, h);
      for (let w = 0; w < u.length; w += 1)
        u[w].m(f, h);
      P(f, o, h), i = !0;
    },
    p(f, h) {
      const w = {};
      if (h[0] & 33 | h[1] & 32 && (w.$$scope = { dirty: h, ctx: f }), e.$set(w), a !== (a = s(f)) && (l.d(1), l = a(f), l && (l.c(), l.m(r.parentNode, r))), h[0] & 793) {
        c = f[3];
        let p;
        for (p = 0; p < c.length; p += 1) {
          const b = No(f, c, p);
          u[p] ? (u[p].p(b, h), S(u[p], 1)) : (u[p] = Uo(b), u[p].c(), S(u[p], 1), u[p].m(o.parentNode, o));
        }
        for (se(), p = c.length; p < u.length; p += 1)
          d(p);
        ae();
      }
    },
    i(f) {
      if (!i) {
        S(e.$$.fragment, f);
        for (let h = 0; h < c.length; h += 1)
          S(u[h]);
        i = !0;
      }
    },
    o(f) {
      E(e.$$.fragment, f), u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        E(u[h]);
      i = !1;
    },
    d(f) {
      M(e, f), f && T(t), l.d(f), f && T(r), ht(u, f), f && T(o);
    }
  };
}
function pf(n) {
  let e, t;
  return e = new Ku({
    props: {
      slot: "pagination",
      pageIndex: n[1],
      pageSize: n[2],
      totalCount: n[6]
    }
  }), e.$on("changePage", n[11]), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & 2 && (i.pageIndex = r[1]), o[0] & 4 && (i.pageSize = r[2]), o[0] & 64 && (i.totalCount = r[6]), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function gf(n) {
  let e, t, r;
  return t = new fu({
    props: {
      $$slots: {
        pagination: [pf],
        default: [hf]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = I("div"), U(t.$$.fragment), x(e, "class", "flex flex-col h-full overflow-hidden mt-[-10px]");
    },
    m(o, i) {
      P(o, e, i), N(t, e, null), r = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & 255 | i[1] & 32 && (s.$$scope = { dirty: i, ctx: o }), t.$set(s);
    },
    i(o) {
      r || (S(t.$$.fragment, o), r = !0);
    },
    o(o) {
      E(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(e), M(t);
    }
  };
}
function wf(n, e, t) {
  let r = Te(We), o = Te(Ct), { entityType: i } = e, { selectMultiple: s = !1 } = e, a = [], l = new fe(), c = [], u = {}, d = "unchecked", f, h, w, p = !1, b = 0, y = 10, g = 0, k = pt(), m = Ve, v = !1, j = !0, A = new fe();
  Ee(), qe.pipe($e(A)).subscribe((D) => {
    c = D.selectedEntities, $(), R();
  }), Di([m.asObservable(), k.asObservable()]).pipe($e(A)).subscribe(([D, z]) => {
    var Oe;
    w = z.selectedGroup, h = (Oe = z.selectedGroup) == null ? void 0 : Oe.Id, f = z.filter, p = D.queryWithSubGroups, v = !0, t(1, b = 0), l.next();
  });
  function ne() {
    const D = { $and: [] };
    p ? D.$and.push({ Path: h }) : D.$and.push({ GroupId: h }), f && D.$and.push({
      $or: [
        {
          "Name.Value": { $regex: f, $options: "i" }
        },
        {
          "Description.Value": { $regex: f, $options: "i" }
        }
      ]
    }), console.log("query", D);
    const z = {
      limit: y,
      skip: b * y
    };
    return console.log(i), Je(r.queryConfiguration(i, D, z));
  }
  function q(D) {
    s ? (c.find((z) => z.Id === D.Id) ? (c = c.filter((z) => z.Id !== D.Id), t(4, u[D.Id] = !1, u)) : (c.push(D), t(4, u[D.Id] = !0, u)), R()) : c = [D], qe.update((z) => ({ ...z, selectedEntities: c }));
  }
  function re(D) {
    D ? c = [
      ...c,
      ...a.filter((z) => !u[z.Id])
    ] : c = c.filter((z) => !a.find((Oe) => Oe.Id === z.Id)), $(), R(), qe.update((z) => ({ ...z, selectedEntities: c }));
  }
  function R() {
    let D = Object.keys(u).filter((z) => u[z]);
    D.length === 0 ? t(5, d = "unchecked") : D.length === a.length ? t(5, d = "checked") : t(5, d = "indeterminate");
  }
  function ce(D) {
    const z = D.detail;
    z.pageSize != y ? (t(1, b = 0), t(2, y = z.pageSize)) : t(1, b = z.pageIndex);
  }
  function $() {
    t(4, u = {}), a.forEach((D) => {
      t(4, u[D.Id] = c.find((z) => z.Id === D.Id) != null, u);
    });
  }
  ze(() => {
    A.next(), A.complete();
  }), l.pipe($e(A), xt(() => v && !!h), yl(250), ml(() => t(7, j = !0)), ji(() => ne())).subscribe((D) => {
    t(7, j = !1), t(3, a = D.data), console.log("selectedEntities", c), $(), R(), console.log("selectedEntitiesInPageLookup", u), i === X.Group && a.unshift(w), t(6, g = D.total);
  });
  const H = (D) => {
    var z;
    return re((z = D.detail) == null ? void 0 : z.checked);
  }, He = (D) => q(D);
  return n.$$set = (D) => {
    "entityType" in D && t(12, i = D.entityType), "selectMultiple" in D && t(0, s = D.selectMultiple);
  }, n.$$.update = () => {
    n.$$.dirty[0] & 2 && (t(1, b), t(22, l), t(2, y), l.next()), n.$$.dirty[0] & 4 && (t(2, y), t(22, l), t(1, b = 0), l.next());
  }, [
    s,
    b,
    y,
    a,
    u,
    d,
    g,
    j,
    o,
    q,
    re,
    ce,
    i,
    H,
    He
  ];
}
class bf extends te {
  constructor(e) {
    super(), ee(this, e, wf, gf, J, { entityType: 12, selectMultiple: 0 }, Qu, [-1, -1]);
  }
}
function zo(n) {
  let e, t, r, o;
  t = new Me({ props: { icon: "done_all" } }), t.$on("click", n[9]);
  let i = n[4].length > 0 && Ho(n);
  return {
    c() {
      e = I("div"), U(t.$$.fragment), r = O(), i && i.c(), x(e, "class", "mx-2 relative");
    },
    m(s, a) {
      P(s, e, a), N(t, e, null), C(e, r), i && i.m(e, null), o = !0;
    },
    p(s, a) {
      s[4].length > 0 ? i ? i.p(s, a) : (i = Ho(s), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i(s) {
      o || (S(t.$$.fragment, s), o = !0);
    },
    o(s) {
      E(t.$$.fragment, s), o = !1;
    },
    d(s) {
      s && T(e), M(t), i && i.d();
    }
  };
}
function Ho(n) {
  let e, t = n[4].length + "", r;
  return {
    c() {
      e = I("div"), r = L(t), x(e, "class", "pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]");
    },
    m(o, i) {
      P(o, e, i), C(e, r);
    },
    p(o, i) {
      i & 16 && t !== (t = o[4].length + "") && de(r, t);
    },
    d(o) {
      o && T(e);
    }
  };
}
function mf(n) {
  let e, t, r, o, i, s, a, l, c, u, d, f, h, w, p = n[0] && zo(n);
  function b(g) {
    n[10](g);
  }
  let y = { label: "Mit Untergruppen" };
  return n[1] !== void 0 && (y.checked = n[1]), u = new $t({ props: y }), be.push(() => vr(u, "checked", b)), {
    c() {
      e = I("div"), t = I("div"), r = I("div"), o = I("span"), o.textContent = "search", i = O(), s = I("input"), a = O(), p && p.c(), l = O(), c = I("div"), U(u.$$.fragment), x(o, "class", "material-symbols-rounded mr-2"), x(s, "placeholder", "Search"), x(s, "class", "w-full outline-none"), x(r, "class", "flex items-center w-full focus-within:border-blue-300 border-gray-200 border-2 rounded-md p-2"), x(t, "class", "flex items-center"), x(c, "class", "flex justify-end mt-2"), x(e, "class", "flex flex-col");
    },
    m(g, k) {
      P(g, e, k), C(e, t), C(t, r), C(r, o), C(r, i), C(r, s), n[7](s), Kt(s, n[2]), C(t, a), p && p.m(t, null), C(e, l), C(e, c), N(u, c, null), f = !0, h || (w = W(s, "input", n[8]), h = !0);
    },
    p(g, [k]) {
      k & 4 && s.value !== g[2] && Kt(s, g[2]), g[0] ? p ? (p.p(g, k), k & 1 && S(p, 1)) : (p = zo(g), p.c(), S(p, 1), p.m(t, null)) : p && (se(), E(p, 1, 1, () => {
        p = null;
      }), ae());
      const m = {};
      !d && k & 2 && (d = !0, m.checked = g[1], br(() => d = !1)), u.$set(m);
    },
    i(g) {
      f || (S(p), S(u.$$.fragment, g), f = !0);
    },
    o(g) {
      E(p), E(u.$$.fragment, g), f = !1;
    },
    d(g) {
      g && T(e), n[7](null), p && p.d(), M(u), h = !1, w();
    }
  };
}
function vf(n, e, t) {
  let { entityType: r } = e, { selectMultiple: o = !1 } = e, i = Ee(), s = pt(), a = !1, l = s.value.filter, c, u = new fe(), d = new fe(), f = [];
  Ve.pipe($e(u)).subscribe((m) => {
    t(1, a = m.queryWithSubGroups);
  }), d.pipe($e(u), cl(200)).subscribe((m) => {
    s.update((v) => ({ ...v, filter: m }));
  }), qe.pipe($e(u)).subscribe((m) => {
    t(4, f = m.selectedEntities);
  });
  function h(m) {
    console.log("onSubGroupsToggled", m), m != Ve.value.queryWithSubGroups && Ve.update((v) => ({
      ...v,
      queryWithSubGroups: m
    }));
  }
  function w() {
    i("acceptSelection");
  }
  Fi(() => {
    p();
  });
  function p() {
    c && setTimeout(() => {
      c.focus(), c.select();
    }, 0);
  }
  ze(() => {
    u.next(), u.complete();
  });
  function b(m) {
    be[m ? "unshift" : "push"](() => {
      c = m, t(3, c);
    });
  }
  function y() {
    l = this.value, t(2, l);
  }
  const g = () => w();
  function k(m) {
    a = m, t(1, a);
  }
  return n.$$set = (m) => {
    "entityType" in m && t(6, r = m.entityType), "selectMultiple" in m && t(0, o = m.selectMultiple);
  }, n.$$.update = () => {
    n.$$.dirty & 4 && d.next(l), n.$$.dirty & 2 && h(a);
  }, [
    o,
    a,
    l,
    c,
    f,
    w,
    r,
    b,
    y,
    g,
    k
  ];
}
class yf extends te {
  constructor(e) {
    super(), ee(this, e, vf, mf, J, { entityType: 6, selectMultiple: 0 });
  }
}
function _f(n) {
  mt(n, "svelte-1fty7gn", ".svelte-1fty7gn,.svelte-1fty7gn::before,.svelte-1fty7gn::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-1fty7gn::before,.svelte-1fty7gn::after{--tw-content:''}.svelte-1fty7gn:-moz-focusring{outline:auto}.svelte-1fty7gn:-moz-ui-invalid{box-shadow:none}.svelte-1fty7gn::-webkit-inner-spin-button,.svelte-1fty7gn::-webkit-outer-spin-button{height:auto}.svelte-1fty7gn::-webkit-search-decoration{-webkit-appearance:none}.svelte-1fty7gn::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-1fty7gn:disabled{cursor:default}.svelte-1fty7gn,.svelte-1fty7gn::before,.svelte-1fty7gn::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1fty7gn::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1fty7gn::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.mt-2.svelte-1fty7gn{margin-top:0.5rem}.mb-1.svelte-1fty7gn{margin-bottom:0.25rem}.ml-2.svelte-1fty7gn{margin-left:0.5rem}.flex.svelte-1fty7gn{display:flex}.grid.svelte-1fty7gn{display:grid}.h-full.svelte-1fty7gn{height:100%}.w-full.svelte-1fty7gn{width:100%}.cursor-pointer.svelte-1fty7gn{cursor:pointer}.grid-cols-2.svelte-1fty7gn{grid-template-columns:repeat(2, minmax(0, 1fr))}.items-center.svelte-1fty7gn{align-items:center}.justify-between.svelte-1fty7gn{justify-content:space-between}.gap-2.svelte-1fty7gn{gap:0.5rem}.overflow-auto.svelte-1fty7gn{overflow:auto}.overflow-hidden.svelte-1fty7gn{overflow:hidden}.rounded-sm.svelte-1fty7gn{border-radius:0.125rem}.bg-slate-200.svelte-1fty7gn{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.p-1.svelte-1fty7gn{padding:0.25rem}.text-lg.svelte-1fty7gn{font-size:1.125rem;line-height:1.75rem}.font-bold.svelte-1fty7gn{font-weight:700}.text-gray-600.svelte-1fty7gn{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.shadow-sm.svelte-1fty7gn{--tw-shadow:0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);--tw-shadow-colored:0px 0.3px 0.9px var(--tw-shadow-color), 0px 1.6px 3.6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\\:bg-slate-100.svelte-1fty7gn:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-300.svelte-1fty7gn:hover{--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity))}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1536px){}");
}
function Lo(n, e, t) {
  const r = n.slice();
  return r[14] = e[t], r;
}
function Bo(n, e, t) {
  const r = n.slice();
  return r[14] = e[t], r[18] = t, r;
}
function Fo(n) {
  let e, t;
  return e = new Me({
    props: {
      size: "small",
      $$slots: { default: [kf] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", n[7]), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o & 524288 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function kf(n) {
  let e;
  return {
    c() {
      e = L("arrow_back");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function qo(n) {
  let e, t = n[14].Name + "", r, o = n[18] == n[1].length - 1 ? "" : " /", i, s, a, l;
  function c() {
    return n[8](n[14]);
  }
  return {
    c() {
      e = I("div"), r = L(t), i = L(o), s = O(), x(e, "class", "cursor-pointer hover:bg-slate-100 p-1 svelte-1fty7gn");
    },
    m(u, d) {
      P(u, e, d), C(e, r), C(e, i), C(e, s), a || (l = W(e, "click", c), a = !0);
    },
    p(u, d) {
      n = u, d & 2 && t !== (t = n[14].Name + "") && de(r, t), d & 2 && o !== (o = n[18] == n[1].length - 1 ? "" : " /") && de(i, o);
    },
    d(u) {
      u && T(e), a = !1, l();
    }
  };
}
function Vo(n) {
  let e, t, r;
  function o(...i) {
    return n[9](n[14], ...i);
  }
  return t = new Me({
    props: {
      $$slots: { default: [Sf] },
      $$scope: { ctx: n }
    }
  }), t.$on("click", o), {
    c() {
      e = I("div"), U(t.$$.fragment), x(e, "class", "svelte-1fty7gn");
    },
    m(i, s) {
      P(i, e, s), N(t, e, null), r = !0;
    },
    p(i, s) {
      n = i;
      const a = {};
      s & 524288 && (a.$$scope = { dirty: s, ctx: n }), t.$set(a);
    },
    i(i) {
      r || (S(t.$$.fragment, i), r = !0);
    },
    o(i) {
      E(t.$$.fragment, i), r = !1;
    },
    d(i) {
      i && T(e), M(t);
    }
  };
}
function Sf(n) {
  let e;
  return {
    c() {
      e = L("done");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Wo(n) {
  var f;
  let e, t, r = ((f = n[14]) == null ? void 0 : f.Name) + "", o, i, s, a, l, c, u = n[14].Root && Vo(n);
  function d() {
    return n[10](n[14]);
  }
  return {
    c() {
      e = I("div"), t = I("div"), o = L(r), i = O(), u && u.c(), s = O(), x(t, "class", "mt-2 ml-2  svelte-1fty7gn"), x(e, "class", "flex justify-between bg-slate-200 hover:bg-slate-300 shadow-sm rounded-sm cursor-pointer svelte-1fty7gn");
    },
    m(h, w) {
      P(h, e, w), C(e, t), C(t, o), C(e, i), u && u.m(e, null), C(e, s), a = !0, l || (c = W(e, "click", d), l = !0);
    },
    p(h, w) {
      var p;
      n = h, (!a || w & 4) && r !== (r = ((p = n[14]) == null ? void 0 : p.Name) + "") && de(o, r), n[14].Root ? u ? (u.p(n, w), w & 4 && S(u, 1)) : (u = Vo(n), u.c(), S(u, 1), u.m(e, s)) : u && (se(), E(u, 1, 1, () => {
        u = null;
      }), ae());
    },
    i(h) {
      a || (S(u), a = !0);
    },
    o(h) {
      E(u), a = !1;
    },
    d(h) {
      h && T(e), u && u.d(), l = !1, c();
    }
  };
}
function xf(n) {
  let e, t, r, o, i, s, a, l, c, u = n[0] && Fo(n), d = n[1], f = [];
  for (let b = 0; b < d.length; b += 1)
    f[b] = qo(Bo(n, d, b));
  let h = n[2], w = [];
  for (let b = 0; b < h.length; b += 1)
    w[b] = Wo(Lo(n, h, b));
  const p = (b) => E(w[b], 1, 1, () => {
    w[b] = null;
  });
  return {
    c() {
      e = I("div"), t = I("div"), u && u.c(), r = O(), o = I("div"), o.textContent = "Mandant ausw\xE4hlen", i = O(), s = I("div");
      for (let b = 0; b < f.length; b += 1)
        f[b].c();
      a = O(), l = I("div");
      for (let b = 0; b < w.length; b += 1)
        w[b].c();
      x(o, "class", "font-bold text-gray-600 text-lg svelte-1fty7gn"), x(t, "class", "flex items-center svelte-1fty7gn"), x(s, "class", "flex mb-1 svelte-1fty7gn"), Pt(l, "grid-auto-rows", "60px"), x(l, "class", "grid grid-cols-2 gap-2 h-full overflow-auto svelte-1fty7gn"), x(e, "class", "w-full overflow-hidden svelte-1fty7gn");
    },
    m(b, y) {
      P(b, e, y), C(e, t), u && u.m(t, null), C(t, r), C(t, o), C(e, i), C(e, s);
      for (let g = 0; g < f.length; g += 1)
        f[g].m(s, null);
      C(e, a), C(e, l);
      for (let g = 0; g < w.length; g += 1)
        w[g].m(l, null);
      c = !0;
    },
    p(b, [y]) {
      if (b[0] ? u ? (u.p(b, y), y & 1 && S(u, 1)) : (u = Fo(b), u.c(), S(u, 1), u.m(t, r)) : u && (se(), E(u, 1, 1, () => {
        u = null;
      }), ae()), y & 34) {
        d = b[1];
        let g;
        for (g = 0; g < d.length; g += 1) {
          const k = Bo(b, d, g);
          f[g] ? f[g].p(k, y) : (f[g] = qo(k), f[g].c(), f[g].m(s, null));
        }
        for (; g < f.length; g += 1)
          f[g].d(1);
        f.length = d.length;
      }
      if (y & 84) {
        h = b[2];
        let g;
        for (g = 0; g < h.length; g += 1) {
          const k = Lo(b, h, g);
          w[g] ? (w[g].p(k, y), S(w[g], 1)) : (w[g] = Wo(k), w[g].c(), S(w[g], 1), w[g].m(l, null));
        }
        for (se(), g = h.length; g < w.length; g += 1)
          p(g);
        ae();
      }
    },
    i(b) {
      if (!c) {
        S(u);
        for (let y = 0; y < h.length; y += 1)
          S(w[y]);
        c = !0;
      }
    },
    o(b) {
      E(u), w = w.filter(Boolean);
      for (let y = 0; y < w.length; y += 1)
        E(w[y]);
      c = !1;
    },
    d(b) {
      b && T(e), u && u.d(), ht(f, b), ht(w, b);
    }
  };
}
function Cf(n, e, t) {
  let r = Te(St), { allowBack: o = !1 } = e, i = [], s = [];
  const a = Ee();
  async function l() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const g = y[0];
      if (g.Root == null) {
        u(g);
        return;
      }
    }
    t(1, i = [new es({ Id: "start", Name: "Start" })]), t(2, s = y);
  }
  async function c(y) {
    const g = await r.getNextTenants(y.Id);
    t(2, s = g);
  }
  async function u(y) {
    t(1, i = [...i, y]), c(y);
  }
  async function d(y) {
    if (y.Id == "start") {
      l();
      return;
    }
    const g = i.findIndex((k) => k.Id === y.Id);
    t(1, i = i.slice(0, g + 1)), c(y);
  }
  function f(y, g) {
    console.log(y, g), y.detail.stopPropagation(), a("tenantSelected", { tenant: g });
  }
  l();
  const h = () => a("back"), w = (y) => d(y), p = (y, g) => f(g, y), b = (y) => u(y);
  return n.$$set = (y) => {
    "allowBack" in y && t(0, o = y.allowBack);
  }, [
    o,
    i,
    s,
    a,
    u,
    d,
    f,
    h,
    w,
    p,
    b
  ];
}
class Ji extends te {
  constructor(e) {
    super(), ee(this, e, Cf, xf, J, { allowBack: 0 }, _f);
  }
}
function Ef(n) {
  mt(n, "svelte-2x30th", `*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.container{width:100%}@media(min-width: 640px){.container{max-width:640px}}@media(min-width: 768px){.container{max-width:768px}}@media(min-width: 1024px){.container{max-width:1024px}}@media(min-width: 1280px){.container{max-width:1280px}}@media(min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.right-2{right:0.5rem}.top-1{top:0.25rem}.top-0{top:0px}.right-\\[-5px\\]{right:-5px}.right-1{right:0.25rem}.top-2{top:0.5rem}.left-0{left:0px}.top-\\[50\\%\\]{top:50%}.\\!top-\\[2px\\]{top:2px !important}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.mx-2{margin-left:0.5rem;margin-right:0.5rem}.mt-3{margin-top:0.75rem}.mr-2{margin-right:0.5rem}.mt-2{margin-top:0.5rem}.mt-\\[-10px\\]{margin-top:-10px}.mb-2{margin-bottom:0.5rem}.mb-1{margin-bottom:0.25rem}.ml-2{margin-left:0.5rem}.mr-1{margin-right:0.25rem}.ml-4{margin-left:1rem}.mr-4{margin-right:1rem}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-full{height:100%}.h-\\[70vh\\]{height:70vh}.h-\\[3px\\]{height:3px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.max-h-\\[400px\\]{max-height:400px}.w-full{width:100%}.w-\\[80vw\\]{width:80vw}.w-\\[20px\\]{width:20px}.w-\\[18px\\]{width:18px}.w-\\[4px\\]{width:4px}.w-\\[50px\\]{width:50px}.flex-1{flex:1 1 0%}.flex-\\[2\\]{flex:2}.flex-\\[0\\]{flex:0}.basis-\\[50px\\]{flex-basis:50px}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\!scale-50{--tw-scale-x:.5 !important;--tw-scale-y:.5 !important;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-2{gap:0.5rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded-md{border-radius:0.375rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:0.125rem}.border-2{border-width:2px}.border{border-width:1px}.border-r{border-right-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-slate-400{--tw-border-opacity:1;border-color:rgb(148 163 184 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-surface-border{border-color:var(--surface-border)}.border-gray-500{--tw-border-opacity:1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-surface{background-color:var(--surface)}.bg-primary{background-color:var(--primary)}.bg-blue-200{--tw-bg-opacity:1;background-color:rgb(191 219 254 / var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.\\!bg-slate-300{--tw-bg-opacity:1 !important;background-color:rgb(203 213 225 / var(--tw-bg-opacity)) !important}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.p-2{padding:0.5rem}.p-\\[10px\\]{padding:10px}.p-1{padding:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[5px\\]{padding-left:5px;padding-right:5px}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.pl-4{padding-left:1rem}.pt-1{padding-top:0.25rem}.pl-1{padding-left:0.25rem}.pl-3{padding-left:0.75rem}.pb-2{padding-bottom:0.5rem}.pt-2{padding-top:0.5rem}.pr-3{padding-right:0.75rem}.text-center{text-align:center}.text-xs{font-size:0.75rem;line-height:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-\\[20px\\]{font-size:20px}.\\!text-\\[20px\\]{font-size:20px !important}.font-bold{font-weight:700}.text-on-primary{color:var(--on-primary)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.shadow-lg{--tw-shadow:0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13);--tw-shadow-colored:0px 1.2px 3.6px var(--tw-shadow-color), 0px 6.4px 14.4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-sm{--tw-shadow:0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);--tw-shadow-colored:0px 0.3px 0.9px var(--tw-shadow-color), 0px 1.6px 3.6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.focus-within\\:border-blue-300:focus-within{--tw-border-opacity:1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-slate-100:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-300:hover{--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity))}.group:hover .group-hover\\:border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}@media(min-width: 768px){.md\\:w-\\[80vw\\]{width:80vw}}@media(min-width: 1024px){.lg\\:w-\\[60vw\\]{width:60vw}}@media(min-width: 1536px){.\\32xl\\:w-\\[50vw\\]{width:50vw}}`);
}
function If(n) {
  let e, t, r, o, i, s, a, l, c, u;
  return t = new au({
    props: {
      selectMultiple: n[1],
      entityType: n[0],
      selectedTenant: n[2]
    }
  }), t.$on("changeTenant", n[10]), t.$on("entitySelected", n[11]), s = new yf({
    props: {
      entityType: n[0],
      selectMultiple: n[1]
    }
  }), s.$on("acceptSelection", n[12]), c = new bf({
    props: {
      selectMultiple: n[1],
      entityType: n[0]
    }
  }), {
    c() {
      e = I("div"), U(t.$$.fragment), r = O(), o = I("div"), i = I("div"), U(s.$$.fragment), a = O(), l = I("div"), U(c.$$.fragment), x(e, "class", "flex-1 border-r border-slate-400 overflow-hidden"), x(l, "class", "flex-1 overflow-hidden mt-3"), x(i, "class", "flex flex-col h-full overflow-hidden"), x(o, "class", "flex-[2] pl-4 pt-1 h-full overflow-hidden");
    },
    m(d, f) {
      P(d, e, f), N(t, e, null), P(d, r, f), P(d, o, f), C(o, i), N(s, i, null), C(i, a), C(i, l), N(c, l, null), u = !0;
    },
    p(d, f) {
      const h = {};
      f & 2 && (h.selectMultiple = d[1]), f & 1 && (h.entityType = d[0]), f & 4 && (h.selectedTenant = d[2]), t.$set(h);
      const w = {};
      f & 1 && (w.entityType = d[0]), f & 2 && (w.selectMultiple = d[1]), s.$set(w);
      const p = {};
      f & 2 && (p.selectMultiple = d[1]), f & 1 && (p.entityType = d[0]), c.$set(p);
    },
    i(d) {
      u || (S(t.$$.fragment, d), S(s.$$.fragment, d), S(c.$$.fragment, d), u = !0);
    },
    o(d) {
      E(t.$$.fragment, d), E(s.$$.fragment, d), E(c.$$.fragment, d), u = !1;
    },
    d(d) {
      d && T(e), M(t), d && T(r), d && T(o), M(s), M(c);
    }
  };
}
function Tf(n) {
  let e, t;
  return e = new Ji({
    props: { allowBack: !!n[2] }
  }), e.$on("back", n[8]), e.$on("tenantSelected", n[9]), {
    c() {
      U(e.$$.fragment);
    },
    m(r, o) {
      N(e, r, o), t = !0;
    },
    p(r, o) {
      const i = {};
      o & 4 && (i.allowBack = !!r[2]), e.$set(i);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      M(e, r);
    }
  };
}
function Pf(n) {
  let e, t, r, o;
  const i = [Tf, If], s = [];
  function a(l, c) {
    return l[3] ? 0 : 1;
  }
  return t = a(n), r = s[t] = i[t](n), {
    c() {
      e = I("div"), r.c(), x(e, "class", "flex w-full h-full");
    },
    m(l, c) {
      P(l, e, c), s[t].m(e, null), o = !0;
    },
    p(l, [c]) {
      let u = t;
      t = a(l), t === u ? s[t].p(l, c) : (se(), E(s[u], 1, 1, () => {
        s[u] = null;
      }), ae(), r = s[t], r ? r.p(l, c) : (r = s[t] = i[t](l), r.c()), S(r, 1), r.m(e, null));
    },
    i(l) {
      o || (S(r), o = !0);
    },
    o(l) {
      E(r), o = !1;
    },
    d(l) {
      l && T(e), s[t].d();
    }
  };
}
function Rf(n, e, t) {
  let { entityType: r = X.Signal } = e, { selectMultiple: o = !1 } = e, i = Te(We), s = Te(St), a, l = !1, c = [], u = Ee(), d = Ve.subscribe((A) => {
    A.selectedTenant ? (t(3, l = !1), w(A.selectedTenant)) : t(3, l = !0);
  }), f = qe.subscribe((A) => {
    A.selectedEntities && !o ? (h(A.selectedEntities), u("selectedEntities", A.selectedEntities[0])) : c = A.selectedEntities;
  });
  function h(A) {
    const ne = pt(), q = ne.value.lastSelectedEntities, re = A.filter((R) => !q.includes(R.Id)).map((R) => R.Id);
    q.unshift(...re), q.splice(5), ne.update((R) => ({
      ...R,
      lastSelectedEntities: q
    }));
  }
  async function w(A) {
    try {
      t(2, a = await s.getTenantViewById(A));
    } catch (ne) {
      console.error(ne), t(3, l = !0);
    }
  }
  async function p(A) {
    console.log("Tenant selected", A);
    const ne = await i.getEntityById(X.Group, A.Root);
    Ve.update((q) => ({ ...q, selectedTenant: A.Id })), pt().update((q) => ({ ...q, selectedGroup: ne }));
  }
  function b() {
    t(3, l = !0);
  }
  function y() {
    h(c), u("selectedEntities", c);
  }
  ze(() => {
    d.unsubscribe(), f.unsubscribe();
  });
  const g = () => t(3, l = !1), k = (A) => p(A.detail.tenant), m = () => b(), v = (A) => u("entitySelected", { selectedEntity: A.detail.selectedEntity }), j = () => y();
  return n.$$set = (A) => {
    "entityType" in A && t(0, r = A.entityType), "selectMultiple" in A && t(1, o = A.selectMultiple);
  }, [
    r,
    o,
    a,
    l,
    u,
    p,
    b,
    y,
    g,
    k,
    m,
    v,
    j
  ];
}
class Yi extends te {
  constructor(e) {
    super(), ee(this, e, Rf, Pf, J, { entityType: 0, selectMultiple: 1 }, Ef);
  }
}
const nn = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.right-2{right:.5rem}.top-1{top:.25rem}.top-0{top:0px}.right-\\[-5px\\]{right:-5px}.right-1{right:.25rem}.top-2{top:.5rem}.left-0{left:0px}.top-\\[50\\%\\]{top:50%}.\\!top-\\[2px\\]{top:2px!important}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-3{margin-top:.75rem}.mr-2{margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-\\[-10px\\]{margin-top:-10px}.mb-2{margin-bottom:.5rem}.mb-1{margin-bottom:.25rem}.ml-2{margin-left:.5rem}.mr-1{margin-right:.25rem}.ml-4{margin-left:1rem}.mr-4{margin-right:1rem}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-full{height:100%}.h-\\[70vh\\]{height:70vh}.h-\\[3px\\]{height:3px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.max-h-\\[400px\\]{max-height:400px}.w-full{width:100%}.w-\\[80vw\\]{width:80vw}.w-\\[20px\\]{width:20px}.w-\\[18px\\]{width:18px}.w-\\[4px\\]{width:4px}.w-\\[50px\\]{width:50px}.flex-1{flex:1 1 0%}.flex-\\[2\\]{flex:2}.flex-\\[0\\]{flex:0}.basis-\\[50px\\]{flex-basis:50px}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\!scale-50{--tw-scale-x: .5 !important;--tw-scale-y: .5 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.border-2{border-width:2px}.border{border-width:1px}.border-r{border-right-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-slate-400{--tw-border-opacity: 1;border-color:rgb(148 163 184 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-surface-border{border-color:var(--surface-border)}.border-gray-500{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-surface{background-color:var(--surface)}.bg-primary{background-color:var(--primary)}.bg-blue-200{--tw-bg-opacity: 1;background-color:rgb(191 219 254 / var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.\\!bg-slate-300{--tw-bg-opacity: 1 !important;background-color:rgb(203 213 225 / var(--tw-bg-opacity))!important}.bg-slate-200{--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity: .5}.p-2{padding:.5rem}.p-\\[10px\\]{padding:10px}.p-1{padding:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[5px\\]{padding-left:5px;padding-right:5px}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.pl-4{padding-left:1rem}.pt-1{padding-top:.25rem}.pl-1{padding-left:.25rem}.pl-3{padding-left:.75rem}.pb-2{padding-bottom:.5rem}.pt-2{padding-top:.5rem}.pr-3{padding-right:.75rem}.text-center{text-align:center}.text-xs{font-size:.75rem;line-height:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-\\[20px\\]{font-size:20px}.\\!text-\\[20px\\]{font-size:20px!important}.font-bold{font-weight:700}.text-on-primary{color:var(--on-primary)}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.shadow-lg{--tw-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, .11), 0px 6.4px 14.4px rgba(0, 0, 0, .13);--tw-shadow-colored: 0px 1.2px 3.6px var(--tw-shadow-color), 0px 6.4px 14.4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0px .3px .9px rgba(0, 0, 0, .1), 0px 1.6px 3.6px rgba(0, 0, 0, .13);--tw-shadow-colored: 0px .3px .9px var(--tw-shadow-color), 0px 1.6px 3.6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.material-symbols-rounded{font-variation-settings:"FILL" 1,"wght" 400,"GRAD" 100,"opsz" 48;font-family:Material Symbols Rounded;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}html{--primary: rgba(29 78 216);--on-primary: rgb(255, 255, 255);--secondary: rgb(169, 55, 122);--on-secondary: rgb(255, 255, 255);--background: rgb(238, 238, 238);--surface: rgb(255, 255, 255);--on-surface: rgb(0, 0, 0);--form-field-fill: rgb(243, 244, 246);--surface-border: rgb(204, 204, 204)}.hover-highlight:hover,.highlighted{background:rgba(0,0,0,.1)!important;box-shadow:0 4px 30px #0000001a!important;-webkit-backdrop-filter:blur(19.2px)!important;backdrop-filter:blur(19.2px)!important}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v34/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2) format("woff2")}.focus-within\\:border-blue-300:focus-within{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-slate-100:hover{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-300:hover{--tw-bg-opacity: 1;background-color:rgb(203 213 225 / var(--tw-bg-opacity))}.group:hover .group-hover\\:border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}@media (min-width: 768px){.md\\:w-\\[80vw\\]{width:80vw}}@media (min-width: 1024px){.lg\\:w-\\[60vw\\]{width:60vw}}@media (min-width: 1536px){.\\32xl\\:w-\\[50vw\\]{width:50vw}}
`;
class Af extends HTMLElement {
  constructor() {
    super();
    vt(this, "_element");
    const t = this.attachShadow({ mode: "open" });
    let r = document.createElement("style");
    console.log(nn), r.textContent = nn, t.appendChild(r), rt(tn, new tn(document.body)), this._element = new Yi({
      target: t,
      props: {}
    });
  }
  disconnectedCallback() {
    this._element.$destroy();
  }
}
class $f extends HTMLElement {
  constructor() {
    super();
    vt(this, "_element");
    const t = this.attachShadow({ mode: "open" });
    let r = document.createElement("style");
    console.log(nn), r.textContent = nn, t.appendChild(r), this._element = new Ji({
      target: t,
      props: {}
    });
  }
  disconnectedCallback() {
    this._element.$destroy();
  }
}
function Go(n) {
  let e, t, r, o, i, s, a = {
    selectMultiple: n[2],
    entityType: n[1]
  };
  return r = new Yi({ props: a }), n[6](r), {
    c() {
      e = I("div"), t = I("div"), U(r.$$.fragment), x(t, "class", "h-full w-full"), x(e, "class", "bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw] flex 2xl:w-[50vw] py-2 px-4");
    },
    m(l, c) {
      P(l, e, c), C(e, t), N(r, t, null), n[7](e), o = !0, i || (s = [
        W(e, "keydown", n[5]),
        W(e, "click", Of)
      ], i = !0);
    },
    p(l, c) {
      const u = {};
      c & 4 && (u.selectMultiple = l[2]), c & 2 && (u.entityType = l[1]), r.$set(u);
    },
    i(l) {
      o || (S(r.$$.fragment, l), o = !0);
    },
    o(l) {
      E(r.$$.fragment, l), o = !1;
    },
    d(l) {
      l && T(e), n[6](null), M(r), n[7](null), i = !1, De(s);
    }
  };
}
function Df(n) {
  let e, t, r = n[0] && Go(n);
  return {
    c() {
      r && r.c(), e = un();
    },
    m(o, i) {
      r && r.m(o, i), P(o, e, i), t = !0;
    },
    p(o, [i]) {
      o[0] ? r ? (r.p(o, i), i & 1 && S(r, 1)) : (r = Go(o), r.c(), S(r, 1), r.m(e.parentNode, e)) : r && (se(), E(r, 1, 1, () => {
        r = null;
      }), ae());
    },
    i(o) {
      t || (S(r), t = !0);
    },
    o(o) {
      E(r), t = !1;
    },
    d(o) {
      r && r.d(o), o && T(e);
    }
  };
}
const Of = (n) => n.stopPropagation();
function Nf(n, e, t) {
  let { open: r = !1 } = e, { entityType: o = X.Signal } = e, { selectMultiple: i = !1 } = e, s = Te("PopupService", new tn(document.body)), a, l, c;
  function u(p, b) {
    p && !c && b ? (c = s.openPopup("entity-select-dialog", b, {
      backdrop: !0,
      closeOnClickOutside: !0,
      positioning: "center",
      inTransitionClassList: "scale-100",
      inTransitionDuration: 125,
      outTransitionClassList: "!scale-50",
      outTransitionDuration: 125
    }), c.afterClosed.then(() => {
      l.$destroy(), c = null;
    })) : d();
  }
  function d() {
    c == null || c.close();
  }
  function f(p) {
    console.log(p), p.key === "Escape" && d();
  }
  function h(p) {
    be[p ? "unshift" : "push"](() => {
      l = p, t(4, l);
    });
  }
  function w(p) {
    be[p ? "unshift" : "push"](() => {
      a = p, t(3, a);
    });
  }
  return n.$$set = (p) => {
    "open" in p && t(0, r = p.open), "entityType" in p && t(1, o = p.entityType), "selectMultiple" in p && t(2, i = p.selectMultiple);
  }, n.$$.update = () => {
    n.$$.dirty & 9 && u(r, a);
  }, [
    r,
    o,
    i,
    a,
    l,
    f,
    h,
    w
  ];
}
class Mf extends te {
  constructor(e) {
    super(), ee(this, e, Nf, Df, J, {
      open: 0,
      entityType: 1,
      selectMultiple: 2
    });
  }
}
class rd {
  constructor() {
  }
  selectEntity(e) {
    return this._openEntitySelectDialog(e, !1).then((t) => t.length === 1 ? t[0] : null);
  }
  selectMultipleEntities(e) {
    return this._openEntitySelectDialog(e, !0);
  }
  _openEntitySelectDialog(e, t) {
    const r = new Mf({
      target: document.body,
      props: {
        entityType: e,
        open: !1,
        selectMultiple: !1
      }
    });
    return setTimeout(() => {
      r.$set({ open: !0 });
    }, 50), new Promise((o, i) => {
      r.$on("entity-selected", (s) => {
        o(s.detail);
      });
    });
  }
}
const jf = Af, Uf = $f;
function od() {
  Xo("audako-entity-select", jf), Xo("audako-tenant-select", Uf);
}
function id(n, e) {
  const t = new We(n, e);
  rt(Hn, new Hn(n, e)), rt(We, t), rt(St, new St(n, e)), rt(Ct, new Ct(t)), rt(zn, new zn(n, e));
}
function Xo(n, e) {
  customElements.get(n) || customElements.define(n, e);
}
export {
  wt as BaseHttpService,
  $r as CompressionInterval,
  Jo as ConditionSettings,
  Ge as ConfigurationEntity,
  Bf as Dashboard,
  Xf as DataConnection,
  Wf as DataConnectionFailureConditionSettings,
  Jf as DataConnectionSettings,
  Gf as DataSource,
  zn as DataSourceHttpService,
  Pr as DataSourceType,
  Zi as EntityHttpEndpoints,
  We as EntityHttpService,
  Hf as EntityIcons,
  Ct as EntityNameService,
  jf as EntitySelect,
  rd as EntitySelectDialogService,
  X as EntityType,
  qf as EventCondition,
  Tr as EventConditionSettingsType,
  Ff as EventDefinition,
  Ir as Field,
  Lf as Group,
  nd as HistoricalValueService,
  ho as LiveHubEvent,
  kt as LiveHubMethod,
  Hn as LiveValueService,
  Kf as Signal,
  Zf as SignalAnalogSettings,
  Vf as SignalConditionSettings,
  ed as SignalCounterSettings,
  Qf as SignalDigitalSettings,
  Yn as SignalSettings,
  Ar as SignalType,
  po as SubscriptionPrefix,
  St as TenantHttpService,
  Uf as TenantSelect,
  es as TenantView,
  Yf as UserProfile,
  td as UserProfileHttpService,
  id as registerCoreServices,
  od as registerCustomElements,
  Te as resolveService,
  rt as tryRegisterService
};
