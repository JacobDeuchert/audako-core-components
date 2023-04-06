var Ka = Object.defineProperty;
var Ya = (t, e, n) => e in t ? Ka(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Je = (t, e, n) => (Ya(t, typeof e != "symbol" ? e + "" : e, n), n);
var q;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition";
})(q || (q = {}));
const ym = {
  [q.Group]: "fas fa-folder",
  [q.Dashboard]: "adk adk-dashboard",
  [q.Signal]: "fas fa-code",
  [q.DataConnection]: "fas fa-circle-notch",
  [q.DataSource]: "fas fa-server"
}, Qa = {
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
  EventDefinition: "/base/EventDefinition",
  BatchDefinition: "/scada/batchdefinition"
};
class Re {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class Be {
  constructor(e) {
    this.Name = new Re(), this.Description = new Re(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class Za extends Be {
  constructor() {
    super();
  }
}
class ec extends Be {
}
class tc extends Be {
}
class nc extends Be {
}
var mo;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.DataConnectionFailureConditionSettings = "DataConnectionFailureConditionSettings";
})(mo || (mo = {}));
class vl {
}
class wm extends vl {
}
class Sm extends vl {
}
var vo;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter";
})(vo || (vo = {}));
class rc extends Be {
}
var _o;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp";
})(_o || (_o = {}));
class ic extends Be {
}
class Em {
}
class oc {
  constructor(e) {
    Object.assign(this, e);
  }
}
class Cm {
}
var bo;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniservalInput", t.UniversalInOut = "UniversalInOut";
})(bo || (bo = {}));
class sc extends Be {
  constructor() {
    super(), this.Type = new Re(), this.DataConnectionId = new Re(), this.Address = new Re(), this.Settings = new Er(), this.RecordingSettings = new lc();
  }
}
class Er {
}
class km extends Er {
}
class $m extends Er {
}
class Am extends Er {
}
var yo;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(yo || (yo = {}));
var wo;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})(wo || (wo = {}));
class lc {
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
class ac extends Be {
}
class cc extends Be {
}
class uc extends Be {
}
var Co;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(Co || (Co = {}));
class fc extends Be {
}
class dc extends Be {
}
var ko;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
})(ko || (ko = {}));
var $o;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})($o || ($o = {}));
const hc = {
  [q.Group]: Za,
  [q.Signal]: sc,
  [q.Dashboard]: ec,
  [q.DashboardTab]: ac,
  [q.DataConnection]: ic,
  [q.DataSource]: rc,
  [q.EventCategory]: cc,
  [q.EventCondition]: nc,
  [q.EventDefinition]: tc,
  [q.Formula]: uc,
  [q.ProcessImage]: fc,
  [q.BatchDefinition]: dc
};
class Tm {
  static isEntityType(e) {
    return Object.keys(q).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = hc[e];
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
class xm {
  static isValidMongoId(e) {
    return /^[0-9a-fA-F]{24}$/.test(e);
  }
}
function pc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var gi = {}, gc = {
  get exports() {
    return gi;
  },
  set exports(t) {
    gi = t;
  }
}, lr = {}, mc = {
  get exports() {
    return lr;
  },
  set exports(t) {
    lr = t;
  }
}, _l = function(e, n) {
  return function() {
    for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
      i[o] = arguments[o];
    return e.apply(n, i);
  };
}, vc = _l, Mi = Object.prototype.toString, Ui = function(t) {
  return function(e) {
    var n = Mi.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Mt(t) {
  return t = t.toLowerCase(), function(n) {
    return Ui(n) === t;
  };
}
function Hi(t) {
  return Array.isArray(t);
}
function ar(t) {
  return typeof t > "u";
}
function _c(t) {
  return t !== null && !ar(t) && t.constructor !== null && !ar(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var bl = Mt("ArrayBuffer");
function bc(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && bl(t.buffer), e;
}
function yc(t) {
  return typeof t == "string";
}
function wc(t) {
  return typeof t == "number";
}
function yl(t) {
  return t !== null && typeof t == "object";
}
function Zn(t) {
  if (Ui(t) !== "object")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var Sc = Mt("Date"), Ec = Mt("File"), Cc = Mt("Blob"), kc = Mt("FileList");
function ji(t) {
  return Mi.call(t) === "[object Function]";
}
function $c(t) {
  return yl(t) && ji(t.pipe);
}
function Ac(t) {
  var e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Mi.call(t) === e || ji(t.toString) && t.toString() === e);
}
var Tc = Mt("URLSearchParams");
function xc(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function Pc() {
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
function Ic(t, e, n) {
  return Li(e, function(i, o) {
    n && typeof i == "function" ? t[o] = vc(i, n) : t[o] = i;
  }), t;
}
function Rc(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function Oc(t, e, n, r) {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, n && Object.assign(t.prototype, n);
}
function Dc(t, e, n) {
  var r, i, o, s = {};
  e = e || {};
  do {
    for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0; )
      o = r[i], s[o] || (e[o] = t[o], s[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}
function Nc(t, e, n) {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  var r = t.indexOf(e, n);
  return r !== -1 && r === n;
}
function Mc(t) {
  if (!t)
    return null;
  var e = t.length;
  if (ar(e))
    return null;
  for (var n = new Array(e); e-- > 0; )
    n[e] = t[e];
  return n;
}
var Uc = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Se = {
  isArray: Hi,
  isArrayBuffer: bl,
  isBuffer: _c,
  isFormData: Ac,
  isArrayBufferView: bc,
  isString: yc,
  isNumber: wc,
  isObject: yl,
  isPlainObject: Zn,
  isUndefined: ar,
  isDate: Sc,
  isFile: Ec,
  isBlob: Cc,
  isFunction: ji,
  isStream: $c,
  isURLSearchParams: Tc,
  isStandardBrowserEnv: Pc,
  forEach: Li,
  merge: mi,
  extend: Ic,
  trim: xc,
  stripBOM: Rc,
  inherits: Oc,
  toFlatObject: Dc,
  kindOf: Ui,
  kindOfTest: Mt,
  endsWith: Nc,
  toArray: Mc,
  isTypedArray: Uc,
  isFileList: kc
}, Lt = Se;
function Ao(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var wl = function(e, n, r) {
  if (!n)
    return e;
  var i;
  if (r)
    i = r(n);
  else if (Lt.isURLSearchParams(n))
    i = n.toString();
  else {
    var o = [];
    Lt.forEach(n, function(c, a) {
      c === null || typeof c > "u" || (Lt.isArray(c) ? a = a + "[]" : c = [c], Lt.forEach(c, function(f) {
        Lt.isDate(f) ? f = f.toISOString() : Lt.isObject(f) && (f = JSON.stringify(f)), o.push(Ao(a) + "=" + Ao(f));
      }));
    }), i = o.join("&");
  }
  if (i) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}, Hc = Se;
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
  Hc.forEach(this.handlers, function(r) {
    r !== null && e(r);
  });
};
var jc = Cr, Lc = Se, Fc = function(e, n) {
  Lc.forEach(e, function(i, o) {
    o !== n && o.toUpperCase() === n.toUpperCase() && (e[n] = i, delete e[o]);
  });
}, Sl = Se;
function nn(t, e, n, r, i) {
  Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
Sl.inherits(nn, Error, {
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
var El = nn.prototype, Cl = {};
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
  Cl[t] = { value: t };
});
Object.defineProperties(nn, Cl);
Object.defineProperty(El, "isAxiosError", { value: !0 });
nn.from = function(t, e, n, r, i, o) {
  var s = Object.create(El);
  return Sl.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }), nn.call(s, t.message, e, n, r, i), s.name = t.name, o && Object.assign(s, o), s;
};
var gn = nn, kl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ve = Se;
function zc(t, e) {
  e = e || new FormData();
  var n = [];
  function r(o) {
    return o === null ? "" : Ve.isDate(o) ? o.toISOString() : Ve.isArrayBuffer(o) || Ve.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function i(o, s) {
    if (Ve.isPlainObject(o) || Ve.isArray(o)) {
      if (n.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + s);
      n.push(o), Ve.forEach(o, function(c, a) {
        if (!Ve.isUndefined(c)) {
          var u = s ? s + "." + a : a, f;
          if (c && !s && typeof c == "object") {
            if (Ve.endsWith(a, "{}"))
              c = JSON.stringify(c);
            else if (Ve.endsWith(a, "[]") && (f = Ve.toArray(c))) {
              f.forEach(function(d) {
                !Ve.isUndefined(d) && e.append(u, r(d));
              });
              return;
            }
          }
          i(c, u);
        }
      }), n.pop();
    } else
      e.append(s, r(o));
  }
  return i(t), e;
}
var $l = zc, Nr, To;
function Bc() {
  if (To)
    return Nr;
  To = 1;
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
var Mr, xo;
function Wc() {
  if (xo)
    return Mr;
  xo = 1;
  var t = Se;
  return Mr = t.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(r, i, o, s, l, c) {
          var a = [];
          a.push(r + "=" + encodeURIComponent(i)), t.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), t.isString(s) && a.push("path=" + s), t.isString(l) && a.push("domain=" + l), c === !0 && a.push("secure"), document.cookie = a.join("; ");
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
  ), Mr;
}
var Vc = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, qc = function(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}, Gc = Vc, Jc = qc, Al = function(e, n) {
  return e && !Gc(n) ? Jc(e, n) : n;
}, Ur, Po;
function Xc() {
  if (Po)
    return Ur;
  Po = 1;
  var t = Se, e = [
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
  return Ur = function(r) {
    var i = {}, o, s, l;
    return r && t.forEach(r.split(`
`), function(a) {
      if (l = a.indexOf(":"), o = t.trim(a.substr(0, l)).toLowerCase(), s = t.trim(a.substr(l + 1)), o) {
        if (i[o] && e.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? i[o] = (i[o] ? i[o] : []).concat([s]) : i[o] = i[o] ? i[o] + ", " + s : s;
      }
    }), i;
  }, Ur;
}
var Hr, Io;
function Kc() {
  if (Io)
    return Hr;
  Io = 1;
  var t = Se;
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
        var c = t.isString(l) ? o(l) : l;
        return c.protocol === i.protocol && c.host === i.host;
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
var jr, Ro;
function kr() {
  if (Ro)
    return jr;
  Ro = 1;
  var t = gn, e = Se;
  function n(r) {
    t.call(this, r ?? "canceled", t.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(n, t, {
    __CANCEL__: !0
  }), jr = n, jr;
}
var Lr, Oo;
function Yc() {
  return Oo || (Oo = 1, Lr = function(e) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return n && n[1] || "";
  }), Lr;
}
var Fr, Do;
function No() {
  if (Do)
    return Fr;
  Do = 1;
  var t = Se, e = Bc(), n = Wc(), r = wl, i = Al, o = Xc(), s = Kc(), l = kl, c = gn, a = kr(), u = Yc();
  return Fr = function(d) {
    return new Promise(function(g, p) {
      var v = d.data, x = d.headers, y = d.responseType, b;
      function _() {
        d.cancelToken && d.cancelToken.unsubscribe(b), d.signal && d.signal.removeEventListener("abort", b);
      }
      t.isFormData(v) && t.isStandardBrowserEnv() && delete x["Content-Type"];
      var m = new XMLHttpRequest();
      if (d.auth) {
        var w = d.auth.username || "", k = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
        x.Authorization = "Basic " + btoa(w + ":" + k);
      }
      var S = i(d.baseURL, d.url);
      m.open(d.method.toUpperCase(), r(S, d.params, d.paramsSerializer), !0), m.timeout = d.timeout;
      function N() {
        if (m) {
          var ee = "getAllResponseHeaders" in m ? o(m.getAllResponseHeaders()) : null, D = !y || y === "text" || y === "json" ? m.responseText : m.response, U = {
            data: D,
            status: m.status,
            statusText: m.statusText,
            headers: ee,
            config: d,
            request: m
          };
          e(function(et) {
            g(et), _();
          }, function(et) {
            p(et), _();
          }, U), m = null;
        }
      }
      if ("onloadend" in m ? m.onloadend = N : m.onreadystatechange = function() {
        !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(N);
      }, m.onabort = function() {
        m && (p(new c("Request aborted", c.ECONNABORTED, d, m)), m = null);
      }, m.onerror = function() {
        p(new c("Network Error", c.ERR_NETWORK, d, m, m)), m = null;
      }, m.ontimeout = function() {
        var D = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded", U = d.transitional || l;
        d.timeoutErrorMessage && (D = d.timeoutErrorMessage), p(new c(
          D,
          U.clarifyTimeoutError ? c.ETIMEDOUT : c.ECONNABORTED,
          d,
          m
        )), m = null;
      }, t.isStandardBrowserEnv()) {
        var z = (d.withCredentials || s(S)) && d.xsrfCookieName ? n.read(d.xsrfCookieName) : void 0;
        z && (x[d.xsrfHeaderName] = z);
      }
      "setRequestHeader" in m && t.forEach(x, function(D, U) {
        typeof v > "u" && U.toLowerCase() === "content-type" ? delete x[U] : m.setRequestHeader(U, D);
      }), t.isUndefined(d.withCredentials) || (m.withCredentials = !!d.withCredentials), y && y !== "json" && (m.responseType = d.responseType), typeof d.onDownloadProgress == "function" && m.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && m.upload && m.upload.addEventListener("progress", d.onUploadProgress), (d.cancelToken || d.signal) && (b = function(ee) {
        m && (p(!ee || ee && ee.type ? new a() : ee), m.abort(), m = null);
      }, d.cancelToken && d.cancelToken.subscribe(b), d.signal && (d.signal.aborted ? b() : d.signal.addEventListener("abort", b))), v || (v = null);
      var X = u(S);
      if (X && ["http", "https", "file"].indexOf(X) === -1) {
        p(new c("Unsupported protocol " + X + ":", c.ERR_BAD_REQUEST, d));
        return;
      }
      m.send(v);
    });
  }, Fr;
}
var zr, Mo;
function Qc() {
  return Mo || (Mo = 1, zr = null), zr;
}
var pe = Se, Uo = Fc, Ho = gn, Zc = kl, eu = $l, tu = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function jo(t, e) {
  !pe.isUndefined(t) && pe.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function nu() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = No()), t;
}
function ru(t, e, n) {
  if (pe.isString(t))
    try {
      return (e || JSON.parse)(t), pe.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
var $r = {
  transitional: Zc,
  adapter: nu(),
  transformRequest: [function(e, n) {
    if (Uo(n, "Accept"), Uo(n, "Content-Type"), pe.isFormData(e) || pe.isArrayBuffer(e) || pe.isBuffer(e) || pe.isStream(e) || pe.isFile(e) || pe.isBlob(e))
      return e;
    if (pe.isArrayBufferView(e))
      return e.buffer;
    if (pe.isURLSearchParams(e))
      return jo(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var r = pe.isObject(e), i = n && n["Content-Type"], o;
    if ((o = pe.isFileList(e)) || r && i === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return eu(o ? { "files[]": e } : e, s && new s());
    } else if (r || i === "application/json")
      return jo(n, "application/json"), ru(e);
    return e;
  }],
  transformResponse: [function(e) {
    var n = this.transitional || $r.transitional, r = n && n.silentJSONParsing, i = n && n.forcedJSONParsing, o = !r && this.responseType === "json";
    if (o || i && pe.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Ho.from(s, Ho.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Qc()
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
pe.forEach(["delete", "get", "head"], function(e) {
  $r.headers[e] = {};
});
pe.forEach(["post", "put", "patch"], function(e) {
  $r.headers[e] = pe.merge(tu);
});
var Fi = $r, iu = Se, ou = Fi, su = function(e, n, r) {
  var i = this || ou;
  return iu.forEach(r, function(s) {
    e = s.call(i, e, n);
  }), e;
}, Br, Lo;
function Tl() {
  return Lo || (Lo = 1, Br = function(e) {
    return !!(e && e.__CANCEL__);
  }), Br;
}
var Fo = Se, Wr = su, lu = Tl(), au = Fi, cu = kr();
function Vr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new cu();
}
var uu = function(e) {
  Vr(e), e.headers = e.headers || {}, e.data = Wr.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = Fo.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), Fo.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(i) {
      delete e.headers[i];
    }
  );
  var n = e.adapter || au.adapter;
  return n(e).then(function(i) {
    return Vr(e), i.data = Wr.call(
      e,
      i.data,
      i.headers,
      e.transformResponse
    ), i;
  }, function(i) {
    return lu(i) || (Vr(e), i && i.response && (i.response.data = Wr.call(
      e,
      i.response.data,
      i.response.headers,
      e.transformResponse
    ))), Promise.reject(i);
  });
}, Me = Se, xl = function(e, n) {
  n = n || {};
  var r = {};
  function i(u, f) {
    return Me.isPlainObject(u) && Me.isPlainObject(f) ? Me.merge(u, f) : Me.isPlainObject(f) ? Me.merge({}, f) : Me.isArray(f) ? f.slice() : f;
  }
  function o(u) {
    if (Me.isUndefined(n[u])) {
      if (!Me.isUndefined(e[u]))
        return i(void 0, e[u]);
    } else
      return i(e[u], n[u]);
  }
  function s(u) {
    if (!Me.isUndefined(n[u]))
      return i(void 0, n[u]);
  }
  function l(u) {
    if (Me.isUndefined(n[u])) {
      if (!Me.isUndefined(e[u]))
        return i(void 0, e[u]);
    } else
      return i(void 0, n[u]);
  }
  function c(u) {
    if (u in n)
      return i(e[u], n[u]);
    if (u in e)
      return i(void 0, e[u]);
  }
  var a = {
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
    validateStatus: c
  };
  return Me.forEach(Object.keys(e).concat(Object.keys(n)), function(f) {
    var d = a[f] || o, h = d(f);
    Me.isUndefined(h) && d !== c || (r[f] = h);
  }), r;
}, qr, zo;
function Pl() {
  return zo || (zo = 1, qr = {
    version: "0.27.2"
  }), qr;
}
var fu = Pl().version, ht = gn, zi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  zi[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var Bo = {};
zi.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + fu + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return function(o, s, l) {
    if (e === !1)
      throw new ht(
        i(s, " has been removed" + (n ? " in " + n : "")),
        ht.ERR_DEPRECATED
      );
    return n && !Bo[s] && (Bo[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
function du(t, e, n) {
  if (typeof t != "object")
    throw new ht("options must be an object", ht.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
    var o = r[i], s = e[o];
    if (s) {
      var l = t[o], c = l === void 0 || s(l, o, t);
      if (c !== !0)
        throw new ht("option " + o + " must be " + c, ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ht("Unknown option " + o, ht.ERR_BAD_OPTION);
  }
}
var hu = {
  assertOptions: du,
  validators: zi
}, Il = Se, pu = wl, Wo = jc, Vo = uu, Ar = xl, gu = Al, Rl = hu, Ft = Rl.validators;
function rn(t) {
  this.defaults = t, this.interceptors = {
    request: new Wo(),
    response: new Wo()
  };
}
rn.prototype.request = function(e, n) {
  typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ar(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && Rl.assertOptions(r, {
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
    var c = [Vo, void 0];
    for (Array.prototype.unshift.apply(c, i), c = c.concat(s), l = Promise.resolve(n); c.length; )
      l = l.then(c.shift(), c.shift());
    return l;
  }
  for (var a = n; i.length; ) {
    var u = i.shift(), f = i.shift();
    try {
      a = u(a);
    } catch (d) {
      f(d);
      break;
    }
  }
  try {
    l = Vo(a);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; s.length; )
    l = l.then(s.shift(), s.shift());
  return l;
};
rn.prototype.getUri = function(e) {
  e = Ar(this.defaults, e);
  var n = gu(e.baseURL, e.url);
  return pu(n, e.params, e.paramsSerializer);
};
Il.forEach(["delete", "get", "head", "options"], function(e) {
  rn.prototype[e] = function(n, r) {
    return this.request(Ar(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
Il.forEach(["post", "put", "patch"], function(e) {
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
var mu = rn, Gr, qo;
function vu() {
  if (qo)
    return Gr;
  qo = 1;
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
      var s, l = new Promise(function(c) {
        i.subscribe(c), s = c;
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
var Jr, Go;
function _u() {
  return Go || (Go = 1, Jr = function(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }), Jr;
}
var Xr, Jo;
function bu() {
  if (Jo)
    return Xr;
  Jo = 1;
  var t = Se;
  return Xr = function(n) {
    return t.isObject(n) && n.isAxiosError === !0;
  }, Xr;
}
var Xo = Se, yu = _l, er = mu, wu = xl, Su = Fi;
function Ol(t) {
  var e = new er(t), n = yu(er.prototype.request, e);
  return Xo.extend(n, er.prototype, e), Xo.extend(n, e), n.create = function(i) {
    return Ol(wu(t, i));
  }, n;
}
var De = Ol(Su);
De.Axios = er;
De.CanceledError = kr();
De.CancelToken = vu();
De.isCancel = Tl();
De.VERSION = Pl().version;
De.toFormData = $l;
De.AxiosError = gn;
De.Cancel = De.CanceledError;
De.all = function(e) {
  return Promise.all(e);
};
De.spread = _u();
De.isAxiosError = bu();
mc.exports = De;
lr.default = De;
(function(t) {
  t.exports = lr;
})(gc);
const ye = /* @__PURE__ */ pc(gi);
var vi = function(t, e) {
  return vi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, vi(t, e);
};
function Qe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Eu(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
}
function Dl(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(a) {
    return function(u) {
      return c([a, u]);
    };
  }
  function c(a) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done)
          return o;
        switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
          case 0:
          case 1:
            o = a;
            break;
          case 4:
            return n.label++, { value: a[1], done: !1 };
          case 5:
            n.label++, i = a[1], a = [0];
            continue;
          case 7:
            a = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              n = 0;
              continue;
            }
            if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
              n.label = a[1];
              break;
            }
            if (a[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = a;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(a);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        a = e.call(t, n);
      } catch (u) {
        a = [6, u], i = 0;
      } finally {
        r = o = 0;
      }
    if (a[0] & 5)
      throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
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
function bt(t, e) {
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
function yt(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function Xt(t) {
  return this instanceof Xt ? (this.v = t, this) : new Xt(t);
}
function Cu(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(h) {
      return new Promise(function(g, p) {
        o.push([d, h, g, p]) > 1 || l(d, h);
      });
    });
  }
  function l(d, h) {
    try {
      c(r[d](h));
    } catch (g) {
      f(o[0][3], g);
    }
  }
  function c(d) {
    d.value instanceof Xt ? Promise.resolve(d.value.v).then(a, u) : f(o[0][2], d);
  }
  function a(d) {
    l("next", d);
  }
  function u(d) {
    l("throw", d);
  }
  function f(d, h) {
    d(h), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function ku(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof on == "function" ? on(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(o) {
    n[o] = t[o] && function(s) {
      return new Promise(function(l, c) {
        s = t[o](s), i(l, c, s.done, s.value);
      });
    };
  }
  function i(o, s, l, c) {
    Promise.resolve(c).then(function(a) {
      o({ value: a, done: l });
    }, s);
  }
}
function ie(t) {
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
            for (var l = on(s), c = l.next(); !c.done; c = l.next()) {
              var a = c.value;
              a.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              c && !c.done && (n = l.return) && n.call(l);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          s.remove(this);
      var u = this.initialTeardown;
      if (ie(u))
        try {
          u();
        } catch (p) {
          o = p instanceof Kr ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = on(f), h = d.next(); !h.done; h = d.next()) {
            var g = h.value;
            try {
              Ko(g);
            } catch (p) {
              o = o ?? [], p instanceof Kr ? o = yt(yt([], bt(o)), bt(p.errors)) : o.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
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
        Ko(e);
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
}(), Nl = jn.EMPTY;
function Ml(t) {
  return t instanceof jn || t && "closed" in t && ie(t.remove) && ie(t.add) && ie(t.unsubscribe);
}
function Ko(t) {
  ie(t) ? t() : t.unsubscribe();
}
var Ul = {
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
    return i != null && i.setTimeout ? i.setTimeout.apply(i, yt([t, e], bt(n))) : setTimeout.apply(void 0, yt([t, e], bt(n)));
  },
  clearTimeout: function(t) {
    var e = _i.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Hl(t) {
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
  Qe(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Ml(n) && n.add(r)) : r.destination = xu, r;
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
}(jn), $u = Function.prototype.bind;
function Yr(t, e) {
  return $u.call(t, e);
}
var Au = function() {
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
  Qe(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    if (ie(n) || !n)
      s = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      o && Ul.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && Yr(n.next, l),
        error: n.error && Yr(n.error, l),
        complete: n.complete && Yr(n.complete, l)
      }) : s = n;
    }
    return o.destination = new Au(s), o;
  }
  return e;
}(Wi);
function Bn(t) {
  Hl(t);
}
function Tu(t) {
  throw t;
}
var xu = {
  closed: !0,
  next: bi,
  error: Tu,
  complete: bi
}, Vi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function mn(t) {
  return t;
}
function Pu(t) {
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
    var i = this, o = Ru(e) ? e : new sn(e, n, r);
    return tr(function() {
      var s = i, l = s.operator, c = s.source;
      o.add(l ? l.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Yo(n), new n(function(i, o) {
      var s = new sn({
        next: function(l) {
          try {
            e(l);
          } catch (c) {
            o(c), s.unsubscribe();
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
    return Pu(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Yo(e), new e(function(r, i) {
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
function Yo(t) {
  var e;
  return (e = t ?? Ul.Promise) !== null && e !== void 0 ? e : Promise;
}
function Iu(t) {
  return t && ie(t.next) && ie(t.error) && ie(t.complete);
}
function Ru(t) {
  return t && t instanceof Wi || Iu(t) && Ml(t);
}
function Ou(t) {
  return ie(t == null ? void 0 : t.lift);
}
function xe(t) {
  return function(e) {
    if (Ou(e))
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
function _e(t, e, n, r, i) {
  return new Du(t, e, n, r, i);
}
var Du = function(t) {
  Qe(e, t);
  function e(n, r, i, o, s, l) {
    var c = t.call(this, n) || this;
    return c.onFinalize = s, c.shouldUnsubscribe = l, c._next = r ? function(a) {
      try {
        r(a);
      } catch (u) {
        n.error(u);
      }
    } : t.prototype._next, c._error = o ? function(a) {
      try {
        o(a);
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (a) {
        n.error(a);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, c;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(Wi), Nu = Bi(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ke = function(t) {
  Qe(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Qo(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Nu();
  }, e.prototype.next = function(n) {
    var r = this;
    tr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = on(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
            var c = l.value;
            c.next(n);
          }
        } catch (a) {
          i = { error: a };
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
    return o || s ? Nl : (this.currentObservers = null, l.push(n), new jn(function() {
      r.currentObservers = null, cr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new $e();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Qo(n, r);
  }, e;
}($e), Qo = function(t) {
  Qe(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Nl;
  }, e;
}(ke), qi = function(t) {
  Qe(e, t);
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
}, jl = function(t) {
  Qe(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = Gi);
    var o = t.call(this) || this;
    return o._bufferSize = n, o._windowTime = r, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = !0, o._infiniteTimeWindow = r === 1 / 0, o._bufferSize = Math.max(1, n), o._windowTime = Math.max(1, r), o;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, o = r._buffer, s = r._infiniteTimeWindow, l = r._timestampProvider, c = r._windowTime;
    i || (o.push(n), !s && o.push(l.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, o = i._infiniteTimeWindow, s = i._buffer, l = s.slice(), c = 0; c < l.length && !n.closed; c += o ? 1 : 2)
      n.next(l[c]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, o = n._buffer, s = n._infiniteTimeWindow, l = (s ? 1 : 2) * r;
    if (r < 1 / 0 && l < o.length && o.splice(0, o.length - l), !s) {
      for (var c = i.now(), a = 0, u = 1; u < o.length && o[u] <= c; u += 2)
        a = u;
      a && o.splice(0, a + 1);
    }
  }, e;
}(ke), Mu = function(t) {
  Qe(e, t);
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
    return i != null && i.setInterval ? i.setInterval.apply(i, yt([t, e], bt(n))) : setInterval.apply(void 0, yt([t, e], bt(n)));
  },
  clearInterval: function(t) {
    var e = ur.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, Uu = function(t) {
  Qe(e, t);
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
}(Mu), Zo = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Gi.now, t;
}(), Hu = function(t) {
  Qe(e, t);
  function e(n, r) {
    r === void 0 && (r = Zo.now);
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
}(Zo), Tr = new Hu(Uu), ju = Tr, Lu = new $e(function(t) {
  return t.complete();
});
function Ll(t) {
  return t && ie(t.schedule);
}
function Fl(t) {
  return t[t.length - 1];
}
function Fu(t) {
  return ie(Fl(t)) ? t.pop() : void 0;
}
function Ji(t) {
  return Ll(Fl(t)) ? t.pop() : void 0;
}
var zl = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Bl(t) {
  return ie(t == null ? void 0 : t.then);
}
function Wl(t) {
  return ie(t[Vi]);
}
function Vl(t) {
  return Symbol.asyncIterator && ie(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function ql(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function zu() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Gl = zu();
function Jl(t) {
  return ie(t == null ? void 0 : t[Gl]);
}
function Xl(t) {
  return Cu(this, arguments, function() {
    var n, r, i, o;
    return Dl(this, function(s) {
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
function Kl(t) {
  return ie(t == null ? void 0 : t.getReader);
}
function Ge(t) {
  if (t instanceof $e)
    return t;
  if (t != null) {
    if (Wl(t))
      return Bu(t);
    if (zl(t))
      return Wu(t);
    if (Bl(t))
      return Vu(t);
    if (Vl(t))
      return Yl(t);
    if (Jl(t))
      return qu(t);
    if (Kl(t))
      return Gu(t);
  }
  throw ql(t);
}
function Bu(t) {
  return new $e(function(e) {
    var n = t[Vi]();
    if (ie(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Wu(t) {
  return new $e(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Vu(t) {
  return new $e(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Hl);
  });
}
function qu(t) {
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
function Yl(t) {
  return new $e(function(e) {
    Ju(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Gu(t) {
  return Yl(Xl(t));
}
function Ju(t, e) {
  var n, r, i, o;
  return Eu(this, void 0, void 0, function() {
    var s, l;
    return Dl(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = ku(t), c.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = c.sent(), !!r.done)
            return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return l = c.sent(), i = { error: l }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8];
        case 7:
          c.sent(), c.label = 8;
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
function ot(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function Ql(t, e) {
  return e === void 0 && (e = 0), xe(function(n, r) {
    n.subscribe(_e(r, function(i) {
      return ot(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ot(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ot(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Zl(t, e) {
  return e === void 0 && (e = 0), xe(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Xu(t, e) {
  return Ge(t).pipe(Zl(e), Ql(e));
}
function Ku(t, e) {
  return Ge(t).pipe(Zl(e), Ql(e));
}
function Yu(t, e) {
  return new $e(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Qu(t, e) {
  return new $e(function(n) {
    var r;
    return ot(n, e, function() {
      r = t[Gl](), ot(n, e, function() {
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
      return ie(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function ea(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new $e(function(n) {
    ot(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ot(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Zu(t, e) {
  return ea(Xl(t), e);
}
function ef(t, e) {
  if (t != null) {
    if (Wl(t))
      return Xu(t, e);
    if (zl(t))
      return Yu(t, e);
    if (Bl(t))
      return Ku(t, e);
    if (Vl(t))
      return ea(t, e);
    if (Jl(t))
      return Qu(t, e);
    if (Kl(t))
      return Zu(t, e);
  }
  throw ql(t);
}
function Ut(t, e) {
  return e ? ef(t, e) : Ge(t);
}
function Kt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ji(t);
  return Ut(t, n);
}
function Xi(t) {
  return !!t && (t instanceof $e || ie(t.lift) && ie(t.subscribe));
}
var tf = Bi(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Dt(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new sn({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new tf());
      }
    });
    t.subscribe(o);
  });
}
function nf(t) {
  return t instanceof Date && !isNaN(t);
}
function ln(t, e) {
  return xe(function(n, r) {
    var i = 0;
    n.subscribe(_e(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var rf = Array.isArray;
function of(t, e) {
  return rf(e) ? t.apply(void 0, yt([], bt(e))) : t(e);
}
function sf(t) {
  return ln(function(e) {
    return of(t, e);
  });
}
var lf = Array.isArray, af = Object.getPrototypeOf, cf = Object.prototype, uf = Object.keys;
function ff(t) {
  if (t.length === 1) {
    var e = t[0];
    if (lf(e))
      return { args: e, keys: null };
    if (df(e)) {
      var n = uf(e);
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
function df(t) {
  return t && typeof t == "object" && af(t) === cf;
}
function hf(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function ta() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ji(t), r = Fu(t), i = ff(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return Ut([], n);
  var l = new $e(pf(o, n, s ? function(c) {
    return hf(s, c);
  } : mn));
  return r ? l.pipe(sf(r)) : l;
}
function pf(t, e, n) {
  return n === void 0 && (n = mn), function(r) {
    es(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, c = function(u) {
        es(e, function() {
          var f = Ut(t[u], e), d = !1;
          f.subscribe(_e(r, function(h) {
            o[u] = h, d || (d = !0, l--), l || r.next(n(o.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, a = 0; a < i; a++)
        c(a);
    }, r);
  };
}
function es(t, e, n) {
  t ? ot(n, t, e) : e();
}
function gf(t, e, n, r, i, o, s, l) {
  var c = [], a = 0, u = 0, f = !1, d = function() {
    f && !c.length && !a && e.complete();
  }, h = function(p) {
    return a < r ? g(p) : c.push(p);
  }, g = function(p) {
    o && e.next(p), a++;
    var v = !1;
    Ge(n(p, u++)).subscribe(_e(e, function(x) {
      i == null || i(x), o ? h(x) : e.next(x);
    }, function() {
      v = !0;
    }, void 0, function() {
      if (v)
        try {
          a--;
          for (var x = function() {
            var y = c.shift();
            s ? ot(e, s, function() {
              return g(y);
            }) : g(y);
          }; c.length && a < r; )
            x();
          d();
        } catch (y) {
          e.error(y);
        }
    }));
  };
  return t.subscribe(_e(e, h, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function na(t, e, n) {
  return n === void 0 && (n = 1 / 0), ie(e) ? na(function(r, i) {
    return ln(function(o, s) {
      return e(r, o, i, s);
    })(Ge(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), xe(function(r, i) {
    return gf(r, i, t, n);
  }));
}
function mf(t) {
  return t === void 0 && (t = 1 / 0), na(mn, t);
}
function vf() {
  return mf(1);
}
function _f() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return vf()(Ut(t, Ji(t)));
}
function ra(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = ju);
  var r = -1;
  return e != null && (Ll(e) ? n = e : r = e), new $e(function(i) {
    var o = nf(t) ? +t - n.now() : t;
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
    n.subscribe(_e(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function bf(t) {
  return xe(function(e, n) {
    var r = !1, i = null, o = null, s = !1, l = function() {
      if (o == null || o.unsubscribe(), o = null, r) {
        r = !1;
        var a = i;
        i = null, n.next(a);
      }
      s && n.complete();
    }, c = function() {
      o = null, s && n.complete();
    };
    e.subscribe(_e(n, function(a) {
      r = !0, i = a, o || Ge(t(a)).subscribe(o = _e(n, l, c));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function yf(t, e) {
  return e === void 0 && (e = Tr), bf(function() {
    return ra(t, e);
  });
}
function ia(t) {
  return xe(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(_e(n, void 0, void 0, function(s) {
      o = Ge(t(s, ia(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function wf(t, e) {
  return e === void 0 && (e = Tr), xe(function(n, r) {
    var i = null, o = null, s = null, l = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var a = o;
        o = null, r.next(a);
      }
    };
    function c() {
      var a = s + t, u = e.now();
      if (u < a) {
        i = this.schedule(void 0, a - u), r.add(i);
        return;
      }
      l();
    }
    n.subscribe(_e(r, function(a) {
      o = a, s = e.now(), i || (i = e.schedule(c, t), r.add(i));
    }, function() {
      l(), r.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function Sf(t) {
  return t <= 0 ? function() {
    return Lu;
  } : xe(function(e, n) {
    var r = 0;
    e.subscribe(_e(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Ef(t) {
  return ln(function() {
    return t;
  });
}
function Cf(t, e) {
  return e === void 0 && (e = mn), t = t ?? kf, xe(function(n, r) {
    var i, o = !0;
    n.subscribe(_e(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function kf(t, e) {
  return t === e;
}
function $f(t, e) {
  return Cf(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function Af(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new ke();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, c = l === void 0 ? !0 : l;
  return function(a) {
    var u, f, d, h = 0, g = !1, p = !1, v = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, x = function() {
      v(), u = d = void 0, g = p = !1;
    }, y = function() {
      var b = u;
      x(), b == null || b.unsubscribe();
    };
    return xe(function(b, _) {
      h++, !p && !g && v();
      var m = d = d ?? n();
      _.add(function() {
        h--, h === 0 && !p && !g && (f = Qr(y, c));
      }), m.subscribe(_), !u && h > 0 && (u = new sn({
        next: function(w) {
          return m.next(w);
        },
        error: function(w) {
          p = !0, v(), f = Qr(x, i, w), m.error(w);
        },
        complete: function() {
          g = !0, v(), f = Qr(x, s), m.complete();
        }
      }), Ge(b).subscribe(u));
    })(a);
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
    return e.apply(void 0, yt([], bt(n))).subscribe(i);
  }
}
function Tf(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, Af({
    connector: function() {
      return new jl(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function xf(t) {
  return Tn(function(e, n) {
    return t <= n;
  });
}
function oa(t, e) {
  return xe(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(_e(r, function(c) {
      i == null || i.unsubscribe();
      var a = 0, u = o++;
      Ge(t(c, u)).subscribe(i = _e(r, function(f) {
        return r.next(e ? e(c, f, u, a++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function st(t) {
  return xe(function(e, n) {
    Ge(t).subscribe(_e(n, function() {
      return n.complete();
    }, bi)), !n.closed && e.subscribe(n);
  });
}
function Pf(t, e, n) {
  var r = ie(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? xe(function(i, o) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var l = !0;
    i.subscribe(_e(o, function(c) {
      var a;
      (a = r.next) === null || a === void 0 || a.call(r, c), o.next(c);
    }, function() {
      var c;
      l = !1, (c = r.complete) === null || c === void 0 || c.call(r), o.complete();
    }, function(c) {
      var a;
      l = !1, (a = r.error) === null || a === void 0 || a.call(r, c), o.error(c);
    }, function() {
      var c, a;
      l && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (a = r.finalize) === null || a === void 0 || a.call(r);
    }));
  }) : mn;
}
var sa = {
  leading: !0,
  trailing: !1
};
function If(t, e) {
  return e === void 0 && (e = sa), xe(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, c = null, a = !1, u = function() {
      c == null || c.unsubscribe(), c = null, o && (h(), a && r.complete());
    }, f = function() {
      c = null, a && r.complete();
    }, d = function(g) {
      return c = Ge(t(g)).subscribe(_e(r, u, f));
    }, h = function() {
      if (s) {
        s = !1;
        var g = l;
        l = null, r.next(g), !a && d(g);
      }
    };
    n.subscribe(_e(r, function(g) {
      s = !0, l = g, !(c && !c.closed) && (i ? h() : d(g));
    }, function() {
      a = !0, !(o && s && c && !c.closed) && r.complete();
    }));
  });
}
function Rf(t, e, n) {
  e === void 0 && (e = Tr), n === void 0 && (n = sa);
  var r = ra(t, e);
  return If(function() {
    return r;
  }, n);
}
class fr {
  static isPromise(e) {
    return e && typeof e.then == "function";
  }
}
function xn(t) {
  return fr.isPromise(t) ? t : Xi(t) ? Dt(t) : Promise.resolve(t);
}
var ts = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
};
class vn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, fr.isPromise(n) ? n.then((r) => this.accessToken = r) : this.accessToken = n;
  }
  getAuthorizationHeader() {
    return ts(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield xn(this.accessToken)}`
      };
    });
  }
  getAccessTokenAsPromise() {
    return Xi(this.accessToken) ? Dt(this.accessToken) : fr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
  getStructureUrl() {
    return ts(this, void 0, void 0, function* () {
      const e = yield xn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Structure}`;
    });
  }
  static requestHttpConfig(e) {
    return ye.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
  static isApiReachable(e) {
    return ye.get(`${e}/api/structure/about/version`).then((n) => n.status === 200 || n.status === 401).catch((n) => {
      var r;
      return ((r = n == null ? void 0 : n.response) === null || r === void 0 ? void 0 : r.status) === 401;
    });
  }
}
var tt = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
};
class Nt extends vn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return tt(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return tt(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield ye.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return tt(this, void 0, void 0, function* () {
      const o = `${yield this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), c = yield ye.post(o, s, { headers: l });
      if (r) {
        console.log(c.headers);
        const a = JSON.parse(c.headers["paging-headers"]), u = Number(a.TotalCount);
        return {
          data: c.data,
          total: u
        };
      }
      return {
        data: c.data,
        total: c.data.length
      };
    });
  }
  resolvePathName(e) {
    return tt(this, void 0, void 0, function* () {
      const n = yield this.queryConfiguration(q.Group, { Id: { $in: e } });
      return e.map((r) => {
        var i, o;
        return (o = (i = n.data.find((s) => s.Id === r)) === null || i === void 0 ? void 0 : i.Name) !== null && o !== void 0 ? o : r;
      }).join("/");
    });
  }
  uploadProcessImage(e, n, r = "process-image.svg") {
    return tt(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(q.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield ye.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return tt(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return ye.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return tt(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`, i = yield this.getAuthorizationHeader();
      return ye.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return tt(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return ye.delete(r, { headers: i }).then();
    });
  }
  _createBaseUrlByType(e) {
    return tt(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${Qa[e]}`;
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
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
};
class Pn extends vn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return Zr(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield ye.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return Zr(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield ye.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return Zr(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield ye.get(n, { headers: r })).data;
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
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
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
      return e.length === 0 ? "" : Dt(ta(e.map((n) => this.resolveName(q.Group, n))).pipe(ln((n) => n.join(" / "))));
    });
  }
  resolveName(e, n) {
    return ei(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = Ut(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(ln((r) => r.Name.Value), Tf(1), ia(() => Kt(n)))), Dt(this._nameCache[n]);
    });
  }
}
var Of = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
};
class Pm extends vn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Of(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield ye.get(`${yield this.getStructureUrl()}/userprofile`, {
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
var ns = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
};
class yi extends vn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return ns(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield ye.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return ns(this, void 0, void 0, function* () {
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
class Df extends Error {
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
class Nf extends Error {
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
class Mf extends Error {
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
class Uf extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class Hf extends Error {
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
class la {
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
const jf = "6.0.8";
class me {
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
class we {
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
  return Qi(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Lf(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Lf(t) {
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
async function aa(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [c, a] = cn();
  l[c] = a, t.log(C.Trace, `(${e} transport) sending data. ${Dn(o, s.logMessageContent)}.`);
  const u = Qi(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(C.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function Ff(t) {
  return t === void 0 ? new dr(C.Information) : t === null ? On.instance : t.log !== void 0 ? t : new dr(t);
}
class zf {
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
  return we.isNode && (t = "User-Agent"), [t, Bf(jf, Wf(), qf(), Vf())];
}
function Bf(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Wf() {
  if (we.isNode)
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
function Vf() {
  if (we.isNode)
    return process.versions.node;
}
function qf() {
  return we.isNode ? "NodeJS" : "Browser";
}
function rs(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Gf() {
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
class Jf extends Yi {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Gf());
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
      const c = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(C.Warning, "Timeout from HTTP request."), r = new Ki();
      }, c);
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
    } catch (c) {
      throw r || (this._logger.log(C.Warning, `Error from HTTP request. ${c}.`), c);
    } finally {
      i && clearTimeout(i), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!o.ok) {
      const c = await is(o, "text");
      throw new an(c || o.statusText, o.status);
    }
    const l = await is(o, e.responseType);
    return new la(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return we.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function is(t, e) {
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
class Xf extends Yi {
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
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new la(i.status, i.statusText, i.response || i.responseText)) : r(new an(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(C.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new an(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(C.Warning, "Timeout from HTTP request."), r(new Ki());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class Kf extends Yi {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || we.isNode)
      this._httpClient = new Jf(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Xf(e);
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
class Ue {
  static write(e) {
    return `${e}${Ue.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== Ue.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(Ue.RecordSeparator);
    return n.pop(), n;
  }
}
Ue.RecordSeparatorCode = 30;
Ue.RecordSeparator = String.fromCharCode(Ue.RecordSeparatorCode);
class Yf {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return Ue.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (Qi(e)) {
      const l = new Uint8Array(e), c = l.indexOf(Ue.RecordSeparatorCode);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(l.slice(0, a))), r = l.byteLength > a ? l.slice(a).buffer : null;
    } else {
      const l = e, c = l.indexOf(Ue.RecordSeparator);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = l.substring(0, a), r = l.length > a ? l.substring(a) : null;
    }
    const i = Ue.parse(n), o = JSON.parse(i[0]);
    if (o.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, o];
  }
}
var Q;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(Q || (Q = {}));
class Qf {
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
    return this.observers.push(e), new zf(this, e);
  }
}
const Zf = 30 * 1e3, ed = 15 * 1e3;
var ne;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(ne || (ne = {}));
class Zi {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(C.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, me.isRequired(e, "connection"), me.isRequired(n, "logger"), me.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = Zf, this.keepAliveIntervalInMilliseconds = ed, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new Yf(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = ne.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: Q.Ping });
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
    if (this._connectionState !== ne.Disconnected && this._connectionState !== ne.Reconnecting)
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
    if (this._connectionState !== ne.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = ne.Connecting, this._logger.log(C.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), we.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = ne.Connected, this._connectionStarted = !0, this._logger.log(C.Debug, "HubConnection connected successfully.");
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
    return this._connectionState === ne.Disconnected ? (this._logger.log(C.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === ne.Disconnecting ? (this._logger.log(C.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = ne.Disconnecting, this._logger.log(C.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(C.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
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
    const l = new Qf();
    return l.cancelCallback = () => {
      const c = this._createCancelInvocation(o.invocationId);
      return delete this._callbacks[o.invocationId], s.then(() => this._sendWithProtocol(c));
    }, this._callbacks[o.invocationId] = (c, a) => {
      if (a) {
        l.error(a);
        return;
      } else
        c && (c.type === Q.Completion ? c.error ? l.error(new Error(c.error)) : l.complete() : l.next(c.item));
    }, s = this._sendWithProtocol(o).catch((c) => {
      l.error(c), delete this._callbacks[o.invocationId];
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
    return new Promise((l, c) => {
      this._callbacks[o.invocationId] = (u, f) => {
        if (f) {
          c(f);
          return;
        } else
          u && (u.type === Q.Completion ? u.error ? c(new Error(u.error)) : l(u.result) : c(new Error(`Unexpected message type: ${u.type}`)));
      };
      const a = this._sendWithProtocol(o).catch((u) => {
        c(u), delete this._callbacks[o.invocationId];
      });
      this._launchStreams(r, a);
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
                this._logger.log(C.Error, `Stream callback threw error: ${rs(o)}`);
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
    this._logger.log(C.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === ne.Disconnecting ? this._completeClose(e) : this._connectionState === ne.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === ne.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = ne.Disconnected, this._connectionStarted = !1, we.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
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
        this._logger.log(C.Error, `Stream 'error' callback called with '${e}' threw error: ${rs(o)}`);
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
const td = [0, 2e3, 1e4, 3e4, null];
class os {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : td;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class Pt {
}
Pt.Authorization = "Authorization";
Pt.Cookie = "Cookie";
var he;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(he || (he = {}));
var Ce;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(Ce || (Ce = {}));
let nd = class {
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
class ss {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new nd(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (me.isRequired(e, "url"), me.isRequired(n, "transferFormat"), me.isIn(n, Ce, "transferFormat"), this._url = e, this._logger.log(C.Trace, "(LongPolling transport) Connecting."), n === Ce.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
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
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(C.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, s);
    a.statusCode !== 200 ? (this._logger.log(C.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new an(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[Pt.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[Pt.Authorization] && delete e.headers[Pt.Authorization];
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
    return this._running ? aa(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
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
class rd {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (me.isRequired(e, "url"), me.isRequired(n, "transferFormat"), me.isIn(n, Ce, "transferFormat"), this._logger.log(C.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
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
      if (we.isBrowser || we.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), c = {};
        c.Cookie = l;
        const [a, u] = cn();
        c[a] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(C.Trace, `(SSE transport) data received. ${Dn(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
            } catch (c) {
              this._close(c);
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
    return this._eventSource ? aa(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class id {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (me.isRequired(e, "url"), me.isRequired(n, "transferFormat"), me.isIn(n, Ce, "transferFormat"), this._logger.log(C.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (we.isNode) {
        const c = {}, [a, u] = cn();
        c[a] = u, s && (c[Pt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...c, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === Ce.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
        this._logger.log(C.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (c) => {
        let a = null;
        typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "There was an error with the transport", this._logger.log(C.Information, `(WebSockets transport) ${a}.`);
      }, o.onmessage = (c) => {
        if (this._logger.log(C.Trace, `(WebSockets transport) data received. ${Dn(c.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(c.data);
          } catch (a) {
            this._close(a);
            return;
          }
      }, o.onclose = (c) => {
        if (l)
          this._close(c);
        else {
          let a = null;
          typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", i(new Error(a));
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
const ls = 100;
class od {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, me.isRequired(e, "url"), this._logger = Ff(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (we.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !we.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : we.isNode && !n.WebSocket && r && (n.WebSocket = r), !we.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : we.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new Kf(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || Ce.Binary, me.isIn(e, Ce, "transferFormat"), this._logger.log(C.Debug, `Starting connection with transfer format '${Ce[e]}'.`), this._connectionState !== "Disconnected")
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
        if (this._options.transport === he.WebSockets)
          this.transport = this._constructTransport(he.WebSockets), await this._startTransport(n, e);
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
        } while (r.url && i < ls);
        if (i === ls && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof ss && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(C.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(C.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[Pt.Authorization] = `Bearer ${s}`);
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
      return s instanceof an && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(C.Error, l), Promise.reject(new Uf(l));
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
    let c = r;
    for (const a of l) {
      const u = this._resolveTransportOrError(a, n, i);
      if (u instanceof Error)
        s.push(`${a.transport} failed:`), s.push(u);
      else if (this._isITransport(u)) {
        if (this.transport = u, !c) {
          try {
            c = await this._getNegotiationResponse(e);
          } catch (f) {
            return Promise.reject(f);
          }
          o = this._createConnectUrl(e, c.connectionToken);
        }
        try {
          await this._startTransport(o, i), this.connectionId = c.connectionId;
          return;
        } catch (f) {
          if (this._logger.log(C.Error, `Failed to start the transport '${a.transport}': ${f}`), c = void 0, s.push(new Mf(`${a.transport} failed: ${f}`, he[a.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(C.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new Hf(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case he.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new id(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case he.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new rd(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case he.LongPolling:
        return new ss(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = he[e.transport];
    if (i == null)
      return this._logger.log(C.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (sd(n, i))
      if (e.transferFormats.map((s) => Ce[s]).indexOf(r) >= 0) {
        if (i === he.WebSockets && !this._options.WebSocket || i === he.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(C.Debug, `Skipping transport '${he[i]}' because it is not supported in your environment.'`), new Df(`'${he[i]}' is not supported in your environment.`, i);
        this._logger.log(C.Debug, `Selecting transport '${he[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(C.Debug, `Skipping transport '${he[i]}' because it does not support the requested transfer format '${Ce[r]}'.`), new Error(`'${he[i]}' does not support ${Ce[r]}.`);
    else
      return this._logger.log(C.Debug, `Skipping transport '${he[i]}' because it was disabled by the client.`), new Nf(`'${he[i]}' is disabled by the client.`, i);
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
    if (!we.isBrowser)
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
function sd(t, e) {
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
const ld = "json";
class ad {
  constructor() {
    this.name = ld, this.version = 1, this.transferFormat = Ce.Text;
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
    const r = Ue.parse(e), i = [];
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
    return Ue.write(JSON.stringify(e));
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
const cd = {
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
function ud(t) {
  const e = cd[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class fd {
  configureLogging(e) {
    if (me.isRequired(e, "logging"), dd(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = ud(e);
      this.logger = new dr(n);
    } else
      this.logger = new dr(e);
    return this;
  }
  withUrl(e, n) {
    return me.isRequired(e, "url"), me.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return me.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new os(e) : this.reconnectPolicy = e : this.reconnectPolicy = new os(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new od(this.url, e);
    return Zi.create(n, this.logger || On.instance, this.protocol || new ad(), this.reconnectPolicy);
  }
}
function dd(t) {
  return t.log !== void 0;
}
var hd = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
}, $n;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})($n || ($n = {}));
var as;
(function(t) {
  t.Send = "Send";
})(as || (as = {}));
var cs;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC";
})(cs || (cs = {}));
class wi {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new ke(), this._connectionEstablished = new qi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new ke(), this._subscribeRequested = new ke(), this._handleSubscriptionQueue();
  }
  connect() {
    return hd(this, void 0, void 0, function* () {
      const e = yield xn(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Dt(this._connectionEstablished.pipe(Tn((n) => n), Ef(null)));
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
    return r.length > 0 ? _f(Kt(r), i) : i;
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(st(this._unsub), yf(50)).subscribe(() => {
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
    return new fd().withUrl(e, {
      accessTokenFactory: () => this.getAccessTokenAsPromise()
    }).build();
  }
  getAccessTokenAsPromise() {
    return Xi(this.accessToken) ? Dt(this.accessToken) : fr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
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
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
};
class us extends vn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield ye.post(`${n}value/manyflat`, e, {
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
      return ye.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return ye.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return yn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return ye.post(n + "/value/nth", e, {
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
function pd(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function l(u) {
      try {
        a(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        a(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function a(u) {
      u.done ? o(u.value) : i(u.value).then(l, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
}
function gd(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(a) {
    return function(u) {
      return c([a, u]);
    };
  }
  function c(a) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done)
          return o;
        switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
          case 0:
          case 1:
            o = a;
            break;
          case 4:
            return n.label++, { value: a[1], done: !1 };
          case 5:
            n.label++, i = a[1], a = [0];
            continue;
          case 7:
            a = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              n = 0;
              continue;
            }
            if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
              n.label = a[1];
              break;
            }
            if (a[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = a;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(a);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        a = e.call(t, n);
      } catch (u) {
        a = [6, u], i = 0;
      } finally {
        r = o = 0;
      }
    if (a[0] & 5)
      throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
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
function At() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(hr(arguments[e]));
  return t;
}
function ca(t) {
  return !!t.useClass;
}
function Ci(t) {
  return !!t.useFactory;
}
var ua = function() {
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
        return l.apply(void 0, At(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function zt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function md(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function fs(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function vd(t) {
  return typeof t == "function" || t instanceof ua;
}
function nr(t) {
  return !!t.useToken;
}
function rr(t) {
  return t.useValue != null;
}
function _d(t) {
  return ca(t) || rr(t) || nr(t) || Ci(t);
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
}(), bd = function(t) {
  to(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(no), ds = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function yd(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function wd(t, e, n) {
  return n === void 0 && (n = "    "), At([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function Sd(t, e, n) {
  var r = hr(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = yd(o, e);
  return wd("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function Ed(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var Cd = function(t) {
  to(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(no), kd = function(t) {
  to(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(no), $d = function() {
  function t() {
    this.preResolution = new Cd(), this.postResolution = new kd();
  }
  return t;
}(), Ad = /* @__PURE__ */ new Map(), Td = function() {
  function t(e) {
    this.parent = e, this._registry = new bd(), this.interceptors = new $d(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Pe.Transient }), this.ensureNotDisposed();
    var i;
    if (_d(n) ? i = n : i = { useClass: n }, nr(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + At(o, [l]).join(" -> "));
        o.push(l);
        var c = this._registry.get(l);
        c && nr(c.provider) ? s = c.provider : s = null;
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
    n === void 0 && (n = new ds()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && zt(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (vd(e)) {
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
          var c = l.value;
          c.options.frequency != "Once" && o.push(c), c.callback(e, n);
        }
      } catch (a) {
        r = { error: a };
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
        for (var l = Vn(this.interceptors.postResolution.getAll(e)), c = l.next(); !c.done; c = l.next()) {
          var a = c.value;
          a.options.frequency != "Once" && s.push(a), a.callback(e, n, r);
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          c && !c.done && (o = l.return) && o.call(l);
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
    return rr(e.provider) ? s = e.provider.useValue : nr(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : ca(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : Ci(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Pe.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new ds()), this.ensureNotDisposed();
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
        this._registry.setAll(s, l.filter(function(c) {
          return !rr(c.provider);
        }).map(function(c) {
          return c.instance = void 0, c;
        }));
      }
    } catch (c) {
      e = { error: c };
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
        var s = hr(o.value, 2), l = s[0], c = s[1];
        c.some(function(a) {
          var u = a.options;
          return u.lifecycle === Pe.ContainerScoped;
        }) && r._registry.setAll(l, c.map(function(a) {
          return a.options.lifecycle === Pe.ContainerScoped ? {
            provider: a.provider,
            options: a.options
          } : a;
        }));
      }
    } catch (a) {
      e = { error: a };
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
    return pd(this, void 0, void 0, function() {
      var e;
      return gd(this, function(n) {
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
    if (e instanceof ua)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = Ad.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, At([void 0], s)))();
    }();
    return Ed(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, c;
      try {
        return md(i) ? fs(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, At([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, At([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : fs(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, At([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (a) {
        throw new Error(Sd(n, o, a));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), fa = new Td();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function J() {
}
function xd(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Pd(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function da(t) {
  return t();
}
function hs() {
  return /* @__PURE__ */ Object.create(null);
}
function at(t) {
  t.forEach(da);
}
function ha(t) {
  return typeof t == "function";
}
function le(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Id(t) {
  return Object.keys(t).length === 0;
}
function He(t, e, n, r) {
  if (t) {
    const i = pa(t, e, n, r);
    return t[0](i);
  }
}
function pa(t, e, n, r) {
  return t[1] && r ? xd(n.ctx.slice(), t[1](r(e))) : n.ctx;
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
    const s = pa(e, n, r, o);
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
function oe(t) {
  return t ?? "";
}
function T(t, e) {
  t.appendChild(e);
}
function Ht(t, e, n) {
  const r = Rd(t);
  if (!r.getElementById(e)) {
    const i = I("style");
    i.id = e, i.textContent = n, Od(r, i);
  }
}
function Rd(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Od(t, e) {
  return T(t.head || t, e), e.sheet;
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function wt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function I(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function M() {
  return j(" ");
}
function xr() {
  return j("");
}
function re(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function E(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Dd(t) {
  return Array.from(t.childNodes);
}
function ve(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function pr(t, e) {
  t.value = e ?? "";
}
function ki(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Nd(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Nn;
function it(t) {
  Nn = t;
}
function jt() {
  if (!Nn)
    throw new Error("Function called outside component initialization");
  return Nn;
}
function ga(t) {
  jt().$$.on_mount.push(t);
}
function Md(t) {
  jt().$$.after_update.push(t);
}
function St(t) {
  jt().$$.on_destroy.push(t);
}
function We() {
  const t = jt();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Nd(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function pt(t, e) {
  return jt().$$.context.set(t, e), e;
}
function Oe(t) {
  return jt().$$.context.get(t);
}
const Gt = [], ue = [];
let Yt = [];
const $i = [], Ud = /* @__PURE__ */ Promise.resolve();
let Ai = !1;
function Hd() {
  Ai || (Ai = !0, Ud.then(ro));
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
        Bt++, it(e), jd(e.$$);
      }
    } catch (e) {
      throw Gt.length = 0, Bt = 0, e;
    }
    for (it(null), Gt.length = 0, Bt = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < Yt.length; e += 1) {
      const n = Yt[e];
      ti.has(n) || (ti.add(n), n());
    }
    Yt.length = 0;
  } while (Gt.length);
  for (; $i.length; )
    $i.pop()();
  Ai = !1, ti.clear(), it(t);
}
function jd(t) {
  if (t.fragment !== null) {
    t.update(), at(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ti);
  }
}
function Ld(t) {
  const e = [], n = [];
  Yt.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Yt = e;
}
const ir = /* @__PURE__ */ new Set();
let xt;
function fe() {
  xt = {
    r: 0,
    c: [],
    p: xt
    // parent group
  };
}
function de() {
  xt.r || at(xt.c), xt = xt.p;
}
function A(t, e) {
  t && t.i && (ir.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (ir.has(t))
      return;
    ir.add(t), xt.c.push(() => {
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
    let c = e.ctx;
    s !== void 0 && (c = c.slice(), c[s] = l);
    const a = i && (e.current = i)(c);
    let u = !1;
    e.block && (e.blocks ? e.blocks.forEach((f, d) => {
      d !== o && f && (fe(), P(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), de());
    }) : e.block.d(1), a.c(), A(a, 1), a.m(e.mount(), e.anchor), u = !0), e.block = a, e.blocks && (e.blocks[o] = a), u && ro();
  }
  if (Pd(t)) {
    const i = jt();
    if (t.then((o) => {
      it(i), r(e.then, 1, e.value, o), it(null);
    }, (o) => {
      if (it(i), r(e.catch, 2, e.error, o), it(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ma(t, e, n) {
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
    const s = t.$$.on_mount.map(da).filter(ha);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : at(s), t.$$.on_mount = [];
  }), o.forEach(Ti);
}
function F(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ld(n.after_update), at(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Fd(t, e) {
  t.$$.dirty[0] === -1 && (Gt.push(t), Hd(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ae(t, e, n, r, i, o, s, l = [-1]) {
  const c = Nn;
  it(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: J,
    not_equal: i,
    bound: hs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: hs(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const g = h.length ? h[0] : d;
    return a.ctx && i(a.ctx[f], a.ctx[f] = g) && (!a.skip_bound && a.bound[f] && a.bound[f](g), u && Fd(t, f)), d;
  }) : [], a.update(), u = !0, at(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Dd(e.target);
      a.fragment && a.fragment.l(f), f.forEach(R);
    } else
      a.fragment && a.fragment.c();
    e.intro && A(t.$$.fragment), L(t, e.target, e.anchor, e.customElement), ro();
  }
  it(c);
}
class ce {
  $destroy() {
    F(this, 1), this.$destroy = J;
  }
  $on(e, n) {
    if (!ha(n))
      return J;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Id(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const zd = {
  [Pn.toString()]: "TenantHttpService",
  [yi.toString()]: "DataSourceHttpService",
  [Nt.toString()]: "EntityHttpService",
  [In.toString()]: "EntityNameService",
  [vn.toString()]: "BaseHttpService",
  [wi.toString()]: "LiveValueService"
};
function Te(t, e = null) {
  let n = zd[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? fa;
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
function dt(t, e, n = !0) {
  const r = window.dependencyContainer ?? fa;
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
const va = new qi(!1), Bd = va.asObservable().pipe(Tn((t) => !t), Sf(1)), ps = {}, oo = /* @__PURE__ */ new Map(), so = new ke();
so.asObservable();
function Wd(t) {
  oo.set(t.name, t), so.next({
    type: "add",
    store: t
  });
}
function Vd(t) {
  oo.delete(t.name), so.next({
    type: "remove",
    store: t
  });
}
function qd() {
  return oo;
}
class lo extends qi {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Wd(this);
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
    ps.preStoreUpdate && (r = ps.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, va.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Bd.subscribe(() => {
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
    Vd(this), this.reset();
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
function Gd(t, ...e) {
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
function Jd(t, e) {
  var n;
  const r = {
    source: (a) => a,
    preStoreInit: (a) => a,
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
  } = e, s = new jl(1), l = Ut(o.getItem(i.key)).subscribe((a) => {
    a && t.update((u) => i.preStoreInit(Object.assign({}, u, a))), s.next(!0), s.complete();
  }), c = i.source(t).pipe(xf(1), oa((a) => o.setItem(i.key, a))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      c.unsubscribe(), l.unsubscribe();
    }
  };
}
function Xd(t) {
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
const Kd = Xd(typeof localStorage < "u" ? localStorage : void 0), Wt = [];
function mr(t, e = J) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (le(t, l) && (t = l, n)) {
      const c = !Wt.length;
      for (const a of r)
        a[1](), Wt.push(a, t);
      if (c) {
        for (let a = 0; a < Wt.length; a += 2)
          Wt[a][0](Wt[a + 1]);
        Wt.length = 0;
      }
    }
  }
  function o(l) {
    i(l(t));
  }
  function s(l, c = J) {
    const a = [l, c];
    return r.add(a), r.size === 1 && (n = e(i) || J), l(t), () => {
      r.delete(a), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
const gs = mr(q.Signal), { config: Yd, state: Qd } = io(
  ao({
    queryWithSubGroups: !0,
    selectedTenant: null
  })
), It = Gd({ name: "entity-select-selection" }, ao({
  selectedEntities: []
})), Rt = new lo({ state: Qd, config: Yd, name: "entity-select-global" });
Jd(Rt, {
  key: "entity-select-global",
  storage: Kd
});
const un = (t) => {
  const e = qd().get(`entity-select-type-${gs}`);
  if (e)
    return e;
  const { state: n, config: r } = io(
    ao({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new lo({ state: n, config: r, name: `entity-select-type-${gs}` });
};
function ms(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function Zd(t) {
  let e;
  return {
    c() {
      e = I("div"), E(
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
function eh(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? nh : th
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = I("div"), i.c(), E(
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
function th(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("span"), n = j("chevron_right"), E(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), T(e, n), r || (i = re(
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
function nh(t) {
  let e, n, r, i;
  return {
    c() {
      e = I("span"), n = j("expand_more"), E(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), T(e, n), r || (i = re(
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
function vs(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = _s(ms(t, s, a));
  const c = (a) => P(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = I("div"), n = I("div"), r = M(), i = I("div");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      E(
        n,
        "class",
        /*tw*/
        t[5]`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`
      ), E(
        i,
        "class",
        /*tw*/
        t[5]`w-full`
      ), E(
        e,
        "class",
        /*tw*/
        t[5]`flex w-full`
      );
    },
    m(a, u) {
      O(a, e, u), T(e, n), T(e, r), T(e, i);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, null);
      o = !0;
    },
    p(a, u) {
      if (u & /*children, level, entityType*/
      28) {
        s = /*children*/
        a[4];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const d = ms(a, s, f);
          l[f] ? (l[f].p(d, u), A(l[f], 1)) : (l[f] = _s(d), l[f].c(), A(l[f], 1), l[f].m(i, null));
        }
        for (fe(), f = s.length; f < l.length; f += 1)
          c(f);
        de();
      }
    },
    i(a) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          A(l[u]);
        o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        P(l[u]);
      o = !1;
    },
    d(a) {
      a && R(e), wt(l, a);
    }
  };
}
function _s(t) {
  let e, n;
  return e = new _a({
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
function rh(t) {
  var x, y;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((y = (x = t[1]) == null ? void 0 : x.Name) == null ? void 0 : y.Value) + ""
  ), c, a, u, f, d;
  function h(b, _) {
    return (
      /*children*/
      b[4].length > 0 ? eh : Zd
    );
  }
  let g = h(t), p = g(t), v = (
    /*expanded*/
    t[0] && vs(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), r = I("div"), i = M(), p.c(), o = M(), s = I("div"), c = j(l), a = M(), v && v.c(), E(
        s,
        "class",
        /*tw*/
        t[5]`overflow-hidden whitespace-nowrap text-ellipsis w-full`
      ), E(
        n,
        "class",
        /*tw*/
        t[5]`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`
      ), E(
        e,
        "class",
        /*tw*/
        t[5]`group cursor-pointer`
      );
    },
    m(b, _) {
      O(b, e, _), T(e, n), T(n, r), T(n, i), p.m(n, null), T(n, o), T(n, s), T(s, c), T(e, a), v && v.m(e, null), u = !0, f || (d = re(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), f = !0);
    },
    p(b, [_]) {
      var m, w;
      g === (g = h(b)) && p ? p.p(b, _) : (p.d(1), p = g(b), p && (p.c(), p.m(n, o))), (!u || _ & /*group*/
      2) && l !== (l = /*group*/
      ((w = (m = b[1]) == null ? void 0 : m.Name) == null ? void 0 : w.Value) + "") && ve(c, l), /*expanded*/
      b[0] ? v ? (v.p(b, _), _ & /*expanded*/
      1 && A(v, 1)) : (v = vs(b), v.c(), A(v, 1), v.m(e, null)) : v && (fe(), P(v, 1, 1, () => {
        v = null;
      }), de());
    },
    i(b) {
      u || (A(v), u = !0);
    },
    o(b) {
      P(v), u = !1;
    },
    d(b) {
      b && R(e), p.d(), v && v.d(), f = !1, d();
    }
  };
}
function ih(t, e, n) {
  const r = Te(Nt);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, c = Oe("tw"), a = [], u = new ke(), f = un();
  f.pipe(st(u), $f("selectedGroup")).subscribe((y) => {
    var b, _;
    (b = y.selectedGroup) == null || b.Id, i == null || i.Id, i && ((_ = y.selectedGroup) != null && _.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, a = await (await r.queryConfiguration(q.Group, { GroupId: i.Id })).data);
    } catch (y) {
      console.error(y);
    }
  }
  function h() {
    n(0, o = !o);
  }
  function g() {
    f.update((y) => ({ ...y, selectedGroup: i }));
  }
  St(() => {
    u.next(), u.complete();
  });
  const p = () => h(), v = () => h(), x = () => g();
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
    a,
    c,
    h,
    g,
    p,
    v,
    x
  ];
}
class _a extends ce {
  constructor(e) {
    super(), ae(this, e, ih, rh, le, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function oh(t) {
  Ht(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function sh(t) {
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
      1 && ve(
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
function lh(t) {
  let e, n, r, i, o, s, l, c, a, u;
  const f = (
    /*#slots*/
    t[11].default
  ), d = He(
    f,
    t,
    /*$$scope*/
    t[10],
    null
  ), h = d || sh(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = M(), o = I("span"), h && h.c(), E(n, "class", oe(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), E(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), E(o, "class", oe(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none`
      ) + " svelte-1b4yyah"), E(e, "class", s = oe(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), E(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(g, p) {
      O(g, e, p), T(e, n), T(e, i), T(e, o), h && h.m(o, null), c = !0, a || (u = [
        re(
          e,
          "mousedown",
          /*mousedown_handler*/
          t[12]
        ),
        re(
          e,
          "mouseup",
          /*mouseup_handler*/
          t[13]
        ),
        re(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[14]
        ),
        re(
          e,
          "click",
          /*click_handler*/
          t[15]
        ),
        re(e, "blur", ah)
      ], a = !0);
    },
    p(g, [p]) {
      (!c || p & /*active*/
      16 && r !== (r = /*active*/
      g[4] ? "width: 100% !important; height: 100% !important" : "")) && E(n, "style", r), d ? d.p && (!c || p & /*$$scope*/
      1024) && Le(
        d,
        f,
        g,
        /*$$scope*/
        g[10],
        c ? je(
          f,
          /*$$scope*/
          g[10],
          p,
          null
        ) : Fe(
          /*$$scope*/
          g[10]
        ),
        null
      ) : h && h.p && (!c || p & /*icon*/
      1) && h.p(g, c ? p : -1), (!c || p & /*className*/
      2 && s !== (s = oe(
        /*tw*/
        g[5]`container group ${/*className*/
        g[1]}`
      ) + " svelte-1b4yyah")) && E(e, "class", s), (!c || p & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      g[3] + "px; width: " + /*absoluteSize*/
      g[3] + "px; " + /*disabled*/
      (g[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && E(e, "style", l);
    },
    i(g) {
      c || (A(h, g), c = !0);
    },
    o(g) {
      P(h, g), c = !1;
    },
    d(g) {
      g && R(e), h && h.d(g), a = !1, at(u);
    }
  };
}
const ah = (t) => {
};
function ch(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: c = !1 } = e, a = Oe("tw"), u, f, d, h = We();
  function g(m) {
    c || (n(4, f = !0), d = m.timeStamp);
  }
  function p(m) {
    const w = m.timeStamp - d;
    w < 300 ? setTimeout(
      () => {
        n(4, f = !1);
      },
      300 - w
    ) : n(4, f = !1);
  }
  function v(m) {
    c || h("click", m);
  }
  const x = (m) => g(m), y = (m) => p(m), b = (m) => p(m), _ = (m) => v(m);
  return t.$$set = (m) => {
    "icon" in m && n(0, o = m.icon), "size" in m && n(9, s = m.size), "className" in m && n(1, l = m.className), "disabled" in m && n(2, c = m.disabled), "$$scope" in m && n(10, i = m.$$scope);
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
    c,
    u,
    f,
    a,
    g,
    p,
    v,
    s,
    i,
    r,
    x,
    y,
    b,
    _
  ];
}
class vt extends ce {
  constructor(e) {
    super(), ae(
      this,
      e,
      ch,
      lh,
      le,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      oh
    );
  }
}
function uh(t) {
  let e, n, r, i, o, s, l, c, a;
  return {
    c() {
      e = I("div"), n = I("input"), i = M(), o = I("div"), s = j(
        /*label*/
        t[1]
      ), E(n, "type", "checkbox"), E(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), E(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      O(u, e, f), T(e, n), t[6](n), n.checked = /*checked*/
      t[0], T(e, i), T(e, o), T(o, s), c || (a = [
        re(
          n,
          "change",
          /*input_change_handler*/
          t[7]
        ),
        re(
          e,
          "click",
          /*click_handler*/
          t[8]
        )
      ], c = !0);
    },
    p(u, [f]) {
      f & /*tw*/
      4 && r !== (r = /*tw*/
      u[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && E(n, "class", r), f & /*checked*/
      1 && (n.checked = /*checked*/
      u[0]), f & /*label*/
      2 && ve(
        s,
        /*label*/
        u[1]
      ), f & /*tw*/
      4 && l !== (l = /*tw*/
      u[2]`flex items-center cursor-pointer`) && E(e, "class", l);
    },
    i: J,
    o: J,
    d(u) {
      u && R(e), t[6](null), c = !1, at(a);
    }
  };
}
function fh(t, e, n) {
  let { label: r = "" } = e, { checked: i = !1 } = e, { indeterminate: o = !1 } = e, { tw: s = Oe("tw") } = e, l = We(), c;
  function a(h) {
    n(0, i = !i), l("change", { checked: i });
  }
  function u(h) {
    ue[h ? "unshift" : "push"](() => {
      c = h, n(3, c), n(5, o), n(0, i);
    });
  }
  function f() {
    i = this.checked, n(0, i);
  }
  const d = (h) => a();
  return t.$$set = (h) => {
    "label" in h && n(1, r = h.label), "checked" in h && n(0, i = h.checked), "indeterminate" in h && n(5, o = h.indeterminate), "tw" in h && n(2, s = h.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*indeterminate, checkboxElement, checked*/
    41 && (o && c && !i ? n(3, c.indeterminate = !0, c) : c && (n(3, c.indeterminate = !1, c), n(3, c.checked = i, c)));
  }, [
    i,
    r,
    s,
    c,
    a,
    o,
    u,
    f,
    d
  ];
}
class Ln extends ce {
  constructor(e) {
    super(), ae(this, e, fh, uh, le, {
      label: 1,
      checked: 0,
      indeterminate: 5,
      tw: 2
    });
  }
}
function bs(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function dh(t) {
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
function ys(t) {
  let e, n, r;
  return n = new _a({
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
      e = I("div"), B(n.$$.fragment), E(
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
function ws(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Es(bs(t, r, s));
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
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(s, l);
      O(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*tw, selectLastSelected, lastSelectedEntities, nameService, entityType, selectedEntityLookup, selectMultiple*/
      757) {
        r = /*lastSelectedEntities*/
        s[4];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const a = bs(s, r, c);
          i[c] ? (i[c].p(a, l), A(i[c], 1)) : (i[c] = Es(a), i[c].c(), A(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (fe(), c = r.length; c < i.length; c += 1)
          o(c);
        de();
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
      wt(i, s), s && R(e);
    }
  };
}
function Ss(t) {
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
function hh(t) {
  return { c: J, m: J, p: J, d: J };
}
function ph(t) {
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
      r[21] + "") && ve(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function gh(t) {
  return { c: J, m: J, p: J, d: J };
}
function Es(t) {
  let e, n, r, i, o, s, l, c = (
    /*selectMultiple*/
    t[2] && Ss(t)
  ), a = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: gh,
    then: ph,
    catch: hh,
    value: 21
  };
  gr(r = /*nameService*/
  t[6].resolveName(
    /*entityType*/
    t[0],
    /*entityId*/
    t[18]
  ), a);
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
      e = I("div"), c && c.c(), n = M(), a.block.c(), i = M(), E(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      O(f, e, d), c && c.m(e, null), T(e, n), a.block.m(e, a.anchor = null), a.mount = () => e, a.anchor = i, T(e, i), o = !0, s || (l = re(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? c ? (c.p(t, d), d & /*selectMultiple*/
      4 && A(c, 1)) : (c = Ss(t), c.c(), A(c, 1), c.m(e, n)) : c && (fe(), P(c, 1, 1, () => {
        c = null;
      }), de()), a.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && gr(r, a) || ma(a, t, d);
    },
    i(f) {
      o || (A(c), o = !0);
    },
    o(f) {
      P(c), o = !1;
    },
    d(f) {
      f && R(e), c && c.d(), a.block.d(), a.token = null, a = null, s = !1, l();
    }
  };
}
function mh(t) {
  var y;
  let e, n, r = (
    /*selectedTenant*/
    ((y = t[1]) == null ? void 0 : y.Name) + ""
  ), i, o, s, l, c, a, u, f, d, h, g, p;
  s = new vt({
    props: {
      size: "small",
      $$slots: { default: [dh] },
      $$scope: { ctx: t }
    }
  });
  let v = (
    /*rootGroup*/
    t[3] && ys(t)
  ), x = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && ws(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), i = j(r), o = M(), B(s.$$.fragment), l = M(), v && v.c(), c = M(), a = I("div"), u = I("div"), f = j("Zuletzt ausgewählt"), d = M(), x && x.c(), E(
        n,
        "class",
        /*tw*/
        t[7]`font-bold text-lg flex items-center cursor-pointer group`
      ), E(
        u,
        "class",
        /*tw*/
        t[7]`font-bold text-gray-700`
      ), E(
        a,
        "class",
        /*tw*/
        t[7]`flex-1`
      ), E(
        e,
        "class",
        /*tw*/
        t[7]`flex flex-col w-full h-full overflow-hidden`
      );
    },
    m(b, _) {
      O(b, e, _), T(e, n), T(n, i), T(n, o), L(s, n, null), T(e, l), v && v.m(e, null), T(e, c), T(e, a), T(a, u), T(u, f), T(a, d), x && x.m(a, null), h = !0, g || (p = re(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), g = !0);
    },
    p(b, [_]) {
      var w;
      (!h || _ & /*selectedTenant*/
      2) && r !== (r = /*selectedTenant*/
      ((w = b[1]) == null ? void 0 : w.Name) + "") && ve(i, r);
      const m = {};
      _ & /*$$scope*/
      4194304 && (m.$$scope = { dirty: _, ctx: b }), s.$set(m), /*rootGroup*/
      b[3] ? v ? (v.p(b, _), _ & /*rootGroup*/
      8 && A(v, 1)) : (v = ys(b), v.c(), A(v, 1), v.m(e, c)) : v && (fe(), P(v, 1, 1, () => {
        v = null;
      }), de()), /*lastSelectedEntities*/
      b[4] && /*lastSelectedEntities*/
      b[4].length > 0 ? x ? (x.p(b, _), _ & /*lastSelectedEntities*/
      16 && A(x, 1)) : (x = ws(b), x.c(), A(x, 1), x.m(a, null)) : x && (fe(), P(x, 1, 1, () => {
        x = null;
      }), de());
    },
    i(b) {
      h || (A(s.$$.fragment, b), A(v), A(x), h = !0);
    },
    o(b) {
      P(s.$$.fragment, b), P(v), P(x), h = !1;
    },
    d(b) {
      b && R(e), F(s), v && v.d(), x && x.d(), g = !1, p();
    }
  };
}
function vh(t, e, n) {
  let r = Te(Nt), i = Te(In), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, c = Oe("tw"), a = null, u, f = [], d = {}, h = We(), g = new ke(), p = un();
  p.pipe(st(g)).subscribe((m) => {
    n(4, u = m.lastSelectedEntities);
  });
  const v = It.subscribe((m) => {
    f = m.selectedEntities, n(5, d = {});
    for (let w of f)
      n(5, d[w.Id] = !0, d);
  });
  async function x(m) {
    var w;
    try {
      n(3, a = await r.getEntityById(q.Group, m)), (!((w = p.value) != null && w.selectedGroup) || p.value.selectedGroup.Id != a.Id) && p.update((k) => ({ ...k, selectedGroup: a }));
    } catch (k) {
      console.log(k);
    }
  }
  async function y(m) {
    let w = await r.getEntityById(o, m);
    l ? d[m] ? f = f.filter((k) => k.Id !== m) : f.push(w) : f = [w], It.update((k) => ({ ...k, selectedEntities: f }));
  }
  Md(() => {
    try {
      s && s.Root && a === null && x(s.Root);
    } catch {
    }
  }), St(() => {
    console.log("onDestroy"), v.unsubscribe();
  });
  const b = () => h("changeTenant"), _ = (m) => y(m);
  return t.$$set = (m) => {
    "entityType" in m && n(0, o = m.entityType), "selectedTenant" in m && n(1, s = m.selectedTenant), "selectMultiple" in m && n(2, l = m.selectMultiple);
  }, [
    o,
    s,
    l,
    a,
    u,
    d,
    i,
    c,
    h,
    y,
    b,
    _
  ];
}
class _h extends ce {
  constructor(e) {
    super(), ae(this, e, vh, mh, le, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const bh = (t) => ({}), Cs = (t) => ({});
function yh(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[2].default
  ), s = He(
    o,
    t,
    /*$$scope*/
    t[1],
    null
  ), l = (
    /*#slots*/
    t[2].pagination
  ), c = He(
    l,
    t,
    /*$$scope*/
    t[1],
    Cs
  );
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), r = M(), c && c.c(), E(n, "class", "w-full overflow-auto flex-1"), E(e, "class", "flex flex-col h-full");
    },
    m(a, u) {
      O(a, e, u), T(e, n), s && s.m(n, null), T(e, r), c && c.m(e, null), i = !0;
    },
    p(a, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      2) && Le(
        s,
        o,
        a,
        /*$$scope*/
        a[1],
        i ? je(
          o,
          /*$$scope*/
          a[1],
          u,
          null
        ) : Fe(
          /*$$scope*/
          a[1]
        ),
        null
      ), c && c.p && (!i || u & /*$$scope*/
      2) && Le(
        c,
        l,
        a,
        /*$$scope*/
        a[1],
        i ? je(
          l,
          /*$$scope*/
          a[1],
          u,
          bh
        ) : Fe(
          /*$$scope*/
          a[1]
        ),
        Cs
      );
    },
    i(a) {
      i || (A(s, a), A(c, a), i = !0);
    },
    o(a) {
      P(s, a), P(c, a), i = !1;
    },
    d(a) {
      a && R(e), s && s.d(a), c && c.d(a);
    }
  };
}
function wh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = We(), l = mr(o);
  pt("audako:table:sort", l);
  let c = l.subscribe((a) => {
    s("sort", a);
  });
  return St(() => {
    c();
  }), t.$$set = (a) => {
    "startSort" in a && n(0, o = a.startSort), "$$scope" in a && n(1, i = a.$$scope);
  }, [o, i, r];
}
class Sh extends ce {
  constructor(e) {
    super(), ae(this, e, wh, yh, le, { startSort: 0 });
  }
}
function Eh(t) {
  Ht(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function Ch(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[2].default
  ), i = He(
    r,
    t,
    /*$$scope*/
    t[1],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), E(e, "class", "audako-tableheader-flexrow");
    },
    m(o, s) {
      O(o, e, s), i && i.m(e, null), t[3](e), n = !0;
    },
    p(o, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && Le(
        i,
        r,
        o,
        /*$$scope*/
        o[1],
        n ? je(
          r,
          /*$$scope*/
          o[1],
          s,
          null
        ) : Fe(
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
function kh(t, e, n) {
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
class $h extends ce {
  constructor(e) {
    super(), ae(this, e, kh, Ch, le, {}, Eh);
  }
}
function Ah(t) {
  Ht(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function ks(t) {
  let e, n, r;
  return {
    c() {
      e = I("span"), n = j("north"), E(e, "class", "material-symbols-rounded text-xs transition-all"), E(e, "style", r = /*sortDirection*/
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
      (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && E(e, "style", r);
    },
    d(i) {
      i && R(e);
    }
  };
}
function Th(t) {
  let e, n, r, i, o, s, l;
  const c = (
    /*#slots*/
    t[6].default
  ), a = He(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let u = (
    /*sortable*/
    t[0] && ks(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), a && a.c(), r = M(), u && u.c(), E(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      O(f, e, d), T(e, n), a && a.m(n, null), T(e, r), u && u.m(e, null), o = !0, s || (l = re(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(f, [d]) {
      a && a.p && (!o || d & /*$$scope*/
      32) && Le(
        a,
        c,
        f,
        /*$$scope*/
        f[5],
        o ? je(
          c,
          /*$$scope*/
          f[5],
          d,
          null
        ) : Fe(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*sortable*/
      f[0] ? u ? u.p(f, d) : (u = ks(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
      3 && i !== (i = "header-cell " + /*sortable*/
      (f[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      f[1] + " svelte-11sxgak")) && E(e, "class", i);
    },
    i(f) {
      o || (A(a, f), o = !0);
    },
    o(f) {
      P(a, f), o = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), u && u.d(), s = !1, l();
    }
  };
}
function xh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, c = "asc", a = Oe("audako:table:sort");
  console.log(a);
  let u = a.subscribe((h) => {
    s && (h == null ? void 0 : h.active) === s ? n(2, c = h.direction) : n(2, c = null);
  });
  function f() {
    c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), a.set(c ? { active: s, direction: c } : null);
  }
  St(() => {
    u();
  });
  const d = () => f();
  return t.$$set = (h) => {
    "sortable" in h && n(0, o = h.sortable), "id" in h && n(4, s = h.id), "container$class" in h && n(1, l = h.container$class), "$$scope" in h && n(5, i = h.$$scope);
  }, [
    o,
    l,
    c,
    f,
    s,
    i,
    r,
    d
  ];
}
class xi extends ce {
  constructor(e) {
    super(), ae(this, e, xh, Th, le, { sortable: 0, id: 4, container$class: 1 }, Ah);
  }
}
function Ph(t) {
  Ht(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function Ih(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[3].default
  ), l = He(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = I("div"), l && l.c(), E(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(c, a) {
      O(c, e, a), l && l.m(e, null), r = !0, i || (o = re(
        e,
        "click",
        /*onClick*/
        t[1]
      ), i = !0);
    },
    p(c, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      4) && Le(
        l,
        s,
        c,
        /*$$scope*/
        c[2],
        r ? je(
          s,
          /*$$scope*/
          c[2],
          a,
          null
        ) : Fe(
          /*$$scope*/
          c[2]
        ),
        null
      ), (!r || a & /*flexrow$class*/
      1 && n !== (n = "audako-tablebody-flexrow " + /*flexrow$class*/
      c[0])) && E(e, "class", n);
    },
    i(c) {
      r || (A(l, c), r = !0);
    },
    o(c) {
      P(l, c), r = !1;
    },
    d(c) {
      c && R(e), l && l.d(c), i = !1, o();
    }
  };
}
function Rh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = We();
  function l(c) {
    s("click", c);
  }
  return t.$$set = (c) => {
    "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
  }, [o, l, i, r];
}
class Oh extends ce {
  constructor(e) {
    super(), ae(this, e, Rh, Ih, le, { flexrow$class: 0 }, Ph);
  }
}
function Dh(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[3].default
  ), o = He(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = I("div"), o && o.c(), E(e, "class", n = /*tw*/
      t[1]`border-t overflow-hidden ${/*container$class*/
      t[0]}`);
    },
    m(s, l) {
      O(s, e, l), o && o.m(e, null), r = !0;
    },
    p(s, [l]) {
      o && o.p && (!r || l & /*$$scope*/
      4) && Le(
        o,
        i,
        s,
        /*$$scope*/
        s[2],
        r ? je(
          i,
          /*$$scope*/
          s[2],
          l,
          null
        ) : Fe(
          /*$$scope*/
          s[2]
        ),
        null
      ), (!r || l & /*container$class*/
      1 && n !== (n = /*tw*/
      s[1]`border-t overflow-hidden ${/*container$class*/
      s[0]}`)) && E(e, "class", n);
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
function Nh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = Oe("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class Pi extends ce {
  constructor(e) {
    super(), ae(this, e, Nh, Dh, le, { container$class: 0 });
  }
}
var qn, Mh = new Uint8Array(16);
function Uh() {
  if (!qn && (qn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !qn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qn(Mh);
}
const Hh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function jh(t) {
  return typeof t == "string" && Hh.test(t);
}
var be = [];
for (var ni = 0; ni < 256; ++ni)
  be.push((ni + 256).toString(16).substr(1));
function Lh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (be[t[e + 0]] + be[t[e + 1]] + be[t[e + 2]] + be[t[e + 3]] + "-" + be[t[e + 4]] + be[t[e + 5]] + "-" + be[t[e + 6]] + be[t[e + 7]] + "-" + be[t[e + 8]] + be[t[e + 9]] + "-" + be[t[e + 10]] + be[t[e + 11]] + be[t[e + 12]] + be[t[e + 13]] + be[t[e + 14]] + be[t[e + 15]]).toLowerCase();
  if (!jh(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function Fh(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || Uh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return Lh(r);
}
const zh = {
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
    Je(this, "_popupContainer");
    Je(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...zh, ...r }, console.log("openPopup", r);
    const i = Fh(), o = new ke(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
    r.inTransitionClassList && (l.style.transition = `all ${r.inTransitionDuration ?? 100}ms`, l.classList.add(r.inTransitionClassList)), s.appendChild(l);
    const c = () => {
      console.log("close"), this._removePopupWrapper(l, r), o.next(null), o.complete();
    };
    return r.closeOnClickOutside && s.addEventListener("click", (u) => {
      u.target === s && c();
    }), this._positionPopup(s, l, r), n.style.visibility = "visible", r.inTransitionClassList && (n.classList.add(r.inTransitionClassList), n.style.transition = `all ${r.inTransitionDuration ?? 100}ms`), {
      popupId: i,
      afterClosed: Dt(o).then(() => console.log("afterClosed")),
      close: c
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
    var c, a, u, f, d;
    const i = n.style, o = e.getBoundingClientRect(), s = n.getBoundingClientRect();
    console.log("popupRect", s, n.style, r);
    const l = (c = r.anchorElement) == null ? void 0 : c.getBoundingClientRect();
    i.position = "absolute", r.positioning === "center" ? (i.top = "50%", i.left = "50%", i.transform = "translate(-50%, -50%)") : r.positioning === "anchor" ? (n.style.top = `${this._getTopPosition(l.top, s.height, o.height, l.height, r.anchorVertical ?? "bottom") + (((a = r.customPosition) == null ? void 0 : a.y) ?? 0)}px`, n.style.left = `${this._getLeftPosition(l.left - 4, s.width, o.width, r.anchorHorizontal ?? "right") + (((u = r.customPosition) == null ? void 0 : u.x) ?? 0)}px`) : r.positioning === "custom" && (n.style.top = `${this._getTopPosition(r.customPosition.y, s.height, o.height) + (((f = r.customPosition) == null ? void 0 : f.y) ?? 0)}px`, n.style.left = `${this._getLeftPosition(r.customPosition.x, s.width, o.width) + (((d = r.customPosition) == null ? void 0 : d.x) ?? 0)}px`);
  }
  _getTopPosition(e, n, r, i = 0, o = "bottom") {
    return o == "top" ? e + n + 40 < r ? e + i / 3 : e - n + i / 3 : e - n > 40 ? e - n + i / 3 : e + i / 3;
  }
  _getLeftPosition(e, n, r, i = "right") {
    return console.log(arguments), i == "left" ? Math.min(e, r - n - 10) : e - n > 40 ? e - n : e + n;
  }
}
var Bh = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Wh(t) {
  return Bh.get(t);
}
function Vh(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function qh(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var te = (t, e) => !!~t.indexOf(e), V = (t, e = "-") => t.join(e), Ii = (t, e) => V(t.filter(Boolean), e), W = (t, e = 1) => t.slice(e), Gh = (t) => t, ba = () => {
}, Ke = (t) => t[0].toUpperCase() + W(t), co = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Ot = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, ya = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, wa = (t, e) => !te("@:&", t[0]) && (te("rg", (typeof e)[5]) || Array.isArray(e)), uo = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Ot(e[i], n);
  return wa(i, o) ? r[co(i)] = o : r[i] = i[0] == "@" && te("figa", i[1]) ? (r[i] || []).concat(o) : uo(r[i] || {}, o, n), r;
}, t) : t, Sa = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), Pr = (t) => (Array.isArray(t) || (t = [t]), "@media " + V(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || V(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), ri = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Jh = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, lt, en, gt = (t = "") => (lt.push(t), ""), fo = (t) => {
  lt.length = Math.max(lt.lastIndexOf("") + ~~t, 0);
}, Xh = (t) => t && !te("!:", t[0]), Kh = (t) => t[0] == ":", Ea = (t, e) => {
  en.push({
    v: lt.filter(Kh),
    d: t,
    n: e,
    i: te(lt, "!"),
    $: ""
  });
}, $s = (t) => {
  const e = t[0] == "-";
  e && (t = W(t));
  const n = V(lt.filter(Xh));
  return Ea(t == "&" ? n : (n && n + "-") + t, e), "";
}, An = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && gt(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && gt(n), gt();
        break;
      case "!":
        gt(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && $s(n), fo(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? gt(":" + n) : n.slice(-1) == "-" ? gt(n.slice(0, -1)) : $s(n));
}, Ca = (t) => {
  gt(), _r(t), fo();
}, Yh = (t, e) => {
  if (e) {
    gt();
    const n = te("tbu", (typeof e)[1]);
    An(t, n), n && Ca(e), fo();
  }
}, _r = (t) => {
  switch (typeof t) {
    case "string":
      An(t);
      break;
    case "function":
      Ea(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(Ca) : t && Object.keys(t).forEach((e) => {
        Yh(e, t[e]);
      });
  }
}, As = /* @__PURE__ */ new WeakMap(), Qh = (t) => {
  let e = As.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || te(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (c) => {
          o == n && (r = ""), r += i, te("rg", (typeof c)[5]) ? r += c : c && (An(r), r = "", _r(c)), o == t.length - 1 && An(r);
        };
      const s = en = [];
      An(i);
      const l = [...lt];
      return en = [], (c) => {
        en.push(...s), lt = [...l], c && _r(c);
      };
    }), As.set(t, e);
  }
  return e;
}, Ri = (t) => (lt = [], en = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? Qh(t[0]).forEach((e, n) => e(t[n + 1])) : _r(t), en), Oi, Zh = (t, e) => (typeof e == "function" && (Oi = !1), e), ep = (t) => {
  Oi = !0;
  const e = JSON.stringify(t, Zh);
  return Oi && e;
}, Ts = /* @__PURE__ */ new WeakMap(), tp = (t, e) => {
  const n = ep(e);
  let r;
  if (n) {
    var i = Ts.get(t);
    i || Ts.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Ot(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), ya(i, 1e4))), r;
}, np = (t, { css: e }) => e(Ri(t)), rp = (...t) => tp(np, t), ka = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[Ii([r, l, i])] = e, s), {});
  }
}, ip = /* @__PURE__ */ ka((t) => ({
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
}, $a = /* @__PURE__ */ ka(br), op = (t, e) => t + (e[1] == ":" ? W(e, 2) + ":" : W(e)) + ":", xs = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(op, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, $, Tt, K, Gn = (t) => t == "cols" ? "columns" : "rows", Fn = (t) => (e, n, r) => ({
  [t]: r + (($ = V(e)) && "-" + $)
}), se = (t, e) => (n, r, i) => ($ = V(n, e)) && {
  [t || i]: $
}, Ee = (t) => (e, { theme: n }, r) => ($ = n(t || r, e)) && {
  [t || r]: $
}, Jn = (t, e) => (n, { theme: r }, i) => ($ = r(t || i, n, V(n, e))) && {
  [t || i]: $
}, Xe = (t, e) => (n, r) => t(n, r, e), nt = Fn("display"), wn = Fn("position"), Vt = Fn("textTransform"), qt = Fn("textDecoration"), Xn = Fn("fontStyle"), ut = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), Kn = (t, { theme: e }, n) => ($ = e("inset", t)) && { [n]: $ }, kn = (t, e, n, r = n) => ($ = e(r + "Opacity", W(t))) && {
  [`--tw-${n}-opacity`]: $
}, ii = (t, e) => Math.round(parseInt(t, 16) * e), yr = (t, e, n) => t && t[0] == "#" && ($ = (t.length - 1) / 3) && (K = [17, 1, 0.062272][$ - 1]) ? `rgba(${ii(t.substr(1, $), K)},${ii(t.substr(1 + $, $), K)},${ii(t.substr(1 + 2 * $, $), K)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, or = (t, e, n) => n && typeof n == "string" ? ($ = yr(n, e + "-opacity")) && $ !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, $]
} : { [t]: n } : void 0, Ps = (t) => (K = yr(t, "", "0")) == $ ? "transparent" : K, Is = (t, { theme: e }, n, r, i, o) => ($ = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (K = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [K]: "1"
} : {
  [K]: "0",
  [Ii([i, $[0], o])]: (Tt = e(r, W(t))) && `calc(${Tt} * var(${K}))`,
  [Ii([i, $[1], o])]: Tt && [Tt, `calc(${Tt} * calc(1 - var(${K})))`]
} : void 0, Aa = (t, e) => e[0] && {
  [t]: (te("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, oi = (t) => (e) => te(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : Aa(t, e), Rs = (t) => (e, { theme: n }) => {
  if ($ = n("grid" + Ke(t), e, ""))
    return { ["grid-" + t]: $ };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return ($ = n("grid" + Ke(t) + Ke(e[0]), W(e), V(W(e)))) && {
        [`grid-${t}-${e[0]}`]: $
      };
  }
}, Ta = (t, { theme: e }, n) => {
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
}, sp = (t, e, n) => {
  var r;
  const i = (r = br(t[0])) == null ? void 0 : r.map(Ke);
  i && (t = W(t));
  let o = Ta(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, c]) => {
    if (l.startsWith("border"))
      for (const a of i)
        s[l.slice(0, 6) + a + l.slice(6)] = c;
    else
      s[l] = c;
    return s;
  }, {})), o;
}, Di = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", si = (t, e, n) => t[0] && ($ = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && $,
  [`--tw-${n}-y`]: t[0] !== "x" && $,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${$})`, Di()]
}, xa = (t) => (e, n, r) => r[1] ? $a(n.theme(t, e), r[1], t) : Ee(t)(e, n, r), Ct = xa("padding"), kt = xa("margin"), Os = (t, { theme: e }, n) => ($ = { w: "width", h: "height" }[t[0]]) && {
  [$ = `${n}${Ke($)}`]: e($, W(t))
}, qe = (t, { theme: e }, n) => {
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
  return K = t.shift(), te(["hue", "drop"], K) && (K += Ke(t.shift())), ($ = e(i ? "backdrop" + Ke(K) : K, t)) && {
    ["--tw-" + i + K]: (Array.isArray($) ? $ : [$]).map((o) => `${co(K)}(${o})`).join(" ")
  };
}, lp = {
  group: (t, { tag: e }, n) => e(V([n, ...t])),
  hidden: Xe(nt, "none"),
  inline: nt,
  block: nt,
  contents: nt,
  flow: nt,
  table: (t, e, n) => te(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : nt(t, e, n),
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
        return $ = e.theme("flex" + Ke(t[0]), W(t), t[1] || 1), $ != null && {
          ["flex-" + t[0]]: "" + $
        };
    }
    return ($ = e.theme("flex", t, "")) ? { flex: $ } : nt(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return ($ = e.theme("gridTemplate" + Ke(Gn(t[0])), W(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : V(W(t)))) && {
          ["gridTemplate-" + Gn(t[0])]: $
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: V(t[1] == "col" ? ["column", ...W(t, 2)] : W(t), " ")
        };
    }
    return nt(t, e, n);
  },
  auto: (t, { theme: e }) => te(["cols", "rows"], t[0]) && ($ = e("gridAuto" + Ke(Gn(t[0])), W(t), V(W(t)))) && {
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
  inset: (t, { theme: e }) => ($ = br(t[0])) ? $a(e("inset", W(t)), t[0]) : ($ = e("inset", t)) && {
    top: $,
    right: $,
    bottom: $,
    left: $
  },
  underline: qt,
  "line-through": qt,
  "no-underline": Xe(qt, "none"),
  "text-underline": Xe(qt, "underline"),
  "text-no-underline": Xe(qt, "none"),
  "text-line-through": Xe(qt, "line-through"),
  uppercase: Vt,
  lowercase: Vt,
  capitalize: Vt,
  "normal-case": Xe(Vt, "none"),
  "text-normal-case": Xe(Vt, "none"),
  italic: Xn,
  "not-italic": Xe(Xn, "normal"),
  "font-italic": Xe(Xn, "italic"),
  "font-not-italic": Xe(Xn, "normal"),
  font: (t, e, n) => ($ = e.theme("fontFamily", t, "")) ? { fontFamily: $ } : Ee("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: te(["start", "end"], t[0]) ? "flex-" + t[0] : V(t)
  },
  "justify-self": se(),
  "justify-items": se(),
  justify: oi("justifyContent"),
  content: oi("alignContent"),
  self: oi("alignSelf"),
  place: (t) => t[0] && Aa("place-" + t[0], W(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: Rs("column"),
  row: Rs("row"),
  duration: Ee("transitionDuration"),
  delay: Ee("transitionDelay"),
  tracking: Ee("letterSpacing"),
  leading: Ee("lineHeight"),
  z: Ee("zIndex"),
  opacity: Ee(),
  ease: Ee("transitionTimingFunction"),
  p: Ct,
  py: Ct,
  px: Ct,
  pt: Ct,
  pr: Ct,
  pb: Ct,
  pl: Ct,
  m: kt,
  my: kt,
  mx: kt,
  mt: kt,
  mr: kt,
  mb: kt,
  ml: kt,
  w: Ee("width"),
  h: Ee("height"),
  min: Os,
  max: Os,
  fill: Ee(),
  order: Ee(),
  origin: Jn("transformOrigin", " "),
  select: se("userSelect"),
  "pointer-events": se(),
  align: se("verticalAlign"),
  whitespace: se("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: ut("ordinal"),
  "slashed-zero": ut("slashed-zero"),
  "lining-nums": ut("numeric-figure"),
  "oldstyle-nums": ut("numeric-figure"),
  "proportional-nums": ut("numeric-spacing"),
  "tabular-nums": ut("numeric-spacing"),
  "diagonal-fractions": ut("numeric-fraction"),
  "stacked-fractions": ut("numeric-fraction"),
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
  gap: (t, e, n) => ($ = { x: "column", y: "row" }[t[0]]) ? { [$ + "Gap"]: e.theme("gap", W(t)) } : Ee("gap")(t, e, n),
  stroke: (t, e, n) => ($ = e.theme("stroke", t, "")) ? { stroke: $ } : Ee("strokeWidth")(t, e, n),
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
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Ps($)})`
  },
  via: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${$},var(--tw-gradient-to,${Ps($)})`
  },
  to: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-to": $
  },
  border: sp,
  divide: (t, e, n) => ($ = Is(t, e, n, "divideWidth", "border", "width") || Ta(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": $
  },
  space: (t, e, n) => ($ = Is(t, e, n, "space", "margin")) && {
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
      return ($ = e("keyframes", r[0], Tt = {})) !== Tt ? (K = n(r[0])) && {
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
  list: (t, e, n) => V(t) == "item" ? nt(t, e, n) : te(["inside", "outside"], V(t)) ? { listStylePosition: t[0] } : Jn("listStyleType")(t, e, n),
  rounded: (t, e, n) => ip(e.theme("borderRadius", W(t), ""), t[0], "border", "radius") || Ee("borderRadius")(t, e, n),
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
  filter: qe,
  blur: qe,
  brightness: qe,
  contrast: qe,
  grayscale: qe,
  "hue-rotate": qe,
  invert: qe,
  saturate: qe,
  sepia: qe,
  "drop-shadow": qe,
  backdrop: qe
}, ap = (t) => ({
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
}), cp = {
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
}, Ds = "__twind", up = (t) => {
  let e = self[Ds];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = Ds, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, Pa = ({
  nonce: t,
  target: e = up(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, fp = () => ({
  target: null,
  insert: ba
}), ho = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + V(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), Ns = /* @__PURE__ */ ho((t) => console.warn(t)), dp = /* @__PURE__ */ ho((t) => {
  throw new Error(t);
}), hp = /* @__PURE__ */ ho(ba), rt = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, pp = (t, e, n) => {
  let r = "";
  const i = Wh(t);
  i && (r += `${rt(i, e, n)};`);
  let o = Vh(t);
  return o & 1 && (r += `-webkit-${rt(t, e, n)};`), o & 2 && (r += `-moz-${rt(t, e, n)};`), o & 4 && (r += `-ms-${rt(t, e, n)};`), o = qh(t, e), o & 1 && (r += `${rt(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${rt(t, `-moz-${e}`, n)};`), o & 4 && (r += `${rt(t, `-ms-${e}`, n)};`), r += rt(t, e, n), r;
}, Sn = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, ft = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, Ie = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, Z = (t) => (e) => e(t), gp = {
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
    .../* @__PURE__ */ ft(8, "px")
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
  ringOffsetWidth: /* @__PURE__ */ ft(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ ft(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ ft(2, "deg"),
    .../* @__PURE__ */ ft(12, "deg", 3),
    .../* @__PURE__ */ ft(180, "deg", 45)
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
    .../* @__PURE__ */ ft(2, "deg"),
    .../* @__PURE__ */ ft(12, "deg", 3)
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
}, Ia = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[V(n)] = i, e[V(n, ".")] = i);
  const o = [...n, r];
  e[V(o)] = i, e[V(o, ".")] = i, i && typeof i == "object" && Ia(i, e, o);
}, e), e), mp = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, vp = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && te(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (te(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), _p = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...gp, ...t }, r = (o, s) => {
    const l = o && o[s], c = typeof l == "function" ? l(i, mp) : l;
    return c && s == "colors" ? Ia(c) : c;
  }, i = (o, s, l) => {
    const c = o.split(".");
    o = c[0], c.length > 1 && (l = s, s = V(W(c), "."));
    let a = e.get(o);
    if (a || (e.set(o, a = { ...r(n, o) }), Object.assign(a, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? V(s) : s) || "DEFAULT";
      const u = vp(o, s) || a[s];
      return u == null ? l : Array.isArray(u) && !te(["fontSize", "outline", "dropShadow"], o) ? V(u, ",") : u;
    }
    return a;
  };
  return i;
}, bp = (t, e) => (n, r) => {
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
}, En, Ra = /^:(group(?:(?!-focus).+?)*)-(.+)$/, Oa = /^(:not)-(.+)/, Da = (t) => t[1] == "[" ? W(t) : t, yp = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (En = n("screens", W(s), "")) ? { [Pr(En)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (En = Ra.exec(s)) ? { [`.${Sa(r(En[1]))}:${En[2]} &`]: o } : {
    [e[W(s)] || "&" + s.replace(Oa, (l, c, a) => c + "(" + Da(":" + a) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, Ae, Na = (t) => (((Ae = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Ae[1] / (Ae[2] ? 15 : 1) / 10 : 0) & 31) << 22, Ma = (t) => {
  Ae = 0;
  for (let e = t.length; e--; )
    Ae += te("-:,", t[e]);
  return Ae;
}, Ua = (t) => (Ma(t) & 15) << 18, wp = [
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
], Sp = (t) => 1 << (~(Ae = wp.indexOf(t.replace(Ra, ":$2").slice(3, 8))) ? Ae : 17), Ep = (t, e) => (n, r) => n | ((Ae = t("screens", W(r), "")) ? 1 << 27 | Na(Pr(Ae)) : r == ":dark" ? 1 << 30 : (Ae = e[r] || r.replace(Oa, ":$2"))[0] == "@" ? Ua(Ae) : Sp(r)), Cp = (t) => t[0] == "-" ? 0 : Ma(t) + ((Ae = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Ae[1] || -!!Ae[2] : 0) + 1, li = (t, e) => e + "{" + t + "}", kp = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, h) => (f = s(f), Array.isArray(d) ? V(d.filter(Boolean).map((g) => t(f, s(g), h)), ";") : t(f, s(d), h));
  let c;
  const a = (f, d, h, g, p) => {
    if (Array.isArray(g)) {
      g.forEach((b) => b && a(f, d, h, b, p));
      return;
    }
    let v = "", x = 0, y = 0;
    g["@apply"] && (g = uo(Ot(rp(g["@apply"]), n), { ...g, "@apply": void 0 }, n)), Object.keys(g).forEach((b) => {
      const _ = Ot(g[b], n);
      if (wa(b, _)) {
        if (_ !== "" && b.length > 1) {
          const m = co(b);
          y += 1, x = Math.max(x, Cp(m)), v = (v && v + ";") + l(m, _, p);
        }
      } else if (_)
        if (b == ":global" && (b = "@global"), b[0] == "@")
          if (b[1] == "g")
            a([], "", 0, _, p);
          else if (b[1] == "f")
            a([], b, 0, _, p);
          else if (b[1] == "k") {
            const m = c.length;
            a([], "", 0, _, p);
            const w = c.splice(m, c.length - m);
            c.push({
              r: li(V(w.map((k) => k.r), ""), b),
              p: w.reduce((k, S) => k + S.p, 0)
            });
          } else
            b[1] == "i" ? (Array.isArray(_) ? _ : [_]).forEach((m) => m && c.push({ p: 0, r: `${b} ${m};` })) : (b[2] == "c" && (b = Pr(n.theme("screens", W(b, 8).trim()))), a([...f, b], d, h | Na(b) | Ua(b), _, p));
        else
          a(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (m, w, k) => b.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (S, N, z) => (te(N, "&") ? N.replace(/&/g, w) : (w && w + " ") + N) + z) + k) : b, h, _, p);
    }), y && c.push({
      r: f.reduceRight(li, li(v, d)),
      p: h * (1 << 8) + ((Math.max(0, 15 - y) & 15) << 4 | (x || 15) & 15)
    });
  }, u = Ep(r, e);
  return (f, d, h, g = 0) => (g <<= 28, c = [], a([], d ? "." + Sa(d) : "", h ? h.v.reduceRight(u, g) : g, f, h && h.i), c);
}, $p = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const c = Jh(i, l);
      try {
        t.insert(s, c), i.splice(c, 0, l);
      } catch (a) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: a }, r);
      }
    }
  };
}, ai = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, Ap = (t) => (typeof t == "string" ? { t: dp, a: Ns, i: hp }[t[1]] : t) || Ns, Tp = { _: { value: "", writable: !0 } }, xp = (t = {}) => {
  const e = _p(t.theme), n = Ap(t.mode), r = ai(t.hash, !1, !1, ri), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], c = {
    tw: (...k) => m(k),
    theme: (k, S, N) => {
      var z;
      const X = (z = e(k, S, N)) != null ? z : n.unknown(k, S == null || Array.isArray(S) ? S : S.split("."), N != null, c);
      return o.n && X && te("rg", (typeof X)[5]) ? `calc(${X} * -1)` : X;
    },
    tag: (k) => r ? r(k) : k,
    css: (k) => {
      s++;
      const S = l.length;
      try {
        (typeof k == "string" ? Ri([k]) : k).forEach(_);
        const N = Object.create(null, Tp);
        for (let z = S; z < l.length; z++) {
          const X = l[z];
          if (X)
            switch (typeof X) {
              case "object":
                uo(N, X, c);
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
  }, a = bp({ ...lp, ...t.plugins }, c), u = (k) => {
    const S = o;
    o = k;
    try {
      return Ot(a(k), c);
    } finally {
      o = S;
    }
  }, f = { ...cp, ...t.variants }, d = yp(t.darkMode || "media", f, c), h = kp(ai(t.prefix, pp, rt), f, c), g = t.sheet || (typeof window > "u" ? fp() : Pa(t)), { init: p = (k) => k() } = g, v = $p(g, n, p, c);
  let x;
  p((k = /* @__PURE__ */ new Map()) => x = k);
  const y = /* @__PURE__ */ new WeakMap(), b = (k, S) => k == "_" ? void 0 : typeof S == "function" ? JSON.stringify(Ot(S, c), b) : S, _ = (k) => {
    !s && o.v.length && (k = { ...k, v: [...o.v, ...k.v], $: "" }), k.$ || (k.$ = xs(k, y.get(k.d)));
    let S = s ? null : x.get(k.$);
    if (S == null) {
      let N = u(k);
      if (k.$ || (k.$ = ri(JSON.stringify(N, b)), y.set(k.d, k.$), k.$ = xs(k, k.$)), N && typeof N == "object")
        if (k.v = k.v.map(Da), i && (k.i = i), N = d(N, k), s)
          l.push(N);
        else {
          const z = typeof k.d == "function" ? typeof N._ == "string" ? 1 : 3 : 2;
          S = r || typeof k.d == "function" ? (r || ri)(z + k.$) : k.$, h(N, S, k, z).forEach(v), N._ && (S += " " + N._);
        }
      else
        typeof N == "string" ? S = N : (S = k.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: S }, c)), s && typeof k.d != "function" && l.push(S);
      s || (x.set(k.$, S), ya(x, 3e4));
    }
    return S;
  }, m = (k) => V(Ri(k).map(_).filter(Boolean), " "), w = ai(t.preflight, Gh, !1);
  if (w) {
    const k = ap(e), S = h(typeof w == "function" ? Ot(w(k, c), c) || k : { ...k, ...w });
    p((N = (S.forEach(v), !0)) => N);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, c),
    process: m
  };
}, Ha = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = xp(o));
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
}, { tw: ze, setup: Pp } = /* @__PURE__ */ Ha();
function Ip(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[13].default
  ), s = He(
    o,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), ki(n, "display", "none"), E(n, "class", r = ze` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), E(e, "class", "popup-element-wrapper"), ki(e, "position", "absolute");
    },
    m(l, c) {
      O(l, e, c), T(e, n), s && s.m(n, null), t[14](n), t[15](e), i = !0;
    },
    p(l, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      4096) && Le(
        s,
        o,
        l,
        /*$$scope*/
        l[12],
        i ? je(
          o,
          /*$$scope*/
          l[12],
          c,
          null
        ) : Fe(
          /*$$scope*/
          l[12]
        ),
        null
      ), (!i || c & /*popupClass*/
      1 && r !== (r = ze` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      l[0]}`)) && E(n, "class", r);
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
function Rp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { sizeToAnchor: s = !1 } = e, { anchorElement: l = null } = e, { position: c = null } = e, { popupClass: a = "" } = e, { preferedVerticalAlignment: u = "top" } = e, { preferedHorizontalAlignment: f = "left" } = e, { positionOffset: d = { x: 0, y: 0 } } = e, h = Te("PopupContainerService", new vr(document.body)), g, p, v;
  function x() {
    const w = {
      backdrop: !1,
      closeOnClickOutside: o,
      positioning: l ? "anchor" : "custom",
      anchorElement: l,
      customPosition: s ? d : c,
      anchorHorizontal: f,
      anchorVertical: u
    };
    document.body.appendChild(g), n(1, g.style.display = "block", g), console.log(g.getBoundingClientRect(), g);
    const k = l == null ? void 0 : l.offsetWidth, S = g.offsetWidth;
    k && s && S < k && (console.log("setting width"), n(1, g.style.width = `${k}px`, g)), n(1, g.style.position = "static", g), p = h.openPopup("popup-container", g, w), p.afterClosed.then(() => {
      b(), v.appendChild(g), console.log("closing popup", g.getBoundingClientRect());
    });
  }
  function y() {
    p == null || p.close();
  }
  function b() {
    n(1, g.style.display = "none", g), n(1, g.style.position = "absolute", g), n(1, g.style.width = "auto", g);
  }
  function _(w) {
    ue[w ? "unshift" : "push"](() => {
      g = w, n(1, g);
    });
  }
  function m(w) {
    ue[w ? "unshift" : "push"](() => {
      v = w, n(2, v);
    });
  }
  return t.$$set = (w) => {
    "closeOnClick" in w && n(3, o = w.closeOnClick), "sizeToAnchor" in w && n(4, s = w.sizeToAnchor), "anchorElement" in w && n(5, l = w.anchorElement), "position" in w && n(6, c = w.position), "popupClass" in w && n(0, a = w.popupClass), "preferedVerticalAlignment" in w && n(7, u = w.preferedVerticalAlignment), "preferedHorizontalAlignment" in w && n(8, f = w.preferedHorizontalAlignment), "positionOffset" in w && n(9, d = w.positionOffset), "$$scope" in w && n(12, i = w.$$scope);
  }, [
    a,
    g,
    v,
    o,
    s,
    l,
    c,
    u,
    f,
    d,
    x,
    y,
    i,
    r,
    _,
    m
  ];
}
class ja extends ce {
  constructor(e) {
    super(), ae(this, e, Rp, Ip, le, {
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
function Op(t) {
  Ht(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Ms(t) {
  let e;
  return {
    c() {
      e = I("div"), E(e, "class", oe(ze`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
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
function Dp(t) {
  let e, n, r, i;
  function o(l) {
    t[7](l);
  }
  let s = { tw: ze };
  return (
    /*isSelected*/
    t[0] !== void 0 && (s.checked = /*isSelected*/
    t[0]), n = new Ln({ props: s }), ue.push(() => Zt(n, "checked", o)), {
      c() {
        e = I("div"), B(n.$$.fragment), E(e, "class", oe(ze`p-1`) + " svelte-oysah1");
      },
      m(l, c) {
        O(l, e, c), L(n, e, null), i = !0;
      },
      p(l, c) {
        const a = {};
        !r && c & /*isSelected*/
        1 && (r = !0, a.checked = /*isSelected*/
        l[0], Qt(() => r = !1)), n.$set(a);
      },
      i(l) {
        i || (A(n.$$.fragment, l), i = !0);
      },
      o(l) {
        P(n.$$.fragment, l), i = !1;
      },
      d(l) {
        l && R(e), F(n);
      }
    }
  );
}
function Np(t) {
  let e, n, r, i, o, s, l, c, a = (
    /*isSelected*/
    t[0] && !/*multiple*/
    t[2] && Ms()
  ), u = (
    /*multiple*/
    t[2] && Dp(t)
  );
  const f = (
    /*#slots*/
    t[6].default
  ), d = He(
    f,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = I("div"), a && a.c(), n = M(), u && u.c(), r = M(), i = I("span"), d && d.c(), E(e, "class", o = oe(ze`flex hover:(${Yn}) items-center ${/*multiple*/
      t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      t[0] && !/*multiple*/
      t[2] ? Yn : ""}`) + " svelte-oysah1");
    },
    m(h, g) {
      O(h, e, g), a && a.m(e, null), T(e, n), u && u.m(e, null), T(e, r), T(e, i), d && d.m(i, null), t[8](i), s = !0, l || (c = re(
        e,
        "click",
        /*onClickOption*/
        t[3]
      ), l = !0);
    },
    p(h, [g]) {
      /*isSelected*/
      h[0] && !/*multiple*/
      h[2] ? a ? a.p(h, g) : (a = Ms(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*multiple*/
      h[2] && u.p(h, g), d && d.p && (!s || g & /*$$scope*/
      32) && Le(
        d,
        f,
        h,
        /*$$scope*/
        h[5],
        s ? je(
          f,
          /*$$scope*/
          h[5],
          g,
          null
        ) : Fe(
          /*$$scope*/
          h[5]
        ),
        null
      ), (!s || g & /*isSelected*/
      1 && o !== (o = oe(ze`flex hover:(${Yn}) items-center ${/*multiple*/
      h[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      h[0] && !/*multiple*/
      h[2] ? Yn : ""}`) + " svelte-oysah1")) && E(e, "class", o);
    },
    i(h) {
      s || (A(u), A(d, h), s = !0);
    },
    o(h) {
      P(u), P(d, h), s = !1;
    },
    d(h) {
      h && R(e), a && a.d(), u && u.d(), d && d.d(h), t[8](null), l = !1, c();
    }
  };
}
let Yn = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Mp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, c = null, a, u;
  const f = Oe("audako:select:multiple"), d = Oe("audako:select:close"), h = Oe("audako:select:value"), g = Oe("audako:select:value:changed"), p = Oe("audako:select:displayValue");
  ga(() => {
    var _;
    u = (_ = a.innerText) == null ? void 0 : _.trim(), p.subscribe((m) => {
      c = m;
    }), h.subscribe((m) => {
      l = m, f ? n(0, s = m == null ? void 0 : m.includes(o)) : n(0, s = m === o), x();
    });
  });
  function v(_) {
    _.preventDefault(), _.stopPropagation();
    let m = null;
    f ? s ? m = l.filter((w) => w !== o) : m = Array.isArray(l) ? [...l, o] : [o] : (m = o, d()), h.set(m), g.next(m);
  }
  function x() {
    if (f) {
      const _ = c;
      s && !_.includes(u) ? p.set([..._, u]) : !s && _.includes(u) && p.set(_.filter((m) => m !== u));
    } else
      s && p.set(u);
  }
  function y(_) {
    s = _, n(0, s);
  }
  function b(_) {
    ue[_ ? "unshift" : "push"](() => {
      a = _, n(1, a);
    });
  }
  return t.$$set = (_) => {
    "value" in _ && n(4, o = _.value), "$$scope" in _ && n(5, i = _.$$scope);
  }, [
    s,
    a,
    f,
    v,
    o,
    i,
    r,
    y,
    b
  ];
}
class La extends ce {
  constructor(e) {
    super(), ae(this, e, Mp, Np, le, { value: 4 }, Op);
  }
}
function Us(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const Up = (t) => ({}), Hs = (t) => ({});
function Hp(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = j(e), r = M();
    },
    m(i, o) {
      O(i, n, o), O(i, r, o);
    },
    p(i, o) {
      o & /*options*/
      16 && e !== (e = /*option*/
      i[26].label + "") && ve(n, e);
    },
    d(i) {
      i && R(n), i && R(r);
    }
  };
}
function js(t) {
  let e, n;
  return e = new La({
    props: {
      value: (
        /*option*/
        t[26].value
      ),
      $$slots: { default: [Hp] },
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
      i & /*options*/
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
function jp(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[13].default
  ), o = He(
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
  for (let a = 0; a < s.length; a += 1)
    l[a] = js(Us(t, s, a));
  const c = (a) => P(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      o && o.c(), e = M();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = xr();
    },
    m(a, u) {
      o && o.m(a, u), O(a, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(a, u);
      O(a, n, u), r = !0;
    },
    p(a, u) {
      if (o && o.p && (!r || u & /*$$scope*/
      131072) && Le(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        r ? je(
          i,
          /*$$scope*/
          a[17],
          u,
          null
        ) : Fe(
          /*$$scope*/
          a[17]
        ),
        null
      ), u & /*options*/
      16) {
        s = /*options*/
        a[4];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const d = Us(a, s, f);
          l[f] ? (l[f].p(d, u), A(l[f], 1)) : (l[f] = js(d), l[f].c(), A(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (fe(), f = s.length; f < l.length; f += 1)
          c(f);
        de();
      }
    },
    i(a) {
      if (!r) {
        A(o, a);
        for (let u = 0; u < s.length; u += 1)
          A(l[u]);
        r = !0;
      }
    },
    o(a) {
      P(o, a), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        P(l[u]);
      r = !1;
    },
    d(a) {
      o && o.d(a), a && R(e), wt(l, a), a && R(n);
    }
  };
}
function Lp(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g;
  const p = (
    /*#slots*/
    t[13].prefix
  ), v = He(
    p,
    t,
    /*$$scope*/
    t[17],
    Hs
  );
  let x = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [jp] },
    $$scope: { ctx: t }
  };
  return f = new ja({ props: x }), t[16](f), {
    c() {
      e = I("div"), v && v.c(), n = M(), r = I("input"), o = M(), s = I("div"), l = j("arrow_drop_down"), u = M(), B(f.$$.fragment), r.disabled = /*disabled*/
      t[6], E(
        r,
        "placeholder",
        /*placeholder*/
        t[0]
      ), r.readOnly = !0, E(r, "class", i = /*tw*/
      t[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      t[1]}`), E(s, "class", c = /*tw*/
      t[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      t[3]} select-none`), E(e, "class", a = /*tw*/
      t[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      t[2]}`);
    },
    m(y, b) {
      O(y, e, b), v && v.m(e, null), T(e, n), T(e, r), pr(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), T(e, o), T(e, s), T(s, l), O(y, u, b), L(f, y, b), d = !0, h || (g = [
        re(
          r,
          "input",
          /*input_input_handler*/
          t[14]
        ),
        re(
          e,
          "click",
          /*openMenu*/
          t[10]
        )
      ], h = !0);
    },
    p(y, [b]) {
      v && v.p && (!d || b & /*$$scope*/
      131072) && Le(
        v,
        p,
        y,
        /*$$scope*/
        y[17],
        d ? je(
          p,
          /*$$scope*/
          y[17],
          b,
          Up
        ) : Fe(
          /*$$scope*/
          y[17]
        ),
        Hs
      ), (!d || b & /*disabled*/
      64) && (r.disabled = /*disabled*/
      y[6]), (!d || b & /*placeholder*/
      1) && E(
        r,
        "placeholder",
        /*placeholder*/
        y[0]
      ), (!d || b & /*tw, textfield$class*/
      34 && i !== (i = /*tw*/
      y[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      y[1]}`)) && E(r, "class", i), b & /*displayedValue*/
      128 && r.value !== /*displayedValue*/
      y[7] && pr(
        r,
        /*displayedValue*/
        y[7]
      ), (!d || b & /*tw, suffixIcon$class*/
      40 && c !== (c = /*tw*/
      y[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      y[3]} select-none`)) && E(s, "class", c), (!d || b & /*tw, container$class*/
      36 && a !== (a = /*tw*/
      y[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      y[2]}`)) && E(e, "class", a);
      const _ = {};
      b & /*textfield*/
      256 && (_.anchorElement = /*textfield*/
      y[8]), b & /*$$scope, options*/
      131088 && (_.$$scope = { dirty: b, ctx: y }), f.$set(_);
    },
    i(y) {
      d || (A(v, y), A(f.$$.fragment, y), d = !0);
    },
    o(y) {
      P(v, y), P(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && R(e), v && v.d(y), t[15](null), y && R(u), t[16](null), F(f, y), h = !1, at(g);
    }
  };
}
function Fp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: c = "" } = e, { container$class: a = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = ze } = e, { disabled: h = !1 } = e, g = "", p, v, x = We(), y = mr(o);
  const b = y.subscribe((D) => {
    n(11, o = D);
  });
  let _ = new ke();
  const m = _.subscribe((D) => {
    x("valueChanged", D);
  });
  let w = mr(s ? [] : ""), k = w.subscribe((D) => {
    N(D);
  });
  function S(D) {
    D && (D.preventDefault(), D.stopPropagation()), !h && (v == null || v.openPopup());
  }
  function N(D) {
    if (D == null || D.length === 0) {
      n(7, g = null);
      return;
    }
    Array.isArray(D) ? n(7, g = D.join(", ")) : n(7, g = D);
  }
  pt("audako:select:multiple", s), pt("audako:select:value", y), pt("audako:select:value:changed", _), pt("audako:select:displayValue", w), pt("audako:select:close", () => v.closePopup()), St(() => {
    b(), m.unsubscribe(), k();
  });
  function z() {
    g = this.value, n(7, g);
  }
  function X(D) {
    ue[D ? "unshift" : "push"](() => {
      p = D, n(8, p);
    });
  }
  function ee(D) {
    ue[D ? "unshift" : "push"](() => {
      v = D, n(9, v);
    });
  }
  return t.$$set = (D) => {
    "value" in D && n(11, o = D.value), "multiple" in D && n(12, s = D.multiple), "placeholder" in D && n(0, l = D.placeholder), "textfield$class" in D && n(1, c = D.textfield$class), "container$class" in D && n(2, a = D.container$class), "suffixIcon$class" in D && n(3, u = D.suffixIcon$class), "options" in D && n(4, f = D.options), "tw" in D && n(5, d = D.tw), "disabled" in D && n(6, h = D.disabled), "$$scope" in D && n(17, i = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    32 && pt("tw", d);
  }, [
    l,
    c,
    a,
    u,
    f,
    d,
    h,
    g,
    p,
    v,
    S,
    o,
    s,
    r,
    z,
    X,
    ee,
    i
  ];
}
class Fa extends ce {
  constructor(e) {
    super(), ae(this, e, Fp, Lp, le, {
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
function Ls(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function zp(t) {
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
      r[18] + "") && ve(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Fs(t) {
  let e, n;
  return e = new La({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [zp] },
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
function Bp(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Fs(Ls(t, r, s));
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
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(s, l);
      O(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*pageSizeOptions*/
      8) {
        r = /*pageSizeOptions*/
        s[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const a = Ls(s, r, c);
          i[c] ? (i[c].p(a, l), A(i[c], 1)) : (i[c] = Fs(a), i[c].c(), A(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (fe(), c = r.length; c < i.length; c += 1)
          o(c);
        de();
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
      wt(i, s), s && R(e);
    }
  };
}
function Wp(t) {
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
function Vp(t) {
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
function qp(t) {
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
function Gp(t) {
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
function Jp(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, h = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), g, p, v, x, y, b, _, m, w, k, S, N, z, X;
  function ee(U) {
    t[10](U);
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
    $$slots: { default: [Bp] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (D.value = /*pageSize*/
    t[0]), s = new Fa({ props: D }), ue.push(() => Zt(s, "value", ee)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), _ = new vt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Wp] },
        $$scope: { ctx: t }
      }
    }), _.$on(
      "click",
      /*click_handler*/
      t[12]
    ), w = new vt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Vp] },
        $$scope: { ctx: t }
      }
    }), w.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), S = new vt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [qp] },
        $$scope: { ctx: t }
      }
    }), S.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), z = new vt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Gp] },
        $$scope: { ctx: t }
      }
    }), z.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = I("div"), n = I("div"), r = j("Items per page:"), i = M(), o = I("div"), B(s.$$.fragment), c = M(), a = I("div"), f = j(u), d = j(" - "), g = j(h), p = M(), v = I("div"), x = j("of "), y = j(
          /*totalCount*/
          t[2]
        ), b = M(), B(_.$$.fragment), m = M(), B(w.$$.fragment), k = M(), B(S.$$.fragment), N = M(), B(z.$$.fragment), E(
          n,
          "class",
          /*tw*/
          t[5]`mr-1 text-xs text-gray-600`
        ), E(
          o,
          "class",
          /*tw*/
          t[5]`w-[50px]`
        ), E(
          a,
          "class",
          /*tw*/
          t[5]`ml-4 text-xs mr-1 text-gray-600`
        ), E(
          v,
          "class",
          /*tw*/
          t[5]`text-xs mr-4 text-gray-600`
        ), E(
          e,
          "class",
          /*tw*/
          t[5]`flex w-full items-center justify-end pt-1`
        );
      },
      m(U, Y) {
        O(U, e, Y), T(e, n), T(n, r), T(e, i), T(e, o), L(s, o, null), T(e, c), T(e, a), T(a, f), T(a, d), T(a, g), T(e, p), T(e, v), T(v, x), T(v, y), T(e, b), L(_, e, null), T(e, m), L(w, e, null), T(e, k), L(S, e, null), T(e, N), L(z, e, null), X = !0;
      },
      p(U, [Y]) {
        const et = {};
        Y & /*$$scope, pageSizeOptions*/
        2097160 && (et.$$scope = { dirty: Y, ctx: U }), !l && Y & /*pageSize*/
        1 && (l = !0, et.value = /*pageSize*/
        U[0], Qt(() => l = !1)), s.$set(et), (!X || Y & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        U[1] * /*pageSize*/
        U[0] + 1 + "") && ve(f, u), (!X || Y & /*pageIndex, pageSize*/
        3) && h !== (h = /*pageIndex*/
        (U[1] + 1) * /*pageSize*/
        U[0] + "") && ve(g, h), (!X || Y & /*totalCount*/
        4) && ve(
          y,
          /*totalCount*/
          U[2]
        );
        const bn = {};
        Y & /*pageIndex*/
        2 && (bn.disabled = /*pageIndex*/
        U[1] === 0), Y & /*$$scope*/
        2097152 && (bn.$$scope = { dirty: Y, ctx: U }), _.$set(bn);
        const H = {};
        Y & /*pageIndex*/
        2 && (H.disabled = /*pageIndex*/
        U[1] === 0), Y & /*$$scope*/
        2097152 && (H.$$scope = { dirty: Y, ctx: U }), w.$set(H);
        const G = {};
        Y & /*pageIndex, lastPageIndex*/
        18 && (G.disabled = /*pageIndex*/
        U[1] === /*lastPageIndex*/
        U[4]), Y & /*$$scope*/
        2097152 && (G.$$scope = { dirty: Y, ctx: U }), S.$set(G);
        const ct = {};
        Y & /*pageIndex, lastPageIndex*/
        18 && (ct.disabled = /*pageIndex*/
        U[1] === /*lastPageIndex*/
        U[4]), Y & /*$$scope*/
        2097152 && (ct.$$scope = { dirty: Y, ctx: U }), z.$set(ct);
      },
      i(U) {
        X || (A(s.$$.fragment, U), A(_.$$.fragment, U), A(w.$$.fragment, U), A(S.$$.fragment, U), A(z.$$.fragment, U), X = !0);
      },
      o(U) {
        P(s.$$.fragment, U), P(_.$$.fragment, U), P(w.$$.fragment, U), P(S.$$.fragment, U), P(z.$$.fragment, U), X = !1;
      },
      d(U) {
        U && R(e), F(s), F(_), F(w), F(S), F(z);
      }
    }
  );
}
function zs(t, e) {
  return console.log(), Math.max(Math.floor(e / t) - 1, 0);
}
function Xp(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Oe("tw"), l, { pageSizeOptions: c = [10, 20, 50, 100] } = e, a = We();
  function u(m) {
    n(1, r = r + m), g();
  }
  function f() {
    n(1, r = 0), g();
  }
  function d() {
    n(1, r = l), g();
  }
  function h(m) {
    console.log("changePageSize", m), n(0, i = m), n(4, l = zs(i, o)), n(1, r = Math.min(r, l)), g();
  }
  function g() {
    a("changePage", { pageIndex: r, pageSize: i });
  }
  function p(m) {
    i = m, n(0, i);
  }
  const v = (m) => h(m.detail), x = () => f(), y = () => u(-1), b = () => u(1), _ = () => d();
  return t.$$set = (m) => {
    "pageIndex" in m && n(1, r = m.pageIndex), "pageSize" in m && n(0, i = m.pageSize), "totalCount" in m && n(2, o = m.totalCount), "pageSizeOptions" in m && n(3, c = m.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & /*pageSize, totalCount*/
    5 && n(4, l = zs(i, o)), t.$$.dirty & /*pageSize*/
    1 && console.log("pageSize", i);
  }, [
    i,
    r,
    o,
    c,
    l,
    s,
    u,
    f,
    d,
    h,
    p,
    v,
    x,
    y,
    b,
    _
  ];
}
class Kp extends ce {
  constructor(e) {
    super(), ae(this, e, Xp, Jp, le, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function Yp(t) {
  Ht(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Bs(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function Ws(t) {
  let e, n;
  return e = new xi({
    props: {
      container$class: (
        /*tw*/
        t[9]`basis-[50px] flex-[0] cursor-default`
      ),
      id: "Name",
      $$slots: { default: [Qp] },
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
function Qp(t) {
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
function Zp(t) {
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
function eg(t) {
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
function tg(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && Ws(t)
  );
  return n = new xi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [Zp] },
      $$scope: { ctx: t }
    }
  }), i = new xi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [eg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = M(), B(n.$$.fragment), r = M(), B(i.$$.fragment);
    },
    m(l, c) {
      s && s.m(l, c), O(l, e, c), L(n, l, c), O(l, r, c), L(i, l, c), o = !0;
    },
    p(l, c) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, c), c[0] & /*selectMultiple*/
      1 && A(s, 1)) : (s = Ws(l), s.c(), A(s, 1), s.m(e.parentNode, e)) : s && (fe(), P(s, 1, 1, () => {
        s = null;
      }), de());
      const a = {};
      c[1] & /*$$scope*/
      64 && (a.$$scope = { dirty: c, ctx: l }), n.$set(a);
      const u = {};
      c[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: c, ctx: l }), i.$set(u);
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
function ng(t) {
  let e;
  return {
    c() {
      e = I("div"), E(e, "class", oe(
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
function rg(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = I("div"), E(n, "class", oe(
        /*tw*/
        t[9]`progress-bar-value-animation wfull h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), E(e, "class", oe(
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
function Vs(t) {
  let e, n;
  return e = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`basis-[50px] flex-[0]`
      ),
      $$slots: { default: [ig] },
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
function ig(t) {
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
function og(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = I("div"), r = j(n), E(e, "class", oe(
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
      ((l = o[33].Name) == null ? void 0 : l.Value) + "") && ve(r, n);
    },
    d(o) {
      o && R(e);
    }
  };
}
function sg(t) {
  return { c: J, m: J, p: J, d: J };
}
function lg(t) {
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
      r[36] + "") && ve(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function ag(t) {
  return { c: J, m: J, p: J, d: J };
}
function cg(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ag,
    then: lg,
    catch: sg,
    value: 36
  };
  return gr(n = /*nameService*/
  t[8].resolveName(
    q.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = I("span"), r.block.c(), E(e, "class", oe(
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
        q.Group,
        /*entity*/
        t[33].GroupId
      )) && gr(n, r) || ma(r, t, o);
    },
    d(i) {
      i && R(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function ug(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && Vs(t)
  );
  return n = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [og] },
      $$scope: { ctx: t }
    }
  }), i = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [cg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = M(), B(n.$$.fragment), r = M(), B(i.$$.fragment), o = M();
    },
    m(c, a) {
      l && l.m(c, a), O(c, e, a), L(n, c, a), O(c, r, a), L(i, c, a), O(c, o, a), s = !0;
    },
    p(c, a) {
      /*selectMultiple*/
      c[0] ? l ? (l.p(c, a), a[0] & /*selectMultiple*/
      1 && A(l, 1)) : (l = Vs(c), l.c(), A(l, 1), l.m(e.parentNode, e)) : l && (fe(), P(l, 1, 1, () => {
        l = null;
      }), de());
      const u = {};
      a[0] & /*entities*/
      8 | a[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: a, ctx: c }), n.$set(u);
      const f = {};
      a[0] & /*entities*/
      8 | a[1] & /*$$scope*/
      64 && (f.$$scope = { dirty: a, ctx: c }), i.$set(f);
    },
    i(c) {
      s || (A(l), A(n.$$.fragment, c), A(i.$$.fragment, c), s = !0);
    },
    o(c) {
      P(l), P(n.$$.fragment, c), P(i.$$.fragment, c), s = !1;
    },
    d(c) {
      l && l.d(c), c && R(e), F(n, c), c && R(r), F(i, c), c && R(o);
    }
  };
}
function qs(t) {
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
  return e = new Oh({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [ug] },
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
function fg(t) {
  let e, n, r, i, o;
  e = new $h({
    props: {
      $$slots: { default: [tg] },
      $$scope: { ctx: t }
    }
  });
  function s(d, h) {
    return (
      /*loading*/
      d[7] ? rg : ng
    );
  }
  let l = s(t), c = l(t), a = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < a.length; d += 1)
    u[d] = qs(Bs(t, a, d));
  const f = (d) => P(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      B(e.$$.fragment), n = M(), c.c(), r = M();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = xr();
    },
    m(d, h) {
      L(e, d, h), O(d, n, h), c.m(d, h), O(d, r, h);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(d, h);
      O(d, i, h), o = !0;
    },
    p(d, h) {
      const g = {};
      if (h[0] & /*masterToggleState, selectMultiple*/
      33 | h[1] & /*$$scope*/
      64 && (g.$$scope = { dirty: h, ctx: d }), e.$set(g), l === (l = s(d)) && c ? c.p(d, h) : (c.d(1), c = l(d), c && (c.c(), c.m(r.parentNode, r))), h[0] & /*tw, onEntitySelected, entities, nameService, selectedEntitiesInPageLookup, selectMultiple*/
      1817) {
        a = /*entities*/
        d[3];
        let p;
        for (p = 0; p < a.length; p += 1) {
          const v = Bs(d, a, p);
          u[p] ? (u[p].p(v, h), A(u[p], 1)) : (u[p] = qs(v), u[p].c(), A(u[p], 1), u[p].m(i.parentNode, i));
        }
        for (fe(), p = a.length; p < u.length; p += 1)
          f(p);
        de();
      }
    },
    i(d) {
      if (!o) {
        A(e.$$.fragment, d);
        for (let h = 0; h < a.length; h += 1)
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
      F(e, d), d && R(n), c.d(d), d && R(r), wt(u, d), d && R(i);
    }
  };
}
function dg(t) {
  let e, n;
  return e = new Kp({
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
function hg(t) {
  let e, n, r;
  return n = new Sh({
    props: {
      $$slots: {
        pagination: [dg],
        default: [fg]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = I("div"), B(n.$$.fragment), E(e, "class", oe(
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
function pg(t, e, n) {
  let r = Te(Nt), i = Te(In), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, c = Oe("tw"), a = [], u = new ke(), f = [], d = {}, h = "unchecked", g, p, v, x = !1, y = 0, b = 10, _ = 0, m = un(), w = Rt, k = !1, S = !0, N = new ke();
  It.pipe(st(N)).subscribe((H) => {
    f = H.selectedEntities, Y(), D();
  }), ta([w.asObservable(), m.asObservable()]).pipe(st(N)).subscribe(([H, G]) => {
    var ct;
    console.log("combineLatest"), v = G.selectedGroup, p = (ct = G.selectedGroup) == null ? void 0 : ct.Id, g = G.filter, x = H.queryWithSubGroups, k = !0, n(1, y = 0), u.next();
  });
  function z() {
    const H = { $and: [] };
    x ? H.$and.push({ Path: p }) : H.$and.push({ GroupId: p }), g && H.$and.push({
      $or: [
        {
          "Name.Value": { $regex: g, $options: "i" }
        },
        {
          "Description.Value": { $regex: g, $options: "i" }
        }
      ]
    }), l && H.$and.push(l);
    const G = {
      limit: b,
      skip: y * b
    };
    return console.log(o), Ut(r.queryConfiguration(o, H, G));
  }
  function X(H) {
    s ? (f.find((G) => G.Id === H.Id) ? (f = f.filter((G) => G.Id !== H.Id), n(4, d[H.Id] = !1, d)) : (f.push(H), n(4, d[H.Id] = !0, d)), D()) : f = [H], It.update((G) => ({ ...G, selectedEntities: f }));
  }
  function ee(H) {
    H ? f = [
      ...f,
      ...a.filter((G) => !d[G.Id])
    ] : f = f.filter((G) => !a.find((ct) => ct.Id === G.Id)), Y(), D(), It.update((G) => ({ ...G, selectedEntities: f }));
  }
  function D() {
    let H = Object.keys(d).filter((G) => d[G]);
    H.length === 0 ? n(5, h = "unchecked") : H.length === a.length ? n(5, h = "checked") : n(5, h = "indeterminate");
  }
  function U(H) {
    const G = H.detail;
    G.pageSize != b ? (n(1, y = 0), n(2, b = G.pageSize)) : n(1, y = G.pageIndex);
  }
  function Y() {
    n(4, d = {}), a.forEach((H) => {
      n(4, d[H.Id] = f.find((G) => G.Id === H.Id) != null, d);
    });
  }
  St(() => {
    N.next(), N.complete();
  }), u.pipe(st(N), Tn(() => k && !!p), Rf(250), Pf(() => n(7, S = !0)), oa(() => z())).subscribe((H) => {
    n(7, S = !1), n(3, a = H.data), Y(), D(), o === q.Group && a.unshift(v), n(6, _ = H.total);
  });
  const et = (H) => {
    var G;
    return ee((G = H.detail) == null ? void 0 : G.checked);
  }, bn = (H) => X(H);
  return t.$$set = (H) => {
    "entityType" in H && n(13, o = H.entityType), "selectMultiple" in H && n(0, s = H.selectMultiple), "additionalFilter" in H && n(14, l = H.additionalFilter);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pageIndex*/
    2 && (n(1, y), n(24, u), n(2, b), u.next()), t.$$.dirty[0] & /*pageSize*/
    4 && (n(2, b), n(24, u), n(1, y = 0), u.next());
  }, [
    s,
    y,
    b,
    a,
    d,
    h,
    _,
    S,
    i,
    c,
    X,
    ee,
    U,
    o,
    l,
    et,
    bn
  ];
}
class gg extends ce {
  constructor(e) {
    super(), ae(
      this,
      e,
      pg,
      hg,
      le,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      Yp,
      [-1, -1]
    );
  }
}
function Gs(t) {
  let e, n, r, i;
  n = new vt({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && Js(t)
  );
  return {
    c() {
      e = I("div"), B(n.$$.fragment), r = M(), o && o.c(), E(
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
      s[4].length > 0 ? o ? o.p(s, l) : (o = Js(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
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
function Js(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = I("div"), r = j(n), E(
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
      i[4].length + "") && ve(r, n);
    },
    d(i) {
      i && R(e);
    }
  };
}
function mg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g, p, v = (
    /*selectMultiple*/
    t[0] && Gs(t)
  );
  function x(b) {
    t[11](b);
  }
  let y = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (y.checked = /*withSubGroups*/
    t[1]), f = new Ln({ props: y }), ue.push(() => Zt(f, "checked", x)), {
      c() {
        e = I("div"), n = I("div"), r = I("div"), i = I("span"), o = j("search"), s = M(), l = I("input"), c = M(), v && v.c(), a = M(), u = I("div"), B(f.$$.fragment), E(
          i,
          "class",
          /*tw*/
          t[5]`material-symbols-rounded mr-2`
        ), E(l, "placeholder", "Search"), E(
          l,
          "class",
          /*tw*/
          t[5]`w-full outline-none`
        ), E(
          r,
          "class",
          /*tw*/
          t[5]`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`
        ), E(
          n,
          "class",
          /*tw*/
          t[5]`flex items-center`
        ), E(
          u,
          "class",
          /*tw*/
          t[5]`flex justify-end mt-2`
        ), E(
          e,
          "class",
          /*tw*/
          t[5]`flex flex-col`
        );
      },
      m(b, _) {
        O(b, e, _), T(e, n), T(n, r), T(r, i), T(i, o), T(r, s), T(r, l), t[8](l), pr(
          l,
          /*filter*/
          t[2]
        ), T(n, c), v && v.m(n, null), T(e, a), T(e, u), L(f, u, null), h = !0, g || (p = re(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), g = !0);
      },
      p(b, [_]) {
        _ & /*filter*/
        4 && l.value !== /*filter*/
        b[2] && pr(
          l,
          /*filter*/
          b[2]
        ), /*selectMultiple*/
        b[0] ? v ? (v.p(b, _), _ & /*selectMultiple*/
        1 && A(v, 1)) : (v = Gs(b), v.c(), A(v, 1), v.m(n, null)) : v && (fe(), P(v, 1, 1, () => {
          v = null;
        }), de());
        const m = {};
        !d && _ & /*withSubGroups*/
        2 && (d = !0, m.checked = /*withSubGroups*/
        b[1], Qt(() => d = !1)), f.$set(m);
      },
      i(b) {
        h || (A(v), A(f.$$.fragment, b), h = !0);
      },
      o(b) {
        P(v), P(f.$$.fragment, b), h = !1;
      },
      d(b) {
        b && R(e), t[8](null), v && v.d(), F(f), g = !1, p();
      }
    }
  );
}
function vg(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = Oe("tw"), s = We(), l = un(), c = !1, a = l.value.filter, u, f = new ke(), d = new ke(), h = [];
  Rt.pipe(st(f)).subscribe((m) => {
    n(1, c = m.queryWithSubGroups);
  }), d.pipe(st(f), wf(200)).subscribe((m) => {
    l.update((w) => ({ ...w, filter: m }));
  }), It.pipe(st(f)).subscribe((m) => {
    n(4, h = m.selectedEntities);
  });
  function g(m) {
    console.log("onSubGroupsToggled", m), m != Rt.value.queryWithSubGroups && Rt.update((w) => ({
      ...w,
      queryWithSubGroups: m
    }));
  }
  function p() {
    s("acceptSelection");
  }
  ga(() => {
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
  St(() => {
    f.next(), f.complete();
  });
  function x(m) {
    ue[m ? "unshift" : "push"](() => {
      u = m, n(3, u);
    });
  }
  function y() {
    a = this.value, n(2, a);
  }
  const b = () => p();
  function _(m) {
    c = m, n(1, c);
  }
  return t.$$set = (m) => {
    "entityType" in m && n(7, r = m.entityType), "selectMultiple" in m && n(0, i = m.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*filter*/
    4 && d.next(a), t.$$.dirty & /*withSubGroups*/
    2 && g(c);
  }, [
    i,
    c,
    a,
    u,
    h,
    o,
    p,
    r,
    x,
    y,
    b,
    _
  ];
}
class _g extends ce {
  constructor(e) {
    super(), ae(this, e, vg, mg, le, { entityType: 7, selectMultiple: 0 });
  }
}
function Xs(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function Ks(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function Ys(t) {
  let e, n;
  return e = new vt({
    props: {
      size: "small",
      $$slots: { default: [bg] },
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
function bg(t) {
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
function Qs(t) {
  let e, n = (
    /*tenant*/
    t[15].Name + ""
  ), r, i = (
    /*i*/
    t[19] == /*tenantPath*/
    t[2].length - 1 ? "" : " /"
  ), o, s, l, c, a;
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
      e = I("div"), r = j(n), o = j(i), s = M(), E(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      O(f, e, d), T(e, r), T(e, o), T(e, s), c || (a = re(e, "click", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && ve(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && ve(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && E(e, "class", l);
    },
    d(f) {
      f && R(e), c = !1, a();
    }
  };
}
function Zs(t) {
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
  return n = new vt({
    props: {
      $$slots: { default: [yg] },
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
function yg(t) {
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
function el(t) {
  var g;
  let e, n, r = (
    /*tenant*/
    ((g = t[15]) == null ? void 0 : g.Name) + ""
  ), i, o, s, l, c, a, u, f, d = (
    /*tenant*/
    t[15].Root && Zs(t)
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
      e = I("div"), n = I("div"), i = j(r), s = M(), d && d.c(), l = M(), E(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), E(e, "class", c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(p, v) {
      O(p, e, v), T(e, n), T(n, i), T(e, s), d && d.m(e, null), T(e, l), a = !0, u || (f = re(e, "click", h), u = !0);
    },
    p(p, v) {
      var x;
      t = p, (!a || v & /*tenants*/
      8) && r !== (r = /*tenant*/
      ((x = t[15]) == null ? void 0 : x.Name) + "") && ve(i, r), (!a || v & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && E(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, v), v & /*tenants*/
      8 && A(d, 1)) : (d = Zs(t), d.c(), A(d, 1), d.m(e, l)) : d && (fe(), P(d, 1, 1, () => {
        d = null;
      }), de()), (!a || v & /*tw*/
      2 && c !== (c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && E(e, "class", c);
    },
    i(p) {
      a || (A(d), a = !0);
    },
    o(p) {
      P(d), a = !1;
    },
    d(p) {
      p && R(e), d && d.d(), u = !1, f();
    }
  };
}
function wg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g, p, v = (
    /*allowBack*/
    t[0] && Ys(t)
  ), x = (
    /*tenantPath*/
    t[2]
  ), y = [];
  for (let w = 0; w < x.length; w += 1)
    y[w] = Qs(Ks(t, x, w));
  let b = (
    /*tenants*/
    t[3]
  ), _ = [];
  for (let w = 0; w < b.length; w += 1)
    _[w] = el(Xs(t, b, w));
  const m = (w) => P(_[w], 1, 1, () => {
    _[w] = null;
  });
  return {
    c() {
      e = I("div"), n = I("div"), v && v.c(), r = M(), i = I("div"), o = j("Mandant auswählen"), c = M(), a = I("div");
      for (let w = 0; w < y.length; w += 1)
        y[w].c();
      f = M(), d = I("div");
      for (let w = 0; w < _.length; w += 1)
        _[w].c();
      E(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), E(n, "class", l = /*tw*/
      t[1]`flex items-center`), E(a, "class", u = /*tw*/
      t[1]`flex mb-1`), ki(d, "grid-auto-rows", "60px"), E(d, "class", h = /*tw*/
      t[1]`grid grid-cols-2 gap-2 h-full overflow-auto`), E(e, "class", g = /*tw*/
      t[1]`w-full overflow-hidden`);
    },
    m(w, k) {
      O(w, e, k), T(e, n), v && v.m(n, null), T(n, r), T(n, i), T(i, o), T(e, c), T(e, a);
      for (let S = 0; S < y.length; S += 1)
        y[S] && y[S].m(a, null);
      T(e, f), T(e, d);
      for (let S = 0; S < _.length; S += 1)
        _[S] && _[S].m(d, null);
      p = !0;
    },
    p(w, [k]) {
      if (/*allowBack*/
      w[0] ? v ? (v.p(w, k), k & /*allowBack*/
      1 && A(v, 1)) : (v = Ys(w), v.c(), A(v, 1), v.m(n, r)) : v && (fe(), P(v, 1, 1, () => {
        v = null;
      }), de()), (!p || k & /*tw*/
      2 && s !== (s = /*tw*/
      w[1]`font-bold text-gray-600 text-lg`)) && E(i, "class", s), (!p || k & /*tw*/
      2 && l !== (l = /*tw*/
      w[1]`flex items-center`)) && E(n, "class", l), k & /*tw, selectTenantInPath, tenantPath*/
      70) {
        x = /*tenantPath*/
        w[2];
        let S;
        for (S = 0; S < x.length; S += 1) {
          const N = Ks(w, x, S);
          y[S] ? y[S].p(N, k) : (y[S] = Qs(N), y[S].c(), y[S].m(a, null));
        }
        for (; S < y.length; S += 1)
          y[S].d(1);
        y.length = x.length;
      }
      if ((!p || k & /*tw*/
      2 && u !== (u = /*tw*/
      w[1]`flex mb-1`)) && E(a, "class", u), k & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        b = /*tenants*/
        w[3];
        let S;
        for (S = 0; S < b.length; S += 1) {
          const N = Xs(w, b, S);
          _[S] ? (_[S].p(N, k), A(_[S], 1)) : (_[S] = el(N), _[S].c(), A(_[S], 1), _[S].m(d, null));
        }
        for (fe(), S = b.length; S < _.length; S += 1)
          m(S);
        de();
      }
      (!p || k & /*tw*/
      2 && h !== (h = /*tw*/
      w[1]`grid grid-cols-2 gap-2 h-full overflow-auto`)) && E(d, "class", h), (!p || k & /*tw*/
      2 && g !== (g = /*tw*/
      w[1]`w-full overflow-hidden`)) && E(e, "class", g);
    },
    i(w) {
      if (!p) {
        A(v);
        for (let k = 0; k < b.length; k += 1)
          A(_[k]);
        p = !0;
      }
    },
    o(w) {
      P(v), _ = _.filter(Boolean);
      for (let k = 0; k < _.length; k += 1)
        P(_[k]);
      p = !1;
    },
    d(w) {
      w && R(e), v && v.d(), wt(y, w), wt(_, w);
    }
  };
}
function Sg(t, e, n) {
  let r = Te(Pn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const c = We();
  async function a() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const b = y[0];
      if (b.Root == null) {
        f(b);
        return;
      }
    }
    n(2, s = [new oc({ Id: "start", Name: "Start" })]), n(3, l = y);
  }
  async function u(y) {
    const b = await r.getNextTenants(y.Id);
    n(3, l = b);
  }
  async function f(y) {
    n(2, s = [...s, y]), u(y);
  }
  async function d(y) {
    if (y.Id == "start") {
      a();
      return;
    }
    const b = s.findIndex((_) => _.Id === y.Id);
    n(2, s = s.slice(0, b + 1)), u(y);
  }
  function h(y, b) {
    console.log(y, b), y.detail.stopPropagation(), c("tenantSelected", { tenant: b });
  }
  a();
  const g = () => c("back"), p = (y) => d(y), v = (y, b) => h(b, y), x = (y) => f(y);
  return t.$$set = (y) => {
    "allowBack" in y && n(0, i = y.allowBack), "tw" in y && n(1, o = y.tw);
  }, [
    i,
    o,
    s,
    l,
    c,
    f,
    d,
    h,
    g,
    p,
    v,
    x
  ];
}
let za = class extends ce {
  constructor(e) {
    super(), ae(this, e, Sg, wg, le, { allowBack: 0, tw: 1 });
  }
};
function Eg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g;
  return n = new _h({
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
  ), l = new _g({
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
  ), u = new gg({
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
      e = I("div"), B(n.$$.fragment), i = M(), o = I("div"), s = I("div"), B(l.$$.fragment), c = M(), a = I("div"), B(u.$$.fragment), E(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), E(a, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), E(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), E(o, "class", h = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(p, v) {
      O(p, e, v), L(n, e, null), O(p, i, v), O(p, o, v), T(o, s), L(l, s, null), T(s, c), T(s, a), L(u, a, null), g = !0;
    },
    p(p, v) {
      const x = {};
      v & /*selectMultiple*/
      2 && (x.selectMultiple = /*selectMultiple*/
      p[1]), v & /*entityType*/
      1 && (x.entityType = /*entityType*/
      p[0]), v & /*selectedTenant*/
      16 && (x.selectedTenant = /*selectedTenant*/
      p[4]), n.$set(x), (!g || v & /*tw*/
      8 && r !== (r = /*tw*/
      p[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && E(e, "class", r);
      const y = {};
      v & /*entityType*/
      1 && (y.entityType = /*entityType*/
      p[0]), v & /*selectMultiple*/
      2 && (y.selectMultiple = /*selectMultiple*/
      p[1]), l.$set(y);
      const b = {};
      v & /*selectMultiple*/
      2 && (b.selectMultiple = /*selectMultiple*/
      p[1]), v & /*entityType*/
      1 && (b.entityType = /*entityType*/
      p[0]), v & /*additionalFilter*/
      4 && (b.additionalFilter = /*additionalFilter*/
      p[2]), u.$set(b), (!g || v & /*tw*/
      8 && f !== (f = /*tw*/
      p[3]`flex-1 overflow-hidden mt-3`)) && E(a, "class", f), (!g || v & /*tw*/
      8 && d !== (d = /*tw*/
      p[3]`flex flex-col h-full overflow-hidden`)) && E(s, "class", d), (!g || v & /*tw*/
      8 && h !== (h = /*tw*/
      p[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && E(o, "class", h);
    },
    i(p) {
      g || (A(n.$$.fragment, p), A(l.$$.fragment, p), A(u.$$.fragment, p), g = !0);
    },
    o(p) {
      P(n.$$.fragment, p), P(l.$$.fragment, p), P(u.$$.fragment, p), g = !1;
    },
    d(p) {
      p && R(e), F(n), p && R(i), p && R(o), F(l), F(u);
    }
  };
}
function Cg(t) {
  let e, n;
  return e = new za({
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
function kg(t) {
  let e, n, r, i, o;
  const s = [Cg, Eg], l = [];
  function c(a, u) {
    return (
      /*inTenantSelect*/
      a[5] ? 0 : 1
    );
  }
  return n = c(t), r = l[n] = s[n](t), {
    c() {
      e = I("div"), r.c(), E(e, "class", i = /*tw*/
      t[3]`flex w-full h-full`);
    },
    m(a, u) {
      O(a, e, u), l[n].m(e, null), o = !0;
    },
    p(a, [u]) {
      let f = n;
      n = c(a), n === f ? l[n].p(a, u) : (fe(), P(l[f], 1, 1, () => {
        l[f] = null;
      }), de(), r = l[n], r ? r.p(a, u) : (r = l[n] = s[n](a), r.c()), A(r, 1), r.m(e, null)), (!o || u & /*tw*/
      8 && i !== (i = /*tw*/
      a[3]`flex w-full h-full`)) && E(e, "class", i);
    },
    i(a) {
      o || (A(r), o = !0);
    },
    o(a) {
      P(r), o = !1;
    },
    d(a) {
      a && R(e), l[n].d();
    }
  };
}
function $g(t, e, n) {
  let { entityType: r = q.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = ze } = e, l = Te(Nt), c = Te(Pn), a, u = !1, f = [], d = We(), h = Rt.subscribe((S) => {
    S.selectedTenant ? (n(5, u = !1), v(S.selectedTenant)) : n(5, u = !0);
  }), g = It.subscribe((S) => {
    S.selectedEntities && !i ? (p(S.selectedEntities), d("selectedEntities", S.selectedEntities[0])) : f = S.selectedEntities;
  });
  function p(S) {
    const N = un(), z = N.value.lastSelectedEntities, X = S.filter((ee) => !z.includes(ee.Id)).map((ee) => ee.Id);
    z.unshift(...X), z.splice(5), N.update((ee) => ({
      ...ee,
      lastSelectedEntities: z
    }));
  }
  async function v(S) {
    try {
      n(4, a = await c.getTenantViewById(S));
    } catch (N) {
      console.error(N), n(5, u = !0);
    }
  }
  async function x(S) {
    console.log("Tenant selected", S);
    const N = await l.getEntityById(q.Group, S.Root);
    Rt.update((z) => ({ ...z, selectedTenant: S.Id })), un().update((z) => ({ ...z, selectedGroup: N }));
  }
  function y() {
    n(5, u = !0);
  }
  function b() {
    p(f), d("selectedEntities", f);
  }
  St(() => {
    h.unsubscribe(), g.unsubscribe();
  });
  const _ = () => n(5, u = !1), m = (S) => x(S.detail.tenant), w = () => y(), k = () => b();
  return t.$$set = (S) => {
    "entityType" in S && n(0, r = S.entityType), "selectMultiple" in S && n(1, i = S.selectMultiple), "additionalFilter" in S && n(2, o = S.additionalFilter), "tw" in S && n(3, s = S.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    8 && pt("tw", s);
  }, [
    r,
    i,
    o,
    s,
    a,
    u,
    x,
    y,
    b,
    _,
    m,
    w,
    k
  ];
}
let Ba = class extends ce {
  constructor(e) {
    super(), ae(this, e, $g, kg, le, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function Ag(t) {
  let e, n, r, i, o, s, l, c, a = {
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
  return r = new Ba({ props: a }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = I("div"), n = I("div"), B(r.$$.fragment), E(n, "class", i = /*tw*/
      t[3]`h-full w-full`), E(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      O(u, e, f), T(e, n), L(r, n, null), t[11](e), s = !0, l || (c = [
        re(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        re(e, "click", Tg)
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
      u[3]`h-full w-full`)) && E(n, "class", i), (!s || f & /*tw*/
      8 && o !== (o = /*tw*/
      u[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`)) && E(e, "class", o);
    },
    i(u) {
      s || (A(r.$$.fragment, u), s = !0);
    },
    o(u) {
      P(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && R(e), t[9](null), F(r), t[11](null), l = !1, at(c);
    }
  };
}
const Tg = (t) => t.stopPropagation();
function xg(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = q.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = ze } = e, c = Te("PopupService", new vr(document.body)), a, u, f;
  const d = We();
  function h(_, m) {
    _ && !f && m ? (f = c.openPopup("entity-select-dialog", m, {
      backdrop: !0,
      closeOnClickOutside: !0,
      positioning: "center",
      inTransitionClassList: "scale-100",
      inTransitionDuration: 125,
      outTransitionClassList: "!scale-50",
      outTransitionDuration: 125
    }), f.afterClosed.then(() => {
      console.log("dialog closed", u), u == null || u.$destroy(), f = null;
    })) : g();
  }
  function g() {
    console.log("closeDialog"), f == null || f.close();
  }
  function p(_) {
    console.log(_), _.key === "Escape" && g();
  }
  function v(_) {
    d("selectedEntities", _.detail);
  }
  function x(_) {
    ue[_ ? "unshift" : "push"](() => {
      u = _, n(5, u);
    });
  }
  const y = (_) => v(_);
  function b(_) {
    ue[_ ? "unshift" : "push"](() => {
      a = _, n(4, a);
    });
  }
  return t.$$set = (_) => {
    "open" in _ && n(8, r = _.open), "entityType" in _ && n(0, i = _.entityType), "selectMultiple" in _ && n(1, o = _.selectMultiple), "additionalFilter" in _ && n(2, s = _.additionalFilter), "tw" in _ && n(3, l = _.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*open, dialogElement*/
    272 && h(r, a);
  }, [
    i,
    o,
    s,
    l,
    a,
    u,
    p,
    v,
    r,
    x,
    y,
    b
  ];
}
class Pg extends ce {
  constructor(e) {
    super(), ae(this, e, xg, Ag, le, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class tl {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new Pg({
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
const sr = window, po = sr.ShadowRoot && (sr.ShadyCSS === void 0 || sr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, go = Symbol(), nl = /* @__PURE__ */ new WeakMap();
let Wa = class {
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
      r && (e = nl.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && nl.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ig = (t) => new Wa(typeof t == "string" ? t : t + "", void 0, go), Ir = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new Wa(n, t, go);
}, Rg = (t, e) => {
  po ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = sr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, rl = po ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return Ig(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ci;
const wr = window, il = wr.trustedTypes, Og = il ? il.emptyScript : "", ol = wr.reactiveElementPolyfillSupport, Ni = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Og : null;
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
} }, Va = (t, e) => e !== t && (e == e || t == t), ui = { attribute: !0, type: String, converter: Ni, reflect: !1, hasChanged: Va };
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
        n.unshift(rl(i));
    } else
      e !== void 0 && n.push(rl(e));
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
    return Rg(n, this.constructor.elementStyles), n;
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
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || Va)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
Jt.finalized = !0, Jt.elementProperties = /* @__PURE__ */ new Map(), Jt.elementStyles = [], Jt.shadowRootOptions = { mode: "open" }, ol == null || ol({ ReactiveElement: Jt }), ((ci = wr.reactiveElementVersions) !== null && ci !== void 0 ? ci : wr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fi;
const Sr = window, fn = Sr.trustedTypes, sl = fn ? fn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, mt = `lit$${(Math.random() + "").slice(9)}$`, qa = "?" + mt, Dg = `<${qa}>`, dn = document, Mn = (t = "") => dn.createComment(t), Un = (t) => t === null || typeof t != "object" && typeof t != "function", Ga = Array.isArray, Ng = (t) => Ga(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Cn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ll = /-->/g, al = />/g, $t = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), cl = /'/g, ul = /"/g, Ja = /^(?:script|style|textarea|title)$/i, hn = Symbol.for("lit-noChange"), ge = Symbol.for("lit-nothing"), fl = /* @__PURE__ */ new WeakMap(), Mg = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new zn(e.insertBefore(Mn(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, tn = dn.createTreeWalker(dn, 129, null, !1), Ug = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = Cn;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let u, f, d = -1, h = 0;
    for (; h < a.length && (s.lastIndex = h, f = s.exec(a), f !== null); )
      h = s.lastIndex, s === Cn ? f[1] === "!--" ? s = ll : f[1] !== void 0 ? s = al : f[2] !== void 0 ? (Ja.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = $t) : f[3] !== void 0 && (s = $t) : s === $t ? f[0] === ">" ? (s = i ?? Cn, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? $t : f[3] === '"' ? ul : cl) : s === ul || s === cl ? s = $t : s === ll || s === al ? s = Cn : (s = $t, i = void 0);
    const g = s === $t && t[c + 1].startsWith("/>") ? " " : "";
    o += s === Cn ? a + Dg : d >= 0 ? (r.push(u), a.slice(0, d) + "$lit$" + a.slice(d) + mt + g) : a + mt + (d === -2 ? (r.push(void 0), c) : g);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [sl !== void 0 ? sl.createHTML(l) : l, r];
};
class Hn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, c = this.parts, [a, u] = Ug(e, n);
    if (this.el = Hn.createElement(a, r), tn.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = tn.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(mt)) {
              const h = u[s++];
              if (f.push(d), h !== void 0) {
                const g = i.getAttribute(h.toLowerCase() + "$lit$").split(mt), p = /([.?@])?(.*)/.exec(h);
                c.push({ type: 1, index: o, name: p[2], strings: g, ctor: p[1] === "." ? jg : p[1] === "?" ? Fg : p[1] === "@" ? zg : Rr });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (Ja.test(i.tagName)) {
          const f = i.textContent.split(mt), d = f.length - 1;
          if (d > 0) {
            i.textContent = fn ? fn.emptyScript : "";
            for (let h = 0; h < d; h++)
              i.append(f[h], Mn()), tn.nextNode(), c.push({ type: 2, index: ++o });
            i.append(f[d], Mn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === qa)
          c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(mt, f + 1)) !== -1; )
            c.push({ type: 7, index: o }), f += mt.length - 1;
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
  let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const a = Un(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== a && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), a === void 0 ? c = void 0 : (c = new a(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = pn(t, c._$AS(t, e.values), c, r)), e;
}
class Hg {
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
    let s = tn.nextNode(), l = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (l === a.index) {
        let u;
        a.type === 2 ? u = new zn(s, s.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (u = new Bg(s, this, e)), this.v.push(u), a = i[++c];
      }
      l !== (a == null ? void 0 : a.index) && (s = tn.nextNode(), l++);
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
    this.type = 2, this._$AH = ge, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = pn(this, e, n), Un(e) ? e === ge || e == null || e === "" ? (this._$AH !== ge && this._$AR(), this._$AH = ge) : e !== this._$AH && e !== hn && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : Ng(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== ge && Un(this._$AH) ? this._$AA.nextSibling.data = e : this.k(dn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Hn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new Hg(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = fl.get(e.strings);
    return n === void 0 && fl.set(e.strings, n = new Hn(e)), n;
  }
  O(e) {
    Ga(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new zn(this.S(Mn()), this.S(Mn()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
    this.type = 1, this._$AH = ge, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = ge;
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
      e = pn(this, e, n, 0), s = !Un(e) || e !== this._$AH && e !== hn, s && (this._$AH = e);
    else {
      const l = e;
      let c, a;
      for (e = o[0], c = 0; c < o.length - 1; c++)
        a = pn(this, l[r + c], n, c), a === hn && (a = this._$AH[c]), s || (s = !Un(a) || a !== this._$AH[c]), a === ge ? e = ge : e !== ge && (e += (a ?? "") + o[c + 1]), this._$AH[c] = a;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === ge ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class jg extends Rr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === ge ? void 0 : e;
  }
}
const Lg = fn ? fn.emptyScript : "";
class Fg extends Rr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== ge ? this.element.setAttribute(this.name, Lg) : this.element.removeAttribute(this.name);
  }
}
class zg extends Rr {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = pn(this, e, n, 0)) !== null && r !== void 0 ? r : ge) === hn)
      return;
    const i = this._$AH, o = e === ge && i !== ge || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== ge && (i === ge || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Bg {
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
const dl = Sr.litHtmlPolyfillSupport;
dl == null || dl(Hn, zn), ((fi = Sr.litHtmlVersions) !== null && fi !== void 0 ? fi : Sr.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var di, hi;
class _t extends Jt {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Mg(n, this.renderRoot, this.renderOptions);
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
_t.finalized = !0, _t._$litElement$ = !0, (di = globalThis.litElementHydrateSupport) === null || di === void 0 || di.call(globalThis, { LitElement: _t });
const hl = globalThis.litElementPolyfillSupport;
hl == null || hl({ LitElement: _t });
((hi = globalThis.litElementVersions) !== null && hi !== void 0 ? hi : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wg = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Ne(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : Wg(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pi;
((pi = window.HTMLSlotElement) === null || pi === void 0 ? void 0 : pi.prototype.assignedElements) != null;
const Vg = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class Ye {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? Vg);
  }
  createTwindContext(e) {
    if (e)
      return Pp({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: ze, styleSheet: null };
    {
      const n = Pa({ target: new CSSStyleSheet() }), { tw: r } = Ha({
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
var qg = Object.defineProperty, Gg = Object.getOwnPropertyDescriptor, Xa = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Gg(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && qg(e, n, i), i;
};
const { tw: Jg, styleSheet: Xg } = Te(Ye, new Ye()).createTwindContext(), Kg = Ir`
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
class Or extends _t {
  constructor() {
    super();
    Je(this, "_element");
    dt(vr, new vr(document.body));
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
    this._element = new Ba({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Jg
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
    return Object.values(q).includes(n);
  }
}
Je(Or, "styles", [Xg.target, Kg]);
Xa([
  Ne({ type: String, attribute: "entitytype" })
], Or.prototype, "entityType", 2);
Xa([
  Ne({ type: Boolean, attribute: "multiple" })
], Or.prototype, "multiple", 2);
var Yg = Object.defineProperty, Qg = Object.getOwnPropertyDescriptor, Et = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Qg(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Yg(e, n, i), i;
};
const { tw: Zg, styleSheet: em } = Te(Ye, new Ye()).createTwindContext(), tm = Ir`
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
class Ze extends _t {
  constructor() {
    super();
    Je(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return this.multiple && this._select || ((n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new Fa({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: Zg
      }
    }), this._select.$on("valueChanged", (r) => {
      console.log(r), this.dispatchEvent(new CustomEvent("valuechanged", {
        detail: r.detail
      }));
    })), null;
  }
  disconnectedCallback() {
    var n;
    super.disconnectedCallback(), (n = this._select) == null || n.$destroy(), this._select = null, console.log("disconnectedCallback");
  }
}
Je(Ze, "styles", [em.target, tm]);
Et([
  Ne({ attribute: "value", type: String })
], Ze.prototype, "value", 2);
Et([
  Ne({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), !0;
  } })
], Ze.prototype, "arrayvalue", 2);
Et([
  Ne({ attribute: "multiple", type: Boolean })
], Ze.prototype, "multiple", 2);
Et([
  Ne({ attribute: "options", type: Array })
], Ze.prototype, "options", 2);
Et([
  Ne({ attribute: "placeholder", type: String })
], Ze.prototype, "placeholder", 2);
Et([
  Ne({ attribute: "container$class", type: String })
], Ze.prototype, "container$class", 2);
Et([
  Ne({ attribute: "textfield$class", type: String })
], Ze.prototype, "textfield$class", 2);
Et([
  Ne({ attribute: "suffix$class", type: String })
], Ze.prototype, "suffix$class", 2);
const { tw: nm, styleSheet: Mm } = Te(Ye, new Ye()).createTwindContext();
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
class rm extends _t {
  constructor() {
    super();
    Je(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new za({
      target: n,
      props: {
        tw: nm
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function im(t) {
  Ht(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
}
function pl(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[5].default
  ), l = He(
    s,
    t,
    /*$$scope*/
    t[4],
    null
  ), c = l || om(t);
  return {
    c() {
      e = I("div"), n = I("span"), c && c.c(), E(n, "class", r = oe(
        /*tw*/
        t[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0"), E(e, "class", i = oe(
        /*tw*/
        t[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0");
    },
    m(a, u) {
      O(a, e, u), T(e, n), c && c.m(n, null), o = !0;
    },
    p(a, u) {
      l ? l.p && (!o || u & /*$$scope*/
      16) && Le(
        l,
        s,
        a,
        /*$$scope*/
        a[4],
        o ? je(
          s,
          /*$$scope*/
          a[4],
          u,
          null
        ) : Fe(
          /*$$scope*/
          a[4]
        ),
        null
      ) : c && c.p && (!o || u & /*icon*/
      1) && c.p(a, o ? u : -1), (!o || u & /*tw*/
      4 && r !== (r = oe(
        /*tw*/
        a[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0")) && E(n, "class", r), (!o || u & /*tw*/
      4 && i !== (i = oe(
        /*tw*/
        a[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0")) && E(e, "class", i);
    },
    i(a) {
      o || (A(c, a), o = !0);
    },
    o(a) {
      P(c, a), o = !1;
    },
    d(a) {
      a && R(e), c && c.d(a);
    }
  };
}
function om(t) {
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
      1 && ve(
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
function sm(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*icon*/
    t[0] && pl(t)
  );
  return {
    c() {
      e = I("div"), u && u.c(), n = M(), r = I("div"), i = j(
        /*label*/
        t[1]
      ), E(r, "class", o = oe(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-8br8x0"), E(e, "class", s = oe(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0");
    },
    m(f, d) {
      O(f, e, d), u && u.m(e, null), T(e, n), T(e, r), T(r, i), l = !0, c || (a = re(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), c = !0);
    },
    p(f, [d]) {
      /*icon*/
      f[0] ? u ? (u.p(f, d), d & /*icon*/
      1 && A(u, 1)) : (u = pl(f), u.c(), A(u, 1), u.m(e, n)) : u && (fe(), P(u, 1, 1, () => {
        u = null;
      }), de()), (!l || d & /*label*/
      2) && ve(
        i,
        /*label*/
        f[1]
      ), (!l || d & /*tw*/
      4 && o !== (o = oe(
        /*tw*/
        f[2]`flex-grow`
      ) + " svelte-8br8x0")) && E(r, "class", o), (!l || d & /*tw*/
      4 && s !== (s = oe(
        /*tw*/
        f[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0")) && E(e, "class", s);
    },
    i(f) {
      l || (A(u), l = !0);
    },
    o(f) {
      P(u), l = !1;
    },
    d(f) {
      f && R(e), u && u.d(), c = !1, a();
    }
  };
}
function lm(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: l } = e, c = We();
  const a = (u) => c("click", u);
  return t.$$set = (u) => {
    "icon" in u && n(0, o = u.icon), "label" in u && n(1, s = u.label), "tw" in u && n(2, l = u.tw), "$$scope" in u && n(4, i = u.$$scope);
  }, [o, s, l, c, i, r, a];
}
class am extends ce {
  constructor(e) {
    super(), ae(this, e, lm, sm, le, { icon: 0, label: 1, tw: 2 }, im);
  }
}
function gl(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function ml(t) {
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
  return e = new am({
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
        t[17].icon
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
      t[17].icon), e.$set(s);
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
function cm(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = ml(gl(t, i, l));
  const s = (l) => P(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = I("div");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      E(e, "class", n = /*tw*/
      t[4]`bg-white rounded shadow-lg ${/*container$class*/
      t[3]}`);
    },
    m(l, c) {
      O(l, e, c);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
      r = !0;
    },
    p(l, c) {
      if (c & /*tw, items*/
      80) {
        i = /*items*/
        l[6];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = gl(l, i, a);
          o[a] ? (o[a].p(u, c), A(o[a], 1)) : (o[a] = ml(u), o[a].c(), A(o[a], 1), o[a].m(e, null));
        }
        for (fe(), a = i.length; a < o.length; a += 1)
          s(a);
        de();
      }
      (!r || c & /*tw, container$class*/
      24 && n !== (n = /*tw*/
      l[4]`bg-white rounded shadow-lg ${/*container$class*/
      l[3]}`)) && E(e, "class", n);
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < i.length; c += 1)
          A(o[c]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        P(o[c]);
      r = !1;
    },
    d(l) {
      l && R(e), wt(o, l);
    }
  };
}
function um(t) {
  let e, n, r, i, o;
  function s(u) {
    t[13](u);
  }
  function l(u) {
    t[15](u);
  }
  function c(u) {
    t[16](u);
  }
  let a = {
    closeOnClick: (
      /*closeOnClick*/
      t[5]
    ),
    position: (
      /*positionOffset*/
      t[2]
    ),
    $$slots: { default: [cm] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (a.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (a.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (a.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new ja({ props: a }), ue.push(() => Zt(e, "anchorElement", s)), t[14](e), ue.push(() => Zt(e, "preferedHorizontalAlignment", l)), ue.push(() => Zt(e, "preferedVerticalAlignment", c)), {
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
function fm(t, e, n) {
  let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 10 } } = e, { container$class: l } = e, { tw: c = ze } = e, { closeOnClick: a = !0 } = e, { items: u = [] } = e, f, d;
  function h() {
    console.log("openMenu", f, u), d.openPopup();
  }
  function g() {
    d.closePopup();
  }
  const p = (_, m) => _.action(m);
  function v(_) {
    f = _, n(7, f), n(9, r);
  }
  function x(_) {
    ue[_ ? "unshift" : "push"](() => {
      d = _, n(8, d);
    });
  }
  function y(_) {
    o = _, n(1, o);
  }
  function b(_) {
    i = _, n(0, i);
  }
  return t.$$set = (_) => {
    "anchorSelector" in _ && n(9, r = _.anchorSelector), "preferedVerticalAlignment" in _ && n(0, i = _.preferedVerticalAlignment), "preferedHorizontalAlignment" in _ && n(1, o = _.preferedHorizontalAlignment), "positionOffset" in _ && n(2, s = _.positionOffset), "container$class" in _ && n(3, l = _.container$class), "tw" in _ && n(4, c = _.tw), "closeOnClick" in _ && n(5, a = _.closeOnClick), "items" in _ && n(6, u = _.items);
  }, t.$$.update = () => {
    t.$$.dirty & /*anchorSelector, anchorElement*/
    640 && (n(7, f = document.querySelector(r)), console.log("anchorSelector", r, f));
  }, [
    i,
    o,
    s,
    l,
    c,
    a,
    u,
    f,
    d,
    r,
    h,
    g,
    p,
    v,
    x,
    y,
    b
  ];
}
class dm extends ce {
  constructor(e) {
    super(), ae(this, e, fm, um, le, {
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
var hm = Object.defineProperty, pm = Object.getOwnPropertyDescriptor, Dr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? pm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && hm(e, n, i), i;
};
const { tw: Um, styleSheet: gm } = Te(Ye, new Ye()).createTwindContext(), mm = Ir`
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
class _n extends _t {
  constructor() {
    super();
    Je(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new dm({
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
Je(_n, "styles", [gm.target, mm]);
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
const vm = Or, _m = rm;
function Hm() {
  Qn("audako-entity-select", vm), Qn("audako-tenant-select", _m), Qn("audako-select", Ze), Qn("audako-menu", _n), Te(Ye, new Ye()).createTwindContext(!0);
}
function jm(t, e) {
  const n = new Nt(t, e);
  dt(wi, new wi(t, e)), dt(Nt, n), dt(Pn, new Pn(t, e)), dt(In, new In(n)), dt(yi, new yi(t, e)), dt(tl, new tl()), dt(us, new us(t, e));
}
function Qn(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  vn as BaseHttpService,
  Eo as CompressionInterval,
  vl as ConditionSettings,
  Be as ConfigurationEntity,
  ec as Dashboard,
  ac as DashboardTab,
  ic as DataConnection,
  Sm as DataConnectionFailureConditionSettings,
  Em as DataConnectionSettings,
  _o as DataConnectionType,
  rc as DataSource,
  yi as DataSourceHttpService,
  vo as DataSourceType,
  Qa as EntityHttpEndpoints,
  Nt as EntityHttpService,
  ym as EntityIcons,
  In as EntityNameService,
  vm as EntitySelect,
  tl as EntitySelectDialogService,
  q as EntityType,
  hc as EntityTypeClassMapping,
  Tm as EntityUtils,
  cc as EventCategory,
  nc as EventCondition,
  mo as EventConditionSettingsType,
  tc as EventDefinition,
  Re as Field,
  uc as Formula,
  Za as Group,
  us as HistoricalValueService,
  as as LiveHubEvent,
  $n as LiveHubMethod,
  wi as LiveValueService,
  xm as ObjectUtils,
  fc as ProcessImage,
  sc as Signal,
  $m as SignalAnalogSettings,
  wm as SignalConditionSettings,
  Am as SignalCounterSettings,
  km as SignalDigitalSettings,
  Er as SignalSettings,
  bo as SignalType,
  cs as SubscriptionPrefix,
  Pn as TenantHttpService,
  _m as TenantSelect,
  oc as TenantView,
  Cm as UserProfile,
  Pm as UserProfileHttpService,
  jm as registerCoreServices,
  Hm as registerCustomElements,
  Te as resolveService,
  dt as tryRegisterService
};
