var Cc = Object.defineProperty;
var Ec = (t, e, n) => e in t ? Cc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var it = (t, e, n) => (Ec(t, typeof e != "symbol" ? e + "" : e, n), n);
var J;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition", t.ReportTemplate = "ReportTemplate", t.Report = "Report";
})(J || (J = {}));
const C0 = {
  [J.Group]: "mat folder",
  [J.Dashboard]: "adk adk-dashboard",
  [J.Signal]: "mat code",
  [J.Formula]: "mat timeline",
  [J.DataConnection]: "mat data_usage",
  [J.DataSource]: "mat storage"
}, kc = {
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
  BatchDefinition: "/scada/batchdefinition",
  ReportTemplate: "/scada/ReportTemplate",
  Report: "/scada/Report"
};
class v {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class ze {
  constructor(e) {
    this.Name = new v(), this.Description = new v(), this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.IsInstanceOf = null, this.IsTemplate = !1, Object.assign(this, e);
  }
}
class Tc extends ze {
  constructor() {
    super();
  }
}
class Ac extends ze {
}
class xc extends ze {
}
class Ic extends ze {
}
var Ei;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.MinimumMonitoringSettings = "MinimumMonitoringSettings", t.MaximumMonitoringSettings = "MaximumMonitoringSettings", t.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", t.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", t.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", t.PositionMonitoringSettings = "PositionMonitoringSettings", t.CounterConditionSettings = "CounterConditionSettings", t.TimebasedConditionSettings = "TimebasedConditionSettings", t.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", t.DataConnectionFailure = "DataConnectionFailure", t.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", t.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
})(Ei || (Ei = {}));
var Vo;
(function(t) {
  t.Equal = "Equal", t.GreaterThan = "GreaterThan", t.GreaterThanOrEqual = "GreaterThanOrEqual", t.LessThan = "LessThan", t.LessThanOrEqual = "LessThanOrEqual", t.NotEqual = "NotEqual";
})(Vo || (Vo = {}));
class Xe {
}
class E0 extends Xe {
}
class k0 extends Xe {
}
class T0 extends Xe {
}
class A0 extends Xe {
}
class x0 extends Xe {
}
class I0 extends Xe {
}
class $0 extends Xe {
  constructor() {
    super(), this.Periods = [];
  }
}
class P0 {
}
class R0 extends Xe {
}
class O0 extends Xe {
}
class D0 extends Xe {
}
class M0 extends Xe {
  constructor() {
    super(), this._t = Ei.RecordingFailureMonitoringSettings, this.SignalId = new v(null), this.MaxOutageTime = new v(6e4);
  }
}
class N0 extends Xe {
}
class U0 {
}
var ki;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter", t.SmartDevice = "SmartDevice";
})(ki || (ki = {}));
class $c extends ze {
  constructor() {
    super(), this.Address = new v(null), this.Password = new v(null), this.Type = new v(ki.EdgeGateway), this.PermaLiveModeSettings = new Pc();
  }
}
class Pc {
  constructor() {
    this.Enabled = new v(!1), this.BlockingTime = new v(10);
  }
}
var qo;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp", t.Mqtt = "Mqtt", t.OneWire = "OneWire", t.MeterBus = "MeterBus";
})(qo || (qo = {}));
var Ti;
(function(t) {
  t.None = "None", t.JUMO = "JUMO";
})(Ti || (Ti = {}));
class Rc extends ze {
  constructor() {
    super(), this.DataSourceId = new v(null), this.Type = new v(null), this.Settings = null, this.SpecialDeviceProfile = new v(Ti.None), this.PollingInterval = new v(null);
  }
}
class ue {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class F0 extends ue {
  constructor() {
    super("DataConnectionS7Settings"), this.Host = new v(null), this.Port = new v(502), this.Rack = new v(0), this.Slot = new v(2), this.Timeout = new v(5e3), this.LocalTSAP = new v(null), this.RemoteTSAP = new v(null);
  }
}
var Ai;
(function(t) {
  t.None = "None", t.Basic128Rsa15 = "Basic128Rsa15", t.Basic256 = "Basic256", t.Basic256Sha256 = "Basic256Sha256";
})(Ai || (Ai = {}));
var xi;
(function(t) {
  t.None = "None", t.Sign = "Sign", t.SignAndEncrypt = "SignAndEncrypt";
})(xi || (xi = {}));
var Ii;
(function(t) {
  t.Anonymous = "Anonymous", t.Credentials = "Credentials", t.Certificate = "Certificate";
})(Ii || (Ii = {}));
var $i;
(function(t) {
  t.ASCII = "ASCII", t.UTF7 = "UTF7", t.UTF8 = "UTF8", t.Unicode = "Unicode", t.UTF32 = "UTF32";
})($i || ($i = {}));
var Pi;
(function(t) {
  t.Connection = "Connection", t.EdgeGateway = "EdgeGateway";
})(Pi || (Pi = {}));
class H0 extends ue {
  constructor() {
    super("DataConnectionOpcUaSettings"), this.Url = new v(null), this.SecurityPolicy = new v(Ai.None), this.SecurityMode = new v(xi.None), this.SecurityAuthentication = new v(Ii.Anonymous), this.Username = new v(null), this.Password = new v(null), this.Certificate = new v(null), this.PrivateKey = new v(null), this.PublishingInterval = new v(1e3), this.SamplingInterval = new v(1e3), this.QueueSize = new v(-1), this.Timeout = new v(5e3), this.StringEncoding = new v($i.UTF8), this.TimestampSource = new v(Pi.Connection);
  }
}
class L0 extends ue {
  constructor() {
    super("DataConnectionModbusSettings"), this.Host = new v(null), this.Port = new v(502);
  }
}
class B0 extends ue {
  constructor() {
    super("DataConnectionIEC104Settings"), this.Host = new v(null), this.Port = new v(2404), this.OriginatorAddress = new v(0), this.TimeSyncInterval = new v(720), this.GeneralInterrogationInterval = new v(60), this.CounterInterrogationInterval = new v(60), this.CommonAddressFieldLength = new v(2), this.CotFieldLength = new v(2), this.IoaFieldLength = new v(3), this.MaxIdleTime = new v(2e4), this.MaxTimeNoAckReceived = new v(15e3), this.MaxTimeNoAckSent = new v(1e4), this.MaxUnconfirmedIPdusReceived = new v(8), this.MaxNumOfOutstandingIPdus = new v(12), this.MessageFragmentTimeout = new v(5e3);
  }
}
class j0 extends ue {
  constructor() {
    super("DataConnectionBacnetSettings"), this.Port = new v(47808), this.Interface = new v(null), this.BroadcastAddress = new v(null), this.ApduTimeout = new v(6e3);
  }
}
class z0 extends ue {
  constructor() {
    super("DataConnectionSimulationSettings"), this.ScriptPath = new v(null), this.ScriptCycle = new v(500);
  }
}
class W0 extends ue {
  constructor() {
    super("DataConnectionUniversalSettings"), this.DriverPath = new v(null);
  }
}
class V0 extends ue {
  constructor() {
    super("DataConnectionKnxSettings"), this.Host = new v(null), this.Port = new v(null), this.Interface = new v(null), this.PhysicalAddress = new v("15.15.15"), this.ForceTunneling = new v(!1), this.MinimumDelay = new v(null), this.SuppressAckLDataReq = new v(!1);
  }
}
class q0 extends ue {
  constructor() {
    super("DataConnectionIot2000ModuleSettings"), this.MLFB = new v(null);
  }
}
class G0 extends ue {
  constructor() {
    super("DataConnectionEhWebserverSettings"), this.Host = new v(null), this.AccessCode = new v("0000");
  }
}
class J0 extends ue {
  constructor() {
    super("DataConnectionSnmpSettings"), this.Host = new v(null), this.Port = new v(161), this.Timeout = new v(5e3), this.Community = new v(null);
  }
}
class K0 extends ue {
  constructor() {
    super("DataConnectionModemInfoSettings");
  }
}
class X0 extends ue {
  constructor() {
    super("DataConnectionMqttSettings"), this.Url = new v(null), this.Username = new v(null), this.Password = new v(null);
  }
}
class Y0 extends ue {
  constructor() {
    super("DataConnectionOneWireSettings"), this.Host = new v("localhost"), this.Port = new v(4304);
  }
}
var Ri;
(function(t) {
  t.serial = "serial", t.tcp = "tcp";
})(Ri || (Ri = {}));
class Q0 extends ue {
  constructor() {
    super("DataConnectionMeterBusSettings"), this.Mode = new v(Ri.tcp), this.HostOrSerialPort = new v(null), this.Port = new v(0), this.BaudRate = new v(2400), this.Timeout = new v(5e3);
  }
}
class Z0 extends ue {
  constructor() {
    super("DataConnectionMtmAdapterSettings"), this.TimeoutTime = new v(120), this.KeepAliveTime = new v(null), this.Username = new v(null), this.Password = new v(null);
  }
}
class eb extends ue {
  constructor() {
    super("DataConnectionYDOCDataLoggerSettings"), this.DeviceId = new v(null), this.Username = new v(null), this.Password = new v(null);
  }
}
class tb extends ue {
  constructor() {
    super("DataConnectionOTTDataLoggerSettings"), this.Station = new v(null), this.Password = new v(null);
  }
}
class nb extends ue {
  constructor() {
    super("DataConnectionTeltonikaGPSSettings"), this.Address = new v(null);
  }
}
class rb extends ue {
  constructor() {
    super("DataConnectionLoRaWANSettings"), this.DeviceType = new v(null), this.DeviceEUI = new v(null), this.DeviceConfiguration = new v(null);
  }
}
class ib extends ue {
  constructor() {
    super("DataConnectionCsvImporterSettings"), this.Address = new v(null);
  }
}
class ob extends ue {
  constructor() {
    super("DataConnectionFtpParserSettings"), this.ParserType = new v(null), this.ConnectionType = new v(null), this.Address = new v(null), this.Port = new v(21), this.Username = new v(null), this.Password = new v(null), this.ValidateCertificate = new v(!1), this.FileDirectory = new v(null), this.EncryptionMode = new v(null), this.RequestInterval = new v(0), this.DeleteReadFiles = new v(!1);
  }
}
class Oc {
  constructor(e) {
    Object.assign(this, e);
  }
}
class sb {
}
var Ze;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniversalInput", t.UniversalInOut = "UniversalInOut";
})(Ze || (Ze = {}));
class Dc extends ze {
  constructor() {
    super(), this.Alias = new v(), this.Type = new v(Ze.AnalogInput), this.DataConnectionId = new v(), this.Address = new v(), this.Settings = new Di(), this.RecordingSettings = new Ul(), this.CompressionSettings = new Fl();
  }
}
var Oi;
(function(t) {
  t.None = "None", t.SByte = "SByte", t.Short = "Short", t.Int = "Int";
})(Oi || (Oi = {}));
class uo {
  constructor(e) {
    this._t = e;
  }
}
class Go extends uo {
  constructor() {
    super("SignalDigitalSettings"), this.DigitalTrueColor = new v(), this.DigitalTrueCaption = new v(), this.DigitalFalseColor = new v(), this.DigitalFalseCaption = new v(), this.Invert = new v(!1), this.BitSelect = new v(), this.BitSelectConversion = new v(Oi.None);
  }
}
class Di extends uo {
  constructor() {
    super("SignalAnalogSettings"), this.MinValue = new v(0), this.MaxValue = new v(100), this.DefaultValue = new v(null), this.DecimalPlaces = new v(0), this.Unit = new v(), this.Factor = new v(1), this.Offset = new v(0);
  }
}
class Mc extends uo {
  constructor() {
    super("SignalCounterSettings"), this.MaxValue = new v(100), this.OffsetAutomatic = new v(!0), this.OffsetDetection = new v(!0), this.DecimalPlaces = new v(0), this.Unit = new v(), this.Factor = new v(1), this.Offset = new v(0);
  }
}
const lb = {
  AnalogInput: Di,
  AnalogInOut: Di,
  DigitalInput: Go,
  DigitalInOut: Go,
  Counter: Mc,
  UniversalInput: null,
  UniversalInOut: null
};
var Mi;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(Mi || (Mi = {}));
var Hn;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})(Hn || (Hn = {}));
class Ul {
  constructor() {
    this.SpecialProcessingType = new v(Mi.None), this.Type = new v(Hn.MeanValue), this.Interval = new v(300);
  }
}
function ab(t) {
  const e = new Ul();
  return t === Ze.AnalogInput || t === Ze.AnalogInOut ? e.Type.Value = Hn.MeanValue : (t === Ze.Counter || t === Ze.DigitalInput || t === Ze.DigitalInOut) && (e.Type.Value = Hn.LastValue), e;
}
var ne;
(function(t) {
  t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
})(ne || (ne = {}));
class Fl {
  constructor() {
    this.Timezones = new v(), this.Timezones = new v([]), this.SubIntervalCompressionType = new v(ne.None), this.HourIntervalCompressionType = new v(ne.None), this.TwoHourIntervalCompressionType = new v(ne.None), this.DayIntervalCompressionType = new v(ne.None), this.WeekIntervalCompressionType = new v(ne.None), this.MonthIntervalCompressionType = new v(ne.None), this.QuarterIntervalCompressionType = new v(ne.None), this.YearIntervalCompressionType = new v(ne.None);
  }
}
function cb(t) {
  const e = new Fl();
  return t === Ze.AnalogInput || t === Ze.AnalogInOut ? (e.SubIntervalCompressionType.Value = ne.ArithmeticMean, e.HourIntervalCompressionType.Value = ne.ArithmeticMean, e.TwoHourIntervalCompressionType.Value = ne.ArithmeticMean, e.DayIntervalCompressionType.Value = ne.ArithmeticMean, e.WeekIntervalCompressionType.Value = ne.ArithmeticMean, e.MonthIntervalCompressionType.Value = ne.ArithmeticMean, e.QuarterIntervalCompressionType.Value = ne.ArithmeticMean, e.YearIntervalCompressionType.Value = ne.ArithmeticMean) : t === Ze.Counter && (e.SubIntervalCompressionType.Value = ne.Sum, e.HourIntervalCompressionType.Value = ne.Sum, e.TwoHourIntervalCompressionType.Value = ne.Sum, e.DayIntervalCompressionType.Value = ne.Sum, e.WeekIntervalCompressionType.Value = ne.Difference, e.MonthIntervalCompressionType.Value = ne.Difference, e.QuarterIntervalCompressionType.Value = ne.Difference, e.YearIntervalCompressionType.Value = ne.Difference), e;
}
var Jo;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(Jo || (Jo = {}));
class Nc extends ze {
}
class Uc extends ze {
}
class Fc extends ze {
  constructor() {
    super(), this.Variables = [], this.Type = new v(Fi.Numeric), this.SignalId = new v(null), this.CalculateOnlyWithFullVariableSet = new v(!1), this.NumericSettings = new Hc(), this.ProcessIntervalSettings = new ft(), this.SubIntervalSettings = new ft(), this.HourIntervalSettings = new ft(), this.TwoHourIntervalSettings = new ft(), this.DayIntervalSettings = new ft(), this.WeekIntervalSettings = new ft(), this.MonthIntervalSettings = new ft(), this.QuarterIntervalSettings = new ft(), this.YearIntervalSettings = new ft();
  }
}
class Hc {
  constructor() {
    this.DecimalPlaces = new v(0), this.Unit = new v(null);
  }
}
class ub {
  constructor() {
    this.ValueType = new v(Hi.Normal), this.VariableName = new v(null), this.ObjectId = new v(null), this.ObjectType = new v(Ui.Signal), this.TagScope = new v(Li.Global);
  }
}
class ft {
  constructor() {
    this.Formula = new v(null), this.ValueIntervalType = new v(null), this.CompressionType = new v(Ni.ArithmeticMean), this.ProvidePreValues = new v(!1), this.ProvideLastValues = new v(!1);
  }
}
var Ko;
(function(t) {
  t.Standard = "Standard", t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(Ko || (Ko = {}));
var Ni;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(Ni || (Ni = {}));
var Ui;
(function(t) {
  t.Signal = "Signal", t.Formula = "Formula", t.Tag = "Tag";
})(Ui || (Ui = {}));
var Fi;
(function(t) {
  t.Numeric = "Numeric", t.Universal = "Universal";
})(Fi || (Fi = {}));
var Hi;
(function(t) {
  t.Normal = "Normal", t.Minimum = "Minimum", t.Maximum = "Maximum";
})(Hi || (Hi = {}));
var Li;
(function(t) {
  t.Global = "Global", t.Tenant = "Tenant", t.Group = "Group", t.GroupAndSubGroups = "GroupAndSubGroups";
})(Li || (Li = {}));
class Lc extends ze {
}
class Bc extends ze {
}
var Xo;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
})(Xo || (Xo = {}));
var Yo;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})(Yo || (Yo = {}));
var Qo;
(function(t) {
  t.WYSIWYG = "WYSIWYG", t.JsTemplate = "JsTemplate";
})(Qo || (Qo = {}));
var Zo;
(function(t) {
  t.Day = "Day", t.Week = "Week", t.Month = "Month", t.Year = "Year";
})(Zo || (Zo = {}));
class jc extends ze {
}
const zc = {
  [J.Group]: Tc,
  [J.Signal]: Dc,
  [J.Dashboard]: Ac,
  [J.DashboardTab]: Nc,
  [J.DataConnection]: Rc,
  [J.DataSource]: $c,
  [J.EventCategory]: Uc,
  [J.EventCondition]: Ic,
  [J.EventDefinition]: xc,
  [J.Formula]: Fc,
  [J.ProcessImage]: Lc,
  [J.BatchDefinition]: Bc,
  [J.ReportTemplate]: jc
};
class es {
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
class fb {
  static isEntityType(e) {
    return Object.keys(J).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = zc[e];
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
      l === "AdditionalFields" ? (console.log(s, c), !((i = s[c]) === null || i === void 0) && i.Value && (s = es.tryParseJson(s[c].Value), console.log("AdditionalValue", s))) : s = s[c], l = c;
    }
    return r || v.isField(s) ? s == null ? void 0 : s.Value : s;
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
      v.isField(s) ? i.push({
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
      o || v.isField(e[c]) ? e[c] = new v(r) : e[c] = r;
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
      e[i] = new v(r == null ? void 0 : r.toString());
      return;
    } else {
      let o = e[i] ? es.tryParseJson(e[i].Value, {}) : {};
      for (const s of n)
        n.indexOf(s) === n.length - 1 ? o[s] = r : (o[s] = o[s] || {}, o = o[s]);
      e[i] = new v(JSON.stringify(o));
    }
  }
}
var Wc = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
function db(t) {
  return Wc(this, void 0, void 0, function* () {
    try {
      return [null, yield Promise.resolve(t)];
    } catch (e) {
      return [e, null];
    }
  });
}
function Hl(t) {
  return t == null;
}
function hb(t) {
  return Hl(t) || t.length === 0;
}
function pb(t) {
  return Hl(t) || t.trim().length === 0;
}
var Bi = function(t, e) {
  return Bi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Bi(t, e);
};
function ct(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Bi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Vc(t, e, n, r) {
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
function Ll(t, e) {
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
function pn(t) {
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
function Pt(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function sn(t) {
  return this instanceof sn ? (this.v = t, this) : new sn(t);
}
function qc(t, e, n) {
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
    d.value instanceof sn ? Promise.resolve(d.value.v).then(a, u) : f(o[0][2], d);
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
function Gc(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof pn == "function" ? pn(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function fo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ri = fo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Tr(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Xn = function() {
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
            for (var l = pn(s), c = l.next(); !c.done; c = l.next()) {
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
          o = h instanceof ri ? h.errors : [h];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = pn(f), m = d.next(); !m.done; m = d.next()) {
            var p = m.value;
            try {
              ts(p);
            } catch (h) {
              o = o ?? [], h instanceof ri ? o = Pt(Pt([], $t(o)), $t(h.errors)) : o.push(h);
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
        throw new ri(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        ts(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Tr(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Tr(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Bl = Xn.EMPTY;
function jl(t) {
  return t instanceof Xn || t && "closed" in t && ae(t.remove) && ae(t.add) && ae(t.unsubscribe);
}
function ts(t) {
  ae(t) ? t() : t.unsubscribe();
}
var zl = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, ji = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = ji.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, Pt([t, e], $t(n))) : setTimeout.apply(void 0, Pt([t, e], $t(n)));
  },
  clearTimeout: function(t) {
    var e = ji.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Wl(t) {
  ji.setTimeout(function() {
    throw t;
  });
}
function zi() {
}
function mr(t) {
  t();
}
var ho = function(t) {
  ct(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, jl(n) && n.add(r)) : r.destination = Yc, r;
  }
  return e.create = function(n, r, i) {
    return new gn(n, r, i);
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
}(Xn), Jc = Function.prototype.bind;
function ii(t, e) {
  return Jc.call(t, e);
}
var Kc = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        or(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        or(r);
      }
    else
      or(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        or(n);
      }
  }, t;
}(), gn = function(t) {
  ct(e, t);
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
      o && zl.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && ii(n.next, l),
        error: n.error && ii(n.error, l),
        complete: n.complete && ii(n.complete, l)
      }) : s = n;
    }
    return o.destination = new Kc(s), o;
  }
  return e;
}(ho);
function or(t) {
  Wl(t);
}
function Xc(t) {
  throw t;
}
var Yc = {
  closed: !0,
  next: zi,
  error: Xc,
  complete: zi
}, po = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function En(t) {
  return t;
}
function Qc(t) {
  return t.length === 0 ? En : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Oe = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, o = eu(e) ? e : new gn(e, n, r);
    return mr(function() {
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
    return n = ns(n), new n(function(i, o) {
      var s = new gn({
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
  }, t.prototype[po] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Qc(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = ns(e), new e(function(r, i) {
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
function ns(t) {
  var e;
  return (e = t ?? zl.Promise) !== null && e !== void 0 ? e : Promise;
}
function Zc(t) {
  return t && ae(t.next) && ae(t.error) && ae(t.complete);
}
function eu(t) {
  return t && t instanceof ho || Zc(t) && jl(t);
}
function tu(t) {
  return ae(t == null ? void 0 : t.lift);
}
function Ae(t) {
  return function(e) {
    if (tu(e))
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
  return new nu(t, e, n, r, i);
}
var nu = function(t) {
  ct(e, t);
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
}(ho), ru = fo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Re = function(t) {
  ct(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new rs(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ru();
  }, e.prototype.next = function(n) {
    var r = this;
    mr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = pn(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
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
    mr(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    mr(function() {
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
    return o || s ? Bl : (this.currentObservers = null, l.push(n), new Xn(function() {
      r.currentObservers = null, Tr(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Oe();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new rs(n, r);
  }, e;
}(Oe), rs = function(t) {
  ct(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Bl;
  }, e;
}(Re), go = function(t) {
  ct(e, t);
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
}(Re), mo = {
  now: function() {
    return (mo.delegate || Date).now();
  },
  delegate: void 0
}, Vl = function(t) {
  ct(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = mo);
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
}(Re), iu = function(t) {
  ct(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Xn), Ar = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = Ar.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, Pt([t, e], $t(n))) : setInterval.apply(void 0, Pt([t, e], $t(n)));
  },
  clearInterval: function(t) {
    var e = Ar.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, ou = function(t) {
  ct(e, t);
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
    return i === void 0 && (i = 0), Ar.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    Ar.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Tr(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(iu), is = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = mo.now, t;
}(), su = function(t) {
  ct(e, t);
  function e(n, r) {
    r === void 0 && (r = is.now);
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
}(is), zr = new su(ou), lu = zr, au = new Oe(function(t) {
  return t.complete();
});
function ql(t) {
  return t && ae(t.schedule);
}
function Gl(t) {
  return t[t.length - 1];
}
function cu(t) {
  return ae(Gl(t)) ? t.pop() : void 0;
}
function bo(t) {
  return ql(Gl(t)) ? t.pop() : void 0;
}
var Jl = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Kl(t) {
  return ae(t == null ? void 0 : t.then);
}
function Xl(t) {
  return ae(t[po]);
}
function Yl(t) {
  return Symbol.asyncIterator && ae(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Ql(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function uu() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Zl = uu();
function ea(t) {
  return ae(t == null ? void 0 : t[Zl]);
}
function ta(t) {
  return qc(this, arguments, function() {
    var n, r, i, o;
    return Ll(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, sn(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, sn(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, sn(i)];
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
function na(t) {
  return ae(t == null ? void 0 : t.getReader);
}
function tt(t) {
  if (t instanceof Oe)
    return t;
  if (t != null) {
    if (Xl(t))
      return fu(t);
    if (Jl(t))
      return du(t);
    if (Kl(t))
      return hu(t);
    if (Yl(t))
      return ra(t);
    if (ea(t))
      return pu(t);
    if (na(t))
      return gu(t);
  }
  throw Ql(t);
}
function fu(t) {
  return new Oe(function(e) {
    var n = t[po]();
    if (ae(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function du(t) {
  return new Oe(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function hu(t) {
  return new Oe(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Wl);
  });
}
function pu(t) {
  return new Oe(function(e) {
    var n, r;
    try {
      for (var i = pn(t), o = i.next(); !o.done; o = i.next()) {
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
function ra(t) {
  return new Oe(function(e) {
    mu(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function gu(t) {
  return ra(ta(t));
}
function mu(t, e) {
  var n, r, i, o;
  return Vc(this, void 0, void 0, function() {
    var s, l;
    return Ll(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Gc(t), c.label = 1;
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
function gt(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function ia(t, e) {
  return e === void 0 && (e = 0), Ae(function(n, r) {
    n.subscribe(be(r, function(i) {
      return gt(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return gt(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return gt(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function oa(t, e) {
  return e === void 0 && (e = 0), Ae(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function bu(t, e) {
  return tt(t).pipe(oa(e), ia(e));
}
function _u(t, e) {
  return tt(t).pipe(oa(e), ia(e));
}
function vu(t, e) {
  return new Oe(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function yu(t, e) {
  return new Oe(function(n) {
    var r;
    return gt(n, e, function() {
      r = t[Zl](), gt(n, e, function() {
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
function sa(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Oe(function(n) {
    gt(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      gt(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function wu(t, e) {
  return sa(ta(t), e);
}
function Su(t, e) {
  if (t != null) {
    if (Xl(t))
      return bu(t, e);
    if (Jl(t))
      return vu(t, e);
    if (Kl(t))
      return _u(t, e);
    if (Yl(t))
      return sa(t, e);
    if (ea(t))
      return yu(t, e);
    if (na(t))
      return wu(t, e);
  }
  throw Ql(t);
}
function Kt(t, e) {
  return e ? Su(t, e) : tt(t);
}
function ln() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = bo(t);
  return Kt(t, n);
}
function Cu(t) {
  return !!t && (t instanceof Oe || ae(t.lift) && ae(t.subscribe));
}
var Eu = fo(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Ln(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new gn({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new Eu());
      }
    });
    t.subscribe(o);
  });
}
function ku(t) {
  return t instanceof Date && !isNaN(t);
}
function qt(t, e) {
  return Ae(function(n, r) {
    var i = 0;
    n.subscribe(be(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var Tu = Array.isArray;
function Au(t, e) {
  return Tu(e) ? t.apply(void 0, Pt([], $t(e))) : t(e);
}
function xu(t) {
  return qt(function(e) {
    return Au(t, e);
  });
}
var Iu = Array.isArray, $u = Object.getPrototypeOf, Pu = Object.prototype, Ru = Object.keys;
function Ou(t) {
  if (t.length === 1) {
    var e = t[0];
    if (Iu(e))
      return { args: e, keys: null };
    if (Du(e)) {
      var n = Ru(e);
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
function Du(t) {
  return t && typeof t == "object" && $u(t) === Pu;
}
function Mu(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function la() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = bo(t), r = cu(t), i = Ou(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return Kt([], n);
  var l = new Oe(Nu(o, n, s ? function(c) {
    return Mu(s, c);
  } : En));
  return r ? l.pipe(xu(r)) : l;
}
function Nu(t, e, n) {
  return n === void 0 && (n = En), function(r) {
    os(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, c = function(u) {
        os(e, function() {
          var f = Kt(t[u], e), d = !1;
          f.subscribe(be(r, function(m) {
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
function os(t, e, n) {
  t ? gt(n, t, e) : e();
}
function Uu(t, e, n, r, i, o, s, l) {
  var c = [], a = 0, u = 0, f = !1, d = function() {
    f && !c.length && !a && e.complete();
  }, m = function(h) {
    return a < r ? p(h) : c.push(h);
  }, p = function(h) {
    o && e.next(h), a++;
    var g = !1;
    tt(n(h, u++)).subscribe(be(e, function(T) {
      i == null || i(T), o ? m(T) : e.next(T);
    }, function() {
      g = !0;
    }, void 0, function() {
      if (g)
        try {
          a--;
          for (var T = function() {
            var y = c.shift();
            s ? gt(e, s, function() {
              return p(y);
            }) : p(y);
          }; c.length && a < r; )
            T();
          d();
        } catch (y) {
          e.error(y);
        }
    }));
  };
  return t.subscribe(be(e, m, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function aa(t, e, n) {
  return n === void 0 && (n = 1 / 0), ae(e) ? aa(function(r, i) {
    return qt(function(o, s) {
      return e(r, o, i, s);
    })(tt(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Ae(function(r, i) {
    return Uu(r, i, t, n);
  }));
}
function Fu(t) {
  return t === void 0 && (t = 1 / 0), aa(En, t);
}
function Hu() {
  return Fu(1);
}
function Lu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Hu()(Kt(t, bo(t)));
}
function ca(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = lu);
  var r = -1;
  return e != null && (ql(e) ? n = e : r = e), new Oe(function(i) {
    var o = ku(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function an(t, e) {
  return Ae(function(n, r) {
    var i = 0;
    n.subscribe(be(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function Bu(t) {
  return Ae(function(e, n) {
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
      r = !0, i = a, o || tt(t(a)).subscribe(o = be(n, l, c));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function ju(t, e) {
  return e === void 0 && (e = zr), Bu(function() {
    return ca(t, e);
  });
}
function ua(t) {
  return Ae(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(be(n, void 0, void 0, function(s) {
      o = tt(t(s, ua(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function zu(t, e) {
  return e === void 0 && (e = zr), Ae(function(n, r) {
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
function Wu(t) {
  return t <= 0 ? function() {
    return au;
  } : Ae(function(e, n) {
    var r = 0;
    e.subscribe(be(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Vu(t) {
  return qt(function() {
    return t;
  });
}
function qu(t, e) {
  return e === void 0 && (e = En), t = t ?? Gu, Ae(function(n, r) {
    var i, o = !0;
    n.subscribe(be(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function Gu(t, e) {
  return t === e;
}
function Ju(t, e) {
  return qu(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function Ku(t) {
  return Ae(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Xu(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Re();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, c = l === void 0 ? !0 : l;
  return function(a) {
    var u, f, d, m = 0, p = !1, h = !1, g = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, T = function() {
      g(), u = d = void 0, p = h = !1;
    }, y = function() {
      var _ = u;
      T(), _ == null || _.unsubscribe();
    };
    return Ae(function(_, b) {
      m++, !h && !p && g();
      var w = d = d ?? n();
      b.add(function() {
        m--, m === 0 && !h && !p && (f = oi(y, c));
      }), w.subscribe(b), !u && m > 0 && (u = new gn({
        next: function(x) {
          return w.next(x);
        },
        error: function(x) {
          h = !0, g(), f = oi(T, i, x), w.error(x);
        },
        complete: function() {
          p = !0, g(), f = oi(T, s), w.complete();
        }
      }), tt(_).subscribe(u));
    })(a);
  };
}
function oi(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new gn({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, Pt([], $t(n))).subscribe(i);
  }
}
function Yu(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, Xu({
    connector: function() {
      return new Vl(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function Qu(t) {
  return an(function(e, n) {
    return t <= n;
  });
}
function fa(t, e) {
  return Ae(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(be(r, function(c) {
      i == null || i.unsubscribe();
      var a = 0, u = o++;
      tt(t(c, u)).subscribe(i = be(r, function(f) {
        return r.next(e ? e(c, f, u, a++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function mt(t) {
  return Ae(function(e, n) {
    tt(t).subscribe(be(n, function() {
      return n.complete();
    }, zi)), !n.closed && e.subscribe(n);
  });
}
function Zu(t, e) {
  return e === void 0 && (e = !1), Ae(function(n, r) {
    var i = 0;
    n.subscribe(be(r, function(o) {
      var s = t(o, i++);
      (s || e) && r.next(o), !s && r.complete();
    }));
  });
}
function ef(t, e, n) {
  var r = ae(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Ae(function(i, o) {
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
  }) : En;
}
var da = {
  leading: !0,
  trailing: !1
};
function tf(t, e) {
  return e === void 0 && (e = da), Ae(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, c = null, a = !1, u = function() {
      c == null || c.unsubscribe(), c = null, o && (m(), a && r.complete());
    }, f = function() {
      c = null, a && r.complete();
    }, d = function(p) {
      return c = tt(t(p)).subscribe(be(r, u, f));
    }, m = function() {
      if (s) {
        s = !1;
        var p = l;
        l = null, r.next(p), !a && d(p);
      }
    };
    n.subscribe(be(r, function(p) {
      s = !0, l = p, !(c && !c.closed) && (i ? m() : d(p));
    }, function() {
      a = !0, !(o && s && c && !c.closed) && r.complete();
    }));
  });
}
function nf(t, e, n) {
  e === void 0 && (e = zr), n === void 0 && (n = da);
  var r = ca(t, e);
  return tf(function() {
    return r;
  }, n);
}
function xt(t) {
  return typeof t == "function" ? xt(t()) : Cu(t) ? Ln(t) : Promise.resolve(t);
}
function ha(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: rf } = Object.prototype, { getPrototypeOf: _o } = Object, { iterator: Wr, toStringTag: pa } = Symbol, Vr = ((t) => (e) => {
  const n = rf.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nt = (t) => (t = t.toLowerCase(), (e) => Vr(e) === t), qr = (t) => (e) => typeof e === t, { isArray: kn } = Array, mn = qr("undefined");
function Yn(t) {
  return t !== null && !mn(t) && t.constructor !== null && !mn(t.constructor) && Le(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ga = nt("ArrayBuffer");
function of(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ga(t.buffer), e;
}
const sf = qr("string"), Le = qr("function"), ma = qr("number"), Qn = (t) => t !== null && typeof t == "object", lf = (t) => t === !0 || t === !1, br = (t) => {
  if (Vr(t) !== "object")
    return !1;
  const e = _o(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(pa in t) && !(Wr in t);
}, af = (t) => {
  if (!Qn(t) || Yn(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, cf = nt("Date"), uf = nt("File"), ff = nt("Blob"), df = nt("FileList"), hf = (t) => Qn(t) && Le(t.pipe), pf = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Le(t.append) && ((e = Vr(t)) === "formdata" || // detect form-data instance
  e === "object" && Le(t.toString) && t.toString() === "[object FormData]"));
}, gf = nt("URLSearchParams"), [mf, bf, _f, vf] = ["ReadableStream", "Request", "Response", "Headers"].map(nt), yf = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zn(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), kn(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    if (Yn(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = o.length;
    let l;
    for (r = 0; r < s; r++)
      l = o[r], e.call(null, t[l], l, t);
  }
}
function ba(t, e) {
  if (Yn(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const Lt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), _a = (t) => !mn(t) && t !== Lt;
function Wi() {
  const { caseless: t, skipUndefined: e } = _a(this) && this || {}, n = {}, r = (i, o) => {
    const s = t && ba(n, o) || o;
    br(n[s]) && br(i) ? n[s] = Wi(n[s], i) : br(i) ? n[s] = Wi({}, i) : kn(i) ? n[s] = i.slice() : (!e || !mn(i)) && (n[s] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Zn(arguments[i], r);
  return n;
}
const wf = (t, e, n, { allOwnKeys: r } = {}) => (Zn(e, (i, o) => {
  n && Le(i) ? Object.defineProperty(t, o, {
    value: ha(i, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(t, o, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: r }), t), Sf = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Cf = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Ef = (t, e, n, r) => {
  let i, o, s;
  const l = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, t, e)) && !l[s] && (e[s] = t[s], l[s] = !0);
    t = n !== !1 && _o(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, kf = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Tf = (t) => {
  if (!t)
    return null;
  if (kn(t))
    return t;
  let e = t.length;
  if (!ma(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Af = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && _o(Uint8Array)), xf = (t, e) => {
  const r = (t && t[Wr]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    e.call(t, o[0], o[1]);
  }
}, If = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, $f = nt("HTMLFormElement"), Pf = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), ss = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Rf = nt("RegExp"), va = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Zn(n, (i, o) => {
    let s;
    (s = e(i, o, t)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(t, r);
}, Of = (t) => {
  va(t, (e, n) => {
    if (Le(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Le(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Df = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return kn(t) ? r(t) : r(String(t).split(e)), n;
}, Mf = () => {
}, Nf = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Uf(t) {
  return !!(t && Le(t.append) && t[pa] === "FormData" && t[Wr]);
}
const Ff = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (Qn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (Yn(r))
        return r;
      if (!("toJSON" in r)) {
        e[i] = r;
        const o = kn(r) ? [] : {};
        return Zn(r, (s, l) => {
          const c = n(s, i + 1);
          !mn(c) && (o[l] = c);
        }), e[i] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, Hf = nt("AsyncFunction"), Lf = (t) => t && (Qn(t) || Le(t)) && Le(t.then) && Le(t.catch), ya = ((t, e) => t ? setImmediate : e ? ((n, r) => (Lt.addEventListener("message", ({ source: i, data: o }) => {
  i === Lt && o === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), Lt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Le(Lt.postMessage)
), Bf = typeof queueMicrotask < "u" ? queueMicrotask.bind(Lt) : typeof process < "u" && process.nextTick || ya, jf = (t) => t != null && Le(t[Wr]), C = {
  isArray: kn,
  isArrayBuffer: ga,
  isBuffer: Yn,
  isFormData: pf,
  isArrayBufferView: of,
  isString: sf,
  isNumber: ma,
  isBoolean: lf,
  isObject: Qn,
  isPlainObject: br,
  isEmptyObject: af,
  isReadableStream: mf,
  isRequest: bf,
  isResponse: _f,
  isHeaders: vf,
  isUndefined: mn,
  isDate: cf,
  isFile: uf,
  isBlob: ff,
  isRegExp: Rf,
  isFunction: Le,
  isStream: hf,
  isURLSearchParams: gf,
  isTypedArray: Af,
  isFileList: df,
  forEach: Zn,
  merge: Wi,
  extend: wf,
  trim: yf,
  stripBOM: Sf,
  inherits: Cf,
  toFlatObject: Ef,
  kindOf: Vr,
  kindOfTest: nt,
  endsWith: kf,
  toArray: Tf,
  forEachEntry: xf,
  matchAll: If,
  isHTMLForm: $f,
  hasOwnProperty: ss,
  hasOwnProp: ss,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: va,
  freezeMethods: Of,
  toObjectSet: Df,
  toCamelCase: Pf,
  noop: Mf,
  toFiniteNumber: Nf,
  findKey: ba,
  global: Lt,
  isContextDefined: _a,
  isSpecCompliantForm: Uf,
  toJSONObject: Ff,
  isAsyncFn: Hf,
  isThenable: Lf,
  setImmediate: ya,
  asap: Bf,
  isIterable: jf
};
class Ne extends Error {
  static from(e, n, r, i, o, s) {
    const l = new Ne(e.message, n || e.code, r, i, o);
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
}
Ne.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Ne.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Ne.ECONNABORTED = "ECONNABORTED";
Ne.ETIMEDOUT = "ETIMEDOUT";
Ne.ERR_NETWORK = "ERR_NETWORK";
Ne.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Ne.ERR_DEPRECATED = "ERR_DEPRECATED";
Ne.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Ne.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Ne.ERR_CANCELED = "ERR_CANCELED";
Ne.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Ne.ERR_INVALID_URL = "ERR_INVALID_URL";
const V = Ne, zf = null;
function Vi(t) {
  return C.isPlainObject(t) || C.isArray(t);
}
function wa(t) {
  return C.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ls(t, e, n) {
  return t ? t.concat(e).map(function(i, o) {
    return i = wa(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function Wf(t) {
  return C.isArray(t) && !t.some(Vi);
}
const Vf = C.toFlatObject(C, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Gr(t, e, n) {
  if (!C.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = C.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, g) {
    return !C.isUndefined(g[h]);
  });
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(e);
  if (!C.isFunction(i))
    throw new TypeError("visitor must be a function");
  function a(p) {
    if (p === null)
      return "";
    if (C.isDate(p))
      return p.toISOString();
    if (C.isBoolean(p))
      return p.toString();
    if (!c && C.isBlob(p))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(p) || C.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, h, g) {
    let T = p;
    if (p && !g && typeof p == "object") {
      if (C.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (C.isArray(p) && Wf(p) || (C.isFileList(p) || C.endsWith(h, "[]")) && (T = C.toArray(p)))
        return h = wa(h), T.forEach(function(_, b) {
          !(C.isUndefined(_) || _ === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ls([h], b, o) : s === null ? h : h + "[]",
            a(_)
          );
        }), !1;
    }
    return Vi(p) ? !0 : (e.append(ls(g, h, o), a(p)), !1);
  }
  const f = [], d = Object.assign(Vf, {
    defaultVisitor: u,
    convertValue: a,
    isVisitable: Vi
  });
  function m(p, h) {
    if (!C.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(p), C.forEach(p, function(T, y) {
        (!(C.isUndefined(T) || T === null) && i.call(
          e,
          T,
          C.isString(y) ? y.trim() : y,
          h,
          d
        )) === !0 && m(T, h ? h.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!C.isObject(t))
    throw new TypeError("data must be an object");
  return m(t), e;
}
function as(t) {
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
function vo(t, e) {
  this._pairs = [], t && Gr(t, this, e);
}
const Sa = vo.prototype;
Sa.append = function(e, n) {
  this._pairs.push([e, n]);
};
Sa.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, as);
  } : as;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function qf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ca(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || qf, i = C.isFunction(n) ? {
    serialize: n
  } : n, o = i && i.serialize;
  let s;
  if (o ? s = o(e, i) : s = C.isURLSearchParams(e) ? e.toString() : new vo(e, i).toString(r), s) {
    const l = t.indexOf("#");
    l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Gf {
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
    C.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const cs = Gf, Ea = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jf = typeof URLSearchParams < "u" ? URLSearchParams : vo, Kf = typeof FormData < "u" ? FormData : null, Xf = typeof Blob < "u" ? Blob : null, Yf = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jf,
    FormData: Kf,
    Blob: Xf
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, yo = typeof window < "u" && typeof document < "u", qi = typeof navigator == "object" && navigator || void 0, Qf = yo && (!qi || ["ReactNative", "NativeScript", "NS"].indexOf(qi.product) < 0), Zf = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ed = yo && window.location.href || "http://localhost", td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yo,
  hasStandardBrowserEnv: Qf,
  hasStandardBrowserWebWorkerEnv: Zf,
  navigator: qi,
  origin: ed
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...td,
  ...Yf
};
function nd(t, e) {
  return Gr(t, new Pe.classes.URLSearchParams(), {
    visitor: function(n, r, i, o) {
      return Pe.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function rd(t) {
  return C.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function id(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function ka(t) {
  function e(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__")
      return !0;
    const l = Number.isFinite(+s), c = o >= n.length;
    return s = !s && C.isArray(i) ? i.length : s, c ? (C.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !l) : ((!i[s] || !C.isObject(i[s])) && (i[s] = []), e(n, r, i[s], o) && C.isArray(i[s]) && (i[s] = id(i[s])), !l);
  }
  if (C.isFormData(t) && C.isFunction(t.entries)) {
    const n = {};
    return C.forEachEntry(t, (r, i) => {
      e(rd(r), i, n, 0);
    }), n;
  }
  return null;
}
function od(t, e, n) {
  if (C.isString(t))
    try {
      return (e || JSON.parse)(t), C.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const wo = {
  transitional: Ea,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = C.isObject(e);
    if (o && C.isHTMLForm(e) && (e = new FormData(e)), C.isFormData(e))
      return i ? JSON.stringify(ka(e)) : e;
    if (C.isArrayBuffer(e) || C.isBuffer(e) || C.isStream(e) || C.isFile(e) || C.isBlob(e) || C.isReadableStream(e))
      return e;
    if (C.isArrayBufferView(e))
      return e.buffer;
    if (C.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return nd(e, this.formSerializer).toString();
      if ((l = C.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Gr(
          l ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), od(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || wo.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (C.isResponse(e) || C.isReadableStream(e))
      return e;
    if (e && C.isString(e) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? V.from(l, V.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Pe.classes.FormData,
    Blob: Pe.classes.Blob
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
C.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  wo.headers[t] = {};
});
const So = wo, sd = C.toObjectSet([
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
]), ld = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || e[n] && sd[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, us = Symbol("internals");
function In(t) {
  return t && String(t).trim().toLowerCase();
}
function _r(t) {
  return t === !1 || t == null ? t : C.isArray(t) ? t.map(_r) : String(t);
}
function ad(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const cd = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function si(t, e, n, r, i) {
  if (C.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!C.isString(e)) {
    if (C.isString(r))
      return e.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(e);
  }
}
function ud(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function fd(t, e) {
  const n = C.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(i, o, s) {
        return this[r].call(this, e, i, o, s);
      },
      configurable: !0
    });
  });
}
class Jr {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function o(l, c, a) {
      const u = In(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = C.findKey(i, u);
      (!f || i[f] === void 0 || a === !0 || a === void 0 && i[f] !== !1) && (i[f || c] = _r(l));
    }
    const s = (l, c) => C.forEach(l, (a, u) => o(a, u, c));
    if (C.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (C.isString(e) && (e = e.trim()) && !cd(e))
      s(ld(e), n);
    else if (C.isObject(e) && C.isIterable(e)) {
      let l = {}, c, a;
      for (const u of e) {
        if (!C.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[a = u[0]] = (c = l[a]) ? C.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(l, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = In(e), e) {
      const r = C.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return ad(i);
        if (C.isFunction(n))
          return n.call(this, i, r);
        if (C.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = In(e), e) {
      const r = C.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || si(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = In(s), s) {
        const l = C.findKey(r, s);
        l && (!n || si(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return C.isArray(e) ? e.forEach(o) : o(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || si(this, this[o], o, e, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return C.forEach(this, (i, o) => {
      const s = C.findKey(r, o);
      if (s) {
        n[s] = _r(i), delete n[o];
        return;
      }
      const l = e ? ud(o) : String(o).trim();
      l !== o && delete n[o], n[l] = _r(i), r[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && C.isArray(r) ? r.join(", ") : r);
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
    const r = (this[us] = this[us] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const l = In(s);
      r[l] || (fd(i, s), r[l] = !0);
    }
    return C.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Jr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Jr.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
C.freezeMethods(Jr);
const et = Jr;
function li(t, e) {
  const n = this || So, r = e || n, i = et.from(r.headers);
  let o = r.data;
  return C.forEach(t, function(l) {
    o = l.call(n, o, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), o;
}
function Ta(t) {
  return !!(t && t.__CANCEL__);
}
class dd extends V {
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
    super(e ?? "canceled", V.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const er = dd;
function Aa(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function hd(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function pd(t, e) {
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
function gd(t, e) {
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
const xr = (t, e, n = 3) => {
  let r = 0;
  const i = pd(50, 250);
  return gd((o) => {
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
}, fs = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, ds = (t) => (...e) => C.asap(() => t(...e)), md = Pe.hasStandardBrowserEnv ? ((t, e) => (n) => (n = new URL(n, Pe.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(Pe.origin),
  Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent)
) : () => !0, bd = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, o, s) {
      if (typeof document > "u")
        return;
      const l = [`${t}=${encodeURIComponent(e)}`];
      C.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), C.isString(r) && l.push(`path=${r}`), C.isString(i) && l.push(`domain=${i}`), o === !0 && l.push("secure"), C.isString(s) && l.push(`SameSite=${s}`), document.cookie = l.join("; ");
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
function _d(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function vd(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function xa(t, e, n) {
  let r = !_d(e);
  return t && (r || n == !1) ? vd(t, e) : e;
}
const hs = (t) => t instanceof et ? { ...t } : t;
function Gt(t, e) {
  e = e || {};
  const n = {};
  function r(a, u, f, d) {
    return C.isPlainObject(a) && C.isPlainObject(u) ? C.merge.call({ caseless: d }, a, u) : C.isPlainObject(u) ? C.merge({}, u) : C.isArray(u) ? u.slice() : u;
  }
  function i(a, u, f, d) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(a))
        return r(void 0, a, f, d);
    } else
      return r(a, u, f, d);
  }
  function o(a, u) {
    if (!C.isUndefined(u))
      return r(void 0, u);
  }
  function s(a, u) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(a))
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
    headers: (a, u, f) => i(hs(a), hs(u), f, !0)
  };
  return C.forEach(Object.keys({ ...t, ...e }), function(u) {
    const f = c[u] || i, d = f(t[u], e[u], u);
    C.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const Ia = (t) => {
  const e = Gt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: l } = e;
  if (e.headers = s = et.from(s), e.url = Ca(xa(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), C.isFormData(n)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (C.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), a = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, f]) => {
        a.includes(u.toLowerCase()) && s.set(u, f);
      });
    }
  }
  if (Pe.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(e)), r || r !== !1 && md(e.url))) {
    const c = i && o && bd.read(o);
    c && s.set(i, c);
  }
  return e;
}, yd = typeof XMLHttpRequest < "u", wd = yd && function(t) {
  return new Promise(function(n, r) {
    const i = Ia(t);
    let o = i.data;
    const s = et.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: a } = i, u, f, d, m, p;
    function h() {
      m && m(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function T() {
      if (!g)
        return;
      const _ = et.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), w = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: _,
        config: t,
        request: g
      };
      Aa(function(S) {
        n(S), h();
      }, function(S) {
        r(S), h();
      }, w), g = null;
    }
    "onloadend" in g ? g.onloadend = T : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, g.onabort = function() {
      g && (r(new V("Request aborted", V.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function(b) {
      const w = b && b.message ? b.message : "Network Error", x = new V(w, V.ERR_NETWORK, t, g);
      x.event = b || null, r(x), g = null;
    }, g.ontimeout = function() {
      let b = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const w = i.transitional || Ea;
      i.timeoutErrorMessage && (b = i.timeoutErrorMessage), r(new V(
        b,
        w.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        t,
        g
      )), g = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in g && C.forEach(s.toJSON(), function(b, w) {
      g.setRequestHeader(w, b);
    }), C.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), l && l !== "json" && (g.responseType = i.responseType), a && ([d, p] = xr(a, !0), g.addEventListener("progress", d)), c && g.upload && ([f, m] = xr(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", m)), (i.cancelToken || i.signal) && (u = (_) => {
      g && (r(!_ || _.type ? new er(null, t, g) : _), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const y = hd(i.url);
    if (y && Pe.protocols.indexOf(y) === -1) {
      r(new V("Unsupported protocol " + y + ":", V.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(o || null);
  });
}, Sd = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), i;
    const o = function(a) {
      if (!i) {
        i = !0, l();
        const u = a instanceof Error ? a : this.reason;
        r.abort(u instanceof V ? u : new er(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, o(new V(`timeout of ${e}ms exceeded`, V.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((a) => {
        a.unsubscribe ? a.unsubscribe(o) : a.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((a) => a.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => C.asap(l), c;
  }
}, Cd = Sd, Ed = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + e, yield t.slice(r, i), r = i;
}, kd = async function* (t, e) {
  for await (const n of Td(t))
    yield* Ed(n, e);
}, Td = async function* (t) {
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
}, ps = (t, e, n, r) => {
  const i = kd(t, e);
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
}, gs = 64 * 1024, { isFunction: sr } = C, Ad = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(C.global), {
  ReadableStream: ms,
  TextEncoder: bs
} = C.global, _s = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, xd = (t) => {
  t = C.merge.call({
    skipUndefined: !0
  }, Ad, t);
  const { fetch: e, Request: n, Response: r } = t, i = e ? sr(e) : typeof fetch == "function", o = sr(n), s = sr(r);
  if (!i)
    return !1;
  const l = i && sr(ms), c = i && (typeof bs == "function" ? ((p) => (h) => p.encode(h))(new bs()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), a = o && l && _s(() => {
    let p = !1;
    const h = new n(Pe.origin, {
      body: new ms(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !h;
  }), u = s && l && _s(() => C.isReadableStream(new r("").body)), f = {
    stream: u && ((p) => p.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (h, g) => {
      let T = h && h[p];
      if (T)
        return T.call(h);
      throw new V(`Response type '${p}' is not supported`, V.ERR_NOT_SUPPORT, g);
    });
  });
  const d = async (p) => {
    if (p == null)
      return 0;
    if (C.isBlob(p))
      return p.size;
    if (C.isSpecCompliantForm(p))
      return (await new n(Pe.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(p) || C.isArrayBuffer(p))
      return p.byteLength;
    if (C.isURLSearchParams(p) && (p = p + ""), C.isString(p))
      return (await c(p)).byteLength;
  }, m = async (p, h) => {
    const g = C.toFiniteNumber(p.getContentLength());
    return g ?? d(h);
  };
  return async (p) => {
    let {
      url: h,
      method: g,
      data: T,
      signal: y,
      cancelToken: _,
      timeout: b,
      onDownloadProgress: w,
      onUploadProgress: x,
      responseType: S,
      headers: E,
      withCredentials: N = "same-origin",
      fetchOptions: W
    } = Ia(p), Z = e || fetch;
    S = S ? (S + "").toLowerCase() : "text";
    let Ee = Cd([y, _ && _.toAbortSignal()], b), U = null;
    const L = Ee && Ee.unsubscribe && (() => {
      Ee.unsubscribe();
    });
    let ee;
    try {
      if (x && a && g !== "get" && g !== "head" && (ee = await m(E, T)) !== 0) {
        let yt = new n(h, {
          method: "POST",
          body: T,
          duplex: "half"
        }), Yt;
        if (C.isFormData(T) && (Yt = yt.headers.get("content-type")) && E.setContentType(Yt), yt.body) {
          const [ni, ir] = fs(
            ee,
            xr(ds(x))
          );
          T = ps(yt.body, gs, ni, ir);
        }
      }
      C.isString(N) || (N = N ? "include" : "omit");
      const xe = o && "credentials" in n.prototype, vt = {
        ...W,
        signal: Ee,
        method: g.toUpperCase(),
        headers: E.normalize().toJSON(),
        body: T,
        duplex: "half",
        credentials: xe ? N : void 0
      };
      U = o && new n(h, vt);
      let F = await (o ? Z(U, W) : Z(h, vt));
      const G = u && (S === "stream" || S === "response");
      if (u && (w || G && L)) {
        const yt = {};
        ["status", "statusText", "headers"].forEach((Wo) => {
          yt[Wo] = F[Wo];
        });
        const Yt = C.toFiniteNumber(F.headers.get("content-length")), [ni, ir] = w && fs(
          Yt,
          xr(ds(w), !0)
        ) || [];
        F = new r(
          ps(F.body, gs, ni, () => {
            ir && ir(), L && L();
          }),
          yt
        );
      }
      S = S || "text";
      let rt = await f[C.findKey(f, S) || "text"](F, p);
      return !G && L && L(), await new Promise((yt, Yt) => {
        Aa(yt, Yt, {
          data: rt,
          headers: et.from(F.headers),
          status: F.status,
          statusText: F.statusText,
          config: p,
          request: U
        });
      });
    } catch (xe) {
      throw L && L(), xe && xe.name === "TypeError" && /Load failed|fetch/i.test(xe.message) ? Object.assign(
        new V("Network Error", V.ERR_NETWORK, p, U),
        {
          cause: xe.cause || xe
        }
      ) : V.from(xe, xe && xe.code, p, U);
    }
  };
}, Id = /* @__PURE__ */ new Map(), $a = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: i } = e, o = [
    r,
    i,
    n
  ];
  let s = o.length, l = s, c, a, u = Id;
  for (; l--; )
    c = o[l], a = u.get(c), a === void 0 && u.set(c, a = l ? /* @__PURE__ */ new Map() : xd(e)), u = a;
  return a;
};
$a();
const Co = {
  http: zf,
  xhr: wd,
  fetch: {
    get: $a
  }
};
C.forEach(Co, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const vs = (t) => `- ${t}`, $d = (t) => C.isFunction(t) || t === null || t === !1;
function Pd(t, e) {
  t = C.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, i;
  const o = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let l;
    if (i = r, !$d(r) && (i = Co[(l = String(r)).toLowerCase()], i === void 0))
      throw new V(`Unknown adapter '${l}'`);
    if (i && (C.isFunction(i) || (i = i.get(e))))
      break;
    o[l || "#" + s] = i;
  }
  if (!i) {
    const s = Object.entries(o).map(
      ([c, a]) => `adapter ${c} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(vs).join(`
`) : " " + vs(s[0]) : "as no adapter specified";
    throw new V(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const Pa = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Pd,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Co
};
function ai(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new er(null, t);
}
function ys(t) {
  return ai(t), t.headers = et.from(t.headers), t.data = li.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Pa.getAdapter(t.adapter || So.adapter, t)(t).then(function(r) {
    return ai(t), r.data = li.call(
      t,
      t.transformResponse,
      r
    ), r.headers = et.from(r.headers), r;
  }, function(r) {
    return Ta(r) || (ai(t), r && r.response && (r.response.data = li.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = et.from(r.response.headers))), Promise.reject(r);
  });
}
const Ra = "1.13.3", Kr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Kr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ws = {};
Kr.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + Ra + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (e === !1)
      throw new V(
        i(s, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !ws[s] && (ws[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
Kr.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Rd(t, e, n) {
  if (typeof t != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = e[o];
    if (s) {
      const l = t[o], c = l === void 0 || s(l, o, t);
      if (c !== !0)
        throw new V("option " + o + " must be " + c, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + o, V.ERR_BAD_OPTION);
  }
}
const vr = {
  assertOptions: Rd,
  validators: Kr
}, ot = vr.validators;
class Ir {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new cs(),
      response: new cs()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Gt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && vr.assertOptions(r, {
      silentJSONParsing: ot.transitional(ot.boolean),
      forcedJSONParsing: ot.transitional(ot.boolean),
      clarifyTimeoutError: ot.transitional(ot.boolean)
    }, !1), i != null && (C.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : vr.assertOptions(i, {
      encode: ot.function,
      serialize: ot.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), vr.assertOptions(n, {
      baseUrl: ot.spelling("baseURL"),
      withXsrfToken: ot.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && C.merge(
      o.common,
      o[n.method]
    );
    o && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = et.concat(s, o);
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
      const p = [ys.bind(this), void 0];
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
      u = ys.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = a.length; f < d; )
      u = u.then(a[f++]).catch(a[f++]);
    return u;
  }
  getUri(e) {
    e = Gt(this.defaults, e);
    const n = xa(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ca(n, e.params, e.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(e) {
  Ir.prototype[e] = function(n, r) {
    return this.request(Gt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, l) {
      return this.request(Gt(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  Ir.prototype[e] = n(), Ir.prototype[e + "Form"] = n(!0);
});
const yr = Ir;
class Eo {
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
      r.reason || (r.reason = new er(o, s, l), n(r.reason));
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
      token: new Eo(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const Od = Eo;
function Dd(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Md(t) {
  return C.isObject(t) && t.isAxiosError === !0;
}
const Gi = {
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
Object.entries(Gi).forEach(([t, e]) => {
  Gi[e] = t;
});
const Nd = Gi;
function Oa(t) {
  const e = new yr(t), n = ha(yr.prototype.request, e);
  return C.extend(n, yr.prototype, e, { allOwnKeys: !0 }), C.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Oa(Gt(t, i));
  }, n;
}
const he = Oa(So);
he.Axios = yr;
he.CanceledError = er;
he.CancelToken = Od;
he.isCancel = Ta;
he.VERSION = Ra;
he.toFormData = Gr;
he.AxiosError = V;
he.Cancel = he.CanceledError;
he.all = function(e) {
  return Promise.all(e);
};
he.spread = Dd;
he.isAxiosError = Md;
he.mergeConfig = Gt;
he.AxiosHeaders = et;
he.formToJSON = (t) => ka(C.isHTMLForm(t) ? new FormData(t) : t);
he.getAdapter = Pa.getAdapter;
he.HttpStatusCode = Nd;
he.default = he;
const se = he;
var Ss = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Tn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n;
  }
  getAuthorizationHeader() {
    return Ss(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield xt(this.accessToken)}`
      };
    });
  }
  getAccessToken() {
    return xt(this.accessToken);
  }
  getStructureUrl() {
    return Ss(this, void 0, void 0, function* () {
      const e = yield xt(this.httpConfig);
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
var We = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Jt extends Tn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return We(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return We(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield se.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return We(this, void 0, void 0, function* () {
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
    return We(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(J.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield se.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return We(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return se.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return We(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`;
      delete n.ChangedBy, delete n.ChangedOn, delete n.CreatedBy, delete n.CreatedOn;
      const i = yield this.getAuthorizationHeader();
      return se.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return We(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return se.delete(r, { headers: i }).then();
    });
  }
  copyTo(e, n, r) {
    return We(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return se.get(i, { headers: o }).then((s) => s.data);
    });
  }
  copyMultipleTo(e, n, r) {
    return We(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return se.put(i, e, { responseType: "text", headers: o });
    });
  }
  moveTo(e, n, r) {
    return We(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return se.get(i, { headers: o }).then((s) => s.data);
    });
  }
  moveMultipleTo(e, n, r) {
    return We(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return se.put(i, e, { responseType: "text", headers: o });
    });
  }
  _createBaseUrlByType(e) {
    return We(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${kc[e]}`;
    });
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
class Bn extends Tn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  getTenantViewForEntityId(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return $n(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield se.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  filterTenantsByName(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/filter/${e}`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
}
var ci = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
    return ci(this, void 0, void 0, function* () {
      const s = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let l = yield this.resolvePathName(s.Path.splice(i ? s.Path.length - i : 0, s.Path.length), o);
      return r && (l = l + o + s.Name.Value), l;
    });
  }
  resolvePathName(e, n = " / ") {
    return ci(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : Ln(la(e.map((r) => this.resolveName(J.Group, r))).pipe(qt((r) => r.join(n))));
    });
  }
  resolveName(e, n) {
    return ci(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = Kt(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(qt((r) => r.Name.Value), Yu(1), ua(() => ln(n)))), Ln(this._nameCache[n]);
    });
  }
}
var Ud = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class gb extends Tn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Ud(this, void 0, void 0, function* () {
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
var Cs = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Ji extends Tn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return Cs(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield se.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return Cs(this, void 0, void 0, function* () {
      const e = yield xt(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Driver}`;
    });
  }
}
class bn extends Error {
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
class ko extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class zn extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Fd extends Error {
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
class Hd extends Error {
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
class Ld extends Error {
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
class Bd extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class jd extends Error {
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
class Da {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class To {
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
var A;
(function(t) {
  t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
})(A || (A = {}));
class Wn {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
Wn.instance = new Wn();
const zd = "6.0.8";
class Se {
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
class Te {
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
  return Ao(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Wd(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Wd(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    const i = r < 16 ? "0" : "";
    n += `0x${i}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function Ao(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function Ma(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [c, a] = _n();
  l[c] = a, t.log(A.Trace, `(${e} transport) sending data. ${Vn(o, s.logMessageContent)}.`);
  const u = Ao(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(A.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function Vd(t) {
  return t === void 0 ? new $r(A.Information) : t === null ? Wn.instance : t.log !== void 0 ? t : new $r(t);
}
class qd {
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
      const r = `[${new Date().toISOString()}] ${A[e]}: ${n}`;
      switch (e) {
        case A.Critical:
        case A.Error:
          this.out.error(r);
          break;
        case A.Warning:
          this.out.warn(r);
          break;
        case A.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function _n() {
  let t = "X-SignalR-User-Agent";
  return Te.isNode && (t = "User-Agent"), [t, Gd(zd, Jd(), Xd(), Kd())];
}
function Gd(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Jd() {
  if (Te.isNode)
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
function Kd() {
  if (Te.isNode)
    return process.versions.node;
}
function Xd() {
  return Te.isNode ? "NodeJS" : "Browser";
}
function Es(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Yd() {
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
class Qd extends To {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Yd());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new zn();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new zn();
    });
    let i = null;
    if (e.timeout) {
      const c = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(A.Warning, "Timeout from HTTP request."), r = new ko();
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
      throw r || (this._logger.log(A.Warning, `Error from HTTP request. ${c}.`), c);
    } finally {
      i && clearTimeout(i), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!o.ok) {
      const c = await ks(o, "text");
      throw new bn(c || o.statusText, o.status);
    }
    const l = await ks(o, e.responseType);
    return new Da(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return Te.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function ks(t, e) {
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
class Zd extends To {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new zn()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new zn());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new Da(i.status, i.statusText, i.response || i.responseText)) : r(new bn(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(A.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new bn(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(A.Warning, "Timeout from HTTP request."), r(new ko());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class eh extends To {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || Te.isNode)
      this._httpClient = new Qd(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new Zd(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new zn()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
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
class th {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return je.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (Ao(e)) {
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
class nh {
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
    return this.observers.push(e), new qd(this, e);
  }
}
const rh = 30 * 1e3, ih = 15 * 1e3;
var oe;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(oe || (oe = {}));
class xo {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(A.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, Se.isRequired(e, "connection"), Se.isRequired(n, "logger"), Se.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = rh, this.keepAliveIntervalInMilliseconds = ih, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new th(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = oe.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: te.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, r, i) {
    return new xo(e, n, r, i);
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
    this._connectionState = oe.Connecting, this._logger.log(A.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), Te.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = oe.Connected, this._connectionStarted = !0, this._logger.log(A.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = oe.Disconnected, this._logger.log(A.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
      if (this._logger.log(A.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(A.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
    } catch (n) {
      throw this._logger.log(A.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
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
    return this._connectionState === oe.Disconnected ? (this._logger.log(A.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === oe.Disconnecting ? (this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = oe.Disconnecting, this._logger.log(A.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(A.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
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
    const l = new nh();
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
                this._logger.log(A.Error, `Stream callback threw error: ${Es(o)}`);
              }
            }
            break;
          }
          case te.Ping:
            break;
          case te.Close: {
            this._logger.log(A.Information, "Close message received from server.");
            const i = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            r.allowReconnect === !0 ? this.connection.stop(i) : this._stopPromise = this._stopInternal(i);
            break;
          }
          default:
            this._logger.log(A.Warning, `Invalid message type: ${r.type}.`);
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
      this._logger.log(A.Error, o);
      const s = new Error(o);
      throw this._handshakeRejecter(s), s;
    }
    if (n.error) {
      const i = "Server returned handshake error: " + n.error;
      this._logger.log(A.Error, i);
      const o = new Error(i);
      throw this._handshakeRejecter(o), o;
    } else
      this._logger.log(A.Debug, "Server handshake complete.");
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
        this._logger.log(A.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${r}'.`);
      }
      if (e.invocationId) {
        const r = "Server requested a response, which is not supported in this version of the client.";
        this._logger.log(A.Error, r), this._stopPromise = this._stopInternal(new Error(r));
      }
    } else
      this._logger.log(A.Warning, `No client method with the name '${e.target}' found.`);
  }
  _connectionClosed(e) {
    this._logger.log(A.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === oe.Disconnecting ? this._completeClose(e) : this._connectionState === oe.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === oe.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = oe.Disconnected, this._connectionStarted = !1, Te.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [e]));
      } catch (n) {
        this._logger.log(A.Error, `An onclose callback called with error '${e}' threw error '${n}'.`);
      }
    }
  }
  async _reconnect(e) {
    const n = Date.now();
    let r = 0, i = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), o = this._getNextRetryDelay(r++, 0, i);
    if (o === null) {
      this._logger.log(A.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = oe.Reconnecting, e ? this._logger.log(A.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(A.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(A.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== oe.Reconnecting) {
        this._logger.log(A.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(A.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== oe.Reconnecting) {
        this._logger.log(A.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = oe.Connected, this._logger.log(A.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(A.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(A.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== oe.Reconnecting) {
          this._logger.log(A.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === oe.Disconnecting && this._completeClose();
          return;
        }
        i = s instanceof Error ? s : new Error(s.toString()), o = this._getNextRetryDelay(r++, Date.now() - n, i);
      }
    }
    this._logger.log(A.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: e,
        retryReason: r
      });
    } catch (i) {
      return this._logger.log(A.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${n}) threw error '${i}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const n = this._callbacks;
    this._callbacks = {}, Object.keys(n).forEach((r) => {
      const i = n[r];
      try {
        i(null, e);
      } catch (o) {
        this._logger.log(A.Error, `Stream 'error' callback called with '${e}' threw error: ${Es(o)}`);
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
const oh = [0, 2e3, 1e4, 3e4, null];
class Ts {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : oh;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class jt {
}
jt.Authorization = "Authorization";
jt.Cookie = "Cookie";
var ye;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(ye || (ye = {}));
var $e;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})($e || ($e = {}));
let sh = class {
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
class As {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new sh(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (Se.isRequired(e, "url"), Se.isRequired(n, "transferFormat"), Se.isIn(n, $e, "transferFormat"), this._url = e, this._logger.log(A.Trace, "(LongPolling transport) Connecting."), n === $e.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = _n(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === $e.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(A.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, s);
    a.statusCode !== 200 ? (this._logger.log(A.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new bn(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
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
          this._logger.log(A.Trace, `(LongPolling transport) polling: ${i}.`);
          const o = await this._httpClient.get(i, n);
          o.statusCode === 204 ? (this._logger.log(A.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(A.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new bn(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(A.Trace, `(LongPolling transport) data received. ${Vn(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(A.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof ko ? this._logger.log(A.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(A.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(A.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Ma(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(A.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(A.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = _n();
      e[n] = r;
      const i = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      }, o = await this._getAccessToken();
      this._updateHeaderToken(i, o), await this._httpClient.delete(this._url, i), this._logger.log(A.Trace, "(LongPolling transport) DELETE request sent.");
    } finally {
      this._logger.log(A.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(A.Trace, e), this.onclose(this._closeError);
    }
  }
}
class lh {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (Se.isRequired(e, "url"), Se.isRequired(n, "transferFormat"), Se.isIn(n, $e, "transferFormat"), this._logger.log(A.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== $e.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (Te.isBrowser || Te.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), c = {};
        c.Cookie = l;
        const [a, u] = _n();
        c[a] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(A.Trace, `(SSE transport) data received. ${Vn(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
            } catch (c) {
              this._close(c);
              return;
            }
        }, s.onerror = (l) => {
          o ? this._close() : i(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, s.onopen = () => {
          this._logger.log(A.Information, `SSE connected to ${this._url}`), this._eventSource = s, o = !0, r();
        };
      } catch (l) {
        i(l);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Ma(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class ah {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (Se.isRequired(e, "url"), Se.isRequired(n, "transferFormat"), Se.isIn(n, $e, "transferFormat"), this._logger.log(A.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (Te.isNode) {
        const c = {}, [a, u] = _n();
        c[a] = u, s && (c[jt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...c, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === $e.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
        this._logger.log(A.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (c) => {
        let a = null;
        typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "There was an error with the transport", this._logger.log(A.Information, `(WebSockets transport) ${a}.`);
      }, o.onmessage = (c) => {
        if (this._logger.log(A.Trace, `(WebSockets transport) data received. ${Vn(c.data, this._logMessageContent)}.`), this.onreceive)
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
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(A.Trace, `(WebSockets transport) sending data. ${Vn(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(A.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const xs = 100;
class ch {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, Se.isRequired(e, "url"), this._logger = Vd(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (Te.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !Te.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : Te.isNode && !n.WebSocket && r && (n.WebSocket = r), !Te.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : Te.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new eh(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || $e.Binary, Se.isIn(e, $e, "transferFormat"), this._logger.log(A.Debug, `Starting connection with transfer format '${$e[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(A.Error, n), await this._stopPromise, Promise.reject(new Error(n));
    } else if (this._connectionState !== "Connected") {
      const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(A.Error, n), Promise.reject(new Error(n));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Io(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
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
        this._logger.log(A.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(A.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let n = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === ye.WebSockets)
          this.transport = this._constructTransport(ye.WebSockets), await this._startTransport(n, e);
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
        } while (r.url && i < xs);
        if (i === xs && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof As && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(A.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(A.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[jt.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = _n();
    n[r] = i;
    const o = this._resolveNegotiateUrl(e);
    this._logger.log(A.Debug, `Sending negotiation request: ${o}.`);
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
      return s instanceof bn && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(A.Error, l), Promise.reject(new Bd(l));
    }
  }
  _createConnectUrl(e, n) {
    return n ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : e;
  }
  async _createTransport(e, n, r, i) {
    let o = this._createConnectUrl(e, r.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(A.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(o, i), this.connectionId = r.connectionId;
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
          if (this._logger.log(A.Error, `Failed to start the transport '${a.transport}': ${f}`), c = void 0, s.push(new Ld(`${a.transport} failed: ${f}`, ye[a.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(A.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new jd(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case ye.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new ah(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case ye.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new lh(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case ye.LongPolling:
        return new As(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, r) {
    const i = ye[e.transport];
    if (i == null)
      return this._logger.log(A.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (uh(n, i))
      if (e.transferFormats.map((s) => $e[s]).indexOf(r) >= 0) {
        if (i === ye.WebSockets && !this._options.WebSocket || i === ye.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(A.Debug, `Skipping transport '${ye[i]}' because it is not supported in your environment.'`), new Fd(`'${ye[i]}' is not supported in your environment.`, i);
        this._logger.log(A.Debug, `Selecting transport '${ye[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(A.Debug, `Skipping transport '${ye[i]}' because it does not support the requested transfer format '${$e[r]}'.`), new Error(`'${ye[i]}' does not support ${$e[r]}.`);
    else
      return this._logger.log(A.Debug, `Skipping transport '${ye[i]}' because it was disabled by the client.`), new Hd(`'${ye[i]}' is disabled by the client.`, i);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(A.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(A.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(A.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(A.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(A.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
      this._logger.log(A.Error, `TransportSendQueue.stop() threw error '${n}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (n) {
        this._logger.log(A.Error, `HttpConnection.onclose(${e}) threw error '${n}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!Te.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const n = window.document.createElement("a");
    return n.href = e, this._logger.log(A.Information, `Normalizing '${e}' to '${n.href}'.`), n.href;
  }
  _resolveNegotiateUrl(e) {
    const n = e.indexOf("?");
    let r = e.substring(0, n === -1 ? e.length : n);
    return r[r.length - 1] !== "/" && (r += "/"), r += "negotiate", r += n === -1 ? "" : e.substring(n), r.indexOf("negotiateVersion") === -1 && (r += n === -1 ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r;
  }
}
function uh(t, e) {
  return !t || (e & t) !== 0;
}
class Io {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new lr(), this._transportResult = new lr(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new lr()), this._transportResult.promise;
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
      this._sendBufferedData = new lr();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : Io._concatBuffers(this._buffer);
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
class lr {
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
const fh = "json";
class dh {
  constructor() {
    this.name = fh, this.version = 1, this.transferFormat = $e.Text;
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
    n === null && (n = Wn.instance);
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
          n.log(A.Information, "Unknown message type '" + s.type + "' ignored.");
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
const hh = {
  trace: A.Trace,
  debug: A.Debug,
  info: A.Information,
  information: A.Information,
  warn: A.Warning,
  warning: A.Warning,
  error: A.Error,
  critical: A.Critical,
  none: A.None
};
function ph(t) {
  const e = hh[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class gh {
  configureLogging(e) {
    if (Se.isRequired(e, "logging"), mh(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = ph(e);
      this.logger = new $r(n);
    } else
      this.logger = new $r(e);
    return this;
  }
  withUrl(e, n) {
    return Se.isRequired(e, "url"), Se.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return Se.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new Ts(e) : this.reconnectPolicy = e : this.reconnectPolicy = new Ts(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new ch(this.url, e);
    return xo.create(n, this.logger || Wn.instance, this.protocol || new dh(), this.reconnectPolicy);
  }
}
function mh(t) {
  return t.log !== void 0;
}
var bh = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
}, Pr;
(function(t) {
  t.Running = "Running", t.Success = "Success", t.Failed = "Failed";
})(Pr || (Pr = {}));
var Un;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})(Un || (Un = {}));
var Is;
(function(t) {
  t.Send = "Send";
})(Is || (Is = {}));
var Rr;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC", t.OP = "OP";
})(Rr || (Rr = {}));
class Ki {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new Re(), this._connectionEstablished = new go(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Re(), this._subscribeRequested = new Re(), this._handleSubscriptionQueue();
  }
  connect() {
    return bh(this, void 0, void 0, function* () {
      const e = yield xt(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Ln(this._connectionEstablished.pipe(an((n) => n), Vu(null)));
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
  subscribeToOperations(e) {
    const n = e.map((r) => `${Rr.OP}:${r}`);
    return this.subscribeLiveValuePackages(n);
  }
  getOperationStatus(e) {
    const n = `${Rr.OP}:${e}`;
    return this.subscribeToOperations([e]).pipe(qt((r) => r.find((i) => i.id === e)), an((r) => r != null), Zu((r) => r.status !== Pr.Success && r.status !== Pr.Failed, !0), Ku(() => this._unsubscribeIds([n])));
  }
  subscribeLiveValuePackages(e) {
    const n = e.filter((o) => !this._subscribedIds.includes(o));
    this.hubConnection && n.length > 0 && this._enqueueIdsToSubscribe(n);
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(qt((o) => o.filter((s) => e.includes(s.identifier))), an((o) => o.length > 0));
    return r.length > 0 ? Lu(ln(r), i) : i;
  }
  _unsubscribeIds(e) {
    this._subscribedIds = this._subscribedIds.filter((n) => !e.includes(n)), e.forEach((n) => delete this._valueCache[n]);
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(mt(this._unsub), ju(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(Un.SubscribeMany, e), this._subscribedIds.push(...e);
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
      this._sendMessage(Un.ChangeModeAsync, !0), this._sendMessage(Un.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new gh().withUrl(e, {
      accessTokenFactory: () => this.getAccessToken()
    }).build();
  }
  getAccessToken() {
    return xt(this.accessToken);
  }
}
var Pn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class bb {
}
class _b {
}
class vb {
}
class $s extends Tn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return Pn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield se.post(`${n}/value/manyflat`, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return Pn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return se.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return Pn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return se.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return Pn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return se.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getHistorianUrl() {
    return Pn(this, void 0, void 0, function* () {
      const e = yield xt(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Historian}`;
    });
  }
}
var Xi;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(Xi || (Xi = {}));
const Ue = Xi;
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
var Yi = function(t, e) {
  return Yi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Yi(t, e);
};
function $o(t, e) {
  Yi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function _h(t, e, n, r) {
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
function vh(t, e) {
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
function ar(t) {
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
function Or(t, e) {
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
function Ft() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Or(arguments[e]));
  return t;
}
function Na(t) {
  return !!t.useClass;
}
function Qi(t) {
  return !!t.useFactory;
}
var Ua = function() {
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
        return l.apply(void 0, Ft(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function Qt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function yh(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function Ps(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function wh(t) {
  return typeof t == "function" || t instanceof Ua;
}
function wr(t) {
  return !!t.useToken;
}
function Sr(t) {
  return t.useValue != null;
}
function Sh(t) {
  return Na(t) || Sr(t) || wr(t) || Qi(t);
}
var Po = function() {
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
}(), Ch = function(t) {
  $o(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Po), Rs = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function Eh(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function kh(t, e, n) {
  return n === void 0 && (n = "    "), Ft([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function Th(t, e, n) {
  var r = Or(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = Eh(o, e);
  return kh("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function Ah(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var xh = function(t) {
  $o(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Po), Ih = function(t) {
  $o(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Po), $h = function() {
  function t() {
    this.preResolution = new xh(), this.postResolution = new Ih();
  }
  return t;
}(), Ph = /* @__PURE__ */ new Map(), Rh = function() {
  function t(e) {
    this.parent = e, this._registry = new Ch(), this.interceptors = new $h(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Ue.Transient }), this.ensureNotDisposed();
    var i;
    if (Sh(n) ? i = n : i = { useClass: n }, wr(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + Ft(o, [l]).join(" -> "));
        o.push(l);
        var c = this._registry.get(l);
        c && wr(c.provider) ? s = c.provider : s = null;
      }
    if ((r.lifecycle === Ue.Singleton || r.lifecycle == Ue.ContainerScoped || r.lifecycle == Ue.ResolutionScoped) && (Sr(i) || Qi(i)))
      throw new Error('Cannot use lifecycle "' + Ue[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: i, options: r }), this;
  }, t.prototype.registerType = function(e, n) {
    return this.ensureNotDisposed(), Qt(n) ? this.register(e, {
      useToken: n
    }) : this.register(e, {
      useClass: n
    });
  }, t.prototype.registerInstance = function(e, n) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: n
    });
  }, t.prototype.registerSingleton = function(e, n) {
    if (this.ensureNotDisposed(), Qt(e)) {
      if (Qt(n))
        return this.register(e, {
          useToken: n
        }, { lifecycle: Ue.Singleton });
      if (n)
        return this.register(e, {
          useClass: n
        }, { lifecycle: Ue.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return n && !Qt(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Ue.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new Rs()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && Qt(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (wh(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = ar(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
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
        for (var l = ar(this.interceptors.postResolution.getAll(e)), c = l.next(); !c.done; c = l.next()) {
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
    if (this.ensureNotDisposed(), e.options.lifecycle === Ue.ResolutionScoped && n.scopedResolutions.has(e))
      return n.scopedResolutions.get(e);
    var r = e.options.lifecycle === Ue.Singleton, i = e.options.lifecycle === Ue.ContainerScoped, o = r || i, s;
    return Sr(e.provider) ? s = e.provider.useValue : wr(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : Na(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : Qi(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Ue.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new Rs()), this.ensureNotDisposed();
    var i = this.getAllRegistrations(e);
    if (!i && Qt(e))
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
      for (var r = ar(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = Or(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(c) {
          return !Sr(c.provider);
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
      for (var i = ar(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = Or(o.value, 2), l = s[0], c = s[1];
        c.some(function(a) {
          var u = a.options;
          return u.lifecycle === Ue.ContainerScoped;
        }) && r._registry.setAll(l, c.map(function(a) {
          return a.options.lifecycle === Ue.ContainerScoped ? {
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
    return _h(this, void 0, void 0, function() {
      var e;
      return vh(this, function(n) {
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
    if (e instanceof Ua)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = Ph.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, Ft([void 0], s)))();
    }();
    return Ah(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, c;
      try {
        return yh(i) ? Ps(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, Ft([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, Ft([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : Ps(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, Ft([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (a) {
        throw new Error(Th(n, o, a));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), Fa = new Rh();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function Y() {
}
function Oh(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Dh(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function Ha(t) {
  return t();
}
function Os() {
  return /* @__PURE__ */ Object.create(null);
}
function _t(t) {
  t.forEach(Ha);
}
function La(t) {
  return typeof t == "function";
}
function de(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Mh(t) {
  return Object.keys(t).length === 0;
}
function Ve(t, e, n, r) {
  if (t) {
    const i = Ba(t, e, n, r);
    return t[0](i);
  }
}
function Ba(t, e, n, r) {
  return t[1] && r ? Oh(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function qe(t, e, n, r) {
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
function Ge(t, e, n, r, i, o) {
  if (i) {
    const s = Ba(e, n, r, o);
    t.p(s, i);
  }
}
function Je(t) {
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
function P(t, e) {
  t.appendChild(e);
}
function Xt(t, e, n) {
  const r = Nh(t);
  if (!r.getElementById(e)) {
    const i = O("style");
    i.id = e, i.textContent = n, Uh(r, i);
  }
}
function Nh(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Uh(t, e) {
  return P(t.head || t, e), e.sheet;
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function D(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Rt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function O(t) {
  return document.createElement(t);
}
function B(t) {
  return document.createTextNode(t);
}
function H() {
  return B(" ");
}
function Xr() {
  return B("");
}
function le(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function k(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Fh(t) {
  return Array.from(t.childNodes);
}
function Ce(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Dr(t, e) {
  t.value = e ?? "";
}
function Zi(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Hh(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let qn;
function pt(t) {
  qn = t;
}
function An() {
  if (!qn)
    throw new Error("Function called outside component initialization");
  return qn;
}
function ja(t) {
  An().$$.on_mount.push(t);
}
function Ot(t) {
  An().$$.on_destroy.push(t);
}
function Ye() {
  const t = An();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Hh(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Et(t, e) {
  return An().$$.context.set(t, e), e;
}
function He(t) {
  return An().$$.context.get(t);
}
const rn = [], me = [];
let cn = [];
const eo = [], Lh = /* @__PURE__ */ Promise.resolve();
let to = !1;
function Bh() {
  to || (to = !0, Lh.then(Ro));
}
function no(t) {
  cn.push(t);
}
function un(t) {
  eo.push(t);
}
const ui = /* @__PURE__ */ new Set();
let Zt = 0;
function Ro() {
  if (Zt !== 0)
    return;
  const t = qn;
  do {
    try {
      for (; Zt < rn.length; ) {
        const e = rn[Zt];
        Zt++, pt(e), jh(e.$$);
      }
    } catch (e) {
      throw rn.length = 0, Zt = 0, e;
    }
    for (pt(null), rn.length = 0, Zt = 0; me.length; )
      me.pop()();
    for (let e = 0; e < cn.length; e += 1) {
      const n = cn[e];
      ui.has(n) || (ui.add(n), n());
    }
    cn.length = 0;
  } while (rn.length);
  for (; eo.length; )
    eo.pop()();
  to = !1, ui.clear(), pt(t);
}
function jh(t) {
  if (t.fragment !== null) {
    t.update(), _t(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(no);
  }
}
function zh(t) {
  const e = [], n = [];
  cn.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), cn = e;
}
const Cr = /* @__PURE__ */ new Set();
let Bt;
function _e() {
  Bt = {
    r: 0,
    c: [],
    p: Bt
    // parent group
  };
}
function ve() {
  Bt.r || _t(Bt.c), Bt = Bt.p;
}
function $(t, e) {
  t && t.i && (Cr.delete(t), t.i(e));
}
function R(t, e, n, r) {
  if (t && t.o) {
    if (Cr.has(t))
      return;
    Cr.add(t), Bt.c.push(() => {
      Cr.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Mr(t, e) {
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
      d !== o && f && (_e(), R(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), ve());
    }) : e.block.d(1), a.c(), $(a, 1), a.m(e.mount(), e.anchor), u = !0), e.block = a, e.blocks && (e.blocks[o] = a), u && Ro();
  }
  if (Dh(t)) {
    const i = An();
    if (t.then((o) => {
      pt(i), r(e.then, 1, e.value, o), pt(null);
    }, (o) => {
      if (pt(i), r(e.catch, 2, e.error, o), pt(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function za(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function fn(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function q(t) {
  t && t.c();
}
function j(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || no(() => {
    const s = t.$$.on_mount.map(Ha).filter(La);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : _t(s), t.$$.on_mount = [];
  }), o.forEach(no);
}
function z(t, e) {
  const n = t.$$;
  n.fragment !== null && (zh(n.after_update), _t(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Wh(t, e) {
  t.$$.dirty[0] === -1 && (rn.push(t), Bh(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function pe(t, e, n, r, i, o, s, l = [-1]) {
  const c = qn;
  pt(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Y,
    not_equal: i,
    bound: Os(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Os(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, d, ...m) => {
    const p = m.length ? m[0] : d;
    return a.ctx && i(a.ctx[f], a.ctx[f] = p) && (!a.skip_bound && a.bound[f] && a.bound[f](p), u && Wh(t, f)), d;
  }) : [], a.update(), u = !0, _t(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Fh(e.target);
      a.fragment && a.fragment.l(f), f.forEach(D);
    } else
      a.fragment && a.fragment.c();
    e.intro && $(t.$$.fragment), j(t, e.target, e.anchor, e.customElement), Ro();
  }
  pt(c);
}
class ge {
  $destroy() {
    z(this, 1), this.$destroy = Y;
  }
  $on(e, n) {
    if (!La(n))
      return Y;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Mh(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Vh = {
  [Bn.toString()]: "TenantHttpService",
  [Ji.toString()]: "DataSourceHttpService",
  [Jt.toString()]: "EntityHttpService",
  [jn.toString()]: "EntityNameService",
  [Tn.toString()]: "BaseHttpService",
  [Ki.toString()]: "LiveValueService"
};
function Me(t, e = null) {
  let n = Vh[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? Fa;
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
function Ct(t, e, n = !0) {
  const r = window.dependencyContainer ?? Fa;
  try {
    if (r.isRegistered(t) && !n)
      return;
    r.registerInstance(t, e);
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
  return e;
}
function yb(t) {
  window.dependencyContainer = t;
}
function Oo(...t) {
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
const Wa = new go(!1), qh = Wa.asObservable().pipe(an((t) => !t), Wu(1)), Ds = {}, Do = /* @__PURE__ */ new Map(), Mo = new Re();
Mo.asObservable();
function Gh(t) {
  Do.set(t.name, t), Mo.next({
    type: "add",
    store: t
  });
}
function Jh(t) {
  Do.delete(t.name), Mo.next({
    type: "remove",
    store: t
  });
}
function Kh() {
  return Do;
}
class No extends go {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Gh(this);
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
    Ds.preStoreUpdate && (r = Ds.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, Wa.getValue() ? this.batchInProgress || (this.batchInProgress = !0, qh.subscribe(() => {
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
    return new Oe((i) => {
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
    Jh(this), this.reset();
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
function Xh(t, ...e) {
  const {
    state: n,
    config: r
  } = Oo(...e), {
    name: i
  } = t;
  return new No({
    name: i,
    state: n,
    config: r
  });
}
function Uo(t) {
  return {
    props: t,
    config: void 0
  };
}
function Yh(t, e) {
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
      initialized$: ln(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new Vl(1), l = Kt(o.getItem(i.key)).subscribe((a) => {
    a && t.update((u) => i.preStoreInit(Object.assign({}, u, a))), s.next(!0), s.complete();
  }), c = i.source(t).pipe(Qu(1), fa((a) => o.setItem(i.key, a))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      c.unsubscribe(), l.unsubscribe();
    }
  };
}
function Qh(t) {
  if (t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return ln(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), ln(!0);
      },
      removeItem(e) {
        return t.removeItem(e), ln(!0);
      }
    };
}
const Zh = Qh(typeof localStorage < "u" ? localStorage : void 0), en = [];
function Nr(t, e = Y) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (de(t, l) && (t = l, n)) {
      const c = !en.length;
      for (const a of r)
        a[1](), en.push(a, t);
      if (c) {
        for (let a = 0; a < en.length; a += 2)
          en[a][0](en[a + 1]);
        en.length = 0;
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
const Ms = Nr(J.Signal), { config: ep, state: tp } = Oo(
  Uo({
    queryWithSubGroups: !0,
    selectedTenant: null,
    pageSize: 10
  })
), zt = Xh({ name: "entity-select-selection" }, Uo({
  selectedEntities: []
})), Wt = new No({ state: tp, config: ep, name: "entity-select-global" });
Yh(Wt, {
  key: "entity-select-global",
  storage: Zh
});
const vn = (t) => {
  const e = Kh().get(`entity-select-type-${Ms}`);
  if (e)
    return e;
  const { state: n, config: r } = Oo(
    Uo({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new No({ state: n, config: r, name: `entity-select-type-${Ms}` });
};
function Ns(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function np(t) {
  let e;
  return {
    c() {
      e = O("div"), k(
        e,
        "class",
        /*tw*/
        t[5]`p-[10px]`
      );
    },
    m(n, r) {
      M(n, e, r);
    },
    p: Y,
    d(n) {
      n && D(e);
    }
  };
}
function rp(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? op : ip
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = O("div"), i.c(), k(
        e,
        "class",
        /*tw*/
        t[5]`flex items-center`
      );
    },
    m(o, s) {
      M(o, e, s), i.m(e, null);
    },
    p(o, s) {
      r === (r = n(o)) && i ? i.p(o, s) : (i.d(1), i = r(o), i && (i.c(), i.m(e, null)));
    },
    d(o) {
      o && D(e), i.d();
    }
  };
}
function ip(t) {
  let e, n, r, i;
  return {
    c() {
      e = O("span"), n = B("chevron_right"), k(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      M(o, e, s), P(e, n), r || (i = le(
        e,
        "click",
        /*click_handler_1*/
        t[9]
      ), r = !0);
    },
    p: Y,
    d(o) {
      o && D(e), r = !1, i();
    }
  };
}
function op(t) {
  let e, n, r, i;
  return {
    c() {
      e = O("span"), n = B("expand_more"), k(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      M(o, e, s), P(e, n), r || (i = le(
        e,
        "click",
        /*click_handler*/
        t[8]
      ), r = !0);
    },
    p: Y,
    d(o) {
      o && D(e), r = !1, i();
    }
  };
}
function Us(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = Fs(Ns(t, s, a));
  const c = (a) => R(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = O("div"), n = O("div"), r = H(), i = O("div");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      k(
        n,
        "class",
        /*tw*/
        t[5]`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`
      ), k(
        i,
        "class",
        /*tw*/
        t[5]`w-full`
      ), k(
        e,
        "class",
        /*tw*/
        t[5]`flex w-full`
      );
    },
    m(a, u) {
      M(a, e, u), P(e, n), P(e, r), P(e, i);
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
          const d = Ns(a, s, f);
          l[f] ? (l[f].p(d, u), $(l[f], 1)) : (l[f] = Fs(d), l[f].c(), $(l[f], 1), l[f].m(i, null));
        }
        for (_e(), f = s.length; f < l.length; f += 1)
          c(f);
        ve();
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
        R(l[u]);
      o = !1;
    },
    d(a) {
      a && D(e), Rt(l, a);
    }
  };
}
function Fs(t) {
  let e, n;
  return e = new Va({
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function sp(t) {
  var T, y;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((y = (T = t[1]) == null ? void 0 : T.Name) == null ? void 0 : y.Value) + ""
  ), c, a, u, f, d;
  function m(_, b) {
    return (
      /*children*/
      _[4].length > 0 ? rp : np
    );
  }
  let p = m(t), h = p(t), g = (
    /*expanded*/
    t[0] && Us(t)
  );
  return {
    c() {
      e = O("div"), n = O("div"), r = O("div"), i = H(), h.c(), o = H(), s = O("div"), c = B(l), a = H(), g && g.c(), k(
        s,
        "class",
        /*tw*/
        t[5]`overflow-hidden whitespace-nowrap text-ellipsis w-full`
      ), k(
        n,
        "class",
        /*tw*/
        t[5]`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`
      ), k(
        e,
        "class",
        /*tw*/
        t[5]`group cursor-pointer`
      );
    },
    m(_, b) {
      M(_, e, b), P(e, n), P(n, r), P(n, i), h.m(n, null), P(n, o), P(n, s), P(s, c), P(e, a), g && g.m(e, null), u = !0, f || (d = le(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), f = !0);
    },
    p(_, [b]) {
      var w, x;
      p === (p = m(_)) && h ? h.p(_, b) : (h.d(1), h = p(_), h && (h.c(), h.m(n, o))), (!u || b & /*group*/
      2) && l !== (l = /*group*/
      ((x = (w = _[1]) == null ? void 0 : w.Name) == null ? void 0 : x.Value) + "") && Ce(c, l), /*expanded*/
      _[0] ? g ? (g.p(_, b), b & /*expanded*/
      1 && $(g, 1)) : (g = Us(_), g.c(), $(g, 1), g.m(e, null)) : g && (_e(), R(g, 1, 1, () => {
        g = null;
      }), ve());
    },
    i(_) {
      u || ($(g), u = !0);
    },
    o(_) {
      R(g), u = !1;
    },
    d(_) {
      _ && D(e), h.d(), g && g.d(), f = !1, d();
    }
  };
}
function lp(t, e, n) {
  const r = Me(Jt);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, c = He("tw"), a = [], u = new Re(), f = vn();
  f.pipe(mt(u), Ju("selectedGroup")).subscribe((y) => {
    var _, b;
    (_ = y.selectedGroup) == null || _.Id, i == null || i.Id, i && ((b = y.selectedGroup) != null && b.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, a = await (await r.queryConfiguration(J.Group, { GroupId: i.Id })).data);
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
  Ot(() => {
    u.next(), u.complete();
  });
  const h = () => m(), g = () => m(), T = () => p();
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
    T
  ];
}
class Va extends ge {
  constructor(e) {
    super(), pe(this, e, lp, sp, de, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function ap(t) {
  Xt(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function cp(t) {
  let e;
  return {
    c() {
      e = B(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      M(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && Ce(
        e,
        /*icon*/
        n[0]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function up(t) {
  let e, n, r, i, o, s, l, c, a, u;
  const f = (
    /*#slots*/
    t[11].default
  ), d = Ve(
    f,
    t,
    /*$$scope*/
    t[10],
    null
  ), m = d || cp(t);
  return {
    c() {
      e = O("div"), n = O("div"), i = H(), o = O("span"), m && m.c(), k(n, "class", ce(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), k(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), k(o, "class", ce(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none`
      ) + " svelte-1b4yyah"), k(e, "class", s = ce(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), k(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(p, h) {
      M(p, e, h), P(e, n), P(e, i), P(e, o), m && m.m(o, null), c = !0, a || (u = [
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
        le(e, "blur", fp)
      ], a = !0);
    },
    p(p, [h]) {
      (!c || h & /*active*/
      16 && r !== (r = /*active*/
      p[4] ? "width: 100% !important; height: 100% !important" : "")) && k(n, "style", r), d ? d.p && (!c || h & /*$$scope*/
      1024) && Ge(
        d,
        f,
        p,
        /*$$scope*/
        p[10],
        c ? qe(
          f,
          /*$$scope*/
          p[10],
          h,
          null
        ) : Je(
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
      ) + " svelte-1b4yyah")) && k(e, "class", s), (!c || h & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      p[3] + "px; width: " + /*absoluteSize*/
      p[3] + "px; " + /*disabled*/
      (p[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && k(e, "style", l);
    },
    i(p) {
      c || ($(m, p), c = !0);
    },
    o(p) {
      R(m, p), c = !1;
    },
    d(p) {
      p && D(e), m && m.d(p), a = !1, _t(u);
    }
  };
}
const fp = (t) => {
};
function dp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: c = !1 } = e, a = He("tw"), u, f, d, m = Ye();
  function p(w) {
    c || (n(4, f = !0), d = w.timeStamp);
  }
  function h(w) {
    const x = w.timeStamp - d;
    x < 300 ? setTimeout(
      () => {
        n(4, f = !1);
      },
      300 - x
    ) : n(4, f = !1);
  }
  function g(w) {
    c || m("click", w);
  }
  const T = (w) => p(w), y = (w) => h(w), _ = (w) => h(w), b = (w) => g(w);
  return t.$$set = (w) => {
    "icon" in w && n(0, o = w.icon), "size" in w && n(9, s = w.size), "className" in w && n(1, l = w.className), "disabled" in w && n(2, c = w.disabled), "$$scope" in w && n(10, i = w.$$scope);
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
    T,
    y,
    _,
    b
  ];
}
class At extends ge {
  constructor(e) {
    super(), pe(
      this,
      e,
      dp,
      up,
      de,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      ap
    );
  }
}
function hp(t) {
  let e, n, r, i, o, s, l, c, a;
  return {
    c() {
      e = O("div"), n = O("input"), i = H(), o = O("div"), s = B(
        /*label*/
        t[1]
      ), k(n, "type", "checkbox"), k(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), k(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      M(u, e, f), P(e, n), t[7](n), P(e, i), P(e, o), P(o, s), c || (a = [
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
      u[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && k(n, "class", r), f & /*label*/
      2 && Ce(
        s,
        /*label*/
        u[1]
      ), f & /*tw*/
      4 && l !== (l = /*tw*/
      u[2]`flex items-center cursor-pointer`) && k(e, "class", l);
    },
    i: Y,
    o: Y,
    d(u) {
      u && D(e), t[7](null), c = !1, _t(a);
    }
  };
}
function pp(t, e, n) {
  let { readonly: r = !1 } = e, { label: i = "" } = e, { checked: o = !1 } = e, { indeterminate: s = !1 } = e, { tw: l = He("tw") } = e, c = Ye(), a;
  function u(h) {
    r || (n(5, o = !o), console.log("checked", o), c("change", { checked: o }));
  }
  function f(h) {
    setTimeout(() => {
      (a == null ? void 0 : a.checked) !== h && n(3, a.checked = h, a);
    });
  }
  function d(h) {
    me[h ? "unshift" : "push"](() => {
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
class tr extends ge {
  constructor(e) {
    super(), pe(this, e, pp, hp, de, {
      readonly: 0,
      label: 1,
      checked: 5,
      indeterminate: 6,
      tw: 2
    });
  }
}
function Hs(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function gp(t) {
  let e;
  return {
    c() {
      e = B("edit");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ls(t) {
  let e, n, r;
  return n = new Va({
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
      e = O("div"), q(n.$$.fragment), k(
        e,
        "class",
        /*tw*/
        t[7]`flex-[2] overflow-auto`
      );
    },
    m(i, o) {
      M(i, e, o), j(n, e, null), r = !0;
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
      R(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && D(e), z(n);
    }
  };
}
function Bs(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = zs(Hs(t, r, s));
  const o = (s) => R(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Xr();
    },
    m(s, l) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(s, l);
      M(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*tw, selectLastSelected, lastSelectedEntities, nameService, entityType, selectedEntityLookup, selectMultiple*/
      757) {
        r = /*lastSelectedEntities*/
        s[4];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const a = Hs(s, r, c);
          i[c] ? (i[c].p(a, l), $(i[c], 1)) : (i[c] = zs(a), i[c].c(), $(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (_e(), c = r.length; c < i.length; c += 1)
          o(c);
        ve();
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
        R(i[l]);
      n = !1;
    },
    d(s) {
      Rt(i, s), s && D(e);
    }
  };
}
function js(t) {
  let e, n;
  return e = new tr({
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function mp(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function bp(t) {
  let e = (
    /*name*/
    t[21] + ""
  ), n;
  return {
    c() {
      n = B(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i & /*entityType, lastSelectedEntities*/
      17 && e !== (e = /*name*/
      r[21] + "") && Ce(n, e);
    },
    d(r) {
      r && D(n);
    }
  };
}
function _p(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function zs(t) {
  let e, n, r, i, o, s, l, c = (
    /*selectMultiple*/
    t[2] && js(t)
  ), a = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: _p,
    then: bp,
    catch: mp,
    value: 21
  };
  Mr(r = /*nameService*/
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
      e = O("div"), c && c.c(), n = H(), a.block.c(), i = H(), k(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      M(f, e, d), c && c.m(e, null), P(e, n), a.block.m(e, a.anchor = null), a.mount = () => e, a.anchor = i, P(e, i), o = !0, s || (l = le(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? c ? (c.p(t, d), d & /*selectMultiple*/
      4 && $(c, 1)) : (c = js(t), c.c(), $(c, 1), c.m(e, n)) : c && (_e(), R(c, 1, 1, () => {
        c = null;
      }), ve()), a.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && Mr(r, a) || za(a, t, d);
    },
    i(f) {
      o || ($(c), o = !0);
    },
    o(f) {
      R(c), o = !1;
    },
    d(f) {
      f && D(e), c && c.d(), a.block.d(), a.token = null, a = null, s = !1, l();
    }
  };
}
function vp(t) {
  var y;
  let e, n, r = (
    /*selectedTenant*/
    ((y = t[1]) == null ? void 0 : y.Name) + ""
  ), i, o, s, l, c, a, u, f, d, m, p, h;
  s = new At({
    props: {
      size: "small",
      $$slots: { default: [gp] },
      $$scope: { ctx: t }
    }
  });
  let g = (
    /*rootGroup*/
    t[3] && Ls(t)
  ), T = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && Bs(t)
  );
  return {
    c() {
      e = O("div"), n = O("div"), i = B(r), o = H(), q(s.$$.fragment), l = H(), g && g.c(), c = H(), a = O("div"), u = O("div"), f = B("Zuletzt ausgewählt"), d = H(), T && T.c(), k(
        n,
        "class",
        /*tw*/
        t[7]`font-bold text-lg flex items-center cursor-pointer group`
      ), k(
        u,
        "class",
        /*tw*/
        t[7]`font-bold text-gray-700`
      ), k(
        a,
        "class",
        /*tw*/
        t[7]`flex-1`
      ), k(
        e,
        "class",
        /*tw*/
        t[7]`flex flex-col w-full h-full overflow-hidden`
      );
    },
    m(_, b) {
      M(_, e, b), P(e, n), P(n, i), P(n, o), j(s, n, null), P(e, l), g && g.m(e, null), P(e, c), P(e, a), P(a, u), P(u, f), P(a, d), T && T.m(a, null), m = !0, p || (h = le(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), p = !0);
    },
    p(_, [b]) {
      var x;
      (!m || b & /*selectedTenant*/
      2) && r !== (r = /*selectedTenant*/
      ((x = _[1]) == null ? void 0 : x.Name) + "") && Ce(i, r);
      const w = {};
      b & /*$$scope*/
      4194304 && (w.$$scope = { dirty: b, ctx: _ }), s.$set(w), /*rootGroup*/
      _[3] ? g ? (g.p(_, b), b & /*rootGroup*/
      8 && $(g, 1)) : (g = Ls(_), g.c(), $(g, 1), g.m(e, c)) : g && (_e(), R(g, 1, 1, () => {
        g = null;
      }), ve()), /*lastSelectedEntities*/
      _[4] && /*lastSelectedEntities*/
      _[4].length > 0 ? T ? (T.p(_, b), b & /*lastSelectedEntities*/
      16 && $(T, 1)) : (T = Bs(_), T.c(), $(T, 1), T.m(a, null)) : T && (_e(), R(T, 1, 1, () => {
        T = null;
      }), ve());
    },
    i(_) {
      m || ($(s.$$.fragment, _), $(g), $(T), m = !0);
    },
    o(_) {
      R(s.$$.fragment, _), R(g), R(T), m = !1;
    },
    d(_) {
      _ && D(e), z(s), g && g.d(), T && T.d(), p = !1, h();
    }
  };
}
function yp(t, e, n) {
  let r = Me(Jt), i = Me(jn), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, c = He("tw"), a = null, u, f = [], d = {}, m = Ye(), p = new Re(), h = vn();
  h.pipe(mt(p)).subscribe((w) => {
    n(4, u = w.lastSelectedEntities);
  });
  const g = zt.subscribe((w) => {
    f = w.selectedEntities, n(5, d = {});
    for (let x of f)
      n(5, d[x.Id] = !0, d);
  });
  async function T(w) {
    var x;
    try {
      n(3, a = await r.getEntityById(J.Group, w)), (!((x = h.value) != null && x.selectedGroup) || h.value.selectedGroup.Id != a.Id) && h.update((S) => ({ ...S, selectedGroup: a }));
    } catch (S) {
      console.log(S);
    }
  }
  async function y(w) {
    let x = await r.getEntityById(o, w);
    l ? d[w] ? f = f.filter((S) => S.Id !== w) : f.push(x) : f = [x], zt.update((S) => ({ ...S, selectedEntities: f }));
  }
  Ot(() => {
    console.log("onDestroy"), g.unsubscribe();
  });
  const _ = () => m("changeTenant"), b = (w) => y(w);
  return t.$$set = (w) => {
    "entityType" in w && n(0, o = w.entityType), "selectedTenant" in w && n(1, s = w.selectedTenant), "selectMultiple" in w && n(2, l = w.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*selectedTenant*/
    2 && (console.log("building sidebar", s), s && s.Root && T(s.Root));
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
class wp extends ge {
  constructor(e) {
    super(), pe(this, e, yp, vp, de, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const Sp = (t) => ({}), Ws = (t) => ({});
function Cp(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[2].default
  ), s = Ve(
    o,
    t,
    /*$$scope*/
    t[1],
    null
  ), l = (
    /*#slots*/
    t[2].pagination
  ), c = Ve(
    l,
    t,
    /*$$scope*/
    t[1],
    Ws
  );
  return {
    c() {
      e = O("div"), n = O("div"), s && s.c(), r = H(), c && c.c(), k(n, "class", "w-full overflow-auto flex-1"), k(e, "class", "flex flex-col h-full");
    },
    m(a, u) {
      M(a, e, u), P(e, n), s && s.m(n, null), P(e, r), c && c.m(e, null), i = !0;
    },
    p(a, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      2) && Ge(
        s,
        o,
        a,
        /*$$scope*/
        a[1],
        i ? qe(
          o,
          /*$$scope*/
          a[1],
          u,
          null
        ) : Je(
          /*$$scope*/
          a[1]
        ),
        null
      ), c && c.p && (!i || u & /*$$scope*/
      2) && Ge(
        c,
        l,
        a,
        /*$$scope*/
        a[1],
        i ? qe(
          l,
          /*$$scope*/
          a[1],
          u,
          Sp
        ) : Je(
          /*$$scope*/
          a[1]
        ),
        Ws
      );
    },
    i(a) {
      i || ($(s, a), $(c, a), i = !0);
    },
    o(a) {
      R(s, a), R(c, a), i = !1;
    },
    d(a) {
      a && D(e), s && s.d(a), c && c.d(a);
    }
  };
}
function Ep(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = Ye(), l = Nr(o);
  Et("audako:table:sort", l);
  let c = l.subscribe((a) => {
    s("sort", a);
  });
  return Ot(() => {
    c();
  }), t.$$set = (a) => {
    "startSort" in a && n(0, o = a.startSort), "$$scope" in a && n(1, i = a.$$scope);
  }, [o, i, r];
}
class kp extends ge {
  constructor(e) {
    super(), pe(this, e, Ep, Cp, de, { startSort: 0 });
  }
}
function Tp(t) {
  Xt(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function Ap(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[2].default
  ), i = Ve(
    r,
    t,
    /*$$scope*/
    t[1],
    null
  );
  return {
    c() {
      e = O("div"), i && i.c(), k(e, "class", "audako-tableheader-flexrow");
    },
    m(o, s) {
      M(o, e, s), i && i.m(e, null), t[3](e), n = !0;
    },
    p(o, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && Ge(
        i,
        r,
        o,
        /*$$scope*/
        o[1],
        n ? qe(
          r,
          /*$$scope*/
          o[1],
          s,
          null
        ) : Je(
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
      R(i, o), n = !1;
    },
    d(o) {
      o && D(e), i && i.d(o), t[3](null);
    }
  };
}
function xp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    me[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class Ip extends ge {
  constructor(e) {
    super(), pe(this, e, xp, Ap, de, {}, Tp);
  }
}
function $p(t) {
  Xt(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function Vs(t) {
  let e, n, r;
  return {
    c() {
      e = O("span"), n = B("north"), k(e, "class", "material-symbols-rounded text-xs transition-all"), k(e, "style", r = /*sortDirection*/
      (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(i, o) {
      M(i, e, o), P(e, n);
    },
    p(i, o) {
      o & /*sortDirection*/
      4 && r !== (r = /*sortDirection*/
      (i[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + /*sortDirection*/
      (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && k(e, "style", r);
    },
    d(i) {
      i && D(e);
    }
  };
}
function Pp(t) {
  let e, n, r, i, o, s, l;
  const c = (
    /*#slots*/
    t[6].default
  ), a = Ve(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let u = (
    /*sortable*/
    t[0] && Vs(t)
  );
  return {
    c() {
      e = O("div"), n = O("div"), a && a.c(), r = H(), u && u.c(), k(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      M(f, e, d), P(e, n), a && a.m(n, null), P(e, r), u && u.m(e, null), o = !0, s || (l = le(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(f, [d]) {
      a && a.p && (!o || d & /*$$scope*/
      32) && Ge(
        a,
        c,
        f,
        /*$$scope*/
        f[5],
        o ? qe(
          c,
          /*$$scope*/
          f[5],
          d,
          null
        ) : Je(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*sortable*/
      f[0] ? u ? u.p(f, d) : (u = Vs(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
      3 && i !== (i = "header-cell " + /*sortable*/
      (f[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      f[1] + " svelte-11sxgak")) && k(e, "class", i);
    },
    i(f) {
      o || ($(a, f), o = !0);
    },
    o(f) {
      R(a, f), o = !1;
    },
    d(f) {
      f && D(e), a && a.d(f), u && u.d(), s = !1, l();
    }
  };
}
function Rp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, c = "asc", a = He("audako:table:sort");
  console.log(a);
  let u = a.subscribe((m) => {
    s && (m == null ? void 0 : m.active) === s ? n(2, c = m.direction) : n(2, c = null);
  });
  function f() {
    c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), a.set(c ? { active: s, direction: c } : null);
  }
  Ot(() => {
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
class ro extends ge {
  constructor(e) {
    super(), pe(this, e, Rp, Pp, de, { sortable: 0, id: 4, container$class: 1 }, $p);
  }
}
function Op(t) {
  Xt(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function Dp(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[3].default
  ), l = Ve(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = O("div"), l && l.c(), k(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(c, a) {
      M(c, e, a), l && l.m(e, null), r = !0, i || (o = le(
        e,
        "click",
        /*onClick*/
        t[1]
      ), i = !0);
    },
    p(c, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      4) && Ge(
        l,
        s,
        c,
        /*$$scope*/
        c[2],
        r ? qe(
          s,
          /*$$scope*/
          c[2],
          a,
          null
        ) : Je(
          /*$$scope*/
          c[2]
        ),
        null
      ), (!r || a & /*flexrow$class*/
      1 && n !== (n = "audako-tablebody-flexrow " + /*flexrow$class*/
      c[0])) && k(e, "class", n);
    },
    i(c) {
      r || ($(l, c), r = !0);
    },
    o(c) {
      R(l, c), r = !1;
    },
    d(c) {
      c && D(e), l && l.d(c), i = !1, o();
    }
  };
}
function Mp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = Ye();
  function l(c) {
    s("click", c);
  }
  return t.$$set = (c) => {
    "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
  }, [o, l, i, r];
}
class Np extends ge {
  constructor(e) {
    super(), pe(this, e, Mp, Dp, de, { flexrow$class: 0 }, Op);
  }
}
function Up(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[3].default
  ), o = Ve(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = O("div"), o && o.c(), k(e, "class", n = /*tw*/
      t[1]`border-t overflow-hidden ${/*container$class*/
      t[0]}`);
    },
    m(s, l) {
      M(s, e, l), o && o.m(e, null), r = !0;
    },
    p(s, [l]) {
      o && o.p && (!r || l & /*$$scope*/
      4) && Ge(
        o,
        i,
        s,
        /*$$scope*/
        s[2],
        r ? qe(
          i,
          /*$$scope*/
          s[2],
          l,
          null
        ) : Je(
          /*$$scope*/
          s[2]
        ),
        null
      ), (!r || l & /*container$class*/
      1 && n !== (n = /*tw*/
      s[1]`border-t overflow-hidden ${/*container$class*/
      s[0]}`)) && k(e, "class", n);
    },
    i(s) {
      r || ($(o, s), r = !0);
    },
    o(s) {
      R(o, s), r = !1;
    },
    d(s) {
      s && D(e), o && o.d(s);
    }
  };
}
function Fp(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = He("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class io extends ge {
  constructor(e) {
    super(), pe(this, e, Fp, Up, de, { container$class: 0 });
  }
}
var cr, Hp = new Uint8Array(16);
function Lp() {
  if (!cr && (cr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !cr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return cr(Hp);
}
const Bp = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function jp(t) {
  return typeof t == "string" && Bp.test(t);
}
var ke = [];
for (var fi = 0; fi < 256; ++fi)
  ke.push((fi + 256).toString(16).substr(1));
function zp(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (ke[t[e + 0]] + ke[t[e + 1]] + ke[t[e + 2]] + ke[t[e + 3]] + "-" + ke[t[e + 4]] + ke[t[e + 5]] + "-" + ke[t[e + 6]] + ke[t[e + 7]] + "-" + ke[t[e + 8]] + ke[t[e + 9]] + "-" + ke[t[e + 10]] + ke[t[e + 11]] + ke[t[e + 12]] + ke[t[e + 13]] + ke[t[e + 14]] + ke[t[e + 15]]).toLowerCase();
  if (!jp(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function Wp(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || Lp)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return zp(r);
}
const Vp = {
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
class Ur {
  constructor(e) {
    it(this, "_popupContainer");
    it(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...Vp, ...r }, console.log("openPopup", r);
    const i = Wp(), o = new Re(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
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
      afterClosed: Ln(o).then(() => console.log("afterClosed")),
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
var qp = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Gp(t) {
  return qp.get(t);
}
function Jp(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function Kp(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var ie = (t, e) => !!~t.indexOf(e), X = (t, e = "-") => t.join(e), oo = (t, e) => X(t.filter(Boolean), e), K = (t, e = 1) => t.slice(e), Xp = (t) => t, qa = () => {
}, lt = (t) => t[0].toUpperCase() + K(t), Fo = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Vt = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, Ga = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, Ja = (t, e) => !ie("@:&", t[0]) && (ie("rg", (typeof e)[5]) || Array.isArray(e)), Ho = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Vt(e[i], n);
  return Ja(i, o) ? r[Fo(i)] = o : r[i] = i[0] == "@" && ie("figa", i[1]) ? (r[i] || []).concat(o) : Ho(r[i] || {}, o, n), r;
}, t) : t, Ka = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), Yr = (t) => (Array.isArray(t) || (t = [t]), "@media " + X(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || X(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), di = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Yp = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, bt, dn, kt = (t = "") => (bt.push(t), ""), Lo = (t) => {
  bt.length = Math.max(bt.lastIndexOf("") + ~~t, 0);
}, Qp = (t) => t && !ie("!:", t[0]), Zp = (t) => t[0] == ":", Xa = (t, e) => {
  dn.push({
    v: bt.filter(Zp),
    d: t,
    n: e,
    i: ie(bt, "!"),
    $: ""
  });
}, qs = (t) => {
  const e = t[0] == "-";
  e && (t = K(t));
  const n = X(bt.filter(Qp));
  return Xa(t == "&" ? n : (n && n + "-") + t, e), "";
}, Fn = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && kt(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && kt(n), kt();
        break;
      case "!":
        kt(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && qs(n), Lo(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? kt(":" + n) : n.slice(-1) == "-" ? kt(n.slice(0, -1)) : qs(n));
}, Ya = (t) => {
  kt(), Fr(t), Lo();
}, eg = (t, e) => {
  if (e) {
    kt();
    const n = ie("tbu", (typeof e)[1]);
    Fn(t, n), n && Ya(e), Lo();
  }
}, Fr = (t) => {
  switch (typeof t) {
    case "string":
      Fn(t);
      break;
    case "function":
      Xa(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(Ya) : t && Object.keys(t).forEach((e) => {
        eg(e, t[e]);
      });
  }
}, Gs = /* @__PURE__ */ new WeakMap(), tg = (t) => {
  let e = Gs.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || ie(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (c) => {
          o == n && (r = ""), r += i, ie("rg", (typeof c)[5]) ? r += c : c && (Fn(r), r = "", Fr(c)), o == t.length - 1 && Fn(r);
        };
      const s = dn = [];
      Fn(i);
      const l = [...bt];
      return dn = [], (c) => {
        dn.push(...s), bt = [...l], c && Fr(c);
      };
    }), Gs.set(t, e);
  }
  return e;
}, so = (t) => (bt = [], dn = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? tg(t[0]).forEach((e, n) => e(t[n + 1])) : Fr(t), dn), lo, ng = (t, e) => (typeof e == "function" && (lo = !1), e), rg = (t) => {
  lo = !0;
  const e = JSON.stringify(t, ng);
  return lo && e;
}, Js = /* @__PURE__ */ new WeakMap(), ig = (t, e) => {
  const n = rg(e);
  let r;
  if (n) {
    var i = Js.get(t);
    i || Js.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Vt(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), Ga(i, 1e4))), r;
}, og = (t, { css: e }) => e(so(t)), sg = (...t) => ig(og, t), Qa = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[oo([r, l, i])] = e, s), {});
  }
}, lg = /* @__PURE__ */ Qa((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), Hr = (t) => {
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
}, Za = /* @__PURE__ */ Qa(Hr), ag = (t, e) => t + (e[1] == ":" ? K(e, 2) + ":" : K(e)) + ":", Ks = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(ag, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, I, Ht, Q, ur = (t) => t == "cols" ? "columns" : "rows", nr = (t) => (e, n, r) => ({
  [t]: r + ((I = X(e)) && "-" + I)
}), fe = (t, e) => (n, r, i) => (I = X(n, e)) && {
  [t || i]: I
}, Ie = (t) => (e, { theme: n }, r) => (I = n(t || r, e)) && {
  [t || r]: I
}, fr = (t, e) => (n, { theme: r }, i) => (I = r(t || i, n, X(n, e))) && {
  [t || i]: I
}, st = (t, e) => (n, r) => t(n, r, e), dt = nr("display"), Rn = nr("position"), tn = nr("textTransform"), nn = nr("textDecoration"), dr = nr("fontStyle"), wt = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), hr = (t, { theme: e }, n) => (I = e("inset", t)) && { [n]: I }, Nn = (t, e, n, r = n) => (I = e(r + "Opacity", K(t))) && {
  [`--tw-${n}-opacity`]: I
}, hi = (t, e) => Math.round(parseInt(t, 16) * e), Lr = (t, e, n) => t && t[0] == "#" && (I = (t.length - 1) / 3) && (Q = [17, 1, 0.062272][I - 1]) ? `rgba(${hi(t.substr(1, I), Q)},${hi(t.substr(1 + I, I), Q)},${hi(t.substr(1 + 2 * I, I), Q)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, Er = (t, e, n) => n && typeof n == "string" ? (I = Lr(n, e + "-opacity")) && I !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, I]
} : { [t]: n } : void 0, Xs = (t) => (Q = Lr(t, "", "0")) == I ? "transparent" : Q, Ys = (t, { theme: e }, n, r, i, o) => (I = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (Q = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [Q]: "1"
} : {
  [Q]: "0",
  [oo([i, I[0], o])]: (Ht = e(r, K(t))) && `calc(${Ht} * var(${Q}))`,
  [oo([i, I[1], o])]: Ht && [Ht, `calc(${Ht} * calc(1 - var(${Q})))`]
} : void 0, ec = (t, e) => e[0] && {
  [t]: (ie("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, pi = (t) => (e) => ie(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : ec(t, e), Qs = (t) => (e, { theme: n }) => {
  if (I = n("grid" + lt(t), e, ""))
    return { ["grid-" + t]: I };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return (I = n("grid" + lt(t) + lt(e[0]), K(e), X(K(e)))) && {
        [`grid-${t}-${e[0]}`]: I
      };
  }
}, tc = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return fe("borderStyle")(t);
    case "collapse":
    case "separate":
      return fe("borderCollapse")(t);
    case "opacity":
      return Nn(t, e, n);
  }
  return (I = e(n + "Width", t, "")) ? { borderWidth: I } : Er("borderColor", n, e(n + "Color", t));
}, cg = (t, e, n) => {
  var r;
  const i = (r = Hr(t[0])) == null ? void 0 : r.map(lt);
  i && (t = K(t));
  let o = tc(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, c]) => {
    if (l.startsWith("border"))
      for (const a of i)
        s[l.slice(0, 6) + a + l.slice(6)] = c;
    else
      s[l] = c;
    return s;
  }, {})), o;
}, ao = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", gi = (t, e, n) => t[0] && (I = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && I,
  [`--tw-${n}-y`]: t[0] !== "x" && I,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${I})`, ao()]
}, nc = (t) => (e, n, r) => r[1] ? Za(n.theme(t, e), r[1], t) : Ie(t)(e, n, r), Mt = nc("padding"), Nt = nc("margin"), Zs = (t, { theme: e }, n) => (I = { w: "width", h: "height" }[t[0]]) && {
  [I = `${n}${lt(I)}`]: e(I, K(t))
}, Qe = (t, { theme: e }, n) => {
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
  return Q = t.shift(), ie(["hue", "drop"], Q) && (Q += lt(t.shift())), (I = e(i ? "backdrop" + lt(Q) : Q, t)) && {
    ["--tw-" + i + Q]: (Array.isArray(I) ? I : [I]).map((o) => `${Fo(Q)}(${o})`).join(" ")
  };
}, ug = {
  group: (t, { tag: e }, n) => e(X([n, ...t])),
  hidden: st(dt, "none"),
  inline: dt,
  block: dt,
  contents: dt,
  flow: dt,
  table: (t, e, n) => ie(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : dt(t, e, n),
  flex(t, e, n) {
    switch (t[0]) {
      case "row":
      case "col":
        return {
          flexDirection: X(t[0] == "col" ? ["column", ...K(t)] : t)
        };
      case "nowrap":
      case "wrap":
        return { flexWrap: X(t) };
      case "grow":
      case "shrink":
        return I = e.theme("flex" + lt(t[0]), K(t), t[1] || 1), I != null && {
          ["flex-" + t[0]]: "" + I
        };
    }
    return (I = e.theme("flex", t, "")) ? { flex: I } : dt(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return (I = e.theme("gridTemplate" + lt(ur(t[0])), K(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : X(K(t)))) && {
          ["gridTemplate-" + ur(t[0])]: I
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: X(t[1] == "col" ? ["column", ...K(t, 2)] : K(t), " ")
        };
    }
    return dt(t, e, n);
  },
  auto: (t, { theme: e }) => ie(["cols", "rows"], t[0]) && (I = e("gridAuto" + lt(ur(t[0])), K(t), X(K(t)))) && {
    ["gridAuto-" + ur(t[0])]: I
  },
  static: Rn,
  fixed: Rn,
  absolute: Rn,
  relative: Rn,
  sticky: Rn,
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
  appearance: fe(),
  cursor: fr(),
  float: fe(),
  clear: fe(),
  decoration: fe("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: fe(),
  "mix-blend": fe("mixBlendMode"),
  top: hr,
  right: hr,
  bottom: hr,
  left: hr,
  inset: (t, { theme: e }) => (I = Hr(t[0])) ? Za(e("inset", K(t)), t[0]) : (I = e("inset", t)) && {
    top: I,
    right: I,
    bottom: I,
    left: I
  },
  underline: nn,
  "line-through": nn,
  "no-underline": st(nn, "none"),
  "text-underline": st(nn, "underline"),
  "text-no-underline": st(nn, "none"),
  "text-line-through": st(nn, "line-through"),
  uppercase: tn,
  lowercase: tn,
  capitalize: tn,
  "normal-case": st(tn, "none"),
  "text-normal-case": st(tn, "none"),
  italic: dr,
  "not-italic": st(dr, "normal"),
  "font-italic": st(dr, "italic"),
  "font-not-italic": st(dr, "normal"),
  font: (t, e, n) => (I = e.theme("fontFamily", t, "")) ? { fontFamily: I } : Ie("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: ie(["start", "end"], t[0]) ? "flex-" + t[0] : X(t)
  },
  "justify-self": fe(),
  "justify-items": fe(),
  justify: pi("justifyContent"),
  content: pi("alignContent"),
  self: pi("alignSelf"),
  place: (t) => t[0] && ec("place-" + t[0], K(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: Qs("column"),
  row: Qs("row"),
  duration: Ie("transitionDuration"),
  delay: Ie("transitionDelay"),
  tracking: Ie("letterSpacing"),
  leading: Ie("lineHeight"),
  z: Ie("zIndex"),
  opacity: Ie(),
  ease: Ie("transitionTimingFunction"),
  p: Mt,
  py: Mt,
  px: Mt,
  pt: Mt,
  pr: Mt,
  pb: Mt,
  pl: Mt,
  m: Nt,
  my: Nt,
  mx: Nt,
  mt: Nt,
  mr: Nt,
  mb: Nt,
  ml: Nt,
  w: Ie("width"),
  h: Ie("height"),
  min: Zs,
  max: Zs,
  fill: Ie(),
  order: Ie(),
  origin: fr("transformOrigin", " "),
  select: fe("userSelect"),
  "pointer-events": fe(),
  align: fe("verticalAlign"),
  whitespace: fe("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: wt("ordinal"),
  "slashed-zero": wt("slashed-zero"),
  "lining-nums": wt("numeric-figure"),
  "oldstyle-nums": wt("numeric-figure"),
  "proportional-nums": wt("numeric-spacing"),
  "tabular-nums": wt("numeric-spacing"),
  "diagonal-fractions": wt("numeric-fraction"),
  "stacked-fractions": wt("numeric-fraction"),
  overflow: (t, e, n) => ie(["ellipsis", "clip"], t[0]) ? fe("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : fe()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: ao(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => (I = e("rotate", t)) && {
    "--tw-rotate": I,
    transform: [`rotate(${I})`, ao()]
  },
  scale: gi,
  translate: gi,
  skew: gi,
  gap: (t, e, n) => (I = { x: "column", y: "row" }[t[0]]) ? { [I + "Gap"]: e.theme("gap", K(t)) } : Ie("gap")(t, e, n),
  stroke: (t, e, n) => (I = e.theme("stroke", t, "")) ? { stroke: I } : Ie("strokeWidth")(t, e, n),
  outline: (t, { theme: e }) => (I = e("outline", t)) && {
    outline: I[0],
    outlineOffset: I[1]
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
        return tn([], I, t[0]);
      case "opacity":
        return Nn(t, e, n);
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
        return fe("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return fe("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && fe("backgroundRepeat")(t);
      case "repeat":
        return ie("xy", t[1]) ? fe("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return Nn(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return fe("background-blend-mode")(K(t));
      case "gradient":
        if (t[1] == "to" && (I = Hr(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${X(I, " ")},var(--tw-gradient-stops))`
          };
    }
    return (I = e("backgroundPosition", t, "")) ? { backgroundPosition: I } : (I = e("backgroundSize", t, "")) ? { backgroundSize: I } : (I = e("backgroundImage", t, "")) ? { backgroundImage: I } : Er("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => (I = e("gradientColorStops", t)) && {
    "--tw-gradient-from": I,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Xs(I)})`
  },
  via: (t, { theme: e }) => (I = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${I},var(--tw-gradient-to,${Xs(I)})`
  },
  to: (t, { theme: e }) => (I = e("gradientColorStops", t)) && {
    "--tw-gradient-to": I
  },
  border: cg,
  divide: (t, e, n) => (I = Ys(t, e, n, "divideWidth", "border", "width") || tc(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": I
  },
  space: (t, e, n) => (I = Ys(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": I
  },
  placeholder: (t, { theme: e }, n) => (I = t[0] == "opacity" ? Nn(t, e, n) : Er("color", "placeholder", e("placeholderColor", t))) && {
    "&::placeholder": I
  },
  shadow: (t, { theme: e }) => (I = e("boxShadow", t)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": I == "none" ? "0 0 transparent" : I,
    boxShadow: [
      I,
      "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"
    ]
  },
  animate: (t, { theme: e, tag: n }) => {
    if (Q = e("animation", t)) {
      const r = Q.split(" ");
      return (I = e("keyframes", r[0], Ht = {})) !== Ht ? (Q = n(r[0])) && {
        animation: Q + " " + X(K(r), " "),
        ["@keyframes " + Q]: I
      } : { animation: Q };
    }
  },
  ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return Nn(t, e, n);
      case "offset":
        return (I = e("ringOffsetWidth", K(t), "")) ? {
          "--tw-ring-offset-width": I
        } : {
          "--tw-ring-offset-color": e("ringOffsetColor", K(t))
        };
    }
    return (I = e("ringWidth", t, "")) ? {
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${I} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": e("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": e("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": Lr(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": Lr(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => ie(["contain", "cover", "fill", "none", "scale-down"], X(t)) ? { objectFit: X(t) } : fr("objectPosition", " ")(t, e, n),
  list: (t, e, n) => X(t) == "item" ? dt(t, e, n) : ie(["inside", "outside"], X(t)) ? { listStylePosition: t[0] } : fr("listStyleType")(t, e, n),
  rounded: (t, e, n) => lg(e.theme("borderRadius", K(t), ""), t[0], "border", "radius") || Ie("borderRadius")(t, e, n),
  "transition-none": { transitionProperty: "none" },
  transition: (t, { theme: e }) => ({
    transitionProperty: e("transitionProperty", t),
    transitionTimingFunction: e("transitionTimingFunction", ""),
    transitionDuration: e("transitionDuration", "")
  }),
  container: (t, { theme: e }) => {
    const { screens: n = e("screens"), center: r, padding: i } = e("container"), o = (s) => (I = i && (typeof i == "string" ? i : i[s] || i.DEFAULT)) ? {
      paddingRight: I,
      paddingLeft: I
    } : {};
    return Object.keys(n).reduce((s, l) => ((Q = n[l]) && typeof Q == "string" && (s[Yr(Q)] = {
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
  filter: Qe,
  blur: Qe,
  brightness: Qe,
  contrast: Qe,
  grayscale: Qe,
  "hue-rotate": Qe,
  invert: Qe,
  saturate: Qe,
  sepia: Qe,
  "drop-shadow": Qe,
  backdrop: Qe
}, fg = (t) => ({
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
}), dg = {
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
}, el = "__twind", hg = (t) => {
  let e = self[el];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = el, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, rc = ({
  nonce: t,
  target: e = hg(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, pg = () => ({
  target: null,
  insert: qa
}), Bo = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + X(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), tl = /* @__PURE__ */ Bo((t) => console.warn(t)), gg = /* @__PURE__ */ Bo((t) => {
  throw new Error(t);
}), mg = /* @__PURE__ */ Bo(qa), ht = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, bg = (t, e, n) => {
  let r = "";
  const i = Gp(t);
  i && (r += `${ht(i, e, n)};`);
  let o = Jp(t);
  return o & 1 && (r += `-webkit-${ht(t, e, n)};`), o & 2 && (r += `-moz-${ht(t, e, n)};`), o & 4 && (r += `-ms-${ht(t, e, n)};`), o = Kp(t, e), o & 1 && (r += `${ht(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${ht(t, `-moz-${e}`, n)};`), o & 4 && (r += `${ht(t, `-ms-${e}`, n)};`), r += ht(t, e, n), r;
}, On = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, St = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, Fe = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, re = (t) => (e) => e(t), _g = {
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
    .../* @__PURE__ */ Fe(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ Fe(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ Fe(64, "rem", 4, 16, 4),
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
    .../* @__PURE__ */ Fe(200, "", 100, 0, 50),
    .../* @__PURE__ */ Fe(110, "", 100, 90, 5),
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
    .../* @__PURE__ */ St(8, "px")
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
    .../* @__PURE__ */ Fe(200, "", 100, 0, 50),
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
    ...On(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...On(2, 4),
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
    .../* @__PURE__ */ Fe(10, "rem", 4, 3)
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
    .../* @__PURE__ */ Fe(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ Fe(12, "", 1, 1)
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
  ringOffsetWidth: /* @__PURE__ */ St(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ St(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ St(2, "deg"),
    .../* @__PURE__ */ St(12, "deg", 3),
    .../* @__PURE__ */ St(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ Fe(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ Fe(150, "", 100, 0, 50),
    .../* @__PURE__ */ Fe(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ St(2, "deg"),
    .../* @__PURE__ */ St(12, "deg", 3)
  },
  space: /* @__PURE__ */ re("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ Fe(2),
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
    ...On(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...On(2, 6),
    ...On(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ Fe(50, "", 1, 0, 10)
  }
}, ic = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[X(n)] = i, e[X(n, ".")] = i);
  const o = [...n, r];
  e[X(o)] = i, e[X(o, ".")] = i, i && typeof i == "object" && ic(i, e, o);
}, e), e), vg = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, yg = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && ie(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (ie(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), wg = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ..._g, ...t }, r = (o, s) => {
    const l = o && o[s], c = typeof l == "function" ? l(i, vg) : l;
    return c && s == "colors" ? ic(c) : c;
  }, i = (o, s, l) => {
    const c = o.split(".");
    o = c[0], c.length > 1 && (l = s, s = X(K(c), "."));
    let a = e.get(o);
    if (a || (e.set(o, a = { ...r(n, o) }), Object.assign(a, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? X(s) : s) || "DEFAULT";
      const u = yg(o, s) || a[s];
      return u == null ? l : Array.isArray(u) && !ie(["fontSize", "outline", "dropShadow"], o) ? X(u, ",") : u;
    }
    return a;
  };
  return i;
}, Sg = (t, e) => (n, r) => {
  if (typeof n.d == "function")
    return n.d(e);
  const i = n.d.split(/-(?![^[]*])/g);
  if (!r && i[0] == "tw" && n.$ == n.d)
    return n.$;
  for (let o = i.length; o; o--) {
    const s = X(i.slice(0, o));
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      const l = t[s];
      return typeof l == "function" ? l(K(i, o), e, s) : typeof l == "string" ? e[r ? "css" : "tw"](l) : l;
    }
  }
}, Dn, oc = /^:(group(?:(?!-focus).+?)*)-(.+)$/, sc = /^(:not)-(.+)/, lc = (t) => t[1] == "[" ? K(t) : t, Cg = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (Dn = n("screens", K(s), "")) ? { [Yr(Dn)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (Dn = oc.exec(s)) ? { [`.${Ka(r(Dn[1]))}:${Dn[2]} &`]: o } : {
    [e[K(s)] || "&" + s.replace(sc, (l, c, a) => c + "(" + lc(":" + a) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, De, ac = (t) => (((De = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +De[1] / (De[2] ? 15 : 1) / 10 : 0) & 31) << 22, cc = (t) => {
  De = 0;
  for (let e = t.length; e--; )
    De += ie("-:,", t[e]);
  return De;
}, uc = (t) => (cc(t) & 15) << 18, Eg = [
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
], kg = (t) => 1 << (~(De = Eg.indexOf(t.replace(oc, ":$2").slice(3, 8))) ? De : 17), Tg = (t, e) => (n, r) => n | ((De = t("screens", K(r), "")) ? 1 << 27 | ac(Yr(De)) : r == ":dark" ? 1 << 30 : (De = e[r] || r.replace(sc, ":$2"))[0] == "@" ? uc(De) : kg(r)), Ag = (t) => t[0] == "-" ? 0 : cc(t) + ((De = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!De[1] || -!!De[2] : 0) + 1, mi = (t, e) => e + "{" + t + "}", xg = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, m) => (f = s(f), Array.isArray(d) ? X(d.filter(Boolean).map((p) => t(f, s(p), m)), ";") : t(f, s(d), m));
  let c;
  const a = (f, d, m, p, h) => {
    if (Array.isArray(p)) {
      p.forEach((_) => _ && a(f, d, m, _, h));
      return;
    }
    let g = "", T = 0, y = 0;
    p["@apply"] && (p = Ho(Vt(sg(p["@apply"]), n), { ...p, "@apply": void 0 }, n)), Object.keys(p).forEach((_) => {
      const b = Vt(p[_], n);
      if (Ja(_, b)) {
        if (b !== "" && _.length > 1) {
          const w = Fo(_);
          y += 1, T = Math.max(T, Ag(w)), g = (g && g + ";") + l(w, b, h);
        }
      } else if (b)
        if (_ == ":global" && (_ = "@global"), _[0] == "@")
          if (_[1] == "g")
            a([], "", 0, b, h);
          else if (_[1] == "f")
            a([], _, 0, b, h);
          else if (_[1] == "k") {
            const w = c.length;
            a([], "", 0, b, h);
            const x = c.splice(w, c.length - w);
            c.push({
              r: mi(X(x.map((S) => S.r), ""), _),
              p: x.reduce((S, E) => S + E.p, 0)
            });
          } else
            _[1] == "i" ? (Array.isArray(b) ? b : [b]).forEach((w) => w && c.push({ p: 0, r: `${_} ${w};` })) : (_[2] == "c" && (_ = Yr(n.theme("screens", K(_, 8).trim()))), a([...f, _], d, m | ac(_) | uc(_), b, h));
        else
          a(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (w, x, S) => _.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (E, N, W) => (ie(N, "&") ? N.replace(/&/g, x) : (x && x + " ") + N) + W) + S) : _, m, b, h);
    }), y && c.push({
      r: f.reduceRight(mi, mi(g, d)),
      p: m * (1 << 8) + ((Math.max(0, 15 - y) & 15) << 4 | (T || 15) & 15)
    });
  }, u = Tg(r, e);
  return (f, d, m, p = 0) => (p <<= 28, c = [], a([], d ? "." + Ka(d) : "", m ? m.v.reduceRight(u, p) : p, f, m && m.i), c);
}, Ig = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const c = Yp(i, l);
      try {
        t.insert(s, c), i.splice(c, 0, l);
      } catch (a) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: a }, r);
      }
    }
  };
}, bi = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, $g = (t) => (typeof t == "string" ? { t: gg, a: tl, i: mg }[t[1]] : t) || tl, Pg = { _: { value: "", writable: !0 } }, Rg = (t = {}) => {
  const e = wg(t.theme), n = $g(t.mode), r = bi(t.hash, !1, !1, di), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], c = {
    tw: (...S) => w(S),
    theme: (S, E, N) => {
      var W;
      const Z = (W = e(S, E, N)) != null ? W : n.unknown(S, E == null || Array.isArray(E) ? E : E.split("."), N != null, c);
      return o.n && Z && ie("rg", (typeof Z)[5]) ? `calc(${Z} * -1)` : Z;
    },
    tag: (S) => r ? r(S) : S,
    css: (S) => {
      s++;
      const E = l.length;
      try {
        (typeof S == "string" ? so([S]) : S).forEach(b);
        const N = Object.create(null, Pg);
        for (let W = E; W < l.length; W++) {
          const Z = l[W];
          if (Z)
            switch (typeof Z) {
              case "object":
                Ho(N, Z, c);
                break;
              case "string":
                N._ += (N._ && " ") + Z;
            }
        }
        return N;
      } finally {
        l.length = E, s--;
      }
    }
  }, a = Sg({ ...ug, ...t.plugins }, c), u = (S) => {
    const E = o;
    o = S;
    try {
      return Vt(a(S), c);
    } finally {
      o = E;
    }
  }, f = { ...dg, ...t.variants }, d = Cg(t.darkMode || "media", f, c), m = xg(bi(t.prefix, bg, ht), f, c), p = t.sheet || (typeof window > "u" ? pg() : rc(t)), { init: h = (S) => S() } = p, g = Ig(p, n, h, c);
  let T;
  h((S = /* @__PURE__ */ new Map()) => T = S);
  const y = /* @__PURE__ */ new WeakMap(), _ = (S, E) => S == "_" ? void 0 : typeof E == "function" ? JSON.stringify(Vt(E, c), _) : E, b = (S) => {
    !s && o.v.length && (S = { ...S, v: [...o.v, ...S.v], $: "" }), S.$ || (S.$ = Ks(S, y.get(S.d)));
    let E = s ? null : T.get(S.$);
    if (E == null) {
      let N = u(S);
      if (S.$ || (S.$ = di(JSON.stringify(N, _)), y.set(S.d, S.$), S.$ = Ks(S, S.$)), N && typeof N == "object")
        if (S.v = S.v.map(lc), i && (S.i = i), N = d(N, S), s)
          l.push(N);
        else {
          const W = typeof S.d == "function" ? typeof N._ == "string" ? 1 : 3 : 2;
          E = r || typeof S.d == "function" ? (r || di)(W + S.$) : S.$, m(N, E, S, W).forEach(g), N._ && (E += " " + N._);
        }
      else
        typeof N == "string" ? E = N : (E = S.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: E }, c)), s && typeof S.d != "function" && l.push(E);
      s || (T.set(S.$, E), Ga(T, 3e4));
    }
    return E;
  }, w = (S) => X(so(S).map(b).filter(Boolean), " "), x = bi(t.preflight, Xp, !1);
  if (x) {
    const S = fg(e), E = m(typeof x == "function" ? Vt(x(S, c), c) || S : { ...S, ...x });
    h((N = (E.forEach(g), !0)) => N);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, c),
    process: w
  };
}, fc = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = Rg(o));
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
}, { tw: Ke, setup: Og } = /* @__PURE__ */ fc();
function Dg(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[14].default
  ), s = Ve(
    o,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = O("div"), n = O("div"), s && s.c(), Zi(n, "display", "none"), k(n, "class", r = Ke` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), k(e, "class", "popup-element-wrapper"), Zi(e, "position", "absolute");
    },
    m(l, c) {
      M(l, e, c), P(e, n), s && s.m(n, null), t[15](n), t[16](e), i = !0;
    },
    p(l, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      8192) && Ge(
        s,
        o,
        l,
        /*$$scope*/
        l[13],
        i ? qe(
          o,
          /*$$scope*/
          l[13],
          c,
          null
        ) : Je(
          /*$$scope*/
          l[13]
        ),
        null
      ), (!i || c & /*popupClass*/
      1 && r !== (r = Ke` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      l[0]}`)) && k(n, "class", r);
    },
    i(l) {
      i || ($(s, l), i = !0);
    },
    o(l) {
      R(s, l), i = !1;
    },
    d(l) {
      l && D(e), s && s.d(l), t[15](null), t[16](null);
    }
  };
}
function Mg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { closeOnEscape: s = !0 } = e, { sizeToAnchor: l = !1 } = e, { anchorElement: c = null } = e, { position: a = null } = e, { popupClass: u = "" } = e, { preferedVerticalAlignment: f = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: m = { x: 0, y: 0 } } = e, p = Me("PopupContainerService", new Ur(document.body)), h, g, T;
  function y() {
    const S = {
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
    const E = c == null ? void 0 : c.offsetWidth, N = h.offsetWidth;
    E && l && N < E && (console.log("setting width"), n(1, h.style.width = `${E}px`, h)), n(1, h.style.position = "static", h), g = p.openPopup("popup-container", h, S), g.afterClosed.then(() => {
      b(), T.appendChild(h), console.log("closing popup", h.getBoundingClientRect());
    });
  }
  function _() {
    g == null || g.close();
  }
  function b() {
    n(1, h.style.display = "none", h), n(1, h.style.position = "absolute", h), n(1, h.style.width = "auto", h);
  }
  function w(S) {
    me[S ? "unshift" : "push"](() => {
      h = S, n(1, h);
    });
  }
  function x(S) {
    me[S ? "unshift" : "push"](() => {
      T = S, n(2, T);
    });
  }
  return t.$$set = (S) => {
    "closeOnClick" in S && n(3, o = S.closeOnClick), "closeOnEscape" in S && n(4, s = S.closeOnEscape), "sizeToAnchor" in S && n(5, l = S.sizeToAnchor), "anchorElement" in S && n(6, c = S.anchorElement), "position" in S && n(7, a = S.position), "popupClass" in S && n(0, u = S.popupClass), "preferedVerticalAlignment" in S && n(8, f = S.preferedVerticalAlignment), "preferedHorizontalAlignment" in S && n(9, d = S.preferedHorizontalAlignment), "positionOffset" in S && n(10, m = S.positionOffset), "$$scope" in S && n(13, i = S.$$scope);
  }, [
    u,
    h,
    T,
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
    w,
    x
  ];
}
class dc extends ge {
  constructor(e) {
    super(), pe(this, e, Mg, Dg, de, {
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
function Ng(t) {
  Xt(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function nl(t) {
  let e;
  return {
    c() {
      e = O("div"), k(e, "class", ce(Ke`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
    },
    m(n, r) {
      M(n, e, r);
    },
    p: Y,
    d(n) {
      n && D(e);
    }
  };
}
function Ug(t) {
  let e, n, r, i;
  function o(l) {
    t[7](l);
  }
  let s = { tw: Ke, readonly: !0 };
  return (
    /*isSelected*/
    t[0] !== void 0 && (s.checked = /*isSelected*/
    t[0]), n = new tr({ props: s }), me.push(() => fn(n, "checked", o)), {
      c() {
        e = O("div"), q(n.$$.fragment), k(e, "class", ce(Ke`p-1`) + " svelte-oysah1");
      },
      m(l, c) {
        M(l, e, c), j(n, e, null), i = !0;
      },
      p(l, c) {
        const a = {};
        !r && c & /*isSelected*/
        1 && (r = !0, a.checked = /*isSelected*/
        l[0], un(() => r = !1)), n.$set(a);
      },
      i(l) {
        i || ($(n.$$.fragment, l), i = !0);
      },
      o(l) {
        R(n.$$.fragment, l), i = !1;
      },
      d(l) {
        l && D(e), z(n);
      }
    }
  );
}
function Fg(t) {
  let e, n, r, i, o, s, l, c, a = (
    /*isSelected*/
    t[0] && !/*multiple*/
    t[2] && nl()
  ), u = (
    /*multiple*/
    t[2] && Ug(t)
  );
  const f = (
    /*#slots*/
    t[6].default
  ), d = Ve(
    f,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = O("div"), a && a.c(), n = H(), u && u.c(), r = H(), i = O("span"), d && d.c(), k(e, "class", o = ce(Ke`flex hover:(${pr}) items-center ${/*multiple*/
      t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      t[0] && !/*multiple*/
      t[2] ? pr : ""}`) + " svelte-oysah1");
    },
    m(m, p) {
      M(m, e, p), a && a.m(e, null), P(e, n), u && u.m(e, null), P(e, r), P(e, i), d && d.m(i, null), t[8](i), s = !0, l || (c = le(
        e,
        "click",
        /*onClickOption*/
        t[3]
      ), l = !0);
    },
    p(m, [p]) {
      /*isSelected*/
      m[0] && !/*multiple*/
      m[2] ? a ? a.p(m, p) : (a = nl(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*multiple*/
      m[2] && u.p(m, p), d && d.p && (!s || p & /*$$scope*/
      32) && Ge(
        d,
        f,
        m,
        /*$$scope*/
        m[5],
        s ? qe(
          f,
          /*$$scope*/
          m[5],
          p,
          null
        ) : Je(
          /*$$scope*/
          m[5]
        ),
        null
      ), (!s || p & /*isSelected*/
      1 && o !== (o = ce(Ke`flex hover:(${pr}) items-center ${/*multiple*/
      m[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      m[0] && !/*multiple*/
      m[2] ? pr : ""}`) + " svelte-oysah1")) && k(e, "class", o);
    },
    i(m) {
      s || ($(u), $(d, m), s = !0);
    },
    o(m) {
      R(u), R(d, m), s = !1;
    },
    d(m) {
      m && D(e), a && a.d(), u && u.d(), d && d.d(m), t[8](null), l = !1, c();
    }
  };
}
let pr = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Hg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, c = null, a, u;
  const f = He("audako:select:multiple"), d = He("audako:select:close"), m = He("audako:select:value"), p = He("audako:select:value:changed"), h = He("audako:select:displayValue");
  ja(() => {
    var b;
    u = (b = a.innerText) == null ? void 0 : b.trim(), h.subscribe((w) => {
      c = w;
    }), m.subscribe((w) => {
      l = w, f ? n(0, s = w == null ? void 0 : w.includes(o)) : n(0, s = w === o), T();
    });
  });
  function g(b) {
    console.log("clicked option"), b.preventDefault(), b.stopPropagation();
    let w = null;
    f ? s ? w = l.filter((x) => x !== o) : w = Array.isArray(l) ? [...l, o] : [o] : (w = o, d()), m.set(w), p.next(w);
  }
  function T() {
    if (f) {
      const b = c;
      s && !b.includes(u) ? h.set([...b, u]) : !s && b.includes(u) && h.set(b.filter((w) => w !== u));
    } else
      s && h.set(u);
  }
  function y(b) {
    s = b, n(0, s);
  }
  function _(b) {
    me[b ? "unshift" : "push"](() => {
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
class hc extends ge {
  constructor(e) {
    super(), pe(this, e, Hg, Fg, de, { value: 4 }, Ng);
  }
}
function rl(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const Lg = (t) => ({}), il = (t) => ({});
function Bg(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = B(e), r = H();
    },
    m(i, o) {
      M(i, n, o), M(i, r, o);
    },
    p(i, o) {
      o & /*options*/
      16 && e !== (e = /*option*/
      i[26].label + "") && Ce(n, e);
    },
    d(i) {
      i && D(n), i && D(r);
    }
  };
}
function ol(t) {
  let e, n;
  return e = new hc({
    props: {
      value: (
        /*option*/
        t[26].value
      ),
      $$slots: { default: [Bg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function jg(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[13].default
  ), o = Ve(
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
    l[a] = ol(rl(t, s, a));
  const c = (a) => R(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      o && o.c(), e = H();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = Xr();
    },
    m(a, u) {
      o && o.m(a, u), M(a, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(a, u);
      M(a, n, u), r = !0;
    },
    p(a, u) {
      if (o && o.p && (!r || u & /*$$scope*/
      131072) && Ge(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        r ? qe(
          i,
          /*$$scope*/
          a[17],
          u,
          null
        ) : Je(
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
          const d = rl(a, s, f);
          l[f] ? (l[f].p(d, u), $(l[f], 1)) : (l[f] = ol(d), l[f].c(), $(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (_e(), f = s.length; f < l.length; f += 1)
          c(f);
        ve();
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
      R(o, a), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        R(l[u]);
      r = !1;
    },
    d(a) {
      o && o.d(a), a && D(e), Rt(l, a), a && D(n);
    }
  };
}
function zg(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p;
  const h = (
    /*#slots*/
    t[13].prefix
  ), g = Ve(
    h,
    t,
    /*$$scope*/
    t[17],
    il
  );
  let T = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [jg] },
    $$scope: { ctx: t }
  };
  return f = new dc({ props: T }), t[16](f), {
    c() {
      e = O("div"), g && g.c(), n = H(), r = O("input"), o = H(), s = O("div"), l = B("arrow_drop_down"), u = H(), q(f.$$.fragment), r.disabled = /*disabled*/
      t[6], k(
        r,
        "placeholder",
        /*placeholder*/
        t[0]
      ), r.readOnly = !0, k(r, "class", i = /*tw*/
      t[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      t[1]}`), k(s, "class", c = /*tw*/
      t[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      t[3]} select-none`), k(e, "class", a = /*tw*/
      t[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      t[2]}`);
    },
    m(y, _) {
      M(y, e, _), g && g.m(e, null), P(e, n), P(e, r), Dr(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), P(e, o), P(e, s), P(s, l), M(y, u, _), j(f, y, _), d = !0, m || (p = [
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
      131072) && Ge(
        g,
        h,
        y,
        /*$$scope*/
        y[17],
        d ? qe(
          h,
          /*$$scope*/
          y[17],
          _,
          Lg
        ) : Je(
          /*$$scope*/
          y[17]
        ),
        il
      ), (!d || _ & /*disabled*/
      64) && (r.disabled = /*disabled*/
      y[6]), (!d || _ & /*placeholder*/
      1) && k(
        r,
        "placeholder",
        /*placeholder*/
        y[0]
      ), (!d || _ & /*tw, textfield$class*/
      34 && i !== (i = /*tw*/
      y[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      y[1]}`)) && k(r, "class", i), _ & /*displayedValue*/
      128 && r.value !== /*displayedValue*/
      y[7] && Dr(
        r,
        /*displayedValue*/
        y[7]
      ), (!d || _ & /*tw, suffixIcon$class*/
      40 && c !== (c = /*tw*/
      y[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      y[3]} select-none`)) && k(s, "class", c), (!d || _ & /*tw, container$class*/
      36 && a !== (a = /*tw*/
      y[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      y[2]}`)) && k(e, "class", a);
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
      R(g, y), R(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && D(e), g && g.d(y), t[15](null), y && D(u), t[16](null), z(f, y), m = !1, _t(p);
    }
  };
}
function Wg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: c = "" } = e, { container$class: a = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = Ke } = e, { disabled: m = !1 } = e, p = "", h, g, T = Ye(), y = Nr(o);
  const _ = y.subscribe((U) => {
    n(11, o = U);
  });
  let b = new Re();
  const w = b.subscribe((U) => {
    T("valueChanged", U);
  });
  let x = Nr(s ? [] : ""), S = x.subscribe((U) => {
    N(U);
  });
  function E(U) {
    U && (U.preventDefault(), U.stopPropagation()), !m && (g == null || g.openPopup());
  }
  function N(U) {
    if (U == null || U.length === 0) {
      n(7, p = null);
      return;
    }
    Array.isArray(U) ? n(7, p = U.join(", ")) : n(7, p = U);
  }
  Et("audako:select:multiple", s), Et("audako:select:value", y), Et("audako:select:value:changed", b), Et("audako:select:displayValue", x), Et("audako:select:close", () => g.closePopup()), Ot(() => {
    _(), w.unsubscribe(), S();
  });
  function W() {
    p = this.value, n(7, p);
  }
  function Z(U) {
    me[U ? "unshift" : "push"](() => {
      h = U, n(8, h);
    });
  }
  function Ee(U) {
    me[U ? "unshift" : "push"](() => {
      g = U, n(9, g);
    });
  }
  return t.$$set = (U) => {
    "value" in U && n(11, o = U.value), "multiple" in U && n(12, s = U.multiple), "placeholder" in U && n(0, l = U.placeholder), "textfield$class" in U && n(1, c = U.textfield$class), "container$class" in U && n(2, a = U.container$class), "suffixIcon$class" in U && n(3, u = U.suffixIcon$class), "options" in U && n(4, f = U.options), "tw" in U && n(5, d = U.tw), "disabled" in U && n(6, m = U.disabled), "$$scope" in U && n(17, i = U.$$scope);
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
    W,
    Z,
    Ee,
    i
  ];
}
class pc extends ge {
  constructor(e) {
    super(), pe(this, e, Wg, zg, de, {
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
function sl(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function Vg(t) {
  let e = (
    /*option*/
    t[18] + ""
  ), n;
  return {
    c() {
      n = B(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i & /*pageSizeOptions*/
      8 && e !== (e = /*option*/
      r[18] + "") && Ce(n, e);
    },
    d(r) {
      r && D(n);
    }
  };
}
function ll(t) {
  let e, n;
  return e = new hc({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [Vg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function qg(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = ll(sl(t, r, s));
  const o = (s) => R(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = Xr();
    },
    m(s, l) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(s, l);
      M(s, e, l), n = !0;
    },
    p(s, l) {
      if (l & /*pageSizeOptions*/
      8) {
        r = /*pageSizeOptions*/
        s[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const a = sl(s, r, c);
          i[c] ? (i[c].p(a, l), $(i[c], 1)) : (i[c] = ll(a), i[c].c(), $(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (_e(), c = r.length; c < i.length; c += 1)
          o(c);
        ve();
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
        R(i[l]);
      n = !1;
    },
    d(s) {
      Rt(i, s), s && D(e);
    }
  };
}
function Gg(t) {
  let e;
  return {
    c() {
      e = B("first_page");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Jg(t) {
  let e;
  return {
    c() {
      e = B("navigate_before");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Kg(t) {
  let e;
  return {
    c() {
      e = B("navigate_next");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Xg(t) {
  let e;
  return {
    c() {
      e = B("last_page");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Yg(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, m = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), p, h, g, T, y, _, b, w, x, S, E, N, W, Z;
  function Ee(L) {
    t[10](L);
  }
  let U = {
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
    $$slots: { default: [qg] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (U.value = /*pageSize*/
    t[0]), s = new pc({ props: U }), me.push(() => fn(s, "value", Ee)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), b = new At({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Gg] },
        $$scope: { ctx: t }
      }
    }), b.$on(
      "click",
      /*click_handler*/
      t[12]
    ), x = new At({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Jg] },
        $$scope: { ctx: t }
      }
    }), x.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), E = new At({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Kg] },
        $$scope: { ctx: t }
      }
    }), E.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), W = new At({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Xg] },
        $$scope: { ctx: t }
      }
    }), W.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = O("div"), n = O("div"), r = B("Items per page:"), i = H(), o = O("div"), q(s.$$.fragment), c = H(), a = O("div"), f = B(u), d = B(" - "), p = B(m), h = H(), g = O("div"), T = B("of "), y = B(
          /*totalCount*/
          t[2]
        ), _ = H(), q(b.$$.fragment), w = H(), q(x.$$.fragment), S = H(), q(E.$$.fragment), N = H(), q(W.$$.fragment), k(
          n,
          "class",
          /*tw*/
          t[5]`mr-1 text-xs text-gray-600`
        ), k(
          o,
          "class",
          /*tw*/
          t[5]`w-[50px]`
        ), k(
          a,
          "class",
          /*tw*/
          t[5]`ml-4 text-xs mr-1 text-gray-600`
        ), k(
          g,
          "class",
          /*tw*/
          t[5]`text-xs mr-4 text-gray-600`
        ), k(
          e,
          "class",
          /*tw*/
          t[5]`flex w-full items-center justify-end pt-1`
        );
      },
      m(L, ee) {
        M(L, e, ee), P(e, n), P(n, r), P(e, i), P(e, o), j(s, o, null), P(e, c), P(e, a), P(a, f), P(a, d), P(a, p), P(e, h), P(e, g), P(g, T), P(g, y), P(e, _), j(b, e, null), P(e, w), j(x, e, null), P(e, S), j(E, e, null), P(e, N), j(W, e, null), Z = !0;
      },
      p(L, [ee]) {
        const xe = {};
        ee & /*$$scope, pageSizeOptions*/
        2097160 && (xe.$$scope = { dirty: ee, ctx: L }), !l && ee & /*pageSize*/
        1 && (l = !0, xe.value = /*pageSize*/
        L[0], un(() => l = !1)), s.$set(xe), (!Z || ee & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        L[1] * /*pageSize*/
        L[0] + 1 + "") && Ce(f, u), (!Z || ee & /*pageIndex, pageSize*/
        3) && m !== (m = /*pageIndex*/
        (L[1] + 1) * /*pageSize*/
        L[0] + "") && Ce(p, m), (!Z || ee & /*totalCount*/
        4) && Ce(
          y,
          /*totalCount*/
          L[2]
        );
        const vt = {};
        ee & /*pageIndex*/
        2 && (vt.disabled = /*pageIndex*/
        L[1] === 0), ee & /*$$scope*/
        2097152 && (vt.$$scope = { dirty: ee, ctx: L }), b.$set(vt);
        const F = {};
        ee & /*pageIndex*/
        2 && (F.disabled = /*pageIndex*/
        L[1] === 0), ee & /*$$scope*/
        2097152 && (F.$$scope = { dirty: ee, ctx: L }), x.$set(F);
        const G = {};
        ee & /*pageIndex, lastPageIndex*/
        18 && (G.disabled = /*pageIndex*/
        L[1] === /*lastPageIndex*/
        L[4]), ee & /*$$scope*/
        2097152 && (G.$$scope = { dirty: ee, ctx: L }), E.$set(G);
        const rt = {};
        ee & /*pageIndex, lastPageIndex*/
        18 && (rt.disabled = /*pageIndex*/
        L[1] === /*lastPageIndex*/
        L[4]), ee & /*$$scope*/
        2097152 && (rt.$$scope = { dirty: ee, ctx: L }), W.$set(rt);
      },
      i(L) {
        Z || ($(s.$$.fragment, L), $(b.$$.fragment, L), $(x.$$.fragment, L), $(E.$$.fragment, L), $(W.$$.fragment, L), Z = !0);
      },
      o(L) {
        R(s.$$.fragment, L), R(b.$$.fragment, L), R(x.$$.fragment, L), R(E.$$.fragment, L), R(W.$$.fragment, L), Z = !1;
      },
      d(L) {
        L && D(e), z(s), z(b), z(x), z(E), z(W);
      }
    }
  );
}
function al(t, e) {
  return Math.max(Math.ceil(e / t) - 1, 0);
}
function Qg(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = He("tw"), l, { pageSizeOptions: c = [10, 20, 50, 100] } = e, a = Ye();
  function u(w) {
    n(1, r = r + w), p();
  }
  function f() {
    n(1, r = 0), p();
  }
  function d() {
    n(1, r = l), p();
  }
  function m(w) {
    console.log("changePageSize", w), n(0, i = w), n(4, l = al(i, o)), n(1, r = Math.min(r, l)), p();
  }
  function p() {
    a("changePage", { pageIndex: r, pageSize: i });
  }
  function h(w) {
    i = w, n(0, i);
  }
  const g = (w) => m(w.detail), T = () => f(), y = () => u(-1), _ = () => u(1), b = () => d();
  return t.$$set = (w) => {
    "pageIndex" in w && n(1, r = w.pageIndex), "pageSize" in w && n(0, i = w.pageSize), "totalCount" in w && n(2, o = w.totalCount), "pageSizeOptions" in w && n(3, c = w.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & /*pageSize, totalCount*/
    5 && n(4, l = al(i, o)), t.$$.dirty & /*pageSize*/
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
    T,
    y,
    _,
    b
  ];
}
class Zg extends ge {
  constructor(e) {
    super(), pe(this, e, Qg, Yg, de, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function em(t) {
  Xt(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function cl(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function ul(t) {
  let e, n;
  return e = new ro({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0 cursor-default`
      ),
      id: "Name",
      $$slots: { default: [tm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function tm(t) {
  let e, n;
  return e = new tr({
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function nm(t) {
  let e;
  return {
    c() {
      e = B("Name");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function rm(t) {
  let e;
  return {
    c() {
      e = B("Group");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function im(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && ul(t)
  );
  return n = new ro({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [nm] },
      $$scope: { ctx: t }
    }
  }), i = new ro({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [rm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = H(), q(n.$$.fragment), r = H(), q(i.$$.fragment);
    },
    m(l, c) {
      s && s.m(l, c), M(l, e, c), j(n, l, c), M(l, r, c), j(i, l, c), o = !0;
    },
    p(l, c) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, c), c[0] & /*selectMultiple*/
      1 && $(s, 1)) : (s = ul(l), s.c(), $(s, 1), s.m(e.parentNode, e)) : s && (_e(), R(s, 1, 1, () => {
        s = null;
      }), ve());
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
      R(s), R(n.$$.fragment, l), R(i.$$.fragment, l), o = !1;
    },
    d(l) {
      s && s.d(l), l && D(e), z(n, l), l && D(r), z(i, l);
    }
  };
}
function om(t) {
  let e;
  return {
    c() {
      e = O("div"), k(e, "class", ce(
        /*tw*/
        t[9]`w-full h-[3px]`
      ) + " svelte-15xwzh7");
    },
    m(n, r) {
      M(n, e, r);
    },
    p: Y,
    d(n) {
      n && D(e);
    }
  };
}
function sm(t) {
  let e, n;
  return {
    c() {
      e = O("div"), n = O("div"), k(n, "class", ce(
        /*tw*/
        t[9]`progress-bar-value-animation w-full h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), k(e, "class", ce(
        /*tw*/
        t[9]`w-full h-[3px] overflow-hidden bg-blue-200`
      ) + " svelte-15xwzh7");
    },
    m(r, i) {
      M(r, e, i), P(e, n);
    },
    p: Y,
    d(r) {
      r && D(e);
    }
  };
}
function fl(t) {
  let e, n;
  return e = new io({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0`
      ),
      $$slots: { default: [lm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      q(e.$$.fragment);
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function lm(t) {
  let e, n;
  return e = new tr({
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function am(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = O("div"), r = B(n), k(e, "class", ce(
        /*tw*/
        t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(o, s) {
      M(o, e, s), P(e, r);
    },
    p(o, s) {
      var l;
      s[0] & /*entities*/
      8 && n !== (n = /*entity*/
      ((l = o[33].Name) == null ? void 0 : l.Value) + "") && Ce(r, n);
    },
    d(o) {
      o && D(e);
    }
  };
}
function cm(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function um(t) {
  let e = (
    /*name*/
    (t[36] ?? "") + ""
  ), n;
  return {
    c() {
      n = B(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i[0] & /*entities*/
      8 && e !== (e = /*name*/
      (r[36] ?? "") + "") && Ce(n, e);
    },
    d(r) {
      r && D(n);
    }
  };
}
function fm(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function dm(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: fm,
    then: um,
    catch: cm,
    value: 36
  };
  return Mr(n = /*nameService*/
  t[8].resolveName(
    J.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = O("span"), r.block.c(), k(e, "class", ce(
        /*tw*/
        t[9]` text-sm overflow-hidden whitespace-nowrap text-ellipsis`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      M(i, e, o), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null;
    },
    p(i, o) {
      t = i, r.ctx = t, o[0] & /*entities*/
      8 && n !== (n = /*nameService*/
      t[8].resolveName(
        J.Group,
        /*entity*/
        t[33].GroupId
      )) && Mr(n, r) || za(r, t, o);
    },
    d(i) {
      i && D(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function hm(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && fl(t)
  );
  return n = new io({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [am] },
      $$scope: { ctx: t }
    }
  }), i = new io({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [dm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = H(), q(n.$$.fragment), r = H(), q(i.$$.fragment), o = H();
    },
    m(c, a) {
      l && l.m(c, a), M(c, e, a), j(n, c, a), M(c, r, a), j(i, c, a), M(c, o, a), s = !0;
    },
    p(c, a) {
      /*selectMultiple*/
      c[0] ? l ? (l.p(c, a), a[0] & /*selectMultiple*/
      1 && $(l, 1)) : (l = fl(c), l.c(), $(l, 1), l.m(e.parentNode, e)) : l && (_e(), R(l, 1, 1, () => {
        l = null;
      }), ve());
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
      R(l), R(n.$$.fragment, c), R(i.$$.fragment, c), s = !1;
    },
    d(c) {
      l && l.d(c), c && D(e), z(n, c), c && D(r), z(i, c), c && D(o);
    }
  };
}
function dl(t) {
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
  return e = new Np({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [hm] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", r), {
    c() {
      q(e.$$.fragment);
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
      n || ($(e.$$.fragment, i), n = !0);
    },
    o(i) {
      R(e.$$.fragment, i), n = !1;
    },
    d(i) {
      z(e, i);
    }
  };
}
function pm(t) {
  let e, n, r, i, o;
  e = new Ip({
    props: {
      $$slots: { default: [im] },
      $$scope: { ctx: t }
    }
  });
  function s(d, m) {
    return (
      /*loading*/
      d[7] ? sm : om
    );
  }
  let l = s(t), c = l(t), a = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < a.length; d += 1)
    u[d] = dl(cl(t, a, d));
  const f = (d) => R(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      q(e.$$.fragment), n = H(), c.c(), r = H();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = Xr();
    },
    m(d, m) {
      j(e, d, m), M(d, n, m), c.m(d, m), M(d, r, m);
      for (let p = 0; p < u.length; p += 1)
        u[p] && u[p].m(d, m);
      M(d, i, m), o = !0;
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
          const g = cl(d, a, h);
          u[h] ? (u[h].p(g, m), $(u[h], 1)) : (u[h] = dl(g), u[h].c(), $(u[h], 1), u[h].m(i.parentNode, i));
        }
        for (_e(), h = a.length; h < u.length; h += 1)
          f(h);
        ve();
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
      R(e.$$.fragment, d), u = u.filter(Boolean);
      for (let m = 0; m < u.length; m += 1)
        R(u[m]);
      o = !1;
    },
    d(d) {
      z(e, d), d && D(n), c.d(d), d && D(r), Rt(u, d), d && D(i);
    }
  };
}
function gm(t) {
  let e, n;
  return e = new Zg({
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function mm(t) {
  let e, n, r;
  return n = new kp({
    props: {
      $$slots: {
        pagination: [gm],
        default: [pm]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = O("div"), q(n.$$.fragment), k(e, "class", ce(
        /*tw*/
        t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      M(i, e, o), j(n, e, null), r = !0;
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
      R(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && D(e), z(n);
    }
  };
}
function bm(t, e, n) {
  let r = Me(Jt), i = Me(jn), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, c = He("tw"), a = [], u = new Re(), f = [], d = {}, m = "unchecked", p, h, g, T = !1, y = 0, _ = 10, b = 0, w = vn(), x = Wt, S = !1, E = !0, N = new Re();
  zt.pipe(mt(N)).subscribe((F) => {
    f = F.selectedEntities, ee(), U();
  }), la([x.asObservable(), w.asObservable()]).pipe(mt(N)).subscribe(([F, G]) => {
    var rt;
    console.log("globalState", F), g = G.selectedGroup, h = (rt = G.selectedGroup) == null ? void 0 : rt.Id, p = G.filter, T = F.queryWithSubGroups, S = !0, n(1, y = 0), n(2, _ = F.pageSize ?? 10), u.next();
  });
  function W() {
    const F = { $and: [] };
    T ? F.$and.push({ Path: h }) : F.$and.push({ GroupId: h }), p && F.$and.push({
      $or: [
        {
          "Name.Value": { $regex: p, $options: "i" }
        },
        {
          "Description.Value": { $regex: p, $options: "i" }
        }
      ]
    }), l && F.$and.push(l);
    const G = {
      limit: _,
      skip: y * _
    };
    return Kt(r.queryConfiguration(o, F, G));
  }
  function Z(F) {
    s ? (f.find((G) => G.Id === F.Id) ? (f = f.filter((G) => G.Id !== F.Id), n(4, d[F.Id] = !1, d)) : (f.push(F), n(4, d[F.Id] = !0, d)), U()) : f = [F], zt.update((G) => ({ ...G, selectedEntities: f }));
  }
  function Ee(F) {
    F ? f = [
      ...f,
      ...a.filter((G) => !d[G.Id])
    ] : f = f.filter((G) => !a.find((rt) => rt.Id === G.Id)), ee(), U(), zt.update((G) => ({ ...G, selectedEntities: f }));
  }
  function U() {
    let F = Object.keys(d).filter((G) => d[G]);
    F.length === 0 ? n(5, m = "unchecked") : F.length === a.length ? n(5, m = "checked") : n(5, m = "indeterminate");
  }
  function L(F) {
    const G = F.detail;
    G.pageSize != _ ? (n(1, y = 0), n(2, _ = G.pageSize)) : n(1, y = G.pageIndex);
  }
  function ee() {
    n(4, d = {}), a.forEach((F) => {
      n(4, d[F.Id] = f.find((G) => G.Id === F.Id) != null, d);
    });
  }
  Ot(() => {
    N.next(), N.complete();
  }), u.pipe(mt(N), an(() => S && !!h), nf(250), ef(() => n(7, E = !0)), fa(() => W())).subscribe((F) => {
    n(7, E = !1), n(3, a = F.data), ee(), U(), o === J.Group && a.unshift(g), n(6, b = F.total);
  });
  const xe = (F) => {
    var G;
    return Ee((G = F.detail) == null ? void 0 : G.checked);
  }, vt = (F) => Z(F);
  return t.$$set = (F) => {
    "entityType" in F && n(13, o = F.entityType), "selectMultiple" in F && n(0, s = F.selectMultiple), "additionalFilter" in F && n(14, l = F.additionalFilter);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pageIndex*/
    2 && (n(1, y), n(24, u), u.next()), t.$$.dirty[0] & /*pageSize*/
    4 && (n(2, _), n(28, x), x.update((F) => ({ ...F, pageSize: _ })));
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
    xe,
    vt
  ];
}
class _m extends ge {
  constructor(e) {
    super(), pe(
      this,
      e,
      bm,
      mm,
      de,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      em,
      [-1, -1]
    );
  }
}
function hl(t) {
  let e, n, r, i;
  n = new At({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && pl(t)
  );
  return {
    c() {
      e = O("div"), q(n.$$.fragment), r = H(), o && o.c(), k(
        e,
        "class",
        /*tw*/
        t[5]`mx-2 relative`
      );
    },
    m(s, l) {
      M(s, e, l), j(n, e, null), P(e, r), o && o.m(e, null), i = !0;
    },
    p(s, l) {
      /*selectedEntities*/
      s[4].length > 0 ? o ? o.p(s, l) : (o = pl(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    i(s) {
      i || ($(n.$$.fragment, s), i = !0);
    },
    o(s) {
      R(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && D(e), z(n), o && o.d();
    }
  };
}
function pl(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = O("div"), r = B(n), k(
        e,
        "class",
        /*tw*/
        t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`
      );
    },
    m(i, o) {
      M(i, e, o), P(e, r);
    },
    p(i, o) {
      o & /*selectedEntities*/
      16 && n !== (n = /*selectedEntities*/
      i[4].length + "") && Ce(r, n);
    },
    d(i) {
      i && D(e);
    }
  };
}
function vm(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p, h, g = (
    /*selectMultiple*/
    t[0] && hl(t)
  );
  function T(_) {
    t[11](_);
  }
  let y = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (y.checked = /*withSubGroups*/
    t[1]), f = new tr({ props: y }), me.push(() => fn(f, "checked", T)), {
      c() {
        e = O("div"), n = O("div"), r = O("div"), i = O("span"), o = B("search"), s = H(), l = O("input"), c = H(), g && g.c(), a = H(), u = O("div"), q(f.$$.fragment), k(
          i,
          "class",
          /*tw*/
          t[5]`material-symbols-rounded mr-2`
        ), k(l, "placeholder", "Search"), k(
          l,
          "class",
          /*tw*/
          t[5]`w-full outline-none`
        ), k(
          r,
          "class",
          /*tw*/
          t[5]`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`
        ), k(
          n,
          "class",
          /*tw*/
          t[5]`flex items-center`
        ), k(
          u,
          "class",
          /*tw*/
          t[5]`flex justify-end mt-2`
        ), k(
          e,
          "class",
          /*tw*/
          t[5]`flex flex-col`
        );
      },
      m(_, b) {
        M(_, e, b), P(e, n), P(n, r), P(r, i), P(i, o), P(r, s), P(r, l), t[8](l), Dr(
          l,
          /*filter*/
          t[2]
        ), P(n, c), g && g.m(n, null), P(e, a), P(e, u), j(f, u, null), m = !0, p || (h = le(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), p = !0);
      },
      p(_, [b]) {
        b & /*filter*/
        4 && l.value !== /*filter*/
        _[2] && Dr(
          l,
          /*filter*/
          _[2]
        ), /*selectMultiple*/
        _[0] ? g ? (g.p(_, b), b & /*selectMultiple*/
        1 && $(g, 1)) : (g = hl(_), g.c(), $(g, 1), g.m(n, null)) : g && (_e(), R(g, 1, 1, () => {
          g = null;
        }), ve());
        const w = {};
        !d && b & /*withSubGroups*/
        2 && (d = !0, w.checked = /*withSubGroups*/
        _[1], un(() => d = !1)), f.$set(w);
      },
      i(_) {
        m || ($(g), $(f.$$.fragment, _), m = !0);
      },
      o(_) {
        R(g), R(f.$$.fragment, _), m = !1;
      },
      d(_) {
        _ && D(e), t[8](null), g && g.d(), z(f), p = !1, h();
      }
    }
  );
}
function ym(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = He("tw"), s = Ye(), l = vn(), c = !1, a = l.value.filter, u, f = new Re(), d = new Re(), m = [];
  Wt.pipe(mt(f)).subscribe((w) => {
    n(1, c = w.queryWithSubGroups);
  }), d.pipe(mt(f), zu(200)).subscribe((w) => {
    l.update((x) => ({ ...x, filter: w }));
  }), zt.pipe(mt(f)).subscribe((w) => {
    n(4, m = w.selectedEntities);
  });
  function p(w) {
    console.log("onSubGroupsToggled", w), w != Wt.value.queryWithSubGroups && Wt.update((x) => ({
      ...x,
      queryWithSubGroups: w
    }));
  }
  function h() {
    s("acceptSelection");
  }
  ja(() => {
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
  Ot(() => {
    f.next(), f.complete();
  });
  function T(w) {
    me[w ? "unshift" : "push"](() => {
      u = w, n(3, u);
    });
  }
  function y() {
    a = this.value, n(2, a);
  }
  const _ = () => h();
  function b(w) {
    c = w, n(1, c);
  }
  return t.$$set = (w) => {
    "entityType" in w && n(7, r = w.entityType), "selectMultiple" in w && n(0, i = w.selectMultiple);
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
    T,
    y,
    _,
    b
  ];
}
class wm extends ge {
  constructor(e) {
    super(), pe(this, e, ym, vm, de, { entityType: 7, selectMultiple: 0 });
  }
}
function gl(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function ml(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function bl(t) {
  let e, n;
  return e = new At({
    props: {
      size: "small",
      $$slots: { default: [Sm] },
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
      j(e, r, i), n = !0;
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
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function Sm(t) {
  let e;
  return {
    c() {
      e = B("arrow_back");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function _l(t) {
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
      e = O("div"), r = B(n), o = B(i), s = H(), k(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      M(f, e, d), P(e, r), P(e, o), P(e, s), c || (a = le(e, "click", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && Ce(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && Ce(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && k(e, "class", l);
    },
    d(f) {
      f && D(e), c = !1, a();
    }
  };
}
function vl(t) {
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
  return n = new At({
    props: {
      $$slots: { default: [Cm] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = O("div"), q(n.$$.fragment);
    },
    m(o, s) {
      M(o, e, s), j(n, e, null), r = !0;
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
      R(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && D(e), z(n);
    }
  };
}
function Cm(t) {
  let e;
  return {
    c() {
      e = B("done");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && D(e);
    }
  };
}
function yl(t) {
  var p;
  let e, n, r = (
    /*tenant*/
    ((p = t[15]) == null ? void 0 : p.Name) + ""
  ), i, o, s, l, c, a, u, f, d = (
    /*tenant*/
    t[15].Root && vl(t)
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
      e = O("div"), n = O("div"), i = B(r), s = H(), d && d.c(), l = H(), k(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), k(e, "class", c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(h, g) {
      M(h, e, g), P(e, n), P(n, i), P(e, s), d && d.m(e, null), P(e, l), a = !0, u || (f = le(e, "click", m), u = !0);
    },
    p(h, g) {
      var T;
      t = h, (!a || g & /*tenants*/
      8) && r !== (r = /*tenant*/
      ((T = t[15]) == null ? void 0 : T.Name) + "") && Ce(i, r), (!a || g & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && k(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, g), g & /*tenants*/
      8 && $(d, 1)) : (d = vl(t), d.c(), $(d, 1), d.m(e, l)) : d && (_e(), R(d, 1, 1, () => {
        d = null;
      }), ve()), (!a || g & /*tw*/
      2 && c !== (c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && k(e, "class", c);
    },
    i(h) {
      a || ($(d), a = !0);
    },
    o(h) {
      R(d), a = !1;
    },
    d(h) {
      h && D(e), d && d.d(), u = !1, f();
    }
  };
}
function Em(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p, h, g = (
    /*allowBack*/
    t[0] && bl(t)
  ), T = (
    /*tenantPath*/
    t[2]
  ), y = [];
  for (let x = 0; x < T.length; x += 1)
    y[x] = _l(ml(t, T, x));
  let _ = (
    /*tenants*/
    t[3]
  ), b = [];
  for (let x = 0; x < _.length; x += 1)
    b[x] = yl(gl(t, _, x));
  const w = (x) => R(b[x], 1, 1, () => {
    b[x] = null;
  });
  return {
    c() {
      e = O("div"), n = O("div"), g && g.c(), r = H(), i = O("div"), o = B("Mandant auswählen"), c = H(), a = O("div");
      for (let x = 0; x < y.length; x += 1)
        y[x].c();
      f = H(), d = O("div");
      for (let x = 0; x < b.length; x += 1)
        b[x].c();
      k(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), k(n, "class", l = /*tw*/
      t[1]`flex items-center`), k(a, "class", u = /*tw*/
      t[1]`flex mb-1`), Zi(d, "grid-auto-rows", "60px"), k(d, "class", m = /*tw*/
      t[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`), k(e, "class", p = /*tw*/
      t[1]`w-full overflow-hidden flex flex-col`);
    },
    m(x, S) {
      M(x, e, S), P(e, n), g && g.m(n, null), P(n, r), P(n, i), P(i, o), P(e, c), P(e, a);
      for (let E = 0; E < y.length; E += 1)
        y[E] && y[E].m(a, null);
      P(e, f), P(e, d);
      for (let E = 0; E < b.length; E += 1)
        b[E] && b[E].m(d, null);
      h = !0;
    },
    p(x, [S]) {
      if (/*allowBack*/
      x[0] ? g ? (g.p(x, S), S & /*allowBack*/
      1 && $(g, 1)) : (g = bl(x), g.c(), $(g, 1), g.m(n, r)) : g && (_e(), R(g, 1, 1, () => {
        g = null;
      }), ve()), (!h || S & /*tw*/
      2 && s !== (s = /*tw*/
      x[1]`font-bold text-gray-600 text-lg`)) && k(i, "class", s), (!h || S & /*tw*/
      2 && l !== (l = /*tw*/
      x[1]`flex items-center`)) && k(n, "class", l), S & /*tw, selectTenantInPath, tenantPath*/
      70) {
        T = /*tenantPath*/
        x[2];
        let E;
        for (E = 0; E < T.length; E += 1) {
          const N = ml(x, T, E);
          y[E] ? y[E].p(N, S) : (y[E] = _l(N), y[E].c(), y[E].m(a, null));
        }
        for (; E < y.length; E += 1)
          y[E].d(1);
        y.length = T.length;
      }
      if ((!h || S & /*tw*/
      2 && u !== (u = /*tw*/
      x[1]`flex mb-1`)) && k(a, "class", u), S & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        _ = /*tenants*/
        x[3];
        let E;
        for (E = 0; E < _.length; E += 1) {
          const N = gl(x, _, E);
          b[E] ? (b[E].p(N, S), $(b[E], 1)) : (b[E] = yl(N), b[E].c(), $(b[E], 1), b[E].m(d, null));
        }
        for (_e(), E = _.length; E < b.length; E += 1)
          w(E);
        ve();
      }
      (!h || S & /*tw*/
      2 && m !== (m = /*tw*/
      x[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`)) && k(d, "class", m), (!h || S & /*tw*/
      2 && p !== (p = /*tw*/
      x[1]`w-full overflow-hidden flex flex-col`)) && k(e, "class", p);
    },
    i(x) {
      if (!h) {
        $(g);
        for (let S = 0; S < _.length; S += 1)
          $(b[S]);
        h = !0;
      }
    },
    o(x) {
      R(g), b = b.filter(Boolean);
      for (let S = 0; S < b.length; S += 1)
        R(b[S]);
      h = !1;
    },
    d(x) {
      x && D(e), g && g.d(), Rt(y, x), Rt(b, x);
    }
  };
}
function km(t, e, n) {
  let r = Me(Bn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const c = Ye();
  async function a() {
    const y = await r.getTopTenants();
    if (y.length === 1) {
      const _ = y[0];
      if (_.Root == null) {
        f(_);
        return;
      }
    }
    n(2, s = [new Oc({ Id: "start", Name: "Start" })]), n(3, l = y);
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
  const p = () => c("back"), h = (y) => d(y), g = (y, _) => m(_, y), T = (y) => f(y);
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
    T
  ];
}
let gc = class extends ge {
  constructor(e) {
    super(), pe(this, e, km, Em, de, { allowBack: 0, tw: 1 });
  }
};
function Tm(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, m, p;
  return n = new wp({
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
  ), l = new wm({
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
  ), u = new _m({
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
      e = O("div"), q(n.$$.fragment), i = H(), o = O("div"), s = O("div"), q(l.$$.fragment), c = H(), a = O("div"), q(u.$$.fragment), k(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), k(a, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), k(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), k(o, "class", m = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(h, g) {
      M(h, e, g), j(n, e, null), M(h, i, g), M(h, o, g), P(o, s), j(l, s, null), P(s, c), P(s, a), j(u, a, null), p = !0;
    },
    p(h, g) {
      const T = {};
      g & /*selectMultiple*/
      2 && (T.selectMultiple = /*selectMultiple*/
      h[1]), g & /*entityType*/
      1 && (T.entityType = /*entityType*/
      h[0]), g & /*selectedTenant*/
      16 && (T.selectedTenant = /*selectedTenant*/
      h[4]), n.$set(T), (!p || g & /*tw*/
      8 && r !== (r = /*tw*/
      h[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && k(e, "class", r);
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
      h[3]`flex-1 overflow-hidden mt-3`)) && k(a, "class", f), (!p || g & /*tw*/
      8 && d !== (d = /*tw*/
      h[3]`flex flex-col h-full overflow-hidden`)) && k(s, "class", d), (!p || g & /*tw*/
      8 && m !== (m = /*tw*/
      h[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && k(o, "class", m);
    },
    i(h) {
      p || ($(n.$$.fragment, h), $(l.$$.fragment, h), $(u.$$.fragment, h), p = !0);
    },
    o(h) {
      R(n.$$.fragment, h), R(l.$$.fragment, h), R(u.$$.fragment, h), p = !1;
    },
    d(h) {
      h && D(e), z(n), h && D(i), h && D(o), z(l), z(u);
    }
  };
}
function Am(t) {
  let e, n;
  return e = new gc({
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
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      R(e.$$.fragment, r), n = !1;
    },
    d(r) {
      z(e, r);
    }
  };
}
function xm(t) {
  let e, n, r, i, o;
  const s = [Am, Tm], l = [];
  function c(a, u) {
    return (
      /*inTenantSelect*/
      a[5] ? 0 : 1
    );
  }
  return n = c(t), r = l[n] = s[n](t), {
    c() {
      e = O("div"), r.c(), k(e, "class", i = /*tw*/
      t[3]`flex w-full h-full`);
    },
    m(a, u) {
      M(a, e, u), l[n].m(e, null), o = !0;
    },
    p(a, [u]) {
      let f = n;
      n = c(a), n === f ? l[n].p(a, u) : (_e(), R(l[f], 1, 1, () => {
        l[f] = null;
      }), ve(), r = l[n], r ? r.p(a, u) : (r = l[n] = s[n](a), r.c()), $(r, 1), r.m(e, null)), (!o || u & /*tw*/
      8 && i !== (i = /*tw*/
      a[3]`flex w-full h-full`)) && k(e, "class", i);
    },
    i(a) {
      o || ($(r), o = !0);
    },
    o(a) {
      R(r), o = !1;
    },
    d(a) {
      a && D(e), l[n].d();
    }
  };
}
function Im(t, e, n) {
  let { entityType: r = J.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = Ke } = e, l = Me(Jt), c = Me(Bn), a, u = !1, f = [], d = Ye(), m = Wt.subscribe((E) => {
    E.selectedTenant ? (n(5, u = !1), g(E.selectedTenant)) : n(5, u = !0);
  }), p = zt.subscribe((E) => {
    E.selectedEntities && !i ? (h(E.selectedEntities), d("selectedEntities", E.selectedEntities[0])) : f = E.selectedEntities;
  });
  function h(E) {
    const N = vn(), W = N.value.lastSelectedEntities, Z = E.filter((Ee) => !W.includes(Ee.Id)).map((Ee) => Ee.Id);
    W.unshift(...Z), W.splice(5), N.update((Ee) => ({
      ...Ee,
      lastSelectedEntities: W
    }));
  }
  async function g(E) {
    try {
      n(4, a = await c.getTenantViewById(E));
    } catch (N) {
      console.error(N), n(5, u = !0);
    }
  }
  async function T(E) {
    console.log("Tenant selected", E);
    const N = await l.getEntityById(J.Group, E.Root);
    Wt.update((W) => ({ ...W, selectedTenant: E.Id })), vn().update((W) => ({ ...W, selectedGroup: N }));
  }
  function y() {
    n(5, u = !0);
  }
  function _() {
    h(f), d("selectedEntities", f);
  }
  Ot(() => {
    m.unsubscribe(), p.unsubscribe();
  });
  const b = () => n(5, u = !1), w = (E) => T(E.detail.tenant), x = () => y(), S = () => _();
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
    T,
    y,
    _,
    b,
    w,
    x,
    S
  ];
}
let mc = class extends ge {
  constructor(e) {
    super(), pe(this, e, Im, xm, de, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function $m(t) {
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
  return r = new mc({ props: a }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = O("div"), n = O("div"), q(r.$$.fragment), k(n, "class", i = /*tw*/
      t[3]`h-full w-full`), k(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      M(u, e, f), P(e, n), j(r, n, null), t[11](e), s = !0, l || (c = [
        le(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        le(e, "click", Pm)
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
      u[3]`h-full w-full`)) && k(n, "class", i), (!s || f & /*tw*/
      8 && o !== (o = /*tw*/
      u[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`)) && k(e, "class", o);
    },
    i(u) {
      s || ($(r.$$.fragment, u), s = !0);
    },
    o(u) {
      R(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && D(e), t[9](null), z(r), t[11](null), l = !1, _t(c);
    }
  };
}
const Pm = (t) => t.stopPropagation();
function Rm(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = J.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = Ke } = e, c = Me("PopupService", new Ur(document.body)), a, u, f;
  const d = Ye();
  function m(b, w) {
    b && !f && w ? (f = c.openPopup("entity-select-dialog", w, {
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
  function T(b) {
    me[b ? "unshift" : "push"](() => {
      u = b, n(5, u);
    });
  }
  const y = (b) => g(b);
  function _(b) {
    me[b ? "unshift" : "push"](() => {
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
    T,
    y,
    _
  ];
}
class Om extends ge {
  constructor(e) {
    super(), pe(this, e, Rm, $m, de, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class wl {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new Om({
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
const kr = window, jo = kr.ShadowRoot && (kr.ShadyCSS === void 0 || kr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, zo = Symbol(), Sl = /* @__PURE__ */ new WeakMap();
let bc = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== zo)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (jo && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = Sl.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Sl.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dm = (t) => new bc(typeof t == "string" ? t : t + "", void 0, zo), Qr = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new bc(n, t, zo);
}, Mm = (t, e) => {
  jo ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = kr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, Cl = jo ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return Dm(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _i;
const Br = window, El = Br.trustedTypes, Nm = El ? El.emptyScript : "", kl = Br.reactiveElementPolyfillSupport, co = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Nm : null;
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
} }, _c = (t, e) => e !== t && (e == e || t == t), vi = { attribute: !0, type: String, converter: co, reflect: !1, hasChanged: _c };
let on = class extends HTMLElement {
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
  static createProperty(e, n = vi) {
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
    return this.elementProperties.get(e) || vi;
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
        n.unshift(Cl(i));
    } else
      e !== void 0 && n.push(Cl(e));
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
    return Mm(n, this.constructor.elementStyles), n;
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
  _$EO(e, n, r = vi) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : co).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : co;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || _c)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
on.finalized = !0, on.elementProperties = /* @__PURE__ */ new Map(), on.elementStyles = [], on.shadowRootOptions = { mode: "open" }, kl == null || kl({ ReactiveElement: on }), ((_i = Br.reactiveElementVersions) !== null && _i !== void 0 ? _i : Br.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var yi;
const jr = window, yn = jr.trustedTypes, Tl = yn ? yn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Tt = `lit$${(Math.random() + "").slice(9)}$`, vc = "?" + Tt, Um = `<${vc}>`, wn = document, Gn = (t = "") => wn.createComment(t), Jn = (t) => t === null || typeof t != "object" && typeof t != "function", yc = Array.isArray, Fm = (t) => yc(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Mn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Al = /-->/g, xl = />/g, Ut = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Il = /'/g, $l = /"/g, wc = /^(?:script|style|textarea|title)$/i, Sn = Symbol.for("lit-noChange"), we = Symbol.for("lit-nothing"), Pl = /* @__PURE__ */ new WeakMap(), Hm = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new rr(e.insertBefore(Gn(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, hn = wn.createTreeWalker(wn, 129, null, !1), Lm = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = Mn;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let u, f, d = -1, m = 0;
    for (; m < a.length && (s.lastIndex = m, f = s.exec(a), f !== null); )
      m = s.lastIndex, s === Mn ? f[1] === "!--" ? s = Al : f[1] !== void 0 ? s = xl : f[2] !== void 0 ? (wc.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = Ut) : f[3] !== void 0 && (s = Ut) : s === Ut ? f[0] === ">" ? (s = i ?? Mn, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? Ut : f[3] === '"' ? $l : Il) : s === $l || s === Il ? s = Ut : s === Al || s === xl ? s = Mn : (s = Ut, i = void 0);
    const p = s === Ut && t[c + 1].startsWith("/>") ? " " : "";
    o += s === Mn ? a + Um : d >= 0 ? (r.push(u), a.slice(0, d) + "$lit$" + a.slice(d) + Tt + p) : a + Tt + (d === -2 ? (r.push(void 0), c) : p);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [Tl !== void 0 ? Tl.createHTML(l) : l, r];
};
class Kn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, c = this.parts, [a, u] = Lm(e, n);
    if (this.el = Kn.createElement(a, r), hn.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = hn.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(Tt)) {
              const m = u[s++];
              if (f.push(d), m !== void 0) {
                const p = i.getAttribute(m.toLowerCase() + "$lit$").split(Tt), h = /([.?@])?(.*)/.exec(m);
                c.push({ type: 1, index: o, name: h[2], strings: p, ctor: h[1] === "." ? jm : h[1] === "?" ? Wm : h[1] === "@" ? Vm : Zr });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (wc.test(i.tagName)) {
          const f = i.textContent.split(Tt), d = f.length - 1;
          if (d > 0) {
            i.textContent = yn ? yn.emptyScript : "";
            for (let m = 0; m < d; m++)
              i.append(f[m], Gn()), hn.nextNode(), c.push({ type: 2, index: ++o });
            i.append(f[d], Gn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === vc)
          c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(Tt, f + 1)) !== -1; )
            c.push({ type: 7, index: o }), f += Tt.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = wn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Cn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === Sn)
    return e;
  let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const a = Jn(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== a && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), a === void 0 ? c = void 0 : (c = new a(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = Cn(t, c._$AS(t, e.values), c, r)), e;
}
class Bm {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : wn).importNode(r, !0);
    hn.currentNode = o;
    let s = hn.nextNode(), l = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (l === a.index) {
        let u;
        a.type === 2 ? u = new rr(s, s.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (u = new qm(s, this, e)), this.v.push(u), a = i[++c];
      }
      l !== (a == null ? void 0 : a.index) && (s = hn.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class rr {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = we, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = Cn(this, e, n), Jn(e) ? e === we || e == null || e === "" ? (this._$AH !== we && this._$AR(), this._$AH = we) : e !== this._$AH && e !== Sn && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : Fm(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== we && Jn(this._$AH) ? this._$AA.nextSibling.data = e : this.k(wn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Kn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new Bm(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = Pl.get(e.strings);
    return n === void 0 && Pl.set(e.strings, n = new Kn(e)), n;
  }
  O(e) {
    yc(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new rr(this.S(Gn()), this.S(Gn()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
class Zr {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = we, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = we;
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
      e = Cn(this, e, n, 0), s = !Jn(e) || e !== this._$AH && e !== Sn, s && (this._$AH = e);
    else {
      const l = e;
      let c, a;
      for (e = o[0], c = 0; c < o.length - 1; c++)
        a = Cn(this, l[r + c], n, c), a === Sn && (a = this._$AH[c]), s || (s = !Jn(a) || a !== this._$AH[c]), a === we ? e = we : e !== we && (e += (a ?? "") + o[c + 1]), this._$AH[c] = a;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === we ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class jm extends Zr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === we ? void 0 : e;
  }
}
const zm = yn ? yn.emptyScript : "";
class Wm extends Zr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== we ? this.element.setAttribute(this.name, zm) : this.element.removeAttribute(this.name);
  }
}
class Vm extends Zr {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = Cn(this, e, n, 0)) !== null && r !== void 0 ? r : we) === Sn)
      return;
    const i = this._$AH, o = e === we && i !== we || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== we && (i === we || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class qm {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Cn(this, e);
  }
}
const Rl = jr.litHtmlPolyfillSupport;
Rl == null || Rl(Kn, rr), ((yi = jr.litHtmlVersions) !== null && yi !== void 0 ? yi : jr.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var wi, Si;
class It extends on {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Hm(n, this.renderRoot, this.renderOptions);
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
    return Sn;
  }
}
It.finalized = !0, It._$litElement$ = !0, (wi = globalThis.litElementHydrateSupport) === null || wi === void 0 || wi.call(globalThis, { LitElement: It });
const Ol = globalThis.litElementPolyfillSupport;
Ol == null || Ol({ LitElement: It });
((Si = globalThis.litElementVersions) !== null && Si !== void 0 ? Si : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gm = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function Be(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : Gm(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ci;
((Ci = window.HTMLSlotElement) === null || Ci === void 0 ? void 0 : Ci.prototype.assignedElements) != null;
const Jm = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class at {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? Jm);
  }
  createTwindContext(e) {
    if (e)
      return Og({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: Ke, styleSheet: null };
    {
      const n = rc({ target: new CSSStyleSheet() }), { tw: r } = fc({
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
var Km = Object.defineProperty, Xm = Object.getOwnPropertyDescriptor, Sc = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Xm(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && Km(e, n, i), i;
};
const { tw: Ym, styleSheet: Qm } = Me(at, new at()).createTwindContext(), Zm = Qr`
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
class ei extends It {
  constructor() {
    super();
    it(this, "_element");
    Ct(Ur, new Ur(document.body));
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
    this._element = new mc({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Ym
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
it(ei, "styles", [Qm.target, Zm]);
Sc([
  Be({ type: String, attribute: "entitytype" })
], ei.prototype, "entityType", 2);
Sc([
  Be({ type: Boolean, attribute: "multiple" })
], ei.prototype, "multiple", 2);
var e0 = Object.defineProperty, t0 = Object.getOwnPropertyDescriptor, Dt = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? t0(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && e0(e, n, i), i;
};
const { tw: n0, styleSheet: r0 } = Me(at, new at()).createTwindContext(), i0 = Qr`
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
class ut extends It {
  constructor() {
    super();
    it(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return this.multiple && this._select || ((n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new pc({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: n0
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
it(ut, "styles", [r0.target, i0]);
Dt([
  Be({ attribute: "value", type: String })
], ut.prototype, "value", 2);
Dt([
  Be({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), !0;
  } })
], ut.prototype, "arrayvalue", 2);
Dt([
  Be({ attribute: "multiple", type: Boolean })
], ut.prototype, "multiple", 2);
Dt([
  Be({ attribute: "options", type: Array })
], ut.prototype, "options", 2);
Dt([
  Be({ attribute: "placeholder", type: String })
], ut.prototype, "placeholder", 2);
Dt([
  Be({ attribute: "container$class", type: String })
], ut.prototype, "container$class", 2);
Dt([
  Be({ attribute: "textfield$class", type: String })
], ut.prototype, "textfield$class", 2);
Dt([
  Be({ attribute: "suffix$class", type: String })
], ut.prototype, "suffix$class", 2);
const { tw: o0, styleSheet: kb } = Me(at, new at()).createTwindContext();
Qr`
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
class s0 extends It {
  constructor() {
    super();
    it(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new gc({
      target: n,
      props: {
        tw: o0
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function l0(t) {
  Xt(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
}
function Dl(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[5].default
  ), l = Ve(
    s,
    t,
    /*$$scope*/
    t[4],
    null
  ), c = l || a0(t);
  return {
    c() {
      e = O("div"), n = O("span"), c && c.c(), k(n, "class", r = ce(
        /*tw*/
        t[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0"), k(e, "class", i = ce(
        /*tw*/
        t[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0");
    },
    m(a, u) {
      M(a, e, u), P(e, n), c && c.m(n, null), o = !0;
    },
    p(a, u) {
      l ? l.p && (!o || u & /*$$scope*/
      16) && Ge(
        l,
        s,
        a,
        /*$$scope*/
        a[4],
        o ? qe(
          s,
          /*$$scope*/
          a[4],
          u,
          null
        ) : Je(
          /*$$scope*/
          a[4]
        ),
        null
      ) : c && c.p && (!o || u & /*icon*/
      1) && c.p(a, o ? u : -1), (!o || u & /*tw*/
      4 && r !== (r = ce(
        /*tw*/
        a[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0")) && k(n, "class", r), (!o || u & /*tw*/
      4 && i !== (i = ce(
        /*tw*/
        a[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0")) && k(e, "class", i);
    },
    i(a) {
      o || ($(c, a), o = !0);
    },
    o(a) {
      R(c, a), o = !1;
    },
    d(a) {
      a && D(e), c && c.d(a);
    }
  };
}
function a0(t) {
  let e;
  return {
    c() {
      e = B(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      M(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && Ce(
        e,
        /*icon*/
        n[0]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function c0(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*icon*/
    t[0] && Dl(t)
  );
  return {
    c() {
      e = O("div"), u && u.c(), n = H(), r = O("div"), i = B(
        /*label*/
        t[1]
      ), k(r, "class", o = ce(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-8br8x0"), k(e, "class", s = ce(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0");
    },
    m(f, d) {
      M(f, e, d), u && u.m(e, null), P(e, n), P(e, r), P(r, i), l = !0, c || (a = le(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), c = !0);
    },
    p(f, [d]) {
      /*icon*/
      f[0] ? u ? (u.p(f, d), d & /*icon*/
      1 && $(u, 1)) : (u = Dl(f), u.c(), $(u, 1), u.m(e, n)) : u && (_e(), R(u, 1, 1, () => {
        u = null;
      }), ve()), (!l || d & /*label*/
      2) && Ce(
        i,
        /*label*/
        f[1]
      ), (!l || d & /*tw*/
      4 && o !== (o = ce(
        /*tw*/
        f[2]`flex-grow`
      ) + " svelte-8br8x0")) && k(r, "class", o), (!l || d & /*tw*/
      4 && s !== (s = ce(
        /*tw*/
        f[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0")) && k(e, "class", s);
    },
    i(f) {
      l || ($(u), l = !0);
    },
    o(f) {
      R(u), l = !1;
    },
    d(f) {
      f && D(e), u && u.d(), c = !1, a();
    }
  };
}
function u0(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: l } = e, c = Ye();
  const a = (u) => c("click", u);
  return t.$$set = (u) => {
    "icon" in u && n(0, o = u.icon), "label" in u && n(1, s = u.label), "tw" in u && n(2, l = u.tw), "$$scope" in u && n(4, i = u.$$scope);
  }, [o, s, l, c, i, r, a];
}
class f0 extends ge {
  constructor(e) {
    super(), pe(this, e, u0, c0, de, { icon: 0, label: 1, tw: 2 }, l0);
  }
}
function Ml(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function Nl(t) {
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
  return e = new f0({
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
      n || ($(e.$$.fragment, i), n = !0);
    },
    o(i) {
      R(e.$$.fragment, i), n = !1;
    },
    d(i) {
      z(e, i);
    }
  };
}
function d0(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Nl(Ml(t, i, l));
  const s = (l) => R(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = O("div");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      k(e, "class", n = /*tw*/
      t[4]`bg-white rounded shadow-lg ${/*container$class*/
      t[3]}`);
    },
    m(l, c) {
      M(l, e, c);
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
          const u = Ml(l, i, a);
          o[a] ? (o[a].p(u, c), $(o[a], 1)) : (o[a] = Nl(u), o[a].c(), $(o[a], 1), o[a].m(e, null));
        }
        for (_e(), a = i.length; a < o.length; a += 1)
          s(a);
        ve();
      }
      (!r || c & /*tw, container$class*/
      24 && n !== (n = /*tw*/
      l[4]`bg-white rounded shadow-lg ${/*container$class*/
      l[3]}`)) && k(e, "class", n);
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
        R(o[c]);
      r = !1;
    },
    d(l) {
      l && D(e), Rt(o, l);
    }
  };
}
function h0(t) {
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
    $$slots: { default: [d0] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (a.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (a.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (a.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new dc({ props: a }), me.push(() => fn(e, "anchorElement", s)), t[14](e), me.push(() => fn(e, "preferedHorizontalAlignment", l)), me.push(() => fn(e, "preferedVerticalAlignment", c)), {
      c() {
        q(e.$$.fragment);
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
        u[7], un(() => n = !1)), !r && f & /*preferedHorizontalAlignment*/
        2 && (r = !0, d.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
        u[1], un(() => r = !1)), !i && f & /*preferedVerticalAlignment*/
        1 && (i = !0, d.preferedVerticalAlignment = /*preferedVerticalAlignment*/
        u[0], un(() => i = !1)), e.$set(d);
      },
      i(u) {
        o || ($(e.$$.fragment, u), o = !0);
      },
      o(u) {
        R(e.$$.fragment, u), o = !1;
      },
      d(u) {
        t[14](null), z(e, u);
      }
    }
  );
}
function p0(t, e, n) {
  let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 10 } } = e, { container$class: l } = e, { tw: c = Ke } = e, { closeOnClick: a = !0 } = e, { items: u = [] } = e, f, d;
  function m() {
    console.log("openMenu", f, u), d.openPopup();
  }
  function p() {
    d.closePopup();
  }
  const h = (b, w) => b.action(w);
  function g(b) {
    f = b, n(7, f), n(9, r);
  }
  function T(b) {
    me[b ? "unshift" : "push"](() => {
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
    T,
    y,
    _
  ];
}
class g0 extends ge {
  constructor(e) {
    super(), pe(this, e, p0, h0, de, {
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
var m0 = Object.defineProperty, b0 = Object.getOwnPropertyDescriptor, ti = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? b0(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && m0(e, n, i), i;
};
const { tw: Tb, styleSheet: _0 } = Me(at, new at()).createTwindContext(), v0 = Qr`
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
class xn extends It {
  constructor() {
    super();
    it(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new g0({
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
it(xn, "styles", [_0.target, v0]);
ti([
  Be({ attribute: "items", type: Array })
], xn.prototype, "items", 2);
ti([
  Be({ attribute: "closeonclick", type: Boolean })
], xn.prototype, "closeOnClick", 2);
ti([
  Be({ attribute: "container$class", type: String })
], xn.prototype, "container$class", 2);
ti([
  Be({ attribute: "anchorselector", type: String })
], xn.prototype, "anchorSelector", 2);
const y0 = ei, w0 = s0;
function Ab() {
  gr("audako-entity-select", y0), gr("audako-tenant-select", w0), gr("audako-select", ut), gr("audako-menu", xn), Me(at, new at()).createTwindContext(!0);
}
function xb(t, e) {
  const n = new Jt(t, e);
  Ct(Ki, new Ki(t, e)), Ct(Jt, n), Ct(Bn, new Bn(t, e)), Ct(jn, new jn(n)), Ct(Ji, new Ji(t, e)), Ct(wl, new wl()), Ct($s, new $s(t, e));
}
function gr(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  Tn as BaseHttpService,
  Oi as BitSelectConversionTypes,
  R0 as ChangeRateMonitoringSettings,
  Jo as CompressionInterval,
  Ni as CompressionType,
  Xe as ConditionSettings,
  ze as ConfigurationEntity,
  T0 as ConnectionFailureConditionSettings,
  k0 as CounterConditionSettings,
  _b as CounterOffset,
  Ac as Dashboard,
  Nc as DashboardTab,
  Rc as DataConnection,
  j0 as DataConnectionBacnetSettings,
  ib as DataConnectionCsvImporterSettings,
  G0 as DataConnectionEhWebserverSettings,
  A0 as DataConnectionFailureConditionSettings,
  ob as DataConnectionFtpParserSettings,
  B0 as DataConnectionIEC104Settings,
  q0 as DataConnectionIot2000ModuleSettings,
  V0 as DataConnectionKnxSettings,
  rb as DataConnectionLoRaWANSettings,
  Q0 as DataConnectionMeterBusSettings,
  L0 as DataConnectionModbusSettings,
  K0 as DataConnectionModemInfoSettings,
  X0 as DataConnectionMqttSettings,
  Z0 as DataConnectionMtmAdapterSettings,
  tb as DataConnectionOTTDataLoggerSettings,
  Y0 as DataConnectionOneWireSettings,
  Ii as DataConnectionOpcUaSecurityAuthentication,
  xi as DataConnectionOpcUaSecurityMode,
  Ai as DataConnectionOpcUaSecurityPolicy,
  H0 as DataConnectionOpcUaSettings,
  $i as DataConnectionOpcUaStringEncoding,
  Pi as DataConnectionOpcUaTimestampSource,
  F0 as DataConnectionS7Settings,
  ue as DataConnectionSettings,
  z0 as DataConnectionSimulationSettings,
  J0 as DataConnectionSnmpSettings,
  Ti as DataConnectionSpecialDeviceProfile,
  nb as DataConnectionTeltonikaGPSSettings,
  qo as DataConnectionType,
  ue as DataConnectionTypedSettings,
  W0 as DataConnectionUniversalSettings,
  eb as DataConnectionYDOCDataLoggerSettings,
  $c as DataSource,
  Ji as DataSourceHttpService,
  ki as DataSourceType,
  N0 as DifferenceMonitoringSettings,
  kc as EntityHttpEndpoints,
  Jt as EntityHttpService,
  C0 as EntityIcons,
  jn as EntityNameService,
  y0 as EntitySelect,
  wl as EntitySelectDialogService,
  J as EntityType,
  zc as EntityTypeClassMapping,
  fb as EntityUtils,
  Uc as EventCategory,
  Ic as EventCondition,
  Ei as EventConditionSettingsType,
  xc as EventDefinition,
  v as Field,
  Fc as Formula,
  Ni as FormulaCompressionType,
  ft as FormulaIntervalSettings,
  Hc as FormulaNumericSettings,
  Fi as FormulaType,
  Hi as FormulaValueType,
  ub as FormulaVariable,
  Tc as Group,
  bb as HistoricalValue,
  vb as HistoricalValueObject,
  $s as HistoricalValueService,
  Is as LiveHubEvent,
  Un as LiveHubMethod,
  Ki as LiveValueService,
  I0 as MaximumMonitoringSettings,
  Ri as MeterBusMode,
  x0 as MinimumMonitoringSettings,
  U0 as ObjectSettings,
  es as ObjectUtils,
  Pr as OperationStatus,
  $0 as PeriodMaximumMonitoringSettings,
  P0 as PeriodMaximumMonitoringSettingsPeriod,
  Pc as PermaLiveModeSettings,
  O0 as PlausibilityMonitoringSettings,
  D0 as PositionMonitoringSettings,
  Lc as ProcessImage,
  M0 as RecordingFailureMonitoringSettings,
  Mi as RecordingSpecialProcessingType,
  Hn as RecordingType,
  Dc as Signal,
  Di as SignalAnalogSettings,
  Fl as SignalCompressionSettings,
  ne as SignalCompressionType,
  E0 as SignalConditionSettings,
  Vo as SignalConditionSettingsOperator,
  Mc as SignalCounterSettings,
  Go as SignalDigitalSettings,
  Ul as SignalRecordingSettings,
  uo as SignalSettings,
  Ze as SignalType,
  lb as SignalTypeSettingsMap,
  Rr as SubscriptionPrefix,
  Li as TagScope,
  Bn as TenantHttpService,
  w0 as TenantSelect,
  Oc as TenantView,
  sb as UserProfile,
  gb as UserProfileHttpService,
  Ko as ValueIntervalType,
  Ui as VariableType,
  xt as getAsyncValueAsPromise,
  cb as getDefaultCompressionSettingsBySignalType,
  ab as getDefaultRecordingSettingsBySignalType,
  hb as isNullOrEmpty,
  Hl as isNullOrUndefined,
  pb as isNullOrWhitespace,
  xb as registerCoreServices,
  Ab as registerCustomElements,
  Me as resolveService,
  yb as setGlobalDependencyContainer,
  db as tryCatch,
  Ct as tryRegisterService
};
