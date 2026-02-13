var dc = Object.defineProperty;
var hc = (t, e, n) => e in t ? dc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var rt = (t, e, n) => (hc(t, typeof e != "symbol" ? e + "" : e, n), n);
var X;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition";
})(X || (X = {}));
const a0 = {
  [X.Group]: "fas fa-folder",
  [X.Dashboard]: "adk adk-dashboard",
  [X.Signal]: "fas fa-code",
  [X.DataConnection]: "fas fa-circle-notch",
  [X.DataSource]: "fas fa-server"
}, pc = {
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
class F {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class Je {
  constructor(e) {
    this.Name = new F(), this.Description = new F(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class gc extends Je {
  constructor() {
    super();
  }
}
class mc extends Je {
}
class bc extends Je {
}
class _c extends Je {
}
var wi;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.MinimumMonitoringSettings = "MinimumMonitoringSettings", t.MaximumMonitoringSettings = "MaximumMonitoringSettings", t.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", t.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", t.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", t.PositionMonitoringSettings = "PositionMonitoringSettings", t.CounterConditionSettings = "CounterConditionSettings", t.TimebasedConditionSettings = "TimebasedConditionSettings", t.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", t.DataConnectionFailure = "DataConnectionFailure", t.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", t.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
})(wi || (wi = {}));
var Io;
(function(t) {
  t.Equal = "Equal", t.GreaterThan = "GreaterThan", t.GreaterThanOrEqual = "GreaterThanOrEqual", t.LessThan = "LessThan", t.LessThanOrEqual = "LessThanOrEqual", t.NotEqual = "NotEqual";
})(Io || (Io = {}));
class Ke {
}
class c0 extends Ke {
}
class u0 extends Ke {
}
class f0 extends Ke {
}
class d0 extends Ke {
}
class h0 extends Ke {
}
class p0 extends Ke {
}
class g0 extends Ke {
  constructor() {
    super(), this.Periods = [];
  }
}
class m0 {
}
class b0 extends Ke {
}
class _0 extends Ke {
}
class y0 extends Ke {
}
class v0 extends Ke {
  constructor() {
    super(), this._t = wi.RecordingFailureMonitoringSettings, this.SignalId = new F(null), this.MaxOutageTime = new F(6e4);
  }
}
class w0 extends Ke {
}
class S0 {
}
var Po;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter", t.SmartDevice = "SmartDevice";
})(Po || (Po = {}));
class yc extends Je {
}
var Ro;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp";
})(Ro || (Ro = {}));
class vc extends Je {
}
class kl {
  constructor(e) {
    this._t = e;
  }
}
class E0 extends kl {
  constructor() {
    super("DataConnectionS7Settings");
  }
}
var Oo;
(function(t) {
  t.None = "None", t.Basic128Rsa15 = "Basic128Rsa15", t.Basic256 = "Basic256", t.Basic256Sha256 = "Basic256Sha256";
})(Oo || (Oo = {}));
var Do;
(function(t) {
  t.None = "None", t.Sign = "Sign", t.SignAndEncrypt = "SignAndEncrypt";
})(Do || (Do = {}));
var Mo;
(function(t) {
  t.Anonymous = "Anonymous", t.Credentials = "Credentials", t.Certificate = "Certificate";
})(Mo || (Mo = {}));
var No;
(function(t) {
  t.ASCII = "ASCII", t.UTF7 = " UTF7", t.UTF8 = "UTF8", t.Unicode = "Unicode", t.UTF32 = "UTF32";
})(No || (No = {}));
class C0 extends kl {
  constructor() {
    super("DataConnectionOpcUaSettings");
  }
}
class wc {
  constructor(e) {
    Object.assign(this, e);
  }
}
class k0 {
}
var Qe;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniversalInput", t.UniversalInOut = "UniversalInOut";
})(Qe || (Qe = {}));
class Sc extends Je {
  constructor() {
    super(), this.Alias = new F(), this.Type = new F(Qe.AnalogInput), this.DataConnectionId = new F(), this.Address = new F(), this.Settings = new Ei(), this.RecordingSettings = new Tl(), this.CompressionSettings = new Al();
  }
}
var Si;
(function(t) {
  t.None = "None", t.SByte = "SByte", t.Short = "Short", t.Int = "Int";
})(Si || (Si = {}));
class Ki {
  constructor(e) {
    this._t = e;
  }
}
class Uo extends Ki {
  constructor() {
    super("SignalDigitalSettings"), this.DigitalTrueColor = new F(), this.DigitalTrueCaption = new F(), this.DigitalFalseColor = new F(), this.DigitalFalseCaption = new F(), this.Invert = new F(!1), this.BitSelect = new F(), this.BitSelectConversion = new F(Si.None);
  }
}
class Ei extends Ki {
  constructor() {
    super("SignalAnalogSettings"), this.MinValue = new F(0), this.MaxValue = new F(100), this.DefaultValue = new F(null), this.DecimalPlaces = new F(0), this.Unit = new F(), this.Factor = new F(1), this.Offset = new F(0);
  }
}
class Ec extends Ki {
  constructor() {
    super("SignalCounterSettings"), this.MaxValue = new F(100), this.OffsetAutomatic = new F(!0), this.OffsetDetection = new F(!0), this.DecimalPlaces = new F(0), this.Unit = new F(), this.Factor = new F(1), this.Offset = new F(0);
  }
}
const T0 = {
  AnalogInput: Ei,
  AnalogInOut: Ei,
  DigitalInput: Uo,
  DigitalInOut: Uo,
  Counter: Ec,
  UniversalInput: null,
  UniversalInOut: null
};
var Ci;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(Ci || (Ci = {}));
var Un;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})(Un || (Un = {}));
class Tl {
  constructor() {
    this.SpecialProcessingType = new F(Ci.None), this.Type = new F(Un.MeanValue), this.Interval = new F(300);
  }
}
function A0(t) {
  const e = new Tl();
  return t === Qe.AnalogInput || t === Qe.AnalogInOut ? e.Type.Value = Un.MeanValue : (t === Qe.Counter || t === Qe.DigitalInput || t === Qe.DigitalInOut) && (e.Type.Value = Un.LastValue), e;
}
var ne;
(function(t) {
  t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
})(ne || (ne = {}));
class Al {
  constructor() {
    this.Timezones = new F(), this.Timezones = new F([]), this.SubIntervalCompressionType = new F(ne.None), this.HourIntervalCompressionType = new F(ne.None), this.TwoHourIntervalCompressionType = new F(ne.None), this.DayIntervalCompressionType = new F(ne.None), this.WeekIntervalCompressionType = new F(ne.None), this.MonthIntervalCompressionType = new F(ne.None), this.QuarterIntervalCompressionType = new F(ne.None), this.YearIntervalCompressionType = new F(ne.None);
  }
}
function x0(t) {
  const e = new Al();
  return t === Qe.AnalogInput || t === Qe.AnalogInOut ? (e.SubIntervalCompressionType.Value = ne.ArithmeticMean, e.HourIntervalCompressionType.Value = ne.ArithmeticMean, e.TwoHourIntervalCompressionType.Value = ne.ArithmeticMean, e.DayIntervalCompressionType.Value = ne.ArithmeticMean, e.WeekIntervalCompressionType.Value = ne.ArithmeticMean, e.MonthIntervalCompressionType.Value = ne.ArithmeticMean, e.QuarterIntervalCompressionType.Value = ne.ArithmeticMean, e.YearIntervalCompressionType.Value = ne.ArithmeticMean) : t === Qe.Counter && (e.SubIntervalCompressionType.Value = ne.Sum, e.HourIntervalCompressionType.Value = ne.Sum, e.TwoHourIntervalCompressionType.Value = ne.Sum, e.DayIntervalCompressionType.Value = ne.Sum, e.WeekIntervalCompressionType.Value = ne.Difference, e.MonthIntervalCompressionType.Value = ne.Difference, e.QuarterIntervalCompressionType.Value = ne.Difference, e.YearIntervalCompressionType.Value = ne.Difference), e;
}
var Fo;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(Fo || (Fo = {}));
class Cc extends Je {
}
class kc extends Je {
}
class Tc extends Je {
  constructor() {
    super(), this.CalculateOnlyWithFullVariableSet = new F(!1), this.NumericSettings = new Ac(), this.ProcessIntervalSettings = new ut(), this.SubIntervalSettings = new ut(), this.HourIntervalSettings = new ut(), this.TwoHourIntervalSettings = new ut(), this.DayIntervalSettings = new ut(), this.WeekIntervalSettings = new ut(), this.MonthIntervalSettings = new ut(), this.QuarterIntervalSettings = new ut(), this.YearIntervalSettings = new ut();
  }
}
class ut {
  constructor() {
    this.Formula = new F(), this.CompressionType = new F(ki.ArithmeticMean), this.ProvidePreValues = new F(!1), this.ProvideLastValues = new F(!1), this.ValueIntervalType = new F(null);
  }
}
class Ac {
  constructor() {
    this.DecimalPlaces = new F(3), this.Unit = new F();
  }
}
var ki;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(ki || (ki = {}));
class xc extends Je {
}
class $c extends Je {
}
var Ho;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
})(Ho || (Ho = {}));
var Lo;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})(Lo || (Lo = {}));
const Ic = {
  [X.Group]: gc,
  [X.Signal]: Sc,
  [X.Dashboard]: mc,
  [X.DashboardTab]: Cc,
  [X.DataConnection]: vc,
  [X.DataSource]: yc,
  [X.EventCategory]: kc,
  [X.EventCondition]: _c,
  [X.EventDefinition]: bc,
  [X.Formula]: Tc,
  [X.ProcessImage]: xc,
  [X.BatchDefinition]: $c
};
class jo {
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
class $0 {
  static isEntityType(e) {
    return Object.keys(X).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = Ic[e];
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
      l === "AdditionalFields" ? (console.log(s, c), !((i = s[c]) === null || i === void 0) && i.Value && (s = jo.tryParseJson(s[c].Value), console.log("AdditionalValue", s))) : s = s[c], l = c;
    }
    return r || F.isField(s) ? s == null ? void 0 : s.Value : s;
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
      F.isField(s) ? i.push({
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
    if (!e || n.length === 0)
      return;
    const l = Object.keys(e);
    if (i === "AdditionalFields") {
      this._setAdditionalField(e, n, r);
      return;
    }
    const c = n.shift();
    if (n.length === 0) {
      if (s && !l.includes(c))
        return;
      o || F.isField(e[c]) ? e[c] = new F(r) : e[c] = r;
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
      e[i] = new F(r == null ? void 0 : r.toString());
      return;
    } else {
      let o = e[i] ? jo.tryParseJson(e[i].Value, {}) : {};
      for (const s of n)
        n.indexOf(s) === n.length - 1 ? o[s] = r : (o[s] = o[s] || {}, o = o[s]);
      e[i] = new F(JSON.stringify(o));
    }
  }
}
var Pc = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
function I0(t) {
  return Pc(this, void 0, void 0, function* () {
    try {
      return [null, yield Promise.resolve(t)];
    } catch (e) {
      return [e, null];
    }
  });
}
function xl(t) {
  return t == null;
}
function P0(t) {
  return xl(t) || t.length === 0;
}
function R0(t) {
  return xl(t) || t.trim().length === 0;
}
var Ti = function(t, e) {
  return Ti = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ti(t, e);
};
function at(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ti(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Rc(t, e, n, r) {
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
function $l(t, e) {
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
function fn(t) {
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
function $t(t, e) {
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
function It(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function rn(t) {
  return this instanceof rn ? (this.v = t, this) : new rn(t);
}
function Oc(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(m) {
      return new Promise(function(p, h) {
        o.push([d, m, p, h]) > 1 || l(d, m);
      });
    });
  }
  function l(d, m) {
    try {
      c(r[d](m));
    } catch (p) {
      f(o[0][3], p);
    }
  }
  function c(d) {
    d.value instanceof rn ? Promise.resolve(d.value.v).then(a, u) : f(o[0][2], d);
  }
  function a(d) {
    l("next", d);
  }
  function u(d) {
    l("throw", d);
  }
  function f(d, m) {
    d(m), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function Dc(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof fn == "function" ? fn(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function ae(t) {
  return typeof t == "function";
}
function Xi(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ei = Xi(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function kr(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Kn = function() {
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
            for (var l = fn(s), c = l.next(); !c.done; c = l.next()) {
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
      if (ae(u))
        try {
          u();
        } catch (h) {
          o = h instanceof ei ? h.errors : [h];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = fn(f), m = d.next(); !m.done; m = d.next()) {
            var p = m.value;
            try {
              Bo(p);
            } catch (h) {
              o = o ?? [], h instanceof ei ? o = It(It([], $t(o)), $t(h.errors)) : o.push(h);
            }
          }
        } catch (h) {
          r = { error: h };
        } finally {
          try {
            m && !m.done && (i = d.return) && i.call(d);
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
        Bo(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && kr(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && kr(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Il = Kn.EMPTY;
function Pl(t) {
  return t instanceof Kn || t && "closed" in t && ae(t.remove) && ae(t.add) && ae(t.unsubscribe);
}
function Bo(t) {
  ae(t) ? t() : t.unsubscribe();
}
var Rl = {
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
    return i != null && i.setTimeout ? i.setTimeout.apply(i, It([t, e], $t(n))) : setTimeout.apply(void 0, It([t, e], $t(n)));
  },
  clearTimeout: function(t) {
    var e = Ai.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Ol(t) {
  Ai.setTimeout(function() {
    throw t;
  });
}
function xi() {
}
function gr(t) {
  t();
}
var Yi = function(t) {
  at(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Pl(n) && n.add(r)) : r.destination = Fc, r;
  }
  return e.create = function(n, r, i) {
    return new dn(n, r, i);
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
}(Kn), Mc = Function.prototype.bind;
function ti(t, e) {
  return Mc.call(t, e);
}
var Nc = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        ir(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        ir(r);
      }
    else
      ir(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ir(n);
      }
  }, t;
}(), dn = function(t) {
  at(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    if (ae(n) || !n)
      s = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      o && Rl.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && ti(n.next, l),
        error: n.error && ti(n.error, l),
        complete: n.complete && ti(n.complete, l)
      }) : s = n;
    }
    return o.destination = new Nc(s), o;
  }
  return e;
}(Yi);
function ir(t) {
  Ol(t);
}
function Uc(t) {
  throw t;
}
var Fc = {
  closed: !0,
  next: xi,
  error: Uc,
  complete: xi
}, Qi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Sn(t) {
  return t;
}
function Hc(t) {
  return t.length === 0 ? Sn : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Pe = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, o = jc(e) ? e : new dn(e, n, r);
    return gr(function() {
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
    return n = zo(n), new n(function(i, o) {
      var s = new dn({
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
  }, t.prototype[Qi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Hc(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = zo(e), new e(function(r, i) {
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
function zo(t) {
  var e;
  return (e = t ?? Rl.Promise) !== null && e !== void 0 ? e : Promise;
}
function Lc(t) {
  return t && ae(t.next) && ae(t.error) && ae(t.complete);
}
function jc(t) {
  return t && t instanceof Yi || Lc(t) && Pl(t);
}
function Bc(t) {
  return ae(t == null ? void 0 : t.lift);
}
function De(t) {
  return function(e) {
    if (Bc(e))
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
function Se(t, e, n, r, i) {
  return new zc(t, e, n, r, i);
}
var zc = function(t) {
  at(e, t);
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
}(Yi), Vc = Xi(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ie = function(t) {
  at(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Vo(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Vc();
  }, e.prototype.next = function(n) {
    var r = this;
    gr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = fn(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
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
    gr(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    gr(function() {
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
    return o || s ? Il : (this.currentObservers = null, l.push(n), new Kn(function() {
      r.currentObservers = null, kr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Pe();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Vo(n, r);
  }, e;
}(Pe), Vo = function(t) {
  at(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Il;
  }, e;
}(Ie), Zi = function(t) {
  at(e, t);
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
}(Ie), eo = {
  now: function() {
    return (eo.delegate || Date).now();
  },
  delegate: void 0
}, Dl = function(t) {
  at(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = eo);
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
}(Ie), Wc = function(t) {
  at(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Kn), Tr = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = Tr.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, It([t, e], $t(n))) : setInterval.apply(void 0, It([t, e], $t(n)));
  },
  clearInterval: function(t) {
    var e = Tr.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, qc = function(t) {
  at(e, t);
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
    return i === void 0 && (i = 0), Tr.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    Tr.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, kr(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Wc), Wo = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = eo.now, t;
}(), Gc = function(t) {
  at(e, t);
  function e(n, r) {
    r === void 0 && (r = Wo.now);
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
}(Wo), Lr = new Gc(qc), Jc = Lr, Kc = new Pe(function(t) {
  return t.complete();
});
function Ml(t) {
  return t && ae(t.schedule);
}
function Nl(t) {
  return t[t.length - 1];
}
function Xc(t) {
  return ae(Nl(t)) ? t.pop() : void 0;
}
function to(t) {
  return Ml(Nl(t)) ? t.pop() : void 0;
}
var Ul = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Fl(t) {
  return ae(t == null ? void 0 : t.then);
}
function Hl(t) {
  return ae(t[Qi]);
}
function Ll(t) {
  return Symbol.asyncIterator && ae(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function jl(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Yc() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Bl = Yc();
function zl(t) {
  return ae(t == null ? void 0 : t[Bl]);
}
function Vl(t) {
  return Oc(this, arguments, function() {
    var n, r, i, o;
    return $l(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, rn(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, rn(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, rn(i)];
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
function Wl(t) {
  return ae(t == null ? void 0 : t.getReader);
}
function et(t) {
  if (t instanceof Pe)
    return t;
  if (t != null) {
    if (Hl(t))
      return Qc(t);
    if (Ul(t))
      return Zc(t);
    if (Fl(t))
      return eu(t);
    if (Ll(t))
      return ql(t);
    if (zl(t))
      return tu(t);
    if (Wl(t))
      return nu(t);
  }
  throw jl(t);
}
function Qc(t) {
  return new Pe(function(e) {
    var n = t[Qi]();
    if (ae(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Zc(t) {
  return new Pe(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function eu(t) {
  return new Pe(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Ol);
  });
}
function tu(t) {
  return new Pe(function(e) {
    var n, r;
    try {
      for (var i = fn(t), o = i.next(); !o.done; o = i.next()) {
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
function ql(t) {
  return new Pe(function(e) {
    ru(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function nu(t) {
  return ql(Vl(t));
}
function ru(t, e) {
  var n, r, i, o;
  return Rc(this, void 0, void 0, function() {
    var s, l;
    return $l(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Dc(t), c.label = 1;
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
function pt(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function Gl(t, e) {
  return e === void 0 && (e = 0), De(function(n, r) {
    n.subscribe(Se(r, function(i) {
      return pt(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return pt(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return pt(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Jl(t, e) {
  return e === void 0 && (e = 0), De(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function iu(t, e) {
  return et(t).pipe(Jl(e), Gl(e));
}
function ou(t, e) {
  return et(t).pipe(Jl(e), Gl(e));
}
function su(t, e) {
  return new Pe(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function lu(t, e) {
  return new Pe(function(n) {
    var r;
    return pt(n, e, function() {
      r = t[Bl](), pt(n, e, function() {
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
      return ae(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Kl(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Pe(function(n) {
    pt(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      pt(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function au(t, e) {
  return Kl(Vl(t), e);
}
function cu(t, e) {
  if (t != null) {
    if (Hl(t))
      return iu(t, e);
    if (Ul(t))
      return su(t, e);
    if (Fl(t))
      return ou(t, e);
    if (Ll(t))
      return Kl(t, e);
    if (zl(t))
      return lu(t, e);
    if (Wl(t))
      return au(t, e);
  }
  throw jl(t);
}
function Gt(t, e) {
  return e ? cu(t, e) : et(t);
}
function on() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = to(t);
  return Gt(t, n);
}
function uu(t) {
  return !!t && (t instanceof Pe || ae(t.lift) && ae(t.subscribe));
}
var fu = Xi(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Fn(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new dn({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new fu());
      }
    });
    t.subscribe(o);
  });
}
function du(t) {
  return t instanceof Date && !isNaN(t);
}
function hn(t, e) {
  return De(function(n, r) {
    var i = 0;
    n.subscribe(Se(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var hu = Array.isArray;
function pu(t, e) {
  return hu(e) ? t.apply(void 0, It([], $t(e))) : t(e);
}
function gu(t) {
  return hn(function(e) {
    return pu(t, e);
  });
}
var mu = Array.isArray, bu = Object.getPrototypeOf, _u = Object.prototype, yu = Object.keys;
function vu(t) {
  if (t.length === 1) {
    var e = t[0];
    if (mu(e))
      return { args: e, keys: null };
    if (wu(e)) {
      var n = yu(e);
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
function wu(t) {
  return t && typeof t == "object" && bu(t) === _u;
}
function Su(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function Xl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = to(t), r = Xc(t), i = vu(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return Gt([], n);
  var l = new Pe(Eu(o, n, s ? function(c) {
    return Su(s, c);
  } : Sn));
  return r ? l.pipe(gu(r)) : l;
}
function Eu(t, e, n) {
  return n === void 0 && (n = Sn), function(r) {
    qo(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, c = function(u) {
        qo(e, function() {
          var f = Gt(t[u], e), d = !1;
          f.subscribe(Se(r, function(m) {
            o[u] = m, d || (d = !0, l--), l || r.next(n(o.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, a = 0; a < i; a++)
        c(a);
    }, r);
  };
}
function qo(t, e, n) {
  t ? pt(n, t, e) : e();
}
function Cu(t, e, n, r, i, o, s, l) {
  var c = [], a = 0, u = 0, f = !1, d = function() {
    f && !c.length && !a && e.complete();
  }, m = function(h) {
    return a < r ? p(h) : c.push(h);
  }, p = function(h) {
    o && e.next(h), a++;
    var g = !1;
    et(n(h, u++)).subscribe(Se(e, function(k) {
      i == null || i(k), o ? m(k) : e.next(k);
    }, function() {
      g = !0;
    }, void 0, function() {
      if (g)
        try {
          a--;
          for (var k = function() {
            var y = c.shift();
            s ? pt(e, s, function() {
              return p(y);
            }) : p(y);
          }; c.length && a < r; )
            k();
          d();
        } catch (y) {
          e.error(y);
        }
    }));
  };
  return t.subscribe(Se(e, m, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function Yl(t, e, n) {
  return n === void 0 && (n = 1 / 0), ae(e) ? Yl(function(r, i) {
    return hn(function(o, s) {
      return e(r, o, i, s);
    })(et(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), De(function(r, i) {
    return Cu(r, i, t, n);
  }));
}
function ku(t) {
  return t === void 0 && (t = 1 / 0), Yl(Sn, t);
}
function Tu() {
  return ku(1);
}
function Au() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Tu()(Gt(t, to(t)));
}
function Ql(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = Jc);
  var r = -1;
  return e != null && (Ml(e) ? n = e : r = e), new Pe(function(i) {
    var o = du(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function Hn(t, e) {
  return De(function(n, r) {
    var i = 0;
    n.subscribe(Se(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function xu(t) {
  return De(function(e, n) {
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
    e.subscribe(Se(n, function(a) {
      r = !0, i = a, o || et(t(a)).subscribe(o = Se(n, l, c));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function $u(t, e) {
  return e === void 0 && (e = Lr), xu(function() {
    return Ql(t, e);
  });
}
function Zl(t) {
  return De(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(Se(n, void 0, void 0, function(s) {
      o = et(t(s, Zl(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function Iu(t, e) {
  return e === void 0 && (e = Lr), De(function(n, r) {
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
    n.subscribe(Se(r, function(a) {
      o = a, s = e.now(), i || (i = e.schedule(c, t), r.add(i));
    }, function() {
      l(), r.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function Pu(t) {
  return t <= 0 ? function() {
    return Kc;
  } : De(function(e, n) {
    var r = 0;
    e.subscribe(Se(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Ru(t) {
  return hn(function() {
    return t;
  });
}
function Ou(t, e) {
  return e === void 0 && (e = Sn), t = t ?? Du, De(function(n, r) {
    var i, o = !0;
    n.subscribe(Se(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function Du(t, e) {
  return t === e;
}
function Mu(t, e) {
  return Ou(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function Nu(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Ie();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, c = l === void 0 ? !0 : l;
  return function(a) {
    var u, f, d, m = 0, p = !1, h = !1, g = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, k = function() {
      g(), u = d = void 0, p = h = !1;
    }, y = function() {
      var _ = u;
      k(), _ == null || _.unsubscribe();
    };
    return De(function(_, b) {
      m++, !h && !p && g();
      var v = d = d ?? n();
      b.add(function() {
        m--, m === 0 && !h && !p && (f = ni(y, c));
      }), v.subscribe(b), !u && m > 0 && (u = new dn({
        next: function(A) {
          return v.next(A);
        },
        error: function(A) {
          h = !0, g(), f = ni(k, i, A), v.error(A);
        },
        complete: function() {
          p = !0, g(), f = ni(k, s), v.complete();
        }
      }), et(_).subscribe(u));
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
    var i = new dn({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, It([], $t(n))).subscribe(i);
  }
}
function Uu(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, Nu({
    connector: function() {
      return new Dl(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function Fu(t) {
  return Hn(function(e, n) {
    return t <= n;
  });
}
function ea(t, e) {
  return De(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Se(r, function(c) {
      i == null || i.unsubscribe();
      var a = 0, u = o++;
      et(t(c, u)).subscribe(i = Se(r, function(f) {
        return r.next(e ? e(c, f, u, a++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function gt(t) {
  return De(function(e, n) {
    et(t).subscribe(Se(n, function() {
      return n.complete();
    }, xi)), !n.closed && e.subscribe(n);
  });
}
function Hu(t, e, n) {
  var r = ae(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? De(function(i, o) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var l = !0;
    i.subscribe(Se(o, function(c) {
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
  }) : Sn;
}
var ta = {
  leading: !0,
  trailing: !1
};
function Lu(t, e) {
  return e === void 0 && (e = ta), De(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, c = null, a = !1, u = function() {
      c == null || c.unsubscribe(), c = null, o && (m(), a && r.complete());
    }, f = function() {
      c = null, a && r.complete();
    }, d = function(p) {
      return c = et(t(p)).subscribe(Se(r, u, f));
    }, m = function() {
      if (s) {
        s = !1;
        var p = l;
        l = null, r.next(p), !a && d(p);
      }
    };
    n.subscribe(Se(r, function(p) {
      s = !0, l = p, !(c && !c.closed) && (i ? m() : d(p));
    }, function() {
      a = !0, !(o && s && c && !c.closed) && r.complete();
    }));
  });
}
function ju(t, e, n) {
  e === void 0 && (e = Lr), n === void 0 && (n = ta);
  var r = Ql(t, e);
  return Lu(function() {
    return r;
  }, n);
}
function At(t) {
  return typeof t == "function" ? At(t()) : uu(t) ? Fn(t) : Promise.resolve(t);
}
function na(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Bu } = Object.prototype, { getPrototypeOf: no } = Object, { iterator: jr, toStringTag: ra } = Symbol, Br = ((t) => (e) => {
  const n = Bu.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tt = (t) => (t = t.toLowerCase(), (e) => Br(e) === t), zr = (t) => (e) => typeof e === t, { isArray: En } = Array, pn = zr("undefined");
function Xn(t) {
  return t !== null && !pn(t) && t.constructor !== null && !pn(t.constructor) && He(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ia = tt("ArrayBuffer");
function zu(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ia(t.buffer), e;
}
const Vu = zr("string"), He = zr("function"), oa = zr("number"), Yn = (t) => t !== null && typeof t == "object", Wu = (t) => t === !0 || t === !1, mr = (t) => {
  if (Br(t) !== "object")
    return !1;
  const e = no(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(ra in t) && !(jr in t);
}, qu = (t) => {
  if (!Yn(t) || Xn(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, Gu = tt("Date"), Ju = tt("File"), Ku = tt("Blob"), Xu = tt("FileList"), Yu = (t) => Yn(t) && He(t.pipe), Qu = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || He(t.append) && ((e = Br(t)) === "formdata" || // detect form-data instance
  e === "object" && He(t.toString) && t.toString() === "[object FormData]"));
}, Zu = tt("URLSearchParams"), [ef, tf, nf, rf] = ["ReadableStream", "Request", "Response", "Headers"].map(tt), of = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qn(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), En(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    if (Xn(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = o.length;
    let l;
    for (r = 0; r < s; r++)
      l = o[r], e.call(null, t[l], l, t);
  }
}
function sa(t, e) {
  if (Xn(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const Ht = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), la = (t) => !pn(t) && t !== Ht;
function $i() {
  const { caseless: t, skipUndefined: e } = la(this) && this || {}, n = {}, r = (i, o) => {
    const s = t && sa(n, o) || o;
    mr(n[s]) && mr(i) ? n[s] = $i(n[s], i) : mr(i) ? n[s] = $i({}, i) : En(i) ? n[s] = i.slice() : (!e || !pn(i)) && (n[s] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Qn(arguments[i], r);
  return n;
}
const sf = (t, e, n, { allOwnKeys: r } = {}) => (Qn(e, (i, o) => {
  n && He(i) ? Object.defineProperty(t, o, {
    value: na(i, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(t, o, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: r }), t), lf = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), af = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, cf = (t, e, n, r) => {
  let i, o, s;
  const l = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, t, e)) && !l[s] && (e[s] = t[s], l[s] = !0);
    t = n !== !1 && no(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, uf = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, ff = (t) => {
  if (!t)
    return null;
  if (En(t))
    return t;
  let e = t.length;
  if (!oa(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, df = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && no(Uint8Array)), hf = (t, e) => {
  const r = (t && t[jr]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    e.call(t, o[0], o[1]);
  }
}, pf = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, gf = tt("HTMLFormElement"), mf = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Go = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), bf = tt("RegExp"), aa = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Qn(n, (i, o) => {
    let s;
    (s = e(i, o, t)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(t, r);
}, _f = (t) => {
  aa(t, (e, n) => {
    if (He(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (He(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, yf = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return En(t) ? r(t) : r(String(t).split(e)), n;
}, vf = () => {
}, wf = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Sf(t) {
  return !!(t && He(t.append) && t[ra] === "FormData" && t[jr]);
}
const Ef = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (Yn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (Xn(r))
        return r;
      if (!("toJSON" in r)) {
        e[i] = r;
        const o = En(r) ? [] : {};
        return Qn(r, (s, l) => {
          const c = n(s, i + 1);
          !pn(c) && (o[l] = c);
        }), e[i] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, Cf = tt("AsyncFunction"), kf = (t) => t && (Yn(t) || He(t)) && He(t.then) && He(t.catch), ca = ((t, e) => t ? setImmediate : e ? ((n, r) => (Ht.addEventListener("message", ({ source: i, data: o }) => {
  i === Ht && o === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), Ht.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  He(Ht.postMessage)
), Tf = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ht) : typeof process < "u" && process.nextTick || ca, Af = (t) => t != null && He(t[jr]), S = {
  isArray: En,
  isArrayBuffer: ia,
  isBuffer: Xn,
  isFormData: Qu,
  isArrayBufferView: zu,
  isString: Vu,
  isNumber: oa,
  isBoolean: Wu,
  isObject: Yn,
  isPlainObject: mr,
  isEmptyObject: qu,
  isReadableStream: ef,
  isRequest: tf,
  isResponse: nf,
  isHeaders: rf,
  isUndefined: pn,
  isDate: Gu,
  isFile: Ju,
  isBlob: Ku,
  isRegExp: bf,
  isFunction: He,
  isStream: Yu,
  isURLSearchParams: Zu,
  isTypedArray: df,
  isFileList: Xu,
  forEach: Qn,
  merge: $i,
  extend: sf,
  trim: of,
  stripBOM: lf,
  inherits: af,
  toFlatObject: cf,
  kindOf: Br,
  kindOfTest: tt,
  endsWith: uf,
  toArray: ff,
  forEachEntry: hf,
  matchAll: pf,
  isHTMLForm: gf,
  hasOwnProperty: Go,
  hasOwnProp: Go,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: aa,
  freezeMethods: _f,
  toObjectSet: yf,
  toCamelCase: mf,
  noop: vf,
  toFiniteNumber: wf,
  findKey: sa,
  global: Ht,
  isContextDefined: la,
  isSpecCompliantForm: Sf,
  toJSONObject: Ef,
  isAsyncFn: Cf,
  isThenable: kf,
  setImmediate: ca,
  asap: Tf,
  isIterable: Af
};
class Me extends Error {
  static from(e, n, r, i, o, s) {
    const l = new Me(e.message, n || e.code, r, i, o);
    return l.cause = e, l.name = e.name, s && Object.assign(l, s), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, n, r, i, o) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), i && (this.request = i), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
}
Me.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Me.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Me.ECONNABORTED = "ECONNABORTED";
Me.ETIMEDOUT = "ETIMEDOUT";
Me.ERR_NETWORK = "ERR_NETWORK";
Me.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Me.ERR_DEPRECATED = "ERR_DEPRECATED";
Me.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Me.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Me.ERR_CANCELED = "ERR_CANCELED";
Me.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Me.ERR_INVALID_URL = "ERR_INVALID_URL";
const W = Me, xf = null;
function Ii(t) {
  return S.isPlainObject(t) || S.isArray(t);
}
function ua(t) {
  return S.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Jo(t, e, n) {
  return t ? t.concat(e).map(function(i, o) {
    return i = ua(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function $f(t) {
  return S.isArray(t) && !t.some(Ii);
}
const If = S.toFlatObject(S, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Vr(t, e, n) {
  if (!S.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, g) {
    return !S.isUndefined(g[h]);
  });
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(e);
  if (!S.isFunction(i))
    throw new TypeError("visitor must be a function");
  function a(p) {
    if (p === null)
      return "";
    if (S.isDate(p))
      return p.toISOString();
    if (S.isBoolean(p))
      return p.toString();
    if (!c && S.isBlob(p))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(p) || S.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, h, g) {
    let k = p;
    if (p && !g && typeof p == "object") {
      if (S.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (S.isArray(p) && $f(p) || (S.isFileList(p) || S.endsWith(h, "[]")) && (k = S.toArray(p)))
        return h = ua(h), k.forEach(function(_, b) {
          !(S.isUndefined(_) || _ === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Jo([h], b, o) : s === null ? h : h + "[]",
            a(_)
          );
        }), !1;
    }
    return Ii(p) ? !0 : (e.append(Jo(g, h, o), a(p)), !1);
  }
  const f = [], d = Object.assign(If, {
    defaultVisitor: u,
    convertValue: a,
    isVisitable: Ii
  });
  function m(p, h) {
    if (!S.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(p), S.forEach(p, function(k, y) {
        (!(S.isUndefined(k) || k === null) && i.call(
          e,
          k,
          S.isString(y) ? y.trim() : y,
          h,
          d
        )) === !0 && m(k, h ? h.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!S.isObject(t))
    throw new TypeError("data must be an object");
  return m(t), e;
}
function Ko(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function ro(t, e) {
  this._pairs = [], t && Vr(t, this, e);
}
const fa = ro.prototype;
fa.append = function(e, n) {
  this._pairs.push([e, n]);
};
fa.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Ko);
  } : Ko;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Pf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function da(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Pf, i = S.isFunction(n) ? {
    serialize: n
  } : n, o = i && i.serialize;
  let s;
  if (o ? s = o(e, i) : s = S.isURLSearchParams(e) ? e.toString() : new ro(e, i).toString(r), s) {
    const l = t.indexOf("#");
    l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Rf {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    S.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Xo = Rf, ha = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Of = typeof URLSearchParams < "u" ? URLSearchParams : ro, Df = typeof FormData < "u" ? FormData : null, Mf = typeof Blob < "u" ? Blob : null, Nf = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Of,
    FormData: Df,
    Blob: Mf
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, io = typeof window < "u" && typeof document < "u", Pi = typeof navigator == "object" && navigator || void 0, Uf = io && (!Pi || ["ReactNative", "NativeScript", "NS"].indexOf(Pi.product) < 0), Ff = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Hf = io && window.location.href || "http://localhost", Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: io,
  hasStandardBrowserEnv: Uf,
  hasStandardBrowserWebWorkerEnv: Ff,
  navigator: Pi,
  origin: Hf
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...Lf,
  ...Nf
};
function jf(t, e) {
  return Vr(t, new $e.classes.URLSearchParams(), {
    visitor: function(n, r, i, o) {
      return $e.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Bf(t) {
  return S.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function zf(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function pa(t) {
  function e(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__")
      return !0;
    const l = Number.isFinite(+s), c = o >= n.length;
    return s = !s && S.isArray(i) ? i.length : s, c ? (S.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !l) : ((!i[s] || !S.isObject(i[s])) && (i[s] = []), e(n, r, i[s], o) && S.isArray(i[s]) && (i[s] = zf(i[s])), !l);
  }
  if (S.isFormData(t) && S.isFunction(t.entries)) {
    const n = {};
    return S.forEachEntry(t, (r, i) => {
      e(Bf(r), i, n, 0);
    }), n;
  }
  return null;
}
function Vf(t, e, n) {
  if (S.isString(t))
    try {
      return (e || JSON.parse)(t), S.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const oo = {
  transitional: ha,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = S.isObject(e);
    if (o && S.isHTMLForm(e) && (e = new FormData(e)), S.isFormData(e))
      return i ? JSON.stringify(pa(e)) : e;
    if (S.isArrayBuffer(e) || S.isBuffer(e) || S.isStream(e) || S.isFile(e) || S.isBlob(e) || S.isReadableStream(e))
      return e;
    if (S.isArrayBufferView(e))
      return e.buffer;
    if (S.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return jf(e, this.formSerializer).toString();
      if ((l = S.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Vr(
          l ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), Vf(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || oo.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (S.isResponse(e) || S.isReadableStream(e))
      return e;
    if (e && S.isString(e) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? W.from(l, W.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
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
    FormData: $e.classes.FormData,
    Blob: $e.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  oo.headers[t] = {};
});
const so = oo, Wf = S.toObjectSet([
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
]), qf = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || e[n] && Wf[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Yo = Symbol("internals");
function An(t) {
  return t && String(t).trim().toLowerCase();
}
function br(t) {
  return t === !1 || t == null ? t : S.isArray(t) ? t.map(br) : String(t);
}
function Gf(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Jf = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ri(t, e, n, r, i) {
  if (S.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!S.isString(e)) {
    if (S.isString(r))
      return e.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(e);
  }
}
function Kf(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Xf(t, e) {
  const n = S.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(i, o, s) {
        return this[r].call(this, e, i, o, s);
      },
      configurable: !0
    });
  });
}
class Wr {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function o(l, c, a) {
      const u = An(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = S.findKey(i, u);
      (!f || i[f] === void 0 || a === !0 || a === void 0 && i[f] !== !1) && (i[f || c] = br(l));
    }
    const s = (l, c) => S.forEach(l, (a, u) => o(a, u, c));
    if (S.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (S.isString(e) && (e = e.trim()) && !Jf(e))
      s(qf(e), n);
    else if (S.isObject(e) && S.isIterable(e)) {
      let l = {}, c, a;
      for (const u of e) {
        if (!S.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[a = u[0]] = (c = l[a]) ? S.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(l, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = An(e), e) {
      const r = S.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return Gf(i);
        if (S.isFunction(n))
          return n.call(this, i, r);
        if (S.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = An(e), e) {
      const r = S.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ri(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = An(s), s) {
        const l = S.findKey(r, s);
        l && (!n || ri(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return S.isArray(e) ? e.forEach(o) : o(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || ri(this, this[o], o, e, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return S.forEach(this, (i, o) => {
      const s = S.findKey(r, o);
      if (s) {
        n[s] = br(i), delete n[o];
        return;
      }
      const l = e ? Kf(o) : String(o).trim();
      l !== o && delete n[o], n[l] = br(i), r[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && S.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[Yo] = this[Yo] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const l = An(s);
      r[l] || (Xf(i, s), r[l] = !0);
    }
    return S.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Wr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(Wr.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(Wr);
const Ze = Wr;
function ii(t, e) {
  const n = this || so, r = e || n, i = Ze.from(r.headers);
  let o = r.data;
  return S.forEach(t, function(l) {
    o = l.call(n, o, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), o;
}
function ga(t) {
  return !!(t && t.__CANCEL__);
}
class Yf extends W {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, n, r) {
    super(e ?? "canceled", W.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const Zn = Yf;
function ma(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new W(
    "Request failed with status code " + n.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Qf(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Zf(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let i = 0, o = 0, s;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const a = Date.now(), u = r[o];
    s || (s = a), n[i] = c, r[i] = a;
    let f = o, d = 0;
    for (; f !== i; )
      d += n[f++], f = f % t;
    if (i = (i + 1) % t, i === o && (o = (o + 1) % t), a - s < e)
      return;
    const m = u && a - u;
    return m ? Math.round(d * 1e3 / m) : void 0;
  };
}
function ed(t, e) {
  let n = 0, r = 1e3 / e, i, o;
  const s = (a, u = Date.now()) => {
    n = u, i = null, o && (clearTimeout(o), o = null), t(...a);
  };
  return [(...a) => {
    const u = Date.now(), f = u - n;
    f >= r ? s(a, u) : (i = a, o || (o = setTimeout(() => {
      o = null, s(i);
    }, r - f)));
  }, () => i && s(i)];
}
const Ar = (t, e, n = 3) => {
  let r = 0;
  const i = Zf(50, 250);
  return ed((o) => {
    const s = o.loaded, l = o.lengthComputable ? o.total : void 0, c = s - r, a = i(c), u = s <= l;
    r = s;
    const f = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: c,
      rate: a || void 0,
      estimated: a && l && u ? (l - s) / a : void 0,
      event: o,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(f);
  }, n);
}, Qo = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Zo = (t) => (...e) => S.asap(() => t(...e)), td = $e.hasStandardBrowserEnv ? ((t, e) => (n) => (n = new URL(n, $e.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, nd = $e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, o, s) {
      if (typeof document > "u")
        return;
      const l = [`${t}=${encodeURIComponent(e)}`];
      S.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), S.isString(r) && l.push(`path=${r}`), S.isString(i) && l.push(`domain=${i}`), o === !0 && l.push("secure"), S.isString(s) && l.push(`SameSite=${s}`), document.cookie = l.join("; ");
    },
    read(t) {
      if (typeof document > "u")
        return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function rd(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function id(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ba(t, e, n) {
  let r = !rd(e);
  return t && (r || n == !1) ? id(t, e) : e;
}
const es = (t) => t instanceof Ze ? { ...t } : t;
function Wt(t, e) {
  e = e || {};
  const n = {};
  function r(a, u, f, d) {
    return S.isPlainObject(a) && S.isPlainObject(u) ? S.merge.call({ caseless: d }, a, u) : S.isPlainObject(u) ? S.merge({}, u) : S.isArray(u) ? u.slice() : u;
  }
  function i(a, u, f, d) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(a))
        return r(void 0, a, f, d);
    } else
      return r(a, u, f, d);
  }
  function o(a, u) {
    if (!S.isUndefined(u))
      return r(void 0, u);
  }
  function s(a, u) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(a))
        return r(void 0, a);
    } else
      return r(void 0, u);
  }
  function l(a, u, f) {
    if (f in e)
      return r(a, u);
    if (f in t)
      return r(void 0, a);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, u, f) => i(es(a), es(u), f, !0)
  };
  return S.forEach(Object.keys({ ...t, ...e }), function(u) {
    const f = c[u] || i, d = f(t[u], e[u], u);
    S.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const _a = (t) => {
  const e = Wt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: l } = e;
  if (e.headers = s = Ze.from(s), e.url = da(ba(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), S.isFormData(n)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (S.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), a = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, f]) => {
        a.includes(u.toLowerCase()) && s.set(u, f);
      });
    }
  }
  if ($e.hasStandardBrowserEnv && (r && S.isFunction(r) && (r = r(e)), r || r !== !1 && td(e.url))) {
    const c = i && o && nd.read(o);
    c && s.set(i, c);
  }
  return e;
}, od = typeof XMLHttpRequest < "u", sd = od && function(t) {
  return new Promise(function(n, r) {
    const i = _a(t);
    let o = i.data;
    const s = Ze.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: a } = i, u, f, d, m, p;
    function h() {
      m && m(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function k() {
      if (!g)
        return;
      const _ = Ze.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), v = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: _,
        config: t,
        request: g
      };
      ma(function(w) {
        n(w), h();
      }, function(w) {
        r(w), h();
      }, v), g = null;
    }
    "onloadend" in g ? g.onloadend = k : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, g.onabort = function() {
      g && (r(new W("Request aborted", W.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function(b) {
      const v = b && b.message ? b.message : "Network Error", A = new W(v, W.ERR_NETWORK, t, g);
      A.event = b || null, r(A), g = null;
    }, g.ontimeout = function() {
      let b = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const v = i.transitional || ha;
      i.timeoutErrorMessage && (b = i.timeoutErrorMessage), r(new W(
        b,
        v.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        t,
        g
      )), g = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in g && S.forEach(s.toJSON(), function(b, v) {
      g.setRequestHeader(v, b);
    }), S.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), l && l !== "json" && (g.responseType = i.responseType), a && ([d, p] = Ar(a, !0), g.addEventListener("progress", d)), c && g.upload && ([f, m] = Ar(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", m)), (i.cancelToken || i.signal) && (u = (_) => {
      g && (r(!_ || _.type ? new Zn(null, t, g) : _), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const y = Qf(i.url);
    if (y && $e.protocols.indexOf(y) === -1) {
      r(new W("Unsupported protocol " + y + ":", W.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(o || null);
  });
}, ld = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), i;
    const o = function(a) {
      if (!i) {
        i = !0, l();
        const u = a instanceof Error ? a : this.reason;
        r.abort(u instanceof W ? u : new Zn(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, o(new W(`timeout of ${e}ms exceeded`, W.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((a) => {
        a.unsubscribe ? a.unsubscribe(o) : a.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((a) => a.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => S.asap(l), c;
  }
}, ad = ld, cd = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + e, yield t.slice(r, i), r = i;
}, ud = async function* (t, e) {
  for await (const n of fd(t))
    yield* cd(n, e);
}, fd = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, ts = (t, e, n, r) => {
  const i = ud(t, e);
  let o = 0, s, l = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: a, value: u } = await i.next();
        if (a) {
          l(), c.close();
          return;
        }
        let f = u.byteLength;
        if (n) {
          let d = o += f;
          n(d);
        }
        c.enqueue(new Uint8Array(u));
      } catch (a) {
        throw l(a), a;
      }
    },
    cancel(c) {
      return l(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, ns = 64 * 1024, { isFunction: or } = S, dd = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(S.global), {
  ReadableStream: rs,
  TextEncoder: is
} = S.global, os = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, hd = (t) => {
  t = S.merge.call({
    skipUndefined: !0
  }, dd, t);
  const { fetch: e, Request: n, Response: r } = t, i = e ? or(e) : typeof fetch == "function", o = or(n), s = or(r);
  if (!i)
    return !1;
  const l = i && or(rs), c = i && (typeof is == "function" ? ((p) => (h) => p.encode(h))(new is()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), a = o && l && os(() => {
    let p = !1;
    const h = new n($e.origin, {
      body: new rs(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !h;
  }), u = s && l && os(() => S.isReadableStream(new r("").body)), f = {
    stream: u && ((p) => p.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (h, g) => {
      let k = h && h[p];
      if (k)
        return k.call(h);
      throw new W(`Response type '${p}' is not supported`, W.ERR_NOT_SUPPORT, g);
    });
  });
  const d = async (p) => {
    if (p == null)
      return 0;
    if (S.isBlob(p))
      return p.size;
    if (S.isSpecCompliantForm(p))
      return (await new n($e.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(p) || S.isArrayBuffer(p))
      return p.byteLength;
    if (S.isURLSearchParams(p) && (p = p + ""), S.isString(p))
      return (await c(p)).byteLength;
  }, m = async (p, h) => {
    const g = S.toFiniteNumber(p.getContentLength());
    return g ?? d(h);
  };
  return async (p) => {
    let {
      url: h,
      method: g,
      data: k,
      signal: y,
      cancelToken: _,
      timeout: b,
      onDownloadProgress: v,
      onUploadProgress: A,
      responseType: w,
      headers: E,
      withCredentials: M = "same-origin",
      fetchOptions: V
    } = _a(p), Z = e || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let Ee = ad([y, _ && _.toAbortSignal()], b), N = null;
    const L = Ee && Ee.unsubscribe && (() => {
      Ee.unsubscribe();
    });
    let ee;
    try {
      if (A && a && g !== "get" && g !== "head" && (ee = await m(E, k)) !== 0) {
        let yt = new n(h, {
          method: "POST",
          body: k,
          duplex: "half"
        }), Kt;
        if (S.isFormData(k) && (Kt = yt.headers.get("content-type")) && E.setContentType(Kt), yt.body) {
          const [Zr, rr] = Qo(
            ee,
            Ar(Zo(A))
          );
          k = ts(yt.body, ns, Zr, rr);
        }
      }
      S.isString(M) || (M = M ? "include" : "omit");
      const Te = o && "credentials" in n.prototype, _t = {
        ...V,
        signal: Ee,
        method: g.toUpperCase(),
        headers: E.normalize().toJSON(),
        body: k,
        duplex: "half",
        credentials: Te ? M : void 0
      };
      N = o && new n(h, _t);
      let U = await (o ? Z(N, V) : Z(h, _t));
      const G = u && (w === "stream" || w === "response");
      if (u && (v || G && L)) {
        const yt = {};
        ["status", "statusText", "headers"].forEach(($o) => {
          yt[$o] = U[$o];
        });
        const Kt = S.toFiniteNumber(U.headers.get("content-length")), [Zr, rr] = v && Qo(
          Kt,
          Ar(Zo(v), !0)
        ) || [];
        U = new r(
          ts(U.body, ns, Zr, () => {
            rr && rr(), L && L();
          }),
          yt
        );
      }
      w = w || "text";
      let nt = await f[S.findKey(f, w) || "text"](U, p);
      return !G && L && L(), await new Promise((yt, Kt) => {
        ma(yt, Kt, {
          data: nt,
          headers: Ze.from(U.headers),
          status: U.status,
          statusText: U.statusText,
          config: p,
          request: N
        });
      });
    } catch (Te) {
      throw L && L(), Te && Te.name === "TypeError" && /Load failed|fetch/i.test(Te.message) ? Object.assign(
        new W("Network Error", W.ERR_NETWORK, p, N),
        {
          cause: Te.cause || Te
        }
      ) : W.from(Te, Te && Te.code, p, N);
    }
  };
}, pd = /* @__PURE__ */ new Map(), ya = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: i } = e, o = [
    r,
    i,
    n
  ];
  let s = o.length, l = s, c, a, u = pd;
  for (; l--; )
    c = o[l], a = u.get(c), a === void 0 && u.set(c, a = l ? /* @__PURE__ */ new Map() : hd(e)), u = a;
  return a;
};
ya();
const lo = {
  http: xf,
  xhr: sd,
  fetch: {
    get: ya
  }
};
S.forEach(lo, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const ss = (t) => `- ${t}`, gd = (t) => S.isFunction(t) || t === null || t === !1;
function md(t, e) {
  t = S.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, i;
  const o = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let l;
    if (i = r, !gd(r) && (i = lo[(l = String(r)).toLowerCase()], i === void 0))
      throw new W(`Unknown adapter '${l}'`);
    if (i && (S.isFunction(i) || (i = i.get(e))))
      break;
    o[l || "#" + s] = i;
  }
  if (!i) {
    const s = Object.entries(o).map(
      ([c, a]) => `adapter ${c} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(ss).join(`
`) : " " + ss(s[0]) : "as no adapter specified";
    throw new W(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const va = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: md,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: lo
};
function oi(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Zn(null, t);
}
function ls(t) {
  return oi(t), t.headers = Ze.from(t.headers), t.data = ii.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), va.getAdapter(t.adapter || so.adapter, t)(t).then(function(r) {
    return oi(t), r.data = ii.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return ga(r) || (oi(t), r && r.response && (r.response.data = ii.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const wa = "1.13.3", qr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  qr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const as = {};
qr.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + wa + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (e === !1)
      throw new W(
        i(s, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return n && !as[s] && (as[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
qr.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function bd(t, e, n) {
  if (typeof t != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = e[o];
    if (s) {
      const l = t[o], c = l === void 0 || s(l, o, t);
      if (c !== !0)
        throw new W("option " + o + " must be " + c, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new W("Unknown option " + o, W.ERR_BAD_OPTION);
  }
}
const _r = {
  assertOptions: bd,
  validators: qr
}, it = _r.validators;
class xr {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Xo(),
      response: new Xo()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Wt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && _r.assertOptions(r, {
      silentJSONParsing: it.transitional(it.boolean),
      forcedJSONParsing: it.transitional(it.boolean),
      clarifyTimeoutError: it.transitional(it.boolean)
    }, !1), i != null && (S.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : _r.assertOptions(i, {
      encode: it.function,
      serialize: it.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), _r.assertOptions(n, {
      baseUrl: it.spelling("baseURL"),
      withXsrfToken: it.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && S.merge(
      o.common,
      o[n.method]
    );
    o && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = Ze.concat(s, o);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, l.unshift(h.fulfilled, h.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(h) {
      a.push(h.fulfilled, h.rejected);
    });
    let u, f = 0, d;
    if (!c) {
      const p = [ls.bind(this), void 0];
      p.unshift(...l), p.push(...a), d = p.length, u = Promise.resolve(n);
      let h = n;
      for (; f < d; )
        u = u.then(p[f++]).then((g) => {
          h = g !== void 0 ? g : h;
        }).catch(p[f++]).then(() => h);
      return u;
    }
    d = l.length;
    let m = n;
    for (; f < d; ) {
      const p = l[f++], h = l[f++];
      try {
        m = p(m);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      u = ls.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = a.length; f < d; )
      u = u.then(a[f++]).catch(a[f++]);
    return u;
  }
  getUri(e) {
    e = Wt(this.defaults, e);
    const n = ba(e.baseURL, e.url, e.allowAbsoluteUrls);
    return da(n, e.params, e.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(e) {
  xr.prototype[e] = function(n, r) {
    return this.request(Wt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, l) {
      return this.request(Wt(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  xr.prototype[e] = n(), xr.prototype[e + "Form"] = n(!0);
});
const yr = xr;
class ao {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, e(function(o, s, l) {
      r.reason || (r.reason = new Zn(o, s, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new ao(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const _d = ao;
function yd(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function vd(t) {
  return S.isObject(t) && t.isAxiosError === !0;
}
const Ri = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ri).forEach(([t, e]) => {
  Ri[e] = t;
});
const wd = Ri;
function Sa(t) {
  const e = new yr(t), n = na(yr.prototype.request, e);
  return S.extend(n, yr.prototype, e, { allOwnKeys: !0 }), S.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Sa(Wt(t, i));
  }, n;
}
const de = Sa(so);
de.Axios = yr;
de.CanceledError = Zn;
de.CancelToken = _d;
de.isCancel = ga;
de.VERSION = wa;
de.toFormData = Vr;
de.AxiosError = W;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = yd;
de.isAxiosError = vd;
de.mergeConfig = Wt;
de.AxiosHeaders = Ze;
de.formToJSON = (t) => pa(S.isHTMLForm(t) ? new FormData(t) : t);
de.getAdapter = va.getAdapter;
de.HttpStatusCode = wd;
de.default = de;
const se = de;
var cs = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Cn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n;
  }
  getAuthorizationHeader() {
    return cs(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield At(this.accessToken)}`
      };
    });
  }
  getAccessToken() {
    return At(this.accessToken);
  }
  getStructureUrl() {
    return cs(this, void 0, void 0, function* () {
      const e = yield At(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Structure}`;
    });
  }
  static requestHttpConfig(e) {
    return se.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
  static isApiReachable(e) {
    return se.get(`${e}/api/structure/about/version`).then((n) => n.status === 200 || n.status === 401).catch((n) => {
      var r;
      return ((r = n == null ? void 0 : n.response) === null || r === void 0 ? void 0 : r.status) === 401;
    });
  }
}
var Be = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class qt extends Cn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return Be(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return Be(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield se.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return Be(this, void 0, void 0, function* () {
      const o = `${yield this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), c = yield se.post(o, s, { headers: l });
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
    return Be(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(X.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield se.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return Be(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return se.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return Be(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`, i = yield this.getAuthorizationHeader();
      return se.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return Be(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return se.delete(r, { headers: i }).then();
    });
  }
  copyTo(e, n, r) {
    return Be(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return se.get(i, { headers: o }).then((s) => s.data);
    });
  }
  copyMultipleTo(e, n, r) {
    return Be(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return se.put(i, e, { responseType: "text", headers: o });
    });
  }
  moveTo(e, n, r) {
    return Be(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return se.get(i, { headers: o }).then((s) => s.data);
    });
  }
  moveMultipleTo(e, n, r) {
    return Be(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return se.put(i, e, { responseType: "text", headers: o });
    });
  }
  _createBaseUrlByType(e) {
    return Be(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${pc[e]}`;
    });
  }
}
var xn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Ln extends Cn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return xn(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  getTenantViewForEntityId(e) {
    return xn(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return xn(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield se.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return xn(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  filterTenantsByName(e) {
    return xn(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/filter/${e}`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
}
var si = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class jn {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, n, r = !1, i, o = " / ") {
    return si(this, void 0, void 0, function* () {
      const s = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let l = yield this.resolvePathName(s.Path.splice(i ? s.Path.length - i : 0, s.Path.length), o);
      return r && (l = l + o + s.Name.Value), l;
    });
  }
  resolvePathName(e, n = " / ") {
    return si(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Fn(Xl(e.map((r) => this.resolveName(X.Group, r))).pipe(hn((r) => r.join(n))));
    });
  }
  resolveName(e, n) {
    return si(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = Gt(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(hn((r) => r.Name.Value), Uu(1), Zl(() => on(n)))), Fn(this._nameCache[n]);
    });
  }
}
var Sd = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class O0 extends Cn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Sd(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield se.get(`${yield this.getStructureUrl()}/userprofile`, {
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
var us = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Oi extends Cn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return us(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return us(this, void 0, void 0, function* () {
      const e = yield At(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Driver}`;
    });
  }
}
class gn extends Error {
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
class co extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Bn extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Ed extends Error {
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
class Cd extends Error {
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
class kd extends Error {
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
class Td extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class Ad extends Error {
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
class Ea {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class uo {
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
var T;
(function(t) {
  t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
})(T || (T = {}));
class zn {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
zn.instance = new zn();
const xd = "6.0.8";
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
class ke {
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
function Vn(t, e) {
  let n = "";
  return fo(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${$d(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function $d(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    const i = r < 16 ? "0" : "";
    n += `0x${i}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function fo(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function Ca(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [c, a] = mn();
  l[c] = a, t.log(T.Trace, `(${e} transport) sending data. ${Vn(o, s.logMessageContent)}.`);
  const u = fo(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(T.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function Id(t) {
  return t === void 0 ? new $r(T.Information) : t === null ? zn.instance : t.log !== void 0 ? t : new $r(t);
}
class Pd {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class $r {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, n) {
    if (e >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${T[e]}: ${n}`;
      switch (e) {
        case T.Critical:
        case T.Error:
          this.out.error(r);
          break;
        case T.Warning:
          this.out.warn(r);
          break;
        case T.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function mn() {
  let t = "X-SignalR-User-Agent";
  return ke.isNode && (t = "User-Agent"), [t, Rd(xd, Od(), Md(), Dd())];
}
function Rd(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Od() {
  if (ke.isNode)
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
function Dd() {
  if (ke.isNode)
    return process.versions.node;
}
function Md() {
  return ke.isNode ? "NodeJS" : "Browser";
}
function fs(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Nd() {
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
class Ud extends uo {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Nd());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new Bn();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new Bn();
    });
    let i = null;
    if (e.timeout) {
      const c = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(T.Warning, "Timeout from HTTP request."), r = new co();
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
      throw r || (this._logger.log(T.Warning, `Error from HTTP request. ${c}.`), c);
    } finally {
      i && clearTimeout(i), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!o.ok) {
      const c = await ds(o, "text");
      throw new gn(c || o.statusText, o.status);
    }
    const l = await ds(o, e.responseType);
    return new Ea(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return ke.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function ds(t, e) {
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
class Fd extends uo {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Bn()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new Bn());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new Ea(i.status, i.statusText, i.response || i.responseText)) : r(new gn(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(T.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new gn(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(T.Warning, "Timeout from HTTP request."), r(new co());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class Hd extends uo {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || ke.isNode)
      this._httpClient = new Ud(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Fd(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Bn()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class je {
  static write(e) {
    return `${e}${je.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== je.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(je.RecordSeparator);
    return n.pop(), n;
  }
}
je.RecordSeparatorCode = 30;
je.RecordSeparator = String.fromCharCode(je.RecordSeparatorCode);
class Ld {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return je.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (fo(e)) {
      const l = new Uint8Array(e), c = l.indexOf(je.RecordSeparatorCode);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(l.slice(0, a))), r = l.byteLength > a ? l.slice(a).buffer : null;
    } else {
      const l = e, c = l.indexOf(je.RecordSeparator);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = l.substring(0, a), r = l.length > a ? l.substring(a) : null;
    }
    const i = je.parse(n), o = JSON.parse(i[0]);
    if (o.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, o];
  }
}
var te;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(te || (te = {}));
class jd {
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
    return this.observers.push(e), new Pd(this, e);
  }
}
const Bd = 30 * 1e3, zd = 15 * 1e3;
var oe;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(oe || (oe = {}));
class ho {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(T.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, ve.isRequired(e, "connection"), ve.isRequired(n, "logger"), ve.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = Bd, this.keepAliveIntervalInMilliseconds = zd, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new Ld(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = oe.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: te.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, r, i) {
    return new ho(e, n, r, i);
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
    if (this._connectionState !== oe.Disconnected && this._connectionState !== oe.Reconnecting)
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
    if (this._connectionState !== oe.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = oe.Connecting, this._logger.log(T.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), ke.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = oe.Connected, this._connectionStarted = !0, this._logger.log(T.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = oe.Disconnected, this._logger.log(T.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
      if (this._logger.log(T.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(T.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
    } catch (n) {
      throw this._logger.log(T.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
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
    return this._connectionState === oe.Disconnected ? (this._logger.log(T.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === oe.Disconnecting ? (this._logger.log(T.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = oe.Disconnecting, this._logger.log(T.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(T.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
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
    const l = new jd();
    return l.cancelCallback = () => {
      const c = this._createCancelInvocation(o.invocationId);
      return delete this._callbacks[o.invocationId], s.then(() => this._sendWithProtocol(c));
    }, this._callbacks[o.invocationId] = (c, a) => {
      if (a) {
        l.error(a);
        return;
      } else
        c && (c.type === te.Completion ? c.error ? l.error(new Error(c.error)) : l.complete() : l.next(c.item));
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
          u && (u.type === te.Completion ? u.error ? c(new Error(u.error)) : l(u.result) : c(new Error(`Unexpected message type: ${u.type}`)));
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
          case te.Invocation:
            this._invokeClientMethod(r);
            break;
          case te.StreamItem:
          case te.Completion: {
            const i = this._callbacks[r.invocationId];
            if (i) {
              r.type === te.Completion && delete this._callbacks[r.invocationId];
              try {
                i(r);
              } catch (o) {
                this._logger.log(T.Error, `Stream callback threw error: ${fs(o)}`);
              }
            }
            break;
          }
          case te.Ping:
            break;
          case te.Close: {
            this._logger.log(T.Information, "Close message received from server.");
            const i = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            r.allowReconnect === !0 ? this.connection.stop(i) : this._stopPromise = this._stopInternal(i);
            break;
          }
          default:
            this._logger.log(T.Warning, `Invalid message type: ${r.type}.`);
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
      this._logger.log(T.Error, o);
      const s = new Error(o);
      throw this._handshakeRejecter(s), s;
    }
    if (n.error) {
      const i = "Server returned handshake error: " + n.error;
      this._logger.log(T.Error, i);
      const o = new Error(i);
      throw this._handshakeRejecter(o), o;
    } else
      this._logger.log(T.Debug, "Server handshake complete.");
    return this._handshakeResolver(), r;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - new Date().getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === oe.Connected)
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
        this._logger.log(T.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${r}'.`);
      }
      if (e.invocationId) {
        const r = "Server requested a response, which is not supported in this version of the client.";
        this._logger.log(T.Error, r), this._stopPromise = this._stopInternal(new Error(r));
      }
    } else
      this._logger.log(T.Warning, `No client method with the name '${e.target}' found.`);
  }
  _connectionClosed(e) {
    this._logger.log(T.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === oe.Disconnecting ? this._completeClose(e) : this._connectionState === oe.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === oe.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = oe.Disconnected, this._connectionStarted = !1, ke.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [e]));
      } catch (n) {
        this._logger.log(T.Error, `An onclose callback called with error '${e}' threw error '${n}'.`);
      }
    }
  }
  async _reconnect(e) {
    const n = Date.now();
    let r = 0, i = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), o = this._getNextRetryDelay(r++, 0, i);
    if (o === null) {
      this._logger.log(T.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = oe.Reconnecting, e ? this._logger.log(T.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(T.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(T.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== oe.Reconnecting) {
        this._logger.log(T.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(T.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== oe.Reconnecting) {
        this._logger.log(T.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = oe.Connected, this._logger.log(T.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(T.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(T.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== oe.Reconnecting) {
          this._logger.log(T.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === oe.Disconnecting && this._completeClose();
          return;
        }
        i = s instanceof Error ? s : new Error(s.toString()), o = this._getNextRetryDelay(r++, Date.now() - n, i);
      }
    }
    this._logger.log(T.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: e,
        retryReason: r
      });
    } catch (i) {
      return this._logger.log(T.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${n}) threw error '${i}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const n = this._callbacks;
    this._callbacks = {}, Object.keys(n).forEach((r) => {
      const i = n[r];
      try {
        i(null, e);
      } catch (o) {
        this._logger.log(T.Error, `Stream 'error' callback called with '${e}' threw error: ${fs(o)}`);
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
        type: te.Invocation
      } : {
        arguments: n,
        target: e,
        type: te.Invocation
      };
    {
      const o = this._invocationId;
      return this._invocationId++, i.length !== 0 ? {
        arguments: n,
        invocationId: o.toString(),
        streamIds: i,
        target: e,
        type: te.Invocation
      } : {
        arguments: n,
        invocationId: o.toString(),
        target: e,
        type: te.Invocation
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
      type: te.StreamInvocation
    } : {
      arguments: n,
      invocationId: i.toString(),
      target: e,
      type: te.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: te.CancelInvocation
    };
  }
  _createStreamItemMessage(e, n) {
    return {
      invocationId: e,
      item: n,
      type: te.StreamItem
    };
  }
  _createCompletionMessage(e, n, r) {
    return n ? {
      error: n,
      invocationId: e,
      type: te.Completion
    } : {
      invocationId: e,
      result: r,
      type: te.Completion
    };
  }
}
const Vd = [0, 2e3, 1e4, 3e4, null];
class hs {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : Vd;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class jt {
}
jt.Authorization = "Authorization";
jt.Cookie = "Cookie";
var _e;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(_e || (_e = {}));
var xe;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(xe || (xe = {}));
let Wd = class {
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
class ps {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new Wd(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (ve.isRequired(e, "url"), ve.isRequired(n, "transferFormat"), ve.isIn(n, xe, "transferFormat"), this._url = e, this._logger.log(T.Trace, "(LongPolling transport) Connecting."), n === xe.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = mn(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === xe.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(T.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, s);
    a.statusCode !== 200 ? (this._logger.log(T.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new gn(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[jt.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[jt.Authorization] && delete e.headers[jt.Authorization];
  }
  async _poll(e, n) {
    try {
      for (; this._running; ) {
        const r = await this._getAccessToken();
        this._updateHeaderToken(n, r);
        try {
          const i = `${e}&_=${Date.now()}`;
          this._logger.log(T.Trace, `(LongPolling transport) polling: ${i}.`);
          const o = await this._httpClient.get(i, n);
          o.statusCode === 204 ? (this._logger.log(T.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(T.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new gn(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(T.Trace, `(LongPolling transport) data received. ${Vn(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(T.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof co ? this._logger.log(T.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(T.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(T.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Ca(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(T.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(T.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = mn();
      e[n] = r;
      const i = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      }, o = await this._getAccessToken();
      this._updateHeaderToken(i, o), await this._httpClient.delete(this._url, i), this._logger.log(T.Trace, "(LongPolling transport) DELETE request sent.");
    } finally {
      this._logger.log(T.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(T.Trace, e), this.onclose(this._closeError);
    }
  }
}
class qd {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (ve.isRequired(e, "url"), ve.isRequired(n, "transferFormat"), ve.isIn(n, xe, "transferFormat"), this._logger.log(T.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== xe.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (ke.isBrowser || ke.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), c = {};
        c.Cookie = l;
        const [a, u] = mn();
        c[a] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(T.Trace, `(SSE transport) data received. ${Vn(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
            } catch (c) {
              this._close(c);
              return;
            }
        }, s.onerror = (l) => {
          o ? this._close() : i(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, s.onopen = () => {
          this._logger.log(T.Information, `SSE connected to ${this._url}`), this._eventSource = s, o = !0, r();
        };
      } catch (l) {
        i(l);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Ca(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class Gd {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (ve.isRequired(e, "url"), ve.isRequired(n, "transferFormat"), ve.isIn(n, xe, "transferFormat"), this._logger.log(T.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (ke.isNode) {
        const c = {}, [a, u] = mn();
        c[a] = u, s && (c[jt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...c, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === xe.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
        this._logger.log(T.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (c) => {
        let a = null;
        typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "There was an error with the transport", this._logger.log(T.Information, `(WebSockets transport) ${a}.`);
      }, o.onmessage = (c) => {
        if (this._logger.log(T.Trace, `(WebSockets transport) data received. ${Vn(c.data, this._logMessageContent)}.`), this.onreceive)
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
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(T.Trace, `(WebSockets transport) sending data. ${Vn(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(T.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const gs = 100;
class Jd {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, ve.isRequired(e, "url"), this._logger = Id(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (ke.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !ke.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : ke.isNode && !n.WebSocket && r && (n.WebSocket = r), !ke.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : ke.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new Hd(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || xe.Binary, ve.isIn(e, xe, "transferFormat"), this._logger.log(T.Debug, `Starting connection with transfer format '${xe[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(T.Error, n), await this._stopPromise, Promise.reject(new Error(n));
    } else if (this._connectionState !== "Connected") {
      const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(T.Error, n), Promise.reject(new Error(n));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new po(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(T.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(T.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
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
        this._logger.log(T.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(T.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let n = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === _e.WebSockets)
          this.transport = this._constructTransport(_e.WebSockets), await this._startTransport(n, e);
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
        } while (r.url && i < gs);
        if (i === gs && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof ps && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(T.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(T.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[jt.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = mn();
    n[r] = i;
    const o = this._resolveNegotiateUrl(e);
    this._logger.log(T.Debug, `Sending negotiation request: ${o}.`);
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
      return s instanceof gn && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(T.Error, l), Promise.reject(new Td(l));
    }
  }
  _createConnectUrl(e, n) {
    return n ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : e;
  }
  async _createTransport(e, n, r, i) {
    let o = this._createConnectUrl(e, r.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(T.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(o, i), this.connectionId = r.connectionId;
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
          if (this._logger.log(T.Error, `Failed to start the transport '${a.transport}': ${f}`), c = void 0, s.push(new kd(`${a.transport} failed: ${f}`, _e[a.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(T.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new Ad(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case _e.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Gd(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case _e.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new qd(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case _e.LongPolling:
        return new ps(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = _e[e.transport];
    if (i == null)
      return this._logger.log(T.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (Kd(n, i))
      if (e.transferFormats.map((s) => xe[s]).indexOf(r) >= 0) {
        if (i === _e.WebSockets && !this._options.WebSocket || i === _e.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(T.Debug, `Skipping transport '${_e[i]}' because it is not supported in your environment.'`), new Ed(`'${_e[i]}' is not supported in your environment.`, i);
        this._logger.log(T.Debug, `Selecting transport '${_e[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(T.Debug, `Skipping transport '${_e[i]}' because it does not support the requested transfer format '${xe[r]}'.`), new Error(`'${_e[i]}' does not support ${xe[r]}.`);
    else
      return this._logger.log(T.Debug, `Skipping transport '${_e[i]}' because it was disabled by the client.`), new Cd(`'${_e[i]}' is disabled by the client.`, i);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(T.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(T.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(T.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(T.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(T.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
      this._logger.log(T.Error, `TransportSendQueue.stop() threw error '${n}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (n) {
        this._logger.log(T.Error, `HttpConnection.onclose(${e}) threw error '${n}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!ke.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const n = window.document.createElement("a");
    return n.href = e, this._logger.log(T.Information, `Normalizing '${e}' to '${n.href}'.`), n.href;
  }
  _resolveNegotiateUrl(e) {
    const n = e.indexOf("?");
    let r = e.substring(0, n === -1 ? e.length : n);
    return r[r.length - 1] !== "/" && (r += "/"), r += "negotiate", r += n === -1 ? "" : e.substring(n), r.indexOf("negotiateVersion") === -1 && (r += n === -1 ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r;
  }
}
function Kd(t, e) {
  return !t || (e & t) !== 0;
}
class po {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new sr(), this._transportResult = new sr(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new sr()), this._transportResult.promise;
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
      this._sendBufferedData = new sr();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : po._concatBuffers(this._buffer);
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
class sr {
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
const Xd = "json";
class Yd {
  constructor() {
    this.name = Xd, this.version = 1, this.transferFormat = xe.Text;
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
    n === null && (n = zn.instance);
    const r = je.parse(e), i = [];
    for (const o of r) {
      const s = JSON.parse(o);
      if (typeof s.type != "number")
        throw new Error("Invalid payload.");
      switch (s.type) {
        case te.Invocation:
          this._isInvocationMessage(s);
          break;
        case te.StreamItem:
          this._isStreamItemMessage(s);
          break;
        case te.Completion:
          this._isCompletionMessage(s);
          break;
        case te.Ping:
          break;
        case te.Close:
          break;
        default:
          n.log(T.Information, "Unknown message type '" + s.type + "' ignored.");
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
    return je.write(JSON.stringify(e));
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
const Qd = {
  trace: T.Trace,
  debug: T.Debug,
  info: T.Information,
  information: T.Information,
  warn: T.Warning,
  warning: T.Warning,
  error: T.Error,
  critical: T.Critical,
  none: T.None
};
function Zd(t) {
  const e = Qd[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class eh {
  configureLogging(e) {
    if (ve.isRequired(e, "logging"), th(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = Zd(e);
      this.logger = new $r(n);
    } else
      this.logger = new $r(e);
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
    return e ? Array.isArray(e) ? this.reconnectPolicy = new hs(e) : this.reconnectPolicy = e : this.reconnectPolicy = new hs(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new Jd(this.url, e);
    return ho.create(n, this.logger || zn.instance, this.protocol || new Yd(), this.reconnectPolicy);
  }
}
function th(t) {
  return t.log !== void 0;
}
var nh = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
}, Mn;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})(Mn || (Mn = {}));
var ms;
(function(t) {
  t.Send = "Send";
})(ms || (ms = {}));
var bs;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC";
})(bs || (bs = {}));
class Di {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new Ie(), this._connectionEstablished = new Zi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Ie(), this._subscribeRequested = new Ie(), this._handleSubscriptionQueue();
  }
  connect() {
    return nh(this, void 0, void 0, function* () {
      const e = yield At(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Fn(this._connectionEstablished.pipe(Hn((n) => n), Ru(null)));
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
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(hn((o) => o.filter((s) => e.includes(s.identifier))), Hn((o) => o.length > 0));
    return r.length > 0 ? Au(on(r), i) : i;
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(gt(this._unsub), $u(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(Mn.SubscribeMany, e), this._subscribedIds.push(...e);
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
      this._sendMessage(Mn.ChangeModeAsync, !0), this._sendMessage(Mn.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new eh().withUrl(e, {
      accessTokenFactory: () => this.getAccessToken()
    }).build();
  }
  getAccessToken() {
    return At(this.accessToken);
  }
}
var $n = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class M0 {
}
class N0 {
}
class U0 {
}
class _s extends Cn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return $n(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield se.post(`${n}/value/manyflat`, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return $n(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return se.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return $n(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return se.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return $n(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return se.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getHistorianUrl() {
    return $n(this, void 0, void 0, function* () {
      const e = yield At(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Historian}`;
    });
  }
}
var Mi;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(Mi || (Mi = {}));
const Ne = Mi;
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
var Ni = function(t, e) {
  return Ni = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Ni(t, e);
};
function go(t, e) {
  Ni(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function rh(t, e, n, r) {
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
function ih(t, e) {
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
function lr(t) {
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
function Ir(t, e) {
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
function Ut() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Ir(arguments[e]));
  return t;
}
function ka(t) {
  return !!t.useClass;
}
function Ui(t) {
  return !!t.useFactory;
}
var Ta = function() {
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
        return l.apply(void 0, Ut(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function Xt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function oh(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function ys(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function sh(t) {
  return typeof t == "function" || t instanceof Ta;
}
function vr(t) {
  return !!t.useToken;
}
function wr(t) {
  return t.useValue != null;
}
function lh(t) {
  return ka(t) || wr(t) || vr(t) || Ui(t);
}
var mo = function() {
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
}(), ah = function(t) {
  go(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(mo), vs = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function ch(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function uh(t, e, n) {
  return n === void 0 && (n = "    "), Ut([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function fh(t, e, n) {
  var r = Ir(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = ch(o, e);
  return uh("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function dh(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var hh = function(t) {
  go(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(mo), ph = function(t) {
  go(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(mo), gh = function() {
  function t() {
    this.preResolution = new hh(), this.postResolution = new ph();
  }
  return t;
}(), mh = /* @__PURE__ */ new Map(), bh = function() {
  function t(e) {
    this.parent = e, this._registry = new ah(), this.interceptors = new gh(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Ne.Transient }), this.ensureNotDisposed();
    var i;
    if (lh(n) ? i = n : i = { useClass: n }, vr(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + Ut(o, [l]).join(" -> "));
        o.push(l);
        var c = this._registry.get(l);
        c && vr(c.provider) ? s = c.provider : s = null;
      }
    if ((r.lifecycle === Ne.Singleton || r.lifecycle == Ne.ContainerScoped || r.lifecycle == Ne.ResolutionScoped) && (wr(i) || Ui(i)))
      throw new Error('Cannot use lifecycle "' + Ne[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: i, options: r }), this;
  }, t.prototype.registerType = function(e, n) {
    return this.ensureNotDisposed(), Xt(n) ? this.register(e, {
      useToken: n
    }) : this.register(e, {
      useClass: n
    });
  }, t.prototype.registerInstance = function(e, n) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: n
    });
  }, t.prototype.registerSingleton = function(e, n) {
    if (this.ensureNotDisposed(), Xt(e)) {
      if (Xt(n))
        return this.register(e, {
          useToken: n
        }, { lifecycle: Ne.Singleton });
      if (n)
        return this.register(e, {
          useClass: n
        }, { lifecycle: Ne.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return n && !Xt(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Ne.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new vs()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && Xt(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (sh(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = lr(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
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
        for (var l = lr(this.interceptors.postResolution.getAll(e)), c = l.next(); !c.done; c = l.next()) {
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
    if (this.ensureNotDisposed(), e.options.lifecycle === Ne.ResolutionScoped && n.scopedResolutions.has(e))
      return n.scopedResolutions.get(e);
    var r = e.options.lifecycle === Ne.Singleton, i = e.options.lifecycle === Ne.ContainerScoped, o = r || i, s;
    return wr(e.provider) ? s = e.provider.useValue : vr(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : ka(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : Ui(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Ne.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new vs()), this.ensureNotDisposed();
    var i = this.getAllRegistrations(e);
    if (!i && Xt(e))
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
      for (var r = lr(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = Ir(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(c) {
          return !wr(c.provider);
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
      for (var i = lr(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = Ir(o.value, 2), l = s[0], c = s[1];
        c.some(function(a) {
          var u = a.options;
          return u.lifecycle === Ne.ContainerScoped;
        }) && r._registry.setAll(l, c.map(function(a) {
          return a.options.lifecycle === Ne.ContainerScoped ? {
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
    return rh(this, void 0, void 0, function() {
      var e;
      return ih(this, function(n) {
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
    if (e instanceof Ta)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = mh.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, Ut([void 0], s)))();
    }();
    return dh(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, c;
      try {
        return oh(i) ? ys(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, Ut([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, Ut([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : ys(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, Ut([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (a) {
        throw new Error(fh(n, o, a));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), Aa = new bh();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function Y() {
}
function _h(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function yh(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function xa(t) {
  return t();
}
function ws() {
  return /* @__PURE__ */ Object.create(null);
}
function bt(t) {
  t.forEach(xa);
}
function $a(t) {
  return typeof t == "function";
}
function fe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function vh(t) {
  return Object.keys(t).length === 0;
}
function ze(t, e, n, r) {
  if (t) {
    const i = Ia(t, e, n, r);
    return t[0](i);
  }
}
function Ia(t, e, n, r) {
  return t[1] && r ? _h(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function Ve(t, e, n, r) {
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
function We(t, e, n, r, i, o) {
  if (i) {
    const s = Ia(e, n, r, o);
    t.p(s, i);
  }
}
function qe(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function ce(t) {
  return t ?? "";
}
function I(t, e) {
  t.appendChild(e);
}
function Jt(t, e, n) {
  const r = wh(t);
  if (!r.getElementById(e)) {
    const i = R("style");
    i.id = e, i.textContent = n, Sh(r, i);
  }
}
function wh(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Sh(t, e) {
  return I(t.head || t, e), e.sheet;
}
function D(t, e, n) {
  t.insertBefore(e, n || null);
}
function O(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Pt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function R(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function H() {
  return j(" ");
}
function Gr() {
  return j("");
}
function le(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function C(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Eh(t) {
  return Array.from(t.childNodes);
}
function we(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Pr(t, e) {
  t.value = e ?? "";
}
function Fi(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Ch(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Wn;
function ht(t) {
  Wn = t;
}
function kn() {
  if (!Wn)
    throw new Error("Function called outside component initialization");
  return Wn;
}
function Pa(t) {
  kn().$$.on_mount.push(t);
}
function Rt(t) {
  kn().$$.on_destroy.push(t);
}
function Xe() {
  const t = kn();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Ch(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Et(t, e) {
  return kn().$$.context.set(t, e), e;
}
function Fe(t) {
  return kn().$$.context.get(t);
}
const tn = [], ge = [];
let sn = [];
const Hi = [], kh = /* @__PURE__ */ Promise.resolve();
let Li = !1;
function Th() {
  Li || (Li = !0, kh.then(bo));
}
function ji(t) {
  sn.push(t);
}
function ln(t) {
  Hi.push(t);
}
const li = /* @__PURE__ */ new Set();
let Yt = 0;
function bo() {
  if (Yt !== 0)
    return;
  const t = Wn;
  do {
    try {
      for (; Yt < tn.length; ) {
        const e = tn[Yt];
        Yt++, ht(e), Ah(e.$$);
      }
    } catch (e) {
      throw tn.length = 0, Yt = 0, e;
    }
    for (ht(null), tn.length = 0, Yt = 0; ge.length; )
      ge.pop()();
    for (let e = 0; e < sn.length; e += 1) {
      const n = sn[e];
      li.has(n) || (li.add(n), n());
    }
    sn.length = 0;
  } while (tn.length);
  for (; Hi.length; )
    Hi.pop()();
  Li = !1, li.clear(), ht(t);
}
function Ah(t) {
  if (t.fragment !== null) {
    t.update(), bt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ji);
  }
}
function xh(t) {
  const e = [], n = [];
  sn.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), sn = e;
}
const Sr = /* @__PURE__ */ new Set();
let Lt;
function me() {
  Lt = {
    r: 0,
    c: [],
    p: Lt
    // parent group
  };
}
function be() {
  Lt.r || bt(Lt.c), Lt = Lt.p;
}
function $(t, e) {
  t && t.i && (Sr.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (Sr.has(t))
      return;
    Sr.add(t), Lt.c.push(() => {
      Sr.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Rr(t, e) {
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
      d !== o && f && (me(), P(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), be());
    }) : e.block.d(1), a.c(), $(a, 1), a.m(e.mount(), e.anchor), u = !0), e.block = a, e.blocks && (e.blocks[o] = a), u && bo();
  }
  if (yh(t)) {
    const i = kn();
    if (t.then((o) => {
      ht(i), r(e.then, 1, e.value, o), ht(null);
    }, (o) => {
      if (ht(i), r(e.catch, 2, e.error, o), ht(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function Ra(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function an(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function q(t) {
  t && t.c();
}
function B(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || ji(() => {
    const s = t.$$.on_mount.map(xa).filter($a);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : bt(s), t.$$.on_mount = [];
  }), o.forEach(ji);
}
function z(t, e) {
  const n = t.$$;
  n.fragment !== null && (xh(n.after_update), bt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function $h(t, e) {
  t.$$.dirty[0] === -1 && (tn.push(t), Th(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function he(t, e, n, r, i, o, s, l = [-1]) {
  const c = Wn;
  ht(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Y,
    not_equal: i,
    bound: ws(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: ws(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, d, ...m) => {
    const p = m.length ? m[0] : d;
    return a.ctx && i(a.ctx[f], a.ctx[f] = p) && (!a.skip_bound && a.bound[f] && a.bound[f](p), u && $h(t, f)), d;
  }) : [], a.update(), u = !0, bt(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Eh(e.target);
      a.fragment && a.fragment.l(f), f.forEach(O);
    } else
      a.fragment && a.fragment.c();
    e.intro && $(t.$$.fragment), B(t, e.target, e.anchor, e.customElement), bo();
  }
  ht(c);
}
class pe {
  $destroy() {
    z(this, 1), this.$destroy = Y;
  }
  $on(e, n) {
    if (!$a(n))
      return Y;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !vh(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ih = {
  [Ln.toString()]: "TenantHttpService",
  [Oi.toString()]: "DataSourceHttpService",
  [qt.toString()]: "EntityHttpService",
  [jn.toString()]: "EntityNameService",
  [Cn.toString()]: "BaseHttpService",
  [Di.toString()]: "LiveValueService"
};
function Oe(t, e = null) {
  let n = Ih[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? Aa;
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
function St(t, e, n = !0) {
  const r = window.dependencyContainer ?? Aa;
  try {
    if (r.isRegistered(t) && !n)
      return;
    r.registerInstance(t, e);
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
  return e;
}
function F0(t) {
  window.dependencyContainer = t;
}
function _o(...t) {
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
const Oa = new Zi(!1), Ph = Oa.asObservable().pipe(Hn((t) => !t), Pu(1)), Ss = {}, yo = /* @__PURE__ */ new Map(), vo = new Ie();
vo.asObservable();
function Rh(t) {
  yo.set(t.name, t), vo.next({
    type: "add",
    store: t
  });
}
function Oh(t) {
  yo.delete(t.name), vo.next({
    type: "remove",
    store: t
  });
}
function Dh() {
  return yo;
}
class wo extends Zi {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Rh(this);
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
    Ss.preStoreUpdate && (r = Ss.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, Oa.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Ph.subscribe(() => {
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
    return new Pe((i) => {
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
    Oh(this), this.reset();
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
function Mh(t, ...e) {
  const {
    state: n,
    config: r
  } = _o(...e), {
    name: i
  } = t;
  return new wo({
    name: i,
    state: n,
    config: r
  });
}
function So(t) {
  return {
    props: t,
    config: void 0
  };
}
function Nh(t, e) {
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
      initialized$: on(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new Dl(1), l = Gt(o.getItem(i.key)).subscribe((a) => {
    a && t.update((u) => i.preStoreInit(Object.assign({}, u, a))), s.next(!0), s.complete();
  }), c = i.source(t).pipe(Fu(1), ea((a) => o.setItem(i.key, a))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      c.unsubscribe(), l.unsubscribe();
    }
  };
}
function Uh(t) {
  if (t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return on(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), on(!0);
      },
      removeItem(e) {
        return t.removeItem(e), on(!0);
      }
    };
}
const Fh = Uh(typeof localStorage < "u" ? localStorage : void 0), Qt = [];
function Or(t, e = Y) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (fe(t, l) && (t = l, n)) {
      const c = !Qt.length;
      for (const a of r)
        a[1](), Qt.push(a, t);
      if (c) {
        for (let a = 0; a < Qt.length; a += 2)
          Qt[a][0](Qt[a + 1]);
        Qt.length = 0;
      }
    }
  }
  function o(l) {
    i(l(t));
  }
  function s(l, c = Y) {
    const a = [l, c];
    return r.add(a), r.size === 1 && (n = e(i) || Y), l(t), () => {
      r.delete(a), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
const Es = Or(X.Signal), { config: Hh, state: Lh } = _o(
  So({
    queryWithSubGroups: !0,
    selectedTenant: null,
    pageSize: 10
  })
), Bt = Mh({ name: "entity-select-selection" }, So({
  selectedEntities: []
})), zt = new wo({ state: Lh, config: Hh, name: "entity-select-global" });
Nh(zt, {
  key: "entity-select-global",
  storage: Fh
});
const bn = (t) => {
  const e = Dh().get(`entity-select-type-${Es}`);
  if (e)
    return e;
  const { state: n, config: r } = _o(
    So({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new wo({ state: n, config: r, name: `entity-select-type-${Es}` });
};
function Cs(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function jh(t) {
  let e;
  return {
    c() {
      e = R("div"), C(
        e,
        "class",
        /*tw*/
        t[5]`p-[10px]`
      );
    },
    m(n, r) {
      D(n, e, r);
    },
    p: Y,
    d(n) {
      n && O(e);
    }
  };
}
function Bh(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? Vh : zh
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = R("div"), i.c(), C(
        e,
        "class",
        /*tw*/
        t[5]`flex items-center`
      );
    },
    m(o, s) {
      D(o, e, s), i.m(e, null);
    },
    p(o, s) {
      r === (r = n(o)) && i ? i.p(o, s) : (i.d(1), i = r(o), i && (i.c(), i.m(e, null)));
    },
    d(o) {
      o && O(e), i.d();
    }
  };
}
function zh(t) {
  let e, n, r, i;
  return {
    c() {
      e = R("span"), n = j("chevron_right"), C(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      D(o, e, s), I(e, n), r || (i = le(
        e,
        "click",
        /*click_handler_1*/
        t[9]
      ), r = !0);
    },
    p: Y,
    d(o) {
      o && O(e), r = !1, i();
    }
  };
}
function Vh(t) {
  let e, n, r, i;
  return {
    c() {
      e = R("span"), n = j("expand_more"), C(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      D(o, e, s), I(e, n), r || (i = le(
        e,
        "click",
        /*click_handler*/
        t[8]
      ), r = !0);
    },
    p: Y,
    d(o) {
      o && O(e), r = !1, i();
    }
  };
}
function ks(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = Ts(Cs(t, s, a));
  const c = (a) => P(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = R("div"), n = R("div"), r = H(), i = R("div");
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
      D(a, e, u), I(e, n), I(e, r), I(e, i);
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
          const d = Cs(a, s, f);
          l[f] ? (l[f].p(d, u), $(l[f], 1)) : (l[f] = Ts(d), l[f].c(), $(l[f], 1), l[f].m(i, null));
        }
        for (me(), f = s.length; f < l.length; f += 1)
          c(f);
        be();
      }
    },
    i(a) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          $(l[u]);
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
      a && O(e), Pt(l, a);
    }
  };
}
function Ts(t) {
  let e, n;
  return e = new Da({
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
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function Wh(t) {
  var k, y;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((y = (k = t[1]) == null ? void 0 : k.Name) == null ? void 0 : y.Value) + ""
  ), c, a, u, f, d;
  function m(_, b) {
    return (
      /*children*/
      _[4].length > 0 ? Bh : jh
    );
  }
  let p = m(t), h = p(t), g = (
    /*expanded*/
    t[0] && ks(t)
  );
  return {
    c() {
      e = R("div"), n = R("div"), r = R("div"), i = H(), h.c(), o = H(), s = R("div"), c = j(l), a = H(), g && g.c(), C(
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
    m(_, b) {
      D(_, e, b), I(e, n), I(n, r), I(n, i), h.m(n, null), I(n, o), I(n, s), I(s, c), I(e, a), g && g.m(e, null), u = !0, f || (d = le(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), f = !0);
    },
    p(_, [b]) {
      var v, A;
      p === (p = m(_)) && h ? h.p(_, b) : (h.d(1), h = p(_), h && (h.c(), h.m(n, o))), (!u || b & /*group*/
      2) && l !== (l = /*group*/
      ((A = (v = _[1]) == null ? void 0 : v.Name) == null ? void 0 : A.Value) + "") && we(c, l), /*expanded*/
      _[0] ? g ? (g.p(_, b), b & /*expanded*/
      1 && $(g, 1)) : (g = ks(_), g.c(), $(g, 1), g.m(e, null)) : g && (me(), P(g, 1, 1, () => {
        g = null;
      }), be());
    },
    i(_) {
      u || ($(g), u = !0);
    },
    o(_) {
      P(g), u = !1;
    },
    d(_) {
      _ && O(e), h.d(), g && g.d(), f = !1, d();
    }
  };
}
function qh(t, e, n) {
  const r = Oe(qt);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, c = Fe("tw"), a = [], u = new Ie(), f = bn();
  f.pipe(gt(u), Mu("selectedGroup")).subscribe((y) => {
    var _, b;
    (_ = y.selectedGroup) == null || _.Id, i == null || i.Id, i && ((b = y.selectedGroup) != null && b.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, a = await (await r.queryConfiguration(X.Group, { GroupId: i.Id })).data);
    } catch (y) {
      console.error(y);
    }
  }
  function m() {
    n(0, o = !o);
  }
  function p() {
    f.update((y) => ({ ...y, selectedGroup: i }));
  }
  Rt(() => {
    u.next(), u.complete();
  });
  const h = () => m(), g = () => m(), k = () => p();
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
    m,
    p,
    h,
    g,
    k
  ];
}
class Da extends pe {
  constructor(e) {
    super(), he(this, e, qh, Wh, fe, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function Gh(t) {
  Jt(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function Jh(t) {
  let e;
  return {
    c() {
      e = j(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      D(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && we(
        e,
        /*icon*/
        n[0]
      );
    },
    d(n) {
      n && O(e);
    }
  };
}
function Kh(t) {
  let e, n, r, i, o, s, l, c, a, u;
  const f = (
    /*#slots*/
    t[11].default
  ), d = ze(
    f,
    t,
    /*$$scope*/
    t[10],
    null
  ), m = d || Jh(t);
  return {
    c() {
      e = R("div"), n = R("div"), i = H(), o = R("span"), m && m.c(), C(n, "class", ce(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), C(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), C(o, "class", ce(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none`
      ) + " svelte-1b4yyah"), C(e, "class", s = ce(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), C(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(p, h) {
      D(p, e, h), I(e, n), I(e, i), I(e, o), m && m.m(o, null), c = !0, a || (u = [
        le(
          e,
          "mousedown",
          /*mousedown_handler*/
          t[12]
        ),
        le(
          e,
          "mouseup",
          /*mouseup_handler*/
          t[13]
        ),
        le(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[14]
        ),
        le(
          e,
          "click",
          /*click_handler*/
          t[15]
        ),
        le(e, "blur", Xh)
      ], a = !0);
    },
    p(p, [h]) {
      (!c || h & /*active*/
      16 && r !== (r = /*active*/
      p[4] ? "width: 100% !important; height: 100% !important" : "")) && C(n, "style", r), d ? d.p && (!c || h & /*$$scope*/
      1024) && We(
        d,
        f,
        p,
        /*$$scope*/
        p[10],
        c ? Ve(
          f,
          /*$$scope*/
          p[10],
          h,
          null
        ) : qe(
          /*$$scope*/
          p[10]
        ),
        null
      ) : m && m.p && (!c || h & /*icon*/
      1) && m.p(p, c ? h : -1), (!c || h & /*className*/
      2 && s !== (s = ce(
        /*tw*/
        p[5]`container group ${/*className*/
        p[1]}`
      ) + " svelte-1b4yyah")) && C(e, "class", s), (!c || h & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      p[3] + "px; width: " + /*absoluteSize*/
      p[3] + "px; " + /*disabled*/
      (p[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && C(e, "style", l);
    },
    i(p) {
      c || ($(m, p), c = !0);
    },
    o(p) {
      P(m, p), c = !1;
    },
    d(p) {
      p && O(e), m && m.d(p), a = !1, bt(u);
    }
  };
}
const Xh = (t) => {
};
function Yh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: c = !1 } = e, a = Fe("tw"), u, f, d, m = Xe();
  function p(v) {
    c || (n(4, f = !0), d = v.timeStamp);
  }
  function h(v) {
    const A = v.timeStamp - d;
    A < 300 ? setTimeout(
      () => {
        n(4, f = !1);
      },
      300 - A
    ) : n(4, f = !1);
  }
  function g(v) {
    c || m("click", v);
  }
  const k = (v) => p(v), y = (v) => h(v), _ = (v) => h(v), b = (v) => g(v);
  return t.$$set = (v) => {
    "icon" in v && n(0, o = v.icon), "size" in v && n(9, s = v.size), "className" in v && n(1, l = v.className), "disabled" in v && n(2, c = v.disabled), "$$scope" in v && n(10, i = v.$$scope);
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
    p,
    h,
    g,
    s,
    i,
    r,
    k,
    y,
    _,
    b
  ];
}
class Tt extends pe {
  constructor(e) {
    super(), he(
      this,
      e,
      Yh,
      Kh,
      fe,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      Gh
    );
  }
}
function Qh(t) {
  let e, n, r, i, o, s, l, c, a;
  return {
    c() {
      e = R("div"), n = R("input"), i = H(), o = R("div"), s = j(
        /*label*/
        t[1]
      ), C(n, "type", "checkbox"), C(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), C(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      D(u, e, f), I(e, n), t[7](n), I(e, i), I(e, o), I(o, s), c || (a = [
        le(
          n,
          "click",
          /*click_handler*/
          t[8]
        ),
        le(
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
      2 && we(
        s,
        /*label*/
        u[1]
      ), f & /*tw*/
      4 && l !== (l = /*tw*/
      u[2]`flex items-center cursor-pointer`) && C(e, "class", l);
    },
    i: Y,
    o: Y,
    d(u) {
      u && O(e), t[7](null), c = !1, bt(a);
    }
  };
}
function Zh(t, e, n) {
  let { readonly: r = !1 } = e, { label: i = "" } = e, { checked: o = !1 } = e, { indeterminate: s = !1 } = e, { tw: l = Fe("tw") } = e, c = Xe(), a;
  function u(h) {
    r || (n(5, o = !o), console.log("checked", o), c("change", { checked: o }));
  }
  function f(h) {
    setTimeout(() => {
      (a == null ? void 0 : a.checked) !== h && n(3, a.checked = h, a);
    });
  }
  function d(h) {
    ge[h ? "unshift" : "push"](() => {
      a = h, n(3, a), n(5, o), n(6, s), n(11, f);
    });
  }
  const m = (h) => r ? h.preventDefault() : {}, p = (h) => u();
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
    m,
    p
  ];
}
class er extends pe {
  constructor(e) {
    super(), he(this, e, Zh, Qh, fe, {
      readonly: 0,
      label: 1,
      checked: 5,
      indeterminate: 6,
      tw: 2
    });
  }
}
function As(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function ep(t) {
  let e;
  return {
    c() {
      e = j("edit");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function xs(t) {
  let e, n, r;
  return n = new Da({
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
      e = R("div"), q(n.$$.fragment), C(
        e,
        "class",
        /*tw*/
        t[7]`flex-[2] overflow-auto`
      );
    },
    m(i, o) {
      D(i, e, o), B(n, e, null), r = !0;
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
      r || ($(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && O(e), z(n);
    }
  };
}
function $s(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ps(As(t, r, s));
  const o = (s) => P(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Gr();
    },
    m(s, l) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(s, l);
      D(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*tw, selectLastSelected, lastSelectedEntities, nameService, entityType, selectedEntityLookup, selectMultiple*/
      757) {
        r = /*lastSelectedEntities*/
        s[4];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const a = As(s, r, c);
          i[c] ? (i[c].p(a, l), $(i[c], 1)) : (i[c] = Ps(a), i[c].c(), $(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (me(), c = r.length; c < i.length; c += 1)
          o(c);
        be();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          $(i[l]);
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
      Pt(i, s), s && O(e);
    }
  };
}
function Is(t) {
  let e, n;
  return e = new er({
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
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function tp(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function np(t) {
  let e = (
    /*name*/
    t[21] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      D(r, n, i);
    },
    p(r, i) {
      i & /*entityType, lastSelectedEntities*/
      17 && e !== (e = /*name*/
      r[21] + "") && we(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function rp(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function Ps(t) {
  let e, n, r, i, o, s, l, c = (
    /*selectMultiple*/
    t[2] && Is(t)
  ), a = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: rp,
    then: np,
    catch: tp,
    value: 21
  };
  Rr(r = /*nameService*/
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
      e = R("div"), c && c.c(), n = H(), a.block.c(), i = H(), C(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      D(f, e, d), c && c.m(e, null), I(e, n), a.block.m(e, a.anchor = null), a.mount = () => e, a.anchor = i, I(e, i), o = !0, s || (l = le(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? c ? (c.p(t, d), d & /*selectMultiple*/
      4 && $(c, 1)) : (c = Is(t), c.c(), $(c, 1), c.m(e, n)) : c && (me(), P(c, 1, 1, () => {
        c = null;
      }), be()), a.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && Rr(r, a) || Ra(a, t, d);
    },
    i(f) {
      o || ($(c), o = !0);
    },
    o(f) {
      P(c), o = !1;
    },
    d(f) {
      f && O(e), c && c.d(), a.block.d(), a.token = null, a = null, s = !1, l();
    }
  };
}
function ip(t) {
  var y;
  let e, n, r = (
    /*selectedTenant*/
    ((y = t[1]) == null ? void 0 : y.Name) + ""
  ), i, o, s, l, c, a, u, f, d, m, p, h;
  s = new Tt({
    props: {
      size: "small",
      $$slots: { default: [ep] },
      $$scope: { ctx: t }
    }
  });
  let g = (
    /*rootGroup*/
    t[3] && xs(t)
  ), k = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && $s(t)
  );
  return {
    c() {
      e = R("div"), n = R("div"), i = j(r), o = H(), q(s.$$.fragment), l = H(), g && g.c(), c = H(), a = R("div"), u = R("div"), f = j("Zuletzt ausgewählt"), d = H(), k && k.c(), C(
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
    m(_, b) {
      D(_, e, b), I(e, n), I(n, i), I(n, o), B(s, n, null), I(e, l), g && g.m(e, null), I(e, c), I(e, a), I(a, u), I(u, f), I(a, d), k && k.m(a, null), m = !0, p || (h = le(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), p = !0);
    },
    p(_, [b]) {
      var A;
      (!m || b & /*selectedTenant*/
      2) && r !== (r = /*selectedTenant*/
      ((A = _[1]) == null ? void 0 : A.Name) + "") && we(i, r);
      const v = {};
      b & /*$$scope*/
      4194304 && (v.$$scope = { dirty: b, ctx: _ }), s.$set(v), /*rootGroup*/
      _[3] ? g ? (g.p(_, b), b & /*rootGroup*/
      8 && $(g, 1)) : (g = xs(_), g.c(), $(g, 1), g.m(e, c)) : g && (me(), P(g, 1, 1, () => {
        g = null;
      }), be()), /*lastSelectedEntities*/
      _[4] && /*lastSelectedEntities*/
      _[4].length > 0 ? k ? (k.p(_, b), b & /*lastSelectedEntities*/
      16 && $(k, 1)) : (k = $s(_), k.c(), $(k, 1), k.m(a, null)) : k && (me(), P(k, 1, 1, () => {
        k = null;
      }), be());
    },
    i(_) {
      m || ($(s.$$.fragment, _), $(g), $(k), m = !0);
    },
    o(_) {
      P(s.$$.fragment, _), P(g), P(k), m = !1;
    },
    d(_) {
      _ && O(e), z(s), g && g.d(), k && k.d(), p = !1, h();
    }
  };
}
function op(t, e, n) {
  let r = Oe(qt), i = Oe(jn), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, c = Fe("tw"), a = null, u, f = [], d = {}, m = Xe(), p = new Ie(), h = bn();
  h.pipe(gt(p)).subscribe((v) => {
    n(4, u = v.lastSelectedEntities);
  });
  const g = Bt.subscribe((v) => {
    f = v.selectedEntities, n(5, d = {});
    for (let A of f)
      n(5, d[A.Id] = !0, d);
  });
  async function k(v) {
    var A;
    try {
      n(3, a = await r.getEntityById(X.Group, v)), (!((A = h.value) != null && A.selectedGroup) || h.value.selectedGroup.Id != a.Id) && h.update((w) => ({ ...w, selectedGroup: a }));
    } catch (w) {
      console.log(w);
    }
  }
  async function y(v) {
    let A = await r.getEntityById(o, v);
    l ? d[v] ? f = f.filter((w) => w.Id !== v) : f.push(A) : f = [A], Bt.update((w) => ({ ...w, selectedEntities: f }));
  }
  Rt(() => {
    console.log("onDestroy"), g.unsubscribe();
  });
  const _ = () => m("changeTenant"), b = (v) => y(v);
  return t.$$set = (v) => {
    "entityType" in v && n(0, o = v.entityType), "selectedTenant" in v && n(1, s = v.selectedTenant), "selectMultiple" in v && n(2, l = v.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*selectedTenant*/
    2 && (console.log("building sidebar", s), s && s.Root && k(s.Root));
  }, [
    o,
    s,
    l,
    a,
    u,
    d,
    i,
    c,
    m,
    y,
    _,
    b
  ];
}
class sp extends pe {
  constructor(e) {
    super(), he(this, e, op, ip, fe, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const lp = (t) => ({}), Rs = (t) => ({});
function ap(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[2].default
  ), s = ze(
    o,
    t,
    /*$$scope*/
    t[1],
    null
  ), l = (
    /*#slots*/
    t[2].pagination
  ), c = ze(
    l,
    t,
    /*$$scope*/
    t[1],
    Rs
  );
  return {
    c() {
      e = R("div"), n = R("div"), s && s.c(), r = H(), c && c.c(), C(n, "class", "w-full overflow-auto flex-1"), C(e, "class", "flex flex-col h-full");
    },
    m(a, u) {
      D(a, e, u), I(e, n), s && s.m(n, null), I(e, r), c && c.m(e, null), i = !0;
    },
    p(a, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      2) && We(
        s,
        o,
        a,
        /*$$scope*/
        a[1],
        i ? Ve(
          o,
          /*$$scope*/
          a[1],
          u,
          null
        ) : qe(
          /*$$scope*/
          a[1]
        ),
        null
      ), c && c.p && (!i || u & /*$$scope*/
      2) && We(
        c,
        l,
        a,
        /*$$scope*/
        a[1],
        i ? Ve(
          l,
          /*$$scope*/
          a[1],
          u,
          lp
        ) : qe(
          /*$$scope*/
          a[1]
        ),
        Rs
      );
    },
    i(a) {
      i || ($(s, a), $(c, a), i = !0);
    },
    o(a) {
      P(s, a), P(c, a), i = !1;
    },
    d(a) {
      a && O(e), s && s.d(a), c && c.d(a);
    }
  };
}
function cp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = Xe(), l = Or(o);
  Et("audako:table:sort", l);
  let c = l.subscribe((a) => {
    s("sort", a);
  });
  return Rt(() => {
    c();
  }), t.$$set = (a) => {
    "startSort" in a && n(0, o = a.startSort), "$$scope" in a && n(1, i = a.$$scope);
  }, [o, i, r];
}
class up extends pe {
  constructor(e) {
    super(), he(this, e, cp, ap, fe, { startSort: 0 });
  }
}
function fp(t) {
  Jt(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function dp(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[2].default
  ), i = ze(
    r,
    t,
    /*$$scope*/
    t[1],
    null
  );
  return {
    c() {
      e = R("div"), i && i.c(), C(e, "class", "audako-tableheader-flexrow");
    },
    m(o, s) {
      D(o, e, s), i && i.m(e, null), t[3](e), n = !0;
    },
    p(o, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && We(
        i,
        r,
        o,
        /*$$scope*/
        o[1],
        n ? Ve(
          r,
          /*$$scope*/
          o[1],
          s,
          null
        ) : qe(
          /*$$scope*/
          o[1]
        ),
        null
      );
    },
    i(o) {
      n || ($(i, o), n = !0);
    },
    o(o) {
      P(i, o), n = !1;
    },
    d(o) {
      o && O(e), i && i.d(o), t[3](null);
    }
  };
}
function hp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    ge[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class pp extends pe {
  constructor(e) {
    super(), he(this, e, hp, dp, fe, {}, fp);
  }
}
function gp(t) {
  Jt(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function Os(t) {
  let e, n, r;
  return {
    c() {
      e = R("span"), n = j("north"), C(e, "class", "material-symbols-rounded text-xs transition-all"), C(e, "style", r = /*sortDirection*/
      (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(i, o) {
      D(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*sortDirection*/
      4 && r !== (r = /*sortDirection*/
      (i[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && C(e, "style", r);
    },
    d(i) {
      i && O(e);
    }
  };
}
function mp(t) {
  let e, n, r, i, o, s, l;
  const c = (
    /*#slots*/
    t[6].default
  ), a = ze(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let u = (
    /*sortable*/
    t[0] && Os(t)
  );
  return {
    c() {
      e = R("div"), n = R("div"), a && a.c(), r = H(), u && u.c(), C(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      D(f, e, d), I(e, n), a && a.m(n, null), I(e, r), u && u.m(e, null), o = !0, s || (l = le(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(f, [d]) {
      a && a.p && (!o || d & /*$$scope*/
      32) && We(
        a,
        c,
        f,
        /*$$scope*/
        f[5],
        o ? Ve(
          c,
          /*$$scope*/
          f[5],
          d,
          null
        ) : qe(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*sortable*/
      f[0] ? u ? u.p(f, d) : (u = Os(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
      3 && i !== (i = "header-cell " + /*sortable*/
      (f[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      f[1] + " svelte-11sxgak")) && C(e, "class", i);
    },
    i(f) {
      o || ($(a, f), o = !0);
    },
    o(f) {
      P(a, f), o = !1;
    },
    d(f) {
      f && O(e), a && a.d(f), u && u.d(), s = !1, l();
    }
  };
}
function bp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, c = "asc", a = Fe("audako:table:sort");
  console.log(a);
  let u = a.subscribe((m) => {
    s && (m == null ? void 0 : m.active) === s ? n(2, c = m.direction) : n(2, c = null);
  });
  function f() {
    c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), a.set(c ? { active: s, direction: c } : null);
  }
  Rt(() => {
    u();
  });
  const d = () => f();
  return t.$$set = (m) => {
    "sortable" in m && n(0, o = m.sortable), "id" in m && n(4, s = m.id), "container$class" in m && n(1, l = m.container$class), "$$scope" in m && n(5, i = m.$$scope);
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
class Bi extends pe {
  constructor(e) {
    super(), he(this, e, bp, mp, fe, { sortable: 0, id: 4, container$class: 1 }, gp);
  }
}
function _p(t) {
  Jt(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function yp(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[3].default
  ), l = ze(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = R("div"), l && l.c(), C(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(c, a) {
      D(c, e, a), l && l.m(e, null), r = !0, i || (o = le(
        e,
        "click",
        /*onClick*/
        t[1]
      ), i = !0);
    },
    p(c, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      4) && We(
        l,
        s,
        c,
        /*$$scope*/
        c[2],
        r ? Ve(
          s,
          /*$$scope*/
          c[2],
          a,
          null
        ) : qe(
          /*$$scope*/
          c[2]
        ),
        null
      ), (!r || a & /*flexrow$class*/
      1 && n !== (n = "audako-tablebody-flexrow " + /*flexrow$class*/
      c[0])) && C(e, "class", n);
    },
    i(c) {
      r || ($(l, c), r = !0);
    },
    o(c) {
      P(l, c), r = !1;
    },
    d(c) {
      c && O(e), l && l.d(c), i = !1, o();
    }
  };
}
function vp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = Xe();
  function l(c) {
    s("click", c);
  }
  return t.$$set = (c) => {
    "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
  }, [o, l, i, r];
}
class wp extends pe {
  constructor(e) {
    super(), he(this, e, vp, yp, fe, { flexrow$class: 0 }, _p);
  }
}
function Sp(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[3].default
  ), o = ze(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = R("div"), o && o.c(), C(e, "class", n = /*tw*/
      t[1]`border-t overflow-hidden ${/*container$class*/
      t[0]}`);
    },
    m(s, l) {
      D(s, e, l), o && o.m(e, null), r = !0;
    },
    p(s, [l]) {
      o && o.p && (!r || l & /*$$scope*/
      4) && We(
        o,
        i,
        s,
        /*$$scope*/
        s[2],
        r ? Ve(
          i,
          /*$$scope*/
          s[2],
          l,
          null
        ) : qe(
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
      r || ($(o, s), r = !0);
    },
    o(s) {
      P(o, s), r = !1;
    },
    d(s) {
      s && O(e), o && o.d(s);
    }
  };
}
function Ep(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = Fe("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class zi extends pe {
  constructor(e) {
    super(), he(this, e, Ep, Sp, fe, { container$class: 0 });
  }
}
var ar, Cp = new Uint8Array(16);
function kp() {
  if (!ar && (ar = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !ar))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ar(Cp);
}
const Tp = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Ap(t) {
  return typeof t == "string" && Tp.test(t);
}
var Ce = [];
for (var ai = 0; ai < 256; ++ai)
  Ce.push((ai + 256).toString(16).substr(1));
function xp(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Ce[t[e + 0]] + Ce[t[e + 1]] + Ce[t[e + 2]] + Ce[t[e + 3]] + "-" + Ce[t[e + 4]] + Ce[t[e + 5]] + "-" + Ce[t[e + 6]] + Ce[t[e + 7]] + "-" + Ce[t[e + 8]] + Ce[t[e + 9]] + "-" + Ce[t[e + 10]] + Ce[t[e + 11]] + Ce[t[e + 12]] + Ce[t[e + 13]] + Ce[t[e + 14]] + Ce[t[e + 15]]).toLowerCase();
  if (!Ap(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function $p(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || kp)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return xp(r);
}
const Ip = {
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
class Dr {
  constructor(e) {
    rt(this, "_popupContainer");
    rt(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...Ip, ...r }, console.log("openPopup", r);
    const i = $p(), o = new Ie(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
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
      afterClosed: Fn(o).then(() => console.log("afterClosed")),
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
var Pp = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Rp(t) {
  return Pp.get(t);
}
function Op(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function Dp(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var ie = (t, e) => !!~t.indexOf(e), K = (t, e = "-") => t.join(e), Vi = (t, e) => K(t.filter(Boolean), e), J = (t, e = 1) => t.slice(e), Mp = (t) => t, Ma = () => {
}, st = (t) => t[0].toUpperCase() + J(t), Eo = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Vt = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, Na = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, Ua = (t, e) => !ie("@:&", t[0]) && (ie("rg", (typeof e)[5]) || Array.isArray(e)), Co = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Vt(e[i], n);
  return Ua(i, o) ? r[Eo(i)] = o : r[i] = i[0] == "@" && ie("figa", i[1]) ? (r[i] || []).concat(o) : Co(r[i] || {}, o, n), r;
}, t) : t, Fa = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), Jr = (t) => (Array.isArray(t) || (t = [t]), "@media " + K(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || K(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), ci = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Np = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, mt, cn, Ct = (t = "") => (mt.push(t), ""), ko = (t) => {
  mt.length = Math.max(mt.lastIndexOf("") + ~~t, 0);
}, Up = (t) => t && !ie("!:", t[0]), Fp = (t) => t[0] == ":", Ha = (t, e) => {
  cn.push({
    v: mt.filter(Fp),
    d: t,
    n: e,
    i: ie(mt, "!"),
    $: ""
  });
}, Ds = (t) => {
  const e = t[0] == "-";
  e && (t = J(t));
  const n = K(mt.filter(Up));
  return Ha(t == "&" ? n : (n && n + "-") + t, e), "";
}, Nn = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && Ct(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && Ct(n), Ct();
        break;
      case "!":
        Ct(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && Ds(n), ko(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? Ct(":" + n) : n.slice(-1) == "-" ? Ct(n.slice(0, -1)) : Ds(n));
}, La = (t) => {
  Ct(), Mr(t), ko();
}, Hp = (t, e) => {
  if (e) {
    Ct();
    const n = ie("tbu", (typeof e)[1]);
    Nn(t, n), n && La(e), ko();
  }
}, Mr = (t) => {
  switch (typeof t) {
    case "string":
      Nn(t);
      break;
    case "function":
      Ha(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(La) : t && Object.keys(t).forEach((e) => {
        Hp(e, t[e]);
      });
  }
}, Ms = /* @__PURE__ */ new WeakMap(), Lp = (t) => {
  let e = Ms.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || ie(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (c) => {
          o == n && (r = ""), r += i, ie("rg", (typeof c)[5]) ? r += c : c && (Nn(r), r = "", Mr(c)), o == t.length - 1 && Nn(r);
        };
      const s = cn = [];
      Nn(i);
      const l = [...mt];
      return cn = [], (c) => {
        cn.push(...s), mt = [...l], c && Mr(c);
      };
    }), Ms.set(t, e);
  }
  return e;
}, Wi = (t) => (mt = [], cn = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? Lp(t[0]).forEach((e, n) => e(t[n + 1])) : Mr(t), cn), qi, jp = (t, e) => (typeof e == "function" && (qi = !1), e), Bp = (t) => {
  qi = !0;
  const e = JSON.stringify(t, jp);
  return qi && e;
}, Ns = /* @__PURE__ */ new WeakMap(), zp = (t, e) => {
  const n = Bp(e);
  let r;
  if (n) {
    var i = Ns.get(t);
    i || Ns.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Vt(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), Na(i, 1e4))), r;
}, Vp = (t, { css: e }) => e(Wi(t)), Wp = (...t) => zp(Vp, t), ja = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[Vi([r, l, i])] = e, s), {});
  }
}, qp = /* @__PURE__ */ ja((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), Nr = (t) => {
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
}, Ba = /* @__PURE__ */ ja(Nr), Gp = (t, e) => t + (e[1] == ":" ? J(e, 2) + ":" : J(e)) + ":", Us = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(Gp, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, x, Ft, Q, cr = (t) => t == "cols" ? "columns" : "rows", tr = (t) => (e, n, r) => ({
  [t]: r + ((x = K(e)) && "-" + x)
}), ue = (t, e) => (n, r, i) => (x = K(n, e)) && {
  [t || i]: x
}, Ae = (t) => (e, { theme: n }, r) => (x = n(t || r, e)) && {
  [t || r]: x
}, ur = (t, e) => (n, { theme: r }, i) => (x = r(t || i, n, K(n, e))) && {
  [t || i]: x
}, ot = (t, e) => (n, r) => t(n, r, e), ft = tr("display"), In = tr("position"), Zt = tr("textTransform"), en = tr("textDecoration"), fr = tr("fontStyle"), vt = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), dr = (t, { theme: e }, n) => (x = e("inset", t)) && { [n]: x }, Dn = (t, e, n, r = n) => (x = e(r + "Opacity", J(t))) && {
  [`--tw-${n}-opacity`]: x
}, ui = (t, e) => Math.round(parseInt(t, 16) * e), Ur = (t, e, n) => t && t[0] == "#" && (x = (t.length - 1) / 3) && (Q = [17, 1, 0.062272][x - 1]) ? `rgba(${ui(t.substr(1, x), Q)},${ui(t.substr(1 + x, x), Q)},${ui(t.substr(1 + 2 * x, x), Q)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, Er = (t, e, n) => n && typeof n == "string" ? (x = Ur(n, e + "-opacity")) && x !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, x]
} : { [t]: n } : void 0, Fs = (t) => (Q = Ur(t, "", "0")) == x ? "transparent" : Q, Hs = (t, { theme: e }, n, r, i, o) => (x = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (Q = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [Q]: "1"
} : {
  [Q]: "0",
  [Vi([i, x[0], o])]: (Ft = e(r, J(t))) && `calc(${Ft} * var(${Q}))`,
  [Vi([i, x[1], o])]: Ft && [Ft, `calc(${Ft} * calc(1 - var(${Q})))`]
} : void 0, za = (t, e) => e[0] && {
  [t]: (ie("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, fi = (t) => (e) => ie(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : za(t, e), Ls = (t) => (e, { theme: n }) => {
  if (x = n("grid" + st(t), e, ""))
    return { ["grid-" + t]: x };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return (x = n("grid" + st(t) + st(e[0]), J(e), K(J(e)))) && {
        [`grid-${t}-${e[0]}`]: x
      };
  }
}, Va = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return ue("borderStyle")(t);
    case "collapse":
    case "separate":
      return ue("borderCollapse")(t);
    case "opacity":
      return Dn(t, e, n);
  }
  return (x = e(n + "Width", t, "")) ? { borderWidth: x } : Er("borderColor", n, e(n + "Color", t));
}, Jp = (t, e, n) => {
  var r;
  const i = (r = Nr(t[0])) == null ? void 0 : r.map(st);
  i && (t = J(t));
  let o = Va(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, c]) => {
    if (l.startsWith("border"))
      for (const a of i)
        s[l.slice(0, 6) + a + l.slice(6)] = c;
    else
      s[l] = c;
    return s;
  }, {})), o;
}, Gi = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", di = (t, e, n) => t[0] && (x = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && x,
  [`--tw-${n}-y`]: t[0] !== "x" && x,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${x})`, Gi()]
}, Wa = (t) => (e, n, r) => r[1] ? Ba(n.theme(t, e), r[1], t) : Ae(t)(e, n, r), Dt = Wa("padding"), Mt = Wa("margin"), js = (t, { theme: e }, n) => (x = { w: "width", h: "height" }[t[0]]) && {
  [x = `${n}${st(x)}`]: e(x, J(t))
}, Ye = (t, { theme: e }, n) => {
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
  return Q = t.shift(), ie(["hue", "drop"], Q) && (Q += st(t.shift())), (x = e(i ? "backdrop" + st(Q) : Q, t)) && {
    ["--tw-" + i + Q]: (Array.isArray(x) ? x : [x]).map((o) => `${Eo(Q)}(${o})`).join(" ")
  };
}, Kp = {
  group: (t, { tag: e }, n) => e(K([n, ...t])),
  hidden: ot(ft, "none"),
  inline: ft,
  block: ft,
  contents: ft,
  flow: ft,
  table: (t, e, n) => ie(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : ft(t, e, n),
  flex(t, e, n) {
    switch (t[0]) {
      case "row":
      case "col":
        return {
          flexDirection: K(t[0] == "col" ? ["column", ...J(t)] : t)
        };
      case "nowrap":
      case "wrap":
        return { flexWrap: K(t) };
      case "grow":
      case "shrink":
        return x = e.theme("flex" + st(t[0]), J(t), t[1] || 1), x != null && {
          ["flex-" + t[0]]: "" + x
        };
    }
    return (x = e.theme("flex", t, "")) ? { flex: x } : ft(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return (x = e.theme("gridTemplate" + st(cr(t[0])), J(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : K(J(t)))) && {
          ["gridTemplate-" + cr(t[0])]: x
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: K(t[1] == "col" ? ["column", ...J(t, 2)] : J(t), " ")
        };
    }
    return ft(t, e, n);
  },
  auto: (t, { theme: e }) => ie(["cols", "rows"], t[0]) && (x = e("gridAuto" + st(cr(t[0])), J(t), K(J(t)))) && {
    ["gridAuto-" + cr(t[0])]: x
  },
  static: In,
  fixed: In,
  absolute: In,
  relative: In,
  sticky: In,
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
  appearance: ue(),
  cursor: ur(),
  float: ue(),
  clear: ue(),
  decoration: ue("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: ue(),
  "mix-blend": ue("mixBlendMode"),
  top: dr,
  right: dr,
  bottom: dr,
  left: dr,
  inset: (t, { theme: e }) => (x = Nr(t[0])) ? Ba(e("inset", J(t)), t[0]) : (x = e("inset", t)) && {
    top: x,
    right: x,
    bottom: x,
    left: x
  },
  underline: en,
  "line-through": en,
  "no-underline": ot(en, "none"),
  "text-underline": ot(en, "underline"),
  "text-no-underline": ot(en, "none"),
  "text-line-through": ot(en, "line-through"),
  uppercase: Zt,
  lowercase: Zt,
  capitalize: Zt,
  "normal-case": ot(Zt, "none"),
  "text-normal-case": ot(Zt, "none"),
  italic: fr,
  "not-italic": ot(fr, "normal"),
  "font-italic": ot(fr, "italic"),
  "font-not-italic": ot(fr, "normal"),
  font: (t, e, n) => (x = e.theme("fontFamily", t, "")) ? { fontFamily: x } : Ae("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: ie(["start", "end"], t[0]) ? "flex-" + t[0] : K(t)
  },
  "justify-self": ue(),
  "justify-items": ue(),
  justify: fi("justifyContent"),
  content: fi("alignContent"),
  self: fi("alignSelf"),
  place: (t) => t[0] && za("place-" + t[0], J(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: Ls("column"),
  row: Ls("row"),
  duration: Ae("transitionDuration"),
  delay: Ae("transitionDelay"),
  tracking: Ae("letterSpacing"),
  leading: Ae("lineHeight"),
  z: Ae("zIndex"),
  opacity: Ae(),
  ease: Ae("transitionTimingFunction"),
  p: Dt,
  py: Dt,
  px: Dt,
  pt: Dt,
  pr: Dt,
  pb: Dt,
  pl: Dt,
  m: Mt,
  my: Mt,
  mx: Mt,
  mt: Mt,
  mr: Mt,
  mb: Mt,
  ml: Mt,
  w: Ae("width"),
  h: Ae("height"),
  min: js,
  max: js,
  fill: Ae(),
  order: Ae(),
  origin: ur("transformOrigin", " "),
  select: ue("userSelect"),
  "pointer-events": ue(),
  align: ue("verticalAlign"),
  whitespace: ue("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: vt("ordinal"),
  "slashed-zero": vt("slashed-zero"),
  "lining-nums": vt("numeric-figure"),
  "oldstyle-nums": vt("numeric-figure"),
  "proportional-nums": vt("numeric-spacing"),
  "tabular-nums": vt("numeric-spacing"),
  "diagonal-fractions": vt("numeric-fraction"),
  "stacked-fractions": vt("numeric-fraction"),
  overflow: (t, e, n) => ie(["ellipsis", "clip"], t[0]) ? ue("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : ue()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: Gi(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => (x = e("rotate", t)) && {
    "--tw-rotate": x,
    transform: [`rotate(${x})`, Gi()]
  },
  scale: di,
  translate: di,
  skew: di,
  gap: (t, e, n) => (x = { x: "column", y: "row" }[t[0]]) ? { [x + "Gap"]: e.theme("gap", J(t)) } : Ae("gap")(t, e, n),
  stroke: (t, e, n) => (x = e.theme("stroke", t, "")) ? { stroke: x } : Ae("strokeWidth")(t, e, n),
  outline: (t, { theme: e }) => (x = e("outline", t)) && {
    outline: x[0],
    outlineOffset: x[1]
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
        return Zt([], x, t[0]);
      case "opacity":
        return Dn(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : {
      fontSize: r[0],
      ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1]
    } : Er("color", "text", e("textColor", t));
  },
  bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return ue("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return ue("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && ue("backgroundRepeat")(t);
      case "repeat":
        return ie("xy", t[1]) ? ue("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return Dn(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return ue("background-blend-mode")(J(t));
      case "gradient":
        if (t[1] == "to" && (x = Nr(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${K(x, " ")},var(--tw-gradient-stops))`
          };
    }
    return (x = e("backgroundPosition", t, "")) ? { backgroundPosition: x } : (x = e("backgroundSize", t, "")) ? { backgroundSize: x } : (x = e("backgroundImage", t, "")) ? { backgroundImage: x } : Er("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => (x = e("gradientColorStops", t)) && {
    "--tw-gradient-from": x,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Fs(x)})`
  },
  via: (t, { theme: e }) => (x = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${x},var(--tw-gradient-to,${Fs(x)})`
  },
  to: (t, { theme: e }) => (x = e("gradientColorStops", t)) && {
    "--tw-gradient-to": x
  },
  border: Jp,
  divide: (t, e, n) => (x = Hs(t, e, n, "divideWidth", "border", "width") || Va(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": x
  },
  space: (t, e, n) => (x = Hs(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": x
  },
  placeholder: (t, { theme: e }, n) => (x = t[0] == "opacity" ? Dn(t, e, n) : Er("color", "placeholder", e("placeholderColor", t))) && {
    "&::placeholder": x
  },
  shadow: (t, { theme: e }) => (x = e("boxShadow", t)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": x == "none" ? "0 0 transparent" : x,
    boxShadow: [
      x,
      "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"
    ]
  },
  animate: (t, { theme: e, tag: n }) => {
    if (Q = e("animation", t)) {
      const r = Q.split(" ");
      return (x = e("keyframes", r[0], Ft = {})) !== Ft ? (Q = n(r[0])) && {
        animation: Q + " " + K(J(r), " "),
        ["@keyframes " + Q]: x
      } : { animation: Q };
    }
  },
  ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return Dn(t, e, n);
      case "offset":
        return (x = e("ringOffsetWidth", J(t), "")) ? {
          "--tw-ring-offset-width": x
        } : {
          "--tw-ring-offset-color": e("ringOffsetColor", J(t))
        };
    }
    return (x = e("ringWidth", t, "")) ? {
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${x} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": e("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": e("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": Ur(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": Ur(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => ie(["contain", "cover", "fill", "none", "scale-down"], K(t)) ? { objectFit: K(t) } : ur("objectPosition", " ")(t, e, n),
  list: (t, e, n) => K(t) == "item" ? ft(t, e, n) : ie(["inside", "outside"], K(t)) ? { listStylePosition: t[0] } : ur("listStyleType")(t, e, n),
  rounded: (t, e, n) => qp(e.theme("borderRadius", J(t), ""), t[0], "border", "radius") || Ae("borderRadius")(t, e, n),
  "transition-none": { transitionProperty: "none" },
  transition: (t, { theme: e }) => ({
    transitionProperty: e("transitionProperty", t),
    transitionTimingFunction: e("transitionTimingFunction", ""),
    transitionDuration: e("transitionDuration", "")
  }),
  container: (t, { theme: e }) => {
    const { screens: n = e("screens"), center: r, padding: i } = e("container"), o = (s) => (x = i && (typeof i == "string" ? i : i[s] || i.DEFAULT)) ? {
      paddingRight: x,
      paddingLeft: x
    } : {};
    return Object.keys(n).reduce((s, l) => ((Q = n[l]) && typeof Q == "string" && (s[Jr(Q)] = {
      "&": {
        "max-width": Q,
        ...o(l)
      }
    }), s), {
      width: "100%",
      ...r ? { marginRight: "auto", marginLeft: "auto" } : {},
      ...o("xs")
    });
  },
  filter: Ye,
  blur: Ye,
  brightness: Ye,
  contrast: Ye,
  grayscale: Ye,
  "hue-rotate": Ye,
  invert: Ye,
  saturate: Ye,
  sepia: Ye,
  "drop-shadow": Ye,
  backdrop: Ye
}, Xp = (t) => ({
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
}), Yp = {
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
}, Bs = "__twind", Qp = (t) => {
  let e = self[Bs];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = Bs, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, qa = ({
  nonce: t,
  target: e = Qp(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, Zp = () => ({
  target: null,
  insert: Ma
}), To = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + K(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), zs = /* @__PURE__ */ To((t) => console.warn(t)), eg = /* @__PURE__ */ To((t) => {
  throw new Error(t);
}), tg = /* @__PURE__ */ To(Ma), dt = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, ng = (t, e, n) => {
  let r = "";
  const i = Rp(t);
  i && (r += `${dt(i, e, n)};`);
  let o = Op(t);
  return o & 1 && (r += `-webkit-${dt(t, e, n)};`), o & 2 && (r += `-moz-${dt(t, e, n)};`), o & 4 && (r += `-ms-${dt(t, e, n)};`), o = Dp(t, e), o & 1 && (r += `${dt(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${dt(t, `-moz-${e}`, n)};`), o & 4 && (r += `${dt(t, `-ms-${e}`, n)};`), r += dt(t, e, n), r;
}, Pn = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, wt = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, Ue = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, re = (t) => (e) => e(t), rg = {
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
    .../* @__PURE__ */ Ue(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ Ue(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ Ue(64, "rem", 4, 16, 4),
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
  backdropBlur: /* @__PURE__ */ re("blur"),
  backdropBrightness: /* @__PURE__ */ re("brightness"),
  backdropContrast: /* @__PURE__ */ re("contrast"),
  backdropGrayscale: /* @__PURE__ */ re("grayscale"),
  backdropHueRotate: /* @__PURE__ */ re("hueRotate"),
  backdropInvert: /* @__PURE__ */ re("invert"),
  backdropOpacity: /* @__PURE__ */ re("opacity"),
  backdropSaturate: /* @__PURE__ */ re("saturate"),
  backdropSepia: /* @__PURE__ */ re("sepia"),
  backgroundColor: /* @__PURE__ */ re("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ re("opacity"),
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
    .../* @__PURE__ */ Ue(200, "", 100, 0, 50),
    .../* @__PURE__ */ Ue(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: (t) => ({
    ...t("colors"),
    DEFAULT: t("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ re("opacity"),
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
    .../* @__PURE__ */ wt(8, "px")
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
    .../* @__PURE__ */ Ue(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  divideColor: /* @__PURE__ */ re("borderColor"),
  divideOpacity: /* @__PURE__ */ re("borderOpacity"),
  divideWidth: /* @__PURE__ */ re("borderWidth"),
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
  gap: /* @__PURE__ */ re("spacing"),
  gradientColorStops: /* @__PURE__ */ re("colors"),
  height: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Pn(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Pn(2, 4),
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
    .../* @__PURE__ */ Ue(10, "rem", 4, 3)
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
    .../* @__PURE__ */ Ue(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ Ue(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ re("spacing"),
  placeholderColor: /* @__PURE__ */ re("colors"),
  placeholderOpacity: /* @__PURE__ */ re("opacity"),
  ringColor: (t) => ({
    DEFAULT: t("colors.blue.500", "#3b82f6"),
    ...t("colors")
  }),
  ringOffsetColor: /* @__PURE__ */ re("colors"),
  ringOffsetWidth: /* @__PURE__ */ wt(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ wt(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ wt(2, "deg"),
    .../* @__PURE__ */ wt(12, "deg", 3),
    .../* @__PURE__ */ wt(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ Ue(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ Ue(150, "", 100, 0, 50),
    .../* @__PURE__ */ Ue(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ wt(2, "deg"),
    .../* @__PURE__ */ wt(12, "deg", 3)
  },
  space: /* @__PURE__ */ re("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ Ue(2),
  textColor: /* @__PURE__ */ re("colors"),
  textOpacity: /* @__PURE__ */ re("opacity"),
  transitionDuration: (t) => ({
    DEFAULT: "150ms",
    ...t("durations")
  }),
  transitionDelay: /* @__PURE__ */ re("durations"),
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
    ...Pn(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Pn(2, 6),
    ...Pn(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ Ue(50, "", 1, 0, 10)
  }
}, Ga = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[K(n)] = i, e[K(n, ".")] = i);
  const o = [...n, r];
  e[K(o)] = i, e[K(o, ".")] = i, i && typeof i == "object" && Ga(i, e, o);
}, e), e), ig = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, og = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && ie(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (ie(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), sg = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...rg, ...t }, r = (o, s) => {
    const l = o && o[s], c = typeof l == "function" ? l(i, ig) : l;
    return c && s == "colors" ? Ga(c) : c;
  }, i = (o, s, l) => {
    const c = o.split(".");
    o = c[0], c.length > 1 && (l = s, s = K(J(c), "."));
    let a = e.get(o);
    if (a || (e.set(o, a = { ...r(n, o) }), Object.assign(a, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? K(s) : s) || "DEFAULT";
      const u = og(o, s) || a[s];
      return u == null ? l : Array.isArray(u) && !ie(["fontSize", "outline", "dropShadow"], o) ? K(u, ",") : u;
    }
    return a;
  };
  return i;
}, lg = (t, e) => (n, r) => {
  if (typeof n.d == "function")
    return n.d(e);
  const i = n.d.split(/-(?![^[]*])/g);
  if (!r && i[0] == "tw" && n.$ == n.d)
    return n.$;
  for (let o = i.length; o; o--) {
    const s = K(i.slice(0, o));
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      const l = t[s];
      return typeof l == "function" ? l(J(i, o), e, s) : typeof l == "string" ? e[r ? "css" : "tw"](l) : l;
    }
  }
}, Rn, Ja = /^:(group(?:(?!-focus).+?)*)-(.+)$/, Ka = /^(:not)-(.+)/, Xa = (t) => t[1] == "[" ? J(t) : t, ag = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (Rn = n("screens", J(s), "")) ? { [Jr(Rn)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (Rn = Ja.exec(s)) ? { [`.${Fa(r(Rn[1]))}:${Rn[2]} &`]: o } : {
    [e[J(s)] || "&" + s.replace(Ka, (l, c, a) => c + "(" + Xa(":" + a) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, Re, Ya = (t) => (((Re = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Re[1] / (Re[2] ? 15 : 1) / 10 : 0) & 31) << 22, Qa = (t) => {
  Re = 0;
  for (let e = t.length; e--; )
    Re += ie("-:,", t[e]);
  return Re;
}, Za = (t) => (Qa(t) & 15) << 18, cg = [
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
], ug = (t) => 1 << (~(Re = cg.indexOf(t.replace(Ja, ":$2").slice(3, 8))) ? Re : 17), fg = (t, e) => (n, r) => n | ((Re = t("screens", J(r), "")) ? 1 << 27 | Ya(Jr(Re)) : r == ":dark" ? 1 << 30 : (Re = e[r] || r.replace(Ka, ":$2"))[0] == "@" ? Za(Re) : ug(r)), dg = (t) => t[0] == "-" ? 0 : Qa(t) + ((Re = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Re[1] || -!!Re[2] : 0) + 1, hi = (t, e) => e + "{" + t + "}", hg = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, m) => (f = s(f), Array.isArray(d) ? K(d.filter(Boolean).map((p) => t(f, s(p), m)), ";") : t(f, s(d), m));
  let c;
  const a = (f, d, m, p, h) => {
    if (Array.isArray(p)) {
      p.forEach((_) => _ && a(f, d, m, _, h));
      return;
    }
    let g = "", k = 0, y = 0;
    p["@apply"] && (p = Co(Vt(Wp(p["@apply"]), n), { ...p, "@apply": void 0 }, n)), Object.keys(p).forEach((_) => {
      const b = Vt(p[_], n);
      if (Ua(_, b)) {
        if (b !== "" && _.length > 1) {
          const v = Eo(_);
          y += 1, k = Math.max(k, dg(v)), g = (g && g + ";") + l(v, b, h);
        }
      } else if (b)
        if (_ == ":global" && (_ = "@global"), _[0] == "@")
          if (_[1] == "g")
            a([], "", 0, b, h);
          else if (_[1] == "f")
            a([], _, 0, b, h);
          else if (_[1] == "k") {
            const v = c.length;
            a([], "", 0, b, h);
            const A = c.splice(v, c.length - v);
            c.push({
              r: hi(K(A.map((w) => w.r), ""), _),
              p: A.reduce((w, E) => w + E.p, 0)
            });
          } else
            _[1] == "i" ? (Array.isArray(b) ? b : [b]).forEach((v) => v && c.push({ p: 0, r: `${_} ${v};` })) : (_[2] == "c" && (_ = Jr(n.theme("screens", J(_, 8).trim()))), a([...f, _], d, m | Ya(_) | Za(_), b, h));
        else
          a(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (v, A, w) => _.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (E, M, V) => (ie(M, "&") ? M.replace(/&/g, A) : (A && A + " ") + M) + V) + w) : _, m, b, h);
    }), y && c.push({
      r: f.reduceRight(hi, hi(g, d)),
      p: m * (1 << 8) + ((Math.max(0, 15 - y) & 15) << 4 | (k || 15) & 15)
    });
  }, u = fg(r, e);
  return (f, d, m, p = 0) => (p <<= 28, c = [], a([], d ? "." + Fa(d) : "", m ? m.v.reduceRight(u, p) : p, f, m && m.i), c);
}, pg = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const c = Np(i, l);
      try {
        t.insert(s, c), i.splice(c, 0, l);
      } catch (a) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: a }, r);
      }
    }
  };
}, pi = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, gg = (t) => (typeof t == "string" ? { t: eg, a: zs, i: tg }[t[1]] : t) || zs, mg = { _: { value: "", writable: !0 } }, bg = (t = {}) => {
  const e = sg(t.theme), n = gg(t.mode), r = pi(t.hash, !1, !1, ci), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], c = {
    tw: (...w) => v(w),
    theme: (w, E, M) => {
      var V;
      const Z = (V = e(w, E, M)) != null ? V : n.unknown(w, E == null || Array.isArray(E) ? E : E.split("."), M != null, c);
      return o.n && Z && ie("rg", (typeof Z)[5]) ? `calc(${Z} * -1)` : Z;
    },
    tag: (w) => r ? r(w) : w,
    css: (w) => {
      s++;
      const E = l.length;
      try {
        (typeof w == "string" ? Wi([w]) : w).forEach(b);
        const M = Object.create(null, mg);
        for (let V = E; V < l.length; V++) {
          const Z = l[V];
          if (Z)
            switch (typeof Z) {
              case "object":
                Co(M, Z, c);
                break;
              case "string":
                M._ += (M._ && " ") + Z;
            }
        }
        return M;
      } finally {
        l.length = E, s--;
      }
    }
  }, a = lg({ ...Kp, ...t.plugins }, c), u = (w) => {
    const E = o;
    o = w;
    try {
      return Vt(a(w), c);
    } finally {
      o = E;
    }
  }, f = { ...Yp, ...t.variants }, d = ag(t.darkMode || "media", f, c), m = hg(pi(t.prefix, ng, dt), f, c), p = t.sheet || (typeof window > "u" ? Zp() : qa(t)), { init: h = (w) => w() } = p, g = pg(p, n, h, c);
  let k;
  h((w = /* @__PURE__ */ new Map()) => k = w);
  const y = /* @__PURE__ */ new WeakMap(), _ = (w, E) => w == "_" ? void 0 : typeof E == "function" ? JSON.stringify(Vt(E, c), _) : E, b = (w) => {
    !s && o.v.length && (w = { ...w, v: [...o.v, ...w.v], $: "" }), w.$ || (w.$ = Us(w, y.get(w.d)));
    let E = s ? null : k.get(w.$);
    if (E == null) {
      let M = u(w);
      if (w.$ || (w.$ = ci(JSON.stringify(M, _)), y.set(w.d, w.$), w.$ = Us(w, w.$)), M && typeof M == "object")
        if (w.v = w.v.map(Xa), i && (w.i = i), M = d(M, w), s)
          l.push(M);
        else {
          const V = typeof w.d == "function" ? typeof M._ == "string" ? 1 : 3 : 2;
          E = r || typeof w.d == "function" ? (r || ci)(V + w.$) : w.$, m(M, E, w, V).forEach(g), M._ && (E += " " + M._);
        }
      else
        typeof M == "string" ? E = M : (E = w.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: E }, c)), s && typeof w.d != "function" && l.push(E);
      s || (k.set(w.$, E), Na(k, 3e4));
    }
    return E;
  }, v = (w) => K(Wi(w).map(b).filter(Boolean), " "), A = pi(t.preflight, Mp, !1);
  if (A) {
    const w = Xp(e), E = m(typeof A == "function" ? Vt(A(w, c), c) || w : { ...w, ...A });
    h((M = (E.forEach(g), !0)) => M);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, c),
    process: v
  };
}, ec = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = bg(o));
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
}, { tw: Ge, setup: _g } = /* @__PURE__ */ ec();
function yg(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[14].default
  ), s = ze(
    o,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = R("div"), n = R("div"), s && s.c(), Fi(n, "display", "none"), C(n, "class", r = Ge` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), C(e, "class", "popup-element-wrapper"), Fi(e, "position", "absolute");
    },
    m(l, c) {
      D(l, e, c), I(e, n), s && s.m(n, null), t[15](n), t[16](e), i = !0;
    },
    p(l, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      8192) && We(
        s,
        o,
        l,
        /*$$scope*/
        l[13],
        i ? Ve(
          o,
          /*$$scope*/
          l[13],
          c,
          null
        ) : qe(
          /*$$scope*/
          l[13]
        ),
        null
      ), (!i || c & /*popupClass*/
      1 && r !== (r = Ge` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      l[0]}`)) && C(n, "class", r);
    },
    i(l) {
      i || ($(s, l), i = !0);
    },
    o(l) {
      P(s, l), i = !1;
    },
    d(l) {
      l && O(e), s && s.d(l), t[15](null), t[16](null);
    }
  };
}
function vg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { closeOnEscape: s = !0 } = e, { sizeToAnchor: l = !1 } = e, { anchorElement: c = null } = e, { position: a = null } = e, { popupClass: u = "" } = e, { preferedVerticalAlignment: f = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: m = { x: 0, y: 0 } } = e, p = Oe("PopupContainerService", new Dr(document.body)), h, g, k;
  function y() {
    const w = {
      backdrop: !1,
      closeOnClickOutside: o,
      closeOnEscape: s,
      positioning: c ? "anchor" : "custom",
      anchorElement: c,
      customPosition: l ? m : a,
      anchorHorizontal: d,
      anchorVertical: f
    };
    document.body.appendChild(h), n(1, h.style.display = "block", h), console.log(h.getBoundingClientRect(), h);
    const E = c == null ? void 0 : c.offsetWidth, M = h.offsetWidth;
    E && l && M < E && (console.log("setting width"), n(1, h.style.width = `${E}px`, h)), n(1, h.style.position = "static", h), g = p.openPopup("popup-container", h, w), g.afterClosed.then(() => {
      b(), k.appendChild(h), console.log("closing popup", h.getBoundingClientRect());
    });
  }
  function _() {
    g == null || g.close();
  }
  function b() {
    n(1, h.style.display = "none", h), n(1, h.style.position = "absolute", h), n(1, h.style.width = "auto", h);
  }
  function v(w) {
    ge[w ? "unshift" : "push"](() => {
      h = w, n(1, h);
    });
  }
  function A(w) {
    ge[w ? "unshift" : "push"](() => {
      k = w, n(2, k);
    });
  }
  return t.$$set = (w) => {
    "closeOnClick" in w && n(3, o = w.closeOnClick), "closeOnEscape" in w && n(4, s = w.closeOnEscape), "sizeToAnchor" in w && n(5, l = w.sizeToAnchor), "anchorElement" in w && n(6, c = w.anchorElement), "position" in w && n(7, a = w.position), "popupClass" in w && n(0, u = w.popupClass), "preferedVerticalAlignment" in w && n(8, f = w.preferedVerticalAlignment), "preferedHorizontalAlignment" in w && n(9, d = w.preferedHorizontalAlignment), "positionOffset" in w && n(10, m = w.positionOffset), "$$scope" in w && n(13, i = w.$$scope);
  }, [
    u,
    h,
    k,
    o,
    s,
    l,
    c,
    a,
    f,
    d,
    m,
    y,
    _,
    i,
    r,
    v,
    A
  ];
}
class tc extends pe {
  constructor(e) {
    super(), he(this, e, vg, yg, fe, {
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
function wg(t) {
  Jt(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Vs(t) {
  let e;
  return {
    c() {
      e = R("div"), C(e, "class", ce(Ge`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
    },
    m(n, r) {
      D(n, e, r);
    },
    p: Y,
    d(n) {
      n && O(e);
    }
  };
}
function Sg(t) {
  let e, n, r, i;
  function o(l) {
    t[7](l);
  }
  let s = { tw: Ge, readonly: !0 };
  return (
    /*isSelected*/
    t[0] !== void 0 && (s.checked = /*isSelected*/
    t[0]), n = new er({ props: s }), ge.push(() => an(n, "checked", o)), {
      c() {
        e = R("div"), q(n.$$.fragment), C(e, "class", ce(Ge`p-1`) + " svelte-oysah1");
      },
      m(l, c) {
        D(l, e, c), B(n, e, null), i = !0;
      },
      p(l, c) {
        const a = {};
        !r && c & /*isSelected*/
        1 && (r = !0, a.checked = /*isSelected*/
        l[0], ln(() => r = !1)), n.$set(a);
      },
      i(l) {
        i || ($(n.$$.fragment, l), i = !0);
      },
      o(l) {
        P(n.$$.fragment, l), i = !1;
      },
      d(l) {
        l && O(e), z(n);
      }
    }
  );
}
function Eg(t) {
  let e, n, r, i, o, s, l, c, a = (
    /*isSelected*/
    t[0] && !/*multiple*/
    t[2] && Vs()
  ), u = (
    /*multiple*/
    t[2] && Sg(t)
  );
  const f = (
    /*#slots*/
    t[6].default
  ), d = ze(
    f,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = R("div"), a && a.c(), n = H(), u && u.c(), r = H(), i = R("span"), d && d.c(), C(e, "class", o = ce(Ge`flex hover:(${hr}) items-center ${/*multiple*/
      t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      t[0] && !/*multiple*/
      t[2] ? hr : ""}`) + " svelte-oysah1");
    },
    m(m, p) {
      D(m, e, p), a && a.m(e, null), I(e, n), u && u.m(e, null), I(e, r), I(e, i), d && d.m(i, null), t[8](i), s = !0, l || (c = le(
        e,
        "click",
        /*onClickOption*/
        t[3]
      ), l = !0);
    },
    p(m, [p]) {
      /*isSelected*/
      m[0] && !/*multiple*/
      m[2] ? a ? a.p(m, p) : (a = Vs(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*multiple*/
      m[2] && u.p(m, p), d && d.p && (!s || p & /*$$scope*/
      32) && We(
        d,
        f,
        m,
        /*$$scope*/
        m[5],
        s ? Ve(
          f,
          /*$$scope*/
          m[5],
          p,
          null
        ) : qe(
          /*$$scope*/
          m[5]
        ),
        null
      ), (!s || p & /*isSelected*/
      1 && o !== (o = ce(Ge`flex hover:(${hr}) items-center ${/*multiple*/
      m[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      m[0] && !/*multiple*/
      m[2] ? hr : ""}`) + " svelte-oysah1")) && C(e, "class", o);
    },
    i(m) {
      s || ($(u), $(d, m), s = !0);
    },
    o(m) {
      P(u), P(d, m), s = !1;
    },
    d(m) {
      m && O(e), a && a.d(), u && u.d(), d && d.d(m), t[8](null), l = !1, c();
    }
  };
}
let hr = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Cg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, c = null, a, u;
  const f = Fe("audako:select:multiple"), d = Fe("audako:select:close"), m = Fe("audako:select:value"), p = Fe("audako:select:value:changed"), h = Fe("audako:select:displayValue");
  Pa(() => {
    var b;
    u = (b = a.innerText) == null ? void 0 : b.trim(), h.subscribe((v) => {
      c = v;
    }), m.subscribe((v) => {
      l = v, f ? n(0, s = v == null ? void 0 : v.includes(o)) : n(0, s = v === o), k();
    });
  });
  function g(b) {
    console.log("clicked option"), b.preventDefault(), b.stopPropagation();
    let v = null;
    f ? s ? v = l.filter((A) => A !== o) : v = Array.isArray(l) ? [...l, o] : [o] : (v = o, d()), m.set(v), p.next(v);
  }
  function k() {
    if (f) {
      const b = c;
      s && !b.includes(u) ? h.set([...b, u]) : !s && b.includes(u) && h.set(b.filter((v) => v !== u));
    } else
      s && h.set(u);
  }
  function y(b) {
    s = b, n(0, s);
  }
  function _(b) {
    ge[b ? "unshift" : "push"](() => {
      a = b, n(1, a);
    });
  }
  return t.$$set = (b) => {
    "value" in b && n(4, o = b.value), "$$scope" in b && n(5, i = b.$$scope);
  }, [
    s,
    a,
    f,
    g,
    o,
    i,
    r,
    y,
    _
  ];
}
class nc extends pe {
  constructor(e) {
    super(), he(this, e, Cg, Eg, fe, { value: 4 }, wg);
  }
}
function Ws(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const kg = (t) => ({}), qs = (t) => ({});
function Tg(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = j(e), r = H();
    },
    m(i, o) {
      D(i, n, o), D(i, r, o);
    },
    p(i, o) {
      o & /*options*/
      16 && e !== (e = /*option*/
      i[26].label + "") && we(n, e);
    },
    d(i) {
      i && O(n), i && O(r);
    }
  };
}
function Gs(t) {
  let e, n;
  return e = new nc({
    props: {
      value: (
        /*option*/
        t[26].value
      ),
      $$slots: { default: [Tg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*options*/
      16 && (o.value = /*option*/
      r[26].value), i & /*$$scope, options*/
      131088 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function Ag(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[13].default
  ), o = ze(
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
    l[a] = Gs(Ws(t, s, a));
  const c = (a) => P(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      o && o.c(), e = H();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = Gr();
    },
    m(a, u) {
      o && o.m(a, u), D(a, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(a, u);
      D(a, n, u), r = !0;
    },
    p(a, u) {
      if (o && o.p && (!r || u & /*$$scope*/
      131072) && We(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        r ? Ve(
          i,
          /*$$scope*/
          a[17],
          u,
          null
        ) : qe(
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
          const d = Ws(a, s, f);
          l[f] ? (l[f].p(d, u), $(l[f], 1)) : (l[f] = Gs(d), l[f].c(), $(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (me(), f = s.length; f < l.length; f += 1)
          c(f);
        be();
      }
    },
    i(a) {
      if (!r) {
        $(o, a);
        for (let u = 0; u < s.length; u += 1)
          $(l[u]);
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
      o && o.d(a), a && O(e), Pt(l, a), a && O(n);
    }
  };
}
function xg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p;
  const h = (
    /*#slots*/
    t[13].prefix
  ), g = ze(
    h,
    t,
    /*$$scope*/
    t[17],
    qs
  );
  let k = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [Ag] },
    $$scope: { ctx: t }
  };
  return f = new tc({ props: k }), t[16](f), {
    c() {
      e = R("div"), g && g.c(), n = H(), r = R("input"), o = H(), s = R("div"), l = j("arrow_drop_down"), u = H(), q(f.$$.fragment), r.disabled = /*disabled*/
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
      D(y, e, _), g && g.m(e, null), I(e, n), I(e, r), Pr(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), I(e, o), I(e, s), I(s, l), D(y, u, _), B(f, y, _), d = !0, m || (p = [
        le(
          r,
          "input",
          /*input_input_handler*/
          t[14]
        ),
        le(
          e,
          "click",
          /*openMenu*/
          t[10]
        )
      ], m = !0);
    },
    p(y, [_]) {
      g && g.p && (!d || _ & /*$$scope*/
      131072) && We(
        g,
        h,
        y,
        /*$$scope*/
        y[17],
        d ? Ve(
          h,
          /*$$scope*/
          y[17],
          _,
          kg
        ) : qe(
          /*$$scope*/
          y[17]
        ),
        qs
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
      y[7] && Pr(
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
      const b = {};
      _ & /*textfield*/
      256 && (b.anchorElement = /*textfield*/
      y[8]), _ & /*$$scope, options*/
      131088 && (b.$$scope = { dirty: _, ctx: y }), f.$set(b);
    },
    i(y) {
      d || ($(g, y), $(f.$$.fragment, y), d = !0);
    },
    o(y) {
      P(g, y), P(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && O(e), g && g.d(y), t[15](null), y && O(u), t[16](null), z(f, y), m = !1, bt(p);
    }
  };
}
function $g(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: c = "" } = e, { container$class: a = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = Ge } = e, { disabled: m = !1 } = e, p = "", h, g, k = Xe(), y = Or(o);
  const _ = y.subscribe((N) => {
    n(11, o = N);
  });
  let b = new Ie();
  const v = b.subscribe((N) => {
    k("valueChanged", N);
  });
  let A = Or(s ? [] : ""), w = A.subscribe((N) => {
    M(N);
  });
  function E(N) {
    N && (N.preventDefault(), N.stopPropagation()), !m && (g == null || g.openPopup());
  }
  function M(N) {
    if (N == null || N.length === 0) {
      n(7, p = null);
      return;
    }
    Array.isArray(N) ? n(7, p = N.join(", ")) : n(7, p = N);
  }
  Et("audako:select:multiple", s), Et("audako:select:value", y), Et("audako:select:value:changed", b), Et("audako:select:displayValue", A), Et("audako:select:close", () => g.closePopup()), Rt(() => {
    _(), v.unsubscribe(), w();
  });
  function V() {
    p = this.value, n(7, p);
  }
  function Z(N) {
    ge[N ? "unshift" : "push"](() => {
      h = N, n(8, h);
    });
  }
  function Ee(N) {
    ge[N ? "unshift" : "push"](() => {
      g = N, n(9, g);
    });
  }
  return t.$$set = (N) => {
    "value" in N && n(11, o = N.value), "multiple" in N && n(12, s = N.multiple), "placeholder" in N && n(0, l = N.placeholder), "textfield$class" in N && n(1, c = N.textfield$class), "container$class" in N && n(2, a = N.container$class), "suffixIcon$class" in N && n(3, u = N.suffixIcon$class), "options" in N && n(4, f = N.options), "tw" in N && n(5, d = N.tw), "disabled" in N && n(6, m = N.disabled), "$$scope" in N && n(17, i = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    32 && Et("tw", d);
  }, [
    l,
    c,
    a,
    u,
    f,
    d,
    m,
    p,
    h,
    g,
    E,
    o,
    s,
    r,
    V,
    Z,
    Ee,
    i
  ];
}
class rc extends pe {
  constructor(e) {
    super(), he(this, e, $g, xg, fe, {
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
function Js(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function Ig(t) {
  let e = (
    /*option*/
    t[18] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      D(r, n, i);
    },
    p(r, i) {
      i & /*pageSizeOptions*/
      8 && e !== (e = /*option*/
      r[18] + "") && we(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function Ks(t) {
  let e, n;
  return e = new nc({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [Ig] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*pageSizeOptions*/
      8 && (o.value = /*option*/
      r[18]), i & /*$$scope, pageSizeOptions*/
      2097160 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function Pg(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ks(Js(t, r, s));
  const o = (s) => P(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Gr();
    },
    m(s, l) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(s, l);
      D(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*pageSizeOptions*/
      8) {
        r = /*pageSizeOptions*/
        s[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const a = Js(s, r, c);
          i[c] ? (i[c].p(a, l), $(i[c], 1)) : (i[c] = Ks(a), i[c].c(), $(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (me(), c = r.length; c < i.length; c += 1)
          o(c);
        be();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          $(i[l]);
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
      Pt(i, s), s && O(e);
    }
  };
}
function Rg(t) {
  let e;
  return {
    c() {
      e = j("first_page");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Og(t) {
  let e;
  return {
    c() {
      e = j("navigate_before");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Dg(t) {
  let e;
  return {
    c() {
      e = j("navigate_next");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Mg(t) {
  let e;
  return {
    c() {
      e = j("last_page");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Ng(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, m = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), p, h, g, k, y, _, b, v, A, w, E, M, V, Z;
  function Ee(L) {
    t[10](L);
  }
  let N = {
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
    $$slots: { default: [Pg] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (N.value = /*pageSize*/
    t[0]), s = new rc({ props: N }), ge.push(() => an(s, "value", Ee)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), b = new Tt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Rg] },
        $$scope: { ctx: t }
      }
    }), b.$on(
      "click",
      /*click_handler*/
      t[12]
    ), A = new Tt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Og] },
        $$scope: { ctx: t }
      }
    }), A.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), E = new Tt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Dg] },
        $$scope: { ctx: t }
      }
    }), E.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), V = new Tt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Mg] },
        $$scope: { ctx: t }
      }
    }), V.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = R("div"), n = R("div"), r = j("Items per page:"), i = H(), o = R("div"), q(s.$$.fragment), c = H(), a = R("div"), f = j(u), d = j(" - "), p = j(m), h = H(), g = R("div"), k = j("of "), y = j(
          /*totalCount*/
          t[2]
        ), _ = H(), q(b.$$.fragment), v = H(), q(A.$$.fragment), w = H(), q(E.$$.fragment), M = H(), q(V.$$.fragment), C(
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
          g,
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
      m(L, ee) {
        D(L, e, ee), I(e, n), I(n, r), I(e, i), I(e, o), B(s, o, null), I(e, c), I(e, a), I(a, f), I(a, d), I(a, p), I(e, h), I(e, g), I(g, k), I(g, y), I(e, _), B(b, e, null), I(e, v), B(A, e, null), I(e, w), B(E, e, null), I(e, M), B(V, e, null), Z = !0;
      },
      p(L, [ee]) {
        const Te = {};
        ee & /*$$scope, pageSizeOptions*/
        2097160 && (Te.$$scope = { dirty: ee, ctx: L }), !l && ee & /*pageSize*/
        1 && (l = !0, Te.value = /*pageSize*/
        L[0], ln(() => l = !1)), s.$set(Te), (!Z || ee & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        L[1] * /*pageSize*/
        L[0] + 1 + "") && we(f, u), (!Z || ee & /*pageIndex, pageSize*/
        3) && m !== (m = /*pageIndex*/
        (L[1] + 1) * /*pageSize*/
        L[0] + "") && we(p, m), (!Z || ee & /*totalCount*/
        4) && we(
          y,
          /*totalCount*/
          L[2]
        );
        const _t = {};
        ee & /*pageIndex*/
        2 && (_t.disabled = /*pageIndex*/
        L[1] === 0), ee & /*$$scope*/
        2097152 && (_t.$$scope = { dirty: ee, ctx: L }), b.$set(_t);
        const U = {};
        ee & /*pageIndex*/
        2 && (U.disabled = /*pageIndex*/
        L[1] === 0), ee & /*$$scope*/
        2097152 && (U.$$scope = { dirty: ee, ctx: L }), A.$set(U);
        const G = {};
        ee & /*pageIndex, lastPageIndex*/
        18 && (G.disabled = /*pageIndex*/
        L[1] === /*lastPageIndex*/
        L[4]), ee & /*$$scope*/
        2097152 && (G.$$scope = { dirty: ee, ctx: L }), E.$set(G);
        const nt = {};
        ee & /*pageIndex, lastPageIndex*/
        18 && (nt.disabled = /*pageIndex*/
        L[1] === /*lastPageIndex*/
        L[4]), ee & /*$$scope*/
        2097152 && (nt.$$scope = { dirty: ee, ctx: L }), V.$set(nt);
      },
      i(L) {
        Z || ($(s.$$.fragment, L), $(b.$$.fragment, L), $(A.$$.fragment, L), $(E.$$.fragment, L), $(V.$$.fragment, L), Z = !0);
      },
      o(L) {
        P(s.$$.fragment, L), P(b.$$.fragment, L), P(A.$$.fragment, L), P(E.$$.fragment, L), P(V.$$.fragment, L), Z = !1;
      },
      d(L) {
        L && O(e), z(s), z(b), z(A), z(E), z(V);
      }
    }
  );
}
function Xs(t, e) {
  return Math.max(Math.ceil(e / t) - 1, 0);
}
function Ug(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Fe("tw"), l, { pageSizeOptions: c = [10, 20, 50, 100] } = e, a = Xe();
  function u(v) {
    n(1, r = r + v), p();
  }
  function f() {
    n(1, r = 0), p();
  }
  function d() {
    n(1, r = l), p();
  }
  function m(v) {
    console.log("changePageSize", v), n(0, i = v), n(4, l = Xs(i, o)), n(1, r = Math.min(r, l)), p();
  }
  function p() {
    a("changePage", { pageIndex: r, pageSize: i });
  }
  function h(v) {
    i = v, n(0, i);
  }
  const g = (v) => m(v.detail), k = () => f(), y = () => u(-1), _ = () => u(1), b = () => d();
  return t.$$set = (v) => {
    "pageIndex" in v && n(1, r = v.pageIndex), "pageSize" in v && n(0, i = v.pageSize), "totalCount" in v && n(2, o = v.totalCount), "pageSizeOptions" in v && n(3, c = v.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & /*pageSize, totalCount*/
    5 && n(4, l = Xs(i, o)), t.$$.dirty & /*pageSize*/
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
    m,
    h,
    g,
    k,
    y,
    _,
    b
  ];
}
class Fg extends pe {
  constructor(e) {
    super(), he(this, e, Ug, Ng, fe, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function Hg(t) {
  Jt(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Ys(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function Qs(t) {
  let e, n;
  return e = new Bi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0 cursor-default`
      ),
      id: "Name",
      $$slots: { default: [Lg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*masterToggleState*/
      32 | i[1] & /*$$scope*/
      64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function Lg(t) {
  let e, n;
  return e = new er({
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
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function jg(t) {
  let e;
  return {
    c() {
      e = j("Name");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Bg(t) {
  let e;
  return {
    c() {
      e = j("Group");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function zg(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && Qs(t)
  );
  return n = new Bi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [jg] },
      $$scope: { ctx: t }
    }
  }), i = new Bi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [Bg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = H(), q(n.$$.fragment), r = H(), q(i.$$.fragment);
    },
    m(l, c) {
      s && s.m(l, c), D(l, e, c), B(n, l, c), D(l, r, c), B(i, l, c), o = !0;
    },
    p(l, c) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, c), c[0] & /*selectMultiple*/
      1 && $(s, 1)) : (s = Qs(l), s.c(), $(s, 1), s.m(e.parentNode, e)) : s && (me(), P(s, 1, 1, () => {
        s = null;
      }), be());
      const a = {};
      c[1] & /*$$scope*/
      64 && (a.$$scope = { dirty: c, ctx: l }), n.$set(a);
      const u = {};
      c[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: c, ctx: l }), i.$set(u);
    },
    i(l) {
      o || ($(s), $(n.$$.fragment, l), $(i.$$.fragment, l), o = !0);
    },
    o(l) {
      P(s), P(n.$$.fragment, l), P(i.$$.fragment, l), o = !1;
    },
    d(l) {
      s && s.d(l), l && O(e), z(n, l), l && O(r), z(i, l);
    }
  };
}
function Vg(t) {
  let e;
  return {
    c() {
      e = R("div"), C(e, "class", ce(
        /*tw*/
        t[9]`w-full h-[3px]`
      ) + " svelte-15xwzh7");
    },
    m(n, r) {
      D(n, e, r);
    },
    p: Y,
    d(n) {
      n && O(e);
    }
  };
}
function Wg(t) {
  let e, n;
  return {
    c() {
      e = R("div"), n = R("div"), C(n, "class", ce(
        /*tw*/
        t[9]`progress-bar-value-animation w-full h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), C(e, "class", ce(
        /*tw*/
        t[9]`w-full h-[3px] overflow-hidden bg-blue-200`
      ) + " svelte-15xwzh7");
    },
    m(r, i) {
      D(r, e, i), I(e, n);
    },
    p: Y,
    d(r) {
      r && O(e);
    }
  };
}
function Zs(t) {
  let e, n;
  return e = new zi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0`
      ),
      $$slots: { default: [qg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*selectedEntitiesInPageLookup, entities*/
      24 | i[1] & /*$$scope*/
      64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function qg(t) {
  let e, n;
  return e = new er({
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
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function Gg(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = R("div"), r = j(n), C(e, "class", ce(
        /*tw*/
        t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(o, s) {
      D(o, e, s), I(e, r);
    },
    p(o, s) {
      var l;
      s[0] & /*entities*/
      8 && n !== (n = /*entity*/
      ((l = o[33].Name) == null ? void 0 : l.Value) + "") && we(r, n);
    },
    d(o) {
      o && O(e);
    }
  };
}
function Jg(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function Kg(t) {
  let e = (
    /*name*/
    (t[36] ?? "") + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      D(r, n, i);
    },
    p(r, i) {
      i[0] & /*entities*/
      8 && e !== (e = /*name*/
      (r[36] ?? "") + "") && we(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function Xg(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function Yg(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Xg,
    then: Kg,
    catch: Jg,
    value: 36
  };
  return Rr(n = /*nameService*/
  t[8].resolveName(
    X.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = R("span"), r.block.c(), C(e, "class", ce(
        /*tw*/
        t[9]` text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      D(i, e, o), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null;
    },
    p(i, o) {
      t = i, r.ctx = t, o[0] & /*entities*/
      8 && n !== (n = /*nameService*/
      t[8].resolveName(
        X.Group,
        /*entity*/
        t[33].GroupId
      )) && Rr(n, r) || Ra(r, t, o);
    },
    d(i) {
      i && O(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function Qg(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && Zs(t)
  );
  return n = new zi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [Gg] },
      $$scope: { ctx: t }
    }
  }), i = new zi({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [Yg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = H(), q(n.$$.fragment), r = H(), q(i.$$.fragment), o = H();
    },
    m(c, a) {
      l && l.m(c, a), D(c, e, a), B(n, c, a), D(c, r, a), B(i, c, a), D(c, o, a), s = !0;
    },
    p(c, a) {
      /*selectMultiple*/
      c[0] ? l ? (l.p(c, a), a[0] & /*selectMultiple*/
      1 && $(l, 1)) : (l = Zs(c), l.c(), $(l, 1), l.m(e.parentNode, e)) : l && (me(), P(l, 1, 1, () => {
        l = null;
      }), be());
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
      s || ($(l), $(n.$$.fragment, c), $(i.$$.fragment, c), s = !0);
    },
    o(c) {
      P(l), P(n.$$.fragment, c), P(i.$$.fragment, c), s = !1;
    },
    d(c) {
      l && l.d(c), c && O(e), z(n, c), c && O(r), z(i, c), c && O(o);
    }
  };
}
function el(t) {
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
  return e = new wp({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [Qg] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", r), {
    c() {
      q(e.$$.fragment);
    },
    m(i, o) {
      B(e, i, o), n = !0;
    },
    p(i, o) {
      t = i;
      const s = {};
      o[0] & /*entities, selectedEntitiesInPageLookup, selectMultiple*/
      25 | o[1] & /*$$scope*/
      64 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
    },
    i(i) {
      n || ($(e.$$.fragment, i), n = !0);
    },
    o(i) {
      P(e.$$.fragment, i), n = !1;
    },
    d(i) {
      z(e, i);
    }
  };
}
function Zg(t) {
  let e, n, r, i, o;
  e = new pp({
    props: {
      $$slots: { default: [zg] },
      $$scope: { ctx: t }
    }
  });
  function s(d, m) {
    return (
      /*loading*/
      d[7] ? Wg : Vg
    );
  }
  let l = s(t), c = l(t), a = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < a.length; d += 1)
    u[d] = el(Ys(t, a, d));
  const f = (d) => P(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      q(e.$$.fragment), n = H(), c.c(), r = H();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = Gr();
    },
    m(d, m) {
      B(e, d, m), D(d, n, m), c.m(d, m), D(d, r, m);
      for (let p = 0; p < u.length; p += 1)
        u[p] && u[p].m(d, m);
      D(d, i, m), o = !0;
    },
    p(d, m) {
      const p = {};
      if (m[0] & /*masterToggleState, selectMultiple*/
      33 | m[1] & /*$$scope*/
      64 && (p.$$scope = { dirty: m, ctx: d }), e.$set(p), l === (l = s(d)) && c ? c.p(d, m) : (c.d(1), c = l(d), c && (c.c(), c.m(r.parentNode, r))), m[0] & /*tw, onEntitySelected, entities, nameService, selectedEntitiesInPageLookup, selectMultiple*/
      1817) {
        a = /*entities*/
        d[3];
        let h;
        for (h = 0; h < a.length; h += 1) {
          const g = Ys(d, a, h);
          u[h] ? (u[h].p(g, m), $(u[h], 1)) : (u[h] = el(g), u[h].c(), $(u[h], 1), u[h].m(i.parentNode, i));
        }
        for (me(), h = a.length; h < u.length; h += 1)
          f(h);
        be();
      }
    },
    i(d) {
      if (!o) {
        $(e.$$.fragment, d);
        for (let m = 0; m < a.length; m += 1)
          $(u[m]);
        o = !0;
      }
    },
    o(d) {
      P(e.$$.fragment, d), u = u.filter(Boolean);
      for (let m = 0; m < u.length; m += 1)
        P(u[m]);
      o = !1;
    },
    d(d) {
      z(e, d), d && O(n), c.d(d), d && O(r), Pt(u, d), d && O(i);
    }
  };
}
function em(t) {
  let e, n;
  return e = new Fg({
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
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function tm(t) {
  let e, n, r;
  return n = new up({
    props: {
      $$slots: {
        pagination: [em],
        default: [Zg]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = R("div"), q(n.$$.fragment), C(e, "class", ce(
        /*tw*/
        t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      D(i, e, o), B(n, e, null), r = !0;
    },
    p(i, o) {
      const s = {};
      o[0] & /*pageIndex, pageSize, totalCount, entities, selectedEntitiesInPageLookup, selectMultiple, loading, masterToggleState*/
      255 | o[1] & /*$$scope*/
      64 && (s.$$scope = { dirty: o, ctx: i }), n.$set(s);
    },
    i(i) {
      r || ($(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && O(e), z(n);
    }
  };
}
function nm(t, e, n) {
  let r = Oe(qt), i = Oe(jn), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, c = Fe("tw"), a = [], u = new Ie(), f = [], d = {}, m = "unchecked", p, h, g, k = !1, y = 0, _ = 10, b = 0, v = bn(), A = zt, w = !1, E = !0, M = new Ie();
  Bt.pipe(gt(M)).subscribe((U) => {
    f = U.selectedEntities, ee(), N();
  }), Xl([A.asObservable(), v.asObservable()]).pipe(gt(M)).subscribe(([U, G]) => {
    var nt;
    console.log("globalState", U), g = G.selectedGroup, h = (nt = G.selectedGroup) == null ? void 0 : nt.Id, p = G.filter, k = U.queryWithSubGroups, w = !0, n(1, y = 0), n(2, _ = U.pageSize ?? 10), u.next();
  });
  function V() {
    const U = { $and: [] };
    k ? U.$and.push({ Path: h }) : U.$and.push({ GroupId: h }), p && U.$and.push({
      $or: [
        {
          "Name.Value": { $regex: p, $options: "i" }
        },
        {
          "Description.Value": { $regex: p, $options: "i" }
        }
      ]
    }), l && U.$and.push(l);
    const G = {
      limit: _,
      skip: y * _
    };
    return Gt(r.queryConfiguration(o, U, G));
  }
  function Z(U) {
    s ? (f.find((G) => G.Id === U.Id) ? (f = f.filter((G) => G.Id !== U.Id), n(4, d[U.Id] = !1, d)) : (f.push(U), n(4, d[U.Id] = !0, d)), N()) : f = [U], Bt.update((G) => ({ ...G, selectedEntities: f }));
  }
  function Ee(U) {
    U ? f = [
      ...f,
      ...a.filter((G) => !d[G.Id])
    ] : f = f.filter((G) => !a.find((nt) => nt.Id === G.Id)), ee(), N(), Bt.update((G) => ({ ...G, selectedEntities: f }));
  }
  function N() {
    let U = Object.keys(d).filter((G) => d[G]);
    U.length === 0 ? n(5, m = "unchecked") : U.length === a.length ? n(5, m = "checked") : n(5, m = "indeterminate");
  }
  function L(U) {
    const G = U.detail;
    G.pageSize != _ ? (n(1, y = 0), n(2, _ = G.pageSize)) : n(1, y = G.pageIndex);
  }
  function ee() {
    n(4, d = {}), a.forEach((U) => {
      n(4, d[U.Id] = f.find((G) => G.Id === U.Id) != null, d);
    });
  }
  Rt(() => {
    M.next(), M.complete();
  }), u.pipe(gt(M), Hn(() => w && !!h), ju(250), Hu(() => n(7, E = !0)), ea(() => V())).subscribe((U) => {
    n(7, E = !1), n(3, a = U.data), ee(), N(), o === X.Group && a.unshift(g), n(6, b = U.total);
  });
  const Te = (U) => {
    var G;
    return Ee((G = U.detail) == null ? void 0 : G.checked);
  }, _t = (U) => Z(U);
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
    m,
    b,
    E,
    i,
    c,
    Z,
    Ee,
    L,
    o,
    l,
    Te,
    _t
  ];
}
class rm extends pe {
  constructor(e) {
    super(), he(
      this,
      e,
      nm,
      tm,
      fe,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      Hg,
      [-1, -1]
    );
  }
}
function tl(t) {
  let e, n, r, i;
  n = new Tt({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && nl(t)
  );
  return {
    c() {
      e = R("div"), q(n.$$.fragment), r = H(), o && o.c(), C(
        e,
        "class",
        /*tw*/
        t[5]`mx-2 relative`
      );
    },
    m(s, l) {
      D(s, e, l), B(n, e, null), I(e, r), o && o.m(e, null), i = !0;
    },
    p(s, l) {
      /*selectedEntities*/
      s[4].length > 0 ? o ? o.p(s, l) : (o = nl(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    i(s) {
      i || ($(n.$$.fragment, s), i = !0);
    },
    o(s) {
      P(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && O(e), z(n), o && o.d();
    }
  };
}
function nl(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = R("div"), r = j(n), C(
        e,
        "class",
        /*tw*/
        t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`
      );
    },
    m(i, o) {
      D(i, e, o), I(e, r);
    },
    p(i, o) {
      o & /*selectedEntities*/
      16 && n !== (n = /*selectedEntities*/
      i[4].length + "") && we(r, n);
    },
    d(i) {
      i && O(e);
    }
  };
}
function im(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p, h, g = (
    /*selectMultiple*/
    t[0] && tl(t)
  );
  function k(_) {
    t[11](_);
  }
  let y = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (y.checked = /*withSubGroups*/
    t[1]), f = new er({ props: y }), ge.push(() => an(f, "checked", k)), {
      c() {
        e = R("div"), n = R("div"), r = R("div"), i = R("span"), o = j("search"), s = H(), l = R("input"), c = H(), g && g.c(), a = H(), u = R("div"), q(f.$$.fragment), C(
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
      m(_, b) {
        D(_, e, b), I(e, n), I(n, r), I(r, i), I(i, o), I(r, s), I(r, l), t[8](l), Pr(
          l,
          /*filter*/
          t[2]
        ), I(n, c), g && g.m(n, null), I(e, a), I(e, u), B(f, u, null), m = !0, p || (h = le(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), p = !0);
      },
      p(_, [b]) {
        b & /*filter*/
        4 && l.value !== /*filter*/
        _[2] && Pr(
          l,
          /*filter*/
          _[2]
        ), /*selectMultiple*/
        _[0] ? g ? (g.p(_, b), b & /*selectMultiple*/
        1 && $(g, 1)) : (g = tl(_), g.c(), $(g, 1), g.m(n, null)) : g && (me(), P(g, 1, 1, () => {
          g = null;
        }), be());
        const v = {};
        !d && b & /*withSubGroups*/
        2 && (d = !0, v.checked = /*withSubGroups*/
        _[1], ln(() => d = !1)), f.$set(v);
      },
      i(_) {
        m || ($(g), $(f.$$.fragment, _), m = !0);
      },
      o(_) {
        P(g), P(f.$$.fragment, _), m = !1;
      },
      d(_) {
        _ && O(e), t[8](null), g && g.d(), z(f), p = !1, h();
      }
    }
  );
}
function om(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = Fe("tw"), s = Xe(), l = bn(), c = !1, a = l.value.filter, u, f = new Ie(), d = new Ie(), m = [];
  zt.pipe(gt(f)).subscribe((v) => {
    n(1, c = v.queryWithSubGroups);
  }), d.pipe(gt(f), Iu(200)).subscribe((v) => {
    l.update((A) => ({ ...A, filter: v }));
  }), Bt.pipe(gt(f)).subscribe((v) => {
    n(4, m = v.selectedEntities);
  });
  function p(v) {
    console.log("onSubGroupsToggled", v), v != zt.value.queryWithSubGroups && zt.update((A) => ({
      ...A,
      queryWithSubGroups: v
    }));
  }
  function h() {
    s("acceptSelection");
  }
  Pa(() => {
    g();
  });
  function g() {
    u && setTimeout(
      () => {
        u.focus(), u.select();
      },
      0
    );
  }
  Rt(() => {
    f.next(), f.complete();
  });
  function k(v) {
    ge[v ? "unshift" : "push"](() => {
      u = v, n(3, u);
    });
  }
  function y() {
    a = this.value, n(2, a);
  }
  const _ = () => h();
  function b(v) {
    c = v, n(1, c);
  }
  return t.$$set = (v) => {
    "entityType" in v && n(7, r = v.entityType), "selectMultiple" in v && n(0, i = v.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*filter*/
    4 && d.next(a), t.$$.dirty & /*withSubGroups*/
    2 && p(c);
  }, [
    i,
    c,
    a,
    u,
    m,
    o,
    h,
    r,
    k,
    y,
    _,
    b
  ];
}
class sm extends pe {
  constructor(e) {
    super(), he(this, e, om, im, fe, { entityType: 7, selectMultiple: 0 });
  }
}
function rl(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function il(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function ol(t) {
  let e, n;
  return e = new Tt({
    props: {
      size: "small",
      $$slots: { default: [lm] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*$$scope*/
      1048576 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function lm(t) {
  let e;
  return {
    c() {
      e = j("arrow_back");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function sl(t) {
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
      e = R("div"), r = j(n), o = j(i), s = H(), C(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      D(f, e, d), I(e, r), I(e, o), I(e, s), c || (a = le(e, "click", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && we(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && we(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && C(e, "class", l);
    },
    d(f) {
      f && O(e), c = !1, a();
    }
  };
}
function ll(t) {
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
  return n = new Tt({
    props: {
      $$slots: { default: [am] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = R("div"), q(n.$$.fragment);
    },
    m(o, s) {
      D(o, e, s), B(n, e, null), r = !0;
    },
    p(o, s) {
      t = o;
      const l = {};
      s & /*$$scope*/
      1048576 && (l.$$scope = { dirty: s, ctx: t }), n.$set(l);
    },
    i(o) {
      r || ($(n.$$.fragment, o), r = !0);
    },
    o(o) {
      P(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && O(e), z(n);
    }
  };
}
function am(t) {
  let e;
  return {
    c() {
      e = j("done");
    },
    m(n, r) {
      D(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function al(t) {
  var p;
  let e, n, r = (
    /*tenant*/
    ((p = t[15]) == null ? void 0 : p.Name) + ""
  ), i, o, s, l, c, a, u, f, d = (
    /*tenant*/
    t[15].Root && ll(t)
  );
  function m() {
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
      e = R("div"), n = R("div"), i = j(r), s = H(), d && d.c(), l = H(), C(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), C(e, "class", c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(h, g) {
      D(h, e, g), I(e, n), I(n, i), I(e, s), d && d.m(e, null), I(e, l), a = !0, u || (f = le(e, "click", m), u = !0);
    },
    p(h, g) {
      var k;
      t = h, (!a || g & /*tenants*/
      8) && r !== (r = /*tenant*/
      ((k = t[15]) == null ? void 0 : k.Name) + "") && we(i, r), (!a || g & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && C(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, g), g & /*tenants*/
      8 && $(d, 1)) : (d = ll(t), d.c(), $(d, 1), d.m(e, l)) : d && (me(), P(d, 1, 1, () => {
        d = null;
      }), be()), (!a || g & /*tw*/
      2 && c !== (c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && C(e, "class", c);
    },
    i(h) {
      a || ($(d), a = !0);
    },
    o(h) {
      P(d), a = !1;
    },
    d(h) {
      h && O(e), d && d.d(), u = !1, f();
    }
  };
}
function cm(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p, h, g = (
    /*allowBack*/
    t[0] && ol(t)
  ), k = (
    /*tenantPath*/
    t[2]
  ), y = [];
  for (let A = 0; A < k.length; A += 1)
    y[A] = sl(il(t, k, A));
  let _ = (
    /*tenants*/
    t[3]
  ), b = [];
  for (let A = 0; A < _.length; A += 1)
    b[A] = al(rl(t, _, A));
  const v = (A) => P(b[A], 1, 1, () => {
    b[A] = null;
  });
  return {
    c() {
      e = R("div"), n = R("div"), g && g.c(), r = H(), i = R("div"), o = j("Mandant auswählen"), c = H(), a = R("div");
      for (let A = 0; A < y.length; A += 1)
        y[A].c();
      f = H(), d = R("div");
      for (let A = 0; A < b.length; A += 1)
        b[A].c();
      C(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), C(n, "class", l = /*tw*/
      t[1]`flex items-center`), C(a, "class", u = /*tw*/
      t[1]`flex mb-1`), Fi(d, "grid-auto-rows", "60px"), C(d, "class", m = /*tw*/
      t[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`), C(e, "class", p = /*tw*/
      t[1]`w-full overflow-hidden flex flex-col`);
    },
    m(A, w) {
      D(A, e, w), I(e, n), g && g.m(n, null), I(n, r), I(n, i), I(i, o), I(e, c), I(e, a);
      for (let E = 0; E < y.length; E += 1)
        y[E] && y[E].m(a, null);
      I(e, f), I(e, d);
      for (let E = 0; E < b.length; E += 1)
        b[E] && b[E].m(d, null);
      h = !0;
    },
    p(A, [w]) {
      if (/*allowBack*/
      A[0] ? g ? (g.p(A, w), w & /*allowBack*/
      1 && $(g, 1)) : (g = ol(A), g.c(), $(g, 1), g.m(n, r)) : g && (me(), P(g, 1, 1, () => {
        g = null;
      }), be()), (!h || w & /*tw*/
      2 && s !== (s = /*tw*/
      A[1]`font-bold text-gray-600 text-lg`)) && C(i, "class", s), (!h || w & /*tw*/
      2 && l !== (l = /*tw*/
      A[1]`flex items-center`)) && C(n, "class", l), w & /*tw, selectTenantInPath, tenantPath*/
      70) {
        k = /*tenantPath*/
        A[2];
        let E;
        for (E = 0; E < k.length; E += 1) {
          const M = il(A, k, E);
          y[E] ? y[E].p(M, w) : (y[E] = sl(M), y[E].c(), y[E].m(a, null));
        }
        for (; E < y.length; E += 1)
          y[E].d(1);
        y.length = k.length;
      }
      if ((!h || w & /*tw*/
      2 && u !== (u = /*tw*/
      A[1]`flex mb-1`)) && C(a, "class", u), w & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        _ = /*tenants*/
        A[3];
        let E;
        for (E = 0; E < _.length; E += 1) {
          const M = rl(A, _, E);
          b[E] ? (b[E].p(M, w), $(b[E], 1)) : (b[E] = al(M), b[E].c(), $(b[E], 1), b[E].m(d, null));
        }
        for (me(), E = _.length; E < b.length; E += 1)
          v(E);
        be();
      }
      (!h || w & /*tw*/
      2 && m !== (m = /*tw*/
      A[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`)) && C(d, "class", m), (!h || w & /*tw*/
      2 && p !== (p = /*tw*/
      A[1]`w-full overflow-hidden flex flex-col`)) && C(e, "class", p);
    },
    i(A) {
      if (!h) {
        $(g);
        for (let w = 0; w < _.length; w += 1)
          $(b[w]);
        h = !0;
      }
    },
    o(A) {
      P(g), b = b.filter(Boolean);
      for (let w = 0; w < b.length; w += 1)
        P(b[w]);
      h = !1;
    },
    d(A) {
      A && O(e), g && g.d(), Pt(y, A), Pt(b, A);
    }
  };
}
function um(t, e, n) {
  let r = Oe(Ln), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const c = Xe();
  async function a() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const _ = y[0];
      if (_.Root == null) {
        f(_);
        return;
      }
    }
    n(2, s = [new wc({ Id: "start", Name: "Start" })]), n(3, l = y);
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
    const _ = s.findIndex((b) => b.Id === y.Id);
    n(2, s = s.slice(0, _ + 1)), u(y);
  }
  function m(y, _) {
    console.log(y, _), y.detail.stopPropagation(), c("tenantSelected", { tenant: _ });
  }
  a();
  const p = () => c("back"), h = (y) => d(y), g = (y, _) => m(_, y), k = (y) => f(y);
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
    m,
    p,
    h,
    g,
    k
  ];
}
let ic = class extends pe {
  constructor(e) {
    super(), he(this, e, um, cm, fe, { allowBack: 0, tw: 1 });
  }
};
function fm(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p;
  return n = new sp({
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
  ), l = new sm({
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
  ), u = new rm({
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
      e = R("div"), q(n.$$.fragment), i = H(), o = R("div"), s = R("div"), q(l.$$.fragment), c = H(), a = R("div"), q(u.$$.fragment), C(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), C(a, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), C(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), C(o, "class", m = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(h, g) {
      D(h, e, g), B(n, e, null), D(h, i, g), D(h, o, g), I(o, s), B(l, s, null), I(s, c), I(s, a), B(u, a, null), p = !0;
    },
    p(h, g) {
      const k = {};
      g & /*selectMultiple*/
      2 && (k.selectMultiple = /*selectMultiple*/
      h[1]), g & /*entityType*/
      1 && (k.entityType = /*entityType*/
      h[0]), g & /*selectedTenant*/
      16 && (k.selectedTenant = /*selectedTenant*/
      h[4]), n.$set(k), (!p || g & /*tw*/
      8 && r !== (r = /*tw*/
      h[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && C(e, "class", r);
      const y = {};
      g & /*entityType*/
      1 && (y.entityType = /*entityType*/
      h[0]), g & /*selectMultiple*/
      2 && (y.selectMultiple = /*selectMultiple*/
      h[1]), l.$set(y);
      const _ = {};
      g & /*selectMultiple*/
      2 && (_.selectMultiple = /*selectMultiple*/
      h[1]), g & /*entityType*/
      1 && (_.entityType = /*entityType*/
      h[0]), g & /*additionalFilter*/
      4 && (_.additionalFilter = /*additionalFilter*/
      h[2]), u.$set(_), (!p || g & /*tw*/
      8 && f !== (f = /*tw*/
      h[3]`flex-1 overflow-hidden mt-3`)) && C(a, "class", f), (!p || g & /*tw*/
      8 && d !== (d = /*tw*/
      h[3]`flex flex-col h-full overflow-hidden`)) && C(s, "class", d), (!p || g & /*tw*/
      8 && m !== (m = /*tw*/
      h[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && C(o, "class", m);
    },
    i(h) {
      p || ($(n.$$.fragment, h), $(l.$$.fragment, h), $(u.$$.fragment, h), p = !0);
    },
    o(h) {
      P(n.$$.fragment, h), P(l.$$.fragment, h), P(u.$$.fragment, h), p = !1;
    },
    d(h) {
      h && O(e), z(n), h && O(i), h && O(o), z(l), z(u);
    }
  };
}
function dm(t) {
  let e, n;
  return e = new ic({
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
      q(e.$$.fragment);
    },
    m(r, i) {
      B(e, r, i), n = !0;
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function hm(t) {
  let e, n, r, i, o;
  const s = [dm, fm], l = [];
  function c(a, u) {
    return (
      /*inTenantSelect*/
      a[5] ? 0 : 1
    );
  }
  return n = c(t), r = l[n] = s[n](t), {
    c() {
      e = R("div"), r.c(), C(e, "class", i = /*tw*/
      t[3]`flex w-full h-full`);
    },
    m(a, u) {
      D(a, e, u), l[n].m(e, null), o = !0;
    },
    p(a, [u]) {
      let f = n;
      n = c(a), n === f ? l[n].p(a, u) : (me(), P(l[f], 1, 1, () => {
        l[f] = null;
      }), be(), r = l[n], r ? r.p(a, u) : (r = l[n] = s[n](a), r.c()), $(r, 1), r.m(e, null)), (!o || u & /*tw*/
      8 && i !== (i = /*tw*/
      a[3]`flex w-full h-full`)) && C(e, "class", i);
    },
    i(a) {
      o || ($(r), o = !0);
    },
    o(a) {
      P(r), o = !1;
    },
    d(a) {
      a && O(e), l[n].d();
    }
  };
}
function pm(t, e, n) {
  let { entityType: r = X.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = Ge } = e, l = Oe(qt), c = Oe(Ln), a, u = !1, f = [], d = Xe(), m = zt.subscribe((E) => {
    E.selectedTenant ? (n(5, u = !1), g(E.selectedTenant)) : n(5, u = !0);
  }), p = Bt.subscribe((E) => {
    E.selectedEntities && !i ? (h(E.selectedEntities), d("selectedEntities", E.selectedEntities[0])) : f = E.selectedEntities;
  });
  function h(E) {
    const M = bn(), V = M.value.lastSelectedEntities, Z = E.filter((Ee) => !V.includes(Ee.Id)).map((Ee) => Ee.Id);
    V.unshift(...Z), V.splice(5), M.update((Ee) => ({
      ...Ee,
      lastSelectedEntities: V
    }));
  }
  async function g(E) {
    try {
      n(4, a = await c.getTenantViewById(E));
    } catch (M) {
      console.error(M), n(5, u = !0);
    }
  }
  async function k(E) {
    console.log("Tenant selected", E);
    const M = await l.getEntityById(X.Group, E.Root);
    zt.update((V) => ({ ...V, selectedTenant: E.Id })), bn().update((V) => ({ ...V, selectedGroup: M }));
  }
  function y() {
    n(5, u = !0);
  }
  function _() {
    h(f), d("selectedEntities", f);
  }
  Rt(() => {
    m.unsubscribe(), p.unsubscribe();
  });
  const b = () => n(5, u = !1), v = (E) => k(E.detail.tenant), A = () => y(), w = () => _();
  return t.$$set = (E) => {
    "entityType" in E && n(0, r = E.entityType), "selectMultiple" in E && n(1, i = E.selectMultiple), "additionalFilter" in E && n(2, o = E.additionalFilter), "tw" in E && n(3, s = E.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    8 && Et("tw", s);
  }, [
    r,
    i,
    o,
    s,
    a,
    u,
    k,
    y,
    _,
    b,
    v,
    A,
    w
  ];
}
let oc = class extends pe {
  constructor(e) {
    super(), he(this, e, pm, hm, fe, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function gm(t) {
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
  return r = new oc({ props: a }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = R("div"), n = R("div"), q(r.$$.fragment), C(n, "class", i = /*tw*/
      t[3]`h-full w-full`), C(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      D(u, e, f), I(e, n), B(r, n, null), t[11](e), s = !0, l || (c = [
        le(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        le(e, "click", mm)
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
      s || ($(r.$$.fragment, u), s = !0);
    },
    o(u) {
      P(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && O(e), t[9](null), z(r), t[11](null), l = !1, bt(c);
    }
  };
}
const mm = (t) => t.stopPropagation();
function bm(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = X.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = Ge } = e, c = Oe("PopupService", new Dr(document.body)), a, u, f;
  const d = Xe();
  function m(b, v) {
    b && !f && v ? (f = c.openPopup("entity-select-dialog", v, {
      backdrop: !0,
      closeOnClickOutside: !0,
      positioning: "center",
      inTransitionClassList: "scale-100",
      inTransitionDuration: 125,
      outTransitionClassList: "!scale-50",
      outTransitionDuration: 125
    }), f.afterClosed.then(() => {
      console.log("dialog closed", u), u == null || u.$destroy(), f = null;
    })) : p();
  }
  function p() {
    console.log("closeDialog"), f == null || f.close();
  }
  function h(b) {
    console.log(b), b.key === "Escape" && p();
  }
  function g(b) {
    d("selectedEntities", b.detail);
  }
  function k(b) {
    ge[b ? "unshift" : "push"](() => {
      u = b, n(5, u);
    });
  }
  const y = (b) => g(b);
  function _(b) {
    ge[b ? "unshift" : "push"](() => {
      a = b, n(4, a);
    });
  }
  return t.$$set = (b) => {
    "open" in b && n(8, r = b.open), "entityType" in b && n(0, i = b.entityType), "selectMultiple" in b && n(1, o = b.selectMultiple), "additionalFilter" in b && n(2, s = b.additionalFilter), "tw" in b && n(3, l = b.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*open, dialogElement*/
    272 && m(r, a);
  }, [
    i,
    o,
    s,
    l,
    a,
    u,
    h,
    g,
    r,
    k,
    y,
    _
  ];
}
class _m extends pe {
  constructor(e) {
    super(), he(this, e, bm, gm, fe, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class cl {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new _m({
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
const Cr = window, Ao = Cr.ShadowRoot && (Cr.ShadyCSS === void 0 || Cr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xo = Symbol(), ul = /* @__PURE__ */ new WeakMap();
let sc = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== xo)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (Ao && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = ul.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ul.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ym = (t) => new sc(typeof t == "string" ? t : t + "", void 0, xo), Kr = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new sc(n, t, xo);
}, vm = (t, e) => {
  Ao ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = Cr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, fl = Ao ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return ym(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var gi;
const Fr = window, dl = Fr.trustedTypes, wm = dl ? dl.emptyScript : "", hl = Fr.reactiveElementPolyfillSupport, Ji = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? wm : null;
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
} }, lc = (t, e) => e !== t && (e == e || t == t), mi = { attribute: !0, type: String, converter: Ji, reflect: !1, hasChanged: lc };
let nn = class extends HTMLElement {
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
  static createProperty(e, n = mi) {
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
    return this.elementProperties.get(e) || mi;
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
        n.unshift(fl(i));
    } else
      e !== void 0 && n.push(fl(e));
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
    return vm(n, this.constructor.elementStyles), n;
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
  _$EO(e, n, r = mi) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : Ji).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : Ji;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || lc)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
nn.finalized = !0, nn.elementProperties = /* @__PURE__ */ new Map(), nn.elementStyles = [], nn.shadowRootOptions = { mode: "open" }, hl == null || hl({ ReactiveElement: nn }), ((gi = Fr.reactiveElementVersions) !== null && gi !== void 0 ? gi : Fr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var bi;
const Hr = window, _n = Hr.trustedTypes, pl = _n ? _n.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, kt = `lit$${(Math.random() + "").slice(9)}$`, ac = "?" + kt, Sm = `<${ac}>`, yn = document, qn = (t = "") => yn.createComment(t), Gn = (t) => t === null || typeof t != "object" && typeof t != "function", cc = Array.isArray, Em = (t) => cc(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", On = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, gl = /-->/g, ml = />/g, Nt = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), bl = /'/g, _l = /"/g, uc = /^(?:script|style|textarea|title)$/i, vn = Symbol.for("lit-noChange"), ye = Symbol.for("lit-nothing"), yl = /* @__PURE__ */ new WeakMap(), Cm = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new nr(e.insertBefore(qn(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, un = yn.createTreeWalker(yn, 129, null, !1), km = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = On;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let u, f, d = -1, m = 0;
    for (; m < a.length && (s.lastIndex = m, f = s.exec(a), f !== null); )
      m = s.lastIndex, s === On ? f[1] === "!--" ? s = gl : f[1] !== void 0 ? s = ml : f[2] !== void 0 ? (uc.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = Nt) : f[3] !== void 0 && (s = Nt) : s === Nt ? f[0] === ">" ? (s = i ?? On, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? Nt : f[3] === '"' ? _l : bl) : s === _l || s === bl ? s = Nt : s === gl || s === ml ? s = On : (s = Nt, i = void 0);
    const p = s === Nt && t[c + 1].startsWith("/>") ? " " : "";
    o += s === On ? a + Sm : d >= 0 ? (r.push(u), a.slice(0, d) + "$lit$" + a.slice(d) + kt + p) : a + kt + (d === -2 ? (r.push(void 0), c) : p);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [pl !== void 0 ? pl.createHTML(l) : l, r];
};
class Jn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, c = this.parts, [a, u] = km(e, n);
    if (this.el = Jn.createElement(a, r), un.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = un.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(kt)) {
              const m = u[s++];
              if (f.push(d), m !== void 0) {
                const p = i.getAttribute(m.toLowerCase() + "$lit$").split(kt), h = /([.?@])?(.*)/.exec(m);
                c.push({ type: 1, index: o, name: h[2], strings: p, ctor: h[1] === "." ? Am : h[1] === "?" ? $m : h[1] === "@" ? Im : Xr });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (uc.test(i.tagName)) {
          const f = i.textContent.split(kt), d = f.length - 1;
          if (d > 0) {
            i.textContent = _n ? _n.emptyScript : "";
            for (let m = 0; m < d; m++)
              i.append(f[m], qn()), un.nextNode(), c.push({ type: 2, index: ++o });
            i.append(f[d], qn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === ac)
          c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(kt, f + 1)) !== -1; )
            c.push({ type: 7, index: o }), f += kt.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = yn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function wn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === vn)
    return e;
  let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const a = Gn(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== a && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), a === void 0 ? c = void 0 : (c = new a(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = wn(t, c._$AS(t, e.values), c, r)), e;
}
class Tm {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : yn).importNode(r, !0);
    un.currentNode = o;
    let s = un.nextNode(), l = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (l === a.index) {
        let u;
        a.type === 2 ? u = new nr(s, s.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (u = new Pm(s, this, e)), this.v.push(u), a = i[++c];
      }
      l !== (a == null ? void 0 : a.index) && (s = un.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class nr {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = ye, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = wn(this, e, n), Gn(e) ? e === ye || e == null || e === "" ? (this._$AH !== ye && this._$AR(), this._$AH = ye) : e !== this._$AH && e !== vn && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : Em(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== ye && Gn(this._$AH) ? this._$AA.nextSibling.data = e : this.k(yn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Jn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new Tm(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = yl.get(e.strings);
    return n === void 0 && yl.set(e.strings, n = new Jn(e)), n;
  }
  O(e) {
    cc(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new nr(this.S(qn()), this.S(qn()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
class Xr {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = ye, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = ye;
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
      e = wn(this, e, n, 0), s = !Gn(e) || e !== this._$AH && e !== vn, s && (this._$AH = e);
    else {
      const l = e;
      let c, a;
      for (e = o[0], c = 0; c < o.length - 1; c++)
        a = wn(this, l[r + c], n, c), a === vn && (a = this._$AH[c]), s || (s = !Gn(a) || a !== this._$AH[c]), a === ye ? e = ye : e !== ye && (e += (a ?? "") + o[c + 1]), this._$AH[c] = a;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === ye ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Am extends Xr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === ye ? void 0 : e;
  }
}
const xm = _n ? _n.emptyScript : "";
class $m extends Xr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== ye ? this.element.setAttribute(this.name, xm) : this.element.removeAttribute(this.name);
  }
}
class Im extends Xr {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = wn(this, e, n, 0)) !== null && r !== void 0 ? r : ye) === vn)
      return;
    const i = this._$AH, o = e === ye && i !== ye || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== ye && (i === ye || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Pm {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    wn(this, e);
  }
}
const vl = Hr.litHtmlPolyfillSupport;
vl == null || vl(Jn, nr), ((bi = Hr.litHtmlVersions) !== null && bi !== void 0 ? bi : Hr.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _i, yi;
class xt extends nn {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Cm(n, this.renderRoot, this.renderOptions);
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
    return vn;
  }
}
xt.finalized = !0, xt._$litElement$ = !0, (_i = globalThis.litElementHydrateSupport) === null || _i === void 0 || _i.call(globalThis, { LitElement: xt });
const wl = globalThis.litElementPolyfillSupport;
wl == null || wl({ LitElement: xt });
((yi = globalThis.litElementVersions) !== null && yi !== void 0 ? yi : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rm = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Le(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : Rm(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vi;
((vi = window.HTMLSlotElement) === null || vi === void 0 ? void 0 : vi.prototype.assignedElements) != null;
const Om = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class lt {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? Om);
  }
  createTwindContext(e) {
    if (e)
      return _g({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: Ge, styleSheet: null };
    {
      const n = qa({ target: new CSSStyleSheet() }), { tw: r } = ec({
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
var Dm = Object.defineProperty, Mm = Object.getOwnPropertyDescriptor, fc = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Mm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Dm(e, n, i), i;
};
const { tw: Nm, styleSheet: Um } = Oe(lt, new lt()).createTwindContext(), Fm = Kr`
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
class Yr extends xt {
  constructor() {
    super();
    rt(this, "_element");
    St(Dr, new Dr(document.body));
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
    this._element = new oc({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Nm
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
    return Object.values(X).includes(n);
  }
}
rt(Yr, "styles", [Um.target, Fm]);
fc([
  Le({ type: String, attribute: "entitytype" })
], Yr.prototype, "entityType", 2);
fc([
  Le({ type: Boolean, attribute: "multiple" })
], Yr.prototype, "multiple", 2);
var Hm = Object.defineProperty, Lm = Object.getOwnPropertyDescriptor, Ot = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Lm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Hm(e, n, i), i;
};
const { tw: jm, styleSheet: Bm } = Oe(lt, new lt()).createTwindContext(), zm = Kr`
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
class ct extends xt {
  constructor() {
    super();
    rt(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return this.multiple && this._select || ((n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new rc({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: jm
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
rt(ct, "styles", [Bm.target, zm]);
Ot([
  Le({ attribute: "value", type: String })
], ct.prototype, "value", 2);
Ot([
  Le({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), !0;
  } })
], ct.prototype, "arrayvalue", 2);
Ot([
  Le({ attribute: "multiple", type: Boolean })
], ct.prototype, "multiple", 2);
Ot([
  Le({ attribute: "options", type: Array })
], ct.prototype, "options", 2);
Ot([
  Le({ attribute: "placeholder", type: String })
], ct.prototype, "placeholder", 2);
Ot([
  Le({ attribute: "container$class", type: String })
], ct.prototype, "container$class", 2);
Ot([
  Le({ attribute: "textfield$class", type: String })
], ct.prototype, "textfield$class", 2);
Ot([
  Le({ attribute: "suffix$class", type: String })
], ct.prototype, "suffix$class", 2);
const { tw: Vm, styleSheet: z0 } = Oe(lt, new lt()).createTwindContext();
Kr`
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
class Wm extends xt {
  constructor() {
    super();
    rt(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new ic({
      target: n,
      props: {
        tw: Vm
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function qm(t) {
  Jt(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
}
function Sl(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[5].default
  ), l = ze(
    s,
    t,
    /*$$scope*/
    t[4],
    null
  ), c = l || Gm(t);
  return {
    c() {
      e = R("div"), n = R("span"), c && c.c(), C(n, "class", r = ce(
        /*tw*/
        t[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0"), C(e, "class", i = ce(
        /*tw*/
        t[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0");
    },
    m(a, u) {
      D(a, e, u), I(e, n), c && c.m(n, null), o = !0;
    },
    p(a, u) {
      l ? l.p && (!o || u & /*$$scope*/
      16) && We(
        l,
        s,
        a,
        /*$$scope*/
        a[4],
        o ? Ve(
          s,
          /*$$scope*/
          a[4],
          u,
          null
        ) : qe(
          /*$$scope*/
          a[4]
        ),
        null
      ) : c && c.p && (!o || u & /*icon*/
      1) && c.p(a, o ? u : -1), (!o || u & /*tw*/
      4 && r !== (r = ce(
        /*tw*/
        a[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0")) && C(n, "class", r), (!o || u & /*tw*/
      4 && i !== (i = ce(
        /*tw*/
        a[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0")) && C(e, "class", i);
    },
    i(a) {
      o || ($(c, a), o = !0);
    },
    o(a) {
      P(c, a), o = !1;
    },
    d(a) {
      a && O(e), c && c.d(a);
    }
  };
}
function Gm(t) {
  let e;
  return {
    c() {
      e = j(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      D(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && we(
        e,
        /*icon*/
        n[0]
      );
    },
    d(n) {
      n && O(e);
    }
  };
}
function Jm(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*icon*/
    t[0] && Sl(t)
  );
  return {
    c() {
      e = R("div"), u && u.c(), n = H(), r = R("div"), i = j(
        /*label*/
        t[1]
      ), C(r, "class", o = ce(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-8br8x0"), C(e, "class", s = ce(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0");
    },
    m(f, d) {
      D(f, e, d), u && u.m(e, null), I(e, n), I(e, r), I(r, i), l = !0, c || (a = le(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), c = !0);
    },
    p(f, [d]) {
      /*icon*/
      f[0] ? u ? (u.p(f, d), d & /*icon*/
      1 && $(u, 1)) : (u = Sl(f), u.c(), $(u, 1), u.m(e, n)) : u && (me(), P(u, 1, 1, () => {
        u = null;
      }), be()), (!l || d & /*label*/
      2) && we(
        i,
        /*label*/
        f[1]
      ), (!l || d & /*tw*/
      4 && o !== (o = ce(
        /*tw*/
        f[2]`flex-grow`
      ) + " svelte-8br8x0")) && C(r, "class", o), (!l || d & /*tw*/
      4 && s !== (s = ce(
        /*tw*/
        f[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0")) && C(e, "class", s);
    },
    i(f) {
      l || ($(u), l = !0);
    },
    o(f) {
      P(u), l = !1;
    },
    d(f) {
      f && O(e), u && u.d(), c = !1, a();
    }
  };
}
function Km(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: l } = e, c = Xe();
  const a = (u) => c("click", u);
  return t.$$set = (u) => {
    "icon" in u && n(0, o = u.icon), "label" in u && n(1, s = u.label), "tw" in u && n(2, l = u.tw), "$$scope" in u && n(4, i = u.$$scope);
  }, [o, s, l, c, i, r, a];
}
class Xm extends pe {
  constructor(e) {
    super(), he(this, e, Km, Jm, fe, { icon: 0, label: 1, tw: 2 }, qm);
  }
}
function El(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function Cl(t) {
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
  return e = new Xm({
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
      q(e.$$.fragment);
    },
    m(i, o) {
      B(e, i, o), n = !0;
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
      n || ($(e.$$.fragment, i), n = !0);
    },
    o(i) {
      P(e.$$.fragment, i), n = !1;
    },
    d(i) {
      z(e, i);
    }
  };
}
function Ym(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Cl(El(t, i, l));
  const s = (l) => P(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = R("div");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      C(e, "class", n = /*tw*/
      t[4]`bg-white rounded shadow-lg ${/*container$class*/
      t[3]}`);
    },
    m(l, c) {
      D(l, e, c);
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
          const u = El(l, i, a);
          o[a] ? (o[a].p(u, c), $(o[a], 1)) : (o[a] = Cl(u), o[a].c(), $(o[a], 1), o[a].m(e, null));
        }
        for (me(), a = i.length; a < o.length; a += 1)
          s(a);
        be();
      }
      (!r || c & /*tw, container$class*/
      24 && n !== (n = /*tw*/
      l[4]`bg-white rounded shadow-lg ${/*container$class*/
      l[3]}`)) && C(e, "class", n);
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < i.length; c += 1)
          $(o[c]);
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
      l && O(e), Pt(o, l);
    }
  };
}
function Qm(t) {
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
    $$slots: { default: [Ym] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (a.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (a.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (a.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new tc({ props: a }), ge.push(() => an(e, "anchorElement", s)), t[14](e), ge.push(() => an(e, "preferedHorizontalAlignment", l)), ge.push(() => an(e, "preferedVerticalAlignment", c)), {
      c() {
        q(e.$$.fragment);
      },
      m(u, f) {
        B(e, u, f), o = !0;
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
        u[7], ln(() => n = !1)), !r && f & /*preferedHorizontalAlignment*/
        2 && (r = !0, d.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
        u[1], ln(() => r = !1)), !i && f & /*preferedVerticalAlignment*/
        1 && (i = !0, d.preferedVerticalAlignment = /*preferedVerticalAlignment*/
        u[0], ln(() => i = !1)), e.$set(d);
      },
      i(u) {
        o || ($(e.$$.fragment, u), o = !0);
      },
      o(u) {
        P(e.$$.fragment, u), o = !1;
      },
      d(u) {
        t[14](null), z(e, u);
      }
    }
  );
}
function Zm(t, e, n) {
  let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 10 } } = e, { container$class: l } = e, { tw: c = Ge } = e, { closeOnClick: a = !0 } = e, { items: u = [] } = e, f, d;
  function m() {
    console.log("openMenu", f, u), d.openPopup();
  }
  function p() {
    d.closePopup();
  }
  const h = (b, v) => b.action(v);
  function g(b) {
    f = b, n(7, f), n(9, r);
  }
  function k(b) {
    ge[b ? "unshift" : "push"](() => {
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
    "anchorSelector" in b && n(9, r = b.anchorSelector), "preferedVerticalAlignment" in b && n(0, i = b.preferedVerticalAlignment), "preferedHorizontalAlignment" in b && n(1, o = b.preferedHorizontalAlignment), "positionOffset" in b && n(2, s = b.positionOffset), "container$class" in b && n(3, l = b.container$class), "tw" in b && n(4, c = b.tw), "closeOnClick" in b && n(5, a = b.closeOnClick), "items" in b && n(6, u = b.items);
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
    m,
    p,
    h,
    g,
    k,
    y,
    _
  ];
}
class e0 extends pe {
  constructor(e) {
    super(), he(this, e, Zm, Qm, fe, {
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
var t0 = Object.defineProperty, n0 = Object.getOwnPropertyDescriptor, Qr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? n0(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && t0(e, n, i), i;
};
const { tw: V0, styleSheet: r0 } = Oe(lt, new lt()).createTwindContext(), i0 = Kr`
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
class Tn extends xt {
  constructor() {
    super();
    rt(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new e0({
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
rt(Tn, "styles", [r0.target, i0]);
Qr([
  Le({ attribute: "items", type: Array })
], Tn.prototype, "items", 2);
Qr([
  Le({ attribute: "closeonclick", type: Boolean })
], Tn.prototype, "closeOnClick", 2);
Qr([
  Le({ attribute: "container$class", type: String })
], Tn.prototype, "container$class", 2);
Qr([
  Le({ attribute: "anchorselector", type: String })
], Tn.prototype, "anchorSelector", 2);
const o0 = Yr, s0 = Wm;
function W0() {
  pr("audako-entity-select", o0), pr("audako-tenant-select", s0), pr("audako-select", ct), pr("audako-menu", Tn), Oe(lt, new lt()).createTwindContext(!0);
}
function q0(t, e) {
  const n = new qt(t, e);
  St(Di, new Di(t, e)), St(qt, n), St(Ln, new Ln(t, e)), St(jn, new jn(n)), St(Oi, new Oi(t, e)), St(cl, new cl()), St(_s, new _s(t, e));
}
function pr(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  Cn as BaseHttpService,
  Si as BitSelectConversionTypes,
  b0 as ChangeRateMonitoringSettings,
  Fo as CompressionInterval,
  Ke as ConditionSettings,
  Je as ConfigurationEntity,
  f0 as ConnectionFailureConditionSettings,
  u0 as CounterConditionSettings,
  N0 as CounterOffset,
  mc as Dashboard,
  Cc as DashboardTab,
  vc as DataConnection,
  d0 as DataConnectionFailureConditionSettings,
  Mo as DataConnectionOpcUaSecurityAuthentication,
  Do as DataConnectionOpcUaSecurityMode,
  Oo as DataConnectionOpcUaSecurityPolicy,
  C0 as DataConnectionOpcUaSettings,
  No as DataConnectionOpcUaStringEncoding,
  E0 as DataConnectionS7Settings,
  kl as DataConnectionSettings,
  Ro as DataConnectionType,
  yc as DataSource,
  Oi as DataSourceHttpService,
  Po as DataSourceType,
  w0 as DifferenceMonitoringSettings,
  pc as EntityHttpEndpoints,
  qt as EntityHttpService,
  a0 as EntityIcons,
  jn as EntityNameService,
  o0 as EntitySelect,
  cl as EntitySelectDialogService,
  X as EntityType,
  Ic as EntityTypeClassMapping,
  $0 as EntityUtils,
  kc as EventCategory,
  _c as EventCondition,
  wi as EventConditionSettingsType,
  bc as EventDefinition,
  F as Field,
  Tc as Formula,
  gc as Group,
  M0 as HistoricalValue,
  U0 as HistoricalValueObject,
  _s as HistoricalValueService,
  ms as LiveHubEvent,
  Mn as LiveHubMethod,
  Di as LiveValueService,
  p0 as MaximumMonitoringSettings,
  h0 as MinimumMonitoringSettings,
  S0 as ObjectSettings,
  jo as ObjectUtils,
  g0 as PeriodMaximumMonitoringSettings,
  m0 as PeriodMaximumMonitoringSettingsPeriod,
  _0 as PlausibilityMonitoringSettings,
  y0 as PositionMonitoringSettings,
  xc as ProcessImage,
  v0 as RecordingFailureMonitoringSettings,
  Ci as RecordingSpecialProcessingType,
  Un as RecordingType,
  Sc as Signal,
  Ei as SignalAnalogSettings,
  Al as SignalCompressionSettings,
  ne as SignalCompressionType,
  c0 as SignalConditionSettings,
  Io as SignalConditionSettingsOperator,
  Ec as SignalCounterSettings,
  Uo as SignalDigitalSettings,
  Tl as SignalRecordingSettings,
  Ki as SignalSettings,
  Qe as SignalType,
  T0 as SignalTypeSettingsMap,
  bs as SubscriptionPrefix,
  Ln as TenantHttpService,
  s0 as TenantSelect,
  wc as TenantView,
  k0 as UserProfile,
  O0 as UserProfileHttpService,
  At as getAsyncValueAsPromise,
  x0 as getDefaultCompressionSettingsBySignalType,
  A0 as getDefaultRecordingSettingsBySignalType,
  P0 as isNullOrEmpty,
  xl as isNullOrUndefined,
  R0 as isNullOrWhitespace,
  q0 as registerCoreServices,
  W0 as registerCustomElements,
  Oe as resolveService,
  F0 as setGlobalDependencyContainer,
  I0 as tryCatch,
  St as tryRegisterService
};
