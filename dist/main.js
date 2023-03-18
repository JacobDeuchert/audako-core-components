var Ja = Object.defineProperty;
var Xa = (t, e, n) => e in t ? Ja(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ge = (t, e, n) => (Xa(t, typeof e != "symbol" ? e + "" : e, n), n);
var G;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage";
})(G || (G = {}));
const mm = {
  [G.Group]: "fas fa-folder",
  [G.Dashboard]: "adk adk-dashboard",
  [G.Signal]: "fas fa-code",
  [G.DataConnection]: "fas fa-circle-notch",
  [G.DataSource]: "fas fa-server"
}, Ka = {
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
class Re {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class Ve {
  constructor(e) {
    this.Name = new Re(), this.Description = new Re(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class Ya extends Ve {
  constructor() {
    super();
  }
}
class Qa extends Ve {
}
class Za extends Ve {
}
class ec extends Ve {
}
var mo;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.DataConnectionFailureConditionSettings = "DataConnectionFailureConditionSettings";
})(mo || (mo = {}));
class gl {
}
class vm extends gl {
}
class _m extends gl {
}
var vo;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter";
})(vo || (vo = {}));
class tc extends Ve {
}
var _o;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp";
})(_o || (_o = {}));
class nc extends Ve {
}
class bm {
}
class rc {
  constructor(e) {
    Object.assign(this, e);
  }
}
class ym {
}
var bo;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniservalInput", t.UniversalInOut = "UniversalInOut";
})(bo || (bo = {}));
class ic extends Ve {
  constructor() {
    super(), this.Type = new Re(), this.DataConnectionId = new Re(), this.Address = new Re(), this.Settings = new Er(), this.RecordingSettings = new oc();
  }
}
class Er {
}
class wm extends Er {
}
class Sm extends Er {
}
class Em extends Er {
}
var yo;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(yo || (yo = {}));
var wo;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})(wo || (wo = {}));
class oc {
  constructor() {
    this.Type = new Re(), this.Interval = new Re(), this.SpecialProcessingType = new Re(), this.Type = new Re(), this.Interval = new Re();
  }
}
var So;
(function(t) {
  t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
})(So || (So = {}));
var Eo;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(Eo || (Eo = {}));
class sc extends Ve {
}
class lc extends Ve {
}
class ac extends Ve {
}
var Co;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(Co || (Co = {}));
class cc extends Ve {
}
const uc = {
  [G.Group]: Ya,
  [G.Signal]: ic,
  [G.Dashboard]: Qa,
  [G.DashboardTab]: sc,
  [G.DataConnection]: nc,
  [G.DataSource]: tc,
  [G.EventCategory]: lc,
  [G.EventCondition]: ec,
  [G.EventDefinition]: Za,
  [G.Formula]: ac,
  [G.ProcessImage]: cc
};
class Cm {
  static isEntityType(e) {
    return Object.keys(G).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = uc[e];
    if (!r)
      throw new Error(`Entity type ${e} is not supported`);
    const i = new r();
    return this._getObjectKeys(i, n);
  }
  static setPropertyValue(e, n, r) {
    this._setObjectProperty(e, n.split("."), r);
  }
  static getPropertyValue(e, n) {
    const r = n.split(".");
    let i = e;
    for (const o of r) {
      if (!i)
        return null;
      i = i[o];
    }
    return Re.isField(i) ? i.Value : i;
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
      Re.isField(s) ? i.push({
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
  static _setObjectProperty(e, n, r) {
    const i = Object.keys(e), o = n.shift();
    if (n.length === 0) {
      Re.isField(e[o]) ? e[o] = new Re(r) : e[o] = r;
      return;
    } else if (i.includes(o) && typeof e[o] == "object") {
      const s = e[o];
      this._setObjectProperty(s, n, r);
    }
  }
}
class km {
  static isValidMongoId(e) {
    return /^[0-9a-fA-F]{24}$/.test(e);
  }
}
function fc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var gi = {}, dc = {
  get exports() {
    return gi;
  },
  set exports(t) {
    gi = t;
  }
}, lr = {}, hc = {
  get exports() {
    return lr;
  },
  set exports(t) {
    lr = t;
  }
}, ml = function(e, n) {
  return function() {
    for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
      i[o] = arguments[o];
    return e.apply(n, i);
  };
}, pc = ml, Ui = Object.prototype.toString, Mi = function(t) {
  return function(e) {
    var n = Ui.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Ut(t) {
  return t = t.toLowerCase(), function(n) {
    return Mi(n) === t;
  };
}
function Hi(t) {
  return Array.isArray(t);
}
function ar(t) {
  return typeof t > "u";
}
function gc(t) {
  return t !== null && !ar(t) && t.constructor !== null && !ar(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var vl = Ut("ArrayBuffer");
function mc(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && vl(t.buffer), e;
}
function vc(t) {
  return typeof t == "string";
}
function _c(t) {
  return typeof t == "number";
}
function _l(t) {
  return t !== null && typeof t == "object";
}
function Zn(t) {
  if (Mi(t) !== "object")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var bc = Ut("Date"), yc = Ut("File"), wc = Ut("Blob"), Sc = Ut("FileList");
function ji(t) {
  return Ui.call(t) === "[object Function]";
}
function Ec(t) {
  return _l(t) && ji(t.pipe);
}
function Cc(t) {
  var e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Ui.call(t) === e || ji(t.toString) && t.toString() === e);
}
var kc = Ut("URLSearchParams");
function $c(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function Ac() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Li(t, e) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Hi(t))
      for (var n = 0, r = t.length; n < r; n++)
        e.call(null, t[n], n, t);
    else
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
}
function mi() {
  var t = {};
  function e(i, o) {
    Zn(t[o]) && Zn(i) ? t[o] = mi(t[o], i) : Zn(i) ? t[o] = mi({}, i) : Hi(i) ? t[o] = i.slice() : t[o] = i;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    Li(arguments[n], e);
  return t;
}
function Tc(t, e, n) {
  return Li(e, function(i, o) {
    n && typeof i == "function" ? t[o] = pc(i, n) : t[o] = i;
  }), t;
}
function xc(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function Pc(t, e, n, r) {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, n && Object.assign(t.prototype, n);
}
function Ic(t, e, n) {
  var r, i, o, s = {};
  e = e || {};
  do {
    for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0; )
      o = r[i], s[o] || (e[o] = t[o], s[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}
function Rc(t, e, n) {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  var r = t.indexOf(e, n);
  return r !== -1 && r === n;
}
function Oc(t) {
  if (!t)
    return null;
  var e = t.length;
  if (ar(e))
    return null;
  for (var n = new Array(e); e-- > 0; )
    n[e] = t[e];
  return n;
}
var Dc = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), we = {
  isArray: Hi,
  isArrayBuffer: vl,
  isBuffer: gc,
  isFormData: Cc,
  isArrayBufferView: mc,
  isString: vc,
  isNumber: _c,
  isObject: _l,
  isPlainObject: Zn,
  isUndefined: ar,
  isDate: bc,
  isFile: yc,
  isBlob: wc,
  isFunction: ji,
  isStream: Ec,
  isURLSearchParams: kc,
  isStandardBrowserEnv: Ac,
  forEach: Li,
  merge: mi,
  extend: Tc,
  trim: $c,
  stripBOM: xc,
  inherits: Pc,
  toFlatObject: Ic,
  kindOf: Mi,
  kindOfTest: Ut,
  endsWith: Rc,
  toArray: Oc,
  isTypedArray: Dc,
  isFileList: Sc
}, Lt = we;
function ko(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var bl = function(e, n, r) {
  if (!n)
    return e;
  var i;
  if (r)
    i = r(n);
  else if (Lt.isURLSearchParams(n))
    i = n.toString();
  else {
    var o = [];
    Lt.forEach(n, function(a, c) {
      a === null || typeof a > "u" || (Lt.isArray(a) ? c = c + "[]" : a = [a], Lt.forEach(a, function(f) {
        Lt.isDate(f) ? f = f.toISOString() : Lt.isObject(f) && (f = JSON.stringify(f)), o.push(ko(c) + "=" + ko(f));
      }));
    }), i = o.join("&");
  }
  if (i) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}, Nc = we;
function Cr() {
  this.handlers = [];
}
Cr.prototype.use = function(e, n, r) {
  return this.handlers.push({
    fulfilled: e,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
Cr.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
Cr.prototype.forEach = function(e) {
  Nc.forEach(this.handlers, function(r) {
    r !== null && e(r);
  });
};
var Uc = Cr, Mc = we, Hc = function(e, n) {
  Mc.forEach(e, function(i, o) {
    o !== n && o.toUpperCase() === n.toUpperCase() && (e[n] = i, delete e[o]);
  });
}, yl = we;
function nn(t, e, n, r, i) {
  Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
yl.inherits(nn, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var wl = nn.prototype, Sl = {};
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
  // eslint-disable-next-line func-names
].forEach(function(t) {
  Sl[t] = { value: t };
});
Object.defineProperties(nn, Sl);
Object.defineProperty(wl, "isAxiosError", { value: !0 });
nn.from = function(t, e, n, r, i, o) {
  var s = Object.create(wl);
  return yl.toFlatObject(t, s, function(a) {
    return a !== Error.prototype;
  }), nn.call(s, t.message, e, n, r, i), s.name = t.name, o && Object.assign(s, o), s;
};
var gn = nn, El = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, je = we;
function jc(t, e) {
  e = e || new FormData();
  var n = [];
  function r(o) {
    return o === null ? "" : je.isDate(o) ? o.toISOString() : je.isArrayBuffer(o) || je.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function i(o, s) {
    if (je.isPlainObject(o) || je.isArray(o)) {
      if (n.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + s);
      n.push(o), je.forEach(o, function(a, c) {
        if (!je.isUndefined(a)) {
          var u = s ? s + "." + c : c, f;
          if (a && !s && typeof a == "object") {
            if (je.endsWith(c, "{}"))
              a = JSON.stringify(a);
            else if (je.endsWith(c, "[]") && (f = je.toArray(a))) {
              f.forEach(function(d) {
                !je.isUndefined(d) && e.append(u, r(d));
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
var Cl = jc, Nr, $o;
function Lc() {
  if ($o)
    return Nr;
  $o = 1;
  var t = gn;
  return Nr = function(n, r, i) {
    var o = i.config.validateStatus;
    !i.status || !o || o(i.status) ? n(i) : r(new t(
      "Request failed with status code " + i.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
      i.config,
      i.request,
      i
    ));
  }, Nr;
}
var Ur, Ao;
function Fc() {
  if (Ao)
    return Ur;
  Ao = 1;
  var t = we;
  return Ur = t.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
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
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), Ur;
}
var zc = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Bc = function(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}, Wc = zc, Vc = Bc, kl = function(e, n) {
  return e && !Wc(n) ? Vc(e, n) : n;
}, Mr, To;
function qc() {
  if (To)
    return Mr;
  To = 1;
  var t = we, e = [
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
  return Mr = function(r) {
    var i = {}, o, s, l;
    return r && t.forEach(r.split(`
`), function(c) {
      if (l = c.indexOf(":"), o = t.trim(c.substr(0, l)).toLowerCase(), s = t.trim(c.substr(l + 1)), o) {
        if (i[o] && e.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? i[o] = (i[o] ? i[o] : []).concat([s]) : i[o] = i[o] ? i[o] + ", " + s : s;
      }
    }), i;
  }, Mr;
}
var Hr, xo;
function Gc() {
  if (xo)
    return Hr;
  xo = 1;
  var t = we;
  return Hr = t.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
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
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), Hr;
}
var jr, Po;
function kr() {
  if (Po)
    return jr;
  Po = 1;
  var t = gn, e = we;
  function n(r) {
    t.call(this, r ?? "canceled", t.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(n, t, {
    __CANCEL__: !0
  }), jr = n, jr;
}
var Lr, Io;
function Jc() {
  return Io || (Io = 1, Lr = function(e) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return n && n[1] || "";
  }), Lr;
}
var Fr, Ro;
function Oo() {
  if (Ro)
    return Fr;
  Ro = 1;
  var t = we, e = Lc(), n = Fc(), r = bl, i = kl, o = qc(), s = Gc(), l = El, a = gn, c = kr(), u = Jc();
  return Fr = function(d) {
    return new Promise(function(m, g) {
      var v = d.data, x = d.headers, y = d.responseType, _;
      function b() {
        d.cancelToken && d.cancelToken.unsubscribe(_), d.signal && d.signal.removeEventListener("abort", _);
      }
      t.isFormData(v) && t.isStandardBrowserEnv() && delete x["Content-Type"];
      var p = new XMLHttpRequest();
      if (d.auth) {
        var w = d.auth.username || "", k = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
        x.Authorization = "Basic " + btoa(w + ":" + k);
      }
      var E = i(d.baseURL, d.url);
      p.open(d.method.toUpperCase(), r(E, d.params, d.paramsSerializer), !0), p.timeout = d.timeout;
      function N() {
        if (p) {
          var ee = "getAllResponseHeaders" in p ? o(p.getAllResponseHeaders()) : null, D = !y || y === "text" || y === "json" ? p.responseText : p.response, M = {
            data: D,
            status: p.status,
            statusText: p.statusText,
            headers: ee,
            config: d,
            request: p
          };
          e(function(Ze) {
            m(Ze), b();
          }, function(Ze) {
            g(Ze), b();
          }, M), p = null;
        }
      }
      if ("onloadend" in p ? p.onloadend = N : p.onreadystatechange = function() {
        !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(N);
      }, p.onabort = function() {
        p && (g(new a("Request aborted", a.ECONNABORTED, d, p)), p = null);
      }, p.onerror = function() {
        g(new a("Network Error", a.ERR_NETWORK, d, p, p)), p = null;
      }, p.ontimeout = function() {
        var D = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded", M = d.transitional || l;
        d.timeoutErrorMessage && (D = d.timeoutErrorMessage), g(new a(
          D,
          M.clarifyTimeoutError ? a.ETIMEDOUT : a.ECONNABORTED,
          d,
          p
        )), p = null;
      }, t.isStandardBrowserEnv()) {
        var z = (d.withCredentials || s(E)) && d.xsrfCookieName ? n.read(d.xsrfCookieName) : void 0;
        z && (x[d.xsrfHeaderName] = z);
      }
      "setRequestHeader" in p && t.forEach(x, function(D, M) {
        typeof v > "u" && M.toLowerCase() === "content-type" ? delete x[M] : p.setRequestHeader(M, D);
      }), t.isUndefined(d.withCredentials) || (p.withCredentials = !!d.withCredentials), y && y !== "json" && (p.responseType = d.responseType), typeof d.onDownloadProgress == "function" && p.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", d.onUploadProgress), (d.cancelToken || d.signal) && (_ = function(ee) {
        p && (g(!ee || ee && ee.type ? new c() : ee), p.abort(), p = null);
      }, d.cancelToken && d.cancelToken.subscribe(_), d.signal && (d.signal.aborted ? _() : d.signal.addEventListener("abort", _))), v || (v = null);
      var X = u(E);
      if (X && ["http", "https", "file"].indexOf(X) === -1) {
        g(new a("Unsupported protocol " + X + ":", a.ERR_BAD_REQUEST, d));
        return;
      }
      p.send(v);
    });
  }, Fr;
}
var zr, Do;
function Xc() {
  return Do || (Do = 1, zr = null), zr;
}
var de = we, No = Hc, Uo = gn, Kc = El, Yc = Cl, Qc = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Mo(t, e) {
  !de.isUndefined(t) && de.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function Zc() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Oo()), t;
}
function eu(t, e, n) {
  if (de.isString(t))
    try {
      return (e || JSON.parse)(t), de.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
var $r = {
  transitional: Kc,
  adapter: Zc(),
  transformRequest: [function(e, n) {
    if (No(n, "Accept"), No(n, "Content-Type"), de.isFormData(e) || de.isArrayBuffer(e) || de.isBuffer(e) || de.isStream(e) || de.isFile(e) || de.isBlob(e))
      return e;
    if (de.isArrayBufferView(e))
      return e.buffer;
    if (de.isURLSearchParams(e))
      return Mo(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var r = de.isObject(e), i = n && n["Content-Type"], o;
    if ((o = de.isFileList(e)) || r && i === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return Yc(o ? { "files[]": e } : e, s && new s());
    } else if (r || i === "application/json")
      return Mo(n, "application/json"), eu(e);
    return e;
  }],
  transformResponse: [function(e) {
    var n = this.transitional || $r.transitional, r = n && n.silentJSONParsing, i = n && n.forcedJSONParsing, o = !r && this.responseType === "json";
    if (o || i && de.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Uo.from(s, Uo.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Xc()
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
de.forEach(["delete", "get", "head"], function(e) {
  $r.headers[e] = {};
});
de.forEach(["post", "put", "patch"], function(e) {
  $r.headers[e] = de.merge(Qc);
});
var Fi = $r, tu = we, nu = Fi, ru = function(e, n, r) {
  var i = this || nu;
  return tu.forEach(r, function(s) {
    e = s.call(i, e, n);
  }), e;
}, Br, Ho;
function $l() {
  return Ho || (Ho = 1, Br = function(e) {
    return !!(e && e.__CANCEL__);
  }), Br;
}
var jo = we, Wr = ru, iu = $l(), ou = Fi, su = kr();
function Vr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new su();
}
var lu = function(e) {
  Vr(e), e.headers = e.headers || {}, e.data = Wr.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = jo.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), jo.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(i) {
      delete e.headers[i];
    }
  );
  var n = e.adapter || ou.adapter;
  return n(e).then(function(i) {
    return Vr(e), i.data = Wr.call(
      e,
      i.data,
      i.headers,
      e.transformResponse
    ), i;
  }, function(i) {
    return iu(i) || (Vr(e), i && i.response && (i.response.data = Wr.call(
      e,
      i.response.data,
      i.response.headers,
      e.transformResponse
    ))), Promise.reject(i);
  });
}, Ue = we, Al = function(e, n) {
  n = n || {};
  var r = {};
  function i(u, f) {
    return Ue.isPlainObject(u) && Ue.isPlainObject(f) ? Ue.merge(u, f) : Ue.isPlainObject(f) ? Ue.merge({}, f) : Ue.isArray(f) ? f.slice() : f;
  }
  function o(u) {
    if (Ue.isUndefined(n[u])) {
      if (!Ue.isUndefined(e[u]))
        return i(void 0, e[u]);
    } else
      return i(e[u], n[u]);
  }
  function s(u) {
    if (!Ue.isUndefined(n[u]))
      return i(void 0, n[u]);
  }
  function l(u) {
    if (Ue.isUndefined(n[u])) {
      if (!Ue.isUndefined(e[u]))
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
  return Ue.forEach(Object.keys(e).concat(Object.keys(n)), function(f) {
    var d = c[f] || o, h = d(f);
    Ue.isUndefined(h) && d !== a || (r[f] = h);
  }), r;
}, qr, Lo;
function Tl() {
  return Lo || (Lo = 1, qr = {
    version: "0.27.2"
  }), qr;
}
var au = Tl().version, dt = gn, zi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  zi[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var Fo = {};
zi.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + au + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return function(o, s, l) {
    if (e === !1)
      throw new dt(
        i(s, " has been removed" + (n ? " in " + n : "")),
        dt.ERR_DEPRECATED
      );
    return n && !Fo[s] && (Fo[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
function cu(t, e, n) {
  if (typeof t != "object")
    throw new dt("options must be an object", dt.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
    var o = r[i], s = e[o];
    if (s) {
      var l = t[o], a = l === void 0 || s(l, o, t);
      if (a !== !0)
        throw new dt("option " + o + " must be " + a, dt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new dt("Unknown option " + o, dt.ERR_BAD_OPTION);
  }
}
var uu = {
  assertOptions: cu,
  validators: zi
}, xl = we, fu = bl, zo = Uc, Bo = lu, Ar = Al, du = kl, Pl = uu, Ft = Pl.validators;
function rn(t) {
  this.defaults = t, this.interceptors = {
    request: new zo(),
    response: new zo()
  };
}
rn.prototype.request = function(e, n) {
  typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ar(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && Pl.assertOptions(r, {
    silentJSONParsing: Ft.transitional(Ft.boolean),
    forcedJSONParsing: Ft.transitional(Ft.boolean),
    clarifyTimeoutError: Ft.transitional(Ft.boolean)
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
    var a = [Bo, void 0];
    for (Array.prototype.unshift.apply(a, i), a = a.concat(s), l = Promise.resolve(n); a.length; )
      l = l.then(a.shift(), a.shift());
    return l;
  }
  for (var c = n; i.length; ) {
    var u = i.shift(), f = i.shift();
    try {
      c = u(c);
    } catch (d) {
      f(d);
      break;
    }
  }
  try {
    l = Bo(c);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; s.length; )
    l = l.then(s.shift(), s.shift());
  return l;
};
rn.prototype.getUri = function(e) {
  e = Ar(this.defaults, e);
  var n = du(e.baseURL, e.url);
  return fu(n, e.params, e.paramsSerializer);
};
xl.forEach(["delete", "get", "head", "options"], function(e) {
  rn.prototype[e] = function(n, r) {
    return this.request(Ar(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
xl.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, l) {
      return this.request(Ar(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  rn.prototype[e] = n(), rn.prototype[e + "Form"] = n(!0);
});
var hu = rn, Gr, Wo;
function pu() {
  if (Wo)
    return Gr;
  Wo = 1;
  var t = kr();
  function e(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    var i = this;
    this.promise.then(function(o) {
      if (i._listeners) {
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
    if (this._listeners) {
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
  }, Gr = e, Gr;
}
var Jr, Vo;
function gu() {
  return Vo || (Vo = 1, Jr = function(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }), Jr;
}
var Xr, qo;
function mu() {
  if (qo)
    return Xr;
  qo = 1;
  var t = we;
  return Xr = function(n) {
    return t.isObject(n) && n.isAxiosError === !0;
  }, Xr;
}
var Go = we, vu = ml, er = hu, _u = Al, bu = Fi;
function Il(t) {
  var e = new er(t), n = vu(er.prototype.request, e);
  return Go.extend(n, er.prototype, e), Go.extend(n, e), n.create = function(i) {
    return Il(_u(t, i));
  }, n;
}
var De = Il(bu);
De.Axios = er;
De.CanceledError = kr();
De.CancelToken = pu();
De.isCancel = $l();
De.VERSION = Tl().version;
De.toFormData = Cl;
De.AxiosError = gn;
De.Cancel = De.CanceledError;
De.all = function(e) {
  return Promise.all(e);
};
De.spread = gu();
De.isAxiosError = mu();
hc.exports = De;
lr.default = De;
(function(t) {
  t.exports = lr;
})(dc);
const Ee = /* @__PURE__ */ fc(gi);
var vi = function(t, e) {
  return vi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, vi(t, e);
};
function Ye(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function yu(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Rl(t, e) {
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
function on(t) {
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
function _t(t, e) {
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
function bt(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function Xt(t) {
  return this instanceof Xt ? (this.v = t, this) : new Xt(t);
}
function wu(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(h) {
      return new Promise(function(m, g) {
        o.push([d, h, m, g]) > 1 || l(d, h);
      });
    });
  }
  function l(d, h) {
    try {
      a(r[d](h));
    } catch (m) {
      f(o[0][3], m);
    }
  }
  function a(d) {
    d.value instanceof Xt ? Promise.resolve(d.value.v).then(c, u) : f(o[0][2], d);
  }
  function c(d) {
    l("next", d);
  }
  function u(d) {
    l("throw", d);
  }
  function f(d, h) {
    d(h), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function Su(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof on == "function" ? on(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function oe(t) {
  return typeof t == "function";
}
function Bi(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Kr = Bi(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function cr(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var jn = function() {
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
            for (var l = on(s), a = l.next(); !a.done; a = l.next()) {
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
      if (oe(u))
        try {
          u();
        } catch (g) {
          o = g instanceof Kr ? g.errors : [g];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = on(f), h = d.next(); !h.done; h = d.next()) {
            var m = h.value;
            try {
              Jo(m);
            } catch (g) {
              o = o ?? [], g instanceof Kr ? o = bt(bt([], _t(o)), _t(g.errors)) : o.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            h && !h.done && (i = d.return) && i.call(d);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (o)
        throw new Kr(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Jo(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && cr(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && cr(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Ol = jn.EMPTY;
function Dl(t) {
  return t instanceof jn || t && "closed" in t && oe(t.remove) && oe(t.add) && oe(t.unsubscribe);
}
function Jo(t) {
  oe(t) ? t() : t.unsubscribe();
}
var Nl = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, _i = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = _i.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, bt([t, e], _t(n))) : setTimeout.apply(void 0, bt([t, e], _t(n)));
  },
  clearTimeout: function(t) {
    var e = _i.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Ul(t) {
  _i.setTimeout(function() {
    throw t;
  });
}
function bi() {
}
function tr(t) {
  t();
}
var Wi = function(t) {
  Ye(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Dl(n) && n.add(r)) : r.destination = $u, r;
  }
  return e.create = function(n, r, i) {
    return new sn(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
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
}(jn), Eu = Function.prototype.bind;
function Yr(t, e) {
  return Eu.call(t, e);
}
var Cu = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Bn(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Bn(r);
      }
    else
      Bn(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Bn(n);
      }
  }, t;
}(), sn = function(t) {
  Ye(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    if (oe(n) || !n)
      s = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      o && Nl.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && Yr(n.next, l),
        error: n.error && Yr(n.error, l),
        complete: n.complete && Yr(n.complete, l)
      }) : s = n;
    }
    return o.destination = new Cu(s), o;
  }
  return e;
}(Wi);
function Bn(t) {
  Ul(t);
}
function ku(t) {
  throw t;
}
var $u = {
  closed: !0,
  next: bi,
  error: ku,
  complete: bi
}, Vi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function mn(t) {
  return t;
}
function Au(t) {
  return t.length === 0 ? mn : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var $e = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, o = xu(e) ? e : new sn(e, n, r);
    return tr(function() {
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
    return n = Xo(n), new n(function(i, o) {
      var s = new sn({
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
  }, t.prototype[Vi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Au(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Xo(e), new e(function(r, i) {
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
function Xo(t) {
  var e;
  return (e = t ?? Nl.Promise) !== null && e !== void 0 ? e : Promise;
}
function Tu(t) {
  return t && oe(t.next) && oe(t.error) && oe(t.complete);
}
function xu(t) {
  return t && t instanceof Wi || Tu(t) && Dl(t);
}
function Pu(t) {
  return oe(t == null ? void 0 : t.lift);
}
function xe(t) {
  return function(e) {
    if (Pu(e))
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
function ge(t, e, n, r, i) {
  return new Iu(t, e, n, r, i);
}
var Iu = function(t) {
  Ye(e, t);
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
}(Wi), Ru = Bi(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ke = function(t) {
  Ye(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Ko(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ru();
  }, e.prototype.next = function(n) {
    var r = this;
    tr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = on(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
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
    tr(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    tr(function() {
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
    return o || s ? Ol : (this.currentObservers = null, l.push(n), new jn(function() {
      r.currentObservers = null, cr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new $e();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Ko(n, r);
  }, e;
}($e), Ko = function(t) {
  Ye(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Ol;
  }, e;
}(ke), qi = function(t) {
  Ye(e, t);
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
}(ke), Gi = {
  now: function() {
    return (Gi.delegate || Date).now();
  },
  delegate: void 0
}, Ml = function(t) {
  Ye(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = Gi);
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
}(ke), Ou = function(t) {
  Ye(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(jn), ur = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = ur.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, bt([t, e], _t(n))) : setInterval.apply(void 0, bt([t, e], _t(n)));
  },
  clearInterval: function(t) {
    var e = ur.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, Du = function(t) {
  Ye(e, t);
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
    return i === void 0 && (i = 0), ur.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    ur.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, cr(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Ou), Yo = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Gi.now, t;
}(), Nu = function(t) {
  Ye(e, t);
  function e(n, r) {
    r === void 0 && (r = Yo.now);
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
}(Yo), Tr = new Nu(Du), Uu = Tr, Mu = new $e(function(t) {
  return t.complete();
});
function Hl(t) {
  return t && oe(t.schedule);
}
function jl(t) {
  return t[t.length - 1];
}
function Hu(t) {
  return oe(jl(t)) ? t.pop() : void 0;
}
function Ji(t) {
  return Hl(jl(t)) ? t.pop() : void 0;
}
var Ll = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Fl(t) {
  return oe(t == null ? void 0 : t.then);
}
function zl(t) {
  return oe(t[Vi]);
}
function Bl(t) {
  return Symbol.asyncIterator && oe(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Wl(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ju() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Vl = ju();
function ql(t) {
  return oe(t == null ? void 0 : t[Vl]);
}
function Gl(t) {
  return wu(this, arguments, function() {
    var n, r, i, o;
    return Rl(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Xt(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, Xt(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Xt(i)];
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
function Jl(t) {
  return oe(t == null ? void 0 : t.getReader);
}
function qe(t) {
  if (t instanceof $e)
    return t;
  if (t != null) {
    if (zl(t))
      return Lu(t);
    if (Ll(t))
      return Fu(t);
    if (Fl(t))
      return zu(t);
    if (Bl(t))
      return Xl(t);
    if (ql(t))
      return Bu(t);
    if (Jl(t))
      return Wu(t);
  }
  throw Wl(t);
}
function Lu(t) {
  return new $e(function(e) {
    var n = t[Vi]();
    if (oe(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Fu(t) {
  return new $e(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function zu(t) {
  return new $e(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Ul);
  });
}
function Bu(t) {
  return new $e(function(e) {
    var n, r;
    try {
      for (var i = on(t), o = i.next(); !o.done; o = i.next()) {
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
function Xl(t) {
  return new $e(function(e) {
    Vu(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Wu(t) {
  return Xl(Gl(t));
}
function Vu(t, e) {
  var n, r, i, o;
  return yu(this, void 0, void 0, function() {
    var s, l;
    return Rl(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), n = Su(t), a.label = 1;
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
function it(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function Kl(t, e) {
  return e === void 0 && (e = 0), xe(function(n, r) {
    n.subscribe(ge(r, function(i) {
      return it(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return it(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return it(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Yl(t, e) {
  return e === void 0 && (e = 0), xe(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function qu(t, e) {
  return qe(t).pipe(Yl(e), Kl(e));
}
function Gu(t, e) {
  return qe(t).pipe(Yl(e), Kl(e));
}
function Ju(t, e) {
  return new $e(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Xu(t, e) {
  return new $e(function(n) {
    var r;
    return it(n, e, function() {
      r = t[Vl](), it(n, e, function() {
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
      return oe(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Ql(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new $e(function(n) {
    it(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      it(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Ku(t, e) {
  return Ql(Gl(t), e);
}
function Yu(t, e) {
  if (t != null) {
    if (zl(t))
      return qu(t, e);
    if (Ll(t))
      return Ju(t, e);
    if (Fl(t))
      return Gu(t, e);
    if (Bl(t))
      return Ql(t, e);
    if (ql(t))
      return Xu(t, e);
    if (Jl(t))
      return Ku(t, e);
  }
  throw Wl(t);
}
function Mt(t, e) {
  return e ? Yu(t, e) : qe(t);
}
function Kt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ji(t);
  return Mt(t, n);
}
function Xi(t) {
  return !!t && (t instanceof $e || oe(t.lift) && oe(t.subscribe));
}
var Qu = Bi(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Ot(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new sn({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new Qu());
      }
    });
    t.subscribe(o);
  });
}
function Zu(t) {
  return t instanceof Date && !isNaN(t);
}
function ln(t, e) {
  return xe(function(n, r) {
    var i = 0;
    n.subscribe(ge(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var ef = Array.isArray;
function tf(t, e) {
  return ef(e) ? t.apply(void 0, bt([], _t(e))) : t(e);
}
function nf(t) {
  return ln(function(e) {
    return tf(t, e);
  });
}
var rf = Array.isArray, of = Object.getPrototypeOf, sf = Object.prototype, lf = Object.keys;
function af(t) {
  if (t.length === 1) {
    var e = t[0];
    if (rf(e))
      return { args: e, keys: null };
    if (cf(e)) {
      var n = lf(e);
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
function cf(t) {
  return t && typeof t == "object" && of(t) === sf;
}
function uf(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function Zl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ji(t), r = Hu(t), i = af(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return Mt([], n);
  var l = new $e(ff(o, n, s ? function(a) {
    return uf(s, a);
  } : mn));
  return r ? l.pipe(nf(r)) : l;
}
function ff(t, e, n) {
  return n === void 0 && (n = mn), function(r) {
    Qo(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, a = function(u) {
        Qo(e, function() {
          var f = Mt(t[u], e), d = !1;
          f.subscribe(ge(r, function(h) {
            o[u] = h, d || (d = !0, l--), l || r.next(n(o.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, c = 0; c < i; c++)
        a(c);
    }, r);
  };
}
function Qo(t, e, n) {
  t ? it(n, t, e) : e();
}
function df(t, e, n, r, i, o, s, l) {
  var a = [], c = 0, u = 0, f = !1, d = function() {
    f && !a.length && !c && e.complete();
  }, h = function(g) {
    return c < r ? m(g) : a.push(g);
  }, m = function(g) {
    o && e.next(g), c++;
    var v = !1;
    qe(n(g, u++)).subscribe(ge(e, function(x) {
      i == null || i(x), o ? h(x) : e.next(x);
    }, function() {
      v = !0;
    }, void 0, function() {
      if (v)
        try {
          c--;
          for (var x = function() {
            var y = a.shift();
            s ? it(e, s, function() {
              return m(y);
            }) : m(y);
          }; a.length && c < r; )
            x();
          d();
        } catch (y) {
          e.error(y);
        }
    }));
  };
  return t.subscribe(ge(e, h, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function ea(t, e, n) {
  return n === void 0 && (n = 1 / 0), oe(e) ? ea(function(r, i) {
    return ln(function(o, s) {
      return e(r, o, i, s);
    })(qe(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), xe(function(r, i) {
    return df(r, i, t, n);
  }));
}
function hf(t) {
  return t === void 0 && (t = 1 / 0), ea(mn, t);
}
function pf() {
  return hf(1);
}
function gf() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return pf()(Mt(t, Ji(t)));
}
function ta(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = Uu);
  var r = -1;
  return e != null && (Hl(e) ? n = e : r = e), new $e(function(i) {
    var o = Zu(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function Tn(t, e) {
  return xe(function(n, r) {
    var i = 0;
    n.subscribe(ge(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function mf(t) {
  return xe(function(e, n) {
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
    e.subscribe(ge(n, function(c) {
      r = !0, i = c, o || qe(t(c)).subscribe(o = ge(n, l, a));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function vf(t, e) {
  return e === void 0 && (e = Tr), mf(function() {
    return ta(t, e);
  });
}
function na(t) {
  return xe(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(ge(n, void 0, void 0, function(s) {
      o = qe(t(s, na(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function _f(t, e) {
  return e === void 0 && (e = Tr), xe(function(n, r) {
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
    n.subscribe(ge(r, function(c) {
      o = c, s = e.now(), i || (i = e.schedule(a, t), r.add(i));
    }, function() {
      l(), r.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function bf(t) {
  return t <= 0 ? function() {
    return Mu;
  } : xe(function(e, n) {
    var r = 0;
    e.subscribe(ge(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function yf(t) {
  return ln(function() {
    return t;
  });
}
function wf(t, e) {
  return e === void 0 && (e = mn), t = t ?? Sf, xe(function(n, r) {
    var i, o = !0;
    n.subscribe(ge(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function Sf(t, e) {
  return t === e;
}
function Ef(t, e) {
  return wf(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function Cf(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new ke();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, a = l === void 0 ? !0 : l;
  return function(c) {
    var u, f, d, h = 0, m = !1, g = !1, v = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, x = function() {
      v(), u = d = void 0, m = g = !1;
    }, y = function() {
      var _ = u;
      x(), _ == null || _.unsubscribe();
    };
    return xe(function(_, b) {
      h++, !g && !m && v();
      var p = d = d ?? n();
      b.add(function() {
        h--, h === 0 && !g && !m && (f = Qr(y, a));
      }), p.subscribe(b), !u && h > 0 && (u = new sn({
        next: function(w) {
          return p.next(w);
        },
        error: function(w) {
          g = !0, v(), f = Qr(x, i, w), p.error(w);
        },
        complete: function() {
          m = !0, v(), f = Qr(x, s), p.complete();
        }
      }), qe(_).subscribe(u));
    })(c);
  };
}
function Qr(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new sn({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, bt([], _t(n))).subscribe(i);
  }
}
function kf(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, Cf({
    connector: function() {
      return new Ml(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function $f(t) {
  return Tn(function(e, n) {
    return t <= n;
  });
}
function ra(t, e) {
  return xe(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(ge(r, function(a) {
      i == null || i.unsubscribe();
      var c = 0, u = o++;
      qe(t(a, u)).subscribe(i = ge(r, function(f) {
        return r.next(e ? e(a, f, u, c++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function ot(t) {
  return xe(function(e, n) {
    qe(t).subscribe(ge(n, function() {
      return n.complete();
    }, bi)), !n.closed && e.subscribe(n);
  });
}
function Af(t, e, n) {
  var r = oe(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? xe(function(i, o) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var l = !0;
    i.subscribe(ge(o, function(a) {
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
  }) : mn;
}
var ia = {
  leading: !0,
  trailing: !1
};
function Tf(t, e) {
  return e === void 0 && (e = ia), xe(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, a = null, c = !1, u = function() {
      a == null || a.unsubscribe(), a = null, o && (h(), c && r.complete());
    }, f = function() {
      a = null, c && r.complete();
    }, d = function(m) {
      return a = qe(t(m)).subscribe(ge(r, u, f));
    }, h = function() {
      if (s) {
        s = !1;
        var m = l;
        l = null, r.next(m), !c && d(m);
      }
    };
    n.subscribe(ge(r, function(m) {
      s = !0, l = m, !(a && !a.closed) && (i ? h() : d(m));
    }, function() {
      c = !0, !(o && s && a && !a.closed) && r.complete();
    }));
  });
}
function xf(t, e, n) {
  e === void 0 && (e = Tr), n === void 0 && (n = ia);
  var r = ta(t, e);
  return Tf(function() {
    return r;
  }, n);
}
class fr {
  static isPromise(e) {
    return e && typeof e.then == "function";
  }
}
function xn(t) {
  return fr.isPromise(t) ? t : Xi(t) ? Ot(t) : Promise.resolve(t);
}
var Zo = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class vn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, fr.isPromise(n) ? n.then((r) => this.accessToken = r) : this.accessToken = n;
  }
  getAuthorizationHeader() {
    return Zo(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield xn(this.accessToken)}`
      };
    });
  }
  getAccessTokenAsPromise() {
    return Xi(this.accessToken) ? Ot(this.accessToken) : fr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
  getStructureUrl() {
    return Zo(this, void 0, void 0, function* () {
      const e = yield xn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Structure}`;
    });
  }
  static requestHttpConfig(e) {
    return Ee.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
}
var et = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class Dt extends vn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return et(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return et(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield Ee.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return et(this, void 0, void 0, function* () {
      const o = `${yield this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), a = yield Ee.post(o, s, { headers: l });
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
    return et(this, void 0, void 0, function* () {
      const n = yield this.queryConfiguration(G.Group, { Id: { $in: e } });
      return e.map((r) => {
        var i, o;
        return (o = (i = n.data.find((s) => s.Id === r)) === null || i === void 0 ? void 0 : i.Name) !== null && o !== void 0 ? o : r;
      }).join("/");
    });
  }
  uploadProcessImage(e, n, r = "process-image.svg") {
    return et(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(G.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield Ee.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return et(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return Ee.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return et(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`, i = yield this.getAuthorizationHeader();
      return Ee.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return et(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return Ee.delete(r, { headers: i }).then();
    });
  }
  _createBaseUrlByType(e) {
    return et(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${Ka[e]}`;
    });
  }
}
var Zr = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class Pn extends vn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return Zr(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield Ee.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return Zr(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield Ee.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return Zr(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield Ee.get(n, { headers: r })).data;
    });
  }
}
var ei = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class In {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, n, r = !1, i) {
    return ei(this, void 0, void 0, function* () {
      const o = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let s = yield this.resolvePathName(o.Path.splice(i ? o.Path.length - i : 0, o.Path.length));
      return r && (s = s + "/" + o.Name.Value), s;
    });
  }
  resolvePathName(e) {
    return ei(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Ot(Zl(e.map((n) => this.resolveName(G.Group, n))).pipe(ln((n) => n.join(" / "))));
    });
  }
  resolveName(e, n) {
    return ei(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = Mt(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(ln((r) => r.Name.Value), kf(1), na(() => Kt(n)))), Ot(this._nameCache[n]);
    });
  }
}
var Pf = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class $m extends vn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Pf(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield Ee.get(`${yield this.getStructureUrl()}/userprofile`, {
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
var es = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class yi extends vn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return es(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield Ee.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return es(this, void 0, void 0, function* () {
      const e = yield xn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Driver}`;
    });
  }
}
class an extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(e, n) {
    const r = new.target.prototype;
    super(`${e}: Status code '${n}'`), this.statusCode = n, this.__proto__ = r;
  }
}
class Ki extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Rn extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class If extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
   */
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.transport = n, this.errorType = "UnsupportedTransportError", this.__proto__ = r;
  }
}
class Rf extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
   */
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.transport = n, this.errorType = "DisabledTransportError", this.__proto__ = r;
  }
}
class Of extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
   */
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.transport = n, this.errorType = "FailedToStartTransportError", this.__proto__ = r;
  }
}
class Df extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class Nf extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(e, n) {
    const r = new.target.prototype;
    super(e), this.innerErrors = n, this.__proto__ = r;
  }
}
class oa {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class Yi {
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
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(e) {
    return "";
  }
}
var C;
(function(t) {
  t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
})(C || (C = {}));
class On {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
On.instance = new On();
const Uf = "6.0.8";
class pe {
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
class be {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return typeof window == "object" && typeof window.document == "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return typeof self == "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return typeof window == "object" && typeof window.document > "u";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
  }
}
function Dn(t, e) {
  let n = "";
  return Qi(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Mf(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Mf(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    const i = r < 16 ? "0" : "";
    n += `0x${i}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function Qi(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function sa(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [a, c] = cn();
  l[a] = c, t.log(C.Trace, `(${e} transport) sending data. ${Dn(o, s.logMessageContent)}.`);
  const u = Qi(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(C.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function Hf(t) {
  return t === void 0 ? new dr(C.Information) : t === null ? On.instance : t.log !== void 0 ? t : new dr(t);
}
class jf {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class dr {
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
function cn() {
  let t = "X-SignalR-User-Agent";
  return be.isNode && (t = "User-Agent"), [t, Lf(Uf, Ff(), Bf(), zf())];
}
function Lf(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Ff() {
  if (be.isNode)
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
function zf() {
  if (be.isNode)
    return process.versions.node;
}
function Bf() {
  return be.isNode ? "NodeJS" : "Browser";
}
function ts(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Wf() {
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
class Vf extends Yi {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Wf());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new Rn();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new Rn();
    });
    let i = null;
    if (e.timeout) {
      const a = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(C.Warning, "Timeout from HTTP request."), r = new Ki();
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
      const a = await ns(o, "text");
      throw new an(a || o.statusText, o.status);
    }
    const l = await ns(o, e.responseType);
    return new oa(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return be.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function ns(t, e) {
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
class qf extends Yi {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Rn()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new Rn());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new oa(i.status, i.statusText, i.response || i.responseText)) : r(new an(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(C.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new an(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(C.Warning, "Timeout from HTTP request."), r(new Ki());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class Gf extends Yi {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || be.isNode)
      this._httpClient = new Vf(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new qf(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Rn()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class Me {
  static write(e) {
    return `${e}${Me.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== Me.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(Me.RecordSeparator);
    return n.pop(), n;
  }
}
Me.RecordSeparatorCode = 30;
Me.RecordSeparator = String.fromCharCode(Me.RecordSeparatorCode);
class Jf {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return Me.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (Qi(e)) {
      const l = new Uint8Array(e), a = l.indexOf(Me.RecordSeparatorCode);
      if (a === -1)
        throw new Error("Message is incomplete.");
      const c = a + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(l.slice(0, c))), r = l.byteLength > c ? l.slice(c).buffer : null;
    } else {
      const l = e, a = l.indexOf(Me.RecordSeparator);
      if (a === -1)
        throw new Error("Message is incomplete.");
      const c = a + 1;
      n = l.substring(0, c), r = l.length > c ? l.substring(c) : null;
    }
    const i = Me.parse(n), o = JSON.parse(i[0]);
    if (o.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, o];
  }
}
var Q;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(Q || (Q = {}));
class Xf {
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
    return this.observers.push(e), new jf(this, e);
  }
}
const Kf = 30 * 1e3, Yf = 15 * 1e3;
var re;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(re || (re = {}));
class Zi {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(C.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, pe.isRequired(e, "connection"), pe.isRequired(n, "logger"), pe.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = Kf, this.keepAliveIntervalInMilliseconds = Yf, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new Jf(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = re.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: Q.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, r, i) {
    return new Zi(e, n, r, i);
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(e) {
    if (this._connectionState !== re.Disconnected && this._connectionState !== re.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== re.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = re.Connecting, this._logger.log(C.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), be.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = re.Connected, this._connectionStarted = !0, this._logger.log(C.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = re.Disconnected, this._logger.log(C.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const e = this._startPromise;
    this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    return this._connectionState === re.Disconnected ? (this._logger.log(C.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === re.Disconnecting ? (this._logger.log(C.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = re.Disconnecting, this._logger.log(C.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(C.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(e, ...n) {
    const [r, i] = this._replaceStreamingParams(n), o = this._createStreamInvocation(e, n, i);
    let s;
    const l = new Xf();
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
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(e) {
    return this._sendMessage(this._protocol.writeMessage(e));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(e, ...n) {
    const [r, i] = this._replaceStreamingParams(n), o = this._sendWithProtocol(this._createInvocation(e, n, !0, i));
    return this._launchStreams(r, o), o;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(e, ...n) {
    const [r, i] = this._replaceStreamingParams(n), o = this._createInvocation(e, n, !1, i);
    return new Promise((l, a) => {
      this._callbacks[o.invocationId] = (u, f) => {
        if (f) {
          a(f);
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
  /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
   *
   * @param {string} methodName The name of the hub method to define.
   * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
   */
  on(e, n) {
    !e || !n || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(n) === -1 && this._methods[e].push(n));
  }
  off(e, n) {
    if (!e)
      return;
    e = e.toLowerCase();
    const r = this._methods[e];
    if (r)
      if (n) {
        const i = r.indexOf(n);
        i !== -1 && (r.splice(i, 1), r.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
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
                this._logger.log(C.Error, `Stream callback threw error: ${ts(o)}`);
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
        if (this._connectionState === re.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, e);
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
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
    this._logger.log(C.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === re.Disconnecting ? this._completeClose(e) : this._connectionState === re.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === re.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = re.Disconnected, this._connectionStarted = !1, be.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
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
    if (this._connectionState = re.Reconnecting, e ? this._logger.log(C.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(C.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(C.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== re.Reconnecting) {
        this._logger.log(C.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(C.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== re.Reconnecting) {
        this._logger.log(C.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = re.Connected, this._logger.log(C.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(C.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(C.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== re.Reconnecting) {
          this._logger.log(C.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === re.Disconnecting && this._completeClose();
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
        this._logger.log(C.Error, `Stream 'error' callback called with '${e}' threw error: ${ts(o)}`);
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
const Qf = [0, 2e3, 1e4, 3e4, null];
class rs {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : Qf;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class xt {
}
xt.Authorization = "Authorization";
xt.Cookie = "Cookie";
var fe;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(fe || (fe = {}));
var Ce;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(Ce || (Ce = {}));
let Zf = class {
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
};
class is {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new Zf(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (pe.isRequired(e, "url"), pe.isRequired(n, "transferFormat"), pe.isIn(n, Ce, "transferFormat"), this._url = e, this._logger.log(C.Trace, "(LongPolling transport) Connecting."), n === Ce.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = cn(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === Ce.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const a = `${e}&_=${Date.now()}`;
    this._logger.log(C.Trace, `(LongPolling transport) polling: ${a}.`);
    const c = await this._httpClient.get(a, s);
    c.statusCode !== 200 ? (this._logger.log(C.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new an(c.statusText || "", c.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[xt.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[xt.Authorization] && delete e.headers[xt.Authorization];
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
          o.statusCode === 204 ? (this._logger.log(C.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(C.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new an(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(C.Trace, `(LongPolling transport) data received. ${Dn(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(C.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof Ki ? this._logger.log(C.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(C.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(C.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? sa(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(C.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(C.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = cn();
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
class ed {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (pe.isRequired(e, "url"), pe.isRequired(n, "transferFormat"), pe.isIn(n, Ce, "transferFormat"), this._logger.log(C.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== Ce.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (be.isBrowser || be.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), a = {};
        a.Cookie = l;
        const [c, u] = cn();
        a[c] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...a, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(C.Trace, `(SSE transport) data received. ${Dn(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
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
    return this._eventSource ? sa(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class td {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (pe.isRequired(e, "url"), pe.isRequired(n, "transferFormat"), pe.isIn(n, Ce, "transferFormat"), this._logger.log(C.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (be.isNode) {
        const a = {}, [c, u] = cn();
        a[c] = u, s && (a[xt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...a, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === Ce.Binary && (o.binaryType = "arraybuffer"), o.onopen = (a) => {
        this._logger.log(C.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (a) => {
        let c = null;
        typeof ErrorEvent < "u" && a instanceof ErrorEvent ? c = a.error : c = "There was an error with the transport", this._logger.log(C.Information, `(WebSockets transport) ${c}.`);
      }, o.onmessage = (a) => {
        if (this._logger.log(C.Trace, `(WebSockets transport) data received. ${Dn(a.data, this._logMessageContent)}.`), this.onreceive)
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
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(C.Trace, `(WebSockets transport) sending data. ${Dn(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
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
const os = 100;
class nd {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, pe.isRequired(e, "url"), this._logger = Hf(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (be.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !be.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : be.isNode && !n.WebSocket && r && (n.WebSocket = r), !be.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : be.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new Gf(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || Ce.Binary, pe.isIn(e, Ce, "transferFormat"), this._logger.log(C.Debug, `Starting connection with transfer format '${Ce[e]}'.`), this._connectionState !== "Disconnected")
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
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new eo(this.transport)), this._sendQueue.send(e));
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
        if (this._options.transport === fe.WebSockets)
          this.transport = this._constructTransport(fe.WebSockets), await this._startTransport(n, e);
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
        } while (r.url && i < os);
        if (i === os && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof is && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(C.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(C.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[xt.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = cn();
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
      return s instanceof an && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(C.Error, l), Promise.reject(new Df(l));
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
          } catch (f) {
            return Promise.reject(f);
          }
          o = this._createConnectUrl(e, a.connectionToken);
        }
        try {
          await this._startTransport(o, i), this.connectionId = a.connectionId;
          return;
        } catch (f) {
          if (this._logger.log(C.Error, `Failed to start the transport '${c.transport}': ${f}`), a = void 0, s.push(new Of(`${c.transport} failed: ${f}`, fe[c.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(C.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new Nf(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case fe.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new td(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case fe.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new ed(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case fe.LongPolling:
        return new is(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = fe[e.transport];
    if (i == null)
      return this._logger.log(C.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (rd(n, i))
      if (e.transferFormats.map((s) => Ce[s]).indexOf(r) >= 0) {
        if (i === fe.WebSockets && !this._options.WebSocket || i === fe.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(C.Debug, `Skipping transport '${fe[i]}' because it is not supported in your environment.'`), new If(`'${fe[i]}' is not supported in your environment.`, i);
        this._logger.log(C.Debug, `Selecting transport '${fe[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(C.Debug, `Skipping transport '${fe[i]}' because it does not support the requested transfer format '${Ce[r]}'.`), new Error(`'${fe[i]}' does not support ${Ce[r]}.`);
    else
      return this._logger.log(C.Debug, `Skipping transport '${fe[i]}' because it was disabled by the client.`), new Rf(`'${fe[i]}' is disabled by the client.`, i);
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
    if (!be.isBrowser)
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
function rd(t, e) {
  return !t || (e & t) !== 0;
}
class eo {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Wn(), this._transportResult = new Wn(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new Wn()), this._transportResult.promise;
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
      this._sendBufferedData = new Wn();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : eo._concatBuffers(this._buffer);
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
class Wn {
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
const id = "json";
class od {
  constructor() {
    this.name = id, this.version = 1, this.transferFormat = Ce.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(e, n) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    n === null && (n = On.instance);
    const r = Me.parse(e), i = [];
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
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(e) {
    return Me.write(JSON.stringify(e));
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
const sd = {
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
function ld(t) {
  const e = sd[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class ad {
  configureLogging(e) {
    if (pe.isRequired(e, "logging"), cd(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = ld(e);
      this.logger = new dr(n);
    } else
      this.logger = new dr(e);
    return this;
  }
  withUrl(e, n) {
    return pe.isRequired(e, "url"), pe.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return pe.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new rs(e) : this.reconnectPolicy = e : this.reconnectPolicy = new rs(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new nd(this.url, e);
    return Zi.create(n, this.logger || On.instance, this.protocol || new od(), this.reconnectPolicy);
  }
}
function cd(t) {
  return t.log !== void 0;
}
var ud = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, $n;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})($n || ($n = {}));
var ss;
(function(t) {
  t.Send = "Send";
})(ss || (ss = {}));
var ls;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC";
})(ls || (ls = {}));
class wi {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new ke(), this._connectionEstablished = new qi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new ke(), this._subscribeRequested = new ke(), this._handleSubscriptionQueue();
  }
  connect() {
    return ud(this, void 0, void 0, function* () {
      const e = yield xn(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Ot(this._connectionEstablished.pipe(Tn((n) => n), yf(null)));
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
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(ln((o) => o.filter((s) => e.includes(s.identifier))), Tn((o) => o.length > 0));
    return r.length > 0 ? gf(Kt(r), i) : i;
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(ot(this._unsub), vf(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage($n.SubscribeMany, e), this._subscribedIds.push(...e);
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
      this._sendMessage($n.ChangeModeAsync, !0), this._sendMessage($n.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new ad().withUrl(e, {
      accessTokenFactory: () => this.getAccessTokenAsPromise()
    }).build();
  }
  getAccessTokenAsPromise() {
    return Xi(this.accessToken) ? Ot(this.accessToken) : fr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
}
var yn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class as extends vn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield Ee.post(`${n}value/manyflat`, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return Ee.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return Ee.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return Ee.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getHistorianUrl() {
    return yn(this, void 0, void 0, function* () {
      const e = yield xn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Historian}`;
    });
  }
}
var Si;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(Si || (Si = {}));
const Pe = Si;
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
var Ei = function(t, e) {
  return Ei = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Ei(t, e);
};
function to(t, e) {
  Ei(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function fd(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(l, a);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function dd(t, e) {
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
function Vn(t) {
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
function hr(t, e) {
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
function $t() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(hr(arguments[e]));
  return t;
}
function la(t) {
  return !!t.useClass;
}
function Ci(t) {
  return !!t.useFactory;
}
var aa = function() {
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
        return l.apply(void 0, $t(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function zt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function hd(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function cs(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function pd(t) {
  return typeof t == "function" || t instanceof aa;
}
function nr(t) {
  return !!t.useToken;
}
function rr(t) {
  return t.useValue != null;
}
function gd(t) {
  return la(t) || rr(t) || nr(t) || Ci(t);
}
var no = function() {
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
}(), md = function(t) {
  to(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(no), us = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function vd(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function _d(t, e, n) {
  return n === void 0 && (n = "    "), $t([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function bd(t, e, n) {
  var r = hr(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = vd(o, e);
  return _d("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function yd(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var wd = function(t) {
  to(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(no), Sd = function(t) {
  to(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(no), Ed = function() {
  function t() {
    this.preResolution = new wd(), this.postResolution = new Sd();
  }
  return t;
}(), Cd = /* @__PURE__ */ new Map(), kd = function() {
  function t(e) {
    this.parent = e, this._registry = new md(), this.interceptors = new Ed(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Pe.Transient }), this.ensureNotDisposed();
    var i;
    if (gd(n) ? i = n : i = { useClass: n }, nr(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + $t(o, [l]).join(" -> "));
        o.push(l);
        var a = this._registry.get(l);
        a && nr(a.provider) ? s = a.provider : s = null;
      }
    if ((r.lifecycle === Pe.Singleton || r.lifecycle == Pe.ContainerScoped || r.lifecycle == Pe.ResolutionScoped) && (rr(i) || Ci(i)))
      throw new Error('Cannot use lifecycle "' + Pe[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: i, options: r }), this;
  }, t.prototype.registerType = function(e, n) {
    return this.ensureNotDisposed(), zt(n) ? this.register(e, {
      useToken: n
    }) : this.register(e, {
      useClass: n
    });
  }, t.prototype.registerInstance = function(e, n) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: n
    });
  }, t.prototype.registerSingleton = function(e, n) {
    if (this.ensureNotDisposed(), zt(e)) {
      if (zt(n))
        return this.register(e, {
          useToken: n
        }, { lifecycle: Pe.Singleton });
      if (n)
        return this.register(e, {
          useClass: n
        }, { lifecycle: Pe.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return n && !zt(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Pe.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new us()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && zt(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (pd(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = Vn(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
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
        for (var l = Vn(this.interceptors.postResolution.getAll(e)), a = l.next(); !a.done; a = l.next()) {
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
    if (this.ensureNotDisposed(), e.options.lifecycle === Pe.ResolutionScoped && n.scopedResolutions.has(e))
      return n.scopedResolutions.get(e);
    var r = e.options.lifecycle === Pe.Singleton, i = e.options.lifecycle === Pe.ContainerScoped, o = r || i, s;
    return rr(e.provider) ? s = e.provider.useValue : nr(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : la(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : Ci(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Pe.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new us()), this.ensureNotDisposed();
    var i = this.getAllRegistrations(e);
    if (!i && zt(e))
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
      for (var r = Vn(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = hr(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(a) {
          return !rr(a.provider);
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
      for (var i = Vn(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = hr(o.value, 2), l = s[0], a = s[1];
        a.some(function(c) {
          var u = c.options;
          return u.lifecycle === Pe.ContainerScoped;
        }) && r._registry.setAll(l, a.map(function(c) {
          return c.options.lifecycle === Pe.ContainerScoped ? {
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
    return fd(this, void 0, void 0, function() {
      var e;
      return dd(this, function(n) {
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
    if (e instanceof aa)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = Cd.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, $t([void 0], s)))();
    }();
    return yd(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, a;
      try {
        return hd(i) ? cs(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, $t([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, $t([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : cs(i) ? (a = r.resolve(i.transform, e)).transform.apply(a, $t([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (c) {
        throw new Error(bd(n, o, c));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), ca = new kd();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function J() {
}
function $d(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Ad(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function ua(t) {
  return t();
}
function fs() {
  return /* @__PURE__ */ Object.create(null);
}
function lt(t) {
  t.forEach(ua);
}
function fa(t) {
  return typeof t == "function";
}
function le(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Td(t) {
  return Object.keys(t).length === 0;
}
function Fe(t, e, n, r) {
  if (t) {
    const i = da(t, e, n, r);
    return t[0](i);
  }
}
function da(t, e, n, r) {
  return t[1] && r ? $d(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function ze(t, e, n, r) {
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
function Be(t, e, n, r, i, o) {
  if (i) {
    const s = da(e, n, r, o);
    t.p(s, i);
  }
}
function We(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function ne(t) {
  return t ?? "";
}
function T(t, e) {
  t.appendChild(e);
}
function Ht(t, e, n) {
  const r = xd(t);
  if (!r.getElementById(e)) {
    const i = I("style");
    i.id = e, i.textContent = n, Pd(r, i);
  }
}
function xd(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Pd(t, e) {
  return T(t.head || t, e), e.sheet;
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function yt(t, e) {
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
function xr() {
  return j("");
}
function ie(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function S(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Id(t) {
  return Array.from(t.childNodes);
}
function ye(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function pr(t, e) {
  t.value = e ?? "";
}
function ki(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Rd(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Nn;
function rt(t) {
  Nn = t;
}
function jt() {
  if (!Nn)
    throw new Error("Function called outside component initialization");
  return Nn;
}
function ha(t) {
  jt().$$.on_mount.push(t);
}
function Od(t) {
  jt().$$.after_update.push(t);
}
function wt(t) {
  jt().$$.on_destroy.push(t);
}
function He() {
  const t = jt();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Rd(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ht(t, e) {
  return jt().$$.context.set(t, e), e;
}
function Oe(t) {
  return jt().$$.context.get(t);
}
const Gt = [], ue = [];
let Yt = [];
const $i = [], Dd = /* @__PURE__ */ Promise.resolve();
let Ai = !1;
function Nd() {
  Ai || (Ai = !0, Dd.then(ro));
}
function Ti(t) {
  Yt.push(t);
}
function Qt(t) {
  $i.push(t);
}
const ti = /* @__PURE__ */ new Set();
let Bt = 0;
function ro() {
  if (Bt !== 0)
    return;
  const t = Nn;
  do {
    try {
      for (; Bt < Gt.length; ) {
        const e = Gt[Bt];
        Bt++, rt(e), Ud(e.$$);
      }
    } catch (e) {
      throw Gt.length = 0, Bt = 0, e;
    }
    for (rt(null), Gt.length = 0, Bt = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < Yt.length; e += 1) {
      const n = Yt[e];
      ti.has(n) || (ti.add(n), n());
    }
    Yt.length = 0;
  } while (Gt.length);
  for (; $i.length; )
    $i.pop()();
  Ai = !1, ti.clear(), rt(t);
}
function Ud(t) {
  if (t.fragment !== null) {
    t.update(), lt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ti);
  }
}
function Md(t) {
  const e = [], n = [];
  Yt.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Yt = e;
}
const ir = /* @__PURE__ */ new Set();
let Tt;
function me() {
  Tt = {
    r: 0,
    c: [],
    p: Tt
    // parent group
  };
}
function ve() {
  Tt.r || lt(Tt.c), Tt = Tt.p;
}
function A(t, e) {
  t && t.i && (ir.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (ir.has(t))
      return;
    ir.add(t), Tt.c.push(() => {
      ir.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function gr(t, e) {
  const n = e.token = {};
  function r(i, o, s, l) {
    if (e.token !== n)
      return;
    e.resolved = l;
    let a = e.ctx;
    s !== void 0 && (a = a.slice(), a[s] = l);
    const c = i && (e.current = i)(a);
    let u = !1;
    e.block && (e.blocks ? e.blocks.forEach((f, d) => {
      d !== o && f && (me(), P(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), ve());
    }) : e.block.d(1), c.c(), A(c, 1), c.m(e.mount(), e.anchor), u = !0), e.block = c, e.blocks && (e.blocks[o] = c), u && ro();
  }
  if (Ad(t)) {
    const i = jt();
    if (t.then((o) => {
      rt(i), r(e.then, 1, e.value, o), rt(null);
    }, (o) => {
      if (rt(i), r(e.catch, 2, e.error, o), rt(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function pa(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function Zt(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function B(t) {
  t && t.c();
}
function L(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || Ti(() => {
    const s = t.$$.on_mount.map(ua).filter(fa);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : lt(s), t.$$.on_mount = [];
  }), o.forEach(Ti);
}
function F(t, e) {
  const n = t.$$;
  n.fragment !== null && (Md(n.after_update), lt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Hd(t, e) {
  t.$$.dirty[0] === -1 && (Gt.push(t), Nd(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ae(t, e, n, r, i, o, s, l = [-1]) {
  const a = Nn;
  rt(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: J,
    not_equal: i,
    bound: fs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: fs(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return c.ctx && i(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && Hd(t, f)), d;
  }) : [], c.update(), u = !0, lt(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Id(e.target);
      c.fragment && c.fragment.l(f), f.forEach(R);
    } else
      c.fragment && c.fragment.c();
    e.intro && A(t.$$.fragment), L(t, e.target, e.anchor, e.customElement), ro();
  }
  rt(a);
}
class ce {
  $destroy() {
    F(this, 1), this.$destroy = J;
  }
  $on(e, n) {
    if (!fa(n))
      return J;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Td(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const jd = {
  [Pn.toString()]: "TenantHttpService",
  [yi.toString()]: "DataSourceHttpService",
  [Dt.toString()]: "EntityHttpService",
  [In.toString()]: "EntityNameService",
  [vn.toString()]: "BaseHttpService",
  [wi.toString()]: "LiveValueService"
};
function Te(t, e = null) {
  let n = jd[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? ca;
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
function ft(t, e, n = !0) {
  const r = window.dependencyContainer ?? ca;
  try {
    if (r.isRegistered(t) && !n)
      return;
    r.registerInstance(t, e);
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
const ga = new qi(!1), Ld = ga.asObservable().pipe(Tn((t) => !t), bf(1)), ds = {}, oo = /* @__PURE__ */ new Map(), so = new ke();
so.asObservable();
function Fd(t) {
  oo.set(t.name, t), so.next({
    type: "add",
    store: t
  });
}
function zd(t) {
  oo.delete(t.name), so.next({
    type: "remove",
    store: t
  });
}
function Bd() {
  return oo;
}
class lo extends qi {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Fd(this);
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
    ds.preStoreUpdate && (r = ds.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, ga.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Ld.subscribe(() => {
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
    return new $e((i) => {
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
    zd(this), this.reset();
  }
  next(e) {
    this.update(() => e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  complete() {
  }
}
function Wd(t, ...e) {
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
function Vd(t, e) {
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
      initialized$: Kt(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new Ml(1), l = Mt(o.getItem(i.key)).subscribe((c) => {
    c && t.update((u) => i.preStoreInit(Object.assign({}, u, c))), s.next(!0), s.complete();
  }), a = i.source(t).pipe($f(1), ra((c) => o.setItem(i.key, c))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      a.unsubscribe(), l.unsubscribe();
    }
  };
}
function qd(t) {
  if (t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return Kt(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), Kt(!0);
      },
      removeItem(e) {
        return t.removeItem(e), Kt(!0);
      }
    };
}
const Gd = qd(typeof localStorage < "u" ? localStorage : void 0), Wt = [];
function mr(t, e = J) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (le(t, l) && (t = l, n)) {
      const a = !Wt.length;
      for (const c of r)
        c[1](), Wt.push(c, t);
      if (a) {
        for (let c = 0; c < Wt.length; c += 2)
          Wt[c][0](Wt[c + 1]);
        Wt.length = 0;
      }
    }
  }
  function o(l) {
    i(l(t));
  }
  function s(l, a = J) {
    const c = [l, a];
    return r.add(c), r.size === 1 && (n = e(i) || J), l(t), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
const hs = mr(G.Signal), { config: Jd, state: Xd } = io(
  ao({
    queryWithSubGroups: !0,
    selectedTenant: null
  })
), Pt = Wd({ name: "entity-select-selection" }, ao({
  selectedEntities: []
})), It = new lo({ state: Xd, config: Jd, name: "entity-select-global" });
Vd(It, {
  key: "entity-select-global",
  storage: Gd
});
const un = (t) => {
  const e = Bd().get(`entity-select-type-${hs}`);
  if (e)
    return e;
  const { state: n, config: r } = io(
    ao({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new lo({ state: n, config: r, name: `entity-select-type-${hs}` });
};
function ps(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function Kd(t) {
  let e;
  return {
    c() {
      e = I("div"), S(
        e,
        "class",
        /*tw*/
        t[5]`p-[10px]`
      );
    },
    m(n, r) {
      O(n, e, r);
    },
    p: J,
    d(n) {
      n && R(e);
    }
  };
}
function Yd(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? Zd : Qd
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = I("div"), i.c(), S(
        e,
        "class",
        /*tw*/
        t[5]`flex items-center`
      );
    },
    m(o, s) {
      O(o, e, s), i.m(e, null);
    },
    p(o, s) {
      r === (r = n(o)) && i ? i.p(o, s) : (i.d(1), i = r(o), i && (i.c(), i.m(e, null)));
    },
    d(o) {
      o && R(e), i.d();
    }
  };
}
function Qd(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("span"), n = j("chevron_right"), S(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), T(e, n), r || (i = ie(
        e,
        "click",
        /*click_handler_1*/
        t[9]
      ), r = !0);
    },
    p: J,
    d(o) {
      o && R(e), r = !1, i();
    }
  };
}
function Zd(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("span"), n = j("expand_more"), S(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), T(e, n), r || (i = ie(
        e,
        "click",
        /*click_handler*/
        t[8]
      ), r = !0);
    },
    p: J,
    d(o) {
      o && R(e), r = !1, i();
    }
  };
}
function gs(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let c = 0; c < s.length; c += 1)
    l[c] = ms(ps(t, s, c));
  const a = (c) => P(l[c], 1, 1, () => {
    l[c] = null;
  });
  return {
    c() {
      e = I("div"), n = I("div"), r = U(), i = I("div");
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      S(
        n,
        "class",
        /*tw*/
        t[5]`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`
      ), S(
        i,
        "class",
        /*tw*/
        t[5]`w-full`
      ), S(
        e,
        "class",
        /*tw*/
        t[5]`flex w-full`
      );
    },
    m(c, u) {
      O(c, e, u), T(e, n), T(e, r), T(e, i);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, null);
      o = !0;
    },
    p(c, u) {
      if (u & /*children, level, entityType*/
      28) {
        s = /*children*/
        c[4];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const d = ps(c, s, f);
          l[f] ? (l[f].p(d, u), A(l[f], 1)) : (l[f] = ms(d), l[f].c(), A(l[f], 1), l[f].m(i, null));
        }
        for (me(), f = s.length; f < l.length; f += 1)
          a(f);
        ve();
      }
    },
    i(c) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          A(l[u]);
        o = !0;
      }
    },
    o(c) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        P(l[u]);
      o = !1;
    },
    d(c) {
      c && R(e), yt(l, c);
    }
  };
}
function ms(t) {
  let e, n;
  return e = new ma({
    props: {
      group: (
        /*child*/
        t[16]
      ),
      level: (
        /*level*/
        t[2] + 1
      ),
      entityType: (
        /*entityType*/
        t[3]
      )
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*children*/
      16 && (o.group = /*child*/
      r[16]), i & /*level*/
      4 && (o.level = /*level*/
      r[2] + 1), i & /*entityType*/
      8 && (o.entityType = /*entityType*/
      r[3]), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function eh(t) {
  var x, y;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((y = (x = t[1]) == null ? void 0 : x.Name) == null ? void 0 : y.Value) + ""
  ), a, c, u, f, d;
  function h(_, b) {
    return (
      /*children*/
      _[4].length > 0 ? Yd : Kd
    );
  }
  let m = h(t), g = m(t), v = (
    /*expanded*/
    t[0] && gs(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), r = I("div"), i = U(), g.c(), o = U(), s = I("div"), a = j(l), c = U(), v && v.c(), S(
        s,
        "class",
        /*tw*/
        t[5]`overflow-hidden whitespace-nowrap text-ellipsis w-full`
      ), S(
        n,
        "class",
        /*tw*/
        t[5]`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`
      ), S(
        e,
        "class",
        /*tw*/
        t[5]`group cursor-pointer`
      );
    },
    m(_, b) {
      O(_, e, b), T(e, n), T(n, r), T(n, i), g.m(n, null), T(n, o), T(n, s), T(s, a), T(e, c), v && v.m(e, null), u = !0, f || (d = ie(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), f = !0);
    },
    p(_, [b]) {
      var p, w;
      m === (m = h(_)) && g ? g.p(_, b) : (g.d(1), g = m(_), g && (g.c(), g.m(n, o))), (!u || b & /*group*/
      2) && l !== (l = /*group*/
      ((w = (p = _[1]) == null ? void 0 : p.Name) == null ? void 0 : w.Value) + "") && ye(a, l), /*expanded*/
      _[0] ? v ? (v.p(_, b), b & /*expanded*/
      1 && A(v, 1)) : (v = gs(_), v.c(), A(v, 1), v.m(e, null)) : v && (me(), P(v, 1, 1, () => {
        v = null;
      }), ve());
    },
    i(_) {
      u || (A(v), u = !0);
    },
    o(_) {
      P(v), u = !1;
    },
    d(_) {
      _ && R(e), g.d(), v && v.d(), f = !1, d();
    }
  };
}
function th(t, e, n) {
  const r = Te(Dt);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, a = Oe("tw"), c = [], u = new ke(), f = un();
  f.pipe(ot(u), Ef("selectedGroup")).subscribe((y) => {
    var _, b;
    (_ = y.selectedGroup) == null || _.Id, i == null || i.Id, i && ((b = y.selectedGroup) != null && b.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, c = await (await r.queryConfiguration(G.Group, { GroupId: i.Id })).data);
    } catch (y) {
      console.error(y);
    }
  }
  function h() {
    n(0, o = !o);
  }
  function m() {
    f.update((y) => ({ ...y, selectedGroup: i }));
  }
  wt(() => {
    u.next(), u.complete();
  });
  const g = () => h(), v = () => h(), x = () => m();
  return t.$$set = (y) => {
    "group" in y && n(1, i = y.group), "expanded" in y && n(0, o = y.expanded), "level" in y && n(2, s = y.level), "entityType" in y && n(3, l = y.entityType);
  }, t.$$.update = () => {
    t.$$.dirty & /*group*/
    2 && i && d();
  }, [
    o,
    i,
    s,
    l,
    c,
    a,
    h,
    m,
    g,
    v,
    x
  ];
}
class ma extends ce {
  constructor(e) {
    super(), ae(this, e, th, eh, le, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function nh(t) {
  Ht(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function rh(t) {
  let e;
  return {
    c() {
      e = j(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      O(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && ye(
        e,
        /*icon*/
        n[0]
      );
    },
    d(n) {
      n && R(e);
    }
  };
}
function ih(t) {
  let e, n, r, i, o, s, l, a, c, u;
  const f = (
    /*#slots*/
    t[11].default
  ), d = Fe(
    f,
    t,
    /*$$scope*/
    t[10],
    null
  ), h = d || rh(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = U(), o = I("span"), h && h.c(), S(n, "class", ne(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), S(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), S(o, "class", ne(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none" style="font-size: {iconFontSize}px`
      ) + " svelte-1b4yyah"), S(e, "class", s = ne(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), S(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(m, g) {
      O(m, e, g), T(e, n), T(e, i), T(e, o), h && h.m(o, null), a = !0, c || (u = [
        ie(
          e,
          "mousedown",
          /*mousedown_handler*/
          t[12]
        ),
        ie(
          e,
          "mouseup",
          /*mouseup_handler*/
          t[13]
        ),
        ie(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[14]
        ),
        ie(
          e,
          "click",
          /*click_handler*/
          t[15]
        ),
        ie(e, "blur", oh)
      ], c = !0);
    },
    p(m, [g]) {
      (!a || g & /*active*/
      16 && r !== (r = /*active*/
      m[4] ? "width: 100% !important; height: 100% !important" : "")) && S(n, "style", r), d ? d.p && (!a || g & /*$$scope*/
      1024) && Be(
        d,
        f,
        m,
        /*$$scope*/
        m[10],
        a ? ze(
          f,
          /*$$scope*/
          m[10],
          g,
          null
        ) : We(
          /*$$scope*/
          m[10]
        ),
        null
      ) : h && h.p && (!a || g & /*icon*/
      1) && h.p(m, a ? g : -1), (!a || g & /*className*/
      2 && s !== (s = ne(
        /*tw*/
        m[5]`container group ${/*className*/
        m[1]}`
      ) + " svelte-1b4yyah")) && S(e, "class", s), (!a || g & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      m[3] + "px; width: " + /*absoluteSize*/
      m[3] + "px; " + /*disabled*/
      (m[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && S(e, "style", l);
    },
    i(m) {
      a || (A(h, m), a = !0);
    },
    o(m) {
      P(h, m), a = !1;
    },
    d(m) {
      m && R(e), h && h.d(m), c = !1, lt(u);
    }
  };
}
const oh = (t) => {
};
function sh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: a = !1 } = e, c = Oe("tw"), u, f, d, h = He();
  function m(p) {
    a || (n(4, f = !0), d = p.timeStamp);
  }
  function g(p) {
    const w = p.timeStamp - d;
    w < 300 ? setTimeout(
      () => {
        n(4, f = !1);
      },
      300 - w
    ) : n(4, f = !1);
  }
  function v(p) {
    a || h("click", p);
  }
  const x = (p) => m(p), y = (p) => g(p), _ = (p) => g(p), b = (p) => v(p);
  return t.$$set = (p) => {
    "icon" in p && n(0, o = p.icon), "size" in p && n(9, s = p.size), "className" in p && n(1, l = p.className), "disabled" in p && n(2, a = p.disabled), "$$scope" in p && n(10, i = p.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*size*/
    512)
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
    f,
    c,
    m,
    g,
    v,
    s,
    i,
    r,
    x,
    y,
    _,
    b
  ];
}
class mt extends ce {
  constructor(e) {
    super(), ae(
      this,
      e,
      sh,
      ih,
      le,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      nh
    );
  }
}
function lh(t) {
  let e, n, r, i, o, s, l, a, c;
  return {
    c() {
      e = I("div"), n = I("input"), i = U(), o = I("div"), s = j(
        /*label*/
        t[1]
      ), S(n, "type", "checkbox"), S(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), S(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      O(u, e, f), T(e, n), t[6](n), n.checked = /*checked*/
      t[0], T(e, i), T(e, o), T(o, s), a || (c = [
        ie(
          n,
          "change",
          /*input_change_handler*/
          t[7]
        ),
        ie(
          e,
          "click",
          /*click_handler*/
          t[8]
        )
      ], a = !0);
    },
    p(u, [f]) {
      f & /*tw*/
      4 && r !== (r = /*tw*/
      u[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && S(n, "class", r), f & /*checked*/
      1 && (n.checked = /*checked*/
      u[0]), f & /*label*/
      2 && ye(
        s,
        /*label*/
        u[1]
      ), f & /*tw*/
      4 && l !== (l = /*tw*/
      u[2]`flex items-center cursor-pointer`) && S(e, "class", l);
    },
    i: J,
    o: J,
    d(u) {
      u && R(e), t[6](null), a = !1, lt(c);
    }
  };
}
function ah(t, e, n) {
  let { label: r = "" } = e, { checked: i = !1 } = e, { indeterminate: o = !1 } = e, { tw: s = Oe("tw") } = e, l = He(), a;
  function c(h) {
    n(0, i = !i), l("change", { checked: i });
  }
  function u(h) {
    ue[h ? "unshift" : "push"](() => {
      a = h, n(3, a), n(5, o), n(0, i);
    });
  }
  function f() {
    i = this.checked, n(0, i);
  }
  const d = (h) => c();
  return t.$$set = (h) => {
    "label" in h && n(1, r = h.label), "checked" in h && n(0, i = h.checked), "indeterminate" in h && n(5, o = h.indeterminate), "tw" in h && n(2, s = h.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*indeterminate, checkboxElement, checked*/
    41 && (o && a && !i ? n(3, a.indeterminate = !0, a) : a && (n(3, a.indeterminate = !1, a), n(3, a.checked = i, a)));
  }, [
    i,
    r,
    s,
    a,
    c,
    o,
    u,
    f,
    d
  ];
}
class Ln extends ce {
  constructor(e) {
    super(), ae(this, e, ah, lh, le, {
      label: 1,
      checked: 0,
      indeterminate: 5,
      tw: 2
    });
  }
}
function vs(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function ch(t) {
  let e;
  return {
    c() {
      e = j("edit");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function _s(t) {
  let e, n, r;
  return n = new ma({
    props: {
      group: (
        /*rootGroup*/
        t[3]
      ),
      expanded: !0,
      entityType: (
        /*entityType*/
        t[0]
      )
    }
  }), {
    c() {
      e = I("div"), B(n.$$.fragment), S(
        e,
        "class",
        /*tw*/
        t[7]`flex-[2] overflow-auto`
      );
    },
    m(i, o) {
      O(i, e, o), L(n, e, null), r = !0;
    },
    p(i, o) {
      const s = {};
      o & /*rootGroup*/
      8 && (s.group = /*rootGroup*/
      i[3]), o & /*entityType*/
      1 && (s.entityType = /*entityType*/
      i[0]), n.$set(s);
    },
    i(i) {
      r || (A(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && R(e), F(n);
    }
  };
}
function bs(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = ws(vs(t, r, s));
  const o = (s) => P(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = xr();
    },
    m(s, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(s, l);
      O(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*tw, selectLastSelected, lastSelectedEntities, nameService, entityType, selectedEntityLookup, selectMultiple*/
      757) {
        r = /*lastSelectedEntities*/
        s[4];
        let a;
        for (a = 0; a < r.length; a += 1) {
          const c = vs(s, r, a);
          i[a] ? (i[a].p(c, l), A(i[a], 1)) : (i[a] = ws(c), i[a].c(), A(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (me(), a = r.length; a < i.length; a += 1)
          o(a);
        ve();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          A(i[l]);
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
      yt(i, s), s && R(e);
    }
  };
}
function ys(t) {
  let e, n;
  return e = new Ln({
    props: {
      checked: (
        /*selectedEntityLookup*/
        t[5][
          /*entityId*/
          t[18]
        ]
      )
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*selectedEntityLookup, lastSelectedEntities*/
      48 && (o.checked = /*selectedEntityLookup*/
      r[5][
        /*entityId*/
        r[18]
      ]), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function uh(t) {
  return { c: J, m: J, p: J, d: J };
}
function fh(t) {
  let e = (
    /*name*/
    t[21] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      O(r, n, i);
    },
    p(r, i) {
      i & /*entityType, lastSelectedEntities*/
      17 && e !== (e = /*name*/
      r[21] + "") && ye(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function dh(t) {
  return { c: J, m: J, p: J, d: J };
}
function ws(t) {
  let e, n, r, i, o, s, l, a = (
    /*selectMultiple*/
    t[2] && ys(t)
  ), c = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: dh,
    then: fh,
    catch: uh,
    value: 21
  };
  gr(r = /*nameService*/
  t[6].resolveName(
    /*entityType*/
    t[0],
    /*entityId*/
    t[18]
  ), c);
  function u() {
    return (
      /*click_handler_1*/
      t[11](
        /*entityId*/
        t[18]
      )
    );
  }
  return {
    c() {
      e = I("div"), a && a.c(), n = U(), c.block.c(), i = U(), S(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      O(f, e, d), a && a.m(e, null), T(e, n), c.block.m(e, c.anchor = null), c.mount = () => e, c.anchor = i, T(e, i), o = !0, s || (l = ie(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? a ? (a.p(t, d), d & /*selectMultiple*/
      4 && A(a, 1)) : (a = ys(t), a.c(), A(a, 1), a.m(e, n)) : a && (me(), P(a, 1, 1, () => {
        a = null;
      }), ve()), c.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && gr(r, c) || pa(c, t, d);
    },
    i(f) {
      o || (A(a), o = !0);
    },
    o(f) {
      P(a), o = !1;
    },
    d(f) {
      f && R(e), a && a.d(), c.block.d(), c.token = null, c = null, s = !1, l();
    }
  };
}
function hh(t) {
  var y;
  let e, n, r = (
    /*selectedTenant*/
    ((y = t[1]) == null ? void 0 : y.Name) + ""
  ), i, o, s, l, a, c, u, f, d, h, m, g;
  s = new mt({
    props: {
      size: "small",
      $$slots: { default: [ch] },
      $$scope: { ctx: t }
    }
  });
  let v = (
    /*rootGroup*/
    t[3] && _s(t)
  ), x = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && bs(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), i = j(r), o = U(), B(s.$$.fragment), l = U(), v && v.c(), a = U(), c = I("div"), u = I("div"), f = j("Zuletzt ausgewählt"), d = U(), x && x.c(), S(
        n,
        "class",
        /*tw*/
        t[7]`font-bold text-lg flex items-center cursor-pointer group`
      ), S(
        u,
        "class",
        /*tw*/
        t[7]`font-bold text-gray-700`
      ), S(
        c,
        "class",
        /*tw*/
        t[7]`flex-1`
      ), S(
        e,
        "class",
        /*tw*/
        t[7]`flex flex-col w-full h-full overflow-hidden`
      );
    },
    m(_, b) {
      O(_, e, b), T(e, n), T(n, i), T(n, o), L(s, n, null), T(e, l), v && v.m(e, null), T(e, a), T(e, c), T(c, u), T(u, f), T(c, d), x && x.m(c, null), h = !0, m || (g = ie(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), m = !0);
    },
    p(_, [b]) {
      var w;
      (!h || b & /*selectedTenant*/
      2) && r !== (r = /*selectedTenant*/
      ((w = _[1]) == null ? void 0 : w.Name) + "") && ye(i, r);
      const p = {};
      b & /*$$scope*/
      4194304 && (p.$$scope = { dirty: b, ctx: _ }), s.$set(p), /*rootGroup*/
      _[3] ? v ? (v.p(_, b), b & /*rootGroup*/
      8 && A(v, 1)) : (v = _s(_), v.c(), A(v, 1), v.m(e, a)) : v && (me(), P(v, 1, 1, () => {
        v = null;
      }), ve()), /*lastSelectedEntities*/
      _[4] && /*lastSelectedEntities*/
      _[4].length > 0 ? x ? (x.p(_, b), b & /*lastSelectedEntities*/
      16 && A(x, 1)) : (x = bs(_), x.c(), A(x, 1), x.m(c, null)) : x && (me(), P(x, 1, 1, () => {
        x = null;
      }), ve());
    },
    i(_) {
      h || (A(s.$$.fragment, _), A(v), A(x), h = !0);
    },
    o(_) {
      P(s.$$.fragment, _), P(v), P(x), h = !1;
    },
    d(_) {
      _ && R(e), F(s), v && v.d(), x && x.d(), m = !1, g();
    }
  };
}
function ph(t, e, n) {
  let r = Te(Dt), i = Te(In), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, a = Oe("tw"), c = null, u, f = [], d = {}, h = He(), m = new ke(), g = un();
  g.pipe(ot(m)).subscribe((p) => {
    n(4, u = p.lastSelectedEntities);
  });
  const v = Pt.subscribe((p) => {
    f = p.selectedEntities, n(5, d = {});
    for (let w of f)
      n(5, d[w.Id] = !0, d);
  });
  async function x(p) {
    var w;
    try {
      n(3, c = await r.getEntityById(G.Group, p)), (!((w = g.value) != null && w.selectedGroup) || g.value.selectedGroup.Id != c.Id) && g.update((k) => ({ ...k, selectedGroup: c }));
    } catch (k) {
      console.log(k);
    }
  }
  async function y(p) {
    let w = await r.getEntityById(o, p);
    l ? d[p] ? f = f.filter((k) => k.Id !== p) : f.push(w) : f = [w], Pt.update((k) => ({ ...k, selectedEntities: f }));
  }
  Od(() => {
    try {
      s && s.Root && c === null && x(s.Root);
    } catch {
    }
  }), wt(() => {
    console.log("onDestroy"), v.unsubscribe();
  });
  const _ = () => h("changeTenant"), b = (p) => y(p);
  return t.$$set = (p) => {
    "entityType" in p && n(0, o = p.entityType), "selectedTenant" in p && n(1, s = p.selectedTenant), "selectMultiple" in p && n(2, l = p.selectMultiple);
  }, [
    o,
    s,
    l,
    c,
    u,
    d,
    i,
    a,
    h,
    y,
    _,
    b
  ];
}
class gh extends ce {
  constructor(e) {
    super(), ae(this, e, ph, hh, le, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const mh = (t) => ({}), Ss = (t) => ({});
function vh(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[2].default
  ), s = Fe(
    o,
    t,
    /*$$scope*/
    t[1],
    null
  ), l = (
    /*#slots*/
    t[2].pagination
  ), a = Fe(
    l,
    t,
    /*$$scope*/
    t[1],
    Ss
  );
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), r = U(), a && a.c(), S(n, "class", "w-full overflow-auto flex-1"), S(e, "class", "flex flex-col h-full");
    },
    m(c, u) {
      O(c, e, u), T(e, n), s && s.m(n, null), T(e, r), a && a.m(e, null), i = !0;
    },
    p(c, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      2) && Be(
        s,
        o,
        c,
        /*$$scope*/
        c[1],
        i ? ze(
          o,
          /*$$scope*/
          c[1],
          u,
          null
        ) : We(
          /*$$scope*/
          c[1]
        ),
        null
      ), a && a.p && (!i || u & /*$$scope*/
      2) && Be(
        a,
        l,
        c,
        /*$$scope*/
        c[1],
        i ? ze(
          l,
          /*$$scope*/
          c[1],
          u,
          mh
        ) : We(
          /*$$scope*/
          c[1]
        ),
        Ss
      );
    },
    i(c) {
      i || (A(s, c), A(a, c), i = !0);
    },
    o(c) {
      P(s, c), P(a, c), i = !1;
    },
    d(c) {
      c && R(e), s && s.d(c), a && a.d(c);
    }
  };
}
function _h(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = He(), l = mr(o);
  ht("audako:table:sort", l);
  let a = l.subscribe((c) => {
    s("sort", c);
  });
  return wt(() => {
    a();
  }), t.$$set = (c) => {
    "startSort" in c && n(0, o = c.startSort), "$$scope" in c && n(1, i = c.$$scope);
  }, [o, i, r];
}
class bh extends ce {
  constructor(e) {
    super(), ae(this, e, _h, vh, le, { startSort: 0 });
  }
}
function yh(t) {
  Ht(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function wh(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[2].default
  ), i = Fe(
    r,
    t,
    /*$$scope*/
    t[1],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), S(e, "class", "audako-tableheader-flexrow");
    },
    m(o, s) {
      O(o, e, s), i && i.m(e, null), t[3](e), n = !0;
    },
    p(o, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && Be(
        i,
        r,
        o,
        /*$$scope*/
        o[1],
        n ? ze(
          r,
          /*$$scope*/
          o[1],
          s,
          null
        ) : We(
          /*$$scope*/
          o[1]
        ),
        null
      );
    },
    i(o) {
      n || (A(i, o), n = !0);
    },
    o(o) {
      P(i, o), n = !1;
    },
    d(o) {
      o && R(e), i && i.d(o), t[3](null);
    }
  };
}
function Sh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    ue[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class Eh extends ce {
  constructor(e) {
    super(), ae(this, e, Sh, wh, le, {}, yh);
  }
}
function Ch(t) {
  Ht(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function Es(t) {
  let e, n, r;
  return {
    c() {
      e = I("span"), n = j("north"), S(e, "class", "material-symbols-rounded text-xs transition-all"), S(e, "style", r = /*sortDirection*/
      (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(i, o) {
      O(i, e, o), T(e, n);
    },
    p(i, o) {
      o & /*sortDirection*/
      4 && r !== (r = /*sortDirection*/
      (i[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && S(e, "style", r);
    },
    d(i) {
      i && R(e);
    }
  };
}
function kh(t) {
  let e, n, r, i, o, s, l;
  const a = (
    /*#slots*/
    t[6].default
  ), c = Fe(
    a,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let u = (
    /*sortable*/
    t[0] && Es(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), c && c.c(), r = U(), u && u.c(), S(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      O(f, e, d), T(e, n), c && c.m(n, null), T(e, r), u && u.m(e, null), o = !0, s || (l = ie(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(f, [d]) {
      c && c.p && (!o || d & /*$$scope*/
      32) && Be(
        c,
        a,
        f,
        /*$$scope*/
        f[5],
        o ? ze(
          a,
          /*$$scope*/
          f[5],
          d,
          null
        ) : We(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*sortable*/
      f[0] ? u ? u.p(f, d) : (u = Es(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
      3 && i !== (i = "header-cell " + /*sortable*/
      (f[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      f[1] + " svelte-11sxgak")) && S(e, "class", i);
    },
    i(f) {
      o || (A(c, f), o = !0);
    },
    o(f) {
      P(c, f), o = !1;
    },
    d(f) {
      f && R(e), c && c.d(f), u && u.d(), s = !1, l();
    }
  };
}
function $h(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, a = "asc", c = Oe("audako:table:sort");
  console.log(c);
  let u = c.subscribe((h) => {
    s && (h == null ? void 0 : h.active) === s ? n(2, a = h.direction) : n(2, a = null);
  });
  function f() {
    a === "asc" ? n(2, a = "desc") : a === "desc" ? n(2, a = null) : n(2, a = "asc"), c.set(a ? { active: s, direction: a } : null);
  }
  wt(() => {
    u();
  });
  const d = () => f();
  return t.$$set = (h) => {
    "sortable" in h && n(0, o = h.sortable), "id" in h && n(4, s = h.id), "container$class" in h && n(1, l = h.container$class), "$$scope" in h && n(5, i = h.$$scope);
  }, [
    o,
    l,
    a,
    f,
    s,
    i,
    r,
    d
  ];
}
class xi extends ce {
  constructor(e) {
    super(), ae(this, e, $h, kh, le, { sortable: 0, id: 4, container$class: 1 }, Ch);
  }
}
function Ah(t) {
  Ht(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function Th(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[3].default
  ), l = Fe(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = I("div"), l && l.c(), S(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(a, c) {
      O(a, e, c), l && l.m(e, null), r = !0, i || (o = ie(
        e,
        "click",
        /*onClick*/
        t[1]
      ), i = !0);
    },
    p(a, [c]) {
      l && l.p && (!r || c & /*$$scope*/
      4) && Be(
        l,
        s,
        a,
        /*$$scope*/
        a[2],
        r ? ze(
          s,
          /*$$scope*/
          a[2],
          c,
          null
        ) : We(
          /*$$scope*/
          a[2]
        ),
        null
      ), (!r || c & /*flexrow$class*/
      1 && n !== (n = "audako-tablebody-flexrow " + /*flexrow$class*/
      a[0])) && S(e, "class", n);
    },
    i(a) {
      r || (A(l, a), r = !0);
    },
    o(a) {
      P(l, a), r = !1;
    },
    d(a) {
      a && R(e), l && l.d(a), i = !1, o();
    }
  };
}
function xh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = He();
  function l(a) {
    s("click", a);
  }
  return t.$$set = (a) => {
    "flexrow$class" in a && n(0, o = a.flexrow$class), "$$scope" in a && n(2, i = a.$$scope);
  }, [o, l, i, r];
}
class Ph extends ce {
  constructor(e) {
    super(), ae(this, e, xh, Th, le, { flexrow$class: 0 }, Ah);
  }
}
function Ih(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[3].default
  ), o = Fe(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = I("div"), o && o.c(), S(e, "class", n = /*tw*/
      t[1]`border-t overflow-hidden ${/*container$class*/
      t[0]}`);
    },
    m(s, l) {
      O(s, e, l), o && o.m(e, null), r = !0;
    },
    p(s, [l]) {
      o && o.p && (!r || l & /*$$scope*/
      4) && Be(
        o,
        i,
        s,
        /*$$scope*/
        s[2],
        r ? ze(
          i,
          /*$$scope*/
          s[2],
          l,
          null
        ) : We(
          /*$$scope*/
          s[2]
        ),
        null
      ), (!r || l & /*container$class*/
      1 && n !== (n = /*tw*/
      s[1]`border-t overflow-hidden ${/*container$class*/
      s[0]}`)) && S(e, "class", n);
    },
    i(s) {
      r || (A(o, s), r = !0);
    },
    o(s) {
      P(o, s), r = !1;
    },
    d(s) {
      s && R(e), o && o.d(s);
    }
  };
}
function Rh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = Oe("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class Pi extends ce {
  constructor(e) {
    super(), ae(this, e, Rh, Ih, le, { container$class: 0 });
  }
}
var qn, Oh = new Uint8Array(16);
function Dh() {
  if (!qn && (qn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !qn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qn(Oh);
}
const Nh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Uh(t) {
  return typeof t == "string" && Nh.test(t);
}
var _e = [];
for (var ni = 0; ni < 256; ++ni)
  _e.push((ni + 256).toString(16).substr(1));
function Mh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (_e[t[e + 0]] + _e[t[e + 1]] + _e[t[e + 2]] + _e[t[e + 3]] + "-" + _e[t[e + 4]] + _e[t[e + 5]] + "-" + _e[t[e + 6]] + _e[t[e + 7]] + "-" + _e[t[e + 8]] + _e[t[e + 9]] + "-" + _e[t[e + 10]] + _e[t[e + 11]] + _e[t[e + 12]] + _e[t[e + 13]] + _e[t[e + 14]] + _e[t[e + 15]]).toLowerCase();
  if (!Uh(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function Hh(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || Dh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return Mh(r);
}
const jh = {
  backdrop: !0,
  positioning: "center",
  closeOnClickOutside: !0,
  anchorElement: null,
  customPosition: {
    x: 0,
    y: 0
  }
};
class vr {
  constructor(e) {
    Ge(this, "_popupContainer");
    Ge(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...jh, ...r }, console.log("openPopup", r);
    const i = Hh(), o = new ke(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
    r.inTransitionClassList && (l.style.transition = `all ${r.inTransitionDuration ?? 100}ms`, l.classList.add(r.inTransitionClassList)), s.appendChild(l);
    const a = () => {
      console.log("close"), this._removePopupWrapper(l, r), o.next(null), o.complete();
    };
    return r.closeOnClickOutside && s.addEventListener("click", (u) => {
      u.target === s && a();
    }), this._positionPopup(s, l, r), n.style.visibility = "visible", r.inTransitionClassList && (n.classList.add(r.inTransitionClassList), n.style.transition = `all ${r.inTransitionDuration ?? 100}ms`), {
      popupId: i,
      afterClosed: Ot(o).then(() => console.log("afterClosed")),
      close: a
    };
  }
  _removePopupWrapper(e, n) {
    const r = e.parentElement, i = () => {
      e.remove(), r.children.length === 0 && this._removeContainer(r.id);
    };
    n.outTransitionClassList ? (e.style.transition = `all ${n.outTransitionDuration ?? 100}ms`, e.classList.remove(n.inTransitionClassList), e.classList.add(n.outTransitionClassList), setTimeout(() => {
      i();
    }, n.outTransitionDuration ?? 100)) : i();
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
    var a, c, u, f, d;
    const i = n.style, o = e.getBoundingClientRect(), s = n.getBoundingClientRect();
    console.log("popupRect", s, n.style, r);
    const l = (a = r.anchorElement) == null ? void 0 : a.getBoundingClientRect();
    i.position = "absolute", r.positioning === "center" ? (i.top = "50%", i.left = "50%", i.transform = "translate(-50%, -50%)") : r.positioning === "anchor" ? (n.style.top = `${this._getTopPosition(l.top, s.height, o.height, l.height, r.anchorVertical ?? "bottom") + (((c = r.customPosition) == null ? void 0 : c.y) ?? 0)}px`, n.style.left = `${this._getLeftPosition(l.left - 4, s.width, o.width, r.anchorHorizontal ?? "right") + (((u = r.customPosition) == null ? void 0 : u.x) ?? 0)}px`) : r.positioning === "custom" && (n.style.top = `${this._getTopPosition(r.customPosition.y, s.height, o.height) + (((f = r.customPosition) == null ? void 0 : f.y) ?? 0)}px`, n.style.left = `${this._getLeftPosition(r.customPosition.x, s.width, o.width) + (((d = r.customPosition) == null ? void 0 : d.x) ?? 0)}px`);
  }
  _getTopPosition(e, n, r, i = 0, o = "bottom") {
    return o == "top" ? e + n + 40 < r ? e + i / 3 : e - n + i / 3 : e - n > 40 ? e - n + i / 3 : e + i / 3;
  }
  _getLeftPosition(e, n, r, i = "right") {
    return console.log(arguments), i == "left" ? e : e - n > 40 ? e - n : e + n;
  }
}
var Lh = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Fh(t) {
  return Lh.get(t);
}
function zh(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function Bh(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var te = (t, e) => !!~t.indexOf(e), V = (t, e = "-") => t.join(e), Ii = (t, e) => V(t.filter(Boolean), e), W = (t, e = 1) => t.slice(e), Wh = (t) => t, va = () => {
}, Xe = (t) => t[0].toUpperCase() + W(t), co = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Rt = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, _a = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, ba = (t, e) => !te("@:&", t[0]) && (te("rg", (typeof e)[5]) || Array.isArray(e)), uo = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Rt(e[i], n);
  return ba(i, o) ? r[co(i)] = o : r[i] = i[0] == "@" && te("figa", i[1]) ? (r[i] || []).concat(o) : uo(r[i] || {}, o, n), r;
}, t) : t, ya = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), Pr = (t) => (Array.isArray(t) || (t = [t]), "@media " + V(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || V(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), ri = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Vh = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, st, en, pt = (t = "") => (st.push(t), ""), fo = (t) => {
  st.length = Math.max(st.lastIndexOf("") + ~~t, 0);
}, qh = (t) => t && !te("!:", t[0]), Gh = (t) => t[0] == ":", wa = (t, e) => {
  en.push({
    v: st.filter(Gh),
    d: t,
    n: e,
    i: te(st, "!"),
    $: ""
  });
}, Cs = (t) => {
  const e = t[0] == "-";
  e && (t = W(t));
  const n = V(st.filter(qh));
  return wa(t == "&" ? n : (n && n + "-") + t, e), "";
}, An = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && pt(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && pt(n), pt();
        break;
      case "!":
        pt(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && Cs(n), fo(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? pt(":" + n) : n.slice(-1) == "-" ? pt(n.slice(0, -1)) : Cs(n));
}, Sa = (t) => {
  pt(), _r(t), fo();
}, Jh = (t, e) => {
  if (e) {
    pt();
    const n = te("tbu", (typeof e)[1]);
    An(t, n), n && Sa(e), fo();
  }
}, _r = (t) => {
  switch (typeof t) {
    case "string":
      An(t);
      break;
    case "function":
      wa(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(Sa) : t && Object.keys(t).forEach((e) => {
        Jh(e, t[e]);
      });
  }
}, ks = /* @__PURE__ */ new WeakMap(), Xh = (t) => {
  let e = ks.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || te(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (a) => {
          o == n && (r = ""), r += i, te("rg", (typeof a)[5]) ? r += a : a && (An(r), r = "", _r(a)), o == t.length - 1 && An(r);
        };
      const s = en = [];
      An(i);
      const l = [...st];
      return en = [], (a) => {
        en.push(...s), st = [...l], a && _r(a);
      };
    }), ks.set(t, e);
  }
  return e;
}, Ri = (t) => (st = [], en = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? Xh(t[0]).forEach((e, n) => e(t[n + 1])) : _r(t), en), Oi, Kh = (t, e) => (typeof e == "function" && (Oi = !1), e), Yh = (t) => {
  Oi = !0;
  const e = JSON.stringify(t, Kh);
  return Oi && e;
}, $s = /* @__PURE__ */ new WeakMap(), Qh = (t, e) => {
  const n = Yh(e);
  let r;
  if (n) {
    var i = $s.get(t);
    i || $s.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Rt(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), _a(i, 1e4))), r;
}, Zh = (t, { css: e }) => e(Ri(t)), ep = (...t) => Qh(Zh, t), Ea = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[Ii([r, l, i])] = e, s), {});
  }
}, tp = /* @__PURE__ */ Ea((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), br = (t) => {
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
}, Ca = /* @__PURE__ */ Ea(br), np = (t, e) => t + (e[1] == ":" ? W(e, 2) + ":" : W(e)) + ":", As = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(np, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, $, At, K, Gn = (t) => t == "cols" ? "columns" : "rows", Fn = (t) => (e, n, r) => ({
  [t]: r + (($ = V(e)) && "-" + $)
}), se = (t, e) => (n, r, i) => ($ = V(n, e)) && {
  [t || i]: $
}, Se = (t) => (e, { theme: n }, r) => ($ = n(t || r, e)) && {
  [t || r]: $
}, Jn = (t, e) => (n, { theme: r }, i) => ($ = r(t || i, n, V(n, e))) && {
  [t || i]: $
}, Je = (t, e) => (n, r) => t(n, r, e), tt = Fn("display"), wn = Fn("position"), Vt = Fn("textTransform"), qt = Fn("textDecoration"), Xn = Fn("fontStyle"), ct = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), Kn = (t, { theme: e }, n) => ($ = e("inset", t)) && { [n]: $ }, kn = (t, e, n, r = n) => ($ = e(r + "Opacity", W(t))) && {
  [`--tw-${n}-opacity`]: $
}, ii = (t, e) => Math.round(parseInt(t, 16) * e), yr = (t, e, n) => t && t[0] == "#" && ($ = (t.length - 1) / 3) && (K = [17, 1, 0.062272][$ - 1]) ? `rgba(${ii(t.substr(1, $), K)},${ii(t.substr(1 + $, $), K)},${ii(t.substr(1 + 2 * $, $), K)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, or = (t, e, n) => n && typeof n == "string" ? ($ = yr(n, e + "-opacity")) && $ !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, $]
} : { [t]: n } : void 0, Ts = (t) => (K = yr(t, "", "0")) == $ ? "transparent" : K, xs = (t, { theme: e }, n, r, i, o) => ($ = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (K = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [K]: "1"
} : {
  [K]: "0",
  [Ii([i, $[0], o])]: (At = e(r, W(t))) && `calc(${At} * var(${K}))`,
  [Ii([i, $[1], o])]: At && [At, `calc(${At} * calc(1 - var(${K})))`]
} : void 0, ka = (t, e) => e[0] && {
  [t]: (te("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, oi = (t) => (e) => te(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : ka(t, e), Ps = (t) => (e, { theme: n }) => {
  if ($ = n("grid" + Xe(t), e, ""))
    return { ["grid-" + t]: $ };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return ($ = n("grid" + Xe(t) + Xe(e[0]), W(e), V(W(e)))) && {
        [`grid-${t}-${e[0]}`]: $
      };
  }
}, $a = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return se("borderStyle")(t);
    case "collapse":
    case "separate":
      return se("borderCollapse")(t);
    case "opacity":
      return kn(t, e, n);
  }
  return ($ = e(n + "Width", t, "")) ? { borderWidth: $ } : or("borderColor", n, e(n + "Color", t));
}, rp = (t, e, n) => {
  var r;
  const i = (r = br(t[0])) == null ? void 0 : r.map(Xe);
  i && (t = W(t));
  let o = $a(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, a]) => {
    if (l.startsWith("border"))
      for (const c of i)
        s[l.slice(0, 6) + c + l.slice(6)] = a;
    else
      s[l] = a;
    return s;
  }, {})), o;
}, Di = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", si = (t, e, n) => t[0] && ($ = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && $,
  [`--tw-${n}-y`]: t[0] !== "x" && $,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${$})`, Di()]
}, Aa = (t) => (e, n, r) => r[1] ? Ca(n.theme(t, e), r[1], t) : Se(t)(e, n, r), Et = Aa("padding"), Ct = Aa("margin"), Is = (t, { theme: e }, n) => ($ = { w: "width", h: "height" }[t[0]]) && {
  [$ = `${n}${Xe($)}`]: e($, W(t))
}, Le = (t, { theme: e }, n) => {
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
  return K = t.shift(), te(["hue", "drop"], K) && (K += Xe(t.shift())), ($ = e(i ? "backdrop" + Xe(K) : K, t)) && {
    ["--tw-" + i + K]: (Array.isArray($) ? $ : [$]).map((o) => `${co(K)}(${o})`).join(" ")
  };
}, ip = {
  group: (t, { tag: e }, n) => e(V([n, ...t])),
  hidden: Je(tt, "none"),
  inline: tt,
  block: tt,
  contents: tt,
  flow: tt,
  table: (t, e, n) => te(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : tt(t, e, n),
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
        return $ = e.theme("flex" + Xe(t[0]), W(t), t[1] || 1), $ != null && {
          ["flex-" + t[0]]: "" + $
        };
    }
    return ($ = e.theme("flex", t, "")) ? { flex: $ } : tt(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return ($ = e.theme("gridTemplate" + Xe(Gn(t[0])), W(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : V(W(t)))) && {
          ["gridTemplate-" + Gn(t[0])]: $
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: V(t[1] == "col" ? ["column", ...W(t, 2)] : W(t), " ")
        };
    }
    return tt(t, e, n);
  },
  auto: (t, { theme: e }) => te(["cols", "rows"], t[0]) && ($ = e("gridAuto" + Xe(Gn(t[0])), W(t), V(W(t)))) && {
    ["gridAuto-" + Gn(t[0])]: $
  },
  static: wn,
  fixed: wn,
  absolute: wn,
  relative: wn,
  sticky: wn,
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
  appearance: se(),
  cursor: Jn(),
  float: se(),
  clear: se(),
  decoration: se("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: se(),
  "mix-blend": se("mixBlendMode"),
  top: Kn,
  right: Kn,
  bottom: Kn,
  left: Kn,
  inset: (t, { theme: e }) => ($ = br(t[0])) ? Ca(e("inset", W(t)), t[0]) : ($ = e("inset", t)) && {
    top: $,
    right: $,
    bottom: $,
    left: $
  },
  underline: qt,
  "line-through": qt,
  "no-underline": Je(qt, "none"),
  "text-underline": Je(qt, "underline"),
  "text-no-underline": Je(qt, "none"),
  "text-line-through": Je(qt, "line-through"),
  uppercase: Vt,
  lowercase: Vt,
  capitalize: Vt,
  "normal-case": Je(Vt, "none"),
  "text-normal-case": Je(Vt, "none"),
  italic: Xn,
  "not-italic": Je(Xn, "normal"),
  "font-italic": Je(Xn, "italic"),
  "font-not-italic": Je(Xn, "normal"),
  font: (t, e, n) => ($ = e.theme("fontFamily", t, "")) ? { fontFamily: $ } : Se("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: te(["start", "end"], t[0]) ? "flex-" + t[0] : V(t)
  },
  "justify-self": se(),
  "justify-items": se(),
  justify: oi("justifyContent"),
  content: oi("alignContent"),
  self: oi("alignSelf"),
  place: (t) => t[0] && ka("place-" + t[0], W(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: Ps("column"),
  row: Ps("row"),
  duration: Se("transitionDuration"),
  delay: Se("transitionDelay"),
  tracking: Se("letterSpacing"),
  leading: Se("lineHeight"),
  z: Se("zIndex"),
  opacity: Se(),
  ease: Se("transitionTimingFunction"),
  p: Et,
  py: Et,
  px: Et,
  pt: Et,
  pr: Et,
  pb: Et,
  pl: Et,
  m: Ct,
  my: Ct,
  mx: Ct,
  mt: Ct,
  mr: Ct,
  mb: Ct,
  ml: Ct,
  w: Se("width"),
  h: Se("height"),
  min: Is,
  max: Is,
  fill: Se(),
  order: Se(),
  origin: Jn("transformOrigin", " "),
  select: se("userSelect"),
  "pointer-events": se(),
  align: se("verticalAlign"),
  whitespace: se("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: ct("ordinal"),
  "slashed-zero": ct("slashed-zero"),
  "lining-nums": ct("numeric-figure"),
  "oldstyle-nums": ct("numeric-figure"),
  "proportional-nums": ct("numeric-spacing"),
  "tabular-nums": ct("numeric-spacing"),
  "diagonal-fractions": ct("numeric-fraction"),
  "stacked-fractions": ct("numeric-fraction"),
  overflow: (t, e, n) => te(["ellipsis", "clip"], t[0]) ? se("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : se()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: Di(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => ($ = e("rotate", t)) && {
    "--tw-rotate": $,
    transform: [`rotate(${$})`, Di()]
  },
  scale: si,
  translate: si,
  skew: si,
  gap: (t, e, n) => ($ = { x: "column", y: "row" }[t[0]]) ? { [$ + "Gap"]: e.theme("gap", W(t)) } : Se("gap")(t, e, n),
  stroke: (t, e, n) => ($ = e.theme("stroke", t, "")) ? { stroke: $ } : Se("strokeWidth")(t, e, n),
  outline: (t, { theme: e }) => ($ = e("outline", t)) && {
    outline: $[0],
    outlineOffset: $[1]
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
        return Vt([], $, t[0]);
      case "opacity":
        return kn(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : {
      fontSize: r[0],
      ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1]
    } : or("color", "text", e("textColor", t));
  },
  bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return se("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return se("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && se("backgroundRepeat")(t);
      case "repeat":
        return te("xy", t[1]) ? se("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return kn(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return se("background-blend-mode")(W(t));
      case "gradient":
        if (t[1] == "to" && ($ = br(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${V($, " ")},var(--tw-gradient-stops))`
          };
    }
    return ($ = e("backgroundPosition", t, "")) ? { backgroundPosition: $ } : ($ = e("backgroundSize", t, "")) ? { backgroundSize: $ } : ($ = e("backgroundImage", t, "")) ? { backgroundImage: $ } : or("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-from": $,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Ts($)})`
  },
  via: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${$},var(--tw-gradient-to,${Ts($)})`
  },
  to: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-to": $
  },
  border: rp,
  divide: (t, e, n) => ($ = xs(t, e, n, "divideWidth", "border", "width") || $a(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": $
  },
  space: (t, e, n) => ($ = xs(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": $
  },
  placeholder: (t, { theme: e }, n) => ($ = t[0] == "opacity" ? kn(t, e, n) : or("color", "placeholder", e("placeholderColor", t))) && {
    "&::placeholder": $
  },
  shadow: (t, { theme: e }) => ($ = e("boxShadow", t)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": $ == "none" ? "0 0 transparent" : $,
    boxShadow: [
      $,
      "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"
    ]
  },
  animate: (t, { theme: e, tag: n }) => {
    if (K = e("animation", t)) {
      const r = K.split(" ");
      return ($ = e("keyframes", r[0], At = {})) !== At ? (K = n(r[0])) && {
        animation: K + " " + V(W(r), " "),
        ["@keyframes " + K]: $
      } : { animation: K };
    }
  },
  ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return kn(t, e, n);
      case "offset":
        return ($ = e("ringOffsetWidth", W(t), "")) ? {
          "--tw-ring-offset-width": $
        } : {
          "--tw-ring-offset-color": e("ringOffsetColor", W(t))
        };
    }
    return ($ = e("ringWidth", t, "")) ? {
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${$} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": e("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": e("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": yr(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": yr(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => te(["contain", "cover", "fill", "none", "scale-down"], V(t)) ? { objectFit: V(t) } : Jn("objectPosition", " ")(t, e, n),
  list: (t, e, n) => V(t) == "item" ? tt(t, e, n) : te(["inside", "outside"], V(t)) ? { listStylePosition: t[0] } : Jn("listStyleType")(t, e, n),
  rounded: (t, e, n) => tp(e.theme("borderRadius", W(t), ""), t[0], "border", "radius") || Se("borderRadius")(t, e, n),
  "transition-none": { transitionProperty: "none" },
  transition: (t, { theme: e }) => ({
    transitionProperty: e("transitionProperty", t),
    transitionTimingFunction: e("transitionTimingFunction", ""),
    transitionDuration: e("transitionDuration", "")
  }),
  container: (t, { theme: e }) => {
    const { screens: n = e("screens"), center: r, padding: i } = e("container"), o = (s) => ($ = i && (typeof i == "string" ? i : i[s] || i.DEFAULT)) ? {
      paddingRight: $,
      paddingLeft: $
    } : {};
    return Object.keys(n).reduce((s, l) => ((K = n[l]) && typeof K == "string" && (s[Pr(K)] = {
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
  filter: Le,
  blur: Le,
  brightness: Le,
  contrast: Le,
  grayscale: Le,
  "hue-rotate": Le,
  invert: Le,
  saturate: Le,
  sepia: Le,
  "drop-shadow": Le,
  backdrop: Le
}, op = (t) => ({
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
}), sp = {
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
}, Rs = "__twind", lp = (t) => {
  let e = self[Rs];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = Rs, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, Ta = ({
  nonce: t,
  target: e = lp(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, ap = () => ({
  target: null,
  insert: va
}), ho = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + V(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), Os = /* @__PURE__ */ ho((t) => console.warn(t)), cp = /* @__PURE__ */ ho((t) => {
  throw new Error(t);
}), up = /* @__PURE__ */ ho(va), nt = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, fp = (t, e, n) => {
  let r = "";
  const i = Fh(t);
  i && (r += `${nt(i, e, n)};`);
  let o = zh(t);
  return o & 1 && (r += `-webkit-${nt(t, e, n)};`), o & 2 && (r += `-moz-${nt(t, e, n)};`), o & 4 && (r += `-ms-${nt(t, e, n)};`), o = Bh(t, e), o & 1 && (r += `${nt(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${nt(t, `-moz-${e}`, n)};`), o & 4 && (r += `${nt(t, `-ms-${e}`, n)};`), r += nt(t, e, n), r;
}, Sn = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, ut = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, Ie = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, Z = (t) => (e) => e(t), dp = {
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
    .../* @__PURE__ */ Ie(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ Ie(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ Ie(64, "rem", 4, 16, 4),
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
    .../* @__PURE__ */ Ie(200, "", 100, 0, 50),
    .../* @__PURE__ */ Ie(110, "", 100, 90, 5),
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
    .../* @__PURE__ */ ut(8, "px")
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
    .../* @__PURE__ */ Ie(200, "", 100, 0, 50),
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
    ...Sn(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Sn(2, 4),
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
    .../* @__PURE__ */ Ie(10, "rem", 4, 3)
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
    .../* @__PURE__ */ Ie(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ Ie(12, "", 1, 1)
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
  ringOffsetWidth: /* @__PURE__ */ ut(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ ut(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ ut(2, "deg"),
    .../* @__PURE__ */ ut(12, "deg", 3),
    .../* @__PURE__ */ ut(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ Ie(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ Ie(150, "", 100, 0, 50),
    .../* @__PURE__ */ Ie(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ ut(2, "deg"),
    .../* @__PURE__ */ ut(12, "deg", 3)
  },
  space: /* @__PURE__ */ Z("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ Ie(2),
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
    ...Sn(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Sn(2, 6),
    ...Sn(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ Ie(50, "", 1, 0, 10)
  }
}, xa = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[V(n)] = i, e[V(n, ".")] = i);
  const o = [...n, r];
  e[V(o)] = i, e[V(o, ".")] = i, i && typeof i == "object" && xa(i, e, o);
}, e), e), hp = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, pp = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && te(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (te(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), gp = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...dp, ...t }, r = (o, s) => {
    const l = o && o[s], a = typeof l == "function" ? l(i, hp) : l;
    return a && s == "colors" ? xa(a) : a;
  }, i = (o, s, l) => {
    const a = o.split(".");
    o = a[0], a.length > 1 && (l = s, s = V(W(a), "."));
    let c = e.get(o);
    if (c || (e.set(o, c = { ...r(n, o) }), Object.assign(c, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? V(s) : s) || "DEFAULT";
      const u = pp(o, s) || c[s];
      return u == null ? l : Array.isArray(u) && !te(["fontSize", "outline", "dropShadow"], o) ? V(u, ",") : u;
    }
    return c;
  };
  return i;
}, mp = (t, e) => (n, r) => {
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
}, En, Pa = /^:(group(?:(?!-focus).+?)*)-(.+)$/, Ia = /^(:not)-(.+)/, Ra = (t) => t[1] == "[" ? W(t) : t, vp = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (En = n("screens", W(s), "")) ? { [Pr(En)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (En = Pa.exec(s)) ? { [`.${ya(r(En[1]))}:${En[2]} &`]: o } : {
    [e[W(s)] || "&" + s.replace(Ia, (l, a, c) => a + "(" + Ra(":" + c) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, Ae, Oa = (t) => (((Ae = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Ae[1] / (Ae[2] ? 15 : 1) / 10 : 0) & 31) << 22, Da = (t) => {
  Ae = 0;
  for (let e = t.length; e--; )
    Ae += te("-:,", t[e]);
  return Ae;
}, Na = (t) => (Da(t) & 15) << 18, _p = [
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
], bp = (t) => 1 << (~(Ae = _p.indexOf(t.replace(Pa, ":$2").slice(3, 8))) ? Ae : 17), yp = (t, e) => (n, r) => n | ((Ae = t("screens", W(r), "")) ? 1 << 27 | Oa(Pr(Ae)) : r == ":dark" ? 1 << 30 : (Ae = e[r] || r.replace(Ia, ":$2"))[0] == "@" ? Na(Ae) : bp(r)), wp = (t) => t[0] == "-" ? 0 : Da(t) + ((Ae = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Ae[1] || -!!Ae[2] : 0) + 1, li = (t, e) => e + "{" + t + "}", Sp = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, h) => (f = s(f), Array.isArray(d) ? V(d.filter(Boolean).map((m) => t(f, s(m), h)), ";") : t(f, s(d), h));
  let a;
  const c = (f, d, h, m, g) => {
    if (Array.isArray(m)) {
      m.forEach((_) => _ && c(f, d, h, _, g));
      return;
    }
    let v = "", x = 0, y = 0;
    m["@apply"] && (m = uo(Rt(ep(m["@apply"]), n), { ...m, "@apply": void 0 }, n)), Object.keys(m).forEach((_) => {
      const b = Rt(m[_], n);
      if (ba(_, b)) {
        if (b !== "" && _.length > 1) {
          const p = co(_);
          y += 1, x = Math.max(x, wp(p)), v = (v && v + ";") + l(p, b, g);
        }
      } else if (b)
        if (_ == ":global" && (_ = "@global"), _[0] == "@")
          if (_[1] == "g")
            c([], "", 0, b, g);
          else if (_[1] == "f")
            c([], _, 0, b, g);
          else if (_[1] == "k") {
            const p = a.length;
            c([], "", 0, b, g);
            const w = a.splice(p, a.length - p);
            a.push({
              r: li(V(w.map((k) => k.r), ""), _),
              p: w.reduce((k, E) => k + E.p, 0)
            });
          } else
            _[1] == "i" ? (Array.isArray(b) ? b : [b]).forEach((p) => p && a.push({ p: 0, r: `${_} ${p};` })) : (_[2] == "c" && (_ = Pr(n.theme("screens", W(_, 8).trim()))), c([...f, _], d, h | Oa(_) | Na(_), b, g));
        else
          c(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (p, w, k) => _.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (E, N, z) => (te(N, "&") ? N.replace(/&/g, w) : (w && w + " ") + N) + z) + k) : _, h, b, g);
    }), y && a.push({
      r: f.reduceRight(li, li(v, d)),
      p: h * (1 << 8) + ((Math.max(0, 15 - y) & 15) << 4 | (x || 15) & 15)
    });
  }, u = yp(r, e);
  return (f, d, h, m = 0) => (m <<= 28, a = [], c([], d ? "." + ya(d) : "", h ? h.v.reduceRight(u, m) : m, f, h && h.i), a);
}, Ep = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const a = Vh(i, l);
      try {
        t.insert(s, a), i.splice(a, 0, l);
      } catch (c) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: c }, r);
      }
    }
  };
}, ai = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, Cp = (t) => (typeof t == "string" ? { t: cp, a: Os, i: up }[t[1]] : t) || Os, kp = { _: { value: "", writable: !0 } }, $p = (t = {}) => {
  const e = gp(t.theme), n = Cp(t.mode), r = ai(t.hash, !1, !1, ri), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], a = {
    tw: (...k) => p(k),
    theme: (k, E, N) => {
      var z;
      const X = (z = e(k, E, N)) != null ? z : n.unknown(k, E == null || Array.isArray(E) ? E : E.split("."), N != null, a);
      return o.n && X && te("rg", (typeof X)[5]) ? `calc(${X} * -1)` : X;
    },
    tag: (k) => r ? r(k) : k,
    css: (k) => {
      s++;
      const E = l.length;
      try {
        (typeof k == "string" ? Ri([k]) : k).forEach(b);
        const N = Object.create(null, kp);
        for (let z = E; z < l.length; z++) {
          const X = l[z];
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
        l.length = E, s--;
      }
    }
  }, c = mp({ ...ip, ...t.plugins }, a), u = (k) => {
    const E = o;
    o = k;
    try {
      return Rt(c(k), a);
    } finally {
      o = E;
    }
  }, f = { ...sp, ...t.variants }, d = vp(t.darkMode || "media", f, a), h = Sp(ai(t.prefix, fp, nt), f, a), m = t.sheet || (typeof window > "u" ? ap() : Ta(t)), { init: g = (k) => k() } = m, v = Ep(m, n, g, a);
  let x;
  g((k = /* @__PURE__ */ new Map()) => x = k);
  const y = /* @__PURE__ */ new WeakMap(), _ = (k, E) => k == "_" ? void 0 : typeof E == "function" ? JSON.stringify(Rt(E, a), _) : E, b = (k) => {
    !s && o.v.length && (k = { ...k, v: [...o.v, ...k.v], $: "" }), k.$ || (k.$ = As(k, y.get(k.d)));
    let E = s ? null : x.get(k.$);
    if (E == null) {
      let N = u(k);
      if (k.$ || (k.$ = ri(JSON.stringify(N, _)), y.set(k.d, k.$), k.$ = As(k, k.$)), N && typeof N == "object")
        if (k.v = k.v.map(Ra), i && (k.i = i), N = d(N, k), s)
          l.push(N);
        else {
          const z = typeof k.d == "function" ? typeof N._ == "string" ? 1 : 3 : 2;
          E = r || typeof k.d == "function" ? (r || ri)(z + k.$) : k.$, h(N, E, k, z).forEach(v), N._ && (E += " " + N._);
        }
      else
        typeof N == "string" ? E = N : (E = k.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: E }, a)), s && typeof k.d != "function" && l.push(E);
      s || (x.set(k.$, E), _a(x, 3e4));
    }
    return E;
  }, p = (k) => V(Ri(k).map(b).filter(Boolean), " "), w = ai(t.preflight, Wh, !1);
  if (w) {
    const k = op(e), E = h(typeof w == "function" ? Rt(w(k, a), a) || k : { ...k, ...w });
    g((N = (E.forEach(v), !0)) => N);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, a),
    process: p
  };
}, Ua = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = $p(o));
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
}, { tw: Nt, setup: Ap } = /* @__PURE__ */ Ua();
function Tp(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[13].default
  ), s = Fe(
    o,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), ki(n, "display", "none"), S(n, "class", r = Nt` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), S(e, "class", "popup-element-wrapper"), ki(e, "position", "absolute");
    },
    m(l, a) {
      O(l, e, a), T(e, n), s && s.m(n, null), t[14](n), t[15](e), i = !0;
    },
    p(l, [a]) {
      s && s.p && (!i || a & /*$$scope*/
      4096) && Be(
        s,
        o,
        l,
        /*$$scope*/
        l[12],
        i ? ze(
          o,
          /*$$scope*/
          l[12],
          a,
          null
        ) : We(
          /*$$scope*/
          l[12]
        ),
        null
      ), (!i || a & /*popupClass*/
      1 && r !== (r = Nt` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      l[0]}`)) && S(n, "class", r);
    },
    i(l) {
      i || (A(s, l), i = !0);
    },
    o(l) {
      P(s, l), i = !1;
    },
    d(l) {
      l && R(e), s && s.d(l), t[14](null), t[15](null);
    }
  };
}
function xp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { sizeToAnchor: s = !1 } = e, { anchorElement: l = null } = e, { position: a = null } = e, { popupClass: c = "" } = e, { preferedVerticalAlignment: u = "top" } = e, { preferedHorizontalAlignment: f = "left" } = e, { positionOffset: d = { x: 0, y: 0 } } = e, h = Te("PopupContainerService", new vr(document.body)), m, g, v;
  function x() {
    const w = {
      backdrop: !1,
      closeOnClickOutside: o,
      positioning: s ? "anchor" : "custom",
      anchorElement: l,
      customPosition: s ? d : a,
      anchorHorizontal: f,
      anchorVertical: u
    };
    document.body.appendChild(m), n(1, m.style.display = "block", m), console.log(m.getBoundingClientRect(), m);
    const k = l == null ? void 0 : l.offsetWidth, E = m.offsetWidth;
    k && s && E < k && (console.log("setting width"), n(1, m.style.width = `${k}px`, m)), n(1, m.style.position = "static", m), g = h.openPopup("popup-container", m, w), g.afterClosed.then(() => {
      _(), v.appendChild(m), console.log("closing popup", m.getBoundingClientRect());
    });
  }
  function y() {
    g == null || g.close();
  }
  function _() {
    n(1, m.style.display = "none", m), n(1, m.style.position = "absolute", m), n(1, m.style.width = "auto", m);
  }
  function b(w) {
    ue[w ? "unshift" : "push"](() => {
      m = w, n(1, m);
    });
  }
  function p(w) {
    ue[w ? "unshift" : "push"](() => {
      v = w, n(2, v);
    });
  }
  return t.$$set = (w) => {
    "closeOnClick" in w && n(3, o = w.closeOnClick), "sizeToAnchor" in w && n(4, s = w.sizeToAnchor), "anchorElement" in w && n(5, l = w.anchorElement), "position" in w && n(6, a = w.position), "popupClass" in w && n(0, c = w.popupClass), "preferedVerticalAlignment" in w && n(7, u = w.preferedVerticalAlignment), "preferedHorizontalAlignment" in w && n(8, f = w.preferedHorizontalAlignment), "positionOffset" in w && n(9, d = w.positionOffset), "$$scope" in w && n(12, i = w.$$scope);
  }, [
    c,
    m,
    v,
    o,
    s,
    l,
    a,
    u,
    f,
    d,
    x,
    y,
    i,
    r,
    b,
    p
  ];
}
class Ma extends ce {
  constructor(e) {
    super(), ae(this, e, xp, Tp, le, {
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
function Pp(t) {
  Ht(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Ds(t) {
  let e, n;
  return {
    c() {
      e = I("div"), S(e, "class", n = ne(
        /*tw*/
        t[0]`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`
      ) + " svelte-oysah1");
    },
    m(r, i) {
      O(r, e, i);
    },
    p(r, i) {
      i & /*tw*/
      1 && n !== (n = ne(
        /*tw*/
        r[0]`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`
      ) + " svelte-oysah1") && S(e, "class", n);
    },
    d(r) {
      r && R(e);
    }
  };
}
function Ip(t) {
  let e, n, r, i, o;
  function s(a) {
    t[8](a);
  }
  let l = { tw: (
    /*tw*/
    t[0]
  ) };
  return (
    /*isSelected*/
    t[1] !== void 0 && (l.checked = /*isSelected*/
    t[1]), n = new Ln({ props: l }), ue.push(() => Zt(n, "checked", s)), {
      c() {
        e = I("div"), B(n.$$.fragment), S(e, "class", i = ne(
          /*tw*/
          t[0]`p-1`
        ) + " svelte-oysah1");
      },
      m(a, c) {
        O(a, e, c), L(n, e, null), o = !0;
      },
      p(a, c) {
        const u = {};
        c & /*tw*/
        1 && (u.tw = /*tw*/
        a[0]), !r && c & /*isSelected*/
        2 && (r = !0, u.checked = /*isSelected*/
        a[1], Qt(() => r = !1)), n.$set(u), (!o || c & /*tw*/
        1 && i !== (i = ne(
          /*tw*/
          a[0]`p-1`
        ) + " svelte-oysah1")) && S(e, "class", i);
      },
      i(a) {
        o || (A(n.$$.fragment, a), o = !0);
      },
      o(a) {
        P(n.$$.fragment, a), o = !1;
      },
      d(a) {
        a && R(e), F(n);
      }
    }
  );
}
function Rp(t) {
  let e, n, r, i, o, s, l, a, c = (
    /*isSelected*/
    t[1] && !/*multiple*/
    t[3] && Ds(t)
  ), u = (
    /*multiple*/
    t[3] && Ip(t)
  );
  const f = (
    /*#slots*/
    t[7].default
  ), d = Fe(
    f,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = I("div"), c && c.c(), n = U(), u && u.c(), r = U(), i = I("span"), d && d.c(), S(e, "class", o = ne(
        /*tw*/
        t[0]`flex hover:(${Yn}) items-center ${/*multiple*/
        t[3] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
        t[1] && !/*multiple*/
        t[3] ? Yn : ""}`
      ) + " svelte-oysah1");
    },
    m(h, m) {
      O(h, e, m), c && c.m(e, null), T(e, n), u && u.m(e, null), T(e, r), T(e, i), d && d.m(i, null), t[9](i), s = !0, l || (a = ie(
        e,
        "click",
        /*onClickOption*/
        t[4]
      ), l = !0);
    },
    p(h, [m]) {
      /*isSelected*/
      h[1] && !/*multiple*/
      h[3] ? c ? c.p(h, m) : (c = Ds(h), c.c(), c.m(e, n)) : c && (c.d(1), c = null), /*multiple*/
      h[3] && u.p(h, m), d && d.p && (!s || m & /*$$scope*/
      64) && Be(
        d,
        f,
        h,
        /*$$scope*/
        h[6],
        s ? ze(
          f,
          /*$$scope*/
          h[6],
          m,
          null
        ) : We(
          /*$$scope*/
          h[6]
        ),
        null
      ), (!s || m & /*tw, isSelected*/
      3 && o !== (o = ne(
        /*tw*/
        h[0]`flex hover:(${Yn}) items-center ${/*multiple*/
        h[3] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
        h[1] && !/*multiple*/
        h[3] ? Yn : ""}`
      ) + " svelte-oysah1")) && S(e, "class", o);
    },
    i(h) {
      s || (A(u), A(d, h), s = !0);
    },
    o(h) {
      P(u), P(d, h), s = !1;
    },
    d(h) {
      h && R(e), c && c.d(), u && u.d(), d && d.d(h), t[9](null), l = !1, a();
    }
  };
}
let Yn = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Op(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { tw: o } = e, { value: s = null } = e, l = !1, a = null, c = null, u, f;
  const d = Oe("audako:select:multiple"), h = Oe("audako:select:close"), m = Oe("audako:select:value"), g = Oe("audako:select:value:changed"), v = Oe("audako:select:displayValue");
  ha(() => {
    var p;
    f = (p = u.innerText) == null ? void 0 : p.trim(), v.subscribe((w) => {
      c = w;
    }), m.subscribe((w) => {
      a = w, d ? n(1, l = w == null ? void 0 : w.includes(s)) : n(1, l = w === s), y();
    });
  });
  function x(p) {
    p.preventDefault(), p.stopPropagation();
    let w = null;
    d ? l ? w = a.filter((k) => k !== s) : w = Array.isArray(a) ? [...a, s] : [s] : (w = s, h()), m.set(w), g.next(w);
  }
  function y() {
    if (d) {
      const p = c;
      l && !p.includes(f) ? v.set([...p, f]) : !l && p.includes(f) && v.set(p.filter((w) => w !== f));
    } else
      l && v.set(f);
  }
  function _(p) {
    l = p, n(1, l);
  }
  function b(p) {
    ue[p ? "unshift" : "push"](() => {
      u = p, n(2, u);
    });
  }
  return t.$$set = (p) => {
    "tw" in p && n(0, o = p.tw), "value" in p && n(5, s = p.value), "$$scope" in p && n(6, i = p.$$scope);
  }, [
    o,
    l,
    u,
    d,
    x,
    s,
    i,
    r,
    _,
    b
  ];
}
class Ha extends ce {
  constructor(e) {
    super(), ae(this, e, Op, Rp, le, { tw: 0, value: 5 }, Pp);
  }
}
function Ns(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const Dp = (t) => ({}), Us = (t) => ({});
function Np(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = j(e), r = U();
    },
    m(i, o) {
      O(i, n, o), O(i, r, o);
    },
    p(i, o) {
      o & /*options*/
      16 && e !== (e = /*option*/
      i[26].label + "") && ye(n, e);
    },
    d(i) {
      i && R(n), i && R(r);
    }
  };
}
function Ms(t) {
  let e, n;
  return e = new Ha({
    props: {
      tw: (
        /*tw*/
        t[5]
      ),
      value: (
        /*option*/
        t[26].value
      ),
      $$slots: { default: [Np] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*tw*/
      32 && (o.tw = /*tw*/
      r[5]), i & /*options*/
      16 && (o.value = /*option*/
      r[26].value), i & /*$$scope, options*/
      131088 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Up(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[13].default
  ), o = Fe(
    i,
    t,
    /*$$scope*/
    t[17],
    null
  );
  let s = (
    /*options*/
    t[4]
  ), l = [];
  for (let c = 0; c < s.length; c += 1)
    l[c] = Ms(Ns(t, s, c));
  const a = (c) => P(l[c], 1, 1, () => {
    l[c] = null;
  });
  return {
    c() {
      o && o.c(), e = U();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      n = xr();
    },
    m(c, u) {
      o && o.m(c, u), O(c, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(c, u);
      O(c, n, u), r = !0;
    },
    p(c, u) {
      if (o && o.p && (!r || u & /*$$scope*/
      131072) && Be(
        o,
        i,
        c,
        /*$$scope*/
        c[17],
        r ? ze(
          i,
          /*$$scope*/
          c[17],
          u,
          null
        ) : We(
          /*$$scope*/
          c[17]
        ),
        null
      ), u & /*tw, options*/
      48) {
        s = /*options*/
        c[4];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const d = Ns(c, s, f);
          l[f] ? (l[f].p(d, u), A(l[f], 1)) : (l[f] = Ms(d), l[f].c(), A(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (me(), f = s.length; f < l.length; f += 1)
          a(f);
        ve();
      }
    },
    i(c) {
      if (!r) {
        A(o, c);
        for (let u = 0; u < s.length; u += 1)
          A(l[u]);
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
      o && o.d(c), c && R(e), yt(l, c), c && R(n);
    }
  };
}
function Mp(t) {
  let e, n, r, i, o, s, l, a, c, u, f, d, h, m;
  const g = (
    /*#slots*/
    t[13].prefix
  ), v = Fe(
    g,
    t,
    /*$$scope*/
    t[17],
    Us
  );
  let x = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [Up] },
    $$scope: { ctx: t }
  };
  return f = new Ma({ props: x }), t[16](f), {
    c() {
      e = I("div"), v && v.c(), n = U(), r = I("input"), o = U(), s = I("div"), l = j("arrow_drop_down"), u = U(), B(f.$$.fragment), r.disabled = /*disabled*/
      t[6], S(
        r,
        "placeholder",
        /*placeholder*/
        t[0]
      ), r.readOnly = !0, S(r, "class", i = /*tw*/
      t[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      t[1]}`), S(s, "class", a = /*tw*/
      t[5]`material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      t[3]}`), S(e, "class", c = /*tw*/
      t[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      t[2]}`);
    },
    m(y, _) {
      O(y, e, _), v && v.m(e, null), T(e, n), T(e, r), pr(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), T(e, o), T(e, s), T(s, l), O(y, u, _), L(f, y, _), d = !0, h || (m = [
        ie(
          r,
          "input",
          /*input_input_handler*/
          t[14]
        ),
        ie(
          e,
          "click",
          /*openMenu*/
          t[10]
        )
      ], h = !0);
    },
    p(y, [_]) {
      v && v.p && (!d || _ & /*$$scope*/
      131072) && Be(
        v,
        g,
        y,
        /*$$scope*/
        y[17],
        d ? ze(
          g,
          /*$$scope*/
          y[17],
          _,
          Dp
        ) : We(
          /*$$scope*/
          y[17]
        ),
        Us
      ), (!d || _ & /*disabled*/
      64) && (r.disabled = /*disabled*/
      y[6]), (!d || _ & /*placeholder*/
      1) && S(
        r,
        "placeholder",
        /*placeholder*/
        y[0]
      ), (!d || _ & /*tw, textfield$class*/
      34 && i !== (i = /*tw*/
      y[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      y[1]}`)) && S(r, "class", i), _ & /*displayedValue*/
      128 && r.value !== /*displayedValue*/
      y[7] && pr(
        r,
        /*displayedValue*/
        y[7]
      ), (!d || _ & /*tw, suffixIcon$class*/
      40 && a !== (a = /*tw*/
      y[5]`material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      y[3]}`)) && S(s, "class", a), (!d || _ & /*tw, container$class*/
      36 && c !== (c = /*tw*/
      y[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      y[2]}`)) && S(e, "class", c);
      const b = {};
      _ & /*textfield*/
      256 && (b.anchorElement = /*textfield*/
      y[8]), _ & /*$$scope, options, tw*/
      131120 && (b.$$scope = { dirty: _, ctx: y }), f.$set(b);
    },
    i(y) {
      d || (A(v, y), A(f.$$.fragment, y), d = !0);
    },
    o(y) {
      P(v, y), P(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && R(e), v && v.d(y), t[15](null), y && R(u), t[16](null), F(f, y), h = !1, lt(m);
    }
  };
}
function Hp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: a = "" } = e, { container$class: c = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = Nt } = e, { disabled: h = !1 } = e, m = "", g, v, x = He(), y = mr(o);
  const _ = y.subscribe((D) => {
    n(11, o = D);
  });
  let b = new ke();
  const p = b.subscribe((D) => {
    x("valueChanged", D);
  });
  let w = mr(s ? [] : ""), k = w.subscribe((D) => {
    N(D);
  });
  function E(D) {
    D && (D.preventDefault(), D.stopPropagation()), !h && (v == null || v.openPopup());
  }
  function N(D) {
    if (D == null || D.length === 0) {
      n(7, m = null);
      return;
    }
    Array.isArray(D) ? n(7, m = D.join(", ")) : n(7, m = D);
  }
  ht("audako:select:multiple", s), ht("audako:select:value", y), ht("audako:select:value:changed", b), ht("audako:select:displayValue", w), ht("audako:select:close", () => v.closePopup()), wt(() => {
    _(), p.unsubscribe(), k();
  });
  function z() {
    m = this.value, n(7, m);
  }
  function X(D) {
    ue[D ? "unshift" : "push"](() => {
      g = D, n(8, g);
    });
  }
  function ee(D) {
    ue[D ? "unshift" : "push"](() => {
      v = D, n(9, v);
    });
  }
  return t.$$set = (D) => {
    "value" in D && n(11, o = D.value), "multiple" in D && n(12, s = D.multiple), "placeholder" in D && n(0, l = D.placeholder), "textfield$class" in D && n(1, a = D.textfield$class), "container$class" in D && n(2, c = D.container$class), "suffixIcon$class" in D && n(3, u = D.suffixIcon$class), "options" in D && n(4, f = D.options), "tw" in D && n(5, d = D.tw), "disabled" in D && n(6, h = D.disabled), "$$scope" in D && n(17, i = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    32 && ht("tw", d);
  }, [
    l,
    a,
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    v,
    E,
    o,
    s,
    r,
    z,
    X,
    ee,
    i
  ];
}
class ja extends ce {
  constructor(e) {
    super(), ae(this, e, Hp, Mp, le, {
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
function Hs(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function jp(t) {
  let e = (
    /*option*/
    t[18] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      O(r, n, i);
    },
    p(r, i) {
      i & /*pageSizeOptions*/
      8 && e !== (e = /*option*/
      r[18] + "") && ye(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function js(t) {
  let e, n;
  return e = new Ha({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [jp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*pageSizeOptions*/
      8 && (o.value = /*option*/
      r[18]), i & /*$$scope, pageSizeOptions*/
      2097160 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Lp(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = js(Hs(t, r, s));
  const o = (s) => P(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = xr();
    },
    m(s, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(s, l);
      O(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*pageSizeOptions*/
      8) {
        r = /*pageSizeOptions*/
        s[3];
        let a;
        for (a = 0; a < r.length; a += 1) {
          const c = Hs(s, r, a);
          i[a] ? (i[a].p(c, l), A(i[a], 1)) : (i[a] = js(c), i[a].c(), A(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (me(), a = r.length; a < i.length; a += 1)
          o(a);
        ve();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          A(i[l]);
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
      yt(i, s), s && R(e);
    }
  };
}
function Fp(t) {
  let e;
  return {
    c() {
      e = j("first_page");
    },
    m(n, r) {
      O(n, e, r);
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
      e = j("navigate_before");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Bp(t) {
  let e;
  return {
    c() {
      e = j("navigate_next");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Wp(t) {
  let e;
  return {
    c() {
      e = j("last_page");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Vp(t) {
  let e, n, r, i, o, s, l, a, c, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, h = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), m, g, v, x, y, _, b, p, w, k, E, N, z, X;
  function ee(M) {
    t[10](M);
  }
  let D = {
    tw: (
      /*tw*/
      t[5]
    ),
    textfield$class: (
      /*tw*/
      t[5]`text-xs text-gray-600`
    ),
    suffixIcon$class: (
      /*tw*/
      t[5]`!top-[2px] !text-[20px]`
    ),
    $$slots: { default: [Lp] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (D.value = /*pageSize*/
    t[0]), s = new ja({ props: D }), ue.push(() => Zt(s, "value", ee)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), b = new mt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Fp] },
        $$scope: { ctx: t }
      }
    }), b.$on(
      "click",
      /*click_handler*/
      t[12]
    ), w = new mt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [zp] },
        $$scope: { ctx: t }
      }
    }), w.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), E = new mt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Bp] },
        $$scope: { ctx: t }
      }
    }), E.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), z = new mt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Wp] },
        $$scope: { ctx: t }
      }
    }), z.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = I("div"), n = I("div"), r = j("Items per page:"), i = U(), o = I("div"), B(s.$$.fragment), a = U(), c = I("div"), f = j(u), d = j(" - "), m = j(h), g = U(), v = I("div"), x = j("of "), y = j(
          /*totalCount*/
          t[2]
        ), _ = U(), B(b.$$.fragment), p = U(), B(w.$$.fragment), k = U(), B(E.$$.fragment), N = U(), B(z.$$.fragment), S(
          n,
          "class",
          /*tw*/
          t[5]`mr-1 text-xs text-gray-600`
        ), S(
          o,
          "class",
          /*tw*/
          t[5]`w-[50px]`
        ), S(
          c,
          "class",
          /*tw*/
          t[5]`ml-4 text-xs mr-1 text-gray-600`
        ), S(
          v,
          "class",
          /*tw*/
          t[5]`text-xs mr-4 text-gray-600`
        ), S(
          e,
          "class",
          /*tw*/
          t[5]`flex w-full items-center justify-end pt-1`
        );
      },
      m(M, Y) {
        O(M, e, Y), T(e, n), T(n, r), T(e, i), T(e, o), L(s, o, null), T(e, a), T(e, c), T(c, f), T(c, d), T(c, m), T(e, g), T(e, v), T(v, x), T(v, y), T(e, _), L(b, e, null), T(e, p), L(w, e, null), T(e, k), L(E, e, null), T(e, N), L(z, e, null), X = !0;
      },
      p(M, [Y]) {
        const Ze = {};
        Y & /*$$scope, pageSizeOptions*/
        2097160 && (Ze.$$scope = { dirty: Y, ctx: M }), !l && Y & /*pageSize*/
        1 && (l = !0, Ze.value = /*pageSize*/
        M[0], Qt(() => l = !1)), s.$set(Ze), (!X || Y & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        M[1] * /*pageSize*/
        M[0] + 1 + "") && ye(f, u), (!X || Y & /*pageIndex, pageSize*/
        3) && h !== (h = /*pageIndex*/
        (M[1] + 1) * /*pageSize*/
        M[0] + "") && ye(m, h), (!X || Y & /*totalCount*/
        4) && ye(
          y,
          /*totalCount*/
          M[2]
        );
        const bn = {};
        Y & /*pageIndex*/
        2 && (bn.disabled = /*pageIndex*/
        M[1] === 0), Y & /*$$scope*/
        2097152 && (bn.$$scope = { dirty: Y, ctx: M }), b.$set(bn);
        const H = {};
        Y & /*pageIndex*/
        2 && (H.disabled = /*pageIndex*/
        M[1] === 0), Y & /*$$scope*/
        2097152 && (H.$$scope = { dirty: Y, ctx: M }), w.$set(H);
        const q = {};
        Y & /*pageIndex, lastPageIndex*/
        18 && (q.disabled = /*pageIndex*/
        M[1] === /*lastPageIndex*/
        M[4]), Y & /*$$scope*/
        2097152 && (q.$$scope = { dirty: Y, ctx: M }), E.$set(q);
        const at = {};
        Y & /*pageIndex, lastPageIndex*/
        18 && (at.disabled = /*pageIndex*/
        M[1] === /*lastPageIndex*/
        M[4]), Y & /*$$scope*/
        2097152 && (at.$$scope = { dirty: Y, ctx: M }), z.$set(at);
      },
      i(M) {
        X || (A(s.$$.fragment, M), A(b.$$.fragment, M), A(w.$$.fragment, M), A(E.$$.fragment, M), A(z.$$.fragment, M), X = !0);
      },
      o(M) {
        P(s.$$.fragment, M), P(b.$$.fragment, M), P(w.$$.fragment, M), P(E.$$.fragment, M), P(z.$$.fragment, M), X = !1;
      },
      d(M) {
        M && R(e), F(s), F(b), F(w), F(E), F(z);
      }
    }
  );
}
function Ls(t, e) {
  return console.log(), Math.max(Math.floor(e / t) - 1, 0);
}
function qp(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Oe("tw"), l, { pageSizeOptions: a = [10, 20, 50, 100] } = e, c = He();
  function u(p) {
    n(1, r = r + p), m();
  }
  function f() {
    n(1, r = 0), m();
  }
  function d() {
    n(1, r = l), m();
  }
  function h(p) {
    console.log("changePageSize", p), n(0, i = p), n(4, l = Ls(i, o)), n(1, r = Math.min(r, l)), m();
  }
  function m() {
    c("changePage", { pageIndex: r, pageSize: i });
  }
  function g(p) {
    i = p, n(0, i);
  }
  const v = (p) => h(p.detail), x = () => f(), y = () => u(-1), _ = () => u(1), b = () => d();
  return t.$$set = (p) => {
    "pageIndex" in p && n(1, r = p.pageIndex), "pageSize" in p && n(0, i = p.pageSize), "totalCount" in p && n(2, o = p.totalCount), "pageSizeOptions" in p && n(3, a = p.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & /*pageSize, totalCount*/
    5 && n(4, l = Ls(i, o)), t.$$.dirty & /*pageSize*/
    1 && console.log("pageSize", i);
  }, [
    i,
    r,
    o,
    a,
    l,
    s,
    u,
    f,
    d,
    h,
    g,
    v,
    x,
    y,
    _,
    b
  ];
}
class Gp extends ce {
  constructor(e) {
    super(), ae(this, e, qp, Vp, le, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function Jp(t) {
  Ht(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Fs(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function zs(t) {
  let e, n;
  return e = new xi({
    props: {
      container$class: (
        /*tw*/
        t[9]`basis-[50px] flex-[0] cursor-default`
      ),
      id: "Name",
      $$slots: { default: [Xp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*masterToggleState*/
      32 | i[1] & /*$$scope*/
      64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Xp(t) {
  let e, n;
  return e = new Ln({
    props: {
      checked: (
        /*masterToggleState*/
        t[5] === "checked"
      ),
      indeterminate: (
        /*masterToggleState*/
        t[5] === "indeterminate"
      )
    }
  }), e.$on(
    "change",
    /*change_handler*/
    t[15]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*masterToggleState*/
      32 && (o.checked = /*masterToggleState*/
      r[5] === "checked"), i[0] & /*masterToggleState*/
      32 && (o.indeterminate = /*masterToggleState*/
      r[5] === "indeterminate"), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Kp(t) {
  let e;
  return {
    c() {
      e = j("Name");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Yp(t) {
  let e;
  return {
    c() {
      e = j("Group");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Qp(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && zs(t)
  );
  return n = new xi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [Kp] },
      $$scope: { ctx: t }
    }
  }), i = new xi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [Yp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = U(), B(n.$$.fragment), r = U(), B(i.$$.fragment);
    },
    m(l, a) {
      s && s.m(l, a), O(l, e, a), L(n, l, a), O(l, r, a), L(i, l, a), o = !0;
    },
    p(l, a) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, a), a[0] & /*selectMultiple*/
      1 && A(s, 1)) : (s = zs(l), s.c(), A(s, 1), s.m(e.parentNode, e)) : s && (me(), P(s, 1, 1, () => {
        s = null;
      }), ve());
      const c = {};
      a[1] & /*$$scope*/
      64 && (c.$$scope = { dirty: a, ctx: l }), n.$set(c);
      const u = {};
      a[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: a, ctx: l }), i.$set(u);
    },
    i(l) {
      o || (A(s), A(n.$$.fragment, l), A(i.$$.fragment, l), o = !0);
    },
    o(l) {
      P(s), P(n.$$.fragment, l), P(i.$$.fragment, l), o = !1;
    },
    d(l) {
      s && s.d(l), l && R(e), F(n, l), l && R(r), F(i, l);
    }
  };
}
function Zp(t) {
  let e;
  return {
    c() {
      e = I("div"), S(e, "class", ne(
        /*tw*/
        t[9]`w-full h-[3px]`
      ) + " svelte-15xwzh7");
    },
    m(n, r) {
      O(n, e, r);
    },
    p: J,
    d(n) {
      n && R(e);
    }
  };
}
function eg(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = I("div"), S(n, "class", ne(
        /*tw*/
        t[9]`progress-bar-value-animation wfull h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), S(e, "class", ne(
        /*tw*/
        t[9]`w-full h-[3px] overflow-hidden bg-blue-200`
      ) + " svelte-15xwzh7");
    },
    m(r, i) {
      O(r, e, i), T(e, n);
    },
    p: J,
    d(r) {
      r && R(e);
    }
  };
}
function Bs(t) {
  let e, n;
  return e = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`basis-[50px] flex-[0]`
      ),
      $$slots: { default: [tg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*selectedEntitiesInPageLookup, entities*/
      24 | i[1] & /*$$scope*/
      64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function tg(t) {
  let e, n;
  return e = new Ln({
    props: {
      checked: (
        /*selectedEntitiesInPageLookup*/
        t[4][
          /*entity*/
          t[33].Id
        ]
      )
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*selectedEntitiesInPageLookup, entities*/
      24 && (o.checked = /*selectedEntitiesInPageLookup*/
      r[4][
        /*entity*/
        r[33].Id
      ]), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function ng(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = I("div"), r = j(n), S(e, "class", ne(
        /*tw*/
        t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(o, s) {
      O(o, e, s), T(e, r);
    },
    p(o, s) {
      var l;
      s[0] & /*entities*/
      8 && n !== (n = /*entity*/
      ((l = o[33].Name) == null ? void 0 : l.Value) + "") && ye(r, n);
    },
    d(o) {
      o && R(e);
    }
  };
}
function rg(t) {
  return { c: J, m: J, p: J, d: J };
}
function ig(t) {
  let e = (
    /*name*/
    t[36] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      O(r, n, i);
    },
    p(r, i) {
      i[0] & /*entities*/
      8 && e !== (e = /*name*/
      r[36] + "") && ye(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function og(t) {
  return { c: J, m: J, p: J, d: J };
}
function sg(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: og,
    then: ig,
    catch: rg,
    value: 36
  };
  return gr(n = /*nameService*/
  t[8].resolveName(
    G.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = I("span"), r.block.c(), S(e, "class", ne(
        /*tw*/
        t[9]` text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      O(i, e, o), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null;
    },
    p(i, o) {
      t = i, r.ctx = t, o[0] & /*entities*/
      8 && n !== (n = /*nameService*/
      t[8].resolveName(
        G.Group,
        /*entity*/
        t[33].GroupId
      )) && gr(n, r) || pa(r, t, o);
    },
    d(i) {
      i && R(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function lg(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && Bs(t)
  );
  return n = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [ng] },
      $$scope: { ctx: t }
    }
  }), i = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [sg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = U(), B(n.$$.fragment), r = U(), B(i.$$.fragment), o = U();
    },
    m(a, c) {
      l && l.m(a, c), O(a, e, c), L(n, a, c), O(a, r, c), L(i, a, c), O(a, o, c), s = !0;
    },
    p(a, c) {
      /*selectMultiple*/
      a[0] ? l ? (l.p(a, c), c[0] & /*selectMultiple*/
      1 && A(l, 1)) : (l = Bs(a), l.c(), A(l, 1), l.m(e.parentNode, e)) : l && (me(), P(l, 1, 1, () => {
        l = null;
      }), ve());
      const u = {};
      c[0] & /*entities*/
      8 | c[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: c, ctx: a }), n.$set(u);
      const f = {};
      c[0] & /*entities*/
      8 | c[1] & /*$$scope*/
      64 && (f.$$scope = { dirty: c, ctx: a }), i.$set(f);
    },
    i(a) {
      s || (A(l), A(n.$$.fragment, a), A(i.$$.fragment, a), s = !0);
    },
    o(a) {
      P(l), P(n.$$.fragment, a), P(i.$$.fragment, a), s = !1;
    },
    d(a) {
      l && l.d(a), a && R(e), F(n, a), a && R(r), F(i, a), a && R(o);
    }
  };
}
function Ws(t) {
  let e, n;
  function r() {
    return (
      /*click_handler*/
      t[16](
        /*entity*/
        t[33]
      )
    );
  }
  return e = new Ph({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [lg] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", r), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, o) {
      t = i;
      const s = {};
      o[0] & /*entities, selectedEntitiesInPageLookup, selectMultiple*/
      25 | o[1] & /*$$scope*/
      64 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      P(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function ag(t) {
  let e, n, r, i, o;
  e = new Eh({
    props: {
      $$slots: { default: [Qp] },
      $$scope: { ctx: t }
    }
  });
  function s(d, h) {
    return (
      /*loading*/
      d[7] ? eg : Zp
    );
  }
  let l = s(t), a = l(t), c = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < c.length; d += 1)
    u[d] = Ws(Fs(t, c, d));
  const f = (d) => P(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      B(e.$$.fragment), n = U(), a.c(), r = U();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = xr();
    },
    m(d, h) {
      L(e, d, h), O(d, n, h), a.m(d, h), O(d, r, h);
      for (let m = 0; m < u.length; m += 1)
        u[m] && u[m].m(d, h);
      O(d, i, h), o = !0;
    },
    p(d, h) {
      const m = {};
      if (h[0] & /*masterToggleState, selectMultiple*/
      33 | h[1] & /*$$scope*/
      64 && (m.$$scope = { dirty: h, ctx: d }), e.$set(m), l === (l = s(d)) && a ? a.p(d, h) : (a.d(1), a = l(d), a && (a.c(), a.m(r.parentNode, r))), h[0] & /*tw, onEntitySelected, entities, nameService, selectedEntitiesInPageLookup, selectMultiple*/
      1817) {
        c = /*entities*/
        d[3];
        let g;
        for (g = 0; g < c.length; g += 1) {
          const v = Fs(d, c, g);
          u[g] ? (u[g].p(v, h), A(u[g], 1)) : (u[g] = Ws(v), u[g].c(), A(u[g], 1), u[g].m(i.parentNode, i));
        }
        for (me(), g = c.length; g < u.length; g += 1)
          f(g);
        ve();
      }
    },
    i(d) {
      if (!o) {
        A(e.$$.fragment, d);
        for (let h = 0; h < c.length; h += 1)
          A(u[h]);
        o = !0;
      }
    },
    o(d) {
      P(e.$$.fragment, d), u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        P(u[h]);
      o = !1;
    },
    d(d) {
      F(e, d), d && R(n), a.d(d), d && R(r), yt(u, d), d && R(i);
    }
  };
}
function cg(t) {
  let e, n;
  return e = new Gp({
    props: {
      slot: "pagination",
      pageIndex: (
        /*pageIndex*/
        t[1]
      ),
      pageSize: (
        /*pageSize*/
        t[2]
      ),
      totalCount: (
        /*totalCount*/
        t[6]
      )
    }
  }), e.$on(
    "changePage",
    /*onPageChanged*/
    t[12]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*pageIndex*/
      2 && (o.pageIndex = /*pageIndex*/
      r[1]), i[0] & /*pageSize*/
      4 && (o.pageSize = /*pageSize*/
      r[2]), i[0] & /*totalCount*/
      64 && (o.totalCount = /*totalCount*/
      r[6]), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function ug(t) {
  let e, n, r;
  return n = new bh({
    props: {
      $$slots: {
        pagination: [cg],
        default: [ag]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = I("div"), B(n.$$.fragment), S(e, "class", ne(
        /*tw*/
        t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      O(i, e, o), L(n, e, null), r = !0;
    },
    p(i, o) {
      const s = {};
      o[0] & /*pageIndex, pageSize, totalCount, entities, selectedEntitiesInPageLookup, selectMultiple, loading, masterToggleState*/
      255 | o[1] & /*$$scope*/
      64 && (s.$$scope = { dirty: o, ctx: i }), n.$set(s);
    },
    i(i) {
      r || (A(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && R(e), F(n);
    }
  };
}
function fg(t, e, n) {
  let r = Te(Dt), i = Te(In), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, a = Oe("tw"), c = [], u = new ke(), f = [], d = {}, h = "unchecked", m, g, v, x = !1, y = 0, _ = 10, b = 0, p = un(), w = It, k = !1, E = !0, N = new ke();
  Pt.pipe(ot(N)).subscribe((H) => {
    f = H.selectedEntities, Y(), D();
  }), Zl([w.asObservable(), p.asObservable()]).pipe(ot(N)).subscribe(([H, q]) => {
    var at;
    console.log("combineLatest"), v = q.selectedGroup, g = (at = q.selectedGroup) == null ? void 0 : at.Id, m = q.filter, x = H.queryWithSubGroups, k = !0, n(1, y = 0), u.next();
  });
  function z() {
    const H = { $and: [] };
    x ? H.$and.push({ Path: g }) : H.$and.push({ GroupId: g }), m && H.$and.push({
      $or: [
        {
          "Name.Value": { $regex: m, $options: "i" }
        },
        {
          "Description.Value": { $regex: m, $options: "i" }
        }
      ]
    }), l && H.$and.push(l);
    const q = {
      limit: _,
      skip: y * _
    };
    return console.log(o), Mt(r.queryConfiguration(o, H, q));
  }
  function X(H) {
    s ? (f.find((q) => q.Id === H.Id) ? (f = f.filter((q) => q.Id !== H.Id), n(4, d[H.Id] = !1, d)) : (f.push(H), n(4, d[H.Id] = !0, d)), D()) : f = [H], Pt.update((q) => ({ ...q, selectedEntities: f }));
  }
  function ee(H) {
    H ? f = [
      ...f,
      ...c.filter((q) => !d[q.Id])
    ] : f = f.filter((q) => !c.find((at) => at.Id === q.Id)), Y(), D(), Pt.update((q) => ({ ...q, selectedEntities: f }));
  }
  function D() {
    let H = Object.keys(d).filter((q) => d[q]);
    H.length === 0 ? n(5, h = "unchecked") : H.length === c.length ? n(5, h = "checked") : n(5, h = "indeterminate");
  }
  function M(H) {
    const q = H.detail;
    q.pageSize != _ ? (n(1, y = 0), n(2, _ = q.pageSize)) : n(1, y = q.pageIndex);
  }
  function Y() {
    n(4, d = {}), c.forEach((H) => {
      n(4, d[H.Id] = f.find((q) => q.Id === H.Id) != null, d);
    });
  }
  wt(() => {
    N.next(), N.complete();
  }), u.pipe(ot(N), Tn(() => k && !!g), xf(250), Af(() => n(7, E = !0)), ra(() => z())).subscribe((H) => {
    n(7, E = !1), n(3, c = H.data), Y(), D(), o === G.Group && c.unshift(v), n(6, b = H.total);
  });
  const Ze = (H) => {
    var q;
    return ee((q = H.detail) == null ? void 0 : q.checked);
  }, bn = (H) => X(H);
  return t.$$set = (H) => {
    "entityType" in H && n(13, o = H.entityType), "selectMultiple" in H && n(0, s = H.selectMultiple), "additionalFilter" in H && n(14, l = H.additionalFilter);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pageIndex*/
    2 && (n(1, y), n(24, u), n(2, _), u.next()), t.$$.dirty[0] & /*pageSize*/
    4 && (n(2, _), n(24, u), n(1, y = 0), u.next());
  }, [
    s,
    y,
    _,
    c,
    d,
    h,
    b,
    E,
    i,
    a,
    X,
    ee,
    M,
    o,
    l,
    Ze,
    bn
  ];
}
class dg extends ce {
  constructor(e) {
    super(), ae(
      this,
      e,
      fg,
      ug,
      le,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      Jp,
      [-1, -1]
    );
  }
}
function Vs(t) {
  let e, n, r, i;
  n = new mt({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && qs(t)
  );
  return {
    c() {
      e = I("div"), B(n.$$.fragment), r = U(), o && o.c(), S(
        e,
        "class",
        /*tw*/
        t[5]`mx-2 relative`
      );
    },
    m(s, l) {
      O(s, e, l), L(n, e, null), T(e, r), o && o.m(e, null), i = !0;
    },
    p(s, l) {
      /*selectedEntities*/
      s[4].length > 0 ? o ? o.p(s, l) : (o = qs(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    i(s) {
      i || (A(n.$$.fragment, s), i = !0);
    },
    o(s) {
      P(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && R(e), F(n), o && o.d();
    }
  };
}
function qs(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = I("div"), r = j(n), S(
        e,
        "class",
        /*tw*/
        t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`
      );
    },
    m(i, o) {
      O(i, e, o), T(e, r);
    },
    p(i, o) {
      o & /*selectedEntities*/
      16 && n !== (n = /*selectedEntities*/
      i[4].length + "") && ye(r, n);
    },
    d(i) {
      i && R(e);
    }
  };
}
function hg(t) {
  let e, n, r, i, o, s, l, a, c, u, f, d, h, m, g, v = (
    /*selectMultiple*/
    t[0] && Vs(t)
  );
  function x(_) {
    t[11](_);
  }
  let y = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (y.checked = /*withSubGroups*/
    t[1]), f = new Ln({ props: y }), ue.push(() => Zt(f, "checked", x)), {
      c() {
        e = I("div"), n = I("div"), r = I("div"), i = I("span"), o = j("search"), s = U(), l = I("input"), a = U(), v && v.c(), c = U(), u = I("div"), B(f.$$.fragment), S(
          i,
          "class",
          /*tw*/
          t[5]`material-symbols-rounded mr-2`
        ), S(l, "placeholder", "Search"), S(
          l,
          "class",
          /*tw*/
          t[5]`w-full outline-none`
        ), S(
          r,
          "class",
          /*tw*/
          t[5]`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`
        ), S(
          n,
          "class",
          /*tw*/
          t[5]`flex items-center`
        ), S(
          u,
          "class",
          /*tw*/
          t[5]`flex justify-end mt-2`
        ), S(
          e,
          "class",
          /*tw*/
          t[5]`flex flex-col`
        );
      },
      m(_, b) {
        O(_, e, b), T(e, n), T(n, r), T(r, i), T(i, o), T(r, s), T(r, l), t[8](l), pr(
          l,
          /*filter*/
          t[2]
        ), T(n, a), v && v.m(n, null), T(e, c), T(e, u), L(f, u, null), h = !0, m || (g = ie(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), m = !0);
      },
      p(_, [b]) {
        b & /*filter*/
        4 && l.value !== /*filter*/
        _[2] && pr(
          l,
          /*filter*/
          _[2]
        ), /*selectMultiple*/
        _[0] ? v ? (v.p(_, b), b & /*selectMultiple*/
        1 && A(v, 1)) : (v = Vs(_), v.c(), A(v, 1), v.m(n, null)) : v && (me(), P(v, 1, 1, () => {
          v = null;
        }), ve());
        const p = {};
        !d && b & /*withSubGroups*/
        2 && (d = !0, p.checked = /*withSubGroups*/
        _[1], Qt(() => d = !1)), f.$set(p);
      },
      i(_) {
        h || (A(v), A(f.$$.fragment, _), h = !0);
      },
      o(_) {
        P(v), P(f.$$.fragment, _), h = !1;
      },
      d(_) {
        _ && R(e), t[8](null), v && v.d(), F(f), m = !1, g();
      }
    }
  );
}
function pg(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = Oe("tw"), s = He(), l = un(), a = !1, c = l.value.filter, u, f = new ke(), d = new ke(), h = [];
  It.pipe(ot(f)).subscribe((p) => {
    n(1, a = p.queryWithSubGroups);
  }), d.pipe(ot(f), _f(200)).subscribe((p) => {
    l.update((w) => ({ ...w, filter: p }));
  }), Pt.pipe(ot(f)).subscribe((p) => {
    n(4, h = p.selectedEntities);
  });
  function m(p) {
    console.log("onSubGroupsToggled", p), p != It.value.queryWithSubGroups && It.update((w) => ({
      ...w,
      queryWithSubGroups: p
    }));
  }
  function g() {
    s("acceptSelection");
  }
  ha(() => {
    v();
  });
  function v() {
    u && setTimeout(
      () => {
        u.focus(), u.select();
      },
      0
    );
  }
  wt(() => {
    f.next(), f.complete();
  });
  function x(p) {
    ue[p ? "unshift" : "push"](() => {
      u = p, n(3, u);
    });
  }
  function y() {
    c = this.value, n(2, c);
  }
  const _ = () => g();
  function b(p) {
    a = p, n(1, a);
  }
  return t.$$set = (p) => {
    "entityType" in p && n(7, r = p.entityType), "selectMultiple" in p && n(0, i = p.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*filter*/
    4 && d.next(c), t.$$.dirty & /*withSubGroups*/
    2 && m(a);
  }, [
    i,
    a,
    c,
    u,
    h,
    o,
    g,
    r,
    x,
    y,
    _,
    b
  ];
}
class gg extends ce {
  constructor(e) {
    super(), ae(this, e, pg, hg, le, { entityType: 7, selectMultiple: 0 });
  }
}
function Gs(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function Js(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function Xs(t) {
  let e, n;
  return e = new mt({
    props: {
      size: "small",
      $$slots: { default: [mg] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*$$scope*/
      1048576 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function mg(t) {
  let e;
  return {
    c() {
      e = j("arrow_back");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Ks(t) {
  let e, n = (
    /*tenant*/
    t[15].Name + ""
  ), r, i = (
    /*i*/
    t[19] == /*tenantPath*/
    t[2].length - 1 ? "" : " /"
  ), o, s, l, a, c;
  function u() {
    return (
      /*click_handler_1*/
      t[9](
        /*tenant*/
        t[15]
      )
    );
  }
  return {
    c() {
      e = I("div"), r = j(n), o = j(i), s = U(), S(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      O(f, e, d), T(e, r), T(e, o), T(e, s), a || (c = ie(e, "click", u), a = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && ye(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && ye(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && S(e, "class", l);
    },
    d(f) {
      f && R(e), a = !1, c();
    }
  };
}
function Ys(t) {
  let e, n, r;
  function i(...o) {
    return (
      /*click_handler_2*/
      t[10](
        /*tenant*/
        t[15],
        ...o
      )
    );
  }
  return n = new mt({
    props: {
      $$slots: { default: [vg] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = I("div"), B(n.$$.fragment);
    },
    m(o, s) {
      O(o, e, s), L(n, e, null), r = !0;
    },
    p(o, s) {
      t = o;
      const l = {};
      s & /*$$scope*/
      1048576 && (l.$$scope = { dirty: s, ctx: t }), n.$set(l);
    },
    i(o) {
      r || (A(n.$$.fragment, o), r = !0);
    },
    o(o) {
      P(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(e), F(n);
    }
  };
}
function vg(t) {
  let e;
  return {
    c() {
      e = j("done");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Qs(t) {
  var m;
  let e, n, r = (
    /*tenant*/
    ((m = t[15]) == null ? void 0 : m.Name) + ""
  ), i, o, s, l, a, c, u, f, d = (
    /*tenant*/
    t[15].Root && Ys(t)
  );
  function h() {
    return (
      /*click_handler_3*/
      t[11](
        /*tenant*/
        t[15]
      )
    );
  }
  return {
    c() {
      e = I("div"), n = I("div"), i = j(r), s = U(), d && d.c(), l = U(), S(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), S(e, "class", a = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(g, v) {
      O(g, e, v), T(e, n), T(n, i), T(e, s), d && d.m(e, null), T(e, l), c = !0, u || (f = ie(e, "click", h), u = !0);
    },
    p(g, v) {
      var x;
      t = g, (!c || v & /*tenants*/
      8) && r !== (r = /*tenant*/
      ((x = t[15]) == null ? void 0 : x.Name) + "") && ye(i, r), (!c || v & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && S(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, v), v & /*tenants*/
      8 && A(d, 1)) : (d = Ys(t), d.c(), A(d, 1), d.m(e, l)) : d && (me(), P(d, 1, 1, () => {
        d = null;
      }), ve()), (!c || v & /*tw*/
      2 && a !== (a = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && S(e, "class", a);
    },
    i(g) {
      c || (A(d), c = !0);
    },
    o(g) {
      P(d), c = !1;
    },
    d(g) {
      g && R(e), d && d.d(), u = !1, f();
    }
  };
}
function _g(t) {
  let e, n, r, i, o, s, l, a, c, u, f, d, h, m, g, v = (
    /*allowBack*/
    t[0] && Xs(t)
  ), x = (
    /*tenantPath*/
    t[2]
  ), y = [];
  for (let w = 0; w < x.length; w += 1)
    y[w] = Ks(Js(t, x, w));
  let _ = (
    /*tenants*/
    t[3]
  ), b = [];
  for (let w = 0; w < _.length; w += 1)
    b[w] = Qs(Gs(t, _, w));
  const p = (w) => P(b[w], 1, 1, () => {
    b[w] = null;
  });
  return {
    c() {
      e = I("div"), n = I("div"), v && v.c(), r = U(), i = I("div"), o = j("Mandant auswählen"), a = U(), c = I("div");
      for (let w = 0; w < y.length; w += 1)
        y[w].c();
      f = U(), d = I("div");
      for (let w = 0; w < b.length; w += 1)
        b[w].c();
      S(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), S(n, "class", l = /*tw*/
      t[1]`flex items-center`), S(c, "class", u = /*tw*/
      t[1]`flex mb-1`), ki(d, "grid-auto-rows", "60px"), S(d, "class", h = /*tw*/
      t[1]`grid grid-cols-2 gap-2 h-full overflow-auto`), S(e, "class", m = /*tw*/
      t[1]`w-full overflow-hidden`);
    },
    m(w, k) {
      O(w, e, k), T(e, n), v && v.m(n, null), T(n, r), T(n, i), T(i, o), T(e, a), T(e, c);
      for (let E = 0; E < y.length; E += 1)
        y[E] && y[E].m(c, null);
      T(e, f), T(e, d);
      for (let E = 0; E < b.length; E += 1)
        b[E] && b[E].m(d, null);
      g = !0;
    },
    p(w, [k]) {
      if (/*allowBack*/
      w[0] ? v ? (v.p(w, k), k & /*allowBack*/
      1 && A(v, 1)) : (v = Xs(w), v.c(), A(v, 1), v.m(n, r)) : v && (me(), P(v, 1, 1, () => {
        v = null;
      }), ve()), (!g || k & /*tw*/
      2 && s !== (s = /*tw*/
      w[1]`font-bold text-gray-600 text-lg`)) && S(i, "class", s), (!g || k & /*tw*/
      2 && l !== (l = /*tw*/
      w[1]`flex items-center`)) && S(n, "class", l), k & /*tw, selectTenantInPath, tenantPath*/
      70) {
        x = /*tenantPath*/
        w[2];
        let E;
        for (E = 0; E < x.length; E += 1) {
          const N = Js(w, x, E);
          y[E] ? y[E].p(N, k) : (y[E] = Ks(N), y[E].c(), y[E].m(c, null));
        }
        for (; E < y.length; E += 1)
          y[E].d(1);
        y.length = x.length;
      }
      if ((!g || k & /*tw*/
      2 && u !== (u = /*tw*/
      w[1]`flex mb-1`)) && S(c, "class", u), k & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        _ = /*tenants*/
        w[3];
        let E;
        for (E = 0; E < _.length; E += 1) {
          const N = Gs(w, _, E);
          b[E] ? (b[E].p(N, k), A(b[E], 1)) : (b[E] = Qs(N), b[E].c(), A(b[E], 1), b[E].m(d, null));
        }
        for (me(), E = _.length; E < b.length; E += 1)
          p(E);
        ve();
      }
      (!g || k & /*tw*/
      2 && h !== (h = /*tw*/
      w[1]`grid grid-cols-2 gap-2 h-full overflow-auto`)) && S(d, "class", h), (!g || k & /*tw*/
      2 && m !== (m = /*tw*/
      w[1]`w-full overflow-hidden`)) && S(e, "class", m);
    },
    i(w) {
      if (!g) {
        A(v);
        for (let k = 0; k < _.length; k += 1)
          A(b[k]);
        g = !0;
      }
    },
    o(w) {
      P(v), b = b.filter(Boolean);
      for (let k = 0; k < b.length; k += 1)
        P(b[k]);
      g = !1;
    },
    d(w) {
      w && R(e), v && v.d(), yt(y, w), yt(b, w);
    }
  };
}
function bg(t, e, n) {
  let r = Te(Pn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const a = He();
  async function c() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const _ = y[0];
      if (_.Root == null) {
        f(_);
        return;
      }
    }
    n(2, s = [new rc({ Id: "start", Name: "Start" })]), n(3, l = y);
  }
  async function u(y) {
    const _ = await r.getNextTenants(y.Id);
    n(3, l = _);
  }
  async function f(y) {
    n(2, s = [...s, y]), u(y);
  }
  async function d(y) {
    if (y.Id == "start") {
      c();
      return;
    }
    const _ = s.findIndex((b) => b.Id === y.Id);
    n(2, s = s.slice(0, _ + 1)), u(y);
  }
  function h(y, _) {
    console.log(y, _), y.detail.stopPropagation(), a("tenantSelected", { tenant: _ });
  }
  c();
  const m = () => a("back"), g = (y) => d(y), v = (y, _) => h(_, y), x = (y) => f(y);
  return t.$$set = (y) => {
    "allowBack" in y && n(0, i = y.allowBack), "tw" in y && n(1, o = y.tw);
  }, [
    i,
    o,
    s,
    l,
    a,
    f,
    d,
    h,
    m,
    g,
    v,
    x
  ];
}
let La = class extends ce {
  constructor(e) {
    super(), ae(this, e, bg, _g, le, { allowBack: 0, tw: 1 });
  }
};
function yg(t) {
  let e, n, r, i, o, s, l, a, c, u, f, d, h, m;
  return n = new gh({
    props: {
      selectMultiple: (
        /*selectMultiple*/
        t[1]
      ),
      entityType: (
        /*entityType*/
        t[0]
      ),
      selectedTenant: (
        /*selectedTenant*/
        t[4]
      )
    }
  }), n.$on(
    "changeTenant",
    /*changeTenant_handler*/
    t[11]
  ), l = new gg({
    props: {
      entityType: (
        /*entityType*/
        t[0]
      ),
      selectMultiple: (
        /*selectMultiple*/
        t[1]
      )
    }
  }), l.$on(
    "acceptSelection",
    /*acceptSelection_handler*/
    t[12]
  ), u = new dg({
    props: {
      selectMultiple: (
        /*selectMultiple*/
        t[1]
      ),
      entityType: (
        /*entityType*/
        t[0]
      ),
      additionalFilter: (
        /*additionalFilter*/
        t[2]
      )
    }
  }), {
    c() {
      e = I("div"), B(n.$$.fragment), i = U(), o = I("div"), s = I("div"), B(l.$$.fragment), a = U(), c = I("div"), B(u.$$.fragment), S(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), S(c, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), S(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), S(o, "class", h = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(g, v) {
      O(g, e, v), L(n, e, null), O(g, i, v), O(g, o, v), T(o, s), L(l, s, null), T(s, a), T(s, c), L(u, c, null), m = !0;
    },
    p(g, v) {
      const x = {};
      v & /*selectMultiple*/
      2 && (x.selectMultiple = /*selectMultiple*/
      g[1]), v & /*entityType*/
      1 && (x.entityType = /*entityType*/
      g[0]), v & /*selectedTenant*/
      16 && (x.selectedTenant = /*selectedTenant*/
      g[4]), n.$set(x), (!m || v & /*tw*/
      8 && r !== (r = /*tw*/
      g[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && S(e, "class", r);
      const y = {};
      v & /*entityType*/
      1 && (y.entityType = /*entityType*/
      g[0]), v & /*selectMultiple*/
      2 && (y.selectMultiple = /*selectMultiple*/
      g[1]), l.$set(y);
      const _ = {};
      v & /*selectMultiple*/
      2 && (_.selectMultiple = /*selectMultiple*/
      g[1]), v & /*entityType*/
      1 && (_.entityType = /*entityType*/
      g[0]), v & /*additionalFilter*/
      4 && (_.additionalFilter = /*additionalFilter*/
      g[2]), u.$set(_), (!m || v & /*tw*/
      8 && f !== (f = /*tw*/
      g[3]`flex-1 overflow-hidden mt-3`)) && S(c, "class", f), (!m || v & /*tw*/
      8 && d !== (d = /*tw*/
      g[3]`flex flex-col h-full overflow-hidden`)) && S(s, "class", d), (!m || v & /*tw*/
      8 && h !== (h = /*tw*/
      g[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && S(o, "class", h);
    },
    i(g) {
      m || (A(n.$$.fragment, g), A(l.$$.fragment, g), A(u.$$.fragment, g), m = !0);
    },
    o(g) {
      P(n.$$.fragment, g), P(l.$$.fragment, g), P(u.$$.fragment, g), m = !1;
    },
    d(g) {
      g && R(e), F(n), g && R(i), g && R(o), F(l), F(u);
    }
  };
}
function wg(t) {
  let e, n;
  return e = new La({
    props: {
      tw: (
        /*tw*/
        t[3]
      ),
      allowBack: !!/*selectedTenant*/
      t[4]
    }
  }), e.$on(
    "back",
    /*back_handler*/
    t[9]
  ), e.$on(
    "tenantSelected",
    /*tenantSelected_handler*/
    t[10]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(r, i) {
      L(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*tw*/
      8 && (o.tw = /*tw*/
      r[3]), i & /*selectedTenant*/
      16 && (o.allowBack = !!/*selectedTenant*/
      r[4]), e.$set(o);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Sg(t) {
  let e, n, r, i, o;
  const s = [wg, yg], l = [];
  function a(c, u) {
    return (
      /*inTenantSelect*/
      c[5] ? 0 : 1
    );
  }
  return n = a(t), r = l[n] = s[n](t), {
    c() {
      e = I("div"), r.c(), S(e, "class", i = /*tw*/
      t[3]`flex w-full h-full`);
    },
    m(c, u) {
      O(c, e, u), l[n].m(e, null), o = !0;
    },
    p(c, [u]) {
      let f = n;
      n = a(c), n === f ? l[n].p(c, u) : (me(), P(l[f], 1, 1, () => {
        l[f] = null;
      }), ve(), r = l[n], r ? r.p(c, u) : (r = l[n] = s[n](c), r.c()), A(r, 1), r.m(e, null)), (!o || u & /*tw*/
      8 && i !== (i = /*tw*/
      c[3]`flex w-full h-full`)) && S(e, "class", i);
    },
    i(c) {
      o || (A(r), o = !0);
    },
    o(c) {
      P(r), o = !1;
    },
    d(c) {
      c && R(e), l[n].d();
    }
  };
}
function Eg(t, e, n) {
  let { entityType: r = G.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = Nt } = e, l = Te(Dt), a = Te(Pn), c, u = !1, f = [], d = He(), h = It.subscribe((E) => {
    E.selectedTenant ? (n(5, u = !1), v(E.selectedTenant)) : n(5, u = !0);
  }), m = Pt.subscribe((E) => {
    E.selectedEntities && !i ? (g(E.selectedEntities), d("selectedEntities", E.selectedEntities[0])) : f = E.selectedEntities;
  });
  function g(E) {
    const N = un(), z = N.value.lastSelectedEntities, X = E.filter((ee) => !z.includes(ee.Id)).map((ee) => ee.Id);
    z.unshift(...X), z.splice(5), N.update((ee) => ({
      ...ee,
      lastSelectedEntities: z
    }));
  }
  async function v(E) {
    try {
      n(4, c = await a.getTenantViewById(E));
    } catch (N) {
      console.error(N), n(5, u = !0);
    }
  }
  async function x(E) {
    console.log("Tenant selected", E);
    const N = await l.getEntityById(G.Group, E.Root);
    It.update((z) => ({ ...z, selectedTenant: E.Id })), un().update((z) => ({ ...z, selectedGroup: N }));
  }
  function y() {
    n(5, u = !0);
  }
  function _() {
    g(f), d("selectedEntities", f);
  }
  wt(() => {
    h.unsubscribe(), m.unsubscribe();
  });
  const b = () => n(5, u = !1), p = (E) => x(E.detail.tenant), w = () => y(), k = () => _();
  return t.$$set = (E) => {
    "entityType" in E && n(0, r = E.entityType), "selectMultiple" in E && n(1, i = E.selectMultiple), "additionalFilter" in E && n(2, o = E.additionalFilter), "tw" in E && n(3, s = E.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    8 && ht("tw", s);
  }, [
    r,
    i,
    o,
    s,
    c,
    u,
    x,
    y,
    _,
    b,
    p,
    w,
    k
  ];
}
let Fa = class extends ce {
  constructor(e) {
    super(), ae(this, e, Eg, Sg, le, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function Cg(t) {
  let e, n, r, i, o, s, l, a, c = {
    selectMultiple: (
      /*selectMultiple*/
      t[1]
    ),
    entityType: (
      /*entityType*/
      t[0]
    ),
    additionalFilter: (
      /*additionalFilter*/
      t[2]
    )
  };
  return r = new Fa({ props: c }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = I("div"), n = I("div"), B(r.$$.fragment), S(n, "class", i = /*tw*/
      t[3]`h-full w-full`), S(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      O(u, e, f), T(e, n), L(r, n, null), t[11](e), s = !0, l || (a = [
        ie(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        ie(e, "click", kg)
      ], l = !0);
    },
    p(u, [f]) {
      const d = {};
      f & /*selectMultiple*/
      2 && (d.selectMultiple = /*selectMultiple*/
      u[1]), f & /*entityType*/
      1 && (d.entityType = /*entityType*/
      u[0]), f & /*additionalFilter*/
      4 && (d.additionalFilter = /*additionalFilter*/
      u[2]), r.$set(d), (!s || f & /*tw*/
      8 && i !== (i = /*tw*/
      u[3]`h-full w-full`)) && S(n, "class", i), (!s || f & /*tw*/
      8 && o !== (o = /*tw*/
      u[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`)) && S(e, "class", o);
    },
    i(u) {
      s || (A(r.$$.fragment, u), s = !0);
    },
    o(u) {
      P(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && R(e), t[9](null), F(r), t[11](null), l = !1, lt(a);
    }
  };
}
const kg = (t) => t.stopPropagation();
function $g(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = G.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = Nt } = e, a = Te("PopupService", new vr(document.body)), c, u, f;
  const d = He();
  function h(b, p) {
    b && !f && p ? (f = a.openPopup("entity-select-dialog", p, {
      backdrop: !0,
      closeOnClickOutside: !0,
      positioning: "center",
      inTransitionClassList: "scale-100",
      inTransitionDuration: 125,
      outTransitionClassList: "!scale-50",
      outTransitionDuration: 125
    }), f.afterClosed.then(() => {
      console.log("dialog closed", u), u == null || u.$destroy(), f = null;
    })) : m();
  }
  function m() {
    console.log("closeDialog"), f == null || f.close();
  }
  function g(b) {
    console.log(b), b.key === "Escape" && m();
  }
  function v(b) {
    d("selectedEntities", b.detail);
  }
  function x(b) {
    ue[b ? "unshift" : "push"](() => {
      u = b, n(5, u);
    });
  }
  const y = (b) => v(b);
  function _(b) {
    ue[b ? "unshift" : "push"](() => {
      c = b, n(4, c);
    });
  }
  return t.$$set = (b) => {
    "open" in b && n(8, r = b.open), "entityType" in b && n(0, i = b.entityType), "selectMultiple" in b && n(1, o = b.selectMultiple), "additionalFilter" in b && n(2, s = b.additionalFilter), "tw" in b && n(3, l = b.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*open, dialogElement*/
    272 && h(r, c);
  }, [
    i,
    o,
    s,
    l,
    c,
    u,
    g,
    v,
    r,
    x,
    y,
    _
  ];
}
class Ag extends ce {
  constructor(e) {
    super(), ae(this, e, $g, Cg, le, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class Zs {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new Ag({
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
const sr = window, po = sr.ShadowRoot && (sr.ShadyCSS === void 0 || sr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, go = Symbol(), el = /* @__PURE__ */ new WeakMap();
let za = class {
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
      r && (e = el.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && el.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Tg = (t) => new za(typeof t == "string" ? t : t + "", void 0, go), Ir = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new za(n, t, go);
}, xg = (t, e) => {
  po ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = sr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, tl = po ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return Tg(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ci;
const wr = window, nl = wr.trustedTypes, Pg = nl ? nl.emptyScript : "", rl = wr.reactiveElementPolyfillSupport, Ni = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Pg : null;
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
} }, Ba = (t, e) => e !== t && (e == e || t == t), ui = { attribute: !0, type: String, converter: Ni, reflect: !1, hasChanged: Ba };
let Jt = class extends HTMLElement {
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
  static createProperty(e, n = ui) {
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
    return this.elementProperties.get(e) || ui;
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
        n.unshift(tl(i));
    } else
      e !== void 0 && n.push(tl(e));
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
    return xg(n, this.constructor.elementStyles), n;
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
  _$EO(e, n, r = ui) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : Ni).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : Ni;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || Ba)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
};
Jt.finalized = !0, Jt.elementProperties = /* @__PURE__ */ new Map(), Jt.elementStyles = [], Jt.shadowRootOptions = { mode: "open" }, rl == null || rl({ ReactiveElement: Jt }), ((ci = wr.reactiveElementVersions) !== null && ci !== void 0 ? ci : wr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fi;
const Sr = window, fn = Sr.trustedTypes, il = fn ? fn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, gt = `lit$${(Math.random() + "").slice(9)}$`, Wa = "?" + gt, Ig = `<${Wa}>`, dn = document, Un = (t = "") => dn.createComment(t), Mn = (t) => t === null || typeof t != "object" && typeof t != "function", Va = Array.isArray, Rg = (t) => Va(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Cn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ol = /-->/g, sl = />/g, kt = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ll = /'/g, al = /"/g, qa = /^(?:script|style|textarea|title)$/i, hn = Symbol.for("lit-noChange"), he = Symbol.for("lit-nothing"), cl = /* @__PURE__ */ new WeakMap(), Og = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new zn(e.insertBefore(Un(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, tn = dn.createTreeWalker(dn, 129, null, !1), Dg = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = Cn;
  for (let a = 0; a < n; a++) {
    const c = t[a];
    let u, f, d = -1, h = 0;
    for (; h < c.length && (s.lastIndex = h, f = s.exec(c), f !== null); )
      h = s.lastIndex, s === Cn ? f[1] === "!--" ? s = ol : f[1] !== void 0 ? s = sl : f[2] !== void 0 ? (qa.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = kt) : f[3] !== void 0 && (s = kt) : s === kt ? f[0] === ">" ? (s = i ?? Cn, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? kt : f[3] === '"' ? al : ll) : s === al || s === ll ? s = kt : s === ol || s === sl ? s = Cn : (s = kt, i = void 0);
    const m = s === kt && t[a + 1].startsWith("/>") ? " " : "";
    o += s === Cn ? c + Ig : d >= 0 ? (r.push(u), c.slice(0, d) + "$lit$" + c.slice(d) + gt + m) : c + gt + (d === -2 ? (r.push(void 0), a) : m);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [il !== void 0 ? il.createHTML(l) : l, r];
};
class Hn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, a = this.parts, [c, u] = Dg(e, n);
    if (this.el = Hn.createElement(c, r), tn.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = tn.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(gt)) {
              const h = u[s++];
              if (f.push(d), h !== void 0) {
                const m = i.getAttribute(h.toLowerCase() + "$lit$").split(gt), g = /([.?@])?(.*)/.exec(h);
                a.push({ type: 1, index: o, name: g[2], strings: m, ctor: g[1] === "." ? Ug : g[1] === "?" ? Hg : g[1] === "@" ? jg : Rr });
              } else
                a.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (qa.test(i.tagName)) {
          const f = i.textContent.split(gt), d = f.length - 1;
          if (d > 0) {
            i.textContent = fn ? fn.emptyScript : "";
            for (let h = 0; h < d; h++)
              i.append(f[h], Un()), tn.nextNode(), a.push({ type: 2, index: ++o });
            i.append(f[d], Un());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Wa)
          a.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(gt, f + 1)) !== -1; )
            a.push({ type: 7, index: o }), f += gt.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = dn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function pn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === hn)
    return e;
  let a = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const c = Mn(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== c && ((o = a == null ? void 0 : a._$AO) === null || o === void 0 || o.call(a, !1), c === void 0 ? a = void 0 : (a = new c(t), a._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = a : n._$Cu = a), a !== void 0 && (e = pn(t, a._$AS(t, e.values), a, r)), e;
}
class Ng {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : dn).importNode(r, !0);
    tn.currentNode = o;
    let s = tn.nextNode(), l = 0, a = 0, c = i[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let u;
        c.type === 2 ? u = new zn(s, s.nextSibling, this, e) : c.type === 1 ? u = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (u = new Lg(s, this, e)), this.v.push(u), c = i[++a];
      }
      l !== (c == null ? void 0 : c.index) && (s = tn.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class zn {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = he, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = pn(this, e, n), Mn(e) ? e === he || e == null || e === "" ? (this._$AH !== he && this._$AR(), this._$AH = he) : e !== this._$AH && e !== hn && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : Rg(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== he && Mn(this._$AH) ? this._$AA.nextSibling.data = e : this.k(dn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Hn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new Ng(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = cl.get(e.strings);
    return n === void 0 && cl.set(e.strings, n = new Hn(e)), n;
  }
  O(e) {
    Va(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new zn(this.S(Un()), this.S(Un()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
class Rr {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = he, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = he;
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
      e = pn(this, e, n, 0), s = !Mn(e) || e !== this._$AH && e !== hn, s && (this._$AH = e);
    else {
      const l = e;
      let a, c;
      for (e = o[0], a = 0; a < o.length - 1; a++)
        c = pn(this, l[r + a], n, a), c === hn && (c = this._$AH[a]), s || (s = !Mn(c) || c !== this._$AH[a]), c === he ? e = he : e !== he && (e += (c ?? "") + o[a + 1]), this._$AH[a] = c;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === he ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ug extends Rr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === he ? void 0 : e;
  }
}
const Mg = fn ? fn.emptyScript : "";
class Hg extends Rr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== he ? this.element.setAttribute(this.name, Mg) : this.element.removeAttribute(this.name);
  }
}
class jg extends Rr {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = pn(this, e, n, 0)) !== null && r !== void 0 ? r : he) === hn)
      return;
    const i = this._$AH, o = e === he && i !== he || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== he && (i === he || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Lg {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    pn(this, e);
  }
}
const ul = Sr.litHtmlPolyfillSupport;
ul == null || ul(Hn, zn), ((fi = Sr.litHtmlVersions) !== null && fi !== void 0 ? fi : Sr.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var di, hi;
class vt extends Jt {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Og(n, this.renderRoot, this.renderOptions);
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
    return hn;
  }
}
vt.finalized = !0, vt._$litElement$ = !0, (di = globalThis.litElementHydrateSupport) === null || di === void 0 || di.call(globalThis, { LitElement: vt });
const fl = globalThis.litElementPolyfillSupport;
fl == null || fl({ LitElement: vt });
((hi = globalThis.litElementVersions) !== null && hi !== void 0 ? hi : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fg = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Ne(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : Fg(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pi;
((pi = window.HTMLSlotElement) === null || pi === void 0 ? void 0 : pi.prototype.assignedElements) != null;
const zg = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class Ke {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? zg);
  }
  createTwindContext(e) {
    if (e)
      return Ap({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: Nt, styleSheet: null };
    {
      const n = Ta({ target: new CSSStyleSheet() }), { tw: r } = Ua({
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
var Bg = Object.defineProperty, Wg = Object.getOwnPropertyDescriptor, Ga = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Wg(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Bg(e, n, i), i;
};
const { tw: Vg, styleSheet: qg } = Te(Ke, new Ke()).createTwindContext(), Gg = Ir`
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
class Or extends vt {
  constructor() {
    super();
    Ge(this, "_element");
    ft(vr, new vr(document.body));
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
    this._element = new Fa({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Vg
      }
    }), this._element.$on("selectedEntities", (o) => {
      console.log("selectedEntities", o), this.dispatchEvent(
        new CustomEvent("selected", {
          detail: o.detail,
          bubbles: !0,
          composed: !0
        })
      );
    }), console.log("connectedCallback", this._element);
  }
  _isValidEntityType(n) {
    return Object.values(G).includes(n);
  }
}
Ge(Or, "styles", [qg.target, Gg]);
Ga([
  Ne({ type: String, attribute: "entitytype" })
], Or.prototype, "entityType", 2);
Ga([
  Ne({ type: Boolean, attribute: "multiple" })
], Or.prototype, "multiple", 2);
var Jg = Object.defineProperty, Xg = Object.getOwnPropertyDescriptor, St = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Xg(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Jg(e, n, i), i;
};
const { tw: Kg, styleSheet: Yg } = Te(Ke, new Ke()).createTwindContext(), Qg = Ir`
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
class Qe extends vt {
  constructor() {
    super();
    Ge(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return (n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("arrayvalue", this.arrayvalue, this.value), this._select = new ja({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: Kg
      }
    }), this._select.$on("valueChanged", (r) => {
      console.log(r), this.dispatchEvent(new CustomEvent("valuechanged", {
        detail: r.detail
      }));
    }), null;
  }
  disconnectedCallback() {
    var n;
    super.disconnectedCallback(), (n = this._select) == null || n.$destroy();
  }
}
Ge(Qe, "styles", [Yg.target, Qg]);
St([
  Ne({ attribute: "value", type: String })
], Qe.prototype, "value", 2);
St([
  Ne({ attribute: "arrayvalue", type: Array })
], Qe.prototype, "arrayvalue", 2);
St([
  Ne({ attribute: "multiple", type: Boolean })
], Qe.prototype, "multiple", 2);
St([
  Ne({ attribute: "options", type: Array })
], Qe.prototype, "options", 2);
St([
  Ne({ attribute: "placeholder", type: String })
], Qe.prototype, "placeholder", 2);
St([
  Ne({ attribute: "container$class", type: String })
], Qe.prototype, "container$class", 2);
St([
  Ne({ attribute: "textfield$class", type: String })
], Qe.prototype, "textfield$class", 2);
St([
  Ne({ attribute: "suffix$class", type: String })
], Qe.prototype, "suffix$class", 2);
const { tw: Zg, styleSheet: Rm } = Te(Ke, new Ke()).createTwindContext();
Ir`
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
class em extends vt {
  constructor() {
    super();
    Ge(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new La({
      target: n,
      props: {
        tw: Zg
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function tm(t) {
  Ht(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function dl(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("div"), n = I("i"), S(n, "class", r = ne(
        /*tw*/
        t[2]`fas fa-${/*icon*/
        t[0]} text-lg`
      ) + " svelte-oysah1"), S(e, "class", i = ne(
        /*tw*/
        t[2]`mr-2`
      ) + " svelte-oysah1");
    },
    m(o, s) {
      O(o, e, s), T(e, n);
    },
    p(o, s) {
      s & /*tw, icon*/
      5 && r !== (r = ne(
        /*tw*/
        o[2]`fas fa-${/*icon*/
        o[0]} text-lg`
      ) + " svelte-oysah1") && S(n, "class", r), s & /*tw*/
      4 && i !== (i = ne(
        /*tw*/
        o[2]`mr-2`
      ) + " svelte-oysah1") && S(e, "class", i);
    },
    d(o) {
      o && R(e);
    }
  };
}
function nm(t) {
  let e, n, r, i, o, s, l, a, c = (
    /*icon*/
    t[0] && dl(t)
  );
  return {
    c() {
      e = I("div"), c && c.c(), n = U(), r = I("div"), i = j(
        /*label*/
        t[1]
      ), S(r, "class", o = ne(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-oysah1"), S(e, "class", s = ne(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-oysah1");
    },
    m(u, f) {
      O(u, e, f), c && c.m(e, null), T(e, n), T(e, r), T(r, i), l || (a = ie(
        e,
        "click",
        /*click_handler*/
        t[4]
      ), l = !0);
    },
    p(u, [f]) {
      /*icon*/
      u[0] ? c ? c.p(u, f) : (c = dl(u), c.c(), c.m(e, n)) : c && (c.d(1), c = null), f & /*label*/
      2 && ye(
        i,
        /*label*/
        u[1]
      ), f & /*tw*/
      4 && o !== (o = ne(
        /*tw*/
        u[2]`flex-grow`
      ) + " svelte-oysah1") && S(r, "class", o), f & /*tw*/
      4 && s !== (s = ne(
        /*tw*/
        u[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-oysah1") && S(e, "class", s);
    },
    i: J,
    o: J,
    d(u) {
      u && R(e), c && c.d(), l = !1, a();
    }
  };
}
function rm(t, e, n) {
  let { icon: r = null } = e, { label: i = null } = e, { tw: o } = e, s = He();
  const l = (a) => s("click", a);
  return t.$$set = (a) => {
    "icon" in a && n(0, r = a.icon), "label" in a && n(1, i = a.label), "tw" in a && n(2, o = a.tw);
  }, [r, i, o, s, l];
}
class im extends ce {
  constructor(e) {
    super(), ae(this, e, rm, nm, le, { icon: 0, label: 1, tw: 2 }, tm);
  }
}
function hl(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function pl(t) {
  let e, n;
  function r(...i) {
    return (
      /*click_handler*/
      t[12](
        /*item*/
        t[17],
        ...i
      )
    );
  }
  return e = new im({
    props: {
      tw: (
        /*tw*/
        t[4]
      ),
      label: (
        /*item*/
        t[17].label
      ),
      icon: (
        /*item*/
        t[17].label
      )
    }
  }), e.$on("click", r), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, o) {
      t = i;
      const s = {};
      o & /*tw*/
      16 && (s.tw = /*tw*/
      t[4]), o & /*items*/
      64 && (s.label = /*item*/
      t[17].label), o & /*items*/
      64 && (s.icon = /*item*/
      t[17].label), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      P(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function om(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = pl(hl(t, i, l));
  const s = (l) => P(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = I("div");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      S(e, "class", n = /*tw*/
      t[4]`bg-white rounded shadow-lg ${/*container$class*/
      t[3]}`);
    },
    m(l, a) {
      O(l, e, a);
      for (let c = 0; c < o.length; c += 1)
        o[c] && o[c].m(e, null);
      r = !0;
    },
    p(l, a) {
      if (a & /*tw, items*/
      80) {
        i = /*items*/
        l[6];
        let c;
        for (c = 0; c < i.length; c += 1) {
          const u = hl(l, i, c);
          o[c] ? (o[c].p(u, a), A(o[c], 1)) : (o[c] = pl(u), o[c].c(), A(o[c], 1), o[c].m(e, null));
        }
        for (me(), c = i.length; c < o.length; c += 1)
          s(c);
        ve();
      }
      (!r || a & /*tw, container$class*/
      24 && n !== (n = /*tw*/
      l[4]`bg-white rounded shadow-lg ${/*container$class*/
      l[3]}`)) && S(e, "class", n);
    },
    i(l) {
      if (!r) {
        for (let a = 0; a < i.length; a += 1)
          A(o[a]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        P(o[a]);
      r = !1;
    },
    d(l) {
      l && R(e), yt(o, l);
    }
  };
}
function sm(t) {
  let e, n, r, i, o;
  function s(u) {
    t[13](u);
  }
  function l(u) {
    t[15](u);
  }
  function a(u) {
    t[16](u);
  }
  let c = {
    closeOnClick: (
      /*closeOnClick*/
      t[5]
    ),
    position: (
      /*positionOffset*/
      t[2]
    ),
    $$slots: { default: [om] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (c.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (c.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (c.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new Ma({ props: c }), ue.push(() => Zt(e, "anchorElement", s)), t[14](e), ue.push(() => Zt(e, "preferedHorizontalAlignment", l)), ue.push(() => Zt(e, "preferedVerticalAlignment", a)), {
      c() {
        B(e.$$.fragment);
      },
      m(u, f) {
        L(e, u, f), o = !0;
      },
      p(u, [f]) {
        const d = {};
        f & /*closeOnClick*/
        32 && (d.closeOnClick = /*closeOnClick*/
        u[5]), f & /*positionOffset*/
        4 && (d.position = /*positionOffset*/
        u[2]), f & /*$$scope, tw, container$class, items*/
        1048664 && (d.$$scope = { dirty: f, ctx: u }), !n && f & /*anchorElement*/
        128 && (n = !0, d.anchorElement = /*anchorElement*/
        u[7], Qt(() => n = !1)), !r && f & /*preferedHorizontalAlignment*/
        2 && (r = !0, d.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
        u[1], Qt(() => r = !1)), !i && f & /*preferedVerticalAlignment*/
        1 && (i = !0, d.preferedVerticalAlignment = /*preferedVerticalAlignment*/
        u[0], Qt(() => i = !1)), e.$set(d);
      },
      i(u) {
        o || (A(e.$$.fragment, u), o = !0);
      },
      o(u) {
        P(e.$$.fragment, u), o = !1;
      },
      d(u) {
        t[14](null), F(e, u);
      }
    }
  );
}
function lm(t, e, n) {
  let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 0 } } = e, { container$class: l } = e, { tw: a = Nt } = e, { closeOnClick: c = !0 } = e, { items: u = [] } = e, f, d;
  function h() {
    console.log("openMenu", f, u), d.openPopup();
  }
  function m() {
    d.closePopup();
  }
  const g = (b, p) => b.action(p);
  function v(b) {
    f = b, n(7, f), n(9, r);
  }
  function x(b) {
    ue[b ? "unshift" : "push"](() => {
      d = b, n(8, d);
    });
  }
  function y(b) {
    o = b, n(1, o);
  }
  function _(b) {
    i = b, n(0, i);
  }
  return t.$$set = (b) => {
    "anchorSelector" in b && n(9, r = b.anchorSelector), "preferedVerticalAlignment" in b && n(0, i = b.preferedVerticalAlignment), "preferedHorizontalAlignment" in b && n(1, o = b.preferedHorizontalAlignment), "positionOffset" in b && n(2, s = b.positionOffset), "container$class" in b && n(3, l = b.container$class), "tw" in b && n(4, a = b.tw), "closeOnClick" in b && n(5, c = b.closeOnClick), "items" in b && n(6, u = b.items);
  }, t.$$.update = () => {
    t.$$.dirty & /*anchorSelector, anchorElement*/
    640 && (n(7, f = document.querySelector(r)), console.log("anchorSelector", r, f));
  }, [
    i,
    o,
    s,
    l,
    a,
    c,
    u,
    f,
    d,
    r,
    h,
    m,
    g,
    v,
    x,
    y,
    _
  ];
}
class am extends ce {
  constructor(e) {
    super(), ae(this, e, lm, sm, le, {
      anchorSelector: 9,
      preferedVerticalAlignment: 0,
      preferedHorizontalAlignment: 1,
      positionOffset: 2,
      container$class: 3,
      tw: 4,
      closeOnClick: 5,
      items: 6,
      openMenu: 10,
      closeMenu: 11
    });
  }
  get openMenu() {
    return this.$$.ctx[10];
  }
  get closeMenu() {
    return this.$$.ctx[11];
  }
}
var cm = Object.defineProperty, um = Object.getOwnPropertyDescriptor, Dr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? um(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && cm(e, n, i), i;
};
const { tw: Om, styleSheet: fm } = Te(Ke, new Ke()).createTwindContext(), dm = Ir`
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
class _n extends vt {
  constructor() {
    super();
    Ge(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new am({
      target: document.createElement("div"),
      props: {
        anchorSelector: this.anchorSelector,
        items: this.items,
        container$class: this.container$class
      }
    }), null;
  }
  createRenderRoot() {
    return this;
  }
  openMenu() {
    var n;
    (n = this._menu) == null || n.openMenu();
  }
  closeMenu() {
    var n;
    (n = this._menu) == null || n.closeMenu();
  }
  disconnectedCallback() {
    var n;
    super.disconnectedCallback(), (n = this._menu) == null || n.$destroy();
  }
}
Ge(_n, "styles", [fm.target, dm]);
Dr([
  Ne({ attribute: "items", type: Array })
], _n.prototype, "items", 2);
Dr([
  Ne({ attribute: "closeonclick", type: Boolean })
], _n.prototype, "closeOnClick", 2);
Dr([
  Ne({ attribute: "container$class", type: String })
], _n.prototype, "container$class", 2);
Dr([
  Ne({ attribute: "anchorselector", type: String })
], _n.prototype, "anchorSelector", 2);
const hm = Or, pm = em;
function Dm() {
  Qn("audako-entity-select", hm), Qn("audako-tenant-select", pm), Qn("audako-select", Qe), Qn("audako-menu", _n), Te(Ke, new Ke()).createTwindContext(!0);
}
function Nm(t, e) {
  const n = new Dt(t, e);
  ft(wi, new wi(t, e)), ft(Dt, n), ft(Pn, new Pn(t, e)), ft(In, new In(n)), ft(yi, new yi(t, e)), ft(Zs, new Zs()), ft(as, new as(t, e));
}
function Qn(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  vn as BaseHttpService,
  Eo as CompressionInterval,
  gl as ConditionSettings,
  Ve as ConfigurationEntity,
  Qa as Dashboard,
  sc as DashboardTab,
  nc as DataConnection,
  _m as DataConnectionFailureConditionSettings,
  bm as DataConnectionSettings,
  tc as DataSource,
  yi as DataSourceHttpService,
  vo as DataSourceType,
  Ka as EntityHttpEndpoints,
  Dt as EntityHttpService,
  mm as EntityIcons,
  In as EntityNameService,
  hm as EntitySelect,
  Zs as EntitySelectDialogService,
  G as EntityType,
  uc as EntityTypeClassMapping,
  Cm as EntityUtils,
  lc as EventCategory,
  ec as EventCondition,
  mo as EventConditionSettingsType,
  Za as EventDefinition,
  Re as Field,
  ac as Formula,
  Ya as Group,
  as as HistoricalValueService,
  ss as LiveHubEvent,
  $n as LiveHubMethod,
  wi as LiveValueService,
  km as ObjectUtils,
  cc as ProcessImage,
  ic as Signal,
  Sm as SignalAnalogSettings,
  vm as SignalConditionSettings,
  Em as SignalCounterSettings,
  wm as SignalDigitalSettings,
  Er as SignalSettings,
  bo as SignalType,
  ls as SubscriptionPrefix,
  Pn as TenantHttpService,
  pm as TenantSelect,
  rc as TenantView,
  ym as UserProfile,
  $m as UserProfileHttpService,
  Nm as registerCoreServices,
  Dm as registerCustomElements,
  Te as resolveService,
  ft as tryRegisterService
};
