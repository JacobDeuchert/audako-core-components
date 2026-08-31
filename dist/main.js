//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), r;
(function(e) {
	e.Group = "Group", e.Signal = "Signal", e.Formula = "Formula", e.Dashboard = "Dashboard", e.DashboardTab = "DashboardTab", e.DataConnection = "DataConnection", e.DataSource = "DataSource", e.Connector = "Connector", e.EventCondition = "EventCondition", e.EventDefinition = "EventDefinition", e.EventCategory = "EventCategory", e.ProcessImage = "ProcessImage", e.BatchDefinition = "BatchDefinition", e.ReportTemplate = "ReportTemplate", e.Report = "Report", e.Document = "Document", e.Storage = "Storage", e.Camera = "Camera", e.SwitchSchedule = "SwitchSchedule", e.User = "User", e.Role = "Role", e.Recipient = "Recipient", e.RecipientGroup = "RecipientGroup", e.AlarmingPlan = "AlarmingPlan", e.MaintenanceService = "MaintenanceService", e.TaskDefinition = "TaskDefinition", e.RuntimeScript = "RuntimeScript";
})(r ||= {});
var i = {
	[r.Group]: "mat folder",
	[r.Dashboard]: "adk adk-dashboard",
	[r.Signal]: "mat code",
	[r.Formula]: "mat timeline",
	[r.DataConnection]: "mat data_usage",
	[r.DataSource]: "mat storage"
}, a = {
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
}, o;
(function(e) {
	e.Locked = "Locked", e.Overwritten = "Overwritten", e.FillInVariables = "FillInVariables", e.ResolveRelative = "ResolveRelative";
})(o ||= {});
var s;
(function(e) {
	e.Locked = "Locked", e.Overwritten = "Overwritten";
})(s ||= {});
var c = class {
	constructor(e = null, t = []) {
		this.Value = e, this.OOAttributes = t;
	}
	static isField(e) {
		return e && e.Value !== void 0;
	}
}, l = class extends c {
	constructor(e = null, t = []) {
		super(e, t), this.Translations = {};
	}
}, u = class {
	constructor(e) {
		this.Name = new l(), this.Alias = new c(), this.Description = new l(), this.Tags = new c([]), this.Version = 0, this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = /* @__PURE__ */ new Date(), this.ChangedBy = null, this.ChangedOn = null, this.MaintenanceMode = !1, this.IsInstanceOf = null, this.IsTemplate = !1, this.OOAttributes = [], Object.assign(this, e);
	}
}, d;
(function(e) {
	e.RadioBox = "RadioBox", e.DropDown = "DropDown";
})(d ||= {});
var f = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.DefaultValue = null, this.Multiple = !1;
	}
}, p = class extends f {
	constructor() {
		super("NumberFieldSettings"), this.DecimalPlaces = null, this.Unit = null, this.Min = null, this.Max = null, this.StepSize = null;
	}
}, m = class extends f {
	constructor(e = "TextFieldSettings") {
		super(e), this.MaxLength = null, this.ValidationRegex = null, this.Multiline = !1;
	}
}, h = class extends m {
	constructor() {
		super("TextAreaFieldSettings"), this.Multiline = !0;
	}
}, g = class extends f {
	constructor() {
		super("CheckboxFieldSettings");
	}
}, _ = class extends f {
	constructor() {
		super("DateFieldSettings");
	}
}, v = class extends f {
	constructor() {
		super("SelectFieldSettings"), this.PossibleValues = [], this.Type = d.DropDown;
	}
}, y = class extends f {
	constructor() {
		super("EntityFieldSettings"), this.EntityType = null;
	}
}, b = class extends f {
	constructor() {
		super("UserFieldSettings");
	}
}, x = class extends f {
	constructor() {
		super("CustomMappingFieldSettings"), this.CustomMappingId = null;
	}
}, S = class extends u {
	constructor() {
		super(), this.Type = "Default", this.IsEntryPoint = !1, this.PartGroups = [], this.PropertyGroups = [], this.OOVariables = {}, this.TemplateVariables = [];
	}
}, ee = class {}, te = class {}, ne = class {}, re = class extends u {}, ie = class extends u {
	constructor() {
		super(), this.DashboardId = new c(), this.Content = new c(), this.MasterTabId = new c(), this.EntityMappings = new c(), this.PlaceholderDefinition = new c(), this.PlaceholderValues = new c();
	}
}, ae = class {}, oe = class {}, se = class extends u {
	constructor() {
		super(), this.Enabled = new c(!0), this.EventCategoryId = new c(), this.ExpressionParameters = [], this.EventExpression = new c();
	}
}, ce = class {
	constructor() {
		this.Type = new c(), this.ParameterId = new c(), this.ConditionId = new c();
	}
}, C;
(function(e) {
	e.CriticalAlarm = "CriticalAlarm", e.MajorAlarm = "MajorAlarm", e.MinorAlarm = "MinorAlarm", e.WarningAlarm = "WarningAlarm", e.InformationalAlarm = "InformationalAlarm", e.IndeterminateAlarm = "IndeterminateAlarm", e.Info = "Info", e.Warning = "Warning", e.Error = "Error";
})(C ||= {});
var le;
(function(e) {
	e[e.OnRaised = 1] = "OnRaised", e[e.OnDropped = 2] = "OnDropped";
})(le ||= {});
var ue = class extends u {
	constructor() {
		super(), this.Class = new c(C.Info), this.RequiresAcknowledgment = new c(!0), this.NoRepeatUntilAcknowledged = new c(!1), this.AlarmOn = new c(le.OnRaised);
	}
}, de = class extends u {
	constructor() {
		super(), this.Enabled = new c(!0);
	}
}, fe;
(function(e) {
	e.SignalConditionSettings = "SignalConditionSettings", e.MinimumMonitoringSettings = "MinimumMonitoringSettings", e.MaximumMonitoringSettings = "MaximumMonitoringSettings", e.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", e.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", e.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", e.PositionMonitoringSettings = "PositionMonitoringSettings", e.CounterConditionSettings = "CounterConditionSettings", e.TimebasedConditionSettings = "TimebasedConditionSettings", e.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", e.DataConnectionFailure = "DataConnectionFailure", e.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", e.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
})(fe ||= {});
var pe;
(function(e) {
	e.Equal = "Equal", e.GreaterThan = "GreaterThan", e.GreaterThanOrEqual = "GreaterThanOrEqual", e.LessThan = "LessThan", e.LessThanOrEqual = "LessThanOrEqual", e.NotEqual = "NotEqual";
})(pe ||= {});
var w = class {
	constructor(e) {
		this._t = e;
	}
}, me = class extends w {
	constructor() {
		super(fe.SignalConditionSettings), this.InConditionOperator = new c(), this.OutConditionOperator = new c(), this.InConditionValue = new c(), this.OutConditionValue = new c(), this.InDelay = new c(), this.OutDelay = new c(), this.SignalId = new c();
	}
}, he = class extends w {
	constructor() {
		super(fe.CounterConditionSettings), this.SignalId = new c(), this.Value = new c(), this.StartValue = new c(), this.StartDate = new c(), this.DelayedTriggeringEnabled = new c(!1);
	}
}, ge = class extends w {
	constructor() {
		super(fe.ConnectionFailureConditionSettings), this.MaxOfflineTime = new c(), this.DataSourceId = new c();
	}
}, _e = class extends w {
	constructor() {
		super(fe.DataConnectionFailure), this.MaxOfflineTime = new c(), this.DataConnectionId = new c();
	}
}, ve = class extends w {
	constructor() {
		super(fe.TimebasedConditionSettings), this.DelayedTriggeringEnabled = !1, this.TriggerMissedOnAdd = !1, this.SubsequentTriggeringEnabled = !1;
	}
}, ye = class extends w {
	constructor() {
		super(fe.MinimumMonitoringSettings);
	}
}, be = class extends w {
	constructor() {
		super(fe.MaximumMonitoringSettings);
	}
}, xe = class extends w {
	constructor() {
		super(fe.PeriodMaximumMonitoringSettings), this.Periods = [];
	}
}, Se = class {}, Ce = class extends w {
	constructor() {
		super(fe.ChangeRateMonitoringSettings);
	}
}, we = class extends w {
	constructor() {
		super(fe.PlausibilityMonitoringSettings);
	}
}, Te = class extends w {
	constructor() {
		super(fe.PositionMonitoringSettings);
	}
}, Ee = class extends w {
	constructor() {
		super(fe.RecordingFailureMonitoringSettings), this.SignalId = new c(null), this.MaxOutageTime = new c(6e4);
	}
}, De = class extends w {
	constructor() {
		super(fe.DifferenceMonitoringSettings);
	}
}, Oe = class {}, ke;
(function(e) {
	e.EdgeGateway = "EdgeGateway", e.DataAdapter = "DataAdapter", e.SmartDevice = "SmartDevice";
})(ke ||= {});
var Ae = class extends u {
	constructor() {
		super(), this.Address = new c(null), this.Password = new c(null), this.Type = new c(ke.EdgeGateway), this.PermaLiveModeSettings = new je(), this.Settings = {};
	}
}, je = class {
	constructor() {
		this.Enabled = new c(!1), this.BlockingTime = new c(10);
	}
}, Me;
(function(e) {
	e.S7 = "S7", e.OpcUa = "OpcUa", e.Modbus = "Modbus", e.Universal = "Universal", e.Simulation = "Simulation", e.Knx = "Knx", e.Iot2000Module = "Iot2000Module", e.ModemInfo = "ModemInfo", e.MtmAdapter = "MtmAdapter", e.YDOCDataLogger = "YDOCDataLogger", e.OTTDataLogger = "OTTDataLogger", e.TeltonikaGPSTracker = "TeltonikaGPSTracker", e.LoRaWAN = "LoRaWAN", e.CsvImporter = "CsvImporter", e.IEC104 = "IEC104", e.BACnet = "BACnet", e.EhWebserver = "EhWebserver", e.FtpParser = "FtpParser", e.Snmp = "Snmp", e.Mqtt = "Mqtt", e.OneWire = "OneWire", e.MeterBus = "MeterBus";
})(Me ||= {});
var Ne;
(function(e) {
	e.None = "None", e.JUMO = "JUMO";
})(Ne ||= {});
var Pe = class extends u {
	constructor() {
		super(), this.DataSourceId = new c(null), this.Type = new c(null), this.Settings = null, this.SpecialDeviceProfile = new c(Ne.None), this.InactivityTimeout = new c(null), this.PollingInterval = new c(null);
	}
}, T = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Fe = class extends T {
	constructor() {
		super("DataConnectionS7Settings"), this.Host = new c(null), this.Port = new c(502), this.Rack = new c(0), this.Slot = new c(2), this.Timeout = new c(5e3), this.LocalTSAP = new c(null), this.RemoteTSAP = new c(null);
	}
}, Ie;
(function(e) {
	e.None = "None", e.Basic128Rsa15 = "Basic128Rsa15", e.Basic256 = "Basic256", e.Basic256Sha256 = "Basic256Sha256";
})(Ie ||= {});
var Le;
(function(e) {
	e.None = "None", e.Sign = "Sign", e.SignAndEncrypt = "SignAndEncrypt";
})(Le ||= {});
var Re;
(function(e) {
	e.Anonymous = "Anonymous", e.Credentials = "Credentials", e.Certificate = "Certificate";
})(Re ||= {});
var ze;
(function(e) {
	e.ASCII = "ASCII", e.UTF7 = "UTF7", e.UTF8 = "UTF8", e.Unicode = "Unicode", e.UTF32 = "UTF32";
})(ze ||= {});
var Be;
(function(e) {
	e.Connection = "Connection", e.EdgeGateway = "EdgeGateway";
})(Be ||= {});
var Ve = class extends T {
	constructor() {
		super("DataConnectionOpcUaSettings"), this.Url = new c(null), this.SecurityPolicy = new c(Ie.None), this.SecurityMode = new c(Le.None), this.SecurityAuthentication = new c(Re.Anonymous), this.Username = new c(null), this.Password = new c(null), this.Certificate = new c(null), this.PrivateKey = new c(null), this.PublishingInterval = new c(1e3), this.SamplingInterval = new c(1e3), this.QueueSize = new c(-1), this.Timeout = new c(5e3), this.StringEncoding = new c(ze.UTF8), this.TimestampSource = new c(Be.Connection);
	}
}, He = class extends T {
	constructor() {
		super("DataConnectionModbusSettings"), this.Host = new c(null), this.Port = new c(502);
	}
}, Ue = class extends T {
	constructor() {
		super("DataConnectionIEC104Settings"), this.Host = new c(null), this.Port = new c(2404), this.OriginatorAddress = new c(0), this.TimeSyncInterval = new c(720), this.GeneralInterrogationInterval = new c(60), this.CounterInterrogationInterval = new c(60), this.CommonAddressFieldLength = new c(2), this.CotFieldLength = new c(2), this.IoaFieldLength = new c(3), this.MaxIdleTime = new c(2e4), this.MaxTimeNoAckReceived = new c(15e3), this.MaxTimeNoAckSent = new c(1e4), this.MaxUnconfirmedIPdusReceived = new c(8), this.MaxNumOfOutstandingIPdus = new c(12), this.MessageFragmentTimeout = new c(5e3);
	}
}, We = class extends T {
	constructor() {
		super("DataConnectionBacnetSettings"), this.Port = new c(47808), this.Interface = new c(null), this.BroadcastAddress = new c(null), this.ApduTimeout = new c(6e3);
	}
}, Ge = class extends T {
	constructor() {
		super("DataConnectionSimulationSettings"), this.ScriptPath = new c(null), this.ScriptCycle = new c(500);
	}
}, Ke = class extends T {
	constructor() {
		super("DataConnectionUniversalSettings"), this.DriverPath = new c(null);
	}
}, qe = class extends T {
	constructor() {
		super("DataConnectionKnxSettings"), this.Host = new c(null), this.Port = new c(null), this.Interface = new c(null), this.PhysicalAddress = new c("15.15.15"), this.ForceTunneling = new c(!1), this.MinimumDelay = new c(null), this.SuppressAckLDataReq = new c(!1);
	}
}, Je = class extends T {
	constructor() {
		super("DataConnectionIot2000ModuleSettings"), this.MLFB = new c(null);
	}
}, Ye = class extends T {
	constructor() {
		super("DataConnectionEhWebserverSettings"), this.Host = new c(null), this.AccessCode = new c("0000");
	}
}, Xe = class extends T {
	constructor() {
		super("DataConnectionSnmpSettings"), this.Host = new c(null), this.Port = new c(161), this.Timeout = new c(5e3), this.Community = new c(null);
	}
}, Ze = class extends T {
	constructor() {
		super("DataConnectionModemInfoSettings");
	}
}, Qe = class extends T {
	constructor() {
		super("DataConnectionMqttSettings"), this.Url = new c(null), this.Username = new c(null), this.Password = new c(null);
	}
}, $e = class extends T {
	constructor() {
		super("DataConnectionOneWireSettings"), this.Host = new c("localhost"), this.Port = new c(4304);
	}
}, et;
(function(e) {
	e.serial = "serial", e.tcp = "tcp";
})(et ||= {});
var tt = class extends T {
	constructor() {
		super("DataConnectionMeterBusSettings"), this.Mode = new c(et.tcp), this.HostOrSerialPort = new c(null), this.Port = new c(0), this.BaudRate = new c(2400), this.Timeout = new c(5e3);
	}
}, nt = class extends T {
	constructor() {
		super("DataConnectionMtmAdapterSettings"), this.TimeoutTime = new c(120), this.KeepAliveTime = new c(null), this.Username = new c(null), this.Password = new c(null);
	}
}, rt = class extends T {
	constructor() {
		super("DataConnectionYDOCDataLoggerSettings"), this.DeviceId = new c(null), this.Username = new c(null), this.Password = new c(null);
	}
}, it = class extends T {
	constructor() {
		super("DataConnectionOTTDataLoggerSettings"), this.Station = new c(null), this.Password = new c(null);
	}
}, at = class extends T {
	constructor() {
		super("DataConnectionTeltonikaGPSSettings"), this.Address = new c(null);
	}
}, ot = class extends T {
	constructor() {
		super("DataConnectionLoRaWANSettings"), this.DeviceType = new c(null), this.DeviceEUI = new c(null), this.DeviceConfiguration = new c(null);
	}
}, st = class extends T {
	constructor() {
		super("DataConnectionCsvImporterSettings"), this.Address = new c(null);
	}
}, ct = class extends T {
	constructor() {
		super("DataConnectionFtpParserSettings"), this.ParserType = new c(null), this.ConnectionType = new c(null), this.Address = new c(null), this.Port = new c(21), this.Username = new c(null), this.Password = new c(null), this.ValidateCertificate = new c(!1), this.FileDirectory = new c(null), this.EncryptionMode = new c(null), this.RequestInterval = new c(0), this.DeleteReadFiles = new c(!1);
	}
}, lt;
(function(e) {
	e.AnalogInput = "AnalogInput", e.AnalogInOut = "AnalogInOut", e.DigitalInput = "DigitalInput", e.DigitalInOut = "DigitalInOut", e.Counter = "Counter", e.UniversalInput = "UniversalInput", e.UniversalInOut = "UniversalInOut";
})(lt ||= {});
var ut = class extends u {
	constructor() {
		super(), this.Type = new c(lt.AnalogInput), this.DataConnectionId = new c(), this.Address = new c(), this.Settings = new ht(), this.OutputSettings = new dt(), this.RecordingSettings = new bt(), this.CompressionSettings = new St();
	}
}, dt = class {
	constructor() {
		this.AutoresetEnabled = new c(!1), this.AutoresetValue = new c(0), this.AutoresetDelay = new c(3);
	}
}, ft;
(function(e) {
	e.None = "None", e.SByte = "SByte", e.Short = "Short", e.Int = "Int";
})(ft ||= {});
var pt = class {
	constructor(e) {
		this._t = e;
	}
}, mt = class extends pt {
	constructor() {
		super("SignalDigitalSettings"), this.DigitalTrueColor = new c(), this.DigitalTrueCaption = new c(), this.DigitalFalseColor = new c(), this.DigitalFalseCaption = new c(), this.Invert = new c(!1), this.BitSelect = new c(), this.BitSelectConversion = new c(ft.None);
	}
}, ht = class extends pt {
	constructor() {
		super("SignalAnalogSettings"), this.MinValue = new c(0), this.MaxValue = new c(100), this.DefaultValue = new c(null), this.DecimalPlaces = new c(0), this.Unit = new c(), this.Factor = new c(1), this.Offset = new c(0);
	}
}, gt = class extends pt {
	constructor() {
		super("SignalCounterSettings"), this.MaxValue = new c(100), this.OffsetAutomatic = new c(!0), this.OffsetDetection = new c(!0), this.DecimalPlaces = new c(0), this.Unit = new c(), this.Factor = new c(1), this.Offset = new c(0);
	}
}, _t = {
	AnalogInput: ht,
	AnalogInOut: ht,
	DigitalInput: mt,
	DigitalInOut: mt,
	Counter: gt,
	UniversalInput: null,
	UniversalInOut: null
}, vt;
(function(e) {
	e.None = "None", e.LiveFlowMeter = "LiveFlowMeter", e.Watchdog = "Watchdog";
})(vt ||= {});
var yt;
(function(e) {
	e.MeanValue = "MeanValue", e.LastValue = "LastValue";
})(yt ||= {});
var bt = class {
	constructor() {
		this.SpecialProcessingType = new c(vt.None), this.Type = new c(yt.MeanValue), this.Interval = new c(300);
	}
};
function xt(e) {
	let t = new bt();
	return e === lt.AnalogInput || e === lt.AnalogInOut ? t.Type.Value = yt.MeanValue : (e === lt.Counter || e === lt.DigitalInput || e === lt.DigitalInOut) && (t.Type.Value = yt.LastValue), t;
}
var E;
(function(e) {
	e.None = "None", e.WeightedMean = "WeightedMean", e.ArithmeticMean = "ArithmeticMean", e.Difference = "Difference", e.Sum = "Sum", e.Time = "Time", e.Text = "Text";
})(E ||= {});
var St = class {
	constructor() {
		this.Timezones = new c(), this.Timezones = new c([]), this.SubIntervalCompressionType = new c(E.None), this.HourIntervalCompressionType = new c(E.None), this.TwoHourIntervalCompressionType = new c(E.None), this.DayIntervalCompressionType = new c(E.None), this.WeekIntervalCompressionType = new c(E.None), this.MonthIntervalCompressionType = new c(E.None), this.QuarterIntervalCompressionType = new c(E.None), this.YearIntervalCompressionType = new c(E.None);
	}
};
function Ct(e) {
	let t = new St();
	return e === lt.AnalogInput || e === lt.AnalogInOut ? (t.SubIntervalCompressionType.Value = E.ArithmeticMean, t.HourIntervalCompressionType.Value = E.ArithmeticMean, t.TwoHourIntervalCompressionType.Value = E.ArithmeticMean, t.DayIntervalCompressionType.Value = E.ArithmeticMean, t.WeekIntervalCompressionType.Value = E.ArithmeticMean, t.MonthIntervalCompressionType.Value = E.ArithmeticMean, t.QuarterIntervalCompressionType.Value = E.ArithmeticMean, t.YearIntervalCompressionType.Value = E.ArithmeticMean) : e === lt.Counter && (t.SubIntervalCompressionType.Value = E.Sum, t.HourIntervalCompressionType.Value = E.Sum, t.TwoHourIntervalCompressionType.Value = E.Sum, t.DayIntervalCompressionType.Value = E.Sum, t.WeekIntervalCompressionType.Value = E.Difference, t.MonthIntervalCompressionType.Value = E.Difference, t.QuarterIntervalCompressionType.Value = E.Difference, t.YearIntervalCompressionType.Value = E.Difference), t;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entities/formula.model.js
var wt = class extends u {
	constructor() {
		super(), this.Variables = [], this.Type = new c(jt.Numeric), this.SignalId = new c(null), this.CalculateOnlyWithFullVariableSet = new c(!1), this.NumericSettings = new Tt(), this.ProcessIntervalSettings = new Dt(), this.SubIntervalSettings = new Dt(), this.HourIntervalSettings = new Dt(), this.TwoHourIntervalSettings = new Dt(), this.DayIntervalSettings = new Dt(), this.WeekIntervalSettings = new Dt(), this.MonthIntervalSettings = new Dt(), this.QuarterIntervalSettings = new Dt(), this.YearIntervalSettings = new Dt();
	}
}, Tt = class {
	constructor() {
		this.DecimalPlaces = new c(0), this.Unit = new c(null);
	}
}, Et = class {
	constructor() {
		this.ValueType = new c(Mt.Normal), this.VariableName = new c(null), this.ObjectId = new c(null), this.ObjectType = new c(At.Signal), this.TagScope = new c(Nt.Global);
	}
}, Dt = class {
	constructor() {
		this.Formula = new c(null), this.ValueIntervalType = new c(null), this.CompressionType = new c(kt.ArithmeticMean), this.ProvidePreValues = new c(!1), this.ProvideLastValues = new c(!1);
	}
}, Ot;
(function(e) {
	e.Standard = "Standard", e.ProcessInterval = "ProcessInterval", e.SubInterval = "SubInterval", e.HourInterval = "HourInterval", e.TwoHourInterval = "TwoHourInterval", e.DayInterval = "DayInterval", e.WeekInterval = "WeekInterval", e.MonthInterval = "MonthInterval", e.QuarterInterval = "QuarterInterval", e.YearInterval = "YearInterval";
})(Ot ||= {});
var kt;
(function(e) {
	e.ArithmeticMean = "ArithmeticMean", e.Sum = "Sum";
})(kt ||= {});
var At;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula", e.Tag = "Tag";
})(At ||= {});
var jt;
(function(e) {
	e.Numeric = "Numeric", e.Universal = "Universal";
})(jt ||= {});
var Mt;
(function(e) {
	e.Normal = "Normal", e.Minimum = "Minimum", e.Maximum = "Maximum";
})(Mt ||= {});
var Nt;
(function(e) {
	e.Global = "Global", e.Tenant = "Tenant", e.Group = "Group", e.GroupAndSubGroups = "GroupAndSubGroups";
})(Nt ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entities/connector.model.js
var Pt;
(function(e) {
	e.RestApi = "RestApi";
})(Pt ||= {});
var Ft = class extends u {
	constructor() {
		super(), this.Type = new c(), this.Objects = [];
	}
}, It = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Lt = class extends It {
	constructor() {
		super("ConnectorRestApiSettings"), this.Credentials = [];
	}
}, Rt = class {
	constructor() {
		this.ClientId = new c(), this.ClientSecret = new c();
	}
}, zt;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula", e.Group = "Group", e.EventCategory = "EventCategory", e.BatchDefinition = "BatchDefinition";
})(zt ||= {});
var Bt;
(function(e) {
	e.Read = "Read", e.ReadWrite = "ReadWrite", e.Write = "Write";
})(Bt ||= {});
var Vt = class {
	constructor() {
		this.ObjectName = new c(), this.ObjectType = new c(), this.ObjectId = new c(), this.AccessLevel = new c();
	}
}, Ht = class extends u {
	constructor() {
		super(), this.ImageFile = new c();
	}
}, Ut;
(function(e) {
	e.Start = "Start", e.Stop = "Stop", e.Release = "Release";
})(Ut ||= {});
var Wt;
(function(e) {
	e.EventDefinition = "EventDefinition", e.Condition = "Condition", e.Manual = "Manual";
})(Wt ||= {});
var Gt;
(function(e) {
	e.Raised = "Raised", e.Dropped = "Dropped";
})(Gt ||= {});
var Kt;
(function(e) {
	e.EventDefinition = "EventDefinition", e.Condition = "Condition";
})(Kt ||= {});
var qt;
(function(e) {
	e.NumberField = "NumberField", e.TextField = "TextField", e.BooleanField = "BooleanField", e.SelectField = "SelectField", e.DateField = "DateField", e.CustomMappingField = "CustomMappingField", e.UserField = "UserField", e.TextAreaField = "TextAreaField", e.CheckboxField = "CheckboxField";
})(qt ||= {});
var Jt;
(function(e) {
	e.Manual = "Manual", e.Signal = "Signal", e.Incremental = "Incremental";
})(Jt ||= {});
var Yt = class extends u {
	constructor() {
		super(), this.ParallelBatchesEnabled = !1, this.BatchTriggers = [], this.MetadataFields = {}, this.BatchValueObjects = [], this.ConditionEventEntries = [], this.BatchReportIds = [], this.BatchReportExportSettings = [], this.BatchReviewSettings = new nn(), this.ReleaseSettings = new Zt();
	}
}, Xt = class {}, Zt = class {
	constructor() {
		this.Enabled = !1, this.SignalId = null, this.ReleaseValue = null;
	}
}, Qt = class {}, $t = class {}, en = class {}, tn = class {}, nn = class {
	constructor() {
		this.Enabled = !1, this.Reviews = [], this.Ordered = !1;
	}
}, rn = class {}, an;
(function(e) {
	e.WYSIWYG = "WYSIWYG", e.JsTemplate = "JsTemplate";
})(an ||= {});
var on;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(on ||= {});
var sn = class extends u {
	constructor() {
		super(), this.ScriptFile = new c(), this.TemplateFile = new c(), this.EngineType = new c(an.JsTemplate), this.DefaultStepSize = new c(on.Day);
	}
}, cn;
(function(e) {
	e.PDF = "PDF", e.CSV = "CSV", e.XLSX = "XLSX", e.DOCX = "DOCX", e.PNG = "PNG", e.JPG = "JPG";
})(cn ||= {});
var ln;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(ln ||= {});
var un;
(function(e) {
	e.AVG = "AVG", e.SUM = "SUM", e.MIN = "MIN", e.MAX = "MAX";
})(un ||= {});
var dn;
(function(e) {
	e.TextBox = "TextBox", e.NumberBox = "NumberBox", e.RadioList = "RadioList", e.SelectList = "SelectList", e.Signal = "Signal", e.CheckBox = "CheckBox";
})(dn ||= {});
var fn = class extends u {
	constructor() {
		super(), this.Title = new c(), this.Parameters = new c(), this.Elements = new c({}), this.Templates = new c([]), this.TimeZone = new c("CET"), this.EventReportSettings = new c(new _n());
	}
}, pn = class {}, mn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.Caption = new c(), this.Alias = new c(), this.Parameters = new c();
	}
}, hn = class extends mn {
	constructor() {
		super("ReportCaptionElement"), this.Elements = [];
	}
}, gn = class extends mn {
	constructor() {
		super("ReportItemElement"), this.Type = new c(), this.ObjectType = new c(), this.ObjectId = new c();
	}
}, _n = class {
	constructor() {
		this.EventReports = [];
	}
}, vn = class {
	constructor() {
		this.Actions = [];
	}
}, yn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, bn = class extends yn {
	constructor() {
		super("MailEventAction");
	}
}, xn = class extends yn {
	constructor() {
		super("StorageEventAction");
	}
}, Sn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Cn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, wn = class {}, Tn = class extends Sn {
	constructor() {
		super("ReportGroup"), this.GroupElements = {};
	}
}, En = class extends Cn {
	constructor() {
		super("ReportGroupSettings"), this.GroupElementSettings = {};
	}
}, Dn = class extends Sn {
	constructor() {
		super("ReportList"), this.ListEntries = [];
	}
}, On = class extends Cn {
	constructor() {
		super("ReportListSettings");
	}
}, kn = class extends Sn {
	constructor() {
		super("ReportField");
	}
}, An = class extends Cn {
	constructor() {
		super("ReportFieldSettings");
	}
}, jn = class extends Sn {
	constructor() {
		super("ReportTable");
	}
}, Mn = class extends Cn {
	constructor() {
		super("ReportTableSettings");
	}
}, Nn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.AdditionalSettings = {};
	}
}, Pn = class extends Nn {
	constructor() {
		super("ReportTableEntry");
	}
}, Fn = class extends Nn {
	constructor() {
		super("ReportTableHeader");
	}
}, In = class {}, Ln = class extends u {
	constructor() {
		super(), this.DocumentFile = new c();
	}
}, Rn = class extends u {
	constructor() {
		super(), this.FileEntries = {}, this.PrimitvEntries = {};
	}
}, zn = class {}, Bn = class {}, Vn;
(function(e) {
	e.LiveFirst = "LiveFirst", e.ArchiveFirst = "ArchiveFirst", e.ArchiveOnly = "ArchiveOnly";
})(Vn ||= {});
var Hn = class extends u {
	constructor() {
		super(), this.Address = new c(), this.Username = new c(), this.Password = new c(), this.MaxViewInterval = new c(1e4), this.ViewMode = new c(), this.EventIds = new c();
	}
}, Un;
(function(e) {
	e.Scheduled = "Scheduled", e.Manual = "Manual", e.Event = "Event";
})(Un ||= {});
var Wn = class {}, Gn = class extends u {
	constructor() {
		super(), this.Rules = new c([]);
	}
}, Kn = class {}, qn = class extends u {
	constructor() {
		super(), this.RuleId = new c(), this.SwitchScheduleId = new c(), this.Enabled = new c(), this.StartValue = new c(), this.EndValue = new c();
	}
}, Jn;
(function(e) {
	e.On = "On", e.Off = "Off";
})(Jn ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entities/user.model.js
var Yn;
(function(e) {
	e.None = "None", e.Pending = "Pending", e.Failed = "Failed", e.Denied = "Denied", e.Successful = "Successful";
})(Yn ||= {});
var Xn = class extends u {
	constructor() {
		super(), this.FirstName = new c(), this.LastName = new c(), this.UserId = new c(), this.Email = new c(), this.RegistrationState = new c(Yn.None), this.RegistrationCredentials = new c(), this.RegistrationDate = new c();
	}
}, Zn = class extends u {
	constructor() {
		super(), this.RoleMember = [];
	}
}, Qn;
(function(e) {
	e.Male = "Male", e.Female = "Female", e.Diverse = "Diverse";
})(Qn ||= {});
var $n = class extends u {
	constructor() {
		super(), this.Salutation = new c(), this.Gender = new c(), this.Principal = new c(null), this.Contacts = new c({}), this.Enabled = new c(!1), this.FirstName = new c(null), this.LastName = new c(null);
	}
}, er = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, tr = class extends er {
	constructor() {
		super("EmailContact");
	}
}, nr = class extends er {
	constructor(e) {
		super(e);
	}
}, rr = class extends nr {
	constructor() {
		super("SmsContact");
	}
}, ir = class extends nr {
	constructor() {
		super("VoipContact");
	}
}, ar = class extends er {
	constructor() {
		super("TelegramContact");
	}
}, or = class extends er {
	constructor() {
		super("TeamsContact");
	}
}, sr = class extends er {
	constructor() {
		super("PushoverContact");
	}
}, cr = class extends u {
	constructor() {
		super(), this.Enabled = new c(!0), this.Loops = new c(3), this.Members = [];
	}
}, lr = class {}, ur = class extends u {
	constructor() {
		super(), this.Enabled = new c(), this.Offset = new c(), this.EventCategoryIds = new c(), this.GlobalRecipient = new c(), this.DefaultRecipient = new c();
	}
}, dr = class extends u {
	constructor() {
		super(), this.Category = new c(), this.Enabled = new c(), this.Trigger = new c(), this.MaintenanceTasks = new c();
	}
}, fr = class extends u {
	constructor() {
		super(), this._t = this.constructor.name, this.DefaultAssignees = new c([]), this.AgendaDefinition = new c([]);
	}
}, pr = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.Description = new l();
	}
}, mr = class extends u {
	constructor() {
		super(), this.Script = new c(), this.Enabled = new c(!0);
	}
}, hr = class {
	constructor() {
		this.Name = new c(), this.Value = new c();
	}
}, gr = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, _r = class extends gr {
	constructor() {
		super("CyclicTrigger"), this.Interval = new c();
	}
}, vr;
(function(e) {
	e.Entered = "Entered", e.Dropped = "Dropped", e.Acknowledged = "Acknowledged";
})(vr ||= {});
var yr = class extends gr {
	constructor() {
		super("EventTrigger"), this.State = new c(), this.EventDefinitionId = new c();
	}
}, br;
(function(e) {
	e.Raised = "Raised", e.Dropped = "Dropped";
})(br ||= {});
var xr = class extends gr {
	constructor() {
		super("ConditionTrigger"), this.State = new c(), this.ConditionId = new c();
	}
}, Sr;
(function(e) {
	e.Started = "Started", e.Stopped = "Stopped";
})(Sr ||= {});
var Cr = class extends gr {
	constructor() {
		super("BatchTrigger"), this.State = new c(), this.BatchDefinitionId = new c();
	}
}, wr = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, Tr = class {}, Er;
(function(e) {
	e.ProcessInterval = "ProcessInterval", e.SubInterval = "SubInterval", e.HourInterval = "HourInterval", e.TwoHourInterval = "TwoHourInterval", e.DayInterval = "DayInterval", e.WeekInterval = "WeekInterval", e.MonthInterval = "MonthInterval", e.QuarterInterval = "QuarterInterval", e.YearInterval = "YearInterval";
})(Er ||= {});
var Dr;
(function(e) {
	e.System = "System", e.Process = "Process", e.Import = "Import", e.Manual = "Manual", e.Mixed = "Mixed", e.Manipulated = "Manipulated";
})(Dr ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/historical-value-operation.model.js
var Or;
(function(e) {
	e.Pending = "Pending", e.Processing = "Processing", e.Completed = "Completed", e.Failed = "Failed", e.Undone = "Undone";
})(Or ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entity-type-class-mapping.js
var kr = {
	[r.Group]: S,
	[r.Signal]: ut,
	[r.Dashboard]: re,
	[r.DashboardTab]: ie,
	[r.DataConnection]: Pe,
	[r.DataSource]: Ae,
	[r.Connector]: Ft,
	[r.EventCategory]: ue,
	[r.EventCondition]: de,
	[r.EventDefinition]: se,
	[r.Formula]: wt,
	[r.ProcessImage]: Ht,
	[r.BatchDefinition]: Yt,
	[r.ReportTemplate]: sn,
	[r.Report]: fn,
	[r.Document]: Ln,
	[r.Storage]: Rn,
	[r.Camera]: Hn,
	[r.SwitchSchedule]: Gn,
	[r.User]: Xn,
	[r.Role]: Zn,
	[r.Recipient]: $n,
	[r.RecipientGroup]: cr,
	[r.AlarmingPlan]: ur,
	[r.MaintenanceService]: dr,
	[r.TaskDefinition]: fr,
	[r.RuntimeScript]: mr
}, Ar = class {
	static isValidMongoId(e) {
		return /^[0-9a-fA-F]{24}$/.test(e);
	}
	static tryParseJson(e, t = null) {
		try {
			return JSON.parse(e);
		} catch {
			return t;
		}
	}
}, jr = class {
	static isEntityType(e) {
		return Object.keys(r).includes(e);
	}
	static getEntityPropertiesByType(e, t) {
		let n = kr[e];
		if (!n) throw Error(`Entity type ${e} is not supported`);
		let r = new n();
		return this._getObjectKeys(r, t);
	}
	static setPropertyValue(e, t, n, r, i) {
		this._setObjectProperty(e, t.split("."), n, null, r, i);
	}
	static getPropertyValue(e, t, n) {
		let r = t.split("."), i = e, a = "";
		for (let e of r) {
			if (!i) return null;
			a === "AdditionalFields" ? (console.log(i, e), i[e]?.Value && (i = Ar.tryParseJson(i[e].Value), console.log("AdditionalValue", i))) : i = i[e], a = e;
		}
		return n || c.isField(i) ? i?.Value : i;
	}
	static _getObjectKeys(e, t) {
		if (!e) return [];
		let n = Object.keys(e);
		if (!t) return n.map((t) => ({
			keys: [],
			name: t,
			type: typeof e[t]
		}));
		let r = [];
		for (let i of n) {
			let n = e[i];
			c.isField(n) ? r.push({
				keys: [],
				name: i,
				type: "Field"
			}) : n == null ? r.push({
				keys: [],
				name: i,
				type: "null"
			}) : typeof n == "object" ? r.push({
				keys: this._getObjectKeys(n, t),
				name: i,
				type: typeof n
			}) : r.push({
				keys: [],
				name: i,
				type: typeof n
			});
		}
		return r;
	}
	static _setObjectProperty(e, t, n, r, i, a) {
		if (!e || t.length === 0) return;
		let o = Object.keys(e);
		if (r === "AdditionalFields") {
			this._setAdditionalField(e, t, n);
			return;
		}
		let s = t.shift();
		if (t.length === 0) {
			if (a && !o.includes(s)) return;
			e[s] = i || c.isField(e[s]) ? new c(n) : n;
			return;
		}
		if (o.includes(s) && typeof e[s] == "object") {
			let r = e[s];
			this._setObjectProperty(r, t, n, s, i, a);
		}
	}
	static _setAdditionalField(e, t, n) {
		if (t.length === 0) return;
		console.log("AdditionalField", e, t, n);
		let r = t.shift();
		if (t.length === 0) {
			e[r] = new c(n?.toString());
			return;
		}
		{
			let i = e[r] ? Ar.tryParseJson(e[r].Value, {}) : {};
			for (let e of t) t.indexOf(e) === t.length - 1 ? i[e] = n : (i[e] = i[e] || {}, i = i[e]);
			e[r] = new c(JSON.stringify(i));
		}
	}
}, Mr = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
};
function Nr(e) {
	return Mr(this, void 0, void 0, function* () {
		try {
			return [null, yield Promise.resolve(e)];
		} catch (e) {
			return [e, null];
		}
	});
}
function Pr(e) {
	return e == null;
}
function Fr(e) {
	return Pr(e) || e.length === 0;
}
function Ir(e) {
	return Pr(e) || e.trim().length === 0;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var Lr = function(e, t) {
	return Lr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Lr(e, t);
};
function Rr(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Lr(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function zr(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Br(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function Vr(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Hr(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function Ur(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function Wr(e) {
	return this instanceof Wr ? (this.v = e, this) : new Wr(e);
}
function Gr(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r = n.apply(e, t || []), i, a = [];
	return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function o(e) {
		return function(t) {
			return Promise.resolve(t).then(e, d);
		};
	}
	function s(e, t) {
		r[e] && (i[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (i[e] = t(i[e])));
	}
	function c(e, t) {
		try {
			l(r[e](t));
		} catch (e) {
			f(a[0][3], e);
		}
	}
	function l(e) {
		e.value instanceof Wr ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
	}
	function u(e) {
		c("next", e);
	}
	function d(e) {
		c("throw", e);
	}
	function f(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function Kr(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof Vr == "function" ? Vr(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
		return this;
	}, n);
	function r(t) {
		n[t] = e[t] && function(n) {
			return new Promise(function(r, a) {
				n = e[t](n), i(r, a, n.done, n.value);
			});
		};
	}
	function i(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			});
		}, t);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function D(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function qr(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = (/* @__PURE__ */ Error()).stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var Jr = qr(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function Yr(e, t) {
	if (e) {
		var n = e.indexOf(t);
		0 <= n && e.splice(n, 1);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
var Xr = function() {
	function e(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return e.prototype.unsubscribe = function() {
		var e, t, n, r, i;
		if (!this.closed) {
			this.closed = !0;
			var a = this._parentage;
			if (a) {
				if (this._parentage = null, Array.isArray(a)) try {
					for (var o = Vr(a), s = o.next(); !s.done; s = o.next()) s.value.remove(this);
				} catch (t) {
					e = { error: t };
				} finally {
					try {
						s && !s.done && (t = o.return) && t.call(o);
					} finally {
						if (e) throw e.error;
					}
				}
				else a.remove(this);
			}
			var c = this.initialTeardown;
			if (D(c)) try {
				c();
			} catch (e) {
				i = e instanceof Jr ? e.errors : [e];
			}
			var l = this._finalizers;
			if (l) {
				this._finalizers = null;
				try {
					for (var u = Vr(l), d = u.next(); !d.done; d = u.next()) {
						var f = d.value;
						try {
							$r(f);
						} catch (e) {
							i ??= [], e instanceof Jr ? i = Ur(Ur([], Hr(i)), Hr(e.errors)) : i.push(e);
						}
					}
				} catch (e) {
					n = { error: e };
				} finally {
					try {
						d && !d.done && (r = u.return) && r.call(u);
					} finally {
						if (n) throw n.error;
					}
				}
			}
			if (i) throw new Jr(i);
		}
	}, e.prototype.add = function(t) {
		if (t && t !== this) {
			if (this.closed) $r(t);
			else {
				if (t instanceof e) {
					if (t.closed || t._hasParent(this)) return;
					t._addParent(this);
				}
				(this._finalizers = this._finalizers ?? []).push(t);
			}
		}
	}, e.prototype._hasParent = function(e) {
		var t = this._parentage;
		return t === e || Array.isArray(t) && t.includes(e);
	}, e.prototype._addParent = function(e) {
		var t = this._parentage;
		this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
	}, e.prototype._removeParent = function(e) {
		var t = this._parentage;
		t === e ? this._parentage = null : Array.isArray(t) && Yr(t, e);
	}, e.prototype.remove = function(t) {
		var n = this._finalizers;
		n && Yr(n, t), t instanceof e && t._removeParent(this);
	}, e.EMPTY = (function() {
		var t = new e();
		return t.closed = !0, t;
	})(), e;
}(), Zr = Xr.EMPTY;
function Qr(e) {
	return e instanceof Xr || e && "closed" in e && D(e.remove) && D(e.add) && D(e.unsubscribe);
}
function $r(e) {
	D(e) ? e() : e.unsubscribe();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/config.js
var ei = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: !1,
	useDeprecatedNextContext: !1
}, ti = {
	setTimeout: function(e, t) {
		var n = [...arguments].slice(2), r = ti.delegate;
		return r?.setTimeout ? r.setTimeout.apply(r, Ur([e, t], Hr(n))) : setTimeout.apply(void 0, Ur([e, t], Hr(n)));
	},
	clearTimeout: function(e) {
		return (ti.delegate?.clearTimeout || clearTimeout)(e);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function ni(e) {
	ti.setTimeout(function() {
		var t = ei.onUnhandledError;
		if (t) t(e);
		else throw e;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
function ri() {}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var ii = (function() {
	return si("C", void 0, void 0);
})();
function ai(e) {
	return si("E", void 0, e);
}
function oi(e) {
	return si("N", e, void 0);
}
function si(e, t, n) {
	return {
		kind: e,
		value: t,
		error: n
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var ci = null;
function li(e) {
	if (ei.useDeprecatedSynchronousErrorHandling) {
		var t = !ci;
		if (t && (ci = {
			errorThrown: !1,
			error: null
		}), e(), t) {
			var n = ci, r = n.errorThrown, i = n.error;
			if (ci = null, r) throw i;
		}
	} else e();
}
function ui(e) {
	ei.useDeprecatedSynchronousErrorHandling && ci && (ci.errorThrown = !0, ci.error = e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
var di = function(e) {
	Rr(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.isStopped = !1, t ? (n.destination = t, Qr(t) && t.add(n)) : n.destination = yi, n;
	}
	return t.create = function(e, t, n) {
		return new hi(e, t, n);
	}, t.prototype.next = function(e) {
		this.isStopped ? vi(oi(e), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? vi(ai(e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? vi(ii, this) : (this.isStopped = !0, this._complete());
	}, t.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
	}, t.prototype._next = function(e) {
		this.destination.next(e);
	}, t.prototype._error = function(e) {
		try {
			this.destination.error(e);
		} finally {
			this.unsubscribe();
		}
	}, t.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, t;
}(Xr), fi = Function.prototype.bind;
function pi(e, t) {
	return fi.call(e, t);
}
var mi = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			gi(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			gi(e);
		}
		else gi(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			gi(e);
		}
	}, e;
}(), hi = function(e) {
	Rr(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this, a;
		if (D(t) || !t) a = {
			next: t ?? void 0,
			error: n ?? void 0,
			complete: r ?? void 0
		};
		else {
			var o;
			i && ei.useDeprecatedNextContext ? (o = Object.create(t), o.unsubscribe = function() {
				return i.unsubscribe();
			}, a = {
				next: t.next && pi(t.next, o),
				error: t.error && pi(t.error, o),
				complete: t.complete && pi(t.complete, o)
			}) : a = t;
		}
		return i.destination = new mi(a), i;
	}
	return t;
}(di);
function gi(e) {
	ei.useDeprecatedSynchronousErrorHandling ? ui(e) : ni(e);
}
function _i(e) {
	throw e;
}
function vi(e, t) {
	var n = ei.onStoppedNotification;
	n && ti.setTimeout(function() {
		return n(e, t);
	});
}
var yi = {
	closed: !0,
	next: ri,
	error: _i,
	complete: ri
}, bi = (function() {
	return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
function xi(e) {
	return e;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
function Si(e) {
	return e.length === 0 ? xi : e.length === 1 ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Observable.js
var Ci = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var n = new e();
		return n.source = this, n.operator = t, n;
	}, e.prototype.subscribe = function(e, t, n) {
		var r = this, i = Ei(e) ? e : new hi(e, t, n);
		return li(function() {
			var e = r, t = e.operator, n = e.source;
			i.add(t ? t.call(i, n) : n ? r._subscribe(i) : r._trySubscribe(i));
		}), i;
	}, e.prototype._trySubscribe = function(e) {
		try {
			return this._subscribe(e);
		} catch (t) {
			e.error(t);
		}
	}, e.prototype.forEach = function(e, t) {
		var n = this;
		return t = wi(t), new t(function(t, r) {
			var i = new hi({
				next: function(t) {
					try {
						e(t);
					} catch (e) {
						r(e), i.unsubscribe();
					}
				},
				error: r,
				complete: t
			});
			n.subscribe(i);
		});
	}, e.prototype._subscribe = function(e) {
		return this.source?.subscribe(e);
	}, e.prototype[bi] = function() {
		return this;
	}, e.prototype.pipe = function() {
		return Si([...arguments])(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return e = wi(e), new e(function(e, n) {
			var r;
			t.subscribe(function(e) {
				return r = e;
			}, function(e) {
				return n(e);
			}, function() {
				return e(r);
			});
		});
	}, e.create = function(t) {
		return new e(t);
	}, e;
}();
function wi(e) {
	return e ?? ei.Promise ?? Promise;
}
function Ti(e) {
	return e && D(e.next) && D(e.error) && D(e.complete);
}
function Ei(e) {
	return e && e instanceof di || Ti(e) && Qr(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
function Di(e) {
	return D(e?.lift);
}
function Oi(e) {
	return function(t) {
		if (Di(t)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function ki(e, t, n, r, i) {
	return new Ai(e, t, n, r, i);
}
var Ai = function(e) {
	Rr(t, e);
	function t(t, n, r, i, a, o) {
		var s = e.call(this, t) || this;
		return s.onFinalize = a, s.shouldUnsubscribe = o, s._next = n ? function(e) {
			try {
				n(e);
			} catch (e) {
				t.error(e);
			}
		} : e.prototype._next, s._error = i ? function(e) {
			try {
				i(e);
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._error, s._complete = r ? function() {
			try {
				r();
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._complete, s;
	}
	return t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var n = this.closed;
			e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) == null || t.call(this));
		}
	}, t;
}(di), ji = qr(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), Mi = function(e) {
	Rr(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return t.prototype.lift = function(e) {
		var t = new Ni(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new ji();
	}, t.prototype.next = function(e) {
		var t = this;
		li(function() {
			var n, r;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers ||= Array.from(t.observers);
				try {
					for (var i = Vr(t.currentObservers), a = i.next(); !a.done; a = i.next()) a.value.next(e);
				} catch (e) {
					n = { error: e };
				} finally {
					try {
						a && !a.done && (r = i.return) && r.call(i);
					} finally {
						if (n) throw n.error;
					}
				}
			}
		});
	}, t.prototype.error = function(e) {
		var t = this;
		li(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var n = t.observers; n.length;) n.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		li(function() {
			if (e._throwIfClosed(), !e.isStopped) {
				e.isStopped = !0;
				for (var t = e.observers; t.length;) t.shift().complete();
			}
		});
	}, t.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(t.prototype, "observed", {
		get: function() {
			return this.observers?.length > 0;
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._trySubscribe = function(t) {
		return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
	}, t.prototype._subscribe = function(e) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
	}, t.prototype._innerSubscribe = function(e) {
		var t = this, n = this, r = n.hasError, i = n.isStopped, a = n.observers;
		return r || i ? Zr : (this.currentObservers = null, a.push(e), new Xr(function() {
			t.currentObservers = null, Yr(a, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this, n = t.hasError, r = t.thrownError, i = t.isStopped;
		n ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new Ci();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new Ni(e, t);
	}, t;
}(Ci), Ni = function(e) {
	Rr(t, e);
	function t(t, n) {
		var r = e.call(this) || this;
		return r.destination = t, r.source = n, r;
	}
	return t.prototype.next = function(e) {
		var t, n;
		(n = (t = this.destination)?.next) == null || n.call(t, e);
	}, t.prototype.error = function(e) {
		var t, n;
		(n = (t = this.destination)?.error) == null || n.call(t, e);
	}, t.prototype.complete = function() {
		var e, t;
		(t = (e = this.destination)?.complete) == null || t.call(e);
	}, t.prototype._subscribe = function(e) {
		return this.source?.subscribe(e) ?? Zr;
	}, t;
}(Mi), Pi = function(e) {
	Rr(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n._value = t, n;
	}
	return Object.defineProperty(t.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._subscribe = function(t) {
		var n = e.prototype._subscribe.call(this, t);
		return !n.closed && t.next(this._value), n;
	}, t.prototype.getValue = function() {
		var e = this, t = e.hasError, n = e.thrownError, r = e._value;
		if (t) throw n;
		return this._throwIfClosed(), r;
	}, t.prototype.next = function(t) {
		e.prototype.next.call(this, this._value = t);
	}, t;
}(Mi), Fi = {
	now: function() {
		return (Fi.delegate || Date).now();
	},
	delegate: void 0
}, Ii = function(e) {
	Rr(t, e);
	function t(t, n, r) {
		t === void 0 && (t = Infinity), n === void 0 && (n = Infinity), r === void 0 && (r = Fi);
		var i = e.call(this) || this;
		return i._bufferSize = t, i._windowTime = n, i._timestampProvider = r, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === Infinity, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, n), i;
	}
	return t.prototype.next = function(t) {
		var n = this, r = n.isStopped, i = n._buffer, a = n._infiniteTimeWindow, o = n._timestampProvider, s = n._windowTime;
		r || (i.push(t), !a && i.push(o.now() + s)), this._trimBuffer(), e.prototype.next.call(this, t);
	}, t.prototype._subscribe = function(e) {
		this._throwIfClosed(), this._trimBuffer();
		for (var t = this._innerSubscribe(e), n = this, r = n._infiniteTimeWindow, i = n._buffer.slice(), a = 0; a < i.length && !e.closed; a += r ? 1 : 2) e.next(i[a]);
		return this._checkFinalizedStatuses(e), t;
	}, t.prototype._trimBuffer = function() {
		var e = this, t = e._bufferSize, n = e._timestampProvider, r = e._buffer, i = e._infiniteTimeWindow, a = (i ? 1 : 2) * t;
		if (t < Infinity && a < r.length && r.splice(0, r.length - a), !i) {
			for (var o = n.now(), s = 0, c = 1; c < r.length && r[c] <= o; c += 2) s = c;
			s && r.splice(0, s + 1);
		}
	}, t;
}(Mi), Li = function(e) {
	Rr(t, e);
	function t(t, n) {
		return e.call(this) || this;
	}
	return t.prototype.schedule = function(e, t) {
		return t === void 0 && (t = 0), this;
	}, t;
}(Xr), Ri = {
	setInterval: function(e, t) {
		var n = [...arguments].slice(2), r = Ri.delegate;
		return r?.setInterval ? r.setInterval.apply(r, Ur([e, t], Hr(n))) : setInterval.apply(void 0, Ur([e, t], Hr(n)));
	},
	clearInterval: function(e) {
		return (Ri.delegate?.clearInterval || clearInterval)(e);
	},
	delegate: void 0
}, zi = function(e) {
	Rr(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this;
		return r.scheduler = t, r.work = n, r.pending = !1, r;
	}
	return t.prototype.schedule = function(e, t) {
		if (t === void 0 && (t = 0), this.closed) return this;
		this.state = e;
		var n = this.id, r = this.scheduler;
		return n != null && (this.id = this.recycleAsyncId(r, n, t)), this.pending = !0, this.delay = t, this.id = this.id ?? this.requestAsyncId(r, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, n) {
		return n === void 0 && (n = 0), Ri.setInterval(e.flush.bind(e, this), n);
	}, t.prototype.recycleAsyncId = function(e, t, n) {
		if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1) return t;
		t != null && Ri.clearInterval(t);
	}, t.prototype.execute = function(e, t) {
		if (this.closed) return /* @__PURE__ */ Error("executing a cancelled action");
		this.pending = !1;
		var n = this._execute(e, t);
		if (n) return n;
		this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, t.prototype._execute = function(e, t) {
		var n = !1, r;
		try {
			this.work(e);
		} catch (e) {
			n = !0, r = e || /* @__PURE__ */ Error("Scheduled action threw falsy error");
		}
		if (n) return this.unsubscribe(), r;
	}, t.prototype.unsubscribe = function() {
		if (!this.closed) {
			var t = this, n = t.id, r = t.scheduler, i = r.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, Yr(i, this), n != null && (this.id = this.recycleAsyncId(r, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(Li), Bi = function() {
	function e(t, n) {
		n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
	}
	return e.prototype.schedule = function(e, t, n) {
		return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t);
	}, e.now = Fi.now, e;
}(), Vi = new (function(e) {
	Rr(t, e);
	function t(t, n) {
		n === void 0 && (n = Bi.now);
		var r = e.call(this, t, n) || this;
		return r.actions = [], r._active = !1, r;
	}
	return t.prototype.flush = function(e) {
		var t = this.actions;
		if (this._active) {
			t.push(e);
			return;
		}
		var n;
		this._active = !0;
		do
			if (n = e.execute(e.state, e.delay)) break;
		while (e = t.shift());
		if (this._active = !1, n) {
			for (; e = t.shift();) e.unsubscribe();
			throw n;
		}
	}, t;
}(Bi))(zi), Hi = Vi, Ui = new Ci(function(e) {
	return e.complete();
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function Wi(e) {
	return e && D(e.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function Gi(e) {
	return e[e.length - 1];
}
function Ki(e) {
	return D(Gi(e)) ? e.pop() : void 0;
}
function qi(e) {
	return Wi(Gi(e)) ? e.pop() : void 0;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var Ji = (function(e) {
	return e && typeof e.length == "number" && typeof e != "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function Yi(e) {
	return D(e?.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function Xi(e) {
	return D(e[bi]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function Zi(e) {
	return Symbol.asyncIterator && D(e?.[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function Qi(e) {
	return /* @__PURE__ */ TypeError("You provided " + (typeof e == "object" && e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function $i() {
	return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ea = $i();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function ta(e) {
	return D(e?.[ea]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function na(e) {
	return Gr(this, arguments, function() {
		var t, n, r, i;
		return Br(this, function(a) {
			switch (a.label) {
				case 0: t = e.getReader(), a.label = 1;
				case 1: a.trys.push([
					1,
					,
					9,
					10
				]), a.label = 2;
				case 2: return [4, Wr(t.read())];
				case 3: return n = a.sent(), r = n.value, i = n.done, i ? [4, Wr(void 0)] : [3, 5];
				case 4: return [2, a.sent()];
				case 5: return [4, Wr(r)];
				case 6: return [4, a.sent()];
				case 7: return a.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function ra(e) {
	return D(e?.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function ia(e) {
	if (e instanceof Ci) return e;
	if (e != null) {
		if (Xi(e)) return aa(e);
		if (Ji(e)) return oa(e);
		if (Yi(e)) return sa(e);
		if (Zi(e)) return la(e);
		if (ta(e)) return ca(e);
		if (ra(e)) return ua(e);
	}
	throw Qi(e);
}
function aa(e) {
	return new Ci(function(t) {
		var n = e[bi]();
		if (D(n.subscribe)) return n.subscribe(t);
		throw TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function oa(e) {
	return new Ci(function(t) {
		for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
		t.complete();
	});
}
function sa(e) {
	return new Ci(function(t) {
		e.then(function(e) {
			t.closed || (t.next(e), t.complete());
		}, function(e) {
			return t.error(e);
		}).then(null, ni);
	});
}
function ca(e) {
	return new Ci(function(t) {
		var n, r;
		try {
			for (var i = Vr(e), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				if (t.next(o), t.closed) return;
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				a && !a.done && (r = i.return) && r.call(i);
			} finally {
				if (n) throw n.error;
			}
		}
		t.complete();
	});
}
function la(e) {
	return new Ci(function(t) {
		da(e, t).catch(function(e) {
			return t.error(e);
		});
	});
}
function ua(e) {
	return la(na(e));
}
function da(e, t) {
	var n, r, i, a;
	return zr(this, void 0, void 0, function() {
		var o, s;
		return Br(this, function(c) {
			switch (c.label) {
				case 0: c.trys.push([
					0,
					5,
					6,
					11
				]), n = Kr(e), c.label = 1;
				case 1: return [4, n.next()];
				case 2:
					if (r = c.sent(), r.done) return [3, 4];
					if (o = r.value, t.next(o), t.closed) return [2];
					c.label = 3;
				case 3: return [3, 1];
				case 4: return [3, 11];
				case 5: return s = c.sent(), i = { error: s }, [3, 11];
				case 6: return c.trys.push([
					6,
					,
					9,
					10
				]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
				case 7: c.sent(), c.label = 8;
				case 8: return [3, 10];
				case 9:
					if (i) throw i.error;
					return [7];
				case 10: return [7];
				case 11: return t.complete(), [2];
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function fa(e, t, n, r, i) {
	r === void 0 && (r = 0), i === void 0 && (i = !1);
	var a = t.schedule(function() {
		n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
	}, r);
	if (e.add(a), !i) return a;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function pa(e, t) {
	return t === void 0 && (t = 0), Oi(function(n, r) {
		n.subscribe(ki(r, function(n) {
			return fa(r, e, function() {
				return r.next(n);
			}, t);
		}, function() {
			return fa(r, e, function() {
				return r.complete();
			}, t);
		}, function(n) {
			return fa(r, e, function() {
				return r.error(n);
			}, t);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function ma(e, t) {
	return t === void 0 && (t = 0), Oi(function(n, r) {
		r.add(e.schedule(function() {
			return n.subscribe(r);
		}, t));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function ha(e, t) {
	return ia(e).pipe(ma(t), pa(t));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function ga(e, t) {
	return ia(e).pipe(ma(t), pa(t));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function _a(e, t) {
	return new Ci(function(n) {
		var r = 0;
		return t.schedule(function() {
			r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function va(e, t) {
	return new Ci(function(n) {
		var r;
		return fa(n, t, function() {
			r = e[ea](), fa(n, t, function() {
				var e, t, i;
				try {
					e = r.next(), t = e.value, i = e.done;
				} catch (e) {
					n.error(e);
					return;
				}
				i ? n.complete() : n.next(t);
			}, 0, !0);
		}), function() {
			return D(r?.return) && r.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function ya(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new Ci(function(n) {
		fa(n, t, function() {
			var r = e[Symbol.asyncIterator]();
			fa(n, t, function() {
				r.next().then(function(e) {
					e.done ? n.complete() : n.next(e.value);
				});
			}, 0, !0);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function ba(e, t) {
	return ya(na(e), t);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function xa(e, t) {
	if (e != null) {
		if (Xi(e)) return ha(e, t);
		if (Ji(e)) return _a(e, t);
		if (Yi(e)) return ga(e, t);
		if (Zi(e)) return ya(e, t);
		if (ta(e)) return va(e, t);
		if (ra(e)) return ba(e, t);
	}
	throw Qi(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function Sa(e, t) {
	return t ? xa(e, t) : ia(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
function Ca() {
	var e = [...arguments];
	return Sa(e, qi(e));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function wa(e) {
	return !!e && (e instanceof Ci || D(e.lift) && D(e.subscribe));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var Ta = qr(function(e) {
	return function() {
		e(this), this.name = "EmptyError", this.message = "no elements in sequence";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function Ea(e, t) {
	var n = typeof t == "object";
	return new Promise(function(r, i) {
		var a = new hi({
			next: function(e) {
				r(e), a.unsubscribe();
			},
			error: i,
			complete: function() {
				n ? r(t.defaultValue) : i(new Ta());
			}
		});
		e.subscribe(a);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
function Da(e) {
	return e instanceof Date && !isNaN(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/map.js
function Oa(e, t) {
	return Oi(function(n, r) {
		var i = 0;
		n.subscribe(ki(r, function(n) {
			r.next(e.call(t, n, i++));
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var ka = Array.isArray;
function Aa(e, t) {
	return ka(t) ? e.apply(void 0, Ur([], Hr(t))) : e(t);
}
function ja(e) {
	return Oa(function(t) {
		return Aa(e, t);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var Ma = Array.isArray, Na = Object.getPrototypeOf, Pa = Object.prototype, Fa = Object.keys;
function Ia(e) {
	if (e.length === 1) {
		var t = e[0];
		if (Ma(t)) return {
			args: t,
			keys: null
		};
		if (La(t)) {
			var n = Fa(t);
			return {
				args: n.map(function(e) {
					return t[e];
				}),
				keys: n
			};
		}
	}
	return {
		args: e,
		keys: null
	};
}
function La(e) {
	return e && typeof e == "object" && Na(e) === Pa;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createObject.js
function Ra(e, t) {
	return e.reduce(function(e, n, r) {
		return e[n] = t[r], e;
	}, {});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function za() {
	var e = [...arguments], t = qi(e), n = Ki(e), r = Ia(e), i = r.args, a = r.keys;
	if (i.length === 0) return Sa([], t);
	var o = new Ci(Ba(i, t, a ? function(e) {
		return Ra(a, e);
	} : xi));
	return n ? o.pipe(ja(n)) : o;
}
function Ba(e, t, n) {
	return n === void 0 && (n = xi), function(r) {
		Va(t, function() {
			for (var i = e.length, a = Array(i), o = i, s = i, c = function(i) {
				Va(t, function() {
					var c = Sa(e[i], t), l = !1;
					c.subscribe(ki(r, function(e) {
						a[i] = e, l || (l = !0, s--), s || r.next(n(a.slice()));
					}, function() {
						--o || r.complete();
					}));
				}, r);
			}, l = 0; l < i; l++) c(l);
		}, r);
	};
}
function Va(e, t, n) {
	e ? fa(n, e, t) : t();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function Ha(e, t, n, r, i, a, o, s) {
	var c = [], l = 0, u = 0, d = !1, f = function() {
		d && !c.length && !l && t.complete();
	}, p = function(e) {
		return l < r ? m(e) : c.push(e);
	}, m = function(e) {
		a && t.next(e), l++;
		var s = !1;
		ia(n(e, u++)).subscribe(ki(t, function(e) {
			i?.(e), a ? p(e) : t.next(e);
		}, function() {
			s = !0;
		}, void 0, function() {
			if (s) try {
				l--;
				for (var e = function() {
					var e = c.shift();
					o ? fa(t, o, function() {
						return m(e);
					}) : m(e);
				}; c.length && l < r;) e();
				f();
			} catch (e) {
				t.error(e);
			}
		}));
	};
	return e.subscribe(ki(t, p, function() {
		d = !0, f();
	})), function() {
		s?.();
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function Ua(e, t, n) {
	return n === void 0 && (n = Infinity), D(t) ? Ua(function(n, r) {
		return Oa(function(e, i) {
			return t(n, e, r, i);
		})(ia(e(n, r)));
	}, n) : (typeof t == "number" && (n = t), Oi(function(t, r) {
		return Ha(t, r, e, n);
	}));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function Wa(e) {
	return e === void 0 && (e = Infinity), Ua(xi, e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function Ga() {
	return Wa(1);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/concat.js
function Ka() {
	var e = [...arguments];
	return Ga()(Sa(e, qi(e)));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
function qa(e, t, n) {
	e === void 0 && (e = 0), n === void 0 && (n = Hi);
	var r = -1;
	return t != null && (Wi(t) ? n = t : r = t), new Ci(function(t) {
		var i = Da(e) ? +e - n.now() : e;
		i < 0 && (i = 0);
		var a = 0;
		return n.schedule(function() {
			t.closed || (t.next(a++), 0 <= r ? this.schedule(void 0, r) : t.complete());
		}, i);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
function Ja(e, t) {
	return Oi(function(n, r) {
		var i = 0;
		n.subscribe(ki(r, function(n) {
			return e.call(t, n, i++) && r.next(n);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/audit.js
function Ya(e) {
	return Oi(function(t, n) {
		var r = !1, i = null, a = null, o = !1, s = function() {
			if (a?.unsubscribe(), a = null, r) {
				r = !1;
				var e = i;
				i = null, n.next(e);
			}
			o && n.complete();
		}, c = function() {
			a = null, o && n.complete();
		};
		t.subscribe(ki(n, function(t) {
			r = !0, i = t, a || ia(e(t)).subscribe(a = ki(n, s, c));
		}, function() {
			o = !0, (!r || !a || a.closed) && n.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/auditTime.js
function Xa(e, t) {
	return t === void 0 && (t = Vi), Ya(function() {
		return qa(e, t);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function Za(e) {
	return Oi(function(t, n) {
		var r = null, i = !1, a;
		r = t.subscribe(ki(n, void 0, void 0, function(o) {
			a = ia(e(o, Za(e)(t))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
		})), i && (r.unsubscribe(), r = null, a.subscribe(n));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
function Qa(e, t) {
	return t === void 0 && (t = Vi), Oi(function(n, r) {
		var i = null, a = null, o = null, s = function() {
			if (i) {
				i.unsubscribe(), i = null;
				var e = a;
				a = null, r.next(e);
			}
		};
		function c() {
			var n = o + e, a = t.now();
			if (a < n) {
				i = this.schedule(void 0, n - a), r.add(i);
				return;
			}
			s();
		}
		n.subscribe(ki(r, function(n) {
			a = n, o = t.now(), i || (i = t.schedule(c, e), r.add(i));
		}, function() {
			s(), r.complete();
		}, void 0, function() {
			a = i = null;
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/take.js
function $a(e) {
	return e <= 0 ? function() {
		return Ui;
	} : Oi(function(t, n) {
		var r = 0;
		t.subscribe(ki(n, function(t) {
			++r <= e && (n.next(t), e <= r && n.complete());
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function eo(e) {
	return Oa(function() {
		return e;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function to(e, t) {
	return t === void 0 && (t = xi), e ??= no, Oi(function(n, r) {
		var i, a = !0;
		n.subscribe(ki(r, function(n) {
			var o = t(n);
			(a || !e(i, o)) && (a = !1, i = o, r.next(n));
		}));
	});
}
function no(e, t) {
	return e === t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js
function ro(e, t) {
	return to(function(n, r) {
		return t ? t(n[e], r[e]) : n[e] === r[e];
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function io(e) {
	return Oi(function(t, n) {
		try {
			t.subscribe(n);
		} finally {
			n.add(e);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
function ao(e) {
	e === void 0 && (e = {});
	var t = e.connector, n = t === void 0 ? function() {
		return new Mi();
	} : t, r = e.resetOnError, i = r === void 0 || r, a = e.resetOnComplete, o = a === void 0 || a, s = e.resetOnRefCountZero, c = s === void 0 || s;
	return function(e) {
		var t, r, a, s = 0, l = !1, u = !1, d = function() {
			r?.unsubscribe(), r = void 0;
		}, f = function() {
			d(), t = a = void 0, l = u = !1;
		}, p = function() {
			var e = t;
			f(), e?.unsubscribe();
		};
		return Oi(function(e, m) {
			s++, !u && !l && d();
			var h = a ??= n();
			m.add(function() {
				s--, s === 0 && !u && !l && (r = oo(p, c));
			}), h.subscribe(m), !t && s > 0 && (t = new hi({
				next: function(e) {
					return h.next(e);
				},
				error: function(e) {
					u = !0, d(), r = oo(f, i, e), h.error(e);
				},
				complete: function() {
					l = !0, d(), r = oo(f, o), h.complete();
				}
			}), ia(e).subscribe(t));
		})(e);
	};
}
function oo(e, t) {
	var n = [...arguments].slice(2);
	if (t === !0) {
		e();
		return;
	}
	if (t !== !1) {
		var r = new hi({ next: function() {
			r.unsubscribe(), e();
		} });
		return ia(t.apply(void 0, Ur([], Hr(n)))).subscribe(r);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function so(e, t, n) {
	var r, i, a, o, s = !1;
	return e && typeof e == "object" ? (r = e.bufferSize, o = r === void 0 ? Infinity : r, i = e.windowTime, t = i === void 0 ? Infinity : i, a = e.refCount, s = a !== void 0 && a, n = e.scheduler) : o = e ?? Infinity, ao({
		connector: function() {
			return new Ii(o, t, n);
		},
		resetOnError: !0,
		resetOnComplete: !1,
		resetOnRefCountZero: s
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/skip.js
function co(e) {
	return Ja(function(t, n) {
		return e <= n;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function lo(e, t) {
	return Oi(function(n, r) {
		var i = null, a = 0, o = !1, s = function() {
			return o && !i && r.complete();
		};
		n.subscribe(ki(r, function(n) {
			i?.unsubscribe();
			var o = 0, c = a++;
			ia(e(n, c)).subscribe(i = ki(r, function(e) {
				return r.next(t ? t(n, e, c, o++) : e);
			}, function() {
				i = null, s();
			}));
		}, function() {
			o = !0, s();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
function uo(e) {
	return Oi(function(t, n) {
		ia(e).subscribe(ki(n, function() {
			return n.complete();
		}, ri)), !n.closed && t.subscribe(n);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
function fo(e, t) {
	return t === void 0 && (t = !1), Oi(function(n, r) {
		var i = 0;
		n.subscribe(ki(r, function(n) {
			var a = e(n, i++);
			(a || t) && r.next(n), !a && r.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/tap.js
function po(e, t, n) {
	var r = D(e) || t || n ? {
		next: e,
		error: t,
		complete: n
	} : e;
	return r ? Oi(function(e, t) {
		var n;
		(n = r.subscribe) == null || n.call(r);
		var i = !0;
		e.subscribe(ki(t, function(e) {
			var n;
			(n = r.next) == null || n.call(r, e), t.next(e);
		}, function() {
			var e;
			i = !1, (e = r.complete) == null || e.call(r), t.complete();
		}, function(e) {
			var n;
			i = !1, (n = r.error) == null || n.call(r, e), t.error(e);
		}, function() {
			var e, t;
			i && ((e = r.unsubscribe) == null || e.call(r)), (t = r.finalize) == null || t.call(r);
		}));
	}) : xi;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttle.js
function mo(e, t) {
	return Oi(function(n, r) {
		var i = t ?? {}, a = i.leading, o = a === void 0 || a, s = i.trailing, c = s !== void 0 && s, l = !1, u = null, d = null, f = !1, p = function() {
			d?.unsubscribe(), d = null, c && (g(), f && r.complete());
		}, m = function() {
			d = null, f && r.complete();
		}, h = function(t) {
			return d = ia(e(t)).subscribe(ki(r, p, m));
		}, g = function() {
			if (l) {
				l = !1;
				var e = u;
				u = null, r.next(e), !f && h(e);
			}
		};
		n.subscribe(ki(r, function(e) {
			l = !0, u = e, !(d && !d.closed) && (o ? g() : h(e));
		}, function() {
			f = !0, !(c && l && d && !d.closed) && r.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js
function ho(e, t, n) {
	t === void 0 && (t = Vi);
	var r = qa(e, t);
	return mo(function() {
		return r;
	}, n);
}
//#endregion
//#region node_modules/audako-core/dist/mjs/utils/async-value-utils.js
function go(e) {
	return typeof e == "function" ? go(e()) : wa(e) ? Ea(e) : Promise.resolve(e);
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/shared.js
var O = class {
	constructor() {
		this.headerExpanded = !1;
	}
}, _o;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(_o ||= {});
var vo = class {
	constructor() {
		this.channels = [], this.enabled = !1, this.timecontrol = !1;
	}
}, yo;
(function(e) {
	e.Second = "Second", e.Minute = "Minute", e.Hour = "Hour", e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Quarter = "Quarter", e.Year = "Year";
})(yo ||= {});
var bo = class {
	constructor() {
		this.periodOfTime = yo.Day, this.amountOfTimePeriods = 1, this.beginningOfaDay = "00:00", this.beginningOfaWeek = 1, this.offsetOfTimePeriods = 0;
	}
}, xo;
(function(e) {
	e.StepSeriesOptions = "StepSeriesOptions", e.StepLineSeriesOptions = "StepLineSeriesOptions", e.LineSeriesOptions = "LineSeriesOptions", e.SmoothedLineSeriesOptions = "SmoothedLineSeriesOptions", e.ColumnSeriesOptions = "ColumnSeriesOptions";
})(xo ||= {});
var So = class {}, Co = class extends So {}, wo = class extends So {
	constructor() {
		super(...arguments), this.tension = {
			tensionX: .89,
			tensionY: 1
		};
	}
}, To = class extends So {}, Eo = class {}, Do = class {}, Oo = class extends Eo {
	constructor() {
		super(), this.unit = "";
	}
}, ko = class {
	constructor() {
		this.title = "", this.yAxis = [], this.series = [], this.guidelines = [], this.enableScrollbar = !1, this.smallLegend = !1, this.legend = !0, this.showAggregationGuidelines = !1, this.showAggregationBullets = !1, this.enableAnnotation = !1, this.bulletDistanceThreshold = 0;
	}
}, Ao = "1", jo = class extends O {
	constructor() {
		super(), this.version = "1", this.signalId = "", this.selectedIcon = "";
	}
}, Mo = "1", No = class extends O {
	constructor() {
		super(), this.clockType = Po.Analog, this.version = "1", this.seconds = !1, this.date = !1, this.timezone = 0;
	}
}, Po;
(function(e) {
	e.Digital = "Digital", e.Analog = "Analog";
})(Po ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-text-config.js
var Fo = "1", Io = class extends O {
	constructor() {
		super(), this.version = "1", this.headerExpanded = !1;
	}
}, Lo = "7", Ro = class extends O {
	constructor() {
		super(), this.version = "7", this.dataSettings = [], this.historicalSetting = new bo(), this.chartConfig = new ko(), this.timeManagementSettings = new vo(), this.liveDataSettings = {
			displayTimeRange: 0,
			startupType: !1,
			enabled: !1,
			autoZoom: !1
		};
	}
}, zo = "1", Bo = class extends O {
	constructor(e) {
		super(), this.title = "WidgetDataImport", this.signals = [], this.version = "1", this.signals = [], e && Object.assign(this, e);
	}
}, Vo = "2", Ho;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(Ho ||= {});
var Uo = class extends O {
	constructor() {
		super(), this.DataType = Ho.Signal, this.version = "2";
	}
}, Wo = {
	q1: {
		start: -90,
		end: 0,
		rotation: 90,
		icon: "qIcon",
		inverted: !0
	},
	q2: {
		start: 0,
		end: 90,
		rotation: 340,
		icon: "qIcon"
	},
	q3: {
		start: 90,
		end: 180,
		rotation: 95,
		icon: "qIcon"
	},
	q4: {
		start: 180,
		end: 270,
		rotation: 90,
		icon: "qIcon"
	},
	v1: {
		start: 225,
		end: 315,
		rotation: 0,
		icon: "vIcon",
		inverted: !0
	},
	v2: {
		start: -45,
		end: 45,
		rotation: 90,
		icon: "vIcon",
		inverted: !0
	},
	v3: {
		start: 45,
		end: 135,
		rotation: 0,
		icon: "vIcon"
	},
	v4: {
		start: 135,
		end: 225,
		rotation: 90,
		icon: "vIcon"
	},
	h1: {
		start: -180,
		end: 0,
		rotation: 0,
		icon: "hIcon",
		inverted: !0
	},
	h2: {
		start: -90,
		end: 90,
		rotation: 90,
		icon: "hIcon",
		inverted: !0
	},
	h3: {
		start: 0,
		end: 180,
		rotation: 0,
		icon: "hIcon"
	},
	h4: {
		start: 90,
		end: 270,
		rotation: 90,
		icon: "hIcon"
	},
	f1: {
		start: -225,
		end: 45,
		rotation: 0,
		icon: "fIcon",
		inverted: !0
	},
	f2: {
		start: -135,
		end: 135,
		rotation: 90,
		icon: "fIcon",
		inverted: !0
	},
	f3: {
		start: -45,
		end: 225,
		rotation: 0,
		icon: "fIcon"
	},
	f4: {
		start: 45,
		end: 315,
		rotation: 90,
		icon: "fIcon"
	}
};
function Go(e, t) {
	for (let n in Wo) if (Wo[n].start === e && Wo[n].end === t) return n;
	return null;
}
function Ko(e) {
	return Wo[e]?.rotation;
}
function qo(e) {
	return !!Wo[e]?.inverted;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-liquid-fill-gauge.config.js
var Jo = "1", Yo = class extends O {
	constructor() {
		super(), this.version = "1", this.minValue = 0, this.maxValue = 100, this.gaugeTitle = "", this.suffix = "", this.displaySuffix = !0, this.waveCount = 2, this.circleThickness = .05, this.circleFillGap = .05, this.animateWave = !0, this.waveColor = "#178BCA", this.circleColor = "#178BCA", this.textColor = "#045681", this.waveTextColor = "#A4DBf8", this.signalId = null, this.waveAnimateTime = 4e3, this.waveHeight = .1, this.showMinMax = !1, this.showNullLine = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, Xo = "2", Zo = class extends O {
	constructor() {
		super(), this.version = "2", this.type = null, this.caption = null, this.lockingValue = null, this.customLockingValue = null, this.lockingState = null, this.displayStatus = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, Qo = "5", $o = class {
	constructor() {
		this.expanded = !0;
	}
}, es = class extends O {
	constructor() {
		super(), this.version = "5";
	}
}, ts = "1", ns = class extends O {
	constructor() {
		super(), this.version = "1";
	}
}, rs = "1", is = class extends O {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, as = "0", os = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, ss = class extends O {
	constructor() {
		super(), this.version = "0", this.sliderGroups = null;
	}
}, cs;
(function(e) {
	e.Enabled = "Enabled", e.Disabled = "Disabled", e.Locked = "Locked";
})(cs ||= {});
var ls = "0", us = class extends O {
	constructor() {
		super(), this.dataGroups = [], this.version = "0";
	}
}, ds = "1", fs = class extends O {
	constructor() {
		super(), this.version = "1";
	}
}, ps = "1", ms = class extends O {
	constructor() {
		super(), this.version = "1", this.counterSignalIds = [];
	}
}, hs = "2", gs = class extends O {
	constructor() {
		super(), this.title = "", this.queryType = null, this.version = "2";
	}
}, _s = "3", vs = class extends O {
	constructor() {
		super(), this.backgroundColor = null, this.version = "3", this.mode = ys.Receive, this.backgroundColor = "#ffffff", this.transferToken = null, this.crossTabs = !1;
	}
}, ys;
(function(e) {
	e.Send = "Send", e.Receive = "Receive";
})(ys ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-traffic-light-config.js
var bs;
(function(e) {
	e.Red = "Red", e.Yellow = "Yellow", e.Green = "Green", e.Off = "Off";
})(bs ||= {});
var xs = class extends O {
	constructor() {
		super(), this.version = "1", this.title = "", this.headerExpanded = !1, this.mode = Ss.TrafficLight, this.settings = [], this.housingColor = null;
	}
}, Ss;
(function(e) {
	e.TrafficLight = "TrafficLight", e.PedestrianLight = "PedestrianLight", e.SignalLight = "SignalLight";
})(Ss ||= {});
var Cs = {
	[Ss.TrafficLight]: "TRAFFIC_LIGHT",
	[Ss.PedestrianLight]: "PEDESTRIAN_LIGHT",
	[Ss.SignalLight]: "SIGNAL_LIGHT"
}, ws = {
	[bs.Red]: "RED",
	[bs.Yellow]: "YELLOW",
	[bs.Green]: "GREEN",
	[bs.Off]: "OFF"
}, Ts = "1", Es = class extends O {
	constructor() {
		super(), this.signals = [], this.chartConfig = new ko();
	}
}, Ds = "5", Os = class extends O {
	constructor() {
		super(), this.unit = "", this.version = "5", this.compressionSettings = Er.DayInterval, this.historicalSetting = new bo(), this.timeManagementSettings = new vo(), this.headerExpanded = !1;
	}
}, ks = class {}, As = "2", js = class {}, Ms = class {}, Ns = class {}, Ps = class extends O {
	constructor() {
		super(), this.version = "2";
	}
}, Fs = "2", Is;
(function(e) {
	e.Sum = "Sum", e.Average = "Average";
})(Is ||= {});
var Ls = class extends O {
	constructor() {
		super(), this.unit = "", this.nodes = [], this.connections = [], this.version = "2", this.timeManagementSettings = new vo(), this.compressionSettings = Er.DayInterval;
	}
}, Rs = "2", zs = class extends O {
	constructor() {
		super(), this.version = "2", this.TemplateTimeSteps = {};
	}
}, Bs;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Bs ||= {});
var Vs = "WidgetReport", Hs = "4", Us = class extends O {
	constructor() {
		super(), this.version = "4", this.acquisitionInterval = Ws.Month, this.acquisitionUnit = Gs.DayValues, this.manualDataSignalMasks = [], this.additionalOptions = {}, this.timelineOption = Ks.AUTO, this.showStatusIcons = !0, this.showAlias = !1, this.showPreviousPermanent = !1, this.showPreviousDefault = !0, this.autoSaveAndNext = !0;
	}
}, Ws;
(function(e) {
	e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Ws ||= {});
var Gs;
(function(e) {
	e.ProcessValues = "ProcessValues", e.HourValues = "HourValues", e.DayValues = "DayValues", e.WeekValues = "WeekValues", e.MonthValues = "MonthValues", e.YearValues = "YearValues";
})(Gs ||= {});
var Ks;
(function(e) {
	e.ENABLED = "0", e.DISABLED = "1", e.AUTO = "2";
})(Ks ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-billing-config.js
var qs = "1", Js = class extends O {
	constructor() {
		super(), this.version = "1", this.currencyCode = "€", this.counters = [];
	}
}, Ys;
(function(e) {
	e.SIGNAL = "signal", e.VALUE = "value";
})(Ys ||= {});
var Xs = [
	{ USD: {
		symbol: "$",
		name: "US Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "USD",
		name_plural: "US dollars"
	} },
	{ CAD: {
		symbol: "CA$",
		name: "Canadian Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "CAD",
		name_plural: "Canadian dollars"
	} },
	{ EUR: {
		symbol: "€",
		name: "Euro",
		symbol_native: "€",
		decimal_digits: 2,
		rounding: 0,
		code: "EUR",
		name_plural: "euros"
	} },
	{ AED: {
		symbol: "AED",
		name: "United Arab Emirates Dirham",
		symbol_native: "د.إ.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "AED",
		name_plural: "UAE dirhams"
	} },
	{ AFN: {
		symbol: "Af",
		name: "Afghan Afghani",
		symbol_native: "؋",
		decimal_digits: 0,
		rounding: 0,
		code: "AFN",
		name_plural: "Afghan Afghanis"
	} },
	{ ALL: {
		symbol: "ALL",
		name: "Albanian Lek",
		symbol_native: "Lek",
		decimal_digits: 0,
		rounding: 0,
		code: "ALL",
		name_plural: "Albanian lekë"
	} },
	{ AMD: {
		symbol: "AMD",
		name: "Armenian Dram",
		symbol_native: "դր.",
		decimal_digits: 0,
		rounding: 0,
		code: "AMD",
		name_plural: "Armenian drams"
	} },
	{ ARS: {
		symbol: "AR$",
		name: "Argentine Peso",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "ARS",
		name_plural: "Argentine pesos"
	} },
	{ AUD: {
		symbol: "AU$",
		name: "Australian Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "AUD",
		name_plural: "Australian dollars"
	} },
	{ AZN: {
		symbol: "man.",
		name: "Azerbaijani Manat",
		symbol_native: "ман.",
		decimal_digits: 2,
		rounding: 0,
		code: "AZN",
		name_plural: "Azerbaijani manats"
	} },
	{ BAM: {
		symbol: "KM",
		name: "Bosnia-Herzegovina Convertible Mark",
		symbol_native: "KM",
		decimal_digits: 2,
		rounding: 0,
		code: "BAM",
		name_plural: "Bosnia-Herzegovina convertible marks"
	} },
	{ BDT: {
		symbol: "Tk",
		name: "Bangladeshi Taka",
		symbol_native: "৳",
		decimal_digits: 2,
		rounding: 0,
		code: "BDT",
		name_plural: "Bangladeshi takas"
	} },
	{ BGN: {
		symbol: "BGN",
		name: "Bulgarian Lev",
		symbol_native: "лв.",
		decimal_digits: 2,
		rounding: 0,
		code: "BGN",
		name_plural: "Bulgarian leva"
	} },
	{ BHD: {
		symbol: "BD",
		name: "Bahraini Dinar",
		symbol_native: "د.ب.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "BHD",
		name_plural: "Bahraini dinars"
	} },
	{ BIF: {
		symbol: "FBu",
		name: "Burundian Franc",
		symbol_native: "FBu",
		decimal_digits: 0,
		rounding: 0,
		code: "BIF",
		name_plural: "Burundian francs"
	} },
	{ BND: {
		symbol: "BN$",
		name: "Brunei Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "BND",
		name_plural: "Brunei dollars"
	} },
	{ BOB: {
		symbol: "Bs",
		name: "Bolivian Boliviano",
		symbol_native: "Bs",
		decimal_digits: 2,
		rounding: 0,
		code: "BOB",
		name_plural: "Bolivian bolivianos"
	} },
	{ BRL: {
		symbol: "R$",
		name: "Brazilian Real",
		symbol_native: "R$",
		decimal_digits: 2,
		rounding: 0,
		code: "BRL",
		name_plural: "Brazilian reals"
	} },
	{ BWP: {
		symbol: "BWP",
		name: "Botswanan Pula",
		symbol_native: "P",
		decimal_digits: 2,
		rounding: 0,
		code: "BWP",
		name_plural: "Botswanan pulas"
	} },
	{ BYN: {
		symbol: "Br",
		name: "Belarusian Ruble",
		symbol_native: "руб.",
		decimal_digits: 2,
		rounding: 0,
		code: "BYN",
		name_plural: "Belarusian rubles"
	} },
	{ BZD: {
		symbol: "BZ$",
		name: "Belize Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "BZD",
		name_plural: "Belize dollars"
	} },
	{ CDF: {
		symbol: "CDF",
		name: "Congolese Franc",
		symbol_native: "FrCD",
		decimal_digits: 2,
		rounding: 0,
		code: "CDF",
		name_plural: "Congolese francs"
	} },
	{ CHF: {
		symbol: "CHF",
		name: "Swiss Franc",
		symbol_native: "CHF",
		decimal_digits: 2,
		rounding: .05,
		code: "CHF",
		name_plural: "Swiss francs"
	} },
	{ CLP: {
		symbol: "CL$",
		name: "Chilean Peso",
		symbol_native: "$",
		decimal_digits: 0,
		rounding: 0,
		code: "CLP",
		name_plural: "Chilean pesos"
	} },
	{ CNY: {
		symbol: "CN¥",
		name: "Chinese Yuan",
		symbol_native: "CN¥",
		decimal_digits: 2,
		rounding: 0,
		code: "CNY",
		name_plural: "Chinese yuan"
	} },
	{ COP: {
		symbol: "CO$",
		name: "Colombian Peso",
		symbol_native: "$",
		decimal_digits: 0,
		rounding: 0,
		code: "COP",
		name_plural: "Colombian pesos"
	} },
	{ CRC: {
		symbol: "₡",
		name: "Costa Rican Colón",
		symbol_native: "₡",
		decimal_digits: 0,
		rounding: 0,
		code: "CRC",
		name_plural: "Costa Rican colóns"
	} },
	{ CVE: {
		symbol: "CV$",
		name: "Cape Verdean Escudo",
		symbol_native: "CV$",
		decimal_digits: 2,
		rounding: 0,
		code: "CVE",
		name_plural: "Cape Verdean escudos"
	} },
	{ CZK: {
		symbol: "Kč",
		name: "Czech ReKoruna",
		symbol_native: "Kč",
		decimal_digits: 2,
		rounding: 0,
		code: "CZK",
		name_plural: "Czech Rekorunas"
	} },
	{ DJF: {
		symbol: "Fdj",
		name: "Djiboutian Franc",
		symbol_native: "Fdj",
		decimal_digits: 0,
		rounding: 0,
		code: "DJF",
		name_plural: "Djiboutian francs"
	} },
	{ DKK: {
		symbol: "Dkr",
		name: "Danish Krone",
		symbol_native: "kr",
		decimal_digits: 2,
		rounding: 0,
		code: "DKK",
		name_plural: "Danish kroner"
	} },
	{ DOP: {
		symbol: "RD$",
		name: "Dominican Peso",
		symbol_native: "RD$",
		decimal_digits: 2,
		rounding: 0,
		code: "DOP",
		name_plural: "Dominican pesos"
	} },
	{ DZD: {
		symbol: "DA",
		name: "Algerian Dinar",
		symbol_native: "د.ج.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "DZD",
		name_plural: "Algerian dinars"
	} },
	{ EEK: {
		symbol: "Ekr",
		name: "Estonian Kroon",
		symbol_native: "kr",
		decimal_digits: 2,
		rounding: 0,
		code: "EEK",
		name_plural: "Estonian kroons"
	} },
	{ EGP: {
		symbol: "EGP",
		name: "Egyptian Pound",
		symbol_native: "ج.م.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "EGP",
		name_plural: "Egyptian pounds"
	} },
	{ ERN: {
		symbol: "Nfk",
		name: "Eritrean Nakfa",
		symbol_native: "Nfk",
		decimal_digits: 2,
		rounding: 0,
		code: "ERN",
		name_plural: "Eritrean nakfas"
	} },
	{ ETB: {
		symbol: "Br",
		name: "Ethiopian Birr",
		symbol_native: "Br",
		decimal_digits: 2,
		rounding: 0,
		code: "ETB",
		name_plural: "Ethiopian birrs"
	} },
	{ GBP: {
		symbol: "£",
		name: "British Pound Sterling",
		symbol_native: "£",
		decimal_digits: 2,
		rounding: 0,
		code: "GBP",
		name_plural: "British pounds sterling"
	} },
	{ GEL: {
		symbol: "GEL",
		name: "Georgian Lari",
		symbol_native: "GEL",
		decimal_digits: 2,
		rounding: 0,
		code: "GEL",
		name_plural: "Georgian laris"
	} },
	{ GHS: {
		symbol: "GH₵",
		name: "Ghanaian Cedi",
		symbol_native: "GH₵",
		decimal_digits: 2,
		rounding: 0,
		code: "GHS",
		name_plural: "Ghanaian cedis"
	} },
	{ GNF: {
		symbol: "FG",
		name: "Guinean Franc",
		symbol_native: "FG",
		decimal_digits: 0,
		rounding: 0,
		code: "GNF",
		name_plural: "Guinean francs"
	} },
	{ GTQ: {
		symbol: "GTQ",
		name: "Guatemalan Quetzal",
		symbol_native: "Q",
		decimal_digits: 2,
		rounding: 0,
		code: "GTQ",
		name_plural: "Guatemalan quetzals"
	} },
	{ HKD: {
		symbol: "HK$",
		name: "Hong Kong Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "HKD",
		name_plural: "Hong Kong dollars"
	} },
	{ HNL: {
		symbol: "HNL",
		name: "Honduran Lempira",
		symbol_native: "L",
		decimal_digits: 2,
		rounding: 0,
		code: "HNL",
		name_plural: "Honduran lempiras"
	} },
	{ HRK: {
		symbol: "kn",
		name: "Croatian Kuna",
		symbol_native: "kn",
		decimal_digits: 2,
		rounding: 0,
		code: "HRK",
		name_plural: "Croatian kunas"
	} },
	{ HUF: {
		symbol: "Ft",
		name: "Hungarian Forint",
		symbol_native: "Ft",
		decimal_digits: 0,
		rounding: 0,
		code: "HUF",
		name_plural: "Hungarian forints"
	} },
	{ IDR: {
		symbol: "Rp",
		name: "Indonesian Rupiah",
		symbol_native: "Rp",
		decimal_digits: 0,
		rounding: 0,
		code: "IDR",
		name_plural: "Indonesian rupiahs"
	} },
	{ ILS: {
		symbol: "₪",
		name: "Israeli New Sheqel",
		symbol_native: "₪",
		decimal_digits: 2,
		rounding: 0,
		code: "ILS",
		name_plural: "Israeli new sheqels"
	} },
	{ INR: {
		symbol: "Rs",
		name: "Indian Rupee",
		symbol_native: "টকা",
		decimal_digits: 2,
		rounding: 0,
		code: "INR",
		name_plural: "Indian rupees"
	} },
	{ IQD: {
		symbol: "IQD",
		name: "Iraqi Dinar",
		symbol_native: "د.ع.‏",
		decimal_digits: 0,
		rounding: 0,
		code: "IQD",
		name_plural: "Iraqi dinars"
	} },
	{ IRR: {
		symbol: "IRR",
		name: "Iranian Rial",
		symbol_native: "﷼",
		decimal_digits: 0,
		rounding: 0,
		code: "IRR",
		name_plural: "Iranian rials"
	} },
	{ ISK: {
		symbol: "Ikr",
		name: "Icelandic Króna",
		symbol_native: "kr",
		decimal_digits: 0,
		rounding: 0,
		code: "ISK",
		name_plural: "Icelandic krónur"
	} },
	{ JMD: {
		symbol: "J$",
		name: "Jamaican Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "JMD",
		name_plural: "Jamaican dollars"
	} },
	{ JOD: {
		symbol: "JD",
		name: "Jordanian Dinar",
		symbol_native: "د.أ.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "JOD",
		name_plural: "Jordanian dinars"
	} },
	{ JPY: {
		symbol: "¥",
		name: "Japanese Yen",
		symbol_native: "￥",
		decimal_digits: 0,
		rounding: 0,
		code: "JPY",
		name_plural: "Japanese yen"
	} },
	{ KES: {
		symbol: "Ksh",
		name: "Kenyan Shilling",
		symbol_native: "Ksh",
		decimal_digits: 2,
		rounding: 0,
		code: "KES",
		name_plural: "Kenyan shillings"
	} },
	{ KHR: {
		symbol: "KHR",
		name: "Cambodian Riel",
		symbol_native: "៛",
		decimal_digits: 2,
		rounding: 0,
		code: "KHR",
		name_plural: "Cambodian riels"
	} },
	{ KMF: {
		symbol: "CF",
		name: "Comorian Franc",
		symbol_native: "FC",
		decimal_digits: 0,
		rounding: 0,
		code: "KMF",
		name_plural: "Comorian francs"
	} },
	{ KRW: {
		symbol: "₩",
		name: "South Korean Won",
		symbol_native: "₩",
		decimal_digits: 0,
		rounding: 0,
		code: "KRW",
		name_plural: "South Korean won"
	} },
	{ KWD: {
		symbol: "KD",
		name: "Kuwaiti Dinar",
		symbol_native: "د.ك.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "KWD",
		name_plural: "Kuwaiti dinars"
	} },
	{ KZT: {
		symbol: "KZT",
		name: "Kazakhstani Tenge",
		symbol_native: "тңг.",
		decimal_digits: 2,
		rounding: 0,
		code: "KZT",
		name_plural: "Kazakhstani tenges"
	} },
	{ LBP: {
		symbol: "LB£",
		name: "Lebanese Pound",
		symbol_native: "ل.ل.‏",
		decimal_digits: 0,
		rounding: 0,
		code: "LBP",
		name_plural: "Lebanese pounds"
	} },
	{ LKR: {
		symbol: "SLRs",
		name: "Sri Lankan Rupee",
		symbol_native: "SL Re",
		decimal_digits: 2,
		rounding: 0,
		code: "LKR",
		name_plural: "Sri Lankan rupees"
	} },
	{ LTL: {
		symbol: "Lt",
		name: "Lithuanian Litas",
		symbol_native: "Lt",
		decimal_digits: 2,
		rounding: 0,
		code: "LTL",
		name_plural: "Lithuanian litai"
	} },
	{ LVL: {
		symbol: "Ls",
		name: "Latvian Lats",
		symbol_native: "Ls",
		decimal_digits: 2,
		rounding: 0,
		code: "LVL",
		name_plural: "Latvian lati"
	} },
	{ LYD: {
		symbol: "LD",
		name: "Libyan Dinar",
		symbol_native: "د.ل.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "LYD",
		name_plural: "Libyan dinars"
	} },
	{ MAD: {
		symbol: "MAD",
		name: "Moroccan Dirham",
		symbol_native: "د.م.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "MAD",
		name_plural: "Moroccan dirhams"
	} },
	{ MDL: {
		symbol: "MDL",
		name: "Moldovan Leu",
		symbol_native: "MDL",
		decimal_digits: 2,
		rounding: 0,
		code: "MDL",
		name_plural: "Moldovan lei"
	} },
	{ MGA: {
		symbol: "MGA",
		name: "Malagasy Ariary",
		symbol_native: "MGA",
		decimal_digits: 0,
		rounding: 0,
		code: "MGA",
		name_plural: "Malagasy Ariaries"
	} },
	{ MKD: {
		symbol: "MKD",
		name: "Macedonian Denar",
		symbol_native: "MKD",
		decimal_digits: 2,
		rounding: 0,
		code: "MKD",
		name_plural: "Macedonian denari"
	} },
	{ MMK: {
		symbol: "MMK",
		name: "Myanma Kyat",
		symbol_native: "K",
		decimal_digits: 0,
		rounding: 0,
		code: "MMK",
		name_plural: "Myanma kyats"
	} },
	{ MOP: {
		symbol: "MOP$",
		name: "Macanese Pataca",
		symbol_native: "MOP$",
		decimal_digits: 2,
		rounding: 0,
		code: "MOP",
		name_plural: "Macanese patacas"
	} },
	{ MUR: {
		symbol: "MURs",
		name: "Mauritian Rupee",
		symbol_native: "MURs",
		decimal_digits: 0,
		rounding: 0,
		code: "MUR",
		name_plural: "Mauritian rupees"
	} },
	{ MXN: {
		symbol: "MX$",
		name: "Mexican Peso",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "MXN",
		name_plural: "Mexican pesos"
	} },
	{ MYR: {
		symbol: "RM",
		name: "Malaysian Ringgit",
		symbol_native: "RM",
		decimal_digits: 2,
		rounding: 0,
		code: "MYR",
		name_plural: "Malaysian ringgits"
	} },
	{ MZN: {
		symbol: "MTn",
		name: "Mozambican Metical",
		symbol_native: "MTn",
		decimal_digits: 2,
		rounding: 0,
		code: "MZN",
		name_plural: "Mozambican meticals"
	} },
	{ NAD: {
		symbol: "N$",
		name: "Namibian Dollar",
		symbol_native: "N$",
		decimal_digits: 2,
		rounding: 0,
		code: "NAD",
		name_plural: "Namibian dollars"
	} },
	{ NGN: {
		symbol: "₦",
		name: "Nigerian Naira",
		symbol_native: "₦",
		decimal_digits: 2,
		rounding: 0,
		code: "NGN",
		name_plural: "Nigerian nairas"
	} },
	{ NIO: {
		symbol: "C$",
		name: "Nicaraguan Córdoba",
		symbol_native: "C$",
		decimal_digits: 2,
		rounding: 0,
		code: "NIO",
		name_plural: "Nicaraguan córdobas"
	} },
	{ NOK: {
		symbol: "Nkr",
		name: "Norwegian Krone",
		symbol_native: "kr",
		decimal_digits: 2,
		rounding: 0,
		code: "NOK",
		name_plural: "Norwegian kroner"
	} },
	{ NPR: {
		symbol: "NPRs",
		name: "Nepalese Rupee",
		symbol_native: "नेरू",
		decimal_digits: 2,
		rounding: 0,
		code: "NPR",
		name_plural: "Nepalese rupees"
	} },
	{ NZD: {
		symbol: "NZ$",
		name: "New Zealand Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "NZD",
		name_plural: "New Zealand dollars"
	} },
	{ OMR: {
		symbol: "OMR",
		name: "Omani Rial",
		symbol_native: "ر.ع.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "OMR",
		name_plural: "Omani rials"
	} },
	{ PAB: {
		symbol: "B/.",
		name: "Panamanian Balboa",
		symbol_native: "B/.",
		decimal_digits: 2,
		rounding: 0,
		code: "PAB",
		name_plural: "Panamanian balboas"
	} },
	{ PEN: {
		symbol: "S/.",
		name: "Peruvian Nuevo Sol",
		symbol_native: "S/.",
		decimal_digits: 2,
		rounding: 0,
		code: "PEN",
		name_plural: "Peruvian nuevos soles"
	} },
	{ PHP: {
		symbol: "₱",
		name: "Philippine Peso",
		symbol_native: "₱",
		decimal_digits: 2,
		rounding: 0,
		code: "PHP",
		name_plural: "Philippine pesos"
	} },
	{ PKR: {
		symbol: "PKRs",
		name: "Pakistani Rupee",
		symbol_native: "₨",
		decimal_digits: 0,
		rounding: 0,
		code: "PKR",
		name_plural: "Pakistani rupees"
	} },
	{ PLN: {
		symbol: "zł",
		name: "Polish Zloty",
		symbol_native: "zł",
		decimal_digits: 2,
		rounding: 0,
		code: "PLN",
		name_plural: "Polish zlotys"
	} },
	{ PYG: {
		symbol: "₲",
		name: "Paraguayan Guarani",
		symbol_native: "₲",
		decimal_digits: 0,
		rounding: 0,
		code: "PYG",
		name_plural: "Paraguayan guaranis"
	} },
	{ QAR: {
		symbol: "QR",
		name: "Qatari Rial",
		symbol_native: "ر.ق.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "QAR",
		name_plural: "Qatari rials"
	} },
	{ RON: {
		symbol: "RON",
		name: "Romanian Leu",
		symbol_native: "RON",
		decimal_digits: 2,
		rounding: 0,
		code: "RON",
		name_plural: "Romanian lei"
	} },
	{ RSD: {
		symbol: "din.",
		name: "Serbian Dinar",
		symbol_native: "дин.",
		decimal_digits: 0,
		rounding: 0,
		code: "RSD",
		name_plural: "Serbian dinars"
	} },
	{ RUB: {
		symbol: "RUB",
		name: "Russian Ruble",
		symbol_native: "₽.",
		decimal_digits: 2,
		rounding: 0,
		code: "RUB",
		name_plural: "Russian rubles"
	} },
	{ RWF: {
		symbol: "RWF",
		name: "Rwandan Franc",
		symbol_native: "FR",
		decimal_digits: 0,
		rounding: 0,
		code: "RWF",
		name_plural: "Rwandan francs"
	} },
	{ SAR: {
		symbol: "SR",
		name: "Saudi Riyal",
		symbol_native: "ر.س.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "SAR",
		name_plural: "Saudi riyals"
	} },
	{ SDG: {
		symbol: "SDG",
		name: "Sudanese Pound",
		symbol_native: "SDG",
		decimal_digits: 2,
		rounding: 0,
		code: "SDG",
		name_plural: "Sudanese pounds"
	} },
	{ SEK: {
		symbol: "Skr",
		name: "Swedish Krona",
		symbol_native: "kr",
		decimal_digits: 2,
		rounding: 0,
		code: "SEK",
		name_plural: "Swedish kronor"
	} },
	{ SGD: {
		symbol: "S$",
		name: "Singapore Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "SGD",
		name_plural: "Singapore dollars"
	} },
	{ SOS: {
		symbol: "Ssh",
		name: "Somali Shilling",
		symbol_native: "Ssh",
		decimal_digits: 0,
		rounding: 0,
		code: "SOS",
		name_plural: "Somali shillings"
	} },
	{ SYP: {
		symbol: "SY£",
		name: "Syrian Pound",
		symbol_native: "ل.س.‏",
		decimal_digits: 0,
		rounding: 0,
		code: "SYP",
		name_plural: "Syrian pounds"
	} },
	{ THB: {
		symbol: "฿",
		name: "Thai Baht",
		symbol_native: "฿",
		decimal_digits: 2,
		rounding: 0,
		code: "THB",
		name_plural: "Thai baht"
	} },
	{ TND: {
		symbol: "DT",
		name: "Tunisian Dinar",
		symbol_native: "د.ت.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "TND",
		name_plural: "Tunisian dinars"
	} },
	{ TOP: {
		symbol: "T$",
		name: "Tongan Paʻanga",
		symbol_native: "T$",
		decimal_digits: 2,
		rounding: 0,
		code: "TOP",
		name_plural: "Tongan paʻanga"
	} },
	{ TRY: {
		symbol: "TL",
		name: "Turkish Lira",
		symbol_native: "TL",
		decimal_digits: 2,
		rounding: 0,
		code: "TRY",
		name_plural: "Turkish Lira"
	} },
	{ TTD: {
		symbol: "TT$",
		name: "Trinidad and Tobago Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "TTD",
		name_plural: "Trinidad and Tobago dollars"
	} },
	{ TWD: {
		symbol: "NT$",
		name: "New Taiwan Dollar",
		symbol_native: "NT$",
		decimal_digits: 2,
		rounding: 0,
		code: "TWD",
		name_plural: "New Taiwan dollars"
	} },
	{ TZS: {
		symbol: "TSh",
		name: "Tanzanian Shilling",
		symbol_native: "TSh",
		decimal_digits: 0,
		rounding: 0,
		code: "TZS",
		name_plural: "Tanzanian shillings"
	} },
	{ UAH: {
		symbol: "₴",
		name: "Ukrainian Hryvnia",
		symbol_native: "₴",
		decimal_digits: 2,
		rounding: 0,
		code: "UAH",
		name_plural: "Ukrainian hryvnias"
	} },
	{ UGX: {
		symbol: "USh",
		name: "Ugandan Shilling",
		symbol_native: "USh",
		decimal_digits: 0,
		rounding: 0,
		code: "UGX",
		name_plural: "Ugandan shillings"
	} },
	{ UYU: {
		symbol: "$U",
		name: "Uruguayan Peso",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "UYU",
		name_plural: "Uruguayan pesos"
	} },
	{ UZS: {
		symbol: "UZS",
		name: "Uzbekistan Som",
		symbol_native: "UZS",
		decimal_digits: 0,
		rounding: 0,
		code: "UZS",
		name_plural: "Uzbekistan som"
	} },
	{ VEF: {
		symbol: "Bs.F.",
		name: "Venezuelan Bolívar",
		symbol_native: "Bs.F.",
		decimal_digits: 2,
		rounding: 0,
		code: "VEF",
		name_plural: "Venezuelan bolívars"
	} },
	{ VND: {
		symbol: "₫",
		name: "Vietnamese Dong",
		symbol_native: "₫",
		decimal_digits: 0,
		rounding: 0,
		code: "VND",
		name_plural: "Vietnamese dong"
	} },
	{ XAF: {
		symbol: "FCFA",
		name: "CFA Franc BEAC",
		symbol_native: "FCFA",
		decimal_digits: 0,
		rounding: 0,
		code: "XAF",
		name_plural: "CFA francs BEAC"
	} },
	{ XOF: {
		symbol: "CFA",
		name: "CFA Franc BCEAO",
		symbol_native: "CFA",
		decimal_digits: 0,
		rounding: 0,
		code: "XOF",
		name_plural: "CFA francs BCEAO"
	} },
	{ YER: {
		symbol: "YR",
		name: "Yemeni Rial",
		symbol_native: "ر.ي.‏",
		decimal_digits: 0,
		rounding: 0,
		code: "YER",
		name_plural: "Yemeni rials"
	} },
	{ ZAR: {
		symbol: "R",
		name: "South African Rand",
		symbol_native: "R",
		decimal_digits: 2,
		rounding: 0,
		code: "ZAR",
		name_plural: "South African rand"
	} },
	{ ZMK: {
		symbol: "ZK",
		name: "Zambian Kwacha",
		symbol_native: "ZK",
		decimal_digits: 0,
		rounding: 0,
		code: "ZMK",
		name_plural: "Zambian kwachas"
	} },
	{ ZWL: {
		symbol: "ZWL$",
		name: "Zimbabwean Dollar",
		symbol_native: "ZWL$",
		decimal_digits: 0,
		rounding: 0,
		code: "ZWL",
		name_plural: "Zimbabwean Dollar"
	} }
], Zs = "1", Qs = class extends O {
	constructor(e) {
		super(), this.version = "1", this.displayedMetadataFields = [], this.orderSpecificMetadataFields = [], this.showHistory = !0, this.timePeriod = yo.Day, this.periodAmount = 1, e && Object.assign(this, e);
	}
}, $s = "1", ec = class {
	constructor(e) {
		this.version = "1", e && Object.assign(this, e);
	}
}, tc = "8", nc = class {
	constructor(e = 0, t = 0) {
		this.lng = t, this.lat = e;
	}
}, rc = class extends O {
	constructor() {
		super(), this.Marker = [], this.mapGroups = [], this.version = "8", this.headerExpanded = !1, this.autoZoom = !0, this.defaultZoom = 20;
	}
}, ic;
(function(e) {
	e.Live = "Live";
})(ic ||= {});
var ac = Object.assign(Object.assign({}, ic), Er), oc = class {
	constructor() {
		this.intervalType = ic.Live;
	}
}, sc = class {}, cc = class {}, lc = class {
	constructor() {}
}, uc = class extends lc {}, dc = class extends lc {
	constructor() {
		super(), this.filterId = null, this.eventFilter = "Group";
	}
	static isEventBadge(e) {
		return e.eventFilter !== void 0;
	}
}, fc = "3", pc;
(function(e) {
	e.LastValue = "LastValue", e.Difference = "Difference", e.Average = "Average";
})(pc ||= {});
var mc = {
	showTimestamp: !0,
	showLatLng: !0,
	showDuration: !0
}, hc = class extends O {
	constructor(e = {}) {
		super(), Object.assign(this, e), this.version = "3";
	}
}, gc = "1", _c = class extends O {
	constructor() {
		super(), this.version = "1";
	}
}, vc;
(function(e) {
	e.Ongoing = "Ongoing", e.Canceled = "Canceled", e.Completed = "Completed";
})(vc ||= {});
var yc = "2", bc = class extends O {
	constructor(e) {
		super(), this.version = "2", e && Object.assign(this, e);
	}
}, xc;
(function(e) {
	e.Open = "Open", e.History = "History", e.All = "All";
})(xc ||= {});
var Sc;
(function(e) {
	e.Group = "Group", e.Service = "Service";
})(Sc ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-type-plate-config.js
var Cc = "1", wc = class extends O {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, Tc = class extends O {
	constructor(e = "", t = !1) {
		super(), this.title = e, this.headerExpanded = t;
	}
}, Ec = "1", Dc = class extends O {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, Oc;
(function(e) {
	e.Group = "Group", e.Entity = "Entity";
})(Oc ||= {});
var kc;
(function(e) {
	e[e.Add = 0] = "Add", e[e.Update = 1] = "Update", e[e.Delete = 2] = "Delete";
})(kc ||= {});
var Ac;
(function(e) {
	e.ResetCounter_1 = "ResetCounter_1", e.Set = "Set", e.SetManualValue = "SetManualValue", e.SetNote = "SetNote", e.SetLive = "SetLive", e.SendConfig = "SendConfig", e.ImportHistoricalValues = "ImportHistoricalValues", e.HistoricalValueManipulation = "HistoricalValueManipulation", e.Deactivated = "Deactivated", e.Activated = "Activated", e.ResetBatchReview = "ResetBatchReview", e.LicenseRenewal = "LicenseRenewal";
})(Ac ||= {});
var jc;
(function(e) {
	e.Group = "GROUP", e.Signal = "SIGNAL", e.Formula = "FORMULA", e.Datasource = "DATASOURCE", e.DataConnection = "DATACONNECTION", e.Dashboard = "DASHBOARD", e.DashboardTab = "DASHBOARDTAB", e.ProcessImage = "PROCESSIMAGE", e.ReportTemplate = "REPORTTEMPLATE", e.Report = "REPORT", e.Camera = "CAMERA", e.SwitchSchedule = "SWITCHSCHEDULE", e.RecipientGroup = "RECIPIENTGROUP", e.Recipient = "RECIPIENT", e.AlarmingPlan = "ALARMINGPLAN", e.Role = "ROLE", e.Condition = "CONDITION", e.EventDefinition = "EVENTDEFINITION", e.EventCategory = "EVENTCATEGORY", e.BatchDefinition = "BATCHDEFINITION";
})(jc ||= {});
var Mc = "2", Nc = class extends O {
	constructor() {
		super(), this.version = "2";
	}
}, Pc = "1", Fc = class extends O {
	constructor() {
		super(), this.version = "1";
	}
}, Ic = "2", Lc = class extends O {
	constructor() {
		super(), this.version = "2";
	}
}, Rc = "1", zc = class extends O {
	constructor() {
		super(), this.version = "1";
	}
}, Bc;
(function(e) {
	e.STAR = "*", e.SELF = "self", e.SRC = "src", e.NONE = "none", e.ORIGINS = "origins";
})(Bc ||= {});
var Vc;
(function(e) {
	e.LAZY = "lazy", e.EAGER = "eager", e.AUTO = "auto";
})(Vc ||= {});
var Hc = "1", Uc = class extends O {
	constructor() {
		super(), this.title = "", this.version = "1", this.headerExpanded = !1, this.permissions = "", this.restrictions = [], this.src = null, this.loadingMethod = "auto";
	}
}, Wc = "1", Gc = class extends O {
	constructor() {
		super(), this.version = "1";
	}
}, Kc = "2", qc = class extends O {
	constructor() {
		super(), this.ReferenceId = "", this.sidebarExpandedOnLargeWidget = !1, this.version = "2";
	}
}, Jc = "1", Yc = class extends O {
	constructor() {
		super(), this.AlarmingPlanID = [], this.version = "1";
	}
}, Xc = "1", Zc = class extends O {
	constructor() {
		super(), this.alarmingPlanIds = [], this.version = "1";
	}
}, Qc;
(function(e) {
	e.EmailContact = "EmailContact", e.PushoverContact = "PushoverContact", e.SmsContact = "SmsContact", e.VoipContact = "VoipContact", e.TeamsContact = "TeamsContact", e.TelegramContact = "TelegramContact";
})(Qc ||= {});
var $c = "5", el = class extends O {
	constructor() {
		super(), this.version = "5", this.showContacts = !1, this.showContactsMatrix = {}, this.allowEditing = !1, this.editableRecipientIds = [];
	}
}, tl = "1", nl = class extends O {
	constructor() {
		super(), this.title = "Widget", this.version = "1", this.recipientGroupId = "";
	}
}, rl;
(function(e) {
	e.Group = "Group", e.EventCategory = "EventCategory", e.EventDefinition = "EventDefinition";
})(rl ||= {});
var il;
(function(e) {
	e.Group = "GROUP", e.EventCategory = "EVENTCATEGORY", e.EventDefinition = "EVENTDEFINITION";
})(il ||= {});
var al = "1", ol = class extends O {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, sl = "1", cl = class extends O {
	constructor() {
		super(), this.Events = [], this.version = "1";
	}
}, ll = "1", ul = class extends O {
	constructor(e) {
		super(), this.version = "1", this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, dl = "2", fl = class extends O {
	constructor(e) {
		super(), this.version = "2", this.filterType = "Group", this.onlyActive = !1, this.requestIntervalType = pl.Minutes, this.requestInterval = 5, this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, pl;
(function(e) {
	e.Seconds = "Seconds", e.Minutes = "Minutes";
})(pl ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-entered-alarming-config.js
var ml = "2", hl = class extends O {
	constructor() {
		super(), this.version = "2", this.DateIntervalType = gl.Day, this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1;
	}
}, gl;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month";
})(gl ||= {});
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function _l(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: vl } = Object.prototype, { getPrototypeOf: yl } = Object, { iterator: bl, toStringTag: xl } = Symbol, Sl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Cl = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), wl = (e, t, n) => e === Object.prototype || !n && t === null, Tl = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (Cl(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, El = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = yl(n);
		if (wl(n, i, n === e)) return !1;
		if (Sl(n, t)) return !0;
		n = i;
	}
	return !1;
}, Dl = (e, t) => e != null && El(e, t) ? e[t] : void 0, Ol = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = yl(e);
	if (t === null && Tl(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : yl(a);
		if (wl(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) Cl(t) || Sl(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, kl = ((e) => (t) => {
	let n = vl.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), Al = (e) => (e = e.toLowerCase(), (t) => kl(t) === e), jl = (e) => (t) => typeof t === e, { isArray: Ml } = Array, Nl = jl("undefined");
function Pl(e) {
	return e !== null && !Nl(e) && e.constructor !== null && !Nl(e.constructor) && Rl(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Fl = Al("ArrayBuffer");
function Il(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Fl(e.buffer), t;
}
var Ll = jl("string"), Rl = jl("function"), zl = jl("number"), Bl = (e) => typeof e == "object" && !!e, Vl = (e) => e === !0 || e === !1, Hl = (e) => {
	if (!Bl(e)) return !1;
	let t = yl(e);
	return (t === null || t === Object.prototype || yl(t) === null) && !El(e, xl) && !El(e, bl);
}, Ul = (e) => {
	if (!Bl(e) || Pl(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, Wl = Al("Date"), Gl = Al("File"), Kl = (e) => !!(e && e.uri !== void 0), ql = (e) => e && e.getParts !== void 0, Jl = Al("Blob"), Yl = Al("FileList"), Xl = Al("Set"), Zl = (e) => Bl(e) && Rl(e.pipe);
function Ql() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var $l = Ql(), eu = $l.FormData === void 0 ? void 0 : $l.FormData, tu = (e) => {
	if (!e) return !1;
	if (eu && e instanceof eu) return !0;
	let t = yl(e);
	if (!t || t === Object.prototype || !Rl(e.append)) return !1;
	let n = kl(e);
	return n === "formdata" || n === "object" && Rl(e.toString) && e.toString() === "[object FormData]";
}, nu = Al("URLSearchParams"), [ru, iu, au, ou] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(Al), su = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cu(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), Ml(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (Pl(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function lu(e, t) {
	if (Pl(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var uu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, du = (e) => !Nl(e) && e !== uu;
function fu(...e) {
	let { caseless: t, skipUndefined: n } = du(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && lu(r, i) || i, o = Sl(r, a) ? r[a] : void 0;
		Hl(o) && Hl(e) ? r[a] = fu(o, e) : Hl(e) ? r[a] = fu({}, e) : Ml(e) ? r[a] = e.slice() : (!n || !Nl(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || Pl(n) || (cu(n, i), typeof n != "object" || Ml(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			wu.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var pu = (e, t, n, { allOwnKeys: r } = {}) => (cu(t, (t, r) => {
	n && Rl(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: _l(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		__proto__: null,
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), mu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), hu = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, gu = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && yl(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, _u = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, vu = (e) => {
	if (!e) return null;
	if (Ml(e)) return e;
	let t = e.length;
	if (!zl(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, yu = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && yl(Uint8Array)), bu = (e, t) => {
	let n = (e && e[bl]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, xu = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Su = Al("HTMLFormElement"), Cu = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: wu } = Object.prototype, Tu = Al("RegExp"), Eu = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	cu(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, Du = (e) => {
	Eu(e, (t, n) => {
		if (Rl(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (Rl(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Ou = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return Ml(e) ? r(e) : r(String(e).split(t)), n;
}, ku = () => {}, Au = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ju(e) {
	return !!(e && Rl(e.append) && e[xl] === "FormData" && e[bl]);
}
var Mu = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (Bl(e)) {
			if (t.has(e)) return;
			if (Pl(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Xl(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!Nl(e) && r.push(e);
					}
				} else r = Ml(e) ? [] : {}, cu(e, (e, t) => {
					let i = n(e);
					!Nl(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Nu = Al("AsyncFunction"), Pu = (e) => e && (Bl(e) || Rl(e)) && Rl(e.then) && Rl(e.catch), Fu = ((e, t) => e ? setImmediate : t ? ((e, t) => (uu.addEventListener("message", ({ source: n, data: r }) => {
	n === uu && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), uu.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", Rl(uu.postMessage)), Iu = typeof queueMicrotask < "u" ? queueMicrotask.bind(uu) : typeof process < "u" && process.nextTick || Fu, Lu = (e) => e != null && Rl(e[bl]), k = {
	isArray: Ml,
	isArrayBuffer: Fl,
	isBuffer: Pl,
	isFormData: tu,
	isArrayBufferView: Il,
	isString: Ll,
	isNumber: zl,
	isBoolean: Vl,
	isObject: Bl,
	isPlainObject: Hl,
	isEmptyObject: Ul,
	isReadableStream: ru,
	isRequest: iu,
	isResponse: au,
	isHeaders: ou,
	isUndefined: Nl,
	isDate: Wl,
	isFile: Gl,
	isReactNativeBlob: Kl,
	isReactNative: ql,
	isBlob: Jl,
	isRegExp: Tu,
	isFunction: Rl,
	isStream: Zl,
	isURLSearchParams: nu,
	isTypedArray: yu,
	isFileList: Yl,
	forEach: cu,
	merge: fu,
	extend: pu,
	trim: su,
	stripBOM: mu,
	inherits: hu,
	toFlatObject: gu,
	kindOf: kl,
	kindOfTest: Al,
	endsWith: _u,
	toArray: vu,
	forEachEntry: bu,
	matchAll: xu,
	isHTMLForm: Su,
	hasOwnProperty: Sl,
	hasOwnProp: Sl,
	hasOwnInPrototypeChain: El,
	getSafeProp: Dl,
	toSafeFlatObject: Ol,
	reduceDescriptors: Eu,
	freezeMethods: Du,
	toObjectSet: Ou,
	toCamelCase: Cu,
	noop: ku,
	toFiniteNumber: Au,
	findKey: lu,
	global: uu,
	isContextDefined: du,
	isSpecCompliantForm: ju,
	toJSONObject: Mu,
	isAsyncFn: Nu,
	isThenable: Pu,
	setImmediate: Fu,
	asap: Iu,
	isIterable: Lu,
	isSafeIterable: (e) => e != null && El(e, bl) && Lu(e)
}, Ru = k.toObjectSet([
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
]), zu = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = k.hasOwnProp(t, n);
		!n || a && k.hasOwnProp(Ru, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Bu(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var Vu = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Hu = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Uu(e, t) {
	return k.isArray(e) ? e.map((e) => Uu(e, t)) : Bu(String(e).replace(t, ""));
}
var Wu = (e) => Uu(e, Vu), Gu = (e) => Uu(e, Hu);
function Ku(e) {
	let t = Object.create(null);
	return k.forEach(e.toJSON(), (e, n) => {
		t[n] = Gu(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var qu = Symbol("internals");
function Ju(e) {
	return e && String(e).trim().toLowerCase();
}
function Yu(e) {
	return e === !1 || e == null ? e : k.isArray(e) ? e.map(Yu) : Wu(String(e));
}
function Xu(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Zu = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Qu(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
function $u(e) {
	let t = e.length - 1;
	if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
	let n = "";
	for (let r = 1; r < t; r++) {
		let i = e.charCodeAt(r);
		if (i === 34 || i === 92 && (r += 1, r >= t)) return e;
		n += e[r];
	}
	return n;
}
function ed(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = Qu(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = Qu(i.slice(0, a));
		if (!Zu.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = Qu(i.slice(a + 1));
		t[s] = $u(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var td = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nd(e, t, n, r, i) {
	if (k.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), k.isString(t)) {
		if (k.isString(r)) return t.indexOf(r) !== -1;
		if (k.isRegExp(r)) return r.test(t);
	}
}
function rd(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function id(e, t) {
	let n = k.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var ad = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Ju(t);
			if (!i) return;
			let a = k.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Yu(e));
		}
		let a = (e, t) => k.forEach(e, (e, n) => i(e, n, t));
		if (k.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (k.isString(e) && (e = e.trim()) && !td(e)) a(zu(e), t);
		else if (k.isObject(e) && k.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!k.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], k.hasOwnProp(n, i) ? (r = n[i], n[i] = k.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Ju(e), e) {
			let n = k.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Xu(e);
				if (k.isFunction(t)) return t.call(this, e, n);
				if (k.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Ju(e), e) {
			let n = k.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || nd(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Ju(e), e) {
				let i = k.findKey(n, e);
				i && (!t || nd(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return k.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || nd(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return k.forEach(this, (r, i) => {
			let a = k.findKey(n, i);
			if (a) {
				t[a] = Yu(r), delete t[i];
				return;
			}
			let o = e ? rd(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Yu(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return k.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && k.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		let e = this.get("set-cookie");
		return k.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return ed(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[qu] = this[qu] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Ju(e);
			t[r] || (id(n, e), t[r] = !0);
		}
		return k.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
ad.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), k.reduceDescriptors(ad.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), k.freezeMethods(ad);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var od = "[REDACTED ****]";
function sd(e) {
	if (k.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (k.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function cd(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || k.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof ad && (e = e.toJSON()), r.push(e);
		let t;
		if (k.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			k.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!k.isPlainObject(e) && sd(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? od : i(a);
				k.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function ld(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function ud(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? ld(e.message) : ld(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var A = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && k.isArray(t.errors) && t.errors.length && (s = ud(t));
		let c = new e(s, n || t.code, r, i, a);
		return Object.defineProperty(c, "cause", {
			__proto__: null,
			value: t,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && k.hasOwnProp(e, "redact") ? e.redact : void 0, n = k.isArray(t) && t.length > 0 ? cd(e, t) : k.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
A.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", A.ERR_BAD_OPTION = "ERR_BAD_OPTION", A.ECONNABORTED = "ECONNABORTED", A.ETIMEDOUT = "ETIMEDOUT", A.ECONNREFUSED = "ECONNREFUSED", A.ERR_NETWORK = "ERR_NETWORK", A.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", A.ERR_DEPRECATED = "ERR_DEPRECATED", A.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", A.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", A.ERR_CANCELED = "ERR_CANCELED", A.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", A.ERR_INVALID_URL = "ERR_INVALID_URL", A.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function dd(e) {
	return k.isPlainObject(e) || k.isArray(e);
}
function fd(e) {
	return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pd(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = fd(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function md(e) {
	return k.isArray(e) && !e.some(dd);
}
var hd = k.toFlatObject(k, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function gd(e, t, n) {
	if (!k.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = k.getSafeProp(n, e);
		return k.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && k.isSpecCompliantForm(t), d = [];
	if (!k.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (k.isDate(e)) return e.toISOString();
		if (k.isBoolean(e)) return e.toString();
		if (!u && k.isBlob(e)) throw new A("Blob is not supported. Use a Buffer instead.");
		if (k.isArrayBuffer(e) || k.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new A("Blob is not supported. Use a Buffer instead.", A.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new A("Object is too deeply nested (" + e + " levels). Max depth: " + l, A.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!k.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (k.isReactNative(t) && k.isReactNativeBlob(e)) return t.append(pd(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (k.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (k.isArray(e) && md(e) || (k.isFileList(e) || k.endsWith(n, "[]")) && (a = k.toArray(e))) return n = fd(n), a.forEach(function(e, r) {
				!(k.isUndefined(e) || e === null) && t.append(s === !0 ? pd([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return dd(e) ? !0 : (t.append(pd(r, n, o), f(e)), !1);
	}
	let g = Object.assign(hd, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: dd
	});
	function _(e, n, r = 0) {
		if (!k.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), k.forEach(e, function(e, i) {
				(!(k.isUndefined(e) || e === null) && a.call(t, e, k.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!k.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function _d(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function vd(e, t) {
	this._pairs = [], e && gd(e, this, t);
}
var yd = vd.prototype;
yd.append = function(e, t) {
	this._pairs.push([e, t]);
}, yd.toString = function(e) {
	let t = e ? (t) => e.call(this, t, _d) : _d;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function bd(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function xd(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = k.isFunction(n) ? { serialize: n } : n, i = k.getSafeProp(r, "encode") || bd, a = k.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : k.isURLSearchParams(t) ? t.toString() : new vd(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var Sd = Symbol("internals");
function Cd(e) {
	return e ? e.length : 0;
}
function wd(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function Td(e, t) {
	let n = e.handlers, r = Cd(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var Ed = class {
	constructor() {
		this.handlers = [], this[Sd] = {
			handlersRef: this.handlers,
			handlersLength: this.handlers.length,
			handlerEntries: /* @__PURE__ */ new Map(),
			iterationDepth: 0,
			nextId: 0
		};
	}
	use(e, t, n) {
		let r = {
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}, i = this[Sd];
		this.handlers ??= [], Td(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[Sd];
		Td(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (wd(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], Td(this, this[Sd]));
	}
	forEach(e) {
		let t = this[Sd];
		Td(this, t), t.iterationDepth++;
		try {
			k.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (Td(this, t), wd(this.handlers), t.handlersLength = Cd(this.handlers));
		}
	}
}, Dd = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Od = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : vd,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, kd = /* @__PURE__ */ t({
	hasBrowserEnv: () => Ad,
	hasStandardBrowserEnv: () => Md,
	hasStandardBrowserWebWorkerEnv: () => Nd,
	navigator: () => jd,
	origin: () => Pd
}), Ad = typeof window < "u" && typeof document < "u", jd = typeof navigator == "object" && navigator || void 0, Md = Ad && (!jd || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(jd.product) < 0), Nd = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pd = Ad && window.location.href || "http://localhost", Fd = {
	...kd,
	...Od
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Id(e, t) {
	return gd(e, new Fd.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return Fd.isNode && k.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Ld = 100;
function Rd(e) {
	if (e > Ld) throw new A("FormData field is too deeply nested (" + e + " levels). Max depth: " + Ld, A.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function zd(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Rd(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Bd(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Vd(e) {
	function t(e, n, r, i) {
		Rd(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && k.isArray(r) ? r.length : a, s ? (k.hasOwnProp(r, a) ? r[a] = k.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!k.hasOwnProp(r, a) || !k.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && k.isArray(r[a]) && (r[a] = Bd(r[a])), !o);
	}
	if (k.isFormData(e) && k.isFunction(e.entries)) {
		let n = {};
		return k.forEachEntry(e, (e, r) => {
			t(zd(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var Hd = Object.freeze([
	"get",
	"delete",
	"head",
	"options",
	"post",
	"put",
	"patch",
	"purge",
	"link",
	"unlink",
	"query"
]), Ud = (e, t) => e != null && k.hasOwnProp(e, t) ? e[t] : void 0;
function Wd(e, t, n) {
	if (k.isString(e)) try {
		return (t || JSON.parse)(e), k.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var Gd = {
	transitional: Dd,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = k.isObject(e);
		if (i && k.isHTMLForm(e) && (e = new FormData(e)), k.isFormData(e)) return r ? JSON.stringify(Vd(e)) : e;
		if (k.isArrayBuffer(e) || k.isBuffer(e) || k.isStream(e) || k.isFile(e) || k.isBlob(e) || k.isReadableStream(e)) return e;
		if (k.isArrayBufferView(e)) return e.buffer;
		if (k.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Ud(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Id(e, t).toString();
			if ((a = k.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Ud(this, "env"), r = n && n.FormData;
				return gd(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Wd(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Ud(this, "transitional") || Gd.transitional, n = t && t.forcedJSONParsing, r = Ud(this, "responseType"), i = r === "json";
		if (k.isResponse(e) || k.isReadableStream(e)) return e;
		if (e && k.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Ud(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? A.from(e, A.ERR_BAD_RESPONSE, this, null, Ud(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: Fd.classes.FormData,
		Blob: Fd.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
k.forEach(Hd, (e) => {
	Gd.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Kd(e, t) {
	let n = this || Gd, r = t || n, i = ad.from(r.headers), a = r.data;
	return k.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function qd(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Jd = class extends A {
	constructor(e, t, n) {
		super(e ?? "canceled", A.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Yd(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new A("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? A.ERR_BAD_REQUEST : A.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var Xd = /[\t\n\r]/g;
function Zd(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Xd, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function Qd(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function $d(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/throttle.js
function ef(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [
		(...e) => {
			let t = Date.now(), s = t - n;
			s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
				a = null, o(i);
			}, r - s));
		},
		() => i && o(i),
		(...e) => o(e)
	];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var tf = (e, t, n = 3) => {
	let r = 0, i = $d(50, 250);
	return ef((n) => {
		if (!n || !k.isNumber(n.loaded)) return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = Math.max(0, o == null ? a : Math.min(a, o)), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, nf = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, rf = (e, t = k.asap) => (...n) => t(() => e(...n)), af = Fd.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Fd.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Fd.origin), Fd.navigator && /(msie|trident)/i.test(Fd.navigator.userAgent)) : () => !0, of = Fd.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		k.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), k.isString(r) && s.push(`path=${r}`), k.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), k.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) try {
				return decodeURIComponent(r.slice(i + 1));
			} catch {
				return r.slice(i + 1);
			}
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/axios/lib/helpers/isAbsoluteURL.js
function sf(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function cf(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var lf = /^https?:(?!\/\/)/i;
function uf(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${od}`);
}
function df(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${od}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${od}`);
	return n === -1 ? r : `${r}#${uf(t.slice(n + 1))}`;
}
function ff(e, t) {
	if (typeof e == "string") {
		let n = Zd(e);
		if (lf.test(n)) throw new A(`Invalid URL ${JSON.stringify(df(n))}: missing "//" after protocol`, A.ERR_INVALID_URL, t);
	}
}
function pf(e, t, n, r) {
	ff(t, r);
	let i = !sf(t);
	return e && (i || n === !1) ? (ff(e, r), cf(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var mf = (e) => e instanceof ad ? { ...e } : e, hf = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function gf(e, t) {
	e ||= {}, t ||= {};
	let n = Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return k.isPlainObject(e) && k.isPlainObject(t) ? k.merge.call({ caseless: r }, e, t) : k.isPlainObject(t) ? k.merge({}, t) : k.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!k.isUndefined(t)) return r(e, t, n, i);
		if (!k.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!k.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!k.isUndefined(t)) return r(void 0, t);
		if (!k.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = k.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!k.isUndefined(r)) {
			if (k.isPlainObject(r)) {
				if (k.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = k.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (k.isPlainObject(i) && k.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (k.hasOwnProp(t, a)) return r(n, i);
		if (k.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutErrorMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(mf(e), mf(t), n, !0)
	};
	return k.forEach(hf({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = k.hasOwnProp(l, r) ? l[r] : i, o = a(k.hasOwnProp(e, r) ? e[r] : void 0, k.hasOwnProp(t, r) ? t[r] : void 0, r);
		k.isUndefined(o) && a !== c || (n[r] = o);
	}), k.hasOwnProp(t, "validateStatus") && k.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (k.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var _f = ["content-type", "content-length"];
function vf(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		_f.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var yf = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function bf(e) {
	let t = gf({}, e), n = (e) => k.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = ad.from(s), t.url = xd(pf(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = k.getSafeProp(c, "username") || "", n = k.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? yf(n) : "")));
		} catch (t) {
			throw A.from(t, A.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (k.isFormData(r)) {
		let e = k.getSafeProp(r, "getHeaders");
		Fd.hasStandardBrowserEnv || Fd.hasStandardBrowserWebWorkerEnv || k.isReactNative(r) ? s.setContentType(void 0) : k.isFunction(e) && vf(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (Fd.hasStandardBrowserEnv && (k.isFunction(i) && (i = i(t)), i === !0 || i == null && af(t.url))) {
		let e = a && o && of.read(o);
		e && s.set(a, e);
	}
	return t;
}
var xf = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = bf(e), i = r.data, a = ad.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (Qd(Zd(r.url)) || Qd(Fd.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new A("Request aborted", A.ECONNABORTED, e, g)), h(), g = null;
				return;
			}
			try {
				i ? m && m(i) : p && p();
			} catch (e) {
				setTimeout(() => {
					throw e;
				});
			}
			if (!g) return;
			let a = ad.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Yd(function(e) {
				t(e), h();
			}, function(e) {
				n(e), h();
			}, {
				data: !o || o === "text" || o === "json" ? g.responseText : g.response,
				status: g.status,
				statusText: g.statusText,
				headers: a,
				config: e,
				request: g
			}), g = null;
		}
		"onloadend" in g ? g.onloadend = _ : g.onreadystatechange = function() {
			!g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(_);
		}, g.onabort = function() {
			g &&= (n(new A("Request aborted", A.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new A(t && t.message ? t.message : "Network Error", A.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Dd;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new A(t, i.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && k.forEach(Ku(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), k.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = tf(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = tf(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new Jd(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = Qd(r.url);
		if (v && !Fd.protocols.includes(v)) {
			n(new A("Unsupported protocol " + v + ":", A.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, Sf = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof A ? t : new Jd(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new A(`timeout of ${t}ms exceeded`, A.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => {
		if (!r) {
			if (e.aborted) {
				i.call(e);
				return;
			}
			e.addEventListener("abort", i, { once: !0 });
		}
	});
	let { signal: s } = n;
	return s.unsubscribe = () => k.asap(o), s;
}, Cf = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, wf = async function* (e, t) {
	for await (let n of Tf(e)) yield* Cf(n, t);
}, Tf = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, Ef = (e, t, n, r) => {
	let i = wf(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, Df = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Of = (e, t, n) => t + 2 < n && Df(e.charCodeAt(t + 1)) && Df(e.charCodeAt(t + 2)), kf = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Af = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, jf = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Mf = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Nf = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Pf = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && Of(e, a, t) && (o = kf(e.charCodeAt(a + 1)) * 16 + kf(e.charCodeAt(a + 2)), a += 2), !jf(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!Af(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Nf(e) : Mf(n);
}, Ff = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && Of(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function If(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return Ff(t === -1 ? e : e.slice(0, t), Pf);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Lf = "1.20.0", Rf = 65536, zf = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Bf } = k, Vf = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Hf = (e) => {
	if (!k.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Uf = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Wf = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Gf = (e) => {
	let t = k.global !== void 0 && k.global !== null ? k.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = k.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Bf(i) : typeof fetch == "function", c = Bf(a), l = Bf(o);
	if (!s) return !1;
	let u = s && Bf(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Uf(() => {
		let e = !1, t = new a(Fd.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Uf(() => k.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new A(`Response type '${e}' is not supported`, A.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (k.isBlob(e)) return e.size;
		if (k.isSpecCompliantForm(e)) return (await new a(Fd.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
		if (k.isURLSearchParams(e) && (e += ""), k.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => k.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: ee, maxContentLength: te, maxBodyLength: ne, maxRedirects: re } = bf(e), ie = k.isNumber(te) && te > -1, ae = k.isNumber(ne) && ne > -1, oe = (t) => k.hasOwnProp(e, t) ? e[t] : void 0, se = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let ce = Sf([l, d && d.toAbortSignal()], _), C = null, le = ce && ce.unsubscribe && (() => {
			ce.unsubscribe();
		}), ue, de = null, fe = () => new A("Request body larger than maxBodyLength limit", A.ERR_BAD_REQUEST, e, C);
		try {
			let i, l = oe("auth");
			if (l && (i = {
				username: k.getSafeProp(l, "username") || "",
				password: k.getSafeProp(l, "password") || ""
			}), Wf(t)) {
				let e = new URL(t, Fd.origin);
				!i && (e.username || e.password) && (i = {
					username: Hf(e.username),
					password: Hf(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Vf((i.username || "") + ":" + (i.password || ""))))), ie && typeof t == "string" && t.startsWith("data:") && If(t) > te) throw new A("maxContentLength size of " + te + " exceeded", A.ERR_BAD_RESPONSE, e, C);
			if (ae && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ue = e, e > ne)) throw fe();
			}
			let d = ae && (k.isReadableStream(s) || k.isStream(s)), _ = (e, t, n) => Ef(e, Rf, (e) => {
				if (ae && e > ne) throw de = fe();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (y || d)) {
				if (ue ??= await g(x, s), ue !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (k.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && nf(ue, tf(rf(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new A("Stream request bodies are not supported by the current fetch implementation", A.ERR_NOT_SUPPORT, e, C);
			k.isString(S) || (S = S ? "include" : "omit");
			let pe = c && "credentials" in a.prototype;
			if (k.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + Lf, !1);
			let w = ee == null ? ee : Object.assign(Object.create(null), ee);
			w && (delete w.body, delete w.headers, delete w.method, delete w.signal, delete w.duplex, delete w.credentials);
			let me = Object.assign(Object.create(null), w, {
				signal: ce,
				method: n.toUpperCase(),
				headers: Ku(x.normalize()),
				body: s,
				duplex: "half",
				credentials: pe ? S : void 0
			});
			c && (k.forEach(zf, (e, t) => {
				me[t] === void 0 && (me[t] = e);
			}), me.signal === void 0 && (me.signal = null), me.body === void 0 && (me.body = null)), re === 0 && (me.redirect = "manual", w && (w.redirect = "manual")), C = c && new a(t, me);
			let he = await (c ? se(C, w) : se(t, me)), ge = ad.from(he.headers);
			if (ie) {
				let t = k.toFiniteNumber(ge.getContentLength());
				if (t != null && t > te) throw new A("maxContentLength size of " + te + " exceeded", A.ERR_BAD_RESPONSE, e, C);
			}
			let _e = p && (b === "stream" || b === "response");
			if (p && he.body && (v || ie || _e && le)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = he[e];
				});
				let n = k.toFiniteNumber(ge.getContentLength()), [r, i] = v && nf(n, tf(rf(v), !0)) || [], a = 0;
				he = new o(Ef(he.body, Rf, (t) => {
					if (ie && (a = t, a > te)) throw new A("maxContentLength size of " + te + " exceeded", A.ERR_BAD_RESPONSE, e, C);
					r && r(t);
				}, () => {
					i && i(), le && le();
				}), t);
			}
			b ||= "text";
			let ve = await m[k.findKey(m, b) || "text"](he, e);
			if (ie && !p && !_e) {
				let t;
				if (ve != null && (typeof ve.byteLength == "number" ? t = ve.byteLength : typeof ve.size == "number" ? t = ve.size : typeof ve == "string" && (t = typeof r == "function" ? new r().encode(ve).byteLength : ve.length)), typeof t == "number" && t > te) throw new A("maxContentLength size of " + te + " exceeded", A.ERR_BAD_RESPONSE, e, C);
			}
			return !_e && le && le(), await new Promise((t, n) => {
				Yd(t, n, {
					data: ve,
					headers: ad.from(he.headers),
					status: he.status,
					statusText: he.statusText,
					config: e,
					request: C
				});
			});
		} catch (t) {
			if (le && le(), ce && ce.aborted && ce.reason instanceof A) {
				let n = ce.reason;
				throw n.config = e, C && (n.request = C), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (de) throw C && !de.request && (de.request = C), de;
			if (t instanceof A) throw C && !t.request && (t.request = C), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new A("Network Error", A.ERR_NETWORK, e, C, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw A.from(t, t && t.code, e, C, t && t.response);
		}
	};
}, Kf = /* @__PURE__ */ new Map(), qf = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Kf;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Gf(t)), l = c;
	return c;
};
qf();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Jf = {
	http: null,
	xhr: xf,
	fetch: { get: qf }
};
k.forEach(Jf, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var Yf = (e) => `- ${e}`, Xf = (e) => k.isFunction(e) || e === null || e === !1;
function Zf(e, t) {
	e = k.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Xf(r) && (i = Jf[(n = String(r)).toLowerCase()], i === void 0)) throw new A(`Unknown adapter '${n}'`);
		if (i && (k.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new A("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Yf).join("\n") : " " + Yf(e[0]) : "as no adapter specified"), A.ERR_NOT_SUPPORT);
	}
	return i;
}
var Qf = {
	getAdapter: Zf,
	adapters: Jf
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function $f(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Jd(null, e);
}
function ep(e) {
	let t = k.toSafeFlatObject(e);
	return $f(t), t.headers = ad.from(k.getSafeProp(t, "headers")), t.data = Kd.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Qf.getAdapter(t.adapter || Gd.adapter, t)(t).then(function(e) {
		$f(t), t.response = e;
		try {
			e.data = Kd.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = ad.from(e.headers), e;
	}, function(e) {
		if (!qd(e) && ($f(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Kd.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = ad.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var tp = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	tp[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var np = {};
tp.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Lf + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new A(r(i, " has been removed" + (t ? " in " + t : "")), A.ERR_DEPRECATED);
		return t && !np[i] && (np[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, tp.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function rp(e, t, n) {
	if (typeof e != "object" || !e) throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new A("option " + a + " must be " + n, A.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new A("Unknown option " + a, A.ERR_BAD_OPTION);
	}
}
var ip = {
	assertOptions: rp,
	validators: tp
}, ap = ip.validators, op = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Ed(),
			response: new Ed()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) try {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = t.stack, r = "";
				if (typeof n == "string") {
					let e = n.indexOf("\n");
					r = e === -1 ? "" : n.slice(e + 1);
				}
				if (!e.stack) e.stack = r;
				else if (r) {
					let t = r.indexOf("\n"), n = t === -1 ? -1 : r.indexOf("\n", t + 1), i = n === -1 ? "" : r.slice(n + 1);
					String(e.stack).endsWith(i) || (e.stack += "\n" + r);
				}
			} catch {}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = gf(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && ip.assertOptions(n, {
			silentJSONParsing: ap.transitional(ap.boolean),
			forcedJSONParsing: ap.transitional(ap.boolean),
			clarifyTimeoutError: ap.transitional(ap.boolean),
			legacyInterceptorReqResOrdering: ap.transitional(ap.boolean),
			advertiseZstdAcceptEncoding: ap.transitional(ap.boolean),
			validateStatusUndefinedResolves: ap.transitional(ap.boolean)
		}, !1), r != null && (k.isFunction(r) ? t.paramsSerializer = { serialize: r } : ip.assertOptions(r, {
			encode: ap.function,
			serialize: ap.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), ip.assertOptions(t, {
			baseUrl: ap.spelling("baseURL"),
			withXsrfToken: ap.spelling("withXSRFToken")
		}, !0), t.method = (k.getSafeProp(t, "method") || k.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && k.merge(i.common, i[t.method]);
		i && k.forEach(Hd.concat("common"), (e) => {
			delete i[e];
		}), t.headers = ad.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Dd;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [ep.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e ? e(f) : f;
			} catch (e) {
				if (!t) {
					l = Promise.reject(e);
					break;
				}
				try {
					let n = t.call(this, e);
					k.isThenable(n) && (l = Promise.resolve(n).then(() => ep.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = ep.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = gf(this.defaults, e), xd(pf(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
k.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	op.prototype[e] = function(t, n) {
		return this.request(gf(n || {}, {
			method: e,
			url: t,
			data: n && k.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), k.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(gf(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	op.prototype[e] = t(), e !== "query" && (op.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var sp = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new Jd(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/spread.js
function cp(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function lp(e) {
	return k.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var up = {
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
	ContentTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	UnprocessableContent: 422,
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
	WebServerReturnsAnUnknownError: 520,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(up).forEach(([e, t]) => {
	up[t] === void 0 && (up[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function dp(e) {
	let t = new op(e), n = _l(op.prototype.request, t);
	return k.extend(n, op.prototype, t, { allOwnKeys: !0 }), k.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return dp(gf(e, t));
	}, n;
}
var j = dp(Gd);
j.Axios = op, j.CanceledError = Jd, j.CancelToken = sp, j.isCancel = qd, j.VERSION = Lf, j.toFormData = gd, j.AxiosError = A, j.Cancel = j.CanceledError, j.all = function(e) {
	return Promise.all(e);
}, j.spread = cp, j.isAxiosError = lp, j.mergeConfig = gf, j.AxiosHeaders = ad, j.formToJSON = (e) => Vd(k.isHTMLForm(e) ? new FormData(e) : e), j.getAdapter = Qf.getAdapter, j.HttpStatusCode = up, j.default = j;
//#endregion
//#region node_modules/audako-core/dist/mjs/services/base-http.service.js
var fp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, pp = class {
	constructor(e, t) {
		this.httpConfig = e, this.accessToken = t;
	}
	getAuthorizationHeader() {
		return fp(this, void 0, void 0, function* () {
			return { Authorization: `Bearer ${yield go(this.accessToken)}` };
		});
	}
	getAccessToken() {
		return go(this.accessToken);
	}
	getStructureUrl() {
		return fp(this, void 0, void 0, function* () {
			let e = yield go(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Structure}`;
		});
	}
	static requestHttpConfig(e) {
		return j.get(`${e}/assets/conf/application.config`).then((e) => e.data);
	}
	static isApiReachable(e) {
		return j.get(`${e}/api/structure/about/version`).then((e) => e.status === 200 || e.status === 401).catch((e) => e?.response?.status === 401);
	}
}, mp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, hp = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	getEntityById(e, t) {
		return mp(this, void 0, void 0, function* () {
			return this.getPartialEntityById(e, t, null);
		});
	}
	getPartialEntityById(e, t, n) {
		return mp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(e)}/${t}`;
			n && (r += `?$projection=${JSON.stringify(n)}`);
			let i = yield this.getAuthorizationHeader();
			return (yield j.get(r, { headers: i })).data;
		});
	}
	queryConfiguration(e, t, n, r) {
		return mp(this, void 0, void 0, function* () {
			let i = `${yield this._createBaseUrlByType(e)}/query`, a = {
				$filter: JSON.stringify(t),
				$paging: n ? JSON.stringify(n) : null,
				$projection: r ? JSON.stringify(r) : null
			}, o = yield this.getAuthorizationHeader(), s = yield j.post(i, a, { headers: o });
			if (n) {
				console.log(s.headers);
				let e = JSON.parse(s.headers["paging-headers"]), t = Number(e.TotalCount);
				return {
					data: s.data,
					total: t
				};
			}
			return {
				data: s.data,
				total: s.data.length
			};
		});
	}
	uploadProcessImage(e, t, n = "process-image.svg") {
		return mp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(r.ProcessImage)}/${e}/file/image`, i = yield this.getAuthorizationHeader(), a = new Blob([t], { type: "image/svg+xml" }), o = new FormData();
			o.append("file", a, "process-image.svg"), yield j.post(n, o, { headers: i });
		});
	}
	addEntity(e, t) {
		return mp(this, void 0, void 0, function* () {
			let n = yield this._createBaseUrlByType(e), r = yield this.getAuthorizationHeader();
			return j.post(n, t, { headers: r }).then((e) => e.data);
		});
	}
	updateEntity(e, t) {
		return mp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(e)}/${t.Id}`;
			delete t.CreatedBy, delete t.CreatedOn;
			let r = yield this.getAuthorizationHeader();
			return j.put(n, t, { headers: r }).then((e) => e.data);
		});
	}
	deleteEntity(e, t) {
		return mp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(e)}/${t}`, r = yield this.getAuthorizationHeader();
			return j.delete(n, { headers: r }).then();
		});
	}
	copyTo(e, t, n) {
		return mp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/copy/${e}/to/${t}`, i = yield this.getAuthorizationHeader();
			return j.get(r, { headers: i }).then((e) => e.data);
		});
	}
	copyMultipleTo(e, t, n) {
		return mp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/copy/multiple/${t}`, i = yield this.getAuthorizationHeader();
			return j.put(r, e, {
				responseType: "text",
				headers: i
			});
		});
	}
	moveTo(e, t, n) {
		return mp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/move/${e}/to/${t}`, i = yield this.getAuthorizationHeader();
			return j.get(r, { headers: i }).then((e) => e.data);
		});
	}
	moveMultipleTo(e, t, n) {
		return mp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/move/multiple/${t}`, i = yield this.getAuthorizationHeader();
			return j.put(r, e, {
				responseType: "text",
				headers: i
			});
		});
	}
	_createBaseUrlByType(e) {
		return mp(this, void 0, void 0, function* () {
			return `${yield this.getStructureUrl()}${a[e]}`;
		});
	}
}, gp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, _p = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	getTenantViewById(e) {
		return gp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/${e}/view`, n = yield this.getAuthorizationHeader();
			return (yield j.get(t, { headers: n })).data;
		});
	}
	getTenantViewForEntityId(e) {
		return gp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, n = yield this.getAuthorizationHeader();
			return (yield j.get(t, { headers: n })).data;
		});
	}
	getTopTenants() {
		return gp(this, void 0, void 0, function* () {
			let e = `${yield this.getStructureUrl()}/tenant/top`, t = yield this.getAuthorizationHeader();
			return (yield j.get(e, { headers: t })).data;
		});
	}
	getNextTenants(e) {
		return gp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/${e}/next`, n = yield this.getAuthorizationHeader();
			return (yield j.get(t, { headers: n })).data;
		});
	}
	filterTenantsByName(e) {
		return gp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/filter/${e}`, n = yield this.getAuthorizationHeader();
			return (yield j.get(t, { headers: n })).data;
		});
	}
}, vp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, yp = class {
	constructor(e) {
		this.httpService = e, this._nameCache = {};
	}
	resolveEntityPath(e, t, n = !1, r, i = " / ") {
		return vp(this, void 0, void 0, function* () {
			let a = yield this.httpService.getPartialEntityById(e, t, {
				Name: 1,
				Path: 1
			}), o = yield this.resolvePathName(a.Path.splice(r ? a.Path.length - r : 0, a.Path.length), i);
			return n && (o = o + i + a.Name.Value), o;
		});
	}
	resolvePathName(e, t = " / ") {
		return vp(this, void 0, void 0, function* () {
			return e.length === 0 ? "" : Ea(za(e.map((e) => this.resolveName(r.Group, e))).pipe(Oa((e) => e.join(t))));
		});
	}
	resolveName(e, t) {
		return vp(this, void 0, void 0, function* () {
			return this._nameCache[t] || (this._nameCache[t] = Sa(this.httpService.getPartialEntityById(e, t, { Name: 1 })).pipe(Oa((e) => e.Name.Value), so(1), Za(() => Ca(t)))), Ea(this._nameCache[t]);
		});
	}
}, bp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, xp = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	getUserProfile() {
		return bp(this, void 0, void 0, function* () {
			try {
				let e = yield this.getAuthorizationHeader(), t = yield j.get(`${yield this.getStructureUrl()}/userprofile`, { headers: e });
				if (t.status == 200) return t.data;
			} catch (e) {
				throw Error("Failed to request user profile with error: " + e?.message);
			}
		});
	}
	updateUserProfileSettings(e) {
		return bp(this, void 0, void 0, function* () {
			try {
				let t = yield this.getAuthorizationHeader();
				yield j.put(`${yield this.getStructureUrl()}/userprofile`, e, { headers: t });
			} catch (e) {
				throw Error("Failed to update user profile with error: " + e?.message);
			}
		});
	}
}, Sp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Cp = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	sendDatSrcConfiguration(e) {
		return Sp(this, void 0, void 0, function* () {
			let t = `${this._getDriverUrl()}/command/source/${e}/configure`, n = yield this.getAuthorizationHeader();
			return (yield j.get(t, { headers: n })).data;
		});
	}
	_getDriverUrl() {
		return Sp(this, void 0, void 0, function* () {
			let e = yield go(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Driver}`;
		});
	}
}, wp = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Tp = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	browseConnection(e, t) {
		return wp(this, void 0, void 0, function* () {
			let n = `${yield this._getDriverUrl()}/command/conn/${e}/browse`, r = yield this.getAuthorizationHeader();
			return (yield j.post(n, { Path: t }, { headers: r })).data;
		});
	}
	_getDriverUrl() {
		return wp(this, void 0, void 0, function* () {
			let e = yield go(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Driver}`;
		});
	}
}, Ep = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = n;
	}
}, Dp = class extends Error {
	constructor(e = "A timeout occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, Op = class extends Error {
	constructor(e = "An abort occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, kp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = n;
	}
}, Ap = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = n;
	}
}, jp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = n;
	}
}, Mp = class extends Error {
	constructor(e) {
		let t = new.target.prototype;
		super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
	}
}, Np = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.innerErrors = t, this.__proto__ = n;
	}
}, Pp = class {
	constructor(e, t, n) {
		this.statusCode = e, this.statusText = t, this.content = n;
	}
}, Fp = class {
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
}, M;
(function(e) {
	e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
})(M ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Loggers.js
var Ip = class {
	constructor() {}
	log(e, t) {}
};
Ip.instance = new Ip();
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Utils.js
var Lp = "6.0.25", Rp = class {
	static isRequired(e, t) {
		if (e == null) throw Error(`The '${t}' argument is required.`);
	}
	static isNotEmpty(e, t) {
		if (!e || e.match(/^\s*$/)) throw Error(`The '${t}' argument should not be empty.`);
	}
	static isIn(e, t, n) {
		if (!(e in t)) throw Error(`Unknown ${n} value: ${e}.`);
	}
}, zp = class {
	static get isBrowser() {
		return typeof window == "object" && typeof window.document == "object";
	}
	static get isWebWorker() {
		return typeof self == "object" && "importScripts" in self;
	}
	static get isReactNative() {
		return typeof window == "object" && window.document === void 0;
	}
	static get isNode() {
		return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
	}
};
function Bp(e, t) {
	let n = "";
	return Hp(e) ? (n = `Binary data of length ${e.byteLength}`, t && (n += `. Content: '${Vp(e)}'`)) : typeof e == "string" && (n = `String data of length ${e.length}`, t && (n += `. Content: '${e}'`)), n;
}
function Vp(e) {
	let t = new Uint8Array(e), n = "";
	return t.forEach((e) => {
		n += `0x${e < 16 ? "0" : ""}${e.toString(16)} `;
	}), n.substr(0, n.length - 1);
}
function Hp(e) {
	return e && typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || e.constructor && e.constructor.name === "ArrayBuffer");
}
async function Up(e, t, n, r, i, a, o) {
	let s = {};
	if (i) {
		let e = await i();
		e && (s = { Authorization: `Bearer ${e}` });
	}
	let [c, l] = qp();
	s[c] = l, e.log(M.Trace, `(${t} transport) sending data. ${Bp(a, o.logMessageContent)}.`);
	let u = Hp(a) ? "arraybuffer" : "text", d = await n.post(r, {
		content: a,
		headers: {
			...s,
			...o.headers
		},
		responseType: u,
		timeout: o.timeout,
		withCredentials: o.withCredentials
	});
	e.log(M.Trace, `(${t} transport) request complete. Response status: ${d.statusCode}.`);
}
function Wp(e) {
	return e === void 0 ? new Kp(M.Information) : e === null ? Ip.instance : e.log === void 0 ? new Kp(e) : e;
}
var Gp = class {
	constructor(e, t) {
		this._subject = e, this._observer = t;
	}
	dispose() {
		let e = this._subject.observers.indexOf(this._observer);
		e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((e) => {});
	}
}, Kp = class {
	constructor(e) {
		this._minLevel = e, this.out = console;
	}
	log(e, t) {
		if (e >= this._minLevel) {
			let n = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${M[e]}: ${t}`;
			switch (e) {
				case M.Critical:
				case M.Error:
					this.out.error(n);
					break;
				case M.Warning:
					this.out.warn(n);
					break;
				case M.Information:
					this.out.info(n);
					break;
				default: this.out.log(n);
			}
		}
	}
};
function qp() {
	let e = "X-SignalR-User-Agent";
	return zp.isNode && (e = "User-Agent"), [e, Jp(Lp, Yp(), Zp(), Xp())];
}
function Jp(e, t, n, r) {
	let i = "Microsoft SignalR/", a = e.split(".");
	return i += `${a[0]}.${a[1]}`, i += ` (${e}; `, i += t && t !== "" ? `${t}; ` : "Unknown OS; ", i += `${n}`, i += r ? `; ${r}` : "; Unknown Runtime Version", i += ")", i;
}
/*#__PURE__*/ function Yp() {
	if (zp.isNode) switch (process.platform) {
		case "win32": return "Windows NT";
		case "darwin": return "macOS";
		case "linux": return "Linux";
		default: return process.platform;
	}
	else return "";
}
/*#__PURE__*/ function Xp() {
	if (zp.isNode) return process.versions.node;
}
function Zp() {
	return zp.isNode ? "NodeJS" : "Browser";
}
function Qp(e) {
	return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function $p() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw Error("could not find global");
}
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js
var em = class extends Fp {
	constructor(e) {
		if (super(), this._logger = e, typeof fetch > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._jar = new (e("tough-cookie")).CookieJar(), this._fetchType = e("node-fetch"), this._fetchType = e("fetch-cookie")(this._fetchType, this._jar);
		} else this._fetchType = fetch.bind($p());
		if (typeof AbortController > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._abortControllerType = e("abort-controller");
		} else this._abortControllerType = AbortController;
	}
	async send(e) {
		if (e.abortSignal && e.abortSignal.aborted) throw new Op();
		if (!e.method) throw Error("No method defined.");
		if (!e.url) throw Error("No url defined.");
		let t = new this._abortControllerType(), n;
		e.abortSignal && (e.abortSignal.onabort = () => {
			t.abort(), n = new Op();
		});
		let r = null;
		if (e.timeout) {
			let i = e.timeout;
			r = setTimeout(() => {
				t.abort(), this._logger.log(M.Warning, "Timeout from HTTP request."), n = new Dp();
			}, i);
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
		} catch (e) {
			throw n || (this._logger.log(M.Warning, `Error from HTTP request. ${e}.`), e);
		} finally {
			r && clearTimeout(r), e.abortSignal && (e.abortSignal.onabort = null);
		}
		if (!i.ok) throw new Ep(await tm(i, "text") || i.statusText, i.status);
		let a = await tm(i, e.responseType);
		return new Pp(i.status, i.statusText, a);
	}
	getCookieString(e) {
		let t = "";
		return zp.isNode && this._jar && this._jar.getCookies(e, (e, n) => t = n.join("; ")), t;
	}
};
function tm(e, t) {
	let n;
	switch (t) {
		case "arraybuffer":
			n = e.arrayBuffer();
			break;
		case "text":
			n = e.text();
			break;
		case "blob":
		case "document":
		case "json": throw Error(`${t} is not supported.`);
		default: n = e.text();
	}
	return n;
}
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js
var nm = class extends Fp {
	constructor(e) {
		super(), this._logger = e;
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Op()) : e.method ? e.url ? new Promise((t, n) => {
			let r = new XMLHttpRequest();
			r.open(e.method, e.url, !0), r.withCredentials = e.withCredentials === void 0 || e.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
			let i = e.headers;
			i && Object.keys(i).forEach((e) => {
				r.setRequestHeader(e, i[e]);
			}), e.responseType && (r.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
				r.abort(), n(new Op());
			}), e.timeout && (r.timeout = e.timeout), r.onload = () => {
				e.abortSignal && (e.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? t(new Pp(r.status, r.statusText, r.response || r.responseText)) : n(new Ep(r.response || r.responseText || r.statusText, r.status));
			}, r.onerror = () => {
				this._logger.log(M.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), n(new Ep(r.statusText, r.status));
			}, r.ontimeout = () => {
				this._logger.log(M.Warning, "Timeout from HTTP request."), n(new Dp());
			}, r.send(e.content || "");
		}) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
}, rm = class extends Fp {
	constructor(e) {
		if (super(), typeof fetch < "u" || zp.isNode) this._httpClient = new em(e);
		else if (typeof XMLHttpRequest < "u") this._httpClient = new nm(e);
		else throw Error("No usable HttpClient found.");
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Op()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
	getCookieString(e) {
		return this._httpClient.getCookieString(e);
	}
}, im = class e {
	static write(t) {
		return `${t}${e.RecordSeparator}`;
	}
	static parse(t) {
		if (t[t.length - 1] !== e.RecordSeparator) throw Error("Message is incomplete.");
		let n = t.split(e.RecordSeparator);
		return n.pop(), n;
	}
};
im.RecordSeparatorCode = 30, im.RecordSeparator = String.fromCharCode(im.RecordSeparatorCode);
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js
var am = class {
	writeHandshakeRequest(e) {
		return im.write(JSON.stringify(e));
	}
	parseHandshakeResponse(e) {
		let t, n;
		if (Hp(e)) {
			let r = new Uint8Array(e), i = r.indexOf(im.RecordSeparatorCode);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, a))), n = r.byteLength > a ? r.slice(a).buffer : null;
		} else {
			let r = e, i = r.indexOf(im.RecordSeparator);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = r.substring(0, a), n = r.length > a ? r.substring(a) : null;
		}
		let r = im.parse(t), i = JSON.parse(r[0]);
		if (i.type) throw Error("Expected a handshake response from the server.");
		return [n, i];
	}
}, N;
(function(e) {
	e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
})(N ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Subject.js
var om = class {
	constructor() {
		this.observers = [];
	}
	next(e) {
		for (let t of this.observers) t.next(e);
	}
	error(e) {
		for (let t of this.observers) t.error && t.error(e);
	}
	complete() {
		for (let e of this.observers) e.complete && e.complete();
	}
	subscribe(e) {
		return this.observers.push(e), new Gp(this, e);
	}
}, sm = 3e4, cm = 15e3, P;
(function(e) {
	e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
})(P ||= {});
var lm = class e {
	constructor(e, t, n, r) {
		this._nextKeepAlive = 0, this._freezeEventListener = () => {
			this._logger.log(M.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
		}, Rp.isRequired(e, "connection"), Rp.isRequired(t, "logger"), Rp.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = sm, this.keepAliveIntervalInMilliseconds = cm, this._logger = t, this._protocol = n, this.connection = e, this._reconnectPolicy = r, this._handshakeProtocol = new am(), this.connection.onreceive = (e) => this._processIncomingData(e), this.connection.onclose = (e) => this._connectionClosed(e), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = P.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: N.Ping });
	}
	static create(t, n, r, i) {
		return new e(t, n, r, i);
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
		if (this._connectionState !== P.Disconnected && this._connectionState !== P.Reconnecting) throw Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
		if (!e) throw Error("The HubConnection url must be a valid url.");
		this.connection.baseUrl = e;
	}
	start() {
		return this._startPromise = this._startWithStateTransitions(), this._startPromise;
	}
	async _startWithStateTransitions() {
		if (this._connectionState !== P.Disconnected) return Promise.reject(/* @__PURE__ */ Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
		this._connectionState = P.Connecting, this._logger.log(M.Debug, "Starting HubConnection.");
		try {
			await this._startInternal(), zp.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = P.Connected, this._connectionStarted = !0, this._logger.log(M.Debug, "HubConnection connected successfully.");
		} catch (e) {
			return this._connectionState = P.Disconnected, this._logger.log(M.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
		}
	}
	async _startInternal() {
		this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
		let e = new Promise((e, t) => {
			this._handshakeResolver = e, this._handshakeRejecter = t;
		});
		await this.connection.start(this._protocol.transferFormat);
		try {
			let t = {
				protocol: this._protocol.name,
				version: this._protocol.version
			};
			if (this._logger.log(M.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)), this._logger.log(M.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError) throw this._stopDuringStartError;
		} catch (e) {
			throw this._logger.log(M.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(e), e;
		}
	}
	async stop() {
		let e = this._startPromise;
		this._stopPromise = this._stopInternal(), await this._stopPromise;
		try {
			await e;
		} catch {}
	}
	_stopInternal(e) {
		return this._connectionState === P.Disconnected ? (this._logger.log(M.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === P.Disconnecting ? (this._logger.log(M.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = P.Disconnecting, this._logger.log(M.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(M.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || /* @__PURE__ */ Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
	}
	stream(e, ...t) {
		let [n, r] = this._replaceStreamingParams(t), i = this._createStreamInvocation(e, t, r), a, o = new om();
		return o.cancelCallback = () => {
			let e = this._createCancelInvocation(i.invocationId);
			return delete this._callbacks[i.invocationId], a.then(() => this._sendWithProtocol(e));
		}, this._callbacks[i.invocationId] = (e, t) => {
			if (t) {
				o.error(t);
				return;
			}
			e && (e.type === N.Completion ? e.error ? o.error(Error(e.error)) : o.complete() : o.next(e.item));
		}, a = this._sendWithProtocol(i).catch((e) => {
			o.error(e), delete this._callbacks[i.invocationId];
		}), this._launchStreams(n, a), o;
	}
	_sendMessage(e) {
		return this._resetKeepAliveInterval(), this.connection.send(e);
	}
	_sendWithProtocol(e) {
		return this._sendMessage(this._protocol.writeMessage(e));
	}
	send(e, ...t) {
		let [n, r] = this._replaceStreamingParams(t), i = this._sendWithProtocol(this._createInvocation(e, t, !0, r));
		return this._launchStreams(n, i), i;
	}
	invoke(e, ...t) {
		let [n, r] = this._replaceStreamingParams(t), i = this._createInvocation(e, t, !1, r);
		return new Promise((e, t) => {
			this._callbacks[i.invocationId] = (n, r) => {
				if (r) {
					t(r);
					return;
				}
				n && (n.type === N.Completion ? n.error ? t(Error(n.error)) : e(n.result) : t(/* @__PURE__ */ Error(`Unexpected message type: ${n.type}`)));
			};
			let r = this._sendWithProtocol(i).catch((e) => {
				t(e), delete this._callbacks[i.invocationId];
			});
			this._launchStreams(n, r);
		});
	}
	on(e, t) {
		!e || !t || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(t) === -1 && this._methods[e].push(t));
	}
	off(e, t) {
		if (!e) return;
		e = e.toLowerCase();
		let n = this._methods[e];
		if (n) {
			if (t) {
				let r = n.indexOf(t);
				r !== -1 && (n.splice(r, 1), n.length === 0 && delete this._methods[e]);
			} else delete this._methods[e];
		}
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
		if (this._cleanupTimeout(), this._receivedHandshakeResponse ||= (e = this._processHandshakeResponse(e), !0), e) {
			let t = this._protocol.parseMessages(e, this._logger);
			for (let e of t) switch (e.type) {
				case N.Invocation:
					this._invokeClientMethod(e);
					break;
				case N.StreamItem:
				case N.Completion: {
					let t = this._callbacks[e.invocationId];
					if (t) {
						e.type === N.Completion && delete this._callbacks[e.invocationId];
						try {
							t(e);
						} catch (e) {
							this._logger.log(M.Error, `Stream callback threw error: ${Qp(e)}`);
						}
					}
					break;
				}
				case N.Ping: break;
				case N.Close: {
					this._logger.log(M.Information, "Close message received from server.");
					let t = e.error ? /* @__PURE__ */ Error("Server returned an error on close: " + e.error) : void 0;
					e.allowReconnect === !0 ? this.connection.stop(t) : this._stopPromise = this._stopInternal(t);
					break;
				}
				default: this._logger.log(M.Warning, `Invalid message type: ${e.type}.`);
			}
		}
		this._resetTimeoutPeriod();
	}
	_processHandshakeResponse(e) {
		let t, n;
		try {
			[n, t] = this._handshakeProtocol.parseHandshakeResponse(e);
		} catch (e) {
			let t = "Error parsing handshake response: " + e;
			this._logger.log(M.Error, t);
			let n = Error(t);
			throw this._handshakeRejecter(n), n;
		}
		if (t.error) {
			let e = "Server returned handshake error: " + t.error;
			this._logger.log(M.Error, e);
			let n = Error(e);
			throw this._handshakeRejecter(n), n;
		}
		return this._logger.log(M.Debug, "Server handshake complete."), this._handshakeResolver(), n;
	}
	_resetKeepAliveInterval() {
		this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
	}
	_resetTimeoutPeriod() {
		if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
			let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
			e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
				if (this._connectionState === P.Connected) try {
					await this._sendMessage(this._cachedPingMessage);
				} catch {
					this._cleanupPingTimer();
				}
			}, e);
		}
	}
	serverTimeout() {
		this.connection.stop(/* @__PURE__ */ Error("Server timeout elapsed without receiving a message from the server."));
	}
	_invokeClientMethod(e) {
		let t = this._methods[e.target.toLowerCase()];
		if (t) {
			try {
				t.forEach((t) => t.apply(this, e.arguments));
			} catch (t) {
				this._logger.log(M.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${t}'.`);
			}
			if (e.invocationId) {
				let e = "Server requested a response, which is not supported in this version of the client.";
				this._logger.log(M.Error, e), this._stopPromise = this._stopInternal(/* @__PURE__ */ Error(e));
			}
		} else this._logger.log(M.Warning, `No client method with the name '${e.target}' found.`);
	}
	_connectionClosed(e) {
		this._logger.log(M.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || /* @__PURE__ */ Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || /* @__PURE__ */ Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === P.Disconnecting ? this._completeClose(e) : this._connectionState === P.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === P.Connected && this._completeClose(e);
	}
	_completeClose(e) {
		if (this._connectionStarted) {
			this._connectionState = P.Disconnected, this._connectionStarted = !1, zp.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
			try {
				this._closedCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(M.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
			}
		}
	}
	async _reconnect(e) {
		let t = Date.now(), n = 0, r = e === void 0 ? /* @__PURE__ */ Error("Attempting to reconnect due to a unknown error.") : e, i = this._getNextRetryDelay(n++, 0, r);
		if (i === null) {
			this._logger.log(M.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
			return;
		}
		if (this._connectionState = P.Reconnecting, e ? this._logger.log(M.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(M.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
			try {
				this._reconnectingCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(M.Error, `An onreconnecting callback called with error '${e}' threw error '${t}'.`);
			}
			if (this._connectionState !== P.Reconnecting) {
				this._logger.log(M.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
				return;
			}
		}
		for (; i !== null;) {
			if (this._logger.log(M.Information, `Reconnect attempt number ${n} will start in ${i} ms.`), await new Promise((e) => {
				this._reconnectDelayHandle = setTimeout(e, i);
			}), this._reconnectDelayHandle = void 0, this._connectionState !== P.Reconnecting) {
				this._logger.log(M.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
				return;
			}
			try {
				if (await this._startInternal(), this._connectionState = P.Connected, this._logger.log(M.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0) try {
					this._reconnectedCallbacks.forEach((e) => e.apply(this, [this.connection.connectionId]));
				} catch (e) {
					this._logger.log(M.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
				}
				return;
			} catch (e) {
				if (this._logger.log(M.Information, `Reconnect attempt failed because of error '${e}'.`), this._connectionState !== P.Reconnecting) {
					this._logger.log(M.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === P.Disconnecting && this._completeClose();
					return;
				}
				r = e instanceof Error ? e : Error(e.toString()), i = this._getNextRetryDelay(n++, Date.now() - t, r);
			}
		}
		this._logger.log(M.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${n} failed attempts. Connection disconnecting.`), this._completeClose();
	}
	_getNextRetryDelay(e, t, n) {
		try {
			return this._reconnectPolicy.nextRetryDelayInMilliseconds({
				elapsedMilliseconds: t,
				previousRetryCount: e,
				retryReason: n
			});
		} catch (n) {
			return this._logger.log(M.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${n}'.`), null;
		}
	}
	_cancelCallbacksWithError(e) {
		let t = this._callbacks;
		this._callbacks = {}, Object.keys(t).forEach((n) => {
			let r = t[n];
			try {
				r(null, e);
			} catch (t) {
				this._logger.log(M.Error, `Stream 'error' callback called with '${e}' threw error: ${Qp(t)}`);
			}
		});
	}
	_cleanupPingTimer() {
		this._pingServerHandle &&= (clearTimeout(this._pingServerHandle), void 0);
	}
	_cleanupTimeout() {
		this._timeoutHandle && clearTimeout(this._timeoutHandle);
	}
	_createInvocation(e, t, n, r) {
		if (n) return r.length === 0 ? {
			arguments: t,
			target: e,
			type: N.Invocation
		} : {
			arguments: t,
			streamIds: r,
			target: e,
			type: N.Invocation
		};
		{
			let n = this._invocationId;
			return this._invocationId++, r.length === 0 ? {
				arguments: t,
				invocationId: n.toString(),
				target: e,
				type: N.Invocation
			} : {
				arguments: t,
				invocationId: n.toString(),
				streamIds: r,
				target: e,
				type: N.Invocation
			};
		}
	}
	_launchStreams(e, t) {
		if (e.length !== 0) {
			t ||= Promise.resolve();
			for (let n in e) e[n].subscribe({
				complete: () => {
					t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(n)));
				},
				error: (e) => {
					let r;
					r = e instanceof Error ? e.message : e && e.toString ? e.toString() : "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(n, r)));
				},
				next: (e) => {
					t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(n, e)));
				}
			});
		}
	}
	_replaceStreamingParams(e) {
		let t = [], n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this._isObservable(i)) {
				let a = this._invocationId;
				this._invocationId++, t[a] = i, n.push(a.toString()), e.splice(r, 1);
			}
		}
		return [t, n];
	}
	_isObservable(e) {
		return e && e.subscribe && typeof e.subscribe == "function";
	}
	_createStreamInvocation(e, t, n) {
		let r = this._invocationId;
		return this._invocationId++, n.length === 0 ? {
			arguments: t,
			invocationId: r.toString(),
			target: e,
			type: N.StreamInvocation
		} : {
			arguments: t,
			invocationId: r.toString(),
			streamIds: n,
			target: e,
			type: N.StreamInvocation
		};
	}
	_createCancelInvocation(e) {
		return {
			invocationId: e,
			type: N.CancelInvocation
		};
	}
	_createStreamItemMessage(e, t) {
		return {
			invocationId: e,
			item: t,
			type: N.StreamItem
		};
	}
	_createCompletionMessage(e, t, n) {
		return t ? {
			error: t,
			invocationId: e,
			type: N.Completion
		} : {
			invocationId: e,
			result: n,
			type: N.Completion
		};
	}
}, um = [
	0,
	2e3,
	1e4,
	3e4,
	null
], dm = class {
	constructor(e) {
		this._retryDelays = e === void 0 ? um : [...e, null];
	}
	nextRetryDelayInMilliseconds(e) {
		return this._retryDelays[e.previousRetryCount];
	}
}, fm = class {};
fm.Authorization = "Authorization", fm.Cookie = "Cookie";
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/ITransport.js
var pm;
(function(e) {
	e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
})(pm ||= {});
var mm;
(function(e) {
	e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
})(mm ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/AbortController.js
var hm = class {
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
}, gm = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._pollAbort = new hm(), this._options = r, this._running = !1, this.onreceive = null, this.onclose = null;
	}
	get pollAborted() {
		return this._pollAbort.aborted;
	}
	async connect(e, t) {
		if (Rp.isRequired(e, "url"), Rp.isRequired(t, "transferFormat"), Rp.isIn(t, mm, "transferFormat"), this._url = e, this._logger.log(M.Trace, "(LongPolling transport) Connecting."), t === mm.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string") throw Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
		let [n, r] = qp(), i = {
			[n]: r,
			...this._options.headers
		}, a = {
			abortSignal: this._pollAbort.signal,
			headers: i,
			timeout: 1e5,
			withCredentials: this._options.withCredentials
		};
		t === mm.Binary && (a.responseType = "arraybuffer");
		let o = await this._getAccessToken();
		this._updateHeaderToken(a, o);
		let s = `${e}&_=${Date.now()}`;
		this._logger.log(M.Trace, `(LongPolling transport) polling: ${s}.`);
		let c = await this._httpClient.get(s, a);
		c.statusCode === 200 ? this._running = !0 : (this._logger.log(M.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new Ep(c.statusText || "", c.statusCode), this._running = !1), this._receiving = this._poll(this._url, a);
	}
	async _getAccessToken() {
		return this._accessTokenFactory ? await this._accessTokenFactory() : null;
	}
	_updateHeaderToken(e, t) {
		if (e.headers ||= {}, t) {
			e.headers[fm.Authorization] = `Bearer ${t}`;
			return;
		}
		e.headers[fm.Authorization] && delete e.headers[fm.Authorization];
	}
	async _poll(e, t) {
		try {
			for (; this._running;) {
				let n = await this._getAccessToken();
				this._updateHeaderToken(t, n);
				try {
					let n = `${e}&_=${Date.now()}`;
					this._logger.log(M.Trace, `(LongPolling transport) polling: ${n}.`);
					let r = await this._httpClient.get(n, t);
					r.statusCode === 204 ? (this._logger.log(M.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : r.statusCode === 200 ? r.content ? (this._logger.log(M.Trace, `(LongPolling transport) data received. ${Bp(r.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(M.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._logger.log(M.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new Ep(r.statusText || "", r.statusCode), this._running = !1);
				} catch (e) {
					this._running ? e instanceof Dp ? this._logger.log(M.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = e, this._running = !1) : this._logger.log(M.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
				}
			}
		} finally {
			this._logger.log(M.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
		}
	}
	async send(e) {
		return this._running ? Up(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	async stop() {
		this._logger.log(M.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
		try {
			await this._receiving, this._logger.log(M.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
			let e = {}, [t, n] = qp();
			e[t] = n;
			let r = {
				headers: {
					...e,
					...this._options.headers
				},
				timeout: this._options.timeout,
				withCredentials: this._options.withCredentials
			}, i = await this._getAccessToken();
			this._updateHeaderToken(r, i), await this._httpClient.delete(this._url, r), this._logger.log(M.Trace, "(LongPolling transport) DELETE request sent.");
		} finally {
			this._logger.log(M.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
		}
	}
	_raiseOnClose() {
		if (this.onclose) {
			let e = "(LongPolling transport) Firing onclose event.";
			this._closeError && (e += " Error: " + this._closeError), this._logger.log(M.Trace, e), this.onclose(this._closeError);
		}
	}
}, _m = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._options = r, this.onreceive = null, this.onclose = null;
	}
	async connect(e, t) {
		if (Rp.isRequired(e, "url"), Rp.isRequired(t, "transferFormat"), Rp.isIn(t, mm, "transferFormat"), this._logger.log(M.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			let i = !1;
			if (t !== mm.Text) {
				r(/* @__PURE__ */ Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
				return;
			}
			let a;
			if (zp.isBrowser || zp.isWebWorker) a = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
			else {
				let t = this._httpClient.getCookieString(e), n = {};
				n.Cookie = t;
				let [r, i] = qp();
				n[r] = i, a = new this._options.EventSource(e, {
					withCredentials: this._options.withCredentials,
					headers: {
						...n,
						...this._options.headers
					}
				});
			}
			try {
				a.onmessage = (e) => {
					if (this.onreceive) try {
						this._logger.log(M.Trace, `(SSE transport) data received. ${Bp(e.data, this._options.logMessageContent)}.`), this.onreceive(e.data);
					} catch (e) {
						this._close(e);
						return;
					}
				}, a.onerror = (e) => {
					i ? this._close() : r(/* @__PURE__ */ Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
				}, a.onopen = () => {
					this._logger.log(M.Information, `SSE connected to ${this._url}`), this._eventSource = a, i = !0, n();
				};
			} catch (e) {
				r(e);
				return;
			}
		});
	}
	async send(e) {
		return this._eventSource ? Up(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	stop() {
		return this._close(), Promise.resolve();
	}
	_close(e) {
		this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
	}
}, vm = class {
	constructor(e, t, n, r, i, a) {
		this._logger = n, this._accessTokenFactory = t, this._logMessageContent = r, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = a;
	}
	async connect(e, t) {
		if (Rp.isRequired(e, "url"), Rp.isRequired(t, "transferFormat"), Rp.isIn(t, mm, "transferFormat"), this._logger.log(M.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			e = e.replace(/^http/, "ws");
			let i, a = this._httpClient.getCookieString(e), o = !1;
			if (zp.isNode) {
				let t = {}, [n, r] = qp();
				t[n] = r, a && (t[fm.Cookie] = `${a}`), i = new this._webSocketConstructor(e, void 0, { headers: {
					...t,
					...this._headers
				} });
			}
			i ||= new this._webSocketConstructor(e), t === mm.Binary && (i.binaryType = "arraybuffer"), i.onopen = (t) => {
				this._logger.log(M.Information, `WebSocket connected to ${e}.`), this._webSocket = i, o = !0, n();
			}, i.onerror = (e) => {
				let t = null;
				t = typeof ErrorEvent < "u" && e instanceof ErrorEvent ? e.error : "There was an error with the transport", this._logger.log(M.Information, `(WebSockets transport) ${t}.`);
			}, i.onmessage = (e) => {
				if (this._logger.log(M.Trace, `(WebSockets transport) data received. ${Bp(e.data, this._logMessageContent)}.`), this.onreceive) try {
					this.onreceive(e.data);
				} catch (e) {
					this._close(e);
					return;
				}
			}, i.onclose = (e) => {
				if (o) this._close(e);
				else {
					let t = null;
					t = typeof ErrorEvent < "u" && e instanceof ErrorEvent ? e.error : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", r(Error(t));
				}
			};
		});
	}
	send(e) {
		return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(M.Trace, `(WebSockets transport) sending data. ${Bp(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
	}
	stop() {
		return this._webSocket && this._close(void 0), Promise.resolve();
	}
	_close(e) {
		this._webSocket &&= (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), void 0), this._logger.log(M.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(/* @__PURE__ */ Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
	}
	_isCloseEvent(e) {
		return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
	}
}, ym = 100, bm = class {
	constructor(e, t = {}) {
		if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, Rp.isRequired(e, "url"), this._logger = Wp(t.logger), this.baseUrl = this._resolveUrl(e), t ||= {}, t.logMessageContent = t.logMessageContent !== void 0 && t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0) t.withCredentials = t.withCredentials === void 0 || t.withCredentials;
		else throw Error("withCredentials option was not a 'boolean' or 'undefined' value");
		t.timeout = t.timeout === void 0 ? 1e5 : t.timeout;
		let r = null, i = null;
		if (zp.isNode && n !== void 0) {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			r = e("ws"), i = e("eventsource");
		}
		!zp.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : zp.isNode && !t.WebSocket && r && (t.WebSocket = r), !zp.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : zp.isNode && !t.EventSource && i !== void 0 && (t.EventSource = i), this._httpClient = t.httpClient || new rm(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
	}
	async start(e) {
		if (e ||= mm.Binary, Rp.isIn(e, mm, "transferFormat"), this._logger.log(M.Debug, `Starting connection with transfer format '${mm[e]}'.`), this._connectionState !== "Disconnected") return Promise.reject(/* @__PURE__ */ Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
		if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
			let e = "Failed to start the HttpConnection before stop() was called.";
			return this._logger.log(M.Error, e), await this._stopPromise, Promise.reject(/* @__PURE__ */ Error(e));
		}
		if (this._connectionState !== "Connected") {
			let e = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
			return this._logger.log(M.Error, e), Promise.reject(/* @__PURE__ */ Error(e));
		}
		this._connectionStarted = !0;
	}
	send(e) {
		return this._connectionState === "Connected" ? (this._sendQueue ||= new Sm(this.transport), this._sendQueue.send(e)) : Promise.reject(/* @__PURE__ */ Error("Cannot send data if the connection is not in the 'Connected' State."));
	}
	async stop(e) {
		if (this._connectionState === "Disconnected") return this._logger.log(M.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
		if (this._connectionState === "Disconnecting") return this._logger.log(M.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
		this._connectionState = "Disconnecting", this._stopPromise = new Promise((e) => {
			this._stopPromiseResolver = e;
		}), await this._stopInternal(e), await this._stopPromise;
	}
	async _stopInternal(e) {
		this._stopError = e;
		try {
			await this._startInternalPromise;
		} catch {}
		if (this.transport) {
			try {
				await this.transport.stop();
			} catch (e) {
				this._logger.log(M.Error, `HttpConnection.transport.stop() threw error '${e}'.`), this._stopConnection();
			}
			this.transport = void 0;
		} else this._logger.log(M.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
	}
	async _startInternal(e) {
		let t = this.baseUrl;
		this._accessTokenFactory = this._options.accessTokenFactory;
		try {
			if (this._options.skipNegotiation) {
				if (this._options.transport === pm.WebSockets) this.transport = this._constructTransport(pm.WebSockets), await this._startTransport(t, e);
				else throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
			} else {
				let n = null, r = 0;
				do {
					if (n = await this._getNegotiationResponse(t), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") throw Error("The connection was stopped during negotiation.");
					if (n.error) throw Error(n.error);
					if (n.ProtocolVersion) throw Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
					if (n.url && (t = n.url), n.accessToken) {
						let e = n.accessToken;
						this._accessTokenFactory = () => e;
					}
					r++;
				} while (n.url && r < ym);
				if (r === ym && n.url) throw Error("Negotiate redirection limit exceeded.");
				await this._createTransport(t, this._options.transport, n, e);
			}
			this.transport instanceof gm && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(M.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
		} catch (e) {
			return this._logger.log(M.Error, "Failed to start the connection: " + e), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(e);
		}
	}
	async _getNegotiationResponse(e) {
		let t = {};
		if (this._accessTokenFactory) {
			let e = await this._accessTokenFactory();
			e && (t[fm.Authorization] = `Bearer ${e}`);
		}
		let [n, r] = qp();
		t[n] = r;
		let i = this._resolveNegotiateUrl(e);
		this._logger.log(M.Debug, `Sending negotiation request: ${i}.`);
		try {
			let e = await this._httpClient.post(i, {
				content: "",
				headers: {
					...t,
					...this._options.headers
				},
				timeout: this._options.timeout,
				withCredentials: this._options.withCredentials
			});
			if (e.statusCode !== 200) return Promise.reject(/* @__PURE__ */ Error(`Unexpected status code returned from negotiate '${e.statusCode}'`));
			let n = JSON.parse(e.content);
			return (!n.negotiateVersion || n.negotiateVersion < 1) && (n.connectionToken = n.connectionId), n;
		} catch (e) {
			let t = "Failed to complete negotiation with the server: " + e;
			return e instanceof Ep && e.statusCode === 404 && (t += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(M.Error, t), Promise.reject(new Mp(t));
		}
	}
	_createConnectUrl(e, t) {
		return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
	}
	async _createTransport(e, t, n, r) {
		let i = this._createConnectUrl(e, n.connectionToken);
		if (this._isITransport(t)) {
			this._logger.log(M.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(i, r), this.connectionId = n.connectionId;
			return;
		}
		let a = [], o = n.availableTransports || [], s = n;
		for (let n of o) {
			let o = this._resolveTransportOrError(n, t, r);
			if (o instanceof Error) a.push(`${n.transport} failed:`), a.push(o);
			else if (this._isITransport(o)) {
				if (this.transport = o, !s) {
					try {
						s = await this._getNegotiationResponse(e);
					} catch (e) {
						return Promise.reject(e);
					}
					i = this._createConnectUrl(e, s.connectionToken);
				}
				try {
					await this._startTransport(i, r), this.connectionId = s.connectionId;
					return;
				} catch (e) {
					if (this._logger.log(M.Error, `Failed to start the transport '${n.transport}': ${e}`), s = void 0, a.push(new jp(`${n.transport} failed: ${e}`, pm[n.transport])), this._connectionState !== "Connecting") {
						let e = "Failed to select transport before stop() was called.";
						return this._logger.log(M.Debug, e), Promise.reject(/* @__PURE__ */ Error(e));
					}
				}
			}
		}
		return a.length > 0 ? Promise.reject(new Np(`Unable to connect to the server with any of the available transports. ${a.join(" ")}`, a)) : Promise.reject(/* @__PURE__ */ Error("None of the transports supported by the client are supported by the server."));
	}
	_constructTransport(e) {
		switch (e) {
			case pm.WebSockets:
				if (!this._options.WebSocket) throw Error("'WebSocket' is not supported in your environment.");
				return new vm(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
			case pm.ServerSentEvents:
				if (!this._options.EventSource) throw Error("'EventSource' is not supported in your environment.");
				return new _m(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			case pm.LongPolling: return new gm(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			default: throw Error(`Unknown transport: ${e}.`);
		}
	}
	_startTransport(e, t) {
		return this.transport.onreceive = this.onreceive, this.transport.onclose = (e) => this._stopConnection(e), this.transport.connect(e, t);
	}
	_resolveTransportOrError(e, t, n) {
		let r = pm[e.transport];
		if (r == null) return this._logger.log(M.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), /* @__PURE__ */ Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
		if (xm(t, r)) {
			if (e.transferFormats.map((e) => mm[e]).indexOf(n) >= 0) {
				if (r === pm.WebSockets && !this._options.WebSocket || r === pm.ServerSentEvents && !this._options.EventSource) return this._logger.log(M.Debug, `Skipping transport '${pm[r]}' because it is not supported in your environment.'`), new kp(`'${pm[r]}' is not supported in your environment.`, r);
				this._logger.log(M.Debug, `Selecting transport '${pm[r]}'.`);
				try {
					return this._constructTransport(r);
				} catch (e) {
					return e;
				}
			}
			return this._logger.log(M.Debug, `Skipping transport '${pm[r]}' because it does not support the requested transfer format '${mm[n]}'.`), /* @__PURE__ */ Error(`'${pm[r]}' does not support ${mm[n]}.`);
		}
		return this._logger.log(M.Debug, `Skipping transport '${pm[r]}' because it was disabled by the client.`), new Ap(`'${pm[r]}' is disabled by the client.`, r);
	}
	_isITransport(e) {
		return e && typeof e == "object" && "connect" in e;
	}
	_stopConnection(e) {
		if (this._logger.log(M.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
			this._logger.log(M.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
			return;
		}
		if (this._connectionState === "Connecting") throw this._logger.log(M.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
		if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(M.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(M.Information, "Connection disconnected."), this._sendQueue &&= (this._sendQueue.stop().catch((e) => {
			this._logger.log(M.Error, `TransportSendQueue.stop() threw error '${e}'.`);
		}), void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
			this._connectionStarted = !1;
			try {
				this.onclose && this.onclose(e);
			} catch (t) {
				this._logger.log(M.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
			}
		}
	}
	_resolveUrl(e) {
		if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0) return e;
		if (!zp.isBrowser) throw Error(`Cannot resolve '${e}'.`);
		let t = window.document.createElement("a");
		return t.href = e, this._logger.log(M.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
	}
	_resolveNegotiateUrl(e) {
		let t = e.indexOf("?"), n = e.substring(0, t === -1 ? e.length : t);
		return n[n.length - 1] !== "/" && (n += "/"), n += "negotiate", n += t === -1 ? "" : e.substring(t), n.indexOf("negotiateVersion") === -1 && (n += t === -1 ? "?" : "&", n += "negotiateVersion=" + this._negotiateVersion), n;
	}
};
function xm(e, t) {
	return !e || (t & e) !== 0;
}
var Sm = class e {
	constructor(e) {
		this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Cm(), this._transportResult = new Cm(), this._sendLoopPromise = this._sendLoop();
	}
	send(e) {
		return this._bufferData(e), this._transportResult ||= new Cm(), this._transportResult.promise;
	}
	stop() {
		return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
	}
	_bufferData(e) {
		if (this._buffer.length && typeof this._buffer[0] != typeof e) throw Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
		this._buffer.push(e), this._sendBufferedData.resolve();
	}
	async _sendLoop() {
		for (;;) {
			if (await this._sendBufferedData.promise, !this._executing) {
				this._transportResult && this._transportResult.reject("Connection stopped.");
				break;
			}
			this._sendBufferedData = new Cm();
			let t = this._transportResult;
			this._transportResult = void 0;
			let n = typeof this._buffer[0] == "string" ? this._buffer.join("") : e._concatBuffers(this._buffer);
			this._buffer.length = 0;
			try {
				await this._transport.send(n), t.resolve();
			} catch (e) {
				t.reject(e);
			}
		}
	}
	static _concatBuffers(e) {
		let t = e.map((e) => e.byteLength).reduce((e, t) => e + t), n = new Uint8Array(t), r = 0;
		for (let t of e) n.set(new Uint8Array(t), r), r += t.byteLength;
		return n.buffer;
	}
}, Cm = class {
	constructor() {
		this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
	}
	resolve() {
		this._resolver();
	}
	reject(e) {
		this._rejecter(e);
	}
}, wm = "json", Tm = class {
	constructor() {
		this.name = wm, this.version = 1, this.transferFormat = mm.Text;
	}
	parseMessages(e, t) {
		if (typeof e != "string") throw Error("Invalid input for JSON hub protocol. Expected a string.");
		if (!e) return [];
		t === null && (t = Ip.instance);
		let n = im.parse(e), r = [];
		for (let e of n) {
			let n = JSON.parse(e);
			if (typeof n.type != "number") throw Error("Invalid payload.");
			switch (n.type) {
				case N.Invocation:
					this._isInvocationMessage(n);
					break;
				case N.StreamItem:
					this._isStreamItemMessage(n);
					break;
				case N.Completion:
					this._isCompletionMessage(n);
					break;
				case N.Ping: break;
				case N.Close: break;
				default:
					t.log(M.Information, "Unknown message type '" + n.type + "' ignored.");
					continue;
			}
			r.push(n);
		}
		return r;
	}
	writeMessage(e) {
		return im.write(JSON.stringify(e));
	}
	_isInvocationMessage(e) {
		this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
	}
	_isStreamItemMessage(e) {
		if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0) throw Error("Invalid payload for StreamItem message.");
	}
	_isCompletionMessage(e) {
		if (e.result && e.error) throw Error("Invalid payload for Completion message.");
		!e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
	}
	_assertNotEmptyString(e, t) {
		if (typeof e != "string" || e === "") throw Error(t);
	}
}, Em = {
	trace: M.Trace,
	debug: M.Debug,
	info: M.Information,
	information: M.Information,
	warn: M.Warning,
	warning: M.Warning,
	error: M.Error,
	critical: M.Critical,
	none: M.None
};
function Dm(e) {
	let t = Em[e.toLowerCase()];
	if (t !== void 0) return t;
	throw Error(`Unknown log level: ${e}`);
}
var Om = class {
	configureLogging(e) {
		if (Rp.isRequired(e, "logging"), km(e)) this.logger = e;
		else if (typeof e == "string") {
			let t = Dm(e);
			this.logger = new Kp(t);
		} else this.logger = new Kp(e);
		return this;
	}
	withUrl(e, t) {
		return Rp.isRequired(e, "url"), Rp.isNotEmpty(e, "url"), this.url = e, this.httpConnectionOptions = typeof t == "object" ? {
			...this.httpConnectionOptions,
			...t
		} : {
			...this.httpConnectionOptions,
			transport: t
		}, this;
	}
	withHubProtocol(e) {
		return Rp.isRequired(e, "protocol"), this.protocol = e, this;
	}
	withAutomaticReconnect(e) {
		if (this.reconnectPolicy) throw Error("A reconnectPolicy has already been set.");
		return this.reconnectPolicy = e ? Array.isArray(e) ? new dm(e) : e : new dm(), this;
	}
	build() {
		let e = this.httpConnectionOptions || {};
		if (e.logger === void 0 && (e.logger = this.logger), !this.url) throw Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
		let t = new bm(this.url, e);
		return lm.create(t, this.logger || Ip.instance, this.protocol || new Tm(), this.reconnectPolicy);
	}
};
function km(e) {
	return e.log !== void 0;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/services/live-value.service.js
var Am = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, jm;
(function(e) {
	e.Running = "Running", e.Success = "Success", e.Failed = "Failed";
})(jm ||= {});
var Mm;
(function(e) {
	e.ChangeModeAsync = "ChangeModeAsync", e.ChangeIntervalAsync = "ChangeIntervalAsync", e.SubscribeMany = "SubscribeMany";
})(Mm ||= {});
var Nm;
(function(e) {
	e.Send = "Send";
})(Nm ||= {});
var Pm;
(function(e) {
	e.S = "S", e.SO = "SO", e.T = "T", e.TC = "TC", e.OP = "OP";
})(Pm ||= {});
var Fm = class {
	constructor(e, t) {
		this.httpConfig = e, this.accessToken = t, this._unsub = new Mi(), this._connectionEstablished = new Pi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Mi(), this._subscribeRequested = new Mi(), this._handleSubscriptionQueue();
	}
	connect() {
		return Am(this, void 0, void 0, function* () {
			let e = yield go(this.httpConfig);
			return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
		});
	}
	connectWithUrl(e) {
		return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Ea(this._connectionEstablished.pipe(Ja((e) => e), eo(null)));
	}
	dispose() {
		var e;
		(e = this.hubConnection) == null || e.stop(), this.hubConnection = null, this._unsub.next(), this._unsub.complete();
	}
	subscribeToSignalValues(e) {
		let t = e.map((e) => `S:${e}`);
		return this.subscribeLiveValuePackages(t);
	}
	subscribeToSignalOffsets(e) {
		let t = e.map((e) => `SO:${e}`);
		return this.subscribeLiveValuePackages(t);
	}
	subscribeToTimestamp(e) {
		return this.subscribeLiveValuePackages(e);
	}
	subscribeToOperations(e) {
		let t = e.map((e) => `${Pm.OP}:${e}`);
		return this.subscribeLiveValuePackages(t);
	}
	getOperationStatus(e) {
		let t = `${Pm.OP}:${e}`;
		return this.subscribeToOperations([e]).pipe(Oa((t) => t.find((t) => t.id === e)), Ja((e) => e != null), fo((e) => e.status !== jm.Success && e.status !== jm.Failed, !0), io(() => this._unsubscribeIds([t])));
	}
	subscribeLiveValuePackages(e) {
		let t = e.filter((e) => !this._subscribedIds.includes(e));
		this.hubConnection && t.length > 0 && this._enqueueIdsToSubscribe(t);
		let n = this._getCachedValuePackages(e), r = this._livePackageObserver.pipe(Oa((t) => t.filter((t) => e.includes(t.identifier))), Ja((e) => e.length > 0));
		return n.length > 0 ? Ka(Ca(n), r) : r;
	}
	_unsubscribeIds(e) {
		this._subscribedIds = this._subscribedIds.filter((t) => !e.includes(t)), e.forEach((e) => delete this._valueCache[e]);
	}
	_enqueueIdsToSubscribe(e) {
		let t = e.filter((e) => !this._queuedIds.includes(e));
		t.length > 0 && (this._queuedIds.push(...t), this._subscribeRequested.next(null));
	}
	_handleSubscriptionQueue() {
		this._subscribeRequested.pipe(uo(this._unsub), Xa(50)).subscribe(() => {
			let e = this._queuedIds;
			this._queuedIds = [], this._sendMessage(Mm.SubscribeMany, e), this._subscribedIds.push(...e);
		});
	}
	_getCachedValuePackages(e) {
		return e.map((e) => this._valueCache[e]).filter((e) => e !== void 0);
	}
	_sendMessage(e, ...t) {
		this.hubConnection && this.hubConnection.send(e, ...t);
	}
	_handleHubMessage(e) {
		Array.isArray(e) ? (e.forEach((e) => {
			this._valueCache[e.identifier] = e;
		}), this._livePackageObserver.next(e)) : console.info("Unknown message: ", e);
	}
	_establishConnectionAndHandleEvents(e) {
		e.start().then(() => {
			this._sendMessage(Mm.ChangeModeAsync, !0), this._sendMessage(Mm.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (e) => this._handleHubMessage(e)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
		}).catch((e) => {
			this.hubConnection = null, this._connectionEstablished.error(e), console.log("Failed to start connection: " + e.message);
		}), this.hubConnection.onclose(() => {
			console.log("Hub connection closed"), this.hubConnection = null;
		});
	}
	_buildHubConnection(e) {
		return new Om().withUrl(e, { accessTokenFactory: () => this.getAccessToken() }).build();
	}
	getAccessToken() {
		return go(this.accessToken);
	}
}, Im = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Lm = class {
	static getSignalValues(e) {
		let t = [];
		return Object.keys(e).forEach((n) => {
			n !== "IntervalStart" && n !== "Manual" && n !== "Note" && n !== "Value" && t.push({
				id: n,
				value: e[n]
			});
		}), t;
	}
}, Rm;
(function(e) {
	e.Manual = "Manual", e.CounterReplacement = "CounterReplacement", e.CounterReadingAlignment = "CounterReadingAlignment";
})(Rm ||= {});
var zm = class {}, Bm = class {}, Vm = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	requestHistoricalValues(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader(), r = yield j.post(`${t}/value/manyflat`, e, { headers: n });
			if (r.status !== 200) throw Error(r.statusText);
			return r.data;
		});
	}
	getHistoricalValues(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return j.post(t + "/value/manyflat", e, { headers: n }).then((e) => e.data);
		});
	}
	getHistoricalValueObjects(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return j.post(t + "/value/many", e, { headers: n }).then((e) => e.data);
		});
	}
	getNearestValue(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return j.post(t + "/value/nearest", e, { headers: n }).then((e) => e.data);
		});
	}
	getNearesValue(e) {
		return Im(this, void 0, void 0, function* () {
			return this.getNearestValue(e);
		});
	}
	getNthHistoricalValue(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return j.post(t + "/value/nth", e, { headers: n }).then((e) => e.data);
		});
	}
	postManualData(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return j.post(t + "/value/manual", e, { headers: n }).then();
		});
	}
	postNoteEntries(e) {
		return Im(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return j.post(t + "/value/note", e, { headers: n }).then();
		});
	}
	getCounterOffsets(e, t, n) {
		return Im(this, void 0, void 0, function* () {
			let r = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets?`;
			t && (r += `&$from=${t.toISOString()}`), n && (r += `&$till=${n.toISOString()}`);
			let i = yield this.getAuthorizationHeader();
			return j.get(r, { headers: i }).then((e) => Object.keys(e.data).map((t) => ({
				Date: t,
				Value: e.data[t].Effective,
				Calculated: e.data[t].Calculated,
				Custom: e.data[t].Custom
			})));
		});
	}
	setCustomOffset(e, t) {
		return Im(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/custom`, r = yield this.getAuthorizationHeader();
			return j.post(n, t, { headers: r }).then();
		});
	}
	deleteCounterOffsets(e, t) {
		return Im(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/remove`, r = yield this.getAuthorizationHeader();
			return j.post(n, t, { headers: r }).then();
		});
	}
	deleteCustomOffsets(e, t) {
		return Im(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/custom/remove`, r = yield this.getAuthorizationHeader();
			return j.post(n, t, { headers: r }).then((e) => e.data);
		});
	}
	resetCalculatedValuesAndStatistic(e, t, n = null, r = null, i = !1) {
		return Im(this, void 0, void 0, function* () {
			let a = `${yield this.getHistorianUrl()}/value/statistics/${e}/reset`, o = yield this.getAuthorizationHeader();
			return j.post(a, {
				From: n ? n.toISOString() : null,
				Till: r ? r.toISOString() : null,
				ResetOffsets: t,
				ResetCustomOffsets: i
			}, { headers: o }).then((e) => e.data);
		});
	}
	importHistoricalValues(e) {
		return Im(this, void 0, void 0, function* () {
			let t = `${yield this.getHistorianUrl()}/historicalvalueimport/import`, n = yield this.getAuthorizationHeader();
			return j.post(t, { Values: e }, { headers: n }).then((e) => e.data);
		});
	}
	getHistorianUrl() {
		return Im(this, void 0, void 0, function* () {
			let e = yield go(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Historian}`;
		});
	}
}, Hm = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Um = class extends pp {
	constructor(e, t) {
		super(e, t);
	}
	getHistoricalValueOperations(e) {
		return Hm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return yield j.get(`${t}/operations/${e}`, { headers: n }).then((e) => e.data);
		});
	}
	startHistoricalValueOperation(e, t, n, r, i, a) {
		return Hm(this, void 0, void 0, function* () {
			let o = yield this.getBaseUrl(), s = yield this.getAuthorizationHeader();
			return j.post(`${o}/operations/${e}/start`, {
				From: t,
				Till: n,
				Timezone: r,
				OperationScript: i,
				OperationDescription: a
			}, { headers: s }).then((e) => e.data);
		});
	}
	undoHistoricalValueOperation(e) {
		return Hm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return j.put(`${t}/operations/${e}/undo`, null, { headers: n }).then();
		});
	}
	redoHistoricalValueOperation(e) {
		return Hm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return j.put(`${t}/operations/${e}/redo`, null, { headers: n }).then();
		});
	}
	getBaseUrl() {
		return Hm(this, void 0, void 0, function* () {
			let e = yield go(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Historian}/historicalvaluemanipulation`;
		});
	}
}, Wm;
(function(e) {
	e[e.Transient = 0] = "Transient", e[e.Singleton = 1] = "Singleton", e[e.ResolutionScoped = 2] = "ResolutionScoped", e[e.ContainerScoped = 3] = "ContainerScoped";
})(Wm ||= {});
var Gm = Wm, Km = function(e, t) {
	return Km = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	}, Km(e, t);
};
function qm(e, t) {
	Km(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Jm(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Ym(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o;
	return o = {
		next: s(0),
		throw: s(1),
		return: s(2)
	}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(o) {
		if (r) throw TypeError("Generator is already executing.");
		for (; n;) try {
			if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
			switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
				case 0:
				case 1:
					a = o;
					break;
				case 4: return n.label++, {
					value: o[1],
					done: !1
				};
				case 5:
					n.label++, i = o[1], o = [0];
					continue;
				case 7:
					o = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
						n = 0;
						continue;
					}
					if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
						n.label = o[1];
						break;
					}
					if (o[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = o;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(o);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			o = t.call(e, n);
		} catch (e) {
			o = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (o[0] & 5) throw o[1];
		return {
			value: o[0] ? o[1] : void 0,
			done: !0
		};
	}
}
function Xm(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Zm(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function Qm() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Zm(arguments[t]));
	return e;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/class-provider.js
function $m(e) {
	return !!e.useClass;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function eh(e) {
	return !!e.useFactory;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/lazy-helpers.js
var th = function() {
	function e(e) {
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
	return e.prototype.createProxy = function(e) {
		var t = this, n = {}, r = !1, i;
		return new Proxy(n, this.createHandler(function() {
			return r ||= (i = e(t.wrap()), !0), i;
		}));
	}, e.prototype.createHandler = function(e) {
		var t = {};
		return this.reflectMethods.forEach(function(n) {
			t[n] = function() {
				var t = [...arguments];
				return t[0] = e(), Reflect[n].apply(void 0, Qm(t));
			};
		}), t;
	}, e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/injection-token.js
function nh(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function rh(e) {
	return typeof e == "object" && "token" in e && "multiple" in e;
}
function ih(e) {
	return typeof e == "object" && "token" in e && "transform" in e;
}
function ah(e) {
	return typeof e == "function" || e instanceof th;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/token-provider.js
function oh(e) {
	return !!e.useToken;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/value-provider.js
function sh(e) {
	return e.useValue != null;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/provider.js
function ch(e) {
	return $m(e) || sh(e) || oh(e) || eh(e);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/registry-base.js
var lh = function() {
	function e() {
		this._registryMap = /* @__PURE__ */ new Map();
	}
	return e.prototype.entries = function() {
		return this._registryMap.entries();
	}, e.prototype.getAll = function(e) {
		return this.ensure(e), this._registryMap.get(e);
	}, e.prototype.get = function(e) {
		this.ensure(e);
		var t = this._registryMap.get(e);
		return t[t.length - 1] || null;
	}, e.prototype.set = function(e, t) {
		this.ensure(e), this._registryMap.get(e).push(t);
	}, e.prototype.setAll = function(e, t) {
		this._registryMap.set(e, t);
	}, e.prototype.has = function(e) {
		return this.ensure(e), this._registryMap.get(e).length > 0;
	}, e.prototype.clear = function() {
		this._registryMap.clear();
	}, e.prototype.ensure = function(e) {
		this._registryMap.has(e) || this._registryMap.set(e, []);
	}, e;
}(), uh = function(e) {
	qm(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(lh), dh = function() {
	function e() {
		this.scopedResolutions = /* @__PURE__ */ new Map();
	}
	return e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/error-helpers.js
function fh(e, t) {
	return e === null ? "at position #" + t : "\"" + e.split(",")[t].trim() + "\" at position #" + t;
}
function ph(e, t, n) {
	return n === void 0 && (n = "    "), Qm([e], t.message.split("\n").map(function(e) {
		return n + e;
	})).join("\n");
}
function mh(e, t, n) {
	var r = Zm(e.toString().match(/constructor\(([\w, ]+)\)/) || [], 2)[1];
	return ph("Cannot inject the dependency " + fh(r === void 0 ? null : r, t) + " of \"" + e.name + "\" constructor. Reason:", n);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/types/disposable.js
function hh(e) {
	return !(typeof e.dispose != "function" || e.dispose.length > 0);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/interceptors.js
var gh = function(e) {
	qm(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(lh), _h = function(e) {
	qm(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(lh), vh = function() {
	function e() {
		this.preResolution = new gh(), this.postResolution = new _h();
	}
	return e;
}(), yh = /* @__PURE__ */ new Map(), bh = new (function() {
	function e(e) {
		this.parent = e, this._registry = new uh(), this.interceptors = new vh(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
	}
	return e.prototype.register = function(e, t, n) {
		n === void 0 && (n = { lifecycle: Gm.Transient }), this.ensureNotDisposed();
		var r = ch(t) ? t : { useClass: t };
		if (oh(r)) for (var i = [e], a = r; a != null;) {
			var o = a.useToken;
			if (i.includes(o)) throw Error("Token registration cycle detected! " + Qm(i, [o]).join(" -> "));
			i.push(o);
			var s = this._registry.get(o);
			a = s && oh(s.provider) ? s.provider : null;
		}
		if ((n.lifecycle === Gm.Singleton || n.lifecycle == Gm.ContainerScoped || n.lifecycle == Gm.ResolutionScoped) && (sh(r) || eh(r))) throw Error("Cannot use lifecycle \"" + Gm[n.lifecycle] + "\" with ValueProviders or FactoryProviders");
		return this._registry.set(e, {
			provider: r,
			options: n
		}), this;
	}, e.prototype.registerType = function(e, t) {
		return this.ensureNotDisposed(), nh(t) ? this.register(e, { useToken: t }) : this.register(e, { useClass: t });
	}, e.prototype.registerInstance = function(e, t) {
		return this.ensureNotDisposed(), this.register(e, { useValue: t });
	}, e.prototype.registerSingleton = function(e, t) {
		if (this.ensureNotDisposed(), nh(e)) {
			if (nh(t)) return this.register(e, { useToken: t }, { lifecycle: Gm.Singleton });
			if (t) return this.register(e, { useClass: t }, { lifecycle: Gm.Singleton });
			throw Error("Cannot register a type name as a singleton without a \"to\" token");
		}
		var n = e;
		return t && !nh(t) && (n = t), this.register(e, { useClass: n }, { lifecycle: Gm.Singleton });
	}, e.prototype.resolve = function(e, t, n) {
		t === void 0 && (t = new dh()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var r = this.getRegistration(e);
		if (!r && nh(e)) {
			if (n) return;
			throw Error("Attempted to resolve unregistered dependency token: \"" + e.toString() + "\"");
		}
		if (this.executePreResolutionInterceptor(e, "Single"), r) {
			var i = this.resolveRegistration(r, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		if (ah(e)) {
			var i = this.construct(e, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		throw Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
	}, e.prototype.executePreResolutionInterceptor = function(e, t) {
		var n, r;
		if (this.interceptors.preResolution.has(e)) {
			var i = [];
			try {
				for (var a = Xm(this.interceptors.preResolution.getAll(e)), o = a.next(); !o.done; o = a.next()) {
					var s = o.value;
					s.options.frequency != "Once" && i.push(s), s.callback(e, t);
				}
			} catch (e) {
				n = { error: e };
			} finally {
				try {
					o && !o.done && (r = a.return) && r.call(a);
				} finally {
					if (n) throw n.error;
				}
			}
			this.interceptors.preResolution.setAll(e, i);
		}
	}, e.prototype.executePostResolutionInterceptor = function(e, t, n) {
		var r, i;
		if (this.interceptors.postResolution.has(e)) {
			var a = [];
			try {
				for (var o = Xm(this.interceptors.postResolution.getAll(e)), s = o.next(); !s.done; s = o.next()) {
					var c = s.value;
					c.options.frequency != "Once" && a.push(c), c.callback(e, t, n);
				}
			} catch (e) {
				r = { error: e };
			} finally {
				try {
					s && !s.done && (i = o.return) && i.call(o);
				} finally {
					if (r) throw r.error;
				}
			}
			this.interceptors.postResolution.setAll(e, a);
		}
	}, e.prototype.resolveRegistration = function(e, t) {
		if (this.ensureNotDisposed(), e.options.lifecycle === Gm.ResolutionScoped && t.scopedResolutions.has(e)) return t.scopedResolutions.get(e);
		var n = e.options.lifecycle === Gm.Singleton, r = e.options.lifecycle === Gm.ContainerScoped, i = n || r, a = sh(e.provider) ? e.provider.useValue : oh(e.provider) ? i ? e.instance ||= this.resolve(e.provider.useToken, t) : this.resolve(e.provider.useToken, t) : $m(e.provider) ? i ? e.instance ||= this.construct(e.provider.useClass, t) : this.construct(e.provider.useClass, t) : eh(e.provider) ? e.provider.useFactory(this) : this.construct(e.provider, t);
		return e.options.lifecycle === Gm.ResolutionScoped && t.scopedResolutions.set(e, a), a;
	}, e.prototype.resolveAll = function(e, t, n) {
		var r = this;
		t === void 0 && (t = new dh()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var i = this.getAllRegistrations(e);
		if (!i && nh(e)) {
			if (n) return [];
			throw Error("Attempted to resolve unregistered dependency token: \"" + e.toString() + "\"");
		}
		if (this.executePreResolutionInterceptor(e, "All"), i) {
			var a = i.map(function(e) {
				return r.resolveRegistration(e, t);
			});
			return this.executePostResolutionInterceptor(e, a, "All"), a;
		}
		var o = [this.construct(e, t)];
		return this.executePostResolutionInterceptor(e, o, "All"), o;
	}, e.prototype.isRegistered = function(e, t) {
		return t === void 0 && (t = !1), this.ensureNotDisposed(), this._registry.has(e) || t && (this.parent || !1) && this.parent.isRegistered(e, !0);
	}, e.prototype.reset = function() {
		this.ensureNotDisposed(), this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear();
	}, e.prototype.clearInstances = function() {
		var e, t;
		this.ensureNotDisposed();
		try {
			for (var n = Xm(this._registry.entries()), r = n.next(); !r.done; r = n.next()) {
				var i = Zm(r.value, 2), a = i[0], o = i[1];
				this._registry.setAll(a, o.filter(function(e) {
					return !sh(e.provider);
				}).map(function(e) {
					return e.instance = void 0, e;
				}));
			}
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				r && !r.done && (t = n.return) && t.call(n);
			} finally {
				if (e) throw e.error;
			}
		}
	}, e.prototype.createChildContainer = function() {
		var t, n;
		this.ensureNotDisposed();
		var r = new e(this);
		try {
			for (var i = Xm(this._registry.entries()), a = i.next(); !a.done; a = i.next()) {
				var o = Zm(a.value, 2), s = o[0], c = o[1];
				c.some(function(e) {
					return e.options.lifecycle === Gm.ContainerScoped;
				}) && r._registry.setAll(s, c.map(function(e) {
					return e.options.lifecycle === Gm.ContainerScoped ? {
						provider: e.provider,
						options: e.options
					} : e;
				}));
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				a && !a.done && (n = i.return) && n.call(i);
			} finally {
				if (t) throw t.error;
			}
		}
		return r;
	}, e.prototype.beforeResolution = function(e, t, n) {
		n === void 0 && (n = { frequency: "Always" }), this.interceptors.preResolution.set(e, {
			callback: t,
			options: n
		});
	}, e.prototype.afterResolution = function(e, t, n) {
		n === void 0 && (n = { frequency: "Always" }), this.interceptors.postResolution.set(e, {
			callback: t,
			options: n
		});
	}, e.prototype.dispose = function() {
		return Jm(this, void 0, void 0, function() {
			var e;
			return Ym(this, function(t) {
				switch (t.label) {
					case 0: return this.disposed = !0, e = [], this.disposables.forEach(function(t) {
						var n = t.dispose();
						n && e.push(n);
					}), [4, Promise.all(e)];
					case 1: return t.sent(), [2];
				}
			});
		});
	}, e.prototype.getRegistration = function(e) {
		return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null;
	}, e.prototype.getAllRegistrations = function(e) {
		return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null;
	}, e.prototype.construct = function(e, t) {
		var n = this;
		if (e instanceof th) return e.createProxy(function(e) {
			return n.resolve(e, t);
		});
		var r = (function() {
			var r = yh.get(e);
			if (!r || r.length === 0) {
				if (e.length === 0) return new e();
				throw Error("TypeInfo not known for \"" + e.name + "\"");
			}
			var i = r.map(n.resolveParams(t, e));
			return new (e.bind.apply(e, Qm([void 0], i)))();
		})();
		return hh(r) && this.disposables.add(r), r;
	}, e.prototype.resolveParams = function(e, t) {
		var n = this;
		return function(r, i) {
			var a, o, s;
			try {
				return rh(r) ? ih(r) ? r.multiple ? (a = n.resolve(r.transform)).transform.apply(a, Qm([n.resolveAll(r.token, new dh(), r.isOptional)], r.transformArgs)) : (o = n.resolve(r.transform)).transform.apply(o, Qm([n.resolve(r.token, e, r.isOptional)], r.transformArgs)) : r.multiple ? n.resolveAll(r.token, new dh(), r.isOptional) : n.resolve(r.token, e, r.isOptional) : ih(r) ? (s = n.resolve(r.transform, e)).transform.apply(s, Qm([n.resolve(r.token, e)], r.transformArgs)) : n.resolve(r, e);
			} catch (e) {
				throw Error(mh(t, i, e));
			}
		};
	}, e.prototype.ensureNotDisposed = function() {
		if (this.disposed) throw Error("This container has been disposed, you cannot interact with a disposed container");
	}, e;
}())();
//#endregion
//#region node_modules/tsyringe/dist/esm5/index.js
if (typeof Reflect > "u" || !Reflect.getMetadata) throw Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");
//#endregion
//#region node_modules/svelte/src/internal/shared/utils.js
var xh = Array.isArray, Sh = Array.prototype.indexOf, Ch = Array.prototype.includes, wh = Array.from, Th = Object.keys, Eh = Object.defineProperty, Dh = Object.getOwnPropertyDescriptor, Oh = Object.getOwnPropertyDescriptors, kh = Object.prototype, Ah = Array.prototype, jh = Object.getPrototypeOf, Mh = Object.isExtensible, Nh = () => {};
function Ph(e) {
	return typeof e?.then == "function";
}
function Fh(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function Ih() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var Lh = 1024, Rh = 2048, zh = 4096, Bh = 8192, Vh = 16384, Hh = 32768, Uh = 1 << 25, Wh = 65536, Gh = 1 << 19, Kh = 1 << 20, qh = 1 << 25, Jh = 65536, Yh = 1 << 21, Xh = 1 << 22, Zh = 1 << 23, Qh = Symbol("$state"), $h = Symbol("component"), eg = Symbol("legacy props"), tg = Symbol(""), ng = Symbol("attributes"), rg = Symbol("class"), ig = Symbol("style"), ag = Symbol("text"), og = Symbol("form reset"), sg = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), cg = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), lg = {}, ug = Symbol("uninitialized"), dg = "http://www.w3.org/1999/xhtml";
function fg() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function pg(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function mg() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var F = !1;
function hg(e) {
	F = e;
}
var I;
function gg(e) {
	if (e === null) throw pg(), lg;
	return I = e;
}
function _g() {
	return gg(/* @__PURE__ */ nv(I));
}
function L(e) {
	if (F) {
		if (/* @__PURE__ */ nv(I) !== null) throw pg(), lg;
		I = e;
	}
}
function vg(e = 1) {
	if (F) {
		for (var t = e, n = I; t--;) n = /* @__PURE__ */ nv(n);
		I = n;
	}
}
function yg(e = !0) {
	for (var t = 0, n = I;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ nv(n);
		e && n.remove(), n = i;
	}
}
function bg(e) {
	if (!e || e.nodeType !== 8) throw pg(), lg;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function xg(e) {
	return e === this.v;
}
function Sg(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Cg(e) {
	return !Sg(e, this.v);
}
function wg(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Tg() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Eg(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Dg(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Og() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kg(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ag() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function jg() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Mg(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ng() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pg() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fg() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ig() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/shared/context.js
function Lg(e) {
	let t = e.p;
	for (; t !== null && t.c === null;) t = t.p;
	return t?.c ?? null;
}
function Rg(e, t) {
	return e === null && wg(t), e.c ??= new Map(Lg(e) || void 0);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var zg = null;
function Bg(e) {
	zg = e;
}
function Vg(e) {
	return Rg(zg, "getContext").get(e);
}
function Hg(e, t) {
	return Rg(zg, "setContext").set(e, t), t;
}
function R(e, t = !1, n) {
	zg = {
		p: zg,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: J,
		l: null
	};
}
function z(e) {
	var t = zg, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) _v(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, zg = t.p, Ug(e);
}
function Ug(e = {}) {
	return Eh(e, $h, { value: !0 }), e;
}
function Wg() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Gg = [];
function Kg() {
	var e = Gg;
	Gg = [], Fh(e);
}
function qg(e) {
	if (Gg.length === 0 && !E_) {
		var t = Gg;
		queueMicrotask(() => {
			t === Gg && Kg();
		});
	}
	Gg.push(e);
}
function Jg() {
	for (; Gg.length > 0;) Kg();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Yg = ~(Rh | zh | Lh);
function Xg(e, t) {
	e.f = e.f & Yg | t;
}
function Zg(e) {
	e.f & 512 || e.deps === null ? Xg(e, Lh) : Xg(e, zh);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Qg(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= Jh, Qg(t.deps));
}
function $g(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Qg(e.deps), Xg(e, Lh);
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var e_ = [];
function t_(e, t = Nh) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Sg(e, t) && (e = t, n)) {
			let t = !e_.length;
			for (let t of r) t[1](), e_.push(t, e);
			if (t) {
				for (let e = 0; e < e_.length; e += 2) e_[e][0](e_[e + 1]);
				e_.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = Nh) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || Nh), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var n_ = !1;
function r_(e) {
	var t = n_;
	try {
		return n_ = !1, [e(), n_];
	} finally {
		n_ = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var i_ = !1;
function a_() {
	i_ || (i_ = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[og]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function o_(e) {
	var t = q, n = J;
	Vv(null), Hv(null);
	try {
		return e();
	} finally {
		Vv(t), Hv(n);
	}
}
function s_(e, t, n, r = n) {
	e.addEventListener(t, () => o_(n));
	let i = e[og];
	e[og] = i ? () => {
		i(), r(!0);
	} : () => r(!0), a_();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function c_(e, t, n, r) {
	let i = Wg() ? f_ : g_;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = J, c = l_(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				uv(e, s);
			}
			u_();
		}
	}
	var d = d_();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ m_(e))).then(u).catch((e) => uv(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), u_();
	}) : f();
}
function l_() {
	var e = J, t = q, n = zg, r = B;
	return function(i = !0) {
		Hv(e), Vv(t), Bg(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function u_(e = !0) {
	Hv(null), Vv(null), Bg(null), e && B?.deactivate();
}
function d_() {
	var e = J, t = e.b, n = B, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function f_(e) {
	var t = 2 | Rh;
	return J !== null && (J.f |= Gh), {
		ctx: zg,
		deps: null,
		effects: null,
		equals: xg,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: ug,
		wv: 0,
		parent: J,
		ac: null
	};
}
var p_ = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function m_(e, t, n) {
	let r = J;
	r === null && Tg();
	var i = void 0, a = H_(ug), o = !q, s = /* @__PURE__ */ new Set();
	return xv(() => {
		var t = J, n = Ih();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== sg && n.reject(e);
			}).finally(u_);
		} catch (e) {
			n.reject(e), u_();
		}
		var c = B;
		if (o) {
			if (t.f & 32768) var l = d_();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(p_);
			else for (let e of s.values()) e.reject(p_);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== p_ && (c.activate(), t ? (a.f |= Zh, W_(a, t)) : (a.f & 8388608 && (a.f ^= Zh), W_(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), hv(() => {
		for (let e of s) e.reject(p_);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function h_(e) {
	let t = /* @__PURE__ */ f_(e);
	return Wv(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function g_(e) {
	let t = /* @__PURE__ */ f_(e);
	return t.equals = Cg, t;
}
function __(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Ov(t[n]);
	}
}
function v_(e) {
	var t, n = J, r = e.parent;
	if (!Rv && r !== null && e.v !== ug && r.f & 24576) return fg(), e.v;
	Hv(r);
	try {
		e.f &= ~Jh, __(e), t = ny(e);
	} finally {
		Hv(n);
	}
	return t;
}
function y_(e) {
	var t = v_(e);
	if (!e.equals(t) && (e.wv = $v(), (!B?.is_fork || e.deps === null) && (B === null ? e.v = t : (B.capture(e, t, !0), C_?.capture(e, t, !0)), e.deps === null))) {
		Xg(e, Lh);
		return;
	}
	Rv || (w_ === null ? Zg(e) : (mv() || B?.is_fork) && w_.set(e, t));
}
function b_(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && o_(() => {
		t.ac.abort(sg), t.ac = null;
	}), t.fn !== null && (t.teardown = Nh), ay(t, 0), Ev(t));
}
function x_(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && oy(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var S_ = null, B = null, C_ = null, w_ = null, T_ = null, E_ = !1, D_ = !1, O_ = null, k_ = null, A_ = 0, j_ = 1, M_ = class e {
	id = j_++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		S_ === null ? S_ = this : (S_.#n = this, this.#t = S_), S_ = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) Xg(r, Rh), t(r);
			for (r of n.m) Xg(r, zh), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, A_++ > 1e3 && (this.#x(), N_());
		for (let e of this.#u) this.#d.delete(e), Xg(e, Rh), this.schedule(e);
		for (let e of this.#d) Xg(e, zh), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = O_ = [], r = [], i = k_ = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw R_(e), this.#h() || this.discard(), t;
		}
		if (B = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (O_ = null, k_ = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) L_(e, t);
			i.length > 0 && B.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), C_ = this, F_(r), F_(n), C_ = null, this.#s?.resolve();
		var s = B;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && (B_.clear(), s.#g());
	}
	#_(e, t, n) {
		e.f ^= Lh;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= Lh : i & 4 ? t.push(r) : ey(r) && (i & 16 && this.#d.add(r), oy(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), Xg(i, Rh), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), B = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) $g(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== ug && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), w_?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		B = this;
	}
	deactivate() {
		B = null, w_ = null;
	}
	flush() {
		try {
			D_ = !0, B = this, this.#g();
		} finally {
			A_ = 0, T_ = null, O_ = null, k_ = null, D_ = !1, B = null, w_ = null, B_.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(p_);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, qg(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= Ih()).promise;
	}
	static ensure() {
		if (B === null) {
			let t = B = new e();
			!D_ && !E_ && qg(() => {
				t.#e || t.flush();
			});
		}
		return B;
	}
	apply() {
		w_ = null;
	}
	schedule(e) {
		if (T_ = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (O_ !== null && t === J && (q === null || !(q.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= Lh;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? S_ = e : t.#t = e, this.linked = !1;
		}
	}
};
function V(e) {
	var t = E_;
	E_ = !0;
	try {
		var n;
		for (e && (B !== null && !B.is_fork && B.flush(), n = e());;) {
			if (Jg(), B === null) return n;
			B.flush();
		}
	} finally {
		E_ = t;
	}
}
function N_() {
	try {
		Ag();
	} catch (e) {
		uv(e, T_);
	}
}
var P_ = null;
function F_(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && ey(r) && (P_ = /* @__PURE__ */ new Set(), oy(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Av(r), P_?.size > 0)) {
				B_.clear();
				for (let e of P_) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) P_.has(n) && (P_.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || oy(n);
					}
				}
				P_.clear();
			}
		}
		P_ = null;
	}
}
function I_(e) {
	B.schedule(e);
}
function L_(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Xg(e, Lh);
		for (var n = e.first; n !== null;) L_(n, t), n = n.next;
	}
}
function R_(e) {
	Xg(e, Lh);
	for (var t = e.first; t !== null;) R_(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var z_ = /* @__PURE__ */ new Set(), B_ = /* @__PURE__ */ new Map(), V_ = !1;
function H_(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: xg,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function H(e, t) {
	let n = H_(e, t);
	return Wv(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function U_(e, t = !1, n = !0) {
	let r = H_(e);
	return t || (r.equals = Cg), r;
}
function U(e, t, n = !1) {
	return q !== null && (!Bv || q.f & 131072) && Wg() && q.f & 4325394 && (Uv === null || !Uv.has(e)) && Fg(), W_(e, n ? J_(t) : t, k_);
}
function W_(e, t, n = null) {
	if (!e.equals(t)) {
		Rv ? B_.set(e, t) : B_.has(e) || B_.set(e, e.v);
		var r = M_.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && v_(t), w_ === null && Zg(t);
		}
		e.wv = $v(), q_(e, Rh, n), Wg() && J !== null && J.f & 1024 && !(J.f & 96) && (qv === null ? Jv([e]) : qv.push(e)), !r.is_fork && z_.size > 0 && !V_ && G_();
	}
	return t;
}
function G_() {
	V_ = !1;
	for (let e of z_) {
		e.f & 1024 && Xg(e, zh);
		let t;
		try {
			t = ey(e);
		} catch {
			t = !0;
		}
		t && oy(e);
	}
	z_.clear();
}
function K_(e) {
	U(e, e.v + 1);
}
function q_(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Wg(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === J)) {
			var l = (c & Rh) === 0;
			if (l && Xg(s, t), c & 131072) z_.add(s);
			else if (c & 2) {
				var u = s;
				w_?.delete(u), c & 65536 || (c & 512 && (J === null || !(J.f & 2097152)) && (s.f |= Jh), q_(u, zh, n));
			} else if (l) {
				var d = s;
				c & 16 && P_ !== null && P_.add(d), n === null ? I_(d) : n.push(d);
			}
		}
	}
}
function J_(e) {
	if (typeof e != "object" || !e || Qh in e || $h in e) return e;
	let t = jh(e);
	if (t !== kh && t !== Ah) return e;
	var n = /* @__PURE__ */ new Map(), r = xh(e), i = /* @__PURE__ */ H(0), a = null, o = Zv, s = (e) => {
		if (Zv === o) return e();
		var t = q, n = Zv;
		Vv(null), Qv(o);
		var r = e();
		return Vv(t), Qv(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ H(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ng();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ H(r.value, a);
				return n.set(t, e), e;
			}) : U(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ H(ug, a));
					n.set(t, e), K_(i);
				}
			} else U(r, ug), K_(i);
			return !0;
		},
		get(t, r, i) {
			if (r === Qh) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || Dh(t, r)?.writable) && (o = s(() => /* @__PURE__ */ H(J_(c ? t[r] : ug), a)), n.set(r, o)), o !== void 0) {
				var l = Y(o);
				return l === ug ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = Y(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== ug) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === Qh) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== ug || Reflect.has(e, t);
			return (r !== void 0 || J !== null && (!i || Dh(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ H(i ? J_(e[t]) : ug, a)), n.set(t, r)), Y(r) === ug) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ H(ug, a)), n.set(d + "", f)) : U(f, ug);
			}
			if (l === void 0) (!u || Dh(e, t)?.writable) && (l = s(() => /* @__PURE__ */ H(void 0, a)), U(l, J_(o)), n.set(t, l));
			else {
				u = l.v !== ug;
				var p = s(() => J_(o));
				U(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && U(h, g + 1);
				}
				K_(i);
			}
			return !0;
		},
		ownKeys(e) {
			Y(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== ug;
			});
			for (var [r, a] of n) a.v !== ug && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Pg();
		}
	});
}
var Y_, X_, Z_, Q_;
function $_() {
	if (Y_ === void 0) {
		Y_ = window, X_ = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Z_ = Dh(t, "firstChild").get, Q_ = Dh(t, "nextSibling").get, Mh(e) && (e[rg] = void 0, e[ng] = null, e[ig] = void 0, e.__e = void 0), Mh(n) && (n[ag] = void 0);
	}
}
function ev(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function tv(e) {
	return Z_.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function nv(e) {
	return Q_.call(e);
}
function W(e, t) {
	if (!F) return /* @__PURE__ */ tv(e);
	var n = /* @__PURE__ */ tv(I);
	if (n === null) n = I.appendChild(ev());
	else if (t && n.nodeType !== 3) {
		var r = ev();
		return n?.before(r), gg(r), r;
	}
	return t && cv(n), gg(n), n;
}
function rv(e, t = !1) {
	if (!F) {
		var n = /* @__PURE__ */ tv(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nv(n) : n;
	}
	if (t) {
		if (I?.nodeType !== 3) {
			var r = ev();
			return I?.before(r), gg(r), r;
		}
		cv(I);
	}
	return I;
}
function iv(e, t = !1) {
	if (!F) return /* @__PURE__ */ tv(e);
	var n = W(e, t);
	return L(e), n;
}
function G(e, t = 1, n = !1) {
	let r = F ? I : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ nv(r);
	if (!F) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = ev();
			return r === null ? i?.after(a) : r.before(a), gg(a), a;
		}
		cv(r);
	}
	return gg(r), r;
}
function av(e) {
	e.textContent = "";
}
function ov() {
	return !1;
}
function sv(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function cv(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function lv(e) {
	var t = J;
	if (t === null) return q.f |= Zh, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	uv(e, t);
}
function uv(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128 && !(t.f & 33570816)) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function dv(e) {
	J === null && (q === null && kg(e), Og()), Rv && Dg(e);
}
function fv(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pv(e, t) {
	var n = J;
	n !== null && n.f & 8192 && (e |= Bh);
	var r = {
		ctx: zg,
		deps: null,
		nodes: null,
		f: e | Rh | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	B?.register_created_effect(r);
	var i = r;
	if (e & 4) O_ === null ? M_.ensure().schedule(r) : O_.push(r);
	else if (t !== null) {
		try {
			oy(r);
		} catch (e) {
			throw Ov(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= Wh));
	}
	if (i !== null && (i.parent = n, n !== null && fv(i, n), q !== null && q.f & 2 && !(e & 64))) {
		var a = q;
		(a.effects ??= []).push(i);
	}
	return r;
}
function mv() {
	return q !== null && !Bv;
}
function hv(e) {
	let t = pv(8, null);
	return Xg(t, Lh), t.teardown = e, t;
}
function gv(e) {
	dv("$effect");
	var t = J.f;
	if (!q && t & 32 && zg !== null && !zg.i) {
		var n = zg;
		(n.e ??= []).push(e);
	} else return _v(e);
}
function _v(e) {
	return pv(4 | Kh, e);
}
function vv(e) {
	M_.ensure();
	let t = pv(64 | Gh, e);
	return () => {
		Ov(t);
	};
}
function yv(e) {
	M_.ensure();
	let t = pv(64 | Gh, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? jv(t, () => {
			Ov(t), n(void 0);
		}) : (Ov(t), n(void 0));
	});
}
function bv(e) {
	return pv(4, e);
}
function xv(e) {
	return pv(Xh | Gh, e);
}
function Sv(e, t = 0) {
	return pv(8 | t, e);
}
function K(e, t = [], n = [], r = []) {
	c_(r, t, n, (t) => {
		pv(8, () => {
			e(...t.map(Y));
		});
	});
}
function Cv(e, t = 0) {
	return pv(16 | t, e);
}
function wv(e) {
	return pv(32 | Gh, e);
}
function Tv(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = Rv, r = q;
		zv(!0), Vv(null);
		try {
			t.call(null);
		} catch (t) {
			uv(t, e.parent);
		} finally {
			zv(n), Vv(r);
		}
	}
}
function Ev(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && o_(() => {
			e.abort(sg);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Ov(n, t), n = r;
	}
}
function Dv(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Ov(t), t = n;
	}
}
function Ov(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (kv(e.nodes.start, e.nodes.end), n = !0), e.f |= Uh, Ev(e, t && !n), ay(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Tv(e), e.f ^= Uh, e.f |= Vh;
	var i = e.parent;
	i !== null && i.first !== null && Av(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function kv(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ nv(e);
		e.remove(), e = n;
	}
}
function Av(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jv(e, t, n = !0) {
	var r = [];
	e.f |= 256, Mv(e, r, !0);
	var i = () => {
		n && Ov(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Mv(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= Bh;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Mv(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Nv(e) {
	e.f &= -257, Pv(e, !0);
}
function Pv(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= Bh, e.f & 1024 || (Xg(e, Rh), M_.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Pv(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Fv(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ nv(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Iv = null, Lv = !1, Rv = !1;
function zv(e) {
	Rv = e;
}
var q = null, Bv = !1;
function Vv(e) {
	q = e;
}
var J = null;
function Hv(e) {
	J = e;
}
var Uv = null;
function Wv(e) {
	q !== null && (Uv ??= /* @__PURE__ */ new Set()).add(e);
}
var Gv = null, Kv = 0, qv = null;
function Jv(e) {
	qv = e;
}
var Yv = 1, Xv = 0, Zv = Xv;
function Qv(e) {
	Zv = e;
}
function $v() {
	return ++Yv;
}
function ey(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~Jh), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (ey(a) && y_(a), a.wv > e.wv) return !0;
		}
		t & 512 && w_ === null && Xg(e, Lh);
	}
	return !1;
}
function ty(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Uv !== null && Uv.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? ty(a, t, !1) : t === a && (n ? Xg(a, Rh) : a.f & 1024 && Xg(a, zh), I_(a));
	}
}
function ny(e) {
	var t = Gv, n = Kv, r = qv, i = q, a = Uv, o = zg, s = Bv, c = Zv, l = e.f;
	Gv = null, Kv = 0, qv = null, q = l & 96 ? null : e, Uv = null, Bg(e.ctx), Bv = !1, Zv = ++Xv, e.ac !== null && (o_(() => {
		e.ac.abort(sg);
	}), e.ac = null);
	try {
		e.f |= Yh;
		var u = e.fn, d = u();
		e.f |= Hh;
		var f = ry(e);
		if (Wg() && qv !== null && !Bv && f !== null && !(e.f & 6146)) for (var p = 0; p < qv.length; p++) ty(qv[p], e);
		if (i !== null && i !== e) {
			if (Xv++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Xv;
			if (t !== null) for (let e of t) e.rv = Xv;
			qv !== null && (r === null ? r = qv : r.push(...qv));
		}
		return e.f & 8388608 && (e.f ^= Zh), d;
	} catch (t) {
		return ry(e), lv(t);
	} finally {
		e.f ^= Yh, Gv = t, Kv = n, qv = r, q = i, Uv = a, Bg(o), Bv = s, Zv = c;
	}
}
function ry(e) {
	var t = e.deps, n = B?.is_fork;
	if (Gv !== null) {
		var r;
		if (n || ay(e, Kv), t !== null && Kv > 0) for (t.length = Kv + Gv.length, r = 0; r < Gv.length; r++) t[Kv + r] = Gv[r];
		else e.deps = t = Gv;
		if (mv() && e.f & 512) for (r = Kv; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && Kv < t.length && (ay(e, Kv), t.length = Kv);
	return t;
}
function iy(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = Sh.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Gv === null || !Ch.call(Gv, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~Jh), a.v !== ug && Zg(a), a.ac !== null && o_(() => {
			a.ac.abort(sg), a.ac = null, Xg(a, Rh);
		}), b_(a), ay(a, 0);
	}
}
function ay(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) iy(e, n[r]);
}
function oy(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Xg(e, Lh);
		var n = J, r = Lv;
		J = e, Lv = !(t & 96);
		try {
			t & 16777232 ? Dv(e) : Ev(e), Tv(e);
			var i = ny(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Yv;
		} finally {
			Lv = r, J = n;
		}
	}
}
async function sy() {
	await Promise.resolve(), V();
}
function Y(e) {
	var t = !!(e.f & 2);
	if (Iv?.add(e), q !== null && !Bv && !(J !== null && J.f & 16384) && (Uv === null || !Uv.has(e))) {
		var n = q.deps;
		if (q.f & 2097152) e.rv < Xv && (e.rv = Xv, Gv === null && n !== null && n[Kv] === e ? Kv++ : Gv === null ? Gv = [e] : Gv.push(e));
		else {
			q.deps ??= [], Ch.call(q.deps, e) || q.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [q] : Ch.call(r, q) || r.push(q);
		}
	}
	if (Rv && B_.has(e)) return B_.get(e);
	if (t) {
		var i = e;
		if (Rv) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || ly(i)) && (a = v_(i)), B_.set(i, a), a;
		}
		var o = !(i.f & 512) && !Bv && q !== null && (Lv || !!(q.f & 512)), s = (i.f & Hh) === 0;
		ey(i) && (o && (i.f |= 512), y_(i)), o && !s && (x_(i), cy(i));
	}
	if (w_?.has(e)) return w_.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function cy(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (x_(t), cy(t));
}
function ly(e) {
	if (e.v === ug) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (B_.has(t) || t.f & 2 && ly(t)) return !0;
	return !1;
}
function uy(e) {
	var t = Bv;
	try {
		return Bv = !0, e();
	} finally {
		Bv = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var dy = ["touchstart", "touchmove"];
function fy(e) {
	return dy.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dev/css.js
var py = Symbol("events"), my = /* @__PURE__ */ new Set(), hy = /* @__PURE__ */ new Set();
function gy(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Sy.call(t, e), !e.cancelBubble) return o_(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? qg(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function _y(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = gy(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && hv(() => {
		t.removeEventListener(e, o, a);
	});
}
function vy(e, t, n) {
	(t[py] ??= {})[e] = n;
}
function yy(e) {
	for (var t = 0; t < e.length; t++) my.add(e[t]);
	for (var n of hy) n(e);
}
var by = null, xy = !1;
function Sy(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	by = e, xy || (xy = !0, setTimeout(() => {
		xy = !1, by = null;
	}));
	var o = 0, s = by === e && e[py];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[py] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		Eh(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = q, d = J;
		Vv(null), Hv(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[py]?.[r];
					m != null && (!a.disabled || e.target === a) && m.call(a, e);
				} catch (e) {
					f ? p.push(e) : f = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (f) {
				for (let e of p) queueMicrotask(() => {
					throw e;
				});
				throw f;
			}
		} finally {
			e[py] = t, delete e.currentTarget, Vv(u), Hv(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Cy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function wy(e) {
	return Cy?.createHTML(e) ?? e;
}
function Ty(e) {
	var t = sv("template");
	return t.innerHTML = wy(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ey(e, t) {
	var n = J;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function X(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (F) return Ey(I, null), I;
		i === void 0 && (i = Ty(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ tv(i)));
		var t = r || X_ ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ tv(t), s = t.lastChild;
			Ey(o, s);
		} else Ey(t, t);
		return t;
	};
}
function Dy(e = "") {
	if (!F) {
		var t = ev(e + "");
		return Ey(t, t), t;
	}
	var n = I;
	return n.nodeType === 3 ? cv(n) : (n.before(n = ev()), gg(n)), Ey(n, n), n;
}
function Oy() {
	if (F) return Ey(I, null), I;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = ev();
	return e.append(t, n), Ey(t, n), e;
}
function Z(e, t) {
	if (F) {
		var n = J;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = I), _g();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function ky(e) {
	let t = 0, n = H_(0), r;
	return () => {
		mv() && (Y(n), Sv(() => (t === 0 && (r = uy(() => e(() => K_(n)))), t += 1, () => {
			qg(() => {
				--t, t === 0 && (r?.(), r = void 0, K_(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ay = Wh | Gh;
function jy(e, t, n, r) {
	new My(e, t, n, r);
}
var My = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = F ? I : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = ky(() => (this.#m = H_(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = J;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = J.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Cv(() => {
			if (F) {
				let e = this.#t;
				_g();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ay), F && (this.#e = I);
	}
	#g() {
		try {
			this.#a = wv(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		qg(r), t && (this.#s = wv(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				mg();
				return;
			}
			t = !0, n && Ig(), this.#s !== null && jv(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					uv(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = wv(() => e(this.#e)), qg(() => {
			var e = this.#c = document.createDocumentFragment(), t = ev(), n = !1;
			if (e.append(t), this.#a = this.#S(() => {
				try {
					return wv(() => this.#r(t));
				} catch (e) {
					try {
						this.error(e), n = !0;
					} catch (e) {
						uv(e, this.#i.parent);
					}
					return null;
				}
			}), this.#a === null) {
				this.#c = null, n && this.#x(B);
				return;
			}
			this.#u === 0 && (this.#e.before(e), this.#c = null, jv(this.#o, () => {
				this.#o = null;
			}), this.#x(B));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = wv(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Fv(this.#a, e);
				let t = this.#n.pending;
				this.#o = wv(() => t(this.#e));
			} else this.#x(B);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		$g(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = J, n = q, r = zg;
		Hv(this.#i), Vv(this.#i), Bg(this.#i.ctx);
		try {
			return M_.ensure(), e();
		} finally {
			Hv(t), Vv(n), Bg(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && jv(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, qg(() => {
			this.#d = !1, this.#m && W_(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Y(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		B?.is_fork ? (this.#a && B.skip_effect(this.#a), this.#o && B.skip_effect(this.#o), this.#s && B.skip_effect(this.#s), B.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (Ov(this.#a), null), this.#o &&= (Ov(this.#o), null), this.#s &&= (Ov(this.#s), null), F && (gg(this.#t), vg(), gg(yg()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return wv(() => {
						var r = J;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return uv(e, this.#i.parent), null;
				}
			}));
		};
		qg(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				uv(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => uv(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function Ny(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ag] ??= e.nodeValue) && (e[ag] = n, e.nodeValue = `${n}`);
}
function Py(e, t) {
	return Ly(e, t);
}
function Fy(e, t) {
	$_(), t.intro = t.intro ?? !1;
	let n = t.target, r = F, i = I;
	try {
		for (var a = /* @__PURE__ */ tv(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ nv(a);
		if (!a) throw lg;
		hg(!0), gg(a);
		let r = Ly(e, {
			...t,
			anchor: a
		});
		return hg(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== lg && console.warn("Failed to hydrate: ", r), t.recover === !1 && jg(), $_(), av(n), hg(!1), Py(e, t);
	} finally {
		hg(r), gg(i);
	}
}
var Iy = /* @__PURE__ */ new Map();
function Ly(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	$_();
	var c = void 0, l = yv(() => {
		var o = n ?? t.appendChild(ev());
		jy(o, { pending: () => {} }, (t) => {
			R({});
			var n = zg;
			if (a && (n.c = a), i && (r.$$events = i), F && Ey(t, null), c = e(t, r) || Ug(), F && (J.nodes.end = I, I === null || I.nodeType !== 8 || I.data !== "]")) throw pg(), lg;
			z();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = fy(r);
					for (let e of [t, document]) {
						var a = Iy.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Iy.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Sy, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(wh(my)), hy.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Iy.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Sy), r.delete(e), r.size === 0 && Iy.delete(n)) : r.set(e, i);
			}
			hy.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Ry.set(c, l), c;
}
var Ry = /* @__PURE__ */ new WeakMap();
function zy(e, t) {
	let n = Ry.get(e);
	return n ? (Ry.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var By = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) Nv(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Nv(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Ov(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Fv(r, t), t.append(ev()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Ov(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), jv(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Ov(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = B, r = ov();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = ev();
				i.append(a), this.#n.set(e, {
					effect: wv(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, wv(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else F && (this.anchor = I), this.#a(n);
	}
}, Vy = 0, Hy = 1, Uy = 2;
function Wy(e, t, n, r, i) {
	F && _g();
	var a = Wg(), o = ug, s = a ? H_(o) : /* @__PURE__ */ U_(o, !1, !1), c = a ? H_(o) : /* @__PURE__ */ U_(o, !1, !1), l = new By(e);
	Cv(() => {
		var a = B, o = t(), u = !1;
		let d = F && Ph(o) === (e.data === "[!");
		if (d && (gg(yg()), hg(!1)), Ph(o)) {
			var f = l_(), p = !1;
			let e = (e) => {
				if (!u) {
					p = !0, f(!1), B === a && a.deactivate(), M_.ensure();
					try {
						e();
					} finally {
						u_(!1), E_ || V();
					}
				}
			};
			o.then((t) => {
				e(() => {
					W_(s, t), l.ensure(Hy, r && ((e) => r(e, s)));
				});
			}, (t) => {
				e(() => {
					if (W_(c, t), l.ensure(Uy, i && ((e) => i(e, c))), !i) throw c.v;
				});
			}), F ? l.ensure(Vy, n) : qg(() => {
				p || e(() => {
					l.ensure(Vy, n);
				});
			});
		} else W_(s, o), l.ensure(Hy, r && ((e) => r(e, s)));
		return d && hg(!0), () => {
			u = !0;
		};
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Gy(e, t, n = !1) {
	var r;
	F && (r = I, _g());
	var i = new By(e), a = n ? Wh : 0;
	function o(e, t) {
		if (F) {
			var n = bg(r);
			if (e !== parseInt(n.substring(1))) {
				var a = yg();
				gg(a), i.anchor = a, hg(!1), i.ensure(e, t), hg(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Cv(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ky(e, t) {
	return t;
}
function qy(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		jv(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Jy(e, wh(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null && e.pending.size === 0;
		if (c) {
			var l = n, u = l.parentNode;
			av(u), u.append(l), e.items.clear();
		}
		Jy(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Jy(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= qh, Fv(a, document.createDocumentFragment())) : Ov(t[i], n);
	}
}
var Yy;
function Xy(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = F ? gg(/* @__PURE__ */ tv(c)) : c.appendChild(ev());
	}
	F && _g();
	var l = null, u = /* @__PURE__ */ g_(() => {
		var e = n();
		return xh(e) ? e : e == null ? [] : wh(e);
	}), d, f = /* @__PURE__ */ new Map(), p = !0;
	function m(e) {
		g.effect.f & 16384 || (g.pending.delete(e), g.fallback = l, Qy(g, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= qh, eb(l, null, o)) : Nv(l) : jv(l, () => {
			l = null;
		})));
	}
	function h(e) {
		g.pending.delete(e);
	}
	var g = {
		effect: Cv(() => {
			d = Y(u);
			var e = d.length;
			let c = !1;
			F && bg(o) === "[!" != (e === 0) && (o = yg(), gg(o), hg(!1), c = !0);
			for (var g = /* @__PURE__ */ new Set(), _ = B, v = ov(), y = 0; y < e; y += 1) {
				F && I.nodeType === 8 && I.data === "]" && (o = I, c = !0, hg(!1));
				var b = d[y], x = r(b, y), S = p ? null : s.get(x);
				S ? (S.v && W_(S.v, b), S.i && W_(S.i, y), v && _.unskip_effect(S.e)) : (S = $y(s, p ? o : Yy ??= ev(), b, x, y, i, t, n), p || (S.e.f |= qh), s.set(x, S)), g.add(x);
			}
			if (e === 0 && a && !l && (p ? l = wv(() => a(o)) : (l = wv(() => a(Yy ??= ev())), l.f |= qh)), e > g.size && Eg("", "", ""), F && e > 0 && gg(yg()), !p) {
				if (f.set(_, g), v) {
					for (let [e, t] of s) g.has(e) || _.skip_effect(t.e);
					_.oncommit(m), _.ondiscard(h);
				} else m(_);
			}
			c && hg(!0), Y(u);
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	p = !1, F && (o = I);
}
function Zy(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Qy(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, c = Zy(e.effect.first), l, u = null, d, f = [], p = [], m, h, g, _;
	if (a) for (_ = 0; _ < o; _ += 1) m = t[_], h = i(m, _), g = s.get(h).e, g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
	for (_ = 0; _ < o; _ += 1) {
		if (m = t[_], h = i(m, _), g = s.get(h).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
		if (g.f & 8192 && (Nv(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g.f & 33554432) {
			if (g.f ^= qh, g === c) eb(g, null, n);
			else {
				var v = u ? u.next : c;
				g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), tb(e, u, g), tb(e, g, v), eb(g, v, n), u = g, f = [], p = [], c = Zy(u.next);
				continue;
			}
		}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var y = p[0], b;
					u = y.prev;
					var x = f[0], S = f[f.length - 1];
					for (b = 0; b < f.length; b += 1) eb(f[b], y, n);
					for (b = 0; b < p.length; b += 1) l.delete(p[b]);
					tb(e, x.prev, S.next), tb(e, u, x), tb(e, S, y), c = y, u = S, --_, f = [], p = [];
				} else l.delete(g), eb(g, c, n), tb(e, g.prev, g.next), tb(e, g, u === null ? e.effect.first : u.next), tb(e, u, g), u = g;
				continue;
			}
			for (f = [], p = []; c !== null && c !== g;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = Zy(c.next);
			if (c === null) continue;
		}
		g.f & 33554432 || f.push(g), u = g, c = Zy(g.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Jy(e, wh(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var ee = [];
		if (l !== void 0) for (g of l) g.f & 8192 || ee.push(g);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = Zy(c.next);
		var te = ee.length;
		if (te > 0) {
			var ne = r & 4 && o === 0 ? n : null;
			if (a) {
				for (_ = 0; _ < te; _ += 1) ee[_].nodes?.a?.measure();
				for (_ = 0; _ < te; _ += 1) ee[_].nodes?.a?.fix();
			}
			qy(e, ee, ne);
		}
	}
	a && qg(() => {
		if (d !== void 0) for (g of d) g.nodes?.a?.apply();
	});
}
function $y(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? H_(n) : /* @__PURE__ */ U_(n, !1, !1) : null, l = o & 2 ? H_(i) : null;
	return {
		v: c,
		i: l,
		e: wv(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function eb(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ nv(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function tb(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function nb(e, t, ...n) {
	var r = new By(e);
	Cv(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, Wh);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function rb(e, t) {
	bv(() => {
		e = J?.parent?.nodes?.start ?? e;
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = sv("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var ib = [..." 	\n\r\f\xA0\v﻿"];
function ab(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ib.includes(r[o - 1])) && (s === r.length || ib.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ob(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function sb(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function cb(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(sb)), i && c.push(...Object.keys(i).map(sb));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = sb(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += ob(r)), i && (n += ob(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function lb(e, t, n, r, i, a) {
	var o = e[rg];
	if (F || o !== n || o === void 0) {
		var s = ab(n, r, a);
		(!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[rg] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function ub(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function db(e, t, n, r) {
	var i = e[ig];
	if (F || i !== t) {
		var a = cb(t, r);
		(!F || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[ig] = t;
	} else r && (Array.isArray(r) ? (ub(e, n?.[0], r[0]), ub(e, n?.[1], r[1], "important")) : ub(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var fb = Symbol("is custom element"), pb = Symbol("is html"), mb = cg ? "link" : "LINK";
function hb(e) {
	if (F) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					_b(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					_b(e, "checked", null), e.checked = r;
				}
			}
		};
		e[og] = n, qg(n), a_();
	}
}
function gb(e, t) {
	var n = vb(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function _b(e, t, n, r) {
	var i = vb(e);
	F && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === mb) || i[t] !== (i[t] = n) && (t === "loading" && (e[tg] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && bb(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function vb(e) {
	return e[ng] ??= {
		[fb]: e.nodeName.includes("-"),
		[pb]: e.namespaceURI === dg
	};
}
var yb = /* @__PURE__ */ new Map();
function bb(e) {
	var t = e.getAttribute("is") || e.nodeName, n = yb.get(t);
	if (n) return n;
	yb.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = Oh(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
		i = jh(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function xb(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	s_(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Sb(e) ? Cb(a) : a, n(a), B !== null && r.add(B), await sy(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (F && e.defaultValue !== e.value || uy(t) == null && e.value) && (n(Sb(e) ? Cb(e.value) : e.value), B !== null && r.add(B)), Sv(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = B;
			if (r.has(i)) return;
		}
		Sb(e) && n === Cb(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Sb(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Cb(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function wb(e, t) {
	return e === t || e?.[Qh] === t;
}
function Tb(e = Ug(), t, n, r) {
	var i = zg.r, a = J;
	return bv(() => {
		var o, s;
		return Sv(() => {
			o = s, s = r?.() || [], uy(() => {
				wb(n(...s), e) || (t(e, ...s), o && wb(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && wb(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function Q(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ f_(r), Y(l)) : (c && (c = !1, s = o ? uy(r) : r), s);
	let d;
	if (a) {
		var f = Qh in e || eg in e;
		d = Dh(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = r_(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Mg(t), d(p)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (d) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || m) && d(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? f_ : g_)(() => (_ = !1, h()));
	a && Y(v);
	var y = J;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Y(v) : i && a ? J_(e) : e;
			return U(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Rv && _ || y.f & 16384 ? v.v : Y(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Eb(e) {
	return new Db(e);
}
var Db = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ U_(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Y(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === eg || (Y(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return U(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Fy : Py)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && V(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && Eh(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			zy(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Ob;
typeof HTMLElement == "function" && (Ob = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = sv("slot");
					e !== "default" && (n.name = e), Z(t, n);
				};
			}
			let t = {}, n = Ab(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = kb(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Eb({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = vv(() => {
				Sv(() => {
					this.$$r = !0;
					for (let e of Th(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = kb(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = kb(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return Th(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function kb(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Ab(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function $(e, t, n, r, i, a) {
	let o = class extends Ob {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return Th(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return Th(t).forEach((e) => {
		Eh(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = kb(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (Dh(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		Eh(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
function jb(e) {
	zg === null && wg("onMount"), gv(() => {
		let t = uy(e);
		if (typeof t == "function") return t;
	});
}
function Mb(e) {
	zg === null && wg("onDestroy"), jb(() => () => uy(e));
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region src/utils/service-functions.ts
var Nb = {
	[_p.toString()]: "TenantHttpService",
	[Cp.toString()]: "DataSourceHttpService",
	[hp.toString()]: "EntityHttpService",
	[yp.toString()]: "EntityNameService",
	[pp.toString()]: "BaseHttpService",
	[Fm.toString()]: "LiveValueService"
};
function Pb(e, t = null) {
	let n = Nb[e.toString()] ?? e.toString(), r = window.dependencyContainer ?? bh;
	if (r.isRegistered(e)) return r.resolve(e);
	if (r.isRegistered(n)) return r.resolve(n);
	if (window[n]) return window[n];
	if (t) return t;
	throw Error(`Service ${n?.toString()} not found`);
}
function Fb(e, t, n = !0) {
	let r = window.dependencyContainer ?? bh;
	try {
		if (r.isRegistered(e) && !n) return;
		r.registerInstance(e, t);
	} catch {
		throw Error(`Failed to register service: ${e?.toString()}`);
	}
	return t;
}
function Ib(e) {
	window.dependencyContainer = e;
}
//#endregion
//#region node_modules/@ngneat/elf/index.esm.js
function Lb(...e) {
	let t = {
		config: {},
		state: {}
	};
	for (let { config: n, props: r } of e) Object.assign(t.config, n), Object.assign(t.state, r);
	return t;
}
var Rb = new Pi(!1), zb = Rb.asObservable().pipe(Ja((e) => !e), $a(1)), Bb = {};
new class {
	registerPreStoreUpdate(e) {
		Bb.preStoreUpdate = e;
	}
	registerPreStateInit(e) {
		Bb.preStateInit = e;
	}
}();
var Vb = /* @__PURE__ */ new Map(), Hb = new Mi();
Hb.asObservable();
function Ub(e) {
	Vb.set(e.name, e), Hb.next({
		type: "add",
		store: e
	});
}
function Wb(e) {
	Vb.delete(e.name), Hb.next({
		type: "remove",
		store: e
	});
}
function Gb() {
	return Vb;
}
var Kb = [];
function qb(e) {
	Kb.push(e);
}
function Jb(e) {
	Kb.length && Kb.forEach((t) => e.next(t)), Kb = [];
}
var Yb = class extends Pi {
	constructor(e) {
		super(e.state), this.storeDef = e, this.initialState = void 0, this.state = void 0, this.batchInProgress = !1, this.events = new Mi(), this.context = {
			config: this.getConfig(),
			setEvent: (e) => {
				qb(e);
			}
		}, this.events$ = this.events.asObservable(), this.state = this.getInitialState(e.state), this.initialState = this.getValue(), Ub(this);
	}
	get name() {
		return this.storeDef.name;
	}
	getInitialState(e) {
		return Bb.preStateInit ? Bb.preStateInit(e, this.name) : e;
	}
	getConfig() {
		return this.storeDef.config;
	}
	query(e) {
		return e(this.getValue());
	}
	update(...e) {
		let t = this.getValue(), n = e.reduce((e, t) => (e = t(e, this.context), e), t);
		Bb.preStoreUpdate && (n = Bb.preStoreUpdate(t, n, this.name)), n !== t && (this.state = n, Rb.getValue() ? this.batchInProgress || (this.batchInProgress = !0, zb.subscribe(() => {
			super.next(this.state), Jb(this.events), this.batchInProgress = !1;
		})) : (super.next(this.state), Jb(this.events)));
	}
	getValue() {
		return this.state;
	}
	reset() {
		this.update(() => this.initialState);
	}
	combine(e) {
		let t = !0, n = {};
		return new Ci((r) => {
			for (let [i, a] of Object.entries(e)) r.add(a.subscribe((e) => {
				n[i] = e, t = !0;
			}));
			return this.subscribe({
				next() {
					t &&= (r.next({ ...n }), !1);
				},
				error(e) {
					r.error(e);
				},
				complete() {
					r.complete();
				}
			});
		});
	}
	destroy() {
		Wb(this), this.reset();
	}
	next(e) {
		this.update(() => e);
	}
	error() {}
	complete() {}
};
function Xb(e, ...t) {
	let { state: n, config: r } = Lb(...t), { name: i } = e;
	return new Yb({
		name: i,
		state: n,
		config: r
	});
}
function Zb(e) {
	return {
		props: e,
		config: void 0
	};
}
//#endregion
//#region node_modules/@ngneat/elf-persist-state/index.esm.js
function Qb(e, t) {
	let n = {
		source: (e) => e,
		preStoreInit: (e) => e,
		key: t.key ?? `${e.name}@store`,
		runGuard() {
			return typeof window < "u";
		},
		...t
	};
	if (!n.runGuard?.()) return {
		initialized$: Ca(!1),
		unsubscribe() {}
	};
	let { storage: r } = t, i = new Ii(1), a = Sa(r.getItem(n.key)).subscribe((t) => {
		t && e.update((e) => n.preStoreInit({
			...e,
			...t
		})), i.next(!0), i.complete();
	}), o = n.source(e).pipe(co(1), lo((t) => {
		let i = n.preStorageUpdate ? n.preStorageUpdate(e.name, t) : t;
		return r.setItem(n.key, i);
	})).subscribe();
	return {
		initialized$: i.asObservable(),
		unsubscribe() {
			o.unsubscribe(), a.unsubscribe();
		}
	};
}
function $b(e) {
	if (e) return {
		getItem(t) {
			let n = e.getItem(t);
			return Ca(n && JSON.parse(n));
		},
		setItem(t, n) {
			return e.setItem(t, JSON.stringify(n)), Ca(!0);
		},
		removeItem(t) {
			return e.removeItem(t), Ca(!0);
		}
	};
}
var ex = $b((() => {
	try {
		if (typeof localStorage < "u") return localStorage;
	} catch {}
})());
(() => {
	try {
		if (typeof sessionStorage < "u") return sessionStorage;
	} catch {}
})();
//#endregion
//#region src/components/entity-select/entity-select-stores.ts
var tx = t_(r.Signal), { config: nx, state: rx } = Lb(Zb({
	queryWithSubGroups: !0,
	selectedTenant: null,
	pageSize: 10
})), ix = Xb({ name: "entity-select-selection" }, Zb({ selectedEntities: [] })), ax = new Yb({
	state: rx,
	config: nx,
	name: "entity-select-global"
});
Qb(ax, {
	key: "entity-select-global",
	storage: ex
});
var ox = (e) => {
	let t = Gb().get(`entity-select-type-${tx}`);
	if (t) return t;
	let { state: n, config: r } = Lb(Zb({
		filter: null,
		selectedGroup: null,
		lastSelectedEntities: []
	}));
	return new Yb({
		state: n,
		config: r,
		name: `entity-select-type-${tx}`
	});
}, sx = /* @__PURE__ */ X("<span class=\"material-symbols-rounded text-[20px] w-[20px] cursor-pointer\">expand_more</span>"), cx = /* @__PURE__ */ X("<span class=\"material-symbols-rounded text-[20px] w-[20px] cursor-pointer\">chevron_right</span>"), lx = /* @__PURE__ */ X("<div class=\"flex items-center\"><!></div>"), ux = /* @__PURE__ */ X("<div class=\"p-[10px]\"></div>"), dx = /* @__PURE__ */ X("<div class=\"flex w-full\"><div class=\"border-r group-hover:border-gray-300 border-transparent pl-1 mb-2\"></div> <div class=\"w-full\"></div></div>"), fx = /* @__PURE__ */ X("<div class=\"group cursor-pointer\"><div><div></div> <!> <div class=\"overflow-hidden whitespace-nowrap text-ellipsis w-full\"> </div></div> <!></div>");
function px(e, t) {
	R(t, !0);
	let n = Pb(hp), i = Q(t, "group", 7), a = Q(t, "expanded", 15, !1), o = Q(t, "level", 7, 1), s = Q(t, "entityType", 7), c = /* @__PURE__ */ H(J_([])), l = /* @__PURE__ */ H(!1), u = new Mi(), d = ox(s());
	d.pipe(uo(u), ro("selectedGroup")).subscribe((e) => {
		U(l, e.selectedGroup?.Id === i()?.Id), i() && e.selectedGroup?.Path?.includes(i().Id) && a(!0);
	});
	async function f() {
		try {
			U(c, await (await n.queryConfiguration(r.Group, { GroupId: i().Id })).data, !0);
		} catch (e) {
			console.error(e);
		}
	}
	gv(() => {
		i() && f();
	});
	function p() {
		a(!a());
	}
	function m() {
		d.update((e) => ({
			...e,
			selectedGroup: i()
		}));
	}
	Mb(() => {
		u.next(), u.complete();
	});
	var h = {
		get group() {
			return i();
		},
		set group(e) {
			i(e), V();
		},
		get expanded() {
			return a();
		},
		set expanded(e = !1) {
			a(e), V();
		},
		get level() {
			return o();
		},
		set level(e = 1) {
			o(e), V();
		},
		get entityType() {
			return s();
		},
		set entityType(e) {
			s(e), V();
		}
	}, g = fx(), _ = W(g), v = G(W(_), 2), y = (e) => {
		var t = lx(), n = W(t), r = (e) => {
			var t = sx();
			vy("click", t, () => p()), Z(e, t);
		}, i = (e) => {
			var t = cx();
			vy("click", t, () => p()), Z(e, t);
		};
		Gy(n, (e) => {
			a() ? e(r) : e(i, -1);
		}), L(t), Z(e, t);
	}, b = (e) => {
		Z(e, ux());
	};
	Gy(v, (e) => {
		Y(c).length > 0 ? e(y) : e(b, -1);
	});
	var x = iv(G(v, 2), !0);
	L(_);
	var S = G(_, 2), ee = (e) => {
		var t = dx(), n = W(t), r = G(n, 2);
		Xy(r, 21, () => Y(c), Ky, (e, t) => {
			{
				let n = /* @__PURE__ */ h_(() => o() + 1);
				px(e, {
					get group() {
						return Y(t);
					},
					get level() {
						return Y(n);
					},
					get entityType() {
						return s();
					}
				});
			}
		}), L(r), L(t), K(() => db(n, `padding-right: ${o() * 4}px`)), Z(e, t);
	};
	return Gy(S, (e) => {
		a() && e(ee);
	}), L(g), K(() => {
		lb(_, 1, `flex items-center hover:bg-slate-100 w-full ${Y(l) ? "!bg-slate-300" : ""}`), Ny(x, i()?.Name?.Value);
	}), vy("click", _, () => m()), Z(e, g), z(h);
}
yy(["click"]), $(px, {
	group: {},
	expanded: {},
	level: {},
	entityType: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/icon-button/IconButton.svelte
var mx = /* @__PURE__ */ X("<div><div class=\"ripple bg-gray-200 bg-opacity-50 svelte-1ek9rro\"></div> <span class=\"material-symbols-rounded z-[1] select-none\"><!></span></div>"), hx = {
	hash: "svelte-1ek9rro",
	code: ".container.svelte-1ek9rro {position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;}.ripple.svelte-1ek9rro {position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0;}"
};
function gx(e, t) {
	R(t, !0), rb(e, hx);
	let n = Q(t, "icon", 7, null), r = Q(t, "size", 7, "medium"), i = Q(t, "className", 7, ""), a = Q(t, "disabled", 7, !1), o = Q(t, "onclick", 7), s = Q(t, "children", 7), c = {
		small: 24,
		medium: 40,
		large: 56
	}, l = /* @__PURE__ */ h_(() => c[r()]), u = /* @__PURE__ */ H(!1), d;
	function f(e) {
		a() || (U(u, !0), d = e.timeStamp);
	}
	function p(e) {
		let t = e.timeStamp - d;
		t < 300 ? setTimeout(() => {
			U(u, !1);
		}, 300 - t) : U(u, !1);
	}
	function m(e) {
		a() || o()?.(e);
	}
	var h = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), V();
		},
		get size() {
			return r();
		},
		set size(e = "medium") {
			r(e), V();
		},
		get className() {
			return i();
		},
		set className(e = "") {
			i(e), V();
		},
		get disabled() {
			return a();
		},
		set disabled(e = !1) {
			a(e), V();
		},
		get onclick() {
			return o();
		},
		set onclick(e) {
			o(e), V();
		},
		get children() {
			return s();
		},
		set children(e) {
			s(e), V();
		}
	}, g = mx(), _ = W(g), v = G(_, 2), y = W(v), b = (e) => {
		var t = Oy();
		nb(rv(t), s), Z(e, t);
	}, x = (e) => {
		var t = Dy();
		K(() => Ny(t, n())), Z(e, t);
	};
	return Gy(y, (e) => {
		s() ? e(b) : e(x, -1);
	}), L(v), L(g), K(() => {
		lb(g, 1, `container group ${i() ?? ""}`, "svelte-1ek9rro"), db(g, `height: ${Y(l) ?? ""}px; width: ${Y(l) ?? ""}px; ${a() ? "cursor: default !important; opacity: 0.4;" : ""}`), db(_, Y(u) ? "width: 100% !important; height: 100% !important" : "");
	}), vy("mousedown", g, (e) => f(e)), vy("mouseup", g, (e) => p(e)), vy("mouseout", g, (e) => p(e)), vy("click", g, (e) => m(e)), _y("blur", g, () => {}), Z(e, g), z(h);
}
yy([
	"mousedown",
	"mouseup",
	"mouseout",
	"click"
]), $(gx, {
	icon: {},
	size: {},
	className: {},
	disabled: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/checkbox/Checkbox.svelte
var _x = /* @__PURE__ */ X("<div class=\"flex items-center cursor-pointer\"><input type=\"checkbox\" class=\"mr-2 h-[18px] w-[18px] cursor-pointer pointer-events-none\"/> <div> </div></div>");
function vx(e, t) {
	R(t, !0);
	let n = Q(t, "readonly", 7, !1), r = Q(t, "label", 7, ""), i = Q(t, "checked", 15, !1), a = Q(t, "indeterminate", 7, !1), o = Q(t, "onchange", 7);
	function s() {
		n() || (i(!i()), o()?.(i()));
	}
	var c = {
		get readonly() {
			return n();
		},
		set readonly(e = !1) {
			n(e), V();
		},
		get label() {
			return r();
		},
		set label(e = "") {
			r(e), V();
		},
		get checked() {
			return i();
		},
		set checked(e = !1) {
			i(e), V();
		},
		get indeterminate() {
			return a();
		},
		set indeterminate(e = !1) {
			a(e), V();
		},
		get onchange() {
			return o();
		},
		set onchange(e) {
			o(e), V();
		}
	}, l = _x(), u = W(l);
	hb(u);
	var d = iv(G(u, 2), !0);
	return L(l), K(() => {
		gb(u, i()), u.indeterminate = a() && !i(), Ny(d, r());
	}), vy("click", l, () => s()), Z(e, l), z(c);
}
yy(["click"]), $(vx, {
	readonly: {},
	label: {},
	checked: {},
	indeterminate: {},
	onchange: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectSidebar.svelte
var yx = /* @__PURE__ */ X("<div class=\"flex-[2] overflow-auto\"><!></div>"), bx = /* @__PURE__ */ X("<div><!> <!></div>"), xx = /* @__PURE__ */ X("<div class=\"flex flex-col w-full h-full overflow-hidden\"><div class=\"font-bold text-lg flex items-center cursor-pointer group\"> <!></div> <!> <div class=\"flex-1\"><div class=\"font-bold text-gray-700\">Zuletzt ausgewählt</div> <!></div></div>");
function Sx(e, t) {
	R(t, !0);
	let n = Pb(hp), i = Pb(yp), a = Q(t, "entityType", 7), o = Q(t, "selectedTenant", 7), s = Q(t, "selectMultiple", 7, !1), c = Q(t, "onchangeTenant", 7), l = /* @__PURE__ */ H(null), u = /* @__PURE__ */ H(void 0), d = [], f = /* @__PURE__ */ H(J_({})), p = new Mi(), m = ox(a());
	m.pipe(uo(p)).subscribe((e) => {
		U(u, e.lastSelectedEntities, !0);
	});
	let h = ix.subscribe((e) => {
		d = e.selectedEntities, U(f, {}, !0);
		for (let e of d) Y(f)[e.Id] = !0;
	});
	async function g(e) {
		try {
			U(l, await n.getEntityById(r.Group, e), !0), (!m.value?.selectedGroup || m.value.selectedGroup.Id != Y(l).Id) && m.update((e) => ({
				...e,
				selectedGroup: Y(l)
			}));
		} catch (e) {
			console.log(e);
		}
	}
	async function _(e) {
		let t = await n.getEntityById(a(), e);
		s() ? Y(f)[e] ? d = d.filter((t) => t.Id !== e) : d.push(t) : d = [t], ix.update((e) => ({
			...e,
			selectedEntities: d
		}));
	}
	gv(() => {
		o() && o().Root && g(o().Root);
	}), Mb(() => {
		h.unsubscribe();
	});
	var v = {
		get entityType() {
			return a();
		},
		set entityType(e) {
			a(e), V();
		},
		get selectedTenant() {
			return o();
		},
		set selectedTenant(e) {
			o(e), V();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), V();
		},
		get onchangeTenant() {
			return c();
		},
		set onchangeTenant(e) {
			c(e), V();
		}
	}, y = xx(), b = W(y), x = W(b);
	gx(G(x), {
		size: "small",
		children: (e, t) => {
			vg(), Z(e, Dy("edit"));
		},
		$$slots: { default: !0 }
	}), L(b);
	var S = G(b, 2), ee = (e) => {
		var t = yx();
		px(W(t), {
			get group() {
				return Y(l);
			},
			expanded: !0,
			get entityType() {
				return a();
			}
		}), L(t), Z(e, t);
	};
	Gy(S, (e) => {
		Y(l) && e(ee);
	});
	var te = G(S, 2), ne = G(W(te), 2), re = (e) => {
		var t = Oy();
		Xy(rv(t), 17, () => Y(u), Ky, (e, t, n) => {
			var r = bx(), o = W(r), c = (e) => {
				vx(e, { get checked() {
					return Y(f)[Y(t)];
				} });
			};
			Gy(o, (e) => {
				s() && e(c);
			}), Wy(G(o, 2), () => i.resolveName(a(), Y(t)), null, (e, t) => {
				var n = Dy();
				K(() => Ny(n, Y(t))), Z(e, n);
			}), L(r), K(() => lb(r, 1, `flex w-full hover:bg-gray-200 cursor-pointer ${n < Y(u).length - 1 ? "border-b" : ""}`)), vy("click", r, () => _(Y(t))), Z(e, r);
		}), Z(e, t);
	};
	return Gy(ne, (e) => {
		Y(u) && Y(u).length > 0 && e(re);
	}), L(te), L(y), K(() => Ny(x, `${o()?.Name ?? ""} `)), vy("click", b, () => c()?.()), Z(e, y), z(v);
}
yy(["click"]), $(Sx, {
	entityType: {},
	selectedTenant: {},
	selectMultiple: {},
	onchangeTenant: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/Table.svelte
var Cx = /* @__PURE__ */ X("<div class=\"flex flex-col h-full\"><div class=\"w-full overflow-auto flex-1\"><!></div> <!></div>");
function wx(e, t) {
	R(t, !0);
	let n = Q(t, "startSort", 7, null), r = Q(t, "onsort", 7), i = Q(t, "children", 7), a = Q(t, "pagination", 7), o = t_(n());
	Hg("audako:table:sort", o), Mb(o.subscribe((e) => {
		r()?.(e);
	}));
	var s = {
		get startSort() {
			return n();
		},
		set startSort(e = null) {
			n(e), V();
		},
		get onsort() {
			return r();
		},
		set onsort(e) {
			r(e), V();
		},
		get children() {
			return i();
		},
		set children(e) {
			i(e), V();
		},
		get pagination() {
			return a();
		},
		set pagination(e) {
			a(e), V();
		}
	}, c = Cx(), l = W(c);
	return nb(W(l), () => i() ?? Nh), L(l), nb(G(l, 2), () => a() ?? Nh), L(c), Z(e, c), z(s);
}
$(wx, {
	startSort: {},
	onsort: {},
	children: {},
	pagination: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderRow.svelte
var Tx = /* @__PURE__ */ X("<div class=\"audako-tableheader-flexrow\"><!></div>"), Ex = {
	hash: "svelte-11mz2do",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tableheader-flexrow {display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700;}.audako-tableheader-flexrow > * {flex:1;height:100%;padding:4px 0;display:flex;align-items:center;}.audako-tableheader-flexrow > *:first-child {padding-left:12px !important;}.audako-tableheader-flexrow > *:last-child {padding-right:12px !important;}"
};
function Dx(e, t) {
	R(t, !0), rb(e, Ex);
	let n = Q(t, "children", 7);
	var r = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), V();
		}
	}, i = Tx();
	return nb(W(i), () => n() ?? Nh), L(i), Z(e, i), z(r);
}
$(Dx, { children: {} }, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderCell.svelte
var Ox = /* @__PURE__ */ X("<span class=\"material-symbols-rounded text-xs transition-all\">north</span>"), kx = /* @__PURE__ */ X("<div><div><!></div> <!></div>"), Ax = {
	hash: "svelte-2s5mms",
	code: ".header-cell.svelte-2s5mms {display:flex;width:100%;height:100%;align-items:center;}"
};
function jx(e, t) {
	R(t, !0), rb(e, Ax);
	let n = Q(t, "id", 7), r = Q(t, "sortable", 7, !1), i = Q(t, "container$class", 7, ""), a = Q(t, "children", 7), o = /* @__PURE__ */ H("asc"), s = Vg("audako:table:sort"), c = s.subscribe((e) => {
		U(o, n() && e?.active === n() ? e.direction : null, !0);
	});
	function l() {
		Y(o) === "asc" ? U(o, "desc") : Y(o) === "desc" ? U(o, null) : U(o, "asc"), s.set(Y(o) ? {
			active: n(),
			direction: Y(o)
		} : null);
	}
	Mb(c);
	var u = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), V();
		},
		get sortable() {
			return r();
		},
		set sortable(e = !1) {
			r(e), V();
		},
		get container$class() {
			return i();
		},
		set container$class(e = "") {
			i(e), V();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), V();
		}
	}, d = kx(), f = W(d);
	nb(W(f), () => a() ?? Nh), L(f);
	var p = G(f, 2), m = (e) => {
		var t = Ox();
		K(() => db(t, `${Y(o) == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);"}${Y(o) == null ? "opacity: 0;" : "opacity: 1;"}`)), Z(e, t);
	};
	return Gy(p, (e) => {
		r() && e(m);
	}), L(d), K(() => lb(d, 1, `header-cell ${r() ? "cursor-pointer" : ""} ${i() ?? ""}`, "svelte-2s5mms")), vy("click", d, () => l()), Z(e, d), z(u);
}
yy(["click"]), $(jx, {
	id: {},
	sortable: {},
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataRow.svelte
var Mx = /* @__PURE__ */ X("<div><!></div>"), Nx = {
	hash: "svelte-1f6rjo1",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tablebody-flexrow {display:flex;height:40px;width:100%;}.audako-tablebody-flexrow > * {flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px;}.audako-tablebody-flexrow > *:first-child {padding-left:12px;}.audako-tablebody-flexrow > *:last-child {padding-right:12px;}"
};
function Px(e, t) {
	R(t, !0), rb(e, Nx);
	let n = Q(t, "flexrow$class", 7, ""), r = Q(t, "onclick", 7), i = Q(t, "children", 7);
	var a = {
		get flexrow$class() {
			return n();
		},
		set flexrow$class(e = "") {
			n(e), V();
		},
		get onclick() {
			return r();
		},
		set onclick(e) {
			r(e), V();
		},
		get children() {
			return i();
		},
		set children(e) {
			i(e), V();
		}
	}, o = Mx();
	return nb(W(o), () => i() ?? Nh), L(o), K(() => lb(o, 1, `audako-tablebody-flexrow ${n() ?? ""}`)), vy("click", o, (e) => r()?.(e)), Z(e, o), z(a);
}
yy(["click"]), $(Px, {
	flexrow$class: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataCell.svelte
var Fx = /* @__PURE__ */ X("<div><!></div>");
function Ix(e, t) {
	R(t, !0);
	let n = Q(t, "container$class", 7, ""), r = Q(t, "children", 7);
	var i = {
		get container$class() {
			return n();
		},
		set container$class(e = "") {
			n(e), V();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), V();
		}
	}, a = Fx();
	return nb(W(a), () => r() ?? Nh), L(a), K(() => lb(a, 1, `border-t overflow-hidden ${n() ?? ""}`)), Z(e, a), z(i);
}
$(Ix, {
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region node_modules/uuid/dist/esm-browser/rng.js
var Lx, Rx = /* @__PURE__ */ new Uint8Array(16);
function zx() {
	if (!Lx && (Lx = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Lx)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Lx(Rx);
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/regex.js
var Bx = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
//#endregion
//#region node_modules/uuid/dist/esm-browser/validate.js
function Vx(e) {
	return typeof e == "string" && Bx.test(e);
}
for (var Hx = [], Ux = 0; Ux < 256; ++Ux) Hx.push((Ux + 256).toString(16).substr(1));
function Wx(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Hx[e[t + 0]] + Hx[e[t + 1]] + Hx[e[t + 2]] + Hx[e[t + 3]] + "-" + Hx[e[t + 4]] + Hx[e[t + 5]] + "-" + Hx[e[t + 6]] + Hx[e[t + 7]] + "-" + Hx[e[t + 8]] + Hx[e[t + 9]] + "-" + Hx[e[t + 10]] + Hx[e[t + 11]] + Hx[e[t + 12]] + Hx[e[t + 13]] + Hx[e[t + 14]] + Hx[e[t + 15]]).toLowerCase();
	if (!Vx(n)) throw TypeError("Stringified UUID is invalid");
	return n;
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/v4.js
function Gx(e, t, n) {
	e ||= {};
	var r = e.random || (e.rng || zx)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (var i = 0; i < 16; ++i) t[n + i] = r[i];
		return t;
	}
	return Wx(r);
}
//#endregion
//#region src/shared/services/popup.service.ts
var Kx = {
	backdrop: !0,
	positioning: "center",
	closeOnClickOutside: !0,
	closeOnEscape: !0,
	anchorElement: null,
	customPosition: {
		x: 0,
		y: 0
	}
}, qx = class {
	_popupContainer;
	rootElement;
	constructor(e) {
		this.rootElement = e, this._popupContainer = {};
	}
	openPopup(e, t, n) {
		n = {
			...Kx,
			...n
		}, console.log("openPopup", n);
		let r = Gx(), i = new Mi(), a = this._popupContainer[e] ?? this._createPopupContainer(e, n), o = this._createPopupWrapper(t, n);
		n.inTransitionClassList && (o.style.transition = `all ${n.inTransitionDuration ?? 100}ms`, o.classList.add(n.inTransitionClassList)), a.appendChild(o);
		let s = null, c = () => {
			console.log("close"), this._removePopupWrapper(o, n), i.next(null), i.complete(), document.removeEventListener("keydown", s);
		};
		return s = (e) => {
			console.log("closeOnEscapeRef", e), e.key === "Escape" && c();
		}, n.closeOnClickOutside && a.addEventListener("click", (e) => {
			e.target === a && c();
		}), n.closeOnEscape && document.addEventListener("keydown", s), this._positionPopup(a, o, n), t.style.visibility = "visible", n.inTransitionClassList && (t.classList.add(n.inTransitionClassList), t.style.transition = `all ${n.inTransitionDuration ?? 100}ms`), {
			popupId: r,
			afterClosed: Ea(i).then(() => console.log("afterClosed")),
			close: c
		};
	}
	_removePopupWrapper(e, t) {
		let n = e.parentElement, r = () => {
			e.remove(), n.children.length === 0 && this._removeContainer(n.id);
		};
		t.outTransitionClassList ? (e.style.transition = `all ${t.outTransitionDuration ?? 100}ms`, e.classList.remove(t.inTransitionClassList), e.classList.add(t.outTransitionClassList), setTimeout(() => {
			r();
		}, t.outTransitionDuration ?? 100)) : r();
	}
	_removeContainer(e) {
		document.getElementById(e).remove(), this._popupContainer[e] = void 0;
	}
	_createPopupContainer(e, t) {
		let n = Object.keys(this._popupContainer).length, r = document.createElement("div");
		return r.id = e, r.classList.add(`${e}`), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.overflowY = "hidden", r.style.overflowX = "hidden", r.style.zIndex = (1e3 + n).toString(), t.backdrop && (r.style.backgroundColor = "rgba(0,0,0,0.5)"), this.rootElement.appendChild(r), this._popupContainer[e] = r, r;
	}
	_createPopupWrapper(e, t) {
		let n = document.createElement("div");
		return n.classList.add("popup-wrapper"), n.style.position = "absolute", n.appendChild(e), n;
	}
	_positionPopup(e, t, n) {
		let r = t.style, i = e.getBoundingClientRect(), a = t.getBoundingClientRect();
		console.log("popupRect", a, t.style, n);
		let o = n.anchorElement?.getBoundingClientRect();
		r.position = "absolute", n.positioning === "center" ? (r.top = "50%", r.left = "50%", r.transform = "translate(-50%, -50%)") : n.positioning === "anchor" ? (t.style.top = `${this._getTopPosition(o.top, a.height, i.height, o.height, n.anchorVertical ?? "bottom") + (n.customPosition?.y ?? 0)}px`, t.style.left = `${this._getLeftPosition(o.left - 4, a.width, i.width, n.anchorHorizontal ?? "right") + (n.customPosition?.x ?? 0)}px`) : n.positioning === "custom" && (t.style.top = `${this._getTopPosition(n.customPosition.y, a.height, i.height) + (n.customPosition?.y ?? 0)}px`, t.style.left = `${this._getLeftPosition(n.customPosition.x, a.width, i.width) + (n.customPosition?.x ?? 0)}px`);
	}
	_getTopPosition(e, t, n, r = 0, i = "bottom") {
		return i == "top" ? e + t + 40 < n ? e + r / 3 : e - t + r / 3 : e - t > 40 ? e - t + r / 3 : e + r / 3;
	}
	_getLeftPosition(e, t, n, r = "right") {
		return console.log(arguments), r == "left" ? Math.min(e, n - t - 10) : e - t > 40 ? e - t : e + t;
	}
}, Jx = /* @__PURE__ */ X("<div class=\"popup-element-wrapper\" style=\"position: absolute\"><div style=\"display: none\"><!></div></div>");
function Yx(e, t) {
	R(t, !0);
	let n = Q(t, "closeOnClick", 7, !0), r = Q(t, "closeOnEscape", 7, !0), i = Q(t, "sizeToAnchor", 7, !1), a = Q(t, "anchorElement", 7, null), o = Q(t, "position", 7, null), s = Q(t, "popupClass", 7, ""), c = Q(t, "preferedVerticalAlignment", 7, "top"), l = Q(t, "preferedHorizontalAlignment", 7, "left"), u = Q(t, "positionOffset", 23, () => ({
		x: 0,
		y: 0
	})), d = Q(t, "children", 7), f = Pb("PopupContainerService", new qx(document.body)), p, m, h;
	function g() {
		let e = {
			backdrop: !1,
			closeOnClickOutside: n(),
			closeOnEscape: r(),
			positioning: a() ? "anchor" : "custom",
			anchorElement: a(),
			customPosition: i() ? u() : o(),
			anchorHorizontal: l(),
			anchorVertical: c()
		};
		document.body.appendChild(p), p.style.display = "block";
		let t = a()?.offsetWidth, s = p.offsetWidth;
		t && i() && s < t && (p.style.width = `${t}px`), p.style.position = "static", m = f.openPopup("popup-container", p, e), m.afterClosed.then(() => {
			v(), h.appendChild(p);
		});
	}
	function _() {
		m?.close();
	}
	function v() {
		p.style.display = "none", p.style.position = "absolute", p.style.width = "auto";
	}
	var y = {
		openPopup: g,
		closePopup: _,
		get closeOnClick() {
			return n();
		},
		set closeOnClick(e = !0) {
			n(e), V();
		},
		get closeOnEscape() {
			return r();
		},
		set closeOnEscape(e = !0) {
			r(e), V();
		},
		get sizeToAnchor() {
			return i();
		},
		set sizeToAnchor(e = !1) {
			i(e), V();
		},
		get anchorElement() {
			return a();
		},
		set anchorElement(e = null) {
			a(e), V();
		},
		get position() {
			return o();
		},
		set position(e = null) {
			o(e), V();
		},
		get popupClass() {
			return s();
		},
		set popupClass(e = "") {
			s(e), V();
		},
		get preferedVerticalAlignment() {
			return c();
		},
		set preferedVerticalAlignment(e = "top") {
			c(e), V();
		},
		get preferedHorizontalAlignment() {
			return l();
		},
		set preferedHorizontalAlignment(e = "left") {
			l(e), V();
		},
		get positionOffset() {
			return u();
		},
		set positionOffset(e = {
			x: 0,
			y: 0
		}) {
			u(e), V();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), V();
		}
	}, b = Jx(), x = W(b);
	return nb(W(x), () => d() ?? Nh), L(x), Tb(x, (e) => p = e, () => p), L(b), Tb(b, (e) => h = e, () => h), K(() => lb(x, 1, `absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${s() ?? ""}`)), Z(e, b), z(y);
}
$(Yx, {
	closeOnClick: {},
	closeOnEscape: {},
	sizeToAnchor: {},
	anchorElement: {},
	position: {},
	popupClass: {},
	preferedVerticalAlignment: {},
	preferedHorizontalAlignment: {},
	positionOffset: {},
	children: {}
}, [], ["openPopup", "closePopup"], { mode: "open" });
//#endregion
//#region src/shared/components/select/SelectOption.svelte
var Xx = /* @__PURE__ */ X("<div class=\"h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]\"></div>"), Zx = /* @__PURE__ */ X("<div class=\"p-1\"><!></div>"), Qx = /* @__PURE__ */ X("<div><!> <!> <span><!></span></div>"), $x = {
	hash: "svelte-hi49ko",
	code: ".hover-highlight.svelte-hi49ko:hover {background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important;}.highlighted.svelte-hi49ko {background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important;}"
};
function eS(e, t) {
	R(t, !0), rb(e, $x);
	let n = Q(t, "value", 7, null), r = Q(t, "children", 7), i = /* @__PURE__ */ H(!1), a = null, o = null, s, c, l = Vg("audako:select:multiple"), u = Vg("audako:select:close"), d = Vg("audako:select:value"), f = Vg("audako:select:value:changed"), p = Vg("audako:select:displayValue");
	jb(() => {
		c = s.innerText?.trim(), p.subscribe((e) => {
			o = e;
		}), d.subscribe((e) => {
			a = e, l ? U(i, e?.includes(n()), !0) : U(i, e === n()), h();
		});
	});
	function m(e) {
		e.preventDefault(), e.stopPropagation();
		let t = null;
		l ? t = Y(i) ? a.filter((e) => e !== n()) : Array.isArray(a) ? [...a, n()] : [n()] : (t = n(), u()), d.set(t), f.next(t);
	}
	function h() {
		if (l) {
			let e = o;
			Y(i) && !e.includes(c) ? p.set([...e, c]) : !Y(i) && e.includes(c) && p.set(e.filter((e) => e !== c));
		} else Y(i) && p.set(c);
	}
	var g = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), V();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), V();
		}
	}, _ = Qx(), v = W(_), y = (e) => {
		Z(e, Xx());
	};
	Gy(v, (e) => {
		Y(i) && !l && e(y);
	});
	var b = G(v, 2), x = (e) => {
		var t = Zx();
		vx(W(t), {
			readonly: !0,
			get checked() {
				return Y(i);
			}
		}), L(t), Z(e, t);
	};
	Gy(b, (e) => {
		l && e(x);
	});
	var S = G(b, 2);
	return nb(W(S), () => r() ?? Nh), L(S), Tb(S, (e) => s = e, () => s), L(_), K(() => lb(_, 1, `flex hover:(bg-[rgba(0,0,0,0.1)] shadow-md) items-center ${l ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${Y(i) && !l ? "bg-[rgba(0,0,0,0.1)] shadow-md" : ""}`, "svelte-hi49ko")), vy("click", _, m), Z(e, _), z(g);
}
yy(["click"]), $(eS, {
	value: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/select/Select.svelte
var tS = /* @__PURE__ */ X("<!> <!>", 1), nS = /* @__PURE__ */ X("<div><!> <input readonly=\"\"/> <div>arrow_drop_down</div></div> <!>", 1);
function rS(e, t) {
	R(t, !0);
	let n = Q(t, "value", 15, null), r = Q(t, "multiple", 7, !1), i = Q(t, "placeholder", 7, null), a = Q(t, "textfield$class", 7, ""), o = Q(t, "container$class", 7, ""), s = Q(t, "suffixIcon$class", 7, ""), c = Q(t, "options", 23, () => []), l = Q(t, "disabled", 7, !1), u = Q(t, "onvalueChanged", 7), d = Q(t, "children", 7), f = Q(t, "prefix", 7), p = /* @__PURE__ */ H(""), m = /* @__PURE__ */ H(null), h, g = t_(n()), _ = g.subscribe((e) => {
		n(e);
	}), v = new Mi(), y = v.subscribe((e) => {
		u()?.(e);
	}), b = t_(r() ? [] : ""), x = b.subscribe((e) => {
		ee(e);
	});
	function S(e) {
		e && (e.preventDefault(), e.stopPropagation()), !l() && h?.openPopup();
	}
	function ee(e) {
		if (e == null || e.length === 0) {
			U(p, null);
			return;
		}
		Array.isArray(e) ? U(p, e.join(", "), !0) : U(p, e, !0);
	}
	Hg("audako:select:multiple", r()), Hg("audako:select:value", g), Hg("audako:select:value:changed", v), Hg("audako:select:displayValue", b), Hg("audako:select:close", () => h.closePopup()), Mb(() => {
		_(), y.unsubscribe(), x();
	});
	var te = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), V();
		},
		get multiple() {
			return r();
		},
		set multiple(e = !1) {
			r(e), V();
		},
		get placeholder() {
			return i();
		},
		set placeholder(e = null) {
			i(e), V();
		},
		get textfield$class() {
			return a();
		},
		set textfield$class(e = "") {
			a(e), V();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), V();
		},
		get suffixIcon$class() {
			return s();
		},
		set suffixIcon$class(e = "") {
			s(e), V();
		},
		get options() {
			return c();
		},
		set options(e = []) {
			c(e), V();
		},
		get disabled() {
			return l();
		},
		set disabled(e = !1) {
			l(e), V();
		},
		get onvalueChanged() {
			return u();
		},
		set onvalueChanged(e) {
			u(e), V();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), V();
		},
		get prefix() {
			return f();
		},
		set prefix(e) {
			f(e), V();
		}
	}, ne = nS(), re = rv(ne), ie = W(re);
	nb(ie, () => f() ?? Nh);
	var ae = G(ie, 2);
	hb(ae), Tb(ae, (e) => U(m, e), () => Y(m));
	var oe = G(ae, 2);
	return L(re), Tb(Yx(G(re, 2), {
		sizeToAnchor: !0,
		popupClass: "max-h-[400px] ",
		get anchorElement() {
			return Y(m);
		},
		children: (e, t) => {
			var n = tS(), r = rv(n);
			nb(r, () => d() ?? Nh), Xy(G(r, 2), 17, c, Ky, (e, t) => {
				eS(e, {
					get value() {
						return Y(t).value;
					},
					children: (e, n) => {
						vg();
						var r = Dy();
						K(() => Ny(r, Y(t).label)), Z(e, r);
					},
					$$slots: { default: !0 }
				});
			}), Z(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => h = e, () => h), K(() => {
		lb(re, 1, `flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${o() ?? ""}`), ae.disabled = l(), _b(ae, "placeholder", i()), lb(ae, 1, `w-full outline-none cursor-pointer ${a() ?? ""}`), lb(oe, 1, `material-symbols-rounded pointer-events-none cursor-pointer text-md ${s() ?? ""} select-none`);
	}), vy("click", re, S), xb(ae, () => Y(p), (e) => U(p, e)), Z(e, ne), z(te);
}
yy(["click"]), $(rS, {
	value: {},
	multiple: {},
	placeholder: {},
	textfield$class: {},
	container$class: {},
	suffixIcon$class: {},
	options: {},
	disabled: {},
	onvalueChanged: {},
	children: {},
	prefix: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/Paginator.svelte
var iS = /* @__PURE__ */ X("<div class=\"flex w-full items-center justify-end pt-1\"><div class=\"mr-1 text-xs text-gray-600\">Items per page:</div> <div class=\"w-[50px]\"><!></div> <div class=\"ml-4 text-xs mr-1 text-gray-600\"> </div> <div class=\"text-xs mr-4 text-gray-600\"> </div> <!> <!> <!> <!></div>");
function aS(e, t) {
	R(t, !0);
	let n = Q(t, "pageIndex", 15, 0), r = Q(t, "pageSize", 15, 10), i = Q(t, "totalCount", 7), a = Q(t, "pageSizeOptions", 23, () => [
		10,
		20,
		50,
		100
	]), o = Q(t, "onchangePage", 7), s = /* @__PURE__ */ h_(() => Math.max(Math.ceil(i() / r()) - 1, 0));
	function c(e) {
		n(n() + e), f();
	}
	function l() {
		n(0), f();
	}
	function u() {
		n(Y(s)), f();
	}
	function d(e) {
		r(e), n(Math.min(n(), Y(s))), f();
	}
	function f() {
		o()?.({
			pageIndex: n(),
			pageSize: r()
		});
	}
	var p = {
		get pageIndex() {
			return n();
		},
		set pageIndex(e = 0) {
			n(e), V();
		},
		get pageSize() {
			return r();
		},
		set pageSize(e = 10) {
			r(e), V();
		},
		get totalCount() {
			return i();
		},
		set totalCount(e) {
			i(e), V();
		},
		get pageSizeOptions() {
			return a();
		},
		set pageSizeOptions(e = [
			10,
			20,
			50,
			100
		]) {
			a(e), V();
		},
		get onchangePage() {
			return o();
		},
		set onchangePage(e) {
			o(e), V();
		}
	}, m = iS(), h = G(W(m), 2);
	rS(W(h), {
		textfield$class: "text-xs text-gray-600",
		suffixIcon$class: "!top-[2px] !text-[20px]",
		onvalueChanged: (e) => d(e),
		get value() {
			return r();
		},
		set value(e) {
			r(e);
		},
		children: (e, t) => {
			var n = Oy();
			Xy(rv(n), 17, a, Ky, (e, t) => {
				eS(e, {
					get value() {
						return Y(t);
					},
					children: (e, n) => {
						vg();
						var r = Dy();
						K(() => Ny(r, Y(t))), Z(e, r);
					},
					$$slots: { default: !0 }
				});
			}), Z(e, n);
		},
		$$slots: { default: !0 }
	}), L(h);
	var g = G(h, 2), _ = iv(g), v = G(g, 2), y = iv(v), b = G(v, 2);
	{
		let e = /* @__PURE__ */ h_(() => n() === 0);
		gx(b, {
			get disabled() {
				return Y(e);
			},
			onclick: () => l(),
			children: (e, t) => {
				vg(), Z(e, Dy("first_page"));
			},
			$$slots: { default: !0 }
		});
	}
	var x = G(b, 2);
	{
		let e = /* @__PURE__ */ h_(() => n() === 0);
		gx(x, {
			get disabled() {
				return Y(e);
			},
			onclick: () => c(-1),
			children: (e, t) => {
				vg(), Z(e, Dy("navigate_before"));
			},
			$$slots: { default: !0 }
		});
	}
	var S = G(x, 2);
	{
		let e = /* @__PURE__ */ h_(() => n() === Y(s));
		gx(S, {
			get disabled() {
				return Y(e);
			},
			onclick: () => c(1),
			children: (e, t) => {
				vg(), Z(e, Dy("navigate_next"));
			},
			$$slots: { default: !0 }
		});
	}
	var ee = G(S, 2);
	{
		let e = /* @__PURE__ */ h_(() => n() === Y(s));
		gx(ee, {
			get disabled() {
				return Y(e);
			},
			onclick: () => u(),
			children: (e, t) => {
				vg(), Z(e, Dy("last_page"));
			},
			$$slots: { default: !0 }
		});
	}
	return L(m), K(() => {
		Ny(_, `${n() * r() + 1} - ${(n() + 1) * r()}`), Ny(y, `of ${i() ?? ""}`);
	}), Z(e, m), z(p);
}
$(aS, {
	pageIndex: {},
	pageSize: {},
	totalCount: {},
	pageSizeOptions: {},
	onchangePage: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectTable.svelte
var oS = /* @__PURE__ */ X("<!> <!> <!>", 1), sS = /* @__PURE__ */ X("<div class=\"w-full h-[3px] overflow-hidden bg-blue-200 svelte-yiphnc\"><div class=\"progress-bar-value-animation w-full h-full bg-blue-600 svelte-yiphnc\"></div></div>"), cS = /* @__PURE__ */ X("<div class=\"w-full h-[3px] svelte-yiphnc\"></div>"), lS = /* @__PURE__ */ X("<div class=\"text-sm overflow-hidden whitespace-nowrap text-ellipsis svelte-yiphnc\"> </div>"), uS = /* @__PURE__ */ X("<span class=\"text-sm overflow-hidden whitespace-nowrap text-ellipsis svelte-yiphnc\"><!></span>"), dS = /* @__PURE__ */ X("<div class=\"flex flex-col h-full overflow-hidden mt-[-10px] svelte-yiphnc\"><!></div>"), fS = {
	hash: "svelte-yiphnc",
	code: ".progress-bar-value-animation.svelte-yiphnc {\n  animation: svelte-yiphnc-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%;}\n\n@keyframes svelte-yiphnc-indeterminateAnimation {\n  0% {\n    transform:  translateX(0) scaleX(0);\n  }\n  40% {\n    transform:  translateX(0) scaleX(0.4);\n  }\n  100% {\n    transform:  translateX(100%) scaleX(0.5);\n  }\n}"
};
function pS(e, t) {
	R(t, !0), rb(e, fS);
	let n = Pb(hp), i = Pb(yp), a = Q(t, "entityType", 7), o = Q(t, "selectMultiple", 7, !1), s = Q(t, "additionalFilter", 7, null), c = /* @__PURE__ */ H(J_([])), l = new Mi(), u = [], d = /* @__PURE__ */ H(J_({})), f = /* @__PURE__ */ H("unchecked"), p, m, h, g = !1, _ = /* @__PURE__ */ H(0), v = /* @__PURE__ */ H(10), y = /* @__PURE__ */ H(0), b = ox(a()), x = ax, S = !1, ee = /* @__PURE__ */ H(!0), te = new Mi();
	ix.pipe(uo(te)).subscribe((e) => {
		u = e.selectedEntities, se(), ae();
	}), za([x.asObservable(), b.asObservable()]).pipe(uo(te)).subscribe(([e, t]) => {
		console.log("globalState", e), h = t.selectedGroup, m = t.selectedGroup?.Id, p = t.filter, g = e.queryWithSubGroups, S = !0, U(_, 0), U(v, e.pageSize ?? 10, !0), l.next();
	});
	function ne() {
		let e = { $and: [] };
		g ? e.$and.push({ Path: m }) : e.$and.push({ GroupId: m }), p && e.$and.push({ $or: [{ "Name.Value": {
			$regex: p,
			$options: "i"
		} }, { "Description.Value": {
			$regex: p,
			$options: "i"
		} }] }), s() && e.$and.push(s());
		let t = {
			limit: Y(v),
			skip: Y(_) * Y(v)
		};
		return Sa(n.queryConfiguration(a(), e, t));
	}
	function re(e) {
		o() ? (u.find((t) => t.Id === e.Id) ? (u = u.filter((t) => t.Id !== e.Id), Y(d)[e.Id] = !1) : (u.push(e), Y(d)[e.Id] = !0), ae()) : u = [e], ix.update((e) => ({
			...e,
			selectedEntities: u
		}));
	}
	function ie(e) {
		u = e ? [...u, ...Y(c).filter((e) => !Y(d)[e.Id])] : u.filter((e) => !Y(c).find((t) => t.Id === e.Id)), se(), ae(), ix.update((e) => ({
			...e,
			selectedEntities: u
		}));
	}
	function ae() {
		let e = Object.keys(Y(d)).filter((e) => Y(d)[e]);
		e.length === 0 ? U(f, "unchecked") : e.length === Y(c).length ? U(f, "checked") : U(f, "indeterminate");
	}
	function oe(e) {
		e.pageSize == Y(v) ? U(_, e.pageIndex, !0) : (U(_, 0), U(v, e.pageSize, !0));
	}
	function se() {
		U(d, {}, !0), Y(c).forEach((e) => {
			Y(d)[e.Id] = u.find((t) => t.Id === e.Id) != null;
		});
	}
	gv(() => {
		Y(_), l.next();
	}), gv(() => {
		x.update((e) => ({
			...e,
			pageSize: Y(v)
		}));
	}), Mb(() => {
		te.next(), te.complete();
	}), l.pipe(uo(te), Ja(() => S && !!m), ho(250), po(() => U(ee, !0)), lo(() => ne())).subscribe((e) => {
		U(ee, !1), U(c, e.data, !0), se(), ae(), a() === r.Group && Y(c).unshift(h), U(y, e.total, !0);
	});
	var ce = {
		get entityType() {
			return a();
		},
		set entityType(e) {
			a(e), V();
		},
		get selectMultiple() {
			return o();
		},
		set selectMultiple(e = !1) {
			o(e), V();
		},
		get additionalFilter() {
			return s();
		},
		set additionalFilter(e = null) {
			s(e), V();
		}
	}, C = dS();
	return wx(W(C), {
		pagination: (e) => {
			aS(e, {
				get pageIndex() {
					return Y(_);
				},
				get pageSize() {
					return Y(v);
				},
				get totalCount() {
					return Y(y);
				},
				onchangePage: oe
			});
		},
		children: (e, t) => {
			var n = oS(), a = rv(n);
			Dx(a, {
				children: (e, t) => {
					var n = oS(), r = rv(n), i = (e) => {
						jx(e, {
							container$class: "flex-[50px] flex-grow-0 cursor-default",
							id: "Name",
							children: (e, t) => {
								{
									let t = /* @__PURE__ */ h_(() => Y(f) === "checked"), n = /* @__PURE__ */ h_(() => Y(f) === "indeterminate");
									vx(e, {
										get checked() {
											return Y(t);
										},
										get indeterminate() {
											return Y(n);
										},
										onchange: (e) => ie(e)
									});
								}
							},
							$$slots: { default: !0 }
						});
					};
					Gy(r, (e) => {
						o() && e(i);
					});
					var a = G(r, 2);
					jx(a, {
						container$class: "flex-[2] cursor-default",
						id: "Name",
						children: (e, t) => {
							vg(), Z(e, Dy("Name"));
						},
						$$slots: { default: !0 }
					}), jx(G(a, 2), {
						container$class: "flex-1 curstor-default",
						id: "Name",
						children: (e, t) => {
							vg(), Z(e, Dy("Group"));
						},
						$$slots: { default: !0 }
					}), Z(e, n);
				},
				$$slots: { default: !0 }
			});
			var s = G(a, 2), l = (e) => {
				Z(e, sS());
			}, u = (e) => {
				Z(e, cS());
			};
			Gy(s, (e) => {
				Y(ee) ? e(l) : e(u, -1);
			}), Xy(G(s, 2), 17, () => Y(c), Ky, (e, t) => {
				Px(e, {
					flexrow$class: "cursor-pointer hover:bg-gray-100",
					onclick: () => re(Y(t)),
					children: (e, n) => {
						var a = oS(), s = rv(a), c = (e) => {
							Ix(e, {
								container$class: "flex-[50px] flex-grow-0",
								children: (e, n) => {
									vx(e, { get checked() {
										return Y(d)[Y(t).Id];
									} });
								},
								$$slots: { default: !0 }
							});
						};
						Gy(s, (e) => {
							o() && e(c);
						});
						var l = G(s, 2);
						Ix(l, {
							container$class: "flex-[2]",
							children: (e, n) => {
								var r = lS(), i = iv(r, !0);
								K(() => Ny(i, Y(t).Name?.Value)), Z(e, r);
							},
							$$slots: { default: !0 }
						}), Ix(G(l, 2), {
							container$class: "flex-1",
							children: (e, n) => {
								var a = uS();
								Wy(W(a), () => i.resolveName(r.Group, Y(t).GroupId), null, (e, t) => {
									var n = Dy();
									K(() => Ny(n, Y(t) ?? "")), Z(e, n);
								}), L(a), Z(e, a);
							},
							$$slots: { default: !0 }
						}), Z(e, a);
					},
					$$slots: { default: !0 }
				});
			}), Z(e, n);
		},
		$$slots: {
			pagination: !0,
			default: !0
		}
	}), L(C), Z(e, C), z(ce);
}
$(pS, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectFilter.svelte
var mS = /* @__PURE__ */ X("<div class=\"pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]\"> </div>"), hS = /* @__PURE__ */ X("<div class=\"mx-2 relative\"><!> <!></div>"), gS = /* @__PURE__ */ X("<div class=\"flex flex-col\"><div class=\"flex items-center\"><div class=\"flex items-center w-full focus-within:border-blue-300 border-gray-200 border-2 rounded-md p-2\"><span class=\"material-symbols-rounded mr-2\">search</span> <input placeholder=\"Search\" class=\"w-full outline-none\"/></div> <!></div> <div class=\"flex justify-end mt-2\"><!></div></div>");
function _S(e, t) {
	R(t, !0);
	let n = Q(t, "entityType", 7), r = Q(t, "selectMultiple", 7, !1), i = Q(t, "onacceptSelection", 7), a = ox(n()), o = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(J_(a.value.filter)), c, l = new Mi(), u = new Mi(), d = /* @__PURE__ */ H(J_([]));
	ax.pipe(uo(l)).subscribe((e) => {
		U(o, e.queryWithSubGroups, !0);
	}), u.pipe(uo(l), Qa(200)).subscribe((e) => {
		a.update((t) => ({
			...t,
			filter: e
		}));
	}), ix.pipe(uo(l)).subscribe((e) => {
		U(d, e.selectedEntities, !0);
	}), gv(() => {
		u.next(Y(s));
	}), gv(() => {
		f(Y(o));
	});
	function f(e) {
		e != ax.value.queryWithSubGroups && ax.update((t) => ({
			...t,
			queryWithSubGroups: e
		}));
	}
	jb(() => {
		p();
	});
	function p() {
		c && setTimeout(() => {
			c.focus(), c.select();
		}, 0);
	}
	Mb(() => {
		l.next(), l.complete();
	});
	var m = {
		get entityType() {
			return n();
		},
		set entityType(e) {
			n(e), V();
		},
		get selectMultiple() {
			return r();
		},
		set selectMultiple(e = !1) {
			r(e), V();
		},
		get onacceptSelection() {
			return i();
		},
		set onacceptSelection(e) {
			i(e), V();
		}
	}, h = gS(), g = W(h), _ = W(g), v = G(W(_), 2);
	hb(v), Tb(v, (e) => c = e, () => c), L(_);
	var y = G(_, 2), b = (e) => {
		var t = hS(), n = W(t);
		gx(n, {
			onclick: () => i()?.(),
			icon: "done_all"
		});
		var r = G(n, 2), a = (e) => {
			var t = mS(), n = iv(t, !0);
			K(() => Ny(n, Y(d).length)), Z(e, t);
		};
		Gy(r, (e) => {
			Y(d).length > 0 && e(a);
		}), L(t), Z(e, t);
	};
	Gy(y, (e) => {
		r() && e(b);
	}), L(g);
	var x = G(g, 2);
	return vx(W(x), {
		label: "Mit Untergruppen",
		get checked() {
			return Y(o);
		},
		set checked(e) {
			U(o, e, !0);
		}
	}), L(x), L(h), xb(v, () => Y(s), (e) => U(s, e)), Z(e, h), z(m);
}
$(_S, {
	entityType: {},
	selectMultiple: {},
	onacceptSelection: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/tenant-select/TenantSelect.svelte
var vS = /* @__PURE__ */ X("<div class=\"cursor-pointer hover:bg-slate-100 p-1\"> </div>"), yS = /* @__PURE__ */ X("<div><!></div>"), bS = /* @__PURE__ */ X("<div class=\"flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer\"><div class=\"mt-2 ml-2\"> </div> <!></div>"), xS = /* @__PURE__ */ X("<div class=\"w-full overflow-hidden flex flex-col\"><div class=\"flex items-center\"><!> <div class=\"font-bold text-gray-600 text-lg\">Mandant auswählen</div></div> <div class=\"flex mb-1\"></div> <div style=\"grid-auto-rows: 60px\" class=\"grid grid-cols-2 gap-2 flex-1 overflow-auto\"></div></div>");
function SS(e, t) {
	R(t, !0);
	let n = Pb(_p), r = Q(t, "allowBack", 7, !1), i = Q(t, "ontenantSelected", 7), a = Q(t, "onback", 7), o = /* @__PURE__ */ H(J_([])), s = /* @__PURE__ */ H(J_([]));
	async function c() {
		let e = await n.getTopTenants();
		if (e.length === 1) {
			let t = e[0];
			if (t.Root == null) {
				u(t);
				return;
			}
		}
		U(o, [new wr({
			Id: "start",
			Name: "Start"
		})], !0), U(s, e, !0);
	}
	async function l(e) {
		let t = await n.getNextTenants(e.Id);
		U(s, t, !0);
	}
	async function u(e) {
		U(o, [...Y(o), e], !0), l(e);
	}
	async function d(e) {
		if (e.Id == "start") {
			c();
			return;
		}
		let t = Y(o).findIndex((t) => t.Id === e.Id);
		U(o, Y(o).slice(0, t + 1), !0), l(e);
	}
	function f(e, t) {
		e.stopPropagation(), i()?.(t);
	}
	c();
	var p = {
		get allowBack() {
			return r();
		},
		set allowBack(e = !1) {
			r(e), V();
		},
		get ontenantSelected() {
			return i();
		},
		set ontenantSelected(e) {
			i(e), V();
		},
		get onback() {
			return a();
		},
		set onback(e) {
			a(e), V();
		}
	}, m = xS(), h = W(m), g = W(h), _ = (e) => {
		gx(e, {
			size: "small",
			onclick: () => a()?.(),
			children: (e, t) => {
				vg(), Z(e, Dy("arrow_back"));
			},
			$$slots: { default: !0 }
		});
	};
	Gy(g, (e) => {
		r() && e(_);
	}), vg(2), L(h);
	var v = G(h, 2);
	Xy(v, 21, () => Y(o), Ky, (e, t, n) => {
		var r = vS(), i = iv(r);
		K(() => Ny(i, `${Y(t).Name ?? ""}${n == Y(o).length - 1 ? "" : " /"}`)), vy("click", r, () => d(Y(t))), Z(e, r);
	}), L(v);
	var y = G(v, 2);
	return Xy(y, 21, () => Y(s), Ky, (e, t) => {
		var n = bS(), r = W(n), i = iv(r, !0), a = G(r, 2), o = (e) => {
			var n = yS();
			gx(W(n), {
				onclick: (e) => f(e, Y(t)),
				children: (e, t) => {
					vg(), Z(e, Dy("done"));
				},
				$$slots: { default: !0 }
			}), L(n), Z(e, n);
		};
		Gy(a, (e) => {
			Y(t).Root && e(o);
		}), L(n), K(() => Ny(i, Y(t)?.Name)), vy("click", n, () => u(Y(t))), Z(e, n);
	}), L(y), L(m), Z(e, m), z(p);
}
yy(["click"]), $(SS, {
	allowBack: {},
	ontenantSelected: {},
	onback: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelect.svelte
var CS = /* @__PURE__ */ X("<div class=\"flex-1 border-r border-slate-400 overflow-hidden\"><!></div> <div class=\"flex-[2] pl-4 pt-1 h-full overflow-hidden\"><div class=\"flex flex-col h-full overflow-hidden\"><!> <div class=\"flex-1 overflow-hidden mt-3\"><!></div></div></div>", 1), wS = /* @__PURE__ */ X("<div class=\"flex w-full h-full\"><!></div>");
function TS(e, t) {
	R(t, !0);
	let n = Q(t, "entityType", 23, () => r.Signal), i = Q(t, "selectMultiple", 7, !1), a = Q(t, "additionalFilter", 7, null), o = Q(t, "onselectedEntities", 7), s = Pb(hp), c = Pb(_p), l = /* @__PURE__ */ H(void 0), u = /* @__PURE__ */ H(!1), d = [], f = ax.subscribe((e) => {
		e.selectedTenant ? (U(u, !1), h(e.selectedTenant)) : U(u, !0);
	}), p = ix.subscribe((e) => {
		e.selectedEntities && !i() ? (m(e.selectedEntities), o()?.(e.selectedEntities[0])) : d = e.selectedEntities;
	});
	function m(e) {
		let t = ox(n()), r = t.value.lastSelectedEntities, i = e.filter((e) => !r.includes(e.Id)).map((e) => e.Id);
		r.unshift(...i), r.splice(5), t.update((e) => ({
			...e,
			lastSelectedEntities: r
		}));
	}
	async function h(e) {
		try {
			U(l, await c.getTenantViewById(e), !0);
		} catch (e) {
			console.error(e), U(u, !0);
		}
	}
	async function g(e) {
		let t = await s.getEntityById(r.Group, e.Root);
		ax.update((t) => ({
			...t,
			selectedTenant: e.Id
		})), ox(n()).update((e) => ({
			...e,
			selectedGroup: t
		}));
	}
	function _() {
		U(u, !0);
	}
	function v() {
		m(d), o()?.(d);
	}
	Mb(() => {
		f.unsubscribe(), p.unsubscribe();
	});
	var y = {
		get entityType() {
			return n();
		},
		set entityType(e = r.Signal) {
			n(e), V();
		},
		get selectMultiple() {
			return i();
		},
		set selectMultiple(e = !1) {
			i(e), V();
		},
		get additionalFilter() {
			return a();
		},
		set additionalFilter(e = null) {
			a(e), V();
		},
		get onselectedEntities() {
			return o();
		},
		set onselectedEntities(e) {
			o(e), V();
		}
	}, b = wS(), x = W(b), S = (e) => {
		{
			let t = /* @__PURE__ */ h_(() => !!Y(l));
			SS(e, {
				get allowBack() {
					return Y(t);
				},
				onback: () => U(u, !1),
				ontenantSelected: (e) => g(e)
			});
		}
	}, ee = (e) => {
		var t = CS(), r = rv(t);
		Sx(W(r), {
			get selectMultiple() {
				return i();
			},
			get entityType() {
				return n();
			},
			get selectedTenant() {
				return Y(l);
			},
			onchangeTenant: () => _()
		}), L(r);
		var o = G(r, 2), s = W(o), c = W(s);
		_S(c, {
			get entityType() {
				return n();
			},
			get selectMultiple() {
				return i();
			},
			onacceptSelection: () => v()
		});
		var u = G(c, 2);
		pS(W(u), {
			get selectMultiple() {
				return i();
			},
			get entityType() {
				return n();
			},
			get additionalFilter() {
				return a();
			}
		}), L(u), L(s), L(o), Z(e, t);
	};
	return Gy(x, (e) => {
		Y(u) ? e(S) : e(ee, -1);
	}), L(b), Z(e, b), z(y);
}
$(TS, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectDialog.svelte
var ES = /* @__PURE__ */ X("<div class=\"bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw] flex 2xl:w-[50vw] py-2 px-4\"><div class=\"h-full w-full\"><!></div></div>");
function DS(e, t) {
	R(t, !0);
	let n = Q(t, "open", 15, !1), i = Q(t, "entityType", 23, () => r.Signal), a = Q(t, "selectMultiple", 7, !1), o = Q(t, "additionalFilter", 7, null), s = Q(t, "onselectedEntities", 7), c = Pb("PopupService", new qx(document.body)), l = /* @__PURE__ */ H(void 0), u;
	gv(() => {
		f(n(), Y(l));
	});
	function d(e) {
		n(e);
	}
	function f(e, t) {
		e && !u && t ? (u = c.openPopup("entity-select-dialog", t, {
			backdrop: !0,
			closeOnClickOutside: !0,
			positioning: "center",
			inTransitionClassList: "scale-100",
			inTransitionDuration: 125,
			outTransitionClassList: "!scale-50",
			outTransitionDuration: 125
		}), u.afterClosed.then(() => {
			u = null;
		})) : p();
	}
	function p() {
		u?.close();
	}
	function m(e) {
		e.key === "Escape" && p();
	}
	var h = {
		setOpen: d,
		get open() {
			return n();
		},
		set open(e = !1) {
			n(e), V();
		},
		get entityType() {
			return i();
		},
		set entityType(e = r.Signal) {
			i(e), V();
		},
		get selectMultiple() {
			return a();
		},
		set selectMultiple(e = !1) {
			a(e), V();
		},
		get additionalFilter() {
			return o();
		},
		set additionalFilter(e = null) {
			o(e), V();
		},
		get onselectedEntities() {
			return s();
		},
		set onselectedEntities(e) {
			s(e), V();
		}
	}, g = ES(), _ = W(g);
	return TS(W(_), {
		get selectMultiple() {
			return a();
		},
		get entityType() {
			return i();
		},
		get additionalFilter() {
			return o();
		},
		onselectedEntities: (e) => s()?.(e)
	}), L(_), L(g), Tb(g, (e) => U(l, e), () => Y(l)), vy("keydown", g, m), vy("click", g, (e) => e.stopPropagation()), Z(e, g), z(h);
}
yy(["keydown", "click"]), $(DS, {
	open: {},
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {}
}, [], ["setOpen"], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-dialog.service.ts
var OS = class {
	constructor() {}
	selectEntity(e, t = null) {
		return this._openEntitySelectDialog(e, !1, t).then((e) => e.length === 1 ? e[0] : null);
	}
	selectMultipleEntities(e, t = null) {
		return this._openEntitySelectDialog(e, !0, t);
	}
	_openEntitySelectDialog(e, t, n) {
		return new Promise((r) => {
			let i = Py(DS, {
				target: document.body,
				props: {
					entityType: e,
					open: !1,
					selectMultiple: t,
					additionalFilter: n,
					onselectedEntities: (e) => {
						i.setOpen(!1), setTimeout(() => {
							zy(i);
						}, 200), r(e);
					}
				}
			});
			setTimeout(() => {
				i.setOpen(!0);
			}, 50);
		});
	}
}, kS = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-600:oklch(54.6% .245 262.881);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:#1d4ed8;--color-on-primary:#fff;--color-surface:#fff;--color-surface-border:#ccc}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,:after,:before,::backdrop{border-color:var(--color-gray-200,currentColor)}::file-selector-button{border-color:var(--color-gray-200,currentColor)}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.\\!top-\\[-150px\\]{top:-150px!important}.\\!top-\\[2px\\]{top:2px!important}.top-0{top:0}.top-1{top:var(--spacing)}.top-\\[50\\%\\]{top:50%}.right-2{right:calc(var(--spacing) * 2)}.right-\\[-5px\\]{right:-5px}.left-0{left:0}.isolate{isolation:isolate}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.float-left{float:left}.float-right{float:right}.\\!container{width:100%!important}@media (width>=40rem){.\\!container{max-width:40rem!important}}@media (width>=48rem){.\\!container{max-width:48rem!important}}@media (width>=64rem){.\\!container{max-width:64rem!important}}@media (width>=80rem){.\\!container{max-width:80rem!important}}@media (width>=96rem){.\\!container{max-width:96rem!important}}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mx-2{margin-inline:calc(var(--spacing) * 2)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-\\[-10px\\]{margin-top:-10px}.mr-1{margin-right:var(--spacing)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-4{margin-right:calc(var(--spacing) * 4)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-4{margin-left:calc(var(--spacing) * 4)}.\\!hidden{display:none!important}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.list-item{display:list-item}.table{display:table}.table-row{display:table-row}.h-\\[3px\\]{height:3px}.h-\\[4px\\]{height:4px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.h-\\[70vh\\]{height:70vh}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.w-\\[4px\\]{width:4px}.w-\\[18px\\]{width:18px}.w-\\[20px\\]{width:20px}.w-\\[50px\\]{width:50px}.w-\\[80vw\\]{width:80vw}.w-full{width:100%}.\\!max-w-\\[400px\\]{max-width:400px!important}.flex-1{flex:1}.flex-\\[2\\]{flex:2}.flex-\\[50px\\]{flex:50px}.flex-shrink,.shrink{flex-shrink:1}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.\\!scale-50{--tw-scale-x:50%!important;--tw-scale-y:50%!important;--tw-scale-z:50%!important;scale:var(--tw-scale-x) var(--tw-scale-y)!important}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform\\!{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)!important}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing) * 2)}.self-center{align-self:center}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:2147483647px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-none{--tw-border-style:none;border-style:none}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-500{border-color:var(--color-gray-500)}.border-slate-400{border-color:var(--color-slate-400)}.border-surface-border{border-color:var(--color-surface-border)}.border-transparent{border-color:#0000}.\\!bg-slate-300{background-color:var(--color-slate-300)!important}.bg-\\[rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{background-color:#0000001a}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-500{background-color:var(--color-green-500)}.bg-primary{background-color:var(--color-primary)}.bg-red-500{background-color:var(--color-red-500)}.bg-slate-200{background-color:var(--color-slate-200)}.bg-surface{background-color:var(--color-surface)}.bg-white{background-color:var(--color-white)}.p-1{padding:var(--spacing)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-\\[10px\\]{padding:10px}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-\\[5px\\]{padding-inline:5px}.py-2{padding-block:calc(var(--spacing) * 2)}.py-\\[1px\\]{padding-block:1px}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-4{padding-left:calc(var(--spacing) * 4)}.text-center{text-align:center}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\!text-\\[20px\\]{font-size:20px!important}.text-\\[20px\\]{font-size:20px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-wrap{text-wrap:wrap}.break-normal{overflow-wrap:normal;word-break:normal}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-on-primary{color:var(--color-on-primary)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0px 1.2px 3.6px var(--tw-shadow-color,#0000001c), 0px 6.4px 14.4px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0px .6px 1.8px var(--tw-shadow-color,#0000001a), 0px 3.2px 7.2px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0px .3px .9px var(--tw-shadow-color,#0000001a), 0px 1.6px 3.6px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter\\!{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-all{-webkit-user-select:all;user-select:all}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:border-gray-300:is(:where(.group):hover *){border-color:var(--color-gray-300)}}.focus-within\\:border-blue-300:focus-within{border-color:var(--color-blue-300)}.focus-within\\:border-primary:focus-within{border-color:var(--color-primary)}@media (hover:hover){.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:bg-slate-300:hover{background-color:var(--color-slate-300)}}@media (width>=48rem){.md\\:w-\\[80vw\\]{width:80vw}}@media (width>=64rem){.lg\\:w-\\[60vw\\]{width:60vw}}@media (width>=96rem){.\\32 xl\\:w-\\[50vw\\]{width:50vw}}}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v34/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2)format(\"woff2\")}.material-symbols-rounded{font-variation-settings:\"FILL\" 1, \"wght\" 400, \"GRAD\" 100, \"opsz\" 48;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;font-family:Material Symbols Rounded;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}", AS = null;
function jS() {
	return typeof CSSStyleSheet > "u" || !("replaceSync" in CSSStyleSheet.prototype) ? null : (AS || (AS = new CSSStyleSheet(), AS.replaceSync(kS)), AS);
}
function MS(e) {
	if (!e) return;
	let t = jS();
	if (t) {
		e.adoptedStyleSheets.includes(t) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]);
		return;
	}
	if (!e.querySelector("style[data-audako-styles]")) {
		let t = document.createElement("style");
		t.setAttribute("data-audako-styles", ""), t.textContent = kS, e.prepend(t);
	}
}
function NS(e) {
	return class extends e {
		connectedCallback() {
			MS(this.shadowRoot), super.connectedCallback?.();
		}
	};
}
//#endregion
//#region src/components/entity-select/AudakoEntitySelect.svelte
var PS = /* @__PURE__ */ X("<div class=\"w-full h-full overflow-hidden\"><!></div>");
function FS(e, t) {
	R(t, !0);
	let n = Q(t, "entityType", 7, void 0), i = Q(t, "multiple", 7, !1), a = Q(t, "filter", 7, void 0);
	Fb(qx, new qx(document.body));
	let o = /* @__PURE__ */ h_(() => Object.values(r).includes(n()));
	function s(e) {
		t.$$host.dispatchEvent(new CustomEvent("selected", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	var c = {
		get entityType() {
			return n();
		},
		set entityType(e = void 0) {
			n(e), V();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), V();
		},
		get filter() {
			return a();
		},
		set filter(e = void 0) {
			a(e), V();
		}
	}, l = PS(), u = W(l), d = (e) => {
		{
			let t = /* @__PURE__ */ h_(() => a() ?? {});
			TS(e, {
				get entityType() {
					return n();
				},
				get selectMultiple() {
					return i();
				},
				get additionalFilter() {
					return Y(t);
				},
				onselectedEntities: s
			});
		}
	};
	return Gy(u, (e) => {
		Y(o) && e(d);
	}), L(l), Z(e, l), z(c);
}
$(FS, {
	entityType: {
		attribute: "entitytype",
		type: "String"
	},
	multiple: {
		attribute: "multiple",
		type: "Boolean"
	},
	filter: {
		attribute: "filter",
		type: "Object"
	}
}, [], [], { mode: "open" }, NS);
//#endregion
//#region src/components/select/AudakoSelect.svelte
function IS(e, t) {
	R(t, !0);
	let n = Q(t, "value", 7, void 0), r = Q(t, "arrayvalue", 23, () => []), i = Q(t, "multiple", 7, !1), a = Q(t, "options", 23, () => []), o = Q(t, "placeholder", 7, void 0), s = Q(t, "containerClass", 7, ""), c = Q(t, "textfieldClass", 7, ""), l = Q(t, "suffixClass", 7, "");
	function u(e) {
		t.$$host.dispatchEvent(new CustomEvent("valuechanged", { detail: e }));
	}
	var d = {
		get value() {
			return n();
		},
		set value(e = void 0) {
			n(e), V();
		},
		get arrayvalue() {
			return r();
		},
		set arrayvalue(e = []) {
			r(e), V();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), V();
		},
		get options() {
			return a();
		},
		set options(e = []) {
			a(e), V();
		},
		get placeholder() {
			return o();
		},
		set placeholder(e = void 0) {
			o(e), V();
		},
		get containerClass() {
			return s();
		},
		set containerClass(e = "") {
			s(e), V();
		},
		get textfieldClass() {
			return c();
		},
		set textfieldClass(e = "") {
			c(e), V();
		},
		get suffixClass() {
			return l();
		},
		set suffixClass(e = "") {
			l(e), V();
		}
	};
	{
		let t = /* @__PURE__ */ h_(() => i() ? r() : n());
		rS(e, {
			get value() {
				return Y(t);
			},
			get multiple() {
				return i();
			},
			get options() {
				return a();
			},
			get placeholder() {
				return o();
			},
			get container$class() {
				return s();
			},
			get textfield$class() {
				return c();
			},
			get suffixIcon$class() {
				return l();
			},
			onvalueChanged: u
		});
	}
	return z(d);
}
$(IS, {
	value: {
		attribute: "value",
		type: "String"
	},
	arrayvalue: {
		attribute: "arrayvalue",
		type: "Array"
	},
	multiple: {
		attribute: "multiple",
		type: "Boolean"
	},
	options: {
		attribute: "options",
		type: "Array"
	},
	placeholder: {
		attribute: "placeholder",
		type: "String"
	},
	containerClass: {
		attribute: "container$class",
		type: "String"
	},
	textfieldClass: {
		attribute: "textfield$class",
		type: "String"
	},
	suffixClass: {
		attribute: "suffix$class",
		type: "String"
	}
}, [], [], { mode: "open" }, NS);
//#endregion
//#region src/components/tenant-select/AudakoTenantSelect.svelte
function LS(e, t) {
	R(t, !0);
	let n = Q(t, "allowBack", 7, !1);
	function r(e, n) {
		t.$$host.dispatchEvent(new CustomEvent(e, {
			detail: n,
			bubbles: !0,
			composed: !0
		}));
	}
	return SS(e, {
		get allowBack() {
			return n();
		},
		ontenantSelected: (e) => r("tenantselected", { tenant: e }),
		onback: () => r("back", null)
	}), z({
		get allowBack() {
			return n();
		},
		set allowBack(e = !1) {
			n(e), V();
		}
	});
}
$(LS, { allowBack: {
	attribute: "allowback",
	type: "Boolean"
} }, [], [], { mode: "open" }, NS);
//#endregion
//#region src/shared/components/menu/MenuItemComponent.svelte
var RS = /* @__PURE__ */ X("<div class=\"mr-2 flex item-center\"><span class=\"material-symbols-rounded z-[1] select-none flex items-center svelte-rq91mb\"><!></span></div>"), zS = /* @__PURE__ */ X("<div class=\"hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md svelte-rq91mb\"><!> <div class=\"flex-grow\"> </div></div>"), BS = {
	hash: "svelte-rq91mb",
	code: ".hover-highlight.svelte-rq91mb:hover {background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important;}.material-symbols-rounded.svelte-rq91mb {font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;}"
};
function VS(e, t) {
	R(t, !0), rb(e, BS);
	let n = Q(t, "icon", 7, null), r = Q(t, "label", 7, null), i = Q(t, "onclick", 7), a = Q(t, "children", 7);
	var o = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), V();
		},
		get label() {
			return r();
		},
		set label(e = null) {
			r(e), V();
		},
		get onclick() {
			return i();
		},
		set onclick(e) {
			i(e), V();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), V();
		}
	}, s = zS(), c = W(s), l = (e) => {
		var t = RS(), r = W(t), i = W(r), o = (e) => {
			var t = Oy();
			nb(rv(t), a), Z(e, t);
		}, s = (e) => {
			var t = Dy();
			K(() => Ny(t, n())), Z(e, t);
		};
		Gy(i, (e) => {
			a() ? e(o) : e(s, -1);
		}), L(r), L(t), Z(e, t);
	};
	Gy(c, (e) => {
		n() && e(l);
	});
	var u = iv(G(c, 2), !0);
	return L(s), K(() => Ny(u, r())), vy("click", s, (e) => i()?.(e)), Z(e, s), z(o);
}
yy(["click"]), $(VS, {
	icon: {},
	label: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/menu/Menu.svelte
var HS = /* @__PURE__ */ X("<div></div>");
function US(e, t) {
	R(t, !0);
	let n = Q(t, "anchorSelector", 7), r = Q(t, "preferedVerticalAlignment", 7, "top"), i = Q(t, "preferedHorizontalAlignment", 7, "left"), a = Q(t, "positionOffset", 23, () => ({
		x: 0,
		y: 10
	})), o = Q(t, "container$class", 7, ""), s = Q(t, "closeOnClick", 7, !0), c = Q(t, "items", 23, () => []), l = /* @__PURE__ */ h_(() => n() ? document.querySelector(n()) : null), u;
	function d() {
		u.openPopup();
	}
	function f() {
		u.closePopup();
	}
	var p = {
		openMenu: d,
		closeMenu: f,
		get anchorSelector() {
			return n();
		},
		set anchorSelector(e) {
			n(e), V();
		},
		get preferedVerticalAlignment() {
			return r();
		},
		set preferedVerticalAlignment(e = "top") {
			r(e), V();
		},
		get preferedHorizontalAlignment() {
			return i();
		},
		set preferedHorizontalAlignment(e = "left") {
			i(e), V();
		},
		get positionOffset() {
			return a();
		},
		set positionOffset(e = {
			x: 0,
			y: 10
		}) {
			a(e), V();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), V();
		},
		get closeOnClick() {
			return s();
		},
		set closeOnClick(e = !0) {
			s(e), V();
		},
		get items() {
			return c();
		},
		set items(e = []) {
			c(e), V();
		}
	};
	return Tb(Yx(e, {
		get closeOnClick() {
			return s();
		},
		get anchorElement() {
			return Y(l);
		},
		get preferedHorizontalAlignment() {
			return i();
		},
		get preferedVerticalAlignment() {
			return r();
		},
		get position() {
			return a();
		},
		children: (e, t) => {
			var n = HS();
			Xy(n, 21, c, Ky, (e, t) => {
				VS(e, {
					get label() {
						return Y(t).label;
					},
					get icon() {
						return Y(t).icon;
					},
					onclick: (e) => Y(t).action(e)
				});
			}), L(n), K(() => lb(n, 1, `bg-white rounded shadow-lg ${o() ?? ""}`)), Z(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => u = e, () => u), z(p);
}
$(US, {
	anchorSelector: {},
	preferedVerticalAlignment: {},
	preferedHorizontalAlignment: {},
	positionOffset: {},
	container$class: {},
	closeOnClick: {},
	items: {}
}, [], ["openMenu", "closeMenu"], { mode: "open" });
//#endregion
//#region src/components/menu/AudakoMenu.svelte
function WS(e, t) {
	R(t, !0);
	let n = Q(t, "items", 23, () => []), r = Q(t, "closeOnClick", 7, !0), i = Q(t, "containerClass", 7, ""), a = Q(t, "anchorSelector", 7, ""), o = /* @__PURE__ */ H(void 0);
	return gv(() => {
		let e = t.$$host;
		e.openMenu = () => Y(o)?.openMenu(), e.closeMenu = () => Y(o)?.closeMenu();
	}), Tb(US(e, {
		get items() {
			return n();
		},
		get closeOnClick() {
			return r();
		},
		get anchorSelector() {
			return a();
		},
		get container$class() {
			return i();
		}
	}), (e) => U(o, e, !0), () => Y(o)), z({
		get items() {
			return n();
		},
		set items(e = []) {
			n(e), V();
		},
		get closeOnClick() {
			return r();
		},
		set closeOnClick(e = !0) {
			r(e), V();
		},
		get containerClass() {
			return i();
		},
		set containerClass(e = "") {
			i(e), V();
		},
		get anchorSelector() {
			return a();
		},
		set anchorSelector(e = "") {
			a(e), V();
		}
	});
}
$(WS, {
	items: {
		attribute: "items",
		type: "Array"
	},
	closeOnClick: {
		attribute: "closeonclick",
		type: "Boolean"
	},
	containerClass: {
		attribute: "container$class",
		type: "String"
	},
	anchorSelector: {
		attribute: "anchorselector",
		type: "String"
	}
}, [], []);
//#endregion
//#region src/main.ts
function GS(e) {
	return e.element;
}
var KS = GS(FS), qS = GS(LS), JS = GS(IS), YS = GS(WS);
function XS() {
	QS("audako-entity-select", KS), QS("audako-tenant-select", qS), QS("audako-select", JS), QS("audako-menu", YS);
}
function ZS(e, t) {
	let n = new hp(e, t);
	Fb(Fm, new Fm(e, t)), Fb(hp, n), Fb(_p, new _p(e, t)), Fb(yp, new yp(n)), Fb(Cp, new Cp(e, t)), Fb(OS, new OS()), Fb(Vm, new Vm(e, t)), Fb(xp, new xp(e, t));
}
function QS(e, t, n) {
	customElements.get(e) || customElements.define(e, t, n);
}
//#endregion
export { Ws as AcquisitionInterval, Gs as AcquisitionUnit, Yc as AlarmPlanningCheckerConfig, Jc as AlarmPlanningCheckerConfigVersion, qc as AlarmPlanningConfig, Kc as AlarmPlanningConfigVersion, Zc as AlarmTimerConfig, Xc as AlarmTimerConfigVersion, le as AlarmTrigger, ur as AlarmingPlan, Lc as AudakoWidgetImageConfig, Ic as AudakoWidgetImageConfigVersion, Eo as AxisOptions, lc as Badge, pp as BaseHttpService, O as BaseWidgetConfig, Ut as BatchAction, Yt as BatchDefinition, Zt as BatchReleaseSettings, tn as BatchReportExportSettings, rn as BatchReviewDefinition, nn as BatchReviewSettings, Cr as BatchTrigger, Qt as BatchValueObject, ft as BitSelectConversionTypes, Xs as CURRENCY_CODES, Hn as Camera, Wn as CameraImage, Un as CameraImageType, Vn as CameraViewMode, Ce as ChangeRateMonitoringSettings, g as CheckboxFieldSettings, Po as ClockType, To as ColumnSeriesOptions, Er as CompressionInterval, kt as CompressionType, kt as FormulaCompressionType, $t as ConditionEventEntry, w as ConditionSettings, xr as ConditionTrigger, u as ConfigurationEntity, ge as ConnectionFailureConditionSettings, Ft as Connector, Vt as ConnectorObject, Bt as ConnectorObjectAccessLevel, zt as ConnectorObjectType, Rt as ConnectorRestApiCredential, Lt as ConnectorRestApiSettings, Pt as ConnectorType, It as ConnectorTypedSettings, he as CounterConditionSettings, zm as CounterOffset, ys as CrossTabMode, f as CustomFieldSettings, x as CustomMappingFieldSettings, _r as CyclicTrigger, mc as DEFAULT_MAP_ANALYSIS_DISPLAY_OPTIONS, re as Dashboard, ie as DashboardTab, oe as DashboardTabEntity, ae as DashboardTabPlaceholder, Pe as DataConnection, We as DataConnectionBacnetSettings, Tp as DataConnectionBrowserService, st as DataConnectionCsvImporterSettings, Ye as DataConnectionEhWebserverSettings, _e as DataConnectionFailureConditionSettings, ct as DataConnectionFtpParserSettings, Ue as DataConnectionIEC104Settings, Je as DataConnectionIot2000ModuleSettings, qe as DataConnectionKnxSettings, ot as DataConnectionLoRaWANSettings, tt as DataConnectionMeterBusSettings, He as DataConnectionModbusSettings, Ze as DataConnectionModemInfoSettings, Qe as DataConnectionMqttSettings, nt as DataConnectionMtmAdapterSettings, it as DataConnectionOTTDataLoggerSettings, $e as DataConnectionOneWireSettings, Re as DataConnectionOpcUaSecurityAuthentication, Le as DataConnectionOpcUaSecurityMode, Ie as DataConnectionOpcUaSecurityPolicy, Ve as DataConnectionOpcUaSettings, ze as DataConnectionOpcUaStringEncoding, Be as DataConnectionOpcUaTimestampSource, Fe as DataConnectionS7Settings, T as DataConnectionSettings, T as DataConnectionTypedSettings, Ge as DataConnectionSimulationSettings, Xe as DataConnectionSnmpSettings, Ne as DataConnectionSpecialDeviceProfile, at as DataConnectionTeltonikaGPSSettings, Me as DataConnectionType, Ke as DataConnectionUniversalSettings, rt as DataConnectionYDOCDataLoggerSettings, Ae as DataSource, Cp as DataSourceHttpService, ke as DataSourceType, _ as DateFieldSettings, De as DifferenceMonitoringSettings, Ln as Document, tr as EmailContact, gl as EnteredAlarmingIntervalType, kc as EntityAction, y as EntityFieldSettings, a as EntityHttpEndpoints, hp as EntityHttpService, i as EntityIcons, yp as EntityNameService, s as EntityObjectOrientationAttribute, KS as EntitySelect, OS as EntitySelectDialogService, r as EntityType, kr as EntityTypeClassMapping, jr as EntityUtils, xc as EntryListViewType, yn as EventAction, dc as EventBadge, ue as EventCategory, C as EventCategoryClass, de as EventCondition, fe as EventConditionSettingsType, se as EventDefinition, Kt as EventEntityType, vn as EventReport, _n as EventReportSettings, yr as EventTrigger, Gt as EventTriggerState, ce as ExpressionParameter, c as Field, o as FieldObjectOrientationAttribute, Bn as FileEntry, wt as Formula, Dt as FormulaIntervalSettings, Tt as FormulaNumericSettings, jt as FormulaType, Mt as FormulaValueType, Et as FormulaVariable, Wo as GaugeRange, Ho as GaugeValueObjectType, Qn as Gender, qo as GetGaugeInvertByKey, Ko as GetGaugeRotationByKey, Go as GetRangeKey, S as Group, Do as GuidelineOptions, js as HeatMapCategoryAxisOptions, Ns as HeatMapChartConfig, Ms as HeatMapColumnSeriesOptions, Lm as HistoricalValue, Um as HistoricalValueManipulationHttpService, Bm as HistoricalValueObject, Or as HistoricalValueOperationStatus, Vm as HistoricalValueService, Vc as IframeLoadingMethods, bo as IntervalSettings, nc as LeafletLatLng, wo as LineSeriesOptions, Nm as LiveHubEvent, Mm as LiveHubMethod, ic as LiveRequestType, Fm as LiveValueService, bn as MailEventAction, vc as MaintEntryState, dr as MaintenanceService, fc as MapAnalysesConfigVersion, pc as MapAnalysisValueDisplayType, rc as MapConfig, tc as MapConfigVersion, cc as MapGroup, sc as MapMarkerConfig, ac as MapRequestTypes, be as MaximumMonitoringSettings, Dr as MeasurementValueSource, YS as Menu, en as MetadataField, qt as MetadataFieldType, Jt as MetadataSource, et as MeterBusMode, ye as MinimumMonitoringSettings, p as NumberFieldSettings, Ac as ObjectOperations, Oe as ObjectSettings, Ar as ObjectUtils, yo as ObservationPeriodUnits, Rm as OffsetSource, jm as OperationStatus, ee as PartList, xe as PeriodMaximumMonitoringSettings, Se as PeriodMaximumMonitoringSettingsPeriod, je as PermaLiveModeSettings, Bc as PermissionsPolicyAllowList, nr as PhoneBasedContact, ks as PieChartConfig, we as PlausibilityMonitoringSettings, oc as PopupSignalConfig, Te as PositionMonitoringSettings, Ht as ProcessImage, te as PropertyGroup, sr as PushoverContact, $n as Recipient, er as RecipientContact, cr as RecipientGroup, lr as RecipientGroupMember, Qc as RecipientType, Ee as RecordingFailureMonitoringSettings, vt as RecordingSpecialProcessingType, yt as RecordingType, fn as Report, hn as ReportCaptionElement, un as ReportColumnType, Sn as ReportElement, Cn as ReportElementSettings, an as ReportEngineType, kn as ReportField, An as ReportFieldSettings, Tn as ReportGroup, En as ReportGroupSettings, gn as ReportItemElement, ln as ReportItemElementType, Dn as ReportList, On as ReportListSettings, pn as ReportObject, wn as ReportParameterDefinition, dn as ReportParameterType, In as ReportSettings, cn as ReportStorageType, jn as ReportTable, Nn as ReportTableElement, Pn as ReportTableEntry, Fn as ReportTableHeader, Mn as ReportTableSettings, sn as ReportTemplate, on as ReportTimeStepSize, mn as ReportTypedElement, pl as RequestIntervalType, Zn as Role, mr as RuntimeScript, Is as SankeyChartWidgetFormAggregationTypes, Sr as ScriptBatchTriggerState, br as ScriptConditionTriggerState, vr as ScriptEventTriggerState, gr as ScriptTrigger, JS as Select, v as SelectFieldSettings, d as SelectFieldType, jc as SelectableEntitiesTranslation, Ys as SelectionType, So as SeriesOptions, xo as SeriesType, Sc as ServiceFilterType, cs as SetPointStatus, ut as Signal, ht as SignalAnalogSettings, uc as SignalBadge, St as SignalCompressionSettings, E as SignalCompressionType, me as SignalConditionSettings, pe as SignalConditionSettingsOperator, gt as SignalCounterSettings, mt as SignalDigitalSettings, $o as SignalListGroup, dt as SignalOutputSettings, bt as SignalRecordingSettings, pt as SignalSettings, lt as SignalType, _t as SignalTypeSettingsMap, os as SliderEntry, rr as SmsContact, hr as StaticScriptVariable, pr as StepDefinition, Co as StepLineSeriesOptions, Rn as Storage, zn as StorageEntry, xn as StorageEventAction, Pm as SubscriptionPrefix, qn as SwitchOperation, Kn as SwitchRule, Gn as SwitchSchedule, Jn as SwitchType, Nt as TagScope, fr as TaskDefinition, or as TeamsContact, ar as TelegramContact, ne as TemplateVariable, _p as TenantHttpService, qS as TenantSelect, wr as TenantView, h as TextAreaFieldSettings, m as TextFieldSettings, vo as TimeManagementSettings, Bs as TimeStepSize, ve as TimebasedConditionSettings, Ks as TimelineOptions, ws as TrafficLightColorTranslations, Cs as TrafficLightModeTranslations, Ss as TrafficLightModes, bs as TrafficLights, l as TranslatableField, Xt as TriggerDefinition, Wt as TriggerType, Xn as User, b as UserFieldSettings, Tr as UserProfile, xp as UserProfileHttpService, Yn as UserRegistrationStates, Oo as ValueAxisOptions, _o as ValueEntityType, Ot as ValueIntervalType, At as VariableType, ir as VoipContact, Nc as WidgetAuditLogListConfig, Oc as WidgetAuditLogListFilterType, Mc as WidgetAuditLogListVersion, Ro as WidgetBasicXyChartConfig, Lo as WidgetBasicXyChartConfigVersion, ec as WidgetBatchArchiveConfig, $s as WidgetBatchArchiveConfigVersion, Js as WidgetBillingConfig, qs as WidgetBillingConfigVersion, _c as WidgetCameraConfig, gc as WidgetCameraConfigVersion, No as WidgetClockConfig, Mo as WidgetClockConfigVersion, ms as WidgetCounterManagementConfig, ps as WidgetCounterManagementConfigVersion, Bo as WidgetDataImportConfig, zo as WidgetDataImportConfigVersion, Zo as WidgetDigitalSwitchConfig, Xo as WidgetDigitalSwitchConfigVersion, Gc as WidgetDocumentsArchiveConfig, Wc as WidgetDocumentsArchiveConfigVersion, hl as WidgetEnteredAlarmingConfig, ml as WidgetEnteredAlarmingConfigVersion, fl as WidgetEnteredEventConfig, dl as WidgetEnteredEventConfigVersion, ol as WidgetEventListConfig, al as WidgetEventListConfigVersion, rl as WidgetEventListFilterType, il as WidgetEventListFilterTypeTranslation, cl as WidgetEventTestConfig, sl as WidgetEventTestConfigVersion, Uo as WidgetGaugeChartConfig, Vo as WidgetGaugeChartConfigVersion, Ps as WidgetHeatMapChartConfig, As as WidgetHeatMapChartConfigVersion, Uc as WidgetIframeConfig, Hc as WidgetIframeVersion, Yo as WidgetLiquidFillGaugeConfig, Jo as WidgetLiquidFillGaugeConfigVersion, Es as WidgetLiveChartConfig, Ts as WidgetLiveChartConfigVersion, gs as WidgetLiveModeConfig, hs as WidgetLiveModeConfigVersion, bc as WidgetMaintenanceEntryListConfig, yc as WidgetMaintenanceEntryListConfigVersion, Us as WidgetManualDataConfig, Hs as WidgetManualDataConfigVersion, Dc as WidgetManualMaintenanceConfig, Ec as WidgetManualMaintenanceConfigVersion, hc as WidgetMapAnalysesConfig, ul as WidgetMonitoringOverviewConfig, ll as WidgetMonitoringOverviewConfigVersion, Tc as WidgetMyTasksConfig, Fc as WidgetNotesConfig, Pc as WidgetNotesConfigVersion, zc as WidgetPdfViewerConfig, Rc as WidgetPdfViewerConfigVersion, Os as WidgetPieChartConfig, Ds as WidgetPieChartConfigVersion, vs as WidgetProcessImageConfig, _s as WidgetProcessImageConfigVersion, nl as WidgetRecipientGroupConfig, tl as WidgetRecipientGroupConfigVersion, el as WidgetRecipientsConfig, $c as WidgetRecipientsConfigVersion, zs as WidgetReportConfig, Rs as WidgetReportConfigVersion, fs as WidgetResettableCounterConfig, ds as WidgetResettableCounterConfigVersion, Ls as WidgetSankeyChartConfig, Fs as WidgetSankeyChartConfigVersion, us as WidgetSetpointTableConfig, ls as WidgetSetpointTableConfigVersion, es as WidgetSignalListMixedConfig, Qo as WidgetSignalListMixedConfigVersion, jo as WidgetSingleSignalConfig, Ao as WidgetSingleSignalConfigVersion, ss as WidgetSliderConfig, as as WidgetSliderConfigVersion, Qs as WidgetStartStopBatchConfig, Zs as WidgetStartStopBatchConfigVersion, is as WidgetSwitchOperationListConfig, rs as WidgetSwitchOperationListConfigVersion, Io as WidgetTextConfig, Fo as WidgetTextConfigVersion, ns as WidgetTimeScheduleConfig, ts as WidgetTimeScheduleConfigVersion, xs as WidgetTrafficLightConfig, wc as WidgetTypePlateConfig, Cc as WidgetTypePlateConfigVersion, ko as XYChartConfig, go as getAsyncValueAsPromise, Ct as getDefaultCompressionSettingsBySignalType, xt as getDefaultRecordingSettingsBySignalType, Fr as isNullOrEmpty, Pr as isNullOrUndefined, Ir as isNullOrWhitespace, ZS as registerCoreServices, XS as registerCustomElements, Pb as resolveService, Ib as setGlobalDependencyContainer, Nr as tryCatch, Fb as tryRegisterService, Vs as widgetReport_Name };
