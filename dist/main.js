var ou = Object.defineProperty;
var su = (t, e, n) => e in t ? ou(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ot = (t, e, n) => (su(t, typeof e != "symbol" ? e + "" : e, n), n);
var L;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.Connector = "Connector", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition", t.ReportTemplate = "ReportTemplate", t.Report = "Report", t.Document = "Document", t.Storage = "Storage", t.Camera = "Camera", t.SwitchSchedule = "SwitchSchedule", t.User = "User", t.Role = "Role", t.Recipient = "Recipient", t.RecipientGroup = "RecipientGroup", t.AlarmingPlan = "AlarmingPlan", t.MaintenanceService = "MaintenanceService", t.TaskDefinition = "TaskDefinition", t.RuntimeScript = "RuntimeScript";
})(L || (L = {}));
const Eb = {
  [L.Group]: "mat folder",
  [L.Dashboard]: "adk adk-dashboard",
  [L.Signal]: "mat code",
  [L.Formula]: "mat timeline",
  [L.DataConnection]: "mat data_usage",
  [L.DataSource]: "mat storage"
}, lu = {
  Group: "/base/Group",
  Signal: "/daq/Signal",
  Formula: "/daq/Formula",
  Dashboard: "/base/Dashboard",
  DashboardTab: "/base/DashboardTab",
  DataConnection: "/daq/DataConnection",
  DataSource: "/daq/DataSource",
  Connector: "/daq/Connector",
  EventCondition: "/base/condition",
  ProcessImage: "/scada/ProcessImage",
  EventCategory: "/base/EventCategory",
  EventDefinition: "/base/EventDefinition",
  BatchDefinition: "/scada/batchdefinition",
  ReportTemplate: "/scada/ReportTemplate",
  Report: "/scada/Report",
  Document: "/base/Document",
  Storage: "/base/Storage",
  Camera: "/scada/Camera",
  SwitchSchedule: "/scada/SwitchSchedule",
  User: "/base/User",
  Role: "/base/Role",
  Recipient: "/alarming/Recipient",
  RecipientGroup: "/alarming/RecipientGroup",
  AlarmingPlan: "/alarming/AlarmingPlan",
  MaintenanceService: "/maintenance/MaintenanceService",
  TaskDefinition: "/maintenance/TaskDefinition",
  RuntimeScript: "/runtime/RuntimeScript"
};
var rs;
(function(t) {
  t.Locked = "Locked", t.Overwritten = "Overwritten", t.FillInVariables = "FillInVariables", t.ResolveRelative = "ResolveRelative";
})(rs || (rs = {}));
var is;
(function(t) {
  t.Locked = "Locked", t.Overwritten = "Overwritten";
})(is || (is = {}));
class h {
  constructor(e = null, n = []) {
    this.Value = e, this.OOAttributes = n;
  }
  static isField(e) {
    return e && e.Value !== void 0;
  }
}
class Ri extends h {
  constructor(e = null, n = []) {
    super(e, n), this.Translations = {};
  }
}
class Z {
  constructor(e) {
    this.Name = new Ri(), this.Alias = new h(), this.Description = new Ri(), this.Tags = new h([]), this.Version = 0, this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = new Date(), this.ChangedBy = null, this.ChangedOn = null, this.MaintenanceMode = !1, this.IsInstanceOf = null, this.IsTemplate = !1, this.OOAttributes = [], Object.assign(this, e);
  }
}
var Pi;
(function(t) {
  t.RadioBox = "RadioBox", t.DropDown = "DropDown";
})(Pi || (Pi = {}));
class Ot {
  constructor(e) {
    this._t = e ?? this.constructor.name, this.DefaultValue = null, this.Multiple = !1;
  }
}
class kb extends Ot {
  constructor() {
    super("NumberFieldSettings"), this.DecimalPlaces = null, this.Unit = null, this.Min = null, this.Max = null, this.StepSize = null;
  }
}
class au extends Ot {
  constructor(e = "TextFieldSettings") {
    super(e), this.MaxLength = null, this.ValidationRegex = null, this.Multiline = !1;
  }
}
class Tb extends au {
  constructor() {
    super("TextAreaFieldSettings"), this.Multiline = !0;
  }
}
class Ab extends Ot {
  constructor() {
    super("CheckboxFieldSettings");
  }
}
class xb extends Ot {
  constructor() {
    super("DateFieldSettings");
  }
}
class Ib extends Ot {
  constructor() {
    super("SelectFieldSettings"), this.PossibleValues = [], this.Type = Pi.DropDown;
  }
}
class Rb extends Ot {
  constructor() {
    super("EntityFieldSettings"), this.EntityType = null;
  }
}
class Pb extends Ot {
  constructor() {
    super("UserFieldSettings");
  }
}
class $b extends Ot {
  constructor() {
    super("CustomMappingFieldSettings"), this.CustomMappingId = null;
  }
}
class cu extends Z {
  constructor() {
    super(), this.Type = "Default", this.IsEntryPoint = !1, this.PartGroups = [], this.PropertyGroups = [], this.OOVariables = {}, this.TemplateVariables = [];
  }
}
class Db {
}
class Ob {
}
class Mb {
}
class uu extends Z {
}
class fu extends Z {
  constructor() {
    super(), this.DashboardId = new h(), this.Content = new h(), this.MasterTabId = new h(), this.EntityMappings = new h(), this.PlaceholderDefinition = new h(), this.PlaceholderValues = new h();
  }
}
class Fb {
}
class Nb {
}
class du extends Z {
  constructor() {
    super(), this.Enabled = new h(!0), this.EventCategoryId = new h(), this.ExpressionParameters = [], this.EventExpression = new h();
  }
}
class Ub {
  constructor() {
    this.Type = new h(), this.ParameterId = new h(), this.ConditionId = new h();
  }
}
var $i;
(function(t) {
  t.CriticalAlarm = "CriticalAlarm", t.MajorAlarm = "MajorAlarm", t.MinorAlarm = "MinorAlarm", t.WarningAlarm = "WarningAlarm", t.InformationalAlarm = "InformationalAlarm", t.IndeterminateAlarm = "IndeterminateAlarm", t.Info = "Info", t.Warning = "Warning", t.Error = "Error";
})($i || ($i = {}));
var Di;
(function(t) {
  t[t.OnRaised = 1] = "OnRaised", t[t.OnDropped = 2] = "OnDropped";
})(Di || (Di = {}));
class hu extends Z {
  constructor() {
    super(), this.Class = new h($i.Info), this.RequiresAcknowledgment = new h(!0), this.NoRepeatUntilAcknowledged = new h(!1), this.AlarmOn = new h(Di.OnRaised);
  }
}
class pu extends Z {
  constructor() {
    super(), this.Enabled = new h(!0);
  }
}
var Fe;
(function(t) {
  t.SignalConditionSettings = "SignalConditionSettings", t.MinimumMonitoringSettings = "MinimumMonitoringSettings", t.MaximumMonitoringSettings = "MaximumMonitoringSettings", t.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", t.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", t.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", t.PositionMonitoringSettings = "PositionMonitoringSettings", t.CounterConditionSettings = "CounterConditionSettings", t.TimebasedConditionSettings = "TimebasedConditionSettings", t.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", t.DataConnectionFailure = "DataConnectionFailure", t.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", t.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
})(Fe || (Fe = {}));
var os;
(function(t) {
  t.Equal = "Equal", t.GreaterThan = "GreaterThan", t.GreaterThanOrEqual = "GreaterThanOrEqual", t.LessThan = "LessThan", t.LessThanOrEqual = "LessThanOrEqual", t.NotEqual = "NotEqual";
})(os || (os = {}));
class We {
  constructor(e) {
    this._t = e;
  }
}
class Lb extends We {
  constructor() {
    super(Fe.SignalConditionSettings), this.InConditionOperator = new h(), this.OutConditionOperator = new h(), this.InConditionValue = new h(), this.OutConditionValue = new h(), this.InDelay = new h(), this.OutDelay = new h(), this.SignalId = new h();
  }
}
class Hb extends We {
  constructor() {
    super(Fe.CounterConditionSettings), this.SignalId = new h(), this.Value = new h(), this.StartValue = new h(), this.StartDate = new h(), this.DelayedTriggeringEnabled = new h(!1);
  }
}
class Bb extends We {
  constructor() {
    super(Fe.ConnectionFailureConditionSettings), this.MaxOfflineTime = new h(), this.DataSourceId = new h();
  }
}
class jb extends We {
  constructor() {
    super(Fe.DataConnectionFailure), this.MaxOfflineTime = new h(), this.DataConnectionId = new h();
  }
}
class zb extends We {
  constructor() {
    super(Fe.TimebasedConditionSettings), this.DelayedTriggeringEnabled = !1, this.TriggerMissedOnAdd = !1, this.SubsequentTriggeringEnabled = !1;
  }
}
class Vb extends We {
  constructor() {
    super(Fe.MinimumMonitoringSettings);
  }
}
class Wb extends We {
  constructor() {
    super(Fe.MaximumMonitoringSettings);
  }
}
class qb extends We {
  constructor() {
    super(Fe.PeriodMaximumMonitoringSettings), this.Periods = [];
  }
}
class Gb {
}
class Jb extends We {
  constructor() {
    super(Fe.ChangeRateMonitoringSettings);
  }
}
class Kb extends We {
  constructor() {
    super(Fe.PlausibilityMonitoringSettings);
  }
}
class Xb extends We {
  constructor() {
    super(Fe.PositionMonitoringSettings);
  }
}
class Yb extends We {
  constructor() {
    super(Fe.RecordingFailureMonitoringSettings), this.SignalId = new h(null), this.MaxOutageTime = new h(6e4);
  }
}
class Qb extends We {
  constructor() {
    super(Fe.DifferenceMonitoringSettings);
  }
}
class Zb {
}
var Oi;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter", t.SmartDevice = "SmartDevice";
})(Oi || (Oi = {}));
class gu extends Z {
  constructor() {
    super(), this.Address = new h(null), this.Password = new h(null), this.Type = new h(Oi.EdgeGateway), this.PermaLiveModeSettings = new mu(), this.Settings = {};
  }
}
class mu {
  constructor() {
    this.Enabled = new h(!1), this.BlockingTime = new h(10);
  }
}
var ss;
(function(t) {
  t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp", t.Mqtt = "Mqtt", t.OneWire = "OneWire", t.MeterBus = "MeterBus";
})(ss || (ss = {}));
var Mi;
(function(t) {
  t.None = "None", t.JUMO = "JUMO";
})(Mi || (Mi = {}));
class bu extends Z {
  constructor() {
    super(), this.DataSourceId = new h(null), this.Type = new h(null), this.Settings = null, this.SpecialDeviceProfile = new h(Mi.None), this.InactivityTimeout = new h(null), this.PollingInterval = new h(null);
  }
}
class fe {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class e_ extends fe {
  constructor() {
    super("DataConnectionS7Settings"), this.Host = new h(null), this.Port = new h(502), this.Rack = new h(0), this.Slot = new h(2), this.Timeout = new h(5e3), this.LocalTSAP = new h(null), this.RemoteTSAP = new h(null);
  }
}
var Fi;
(function(t) {
  t.None = "None", t.Basic128Rsa15 = "Basic128Rsa15", t.Basic256 = "Basic256", t.Basic256Sha256 = "Basic256Sha256";
})(Fi || (Fi = {}));
var Ni;
(function(t) {
  t.None = "None", t.Sign = "Sign", t.SignAndEncrypt = "SignAndEncrypt";
})(Ni || (Ni = {}));
var Ui;
(function(t) {
  t.Anonymous = "Anonymous", t.Credentials = "Credentials", t.Certificate = "Certificate";
})(Ui || (Ui = {}));
var Li;
(function(t) {
  t.ASCII = "ASCII", t.UTF7 = "UTF7", t.UTF8 = "UTF8", t.Unicode = "Unicode", t.UTF32 = "UTF32";
})(Li || (Li = {}));
var Hi;
(function(t) {
  t.Connection = "Connection", t.EdgeGateway = "EdgeGateway";
})(Hi || (Hi = {}));
class t_ extends fe {
  constructor() {
    super("DataConnectionOpcUaSettings"), this.Url = new h(null), this.SecurityPolicy = new h(Fi.None), this.SecurityMode = new h(Ni.None), this.SecurityAuthentication = new h(Ui.Anonymous), this.Username = new h(null), this.Password = new h(null), this.Certificate = new h(null), this.PrivateKey = new h(null), this.PublishingInterval = new h(1e3), this.SamplingInterval = new h(1e3), this.QueueSize = new h(-1), this.Timeout = new h(5e3), this.StringEncoding = new h(Li.UTF8), this.TimestampSource = new h(Hi.Connection);
  }
}
class n_ extends fe {
  constructor() {
    super("DataConnectionModbusSettings"), this.Host = new h(null), this.Port = new h(502);
  }
}
class r_ extends fe {
  constructor() {
    super("DataConnectionIEC104Settings"), this.Host = new h(null), this.Port = new h(2404), this.OriginatorAddress = new h(0), this.TimeSyncInterval = new h(720), this.GeneralInterrogationInterval = new h(60), this.CounterInterrogationInterval = new h(60), this.CommonAddressFieldLength = new h(2), this.CotFieldLength = new h(2), this.IoaFieldLength = new h(3), this.MaxIdleTime = new h(2e4), this.MaxTimeNoAckReceived = new h(15e3), this.MaxTimeNoAckSent = new h(1e4), this.MaxUnconfirmedIPdusReceived = new h(8), this.MaxNumOfOutstandingIPdus = new h(12), this.MessageFragmentTimeout = new h(5e3);
  }
}
class i_ extends fe {
  constructor() {
    super("DataConnectionBacnetSettings"), this.Port = new h(47808), this.Interface = new h(null), this.BroadcastAddress = new h(null), this.ApduTimeout = new h(6e3);
  }
}
class o_ extends fe {
  constructor() {
    super("DataConnectionSimulationSettings"), this.ScriptPath = new h(null), this.ScriptCycle = new h(500);
  }
}
class s_ extends fe {
  constructor() {
    super("DataConnectionUniversalSettings"), this.DriverPath = new h(null);
  }
}
class l_ extends fe {
  constructor() {
    super("DataConnectionKnxSettings"), this.Host = new h(null), this.Port = new h(null), this.Interface = new h(null), this.PhysicalAddress = new h("15.15.15"), this.ForceTunneling = new h(!1), this.MinimumDelay = new h(null), this.SuppressAckLDataReq = new h(!1);
  }
}
class a_ extends fe {
  constructor() {
    super("DataConnectionIot2000ModuleSettings"), this.MLFB = new h(null);
  }
}
class c_ extends fe {
  constructor() {
    super("DataConnectionEhWebserverSettings"), this.Host = new h(null), this.AccessCode = new h("0000");
  }
}
class u_ extends fe {
  constructor() {
    super("DataConnectionSnmpSettings"), this.Host = new h(null), this.Port = new h(161), this.Timeout = new h(5e3), this.Community = new h(null);
  }
}
class f_ extends fe {
  constructor() {
    super("DataConnectionModemInfoSettings");
  }
}
class d_ extends fe {
  constructor() {
    super("DataConnectionMqttSettings"), this.Url = new h(null), this.Username = new h(null), this.Password = new h(null);
  }
}
class h_ extends fe {
  constructor() {
    super("DataConnectionOneWireSettings"), this.Host = new h("localhost"), this.Port = new h(4304);
  }
}
var Bi;
(function(t) {
  t.serial = "serial", t.tcp = "tcp";
})(Bi || (Bi = {}));
class p_ extends fe {
  constructor() {
    super("DataConnectionMeterBusSettings"), this.Mode = new h(Bi.tcp), this.HostOrSerialPort = new h(null), this.Port = new h(0), this.BaudRate = new h(2400), this.Timeout = new h(5e3);
  }
}
class g_ extends fe {
  constructor() {
    super("DataConnectionMtmAdapterSettings"), this.TimeoutTime = new h(120), this.KeepAliveTime = new h(null), this.Username = new h(null), this.Password = new h(null);
  }
}
class m_ extends fe {
  constructor() {
    super("DataConnectionYDOCDataLoggerSettings"), this.DeviceId = new h(null), this.Username = new h(null), this.Password = new h(null);
  }
}
class b_ extends fe {
  constructor() {
    super("DataConnectionOTTDataLoggerSettings"), this.Station = new h(null), this.Password = new h(null);
  }
}
class __ extends fe {
  constructor() {
    super("DataConnectionTeltonikaGPSSettings"), this.Address = new h(null);
  }
}
class v_ extends fe {
  constructor() {
    super("DataConnectionLoRaWANSettings"), this.DeviceType = new h(null), this.DeviceEUI = new h(null), this.DeviceConfiguration = new h(null);
  }
}
class w_ extends fe {
  constructor() {
    super("DataConnectionCsvImporterSettings"), this.Address = new h(null);
  }
}
class y_ extends fe {
  constructor() {
    super("DataConnectionFtpParserSettings"), this.ParserType = new h(null), this.ConnectionType = new h(null), this.Address = new h(null), this.Port = new h(21), this.Username = new h(null), this.Password = new h(null), this.ValidateCertificate = new h(!1), this.FileDirectory = new h(null), this.EncryptionMode = new h(null), this.RequestInterval = new h(0), this.DeleteReadFiles = new h(!1);
  }
}
var et;
(function(t) {
  t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniversalInput", t.UniversalInOut = "UniversalInOut";
})(et || (et = {}));
class _u extends Z {
  constructor() {
    super(), this.Type = new h(et.AnalogInput), this.DataConnectionId = new h(), this.Address = new h(), this.Settings = new zi(), this.OutputSettings = new vu(), this.RecordingSettings = new ga(), this.CompressionSettings = new ma();
  }
}
class vu {
  constructor() {
    this.AutoresetEnabled = new h(!1), this.AutoresetValue = new h(0), this.AutoresetDelay = new h(3);
  }
}
var ji;
(function(t) {
  t.None = "None", t.SByte = "SByte", t.Short = "Short", t.Int = "Int";
})(ji || (ji = {}));
class Co {
  constructor(e) {
    this._t = e;
  }
}
class ls extends Co {
  constructor() {
    super("SignalDigitalSettings"), this.DigitalTrueColor = new h(), this.DigitalTrueCaption = new h(), this.DigitalFalseColor = new h(), this.DigitalFalseCaption = new h(), this.Invert = new h(!1), this.BitSelect = new h(), this.BitSelectConversion = new h(ji.None);
  }
}
class zi extends Co {
  constructor() {
    super("SignalAnalogSettings"), this.MinValue = new h(0), this.MaxValue = new h(100), this.DefaultValue = new h(null), this.DecimalPlaces = new h(0), this.Unit = new h(), this.Factor = new h(1), this.Offset = new h(0);
  }
}
class wu extends Co {
  constructor() {
    super("SignalCounterSettings"), this.MaxValue = new h(100), this.OffsetAutomatic = new h(!0), this.OffsetDetection = new h(!0), this.DecimalPlaces = new h(0), this.Unit = new h(), this.Factor = new h(1), this.Offset = new h(0);
  }
}
const S_ = {
  AnalogInput: zi,
  AnalogInOut: zi,
  DigitalInput: ls,
  DigitalInOut: ls,
  Counter: wu,
  UniversalInput: null,
  UniversalInOut: null
};
var Vi;
(function(t) {
  t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
})(Vi || (Vi = {}));
var Bn;
(function(t) {
  t.MeanValue = "MeanValue", t.LastValue = "LastValue";
})(Bn || (Bn = {}));
class ga {
  constructor() {
    this.SpecialProcessingType = new h(Vi.None), this.Type = new h(Bn.MeanValue), this.Interval = new h(300);
  }
}
function C_(t) {
  const e = new ga();
  return t === et.AnalogInput || t === et.AnalogInOut ? e.Type.Value = Bn.MeanValue : (t === et.Counter || t === et.DigitalInput || t === et.DigitalInOut) && (e.Type.Value = Bn.LastValue), e;
}
var re;
(function(t) {
  t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
})(re || (re = {}));
class ma {
  constructor() {
    this.Timezones = new h(), this.Timezones = new h([]), this.SubIntervalCompressionType = new h(re.None), this.HourIntervalCompressionType = new h(re.None), this.TwoHourIntervalCompressionType = new h(re.None), this.DayIntervalCompressionType = new h(re.None), this.WeekIntervalCompressionType = new h(re.None), this.MonthIntervalCompressionType = new h(re.None), this.QuarterIntervalCompressionType = new h(re.None), this.YearIntervalCompressionType = new h(re.None);
  }
}
function E_(t) {
  const e = new ma();
  return t === et.AnalogInput || t === et.AnalogInOut ? (e.SubIntervalCompressionType.Value = re.ArithmeticMean, e.HourIntervalCompressionType.Value = re.ArithmeticMean, e.TwoHourIntervalCompressionType.Value = re.ArithmeticMean, e.DayIntervalCompressionType.Value = re.ArithmeticMean, e.WeekIntervalCompressionType.Value = re.ArithmeticMean, e.MonthIntervalCompressionType.Value = re.ArithmeticMean, e.QuarterIntervalCompressionType.Value = re.ArithmeticMean, e.YearIntervalCompressionType.Value = re.ArithmeticMean) : t === et.Counter && (e.SubIntervalCompressionType.Value = re.Sum, e.HourIntervalCompressionType.Value = re.Sum, e.TwoHourIntervalCompressionType.Value = re.Sum, e.DayIntervalCompressionType.Value = re.Sum, e.WeekIntervalCompressionType.Value = re.Difference, e.MonthIntervalCompressionType.Value = re.Difference, e.QuarterIntervalCompressionType.Value = re.Difference, e.YearIntervalCompressionType.Value = re.Difference), e;
}
class yu extends Z {
  constructor() {
    super(), this.Variables = [], this.Type = new h(Gi.Numeric), this.SignalId = new h(null), this.CalculateOnlyWithFullVariableSet = new h(!1), this.NumericSettings = new Su(), this.ProcessIntervalSettings = new dt(), this.SubIntervalSettings = new dt(), this.HourIntervalSettings = new dt(), this.TwoHourIntervalSettings = new dt(), this.DayIntervalSettings = new dt(), this.WeekIntervalSettings = new dt(), this.MonthIntervalSettings = new dt(), this.QuarterIntervalSettings = new dt(), this.YearIntervalSettings = new dt();
  }
}
class Su {
  constructor() {
    this.DecimalPlaces = new h(0), this.Unit = new h(null);
  }
}
class k_ {
  constructor() {
    this.ValueType = new h(Ji.Normal), this.VariableName = new h(null), this.ObjectId = new h(null), this.ObjectType = new h(qi.Signal), this.TagScope = new h(Ki.Global);
  }
}
class dt {
  constructor() {
    this.Formula = new h(null), this.ValueIntervalType = new h(null), this.CompressionType = new h(Wi.ArithmeticMean), this.ProvidePreValues = new h(!1), this.ProvideLastValues = new h(!1);
  }
}
var as;
(function(t) {
  t.Standard = "Standard", t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(as || (as = {}));
var Wi;
(function(t) {
  t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
})(Wi || (Wi = {}));
var qi;
(function(t) {
  t.Signal = "Signal", t.Formula = "Formula", t.Tag = "Tag";
})(qi || (qi = {}));
var Gi;
(function(t) {
  t.Numeric = "Numeric", t.Universal = "Universal";
})(Gi || (Gi = {}));
var Ji;
(function(t) {
  t.Normal = "Normal", t.Minimum = "Minimum", t.Maximum = "Maximum";
})(Ji || (Ji = {}));
var Ki;
(function(t) {
  t.Global = "Global", t.Tenant = "Tenant", t.Group = "Group", t.GroupAndSubGroups = "GroupAndSubGroups";
})(Ki || (Ki = {}));
var cs;
(function(t) {
  t.RestApi = "RestApi";
})(cs || (cs = {}));
class Cu extends Z {
  constructor() {
    super(), this.Type = new h(), this.Objects = [];
  }
}
class Eu {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class T_ extends Eu {
  constructor() {
    super("ConnectorRestApiSettings"), this.Credentials = [];
  }
}
class A_ {
  constructor() {
    this.ClientId = new h(), this.ClientSecret = new h();
  }
}
var us;
(function(t) {
  t.Signal = "Signal", t.Formula = "Formula", t.Group = "Group", t.EventCategory = "EventCategory", t.BatchDefinition = "BatchDefinition";
})(us || (us = {}));
var fs;
(function(t) {
  t.Read = "Read", t.ReadWrite = "ReadWrite", t.Write = "Write";
})(fs || (fs = {}));
class x_ {
  constructor() {
    this.ObjectName = new h(), this.ObjectType = new h(), this.ObjectId = new h(), this.AccessLevel = new h();
  }
}
class ku extends Z {
  constructor() {
    super(), this.ImageFile = new h();
  }
}
var ds;
(function(t) {
  t.Start = "Start", t.Stop = "Stop", t.Release = "Release";
})(ds || (ds = {}));
var hs;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
})(hs || (hs = {}));
var ps;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})(ps || (ps = {}));
var gs;
(function(t) {
  t.EventDefinition = "EventDefinition", t.Condition = "Condition";
})(gs || (gs = {}));
var ms;
(function(t) {
  t.NumberField = "NumberField", t.TextField = "TextField", t.BooleanField = "BooleanField", t.SelectField = "SelectField", t.DateField = "DateField", t.CustomMappingField = "CustomMappingField", t.UserField = "UserField", t.TextAreaField = "TextAreaField", t.CheckboxField = "CheckboxField";
})(ms || (ms = {}));
var bs;
(function(t) {
  t.Manual = "Manual", t.Signal = "Signal", t.Incremental = "Incremental";
})(bs || (bs = {}));
class Tu extends Z {
  constructor() {
    super(), this.ParallelBatchesEnabled = !1, this.BatchTriggers = [], this.MetadataFields = {}, this.BatchValueObjects = [], this.ConditionEventEntries = [], this.BatchReportIds = [], this.BatchReportExportSettings = [], this.BatchReviewSettings = new xu(), this.ReleaseSettings = new Au();
  }
}
class I_ {
}
class Au {
  constructor() {
    this.Enabled = !1, this.SignalId = null, this.ReleaseValue = null;
  }
}
class R_ {
}
class P_ {
}
class $_ {
}
class D_ {
}
class xu {
  constructor() {
    this.Enabled = !1, this.Reviews = [], this.Ordered = !1;
  }
}
class O_ {
}
var Xi;
(function(t) {
  t.WYSIWYG = "WYSIWYG", t.JsTemplate = "JsTemplate";
})(Xi || (Xi = {}));
var Yi;
(function(t) {
  t.Day = "Day", t.Week = "Week", t.Month = "Month", t.Year = "Year";
})(Yi || (Yi = {}));
class Iu extends Z {
  constructor() {
    super(), this.ScriptFile = new h(), this.TemplateFile = new h(), this.EngineType = new h(Xi.JsTemplate), this.DefaultStepSize = new h(Yi.Day);
  }
}
var _s;
(function(t) {
  t.PDF = "PDF", t.CSV = "CSV", t.XLSX = "XLSX", t.DOCX = "DOCX", t.PNG = "PNG", t.JPG = "JPG";
})(_s || (_s = {}));
var vs;
(function(t) {
  t.Signal = "Signal", t.Formula = "Formula";
})(vs || (vs = {}));
var ws;
(function(t) {
  t.AVG = "AVG", t.SUM = "SUM", t.MIN = "MIN", t.MAX = "MAX";
})(ws || (ws = {}));
var ys;
(function(t) {
  t.TextBox = "TextBox", t.NumberBox = "NumberBox", t.RadioList = "RadioList", t.SelectList = "SelectList", t.Signal = "Signal", t.CheckBox = "CheckBox";
})(ys || (ys = {}));
class Ru extends Z {
  constructor() {
    super(), this.Title = new h(), this.Parameters = new h(), this.Elements = new h({}), this.Templates = new h([]), this.TimeZone = new h("CET"), this.EventReportSettings = new h(new Pu());
  }
}
class M_ {
}
class ba {
  constructor(e) {
    this._t = e ?? this.constructor.name, this.Caption = new h(), this.Alias = new h(), this.Parameters = new h();
  }
}
class F_ extends ba {
  constructor() {
    super("ReportCaptionElement"), this.Elements = [];
  }
}
class N_ extends ba {
  constructor() {
    super("ReportItemElement"), this.Type = new h(), this.ObjectType = new h(), this.ObjectId = new h();
  }
}
class Pu {
  constructor() {
    this.EventReports = [];
  }
}
class U_ {
  constructor() {
    this.Actions = [];
  }
}
class _a {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class L_ extends _a {
  constructor() {
    super("MailEventAction");
  }
}
class H_ extends _a {
  constructor() {
    super("StorageEventAction");
  }
}
class qr {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class Gr {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class B_ {
}
class j_ extends qr {
  constructor() {
    super("ReportGroup"), this.GroupElements = {};
  }
}
class z_ extends Gr {
  constructor() {
    super("ReportGroupSettings"), this.GroupElementSettings = {};
  }
}
class V_ extends qr {
  constructor() {
    super("ReportList"), this.ListEntries = [];
  }
}
class W_ extends Gr {
  constructor() {
    super("ReportListSettings");
  }
}
class q_ extends qr {
  constructor() {
    super("ReportField");
  }
}
class G_ extends Gr {
  constructor() {
    super("ReportFieldSettings");
  }
}
class J_ extends qr {
  constructor() {
    super("ReportTable");
  }
}
class K_ extends Gr {
  constructor() {
    super("ReportTableSettings");
  }
}
class va {
  constructor(e) {
    this._t = e ?? this.constructor.name, this.AdditionalSettings = {};
  }
}
class X_ extends va {
  constructor() {
    super("ReportTableEntry");
  }
}
class Y_ extends va {
  constructor() {
    super("ReportTableHeader");
  }
}
class Q_ {
}
let $u = class extends Z {
  constructor() {
    super(), this.DocumentFile = new h();
  }
};
class Du extends Z {
  constructor() {
    super(), this.FileEntries = {}, this.PrimitvEntries = {};
  }
}
class ev {
}
class tv {
}
var Ss;
(function(t) {
  t.LiveFirst = "LiveFirst", t.ArchiveFirst = "ArchiveFirst", t.ArchiveOnly = "ArchiveOnly";
})(Ss || (Ss = {}));
class Ou extends Z {
  constructor() {
    super(), this.Address = new h(), this.Username = new h(), this.Password = new h(), this.MaxViewInterval = new h(1e4), this.ViewMode = new h(), this.EventIds = new h();
  }
}
var Cs;
(function(t) {
  t.Scheduled = "Scheduled", t.Manual = "Manual", t.Event = "Event";
})(Cs || (Cs = {}));
class nv {
}
class Mu extends Z {
  constructor() {
    super(), this.Rules = new h([]);
  }
}
class rv {
}
class iv extends Z {
  constructor() {
    super(), this.RuleId = new h(), this.SwitchScheduleId = new h(), this.Enabled = new h(), this.StartValue = new h(), this.EndValue = new h();
  }
}
var Es;
(function(t) {
  t.On = "On", t.Off = "Off";
})(Es || (Es = {}));
var Qi;
(function(t) {
  t.None = "None", t.Pending = "Pending", t.Failed = "Failed", t.Denied = "Denied", t.Successful = "Successful";
})(Qi || (Qi = {}));
class Fu extends Z {
  constructor() {
    super(), this.FirstName = new h(), this.LastName = new h(), this.UserId = new h(), this.Email = new h(), this.RegistrationState = new h(Qi.None), this.RegistrationCredentials = new h(), this.RegistrationDate = new h();
  }
}
class Nu extends Z {
  constructor() {
    super(), this.RoleMember = [];
  }
}
var ks;
(function(t) {
  t.Male = "Male", t.Female = "Female", t.Diverse = "Diverse";
})(ks || (ks = {}));
class Uu extends Z {
  constructor() {
    super(), this.Salutation = new h(), this.Gender = new h(), this.Principal = new h(null), this.Contacts = new h({}), this.Enabled = new h(!1), this.FirstName = new h(null), this.LastName = new h(null);
  }
}
class Qn {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class ov extends Qn {
  constructor() {
    super("EmailContact");
  }
}
class wa extends Qn {
  constructor(e) {
    super(e);
  }
}
class sv extends wa {
  constructor() {
    super("SmsContact");
  }
}
class lv extends wa {
  constructor() {
    super("VoipContact");
  }
}
class av extends Qn {
  constructor() {
    super("TelegramContact");
  }
}
class cv extends Qn {
  constructor() {
    super("TeamsContact");
  }
}
class uv extends Qn {
  constructor() {
    super("PushoverContact");
  }
}
class Lu extends Z {
  constructor() {
    super(), this.Enabled = new h(!0), this.Loops = new h(3), this.Members = [];
  }
}
class fv {
}
class Hu extends Z {
  constructor() {
    super(), this.Enabled = new h(), this.Offset = new h(), this.EventCategoryIds = new h(), this.GlobalRecipient = new h(), this.DefaultRecipient = new h();
  }
}
class Bu extends Z {
  constructor() {
    super(), this.Category = new h(), this.Enabled = new h(), this.Trigger = new h(), this.MaintenanceTasks = new h();
  }
}
class ju extends Z {
  constructor() {
    super(), this._t = this.constructor.name, this.DefaultAssignees = new h([]), this.AgendaDefinition = new h([]);
  }
}
class dv {
  constructor(e) {
    this._t = e ?? this.constructor.name, this.Description = new Ri();
  }
}
class zu extends Z {
  constructor() {
    super(), this.Script = new h(), this.Enabled = new h(!0);
  }
}
class hv {
  constructor() {
    this.Name = new h(), this.Value = new h();
  }
}
class Jr {
  constructor(e) {
    this._t = e ?? this.constructor.name;
  }
}
class pv extends Jr {
  constructor() {
    super("CyclicTrigger"), this.Interval = new h();
  }
}
var Ts;
(function(t) {
  t.Entered = "Entered", t.Dropped = "Dropped", t.Acknowledged = "Acknowledged";
})(Ts || (Ts = {}));
class gv extends Jr {
  constructor() {
    super("EventTrigger"), this.State = new h(), this.EventDefinitionId = new h();
  }
}
var As;
(function(t) {
  t.Raised = "Raised", t.Dropped = "Dropped";
})(As || (As = {}));
class mv extends Jr {
  constructor() {
    super("ConditionTrigger"), this.State = new h(), this.ConditionId = new h();
  }
}
var xs;
(function(t) {
  t.Started = "Started", t.Stopped = "Stopped";
})(xs || (xs = {}));
class bv extends Jr {
  constructor() {
    super("BatchTrigger"), this.State = new h(), this.BatchDefinitionId = new h();
  }
}
class Vu {
  constructor(e) {
    Object.assign(this, e);
  }
}
class _v {
}
var Is;
(function(t) {
  t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
})(Is || (Is = {}));
const Wu = {
  [L.Group]: cu,
  [L.Signal]: _u,
  [L.Dashboard]: uu,
  [L.DashboardTab]: fu,
  [L.DataConnection]: bu,
  [L.DataSource]: gu,
  [L.Connector]: Cu,
  [L.EventCategory]: hu,
  [L.EventCondition]: pu,
  [L.EventDefinition]: du,
  [L.Formula]: yu,
  [L.ProcessImage]: ku,
  [L.BatchDefinition]: Tu,
  [L.ReportTemplate]: Iu,
  [L.Report]: Ru,
  [L.Document]: $u,
  [L.Storage]: Du,
  [L.Camera]: Ou,
  [L.SwitchSchedule]: Mu,
  [L.User]: Fu,
  [L.Role]: Nu,
  [L.Recipient]: Uu,
  [L.RecipientGroup]: Lu,
  [L.AlarmingPlan]: Hu,
  [L.MaintenanceService]: Bu,
  [L.TaskDefinition]: ju,
  [L.RuntimeScript]: zu
};
class Rs {
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
class vv {
  static isEntityType(e) {
    return Object.keys(L).includes(e);
  }
  static getEntityPropertiesByType(e, n) {
    const r = Wu[e];
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
      l === "AdditionalFields" ? (console.log(s, c), !((i = s[c]) === null || i === void 0) && i.Value && (s = Rs.tryParseJson(s[c].Value), console.log("AdditionalValue", s))) : s = s[c], l = c;
    }
    return r || h.isField(s) ? s == null ? void 0 : s.Value : s;
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
      h.isField(s) ? i.push({
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
      o || h.isField(e[c]) ? e[c] = new h(r) : e[c] = r;
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
      e[i] = new h(r == null ? void 0 : r.toString());
      return;
    } else {
      let o = e[i] ? Rs.tryParseJson(e[i].Value, {}) : {};
      for (const s of n)
        n.indexOf(s) === n.length - 1 ? o[s] = r : (o[s] = o[s] || {}, o = o[s]);
      e[i] = new h(JSON.stringify(o));
    }
  }
}
var qu = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
function wv(t) {
  return qu(this, void 0, void 0, function* () {
    try {
      return [null, yield Promise.resolve(t)];
    } catch (e) {
      return [e, null];
    }
  });
}
function ya(t) {
  return t == null;
}
function yv(t) {
  return ya(t) || t.length === 0;
}
function Sv(t) {
  return ya(t) || t.trim().length === 0;
}
var Zi = function(t, e) {
  return Zi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Zi(t, e);
};
function ut(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Zi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Gu(t, e, n, r) {
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
function Sa(t, e) {
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
function mn(t) {
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
function Pt(t, e) {
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
function $t(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function an(t) {
  return this instanceof an ? (this.v = t, this) : new an(t);
}
function Ju(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(b) {
      return new Promise(function(g, p) {
        o.push([d, b, g, p]) > 1 || l(d, b);
      });
    });
  }
  function l(d, b) {
    try {
      c(r[d](b));
    } catch (g) {
      f(o[0][3], g);
    }
  }
  function c(d) {
    d.value instanceof an ? Promise.resolve(d.value.v).then(a, u) : f(o[0][2], d);
  }
  function a(d) {
    l("next", d);
  }
  function u(d) {
    l("throw", d);
  }
  function f(d, b) {
    d(b), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function Ku(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof mn == "function" ? mn(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function ce(t) {
  return typeof t == "function";
}
function Eo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ci = Eo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ir(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Zn = function() {
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
            for (var l = mn(s), c = l.next(); !c.done; c = l.next()) {
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
      if (ce(u))
        try {
          u();
        } catch (p) {
          o = p instanceof ci ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = mn(f), b = d.next(); !b.done; b = d.next()) {
            var g = b.value;
            try {
              Ps(g);
            } catch (p) {
              o = o ?? [], p instanceof ci ? o = $t($t([], Pt(o)), Pt(p.errors)) : o.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            b && !b.done && (i = d.return) && i.call(d);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (o)
        throw new ci(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Ps(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Ir(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Ir(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Ca = Zn.EMPTY;
function Ea(t) {
  return t instanceof Zn || t && "closed" in t && ce(t.remove) && ce(t.add) && ce(t.unsubscribe);
}
function Ps(t) {
  ce(t) ? t() : t.unsubscribe();
}
var ka = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, eo = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = eo.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, $t([t, e], Pt(n))) : setTimeout.apply(void 0, $t([t, e], Pt(n)));
  },
  clearTimeout: function(t) {
    var e = eo.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Ta(t) {
  eo.setTimeout(function() {
    throw t;
  });
}
function to() {
}
function vr(t) {
  t();
}
var ko = function(t) {
  ut(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Ea(n) && n.add(r)) : r.destination = Zu, r;
  }
  return e.create = function(n, r, i) {
    return new bn(n, r, i);
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
}(Zn), Xu = Function.prototype.bind;
function ui(t, e) {
  return Xu.call(t, e);
}
var Yu = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        ar(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        ar(r);
      }
    else
      ar(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ar(n);
      }
  }, t;
}(), bn = function(t) {
  ut(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    if (ce(n) || !n)
      s = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      o && ka.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return o.unsubscribe();
      }, s = {
        next: n.next && ui(n.next, l),
        error: n.error && ui(n.error, l),
        complete: n.complete && ui(n.complete, l)
      }) : s = n;
    }
    return o.destination = new Yu(s), o;
  }
  return e;
}(ko);
function ar(t) {
  Ta(t);
}
function Qu(t) {
  throw t;
}
var Zu = {
  closed: !0,
  next: to,
  error: Qu,
  complete: to
}, To = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Tn(t) {
  return t;
}
function ef(t) {
  return t.length === 0 ? Tn : t.length === 1 ? t[0] : function(n) {
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
    var i = this, o = nf(e) ? e : new bn(e, n, r);
    return vr(function() {
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
    return n = $s(n), new n(function(i, o) {
      var s = new bn({
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
  }, t.prototype[To] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return ef(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = $s(e), new e(function(r, i) {
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
function $s(t) {
  var e;
  return (e = t ?? ka.Promise) !== null && e !== void 0 ? e : Promise;
}
function tf(t) {
  return t && ce(t.next) && ce(t.error) && ce(t.complete);
}
function nf(t) {
  return t && t instanceof ko || tf(t) && Ea(t);
}
function rf(t) {
  return ce(t == null ? void 0 : t.lift);
}
function xe(t) {
  return function(e) {
    if (rf(e))
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
  return new of(t, e, n, r, i);
}
var of = function(t) {
  ut(e, t);
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
}(ko), sf = Eo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), De = function(t) {
  ut(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Ds(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new sf();
  }, e.prototype.next = function(n) {
    var r = this;
    vr(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = mn(r.currentObservers), l = s.next(); !l.done; l = s.next()) {
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
    vr(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    vr(function() {
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
    return o || s ? Ca : (this.currentObservers = null, l.push(n), new Zn(function() {
      r.currentObservers = null, Ir(l, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Oe();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Ds(n, r);
  }, e;
}(Oe), Ds = function(t) {
  ut(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Ca;
  }, e;
}(De), Ao = function(t) {
  ut(e, t);
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
}(De), xo = {
  now: function() {
    return (xo.delegate || Date).now();
  },
  delegate: void 0
}, Aa = function(t) {
  ut(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = xo);
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
}(De), lf = function(t) {
  ut(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Zn), Rr = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = Rr.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, $t([t, e], Pt(n))) : setInterval.apply(void 0, $t([t, e], Pt(n)));
  },
  clearInterval: function(t) {
    var e = Rr.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, af = function(t) {
  ut(e, t);
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
    return i === void 0 && (i = 0), Rr.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    Rr.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Ir(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(lf), Os = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = xo.now, t;
}(), cf = function(t) {
  ut(e, t);
  function e(n, r) {
    r === void 0 && (r = Os.now);
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
}(Os), Kr = new cf(af), uf = Kr, ff = new Oe(function(t) {
  return t.complete();
});
function xa(t) {
  return t && ce(t.schedule);
}
function Ia(t) {
  return t[t.length - 1];
}
function df(t) {
  return ce(Ia(t)) ? t.pop() : void 0;
}
function Io(t) {
  return xa(Ia(t)) ? t.pop() : void 0;
}
var Ra = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Pa(t) {
  return ce(t == null ? void 0 : t.then);
}
function $a(t) {
  return ce(t[To]);
}
function Da(t) {
  return Symbol.asyncIterator && ce(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Oa(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function hf() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ma = hf();
function Fa(t) {
  return ce(t == null ? void 0 : t[Ma]);
}
function Na(t) {
  return Ju(this, arguments, function() {
    var n, r, i, o;
    return Sa(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, an(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, an(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, an(i)];
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
function Ua(t) {
  return ce(t == null ? void 0 : t.getReader);
}
function nt(t) {
  if (t instanceof Oe)
    return t;
  if (t != null) {
    if ($a(t))
      return pf(t);
    if (Ra(t))
      return gf(t);
    if (Pa(t))
      return mf(t);
    if (Da(t))
      return La(t);
    if (Fa(t))
      return bf(t);
    if (Ua(t))
      return _f(t);
  }
  throw Oa(t);
}
function pf(t) {
  return new Oe(function(e) {
    var n = t[To]();
    if (ce(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function gf(t) {
  return new Oe(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function mf(t) {
  return new Oe(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Ta);
  });
}
function bf(t) {
  return new Oe(function(e) {
    var n, r;
    try {
      for (var i = mn(t), o = i.next(); !o.done; o = i.next()) {
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
function La(t) {
  return new Oe(function(e) {
    vf(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function _f(t) {
  return La(Na(t));
}
function vf(t, e) {
  var n, r, i, o;
  return Gu(this, void 0, void 0, function() {
    var s, l;
    return Sa(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Ku(t), c.label = 1;
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
function bt(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function Ha(t, e) {
  return e === void 0 && (e = 0), xe(function(n, r) {
    n.subscribe(_e(r, function(i) {
      return bt(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return bt(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return bt(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ba(t, e) {
  return e === void 0 && (e = 0), xe(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function wf(t, e) {
  return nt(t).pipe(Ba(e), Ha(e));
}
function yf(t, e) {
  return nt(t).pipe(Ba(e), Ha(e));
}
function Sf(t, e) {
  return new Oe(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Cf(t, e) {
  return new Oe(function(n) {
    var r;
    return bt(n, e, function() {
      r = t[Ma](), bt(n, e, function() {
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
      return ce(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function ja(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Oe(function(n) {
    bt(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      bt(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Ef(t, e) {
  return ja(Na(t), e);
}
function kf(t, e) {
  if (t != null) {
    if ($a(t))
      return wf(t, e);
    if (Ra(t))
      return Sf(t, e);
    if (Pa(t))
      return yf(t, e);
    if (Da(t))
      return ja(t, e);
    if (Fa(t))
      return Cf(t, e);
    if (Ua(t))
      return Ef(t, e);
  }
  throw Oa(t);
}
function Yt(t, e) {
  return e ? kf(t, e) : nt(t);
}
function cn() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Io(t);
  return Yt(t, n);
}
function Tf(t) {
  return !!t && (t instanceof Oe || ce(t.lift) && ce(t.subscribe));
}
var Af = Eo(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function jn(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var o = new bn({
      next: function(s) {
        r(s), o.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new Af());
      }
    });
    t.subscribe(o);
  });
}
function xf(t) {
  return t instanceof Date && !isNaN(t);
}
function Jt(t, e) {
  return xe(function(n, r) {
    var i = 0;
    n.subscribe(_e(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
var If = Array.isArray;
function Rf(t, e) {
  return If(e) ? t.apply(void 0, $t([], Pt(e))) : t(e);
}
function Pf(t) {
  return Jt(function(e) {
    return Rf(t, e);
  });
}
var $f = Array.isArray, Df = Object.getPrototypeOf, Of = Object.prototype, Mf = Object.keys;
function Ff(t) {
  if (t.length === 1) {
    var e = t[0];
    if ($f(e))
      return { args: e, keys: null };
    if (Nf(e)) {
      var n = Mf(e);
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
function Nf(t) {
  return t && typeof t == "object" && Df(t) === Of;
}
function Uf(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function za() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Io(t), r = df(t), i = Ff(t), o = i.args, s = i.keys;
  if (o.length === 0)
    return Yt([], n);
  var l = new Oe(Lf(o, n, s ? function(c) {
    return Uf(s, c);
  } : Tn));
  return r ? l.pipe(Pf(r)) : l;
}
function Lf(t, e, n) {
  return n === void 0 && (n = Tn), function(r) {
    Ms(e, function() {
      for (var i = t.length, o = new Array(i), s = i, l = i, c = function(u) {
        Ms(e, function() {
          var f = Yt(t[u], e), d = !1;
          f.subscribe(_e(r, function(b) {
            o[u] = b, d || (d = !0, l--), l || r.next(n(o.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, a = 0; a < i; a++)
        c(a);
    }, r);
  };
}
function Ms(t, e, n) {
  t ? bt(n, t, e) : e();
}
function Hf(t, e, n, r, i, o, s, l) {
  var c = [], a = 0, u = 0, f = !1, d = function() {
    f && !c.length && !a && e.complete();
  }, b = function(p) {
    return a < r ? g(p) : c.push(p);
  }, g = function(p) {
    o && e.next(p), a++;
    var m = !1;
    nt(n(p, u++)).subscribe(_e(e, function(T) {
      i == null || i(T), o ? b(T) : e.next(T);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          a--;
          for (var T = function() {
            var w = c.shift();
            s ? bt(e, s, function() {
              return g(w);
            }) : g(w);
          }; c.length && a < r; )
            T();
          d();
        } catch (w) {
          e.error(w);
        }
    }));
  };
  return t.subscribe(_e(e, b, function() {
    f = !0, d();
  })), function() {
    l == null || l();
  };
}
function Va(t, e, n) {
  return n === void 0 && (n = 1 / 0), ce(e) ? Va(function(r, i) {
    return Jt(function(o, s) {
      return e(r, o, i, s);
    })(nt(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), xe(function(r, i) {
    return Hf(r, i, t, n);
  }));
}
function Bf(t) {
  return t === void 0 && (t = 1 / 0), Va(Tn, t);
}
function jf() {
  return Bf(1);
}
function zf() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return jf()(Yt(t, Io(t)));
}
function Wa(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = uf);
  var r = -1;
  return e != null && (xa(e) ? n = e : r = e), new Oe(function(i) {
    var o = xf(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function un(t, e) {
  return xe(function(n, r) {
    var i = 0;
    n.subscribe(_e(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function Vf(t) {
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
      r = !0, i = a, o || nt(t(a)).subscribe(o = _e(n, l, c));
    }, function() {
      s = !0, (!r || !o || o.closed) && n.complete();
    }));
  });
}
function Wf(t, e) {
  return e === void 0 && (e = Kr), Vf(function() {
    return Wa(t, e);
  });
}
function qa(t) {
  return xe(function(e, n) {
    var r = null, i = !1, o;
    r = e.subscribe(_e(n, void 0, void 0, function(s) {
      o = nt(t(s, qa(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function qf(t, e) {
  return e === void 0 && (e = Kr), xe(function(n, r) {
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
function Gf(t) {
  return t <= 0 ? function() {
    return ff;
  } : xe(function(e, n) {
    var r = 0;
    e.subscribe(_e(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Jf(t) {
  return Jt(function() {
    return t;
  });
}
function Kf(t, e) {
  return e === void 0 && (e = Tn), t = t ?? Xf, xe(function(n, r) {
    var i, o = !0;
    n.subscribe(_e(r, function(s) {
      var l = e(s);
      (o || !t(i, l)) && (o = !1, i = l, r.next(s));
    }));
  });
}
function Xf(t, e) {
  return t === e;
}
function Yf(t, e) {
  return Kf(function(n, r) {
    return e ? e(n[t], r[t]) : n[t] === r[t];
  });
}
function Qf(t) {
  return xe(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Zf(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new De();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, o = t.resetOnComplete, s = o === void 0 ? !0 : o, l = t.resetOnRefCountZero, c = l === void 0 ? !0 : l;
  return function(a) {
    var u, f, d, b = 0, g = !1, p = !1, m = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, T = function() {
      m(), u = d = void 0, g = p = !1;
    }, w = function() {
      var v = u;
      T(), v == null || v.unsubscribe();
    };
    return xe(function(v, _) {
      b++, !p && !g && m();
      var y = d = d ?? n();
      _.add(function() {
        b--, b === 0 && !p && !g && (f = fi(w, c));
      }), y.subscribe(_), !u && b > 0 && (u = new bn({
        next: function(x) {
          return y.next(x);
        },
        error: function(x) {
          p = !0, m(), f = fi(T, i, x), y.error(x);
        },
        complete: function() {
          g = !0, m(), f = fi(T, s), y.complete();
        }
      }), nt(v).subscribe(u));
    })(a);
  };
}
function fi(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new bn({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return e.apply(void 0, $t([], Pt(n))).subscribe(i);
  }
}
function ed(t, e, n) {
  var r, i, o, s, l = !1;
  return t && typeof t == "object" ? (r = t.bufferSize, s = r === void 0 ? 1 / 0 : r, i = t.windowTime, e = i === void 0 ? 1 / 0 : i, o = t.refCount, l = o === void 0 ? !1 : o, n = t.scheduler) : s = t ?? 1 / 0, Zf({
    connector: function() {
      return new Aa(s, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: l
  });
}
function td(t) {
  return un(function(e, n) {
    return t <= n;
  });
}
function Ga(t, e) {
  return xe(function(n, r) {
    var i = null, o = 0, s = !1, l = function() {
      return s && !i && r.complete();
    };
    n.subscribe(_e(r, function(c) {
      i == null || i.unsubscribe();
      var a = 0, u = o++;
      nt(t(c, u)).subscribe(i = _e(r, function(f) {
        return r.next(e ? e(c, f, u, a++) : f);
      }, function() {
        i = null, l();
      }));
    }, function() {
      s = !0, l();
    }));
  });
}
function _t(t) {
  return xe(function(e, n) {
    nt(t).subscribe(_e(n, function() {
      return n.complete();
    }, to)), !n.closed && e.subscribe(n);
  });
}
function nd(t, e) {
  return e === void 0 && (e = !1), xe(function(n, r) {
    var i = 0;
    n.subscribe(_e(r, function(o) {
      var s = t(o, i++);
      (s || e) && r.next(o), !s && r.complete();
    }));
  });
}
function rd(t, e, n) {
  var r = ce(t) || e || n ? { next: t, error: e, complete: n } : t;
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
  }) : Tn;
}
var Ja = {
  leading: !0,
  trailing: !1
};
function id(t, e) {
  return e === void 0 && (e = Ja), xe(function(n, r) {
    var i = e.leading, o = e.trailing, s = !1, l = null, c = null, a = !1, u = function() {
      c == null || c.unsubscribe(), c = null, o && (b(), a && r.complete());
    }, f = function() {
      c = null, a && r.complete();
    }, d = function(g) {
      return c = nt(t(g)).subscribe(_e(r, u, f));
    }, b = function() {
      if (s) {
        s = !1;
        var g = l;
        l = null, r.next(g), !a && d(g);
      }
    };
    n.subscribe(_e(r, function(g) {
      s = !0, l = g, !(c && !c.closed) && (i ? b() : d(g));
    }, function() {
      a = !0, !(o && s && c && !c.closed) && r.complete();
    }));
  });
}
function od(t, e, n) {
  e === void 0 && (e = Kr), n === void 0 && (n = Ja);
  var r = Wa(t, e);
  return id(function() {
    return r;
  }, n);
}
function It(t) {
  return typeof t == "function" ? It(t()) : Tf(t) ? jn(t) : Promise.resolve(t);
}
function Ka(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: sd } = Object.prototype, { getPrototypeOf: Ro } = Object, { iterator: Xr, toStringTag: Xa } = Symbol, Yr = ((t) => (e) => {
  const n = sd.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), rt = (t) => (t = t.toLowerCase(), (e) => Yr(e) === t), Qr = (t) => (e) => typeof e === t, { isArray: An } = Array, _n = Qr("undefined");
function er(t) {
  return t !== null && !_n(t) && t.constructor !== null && !_n(t.constructor) && je(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ya = rt("ArrayBuffer");
function ld(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ya(t.buffer), e;
}
const ad = Qr("string"), je = Qr("function"), Qa = Qr("number"), tr = (t) => t !== null && typeof t == "object", cd = (t) => t === !0 || t === !1, wr = (t) => {
  if (Yr(t) !== "object")
    return !1;
  const e = Ro(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Xa in t) && !(Xr in t);
}, ud = (t) => {
  if (!tr(t) || er(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, fd = rt("Date"), dd = rt("File"), hd = rt("Blob"), pd = rt("FileList"), gd = (t) => tr(t) && je(t.pipe), md = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || je(t.append) && ((e = Yr(t)) === "formdata" || // detect form-data instance
  e === "object" && je(t.toString) && t.toString() === "[object FormData]"));
}, bd = rt("URLSearchParams"), [_d, vd, wd, yd] = ["ReadableStream", "Request", "Response", "Headers"].map(rt), Sd = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function nr(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), An(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    if (er(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = o.length;
    let l;
    for (r = 0; r < s; r++)
      l = o[r], e.call(null, t[l], l, t);
  }
}
function Za(t, e) {
  if (er(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const jt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ec = (t) => !_n(t) && t !== jt;
function no() {
  const { caseless: t, skipUndefined: e } = ec(this) && this || {}, n = {}, r = (i, o) => {
    const s = t && Za(n, o) || o;
    wr(n[s]) && wr(i) ? n[s] = no(n[s], i) : wr(i) ? n[s] = no({}, i) : An(i) ? n[s] = i.slice() : (!e || !_n(i)) && (n[s] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && nr(arguments[i], r);
  return n;
}
const Cd = (t, e, n, { allOwnKeys: r } = {}) => (nr(e, (i, o) => {
  n && je(i) ? Object.defineProperty(t, o, {
    value: Ka(i, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(t, o, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: r }), t), Ed = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), kd = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Td = (t, e, n, r) => {
  let i, o, s;
  const l = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, t, e)) && !l[s] && (e[s] = t[s], l[s] = !0);
    t = n !== !1 && Ro(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Ad = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, xd = (t) => {
  if (!t)
    return null;
  if (An(t))
    return t;
  let e = t.length;
  if (!Qa(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Id = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ro(Uint8Array)), Rd = (t, e) => {
  const r = (t && t[Xr]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    e.call(t, o[0], o[1]);
  }
}, Pd = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, $d = rt("HTMLFormElement"), Dd = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Fs = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Od = rt("RegExp"), tc = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  nr(n, (i, o) => {
    let s;
    (s = e(i, o, t)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(t, r);
}, Md = (t) => {
  tc(t, (e, n) => {
    if (je(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (je(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Fd = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return An(t) ? r(t) : r(String(t).split(e)), n;
}, Nd = () => {
}, Ud = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Ld(t) {
  return !!(t && je(t.append) && t[Xa] === "FormData" && t[Xr]);
}
const Hd = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (tr(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (er(r))
        return r;
      if (!("toJSON" in r)) {
        e[i] = r;
        const o = An(r) ? [] : {};
        return nr(r, (s, l) => {
          const c = n(s, i + 1);
          !_n(c) && (o[l] = c);
        }), e[i] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, Bd = rt("AsyncFunction"), jd = (t) => t && (tr(t) || je(t)) && je(t.then) && je(t.catch), nc = ((t, e) => t ? setImmediate : e ? ((n, r) => (jt.addEventListener("message", ({ source: i, data: o }) => {
  i === jt && o === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), jt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  je(jt.postMessage)
), zd = typeof queueMicrotask < "u" ? queueMicrotask.bind(jt) : typeof process < "u" && process.nextTick || nc, Vd = (t) => t != null && je(t[Xr]), C = {
  isArray: An,
  isArrayBuffer: Ya,
  isBuffer: er,
  isFormData: md,
  isArrayBufferView: ld,
  isString: ad,
  isNumber: Qa,
  isBoolean: cd,
  isObject: tr,
  isPlainObject: wr,
  isEmptyObject: ud,
  isReadableStream: _d,
  isRequest: vd,
  isResponse: wd,
  isHeaders: yd,
  isUndefined: _n,
  isDate: fd,
  isFile: dd,
  isBlob: hd,
  isRegExp: Od,
  isFunction: je,
  isStream: gd,
  isURLSearchParams: bd,
  isTypedArray: Id,
  isFileList: pd,
  forEach: nr,
  merge: no,
  extend: Cd,
  trim: Sd,
  stripBOM: Ed,
  inherits: kd,
  toFlatObject: Td,
  kindOf: Yr,
  kindOfTest: rt,
  endsWith: Ad,
  toArray: xd,
  forEachEntry: Rd,
  matchAll: Pd,
  isHTMLForm: $d,
  hasOwnProperty: Fs,
  hasOwnProp: Fs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: tc,
  freezeMethods: Md,
  toObjectSet: Fd,
  toCamelCase: Dd,
  noop: Nd,
  toFiniteNumber: Ud,
  findKey: Za,
  global: jt,
  isContextDefined: ec,
  isSpecCompliantForm: Ld,
  toJSONObject: Hd,
  isAsyncFn: Bd,
  isThenable: jd,
  setImmediate: nc,
  asap: zd,
  isIterable: Vd
};
class Ue extends Error {
  static from(e, n, r, i, o, s) {
    const l = new Ue(e.message, n || e.code, r, i, o);
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
Ue.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Ue.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Ue.ECONNABORTED = "ECONNABORTED";
Ue.ETIMEDOUT = "ETIMEDOUT";
Ue.ERR_NETWORK = "ERR_NETWORK";
Ue.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Ue.ERR_DEPRECATED = "ERR_DEPRECATED";
Ue.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Ue.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Ue.ERR_CANCELED = "ERR_CANCELED";
Ue.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Ue.ERR_INVALID_URL = "ERR_INVALID_URL";
const q = Ue, Wd = null;
function ro(t) {
  return C.isPlainObject(t) || C.isArray(t);
}
function rc(t) {
  return C.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ns(t, e, n) {
  return t ? t.concat(e).map(function(i, o) {
    return i = rc(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function qd(t) {
  return C.isArray(t) && !t.some(ro);
}
const Gd = C.toFlatObject(C, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Zr(t, e, n) {
  if (!C.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = C.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, m) {
    return !C.isUndefined(m[p]);
  });
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(e);
  if (!C.isFunction(i))
    throw new TypeError("visitor must be a function");
  function a(g) {
    if (g === null)
      return "";
    if (C.isDate(g))
      return g.toISOString();
    if (C.isBoolean(g))
      return g.toString();
    if (!c && C.isBlob(g))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(g) || C.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, p, m) {
    let T = g;
    if (g && !m && typeof g == "object") {
      if (C.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (C.isArray(g) && qd(g) || (C.isFileList(g) || C.endsWith(p, "[]")) && (T = C.toArray(g)))
        return p = rc(p), T.forEach(function(v, _) {
          !(C.isUndefined(v) || v === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ns([p], _, o) : s === null ? p : p + "[]",
            a(v)
          );
        }), !1;
    }
    return ro(g) ? !0 : (e.append(Ns(m, p, o), a(g)), !1);
  }
  const f = [], d = Object.assign(Gd, {
    defaultVisitor: u,
    convertValue: a,
    isVisitable: ro
  });
  function b(g, p) {
    if (!C.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(g), C.forEach(g, function(T, w) {
        (!(C.isUndefined(T) || T === null) && i.call(
          e,
          T,
          C.isString(w) ? w.trim() : w,
          p,
          d
        )) === !0 && b(T, p ? p.concat(w) : [w]);
      }), f.pop();
    }
  }
  if (!C.isObject(t))
    throw new TypeError("data must be an object");
  return b(t), e;
}
function Us(t) {
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
function Po(t, e) {
  this._pairs = [], t && Zr(t, this, e);
}
const ic = Po.prototype;
ic.append = function(e, n) {
  this._pairs.push([e, n]);
};
ic.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Us);
  } : Us;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Jd(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function oc(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Jd, i = C.isFunction(n) ? {
    serialize: n
  } : n, o = i && i.serialize;
  let s;
  if (o ? s = o(e, i) : s = C.isURLSearchParams(e) ? e.toString() : new Po(e, i).toString(r), s) {
    const l = t.indexOf("#");
    l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Kd {
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
const Ls = Kd, sc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xd = typeof URLSearchParams < "u" ? URLSearchParams : Po, Yd = typeof FormData < "u" ? FormData : null, Qd = typeof Blob < "u" ? Blob : null, Zd = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xd,
    FormData: Yd,
    Blob: Qd
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $o = typeof window < "u" && typeof document < "u", io = typeof navigator == "object" && navigator || void 0, eh = $o && (!io || ["ReactNative", "NativeScript", "NS"].indexOf(io.product) < 0), th = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), nh = $o && window.location.href || "http://localhost", rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $o,
  hasStandardBrowserEnv: eh,
  hasStandardBrowserWebWorkerEnv: th,
  navigator: io,
  origin: nh
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...rh,
  ...Zd
};
function ih(t, e) {
  return Zr(t, new $e.classes.URLSearchParams(), {
    visitor: function(n, r, i, o) {
      return $e.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function oh(t) {
  return C.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function sh(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function lc(t) {
  function e(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__")
      return !0;
    const l = Number.isFinite(+s), c = o >= n.length;
    return s = !s && C.isArray(i) ? i.length : s, c ? (C.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !l) : ((!i[s] || !C.isObject(i[s])) && (i[s] = []), e(n, r, i[s], o) && C.isArray(i[s]) && (i[s] = sh(i[s])), !l);
  }
  if (C.isFormData(t) && C.isFunction(t.entries)) {
    const n = {};
    return C.forEachEntry(t, (r, i) => {
      e(oh(r), i, n, 0);
    }), n;
  }
  return null;
}
function lh(t, e, n) {
  if (C.isString(t))
    try {
      return (e || JSON.parse)(t), C.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Do = {
  transitional: sc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = C.isObject(e);
    if (o && C.isHTMLForm(e) && (e = new FormData(e)), C.isFormData(e))
      return i ? JSON.stringify(lc(e)) : e;
    if (C.isArrayBuffer(e) || C.isBuffer(e) || C.isStream(e) || C.isFile(e) || C.isBlob(e) || C.isReadableStream(e))
      return e;
    if (C.isArrayBufferView(e))
      return e.buffer;
    if (C.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ih(e, this.formSerializer).toString();
      if ((l = C.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Zr(
          l ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), lh(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Do.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (C.isResponse(e) || C.isReadableStream(e))
      return e;
    if (e && C.isString(e) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? q.from(l, q.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
C.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Do.headers[t] = {};
});
const Oo = Do, ah = C.toObjectSet([
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
]), ch = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || e[n] && ah[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Hs = Symbol("internals");
function Pn(t) {
  return t && String(t).trim().toLowerCase();
}
function yr(t) {
  return t === !1 || t == null ? t : C.isArray(t) ? t.map(yr) : String(t);
}
function uh(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const fh = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function di(t, e, n, r, i) {
  if (C.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!C.isString(e)) {
    if (C.isString(r))
      return e.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(e);
  }
}
function dh(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function hh(t, e) {
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
class ei {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function o(l, c, a) {
      const u = Pn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = C.findKey(i, u);
      (!f || i[f] === void 0 || a === !0 || a === void 0 && i[f] !== !1) && (i[f || c] = yr(l));
    }
    const s = (l, c) => C.forEach(l, (a, u) => o(a, u, c));
    if (C.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (C.isString(e) && (e = e.trim()) && !fh(e))
      s(ch(e), n);
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
    if (e = Pn(e), e) {
      const r = C.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return uh(i);
        if (C.isFunction(n))
          return n.call(this, i, r);
        if (C.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Pn(e), e) {
      const r = C.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || di(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = Pn(s), s) {
        const l = C.findKey(r, s);
        l && (!n || di(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return C.isArray(e) ? e.forEach(o) : o(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || di(this, this[o], o, e, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return C.forEach(this, (i, o) => {
      const s = C.findKey(r, o);
      if (s) {
        n[s] = yr(i), delete n[o];
        return;
      }
      const l = e ? dh(o) : String(o).trim();
      l !== o && delete n[o], n[l] = yr(i), r[l] = !0;
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
    const r = (this[Hs] = this[Hs] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const l = Pn(s);
      r[l] || (hh(i, s), r[l] = !0);
    }
    return C.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
ei.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(ei.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
C.freezeMethods(ei);
const tt = ei;
function hi(t, e) {
  const n = this || Oo, r = e || n, i = tt.from(r.headers);
  let o = r.data;
  return C.forEach(t, function(l) {
    o = l.call(n, o, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), o;
}
function ac(t) {
  return !!(t && t.__CANCEL__);
}
class ph extends q {
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
    super(e ?? "canceled", q.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const rr = ph;
function cc(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new q(
    "Request failed with status code " + n.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function gh(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function mh(t, e) {
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
    const b = u && a - u;
    return b ? Math.round(d * 1e3 / b) : void 0;
  };
}
function bh(t, e) {
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
const Pr = (t, e, n = 3) => {
  let r = 0;
  const i = mh(50, 250);
  return bh((o) => {
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
}, Bs = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, js = (t) => (...e) => C.asap(() => t(...e)), _h = $e.hasStandardBrowserEnv ? ((t, e) => (n) => (n = new URL(n, $e.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, vh = $e.hasStandardBrowserEnv ? (
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
function wh(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function yh(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function uc(t, e, n) {
  let r = !wh(e);
  return t && (r || n == !1) ? yh(t, e) : e;
}
const zs = (t) => t instanceof tt ? { ...t } : t;
function Kt(t, e) {
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
    headers: (a, u, f) => i(zs(a), zs(u), f, !0)
  };
  return C.forEach(Object.keys({ ...t, ...e }), function(u) {
    const f = c[u] || i, d = f(t[u], e[u], u);
    C.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const fc = (t) => {
  const e = Kt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: l } = e;
  if (e.headers = s = tt.from(s), e.url = oc(uc(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), C.isFormData(n)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (C.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), a = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, f]) => {
        a.includes(u.toLowerCase()) && s.set(u, f);
      });
    }
  }
  if ($e.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(e)), r || r !== !1 && _h(e.url))) {
    const c = i && o && vh.read(o);
    c && s.set(i, c);
  }
  return e;
}, Sh = typeof XMLHttpRequest < "u", Ch = Sh && function(t) {
  return new Promise(function(n, r) {
    const i = fc(t);
    let o = i.data;
    const s = tt.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: a } = i, u, f, d, b, g;
    function p() {
      b && b(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, !0), m.timeout = i.timeout;
    function T() {
      if (!m)
        return;
      const v = tt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), y = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: v,
        config: t,
        request: m
      };
      cc(function(S) {
        n(S), p();
      }, function(S) {
        r(S), p();
      }, y), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (r(new q("Request aborted", q.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function(_) {
      const y = _ && _.message ? _.message : "Network Error", x = new q(y, q.ERR_NETWORK, t, m);
      x.event = _ || null, r(x), m = null;
    }, m.ontimeout = function() {
      let _ = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const y = i.transitional || sc;
      i.timeoutErrorMessage && (_ = i.timeoutErrorMessage), r(new q(
        _,
        y.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in m && C.forEach(s.toJSON(), function(_, y) {
      m.setRequestHeader(y, _);
    }), C.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), l && l !== "json" && (m.responseType = i.responseType), a && ([d, g] = Pr(a, !0), m.addEventListener("progress", d)), c && m.upload && ([f, b] = Pr(c), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (i.cancelToken || i.signal) && (u = (v) => {
      m && (r(!v || v.type ? new rr(null, t, m) : v), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const w = gh(i.url);
    if (w && $e.protocols.indexOf(w) === -1) {
      r(new q("Unsupported protocol " + w + ":", q.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, Eh = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), i;
    const o = function(a) {
      if (!i) {
        i = !0, l();
        const u = a instanceof Error ? a : this.reason;
        r.abort(u instanceof q ? u : new rr(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, o(new q(`timeout of ${e}ms exceeded`, q.ETIMEDOUT));
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
}, kh = Eh, Th = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + e, yield t.slice(r, i), r = i;
}, Ah = async function* (t, e) {
  for await (const n of xh(t))
    yield* Th(n, e);
}, xh = async function* (t) {
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
}, Vs = (t, e, n, r) => {
  const i = Ah(t, e);
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
}, Ws = 64 * 1024, { isFunction: cr } = C, Ih = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(C.global), {
  ReadableStream: qs,
  TextEncoder: Gs
} = C.global, Js = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Rh = (t) => {
  t = C.merge.call({
    skipUndefined: !0
  }, Ih, t);
  const { fetch: e, Request: n, Response: r } = t, i = e ? cr(e) : typeof fetch == "function", o = cr(n), s = cr(r);
  if (!i)
    return !1;
  const l = i && cr(qs), c = i && (typeof Gs == "function" ? ((g) => (p) => g.encode(p))(new Gs()) : async (g) => new Uint8Array(await new n(g).arrayBuffer())), a = o && l && Js(() => {
    let g = !1;
    const p = new n($e.origin, {
      body: new qs(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !p;
  }), u = s && l && Js(() => C.isReadableStream(new r("").body)), f = {
    stream: u && ((g) => g.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !f[g] && (f[g] = (p, m) => {
      let T = p && p[g];
      if (T)
        return T.call(p);
      throw new q(`Response type '${g}' is not supported`, q.ERR_NOT_SUPPORT, m);
    });
  });
  const d = async (g) => {
    if (g == null)
      return 0;
    if (C.isBlob(g))
      return g.size;
    if (C.isSpecCompliantForm(g))
      return (await new n($e.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(g) || C.isArrayBuffer(g))
      return g.byteLength;
    if (C.isURLSearchParams(g) && (g = g + ""), C.isString(g))
      return (await c(g)).byteLength;
  }, b = async (g, p) => {
    const m = C.toFiniteNumber(g.getContentLength());
    return m ?? d(p);
  };
  return async (g) => {
    let {
      url: p,
      method: m,
      data: T,
      signal: w,
      cancelToken: v,
      timeout: _,
      onDownloadProgress: y,
      onUploadProgress: x,
      responseType: S,
      headers: E,
      withCredentials: F = "same-origin",
      fetchOptions: W
    } = fc(g), ee = e || fetch;
    S = S ? (S + "").toLowerCase() : "text";
    let ke = kh([w, v && v.toAbortSignal()], _), N = null;
    const B = ke && ke.unsubscribe && (() => {
      ke.unsubscribe();
    });
    let te;
    try {
      if (x && a && m !== "get" && m !== "head" && (te = await b(E, T)) !== 0) {
        let St = new n(p, {
          method: "POST",
          body: T,
          duplex: "half"
        }), Zt;
        if (C.isFormData(T) && (Zt = St.headers.get("content-type")) && E.setContentType(Zt), St.body) {
          const [ai, lr] = Bs(
            te,
            Pr(js(x))
          );
          T = Vs(St.body, Ws, ai, lr);
        }
      }
      C.isString(F) || (F = F ? "include" : "omit");
      const Ie = o && "credentials" in n.prototype, yt = {
        ...W,
        signal: ke,
        method: m.toUpperCase(),
        headers: E.normalize().toJSON(),
        body: T,
        duplex: "half",
        credentials: Ie ? F : void 0
      };
      N = o && new n(p, yt);
      let U = await (o ? ee(N, W) : ee(p, yt));
      const J = u && (S === "stream" || S === "response");
      if (u && (y || J && B)) {
        const St = {};
        ["status", "statusText", "headers"].forEach((ns) => {
          St[ns] = U[ns];
        });
        const Zt = C.toFiniteNumber(U.headers.get("content-length")), [ai, lr] = y && Bs(
          Zt,
          Pr(js(y), !0)
        ) || [];
        U = new r(
          Vs(U.body, Ws, ai, () => {
            lr && lr(), B && B();
          }),
          St
        );
      }
      S = S || "text";
      let it = await f[C.findKey(f, S) || "text"](U, g);
      return !J && B && B(), await new Promise((St, Zt) => {
        cc(St, Zt, {
          data: it,
          headers: tt.from(U.headers),
          status: U.status,
          statusText: U.statusText,
          config: g,
          request: N
        });
      });
    } catch (Ie) {
      throw B && B(), Ie && Ie.name === "TypeError" && /Load failed|fetch/i.test(Ie.message) ? Object.assign(
        new q("Network Error", q.ERR_NETWORK, g, N),
        {
          cause: Ie.cause || Ie
        }
      ) : q.from(Ie, Ie && Ie.code, g, N);
    }
  };
}, Ph = /* @__PURE__ */ new Map(), dc = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: i } = e, o = [
    r,
    i,
    n
  ];
  let s = o.length, l = s, c, a, u = Ph;
  for (; l--; )
    c = o[l], a = u.get(c), a === void 0 && u.set(c, a = l ? /* @__PURE__ */ new Map() : Rh(e)), u = a;
  return a;
};
dc();
const Mo = {
  http: Wd,
  xhr: Ch,
  fetch: {
    get: dc
  }
};
C.forEach(Mo, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ks = (t) => `- ${t}`, $h = (t) => C.isFunction(t) || t === null || t === !1;
function Dh(t, e) {
  t = C.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, i;
  const o = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let l;
    if (i = r, !$h(r) && (i = Mo[(l = String(r)).toLowerCase()], i === void 0))
      throw new q(`Unknown adapter '${l}'`);
    if (i && (C.isFunction(i) || (i = i.get(e))))
      break;
    o[l || "#" + s] = i;
  }
  if (!i) {
    const s = Object.entries(o).map(
      ([c, a]) => `adapter ${c} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(Ks).join(`
`) : " " + Ks(s[0]) : "as no adapter specified";
    throw new q(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const hc = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Dh,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Mo
};
function pi(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new rr(null, t);
}
function Xs(t) {
  return pi(t), t.headers = tt.from(t.headers), t.data = hi.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), hc.getAdapter(t.adapter || Oo.adapter, t)(t).then(function(r) {
    return pi(t), r.data = hi.call(
      t,
      t.transformResponse,
      r
    ), r.headers = tt.from(r.headers), r;
  }, function(r) {
    return ac(r) || (pi(t), r && r.response && (r.response.data = hi.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = tt.from(r.response.headers))), Promise.reject(r);
  });
}
const pc = "1.13.3", ti = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ti[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ys = {};
ti.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + pc + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (e === !1)
      throw new q(
        i(s, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !Ys[s] && (Ys[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
ti.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Oh(t, e, n) {
  if (typeof t != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = e[o];
    if (s) {
      const l = t[o], c = l === void 0 || s(l, o, t);
      if (c !== !0)
        throw new q("option " + o + " must be " + c, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + o, q.ERR_BAD_OPTION);
  }
}
const Sr = {
  assertOptions: Oh,
  validators: ti
}, st = Sr.validators;
class $r {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Ls(),
      response: new Ls()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Kt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && Sr.assertOptions(r, {
      silentJSONParsing: st.transitional(st.boolean),
      forcedJSONParsing: st.transitional(st.boolean),
      clarifyTimeoutError: st.transitional(st.boolean)
    }, !1), i != null && (C.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Sr.assertOptions(i, {
      encode: st.function,
      serialize: st.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Sr.assertOptions(n, {
      baseUrl: st.spelling("baseURL"),
      withXsrfToken: st.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && C.merge(
      o.common,
      o[n.method]
    );
    o && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
      }
    ), n.headers = tt.concat(s, o);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (c = c && p.synchronous, l.unshift(p.fulfilled, p.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(p) {
      a.push(p.fulfilled, p.rejected);
    });
    let u, f = 0, d;
    if (!c) {
      const g = [Xs.bind(this), void 0];
      g.unshift(...l), g.push(...a), d = g.length, u = Promise.resolve(n);
      let p = n;
      for (; f < d; )
        u = u.then(g[f++]).then((m) => {
          p = m !== void 0 ? m : p;
        }).catch(g[f++]).then(() => p);
      return u;
    }
    d = l.length;
    let b = n;
    for (; f < d; ) {
      const g = l[f++], p = l[f++];
      try {
        b = g(b);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      u = Xs.call(this, b);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = a.length; f < d; )
      u = u.then(a[f++]).catch(a[f++]);
    return u;
  }
  getUri(e) {
    e = Kt(this.defaults, e);
    const n = uc(e.baseURL, e.url, e.allowAbsoluteUrls);
    return oc(n, e.params, e.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(e) {
  $r.prototype[e] = function(n, r) {
    return this.request(Kt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, l) {
      return this.request(Kt(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  $r.prototype[e] = n(), $r.prototype[e + "Form"] = n(!0);
});
const Cr = $r;
class Fo {
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
      r.reason || (r.reason = new rr(o, s, l), n(r.reason));
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
      token: new Fo(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const Mh = Fo;
function Fh(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Nh(t) {
  return C.isObject(t) && t.isAxiosError === !0;
}
const oo = {
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
Object.entries(oo).forEach(([t, e]) => {
  oo[e] = t;
});
const Uh = oo;
function gc(t) {
  const e = new Cr(t), n = Ka(Cr.prototype.request, e);
  return C.extend(n, Cr.prototype, e, { allOwnKeys: !0 }), C.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return gc(Kt(t, i));
  }, n;
}
const pe = gc(Oo);
pe.Axios = Cr;
pe.CanceledError = rr;
pe.CancelToken = Mh;
pe.isCancel = ac;
pe.VERSION = pc;
pe.toFormData = Zr;
pe.AxiosError = q;
pe.Cancel = pe.CanceledError;
pe.all = function(e) {
  return Promise.all(e);
};
pe.spread = Fh;
pe.isAxiosError = Nh;
pe.mergeConfig = Kt;
pe.AxiosHeaders = tt;
pe.formToJSON = (t) => lc(C.isHTMLForm(t) ? new FormData(t) : t);
pe.getAdapter = hc.getAdapter;
pe.HttpStatusCode = Uh;
pe.default = pe;
const oe = pe;
var Qs = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class xn {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n;
  }
  getAuthorizationHeader() {
    return Qs(this, void 0, void 0, function* () {
      return {
        Authorization: `Bearer ${yield It(this.accessToken)}`
      };
    });
  }
  getAccessToken() {
    return It(this.accessToken);
  }
  getStructureUrl() {
    return Qs(this, void 0, void 0, function* () {
      const e = yield It(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Structure}`;
    });
  }
  static requestHttpConfig(e) {
    return oe.get(`${e}/assets/conf/application.config`).then((n) => n.data);
  }
  static isApiReachable(e) {
    return oe.get(`${e}/api/structure/about/version`).then((n) => n.status === 200 || n.status === 401).catch((n) => {
      var r;
      return ((r = n == null ? void 0 : n.response) === null || r === void 0 ? void 0 : r.status) === 401;
    });
  }
}
var qe = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Xt extends xn {
  constructor(e, n) {
    super(e, n);
  }
  getEntityById(e, n) {
    return qe(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, n, null);
    });
  }
  getPartialEntityById(e, n, r) {
    return qe(this, void 0, void 0, function* () {
      let i = `${yield this._createBaseUrlByType(e)}/${n}`;
      r && (i += `?$projection=${JSON.stringify(r)}`);
      const o = yield this.getAuthorizationHeader();
      return (yield oe.get(i, { headers: o })).data;
    });
  }
  queryConfiguration(e, n, r, i) {
    return qe(this, void 0, void 0, function* () {
      const o = `${yield this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(n),
        $paging: r ? JSON.stringify(r) : null,
        $projection: i ? JSON.stringify(i) : null
      }, l = yield this.getAuthorizationHeader(), c = yield oe.post(o, s, { headers: l });
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
    return qe(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(L.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), l = new FormData();
      l.append("file", s, "process-image.svg"), yield oe.post(i, l, { headers: o });
    });
  }
  addEntity(e, n) {
    return qe(this, void 0, void 0, function* () {
      const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
      return oe.post(r, n, { headers: i }).then((o) => o.data);
    });
  }
  updateEntity(e, n) {
    return qe(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`;
      delete n.ChangedBy, delete n.ChangedOn, delete n.CreatedBy, delete n.CreatedOn;
      const i = yield this.getAuthorizationHeader();
      return oe.put(r, n, { headers: i }).then((o) => o.data);
    });
  }
  deleteEntity(e, n) {
    return qe(this, void 0, void 0, function* () {
      const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
      return oe.delete(r, { headers: i }).then();
    });
  }
  copyTo(e, n, r) {
    return qe(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return oe.get(i, { headers: o }).then((s) => s.data);
    });
  }
  copyMultipleTo(e, n, r) {
    return qe(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/copy/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return oe.put(i, e, { responseType: "text", headers: o });
    });
  }
  moveTo(e, n, r) {
    return qe(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
      return oe.get(i, { headers: o }).then((s) => s.data);
    });
  }
  moveMultipleTo(e, n, r) {
    return qe(this, void 0, void 0, function* () {
      const i = `${yield this._createBaseUrlByType(r)}/move/multiple/${n}`, o = yield this.getAuthorizationHeader();
      return oe.put(i, e, { responseType: "text", headers: o });
    });
  }
  _createBaseUrlByType(e) {
    return qe(this, void 0, void 0, function* () {
      return `${yield this.getStructureUrl()}${lu[e]}`;
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
class zn extends xn {
  constructor(e, n) {
    super(e, n);
  }
  getTenantViewById(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield oe.get(n, { headers: r })).data;
    });
  }
  getTenantViewForEntityId(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, r = yield this.getAuthorizationHeader();
      return (yield oe.get(n, { headers: r })).data;
    });
  }
  getTopTenants() {
    return $n(this, void 0, void 0, function* () {
      const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
      return (yield oe.get(e, { headers: n })).data;
    });
  }
  getNextTenants(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
      return (yield oe.get(n, { headers: r })).data;
    });
  }
  filterTenantsByName(e) {
    return $n(this, void 0, void 0, function* () {
      const n = `${yield this.getStructureUrl()}/tenant/filter/${e}`, r = yield this.getAuthorizationHeader();
      return (yield oe.get(n, { headers: r })).data;
    });
  }
}
var gi = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Vn {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, n, r = !1, i, o = " / ") {
    return gi(this, void 0, void 0, function* () {
      const s = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
      let l = yield this.resolvePathName(s.Path.splice(i ? s.Path.length - i : 0, s.Path.length), o);
      return r && (l = l + o + s.Name.Value), l;
    });
  }
  resolvePathName(e, n = " / ") {
    return gi(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : jn(za(e.map((r) => this.resolveName(L.Group, r))).pipe(Jt((r) => r.join(n))));
    });
  }
  resolveName(e, n) {
    return gi(this, void 0, void 0, function* () {
      return this._nameCache[n] || (this._nameCache[n] = Yt(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(Jt((r) => r.Name.Value), ed(1), qa(() => cn(n)))), jn(this._nameCache[n]);
    });
  }
}
var Zs = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class el extends xn {
  constructor(e, n) {
    super(e, n);
  }
  getUserProfile() {
    return Zs(this, void 0, void 0, function* () {
      try {
        const e = yield this.getAuthorizationHeader(), n = yield oe.get(`${yield this.getStructureUrl()}/userprofile`, {
          headers: e
        });
        if (n.status == 200)
          return n.data;
      } catch (e) {
        throw new Error("Failed to request user profile with error: " + (e == null ? void 0 : e.message));
      }
    });
  }
  updateUserProfile(e) {
    return Zs(this, void 0, void 0, function* () {
      try {
        const n = yield this.getAuthorizationHeader();
        yield oe.put(`${yield this.getStructureUrl()}/userprofile`, e, {
          headers: n
        });
      } catch (n) {
        throw new Error("Failed to update user profile with error: " + (n == null ? void 0 : n.message));
      }
    });
  }
}
var tl = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class so extends xn {
  constructor(e, n) {
    super(e, n);
  }
  sendDatSrcConfiguration(e) {
    return tl(this, void 0, void 0, function* () {
      const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
      return (yield oe.get(n, { headers: r })).data;
    });
  }
  _getDriverUrl() {
    return tl(this, void 0, void 0, function* () {
      const e = yield It(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Driver}`;
    });
  }
}
class vn extends Error {
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
class No extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Wn extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Lh extends Error {
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
class Hh extends Error {
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
class Bh extends Error {
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
class jh extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class zh extends Error {
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
class mc {
  constructor(e, n, r) {
    this.statusCode = e, this.statusText = n, this.content = r;
  }
}
class Uo {
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
class qn {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
qn.instance = new qn();
const Vh = "6.0.8";
class Ce {
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
class Ae {
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
function Gn(t, e) {
  let n = "";
  return Lo(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Wh(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Wh(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((r) => {
    const i = r < 16 ? "0" : "";
    n += `0x${i}${r.toString(16)} `;
  }), n.substr(0, n.length - 1);
}
function Lo(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function bc(t, e, n, r, i, o, s) {
  let l = {};
  if (i) {
    const d = await i();
    d && (l = {
      Authorization: `Bearer ${d}`
    });
  }
  const [c, a] = wn();
  l[c] = a, t.log(A.Trace, `(${e} transport) sending data. ${Gn(o, s.logMessageContent)}.`);
  const u = Lo(o) ? "arraybuffer" : "text", f = await n.post(r, {
    content: o,
    headers: { ...l, ...s.headers },
    responseType: u,
    timeout: s.timeout,
    withCredentials: s.withCredentials
  });
  t.log(A.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
}
function qh(t) {
  return t === void 0 ? new Dr(A.Information) : t === null ? qn.instance : t.log !== void 0 ? t : new Dr(t);
}
class Gh {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class Dr {
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
function wn() {
  let t = "X-SignalR-User-Agent";
  return Ae.isNode && (t = "User-Agent"), [t, Jh(Vh, Kh(), Yh(), Xh())];
}
function Jh(t, e, n, r) {
  let i = "Microsoft SignalR/";
  const o = t.split(".");
  return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
}
function Kh() {
  if (Ae.isNode)
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
function Xh() {
  if (Ae.isNode)
    return process.versions.node;
}
function Yh() {
  return Ae.isNode ? "NodeJS" : "Browser";
}
function nl(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Qh() {
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
class Zh extends Uo {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Qh());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new Wn();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), r = new Wn();
    });
    let i = null;
    if (e.timeout) {
      const c = e.timeout;
      i = setTimeout(() => {
        n.abort(), this._logger.log(A.Warning, "Timeout from HTTP request."), r = new No();
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
      const c = await rl(o, "text");
      throw new vn(c || o.statusText, o.status);
    }
    const l = await rl(o, e.responseType);
    return new mc(o.status, o.statusText, l);
  }
  getCookieString(e) {
    let n = "";
    return Ae.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
  }
}
function rl(t, e) {
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
class ep extends Uo {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Wn()) : e.method ? e.url ? new Promise((n, r) => {
      const i = new XMLHttpRequest();
      i.open(e.method, e.url, !0), i.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      const o = e.headers;
      o && Object.keys(o).forEach((s) => {
        i.setRequestHeader(s, o[s]);
      }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        i.abort(), r(new Wn());
      }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new mc(i.status, i.statusText, i.response || i.responseText)) : r(new vn(i.response || i.responseText || i.statusText, i.status));
      }, i.onerror = () => {
        this._logger.log(A.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new vn(i.statusText, i.status));
      }, i.ontimeout = () => {
        this._logger.log(A.Warning, "Timeout from HTTP request."), r(new No());
      }, i.send(e.content || "");
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class tp extends Uo {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || Ae.isNode)
      this._httpClient = new Zh(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new ep(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Wn()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class Ve {
  static write(e) {
    return `${e}${Ve.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== Ve.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(Ve.RecordSeparator);
    return n.pop(), n;
  }
}
Ve.RecordSeparatorCode = 30;
Ve.RecordSeparator = String.fromCharCode(Ve.RecordSeparatorCode);
class np {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return Ve.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, r;
    if (Lo(e)) {
      const l = new Uint8Array(e), c = l.indexOf(Ve.RecordSeparatorCode);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(l.slice(0, a))), r = l.byteLength > a ? l.slice(a).buffer : null;
    } else {
      const l = e, c = l.indexOf(Ve.RecordSeparator);
      if (c === -1)
        throw new Error("Message is incomplete.");
      const a = c + 1;
      n = l.substring(0, a), r = l.length > a ? l.substring(a) : null;
    }
    const i = Ve.parse(n), o = JSON.parse(i[0]);
    if (o.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, o];
  }
}
var ne;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
})(ne || (ne = {}));
class rp {
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
    return this.observers.push(e), new Gh(this, e);
  }
}
const ip = 30 * 1e3, op = 15 * 1e3;
var le;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(le || (le = {}));
class Ho {
  constructor(e, n, r, i) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(A.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, Ce.isRequired(e, "connection"), Ce.isRequired(n, "logger"), Ce.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = ip, this.keepAliveIntervalInMilliseconds = op, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new np(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = le.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: ne.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, r, i) {
    return new Ho(e, n, r, i);
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
    if (this._connectionState !== le.Disconnected && this._connectionState !== le.Reconnecting)
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
    if (this._connectionState !== le.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = le.Connecting, this._logger.log(A.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), Ae.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = le.Connected, this._connectionStarted = !0, this._logger.log(A.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = le.Disconnected, this._logger.log(A.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
    return this._connectionState === le.Disconnected ? (this._logger.log(A.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === le.Disconnecting ? (this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = le.Disconnecting, this._logger.log(A.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(A.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
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
    const l = new rp();
    return l.cancelCallback = () => {
      const c = this._createCancelInvocation(o.invocationId);
      return delete this._callbacks[o.invocationId], s.then(() => this._sendWithProtocol(c));
    }, this._callbacks[o.invocationId] = (c, a) => {
      if (a) {
        l.error(a);
        return;
      } else
        c && (c.type === ne.Completion ? c.error ? l.error(new Error(c.error)) : l.complete() : l.next(c.item));
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
          u && (u.type === ne.Completion ? u.error ? c(new Error(u.error)) : l(u.result) : c(new Error(`Unexpected message type: ${u.type}`)));
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
          case ne.Invocation:
            this._invokeClientMethod(r);
            break;
          case ne.StreamItem:
          case ne.Completion: {
            const i = this._callbacks[r.invocationId];
            if (i) {
              r.type === ne.Completion && delete this._callbacks[r.invocationId];
              try {
                i(r);
              } catch (o) {
                this._logger.log(A.Error, `Stream callback threw error: ${nl(o)}`);
              }
            }
            break;
          }
          case ne.Ping:
            break;
          case ne.Close: {
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
        if (this._connectionState === le.Connected)
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
    this._logger.log(A.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === le.Disconnecting ? this._completeClose(e) : this._connectionState === le.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === le.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = le.Disconnected, this._connectionStarted = !1, Ae.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
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
    if (this._connectionState = le.Reconnecting, e ? this._logger.log(A.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(A.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
      } catch (s) {
        this._logger.log(A.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
      }
      if (this._connectionState !== le.Reconnecting) {
        this._logger.log(A.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; o !== null; ) {
      if (this._logger.log(A.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
        this._reconnectDelayHandle = setTimeout(s, o);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== le.Reconnecting) {
        this._logger.log(A.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = le.Connected, this._logger.log(A.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(A.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
        return;
      } catch (s) {
        if (this._logger.log(A.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== le.Reconnecting) {
          this._logger.log(A.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === le.Disconnecting && this._completeClose();
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
        this._logger.log(A.Error, `Stream 'error' callback called with '${e}' threw error: ${nl(o)}`);
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
        type: ne.Invocation
      } : {
        arguments: n,
        target: e,
        type: ne.Invocation
      };
    {
      const o = this._invocationId;
      return this._invocationId++, i.length !== 0 ? {
        arguments: n,
        invocationId: o.toString(),
        streamIds: i,
        target: e,
        type: ne.Invocation
      } : {
        arguments: n,
        invocationId: o.toString(),
        target: e,
        type: ne.Invocation
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
      type: ne.StreamInvocation
    } : {
      arguments: n,
      invocationId: i.toString(),
      target: e,
      type: ne.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: ne.CancelInvocation
    };
  }
  _createStreamItemMessage(e, n) {
    return {
      invocationId: e,
      item: n,
      type: ne.StreamItem
    };
  }
  _createCompletionMessage(e, n, r) {
    return n ? {
      error: n,
      invocationId: e,
      type: ne.Completion
    } : {
      invocationId: e,
      result: r,
      type: ne.Completion
    };
  }
}
const sp = [0, 2e3, 1e4, 3e4, null];
class il {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : sp;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class Vt {
}
Vt.Authorization = "Authorization";
Vt.Cookie = "Cookie";
var ye;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})(ye || (ye = {}));
var Pe;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(Pe || (Pe = {}));
let lp = class {
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
class ol {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new lp(), this._options = i, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  async connect(e, n) {
    if (Ce.isRequired(e, "url"), Ce.isRequired(n, "transferFormat"), Ce.isIn(n, Pe, "transferFormat"), this._url = e, this._logger.log(A.Trace, "(LongPolling transport) Connecting."), n === Pe.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [r, i] = wn(), o = { [r]: i, ...this._options.headers }, s = {
      abortSignal: this._pollAbort.signal,
      headers: o,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === Pe.Binary && (s.responseType = "arraybuffer");
    const l = await this._getAccessToken();
    this._updateHeaderToken(s, l);
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(A.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, s);
    a.statusCode !== 200 ? (this._logger.log(A.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new vn(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, s);
  }
  async _getAccessToken() {
    return this._accessTokenFactory ? await this._accessTokenFactory() : null;
  }
  _updateHeaderToken(e, n) {
    if (e.headers || (e.headers = {}), n) {
      e.headers[Vt.Authorization] = `Bearer ${n}`;
      return;
    }
    e.headers[Vt.Authorization] && delete e.headers[Vt.Authorization];
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
          o.statusCode === 204 ? (this._logger.log(A.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(A.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new vn(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(A.Trace, `(LongPolling transport) data received. ${Gn(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(A.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (i) {
          this._running ? i instanceof No ? this._logger.log(A.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = !1) : this._logger.log(A.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
        }
      }
    } finally {
      this._logger.log(A.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? bc(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(A.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(A.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, r] = wn();
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
class ap {
  constructor(e, n, r, i) {
    this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (Ce.isRequired(e, "url"), Ce.isRequired(n, "transferFormat"), Ce.isIn(n, Pe, "transferFormat"), this._logger.log(A.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      let o = !1;
      if (n !== Pe.Text) {
        i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let s;
      if (Ae.isBrowser || Ae.isWebWorker)
        s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const l = this._httpClient.getCookieString(e), c = {};
        c.Cookie = l;
        const [a, u] = wn();
        c[a] = u, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
      }
      try {
        s.onmessage = (l) => {
          if (this.onreceive)
            try {
              this._logger.log(A.Trace, `(SSE transport) data received. ${Gn(l.data, this._options.logMessageContent)}.`), this.onreceive(l.data);
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
    return this._eventSource ? bc(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class cp {
  constructor(e, n, r, i, o, s) {
    this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
  }
  async connect(e, n) {
    if (Ce.isRequired(e, "url"), Ce.isRequired(n, "transferFormat"), Ce.isIn(n, Pe, "transferFormat"), this._logger.log(A.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
      const r = await this._accessTokenFactory();
      r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
    }
    return new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const s = this._httpClient.getCookieString(e);
      let l = !1;
      if (Ae.isNode) {
        const c = {}, [a, u] = wn();
        c[a] = u, s && (c[Vt.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...c, ...this._headers }
        });
      }
      o || (o = new this._webSocketConstructor(e)), n === Pe.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
        this._logger.log(A.Information, `WebSocket connected to ${e}.`), this._webSocket = o, l = !0, r();
      }, o.onerror = (c) => {
        let a = null;
        typeof ErrorEvent < "u" && c instanceof ErrorEvent ? a = c.error : a = "There was an error with the transport", this._logger.log(A.Information, `(WebSockets transport) ${a}.`);
      }, o.onmessage = (c) => {
        if (this._logger.log(A.Trace, `(WebSockets transport) data received. ${Gn(c.data, this._logMessageContent)}.`), this.onreceive)
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
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(A.Trace, `(WebSockets transport) sending data. ${Gn(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
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
const sl = 100;
class up {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, Ce.isRequired(e, "url"), this._logger = qh(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null, i = null;
    if (Ae.isNode && typeof require < "u") {
      const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      r = o("ws"), i = o("eventsource");
    }
    !Ae.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : Ae.isNode && !n.WebSocket && r && (n.WebSocket = r), !Ae.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : Ae.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new tp(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || Pe.Binary, Ce.isIn(e, Pe, "transferFormat"), this._logger.log(A.Debug, `Starting connection with transfer format '${Pe[e]}'.`), this._connectionState !== "Disconnected")
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
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Bo(this.transport)), this._sendQueue.send(e));
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
        } while (r.url && i < sl);
        if (i === sl && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, e);
      }
      this.transport instanceof ol && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(A.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (r) {
      return this._logger.log(A.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {};
    if (this._accessTokenFactory) {
      const s = await this._accessTokenFactory();
      s && (n[Vt.Authorization] = `Bearer ${s}`);
    }
    const [r, i] = wn();
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
      return s instanceof vn && s.statusCode === 404 && (l = l + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(A.Error, l), Promise.reject(new jh(l));
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
          if (this._logger.log(A.Error, `Failed to start the transport '${a.transport}': ${f}`), c = void 0, s.push(new Bh(`${a.transport} failed: ${f}`, ye[a.transport])), this._connectionState !== "Connecting") {
            const d = "Failed to select transport before stop() was called.";
            return this._logger.log(A.Debug, d), Promise.reject(new Error(d));
          }
        }
      }
    }
    return s.length > 0 ? Promise.reject(new zh(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case ye.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new cp(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case ye.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new ap(this._httpClient, this._accessTokenFactory, this._logger, this._options);
      case ye.LongPolling:
        return new ol(this._httpClient, this._accessTokenFactory, this._logger, this._options);
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
    if (fp(n, i))
      if (e.transferFormats.map((s) => Pe[s]).indexOf(r) >= 0) {
        if (i === ye.WebSockets && !this._options.WebSocket || i === ye.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(A.Debug, `Skipping transport '${ye[i]}' because it is not supported in your environment.'`), new Lh(`'${ye[i]}' is not supported in your environment.`, i);
        this._logger.log(A.Debug, `Selecting transport '${ye[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (s) {
          return s;
        }
      } else
        return this._logger.log(A.Debug, `Skipping transport '${ye[i]}' because it does not support the requested transfer format '${Pe[r]}'.`), new Error(`'${ye[i]}' does not support ${Pe[r]}.`);
    else
      return this._logger.log(A.Debug, `Skipping transport '${ye[i]}' because it was disabled by the client.`), new Hh(`'${ye[i]}' is disabled by the client.`, i);
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
    if (!Ae.isBrowser)
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
function fp(t, e) {
  return !t || (e & t) !== 0;
}
class Bo {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new ur(), this._transportResult = new ur(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new ur()), this._transportResult.promise;
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
      this._sendBufferedData = new ur();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : Bo._concatBuffers(this._buffer);
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
class ur {
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
const dp = "json";
class hp {
  constructor() {
    this.name = dp, this.version = 1, this.transferFormat = Pe.Text;
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
    n === null && (n = qn.instance);
    const r = Ve.parse(e), i = [];
    for (const o of r) {
      const s = JSON.parse(o);
      if (typeof s.type != "number")
        throw new Error("Invalid payload.");
      switch (s.type) {
        case ne.Invocation:
          this._isInvocationMessage(s);
          break;
        case ne.StreamItem:
          this._isStreamItemMessage(s);
          break;
        case ne.Completion:
          this._isCompletionMessage(s);
          break;
        case ne.Ping:
          break;
        case ne.Close:
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
    return Ve.write(JSON.stringify(e));
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
const pp = {
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
function gp(t) {
  const e = pp[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class mp {
  configureLogging(e) {
    if (Ce.isRequired(e, "logging"), bp(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = gp(e);
      this.logger = new Dr(n);
    } else
      this.logger = new Dr(e);
    return this;
  }
  withUrl(e, n) {
    return Ce.isRequired(e, "url"), Ce.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return Ce.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new il(e) : this.reconnectPolicy = e : this.reconnectPolicy = new il(), this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new up(this.url, e);
    return Ho.create(n, this.logger || qn.instance, this.protocol || new hp(), this.reconnectPolicy);
  }
}
function bp(t) {
  return t.log !== void 0;
}
var _p = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
}, Or;
(function(t) {
  t.Running = "Running", t.Success = "Success", t.Failed = "Failed";
})(Or || (Or = {}));
var Ln;
(function(t) {
  t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
})(Ln || (Ln = {}));
var ll;
(function(t) {
  t.Send = "Send";
})(ll || (ll = {}));
var Mr;
(function(t) {
  t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC", t.OP = "OP";
})(Mr || (Mr = {}));
class lo {
  constructor(e, n) {
    this.httpConfig = e, this.accessToken = n, this._unsub = new De(), this._connectionEstablished = new Ao(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new De(), this._subscribeRequested = new De(), this._handleSubscriptionQueue();
  }
  connect() {
    return _p(this, void 0, void 0, function* () {
      const e = yield It(this.httpConfig);
      return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
    });
  }
  connectWithUrl(e) {
    return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), jn(this._connectionEstablished.pipe(un((n) => n), Jf(null)));
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
    const n = e.map((r) => `${Mr.OP}:${r}`);
    return this.subscribeLiveValuePackages(n);
  }
  getOperationStatus(e) {
    const n = `${Mr.OP}:${e}`;
    return this.subscribeToOperations([e]).pipe(Jt((r) => r.find((i) => i.id === e)), un((r) => r != null), nd((r) => r.status !== Or.Success && r.status !== Or.Failed, !0), Qf(() => this._unsubscribeIds([n])));
  }
  subscribeLiveValuePackages(e) {
    const n = e.filter((o) => !this._subscribedIds.includes(o));
    this.hubConnection && n.length > 0 && this._enqueueIdsToSubscribe(n);
    const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(Jt((o) => o.filter((s) => e.includes(s.identifier))), un((o) => o.length > 0));
    return r.length > 0 ? zf(cn(r), i) : i;
  }
  _unsubscribeIds(e) {
    this._subscribedIds = this._subscribedIds.filter((n) => !e.includes(n)), e.forEach((n) => delete this._valueCache[n]);
  }
  _enqueueIdsToSubscribe(e) {
    const n = e.filter((r) => !this._queuedIds.includes(r));
    n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
  }
  _handleSubscriptionQueue() {
    this._subscribeRequested.pipe(_t(this._unsub), Wf(50)).subscribe(() => {
      const e = this._queuedIds;
      this._queuedIds = [], this._sendMessage(Ln.SubscribeMany, e), this._subscribedIds.push(...e);
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
      this._sendMessage(Ln.ChangeModeAsync, !0), this._sendMessage(Ln.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
    }).catch((n) => {
      this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
    }), this.hubConnection.onclose(() => {
      console.log("Hub connection closed"), this.hubConnection = null;
    });
  }
  _buildHubConnection(e) {
    return new mp().withUrl(e, {
      accessTokenFactory: () => this.getAccessToken()
    }).build();
  }
  getAccessToken() {
    return It(this.accessToken);
  }
}
var Dn = globalThis && globalThis.__awaiter || function(t, e, n, r) {
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
class Ev {
}
class kv {
}
class Tv {
}
class al extends xn {
  constructor(e, n) {
    super(e, n);
  }
  requestHistoricalValues(e) {
    return Dn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield oe.post(`${n}/value/manyflat`, e, {
        headers: r
      });
      if (i.status !== 200)
        throw new Error(i.statusText);
      return i.data;
    });
  }
  getHistoricalValueObjects(e) {
    return Dn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return oe.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
    });
  }
  getNearestValue(e) {
    return Dn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return oe.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
    });
  }
  getNthHistoricalValue(e) {
    return Dn(this, void 0, void 0, function* () {
      const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
      return oe.post(n + "/value/nth", e, {
        headers: r
      }).then((i) => i.data);
    });
  }
  getHistorianUrl() {
    return Dn(this, void 0, void 0, function* () {
      const e = yield It(this.httpConfig);
      return `${e.Services.BaseUri}${e.Services.Historian}`;
    });
  }
}
var ao;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(ao || (ao = {}));
const Le = ao;
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
var co = function(t, e) {
  return co = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, co(t, e);
};
function jo(t, e) {
  co(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function vp(t, e, n, r) {
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
function wp(t, e) {
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
function fr(t) {
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
function Fr(t, e) {
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
function Ht() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Fr(arguments[e]));
  return t;
}
function _c(t) {
  return !!t.useClass;
}
function uo(t) {
  return !!t.useFactory;
}
var vc = function() {
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
        return l.apply(void 0, Ht(o));
      };
    };
    return this.reflectMethods.forEach(r), n;
  }, t;
}();
function en(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function yp(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function cl(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function Sp(t) {
  return typeof t == "function" || t instanceof vc;
}
function Er(t) {
  return !!t.useToken;
}
function kr(t) {
  return t.useValue != null;
}
function Cp(t) {
  return _c(t) || kr(t) || Er(t) || uo(t);
}
var zo = function() {
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
}(), Ep = function(t) {
  jo(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(zo), ul = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function kp(t, e) {
  if (t === null)
    return "at position #" + e;
  var n = t.split(",")[e].trim();
  return '"' + n + '" at position #' + e;
}
function Tp(t, e, n) {
  return n === void 0 && (n = "    "), Ht([t], e.message.split(`
`).map(function(r) {
    return n + r;
  })).join(`
`);
}
function Ap(t, e, n) {
  var r = Fr(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = kp(o, e);
  return Tp("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
}
function xp(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var Ip = function(t) {
  jo(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(zo), Rp = function(t) {
  jo(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(zo), Pp = function() {
  function t() {
    this.preResolution = new Ip(), this.postResolution = new Rp();
  }
  return t;
}(), $p = /* @__PURE__ */ new Map(), Dp = function() {
  function t(e) {
    this.parent = e, this._registry = new Ep(), this.interceptors = new Pp(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, n, r) {
    r === void 0 && (r = { lifecycle: Le.Transient }), this.ensureNotDisposed();
    var i;
    if (Cp(n) ? i = n : i = { useClass: n }, Er(i))
      for (var o = [e], s = i; s != null; ) {
        var l = s.useToken;
        if (o.includes(l))
          throw new Error("Token registration cycle detected! " + Ht(o, [l]).join(" -> "));
        o.push(l);
        var c = this._registry.get(l);
        c && Er(c.provider) ? s = c.provider : s = null;
      }
    if ((r.lifecycle === Le.Singleton || r.lifecycle == Le.ContainerScoped || r.lifecycle == Le.ResolutionScoped) && (kr(i) || uo(i)))
      throw new Error('Cannot use lifecycle "' + Le[r.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: i, options: r }), this;
  }, t.prototype.registerType = function(e, n) {
    return this.ensureNotDisposed(), en(n) ? this.register(e, {
      useToken: n
    }) : this.register(e, {
      useClass: n
    });
  }, t.prototype.registerInstance = function(e, n) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: n
    });
  }, t.prototype.registerSingleton = function(e, n) {
    if (this.ensureNotDisposed(), en(e)) {
      if (en(n))
        return this.register(e, {
          useToken: n
        }, { lifecycle: Le.Singleton });
      if (n)
        return this.register(e, {
          useClass: n
        }, { lifecycle: Le.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var r = e;
    return n && !en(n) && (r = n), this.register(e, {
      useClass: r
    }, { lifecycle: Le.Singleton });
  }, t.prototype.resolve = function(e, n) {
    n === void 0 && (n = new ul()), this.ensureNotDisposed();
    var r = this.getRegistration(e);
    if (!r && en(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), r) {
      var i = this.resolveRegistration(r, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    if (Sp(e)) {
      var i = this.construct(e, n);
      return this.executePostResolutionInterceptor(e, i, "Single"), i;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, n) {
    var r, i;
    if (this.interceptors.preResolution.has(e)) {
      var o = [];
      try {
        for (var s = fr(this.interceptors.preResolution.getAll(e)), l = s.next(); !l.done; l = s.next()) {
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
        for (var l = fr(this.interceptors.postResolution.getAll(e)), c = l.next(); !c.done; c = l.next()) {
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
    if (this.ensureNotDisposed(), e.options.lifecycle === Le.ResolutionScoped && n.scopedResolutions.has(e))
      return n.scopedResolutions.get(e);
    var r = e.options.lifecycle === Le.Singleton, i = e.options.lifecycle === Le.ContainerScoped, o = r || i, s;
    return kr(e.provider) ? s = e.provider.useValue : Er(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : _c(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : uo(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === Le.ResolutionScoped && n.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, n) {
    var r = this;
    n === void 0 && (n = new ul()), this.ensureNotDisposed();
    var i = this.getAllRegistrations(e);
    if (!i && en(e))
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
      for (var r = fr(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
        var o = Fr(i.value, 2), s = o[0], l = o[1];
        this._registry.setAll(s, l.filter(function(c) {
          return !kr(c.provider);
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
      for (var i = fr(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
        var s = Fr(o.value, 2), l = s[0], c = s[1];
        c.some(function(a) {
          var u = a.options;
          return u.lifecycle === Le.ContainerScoped;
        }) && r._registry.setAll(l, c.map(function(a) {
          return a.options.lifecycle === Le.ContainerScoped ? {
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
    return vp(this, void 0, void 0, function() {
      var e;
      return wp(this, function(n) {
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
    if (e instanceof vc)
      return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
    var i = function() {
      var o = $p.get(e);
      if (!o || o.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = o.map(r.resolveParams(n, e));
      return new (e.bind.apply(e, Ht([void 0], s)))();
    }();
    return xp(i) && this.disposables.add(i), i;
  }, t.prototype.resolveParams = function(e, n) {
    var r = this;
    return function(i, o) {
      var s, l, c;
      try {
        return yp(i) ? cl(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, Ht([r.resolveAll(i.token)], i.transformArgs)) : (l = r.resolve(i.transform)).transform.apply(l, Ht([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : cl(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, Ht([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
      } catch (a) {
        throw new Error(Ap(n, o, a));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), wc = new Dp();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
function Y() {
}
function Op(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Mp(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function yc(t) {
  return t();
}
function fl() {
  return /* @__PURE__ */ Object.create(null);
}
function wt(t) {
  t.forEach(yc);
}
function Sc(t) {
  return typeof t == "function";
}
function he(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Fp(t) {
  return Object.keys(t).length === 0;
}
function Ge(t, e, n, r) {
  if (t) {
    const i = Cc(t, e, n, r);
    return t[0](i);
  }
}
function Cc(t, e, n, r) {
  return t[1] && r ? Op(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function Je(t, e, n, r) {
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
function Ke(t, e, n, r, i, o) {
  if (i) {
    const s = Cc(e, n, r, o);
    t.p(s, i);
  }
}
function Xe(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function ue(t) {
  return t ?? "";
}
function P(t, e) {
  t.appendChild(e);
}
function Qt(t, e, n) {
  const r = Np(t);
  if (!r.getElementById(e)) {
    const i = D("style");
    i.id = e, i.textContent = n, Up(r, i);
  }
}
function Np(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Up(t, e) {
  return P(t.head || t, e), e.sheet;
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function O(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Dt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function D(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function H() {
  return j(" ");
}
function ni() {
  return j("");
}
function ae(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function k(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Lp(t) {
  return Array.from(t.childNodes);
}
function Ee(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Nr(t, e) {
  t.value = e ?? "";
}
function fo(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Hp(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let Jn;
function mt(t) {
  Jn = t;
}
function In() {
  if (!Jn)
    throw new Error("Function called outside component initialization");
  return Jn;
}
function Ec(t) {
  In().$$.on_mount.push(t);
}
function Mt(t) {
  In().$$.on_destroy.push(t);
}
function Qe() {
  const t = In();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Hp(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function kt(t, e) {
  return In().$$.context.set(t, e), e;
}
function Be(t) {
  return In().$$.context.get(t);
}
const sn = [], be = [];
let fn = [];
const ho = [], Bp = /* @__PURE__ */ Promise.resolve();
let po = !1;
function jp() {
  po || (po = !0, Bp.then(Vo));
}
function go(t) {
  fn.push(t);
}
function dn(t) {
  ho.push(t);
}
const mi = /* @__PURE__ */ new Set();
let tn = 0;
function Vo() {
  if (tn !== 0)
    return;
  const t = Jn;
  do {
    try {
      for (; tn < sn.length; ) {
        const e = sn[tn];
        tn++, mt(e), zp(e.$$);
      }
    } catch (e) {
      throw sn.length = 0, tn = 0, e;
    }
    for (mt(null), sn.length = 0, tn = 0; be.length; )
      be.pop()();
    for (let e = 0; e < fn.length; e += 1) {
      const n = fn[e];
      mi.has(n) || (mi.add(n), n());
    }
    fn.length = 0;
  } while (sn.length);
  for (; ho.length; )
    ho.pop()();
  po = !1, mi.clear(), mt(t);
}
function zp(t) {
  if (t.fragment !== null) {
    t.update(), wt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(go);
  }
}
function Vp(t) {
  const e = [], n = [];
  fn.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), fn = e;
}
const Tr = /* @__PURE__ */ new Set();
let zt;
function ve() {
  zt = {
    r: 0,
    c: [],
    p: zt
    // parent group
  };
}
function we() {
  zt.r || wt(zt.c), zt = zt.p;
}
function R(t, e) {
  t && t.i && (Tr.delete(t), t.i(e));
}
function $(t, e, n, r) {
  if (t && t.o) {
    if (Tr.has(t))
      return;
    Tr.add(t), zt.c.push(() => {
      Tr.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Ur(t, e) {
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
      d !== o && f && (ve(), $(f, 1, 1, () => {
        e.blocks[d] === f && (e.blocks[d] = null);
      }), we());
    }) : e.block.d(1), a.c(), R(a, 1), a.m(e.mount(), e.anchor), u = !0), e.block = a, e.blocks && (e.blocks[o] = a), u && Vo();
  }
  if (Mp(t)) {
    const i = In();
    if (t.then((o) => {
      mt(i), r(e.then, 1, e.value, o), mt(null);
    }, (o) => {
      if (mt(i), r(e.catch, 2, e.error, o), mt(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function kc(t, e, n) {
  const r = e.slice(), { resolved: i } = t;
  t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
}
function hn(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function G(t) {
  t && t.c();
}
function z(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || go(() => {
    const s = t.$$.on_mount.map(yc).filter(Sc);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : wt(s), t.$$.on_mount = [];
  }), o.forEach(go);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (Vp(n.after_update), wt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Wp(t, e) {
  t.$$.dirty[0] === -1 && (sn.push(t), jp(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ge(t, e, n, r, i, o, s, l = [-1]) {
  const c = Jn;
  mt(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Y,
    not_equal: i,
    bound: fl(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: fl(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(a.root);
  let u = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, d, ...b) => {
    const g = b.length ? b[0] : d;
    return a.ctx && i(a.ctx[f], a.ctx[f] = g) && (!a.skip_bound && a.bound[f] && a.bound[f](g), u && Wp(t, f)), d;
  }) : [], a.update(), u = !0, wt(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Lp(e.target);
      a.fragment && a.fragment.l(f), f.forEach(O);
    } else
      a.fragment && a.fragment.c();
    e.intro && R(t.$$.fragment), z(t, e.target, e.anchor, e.customElement), Vo();
  }
  mt(c);
}
class me {
  $destroy() {
    V(this, 1), this.$destroy = Y;
  }
  $on(e, n) {
    if (!Sc(n))
      return Y;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Fp(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const qp = {
  [zn.toString()]: "TenantHttpService",
  [so.toString()]: "DataSourceHttpService",
  [Xt.toString()]: "EntityHttpService",
  [Vn.toString()]: "EntityNameService",
  [xn.toString()]: "BaseHttpService",
  [lo.toString()]: "LiveValueService"
};
function Ne(t, e = null) {
  let n = qp[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? wc;
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
  const r = window.dependencyContainer ?? wc;
  try {
    if (r.isRegistered(t) && !n)
      return;
    r.registerInstance(t, e);
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
  return e;
}
function Av(t) {
  window.dependencyContainer = t;
}
function Wo(...t) {
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
const Tc = new Ao(!1), Gp = Tc.asObservable().pipe(un((t) => !t), Gf(1)), dl = {}, qo = /* @__PURE__ */ new Map(), Go = new De();
Go.asObservable();
function Jp(t) {
  qo.set(t.name, t), Go.next({
    type: "add",
    store: t
  });
}
function Kp(t) {
  qo.delete(t.name), Go.next({
    type: "remove",
    store: t
  });
}
function Xp() {
  return qo;
}
class Jo extends Ao {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Jp(this);
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
    dl.preStoreUpdate && (r = dl.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, Tc.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Gp.subscribe(() => {
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
    Kp(this), this.reset();
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
function Yp(t, ...e) {
  const {
    state: n,
    config: r
  } = Wo(...e), {
    name: i
  } = t;
  return new Jo({
    name: i,
    state: n,
    config: r
  });
}
function Ko(t) {
  return {
    props: t,
    config: void 0
  };
}
function Qp(t, e) {
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
      initialized$: cn(!1),
      unsubscribe() {
      }
    };
  const {
    storage: o
  } = e, s = new Aa(1), l = Yt(o.getItem(i.key)).subscribe((a) => {
    a && t.update((u) => i.preStoreInit(Object.assign({}, u, a))), s.next(!0), s.complete();
  }), c = i.source(t).pipe(td(1), Ga((a) => o.setItem(i.key, a))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      c.unsubscribe(), l.unsubscribe();
    }
  };
}
function Zp(t) {
  if (t)
    return {
      getItem(e) {
        const n = t.getItem(e);
        return cn(n && JSON.parse(n));
      },
      setItem(e, n) {
        return t.setItem(e, JSON.stringify(n)), cn(!0);
      },
      removeItem(e) {
        return t.removeItem(e), cn(!0);
      }
    };
}
const eg = Zp(typeof localStorage < "u" ? localStorage : void 0), nn = [];
function Lr(t, e = Y) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (he(t, l) && (t = l, n)) {
      const c = !nn.length;
      for (const a of r)
        a[1](), nn.push(a, t);
      if (c) {
        for (let a = 0; a < nn.length; a += 2)
          nn[a][0](nn[a + 1]);
        nn.length = 0;
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
const hl = Lr(L.Signal), { config: tg, state: ng } = Wo(
  Ko({
    queryWithSubGroups: !0,
    selectedTenant: null,
    pageSize: 10
  })
), Wt = Yp({ name: "entity-select-selection" }, Ko({
  selectedEntities: []
})), qt = new Jo({ state: ng, config: tg, name: "entity-select-global" });
Qp(qt, {
  key: "entity-select-global",
  storage: eg
});
const yn = (t) => {
  const e = Xp().get(`entity-select-type-${hl}`);
  if (e)
    return e;
  const { state: n, config: r } = Wo(
    Ko({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: []
    })
  );
  return new Jo({ state: n, config: r, name: `entity-select-type-${hl}` });
};
function pl(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function rg(t) {
  let e;
  return {
    c() {
      e = D("div"), k(
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
      n && O(e);
    }
  };
}
function ig(t) {
  let e;
  function n(o, s) {
    return (
      /*expanded*/
      o[0] ? sg : og
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = D("div"), i.c(), k(
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
      o && O(e), i.d();
    }
  };
}
function og(t) {
  let e, n, r, i;
  return {
    c() {
      e = D("span"), n = j("chevron_right"), k(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      M(o, e, s), P(e, n), r || (i = ae(
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
function sg(t) {
  let e, n, r, i;
  return {
    c() {
      e = D("span"), n = j("expand_more"), k(
        e,
        "class",
        /*tw*/
        t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`
      );
    },
    m(o, s) {
      M(o, e, s), P(e, n), r || (i = ae(
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
function gl(t) {
  let e, n, r, i, o, s = (
    /*children*/
    t[4]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = ml(pl(t, s, a));
  const c = (a) => $(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = D("div"), n = D("div"), r = H(), i = D("div");
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
          const d = pl(a, s, f);
          l[f] ? (l[f].p(d, u), R(l[f], 1)) : (l[f] = ml(d), l[f].c(), R(l[f], 1), l[f].m(i, null));
        }
        for (ve(), f = s.length; f < l.length; f += 1)
          c(f);
        we();
      }
    },
    i(a) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          R(l[u]);
        o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        $(l[u]);
      o = !1;
    },
    d(a) {
      a && O(e), Dt(l, a);
    }
  };
}
function ml(t) {
  let e, n;
  return e = new Ac({
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
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function lg(t) {
  var T, w;
  let e, n, r, i, o, s, l = (
    /*group*/
    ((w = (T = t[1]) == null ? void 0 : T.Name) == null ? void 0 : w.Value) + ""
  ), c, a, u, f, d;
  function b(v, _) {
    return (
      /*children*/
      v[4].length > 0 ? ig : rg
    );
  }
  let g = b(t), p = g(t), m = (
    /*expanded*/
    t[0] && gl(t)
  );
  return {
    c() {
      e = D("div"), n = D("div"), r = D("div"), i = H(), p.c(), o = H(), s = D("div"), c = j(l), a = H(), m && m.c(), k(
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
    m(v, _) {
      M(v, e, _), P(e, n), P(n, r), P(n, i), p.m(n, null), P(n, o), P(n, s), P(s, c), P(e, a), m && m.m(e, null), u = !0, f || (d = ae(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), f = !0);
    },
    p(v, [_]) {
      var y, x;
      g === (g = b(v)) && p ? p.p(v, _) : (p.d(1), p = g(v), p && (p.c(), p.m(n, o))), (!u || _ & /*group*/
      2) && l !== (l = /*group*/
      ((x = (y = v[1]) == null ? void 0 : y.Name) == null ? void 0 : x.Value) + "") && Ee(c, l), /*expanded*/
      v[0] ? m ? (m.p(v, _), _ & /*expanded*/
      1 && R(m, 1)) : (m = gl(v), m.c(), R(m, 1), m.m(e, null)) : m && (ve(), $(m, 1, 1, () => {
        m = null;
      }), we());
    },
    i(v) {
      u || (R(m), u = !0);
    },
    o(v) {
      $(m), u = !1;
    },
    d(v) {
      v && O(e), p.d(), m && m.d(), f = !1, d();
    }
  };
}
function ag(t, e, n) {
  const r = Ne(Xt);
  let { group: i } = e, { expanded: o = !1 } = e, { level: s = 1 } = e, { entityType: l } = e, c = Be("tw"), a = [], u = new De(), f = yn();
  f.pipe(_t(u), Yf("selectedGroup")).subscribe((w) => {
    var v, _;
    (v = w.selectedGroup) == null || v.Id, i == null || i.Id, i && ((_ = w.selectedGroup) != null && _.Path.includes(i.Id)) && n(0, o = !0);
  });
  async function d() {
    try {
      n(4, a = await (await r.queryConfiguration(L.Group, { GroupId: i.Id })).data);
    } catch (w) {
      console.error(w);
    }
  }
  function b() {
    n(0, o = !o);
  }
  function g() {
    f.update((w) => ({ ...w, selectedGroup: i }));
  }
  Mt(() => {
    u.next(), u.complete();
  });
  const p = () => b(), m = () => b(), T = () => g();
  return t.$$set = (w) => {
    "group" in w && n(1, i = w.group), "expanded" in w && n(0, o = w.expanded), "level" in w && n(2, s = w.level), "entityType" in w && n(3, l = w.entityType);
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
    b,
    g,
    p,
    m,
    T
  ];
}
class Ac extends me {
  constructor(e) {
    super(), ge(this, e, ag, lg, he, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function cg(t) {
  Qt(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function ug(t) {
  let e;
  return {
    c() {
      e = j(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      M(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && Ee(
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
function fg(t) {
  let e, n, r, i, o, s, l, c, a, u;
  const f = (
    /*#slots*/
    t[11].default
  ), d = Ge(
    f,
    t,
    /*$$scope*/
    t[10],
    null
  ), b = d || ug(t);
  return {
    c() {
      e = D("div"), n = D("div"), i = H(), o = D("span"), b && b.c(), k(n, "class", ue(
        /*tw*/
        t[5]`ripple bg-gray-200 bg-opacity-50`
      ) + " svelte-1b4yyah"), k(n, "style", r = /*active*/
      t[4] ? "width: 100% !important; height: 100% !important" : ""), k(o, "class", ue(
        /*tw*/
        t[5]`material-symbols-rounded z-[1] select-none`
      ) + " svelte-1b4yyah"), k(e, "class", s = ue(
        /*tw*/
        t[5]`container group ${/*className*/
        t[1]}`
      ) + " svelte-1b4yyah"), k(e, "style", l = "height: " + /*absoluteSize*/
      t[3] + "px; width: " + /*absoluteSize*/
      t[3] + "px; " + /*disabled*/
      (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(g, p) {
      M(g, e, p), P(e, n), P(e, i), P(e, o), b && b.m(o, null), c = !0, a || (u = [
        ae(
          e,
          "mousedown",
          /*mousedown_handler*/
          t[12]
        ),
        ae(
          e,
          "mouseup",
          /*mouseup_handler*/
          t[13]
        ),
        ae(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[14]
        ),
        ae(
          e,
          "click",
          /*click_handler*/
          t[15]
        ),
        ae(e, "blur", dg)
      ], a = !0);
    },
    p(g, [p]) {
      (!c || p & /*active*/
      16 && r !== (r = /*active*/
      g[4] ? "width: 100% !important; height: 100% !important" : "")) && k(n, "style", r), d ? d.p && (!c || p & /*$$scope*/
      1024) && Ke(
        d,
        f,
        g,
        /*$$scope*/
        g[10],
        c ? Je(
          f,
          /*$$scope*/
          g[10],
          p,
          null
        ) : Xe(
          /*$$scope*/
          g[10]
        ),
        null
      ) : b && b.p && (!c || p & /*icon*/
      1) && b.p(g, c ? p : -1), (!c || p & /*className*/
      2 && s !== (s = ue(
        /*tw*/
        g[5]`container group ${/*className*/
        g[1]}`
      ) + " svelte-1b4yyah")) && k(e, "class", s), (!c || p & /*absoluteSize, disabled*/
      12 && l !== (l = "height: " + /*absoluteSize*/
      g[3] + "px; width: " + /*absoluteSize*/
      g[3] + "px; " + /*disabled*/
      (g[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && k(e, "style", l);
    },
    i(g) {
      c || (R(b, g), c = !0);
    },
    o(g) {
      $(b, g), c = !1;
    },
    d(g) {
      g && O(e), b && b.d(g), a = !1, wt(u);
    }
  };
}
const dg = (t) => {
};
function hg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: l = "" } = e, { disabled: c = !1 } = e, a = Be("tw"), u, f, d, b = Qe();
  function g(y) {
    c || (n(4, f = !0), d = y.timeStamp);
  }
  function p(y) {
    const x = y.timeStamp - d;
    x < 300 ? setTimeout(
      () => {
        n(4, f = !1);
      },
      300 - x
    ) : n(4, f = !1);
  }
  function m(y) {
    c || b("click", y);
  }
  const T = (y) => g(y), w = (y) => p(y), v = (y) => p(y), _ = (y) => m(y);
  return t.$$set = (y) => {
    "icon" in y && n(0, o = y.icon), "size" in y && n(9, s = y.size), "className" in y && n(1, l = y.className), "disabled" in y && n(2, c = y.disabled), "$$scope" in y && n(10, i = y.$$scope);
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
    m,
    s,
    i,
    r,
    T,
    w,
    v,
    _
  ];
}
class xt extends me {
  constructor(e) {
    super(), ge(
      this,
      e,
      hg,
      fg,
      he,
      {
        icon: 0,
        size: 9,
        className: 1,
        disabled: 2
      },
      cg
    );
  }
}
function pg(t) {
  let e, n, r, i, o, s, l, c, a;
  return {
    c() {
      e = D("div"), n = D("input"), i = H(), o = D("div"), s = j(
        /*label*/
        t[1]
      ), k(n, "type", "checkbox"), k(n, "class", r = /*tw*/
      t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), k(e, "class", l = /*tw*/
      t[2]`flex items-center cursor-pointer`);
    },
    m(u, f) {
      M(u, e, f), P(e, n), t[7](n), P(e, i), P(e, o), P(o, s), c || (a = [
        ae(
          n,
          "click",
          /*click_handler*/
          t[8]
        ),
        ae(
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
      2 && Ee(
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
      u && O(e), t[7](null), c = !1, wt(a);
    }
  };
}
function gg(t, e, n) {
  let { readonly: r = !1 } = e, { label: i = "" } = e, { checked: o = !1 } = e, { indeterminate: s = !1 } = e, { tw: l = Be("tw") } = e, c = Qe(), a;
  function u(p) {
    r || (n(5, o = !o), console.log("checked", o), c("change", { checked: o }));
  }
  function f(p) {
    setTimeout(() => {
      (a == null ? void 0 : a.checked) !== p && n(3, a.checked = p, a);
    });
  }
  function d(p) {
    be[p ? "unshift" : "push"](() => {
      a = p, n(3, a), n(5, o), n(6, s), n(11, f);
    });
  }
  const b = (p) => r ? p.preventDefault() : {}, g = (p) => u();
  return t.$$set = (p) => {
    "readonly" in p && n(0, r = p.readonly), "label" in p && n(1, i = p.label), "checked" in p && n(5, o = p.checked), "indeterminate" in p && n(6, s = p.indeterminate), "tw" in p && n(2, l = p.tw);
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
    b,
    g
  ];
}
class ir extends me {
  constructor(e) {
    super(), ge(this, e, gg, pg, he, {
      readonly: 0,
      label: 1,
      checked: 5,
      indeterminate: 6,
      tw: 2
    });
  }
}
function bl(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r[20] = n, r;
}
function mg(t) {
  let e;
  return {
    c() {
      e = j("edit");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function _l(t) {
  let e, n, r;
  return n = new Ac({
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
      e = D("div"), G(n.$$.fragment), k(
        e,
        "class",
        /*tw*/
        t[7]`flex-[2] overflow-auto`
      );
    },
    m(i, o) {
      M(i, e, o), z(n, e, null), r = !0;
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
      r || (R(n.$$.fragment, i), r = !0);
    },
    o(i) {
      $(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && O(e), V(n);
    }
  };
}
function vl(t) {
  let e, n, r = (
    /*lastSelectedEntities*/
    t[4]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = yl(bl(t, r, s));
  const o = (s) => $(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = ni();
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
          const a = bl(s, r, c);
          i[c] ? (i[c].p(a, l), R(i[c], 1)) : (i[c] = yl(a), i[c].c(), R(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (ve(), c = r.length; c < i.length; c += 1)
          o(c);
        we();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          R(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        $(i[l]);
      n = !1;
    },
    d(s) {
      Dt(i, s), s && O(e);
    }
  };
}
function wl(t) {
  let e, n;
  return e = new ir({
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
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function bg(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function _g(t) {
  let e = (
    /*name*/
    t[21] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i & /*entityType, lastSelectedEntities*/
      17 && e !== (e = /*name*/
      r[21] + "") && Ee(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function vg(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function yl(t) {
  let e, n, r, i, o, s, l, c = (
    /*selectMultiple*/
    t[2] && wl(t)
  ), a = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: vg,
    then: _g,
    catch: bg,
    value: 21
  };
  Ur(r = /*nameService*/
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
      e = D("div"), c && c.c(), n = H(), a.block.c(), i = H(), k(
        e,
        "class",
        /*tw*/
        t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`
      );
    },
    m(f, d) {
      M(f, e, d), c && c.m(e, null), P(e, n), a.block.m(e, a.anchor = null), a.mount = () => e, a.anchor = i, P(e, i), o = !0, s || (l = ae(e, "click", u), s = !0);
    },
    p(f, d) {
      t = f, /*selectMultiple*/
      t[2] ? c ? (c.p(t, d), d & /*selectMultiple*/
      4 && R(c, 1)) : (c = wl(t), c.c(), R(c, 1), c.m(e, n)) : c && (ve(), $(c, 1, 1, () => {
        c = null;
      }), we()), a.ctx = t, d & /*entityType, lastSelectedEntities*/
      17 && r !== (r = /*nameService*/
      t[6].resolveName(
        /*entityType*/
        t[0],
        /*entityId*/
        t[18]
      )) && Ur(r, a) || kc(a, t, d);
    },
    i(f) {
      o || (R(c), o = !0);
    },
    o(f) {
      $(c), o = !1;
    },
    d(f) {
      f && O(e), c && c.d(), a.block.d(), a.token = null, a = null, s = !1, l();
    }
  };
}
function wg(t) {
  var w;
  let e, n, r = (
    /*selectedTenant*/
    ((w = t[1]) == null ? void 0 : w.Name) + ""
  ), i, o, s, l, c, a, u, f, d, b, g, p;
  s = new xt({
    props: {
      size: "small",
      $$slots: { default: [mg] },
      $$scope: { ctx: t }
    }
  });
  let m = (
    /*rootGroup*/
    t[3] && _l(t)
  ), T = (
    /*lastSelectedEntities*/
    t[4] && /*lastSelectedEntities*/
    t[4].length > 0 && vl(t)
  );
  return {
    c() {
      e = D("div"), n = D("div"), i = j(r), o = H(), G(s.$$.fragment), l = H(), m && m.c(), c = H(), a = D("div"), u = D("div"), f = j("Zuletzt ausgewählt"), d = H(), T && T.c(), k(
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
    m(v, _) {
      M(v, e, _), P(e, n), P(n, i), P(n, o), z(s, n, null), P(e, l), m && m.m(e, null), P(e, c), P(e, a), P(a, u), P(u, f), P(a, d), T && T.m(a, null), b = !0, g || (p = ae(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), g = !0);
    },
    p(v, [_]) {
      var x;
      (!b || _ & /*selectedTenant*/
      2) && r !== (r = /*selectedTenant*/
      ((x = v[1]) == null ? void 0 : x.Name) + "") && Ee(i, r);
      const y = {};
      _ & /*$$scope*/
      4194304 && (y.$$scope = { dirty: _, ctx: v }), s.$set(y), /*rootGroup*/
      v[3] ? m ? (m.p(v, _), _ & /*rootGroup*/
      8 && R(m, 1)) : (m = _l(v), m.c(), R(m, 1), m.m(e, c)) : m && (ve(), $(m, 1, 1, () => {
        m = null;
      }), we()), /*lastSelectedEntities*/
      v[4] && /*lastSelectedEntities*/
      v[4].length > 0 ? T ? (T.p(v, _), _ & /*lastSelectedEntities*/
      16 && R(T, 1)) : (T = vl(v), T.c(), R(T, 1), T.m(a, null)) : T && (ve(), $(T, 1, 1, () => {
        T = null;
      }), we());
    },
    i(v) {
      b || (R(s.$$.fragment, v), R(m), R(T), b = !0);
    },
    o(v) {
      $(s.$$.fragment, v), $(m), $(T), b = !1;
    },
    d(v) {
      v && O(e), V(s), m && m.d(), T && T.d(), g = !1, p();
    }
  };
}
function yg(t, e, n) {
  let r = Ne(Xt), i = Ne(Vn), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: l = !1 } = e, c = Be("tw"), a = null, u, f = [], d = {}, b = Qe(), g = new De(), p = yn();
  p.pipe(_t(g)).subscribe((y) => {
    n(4, u = y.lastSelectedEntities);
  });
  const m = Wt.subscribe((y) => {
    f = y.selectedEntities, n(5, d = {});
    for (let x of f)
      n(5, d[x.Id] = !0, d);
  });
  async function T(y) {
    var x;
    try {
      n(3, a = await r.getEntityById(L.Group, y)), (!((x = p.value) != null && x.selectedGroup) || p.value.selectedGroup.Id != a.Id) && p.update((S) => ({ ...S, selectedGroup: a }));
    } catch (S) {
      console.log(S);
    }
  }
  async function w(y) {
    let x = await r.getEntityById(o, y);
    l ? d[y] ? f = f.filter((S) => S.Id !== y) : f.push(x) : f = [x], Wt.update((S) => ({ ...S, selectedEntities: f }));
  }
  Mt(() => {
    console.log("onDestroy"), m.unsubscribe();
  });
  const v = () => b("changeTenant"), _ = (y) => w(y);
  return t.$$set = (y) => {
    "entityType" in y && n(0, o = y.entityType), "selectedTenant" in y && n(1, s = y.selectedTenant), "selectMultiple" in y && n(2, l = y.selectMultiple);
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
    b,
    w,
    v,
    _
  ];
}
class Sg extends me {
  constructor(e) {
    super(), ge(this, e, yg, wg, he, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const Cg = (t) => ({}), Sl = (t) => ({});
function Eg(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[2].default
  ), s = Ge(
    o,
    t,
    /*$$scope*/
    t[1],
    null
  ), l = (
    /*#slots*/
    t[2].pagination
  ), c = Ge(
    l,
    t,
    /*$$scope*/
    t[1],
    Sl
  );
  return {
    c() {
      e = D("div"), n = D("div"), s && s.c(), r = H(), c && c.c(), k(n, "class", "w-full overflow-auto flex-1"), k(e, "class", "flex flex-col h-full");
    },
    m(a, u) {
      M(a, e, u), P(e, n), s && s.m(n, null), P(e, r), c && c.m(e, null), i = !0;
    },
    p(a, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      2) && Ke(
        s,
        o,
        a,
        /*$$scope*/
        a[1],
        i ? Je(
          o,
          /*$$scope*/
          a[1],
          u,
          null
        ) : Xe(
          /*$$scope*/
          a[1]
        ),
        null
      ), c && c.p && (!i || u & /*$$scope*/
      2) && Ke(
        c,
        l,
        a,
        /*$$scope*/
        a[1],
        i ? Je(
          l,
          /*$$scope*/
          a[1],
          u,
          Cg
        ) : Xe(
          /*$$scope*/
          a[1]
        ),
        Sl
      );
    },
    i(a) {
      i || (R(s, a), R(c, a), i = !0);
    },
    o(a) {
      $(s, a), $(c, a), i = !1;
    },
    d(a) {
      a && O(e), s && s.d(a), c && c.d(a);
    }
  };
}
function kg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = Qe(), l = Lr(o);
  kt("audako:table:sort", l);
  let c = l.subscribe((a) => {
    s("sort", a);
  });
  return Mt(() => {
    c();
  }), t.$$set = (a) => {
    "startSort" in a && n(0, o = a.startSort), "$$scope" in a && n(1, i = a.$$scope);
  }, [o, i, r];
}
class Tg extends me {
  constructor(e) {
    super(), ge(this, e, kg, Eg, he, { startSort: 0 });
  }
}
function Ag(t) {
  Qt(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
}
function xg(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[2].default
  ), i = Ge(
    r,
    t,
    /*$$scope*/
    t[1],
    null
  );
  return {
    c() {
      e = D("div"), i && i.c(), k(e, "class", "audako-tableheader-flexrow");
    },
    m(o, s) {
      M(o, e, s), i && i.m(e, null), t[3](e), n = !0;
    },
    p(o, [s]) {
      i && i.p && (!n || s & /*$$scope*/
      2) && Ke(
        i,
        r,
        o,
        /*$$scope*/
        o[1],
        n ? Je(
          r,
          /*$$scope*/
          o[1],
          s,
          null
        ) : Xe(
          /*$$scope*/
          o[1]
        ),
        null
      );
    },
    i(o) {
      n || (R(i, o), n = !0);
    },
    o(o) {
      $(i, o), n = !1;
    },
    d(o) {
      o && O(e), i && i.d(o), t[3](null);
    }
  };
}
function Ig(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o;
  function s(l) {
    be[l ? "unshift" : "push"](() => {
      o = l, n(0, o);
    });
  }
  return t.$$set = (l) => {
    "$$scope" in l && n(1, i = l.$$scope);
  }, [o, i, r, s];
}
class Rg extends me {
  constructor(e) {
    super(), ge(this, e, Ig, xg, he, {}, Ag);
  }
}
function Pg(t) {
  Qt(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
}
function Cl(t) {
  let e, n, r;
  return {
    c() {
      e = D("span"), n = j("north"), k(e, "class", "material-symbols-rounded text-xs transition-all"), k(e, "style", r = /*sortDirection*/
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
      i && O(e);
    }
  };
}
function $g(t) {
  let e, n, r, i, o, s, l;
  const c = (
    /*#slots*/
    t[6].default
  ), a = Ge(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let u = (
    /*sortable*/
    t[0] && Cl(t)
  );
  return {
    c() {
      e = D("div"), n = D("div"), a && a.c(), r = H(), u && u.c(), k(e, "class", i = "header-cell " + /*sortable*/
      (t[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      t[1] + " svelte-11sxgak");
    },
    m(f, d) {
      M(f, e, d), P(e, n), a && a.m(n, null), P(e, r), u && u.m(e, null), o = !0, s || (l = ae(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(f, [d]) {
      a && a.p && (!o || d & /*$$scope*/
      32) && Ke(
        a,
        c,
        f,
        /*$$scope*/
        f[5],
        o ? Je(
          c,
          /*$$scope*/
          f[5],
          d,
          null
        ) : Xe(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*sortable*/
      f[0] ? u ? u.p(f, d) : (u = Cl(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!o || d & /*sortable, container$class*/
      3 && i !== (i = "header-cell " + /*sortable*/
      (f[0] ? "cursor-pointer" : "") + " " + /*container$class*/
      f[1] + " svelte-11sxgak")) && k(e, "class", i);
    },
    i(f) {
      o || (R(a, f), o = !0);
    },
    o(f) {
      $(a, f), o = !1;
    },
    d(f) {
      f && O(e), a && a.d(f), u && u.d(), s = !1, l();
    }
  };
}
function Dg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { sortable: o = !1 } = e, { id: s } = e, { container$class: l = "" } = e, c = "asc", a = Be("audako:table:sort");
  console.log(a);
  let u = a.subscribe((b) => {
    s && (b == null ? void 0 : b.active) === s ? n(2, c = b.direction) : n(2, c = null);
  });
  function f() {
    c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), a.set(c ? { active: s, direction: c } : null);
  }
  Mt(() => {
    u();
  });
  const d = () => f();
  return t.$$set = (b) => {
    "sortable" in b && n(0, o = b.sortable), "id" in b && n(4, s = b.id), "container$class" in b && n(1, l = b.container$class), "$$scope" in b && n(5, i = b.$$scope);
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
class mo extends me {
  constructor(e) {
    super(), ge(this, e, Dg, $g, he, { sortable: 0, id: 4, container$class: 1 }, Pg);
  }
}
function Og(t) {
  Qt(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
}
function Mg(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[3].default
  ), l = Ge(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = D("div"), l && l.c(), k(e, "class", n = "audako-tablebody-flexrow " + /*flexrow$class*/
      t[0]);
    },
    m(c, a) {
      M(c, e, a), l && l.m(e, null), r = !0, i || (o = ae(
        e,
        "click",
        /*onClick*/
        t[1]
      ), i = !0);
    },
    p(c, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      4) && Ke(
        l,
        s,
        c,
        /*$$scope*/
        c[2],
        r ? Je(
          s,
          /*$$scope*/
          c[2],
          a,
          null
        ) : Xe(
          /*$$scope*/
          c[2]
        ),
        null
      ), (!r || a & /*flexrow$class*/
      1 && n !== (n = "audako-tablebody-flexrow " + /*flexrow$class*/
      c[0])) && k(e, "class", n);
    },
    i(c) {
      r || (R(l, c), r = !0);
    },
    o(c) {
      $(l, c), r = !1;
    },
    d(c) {
      c && O(e), l && l.d(c), i = !1, o();
    }
  };
}
function Fg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = Qe();
  function l(c) {
    s("click", c);
  }
  return t.$$set = (c) => {
    "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
  }, [o, l, i, r];
}
class Ng extends me {
  constructor(e) {
    super(), ge(this, e, Fg, Mg, he, { flexrow$class: 0 }, Og);
  }
}
function Ug(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[3].default
  ), o = Ge(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = D("div"), o && o.c(), k(e, "class", n = /*tw*/
      t[1]`border-t overflow-hidden ${/*container$class*/
      t[0]}`);
    },
    m(s, l) {
      M(s, e, l), o && o.m(e, null), r = !0;
    },
    p(s, [l]) {
      o && o.p && (!r || l & /*$$scope*/
      4) && Ke(
        o,
        i,
        s,
        /*$$scope*/
        s[2],
        r ? Je(
          i,
          /*$$scope*/
          s[2],
          l,
          null
        ) : Xe(
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
      r || (R(o, s), r = !0);
    },
    o(s) {
      $(o, s), r = !1;
    },
    d(s) {
      s && O(e), o && o.d(s);
    }
  };
}
function Lg(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, o = Be("tw"), { container$class: s = "" } = e;
  return t.$$set = (l) => {
    "container$class" in l && n(0, s = l.container$class), "$$scope" in l && n(2, i = l.$$scope);
  }, [s, o, i, r];
}
class bo extends me {
  constructor(e) {
    super(), ge(this, e, Lg, Ug, he, { container$class: 0 });
  }
}
var dr, Hg = new Uint8Array(16);
function Bg() {
  if (!dr && (dr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !dr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return dr(Hg);
}
const jg = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function zg(t) {
  return typeof t == "string" && jg.test(t);
}
var Te = [];
for (var bi = 0; bi < 256; ++bi)
  Te.push((bi + 256).toString(16).substr(1));
function Vg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Te[t[e + 0]] + Te[t[e + 1]] + Te[t[e + 2]] + Te[t[e + 3]] + "-" + Te[t[e + 4]] + Te[t[e + 5]] + "-" + Te[t[e + 6]] + Te[t[e + 7]] + "-" + Te[t[e + 8]] + Te[t[e + 9]] + "-" + Te[t[e + 10]] + Te[t[e + 11]] + Te[t[e + 12]] + Te[t[e + 13]] + Te[t[e + 14]] + Te[t[e + 15]]).toLowerCase();
  if (!zg(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
function Wg(t, e, n) {
  t = t || {};
  var r = t.random || (t.rng || Bg)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return Vg(r);
}
const qg = {
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
class Hr {
  constructor(e) {
    ot(this, "_popupContainer");
    ot(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, n, r) {
    r = { ...qg, ...r }, console.log("openPopup", r);
    const i = Wg(), o = new De(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), l = this._createPopupWrapper(n, r);
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
      afterClosed: jn(o).then(() => console.log("afterClosed")),
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
var Gg = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function Jg(t) {
  return Gg.get(t);
}
function Kg(t) {
  var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
  return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
}
function Xg(t, e) {
  var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
  return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
}
var se = (t, e) => !!~t.indexOf(e), X = (t, e = "-") => t.join(e), _o = (t, e) => X(t.filter(Boolean), e), K = (t, e = 1) => t.slice(e), Yg = (t) => t, xc = () => {
}, at = (t) => t[0].toUpperCase() + K(t), Xo = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase(), Gt = (t, e) => {
  for (; typeof t == "function"; )
    t = t(e);
  return t;
}, Ic = (t, e) => {
  t.size > e && t.delete(t.keys().next().value);
}, Rc = (t, e) => !se("@:&", t[0]) && (se("rg", (typeof e)[5]) || Array.isArray(e)), Yo = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
  const o = Gt(e[i], n);
  return Rc(i, o) ? r[Xo(i)] = o : r[i] = i[0] == "@" && se("figa", i[1]) ? (r[i] || []).concat(o) : Yo(r[i] || {}, o, n), r;
}, t) : t, Pc = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")), ri = (t) => (Array.isArray(t) || (t = [t]), "@media " + X(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || X(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ",")), _i = (t) => {
  for (var e = 9, n = t.length; n--; )
    e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
  return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
}, Qg = (t, e) => {
  for (var n = 0, r = t.length; n < r; ) {
    const i = r + n >> 1;
    t[i] <= e ? n = i + 1 : r = i;
  }
  return r;
}, vt, pn, Tt = (t = "") => (vt.push(t), ""), Qo = (t) => {
  vt.length = Math.max(vt.lastIndexOf("") + ~~t, 0);
}, Zg = (t) => t && !se("!:", t[0]), em = (t) => t[0] == ":", $c = (t, e) => {
  pn.push({
    v: vt.filter(em),
    d: t,
    n: e,
    i: se(vt, "!"),
    $: ""
  });
}, El = (t) => {
  const e = t[0] == "-";
  e && (t = K(t));
  const n = X(vt.filter(Zg));
  return $c(t == "&" ? n : (n && n + "-") + t, e), "";
}, Hn = (t, e) => {
  let n = "";
  for (let r, i = !1, o = 0; r = t[o++]; ) {
    if (i || r == "[") {
      n += r, i = r != "]";
      continue;
    }
    switch (r) {
      case ":":
        n = n && Tt(":" + (t[o] == r ? t[o++] : "") + n);
        break;
      case "(":
        n = n && Tt(n), Tt();
        break;
      case "!":
        Tt(r);
        break;
      case ")":
      case " ":
      case "	":
      case `
`:
      case "\r":
        n = n && El(n), Qo(r !== ")");
        break;
      default:
        n += r;
    }
  }
  n && (e ? Tt(":" + n) : n.slice(-1) == "-" ? Tt(n.slice(0, -1)) : El(n));
}, Dc = (t) => {
  Tt(), Br(t), Qo();
}, tm = (t, e) => {
  if (e) {
    Tt();
    const n = se("tbu", (typeof e)[1]);
    Hn(t, n), n && Dc(e), Qo();
  }
}, Br = (t) => {
  switch (typeof t) {
    case "string":
      Hn(t);
      break;
    case "function":
      $c(t);
      break;
    case "object":
      Array.isArray(t) ? t.forEach(Dc) : t && Object.keys(t).forEach((e) => {
        tm(e, t[e]);
      });
  }
}, kl = /* @__PURE__ */ new WeakMap(), nm = (t) => {
  let e = kl.get(t);
  if (!e) {
    let n = NaN, r = "";
    e = t.map((i, o) => {
      if (n !== n && (i.slice(-1) == "[" || se(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n)
        return (c) => {
          o == n && (r = ""), r += i, se("rg", (typeof c)[5]) ? r += c : c && (Hn(r), r = "", Br(c)), o == t.length - 1 && Hn(r);
        };
      const s = pn = [];
      Hn(i);
      const l = [...vt];
      return pn = [], (c) => {
        pn.push(...s), vt = [...l], c && Br(c);
      };
    }), kl.set(t, e);
  }
  return e;
}, vo = (t) => (vt = [], pn = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? nm(t[0]).forEach((e, n) => e(t[n + 1])) : Br(t), pn), wo, rm = (t, e) => (typeof e == "function" && (wo = !1), e), im = (t) => {
  wo = !0;
  const e = JSON.stringify(t, rm);
  return wo && e;
}, Tl = /* @__PURE__ */ new WeakMap(), om = (t, e) => {
  const n = im(e);
  let r;
  if (n) {
    var i = Tl.get(t);
    i || Tl.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
  }
  return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, Gt(t(e, s), s)), "toJSON", {
    value: () => n || e
  }), i && (i.set(n, r), Ic(i, 1e4))), r;
}, sm = (t, { css: e }) => e(vo(t)), lm = (...t) => om(sm, t), Oc = (t) => (e, n, r, i) => {
  if (e) {
    const o = n && t(n);
    if (o && o.length > 0)
      return o.reduce((s, l) => (s[_o([r, l, i])] = e, s), {});
  }
}, am = /* @__PURE__ */ Oc((t) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[t]), jr = (t) => {
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
}, Mc = /* @__PURE__ */ Oc(jr), cm = (t, e) => t + (e[1] == ":" ? K(e, 2) + ":" : K(e)) + ":", Al = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(cm, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e, I, Bt, Q, hr = (t) => t == "cols" ? "columns" : "rows", or = (t) => (e, n, r) => ({
  [t]: r + ((I = X(e)) && "-" + I)
}), de = (t, e) => (n, r, i) => (I = X(n, e)) && {
  [t || i]: I
}, Re = (t) => (e, { theme: n }, r) => (I = n(t || r, e)) && {
  [t || r]: I
}, pr = (t, e) => (n, { theme: r }, i) => (I = r(t || i, n, X(n, e))) && {
  [t || i]: I
}, lt = (t, e) => (n, r) => t(n, r, e), ht = or("display"), On = or("position"), rn = or("textTransform"), on = or("textDecoration"), gr = or("fontStyle"), Ct = (t) => (e, n, r) => ({
  ["--tw-" + t]: r,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
}), mr = (t, { theme: e }, n) => (I = e("inset", t)) && { [n]: I }, Un = (t, e, n, r = n) => (I = e(r + "Opacity", K(t))) && {
  [`--tw-${n}-opacity`]: I
}, vi = (t, e) => Math.round(parseInt(t, 16) * e), zr = (t, e, n) => t && t[0] == "#" && (I = (t.length - 1) / 3) && (Q = [17, 1, 0.062272][I - 1]) ? `rgba(${vi(t.substr(1, I), Q)},${vi(t.substr(1 + I, I), Q)},${vi(t.substr(1 + 2 * I, I), Q)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t, Ar = (t, e, n) => n && typeof n == "string" ? (I = zr(n, e + "-opacity")) && I !== n ? {
  [`--tw-${e}-opacity`]: "1",
  [t]: [n, I]
} : { [t]: n } : void 0, xl = (t) => (Q = zr(t, "", "0")) == I ? "transparent" : Q, Il = (t, { theme: e }, n, r, i, o) => (I = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (Q = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? {
  [Q]: "1"
} : {
  [Q]: "0",
  [_o([i, I[0], o])]: (Bt = e(r, K(t))) && `calc(${Bt} * var(${Q}))`,
  [_o([i, I[1], o])]: Bt && [Bt, `calc(${Bt} * calc(1 - var(${Q})))`]
} : void 0, Fc = (t, e) => e[0] && {
  [t]: (se("wun", (e[0] || "")[3]) ? "space-" : "") + e[0]
}, wi = (t) => (e) => se(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : Fc(t, e), Rl = (t) => (e, { theme: n }) => {
  if (I = n("grid" + at(t), e, ""))
    return { ["grid-" + t]: I };
  switch (e[0]) {
    case "span":
      return e[1] && {
        ["grid-" + t]: `span ${e[1]} / span ${e[1]}`
      };
    case "start":
    case "end":
      return (I = n("grid" + at(t) + at(e[0]), K(e), X(K(e)))) && {
        [`grid-${t}-${e[0]}`]: I
      };
  }
}, Nc = (t, { theme: e }, n) => {
  switch (t[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return de("borderStyle")(t);
    case "collapse":
    case "separate":
      return de("borderCollapse")(t);
    case "opacity":
      return Un(t, e, n);
  }
  return (I = e(n + "Width", t, "")) ? { borderWidth: I } : Ar("borderColor", n, e(n + "Color", t));
}, um = (t, e, n) => {
  var r;
  const i = (r = jr(t[0])) == null ? void 0 : r.map(at);
  i && (t = K(t));
  let o = Nc(t, e, n);
  return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [l, c]) => {
    if (l.startsWith("border"))
      for (const a of i)
        s[l.slice(0, 6) + a + l.slice(6)] = c;
    else
      s[l] = c;
    return s;
  }, {})), o;
}, yo = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))", yi = (t, e, n) => t[0] && (I = e.theme(n, t[1] || t[0])) && {
  [`--tw-${n}-x`]: t[0] !== "y" && I,
  [`--tw-${n}-y`]: t[0] !== "x" && I,
  transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${I})`, yo()]
}, Uc = (t) => (e, n, r) => r[1] ? Mc(n.theme(t, e), r[1], t) : Re(t)(e, n, r), Nt = Uc("padding"), Ut = Uc("margin"), Pl = (t, { theme: e }, n) => (I = { w: "width", h: "height" }[t[0]]) && {
  [I = `${n}${at(I)}`]: e(I, K(t))
}, Ze = (t, { theme: e }, n) => {
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
  return Q = t.shift(), se(["hue", "drop"], Q) && (Q += at(t.shift())), (I = e(i ? "backdrop" + at(Q) : Q, t)) && {
    ["--tw-" + i + Q]: (Array.isArray(I) ? I : [I]).map((o) => `${Xo(Q)}(${o})`).join(" ")
  };
}, fm = {
  group: (t, { tag: e }, n) => e(X([n, ...t])),
  hidden: lt(ht, "none"),
  inline: ht,
  block: ht,
  contents: ht,
  flow: ht,
  table: (t, e, n) => se(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : ht(t, e, n),
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
        return I = e.theme("flex" + at(t[0]), K(t), t[1] || 1), I != null && {
          ["flex-" + t[0]]: "" + I
        };
    }
    return (I = e.theme("flex", t, "")) ? { flex: I } : ht(t, e, n);
  },
  grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return (I = e.theme("gridTemplate" + at(hr(t[0])), K(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : X(K(t)))) && {
          ["gridTemplate-" + hr(t[0])]: I
        };
      case "flow":
        return t.length > 1 && {
          gridAutoFlow: X(t[1] == "col" ? ["column", ...K(t, 2)] : K(t), " ")
        };
    }
    return ht(t, e, n);
  },
  auto: (t, { theme: e }) => se(["cols", "rows"], t[0]) && (I = e("gridAuto" + at(hr(t[0])), K(t), X(K(t)))) && {
    ["gridAuto-" + hr(t[0])]: I
  },
  static: On,
  fixed: On,
  absolute: On,
  relative: On,
  sticky: On,
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
  appearance: de(),
  cursor: pr(),
  float: de(),
  clear: de(),
  decoration: de("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: de(),
  "mix-blend": de("mixBlendMode"),
  top: mr,
  right: mr,
  bottom: mr,
  left: mr,
  inset: (t, { theme: e }) => (I = jr(t[0])) ? Mc(e("inset", K(t)), t[0]) : (I = e("inset", t)) && {
    top: I,
    right: I,
    bottom: I,
    left: I
  },
  underline: on,
  "line-through": on,
  "no-underline": lt(on, "none"),
  "text-underline": lt(on, "underline"),
  "text-no-underline": lt(on, "none"),
  "text-line-through": lt(on, "line-through"),
  uppercase: rn,
  lowercase: rn,
  capitalize: rn,
  "normal-case": lt(rn, "none"),
  "text-normal-case": lt(rn, "none"),
  italic: gr,
  "not-italic": lt(gr, "normal"),
  "font-italic": lt(gr, "italic"),
  "font-not-italic": lt(gr, "normal"),
  font: (t, e, n) => (I = e.theme("fontFamily", t, "")) ? { fontFamily: I } : Re("fontWeight")(t, e, n),
  items: (t) => t[0] && {
    alignItems: se(["start", "end"], t[0]) ? "flex-" + t[0] : X(t)
  },
  "justify-self": de(),
  "justify-items": de(),
  justify: wi("justifyContent"),
  content: wi("alignContent"),
  self: wi("alignSelf"),
  place: (t) => t[0] && Fc("place-" + t[0], K(t)),
  overscroll: (t) => t[0] && {
    ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0]
  },
  col: Rl("column"),
  row: Rl("row"),
  duration: Re("transitionDuration"),
  delay: Re("transitionDelay"),
  tracking: Re("letterSpacing"),
  leading: Re("lineHeight"),
  z: Re("zIndex"),
  opacity: Re(),
  ease: Re("transitionTimingFunction"),
  p: Nt,
  py: Nt,
  px: Nt,
  pt: Nt,
  pr: Nt,
  pb: Nt,
  pl: Nt,
  m: Ut,
  my: Ut,
  mx: Ut,
  mt: Ut,
  mr: Ut,
  mb: Ut,
  ml: Ut,
  w: Re("width"),
  h: Re("height"),
  min: Pl,
  max: Pl,
  fill: Re(),
  order: Re(),
  origin: pr("transformOrigin", " "),
  select: de("userSelect"),
  "pointer-events": de(),
  align: de("verticalAlign"),
  whitespace: de("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: Ct("ordinal"),
  "slashed-zero": Ct("slashed-zero"),
  "lining-nums": Ct("numeric-figure"),
  "oldstyle-nums": Ct("numeric-figure"),
  "proportional-nums": Ct("numeric-spacing"),
  "tabular-nums": Ct("numeric-spacing"),
  "diagonal-fractions": Ct("numeric-fraction"),
  "stacked-fractions": Ct("numeric-fraction"),
  overflow: (t, e, n) => se(["ellipsis", "clip"], t[0]) ? de("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : de()(t, e, n),
  transform: (t) => t[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: yo(t[0] == "gpu")
  },
  rotate: (t, { theme: e }) => (I = e("rotate", t)) && {
    "--tw-rotate": I,
    transform: [`rotate(${I})`, yo()]
  },
  scale: yi,
  translate: yi,
  skew: yi,
  gap: (t, e, n) => (I = { x: "column", y: "row" }[t[0]]) ? { [I + "Gap"]: e.theme("gap", K(t)) } : Re("gap")(t, e, n),
  stroke: (t, e, n) => (I = e.theme("stroke", t, "")) ? { stroke: I } : Re("strokeWidth")(t, e, n),
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
        return rn([], I, t[0]);
      case "opacity":
        return Un(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : {
      fontSize: r[0],
      ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1]
    } : Ar("color", "text", e("textColor", t));
  },
  bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return de("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return de("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && de("backgroundRepeat")(t);
      case "repeat":
        return se("xy", t[1]) ? de("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return Un(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && {
          ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box")
        };
      case "blend":
        return de("background-blend-mode")(K(t));
      case "gradient":
        if (t[1] == "to" && (I = jr(t[2])))
          return {
            backgroundImage: `linear-gradient(to ${X(I, " ")},var(--tw-gradient-stops))`
          };
    }
    return (I = e("backgroundPosition", t, "")) ? { backgroundPosition: I } : (I = e("backgroundSize", t, "")) ? { backgroundSize: I } : (I = e("backgroundImage", t, "")) ? { backgroundImage: I } : Ar("backgroundColor", "bg", e("backgroundColor", t));
  },
  from: (t, { theme: e }) => (I = e("gradientColorStops", t)) && {
    "--tw-gradient-from": I,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${xl(I)})`
  },
  via: (t, { theme: e }) => (I = e("gradientColorStops", t)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${I},var(--tw-gradient-to,${xl(I)})`
  },
  to: (t, { theme: e }) => (I = e("gradientColorStops", t)) && {
    "--tw-gradient-to": I
  },
  border: um,
  divide: (t, e, n) => (I = Il(t, e, n, "divideWidth", "border", "width") || Nc(t, e, n)) && {
    "&>:not([hidden])~:not([hidden])": I
  },
  space: (t, e, n) => (I = Il(t, e, n, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": I
  },
  placeholder: (t, { theme: e }, n) => (I = t[0] == "opacity" ? Un(t, e, n) : Ar("color", "placeholder", e("placeholderColor", t))) && {
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
      return (I = e("keyframes", r[0], Bt = {})) !== Bt ? (Q = n(r[0])) && {
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
        return Un(t, e, n);
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
          "--tw-ring-color": zr(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": zr(e("ringColor", t), "ring-opacity")
    };
  },
  object: (t, e, n) => se(["contain", "cover", "fill", "none", "scale-down"], X(t)) ? { objectFit: X(t) } : pr("objectPosition", " ")(t, e, n),
  list: (t, e, n) => X(t) == "item" ? ht(t, e, n) : se(["inside", "outside"], X(t)) ? { listStylePosition: t[0] } : pr("listStyleType")(t, e, n),
  rounded: (t, e, n) => am(e.theme("borderRadius", K(t), ""), t[0], "border", "radius") || Re("borderRadius")(t, e, n),
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
    return Object.keys(n).reduce((s, l) => ((Q = n[l]) && typeof Q == "string" && (s[ri(Q)] = {
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
  filter: Ze,
  blur: Ze,
  brightness: Ze,
  contrast: Ze,
  grayscale: Ze,
  "hue-rotate": Ze,
  invert: Ze,
  saturate: Ze,
  sepia: Ze,
  "drop-shadow": Ze,
  backdrop: Ze
}, dm = (t) => ({
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
}), hm = {
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
}, $l = "__twind", pm = (t) => {
  let e = self[$l];
  return e || (e = document.head.appendChild(document.createElement("style")), e.id = $l, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
}, Lc = ({
  nonce: t,
  target: e = pm(t).sheet
} = {}) => {
  const n = e.cssRules.length;
  return {
    target: e,
    insert: (r, i) => e.insertRule(r, n + i)
  };
}, gm = () => ({
  target: null,
  insert: xc
}), Zo = (t) => ({
  unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + X(n) }, i);
  },
  report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  }
}), Dl = /* @__PURE__ */ Zo((t) => console.warn(t)), mm = /* @__PURE__ */ Zo((t) => {
  throw new Error(t);
}), bm = /* @__PURE__ */ Zo(xc), gt = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`, _m = (t, e, n) => {
  let r = "";
  const i = Jg(t);
  i && (r += `${gt(i, e, n)};`);
  let o = Kg(t);
  return o & 1 && (r += `-webkit-${gt(t, e, n)};`), o & 2 && (r += `-moz-${gt(t, e, n)};`), o & 4 && (r += `-ms-${gt(t, e, n)};`), o = Xg(t, e), o & 1 && (r += `${gt(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${gt(t, `-moz-${e}`, n)};`), o & 4 && (r += `${gt(t, `-ms-${e}`, n)};`), r += gt(t, e, n), r;
}, Mn = (t, e) => {
  const n = {};
  do
    for (let r = 1; r < t; r++)
      n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
  while (++t <= e);
  return n;
}, Et = (t, e, n = 0) => {
  const r = {};
  for (; n <= t; n = n * 2 || 1)
    r[n] = n + e;
  return r;
}, He = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
  for (; r <= t; r += i)
    o[r] = r / n + e;
  return o;
}, ie = (t) => (e) => e(t), vm = {
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
    .../* @__PURE__ */ He(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ He(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ He(64, "rem", 4, 16, 4),
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
  backdropBlur: /* @__PURE__ */ ie("blur"),
  backdropBrightness: /* @__PURE__ */ ie("brightness"),
  backdropContrast: /* @__PURE__ */ ie("contrast"),
  backdropGrayscale: /* @__PURE__ */ ie("grayscale"),
  backdropHueRotate: /* @__PURE__ */ ie("hueRotate"),
  backdropInvert: /* @__PURE__ */ ie("invert"),
  backdropOpacity: /* @__PURE__ */ ie("opacity"),
  backdropSaturate: /* @__PURE__ */ ie("saturate"),
  backdropSepia: /* @__PURE__ */ ie("sepia"),
  backgroundColor: /* @__PURE__ */ ie("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ ie("opacity"),
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
    .../* @__PURE__ */ He(200, "", 100, 0, 50),
    .../* @__PURE__ */ He(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: (t) => ({
    ...t("colors"),
    DEFAULT: t("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ ie("opacity"),
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
    .../* @__PURE__ */ Et(8, "px")
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
    .../* @__PURE__ */ He(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  divideColor: /* @__PURE__ */ ie("borderColor"),
  divideOpacity: /* @__PURE__ */ ie("borderOpacity"),
  divideWidth: /* @__PURE__ */ ie("borderWidth"),
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
  gap: /* @__PURE__ */ ie("spacing"),
  gradientColorStops: /* @__PURE__ */ ie("colors"),
  height: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Mn(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Mn(2, 4),
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
    .../* @__PURE__ */ He(10, "rem", 4, 3)
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
    .../* @__PURE__ */ He(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ He(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ ie("spacing"),
  placeholderColor: /* @__PURE__ */ ie("colors"),
  placeholderOpacity: /* @__PURE__ */ ie("opacity"),
  ringColor: (t) => ({
    DEFAULT: t("colors.blue.500", "#3b82f6"),
    ...t("colors")
  }),
  ringOffsetColor: /* @__PURE__ */ ie("colors"),
  ringOffsetWidth: /* @__PURE__ */ Et(8, "px"),
  ringOpacity: (t) => ({
    DEFAULT: "0.5",
    ...t("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ Et(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ Et(2, "deg"),
    .../* @__PURE__ */ Et(12, "deg", 3),
    .../* @__PURE__ */ Et(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ He(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ He(150, "", 100, 0, 50),
    .../* @__PURE__ */ He(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ Et(2, "deg"),
    .../* @__PURE__ */ Et(12, "deg", 3)
  },
  space: /* @__PURE__ */ ie("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ He(2),
  textColor: /* @__PURE__ */ ie("colors"),
  textOpacity: /* @__PURE__ */ ie("opacity"),
  transitionDuration: (t) => ({
    DEFAULT: "150ms",
    ...t("durations")
  }),
  transitionDelay: /* @__PURE__ */ ie("durations"),
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
    ...Mn(2, 4),
    full: "100%"
  }),
  width: (t) => ({
    auto: "auto",
    ...t("spacing"),
    ...Mn(2, 6),
    ...Mn(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ He(50, "", 1, 0, 10)
  }
}, Hc = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
  const i = t[r];
  r == "DEFAULT" && (e[X(n)] = i, e[X(n, ".")] = i);
  const o = [...n, r];
  e[X(o)] = i, e[X(o, ".")] = i, i && typeof i == "object" && Hc(i, e, o);
}, e), e), wm = {
  negative: () => ({}),
  breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {})
}, ym = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && se(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (se(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e), Sm = (t) => {
  const e = /* @__PURE__ */ new Map(), n = { ...vm, ...t }, r = (o, s) => {
    const l = o && o[s], c = typeof l == "function" ? l(i, wm) : l;
    return c && s == "colors" ? Hc(c) : c;
  }, i = (o, s, l) => {
    const c = o.split(".");
    o = c[0], c.length > 1 && (l = s, s = X(K(c), "."));
    let a = e.get(o);
    if (a || (e.set(o, a = { ...r(n, o) }), Object.assign(a, r(n.extend, o))), s != null) {
      s = (Array.isArray(s) ? X(s) : s) || "DEFAULT";
      const u = ym(o, s) || a[s];
      return u == null ? l : Array.isArray(u) && !se(["fontSize", "outline", "dropShadow"], o) ? X(u, ",") : u;
    }
    return a;
  };
  return i;
}, Cm = (t, e) => (n, r) => {
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
}, Fn, Bc = /^:(group(?:(?!-focus).+?)*)-(.+)$/, jc = /^(:not)-(.+)/, zc = (t) => t[1] == "[" ? K(t) : t, Em = (t, e, { theme: n, tag: r }) => {
  const i = (o, s) => (Fn = n("screens", K(s), "")) ? { [ri(Fn)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (Fn = Bc.exec(s)) ? { [`.${Pc(r(Fn[1]))}:${Fn[2]} &`]: o } : {
    [e[K(s)] || "&" + s.replace(jc, (l, c, a) => c + "(" + zc(":" + a) + ")")]: o
  };
  return (o, s) => s.v.reduceRight(i, o);
}, Me, Vc = (t) => (((Me = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Me[1] / (Me[2] ? 15 : 1) / 10 : 0) & 31) << 22, Wc = (t) => {
  Me = 0;
  for (let e = t.length; e--; )
    Me += se("-:,", t[e]);
  return Me;
}, qc = (t) => (Wc(t) & 15) << 18, km = [
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
], Tm = (t) => 1 << (~(Me = km.indexOf(t.replace(Bc, ":$2").slice(3, 8))) ? Me : 17), Am = (t, e) => (n, r) => n | ((Me = t("screens", K(r), "")) ? 1 << 27 | Vc(ri(Me)) : r == ":dark" ? 1 << 30 : (Me = e[r] || r.replace(jc, ":$2"))[0] == "@" ? qc(Me) : Tm(r)), xm = (t) => t[0] == "-" ? 0 : Wc(t) + ((Me = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Me[1] || -!!Me[2] : 0) + 1, Si = (t, e) => e + "{" + t + "}", Im = (t, e, n) => {
  const { theme: r, tag: i } = n, o = (f, d) => "--" + i(d), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), l = (f, d, b) => (f = s(f), Array.isArray(d) ? X(d.filter(Boolean).map((g) => t(f, s(g), b)), ";") : t(f, s(d), b));
  let c;
  const a = (f, d, b, g, p) => {
    if (Array.isArray(g)) {
      g.forEach((v) => v && a(f, d, b, v, p));
      return;
    }
    let m = "", T = 0, w = 0;
    g["@apply"] && (g = Yo(Gt(lm(g["@apply"]), n), { ...g, "@apply": void 0 }, n)), Object.keys(g).forEach((v) => {
      const _ = Gt(g[v], n);
      if (Rc(v, _)) {
        if (_ !== "" && v.length > 1) {
          const y = Xo(v);
          w += 1, T = Math.max(T, xm(y)), m = (m && m + ";") + l(y, _, p);
        }
      } else if (_)
        if (v == ":global" && (v = "@global"), v[0] == "@")
          if (v[1] == "g")
            a([], "", 0, _, p);
          else if (v[1] == "f")
            a([], v, 0, _, p);
          else if (v[1] == "k") {
            const y = c.length;
            a([], "", 0, _, p);
            const x = c.splice(y, c.length - y);
            c.push({
              r: Si(X(x.map((S) => S.r), ""), v),
              p: x.reduce((S, E) => S + E.p, 0)
            });
          } else
            v[1] == "i" ? (Array.isArray(_) ? _ : [_]).forEach((y) => y && c.push({ p: 0, r: `${v} ${y};` })) : (v[2] == "c" && (v = ri(n.theme("screens", K(v, 8).trim()))), a([...f, v], d, b | Vc(v) | qc(v), _, p));
        else
          a(f, d ? d.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (y, x, S) => v.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (E, F, W) => (se(F, "&") ? F.replace(/&/g, x) : (x && x + " ") + F) + W) + S) : v, b, _, p);
    }), w && c.push({
      r: f.reduceRight(Si, Si(m, d)),
      p: b * (1 << 8) + ((Math.max(0, 15 - w) & 15) << 4 | (T || 15) & 15)
    });
  }, u = Am(r, e);
  return (f, d, b, g = 0) => (g <<= 28, c = [], a([], d ? "." + Pc(d) : "", b ? b.v.reduceRight(u, g) : g, f, b && b.i), c);
}, Rm = (t, e, n, r) => {
  let i;
  n((s = []) => i = s);
  let o;
  return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: l }) => {
    if (!o.has(s)) {
      o.add(s);
      const c = Qg(i, l);
      try {
        t.insert(s, c), i.splice(c, 0, l);
      } catch (a) {
        /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: a }, r);
      }
    }
  };
}, Ci = (t, e, n, r = e) => t === !1 ? n : t === !0 ? r : t || e, Pm = (t) => (typeof t == "string" ? { t: mm, a: Dl, i: bm }[t[1]] : t) || Dl, $m = { _: { value: "", writable: !0 } }, Dm = (t = {}) => {
  const e = Sm(t.theme), n = Pm(t.mode), r = Ci(t.hash, !1, !1, _i), i = t.important;
  let o = { v: [] }, s = 0;
  const l = [], c = {
    tw: (...S) => y(S),
    theme: (S, E, F) => {
      var W;
      const ee = (W = e(S, E, F)) != null ? W : n.unknown(S, E == null || Array.isArray(E) ? E : E.split("."), F != null, c);
      return o.n && ee && se("rg", (typeof ee)[5]) ? `calc(${ee} * -1)` : ee;
    },
    tag: (S) => r ? r(S) : S,
    css: (S) => {
      s++;
      const E = l.length;
      try {
        (typeof S == "string" ? vo([S]) : S).forEach(_);
        const F = Object.create(null, $m);
        for (let W = E; W < l.length; W++) {
          const ee = l[W];
          if (ee)
            switch (typeof ee) {
              case "object":
                Yo(F, ee, c);
                break;
              case "string":
                F._ += (F._ && " ") + ee;
            }
        }
        return F;
      } finally {
        l.length = E, s--;
      }
    }
  }, a = Cm({ ...fm, ...t.plugins }, c), u = (S) => {
    const E = o;
    o = S;
    try {
      return Gt(a(S), c);
    } finally {
      o = E;
    }
  }, f = { ...hm, ...t.variants }, d = Em(t.darkMode || "media", f, c), b = Im(Ci(t.prefix, _m, gt), f, c), g = t.sheet || (typeof window > "u" ? gm() : Lc(t)), { init: p = (S) => S() } = g, m = Rm(g, n, p, c);
  let T;
  p((S = /* @__PURE__ */ new Map()) => T = S);
  const w = /* @__PURE__ */ new WeakMap(), v = (S, E) => S == "_" ? void 0 : typeof E == "function" ? JSON.stringify(Gt(E, c), v) : E, _ = (S) => {
    !s && o.v.length && (S = { ...S, v: [...o.v, ...S.v], $: "" }), S.$ || (S.$ = Al(S, w.get(S.d)));
    let E = s ? null : T.get(S.$);
    if (E == null) {
      let F = u(S);
      if (S.$ || (S.$ = _i(JSON.stringify(F, v)), w.set(S.d, S.$), S.$ = Al(S, S.$)), F && typeof F == "object")
        if (S.v = S.v.map(zc), i && (S.i = i), F = d(F, S), s)
          l.push(F);
        else {
          const W = typeof S.d == "function" ? typeof F._ == "string" ? 1 : 3 : 2;
          E = r || typeof S.d == "function" ? (r || _i)(W + S.$) : S.$, b(F, E, S, W).forEach(m), F._ && (E += " " + F._);
        }
      else
        typeof F == "string" ? E = F : (E = S.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: E }, c)), s && typeof S.d != "function" && l.push(E);
      s || (T.set(S.$, E), Ic(T, 3e4));
    }
    return E;
  }, y = (S) => X(vo(S).map(_).filter(Boolean), " "), x = Ci(t.preflight, Yg, !1);
  if (x) {
    const S = dm(e), E = b(typeof x == "function" ? Gt(x(S, c), c) || S : { ...S, ...x });
    p((F = (E.forEach(m), !0)) => F);
  }
  return {
    init: () => n.report({ id: "LATE_SETUP_CALL" }, c),
    process: y
  };
}, Gc = (t) => {
  let e = (o) => (n(), e(o)), n = (o) => {
    ({ process: e, init: n } = Dm(o));
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
}, { tw: Ye, setup: Om } = /* @__PURE__ */ Gc();
function Mm(t) {
  let e, n, r, i;
  const o = (
    /*#slots*/
    t[14].default
  ), s = Ge(
    o,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = D("div"), n = D("div"), s && s.c(), fo(n, "display", "none"), k(n, "class", r = Ye` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      t[0]}`), k(e, "class", "popup-element-wrapper"), fo(e, "position", "absolute");
    },
    m(l, c) {
      M(l, e, c), P(e, n), s && s.m(n, null), t[15](n), t[16](e), i = !0;
    },
    p(l, [c]) {
      s && s.p && (!i || c & /*$$scope*/
      8192) && Ke(
        s,
        o,
        l,
        /*$$scope*/
        l[13],
        i ? Je(
          o,
          /*$$scope*/
          l[13],
          c,
          null
        ) : Xe(
          /*$$scope*/
          l[13]
        ),
        null
      ), (!i || c & /*popupClass*/
      1 && r !== (r = Ye` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${/*popupClass*/
      l[0]}`)) && k(n, "class", r);
    },
    i(l) {
      i || (R(s, l), i = !0);
    },
    o(l) {
      $(s, l), i = !1;
    },
    d(l) {
      l && O(e), s && s.d(l), t[15](null), t[16](null);
    }
  };
}
function Fm(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = !0 } = e, { closeOnEscape: s = !0 } = e, { sizeToAnchor: l = !1 } = e, { anchorElement: c = null } = e, { position: a = null } = e, { popupClass: u = "" } = e, { preferedVerticalAlignment: f = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: b = { x: 0, y: 0 } } = e, g = Ne("PopupContainerService", new Hr(document.body)), p, m, T;
  function w() {
    const S = {
      backdrop: !1,
      closeOnClickOutside: o,
      closeOnEscape: s,
      positioning: c ? "anchor" : "custom",
      anchorElement: c,
      customPosition: l ? b : a,
      anchorHorizontal: d,
      anchorVertical: f
    };
    document.body.appendChild(p), n(1, p.style.display = "block", p), console.log(p.getBoundingClientRect(), p);
    const E = c == null ? void 0 : c.offsetWidth, F = p.offsetWidth;
    E && l && F < E && (console.log("setting width"), n(1, p.style.width = `${E}px`, p)), n(1, p.style.position = "static", p), m = g.openPopup("popup-container", p, S), m.afterClosed.then(() => {
      _(), T.appendChild(p), console.log("closing popup", p.getBoundingClientRect());
    });
  }
  function v() {
    m == null || m.close();
  }
  function _() {
    n(1, p.style.display = "none", p), n(1, p.style.position = "absolute", p), n(1, p.style.width = "auto", p);
  }
  function y(S) {
    be[S ? "unshift" : "push"](() => {
      p = S, n(1, p);
    });
  }
  function x(S) {
    be[S ? "unshift" : "push"](() => {
      T = S, n(2, T);
    });
  }
  return t.$$set = (S) => {
    "closeOnClick" in S && n(3, o = S.closeOnClick), "closeOnEscape" in S && n(4, s = S.closeOnEscape), "sizeToAnchor" in S && n(5, l = S.sizeToAnchor), "anchorElement" in S && n(6, c = S.anchorElement), "position" in S && n(7, a = S.position), "popupClass" in S && n(0, u = S.popupClass), "preferedVerticalAlignment" in S && n(8, f = S.preferedVerticalAlignment), "preferedHorizontalAlignment" in S && n(9, d = S.preferedHorizontalAlignment), "positionOffset" in S && n(10, b = S.positionOffset), "$$scope" in S && n(13, i = S.$$scope);
  }, [
    u,
    p,
    T,
    o,
    s,
    l,
    c,
    a,
    f,
    d,
    b,
    w,
    v,
    i,
    r,
    y,
    x
  ];
}
class Jc extends me {
  constructor(e) {
    super(), ge(this, e, Fm, Mm, he, {
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
function Nm(t) {
  Qt(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
}
function Ol(t) {
  let e;
  return {
    c() {
      e = D("div"), k(e, "class", ue(Ye`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
    },
    m(n, r) {
      M(n, e, r);
    },
    p: Y,
    d(n) {
      n && O(e);
    }
  };
}
function Um(t) {
  let e, n, r, i;
  function o(l) {
    t[7](l);
  }
  let s = { tw: Ye, readonly: !0 };
  return (
    /*isSelected*/
    t[0] !== void 0 && (s.checked = /*isSelected*/
    t[0]), n = new ir({ props: s }), be.push(() => hn(n, "checked", o)), {
      c() {
        e = D("div"), G(n.$$.fragment), k(e, "class", ue(Ye`p-1`) + " svelte-oysah1");
      },
      m(l, c) {
        M(l, e, c), z(n, e, null), i = !0;
      },
      p(l, c) {
        const a = {};
        !r && c & /*isSelected*/
        1 && (r = !0, a.checked = /*isSelected*/
        l[0], dn(() => r = !1)), n.$set(a);
      },
      i(l) {
        i || (R(n.$$.fragment, l), i = !0);
      },
      o(l) {
        $(n.$$.fragment, l), i = !1;
      },
      d(l) {
        l && O(e), V(n);
      }
    }
  );
}
function Lm(t) {
  let e, n, r, i, o, s, l, c, a = (
    /*isSelected*/
    t[0] && !/*multiple*/
    t[2] && Ol()
  ), u = (
    /*multiple*/
    t[2] && Um(t)
  );
  const f = (
    /*#slots*/
    t[6].default
  ), d = Ge(
    f,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = D("div"), a && a.c(), n = H(), u && u.c(), r = H(), i = D("span"), d && d.c(), k(e, "class", o = ue(Ye`flex hover:(${br}) items-center ${/*multiple*/
      t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      t[0] && !/*multiple*/
      t[2] ? br : ""}`) + " svelte-oysah1");
    },
    m(b, g) {
      M(b, e, g), a && a.m(e, null), P(e, n), u && u.m(e, null), P(e, r), P(e, i), d && d.m(i, null), t[8](i), s = !0, l || (c = ae(
        e,
        "click",
        /*onClickOption*/
        t[3]
      ), l = !0);
    },
    p(b, [g]) {
      /*isSelected*/
      b[0] && !/*multiple*/
      b[2] ? a ? a.p(b, g) : (a = Ol(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*multiple*/
      b[2] && u.p(b, g), d && d.p && (!s || g & /*$$scope*/
      32) && Ke(
        d,
        f,
        b,
        /*$$scope*/
        b[5],
        s ? Je(
          f,
          /*$$scope*/
          b[5],
          g,
          null
        ) : Xe(
          /*$$scope*/
          b[5]
        ),
        null
      ), (!s || g & /*isSelected*/
      1 && o !== (o = ue(Ye`flex hover:(${br}) items-center ${/*multiple*/
      b[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${/*isSelected*/
      b[0] && !/*multiple*/
      b[2] ? br : ""}`) + " svelte-oysah1")) && k(e, "class", o);
    },
    i(b) {
      s || (R(u), R(d, b), s = !0);
    },
    o(b) {
      $(u), $(d, b), s = !1;
    },
    d(b) {
      b && O(e), a && a.d(), u && u.d(), d && d.d(b), t[8](null), l = !1, c();
    }
  };
}
let br = "bg-[rgba(0,0,0,0.1)] shadow-md";
function Hm(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = !1, l = null, c = null, a, u;
  const f = Be("audako:select:multiple"), d = Be("audako:select:close"), b = Be("audako:select:value"), g = Be("audako:select:value:changed"), p = Be("audako:select:displayValue");
  Ec(() => {
    var _;
    u = (_ = a.innerText) == null ? void 0 : _.trim(), p.subscribe((y) => {
      c = y;
    }), b.subscribe((y) => {
      l = y, f ? n(0, s = y == null ? void 0 : y.includes(o)) : n(0, s = y === o), T();
    });
  });
  function m(_) {
    console.log("clicked option"), _.preventDefault(), _.stopPropagation();
    let y = null;
    f ? s ? y = l.filter((x) => x !== o) : y = Array.isArray(l) ? [...l, o] : [o] : (y = o, d()), b.set(y), g.next(y);
  }
  function T() {
    if (f) {
      const _ = c;
      s && !_.includes(u) ? p.set([..._, u]) : !s && _.includes(u) && p.set(_.filter((y) => y !== u));
    } else
      s && p.set(u);
  }
  function w(_) {
    s = _, n(0, s);
  }
  function v(_) {
    be[_ ? "unshift" : "push"](() => {
      a = _, n(1, a);
    });
  }
  return t.$$set = (_) => {
    "value" in _ && n(4, o = _.value), "$$scope" in _ && n(5, i = _.$$scope);
  }, [
    s,
    a,
    f,
    m,
    o,
    i,
    r,
    w,
    v
  ];
}
class Kc extends me {
  constructor(e) {
    super(), ge(this, e, Hm, Lm, he, { value: 4 }, Nm);
  }
}
function Ml(t, e, n) {
  const r = t.slice();
  return r[26] = e[n], r;
}
const Bm = (t) => ({}), Fl = (t) => ({});
function jm(t) {
  let e = (
    /*option*/
    t[26].label + ""
  ), n, r;
  return {
    c() {
      n = j(e), r = H();
    },
    m(i, o) {
      M(i, n, o), M(i, r, o);
    },
    p(i, o) {
      o & /*options*/
      16 && e !== (e = /*option*/
      i[26].label + "") && Ee(n, e);
    },
    d(i) {
      i && O(n), i && O(r);
    }
  };
}
function Nl(t) {
  let e, n;
  return e = new Kc({
    props: {
      value: (
        /*option*/
        t[26].value
      ),
      $$slots: { default: [jm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*options*/
      16 && (o.value = /*option*/
      r[26].value), i & /*$$scope, options*/
      131088 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function zm(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[13].default
  ), o = Ge(
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
    l[a] = Nl(Ml(t, s, a));
  const c = (a) => $(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      o && o.c(), e = H();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = ni();
    },
    m(a, u) {
      o && o.m(a, u), M(a, e, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(a, u);
      M(a, n, u), r = !0;
    },
    p(a, u) {
      if (o && o.p && (!r || u & /*$$scope*/
      131072) && Ke(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        r ? Je(
          i,
          /*$$scope*/
          a[17],
          u,
          null
        ) : Xe(
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
          const d = Ml(a, s, f);
          l[f] ? (l[f].p(d, u), R(l[f], 1)) : (l[f] = Nl(d), l[f].c(), R(l[f], 1), l[f].m(n.parentNode, n));
        }
        for (ve(), f = s.length; f < l.length; f += 1)
          c(f);
        we();
      }
    },
    i(a) {
      if (!r) {
        R(o, a);
        for (let u = 0; u < s.length; u += 1)
          R(l[u]);
        r = !0;
      }
    },
    o(a) {
      $(o, a), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        $(l[u]);
      r = !1;
    },
    d(a) {
      o && o.d(a), a && O(e), Dt(l, a), a && O(n);
    }
  };
}
function Vm(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, b, g;
  const p = (
    /*#slots*/
    t[13].prefix
  ), m = Ge(
    p,
    t,
    /*$$scope*/
    t[17],
    Fl
  );
  let T = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: (
      /*textfield*/
      t[8]
    ),
    $$slots: { default: [zm] },
    $$scope: { ctx: t }
  };
  return f = new Jc({ props: T }), t[16](f), {
    c() {
      e = D("div"), m && m.c(), n = H(), r = D("input"), o = H(), s = D("div"), l = j("arrow_drop_down"), u = H(), G(f.$$.fragment), r.disabled = /*disabled*/
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
    m(w, v) {
      M(w, e, v), m && m.m(e, null), P(e, n), P(e, r), Nr(
        r,
        /*displayedValue*/
        t[7]
      ), t[15](r), P(e, o), P(e, s), P(s, l), M(w, u, v), z(f, w, v), d = !0, b || (g = [
        ae(
          r,
          "input",
          /*input_input_handler*/
          t[14]
        ),
        ae(
          e,
          "click",
          /*openMenu*/
          t[10]
        )
      ], b = !0);
    },
    p(w, [v]) {
      m && m.p && (!d || v & /*$$scope*/
      131072) && Ke(
        m,
        p,
        w,
        /*$$scope*/
        w[17],
        d ? Je(
          p,
          /*$$scope*/
          w[17],
          v,
          Bm
        ) : Xe(
          /*$$scope*/
          w[17]
        ),
        Fl
      ), (!d || v & /*disabled*/
      64) && (r.disabled = /*disabled*/
      w[6]), (!d || v & /*placeholder*/
      1) && k(
        r,
        "placeholder",
        /*placeholder*/
        w[0]
      ), (!d || v & /*tw, textfield$class*/
      34 && i !== (i = /*tw*/
      w[5]`w-full outline-none cursor-pointer ${/*textfield$class*/
      w[1]}`)) && k(r, "class", i), v & /*displayedValue*/
      128 && r.value !== /*displayedValue*/
      w[7] && Nr(
        r,
        /*displayedValue*/
        w[7]
      ), (!d || v & /*tw, suffixIcon$class*/
      40 && c !== (c = /*tw*/
      w[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${/*suffixIcon$class*/
      w[3]} select-none`)) && k(s, "class", c), (!d || v & /*tw, container$class*/
      36 && a !== (a = /*tw*/
      w[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${/*container$class*/
      w[2]}`)) && k(e, "class", a);
      const _ = {};
      v & /*textfield*/
      256 && (_.anchorElement = /*textfield*/
      w[8]), v & /*$$scope, options*/
      131088 && (_.$$scope = { dirty: v, ctx: w }), f.$set(_);
    },
    i(w) {
      d || (R(m, w), R(f.$$.fragment, w), d = !0);
    },
    o(w) {
      $(m, w), $(f.$$.fragment, w), d = !1;
    },
    d(w) {
      w && O(e), m && m.d(w), t[15](null), w && O(u), t[16](null), V(f, w), b = !1, wt(g);
    }
  };
}
function Wm(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = !1 } = e, { placeholder: l = null } = e, { textfield$class: c = "" } = e, { container$class: a = "" } = e, { suffixIcon$class: u = "" } = e, { options: f = [] } = e, { tw: d = Ye } = e, { disabled: b = !1 } = e, g = "", p, m, T = Qe(), w = Lr(o);
  const v = w.subscribe((N) => {
    n(11, o = N);
  });
  let _ = new De();
  const y = _.subscribe((N) => {
    T("valueChanged", N);
  });
  let x = Lr(s ? [] : ""), S = x.subscribe((N) => {
    F(N);
  });
  function E(N) {
    N && (N.preventDefault(), N.stopPropagation()), !b && (m == null || m.openPopup());
  }
  function F(N) {
    if (N == null || N.length === 0) {
      n(7, g = null);
      return;
    }
    Array.isArray(N) ? n(7, g = N.join(", ")) : n(7, g = N);
  }
  kt("audako:select:multiple", s), kt("audako:select:value", w), kt("audako:select:value:changed", _), kt("audako:select:displayValue", x), kt("audako:select:close", () => m.closePopup()), Mt(() => {
    v(), y.unsubscribe(), S();
  });
  function W() {
    g = this.value, n(7, g);
  }
  function ee(N) {
    be[N ? "unshift" : "push"](() => {
      p = N, n(8, p);
    });
  }
  function ke(N) {
    be[N ? "unshift" : "push"](() => {
      m = N, n(9, m);
    });
  }
  return t.$$set = (N) => {
    "value" in N && n(11, o = N.value), "multiple" in N && n(12, s = N.multiple), "placeholder" in N && n(0, l = N.placeholder), "textfield$class" in N && n(1, c = N.textfield$class), "container$class" in N && n(2, a = N.container$class), "suffixIcon$class" in N && n(3, u = N.suffixIcon$class), "options" in N && n(4, f = N.options), "tw" in N && n(5, d = N.tw), "disabled" in N && n(6, b = N.disabled), "$$scope" in N && n(17, i = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    32 && kt("tw", d);
  }, [
    l,
    c,
    a,
    u,
    f,
    d,
    b,
    g,
    p,
    m,
    E,
    o,
    s,
    r,
    W,
    ee,
    ke,
    i
  ];
}
class Xc extends me {
  constructor(e) {
    super(), ge(this, e, Wm, Vm, he, {
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
function Ul(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function qm(t) {
  let e = (
    /*option*/
    t[18] + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i & /*pageSizeOptions*/
      8 && e !== (e = /*option*/
      r[18] + "") && Ee(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function Ll(t) {
  let e, n;
  return e = new Kc({
    props: {
      value: (
        /*option*/
        t[18]
      ),
      $$slots: { default: [qm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*pageSizeOptions*/
      8 && (o.value = /*option*/
      r[18]), i & /*$$scope, pageSizeOptions*/
      2097160 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function Gm(t) {
  let e, n, r = (
    /*pageSizeOptions*/
    t[3]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ll(Ul(t, r, s));
  const o = (s) => $(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      e = ni();
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
          const a = Ul(s, r, c);
          i[c] ? (i[c].p(a, l), R(i[c], 1)) : (i[c] = Ll(a), i[c].c(), R(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (ve(), c = r.length; c < i.length; c += 1)
          o(c);
        we();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          R(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        $(i[l]);
      n = !1;
    },
    d(s) {
      Dt(i, s), s && O(e);
    }
  };
}
function Jm(t) {
  let e;
  return {
    c() {
      e = j("first_page");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Km(t) {
  let e;
  return {
    c() {
      e = j("navigate_before");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Xm(t) {
  let e;
  return {
    c() {
      e = j("navigate_next");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Ym(t) {
  let e;
  return {
    c() {
      e = j("last_page");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Qm(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*pageIndex*/
    t[1] * /*pageSize*/
    t[0] + 1 + ""
  ), f, d, b = (
    /*pageIndex*/
    (t[1] + 1) * /*pageSize*/
    t[0] + ""
  ), g, p, m, T, w, v, _, y, x, S, E, F, W, ee;
  function ke(B) {
    t[10](B);
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
    $$slots: { default: [Gm] },
    $$scope: { ctx: t }
  };
  return (
    /*pageSize*/
    t[0] !== void 0 && (N.value = /*pageSize*/
    t[0]), s = new Xc({ props: N }), be.push(() => hn(s, "value", ke)), s.$on(
      "valueChanged",
      /*valueChanged_handler*/
      t[11]
    ), _ = new xt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Jm] },
        $$scope: { ctx: t }
      }
    }), _.$on(
      "click",
      /*click_handler*/
      t[12]
    ), x = new xt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === 0
        ),
        $$slots: { default: [Km] },
        $$scope: { ctx: t }
      }
    }), x.$on(
      "click",
      /*click_handler_1*/
      t[13]
    ), E = new xt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Xm] },
        $$scope: { ctx: t }
      }
    }), E.$on(
      "click",
      /*click_handler_2*/
      t[14]
    ), W = new xt({
      props: {
        disabled: (
          /*pageIndex*/
          t[1] === /*lastPageIndex*/
          t[4]
        ),
        $$slots: { default: [Ym] },
        $$scope: { ctx: t }
      }
    }), W.$on(
      "click",
      /*click_handler_3*/
      t[15]
    ), {
      c() {
        e = D("div"), n = D("div"), r = j("Items per page:"), i = H(), o = D("div"), G(s.$$.fragment), c = H(), a = D("div"), f = j(u), d = j(" - "), g = j(b), p = H(), m = D("div"), T = j("of "), w = j(
          /*totalCount*/
          t[2]
        ), v = H(), G(_.$$.fragment), y = H(), G(x.$$.fragment), S = H(), G(E.$$.fragment), F = H(), G(W.$$.fragment), k(
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
          m,
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
      m(B, te) {
        M(B, e, te), P(e, n), P(n, r), P(e, i), P(e, o), z(s, o, null), P(e, c), P(e, a), P(a, f), P(a, d), P(a, g), P(e, p), P(e, m), P(m, T), P(m, w), P(e, v), z(_, e, null), P(e, y), z(x, e, null), P(e, S), z(E, e, null), P(e, F), z(W, e, null), ee = !0;
      },
      p(B, [te]) {
        const Ie = {};
        te & /*$$scope, pageSizeOptions*/
        2097160 && (Ie.$$scope = { dirty: te, ctx: B }), !l && te & /*pageSize*/
        1 && (l = !0, Ie.value = /*pageSize*/
        B[0], dn(() => l = !1)), s.$set(Ie), (!ee || te & /*pageIndex, pageSize*/
        3) && u !== (u = /*pageIndex*/
        B[1] * /*pageSize*/
        B[0] + 1 + "") && Ee(f, u), (!ee || te & /*pageIndex, pageSize*/
        3) && b !== (b = /*pageIndex*/
        (B[1] + 1) * /*pageSize*/
        B[0] + "") && Ee(g, b), (!ee || te & /*totalCount*/
        4) && Ee(
          w,
          /*totalCount*/
          B[2]
        );
        const yt = {};
        te & /*pageIndex*/
        2 && (yt.disabled = /*pageIndex*/
        B[1] === 0), te & /*$$scope*/
        2097152 && (yt.$$scope = { dirty: te, ctx: B }), _.$set(yt);
        const U = {};
        te & /*pageIndex*/
        2 && (U.disabled = /*pageIndex*/
        B[1] === 0), te & /*$$scope*/
        2097152 && (U.$$scope = { dirty: te, ctx: B }), x.$set(U);
        const J = {};
        te & /*pageIndex, lastPageIndex*/
        18 && (J.disabled = /*pageIndex*/
        B[1] === /*lastPageIndex*/
        B[4]), te & /*$$scope*/
        2097152 && (J.$$scope = { dirty: te, ctx: B }), E.$set(J);
        const it = {};
        te & /*pageIndex, lastPageIndex*/
        18 && (it.disabled = /*pageIndex*/
        B[1] === /*lastPageIndex*/
        B[4]), te & /*$$scope*/
        2097152 && (it.$$scope = { dirty: te, ctx: B }), W.$set(it);
      },
      i(B) {
        ee || (R(s.$$.fragment, B), R(_.$$.fragment, B), R(x.$$.fragment, B), R(E.$$.fragment, B), R(W.$$.fragment, B), ee = !0);
      },
      o(B) {
        $(s.$$.fragment, B), $(_.$$.fragment, B), $(x.$$.fragment, B), $(E.$$.fragment, B), $(W.$$.fragment, B), ee = !1;
      },
      d(B) {
        B && O(e), V(s), V(_), V(x), V(E), V(W);
      }
    }
  );
}
function Hl(t, e) {
  return Math.max(Math.ceil(e / t) - 1, 0);
}
function Zm(t, e, n) {
  let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Be("tw"), l, { pageSizeOptions: c = [10, 20, 50, 100] } = e, a = Qe();
  function u(y) {
    n(1, r = r + y), g();
  }
  function f() {
    n(1, r = 0), g();
  }
  function d() {
    n(1, r = l), g();
  }
  function b(y) {
    console.log("changePageSize", y), n(0, i = y), n(4, l = Hl(i, o)), n(1, r = Math.min(r, l)), g();
  }
  function g() {
    a("changePage", { pageIndex: r, pageSize: i });
  }
  function p(y) {
    i = y, n(0, i);
  }
  const m = (y) => b(y.detail), T = () => f(), w = () => u(-1), v = () => u(1), _ = () => d();
  return t.$$set = (y) => {
    "pageIndex" in y && n(1, r = y.pageIndex), "pageSize" in y && n(0, i = y.pageSize), "totalCount" in y && n(2, o = y.totalCount), "pageSizeOptions" in y && n(3, c = y.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & /*pageSize, totalCount*/
    5 && n(4, l = Hl(i, o)), t.$$.dirty & /*pageSize*/
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
    b,
    p,
    m,
    T,
    w,
    v,
    _
  ];
}
class e0 extends me {
  constructor(e) {
    super(), ge(this, e, Zm, Qm, he, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function t0(t) {
  Qt(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Bl(t, e, n) {
  const r = t.slice();
  return r[33] = e[n], r;
}
function jl(t) {
  let e, n;
  return e = new mo({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0 cursor-default`
      ),
      id: "Name",
      $$slots: { default: [n0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*masterToggleState*/
      32 | i[1] & /*$$scope*/
      64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function n0(t) {
  let e, n;
  return e = new ir({
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
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function r0(t) {
  let e;
  return {
    c() {
      e = j("Name");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function i0(t) {
  let e;
  return {
    c() {
      e = j("Group");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function o0(t) {
  let e, n, r, i, o, s = (
    /*selectMultiple*/
    t[0] && jl(t)
  );
  return n = new mo({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2] cursor-default"`
      ),
      id: "Name",
      $$slots: { default: [r0] },
      $$scope: { ctx: t }
    }
  }), i = new mo({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1 curstor-default`
      ),
      id: "Name",
      $$slots: { default: [i0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = H(), G(n.$$.fragment), r = H(), G(i.$$.fragment);
    },
    m(l, c) {
      s && s.m(l, c), M(l, e, c), z(n, l, c), M(l, r, c), z(i, l, c), o = !0;
    },
    p(l, c) {
      /*selectMultiple*/
      l[0] ? s ? (s.p(l, c), c[0] & /*selectMultiple*/
      1 && R(s, 1)) : (s = jl(l), s.c(), R(s, 1), s.m(e.parentNode, e)) : s && (ve(), $(s, 1, 1, () => {
        s = null;
      }), we());
      const a = {};
      c[1] & /*$$scope*/
      64 && (a.$$scope = { dirty: c, ctx: l }), n.$set(a);
      const u = {};
      c[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: c, ctx: l }), i.$set(u);
    },
    i(l) {
      o || (R(s), R(n.$$.fragment, l), R(i.$$.fragment, l), o = !0);
    },
    o(l) {
      $(s), $(n.$$.fragment, l), $(i.$$.fragment, l), o = !1;
    },
    d(l) {
      s && s.d(l), l && O(e), V(n, l), l && O(r), V(i, l);
    }
  };
}
function s0(t) {
  let e;
  return {
    c() {
      e = D("div"), k(e, "class", ue(
        /*tw*/
        t[9]`w-full h-[3px]`
      ) + " svelte-15xwzh7");
    },
    m(n, r) {
      M(n, e, r);
    },
    p: Y,
    d(n) {
      n && O(e);
    }
  };
}
function l0(t) {
  let e, n;
  return {
    c() {
      e = D("div"), n = D("div"), k(n, "class", ue(
        /*tw*/
        t[9]`progress-bar-value-animation w-full h-full bg-blue-600 `
      ) + " svelte-15xwzh7"), k(e, "class", ue(
        /*tw*/
        t[9]`w-full h-[3px] overflow-hidden bg-blue-200`
      ) + " svelte-15xwzh7");
    },
    m(r, i) {
      M(r, e, i), P(e, n);
    },
    p: Y,
    d(r) {
      r && O(e);
    }
  };
}
function zl(t) {
  let e, n;
  return e = new bo({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[50px] flex-grow-0`
      ),
      $$slots: { default: [a0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*selectedEntitiesInPageLookup, entities*/
      24 | i[1] & /*$$scope*/
      64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function a0(t) {
  let e, n;
  return e = new ir({
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
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function c0(t) {
  var i;
  let e, n = (
    /*entity*/
    ((i = t[33].Name) == null ? void 0 : i.Value) + ""
  ), r;
  return {
    c() {
      e = D("div"), r = j(n), k(e, "class", ue(
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
      ((l = o[33].Name) == null ? void 0 : l.Value) + "") && Ee(r, n);
    },
    d(o) {
      o && O(e);
    }
  };
}
function u0(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function f0(t) {
  let e = (
    /*name*/
    (t[36] ?? "") + ""
  ), n;
  return {
    c() {
      n = j(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i[0] & /*entities*/
      8 && e !== (e = /*name*/
      (r[36] ?? "") + "") && Ee(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function d0(t) {
  return { c: Y, m: Y, p: Y, d: Y };
}
function h0(t) {
  let e, n, r = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: d0,
    then: f0,
    catch: u0,
    value: 36
  };
  return Ur(n = /*nameService*/
  t[8].resolveName(
    L.Group,
    /*entity*/
    t[33].GroupId
  ), r), {
    c() {
      e = D("span"), r.block.c(), k(e, "class", ue(
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
        L.Group,
        /*entity*/
        t[33].GroupId
      )) && Ur(n, r) || kc(r, t, o);
    },
    d(i) {
      i && O(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function p0(t) {
  let e, n, r, i, o, s, l = (
    /*selectMultiple*/
    t[0] && zl(t)
  );
  return n = new bo({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-[2]`
      ),
      $$slots: { default: [c0] },
      $$scope: { ctx: t }
    }
  }), i = new bo({
    props: {
      container$class: (
        /*tw*/
        t[9]`flex-1`
      ),
      $$slots: { default: [h0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      l && l.c(), e = H(), G(n.$$.fragment), r = H(), G(i.$$.fragment), o = H();
    },
    m(c, a) {
      l && l.m(c, a), M(c, e, a), z(n, c, a), M(c, r, a), z(i, c, a), M(c, o, a), s = !0;
    },
    p(c, a) {
      /*selectMultiple*/
      c[0] ? l ? (l.p(c, a), a[0] & /*selectMultiple*/
      1 && R(l, 1)) : (l = zl(c), l.c(), R(l, 1), l.m(e.parentNode, e)) : l && (ve(), $(l, 1, 1, () => {
        l = null;
      }), we());
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
      s || (R(l), R(n.$$.fragment, c), R(i.$$.fragment, c), s = !0);
    },
    o(c) {
      $(l), $(n.$$.fragment, c), $(i.$$.fragment, c), s = !1;
    },
    d(c) {
      l && l.d(c), c && O(e), V(n, c), c && O(r), V(i, c), c && O(o);
    }
  };
}
function Vl(t) {
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
  return e = new Ng({
    props: {
      flexrow$class: (
        /*tw*/
        t[9]`cursor-pointer hover:bg-gray-100`
      ),
      $$slots: { default: [p0] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", r), {
    c() {
      G(e.$$.fragment);
    },
    m(i, o) {
      z(e, i, o), n = !0;
    },
    p(i, o) {
      t = i;
      const s = {};
      o[0] & /*entities, selectedEntitiesInPageLookup, selectMultiple*/
      25 | o[1] & /*$$scope*/
      64 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      $(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function g0(t) {
  let e, n, r, i, o;
  e = new Rg({
    props: {
      $$slots: { default: [o0] },
      $$scope: { ctx: t }
    }
  });
  function s(d, b) {
    return (
      /*loading*/
      d[7] ? l0 : s0
    );
  }
  let l = s(t), c = l(t), a = (
    /*entities*/
    t[3]
  ), u = [];
  for (let d = 0; d < a.length; d += 1)
    u[d] = Vl(Bl(t, a, d));
  const f = (d) => $(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      G(e.$$.fragment), n = H(), c.c(), r = H();
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      i = ni();
    },
    m(d, b) {
      z(e, d, b), M(d, n, b), c.m(d, b), M(d, r, b);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(d, b);
      M(d, i, b), o = !0;
    },
    p(d, b) {
      const g = {};
      if (b[0] & /*masterToggleState, selectMultiple*/
      33 | b[1] & /*$$scope*/
      64 && (g.$$scope = { dirty: b, ctx: d }), e.$set(g), l === (l = s(d)) && c ? c.p(d, b) : (c.d(1), c = l(d), c && (c.c(), c.m(r.parentNode, r))), b[0] & /*tw, onEntitySelected, entities, nameService, selectedEntitiesInPageLookup, selectMultiple*/
      1817) {
        a = /*entities*/
        d[3];
        let p;
        for (p = 0; p < a.length; p += 1) {
          const m = Bl(d, a, p);
          u[p] ? (u[p].p(m, b), R(u[p], 1)) : (u[p] = Vl(m), u[p].c(), R(u[p], 1), u[p].m(i.parentNode, i));
        }
        for (ve(), p = a.length; p < u.length; p += 1)
          f(p);
        we();
      }
    },
    i(d) {
      if (!o) {
        R(e.$$.fragment, d);
        for (let b = 0; b < a.length; b += 1)
          R(u[b]);
        o = !0;
      }
    },
    o(d) {
      $(e.$$.fragment, d), u = u.filter(Boolean);
      for (let b = 0; b < u.length; b += 1)
        $(u[b]);
      o = !1;
    },
    d(d) {
      V(e, d), d && O(n), c.d(d), d && O(r), Dt(u, d), d && O(i);
    }
  };
}
function m0(t) {
  let e, n;
  return e = new e0({
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
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function b0(t) {
  let e, n, r;
  return n = new Tg({
    props: {
      $$slots: {
        pagination: [m0],
        default: [g0]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = D("div"), G(n.$$.fragment), k(e, "class", ue(
        /*tw*/
        t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`
      ) + " svelte-15xwzh7");
    },
    m(i, o) {
      M(i, e, o), z(n, e, null), r = !0;
    },
    p(i, o) {
      const s = {};
      o[0] & /*pageIndex, pageSize, totalCount, entities, selectedEntitiesInPageLookup, selectMultiple, loading, masterToggleState*/
      255 | o[1] & /*$$scope*/
      64 && (s.$$scope = { dirty: o, ctx: i }), n.$set(s);
    },
    i(i) {
      r || (R(n.$$.fragment, i), r = !0);
    },
    o(i) {
      $(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && O(e), V(n);
    }
  };
}
function _0(t, e, n) {
  let r = Ne(Xt), i = Ne(Vn), { entityType: o } = e, { selectMultiple: s = !1 } = e, { additionalFilter: l = null } = e, c = Be("tw"), a = [], u = new De(), f = [], d = {}, b = "unchecked", g, p, m, T = !1, w = 0, v = 10, _ = 0, y = yn(), x = qt, S = !1, E = !0, F = new De();
  Wt.pipe(_t(F)).subscribe((U) => {
    f = U.selectedEntities, te(), N();
  }), za([x.asObservable(), y.asObservable()]).pipe(_t(F)).subscribe(([U, J]) => {
    var it;
    console.log("globalState", U), m = J.selectedGroup, p = (it = J.selectedGroup) == null ? void 0 : it.Id, g = J.filter, T = U.queryWithSubGroups, S = !0, n(1, w = 0), n(2, v = U.pageSize ?? 10), u.next();
  });
  function W() {
    const U = { $and: [] };
    T ? U.$and.push({ Path: p }) : U.$and.push({ GroupId: p }), g && U.$and.push({
      $or: [
        {
          "Name.Value": { $regex: g, $options: "i" }
        },
        {
          "Description.Value": { $regex: g, $options: "i" }
        }
      ]
    }), l && U.$and.push(l);
    const J = {
      limit: v,
      skip: w * v
    };
    return Yt(r.queryConfiguration(o, U, J));
  }
  function ee(U) {
    s ? (f.find((J) => J.Id === U.Id) ? (f = f.filter((J) => J.Id !== U.Id), n(4, d[U.Id] = !1, d)) : (f.push(U), n(4, d[U.Id] = !0, d)), N()) : f = [U], Wt.update((J) => ({ ...J, selectedEntities: f }));
  }
  function ke(U) {
    U ? f = [
      ...f,
      ...a.filter((J) => !d[J.Id])
    ] : f = f.filter((J) => !a.find((it) => it.Id === J.Id)), te(), N(), Wt.update((J) => ({ ...J, selectedEntities: f }));
  }
  function N() {
    let U = Object.keys(d).filter((J) => d[J]);
    U.length === 0 ? n(5, b = "unchecked") : U.length === a.length ? n(5, b = "checked") : n(5, b = "indeterminate");
  }
  function B(U) {
    const J = U.detail;
    J.pageSize != v ? (n(1, w = 0), n(2, v = J.pageSize)) : n(1, w = J.pageIndex);
  }
  function te() {
    n(4, d = {}), a.forEach((U) => {
      n(4, d[U.Id] = f.find((J) => J.Id === U.Id) != null, d);
    });
  }
  Mt(() => {
    F.next(), F.complete();
  }), u.pipe(_t(F), un(() => S && !!p), od(250), rd(() => n(7, E = !0)), Ga(() => W())).subscribe((U) => {
    n(7, E = !1), n(3, a = U.data), te(), N(), o === L.Group && a.unshift(m), n(6, _ = U.total);
  });
  const Ie = (U) => {
    var J;
    return ke((J = U.detail) == null ? void 0 : J.checked);
  }, yt = (U) => ee(U);
  return t.$$set = (U) => {
    "entityType" in U && n(13, o = U.entityType), "selectMultiple" in U && n(0, s = U.selectMultiple), "additionalFilter" in U && n(14, l = U.additionalFilter);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pageIndex*/
    2 && (n(1, w), n(24, u), u.next()), t.$$.dirty[0] & /*pageSize*/
    4 && (n(2, v), n(28, x), x.update((U) => ({ ...U, pageSize: v })));
  }, [
    s,
    w,
    v,
    a,
    d,
    b,
    _,
    E,
    i,
    c,
    ee,
    ke,
    B,
    o,
    l,
    Ie,
    yt
  ];
}
class v0 extends me {
  constructor(e) {
    super(), ge(
      this,
      e,
      _0,
      b0,
      he,
      {
        entityType: 13,
        selectMultiple: 0,
        additionalFilter: 14
      },
      t0,
      [-1, -1]
    );
  }
}
function Wl(t) {
  let e, n, r, i;
  n = new xt({ props: { icon: "done_all" } }), n.$on(
    "click",
    /*click_handler*/
    t[10]
  );
  let o = (
    /*selectedEntities*/
    t[4].length > 0 && ql(t)
  );
  return {
    c() {
      e = D("div"), G(n.$$.fragment), r = H(), o && o.c(), k(
        e,
        "class",
        /*tw*/
        t[5]`mx-2 relative`
      );
    },
    m(s, l) {
      M(s, e, l), z(n, e, null), P(e, r), o && o.m(e, null), i = !0;
    },
    p(s, l) {
      /*selectedEntities*/
      s[4].length > 0 ? o ? o.p(s, l) : (o = ql(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      $(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && O(e), V(n), o && o.d();
    }
  };
}
function ql(t) {
  let e, n = (
    /*selectedEntities*/
    t[4].length + ""
  ), r;
  return {
    c() {
      e = D("div"), r = j(n), k(
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
      i[4].length + "") && Ee(r, n);
    },
    d(i) {
      i && O(e);
    }
  };
}
function w0(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, b, g, p, m = (
    /*selectMultiple*/
    t[0] && Wl(t)
  );
  function T(v) {
    t[11](v);
  }
  let w = { label: "Mit Untergruppen" };
  return (
    /*withSubGroups*/
    t[1] !== void 0 && (w.checked = /*withSubGroups*/
    t[1]), f = new ir({ props: w }), be.push(() => hn(f, "checked", T)), {
      c() {
        e = D("div"), n = D("div"), r = D("div"), i = D("span"), o = j("search"), s = H(), l = D("input"), c = H(), m && m.c(), a = H(), u = D("div"), G(f.$$.fragment), k(
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
      m(v, _) {
        M(v, e, _), P(e, n), P(n, r), P(r, i), P(i, o), P(r, s), P(r, l), t[8](l), Nr(
          l,
          /*filter*/
          t[2]
        ), P(n, c), m && m.m(n, null), P(e, a), P(e, u), z(f, u, null), b = !0, g || (p = ae(
          l,
          "input",
          /*input_input_handler*/
          t[9]
        ), g = !0);
      },
      p(v, [_]) {
        _ & /*filter*/
        4 && l.value !== /*filter*/
        v[2] && Nr(
          l,
          /*filter*/
          v[2]
        ), /*selectMultiple*/
        v[0] ? m ? (m.p(v, _), _ & /*selectMultiple*/
        1 && R(m, 1)) : (m = Wl(v), m.c(), R(m, 1), m.m(n, null)) : m && (ve(), $(m, 1, 1, () => {
          m = null;
        }), we());
        const y = {};
        !d && _ & /*withSubGroups*/
        2 && (d = !0, y.checked = /*withSubGroups*/
        v[1], dn(() => d = !1)), f.$set(y);
      },
      i(v) {
        b || (R(m), R(f.$$.fragment, v), b = !0);
      },
      o(v) {
        $(m), $(f.$$.fragment, v), b = !1;
      },
      d(v) {
        v && O(e), t[8](null), m && m.d(), V(f), g = !1, p();
      }
    }
  );
}
function y0(t, e, n) {
  let { entityType: r } = e, { selectMultiple: i = !1 } = e, o = Be("tw"), s = Qe(), l = yn(), c = !1, a = l.value.filter, u, f = new De(), d = new De(), b = [];
  qt.pipe(_t(f)).subscribe((y) => {
    n(1, c = y.queryWithSubGroups);
  }), d.pipe(_t(f), qf(200)).subscribe((y) => {
    l.update((x) => ({ ...x, filter: y }));
  }), Wt.pipe(_t(f)).subscribe((y) => {
    n(4, b = y.selectedEntities);
  });
  function g(y) {
    console.log("onSubGroupsToggled", y), y != qt.value.queryWithSubGroups && qt.update((x) => ({
      ...x,
      queryWithSubGroups: y
    }));
  }
  function p() {
    s("acceptSelection");
  }
  Ec(() => {
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
  Mt(() => {
    f.next(), f.complete();
  });
  function T(y) {
    be[y ? "unshift" : "push"](() => {
      u = y, n(3, u);
    });
  }
  function w() {
    a = this.value, n(2, a);
  }
  const v = () => p();
  function _(y) {
    c = y, n(1, c);
  }
  return t.$$set = (y) => {
    "entityType" in y && n(7, r = y.entityType), "selectMultiple" in y && n(0, i = y.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & /*filter*/
    4 && d.next(a), t.$$.dirty & /*withSubGroups*/
    2 && g(c);
  }, [
    i,
    c,
    a,
    u,
    b,
    o,
    p,
    r,
    T,
    w,
    v,
    _
  ];
}
class S0 extends me {
  constructor(e) {
    super(), ge(this, e, y0, w0, he, { entityType: 7, selectMultiple: 0 });
  }
}
function Gl(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r;
}
function Jl(t, e, n) {
  const r = t.slice();
  return r[15] = e[n], r[19] = n, r;
}
function Kl(t) {
  let e, n;
  return e = new xt({
    props: {
      size: "small",
      $$slots: { default: [C0] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*$$scope*/
      1048576 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function C0(t) {
  let e;
  return {
    c() {
      e = j("arrow_back");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Xl(t) {
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
      e = D("div"), r = j(n), o = j(i), s = H(), k(e, "class", l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    },
    m(f, d) {
      M(f, e, d), P(e, r), P(e, o), P(e, s), c || (a = ae(e, "click", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*tenantPath*/
      4 && n !== (n = /*tenant*/
      t[15].Name + "") && Ee(r, n), d & /*tenantPath*/
      4 && i !== (i = /*i*/
      t[19] == /*tenantPath*/
      t[2].length - 1 ? "" : " /") && Ee(o, i), d & /*tw*/
      2 && l !== (l = /*tw*/
      t[1]`cursor-pointer hover:bg-slate-100 p-1`) && k(e, "class", l);
    },
    d(f) {
      f && O(e), c = !1, a();
    }
  };
}
function Yl(t) {
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
  return n = new xt({
    props: {
      $$slots: { default: [E0] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", i), {
    c() {
      e = D("div"), G(n.$$.fragment);
    },
    m(o, s) {
      M(o, e, s), z(n, e, null), r = !0;
    },
    p(o, s) {
      t = o;
      const l = {};
      s & /*$$scope*/
      1048576 && (l.$$scope = { dirty: s, ctx: t }), n.$set(l);
    },
    i(o) {
      r || (R(n.$$.fragment, o), r = !0);
    },
    o(o) {
      $(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && O(e), V(n);
    }
  };
}
function E0(t) {
  let e;
  return {
    c() {
      e = j("done");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Ql(t) {
  var g;
  let e, n, r = (
    /*tenant*/
    ((g = t[15]) == null ? void 0 : g.Name) + ""
  ), i, o, s, l, c, a, u, f, d = (
    /*tenant*/
    t[15].Root && Yl(t)
  );
  function b() {
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
      e = D("div"), n = D("div"), i = j(r), s = H(), d && d.c(), l = H(), k(n, "class", o = /*tw*/
      t[1]`mt-2 ml-2 `), k(e, "class", c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    },
    m(p, m) {
      M(p, e, m), P(e, n), P(n, i), P(e, s), d && d.m(e, null), P(e, l), a = !0, u || (f = ae(e, "click", b), u = !0);
    },
    p(p, m) {
      var T;
      t = p, (!a || m & /*tenants*/
      8) && r !== (r = /*tenant*/
      ((T = t[15]) == null ? void 0 : T.Name) + "") && Ee(i, r), (!a || m & /*tw*/
      2 && o !== (o = /*tw*/
      t[1]`mt-2 ml-2 `)) && k(n, "class", o), /*tenant*/
      t[15].Root ? d ? (d.p(t, m), m & /*tenants*/
      8 && R(d, 1)) : (d = Yl(t), d.c(), R(d, 1), d.m(e, l)) : d && (ve(), $(d, 1, 1, () => {
        d = null;
      }), we()), (!a || m & /*tw*/
      2 && c !== (c = /*tw*/
      t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && k(e, "class", c);
    },
    i(p) {
      a || (R(d), a = !0);
    },
    o(p) {
      $(d), a = !1;
    },
    d(p) {
      p && O(e), d && d.d(), u = !1, f();
    }
  };
}
function k0(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, b, g, p, m = (
    /*allowBack*/
    t[0] && Kl(t)
  ), T = (
    /*tenantPath*/
    t[2]
  ), w = [];
  for (let x = 0; x < T.length; x += 1)
    w[x] = Xl(Jl(t, T, x));
  let v = (
    /*tenants*/
    t[3]
  ), _ = [];
  for (let x = 0; x < v.length; x += 1)
    _[x] = Ql(Gl(t, v, x));
  const y = (x) => $(_[x], 1, 1, () => {
    _[x] = null;
  });
  return {
    c() {
      e = D("div"), n = D("div"), m && m.c(), r = H(), i = D("div"), o = j("Mandant auswählen"), c = H(), a = D("div");
      for (let x = 0; x < w.length; x += 1)
        w[x].c();
      f = H(), d = D("div");
      for (let x = 0; x < _.length; x += 1)
        _[x].c();
      k(i, "class", s = /*tw*/
      t[1]`font-bold text-gray-600 text-lg`), k(n, "class", l = /*tw*/
      t[1]`flex items-center`), k(a, "class", u = /*tw*/
      t[1]`flex mb-1`), fo(d, "grid-auto-rows", "60px"), k(d, "class", b = /*tw*/
      t[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`), k(e, "class", g = /*tw*/
      t[1]`w-full overflow-hidden flex flex-col`);
    },
    m(x, S) {
      M(x, e, S), P(e, n), m && m.m(n, null), P(n, r), P(n, i), P(i, o), P(e, c), P(e, a);
      for (let E = 0; E < w.length; E += 1)
        w[E] && w[E].m(a, null);
      P(e, f), P(e, d);
      for (let E = 0; E < _.length; E += 1)
        _[E] && _[E].m(d, null);
      p = !0;
    },
    p(x, [S]) {
      if (/*allowBack*/
      x[0] ? m ? (m.p(x, S), S & /*allowBack*/
      1 && R(m, 1)) : (m = Kl(x), m.c(), R(m, 1), m.m(n, r)) : m && (ve(), $(m, 1, 1, () => {
        m = null;
      }), we()), (!p || S & /*tw*/
      2 && s !== (s = /*tw*/
      x[1]`font-bold text-gray-600 text-lg`)) && k(i, "class", s), (!p || S & /*tw*/
      2 && l !== (l = /*tw*/
      x[1]`flex items-center`)) && k(n, "class", l), S & /*tw, selectTenantInPath, tenantPath*/
      70) {
        T = /*tenantPath*/
        x[2];
        let E;
        for (E = 0; E < T.length; E += 1) {
          const F = Jl(x, T, E);
          w[E] ? w[E].p(F, S) : (w[E] = Xl(F), w[E].c(), w[E].m(a, null));
        }
        for (; E < w.length; E += 1)
          w[E].d(1);
        w.length = T.length;
      }
      if ((!p || S & /*tw*/
      2 && u !== (u = /*tw*/
      x[1]`flex mb-1`)) && k(a, "class", u), S & /*tw, browseTenant, tenants, selectTenant*/
      170) {
        v = /*tenants*/
        x[3];
        let E;
        for (E = 0; E < v.length; E += 1) {
          const F = Gl(x, v, E);
          _[E] ? (_[E].p(F, S), R(_[E], 1)) : (_[E] = Ql(F), _[E].c(), R(_[E], 1), _[E].m(d, null));
        }
        for (ve(), E = v.length; E < _.length; E += 1)
          y(E);
        we();
      }
      (!p || S & /*tw*/
      2 && b !== (b = /*tw*/
      x[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`)) && k(d, "class", b), (!p || S & /*tw*/
      2 && g !== (g = /*tw*/
      x[1]`w-full overflow-hidden flex flex-col`)) && k(e, "class", g);
    },
    i(x) {
      if (!p) {
        R(m);
        for (let S = 0; S < v.length; S += 1)
          R(_[S]);
        p = !0;
      }
    },
    o(x) {
      $(m), _ = _.filter(Boolean);
      for (let S = 0; S < _.length; S += 1)
        $(_[S]);
      p = !1;
    },
    d(x) {
      x && O(e), m && m.d(), Dt(w, x), Dt(_, x);
    }
  };
}
function T0(t, e, n) {
  let r = Ne(zn), { allowBack: i = !1 } = e, { tw: o } = e, s = [], l = [];
  const c = Qe();
  async function a() {
    const w = await r.getTopTenants();
    if (w.length === 1) {
      const v = w[0];
      if (v.Root == null) {
        f(v);
        return;
      }
    }
    n(2, s = [new Vu({ Id: "start", Name: "Start" })]), n(3, l = w);
  }
  async function u(w) {
    const v = await r.getNextTenants(w.Id);
    n(3, l = v);
  }
  async function f(w) {
    n(2, s = [...s, w]), u(w);
  }
  async function d(w) {
    if (w.Id == "start") {
      a();
      return;
    }
    const v = s.findIndex((_) => _.Id === w.Id);
    n(2, s = s.slice(0, v + 1)), u(w);
  }
  function b(w, v) {
    console.log(w, v), w.detail.stopPropagation(), c("tenantSelected", { tenant: v });
  }
  a();
  const g = () => c("back"), p = (w) => d(w), m = (w, v) => b(v, w), T = (w) => f(w);
  return t.$$set = (w) => {
    "allowBack" in w && n(0, i = w.allowBack), "tw" in w && n(1, o = w.tw);
  }, [
    i,
    o,
    s,
    l,
    c,
    f,
    d,
    b,
    g,
    p,
    m,
    T
  ];
}
let Yc = class extends me {
  constructor(e) {
    super(), ge(this, e, T0, k0, he, { allowBack: 0, tw: 1 });
  }
};
function A0(t) {
  let e, n, r, i, o, s, l, c, a, u, f, d, b, g;
  return n = new Sg({
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
  ), l = new S0({
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
  ), u = new v0({
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
      e = D("div"), G(n.$$.fragment), i = H(), o = D("div"), s = D("div"), G(l.$$.fragment), c = H(), a = D("div"), G(u.$$.fragment), k(e, "class", r = /*tw*/
      t[3]`flex-1 border-r border-slate-400 overflow-hidden`), k(a, "class", f = /*tw*/
      t[3]`flex-1 overflow-hidden mt-3`), k(s, "class", d = /*tw*/
      t[3]`flex flex-col h-full overflow-hidden`), k(o, "class", b = /*tw*/
      t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    },
    m(p, m) {
      M(p, e, m), z(n, e, null), M(p, i, m), M(p, o, m), P(o, s), z(l, s, null), P(s, c), P(s, a), z(u, a, null), g = !0;
    },
    p(p, m) {
      const T = {};
      m & /*selectMultiple*/
      2 && (T.selectMultiple = /*selectMultiple*/
      p[1]), m & /*entityType*/
      1 && (T.entityType = /*entityType*/
      p[0]), m & /*selectedTenant*/
      16 && (T.selectedTenant = /*selectedTenant*/
      p[4]), n.$set(T), (!g || m & /*tw*/
      8 && r !== (r = /*tw*/
      p[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && k(e, "class", r);
      const w = {};
      m & /*entityType*/
      1 && (w.entityType = /*entityType*/
      p[0]), m & /*selectMultiple*/
      2 && (w.selectMultiple = /*selectMultiple*/
      p[1]), l.$set(w);
      const v = {};
      m & /*selectMultiple*/
      2 && (v.selectMultiple = /*selectMultiple*/
      p[1]), m & /*entityType*/
      1 && (v.entityType = /*entityType*/
      p[0]), m & /*additionalFilter*/
      4 && (v.additionalFilter = /*additionalFilter*/
      p[2]), u.$set(v), (!g || m & /*tw*/
      8 && f !== (f = /*tw*/
      p[3]`flex-1 overflow-hidden mt-3`)) && k(a, "class", f), (!g || m & /*tw*/
      8 && d !== (d = /*tw*/
      p[3]`flex flex-col h-full overflow-hidden`)) && k(s, "class", d), (!g || m & /*tw*/
      8 && b !== (b = /*tw*/
      p[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && k(o, "class", b);
    },
    i(p) {
      g || (R(n.$$.fragment, p), R(l.$$.fragment, p), R(u.$$.fragment, p), g = !0);
    },
    o(p) {
      $(n.$$.fragment, p), $(l.$$.fragment, p), $(u.$$.fragment, p), g = !1;
    },
    d(p) {
      p && O(e), V(n), p && O(i), p && O(o), V(l), V(u);
    }
  };
}
function x0(t) {
  let e, n;
  return e = new Yc({
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
      G(e.$$.fragment);
    },
    m(r, i) {
      z(e, r, i), n = !0;
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      $(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function I0(t) {
  let e, n, r, i, o;
  const s = [x0, A0], l = [];
  function c(a, u) {
    return (
      /*inTenantSelect*/
      a[5] ? 0 : 1
    );
  }
  return n = c(t), r = l[n] = s[n](t), {
    c() {
      e = D("div"), r.c(), k(e, "class", i = /*tw*/
      t[3]`flex w-full h-full`);
    },
    m(a, u) {
      M(a, e, u), l[n].m(e, null), o = !0;
    },
    p(a, [u]) {
      let f = n;
      n = c(a), n === f ? l[n].p(a, u) : (ve(), $(l[f], 1, 1, () => {
        l[f] = null;
      }), we(), r = l[n], r ? r.p(a, u) : (r = l[n] = s[n](a), r.c()), R(r, 1), r.m(e, null)), (!o || u & /*tw*/
      8 && i !== (i = /*tw*/
      a[3]`flex w-full h-full`)) && k(e, "class", i);
    },
    i(a) {
      o || (R(r), o = !0);
    },
    o(a) {
      $(r), o = !1;
    },
    d(a) {
      a && O(e), l[n].d();
    }
  };
}
function R0(t, e, n) {
  let { entityType: r = L.Signal } = e, { selectMultiple: i = !1 } = e, { additionalFilter: o = null } = e, { tw: s = Ye } = e, l = Ne(Xt), c = Ne(zn), a, u = !1, f = [], d = Qe(), b = qt.subscribe((E) => {
    E.selectedTenant ? (n(5, u = !1), m(E.selectedTenant)) : n(5, u = !0);
  }), g = Wt.subscribe((E) => {
    E.selectedEntities && !i ? (p(E.selectedEntities), d("selectedEntities", E.selectedEntities[0])) : f = E.selectedEntities;
  });
  function p(E) {
    const F = yn(), W = F.value.lastSelectedEntities, ee = E.filter((ke) => !W.includes(ke.Id)).map((ke) => ke.Id);
    W.unshift(...ee), W.splice(5), F.update((ke) => ({
      ...ke,
      lastSelectedEntities: W
    }));
  }
  async function m(E) {
    try {
      n(4, a = await c.getTenantViewById(E));
    } catch (F) {
      console.error(F), n(5, u = !0);
    }
  }
  async function T(E) {
    console.log("Tenant selected", E);
    const F = await l.getEntityById(L.Group, E.Root);
    qt.update((W) => ({ ...W, selectedTenant: E.Id })), yn().update((W) => ({ ...W, selectedGroup: F }));
  }
  function w() {
    n(5, u = !0);
  }
  function v() {
    p(f), d("selectedEntities", f);
  }
  Mt(() => {
    b.unsubscribe(), g.unsubscribe();
  });
  const _ = () => n(5, u = !1), y = (E) => T(E.detail.tenant), x = () => w(), S = () => v();
  return t.$$set = (E) => {
    "entityType" in E && n(0, r = E.entityType), "selectMultiple" in E && n(1, i = E.selectMultiple), "additionalFilter" in E && n(2, o = E.additionalFilter), "tw" in E && n(3, s = E.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*tw*/
    8 && kt("tw", s);
  }, [
    r,
    i,
    o,
    s,
    a,
    u,
    T,
    w,
    v,
    _,
    y,
    x,
    S
  ];
}
let Qc = class extends me {
  constructor(e) {
    super(), ge(this, e, R0, I0, he, {
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
};
function P0(t) {
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
  return r = new Qc({ props: a }), t[9](r), r.$on(
    "selectedEntities",
    /*selectedEntities_handler*/
    t[10]
  ), {
    c() {
      e = D("div"), n = D("div"), G(r.$$.fragment), k(n, "class", i = /*tw*/
      t[3]`h-full w-full`), k(e, "class", o = /*tw*/
      t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    },
    m(u, f) {
      M(u, e, f), P(e, n), z(r, n, null), t[11](e), s = !0, l || (c = [
        ae(
          e,
          "keydown",
          /*onKeyDown*/
          t[6]
        ),
        ae(e, "click", $0)
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
      s || (R(r.$$.fragment, u), s = !0);
    },
    o(u) {
      $(r.$$.fragment, u), s = !1;
    },
    d(u) {
      u && O(e), t[9](null), V(r), t[11](null), l = !1, wt(c);
    }
  };
}
const $0 = (t) => t.stopPropagation();
function D0(t, e, n) {
  let { open: r = !1 } = e, { entityType: i = L.Signal } = e, { selectMultiple: o = !1 } = e, { additionalFilter: s = null } = e, { tw: l = Ye } = e, c = Ne("PopupService", new Hr(document.body)), a, u, f;
  const d = Qe();
  function b(_, y) {
    _ && !f && y ? (f = c.openPopup("entity-select-dialog", y, {
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
  function m(_) {
    d("selectedEntities", _.detail);
  }
  function T(_) {
    be[_ ? "unshift" : "push"](() => {
      u = _, n(5, u);
    });
  }
  const w = (_) => m(_);
  function v(_) {
    be[_ ? "unshift" : "push"](() => {
      a = _, n(4, a);
    });
  }
  return t.$$set = (_) => {
    "open" in _ && n(8, r = _.open), "entityType" in _ && n(0, i = _.entityType), "selectMultiple" in _ && n(1, o = _.selectMultiple), "additionalFilter" in _ && n(2, s = _.additionalFilter), "tw" in _ && n(3, l = _.tw);
  }, t.$$.update = () => {
    t.$$.dirty & /*open, dialogElement*/
    272 && b(r, a);
  }, [
    i,
    o,
    s,
    l,
    a,
    u,
    p,
    m,
    r,
    T,
    w,
    v
  ];
}
class O0 extends me {
  constructor(e) {
    super(), ge(this, e, D0, P0, he, {
      open: 8,
      entityType: 0,
      selectMultiple: 1,
      additionalFilter: 2,
      tw: 3
    });
  }
}
class Zl {
  constructor() {
  }
  selectEntity(e, n = null) {
    return this._openEntitySelectDialog(e, !1, n).then((r) => r.length === 1 ? r[0] : null);
  }
  selectMultipleEntities(e, n = null) {
    return this._openEntitySelectDialog(e, !0, n);
  }
  _openEntitySelectDialog(e, n, r) {
    const i = new O0({
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
const xr = window, es = xr.ShadowRoot && (xr.ShadyCSS === void 0 || xr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ts = Symbol(), ea = /* @__PURE__ */ new WeakMap();
let Zc = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== ts)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (es && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = ea.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ea.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const M0 = (t) => new Zc(typeof t == "string" ? t : t + "", void 0, ts), ii = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o + 1], t[0]);
  return new Zc(n, t, ts);
}, F0 = (t, e) => {
  es ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = xr.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, ta = es ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return M0(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ei;
const Vr = window, na = Vr.trustedTypes, N0 = na ? na.emptyScript : "", ra = Vr.reactiveElementPolyfillSupport, So = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? N0 : null;
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
} }, eu = (t, e) => e !== t && (e == e || t == t), ki = { attribute: !0, type: String, converter: So, reflect: !1, hasChanged: eu };
let ln = class extends HTMLElement {
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
  static createProperty(e, n = ki) {
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
    return this.elementProperties.get(e) || ki;
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
        n.unshift(ta(i));
    } else
      e !== void 0 && n.push(ta(e));
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
    return F0(n, this.constructor.elementStyles), n;
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
  _$EO(e, n, r = ki) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : So).toAttribute(n, r.type);
      this._$El = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const s = i.getPropertyOptions(o), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : So;
      this._$El = o, this[o] = l.fromAttribute(n, s.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || eu)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
ln.finalized = !0, ln.elementProperties = /* @__PURE__ */ new Map(), ln.elementStyles = [], ln.shadowRootOptions = { mode: "open" }, ra == null || ra({ ReactiveElement: ln }), ((Ei = Vr.reactiveElementVersions) !== null && Ei !== void 0 ? Ei : Vr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ti;
const Wr = window, Sn = Wr.trustedTypes, ia = Sn ? Sn.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, At = `lit$${(Math.random() + "").slice(9)}$`, tu = "?" + At, U0 = `<${tu}>`, Cn = document, Kn = (t = "") => Cn.createComment(t), Xn = (t) => t === null || typeof t != "object" && typeof t != "function", nu = Array.isArray, L0 = (t) => nu(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Nn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, oa = /-->/g, sa = />/g, Lt = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), la = /'/g, aa = /"/g, ru = /^(?:script|style|textarea|title)$/i, En = Symbol.for("lit-noChange"), Se = Symbol.for("lit-nothing"), ca = /* @__PURE__ */ new WeakMap(), H0 = (t, e, n) => {
  var r, i;
  const o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : e;
  let s = o._$litPart$;
  if (s === void 0) {
    const l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = s = new sr(e.insertBefore(Kn(), l), l, void 0, n ?? {});
  }
  return s._$AI(t), s;
}, gn = Cn.createTreeWalker(Cn, 129, null, !1), B0 = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", s = Nn;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let u, f, d = -1, b = 0;
    for (; b < a.length && (s.lastIndex = b, f = s.exec(a), f !== null); )
      b = s.lastIndex, s === Nn ? f[1] === "!--" ? s = oa : f[1] !== void 0 ? s = sa : f[2] !== void 0 ? (ru.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = Lt) : f[3] !== void 0 && (s = Lt) : s === Lt ? f[0] === ">" ? (s = i ?? Nn, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, u = f[1], s = f[3] === void 0 ? Lt : f[3] === '"' ? aa : la) : s === aa || s === la ? s = Lt : s === oa || s === sa ? s = Nn : (s = Lt, i = void 0);
    const g = s === Lt && t[c + 1].startsWith("/>") ? " " : "";
    o += s === Nn ? a + U0 : d >= 0 ? (r.push(u), a.slice(0, d) + "$lit$" + a.slice(d) + At + g) : a + At + (d === -2 ? (r.push(void 0), c) : g);
  }
  const l = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ia !== void 0 ? ia.createHTML(l) : l, r];
};
class Yn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, s = 0;
    const l = e.length - 1, c = this.parts, [a, u] = B0(e, n);
    if (this.el = Yn.createElement(a, r), gn.currentNode = this.el.content, n === 2) {
      const f = this.el.content, d = f.firstChild;
      d.remove(), f.append(...d.childNodes);
    }
    for (; (i = gn.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(At)) {
              const b = u[s++];
              if (f.push(d), b !== void 0) {
                const g = i.getAttribute(b.toLowerCase() + "$lit$").split(At), p = /([.?@])?(.*)/.exec(b);
                c.push({ type: 1, index: o, name: p[2], strings: g, ctor: p[1] === "." ? z0 : p[1] === "?" ? W0 : p[1] === "@" ? q0 : oi });
              } else
                c.push({ type: 6, index: o });
            }
          for (const d of f)
            i.removeAttribute(d);
        }
        if (ru.test(i.tagName)) {
          const f = i.textContent.split(At), d = f.length - 1;
          if (d > 0) {
            i.textContent = Sn ? Sn.emptyScript : "";
            for (let b = 0; b < d; b++)
              i.append(f[b], Kn()), gn.nextNode(), c.push({ type: 2, index: ++o });
            i.append(f[d], Kn());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === tu)
          c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(At, f + 1)) !== -1; )
            c.push({ type: 7, index: o }), f += At.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = Cn.createElement("template");
    return r.innerHTML = e, r;
  }
}
function kn(t, e, n = t, r) {
  var i, o, s, l;
  if (e === En)
    return e;
  let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
  const a = Xn(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== a && ((o = c == null ? void 0 : c._$AO) === null || o === void 0 || o.call(c, !1), a === void 0 ? c = void 0 : (c = new a(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (l = n)._$Cl) !== null && s !== void 0 ? s : l._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = kn(t, c._$AS(t, e.values), c, r)), e;
}
class j0 {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : Cn).importNode(r, !0);
    gn.currentNode = o;
    let s = gn.nextNode(), l = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (l === a.index) {
        let u;
        a.type === 2 ? u = new sr(s, s.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(s, a.name, a.strings, this, e) : a.type === 6 && (u = new G0(s, this, e)), this.v.push(u), a = i[++c];
      }
      l !== (a == null ? void 0 : a.index) && (s = gn.nextNode(), l++);
    }
    return o;
  }
  m(e) {
    let n = 0;
    for (const r of this.v)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class sr {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = Se, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
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
    e = kn(this, e, n), Xn(e) ? e === Se || e == null || e === "" ? (this._$AH !== Se && this._$AR(), this._$AH = Se) : e !== this._$AH && e !== En && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : L0(e) ? this.O(e) : this.$(e);
  }
  S(e, n = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, n);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  $(e) {
    this._$AH !== Se && Xn(this._$AH) ? this._$AA.nextSibling.data = e : this.k(Cn.createTextNode(e)), this._$AH = e;
  }
  T(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Yn.createElement(i.h, this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.m(r);
    else {
      const s = new j0(o, this), l = s.p(this.options);
      s.m(r), this.k(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let n = ca.get(e.strings);
    return n === void 0 && ca.set(e.strings, n = new Yn(e)), n;
  }
  O(e) {
    nu(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new sr(this.S(Kn()), this.S(Kn()), this, this.options)) : r = n[i], r._$AI(o), i++;
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
class oi {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = Se, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = Se;
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
      e = kn(this, e, n, 0), s = !Xn(e) || e !== this._$AH && e !== En, s && (this._$AH = e);
    else {
      const l = e;
      let c, a;
      for (e = o[0], c = 0; c < o.length - 1; c++)
        a = kn(this, l[r + c], n, c), a === En && (a = this._$AH[c]), s || (s = !Xn(a) || a !== this._$AH[c]), a === Se ? e = Se : e !== Se && (e += (a ?? "") + o[c + 1]), this._$AH[c] = a;
    }
    s && !i && this.P(e);
  }
  P(e) {
    e === Se ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class z0 extends oi {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(e) {
    this.element[this.name] = e === Se ? void 0 : e;
  }
}
const V0 = Sn ? Sn.emptyScript : "";
class W0 extends oi {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(e) {
    e && e !== Se ? this.element.setAttribute(this.name, V0) : this.element.removeAttribute(this.name);
  }
}
class q0 extends oi {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = kn(this, e, n, 0)) !== null && r !== void 0 ? r : Se) === En)
      return;
    const i = this._$AH, o = e === Se && i !== Se || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== Se && (i === Se || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class G0 {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    kn(this, e);
  }
}
const ua = Wr.litHtmlPolyfillSupport;
ua == null || ua(Yn, sr), ((Ti = Wr.litHtmlVersions) !== null && Ti !== void 0 ? Ti : Wr.litHtmlVersions = []).push("2.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ai, xi;
class Rt extends ln {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = H0(n, this.renderRoot, this.renderOptions);
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
    return En;
  }
}
Rt.finalized = !0, Rt._$litElement$ = !0, (Ai = globalThis.litElementHydrateSupport) === null || Ai === void 0 || Ai.call(globalThis, { LitElement: Rt });
const fa = globalThis.litElementPolyfillSupport;
fa == null || fa({ LitElement: Rt });
((xi = globalThis.litElementVersions) !== null && xi !== void 0 ? xi : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J0 = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function ze(t) {
  return (e, n) => n !== void 0 ? ((r, i, o) => {
    i.constructor.createProperty(o, r);
  })(t, e, n) : J0(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ii;
((Ii = window.HTMLSlotElement) === null || Ii === void 0 ? void 0 : Ii.prototype.assignedElements) != null;
const K0 = {
  primary: "#1D4ED8",
  "on-primary": "#ffffff",
  secondary: "#A9377A",
  "on-secondary": "#ffffff",
  background: "#EEEEEE",
  surface: "#ffffff",
  "on-surface": "#000000",
  "surface-border": "#CCCCCC"
};
class ct {
  constructor(e) {
    this._theme = e, e || (this._theme = this._theme ?? K0);
  }
  createTwindContext(e) {
    if (e)
      return Om({
        theme: {
          extend: {
            colors: this._theme
          }
        }
      }), { tw: Ye, styleSheet: null };
    {
      const n = Lc({ target: new CSSStyleSheet() }), { tw: r } = Gc({
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
var X0 = Object.defineProperty, Y0 = Object.getOwnPropertyDescriptor, iu = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Y0(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && X0(e, n, i), i;
};
const { tw: Q0, styleSheet: Z0 } = Ne(ct, new ct()).createTwindContext(), eb = ii`
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
class si extends Rt {
  constructor() {
    super();
    ot(this, "_element");
    pt(Hr, new Hr(document.body));
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
    this._element = new Qc({
      target: n,
      props: {
        entityType: this.entityType,
        selectMultiple: r,
        additionalFilter: i,
        tw: Q0
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
    return Object.values(L).includes(n);
  }
}
ot(si, "styles", [Z0.target, eb]);
iu([
  ze({ type: String, attribute: "entitytype" })
], si.prototype, "entityType", 2);
iu([
  ze({ type: Boolean, attribute: "multiple" })
], si.prototype, "multiple", 2);
var tb = Object.defineProperty, nb = Object.getOwnPropertyDescriptor, Ft = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? nb(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && tb(e, n, i), i;
};
const { tw: rb, styleSheet: ib } = Ne(ct, new ct()).createTwindContext(), ob = ii`
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
class ft extends Rt {
  constructor() {
    super();
    ot(this, "_select");
    this.multiple = !1, this.options = [], this.arrayvalue = [];
  }
  render() {
    var n;
    return this.multiple && this._select || ((n = this._select) == null || n.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new Xc({
      target: this.shadowRoot,
      props: {
        value: this.multiple ? this.arrayvalue : this.value,
        multiple: this.multiple,
        options: this.options,
        container$class: this.container$class,
        textfield$class: this.textfield$class,
        suffixIcon$class: this.suffix$class,
        placeholder: this.placeholder,
        tw: rb
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
ot(ft, "styles", [ib.target, ob]);
Ft([
  ze({ attribute: "value", type: String })
], ft.prototype, "value", 2);
Ft([
  ze({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), !0;
  } })
], ft.prototype, "arrayvalue", 2);
Ft([
  ze({ attribute: "multiple", type: Boolean })
], ft.prototype, "multiple", 2);
Ft([
  ze({ attribute: "options", type: Array })
], ft.prototype, "options", 2);
Ft([
  ze({ attribute: "placeholder", type: String })
], ft.prototype, "placeholder", 2);
Ft([
  ze({ attribute: "container$class", type: String })
], ft.prototype, "container$class", 2);
Ft([
  ze({ attribute: "textfield$class", type: String })
], ft.prototype, "textfield$class", 2);
Ft([
  ze({ attribute: "suffix$class", type: String })
], ft.prototype, "suffix$class", 2);
const { tw: sb, styleSheet: $v } = Ne(ct, new ct()).createTwindContext();
ii`
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
class lb extends Rt {
  constructor() {
    super();
    ot(this, "_element");
  }
  render() {
    const n = document.createElement("div");
    return this._createTenantSelect(n), n;
  }
  _createTenantSelect(n) {
    this._element = new Yc({
      target: n,
      props: {
        tw: sb
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._element.$destroy();
  }
}
function ab(t) {
  Qt(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
}
function da(t) {
  let e, n, r, i, o;
  const s = (
    /*#slots*/
    t[5].default
  ), l = Ge(
    s,
    t,
    /*$$scope*/
    t[4],
    null
  ), c = l || cb(t);
  return {
    c() {
      e = D("div"), n = D("span"), c && c.c(), k(n, "class", r = ue(
        /*tw*/
        t[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0"), k(e, "class", i = ue(
        /*tw*/
        t[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0");
    },
    m(a, u) {
      M(a, e, u), P(e, n), c && c.m(n, null), o = !0;
    },
    p(a, u) {
      l ? l.p && (!o || u & /*$$scope*/
      16) && Ke(
        l,
        s,
        a,
        /*$$scope*/
        a[4],
        o ? Je(
          s,
          /*$$scope*/
          a[4],
          u,
          null
        ) : Xe(
          /*$$scope*/
          a[4]
        ),
        null
      ) : c && c.p && (!o || u & /*icon*/
      1) && c.p(a, o ? u : -1), (!o || u & /*tw*/
      4 && r !== (r = ue(
        /*tw*/
        a[2]`material-symbols-rounded z-[1] select-none flex items-center`
      ) + " svelte-8br8x0")) && k(n, "class", r), (!o || u & /*tw*/
      4 && i !== (i = ue(
        /*tw*/
        a[2]`mr-2 flex item-center`
      ) + " svelte-8br8x0")) && k(e, "class", i);
    },
    i(a) {
      o || (R(c, a), o = !0);
    },
    o(a) {
      $(c, a), o = !1;
    },
    d(a) {
      a && O(e), c && c.d(a);
    }
  };
}
function cb(t) {
  let e;
  return {
    c() {
      e = j(
        /*icon*/
        t[0]
      );
    },
    m(n, r) {
      M(n, e, r);
    },
    p(n, r) {
      r & /*icon*/
      1 && Ee(
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
function ub(t) {
  let e, n, r, i, o, s, l, c, a, u = (
    /*icon*/
    t[0] && da(t)
  );
  return {
    c() {
      e = D("div"), u && u.c(), n = H(), r = D("div"), i = j(
        /*label*/
        t[1]
      ), k(r, "class", o = ue(
        /*tw*/
        t[2]`flex-grow`
      ) + " svelte-8br8x0"), k(e, "class", s = ue(
        /*tw*/
        t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0");
    },
    m(f, d) {
      M(f, e, d), u && u.m(e, null), P(e, n), P(e, r), P(r, i), l = !0, c || (a = ae(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), c = !0);
    },
    p(f, [d]) {
      /*icon*/
      f[0] ? u ? (u.p(f, d), d & /*icon*/
      1 && R(u, 1)) : (u = da(f), u.c(), R(u, 1), u.m(e, n)) : u && (ve(), $(u, 1, 1, () => {
        u = null;
      }), we()), (!l || d & /*label*/
      2) && Ee(
        i,
        /*label*/
        f[1]
      ), (!l || d & /*tw*/
      4 && o !== (o = ue(
        /*tw*/
        f[2]`flex-grow`
      ) + " svelte-8br8x0")) && k(r, "class", o), (!l || d & /*tw*/
      4 && s !== (s = ue(
        /*tw*/
        f[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`
      ) + " svelte-8br8x0")) && k(e, "class", s);
    },
    i(f) {
      l || (R(u), l = !0);
    },
    o(f) {
      $(u), l = !1;
    },
    d(f) {
      f && O(e), u && u.d(), c = !1, a();
    }
  };
}
function fb(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: l } = e, c = Qe();
  const a = (u) => c("click", u);
  return t.$$set = (u) => {
    "icon" in u && n(0, o = u.icon), "label" in u && n(1, s = u.label), "tw" in u && n(2, l = u.tw), "$$scope" in u && n(4, i = u.$$scope);
  }, [o, s, l, c, i, r, a];
}
class db extends me {
  constructor(e) {
    super(), ge(this, e, fb, ub, he, { icon: 0, label: 1, tw: 2 }, ab);
  }
}
function ha(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function pa(t) {
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
  return e = new db({
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
      G(e.$$.fragment);
    },
    m(i, o) {
      z(e, i, o), n = !0;
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      $(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function hb(t) {
  let e, n, r, i = (
    /*items*/
    t[6]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = pa(ha(t, i, l));
  const s = (l) => $(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = D("div");
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
          const u = ha(l, i, a);
          o[a] ? (o[a].p(u, c), R(o[a], 1)) : (o[a] = pa(u), o[a].c(), R(o[a], 1), o[a].m(e, null));
        }
        for (ve(), a = i.length; a < o.length; a += 1)
          s(a);
        we();
      }
      (!r || c & /*tw, container$class*/
      24 && n !== (n = /*tw*/
      l[4]`bg-white rounded shadow-lg ${/*container$class*/
      l[3]}`)) && k(e, "class", n);
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < i.length; c += 1)
          R(o[c]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        $(o[c]);
      r = !1;
    },
    d(l) {
      l && O(e), Dt(o, l);
    }
  };
}
function pb(t) {
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
    $$slots: { default: [hb] },
    $$scope: { ctx: t }
  };
  return (
    /*anchorElement*/
    t[7] !== void 0 && (a.anchorElement = /*anchorElement*/
    t[7]), /*preferedHorizontalAlignment*/
    t[1] !== void 0 && (a.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
    t[1]), /*preferedVerticalAlignment*/
    t[0] !== void 0 && (a.preferedVerticalAlignment = /*preferedVerticalAlignment*/
    t[0]), e = new Jc({ props: a }), be.push(() => hn(e, "anchorElement", s)), t[14](e), be.push(() => hn(e, "preferedHorizontalAlignment", l)), be.push(() => hn(e, "preferedVerticalAlignment", c)), {
      c() {
        G(e.$$.fragment);
      },
      m(u, f) {
        z(e, u, f), o = !0;
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
        u[7], dn(() => n = !1)), !r && f & /*preferedHorizontalAlignment*/
        2 && (r = !0, d.preferedHorizontalAlignment = /*preferedHorizontalAlignment*/
        u[1], dn(() => r = !1)), !i && f & /*preferedVerticalAlignment*/
        1 && (i = !0, d.preferedVerticalAlignment = /*preferedVerticalAlignment*/
        u[0], dn(() => i = !1)), e.$set(d);
      },
      i(u) {
        o || (R(e.$$.fragment, u), o = !0);
      },
      o(u) {
        $(e.$$.fragment, u), o = !1;
      },
      d(u) {
        t[14](null), V(e, u);
      }
    }
  );
}
function gb(t, e, n) {
  let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 10 } } = e, { container$class: l } = e, { tw: c = Ye } = e, { closeOnClick: a = !0 } = e, { items: u = [] } = e, f, d;
  function b() {
    console.log("openMenu", f, u), d.openPopup();
  }
  function g() {
    d.closePopup();
  }
  const p = (_, y) => _.action(y);
  function m(_) {
    f = _, n(7, f), n(9, r);
  }
  function T(_) {
    be[_ ? "unshift" : "push"](() => {
      d = _, n(8, d);
    });
  }
  function w(_) {
    o = _, n(1, o);
  }
  function v(_) {
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
    b,
    g,
    p,
    m,
    T,
    w,
    v
  ];
}
class mb extends me {
  constructor(e) {
    super(), ge(this, e, gb, pb, he, {
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
var bb = Object.defineProperty, _b = Object.getOwnPropertyDescriptor, li = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? _b(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (r ? s(e, n, i) : s(i)) || i);
  return r && i && bb(e, n, i), i;
};
const { tw: Dv, styleSheet: vb } = Ne(ct, new ct()).createTwindContext(), wb = ii`
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
class Rn extends Rt {
  constructor() {
    super();
    ot(this, "_menu");
    this.items = [];
  }
  render() {
    var n;
    return console.log("rendering menu", this.anchorSelector), (n = this._menu) == null || n.$destroy(), this._menu = new mb({
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
ot(Rn, "styles", [vb.target, wb]);
li([
  ze({ attribute: "items", type: Array })
], Rn.prototype, "items", 2);
li([
  ze({ attribute: "closeonclick", type: Boolean })
], Rn.prototype, "closeOnClick", 2);
li([
  ze({ attribute: "container$class", type: String })
], Rn.prototype, "container$class", 2);
li([
  ze({ attribute: "anchorselector", type: String })
], Rn.prototype, "anchorSelector", 2);
const yb = si, Sb = lb;
function Ov() {
  _r("audako-entity-select", yb), _r("audako-tenant-select", Sb), _r("audako-select", ft), _r("audako-menu", Rn), Ne(ct, new ct()).createTwindContext(!0);
}
function Mv(t, e) {
  const n = new Xt(t, e);
  pt(lo, new lo(t, e)), pt(Xt, n), pt(zn, new zn(t, e)), pt(Vn, new Vn(n)), pt(so, new so(t, e)), pt(Zl, new Zl()), pt(al, new al(t, e)), pt(el, new el(t, e));
}
function _r(t, e, n) {
  customElements.get(t) || customElements.define(t, e, n);
}
export {
  Di as AlarmTrigger,
  Hu as AlarmingPlan,
  xn as BaseHttpService,
  ds as BatchAction,
  Tu as BatchDefinition,
  Au as BatchReleaseSettings,
  D_ as BatchReportExportSettings,
  O_ as BatchReviewDefinition,
  xu as BatchReviewSettings,
  bv as BatchTrigger,
  R_ as BatchValueObject,
  ji as BitSelectConversionTypes,
  Ou as Camera,
  nv as CameraImage,
  Cs as CameraImageType,
  Ss as CameraViewMode,
  Jb as ChangeRateMonitoringSettings,
  Ab as CheckboxFieldSettings,
  Is as CompressionInterval,
  Wi as CompressionType,
  P_ as ConditionEventEntry,
  We as ConditionSettings,
  mv as ConditionTrigger,
  Z as ConfigurationEntity,
  Bb as ConnectionFailureConditionSettings,
  Cu as Connector,
  x_ as ConnectorObject,
  fs as ConnectorObjectAccessLevel,
  us as ConnectorObjectType,
  A_ as ConnectorRestApiCredential,
  T_ as ConnectorRestApiSettings,
  cs as ConnectorType,
  Eu as ConnectorTypedSettings,
  Hb as CounterConditionSettings,
  kv as CounterOffset,
  Ot as CustomFieldSettings,
  $b as CustomMappingFieldSettings,
  pv as CyclicTrigger,
  uu as Dashboard,
  fu as DashboardTab,
  Nb as DashboardTabEntity,
  Fb as DashboardTabPlaceholder,
  bu as DataConnection,
  i_ as DataConnectionBacnetSettings,
  w_ as DataConnectionCsvImporterSettings,
  c_ as DataConnectionEhWebserverSettings,
  jb as DataConnectionFailureConditionSettings,
  y_ as DataConnectionFtpParserSettings,
  r_ as DataConnectionIEC104Settings,
  a_ as DataConnectionIot2000ModuleSettings,
  l_ as DataConnectionKnxSettings,
  v_ as DataConnectionLoRaWANSettings,
  p_ as DataConnectionMeterBusSettings,
  n_ as DataConnectionModbusSettings,
  f_ as DataConnectionModemInfoSettings,
  d_ as DataConnectionMqttSettings,
  g_ as DataConnectionMtmAdapterSettings,
  b_ as DataConnectionOTTDataLoggerSettings,
  h_ as DataConnectionOneWireSettings,
  Ui as DataConnectionOpcUaSecurityAuthentication,
  Ni as DataConnectionOpcUaSecurityMode,
  Fi as DataConnectionOpcUaSecurityPolicy,
  t_ as DataConnectionOpcUaSettings,
  Li as DataConnectionOpcUaStringEncoding,
  Hi as DataConnectionOpcUaTimestampSource,
  e_ as DataConnectionS7Settings,
  fe as DataConnectionSettings,
  o_ as DataConnectionSimulationSettings,
  u_ as DataConnectionSnmpSettings,
  Mi as DataConnectionSpecialDeviceProfile,
  __ as DataConnectionTeltonikaGPSSettings,
  ss as DataConnectionType,
  fe as DataConnectionTypedSettings,
  s_ as DataConnectionUniversalSettings,
  m_ as DataConnectionYDOCDataLoggerSettings,
  gu as DataSource,
  so as DataSourceHttpService,
  Oi as DataSourceType,
  xb as DateFieldSettings,
  Qb as DifferenceMonitoringSettings,
  $u as Document,
  ov as EmailContact,
  Rb as EntityFieldSettings,
  lu as EntityHttpEndpoints,
  Xt as EntityHttpService,
  Eb as EntityIcons,
  Vn as EntityNameService,
  is as EntityObjectOrientationAttribute,
  yb as EntitySelect,
  Zl as EntitySelectDialogService,
  L as EntityType,
  Wu as EntityTypeClassMapping,
  vv as EntityUtils,
  _a as EventAction,
  hu as EventCategory,
  $i as EventCategoryClass,
  pu as EventCondition,
  Fe as EventConditionSettingsType,
  du as EventDefinition,
  gs as EventEntityType,
  U_ as EventReport,
  Pu as EventReportSettings,
  gv as EventTrigger,
  ps as EventTriggerState,
  Ub as ExpressionParameter,
  h as Field,
  rs as FieldObjectOrientationAttribute,
  tv as FileEntry,
  yu as Formula,
  Wi as FormulaCompressionType,
  dt as FormulaIntervalSettings,
  Su as FormulaNumericSettings,
  Gi as FormulaType,
  Ji as FormulaValueType,
  k_ as FormulaVariable,
  ks as Gender,
  cu as Group,
  Ev as HistoricalValue,
  Tv as HistoricalValueObject,
  al as HistoricalValueService,
  ll as LiveHubEvent,
  Ln as LiveHubMethod,
  lo as LiveValueService,
  L_ as MailEventAction,
  Bu as MaintenanceService,
  Wb as MaximumMonitoringSettings,
  $_ as MetadataField,
  ms as MetadataFieldType,
  bs as MetadataSource,
  Bi as MeterBusMode,
  Vb as MinimumMonitoringSettings,
  kb as NumberFieldSettings,
  Zb as ObjectSettings,
  Rs as ObjectUtils,
  Or as OperationStatus,
  Db as PartList,
  qb as PeriodMaximumMonitoringSettings,
  Gb as PeriodMaximumMonitoringSettingsPeriod,
  mu as PermaLiveModeSettings,
  wa as PhoneBasedContact,
  Kb as PlausibilityMonitoringSettings,
  Xb as PositionMonitoringSettings,
  ku as ProcessImage,
  Ob as PropertyGroup,
  uv as PushoverContact,
  Uu as Recipient,
  Qn as RecipientContact,
  Lu as RecipientGroup,
  fv as RecipientGroupMember,
  Yb as RecordingFailureMonitoringSettings,
  Vi as RecordingSpecialProcessingType,
  Bn as RecordingType,
  Ru as Report,
  F_ as ReportCaptionElement,
  ws as ReportColumnType,
  qr as ReportElement,
  Gr as ReportElementSettings,
  Xi as ReportEngineType,
  q_ as ReportField,
  G_ as ReportFieldSettings,
  j_ as ReportGroup,
  z_ as ReportGroupSettings,
  N_ as ReportItemElement,
  vs as ReportItemElementType,
  V_ as ReportList,
  W_ as ReportListSettings,
  M_ as ReportObject,
  B_ as ReportParameterDefinition,
  ys as ReportParameterType,
  Q_ as ReportSettings,
  _s as ReportStorageType,
  J_ as ReportTable,
  va as ReportTableElement,
  X_ as ReportTableEntry,
  Y_ as ReportTableHeader,
  K_ as ReportTableSettings,
  Iu as ReportTemplate,
  Yi as ReportTimeStepSize,
  ba as ReportTypedElement,
  Nu as Role,
  zu as RuntimeScript,
  xs as ScriptBatchTriggerState,
  As as ScriptConditionTriggerState,
  Ts as ScriptEventTriggerState,
  Jr as ScriptTrigger,
  Ib as SelectFieldSettings,
  Pi as SelectFieldType,
  _u as Signal,
  zi as SignalAnalogSettings,
  ma as SignalCompressionSettings,
  re as SignalCompressionType,
  Lb as SignalConditionSettings,
  os as SignalConditionSettingsOperator,
  wu as SignalCounterSettings,
  ls as SignalDigitalSettings,
  vu as SignalOutputSettings,
  ga as SignalRecordingSettings,
  Co as SignalSettings,
  et as SignalType,
  S_ as SignalTypeSettingsMap,
  sv as SmsContact,
  hv as StaticScriptVariable,
  dv as StepDefinition,
  Du as Storage,
  ev as StorageEntry,
  H_ as StorageEventAction,
  Mr as SubscriptionPrefix,
  iv as SwitchOperation,
  rv as SwitchRule,
  Mu as SwitchSchedule,
  Es as SwitchType,
  Ki as TagScope,
  ju as TaskDefinition,
  cv as TeamsContact,
  av as TelegramContact,
  Mb as TemplateVariable,
  zn as TenantHttpService,
  Sb as TenantSelect,
  Vu as TenantView,
  Tb as TextAreaFieldSettings,
  au as TextFieldSettings,
  zb as TimebasedConditionSettings,
  Ri as TranslatableField,
  I_ as TriggerDefinition,
  hs as TriggerType,
  Fu as User,
  Pb as UserFieldSettings,
  _v as UserProfile,
  el as UserProfileHttpService,
  Qi as UserRegistrationStates,
  as as ValueIntervalType,
  qi as VariableType,
  lv as VoipContact,
  It as getAsyncValueAsPromise,
  E_ as getDefaultCompressionSettingsBySignalType,
  C_ as getDefaultRecordingSettingsBySignalType,
  yv as isNullOrEmpty,
  ya as isNullOrUndefined,
  Sv as isNullOrWhitespace,
  Mv as registerCoreServices,
  Ov as registerCustomElements,
  Ne as resolveService,
  Av as setGlobalDependencyContainer,
  wv as tryCatch,
  pt as tryRegisterService
};
