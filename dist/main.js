var Za = Object.defineProperty;
var ec = (t, e, n) => e in t ? Za(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Xe = (t, e, n) => (ec(t, typeof e != "symbol" ? e + "" : e, n), n);
var G;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition";
})(G || (G = {}));
const Em = {
  [G.Group]: "fas fa-folder",
  [G.Dashboard]: "adk adk-dashboard",
  [G.Signal]: "fas fa-code",
  [G.DataConnection]: "fas fa-circle-notch",
  [G.DataSource]: "fas fa-server"
}, tc = {
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
class W {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class Be {
  constructor(e) {
    this.Name = new W(), this.Description = new W(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class nc extends Be {
  constructor() {
    super();
  }
}
class rc extends Be {
}
class ic extends Be {
}
class oc extends Be {
}
var mi;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.MinimumMonitoringSettings = "MinimumMonitoringSettings", t.MaximumMonitoringSettings = "MaximumMonitoringSettings", t.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", t.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", t.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", t.PositionMonitoringSettings = "PositionMonitoringSettings", t.CounterConditionSettings = "CounterConditionSettings", t.TimebasedConditionSettings = "TimebasedConditionSettings", t.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", t.DataConnectionFailure = "DataConnectionFailure", t.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", t.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
})(mi || (mi = {}));
var bo;
(function(t) {
  t.Equal = "Equal", t.GreaterThan = "GreaterThan", t.GreaterThanOrEqual = "GreaterThanOrEqual", t.LessThan = "LessThan", t.LessThanOrEqual = "LessThanOrEqual", t.NotEqual = "NotEqual";
})(bo || (bo = {}));
class We {
}
class km extends We {
}
class $m extends We {
}
class Tm extends We {
}
class Am extends We {
}
class xm extends We {
}
class Im extends We {
}
class Pm extends We {
  constructor() {
    super(), this.Periods = [];
  }
}
class Rm {
}
class Om extends We {
}
class Dm extends We {
}
class Mm extends We {
}
class Nm extends We {
  constructor() {
    super(), this._t = mi.RecordingFailureMonitoringSettings, this.SignalId = new W(null), this.MaxOutageTime = new W(6e4);
  }
}
class Um extends We {
}
class Hm {
}
var yo;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter";
})(yo || (yo = {}));
class sc extends Be {
}
var wo;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp";
})(wo || (wo = {}));
class lc extends Be {
}
class jm {
}
class ac {
  constructor(e) {
    Object.assign(this, e);
  }
}
class Lm {
}
var So;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniversalInput", t.UniversalInOut = "UniversalInOut";
})(So || (So = {}));
class cc extends Be {
  constructor() {
    super(), this.Type = new W(), this.DataConnectionId = new W(), this.Address = new W(), this.Settings = null, this.RecordingSettings = new fc();
  }
}
class Hi {
  constructor(e) {
    this._t = e;
  }
}
class Co extends Hi {
  constructor() {
    super("SignalDigitalSettings");
  }
}
class Eo extends Hi {
  constructor() {
    super("SignalAnalogSettings");
  }
}
class uc extends Hi {
  constructor() {
    super("SignalCounterSettings");
  }
}
const Fm = {
  AnalogInput: Eo,
  AnalogInOut: Eo,
  DigitalInput: Co,
  DigitalInOut: Co,
  Counter: uc,
  UniversalInput: null,
  UniversalInOut: null
};
var ko;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(ko || (ko = {}));
var $o;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})($o || ($o = {}));
class fc {
  constructor() {
    this.Type = new W(), this.Interval = new W(), this.SpecialProcessingType = new W(), this.Type = new W(), this.Interval = new W();
  }
}
var Ye;
(function(t) {
  t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
})(Ye || (Ye = {}));
class zm {
  constructor() {
    this.Timezones = new W(), this.SubIntervalCompressionType = new W(), this.HourIntervalCompressionType = new W(), this.TwoHourIntervalCompressionType = new W(), this.DayIntervalCompressionType = new W(), this.WeekIntervalCompressionType = new W(), this.MonthIntervalCompressionType = new W(), this.QuarterIntervalCompressionType = new W(), this.YearIntervalCompressionType = new W(), this.Timezones = new W([]), this.SubIntervalCompressionType = new W(Ye.None), this.HourIntervalCompressionType = new W(Ye.None), this.TwoHourIntervalCompressionType = new W(Ye.None), this.DayIntervalCompressionType = new W(Ye.None), this.WeekIntervalCompressionType = new W(Ye.None), this.MonthIntervalCompressionType = new W(Ye.None), this.QuarterIntervalCompressionType = new W(Ye.None), this.YearIntervalCompressionType = new W(Ye.None);
  }
}
var To;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(To || (To = {}));
class dc extends Be {
}
class hc extends Be {
}
class pc extends Be {
}
var Ao;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(Ao || (Ao = {}));
class gc extends Be {
}
class mc extends Be {
}
var xo;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
})(xo || (xo = {}));
var Io;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})(Io || (Io = {}));
const vc = {
  [G.Group]: nc,
  [G.Signal]: cc,
  [G.Dashboard]: rc,
  [G.DashboardTab]: dc,
  [G.DataConnection]: lc,
  [G.DataSource]: sc,
  [G.EventCategory]: hc,
  [G.EventCondition]: oc,
  [G.EventDefinition]: ic,
  [G.Formula]: pc,
  [G.ProcessImage]: gc,
  [G.BatchDefinition]: mc
};
class Bm {
  static isEntityType(e) {
    return Object.keys(G).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = vc[e];
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
    return W.isField(i) ? i.Value : i;
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
      W.isField(s) ? i.push({
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
      W.isField(e[o]) ? e[o] = new W(r) : e[o] = r;
      return;
    } else if (i.includes(o) && typeof e[o] == "object") {
      const s = e[o];
      this._setObjectProperty(s, n, r);
    }
  }
}
class Wm {
  static isValidMongoId(e) {
    return /^[0-9a-fA-F]{24}$/.test(e);
  }
}
function _c(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var vi = {}, bc = {
  get exports() {
    return vi;
  },
  set exports(t) {
    vi = t;
  }
}, cr = {}, yc = {
  get exports() {
    return cr;
  },
  set exports(t) {
    cr = t;
  }
}, wl = function(e, n) {
  return function() {
    for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
      i[o] = arguments[o];
    return e.apply(n, i);
  };
}, wc = wl, ji = Object.prototype.toString, Li = function(t) {
  return function(e) {
    var n = ji.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Ht(t) {
  return t = t.toLowerCase(), function(n) {
    return Li(n) === t;
  };
}
function Fi(t) {
  return Array.isArray(t);
}
function ur(t) {
  return typeof t > "u";
}
function Sc(t) {
  return t !== null && !ur(t) && t.constructor !== null && !ur(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var Sl = Ht("ArrayBuffer");
function Cc(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Sl(t.buffer), e;
}
function Ec(t) {
  return typeof t == "string";
}
function kc(t) {
  return typeof t == "number";
}
function Cl(t) {
  return t !== null && typeof t == "object";
}
function tr(t) {
  if (Li(t) !== "object")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var $c = Ht("Date"), Tc = Ht("File"), Ac = Ht("Blob"), xc = Ht("FileList");
function zi(t) {
  return ji.call(t) === "[object Function]";
}
function Ic(t) {
  return Cl(t) && zi(t.pipe);
}
function Pc(t) {
  var e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || ji.call(t) === e || zi(t.toString) && t.toString() === e);
}
var Rc = Ht("URLSearchParams");
function Oc(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function Dc() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Bi(t, e) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Fi(t))
      for (var n = 0, r = t.length; n < r; n++)
        e.call(null, t[n], n, t);
    else
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
}
function _i() {
  var t = {};
  function e(i, o) {
    tr(t[o]) && tr(i) ? t[o] = _i(t[o], i) : tr(i) ? t[o] = _i({}, i) : Fi(i) ? t[o] = i.slice() : t[o] = i;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    Bi(arguments[n], e);
  return t;
}
function Mc(t, e, n) {
  return Bi(e, function(i, o) {
    n && typeof i == "function" ? t[o] = wc(i, n) : t[o] = i;
  }), t;
}
function Nc(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function Uc(t, e, n, r) {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, n && Object.assign(t.prototype, n);
}
function Hc(t, e, n) {
  var r, i, o, s = {};
  e = e || {};
  do {
    for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0; )
      o = r[i], s[o] || (e[o] = t[o], s[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}
function jc(t, e, n) {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  var r = t.indexOf(e, n);
  return r !== -1 && r === n;
}
function Lc(t) {
  if (!t)
    return null;
  var e = t.length;
  if (ur(e))
    return null;
  for (var n = new Array(e); e-- > 0; )
    n[e] = t[e];
  return n;
}
var Fc = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ce = {
  isArray: Fi,
  isArrayBuffer: Sl,
  isBuffer: Sc,
  isFormData: Pc,
  isArrayBufferView: Cc,
  isString: Ec,
  isNumber: kc,
  isObject: Cl,
  isPlainObject: tr,
  isUndefined: ur,
  isDate: $c,
  isFile: Tc,
  isBlob: Ac,
  isFunction: zi,
  isStream: Ic,
  isURLSearchParams: Rc,
  isStandardBrowserEnv: Dc,
  forEach: Bi,
  merge: _i,
  extend: Mc,
  trim: Oc,
  stripBOM: Nc,
  inherits: Uc,
  toFlatObject: Hc,
  kindOf: Li,
  kindOfTest: Ht,
  endsWith: jc,
  toArray: Lc,
  isTypedArray: Fc,
  isFileList: xc
}, zt = Ce;
function Po(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var El = function(e, n, r) {
  if (!n)
    return e;
  var i;
  if (r)
    i = r(n);
  else if (zt.isURLSearchParams(n))
    i = n.toString();
  else {
    var o = [];
    zt.forEach(n, function(c, a) {
      c === null || typeof c > "u" || (zt.isArray(c) ? a = a + "[]" : c = [c], zt.forEach(c, function(f) {
        zt.isDate(f) ? f = f.toISOString() : zt.isObject(f) && (f = JSON.stringify(f)), o.push(Po(a) + "=" + Po(f));
      }));
    }), i = o.join("&");
  }
  if (i) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}, zc = Ce;
function kr() {
  this.handlers = [];
}
kr.prototype.use = function(e, n, r) {
  return this.handlers.push({
    fulfilled: e,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
kr.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
kr.prototype.forEach = function(e) {
  zc.forEach(this.handlers, function(r) {
    r !== null && e(r);
  });
};
var Bc = kr, Wc = Ce, Vc = function(e, n) {
  Wc.forEach(e, function(i, o) {
    o !== n && o.toUpperCase() === n.toUpperCase() && (e[n] = i, delete e[o]);
  });
}, kl = Ce;
function on(t, e, n, r, i) {
  Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
kl.inherits(on, Error, {
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
var $l = on.prototype, Tl = {};
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
  Tl[t] = { value: t };
});
Object.defineProperties(on, Tl);
Object.defineProperty($l, "isAxiosError", { value: !0 });
on.from = function(t, e, n, r, i, o) {
  var s = Object.create($l);
  return kl.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }), on.call(s, t.message, e, n, r, i), s.name = t.name, o && Object.assign(s, o), s;
};
var vn = on, Al = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qe = Ce;
function qc(t, e) {
  e = e || new FormData();
  var n = [];
  function r(o) {
    return o === null ? "" : qe.isDate(o) ? o.toISOString() : qe.isArrayBuffer(o) || qe.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function i(o, s) {
    if (qe.isPlainObject(o) || qe.isArray(o)) {
      if (n.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + s);
      n.push(o), qe.forEach(o, function(c, a) {
        if (!qe.isUndefined(c)) {
          var u = s ? s + "." + a : a, f;
          if (c && !s && typeof c == "object") {
            if (qe.endsWith(a, "{}"))
              c = JSON.stringify(c);
            else if (qe.endsWith(a, "[]") && (f = qe.toArray(c))) {
              f.forEach(function(d) {
                !qe.isUndefined(d) && e.append(u, r(d));
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
var xl = qc, Nr, Ro;
function Gc() {
  if (Ro)
    return Nr;
  Ro = 1;
  var t = vn;
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
var Ur, Oo;
function Jc() {
  if (Oo)
    return Ur;
  Oo = 1;
  var t = Ce;
  return Ur = t.isStandardBrowserEnv() ? (
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
  ), Ur;
}
var Xc = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Kc = function(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}, Yc = Xc, Qc = Kc, Il = function(e, n) {
  return e && !Yc(n) ? Qc(e, n) : n;
}, Hr, Do;
function Zc() {
  if (Do)
    return Hr;
  Do = 1;
  var t = Ce, e = [
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
  return Hr = function(r) {
    var i = {}, o, s, l;
    return r && t.forEach(r.split(`
`), function(a) {
      if (l = a.indexOf(":"), o = t.trim(a.substr(0, l)).toLowerCase(), s = t.trim(a.substr(l + 1)), o) {
        if (i[o] && e.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? i[o] = (i[o] ? i[o] : []).concat([s]) : i[o] = i[o] ? i[o] + ", " + s : s;
      }
    }), i;
  }, Hr;
}
var jr, Mo;
function eu() {
  if (Mo)
    return jr;
  Mo = 1;
  var t = Ce;
  return jr = t.isStandardBrowserEnv() ? (
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
  ), jr;
}
var Lr, No;
function $r() {
  if (No)
    return Lr;
  No = 1;
  var t = vn, e = Ce;
  function n(r) {
    t.call(this, r ?? "canceled", t.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(n, t, {
    __CANCEL__: !0
  }), Lr = n, Lr;
}
var Fr, Uo;
function tu() {
  return Uo || (Uo = 1, Fr = function(e) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return n && n[1] || "";
  }), Fr;
}
var zr, Ho;
function jo() {
  if (Ho)
    return zr;
  Ho = 1;
  var t = Ce, e = Gc(), n = Jc(), r = El, i = Il, o = Zc(), s = eu(), l = Al, c = vn, a = $r(), u = tu();
  return zr = function(d) {
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
      function M() {
        if (m) {
          var te = "getAllResponseHeaders" in m ? o(m.getAllResponseHeaders()) : null, D = !y || y === "text" || y === "json" ? m.responseText : m.response, U = {
            data: D,
            status: m.status,
            statusText: m.statusText,
            headers: te,
            config: d,
            request: m
          };
          e(function(nt) {
            g(nt), _();
          }, function(nt) {
            p(nt), _();
          }, U), m = null;
        }
      }
      if ("onloadend" in m ? m.onloadend = M : m.onreadystatechange = function() {
        !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(M);
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
      }), t.isUndefined(d.withCredentials) || (m.withCredentials = !!d.withCredentials), y && y !== "json" && (m.responseType = d.responseType), typeof d.onDownloadProgress == "function" && m.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && m.upload && m.upload.addEventListener("progress", d.onUploadProgress), (d.cancelToken || d.signal) && (b = function(te) {
        m && (p(!te || te && te.type ? new a() : te), m.abort(), m = null);
      }, d.cancelToken && d.cancelToken.subscribe(b), d.signal && (d.signal.aborted ? b() : d.signal.addEventListener("abort", b))), v || (v = null);
      var K = u(S);
      if (K && ["http", "https", "file"].indexOf(K) === -1) {
        p(new c("Unsupported protocol " + K + ":", c.ERR_BAD_REQUEST, d));
        return;
      }
      m.send(v);
    });
  }, zr;
}
var Br, Lo;
function nu() {
  return Lo || (Lo = 1, Br = null), Br;
}
var ge = Ce, Fo = Vc, zo = vn, ru = Al, iu = xl, ou = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Bo(t, e) {
  !ge.isUndefined(t) && ge.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function su() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = jo()), t;
}
function lu(t, e, n) {
  if (ge.isString(t))
    try {
      return (e || JSON.parse)(t), ge.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
var Tr = {
  transitional: ru,
  adapter: su(),
  transformRequest: [function(e, n) {
    if (Fo(n, "Accept"), Fo(n, "Content-Type"), ge.isFormData(e) || ge.isArrayBuffer(e) || ge.isBuffer(e) || ge.isStream(e) || ge.isFile(e) || ge.isBlob(e))
      return e;
    if (ge.isArrayBufferView(e))
      return e.buffer;
    if (ge.isURLSearchParams(e))
      return Bo(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var r = ge.isObject(e), i = n && n["Content-Type"], o;
    if ((o = ge.isFileList(e)) || r && i === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return iu(o ? { "files[]": e } : e, s && new s());
    } else if (r || i === "application/json")
      return Bo(n, "application/json"), lu(e);
    return e;
  }],
  transformResponse: [function(e) {
    var n = this.transitional || Tr.transitional, r = n && n.silentJSONParsing, i = n && n.forcedJSONParsing, o = !r && this.responseType === "json";
    if (o || i && ge.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? zo.from(s, zo.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: nu()
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
ge.forEach(["delete", "get", "head"], function(e) {
  Tr.headers[e] = {};
});
ge.forEach(["post", "put", "patch"], function(e) {
  Tr.headers[e] = ge.merge(ou);
});
var Wi = Tr, au = Ce, cu = Wi, uu = function(e, n, r) {
  var i = this || cu;
  return au.forEach(r, function(s) {
    e = s.call(i, e, n);
  }), e;
}, Wr, Wo;
function Pl() {
  return Wo || (Wo = 1, Wr = function(e) {
    return !!(e && e.__CANCEL__);
  }), Wr;
}
var Vo = Ce, Vr = uu, fu = Pl(), du = Wi, hu = $r();
function qr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new hu();
}
var pu = function(e) {
  qr(e), e.headers = e.headers || {}, e.data = Vr.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = Vo.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), Vo.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(i) {
      delete e.headers[i];
    }
  );
  var n = e.adapter || du.adapter;
  return n(e).then(function(i) {
    return qr(e), i.data = Vr.call(
      e,
      i.data,
      i.headers,
      e.transformResponse
    ), i;
  }, function(i) {
    return fu(i) || (qr(e), i && i.response && (i.response.data = Vr.call(
      e,
      i.response.data,
      i.response.headers,
      e.transformResponse
    ))), Promise.reject(i);
  });
}, Ne = Ce, Rl = function(e, n) {
  n = n || {};
  var r = {};
  function i(u, f) {
    return Ne.isPlainObject(u) && Ne.isPlainObject(f) ? Ne.merge(u, f) : Ne.isPlainObject(f) ? Ne.merge({}, f) : Ne.isArray(f) ? f.slice() : f;
  }
  function o(u) {
    if (Ne.isUndefined(n[u])) {
      if (!Ne.isUndefined(e[u]))
        return i(void 0, e[u]);
    } else
      return i(e[u], n[u]);
  }
  function s(u) {
    if (!Ne.isUndefined(n[u]))
      return i(void 0, n[u]);
  }
  function l(u) {
    if (Ne.isUndefined(n[u])) {
      if (!Ne.isUndefined(e[u]))
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
  return Ne.forEach(Object.keys(e).concat(Object.keys(n)), function(f) {
    var d = a[f] || o, h = d(f);
    Ne.isUndefined(h) && d !== c || (r[f] = h);
  }), r;
}, Gr, qo;
function Ol() {
  return qo || (qo = 1, Gr = {
    version: "0.27.2"
  }), Gr;
}
var gu = Ol().version, gt = vn, Vi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  Vi[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var Go = {};
Vi.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + gu + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return function(o, s, l) {
    if (e === !1)
      throw new gt(
        i(s, " has been removed" + (n ? " in " + n : "")),
        gt.ERR_DEPRECATED
      );
    return n && !Go[s] && (Go[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
function mu(t, e, n) {
  if (typeof t != "object")
    throw new gt("options must be an object", gt.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
    var o = r[i], s = e[o];
    if (s) {
      var l = t[o], c = l === void 0 || s(l, o, t);
      if (c !== !0)
        throw new gt("option " + o + " must be " + c, gt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new gt("Unknown option " + o, gt.ERR_BAD_OPTION);
  }
}
var vu = {
  assertOptions: mu,
  validators: Vi
}, Dl = Ce, _u = El, Jo = Bc, Xo = pu, Ar = Rl, bu = Il, Ml = vu, Bt = Ml.validators;
function sn(t) {
  this.defaults = t, this.interceptors = {
    request: new Jo(),
    response: new Jo()
  };
}
sn.prototype.request = function(e, n) {
  typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ar(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && Ml.assertOptions(r, {
    silentJSONParsing: Bt.transitional(Bt.boolean),
    forcedJSONParsing: Bt.transitional(Bt.boolean),
    clarifyTimeoutError: Bt.transitional(Bt.boolean)
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
    var c = [Xo, void 0];
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
    l = Xo(a);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; s.length; )
    l = l.then(s.shift(), s.shift());
  return l;
};
sn.prototype.getUri = function(e) {
  e = Ar(this.defaults, e);
  var n = bu(e.baseURL, e.url);
  return _u(n, e.params, e.paramsSerializer);
};
Dl.forEach(["delete", "get", "head", "options"], function(e) {
  sn.prototype[e] = function(n, r) {
    return this.request(Ar(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
Dl.forEach(["post", "put", "patch"], function(e) {
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
  sn.prototype[e] = n(), sn.prototype[e + "Form"] = n(!0);
});
var yu = sn, Jr, Ko;
function wu() {
  if (Ko)
    return Jr;
  Ko = 1;
  var t = $r();
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
  }, Jr = e, Jr;
}
var Xr, Yo;
function Su() {
  return Yo || (Yo = 1, Xr = function(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }), Xr;
}
var Kr, Qo;
function Cu() {
  if (Qo)
    return Kr;
  Qo = 1;
  var t = Ce;
  return Kr = function(n) {
    return t.isObject(n) && n.isAxiosError === !0;
  }, Kr;
}
var Zo = Ce, Eu = wl, nr = yu, ku = Rl, $u = Wi;
function Nl(t) {
  var e = new nr(t), n = Eu(nr.prototype.request, e);
  return Zo.extend(n, nr.prototype, e), Zo.extend(n, e), n.create = function(i) {
    return Nl(ku(t, i));
  }, n;
}
var De = Nl($u);
De.Axios = nr;
De.CanceledError = $r();
De.CancelToken = wu();
De.isCancel = Pl();
De.VERSION = Ol().version;
De.toFormData = xl;
De.AxiosError = vn;
De.Cancel = De.CanceledError;
De.all = function(e) {
  return Promise.all(e);
};
De.spread = Su();
De.isAxiosError = Cu();
yc.exports = De;
cr.default = De;
(function(t) {
  t.exports = cr;
})(bc);
const we = /* @__PURE__ */ _c(vi);
var bi = function(t, e) {
  return bi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, bi(t, e);
};
function et(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  bi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Tu(t, e, n, r) {
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
function Ul(t, e) {
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
function ln(t) {
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
function wt(t, e) {
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
function St(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function Yt(t) {
  return this instanceof Yt ? (this.v = t, this) : new Yt(t);
}
function Au(t, e, n) {
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
    d.value instanceof Yt ? Promise.resolve(d.value.v).then(a, u) : f(o[0][2], d);
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
function xu(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof ln == "function" ? ln(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function oe(t) {
  return typeof t == "function";
}
function qi(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Yr = qi(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function fr(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Fn = function() {
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
            for (var l = ln(s), c = l.next(); !c.done; c = l.next()) {
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
      if (oe(u))
        try {
          u();
        } catch (p) {
          o = p instanceof Yr ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = ln(f), h = d.next(); !h.done; h = d.next()) {
            var g = h.value;
            try {
              es(g);
            } catch (p) {
              o = o ?? [], p instanceof Yr ? o = St(St([], wt(o)), wt(p.errors)) : o.push(p);
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
        throw new Yr(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        es(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && fr(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && fr(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Hl = Fn.EMPTY;
function jl(t) {
  return t instanceof Fn || t && "closed" in t && oe(t.remove) && oe(t.add) && oe(t.unsubscribe);
}
function es(t) {
  oe(t) ? t() : t.unsubscribe();
}
var Ll = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, yi = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = yi.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, St([t, e], wt(n))) : setTimeout.apply(void 0, St([t, e], wt(n)));
  },
  clearTimeout: function(t) {
    var e = yi.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Fl(t) {
  yi.setTimeout(function() {
    throw t;
  });
}
function wi() {
}
function rr(t) {
  t();
}
var Gi = function(t) {
  et(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, jl(n) && n.add(r)) : r.destination = Ou, r;
  }
  return e.create = function(n, r, i) {
    return new an(n, r, i);
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
}(Fn), Iu = Function.prototype.bind;
function Qr(t, e) {
  return Iu.call(t, e);
}
var Pu = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Vn(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Vn(r);
      }
    else
      Vn(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Vn(n);
      }
  }, t;
}(), an = function(t) {
  et(e, t);
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
      o && Ll.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && Qr(n.next, l),
        error: n.error && Qr(n.error, l),
        complete: n.complete && Qr(n.complete, l)
      }) : s = n;
    }
    return o.destination = new Pu(s), o;
  }
  return e;
}(Gi);
function Vn(t) {
  Fl(t);
}
function Ru(t) {
  throw t;
}
var Ou = {
  closed: !0,
  next: wi,
  error: Ru,
  complete: wi
}, Ji = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function _n(t) {
  return t;
}
function Du(t) {
  return t.length === 0 ? _n : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Te = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, o = Nu(e) ? e : new an(e, n, r);
    return rr(function() {
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
    return n = ts(n), new n(function(i, o) {
      var s = new an({
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
  }, t.prototype[Ji] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Du(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = ts(e), new e(function(r, i) {
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
function ts(t) {
  var e;
  return (e = t ?? Ll.Promise) !== null && e !== void 0 ? e : Promise;
}
function Mu(t) {
  return t && oe(t.next) && oe(t.error) && oe(t.complete);
}
function Nu(t) {
  return t && t instanceof Gi || Mu(t) && jl(t);
}
function Uu(t) {
  return oe(t == null ? void 0 : t.lift);
}
function Ie(t) {
  return function(e) {
    if (Uu(e))
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
function be(t, e, n, r, i) {
  return new Hu(t, e, n, r, i);
}
var Hu = function(t) {
  et(e, t);
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
}(Gi), ju = qi(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), $e = function(t) {
  et(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new ns(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ju();
  }, e.prototype.next = function(n) {
    var r = this;
    rr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = ln(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
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
    rr(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    rr(function() {
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
    return o || s ? Hl : (this.currentObservers = null, l.push(n), new Fn(function() {
      r.currentObservers = null, fr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Te();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new ns(n, r);
  }, e;
}(Te), ns = function(t) {
  et(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Hl;
  }, e;
}($e), Xi = function(t) {
  et(e, t);
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
}($e), Ki = {
  now: function() {
    return (Ki.delegate || Date).now();
  },
  delegate: void 0
}, zl = function(t) {
  et(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = Ki);
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
}($e), Lu = function(t) {
  et(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Fn), dr = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = dr.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, St([t, e], wt(n))) : setInterval.apply(void 0, St([t, e], wt(n)));
  },
  clearInterval: function(t) {
    var e = dr.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, Fu = function(t) {
  et(e, t);
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
    return i === void 0 && (i = 0), dr.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    dr.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, fr(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Lu), rs = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Ki.now, t;
}(), zu = function(t) {
  et(e, t);
  function e(n, r) {
    r === void 0 && (r = rs.now);
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
}(rs), xr = new zu(Fu), Bu = xr, Wu = new Te(function(t) {
  return t.complete();
});
function Bl(t) {
  return t && oe(t.schedule);
}
function Wl(t) {
  return t[t.length - 1];
}
function Vu(t) {
  return oe(Wl(t)) ? t.pop() : void 0;
}
function Yi(t) {
  return Bl(Wl(t)) ? t.pop() : void 0;
}
var Vl = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function ql(t) {
  return oe(t == null ? void 0 : t.then);
}
function Gl(t) {
  return oe(t[Ji]);
}
function Jl(t) {
  return Symbol.asyncIterator && oe(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Xl(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function qu() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Kl = qu();
function Yl(t) {
  return oe(t == null ? void 0 : t[Kl]);
}
function Ql(t) {
  return Au(this, arguments, function() {
    var n, r, i, o;
    return Ul(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Yt(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, Yt(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Yt(i)];
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
function Zl(t) {
  return oe(t == null ? void 0 : t.getReader);
}
function Je(t) {
  if (t instanceof Te)
    return t;
  if (t != null) {
    if (Gl(t))
      return Gu(t);
    if (Vl(t))
      return Ju(t);
    if (ql(t))
      return Xu(t);
    if (Jl(t))
      return ea(t);
    if (Yl(t))
      return Ku(t);
    if (Zl(t))
      return Yu(t);
  }
  throw Xl(t);
}
function Gu(t) {
  return new Te(function(e) {
    var n = t[Ji]();
    if (oe(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Ju(t) {
  return new Te(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Xu(t) {
  return new Te(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Fl);
  });
}
function Ku(t) {
  return new Te(function(e) {
    var n, r;
    try {
      for (var i = ln(t), o = i.next(); !o.done; o = i.next()) {
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
function ea(t) {
  return new Te(function(e) {
    Qu(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Yu(t) {
  return ea(Ql(t));
}
function Qu(t, e) {
  var n, r, i, o;
  return Tu(this, void 0, void 0, function() {
    var s, l;
    return Ul(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = xu(t), c.label = 1;
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
function lt(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function ta(t, e) {
  return e === void 0 && (e = 0), Ie(function(n, r) {
    n.subscribe(be(r, function(i) {
      return lt(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return lt(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return lt(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function na(t, e) {
  return e === void 0 && (e = 0), Ie(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Zu(t, e) {
  return Je(t).pipe(na(e), ta(e));
}
function ef(t, e) {
  return Je(t).pipe(na(e), ta(e));
}
function tf(t, e) {
  return new Te(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function nf(t, e) {
  return new Te(function(n) {
    var r;
    return lt(n, e, function() {
      r = t[Kl](), lt(n, e, function() {
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
function ra(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Te(function(n) {
    lt(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      lt(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function rf(t, e) {
  return ra(Ql(t), e);
}
function of(t, e) {
  if (t != null) {
    if (Gl(t))
      return Zu(t, e);
    if (Vl(t))
      return tf(t, e);
    if (ql(t))
      return ef(t, e);
    if (Jl(t))
      return ra(t, e);
    if (Yl(t))
      return nf(t, e);
    if (Zl(t))
      return rf(t, e);
  }
  throw Xl(t);
}
function jt(t, e) {
  return e ? of(t, e) : Je(t);
}
function Qt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Yi(t);
  return jt(t, n);
}
function Qi(t) {
  return !!t && (t instanceof Te || oe(t.lift) && oe(t.subscribe));
}
var sf = qi(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Nt(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new an({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new sf());
      }
    });
    t.subscribe(o);
  });
}
function lf(t) {
  return t instanceof Date && !isNaN(t);
}
function cn(t, e) {
  return Ie(function(n, r) {
    var i = 0;
    n.subscribe(be(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var af = Array.isArray;
function cf(t, e) {
  return af(e) ? t.apply(void 0, St([], wt(e))) : t(e);
}
function uf(t) {
  return cn(function(e) {
    return cf(t, e);
  });
}
var ff = Array.isArray, df = Object.getPrototypeOf, hf = Object.prototype, pf = Object.keys;
function gf(t) {
  if (t.length === 1) {
    var e = t[0];
    if (ff(e))
      return { args: e, keys: null };
    if (mf(e)) {
      var n = pf(e);
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
function mf(t) {
  return t && typeof t == "object" && df(t) === hf;
}
function vf(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function ia() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Yi(t), r = Vu(t), i = gf(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return jt([], n);
  var l = new Te(_f(o, n, s ? function(c) {
    return vf(s, c);
  } : _n));
  return r ? l.pipe(uf(r)) : l;
}
function _f(t, e, n) {
  return n === void 0 && (n = _n), function(r) {
    is(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, c = function(u) {
        is(e, function() {
          var f = jt(t[u], e), d = !1;
          f.subscribe(be(r, function(h) {
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
function is(t, e, n) {
  t ? lt(n, t, e) : e();
}
function bf(t, e, n, r, i, o, s, l) {
  var c = [], a = 0, u = 0, f = !1, d = function() {
    f && !c.length && !a && e.complete();
  }, h = function(p) {
    return a < r ? g(p) : c.push(p);
  }, g = function(p) {
    o && e.next(p), a++;
    var v = !1;
    Je(n(p, u++)).subscribe(be(e, function(x) {
      i == null || i(x), o ? h(x) : e.next(x);
    }, function() {
      v = !0;
    }, void 0, function() {
      if (v)
        try {
          a--;
          for (var x = function() {
            var y = c.shift();
            s ? lt(e, s, function() {
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
  return t.subscribe(be(e, h, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function oa(t, e, n) {
  return n === void 0 && (n = 1 / 0), oe(e) ? oa(function(r, i) {
    return cn(function(o, s) {
      return e(r, o, i, s);
    })(Je(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Ie(function(r, i) {
    return bf(r, i, t, n);
  }));
}
function yf(t) {
  return t === void 0 && (t = 1 / 0), oa(_n, t);
}
function wf() {
  return yf(1);
}
function Sf() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return wf()(jt(t, Yi(t)));
}
function sa(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = Bu);
  var r = -1;
  return e != null && (Bl(e) ? n = e : r = e), new Te(function(i) {
    var o = lf(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function In(t, e) {
  return Ie(function(n, r) {
    var i = 0;
    n.subscribe(be(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function Cf(t) {
  return Ie(function(e, n) {
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
    e.subscribe(be(n, function(a) {
      r = !0, i = a, o || Je(t(a)).subscribe(o = be(n, l, c));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function Ef(t, e) {
  return e === void 0 && (e = xr), Cf(function() {
    return sa(t, e);
  });
}
function la(t) {
  return Ie(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(be(n, void 0, void 0, function(s) {
      o = Je(t(s, la(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function kf(t, e) {
  return e === void 0 && (e = xr), Ie(function(n, r) {
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
    n.subscribe(be(r, function(a) {
      o = a, s = e.now(), i || (i = e.schedule(c, t), r.add(i));
    }, function() {
      l(), r.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function $f(t) {
  return t <= 0 ? function() {
    return Wu;
  } : Ie(function(e, n) {
    var r = 0;
    e.subscribe(be(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Tf(t) {
  return cn(function() {
    return t;
  });
}
function Af(t, e) {
  return e === void 0 && (e = _n), t = t ?? xf, Ie(function(n, r) {
    var i, o = !0;
    n.subscribe(be(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function xf(t, e) {
  return t === e;
}
function If(t, e) {
  return Af(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function Pf(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new $e();
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
    return Ie(function(b, _) {
      h++, !p && !g && v();
      var m = d = d ?? n();
      _.add(function() {
        h--, h === 0 && !p && !g && (f = Zr(y, c));
      }), m.subscribe(_), !u && h > 0 && (u = new an({
        next: function(w) {
          return m.next(w);
        },
        error: function(w) {
          p = !0, v(), f = Zr(x, i, w), m.error(w);
        },
        complete: function() {
          g = !0, v(), f = Zr(x, s), m.complete();
        }
      }), Je(b).subscribe(u));
    })(a);
  };
}
function Zr(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new an({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, St([], wt(n))).subscribe(i);
  }
}
function Rf(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, Pf({
    connector: function() {
      return new zl(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function Of(t) {
  return In(function(e, n) {
    return t <= n;
  });
}
function aa(t, e) {
  return Ie(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(be(r, function(c) {
      i == null || i.unsubscribe();
      var a = 0, u = o++;
      Je(t(c, u)).subscribe(i = be(r, function(f) {
        return r.next(e ? e(c, f, u, a++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function at(t) {
  return Ie(function(e, n) {
    Je(t).subscribe(be(n, function() {
      return n.complete();
    }, wi)), !n.closed && e.subscribe(n);
  });
}
function Df(t, e, n) {
  var r = oe(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Ie(function(i, o) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var l = !0;
    i.subscribe(be(o, function(c) {
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
  }) : _n;
}
var ca = {
  leading: !0,
  trailing: !1
};
function Mf(t, e) {
  return e === void 0 && (e = ca), Ie(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, c = null, a = !1, u = function() {
      c == null || c.unsubscribe(), c = null, o && (h(), a && r.complete());
    }, f = function() {
      c = null, a && r.complete();
    }, d = function(g) {
      return c = Je(t(g)).subscribe(be(r, u, f));
    }, h = function() {
      if (s) {
        s = !1;
        var g = l;
        l = null, r.next(g), !a && d(g);
      }
    };
    n.subscribe(be(r, function(g) {
      s = !0, l = g, !(c && !c.closed) && (i ? h() : d(g));
    }, function() {
      a = !0, !(o && s && c && !c.closed) && r.complete();
    }));
  });
}
function Nf(t, e, n) {
  e === void 0 && (e = xr), n === void 0 && (n = ca);
  var r = sa(t, e);
  return Mf(function() {
    return r;
  }, n);
}
class hr {
  static isPromise(e) {
    return e && typeof e.then == "function";
  }
}
function Pn(t) {
  return hr.isPromise(t) ? t : Qi(t) ? Nt(t) : Promise.resolve(t);
}
var os = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class bn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, hr.isPromise(n) ? n.then((r) => this.accessToken = r) : this.accessToken = n;
  }
  getAuthorizationHeader() {
    return os(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield Pn(this.accessToken)}`
      };
    });
  }
  getAccessTokenAsPromise() {
    return Qi(this.accessToken) ? Nt(this.accessToken) : hr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
  getStructureUrl() {
    return os(this, void 0, void 0, function* () {
      const e = yield Pn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Structure}`;
    });
  }
  static requestHttpConfig(e) {
    return we.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
  static isApiReachable(e) {
    return we.get(`${e}/api/structure/about/version`).then((n) => n.status === 200 || n.status === 401).catch((n) => {
      var r;
      return ((r = n == null ? void 0 : n.response) === null || r === void 0 ? void 0 : r.status) === 401;
    });
  }
}
var rt = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Ut extends bn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return rt(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return rt(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield we.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return rt(this, void 0, void 0, function* () {
      const o = `${yield this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), c = yield we.post(o, s, { headers: l });
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
    return rt(this, void 0, void 0, function* () {
      const n = yield this.queryConfiguration(G.Group, { Id: { $in: e } });
      return e.map((r) => {
        var i, o;
        return (o = (i = n.data.find((s) => s.Id === r)) === null || i === void 0 ? void 0 : i.Name) !== null && o !== void 0 ? o : r;
      }).join("/");
    });
  }
  uploadProcessImage(e, n, r = "process-image.svg") {
    return rt(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(G.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield we.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return rt(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return we.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return rt(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`, i = yield this.getAuthorizationHeader();
      return we.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return rt(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return we.delete(r, { headers: i }).then();
    });
  }
  _createBaseUrlByType(e) {
    return rt(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${tc[e]}`;
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
class Rn extends bn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return ei(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield we.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return ei(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield we.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return ei(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield we.get(n, { headers: r })).data;
    });
  }
}
var ti = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class On {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, n, r = !1, i) {
    return ti(this, void 0, void 0, function* () {
      const o = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let s = yield this.resolvePathName(o.Path.splice(i ? o.Path.length - i : 0, o.Path.length));
      return r && (s = s + "/" + o.Name.Value), s;
    });
  }
  resolvePathName(e) {
    return ti(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Nt(ia(e.map((n) => this.resolveName(G.Group, n))).pipe(cn((n) => n.join(" / "))));
    });
  }
  resolveName(e, n) {
    return ti(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = jt(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(cn((r) => r.Name.Value), Rf(1), la(() => Qt(n)))), Nt(this._nameCache[n]);
    });
  }
}
var Uf = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Vm extends bn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Uf(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield we.get(`${yield this.getStructureUrl()}/userprofile`, {
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
var ss = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Si extends bn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return ss(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield we.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return ss(this, void 0, void 0, function* () {
      const e = yield Pn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Driver}`;
    });
  }
}
class un extends Error {
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
class Zi extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Dn extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Hf extends Error {
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
class jf extends Error {
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
class Lf extends Error {
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
class Ff extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class zf extends Error {
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
class ua {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class eo {
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
var E;
(function(t) {
  t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
})(E || (E = {}));
class Mn {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
Mn.instance = new Mn();
const Bf = "6.0.8";
class ve {
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
class Se {
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
function Nn(t, e) {
  let n = "";
  return to(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Wf(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Wf(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    const i = r < 16 ? "0" : "";
    n += `0x${i}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function to(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function fa(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [c, a] = fn();
  l[c] = a, t.log(E.Trace, `(${e} transport) sending data. ${Nn(o, s.logMessageContent)}.`);
  const u = to(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(E.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function Vf(t) {
  return t === void 0 ? new pr(E.Information) : t === null ? Mn.instance : t.log !== void 0 ? t : new pr(t);
}
class qf {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class pr {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, n) {
    if (e >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${E[e]}: ${n}`;
      switch (e) {
        case E.Critical:
        case E.Error:
          this.out.error(r);
          break;
        case E.Warning:
          this.out.warn(r);
          break;
        case E.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function fn() {
  let t = "X-SignalR-User-Agent";
  return Se.isNode && (t = "User-Agent"), [t, Gf(Bf, Jf(), Kf(), Xf())];
}
function Gf(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Jf() {
  if (Se.isNode)
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
function Xf() {
  if (Se.isNode)
    return process.versions.node;
}
function Kf() {
  return Se.isNode ? "NodeJS" : "Browser";
}
function ls(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Yf() {
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
class Qf extends eo {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Yf());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new Dn();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new Dn();
    });
    let i = null;
    if (e.timeout) {
      const c = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(E.Warning, "Timeout from HTTP request."), r = new Zi();
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
      throw r || (this._logger.log(E.Warning, `Error from HTTP request. ${c}.`), c);
    } finally {
      i && clearTimeout(i), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!o.ok) {
      const c = await as(o, "text");
      throw new un(c || o.statusText, o.status);
    }
    const l = await as(o, e.responseType);
    return new ua(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return Se.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function as(t, e) {
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
class Zf extends eo {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Dn()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new Dn());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new ua(i.status, i.statusText, i.response || i.responseText)) : r(new un(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(E.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new un(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(E.Warning, "Timeout from HTTP request."), r(new Zi());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class ed extends eo {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || Se.isNode)
      this._httpClient = new Qf(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Zf(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Dn()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
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
class td {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return Ue.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (to(e)) {
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
var Z;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(Z || (Z = {}));
class nd {
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
    return this.observers.push(e), new qf(this, e);
  }
}
const rd = 30 * 1e3, id = 15 * 1e3;
var re;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(re || (re = {}));
class no {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(E.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, ve.isRequired(e, "connection"), ve.isRequired(n, "logger"), ve.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = rd, this.keepAliveIntervalInMilliseconds = id, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new td(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = re.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: Z.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, r, i) {
    return new no(e, n, r, i);
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
    this._connectionState = re.Connecting, this._logger.log(E.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), Se.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = re.Connected, this._connectionStarted = !0, this._logger.log(E.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = re.Disconnected, this._logger.log(E.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
      if (this._logger.log(E.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(E.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
    } catch (n) {
      throw this._logger.log(E.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
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
    return this._connectionState === re.Disconnected ? (this._logger.log(E.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === re.Disconnecting ? (this._logger.log(E.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = re.Disconnecting, this._logger.log(E.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(E.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
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
    const l = new nd();
    return l.cancelCallback = () => {
      const c = this._createCancelInvocation(o.invocationId);
      return delete this._callbacks[o.invocationId], s.then(() => this._sendWithProtocol(c));
    }, this._callbacks[o.invocationId] = (c, a) => {
      if (a) {
        l.error(a);
        return;
      } else
        c && (c.type === Z.Completion ? c.error ? l.error(new Error(c.error)) : l.complete() : l.next(c.item));
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
          u && (u.type === Z.Completion ? u.error ? c(new Error(u.error)) : l(u.result) : c(new Error(`Unexpected message type: ${u.type}`)));
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
          case Z.Invocation:
            this._invokeClientMethod(r);
            break;
          case Z.StreamItem:
          case Z.Completion: {
            const i = this._callbacks[r.invocationId];
            if (i) {
              r.type === Z.Completion && delete this._callbacks[r.invocationId];
              try {
                i(r);
              } catch (o) {
                this._logger.log(E.Error, `Stream callback threw error: ${ls(o)}`);
              }
            }
            break;
          }
          case Z.Ping:
            break;
          case Z.Close: {
            this._logger.log(E.Information, "Close message received from server.");
            const i = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            r.allowReconnect === !0 ? this.connection.stop(i) : this._stopPromise = this._stopInternal(i);
            break;
          }
          default:
            this._logger.log(E.Warning, `Invalid message type: ${r.type}.`);
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
      this._logger.log(E.Error, o);
      const s = new Error(o);
      throw this._handshakeRejecter(s), s;
    }
    if (n.error) {
      const i = "Server returned handshake error: " + n.error;
      this._logger.log(E.Error, i);
      const o = new Error(i);
      throw this._handshakeRejecter(o), o;
    } else
      this._logger.log(E.Debug, "Server handshake complete.");
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
        this._logger.log(E.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${r}'.`);
      }
      if (e.invocationId) {
        const r = "Server requested a response, which is not supported in this version of the client.";
        this._logger.log(E.Error, r), this._stopPromise = this._stopInternal(new Error(r));
      }
    } else
      this._logger.log(E.Warning, `No client method with the name '${e.target}' found.`);
  }
  _connectionClosed(e) {
    this._logger.log(E.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === re.Disconnecting ? this._completeClose(e) : this._connectionState === re.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === re.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = re.Disconnected, this._connectionStarted = !1, Se.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [e]));
      } catch (n) {
        this._logger.log(E.Error, `An onclose callback called with error '${e}' threw error '${n}'.`);
      }
    }
  }
  async _reconnect(e) {
    const n = Date.now();
    let r = 0, i = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), o = this._getNextRetryDelay(r++, 0, i);
    if (o === null) {
      this._logger.log(E.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = re.Reconnecting, e ? this._logger.log(E.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(E.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(E.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== re.Reconnecting) {
        this._logger.log(E.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(E.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== re.Reconnecting) {
        this._logger.log(E.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = re.Connected, this._logger.log(E.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(E.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(E.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== re.Reconnecting) {
          this._logger.log(E.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === re.Disconnecting && this._completeClose();
          return;
        }
        i = s instanceof Error ? s : new Error(s.toString()), o = this._getNextRetryDelay(r++, Date.now() - n, i);
      }
    }
    this._logger.log(E.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: e,
        retryReason: r
      });
    } catch (i) {
      return this._logger.log(E.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${n}) threw error '${i}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const n = this._callbacks;
    this._callbacks = {}, Object.keys(n).forEach((r) => {
      const i = n[r];
      try {
        i(null, e);
      } catch (o) {
        this._logger.log(E.Error, `Stream 'error' callback called with '${e}' threw error: ${ls(o)}`);
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
        type: Z.Invocation
      } : {
        arguments: n,
        target: e,
        type: Z.Invocation
      };
    {
      const o = this._invocationId;
      return this._invocationId++, i.length !== 0 ? {
        arguments: n,
        invocationId: o.toString(),
        streamIds: i,
        target: e,
        type: Z.Invocation
      } : {
        arguments: n,
        invocationId: o.toString(),
        target: e,
        type: Z.Invocation
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
      type: Z.StreamInvocation
    } : {
      arguments: n,
      invocationId: i.toString(),
      target: e,
      type: Z.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: Z.CancelInvocation
    };
  }
  _createStreamItemMessage(e, n) {
    return {
      invocationId: e,
      item: n,
      type: Z.StreamItem
    };
  }
  _createCompletionMessage(e, n, r) {
    return n ? {
      error: n,
      invocationId: e,
      type: Z.Completion
    } : {
      invocationId: e,
      result: r,
      type: Z.Completion
    };
  }
}
const od = [0, 2e3, 1e4, 3e4, null];
class cs {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : od;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class Rt {
}
Rt.Authorization = "Authorization";
Rt.Cookie = "Cookie";
var pe;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(pe || (pe = {}));
var ke;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(ke || (ke = {}));
let sd = class {
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
class us {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new sd(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (ve.isRequired(e, "url"), ve.isRequired(n, "transferFormat"), ve.isIn(n, ke, "transferFormat"), this._url = e, this._logger.log(E.Trace, "(LongPolling transport) Connecting."), n === ke.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = fn(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === ke.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(E.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, s);
    a.statusCode !== 200 ? (this._logger.log(E.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new un(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[Rt.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[Rt.Authorization] && delete e.headers[Rt.Authorization];
  }
  async _poll(e, n) {
    try {
      for (; this._running; ) {
        const r = await this._getAccessToken();
        this._updateHeaderToken(n, r);
        try {
          const i = `${e}&_=${Date.now()}`;
          this._logger.log(E.Trace, `(LongPolling transport) polling: ${i}.`);
          const o = await this._httpClient.get(i, n);
          o.statusCode === 204 ? (this._logger.log(E.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(E.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new un(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(E.Trace, `(LongPolling transport) data received. ${Nn(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(E.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof Zi ? this._logger.log(E.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(E.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(E.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? fa(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(E.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(E.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = fn();
      e[n] = r;
      const i = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      }, o = await this._getAccessToken();
      this._updateHeaderToken(i, o), await this._httpClient.delete(this._url, i), this._logger.log(E.Trace, "(LongPolling transport) DELETE request sent.");
    } finally {
      this._logger.log(E.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(E.Trace, e), this.onclose(this._closeError);
    }
  }
}
class ld {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (ve.isRequired(e, "url"), ve.isRequired(n, "transferFormat"), ve.isIn(n, ke, "transferFormat"), this._logger.log(E.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== ke.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (Se.isBrowser || Se.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), c = {};
        c.Cookie = l;
        const [a, u] = fn();
        c[a] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(E.Trace, `(SSE transport) data received. ${Nn(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
            } catch (c) {
              this._close(c);
              return;
            }
        }, s.onerror = (l) => {
          o ? this._close() : i(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, s.onopen = () => {
          this._logger.log(E.Information, `SSE connected to ${this._url}`), this._eventSource = s, o = !0, r();
        };
      } catch (l) {
        i(l);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? fa(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class ad {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (ve.isRequired(e, "url"), ve.isRequired(n, "transferFormat"), ve.isIn(n, ke, "transferFormat"), this._logger.log(E.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (Se.isNode) {
        const c = {}, [a, u] = fn();
        c[a] = u, s && (c[Rt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...c, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === ke.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
        this._logger.log(E.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (c) => {
        let a = null;
        typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "There was an error with the transport", this._logger.log(E.Information, `(WebSockets transport) ${a}.`);
      }, o.onmessage = (c) => {
        if (this._logger.log(E.Trace, `(WebSockets transport) data received. ${Nn(c.data, this._logMessageContent)}.`), this.onreceive)
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
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(E.Trace, `(WebSockets transport) sending data. ${Nn(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(E.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const fs = 100;
class cd {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, ve.isRequired(e, "url"), this._logger = Vf(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (Se.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !Se.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : Se.isNode && !n.WebSocket && r && (n.WebSocket = r), !Se.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : Se.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new ed(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || ke.Binary, ve.isIn(e, ke, "transferFormat"), this._logger.log(E.Debug, `Starting connection with transfer format '${ke[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(E.Error, n), await this._stopPromise, Promise.reject(new Error(n));
    } else if (this._connectionState !== "Connected") {
      const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(E.Error, n), Promise.reject(new Error(n));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new ro(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(E.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(E.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
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
        this._logger.log(E.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(E.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let n = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === pe.WebSockets)
          this.transport = this._constructTransport(pe.WebSockets), await this._startTransport(n, e);
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
        } while (r.url && i < fs);
        if (i === fs && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof us && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(E.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(E.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[Rt.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = fn();
    n[r] = i;
    const o = this._resolveNegotiateUrl(e);
    this._logger.log(E.Debug, `Sending negotiation request: ${o}.`);
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
      return s instanceof un && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(E.Error, l), Promise.reject(new Ff(l));
    }
  }
  _createConnectUrl(e, n) {
    return n ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : e;
  }
  async _createTransport(e, n, r, i) {
    let o = this._createConnectUrl(e, r.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(E.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(o, i), this.connectionId = r.connectionId;
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
          if (this._logger.log(E.Error, `Failed to start the transport '${a.transport}': ${f}`), c = void 0, s.push(new Lf(`${a.transport} failed: ${f}`, pe[a.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(E.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new zf(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case pe.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new ad(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case pe.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new ld(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case pe.LongPolling:
        return new us(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = pe[e.transport];
    if (i == null)
      return this._logger.log(E.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (ud(n, i))
      if (e.transferFormats.map((s) => ke[s]).indexOf(r) >= 0) {
        if (i === pe.WebSockets && !this._options.WebSocket || i === pe.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(E.Debug, `Skipping transport '${pe[i]}' because it is not supported in your environment.'`), new Hf(`'${pe[i]}' is not supported in your environment.`, i);
        this._logger.log(E.Debug, `Selecting transport '${pe[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(E.Debug, `Skipping transport '${pe[i]}' because it does not support the requested transfer format '${ke[r]}'.`), new Error(`'${pe[i]}' does not support ${ke[r]}.`);
    else
      return this._logger.log(E.Debug, `Skipping transport '${pe[i]}' because it was disabled by the client.`), new jf(`'${pe[i]}' is disabled by the client.`, i);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(E.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(E.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(E.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(E.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(E.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
      this._logger.log(E.Error, `TransportSendQueue.stop() threw error '${n}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (n) {
        this._logger.log(E.Error, `HttpConnection.onclose(${e}) threw error '${n}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!Se.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const n = window.document.createElement("a");
    return n.href = e, this._logger.log(E.Information, `Normalizing '${e}' to '${n.href}'.`), n.href;
  }
  _resolveNegotiateUrl(e) {
    const n = e.indexOf("?");
    let r = e.substring(0, n === -1 ? e.length : n);
    return r[r.length - 1] !== "/" && (r += "/"), r += "negotiate", r += n === -1 ? "" : e.substring(n), r.indexOf("negotiateVersion") === -1 && (r += n === -1 ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r;
  }
}
function ud(t, e) {
  return !t || (e & t) !== 0;
}
class ro {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new qn(), this._transportResult = new qn(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new qn()), this._transportResult.promise;
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
      this._sendBufferedData = new qn();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : ro._concatBuffers(this._buffer);
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
class qn {
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
const fd = "json";
class dd {
  constructor() {
    this.name = fd, this.version = 1, this.transferFormat = ke.Text;
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
    n === null && (n = Mn.instance);
    const r = Ue.parse(e), i = [];
    for (const o of r) {
      const s = JSON.parse(o);
      if (typeof s.type != "number")
        throw new Error("Invalid payload.");
      switch (s.type) {
        case Z.Invocation:
          this._isInvocationMessage(s);
          break;
        case Z.StreamItem:
          this._isStreamItemMessage(s);
          break;
        case Z.Completion:
          this._isCompletionMessage(s);
          break;
        case Z.Ping:
          break;
        case Z.Close:
          break;
        default:
          n.log(E.Information, "Unknown message type '" + s.type + "' ignored.");
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
const hd = {
  trace: E.Trace,
  debug: E.Debug,
  info: E.Information,
  information: E.Information,
  warn: E.Warning,
  warning: E.Warning,
  error: E.Error,
  critical: E.Critical,
  none: E.None
};
function pd(t) {
  const e = hd[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class gd {
  configureLogging(e) {
    if (ve.isRequired(e, "logging"), md(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = pd(e);
      this.logger = new pr(n);
    } else
      this.logger = new pr(e);
    return this;
  }
  withUrl(e, n) {
    return ve.isRequired(e, "url"), ve.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return ve.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new cs(e) : this.reconnectPolicy = e : this.reconnectPolicy = new cs(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new cd(this.url, e);
    return no.create(n, this.logger || Mn.instance, this.protocol || new dd(), this.reconnectPolicy);
  }
}
function md(t) {
  return t.log !== void 0;
}
var vd = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
}, An;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})(An || (An = {}));
var ds;
(function(t) {
  t.Send = "Send";
})(ds || (ds = {}));
var hs;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC";
})(hs || (hs = {}));
class Ci {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new $e(), this._connectionEstablished = new Xi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new $e(), this._subscribeRequested = new $e(), this._handleSubscriptionQueue();
  }
  connect() {
    return vd(this, void 0, void 0, function* () {
      const e = yield Pn(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Nt(this._connectionEstablished.pipe(In((n) => n), Tf(null)));
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
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(cn((o) => o.filter((s) => e.includes(s.identifier))), In((o) => o.length > 0));
    return r.length > 0 ? Sf(Qt(r), i) : i;
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(at(this._unsub), Ef(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(An.SubscribeMany, e), this._subscribedIds.push(...e);
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
      this._sendMessage(An.ChangeModeAsync, !0), this._sendMessage(An.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new gd().withUrl(e, {
      accessTokenFactory: () => this.getAccessTokenAsPromise()
    }).build();
  }
  getAccessTokenAsPromise() {
    return Qi(this.accessToken) ? Nt(this.accessToken) : hr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
}
var Sn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Gm {
}
class Jm {
}
class Xm {
}
class ps extends bn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return Sn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield we.post(`${n}/value/manyflat`, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return Sn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return we.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return Sn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return we.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return Sn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return we.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getHistorianUrl() {
    return Sn(this, void 0, void 0, function* () {
      const e = yield Pn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Historian}`;
    });
  }
}
var Ei;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(Ei || (Ei = {}));
const Pe = Ei;
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
var ki = function(t, e) {
  return ki = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, ki(t, e);
};
function io(t, e) {
  ki(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function _d(t, e, n, r) {
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
function bd(t, e) {
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
function Gn(t) {
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
function gr(t, e) {
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
function xt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(gr(arguments[e]));
  return t;
}
function da(t) {
  return !!t.useClass;
}
function $i(t) {
  return !!t.useFactory;
}
var ha = function() {
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
        return l.apply(void 0, xt(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function Wt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function yd(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function gs(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function wd(t) {
  return typeof t == "function" || t instanceof ha;
}
function ir(t) {
  return !!t.useToken;
}
function or(t) {
  return t.useValue != null;
}
function Sd(t) {
  return da(t) || or(t) || ir(t) || $i(t);
}
var oo = function() {
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
}(), Cd = function(t) {
  io(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(oo), ms = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function Ed(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function kd(t, e, n) {
  return n === void 0 && (n = "    "), xt([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function $d(t, e, n) {
  var r = gr(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = Ed(o, e);
  return kd("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function Td(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var Ad = function(t) {
  io(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(oo), xd = function(t) {
  io(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(oo), Id = function() {
  function t() {
    this.preResolution = new Ad(), this.postResolution = new xd();
  }
  return t;
}(), Pd = /* @__PURE__ */ new Map(), Rd = function() {
  function t(e) {
    this.parent = e, this._registry = new Cd(), this.interceptors = new Id(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Pe.Transient }), this.ensureNotDisposed();
    var i;
    if (Sd(n) ? i = n : i = { useClass: n }, ir(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + xt(o, [l]).join(" -> "));
        o.push(l);
        var c = this._registry.get(l);
        c && ir(c.provider) ? s = c.provider : s = null;
      }
    if ((r.lifecycle === Pe.Singleton || r.lifecycle == Pe.ContainerScoped || r.lifecycle == Pe.ResolutionScoped) && (or(i) || $i(i)))
      throw new Error('Cannot use lifecycle "' + Pe[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: i, options: r }), this;
  }, t.prototype.registerType = function(e, n) {
    return this.ensureNotDisposed(), Wt(n) ? this.register(e, {
      useToken: n
    }) : this.register(e, {
      useClass: n
    });
  }, t.prototype.registerInstance = function(e, n) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: n
    });
  }, t.prototype.registerSingleton = function(e, n) {
    if (this.ensureNotDisposed(), Wt(e)) {
      if (Wt(n))
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
    return n && !Wt(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Pe.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new ms()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && Wt(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (wd(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = Gn(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
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
        for (var l = Gn(this.interceptors.postResolution.getAll(e)), c = l.next(); !c.done; c = l.next()) {
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
    return or(e.provider) ? s = e.provider.useValue : ir(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : da(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : $i(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Pe.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new ms()), this.ensureNotDisposed();
    var i = this.getAllRegistrations(e);
    if (!i && Wt(e))
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
      for (var r = Gn(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = gr(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(c) {
          return !or(c.provider);
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
      for (var i = Gn(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = gr(o.value, 2), l = s[0], c = s[1];
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
    return _d(this, void 0, void 0, function() {
      var e;
      return bd(this, function(n) {
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
    if (e instanceof ha)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = Pd.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, xt([void 0], s)))();
    }();
    return Td(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, c;
      try {
        return yd(i) ? gs(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, xt([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, xt([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : gs(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, xt([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (a) {
        throw new Error($d(n, o, a));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), pa = new Rd();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function X() {
}
function Od(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Dd(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function ga(t) {
  return t();
}
function vs() {
  return /* @__PURE__ */ Object.create(null);
}
function ut(t) {
  t.forEach(ga);
}
function ma(t) {
  return typeof t == "function";
}
function ae(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Md(t) {
  return Object.keys(t).length === 0;
}
function He(t, e, n, r) {
  if (t) {
    const i = va(t, e, n, r);
    return t[0](i);
  }
}
function va(t, e, n, r) {
  return t[1] && r ? Od(n.ctx.slice(), t[1](r(e))) : n.ctx;
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
    const s = va(e, n, r, o);
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
function se(t) {
  return t ?? "";
}
function A(t, e) {
  t.appendChild(e);
}
function Lt(t, e, n) {
  const r = Nd(t);
  if (!r.getElementById(e)) {
    const i = P("style");
    i.id = e, i.textContent = n, Ud(r, i);
  }
}
function Nd(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Ud(t, e) {
  return A(t.head || t, e), e.sheet;
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ct(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function P(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function N() {
  return j(" ");
}
function Ir() {
  return j("");
}
function ie(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function C(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Hd(t) {
  return Array.from(t.childNodes);
}
function _e(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function mr(t, e) {
  t.value = e ?? "";
}
function Ti(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function jd(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Un;
function st(t) {
  Un = t;
}
function Ft() {
  if (!Un)
    throw new Error("Function called outside component initialization");
  return Un;
}
function _a(t) {
  Ft().$$.on_mount.push(t);
}
function Ld(t) {
  Ft().$$.after_update.push(t);
}
function Et(t) {
  Ft().$$.on_destroy.push(t);
}
function Ve() {
  const t = Ft();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = jd(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function mt(t, e) {
  return Ft().$$.context.set(t, e), e;
}
function Oe(t) {
  return Ft().$$.context.get(t);
}
const Xt = [], fe = [];
let Zt = [];
const Ai = [], Fd = /* @__PURE__ */ Promise.resolve();
let xi = !1;
function zd() {
  xi || (xi = !0, Fd.then(so));
}
function Ii(t) {
  Zt.push(t);
}
function en(t) {
  Ai.push(t);
}
const ni = /* @__PURE__ */ new Set();
let Vt = 0;
function so() {
  if (Vt !== 0)
    return;
  const t = Un;
  do {
    try {
      for (; Vt < Xt.length; ) {
        const e = Xt[Vt];
        Vt++, st(e), Bd(e.$$);
      }
    } catch (e) {
      throw Xt.length = 0, Vt = 0, e;
    }
    for (st(null), Xt.length = 0, Vt = 0; fe.length; )
      fe.pop()();
    for (let e = 0; e < Zt.length; e += 1) {
      const n = Zt[e];
      ni.has(n) || (ni.add(n), n());
    }
    Zt.length = 0;
  } while (Xt.length);
  for (; Ai.length; )
    Ai.pop()();
  xi = !1, ni.clear(), st(t);
}
function Bd(t) {
  if (t.fragment !== null) {
    t.update(), ut(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ii);
  }
}
function Wd(t) {
  const e = [], n = [];
  Zt.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Zt = e;
}
const sr = /* @__PURE__ */ new Set();
let Pt;
function de() {
  Pt = {
    r: 0,
    c: [],
    p: Pt
    // parent group
  };
}
function he() {
  Pt.r || ut(Pt.c), Pt = Pt.p;
}
function T(t, e) {
  t && t.i && (sr.delete(t), t.i(e));
}
function I(t, e, n, r) {
  if (t && t.o) {
    if (sr.has(t))
      return;
    sr.add(t), Pt.c.push(() => {
      sr.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function vr(t, e) {
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
      d !== o && f && (de(), I(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), he());
    }) : e.block.d(1), a.c(), T(a, 1), a.m(e.mount(), e.anchor), u = !0), e.block = a, e.blocks && (e.blocks[o] = a), u && so();
  }
  if (Dd(t)) {
    const i = Ft();
    if (t.then((o) => {
      st(i), r(e.then, 1, e.value, o), st(null);
    }, (o) => {
      if (st(i), r(e.catch, 2, e.error, o), st(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ba(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function tn(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function B(t) {
  t && t.c();
}
function L(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || Ii(() => {
    const s = t.$$.on_mount.map(ga).filter(ma);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : ut(s), t.$$.on_mount = [];
  }), o.forEach(Ii);
}
function F(t, e) {
  const n = t.$$;
  n.fragment !== null && (Wd(n.after_update), ut(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Vd(t, e) {
  t.$$.dirty[0] === -1 && (Xt.push(t), zd(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ce(t, e, n, r, i, o, s, l = [-1]) {
  const c = Un;
  st(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: X,
    not_equal: i,
    bound: vs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: vs(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const g = h.length ? h[0] : d;
    return a.ctx && i(a.ctx[f], a.ctx[f] = g) && (!a.skip_bound && a.bound[f] && a.bound[f](g), u && Vd(t, f)), d;
  }) : [], a.update(), u = !0, ut(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Hd(e.target);
      a.fragment && a.fragment.l(f), f.forEach(R);
    } else
      a.fragment && a.fragment.c();
    e.intro && T(t.$$.fragment), L(t, e.target, e.anchor, e.customElement), so();
  }
  st(c);
}
class ue {
  $destroy() {
    F(this, 1), this.$destroy = X;
  }
  $on(e, n) {
    if (!ma(n))
      return X;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Md(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const qd = {
  [Rn.toString()]: "TenantHttpService",
  [Si.toString()]: "DataSourceHttpService",
  [Ut.toString()]: "EntityHttpService",
  [On.toString()]: "EntityNameService",
  [bn.toString()]: "BaseHttpService",
  [Ci.toString()]: "LiveValueService"
};
function xe(t, e = null) {
  let n = qd[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? pa;
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
function pt(t, e, n = !0) {
  const r = window.dependencyContainer ?? pa;
  try {
    if (r.isRegistered(t) && !n)
      return;
    r.registerInstance(t, e);
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
  return e;
}
function lo(...t) {
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
const ya = new Xi(!1), Gd = ya.asObservable().pipe(In((t) => !t), $f(1)), _s = {}, ao = /* @__PURE__ */ new Map(), co = new $e();
co.asObservable();
function Jd(t) {
  ao.set(t.name, t), co.next({
    type: "add",
    store: t
  });
}
function Xd(t) {
  ao.delete(t.name), co.next({
    type: "remove",
    store: t
  });
}
function Kd() {
  return ao;
}
class uo extends Xi {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Jd(this);
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
    _s.preStoreUpdate && (r = _s.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, ya.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Gd.subscribe(() => {
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
    return new Te((i) => {
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
    Xd(this), this.reset();
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
function Yd(t, ...e) {
  const {
    state: n,
    config: r
  } = lo(...e), {
    name: i
  } = t;
  return new uo({
    name: i,
    state: n,
    config: r
  });
}
function fo(t) {
  return {
    props: t,
    config: void 0
  };
}
function Qd(t, e) {
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
      initialized$: Qt(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new zl(1), l = jt(o.getItem(i.key)).subscribe((a) => {
    a && t.update((u) => i.preStoreInit(Object.assign({}, u, a))), s.next(!0), s.complete();
  }), c = i.source(t).pipe(Of(1), aa((a) => o.setItem(i.key, a))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      c.unsubscribe(), l.unsubscribe();
    }
  };
}
function Zd(t) {
  if (t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return Qt(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), Qt(!0);
      },
      removeItem(e) {
        return t.removeItem(e), Qt(!0);
      }
    };
}
const eh = Zd(typeof localStorage < "u" ? localStorage : void 0), qt = [];
function _r(t, e = X) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (ae(t, l) && (t = l, n)) {
      const c = !qt.length;
      for (const a of r)
        a[1](), qt.push(a, t);
      if (c) {
        for (let a = 0; a < qt.length; a += 2)
          qt[a][0](qt[a + 1]);
        qt.length = 0;
      }
    }
  }
  function o(l) {
    i(l(t));
  }
  function s(l, c = X) {
    const a = [l, c];
    return r.add(a), r.size === 1 && (n = e(i) || X), l(t), () => {
      r.delete(a), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
const bs = _r(G.Signal), { config: th, state: nh } = lo(
  fo({
    queryWithSubGroups: !0,
    selectedTenant: null
  })
), Ot = Yd({ name: "entity-select-selection" }, fo({
  selectedEntities: []
})), Dt = new uo({ state: nh, config: th, name: "entity-select-global" });
Qd(Dt, {
  key: "entity-select-global",
  storage: eh
});
const dn = (t) => {
  const e = Kd().get(`entity-select-type-${bs}`);
  if (e)
    return e;
  const { state: n, config: r } = lo(
    fo({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new uo({ state: n, config: r, name: `entity-select-type-${bs}` });
};
function ys(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function rh(t) {
  let e;
  return {
    c() {
      e = P("div"), C(
        e,
        "class",
        /*tw*/
        t[5]`p-[10px]`
      );
    },
    m(n, r) {
      O(n, e, r);
    },
    p: X,
    d(n) {
      n && R(e);
    }
  };
}
function ih(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? sh : oh
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = P("div"), i.c(), C(
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
function oh(t) {
  let e, n, r, i;
  return {
    c() {
      e = P("span"), n = j("chevron_right"), C(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), A(e, n), r || (i = ie(
        e,
        "click",
        /*click_handler_1*/
        t[9]
      ), r = !0);
    },
    p: X,
    d(o) {
      o && R(e), r = !1, i();
    }
  };
}
function sh(t) {
  let e, n, r, i;
  return {
    c() {
      e = P("span"), n = j("expand_more"), C(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), A(e, n), r || (i = ie(
        e,
        "click",
        /*click_handler*/
        t[8]
      ), r = !0);
    },
    p: X,
    d(o) {
      o && R(e), r = !1, i();
    }
  };
}
function ws(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = Ss(ys(t, s, a));
  const c = (a) => I(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = P("div"), n = P("div"), r = N(), i = P("div");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      C(
        n,
        "class",
        /*tw*/
        t[5]`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`
      ), C(
        i,
        "class",
        /*tw*/
        t[5]`w-full`
      ), C(
        e,
        "class",
        /*tw*/
        t[5]`flex w-full`
      );
    },
    m(a, u) {
      O(a, e, u), A(e, n), A(e, r), A(e, i);
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
          const d = ys(a, s, f);
          l[f] ? (l[f].p(d, u), T(l[f], 1)) : (l[f] = Ss(d), l[f].c(), T(l[f], 1), l[f].m(i, null));
        }
        for (de(), f = s.length; f < l.length; f += 1)
          c(f);
        he();
      }
    },
    i(a) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          T(l[u]);
        o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        I(l[u]);
      o = !1;
    },
    d(a) {
      a && R(e), Ct(l, a);
    }
  };
}
function Ss(t) {
  let e, n;
  return e = new wa({
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function lh(t) {
  var x, y;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((y = (x = t[1]) == null ? void 0 : x.Name) == null ? void 0 : y.Value) + ""
  ), c, a, u, f, d;
  function h(b, _) {
    return (
      /*children*/
      b[4].length > 0 ? ih : rh
    );
  }
  let g = h(t), p = g(t), v = (
    /*expanded*/
    t[0] && ws(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), r = P("div"), i = N(), p.c(), o = N(), s = P("div"), c = j(l), a = N(), v && v.c(), C(
        s,
        "class",
        /*tw*/
        t[5]`overflow-hidden whitespace-nowrap text-ellipsis w-full`
      ), C(
        n,
        "class",
        /*tw*/
        t[5]`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`
      ), C(
        e,
        "class",
        /*tw*/
        t[5]`group cursor-pointer`
      );
    },
    m(b, _) {
      O(b, e, _), A(e, n), A(n, r), A(n, i), p.m(n, null), A(n, o), A(n, s), A(s, c), A(e, a), v && v.m(e, null), u = !0, f || (d = ie(
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
      ((w = (m = b[1]) == null ? void 0 : m.Name) == null ? void 0 : w.Value) + "") && _e(c, l), /*expanded*/
      b[0] ? v ? (v.p(b, _), _ & /*expanded*/
      1 && T(v, 1)) : (v = ws(b), v.c(), T(v, 1), v.m(e, null)) : v && (de(), I(v, 1, 1, () => {
        v = null;
      }), he());
    },
    i(b) {
      u || (T(v), u = !0);
    },
    o(b) {
      I(v), u = !1;
    },
    d(b) {
      b && R(e), p.d(), v && v.d(), f = !1, d();
    }
  };
}
function ah(t, e, n) {
  const r = xe(Ut);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, c = Oe("tw"), a = [], u = new $e(), f = dn();
  f.pipe(at(u), If("selectedGroup")).subscribe((y) => {
    var b, _;
    (b = y.selectedGroup) == null || b.Id, i == null || i.Id, i && ((_ = y.selectedGroup) != null && _.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, a = await (await r.queryConfiguration(G.Group, { GroupId: i.Id })).data);
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
  Et(() => {
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
class wa extends ue {
  constructor(e) {
    super(), ce(this, e, ah, lh, ae, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function ch(t) {
  Lt(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function uh(t) {
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
      1 && _e(
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
function fh(t) {
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
  ), h = d || uh(t);
  return {
    c() {
      e = P("div"), n = P("div"), i = N(), o = P("span"), h && h.c(), C(n, "class", se(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), C(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), C(o, "class", se(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none`
      ) + " svelte-1b4yyah"), C(e, "class", s = se(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), C(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(g, p) {
      O(g, e, p), A(e, n), A(e, i), A(e, o), h && h.m(o, null), c = !0, a || (u = [
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
        ie(e, "blur", dh)
      ], a = !0);
    },
    p(g, [p]) {
      (!c || p & /*active*/
      16 && r !== (r = /*active*/
      g[4] ? "width: 100% !important; height: 100% !important" : "")) && C(n, "style", r), d ? d.p && (!c || p & /*$$scope*/
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
      2 && s !== (s = se(
        /*tw*/
        g[5]`container group ${/*className*/
        g[1]}`
      ) + " svelte-1b4yyah")) && C(e, "class", s), (!c || p & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      g[3] + "px; width: " + /*absoluteSize*/
      g[3] + "px; " + /*disabled*/
      (g[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && C(e, "style", l);
    },
    i(g) {
      c || (T(h, g), c = !0);
    },
    o(g) {
      I(h, g), c = !1;
    },
    d(g) {
      g && R(e), h && h.d(g), a = !1, ut(u);
    }
  };
}
const dh = (t) => {
};
function hh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: c = !1 } = e, a = Oe("tw"), u, f, d, h = Ve();
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
class bt extends ue {
  constructor(e) {
    super(), ce(
      this,
      e,
      hh,
      fh,
      ae,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      ch
    );
  }
}
function ph(t) {
  let e, n, r, i, o, s, l, c, a;
  return {
    c() {
      e = P("div"), n = P("input"), i = N(), o = P("div"), s = j(
        /*label*/
        t[1]
      ), C(n, "type", "checkbox"), C(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), C(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      O(u, e, f), A(e, n), t[6](n), n.checked = /*checked*/
      t[0], A(e, i), A(e, o), A(o, s), c || (a = [
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
      ], c = !0);
    },
    p(u, [f]) {
      f & /*tw*/
      4 && r !== (r = /*tw*/
      u[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && C(n, "class", r), f & /*checked*/
      1 && (n.checked = /*checked*/
      u[0]), f & /*label*/
      2 && _e(
        s,
        /*label*/
        u[1]
      ), f & /*tw*/
      4 && l !== (l = /*tw*/
      u[2]`flex items-center cursor-pointer`) && C(e, "class", l);
    },
    i: X,
    o: X,
    d(u) {
      u && R(e), t[6](null), c = !1, ut(a);
    }
  };
}
function gh(t, e, n) {
  let { label: r = "" } = e, { checked: i = !1 } = e, { indeterminate: o = !1 } = e, { tw: s = Oe("tw") } = e, l = Ve(), c;
  function a(h) {
    n(0, i = !i), l("change", { checked: i });
  }
  function u(h) {
    fe[h ? "unshift" : "push"](() => {
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
class zn extends ue {
  constructor(e) {
    super(), ce(this, e, gh, ph, ae, {
      label: 1,
      checked: 0,
      indeterminate: 5,
      tw: 2
    });
  }
}
function Cs(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function mh(t) {
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
function Es(t) {
  let e, n, r;
  return n = new wa({
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
      e = P("div"), B(n.$$.fragment), C(
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
      r || (T(n.$$.fragment, i), r = !0);
    },
    o(i) {
      I(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && R(e), F(n);
    }
  };
}
function ks(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ts(Cs(t, r, s));
  const o = (s) => I(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Ir();
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
          const a = Cs(s, r, c);
          i[c] ? (i[c].p(a, l), T(i[c], 1)) : (i[c] = Ts(a), i[c].c(), T(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (de(), c = r.length; c < i.length; c += 1)
          o(c);
        he();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          T(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        I(i[l]);
      n = !1;
    },
    d(s) {
      Ct(i, s), s && R(e);
    }
  };
}
function $s(t) {
  let e, n;
  return e = new zn({
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function vh(t) {
  return { c: X, m: X, p: X, d: X };
}
function _h(t) {
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
      r[21] + "") && _e(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function bh(t) {
  return { c: X, m: X, p: X, d: X };
}
function Ts(t) {
  let e, n, r, i, o, s, l, c = (
    /*selectMultiple*/
    t[2] && $s(t)
  ), a = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: bh,
    then: _h,
    catch: vh,
    value: 21
  };
  vr(r = /*nameService*/
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
      e = P("div"), c && c.c(), n = N(), a.block.c(), i = N(), C(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      O(f, e, d), c && c.m(e, null), A(e, n), a.block.m(e, a.anchor = null), a.mount = () => e, a.anchor = i, A(e, i), o = !0, s || (l = ie(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? c ? (c.p(t, d), d & /*selectMultiple*/
      4 && T(c, 1)) : (c = $s(t), c.c(), T(c, 1), c.m(e, n)) : c && (de(), I(c, 1, 1, () => {
        c = null;
      }), he()), a.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && vr(r, a) || ba(a, t, d);
    },
    i(f) {
      o || (T(c), o = !0);
    },
    o(f) {
      I(c), o = !1;
    },
    d(f) {
      f && R(e), c && c.d(), a.block.d(), a.token = null, a = null, s = !1, l();
    }
  };
}
function yh(t) {
  var y;
  let e, n, r = (
    /*selectedTenant*/
    ((y = t[1]) == null ? void 0 : y.Name) + ""
  ), i, o, s, l, c, a, u, f, d, h, g, p;
  s = new bt({
    props: {
      size: "small",
      $$slots: { default: [mh] },
      $$scope: { ctx: t }
    }
  });
  let v = (
    /*rootGroup*/
    t[3] && Es(t)
  ), x = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && ks(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = j(r), o = N(), B(s.$$.fragment), l = N(), v && v.c(), c = N(), a = P("div"), u = P("div"), f = j("Zuletzt ausgewählt"), d = N(), x && x.c(), C(
        n,
        "class",
        /*tw*/
        t[7]`font-bold text-lg flex items-center cursor-pointer group`
      ), C(
        u,
        "class",
        /*tw*/
        t[7]`font-bold text-gray-700`
      ), C(
        a,
        "class",
        /*tw*/
        t[7]`flex-1`
      ), C(
        e,
        "class",
        /*tw*/
        t[7]`flex flex-col w-full h-full overflow-hidden`
      );
    },
    m(b, _) {
      O(b, e, _), A(e, n), A(n, i), A(n, o), L(s, n, null), A(e, l), v && v.m(e, null), A(e, c), A(e, a), A(a, u), A(u, f), A(a, d), x && x.m(a, null), h = !0, g || (p = ie(
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
      ((w = b[1]) == null ? void 0 : w.Name) + "") && _e(i, r);
      const m = {};
      _ & /*$$scope*/
      4194304 && (m.$$scope = { dirty: _, ctx: b }), s.$set(m), /*rootGroup*/
      b[3] ? v ? (v.p(b, _), _ & /*rootGroup*/
      8 && T(v, 1)) : (v = Es(b), v.c(), T(v, 1), v.m(e, c)) : v && (de(), I(v, 1, 1, () => {
        v = null;
      }), he()), /*lastSelectedEntities*/
      b[4] && /*lastSelectedEntities*/
      b[4].length > 0 ? x ? (x.p(b, _), _ & /*lastSelectedEntities*/
      16 && T(x, 1)) : (x = ks(b), x.c(), T(x, 1), x.m(a, null)) : x && (de(), I(x, 1, 1, () => {
        x = null;
      }), he());
    },
    i(b) {
      h || (T(s.$$.fragment, b), T(v), T(x), h = !0);
    },
    o(b) {
      I(s.$$.fragment, b), I(v), I(x), h = !1;
    },
    d(b) {
      b && R(e), F(s), v && v.d(), x && x.d(), g = !1, p();
    }
  };
}
function wh(t, e, n) {
  let r = xe(Ut), i = xe(On), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, c = Oe("tw"), a = null, u, f = [], d = {}, h = Ve(), g = new $e(), p = dn();
  p.pipe(at(g)).subscribe((m) => {
    n(4, u = m.lastSelectedEntities);
  });
  const v = Ot.subscribe((m) => {
    f = m.selectedEntities, n(5, d = {});
    for (let w of f)
      n(5, d[w.Id] = !0, d);
  });
  async function x(m) {
    var w;
    try {
      n(3, a = await r.getEntityById(G.Group, m)), (!((w = p.value) != null && w.selectedGroup) || p.value.selectedGroup.Id != a.Id) && p.update((k) => ({ ...k, selectedGroup: a }));
    } catch (k) {
      console.log(k);
    }
  }
  async function y(m) {
    let w = await r.getEntityById(o, m);
    l ? d[m] ? f = f.filter((k) => k.Id !== m) : f.push(w) : f = [w], Ot.update((k) => ({ ...k, selectedEntities: f }));
  }
  Ld(() => {
    try {
      s && s.Root && a === null && x(s.Root);
    } catch {
    }
  }), Et(() => {
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
class Sh extends ue {
  constructor(e) {
    super(), ce(this, e, wh, yh, ae, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const Ch = (t) => ({}), As = (t) => ({});
function Eh(t) {
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
    As
  );
  return {
    c() {
      e = P("div"), n = P("div"), s && s.c(), r = N(), c && c.c(), C(n, "class", "w-full overflow-auto flex-1"), C(e, "class", "flex flex-col h-full");
    },
    m(a, u) {
      O(a, e, u), A(e, n), s && s.m(n, null), A(e, r), c && c.m(e, null), i = !0;
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
          Ch
        ) : Fe(
          /*$$scope*/
          a[1]
        ),
        As
      );
    },
    i(a) {
      i || (T(s, a), T(c, a), i = !0);
    },
    o(a) {
      I(s, a), I(c, a), i = !1;
    },
    d(a) {
      a && R(e), s && s.d(a), c && c.d(a);
    }
  };
}
function kh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = Ve(), l = _r(o);
  mt("audako:table:sort", l);
  let c = l.subscribe((a) => {
    s("sort", a);
  });
  return Et(() => {
    c();
  }), t.$$set = (a) => {
    "startSort" in a && n(0, o = a.startSort), "$$scope" in a && n(1, i = a.$$scope);
  }, [o, i, r];
}
class $h extends ue {
  constructor(e) {
    super(), ce(this, e, kh, Eh, ae, { startSort: 0 });
  }
}
function Th(t) {
  Lt(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function Ah(t) {
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
      e = P("div"), i && i.c(), C(e, "class", "audako-tableheader-flexrow");
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
      n || (T(i, o), n = !0);
    },
    o(o) {
      I(i, o), n = !1;
    },
    d(o) {
      o && R(e), i && i.d(o), t[3](null);
    }
  };
}
function xh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    fe[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class Ih extends ue {
  constructor(e) {
    super(), ce(this, e, xh, Ah, ae, {}, Th);
  }
}
function Ph(t) {
  Lt(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function xs(t) {
  let e, n, r;
  return {
    c() {
      e = P("span"), n = j("north"), C(e, "class", "material-symbols-rounded text-xs transition-all"), C(e, "style", r = /*sortDirection*/
      (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(i, o) {
      O(i, e, o), A(e, n);
    },
    p(i, o) {
      o & /*sortDirection*/
      4 && r !== (r = /*sortDirection*/
      (i[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && C(e, "style", r);
    },
    d(i) {
      i && R(e);
    }
  };
}
function Rh(t) {
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
    t[0] && xs(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), a && a.c(), r = N(), u && u.c(), C(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      O(f, e, d), A(e, n), a && a.m(n, null), A(e, r), u && u.m(e, null), o = !0, s || (l = ie(
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
      f[0] ? u ? u.p(f, d) : (u = xs(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
      3 && i !== (i = "header-cell " + /*sortable*/
      (f[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      f[1] + " svelte-11sxgak")) && C(e, "class", i);
    },
    i(f) {
      o || (T(a, f), o = !0);
    },
    o(f) {
      I(a, f), o = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), u && u.d(), s = !1, l();
    }
  };
}
function Oh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, c = "asc", a = Oe("audako:table:sort");
  console.log(a);
  let u = a.subscribe((h) => {
    s && (h == null ? void 0 : h.active) === s ? n(2, c = h.direction) : n(2, c = null);
  });
  function f() {
    c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), a.set(c ? { active: s, direction: c } : null);
  }
  Et(() => {
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
class Pi extends ue {
  constructor(e) {
    super(), ce(this, e, Oh, Rh, ae, { sortable: 0, id: 4, container$class: 1 }, Ph);
  }
}
function Dh(t) {
  Lt(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function Mh(t) {
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
      e = P("div"), l && l.c(), C(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(c, a) {
      O(c, e, a), l && l.m(e, null), r = !0, i || (o = ie(
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
      c[0])) && C(e, "class", n);
    },
    i(c) {
      r || (T(l, c), r = !0);
    },
    o(c) {
      I(l, c), r = !1;
    },
    d(c) {
      c && R(e), l && l.d(c), i = !1, o();
    }
  };
}
function Nh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = Ve();
  function l(c) {
    s("click", c);
  }
  return t.$$set = (c) => {
    "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
  }, [o, l, i, r];
}
class Uh extends ue {
  constructor(e) {
    super(), ce(this, e, Nh, Mh, ae, { flexrow$class: 0 }, Dh);
  }
}
function Hh(t) {
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
      e = P("div"), o && o.c(), C(e, "class", n = /*tw*/
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
      s[0]}`)) && C(e, "class", n);
    },
    i(s) {
      r || (T(o, s), r = !0);
    },
    o(s) {
      I(o, s), r = !1;
    },
    d(s) {
      s && R(e), o && o.d(s);
    }
  };
}
function jh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = Oe("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class Ri extends ue {
  constructor(e) {
    super(), ce(this, e, jh, Hh, ae, { container$class: 0 });
  }
}
var Jn, Lh = new Uint8Array(16);
function Fh() {
  if (!Jn && (Jn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Jn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Jn(Lh);
}
const zh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Bh(t) {
  return typeof t == "string" && zh.test(t);
}
var ye = [];
for (var ri = 0; ri < 256; ++ri)
  ye.push((ri + 256).toString(16).substr(1));
function Wh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (ye[t[e + 0]] + ye[t[e + 1]] + ye[t[e + 2]] + ye[t[e + 3]] + "-" + ye[t[e + 4]] + ye[t[e + 5]] + "-" + ye[t[e + 6]] + ye[t[e + 7]] + "-" + ye[t[e + 8]] + ye[t[e + 9]] + "-" + ye[t[e + 10]] + ye[t[e + 11]] + ye[t[e + 12]] + ye[t[e + 13]] + ye[t[e + 14]] + ye[t[e + 15]]).toLowerCase();
  if (!Bh(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function Vh(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || Fh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return Wh(r);
}
const qh = {
  backdrop: !0,
  positioning: "center",
  closeOnClickOutside: !0,
  anchorElement: null,
  customPosition: {
    x: 0,
    y: 0
  }
};
class br {
  constructor(e) {
    Xe(this, "_popupContainer");
    Xe(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...qh, ...r }, console.log("openPopup", r);
    const i = Vh(), o = new $e(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
    r.inTransitionClassList && (l.style.transition = `all ${r.inTransitionDuration ?? 100}ms`, l.classList.add(r.inTransitionClassList)), s.appendChild(l);
    const c = () => {
      console.log("close"), this._removePopupWrapper(l, r), o.next(null), o.complete();
    };
    return r.closeOnClickOutside && s.addEventListener("click", (u) => {
      u.target === s && c();
    }), this._positionPopup(s, l, r), n.style.visibility = "visible", r.inTransitionClassList && (n.classList.add(r.inTransitionClassList), n.style.transition = `all ${r.inTransitionDuration ?? 100}ms`), {
      popupId: i,
      afterClosed: Nt(o).then(() => console.log("afterClosed")),
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
var Gh = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Jh(t) {
  return Gh.get(t);
}
function Xh(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function Kh(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var ne = (t, e) => !!~t.indexOf(e), q = (t, e = "-") => t.join(e), Oi = (t, e) => q(t.filter(Boolean), e), V = (t, e = 1) => t.slice(e), Yh = (t) => t, Sa = () => {
}, Qe = (t) => t[0].toUpperCase() + V(t), ho = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Mt = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, Ca = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, Ea = (t, e) => !ne("@:&", t[0]) && (ne("rg", (typeof e)[5]) || Array.isArray(e)), po = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Mt(e[i], n);
  return Ea(i, o) ? r[ho(i)] = o : r[i] = i[0] == "@" && ne("figa", i[1]) ? (r[i] || []).concat(o) : po(r[i] || {}, o, n), r;
}, t) : t, ka = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), Pr = (t) => (Array.isArray(t) || (t = [t]), "@media " + q(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || q(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), ii = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Qh = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, ct, nn, vt = (t = "") => (ct.push(t), ""), go = (t) => {
  ct.length = Math.max(ct.lastIndexOf("") + ~~t, 0);
}, Zh = (t) => t && !ne("!:", t[0]), ep = (t) => t[0] == ":", $a = (t, e) => {
  nn.push({
    v: ct.filter(ep),
    d: t,
    n: e,
    i: ne(ct, "!"),
    $: ""
  });
}, Is = (t) => {
  const e = t[0] == "-";
  e && (t = V(t));
  const n = q(ct.filter(Zh));
  return $a(t == "&" ? n : (n && n + "-") + t, e), "";
}, xn = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && vt(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && vt(n), vt();
        break;
      case "!":
        vt(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && Is(n), go(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? vt(":" + n) : n.slice(-1) == "-" ? vt(n.slice(0, -1)) : Is(n));
}, Ta = (t) => {
  vt(), yr(t), go();
}, tp = (t, e) => {
  if (e) {
    vt();
    const n = ne("tbu", (typeof e)[1]);
    xn(t, n), n && Ta(e), go();
  }
}, yr = (t) => {
  switch (typeof t) {
    case "string":
      xn(t);
      break;
    case "function":
      $a(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(Ta) : t && Object.keys(t).forEach((e) => {
        tp(e, t[e]);
      });
  }
}, Ps = /* @__PURE__ */ new WeakMap(), np = (t) => {
  let e = Ps.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || ne(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (c) => {
          o == n && (r = ""), r += i, ne("rg", (typeof c)[5]) ? r += c : c && (xn(r), r = "", yr(c)), o == t.length - 1 && xn(r);
        };
      const s = nn = [];
      xn(i);
      const l = [...ct];
      return nn = [], (c) => {
        nn.push(...s), ct = [...l], c && yr(c);
      };
    }), Ps.set(t, e);
  }
  return e;
}, Di = (t) => (ct = [], nn = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? np(t[0]).forEach((e, n) => e(t[n + 1])) : yr(t), nn), Mi, rp = (t, e) => (typeof e == "function" && (Mi = !1), e), ip = (t) => {
  Mi = !0;
  const e = JSON.stringify(t, rp);
  return Mi && e;
}, Rs = /* @__PURE__ */ new WeakMap(), op = (t, e) => {
  const n = ip(e);
  let r;
  if (n) {
    var i = Rs.get(t);
    i || Rs.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Mt(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), Ca(i, 1e4))), r;
}, sp = (t, { css: e }) => e(Di(t)), lp = (...t) => op(sp, t), Aa = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[Oi([r, l, i])] = e, s), {});
  }
}, ap = /* @__PURE__ */ Aa((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), wr = (t) => {
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
}, xa = /* @__PURE__ */ Aa(wr), cp = (t, e) => t + (e[1] == ":" ? V(e, 2) + ":" : V(e)) + ":", Os = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(cp, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, $, It, Y, Xn = (t) => t == "cols" ? "columns" : "rows", Bn = (t) => (e, n, r) => ({
  [t]: r + (($ = q(e)) && "-" + $)
}), le = (t, e) => (n, r, i) => ($ = q(n, e)) && {
  [t || i]: $
}, Ee = (t) => (e, { theme: n }, r) => ($ = n(t || r, e)) && {
  [t || r]: $
}, Kn = (t, e) => (n, { theme: r }, i) => ($ = r(t || i, n, q(n, e))) && {
  [t || i]: $
}, Ke = (t, e) => (n, r) => t(n, r, e), it = Bn("display"), Cn = Bn("position"), Gt = Bn("textTransform"), Jt = Bn("textDecoration"), Yn = Bn("fontStyle"), dt = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), Qn = (t, { theme: e }, n) => ($ = e("inset", t)) && { [n]: $ }, Tn = (t, e, n, r = n) => ($ = e(r + "Opacity", V(t))) && {
  [`--tw-${n}-opacity`]: $
}, oi = (t, e) => Math.round(parseInt(t, 16) * e), Sr = (t, e, n) => t && t[0] == "#" && ($ = (t.length - 1) / 3) && (Y = [17, 1, 0.062272][$ - 1]) ? `rgba(${oi(t.substr(1, $), Y)},${oi(t.substr(1 + $, $), Y)},${oi(t.substr(1 + 2 * $, $), Y)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, lr = (t, e, n) => n && typeof n == "string" ? ($ = Sr(n, e + "-opacity")) && $ !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, $]
} : { [t]: n } : void 0, Ds = (t) => (Y = Sr(t, "", "0")) == $ ? "transparent" : Y, Ms = (t, { theme: e }, n, r, i, o) => ($ = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (Y = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [Y]: "1"
} : {
  [Y]: "0",
  [Oi([i, $[0], o])]: (It = e(r, V(t))) && `calc(${It} * var(${Y}))`,
  [Oi([i, $[1], o])]: It && [It, `calc(${It} * calc(1 - var(${Y})))`]
} : void 0, Ia = (t, e) => e[0] && {
  [t]: (ne("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, si = (t) => (e) => ne(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : Ia(t, e), Ns = (t) => (e, { theme: n }) => {
  if ($ = n("grid" + Qe(t), e, ""))
    return { ["grid-" + t]: $ };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return ($ = n("grid" + Qe(t) + Qe(e[0]), V(e), q(V(e)))) && {
        [`grid-${t}-${e[0]}`]: $
      };
  }
}, Pa = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return le("borderStyle")(t);
    case "collapse":
    case "separate":
      return le("borderCollapse")(t);
    case "opacity":
      return Tn(t, e, n);
  }
  return ($ = e(n + "Width", t, "")) ? { borderWidth: $ } : lr("borderColor", n, e(n + "Color", t));
}, up = (t, e, n) => {
  var r;
  const i = (r = wr(t[0])) == null ? void 0 : r.map(Qe);
  i && (t = V(t));
  let o = Pa(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, c]) => {
    if (l.startsWith("border"))
      for (const a of i)
        s[l.slice(0, 6) + a + l.slice(6)] = c;
    else
      s[l] = c;
    return s;
  }, {})), o;
}, Ni = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", li = (t, e, n) => t[0] && ($ = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && $,
  [`--tw-${n}-y`]: t[0] !== "x" && $,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${$})`, Ni()]
}, Ra = (t) => (e, n, r) => r[1] ? xa(n.theme(t, e), r[1], t) : Ee(t)(e, n, r), $t = Ra("padding"), Tt = Ra("margin"), Us = (t, { theme: e }, n) => ($ = { w: "width", h: "height" }[t[0]]) && {
  [$ = `${n}${Qe($)}`]: e($, V(t))
}, Ge = (t, { theme: e }, n) => {
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
  return Y = t.shift(), ne(["hue", "drop"], Y) && (Y += Qe(t.shift())), ($ = e(i ? "backdrop" + Qe(Y) : Y, t)) && {
    ["--tw-" + i + Y]: (Array.isArray($) ? $ : [$]).map((o) => `${ho(Y)}(${o})`).join(" ")
  };
}, fp = {
  group: (t, { tag: e }, n) => e(q([n, ...t])),
  hidden: Ke(it, "none"),
  inline: it,
  block: it,
  contents: it,
  flow: it,
  table: (t, e, n) => ne(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : it(t, e, n),
  flex(t, e, n) {
    switch (t[0]) {
      case "row":
      case "col":
        return {
          flexDirection: q(t[0] == "col" ? ["column", ...V(t)] : t)
        };
      case "nowrap":
      case "wrap":
        return { flexWrap: q(t) };
      case "grow":
      case "shrink":
        return $ = e.theme("flex" + Qe(t[0]), V(t), t[1] || 1), $ != null && {
          ["flex-" + t[0]]: "" + $
        };
    }
    return ($ = e.theme("flex", t, "")) ? { flex: $ } : it(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return ($ = e.theme("gridTemplate" + Qe(Xn(t[0])), V(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : q(V(t)))) && {
          ["gridTemplate-" + Xn(t[0])]: $
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: q(t[1] == "col" ? ["column", ...V(t, 2)] : V(t), " ")
        };
    }
    return it(t, e, n);
  },
  auto: (t, { theme: e }) => ne(["cols", "rows"], t[0]) && ($ = e("gridAuto" + Qe(Xn(t[0])), V(t), q(V(t)))) && {
    ["gridAuto-" + Xn(t[0])]: $
  },
  static: Cn,
  fixed: Cn,
  absolute: Cn,
  relative: Cn,
  sticky: Cn,
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
  appearance: le(),
  cursor: Kn(),
  float: le(),
  clear: le(),
  decoration: le("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: le(),
  "mix-blend": le("mixBlendMode"),
  top: Qn,
  right: Qn,
  bottom: Qn,
  left: Qn,
  inset: (t, { theme: e }) => ($ = wr(t[0])) ? xa(e("inset", V(t)), t[0]) : ($ = e("inset", t)) && {
    top: $,
    right: $,
    bottom: $,
    left: $
  },
  underline: Jt,
  "line-through": Jt,
  "no-underline": Ke(Jt, "none"),
  "text-underline": Ke(Jt, "underline"),
  "text-no-underline": Ke(Jt, "none"),
  "text-line-through": Ke(Jt, "line-through"),
  uppercase: Gt,
  lowercase: Gt,
  capitalize: Gt,
  "normal-case": Ke(Gt, "none"),
  "text-normal-case": Ke(Gt, "none"),
  italic: Yn,
  "not-italic": Ke(Yn, "normal"),
  "font-italic": Ke(Yn, "italic"),
  "font-not-italic": Ke(Yn, "normal"),
  font: (t, e, n) => ($ = e.theme("fontFamily", t, "")) ? { fontFamily: $ } : Ee("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: ne(["start", "end"], t[0]) ? "flex-" + t[0] : q(t)
  },
  "justify-self": le(),
  "justify-items": le(),
  justify: si("justifyContent"),
  content: si("alignContent"),
  self: si("alignSelf"),
  place: (t) => t[0] && Ia("place-" + t[0], V(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: Ns("column"),
  row: Ns("row"),
  duration: Ee("transitionDuration"),
  delay: Ee("transitionDelay"),
  tracking: Ee("letterSpacing"),
  leading: Ee("lineHeight"),
  z: Ee("zIndex"),
  opacity: Ee(),
  ease: Ee("transitionTimingFunction"),
  p: $t,
  py: $t,
  px: $t,
  pt: $t,
  pr: $t,
  pb: $t,
  pl: $t,
  m: Tt,
  my: Tt,
  mx: Tt,
  mt: Tt,
  mr: Tt,
  mb: Tt,
  ml: Tt,
  w: Ee("width"),
  h: Ee("height"),
  min: Us,
  max: Us,
  fill: Ee(),
  order: Ee(),
  origin: Kn("transformOrigin", " "),
  select: le("userSelect"),
  "pointer-events": le(),
  align: le("verticalAlign"),
  whitespace: le("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: dt("ordinal"),
  "slashed-zero": dt("slashed-zero"),
  "lining-nums": dt("numeric-figure"),
  "oldstyle-nums": dt("numeric-figure"),
  "proportional-nums": dt("numeric-spacing"),
  "tabular-nums": dt("numeric-spacing"),
  "diagonal-fractions": dt("numeric-fraction"),
  "stacked-fractions": dt("numeric-fraction"),
  overflow: (t, e, n) => ne(["ellipsis", "clip"], t[0]) ? le("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : le()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: Ni(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => ($ = e("rotate", t)) && {
    "--tw-rotate": $,
    transform: [`rotate(${$})`, Ni()]
  },
  scale: li,
  translate: li,
  skew: li,
  gap: (t, e, n) => ($ = { x: "column", y: "row" }[t[0]]) ? { [$ + "Gap"]: e.theme("gap", V(t)) } : Ee("gap")(t, e, n),
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
        return Gt([], $, t[0]);
      case "opacity":
        return Tn(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : {
      fontSize: r[0],
      ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1]
    } : lr("color", "text", e("textColor", t));
  },
  bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return le("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return le("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && le("backgroundRepeat")(t);
      case "repeat":
        return ne("xy", t[1]) ? le("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return Tn(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return le("background-blend-mode")(V(t));
      case "gradient":
        if (t[1] == "to" && ($ = wr(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${q($, " ")},var(--tw-gradient-stops))`
          };
    }
    return ($ = e("backgroundPosition", t, "")) ? { backgroundPosition: $ } : ($ = e("backgroundSize", t, "")) ? { backgroundSize: $ } : ($ = e("backgroundImage", t, "")) ? { backgroundImage: $ } : lr("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-from": $,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Ds($)})`
  },
  via: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${$},var(--tw-gradient-to,${Ds($)})`
  },
  to: (t, { theme: e }) => ($ = e("gradientColorStops", t)) && {
    "--tw-gradient-to": $
  },
  border: up,
  divide: (t, e, n) => ($ = Ms(t, e, n, "divideWidth", "border", "width") || Pa(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": $
  },
  space: (t, e, n) => ($ = Ms(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": $
  },
  placeholder: (t, { theme: e }, n) => ($ = t[0] == "opacity" ? Tn(t, e, n) : lr("color", "placeholder", e("placeholderColor", t))) && {
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
    if (Y = e("animation", t)) {
      const r = Y.split(" ");
      return ($ = e("keyframes", r[0], It = {})) !== It ? (Y = n(r[0])) && {
        animation: Y + " " + q(V(r), " "),
        ["@keyframes " + Y]: $
      } : { animation: Y };
    }
  },
  ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return Tn(t, e, n);
      case "offset":
        return ($ = e("ringOffsetWidth", V(t), "")) ? {
          "--tw-ring-offset-width": $
        } : {
          "--tw-ring-offset-color": e("ringOffsetColor", V(t))
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
          "--tw-ring-color": Sr(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": Sr(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => ne(["contain", "cover", "fill", "none", "scale-down"], q(t)) ? { objectFit: q(t) } : Kn("objectPosition", " ")(t, e, n),
  list: (t, e, n) => q(t) == "item" ? it(t, e, n) : ne(["inside", "outside"], q(t)) ? { listStylePosition: t[0] } : Kn("listStyleType")(t, e, n),
  rounded: (t, e, n) => ap(e.theme("borderRadius", V(t), ""), t[0], "border", "radius") || Ee("borderRadius")(t, e, n),
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
    return Object.keys(n).reduce((s, l) => ((Y = n[l]) && typeof Y == "string" && (s[Pr(Y)] = {
      "&": {
        "max-width": Y,
        ...o(l)
      }
    }), s), {
      width: "100%",
      ...r ? { marginRight: "auto", marginLeft: "auto" } : {},
      ...o("xs")
    });
  },
  filter: Ge,
  blur: Ge,
  brightness: Ge,
  contrast: Ge,
  grayscale: Ge,
  "hue-rotate": Ge,
  invert: Ge,
  saturate: Ge,
  sepia: Ge,
  "drop-shadow": Ge,
  backdrop: Ge
}, dp = (t) => ({
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
}), hp = {
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
}, Hs = "__twind", pp = (t) => {
  let e = self[Hs];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = Hs, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, Oa = ({
  nonce: t,
  target: e = pp(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, gp = () => ({
  target: null,
  insert: Sa
}), mo = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + q(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), js = /* @__PURE__ */ mo((t) => console.warn(t)), mp = /* @__PURE__ */ mo((t) => {
  throw new Error(t);
}), vp = /* @__PURE__ */ mo(Sa), ot = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, _p = (t, e, n) => {
  let r = "";
  const i = Jh(t);
  i && (r += `${ot(i, e, n)};`);
  let o = Xh(t);
  return o & 1 && (r += `-webkit-${ot(t, e, n)};`), o & 2 && (r += `-moz-${ot(t, e, n)};`), o & 4 && (r += `-ms-${ot(t, e, n)};`), o = Kh(t, e), o & 1 && (r += `${ot(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${ot(t, `-moz-${e}`, n)};`), o & 4 && (r += `${ot(t, `-ms-${e}`, n)};`), r += ot(t, e, n), r;
}, En = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, ht = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, Re = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, ee = (t) => (e) => e(t), bp = {
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
    .../* @__PURE__ */ Re(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ Re(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ Re(64, "rem", 4, 16, 4),
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
  backdropBlur: /* @__PURE__ */ ee("blur"),
  backdropBrightness: /* @__PURE__ */ ee("brightness"),
  backdropContrast: /* @__PURE__ */ ee("contrast"),
  backdropGrayscale: /* @__PURE__ */ ee("grayscale"),
  backdropHueRotate: /* @__PURE__ */ ee("hueRotate"),
  backdropInvert: /* @__PURE__ */ ee("invert"),
  backdropOpacity: /* @__PURE__ */ ee("opacity"),
  backdropSaturate: /* @__PURE__ */ ee("saturate"),
  backdropSepia: /* @__PURE__ */ ee("sepia"),
  backgroundColor: /* @__PURE__ */ ee("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ ee("opacity"),
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
    .../* @__PURE__ */ Re(200, "", 100, 0, 50),
    .../* @__PURE__ */ Re(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: (t) => ({
    ...t("colors"),
    DEFAULT: t("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ ee("opacity"),
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
    .../* @__PURE__ */ ht(8, "px")
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
    .../* @__PURE__ */ Re(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  divideColor: /* @__PURE__ */ ee("borderColor"),
  divideOpacity: /* @__PURE__ */ ee("borderOpacity"),
  divideWidth: /* @__PURE__ */ ee("borderWidth"),
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
  gap: /* @__PURE__ */ ee("spacing"),
  gradientColorStops: /* @__PURE__ */ ee("colors"),
  height: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...En(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...En(2, 4),
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
    .../* @__PURE__ */ Re(10, "rem", 4, 3)
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
    .../* @__PURE__ */ Re(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ Re(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ ee("spacing"),
  placeholderColor: /* @__PURE__ */ ee("colors"),
  placeholderOpacity: /* @__PURE__ */ ee("opacity"),
  ringColor: (t) => ({
    DEFAULT: t("colors.blue.500", "#3b82f6"),
    ...t("colors")
  }),
  ringOffsetColor: /* @__PURE__ */ ee("colors"),
  ringOffsetWidth: /* @__PURE__ */ ht(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ ht(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ ht(2, "deg"),
    .../* @__PURE__ */ ht(12, "deg", 3),
    .../* @__PURE__ */ ht(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ Re(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ Re(150, "", 100, 0, 50),
    .../* @__PURE__ */ Re(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ ht(2, "deg"),
    .../* @__PURE__ */ ht(12, "deg", 3)
  },
  space: /* @__PURE__ */ ee("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ Re(2),
  textColor: /* @__PURE__ */ ee("colors"),
  textOpacity: /* @__PURE__ */ ee("opacity"),
  transitionDuration: (t) => ({
    DEFAULT: "150ms",
    ...t("durations")
  }),
  transitionDelay: /* @__PURE__ */ ee("durations"),
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
    ...En(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...En(2, 6),
    ...En(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ Re(50, "", 1, 0, 10)
  }
}, Da = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[q(n)] = i, e[q(n, ".")] = i);
  const o = [...n, r];
  e[q(o)] = i, e[q(o, ".")] = i, i && typeof i == "object" && Da(i, e, o);
}, e), e), yp = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, wp = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && ne(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (ne(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), Sp = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...bp, ...t }, r = (o, s) => {
    const l = o && o[s], c = typeof l == "function" ? l(i, yp) : l;
    return c && s == "colors" ? Da(c) : c;
  }, i = (o, s, l) => {
    const c = o.split(".");
    o = c[0], c.length > 1 && (l = s, s = q(V(c), "."));
    let a = e.get(o);
    if (a || (e.set(o, a = { ...r(n, o) }), Object.assign(a, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? q(s) : s) || "DEFAULT";
      const u = wp(o, s) || a[s];
      return u == null ? l : Array.isArray(u) && !ne(["fontSize", "outline", "dropShadow"], o) ? q(u, ",") : u;
    }
    return a;
  };
  return i;
}, Cp = (t, e) => (n, r) => {
  if (typeof n.d == "function")
    return n.d(e);
  const i = n.d.split(/-(?![^[]*])/g);
  if (!r && i[0] == "tw" && n.$ == n.d)
    return n.$;
  for (let o = i.length; o; o--) {
    const s = q(i.slice(0, o));
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      const l = t[s];
      return typeof l == "function" ? l(V(i, o), e, s) : typeof l == "string" ? e[r ? "css" : "tw"](l) : l;
    }
  }
}, kn, Ma = /^:(group(?:(?!-focus).+?)*)-(.+)$/, Na = /^(:not)-(.+)/, Ua = (t) => t[1] == "[" ? V(t) : t, Ep = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (kn = n("screens", V(s), "")) ? { [Pr(kn)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (kn = Ma.exec(s)) ? { [`.${ka(r(kn[1]))}:${kn[2]} &`]: o } : {
    [e[V(s)] || "&" + s.replace(Na, (l, c, a) => c + "(" + Ua(":" + a) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, Ae, Ha = (t) => (((Ae = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Ae[1] / (Ae[2] ? 15 : 1) / 10 : 0) & 31) << 22, ja = (t) => {
  Ae = 0;
  for (let e = t.length; e--; )
    Ae += ne("-:,", t[e]);
  return Ae;
}, La = (t) => (ja(t) & 15) << 18, kp = [
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
], $p = (t) => 1 << (~(Ae = kp.indexOf(t.replace(Ma, ":$2").slice(3, 8))) ? Ae : 17), Tp = (t, e) => (n, r) => n | ((Ae = t("screens", V(r), "")) ? 1 << 27 | Ha(Pr(Ae)) : r == ":dark" ? 1 << 30 : (Ae = e[r] || r.replace(Na, ":$2"))[0] == "@" ? La(Ae) : $p(r)), Ap = (t) => t[0] == "-" ? 0 : ja(t) + ((Ae = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Ae[1] || -!!Ae[2] : 0) + 1, ai = (t, e) => e + "{" + t + "}", xp = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, h) => (f = s(f), Array.isArray(d) ? q(d.filter(Boolean).map((g) => t(f, s(g), h)), ";") : t(f, s(d), h));
  let c;
  const a = (f, d, h, g, p) => {
    if (Array.isArray(g)) {
      g.forEach((b) => b && a(f, d, h, b, p));
      return;
    }
    let v = "", x = 0, y = 0;
    g["@apply"] && (g = po(Mt(lp(g["@apply"]), n), { ...g, "@apply": void 0 }, n)), Object.keys(g).forEach((b) => {
      const _ = Mt(g[b], n);
      if (Ea(b, _)) {
        if (_ !== "" && b.length > 1) {
          const m = ho(b);
          y += 1, x = Math.max(x, Ap(m)), v = (v && v + ";") + l(m, _, p);
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
              r: ai(q(w.map((k) => k.r), ""), b),
              p: w.reduce((k, S) => k + S.p, 0)
            });
          } else
            b[1] == "i" ? (Array.isArray(_) ? _ : [_]).forEach((m) => m && c.push({ p: 0, r: `${b} ${m};` })) : (b[2] == "c" && (b = Pr(n.theme("screens", V(b, 8).trim()))), a([...f, b], d, h | Ha(b) | La(b), _, p));
        else
          a(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (m, w, k) => b.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (S, M, z) => (ne(M, "&") ? M.replace(/&/g, w) : (w && w + " ") + M) + z) + k) : b, h, _, p);
    }), y && c.push({
      r: f.reduceRight(ai, ai(v, d)),
      p: h * (1 << 8) + ((Math.max(0, 15 - y) & 15) << 4 | (x || 15) & 15)
    });
  }, u = Tp(r, e);
  return (f, d, h, g = 0) => (g <<= 28, c = [], a([], d ? "." + ka(d) : "", h ? h.v.reduceRight(u, g) : g, f, h && h.i), c);
}, Ip = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const c = Qh(i, l);
      try {
        t.insert(s, c), i.splice(c, 0, l);
      } catch (a) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: a }, r);
      }
    }
  };
}, ci = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, Pp = (t) => (typeof t == "string" ? { t: mp, a: js, i: vp }[t[1]] : t) || js, Rp = { _: { value: "", writable: !0 } }, Op = (t = {}) => {
  const e = Sp(t.theme), n = Pp(t.mode), r = ci(t.hash, !1, !1, ii), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], c = {
    tw: (...k) => m(k),
    theme: (k, S, M) => {
      var z;
      const K = (z = e(k, S, M)) != null ? z : n.unknown(k, S == null || Array.isArray(S) ? S : S.split("."), M != null, c);
      return o.n && K && ne("rg", (typeof K)[5]) ? `calc(${K} * -1)` : K;
    },
    tag: (k) => r ? r(k) : k,
    css: (k) => {
      s++;
      const S = l.length;
      try {
        (typeof k == "string" ? Di([k]) : k).forEach(_);
        const M = Object.create(null, Rp);
        for (let z = S; z < l.length; z++) {
          const K = l[z];
          if (K)
            switch (typeof K) {
              case "object":
                po(M, K, c);
                break;
              case "string":
                M._ += (M._ && " ") + K;
            }
        }
        return M;
      } finally {
        l.length = S, s--;
      }
    }
  }, a = Cp({ ...fp, ...t.plugins }, c), u = (k) => {
    const S = o;
    o = k;
    try {
      return Mt(a(k), c);
    } finally {
      o = S;
    }
  }, f = { ...hp, ...t.variants }, d = Ep(t.darkMode || "media", f, c), h = xp(ci(t.prefix, _p, ot), f, c), g = t.sheet || (typeof window > "u" ? gp() : Oa(t)), { init: p = (k) => k() } = g, v = Ip(g, n, p, c);
  let x;
  p((k = /* @__PURE__ */ new Map()) => x = k);
  const y = /* @__PURE__ */ new WeakMap(), b = (k, S) => k == "_" ? void 0 : typeof S == "function" ? JSON.stringify(Mt(S, c), b) : S, _ = (k) => {
    !s && o.v.length && (k = { ...k, v: [...o.v, ...k.v], $: "" }), k.$ || (k.$ = Os(k, y.get(k.d)));
    let S = s ? null : x.get(k.$);
    if (S == null) {
      let M = u(k);
      if (k.$ || (k.$ = ii(JSON.stringify(M, b)), y.set(k.d, k.$), k.$ = Os(k, k.$)), M && typeof M == "object")
        if (k.v = k.v.map(Ua), i && (k.i = i), M = d(M, k), s)
          l.push(M);
        else {
          const z = typeof k.d == "function" ? typeof M._ == "string" ? 1 : 3 : 2;
          S = r || typeof k.d == "function" ? (r || ii)(z + k.$) : k.$, h(M, S, k, z).forEach(v), M._ && (S += " " + M._);
        }
      else
        typeof M == "string" ? S = M : (S = k.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: S }, c)), s && typeof k.d != "function" && l.push(S);
      s || (x.set(k.$, S), Ca(x, 3e4));
    }
    return S;
  }, m = (k) => q(Di(k).map(_).filter(Boolean), " "), w = ci(t.preflight, Yh, !1);
  if (w) {
    const k = dp(e), S = h(typeof w == "function" ? Mt(w(k, c), c) || k : { ...k, ...w });
    p((M = (S.forEach(v), !0)) => M);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, c),
    process: m
  };
}, Fa = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = Op(o));
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
}, { tw: ze, setup: Dp } = /* @__PURE__ */ Fa();
function Mp(t) {
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
      e = P("div"), n = P("div"), s && s.c(), Ti(n, "display", "none"), C(n, "class", r = ze` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), C(e, "class", "popup-element-wrapper"), Ti(e, "position", "absolute");
    },
    m(l, c) {
      O(l, e, c), A(e, n), s && s.m(n, null), t[14](n), t[15](e), i = !0;
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
      l[0]}`)) && C(n, "class", r);
    },
    i(l) {
      i || (T(s, l), i = !0);
    },
    o(l) {
      I(s, l), i = !1;
    },
    d(l) {
      l && R(e), s && s.d(l), t[14](null), t[15](null);
    }
  };
}
function Np(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { sizeToAnchor: s = !1 } = e, { anchorElement: l = null } = e, { position: c = null } = e, { popupClass: a = "" } = e, { preferedVerticalAlignment: u = "top" } = e, { preferedHorizontalAlignment: f = "left" } = e, { positionOffset: d = { x: 0, y: 0 } } = e, h = xe("PopupContainerService", new br(document.body)), g, p, v;
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
    fe[w ? "unshift" : "push"](() => {
      g = w, n(1, g);
    });
  }
  function m(w) {
    fe[w ? "unshift" : "push"](() => {
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
class za extends ue {
  constructor(e) {
    super(), ce(this, e, Np, Mp, ae, {
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
function Up(t) {
  Lt(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Ls(t) {
  let e;
  return {
    c() {
      e = P("div"), C(e, "class", se(ze`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
    },
    m(n, r) {
      O(n, e, r);
    },
    p: X,
    d(n) {
      n && R(e);
    }
  };
}
function Hp(t) {
  let e, n, r, i;
  function o(l) {
    t[7](l);
  }
  let s = { tw: ze };
  return (
    /*isSelected*/
    t[0] !== void 0 && (s.checked = /*isSelected*/
    t[0]), n = new zn({ props: s }), fe.push(() => tn(n, "checked", o)), {
      c() {
        e = P("div"), B(n.$$.fragment), C(e, "class", se(ze`p-1`) + " svelte-oysah1");
      },
      m(l, c) {
        O(l, e, c), L(n, e, null), i = !0;
      },
      p(l, c) {
        const a = {};
        !r && c & /*isSelected*/
        1 && (r = !0, a.checked = /*isSelected*/
        l[0], en(() => r = !1)), n.$set(a);
      },
      i(l) {
        i || (T(n.$$.fragment, l), i = !0);
      },
      o(l) {
        I(n.$$.fragment, l), i = !1;
      },
      d(l) {
        l && R(e), F(n);
      }
    }
  );
}
function jp(t) {
  let e, n, r, i, o, s, l, c, a = (
    /*isSelected*/
    t[0] && !/*multiple*/
    t[2] && Ls()
  ), u = (
    /*multiple*/
    t[2] && Hp(t)
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
      e = P("div"), a && a.c(), n = N(), u && u.c(), r = N(), i = P("span"), d && d.c(), C(e, "class", o = se(ze`flex hover:(${Zn}) items-center ${/*multiple*/
      t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      t[0] && !/*multiple*/
      t[2] ? Zn : ""}`) + " svelte-oysah1");
    },
    m(h, g) {
      O(h, e, g), a && a.m(e, null), A(e, n), u && u.m(e, null), A(e, r), A(e, i), d && d.m(i, null), t[8](i), s = !0, l || (c = ie(
        e,
        "click",
        /*onClickOption*/
        t[3]
      ), l = !0);
    },
    p(h, [g]) {
      /*isSelected*/
      h[0] && !/*multiple*/
      h[2] ? a ? a.p(h, g) : (a = Ls(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*multiple*/
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
      1 && o !== (o = se(ze`flex hover:(${Zn}) items-center ${/*multiple*/
      h[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      h[0] && !/*multiple*/
      h[2] ? Zn : ""}`) + " svelte-oysah1")) && C(e, "class", o);
    },
    i(h) {
      s || (T(u), T(d, h), s = !0);
    },
    o(h) {
      I(u), I(d, h), s = !1;
    },
    d(h) {
      h && R(e), a && a.d(), u && u.d(), d && d.d(h), t[8](null), l = !1, c();
    }
  };
}
let Zn = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Lp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, c = null, a, u;
  const f = Oe("audako:select:multiple"), d = Oe("audako:select:close"), h = Oe("audako:select:value"), g = Oe("audako:select:value:changed"), p = Oe("audako:select:displayValue");
  _a(() => {
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
    fe[_ ? "unshift" : "push"](() => {
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
class Ba extends ue {
  constructor(e) {
    super(), ce(this, e, Lp, jp, ae, { value: 4 }, Up);
  }
}
function Fs(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const Fp = (t) => ({}), zs = (t) => ({});
function zp(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = j(e), r = N();
    },
    m(i, o) {
      O(i, n, o), O(i, r, o);
    },
    p(i, o) {
      o & /*options*/
      16 && e !== (e = /*option*/
      i[26].label + "") && _e(n, e);
    },
    d(i) {
      i && R(n), i && R(r);
    }
  };
}
function Bs(t) {
  let e, n;
  return e = new Ba({
    props: {
      value: (
        /*option*/
        t[26].value
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
      i & /*options*/
      16 && (o.value = /*option*/
      r[26].value), i & /*$$scope, options*/
      131088 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Bp(t) {
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
    l[a] = Bs(Fs(t, s, a));
  const c = (a) => I(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      o && o.c(), e = N();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = Ir();
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
          const d = Fs(a, s, f);
          l[f] ? (l[f].p(d, u), T(l[f], 1)) : (l[f] = Bs(d), l[f].c(), T(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (de(), f = s.length; f < l.length; f += 1)
          c(f);
        he();
      }
    },
    i(a) {
      if (!r) {
        T(o, a);
        for (let u = 0; u < s.length; u += 1)
          T(l[u]);
        r = !0;
      }
    },
    o(a) {
      I(o, a), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        I(l[u]);
      r = !1;
    },
    d(a) {
      o && o.d(a), a && R(e), Ct(l, a), a && R(n);
    }
  };
}
function Wp(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g;
  const p = (
    /*#slots*/
    t[13].prefix
  ), v = He(
    p,
    t,
    /*$$scope*/
    t[17],
    zs
  );
  let x = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [Bp] },
    $$scope: { ctx: t }
  };
  return f = new za({ props: x }), t[16](f), {
    c() {
      e = P("div"), v && v.c(), n = N(), r = P("input"), o = N(), s = P("div"), l = j("arrow_drop_down"), u = N(), B(f.$$.fragment), r.disabled = /*disabled*/
      t[6], C(
        r,
        "placeholder",
        /*placeholder*/
        t[0]
      ), r.readOnly = !0, C(r, "class", i = /*tw*/
      t[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      t[1]}`), C(s, "class", c = /*tw*/
      t[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      t[3]} select-none`), C(e, "class", a = /*tw*/
      t[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      t[2]}`);
    },
    m(y, b) {
      O(y, e, b), v && v.m(e, null), A(e, n), A(e, r), mr(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), A(e, o), A(e, s), A(s, l), O(y, u, b), L(f, y, b), d = !0, h || (g = [
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
          Fp
        ) : Fe(
          /*$$scope*/
          y[17]
        ),
        zs
      ), (!d || b & /*disabled*/
      64) && (r.disabled = /*disabled*/
      y[6]), (!d || b & /*placeholder*/
      1) && C(
        r,
        "placeholder",
        /*placeholder*/
        y[0]
      ), (!d || b & /*tw, textfield$class*/
      34 && i !== (i = /*tw*/
      y[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      y[1]}`)) && C(r, "class", i), b & /*displayedValue*/
      128 && r.value !== /*displayedValue*/
      y[7] && mr(
        r,
        /*displayedValue*/
        y[7]
      ), (!d || b & /*tw, suffixIcon$class*/
      40 && c !== (c = /*tw*/
      y[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      y[3]} select-none`)) && C(s, "class", c), (!d || b & /*tw, container$class*/
      36 && a !== (a = /*tw*/
      y[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      y[2]}`)) && C(e, "class", a);
      const _ = {};
      b & /*textfield*/
      256 && (_.anchorElement = /*textfield*/
      y[8]), b & /*$$scope, options*/
      131088 && (_.$$scope = { dirty: b, ctx: y }), f.$set(_);
    },
    i(y) {
      d || (T(v, y), T(f.$$.fragment, y), d = !0);
    },
    o(y) {
      I(v, y), I(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && R(e), v && v.d(y), t[15](null), y && R(u), t[16](null), F(f, y), h = !1, ut(g);
    }
  };
}
function Vp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: c = "" } = e, { container$class: a = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = ze } = e, { disabled: h = !1 } = e, g = "", p, v, x = Ve(), y = _r(o);
  const b = y.subscribe((D) => {
    n(11, o = D);
  });
  let _ = new $e();
  const m = _.subscribe((D) => {
    x("valueChanged", D);
  });
  let w = _r(s ? [] : ""), k = w.subscribe((D) => {
    M(D);
  });
  function S(D) {
    D && (D.preventDefault(), D.stopPropagation()), !h && (v == null || v.openPopup());
  }
  function M(D) {
    if (D == null || D.length === 0) {
      n(7, g = null);
      return;
    }
    Array.isArray(D) ? n(7, g = D.join(", ")) : n(7, g = D);
  }
  mt("audako:select:multiple", s), mt("audako:select:value", y), mt("audako:select:value:changed", _), mt("audako:select:displayValue", w), mt("audako:select:close", () => v.closePopup()), Et(() => {
    b(), m.unsubscribe(), k();
  });
  function z() {
    g = this.value, n(7, g);
  }
  function K(D) {
    fe[D ? "unshift" : "push"](() => {
      p = D, n(8, p);
    });
  }
  function te(D) {
    fe[D ? "unshift" : "push"](() => {
      v = D, n(9, v);
    });
  }
  return t.$$set = (D) => {
    "value" in D && n(11, o = D.value), "multiple" in D && n(12, s = D.multiple), "placeholder" in D && n(0, l = D.placeholder), "textfield$class" in D && n(1, c = D.textfield$class), "container$class" in D && n(2, a = D.container$class), "suffixIcon$class" in D && n(3, u = D.suffixIcon$class), "options" in D && n(4, f = D.options), "tw" in D && n(5, d = D.tw), "disabled" in D && n(6, h = D.disabled), "$$scope" in D && n(17, i = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    32 && mt("tw", d);
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
    K,
    te,
    i
  ];
}
class Wa extends ue {
  constructor(e) {
    super(), ce(this, e, Vp, Wp, ae, {
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
function Ws(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function qp(t) {
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
      r[18] + "") && _e(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Vs(t) {
  let e, n;
  return e = new Ba({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [qp] },
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Gp(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Vs(Ws(t, r, s));
  const o = (s) => I(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Ir();
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
          const a = Ws(s, r, c);
          i[c] ? (i[c].p(a, l), T(i[c], 1)) : (i[c] = Vs(a), i[c].c(), T(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (de(), c = r.length; c < i.length; c += 1)
          o(c);
        he();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          T(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        I(i[l]);
      n = !1;
    },
    d(s) {
      Ct(i, s), s && R(e);
    }
  };
}
function Jp(t) {
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
function Xp(t) {
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
function Kp(t) {
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
function Yp(t) {
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
function Qp(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, h = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), g, p, v, x, y, b, _, m, w, k, S, M, z, K;
  function te(U) {
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
    $$slots: { default: [Gp] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (D.value = /*pageSize*/
    t[0]), s = new Wa({ props: D }), fe.push(() => tn(s, "value", te)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), _ = new bt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Jp] },
        $$scope: { ctx: t }
      }
    }), _.$on(
      "click",
      /*click_handler*/
      t[12]
    ), w = new bt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Xp] },
        $$scope: { ctx: t }
      }
    }), w.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), S = new bt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Kp] },
        $$scope: { ctx: t }
      }
    }), S.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), z = new bt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Yp] },
        $$scope: { ctx: t }
      }
    }), z.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = P("div"), n = P("div"), r = j("Items per page:"), i = N(), o = P("div"), B(s.$$.fragment), c = N(), a = P("div"), f = j(u), d = j(" - "), g = j(h), p = N(), v = P("div"), x = j("of "), y = j(
          /*totalCount*/
          t[2]
        ), b = N(), B(_.$$.fragment), m = N(), B(w.$$.fragment), k = N(), B(S.$$.fragment), M = N(), B(z.$$.fragment), C(
          n,
          "class",
          /*tw*/
          t[5]`mr-1 text-xs text-gray-600`
        ), C(
          o,
          "class",
          /*tw*/
          t[5]`w-[50px]`
        ), C(
          a,
          "class",
          /*tw*/
          t[5]`ml-4 text-xs mr-1 text-gray-600`
        ), C(
          v,
          "class",
          /*tw*/
          t[5]`text-xs mr-4 text-gray-600`
        ), C(
          e,
          "class",
          /*tw*/
          t[5]`flex w-full items-center justify-end pt-1`
        );
      },
      m(U, Q) {
        O(U, e, Q), A(e, n), A(n, r), A(e, i), A(e, o), L(s, o, null), A(e, c), A(e, a), A(a, f), A(a, d), A(a, g), A(e, p), A(e, v), A(v, x), A(v, y), A(e, b), L(_, e, null), A(e, m), L(w, e, null), A(e, k), L(S, e, null), A(e, M), L(z, e, null), K = !0;
      },
      p(U, [Q]) {
        const nt = {};
        Q & /*$$scope, pageSizeOptions*/
        2097160 && (nt.$$scope = { dirty: Q, ctx: U }), !l && Q & /*pageSize*/
        1 && (l = !0, nt.value = /*pageSize*/
        U[0], en(() => l = !1)), s.$set(nt), (!K || Q & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        U[1] * /*pageSize*/
        U[0] + 1 + "") && _e(f, u), (!K || Q & /*pageIndex, pageSize*/
        3) && h !== (h = /*pageIndex*/
        (U[1] + 1) * /*pageSize*/
        U[0] + "") && _e(g, h), (!K || Q & /*totalCount*/
        4) && _e(
          y,
          /*totalCount*/
          U[2]
        );
        const wn = {};
        Q & /*pageIndex*/
        2 && (wn.disabled = /*pageIndex*/
        U[1] === 0), Q & /*$$scope*/
        2097152 && (wn.$$scope = { dirty: Q, ctx: U }), _.$set(wn);
        const H = {};
        Q & /*pageIndex*/
        2 && (H.disabled = /*pageIndex*/
        U[1] === 0), Q & /*$$scope*/
        2097152 && (H.$$scope = { dirty: Q, ctx: U }), w.$set(H);
        const J = {};
        Q & /*pageIndex, lastPageIndex*/
        18 && (J.disabled = /*pageIndex*/
        U[1] === /*lastPageIndex*/
        U[4]), Q & /*$$scope*/
        2097152 && (J.$$scope = { dirty: Q, ctx: U }), S.$set(J);
        const ft = {};
        Q & /*pageIndex, lastPageIndex*/
        18 && (ft.disabled = /*pageIndex*/
        U[1] === /*lastPageIndex*/
        U[4]), Q & /*$$scope*/
        2097152 && (ft.$$scope = { dirty: Q, ctx: U }), z.$set(ft);
      },
      i(U) {
        K || (T(s.$$.fragment, U), T(_.$$.fragment, U), T(w.$$.fragment, U), T(S.$$.fragment, U), T(z.$$.fragment, U), K = !0);
      },
      o(U) {
        I(s.$$.fragment, U), I(_.$$.fragment, U), I(w.$$.fragment, U), I(S.$$.fragment, U), I(z.$$.fragment, U), K = !1;
      },
      d(U) {
        U && R(e), F(s), F(_), F(w), F(S), F(z);
      }
    }
  );
}
function qs(t, e) {
  return console.log(), Math.max(Math.floor(e / t) - 1, 0);
}
function Zp(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Oe("tw"), l, { pageSizeOptions: c = [10, 20, 50, 100] } = e, a = Ve();
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
    console.log("changePageSize", m), n(0, i = m), n(4, l = qs(i, o)), n(1, r = Math.min(r, l)), g();
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
    5 && n(4, l = qs(i, o)), t.$$.dirty & /*pageSize*/
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
class eg extends ue {
  constructor(e) {
    super(), ce(this, e, Zp, Qp, ae, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function tg(t) {
  Lt(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Gs(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function Js(t) {
  let e, n;
  return e = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0 cursor-default`
      ),
      id: "Name",
      $$slots: { default: [ng] },
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function ng(t) {
  let e, n;
  return e = new zn({
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function rg(t) {
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
function ig(t) {
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
function og(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && Js(t)
  );
  return n = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [rg] },
      $$scope: { ctx: t }
    }
  }), i = new Pi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [ig] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = N(), B(n.$$.fragment), r = N(), B(i.$$.fragment);
    },
    m(l, c) {
      s && s.m(l, c), O(l, e, c), L(n, l, c), O(l, r, c), L(i, l, c), o = !0;
    },
    p(l, c) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, c), c[0] & /*selectMultiple*/
      1 && T(s, 1)) : (s = Js(l), s.c(), T(s, 1), s.m(e.parentNode, e)) : s && (de(), I(s, 1, 1, () => {
        s = null;
      }), he());
      const a = {};
      c[1] & /*$$scope*/
      64 && (a.$$scope = { dirty: c, ctx: l }), n.$set(a);
      const u = {};
      c[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: c, ctx: l }), i.$set(u);
    },
    i(l) {
      o || (T(s), T(n.$$.fragment, l), T(i.$$.fragment, l), o = !0);
    },
    o(l) {
      I(s), I(n.$$.fragment, l), I(i.$$.fragment, l), o = !1;
    },
    d(l) {
      s && s.d(l), l && R(e), F(n, l), l && R(r), F(i, l);
    }
  };
}
function sg(t) {
  let e;
  return {
    c() {
      e = P("div"), C(e, "class", se(
        /*tw*/
        t[9]`w-full h-[3px]`
      ) + " svelte-15xwzh7");
    },
    m(n, r) {
      O(n, e, r);
    },
    p: X,
    d(n) {
      n && R(e);
    }
  };
}
function lg(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = P("div"), C(n, "class", se(
        /*tw*/
        t[9]`progress-bar-value-animation w-full h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), C(e, "class", se(
        /*tw*/
        t[9]`w-full h-[3px] overflow-hidden bg-blue-200`
      ) + " svelte-15xwzh7");
    },
    m(r, i) {
      O(r, e, i), A(e, n);
    },
    p: X,
    d(r) {
      r && R(e);
    }
  };
}
function Xs(t) {
  let e, n;
  return e = new Ri({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0`
      ),
      $$slots: { default: [ag] },
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function ag(t) {
  let e, n;
  return e = new zn({
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function cg(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = P("div"), r = j(n), C(e, "class", se(
        /*tw*/
        t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(o, s) {
      O(o, e, s), A(e, r);
    },
    p(o, s) {
      var l;
      s[0] & /*entities*/
      8 && n !== (n = /*entity*/
      ((l = o[33].Name) == null ? void 0 : l.Value) + "") && _e(r, n);
    },
    d(o) {
      o && R(e);
    }
  };
}
function ug(t) {
  return { c: X, m: X, p: X, d: X };
}
function fg(t) {
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
      r[36] + "") && _e(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function dg(t) {
  return { c: X, m: X, p: X, d: X };
}
function hg(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: dg,
    then: fg,
    catch: ug,
    value: 36
  };
  return vr(n = /*nameService*/
  t[8].resolveName(
    G.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = P("span"), r.block.c(), C(e, "class", se(
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
      )) && vr(n, r) || ba(r, t, o);
    },
    d(i) {
      i && R(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function pg(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && Xs(t)
  );
  return n = new Ri({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [cg] },
      $$scope: { ctx: t }
    }
  }), i = new Ri({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [hg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = N(), B(n.$$.fragment), r = N(), B(i.$$.fragment), o = N();
    },
    m(c, a) {
      l && l.m(c, a), O(c, e, a), L(n, c, a), O(c, r, a), L(i, c, a), O(c, o, a), s = !0;
    },
    p(c, a) {
      /*selectMultiple*/
      c[0] ? l ? (l.p(c, a), a[0] & /*selectMultiple*/
      1 && T(l, 1)) : (l = Xs(c), l.c(), T(l, 1), l.m(e.parentNode, e)) : l && (de(), I(l, 1, 1, () => {
        l = null;
      }), he());
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
      s || (T(l), T(n.$$.fragment, c), T(i.$$.fragment, c), s = !0);
    },
    o(c) {
      I(l), I(n.$$.fragment, c), I(i.$$.fragment, c), s = !1;
    },
    d(c) {
      l && l.d(c), c && R(e), F(n, c), c && R(r), F(i, c), c && R(o);
    }
  };
}
function Ks(t) {
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
  return e = new Uh({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [pg] },
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
      n || (T(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function gg(t) {
  let e, n, r, i, o;
  e = new Ih({
    props: {
      $$slots: { default: [og] },
      $$scope: { ctx: t }
    }
  });
  function s(d, h) {
    return (
      /*loading*/
      d[7] ? lg : sg
    );
  }
  let l = s(t), c = l(t), a = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < a.length; d += 1)
    u[d] = Ks(Gs(t, a, d));
  const f = (d) => I(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      B(e.$$.fragment), n = N(), c.c(), r = N();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = Ir();
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
          const v = Gs(d, a, p);
          u[p] ? (u[p].p(v, h), T(u[p], 1)) : (u[p] = Ks(v), u[p].c(), T(u[p], 1), u[p].m(i.parentNode, i));
        }
        for (de(), p = a.length; p < u.length; p += 1)
          f(p);
        he();
      }
    },
    i(d) {
      if (!o) {
        T(e.$$.fragment, d);
        for (let h = 0; h < a.length; h += 1)
          T(u[h]);
        o = !0;
      }
    },
    o(d) {
      I(e.$$.fragment, d), u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        I(u[h]);
      o = !1;
    },
    d(d) {
      F(e, d), d && R(n), c.d(d), d && R(r), Ct(u, d), d && R(i);
    }
  };
}
function mg(t) {
  let e, n;
  return e = new eg({
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function vg(t) {
  let e, n, r;
  return n = new $h({
    props: {
      $$slots: {
        pagination: [mg],
        default: [gg]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), B(n.$$.fragment), C(e, "class", se(
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
      r || (T(n.$$.fragment, i), r = !0);
    },
    o(i) {
      I(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && R(e), F(n);
    }
  };
}
function _g(t, e, n) {
  let r = xe(Ut), i = xe(On), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, c = Oe("tw"), a = [], u = new $e(), f = [], d = {}, h = "unchecked", g, p, v, x = !1, y = 0, b = 10, _ = 0, m = dn(), w = Dt, k = !1, S = !0, M = new $e();
  Ot.pipe(at(M)).subscribe((H) => {
    f = H.selectedEntities, Q(), D();
  }), ia([w.asObservable(), m.asObservable()]).pipe(at(M)).subscribe(([H, J]) => {
    var ft;
    v = J.selectedGroup, p = (ft = J.selectedGroup) == null ? void 0 : ft.Id, g = J.filter, x = H.queryWithSubGroups, k = !0, n(1, y = 0), u.next();
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
    const J = {
      limit: b,
      skip: y * b
    };
    return jt(r.queryConfiguration(o, H, J));
  }
  function K(H) {
    s ? (f.find((J) => J.Id === H.Id) ? (f = f.filter((J) => J.Id !== H.Id), n(4, d[H.Id] = !1, d)) : (f.push(H), n(4, d[H.Id] = !0, d)), D()) : f = [H], Ot.update((J) => ({ ...J, selectedEntities: f }));
  }
  function te(H) {
    H ? f = [
      ...f,
      ...a.filter((J) => !d[J.Id])
    ] : f = f.filter((J) => !a.find((ft) => ft.Id === J.Id)), Q(), D(), Ot.update((J) => ({ ...J, selectedEntities: f }));
  }
  function D() {
    let H = Object.keys(d).filter((J) => d[J]);
    H.length === 0 ? n(5, h = "unchecked") : H.length === a.length ? n(5, h = "checked") : n(5, h = "indeterminate");
  }
  function U(H) {
    const J = H.detail;
    J.pageSize != b ? (n(1, y = 0), n(2, b = J.pageSize)) : n(1, y = J.pageIndex);
  }
  function Q() {
    n(4, d = {}), a.forEach((H) => {
      n(4, d[H.Id] = f.find((J) => J.Id === H.Id) != null, d);
    });
  }
  Et(() => {
    M.next(), M.complete();
  }), u.pipe(at(M), In(() => k && !!p), Nf(250), Df(() => n(7, S = !0)), aa(() => z())).subscribe((H) => {
    n(7, S = !1), n(3, a = H.data), Q(), D(), o === G.Group && a.unshift(v), n(6, _ = H.total);
  });
  const nt = (H) => {
    var J;
    return te((J = H.detail) == null ? void 0 : J.checked);
  }, wn = (H) => K(H);
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
    K,
    te,
    U,
    o,
    l,
    nt,
    wn
  ];
}
class bg extends ue {
  constructor(e) {
    super(), ce(
      this,
      e,
      _g,
      vg,
      ae,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      tg,
      [-1, -1]
    );
  }
}
function Ys(t) {
  let e, n, r, i;
  n = new bt({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && Qs(t)
  );
  return {
    c() {
      e = P("div"), B(n.$$.fragment), r = N(), o && o.c(), C(
        e,
        "class",
        /*tw*/
        t[5]`mx-2 relative`
      );
    },
    m(s, l) {
      O(s, e, l), L(n, e, null), A(e, r), o && o.m(e, null), i = !0;
    },
    p(s, l) {
      /*selectedEntities*/
      s[4].length > 0 ? o ? o.p(s, l) : (o = Qs(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    i(s) {
      i || (T(n.$$.fragment, s), i = !0);
    },
    o(s) {
      I(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && R(e), F(n), o && o.d();
    }
  };
}
function Qs(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = P("div"), r = j(n), C(
        e,
        "class",
        /*tw*/
        t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`
      );
    },
    m(i, o) {
      O(i, e, o), A(e, r);
    },
    p(i, o) {
      o & /*selectedEntities*/
      16 && n !== (n = /*selectedEntities*/
      i[4].length + "") && _e(r, n);
    },
    d(i) {
      i && R(e);
    }
  };
}
function yg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g, p, v = (
    /*selectMultiple*/
    t[0] && Ys(t)
  );
  function x(b) {
    t[11](b);
  }
  let y = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (y.checked = /*withSubGroups*/
    t[1]), f = new zn({ props: y }), fe.push(() => tn(f, "checked", x)), {
      c() {
        e = P("div"), n = P("div"), r = P("div"), i = P("span"), o = j("search"), s = N(), l = P("input"), c = N(), v && v.c(), a = N(), u = P("div"), B(f.$$.fragment), C(
          i,
          "class",
          /*tw*/
          t[5]`material-symbols-rounded mr-2`
        ), C(l, "placeholder", "Search"), C(
          l,
          "class",
          /*tw*/
          t[5]`w-full outline-none`
        ), C(
          r,
          "class",
          /*tw*/
          t[5]`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`
        ), C(
          n,
          "class",
          /*tw*/
          t[5]`flex items-center`
        ), C(
          u,
          "class",
          /*tw*/
          t[5]`flex justify-end mt-2`
        ), C(
          e,
          "class",
          /*tw*/
          t[5]`flex flex-col`
        );
      },
      m(b, _) {
        O(b, e, _), A(e, n), A(n, r), A(r, i), A(i, o), A(r, s), A(r, l), t[8](l), mr(
          l,
          /*filter*/
          t[2]
        ), A(n, c), v && v.m(n, null), A(e, a), A(e, u), L(f, u, null), h = !0, g || (p = ie(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), g = !0);
      },
      p(b, [_]) {
        _ & /*filter*/
        4 && l.value !== /*filter*/
        b[2] && mr(
          l,
          /*filter*/
          b[2]
        ), /*selectMultiple*/
        b[0] ? v ? (v.p(b, _), _ & /*selectMultiple*/
        1 && T(v, 1)) : (v = Ys(b), v.c(), T(v, 1), v.m(n, null)) : v && (de(), I(v, 1, 1, () => {
          v = null;
        }), he());
        const m = {};
        !d && _ & /*withSubGroups*/
        2 && (d = !0, m.checked = /*withSubGroups*/
        b[1], en(() => d = !1)), f.$set(m);
      },
      i(b) {
        h || (T(v), T(f.$$.fragment, b), h = !0);
      },
      o(b) {
        I(v), I(f.$$.fragment, b), h = !1;
      },
      d(b) {
        b && R(e), t[8](null), v && v.d(), F(f), g = !1, p();
      }
    }
  );
}
function wg(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = Oe("tw"), s = Ve(), l = dn(), c = !1, a = l.value.filter, u, f = new $e(), d = new $e(), h = [];
  Dt.pipe(at(f)).subscribe((m) => {
    n(1, c = m.queryWithSubGroups);
  }), d.pipe(at(f), kf(200)).subscribe((m) => {
    l.update((w) => ({ ...w, filter: m }));
  }), Ot.pipe(at(f)).subscribe((m) => {
    n(4, h = m.selectedEntities);
  });
  function g(m) {
    console.log("onSubGroupsToggled", m), m != Dt.value.queryWithSubGroups && Dt.update((w) => ({
      ...w,
      queryWithSubGroups: m
    }));
  }
  function p() {
    s("acceptSelection");
  }
  _a(() => {
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
  Et(() => {
    f.next(), f.complete();
  });
  function x(m) {
    fe[m ? "unshift" : "push"](() => {
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
class Sg extends ue {
  constructor(e) {
    super(), ce(this, e, wg, yg, ae, { entityType: 7, selectMultiple: 0 });
  }
}
function Zs(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function el(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function tl(t) {
  let e, n;
  return e = new bt({
    props: {
      size: "small",
      $$slots: { default: [Cg] },
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Cg(t) {
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
function nl(t) {
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
      e = P("div"), r = j(n), o = j(i), s = N(), C(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      O(f, e, d), A(e, r), A(e, o), A(e, s), c || (a = ie(e, "click", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && _e(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && _e(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && C(e, "class", l);
    },
    d(f) {
      f && R(e), c = !1, a();
    }
  };
}
function rl(t) {
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
  return n = new bt({
    props: {
      $$slots: { default: [Eg] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = P("div"), B(n.$$.fragment);
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
      r || (T(n.$$.fragment, o), r = !0);
    },
    o(o) {
      I(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(e), F(n);
    }
  };
}
function Eg(t) {
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
function il(t) {
  var g;
  let e, n, r = (
    /*tenant*/
    ((g = t[15]) == null ? void 0 : g.Name) + ""
  ), i, o, s, l, c, a, u, f, d = (
    /*tenant*/
    t[15].Root && rl(t)
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
      e = P("div"), n = P("div"), i = j(r), s = N(), d && d.c(), l = N(), C(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), C(e, "class", c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(p, v) {
      O(p, e, v), A(e, n), A(n, i), A(e, s), d && d.m(e, null), A(e, l), a = !0, u || (f = ie(e, "click", h), u = !0);
    },
    p(p, v) {
      var x;
      t = p, (!a || v & /*tenants*/
      8) && r !== (r = /*tenant*/
      ((x = t[15]) == null ? void 0 : x.Name) + "") && _e(i, r), (!a || v & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && C(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, v), v & /*tenants*/
      8 && T(d, 1)) : (d = rl(t), d.c(), T(d, 1), d.m(e, l)) : d && (de(), I(d, 1, 1, () => {
        d = null;
      }), he()), (!a || v & /*tw*/
      2 && c !== (c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && C(e, "class", c);
    },
    i(p) {
      a || (T(d), a = !0);
    },
    o(p) {
      I(d), a = !1;
    },
    d(p) {
      p && R(e), d && d.d(), u = !1, f();
    }
  };
}
function kg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g, p, v = (
    /*allowBack*/
    t[0] && tl(t)
  ), x = (
    /*tenantPath*/
    t[2]
  ), y = [];
  for (let w = 0; w < x.length; w += 1)
    y[w] = nl(el(t, x, w));
  let b = (
    /*tenants*/
    t[3]
  ), _ = [];
  for (let w = 0; w < b.length; w += 1)
    _[w] = il(Zs(t, b, w));
  const m = (w) => I(_[w], 1, 1, () => {
    _[w] = null;
  });
  return {
    c() {
      e = P("div"), n = P("div"), v && v.c(), r = N(), i = P("div"), o = j("Mandant auswählen"), c = N(), a = P("div");
      for (let w = 0; w < y.length; w += 1)
        y[w].c();
      f = N(), d = P("div");
      for (let w = 0; w < _.length; w += 1)
        _[w].c();
      C(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), C(n, "class", l = /*tw*/
      t[1]`flex items-center`), C(a, "class", u = /*tw*/
      t[1]`flex mb-1`), Ti(d, "grid-auto-rows", "60px"), C(d, "class", h = /*tw*/
      t[1]`grid grid-cols-2 gap-2 h-full overflow-auto`), C(e, "class", g = /*tw*/
      t[1]`w-full overflow-hidden`);
    },
    m(w, k) {
      O(w, e, k), A(e, n), v && v.m(n, null), A(n, r), A(n, i), A(i, o), A(e, c), A(e, a);
      for (let S = 0; S < y.length; S += 1)
        y[S] && y[S].m(a, null);
      A(e, f), A(e, d);
      for (let S = 0; S < _.length; S += 1)
        _[S] && _[S].m(d, null);
      p = !0;
    },
    p(w, [k]) {
      if (/*allowBack*/
      w[0] ? v ? (v.p(w, k), k & /*allowBack*/
      1 && T(v, 1)) : (v = tl(w), v.c(), T(v, 1), v.m(n, r)) : v && (de(), I(v, 1, 1, () => {
        v = null;
      }), he()), (!p || k & /*tw*/
      2 && s !== (s = /*tw*/
      w[1]`font-bold text-gray-600 text-lg`)) && C(i, "class", s), (!p || k & /*tw*/
      2 && l !== (l = /*tw*/
      w[1]`flex items-center`)) && C(n, "class", l), k & /*tw, selectTenantInPath, tenantPath*/
      70) {
        x = /*tenantPath*/
        w[2];
        let S;
        for (S = 0; S < x.length; S += 1) {
          const M = el(w, x, S);
          y[S] ? y[S].p(M, k) : (y[S] = nl(M), y[S].c(), y[S].m(a, null));
        }
        for (; S < y.length; S += 1)
          y[S].d(1);
        y.length = x.length;
      }
      if ((!p || k & /*tw*/
      2 && u !== (u = /*tw*/
      w[1]`flex mb-1`)) && C(a, "class", u), k & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        b = /*tenants*/
        w[3];
        let S;
        for (S = 0; S < b.length; S += 1) {
          const M = Zs(w, b, S);
          _[S] ? (_[S].p(M, k), T(_[S], 1)) : (_[S] = il(M), _[S].c(), T(_[S], 1), _[S].m(d, null));
        }
        for (de(), S = b.length; S < _.length; S += 1)
          m(S);
        he();
      }
      (!p || k & /*tw*/
      2 && h !== (h = /*tw*/
      w[1]`grid grid-cols-2 gap-2 h-full overflow-auto`)) && C(d, "class", h), (!p || k & /*tw*/
      2 && g !== (g = /*tw*/
      w[1]`w-full overflow-hidden`)) && C(e, "class", g);
    },
    i(w) {
      if (!p) {
        T(v);
        for (let k = 0; k < b.length; k += 1)
          T(_[k]);
        p = !0;
      }
    },
    o(w) {
      I(v), _ = _.filter(Boolean);
      for (let k = 0; k < _.length; k += 1)
        I(_[k]);
      p = !1;
    },
    d(w) {
      w && R(e), v && v.d(), Ct(y, w), Ct(_, w);
    }
  };
}
function $g(t, e, n) {
  let r = xe(Rn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const c = Ve();
  async function a() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const b = y[0];
      if (b.Root == null) {
        f(b);
        return;
      }
    }
    n(2, s = [new ac({ Id: "start", Name: "Start" })]), n(3, l = y);
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
let Va = class extends ue {
  constructor(e) {
    super(), ce(this, e, $g, kg, ae, { allowBack: 0, tw: 1 });
  }
};
function Tg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, h, g;
  return n = new Sh({
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
  ), l = new Sg({
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
  ), u = new bg({
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
      e = P("div"), B(n.$$.fragment), i = N(), o = P("div"), s = P("div"), B(l.$$.fragment), c = N(), a = P("div"), B(u.$$.fragment), C(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), C(a, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), C(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), C(o, "class", h = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(p, v) {
      O(p, e, v), L(n, e, null), O(p, i, v), O(p, o, v), A(o, s), L(l, s, null), A(s, c), A(s, a), L(u, a, null), g = !0;
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
      p[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && C(e, "class", r);
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
      p[3]`flex-1 overflow-hidden mt-3`)) && C(a, "class", f), (!g || v & /*tw*/
      8 && d !== (d = /*tw*/
      p[3]`flex flex-col h-full overflow-hidden`)) && C(s, "class", d), (!g || v & /*tw*/
      8 && h !== (h = /*tw*/
      p[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && C(o, "class", h);
    },
    i(p) {
      g || (T(n.$$.fragment, p), T(l.$$.fragment, p), T(u.$$.fragment, p), g = !0);
    },
    o(p) {
      I(n.$$.fragment, p), I(l.$$.fragment, p), I(u.$$.fragment, p), g = !1;
    },
    d(p) {
      p && R(e), F(n), p && R(i), p && R(o), F(l), F(u);
    }
  };
}
function Ag(t) {
  let e, n;
  return e = new Va({
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
      n || (T(e.$$.fragment, r), n = !0);
    },
    o(r) {
      I(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function xg(t) {
  let e, n, r, i, o;
  const s = [Ag, Tg], l = [];
  function c(a, u) {
    return (
      /*inTenantSelect*/
      a[5] ? 0 : 1
    );
  }
  return n = c(t), r = l[n] = s[n](t), {
    c() {
      e = P("div"), r.c(), C(e, "class", i = /*tw*/
      t[3]`flex w-full h-full`);
    },
    m(a, u) {
      O(a, e, u), l[n].m(e, null), o = !0;
    },
    p(a, [u]) {
      let f = n;
      n = c(a), n === f ? l[n].p(a, u) : (de(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), he(), r = l[n], r ? r.p(a, u) : (r = l[n] = s[n](a), r.c()), T(r, 1), r.m(e, null)), (!o || u & /*tw*/
      8 && i !== (i = /*tw*/
      a[3]`flex w-full h-full`)) && C(e, "class", i);
    },
    i(a) {
      o || (T(r), o = !0);
    },
    o(a) {
      I(r), o = !1;
    },
    d(a) {
      a && R(e), l[n].d();
    }
  };
}
function Ig(t, e, n) {
  let { entityType: r = G.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = ze } = e, l = xe(Ut), c = xe(Rn), a, u = !1, f = [], d = Ve(), h = Dt.subscribe((S) => {
    S.selectedTenant ? (n(5, u = !1), v(S.selectedTenant)) : n(5, u = !0);
  }), g = Ot.subscribe((S) => {
    S.selectedEntities && !i ? (p(S.selectedEntities), d("selectedEntities", S.selectedEntities[0])) : f = S.selectedEntities;
  });
  function p(S) {
    const M = dn(), z = M.value.lastSelectedEntities, K = S.filter((te) => !z.includes(te.Id)).map((te) => te.Id);
    z.unshift(...K), z.splice(5), M.update((te) => ({
      ...te,
      lastSelectedEntities: z
    }));
  }
  async function v(S) {
    try {
      n(4, a = await c.getTenantViewById(S));
    } catch (M) {
      console.error(M), n(5, u = !0);
    }
  }
  async function x(S) {
    console.log("Tenant selected", S);
    const M = await l.getEntityById(G.Group, S.Root);
    Dt.update((z) => ({ ...z, selectedTenant: S.Id })), dn().update((z) => ({ ...z, selectedGroup: M }));
  }
  function y() {
    n(5, u = !0);
  }
  function b() {
    p(f), d("selectedEntities", f);
  }
  Et(() => {
    h.unsubscribe(), g.unsubscribe();
  });
  const _ = () => n(5, u = !1), m = (S) => x(S.detail.tenant), w = () => y(), k = () => b();
  return t.$$set = (S) => {
    "entityType" in S && n(0, r = S.entityType), "selectMultiple" in S && n(1, i = S.selectMultiple), "additionalFilter" in S && n(2, o = S.additionalFilter), "tw" in S && n(3, s = S.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    8 && mt("tw", s);
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
let qa = class extends ue {
  constructor(e) {
    super(), ce(this, e, Ig, xg, ae, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function Pg(t) {
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
  return r = new qa({ props: a }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = P("div"), n = P("div"), B(r.$$.fragment), C(n, "class", i = /*tw*/
      t[3]`h-full w-full`), C(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      O(u, e, f), A(e, n), L(r, n, null), t[11](e), s = !0, l || (c = [
        ie(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        ie(e, "click", Rg)
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
      u[3]`h-full w-full`)) && C(n, "class", i), (!s || f & /*tw*/
      8 && o !== (o = /*tw*/
      u[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`)) && C(e, "class", o);
    },
    i(u) {
      s || (T(r.$$.fragment, u), s = !0);
    },
    o(u) {
      I(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && R(e), t[9](null), F(r), t[11](null), l = !1, ut(c);
    }
  };
}
const Rg = (t) => t.stopPropagation();
function Og(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = G.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = ze } = e, c = xe("PopupService", new br(document.body)), a, u, f;
  const d = Ve();
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
    fe[_ ? "unshift" : "push"](() => {
      u = _, n(5, u);
    });
  }
  const y = (_) => v(_);
  function b(_) {
    fe[_ ? "unshift" : "push"](() => {
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
class Dg extends ue {
  constructor(e) {
    super(), ce(this, e, Og, Pg, ae, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class ol {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new Dg({
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
const ar = window, vo = ar.ShadowRoot && (ar.ShadyCSS === void 0 || ar.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _o = Symbol(), sl = /* @__PURE__ */ new WeakMap();
let Ga = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== _o)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (vo && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = sl.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && sl.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Mg = (t) => new Ga(typeof t == "string" ? t : t + "", void 0, _o), Rr = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new Ga(n, t, _o);
}, Ng = (t, e) => {
  vo ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = ar.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, ll = vo ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return Mg(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ui;
const Cr = window, al = Cr.trustedTypes, Ug = al ? al.emptyScript : "", cl = Cr.reactiveElementPolyfillSupport, Ui = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Ug : null;
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
} }, Ja = (t, e) => e !== t && (e == e || t == t), fi = { attribute: !0, type: String, converter: Ui, reflect: !1, hasChanged: Ja };
let Kt = class extends HTMLElement {
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
  static createProperty(e, n = fi) {
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
    return this.elementProperties.get(e) || fi;
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
        n.unshift(ll(i));
    } else
      e !== void 0 && n.push(ll(e));
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
    return Ng(n, this.constructor.elementStyles), n;
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
  _$EO(e, n, r = fi) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : Ui).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : Ui;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || Ja)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
Kt.finalized = !0, Kt.elementProperties = /* @__PURE__ */ new Map(), Kt.elementStyles = [], Kt.shadowRootOptions = { mode: "open" }, cl == null || cl({ ReactiveElement: Kt }), ((ui = Cr.reactiveElementVersions) !== null && ui !== void 0 ? ui : Cr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var di;
const Er = window, hn = Er.trustedTypes, ul = hn ? hn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, _t = `lit$${(Math.random() + "").slice(9)}$`, Xa = "?" + _t, Hg = `<${Xa}>`, pn = document, Hn = (t = "") => pn.createComment(t), jn = (t) => t === null || typeof t != "object" && typeof t != "function", Ka = Array.isArray, jg = (t) => Ka(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", $n = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, fl = /-->/g, dl = />/g, At = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), hl = /'/g, pl = /"/g, Ya = /^(?:script|style|textarea|title)$/i, gn = Symbol.for("lit-noChange"), me = Symbol.for("lit-nothing"), gl = /* @__PURE__ */ new WeakMap(), Lg = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new Wn(e.insertBefore(Hn(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, rn = pn.createTreeWalker(pn, 129, null, !1), Fg = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = $n;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let u, f, d = -1, h = 0;
    for (; h < a.length && (s.lastIndex = h, f = s.exec(a), f !== null); )
      h = s.lastIndex, s === $n ? f[1] === "!--" ? s = fl : f[1] !== void 0 ? s = dl : f[2] !== void 0 ? (Ya.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = At) : f[3] !== void 0 && (s = At) : s === At ? f[0] === ">" ? (s = i ?? $n, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? At : f[3] === '"' ? pl : hl) : s === pl || s === hl ? s = At : s === fl || s === dl ? s = $n : (s = At, i = void 0);
    const g = s === At && t[c + 1].startsWith("/>") ? " " : "";
    o += s === $n ? a + Hg : d >= 0 ? (r.push(u), a.slice(0, d) + "$lit$" + a.slice(d) + _t + g) : a + _t + (d === -2 ? (r.push(void 0), c) : g);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ul !== void 0 ? ul.createHTML(l) : l, r];
};
class Ln {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, c = this.parts, [a, u] = Fg(e, n);
    if (this.el = Ln.createElement(a, r), rn.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = rn.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(_t)) {
              const h = u[s++];
              if (f.push(d), h !== void 0) {
                const g = i.getAttribute(h.toLowerCase() + "$lit$").split(_t), p = /([.?@])?(.*)/.exec(h);
                c.push({ type: 1, index: o, name: p[2], strings: g, ctor: p[1] === "." ? Bg : p[1] === "?" ? Vg : p[1] === "@" ? qg : Or });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (Ya.test(i.tagName)) {
          const f = i.textContent.split(_t), d = f.length - 1;
          if (d > 0) {
            i.textContent = hn ? hn.emptyScript : "";
            for (let h = 0; h < d; h++)
              i.append(f[h], Hn()), rn.nextNode(), c.push({ type: 2, index: ++o });
            i.append(f[d], Hn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Xa)
          c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(_t, f + 1)) !== -1; )
            c.push({ type: 7, index: o }), f += _t.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = pn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function mn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === gn)
    return e;
  let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const a = jn(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== a && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), a === void 0 ? c = void 0 : (c = new a(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = mn(t, c._$AS(t, e.values), c, r)), e;
}
class zg {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : pn).importNode(r, !0);
    rn.currentNode = o;
    let s = rn.nextNode(), l = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (l === a.index) {
        let u;
        a.type === 2 ? u = new Wn(s, s.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (u = new Gg(s, this, e)), this.v.push(u), a = i[++c];
      }
      l !== (a == null ? void 0 : a.index) && (s = rn.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class Wn {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = me, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = mn(this, e, n), jn(e) ? e === me || e == null || e === "" ? (this._$AH !== me && this._$AR(), this._$AH = me) : e !== this._$AH && e !== gn && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : jg(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== me && jn(this._$AH) ? this._$AA.nextSibling.data = e : this.k(pn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Ln.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new zg(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = gl.get(e.strings);
    return n === void 0 && gl.set(e.strings, n = new Ln(e)), n;
  }
  O(e) {
    Ka(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new Wn(this.S(Hn()), this.S(Hn()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
class Or {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = me, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = me;
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
      e = mn(this, e, n, 0), s = !jn(e) || e !== this._$AH && e !== gn, s && (this._$AH = e);
    else {
      const l = e;
      let c, a;
      for (e = o[0], c = 0; c < o.length - 1; c++)
        a = mn(this, l[r + c], n, c), a === gn && (a = this._$AH[c]), s || (s = !jn(a) || a !== this._$AH[c]), a === me ? e = me : e !== me && (e += (a ?? "") + o[c + 1]), this._$AH[c] = a;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === me ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Bg extends Or {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === me ? void 0 : e;
  }
}
const Wg = hn ? hn.emptyScript : "";
class Vg extends Or {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== me ? this.element.setAttribute(this.name, Wg) : this.element.removeAttribute(this.name);
  }
}
class qg extends Or {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = mn(this, e, n, 0)) !== null && r !== void 0 ? r : me) === gn)
      return;
    const i = this._$AH, o = e === me && i !== me || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== me && (i === me || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Gg {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    mn(this, e);
  }
}
const ml = Er.litHtmlPolyfillSupport;
ml == null || ml(Ln, Wn), ((di = Er.litHtmlVersions) !== null && di !== void 0 ? di : Er.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var hi, pi;
class yt extends Kt {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Lg(n, this.renderRoot, this.renderOptions);
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
    return gn;
  }
}
yt.finalized = !0, yt._$litElement$ = !0, (hi = globalThis.litElementHydrateSupport) === null || hi === void 0 || hi.call(globalThis, { LitElement: yt });
const vl = globalThis.litElementPolyfillSupport;
vl == null || vl({ LitElement: yt });
((pi = globalThis.litElementVersions) !== null && pi !== void 0 ? pi : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jg = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Me(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : Jg(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var gi;
((gi = window.HTMLSlotElement) === null || gi === void 0 ? void 0 : gi.prototype.assignedElements) != null;
const Xg = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class Ze {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? Xg);
  }
  createTwindContext(e) {
    if (e)
      return Dp({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: ze, styleSheet: null };
    {
      const n = Oa({ target: new CSSStyleSheet() }), { tw: r } = Fa({
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
var Kg = Object.defineProperty, Yg = Object.getOwnPropertyDescriptor, Qa = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Yg(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Kg(e, n, i), i;
};
const { tw: Qg, styleSheet: Zg } = xe(Ze, new Ze()).createTwindContext(), em = Rr`
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
class Dr extends yt {
  constructor() {
    super();
    Xe(this, "_element");
    pt(br, new br(document.body));
  }
  render() {
    var r;
    (r = this._element) == null || r.$destroy();
    const n = document.createElement("div");
    return n.style.width = "100%", n.style.height = "100%", n.style.overflow = "hidden", this._trySetupEntitySelect(this.shadowRoot), n;
  }
  _trySetupEntitySelect(n) {
    if (console.log("SETUP HELLOOO"), !this._isValidEntityType(this.entityType))
      return;
    const r = this.getAttribute("multiple") === "true" || this.multiple, i = JSON.parse(this.getAttribute("filter") || "{}");
    this._element = new qa({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Qg
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
Xe(Dr, "styles", [Zg.target, em]);
Qa([
  Me({ type: String, attribute: "entitytype" })
], Dr.prototype, "entityType", 2);
Qa([
  Me({ type: Boolean, attribute: "multiple" })
], Dr.prototype, "multiple", 2);
var tm = Object.defineProperty, nm = Object.getOwnPropertyDescriptor, kt = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? nm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && tm(e, n, i), i;
};
const { tw: rm, styleSheet: im } = xe(Ze, new Ze()).createTwindContext(), om = Rr`
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
class tt extends yt {
  constructor() {
    super();
    Xe(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return this.multiple && this._select || ((n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new Wa({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: rm
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
Xe(tt, "styles", [im.target, om]);
kt([
  Me({ attribute: "value", type: String })
], tt.prototype, "value", 2);
kt([
  Me({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), !0;
  } })
], tt.prototype, "arrayvalue", 2);
kt([
  Me({ attribute: "multiple", type: Boolean })
], tt.prototype, "multiple", 2);
kt([
  Me({ attribute: "options", type: Array })
], tt.prototype, "options", 2);
kt([
  Me({ attribute: "placeholder", type: String })
], tt.prototype, "placeholder", 2);
kt([
  Me({ attribute: "container$class", type: String })
], tt.prototype, "container$class", 2);
kt([
  Me({ attribute: "textfield$class", type: String })
], tt.prototype, "textfield$class", 2);
kt([
  Me({ attribute: "suffix$class", type: String })
], tt.prototype, "suffix$class", 2);
const { tw: sm, styleSheet: e0 } = xe(Ze, new Ze()).createTwindContext();
Rr`
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
class lm extends yt {
  constructor() {
    super();
    Xe(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new Va({
      target: n,
      props: {
        tw: sm
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function am(t) {
  Lt(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
}
function _l(t) {
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
  ), c = l || cm(t);
  return {
    c() {
      e = P("div"), n = P("span"), c && c.c(), C(n, "class", r = se(
        /*tw*/
        t[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0"), C(e, "class", i = se(
        /*tw*/
        t[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0");
    },
    m(a, u) {
      O(a, e, u), A(e, n), c && c.m(n, null), o = !0;
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
      4 && r !== (r = se(
        /*tw*/
        a[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0")) && C(n, "class", r), (!o || u & /*tw*/
      4 && i !== (i = se(
        /*tw*/
        a[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0")) && C(e, "class", i);
    },
    i(a) {
      o || (T(c, a), o = !0);
    },
    o(a) {
      I(c, a), o = !1;
    },
    d(a) {
      a && R(e), c && c.d(a);
    }
  };
}
function cm(t) {
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
      1 && _e(
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
function um(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*icon*/
    t[0] && _l(t)
  );
  return {
    c() {
      e = P("div"), u && u.c(), n = N(), r = P("div"), i = j(
        /*label*/
        t[1]
      ), C(r, "class", o = se(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-8br8x0"), C(e, "class", s = se(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0");
    },
    m(f, d) {
      O(f, e, d), u && u.m(e, null), A(e, n), A(e, r), A(r, i), l = !0, c || (a = ie(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), c = !0);
    },
    p(f, [d]) {
      /*icon*/
      f[0] ? u ? (u.p(f, d), d & /*icon*/
      1 && T(u, 1)) : (u = _l(f), u.c(), T(u, 1), u.m(e, n)) : u && (de(), I(u, 1, 1, () => {
        u = null;
      }), he()), (!l || d & /*label*/
      2) && _e(
        i,
        /*label*/
        f[1]
      ), (!l || d & /*tw*/
      4 && o !== (o = se(
        /*tw*/
        f[2]`flex-grow`
      ) + " svelte-8br8x0")) && C(r, "class", o), (!l || d & /*tw*/
      4 && s !== (s = se(
        /*tw*/
        f[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0")) && C(e, "class", s);
    },
    i(f) {
      l || (T(u), l = !0);
    },
    o(f) {
      I(u), l = !1;
    },
    d(f) {
      f && R(e), u && u.d(), c = !1, a();
    }
  };
}
function fm(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: l } = e, c = Ve();
  const a = (u) => c("click", u);
  return t.$$set = (u) => {
    "icon" in u && n(0, o = u.icon), "label" in u && n(1, s = u.label), "tw" in u && n(2, l = u.tw), "$$scope" in u && n(4, i = u.$$scope);
  }, [o, s, l, c, i, r, a];
}
class dm extends ue {
  constructor(e) {
    super(), ce(this, e, fm, um, ae, { icon: 0, label: 1, tw: 2 }, am);
  }
}
function bl(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function yl(t) {
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
  return e = new dm({
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
      n || (T(e.$$.fragment, i), n = !0);
    },
    o(i) {
      I(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function hm(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = yl(bl(t, i, l));
  const s = (l) => I(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = P("div");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      C(e, "class", n = /*tw*/
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
          const u = bl(l, i, a);
          o[a] ? (o[a].p(u, c), T(o[a], 1)) : (o[a] = yl(u), o[a].c(), T(o[a], 1), o[a].m(e, null));
        }
        for (de(), a = i.length; a < o.length; a += 1)
          s(a);
        he();
      }
      (!r || c & /*tw, container$class*/
      24 && n !== (n = /*tw*/
      l[4]`bg-white rounded shadow-lg ${/*container$class*/
      l[3]}`)) && C(e, "class", n);
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < i.length; c += 1)
          T(o[c]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        I(o[c]);
      r = !1;
    },
    d(l) {
      l && R(e), Ct(o, l);
    }
  };
}
function pm(t) {
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
    $$slots: { default: [hm] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (a.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (a.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (a.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new za({ props: a }), fe.push(() => tn(e, "anchorElement", s)), t[14](e), fe.push(() => tn(e, "preferedHorizontalAlignment", l)), fe.push(() => tn(e, "preferedVerticalAlignment", c)), {
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
        u[7], en(() => n = !1)), !r && f & /*preferedHorizontalAlignment*/
        2 && (r = !0, d.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
        u[1], en(() => r = !1)), !i && f & /*preferedVerticalAlignment*/
        1 && (i = !0, d.preferedVerticalAlignment = /*preferedVerticalAlignment*/
        u[0], en(() => i = !1)), e.$set(d);
      },
      i(u) {
        o || (T(e.$$.fragment, u), o = !0);
      },
      o(u) {
        I(e.$$.fragment, u), o = !1;
      },
      d(u) {
        t[14](null), F(e, u);
      }
    }
  );
}
function gm(t, e, n) {
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
    fe[_ ? "unshift" : "push"](() => {
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
class mm extends ue {
  constructor(e) {
    super(), ce(this, e, gm, pm, ae, {
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
var vm = Object.defineProperty, _m = Object.getOwnPropertyDescriptor, Mr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? _m(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && vm(e, n, i), i;
};
const { tw: t0, styleSheet: bm } = xe(Ze, new Ze()).createTwindContext(), ym = Rr`
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
class yn extends yt {
  constructor() {
    super();
    Xe(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new mm({
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
Xe(yn, "styles", [bm.target, ym]);
Mr([
  Me({ attribute: "items", type: Array })
], yn.prototype, "items", 2);
Mr([
  Me({ attribute: "closeonclick", type: Boolean })
], yn.prototype, "closeOnClick", 2);
Mr([
  Me({ attribute: "container$class", type: String })
], yn.prototype, "container$class", 2);
Mr([
  Me({ attribute: "anchorselector", type: String })
], yn.prototype, "anchorSelector", 2);
const wm = Dr, Sm = lm;
function n0() {
  er("audako-entity-select", wm), er("audako-tenant-select", Sm), er("audako-select", tt), er("audako-menu", yn), xe(Ze, new Ze()).createTwindContext(!0);
}
function r0(t, e) {
  const n = new Ut(t, e);
  pt(Ci, new Ci(t, e)), pt(Ut, n), pt(Rn, new Rn(t, e)), pt(On, new On(n)), pt(Si, new Si(t, e)), pt(ol, new ol()), pt(ps, new ps(t, e));
}
function er(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  bn as BaseHttpService,
  Om as ChangeRateMonitoringSettings,
  To as CompressionInterval,
  We as ConditionSettings,
  Be as ConfigurationEntity,
  Tm as ConnectionFailureConditionSettings,
  $m as CounterConditionSettings,
  Jm as CounterOffset,
  rc as Dashboard,
  dc as DashboardTab,
  lc as DataConnection,
  Am as DataConnectionFailureConditionSettings,
  jm as DataConnectionSettings,
  wo as DataConnectionType,
  sc as DataSource,
  Si as DataSourceHttpService,
  yo as DataSourceType,
  Um as DifferenceMonitoringSettings,
  tc as EntityHttpEndpoints,
  Ut as EntityHttpService,
  Em as EntityIcons,
  On as EntityNameService,
  wm as EntitySelect,
  ol as EntitySelectDialogService,
  G as EntityType,
  vc as EntityTypeClassMapping,
  Bm as EntityUtils,
  hc as EventCategory,
  oc as EventCondition,
  mi as EventConditionSettingsType,
  ic as EventDefinition,
  W as Field,
  pc as Formula,
  nc as Group,
  Gm as HistoricalValue,
  Xm as HistoricalValueObject,
  ps as HistoricalValueService,
  ds as LiveHubEvent,
  An as LiveHubMethod,
  Ci as LiveValueService,
  Im as MaximumMonitoringSettings,
  xm as MinimumMonitoringSettings,
  Hm as ObjectSettings,
  Wm as ObjectUtils,
  Pm as PeriodMaximumMonitoringSettings,
  Rm as PeriodMaximumMonitoringSettingsPeriod,
  Dm as PlausibilityMonitoringSettings,
  Mm as PositionMonitoringSettings,
  gc as ProcessImage,
  Nm as RecordingFailureMonitoringSettings,
  ko as RecordingSpecialProcessingType,
  $o as RecordingType,
  cc as Signal,
  Eo as SignalAnalogSettings,
  zm as SignalCompressionSettings,
  Ye as SignalCompressionType,
  km as SignalConditionSettings,
  bo as SignalConditionSettingsOperator,
  uc as SignalCounterSettings,
  Co as SignalDigitalSettings,
  fc as SignalRecordingSettings,
  Hi as SignalSettings,
  So as SignalType,
  Fm as SignalTypeSettingsMap,
  hs as SubscriptionPrefix,
  Rn as TenantHttpService,
  Sm as TenantSelect,
  ac as TenantView,
  Lm as UserProfile,
  Vm as UserProfileHttpService,
  r0 as registerCoreServices,
  n0 as registerCustomElements,
  xe as resolveService,
  pt as tryRegisterService
};
