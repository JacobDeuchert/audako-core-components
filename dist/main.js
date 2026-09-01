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
}, ee = class {}, C = class {}, te = class {}, ne = class extends u {}, re = class extends u {
	constructor() {
		super(), this.DashboardId = new c(), this.Content = new c(), this.MasterTabId = new c(), this.EntityMappings = new c(), this.PlaceholderDefinition = new c(), this.PlaceholderValues = new c();
	}
}, ie = class {}, ae = class {}, oe = class extends u {
	constructor() {
		super(), this.Enabled = new c(!0), this.EventCategoryId = new c(), this.ExpressionParameters = [], this.EventExpression = new c();
	}
}, se = class {
	constructor() {
		this.Type = new c(), this.ParameterId = new c(), this.ConditionId = new c();
	}
}, ce;
(function(e) {
	e.CriticalAlarm = "CriticalAlarm", e.MajorAlarm = "MajorAlarm", e.MinorAlarm = "MinorAlarm", e.WarningAlarm = "WarningAlarm", e.InformationalAlarm = "InformationalAlarm", e.IndeterminateAlarm = "IndeterminateAlarm", e.Info = "Info", e.Warning = "Warning", e.Error = "Error";
})(ce ||= {});
var le;
(function(e) {
	e[e.OnRaised = 1] = "OnRaised", e[e.OnDropped = 2] = "OnDropped";
})(le ||= {});
var ue = class extends u {
	constructor() {
		super(), this.Class = new c(ce.Info), this.RequiresAcknowledgment = new c(!0), this.NoRepeatUntilAcknowledged = new c(!1), this.AlarmOn = new c(le.OnRaised);
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
	[r.Dashboard]: ne,
	[r.DashboardTab]: re,
	[r.DataConnection]: Pe,
	[r.DataSource]: Ae,
	[r.Connector]: Ft,
	[r.EventCategory]: ue,
	[r.EventCondition]: de,
	[r.EventDefinition]: oe,
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
function qr(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function Jr(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = (/* @__PURE__ */ Error()).stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var Yr = Jr(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function Xr(e, t) {
	if (e) {
		var n = e.indexOf(t);
		0 <= n && e.splice(n, 1);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
var Zr = function() {
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
			if (qr(c)) try {
				c();
			} catch (e) {
				i = e instanceof Yr ? e.errors : [e];
			}
			var l = this._finalizers;
			if (l) {
				this._finalizers = null;
				try {
					for (var u = Vr(l), d = u.next(); !d.done; d = u.next()) {
						var f = d.value;
						try {
							ei(f);
						} catch (e) {
							i ??= [], e instanceof Yr ? i = Ur(Ur([], Hr(i)), Hr(e.errors)) : i.push(e);
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
			if (i) throw new Yr(i);
		}
	}, e.prototype.add = function(t) {
		if (t && t !== this) {
			if (this.closed) ei(t);
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
		t === e ? this._parentage = null : Array.isArray(t) && Xr(t, e);
	}, e.prototype.remove = function(t) {
		var n = this._finalizers;
		n && Xr(n, t), t instanceof e && t._removeParent(this);
	}, e.EMPTY = (function() {
		var t = new e();
		return t.closed = !0, t;
	})(), e;
}(), Qr = Zr.EMPTY;
function $r(e) {
	return e instanceof Zr || e && "closed" in e && qr(e.remove) && qr(e.add) && qr(e.unsubscribe);
}
function ei(e) {
	qr(e) ? e() : e.unsubscribe();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/config.js
var ti = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: !1,
	useDeprecatedNextContext: !1
}, ni = {
	setTimeout: function(e, t) {
		var n = [...arguments].slice(2), r = ni.delegate;
		return r?.setTimeout ? r.setTimeout.apply(r, Ur([e, t], Hr(n))) : setTimeout.apply(void 0, Ur([e, t], Hr(n)));
	},
	clearTimeout: function(e) {
		return (ni.delegate?.clearTimeout || clearTimeout)(e);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function ri(e) {
	ni.setTimeout(function() {
		var t = ti.onUnhandledError;
		if (t) t(e);
		else throw e;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
function ii() {}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var ai = (function() {
	return ci("C", void 0, void 0);
})();
function oi(e) {
	return ci("E", void 0, e);
}
function si(e) {
	return ci("N", e, void 0);
}
function ci(e, t, n) {
	return {
		kind: e,
		value: t,
		error: n
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var li = null;
function ui(e) {
	if (ti.useDeprecatedSynchronousErrorHandling) {
		var t = !li;
		if (t && (li = {
			errorThrown: !1,
			error: null
		}), e(), t) {
			var n = li, r = n.errorThrown, i = n.error;
			if (li = null, r) throw i;
		}
	} else e();
}
function di(e) {
	ti.useDeprecatedSynchronousErrorHandling && li && (li.errorThrown = !0, li.error = e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
var fi = function(e) {
	Rr(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.isStopped = !1, t ? (n.destination = t, $r(t) && t.add(n)) : n.destination = bi, n;
	}
	return t.create = function(e, t, n) {
		return new gi(e, t, n);
	}, t.prototype.next = function(e) {
		this.isStopped ? yi(si(e), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? yi(oi(e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? yi(ai, this) : (this.isStopped = !0, this._complete());
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
}(Zr), pi = Function.prototype.bind;
function mi(e, t) {
	return pi.call(e, t);
}
var hi = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			_i(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			_i(e);
		}
		else _i(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			_i(e);
		}
	}, e;
}(), gi = function(e) {
	Rr(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this, a;
		if (qr(t) || !t) a = {
			next: t ?? void 0,
			error: n ?? void 0,
			complete: r ?? void 0
		};
		else {
			var o;
			i && ti.useDeprecatedNextContext ? (o = Object.create(t), o.unsubscribe = function() {
				return i.unsubscribe();
			}, a = {
				next: t.next && mi(t.next, o),
				error: t.error && mi(t.error, o),
				complete: t.complete && mi(t.complete, o)
			}) : a = t;
		}
		return i.destination = new hi(a), i;
	}
	return t;
}(fi);
function _i(e) {
	ti.useDeprecatedSynchronousErrorHandling ? di(e) : ri(e);
}
function vi(e) {
	throw e;
}
function yi(e, t) {
	var n = ti.onStoppedNotification;
	n && ni.setTimeout(function() {
		return n(e, t);
	});
}
var bi = {
	closed: !0,
	next: ii,
	error: vi,
	complete: ii
}, xi = (function() {
	return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
function Si(e) {
	return e;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
function Ci(e) {
	return e.length === 0 ? Si : e.length === 1 ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Observable.js
var wi = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var n = new e();
		return n.source = this, n.operator = t, n;
	}, e.prototype.subscribe = function(e, t, n) {
		var r = this, i = Di(e) ? e : new gi(e, t, n);
		return ui(function() {
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
		return t = Ti(t), new t(function(t, r) {
			var i = new gi({
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
	}, e.prototype[xi] = function() {
		return this;
	}, e.prototype.pipe = function() {
		return Ci([...arguments])(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return e = Ti(e), new e(function(e, n) {
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
function Ti(e) {
	return e ?? ti.Promise ?? Promise;
}
function Ei(e) {
	return e && qr(e.next) && qr(e.error) && qr(e.complete);
}
function Di(e) {
	return e && e instanceof fi || Ei(e) && $r(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
function Oi(e) {
	return qr(e?.lift);
}
function ki(e) {
	return function(t) {
		if (Oi(t)) return t.lift(function(t) {
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
function Ai(e, t, n, r, i) {
	return new ji(e, t, n, r, i);
}
var ji = function(e) {
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
}(fi), Mi = Jr(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), Ni = function(e) {
	Rr(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return t.prototype.lift = function(e) {
		var t = new Pi(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new Mi();
	}, t.prototype.next = function(e) {
		var t = this;
		ui(function() {
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
		ui(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var n = t.observers; n.length;) n.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		ui(function() {
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
		return r || i ? Qr : (this.currentObservers = null, a.push(e), new Zr(function() {
			t.currentObservers = null, Xr(a, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this, n = t.hasError, r = t.thrownError, i = t.isStopped;
		n ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new wi();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new Pi(e, t);
	}, t;
}(wi), Pi = function(e) {
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
		return this.source?.subscribe(e) ?? Qr;
	}, t;
}(Ni), Fi = function(e) {
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
}(Ni), Ii = {
	now: function() {
		return (Ii.delegate || Date).now();
	},
	delegate: void 0
}, Li = function(e) {
	Rr(t, e);
	function t(t, n, r) {
		t === void 0 && (t = Infinity), n === void 0 && (n = Infinity), r === void 0 && (r = Ii);
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
}(Ni), Ri = function(e) {
	Rr(t, e);
	function t(t, n) {
		return e.call(this) || this;
	}
	return t.prototype.schedule = function(e, t) {
		return t === void 0 && (t = 0), this;
	}, t;
}(Zr), zi = {
	setInterval: function(e, t) {
		var n = [...arguments].slice(2), r = zi.delegate;
		return r?.setInterval ? r.setInterval.apply(r, Ur([e, t], Hr(n))) : setInterval.apply(void 0, Ur([e, t], Hr(n)));
	},
	clearInterval: function(e) {
		return (zi.delegate?.clearInterval || clearInterval)(e);
	},
	delegate: void 0
}, Bi = function(e) {
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
		return n === void 0 && (n = 0), zi.setInterval(e.flush.bind(e, this), n);
	}, t.prototype.recycleAsyncId = function(e, t, n) {
		if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1) return t;
		t != null && zi.clearInterval(t);
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
			this.work = this.state = this.scheduler = null, this.pending = !1, Xr(i, this), n != null && (this.id = this.recycleAsyncId(r, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(Ri), Vi = function() {
	function e(t, n) {
		n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
	}
	return e.prototype.schedule = function(e, t, n) {
		return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t);
	}, e.now = Ii.now, e;
}(), Hi = new (function(e) {
	Rr(t, e);
	function t(t, n) {
		n === void 0 && (n = Vi.now);
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
}(Vi))(Bi), Ui = Hi, Wi = new wi(function(e) {
	return e.complete();
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function Gi(e) {
	return e && qr(e.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function Ki(e) {
	return e[e.length - 1];
}
function qi(e) {
	return qr(Ki(e)) ? e.pop() : void 0;
}
function Ji(e) {
	return Gi(Ki(e)) ? e.pop() : void 0;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var Yi = (function(e) {
	return e && typeof e.length == "number" && typeof e != "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function Xi(e) {
	return qr(e?.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function Zi(e) {
	return qr(e[xi]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function Qi(e) {
	return Symbol.asyncIterator && qr(e?.[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function $i(e) {
	return /* @__PURE__ */ TypeError("You provided " + (typeof e == "object" && e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function ea() {
	return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ta = ea();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function na(e) {
	return qr(e?.[ta]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function ra(e) {
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
function ia(e) {
	return qr(e?.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function aa(e) {
	if (e instanceof wi) return e;
	if (e != null) {
		if (Zi(e)) return oa(e);
		if (Yi(e)) return sa(e);
		if (Xi(e)) return ca(e);
		if (Qi(e)) return ua(e);
		if (na(e)) return la(e);
		if (ia(e)) return da(e);
	}
	throw $i(e);
}
function oa(e) {
	return new wi(function(t) {
		var n = e[xi]();
		if (qr(n.subscribe)) return n.subscribe(t);
		throw TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function sa(e) {
	return new wi(function(t) {
		for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
		t.complete();
	});
}
function ca(e) {
	return new wi(function(t) {
		e.then(function(e) {
			t.closed || (t.next(e), t.complete());
		}, function(e) {
			return t.error(e);
		}).then(null, ri);
	});
}
function la(e) {
	return new wi(function(t) {
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
function ua(e) {
	return new wi(function(t) {
		fa(e, t).catch(function(e) {
			return t.error(e);
		});
	});
}
function da(e) {
	return ua(ra(e));
}
function fa(e, t) {
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
function pa(e, t, n, r, i) {
	r === void 0 && (r = 0), i === void 0 && (i = !1);
	var a = t.schedule(function() {
		n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
	}, r);
	if (e.add(a), !i) return a;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function ma(e, t) {
	return t === void 0 && (t = 0), ki(function(n, r) {
		n.subscribe(Ai(r, function(n) {
			return pa(r, e, function() {
				return r.next(n);
			}, t);
		}, function() {
			return pa(r, e, function() {
				return r.complete();
			}, t);
		}, function(n) {
			return pa(r, e, function() {
				return r.error(n);
			}, t);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function ha(e, t) {
	return t === void 0 && (t = 0), ki(function(n, r) {
		r.add(e.schedule(function() {
			return n.subscribe(r);
		}, t));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function ga(e, t) {
	return aa(e).pipe(ha(t), ma(t));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function _a(e, t) {
	return aa(e).pipe(ha(t), ma(t));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function va(e, t) {
	return new wi(function(n) {
		var r = 0;
		return t.schedule(function() {
			r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function ya(e, t) {
	return new wi(function(n) {
		var r;
		return pa(n, t, function() {
			r = e[ta](), pa(n, t, function() {
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
			return qr(r?.return) && r.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function ba(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new wi(function(n) {
		pa(n, t, function() {
			var r = e[Symbol.asyncIterator]();
			pa(n, t, function() {
				r.next().then(function(e) {
					e.done ? n.complete() : n.next(e.value);
				});
			}, 0, !0);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function xa(e, t) {
	return ba(ra(e), t);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function Sa(e, t) {
	if (e != null) {
		if (Zi(e)) return ga(e, t);
		if (Yi(e)) return va(e, t);
		if (Xi(e)) return _a(e, t);
		if (Qi(e)) return ba(e, t);
		if (na(e)) return ya(e, t);
		if (ia(e)) return xa(e, t);
	}
	throw $i(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function Ca(e, t) {
	return t ? Sa(e, t) : aa(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
function wa() {
	var e = [...arguments];
	return Ca(e, Ji(e));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function Ta(e) {
	return !!e && (e instanceof wi || qr(e.lift) && qr(e.subscribe));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var Ea = Jr(function(e) {
	return function() {
		e(this), this.name = "EmptyError", this.message = "no elements in sequence";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function Da(e, t) {
	var n = typeof t == "object";
	return new Promise(function(r, i) {
		var a = new gi({
			next: function(e) {
				r(e), a.unsubscribe();
			},
			error: i,
			complete: function() {
				n ? r(t.defaultValue) : i(new Ea());
			}
		});
		e.subscribe(a);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
function Oa(e) {
	return e instanceof Date && !isNaN(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/map.js
function ka(e, t) {
	return ki(function(n, r) {
		var i = 0;
		n.subscribe(Ai(r, function(n) {
			r.next(e.call(t, n, i++));
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var Aa = Array.isArray;
function ja(e, t) {
	return Aa(t) ? e.apply(void 0, Ur([], Hr(t))) : e(t);
}
function Ma(e) {
	return ka(function(t) {
		return ja(e, t);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var Na = Array.isArray, Pa = Object.getPrototypeOf, Fa = Object.prototype, Ia = Object.keys;
function La(e) {
	if (e.length === 1) {
		var t = e[0];
		if (Na(t)) return {
			args: t,
			keys: null
		};
		if (Ra(t)) {
			var n = Ia(t);
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
function Ra(e) {
	return e && typeof e == "object" && Pa(e) === Fa;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createObject.js
function za(e, t) {
	return e.reduce(function(e, n, r) {
		return e[n] = t[r], e;
	}, {});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function Ba() {
	var e = [...arguments], t = Ji(e), n = qi(e), r = La(e), i = r.args, a = r.keys;
	if (i.length === 0) return Ca([], t);
	var o = new wi(Va(i, t, a ? function(e) {
		return za(a, e);
	} : Si));
	return n ? o.pipe(Ma(n)) : o;
}
function Va(e, t, n) {
	return n === void 0 && (n = Si), function(r) {
		Ha(t, function() {
			for (var i = e.length, a = Array(i), o = i, s = i, c = function(i) {
				Ha(t, function() {
					var c = Ca(e[i], t), l = !1;
					c.subscribe(Ai(r, function(e) {
						a[i] = e, l || (l = !0, s--), s || r.next(n(a.slice()));
					}, function() {
						--o || r.complete();
					}));
				}, r);
			}, l = 0; l < i; l++) c(l);
		}, r);
	};
}
function Ha(e, t, n) {
	e ? pa(n, e, t) : t();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function Ua(e, t, n, r, i, a, o, s) {
	var c = [], l = 0, u = 0, d = !1, f = function() {
		d && !c.length && !l && t.complete();
	}, p = function(e) {
		return l < r ? m(e) : c.push(e);
	}, m = function(e) {
		a && t.next(e), l++;
		var s = !1;
		aa(n(e, u++)).subscribe(Ai(t, function(e) {
			i?.(e), a ? p(e) : t.next(e);
		}, function() {
			s = !0;
		}, void 0, function() {
			if (s) try {
				l--;
				for (var e = function() {
					var e = c.shift();
					o ? pa(t, o, function() {
						return m(e);
					}) : m(e);
				}; c.length && l < r;) e();
				f();
			} catch (e) {
				t.error(e);
			}
		}));
	};
	return e.subscribe(Ai(t, p, function() {
		d = !0, f();
	})), function() {
		s?.();
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function Wa(e, t, n) {
	return n === void 0 && (n = Infinity), qr(t) ? Wa(function(n, r) {
		return ka(function(e, i) {
			return t(n, e, r, i);
		})(aa(e(n, r)));
	}, n) : (typeof t == "number" && (n = t), ki(function(t, r) {
		return Ua(t, r, e, n);
	}));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function Ga(e) {
	return e === void 0 && (e = Infinity), Wa(Si, e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function Ka() {
	return Ga(1);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/concat.js
function qa() {
	var e = [...arguments];
	return Ka()(Ca(e, Ji(e)));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
function Ja(e, t, n) {
	e === void 0 && (e = 0), n === void 0 && (n = Ui);
	var r = -1;
	return t != null && (Gi(t) ? n = t : r = t), new wi(function(t) {
		var i = Oa(e) ? +e - n.now() : e;
		i < 0 && (i = 0);
		var a = 0;
		return n.schedule(function() {
			t.closed || (t.next(a++), 0 <= r ? this.schedule(void 0, r) : t.complete());
		}, i);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
function Ya(e, t) {
	return ki(function(n, r) {
		var i = 0;
		n.subscribe(Ai(r, function(n) {
			return e.call(t, n, i++) && r.next(n);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/audit.js
function Xa(e) {
	return ki(function(t, n) {
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
		t.subscribe(Ai(n, function(t) {
			r = !0, i = t, a || aa(e(t)).subscribe(a = Ai(n, s, c));
		}, function() {
			o = !0, (!r || !a || a.closed) && n.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/auditTime.js
function Za(e, t) {
	return t === void 0 && (t = Hi), Xa(function() {
		return Ja(e, t);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function Qa(e) {
	return ki(function(t, n) {
		var r = null, i = !1, a;
		r = t.subscribe(Ai(n, void 0, void 0, function(o) {
			a = aa(e(o, Qa(e)(t))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
		})), i && (r.unsubscribe(), r = null, a.subscribe(n));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
function $a(e, t) {
	return t === void 0 && (t = Hi), ki(function(n, r) {
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
		n.subscribe(Ai(r, function(n) {
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
function eo(e) {
	return e <= 0 ? function() {
		return Wi;
	} : ki(function(t, n) {
		var r = 0;
		t.subscribe(Ai(n, function(t) {
			++r <= e && (n.next(t), e <= r && n.complete());
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function to(e) {
	return ka(function() {
		return e;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function no(e, t) {
	return t === void 0 && (t = Si), e ??= ro, ki(function(n, r) {
		var i, a = !0;
		n.subscribe(Ai(r, function(n) {
			var o = t(n);
			(a || !e(i, o)) && (a = !1, i = o, r.next(n));
		}));
	});
}
function ro(e, t) {
	return e === t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js
function io(e, t) {
	return no(function(n, r) {
		return t ? t(n[e], r[e]) : n[e] === r[e];
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function ao(e) {
	return ki(function(t, n) {
		try {
			t.subscribe(n);
		} finally {
			n.add(e);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
function oo(e) {
	e === void 0 && (e = {});
	var t = e.connector, n = t === void 0 ? function() {
		return new Ni();
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
		return ki(function(e, m) {
			s++, !u && !l && d();
			var h = a ??= n();
			m.add(function() {
				s--, s === 0 && !u && !l && (r = so(p, c));
			}), h.subscribe(m), !t && s > 0 && (t = new gi({
				next: function(e) {
					return h.next(e);
				},
				error: function(e) {
					u = !0, d(), r = so(f, i, e), h.error(e);
				},
				complete: function() {
					l = !0, d(), r = so(f, o), h.complete();
				}
			}), aa(e).subscribe(t));
		})(e);
	};
}
function so(e, t) {
	var n = [...arguments].slice(2);
	if (t === !0) {
		e();
		return;
	}
	if (t !== !1) {
		var r = new gi({ next: function() {
			r.unsubscribe(), e();
		} });
		return aa(t.apply(void 0, Ur([], Hr(n)))).subscribe(r);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function co(e, t, n) {
	var r, i, a, o, s = !1;
	return e && typeof e == "object" ? (r = e.bufferSize, o = r === void 0 ? Infinity : r, i = e.windowTime, t = i === void 0 ? Infinity : i, a = e.refCount, s = a !== void 0 && a, n = e.scheduler) : o = e ?? Infinity, oo({
		connector: function() {
			return new Li(o, t, n);
		},
		resetOnError: !0,
		resetOnComplete: !1,
		resetOnRefCountZero: s
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/skip.js
function lo(e) {
	return Ya(function(t, n) {
		return e <= n;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function uo(e, t) {
	return ki(function(n, r) {
		var i = null, a = 0, o = !1, s = function() {
			return o && !i && r.complete();
		};
		n.subscribe(Ai(r, function(n) {
			i?.unsubscribe();
			var o = 0, c = a++;
			aa(e(n, c)).subscribe(i = Ai(r, function(e) {
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
function fo(e) {
	return ki(function(t, n) {
		aa(e).subscribe(Ai(n, function() {
			return n.complete();
		}, ii)), !n.closed && t.subscribe(n);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
function po(e, t) {
	return t === void 0 && (t = !1), ki(function(n, r) {
		var i = 0;
		n.subscribe(Ai(r, function(n) {
			var a = e(n, i++);
			(a || t) && r.next(n), !a && r.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/tap.js
function mo(e, t, n) {
	var r = qr(e) || t || n ? {
		next: e,
		error: t,
		complete: n
	} : e;
	return r ? ki(function(e, t) {
		var n;
		(n = r.subscribe) == null || n.call(r);
		var i = !0;
		e.subscribe(Ai(t, function(e) {
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
	}) : Si;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttle.js
function ho(e, t) {
	return ki(function(n, r) {
		var i = t ?? {}, a = i.leading, o = a === void 0 || a, s = i.trailing, c = s !== void 0 && s, l = !1, u = null, d = null, f = !1, p = function() {
			d?.unsubscribe(), d = null, c && (g(), f && r.complete());
		}, m = function() {
			d = null, f && r.complete();
		}, h = function(t) {
			return d = aa(e(t)).subscribe(Ai(r, p, m));
		}, g = function() {
			if (l) {
				l = !1;
				var e = u;
				u = null, r.next(e), !f && h(e);
			}
		};
		n.subscribe(Ai(r, function(e) {
			l = !0, u = e, !(d && !d.closed) && (o ? g() : h(e));
		}, function() {
			f = !0, !(c && l && d && !d.closed) && r.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js
function go(e, t, n) {
	t === void 0 && (t = Hi);
	var r = Ja(e, t);
	return ho(function() {
		return r;
	}, n);
}
//#endregion
//#region node_modules/audako-core/dist/mjs/utils/async-value-utils.js
function _o(e) {
	return typeof e == "function" ? _o(e()) : Ta(e) ? Da(e) : Promise.resolve(e);
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/shared.js
var D = class {
	constructor() {
		this.headerExpanded = !1;
	}
}, vo;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(vo ||= {});
var yo = class {
	constructor() {
		this.channels = [], this.enabled = !1, this.timecontrol = !1;
	}
}, bo;
(function(e) {
	e.Second = "Second", e.Minute = "Minute", e.Hour = "Hour", e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Quarter = "Quarter", e.Year = "Year";
})(bo ||= {});
var xo = class {
	constructor() {
		this.periodOfTime = bo.Day, this.amountOfTimePeriods = 1, this.beginningOfaDay = "00:00", this.beginningOfaWeek = 1, this.offsetOfTimePeriods = 0;
	}
}, So;
(function(e) {
	e.StepSeriesOptions = "StepSeriesOptions", e.StepLineSeriesOptions = "StepLineSeriesOptions", e.LineSeriesOptions = "LineSeriesOptions", e.SmoothedLineSeriesOptions = "SmoothedLineSeriesOptions", e.ColumnSeriesOptions = "ColumnSeriesOptions";
})(So ||= {});
var Co = class {}, wo = class extends Co {}, To = class extends Co {
	constructor() {
		super(...arguments), this.tension = {
			tensionX: .89,
			tensionY: 1
		};
	}
}, Eo = class extends Co {}, Do = class {}, Oo = class {}, ko = class extends Do {
	constructor() {
		super(), this.unit = "";
	}
}, Ao = class {
	constructor() {
		this.title = "", this.yAxis = [], this.series = [], this.guidelines = [], this.enableScrollbar = !1, this.smallLegend = !1, this.legend = !0, this.showAggregationGuidelines = !1, this.showAggregationBullets = !1, this.enableAnnotation = !1, this.bulletDistanceThreshold = 0;
	}
}, jo = "1", Mo = class extends D {
	constructor() {
		super(), this.version = "1", this.signalId = "", this.selectedIcon = "";
	}
}, No = "1", Po = class extends D {
	constructor() {
		super(), this.clockType = Fo.Analog, this.version = "1", this.seconds = !1, this.date = !1, this.timezone = 0;
	}
}, Fo;
(function(e) {
	e.Digital = "Digital", e.Analog = "Analog";
})(Fo ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-text-config.js
var Io = "1", Lo = class extends D {
	constructor() {
		super(), this.version = "1", this.headerExpanded = !1;
	}
}, Ro = "7", zo = class extends D {
	constructor() {
		super(), this.version = "7", this.dataSettings = [], this.historicalSetting = new xo(), this.chartConfig = new Ao(), this.timeManagementSettings = new yo(), this.liveDataSettings = {
			displayTimeRange: 0,
			startupType: !1,
			enabled: !1,
			autoZoom: !1
		};
	}
}, Bo = "1", Vo = class extends D {
	constructor(e) {
		super(), this.title = "WidgetDataImport", this.signals = [], this.version = "1", this.signals = [], e && Object.assign(this, e);
	}
}, Ho = "2", Uo;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(Uo ||= {});
var Wo = class extends D {
	constructor() {
		super(), this.DataType = Uo.Signal, this.version = "2";
	}
}, Go = {
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
function Ko(e, t) {
	for (let n in Go) if (Go[n].start === e && Go[n].end === t) return n;
	return null;
}
function qo(e) {
	return Go[e]?.rotation;
}
function Jo(e) {
	return !!Go[e]?.inverted;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-liquid-fill-gauge.config.js
var Yo = "1", Xo = class extends D {
	constructor() {
		super(), this.version = "1", this.minValue = 0, this.maxValue = 100, this.gaugeTitle = "", this.suffix = "", this.displaySuffix = !0, this.waveCount = 2, this.circleThickness = .05, this.circleFillGap = .05, this.animateWave = !0, this.waveColor = "#178BCA", this.circleColor = "#178BCA", this.textColor = "#045681", this.waveTextColor = "#A4DBf8", this.signalId = null, this.waveAnimateTime = 4e3, this.waveHeight = .1, this.showMinMax = !1, this.showNullLine = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, Zo = "2", Qo = class extends D {
	constructor() {
		super(), this.version = "2", this.type = null, this.caption = null, this.lockingValue = null, this.customLockingValue = null, this.lockingState = null, this.displayStatus = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, $o = "5", es = class {
	constructor() {
		this.expanded = !0;
	}
}, ts = class extends D {
	constructor() {
		super(), this.version = "5";
	}
}, ns = "1", rs = class extends D {
	constructor() {
		super(), this.version = "1";
	}
}, is = "1", as = class extends D {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, os = "0", ss = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, cs = class extends D {
	constructor() {
		super(), this.version = "0", this.sliderGroups = null;
	}
}, ls;
(function(e) {
	e.Enabled = "Enabled", e.Disabled = "Disabled", e.Locked = "Locked";
})(ls ||= {});
var us = "0", ds = class extends D {
	constructor() {
		super(), this.dataGroups = [], this.version = "0";
	}
}, fs = "1", ps = class extends D {
	constructor() {
		super(), this.version = "1";
	}
}, ms = "1", hs = class extends D {
	constructor() {
		super(), this.version = "1", this.counterSignalIds = [];
	}
}, gs = "2", _s = class extends D {
	constructor() {
		super(), this.title = "", this.queryType = null, this.version = "2";
	}
}, vs = "3", ys = class extends D {
	constructor() {
		super(), this.backgroundColor = null, this.version = "3", this.mode = bs.Receive, this.backgroundColor = "#ffffff", this.transferToken = null, this.crossTabs = !1;
	}
}, bs;
(function(e) {
	e.Send = "Send", e.Receive = "Receive";
})(bs ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-traffic-light-config.js
var xs;
(function(e) {
	e.Red = "Red", e.Yellow = "Yellow", e.Green = "Green", e.Off = "Off";
})(xs ||= {});
var Ss = class extends D {
	constructor() {
		super(), this.version = "1", this.title = "", this.headerExpanded = !1, this.mode = Cs.TrafficLight, this.settings = [], this.housingColor = null;
	}
}, Cs;
(function(e) {
	e.TrafficLight = "TrafficLight", e.PedestrianLight = "PedestrianLight", e.SignalLight = "SignalLight";
})(Cs ||= {});
var ws = {
	[Cs.TrafficLight]: "TRAFFIC_LIGHT",
	[Cs.PedestrianLight]: "PEDESTRIAN_LIGHT",
	[Cs.SignalLight]: "SIGNAL_LIGHT"
}, Ts = {
	[xs.Red]: "RED",
	[xs.Yellow]: "YELLOW",
	[xs.Green]: "GREEN",
	[xs.Off]: "OFF"
}, Es = "1", Ds = class extends D {
	constructor() {
		super(), this.signals = [], this.chartConfig = new Ao();
	}
}, Os = "5", ks = class extends D {
	constructor() {
		super(), this.unit = "", this.version = "5", this.compressionSettings = Er.DayInterval, this.historicalSetting = new xo(), this.timeManagementSettings = new yo(), this.headerExpanded = !1;
	}
}, As = class {}, js = "2", Ms = class {}, Ns = class {}, Ps = class {}, Fs = class extends D {
	constructor() {
		super(), this.version = "2";
	}
}, Is = "2", Ls;
(function(e) {
	e.Sum = "Sum", e.Average = "Average";
})(Ls ||= {});
var Rs = class extends D {
	constructor() {
		super(), this.unit = "", this.nodes = [], this.connections = [], this.version = "2", this.timeManagementSettings = new yo(), this.compressionSettings = Er.DayInterval;
	}
}, zs = "2", Bs = class extends D {
	constructor() {
		super(), this.version = "2", this.TemplateTimeSteps = {};
	}
}, Vs;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Vs ||= {});
var Hs = "WidgetReport", Us = "4", Ws = class extends D {
	constructor() {
		super(), this.version = "4", this.acquisitionInterval = Gs.Month, this.acquisitionUnit = Ks.DayValues, this.manualDataSignalMasks = [], this.additionalOptions = {}, this.timelineOption = qs.AUTO, this.showStatusIcons = !0, this.showAlias = !1, this.showPreviousPermanent = !1, this.showPreviousDefault = !0, this.autoSaveAndNext = !0;
	}
}, Gs;
(function(e) {
	e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Gs ||= {});
var Ks;
(function(e) {
	e.ProcessValues = "ProcessValues", e.HourValues = "HourValues", e.DayValues = "DayValues", e.WeekValues = "WeekValues", e.MonthValues = "MonthValues", e.YearValues = "YearValues";
})(Ks ||= {});
var qs;
(function(e) {
	e.ENABLED = "0", e.DISABLED = "1", e.AUTO = "2";
})(qs ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-billing-config.js
var Js = "1", Ys = class extends D {
	constructor() {
		super(), this.version = "1", this.currencyCode = "€", this.counters = [];
	}
}, Xs;
(function(e) {
	e.SIGNAL = "signal", e.VALUE = "value";
})(Xs ||= {});
var Zs = [
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
], Qs = "1", $s = class extends D {
	constructor(e) {
		super(), this.version = "1", this.displayedMetadataFields = [], this.orderSpecificMetadataFields = [], this.showHistory = !0, this.timePeriod = bo.Day, this.periodAmount = 1, e && Object.assign(this, e);
	}
}, ec = "1", tc = class {
	constructor(e) {
		this.version = "1", e && Object.assign(this, e);
	}
}, nc = "8", rc = class {
	constructor(e = 0, t = 0) {
		this.lng = t, this.lat = e;
	}
}, ic = class extends D {
	constructor() {
		super(), this.Marker = [], this.mapGroups = [], this.version = "8", this.headerExpanded = !1, this.autoZoom = !0, this.defaultZoom = 20;
	}
}, ac;
(function(e) {
	e.Live = "Live";
})(ac ||= {});
var oc = Object.assign(Object.assign({}, ac), Er), sc = class {
	constructor() {
		this.intervalType = ac.Live;
	}
}, cc = class {}, lc = class {}, uc = class {
	constructor() {}
}, dc = class extends uc {}, fc = class extends uc {
	constructor() {
		super(), this.filterId = null, this.eventFilter = "Group";
	}
	static isEventBadge(e) {
		return e.eventFilter !== void 0;
	}
}, pc = "3", mc;
(function(e) {
	e.LastValue = "LastValue", e.Difference = "Difference", e.Average = "Average";
})(mc ||= {});
var hc = {
	showTimestamp: !0,
	showLatLng: !0,
	showDuration: !0
}, gc = class extends D {
	constructor(e = {}) {
		super(), Object.assign(this, e), this.version = "3";
	}
}, _c = "1", vc = class extends D {
	constructor() {
		super(), this.version = "1";
	}
}, yc;
(function(e) {
	e.Ongoing = "Ongoing", e.Canceled = "Canceled", e.Completed = "Completed";
})(yc ||= {});
var bc = "2", xc = class extends D {
	constructor(e) {
		super(), this.version = "2", e && Object.assign(this, e);
	}
}, Sc;
(function(e) {
	e.Open = "Open", e.History = "History", e.All = "All";
})(Sc ||= {});
var Cc;
(function(e) {
	e.Group = "Group", e.Service = "Service";
})(Cc ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-type-plate-config.js
var wc = "1", Tc = class extends D {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, Ec = class extends D {
	constructor(e = "", t = !1) {
		super(), this.title = e, this.headerExpanded = t;
	}
}, Dc = "1", Oc = class extends D {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, kc;
(function(e) {
	e.Group = "Group", e.Entity = "Entity";
})(kc ||= {});
var Ac;
(function(e) {
	e[e.Add = 0] = "Add", e[e.Update = 1] = "Update", e[e.Delete = 2] = "Delete";
})(Ac ||= {});
var jc;
(function(e) {
	e.ResetCounter_1 = "ResetCounter_1", e.Set = "Set", e.SetManualValue = "SetManualValue", e.SetNote = "SetNote", e.SetLive = "SetLive", e.SendConfig = "SendConfig", e.ImportHistoricalValues = "ImportHistoricalValues", e.HistoricalValueManipulation = "HistoricalValueManipulation", e.Deactivated = "Deactivated", e.Activated = "Activated", e.ResetBatchReview = "ResetBatchReview", e.LicenseRenewal = "LicenseRenewal";
})(jc ||= {});
var Mc;
(function(e) {
	e.Group = "GROUP", e.Signal = "SIGNAL", e.Formula = "FORMULA", e.Datasource = "DATASOURCE", e.DataConnection = "DATACONNECTION", e.Dashboard = "DASHBOARD", e.DashboardTab = "DASHBOARDTAB", e.ProcessImage = "PROCESSIMAGE", e.ReportTemplate = "REPORTTEMPLATE", e.Report = "REPORT", e.Camera = "CAMERA", e.SwitchSchedule = "SWITCHSCHEDULE", e.RecipientGroup = "RECIPIENTGROUP", e.Recipient = "RECIPIENT", e.AlarmingPlan = "ALARMINGPLAN", e.Role = "ROLE", e.Condition = "CONDITION", e.EventDefinition = "EVENTDEFINITION", e.EventCategory = "EVENTCATEGORY", e.BatchDefinition = "BATCHDEFINITION";
})(Mc ||= {});
var Nc = "2", Pc = class extends D {
	constructor() {
		super(), this.version = "2";
	}
}, Fc = "1", Ic = class extends D {
	constructor() {
		super(), this.version = "1";
	}
}, Lc = "2", Rc = class extends D {
	constructor() {
		super(), this.version = "2";
	}
}, zc = "1", Bc = class extends D {
	constructor() {
		super(), this.version = "1";
	}
}, Vc;
(function(e) {
	e.STAR = "*", e.SELF = "self", e.SRC = "src", e.NONE = "none", e.ORIGINS = "origins";
})(Vc ||= {});
var Hc;
(function(e) {
	e.LAZY = "lazy", e.EAGER = "eager", e.AUTO = "auto";
})(Hc ||= {});
var Uc = "1", Wc = class extends D {
	constructor() {
		super(), this.title = "", this.version = "1", this.headerExpanded = !1, this.permissions = "", this.restrictions = [], this.src = null, this.loadingMethod = "auto";
	}
}, Gc = "1", Kc = class extends D {
	constructor() {
		super(), this.version = "1";
	}
}, qc = "2", Jc = class extends D {
	constructor() {
		super(), this.ReferenceId = "", this.sidebarExpandedOnLargeWidget = !1, this.version = "2";
	}
}, Yc = "1", Xc = class extends D {
	constructor() {
		super(), this.AlarmingPlanID = [], this.version = "1";
	}
}, Zc = "1", Qc = class extends D {
	constructor() {
		super(), this.alarmingPlanIds = [], this.version = "1";
	}
}, $c;
(function(e) {
	e.EmailContact = "EmailContact", e.PushoverContact = "PushoverContact", e.SmsContact = "SmsContact", e.VoipContact = "VoipContact", e.TeamsContact = "TeamsContact", e.TelegramContact = "TelegramContact";
})($c ||= {});
var el = "5", tl = class extends D {
	constructor() {
		super(), this.version = "5", this.showContacts = !1, this.showContactsMatrix = {}, this.allowEditing = !1, this.editableRecipientIds = [];
	}
}, nl = "1", rl = class extends D {
	constructor() {
		super(), this.title = "Widget", this.version = "1", this.recipientGroupId = "";
	}
}, il;
(function(e) {
	e.Group = "Group", e.EventCategory = "EventCategory", e.EventDefinition = "EventDefinition";
})(il ||= {});
var al;
(function(e) {
	e.Group = "GROUP", e.EventCategory = "EVENTCATEGORY", e.EventDefinition = "EVENTDEFINITION";
})(al ||= {});
var ol = "1", sl = class extends D {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, cl = "1", ll = class extends D {
	constructor() {
		super(), this.Events = [], this.version = "1";
	}
}, ul = "1", dl = class extends D {
	constructor(e) {
		super(), this.version = "1", this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, fl = "2", pl = class extends D {
	constructor(e) {
		super(), this.version = "2", this.filterType = "Group", this.onlyActive = !1, this.requestIntervalType = ml.Minutes, this.requestInterval = 5, this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, ml;
(function(e) {
	e.Seconds = "Seconds", e.Minutes = "Minutes";
})(ml ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-entered-alarming-config.js
var hl = "2", gl = class extends D {
	constructor() {
		super(), this.version = "2", this.DateIntervalType = _l.Day, this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1;
	}
}, _l;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month";
})(_l ||= {});
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function vl(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: yl } = Object.prototype, { getPrototypeOf: bl } = Object, { iterator: xl, toStringTag: Sl } = Symbol, Cl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), wl = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Tl = (e, t, n) => e === Object.prototype || !n && t === null, El = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (wl(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, Dl = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = bl(n);
		if (Tl(n, i, n === e)) return !1;
		if (Cl(n, t)) return !0;
		n = i;
	}
	return !1;
}, Ol = (e, t) => e != null && Dl(e, t) ? e[t] : void 0, kl = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = bl(e);
	if (t === null && El(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : bl(a);
		if (Tl(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) wl(t) || Cl(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, Al = ((e) => (t) => {
	let n = yl.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), jl = (e) => (e = e.toLowerCase(), (t) => Al(t) === e), Ml = (e) => (t) => typeof t === e, { isArray: Nl } = Array, Pl = Ml("undefined");
function Fl(e) {
	return e !== null && !Pl(e) && e.constructor !== null && !Pl(e.constructor) && zl(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Il = jl("ArrayBuffer");
function Ll(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Il(e.buffer), t;
}
var Rl = Ml("string"), zl = Ml("function"), Bl = Ml("number"), Vl = (e) => typeof e == "object" && !!e, Hl = (e) => e === !0 || e === !1, Ul = (e) => {
	if (!Vl(e)) return !1;
	let t = bl(e);
	return (t === null || t === Object.prototype || bl(t) === null) && !Dl(e, Sl) && !Dl(e, xl);
}, Wl = (e) => {
	if (!Vl(e) || Fl(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, Gl = jl("Date"), Kl = jl("File"), ql = (e) => !!(e && e.uri !== void 0), Jl = (e) => e && e.getParts !== void 0, Yl = jl("Blob"), Xl = jl("FileList"), Zl = jl("Set"), Ql = (e) => Vl(e) && zl(e.pipe);
function $l() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var eu = $l(), tu = eu.FormData === void 0 ? void 0 : eu.FormData, nu = (e) => {
	if (!e) return !1;
	if (tu && e instanceof tu) return !0;
	let t = bl(e);
	if (!t || t === Object.prototype || !zl(e.append)) return !1;
	let n = Al(e);
	return n === "formdata" || n === "object" && zl(e.toString) && e.toString() === "[object FormData]";
}, ru = jl("URLSearchParams"), [iu, au, ou, su] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(jl), cu = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lu(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), Nl(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (Fl(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function uu(e, t) {
	if (Fl(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var du = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, fu = (e) => !Pl(e) && e !== du;
function pu(...e) {
	let { caseless: t, skipUndefined: n } = fu(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && uu(r, i) || i, o = Cl(r, a) ? r[a] : void 0;
		Ul(o) && Ul(e) ? r[a] = pu(o, e) : Ul(e) ? r[a] = pu({}, e) : Nl(e) ? r[a] = e.slice() : (!n || !Pl(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || Fl(n) || (lu(n, i), typeof n != "object" || Nl(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			Tu.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var mu = (e, t, n, { allOwnKeys: r } = {}) => (lu(t, (t, r) => {
	n && zl(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: vl(t, n),
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
}, { allOwnKeys: r }), e), hu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gu = (e, t, n, r) => {
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
}, _u = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && bl(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, vu = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, yu = (e) => {
	if (!e) return null;
	if (Nl(e)) return e;
	let t = e.length;
	if (!Bl(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, bu = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && bl(Uint8Array)), xu = (e, t) => {
	let n = (e && e[xl]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, Su = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Cu = jl("HTMLFormElement"), wu = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: Tu } = Object.prototype, Eu = jl("RegExp"), Du = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	lu(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, Ou = (e) => {
	Du(e, (t, n) => {
		if (zl(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (zl(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, ku = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return Nl(e) ? r(e) : r(String(e).split(t)), n;
}, Au = () => {}, ju = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Mu(e) {
	return !!(e && zl(e.append) && e[Sl] === "FormData" && e[xl]);
}
var Nu = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (Vl(e)) {
			if (t.has(e)) return;
			if (Fl(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Zl(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!Pl(e) && r.push(e);
					}
				} else r = Nl(e) ? [] : {}, lu(e, (e, t) => {
					let i = n(e);
					!Pl(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Pu = jl("AsyncFunction"), Fu = (e) => e && (Vl(e) || zl(e)) && zl(e.then) && zl(e.catch), Iu = ((e, t) => e ? setImmediate : t ? ((e, t) => (du.addEventListener("message", ({ source: n, data: r }) => {
	n === du && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), du.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", zl(du.postMessage)), Lu = typeof queueMicrotask < "u" ? queueMicrotask.bind(du) : typeof process < "u" && process.nextTick || Iu, Ru = (e) => e != null && zl(e[xl]), O = {
	isArray: Nl,
	isArrayBuffer: Il,
	isBuffer: Fl,
	isFormData: nu,
	isArrayBufferView: Ll,
	isString: Rl,
	isNumber: Bl,
	isBoolean: Hl,
	isObject: Vl,
	isPlainObject: Ul,
	isEmptyObject: Wl,
	isReadableStream: iu,
	isRequest: au,
	isResponse: ou,
	isHeaders: su,
	isUndefined: Pl,
	isDate: Gl,
	isFile: Kl,
	isReactNativeBlob: ql,
	isReactNative: Jl,
	isBlob: Yl,
	isRegExp: Eu,
	isFunction: zl,
	isStream: Ql,
	isURLSearchParams: ru,
	isTypedArray: bu,
	isFileList: Xl,
	forEach: lu,
	merge: pu,
	extend: mu,
	trim: cu,
	stripBOM: hu,
	inherits: gu,
	toFlatObject: _u,
	kindOf: Al,
	kindOfTest: jl,
	endsWith: vu,
	toArray: yu,
	forEachEntry: xu,
	matchAll: Su,
	isHTMLForm: Cu,
	hasOwnProperty: Cl,
	hasOwnProp: Cl,
	hasOwnInPrototypeChain: Dl,
	getSafeProp: Ol,
	toSafeFlatObject: kl,
	reduceDescriptors: Du,
	freezeMethods: Ou,
	toObjectSet: ku,
	toCamelCase: wu,
	noop: Au,
	toFiniteNumber: ju,
	findKey: uu,
	global: du,
	isContextDefined: fu,
	isSpecCompliantForm: Mu,
	toJSONObject: Nu,
	isAsyncFn: Pu,
	isThenable: Fu,
	setImmediate: Iu,
	asap: Lu,
	isIterable: Ru,
	isSafeIterable: (e) => e != null && Dl(e, xl) && Ru(e)
}, zu = O.toObjectSet([
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
]), Bu = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = O.hasOwnProp(t, n);
		!n || a && O.hasOwnProp(zu, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Vu(e) {
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
var Hu = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Uu = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Wu(e, t) {
	return O.isArray(e) ? e.map((e) => Wu(e, t)) : Vu(String(e).replace(t, ""));
}
var Gu = (e) => Wu(e, Hu), Ku = (e) => Wu(e, Uu);
function qu(e) {
	let t = Object.create(null);
	return O.forEach(e.toJSON(), (e, n) => {
		t[n] = Ku(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Ju = Symbol("internals");
function Yu(e) {
	return e && String(e).trim().toLowerCase();
}
function Xu(e) {
	return e === !1 || e == null ? e : O.isArray(e) ? e.map(Xu) : Gu(String(e));
}
function Zu(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Qu = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function $u(e) {
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
function ed(e) {
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
function td(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = $u(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = $u(i.slice(0, a));
		if (!Qu.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = $u(i.slice(a + 1));
		t[s] = ed(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var nd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rd(e, t, n, r, i) {
	if (O.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), O.isString(t)) {
		if (O.isString(r)) return t.indexOf(r) !== -1;
		if (O.isRegExp(r)) return r.test(t);
	}
}
function id(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function ad(e, t) {
	let n = O.toCamelCase(" " + t);
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
var od = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Yu(t);
			if (!i) return;
			let a = O.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Xu(e));
		}
		let a = (e, t) => O.forEach(e, (e, n) => i(e, n, t));
		if (O.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (O.isString(e) && (e = e.trim()) && !nd(e)) a(Bu(e), t);
		else if (O.isObject(e) && O.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!O.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], O.hasOwnProp(n, i) ? (r = n[i], n[i] = O.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Yu(e), e) {
			let n = O.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Zu(e);
				if (O.isFunction(t)) return t.call(this, e, n);
				if (O.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Yu(e), e) {
			let n = O.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || rd(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Yu(e), e) {
				let i = O.findKey(n, e);
				i && (!t || rd(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return O.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || rd(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return O.forEach(this, (r, i) => {
			let a = O.findKey(n, i);
			if (a) {
				t[a] = Xu(r), delete t[i];
				return;
			}
			let o = e ? id(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Xu(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return O.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && O.isArray(n) ? n.join(", ") : n);
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
		return O.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return td(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Ju] = this[Ju] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Yu(e);
			t[r] || (ad(n, e), t[r] = !0);
		}
		return O.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
od.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), O.reduceDescriptors(od.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), O.freezeMethods(od);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var sd = "[REDACTED ****]";
function cd(e) {
	if (O.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (O.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function ld(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || O.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof od && (e = e.toJSON()), r.push(e);
		let t;
		if (O.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			O.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!O.isPlainObject(e) && cd(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? sd : i(a);
				O.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function ud(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function dd(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? ud(e.message) : ud(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var k = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && O.isArray(t.errors) && t.errors.length && (s = dd(t));
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
		let e = this.config, t = e && O.hasOwnProp(e, "redact") ? e.redact : void 0, n = O.isArray(t) && t.length > 0 ? ld(e, t) : O.toJSONObject(e);
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
k.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", k.ERR_BAD_OPTION = "ERR_BAD_OPTION", k.ECONNABORTED = "ECONNABORTED", k.ETIMEDOUT = "ETIMEDOUT", k.ECONNREFUSED = "ECONNREFUSED", k.ERR_NETWORK = "ERR_NETWORK", k.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", k.ERR_DEPRECATED = "ERR_DEPRECATED", k.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", k.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", k.ERR_CANCELED = "ERR_CANCELED", k.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", k.ERR_INVALID_URL = "ERR_INVALID_URL", k.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function fd(e) {
	return O.isPlainObject(e) || O.isArray(e);
}
function pd(e) {
	return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function md(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = pd(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function hd(e) {
	return O.isArray(e) && !e.some(fd);
}
var gd = O.toFlatObject(O, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function _d(e, t, n) {
	if (!O.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = O.getSafeProp(n, e);
		return O.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && O.isSpecCompliantForm(t), d = [];
	if (!O.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (O.isDate(e)) return e.toISOString();
		if (O.isBoolean(e)) return e.toString();
		if (!u && O.isBlob(e)) throw new k("Blob is not supported. Use a Buffer instead.");
		if (O.isArrayBuffer(e) || O.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new k("Blob is not supported. Use a Buffer instead.", k.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new k("Object is too deeply nested (" + e + " levels). Max depth: " + l, k.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!O.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (O.isReactNative(t) && O.isReactNativeBlob(e)) return t.append(md(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (O.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (O.isArray(e) && hd(e) || (O.isFileList(e) || O.endsWith(n, "[]")) && (a = O.toArray(e))) return n = pd(n), a.forEach(function(e, r) {
				!(O.isUndefined(e) || e === null) && t.append(s === !0 ? md([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return fd(e) ? !0 : (t.append(md(r, n, o), f(e)), !1);
	}
	let g = Object.assign(gd, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: fd
	});
	function _(e, n, r = 0) {
		if (!O.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), O.forEach(e, function(e, i) {
				(!(O.isUndefined(e) || e === null) && a.call(t, e, O.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!O.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function vd(e) {
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
function yd(e, t) {
	this._pairs = [], e && _d(e, this, t);
}
var bd = yd.prototype;
bd.append = function(e, t) {
	this._pairs.push([e, t]);
}, bd.toString = function(e) {
	let t = e ? (t) => e.call(this, t, vd) : vd;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function xd(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Sd(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = O.isFunction(n) ? { serialize: n } : n, i = O.getSafeProp(r, "encode") || xd, a = O.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : O.isURLSearchParams(t) ? t.toString() : new yd(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var Cd = Symbol("internals");
function wd(e) {
	return e ? e.length : 0;
}
function Td(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function Ed(e, t) {
	let n = e.handlers, r = wd(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var Dd = class {
	constructor() {
		this.handlers = [], this[Cd] = {
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
		}, i = this[Cd];
		this.handlers ??= [], Ed(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[Cd];
		Ed(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (Td(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], Ed(this, this[Cd]));
	}
	forEach(e) {
		let t = this[Cd];
		Ed(this, t), t.iterationDepth++;
		try {
			O.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (Ed(this, t), Td(this.handlers), t.handlersLength = wd(this.handlers));
		}
	}
}, Od = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, kd = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : yd,
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
}, Ad = /* @__PURE__ */ t({
	hasBrowserEnv: () => jd,
	hasStandardBrowserEnv: () => Nd,
	hasStandardBrowserWebWorkerEnv: () => Pd,
	navigator: () => Md,
	origin: () => Fd
}), jd = typeof window < "u" && typeof document < "u", Md = typeof navigator == "object" && navigator || void 0, Nd = jd && (!Md || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Md.product) < 0), Pd = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fd = jd && window.location.href || "http://localhost", Id = {
	...Ad,
	...kd
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Ld(e, t) {
	return _d(e, new Id.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return Id.isNode && O.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Rd = 100;
function zd(e) {
	if (e > Rd) throw new k("FormData field is too deeply nested (" + e + " levels). Max depth: " + Rd, k.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Bd(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) zd(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Vd(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Hd(e) {
	function t(e, n, r, i) {
		zd(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && O.isArray(r) ? r.length : a, s ? (O.hasOwnProp(r, a) ? r[a] = O.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!O.hasOwnProp(r, a) || !O.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && O.isArray(r[a]) && (r[a] = Vd(r[a])), !o);
	}
	if (O.isFormData(e) && O.isFunction(e.entries)) {
		let n = {};
		return O.forEachEntry(e, (e, r) => {
			t(Bd(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var Ud = Object.freeze([
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
]), Wd = (e, t) => e != null && O.hasOwnProp(e, t) ? e[t] : void 0;
function Gd(e, t, n) {
	if (O.isString(e)) try {
		return (t || JSON.parse)(e), O.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var Kd = {
	transitional: Od,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = O.isObject(e);
		if (i && O.isHTMLForm(e) && (e = new FormData(e)), O.isFormData(e)) return r ? JSON.stringify(Hd(e)) : e;
		if (O.isArrayBuffer(e) || O.isBuffer(e) || O.isStream(e) || O.isFile(e) || O.isBlob(e) || O.isReadableStream(e)) return e;
		if (O.isArrayBufferView(e)) return e.buffer;
		if (O.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Wd(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Ld(e, t).toString();
			if ((a = O.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Wd(this, "env"), r = n && n.FormData;
				return _d(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Gd(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Wd(this, "transitional") || Kd.transitional, n = t && t.forcedJSONParsing, r = Wd(this, "responseType"), i = r === "json";
		if (O.isResponse(e) || O.isReadableStream(e)) return e;
		if (e && O.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Wd(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? k.from(e, k.ERR_BAD_RESPONSE, this, null, Wd(this, "response")) : e;
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
		FormData: Id.classes.FormData,
		Blob: Id.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
O.forEach(Ud, (e) => {
	Kd.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function qd(e, t) {
	let n = this || Kd, r = t || n, i = od.from(r.headers), a = r.data;
	return O.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Jd(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Yd = class extends k {
	constructor(e, t, n) {
		super(e ?? "canceled", k.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Xd(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new k("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? k.ERR_BAD_REQUEST : k.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var Zd = /[\t\n\r]/g;
function Qd(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Zd, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function $d(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function ef(e, t) {
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
function tf(e, t) {
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
var nf = (e, t, n = 3) => {
	let r = 0, i = ef(50, 250);
	return tf((n) => {
		if (!n || !O.isNumber(n.loaded)) return;
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
}, rf = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, af = (e, t = O.asap) => (...n) => t(() => e(...n)), of = Id.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Id.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Id.origin), Id.navigator && /(msie|trident)/i.test(Id.navigator.userAgent)) : () => !0, sf = Id.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		O.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), O.isString(r) && s.push(`path=${r}`), O.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), O.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
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
function cf(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function lf(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var uf = /^https?:(?!\/\/)/i;
function df(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${sd}`);
}
function ff(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${sd}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${sd}`);
	return n === -1 ? r : `${r}#${df(t.slice(n + 1))}`;
}
function pf(e, t) {
	if (typeof e == "string") {
		let n = Qd(e);
		if (uf.test(n)) throw new k(`Invalid URL ${JSON.stringify(ff(n))}: missing "//" after protocol`, k.ERR_INVALID_URL, t);
	}
}
function mf(e, t, n, r) {
	pf(t, r);
	let i = !cf(t);
	return e && (i || n === !1) ? (pf(e, r), lf(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var hf = (e) => e instanceof od ? { ...e } : e, gf = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function _f(e, t) {
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
		return O.isPlainObject(e) && O.isPlainObject(t) ? O.merge.call({ caseless: r }, e, t) : O.isPlainObject(t) ? O.merge({}, t) : O.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!O.isUndefined(t)) return r(e, t, n, i);
		if (!O.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!O.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!O.isUndefined(t)) return r(void 0, t);
		if (!O.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = O.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!O.isUndefined(r)) {
			if (O.isPlainObject(r)) {
				if (O.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = O.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (O.isPlainObject(i) && O.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (O.hasOwnProp(t, a)) return r(n, i);
		if (O.hasOwnProp(e, a)) return r(void 0, n);
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
		headers: (e, t, n) => i(hf(e), hf(t), n, !0)
	};
	return O.forEach(gf({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = O.hasOwnProp(l, r) ? l[r] : i, o = a(O.hasOwnProp(e, r) ? e[r] : void 0, O.hasOwnProp(t, r) ? t[r] : void 0, r);
		O.isUndefined(o) && a !== c || (n[r] = o);
	}), O.hasOwnProp(t, "validateStatus") && O.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (O.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var vf = ["content-type", "content-length"];
function yf(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		vf.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var bf = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function xf(e) {
	let t = _f({}, e), n = (e) => O.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = od.from(s), t.url = Sd(mf(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = O.getSafeProp(c, "username") || "", n = O.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? bf(n) : "")));
		} catch (t) {
			throw k.from(t, k.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (O.isFormData(r)) {
		let e = O.getSafeProp(r, "getHeaders");
		Id.hasStandardBrowserEnv || Id.hasStandardBrowserWebWorkerEnv || O.isReactNative(r) ? s.setContentType(void 0) : O.isFunction(e) && yf(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (Id.hasStandardBrowserEnv && (O.isFunction(i) && (i = i(t)), i === !0 || i == null && of(t.url))) {
		let e = a && o && sf.read(o);
		e && s.set(a, e);
	}
	return t;
}
var Sf = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = xf(e), i = r.data, a = od.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && ($d(Qd(r.url)) || $d(Id.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new k("Request aborted", k.ECONNABORTED, e, g)), h(), g = null;
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
			let a = od.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Xd(function(e) {
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
			g &&= (n(new k("Request aborted", k.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new k(t && t.message ? t.message : "Network Error", k.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Od;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new k(t, i.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && O.forEach(qu(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), O.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = nf(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = nf(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new Yd(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = $d(r.url);
		if (v && !Id.protocols.includes(v)) {
			n(new k("Unsupported protocol " + v + ":", k.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, Cf = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof k ? t : new Yd(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new k(`timeout of ${t}ms exceeded`, k.ETIMEDOUT));
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
	return s.unsubscribe = () => O.asap(o), s;
}, wf = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, Tf = async function* (e, t) {
	for await (let n of Ef(e)) yield* wf(n, t);
}, Ef = async function* (e) {
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
}, Df = (e, t, n, r) => {
	let i = Tf(e, t), a = 0, o, s = (e) => {
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
}, Of = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, kf = (e, t, n) => t + 2 < n && Of(e.charCodeAt(t + 1)) && Of(e.charCodeAt(t + 2)), Af = (e) => e <= 57 ? e - 48 : (e & 223) - 55, jf = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, Mf = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Nf = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Pf = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Ff = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && kf(e, a, t) && (o = Af(e.charCodeAt(a + 1)) * 16 + Af(e.charCodeAt(a + 2)), a += 2), !Mf(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!jf(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Pf(e) : Nf(n);
}, If = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && kf(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function Lf(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return If(t === -1 ? e : e.slice(0, t), Ff);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Rf = "1.20.0", zf = 65536, Bf = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Vf } = O, Hf = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Uf = (e) => {
	if (!O.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Wf = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Gf = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Kf = (e) => {
	let t = O.global !== void 0 && O.global !== null ? O.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = O.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Vf(i) : typeof fetch == "function", c = Vf(a), l = Vf(o);
	if (!s) return !1;
	let u = s && Vf(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Wf(() => {
		let e = !1, t = new a(Id.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Wf(() => O.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
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
			throw new k(`Response type '${e}' is not supported`, k.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (O.isBlob(e)) return e.size;
		if (O.isSpecCompliantForm(e)) return (await new a(Id.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (O.isArrayBufferView(e) || O.isArrayBuffer(e)) return e.byteLength;
		if (O.isURLSearchParams(e) && (e += ""), O.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => O.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: ee, maxContentLength: C, maxBodyLength: te, maxRedirects: ne } = xf(e), re = O.isNumber(C) && C > -1, ie = O.isNumber(te) && te > -1, ae = (t) => O.hasOwnProp(e, t) ? e[t] : void 0, oe = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let se = Cf([l, d && d.toAbortSignal()], _), ce = null, le = se && se.unsubscribe && (() => {
			se.unsubscribe();
		}), ue, de = null, fe = () => new k("Request body larger than maxBodyLength limit", k.ERR_BAD_REQUEST, e, ce);
		try {
			let i, l = ae("auth");
			if (l && (i = {
				username: O.getSafeProp(l, "username") || "",
				password: O.getSafeProp(l, "password") || ""
			}), Gf(t)) {
				let e = new URL(t, Id.origin);
				!i && (e.username || e.password) && (i = {
					username: Uf(e.username),
					password: Uf(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Hf((i.username || "") + ":" + (i.password || ""))))), re && typeof t == "string" && t.startsWith("data:") && Lf(t) > C) throw new k("maxContentLength size of " + C + " exceeded", k.ERR_BAD_RESPONSE, e, ce);
			if (ie && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ue = e, e > te)) throw fe();
			}
			let d = ie && (O.isReadableStream(s) || O.isStream(s)), _ = (e, t, n) => Df(e, zf, (e) => {
				if (ie && e > te) throw de = fe();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (y || d)) {
				if (ue ??= await g(x, s), ue !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (O.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && rf(ue, nf(af(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new k("Stream request bodies are not supported by the current fetch implementation", k.ERR_NOT_SUPPORT, e, ce);
			O.isString(S) || (S = S ? "include" : "omit");
			let pe = c && "credentials" in a.prototype;
			if (O.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + Rf, !1);
			let w = ee == null ? ee : Object.assign(Object.create(null), ee);
			w && (delete w.body, delete w.headers, delete w.method, delete w.signal, delete w.duplex, delete w.credentials);
			let me = Object.assign(Object.create(null), w, {
				signal: se,
				method: n.toUpperCase(),
				headers: qu(x.normalize()),
				body: s,
				duplex: "half",
				credentials: pe ? S : void 0
			});
			c && (O.forEach(Bf, (e, t) => {
				me[t] === void 0 && (me[t] = e);
			}), me.signal === void 0 && (me.signal = null), me.body === void 0 && (me.body = null)), ne === 0 && (me.redirect = "manual", w && (w.redirect = "manual")), ce = c && new a(t, me);
			let he = await (c ? oe(ce, w) : oe(t, me)), ge = od.from(he.headers);
			if (re) {
				let t = O.toFiniteNumber(ge.getContentLength());
				if (t != null && t > C) throw new k("maxContentLength size of " + C + " exceeded", k.ERR_BAD_RESPONSE, e, ce);
			}
			let _e = p && (b === "stream" || b === "response");
			if (p && he.body && (v || re || _e && le)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = he[e];
				});
				let n = O.toFiniteNumber(ge.getContentLength()), [r, i] = v && rf(n, nf(af(v), !0)) || [], a = 0;
				he = new o(Df(he.body, zf, (t) => {
					if (re && (a = t, a > C)) throw new k("maxContentLength size of " + C + " exceeded", k.ERR_BAD_RESPONSE, e, ce);
					r && r(t);
				}, () => {
					i && i(), le && le();
				}), t);
			}
			b ||= "text";
			let ve = await m[O.findKey(m, b) || "text"](he, e);
			if (re && !p && !_e) {
				let t;
				if (ve != null && (typeof ve.byteLength == "number" ? t = ve.byteLength : typeof ve.size == "number" ? t = ve.size : typeof ve == "string" && (t = typeof r == "function" ? new r().encode(ve).byteLength : ve.length)), typeof t == "number" && t > C) throw new k("maxContentLength size of " + C + " exceeded", k.ERR_BAD_RESPONSE, e, ce);
			}
			return !_e && le && le(), await new Promise((t, n) => {
				Xd(t, n, {
					data: ve,
					headers: od.from(he.headers),
					status: he.status,
					statusText: he.statusText,
					config: e,
					request: ce
				});
			});
		} catch (t) {
			if (le && le(), se && se.aborted && se.reason instanceof k) {
				let n = se.reason;
				throw n.config = e, ce && (n.request = ce), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (de) throw ce && !de.request && (de.request = ce), de;
			if (t instanceof k) throw ce && !t.request && (t.request = ce), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new k("Network Error", k.ERR_NETWORK, e, ce, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw k.from(t, t && t.code, e, ce, t && t.response);
		}
	};
}, qf = /* @__PURE__ */ new Map(), Jf = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = qf;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Kf(t)), l = c;
	return c;
};
Jf();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Yf = {
	http: null,
	xhr: Sf,
	fetch: { get: Jf }
};
O.forEach(Yf, (e, t) => {
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
var Xf = (e) => `- ${e}`, Zf = (e) => O.isFunction(e) || e === null || e === !1;
function Qf(e, t) {
	e = O.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Zf(r) && (i = Yf[(n = String(r)).toLowerCase()], i === void 0)) throw new k(`Unknown adapter '${n}'`);
		if (i && (O.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new k("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Xf).join("\n") : " " + Xf(e[0]) : "as no adapter specified"), k.ERR_NOT_SUPPORT);
	}
	return i;
}
var $f = {
	getAdapter: Qf,
	adapters: Yf
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function ep(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Yd(null, e);
}
function tp(e) {
	let t = O.toSafeFlatObject(e);
	return ep(t), t.headers = od.from(O.getSafeProp(t, "headers")), t.data = qd.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), $f.getAdapter(t.adapter || Kd.adapter, t)(t).then(function(e) {
		ep(t), t.response = e;
		try {
			e.data = qd.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = od.from(e.headers), e;
	}, function(e) {
		if (!Jd(e) && (ep(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = qd.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = od.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var np = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	np[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var rp = {};
np.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Rf + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new k(r(i, " has been removed" + (t ? " in " + t : "")), k.ERR_DEPRECATED);
		return t && !rp[i] && (rp[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, np.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function ip(e, t, n) {
	if (typeof e != "object" || !e) throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new k("option " + a + " must be " + n, k.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new k("Unknown option " + a, k.ERR_BAD_OPTION);
	}
}
var ap = {
	assertOptions: ip,
	validators: np
}, op = ap.validators, sp = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Dd(),
			response: new Dd()
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
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = _f(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && ap.assertOptions(n, {
			silentJSONParsing: op.transitional(op.boolean),
			forcedJSONParsing: op.transitional(op.boolean),
			clarifyTimeoutError: op.transitional(op.boolean),
			legacyInterceptorReqResOrdering: op.transitional(op.boolean),
			advertiseZstdAcceptEncoding: op.transitional(op.boolean),
			validateStatusUndefinedResolves: op.transitional(op.boolean)
		}, !1), r != null && (O.isFunction(r) ? t.paramsSerializer = { serialize: r } : ap.assertOptions(r, {
			encode: op.function,
			serialize: op.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), ap.assertOptions(t, {
			baseUrl: op.spelling("baseURL"),
			withXsrfToken: op.spelling("withXSRFToken")
		}, !0), t.method = (O.getSafeProp(t, "method") || O.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && O.merge(i.common, i[t.method]);
		i && O.forEach(Ud.concat("common"), (e) => {
			delete i[e];
		}), t.headers = od.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Od;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [tp.bind(this), void 0];
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
					O.isThenable(n) && (l = Promise.resolve(n).then(() => tp.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = tp.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = _f(this.defaults, e), Sd(mf(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
O.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	sp.prototype[e] = function(t, n) {
		return this.request(_f(n || {}, {
			method: e,
			url: t,
			data: n && O.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), O.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(_f(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	sp.prototype[e] = t(), e !== "query" && (sp.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var cp = class e {
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
			n.reason || (n.reason = new Yd(e, r, i), t(n.reason));
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
function lp(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function up(e) {
	return O.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var dp = {
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
Object.entries(dp).forEach(([e, t]) => {
	dp[t] === void 0 && (dp[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function fp(e) {
	let t = new sp(e), n = vl(sp.prototype.request, t);
	return O.extend(n, sp.prototype, t, { allOwnKeys: !0 }), O.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return fp(_f(e, t));
	}, n;
}
var A = fp(Kd);
A.Axios = sp, A.CanceledError = Yd, A.CancelToken = cp, A.isCancel = Jd, A.VERSION = Rf, A.toFormData = _d, A.AxiosError = k, A.Cancel = A.CanceledError, A.all = function(e) {
	return Promise.all(e);
}, A.spread = lp, A.isAxiosError = up, A.mergeConfig = _f, A.AxiosHeaders = od, A.formToJSON = (e) => Hd(O.isHTMLForm(e) ? new FormData(e) : e), A.getAdapter = $f.getAdapter, A.HttpStatusCode = dp, A.default = A;
//#endregion
//#region node_modules/audako-core/dist/mjs/services/base-http.service.js
var pp = function(e, t, n, r) {
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
}, mp = class {
	constructor(e, t) {
		this.httpConfig = e, this.accessToken = t;
	}
	getAuthorizationHeader() {
		return pp(this, void 0, void 0, function* () {
			return { Authorization: `Bearer ${yield _o(this.accessToken)}` };
		});
	}
	getAccessToken() {
		return _o(this.accessToken);
	}
	getStructureUrl() {
		return pp(this, void 0, void 0, function* () {
			let e = yield _o(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Structure}`;
		});
	}
	static requestHttpConfig(e) {
		return A.get(`${e}/assets/conf/application.config`).then((e) => e.data);
	}
	static isApiReachable(e) {
		return A.get(`${e}/api/structure/about/version`).then((e) => e.status === 200 || e.status === 401).catch((e) => e?.response?.status === 401);
	}
}, hp = function(e, t, n, r) {
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
}, gp = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	getEntityById(e, t) {
		return hp(this, void 0, void 0, function* () {
			return this.getPartialEntityById(e, t, null);
		});
	}
	getPartialEntityById(e, t, n) {
		return hp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(e)}/${t}`;
			n && (r += `?$projection=${JSON.stringify(n)}`);
			let i = yield this.getAuthorizationHeader();
			return (yield A.get(r, { headers: i })).data;
		});
	}
	queryConfiguration(e, t, n, r) {
		return hp(this, void 0, void 0, function* () {
			let i = `${yield this._createBaseUrlByType(e)}/query`, a = {
				$filter: JSON.stringify(t),
				$paging: n ? JSON.stringify(n) : null,
				$projection: r ? JSON.stringify(r) : null
			}, o = yield this.getAuthorizationHeader(), s = yield A.post(i, a, { headers: o });
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
		return hp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(r.ProcessImage)}/${e}/file/image`, i = yield this.getAuthorizationHeader(), a = new Blob([t], { type: "image/svg+xml" }), o = new FormData();
			o.append("file", a, "process-image.svg"), yield A.post(n, o, { headers: i });
		});
	}
	addEntity(e, t) {
		return hp(this, void 0, void 0, function* () {
			let n = yield this._createBaseUrlByType(e), r = yield this.getAuthorizationHeader();
			return A.post(n, t, { headers: r }).then((e) => e.data);
		});
	}
	updateEntity(e, t) {
		return hp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(e)}/${t.Id}`;
			delete t.CreatedBy, delete t.CreatedOn;
			let r = yield this.getAuthorizationHeader();
			return A.put(n, t, { headers: r }).then((e) => e.data);
		});
	}
	deleteEntity(e, t) {
		return hp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(e)}/${t}`, r = yield this.getAuthorizationHeader();
			return A.delete(n, { headers: r }).then();
		});
	}
	copyTo(e, t, n) {
		return hp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/copy/${e}/to/${t}`, i = yield this.getAuthorizationHeader();
			return A.get(r, { headers: i }).then((e) => e.data);
		});
	}
	copyMultipleTo(e, t, n) {
		return hp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/copy/multiple/${t}`, i = yield this.getAuthorizationHeader();
			return A.put(r, e, {
				responseType: "text",
				headers: i
			});
		});
	}
	moveTo(e, t, n) {
		return hp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/move/${e}/to/${t}`, i = yield this.getAuthorizationHeader();
			return A.get(r, { headers: i }).then((e) => e.data);
		});
	}
	moveMultipleTo(e, t, n) {
		return hp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/move/multiple/${t}`, i = yield this.getAuthorizationHeader();
			return A.put(r, e, {
				responseType: "text",
				headers: i
			});
		});
	}
	_createBaseUrlByType(e) {
		return hp(this, void 0, void 0, function* () {
			return `${yield this.getStructureUrl()}${a[e]}`;
		});
	}
}, _p = function(e, t, n, r) {
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
}, vp = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	getTenantViewById(e) {
		return _p(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/${e}/view`, n = yield this.getAuthorizationHeader();
			return (yield A.get(t, { headers: n })).data;
		});
	}
	getTenantViewForEntityId(e) {
		return _p(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, n = yield this.getAuthorizationHeader();
			return (yield A.get(t, { headers: n })).data;
		});
	}
	getTopTenants() {
		return _p(this, void 0, void 0, function* () {
			let e = `${yield this.getStructureUrl()}/tenant/top`, t = yield this.getAuthorizationHeader();
			return (yield A.get(e, { headers: t })).data;
		});
	}
	getNextTenants(e) {
		return _p(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/${e}/next`, n = yield this.getAuthorizationHeader();
			return (yield A.get(t, { headers: n })).data;
		});
	}
	filterTenantsByName(e) {
		return _p(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/filter/${e}`, n = yield this.getAuthorizationHeader();
			return (yield A.get(t, { headers: n })).data;
		});
	}
}, yp = function(e, t, n, r) {
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
}, bp = class {
	constructor(e) {
		this.httpService = e, this._nameCache = {};
	}
	resolveEntityPath(e, t, n = !1, r, i = " / ") {
		return yp(this, void 0, void 0, function* () {
			let a = yield this.httpService.getPartialEntityById(e, t, {
				Name: 1,
				Path: 1
			}), o = yield this.resolvePathName(a.Path.splice(r ? a.Path.length - r : 0, a.Path.length), i);
			return n && (o = o + i + a.Name.Value), o;
		});
	}
	resolvePathName(e, t = " / ") {
		return yp(this, void 0, void 0, function* () {
			return e.length === 0 ? "" : Da(Ba(e.map((e) => this.resolveName(r.Group, e))).pipe(ka((e) => e.join(t))));
		});
	}
	resolveName(e, t) {
		return yp(this, void 0, void 0, function* () {
			return this._nameCache[t] || (this._nameCache[t] = Ca(this.httpService.getPartialEntityById(e, t, { Name: 1 })).pipe(ka((e) => e.Name.Value), co(1), Qa(() => wa(t)))), Da(this._nameCache[t]);
		});
	}
}, xp = function(e, t, n, r) {
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
}, Sp = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	getUserProfile() {
		return xp(this, void 0, void 0, function* () {
			try {
				let e = yield this.getAuthorizationHeader(), t = yield A.get(`${yield this.getStructureUrl()}/userprofile`, { headers: e });
				if (t.status == 200) return t.data;
			} catch (e) {
				throw Error("Failed to request user profile with error: " + e?.message);
			}
		});
	}
	updateUserProfileSettings(e) {
		return xp(this, void 0, void 0, function* () {
			try {
				let t = yield this.getAuthorizationHeader();
				yield A.put(`${yield this.getStructureUrl()}/userprofile`, e, { headers: t });
			} catch (e) {
				throw Error("Failed to update user profile with error: " + e?.message);
			}
		});
	}
}, Cp = function(e, t, n, r) {
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
}, wp = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	sendDatSrcConfiguration(e) {
		return Cp(this, void 0, void 0, function* () {
			let t = `${this._getDriverUrl()}/command/source/${e}/configure`, n = yield this.getAuthorizationHeader();
			return (yield A.get(t, { headers: n })).data;
		});
	}
	_getDriverUrl() {
		return Cp(this, void 0, void 0, function* () {
			let e = yield _o(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Driver}`;
		});
	}
}, Tp = function(e, t, n, r) {
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
}, Ep = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	browseConnection(e, t) {
		return Tp(this, void 0, void 0, function* () {
			let n = `${yield this._getDriverUrl()}/command/conn/${e}/browse`, r = yield this.getAuthorizationHeader();
			return (yield A.post(n, { Path: t }, { headers: r })).data;
		});
	}
	_getDriverUrl() {
		return Tp(this, void 0, void 0, function* () {
			let e = yield _o(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Driver}`;
		});
	}
}, Dp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = n;
	}
}, Op = class extends Error {
	constructor(e = "A timeout occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, kp = class extends Error {
	constructor(e = "An abort occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, Ap = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = n;
	}
}, jp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = n;
	}
}, Mp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = n;
	}
}, Np = class extends Error {
	constructor(e) {
		let t = new.target.prototype;
		super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
	}
}, Pp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.innerErrors = t, this.__proto__ = n;
	}
}, Fp = class {
	constructor(e, t, n) {
		this.statusCode = e, this.statusText = t, this.content = n;
	}
}, Ip = class {
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
}, j;
(function(e) {
	e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
})(j ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Loggers.js
var Lp = class {
	constructor() {}
	log(e, t) {}
};
Lp.instance = new Lp();
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Utils.js
var Rp = "6.0.25", zp = class {
	static isRequired(e, t) {
		if (e == null) throw Error(`The '${t}' argument is required.`);
	}
	static isNotEmpty(e, t) {
		if (!e || e.match(/^\s*$/)) throw Error(`The '${t}' argument should not be empty.`);
	}
	static isIn(e, t, n) {
		if (!(e in t)) throw Error(`Unknown ${n} value: ${e}.`);
	}
}, Bp = class {
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
function Vp(e, t) {
	let n = "";
	return Up(e) ? (n = `Binary data of length ${e.byteLength}`, t && (n += `. Content: '${Hp(e)}'`)) : typeof e == "string" && (n = `String data of length ${e.length}`, t && (n += `. Content: '${e}'`)), n;
}
function Hp(e) {
	let t = new Uint8Array(e), n = "";
	return t.forEach((e) => {
		n += `0x${e < 16 ? "0" : ""}${e.toString(16)} `;
	}), n.substr(0, n.length - 1);
}
function Up(e) {
	return e && typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || e.constructor && e.constructor.name === "ArrayBuffer");
}
async function Wp(e, t, n, r, i, a, o) {
	let s = {};
	if (i) {
		let e = await i();
		e && (s = { Authorization: `Bearer ${e}` });
	}
	let [c, l] = Jp();
	s[c] = l, e.log(j.Trace, `(${t} transport) sending data. ${Vp(a, o.logMessageContent)}.`);
	let u = Up(a) ? "arraybuffer" : "text", d = await n.post(r, {
		content: a,
		headers: {
			...s,
			...o.headers
		},
		responseType: u,
		timeout: o.timeout,
		withCredentials: o.withCredentials
	});
	e.log(j.Trace, `(${t} transport) request complete. Response status: ${d.statusCode}.`);
}
function Gp(e) {
	return e === void 0 ? new qp(j.Information) : e === null ? Lp.instance : e.log === void 0 ? new qp(e) : e;
}
var Kp = class {
	constructor(e, t) {
		this._subject = e, this._observer = t;
	}
	dispose() {
		let e = this._subject.observers.indexOf(this._observer);
		e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((e) => {});
	}
}, qp = class {
	constructor(e) {
		this._minLevel = e, this.out = console;
	}
	log(e, t) {
		if (e >= this._minLevel) {
			let n = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${j[e]}: ${t}`;
			switch (e) {
				case j.Critical:
				case j.Error:
					this.out.error(n);
					break;
				case j.Warning:
					this.out.warn(n);
					break;
				case j.Information:
					this.out.info(n);
					break;
				default: this.out.log(n);
			}
		}
	}
};
function Jp() {
	let e = "X-SignalR-User-Agent";
	return Bp.isNode && (e = "User-Agent"), [e, Yp(Rp, Xp(), Qp(), Zp())];
}
function Yp(e, t, n, r) {
	let i = "Microsoft SignalR/", a = e.split(".");
	return i += `${a[0]}.${a[1]}`, i += ` (${e}; `, i += t && t !== "" ? `${t}; ` : "Unknown OS; ", i += `${n}`, i += r ? `; ${r}` : "; Unknown Runtime Version", i += ")", i;
}
/*#__PURE__*/ function Xp() {
	if (Bp.isNode) switch (process.platform) {
		case "win32": return "Windows NT";
		case "darwin": return "macOS";
		case "linux": return "Linux";
		default: return process.platform;
	}
	else return "";
}
/*#__PURE__*/ function Zp() {
	if (Bp.isNode) return process.versions.node;
}
function Qp() {
	return Bp.isNode ? "NodeJS" : "Browser";
}
function $p(e) {
	return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function em() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw Error("could not find global");
}
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js
var tm = class extends Ip {
	constructor(e) {
		if (super(), this._logger = e, typeof fetch > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._jar = new (e("tough-cookie")).CookieJar(), this._fetchType = e("node-fetch"), this._fetchType = e("fetch-cookie")(this._fetchType, this._jar);
		} else this._fetchType = fetch.bind(em());
		if (typeof AbortController > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._abortControllerType = e("abort-controller");
		} else this._abortControllerType = AbortController;
	}
	async send(e) {
		if (e.abortSignal && e.abortSignal.aborted) throw new kp();
		if (!e.method) throw Error("No method defined.");
		if (!e.url) throw Error("No url defined.");
		let t = new this._abortControllerType(), n;
		e.abortSignal && (e.abortSignal.onabort = () => {
			t.abort(), n = new kp();
		});
		let r = null;
		if (e.timeout) {
			let i = e.timeout;
			r = setTimeout(() => {
				t.abort(), this._logger.log(j.Warning, "Timeout from HTTP request."), n = new Op();
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
			throw n || (this._logger.log(j.Warning, `Error from HTTP request. ${e}.`), e);
		} finally {
			r && clearTimeout(r), e.abortSignal && (e.abortSignal.onabort = null);
		}
		if (!i.ok) throw new Dp(await nm(i, "text") || i.statusText, i.status);
		let a = await nm(i, e.responseType);
		return new Fp(i.status, i.statusText, a);
	}
	getCookieString(e) {
		let t = "";
		return Bp.isNode && this._jar && this._jar.getCookies(e, (e, n) => t = n.join("; ")), t;
	}
};
function nm(e, t) {
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
var rm = class extends Ip {
	constructor(e) {
		super(), this._logger = e;
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new kp()) : e.method ? e.url ? new Promise((t, n) => {
			let r = new XMLHttpRequest();
			r.open(e.method, e.url, !0), r.withCredentials = e.withCredentials === void 0 || e.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
			let i = e.headers;
			i && Object.keys(i).forEach((e) => {
				r.setRequestHeader(e, i[e]);
			}), e.responseType && (r.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
				r.abort(), n(new kp());
			}), e.timeout && (r.timeout = e.timeout), r.onload = () => {
				e.abortSignal && (e.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? t(new Fp(r.status, r.statusText, r.response || r.responseText)) : n(new Dp(r.response || r.responseText || r.statusText, r.status));
			}, r.onerror = () => {
				this._logger.log(j.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), n(new Dp(r.statusText, r.status));
			}, r.ontimeout = () => {
				this._logger.log(j.Warning, "Timeout from HTTP request."), n(new Op());
			}, r.send(e.content || "");
		}) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
}, im = class extends Ip {
	constructor(e) {
		if (super(), typeof fetch < "u" || Bp.isNode) this._httpClient = new tm(e);
		else if (typeof XMLHttpRequest < "u") this._httpClient = new rm(e);
		else throw Error("No usable HttpClient found.");
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new kp()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
	getCookieString(e) {
		return this._httpClient.getCookieString(e);
	}
}, am = class e {
	static write(t) {
		return `${t}${e.RecordSeparator}`;
	}
	static parse(t) {
		if (t[t.length - 1] !== e.RecordSeparator) throw Error("Message is incomplete.");
		let n = t.split(e.RecordSeparator);
		return n.pop(), n;
	}
};
am.RecordSeparatorCode = 30, am.RecordSeparator = String.fromCharCode(am.RecordSeparatorCode);
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js
var om = class {
	writeHandshakeRequest(e) {
		return am.write(JSON.stringify(e));
	}
	parseHandshakeResponse(e) {
		let t, n;
		if (Up(e)) {
			let r = new Uint8Array(e), i = r.indexOf(am.RecordSeparatorCode);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, a))), n = r.byteLength > a ? r.slice(a).buffer : null;
		} else {
			let r = e, i = r.indexOf(am.RecordSeparator);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = r.substring(0, a), n = r.length > a ? r.substring(a) : null;
		}
		let r = am.parse(t), i = JSON.parse(r[0]);
		if (i.type) throw Error("Expected a handshake response from the server.");
		return [n, i];
	}
}, M;
(function(e) {
	e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
})(M ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Subject.js
var sm = class {
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
		return this.observers.push(e), new Kp(this, e);
	}
}, cm = 3e4, lm = 15e3, um;
(function(e) {
	e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
})(um ||= {});
var dm = class e {
	constructor(e, t, n, r) {
		this._nextKeepAlive = 0, this._freezeEventListener = () => {
			this._logger.log(j.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
		}, zp.isRequired(e, "connection"), zp.isRequired(t, "logger"), zp.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = cm, this.keepAliveIntervalInMilliseconds = lm, this._logger = t, this._protocol = n, this.connection = e, this._reconnectPolicy = r, this._handshakeProtocol = new om(), this.connection.onreceive = (e) => this._processIncomingData(e), this.connection.onclose = (e) => this._connectionClosed(e), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = um.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: M.Ping });
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
		if (this._connectionState !== um.Disconnected && this._connectionState !== um.Reconnecting) throw Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
		if (!e) throw Error("The HubConnection url must be a valid url.");
		this.connection.baseUrl = e;
	}
	start() {
		return this._startPromise = this._startWithStateTransitions(), this._startPromise;
	}
	async _startWithStateTransitions() {
		if (this._connectionState !== um.Disconnected) return Promise.reject(/* @__PURE__ */ Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
		this._connectionState = um.Connecting, this._logger.log(j.Debug, "Starting HubConnection.");
		try {
			await this._startInternal(), Bp.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = um.Connected, this._connectionStarted = !0, this._logger.log(j.Debug, "HubConnection connected successfully.");
		} catch (e) {
			return this._connectionState = um.Disconnected, this._logger.log(j.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
			if (this._logger.log(j.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)), this._logger.log(j.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError) throw this._stopDuringStartError;
		} catch (e) {
			throw this._logger.log(j.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(e), e;
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
		return this._connectionState === um.Disconnected ? (this._logger.log(j.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === um.Disconnecting ? (this._logger.log(j.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = um.Disconnecting, this._logger.log(j.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(j.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || /* @__PURE__ */ Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
	}
	stream(e, ...t) {
		let [n, r] = this._replaceStreamingParams(t), i = this._createStreamInvocation(e, t, r), a, o = new sm();
		return o.cancelCallback = () => {
			let e = this._createCancelInvocation(i.invocationId);
			return delete this._callbacks[i.invocationId], a.then(() => this._sendWithProtocol(e));
		}, this._callbacks[i.invocationId] = (e, t) => {
			if (t) {
				o.error(t);
				return;
			}
			e && (e.type === M.Completion ? e.error ? o.error(Error(e.error)) : o.complete() : o.next(e.item));
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
				n && (n.type === M.Completion ? n.error ? t(Error(n.error)) : e(n.result) : t(/* @__PURE__ */ Error(`Unexpected message type: ${n.type}`)));
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
				case M.Invocation:
					this._invokeClientMethod(e);
					break;
				case M.StreamItem:
				case M.Completion: {
					let t = this._callbacks[e.invocationId];
					if (t) {
						e.type === M.Completion && delete this._callbacks[e.invocationId];
						try {
							t(e);
						} catch (e) {
							this._logger.log(j.Error, `Stream callback threw error: ${$p(e)}`);
						}
					}
					break;
				}
				case M.Ping: break;
				case M.Close: {
					this._logger.log(j.Information, "Close message received from server.");
					let t = e.error ? /* @__PURE__ */ Error("Server returned an error on close: " + e.error) : void 0;
					e.allowReconnect === !0 ? this.connection.stop(t) : this._stopPromise = this._stopInternal(t);
					break;
				}
				default: this._logger.log(j.Warning, `Invalid message type: ${e.type}.`);
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
			this._logger.log(j.Error, t);
			let n = Error(t);
			throw this._handshakeRejecter(n), n;
		}
		if (t.error) {
			let e = "Server returned handshake error: " + t.error;
			this._logger.log(j.Error, e);
			let n = Error(e);
			throw this._handshakeRejecter(n), n;
		}
		return this._logger.log(j.Debug, "Server handshake complete."), this._handshakeResolver(), n;
	}
	_resetKeepAliveInterval() {
		this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
	}
	_resetTimeoutPeriod() {
		if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
			let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
			e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
				if (this._connectionState === um.Connected) try {
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
				this._logger.log(j.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${t}'.`);
			}
			if (e.invocationId) {
				let e = "Server requested a response, which is not supported in this version of the client.";
				this._logger.log(j.Error, e), this._stopPromise = this._stopInternal(/* @__PURE__ */ Error(e));
			}
		} else this._logger.log(j.Warning, `No client method with the name '${e.target}' found.`);
	}
	_connectionClosed(e) {
		this._logger.log(j.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || /* @__PURE__ */ Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || /* @__PURE__ */ Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === um.Disconnecting ? this._completeClose(e) : this._connectionState === um.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === um.Connected && this._completeClose(e);
	}
	_completeClose(e) {
		if (this._connectionStarted) {
			this._connectionState = um.Disconnected, this._connectionStarted = !1, Bp.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
			try {
				this._closedCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(j.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
			}
		}
	}
	async _reconnect(e) {
		let t = Date.now(), n = 0, r = e === void 0 ? /* @__PURE__ */ Error("Attempting to reconnect due to a unknown error.") : e, i = this._getNextRetryDelay(n++, 0, r);
		if (i === null) {
			this._logger.log(j.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
			return;
		}
		if (this._connectionState = um.Reconnecting, e ? this._logger.log(j.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(j.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
			try {
				this._reconnectingCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(j.Error, `An onreconnecting callback called with error '${e}' threw error '${t}'.`);
			}
			if (this._connectionState !== um.Reconnecting) {
				this._logger.log(j.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
				return;
			}
		}
		for (; i !== null;) {
			if (this._logger.log(j.Information, `Reconnect attempt number ${n} will start in ${i} ms.`), await new Promise((e) => {
				this._reconnectDelayHandle = setTimeout(e, i);
			}), this._reconnectDelayHandle = void 0, this._connectionState !== um.Reconnecting) {
				this._logger.log(j.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
				return;
			}
			try {
				if (await this._startInternal(), this._connectionState = um.Connected, this._logger.log(j.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0) try {
					this._reconnectedCallbacks.forEach((e) => e.apply(this, [this.connection.connectionId]));
				} catch (e) {
					this._logger.log(j.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
				}
				return;
			} catch (e) {
				if (this._logger.log(j.Information, `Reconnect attempt failed because of error '${e}'.`), this._connectionState !== um.Reconnecting) {
					this._logger.log(j.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === um.Disconnecting && this._completeClose();
					return;
				}
				r = e instanceof Error ? e : Error(e.toString()), i = this._getNextRetryDelay(n++, Date.now() - t, r);
			}
		}
		this._logger.log(j.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${n} failed attempts. Connection disconnecting.`), this._completeClose();
	}
	_getNextRetryDelay(e, t, n) {
		try {
			return this._reconnectPolicy.nextRetryDelayInMilliseconds({
				elapsedMilliseconds: t,
				previousRetryCount: e,
				retryReason: n
			});
		} catch (n) {
			return this._logger.log(j.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${n}'.`), null;
		}
	}
	_cancelCallbacksWithError(e) {
		let t = this._callbacks;
		this._callbacks = {}, Object.keys(t).forEach((n) => {
			let r = t[n];
			try {
				r(null, e);
			} catch (t) {
				this._logger.log(j.Error, `Stream 'error' callback called with '${e}' threw error: ${$p(t)}`);
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
			type: M.Invocation
		} : {
			arguments: t,
			streamIds: r,
			target: e,
			type: M.Invocation
		};
		{
			let n = this._invocationId;
			return this._invocationId++, r.length === 0 ? {
				arguments: t,
				invocationId: n.toString(),
				target: e,
				type: M.Invocation
			} : {
				arguments: t,
				invocationId: n.toString(),
				streamIds: r,
				target: e,
				type: M.Invocation
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
			type: M.StreamInvocation
		} : {
			arguments: t,
			invocationId: r.toString(),
			streamIds: n,
			target: e,
			type: M.StreamInvocation
		};
	}
	_createCancelInvocation(e) {
		return {
			invocationId: e,
			type: M.CancelInvocation
		};
	}
	_createStreamItemMessage(e, t) {
		return {
			invocationId: e,
			item: t,
			type: M.StreamItem
		};
	}
	_createCompletionMessage(e, t, n) {
		return t ? {
			error: t,
			invocationId: e,
			type: M.Completion
		} : {
			invocationId: e,
			result: n,
			type: M.Completion
		};
	}
}, fm = [
	0,
	2e3,
	1e4,
	3e4,
	null
], pm = class {
	constructor(e) {
		this._retryDelays = e === void 0 ? fm : [...e, null];
	}
	nextRetryDelayInMilliseconds(e) {
		return this._retryDelays[e.previousRetryCount];
	}
}, mm = class {};
mm.Authorization = "Authorization", mm.Cookie = "Cookie";
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/ITransport.js
var hm;
(function(e) {
	e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
})(hm ||= {});
var gm;
(function(e) {
	e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
})(gm ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/AbortController.js
var _m = class {
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
}, vm = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._pollAbort = new _m(), this._options = r, this._running = !1, this.onreceive = null, this.onclose = null;
	}
	get pollAborted() {
		return this._pollAbort.aborted;
	}
	async connect(e, t) {
		if (zp.isRequired(e, "url"), zp.isRequired(t, "transferFormat"), zp.isIn(t, gm, "transferFormat"), this._url = e, this._logger.log(j.Trace, "(LongPolling transport) Connecting."), t === gm.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string") throw Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
		let [n, r] = Jp(), i = {
			[n]: r,
			...this._options.headers
		}, a = {
			abortSignal: this._pollAbort.signal,
			headers: i,
			timeout: 1e5,
			withCredentials: this._options.withCredentials
		};
		t === gm.Binary && (a.responseType = "arraybuffer");
		let o = await this._getAccessToken();
		this._updateHeaderToken(a, o);
		let s = `${e}&_=${Date.now()}`;
		this._logger.log(j.Trace, `(LongPolling transport) polling: ${s}.`);
		let c = await this._httpClient.get(s, a);
		c.statusCode === 200 ? this._running = !0 : (this._logger.log(j.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new Dp(c.statusText || "", c.statusCode), this._running = !1), this._receiving = this._poll(this._url, a);
	}
	async _getAccessToken() {
		return this._accessTokenFactory ? await this._accessTokenFactory() : null;
	}
	_updateHeaderToken(e, t) {
		if (e.headers ||= {}, t) {
			e.headers[mm.Authorization] = `Bearer ${t}`;
			return;
		}
		e.headers[mm.Authorization] && delete e.headers[mm.Authorization];
	}
	async _poll(e, t) {
		try {
			for (; this._running;) {
				let n = await this._getAccessToken();
				this._updateHeaderToken(t, n);
				try {
					let n = `${e}&_=${Date.now()}`;
					this._logger.log(j.Trace, `(LongPolling transport) polling: ${n}.`);
					let r = await this._httpClient.get(n, t);
					r.statusCode === 204 ? (this._logger.log(j.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : r.statusCode === 200 ? r.content ? (this._logger.log(j.Trace, `(LongPolling transport) data received. ${Vp(r.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(j.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._logger.log(j.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new Dp(r.statusText || "", r.statusCode), this._running = !1);
				} catch (e) {
					this._running ? e instanceof Op ? this._logger.log(j.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = e, this._running = !1) : this._logger.log(j.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
				}
			}
		} finally {
			this._logger.log(j.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
		}
	}
	async send(e) {
		return this._running ? Wp(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	async stop() {
		this._logger.log(j.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
		try {
			await this._receiving, this._logger.log(j.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
			let e = {}, [t, n] = Jp();
			e[t] = n;
			let r = {
				headers: {
					...e,
					...this._options.headers
				},
				timeout: this._options.timeout,
				withCredentials: this._options.withCredentials
			}, i = await this._getAccessToken();
			this._updateHeaderToken(r, i), await this._httpClient.delete(this._url, r), this._logger.log(j.Trace, "(LongPolling transport) DELETE request sent.");
		} finally {
			this._logger.log(j.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
		}
	}
	_raiseOnClose() {
		if (this.onclose) {
			let e = "(LongPolling transport) Firing onclose event.";
			this._closeError && (e += " Error: " + this._closeError), this._logger.log(j.Trace, e), this.onclose(this._closeError);
		}
	}
}, ym = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._options = r, this.onreceive = null, this.onclose = null;
	}
	async connect(e, t) {
		if (zp.isRequired(e, "url"), zp.isRequired(t, "transferFormat"), zp.isIn(t, gm, "transferFormat"), this._logger.log(j.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			let i = !1;
			if (t !== gm.Text) {
				r(/* @__PURE__ */ Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
				return;
			}
			let a;
			if (Bp.isBrowser || Bp.isWebWorker) a = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
			else {
				let t = this._httpClient.getCookieString(e), n = {};
				n.Cookie = t;
				let [r, i] = Jp();
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
						this._logger.log(j.Trace, `(SSE transport) data received. ${Vp(e.data, this._options.logMessageContent)}.`), this.onreceive(e.data);
					} catch (e) {
						this._close(e);
						return;
					}
				}, a.onerror = (e) => {
					i ? this._close() : r(/* @__PURE__ */ Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
				}, a.onopen = () => {
					this._logger.log(j.Information, `SSE connected to ${this._url}`), this._eventSource = a, i = !0, n();
				};
			} catch (e) {
				r(e);
				return;
			}
		});
	}
	async send(e) {
		return this._eventSource ? Wp(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	stop() {
		return this._close(), Promise.resolve();
	}
	_close(e) {
		this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
	}
}, bm = class {
	constructor(e, t, n, r, i, a) {
		this._logger = n, this._accessTokenFactory = t, this._logMessageContent = r, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = a;
	}
	async connect(e, t) {
		if (zp.isRequired(e, "url"), zp.isRequired(t, "transferFormat"), zp.isIn(t, gm, "transferFormat"), this._logger.log(j.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			e = e.replace(/^http/, "ws");
			let i, a = this._httpClient.getCookieString(e), o = !1;
			if (Bp.isNode) {
				let t = {}, [n, r] = Jp();
				t[n] = r, a && (t[mm.Cookie] = `${a}`), i = new this._webSocketConstructor(e, void 0, { headers: {
					...t,
					...this._headers
				} });
			}
			i ||= new this._webSocketConstructor(e), t === gm.Binary && (i.binaryType = "arraybuffer"), i.onopen = (t) => {
				this._logger.log(j.Information, `WebSocket connected to ${e}.`), this._webSocket = i, o = !0, n();
			}, i.onerror = (e) => {
				let t = null;
				t = typeof ErrorEvent < "u" && e instanceof ErrorEvent ? e.error : "There was an error with the transport", this._logger.log(j.Information, `(WebSockets transport) ${t}.`);
			}, i.onmessage = (e) => {
				if (this._logger.log(j.Trace, `(WebSockets transport) data received. ${Vp(e.data, this._logMessageContent)}.`), this.onreceive) try {
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
		return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(j.Trace, `(WebSockets transport) sending data. ${Vp(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
	}
	stop() {
		return this._webSocket && this._close(void 0), Promise.resolve();
	}
	_close(e) {
		this._webSocket &&= (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), void 0), this._logger.log(j.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(/* @__PURE__ */ Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
	}
	_isCloseEvent(e) {
		return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
	}
}, xm = 100, Sm = class {
	constructor(e, t = {}) {
		if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, zp.isRequired(e, "url"), this._logger = Gp(t.logger), this.baseUrl = this._resolveUrl(e), t ||= {}, t.logMessageContent = t.logMessageContent !== void 0 && t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0) t.withCredentials = t.withCredentials === void 0 || t.withCredentials;
		else throw Error("withCredentials option was not a 'boolean' or 'undefined' value");
		t.timeout = t.timeout === void 0 ? 1e5 : t.timeout;
		let r = null, i = null;
		if (Bp.isNode && n !== void 0) {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			r = e("ws"), i = e("eventsource");
		}
		!Bp.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : Bp.isNode && !t.WebSocket && r && (t.WebSocket = r), !Bp.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : Bp.isNode && !t.EventSource && i !== void 0 && (t.EventSource = i), this._httpClient = t.httpClient || new im(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
	}
	async start(e) {
		if (e ||= gm.Binary, zp.isIn(e, gm, "transferFormat"), this._logger.log(j.Debug, `Starting connection with transfer format '${gm[e]}'.`), this._connectionState !== "Disconnected") return Promise.reject(/* @__PURE__ */ Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
		if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
			let e = "Failed to start the HttpConnection before stop() was called.";
			return this._logger.log(j.Error, e), await this._stopPromise, Promise.reject(/* @__PURE__ */ Error(e));
		}
		if (this._connectionState !== "Connected") {
			let e = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
			return this._logger.log(j.Error, e), Promise.reject(/* @__PURE__ */ Error(e));
		}
		this._connectionStarted = !0;
	}
	send(e) {
		return this._connectionState === "Connected" ? (this._sendQueue ||= new wm(this.transport), this._sendQueue.send(e)) : Promise.reject(/* @__PURE__ */ Error("Cannot send data if the connection is not in the 'Connected' State."));
	}
	async stop(e) {
		if (this._connectionState === "Disconnected") return this._logger.log(j.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
		if (this._connectionState === "Disconnecting") return this._logger.log(j.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
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
				this._logger.log(j.Error, `HttpConnection.transport.stop() threw error '${e}'.`), this._stopConnection();
			}
			this.transport = void 0;
		} else this._logger.log(j.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
	}
	async _startInternal(e) {
		let t = this.baseUrl;
		this._accessTokenFactory = this._options.accessTokenFactory;
		try {
			if (this._options.skipNegotiation) {
				if (this._options.transport === hm.WebSockets) this.transport = this._constructTransport(hm.WebSockets), await this._startTransport(t, e);
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
				} while (n.url && r < xm);
				if (r === xm && n.url) throw Error("Negotiate redirection limit exceeded.");
				await this._createTransport(t, this._options.transport, n, e);
			}
			this.transport instanceof vm && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(j.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
		} catch (e) {
			return this._logger.log(j.Error, "Failed to start the connection: " + e), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(e);
		}
	}
	async _getNegotiationResponse(e) {
		let t = {};
		if (this._accessTokenFactory) {
			let e = await this._accessTokenFactory();
			e && (t[mm.Authorization] = `Bearer ${e}`);
		}
		let [n, r] = Jp();
		t[n] = r;
		let i = this._resolveNegotiateUrl(e);
		this._logger.log(j.Debug, `Sending negotiation request: ${i}.`);
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
			return e instanceof Dp && e.statusCode === 404 && (t += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(j.Error, t), Promise.reject(new Np(t));
		}
	}
	_createConnectUrl(e, t) {
		return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
	}
	async _createTransport(e, t, n, r) {
		let i = this._createConnectUrl(e, n.connectionToken);
		if (this._isITransport(t)) {
			this._logger.log(j.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(i, r), this.connectionId = n.connectionId;
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
					if (this._logger.log(j.Error, `Failed to start the transport '${n.transport}': ${e}`), s = void 0, a.push(new Mp(`${n.transport} failed: ${e}`, hm[n.transport])), this._connectionState !== "Connecting") {
						let e = "Failed to select transport before stop() was called.";
						return this._logger.log(j.Debug, e), Promise.reject(/* @__PURE__ */ Error(e));
					}
				}
			}
		}
		return a.length > 0 ? Promise.reject(new Pp(`Unable to connect to the server with any of the available transports. ${a.join(" ")}`, a)) : Promise.reject(/* @__PURE__ */ Error("None of the transports supported by the client are supported by the server."));
	}
	_constructTransport(e) {
		switch (e) {
			case hm.WebSockets:
				if (!this._options.WebSocket) throw Error("'WebSocket' is not supported in your environment.");
				return new bm(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
			case hm.ServerSentEvents:
				if (!this._options.EventSource) throw Error("'EventSource' is not supported in your environment.");
				return new ym(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			case hm.LongPolling: return new vm(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			default: throw Error(`Unknown transport: ${e}.`);
		}
	}
	_startTransport(e, t) {
		return this.transport.onreceive = this.onreceive, this.transport.onclose = (e) => this._stopConnection(e), this.transport.connect(e, t);
	}
	_resolveTransportOrError(e, t, n) {
		let r = hm[e.transport];
		if (r == null) return this._logger.log(j.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), /* @__PURE__ */ Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
		if (Cm(t, r)) {
			if (e.transferFormats.map((e) => gm[e]).indexOf(n) >= 0) {
				if (r === hm.WebSockets && !this._options.WebSocket || r === hm.ServerSentEvents && !this._options.EventSource) return this._logger.log(j.Debug, `Skipping transport '${hm[r]}' because it is not supported in your environment.'`), new Ap(`'${hm[r]}' is not supported in your environment.`, r);
				this._logger.log(j.Debug, `Selecting transport '${hm[r]}'.`);
				try {
					return this._constructTransport(r);
				} catch (e) {
					return e;
				}
			}
			return this._logger.log(j.Debug, `Skipping transport '${hm[r]}' because it does not support the requested transfer format '${gm[n]}'.`), /* @__PURE__ */ Error(`'${hm[r]}' does not support ${gm[n]}.`);
		}
		return this._logger.log(j.Debug, `Skipping transport '${hm[r]}' because it was disabled by the client.`), new jp(`'${hm[r]}' is disabled by the client.`, r);
	}
	_isITransport(e) {
		return e && typeof e == "object" && "connect" in e;
	}
	_stopConnection(e) {
		if (this._logger.log(j.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
			this._logger.log(j.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
			return;
		}
		if (this._connectionState === "Connecting") throw this._logger.log(j.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
		if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(j.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(j.Information, "Connection disconnected."), this._sendQueue &&= (this._sendQueue.stop().catch((e) => {
			this._logger.log(j.Error, `TransportSendQueue.stop() threw error '${e}'.`);
		}), void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
			this._connectionStarted = !1;
			try {
				this.onclose && this.onclose(e);
			} catch (t) {
				this._logger.log(j.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
			}
		}
	}
	_resolveUrl(e) {
		if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0) return e;
		if (!Bp.isBrowser) throw Error(`Cannot resolve '${e}'.`);
		let t = window.document.createElement("a");
		return t.href = e, this._logger.log(j.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
	}
	_resolveNegotiateUrl(e) {
		let t = e.indexOf("?"), n = e.substring(0, t === -1 ? e.length : t);
		return n[n.length - 1] !== "/" && (n += "/"), n += "negotiate", n += t === -1 ? "" : e.substring(t), n.indexOf("negotiateVersion") === -1 && (n += t === -1 ? "?" : "&", n += "negotiateVersion=" + this._negotiateVersion), n;
	}
};
function Cm(e, t) {
	return !e || (t & e) !== 0;
}
var wm = class e {
	constructor(e) {
		this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Tm(), this._transportResult = new Tm(), this._sendLoopPromise = this._sendLoop();
	}
	send(e) {
		return this._bufferData(e), this._transportResult ||= new Tm(), this._transportResult.promise;
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
			this._sendBufferedData = new Tm();
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
}, Tm = class {
	constructor() {
		this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
	}
	resolve() {
		this._resolver();
	}
	reject(e) {
		this._rejecter(e);
	}
}, Em = "json", Dm = class {
	constructor() {
		this.name = Em, this.version = 1, this.transferFormat = gm.Text;
	}
	parseMessages(e, t) {
		if (typeof e != "string") throw Error("Invalid input for JSON hub protocol. Expected a string.");
		if (!e) return [];
		t === null && (t = Lp.instance);
		let n = am.parse(e), r = [];
		for (let e of n) {
			let n = JSON.parse(e);
			if (typeof n.type != "number") throw Error("Invalid payload.");
			switch (n.type) {
				case M.Invocation:
					this._isInvocationMessage(n);
					break;
				case M.StreamItem:
					this._isStreamItemMessage(n);
					break;
				case M.Completion:
					this._isCompletionMessage(n);
					break;
				case M.Ping: break;
				case M.Close: break;
				default:
					t.log(j.Information, "Unknown message type '" + n.type + "' ignored.");
					continue;
			}
			r.push(n);
		}
		return r;
	}
	writeMessage(e) {
		return am.write(JSON.stringify(e));
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
}, Om = {
	trace: j.Trace,
	debug: j.Debug,
	info: j.Information,
	information: j.Information,
	warn: j.Warning,
	warning: j.Warning,
	error: j.Error,
	critical: j.Critical,
	none: j.None
};
function km(e) {
	let t = Om[e.toLowerCase()];
	if (t !== void 0) return t;
	throw Error(`Unknown log level: ${e}`);
}
var Am = class {
	configureLogging(e) {
		if (zp.isRequired(e, "logging"), jm(e)) this.logger = e;
		else if (typeof e == "string") {
			let t = km(e);
			this.logger = new qp(t);
		} else this.logger = new qp(e);
		return this;
	}
	withUrl(e, t) {
		return zp.isRequired(e, "url"), zp.isNotEmpty(e, "url"), this.url = e, this.httpConnectionOptions = typeof t == "object" ? {
			...this.httpConnectionOptions,
			...t
		} : {
			...this.httpConnectionOptions,
			transport: t
		}, this;
	}
	withHubProtocol(e) {
		return zp.isRequired(e, "protocol"), this.protocol = e, this;
	}
	withAutomaticReconnect(e) {
		if (this.reconnectPolicy) throw Error("A reconnectPolicy has already been set.");
		return this.reconnectPolicy = e ? Array.isArray(e) ? new pm(e) : e : new pm(), this;
	}
	build() {
		let e = this.httpConnectionOptions || {};
		if (e.logger === void 0 && (e.logger = this.logger), !this.url) throw Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
		let t = new Sm(this.url, e);
		return dm.create(t, this.logger || Lp.instance, this.protocol || new Dm(), this.reconnectPolicy);
	}
};
function jm(e) {
	return e.log !== void 0;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/services/live-value.service.js
var Mm = function(e, t, n, r) {
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
}, Nm;
(function(e) {
	e.Running = "Running", e.Success = "Success", e.Failed = "Failed";
})(Nm ||= {});
var Pm;
(function(e) {
	e.ChangeModeAsync = "ChangeModeAsync", e.ChangeIntervalAsync = "ChangeIntervalAsync", e.SubscribeMany = "SubscribeMany";
})(Pm ||= {});
var Fm;
(function(e) {
	e.Send = "Send";
})(Fm ||= {});
var Im;
(function(e) {
	e.S = "S", e.SO = "SO", e.T = "T", e.TC = "TC", e.OP = "OP";
})(Im ||= {});
var Lm = class {
	constructor(e, t) {
		this.httpConfig = e, this.accessToken = t, this._unsub = new Ni(), this._connectionEstablished = new Fi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Ni(), this._subscribeRequested = new Ni(), this._handleSubscriptionQueue();
	}
	connect() {
		return Mm(this, void 0, void 0, function* () {
			let e = yield _o(this.httpConfig);
			return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
		});
	}
	connectWithUrl(e) {
		return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Da(this._connectionEstablished.pipe(Ya((e) => e), to(null)));
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
		let t = e.map((e) => `${Im.OP}:${e}`);
		return this.subscribeLiveValuePackages(t);
	}
	getOperationStatus(e) {
		let t = `${Im.OP}:${e}`;
		return this.subscribeToOperations([e]).pipe(ka((t) => t.find((t) => t.id === e)), Ya((e) => e != null), po((e) => e.status !== Nm.Success && e.status !== Nm.Failed, !0), ao(() => this._unsubscribeIds([t])));
	}
	subscribeLiveValuePackages(e) {
		let t = e.filter((e) => !this._subscribedIds.includes(e));
		this.hubConnection && t.length > 0 && this._enqueueIdsToSubscribe(t);
		let n = this._getCachedValuePackages(e), r = this._livePackageObserver.pipe(ka((t) => t.filter((t) => e.includes(t.identifier))), Ya((e) => e.length > 0));
		return n.length > 0 ? qa(wa(n), r) : r;
	}
	_unsubscribeIds(e) {
		this._subscribedIds = this._subscribedIds.filter((t) => !e.includes(t)), e.forEach((e) => delete this._valueCache[e]);
	}
	_enqueueIdsToSubscribe(e) {
		let t = e.filter((e) => !this._queuedIds.includes(e));
		t.length > 0 && (this._queuedIds.push(...t), this._subscribeRequested.next(null));
	}
	_handleSubscriptionQueue() {
		this._subscribeRequested.pipe(fo(this._unsub), Za(50)).subscribe(() => {
			let e = this._queuedIds;
			this._queuedIds = [], this._sendMessage(Pm.SubscribeMany, e), this._subscribedIds.push(...e);
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
			this._sendMessage(Pm.ChangeModeAsync, !0), this._sendMessage(Pm.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (e) => this._handleHubMessage(e)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
		}).catch((e) => {
			this.hubConnection = null, this._connectionEstablished.error(e), console.log("Failed to start connection: " + e.message);
		}), this.hubConnection.onclose(() => {
			console.log("Hub connection closed"), this.hubConnection = null;
		});
	}
	_buildHubConnection(e) {
		return new Am().withUrl(e, { accessTokenFactory: () => this.getAccessToken() }).build();
	}
	getAccessToken() {
		return _o(this.accessToken);
	}
}, Rm = function(e, t, n, r) {
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
}, zm = class {
	static getSignalValues(e) {
		let t = [];
		return Object.keys(e).forEach((n) => {
			n !== "IntervalStart" && n !== "Manual" && n !== "Note" && n !== "Value" && t.push({
				id: n,
				value: e[n]
			});
		}), t;
	}
}, Bm;
(function(e) {
	e.Manual = "Manual", e.CounterReplacement = "CounterReplacement", e.CounterReadingAlignment = "CounterReadingAlignment";
})(Bm ||= {});
var Vm = class {}, Hm = class {}, Um = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	requestHistoricalValues(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader(), r = yield A.post(`${t}/value/manyflat`, e, { headers: n });
			if (r.status !== 200) throw Error(r.statusText);
			return r.data;
		});
	}
	getHistoricalValues(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return A.post(t + "/value/manyflat", e, { headers: n }).then((e) => e.data);
		});
	}
	getHistoricalValueObjects(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return A.post(t + "/value/many", e, { headers: n }).then((e) => e.data);
		});
	}
	getNearestValue(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return A.post(t + "/value/nearest", e, { headers: n }).then((e) => e.data);
		});
	}
	getNearesValue(e) {
		return Rm(this, void 0, void 0, function* () {
			return this.getNearestValue(e);
		});
	}
	getNthHistoricalValue(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return A.post(t + "/value/nth", e, { headers: n }).then((e) => e.data);
		});
	}
	postManualData(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return A.post(t + "/value/manual", e, { headers: n }).then();
		});
	}
	postNoteEntries(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return A.post(t + "/value/note", e, { headers: n }).then();
		});
	}
	getCounterOffsets(e, t, n) {
		return Rm(this, void 0, void 0, function* () {
			let r = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets?`;
			t && (r += `&$from=${t.toISOString()}`), n && (r += `&$till=${n.toISOString()}`);
			let i = yield this.getAuthorizationHeader();
			return A.get(r, { headers: i }).then((e) => Object.keys(e.data).map((t) => ({
				Date: t,
				Value: e.data[t].Effective,
				Calculated: e.data[t].Calculated,
				Custom: e.data[t].Custom
			})));
		});
	}
	setCustomOffset(e, t) {
		return Rm(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/custom`, r = yield this.getAuthorizationHeader();
			return A.post(n, t, { headers: r }).then();
		});
	}
	deleteCounterOffsets(e, t) {
		return Rm(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/remove`, r = yield this.getAuthorizationHeader();
			return A.post(n, t, { headers: r }).then();
		});
	}
	deleteCustomOffsets(e, t) {
		return Rm(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/custom/remove`, r = yield this.getAuthorizationHeader();
			return A.post(n, t, { headers: r }).then((e) => e.data);
		});
	}
	resetCalculatedValuesAndStatistic(e, t, n = null, r = null, i = !1) {
		return Rm(this, void 0, void 0, function* () {
			let a = `${yield this.getHistorianUrl()}/value/statistics/${e}/reset`, o = yield this.getAuthorizationHeader();
			return A.post(a, {
				From: n ? n.toISOString() : null,
				Till: r ? r.toISOString() : null,
				ResetOffsets: t,
				ResetCustomOffsets: i
			}, { headers: o }).then((e) => e.data);
		});
	}
	importHistoricalValues(e) {
		return Rm(this, void 0, void 0, function* () {
			let t = `${yield this.getHistorianUrl()}/historicalvalueimport/import`, n = yield this.getAuthorizationHeader();
			return A.post(t, { Values: e }, { headers: n }).then((e) => e.data);
		});
	}
	getHistorianUrl() {
		return Rm(this, void 0, void 0, function* () {
			let e = yield _o(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Historian}`;
		});
	}
}, Wm = function(e, t, n, r) {
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
}, Gm = class extends mp {
	constructor(e, t) {
		super(e, t);
	}
	getHistoricalValueOperations(e) {
		return Wm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return yield A.get(`${t}/operations/${e}`, { headers: n }).then((e) => e.data);
		});
	}
	startHistoricalValueOperation(e, t, n, r, i, a) {
		return Wm(this, void 0, void 0, function* () {
			let o = yield this.getBaseUrl(), s = yield this.getAuthorizationHeader();
			return A.post(`${o}/operations/${e}/start`, {
				From: t,
				Till: n,
				Timezone: r,
				OperationScript: i,
				OperationDescription: a
			}, { headers: s }).then((e) => e.data);
		});
	}
	undoHistoricalValueOperation(e) {
		return Wm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return A.put(`${t}/operations/${e}/undo`, null, { headers: n }).then();
		});
	}
	redoHistoricalValueOperation(e) {
		return Wm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return A.put(`${t}/operations/${e}/redo`, null, { headers: n }).then();
		});
	}
	getBaseUrl() {
		return Wm(this, void 0, void 0, function* () {
			let e = yield _o(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Historian}/historicalvaluemanipulation`;
		});
	}
}, Km;
(function(e) {
	e[e.Transient = 0] = "Transient", e[e.Singleton = 1] = "Singleton", e[e.ResolutionScoped = 2] = "ResolutionScoped", e[e.ContainerScoped = 3] = "ContainerScoped";
})(Km ||= {});
var qm = Km, Jm = function(e, t) {
	return Jm = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	}, Jm(e, t);
};
function Ym(e, t) {
	Jm(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Xm(e, t, n, r) {
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
function Zm(e, t) {
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
function Qm(e) {
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
function $m(e, t) {
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
function eh() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat($m(arguments[t]));
	return e;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/class-provider.js
function th(e) {
	return !!e.useClass;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function nh(e) {
	return !!e.useFactory;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/lazy-helpers.js
var rh = function() {
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
				return t[0] = e(), Reflect[n].apply(void 0, eh(t));
			};
		}), t;
	}, e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/injection-token.js
function ih(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function ah(e) {
	return typeof e == "object" && "token" in e && "multiple" in e;
}
function oh(e) {
	return typeof e == "object" && "token" in e && "transform" in e;
}
function sh(e) {
	return typeof e == "function" || e instanceof rh;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/token-provider.js
function ch(e) {
	return !!e.useToken;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/value-provider.js
function lh(e) {
	return e.useValue != null;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/provider.js
function uh(e) {
	return th(e) || lh(e) || ch(e) || nh(e);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/registry-base.js
var dh = function() {
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
}(), fh = function(e) {
	Ym(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(dh), ph = function() {
	function e() {
		this.scopedResolutions = /* @__PURE__ */ new Map();
	}
	return e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/error-helpers.js
function mh(e, t) {
	return e === null ? "at position #" + t : "\"" + e.split(",")[t].trim() + "\" at position #" + t;
}
function hh(e, t, n) {
	return n === void 0 && (n = "    "), eh([e], t.message.split("\n").map(function(e) {
		return n + e;
	})).join("\n");
}
function gh(e, t, n) {
	var r = $m(e.toString().match(/constructor\(([\w, ]+)\)/) || [], 2)[1];
	return hh("Cannot inject the dependency " + mh(r === void 0 ? null : r, t) + " of \"" + e.name + "\" constructor. Reason:", n);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/types/disposable.js
function _h(e) {
	return !(typeof e.dispose != "function" || e.dispose.length > 0);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/interceptors.js
var vh = function(e) {
	Ym(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(dh), yh = function(e) {
	Ym(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(dh), bh = function() {
	function e() {
		this.preResolution = new vh(), this.postResolution = new yh();
	}
	return e;
}(), xh = /* @__PURE__ */ new Map(), Sh = new (function() {
	function e(e) {
		this.parent = e, this._registry = new fh(), this.interceptors = new bh(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
	}
	return e.prototype.register = function(e, t, n) {
		n === void 0 && (n = { lifecycle: qm.Transient }), this.ensureNotDisposed();
		var r = uh(t) ? t : { useClass: t };
		if (ch(r)) for (var i = [e], a = r; a != null;) {
			var o = a.useToken;
			if (i.includes(o)) throw Error("Token registration cycle detected! " + eh(i, [o]).join(" -> "));
			i.push(o);
			var s = this._registry.get(o);
			a = s && ch(s.provider) ? s.provider : null;
		}
		if ((n.lifecycle === qm.Singleton || n.lifecycle == qm.ContainerScoped || n.lifecycle == qm.ResolutionScoped) && (lh(r) || nh(r))) throw Error("Cannot use lifecycle \"" + qm[n.lifecycle] + "\" with ValueProviders or FactoryProviders");
		return this._registry.set(e, {
			provider: r,
			options: n
		}), this;
	}, e.prototype.registerType = function(e, t) {
		return this.ensureNotDisposed(), ih(t) ? this.register(e, { useToken: t }) : this.register(e, { useClass: t });
	}, e.prototype.registerInstance = function(e, t) {
		return this.ensureNotDisposed(), this.register(e, { useValue: t });
	}, e.prototype.registerSingleton = function(e, t) {
		if (this.ensureNotDisposed(), ih(e)) {
			if (ih(t)) return this.register(e, { useToken: t }, { lifecycle: qm.Singleton });
			if (t) return this.register(e, { useClass: t }, { lifecycle: qm.Singleton });
			throw Error("Cannot register a type name as a singleton without a \"to\" token");
		}
		var n = e;
		return t && !ih(t) && (n = t), this.register(e, { useClass: n }, { lifecycle: qm.Singleton });
	}, e.prototype.resolve = function(e, t, n) {
		t === void 0 && (t = new ph()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var r = this.getRegistration(e);
		if (!r && ih(e)) {
			if (n) return;
			throw Error("Attempted to resolve unregistered dependency token: \"" + e.toString() + "\"");
		}
		if (this.executePreResolutionInterceptor(e, "Single"), r) {
			var i = this.resolveRegistration(r, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		if (sh(e)) {
			var i = this.construct(e, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		throw Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
	}, e.prototype.executePreResolutionInterceptor = function(e, t) {
		var n, r;
		if (this.interceptors.preResolution.has(e)) {
			var i = [];
			try {
				for (var a = Qm(this.interceptors.preResolution.getAll(e)), o = a.next(); !o.done; o = a.next()) {
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
				for (var o = Qm(this.interceptors.postResolution.getAll(e)), s = o.next(); !s.done; s = o.next()) {
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
		if (this.ensureNotDisposed(), e.options.lifecycle === qm.ResolutionScoped && t.scopedResolutions.has(e)) return t.scopedResolutions.get(e);
		var n = e.options.lifecycle === qm.Singleton, r = e.options.lifecycle === qm.ContainerScoped, i = n || r, a = lh(e.provider) ? e.provider.useValue : ch(e.provider) ? i ? e.instance ||= this.resolve(e.provider.useToken, t) : this.resolve(e.provider.useToken, t) : th(e.provider) ? i ? e.instance ||= this.construct(e.provider.useClass, t) : this.construct(e.provider.useClass, t) : nh(e.provider) ? e.provider.useFactory(this) : this.construct(e.provider, t);
		return e.options.lifecycle === qm.ResolutionScoped && t.scopedResolutions.set(e, a), a;
	}, e.prototype.resolveAll = function(e, t, n) {
		var r = this;
		t === void 0 && (t = new ph()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var i = this.getAllRegistrations(e);
		if (!i && ih(e)) {
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
			for (var n = Qm(this._registry.entries()), r = n.next(); !r.done; r = n.next()) {
				var i = $m(r.value, 2), a = i[0], o = i[1];
				this._registry.setAll(a, o.filter(function(e) {
					return !lh(e.provider);
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
			for (var i = Qm(this._registry.entries()), a = i.next(); !a.done; a = i.next()) {
				var o = $m(a.value, 2), s = o[0], c = o[1];
				c.some(function(e) {
					return e.options.lifecycle === qm.ContainerScoped;
				}) && r._registry.setAll(s, c.map(function(e) {
					return e.options.lifecycle === qm.ContainerScoped ? {
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
		return Xm(this, void 0, void 0, function() {
			var e;
			return Zm(this, function(t) {
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
		if (e instanceof rh) return e.createProxy(function(e) {
			return n.resolve(e, t);
		});
		var r = (function() {
			var r = xh.get(e);
			if (!r || r.length === 0) {
				if (e.length === 0) return new e();
				throw Error("TypeInfo not known for \"" + e.name + "\"");
			}
			var i = r.map(n.resolveParams(t, e));
			return new (e.bind.apply(e, eh([void 0], i)))();
		})();
		return _h(r) && this.disposables.add(r), r;
	}, e.prototype.resolveParams = function(e, t) {
		var n = this;
		return function(r, i) {
			var a, o, s;
			try {
				return ah(r) ? oh(r) ? r.multiple ? (a = n.resolve(r.transform)).transform.apply(a, eh([n.resolveAll(r.token, new ph(), r.isOptional)], r.transformArgs)) : (o = n.resolve(r.transform)).transform.apply(o, eh([n.resolve(r.token, e, r.isOptional)], r.transformArgs)) : r.multiple ? n.resolveAll(r.token, new ph(), r.isOptional) : n.resolve(r.token, e, r.isOptional) : oh(r) ? (s = n.resolve(r.transform, e)).transform.apply(s, eh([n.resolve(r.token, e)], r.transformArgs)) : n.resolve(r, e);
			} catch (e) {
				throw Error(gh(t, i, e));
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
var Ch = Array.isArray, wh = Array.prototype.indexOf, Th = Array.prototype.includes, Eh = Array.from, Dh = Object.keys, Oh = Object.defineProperty, kh = Object.getOwnPropertyDescriptor, Ah = Object.getOwnPropertyDescriptors, jh = Object.prototype, Mh = Array.prototype, Nh = Object.getPrototypeOf, Ph = Object.isExtensible, Fh = () => {};
function Ih(e) {
	return typeof e?.then == "function";
}
function Lh(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function Rh() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var zh = 1024, Bh = 2048, Vh = 4096, Hh = 8192, Uh = 16384, Wh = 32768, Gh = 1 << 25, Kh = 65536, qh = 1 << 19, Jh = 1 << 20, Yh = 1 << 25, Xh = 65536, Zh = 1 << 21, Qh = 1 << 22, $h = 1 << 23, eg = Symbol("$state"), tg = Symbol("component"), ng = Symbol("legacy props"), rg = Symbol(""), ig = Symbol("attributes"), ag = Symbol("class"), og = Symbol("style"), sg = Symbol("text"), cg = Symbol("form reset"), lg = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ug = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), dg = {}, fg = Symbol("uninitialized"), pg = "http://www.w3.org/1999/xhtml";
function mg() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function hg(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function gg() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var N = !1;
function _g(e) {
	N = e;
}
var P;
function vg(e) {
	if (e === null) throw hg(), dg;
	return P = e;
}
function yg() {
	return vg(/* @__PURE__ */ rv(P));
}
function F(e) {
	if (N) {
		if (/* @__PURE__ */ rv(P) !== null) throw hg(), dg;
		P = e;
	}
}
function bg(e = 1) {
	if (N) {
		for (var t = e, n = P; t--;) n = /* @__PURE__ */ rv(n);
		P = n;
	}
}
function xg(e = !0) {
	for (var t = 0, n = P;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ rv(n);
		e && n.remove(), n = i;
	}
}
function Sg(e) {
	if (!e || e.nodeType !== 8) throw hg(), dg;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Cg(e) {
	return e === this.v;
}
function wg(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Tg(e) {
	return !wg(e, this.v);
}
function Eg(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Dg() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Og(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function kg(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ag() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function jg(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Mg() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ng() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Pg(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Fg() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ig() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Lg() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Rg() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/shared/context.js
function zg(e) {
	let t = e.p;
	for (; t !== null && t.c === null;) t = t.p;
	return t?.c ?? null;
}
function Bg(e, t) {
	return e === null && Eg(t), e.c ??= new Map(zg(e) || void 0);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var Vg = null;
function Hg(e) {
	Vg = e;
}
function Ug(e) {
	return Bg(Vg, "getContext").get(e);
}
function Wg(e, t) {
	return Bg(Vg, "setContext").set(e, t), t;
}
function I(e, t = !1, n) {
	Vg = {
		p: Vg,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l: null
	};
}
function L(e) {
	var t = Vg, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) vv(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, Vg = t.p, Gg(e);
}
function Gg(e = {}) {
	return Oh(e, tg, { value: !0 }), e;
}
function Kg() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var qg = [];
function Jg() {
	var e = qg;
	qg = [], Lh(e);
}
function Yg(e) {
	if (qg.length === 0 && !D_) {
		var t = qg;
		queueMicrotask(() => {
			t === qg && Jg();
		});
	}
	qg.push(e);
}
function Xg() {
	for (; qg.length > 0;) Jg();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Zg = ~(Bh | Vh | zh);
function Qg(e, t) {
	e.f = e.f & Zg | t;
}
function $g(e) {
	e.f & 512 || e.deps === null ? Qg(e, zh) : Qg(e, Vh);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function e_(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= Xh, e_(t.deps));
}
function t_(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), e_(e.deps), Qg(e, zh);
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var n_ = [];
function r_(e, t = Fh) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (wg(e, t) && (e = t, n)) {
			let t = !n_.length;
			for (let t of r) t[1](), n_.push(t, e);
			if (t) {
				for (let e = 0; e < n_.length; e += 2) n_[e][0](n_[e + 1]);
				n_.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = Fh) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || Fh), o(e), () => {
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
var i_ = !1;
function a_(e) {
	var t = i_;
	try {
		return i_ = !1, [e(), i_];
	} finally {
		i_ = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var o_ = !1;
function s_() {
	o_ || (o_ = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[cg]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function c_(e) {
	var t = K, n = q;
	Hv(null), Uv(null);
	try {
		return e();
	} finally {
		Hv(t), Uv(n);
	}
}
function l_(e, t, n, r = n) {
	e.addEventListener(t, () => c_(n));
	let i = e[cg];
	e[cg] = i ? () => {
		i(), r(!0);
	} : () => r(!0), s_();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function u_(e, t, n, r) {
	let i = Kg() ? m_ : __;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = q, c = d_(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				dv(e, s);
			}
			f_();
		}
	}
	var d = p_();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ g_(e))).then(u).catch((e) => dv(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), f_();
	}) : f();
}
function d_() {
	var e = q, t = K, n = Vg, r = z;
	return function(i = !0) {
		Uv(e), Hv(t), Hg(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function f_(e = !0) {
	Uv(null), Hv(null), Hg(null), e && z?.deactivate();
}
function p_() {
	var e = q, t = e.b, n = z, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function m_(e) {
	var t = 2 | Bh;
	return q !== null && (q.f |= qh), {
		ctx: Vg,
		deps: null,
		effects: null,
		equals: Cg,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: fg,
		wv: 0,
		parent: q,
		ac: null
	};
}
var h_ = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function g_(e, t, n) {
	let r = q;
	r === null && Dg();
	var i = void 0, a = U_(fg), o = !K, s = /* @__PURE__ */ new Set();
	return Sv(() => {
		var t = q, n = Rh();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== lg && n.reject(e);
			}).finally(f_);
		} catch (e) {
			n.reject(e), f_();
		}
		var c = z;
		if (o) {
			if (t.f & 32768) var l = p_();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(h_);
			else for (let e of s.values()) e.reject(h_);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== h_ && (c.activate(), t ? (a.f |= $h, G_(a, t)) : (a.f & 8388608 && (a.f ^= $h), G_(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), gv(() => {
		for (let e of s) e.reject(h_);
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
function R(e) {
	let t = /* @__PURE__ */ m_(e);
	return Gv(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function __(e) {
	let t = /* @__PURE__ */ m_(e);
	return t.equals = Tg, t;
}
function v_(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) kv(t[n]);
	}
}
function y_(e) {
	var t, n = q, r = e.parent;
	if (!zv && r !== null && e.v !== fg && r.f & 24576) return mg(), e.v;
	Uv(r);
	try {
		e.f &= ~Xh, v_(e), t = ry(e);
	} finally {
		Uv(n);
	}
	return t;
}
function b_(e) {
	var t = y_(e);
	if (!e.equals(t) && (e.wv = ey(), (!z?.is_fork || e.deps === null) && (z === null ? e.v = t : (z.capture(e, t, !0), w_?.capture(e, t, !0)), e.deps === null))) {
		Qg(e, zh);
		return;
	}
	zv || (T_ === null ? $g(e) : (hv() || z?.is_fork) && T_.set(e, t));
}
function x_(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && c_(() => {
		t.ac.abort(lg), t.ac = null;
	}), t.fn !== null && (t.teardown = Fh), oy(t, 0), Dv(t));
}
function S_(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && sy(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var C_ = null, z = null, w_ = null, T_ = null, E_ = null, D_ = !1, O_ = !1, k_ = null, A_ = null, j_ = 0, M_ = 1, N_ = class e {
	id = M_++;
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
		C_ === null ? C_ = this : (C_.#n = this, this.#t = C_), C_ = this;
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
			for (var r of n.d) Qg(r, Bh), t(r);
			for (r of n.m) Qg(r, Vh), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, j_++ > 1e3 && (this.#x(), P_());
		for (let e of this.#u) this.#d.delete(e), Qg(e, Bh), this.schedule(e);
		for (let e of this.#d) Qg(e, Vh), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = k_ = [], r = [], i = A_ = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw z_(e), this.#h() || this.discard(), t;
		}
		if (z = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (k_ = null, A_ = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) R_(e, t);
			i.length > 0 && z.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), w_ = this, I_(r), I_(n), w_ = null, this.#s?.resolve();
		var s = z;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && (V_.clear(), s.#g());
	}
	#_(e, t, n) {
		e.f ^= zh;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= zh : i & 4 ? t.push(r) : ty(r) && (i & 16 && this.#d.add(r), sy(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), Qg(i, Bh), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), z = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) t_(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== fg && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), T_?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		z = this;
	}
	deactivate() {
		z = null, T_ = null;
	}
	flush() {
		try {
			O_ = !0, z = this, this.#g();
		} finally {
			j_ = 0, E_ = null, k_ = null, A_ = null, O_ = !1, z = null, T_ = null, V_.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(h_);
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
		this.#m || (this.#m = !0, Yg(() => {
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
		return (this.#s ??= Rh()).promise;
	}
	static ensure() {
		if (z === null) {
			let t = z = new e();
			!O_ && !D_ && Yg(() => {
				t.#e || t.flush();
			});
		}
		return z;
	}
	apply() {
		T_ = null;
	}
	schedule(e) {
		if (E_ = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (k_ !== null && t === q && (K === null || !(K.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= zh;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? C_ = e : t.#t = e, this.linked = !1;
		}
	}
};
function B(e) {
	var t = D_;
	D_ = !0;
	try {
		var n;
		for (e && (z !== null && !z.is_fork && z.flush(), n = e());;) {
			if (Xg(), z === null) return n;
			z.flush();
		}
	} finally {
		D_ = t;
	}
}
function P_() {
	try {
		Mg();
	} catch (e) {
		dv(e, E_);
	}
}
var F_ = null;
function I_(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && ty(r) && (F_ = /* @__PURE__ */ new Set(), sy(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && jv(r), F_?.size > 0)) {
				V_.clear();
				for (let e of F_) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) F_.has(n) && (F_.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || sy(n);
					}
				}
				F_.clear();
			}
		}
		F_ = null;
	}
}
function L_(e) {
	z.schedule(e);
}
function R_(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Qg(e, zh);
		for (var n = e.first; n !== null;) R_(n, t), n = n.next;
	}
}
function z_(e) {
	Qg(e, zh);
	for (var t = e.first; t !== null;) z_(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var B_ = /* @__PURE__ */ new Set(), V_ = /* @__PURE__ */ new Map(), H_ = !1;
function U_(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Cg,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function V(e, t) {
	let n = U_(e, t);
	return Gv(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function W_(e, t = !1, n = !0) {
	let r = U_(e);
	return t || (r.equals = Tg), r;
}
function H(e, t, n = !1) {
	return K !== null && (!Vv || K.f & 131072) && Kg() && K.f & 4325394 && (Wv === null || !Wv.has(e)) && Lg(), G_(e, n ? Y_(t) : t, A_);
}
function G_(e, t, n = null) {
	if (!e.equals(t)) {
		zv ? V_.set(e, t) : V_.has(e) || V_.set(e, e.v);
		var r = N_.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && y_(t), T_ === null && $g(t);
		}
		e.wv = ey(), J_(e, Bh, n), Kg() && q !== null && q.f & 1024 && !(q.f & 96) && (Jv === null ? Yv([e]) : Jv.push(e)), !r.is_fork && B_.size > 0 && !H_ && K_();
	}
	return t;
}
function K_() {
	H_ = !1;
	for (let e of B_) {
		e.f & 1024 && Qg(e, Vh);
		let t;
		try {
			t = ty(e);
		} catch {
			t = !0;
		}
		t && sy(e);
	}
	B_.clear();
}
function q_(e) {
	H(e, e.v + 1);
}
function J_(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Kg(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & Bh) === 0;
			if (l && Qg(s, t), c & 131072) B_.add(s);
			else if (c & 2) {
				var u = s;
				T_?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= Xh), J_(u, Vh, n));
			} else if (l) {
				var d = s;
				c & 16 && F_ !== null && F_.add(d), n === null ? L_(d) : n.push(d);
			}
		}
	}
}
function Y_(e) {
	if (typeof e != "object" || !e || eg in e || tg in e) return e;
	let t = Nh(e);
	if (t !== jh && t !== Mh) return e;
	var n = /* @__PURE__ */ new Map(), r = Ch(e), i = /* @__PURE__ */ V(0), a = null, o = Qv, s = (e) => {
		if (Qv === o) return e();
		var t = K, n = Qv;
		Hv(null), $v(o);
		var r = e();
		return Hv(t), $v(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ V(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Fg();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ V(r.value, a);
				return n.set(t, e), e;
			}) : H(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ V(fg, a));
					n.set(t, e), q_(i);
				}
			} else H(r, fg), q_(i);
			return !0;
		},
		get(t, r, i) {
			if (r === eg) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || kh(t, r)?.writable) && (o = s(() => /* @__PURE__ */ V(Y_(c ? t[r] : fg), a)), n.set(r, o)), o !== void 0) {
				var l = J(o);
				return l === fg ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = J(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== fg) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === eg) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== fg || Reflect.has(e, t);
			return (r !== void 0 || q !== null && (!i || kh(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ V(i ? Y_(e[t]) : fg, a)), n.set(t, r)), J(r) === fg) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ V(fg, a)), n.set(d + "", f)) : H(f, fg);
			}
			if (l === void 0) (!u || kh(e, t)?.writable) && (l = s(() => /* @__PURE__ */ V(void 0, a)), H(l, Y_(o)), n.set(t, l));
			else {
				u = l.v !== fg;
				var p = s(() => Y_(o));
				H(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && H(h, g + 1);
				}
				q_(i);
			}
			return !0;
		},
		ownKeys(e) {
			J(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== fg;
			});
			for (var [r, a] of n) a.v !== fg && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Ig();
		}
	});
}
var X_, Z_, Q_, $_;
function ev() {
	if (X_ === void 0) {
		X_ = window, Z_ = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Q_ = kh(t, "firstChild").get, $_ = kh(t, "nextSibling").get, Ph(e) && (e[ag] = void 0, e[ig] = null, e[og] = void 0, e.__e = void 0), Ph(n) && (n[sg] = void 0);
	}
}
function tv(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function nv(e) {
	return Q_.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function rv(e) {
	return $_.call(e);
}
function U(e, t) {
	if (!N) return /* @__PURE__ */ nv(e);
	var n = /* @__PURE__ */ nv(P);
	if (n === null) n = P.appendChild(tv());
	else if (t && n.nodeType !== 3) {
		var r = tv();
		return n?.before(r), vg(r), r;
	}
	return t && lv(n), vg(n), n;
}
function iv(e, t = !1) {
	if (!N) {
		var n = /* @__PURE__ */ nv(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ rv(n) : n;
	}
	if (t) {
		if (P?.nodeType !== 3) {
			var r = tv();
			return P?.before(r), vg(r), r;
		}
		lv(P);
	}
	return P;
}
function av(e, t = !1) {
	if (!N) return /* @__PURE__ */ nv(e);
	var n = U(e, t);
	return F(e), n;
}
function W(e, t = 1, n = !1) {
	let r = N ? P : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ rv(r);
	if (!N) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = tv();
			return r === null ? i?.after(a) : r.before(a), vg(a), a;
		}
		lv(r);
	}
	return vg(r), r;
}
function ov(e) {
	e.textContent = "";
}
function sv() {
	return !1;
}
function cv(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function lv(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function uv(e) {
	var t = q;
	if (t === null) return K.f |= $h, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	dv(e, t);
}
function dv(e, t) {
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
function fv(e) {
	q === null && (K === null && jg(e), Ag()), zv && kg(e);
}
function pv(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function mv(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= Hh);
	var r = {
		ctx: Vg,
		deps: null,
		nodes: null,
		f: e | Bh | 512,
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
	z?.register_created_effect(r);
	var i = r;
	if (e & 4) k_ === null ? N_.ensure().schedule(r) : k_.push(r);
	else if (t !== null) {
		try {
			sy(r);
		} catch (e) {
			throw kv(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= Kh));
	}
	if (i !== null && (i.parent = n, n !== null && pv(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function hv() {
	return K !== null && !Vv;
}
function gv(e) {
	let t = mv(8, null);
	return Qg(t, zh), t.teardown = e, t;
}
function _v(e) {
	fv("$effect");
	var t = q.f;
	if (!K && t & 32 && Vg !== null && !Vg.i) {
		var n = Vg;
		(n.e ??= []).push(e);
	} else return vv(e);
}
function vv(e) {
	return mv(4 | Jh, e);
}
function yv(e) {
	N_.ensure();
	let t = mv(64 | qh, e);
	return () => {
		kv(t);
	};
}
function bv(e) {
	N_.ensure();
	let t = mv(64 | qh, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Mv(t, () => {
			kv(t), n(void 0);
		}) : (kv(t), n(void 0));
	});
}
function xv(e) {
	return mv(4, e);
}
function Sv(e) {
	return mv(Qh | qh, e);
}
function Cv(e, t = 0) {
	return mv(8 | t, e);
}
function G(e, t = [], n = [], r = []) {
	u_(r, t, n, (t) => {
		mv(8, () => {
			e(...t.map(J));
		});
	});
}
function wv(e, t = 0) {
	return mv(16 | t, e);
}
function Tv(e) {
	return mv(32 | qh, e);
}
function Ev(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = zv, r = K;
		Bv(!0), Hv(null);
		try {
			t.call(null);
		} catch (t) {
			dv(t, e.parent);
		} finally {
			Bv(n), Hv(r);
		}
	}
}
function Dv(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && c_(() => {
			e.abort(lg);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : kv(n, t), n = r;
	}
}
function Ov(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || kv(t), t = n;
	}
}
function kv(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Av(e.nodes.start, e.nodes.end), n = !0), e.f |= Gh, Dv(e, t && !n), oy(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Ev(e), e.f ^= Gh, e.f |= Uh;
	var i = e.parent;
	i !== null && i.first !== null && jv(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Av(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ rv(e);
		e.remove(), e = n;
	}
}
function jv(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mv(e, t, n = !0) {
	var r = [];
	e.f |= 256, Nv(e, r, !0);
	var i = () => {
		n && kv(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Nv(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= Hh;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Nv(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Pv(e) {
	e.f &= -257, Fv(e, !0);
}
function Fv(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= Hh, e.f & 1024 || (Qg(e, Bh), N_.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Fv(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Iv(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ rv(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Lv = null, Rv = !1, zv = !1;
function Bv(e) {
	zv = e;
}
var K = null, Vv = !1;
function Hv(e) {
	K = e;
}
var q = null;
function Uv(e) {
	q = e;
}
var Wv = null;
function Gv(e) {
	K !== null && (Wv ??= /* @__PURE__ */ new Set()).add(e);
}
var Kv = null, qv = 0, Jv = null;
function Yv(e) {
	Jv = e;
}
var Xv = 1, Zv = 0, Qv = Zv;
function $v(e) {
	Qv = e;
}
function ey() {
	return ++Xv;
}
function ty(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~Xh), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (ty(a) && b_(a), a.wv > e.wv) return !0;
		}
		t & 512 && T_ === null && Qg(e, zh);
	}
	return !1;
}
function ny(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Wv !== null && Wv.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? ny(a, t, !1) : t === a && (n ? Qg(a, Bh) : a.f & 1024 && Qg(a, Vh), L_(a));
	}
}
function ry(e) {
	var t = Kv, n = qv, r = Jv, i = K, a = Wv, o = Vg, s = Vv, c = Qv, l = e.f;
	Kv = null, qv = 0, Jv = null, K = l & 96 ? null : e, Wv = null, Hg(e.ctx), Vv = !1, Qv = ++Zv, e.ac !== null && (c_(() => {
		e.ac.abort(lg);
	}), e.ac = null);
	try {
		e.f |= Zh;
		var u = e.fn, d = u();
		e.f |= Wh;
		var f = iy(e);
		if (Kg() && Jv !== null && !Vv && f !== null && !(e.f & 6146)) for (var p = 0; p < Jv.length; p++) ny(Jv[p], e);
		if (i !== null && i !== e) {
			if (Zv++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Zv;
			if (t !== null) for (let e of t) e.rv = Zv;
			Jv !== null && (r === null ? r = Jv : r.push(...Jv));
		}
		return e.f & 8388608 && (e.f ^= $h), d;
	} catch (t) {
		return iy(e), uv(t);
	} finally {
		e.f ^= Zh, Kv = t, qv = n, Jv = r, K = i, Wv = a, Hg(o), Vv = s, Qv = c;
	}
}
function iy(e) {
	var t = e.deps, n = z?.is_fork;
	if (Kv !== null) {
		var r;
		if (n || oy(e, qv), t !== null && qv > 0) for (t.length = qv + Kv.length, r = 0; r < Kv.length; r++) t[qv + r] = Kv[r];
		else e.deps = t = Kv;
		if (hv() && e.f & 512) for (r = qv; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && qv < t.length && (oy(e, qv), t.length = qv);
	return t;
}
function ay(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = wh.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Kv === null || !Th.call(Kv, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~Xh), a.v !== fg && $g(a), a.ac !== null && c_(() => {
			a.ac.abort(lg), a.ac = null, Qg(a, Bh);
		}), x_(a), oy(a, 0);
	}
}
function oy(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) ay(e, n[r]);
}
function sy(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Qg(e, zh);
		var n = q, r = Rv;
		q = e, Rv = !(t & 96);
		try {
			t & 16777232 ? Ov(e) : Dv(e), Ev(e);
			var i = ry(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Xv;
		} finally {
			Rv = r, q = n;
		}
	}
}
async function cy() {
	await Promise.resolve(), B();
}
function J(e) {
	var t = !!(e.f & 2);
	if (Lv?.add(e), K !== null && !Vv && !(q !== null && q.f & 16384) && (Wv === null || !Wv.has(e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Zv && (e.rv = Zv, Kv === null && n !== null && n[qv] === e ? qv++ : Kv === null ? Kv = [e] : Kv.push(e));
		else {
			K.deps ??= [], Th.call(K.deps, e) || K.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : Th.call(r, K) || r.push(K);
		}
	}
	if (zv && V_.has(e)) return V_.get(e);
	if (t) {
		var i = e;
		if (zv) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || uy(i)) && (a = y_(i)), V_.set(i, a), a;
		}
		var o = !(i.f & 512) && !Vv && K !== null && (Rv || !!(K.f & 512)), s = (i.f & Wh) === 0;
		ty(i) && (o && (i.f |= 512), b_(i)), o && !s && (S_(i), ly(i));
	}
	if (T_?.has(e)) return T_.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function ly(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (S_(t), ly(t));
}
function uy(e) {
	if (e.v === fg) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (V_.has(t) || t.f & 2 && uy(t)) return !0;
	return !1;
}
function dy(e) {
	var t = Vv;
	try {
		return Vv = !0, e();
	} finally {
		Vv = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var fy = ["touchstart", "touchmove"];
function py(e) {
	return fy.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dev/css.js
var my = Symbol("events"), hy = /* @__PURE__ */ new Set(), gy = /* @__PURE__ */ new Set();
function _y(e, t, n) {
	(t[my] ??= {})[e] = n;
}
function vy(e) {
	for (var t = 0; t < e.length; t++) hy.add(e[t]);
	for (var n of gy) n(e);
}
var yy = null, by = !1;
function xy(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	yy = e, by || (by = !0, setTimeout(() => {
		by = !1, yy = null;
	}));
	var o = 0, s = yy === e && e[my];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[my] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		Oh(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = K, d = q;
		Hv(null), Uv(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[my]?.[r];
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
			e[my] = t, delete e.currentTarget, Hv(u), Uv(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Sy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Cy(e) {
	return Sy?.createHTML(e) ?? e;
}
function wy(e) {
	var t = cv("template");
	return t.innerHTML = Cy(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ty(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Y(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (N) return Ty(P, null), P;
		i === void 0 && (i = wy(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ nv(i)));
		var t = r || Z_ ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ nv(t), s = t.lastChild;
			Ty(o, s);
		} else Ty(t, t);
		return t;
	};
}
function Ey(e = "") {
	if (!N) {
		var t = tv(e + "");
		return Ty(t, t), t;
	}
	var n = P;
	return n.nodeType === 3 ? lv(n) : (n.before(n = tv()), vg(n)), Ty(n, n), n;
}
function Dy() {
	if (N) return Ty(P, null), P;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = tv();
	return e.append(t, n), Ty(t, n), e;
}
function X(e, t) {
	if (N) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = P), yg();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Oy(e) {
	let t = 0, n = U_(0), r;
	return () => {
		hv() && (J(n), Cv(() => (t === 0 && (r = dy(() => e(() => q_(n)))), t += 1, () => {
			Yg(() => {
				--t, t === 0 && (r?.(), r = void 0, q_(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ky = Kh | qh;
function Ay(e, t, n, r) {
	new jy(e, t, n, r);
}
var jy = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = N ? P : null;
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
	#h = Oy(() => (this.#m = U_(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = wv(() => {
			if (N) {
				let e = this.#t;
				yg();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, ky), N && (this.#e = P);
	}
	#g() {
		try {
			this.#a = Tv(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Yg(r), t && (this.#s = Tv(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				gg();
				return;
			}
			t = !0, n && Rg(), this.#s !== null && Mv(this.#s, () => {
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
					dv(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = Tv(() => e(this.#e)), Yg(() => {
			var e = this.#c = document.createDocumentFragment(), t = tv(), n = !1;
			if (e.append(t), this.#a = this.#S(() => {
				try {
					return Tv(() => this.#r(t));
				} catch (e) {
					try {
						this.error(e), n = !0;
					} catch (e) {
						dv(e, this.#i.parent);
					}
					return null;
				}
			}), this.#a === null) {
				this.#c = null, n && this.#x(z);
				return;
			}
			this.#u === 0 && (this.#e.before(e), this.#c = null, Mv(this.#o, () => {
				this.#o = null;
			}), this.#x(z));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = Tv(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Iv(this.#a, e);
				let t = this.#n.pending;
				this.#o = Tv(() => t(this.#e));
			} else this.#x(z);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		t_(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = q, n = K, r = Vg;
		Uv(this.#i), Hv(this.#i), Hg(this.#i.ctx);
		try {
			return N_.ensure(), e();
		} finally {
			Uv(t), Hv(n), Hg(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Mv(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Yg(() => {
			this.#d = !1, this.#m && G_(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), J(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		z?.is_fork ? (this.#a && z.skip_effect(this.#a), this.#o && z.skip_effect(this.#o), this.#s && z.skip_effect(this.#s), z.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (kv(this.#a), null), this.#o &&= (kv(this.#o), null), this.#s &&= (kv(this.#s), null), N && (vg(this.#t), bg(), vg(xg()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return Tv(() => {
						var r = q;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return dv(e, this.#i.parent), null;
				}
			}));
		};
		Yg(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				dv(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => dv(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function Z(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[sg] ??= e.nodeValue) && (e[sg] = n, e.nodeValue = `${n}`);
}
function My(e, t) {
	return Fy(e, t);
}
function Ny(e, t) {
	ev(), t.intro = t.intro ?? !1;
	let n = t.target, r = N, i = P;
	try {
		for (var a = /* @__PURE__ */ nv(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ rv(a);
		if (!a) throw dg;
		_g(!0), vg(a);
		let r = Fy(e, {
			...t,
			anchor: a
		});
		return _g(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== dg && console.warn("Failed to hydrate: ", r), t.recover === !1 && Ng(), ev(), ov(n), _g(!1), My(e, t);
	} finally {
		_g(r), vg(i);
	}
}
var Py = /* @__PURE__ */ new Map();
function Fy(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	ev();
	var c = void 0, l = bv(() => {
		var o = n ?? t.appendChild(tv());
		Ay(o, { pending: () => {} }, (t) => {
			I({});
			var n = Vg;
			if (a && (n.c = a), i && (r.$$events = i), N && Ty(t, null), c = e(t, r) || Gg(), N && (q.nodes.end = P, P === null || P.nodeType !== 8 || P.data !== "]")) throw hg(), dg;
			L();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = py(r);
					for (let e of [t, document]) {
						var a = Py.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Py.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, xy, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(Eh(hy)), gy.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Py.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, xy), r.delete(e), r.size === 0 && Py.delete(n)) : r.set(e, i);
			}
			gy.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Iy.set(c, l), c;
}
var Iy = /* @__PURE__ */ new WeakMap();
function Ly(e, t) {
	let n = Iy.get(e);
	return n ? (Iy.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Ry = class {
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
			if (n) Pv(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Pv(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (kv(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Iv(r, t), t.append(tv()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else kv(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Mv(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (kv(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = z, r = sv();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = tv();
				i.append(a), this.#n.set(e, {
					effect: Tv(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, Tv(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else N && (this.anchor = P), this.#a(n);
	}
}, zy = 0, By = 1, Vy = 2;
function Hy(e, t, n, r, i) {
	N && yg();
	var a = Kg(), o = fg, s = a ? U_(o) : /* @__PURE__ */ W_(o, !1, !1), c = a ? U_(o) : /* @__PURE__ */ W_(o, !1, !1), l = new Ry(e);
	wv(() => {
		var a = z, o = t(), u = !1;
		let d = N && Ih(o) === (e.data === "[!");
		if (d && (vg(xg()), _g(!1)), Ih(o)) {
			var f = d_(), p = !1;
			let e = (e) => {
				if (!u) {
					p = !0, f(!1), z === a && a.deactivate(), N_.ensure();
					try {
						e();
					} finally {
						f_(!1), D_ || B();
					}
				}
			};
			o.then((t) => {
				e(() => {
					G_(s, t), l.ensure(By, r && ((e) => r(e, s)));
				});
			}, (t) => {
				e(() => {
					if (G_(c, t), l.ensure(Vy, i && ((e) => i(e, c))), !i) throw c.v;
				});
			}), N ? l.ensure(zy, n) : Yg(() => {
				p || e(() => {
					l.ensure(zy, n);
				});
			});
		} else G_(s, o), l.ensure(By, r && ((e) => r(e, s)));
		return d && _g(!0), () => {
			u = !0;
		};
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Q(e, t, n = !1) {
	var r;
	N && (r = P, yg());
	var i = new Ry(e), a = n ? Kh : 0;
	function o(e, t) {
		if (N) {
			var n = Sg(r);
			if (e !== parseInt(n.substring(1))) {
				var a = xg();
				vg(a), i.anchor = a, _g(!1), i.ensure(e, t), _g(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	wv(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Uy(e, t) {
	return t;
}
function Wy(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Mv(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Gy(e, Eh(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null && e.pending.size === 0;
		if (c) {
			var l = n, u = l.parentNode;
			ov(u), u.append(l), e.items.clear();
		}
		Gy(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Gy(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= Yh, Iv(a, document.createDocumentFragment())) : kv(t[i], n);
	}
}
var Ky;
function qy(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = N ? vg(/* @__PURE__ */ nv(c)) : c.appendChild(tv());
	}
	N && yg();
	var l = null, u = /* @__PURE__ */ __(() => {
		var e = n();
		return Ch(e) ? e : e == null ? [] : Eh(e);
	}), d, f = /* @__PURE__ */ new Map(), p = !0;
	function m(e) {
		g.effect.f & 16384 || (g.pending.delete(e), g.fallback = l, Yy(g, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= Yh, Zy(l, null, o)) : Pv(l) : Mv(l, () => {
			l = null;
		})));
	}
	function h(e) {
		g.pending.delete(e);
	}
	var g = {
		effect: wv(() => {
			d = J(u);
			var e = d.length;
			let c = !1;
			N && Sg(o) === "[!" != (e === 0) && (o = xg(), vg(o), _g(!1), c = !0);
			for (var g = /* @__PURE__ */ new Set(), _ = z, v = sv(), y = 0; y < e; y += 1) {
				N && P.nodeType === 8 && P.data === "]" && (o = P, c = !0, _g(!1));
				var b = d[y], x = r(b, y), S = p ? null : s.get(x);
				S ? (S.v && G_(S.v, b), S.i && G_(S.i, y), v && _.unskip_effect(S.e)) : (S = Xy(s, p ? o : Ky ??= tv(), b, x, y, i, t, n), p || (S.e.f |= Yh), s.set(x, S)), g.add(x);
			}
			if (e === 0 && a && !l && (p ? l = Tv(() => a(o)) : (l = Tv(() => a(Ky ??= tv())), l.f |= Yh)), e > g.size && Og("", "", ""), N && e > 0 && vg(xg()), !p) {
				if (f.set(_, g), v) {
					for (let [e, t] of s) g.has(e) || _.skip_effect(t.e);
					_.oncommit(m), _.ondiscard(h);
				} else m(_);
			}
			c && _g(!0), J(u);
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	p = !1, N && (o = P);
}
function Jy(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Yy(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, c = Jy(e.effect.first), l, u = null, d, f = [], p = [], m, h, g, _;
	if (a) for (_ = 0; _ < o; _ += 1) m = t[_], h = i(m, _), g = s.get(h).e, g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
	for (_ = 0; _ < o; _ += 1) {
		if (m = t[_], h = i(m, _), g = s.get(h).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
		if (g.f & 8192 && (Pv(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g.f & 33554432) {
			if (g.f ^= Yh, g === c) Zy(g, null, n);
			else {
				var v = u ? u.next : c;
				g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Qy(e, u, g), Qy(e, g, v), Zy(g, v, n), u = g, f = [], p = [], c = Jy(u.next);
				continue;
			}
		}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var y = p[0], b;
					u = y.prev;
					var x = f[0], S = f[f.length - 1];
					for (b = 0; b < f.length; b += 1) Zy(f[b], y, n);
					for (b = 0; b < p.length; b += 1) l.delete(p[b]);
					Qy(e, x.prev, S.next), Qy(e, u, x), Qy(e, S, y), c = y, u = S, --_, f = [], p = [];
				} else l.delete(g), Zy(g, c, n), Qy(e, g.prev, g.next), Qy(e, g, u === null ? e.effect.first : u.next), Qy(e, u, g), u = g;
				continue;
			}
			for (f = [], p = []; c !== null && c !== g;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = Jy(c.next);
			if (c === null) continue;
		}
		g.f & 33554432 || f.push(g), u = g, c = Jy(g.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Gy(e, Eh(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var ee = [];
		if (l !== void 0) for (g of l) g.f & 8192 || ee.push(g);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = Jy(c.next);
		var C = ee.length;
		if (C > 0) {
			var te = r & 4 && o === 0 ? n : null;
			if (a) {
				for (_ = 0; _ < C; _ += 1) ee[_].nodes?.a?.measure();
				for (_ = 0; _ < C; _ += 1) ee[_].nodes?.a?.fix();
			}
			Wy(e, ee, te);
		}
	}
	a && Yg(() => {
		if (d !== void 0) for (g of d) g.nodes?.a?.apply();
	});
}
function Xy(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? U_(n) : /* @__PURE__ */ W_(n, !1, !1) : null, l = o & 2 ? U_(i) : null;
	return {
		v: c,
		i: l,
		e: Tv(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Zy(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ rv(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Qy(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function $y(e, t, ...n) {
	var r = new Ry(e);
	wv(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, Kh);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function eb(e, t) {
	xv(() => {
		e = q?.parent?.nodes?.start ?? e;
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = cv("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var tb = [..." 	\n\r\f\xA0\v﻿"];
function nb(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || tb.includes(r[o - 1])) && (s === r.length || tb.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function rb(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ib(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ab(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ib)), i && c.push(...Object.keys(i).map(ib));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ib(e.substring(l, u).trim());
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
		return r && (n += rb(r)), i && (n += rb(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function ob(e, t, n, r, i, a) {
	var o = e[ag];
	if (N || o !== n || o === void 0) {
		var s = nb(n, r, a);
		(!N || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ag] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function sb(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function cb(e, t, n, r) {
	var i = e[og];
	if (N || i !== t) {
		var a = ab(t, r);
		(!N || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[og] = t;
	} else r && (Array.isArray(r) ? (sb(e, n?.[0], r[0]), sb(e, n?.[1], r[1], "important")) : sb(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var lb = Symbol("is custom element"), ub = Symbol("is html"), db = ug ? "link" : "LINK";
function fb(e) {
	if (N) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					pb(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					pb(e, "checked", null), e.checked = r;
				}
			}
		};
		e[cg] = n, Yg(n), s_();
	}
}
function pb(e, t, n, r) {
	var i = mb(e);
	N && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === db) || i[t] !== (i[t] = n) && (t === "loading" && (e[rg] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && gb(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function mb(e) {
	return e[ig] ??= {
		[lb]: e.nodeName.includes("-"),
		[ub]: e.namespaceURI === pg
	};
}
var hb = /* @__PURE__ */ new Map();
function gb(e) {
	var t = e.getAttribute("is") || e.nodeName, n = hb.get(t);
	if (n) return n;
	hb.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = Ah(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
		i = Nh(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function _b(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	l_(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = vb(e) ? yb(a) : a, n(a), z !== null && r.add(z), await cy(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (N && e.defaultValue !== e.value || dy(t) == null && e.value) && (n(vb(e) ? yb(e.value) : e.value), z !== null && r.add(z)), Cv(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = z;
			if (r.has(i)) return;
		}
		vb(e) && n === yb(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function vb(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function yb(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function bb(e, t) {
	return e === t || e?.[eg] === t;
}
function xb(e = Gg(), t, n, r) {
	var i = Vg.r, a = q;
	return xv(() => {
		var o, s;
		return Cv(() => {
			o = s, s = r?.() || [], dy(() => {
				bb(n(...s), e) || (t(e, ...s), o && bb(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && bb(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ m_(r), J(l)) : (c && (c = !1, s = o ? dy(r) : r), s);
	let d;
	if (a) {
		var f = eg in e || ng in e;
		d = kh(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = a_(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Pg(t), d(p)));
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
	var _ = !1, v = (n & 1 ? m_ : __)(() => (_ = !1, h()));
	a && J(v);
	var y = q;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? J(v) : i && a ? Y_(e) : e;
			return H(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return zv && _ || y.f & 16384 ? v.v : J(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Sb(e) {
	return new Cb(e);
}
var Cb = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ W_(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return J(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === ng || (J(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return H(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Ny : My)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && B(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && Oh(this, e, {
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
			Ly(this.#t);
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
}, wb;
typeof HTMLElement == "function" && (wb = class extends HTMLElement {
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
					let n = cv("slot");
					e !== "default" && (n.name = e), X(t, n);
				};
			}
			let t = {}, n = Eb(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Tb(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Sb({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = yv(() => {
				Cv(() => {
					this.$$r = !0;
					for (let e of Dh(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Tb(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Tb(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return Dh(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Tb(e, t, n, r) {
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
function Eb(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Db(e, t, n, r, i, a) {
	let o = class extends wb {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return Dh(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return Dh(t).forEach((e) => {
		Oh(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Tb(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (kh(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		Oh(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
function Ob(e) {
	Vg === null && Eg("onMount"), _v(() => {
		let t = dy(e);
		if (typeof t == "function") return t;
	});
}
function kb(e) {
	Vg === null && Eg("onDestroy"), Ob(() => () => dy(e));
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/uuid/dist/esm-browser/rng.js
var Ab, jb = /* @__PURE__ */ new Uint8Array(16);
function Mb() {
	if (!Ab && (Ab = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Ab)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Ab(jb);
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/regex.js
var Nb = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
//#endregion
//#region node_modules/uuid/dist/esm-browser/validate.js
function Pb(e) {
	return typeof e == "string" && Nb.test(e);
}
for (var Fb = [], Ib = 0; Ib < 256; ++Ib) Fb.push((Ib + 256).toString(16).substr(1));
function Lb(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Fb[e[t + 0]] + Fb[e[t + 1]] + Fb[e[t + 2]] + Fb[e[t + 3]] + "-" + Fb[e[t + 4]] + Fb[e[t + 5]] + "-" + Fb[e[t + 6]] + Fb[e[t + 7]] + "-" + Fb[e[t + 8]] + Fb[e[t + 9]] + "-" + Fb[e[t + 10]] + Fb[e[t + 11]] + Fb[e[t + 12]] + Fb[e[t + 13]] + Fb[e[t + 14]] + Fb[e[t + 15]]).toLowerCase();
	if (!Pb(n)) throw TypeError("Stringified UUID is invalid");
	return n;
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/v4.js
function Rb(e, t, n) {
	e ||= {};
	var r = e.random || (e.rng || Mb)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (var i = 0; i < 16; ++i) t[n + i] = r[i];
		return t;
	}
	return Lb(r);
}
//#endregion
//#region src/shared/services/popup.service.ts
var zb = {
	backdrop: !0,
	positioning: "center",
	closeOnClickOutside: !0,
	closeOnEscape: !0,
	anchorElement: null,
	customPosition: {
		x: 0,
		y: 0
	}
}, Bb = class {
	_popupContainer;
	rootElement;
	constructor(e) {
		this.rootElement = e, this._popupContainer = {};
	}
	openPopup(e, t, n) {
		n = {
			...zb,
			...n
		}, console.log("openPopup", n);
		let r = Rb(), i = new Ni(), a = this._popupContainer[e] ?? this._createPopupContainer(e, n), o = this._createPopupWrapper(t, n);
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
			afterClosed: Da(i).then(() => console.log("afterClosed")),
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
}, Vb = {
	[vp.toString()]: "TenantHttpService",
	[wp.toString()]: "DataSourceHttpService",
	[gp.toString()]: "EntityHttpService",
	[bp.toString()]: "EntityNameService",
	[mp.toString()]: "BaseHttpService",
	[Lm.toString()]: "LiveValueService"
};
function Hb(e, t = null) {
	let n = Vb[e.toString()] ?? e.toString(), r = window.dependencyContainer ?? Sh;
	if (r.isRegistered(e)) return r.resolve(e);
	if (r.isRegistered(n)) return r.resolve(n);
	if (window[n]) return window[n];
	if (t) return t;
	throw Error(`Service ${n?.toString()} not found`);
}
function Ub(e, t = null) {
	try {
		return Hb(e, t);
	} catch {
		return t;
	}
}
function Wb(e, t, n = !0) {
	let r = window.dependencyContainer ?? Sh;
	try {
		if (r.isRegistered(e) && !n) return;
		r.registerInstance(e, t);
	} catch {
		throw Error(`Failed to register service: ${e?.toString()}`);
	}
	return t;
}
function Gb(e) {
	window.dependencyContainer = e;
}
//#endregion
//#region src/shared/components/icon-button/IconButton.svelte
var Kb = /* @__PURE__ */ Y("<div><span class=\"material-symbols-rounded select-none\"><!></span></div>");
function qb(e, t) {
	I(t, !0);
	let n = $(t, "icon", 7, null), r = $(t, "size", 7, "medium"), i = $(t, "iconSize", 7, null), a = $(t, "variant", 7, "neutral"), o = $(t, "className", 7, ""), s = $(t, "title", 7, null), c = $(t, "disabled", 7, !1), l = $(t, "onclick", 7), u = $(t, "children", 7), d = {
		small: 26,
		medium: 36,
		large: 40
	}, f = /* @__PURE__ */ R(() => typeof r() == "number" ? r() : d[r()]), p = /* @__PURE__ */ R(() => i() ?? Math.round(J(f) * .55));
	function m(e) {
		c() || l()?.(e);
	}
	var h = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), B();
		},
		get size() {
			return r();
		},
		set size(e = "medium") {
			r(e), B();
		},
		get iconSize() {
			return i();
		},
		set iconSize(e = null) {
			i(e), B();
		},
		get variant() {
			return a();
		},
		set variant(e = "neutral") {
			a(e), B();
		},
		get className() {
			return o();
		},
		set className(e = "") {
			o(e), B();
		},
		get title() {
			return s();
		},
		set title(e = null) {
			s(e), B();
		},
		get disabled() {
			return c();
		},
		set disabled(e = !1) {
			c(e), B();
		},
		get onclick() {
			return l();
		},
		set onclick(e) {
			l(e), B();
		},
		get children() {
			return u();
		},
		set children(e) {
			u(e), B();
		}
	}, g = Kb();
	let _;
	var v = U(g), y = U(v), b = (e) => {
		var t = Dy();
		$y(iv(t), u), X(e, t);
	}, x = (e) => {
		var t = Ey();
		G(() => Z(t, n())), X(e, t);
	};
	return Q(y, (e) => {
		u() ? e(b) : e(x, -1);
	}), F(v), F(g), G(() => {
		pb(g, "title", s()), _ = ob(g, 1, `flex shrink-0 flex-col items-center justify-center rounded-full transition-colors ${o() ?? ""}`, null, _, {
			"cursor-pointer": !c(),
			"cursor-default": c(),
			"text-primary": a() === "primary" && !c(),
			"text-ink-secondary": a() === "neutral" && !c(),
			"text-ink-disabled": c(),
			"hover:bg-primary-tint": a() === "primary" && !c(),
			"hover:bg-neutral-hover": a() === "neutral" && !c()
		}), cb(g, `height: ${J(f) ?? ""}px; width: ${J(f) ?? ""}px;`), cb(v, `font-size: ${J(p) ?? ""}px;`);
	}), _y("click", g, (e) => m(e)), X(e, g), L(h);
}
vy(["click"]), Db(qb, {
	icon: {},
	size: {},
	iconSize: {},
	variant: {},
	className: {},
	title: {},
	disabled: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/tenant-select/TenantSelect.svelte
var Jb = /* @__PURE__ */ Y("<span class=\"text-ink-tertiary\">/</span>"), Yb = /* @__PURE__ */ Y("<span> </span> <!>", 1), Xb = /* @__PURE__ */ Y("<div class=\"truncate text-sub text-ink-tertiary\">nur Untermandanten</div>"), Zb = /* @__PURE__ */ Y("<div class=\"flex cursor-pointer items-center gap-3 border-b border-row-line px-4 py-[10px] transition-colors last:border-b-0 hover:bg-row-hover\"><div class=\"flex h-9 w-9 flex-none items-center justify-center rounded-control bg-muted\"><span class=\"material-symbols-rounded select-none text-[20px] text-ink-secondary\">domain</span></div> <div class=\"min-w-0 flex-1\"><div class=\"truncate text-cell text-ink\"> </div> <!></div> <!> <span class=\"material-symbols-rounded select-none text-[20px] text-ink-tertiary\">chevron_right</span></div>"), Qb = /* @__PURE__ */ Y("<div class=\"flex flex-col items-center gap-2 py-10\"><span class=\"material-symbols-rounded select-none text-[24px] text-ink-tertiary\">search_off</span> <div class=\"text-cell text-ink-secondary\">Keine Mandanten gefunden</div></div>"), $b = /* @__PURE__ */ Y("<div class=\"flex h-full w-full flex-col overflow-hidden px-5 py-[14px]\"><div class=\"mb-3 flex items-start gap-2\"><!> <div class=\"min-w-0 flex-1\"><div class=\"text-section text-ink\">Mandant auswählen</div> <div class=\"mt-[2px] flex flex-wrap items-center text-meta text-ink-secondary\"></div></div> <div class=\"flex h-10 w-[280px] flex-none items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Filter\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div></div> <div class=\"min-h-0 flex-1 overflow-auto rounded-dialog border border-line\"><!> <!></div></div>");
function ex(e, t) {
	I(t, !0);
	let n = Hb(vp), r = $(t, "allowBack", 7, !1), i = $(t, "ontenantSelected", 7), a = $(t, "onback", 7), o = /* @__PURE__ */ V(Y_([])), s = /* @__PURE__ */ V(Y_([])), c = /* @__PURE__ */ V(""), l = /* @__PURE__ */ R(() => J(c) ? J(s).filter((e) => e.Name?.toLowerCase().includes(J(c).toLowerCase())) : J(s));
	async function u() {
		let e = await n.getTopTenants();
		if (e.length === 1) {
			let t = e[0];
			if (t.Root == null) {
				f(t);
				return;
			}
		}
		H(o, [new wr({
			Id: "start",
			Name: "Start"
		})], !0), H(s, e, !0);
	}
	async function d(e) {
		let t = await n.getNextTenants(e.Id);
		H(s, t, !0);
	}
	async function f(e) {
		H(c, ""), H(o, [...J(o), e], !0), d(e);
	}
	async function p(e) {
		if (H(c, ""), e.Id == "start") {
			u();
			return;
		}
		let t = J(o).findIndex((t) => t.Id === e.Id);
		H(o, J(o).slice(0, t + 1), !0), d(e);
	}
	function m(e, t) {
		e.stopPropagation(), i()?.(t);
	}
	u();
	var h = {
		get allowBack() {
			return r();
		},
		set allowBack(e = !1) {
			r(e), B();
		},
		get ontenantSelected() {
			return i();
		},
		set ontenantSelected(e) {
			i(e), B();
		},
		get onback() {
			return a();
		},
		set onback(e) {
			a(e), B();
		}
	}, g = $b(), _ = U(g), v = U(_), y = (e) => {
		qb(e, {
			size: 36,
			iconSize: 20,
			icon: "arrow_back",
			onclick: () => a()?.()
		});
	};
	Q(v, (e) => {
		r() && e(y);
	});
	var b = W(v, 2), x = W(U(b), 2);
	qy(x, 21, () => J(o), Uy, (e, t, n) => {
		var r = Yb(), i = iv(r), a = av(i, !0), s = W(i, 2), c = (e) => {
			X(e, Jb());
		};
		Q(s, (e) => {
			n < J(o).length - 1 && e(c);
		}), G(() => {
			ob(i, 1, `cursor-pointer rounded-[4px] px-1 py-[2px] transition-colors hover:bg-neutral-hover ${n === J(o).length - 1 ? "font-medium text-ink" : ""}`), Z(a, J(t).Name);
		}), _y("click", i, () => p(J(t))), X(e, r);
	}), F(x), F(b);
	var S = W(b, 2), ee = U(S);
	fb(ee), bg(2), F(S), F(_);
	var C = W(_, 2), te = U(C);
	qy(te, 17, () => J(l), (e) => e.Id, (e, t) => {
		var n = Zb(), r = W(U(n), 2), i = U(r), a = av(i, !0), o = W(i, 2), s = (e) => {
			X(e, Xb());
		};
		Q(o, (e) => {
			J(t).Root || e(s);
		}), F(r);
		var c = W(r, 2), l = (e) => {
			qb(e, {
				size: 36,
				iconSize: 20,
				variant: "primary",
				icon: "check",
				title: "Mandant übernehmen",
				onclick: (e) => m(e, J(t))
			});
		};
		Q(c, (e) => {
			J(t).Root && e(l);
		}), bg(2), F(n), G(() => Z(a, J(t)?.Name)), _y("click", n, () => f(J(t))), X(e, n);
	});
	var ne = W(te, 2), re = (e) => {
		X(e, Qb());
	};
	return Q(ne, (e) => {
		J(l).length === 0 && e(re);
	}), F(C), F(g), _b(ee, () => J(c), (e) => H(c, e)), X(e, g), L(h);
}
vy(["click"]), Db(ex, {
	allowBack: {},
	ontenantSelected: {},
	onback: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-meta.ts
var tx = {
	icon: "category",
	singular: "Eintrag",
	plural: "Einträge"
}, nx = {
	[r.Group]: {
		icon: "folder",
		singular: "Gruppe",
		plural: "Gruppen"
	},
	[r.Signal]: {
		icon: "show_chart",
		singular: "Signal",
		plural: "Signale"
	},
	[r.Formula]: {
		icon: "functions",
		singular: "Formel",
		plural: "Formeln"
	},
	[r.Dashboard]: {
		icon: "dashboard",
		singular: "Dashboard",
		plural: "Dashboards"
	},
	[r.DataConnection]: {
		icon: "data_usage",
		singular: "Datenverbindung",
		plural: "Datenverbindungen"
	},
	[r.DataSource]: {
		icon: "storage",
		singular: "Datenquelle",
		plural: "Datenquellen"
	},
	[r.Connector]: {
		icon: "cable",
		singular: "Konnektor",
		plural: "Konnektoren"
	},
	[r.EventCondition]: {
		icon: "rule",
		singular: "Bedingung",
		plural: "Bedingungen"
	},
	[r.EventDefinition]: {
		icon: "notifications",
		singular: "Ereignis",
		plural: "Ereignisse"
	},
	[r.EventCategory]: {
		icon: "label",
		singular: "Ereigniskategorie",
		plural: "Ereigniskategorien"
	},
	[r.ProcessImage]: {
		icon: "image",
		singular: "Prozessbild",
		plural: "Prozessbilder"
	},
	[r.ReportTemplate]: {
		icon: "description",
		singular: "Berichtsvorlage",
		plural: "Berichtsvorlagen"
	},
	[r.Report]: {
		icon: "summarize",
		singular: "Bericht",
		plural: "Berichte"
	},
	[r.Document]: {
		icon: "draft",
		singular: "Dokument",
		plural: "Dokumente"
	},
	[r.Storage]: {
		icon: "inventory_2",
		singular: "Speicher",
		plural: "Speicher"
	},
	[r.Camera]: {
		icon: "photo_camera",
		singular: "Kamera",
		plural: "Kameras"
	},
	[r.SwitchSchedule]: {
		icon: "schedule",
		singular: "Schaltplan",
		plural: "Schaltpläne"
	},
	[r.User]: {
		icon: "person",
		singular: "Benutzer",
		plural: "Benutzer"
	},
	[r.Role]: {
		icon: "admin_panel_settings",
		singular: "Rolle",
		plural: "Rollen"
	},
	[r.Recipient]: {
		icon: "contact_mail",
		singular: "Empfänger",
		plural: "Empfänger"
	},
	[r.RecipientGroup]: {
		icon: "groups",
		singular: "Empfängergruppe",
		plural: "Empfängergruppen"
	},
	[r.AlarmingPlan]: {
		icon: "notification_important",
		singular: "Alarmplan",
		plural: "Alarmpläne"
	},
	[r.MaintenanceService]: {
		icon: "build",
		singular: "Wartung",
		plural: "Wartungen"
	},
	[r.TaskDefinition]: {
		icon: "task",
		singular: "Aufgabe",
		plural: "Aufgaben"
	},
	[r.RuntimeScript]: {
		icon: "code",
		singular: "Skript",
		plural: "Skripte"
	}
};
function rx(e) {
	return nx[e] ?? tx;
}
//#endregion
//#region node_modules/@ngneat/elf/index.esm.js
function ix(...e) {
	let t = {
		config: {},
		state: {}
	};
	for (let { config: n, props: r } of e) Object.assign(t.config, n), Object.assign(t.state, r);
	return t;
}
var ax = new Fi(!1), ox = ax.asObservable().pipe(Ya((e) => !e), eo(1)), sx = {};
new class {
	registerPreStoreUpdate(e) {
		sx.preStoreUpdate = e;
	}
	registerPreStateInit(e) {
		sx.preStateInit = e;
	}
}();
var cx = /* @__PURE__ */ new Map(), lx = new Ni();
lx.asObservable();
function ux(e) {
	cx.set(e.name, e), lx.next({
		type: "add",
		store: e
	});
}
function dx(e) {
	cx.delete(e.name), lx.next({
		type: "remove",
		store: e
	});
}
function fx() {
	return cx;
}
var px = [];
function mx(e) {
	px.push(e);
}
function hx(e) {
	px.length && px.forEach((t) => e.next(t)), px = [];
}
var gx = class extends Fi {
	constructor(e) {
		super(e.state), this.storeDef = e, this.initialState = void 0, this.state = void 0, this.batchInProgress = !1, this.events = new Ni(), this.context = {
			config: this.getConfig(),
			setEvent: (e) => {
				mx(e);
			}
		}, this.events$ = this.events.asObservable(), this.state = this.getInitialState(e.state), this.initialState = this.getValue(), ux(this);
	}
	get name() {
		return this.storeDef.name;
	}
	getInitialState(e) {
		return sx.preStateInit ? sx.preStateInit(e, this.name) : e;
	}
	getConfig() {
		return this.storeDef.config;
	}
	query(e) {
		return e(this.getValue());
	}
	update(...e) {
		let t = this.getValue(), n = e.reduce((e, t) => (e = t(e, this.context), e), t);
		sx.preStoreUpdate && (n = sx.preStoreUpdate(t, n, this.name)), n !== t && (this.state = n, ax.getValue() ? this.batchInProgress || (this.batchInProgress = !0, ox.subscribe(() => {
			super.next(this.state), hx(this.events), this.batchInProgress = !1;
		})) : (super.next(this.state), hx(this.events)));
	}
	getValue() {
		return this.state;
	}
	reset() {
		this.update(() => this.initialState);
	}
	combine(e) {
		let t = !0, n = {};
		return new wi((r) => {
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
		dx(this), this.reset();
	}
	next(e) {
		this.update(() => e);
	}
	error() {}
	complete() {}
};
function _x(e, ...t) {
	let { state: n, config: r } = ix(...t), { name: i } = e;
	return new gx({
		name: i,
		state: n,
		config: r
	});
}
function vx(e) {
	return {
		props: e,
		config: void 0
	};
}
//#endregion
//#region node_modules/@ngneat/elf-persist-state/index.esm.js
function yx(e, t) {
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
		initialized$: wa(!1),
		unsubscribe() {}
	};
	let { storage: r } = t, i = new Li(1), a = Ca(r.getItem(n.key)).subscribe((t) => {
		t && e.update((e) => n.preStoreInit({
			...e,
			...t
		})), i.next(!0), i.complete();
	}), o = n.source(e).pipe(lo(1), uo((t) => {
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
function bx(e) {
	if (e) return {
		getItem(t) {
			let n = e.getItem(t);
			return wa(n && JSON.parse(n));
		},
		setItem(t, n) {
			return e.setItem(t, JSON.stringify(n)), wa(!0);
		},
		removeItem(t) {
			return e.removeItem(t), wa(!0);
		}
	};
}
var xx = bx((() => {
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
var Sx = r_(r.Signal), { config: Cx, state: wx } = ix(vx({
	queryWithSubGroups: !0,
	selectedTenant: null,
	pageSize: 25
})), Tx = _x({ name: "entity-select-selection" }, vx({ selectedEntities: [] })), Ex = new gx({
	state: wx,
	config: Cx,
	name: "entity-select-global"
});
yx(Ex, {
	key: "entity-select-global",
	storage: xx
});
var Dx = (e) => {
	let t = fx().get(`entity-select-type-${Sx}`);
	if (t) return t;
	let { state: n, config: r } = ix(vx({
		filter: null,
		selectedGroup: null,
		lastSelectedEntities: []
	}));
	return new gx({
		state: n,
		config: r,
		name: `entity-select-type-${Sx}`
	});
}, Ox = /* @__PURE__ */ Y("<span class=\"material-symbols-rounded w-4 select-none text-[16px]\"> </span>"), kx = /* @__PURE__ */ Y("<div class=\"pl-3\"></div>"), Ax = /* @__PURE__ */ Y("<div><div><!> <div class=\"flex-1 truncate\"> </div></div> <!></div>");
function jx(e, t) {
	I(t, !0);
	let n = Hb(gp), i = $(t, "group", 7), a = $(t, "expanded", 15, !1), o = $(t, "entityType", 7), s = $(t, "search", 7, ""), c = /* @__PURE__ */ V(Y_([])), l = /* @__PURE__ */ V(!1), u = new Ni(), d = Dx(o()), f = /* @__PURE__ */ R(() => s() ? J(c).filter((e) => e.Name?.Value?.toLowerCase().includes(s().toLowerCase())) : J(c));
	d.pipe(fo(u), io("selectedGroup")).subscribe((e) => {
		H(l, e.selectedGroup?.Id === i()?.Id), i() && e.selectedGroup?.Path?.includes(i().Id) && a(!0);
	});
	async function p() {
		try {
			H(c, (await n.queryConfiguration(r.Group, { GroupId: i().Id })).data, !0);
		} catch (e) {
			console.error(e);
		}
	}
	_v(() => {
		i() && p();
	});
	function m(e) {
		e.stopPropagation(), a(!a());
	}
	function h() {
		d.update((e) => ({
			...e,
			selectedGroup: i()
		}));
	}
	var g = {
		get group() {
			return i();
		},
		set group(e) {
			i(e), B();
		},
		get expanded() {
			return a();
		},
		set expanded(e = !1) {
			a(e), B();
		},
		get entityType() {
			return o();
		},
		set entityType(e) {
			o(e), B();
		},
		get search() {
			return s();
		},
		set search(e = "") {
			s(e), B();
		}
	}, _ = Ax(), v = U(_);
	let y;
	var b = U(v), x = (e) => {
		var t = Ox(), n = av(t, !0);
		G(() => Z(n, a() ? "expand_more" : "chevron_right")), _y("click", t, (e) => m(e)), X(e, t);
	};
	Q(b, (e) => {
		J(c).length > 0 && e(x);
	});
	var S = av(W(b, 2), !0);
	F(v);
	var ee = W(v, 2), C = (e) => {
		var t = kx();
		qy(t, 21, () => J(f), (e) => e.Id, (e, t) => {
			jx(e, {
				get group() {
					return J(t);
				},
				get entityType() {
					return o();
				},
				get search() {
					return s();
				}
			});
		}), F(t), X(e, t);
	};
	return Q(ee, (e) => {
		a() && e(C);
	}), F(_), G(() => {
		y = ob(v, 1, "flex cursor-pointer items-center gap-[6px] rounded-control border-l-[3px] border-transparent py-2 pr-[10px] text-cell transition-colors", null, y, {
			"pl-[10px]": J(c).length > 0,
			"pl-[26px]": J(c).length === 0,
			"text-ink-secondary": !J(l),
			"hover:bg-neutral-hover": !J(l),
			"bg-primary-tint": J(l),
			"!border-primary": J(l),
			"text-ink": J(l),
			"font-medium": J(l)
		}), Z(S, i()?.Name?.Value);
	}), _y("click", v, () => h()), X(e, _), L(g);
}
vy(["click"]), Db(jx, {
	group: {},
	expanded: {},
	entityType: {},
	search: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/checkbox/Checkbox.svelte
var Mx = /* @__PURE__ */ Y("<span class=\"material-symbols-rounded text-on-primary\"> </span>"), Nx = /* @__PURE__ */ Y("<div class=\"ml-2 text-cell text-ink\"> </div>"), Px = /* @__PURE__ */ Y("<div><div><!></div> <!></div>");
function Fx(e, t) {
	I(t, !0);
	let n = $(t, "readonly", 7, !1), r = $(t, "label", 7, ""), i = $(t, "checked", 15, !1), a = $(t, "indeterminate", 7, !1), o = $(t, "size", 7, 16), s = $(t, "container$class", 7, ""), c = $(t, "onchange", 7), l = /* @__PURE__ */ R(() => a() && !i()), u = /* @__PURE__ */ R(() => i() || J(l));
	function d() {
		n() || (i(!i()), c()?.(i()));
	}
	var f = {
		get readonly() {
			return n();
		},
		set readonly(e = !1) {
			n(e), B();
		},
		get label() {
			return r();
		},
		set label(e = "") {
			r(e), B();
		},
		get checked() {
			return i();
		},
		set checked(e = !1) {
			i(e), B();
		},
		get indeterminate() {
			return a();
		},
		set indeterminate(e = !1) {
			a(e), B();
		},
		get size() {
			return o();
		},
		set size(e = 16) {
			o(e), B();
		},
		get container$class() {
			return s();
		},
		set container$class(e = "") {
			s(e), B();
		},
		get onchange() {
			return c();
		},
		set onchange(e) {
			c(e), B();
		}
	}, p = Px(), m = U(p);
	let h;
	var g = U(m), _ = (e) => {
		var t = Mx(), n = av(t, !0);
		G(() => {
			cb(t, `font-size: ${o() - 2}px;`), Z(n, J(l) ? "remove" : "check");
		}), X(e, t);
	};
	Q(g, (e) => {
		J(u) && e(_);
	}), F(m);
	var v = W(m, 2), y = (e) => {
		var t = Nx(), n = av(t, !0);
		G(() => Z(n, r())), X(e, t);
	};
	return Q(v, (e) => {
		r() && e(y);
	}), F(p), G(() => {
		ob(p, 1, `flex items-center ${n() ? "cursor-default" : "cursor-pointer"} ${s() ?? ""}`), h = ob(m, 1, "flex shrink-0 items-center justify-center rounded-[3px] transition-colors", null, h, {
			"border-2": !J(u),
			"border-checkbox-border": !J(u) && !n(),
			"border-checkbox-border-disabled": !J(u) && n(),
			"bg-select": J(u) && !n(),
			"bg-ink-disabled": J(u) && n()
		}), cb(m, `height: ${o() ?? ""}px; width: ${o() ?? ""}px;`);
	}), _y("click", p, () => d()), X(e, p), L(f);
}
vy(["click"]), Db(Fx, {
	readonly: {},
	label: {},
	checked: {},
	indeterminate: {},
	size: {},
	container$class: {},
	onchange: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectSidebar.svelte
var Ix = /* @__PURE__ */ Y("<div class=\"flex-1 overflow-auto px-[10px] pb-[10px] pt-[2px]\"><!></div>"), Lx = /* @__PURE__ */ Y("<div class=\"flex-1\"></div>"), Rx = /* @__PURE__ */ Y("<button type=\"button\" class=\"cursor-pointer text-[12px] text-primary hover:underline\">alle übernehmen</button>"), zx = /* @__PURE__ */ Y("<div class=\"flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-[7px] transition-colors hover:bg-neutral-hover\"><!> <div class=\"min-w-0 flex-1\"><div class=\"truncate text-cell text-ink\"> </div> <div class=\"truncate text-sub text-ink-tertiary\"> </div></div></div>"), Bx = /* @__PURE__ */ Y("<div class=\"flex-none border-t border-line px-[10px] pb-3 pt-[10px]\"><div class=\"mb-1 flex items-center justify-between\"><div class=\"text-meta text-ink-secondary\">Zuletzt ausgewählt</div> <!></div> <!></div>"), Vx = /* @__PURE__ */ Y("<div class=\"flex h-full w-[280px] flex-none flex-col overflow-hidden border-r border-line\"><div class=\"flex-none px-3 pb-[10px] pt-3\"><div class=\"flex gap-2\"><button type=\"button\" class=\"flex h-[44px] flex-1 items-center gap-2 overflow-hidden rounded-control border border-line pl-[10px] pr-2 text-left transition-colors hover:border-line-strong\"><span class=\"material-symbols-rounded select-none text-[18px] text-ink-secondary\">domain</span> <div class=\"min-w-0 flex-1\"><div class=\"text-label leading-[1.2] text-ink-tertiary\">Mandant</div> <div class=\"truncate text-cell leading-[1.2] text-ink\"> </div></div> <span class=\"material-symbols-rounded select-none text-[16px] text-ink-secondary\">unfold_more</span></button> <button type=\"button\" title=\"Mandant suchen\" class=\"flex h-[44px] w-[44px] flex-none items-center justify-center rounded-control border border-line transition-colors hover:bg-primary-tint-subtle\"><span class=\"material-symbols-rounded select-none text-[20px] text-primary\">search</span></button></div> <div class=\"mt-[10px] flex h-10 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Suche\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div></div> <!> <!></div>");
function Hx(e, t) {
	I(t, !0);
	let n = Hb(gp), i = Hb(bp), a = $(t, "entityType", 7), o = $(t, "selectedTenant", 7), s = $(t, "selectMultiple", 7, !1), c = $(t, "onchangeTenant", 7), l = /* @__PURE__ */ V(null), u = /* @__PURE__ */ V(Y_([])), d = /* @__PURE__ */ V(""), f = [], p = /* @__PURE__ */ V(Y_({})), m = new Ni(), h = Dx(a());
	h.pipe(fo(m)).subscribe((e) => {
		_(e.lastSelectedEntities ?? []);
	}), Tx.pipe(fo(m)).subscribe((e) => {
		f = e.selectedEntities, H(p, {}, !0);
		for (let e of f) J(p)[e.Id] = !0;
	});
	async function g(e) {
		try {
			H(l, await n.getEntityById(r.Group, e), !0), (!h.value?.selectedGroup || h.value.selectedGroup.Id != J(l).Id) && h.update((e) => ({
				...e,
				selectedGroup: J(l)
			}));
		} catch (e) {
			console.error(e);
		}
	}
	async function _(e) {
		if (e.length === J(u).length && e.every((e, t) => J(u)[t]?.id === e)) return;
		let t = await Promise.all(e.map(async (e) => {
			try {
				let t = await n.getEntityById(a(), e);
				return {
					id: e,
					entity: t,
					name: t?.Name?.Value ?? "",
					group: await i.resolveName(r.Group, t?.GroupId) ?? ""
				};
			} catch (e) {
				return console.error(e), null;
			}
		}));
		H(u, t.filter((e) => e != null), !0);
	}
	function v(e) {
		f = s() ? J(p)[e.id] ? f.filter((t) => t.Id !== e.id) : [...f, e.entity] : [e.entity], Tx.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function y() {
		let e = J(u).filter((e) => !J(p)[e.id]).map((e) => e.entity);
		Tx.update((t) => ({
			...t,
			selectedEntities: s() ? [...f, ...e] : f
		}));
	}
	_v(() => {
		o() && o().Root && g(o().Root);
	}), kb(() => {
		m.next(), m.complete();
	});
	var b = {
		get entityType() {
			return a();
		},
		set entityType(e) {
			a(e), B();
		},
		get selectedTenant() {
			return o();
		},
		set selectedTenant(e) {
			o(e), B();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), B();
		},
		get onchangeTenant() {
			return c();
		},
		set onchangeTenant(e) {
			c(e), B();
		}
	}, x = Vx(), S = U(x), ee = U(S), C = U(ee), te = W(U(C), 2), ne = av(W(U(te), 2), !0);
	F(te), bg(2), F(C);
	var re = W(C, 2);
	F(ee);
	var ie = W(ee, 2), ae = U(ie);
	fb(ae), bg(2), F(ie), F(S);
	var oe = W(S, 2), se = (e) => {
		var t = Ix();
		jx(U(t), {
			get group() {
				return J(l);
			},
			expanded: !0,
			get entityType() {
				return a();
			},
			get search() {
				return J(d);
			}
		}), F(t), X(e, t);
	}, ce = (e) => {
		X(e, Lx());
	};
	Q(oe, (e) => {
		J(l) ? e(se) : e(ce, -1);
	});
	var le = W(oe, 2), ue = (e) => {
		var t = Bx(), n = U(t), r = W(U(n), 2), i = (e) => {
			var t = Rx();
			_y("click", t, () => y()), X(e, t);
		};
		Q(r, (e) => {
			s() && e(i);
		}), F(n), qy(W(n, 2), 17, () => J(u), (e) => e.id, (e, t) => {
			var n = zx(), r = U(n), i = (e) => {
				Fx(e, {
					readonly: !0,
					get checked() {
						return J(p)[J(t).id];
					}
				});
			};
			Q(r, (e) => {
				s() && e(i);
			});
			var a = W(r, 2), o = U(a), c = av(o, !0), l = av(W(o, 2), !0);
			F(a), F(n), G(() => {
				Z(c, J(t).name), Z(l, J(t).group);
			}), _y("click", n, () => v(J(t))), X(e, n);
		}), F(t), X(e, t);
	};
	return Q(le, (e) => {
		J(u).length > 0 && e(ue);
	}), F(x), G(() => Z(ne, o()?.Name ?? "")), _y("click", C, () => c()?.()), _y("click", re, () => c()?.()), _b(ae, () => J(d), (e) => H(d, e)), X(e, x), L(b);
}
vy(["click"]), Db(Hx, {
	entityType: {},
	selectedTenant: {},
	selectMultiple: {},
	onchangeTenant: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataCell.svelte
var Ux = /* @__PURE__ */ Y("<div><!></div>");
function Wx(e, t) {
	I(t, !0);
	let n = $(t, "container$class", 7, ""), r = $(t, "children", 7);
	var i = {
		get container$class() {
			return n();
		},
		set container$class(e = "") {
			n(e), B();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), B();
		}
	}, a = Ux();
	return $y(U(a), () => r() ?? Fh), F(a), G(() => ob(a, 1, `overflow-hidden ${n() ?? ""}`)), X(e, a), L(i);
}
Db(Wx, {
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataRow.svelte
var Gx = /* @__PURE__ */ Y("<div><!></div>"), Kx = {
	hash: "svelte-1f6rjo1",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tablebody-flexrow {display:flex;height:38px;width:100%;cursor:pointer;border-bottom:1px solid var(--color-row-line);font-size:var(--text-cell);color:var(--color-ink);}.audako-tablebody-flexrow:hover {background:var(--color-row-hover);}.audako-tablebody-flexrow-active,\n  .audako-tablebody-flexrow-active:hover {background:var(--color-row-active);}.audako-tablebody-flexrow-blocked,\n  .audako-tablebody-flexrow-blocked:hover {background:var(--color-danger-tint);color:var(--color-danger);cursor:default;}.audako-tablebody-flexrow > * {flex:1;height:100%;min-width:0;display:flex;align-items:center;}.audako-tablebody-flexrow > * + * {padding-left:12px;}.audako-tablebody-flexrow > *:first-child {padding-left:16px;}.audako-tablebody-flexrow > *:last-child {padding-right:16px;}"
};
function qx(e, t) {
	I(t, !0), eb(e, Kx);
	let n = $(t, "active", 7, !1), r = $(t, "blocked", 7, !1), i = $(t, "flexrow$class", 7, ""), a = $(t, "onclick", 7), o = $(t, "children", 7);
	function s(e) {
		r() || a()?.(e);
	}
	var c = {
		get active() {
			return n();
		},
		set active(e = !1) {
			n(e), B();
		},
		get blocked() {
			return r();
		},
		set blocked(e = !1) {
			r(e), B();
		},
		get flexrow$class() {
			return i();
		},
		set flexrow$class(e = "") {
			i(e), B();
		},
		get onclick() {
			return a();
		},
		set onclick(e) {
			a(e), B();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), B();
		}
	}, l = Gx();
	let u;
	return $y(U(l), () => o() ?? Fh), F(l), G(() => u = ob(l, 1, `audako-tablebody-flexrow ${i() ?? ""}`, null, u, {
		"audako-tablebody-flexrow-active": n() && !r(),
		"audako-tablebody-flexrow-blocked": r()
	})), _y("click", l, (e) => s(e)), X(e, l), L(c);
}
vy(["click"]), Db(qx, {
	active: {},
	blocked: {},
	flexrow$class: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderCell.svelte
var Jx = /* @__PURE__ */ Y("<span> </span>"), Yx = /* @__PURE__ */ Y("<div><div class=\"min-w-0 truncate\"><!></div> <!></div>");
function Xx(e, t) {
	I(t, !0);
	let n = $(t, "id", 7), r = $(t, "sortable", 7, !1), i = $(t, "container$class", 7, ""), a = $(t, "children", 7), o = /* @__PURE__ */ V(null), s = Ug("audako:table:sort"), c = s.subscribe((e) => {
		H(o, n() && e?.active === n() ? e.direction : null, !0);
	});
	function l() {
		r() && (J(o) === "asc" ? H(o, "desc") : J(o) === "desc" ? H(o, null) : H(o, "asc"), s.set(J(o) ? {
			active: n(),
			direction: J(o)
		} : null));
	}
	kb(c);
	var u = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), B();
		},
		get sortable() {
			return r();
		},
		set sortable(e = !1) {
			r(e), B();
		},
		get container$class() {
			return i();
		},
		set container$class(e = "") {
			i(e), B();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), B();
		}
	}, d = Yx(), f = U(d);
	$y(U(f), () => a() ?? Fh), F(f);
	var p = W(f, 2), m = (e) => {
		var t = Jx();
		let n;
		var r = av(t, !0);
		G(() => {
			n = ob(t, 1, "material-symbols-rounded text-[14px] transition-opacity", null, n, { "opacity-0": J(o) == null }), Z(r, J(o) === "desc" ? "arrow_downward" : "arrow_upward");
		}), X(e, t);
	};
	return Q(p, (e) => {
		r() && e(m);
	}), F(d), G(() => ob(d, 1, `flex h-full items-center gap-1 ${r() ? "cursor-pointer" : "cursor-default"} ${i() ?? ""}`)), _y("click", d, () => l()), X(e, d), L(u);
}
vy(["click"]), Db(Xx, {
	id: {},
	sortable: {},
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderRow.svelte
var Zx = /* @__PURE__ */ Y("<div class=\"audako-tableheader-flexrow\"><!></div>"), Qx = {
	hash: "svelte-11mz2do",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tableheader-flexrow {display:flex;height:40px;position:sticky;top:0;z-index:1;background:var(--color-surface);border-bottom:1px solid var(--color-line);font-size:var(--text-cell);color:var(--color-ink-secondary);}.audako-tableheader-flexrow > * {flex:1;height:100%;min-width:0;display:flex;align-items:center;}\n\n  /* The vertical rules between header cells are what make the header read\n     like the production table. */.audako-tableheader-flexrow > * + * {padding-left:12px;border-left:1px solid var(--color-line);}.audako-tableheader-flexrow > *:first-child {padding-left:16px;}.audako-tableheader-flexrow > *:last-child {padding-right:16px;}"
};
function $x(e, t) {
	I(t, !0), eb(e, Qx);
	let n = $(t, "children", 7);
	var r = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), B();
		}
	}, i = Zx();
	return $y(U(i), () => n() ?? Fh), F(i), X(e, i), L(r);
}
Db($x, { children: {} }, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/popup-container/PopupContainer.svelte
var eS = /* @__PURE__ */ Y("<div class=\"popup-element-wrapper\" style=\"position: absolute\"><div style=\"display: none\"><!></div></div>");
function tS(e, t) {
	I(t, !0);
	let n = $(t, "closeOnClick", 7, !0), r = $(t, "closeOnEscape", 7, !0), i = $(t, "sizeToAnchor", 7, !1), a = $(t, "anchorElement", 7, null), o = $(t, "position", 7, null), s = $(t, "popupClass", 7, ""), c = $(t, "preferedVerticalAlignment", 7, "top"), l = $(t, "preferedHorizontalAlignment", 7, "left"), u = $(t, "positionOffset", 23, () => ({
		x: 0,
		y: 0
	})), d = $(t, "children", 7), f = Hb("PopupContainerService", new Bb(document.body)), p, m, h;
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
			n(e), B();
		},
		get closeOnEscape() {
			return r();
		},
		set closeOnEscape(e = !0) {
			r(e), B();
		},
		get sizeToAnchor() {
			return i();
		},
		set sizeToAnchor(e = !1) {
			i(e), B();
		},
		get anchorElement() {
			return a();
		},
		set anchorElement(e = null) {
			a(e), B();
		},
		get position() {
			return o();
		},
		set position(e = null) {
			o(e), B();
		},
		get popupClass() {
			return s();
		},
		set popupClass(e = "") {
			s(e), B();
		},
		get preferedVerticalAlignment() {
			return c();
		},
		set preferedVerticalAlignment(e = "top") {
			c(e), B();
		},
		get preferedHorizontalAlignment() {
			return l();
		},
		set preferedHorizontalAlignment(e = "left") {
			l(e), B();
		},
		get positionOffset() {
			return u();
		},
		set positionOffset(e = {
			x: 0,
			y: 0
		}) {
			u(e), B();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), B();
		}
	}, b = eS(), x = U(b);
	return $y(U(x), () => d() ?? Fh), F(x), xb(x, (e) => p = e, () => p), F(b), xb(b, (e) => h = e, () => h), G(() => ob(x, 1, `absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${s() ?? ""}`)), X(e, b), L(y);
}
Db(tS, {
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
var nS = /* @__PURE__ */ Y("<div class=\"absolute left-0 top-[50%] h-[20px] w-[3px] translate-y-[-50%] rounded-full bg-primary\"></div>"), rS = /* @__PURE__ */ Y("<div><!> <!> <span><!></span></div>");
function iS(e, t) {
	I(t, !0);
	let n = $(t, "value", 7, null), r = $(t, "children", 7), i = /* @__PURE__ */ V(!1), a = null, o = null, s, c, l = Ug("audako:select:multiple"), u = Ug("audako:select:close"), d = Ug("audako:select:value"), f = Ug("audako:select:value:changed"), p = Ug("audako:select:displayValue");
	Ob(() => {
		c = s.innerText?.trim(), p.subscribe((e) => {
			o = e;
		}), d.subscribe((e) => {
			a = e, l ? H(i, e?.includes(n()), !0) : H(i, e === n()), h();
		});
	});
	function m(e) {
		e.preventDefault(), e.stopPropagation();
		let t = null;
		l ? t = J(i) ? a.filter((e) => e !== n()) : Array.isArray(a) ? [...a, n()] : [n()] : (t = n(), u()), d.set(t), f.next(t);
	}
	function h() {
		if (l) {
			let e = o;
			J(i) && !e.includes(c) ? p.set([...e, c]) : !J(i) && e.includes(c) && p.set(e.filter((e) => e !== c));
		} else J(i) && p.set(c);
	}
	var g = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), B();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), B();
		}
	}, _ = rS(), v = U(_), y = (e) => {
		X(e, nS());
	};
	Q(v, (e) => {
		J(i) && !l && e(y);
	});
	var b = W(v, 2), x = (e) => {
		Fx(e, {
			readonly: !0,
			get checked() {
				return J(i);
			}
		});
	};
	Q(b, (e) => {
		l && e(x);
	});
	var S = W(b, 2);
	return $y(U(S), () => r() ?? Fh), F(S), xb(S, (e) => s = e, () => s), F(_), G(() => ob(_, 1, `relative flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-2 text-cell hover:bg-neutral-hover ${J(i) && !l ? "bg-neutral-hover" : ""}`)), _y("click", _, m), X(e, _), L(g);
}
vy(["click"]), Db(iS, {
	value: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/select/Select.svelte
var aS = /* @__PURE__ */ Y("<!> <!>", 1), oS = /* @__PURE__ */ Y("<div><!> <input readonly=\"\"/> <div>arrow_drop_down</div></div> <!>", 1);
function sS(e, t) {
	I(t, !0);
	let n = $(t, "value", 15, null), r = $(t, "multiple", 7, !1), i = $(t, "placeholder", 7, null), a = $(t, "textfield$class", 7, ""), o = $(t, "container$class", 7, ""), s = $(t, "suffixIcon$class", 7, ""), c = $(t, "options", 23, () => []), l = $(t, "disabled", 7, !1), u = $(t, "onvalueChanged", 7), d = $(t, "children", 7), f = $(t, "prefix", 7), p = /* @__PURE__ */ V(""), m = /* @__PURE__ */ V(null), h, g = r_(n()), _ = g.subscribe((e) => {
		n(e);
	}), v = new Ni(), y = v.subscribe((e) => {
		u()?.(e);
	}), b = r_(r() ? [] : ""), x = b.subscribe((e) => {
		ee(e);
	});
	function S(e) {
		e && (e.preventDefault(), e.stopPropagation()), !l() && h?.openPopup();
	}
	function ee(e) {
		if (e == null || e.length === 0) {
			H(p, null);
			return;
		}
		Array.isArray(e) ? H(p, e.join(", "), !0) : H(p, e, !0);
	}
	Wg("audako:select:multiple", r()), Wg("audako:select:value", g), Wg("audako:select:value:changed", v), Wg("audako:select:displayValue", b), Wg("audako:select:close", () => h.closePopup()), kb(() => {
		_(), y.unsubscribe(), x();
	});
	var C = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), B();
		},
		get multiple() {
			return r();
		},
		set multiple(e = !1) {
			r(e), B();
		},
		get placeholder() {
			return i();
		},
		set placeholder(e = null) {
			i(e), B();
		},
		get textfield$class() {
			return a();
		},
		set textfield$class(e = "") {
			a(e), B();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), B();
		},
		get suffixIcon$class() {
			return s();
		},
		set suffixIcon$class(e = "") {
			s(e), B();
		},
		get options() {
			return c();
		},
		set options(e = []) {
			c(e), B();
		},
		get disabled() {
			return l();
		},
		set disabled(e = !1) {
			l(e), B();
		},
		get onvalueChanged() {
			return u();
		},
		set onvalueChanged(e) {
			u(e), B();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), B();
		},
		get prefix() {
			return f();
		},
		set prefix(e) {
			f(e), B();
		}
	}, te = oS(), ne = iv(te), re = U(ne);
	$y(re, () => f() ?? Fh);
	var ie = W(re, 2);
	fb(ie), xb(ie, (e) => H(m, e), () => J(m));
	var ae = W(ie, 2);
	return F(ne), xb(tS(W(ne, 2), {
		sizeToAnchor: !0,
		popupClass: "max-h-[400px] ",
		get anchorElement() {
			return J(m);
		},
		children: (e, t) => {
			var n = aS(), r = iv(n);
			$y(r, () => d() ?? Fh), qy(W(r, 2), 17, c, Uy, (e, t) => {
				iS(e, {
					get value() {
						return J(t).value;
					},
					children: (e, n) => {
						bg();
						var r = Ey();
						G(() => Z(r, J(t).label)), X(e, r);
					},
					$$slots: { default: !0 }
				});
			}), X(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => h = e, () => h), G(() => {
		ob(ne, 1, `relative flex w-full cursor-pointer items-center rounded-control border border-line px-2 text-cell text-ink transition-colors focus-within:border-primary ${o() ?? ""}`), ie.disabled = l(), pb(ie, "placeholder", i()), ob(ie, 1, `w-full outline-none cursor-pointer ${a() ?? ""}`), ob(ae, 1, `material-symbols-rounded pointer-events-none select-none text-[16px] text-ink-secondary ${s() ?? ""}`);
	}), _y("click", ne, S), _b(ie, () => J(p), (e) => H(p, e)), X(e, te), L(C);
}
vy(["click"]), Db(sS, {
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
var cS = /* @__PURE__ */ Y("<div><span class=\"material-symbols-rounded select-none text-[18px]\"> </span></div>"), lS = /* @__PURE__ */ Y("<div class=\"flex h-[44px] w-full items-center justify-end gap-[10px] text-[13px] text-ink-secondary\"><div>Zeilen</div> <div class=\"w-[70px]\"><!></div> <div class=\"whitespace-nowrap\"> </div> <div class=\"flex h-[30px] items-stretch overflow-hidden rounded-control border border-line\"><!> <!> <!> <!></div></div>");
function uS(e, t) {
	I(t, !0);
	let n = $(t, "pageIndex", 15, 0), r = $(t, "pageSize", 15, 25), i = $(t, "totalCount", 7), a = $(t, "pageSizeOptions", 23, () => [
		25,
		50,
		100
	]), o = $(t, "onchangePage", 7), s = /* @__PURE__ */ R(() => Math.max(Math.ceil(i() / r()) - 1, 0)), c = /* @__PURE__ */ R(() => i() === 0 ? 0 : n() * r() + 1), l = /* @__PURE__ */ R(() => Math.min((n() + 1) * r(), i())), u = /* @__PURE__ */ R(() => n() === 0), d = /* @__PURE__ */ R(() => n() >= J(s));
	function f(e) {
		n(n() + e), h();
	}
	function p(e) {
		n(e), h();
	}
	function m(e) {
		r(e), n(Math.min(n(), J(s))), h();
	}
	function h() {
		o()?.({
			pageIndex: n(),
			pageSize: r()
		});
	}
	var g = {
		get pageIndex() {
			return n();
		},
		set pageIndex(e = 0) {
			n(e), B();
		},
		get pageSize() {
			return r();
		},
		set pageSize(e = 25) {
			r(e), B();
		},
		get totalCount() {
			return i();
		},
		set totalCount(e) {
			i(e), B();
		},
		get pageSizeOptions() {
			return a();
		},
		set pageSizeOptions(e = [
			25,
			50,
			100
		]) {
			a(e), B();
		},
		get onchangePage() {
			return o();
		},
		set onchangePage(e) {
			o(e), B();
		}
	}, _ = lS(), v = W(U(_), 2);
	sS(U(v), {
		container$class: "!h-[30px]",
		textfield$class: "text-[13px] text-ink-secondary",
		onvalueChanged: (e) => m(e),
		get value() {
			return r();
		},
		set value(e) {
			r(e);
		},
		children: (e, t) => {
			var n = Dy();
			qy(iv(n), 17, a, Uy, (e, t) => {
				iS(e, {
					get value() {
						return J(t);
					},
					children: (e, n) => {
						bg();
						var r = Ey();
						G(() => Z(r, J(t))), X(e, r);
					},
					$$slots: { default: !0 }
				});
			}), X(e, n);
		},
		$$slots: { default: !0 }
	}), F(v);
	var y = W(v, 2), b = av(y), x = W(y, 2);
	{
		let e = (e, t = Fh, n = Fh, r = Fh) => {
			var i = cS();
			let a;
			var o = av(U(i), !0);
			F(i), G(() => {
				a = ob(i, 1, "flex w-[34px] items-center justify-center border-l border-row-line first:border-l-0 transition-colors", null, a, {
					"cursor-pointer": !n(),
					"cursor-default": n(),
					"text-ink-secondary": !n(),
					"text-ink-disabled": n(),
					"hover:bg-neutral-hover": !n()
				}), Z(o, t());
			}), _y("click", i, () => !n() && r()()), X(e, i);
		};
		var S = U(x);
		e(S, () => "first_page", () => J(u), () => () => p(0));
		var ee = W(S, 2);
		e(ee, () => "navigate_before", () => J(u), () => () => f(-1));
		var C = W(ee, 2);
		e(C, () => "navigate_next", () => J(d), () => () => f(1)), e(W(C, 2), () => "last_page", () => J(d), () => () => p(J(s))), F(x);
	}
	return F(_), G(() => Z(b, `${J(c) ?? ""} - ${J(l) ?? ""} / ${i() ?? ""}`)), X(e, _), L(g);
}
vy(["click"]), Db(uS, {
	pageIndex: {},
	pageSize: {},
	totalCount: {},
	pageSizeOptions: {},
	onchangePage: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/Table.svelte
var dS = /* @__PURE__ */ Y("<div class=\"flex h-full flex-col\"><div><!></div> <!></div>");
function fS(e, t) {
	I(t, !0);
	let n = $(t, "startSort", 7, null), r = $(t, "container$class", 7, ""), i = $(t, "onsort", 7), a = $(t, "children", 7), o = $(t, "pagination", 7), s = r_(n());
	Wg("audako:table:sort", s), kb(s.subscribe((e) => {
		i()?.(e);
	}));
	var c = {
		get startSort() {
			return n();
		},
		set startSort(e = null) {
			n(e), B();
		},
		get container$class() {
			return r();
		},
		set container$class(e = "") {
			r(e), B();
		},
		get onsort() {
			return i();
		},
		set onsort(e) {
			i(e), B();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), B();
		},
		get pagination() {
			return o();
		},
		set pagination(e) {
			o(e), B();
		}
	}, l = dS(), u = U(l);
	return $y(U(u), () => a() ?? Fh), F(u), $y(W(u, 2), () => o() ?? Fh), F(l), G(() => ob(u, 1, `relative w-full flex-1 overflow-auto rounded-dialog border border-line bg-surface ${r() ?? ""}`)), X(e, l), L(c);
}
Db(fS, {
	startSort: {},
	container$class: {},
	onsort: {},
	children: {},
	pagination: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/signal-format.ts
var pS = {
	[lt.AnalogInput]: "Analog",
	[lt.AnalogInOut]: "Analog E/A",
	[lt.DigitalInput]: "Digital",
	[lt.DigitalInOut]: "Digital E/A",
	[lt.Counter]: "Zähler",
	[lt.UniversalInput]: "Universal",
	[lt.UniversalInOut]: "Universal E/A"
};
function mS(e) {
	let t = e?.Type?.Value;
	return t ? pS[t] ?? t : "";
}
function hS(e, t) {
	if (t == null || t === "") return "";
	let n = e, r = n?.Settings, i = n?.Type?.Value;
	if (i === lt.DigitalInput || i === lt.DigitalInOut) {
		let e = t === !0 || t === 1 || t === "1" || t === "true";
		return (e ? r?.DigitalTrueCaption?.Value : r?.DigitalFalseCaption?.Value) || (e ? "Ein" : "Aus");
	}
	let a = typeof t == "number" ? t : Number(t);
	if (!Number.isFinite(a)) return String(t);
	let o = r?.DecimalPlaces?.Value, s = r?.Unit?.Value, c = a.toLocaleString("de-DE", {
		minimumFractionDigits: o ?? 0,
		maximumFractionDigits: o ?? 3
	});
	return s ? `${c} ${s}` : c;
}
//#endregion
//#region src/components/entity-select/EntitySelectTable.svelte
var gS = /* @__PURE__ */ Y("<!> <!>", 1), _S = /* @__PURE__ */ Y("<!> <!> <!> <!>", 1), vS = /* @__PURE__ */ Y("<div class=\"audako-indeterminate-bar h-full w-full bg-primary\"></div>"), yS = /* @__PURE__ */ Y("<div class=\"truncate\"> </div>"), bS = /* @__PURE__ */ Y("<span class=\"truncate\"><!></span>"), xS = /* @__PURE__ */ Y("<span class=\"truncate\"> </span>"), SS = /* @__PURE__ */ Y("<button type=\"button\" class=\"cursor-pointer text-meta text-primary hover:underline\">Filter zurücksetzen</button>"), CS = /* @__PURE__ */ Y("<div class=\"flex flex-col items-center gap-2 py-10\"><span class=\"material-symbols-rounded select-none text-[24px] text-ink-tertiary\">search_off</span> <div class=\"text-cell text-ink-secondary\"> </div> <!></div>"), wS = /* @__PURE__ */ Y("<!> <div><!></div> <!> <!>", 1), TS = /* @__PURE__ */ Y("<div class=\"flex h-full flex-col overflow-hidden\"><!></div>");
function ES(e, t) {
	I(t, !0);
	let n = Hb(gp), i = Hb(bp), a = Ub(Lm), o = $(t, "entityType", 7), s = $(t, "selectMultiple", 7, !1), c = $(t, "additionalFilter", 7, null), l = $(t, "totalCount", 15, 0), u = /* @__PURE__ */ V(Y_([])), d = new Ni(), f = [], p = /* @__PURE__ */ V(Y_({})), m = /* @__PURE__ */ V("unchecked"), h = /* @__PURE__ */ V(null), g, _, v = !1, y = /* @__PURE__ */ V(0), b = /* @__PURE__ */ V(25), x = /* @__PURE__ */ V(null), S = Dx(o()), ee = Ex, C = !1, te = /* @__PURE__ */ V(!0), ne = /* @__PURE__ */ V(Y_({})), re, ie = new Ni(), ae = /* @__PURE__ */ R(() => rx(o())), oe = /* @__PURE__ */ R(() => o() === r.Signal), se = /* @__PURE__ */ R(() => {
		if (J(x)?.active !== "Name") return J(u);
		let e = J(x).direction === "desc" ? -1 : 1;
		return [...J(u)].sort((t, n) => e * (t.Name?.Value ?? "").localeCompare(n.Name?.Value ?? "", "de", { sensitivity: "base" }));
	});
	Tx.pipe(fo(ie)).subscribe((e) => {
		f = e.selectedEntities, pe(), de();
	}), Ba([ee.asObservable(), S.asObservable()]).pipe(fo(ie)).subscribe(([e, t]) => {
		_ = t.selectedGroup, g = t.selectedGroup?.Id, H(h, t.filter, !0), v = e.queryWithSubGroups, C = !0, H(y, 0), H(b, e.pageSize ?? 25, !0), d.next();
	});
	function ce() {
		let e = { $and: [] };
		v ? e.$and.push({ Path: g }) : e.$and.push({ GroupId: g }), J(h) && e.$and.push({ $or: [{ "Name.Value": {
			$regex: J(h),
			$options: "i"
		} }, { "Description.Value": {
			$regex: J(h),
			$options: "i"
		} }] }), c() && e.$and.push(c());
		let t = {
			limit: J(b),
			skip: J(y) * J(b)
		};
		return Ca(n.queryConfiguration(o(), e, t));
	}
	function le(e) {
		s() ? (f.find((t) => t.Id === e.Id) ? (f = f.filter((t) => t.Id !== e.Id), J(p)[e.Id] = !1) : (f.push(e), J(p)[e.Id] = !0), de()) : f = [e], Tx.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function ue(e) {
		f = e ? [...f, ...J(u).filter((e) => !J(p)[e.Id])] : f.filter((e) => !J(u).find((t) => t.Id === e.Id)), pe(), de(), Tx.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function de() {
		let e = Object.keys(J(p)).filter((e) => J(p)[e]);
		e.length === 0 ? H(m, "unchecked") : e.length === J(u).length ? H(m, "checked") : H(m, "indeterminate");
	}
	function fe(e) {
		e.pageSize == J(b) ? H(y, e.pageIndex, !0) : (H(y, 0), H(b, e.pageSize, !0));
	}
	function pe() {
		H(p, {}, !0), J(u).forEach((e) => {
			J(p)[e.Id] = f.find((t) => t.Id === e.Id) != null;
		});
	}
	async function w(e) {
		if (re?.unsubscribe(), H(ne, {}, !0), !a || o() !== r.Signal || e.length === 0) return;
		let t = e.map((e) => e.Id);
		try {
			await a.connect();
		} catch (e) {
			console.error(e);
			return;
		}
		re = a.subscribeToSignalValues(t).pipe(fo(ie)).subscribe((e) => {
			let t = { ...J(ne) };
			for (let n of e) t[n.identifier.replace("S:", "")] = n.value;
			H(ne, t, !0);
		});
	}
	function me() {
		S.update((e) => ({
			...e,
			filter: null
		}));
	}
	_v(() => {
		J(y), d.next();
	}), _v(() => {
		ee.update((e) => ({
			...e,
			pageSize: J(b)
		}));
	}), kb(() => {
		re?.unsubscribe(), ie.next(), ie.complete();
	}), d.pipe(fo(ie), Ya(() => C && !!g), go(250), mo(() => H(te, !0)), uo(() => ce())).subscribe((e) => {
		H(te, !1), H(u, e.data, !0), pe(), de(), o() === r.Group && J(u).unshift(_), l(e.total), w(J(u));
	});
	var he = {
		get entityType() {
			return o();
		},
		set entityType(e) {
			o(e), B();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), B();
		},
		get additionalFilter() {
			return c();
		},
		set additionalFilter(e = null) {
			c(e), B();
		},
		get totalCount() {
			return l();
		},
		set totalCount(e = 0) {
			l(e), B();
		}
	}, ge = TS();
	return fS(U(ge), {
		startSort: {
			active: "Name",
			direction: "asc"
		},
		onsort: (e) => H(x, e, !0),
		pagination: (e) => {
			uS(e, {
				get pageIndex() {
					return J(y);
				},
				get pageSize() {
					return J(b);
				},
				get totalCount() {
					return l();
				},
				onchangePage: fe
			});
		},
		children: (e, t) => {
			var n = wS(), a = iv(n);
			$x(a, {
				children: (e, t) => {
					var n = _S(), r = iv(n), i = (e) => {
						Xx(e, {
							container$class: "!flex-none w-[46px]",
							id: "select",
							children: (e, t) => {
								{
									let t = /* @__PURE__ */ R(() => J(m) === "checked"), n = /* @__PURE__ */ R(() => J(m) === "indeterminate");
									Fx(e, {
										get checked() {
											return J(t);
										},
										get indeterminate() {
											return J(n);
										},
										onchange: (e) => ue(e)
									});
								}
							},
							$$slots: { default: !0 }
						});
					};
					Q(r, (e) => {
						s() && e(i);
					});
					var a = W(r, 2);
					Xx(a, {
						container$class: "flex-1",
						id: "Name",
						sortable: !0,
						children: (e, t) => {
							bg(), X(e, Ey("Name"));
						},
						$$slots: { default: !0 }
					});
					var o = W(a, 2);
					Xx(o, {
						container$class: "!flex-none w-[200px]",
						id: "Group",
						children: (e, t) => {
							bg(), X(e, Ey("Gruppe"));
						},
						$$slots: { default: !0 }
					});
					var c = W(o, 2), l = (e) => {
						var t = gS(), n = iv(t);
						Xx(n, {
							container$class: "!flex-none w-[110px]",
							id: "Type",
							children: (e, t) => {
								bg(), X(e, Ey("Typ"));
							},
							$$slots: { default: !0 }
						}), Xx(W(n, 2), {
							container$class: "!flex-none w-[120px]",
							id: "Value",
							children: (e, t) => {
								bg(), X(e, Ey("Signalwert"));
							},
							$$slots: { default: !0 }
						}), X(e, t);
					};
					Q(c, (e) => {
						J(oe) && e(l);
					}), X(e, n);
				},
				$$slots: { default: !0 }
			});
			var o = W(a, 2), c = U(o), l = (e) => {
				X(e, vS());
			};
			Q(c, (e) => {
				J(te) && e(l);
			}), F(o);
			var d = W(o, 2);
			qy(d, 17, () => J(se), (e) => e.Id, (e, t) => {
				qx(e, {
					onclick: () => le(J(t)),
					children: (e, n) => {
						var a = _S(), o = iv(a), c = (e) => {
							Wx(e, {
								container$class: "!flex-none w-[46px]",
								children: (e, n) => {
									Fx(e, {
										readonly: !0,
										get checked() {
											return J(p)[J(t).Id];
										}
									});
								},
								$$slots: { default: !0 }
							});
						};
						Q(o, (e) => {
							s() && e(c);
						});
						var l = W(o, 2);
						Wx(l, {
							container$class: "flex-1",
							children: (e, n) => {
								var r = yS(), i = av(r, !0);
								G(() => Z(i, J(t).Name?.Value)), X(e, r);
							},
							$$slots: { default: !0 }
						});
						var u = W(l, 2);
						Wx(u, {
							container$class: "!flex-none w-[200px] text-ink-secondary",
							children: (e, n) => {
								var a = bS();
								Hy(U(a), () => i.resolveName(r.Group, J(t).GroupId), null, (e, t) => {
									var n = Ey();
									G(() => Z(n, J(t) ?? "")), X(e, n);
								}), F(a), X(e, a);
							},
							$$slots: { default: !0 }
						});
						var d = W(u, 2), f = (e) => {
							var n = gS(), r = iv(n);
							Wx(r, {
								container$class: "!flex-none w-[110px] text-ink-secondary",
								children: (e, n) => {
									var r = xS(), i = av(r, !0);
									G((e) => Z(i, e), [() => mS(J(t))]), X(e, r);
								},
								$$slots: { default: !0 }
							}), Wx(W(r, 2), {
								container$class: "!flex-none w-[120px]",
								children: (e, n) => {
									var r = xS(), i = av(r, !0);
									G((e) => Z(i, e), [() => hS(J(t), J(ne)[J(t).Id])]), X(e, r);
								},
								$$slots: { default: !0 }
							}), X(e, n);
						};
						Q(d, (e) => {
							J(oe) && e(f);
						}), X(e, a);
					},
					$$slots: { default: !0 }
				});
			});
			var f = W(d, 2), g = (e) => {
				var t = CS(), n = W(U(t), 2), r = av(n), i = W(n, 2), a = (e) => {
					var t = SS();
					_y("click", t, () => me()), X(e, t);
				};
				Q(i, (e) => {
					J(h) && e(a);
				}), F(t), G(() => Z(r, `Keine ${J(ae).plural ?? ""} für diese Filter`)), X(e, t);
			};
			Q(f, (e) => {
				!J(te) && J(u).length === 0 && e(g);
			}), G(() => ob(o, 1, `sticky top-10 z-[1] h-[2px] w-full overflow-hidden ${J(te) ? "bg-primary-tint" : ""}`)), X(e, n);
		},
		$$slots: {
			pagination: !0,
			default: !0
		}
	}), F(ge), X(e, ge), L(he);
}
vy(["click"]), Db(ES, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	totalCount: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectToolbar.svelte
var DS = /* @__PURE__ */ Y("<div class=\"mb-[10px] flex items-center gap-3\"><div class=\"flex-none text-section text-ink\"> </div> <div class=\"flex h-10 min-w-[120px] flex-1 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Filter\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div> <!> <!></div>");
function OS(e, t) {
	I(t, !0);
	let n = $(t, "entityType", 7), r = $(t, "totalCount", 7, 0), i = $(t, "filterControl", 7), a = Dx(n()), o = /* @__PURE__ */ V(!1), s = /* @__PURE__ */ V(Y_(a.value.filter)), c, l = new Ni(), u = new Ni();
	Ex.pipe(fo(l)).subscribe((e) => {
		H(o, e.queryWithSubGroups, !0);
	}), u.pipe(fo(l), $a(200)).subscribe((e) => {
		a.update((t) => ({
			...t,
			filter: e
		}));
	}), _v(() => {
		u.next(J(s));
	});
	function d() {
		Ex.update((e) => ({
			...e,
			queryWithSubGroups: !e.queryWithSubGroups
		}));
	}
	Ob(() => {
		setTimeout(() => {
			c?.focus(), c?.select();
		}, 0);
	}), kb(() => {
		l.next(), l.complete();
	});
	var f = {
		get entityType() {
			return n();
		},
		set entityType(e) {
			n(e), B();
		},
		get totalCount() {
			return r();
		},
		set totalCount(e = 0) {
			r(e), B();
		},
		get filterControl() {
			return i();
		},
		set filterControl(e) {
			i(e), B();
		}
	}, p = DS(), m = U(p), h = av(m), g = W(m, 2), _ = U(g);
	fb(_), xb(_, (e) => c = e, () => c), bg(2), F(g);
	var v = W(g, 2);
	$y(v, () => i() ?? Fh);
	var y = W(v, 2);
	{
		let e = /* @__PURE__ */ R(() => J(o) ? "primary" : "neutral"), t = /* @__PURE__ */ R(() => J(o) ? "Untergruppen einbezogen" : "Nur diese Gruppe");
		qb(y, {
			size: 40,
			iconSize: 22,
			get variant() {
				return J(e);
			},
			get title() {
				return J(t);
			},
			icon: "account_tree",
			onclick: () => d()
		});
	}
	return F(p), G(() => Z(h, `Einträge gesamt: ${r() ?? ""}`)), _b(_, () => J(s), (e) => H(s, e)), X(e, p), L(f);
}
Db(OS, {
	entityType: {},
	totalCount: {},
	filterControl: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelect.svelte
var kS = /* @__PURE__ */ Y("<!> <div class=\"flex min-w-0 flex-1 flex-col overflow-hidden px-5 py-[14px]\"><!> <div class=\"min-h-0 flex-1\"><!></div></div>", 1), AS = /* @__PURE__ */ Y("<button type=\"button\" class=\"flex h-9 cursor-pointer items-center gap-2 rounded-button bg-primary px-4 text-cell font-medium text-on-primary transition-colors hover:bg-primary-hover\"><span class=\"material-symbols-rounded select-none text-[18px]\">check</span> Übernehmen</button>"), jS = /* @__PURE__ */ Y("<div class=\"flex h-full w-full flex-col overflow-hidden bg-surface\"><div class=\"flex flex-none items-center gap-3 border-b border-line py-3 pl-[18px] pr-3\"><div class=\"flex h-10 w-10 flex-none items-center justify-center rounded-dialog bg-primary-tint\"><span class=\"material-symbols-rounded select-none text-[20px] text-primary\"> </span></div> <div class=\"flex-1 truncate text-dialog-title text-ink\"> </div> <!></div> <div class=\"flex min-h-0 flex-1\"><!></div> <div class=\"flex flex-none items-center gap-3 border-t border-line px-[18px] py-3\"><div class=\"flex-1 text-count text-ink-secondary\"><!></div> <button type=\"button\" class=\"h-9 cursor-pointer rounded-button border border-line px-4 text-cell font-medium text-ink transition-colors hover:bg-neutral-hover\">Abbrechen</button> <!></div></div>");
function MS(e, t) {
	I(t, !0);
	let n = $(t, "entityType", 23, () => r.Signal), i = $(t, "selectMultiple", 7, !1), a = $(t, "additionalFilter", 7, null), o = $(t, "onselectedEntities", 7), s = $(t, "onclose", 7), c = Hb(gp), l = Hb(vp), u = /* @__PURE__ */ V(void 0), d = /* @__PURE__ */ V(!1), f = /* @__PURE__ */ V(0), p = /* @__PURE__ */ V(0), m = [], h = /* @__PURE__ */ R(() => rx(n())), g = Ex.subscribe((e) => {
		e.selectedTenant ? (H(d, !1), y(e.selectedTenant)) : H(d, !0);
	}), _ = Tx.subscribe((e) => {
		m = e.selectedEntities ?? [], H(p, m.length, !0), e.selectedEntities && !i() && (v(e.selectedEntities), o()?.(e.selectedEntities[0]));
	});
	function v(e) {
		let t = Dx(n()), r = t.value.lastSelectedEntities, i = e.filter((e) => !r.includes(e.Id)).map((e) => e.Id);
		r.unshift(...i), r.splice(5), t.update((e) => ({
			...e,
			lastSelectedEntities: r
		}));
	}
	async function y(e) {
		try {
			H(u, await l.getTenantViewById(e), !0);
		} catch (e) {
			console.error(e), H(d, !0);
		}
	}
	async function b(e) {
		let t = await c.getEntityById(r.Group, e.Root);
		Ex.update((t) => ({
			...t,
			selectedTenant: e.Id
		})), Dx(n()).update((e) => ({
			...e,
			selectedGroup: t
		}));
	}
	function x() {
		H(d, !0);
	}
	function S() {
		v(m), o()?.(m);
	}
	kb(() => {
		g.unsubscribe(), _.unsubscribe();
	});
	var ee = {
		get entityType() {
			return n();
		},
		set entityType(e = r.Signal) {
			n(e), B();
		},
		get selectMultiple() {
			return i();
		},
		set selectMultiple(e = !1) {
			i(e), B();
		},
		get additionalFilter() {
			return a();
		},
		set additionalFilter(e = null) {
			a(e), B();
		},
		get onselectedEntities() {
			return o();
		},
		set onselectedEntities(e) {
			o(e), B();
		},
		get onclose() {
			return s();
		},
		set onclose(e) {
			s(e), B();
		}
	}, C = jS(), te = U(C), ne = U(te), re = av(U(ne), !0);
	F(ne);
	var ie = W(ne, 2), ae = av(ie);
	qb(W(ie, 2), {
		size: 36,
		iconSize: 20,
		icon: "close",
		onclick: () => s()?.()
	}), F(te);
	var oe = W(te, 2), se = U(oe), ce = (e) => {
		{
			let t = /* @__PURE__ */ R(() => !!J(u));
			ex(e, {
				get allowBack() {
					return J(t);
				},
				onback: () => H(d, !1),
				ontenantSelected: (e) => b(e)
			});
		}
	}, le = (e) => {
		var t = kS(), r = iv(t);
		Hx(r, {
			get selectMultiple() {
				return i();
			},
			get entityType() {
				return n();
			},
			get selectedTenant() {
				return J(u);
			},
			onchangeTenant: () => x()
		});
		var o = W(r, 2), s = U(o);
		OS(s, {
			get entityType() {
				return n();
			},
			get totalCount() {
				return J(f);
			}
		});
		var c = W(s, 2);
		ES(U(c), {
			get selectMultiple() {
				return i();
			},
			get entityType() {
				return n();
			},
			get additionalFilter() {
				return a();
			},
			get totalCount() {
				return J(f);
			},
			set totalCount(e) {
				H(f, e, !0);
			}
		}), F(c), F(o), X(e, t);
	};
	Q(se, (e) => {
		J(d) ? e(ce) : e(le, -1);
	}), F(oe);
	var ue = W(oe, 2), de = U(ue), fe = U(de), pe = (e) => {
		var t = Ey();
		G(() => Z(t, `${J(p) ?? ""} Ausgewählt`)), X(e, t);
	};
	Q(fe, (e) => {
		i() && e(pe);
	}), F(de);
	var w = W(de, 2), me = W(w, 2), he = (e) => {
		var t = AS();
		_y("click", t, () => S()), X(e, t);
	};
	return Q(me, (e) => {
		i() && e(he);
	}), F(ue), F(C), G(() => {
		Z(re, J(h).icon), Z(ae, `${J(h).singular ?? ""} auswählen`);
	}), _y("click", w, () => s()?.()), X(e, C), L(ee);
}
vy(["click"]), Db(MS, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {},
	onclose: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectDialog.svelte
var NS = /* @__PURE__ */ Y("<div class=\"flex h-[660px] max-h-[90vh] w-[1280px] max-w-[95vw] overflow-hidden rounded-dialog bg-surface shadow-dialog\"><div class=\"h-full w-full\"><!></div></div>");
function PS(e, t) {
	I(t, !0);
	let n = $(t, "open", 15, !1), i = $(t, "entityType", 23, () => r.Signal), a = $(t, "selectMultiple", 7, !1), o = $(t, "additionalFilter", 7, null), s = $(t, "onselectedEntities", 7), c = $(t, "oncancel", 7), l = Hb("PopupService", new Bb(document.body)), u = /* @__PURE__ */ V(void 0), d;
	_v(() => {
		p(n(), J(u));
	});
	function f(e) {
		n(e);
	}
	function p(e, t) {
		e && !d && t ? (d = l.openPopup("entity-select-dialog", t, {
			backdrop: !0,
			closeOnClickOutside: !0,
			positioning: "center",
			inTransitionClassList: "scale-100",
			inTransitionDuration: 125,
			outTransitionClassList: "!scale-50",
			outTransitionDuration: 125
		}), d.afterClosed.then(() => {
			d = null, e = !1, c()?.();
		})) : m();
	}
	function m() {
		d?.close();
	}
	function h(e) {
		e.key === "Escape" && m();
	}
	var g = {
		setOpen: f,
		get open() {
			return n();
		},
		set open(e = !1) {
			n(e), B();
		},
		get entityType() {
			return i();
		},
		set entityType(e = r.Signal) {
			i(e), B();
		},
		get selectMultiple() {
			return a();
		},
		set selectMultiple(e = !1) {
			a(e), B();
		},
		get additionalFilter() {
			return o();
		},
		set additionalFilter(e = null) {
			o(e), B();
		},
		get onselectedEntities() {
			return s();
		},
		set onselectedEntities(e) {
			s(e), B();
		},
		get oncancel() {
			return c();
		},
		set oncancel(e) {
			c(e), B();
		}
	}, _ = NS(), v = U(_);
	return MS(U(v), {
		get selectMultiple() {
			return a();
		},
		get entityType() {
			return i();
		},
		get additionalFilter() {
			return o();
		},
		onselectedEntities: (e) => s()?.(e),
		onclose: () => m()
	}), F(v), F(_), xb(_, (e) => H(u, e), () => J(u)), _y("keydown", _, h), _y("click", _, (e) => e.stopPropagation()), X(e, _), L(g);
}
vy(["keydown", "click"]), Db(PS, {
	open: {},
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {},
	oncancel: {}
}, [], ["setOpen"], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-dialog.service.ts
var FS = class {
	selectEntity(e, t = null) {
		return this._openEntitySelectDialog(e, !1, t).then((e) => e.length === 1 ? e[0] : null);
	}
	selectMultipleEntities(e, t = null) {
		return this._openEntitySelectDialog(e, !0, t);
	}
	_openEntitySelectDialog(e, t, n) {
		return new Promise((r) => {
			let i = !1, a = My(PS, {
				target: document.body,
				props: {
					entityType: e,
					open: !1,
					selectMultiple: t,
					additionalFilter: n,
					onselectedEntities: (e) => {
						o(Array.isArray(e) ? e : [e].filter((e) => e != null));
					},
					oncancel: () => o([])
				}
			});
			function o(e) {
				i || (i = !0, a.setOpen(!1), setTimeout(() => {
					Ly(a);
				}, 200), r(e));
			}
			setTimeout(() => {
				a.setOpen(!0);
			}, 50);
		});
	}
}, IS = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-600:oklch(54.6% .245 262.881);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-medium:500;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:#b2187a;--color-primary-hover:#8c1260;--color-on-primary:#fff;--color-primary-tint:#b2187a1a}@supports (color:color-mix(in lab, red, red)){:root,:host{--color-primary-tint:color-mix(in srgb, var(--color-primary) 10%, transparent)}}:root,:host{--color-primary-tint-subtle:#b2187a14}@supports (color:color-mix(in lab, red, red)){:root,:host{--color-primary-tint-subtle:color-mix(in srgb, var(--color-primary) 8%, transparent)}}:root,:host{--color-surface:#fff;--color-surface-border:#ccc;--color-ink:#000000db;--color-ink-secondary:#00000094;--color-ink-tertiary:#0006;--color-ink-disabled:#00000040;--color-line:#0000001f;--color-line-strong:#0000004d;--color-row-line:#00000014;--color-row-hover:#00000009;--color-row-active:#00000014;--color-neutral-hover:#0000000b;--color-muted:#00000009;--color-select:#1976d2;--color-checkbox-border:#00000073;--color-checkbox-border-disabled:#00000026;--color-danger:#c62828;--color-danger-tint:#c628281a;--text-dialog-title:18px;--text-section:17px;--text-count:15px;--text-cell:13.5px;--text-meta:12.5px;--text-sub:11.5px;--text-label:11px;--radius-dialog:10px;--radius-control:8px;--radius-button:6px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,:after,:before,::backdrop{border-color:var(--color-line,currentColor)}::file-selector-button{border-color:var(--color-line,currentColor)}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.\\!top-\\[-150px\\]{top:-150px!important}.\\!top-\\[2px\\]{top:2px!important}.top-0{top:0}.top-1{top:var(--spacing)}.top-10{top:calc(var(--spacing) * 10)}.top-\\[50\\%\\]{top:50%}.right-2{right:calc(var(--spacing) * 2)}.right-\\[-5px\\]{right:-5px}.left-0{left:0}.isolate{isolation:isolate}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.float-left{float:left}.float-right{float:right}.\\!container{width:100%!important}@media (width>=40rem){.\\!container{max-width:40rem!important}}@media (width>=48rem){.\\!container{max-width:48rem!important}}@media (width>=64rem){.\\!container{max-width:64rem!important}}@media (width>=80rem){.\\!container{max-width:80rem!important}}@media (width>=96rem){.\\!container{max-width:96rem!important}}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mx-2{margin-inline:calc(var(--spacing) * 2)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-\\[-10px\\]{margin-top:-10px}.mt-\\[2px\\]{margin-top:2px}.mt-\\[10px\\]{margin-top:10px}.mr-1{margin-right:var(--spacing)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-4{margin-right:calc(var(--spacing) * 4)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-\\[10px\\]{margin-bottom:10px}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-4{margin-left:calc(var(--spacing) * 4)}.\\!hidden{display:none!important}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.list-item{display:list-item}.table{display:table}.table-row{display:table-row}.\\!h-\\[30px\\]{height:30px!important}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-\\[2px\\]{height:2px}.h-\\[3px\\]{height:3px}.h-\\[4px\\]{height:4px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.h-\\[30px\\]{height:30px}.h-\\[44px\\]{height:44px}.h-\\[70vh\\]{height:70vh}.h-\\[660px\\]{height:660px}.h-full{height:100%}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[400px\\]{max-height:400px}.min-h-0{min-height:0}.w-4{width:calc(var(--spacing) * 4)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-\\[3px\\]{width:3px}.w-\\[4px\\]{width:4px}.w-\\[18px\\]{width:18px}.w-\\[20px\\]{width:20px}.w-\\[34px\\]{width:34px}.w-\\[44px\\]{width:44px}.w-\\[46px\\]{width:46px}.w-\\[50px\\]{width:50px}.w-\\[70px\\]{width:70px}.w-\\[80vw\\]{width:80vw}.w-\\[110px\\]{width:110px}.w-\\[120px\\]{width:120px}.w-\\[200px\\]{width:200px}.w-\\[280px\\]{width:280px}.w-\\[1280px\\]{width:1280px}.w-full{width:100%}.\\!max-w-\\[400px\\]{max-width:400px!important}.max-w-\\[95vw\\]{max-width:95vw}.min-w-0{min-width:0}.min-w-\\[120px\\]{min-width:120px}.\\!flex-none{flex:none!important}.flex-1{flex:1}.flex-\\[2\\]{flex:2}.flex-\\[50px\\]{flex:50px}.flex-none{flex:none}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.\\!scale-50{--tw-scale-x:50%!important;--tw-scale-y:50%!important;--tw-scale-z:50%!important;scale:var(--tw-scale-x) var(--tw-scale-y)!important}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform\\!{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)!important}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-\\[6px\\]{gap:6px}.gap-\\[10px\\]{gap:10px}.self-center{align-self:center}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-\\[3px\\]{border-radius:3px}.rounded-\\[4px\\]{border-radius:4px}.rounded-button{border-radius:var(--radius-button)}.rounded-control{border-radius:var(--radius-control)}.rounded-dialog{border-radius:var(--radius-dialog)}.rounded-full{border-radius:2147483647px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-\\[3px\\]{border-left-style:var(--tw-border-style);border-left-width:3px}.border-none{--tw-border-style:none;border-style:none}.\\!border-primary{border-color:var(--color-primary)!important}.border-checkbox-border{border-color:var(--color-checkbox-border)}.border-checkbox-border-disabled{border-color:var(--color-checkbox-border-disabled)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-500{border-color:var(--color-gray-500)}.border-line{border-color:var(--color-line)}.border-row-line{border-color:var(--color-row-line)}.border-slate-400{border-color:var(--color-slate-400)}.border-surface-border{border-color:var(--color-surface-border)}.border-transparent{border-color:#0000}.\\!bg-slate-300{background-color:var(--color-slate-300)!important}.bg-\\[rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{background-color:#0000001a}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-500{background-color:var(--color-green-500)}.bg-ink-disabled{background-color:var(--color-ink-disabled)}.bg-muted{background-color:var(--color-muted)}.bg-neutral-hover{background-color:var(--color-neutral-hover)}.bg-primary{background-color:var(--color-primary)}.bg-primary-tint{background-color:var(--color-primary-tint)}.bg-red-500{background-color:var(--color-red-500)}.bg-select{background-color:var(--color-select)}.bg-slate-200{background-color:var(--color-slate-200)}.bg-surface{background-color:var(--color-surface)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.p-1{padding:var(--spacing)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-\\[10px\\]{padding:10px}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-\\[5px\\]{padding-inline:5px}.px-\\[10px\\]{padding-inline:10px}.px-\\[18px\\]{padding-inline:18px}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-\\[1px\\]{padding-block:1px}.py-\\[2px\\]{padding-block:2px}.py-\\[7px\\]{padding-block:7px}.py-\\[10px\\]{padding-block:10px}.py-\\[14px\\]{padding-block:14px}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-\\[2px\\]{padding-top:2px}.pt-\\[10px\\]{padding-top:10px}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-\\[10px\\]{padding-right:10px}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-\\[10px\\]{padding-bottom:10px}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-\\[10px\\]{padding-left:10px}.pl-\\[18px\\]{padding-left:18px}.pl-\\[26px\\]{padding-left:26px}.text-center{text-align:center}.text-left{text-align:left}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\!text-\\[20px\\]{font-size:20px!important}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[20px\\]{font-size:20px}.text-\\[24px\\]{font-size:24px}.text-cell{font-size:var(--text-cell)}.text-count{font-size:var(--text-count)}.text-dialog-title{font-size:var(--text-dialog-title)}.text-label{font-size:var(--text-label)}.text-meta{font-size:var(--text-meta)}.text-section{font-size:var(--text-section)}.text-sub{font-size:var(--text-sub)}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-wrap{text-wrap:wrap}.break-normal{overflow-wrap:normal;word-break:normal}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-ink{color:var(--color-ink)}.text-ink-disabled{color:var(--color-ink-disabled)}.text-ink-secondary{color:var(--color-ink-secondary)}.text-ink-tertiary{color:var(--color-ink-tertiary)}.text-on-primary{color:var(--color-on-primary)}.text-primary{color:var(--color-primary)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-dialog{--tw-shadow:0 5px 5px -3px var(--tw-shadow-color,#0003), 0 8px 10px 1px var(--tw-shadow-color,#00000024), 0 3px 14px 2px var(--tw-shadow-color,#0000001f);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0px 1.2px 3.6px var(--tw-shadow-color,#0000001c), 0px 6.4px 14.4px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0px .6px 1.8px var(--tw-shadow-color,#0000001a), 0px 3.2px 7.2px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0px .3px .9px var(--tw-shadow-color,#0000001a), 0px 1.6px 3.6px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter\\!{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-all{-webkit-user-select:all;user-select:all}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:border-gray-300:is(:where(.group):hover *){border-color:var(--color-gray-300)}}.placeholder\\:text-ink-tertiary::placeholder{color:var(--color-ink-tertiary)}.first\\:border-l-0:first-child{border-left-style:var(--tw-border-style);border-left-width:0}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.focus-within\\:border-blue-300:focus-within{border-color:var(--color-blue-300)}.focus-within\\:border-primary:focus-within{border-color:var(--color-primary)}@media (hover:hover){.hover\\:border-line-strong:hover{border-color:var(--color-line-strong)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-neutral-hover:hover{background-color:var(--color-neutral-hover)}.hover\\:bg-primary-hover:hover{background-color:var(--color-primary-hover)}.hover\\:bg-primary-tint:hover{background-color:var(--color-primary-tint)}.hover\\:bg-primary-tint-subtle:hover{background-color:var(--color-primary-tint-subtle)}.hover\\:bg-row-hover:hover{background-color:var(--color-row-hover)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:bg-slate-300:hover{background-color:var(--color-slate-300)}.hover\\:underline:hover{text-decoration-line:underline}}@media (width>=48rem){.md\\:w-\\[80vw\\]{width:80vw}}@media (width>=64rem){.lg\\:w-\\[60vw\\]{width:60vw}}@media (width>=96rem){.\\32 xl\\:w-\\[50vw\\]{width:50vw}}}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v34/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2)format(\"woff2\")}.material-symbols-rounded{font-variation-settings:\"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;font-family:Material Symbols Rounded;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.material-symbols-rounded.filled{font-variation-settings:\"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24}@keyframes indeterminateAnimation{0%{transform:translate(0)scaleX(0)}40%{transform:translate(0)scaleX(.4)}to{transform:translate(100%)scaleX(.5)}}.audako-indeterminate-bar{transform-origin:0%;animation:1s linear infinite indeterminateAnimation}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}", LS = null;
function RS() {
	return typeof CSSStyleSheet > "u" || !("replaceSync" in CSSStyleSheet.prototype) ? null : (LS || (LS = new CSSStyleSheet(), LS.replaceSync(IS)), LS);
}
function zS(e) {
	if (!e) return;
	let t = RS();
	if (t) {
		e.adoptedStyleSheets.includes(t) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]);
		return;
	}
	if (!e.querySelector("style[data-audako-styles]")) {
		let t = document.createElement("style");
		t.setAttribute("data-audako-styles", ""), t.textContent = IS, e.prepend(t);
	}
}
function BS(e) {
	return class extends e {
		connectedCallback() {
			zS(this.shadowRoot), super.connectedCallback?.();
		}
	};
}
//#endregion
//#region src/components/entity-select/AudakoEntitySelect.svelte
var VS = /* @__PURE__ */ Y("<div class=\"w-full h-full overflow-hidden\"><!></div>");
function HS(e, t) {
	I(t, !0);
	let n = $(t, "entityType", 7, void 0), i = $(t, "multiple", 7, !1), a = $(t, "filter", 7, void 0);
	Wb(Bb, new Bb(document.body));
	let o = /* @__PURE__ */ R(() => Object.values(r).includes(n()));
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
			n(e), B();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), B();
		},
		get filter() {
			return a();
		},
		set filter(e = void 0) {
			a(e), B();
		}
	}, l = VS(), u = U(l), d = (e) => {
		{
			let t = /* @__PURE__ */ R(() => a() ?? {});
			MS(e, {
				get entityType() {
					return n();
				},
				get selectMultiple() {
					return i();
				},
				get additionalFilter() {
					return J(t);
				},
				onselectedEntities: s
			});
		}
	};
	return Q(u, (e) => {
		J(o) && e(d);
	}), F(l), X(e, l), L(c);
}
Db(HS, {
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
}, [], [], { mode: "open" }, BS);
//#endregion
//#region src/components/select/AudakoSelect.svelte
function US(e, t) {
	I(t, !0);
	let n = $(t, "value", 7, void 0), r = $(t, "arrayvalue", 23, () => []), i = $(t, "multiple", 7, !1), a = $(t, "options", 23, () => []), o = $(t, "placeholder", 7, void 0), s = $(t, "containerClass", 7, ""), c = $(t, "textfieldClass", 7, ""), l = $(t, "suffixClass", 7, "");
	function u(e) {
		t.$$host.dispatchEvent(new CustomEvent("valuechanged", { detail: e }));
	}
	var d = {
		get value() {
			return n();
		},
		set value(e = void 0) {
			n(e), B();
		},
		get arrayvalue() {
			return r();
		},
		set arrayvalue(e = []) {
			r(e), B();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), B();
		},
		get options() {
			return a();
		},
		set options(e = []) {
			a(e), B();
		},
		get placeholder() {
			return o();
		},
		set placeholder(e = void 0) {
			o(e), B();
		},
		get containerClass() {
			return s();
		},
		set containerClass(e = "") {
			s(e), B();
		},
		get textfieldClass() {
			return c();
		},
		set textfieldClass(e = "") {
			c(e), B();
		},
		get suffixClass() {
			return l();
		},
		set suffixClass(e = "") {
			l(e), B();
		}
	};
	{
		let t = /* @__PURE__ */ R(() => i() ? r() : n());
		sS(e, {
			get value() {
				return J(t);
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
	return L(d);
}
Db(US, {
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
}, [], [], { mode: "open" }, BS);
//#endregion
//#region src/components/tenant-select/AudakoTenantSelect.svelte
function WS(e, t) {
	I(t, !0);
	let n = $(t, "allowBack", 7, !1);
	function r(e, n) {
		t.$$host.dispatchEvent(new CustomEvent(e, {
			detail: n,
			bubbles: !0,
			composed: !0
		}));
	}
	return ex(e, {
		get allowBack() {
			return n();
		},
		ontenantSelected: (e) => r("tenantselected", { tenant: e }),
		onback: () => r("back", null)
	}), L({
		get allowBack() {
			return n();
		},
		set allowBack(e = !1) {
			n(e), B();
		}
	});
}
Db(WS, { allowBack: {
	attribute: "allowback",
	type: "Boolean"
} }, [], [], { mode: "open" }, BS);
//#endregion
//#region src/shared/components/menu/MenuItemComponent.svelte
var GS = /* @__PURE__ */ Y("<div class=\"mr-2 flex item-center\"><span class=\"material-symbols-rounded z-[1] select-none flex items-center svelte-rq91mb\"><!></span></div>"), KS = /* @__PURE__ */ Y("<div class=\"hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md svelte-rq91mb\"><!> <div class=\"flex-grow\"> </div></div>"), qS = {
	hash: "svelte-rq91mb",
	code: ".hover-highlight.svelte-rq91mb:hover {background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important;}.material-symbols-rounded.svelte-rq91mb {font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;}"
};
function JS(e, t) {
	I(t, !0), eb(e, qS);
	let n = $(t, "icon", 7, null), r = $(t, "label", 7, null), i = $(t, "onclick", 7), a = $(t, "children", 7);
	var o = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), B();
		},
		get label() {
			return r();
		},
		set label(e = null) {
			r(e), B();
		},
		get onclick() {
			return i();
		},
		set onclick(e) {
			i(e), B();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), B();
		}
	}, s = KS(), c = U(s), l = (e) => {
		var t = GS(), r = U(t), i = U(r), o = (e) => {
			var t = Dy();
			$y(iv(t), a), X(e, t);
		}, s = (e) => {
			var t = Ey();
			G(() => Z(t, n())), X(e, t);
		};
		Q(i, (e) => {
			a() ? e(o) : e(s, -1);
		}), F(r), F(t), X(e, t);
	};
	Q(c, (e) => {
		n() && e(l);
	});
	var u = av(W(c, 2), !0);
	return F(s), G(() => Z(u, r())), _y("click", s, (e) => i()?.(e)), X(e, s), L(o);
}
vy(["click"]), Db(JS, {
	icon: {},
	label: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/menu/Menu.svelte
var YS = /* @__PURE__ */ Y("<div></div>");
function XS(e, t) {
	I(t, !0);
	let n = $(t, "anchorSelector", 7), r = $(t, "preferedVerticalAlignment", 7, "top"), i = $(t, "preferedHorizontalAlignment", 7, "left"), a = $(t, "positionOffset", 23, () => ({
		x: 0,
		y: 10
	})), o = $(t, "container$class", 7, ""), s = $(t, "closeOnClick", 7, !0), c = $(t, "items", 23, () => []), l = /* @__PURE__ */ R(() => n() ? document.querySelector(n()) : null), u;
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
			n(e), B();
		},
		get preferedVerticalAlignment() {
			return r();
		},
		set preferedVerticalAlignment(e = "top") {
			r(e), B();
		},
		get preferedHorizontalAlignment() {
			return i();
		},
		set preferedHorizontalAlignment(e = "left") {
			i(e), B();
		},
		get positionOffset() {
			return a();
		},
		set positionOffset(e = {
			x: 0,
			y: 10
		}) {
			a(e), B();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), B();
		},
		get closeOnClick() {
			return s();
		},
		set closeOnClick(e = !0) {
			s(e), B();
		},
		get items() {
			return c();
		},
		set items(e = []) {
			c(e), B();
		}
	};
	return xb(tS(e, {
		get closeOnClick() {
			return s();
		},
		get anchorElement() {
			return J(l);
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
			var n = YS();
			qy(n, 21, c, Uy, (e, t) => {
				JS(e, {
					get label() {
						return J(t).label;
					},
					get icon() {
						return J(t).icon;
					},
					onclick: (e) => J(t).action(e)
				});
			}), F(n), G(() => ob(n, 1, `bg-white rounded shadow-lg ${o() ?? ""}`)), X(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => u = e, () => u), L(p);
}
Db(XS, {
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
function ZS(e, t) {
	I(t, !0);
	let n = $(t, "items", 23, () => []), r = $(t, "closeOnClick", 7, !0), i = $(t, "containerClass", 7, ""), a = $(t, "anchorSelector", 7, ""), o = /* @__PURE__ */ V(void 0);
	return _v(() => {
		let e = t.$$host;
		e.openMenu = () => J(o)?.openMenu(), e.closeMenu = () => J(o)?.closeMenu();
	}), xb(XS(e, {
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
	}), (e) => H(o, e, !0), () => J(o)), L({
		get items() {
			return n();
		},
		set items(e = []) {
			n(e), B();
		},
		get closeOnClick() {
			return r();
		},
		set closeOnClick(e = !0) {
			r(e), B();
		},
		get containerClass() {
			return i();
		},
		set containerClass(e = "") {
			i(e), B();
		},
		get anchorSelector() {
			return a();
		},
		set anchorSelector(e = "") {
			a(e), B();
		}
	});
}
Db(ZS, {
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
function QS(e) {
	return e.element;
}
var $S = QS(HS), eC = QS(WS), tC = QS(US), nC = QS(ZS);
function rC() {
	aC("audako-entity-select", $S), aC("audako-tenant-select", eC), aC("audako-select", tC), aC("audako-menu", nC);
}
function iC(e, t) {
	let n = new gp(e, t);
	Wb(Lm, new Lm(e, t)), Wb(gp, n), Wb(vp, new vp(e, t)), Wb(bp, new bp(n)), Wb(wp, new wp(e, t)), Wb(FS, new FS()), Wb(Um, new Um(e, t)), Wb(Sp, new Sp(e, t));
}
function aC(e, t, n) {
	customElements.get(e) || customElements.define(e, t, n);
}
//#endregion
export { Gs as AcquisitionInterval, Ks as AcquisitionUnit, Xc as AlarmPlanningCheckerConfig, Yc as AlarmPlanningCheckerConfigVersion, Jc as AlarmPlanningConfig, qc as AlarmPlanningConfigVersion, Qc as AlarmTimerConfig, Zc as AlarmTimerConfigVersion, le as AlarmTrigger, ur as AlarmingPlan, Rc as AudakoWidgetImageConfig, Lc as AudakoWidgetImageConfigVersion, Do as AxisOptions, uc as Badge, mp as BaseHttpService, D as BaseWidgetConfig, Ut as BatchAction, Yt as BatchDefinition, Zt as BatchReleaseSettings, tn as BatchReportExportSettings, rn as BatchReviewDefinition, nn as BatchReviewSettings, Cr as BatchTrigger, Qt as BatchValueObject, ft as BitSelectConversionTypes, Zs as CURRENCY_CODES, Hn as Camera, Wn as CameraImage, Un as CameraImageType, Vn as CameraViewMode, Ce as ChangeRateMonitoringSettings, g as CheckboxFieldSettings, Fo as ClockType, Eo as ColumnSeriesOptions, Er as CompressionInterval, kt as CompressionType, kt as FormulaCompressionType, $t as ConditionEventEntry, w as ConditionSettings, xr as ConditionTrigger, u as ConfigurationEntity, ge as ConnectionFailureConditionSettings, Ft as Connector, Vt as ConnectorObject, Bt as ConnectorObjectAccessLevel, zt as ConnectorObjectType, Rt as ConnectorRestApiCredential, Lt as ConnectorRestApiSettings, Pt as ConnectorType, It as ConnectorTypedSettings, he as CounterConditionSettings, Vm as CounterOffset, bs as CrossTabMode, f as CustomFieldSettings, x as CustomMappingFieldSettings, _r as CyclicTrigger, hc as DEFAULT_MAP_ANALYSIS_DISPLAY_OPTIONS, ne as Dashboard, re as DashboardTab, ae as DashboardTabEntity, ie as DashboardTabPlaceholder, Pe as DataConnection, We as DataConnectionBacnetSettings, Ep as DataConnectionBrowserService, st as DataConnectionCsvImporterSettings, Ye as DataConnectionEhWebserverSettings, _e as DataConnectionFailureConditionSettings, ct as DataConnectionFtpParserSettings, Ue as DataConnectionIEC104Settings, Je as DataConnectionIot2000ModuleSettings, qe as DataConnectionKnxSettings, ot as DataConnectionLoRaWANSettings, tt as DataConnectionMeterBusSettings, He as DataConnectionModbusSettings, Ze as DataConnectionModemInfoSettings, Qe as DataConnectionMqttSettings, nt as DataConnectionMtmAdapterSettings, it as DataConnectionOTTDataLoggerSettings, $e as DataConnectionOneWireSettings, Re as DataConnectionOpcUaSecurityAuthentication, Le as DataConnectionOpcUaSecurityMode, Ie as DataConnectionOpcUaSecurityPolicy, Ve as DataConnectionOpcUaSettings, ze as DataConnectionOpcUaStringEncoding, Be as DataConnectionOpcUaTimestampSource, Fe as DataConnectionS7Settings, T as DataConnectionSettings, T as DataConnectionTypedSettings, Ge as DataConnectionSimulationSettings, Xe as DataConnectionSnmpSettings, Ne as DataConnectionSpecialDeviceProfile, at as DataConnectionTeltonikaGPSSettings, Me as DataConnectionType, Ke as DataConnectionUniversalSettings, rt as DataConnectionYDOCDataLoggerSettings, Ae as DataSource, wp as DataSourceHttpService, ke as DataSourceType, _ as DateFieldSettings, De as DifferenceMonitoringSettings, Ln as Document, tr as EmailContact, _l as EnteredAlarmingIntervalType, Ac as EntityAction, y as EntityFieldSettings, a as EntityHttpEndpoints, gp as EntityHttpService, i as EntityIcons, bp as EntityNameService, s as EntityObjectOrientationAttribute, $S as EntitySelect, FS as EntitySelectDialogService, r as EntityType, kr as EntityTypeClassMapping, jr as EntityUtils, Sc as EntryListViewType, yn as EventAction, fc as EventBadge, ue as EventCategory, ce as EventCategoryClass, de as EventCondition, fe as EventConditionSettingsType, oe as EventDefinition, Kt as EventEntityType, vn as EventReport, _n as EventReportSettings, yr as EventTrigger, Gt as EventTriggerState, se as ExpressionParameter, c as Field, o as FieldObjectOrientationAttribute, Bn as FileEntry, wt as Formula, Dt as FormulaIntervalSettings, Tt as FormulaNumericSettings, jt as FormulaType, Mt as FormulaValueType, Et as FormulaVariable, Go as GaugeRange, Uo as GaugeValueObjectType, Qn as Gender, Jo as GetGaugeInvertByKey, qo as GetGaugeRotationByKey, Ko as GetRangeKey, S as Group, Oo as GuidelineOptions, Ms as HeatMapCategoryAxisOptions, Ps as HeatMapChartConfig, Ns as HeatMapColumnSeriesOptions, zm as HistoricalValue, Gm as HistoricalValueManipulationHttpService, Hm as HistoricalValueObject, Or as HistoricalValueOperationStatus, Um as HistoricalValueService, Hc as IframeLoadingMethods, xo as IntervalSettings, rc as LeafletLatLng, To as LineSeriesOptions, Fm as LiveHubEvent, Pm as LiveHubMethod, ac as LiveRequestType, Lm as LiveValueService, bn as MailEventAction, yc as MaintEntryState, dr as MaintenanceService, pc as MapAnalysesConfigVersion, mc as MapAnalysisValueDisplayType, ic as MapConfig, nc as MapConfigVersion, lc as MapGroup, cc as MapMarkerConfig, oc as MapRequestTypes, be as MaximumMonitoringSettings, Dr as MeasurementValueSource, nC as Menu, en as MetadataField, qt as MetadataFieldType, Jt as MetadataSource, et as MeterBusMode, ye as MinimumMonitoringSettings, p as NumberFieldSettings, jc as ObjectOperations, Oe as ObjectSettings, Ar as ObjectUtils, bo as ObservationPeriodUnits, Bm as OffsetSource, Nm as OperationStatus, ee as PartList, xe as PeriodMaximumMonitoringSettings, Se as PeriodMaximumMonitoringSettingsPeriod, je as PermaLiveModeSettings, Vc as PermissionsPolicyAllowList, nr as PhoneBasedContact, As as PieChartConfig, we as PlausibilityMonitoringSettings, sc as PopupSignalConfig, Te as PositionMonitoringSettings, Ht as ProcessImage, C as PropertyGroup, sr as PushoverContact, $n as Recipient, er as RecipientContact, cr as RecipientGroup, lr as RecipientGroupMember, $c as RecipientType, Ee as RecordingFailureMonitoringSettings, vt as RecordingSpecialProcessingType, yt as RecordingType, fn as Report, hn as ReportCaptionElement, un as ReportColumnType, Sn as ReportElement, Cn as ReportElementSettings, an as ReportEngineType, kn as ReportField, An as ReportFieldSettings, Tn as ReportGroup, En as ReportGroupSettings, gn as ReportItemElement, ln as ReportItemElementType, Dn as ReportList, On as ReportListSettings, pn as ReportObject, wn as ReportParameterDefinition, dn as ReportParameterType, In as ReportSettings, cn as ReportStorageType, jn as ReportTable, Nn as ReportTableElement, Pn as ReportTableEntry, Fn as ReportTableHeader, Mn as ReportTableSettings, sn as ReportTemplate, on as ReportTimeStepSize, mn as ReportTypedElement, ml as RequestIntervalType, Zn as Role, mr as RuntimeScript, Ls as SankeyChartWidgetFormAggregationTypes, Sr as ScriptBatchTriggerState, br as ScriptConditionTriggerState, vr as ScriptEventTriggerState, gr as ScriptTrigger, tC as Select, v as SelectFieldSettings, d as SelectFieldType, Mc as SelectableEntitiesTranslation, Xs as SelectionType, Co as SeriesOptions, So as SeriesType, Cc as ServiceFilterType, ls as SetPointStatus, ut as Signal, ht as SignalAnalogSettings, dc as SignalBadge, St as SignalCompressionSettings, E as SignalCompressionType, me as SignalConditionSettings, pe as SignalConditionSettingsOperator, gt as SignalCounterSettings, mt as SignalDigitalSettings, es as SignalListGroup, dt as SignalOutputSettings, bt as SignalRecordingSettings, pt as SignalSettings, lt as SignalType, _t as SignalTypeSettingsMap, ss as SliderEntry, rr as SmsContact, hr as StaticScriptVariable, pr as StepDefinition, wo as StepLineSeriesOptions, Rn as Storage, zn as StorageEntry, xn as StorageEventAction, Im as SubscriptionPrefix, qn as SwitchOperation, Kn as SwitchRule, Gn as SwitchSchedule, Jn as SwitchType, Nt as TagScope, fr as TaskDefinition, or as TeamsContact, ar as TelegramContact, te as TemplateVariable, vp as TenantHttpService, eC as TenantSelect, wr as TenantView, h as TextAreaFieldSettings, m as TextFieldSettings, yo as TimeManagementSettings, Vs as TimeStepSize, ve as TimebasedConditionSettings, qs as TimelineOptions, Ts as TrafficLightColorTranslations, ws as TrafficLightModeTranslations, Cs as TrafficLightModes, xs as TrafficLights, l as TranslatableField, Xt as TriggerDefinition, Wt as TriggerType, Xn as User, b as UserFieldSettings, Tr as UserProfile, Sp as UserProfileHttpService, Yn as UserRegistrationStates, ko as ValueAxisOptions, vo as ValueEntityType, Ot as ValueIntervalType, At as VariableType, ir as VoipContact, Pc as WidgetAuditLogListConfig, kc as WidgetAuditLogListFilterType, Nc as WidgetAuditLogListVersion, zo as WidgetBasicXyChartConfig, Ro as WidgetBasicXyChartConfigVersion, tc as WidgetBatchArchiveConfig, ec as WidgetBatchArchiveConfigVersion, Ys as WidgetBillingConfig, Js as WidgetBillingConfigVersion, vc as WidgetCameraConfig, _c as WidgetCameraConfigVersion, Po as WidgetClockConfig, No as WidgetClockConfigVersion, hs as WidgetCounterManagementConfig, ms as WidgetCounterManagementConfigVersion, Vo as WidgetDataImportConfig, Bo as WidgetDataImportConfigVersion, Qo as WidgetDigitalSwitchConfig, Zo as WidgetDigitalSwitchConfigVersion, Kc as WidgetDocumentsArchiveConfig, Gc as WidgetDocumentsArchiveConfigVersion, gl as WidgetEnteredAlarmingConfig, hl as WidgetEnteredAlarmingConfigVersion, pl as WidgetEnteredEventConfig, fl as WidgetEnteredEventConfigVersion, sl as WidgetEventListConfig, ol as WidgetEventListConfigVersion, il as WidgetEventListFilterType, al as WidgetEventListFilterTypeTranslation, ll as WidgetEventTestConfig, cl as WidgetEventTestConfigVersion, Wo as WidgetGaugeChartConfig, Ho as WidgetGaugeChartConfigVersion, Fs as WidgetHeatMapChartConfig, js as WidgetHeatMapChartConfigVersion, Wc as WidgetIframeConfig, Uc as WidgetIframeVersion, Xo as WidgetLiquidFillGaugeConfig, Yo as WidgetLiquidFillGaugeConfigVersion, Ds as WidgetLiveChartConfig, Es as WidgetLiveChartConfigVersion, _s as WidgetLiveModeConfig, gs as WidgetLiveModeConfigVersion, xc as WidgetMaintenanceEntryListConfig, bc as WidgetMaintenanceEntryListConfigVersion, Ws as WidgetManualDataConfig, Us as WidgetManualDataConfigVersion, Oc as WidgetManualMaintenanceConfig, Dc as WidgetManualMaintenanceConfigVersion, gc as WidgetMapAnalysesConfig, dl as WidgetMonitoringOverviewConfig, ul as WidgetMonitoringOverviewConfigVersion, Ec as WidgetMyTasksConfig, Ic as WidgetNotesConfig, Fc as WidgetNotesConfigVersion, Bc as WidgetPdfViewerConfig, zc as WidgetPdfViewerConfigVersion, ks as WidgetPieChartConfig, Os as WidgetPieChartConfigVersion, ys as WidgetProcessImageConfig, vs as WidgetProcessImageConfigVersion, rl as WidgetRecipientGroupConfig, nl as WidgetRecipientGroupConfigVersion, tl as WidgetRecipientsConfig, el as WidgetRecipientsConfigVersion, Bs as WidgetReportConfig, zs as WidgetReportConfigVersion, ps as WidgetResettableCounterConfig, fs as WidgetResettableCounterConfigVersion, Rs as WidgetSankeyChartConfig, Is as WidgetSankeyChartConfigVersion, ds as WidgetSetpointTableConfig, us as WidgetSetpointTableConfigVersion, ts as WidgetSignalListMixedConfig, $o as WidgetSignalListMixedConfigVersion, Mo as WidgetSingleSignalConfig, jo as WidgetSingleSignalConfigVersion, cs as WidgetSliderConfig, os as WidgetSliderConfigVersion, $s as WidgetStartStopBatchConfig, Qs as WidgetStartStopBatchConfigVersion, as as WidgetSwitchOperationListConfig, is as WidgetSwitchOperationListConfigVersion, Lo as WidgetTextConfig, Io as WidgetTextConfigVersion, rs as WidgetTimeScheduleConfig, ns as WidgetTimeScheduleConfigVersion, Ss as WidgetTrafficLightConfig, Tc as WidgetTypePlateConfig, wc as WidgetTypePlateConfigVersion, Ao as XYChartConfig, _o as getAsyncValueAsPromise, Ct as getDefaultCompressionSettingsBySignalType, xt as getDefaultRecordingSettingsBySignalType, Fr as isNullOrEmpty, Pr as isNullOrUndefined, Ir as isNullOrWhitespace, iC as registerCoreServices, rC as registerCustomElements, Hb as resolveService, Gb as setGlobalDependencyContainer, Nr as tryCatch, Wb as tryRegisterService, Hs as widgetReport_Name };
