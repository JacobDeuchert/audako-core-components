var cc = Object.defineProperty;
var uc = (t, e, n) => e in t ? cc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Qe = (t, e, n) => (uc(t, typeof e != "symbol" ? e + "" : e, n), n);
var J;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition";
})(J || (J = {}));
const Om = {
  [J.Group]: "fas fa-folder",
  [J.Dashboard]: "adk adk-dashboard",
  [J.Signal]: "fas fa-code",
  [J.DataConnection]: "fas fa-circle-notch",
  [J.DataSource]: "fas fa-server"
}, fc = {
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
class M {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class We {
  constructor(e) {
    this.Name = new M(), this.Description = new M(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class dc extends We {
  constructor() {
    super();
  }
}
class hc extends We {
}
class pc extends We {
}
class gc extends We {
}
var bi;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.MinimumMonitoringSettings = "MinimumMonitoringSettings", t.MaximumMonitoringSettings = "MaximumMonitoringSettings", t.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", t.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", t.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", t.PositionMonitoringSettings = "PositionMonitoringSettings", t.CounterConditionSettings = "CounterConditionSettings", t.TimebasedConditionSettings = "TimebasedConditionSettings", t.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", t.DataConnectionFailure = "DataConnectionFailure", t.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", t.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
})(bi || (bi = {}));
var To;
(function(t) {
  t.Equal = "Equal", t.GreaterThan = "GreaterThan", t.GreaterThanOrEqual = "GreaterThanOrEqual", t.LessThan = "LessThan", t.LessThanOrEqual = "LessThanOrEqual", t.NotEqual = "NotEqual";
})(To || (To = {}));
class qe {
}
class Dm extends qe {
}
class Mm extends qe {
}
class Nm extends qe {
}
class Um extends qe {
}
class Hm extends qe {
}
class Lm extends qe {
}
class Fm extends qe {
  constructor() {
    super(), this.Periods = [];
  }
}
class jm {
}
class Bm extends qe {
}
class zm extends qe {
}
class Vm extends qe {
}
class Wm extends qe {
  constructor() {
    super(), this._t = bi.RecordingFailureMonitoringSettings, this.SignalId = new M(null), this.MaxOutageTime = new M(6e4);
  }
}
class qm extends qe {
}
class Gm {
}
var Ao;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter", t.SmartDevice = "SmartDevice";
})(Ao || (Ao = {}));
class mc extends We {
}
var $o;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp";
})($o || ($o = {}));
class vc extends We {
}
class $l {
  constructor(e) {
    this._t = e;
  }
}
class Jm extends $l {
  constructor() {
    super("DataConnectionS7Settings");
  }
}
var xo;
(function(t) {
  t.None = "None", t.Basic128Rsa15 = "Basic128Rsa15", t.Basic256 = "Basic256", t.Basic256Sha256 = "Basic256Sha256";
})(xo || (xo = {}));
var Io;
(function(t) {
  t.None = "None", t.Sign = "Sign", t.SignAndEncrypt = "SignAndEncrypt";
})(Io || (Io = {}));
var Po;
(function(t) {
  t.Anonymous = "Anonymous", t.Credentials = "Credentials", t.Certificate = "Certificate";
})(Po || (Po = {}));
var Ro;
(function(t) {
  t.ASCII = "ASCII", t.UTF7 = " UTF7", t.UTF8 = "UTF8", t.Unicode = "Unicode", t.UTF32 = "UTF32";
})(Ro || (Ro = {}));
class Xm extends $l {
  constructor() {
    super("DataConnectionOpcUaSettings");
  }
}
class _c {
  constructor(e) {
    Object.assign(this, e);
  }
}
class Km {
}
var Ke;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniversalInput", t.UniversalInOut = "UniversalInOut";
})(Ke || (Ke = {}));
class bc extends We {
  constructor() {
    super(), this.Alias = new M(), this.Type = new M(Ke.AnalogInput), this.DataConnectionId = new M(), this.Address = new M(), this.Settings = new wi(), this.RecordingSettings = new xl(), this.CompressionSettings = new Il();
  }
}
var yi;
(function(t) {
  t.None = "None", t.SByte = "SByte", t.Short = "Short", t.Int = "Int";
})(yi || (yi = {}));
class Wi {
  constructor(e) {
    this._t = e;
  }
}
class Oo extends Wi {
  constructor() {
    super("SignalDigitalSettings"), this.DigitalTrueColor = new M(), this.DigitalTrueCaption = new M(), this.DigitalFalseColor = new M(), this.DigitalFalseCaption = new M(), this.Invert = new M(!1), this.BitSelect = new M(), this.BitSelectConversion = new M(yi.None);
  }
}
class wi extends Wi {
  constructor() {
    super("SignalAnalogSettings"), this.MinValue = new M(0), this.MaxValue = new M(100), this.DefaultValue = new M(null), this.DecimalPlaces = new M(0), this.Unit = new M(), this.Factor = new M(1), this.Offset = new M(0);
  }
}
class yc extends Wi {
  constructor() {
    super("SignalCounterSettings"), this.MaxValue = new M(100), this.OffsetAutomatic = new M(!0), this.OffsetDetection = new M(!0), this.DecimalPlaces = new M(0), this.Unit = new M(), this.Factor = new M(1), this.Offset = new M(0);
  }
}
const Ym = {
  AnalogInput: wi,
  AnalogInOut: wi,
  DigitalInput: Oo,
  DigitalInOut: Oo,
  Counter: yc,
  UniversalInput: null,
  UniversalInOut: null
};
var Si;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(Si || (Si = {}));
var Rn;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})(Rn || (Rn = {}));
class xl {
  constructor() {
    this.SpecialProcessingType = new M(Si.None), this.Type = new M(Rn.MeanValue), this.Interval = new M(300);
  }
}
function Qm(t) {
  const e = new xl();
  return t === Ke.AnalogInput || t === Ke.AnalogInOut ? e.Type.Value = Rn.MeanValue : (t === Ke.Counter || t === Ke.DigitalInput || t === Ke.DigitalInOut) && (e.Type.Value = Rn.LastValue), e;
}
var ee;
(function(t) {
  t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
})(ee || (ee = {}));
class Il {
  constructor() {
    this.Timezones = new M(), this.Timezones = new M([]), this.SubIntervalCompressionType = new M(ee.None), this.HourIntervalCompressionType = new M(ee.None), this.TwoHourIntervalCompressionType = new M(ee.None), this.DayIntervalCompressionType = new M(ee.None), this.WeekIntervalCompressionType = new M(ee.None), this.MonthIntervalCompressionType = new M(ee.None), this.QuarterIntervalCompressionType = new M(ee.None), this.YearIntervalCompressionType = new M(ee.None);
  }
}
function Zm(t) {
  const e = new Il();
  return t === Ke.AnalogInput || t === Ke.AnalogInOut ? (e.SubIntervalCompressionType.Value = ee.ArithmeticMean, e.HourIntervalCompressionType.Value = ee.ArithmeticMean, e.TwoHourIntervalCompressionType.Value = ee.ArithmeticMean, e.DayIntervalCompressionType.Value = ee.ArithmeticMean, e.WeekIntervalCompressionType.Value = ee.ArithmeticMean, e.MonthIntervalCompressionType.Value = ee.ArithmeticMean, e.QuarterIntervalCompressionType.Value = ee.ArithmeticMean, e.YearIntervalCompressionType.Value = ee.ArithmeticMean) : t === Ke.Counter && (e.SubIntervalCompressionType.Value = ee.Sum, e.HourIntervalCompressionType.Value = ee.Sum, e.TwoHourIntervalCompressionType.Value = ee.Sum, e.DayIntervalCompressionType.Value = ee.Sum, e.WeekIntervalCompressionType.Value = ee.Difference, e.MonthIntervalCompressionType.Value = ee.Difference, e.QuarterIntervalCompressionType.Value = ee.Difference, e.YearIntervalCompressionType.Value = ee.Difference), e;
}
var Do;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(Do || (Do = {}));
class wc extends We {
}
class Sc extends We {
}
class Cc extends We {
  constructor() {
    super(), this.CalculateOnlyWithFullVariableSet = new M(!1), this.NumericSettings = new Ec(), this.ProcessIntervalSettings = new ot(), this.SubIntervalSettings = new ot(), this.HourIntervalSettings = new ot(), this.TwoHourIntervalSettings = new ot(), this.DayIntervalSettings = new ot(), this.WeekIntervalSettings = new ot(), this.MonthIntervalSettings = new ot(), this.QuarterIntervalSettings = new ot(), this.YearIntervalSettings = new ot();
  }
}
class ot {
  constructor() {
    this.Formula = new M(), this.CompressionType = new M(Ci.ArithmeticMean), this.ProvidePreValues = new M(!1), this.ProvideLastValues = new M(!1), this.ValueIntervalType = new M(null);
  }
}
class Ec {
  constructor() {
    this.DecimalPlaces = new M(3), this.Unit = new M();
  }
}
var Ci;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(Ci || (Ci = {}));
class kc extends We {
}
class Tc extends We {
}
var Mo;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
})(Mo || (Mo = {}));
var No;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})(No || (No = {}));
const Ac = {
  [J.Group]: dc,
  [J.Signal]: bc,
  [J.Dashboard]: hc,
  [J.DashboardTab]: wc,
  [J.DataConnection]: vc,
  [J.DataSource]: mc,
  [J.EventCategory]: Sc,
  [J.EventCondition]: gc,
  [J.EventDefinition]: pc,
  [J.Formula]: Cc,
  [J.ProcessImage]: kc,
  [J.BatchDefinition]: Tc
};
class Uo {
  static isValidMongoId(e) {
    return /^[0-9a-fA-F]{24}$/.test(e);
  }
  static tryParseJson(e, n = null) {
    try {
      return JSON.parse(e);
    } catch {
      return n;
    }
  }
}
class e0 {
  static isEntityType(e) {
    return Object.keys(J).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = Ac[e];
    if (!r)
      throw new Error(`Entity type ${e} is not supported`);
    const i = new r();
    return this._getObjectKeys(i, n);
  }
  static setPropertyValue(e, n, r, i, o) {
    this._setObjectProperty(e, n.split("."), r, null, i, o);
  }
  static getPropertyValue(e, n, r) {
    var i;
    const o = n.split(".");
    let s = e, l = "";
    for (const c of o) {
      if (!s)
        return null;
      l === "AdditionalFields" ? (console.log(s, c), !((i = s[c]) === null || i === void 0) && i.Value && (s = Uo.tryParseJson(s[c].Value), console.log("AdditionalValue", s))) : s = s[c], l = c;
    }
    return r || M.isField(s) ? s == null ? void 0 : s.Value : s;
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
      M.isField(s) ? i.push({
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
  static _setObjectProperty(e, n, r, i, o, s) {
    const l = Object.keys(e);
    if (i === "AdditionalFields") {
      this._setAdditionalField(e, n, r);
      return;
    }
    const c = n.shift();
    if (n.length === 0) {
      if (s && !l.includes(c))
        return;
      o || M.isField(e[c]) ? e[c] = new M(r) : e[c] = r;
      return;
    } else if (l.includes(c) && typeof e[c] == "object") {
      const a = e[c];
      this._setObjectProperty(a, n, r, c, o, s);
    }
  }
  static _setAdditionalField(e, n, r) {
    if (n.length === 0)
      return;
    console.log("AdditionalField", e, n, r);
    const i = n.shift();
    if (n.length === 0) {
      e[i] = new M(r == null ? void 0 : r.toString());
      return;
    } else {
      let o = e[i] ? Uo.tryParseJson(e[i].Value, {}) : {};
      for (const s of n)
        n.indexOf(s) === n.length - 1 ? o[s] = r : (o[s] = o[s] || {}, o = o[s]);
      e[i] = new M(JSON.stringify(o));
    }
  }
}
function $c(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ei = {}, xc = {
  get exports() {
    return Ei;
  },
  set exports(t) {
    Ei = t;
  }
}, dr = {}, Ic = {
  get exports() {
    return dr;
  },
  set exports(t) {
    dr = t;
  }
}, Pl = function(e, n) {
  return function() {
    for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
      i[o] = arguments[o];
    return e.apply(n, i);
  };
}, Pc = Pl, qi = Object.prototype.toString, Gi = function(t) {
  return function(e) {
    var n = qi.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Ft(t) {
  return t = t.toLowerCase(), function(n) {
    return Gi(n) === t;
  };
}
function Ji(t) {
  return Array.isArray(t);
}
function hr(t) {
  return typeof t > "u";
}
function Rc(t) {
  return t !== null && !hr(t) && t.constructor !== null && !hr(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var Rl = Ft("ArrayBuffer");
function Oc(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Rl(t.buffer), e;
}
function Dc(t) {
  return typeof t == "string";
}
function Mc(t) {
  return typeof t == "number";
}
function Ol(t) {
  return t !== null && typeof t == "object";
}
function ir(t) {
  if (Gi(t) !== "object")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var Nc = Ft("Date"), Uc = Ft("File"), Hc = Ft("Blob"), Lc = Ft("FileList");
function Xi(t) {
  return qi.call(t) === "[object Function]";
}
function Fc(t) {
  return Ol(t) && Xi(t.pipe);
}
function jc(t) {
  var e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || qi.call(t) === e || Xi(t.toString) && t.toString() === e);
}
var Bc = Ft("URLSearchParams");
function zc(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function Vc() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Ki(t, e) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Ji(t))
      for (var n = 0, r = t.length; n < r; n++)
        e.call(null, t[n], n, t);
    else
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
}
function ki() {
  var t = {};
  function e(i, o) {
    ir(t[o]) && ir(i) ? t[o] = ki(t[o], i) : ir(i) ? t[o] = ki({}, i) : Ji(i) ? t[o] = i.slice() : t[o] = i;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    Ki(arguments[n], e);
  return t;
}
function Wc(t, e, n) {
  return Ki(e, function(i, o) {
    n && typeof i == "function" ? t[o] = Pc(i, n) : t[o] = i;
  }), t;
}
function qc(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function Gc(t, e, n, r) {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, n && Object.assign(t.prototype, n);
}
function Jc(t, e, n) {
  var r, i, o, s = {};
  e = e || {};
  do {
    for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0; )
      o = r[i], s[o] || (e[o] = t[o], s[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}
function Xc(t, e, n) {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  var r = t.indexOf(e, n);
  return r !== -1 && r === n;
}
function Kc(t) {
  if (!t)
    return null;
  var e = t.length;
  if (hr(e))
    return null;
  for (var n = new Array(e); e-- > 0; )
    n[e] = t[e];
  return n;
}
var Yc = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ee = {
  isArray: Ji,
  isArrayBuffer: Rl,
  isBuffer: Rc,
  isFormData: jc,
  isArrayBufferView: Oc,
  isString: Dc,
  isNumber: Mc,
  isObject: Ol,
  isPlainObject: ir,
  isUndefined: hr,
  isDate: Nc,
  isFile: Uc,
  isBlob: Hc,
  isFunction: Xi,
  isStream: Fc,
  isURLSearchParams: Bc,
  isStandardBrowserEnv: Vc,
  forEach: Ki,
  merge: ki,
  extend: Wc,
  trim: zc,
  stripBOM: qc,
  inherits: Gc,
  toFlatObject: Jc,
  kindOf: Gi,
  kindOfTest: Ft,
  endsWith: Xc,
  toArray: Kc,
  isTypedArray: Yc,
  isFileList: Lc
}, zt = Ee;
function Ho(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Dl = function(e, n, r) {
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
        zt.isDate(f) ? f = f.toISOString() : zt.isObject(f) && (f = JSON.stringify(f)), o.push(Ho(a) + "=" + Ho(f));
      }));
    }), i = o.join("&");
  }
  if (i) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}, Qc = Ee;
function $r() {
  this.handlers = [];
}
$r.prototype.use = function(e, n, r) {
  return this.handlers.push({
    fulfilled: e,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
$r.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
$r.prototype.forEach = function(e) {
  Qc.forEach(this.handlers, function(r) {
    r !== null && e(r);
  });
};
var Zc = $r, eu = Ee, tu = function(e, n) {
  eu.forEach(e, function(i, o) {
    o !== n && o.toUpperCase() === n.toUpperCase() && (e[n] = i, delete e[o]);
  });
}, Ml = Ee;
function sn(t, e, n, r, i) {
  Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
Ml.inherits(sn, Error, {
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
var Nl = sn.prototype, Ul = {};
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
  Ul[t] = { value: t };
});
Object.defineProperties(sn, Ul);
Object.defineProperty(Nl, "isAxiosError", { value: !0 });
sn.from = function(t, e, n, r, i, o) {
  var s = Object.create(Nl);
  return Ml.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }), sn.call(s, t.message, e, n, r, i), s.name = t.name, o && Object.assign(s, o), s;
};
var _n = sn, Hl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Je = Ee;
function nu(t, e) {
  e = e || new FormData();
  var n = [];
  function r(o) {
    return o === null ? "" : Je.isDate(o) ? o.toISOString() : Je.isArrayBuffer(o) || Je.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function i(o, s) {
    if (Je.isPlainObject(o) || Je.isArray(o)) {
      if (n.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + s);
      n.push(o), Je.forEach(o, function(c, a) {
        if (!Je.isUndefined(c)) {
          var u = s ? s + "." + a : a, f;
          if (c && !s && typeof c == "object") {
            if (Je.endsWith(a, "{}"))
              c = JSON.stringify(c);
            else if (Je.endsWith(a, "[]") && (f = Je.toArray(c))) {
              f.forEach(function(d) {
                !Je.isUndefined(d) && e.append(u, r(d));
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
var Ll = nu, Lr, Lo;
function ru() {
  if (Lo)
    return Lr;
  Lo = 1;
  var t = _n;
  return Lr = function(n, r, i) {
    var o = i.config.validateStatus;
    !i.status || !o || o(i.status) ? n(i) : r(new t(
      "Request failed with status code " + i.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
      i.config,
      i.request,
      i
    ));
  }, Lr;
}
var Fr, Fo;
function iu() {
  if (Fo)
    return Fr;
  Fo = 1;
  var t = Ee;
  return Fr = t.isStandardBrowserEnv() ? (
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
  ), Fr;
}
var ou = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, su = function(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}, lu = ou, au = su, Fl = function(e, n) {
  return e && !lu(n) ? au(e, n) : n;
}, jr, jo;
function cu() {
  if (jo)
    return jr;
  jo = 1;
  var t = Ee, e = [
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
  return jr = function(r) {
    var i = {}, o, s, l;
    return r && t.forEach(r.split(`
`), function(a) {
      if (l = a.indexOf(":"), o = t.trim(a.substr(0, l)).toLowerCase(), s = t.trim(a.substr(l + 1)), o) {
        if (i[o] && e.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? i[o] = (i[o] ? i[o] : []).concat([s]) : i[o] = i[o] ? i[o] + ", " + s : s;
      }
    }), i;
  }, jr;
}
var Br, Bo;
function uu() {
  if (Bo)
    return Br;
  Bo = 1;
  var t = Ee;
  return Br = t.isStandardBrowserEnv() ? (
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
  ), Br;
}
var zr, zo;
function xr() {
  if (zo)
    return zr;
  zo = 1;
  var t = _n, e = Ee;
  function n(r) {
    t.call(this, r ?? "canceled", t.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(n, t, {
    __CANCEL__: !0
  }), zr = n, zr;
}
var Vr, Vo;
function fu() {
  return Vo || (Vo = 1, Vr = function(e) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return n && n[1] || "";
  }), Vr;
}
var Wr, Wo;
function qo() {
  if (Wo)
    return Wr;
  Wo = 1;
  var t = Ee, e = ru(), n = iu(), r = Dl, i = Fl, o = cu(), s = uu(), l = Hl, c = _n, a = xr(), u = fu();
  return Wr = function(d) {
    return new Promise(function(b, h) {
      var m = d.data, $ = d.headers, y = d.responseType, _;
      function v() {
        d.cancelToken && d.cancelToken.unsubscribe(_), d.signal && d.signal.removeEventListener("abort", _);
      }
      t.isFormData(m) && t.isStandardBrowserEnv() && delete $["Content-Type"];
      var g = new XMLHttpRequest();
      if (d.auth) {
        var A = d.auth.username || "", w = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
        $.Authorization = "Basic " + btoa(A + ":" + w);
      }
      var S = i(d.baseURL, d.url);
      g.open(d.method.toUpperCase(), r(S, d.params, d.paramsSerializer), !0), g.timeout = d.timeout;
      function N() {
        if (g) {
          var ne = "getAllResponseHeaders" in g ? o(g.getAllResponseHeaders()) : null, D = !y || y === "text" || y === "json" ? g.responseText : g.response, L = {
            data: D,
            status: g.status,
            statusText: g.statusText,
            headers: ne,
            config: d,
            request: g
          };
          e(function(it) {
            b(it), v();
          }, function(it) {
            h(it), v();
          }, L), g = null;
        }
      }
      if ("onloadend" in g ? g.onloadend = N : g.onreadystatechange = function() {
        !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(N);
      }, g.onabort = function() {
        g && (h(new c("Request aborted", c.ECONNABORTED, d, g)), g = null);
      }, g.onerror = function() {
        h(new c("Network Error", c.ERR_NETWORK, d, g, g)), g = null;
      }, g.ontimeout = function() {
        var D = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded", L = d.transitional || l;
        d.timeoutErrorMessage && (D = d.timeoutErrorMessage), h(new c(
          D,
          L.clarifyTimeoutError ? c.ETIMEDOUT : c.ECONNABORTED,
          d,
          g
        )), g = null;
      }, t.isStandardBrowserEnv()) {
        var z = (d.withCredentials || s(S)) && d.xsrfCookieName ? n.read(d.xsrfCookieName) : void 0;
        z && ($[d.xsrfHeaderName] = z);
      }
      "setRequestHeader" in g && t.forEach($, function(D, L) {
        typeof m > "u" && L.toLowerCase() === "content-type" ? delete $[L] : g.setRequestHeader(L, D);
      }), t.isUndefined(d.withCredentials) || (g.withCredentials = !!d.withCredentials), y && y !== "json" && (g.responseType = d.responseType), typeof d.onDownloadProgress == "function" && g.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && g.upload && g.upload.addEventListener("progress", d.onUploadProgress), (d.cancelToken || d.signal) && (_ = function(ne) {
        g && (h(!ne || ne && ne.type ? new a() : ne), g.abort(), g = null);
      }, d.cancelToken && d.cancelToken.subscribe(_), d.signal && (d.signal.aborted ? _() : d.signal.addEventListener("abort", _))), m || (m = null);
      var K = u(S);
      if (K && ["http", "https", "file"].indexOf(K) === -1) {
        h(new c("Unsupported protocol " + K + ":", c.ERR_BAD_REQUEST, d));
        return;
      }
      g.send(m);
    });
  }, Wr;
}
var qr, Go;
function du() {
  return Go || (Go = 1, qr = null), qr;
}
var ve = Ee, Jo = tu, Xo = _n, hu = Hl, pu = Ll, gu = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ko(t, e) {
  !ve.isUndefined(t) && ve.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function mu() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = qo()), t;
}
function vu(t, e, n) {
  if (ve.isString(t))
    try {
      return (e || JSON.parse)(t), ve.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
var Ir = {
  transitional: hu,
  adapter: mu(),
  transformRequest: [function(e, n) {
    if (Jo(n, "Accept"), Jo(n, "Content-Type"), ve.isFormData(e) || ve.isArrayBuffer(e) || ve.isBuffer(e) || ve.isStream(e) || ve.isFile(e) || ve.isBlob(e))
      return e;
    if (ve.isArrayBufferView(e))
      return e.buffer;
    if (ve.isURLSearchParams(e))
      return Ko(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var r = ve.isObject(e), i = n && n["Content-Type"], o;
    if ((o = ve.isFileList(e)) || r && i === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return pu(o ? { "files[]": e } : e, s && new s());
    } else if (r || i === "application/json")
      return Ko(n, "application/json"), vu(e);
    return e;
  }],
  transformResponse: [function(e) {
    var n = this.transitional || Ir.transitional, r = n && n.silentJSONParsing, i = n && n.forcedJSONParsing, o = !r && this.responseType === "json";
    if (o || i && ve.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Xo.from(s, Xo.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: du()
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
ve.forEach(["delete", "get", "head"], function(e) {
  Ir.headers[e] = {};
});
ve.forEach(["post", "put", "patch"], function(e) {
  Ir.headers[e] = ve.merge(gu);
});
var Yi = Ir, _u = Ee, bu = Yi, yu = function(e, n, r) {
  var i = this || bu;
  return _u.forEach(r, function(s) {
    e = s.call(i, e, n);
  }), e;
}, Gr, Yo;
function jl() {
  return Yo || (Yo = 1, Gr = function(e) {
    return !!(e && e.__CANCEL__);
  }), Gr;
}
var Qo = Ee, Jr = yu, wu = jl(), Su = Yi, Cu = xr();
function Xr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Cu();
}
var Eu = function(e) {
  Xr(e), e.headers = e.headers || {}, e.data = Jr.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = Qo.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), Qo.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(i) {
      delete e.headers[i];
    }
  );
  var n = e.adapter || Su.adapter;
  return n(e).then(function(i) {
    return Xr(e), i.data = Jr.call(
      e,
      i.data,
      i.headers,
      e.transformResponse
    ), i;
  }, function(i) {
    return wu(i) || (Xr(e), i && i.response && (i.response.data = Jr.call(
      e,
      i.response.data,
      i.response.headers,
      e.transformResponse
    ))), Promise.reject(i);
  });
}, Ue = Ee, Bl = function(e, n) {
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
  return Ue.forEach(Object.keys(e).concat(Object.keys(n)), function(f) {
    var d = a[f] || o, p = d(f);
    Ue.isUndefined(p) && d !== c || (r[f] = p);
  }), r;
}, Kr, Zo;
function zl() {
  return Zo || (Zo = 1, Kr = {
    version: "0.27.2"
  }), Kr;
}
var ku = zl().version, vt = _n, Qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  Qi[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var es = {};
Qi.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + ku + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return function(o, s, l) {
    if (e === !1)
      throw new vt(
        i(s, " has been removed" + (n ? " in " + n : "")),
        vt.ERR_DEPRECATED
      );
    return n && !es[s] && (es[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
function Tu(t, e, n) {
  if (typeof t != "object")
    throw new vt("options must be an object", vt.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
    var o = r[i], s = e[o];
    if (s) {
      var l = t[o], c = l === void 0 || s(l, o, t);
      if (c !== !0)
        throw new vt("option " + o + " must be " + c, vt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new vt("Unknown option " + o, vt.ERR_BAD_OPTION);
  }
}
var Au = {
  assertOptions: Tu,
  validators: Qi
}, Vl = Ee, $u = Dl, ts = Zc, ns = Eu, Pr = Bl, xu = Fl, Wl = Au, Vt = Wl.validators;
function ln(t) {
  this.defaults = t, this.interceptors = {
    request: new ts(),
    response: new ts()
  };
}
ln.prototype.request = function(e, n) {
  typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Pr(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && Wl.assertOptions(r, {
    silentJSONParsing: Vt.transitional(Vt.boolean),
    forcedJSONParsing: Vt.transitional(Vt.boolean),
    clarifyTimeoutError: Vt.transitional(Vt.boolean)
  }, !1);
  var i = [], o = !0;
  this.interceptors.request.forEach(function(p) {
    typeof p.runWhen == "function" && p.runWhen(n) === !1 || (o = o && p.synchronous, i.unshift(p.fulfilled, p.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(p) {
    s.push(p.fulfilled, p.rejected);
  });
  var l;
  if (!o) {
    var c = [ns, void 0];
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
    l = ns(a);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; s.length; )
    l = l.then(s.shift(), s.shift());
  return l;
};
ln.prototype.getUri = function(e) {
  e = Pr(this.defaults, e);
  var n = xu(e.baseURL, e.url);
  return $u(n, e.params, e.paramsSerializer);
};
Vl.forEach(["delete", "get", "head", "options"], function(e) {
  ln.prototype[e] = function(n, r) {
    return this.request(Pr(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
Vl.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, l) {
      return this.request(Pr(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  ln.prototype[e] = n(), ln.prototype[e + "Form"] = n(!0);
});
var Iu = ln, Yr, rs;
function Pu() {
  if (rs)
    return Yr;
  rs = 1;
  var t = xr();
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
  }, Yr = e, Yr;
}
var Qr, is;
function Ru() {
  return is || (is = 1, Qr = function(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }), Qr;
}
var Zr, os;
function Ou() {
  if (os)
    return Zr;
  os = 1;
  var t = Ee;
  return Zr = function(n) {
    return t.isObject(n) && n.isAxiosError === !0;
  }, Zr;
}
var ss = Ee, Du = Pl, or = Iu, Mu = Bl, Nu = Yi;
function ql(t) {
  var e = new or(t), n = Du(or.prototype.request, e);
  return ss.extend(n, or.prototype, e), ss.extend(n, e), n.create = function(i) {
    return ql(Mu(t, i));
  }, n;
}
var Me = ql(Nu);
Me.Axios = or;
Me.CanceledError = xr();
Me.CancelToken = Pu();
Me.isCancel = jl();
Me.VERSION = zl().version;
Me.toFormData = Ll;
Me.AxiosError = _n;
Me.Cancel = Me.CanceledError;
Me.all = function(e) {
  return Promise.all(e);
};
Me.spread = Ru();
Me.isAxiosError = Ou();
Ic.exports = Me;
dr.default = Me;
(function(t) {
  t.exports = dr;
})(xc);
const ce = /* @__PURE__ */ $c(Ei);
var Ti = function(t, e) {
  return Ti = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ti(t, e);
};
function nt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ti(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Uu(t, e, n, r) {
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
function Gl(t, e) {
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
function an(t) {
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
function Ct(t, e) {
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
function Et(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function Qt(t) {
  return this instanceof Qt ? (this.v = t, this) : new Qt(t);
}
function Hu(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(p) {
      return new Promise(function(b, h) {
        o.push([d, p, b, h]) > 1 || l(d, p);
      });
    });
  }
  function l(d, p) {
    try {
      c(r[d](p));
    } catch (b) {
      f(o[0][3], b);
    }
  }
  function c(d) {
    d.value instanceof Qt ? Promise.resolve(d.value.v).then(a, u) : f(o[0][2], d);
  }
  function a(d) {
    l("next", d);
  }
  function u(d) {
    l("throw", d);
  }
  function f(d, p) {
    d(p), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function Lu(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof an == "function" ? an(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function se(t) {
  return typeof t == "function";
}
function Zi(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ei = Zi(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function pr(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Vn = function() {
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
            for (var l = an(s), c = l.next(); !c.done; c = l.next()) {
              var a = c.value;
              a.remove(this);
            }
          } catch (h) {
            e = { error: h };
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
      if (se(u))
        try {
          u();
        } catch (h) {
          o = h instanceof ei ? h.errors : [h];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = an(f), p = d.next(); !p.done; p = d.next()) {
            var b = p.value;
            try {
              ls(b);
            } catch (h) {
              o = o ?? [], h instanceof ei ? o = Et(Et([], Ct(o)), Ct(h.errors)) : o.push(h);
            }
          }
        } catch (h) {
          r = { error: h };
        } finally {
          try {
            p && !p.done && (i = d.return) && i.call(d);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (o)
        throw new ei(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        ls(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && pr(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && pr(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Jl = Vn.EMPTY;
function Xl(t) {
  return t instanceof Vn || t && "closed" in t && se(t.remove) && se(t.add) && se(t.unsubscribe);
}
function ls(t) {
  se(t) ? t() : t.unsubscribe();
}
var Kl = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Ai = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = Ai.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, Et([t, e], Ct(n))) : setTimeout.apply(void 0, Et([t, e], Ct(n)));
  },
  clearTimeout: function(t) {
    var e = Ai.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Yl(t) {
  Ai.setTimeout(function() {
    throw t;
  });
}
function $i() {
}
function sr(t) {
  t();
}
var eo = function(t) {
  nt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Xl(n) && n.add(r)) : r.destination = zu, r;
  }
  return e.create = function(n, r, i) {
    return new cn(n, r, i);
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
}(Vn), Fu = Function.prototype.bind;
function ti(t, e) {
  return Fu.call(t, e);
}
var ju = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Jn(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Jn(r);
      }
    else
      Jn(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Jn(n);
      }
  }, t;
}(), cn = function(t) {
  nt(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    if (se(n) || !n)
      s = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      o && Kl.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && ti(n.next, l),
        error: n.error && ti(n.error, l),
        complete: n.complete && ti(n.complete, l)
      }) : s = n;
    }
    return o.destination = new ju(s), o;
  }
  return e;
}(eo);
function Jn(t) {
  Yl(t);
}
function Bu(t) {
  throw t;
}
var zu = {
  closed: !0,
  next: $i,
  error: Bu,
  complete: $i
}, to = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bn(t) {
  return t;
}
function Vu(t) {
  return t.length === 0 ? bn : t.length === 1 ? t[0] : function(n) {
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
    var i = this, o = qu(e) ? e : new cn(e, n, r);
    return sr(function() {
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
    return n = as(n), new n(function(i, o) {
      var s = new cn({
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
  }, t.prototype[to] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Vu(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = as(e), new e(function(r, i) {
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
function as(t) {
  var e;
  return (e = t ?? Kl.Promise) !== null && e !== void 0 ? e : Promise;
}
function Wu(t) {
  return t && se(t.next) && se(t.error) && se(t.complete);
}
function qu(t) {
  return t && t instanceof eo || Wu(t) && Xl(t);
}
function Gu(t) {
  return se(t == null ? void 0 : t.lift);
}
function Pe(t) {
  return function(e) {
    if (Gu(e))
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
function we(t, e, n, r, i) {
  return new Ju(t, e, n, r, i);
}
var Ju = function(t) {
  nt(e, t);
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
}(eo), Xu = Zi(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ae = function(t) {
  nt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new cs(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Xu();
  }, e.prototype.next = function(n) {
    var r = this;
    sr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = an(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
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
    sr(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    sr(function() {
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
    return o || s ? Jl : (this.currentObservers = null, l.push(n), new Vn(function() {
      r.currentObservers = null, pr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new $e();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new cs(n, r);
  }, e;
}($e), cs = function(t) {
  nt(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Jl;
  }, e;
}(Ae), no = function(t) {
  nt(e, t);
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
}(Ae), ro = {
  now: function() {
    return (ro.delegate || Date).now();
  },
  delegate: void 0
}, Ql = function(t) {
  nt(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = ro);
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
}(Ae), Ku = function(t) {
  nt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Vn), gr = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = gr.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, Et([t, e], Ct(n))) : setInterval.apply(void 0, Et([t, e], Ct(n)));
  },
  clearInterval: function(t) {
    var e = gr.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, Yu = function(t) {
  nt(e, t);
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
    return i === void 0 && (i = 0), gr.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    gr.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, pr(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Ku), us = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = ro.now, t;
}(), Qu = function(t) {
  nt(e, t);
  function e(n, r) {
    r === void 0 && (r = us.now);
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
}(us), Rr = new Qu(Yu), Zu = Rr, ef = new $e(function(t) {
  return t.complete();
});
function Zl(t) {
  return t && se(t.schedule);
}
function ea(t) {
  return t[t.length - 1];
}
function tf(t) {
  return se(ea(t)) ? t.pop() : void 0;
}
function io(t) {
  return Zl(ea(t)) ? t.pop() : void 0;
}
var ta = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function na(t) {
  return se(t == null ? void 0 : t.then);
}
function ra(t) {
  return se(t[to]);
}
function ia(t) {
  return Symbol.asyncIterator && se(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function oa(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function nf() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var sa = nf();
function la(t) {
  return se(t == null ? void 0 : t[sa]);
}
function aa(t) {
  return Hu(this, arguments, function() {
    var n, r, i, o;
    return Gl(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Qt(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, Qt(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Qt(i)];
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
function ca(t) {
  return se(t == null ? void 0 : t.getReader);
}
function Ye(t) {
  if (t instanceof $e)
    return t;
  if (t != null) {
    if (ra(t))
      return rf(t);
    if (ta(t))
      return of(t);
    if (na(t))
      return sf(t);
    if (ia(t))
      return ua(t);
    if (la(t))
      return lf(t);
    if (ca(t))
      return af(t);
  }
  throw oa(t);
}
function rf(t) {
  return new $e(function(e) {
    var n = t[to]();
    if (se(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function of(t) {
  return new $e(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function sf(t) {
  return new $e(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Yl);
  });
}
function lf(t) {
  return new $e(function(e) {
    var n, r;
    try {
      for (var i = an(t), o = i.next(); !o.done; o = i.next()) {
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
function ua(t) {
  return new $e(function(e) {
    cf(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function af(t) {
  return ua(aa(t));
}
function cf(t, e) {
  var n, r, i, o;
  return Uu(this, void 0, void 0, function() {
    var s, l;
    return Gl(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Lu(t), c.label = 1;
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
function ct(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function fa(t, e) {
  return e === void 0 && (e = 0), Pe(function(n, r) {
    n.subscribe(we(r, function(i) {
      return ct(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ct(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ct(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function da(t, e) {
  return e === void 0 && (e = 0), Pe(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function uf(t, e) {
  return Ye(t).pipe(da(e), fa(e));
}
function ff(t, e) {
  return Ye(t).pipe(da(e), fa(e));
}
function df(t, e) {
  return new $e(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function hf(t, e) {
  return new $e(function(n) {
    var r;
    return ct(n, e, function() {
      r = t[sa](), ct(n, e, function() {
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
      return se(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function ha(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new $e(function(n) {
    ct(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ct(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function pf(t, e) {
  return ha(aa(t), e);
}
function gf(t, e) {
  if (t != null) {
    if (ra(t))
      return uf(t, e);
    if (ta(t))
      return df(t, e);
    if (na(t))
      return ff(t, e);
    if (ia(t))
      return ha(t, e);
    if (la(t))
      return hf(t, e);
    if (ca(t))
      return pf(t, e);
  }
  throw oa(t);
}
function jt(t, e) {
  return e ? gf(t, e) : Ye(t);
}
function Zt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = io(t);
  return jt(t, n);
}
function oo(t) {
  return !!t && (t instanceof $e || se(t.lift) && se(t.subscribe));
}
var mf = Zi(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Ht(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new cn({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new mf());
      }
    });
    t.subscribe(o);
  });
}
function vf(t) {
  return t instanceof Date && !isNaN(t);
}
function un(t, e) {
  return Pe(function(n, r) {
    var i = 0;
    n.subscribe(we(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var _f = Array.isArray;
function bf(t, e) {
  return _f(e) ? t.apply(void 0, Et([], Ct(e))) : t(e);
}
function yf(t) {
  return un(function(e) {
    return bf(t, e);
  });
}
var wf = Array.isArray, Sf = Object.getPrototypeOf, Cf = Object.prototype, Ef = Object.keys;
function kf(t) {
  if (t.length === 1) {
    var e = t[0];
    if (wf(e))
      return { args: e, keys: null };
    if (Tf(e)) {
      var n = Ef(e);
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
function Tf(t) {
  return t && typeof t == "object" && Sf(t) === Cf;
}
function Af(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function pa() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = io(t), r = tf(t), i = kf(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return jt([], n);
  var l = new $e($f(o, n, s ? function(c) {
    return Af(s, c);
  } : bn));
  return r ? l.pipe(yf(r)) : l;
}
function $f(t, e, n) {
  return n === void 0 && (n = bn), function(r) {
    fs(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, c = function(u) {
        fs(e, function() {
          var f = jt(t[u], e), d = !1;
          f.subscribe(we(r, function(p) {
            o[u] = p, d || (d = !0, l--), l || r.next(n(o.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, a = 0; a < i; a++)
        c(a);
    }, r);
  };
}
function fs(t, e, n) {
  t ? ct(n, t, e) : e();
}
function xf(t, e, n, r, i, o, s, l) {
  var c = [], a = 0, u = 0, f = !1, d = function() {
    f && !c.length && !a && e.complete();
  }, p = function(h) {
    return a < r ? b(h) : c.push(h);
  }, b = function(h) {
    o && e.next(h), a++;
    var m = !1;
    Ye(n(h, u++)).subscribe(we(e, function($) {
      i == null || i($), o ? p($) : e.next($);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          a--;
          for (var $ = function() {
            var y = c.shift();
            s ? ct(e, s, function() {
              return b(y);
            }) : b(y);
          }; c.length && a < r; )
            $();
          d();
        } catch (y) {
          e.error(y);
        }
    }));
  };
  return t.subscribe(we(e, p, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function ga(t, e, n) {
  return n === void 0 && (n = 1 / 0), se(e) ? ga(function(r, i) {
    return un(function(o, s) {
      return e(r, o, i, s);
    })(Ye(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Pe(function(r, i) {
    return xf(r, i, t, n);
  }));
}
function If(t) {
  return t === void 0 && (t = 1 / 0), ga(bn, t);
}
function Pf() {
  return If(1);
}
function Rf() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Pf()(jt(t, io(t)));
}
function ma(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = Zu);
  var r = -1;
  return e != null && (Zl(e) ? n = e : r = e), new $e(function(i) {
    var o = vf(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function On(t, e) {
  return Pe(function(n, r) {
    var i = 0;
    n.subscribe(we(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function Of(t) {
  return Pe(function(e, n) {
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
    e.subscribe(we(n, function(a) {
      r = !0, i = a, o || Ye(t(a)).subscribe(o = we(n, l, c));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function Df(t, e) {
  return e === void 0 && (e = Rr), Of(function() {
    return ma(t, e);
  });
}
function va(t) {
  return Pe(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(we(n, void 0, void 0, function(s) {
      o = Ye(t(s, va(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function Mf(t, e) {
  return e === void 0 && (e = Rr), Pe(function(n, r) {
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
    n.subscribe(we(r, function(a) {
      o = a, s = e.now(), i || (i = e.schedule(c, t), r.add(i));
    }, function() {
      l(), r.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function Nf(t) {
  return t <= 0 ? function() {
    return ef;
  } : Pe(function(e, n) {
    var r = 0;
    e.subscribe(we(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Uf(t) {
  return un(function() {
    return t;
  });
}
function Hf(t, e) {
  return e === void 0 && (e = bn), t = t ?? Lf, Pe(function(n, r) {
    var i, o = !0;
    n.subscribe(we(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function Lf(t, e) {
  return t === e;
}
function Ff(t, e) {
  return Hf(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function jf(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Ae();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, c = l === void 0 ? !0 : l;
  return function(a) {
    var u, f, d, p = 0, b = !1, h = !1, m = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, $ = function() {
      m(), u = d = void 0, b = h = !1;
    }, y = function() {
      var _ = u;
      $(), _ == null || _.unsubscribe();
    };
    return Pe(function(_, v) {
      p++, !h && !b && m();
      var g = d = d ?? n();
      v.add(function() {
        p--, p === 0 && !h && !b && (f = ni(y, c));
      }), g.subscribe(v), !u && p > 0 && (u = new cn({
        next: function(A) {
          return g.next(A);
        },
        error: function(A) {
          h = !0, m(), f = ni($, i, A), g.error(A);
        },
        complete: function() {
          b = !0, m(), f = ni($, s), g.complete();
        }
      }), Ye(_).subscribe(u));
    })(a);
  };
}
function ni(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new cn({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, Et([], Ct(n))).subscribe(i);
  }
}
function Bf(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, jf({
    connector: function() {
      return new Ql(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function zf(t) {
  return On(function(e, n) {
    return t <= n;
  });
}
function _a(t, e) {
  return Pe(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(we(r, function(c) {
      i == null || i.unsubscribe();
      var a = 0, u = o++;
      Ye(t(c, u)).subscribe(i = we(r, function(f) {
        return r.next(e ? e(c, f, u, a++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function ut(t) {
  return Pe(function(e, n) {
    Ye(t).subscribe(we(n, function() {
      return n.complete();
    }, $i)), !n.closed && e.subscribe(n);
  });
}
function Vf(t, e, n) {
  var r = se(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Pe(function(i, o) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var l = !0;
    i.subscribe(we(o, function(c) {
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
  }) : bn;
}
var ba = {
  leading: !0,
  trailing: !1
};
function Wf(t, e) {
  return e === void 0 && (e = ba), Pe(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, c = null, a = !1, u = function() {
      c == null || c.unsubscribe(), c = null, o && (p(), a && r.complete());
    }, f = function() {
      c = null, a && r.complete();
    }, d = function(b) {
      return c = Ye(t(b)).subscribe(we(r, u, f));
    }, p = function() {
      if (s) {
        s = !1;
        var b = l;
        l = null, r.next(b), !a && d(b);
      }
    };
    n.subscribe(we(r, function(b) {
      s = !0, l = b, !(c && !c.closed) && (i ? p() : d(b));
    }, function() {
      a = !0, !(o && s && c && !c.closed) && r.complete();
    }));
  });
}
function qf(t, e, n) {
  e === void 0 && (e = Rr), n === void 0 && (n = ba);
  var r = ma(t, e);
  return Wf(function() {
    return r;
  }, n);
}
class mr {
  static isPromise(e) {
    return e && typeof e.then == "function";
  }
}
function Dn(t) {
  return mr.isPromise(t) ? t : oo(t) ? Ht(t) : Promise.resolve(t);
}
var ds = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class yn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, mr.isPromise(n) ? n.then((r) => this.accessToken = r) : this.accessToken = n;
  }
  getAuthorizationHeader() {
    return ds(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield Dn(this.accessToken)}`
      };
    });
  }
  getAccessTokenAsPromise() {
    return oo(this.accessToken) ? Ht(this.accessToken) : mr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
  getStructureUrl() {
    return ds(this, void 0, void 0, function* () {
      const e = yield Dn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Structure}`;
    });
  }
  static requestHttpConfig(e) {
    return ce.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
  static isApiReachable(e) {
    return ce.get(`${e}/api/structure/about/version`).then((n) => n.status === 200 || n.status === 401).catch((n) => {
      var r;
      return ((r = n == null ? void 0 : n.response) === null || r === void 0 ? void 0 : r.status) === 401;
    });
  }
}
var Le = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Lt extends yn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return Le(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return Le(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield ce.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return Le(this, void 0, void 0, function* () {
      const o = `${yield this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), c = yield ce.post(o, s, { headers: l });
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
  uploadProcessImage(e, n, r = "process-image.svg") {
    return Le(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(J.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield ce.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return Le(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return ce.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return Le(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`, i = yield this.getAuthorizationHeader();
      return ce.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return Le(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return ce.delete(r, { headers: i }).then();
    });
  }
  copyTo(e, n, r) {
    return Le(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return ce.get(i, { headers: o }).then((s) => s.data);
    });
  }
  copyMultipleTo(e, n, r) {
    return Le(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return ce.put(i, e, { responseType: "text", headers: o });
    });
  }
  moveTo(e, n, r) {
    return Le(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return ce.get(i, { headers: o }).then((s) => s.data);
    });
  }
  moveMultipleTo(e, n, r) {
    return Le(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return ce.put(i, e, { responseType: "text", headers: o });
    });
  }
  _createBaseUrlByType(e) {
    return Le(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${fc[e]}`;
    });
  }
}
var ri = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Mn extends yn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return ri(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield ce.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return ri(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield ce.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return ri(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield ce.get(n, { headers: r })).data;
    });
  }
}
var ii = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Nn {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, n, r = !1, i, o = " / ") {
    return ii(this, void 0, void 0, function* () {
      const s = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let l = yield this.resolvePathName(s.Path.splice(i ? s.Path.length - i : 0, s.Path.length), o);
      return r && (l = l + o + s.Name.Value), l;
    });
  }
  resolvePathName(e, n = " / ") {
    return ii(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Ht(pa(e.map((r) => this.resolveName(J.Group, r))).pipe(un((r) => r.join(n))));
    });
  }
  resolveName(e, n) {
    return ii(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = jt(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(un((r) => r.Name.Value), Bf(1), va(() => Zt(n)))), Ht(this._nameCache[n]);
    });
  }
}
var Gf = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class t0 extends yn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Gf(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield ce.get(`${yield this.getStructureUrl()}/userprofile`, {
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
var hs = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class xi extends yn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return hs(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield ce.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return hs(this, void 0, void 0, function* () {
      const e = yield Dn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Driver}`;
    });
  }
}
class fn extends Error {
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
class so extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Un extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Jf extends Error {
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
class Xf extends Error {
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
class Kf extends Error {
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
class Yf extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class Qf extends Error {
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
class ya {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class lo {
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
class Hn {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
Hn.instance = new Hn();
const Zf = "6.0.8";
class be {
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
class Ce {
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
function Ln(t, e) {
  let n = "";
  return ao(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${ed(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function ed(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    const i = r < 16 ? "0" : "";
    n += `0x${i}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function ao(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function wa(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [c, a] = dn();
  l[c] = a, t.log(E.Trace, `(${e} transport) sending data. ${Ln(o, s.logMessageContent)}.`);
  const u = ao(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(E.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function td(t) {
  return t === void 0 ? new vr(E.Information) : t === null ? Hn.instance : t.log !== void 0 ? t : new vr(t);
}
class nd {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class vr {
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
function dn() {
  let t = "X-SignalR-User-Agent";
  return Ce.isNode && (t = "User-Agent"), [t, rd(Zf, id(), sd(), od())];
}
function rd(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function id() {
  if (Ce.isNode)
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
function od() {
  if (Ce.isNode)
    return process.versions.node;
}
function sd() {
  return Ce.isNode ? "NodeJS" : "Browser";
}
function ps(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function ld() {
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
class ad extends lo {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(ld());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new Un();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new Un();
    });
    let i = null;
    if (e.timeout) {
      const c = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(E.Warning, "Timeout from HTTP request."), r = new so();
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
      const c = await gs(o, "text");
      throw new fn(c || o.statusText, o.status);
    }
    const l = await gs(o, e.responseType);
    return new ya(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return Ce.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function gs(t, e) {
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
class cd extends lo {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Un()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new Un());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new ya(i.status, i.statusText, i.response || i.responseText)) : r(new fn(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(E.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new fn(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(E.Warning, "Timeout from HTTP request."), r(new so());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class ud extends lo {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || Ce.isNode)
      this._httpClient = new ad(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new cd(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Un()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class He {
  static write(e) {
    return `${e}${He.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== He.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(He.RecordSeparator);
    return n.pop(), n;
  }
}
He.RecordSeparatorCode = 30;
He.RecordSeparator = String.fromCharCode(He.RecordSeparatorCode);
class fd {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return He.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (ao(e)) {
      const l = new Uint8Array(e), c = l.indexOf(He.RecordSeparatorCode);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(l.slice(0, a))), r = l.byteLength > a ? l.slice(a).buffer : null;
    } else {
      const l = e, c = l.indexOf(He.RecordSeparator);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = l.substring(0, a), r = l.length > a ? l.substring(a) : null;
    }
    const i = He.parse(n), o = JSON.parse(i[0]);
    if (o.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, o];
  }
}
var Z;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(Z || (Z = {}));
class dd {
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
    return this.observers.push(e), new nd(this, e);
  }
}
const hd = 30 * 1e3, pd = 15 * 1e3;
var ie;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(ie || (ie = {}));
class co {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(E.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, be.isRequired(e, "connection"), be.isRequired(n, "logger"), be.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = hd, this.keepAliveIntervalInMilliseconds = pd, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new fd(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = ie.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: Z.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, r, i) {
    return new co(e, n, r, i);
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
    if (this._connectionState !== ie.Disconnected && this._connectionState !== ie.Reconnecting)
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
    if (this._connectionState !== ie.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = ie.Connecting, this._logger.log(E.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), Ce.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = ie.Connected, this._connectionStarted = !0, this._logger.log(E.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = ie.Disconnected, this._logger.log(E.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
    return this._connectionState === ie.Disconnected ? (this._logger.log(E.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === ie.Disconnecting ? (this._logger.log(E.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = ie.Disconnecting, this._logger.log(E.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(E.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
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
    const l = new dd();
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
                this._logger.log(E.Error, `Stream callback threw error: ${ps(o)}`);
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
        if (this._connectionState === ie.Connected)
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
    this._logger.log(E.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === ie.Disconnecting ? this._completeClose(e) : this._connectionState === ie.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === ie.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = ie.Disconnected, this._connectionStarted = !1, Ce.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
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
    if (this._connectionState = ie.Reconnecting, e ? this._logger.log(E.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(E.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(E.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== ie.Reconnecting) {
        this._logger.log(E.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(E.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== ie.Reconnecting) {
        this._logger.log(E.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = ie.Connected, this._logger.log(E.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(E.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(E.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== ie.Reconnecting) {
          this._logger.log(E.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === ie.Disconnecting && this._completeClose();
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
        this._logger.log(E.Error, `Stream 'error' callback called with '${e}' threw error: ${ps(o)}`);
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
const gd = [0, 2e3, 1e4, 3e4, null];
class ms {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : gd;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class Dt {
}
Dt.Authorization = "Authorization";
Dt.Cookie = "Cookie";
var me;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(me || (me = {}));
var Te;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(Te || (Te = {}));
let md = class {
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
class vs {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new md(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (be.isRequired(e, "url"), be.isRequired(n, "transferFormat"), be.isIn(n, Te, "transferFormat"), this._url = e, this._logger.log(E.Trace, "(LongPolling transport) Connecting."), n === Te.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = dn(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === Te.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(E.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, s);
    a.statusCode !== 200 ? (this._logger.log(E.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new fn(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[Dt.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[Dt.Authorization] && delete e.headers[Dt.Authorization];
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
          o.statusCode === 204 ? (this._logger.log(E.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(E.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new fn(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(E.Trace, `(LongPolling transport) data received. ${Ln(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(E.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof so ? this._logger.log(E.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(E.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(E.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? wa(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(E.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(E.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = dn();
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
class vd {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (be.isRequired(e, "url"), be.isRequired(n, "transferFormat"), be.isIn(n, Te, "transferFormat"), this._logger.log(E.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== Te.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (Ce.isBrowser || Ce.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), c = {};
        c.Cookie = l;
        const [a, u] = dn();
        c[a] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(E.Trace, `(SSE transport) data received. ${Ln(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
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
    return this._eventSource ? wa(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class _d {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (be.isRequired(e, "url"), be.isRequired(n, "transferFormat"), be.isIn(n, Te, "transferFormat"), this._logger.log(E.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (Ce.isNode) {
        const c = {}, [a, u] = dn();
        c[a] = u, s && (c[Dt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...c, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === Te.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
        this._logger.log(E.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (c) => {
        let a = null;
        typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "There was an error with the transport", this._logger.log(E.Information, `(WebSockets transport) ${a}.`);
      }, o.onmessage = (c) => {
        if (this._logger.log(E.Trace, `(WebSockets transport) data received. ${Ln(c.data, this._logMessageContent)}.`), this.onreceive)
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
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(E.Trace, `(WebSockets transport) sending data. ${Ln(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
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
const _s = 100;
class bd {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, be.isRequired(e, "url"), this._logger = td(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (Ce.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !Ce.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : Ce.isNode && !n.WebSocket && r && (n.WebSocket = r), !Ce.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : Ce.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new ud(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || Te.Binary, be.isIn(e, Te, "transferFormat"), this._logger.log(E.Debug, `Starting connection with transfer format '${Te[e]}'.`), this._connectionState !== "Disconnected")
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
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new uo(this.transport)), this._sendQueue.send(e));
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
        if (this._options.transport === me.WebSockets)
          this.transport = this._constructTransport(me.WebSockets), await this._startTransport(n, e);
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
        } while (r.url && i < _s);
        if (i === _s && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof vs && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(E.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(E.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[Dt.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = dn();
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
      return s instanceof fn && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(E.Error, l), Promise.reject(new Yf(l));
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
          if (this._logger.log(E.Error, `Failed to start the transport '${a.transport}': ${f}`), c = void 0, s.push(new Kf(`${a.transport} failed: ${f}`, me[a.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(E.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new Qf(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case me.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new _d(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case me.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new vd(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case me.LongPolling:
        return new vs(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = me[e.transport];
    if (i == null)
      return this._logger.log(E.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (yd(n, i))
      if (e.transferFormats.map((s) => Te[s]).indexOf(r) >= 0) {
        if (i === me.WebSockets && !this._options.WebSocket || i === me.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(E.Debug, `Skipping transport '${me[i]}' because it is not supported in your environment.'`), new Jf(`'${me[i]}' is not supported in your environment.`, i);
        this._logger.log(E.Debug, `Selecting transport '${me[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(E.Debug, `Skipping transport '${me[i]}' because it does not support the requested transfer format '${Te[r]}'.`), new Error(`'${me[i]}' does not support ${Te[r]}.`);
    else
      return this._logger.log(E.Debug, `Skipping transport '${me[i]}' because it was disabled by the client.`), new Xf(`'${me[i]}' is disabled by the client.`, i);
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
    if (!Ce.isBrowser)
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
function yd(t, e) {
  return !t || (e & t) !== 0;
}
class uo {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Xn(), this._transportResult = new Xn(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new Xn()), this._transportResult.promise;
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
      this._sendBufferedData = new Xn();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : uo._concatBuffers(this._buffer);
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
class Xn {
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
const wd = "json";
class Sd {
  constructor() {
    this.name = wd, this.version = 1, this.transferFormat = Te.Text;
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
    n === null && (n = Hn.instance);
    const r = He.parse(e), i = [];
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
    return He.write(JSON.stringify(e));
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
const Cd = {
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
function Ed(t) {
  const e = Cd[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class kd {
  configureLogging(e) {
    if (be.isRequired(e, "logging"), Td(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = Ed(e);
      this.logger = new vr(n);
    } else
      this.logger = new vr(e);
    return this;
  }
  withUrl(e, n) {
    return be.isRequired(e, "url"), be.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return be.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new ms(e) : this.reconnectPolicy = e : this.reconnectPolicy = new ms(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new bd(this.url, e);
    return co.create(n, this.logger || Hn.instance, this.protocol || new Sd(), this.reconnectPolicy);
  }
}
function Td(t) {
  return t.log !== void 0;
}
var Ad = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
}, In;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})(In || (In = {}));
var bs;
(function(t) {
  t.Send = "Send";
})(bs || (bs = {}));
var ys;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC";
})(ys || (ys = {}));
class Ii {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new Ae(), this._connectionEstablished = new no(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Ae(), this._subscribeRequested = new Ae(), this._handleSubscriptionQueue();
  }
  connect() {
    return Ad(this, void 0, void 0, function* () {
      const e = yield Dn(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Ht(this._connectionEstablished.pipe(On((n) => n), Uf(null)));
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
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(un((o) => o.filter((s) => e.includes(s.identifier))), On((o) => o.length > 0));
    return r.length > 0 ? Rf(Zt(r), i) : i;
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(ut(this._unsub), Df(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(In.SubscribeMany, e), this._subscribedIds.push(...e);
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
      this._sendMessage(In.ChangeModeAsync, !0), this._sendMessage(In.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new kd().withUrl(e, {
      accessTokenFactory: () => this.getAccessTokenAsPromise()
    }).build();
  }
  getAccessTokenAsPromise() {
    return oo(this.accessToken) ? Ht(this.accessToken) : mr.isPromise(this.accessToken) ? this.accessToken : Promise.resolve(this.accessToken);
  }
}
var En = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class r0 {
}
class i0 {
}
class o0 {
}
class ws extends yn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return En(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield ce.post(`${n}/value/manyflat`, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return En(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return ce.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return En(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return ce.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return En(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return ce.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getHistorianUrl() {
    return En(this, void 0, void 0, function* () {
      const e = yield Dn(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Historian}`;
    });
  }
}
var Pi;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(Pi || (Pi = {}));
const Re = Pi;
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
var Ri = function(t, e) {
  return Ri = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Ri(t, e);
};
function fo(t, e) {
  Ri(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function $d(t, e, n, r) {
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
function xd(t, e) {
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
function Kn(t) {
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
function _r(t, e) {
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
function Pt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(_r(arguments[e]));
  return t;
}
function Sa(t) {
  return !!t.useClass;
}
function Oi(t) {
  return !!t.useFactory;
}
var Ca = function() {
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
        return l.apply(void 0, Pt(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function Wt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function Id(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function Ss(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function Pd(t) {
  return typeof t == "function" || t instanceof Ca;
}
function lr(t) {
  return !!t.useToken;
}
function ar(t) {
  return t.useValue != null;
}
function Rd(t) {
  return Sa(t) || ar(t) || lr(t) || Oi(t);
}
var ho = function() {
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
}(), Od = function(t) {
  fo(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(ho), Cs = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function Dd(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function Md(t, e, n) {
  return n === void 0 && (n = "    "), Pt([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function Nd(t, e, n) {
  var r = _r(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = Dd(o, e);
  return Md("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function Ud(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var Hd = function(t) {
  fo(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(ho), Ld = function(t) {
  fo(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(ho), Fd = function() {
  function t() {
    this.preResolution = new Hd(), this.postResolution = new Ld();
  }
  return t;
}(), jd = /* @__PURE__ */ new Map(), Bd = function() {
  function t(e) {
    this.parent = e, this._registry = new Od(), this.interceptors = new Fd(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Re.Transient }), this.ensureNotDisposed();
    var i;
    if (Rd(n) ? i = n : i = { useClass: n }, lr(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + Pt(o, [l]).join(" -> "));
        o.push(l);
        var c = this._registry.get(l);
        c && lr(c.provider) ? s = c.provider : s = null;
      }
    if ((r.lifecycle === Re.Singleton || r.lifecycle == Re.ContainerScoped || r.lifecycle == Re.ResolutionScoped) && (ar(i) || Oi(i)))
      throw new Error('Cannot use lifecycle "' + Re[r.lifecycle] + '" with ValueProviders or FactoryProviders');
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
        }, { lifecycle: Re.Singleton });
      if (n)
        return this.register(e, {
          useClass: n
        }, { lifecycle: Re.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return n && !Wt(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Re.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new Cs()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && Wt(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (Pd(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = Kn(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
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
        for (var l = Kn(this.interceptors.postResolution.getAll(e)), c = l.next(); !c.done; c = l.next()) {
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
    if (this.ensureNotDisposed(), e.options.lifecycle === Re.ResolutionScoped && n.scopedResolutions.has(e))
      return n.scopedResolutions.get(e);
    var r = e.options.lifecycle === Re.Singleton, i = e.options.lifecycle === Re.ContainerScoped, o = r || i, s;
    return ar(e.provider) ? s = e.provider.useValue : lr(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : Sa(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : Oi(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Re.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new Cs()), this.ensureNotDisposed();
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
      for (var r = Kn(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = _r(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(c) {
          return !ar(c.provider);
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
      for (var i = Kn(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = _r(o.value, 2), l = s[0], c = s[1];
        c.some(function(a) {
          var u = a.options;
          return u.lifecycle === Re.ContainerScoped;
        }) && r._registry.setAll(l, c.map(function(a) {
          return a.options.lifecycle === Re.ContainerScoped ? {
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
    return $d(this, void 0, void 0, function() {
      var e;
      return xd(this, function(n) {
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
    if (e instanceof Ca)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = jd.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, Pt([void 0], s)))();
    }();
    return Ud(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, c;
      try {
        return Id(i) ? Ss(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, Pt([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, Pt([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : Ss(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, Pt([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (a) {
        throw new Error(Nd(n, o, a));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), Ea = new Bd();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function X() {
}
function zd(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Vd(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function ka(t) {
  return t();
}
function Es() {
  return /* @__PURE__ */ Object.create(null);
}
function dt(t) {
  t.forEach(ka);
}
function Ta(t) {
  return typeof t == "function";
}
function ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Wd(t) {
  return Object.keys(t).length === 0;
}
function Fe(t, e, n, r) {
  if (t) {
    const i = Aa(t, e, n, r);
    return t[0](i);
  }
}
function Aa(t, e, n, r) {
  return t[1] && r ? zd(n.ctx.slice(), t[1](r(e))) : n.ctx;
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
function Be(t, e, n, r, i, o) {
  if (i) {
    const s = Aa(e, n, r, o);
    t.p(s, i);
  }
}
function ze(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function le(t) {
  return t ?? "";
}
function x(t, e) {
  t.appendChild(e);
}
function Bt(t, e, n) {
  const r = qd(t);
  if (!r.getElementById(e)) {
    const i = P("style");
    i.id = e, i.textContent = n, Gd(r, i);
  }
}
function qd(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Gd(t, e) {
  return x(t.head || t, e), e.sheet;
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function kt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function P(t) {
  return document.createElement(t);
}
function F(t) {
  return document.createTextNode(t);
}
function H() {
  return F(" ");
}
function Or() {
  return F("");
}
function oe(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function C(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Jd(t) {
  return Array.from(t.childNodes);
}
function ye(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function br(t, e) {
  t.value = e ?? "";
}
function Di(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Xd(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Fn;
function at(t) {
  Fn = t;
}
function wn() {
  if (!Fn)
    throw new Error("Function called outside component initialization");
  return Fn;
}
function $a(t) {
  wn().$$.on_mount.push(t);
}
function Tt(t) {
  wn().$$.on_destroy.push(t);
}
function Ge() {
  const t = wn();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Xd(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function _t(t, e) {
  return wn().$$.context.set(t, e), e;
}
function De(t) {
  return wn().$$.context.get(t);
}
const Kt = [], he = [];
let en = [];
const Mi = [], Kd = /* @__PURE__ */ Promise.resolve();
let Ni = !1;
function Yd() {
  Ni || (Ni = !0, Kd.then(po));
}
function Ui(t) {
  en.push(t);
}
function tn(t) {
  Mi.push(t);
}
const oi = /* @__PURE__ */ new Set();
let qt = 0;
function po() {
  if (qt !== 0)
    return;
  const t = Fn;
  do {
    try {
      for (; qt < Kt.length; ) {
        const e = Kt[qt];
        qt++, at(e), Qd(e.$$);
      }
    } catch (e) {
      throw Kt.length = 0, qt = 0, e;
    }
    for (at(null), Kt.length = 0, qt = 0; he.length; )
      he.pop()();
    for (let e = 0; e < en.length; e += 1) {
      const n = en[e];
      oi.has(n) || (oi.add(n), n());
    }
    en.length = 0;
  } while (Kt.length);
  for (; Mi.length; )
    Mi.pop()();
  Ni = !1, oi.clear(), at(t);
}
function Qd(t) {
  if (t.fragment !== null) {
    t.update(), dt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ui);
  }
}
function Zd(t) {
  const e = [], n = [];
  en.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), en = e;
}
const cr = /* @__PURE__ */ new Set();
let Ot;
function pe() {
  Ot = {
    r: 0,
    c: [],
    p: Ot
    // parent group
  };
}
function ge() {
  Ot.r || dt(Ot.c), Ot = Ot.p;
}
function T(t, e) {
  t && t.i && (cr.delete(t), t.i(e));
}
function I(t, e, n, r) {
  if (t && t.o) {
    if (cr.has(t))
      return;
    cr.add(t), Ot.c.push(() => {
      cr.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function yr(t, e) {
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
      d !== o && f && (pe(), I(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), ge());
    }) : e.block.d(1), a.c(), T(a, 1), a.m(e.mount(), e.anchor), u = !0), e.block = a, e.blocks && (e.blocks[o] = a), u && po();
  }
  if (Vd(t)) {
    const i = wn();
    if (t.then((o) => {
      at(i), r(e.then, 1, e.value, o), at(null);
    }, (o) => {
      if (at(i), r(e.catch, 2, e.error, o), at(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function xa(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function nn(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function V(t) {
  t && t.c();
}
function j(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || Ui(() => {
    const s = t.$$.on_mount.map(ka).filter(Ta);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : dt(s), t.$$.on_mount = [];
  }), o.forEach(Ui);
}
function B(t, e) {
  const n = t.$$;
  n.fragment !== null && (Zd(n.after_update), dt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function eh(t, e) {
  t.$$.dirty[0] === -1 && (Kt.push(t), Yd(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function fe(t, e, n, r, i, o, s, l = [-1]) {
  const c = Fn;
  at(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: X,
    not_equal: i,
    bound: Es(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Es(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, d, ...p) => {
    const b = p.length ? p[0] : d;
    return a.ctx && i(a.ctx[f], a.ctx[f] = b) && (!a.skip_bound && a.bound[f] && a.bound[f](b), u && eh(t, f)), d;
  }) : [], a.update(), u = !0, dt(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Jd(e.target);
      a.fragment && a.fragment.l(f), f.forEach(R);
    } else
      a.fragment && a.fragment.c();
    e.intro && T(t.$$.fragment), j(t, e.target, e.anchor, e.customElement), po();
  }
  at(c);
}
class de {
  $destroy() {
    B(this, 1), this.$destroy = X;
  }
  $on(e, n) {
    if (!Ta(n))
      return X;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Wd(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const th = {
  [Mn.toString()]: "TenantHttpService",
  [xi.toString()]: "DataSourceHttpService",
  [Lt.toString()]: "EntityHttpService",
  [Nn.toString()]: "EntityNameService",
  [yn.toString()]: "BaseHttpService",
  [Ii.toString()]: "LiveValueService"
};
function Ie(t, e = null) {
  let n = th[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? Ea;
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
function mt(t, e, n = !0) {
  const r = window.dependencyContainer ?? Ea;
  try {
    if (r.isRegistered(t) && !n)
      return;
    r.registerInstance(t, e);
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
  return e;
}
function go(...t) {
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
const Ia = new no(!1), nh = Ia.asObservable().pipe(On((t) => !t), Nf(1)), ks = {}, mo = /* @__PURE__ */ new Map(), vo = new Ae();
vo.asObservable();
function rh(t) {
  mo.set(t.name, t), vo.next({
    type: "add",
    store: t
  });
}
function ih(t) {
  mo.delete(t.name), vo.next({
    type: "remove",
    store: t
  });
}
function oh() {
  return mo;
}
class _o extends no {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), rh(this);
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
    ks.preStoreUpdate && (r = ks.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, Ia.getValue() ? this.batchInProgress || (this.batchInProgress = !0, nh.subscribe(() => {
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
    ih(this), this.reset();
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
function sh(t, ...e) {
  const {
    state: n,
    config: r
  } = go(...e), {
    name: i
  } = t;
  return new _o({
    name: i,
    state: n,
    config: r
  });
}
function bo(t) {
  return {
    props: t,
    config: void 0
  };
}
function lh(t, e) {
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
      initialized$: Zt(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new Ql(1), l = jt(o.getItem(i.key)).subscribe((a) => {
    a && t.update((u) => i.preStoreInit(Object.assign({}, u, a))), s.next(!0), s.complete();
  }), c = i.source(t).pipe(zf(1), _a((a) => o.setItem(i.key, a))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      c.unsubscribe(), l.unsubscribe();
    }
  };
}
function ah(t) {
  if (t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return Zt(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), Zt(!0);
      },
      removeItem(e) {
        return t.removeItem(e), Zt(!0);
      }
    };
}
const ch = ah(typeof localStorage < "u" ? localStorage : void 0), Gt = [];
function wr(t, e = X) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (ue(t, l) && (t = l, n)) {
      const c = !Gt.length;
      for (const a of r)
        a[1](), Gt.push(a, t);
      if (c) {
        for (let a = 0; a < Gt.length; a += 2)
          Gt[a][0](Gt[a + 1]);
        Gt.length = 0;
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
const Ts = wr(J.Signal), { config: uh, state: fh } = go(
  bo({
    queryWithSubGroups: !0,
    selectedTenant: null,
    pageSize: 10
  })
), Mt = sh({ name: "entity-select-selection" }, bo({
  selectedEntities: []
})), Nt = new _o({ state: fh, config: uh, name: "entity-select-global" });
lh(Nt, {
  key: "entity-select-global",
  storage: ch
});
const hn = (t) => {
  const e = oh().get(`entity-select-type-${Ts}`);
  if (e)
    return e;
  const { state: n, config: r } = go(
    bo({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new _o({ state: n, config: r, name: `entity-select-type-${Ts}` });
};
function As(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function dh(t) {
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
function hh(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? gh : ph
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
function ph(t) {
  let e, n, r, i;
  return {
    c() {
      e = P("span"), n = F("chevron_right"), C(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), x(e, n), r || (i = oe(
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
function gh(t) {
  let e, n, r, i;
  return {
    c() {
      e = P("span"), n = F("expand_more"), C(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      O(o, e, s), x(e, n), r || (i = oe(
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
function $s(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = xs(As(t, s, a));
  const c = (a) => I(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = P("div"), n = P("div"), r = H(), i = P("div");
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
      O(a, e, u), x(e, n), x(e, r), x(e, i);
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
          const d = As(a, s, f);
          l[f] ? (l[f].p(d, u), T(l[f], 1)) : (l[f] = xs(d), l[f].c(), T(l[f], 1), l[f].m(i, null));
        }
        for (pe(), f = s.length; f < l.length; f += 1)
          c(f);
        ge();
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
      a && R(e), kt(l, a);
    }
  };
}
function xs(t) {
  let e, n;
  return e = new Pa({
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
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function mh(t) {
  var $, y;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((y = ($ = t[1]) == null ? void 0 : $.Name) == null ? void 0 : y.Value) + ""
  ), c, a, u, f, d;
  function p(_, v) {
    return (
      /*children*/
      _[4].length > 0 ? hh : dh
    );
  }
  let b = p(t), h = b(t), m = (
    /*expanded*/
    t[0] && $s(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), r = P("div"), i = H(), h.c(), o = H(), s = P("div"), c = F(l), a = H(), m && m.c(), C(
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
    m(_, v) {
      O(_, e, v), x(e, n), x(n, r), x(n, i), h.m(n, null), x(n, o), x(n, s), x(s, c), x(e, a), m && m.m(e, null), u = !0, f || (d = oe(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), f = !0);
    },
    p(_, [v]) {
      var g, A;
      b === (b = p(_)) && h ? h.p(_, v) : (h.d(1), h = b(_), h && (h.c(), h.m(n, o))), (!u || v & /*group*/
      2) && l !== (l = /*group*/
      ((A = (g = _[1]) == null ? void 0 : g.Name) == null ? void 0 : A.Value) + "") && ye(c, l), /*expanded*/
      _[0] ? m ? (m.p(_, v), v & /*expanded*/
      1 && T(m, 1)) : (m = $s(_), m.c(), T(m, 1), m.m(e, null)) : m && (pe(), I(m, 1, 1, () => {
        m = null;
      }), ge());
    },
    i(_) {
      u || (T(m), u = !0);
    },
    o(_) {
      I(m), u = !1;
    },
    d(_) {
      _ && R(e), h.d(), m && m.d(), f = !1, d();
    }
  };
}
function vh(t, e, n) {
  const r = Ie(Lt);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, c = De("tw"), a = [], u = new Ae(), f = hn();
  f.pipe(ut(u), Ff("selectedGroup")).subscribe((y) => {
    var _, v;
    (_ = y.selectedGroup) == null || _.Id, i == null || i.Id, i && ((v = y.selectedGroup) != null && v.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, a = await (await r.queryConfiguration(J.Group, { GroupId: i.Id })).data);
    } catch (y) {
      console.error(y);
    }
  }
  function p() {
    n(0, o = !o);
  }
  function b() {
    f.update((y) => ({ ...y, selectedGroup: i }));
  }
  Tt(() => {
    u.next(), u.complete();
  });
  const h = () => p(), m = () => p(), $ = () => b();
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
    p,
    b,
    h,
    m,
    $
  ];
}
class Pa extends de {
  constructor(e) {
    super(), fe(this, e, vh, mh, ue, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function _h(t) {
  Bt(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function bh(t) {
  let e;
  return {
    c() {
      e = F(
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
function yh(t) {
  let e, n, r, i, o, s, l, c, a, u;
  const f = (
    /*#slots*/
    t[11].default
  ), d = Fe(
    f,
    t,
    /*$$scope*/
    t[10],
    null
  ), p = d || bh(t);
  return {
    c() {
      e = P("div"), n = P("div"), i = H(), o = P("span"), p && p.c(), C(n, "class", le(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), C(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), C(o, "class", le(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none`
      ) + " svelte-1b4yyah"), C(e, "class", s = le(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), C(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(b, h) {
      O(b, e, h), x(e, n), x(e, i), x(e, o), p && p.m(o, null), c = !0, a || (u = [
        oe(
          e,
          "mousedown",
          /*mousedown_handler*/
          t[12]
        ),
        oe(
          e,
          "mouseup",
          /*mouseup_handler*/
          t[13]
        ),
        oe(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[14]
        ),
        oe(
          e,
          "click",
          /*click_handler*/
          t[15]
        ),
        oe(e, "blur", wh)
      ], a = !0);
    },
    p(b, [h]) {
      (!c || h & /*active*/
      16 && r !== (r = /*active*/
      b[4] ? "width: 100% !important; height: 100% !important" : "")) && C(n, "style", r), d ? d.p && (!c || h & /*$$scope*/
      1024) && Be(
        d,
        f,
        b,
        /*$$scope*/
        b[10],
        c ? je(
          f,
          /*$$scope*/
          b[10],
          h,
          null
        ) : ze(
          /*$$scope*/
          b[10]
        ),
        null
      ) : p && p.p && (!c || h & /*icon*/
      1) && p.p(b, c ? h : -1), (!c || h & /*className*/
      2 && s !== (s = le(
        /*tw*/
        b[5]`container group ${/*className*/
        b[1]}`
      ) + " svelte-1b4yyah")) && C(e, "class", s), (!c || h & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      b[3] + "px; width: " + /*absoluteSize*/
      b[3] + "px; " + /*disabled*/
      (b[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && C(e, "style", l);
    },
    i(b) {
      c || (T(p, b), c = !0);
    },
    o(b) {
      I(p, b), c = !1;
    },
    d(b) {
      b && R(e), p && p.d(b), a = !1, dt(u);
    }
  };
}
const wh = (t) => {
};
function Sh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: c = !1 } = e, a = De("tw"), u, f, d, p = Ge();
  function b(g) {
    c || (n(4, f = !0), d = g.timeStamp);
  }
  function h(g) {
    const A = g.timeStamp - d;
    A < 300 ? setTimeout(
      () => {
        n(4, f = !1);
      },
      300 - A
    ) : n(4, f = !1);
  }
  function m(g) {
    c || p("click", g);
  }
  const $ = (g) => b(g), y = (g) => h(g), _ = (g) => h(g), v = (g) => m(g);
  return t.$$set = (g) => {
    "icon" in g && n(0, o = g.icon), "size" in g && n(9, s = g.size), "className" in g && n(1, l = g.className), "disabled" in g && n(2, c = g.disabled), "$$scope" in g && n(10, i = g.$$scope);
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
    b,
    h,
    m,
    s,
    i,
    r,
    $,
    y,
    _,
    v
  ];
}
class wt extends de {
  constructor(e) {
    super(), fe(
      this,
      e,
      Sh,
      yh,
      ue,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      _h
    );
  }
}
function Ch(t) {
  let e, n, r, i, o, s, l, c, a;
  return {
    c() {
      e = P("div"), n = P("input"), i = H(), o = P("div"), s = F(
        /*label*/
        t[1]
      ), C(n, "type", "checkbox"), C(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), C(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      O(u, e, f), x(e, n), t[7](n), x(e, i), x(e, o), x(o, s), c || (a = [
        oe(
          n,
          "click",
          /*click_handler*/
          t[8]
        ),
        oe(
          e,
          "click",
          /*click_handler_1*/
          t[9]
        )
      ], c = !0);
    },
    p(u, [f]) {
      f & /*tw*/
      4 && r !== (r = /*tw*/
      u[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && C(n, "class", r), f & /*label*/
      2 && ye(
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
      u && R(e), t[7](null), c = !1, dt(a);
    }
  };
}
function Eh(t, e, n) {
  let { readonly: r = !1 } = e, { label: i = "" } = e, { checked: o = !1 } = e, { indeterminate: s = !1 } = e, { tw: l = De("tw") } = e, c = Ge(), a;
  function u(h) {
    r || (n(5, o = !o), console.log("checked", o), c("change", { checked: o }));
  }
  function f(h) {
    setTimeout(() => {
      (a == null ? void 0 : a.checked) !== h && n(3, a.checked = h, a);
    });
  }
  function d(h) {
    he[h ? "unshift" : "push"](() => {
      a = h, n(3, a), n(5, o), n(6, s), n(11, f);
    });
  }
  const p = (h) => r ? h.preventDefault() : {}, b = (h) => u();
  return t.$$set = (h) => {
    "readonly" in h && n(0, r = h.readonly), "label" in h && n(1, i = h.label), "checked" in h && n(5, o = h.checked), "indeterminate" in h && n(6, s = h.indeterminate), "tw" in h && n(2, l = h.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked, indeterminate, checkboxElement*/
    104 && (console.log("checked", o), s && a && !o ? n(3, a.indeterminate = !0, a) : a && (n(3, a.indeterminate = !1, a), f(o)));
  }, [
    r,
    i,
    l,
    a,
    u,
    o,
    s,
    d,
    p,
    b
  ];
}
class Wn extends de {
  constructor(e) {
    super(), fe(this, e, Eh, Ch, ue, {
      readonly: 0,
      label: 1,
      checked: 5,
      indeterminate: 6,
      tw: 2
    });
  }
}
function Is(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function kh(t) {
  let e;
  return {
    c() {
      e = F("edit");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Ps(t) {
  let e, n, r;
  return n = new Pa({
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
      e = P("div"), V(n.$$.fragment), C(
        e,
        "class",
        /*tw*/
        t[7]`flex-[2] overflow-auto`
      );
    },
    m(i, o) {
      O(i, e, o), j(n, e, null), r = !0;
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
      i && R(e), B(n);
    }
  };
}
function Rs(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ds(Is(t, r, s));
  const o = (s) => I(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Or();
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
          const a = Is(s, r, c);
          i[c] ? (i[c].p(a, l), T(i[c], 1)) : (i[c] = Ds(a), i[c].c(), T(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (pe(), c = r.length; c < i.length; c += 1)
          o(c);
        ge();
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
      kt(i, s), s && R(e);
    }
  };
}
function Os(t) {
  let e, n;
  return e = new Wn({
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
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function Th(t) {
  return { c: X, m: X, p: X, d: X };
}
function Ah(t) {
  let e = (
    /*name*/
    t[21] + ""
  ), n;
  return {
    c() {
      n = F(e);
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
function $h(t) {
  return { c: X, m: X, p: X, d: X };
}
function Ds(t) {
  let e, n, r, i, o, s, l, c = (
    /*selectMultiple*/
    t[2] && Os(t)
  ), a = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: $h,
    then: Ah,
    catch: Th,
    value: 21
  };
  yr(r = /*nameService*/
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
      e = P("div"), c && c.c(), n = H(), a.block.c(), i = H(), C(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      O(f, e, d), c && c.m(e, null), x(e, n), a.block.m(e, a.anchor = null), a.mount = () => e, a.anchor = i, x(e, i), o = !0, s || (l = oe(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? c ? (c.p(t, d), d & /*selectMultiple*/
      4 && T(c, 1)) : (c = Os(t), c.c(), T(c, 1), c.m(e, n)) : c && (pe(), I(c, 1, 1, () => {
        c = null;
      }), ge()), a.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && yr(r, a) || xa(a, t, d);
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
function xh(t) {
  var y;
  let e, n, r = (
    /*selectedTenant*/
    ((y = t[1]) == null ? void 0 : y.Name) + ""
  ), i, o, s, l, c, a, u, f, d, p, b, h;
  s = new wt({
    props: {
      size: "small",
      $$slots: { default: [kh] },
      $$scope: { ctx: t }
    }
  });
  let m = (
    /*rootGroup*/
    t[3] && Ps(t)
  ), $ = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && Rs(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = F(r), o = H(), V(s.$$.fragment), l = H(), m && m.c(), c = H(), a = P("div"), u = P("div"), f = F("Zuletzt ausgewählt"), d = H(), $ && $.c(), C(
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
    m(_, v) {
      O(_, e, v), x(e, n), x(n, i), x(n, o), j(s, n, null), x(e, l), m && m.m(e, null), x(e, c), x(e, a), x(a, u), x(u, f), x(a, d), $ && $.m(a, null), p = !0, b || (h = oe(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), b = !0);
    },
    p(_, [v]) {
      var A;
      (!p || v & /*selectedTenant*/
      2) && r !== (r = /*selectedTenant*/
      ((A = _[1]) == null ? void 0 : A.Name) + "") && ye(i, r);
      const g = {};
      v & /*$$scope*/
      4194304 && (g.$$scope = { dirty: v, ctx: _ }), s.$set(g), /*rootGroup*/
      _[3] ? m ? (m.p(_, v), v & /*rootGroup*/
      8 && T(m, 1)) : (m = Ps(_), m.c(), T(m, 1), m.m(e, c)) : m && (pe(), I(m, 1, 1, () => {
        m = null;
      }), ge()), /*lastSelectedEntities*/
      _[4] && /*lastSelectedEntities*/
      _[4].length > 0 ? $ ? ($.p(_, v), v & /*lastSelectedEntities*/
      16 && T($, 1)) : ($ = Rs(_), $.c(), T($, 1), $.m(a, null)) : $ && (pe(), I($, 1, 1, () => {
        $ = null;
      }), ge());
    },
    i(_) {
      p || (T(s.$$.fragment, _), T(m), T($), p = !0);
    },
    o(_) {
      I(s.$$.fragment, _), I(m), I($), p = !1;
    },
    d(_) {
      _ && R(e), B(s), m && m.d(), $ && $.d(), b = !1, h();
    }
  };
}
function Ih(t, e, n) {
  let r = Ie(Lt), i = Ie(Nn), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, c = De("tw"), a = null, u, f = [], d = {}, p = Ge(), b = new Ae(), h = hn();
  h.pipe(ut(b)).subscribe((g) => {
    n(4, u = g.lastSelectedEntities);
  });
  const m = Mt.subscribe((g) => {
    f = g.selectedEntities, n(5, d = {});
    for (let A of f)
      n(5, d[A.Id] = !0, d);
  });
  async function $(g) {
    var A;
    try {
      n(3, a = await r.getEntityById(J.Group, g)), (!((A = h.value) != null && A.selectedGroup) || h.value.selectedGroup.Id != a.Id) && h.update((w) => ({ ...w, selectedGroup: a }));
    } catch (w) {
      console.log(w);
    }
  }
  async function y(g) {
    let A = await r.getEntityById(o, g);
    l ? d[g] ? f = f.filter((w) => w.Id !== g) : f.push(A) : f = [A], Mt.update((w) => ({ ...w, selectedEntities: f }));
  }
  Tt(() => {
    console.log("onDestroy"), m.unsubscribe();
  });
  const _ = () => p("changeTenant"), v = (g) => y(g);
  return t.$$set = (g) => {
    "entityType" in g && n(0, o = g.entityType), "selectedTenant" in g && n(1, s = g.selectedTenant), "selectMultiple" in g && n(2, l = g.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*selectedTenant*/
    2 && (console.log("building sidebar", s), s && s.Root && $(s.Root));
  }, [
    o,
    s,
    l,
    a,
    u,
    d,
    i,
    c,
    p,
    y,
    _,
    v
  ];
}
class Ph extends de {
  constructor(e) {
    super(), fe(this, e, Ih, xh, ue, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const Rh = (t) => ({}), Ms = (t) => ({});
function Oh(t) {
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
  ), c = Fe(
    l,
    t,
    /*$$scope*/
    t[1],
    Ms
  );
  return {
    c() {
      e = P("div"), n = P("div"), s && s.c(), r = H(), c && c.c(), C(n, "class", "w-full overflow-auto flex-1"), C(e, "class", "flex flex-col h-full");
    },
    m(a, u) {
      O(a, e, u), x(e, n), s && s.m(n, null), x(e, r), c && c.m(e, null), i = !0;
    },
    p(a, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      2) && Be(
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
        ) : ze(
          /*$$scope*/
          a[1]
        ),
        null
      ), c && c.p && (!i || u & /*$$scope*/
      2) && Be(
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
          Rh
        ) : ze(
          /*$$scope*/
          a[1]
        ),
        Ms
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
function Dh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = Ge(), l = wr(o);
  _t("audako:table:sort", l);
  let c = l.subscribe((a) => {
    s("sort", a);
  });
  return Tt(() => {
    c();
  }), t.$$set = (a) => {
    "startSort" in a && n(0, o = a.startSort), "$$scope" in a && n(1, i = a.$$scope);
  }, [o, i, r];
}
class Mh extends de {
  constructor(e) {
    super(), fe(this, e, Dh, Oh, ue, { startSort: 0 });
  }
}
function Nh(t) {
  Bt(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function Uh(t) {
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
      e = P("div"), i && i.c(), C(e, "class", "audako-tableheader-flexrow");
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
        n ? je(
          r,
          /*$$scope*/
          o[1],
          s,
          null
        ) : ze(
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
function Hh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    he[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class Lh extends de {
  constructor(e) {
    super(), fe(this, e, Hh, Uh, ue, {}, Nh);
  }
}
function Fh(t) {
  Bt(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function Ns(t) {
  let e, n, r;
  return {
    c() {
      e = P("span"), n = F("north"), C(e, "class", "material-symbols-rounded text-xs transition-all"), C(e, "style", r = /*sortDirection*/
      (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(i, o) {
      O(i, e, o), x(e, n);
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
function jh(t) {
  let e, n, r, i, o, s, l;
  const c = (
    /*#slots*/
    t[6].default
  ), a = Fe(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let u = (
    /*sortable*/
    t[0] && Ns(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), a && a.c(), r = H(), u && u.c(), C(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      O(f, e, d), x(e, n), a && a.m(n, null), x(e, r), u && u.m(e, null), o = !0, s || (l = oe(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(f, [d]) {
      a && a.p && (!o || d & /*$$scope*/
      32) && Be(
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
        ) : ze(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*sortable*/
      f[0] ? u ? u.p(f, d) : (u = Ns(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
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
function Bh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, c = "asc", a = De("audako:table:sort");
  console.log(a);
  let u = a.subscribe((p) => {
    s && (p == null ? void 0 : p.active) === s ? n(2, c = p.direction) : n(2, c = null);
  });
  function f() {
    c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), a.set(c ? { active: s, direction: c } : null);
  }
  Tt(() => {
    u();
  });
  const d = () => f();
  return t.$$set = (p) => {
    "sortable" in p && n(0, o = p.sortable), "id" in p && n(4, s = p.id), "container$class" in p && n(1, l = p.container$class), "$$scope" in p && n(5, i = p.$$scope);
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
class Hi extends de {
  constructor(e) {
    super(), fe(this, e, Bh, jh, ue, { sortable: 0, id: 4, container$class: 1 }, Fh);
  }
}
function zh(t) {
  Bt(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function Vh(t) {
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
      e = P("div"), l && l.c(), C(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(c, a) {
      O(c, e, a), l && l.m(e, null), r = !0, i || (o = oe(
        e,
        "click",
        /*onClick*/
        t[1]
      ), i = !0);
    },
    p(c, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      4) && Be(
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
        ) : ze(
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
function Wh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = Ge();
  function l(c) {
    s("click", c);
  }
  return t.$$set = (c) => {
    "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
  }, [o, l, i, r];
}
class qh extends de {
  constructor(e) {
    super(), fe(this, e, Wh, Vh, ue, { flexrow$class: 0 }, zh);
  }
}
function Gh(t) {
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
      e = P("div"), o && o.c(), C(e, "class", n = /*tw*/
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
        r ? je(
          i,
          /*$$scope*/
          s[2],
          l,
          null
        ) : ze(
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
function Jh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = De("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class Li extends de {
  constructor(e) {
    super(), fe(this, e, Jh, Gh, ue, { container$class: 0 });
  }
}
var Yn, Xh = new Uint8Array(16);
function Kh() {
  if (!Yn && (Yn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Yn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Yn(Xh);
}
const Yh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Qh(t) {
  return typeof t == "string" && Yh.test(t);
}
var Se = [];
for (var si = 0; si < 256; ++si)
  Se.push((si + 256).toString(16).substr(1));
function Zh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Se[t[e + 0]] + Se[t[e + 1]] + Se[t[e + 2]] + Se[t[e + 3]] + "-" + Se[t[e + 4]] + Se[t[e + 5]] + "-" + Se[t[e + 6]] + Se[t[e + 7]] + "-" + Se[t[e + 8]] + Se[t[e + 9]] + "-" + Se[t[e + 10]] + Se[t[e + 11]] + Se[t[e + 12]] + Se[t[e + 13]] + Se[t[e + 14]] + Se[t[e + 15]]).toLowerCase();
  if (!Qh(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function ep(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || Kh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return Zh(r);
}
const tp = {
  backdrop: !0,
  positioning: "center",
  closeOnClickOutside: !0,
  closeOnEscape: !0,
  anchorElement: null,
  customPosition: {
    x: 0,
    y: 0
  }
};
class Sr {
  constructor(e) {
    Qe(this, "_popupContainer");
    Qe(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...tp, ...r }, console.log("openPopup", r);
    const i = ep(), o = new Ae(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
    r.inTransitionClassList && (l.style.transition = `all ${r.inTransitionDuration ?? 100}ms`, l.classList.add(r.inTransitionClassList)), s.appendChild(l);
    let c = null;
    const a = () => {
      console.log("close"), this._removePopupWrapper(l, r), o.next(null), o.complete(), document.removeEventListener("keydown", c);
    };
    return c = (f) => {
      console.log("closeOnEscapeRef", f), f.key === "Escape" && a();
    }, r.closeOnClickOutside && s.addEventListener("click", (f) => {
      f.target === s && a();
    }), r.closeOnEscape && document.addEventListener("keydown", c), this._positionPopup(s, l, r), n.style.visibility = "visible", r.inTransitionClassList && (n.classList.add(r.inTransitionClassList), n.style.transition = `all ${r.inTransitionDuration ?? 100}ms`), {
      popupId: i,
      afterClosed: Ht(o).then(() => console.log("afterClosed")),
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
var np = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function rp(t) {
  return np.get(t);
}
function ip(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function op(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var re = (t, e) => !!~t.indexOf(e), q = (t, e = "-") => t.join(e), Fi = (t, e) => q(t.filter(Boolean), e), W = (t, e = 1) => t.slice(e), sp = (t) => t, Ra = () => {
}, et = (t) => t[0].toUpperCase() + W(t), yo = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Ut = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, Oa = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, Da = (t, e) => !re("@:&", t[0]) && (re("rg", (typeof e)[5]) || Array.isArray(e)), wo = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Ut(e[i], n);
  return Da(i, o) ? r[yo(i)] = o : r[i] = i[0] == "@" && re("figa", i[1]) ? (r[i] || []).concat(o) : wo(r[i] || {}, o, n), r;
}, t) : t, Ma = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), Dr = (t) => (Array.isArray(t) || (t = [t]), "@media " + q(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || q(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), li = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, lp = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, ft, rn, bt = (t = "") => (ft.push(t), ""), So = (t) => {
  ft.length = Math.max(ft.lastIndexOf("") + ~~t, 0);
}, ap = (t) => t && !re("!:", t[0]), cp = (t) => t[0] == ":", Na = (t, e) => {
  rn.push({
    v: ft.filter(cp),
    d: t,
    n: e,
    i: re(ft, "!"),
    $: ""
  });
}, Us = (t) => {
  const e = t[0] == "-";
  e && (t = W(t));
  const n = q(ft.filter(ap));
  return Na(t == "&" ? n : (n && n + "-") + t, e), "";
}, Pn = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && bt(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && bt(n), bt();
        break;
      case "!":
        bt(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && Us(n), So(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? bt(":" + n) : n.slice(-1) == "-" ? bt(n.slice(0, -1)) : Us(n));
}, Ua = (t) => {
  bt(), Cr(t), So();
}, up = (t, e) => {
  if (e) {
    bt();
    const n = re("tbu", (typeof e)[1]);
    Pn(t, n), n && Ua(e), So();
  }
}, Cr = (t) => {
  switch (typeof t) {
    case "string":
      Pn(t);
      break;
    case "function":
      Na(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(Ua) : t && Object.keys(t).forEach((e) => {
        up(e, t[e]);
      });
  }
}, Hs = /* @__PURE__ */ new WeakMap(), fp = (t) => {
  let e = Hs.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || re(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (c) => {
          o == n && (r = ""), r += i, re("rg", (typeof c)[5]) ? r += c : c && (Pn(r), r = "", Cr(c)), o == t.length - 1 && Pn(r);
        };
      const s = rn = [];
      Pn(i);
      const l = [...ft];
      return rn = [], (c) => {
        rn.push(...s), ft = [...l], c && Cr(c);
      };
    }), Hs.set(t, e);
  }
  return e;
}, ji = (t) => (ft = [], rn = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? fp(t[0]).forEach((e, n) => e(t[n + 1])) : Cr(t), rn), Bi, dp = (t, e) => (typeof e == "function" && (Bi = !1), e), hp = (t) => {
  Bi = !0;
  const e = JSON.stringify(t, dp);
  return Bi && e;
}, Ls = /* @__PURE__ */ new WeakMap(), pp = (t, e) => {
  const n = hp(e);
  let r;
  if (n) {
    var i = Ls.get(t);
    i || Ls.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Ut(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), Oa(i, 1e4))), r;
}, gp = (t, { css: e }) => e(ji(t)), mp = (...t) => pp(gp, t), Ha = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[Fi([r, l, i])] = e, s), {});
  }
}, vp = /* @__PURE__ */ Ha((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), Er = (t) => {
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
}, La = /* @__PURE__ */ Ha(Er), _p = (t, e) => t + (e[1] == ":" ? W(e, 2) + ":" : W(e)) + ":", Fs = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(_p, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, k, Rt, Y, Qn = (t) => t == "cols" ? "columns" : "rows", qn = (t) => (e, n, r) => ({
  [t]: r + ((k = q(e)) && "-" + k)
}), ae = (t, e) => (n, r, i) => (k = q(n, e)) && {
  [t || i]: k
}, ke = (t) => (e, { theme: n }, r) => (k = n(t || r, e)) && {
  [t || r]: k
}, Zn = (t, e) => (n, { theme: r }, i) => (k = r(t || i, n, q(n, e))) && {
  [t || i]: k
}, Ze = (t, e) => (n, r) => t(n, r, e), st = qn("display"), kn = qn("position"), Jt = qn("textTransform"), Xt = qn("textDecoration"), er = qn("fontStyle"), pt = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), tr = (t, { theme: e }, n) => (k = e("inset", t)) && { [n]: k }, xn = (t, e, n, r = n) => (k = e(r + "Opacity", W(t))) && {
  [`--tw-${n}-opacity`]: k
}, ai = (t, e) => Math.round(parseInt(t, 16) * e), kr = (t, e, n) => t && t[0] == "#" && (k = (t.length - 1) / 3) && (Y = [17, 1, 0.062272][k - 1]) ? `rgba(${ai(t.substr(1, k), Y)},${ai(t.substr(1 + k, k), Y)},${ai(t.substr(1 + 2 * k, k), Y)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, ur = (t, e, n) => n && typeof n == "string" ? (k = kr(n, e + "-opacity")) && k !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, k]
} : { [t]: n } : void 0, js = (t) => (Y = kr(t, "", "0")) == k ? "transparent" : Y, Bs = (t, { theme: e }, n, r, i, o) => (k = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (Y = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [Y]: "1"
} : {
  [Y]: "0",
  [Fi([i, k[0], o])]: (Rt = e(r, W(t))) && `calc(${Rt} * var(${Y}))`,
  [Fi([i, k[1], o])]: Rt && [Rt, `calc(${Rt} * calc(1 - var(${Y})))`]
} : void 0, Fa = (t, e) => e[0] && {
  [t]: (re("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, ci = (t) => (e) => re(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : Fa(t, e), zs = (t) => (e, { theme: n }) => {
  if (k = n("grid" + et(t), e, ""))
    return { ["grid-" + t]: k };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return (k = n("grid" + et(t) + et(e[0]), W(e), q(W(e)))) && {
        [`grid-${t}-${e[0]}`]: k
      };
  }
}, ja = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return ae("borderStyle")(t);
    case "collapse":
    case "separate":
      return ae("borderCollapse")(t);
    case "opacity":
      return xn(t, e, n);
  }
  return (k = e(n + "Width", t, "")) ? { borderWidth: k } : ur("borderColor", n, e(n + "Color", t));
}, bp = (t, e, n) => {
  var r;
  const i = (r = Er(t[0])) == null ? void 0 : r.map(et);
  i && (t = W(t));
  let o = ja(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, c]) => {
    if (l.startsWith("border"))
      for (const a of i)
        s[l.slice(0, 6) + a + l.slice(6)] = c;
    else
      s[l] = c;
    return s;
  }, {})), o;
}, zi = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", ui = (t, e, n) => t[0] && (k = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && k,
  [`--tw-${n}-y`]: t[0] !== "x" && k,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${k})`, zi()]
}, Ba = (t) => (e, n, r) => r[1] ? La(n.theme(t, e), r[1], t) : ke(t)(e, n, r), $t = Ba("padding"), xt = Ba("margin"), Vs = (t, { theme: e }, n) => (k = { w: "width", h: "height" }[t[0]]) && {
  [k = `${n}${et(k)}`]: e(k, W(t))
}, Xe = (t, { theme: e }, n) => {
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
  return Y = t.shift(), re(["hue", "drop"], Y) && (Y += et(t.shift())), (k = e(i ? "backdrop" + et(Y) : Y, t)) && {
    ["--tw-" + i + Y]: (Array.isArray(k) ? k : [k]).map((o) => `${yo(Y)}(${o})`).join(" ")
  };
}, yp = {
  group: (t, { tag: e }, n) => e(q([n, ...t])),
  hidden: Ze(st, "none"),
  inline: st,
  block: st,
  contents: st,
  flow: st,
  table: (t, e, n) => re(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : st(t, e, n),
  flex(t, e, n) {
    switch (t[0]) {
      case "row":
      case "col":
        return {
          flexDirection: q(t[0] == "col" ? ["column", ...W(t)] : t)
        };
      case "nowrap":
      case "wrap":
        return { flexWrap: q(t) };
      case "grow":
      case "shrink":
        return k = e.theme("flex" + et(t[0]), W(t), t[1] || 1), k != null && {
          ["flex-" + t[0]]: "" + k
        };
    }
    return (k = e.theme("flex", t, "")) ? { flex: k } : st(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return (k = e.theme("gridTemplate" + et(Qn(t[0])), W(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : q(W(t)))) && {
          ["gridTemplate-" + Qn(t[0])]: k
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: q(t[1] == "col" ? ["column", ...W(t, 2)] : W(t), " ")
        };
    }
    return st(t, e, n);
  },
  auto: (t, { theme: e }) => re(["cols", "rows"], t[0]) && (k = e("gridAuto" + et(Qn(t[0])), W(t), q(W(t)))) && {
    ["gridAuto-" + Qn(t[0])]: k
  },
  static: kn,
  fixed: kn,
  absolute: kn,
  relative: kn,
  sticky: kn,
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
  appearance: ae(),
  cursor: Zn(),
  float: ae(),
  clear: ae(),
  decoration: ae("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: ae(),
  "mix-blend": ae("mixBlendMode"),
  top: tr,
  right: tr,
  bottom: tr,
  left: tr,
  inset: (t, { theme: e }) => (k = Er(t[0])) ? La(e("inset", W(t)), t[0]) : (k = e("inset", t)) && {
    top: k,
    right: k,
    bottom: k,
    left: k
  },
  underline: Xt,
  "line-through": Xt,
  "no-underline": Ze(Xt, "none"),
  "text-underline": Ze(Xt, "underline"),
  "text-no-underline": Ze(Xt, "none"),
  "text-line-through": Ze(Xt, "line-through"),
  uppercase: Jt,
  lowercase: Jt,
  capitalize: Jt,
  "normal-case": Ze(Jt, "none"),
  "text-normal-case": Ze(Jt, "none"),
  italic: er,
  "not-italic": Ze(er, "normal"),
  "font-italic": Ze(er, "italic"),
  "font-not-italic": Ze(er, "normal"),
  font: (t, e, n) => (k = e.theme("fontFamily", t, "")) ? { fontFamily: k } : ke("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: re(["start", "end"], t[0]) ? "flex-" + t[0] : q(t)
  },
  "justify-self": ae(),
  "justify-items": ae(),
  justify: ci("justifyContent"),
  content: ci("alignContent"),
  self: ci("alignSelf"),
  place: (t) => t[0] && Fa("place-" + t[0], W(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: zs("column"),
  row: zs("row"),
  duration: ke("transitionDuration"),
  delay: ke("transitionDelay"),
  tracking: ke("letterSpacing"),
  leading: ke("lineHeight"),
  z: ke("zIndex"),
  opacity: ke(),
  ease: ke("transitionTimingFunction"),
  p: $t,
  py: $t,
  px: $t,
  pt: $t,
  pr: $t,
  pb: $t,
  pl: $t,
  m: xt,
  my: xt,
  mx: xt,
  mt: xt,
  mr: xt,
  mb: xt,
  ml: xt,
  w: ke("width"),
  h: ke("height"),
  min: Vs,
  max: Vs,
  fill: ke(),
  order: ke(),
  origin: Zn("transformOrigin", " "),
  select: ae("userSelect"),
  "pointer-events": ae(),
  align: ae("verticalAlign"),
  whitespace: ae("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: pt("ordinal"),
  "slashed-zero": pt("slashed-zero"),
  "lining-nums": pt("numeric-figure"),
  "oldstyle-nums": pt("numeric-figure"),
  "proportional-nums": pt("numeric-spacing"),
  "tabular-nums": pt("numeric-spacing"),
  "diagonal-fractions": pt("numeric-fraction"),
  "stacked-fractions": pt("numeric-fraction"),
  overflow: (t, e, n) => re(["ellipsis", "clip"], t[0]) ? ae("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : ae()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: zi(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => (k = e("rotate", t)) && {
    "--tw-rotate": k,
    transform: [`rotate(${k})`, zi()]
  },
  scale: ui,
  translate: ui,
  skew: ui,
  gap: (t, e, n) => (k = { x: "column", y: "row" }[t[0]]) ? { [k + "Gap"]: e.theme("gap", W(t)) } : ke("gap")(t, e, n),
  stroke: (t, e, n) => (k = e.theme("stroke", t, "")) ? { stroke: k } : ke("strokeWidth")(t, e, n),
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
        return Jt([], k, t[0]);
      case "opacity":
        return xn(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : {
      fontSize: r[0],
      ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1]
    } : ur("color", "text", e("textColor", t));
  },
  bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return ae("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return ae("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && ae("backgroundRepeat")(t);
      case "repeat":
        return re("xy", t[1]) ? ae("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return xn(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return ae("background-blend-mode")(W(t));
      case "gradient":
        if (t[1] == "to" && (k = Er(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${q(k, " ")},var(--tw-gradient-stops))`
          };
    }
    return (k = e("backgroundPosition", t, "")) ? { backgroundPosition: k } : (k = e("backgroundSize", t, "")) ? { backgroundSize: k } : (k = e("backgroundImage", t, "")) ? { backgroundImage: k } : ur("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => (k = e("gradientColorStops", t)) && {
    "--tw-gradient-from": k,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${js(k)})`
  },
  via: (t, { theme: e }) => (k = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${k},var(--tw-gradient-to,${js(k)})`
  },
  to: (t, { theme: e }) => (k = e("gradientColorStops", t)) && {
    "--tw-gradient-to": k
  },
  border: bp,
  divide: (t, e, n) => (k = Bs(t, e, n, "divideWidth", "border", "width") || ja(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": k
  },
  space: (t, e, n) => (k = Bs(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": k
  },
  placeholder: (t, { theme: e }, n) => (k = t[0] == "opacity" ? xn(t, e, n) : ur("color", "placeholder", e("placeholderColor", t))) && {
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
    if (Y = e("animation", t)) {
      const r = Y.split(" ");
      return (k = e("keyframes", r[0], Rt = {})) !== Rt ? (Y = n(r[0])) && {
        animation: Y + " " + q(W(r), " "),
        ["@keyframes " + Y]: k
      } : { animation: Y };
    }
  },
  ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return xn(t, e, n);
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
          "--tw-ring-color": kr(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": kr(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => re(["contain", "cover", "fill", "none", "scale-down"], q(t)) ? { objectFit: q(t) } : Zn("objectPosition", " ")(t, e, n),
  list: (t, e, n) => q(t) == "item" ? st(t, e, n) : re(["inside", "outside"], q(t)) ? { listStylePosition: t[0] } : Zn("listStyleType")(t, e, n),
  rounded: (t, e, n) => vp(e.theme("borderRadius", W(t), ""), t[0], "border", "radius") || ke("borderRadius")(t, e, n),
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
    return Object.keys(n).reduce((s, l) => ((Y = n[l]) && typeof Y == "string" && (s[Dr(Y)] = {
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
  filter: Xe,
  blur: Xe,
  brightness: Xe,
  contrast: Xe,
  grayscale: Xe,
  "hue-rotate": Xe,
  invert: Xe,
  saturate: Xe,
  sepia: Xe,
  "drop-shadow": Xe,
  backdrop: Xe
}, wp = (t) => ({
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
}), Sp = {
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
}, Ws = "__twind", Cp = (t) => {
  let e = self[Ws];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = Ws, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, za = ({
  nonce: t,
  target: e = Cp(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, Ep = () => ({
  target: null,
  insert: Ra
}), Co = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + q(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), qs = /* @__PURE__ */ Co((t) => console.warn(t)), kp = /* @__PURE__ */ Co((t) => {
  throw new Error(t);
}), Tp = /* @__PURE__ */ Co(Ra), lt = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, Ap = (t, e, n) => {
  let r = "";
  const i = rp(t);
  i && (r += `${lt(i, e, n)};`);
  let o = ip(t);
  return o & 1 && (r += `-webkit-${lt(t, e, n)};`), o & 2 && (r += `-moz-${lt(t, e, n)};`), o & 4 && (r += `-ms-${lt(t, e, n)};`), o = op(t, e), o & 1 && (r += `${lt(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${lt(t, `-moz-${e}`, n)};`), o & 4 && (r += `${lt(t, `-ms-${e}`, n)};`), r += lt(t, e, n), r;
}, Tn = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, gt = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, Oe = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, te = (t) => (e) => e(t), $p = {
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
    .../* @__PURE__ */ Oe(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ Oe(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ Oe(64, "rem", 4, 16, 4),
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
  backdropBlur: /* @__PURE__ */ te("blur"),
  backdropBrightness: /* @__PURE__ */ te("brightness"),
  backdropContrast: /* @__PURE__ */ te("contrast"),
  backdropGrayscale: /* @__PURE__ */ te("grayscale"),
  backdropHueRotate: /* @__PURE__ */ te("hueRotate"),
  backdropInvert: /* @__PURE__ */ te("invert"),
  backdropOpacity: /* @__PURE__ */ te("opacity"),
  backdropSaturate: /* @__PURE__ */ te("saturate"),
  backdropSepia: /* @__PURE__ */ te("sepia"),
  backgroundColor: /* @__PURE__ */ te("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ te("opacity"),
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
    .../* @__PURE__ */ Oe(200, "", 100, 0, 50),
    .../* @__PURE__ */ Oe(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: (t) => ({
    ...t("colors"),
    DEFAULT: t("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ te("opacity"),
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
    .../* @__PURE__ */ gt(8, "px")
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
    .../* @__PURE__ */ Oe(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  divideColor: /* @__PURE__ */ te("borderColor"),
  divideOpacity: /* @__PURE__ */ te("borderOpacity"),
  divideWidth: /* @__PURE__ */ te("borderWidth"),
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
  gap: /* @__PURE__ */ te("spacing"),
  gradientColorStops: /* @__PURE__ */ te("colors"),
  height: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Tn(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Tn(2, 4),
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
    .../* @__PURE__ */ Oe(10, "rem", 4, 3)
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
    .../* @__PURE__ */ Oe(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ Oe(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ te("spacing"),
  placeholderColor: /* @__PURE__ */ te("colors"),
  placeholderOpacity: /* @__PURE__ */ te("opacity"),
  ringColor: (t) => ({
    DEFAULT: t("colors.blue.500", "#3b82f6"),
    ...t("colors")
  }),
  ringOffsetColor: /* @__PURE__ */ te("colors"),
  ringOffsetWidth: /* @__PURE__ */ gt(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ gt(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ gt(2, "deg"),
    .../* @__PURE__ */ gt(12, "deg", 3),
    .../* @__PURE__ */ gt(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ Oe(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ Oe(150, "", 100, 0, 50),
    .../* @__PURE__ */ Oe(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ gt(2, "deg"),
    .../* @__PURE__ */ gt(12, "deg", 3)
  },
  space: /* @__PURE__ */ te("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ Oe(2),
  textColor: /* @__PURE__ */ te("colors"),
  textOpacity: /* @__PURE__ */ te("opacity"),
  transitionDuration: (t) => ({
    DEFAULT: "150ms",
    ...t("durations")
  }),
  transitionDelay: /* @__PURE__ */ te("durations"),
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
    ...Tn(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Tn(2, 6),
    ...Tn(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ Oe(50, "", 1, 0, 10)
  }
}, Va = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[q(n)] = i, e[q(n, ".")] = i);
  const o = [...n, r];
  e[q(o)] = i, e[q(o, ".")] = i, i && typeof i == "object" && Va(i, e, o);
}, e), e), xp = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, Ip = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && re(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (re(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), Pp = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...$p, ...t }, r = (o, s) => {
    const l = o && o[s], c = typeof l == "function" ? l(i, xp) : l;
    return c && s == "colors" ? Va(c) : c;
  }, i = (o, s, l) => {
    const c = o.split(".");
    o = c[0], c.length > 1 && (l = s, s = q(W(c), "."));
    let a = e.get(o);
    if (a || (e.set(o, a = { ...r(n, o) }), Object.assign(a, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? q(s) : s) || "DEFAULT";
      const u = Ip(o, s) || a[s];
      return u == null ? l : Array.isArray(u) && !re(["fontSize", "outline", "dropShadow"], o) ? q(u, ",") : u;
    }
    return a;
  };
  return i;
}, Rp = (t, e) => (n, r) => {
  if (typeof n.d == "function")
    return n.d(e);
  const i = n.d.split(/-(?![^[]*])/g);
  if (!r && i[0] == "tw" && n.$ == n.d)
    return n.$;
  for (let o = i.length; o; o--) {
    const s = q(i.slice(0, o));
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      const l = t[s];
      return typeof l == "function" ? l(W(i, o), e, s) : typeof l == "string" ? e[r ? "css" : "tw"](l) : l;
    }
  }
}, An, Wa = /^:(group(?:(?!-focus).+?)*)-(.+)$/, qa = /^(:not)-(.+)/, Ga = (t) => t[1] == "[" ? W(t) : t, Op = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (An = n("screens", W(s), "")) ? { [Dr(An)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (An = Wa.exec(s)) ? { [`.${Ma(r(An[1]))}:${An[2]} &`]: o } : {
    [e[W(s)] || "&" + s.replace(qa, (l, c, a) => c + "(" + Ga(":" + a) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, xe, Ja = (t) => (((xe = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +xe[1] / (xe[2] ? 15 : 1) / 10 : 0) & 31) << 22, Xa = (t) => {
  xe = 0;
  for (let e = t.length; e--; )
    xe += re("-:,", t[e]);
  return xe;
}, Ka = (t) => (Xa(t) & 15) << 18, Dp = [
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
], Mp = (t) => 1 << (~(xe = Dp.indexOf(t.replace(Wa, ":$2").slice(3, 8))) ? xe : 17), Np = (t, e) => (n, r) => n | ((xe = t("screens", W(r), "")) ? 1 << 27 | Ja(Dr(xe)) : r == ":dark" ? 1 << 30 : (xe = e[r] || r.replace(qa, ":$2"))[0] == "@" ? Ka(xe) : Mp(r)), Up = (t) => t[0] == "-" ? 0 : Xa(t) + ((xe = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!xe[1] || -!!xe[2] : 0) + 1, fi = (t, e) => e + "{" + t + "}", Hp = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, p) => (f = s(f), Array.isArray(d) ? q(d.filter(Boolean).map((b) => t(f, s(b), p)), ";") : t(f, s(d), p));
  let c;
  const a = (f, d, p, b, h) => {
    if (Array.isArray(b)) {
      b.forEach((_) => _ && a(f, d, p, _, h));
      return;
    }
    let m = "", $ = 0, y = 0;
    b["@apply"] && (b = wo(Ut(mp(b["@apply"]), n), { ...b, "@apply": void 0 }, n)), Object.keys(b).forEach((_) => {
      const v = Ut(b[_], n);
      if (Da(_, v)) {
        if (v !== "" && _.length > 1) {
          const g = yo(_);
          y += 1, $ = Math.max($, Up(g)), m = (m && m + ";") + l(g, v, h);
        }
      } else if (v)
        if (_ == ":global" && (_ = "@global"), _[0] == "@")
          if (_[1] == "g")
            a([], "", 0, v, h);
          else if (_[1] == "f")
            a([], _, 0, v, h);
          else if (_[1] == "k") {
            const g = c.length;
            a([], "", 0, v, h);
            const A = c.splice(g, c.length - g);
            c.push({
              r: fi(q(A.map((w) => w.r), ""), _),
              p: A.reduce((w, S) => w + S.p, 0)
            });
          } else
            _[1] == "i" ? (Array.isArray(v) ? v : [v]).forEach((g) => g && c.push({ p: 0, r: `${_} ${g};` })) : (_[2] == "c" && (_ = Dr(n.theme("screens", W(_, 8).trim()))), a([...f, _], d, p | Ja(_) | Ka(_), v, h));
        else
          a(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (g, A, w) => _.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (S, N, z) => (re(N, "&") ? N.replace(/&/g, A) : (A && A + " ") + N) + z) + w) : _, p, v, h);
    }), y && c.push({
      r: f.reduceRight(fi, fi(m, d)),
      p: p * (1 << 8) + ((Math.max(0, 15 - y) & 15) << 4 | ($ || 15) & 15)
    });
  }, u = Np(r, e);
  return (f, d, p, b = 0) => (b <<= 28, c = [], a([], d ? "." + Ma(d) : "", p ? p.v.reduceRight(u, b) : b, f, p && p.i), c);
}, Lp = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const c = lp(i, l);
      try {
        t.insert(s, c), i.splice(c, 0, l);
      } catch (a) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: a }, r);
      }
    }
  };
}, di = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, Fp = (t) => (typeof t == "string" ? { t: kp, a: qs, i: Tp }[t[1]] : t) || qs, jp = { _: { value: "", writable: !0 } }, Bp = (t = {}) => {
  const e = Pp(t.theme), n = Fp(t.mode), r = di(t.hash, !1, !1, li), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], c = {
    tw: (...w) => g(w),
    theme: (w, S, N) => {
      var z;
      const K = (z = e(w, S, N)) != null ? z : n.unknown(w, S == null || Array.isArray(S) ? S : S.split("."), N != null, c);
      return o.n && K && re("rg", (typeof K)[5]) ? `calc(${K} * -1)` : K;
    },
    tag: (w) => r ? r(w) : w,
    css: (w) => {
      s++;
      const S = l.length;
      try {
        (typeof w == "string" ? ji([w]) : w).forEach(v);
        const N = Object.create(null, jp);
        for (let z = S; z < l.length; z++) {
          const K = l[z];
          if (K)
            switch (typeof K) {
              case "object":
                wo(N, K, c);
                break;
              case "string":
                N._ += (N._ && " ") + K;
            }
        }
        return N;
      } finally {
        l.length = S, s--;
      }
    }
  }, a = Rp({ ...yp, ...t.plugins }, c), u = (w) => {
    const S = o;
    o = w;
    try {
      return Ut(a(w), c);
    } finally {
      o = S;
    }
  }, f = { ...Sp, ...t.variants }, d = Op(t.darkMode || "media", f, c), p = Hp(di(t.prefix, Ap, lt), f, c), b = t.sheet || (typeof window > "u" ? Ep() : za(t)), { init: h = (w) => w() } = b, m = Lp(b, n, h, c);
  let $;
  h((w = /* @__PURE__ */ new Map()) => $ = w);
  const y = /* @__PURE__ */ new WeakMap(), _ = (w, S) => w == "_" ? void 0 : typeof S == "function" ? JSON.stringify(Ut(S, c), _) : S, v = (w) => {
    !s && o.v.length && (w = { ...w, v: [...o.v, ...w.v], $: "" }), w.$ || (w.$ = Fs(w, y.get(w.d)));
    let S = s ? null : $.get(w.$);
    if (S == null) {
      let N = u(w);
      if (w.$ || (w.$ = li(JSON.stringify(N, _)), y.set(w.d, w.$), w.$ = Fs(w, w.$)), N && typeof N == "object")
        if (w.v = w.v.map(Ga), i && (w.i = i), N = d(N, w), s)
          l.push(N);
        else {
          const z = typeof w.d == "function" ? typeof N._ == "string" ? 1 : 3 : 2;
          S = r || typeof w.d == "function" ? (r || li)(z + w.$) : w.$, p(N, S, w, z).forEach(m), N._ && (S += " " + N._);
        }
      else
        typeof N == "string" ? S = N : (S = w.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: S }, c)), s && typeof w.d != "function" && l.push(S);
      s || ($.set(w.$, S), Oa($, 3e4));
    }
    return S;
  }, g = (w) => q(ji(w).map(v).filter(Boolean), " "), A = di(t.preflight, sp, !1);
  if (A) {
    const w = wp(e), S = p(typeof A == "function" ? Ut(A(w, c), c) || w : { ...w, ...A });
    h((N = (S.forEach(m), !0)) => N);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, c),
    process: g
  };
}, Ya = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = Bp(o));
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
}, { tw: Ve, setup: zp } = /* @__PURE__ */ Ya();
function Vp(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[14].default
  ), s = Fe(
    o,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = P("div"), n = P("div"), s && s.c(), Di(n, "display", "none"), C(n, "class", r = Ve` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), C(e, "class", "popup-element-wrapper"), Di(e, "position", "absolute");
    },
    m(l, c) {
      O(l, e, c), x(e, n), s && s.m(n, null), t[15](n), t[16](e), i = !0;
    },
    p(l, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      8192) && Be(
        s,
        o,
        l,
        /*$$scope*/
        l[13],
        i ? je(
          o,
          /*$$scope*/
          l[13],
          c,
          null
        ) : ze(
          /*$$scope*/
          l[13]
        ),
        null
      ), (!i || c & /*popupClass*/
      1 && r !== (r = Ve` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      l[0]}`)) && C(n, "class", r);
    },
    i(l) {
      i || (T(s, l), i = !0);
    },
    o(l) {
      I(s, l), i = !1;
    },
    d(l) {
      l && R(e), s && s.d(l), t[15](null), t[16](null);
    }
  };
}
function Wp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { closeOnEscape: s = !0 } = e, { sizeToAnchor: l = !1 } = e, { anchorElement: c = null } = e, { position: a = null } = e, { popupClass: u = "" } = e, { preferedVerticalAlignment: f = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: p = { x: 0, y: 0 } } = e, b = Ie("PopupContainerService", new Sr(document.body)), h, m, $;
  function y() {
    const w = {
      backdrop: !1,
      closeOnClickOutside: o,
      closeOnEscape: s,
      positioning: c ? "anchor" : "custom",
      anchorElement: c,
      customPosition: l ? p : a,
      anchorHorizontal: d,
      anchorVertical: f
    };
    document.body.appendChild(h), n(1, h.style.display = "block", h), console.log(h.getBoundingClientRect(), h);
    const S = c == null ? void 0 : c.offsetWidth, N = h.offsetWidth;
    S && l && N < S && (console.log("setting width"), n(1, h.style.width = `${S}px`, h)), n(1, h.style.position = "static", h), m = b.openPopup("popup-container", h, w), m.afterClosed.then(() => {
      v(), $.appendChild(h), console.log("closing popup", h.getBoundingClientRect());
    });
  }
  function _() {
    m == null || m.close();
  }
  function v() {
    n(1, h.style.display = "none", h), n(1, h.style.position = "absolute", h), n(1, h.style.width = "auto", h);
  }
  function g(w) {
    he[w ? "unshift" : "push"](() => {
      h = w, n(1, h);
    });
  }
  function A(w) {
    he[w ? "unshift" : "push"](() => {
      $ = w, n(2, $);
    });
  }
  return t.$$set = (w) => {
    "closeOnClick" in w && n(3, o = w.closeOnClick), "closeOnEscape" in w && n(4, s = w.closeOnEscape), "sizeToAnchor" in w && n(5, l = w.sizeToAnchor), "anchorElement" in w && n(6, c = w.anchorElement), "position" in w && n(7, a = w.position), "popupClass" in w && n(0, u = w.popupClass), "preferedVerticalAlignment" in w && n(8, f = w.preferedVerticalAlignment), "preferedHorizontalAlignment" in w && n(9, d = w.preferedHorizontalAlignment), "positionOffset" in w && n(10, p = w.positionOffset), "$$scope" in w && n(13, i = w.$$scope);
  }, [
    u,
    h,
    $,
    o,
    s,
    l,
    c,
    a,
    f,
    d,
    p,
    y,
    _,
    i,
    r,
    g,
    A
  ];
}
class Qa extends de {
  constructor(e) {
    super(), fe(this, e, Wp, Vp, ue, {
      closeOnClick: 3,
      closeOnEscape: 4,
      sizeToAnchor: 5,
      anchorElement: 6,
      position: 7,
      popupClass: 0,
      preferedVerticalAlignment: 8,
      preferedHorizontalAlignment: 9,
      positionOffset: 10,
      openPopup: 11,
      closePopup: 12
    });
  }
  get openPopup() {
    return this.$$.ctx[11];
  }
  get closePopup() {
    return this.$$.ctx[12];
  }
}
function qp(t) {
  Bt(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Gs(t) {
  let e;
  return {
    c() {
      e = P("div"), C(e, "class", le(Ve`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
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
function Gp(t) {
  let e, n, r, i;
  function o(l) {
    t[7](l);
  }
  let s = { tw: Ve, readonly: !0 };
  return (
    /*isSelected*/
    t[0] !== void 0 && (s.checked = /*isSelected*/
    t[0]), n = new Wn({ props: s }), he.push(() => nn(n, "checked", o)), {
      c() {
        e = P("div"), V(n.$$.fragment), C(e, "class", le(Ve`p-1`) + " svelte-oysah1");
      },
      m(l, c) {
        O(l, e, c), j(n, e, null), i = !0;
      },
      p(l, c) {
        const a = {};
        !r && c & /*isSelected*/
        1 && (r = !0, a.checked = /*isSelected*/
        l[0], tn(() => r = !1)), n.$set(a);
      },
      i(l) {
        i || (T(n.$$.fragment, l), i = !0);
      },
      o(l) {
        I(n.$$.fragment, l), i = !1;
      },
      d(l) {
        l && R(e), B(n);
      }
    }
  );
}
function Jp(t) {
  let e, n, r, i, o, s, l, c, a = (
    /*isSelected*/
    t[0] && !/*multiple*/
    t[2] && Gs()
  ), u = (
    /*multiple*/
    t[2] && Gp(t)
  );
  const f = (
    /*#slots*/
    t[6].default
  ), d = Fe(
    f,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = P("div"), a && a.c(), n = H(), u && u.c(), r = H(), i = P("span"), d && d.c(), C(e, "class", o = le(Ve`flex hover:(${nr}) items-center ${/*multiple*/
      t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      t[0] && !/*multiple*/
      t[2] ? nr : ""}`) + " svelte-oysah1");
    },
    m(p, b) {
      O(p, e, b), a && a.m(e, null), x(e, n), u && u.m(e, null), x(e, r), x(e, i), d && d.m(i, null), t[8](i), s = !0, l || (c = oe(
        e,
        "click",
        /*onClickOption*/
        t[3]
      ), l = !0);
    },
    p(p, [b]) {
      /*isSelected*/
      p[0] && !/*multiple*/
      p[2] ? a ? a.p(p, b) : (a = Gs(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*multiple*/
      p[2] && u.p(p, b), d && d.p && (!s || b & /*$$scope*/
      32) && Be(
        d,
        f,
        p,
        /*$$scope*/
        p[5],
        s ? je(
          f,
          /*$$scope*/
          p[5],
          b,
          null
        ) : ze(
          /*$$scope*/
          p[5]
        ),
        null
      ), (!s || b & /*isSelected*/
      1 && o !== (o = le(Ve`flex hover:(${nr}) items-center ${/*multiple*/
      p[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      p[0] && !/*multiple*/
      p[2] ? nr : ""}`) + " svelte-oysah1")) && C(e, "class", o);
    },
    i(p) {
      s || (T(u), T(d, p), s = !0);
    },
    o(p) {
      I(u), I(d, p), s = !1;
    },
    d(p) {
      p && R(e), a && a.d(), u && u.d(), d && d.d(p), t[8](null), l = !1, c();
    }
  };
}
let nr = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Xp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, c = null, a, u;
  const f = De("audako:select:multiple"), d = De("audako:select:close"), p = De("audako:select:value"), b = De("audako:select:value:changed"), h = De("audako:select:displayValue");
  $a(() => {
    var v;
    u = (v = a.innerText) == null ? void 0 : v.trim(), h.subscribe((g) => {
      c = g;
    }), p.subscribe((g) => {
      l = g, f ? n(0, s = g == null ? void 0 : g.includes(o)) : n(0, s = g === o), $();
    });
  });
  function m(v) {
    console.log("clicked option"), v.preventDefault(), v.stopPropagation();
    let g = null;
    f ? s ? g = l.filter((A) => A !== o) : g = Array.isArray(l) ? [...l, o] : [o] : (g = o, d()), p.set(g), b.next(g);
  }
  function $() {
    if (f) {
      const v = c;
      s && !v.includes(u) ? h.set([...v, u]) : !s && v.includes(u) && h.set(v.filter((g) => g !== u));
    } else
      s && h.set(u);
  }
  function y(v) {
    s = v, n(0, s);
  }
  function _(v) {
    he[v ? "unshift" : "push"](() => {
      a = v, n(1, a);
    });
  }
  return t.$$set = (v) => {
    "value" in v && n(4, o = v.value), "$$scope" in v && n(5, i = v.$$scope);
  }, [
    s,
    a,
    f,
    m,
    o,
    i,
    r,
    y,
    _
  ];
}
class Za extends de {
  constructor(e) {
    super(), fe(this, e, Xp, Jp, ue, { value: 4 }, qp);
  }
}
function Js(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const Kp = (t) => ({}), Xs = (t) => ({});
function Yp(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = F(e), r = H();
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
function Ks(t) {
  let e, n;
  return e = new Za({
    props: {
      value: (
        /*option*/
        t[26].value
      ),
      $$slots: { default: [Yp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function Qp(t) {
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
  for (let a = 0; a < s.length; a += 1)
    l[a] = Ks(Js(t, s, a));
  const c = (a) => I(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      o && o.c(), e = H();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = Or();
    },
    m(a, u) {
      o && o.m(a, u), O(a, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(a, u);
      O(a, n, u), r = !0;
    },
    p(a, u) {
      if (o && o.p && (!r || u & /*$$scope*/
      131072) && Be(
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
        ) : ze(
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
          const d = Js(a, s, f);
          l[f] ? (l[f].p(d, u), T(l[f], 1)) : (l[f] = Ks(d), l[f].c(), T(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (pe(), f = s.length; f < l.length; f += 1)
          c(f);
        ge();
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
      o && o.d(a), a && R(e), kt(l, a), a && R(n);
    }
  };
}
function Zp(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, p, b;
  const h = (
    /*#slots*/
    t[13].prefix
  ), m = Fe(
    h,
    t,
    /*$$scope*/
    t[17],
    Xs
  );
  let $ = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [Qp] },
    $$scope: { ctx: t }
  };
  return f = new Qa({ props: $ }), t[16](f), {
    c() {
      e = P("div"), m && m.c(), n = H(), r = P("input"), o = H(), s = P("div"), l = F("arrow_drop_down"), u = H(), V(f.$$.fragment), r.disabled = /*disabled*/
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
    m(y, _) {
      O(y, e, _), m && m.m(e, null), x(e, n), x(e, r), br(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), x(e, o), x(e, s), x(s, l), O(y, u, _), j(f, y, _), d = !0, p || (b = [
        oe(
          r,
          "input",
          /*input_input_handler*/
          t[14]
        ),
        oe(
          e,
          "click",
          /*openMenu*/
          t[10]
        )
      ], p = !0);
    },
    p(y, [_]) {
      m && m.p && (!d || _ & /*$$scope*/
      131072) && Be(
        m,
        h,
        y,
        /*$$scope*/
        y[17],
        d ? je(
          h,
          /*$$scope*/
          y[17],
          _,
          Kp
        ) : ze(
          /*$$scope*/
          y[17]
        ),
        Xs
      ), (!d || _ & /*disabled*/
      64) && (r.disabled = /*disabled*/
      y[6]), (!d || _ & /*placeholder*/
      1) && C(
        r,
        "placeholder",
        /*placeholder*/
        y[0]
      ), (!d || _ & /*tw, textfield$class*/
      34 && i !== (i = /*tw*/
      y[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      y[1]}`)) && C(r, "class", i), _ & /*displayedValue*/
      128 && r.value !== /*displayedValue*/
      y[7] && br(
        r,
        /*displayedValue*/
        y[7]
      ), (!d || _ & /*tw, suffixIcon$class*/
      40 && c !== (c = /*tw*/
      y[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      y[3]} select-none`)) && C(s, "class", c), (!d || _ & /*tw, container$class*/
      36 && a !== (a = /*tw*/
      y[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      y[2]}`)) && C(e, "class", a);
      const v = {};
      _ & /*textfield*/
      256 && (v.anchorElement = /*textfield*/
      y[8]), _ & /*$$scope, options*/
      131088 && (v.$$scope = { dirty: _, ctx: y }), f.$set(v);
    },
    i(y) {
      d || (T(m, y), T(f.$$.fragment, y), d = !0);
    },
    o(y) {
      I(m, y), I(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && R(e), m && m.d(y), t[15](null), y && R(u), t[16](null), B(f, y), p = !1, dt(b);
    }
  };
}
function eg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: c = "" } = e, { container$class: a = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = Ve } = e, { disabled: p = !1 } = e, b = "", h, m, $ = Ge(), y = wr(o);
  const _ = y.subscribe((D) => {
    n(11, o = D);
  });
  let v = new Ae();
  const g = v.subscribe((D) => {
    $("valueChanged", D);
  });
  let A = wr(s ? [] : ""), w = A.subscribe((D) => {
    N(D);
  });
  function S(D) {
    D && (D.preventDefault(), D.stopPropagation()), !p && (m == null || m.openPopup());
  }
  function N(D) {
    if (D == null || D.length === 0) {
      n(7, b = null);
      return;
    }
    Array.isArray(D) ? n(7, b = D.join(", ")) : n(7, b = D);
  }
  _t("audako:select:multiple", s), _t("audako:select:value", y), _t("audako:select:value:changed", v), _t("audako:select:displayValue", A), _t("audako:select:close", () => m.closePopup()), Tt(() => {
    _(), g.unsubscribe(), w();
  });
  function z() {
    b = this.value, n(7, b);
  }
  function K(D) {
    he[D ? "unshift" : "push"](() => {
      h = D, n(8, h);
    });
  }
  function ne(D) {
    he[D ? "unshift" : "push"](() => {
      m = D, n(9, m);
    });
  }
  return t.$$set = (D) => {
    "value" in D && n(11, o = D.value), "multiple" in D && n(12, s = D.multiple), "placeholder" in D && n(0, l = D.placeholder), "textfield$class" in D && n(1, c = D.textfield$class), "container$class" in D && n(2, a = D.container$class), "suffixIcon$class" in D && n(3, u = D.suffixIcon$class), "options" in D && n(4, f = D.options), "tw" in D && n(5, d = D.tw), "disabled" in D && n(6, p = D.disabled), "$$scope" in D && n(17, i = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    32 && _t("tw", d);
  }, [
    l,
    c,
    a,
    u,
    f,
    d,
    p,
    b,
    h,
    m,
    S,
    o,
    s,
    r,
    z,
    K,
    ne,
    i
  ];
}
class ec extends de {
  constructor(e) {
    super(), fe(this, e, eg, Zp, ue, {
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
function Ys(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function tg(t) {
  let e = (
    /*option*/
    t[18] + ""
  ), n;
  return {
    c() {
      n = F(e);
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
function Qs(t) {
  let e, n;
  return e = new Za({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [tg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function ng(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Qs(Ys(t, r, s));
  const o = (s) => I(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Or();
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
          const a = Ys(s, r, c);
          i[c] ? (i[c].p(a, l), T(i[c], 1)) : (i[c] = Qs(a), i[c].c(), T(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (pe(), c = r.length; c < i.length; c += 1)
          o(c);
        ge();
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
      kt(i, s), s && R(e);
    }
  };
}
function rg(t) {
  let e;
  return {
    c() {
      e = F("first_page");
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
      e = F("navigate_before");
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
  let e;
  return {
    c() {
      e = F("navigate_next");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function sg(t) {
  let e;
  return {
    c() {
      e = F("last_page");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function lg(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, p = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), b, h, m, $, y, _, v, g, A, w, S, N, z, K;
  function ne(L) {
    t[10](L);
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
    $$slots: { default: [ng] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (D.value = /*pageSize*/
    t[0]), s = new ec({ props: D }), he.push(() => nn(s, "value", ne)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), v = new wt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [rg] },
        $$scope: { ctx: t }
      }
    }), v.$on(
      "click",
      /*click_handler*/
      t[12]
    ), A = new wt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [ig] },
        $$scope: { ctx: t }
      }
    }), A.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), S = new wt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [og] },
        $$scope: { ctx: t }
      }
    }), S.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), z = new wt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [sg] },
        $$scope: { ctx: t }
      }
    }), z.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = P("div"), n = P("div"), r = F("Items per page:"), i = H(), o = P("div"), V(s.$$.fragment), c = H(), a = P("div"), f = F(u), d = F(" - "), b = F(p), h = H(), m = P("div"), $ = F("of "), y = F(
          /*totalCount*/
          t[2]
        ), _ = H(), V(v.$$.fragment), g = H(), V(A.$$.fragment), w = H(), V(S.$$.fragment), N = H(), V(z.$$.fragment), C(
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
          m,
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
      m(L, Q) {
        O(L, e, Q), x(e, n), x(n, r), x(e, i), x(e, o), j(s, o, null), x(e, c), x(e, a), x(a, f), x(a, d), x(a, b), x(e, h), x(e, m), x(m, $), x(m, y), x(e, _), j(v, e, null), x(e, g), j(A, e, null), x(e, w), j(S, e, null), x(e, N), j(z, e, null), K = !0;
      },
      p(L, [Q]) {
        const it = {};
        Q & /*$$scope, pageSizeOptions*/
        2097160 && (it.$$scope = { dirty: Q, ctx: L }), !l && Q & /*pageSize*/
        1 && (l = !0, it.value = /*pageSize*/
        L[0], tn(() => l = !1)), s.$set(it), (!K || Q & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        L[1] * /*pageSize*/
        L[0] + 1 + "") && ye(f, u), (!K || Q & /*pageIndex, pageSize*/
        3) && p !== (p = /*pageIndex*/
        (L[1] + 1) * /*pageSize*/
        L[0] + "") && ye(b, p), (!K || Q & /*totalCount*/
        4) && ye(
          y,
          /*totalCount*/
          L[2]
        );
        const Cn = {};
        Q & /*pageIndex*/
        2 && (Cn.disabled = /*pageIndex*/
        L[1] === 0), Q & /*$$scope*/
        2097152 && (Cn.$$scope = { dirty: Q, ctx: L }), v.$set(Cn);
        const U = {};
        Q & /*pageIndex*/
        2 && (U.disabled = /*pageIndex*/
        L[1] === 0), Q & /*$$scope*/
        2097152 && (U.$$scope = { dirty: Q, ctx: L }), A.$set(U);
        const G = {};
        Q & /*pageIndex, lastPageIndex*/
        18 && (G.disabled = /*pageIndex*/
        L[1] === /*lastPageIndex*/
        L[4]), Q & /*$$scope*/
        2097152 && (G.$$scope = { dirty: Q, ctx: L }), S.$set(G);
        const ht = {};
        Q & /*pageIndex, lastPageIndex*/
        18 && (ht.disabled = /*pageIndex*/
        L[1] === /*lastPageIndex*/
        L[4]), Q & /*$$scope*/
        2097152 && (ht.$$scope = { dirty: Q, ctx: L }), z.$set(ht);
      },
      i(L) {
        K || (T(s.$$.fragment, L), T(v.$$.fragment, L), T(A.$$.fragment, L), T(S.$$.fragment, L), T(z.$$.fragment, L), K = !0);
      },
      o(L) {
        I(s.$$.fragment, L), I(v.$$.fragment, L), I(A.$$.fragment, L), I(S.$$.fragment, L), I(z.$$.fragment, L), K = !1;
      },
      d(L) {
        L && R(e), B(s), B(v), B(A), B(S), B(z);
      }
    }
  );
}
function Zs(t, e) {
  return Math.max(Math.ceil(e / t) - 1, 0);
}
function ag(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = De("tw"), l, { pageSizeOptions: c = [10, 20, 50, 100] } = e, a = Ge();
  function u(g) {
    n(1, r = r + g), b();
  }
  function f() {
    n(1, r = 0), b();
  }
  function d() {
    n(1, r = l), b();
  }
  function p(g) {
    console.log("changePageSize", g), n(0, i = g), n(4, l = Zs(i, o)), n(1, r = Math.min(r, l)), b();
  }
  function b() {
    a("changePage", { pageIndex: r, pageSize: i });
  }
  function h(g) {
    i = g, n(0, i);
  }
  const m = (g) => p(g.detail), $ = () => f(), y = () => u(-1), _ = () => u(1), v = () => d();
  return t.$$set = (g) => {
    "pageIndex" in g && n(1, r = g.pageIndex), "pageSize" in g && n(0, i = g.pageSize), "totalCount" in g && n(2, o = g.totalCount), "pageSizeOptions" in g && n(3, c = g.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & /*pageSize, totalCount*/
    5 && n(4, l = Zs(i, o)), t.$$.dirty & /*pageSize*/
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
    p,
    h,
    m,
    $,
    y,
    _,
    v
  ];
}
class cg extends de {
  constructor(e) {
    super(), fe(this, e, ag, lg, ue, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function ug(t) {
  Bt(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function el(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function tl(t) {
  let e, n;
  return e = new Hi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0 cursor-default`
      ),
      id: "Name",
      $$slots: { default: [fg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function fg(t) {
  let e, n;
  return e = new Wn({
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
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function dg(t) {
  let e;
  return {
    c() {
      e = F("Name");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function hg(t) {
  let e;
  return {
    c() {
      e = F("Group");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function pg(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && tl(t)
  );
  return n = new Hi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [dg] },
      $$scope: { ctx: t }
    }
  }), i = new Hi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [hg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = H(), V(n.$$.fragment), r = H(), V(i.$$.fragment);
    },
    m(l, c) {
      s && s.m(l, c), O(l, e, c), j(n, l, c), O(l, r, c), j(i, l, c), o = !0;
    },
    p(l, c) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, c), c[0] & /*selectMultiple*/
      1 && T(s, 1)) : (s = tl(l), s.c(), T(s, 1), s.m(e.parentNode, e)) : s && (pe(), I(s, 1, 1, () => {
        s = null;
      }), ge());
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
      s && s.d(l), l && R(e), B(n, l), l && R(r), B(i, l);
    }
  };
}
function gg(t) {
  let e;
  return {
    c() {
      e = P("div"), C(e, "class", le(
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
function mg(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = P("div"), C(n, "class", le(
        /*tw*/
        t[9]`progress-bar-value-animation w-full h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), C(e, "class", le(
        /*tw*/
        t[9]`w-full h-[3px] overflow-hidden bg-blue-200`
      ) + " svelte-15xwzh7");
    },
    m(r, i) {
      O(r, e, i), x(e, n);
    },
    p: X,
    d(r) {
      r && R(e);
    }
  };
}
function nl(t) {
  let e, n;
  return e = new Li({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0`
      ),
      $$slots: { default: [vg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function vg(t) {
  let e, n;
  return e = new Wn({
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
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function _g(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = P("div"), r = F(n), C(e, "class", le(
        /*tw*/
        t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(o, s) {
      O(o, e, s), x(e, r);
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
function bg(t) {
  return { c: X, m: X, p: X, d: X };
}
function yg(t) {
  let e = (
    /*name*/
    (t[36] ?? "") + ""
  ), n;
  return {
    c() {
      n = F(e);
    },
    m(r, i) {
      O(r, n, i);
    },
    p(r, i) {
      i[0] & /*entities*/
      8 && e !== (e = /*name*/
      (r[36] ?? "") + "") && ye(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function wg(t) {
  return { c: X, m: X, p: X, d: X };
}
function Sg(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: wg,
    then: yg,
    catch: bg,
    value: 36
  };
  return yr(n = /*nameService*/
  t[8].resolveName(
    J.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = P("span"), r.block.c(), C(e, "class", le(
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
        J.Group,
        /*entity*/
        t[33].GroupId
      )) && yr(n, r) || xa(r, t, o);
    },
    d(i) {
      i && R(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function Cg(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && nl(t)
  );
  return n = new Li({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [_g] },
      $$scope: { ctx: t }
    }
  }), i = new Li({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [Sg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = H(), V(n.$$.fragment), r = H(), V(i.$$.fragment), o = H();
    },
    m(c, a) {
      l && l.m(c, a), O(c, e, a), j(n, c, a), O(c, r, a), j(i, c, a), O(c, o, a), s = !0;
    },
    p(c, a) {
      /*selectMultiple*/
      c[0] ? l ? (l.p(c, a), a[0] & /*selectMultiple*/
      1 && T(l, 1)) : (l = nl(c), l.c(), T(l, 1), l.m(e.parentNode, e)) : l && (pe(), I(l, 1, 1, () => {
        l = null;
      }), ge());
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
      l && l.d(c), c && R(e), B(n, c), c && R(r), B(i, c), c && R(o);
    }
  };
}
function rl(t) {
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
  return e = new qh({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [Cg] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", r), {
    c() {
      V(e.$$.fragment);
    },
    m(i, o) {
      j(e, i, o), n = !0;
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
      B(e, i);
    }
  };
}
function Eg(t) {
  let e, n, r, i, o;
  e = new Lh({
    props: {
      $$slots: { default: [pg] },
      $$scope: { ctx: t }
    }
  });
  function s(d, p) {
    return (
      /*loading*/
      d[7] ? mg : gg
    );
  }
  let l = s(t), c = l(t), a = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < a.length; d += 1)
    u[d] = rl(el(t, a, d));
  const f = (d) => I(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      V(e.$$.fragment), n = H(), c.c(), r = H();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = Or();
    },
    m(d, p) {
      j(e, d, p), O(d, n, p), c.m(d, p), O(d, r, p);
      for (let b = 0; b < u.length; b += 1)
        u[b] && u[b].m(d, p);
      O(d, i, p), o = !0;
    },
    p(d, p) {
      const b = {};
      if (p[0] & /*masterToggleState, selectMultiple*/
      33 | p[1] & /*$$scope*/
      64 && (b.$$scope = { dirty: p, ctx: d }), e.$set(b), l === (l = s(d)) && c ? c.p(d, p) : (c.d(1), c = l(d), c && (c.c(), c.m(r.parentNode, r))), p[0] & /*tw, onEntitySelected, entities, nameService, selectedEntitiesInPageLookup, selectMultiple*/
      1817) {
        a = /*entities*/
        d[3];
        let h;
        for (h = 0; h < a.length; h += 1) {
          const m = el(d, a, h);
          u[h] ? (u[h].p(m, p), T(u[h], 1)) : (u[h] = rl(m), u[h].c(), T(u[h], 1), u[h].m(i.parentNode, i));
        }
        for (pe(), h = a.length; h < u.length; h += 1)
          f(h);
        ge();
      }
    },
    i(d) {
      if (!o) {
        T(e.$$.fragment, d);
        for (let p = 0; p < a.length; p += 1)
          T(u[p]);
        o = !0;
      }
    },
    o(d) {
      I(e.$$.fragment, d), u = u.filter(Boolean);
      for (let p = 0; p < u.length; p += 1)
        I(u[p]);
      o = !1;
    },
    d(d) {
      B(e, d), d && R(n), c.d(d), d && R(r), kt(u, d), d && R(i);
    }
  };
}
function kg(t) {
  let e, n;
  return e = new cg({
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
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function Tg(t) {
  let e, n, r;
  return n = new Mh({
    props: {
      $$slots: {
        pagination: [kg],
        default: [Eg]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), V(n.$$.fragment), C(e, "class", le(
        /*tw*/
        t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      O(i, e, o), j(n, e, null), r = !0;
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
      i && R(e), B(n);
    }
  };
}
function Ag(t, e, n) {
  let r = Ie(Lt), i = Ie(Nn), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, c = De("tw"), a = [], u = new Ae(), f = [], d = {}, p = "unchecked", b, h, m, $ = !1, y = 0, _ = 10, v = 0, g = hn(), A = Nt, w = !1, S = !0, N = new Ae();
  Mt.pipe(ut(N)).subscribe((U) => {
    f = U.selectedEntities, Q(), D();
  }), pa([A.asObservable(), g.asObservable()]).pipe(ut(N)).subscribe(([U, G]) => {
    var ht;
    console.log("globalState", U), m = G.selectedGroup, h = (ht = G.selectedGroup) == null ? void 0 : ht.Id, b = G.filter, $ = U.queryWithSubGroups, w = !0, n(1, y = 0), n(2, _ = U.pageSize ?? 10), u.next();
  });
  function z() {
    const U = { $and: [] };
    $ ? U.$and.push({ Path: h }) : U.$and.push({ GroupId: h }), b && U.$and.push({
      $or: [
        {
          "Name.Value": { $regex: b, $options: "i" }
        },
        {
          "Description.Value": { $regex: b, $options: "i" }
        }
      ]
    }), l && U.$and.push(l);
    const G = {
      limit: _,
      skip: y * _
    };
    return jt(r.queryConfiguration(o, U, G));
  }
  function K(U) {
    s ? (f.find((G) => G.Id === U.Id) ? (f = f.filter((G) => G.Id !== U.Id), n(4, d[U.Id] = !1, d)) : (f.push(U), n(4, d[U.Id] = !0, d)), D()) : f = [U], Mt.update((G) => ({ ...G, selectedEntities: f }));
  }
  function ne(U) {
    U ? f = [
      ...f,
      ...a.filter((G) => !d[G.Id])
    ] : f = f.filter((G) => !a.find((ht) => ht.Id === G.Id)), Q(), D(), Mt.update((G) => ({ ...G, selectedEntities: f }));
  }
  function D() {
    let U = Object.keys(d).filter((G) => d[G]);
    U.length === 0 ? n(5, p = "unchecked") : U.length === a.length ? n(5, p = "checked") : n(5, p = "indeterminate");
  }
  function L(U) {
    const G = U.detail;
    G.pageSize != _ ? (n(1, y = 0), n(2, _ = G.pageSize)) : n(1, y = G.pageIndex);
  }
  function Q() {
    n(4, d = {}), a.forEach((U) => {
      n(4, d[U.Id] = f.find((G) => G.Id === U.Id) != null, d);
    });
  }
  Tt(() => {
    N.next(), N.complete();
  }), u.pipe(ut(N), On(() => w && !!h), qf(250), Vf(() => n(7, S = !0)), _a(() => z())).subscribe((U) => {
    n(7, S = !1), n(3, a = U.data), Q(), D(), o === J.Group && a.unshift(m), n(6, v = U.total);
  });
  const it = (U) => {
    var G;
    return ne((G = U.detail) == null ? void 0 : G.checked);
  }, Cn = (U) => K(U);
  return t.$$set = (U) => {
    "entityType" in U && n(13, o = U.entityType), "selectMultiple" in U && n(0, s = U.selectMultiple), "additionalFilter" in U && n(14, l = U.additionalFilter);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pageIndex*/
    2 && (n(1, y), n(24, u), u.next()), t.$$.dirty[0] & /*pageSize*/
    4 && (n(2, _), n(28, A), A.update((U) => ({ ...U, pageSize: _ })));
  }, [
    s,
    y,
    _,
    a,
    d,
    p,
    v,
    S,
    i,
    c,
    K,
    ne,
    L,
    o,
    l,
    it,
    Cn
  ];
}
class $g extends de {
  constructor(e) {
    super(), fe(
      this,
      e,
      Ag,
      Tg,
      ue,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      ug,
      [-1, -1]
    );
  }
}
function il(t) {
  let e, n, r, i;
  n = new wt({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && ol(t)
  );
  return {
    c() {
      e = P("div"), V(n.$$.fragment), r = H(), o && o.c(), C(
        e,
        "class",
        /*tw*/
        t[5]`mx-2 relative`
      );
    },
    m(s, l) {
      O(s, e, l), j(n, e, null), x(e, r), o && o.m(e, null), i = !0;
    },
    p(s, l) {
      /*selectedEntities*/
      s[4].length > 0 ? o ? o.p(s, l) : (o = ol(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    i(s) {
      i || (T(n.$$.fragment, s), i = !0);
    },
    o(s) {
      I(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && R(e), B(n), o && o.d();
    }
  };
}
function ol(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = P("div"), r = F(n), C(
        e,
        "class",
        /*tw*/
        t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`
      );
    },
    m(i, o) {
      O(i, e, o), x(e, r);
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
function xg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, p, b, h, m = (
    /*selectMultiple*/
    t[0] && il(t)
  );
  function $(_) {
    t[11](_);
  }
  let y = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (y.checked = /*withSubGroups*/
    t[1]), f = new Wn({ props: y }), he.push(() => nn(f, "checked", $)), {
      c() {
        e = P("div"), n = P("div"), r = P("div"), i = P("span"), o = F("search"), s = H(), l = P("input"), c = H(), m && m.c(), a = H(), u = P("div"), V(f.$$.fragment), C(
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
      m(_, v) {
        O(_, e, v), x(e, n), x(n, r), x(r, i), x(i, o), x(r, s), x(r, l), t[8](l), br(
          l,
          /*filter*/
          t[2]
        ), x(n, c), m && m.m(n, null), x(e, a), x(e, u), j(f, u, null), p = !0, b || (h = oe(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), b = !0);
      },
      p(_, [v]) {
        v & /*filter*/
        4 && l.value !== /*filter*/
        _[2] && br(
          l,
          /*filter*/
          _[2]
        ), /*selectMultiple*/
        _[0] ? m ? (m.p(_, v), v & /*selectMultiple*/
        1 && T(m, 1)) : (m = il(_), m.c(), T(m, 1), m.m(n, null)) : m && (pe(), I(m, 1, 1, () => {
          m = null;
        }), ge());
        const g = {};
        !d && v & /*withSubGroups*/
        2 && (d = !0, g.checked = /*withSubGroups*/
        _[1], tn(() => d = !1)), f.$set(g);
      },
      i(_) {
        p || (T(m), T(f.$$.fragment, _), p = !0);
      },
      o(_) {
        I(m), I(f.$$.fragment, _), p = !1;
      },
      d(_) {
        _ && R(e), t[8](null), m && m.d(), B(f), b = !1, h();
      }
    }
  );
}
function Ig(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = De("tw"), s = Ge(), l = hn(), c = !1, a = l.value.filter, u, f = new Ae(), d = new Ae(), p = [];
  Nt.pipe(ut(f)).subscribe((g) => {
    n(1, c = g.queryWithSubGroups);
  }), d.pipe(ut(f), Mf(200)).subscribe((g) => {
    l.update((A) => ({ ...A, filter: g }));
  }), Mt.pipe(ut(f)).subscribe((g) => {
    n(4, p = g.selectedEntities);
  });
  function b(g) {
    console.log("onSubGroupsToggled", g), g != Nt.value.queryWithSubGroups && Nt.update((A) => ({
      ...A,
      queryWithSubGroups: g
    }));
  }
  function h() {
    s("acceptSelection");
  }
  $a(() => {
    m();
  });
  function m() {
    u && setTimeout(
      () => {
        u.focus(), u.select();
      },
      0
    );
  }
  Tt(() => {
    f.next(), f.complete();
  });
  function $(g) {
    he[g ? "unshift" : "push"](() => {
      u = g, n(3, u);
    });
  }
  function y() {
    a = this.value, n(2, a);
  }
  const _ = () => h();
  function v(g) {
    c = g, n(1, c);
  }
  return t.$$set = (g) => {
    "entityType" in g && n(7, r = g.entityType), "selectMultiple" in g && n(0, i = g.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*filter*/
    4 && d.next(a), t.$$.dirty & /*withSubGroups*/
    2 && b(c);
  }, [
    i,
    c,
    a,
    u,
    p,
    o,
    h,
    r,
    $,
    y,
    _,
    v
  ];
}
class Pg extends de {
  constructor(e) {
    super(), fe(this, e, Ig, xg, ue, { entityType: 7, selectMultiple: 0 });
  }
}
function sl(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function ll(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function al(t) {
  let e, n;
  return e = new wt({
    props: {
      size: "small",
      $$slots: { default: [Rg] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function Rg(t) {
  let e;
  return {
    c() {
      e = F("arrow_back");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function cl(t) {
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
      e = P("div"), r = F(n), o = F(i), s = H(), C(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      O(f, e, d), x(e, r), x(e, o), x(e, s), c || (a = oe(e, "click", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && ye(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && ye(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && C(e, "class", l);
    },
    d(f) {
      f && R(e), c = !1, a();
    }
  };
}
function ul(t) {
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
  return n = new wt({
    props: {
      $$slots: { default: [Og] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = P("div"), V(n.$$.fragment);
    },
    m(o, s) {
      O(o, e, s), j(n, e, null), r = !0;
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
      o && R(e), B(n);
    }
  };
}
function Og(t) {
  let e;
  return {
    c() {
      e = F("done");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function fl(t) {
  var b;
  let e, n, r = (
    /*tenant*/
    ((b = t[15]) == null ? void 0 : b.Name) + ""
  ), i, o, s, l, c, a, u, f, d = (
    /*tenant*/
    t[15].Root && ul(t)
  );
  function p() {
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
      e = P("div"), n = P("div"), i = F(r), s = H(), d && d.c(), l = H(), C(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), C(e, "class", c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(h, m) {
      O(h, e, m), x(e, n), x(n, i), x(e, s), d && d.m(e, null), x(e, l), a = !0, u || (f = oe(e, "click", p), u = !0);
    },
    p(h, m) {
      var $;
      t = h, (!a || m & /*tenants*/
      8) && r !== (r = /*tenant*/
      (($ = t[15]) == null ? void 0 : $.Name) + "") && ye(i, r), (!a || m & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && C(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, m), m & /*tenants*/
      8 && T(d, 1)) : (d = ul(t), d.c(), T(d, 1), d.m(e, l)) : d && (pe(), I(d, 1, 1, () => {
        d = null;
      }), ge()), (!a || m & /*tw*/
      2 && c !== (c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && C(e, "class", c);
    },
    i(h) {
      a || (T(d), a = !0);
    },
    o(h) {
      I(d), a = !1;
    },
    d(h) {
      h && R(e), d && d.d(), u = !1, f();
    }
  };
}
function Dg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, p, b, h, m = (
    /*allowBack*/
    t[0] && al(t)
  ), $ = (
    /*tenantPath*/
    t[2]
  ), y = [];
  for (let A = 0; A < $.length; A += 1)
    y[A] = cl(ll(t, $, A));
  let _ = (
    /*tenants*/
    t[3]
  ), v = [];
  for (let A = 0; A < _.length; A += 1)
    v[A] = fl(sl(t, _, A));
  const g = (A) => I(v[A], 1, 1, () => {
    v[A] = null;
  });
  return {
    c() {
      e = P("div"), n = P("div"), m && m.c(), r = H(), i = P("div"), o = F("Mandant auswählen"), c = H(), a = P("div");
      for (let A = 0; A < y.length; A += 1)
        y[A].c();
      f = H(), d = P("div");
      for (let A = 0; A < v.length; A += 1)
        v[A].c();
      C(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), C(n, "class", l = /*tw*/
      t[1]`flex items-center`), C(a, "class", u = /*tw*/
      t[1]`flex mb-1`), Di(d, "grid-auto-rows", "60px"), C(d, "class", p = /*tw*/
      t[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`), C(e, "class", b = /*tw*/
      t[1]`w-full overflow-hidden flex flex-col`);
    },
    m(A, w) {
      O(A, e, w), x(e, n), m && m.m(n, null), x(n, r), x(n, i), x(i, o), x(e, c), x(e, a);
      for (let S = 0; S < y.length; S += 1)
        y[S] && y[S].m(a, null);
      x(e, f), x(e, d);
      for (let S = 0; S < v.length; S += 1)
        v[S] && v[S].m(d, null);
      h = !0;
    },
    p(A, [w]) {
      if (/*allowBack*/
      A[0] ? m ? (m.p(A, w), w & /*allowBack*/
      1 && T(m, 1)) : (m = al(A), m.c(), T(m, 1), m.m(n, r)) : m && (pe(), I(m, 1, 1, () => {
        m = null;
      }), ge()), (!h || w & /*tw*/
      2 && s !== (s = /*tw*/
      A[1]`font-bold text-gray-600 text-lg`)) && C(i, "class", s), (!h || w & /*tw*/
      2 && l !== (l = /*tw*/
      A[1]`flex items-center`)) && C(n, "class", l), w & /*tw, selectTenantInPath, tenantPath*/
      70) {
        $ = /*tenantPath*/
        A[2];
        let S;
        for (S = 0; S < $.length; S += 1) {
          const N = ll(A, $, S);
          y[S] ? y[S].p(N, w) : (y[S] = cl(N), y[S].c(), y[S].m(a, null));
        }
        for (; S < y.length; S += 1)
          y[S].d(1);
        y.length = $.length;
      }
      if ((!h || w & /*tw*/
      2 && u !== (u = /*tw*/
      A[1]`flex mb-1`)) && C(a, "class", u), w & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        _ = /*tenants*/
        A[3];
        let S;
        for (S = 0; S < _.length; S += 1) {
          const N = sl(A, _, S);
          v[S] ? (v[S].p(N, w), T(v[S], 1)) : (v[S] = fl(N), v[S].c(), T(v[S], 1), v[S].m(d, null));
        }
        for (pe(), S = _.length; S < v.length; S += 1)
          g(S);
        ge();
      }
      (!h || w & /*tw*/
      2 && p !== (p = /*tw*/
      A[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`)) && C(d, "class", p), (!h || w & /*tw*/
      2 && b !== (b = /*tw*/
      A[1]`w-full overflow-hidden flex flex-col`)) && C(e, "class", b);
    },
    i(A) {
      if (!h) {
        T(m);
        for (let w = 0; w < _.length; w += 1)
          T(v[w]);
        h = !0;
      }
    },
    o(A) {
      I(m), v = v.filter(Boolean);
      for (let w = 0; w < v.length; w += 1)
        I(v[w]);
      h = !1;
    },
    d(A) {
      A && R(e), m && m.d(), kt(y, A), kt(v, A);
    }
  };
}
function Mg(t, e, n) {
  let r = Ie(Mn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const c = Ge();
  async function a() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const _ = y[0];
      if (_.Root == null) {
        f(_);
        return;
      }
    }
    n(2, s = [new _c({ Id: "start", Name: "Start" })]), n(3, l = y);
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
      a();
      return;
    }
    const _ = s.findIndex((v) => v.Id === y.Id);
    n(2, s = s.slice(0, _ + 1)), u(y);
  }
  function p(y, _) {
    console.log(y, _), y.detail.stopPropagation(), c("tenantSelected", { tenant: _ });
  }
  a();
  const b = () => c("back"), h = (y) => d(y), m = (y, _) => p(_, y), $ = (y) => f(y);
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
    p,
    b,
    h,
    m,
    $
  ];
}
let tc = class extends de {
  constructor(e) {
    super(), fe(this, e, Mg, Dg, ue, { allowBack: 0, tw: 1 });
  }
};
function Ng(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, p, b;
  return n = new Ph({
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
  ), l = new Pg({
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
  ), u = new $g({
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
      e = P("div"), V(n.$$.fragment), i = H(), o = P("div"), s = P("div"), V(l.$$.fragment), c = H(), a = P("div"), V(u.$$.fragment), C(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), C(a, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), C(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), C(o, "class", p = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(h, m) {
      O(h, e, m), j(n, e, null), O(h, i, m), O(h, o, m), x(o, s), j(l, s, null), x(s, c), x(s, a), j(u, a, null), b = !0;
    },
    p(h, m) {
      const $ = {};
      m & /*selectMultiple*/
      2 && ($.selectMultiple = /*selectMultiple*/
      h[1]), m & /*entityType*/
      1 && ($.entityType = /*entityType*/
      h[0]), m & /*selectedTenant*/
      16 && ($.selectedTenant = /*selectedTenant*/
      h[4]), n.$set($), (!b || m & /*tw*/
      8 && r !== (r = /*tw*/
      h[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && C(e, "class", r);
      const y = {};
      m & /*entityType*/
      1 && (y.entityType = /*entityType*/
      h[0]), m & /*selectMultiple*/
      2 && (y.selectMultiple = /*selectMultiple*/
      h[1]), l.$set(y);
      const _ = {};
      m & /*selectMultiple*/
      2 && (_.selectMultiple = /*selectMultiple*/
      h[1]), m & /*entityType*/
      1 && (_.entityType = /*entityType*/
      h[0]), m & /*additionalFilter*/
      4 && (_.additionalFilter = /*additionalFilter*/
      h[2]), u.$set(_), (!b || m & /*tw*/
      8 && f !== (f = /*tw*/
      h[3]`flex-1 overflow-hidden mt-3`)) && C(a, "class", f), (!b || m & /*tw*/
      8 && d !== (d = /*tw*/
      h[3]`flex flex-col h-full overflow-hidden`)) && C(s, "class", d), (!b || m & /*tw*/
      8 && p !== (p = /*tw*/
      h[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && C(o, "class", p);
    },
    i(h) {
      b || (T(n.$$.fragment, h), T(l.$$.fragment, h), T(u.$$.fragment, h), b = !0);
    },
    o(h) {
      I(n.$$.fragment, h), I(l.$$.fragment, h), I(u.$$.fragment, h), b = !1;
    },
    d(h) {
      h && R(e), B(n), h && R(i), h && R(o), B(l), B(u);
    }
  };
}
function Ug(t) {
  let e, n;
  return e = new tc({
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
      V(e.$$.fragment);
    },
    m(r, i) {
      j(e, r, i), n = !0;
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
      B(e, r);
    }
  };
}
function Hg(t) {
  let e, n, r, i, o;
  const s = [Ug, Ng], l = [];
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
      n = c(a), n === f ? l[n].p(a, u) : (pe(), I(l[f], 1, 1, () => {
        l[f] = null;
      }), ge(), r = l[n], r ? r.p(a, u) : (r = l[n] = s[n](a), r.c()), T(r, 1), r.m(e, null)), (!o || u & /*tw*/
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
function Lg(t, e, n) {
  let { entityType: r = J.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = Ve } = e, l = Ie(Lt), c = Ie(Mn), a, u = !1, f = [], d = Ge(), p = Nt.subscribe((S) => {
    S.selectedTenant ? (n(5, u = !1), m(S.selectedTenant)) : n(5, u = !0);
  }), b = Mt.subscribe((S) => {
    S.selectedEntities && !i ? (h(S.selectedEntities), d("selectedEntities", S.selectedEntities[0])) : f = S.selectedEntities;
  });
  function h(S) {
    const N = hn(), z = N.value.lastSelectedEntities, K = S.filter((ne) => !z.includes(ne.Id)).map((ne) => ne.Id);
    z.unshift(...K), z.splice(5), N.update((ne) => ({
      ...ne,
      lastSelectedEntities: z
    }));
  }
  async function m(S) {
    try {
      n(4, a = await c.getTenantViewById(S));
    } catch (N) {
      console.error(N), n(5, u = !0);
    }
  }
  async function $(S) {
    console.log("Tenant selected", S);
    const N = await l.getEntityById(J.Group, S.Root);
    Nt.update((z) => ({ ...z, selectedTenant: S.Id })), hn().update((z) => ({ ...z, selectedGroup: N }));
  }
  function y() {
    n(5, u = !0);
  }
  function _() {
    h(f), d("selectedEntities", f);
  }
  Tt(() => {
    p.unsubscribe(), b.unsubscribe();
  });
  const v = () => n(5, u = !1), g = (S) => $(S.detail.tenant), A = () => y(), w = () => _();
  return t.$$set = (S) => {
    "entityType" in S && n(0, r = S.entityType), "selectMultiple" in S && n(1, i = S.selectMultiple), "additionalFilter" in S && n(2, o = S.additionalFilter), "tw" in S && n(3, s = S.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    8 && _t("tw", s);
  }, [
    r,
    i,
    o,
    s,
    a,
    u,
    $,
    y,
    _,
    v,
    g,
    A,
    w
  ];
}
let nc = class extends de {
  constructor(e) {
    super(), fe(this, e, Lg, Hg, ue, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function Fg(t) {
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
  return r = new nc({ props: a }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = P("div"), n = P("div"), V(r.$$.fragment), C(n, "class", i = /*tw*/
      t[3]`h-full w-full`), C(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      O(u, e, f), x(e, n), j(r, n, null), t[11](e), s = !0, l || (c = [
        oe(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        oe(e, "click", jg)
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
      u && R(e), t[9](null), B(r), t[11](null), l = !1, dt(c);
    }
  };
}
const jg = (t) => t.stopPropagation();
function Bg(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = J.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = Ve } = e, c = Ie("PopupService", new Sr(document.body)), a, u, f;
  const d = Ge();
  function p(v, g) {
    v && !f && g ? (f = c.openPopup("entity-select-dialog", g, {
      backdrop: !0,
      closeOnClickOutside: !0,
      positioning: "center",
      inTransitionClassList: "scale-100",
      inTransitionDuration: 125,
      outTransitionClassList: "!scale-50",
      outTransitionDuration: 125
    }), f.afterClosed.then(() => {
      console.log("dialog closed", u), u == null || u.$destroy(), f = null;
    })) : b();
  }
  function b() {
    console.log("closeDialog"), f == null || f.close();
  }
  function h(v) {
    console.log(v), v.key === "Escape" && b();
  }
  function m(v) {
    d("selectedEntities", v.detail);
  }
  function $(v) {
    he[v ? "unshift" : "push"](() => {
      u = v, n(5, u);
    });
  }
  const y = (v) => m(v);
  function _(v) {
    he[v ? "unshift" : "push"](() => {
      a = v, n(4, a);
    });
  }
  return t.$$set = (v) => {
    "open" in v && n(8, r = v.open), "entityType" in v && n(0, i = v.entityType), "selectMultiple" in v && n(1, o = v.selectMultiple), "additionalFilter" in v && n(2, s = v.additionalFilter), "tw" in v && n(3, l = v.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*open, dialogElement*/
    272 && p(r, a);
  }, [
    i,
    o,
    s,
    l,
    a,
    u,
    h,
    m,
    r,
    $,
    y,
    _
  ];
}
class zg extends de {
  constructor(e) {
    super(), fe(this, e, Bg, Fg, ue, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class dl {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new zg({
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
const fr = window, Eo = fr.ShadowRoot && (fr.ShadyCSS === void 0 || fr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ko = Symbol(), hl = /* @__PURE__ */ new WeakMap();
let rc = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== ko)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (Eo && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = hl.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && hl.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vg = (t) => new rc(typeof t == "string" ? t : t + "", void 0, ko), Mr = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new rc(n, t, ko);
}, Wg = (t, e) => {
  Eo ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = fr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, pl = Eo ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return Vg(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var hi;
const Tr = window, gl = Tr.trustedTypes, qg = gl ? gl.emptyScript : "", ml = Tr.reactiveElementPolyfillSupport, Vi = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? qg : null;
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
} }, ic = (t, e) => e !== t && (e == e || t == t), pi = { attribute: !0, type: String, converter: Vi, reflect: !1, hasChanged: ic };
let Yt = class extends HTMLElement {
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
  static createProperty(e, n = pi) {
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
    return this.elementProperties.get(e) || pi;
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
        n.unshift(pl(i));
    } else
      e !== void 0 && n.push(pl(e));
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
    return Wg(n, this.constructor.elementStyles), n;
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
  _$EO(e, n, r = pi) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : Vi).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : Vi;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || ic)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
Yt.finalized = !0, Yt.elementProperties = /* @__PURE__ */ new Map(), Yt.elementStyles = [], Yt.shadowRootOptions = { mode: "open" }, ml == null || ml({ ReactiveElement: Yt }), ((hi = Tr.reactiveElementVersions) !== null && hi !== void 0 ? hi : Tr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var gi;
const Ar = window, pn = Ar.trustedTypes, vl = pn ? pn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, yt = `lit$${(Math.random() + "").slice(9)}$`, oc = "?" + yt, Gg = `<${oc}>`, gn = document, jn = (t = "") => gn.createComment(t), Bn = (t) => t === null || typeof t != "object" && typeof t != "function", sc = Array.isArray, Jg = (t) => sc(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", $n = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _l = /-->/g, bl = />/g, It = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), yl = /'/g, wl = /"/g, lc = /^(?:script|style|textarea|title)$/i, mn = Symbol.for("lit-noChange"), _e = Symbol.for("lit-nothing"), Sl = /* @__PURE__ */ new WeakMap(), Xg = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new Gn(e.insertBefore(jn(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, on = gn.createTreeWalker(gn, 129, null, !1), Kg = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = $n;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let u, f, d = -1, p = 0;
    for (; p < a.length && (s.lastIndex = p, f = s.exec(a), f !== null); )
      p = s.lastIndex, s === $n ? f[1] === "!--" ? s = _l : f[1] !== void 0 ? s = bl : f[2] !== void 0 ? (lc.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = It) : f[3] !== void 0 && (s = It) : s === It ? f[0] === ">" ? (s = i ?? $n, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? It : f[3] === '"' ? wl : yl) : s === wl || s === yl ? s = It : s === _l || s === bl ? s = $n : (s = It, i = void 0);
    const b = s === It && t[c + 1].startsWith("/>") ? " " : "";
    o += s === $n ? a + Gg : d >= 0 ? (r.push(u), a.slice(0, d) + "$lit$" + a.slice(d) + yt + b) : a + yt + (d === -2 ? (r.push(void 0), c) : b);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [vl !== void 0 ? vl.createHTML(l) : l, r];
};
class zn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, c = this.parts, [a, u] = Kg(e, n);
    if (this.el = zn.createElement(a, r), on.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = on.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(yt)) {
              const p = u[s++];
              if (f.push(d), p !== void 0) {
                const b = i.getAttribute(p.toLowerCase() + "$lit$").split(yt), h = /([.?@])?(.*)/.exec(p);
                c.push({ type: 1, index: o, name: h[2], strings: b, ctor: h[1] === "." ? Qg : h[1] === "?" ? em : h[1] === "@" ? tm : Nr });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (lc.test(i.tagName)) {
          const f = i.textContent.split(yt), d = f.length - 1;
          if (d > 0) {
            i.textContent = pn ? pn.emptyScript : "";
            for (let p = 0; p < d; p++)
              i.append(f[p], jn()), on.nextNode(), c.push({ type: 2, index: ++o });
            i.append(f[d], jn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === oc)
          c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(yt, f + 1)) !== -1; )
            c.push({ type: 7, index: o }), f += yt.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = gn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function vn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === mn)
    return e;
  let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const a = Bn(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== a && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), a === void 0 ? c = void 0 : (c = new a(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = vn(t, c._$AS(t, e.values), c, r)), e;
}
class Yg {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : gn).importNode(r, !0);
    on.currentNode = o;
    let s = on.nextNode(), l = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (l === a.index) {
        let u;
        a.type === 2 ? u = new Gn(s, s.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (u = new nm(s, this, e)), this.v.push(u), a = i[++c];
      }
      l !== (a == null ? void 0 : a.index) && (s = on.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class Gn {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = _e, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = vn(this, e, n), Bn(e) ? e === _e || e == null || e === "" ? (this._$AH !== _e && this._$AR(), this._$AH = _e) : e !== this._$AH && e !== mn && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : Jg(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== _e && Bn(this._$AH) ? this._$AA.nextSibling.data = e : this.k(gn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = zn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new Yg(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = Sl.get(e.strings);
    return n === void 0 && Sl.set(e.strings, n = new zn(e)), n;
  }
  O(e) {
    sc(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new Gn(this.S(jn()), this.S(jn()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
class Nr {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = _e, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = _e;
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
      e = vn(this, e, n, 0), s = !Bn(e) || e !== this._$AH && e !== mn, s && (this._$AH = e);
    else {
      const l = e;
      let c, a;
      for (e = o[0], c = 0; c < o.length - 1; c++)
        a = vn(this, l[r + c], n, c), a === mn && (a = this._$AH[c]), s || (s = !Bn(a) || a !== this._$AH[c]), a === _e ? e = _e : e !== _e && (e += (a ?? "") + o[c + 1]), this._$AH[c] = a;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === _e ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Qg extends Nr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === _e ? void 0 : e;
  }
}
const Zg = pn ? pn.emptyScript : "";
class em extends Nr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== _e ? this.element.setAttribute(this.name, Zg) : this.element.removeAttribute(this.name);
  }
}
class tm extends Nr {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = vn(this, e, n, 0)) !== null && r !== void 0 ? r : _e) === mn)
      return;
    const i = this._$AH, o = e === _e && i !== _e || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== _e && (i === _e || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class nm {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    vn(this, e);
  }
}
const Cl = Ar.litHtmlPolyfillSupport;
Cl == null || Cl(zn, Gn), ((gi = Ar.litHtmlVersions) !== null && gi !== void 0 ? gi : Ar.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var mi, vi;
class St extends Yt {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Xg(n, this.renderRoot, this.renderOptions);
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
    return mn;
  }
}
St.finalized = !0, St._$litElement$ = !0, (mi = globalThis.litElementHydrateSupport) === null || mi === void 0 || mi.call(globalThis, { LitElement: St });
const El = globalThis.litElementPolyfillSupport;
El == null || El({ LitElement: St });
((vi = globalThis.litElementVersions) !== null && vi !== void 0 ? vi : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rm = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Ne(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : rm(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _i;
((_i = window.HTMLSlotElement) === null || _i === void 0 ? void 0 : _i.prototype.assignedElements) != null;
const im = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class tt {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? im);
  }
  createTwindContext(e) {
    if (e)
      return zp({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: Ve, styleSheet: null };
    {
      const n = za({ target: new CSSStyleSheet() }), { tw: r } = Ya({
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
var om = Object.defineProperty, sm = Object.getOwnPropertyDescriptor, ac = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? sm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && om(e, n, i), i;
};
const { tw: lm, styleSheet: am } = Ie(tt, new tt()).createTwindContext(), cm = Mr`
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
class Ur extends St {
  constructor() {
    super();
    Qe(this, "_element");
    mt(Sr, new Sr(document.body));
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
    this._element = new nc({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: lm
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
    return Object.values(J).includes(n);
  }
}
Qe(Ur, "styles", [am.target, cm]);
ac([
  Ne({ type: String, attribute: "entitytype" })
], Ur.prototype, "entityType", 2);
ac([
  Ne({ type: Boolean, attribute: "multiple" })
], Ur.prototype, "multiple", 2);
var um = Object.defineProperty, fm = Object.getOwnPropertyDescriptor, At = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? fm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && um(e, n, i), i;
};
const { tw: dm, styleSheet: hm } = Ie(tt, new tt()).createTwindContext(), pm = Mr`
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
class rt extends St {
  constructor() {
    super();
    Qe(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return this.multiple && this._select || ((n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new ec({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: dm
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
Qe(rt, "styles", [hm.target, pm]);
At([
  Ne({ attribute: "value", type: String })
], rt.prototype, "value", 2);
At([
  Ne({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), !0;
  } })
], rt.prototype, "arrayvalue", 2);
At([
  Ne({ attribute: "multiple", type: Boolean })
], rt.prototype, "multiple", 2);
At([
  Ne({ attribute: "options", type: Array })
], rt.prototype, "options", 2);
At([
  Ne({ attribute: "placeholder", type: String })
], rt.prototype, "placeholder", 2);
At([
  Ne({ attribute: "container$class", type: String })
], rt.prototype, "container$class", 2);
At([
  Ne({ attribute: "textfield$class", type: String })
], rt.prototype, "textfield$class", 2);
At([
  Ne({ attribute: "suffix$class", type: String })
], rt.prototype, "suffix$class", 2);
const { tw: gm, styleSheet: u0 } = Ie(tt, new tt()).createTwindContext();
Mr`
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
class mm extends St {
  constructor() {
    super();
    Qe(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new tc({
      target: n,
      props: {
        tw: gm
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function vm(t) {
  Bt(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
}
function kl(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[5].default
  ), l = Fe(
    s,
    t,
    /*$$scope*/
    t[4],
    null
  ), c = l || _m(t);
  return {
    c() {
      e = P("div"), n = P("span"), c && c.c(), C(n, "class", r = le(
        /*tw*/
        t[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0"), C(e, "class", i = le(
        /*tw*/
        t[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0");
    },
    m(a, u) {
      O(a, e, u), x(e, n), c && c.m(n, null), o = !0;
    },
    p(a, u) {
      l ? l.p && (!o || u & /*$$scope*/
      16) && Be(
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
        ) : ze(
          /*$$scope*/
          a[4]
        ),
        null
      ) : c && c.p && (!o || u & /*icon*/
      1) && c.p(a, o ? u : -1), (!o || u & /*tw*/
      4 && r !== (r = le(
        /*tw*/
        a[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0")) && C(n, "class", r), (!o || u & /*tw*/
      4 && i !== (i = le(
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
function _m(t) {
  let e;
  return {
    c() {
      e = F(
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
function bm(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*icon*/
    t[0] && kl(t)
  );
  return {
    c() {
      e = P("div"), u && u.c(), n = H(), r = P("div"), i = F(
        /*label*/
        t[1]
      ), C(r, "class", o = le(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-8br8x0"), C(e, "class", s = le(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0");
    },
    m(f, d) {
      O(f, e, d), u && u.m(e, null), x(e, n), x(e, r), x(r, i), l = !0, c || (a = oe(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), c = !0);
    },
    p(f, [d]) {
      /*icon*/
      f[0] ? u ? (u.p(f, d), d & /*icon*/
      1 && T(u, 1)) : (u = kl(f), u.c(), T(u, 1), u.m(e, n)) : u && (pe(), I(u, 1, 1, () => {
        u = null;
      }), ge()), (!l || d & /*label*/
      2) && ye(
        i,
        /*label*/
        f[1]
      ), (!l || d & /*tw*/
      4 && o !== (o = le(
        /*tw*/
        f[2]`flex-grow`
      ) + " svelte-8br8x0")) && C(r, "class", o), (!l || d & /*tw*/
      4 && s !== (s = le(
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
function ym(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: l } = e, c = Ge();
  const a = (u) => c("click", u);
  return t.$$set = (u) => {
    "icon" in u && n(0, o = u.icon), "label" in u && n(1, s = u.label), "tw" in u && n(2, l = u.tw), "$$scope" in u && n(4, i = u.$$scope);
  }, [o, s, l, c, i, r, a];
}
class wm extends de {
  constructor(e) {
    super(), fe(this, e, ym, bm, ue, { icon: 0, label: 1, tw: 2 }, vm);
  }
}
function Tl(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function Al(t) {
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
  return e = new wm({
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
      V(e.$$.fragment);
    },
    m(i, o) {
      j(e, i, o), n = !0;
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
      B(e, i);
    }
  };
}
function Sm(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Al(Tl(t, i, l));
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
          const u = Tl(l, i, a);
          o[a] ? (o[a].p(u, c), T(o[a], 1)) : (o[a] = Al(u), o[a].c(), T(o[a], 1), o[a].m(e, null));
        }
        for (pe(), a = i.length; a < o.length; a += 1)
          s(a);
        ge();
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
      l && R(e), kt(o, l);
    }
  };
}
function Cm(t) {
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
    $$slots: { default: [Sm] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (a.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (a.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (a.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new Qa({ props: a }), he.push(() => nn(e, "anchorElement", s)), t[14](e), he.push(() => nn(e, "preferedHorizontalAlignment", l)), he.push(() => nn(e, "preferedVerticalAlignment", c)), {
      c() {
        V(e.$$.fragment);
      },
      m(u, f) {
        j(e, u, f), o = !0;
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
        u[7], tn(() => n = !1)), !r && f & /*preferedHorizontalAlignment*/
        2 && (r = !0, d.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
        u[1], tn(() => r = !1)), !i && f & /*preferedVerticalAlignment*/
        1 && (i = !0, d.preferedVerticalAlignment = /*preferedVerticalAlignment*/
        u[0], tn(() => i = !1)), e.$set(d);
      },
      i(u) {
        o || (T(e.$$.fragment, u), o = !0);
      },
      o(u) {
        I(e.$$.fragment, u), o = !1;
      },
      d(u) {
        t[14](null), B(e, u);
      }
    }
  );
}
function Em(t, e, n) {
  let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 10 } } = e, { container$class: l } = e, { tw: c = Ve } = e, { closeOnClick: a = !0 } = e, { items: u = [] } = e, f, d;
  function p() {
    console.log("openMenu", f, u), d.openPopup();
  }
  function b() {
    d.closePopup();
  }
  const h = (v, g) => v.action(g);
  function m(v) {
    f = v, n(7, f), n(9, r);
  }
  function $(v) {
    he[v ? "unshift" : "push"](() => {
      d = v, n(8, d);
    });
  }
  function y(v) {
    o = v, n(1, o);
  }
  function _(v) {
    i = v, n(0, i);
  }
  return t.$$set = (v) => {
    "anchorSelector" in v && n(9, r = v.anchorSelector), "preferedVerticalAlignment" in v && n(0, i = v.preferedVerticalAlignment), "preferedHorizontalAlignment" in v && n(1, o = v.preferedHorizontalAlignment), "positionOffset" in v && n(2, s = v.positionOffset), "container$class" in v && n(3, l = v.container$class), "tw" in v && n(4, c = v.tw), "closeOnClick" in v && n(5, a = v.closeOnClick), "items" in v && n(6, u = v.items);
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
    p,
    b,
    h,
    m,
    $,
    y,
    _
  ];
}
class km extends de {
  constructor(e) {
    super(), fe(this, e, Em, Cm, ue, {
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
var Tm = Object.defineProperty, Am = Object.getOwnPropertyDescriptor, Hr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Am(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Tm(e, n, i), i;
};
const { tw: f0, styleSheet: $m } = Ie(tt, new tt()).createTwindContext(), xm = Mr`
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
class Sn extends St {
  constructor() {
    super();
    Qe(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new km({
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
Qe(Sn, "styles", [$m.target, xm]);
Hr([
  Ne({ attribute: "items", type: Array })
], Sn.prototype, "items", 2);
Hr([
  Ne({ attribute: "closeonclick", type: Boolean })
], Sn.prototype, "closeOnClick", 2);
Hr([
  Ne({ attribute: "container$class", type: String })
], Sn.prototype, "container$class", 2);
Hr([
  Ne({ attribute: "anchorselector", type: String })
], Sn.prototype, "anchorSelector", 2);
const Im = Ur, Pm = mm;
function d0() {
  rr("audako-entity-select", Im), rr("audako-tenant-select", Pm), rr("audako-select", rt), rr("audako-menu", Sn), Ie(tt, new tt()).createTwindContext(!0);
}
function h0(t, e) {
  const n = new Lt(t, e);
  mt(Ii, new Ii(t, e)), mt(Lt, n), mt(Mn, new Mn(t, e)), mt(Nn, new Nn(n)), mt(xi, new xi(t, e)), mt(dl, new dl()), mt(ws, new ws(t, e));
}
function rr(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  yn as BaseHttpService,
  yi as BitSelectConversionTypes,
  Bm as ChangeRateMonitoringSettings,
  Do as CompressionInterval,
  qe as ConditionSettings,
  We as ConfigurationEntity,
  Nm as ConnectionFailureConditionSettings,
  Mm as CounterConditionSettings,
  i0 as CounterOffset,
  hc as Dashboard,
  wc as DashboardTab,
  vc as DataConnection,
  Um as DataConnectionFailureConditionSettings,
  Po as DataConnectionOpcUaSecurityAuthentication,
  Io as DataConnectionOpcUaSecurityMode,
  xo as DataConnectionOpcUaSecurityPolicy,
  Xm as DataConnectionOpcUaSettings,
  Ro as DataConnectionOpcUaStringEncoding,
  Jm as DataConnectionS7Settings,
  $l as DataConnectionSettings,
  $o as DataConnectionType,
  mc as DataSource,
  xi as DataSourceHttpService,
  Ao as DataSourceType,
  qm as DifferenceMonitoringSettings,
  fc as EntityHttpEndpoints,
  Lt as EntityHttpService,
  Om as EntityIcons,
  Nn as EntityNameService,
  Im as EntitySelect,
  dl as EntitySelectDialogService,
  J as EntityType,
  Ac as EntityTypeClassMapping,
  e0 as EntityUtils,
  Sc as EventCategory,
  gc as EventCondition,
  bi as EventConditionSettingsType,
  pc as EventDefinition,
  M as Field,
  Cc as Formula,
  dc as Group,
  r0 as HistoricalValue,
  o0 as HistoricalValueObject,
  ws as HistoricalValueService,
  bs as LiveHubEvent,
  In as LiveHubMethod,
  Ii as LiveValueService,
  Lm as MaximumMonitoringSettings,
  Hm as MinimumMonitoringSettings,
  Gm as ObjectSettings,
  Uo as ObjectUtils,
  Fm as PeriodMaximumMonitoringSettings,
  jm as PeriodMaximumMonitoringSettingsPeriod,
  zm as PlausibilityMonitoringSettings,
  Vm as PositionMonitoringSettings,
  kc as ProcessImage,
  Wm as RecordingFailureMonitoringSettings,
  Si as RecordingSpecialProcessingType,
  Rn as RecordingType,
  bc as Signal,
  wi as SignalAnalogSettings,
  Il as SignalCompressionSettings,
  ee as SignalCompressionType,
  Dm as SignalConditionSettings,
  To as SignalConditionSettingsOperator,
  yc as SignalCounterSettings,
  Oo as SignalDigitalSettings,
  xl as SignalRecordingSettings,
  Wi as SignalSettings,
  Ke as SignalType,
  Ym as SignalTypeSettingsMap,
  ys as SubscriptionPrefix,
  Mn as TenantHttpService,
  Pm as TenantSelect,
  _c as TenantView,
  Km as UserProfile,
  t0 as UserProfileHttpService,
  Zm as getDefaultCompressionSettingsBySignalType,
  Qm as getDefaultRecordingSettingsBySignalType,
  h0 as registerCoreServices,
  d0 as registerCustomElements,
  Ie as resolveService,
  mt as tryRegisterService
};
