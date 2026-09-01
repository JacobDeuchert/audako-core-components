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
}, Fe = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Ie = class extends Fe {
	constructor() {
		super("DataConnectionS7Settings"), this.Host = new c(null), this.Port = new c(502), this.Rack = new c(0), this.Slot = new c(2), this.Timeout = new c(5e3), this.LocalTSAP = new c(null), this.RemoteTSAP = new c(null);
	}
}, Le;
(function(e) {
	e.None = "None", e.Basic128Rsa15 = "Basic128Rsa15", e.Basic256 = "Basic256", e.Basic256Sha256 = "Basic256Sha256";
})(Le ||= {});
var Re;
(function(e) {
	e.None = "None", e.Sign = "Sign", e.SignAndEncrypt = "SignAndEncrypt";
})(Re ||= {});
var ze;
(function(e) {
	e.Anonymous = "Anonymous", e.Credentials = "Credentials", e.Certificate = "Certificate";
})(ze ||= {});
var Be;
(function(e) {
	e.ASCII = "ASCII", e.UTF7 = "UTF7", e.UTF8 = "UTF8", e.Unicode = "Unicode", e.UTF32 = "UTF32";
})(Be ||= {});
var Ve;
(function(e) {
	e.Connection = "Connection", e.EdgeGateway = "EdgeGateway";
})(Ve ||= {});
var He = class extends Fe {
	constructor() {
		super("DataConnectionOpcUaSettings"), this.Url = new c(null), this.SecurityPolicy = new c(Le.None), this.SecurityMode = new c(Re.None), this.SecurityAuthentication = new c(ze.Anonymous), this.Username = new c(null), this.Password = new c(null), this.Certificate = new c(null), this.PrivateKey = new c(null), this.PublishingInterval = new c(1e3), this.SamplingInterval = new c(1e3), this.QueueSize = new c(-1), this.Timeout = new c(5e3), this.StringEncoding = new c(Be.UTF8), this.TimestampSource = new c(Ve.Connection);
	}
}, Ue = class extends Fe {
	constructor() {
		super("DataConnectionModbusSettings"), this.Host = new c(null), this.Port = new c(502);
	}
}, We = class extends Fe {
	constructor() {
		super("DataConnectionIEC104Settings"), this.Host = new c(null), this.Port = new c(2404), this.OriginatorAddress = new c(0), this.TimeSyncInterval = new c(720), this.GeneralInterrogationInterval = new c(60), this.CounterInterrogationInterval = new c(60), this.CommonAddressFieldLength = new c(2), this.CotFieldLength = new c(2), this.IoaFieldLength = new c(3), this.MaxIdleTime = new c(2e4), this.MaxTimeNoAckReceived = new c(15e3), this.MaxTimeNoAckSent = new c(1e4), this.MaxUnconfirmedIPdusReceived = new c(8), this.MaxNumOfOutstandingIPdus = new c(12), this.MessageFragmentTimeout = new c(5e3);
	}
}, Ge = class extends Fe {
	constructor() {
		super("DataConnectionBacnetSettings"), this.Port = new c(47808), this.Interface = new c(null), this.BroadcastAddress = new c(null), this.ApduTimeout = new c(6e3);
	}
}, Ke = class extends Fe {
	constructor() {
		super("DataConnectionSimulationSettings"), this.ScriptPath = new c(null), this.ScriptCycle = new c(500);
	}
}, qe = class extends Fe {
	constructor() {
		super("DataConnectionUniversalSettings"), this.DriverPath = new c(null);
	}
}, Je = class extends Fe {
	constructor() {
		super("DataConnectionKnxSettings"), this.Host = new c(null), this.Port = new c(null), this.Interface = new c(null), this.PhysicalAddress = new c("15.15.15"), this.ForceTunneling = new c(!1), this.MinimumDelay = new c(null), this.SuppressAckLDataReq = new c(!1);
	}
}, Ye = class extends Fe {
	constructor() {
		super("DataConnectionIot2000ModuleSettings"), this.MLFB = new c(null);
	}
}, Xe = class extends Fe {
	constructor() {
		super("DataConnectionEhWebserverSettings"), this.Host = new c(null), this.AccessCode = new c("0000");
	}
}, Ze = class extends Fe {
	constructor() {
		super("DataConnectionSnmpSettings"), this.Host = new c(null), this.Port = new c(161), this.Timeout = new c(5e3), this.Community = new c(null);
	}
}, Qe = class extends Fe {
	constructor() {
		super("DataConnectionModemInfoSettings");
	}
}, $e = class extends Fe {
	constructor() {
		super("DataConnectionMqttSettings"), this.Url = new c(null), this.Username = new c(null), this.Password = new c(null);
	}
}, et = class extends Fe {
	constructor() {
		super("DataConnectionOneWireSettings"), this.Host = new c("localhost"), this.Port = new c(4304);
	}
}, tt;
(function(e) {
	e.serial = "serial", e.tcp = "tcp";
})(tt ||= {});
var nt = class extends Fe {
	constructor() {
		super("DataConnectionMeterBusSettings"), this.Mode = new c(tt.tcp), this.HostOrSerialPort = new c(null), this.Port = new c(0), this.BaudRate = new c(2400), this.Timeout = new c(5e3);
	}
}, rt = class extends Fe {
	constructor() {
		super("DataConnectionMtmAdapterSettings"), this.TimeoutTime = new c(120), this.KeepAliveTime = new c(null), this.Username = new c(null), this.Password = new c(null);
	}
}, it = class extends Fe {
	constructor() {
		super("DataConnectionYDOCDataLoggerSettings"), this.DeviceId = new c(null), this.Username = new c(null), this.Password = new c(null);
	}
}, at = class extends Fe {
	constructor() {
		super("DataConnectionOTTDataLoggerSettings"), this.Station = new c(null), this.Password = new c(null);
	}
}, ot = class extends Fe {
	constructor() {
		super("DataConnectionTeltonikaGPSSettings"), this.Address = new c(null);
	}
}, st = class extends Fe {
	constructor() {
		super("DataConnectionLoRaWANSettings"), this.DeviceType = new c(null), this.DeviceEUI = new c(null), this.DeviceConfiguration = new c(null);
	}
}, ct = class extends Fe {
	constructor() {
		super("DataConnectionCsvImporterSettings"), this.Address = new c(null);
	}
}, lt = class extends Fe {
	constructor() {
		super("DataConnectionFtpParserSettings"), this.ParserType = new c(null), this.ConnectionType = new c(null), this.Address = new c(null), this.Port = new c(21), this.Username = new c(null), this.Password = new c(null), this.ValidateCertificate = new c(!1), this.FileDirectory = new c(null), this.EncryptionMode = new c(null), this.RequestInterval = new c(0), this.DeleteReadFiles = new c(!1);
	}
}, ut;
(function(e) {
	e.AnalogInput = "AnalogInput", e.AnalogInOut = "AnalogInOut", e.DigitalInput = "DigitalInput", e.DigitalInOut = "DigitalInOut", e.Counter = "Counter", e.UniversalInput = "UniversalInput", e.UniversalInOut = "UniversalInOut";
})(ut ||= {});
var dt = class extends u {
	constructor() {
		super(), this.Type = new c(ut.AnalogInput), this.DataConnectionId = new c(), this.Address = new c(), this.Settings = new gt(), this.OutputSettings = new ft(), this.RecordingSettings = new xt(), this.CompressionSettings = new Ct();
	}
}, ft = class {
	constructor() {
		this.AutoresetEnabled = new c(!1), this.AutoresetValue = new c(0), this.AutoresetDelay = new c(3);
	}
}, pt;
(function(e) {
	e.None = "None", e.SByte = "SByte", e.Short = "Short", e.Int = "Int";
})(pt ||= {});
var mt = class {
	constructor(e) {
		this._t = e;
	}
}, ht = class extends mt {
	constructor() {
		super("SignalDigitalSettings"), this.DigitalTrueColor = new c(), this.DigitalTrueCaption = new c(), this.DigitalFalseColor = new c(), this.DigitalFalseCaption = new c(), this.Invert = new c(!1), this.BitSelect = new c(), this.BitSelectConversion = new c(pt.None);
	}
}, gt = class extends mt {
	constructor() {
		super("SignalAnalogSettings"), this.MinValue = new c(0), this.MaxValue = new c(100), this.DefaultValue = new c(null), this.DecimalPlaces = new c(0), this.Unit = new c(), this.Factor = new c(1), this.Offset = new c(0);
	}
}, _t = class extends mt {
	constructor() {
		super("SignalCounterSettings"), this.MaxValue = new c(100), this.OffsetAutomatic = new c(!0), this.OffsetDetection = new c(!0), this.DecimalPlaces = new c(0), this.Unit = new c(), this.Factor = new c(1), this.Offset = new c(0);
	}
}, vt = {
	AnalogInput: gt,
	AnalogInOut: gt,
	DigitalInput: ht,
	DigitalInOut: ht,
	Counter: _t,
	UniversalInput: null,
	UniversalInOut: null
}, yt;
(function(e) {
	e.None = "None", e.LiveFlowMeter = "LiveFlowMeter", e.Watchdog = "Watchdog";
})(yt ||= {});
var bt;
(function(e) {
	e.MeanValue = "MeanValue", e.LastValue = "LastValue";
})(bt ||= {});
var xt = class {
	constructor() {
		this.SpecialProcessingType = new c(yt.None), this.Type = new c(bt.MeanValue), this.Interval = new c(300);
	}
};
function St(e) {
	let t = new xt();
	return e === ut.AnalogInput || e === ut.AnalogInOut ? t.Type.Value = bt.MeanValue : (e === ut.Counter || e === ut.DigitalInput || e === ut.DigitalInOut) && (t.Type.Value = bt.LastValue), t;
}
var T;
(function(e) {
	e.None = "None", e.WeightedMean = "WeightedMean", e.ArithmeticMean = "ArithmeticMean", e.Difference = "Difference", e.Sum = "Sum", e.Time = "Time", e.Text = "Text";
})(T ||= {});
var Ct = class {
	constructor() {
		this.Timezones = new c(), this.Timezones = new c([]), this.SubIntervalCompressionType = new c(T.None), this.HourIntervalCompressionType = new c(T.None), this.TwoHourIntervalCompressionType = new c(T.None), this.DayIntervalCompressionType = new c(T.None), this.WeekIntervalCompressionType = new c(T.None), this.MonthIntervalCompressionType = new c(T.None), this.QuarterIntervalCompressionType = new c(T.None), this.YearIntervalCompressionType = new c(T.None);
	}
};
function wt(e) {
	let t = new Ct();
	return e === ut.AnalogInput || e === ut.AnalogInOut ? (t.SubIntervalCompressionType.Value = T.ArithmeticMean, t.HourIntervalCompressionType.Value = T.ArithmeticMean, t.TwoHourIntervalCompressionType.Value = T.ArithmeticMean, t.DayIntervalCompressionType.Value = T.ArithmeticMean, t.WeekIntervalCompressionType.Value = T.ArithmeticMean, t.MonthIntervalCompressionType.Value = T.ArithmeticMean, t.QuarterIntervalCompressionType.Value = T.ArithmeticMean, t.YearIntervalCompressionType.Value = T.ArithmeticMean) : e === ut.Counter && (t.SubIntervalCompressionType.Value = T.Sum, t.HourIntervalCompressionType.Value = T.Sum, t.TwoHourIntervalCompressionType.Value = T.Sum, t.DayIntervalCompressionType.Value = T.Sum, t.WeekIntervalCompressionType.Value = T.Difference, t.MonthIntervalCompressionType.Value = T.Difference, t.QuarterIntervalCompressionType.Value = T.Difference, t.YearIntervalCompressionType.Value = T.Difference), t;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entities/formula.model.js
var Tt = class extends u {
	constructor() {
		super(), this.Variables = [], this.Type = new c(Mt.Numeric), this.SignalId = new c(null), this.CalculateOnlyWithFullVariableSet = new c(!1), this.NumericSettings = new Et(), this.ProcessIntervalSettings = new Ot(), this.SubIntervalSettings = new Ot(), this.HourIntervalSettings = new Ot(), this.TwoHourIntervalSettings = new Ot(), this.DayIntervalSettings = new Ot(), this.WeekIntervalSettings = new Ot(), this.MonthIntervalSettings = new Ot(), this.QuarterIntervalSettings = new Ot(), this.YearIntervalSettings = new Ot();
	}
}, Et = class {
	constructor() {
		this.DecimalPlaces = new c(0), this.Unit = new c(null);
	}
}, Dt = class {
	constructor() {
		this.ValueType = new c(Nt.Normal), this.VariableName = new c(null), this.ObjectId = new c(null), this.ObjectType = new c(jt.Signal), this.TagScope = new c(Pt.Global);
	}
}, Ot = class {
	constructor() {
		this.Formula = new c(null), this.ValueIntervalType = new c(null), this.CompressionType = new c(At.ArithmeticMean), this.ProvidePreValues = new c(!1), this.ProvideLastValues = new c(!1);
	}
}, kt;
(function(e) {
	e.Standard = "Standard", e.ProcessInterval = "ProcessInterval", e.SubInterval = "SubInterval", e.HourInterval = "HourInterval", e.TwoHourInterval = "TwoHourInterval", e.DayInterval = "DayInterval", e.WeekInterval = "WeekInterval", e.MonthInterval = "MonthInterval", e.QuarterInterval = "QuarterInterval", e.YearInterval = "YearInterval";
})(kt ||= {});
var At;
(function(e) {
	e.ArithmeticMean = "ArithmeticMean", e.Sum = "Sum";
})(At ||= {});
var jt;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula", e.Tag = "Tag";
})(jt ||= {});
var Mt;
(function(e) {
	e.Numeric = "Numeric", e.Universal = "Universal";
})(Mt ||= {});
var Nt;
(function(e) {
	e.Normal = "Normal", e.Minimum = "Minimum", e.Maximum = "Maximum";
})(Nt ||= {});
var Pt;
(function(e) {
	e.Global = "Global", e.Tenant = "Tenant", e.Group = "Group", e.GroupAndSubGroups = "GroupAndSubGroups";
})(Pt ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entities/connector.model.js
var Ft;
(function(e) {
	e.RestApi = "RestApi";
})(Ft ||= {});
var It = class extends u {
	constructor() {
		super(), this.Type = new c(), this.Objects = [];
	}
}, Lt = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Rt = class extends Lt {
	constructor() {
		super("ConnectorRestApiSettings"), this.Credentials = [];
	}
}, zt = class {
	constructor() {
		this.ClientId = new c(), this.ClientSecret = new c();
	}
}, Bt;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula", e.Group = "Group", e.EventCategory = "EventCategory", e.BatchDefinition = "BatchDefinition";
})(Bt ||= {});
var Vt;
(function(e) {
	e.Read = "Read", e.ReadWrite = "ReadWrite", e.Write = "Write";
})(Vt ||= {});
var Ht = class {
	constructor() {
		this.ObjectName = new c(), this.ObjectType = new c(), this.ObjectId = new c(), this.AccessLevel = new c();
	}
}, Ut = class extends u {
	constructor() {
		super(), this.ImageFile = new c();
	}
}, Wt;
(function(e) {
	e.Start = "Start", e.Stop = "Stop", e.Release = "Release";
})(Wt ||= {});
var Gt;
(function(e) {
	e.EventDefinition = "EventDefinition", e.Condition = "Condition", e.Manual = "Manual";
})(Gt ||= {});
var Kt;
(function(e) {
	e.Raised = "Raised", e.Dropped = "Dropped";
})(Kt ||= {});
var qt;
(function(e) {
	e.EventDefinition = "EventDefinition", e.Condition = "Condition";
})(qt ||= {});
var Jt;
(function(e) {
	e.NumberField = "NumberField", e.TextField = "TextField", e.BooleanField = "BooleanField", e.SelectField = "SelectField", e.DateField = "DateField", e.CustomMappingField = "CustomMappingField", e.UserField = "UserField", e.TextAreaField = "TextAreaField", e.CheckboxField = "CheckboxField";
})(Jt ||= {});
var Yt;
(function(e) {
	e.Manual = "Manual", e.Signal = "Signal", e.Incremental = "Incremental";
})(Yt ||= {});
var Xt = class extends u {
	constructor() {
		super(), this.ParallelBatchesEnabled = !1, this.BatchTriggers = [], this.MetadataFields = {}, this.BatchValueObjects = [], this.ConditionEventEntries = [], this.BatchReportIds = [], this.BatchReportExportSettings = [], this.BatchReviewSettings = new rn(), this.ReleaseSettings = new Qt();
	}
}, Zt = class {}, Qt = class {
	constructor() {
		this.Enabled = !1, this.SignalId = null, this.ReleaseValue = null;
	}
}, $t = class {}, en = class {}, tn = class {}, nn = class {}, rn = class {
	constructor() {
		this.Enabled = !1, this.Reviews = [], this.Ordered = !1;
	}
}, an = class {}, on;
(function(e) {
	e.WYSIWYG = "WYSIWYG", e.JsTemplate = "JsTemplate";
})(on ||= {});
var sn;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(sn ||= {});
var cn = class extends u {
	constructor() {
		super(), this.ScriptFile = new c(), this.TemplateFile = new c(), this.EngineType = new c(on.JsTemplate), this.DefaultStepSize = new c(sn.Day);
	}
}, ln;
(function(e) {
	e.PDF = "PDF", e.CSV = "CSV", e.XLSX = "XLSX", e.DOCX = "DOCX", e.PNG = "PNG", e.JPG = "JPG";
})(ln ||= {});
var un;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(un ||= {});
var dn;
(function(e) {
	e.AVG = "AVG", e.SUM = "SUM", e.MIN = "MIN", e.MAX = "MAX";
})(dn ||= {});
var fn;
(function(e) {
	e.TextBox = "TextBox", e.NumberBox = "NumberBox", e.RadioList = "RadioList", e.SelectList = "SelectList", e.Signal = "Signal", e.CheckBox = "CheckBox";
})(fn ||= {});
var pn = class extends u {
	constructor() {
		super(), this.Title = new c(), this.Parameters = new c(), this.Elements = new c({}), this.Templates = new c([]), this.TimeZone = new c("CET"), this.EventReportSettings = new c(new vn());
	}
}, mn = class {}, hn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.Caption = new c(), this.Alias = new c(), this.Parameters = new c();
	}
}, gn = class extends hn {
	constructor() {
		super("ReportCaptionElement"), this.Elements = [];
	}
}, _n = class extends hn {
	constructor() {
		super("ReportItemElement"), this.Type = new c(), this.ObjectType = new c(), this.ObjectId = new c();
	}
}, vn = class {
	constructor() {
		this.EventReports = [];
	}
}, yn = class {
	constructor() {
		this.Actions = [];
	}
}, bn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, xn = class extends bn {
	constructor() {
		super("MailEventAction");
	}
}, Sn = class extends bn {
	constructor() {
		super("StorageEventAction");
	}
}, Cn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, wn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Tn = class {}, En = class extends Cn {
	constructor() {
		super("ReportGroup"), this.GroupElements = {};
	}
}, Dn = class extends wn {
	constructor() {
		super("ReportGroupSettings"), this.GroupElementSettings = {};
	}
}, On = class extends Cn {
	constructor() {
		super("ReportList"), this.ListEntries = [];
	}
}, kn = class extends wn {
	constructor() {
		super("ReportListSettings");
	}
}, An = class extends Cn {
	constructor() {
		super("ReportField");
	}
}, jn = class extends wn {
	constructor() {
		super("ReportFieldSettings");
	}
}, Mn = class extends Cn {
	constructor() {
		super("ReportTable");
	}
}, Nn = class extends wn {
	constructor() {
		super("ReportTableSettings");
	}
}, Pn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.AdditionalSettings = {};
	}
}, Fn = class extends Pn {
	constructor() {
		super("ReportTableEntry");
	}
}, In = class extends Pn {
	constructor() {
		super("ReportTableHeader");
	}
}, Ln = class {}, Rn = class extends u {
	constructor() {
		super(), this.DocumentFile = new c();
	}
}, zn = class extends u {
	constructor() {
		super(), this.FileEntries = {}, this.PrimitvEntries = {};
	}
}, Bn = class {}, Vn = class {}, Hn;
(function(e) {
	e.LiveFirst = "LiveFirst", e.ArchiveFirst = "ArchiveFirst", e.ArchiveOnly = "ArchiveOnly";
})(Hn ||= {});
var Un = class extends u {
	constructor() {
		super(), this.Address = new c(), this.Username = new c(), this.Password = new c(), this.MaxViewInterval = new c(1e4), this.ViewMode = new c(), this.EventIds = new c();
	}
}, Wn;
(function(e) {
	e.Scheduled = "Scheduled", e.Manual = "Manual", e.Event = "Event";
})(Wn ||= {});
var Gn = class {}, Kn = class extends u {
	constructor() {
		super(), this.Rules = new c([]);
	}
}, qn = class {}, Jn = class extends u {
	constructor() {
		super(), this.RuleId = new c(), this.SwitchScheduleId = new c(), this.Enabled = new c(), this.StartValue = new c(), this.EndValue = new c();
	}
}, Yn;
(function(e) {
	e.On = "On", e.Off = "Off";
})(Yn ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entities/user.model.js
var Xn;
(function(e) {
	e.None = "None", e.Pending = "Pending", e.Failed = "Failed", e.Denied = "Denied", e.Successful = "Successful";
})(Xn ||= {});
var Zn = class extends u {
	constructor() {
		super(), this.FirstName = new c(), this.LastName = new c(), this.UserId = new c(), this.Email = new c(), this.RegistrationState = new c(Xn.None), this.RegistrationCredentials = new c(), this.RegistrationDate = new c();
	}
}, Qn = class extends u {
	constructor() {
		super(), this.RoleMember = [];
	}
}, $n;
(function(e) {
	e.Male = "Male", e.Female = "Female", e.Diverse = "Diverse";
})($n ||= {});
var er = class extends u {
	constructor() {
		super(), this.Salutation = new c(), this.Gender = new c(), this.Principal = new c(null), this.Contacts = new c({}), this.Enabled = new c(!1), this.FirstName = new c(null), this.LastName = new c(null);
	}
}, tr = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, nr = class extends tr {
	constructor() {
		super("EmailContact");
	}
}, rr = class extends tr {
	constructor(e) {
		super(e);
	}
}, ir = class extends rr {
	constructor() {
		super("SmsContact");
	}
}, ar = class extends rr {
	constructor() {
		super("VoipContact");
	}
}, or = class extends tr {
	constructor() {
		super("TelegramContact");
	}
}, sr = class extends tr {
	constructor() {
		super("TeamsContact");
	}
}, cr = class extends tr {
	constructor() {
		super("PushoverContact");
	}
}, lr = class extends u {
	constructor() {
		super(), this.Enabled = new c(!0), this.Loops = new c(3), this.Members = [];
	}
}, ur = class {}, dr = class extends u {
	constructor() {
		super(), this.Enabled = new c(), this.Offset = new c(), this.EventCategoryIds = new c(), this.GlobalRecipient = new c(), this.DefaultRecipient = new c();
	}
}, fr = class extends u {
	constructor() {
		super(), this.Category = new c(), this.Enabled = new c(), this.Trigger = new c(), this.MaintenanceTasks = new c();
	}
}, pr = class extends u {
	constructor() {
		super(), this._t = this.constructor.name, this.DefaultAssignees = new c([]), this.AgendaDefinition = new c([]);
	}
}, mr = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.Description = new l();
	}
}, hr = class extends u {
	constructor() {
		super(), this.Script = new c(), this.Enabled = new c(!0);
	}
}, gr = class {
	constructor() {
		this.Name = new c(), this.Value = new c();
	}
}, _r = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, vr = class extends _r {
	constructor() {
		super("CyclicTrigger"), this.Interval = new c();
	}
}, yr;
(function(e) {
	e.Entered = "Entered", e.Dropped = "Dropped", e.Acknowledged = "Acknowledged";
})(yr ||= {});
var br = class extends _r {
	constructor() {
		super("EventTrigger"), this.State = new c(), this.EventDefinitionId = new c();
	}
}, xr;
(function(e) {
	e.Raised = "Raised", e.Dropped = "Dropped";
})(xr ||= {});
var Sr = class extends _r {
	constructor() {
		super("ConditionTrigger"), this.State = new c(), this.ConditionId = new c();
	}
}, Cr;
(function(e) {
	e.Started = "Started", e.Stopped = "Stopped";
})(Cr ||= {});
var wr = class extends _r {
	constructor() {
		super("BatchTrigger"), this.State = new c(), this.BatchDefinitionId = new c();
	}
}, Tr = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, Er = class {}, Dr;
(function(e) {
	e.ProcessInterval = "ProcessInterval", e.SubInterval = "SubInterval", e.HourInterval = "HourInterval", e.TwoHourInterval = "TwoHourInterval", e.DayInterval = "DayInterval", e.WeekInterval = "WeekInterval", e.MonthInterval = "MonthInterval", e.QuarterInterval = "QuarterInterval", e.YearInterval = "YearInterval";
})(Dr ||= {});
var Or;
(function(e) {
	e.System = "System", e.Process = "Process", e.Import = "Import", e.Manual = "Manual", e.Mixed = "Mixed", e.Manipulated = "Manipulated";
})(Or ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/historical-value-operation.model.js
var kr;
(function(e) {
	e.Pending = "Pending", e.Processing = "Processing", e.Completed = "Completed", e.Failed = "Failed", e.Undone = "Undone";
})(kr ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/entity-type-class-mapping.js
var Ar = {
	[r.Group]: S,
	[r.Signal]: dt,
	[r.Dashboard]: ne,
	[r.DashboardTab]: re,
	[r.DataConnection]: Pe,
	[r.DataSource]: Ae,
	[r.Connector]: It,
	[r.EventCategory]: ue,
	[r.EventCondition]: de,
	[r.EventDefinition]: oe,
	[r.Formula]: Tt,
	[r.ProcessImage]: Ut,
	[r.BatchDefinition]: Xt,
	[r.ReportTemplate]: cn,
	[r.Report]: pn,
	[r.Document]: Rn,
	[r.Storage]: zn,
	[r.Camera]: Un,
	[r.SwitchSchedule]: Kn,
	[r.User]: Zn,
	[r.Role]: Qn,
	[r.Recipient]: er,
	[r.RecipientGroup]: lr,
	[r.AlarmingPlan]: dr,
	[r.MaintenanceService]: fr,
	[r.TaskDefinition]: pr,
	[r.RuntimeScript]: hr
}, jr = class {
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
}, Mr = class {
	static isEntityType(e) {
		return Object.keys(r).includes(e);
	}
	static getEntityPropertiesByType(e, t) {
		let n = Ar[e];
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
			a === "AdditionalFields" ? (console.log(i, e), i[e]?.Value && (i = jr.tryParseJson(i[e].Value), console.log("AdditionalValue", i))) : i = i[e], a = e;
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
			let i = e[r] ? jr.tryParseJson(e[r].Value, {}) : {};
			for (let e of t) t.indexOf(e) === t.length - 1 ? i[e] = n : (i[e] = i[e] || {}, i = i[e]);
			e[r] = new c(JSON.stringify(i));
		}
	}
}, Nr = function(e, t, n, r) {
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
function Pr(e) {
	return Nr(this, void 0, void 0, function* () {
		try {
			return [null, yield Promise.resolve(e)];
		} catch (e) {
			return [e, null];
		}
	});
}
function Fr(e) {
	return e == null;
}
function Ir(e) {
	return Fr(e) || e.length === 0;
}
function Lr(e) {
	return Fr(e) || e.trim().length === 0;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var Rr = function(e, t) {
	return Rr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Rr(e, t);
};
function zr(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Rr(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Br(e, t, n, r) {
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
function Vr(e, t) {
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
function Hr(e) {
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
function Ur(e, t) {
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
function Wr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function Gr(e) {
	return this instanceof Gr ? (this.v = e, this) : new Gr(e);
}
function Kr(e, t, n) {
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
		e.value instanceof Gr ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function qr(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof Hr == "function" ? Hr(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Jr(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function Yr(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = (/* @__PURE__ */ Error()).stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var Xr = Yr(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function Zr(e, t) {
	if (e) {
		var n = e.indexOf(t);
		0 <= n && e.splice(n, 1);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
var Qr = function() {
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
					for (var o = Hr(a), s = o.next(); !s.done; s = o.next()) s.value.remove(this);
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
			if (Jr(c)) try {
				c();
			} catch (e) {
				i = e instanceof Xr ? e.errors : [e];
			}
			var l = this._finalizers;
			if (l) {
				this._finalizers = null;
				try {
					for (var u = Hr(l), d = u.next(); !d.done; d = u.next()) {
						var f = d.value;
						try {
							ti(f);
						} catch (e) {
							i ??= [], e instanceof Xr ? i = Wr(Wr([], Ur(i)), Ur(e.errors)) : i.push(e);
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
			if (i) throw new Xr(i);
		}
	}, e.prototype.add = function(t) {
		if (t && t !== this) {
			if (this.closed) ti(t);
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
		t === e ? this._parentage = null : Array.isArray(t) && Zr(t, e);
	}, e.prototype.remove = function(t) {
		var n = this._finalizers;
		n && Zr(n, t), t instanceof e && t._removeParent(this);
	}, e.EMPTY = (function() {
		var t = new e();
		return t.closed = !0, t;
	})(), e;
}(), $r = Qr.EMPTY;
function ei(e) {
	return e instanceof Qr || e && "closed" in e && Jr(e.remove) && Jr(e.add) && Jr(e.unsubscribe);
}
function ti(e) {
	Jr(e) ? e() : e.unsubscribe();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/config.js
var ni = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: !1,
	useDeprecatedNextContext: !1
}, ri = {
	setTimeout: function(e, t) {
		var n = [...arguments].slice(2), r = ri.delegate;
		return r?.setTimeout ? r.setTimeout.apply(r, Wr([e, t], Ur(n))) : setTimeout.apply(void 0, Wr([e, t], Ur(n)));
	},
	clearTimeout: function(e) {
		return (ri.delegate?.clearTimeout || clearTimeout)(e);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function ii(e) {
	ri.setTimeout(function() {
		var t = ni.onUnhandledError;
		if (t) t(e);
		else throw e;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
function ai() {}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var oi = (function() {
	return li("C", void 0, void 0);
})();
function si(e) {
	return li("E", void 0, e);
}
function ci(e) {
	return li("N", e, void 0);
}
function li(e, t, n) {
	return {
		kind: e,
		value: t,
		error: n
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var ui = null;
function di(e) {
	if (ni.useDeprecatedSynchronousErrorHandling) {
		var t = !ui;
		if (t && (ui = {
			errorThrown: !1,
			error: null
		}), e(), t) {
			var n = ui, r = n.errorThrown, i = n.error;
			if (ui = null, r) throw i;
		}
	} else e();
}
function fi(e) {
	ni.useDeprecatedSynchronousErrorHandling && ui && (ui.errorThrown = !0, ui.error = e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
var pi = function(e) {
	zr(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.isStopped = !1, t ? (n.destination = t, ei(t) && t.add(n)) : n.destination = xi, n;
	}
	return t.create = function(e, t, n) {
		return new _i(e, t, n);
	}, t.prototype.next = function(e) {
		this.isStopped ? bi(ci(e), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? bi(si(e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? bi(oi, this) : (this.isStopped = !0, this._complete());
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
}(Qr), mi = Function.prototype.bind;
function hi(e, t) {
	return mi.call(e, t);
}
var gi = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			vi(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			vi(e);
		}
		else vi(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			vi(e);
		}
	}, e;
}(), _i = function(e) {
	zr(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this, a;
		if (Jr(t) || !t) a = {
			next: t ?? void 0,
			error: n ?? void 0,
			complete: r ?? void 0
		};
		else {
			var o;
			i && ni.useDeprecatedNextContext ? (o = Object.create(t), o.unsubscribe = function() {
				return i.unsubscribe();
			}, a = {
				next: t.next && hi(t.next, o),
				error: t.error && hi(t.error, o),
				complete: t.complete && hi(t.complete, o)
			}) : a = t;
		}
		return i.destination = new gi(a), i;
	}
	return t;
}(pi);
function vi(e) {
	ni.useDeprecatedSynchronousErrorHandling ? fi(e) : ii(e);
}
function yi(e) {
	throw e;
}
function bi(e, t) {
	var n = ni.onStoppedNotification;
	n && ri.setTimeout(function() {
		return n(e, t);
	});
}
var xi = {
	closed: !0,
	next: ai,
	error: yi,
	complete: ai
}, Si = (function() {
	return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
function Ci(e) {
	return e;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
function wi(e) {
	return e.length === 0 ? Ci : e.length === 1 ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Observable.js
var Ti = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var n = new e();
		return n.source = this, n.operator = t, n;
	}, e.prototype.subscribe = function(e, t, n) {
		var r = this, i = Oi(e) ? e : new _i(e, t, n);
		return di(function() {
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
		return t = Ei(t), new t(function(t, r) {
			var i = new _i({
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
	}, e.prototype[Si] = function() {
		return this;
	}, e.prototype.pipe = function() {
		return wi([...arguments])(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return e = Ei(e), new e(function(e, n) {
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
function Ei(e) {
	return e ?? ni.Promise ?? Promise;
}
function Di(e) {
	return e && Jr(e.next) && Jr(e.error) && Jr(e.complete);
}
function Oi(e) {
	return e && e instanceof pi || Di(e) && ei(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
function ki(e) {
	return Jr(e?.lift);
}
function Ai(e) {
	return function(t) {
		if (ki(t)) return t.lift(function(t) {
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
function ji(e, t, n, r, i) {
	return new Mi(e, t, n, r, i);
}
var Mi = function(e) {
	zr(t, e);
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
}(pi), Ni = Yr(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), Pi = function(e) {
	zr(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return t.prototype.lift = function(e) {
		var t = new Fi(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new Ni();
	}, t.prototype.next = function(e) {
		var t = this;
		di(function() {
			var n, r;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers ||= Array.from(t.observers);
				try {
					for (var i = Hr(t.currentObservers), a = i.next(); !a.done; a = i.next()) a.value.next(e);
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
		di(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var n = t.observers; n.length;) n.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		di(function() {
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
		return r || i ? $r : (this.currentObservers = null, a.push(e), new Qr(function() {
			t.currentObservers = null, Zr(a, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this, n = t.hasError, r = t.thrownError, i = t.isStopped;
		n ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new Ti();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new Fi(e, t);
	}, t;
}(Ti), Fi = function(e) {
	zr(t, e);
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
		return this.source?.subscribe(e) ?? $r;
	}, t;
}(Pi), Ii = function(e) {
	zr(t, e);
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
}(Pi), Li = {
	now: function() {
		return (Li.delegate || Date).now();
	},
	delegate: void 0
}, Ri = function(e) {
	zr(t, e);
	function t(t, n, r) {
		t === void 0 && (t = Infinity), n === void 0 && (n = Infinity), r === void 0 && (r = Li);
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
}(Pi), zi = function(e) {
	zr(t, e);
	function t(t, n) {
		return e.call(this) || this;
	}
	return t.prototype.schedule = function(e, t) {
		return t === void 0 && (t = 0), this;
	}, t;
}(Qr), Bi = {
	setInterval: function(e, t) {
		var n = [...arguments].slice(2), r = Bi.delegate;
		return r?.setInterval ? r.setInterval.apply(r, Wr([e, t], Ur(n))) : setInterval.apply(void 0, Wr([e, t], Ur(n)));
	},
	clearInterval: function(e) {
		return (Bi.delegate?.clearInterval || clearInterval)(e);
	},
	delegate: void 0
}, Vi = function(e) {
	zr(t, e);
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
		return n === void 0 && (n = 0), Bi.setInterval(e.flush.bind(e, this), n);
	}, t.prototype.recycleAsyncId = function(e, t, n) {
		if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1) return t;
		t != null && Bi.clearInterval(t);
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
			this.work = this.state = this.scheduler = null, this.pending = !1, Zr(i, this), n != null && (this.id = this.recycleAsyncId(r, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(zi), Hi = function() {
	function e(t, n) {
		n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
	}
	return e.prototype.schedule = function(e, t, n) {
		return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t);
	}, e.now = Li.now, e;
}(), Ui = new (function(e) {
	zr(t, e);
	function t(t, n) {
		n === void 0 && (n = Hi.now);
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
}(Hi))(Vi), Wi = Ui, Gi = new Ti(function(e) {
	return e.complete();
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function Ki(e) {
	return e && Jr(e.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function qi(e) {
	return e[e.length - 1];
}
function Ji(e) {
	return Jr(qi(e)) ? e.pop() : void 0;
}
function Yi(e) {
	return Ki(qi(e)) ? e.pop() : void 0;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var Xi = (function(e) {
	return e && typeof e.length == "number" && typeof e != "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function Zi(e) {
	return Jr(e?.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function Qi(e) {
	return Jr(e[Si]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function $i(e) {
	return Symbol.asyncIterator && Jr(e?.[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function ea(e) {
	return /* @__PURE__ */ TypeError("You provided " + (typeof e == "object" && e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function ta() {
	return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var na = ta();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function ra(e) {
	return Jr(e?.[na]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function ia(e) {
	return Kr(this, arguments, function() {
		var t, n, r, i;
		return Vr(this, function(a) {
			switch (a.label) {
				case 0: t = e.getReader(), a.label = 1;
				case 1: a.trys.push([
					1,
					,
					9,
					10
				]), a.label = 2;
				case 2: return [4, Gr(t.read())];
				case 3: return n = a.sent(), r = n.value, i = n.done, i ? [4, Gr(void 0)] : [3, 5];
				case 4: return [2, a.sent()];
				case 5: return [4, Gr(r)];
				case 6: return [4, a.sent()];
				case 7: return a.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function aa(e) {
	return Jr(e?.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function oa(e) {
	if (e instanceof Ti) return e;
	if (e != null) {
		if (Qi(e)) return sa(e);
		if (Xi(e)) return ca(e);
		if (Zi(e)) return la(e);
		if ($i(e)) return da(e);
		if (ra(e)) return ua(e);
		if (aa(e)) return fa(e);
	}
	throw ea(e);
}
function sa(e) {
	return new Ti(function(t) {
		var n = e[Si]();
		if (Jr(n.subscribe)) return n.subscribe(t);
		throw TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function ca(e) {
	return new Ti(function(t) {
		for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
		t.complete();
	});
}
function la(e) {
	return new Ti(function(t) {
		e.then(function(e) {
			t.closed || (t.next(e), t.complete());
		}, function(e) {
			return t.error(e);
		}).then(null, ii);
	});
}
function ua(e) {
	return new Ti(function(t) {
		var n, r;
		try {
			for (var i = Hr(e), a = i.next(); !a.done; a = i.next()) {
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
function da(e) {
	return new Ti(function(t) {
		pa(e, t).catch(function(e) {
			return t.error(e);
		});
	});
}
function fa(e) {
	return da(ia(e));
}
function pa(e, t) {
	var n, r, i, a;
	return Br(this, void 0, void 0, function() {
		var o, s;
		return Vr(this, function(c) {
			switch (c.label) {
				case 0: c.trys.push([
					0,
					5,
					6,
					11
				]), n = qr(e), c.label = 1;
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
function ma(e, t, n, r, i) {
	r === void 0 && (r = 0), i === void 0 && (i = !1);
	var a = t.schedule(function() {
		n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
	}, r);
	if (e.add(a), !i) return a;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function ha(e, t) {
	return t === void 0 && (t = 0), Ai(function(n, r) {
		n.subscribe(ji(r, function(n) {
			return ma(r, e, function() {
				return r.next(n);
			}, t);
		}, function() {
			return ma(r, e, function() {
				return r.complete();
			}, t);
		}, function(n) {
			return ma(r, e, function() {
				return r.error(n);
			}, t);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function ga(e, t) {
	return t === void 0 && (t = 0), Ai(function(n, r) {
		r.add(e.schedule(function() {
			return n.subscribe(r);
		}, t));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function _a(e, t) {
	return oa(e).pipe(ga(t), ha(t));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function va(e, t) {
	return oa(e).pipe(ga(t), ha(t));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function ya(e, t) {
	return new Ti(function(n) {
		var r = 0;
		return t.schedule(function() {
			r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function ba(e, t) {
	return new Ti(function(n) {
		var r;
		return ma(n, t, function() {
			r = e[na](), ma(n, t, function() {
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
			return Jr(r?.return) && r.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function xa(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new Ti(function(n) {
		ma(n, t, function() {
			var r = e[Symbol.asyncIterator]();
			ma(n, t, function() {
				r.next().then(function(e) {
					e.done ? n.complete() : n.next(e.value);
				});
			}, 0, !0);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function Sa(e, t) {
	return xa(ia(e), t);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function Ca(e, t) {
	if (e != null) {
		if (Qi(e)) return _a(e, t);
		if (Xi(e)) return ya(e, t);
		if (Zi(e)) return va(e, t);
		if ($i(e)) return xa(e, t);
		if (ra(e)) return ba(e, t);
		if (aa(e)) return Sa(e, t);
	}
	throw ea(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function wa(e, t) {
	return t ? Ca(e, t) : oa(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
function Ta() {
	var e = [...arguments];
	return wa(e, Yi(e));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function Ea(e) {
	return !!e && (e instanceof Ti || Jr(e.lift) && Jr(e.subscribe));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var Da = Yr(function(e) {
	return function() {
		e(this), this.name = "EmptyError", this.message = "no elements in sequence";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function Oa(e, t) {
	var n = typeof t == "object";
	return new Promise(function(r, i) {
		var a = new _i({
			next: function(e) {
				r(e), a.unsubscribe();
			},
			error: i,
			complete: function() {
				n ? r(t.defaultValue) : i(new Da());
			}
		});
		e.subscribe(a);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
function ka(e) {
	return e instanceof Date && !isNaN(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/map.js
function Aa(e, t) {
	return Ai(function(n, r) {
		var i = 0;
		n.subscribe(ji(r, function(n) {
			r.next(e.call(t, n, i++));
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var ja = Array.isArray;
function Ma(e, t) {
	return ja(t) ? e.apply(void 0, Wr([], Ur(t))) : e(t);
}
function Na(e) {
	return Aa(function(t) {
		return Ma(e, t);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var Pa = Array.isArray, Fa = Object.getPrototypeOf, Ia = Object.prototype, La = Object.keys;
function Ra(e) {
	if (e.length === 1) {
		var t = e[0];
		if (Pa(t)) return {
			args: t,
			keys: null
		};
		if (za(t)) {
			var n = La(t);
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
function za(e) {
	return e && typeof e == "object" && Fa(e) === Ia;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createObject.js
function Ba(e, t) {
	return e.reduce(function(e, n, r) {
		return e[n] = t[r], e;
	}, {});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function Va() {
	var e = [...arguments], t = Yi(e), n = Ji(e), r = Ra(e), i = r.args, a = r.keys;
	if (i.length === 0) return wa([], t);
	var o = new Ti(Ha(i, t, a ? function(e) {
		return Ba(a, e);
	} : Ci));
	return n ? o.pipe(Na(n)) : o;
}
function Ha(e, t, n) {
	return n === void 0 && (n = Ci), function(r) {
		Ua(t, function() {
			for (var i = e.length, a = Array(i), o = i, s = i, c = function(i) {
				Ua(t, function() {
					var c = wa(e[i], t), l = !1;
					c.subscribe(ji(r, function(e) {
						a[i] = e, l || (l = !0, s--), s || r.next(n(a.slice()));
					}, function() {
						--o || r.complete();
					}));
				}, r);
			}, l = 0; l < i; l++) c(l);
		}, r);
	};
}
function Ua(e, t, n) {
	e ? ma(n, e, t) : t();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function Wa(e, t, n, r, i, a, o, s) {
	var c = [], l = 0, u = 0, d = !1, f = function() {
		d && !c.length && !l && t.complete();
	}, p = function(e) {
		return l < r ? m(e) : c.push(e);
	}, m = function(e) {
		a && t.next(e), l++;
		var s = !1;
		oa(n(e, u++)).subscribe(ji(t, function(e) {
			i?.(e), a ? p(e) : t.next(e);
		}, function() {
			s = !0;
		}, void 0, function() {
			if (s) try {
				l--;
				for (var e = function() {
					var e = c.shift();
					o ? ma(t, o, function() {
						return m(e);
					}) : m(e);
				}; c.length && l < r;) e();
				f();
			} catch (e) {
				t.error(e);
			}
		}));
	};
	return e.subscribe(ji(t, p, function() {
		d = !0, f();
	})), function() {
		s?.();
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function Ga(e, t, n) {
	return n === void 0 && (n = Infinity), Jr(t) ? Ga(function(n, r) {
		return Aa(function(e, i) {
			return t(n, e, r, i);
		})(oa(e(n, r)));
	}, n) : (typeof t == "number" && (n = t), Ai(function(t, r) {
		return Wa(t, r, e, n);
	}));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function Ka(e) {
	return e === void 0 && (e = Infinity), Ga(Ci, e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function qa() {
	return Ka(1);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/concat.js
function Ja() {
	var e = [...arguments];
	return qa()(wa(e, Yi(e)));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
function Ya(e, t, n) {
	e === void 0 && (e = 0), n === void 0 && (n = Wi);
	var r = -1;
	return t != null && (Ki(t) ? n = t : r = t), new Ti(function(t) {
		var i = ka(e) ? +e - n.now() : e;
		i < 0 && (i = 0);
		var a = 0;
		return n.schedule(function() {
			t.closed || (t.next(a++), 0 <= r ? this.schedule(void 0, r) : t.complete());
		}, i);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
function Xa(e, t) {
	return Ai(function(n, r) {
		var i = 0;
		n.subscribe(ji(r, function(n) {
			return e.call(t, n, i++) && r.next(n);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/audit.js
function Za(e) {
	return Ai(function(t, n) {
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
		t.subscribe(ji(n, function(t) {
			r = !0, i = t, a || oa(e(t)).subscribe(a = ji(n, s, c));
		}, function() {
			o = !0, (!r || !a || a.closed) && n.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/auditTime.js
function Qa(e, t) {
	return t === void 0 && (t = Ui), Za(function() {
		return Ya(e, t);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function $a(e) {
	return Ai(function(t, n) {
		var r = null, i = !1, a;
		r = t.subscribe(ji(n, void 0, void 0, function(o) {
			a = oa(e(o, $a(e)(t))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
		})), i && (r.unsubscribe(), r = null, a.subscribe(n));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js
function eo(e, t) {
	return t === void 0 && (t = Ui), Ai(function(n, r) {
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
		n.subscribe(ji(r, function(n) {
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
function to(e) {
	return e <= 0 ? function() {
		return Gi;
	} : Ai(function(t, n) {
		var r = 0;
		t.subscribe(ji(n, function(t) {
			++r <= e && (n.next(t), e <= r && n.complete());
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function no(e) {
	return Aa(function() {
		return e;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function ro(e, t) {
	return t === void 0 && (t = Ci), e ??= io, Ai(function(n, r) {
		var i, a = !0;
		n.subscribe(ji(r, function(n) {
			var o = t(n);
			(a || !e(i, o)) && (a = !1, i = o, r.next(n));
		}));
	});
}
function io(e, t) {
	return e === t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js
function ao(e, t) {
	return ro(function(n, r) {
		return t ? t(n[e], r[e]) : n[e] === r[e];
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function oo(e) {
	return Ai(function(t, n) {
		try {
			t.subscribe(n);
		} finally {
			n.add(e);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
function so(e) {
	e === void 0 && (e = {});
	var t = e.connector, n = t === void 0 ? function() {
		return new Pi();
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
		return Ai(function(e, m) {
			s++, !u && !l && d();
			var h = a ??= n();
			m.add(function() {
				s--, s === 0 && !u && !l && (r = co(p, c));
			}), h.subscribe(m), !t && s > 0 && (t = new _i({
				next: function(e) {
					return h.next(e);
				},
				error: function(e) {
					u = !0, d(), r = co(f, i, e), h.error(e);
				},
				complete: function() {
					l = !0, d(), r = co(f, o), h.complete();
				}
			}), oa(e).subscribe(t));
		})(e);
	};
}
function co(e, t) {
	var n = [...arguments].slice(2);
	if (t === !0) {
		e();
		return;
	}
	if (t !== !1) {
		var r = new _i({ next: function() {
			r.unsubscribe(), e();
		} });
		return oa(t.apply(void 0, Wr([], Ur(n)))).subscribe(r);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function lo(e, t, n) {
	var r, i, a, o, s = !1;
	return e && typeof e == "object" ? (r = e.bufferSize, o = r === void 0 ? Infinity : r, i = e.windowTime, t = i === void 0 ? Infinity : i, a = e.refCount, s = a !== void 0 && a, n = e.scheduler) : o = e ?? Infinity, so({
		connector: function() {
			return new Ri(o, t, n);
		},
		resetOnError: !0,
		resetOnComplete: !1,
		resetOnRefCountZero: s
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/skip.js
function uo(e) {
	return Xa(function(t, n) {
		return e <= n;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function fo(e, t) {
	return Ai(function(n, r) {
		var i = null, a = 0, o = !1, s = function() {
			return o && !i && r.complete();
		};
		n.subscribe(ji(r, function(n) {
			i?.unsubscribe();
			var o = 0, c = a++;
			oa(e(n, c)).subscribe(i = ji(r, function(e) {
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
function po(e) {
	return Ai(function(t, n) {
		oa(e).subscribe(ji(n, function() {
			return n.complete();
		}, ai)), !n.closed && t.subscribe(n);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
function mo(e, t) {
	return t === void 0 && (t = !1), Ai(function(n, r) {
		var i = 0;
		n.subscribe(ji(r, function(n) {
			var a = e(n, i++);
			(a || t) && r.next(n), !a && r.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/tap.js
function ho(e, t, n) {
	var r = Jr(e) || t || n ? {
		next: e,
		error: t,
		complete: n
	} : e;
	return r ? Ai(function(e, t) {
		var n;
		(n = r.subscribe) == null || n.call(r);
		var i = !0;
		e.subscribe(ji(t, function(e) {
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
	}) : Ci;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttle.js
function go(e, t) {
	return Ai(function(n, r) {
		var i = t ?? {}, a = i.leading, o = a === void 0 || a, s = i.trailing, c = s !== void 0 && s, l = !1, u = null, d = null, f = !1, p = function() {
			d?.unsubscribe(), d = null, c && (g(), f && r.complete());
		}, m = function() {
			d = null, f && r.complete();
		}, h = function(t) {
			return d = oa(e(t)).subscribe(ji(r, p, m));
		}, g = function() {
			if (l) {
				l = !1;
				var e = u;
				u = null, r.next(e), !f && h(e);
			}
		};
		n.subscribe(ji(r, function(e) {
			l = !0, u = e, !(d && !d.closed) && (o ? g() : h(e));
		}, function() {
			f = !0, !(c && l && d && !d.closed) && r.complete();
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js
function _o(e, t, n) {
	t === void 0 && (t = Ui);
	var r = Ya(e, t);
	return go(function() {
		return r;
	}, n);
}
//#endregion
//#region node_modules/audako-core/dist/mjs/utils/async-value-utils.js
function vo(e) {
	return typeof e == "function" ? vo(e()) : Ea(e) ? Oa(e) : Promise.resolve(e);
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/shared.js
var E = class {
	constructor() {
		this.headerExpanded = !1;
	}
}, yo;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(yo ||= {});
var bo = class {
	constructor() {
		this.channels = [], this.enabled = !1, this.timecontrol = !1;
	}
}, xo;
(function(e) {
	e.Second = "Second", e.Minute = "Minute", e.Hour = "Hour", e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Quarter = "Quarter", e.Year = "Year";
})(xo ||= {});
var So = class {
	constructor() {
		this.periodOfTime = xo.Day, this.amountOfTimePeriods = 1, this.beginningOfaDay = "00:00", this.beginningOfaWeek = 1, this.offsetOfTimePeriods = 0;
	}
}, Co;
(function(e) {
	e.StepSeriesOptions = "StepSeriesOptions", e.StepLineSeriesOptions = "StepLineSeriesOptions", e.LineSeriesOptions = "LineSeriesOptions", e.SmoothedLineSeriesOptions = "SmoothedLineSeriesOptions", e.ColumnSeriesOptions = "ColumnSeriesOptions";
})(Co ||= {});
var wo = class {}, To = class extends wo {}, Eo = class extends wo {
	constructor() {
		super(...arguments), this.tension = {
			tensionX: .89,
			tensionY: 1
		};
	}
}, Do = class extends wo {}, Oo = class {}, ko = class {}, Ao = class extends Oo {
	constructor() {
		super(), this.unit = "";
	}
}, jo = class {
	constructor() {
		this.title = "", this.yAxis = [], this.series = [], this.guidelines = [], this.enableScrollbar = !1, this.smallLegend = !1, this.legend = !0, this.showAggregationGuidelines = !1, this.showAggregationBullets = !1, this.enableAnnotation = !1, this.bulletDistanceThreshold = 0;
	}
}, Mo = "1", No = class extends E {
	constructor() {
		super(), this.version = "1", this.signalId = "", this.selectedIcon = "";
	}
}, Po = "1", Fo = class extends E {
	constructor() {
		super(), this.clockType = Io.Analog, this.version = "1", this.seconds = !1, this.date = !1, this.timezone = 0;
	}
}, Io;
(function(e) {
	e.Digital = "Digital", e.Analog = "Analog";
})(Io ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-text-config.js
var Lo = "1", Ro = class extends E {
	constructor() {
		super(), this.version = "1", this.headerExpanded = !1;
	}
}, zo = "7", Bo = class extends E {
	constructor() {
		super(), this.version = "7", this.dataSettings = [], this.historicalSetting = new So(), this.chartConfig = new jo(), this.timeManagementSettings = new bo(), this.liveDataSettings = {
			displayTimeRange: 0,
			startupType: !1,
			enabled: !1,
			autoZoom: !1
		};
	}
}, Vo = "1", Ho = class extends E {
	constructor(e) {
		super(), this.title = "WidgetDataImport", this.signals = [], this.version = "1", this.signals = [], e && Object.assign(this, e);
	}
}, Uo = "2", Wo;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(Wo ||= {});
var Go = class extends E {
	constructor() {
		super(), this.DataType = Wo.Signal, this.version = "2";
	}
}, Ko = {
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
function qo(e, t) {
	for (let n in Ko) if (Ko[n].start === e && Ko[n].end === t) return n;
	return null;
}
function Jo(e) {
	return Ko[e]?.rotation;
}
function Yo(e) {
	return !!Ko[e]?.inverted;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-liquid-fill-gauge.config.js
var Xo = "1", Zo = class extends E {
	constructor() {
		super(), this.version = "1", this.minValue = 0, this.maxValue = 100, this.gaugeTitle = "", this.suffix = "", this.displaySuffix = !0, this.waveCount = 2, this.circleThickness = .05, this.circleFillGap = .05, this.animateWave = !0, this.waveColor = "#178BCA", this.circleColor = "#178BCA", this.textColor = "#045681", this.waveTextColor = "#A4DBf8", this.signalId = null, this.waveAnimateTime = 4e3, this.waveHeight = .1, this.showMinMax = !1, this.showNullLine = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, Qo = "2", $o = class extends E {
	constructor() {
		super(), this.version = "2", this.type = null, this.caption = null, this.lockingValue = null, this.customLockingValue = null, this.lockingState = null, this.displayStatus = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, es = "5", ts = class {
	constructor() {
		this.expanded = !0;
	}
}, ns = class extends E {
	constructor() {
		super(), this.version = "5";
	}
}, rs = "1", is = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, as = "1", os = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, ss = "0", cs = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, ls = class extends E {
	constructor() {
		super(), this.version = "0", this.sliderGroups = null;
	}
}, us;
(function(e) {
	e.Enabled = "Enabled", e.Disabled = "Disabled", e.Locked = "Locked";
})(us ||= {});
var ds = "0", fs = class extends E {
	constructor() {
		super(), this.dataGroups = [], this.version = "0";
	}
}, ps = "1", ms = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, hs = "1", gs = class extends E {
	constructor() {
		super(), this.version = "1", this.counterSignalIds = [];
	}
}, _s = "2", vs = class extends E {
	constructor() {
		super(), this.title = "", this.queryType = null, this.version = "2";
	}
}, ys = "3", bs = class extends E {
	constructor() {
		super(), this.backgroundColor = null, this.version = "3", this.mode = xs.Receive, this.backgroundColor = "#ffffff", this.transferToken = null, this.crossTabs = !1;
	}
}, xs;
(function(e) {
	e.Send = "Send", e.Receive = "Receive";
})(xs ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-traffic-light-config.js
var Ss;
(function(e) {
	e.Red = "Red", e.Yellow = "Yellow", e.Green = "Green", e.Off = "Off";
})(Ss ||= {});
var Cs = class extends E {
	constructor() {
		super(), this.version = "1", this.title = "", this.headerExpanded = !1, this.mode = ws.TrafficLight, this.settings = [], this.housingColor = null;
	}
}, ws;
(function(e) {
	e.TrafficLight = "TrafficLight", e.PedestrianLight = "PedestrianLight", e.SignalLight = "SignalLight";
})(ws ||= {});
var Ts = {
	[ws.TrafficLight]: "TRAFFIC_LIGHT",
	[ws.PedestrianLight]: "PEDESTRIAN_LIGHT",
	[ws.SignalLight]: "SIGNAL_LIGHT"
}, Es = {
	[Ss.Red]: "RED",
	[Ss.Yellow]: "YELLOW",
	[Ss.Green]: "GREEN",
	[Ss.Off]: "OFF"
}, Ds = "1", Os = class extends E {
	constructor() {
		super(), this.signals = [], this.chartConfig = new jo();
	}
}, ks = "5", As = class extends E {
	constructor() {
		super(), this.unit = "", this.version = "5", this.compressionSettings = Dr.DayInterval, this.historicalSetting = new So(), this.timeManagementSettings = new bo(), this.headerExpanded = !1;
	}
}, js = class {}, Ms = "2", Ns = class {}, Ps = class {}, Fs = class {}, Is = class extends E {
	constructor() {
		super(), this.version = "2";
	}
}, Ls = "2", Rs;
(function(e) {
	e.Sum = "Sum", e.Average = "Average";
})(Rs ||= {});
var zs = class extends E {
	constructor() {
		super(), this.unit = "", this.nodes = [], this.connections = [], this.version = "2", this.timeManagementSettings = new bo(), this.compressionSettings = Dr.DayInterval;
	}
}, Bs = "2", Vs = class extends E {
	constructor() {
		super(), this.version = "2", this.TemplateTimeSteps = {};
	}
}, Hs;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Hs ||= {});
var Us = "WidgetReport", Ws = "4", Gs = class extends E {
	constructor() {
		super(), this.version = "4", this.acquisitionInterval = Ks.Month, this.acquisitionUnit = qs.DayValues, this.manualDataSignalMasks = [], this.additionalOptions = {}, this.timelineOption = Js.AUTO, this.showStatusIcons = !0, this.showAlias = !1, this.showPreviousPermanent = !1, this.showPreviousDefault = !0, this.autoSaveAndNext = !0;
	}
}, Ks;
(function(e) {
	e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Ks ||= {});
var qs;
(function(e) {
	e.ProcessValues = "ProcessValues", e.HourValues = "HourValues", e.DayValues = "DayValues", e.WeekValues = "WeekValues", e.MonthValues = "MonthValues", e.YearValues = "YearValues";
})(qs ||= {});
var Js;
(function(e) {
	e.ENABLED = "0", e.DISABLED = "1", e.AUTO = "2";
})(Js ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-billing-config.js
var Ys = "1", Xs = class extends E {
	constructor() {
		super(), this.version = "1", this.currencyCode = "€", this.counters = [];
	}
}, Zs;
(function(e) {
	e.SIGNAL = "signal", e.VALUE = "value";
})(Zs ||= {});
var Qs = [
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
], $s = "1", ec = class extends E {
	constructor(e) {
		super(), this.version = "1", this.displayedMetadataFields = [], this.orderSpecificMetadataFields = [], this.showHistory = !0, this.timePeriod = xo.Day, this.periodAmount = 1, e && Object.assign(this, e);
	}
}, tc = "1", nc = class {
	constructor(e) {
		this.version = "1", e && Object.assign(this, e);
	}
}, rc = "8", ic = class {
	constructor(e = 0, t = 0) {
		this.lng = t, this.lat = e;
	}
}, ac = class extends E {
	constructor() {
		super(), this.Marker = [], this.mapGroups = [], this.version = "8", this.headerExpanded = !1, this.autoZoom = !0, this.defaultZoom = 20;
	}
}, oc;
(function(e) {
	e.Live = "Live";
})(oc ||= {});
var sc = Object.assign(Object.assign({}, oc), Dr), cc = class {
	constructor() {
		this.intervalType = oc.Live;
	}
}, lc = class {}, uc = class {}, dc = class {
	constructor() {}
}, fc = class extends dc {}, pc = class extends dc {
	constructor() {
		super(), this.filterId = null, this.eventFilter = "Group";
	}
	static isEventBadge(e) {
		return e.eventFilter !== void 0;
	}
}, mc = "3", hc;
(function(e) {
	e.LastValue = "LastValue", e.Difference = "Difference", e.Average = "Average";
})(hc ||= {});
var gc = {
	showTimestamp: !0,
	showLatLng: !0,
	showDuration: !0
}, _c = class extends E {
	constructor(e = {}) {
		super(), Object.assign(this, e), this.version = "3";
	}
}, vc = "1", yc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, bc;
(function(e) {
	e.Ongoing = "Ongoing", e.Canceled = "Canceled", e.Completed = "Completed";
})(bc ||= {});
var xc = "2", Sc = class extends E {
	constructor(e) {
		super(), this.version = "2", e && Object.assign(this, e);
	}
}, Cc;
(function(e) {
	e.Open = "Open", e.History = "History", e.All = "All";
})(Cc ||= {});
var wc;
(function(e) {
	e.Group = "Group", e.Service = "Service";
})(wc ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-type-plate-config.js
var Tc = "1", Ec = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, Dc = class extends E {
	constructor(e = "", t = !1) {
		super(), this.title = e, this.headerExpanded = t;
	}
}, Oc = "1", kc = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, Ac;
(function(e) {
	e.Group = "Group", e.Entity = "Entity";
})(Ac ||= {});
var jc;
(function(e) {
	e[e.Add = 0] = "Add", e[e.Update = 1] = "Update", e[e.Delete = 2] = "Delete";
})(jc ||= {});
var Mc;
(function(e) {
	e.ResetCounter_1 = "ResetCounter_1", e.Set = "Set", e.SetManualValue = "SetManualValue", e.SetNote = "SetNote", e.SetLive = "SetLive", e.SendConfig = "SendConfig", e.ImportHistoricalValues = "ImportHistoricalValues", e.HistoricalValueManipulation = "HistoricalValueManipulation", e.Deactivated = "Deactivated", e.Activated = "Activated", e.ResetBatchReview = "ResetBatchReview", e.LicenseRenewal = "LicenseRenewal";
})(Mc ||= {});
var Nc;
(function(e) {
	e.Group = "GROUP", e.Signal = "SIGNAL", e.Formula = "FORMULA", e.Datasource = "DATASOURCE", e.DataConnection = "DATACONNECTION", e.Dashboard = "DASHBOARD", e.DashboardTab = "DASHBOARDTAB", e.ProcessImage = "PROCESSIMAGE", e.ReportTemplate = "REPORTTEMPLATE", e.Report = "REPORT", e.Camera = "CAMERA", e.SwitchSchedule = "SWITCHSCHEDULE", e.RecipientGroup = "RECIPIENTGROUP", e.Recipient = "RECIPIENT", e.AlarmingPlan = "ALARMINGPLAN", e.Role = "ROLE", e.Condition = "CONDITION", e.EventDefinition = "EVENTDEFINITION", e.EventCategory = "EVENTCATEGORY", e.BatchDefinition = "BATCHDEFINITION";
})(Nc ||= {});
var Pc = "2", Fc = class extends E {
	constructor() {
		super(), this.version = "2";
	}
}, Ic = "1", Lc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, Rc = "2", zc = class extends E {
	constructor() {
		super(), this.version = "2";
	}
}, Bc = "1", Vc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, Hc;
(function(e) {
	e.STAR = "*", e.SELF = "self", e.SRC = "src", e.NONE = "none", e.ORIGINS = "origins";
})(Hc ||= {});
var Uc;
(function(e) {
	e.LAZY = "lazy", e.EAGER = "eager", e.AUTO = "auto";
})(Uc ||= {});
var Wc = "1", Gc = class extends E {
	constructor() {
		super(), this.title = "", this.version = "1", this.headerExpanded = !1, this.permissions = "", this.restrictions = [], this.src = null, this.loadingMethod = "auto";
	}
}, Kc = "1", qc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, Jc = "2", Yc = class extends E {
	constructor() {
		super(), this.ReferenceId = "", this.sidebarExpandedOnLargeWidget = !1, this.version = "2";
	}
}, Xc = "1", Zc = class extends E {
	constructor() {
		super(), this.AlarmingPlanID = [], this.version = "1";
	}
}, Qc = "1", $c = class extends E {
	constructor() {
		super(), this.alarmingPlanIds = [], this.version = "1";
	}
}, el;
(function(e) {
	e.EmailContact = "EmailContact", e.PushoverContact = "PushoverContact", e.SmsContact = "SmsContact", e.VoipContact = "VoipContact", e.TeamsContact = "TeamsContact", e.TelegramContact = "TelegramContact";
})(el ||= {});
var tl = "5", nl = class extends E {
	constructor() {
		super(), this.version = "5", this.showContacts = !1, this.showContactsMatrix = {}, this.allowEditing = !1, this.editableRecipientIds = [];
	}
}, rl = "1", il = class extends E {
	constructor() {
		super(), this.title = "Widget", this.version = "1", this.recipientGroupId = "";
	}
}, al;
(function(e) {
	e.Group = "Group", e.EventCategory = "EventCategory", e.EventDefinition = "EventDefinition";
})(al ||= {});
var ol;
(function(e) {
	e.Group = "GROUP", e.EventCategory = "EVENTCATEGORY", e.EventDefinition = "EVENTDEFINITION";
})(ol ||= {});
var sl = "1", cl = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, ll = "1", ul = class extends E {
	constructor() {
		super(), this.Events = [], this.version = "1";
	}
}, dl = "1", fl = class extends E {
	constructor(e) {
		super(), this.version = "1", this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, pl = "2", ml = class extends E {
	constructor(e) {
		super(), this.version = "2", this.filterType = "Group", this.onlyActive = !1, this.requestIntervalType = hl.Minutes, this.requestInterval = 5, this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, hl;
(function(e) {
	e.Seconds = "Seconds", e.Minutes = "Minutes";
})(hl ||= {});
//#endregion
//#region node_modules/audako-core/dist/mjs/models/widgets/widget-entered-alarming-config.js
var gl = "2", _l = class extends E {
	constructor() {
		super(), this.version = "2", this.DateIntervalType = vl.Day, this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1;
	}
}, vl;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month";
})(vl ||= {});
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function yl(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: bl } = Object.prototype, { getPrototypeOf: xl } = Object, { iterator: Sl, toStringTag: Cl } = Symbol, wl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Tl = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), El = (e, t, n) => e === Object.prototype || !n && t === null, Dl = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (Tl(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, Ol = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = xl(n);
		if (El(n, i, n === e)) return !1;
		if (wl(n, t)) return !0;
		n = i;
	}
	return !1;
}, kl = (e, t) => e != null && Ol(e, t) ? e[t] : void 0, Al = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = xl(e);
	if (t === null && Dl(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : xl(a);
		if (El(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) Tl(t) || wl(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, jl = ((e) => (t) => {
	let n = bl.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), Ml = (e) => (e = e.toLowerCase(), (t) => jl(t) === e), Nl = (e) => (t) => typeof t === e, { isArray: Pl } = Array, Fl = Nl("undefined");
function Il(e) {
	return e !== null && !Fl(e) && e.constructor !== null && !Fl(e.constructor) && Bl(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Ll = Ml("ArrayBuffer");
function Rl(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Ll(e.buffer), t;
}
var zl = Nl("string"), Bl = Nl("function"), Vl = Nl("number"), Hl = (e) => typeof e == "object" && !!e, Ul = (e) => e === !0 || e === !1, Wl = (e) => {
	if (!Hl(e)) return !1;
	let t = xl(e);
	return (t === null || t === Object.prototype || xl(t) === null) && !Ol(e, Cl) && !Ol(e, Sl);
}, Gl = (e) => {
	if (!Hl(e) || Il(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, Kl = Ml("Date"), ql = Ml("File"), Jl = (e) => !!(e && e.uri !== void 0), Yl = (e) => e && e.getParts !== void 0, Xl = Ml("Blob"), Zl = Ml("FileList"), Ql = Ml("Set"), $l = (e) => Hl(e) && Bl(e.pipe);
function eu() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var tu = eu(), nu = tu.FormData === void 0 ? void 0 : tu.FormData, ru = (e) => {
	if (!e) return !1;
	if (nu && e instanceof nu) return !0;
	let t = xl(e);
	if (!t || t === Object.prototype || !Bl(e.append)) return !1;
	let n = jl(e);
	return n === "formdata" || n === "object" && Bl(e.toString) && e.toString() === "[object FormData]";
}, iu = Ml("URLSearchParams"), [au, ou, su, cu] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(Ml), lu = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function uu(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), Pl(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (Il(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function du(e, t) {
	if (Il(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var fu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, pu = (e) => !Fl(e) && e !== fu;
function mu(...e) {
	let { caseless: t, skipUndefined: n } = pu(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && du(r, i) || i, o = wl(r, a) ? r[a] : void 0;
		Wl(o) && Wl(e) ? r[a] = mu(o, e) : Wl(e) ? r[a] = mu({}, e) : Pl(e) ? r[a] = e.slice() : (!n || !Fl(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || Il(n) || (uu(n, i), typeof n != "object" || Pl(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			Eu.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var hu = (e, t, n, { allOwnKeys: r } = {}) => (uu(t, (t, r) => {
	n && Bl(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: yl(t, n),
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
}, { allOwnKeys: r }), e), gu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), _u = (e, t, n, r) => {
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
}, vu = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && xl(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, yu = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, bu = (e) => {
	if (!e) return null;
	if (Pl(e)) return e;
	let t = e.length;
	if (!Vl(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, xu = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && xl(Uint8Array)), Su = (e, t) => {
	let n = (e && e[Sl]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, Cu = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, wu = Ml("HTMLFormElement"), Tu = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: Eu } = Object.prototype, Du = Ml("RegExp"), Ou = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	uu(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, ku = (e) => {
	Ou(e, (t, n) => {
		if (Bl(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (Bl(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Au = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return Pl(e) ? r(e) : r(String(e).split(t)), n;
}, ju = () => {}, Mu = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Nu(e) {
	return !!(e && Bl(e.append) && e[Cl] === "FormData" && e[Sl]);
}
var Pu = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (Hl(e)) {
			if (t.has(e)) return;
			if (Il(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Ql(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!Fl(e) && r.push(e);
					}
				} else r = Pl(e) ? [] : {}, uu(e, (e, t) => {
					let i = n(e);
					!Fl(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Fu = Ml("AsyncFunction"), Iu = (e) => e && (Hl(e) || Bl(e)) && Bl(e.then) && Bl(e.catch), Lu = ((e, t) => e ? setImmediate : t ? ((e, t) => (fu.addEventListener("message", ({ source: n, data: r }) => {
	n === fu && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), fu.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", Bl(fu.postMessage)), Ru = typeof queueMicrotask < "u" ? queueMicrotask.bind(fu) : typeof process < "u" && process.nextTick || Lu, zu = (e) => e != null && Bl(e[Sl]), D = {
	isArray: Pl,
	isArrayBuffer: Ll,
	isBuffer: Il,
	isFormData: ru,
	isArrayBufferView: Rl,
	isString: zl,
	isNumber: Vl,
	isBoolean: Ul,
	isObject: Hl,
	isPlainObject: Wl,
	isEmptyObject: Gl,
	isReadableStream: au,
	isRequest: ou,
	isResponse: su,
	isHeaders: cu,
	isUndefined: Fl,
	isDate: Kl,
	isFile: ql,
	isReactNativeBlob: Jl,
	isReactNative: Yl,
	isBlob: Xl,
	isRegExp: Du,
	isFunction: Bl,
	isStream: $l,
	isURLSearchParams: iu,
	isTypedArray: xu,
	isFileList: Zl,
	forEach: uu,
	merge: mu,
	extend: hu,
	trim: lu,
	stripBOM: gu,
	inherits: _u,
	toFlatObject: vu,
	kindOf: jl,
	kindOfTest: Ml,
	endsWith: yu,
	toArray: bu,
	forEachEntry: Su,
	matchAll: Cu,
	isHTMLForm: wu,
	hasOwnProperty: wl,
	hasOwnProp: wl,
	hasOwnInPrototypeChain: Ol,
	getSafeProp: kl,
	toSafeFlatObject: Al,
	reduceDescriptors: Ou,
	freezeMethods: ku,
	toObjectSet: Au,
	toCamelCase: Tu,
	noop: ju,
	toFiniteNumber: Mu,
	findKey: du,
	global: fu,
	isContextDefined: pu,
	isSpecCompliantForm: Nu,
	toJSONObject: Pu,
	isAsyncFn: Fu,
	isThenable: Iu,
	setImmediate: Lu,
	asap: Ru,
	isIterable: zu,
	isSafeIterable: (e) => e != null && Ol(e, Sl) && zu(e)
}, Bu = D.toObjectSet([
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
]), Vu = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = D.hasOwnProp(t, n);
		!n || a && D.hasOwnProp(Bu, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Hu(e) {
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
var Uu = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Wu = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Gu(e, t) {
	return D.isArray(e) ? e.map((e) => Gu(e, t)) : Hu(String(e).replace(t, ""));
}
var Ku = (e) => Gu(e, Uu), qu = (e) => Gu(e, Wu);
function Ju(e) {
	let t = Object.create(null);
	return D.forEach(e.toJSON(), (e, n) => {
		t[n] = qu(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Yu = Symbol("internals");
function Xu(e) {
	return e && String(e).trim().toLowerCase();
}
function Zu(e) {
	return e === !1 || e == null ? e : D.isArray(e) ? e.map(Zu) : Ku(String(e));
}
function Qu(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var $u = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function ed(e) {
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
function td(e) {
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
function nd(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = ed(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = ed(i.slice(0, a));
		if (!$u.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = ed(i.slice(a + 1));
		t[s] = td(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var rd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function id(e, t, n, r, i) {
	if (D.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), D.isString(t)) {
		if (D.isString(r)) return t.indexOf(r) !== -1;
		if (D.isRegExp(r)) return r.test(t);
	}
}
function ad(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function od(e, t) {
	let n = D.toCamelCase(" " + t);
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
var sd = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Xu(t);
			if (!i) return;
			let a = D.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Zu(e));
		}
		let a = (e, t) => D.forEach(e, (e, n) => i(e, n, t));
		if (D.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (D.isString(e) && (e = e.trim()) && !rd(e)) a(Vu(e), t);
		else if (D.isObject(e) && D.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!D.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], D.hasOwnProp(n, i) ? (r = n[i], n[i] = D.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Xu(e), e) {
			let n = D.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Qu(e);
				if (D.isFunction(t)) return t.call(this, e, n);
				if (D.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Xu(e), e) {
			let n = D.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || id(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Xu(e), e) {
				let i = D.findKey(n, e);
				i && (!t || id(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return D.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || id(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return D.forEach(this, (r, i) => {
			let a = D.findKey(n, i);
			if (a) {
				t[a] = Zu(r), delete t[i];
				return;
			}
			let o = e ? ad(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Zu(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return D.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && D.isArray(n) ? n.join(", ") : n);
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
		return D.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return nd(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Yu] = this[Yu] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Xu(e);
			t[r] || (od(n, e), t[r] = !0);
		}
		return D.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
sd.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), D.reduceDescriptors(sd.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), D.freezeMethods(sd);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var cd = "[REDACTED ****]";
function ld(e) {
	if (D.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (D.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function ud(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || D.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof sd && (e = e.toJSON()), r.push(e);
		let t;
		if (D.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			D.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!D.isPlainObject(e) && ld(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? cd : i(a);
				D.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function dd(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function fd(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? dd(e.message) : dd(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var O = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && D.isArray(t.errors) && t.errors.length && (s = fd(t));
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
		let e = this.config, t = e && D.hasOwnProp(e, "redact") ? e.redact : void 0, n = D.isArray(t) && t.length > 0 ? ud(e, t) : D.toJSONObject(e);
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
O.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", O.ERR_BAD_OPTION = "ERR_BAD_OPTION", O.ECONNABORTED = "ECONNABORTED", O.ETIMEDOUT = "ETIMEDOUT", O.ECONNREFUSED = "ECONNREFUSED", O.ERR_NETWORK = "ERR_NETWORK", O.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", O.ERR_DEPRECATED = "ERR_DEPRECATED", O.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", O.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", O.ERR_CANCELED = "ERR_CANCELED", O.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", O.ERR_INVALID_URL = "ERR_INVALID_URL", O.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function pd(e) {
	return D.isPlainObject(e) || D.isArray(e);
}
function md(e) {
	return D.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hd(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = md(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function gd(e) {
	return D.isArray(e) && !e.some(pd);
}
var _d = D.toFlatObject(D, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function vd(e, t, n) {
	if (!D.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = D.getSafeProp(n, e);
		return D.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && D.isSpecCompliantForm(t), d = [];
	if (!D.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (D.isDate(e)) return e.toISOString();
		if (D.isBoolean(e)) return e.toString();
		if (!u && D.isBlob(e)) throw new O("Blob is not supported. Use a Buffer instead.");
		if (D.isArrayBuffer(e) || D.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new O("Blob is not supported. Use a Buffer instead.", O.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new O("Object is too deeply nested (" + e + " levels). Max depth: " + l, O.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!D.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (D.isReactNative(t) && D.isReactNativeBlob(e)) return t.append(hd(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (D.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (D.isArray(e) && gd(e) || (D.isFileList(e) || D.endsWith(n, "[]")) && (a = D.toArray(e))) return n = md(n), a.forEach(function(e, r) {
				!(D.isUndefined(e) || e === null) && t.append(s === !0 ? hd([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return pd(e) ? !0 : (t.append(hd(r, n, o), f(e)), !1);
	}
	let g = Object.assign(_d, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: pd
	});
	function _(e, n, r = 0) {
		if (!D.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), D.forEach(e, function(e, i) {
				(!(D.isUndefined(e) || e === null) && a.call(t, e, D.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!D.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function yd(e) {
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
function bd(e, t) {
	this._pairs = [], e && vd(e, this, t);
}
var xd = bd.prototype;
xd.append = function(e, t) {
	this._pairs.push([e, t]);
}, xd.toString = function(e) {
	let t = e ? (t) => e.call(this, t, yd) : yd;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function Sd(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Cd(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = D.isFunction(n) ? { serialize: n } : n, i = D.getSafeProp(r, "encode") || Sd, a = D.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : D.isURLSearchParams(t) ? t.toString() : new bd(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var wd = Symbol("internals");
function Td(e) {
	return e ? e.length : 0;
}
function Ed(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function Dd(e, t) {
	let n = e.handlers, r = Td(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var Od = class {
	constructor() {
		this.handlers = [], this[wd] = {
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
		}, i = this[wd];
		this.handlers ??= [], Dd(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[wd];
		Dd(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (Ed(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], Dd(this, this[wd]));
	}
	forEach(e) {
		let t = this[wd];
		Dd(this, t), t.iterationDepth++;
		try {
			D.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (Dd(this, t), Ed(this.handlers), t.handlersLength = Td(this.handlers));
		}
	}
}, kd = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Ad = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : bd,
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
}, jd = /* @__PURE__ */ t({
	hasBrowserEnv: () => Md,
	hasStandardBrowserEnv: () => Pd,
	hasStandardBrowserWebWorkerEnv: () => Fd,
	navigator: () => Nd,
	origin: () => Id
}), Md = typeof window < "u" && typeof document < "u", Nd = typeof navigator == "object" && navigator || void 0, Pd = Md && (!Nd || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Nd.product) < 0), Fd = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Id = Md && window.location.href || "http://localhost", Ld = {
	...jd,
	...Ad
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Rd(e, t) {
	return vd(e, new Ld.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return Ld.isNode && D.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var zd = 100;
function Bd(e) {
	if (e > zd) throw new O("FormData field is too deeply nested (" + e + " levels). Max depth: " + zd, O.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Vd(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Bd(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Hd(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Ud(e) {
	function t(e, n, r, i) {
		Bd(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && D.isArray(r) ? r.length : a, s ? (D.hasOwnProp(r, a) ? r[a] = D.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!D.hasOwnProp(r, a) || !D.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && D.isArray(r[a]) && (r[a] = Hd(r[a])), !o);
	}
	if (D.isFormData(e) && D.isFunction(e.entries)) {
		let n = {};
		return D.forEachEntry(e, (e, r) => {
			t(Vd(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var Wd = Object.freeze([
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
]), Gd = (e, t) => e != null && D.hasOwnProp(e, t) ? e[t] : void 0;
function Kd(e, t, n) {
	if (D.isString(e)) try {
		return (t || JSON.parse)(e), D.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var qd = {
	transitional: kd,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = D.isObject(e);
		if (i && D.isHTMLForm(e) && (e = new FormData(e)), D.isFormData(e)) return r ? JSON.stringify(Ud(e)) : e;
		if (D.isArrayBuffer(e) || D.isBuffer(e) || D.isStream(e) || D.isFile(e) || D.isBlob(e) || D.isReadableStream(e)) return e;
		if (D.isArrayBufferView(e)) return e.buffer;
		if (D.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Gd(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Rd(e, t).toString();
			if ((a = D.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Gd(this, "env"), r = n && n.FormData;
				return vd(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Kd(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Gd(this, "transitional") || qd.transitional, n = t && t.forcedJSONParsing, r = Gd(this, "responseType"), i = r === "json";
		if (D.isResponse(e) || D.isReadableStream(e)) return e;
		if (e && D.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Gd(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? O.from(e, O.ERR_BAD_RESPONSE, this, null, Gd(this, "response")) : e;
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
		FormData: Ld.classes.FormData,
		Blob: Ld.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
D.forEach(Wd, (e) => {
	qd.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Jd(e, t) {
	let n = this || qd, r = t || n, i = sd.from(r.headers), a = r.data;
	return D.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Yd(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Xd = class extends O {
	constructor(e, t, n) {
		super(e ?? "canceled", O.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Zd(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new O("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? O.ERR_BAD_REQUEST : O.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var Qd = /[\t\n\r]/g;
function $d(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Qd, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function ef(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function tf(e, t) {
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
function nf(e, t) {
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
var rf = (e, t, n = 3) => {
	let r = 0, i = tf(50, 250);
	return nf((n) => {
		if (!n || !D.isNumber(n.loaded)) return;
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
}, af = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, of = (e, t = D.asap) => (...n) => t(() => e(...n)), sf = Ld.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Ld.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Ld.origin), Ld.navigator && /(msie|trident)/i.test(Ld.navigator.userAgent)) : () => !0, cf = Ld.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		D.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), D.isString(r) && s.push(`path=${r}`), D.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), D.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
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
function lf(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function uf(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var df = /^https?:(?!\/\/)/i;
function ff(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${cd}`);
}
function pf(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${cd}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${cd}`);
	return n === -1 ? r : `${r}#${ff(t.slice(n + 1))}`;
}
function mf(e, t) {
	if (typeof e == "string") {
		let n = $d(e);
		if (df.test(n)) throw new O(`Invalid URL ${JSON.stringify(pf(n))}: missing "//" after protocol`, O.ERR_INVALID_URL, t);
	}
}
function hf(e, t, n, r) {
	mf(t, r);
	let i = !lf(t);
	return e && (i || n === !1) ? (mf(e, r), uf(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var gf = (e) => e instanceof sd ? { ...e } : e, _f = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function vf(e, t) {
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
		return D.isPlainObject(e) && D.isPlainObject(t) ? D.merge.call({ caseless: r }, e, t) : D.isPlainObject(t) ? D.merge({}, t) : D.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!D.isUndefined(t)) return r(e, t, n, i);
		if (!D.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!D.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!D.isUndefined(t)) return r(void 0, t);
		if (!D.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = D.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!D.isUndefined(r)) {
			if (D.isPlainObject(r)) {
				if (D.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = D.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (D.isPlainObject(i) && D.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (D.hasOwnProp(t, a)) return r(n, i);
		if (D.hasOwnProp(e, a)) return r(void 0, n);
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
		headers: (e, t, n) => i(gf(e), gf(t), n, !0)
	};
	return D.forEach(_f({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = D.hasOwnProp(l, r) ? l[r] : i, o = a(D.hasOwnProp(e, r) ? e[r] : void 0, D.hasOwnProp(t, r) ? t[r] : void 0, r);
		D.isUndefined(o) && a !== c || (n[r] = o);
	}), D.hasOwnProp(t, "validateStatus") && D.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (D.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var yf = ["content-type", "content-length"];
function bf(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		yf.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var xf = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function Sf(e) {
	let t = vf({}, e), n = (e) => D.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = sd.from(s), t.url = Cd(hf(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = D.getSafeProp(c, "username") || "", n = D.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? xf(n) : "")));
		} catch (t) {
			throw O.from(t, O.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (D.isFormData(r)) {
		let e = D.getSafeProp(r, "getHeaders");
		Ld.hasStandardBrowserEnv || Ld.hasStandardBrowserWebWorkerEnv || D.isReactNative(r) ? s.setContentType(void 0) : D.isFunction(e) && bf(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (Ld.hasStandardBrowserEnv && (D.isFunction(i) && (i = i(t)), i === !0 || i == null && sf(t.url))) {
		let e = a && o && cf.read(o);
		e && s.set(a, e);
	}
	return t;
}
var Cf = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = Sf(e), i = r.data, a = sd.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (ef($d(r.url)) || ef(Ld.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new O("Request aborted", O.ECONNABORTED, e, g)), h(), g = null;
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
			let a = sd.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Zd(function(e) {
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
			g &&= (n(new O("Request aborted", O.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new O(t && t.message ? t.message : "Network Error", O.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || kd;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new O(t, i.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && D.forEach(Ju(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), D.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = rf(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = rf(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new Xd(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = ef(r.url);
		if (v && !Ld.protocols.includes(v)) {
			n(new O("Unsupported protocol " + v + ":", O.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, wf = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof O ? t : new Xd(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new O(`timeout of ${t}ms exceeded`, O.ETIMEDOUT));
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
	return s.unsubscribe = () => D.asap(o), s;
}, Tf = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, Ef = async function* (e, t) {
	for await (let n of Df(e)) yield* Tf(n, t);
}, Df = async function* (e) {
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
}, Of = (e, t, n, r) => {
	let i = Ef(e, t), a = 0, o, s = (e) => {
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
}, kf = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Af = (e, t, n) => t + 2 < n && kf(e.charCodeAt(t + 1)) && kf(e.charCodeAt(t + 2)), jf = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Mf = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, Nf = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Pf = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Ff = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, If = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && Af(e, a, t) && (o = jf(e.charCodeAt(a + 1)) * 16 + jf(e.charCodeAt(a + 2)), a += 2), !Nf(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!Mf(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Ff(e) : Pf(n);
}, Lf = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && Af(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function Rf(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return Lf(t === -1 ? e : e.slice(0, t), If);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var zf = "1.20.0", Bf = 65536, Vf = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Hf } = D, Uf = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Wf = (e) => {
	if (!D.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Gf = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Kf = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, qf = (e) => {
	let t = D.global !== void 0 && D.global !== null ? D.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = D.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Hf(i) : typeof fetch == "function", c = Hf(a), l = Hf(o);
	if (!s) return !1;
	let u = s && Hf(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Gf(() => {
		let e = !1, t = new a(Ld.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Gf(() => D.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
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
			throw new O(`Response type '${e}' is not supported`, O.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (D.isBlob(e)) return e.size;
		if (D.isSpecCompliantForm(e)) return (await new a(Ld.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (D.isArrayBufferView(e) || D.isArrayBuffer(e)) return e.byteLength;
		if (D.isURLSearchParams(e) && (e += ""), D.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => D.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: ee, maxContentLength: C, maxBodyLength: te, maxRedirects: ne } = Sf(e), re = D.isNumber(C) && C > -1, ie = D.isNumber(te) && te > -1, ae = (t) => D.hasOwnProp(e, t) ? e[t] : void 0, oe = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let se = wf([l, d && d.toAbortSignal()], _), ce = null, le = se && se.unsubscribe && (() => {
			se.unsubscribe();
		}), ue, de = null, fe = () => new O("Request body larger than maxBodyLength limit", O.ERR_BAD_REQUEST, e, ce);
		try {
			let i, l = ae("auth");
			if (l && (i = {
				username: D.getSafeProp(l, "username") || "",
				password: D.getSafeProp(l, "password") || ""
			}), Kf(t)) {
				let e = new URL(t, Ld.origin);
				!i && (e.username || e.password) && (i = {
					username: Wf(e.username),
					password: Wf(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Uf((i.username || "") + ":" + (i.password || ""))))), re && typeof t == "string" && t.startsWith("data:") && Rf(t) > C) throw new O("maxContentLength size of " + C + " exceeded", O.ERR_BAD_RESPONSE, e, ce);
			if (ie && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ue = e, e > te)) throw fe();
			}
			let d = ie && (D.isReadableStream(s) || D.isStream(s)), _ = (e, t, n) => Of(e, Bf, (e) => {
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
					if (D.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && af(ue, rf(of(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new O("Stream request bodies are not supported by the current fetch implementation", O.ERR_NOT_SUPPORT, e, ce);
			D.isString(S) || (S = S ? "include" : "omit");
			let pe = c && "credentials" in a.prototype;
			if (D.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + zf, !1);
			let w = ee == null ? ee : Object.assign(Object.create(null), ee);
			w && (delete w.body, delete w.headers, delete w.method, delete w.signal, delete w.duplex, delete w.credentials);
			let me = Object.assign(Object.create(null), w, {
				signal: se,
				method: n.toUpperCase(),
				headers: Ju(x.normalize()),
				body: s,
				duplex: "half",
				credentials: pe ? S : void 0
			});
			c && (D.forEach(Vf, (e, t) => {
				me[t] === void 0 && (me[t] = e);
			}), me.signal === void 0 && (me.signal = null), me.body === void 0 && (me.body = null)), ne === 0 && (me.redirect = "manual", w && (w.redirect = "manual")), ce = c && new a(t, me);
			let he = await (c ? oe(ce, w) : oe(t, me)), ge = sd.from(he.headers);
			if (re) {
				let t = D.toFiniteNumber(ge.getContentLength());
				if (t != null && t > C) throw new O("maxContentLength size of " + C + " exceeded", O.ERR_BAD_RESPONSE, e, ce);
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
				let n = D.toFiniteNumber(ge.getContentLength()), [r, i] = v && af(n, rf(of(v), !0)) || [], a = 0;
				he = new o(Of(he.body, Bf, (t) => {
					if (re && (a = t, a > C)) throw new O("maxContentLength size of " + C + " exceeded", O.ERR_BAD_RESPONSE, e, ce);
					r && r(t);
				}, () => {
					i && i(), le && le();
				}), t);
			}
			b ||= "text";
			let ve = await m[D.findKey(m, b) || "text"](he, e);
			if (re && !p && !_e) {
				let t;
				if (ve != null && (typeof ve.byteLength == "number" ? t = ve.byteLength : typeof ve.size == "number" ? t = ve.size : typeof ve == "string" && (t = typeof r == "function" ? new r().encode(ve).byteLength : ve.length)), typeof t == "number" && t > C) throw new O("maxContentLength size of " + C + " exceeded", O.ERR_BAD_RESPONSE, e, ce);
			}
			return !_e && le && le(), await new Promise((t, n) => {
				Zd(t, n, {
					data: ve,
					headers: sd.from(he.headers),
					status: he.status,
					statusText: he.statusText,
					config: e,
					request: ce
				});
			});
		} catch (t) {
			if (le && le(), se && se.aborted && se.reason instanceof O) {
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
			if (t instanceof O) throw ce && !t.request && (t.request = ce), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new O("Network Error", O.ERR_NETWORK, e, ce, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw O.from(t, t && t.code, e, ce, t && t.response);
		}
	};
}, Jf = /* @__PURE__ */ new Map(), Yf = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Jf;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : qf(t)), l = c;
	return c;
};
Yf();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Xf = {
	http: null,
	xhr: Cf,
	fetch: { get: Yf }
};
D.forEach(Xf, (e, t) => {
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
var Zf = (e) => `- ${e}`, Qf = (e) => D.isFunction(e) || e === null || e === !1;
function $f(e, t) {
	e = D.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Qf(r) && (i = Xf[(n = String(r)).toLowerCase()], i === void 0)) throw new O(`Unknown adapter '${n}'`);
		if (i && (D.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new O("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Zf).join("\n") : " " + Zf(e[0]) : "as no adapter specified"), O.ERR_NOT_SUPPORT);
	}
	return i;
}
var ep = {
	getAdapter: $f,
	adapters: Xf
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function tp(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Xd(null, e);
}
function np(e) {
	let t = D.toSafeFlatObject(e);
	return tp(t), t.headers = sd.from(D.getSafeProp(t, "headers")), t.data = Jd.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ep.getAdapter(t.adapter || qd.adapter, t)(t).then(function(e) {
		tp(t), t.response = e;
		try {
			e.data = Jd.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = sd.from(e.headers), e;
	}, function(e) {
		if (!Yd(e) && (tp(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Jd.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = sd.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var rp = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	rp[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var ip = {};
rp.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + zf + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new O(r(i, " has been removed" + (t ? " in " + t : "")), O.ERR_DEPRECATED);
		return t && !ip[i] && (ip[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, rp.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function ap(e, t, n) {
	if (typeof e != "object" || !e) throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new O("option " + a + " must be " + n, O.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new O("Unknown option " + a, O.ERR_BAD_OPTION);
	}
}
var op = {
	assertOptions: ap,
	validators: rp
}, sp = op.validators, cp = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Od(),
			response: new Od()
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
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = vf(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && op.assertOptions(n, {
			silentJSONParsing: sp.transitional(sp.boolean),
			forcedJSONParsing: sp.transitional(sp.boolean),
			clarifyTimeoutError: sp.transitional(sp.boolean),
			legacyInterceptorReqResOrdering: sp.transitional(sp.boolean),
			advertiseZstdAcceptEncoding: sp.transitional(sp.boolean),
			validateStatusUndefinedResolves: sp.transitional(sp.boolean)
		}, !1), r != null && (D.isFunction(r) ? t.paramsSerializer = { serialize: r } : op.assertOptions(r, {
			encode: sp.function,
			serialize: sp.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), op.assertOptions(t, {
			baseUrl: sp.spelling("baseURL"),
			withXsrfToken: sp.spelling("withXSRFToken")
		}, !0), t.method = (D.getSafeProp(t, "method") || D.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && D.merge(i.common, i[t.method]);
		i && D.forEach(Wd.concat("common"), (e) => {
			delete i[e];
		}), t.headers = sd.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || kd;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [np.bind(this), void 0];
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
					D.isThenable(n) && (l = Promise.resolve(n).then(() => np.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = np.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = vf(this.defaults, e), Cd(hf(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
D.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	cp.prototype[e] = function(t, n) {
		return this.request(vf(n || {}, {
			method: e,
			url: t,
			data: n && D.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), D.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(vf(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	cp.prototype[e] = t(), e !== "query" && (cp.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var lp = class e {
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
			n.reason || (n.reason = new Xd(e, r, i), t(n.reason));
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
function up(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function dp(e) {
	return D.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var fp = {
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
Object.entries(fp).forEach(([e, t]) => {
	fp[t] === void 0 && (fp[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function pp(e) {
	let t = new cp(e), n = yl(cp.prototype.request, t);
	return D.extend(n, cp.prototype, t, { allOwnKeys: !0 }), D.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return pp(vf(e, t));
	}, n;
}
var k = pp(qd);
k.Axios = cp, k.CanceledError = Xd, k.CancelToken = lp, k.isCancel = Yd, k.VERSION = zf, k.toFormData = vd, k.AxiosError = O, k.Cancel = k.CanceledError, k.all = function(e) {
	return Promise.all(e);
}, k.spread = up, k.isAxiosError = dp, k.mergeConfig = vf, k.AxiosHeaders = sd, k.formToJSON = (e) => Ud(D.isHTMLForm(e) ? new FormData(e) : e), k.getAdapter = ep.getAdapter, k.HttpStatusCode = fp, k.default = k;
//#endregion
//#region node_modules/audako-core/dist/mjs/services/base-http.service.js
var mp = function(e, t, n, r) {
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
}, hp = class {
	constructor(e, t) {
		this.httpConfig = e, this.accessToken = t;
	}
	getAuthorizationHeader() {
		return mp(this, void 0, void 0, function* () {
			return { Authorization: `Bearer ${yield vo(this.accessToken)}` };
		});
	}
	getAccessToken() {
		return vo(this.accessToken);
	}
	getStructureUrl() {
		return mp(this, void 0, void 0, function* () {
			let e = yield vo(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Structure}`;
		});
	}
	static requestHttpConfig(e) {
		return k.get(`${e}/assets/conf/application.config`).then((e) => e.data);
	}
	static isApiReachable(e) {
		return k.get(`${e}/api/structure/about/version`).then((e) => e.status === 200 || e.status === 401).catch((e) => e?.response?.status === 401);
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
}, _p = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	getEntityById(e, t) {
		return gp(this, void 0, void 0, function* () {
			return this.getPartialEntityById(e, t, null);
		});
	}
	getPartialEntityById(e, t, n) {
		return gp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(e)}/${t}`;
			n && (r += `?$projection=${JSON.stringify(n)}`);
			let i = yield this.getAuthorizationHeader();
			return (yield k.get(r, { headers: i })).data;
		});
	}
	queryConfiguration(e, t, n, r) {
		return gp(this, void 0, void 0, function* () {
			let i = `${yield this._createBaseUrlByType(e)}/query`, a = {
				$filter: JSON.stringify(t),
				$paging: n ? JSON.stringify(n) : null,
				$projection: r ? JSON.stringify(r) : null
			}, o = yield this.getAuthorizationHeader(), s = yield k.post(i, a, { headers: o });
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
		return gp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(r.ProcessImage)}/${e}/file/image`, i = yield this.getAuthorizationHeader(), a = new Blob([t], { type: "image/svg+xml" }), o = new FormData();
			o.append("file", a, "process-image.svg"), yield k.post(n, o, { headers: i });
		});
	}
	addEntity(e, t) {
		return gp(this, void 0, void 0, function* () {
			let n = yield this._createBaseUrlByType(e), r = yield this.getAuthorizationHeader();
			return k.post(n, t, { headers: r }).then((e) => e.data);
		});
	}
	updateEntity(e, t) {
		return gp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(e)}/${t.Id}`;
			delete t.CreatedBy, delete t.CreatedOn;
			let r = yield this.getAuthorizationHeader();
			return k.put(n, t, { headers: r }).then((e) => e.data);
		});
	}
	deleteEntity(e, t) {
		return gp(this, void 0, void 0, function* () {
			let n = `${yield this._createBaseUrlByType(e)}/${t}`, r = yield this.getAuthorizationHeader();
			return k.delete(n, { headers: r }).then();
		});
	}
	copyTo(e, t, n) {
		return gp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/copy/${e}/to/${t}`, i = yield this.getAuthorizationHeader();
			return k.get(r, { headers: i }).then((e) => e.data);
		});
	}
	copyMultipleTo(e, t, n) {
		return gp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/copy/multiple/${t}`, i = yield this.getAuthorizationHeader();
			return k.put(r, e, {
				responseType: "text",
				headers: i
			});
		});
	}
	moveTo(e, t, n) {
		return gp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/move/${e}/to/${t}`, i = yield this.getAuthorizationHeader();
			return k.get(r, { headers: i }).then((e) => e.data);
		});
	}
	moveMultipleTo(e, t, n) {
		return gp(this, void 0, void 0, function* () {
			let r = `${yield this._createBaseUrlByType(n)}/move/multiple/${t}`, i = yield this.getAuthorizationHeader();
			return k.put(r, e, {
				responseType: "text",
				headers: i
			});
		});
	}
	_createBaseUrlByType(e) {
		return gp(this, void 0, void 0, function* () {
			return `${yield this.getStructureUrl()}${a[e]}`;
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
}, yp = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	getTenantViewById(e) {
		return vp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/${e}/view`, n = yield this.getAuthorizationHeader();
			return (yield k.get(t, { headers: n })).data;
		});
	}
	getTenantViewForEntityId(e) {
		return vp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, n = yield this.getAuthorizationHeader();
			return (yield k.get(t, { headers: n })).data;
		});
	}
	getTopTenants() {
		return vp(this, void 0, void 0, function* () {
			let e = `${yield this.getStructureUrl()}/tenant/top`, t = yield this.getAuthorizationHeader();
			return (yield k.get(e, { headers: t })).data;
		});
	}
	getNextTenants(e) {
		return vp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/${e}/next`, n = yield this.getAuthorizationHeader();
			return (yield k.get(t, { headers: n })).data;
		});
	}
	filterTenantsByName(e) {
		return vp(this, void 0, void 0, function* () {
			let t = `${yield this.getStructureUrl()}/tenant/filter/${e}`, n = yield this.getAuthorizationHeader();
			return (yield k.get(t, { headers: n })).data;
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
}, xp = class {
	constructor(e) {
		this.httpService = e, this._nameCache = {};
	}
	resolveEntityPath(e, t, n = !1, r, i = " / ") {
		return bp(this, void 0, void 0, function* () {
			let a = yield this.httpService.getPartialEntityById(e, t, {
				Name: 1,
				Path: 1
			}), o = yield this.resolvePathName(a.Path.splice(r ? a.Path.length - r : 0, a.Path.length), i);
			return n && (o = o + i + a.Name.Value), o;
		});
	}
	resolvePathName(e, t = " / ") {
		return bp(this, void 0, void 0, function* () {
			return e.length === 0 ? "" : Oa(Va(e.map((e) => this.resolveName(r.Group, e))).pipe(Aa((e) => e.join(t))));
		});
	}
	resolveName(e, t) {
		return bp(this, void 0, void 0, function* () {
			return this._nameCache[t] || (this._nameCache[t] = wa(this.httpService.getPartialEntityById(e, t, { Name: 1 })).pipe(Aa((e) => e.Name.Value), lo(1), $a(() => Ta(t)))), Oa(this._nameCache[t]);
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
}, Cp = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	getUserProfile() {
		return Sp(this, void 0, void 0, function* () {
			try {
				let e = yield this.getAuthorizationHeader(), t = yield k.get(`${yield this.getStructureUrl()}/userprofile`, { headers: e });
				if (t.status == 200) return t.data;
			} catch (e) {
				throw Error("Failed to request user profile with error: " + e?.message);
			}
		});
	}
	updateUserProfileSettings(e) {
		return Sp(this, void 0, void 0, function* () {
			try {
				let t = yield this.getAuthorizationHeader();
				yield k.put(`${yield this.getStructureUrl()}/userprofile`, e, { headers: t });
			} catch (e) {
				throw Error("Failed to update user profile with error: " + e?.message);
			}
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
}, Tp = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	sendDatSrcConfiguration(e) {
		return wp(this, void 0, void 0, function* () {
			let t = `${this._getDriverUrl()}/command/source/${e}/configure`, n = yield this.getAuthorizationHeader();
			return (yield k.get(t, { headers: n })).data;
		});
	}
	_getDriverUrl() {
		return wp(this, void 0, void 0, function* () {
			let e = yield vo(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Driver}`;
		});
	}
}, Ep = function(e, t, n, r) {
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
}, Dp = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	browseConnection(e, t) {
		return Ep(this, void 0, void 0, function* () {
			let n = `${yield this._getDriverUrl()}/command/conn/${e}/browse`, r = yield this.getAuthorizationHeader();
			return (yield k.post(n, { Path: t }, { headers: r })).data;
		});
	}
	_getDriverUrl() {
		return Ep(this, void 0, void 0, function* () {
			let e = yield vo(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Driver}`;
		});
	}
}, Op = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = n;
	}
}, kp = class extends Error {
	constructor(e = "A timeout occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, Ap = class extends Error {
	constructor(e = "An abort occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, jp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = n;
	}
}, Mp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = n;
	}
}, Np = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = n;
	}
}, Pp = class extends Error {
	constructor(e) {
		let t = new.target.prototype;
		super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
	}
}, Fp = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.innerErrors = t, this.__proto__ = n;
	}
}, Ip = class {
	constructor(e, t, n) {
		this.statusCode = e, this.statusText = t, this.content = n;
	}
}, Lp = class {
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
}, A;
(function(e) {
	e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
})(A ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Loggers.js
var Rp = class {
	constructor() {}
	log(e, t) {}
};
Rp.instance = new Rp();
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Utils.js
var zp = "6.0.25", Bp = class {
	static isRequired(e, t) {
		if (e == null) throw Error(`The '${t}' argument is required.`);
	}
	static isNotEmpty(e, t) {
		if (!e || e.match(/^\s*$/)) throw Error(`The '${t}' argument should not be empty.`);
	}
	static isIn(e, t, n) {
		if (!(e in t)) throw Error(`Unknown ${n} value: ${e}.`);
	}
}, Vp = class {
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
function Hp(e, t) {
	let n = "";
	return Wp(e) ? (n = `Binary data of length ${e.byteLength}`, t && (n += `. Content: '${Up(e)}'`)) : typeof e == "string" && (n = `String data of length ${e.length}`, t && (n += `. Content: '${e}'`)), n;
}
function Up(e) {
	let t = new Uint8Array(e), n = "";
	return t.forEach((e) => {
		n += `0x${e < 16 ? "0" : ""}${e.toString(16)} `;
	}), n.substr(0, n.length - 1);
}
function Wp(e) {
	return e && typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || e.constructor && e.constructor.name === "ArrayBuffer");
}
async function Gp(e, t, n, r, i, a, o) {
	let s = {};
	if (i) {
		let e = await i();
		e && (s = { Authorization: `Bearer ${e}` });
	}
	let [c, l] = Yp();
	s[c] = l, e.log(A.Trace, `(${t} transport) sending data. ${Hp(a, o.logMessageContent)}.`);
	let u = Wp(a) ? "arraybuffer" : "text", d = await n.post(r, {
		content: a,
		headers: {
			...s,
			...o.headers
		},
		responseType: u,
		timeout: o.timeout,
		withCredentials: o.withCredentials
	});
	e.log(A.Trace, `(${t} transport) request complete. Response status: ${d.statusCode}.`);
}
function Kp(e) {
	return e === void 0 ? new Jp(A.Information) : e === null ? Rp.instance : e.log === void 0 ? new Jp(e) : e;
}
var qp = class {
	constructor(e, t) {
		this._subject = e, this._observer = t;
	}
	dispose() {
		let e = this._subject.observers.indexOf(this._observer);
		e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((e) => {});
	}
}, Jp = class {
	constructor(e) {
		this._minLevel = e, this.out = console;
	}
	log(e, t) {
		if (e >= this._minLevel) {
			let n = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${A[e]}: ${t}`;
			switch (e) {
				case A.Critical:
				case A.Error:
					this.out.error(n);
					break;
				case A.Warning:
					this.out.warn(n);
					break;
				case A.Information:
					this.out.info(n);
					break;
				default: this.out.log(n);
			}
		}
	}
};
function Yp() {
	let e = "X-SignalR-User-Agent";
	return Vp.isNode && (e = "User-Agent"), [e, Xp(zp, Zp(), $p(), Qp())];
}
function Xp(e, t, n, r) {
	let i = "Microsoft SignalR/", a = e.split(".");
	return i += `${a[0]}.${a[1]}`, i += ` (${e}; `, i += t && t !== "" ? `${t}; ` : "Unknown OS; ", i += `${n}`, i += r ? `; ${r}` : "; Unknown Runtime Version", i += ")", i;
}
/*#__PURE__*/ function Zp() {
	if (Vp.isNode) switch (process.platform) {
		case "win32": return "Windows NT";
		case "darwin": return "macOS";
		case "linux": return "Linux";
		default: return process.platform;
	}
	else return "";
}
/*#__PURE__*/ function Qp() {
	if (Vp.isNode) return process.versions.node;
}
function $p() {
	return Vp.isNode ? "NodeJS" : "Browser";
}
function em(e) {
	return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function tm() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw Error("could not find global");
}
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js
var nm = class extends Lp {
	constructor(e) {
		if (super(), this._logger = e, typeof fetch > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._jar = new (e("tough-cookie")).CookieJar(), this._fetchType = e("node-fetch"), this._fetchType = e("fetch-cookie")(this._fetchType, this._jar);
		} else this._fetchType = fetch.bind(tm());
		if (typeof AbortController > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._abortControllerType = e("abort-controller");
		} else this._abortControllerType = AbortController;
	}
	async send(e) {
		if (e.abortSignal && e.abortSignal.aborted) throw new Ap();
		if (!e.method) throw Error("No method defined.");
		if (!e.url) throw Error("No url defined.");
		let t = new this._abortControllerType(), n;
		e.abortSignal && (e.abortSignal.onabort = () => {
			t.abort(), n = new Ap();
		});
		let r = null;
		if (e.timeout) {
			let i = e.timeout;
			r = setTimeout(() => {
				t.abort(), this._logger.log(A.Warning, "Timeout from HTTP request."), n = new kp();
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
			throw n || (this._logger.log(A.Warning, `Error from HTTP request. ${e}.`), e);
		} finally {
			r && clearTimeout(r), e.abortSignal && (e.abortSignal.onabort = null);
		}
		if (!i.ok) throw new Op(await rm(i, "text") || i.statusText, i.status);
		let a = await rm(i, e.responseType);
		return new Ip(i.status, i.statusText, a);
	}
	getCookieString(e) {
		let t = "";
		return Vp.isNode && this._jar && this._jar.getCookies(e, (e, n) => t = n.join("; ")), t;
	}
};
function rm(e, t) {
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
var im = class extends Lp {
	constructor(e) {
		super(), this._logger = e;
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Ap()) : e.method ? e.url ? new Promise((t, n) => {
			let r = new XMLHttpRequest();
			r.open(e.method, e.url, !0), r.withCredentials = e.withCredentials === void 0 || e.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
			let i = e.headers;
			i && Object.keys(i).forEach((e) => {
				r.setRequestHeader(e, i[e]);
			}), e.responseType && (r.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
				r.abort(), n(new Ap());
			}), e.timeout && (r.timeout = e.timeout), r.onload = () => {
				e.abortSignal && (e.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? t(new Ip(r.status, r.statusText, r.response || r.responseText)) : n(new Op(r.response || r.responseText || r.statusText, r.status));
			}, r.onerror = () => {
				this._logger.log(A.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), n(new Op(r.statusText, r.status));
			}, r.ontimeout = () => {
				this._logger.log(A.Warning, "Timeout from HTTP request."), n(new kp());
			}, r.send(e.content || "");
		}) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
}, am = class extends Lp {
	constructor(e) {
		if (super(), typeof fetch < "u" || Vp.isNode) this._httpClient = new nm(e);
		else if (typeof XMLHttpRequest < "u") this._httpClient = new im(e);
		else throw Error("No usable HttpClient found.");
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Ap()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
	getCookieString(e) {
		return this._httpClient.getCookieString(e);
	}
}, om = class e {
	static write(t) {
		return `${t}${e.RecordSeparator}`;
	}
	static parse(t) {
		if (t[t.length - 1] !== e.RecordSeparator) throw Error("Message is incomplete.");
		let n = t.split(e.RecordSeparator);
		return n.pop(), n;
	}
};
om.RecordSeparatorCode = 30, om.RecordSeparator = String.fromCharCode(om.RecordSeparatorCode);
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js
var sm = class {
	writeHandshakeRequest(e) {
		return om.write(JSON.stringify(e));
	}
	parseHandshakeResponse(e) {
		let t, n;
		if (Wp(e)) {
			let r = new Uint8Array(e), i = r.indexOf(om.RecordSeparatorCode);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, a))), n = r.byteLength > a ? r.slice(a).buffer : null;
		} else {
			let r = e, i = r.indexOf(om.RecordSeparator);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = r.substring(0, a), n = r.length > a ? r.substring(a) : null;
		}
		let r = om.parse(t), i = JSON.parse(r[0]);
		if (i.type) throw Error("Expected a handshake response from the server.");
		return [n, i];
	}
}, j;
(function(e) {
	e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
})(j ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Subject.js
var cm = class {
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
		return this.observers.push(e), new qp(this, e);
	}
}, lm = 3e4, um = 15e3, dm;
(function(e) {
	e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
})(dm ||= {});
var fm = class e {
	constructor(e, t, n, r) {
		this._nextKeepAlive = 0, this._freezeEventListener = () => {
			this._logger.log(A.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
		}, Bp.isRequired(e, "connection"), Bp.isRequired(t, "logger"), Bp.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = lm, this.keepAliveIntervalInMilliseconds = um, this._logger = t, this._protocol = n, this.connection = e, this._reconnectPolicy = r, this._handshakeProtocol = new sm(), this.connection.onreceive = (e) => this._processIncomingData(e), this.connection.onclose = (e) => this._connectionClosed(e), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = dm.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: j.Ping });
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
		if (this._connectionState !== dm.Disconnected && this._connectionState !== dm.Reconnecting) throw Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
		if (!e) throw Error("The HubConnection url must be a valid url.");
		this.connection.baseUrl = e;
	}
	start() {
		return this._startPromise = this._startWithStateTransitions(), this._startPromise;
	}
	async _startWithStateTransitions() {
		if (this._connectionState !== dm.Disconnected) return Promise.reject(/* @__PURE__ */ Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
		this._connectionState = dm.Connecting, this._logger.log(A.Debug, "Starting HubConnection.");
		try {
			await this._startInternal(), Vp.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = dm.Connected, this._connectionStarted = !0, this._logger.log(A.Debug, "HubConnection connected successfully.");
		} catch (e) {
			return this._connectionState = dm.Disconnected, this._logger.log(A.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
			if (this._logger.log(A.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)), this._logger.log(A.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError) throw this._stopDuringStartError;
		} catch (e) {
			throw this._logger.log(A.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(e), e;
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
		return this._connectionState === dm.Disconnected ? (this._logger.log(A.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === dm.Disconnecting ? (this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = dm.Disconnecting, this._logger.log(A.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(A.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || /* @__PURE__ */ Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
	}
	stream(e, ...t) {
		let [n, r] = this._replaceStreamingParams(t), i = this._createStreamInvocation(e, t, r), a, o = new cm();
		return o.cancelCallback = () => {
			let e = this._createCancelInvocation(i.invocationId);
			return delete this._callbacks[i.invocationId], a.then(() => this._sendWithProtocol(e));
		}, this._callbacks[i.invocationId] = (e, t) => {
			if (t) {
				o.error(t);
				return;
			}
			e && (e.type === j.Completion ? e.error ? o.error(Error(e.error)) : o.complete() : o.next(e.item));
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
				n && (n.type === j.Completion ? n.error ? t(Error(n.error)) : e(n.result) : t(/* @__PURE__ */ Error(`Unexpected message type: ${n.type}`)));
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
				case j.Invocation:
					this._invokeClientMethod(e);
					break;
				case j.StreamItem:
				case j.Completion: {
					let t = this._callbacks[e.invocationId];
					if (t) {
						e.type === j.Completion && delete this._callbacks[e.invocationId];
						try {
							t(e);
						} catch (e) {
							this._logger.log(A.Error, `Stream callback threw error: ${em(e)}`);
						}
					}
					break;
				}
				case j.Ping: break;
				case j.Close: {
					this._logger.log(A.Information, "Close message received from server.");
					let t = e.error ? /* @__PURE__ */ Error("Server returned an error on close: " + e.error) : void 0;
					e.allowReconnect === !0 ? this.connection.stop(t) : this._stopPromise = this._stopInternal(t);
					break;
				}
				default: this._logger.log(A.Warning, `Invalid message type: ${e.type}.`);
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
			this._logger.log(A.Error, t);
			let n = Error(t);
			throw this._handshakeRejecter(n), n;
		}
		if (t.error) {
			let e = "Server returned handshake error: " + t.error;
			this._logger.log(A.Error, e);
			let n = Error(e);
			throw this._handshakeRejecter(n), n;
		}
		return this._logger.log(A.Debug, "Server handshake complete."), this._handshakeResolver(), n;
	}
	_resetKeepAliveInterval() {
		this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
	}
	_resetTimeoutPeriod() {
		if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
			let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
			e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
				if (this._connectionState === dm.Connected) try {
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
				this._logger.log(A.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${t}'.`);
			}
			if (e.invocationId) {
				let e = "Server requested a response, which is not supported in this version of the client.";
				this._logger.log(A.Error, e), this._stopPromise = this._stopInternal(/* @__PURE__ */ Error(e));
			}
		} else this._logger.log(A.Warning, `No client method with the name '${e.target}' found.`);
	}
	_connectionClosed(e) {
		this._logger.log(A.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || /* @__PURE__ */ Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || /* @__PURE__ */ Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === dm.Disconnecting ? this._completeClose(e) : this._connectionState === dm.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === dm.Connected && this._completeClose(e);
	}
	_completeClose(e) {
		if (this._connectionStarted) {
			this._connectionState = dm.Disconnected, this._connectionStarted = !1, Vp.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
			try {
				this._closedCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(A.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
			}
		}
	}
	async _reconnect(e) {
		let t = Date.now(), n = 0, r = e === void 0 ? /* @__PURE__ */ Error("Attempting to reconnect due to a unknown error.") : e, i = this._getNextRetryDelay(n++, 0, r);
		if (i === null) {
			this._logger.log(A.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
			return;
		}
		if (this._connectionState = dm.Reconnecting, e ? this._logger.log(A.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(A.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
			try {
				this._reconnectingCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(A.Error, `An onreconnecting callback called with error '${e}' threw error '${t}'.`);
			}
			if (this._connectionState !== dm.Reconnecting) {
				this._logger.log(A.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
				return;
			}
		}
		for (; i !== null;) {
			if (this._logger.log(A.Information, `Reconnect attempt number ${n} will start in ${i} ms.`), await new Promise((e) => {
				this._reconnectDelayHandle = setTimeout(e, i);
			}), this._reconnectDelayHandle = void 0, this._connectionState !== dm.Reconnecting) {
				this._logger.log(A.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
				return;
			}
			try {
				if (await this._startInternal(), this._connectionState = dm.Connected, this._logger.log(A.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0) try {
					this._reconnectedCallbacks.forEach((e) => e.apply(this, [this.connection.connectionId]));
				} catch (e) {
					this._logger.log(A.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
				}
				return;
			} catch (e) {
				if (this._logger.log(A.Information, `Reconnect attempt failed because of error '${e}'.`), this._connectionState !== dm.Reconnecting) {
					this._logger.log(A.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === dm.Disconnecting && this._completeClose();
					return;
				}
				r = e instanceof Error ? e : Error(e.toString()), i = this._getNextRetryDelay(n++, Date.now() - t, r);
			}
		}
		this._logger.log(A.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${n} failed attempts. Connection disconnecting.`), this._completeClose();
	}
	_getNextRetryDelay(e, t, n) {
		try {
			return this._reconnectPolicy.nextRetryDelayInMilliseconds({
				elapsedMilliseconds: t,
				previousRetryCount: e,
				retryReason: n
			});
		} catch (n) {
			return this._logger.log(A.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${n}'.`), null;
		}
	}
	_cancelCallbacksWithError(e) {
		let t = this._callbacks;
		this._callbacks = {}, Object.keys(t).forEach((n) => {
			let r = t[n];
			try {
				r(null, e);
			} catch (t) {
				this._logger.log(A.Error, `Stream 'error' callback called with '${e}' threw error: ${em(t)}`);
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
			type: j.Invocation
		} : {
			arguments: t,
			streamIds: r,
			target: e,
			type: j.Invocation
		};
		{
			let n = this._invocationId;
			return this._invocationId++, r.length === 0 ? {
				arguments: t,
				invocationId: n.toString(),
				target: e,
				type: j.Invocation
			} : {
				arguments: t,
				invocationId: n.toString(),
				streamIds: r,
				target: e,
				type: j.Invocation
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
			type: j.StreamInvocation
		} : {
			arguments: t,
			invocationId: r.toString(),
			streamIds: n,
			target: e,
			type: j.StreamInvocation
		};
	}
	_createCancelInvocation(e) {
		return {
			invocationId: e,
			type: j.CancelInvocation
		};
	}
	_createStreamItemMessage(e, t) {
		return {
			invocationId: e,
			item: t,
			type: j.StreamItem
		};
	}
	_createCompletionMessage(e, t, n) {
		return t ? {
			error: t,
			invocationId: e,
			type: j.Completion
		} : {
			invocationId: e,
			result: n,
			type: j.Completion
		};
	}
}, pm = [
	0,
	2e3,
	1e4,
	3e4,
	null
], mm = class {
	constructor(e) {
		this._retryDelays = e === void 0 ? pm : [...e, null];
	}
	nextRetryDelayInMilliseconds(e) {
		return this._retryDelays[e.previousRetryCount];
	}
}, hm = class {};
hm.Authorization = "Authorization", hm.Cookie = "Cookie";
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/ITransport.js
var gm;
(function(e) {
	e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
})(gm ||= {});
var _m;
(function(e) {
	e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
})(_m ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/AbortController.js
var vm = class {
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
}, ym = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._pollAbort = new vm(), this._options = r, this._running = !1, this.onreceive = null, this.onclose = null;
	}
	get pollAborted() {
		return this._pollAbort.aborted;
	}
	async connect(e, t) {
		if (Bp.isRequired(e, "url"), Bp.isRequired(t, "transferFormat"), Bp.isIn(t, _m, "transferFormat"), this._url = e, this._logger.log(A.Trace, "(LongPolling transport) Connecting."), t === _m.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string") throw Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
		let [n, r] = Yp(), i = {
			[n]: r,
			...this._options.headers
		}, a = {
			abortSignal: this._pollAbort.signal,
			headers: i,
			timeout: 1e5,
			withCredentials: this._options.withCredentials
		};
		t === _m.Binary && (a.responseType = "arraybuffer");
		let o = await this._getAccessToken();
		this._updateHeaderToken(a, o);
		let s = `${e}&_=${Date.now()}`;
		this._logger.log(A.Trace, `(LongPolling transport) polling: ${s}.`);
		let c = await this._httpClient.get(s, a);
		c.statusCode === 200 ? this._running = !0 : (this._logger.log(A.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new Op(c.statusText || "", c.statusCode), this._running = !1), this._receiving = this._poll(this._url, a);
	}
	async _getAccessToken() {
		return this._accessTokenFactory ? await this._accessTokenFactory() : null;
	}
	_updateHeaderToken(e, t) {
		if (e.headers ||= {}, t) {
			e.headers[hm.Authorization] = `Bearer ${t}`;
			return;
		}
		e.headers[hm.Authorization] && delete e.headers[hm.Authorization];
	}
	async _poll(e, t) {
		try {
			for (; this._running;) {
				let n = await this._getAccessToken();
				this._updateHeaderToken(t, n);
				try {
					let n = `${e}&_=${Date.now()}`;
					this._logger.log(A.Trace, `(LongPolling transport) polling: ${n}.`);
					let r = await this._httpClient.get(n, t);
					r.statusCode === 204 ? (this._logger.log(A.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : r.statusCode === 200 ? r.content ? (this._logger.log(A.Trace, `(LongPolling transport) data received. ${Hp(r.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(A.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._logger.log(A.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new Op(r.statusText || "", r.statusCode), this._running = !1);
				} catch (e) {
					this._running ? e instanceof kp ? this._logger.log(A.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = e, this._running = !1) : this._logger.log(A.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
				}
			}
		} finally {
			this._logger.log(A.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
		}
	}
	async send(e) {
		return this._running ? Gp(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	async stop() {
		this._logger.log(A.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
		try {
			await this._receiving, this._logger.log(A.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
			let e = {}, [t, n] = Yp();
			e[t] = n;
			let r = {
				headers: {
					...e,
					...this._options.headers
				},
				timeout: this._options.timeout,
				withCredentials: this._options.withCredentials
			}, i = await this._getAccessToken();
			this._updateHeaderToken(r, i), await this._httpClient.delete(this._url, r), this._logger.log(A.Trace, "(LongPolling transport) DELETE request sent.");
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
}, bm = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._options = r, this.onreceive = null, this.onclose = null;
	}
	async connect(e, t) {
		if (Bp.isRequired(e, "url"), Bp.isRequired(t, "transferFormat"), Bp.isIn(t, _m, "transferFormat"), this._logger.log(A.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			let i = !1;
			if (t !== _m.Text) {
				r(/* @__PURE__ */ Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
				return;
			}
			let a;
			if (Vp.isBrowser || Vp.isWebWorker) a = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
			else {
				let t = this._httpClient.getCookieString(e), n = {};
				n.Cookie = t;
				let [r, i] = Yp();
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
						this._logger.log(A.Trace, `(SSE transport) data received. ${Hp(e.data, this._options.logMessageContent)}.`), this.onreceive(e.data);
					} catch (e) {
						this._close(e);
						return;
					}
				}, a.onerror = (e) => {
					i ? this._close() : r(/* @__PURE__ */ Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
				}, a.onopen = () => {
					this._logger.log(A.Information, `SSE connected to ${this._url}`), this._eventSource = a, i = !0, n();
				};
			} catch (e) {
				r(e);
				return;
			}
		});
	}
	async send(e) {
		return this._eventSource ? Gp(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	stop() {
		return this._close(), Promise.resolve();
	}
	_close(e) {
		this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
	}
}, xm = class {
	constructor(e, t, n, r, i, a) {
		this._logger = n, this._accessTokenFactory = t, this._logMessageContent = r, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = a;
	}
	async connect(e, t) {
		if (Bp.isRequired(e, "url"), Bp.isRequired(t, "transferFormat"), Bp.isIn(t, _m, "transferFormat"), this._logger.log(A.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			e = e.replace(/^http/, "ws");
			let i, a = this._httpClient.getCookieString(e), o = !1;
			if (Vp.isNode) {
				let t = {}, [n, r] = Yp();
				t[n] = r, a && (t[hm.Cookie] = `${a}`), i = new this._webSocketConstructor(e, void 0, { headers: {
					...t,
					...this._headers
				} });
			}
			i ||= new this._webSocketConstructor(e), t === _m.Binary && (i.binaryType = "arraybuffer"), i.onopen = (t) => {
				this._logger.log(A.Information, `WebSocket connected to ${e}.`), this._webSocket = i, o = !0, n();
			}, i.onerror = (e) => {
				let t = null;
				t = typeof ErrorEvent < "u" && e instanceof ErrorEvent ? e.error : "There was an error with the transport", this._logger.log(A.Information, `(WebSockets transport) ${t}.`);
			}, i.onmessage = (e) => {
				if (this._logger.log(A.Trace, `(WebSockets transport) data received. ${Hp(e.data, this._logMessageContent)}.`), this.onreceive) try {
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
		return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(A.Trace, `(WebSockets transport) sending data. ${Hp(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
	}
	stop() {
		return this._webSocket && this._close(void 0), Promise.resolve();
	}
	_close(e) {
		this._webSocket &&= (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), void 0), this._logger.log(A.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(/* @__PURE__ */ Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
	}
	_isCloseEvent(e) {
		return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
	}
}, Sm = 100, Cm = class {
	constructor(e, t = {}) {
		if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, Bp.isRequired(e, "url"), this._logger = Kp(t.logger), this.baseUrl = this._resolveUrl(e), t ||= {}, t.logMessageContent = t.logMessageContent !== void 0 && t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0) t.withCredentials = t.withCredentials === void 0 || t.withCredentials;
		else throw Error("withCredentials option was not a 'boolean' or 'undefined' value");
		t.timeout = t.timeout === void 0 ? 1e5 : t.timeout;
		let r = null, i = null;
		if (Vp.isNode && n !== void 0) {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			r = e("ws"), i = e("eventsource");
		}
		!Vp.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : Vp.isNode && !t.WebSocket && r && (t.WebSocket = r), !Vp.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : Vp.isNode && !t.EventSource && i !== void 0 && (t.EventSource = i), this._httpClient = t.httpClient || new am(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
	}
	async start(e) {
		if (e ||= _m.Binary, Bp.isIn(e, _m, "transferFormat"), this._logger.log(A.Debug, `Starting connection with transfer format '${_m[e]}'.`), this._connectionState !== "Disconnected") return Promise.reject(/* @__PURE__ */ Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
		if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
			let e = "Failed to start the HttpConnection before stop() was called.";
			return this._logger.log(A.Error, e), await this._stopPromise, Promise.reject(/* @__PURE__ */ Error(e));
		}
		if (this._connectionState !== "Connected") {
			let e = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
			return this._logger.log(A.Error, e), Promise.reject(/* @__PURE__ */ Error(e));
		}
		this._connectionStarted = !0;
	}
	send(e) {
		return this._connectionState === "Connected" ? (this._sendQueue ||= new Tm(this.transport), this._sendQueue.send(e)) : Promise.reject(/* @__PURE__ */ Error("Cannot send data if the connection is not in the 'Connected' State."));
	}
	async stop(e) {
		if (this._connectionState === "Disconnected") return this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
		if (this._connectionState === "Disconnecting") return this._logger.log(A.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
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
				this._logger.log(A.Error, `HttpConnection.transport.stop() threw error '${e}'.`), this._stopConnection();
			}
			this.transport = void 0;
		} else this._logger.log(A.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
	}
	async _startInternal(e) {
		let t = this.baseUrl;
		this._accessTokenFactory = this._options.accessTokenFactory;
		try {
			if (this._options.skipNegotiation) {
				if (this._options.transport === gm.WebSockets) this.transport = this._constructTransport(gm.WebSockets), await this._startTransport(t, e);
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
				} while (n.url && r < Sm);
				if (r === Sm && n.url) throw Error("Negotiate redirection limit exceeded.");
				await this._createTransport(t, this._options.transport, n, e);
			}
			this.transport instanceof ym && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(A.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
		} catch (e) {
			return this._logger.log(A.Error, "Failed to start the connection: " + e), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(e);
		}
	}
	async _getNegotiationResponse(e) {
		let t = {};
		if (this._accessTokenFactory) {
			let e = await this._accessTokenFactory();
			e && (t[hm.Authorization] = `Bearer ${e}`);
		}
		let [n, r] = Yp();
		t[n] = r;
		let i = this._resolveNegotiateUrl(e);
		this._logger.log(A.Debug, `Sending negotiation request: ${i}.`);
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
			return e instanceof Op && e.statusCode === 404 && (t += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(A.Error, t), Promise.reject(new Pp(t));
		}
	}
	_createConnectUrl(e, t) {
		return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
	}
	async _createTransport(e, t, n, r) {
		let i = this._createConnectUrl(e, n.connectionToken);
		if (this._isITransport(t)) {
			this._logger.log(A.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(i, r), this.connectionId = n.connectionId;
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
					if (this._logger.log(A.Error, `Failed to start the transport '${n.transport}': ${e}`), s = void 0, a.push(new Np(`${n.transport} failed: ${e}`, gm[n.transport])), this._connectionState !== "Connecting") {
						let e = "Failed to select transport before stop() was called.";
						return this._logger.log(A.Debug, e), Promise.reject(/* @__PURE__ */ Error(e));
					}
				}
			}
		}
		return a.length > 0 ? Promise.reject(new Fp(`Unable to connect to the server with any of the available transports. ${a.join(" ")}`, a)) : Promise.reject(/* @__PURE__ */ Error("None of the transports supported by the client are supported by the server."));
	}
	_constructTransport(e) {
		switch (e) {
			case gm.WebSockets:
				if (!this._options.WebSocket) throw Error("'WebSocket' is not supported in your environment.");
				return new xm(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
			case gm.ServerSentEvents:
				if (!this._options.EventSource) throw Error("'EventSource' is not supported in your environment.");
				return new bm(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			case gm.LongPolling: return new ym(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			default: throw Error(`Unknown transport: ${e}.`);
		}
	}
	_startTransport(e, t) {
		return this.transport.onreceive = this.onreceive, this.transport.onclose = (e) => this._stopConnection(e), this.transport.connect(e, t);
	}
	_resolveTransportOrError(e, t, n) {
		let r = gm[e.transport];
		if (r == null) return this._logger.log(A.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), /* @__PURE__ */ Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
		if (wm(t, r)) {
			if (e.transferFormats.map((e) => _m[e]).indexOf(n) >= 0) {
				if (r === gm.WebSockets && !this._options.WebSocket || r === gm.ServerSentEvents && !this._options.EventSource) return this._logger.log(A.Debug, `Skipping transport '${gm[r]}' because it is not supported in your environment.'`), new jp(`'${gm[r]}' is not supported in your environment.`, r);
				this._logger.log(A.Debug, `Selecting transport '${gm[r]}'.`);
				try {
					return this._constructTransport(r);
				} catch (e) {
					return e;
				}
			}
			return this._logger.log(A.Debug, `Skipping transport '${gm[r]}' because it does not support the requested transfer format '${_m[n]}'.`), /* @__PURE__ */ Error(`'${gm[r]}' does not support ${_m[n]}.`);
		}
		return this._logger.log(A.Debug, `Skipping transport '${gm[r]}' because it was disabled by the client.`), new Mp(`'${gm[r]}' is disabled by the client.`, r);
	}
	_isITransport(e) {
		return e && typeof e == "object" && "connect" in e;
	}
	_stopConnection(e) {
		if (this._logger.log(A.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
			this._logger.log(A.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
			return;
		}
		if (this._connectionState === "Connecting") throw this._logger.log(A.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
		if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(A.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(A.Information, "Connection disconnected."), this._sendQueue &&= (this._sendQueue.stop().catch((e) => {
			this._logger.log(A.Error, `TransportSendQueue.stop() threw error '${e}'.`);
		}), void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
			this._connectionStarted = !1;
			try {
				this.onclose && this.onclose(e);
			} catch (t) {
				this._logger.log(A.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
			}
		}
	}
	_resolveUrl(e) {
		if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0) return e;
		if (!Vp.isBrowser) throw Error(`Cannot resolve '${e}'.`);
		let t = window.document.createElement("a");
		return t.href = e, this._logger.log(A.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
	}
	_resolveNegotiateUrl(e) {
		let t = e.indexOf("?"), n = e.substring(0, t === -1 ? e.length : t);
		return n[n.length - 1] !== "/" && (n += "/"), n += "negotiate", n += t === -1 ? "" : e.substring(t), n.indexOf("negotiateVersion") === -1 && (n += t === -1 ? "?" : "&", n += "negotiateVersion=" + this._negotiateVersion), n;
	}
};
function wm(e, t) {
	return !e || (t & e) !== 0;
}
var Tm = class e {
	constructor(e) {
		this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Em(), this._transportResult = new Em(), this._sendLoopPromise = this._sendLoop();
	}
	send(e) {
		return this._bufferData(e), this._transportResult ||= new Em(), this._transportResult.promise;
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
			this._sendBufferedData = new Em();
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
}, Em = class {
	constructor() {
		this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
	}
	resolve() {
		this._resolver();
	}
	reject(e) {
		this._rejecter(e);
	}
}, Dm = "json", Om = class {
	constructor() {
		this.name = Dm, this.version = 1, this.transferFormat = _m.Text;
	}
	parseMessages(e, t) {
		if (typeof e != "string") throw Error("Invalid input for JSON hub protocol. Expected a string.");
		if (!e) return [];
		t === null && (t = Rp.instance);
		let n = om.parse(e), r = [];
		for (let e of n) {
			let n = JSON.parse(e);
			if (typeof n.type != "number") throw Error("Invalid payload.");
			switch (n.type) {
				case j.Invocation:
					this._isInvocationMessage(n);
					break;
				case j.StreamItem:
					this._isStreamItemMessage(n);
					break;
				case j.Completion:
					this._isCompletionMessage(n);
					break;
				case j.Ping: break;
				case j.Close: break;
				default:
					t.log(A.Information, "Unknown message type '" + n.type + "' ignored.");
					continue;
			}
			r.push(n);
		}
		return r;
	}
	writeMessage(e) {
		return om.write(JSON.stringify(e));
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
}, km = {
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
function Am(e) {
	let t = km[e.toLowerCase()];
	if (t !== void 0) return t;
	throw Error(`Unknown log level: ${e}`);
}
var jm = class {
	configureLogging(e) {
		if (Bp.isRequired(e, "logging"), Mm(e)) this.logger = e;
		else if (typeof e == "string") {
			let t = Am(e);
			this.logger = new Jp(t);
		} else this.logger = new Jp(e);
		return this;
	}
	withUrl(e, t) {
		return Bp.isRequired(e, "url"), Bp.isNotEmpty(e, "url"), this.url = e, this.httpConnectionOptions = typeof t == "object" ? {
			...this.httpConnectionOptions,
			...t
		} : {
			...this.httpConnectionOptions,
			transport: t
		}, this;
	}
	withHubProtocol(e) {
		return Bp.isRequired(e, "protocol"), this.protocol = e, this;
	}
	withAutomaticReconnect(e) {
		if (this.reconnectPolicy) throw Error("A reconnectPolicy has already been set.");
		return this.reconnectPolicy = e ? Array.isArray(e) ? new mm(e) : e : new mm(), this;
	}
	build() {
		let e = this.httpConnectionOptions || {};
		if (e.logger === void 0 && (e.logger = this.logger), !this.url) throw Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
		let t = new Cm(this.url, e);
		return fm.create(t, this.logger || Rp.instance, this.protocol || new Om(), this.reconnectPolicy);
	}
};
function Mm(e) {
	return e.log !== void 0;
}
//#endregion
//#region node_modules/audako-core/dist/mjs/services/live-value.service.js
var Nm = function(e, t, n, r) {
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
}, Pm;
(function(e) {
	e.Running = "Running", e.Success = "Success", e.Failed = "Failed";
})(Pm ||= {});
var Fm;
(function(e) {
	e.ChangeModeAsync = "ChangeModeAsync", e.ChangeIntervalAsync = "ChangeIntervalAsync", e.SubscribeMany = "SubscribeMany";
})(Fm ||= {});
var Im;
(function(e) {
	e.Send = "Send";
})(Im ||= {});
var Lm;
(function(e) {
	e.S = "S", e.SO = "SO", e.T = "T", e.TC = "TC", e.OP = "OP";
})(Lm ||= {});
var Rm = class {
	constructor(e, t) {
		this.httpConfig = e, this.accessToken = t, this._unsub = new Pi(), this._connectionEstablished = new Ii(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Pi(), this._subscribeRequested = new Pi(), this._handleSubscriptionQueue();
	}
	connect() {
		return Nm(this, void 0, void 0, function* () {
			let e = yield vo(this.httpConfig);
			return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
		});
	}
	connectWithUrl(e) {
		return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Oa(this._connectionEstablished.pipe(Xa((e) => e), no(null)));
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
		let t = e.map((e) => `${Lm.OP}:${e}`);
		return this.subscribeLiveValuePackages(t);
	}
	getOperationStatus(e) {
		let t = `${Lm.OP}:${e}`;
		return this.subscribeToOperations([e]).pipe(Aa((t) => t.find((t) => t.id === e)), Xa((e) => e != null), mo((e) => e.status !== Pm.Success && e.status !== Pm.Failed, !0), oo(() => this._unsubscribeIds([t])));
	}
	subscribeLiveValuePackages(e) {
		let t = e.filter((e) => !this._subscribedIds.includes(e));
		this.hubConnection && t.length > 0 && this._enqueueIdsToSubscribe(t);
		let n = this._getCachedValuePackages(e), r = this._livePackageObserver.pipe(Aa((t) => t.filter((t) => e.includes(t.identifier))), Xa((e) => e.length > 0));
		return n.length > 0 ? Ja(Ta(n), r) : r;
	}
	_unsubscribeIds(e) {
		this._subscribedIds = this._subscribedIds.filter((t) => !e.includes(t)), e.forEach((e) => delete this._valueCache[e]);
	}
	_enqueueIdsToSubscribe(e) {
		let t = e.filter((e) => !this._queuedIds.includes(e));
		t.length > 0 && (this._queuedIds.push(...t), this._subscribeRequested.next(null));
	}
	_handleSubscriptionQueue() {
		this._subscribeRequested.pipe(po(this._unsub), Qa(50)).subscribe(() => {
			let e = this._queuedIds;
			this._queuedIds = [], this._sendMessage(Fm.SubscribeMany, e), this._subscribedIds.push(...e);
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
			this._sendMessage(Fm.ChangeModeAsync, !0), this._sendMessage(Fm.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (e) => this._handleHubMessage(e)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
		}).catch((e) => {
			this.hubConnection = null, this._connectionEstablished.error(e), console.log("Failed to start connection: " + e.message);
		}), this.hubConnection.onclose(() => {
			console.log("Hub connection closed"), this.hubConnection = null;
		});
	}
	_buildHubConnection(e) {
		return new jm().withUrl(e, { accessTokenFactory: () => this.getAccessToken() }).build();
	}
	getAccessToken() {
		return vo(this.accessToken);
	}
}, zm = function(e, t, n, r) {
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
}, Bm = class {
	static getSignalValues(e) {
		let t = [];
		return Object.keys(e).forEach((n) => {
			n !== "IntervalStart" && n !== "Manual" && n !== "Note" && n !== "Value" && t.push({
				id: n,
				value: e[n]
			});
		}), t;
	}
}, Vm;
(function(e) {
	e.Manual = "Manual", e.CounterReplacement = "CounterReplacement", e.CounterReadingAlignment = "CounterReadingAlignment";
})(Vm ||= {});
var Hm = class {}, Um = class {}, Wm = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	requestHistoricalValues(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader(), r = yield k.post(`${t}/value/manyflat`, e, { headers: n });
			if (r.status !== 200) throw Error(r.statusText);
			return r.data;
		});
	}
	getHistoricalValues(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return k.post(t + "/value/manyflat", e, { headers: n }).then((e) => e.data);
		});
	}
	getHistoricalValueObjects(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return k.post(t + "/value/many", e, { headers: n }).then((e) => e.data);
		});
	}
	getNearestValue(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return k.post(t + "/value/nearest", e, { headers: n }).then((e) => e.data);
		});
	}
	getNearesValue(e) {
		return zm(this, void 0, void 0, function* () {
			return this.getNearestValue(e);
		});
	}
	getNthHistoricalValue(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return k.post(t + "/value/nth", e, { headers: n }).then((e) => e.data);
		});
	}
	postManualData(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return k.post(t + "/value/manual", e, { headers: n }).then();
		});
	}
	postNoteEntries(e) {
		return zm(this, void 0, void 0, function* () {
			let t = yield this.getHistorianUrl(), n = yield this.getAuthorizationHeader();
			return k.post(t + "/value/note", e, { headers: n }).then();
		});
	}
	getCounterOffsets(e, t, n) {
		return zm(this, void 0, void 0, function* () {
			let r = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets?`;
			t && (r += `&$from=${t.toISOString()}`), n && (r += `&$till=${n.toISOString()}`);
			let i = yield this.getAuthorizationHeader();
			return k.get(r, { headers: i }).then((e) => Object.keys(e.data).map((t) => ({
				Date: t,
				Value: e.data[t].Effective,
				Calculated: e.data[t].Calculated,
				Custom: e.data[t].Custom
			})));
		});
	}
	setCustomOffset(e, t) {
		return zm(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/custom`, r = yield this.getAuthorizationHeader();
			return k.post(n, t, { headers: r }).then();
		});
	}
	deleteCounterOffsets(e, t) {
		return zm(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/remove`, r = yield this.getAuthorizationHeader();
			return k.post(n, t, { headers: r }).then();
		});
	}
	deleteCustomOffsets(e, t) {
		return zm(this, void 0, void 0, function* () {
			let n = `${yield this.getHistorianUrl()}/value/counter/${e}/offsets/custom/remove`, r = yield this.getAuthorizationHeader();
			return k.post(n, t, { headers: r }).then((e) => e.data);
		});
	}
	resetCalculatedValuesAndStatistic(e, t, n = null, r = null, i = !1) {
		return zm(this, void 0, void 0, function* () {
			let a = `${yield this.getHistorianUrl()}/value/statistics/${e}/reset`, o = yield this.getAuthorizationHeader();
			return k.post(a, {
				From: n ? n.toISOString() : null,
				Till: r ? r.toISOString() : null,
				ResetOffsets: t,
				ResetCustomOffsets: i
			}, { headers: o }).then((e) => e.data);
		});
	}
	importHistoricalValues(e) {
		return zm(this, void 0, void 0, function* () {
			let t = `${yield this.getHistorianUrl()}/historicalvalueimport/import`, n = yield this.getAuthorizationHeader();
			return k.post(t, { Values: e }, { headers: n }).then((e) => e.data);
		});
	}
	getHistorianUrl() {
		return zm(this, void 0, void 0, function* () {
			let e = yield vo(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Historian}`;
		});
	}
}, Gm = function(e, t, n, r) {
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
}, Km = class extends hp {
	constructor(e, t) {
		super(e, t);
	}
	getHistoricalValueOperations(e) {
		return Gm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return yield k.get(`${t}/operations/${e}`, { headers: n }).then((e) => e.data);
		});
	}
	startHistoricalValueOperation(e, t, n, r, i, a) {
		return Gm(this, void 0, void 0, function* () {
			let o = yield this.getBaseUrl(), s = yield this.getAuthorizationHeader();
			return k.post(`${o}/operations/${e}/start`, {
				From: t,
				Till: n,
				Timezone: r,
				OperationScript: i,
				OperationDescription: a
			}, { headers: s }).then((e) => e.data);
		});
	}
	undoHistoricalValueOperation(e) {
		return Gm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return k.put(`${t}/operations/${e}/undo`, null, { headers: n }).then();
		});
	}
	redoHistoricalValueOperation(e) {
		return Gm(this, void 0, void 0, function* () {
			let t = yield this.getBaseUrl(), n = yield this.getAuthorizationHeader();
			return k.put(`${t}/operations/${e}/redo`, null, { headers: n }).then();
		});
	}
	getBaseUrl() {
		return Gm(this, void 0, void 0, function* () {
			let e = yield vo(this.httpConfig);
			return `${e.Services.BaseUri}${e.Services.Historian}/historicalvaluemanipulation`;
		});
	}
}, qm;
(function(e) {
	e[e.Transient = 0] = "Transient", e[e.Singleton = 1] = "Singleton", e[e.ResolutionScoped = 2] = "ResolutionScoped", e[e.ContainerScoped = 3] = "ContainerScoped";
})(qm ||= {});
var Jm = qm, Ym = function(e, t) {
	return Ym = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	}, Ym(e, t);
};
function Xm(e, t) {
	Ym(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Zm(e, t, n, r) {
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
function Qm(e, t) {
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
function $m(e) {
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
function eh(e, t) {
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
function th() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(eh(arguments[t]));
	return e;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/class-provider.js
function nh(e) {
	return !!e.useClass;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function rh(e) {
	return !!e.useFactory;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/lazy-helpers.js
var ih = function() {
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
				return t[0] = e(), Reflect[n].apply(void 0, th(t));
			};
		}), t;
	}, e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/injection-token.js
function ah(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function oh(e) {
	return typeof e == "object" && "token" in e && "multiple" in e;
}
function sh(e) {
	return typeof e == "object" && "token" in e && "transform" in e;
}
function ch(e) {
	return typeof e == "function" || e instanceof ih;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/token-provider.js
function lh(e) {
	return !!e.useToken;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/value-provider.js
function uh(e) {
	return e.useValue != null;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/provider.js
function dh(e) {
	return nh(e) || uh(e) || lh(e) || rh(e);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/registry-base.js
var fh = function() {
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
}(), ph = function(e) {
	Xm(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(fh), mh = function() {
	function e() {
		this.scopedResolutions = /* @__PURE__ */ new Map();
	}
	return e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/error-helpers.js
function hh(e, t) {
	return e === null ? "at position #" + t : "\"" + e.split(",")[t].trim() + "\" at position #" + t;
}
function gh(e, t, n) {
	return n === void 0 && (n = "    "), th([e], t.message.split("\n").map(function(e) {
		return n + e;
	})).join("\n");
}
function _h(e, t, n) {
	var r = eh(e.toString().match(/constructor\(([\w, ]+)\)/) || [], 2)[1];
	return gh("Cannot inject the dependency " + hh(r === void 0 ? null : r, t) + " of \"" + e.name + "\" constructor. Reason:", n);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/types/disposable.js
function vh(e) {
	return !(typeof e.dispose != "function" || e.dispose.length > 0);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/interceptors.js
var yh = function(e) {
	Xm(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(fh), bh = function(e) {
	Xm(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(fh), xh = function() {
	function e() {
		this.preResolution = new yh(), this.postResolution = new bh();
	}
	return e;
}(), Sh = /* @__PURE__ */ new Map(), Ch = new (function() {
	function e(e) {
		this.parent = e, this._registry = new ph(), this.interceptors = new xh(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
	}
	return e.prototype.register = function(e, t, n) {
		n === void 0 && (n = { lifecycle: Jm.Transient }), this.ensureNotDisposed();
		var r = dh(t) ? t : { useClass: t };
		if (lh(r)) for (var i = [e], a = r; a != null;) {
			var o = a.useToken;
			if (i.includes(o)) throw Error("Token registration cycle detected! " + th(i, [o]).join(" -> "));
			i.push(o);
			var s = this._registry.get(o);
			a = s && lh(s.provider) ? s.provider : null;
		}
		if ((n.lifecycle === Jm.Singleton || n.lifecycle == Jm.ContainerScoped || n.lifecycle == Jm.ResolutionScoped) && (uh(r) || rh(r))) throw Error("Cannot use lifecycle \"" + Jm[n.lifecycle] + "\" with ValueProviders or FactoryProviders");
		return this._registry.set(e, {
			provider: r,
			options: n
		}), this;
	}, e.prototype.registerType = function(e, t) {
		return this.ensureNotDisposed(), ah(t) ? this.register(e, { useToken: t }) : this.register(e, { useClass: t });
	}, e.prototype.registerInstance = function(e, t) {
		return this.ensureNotDisposed(), this.register(e, { useValue: t });
	}, e.prototype.registerSingleton = function(e, t) {
		if (this.ensureNotDisposed(), ah(e)) {
			if (ah(t)) return this.register(e, { useToken: t }, { lifecycle: Jm.Singleton });
			if (t) return this.register(e, { useClass: t }, { lifecycle: Jm.Singleton });
			throw Error("Cannot register a type name as a singleton without a \"to\" token");
		}
		var n = e;
		return t && !ah(t) && (n = t), this.register(e, { useClass: n }, { lifecycle: Jm.Singleton });
	}, e.prototype.resolve = function(e, t, n) {
		t === void 0 && (t = new mh()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var r = this.getRegistration(e);
		if (!r && ah(e)) {
			if (n) return;
			throw Error("Attempted to resolve unregistered dependency token: \"" + e.toString() + "\"");
		}
		if (this.executePreResolutionInterceptor(e, "Single"), r) {
			var i = this.resolveRegistration(r, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		if (ch(e)) {
			var i = this.construct(e, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		throw Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
	}, e.prototype.executePreResolutionInterceptor = function(e, t) {
		var n, r;
		if (this.interceptors.preResolution.has(e)) {
			var i = [];
			try {
				for (var a = $m(this.interceptors.preResolution.getAll(e)), o = a.next(); !o.done; o = a.next()) {
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
				for (var o = $m(this.interceptors.postResolution.getAll(e)), s = o.next(); !s.done; s = o.next()) {
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
		if (this.ensureNotDisposed(), e.options.lifecycle === Jm.ResolutionScoped && t.scopedResolutions.has(e)) return t.scopedResolutions.get(e);
		var n = e.options.lifecycle === Jm.Singleton, r = e.options.lifecycle === Jm.ContainerScoped, i = n || r, a = uh(e.provider) ? e.provider.useValue : lh(e.provider) ? i ? e.instance ||= this.resolve(e.provider.useToken, t) : this.resolve(e.provider.useToken, t) : nh(e.provider) ? i ? e.instance ||= this.construct(e.provider.useClass, t) : this.construct(e.provider.useClass, t) : rh(e.provider) ? e.provider.useFactory(this) : this.construct(e.provider, t);
		return e.options.lifecycle === Jm.ResolutionScoped && t.scopedResolutions.set(e, a), a;
	}, e.prototype.resolveAll = function(e, t, n) {
		var r = this;
		t === void 0 && (t = new mh()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var i = this.getAllRegistrations(e);
		if (!i && ah(e)) {
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
			for (var n = $m(this._registry.entries()), r = n.next(); !r.done; r = n.next()) {
				var i = eh(r.value, 2), a = i[0], o = i[1];
				this._registry.setAll(a, o.filter(function(e) {
					return !uh(e.provider);
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
			for (var i = $m(this._registry.entries()), a = i.next(); !a.done; a = i.next()) {
				var o = eh(a.value, 2), s = o[0], c = o[1];
				c.some(function(e) {
					return e.options.lifecycle === Jm.ContainerScoped;
				}) && r._registry.setAll(s, c.map(function(e) {
					return e.options.lifecycle === Jm.ContainerScoped ? {
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
		return Zm(this, void 0, void 0, function() {
			var e;
			return Qm(this, function(t) {
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
		if (e instanceof ih) return e.createProxy(function(e) {
			return n.resolve(e, t);
		});
		var r = (function() {
			var r = Sh.get(e);
			if (!r || r.length === 0) {
				if (e.length === 0) return new e();
				throw Error("TypeInfo not known for \"" + e.name + "\"");
			}
			var i = r.map(n.resolveParams(t, e));
			return new (e.bind.apply(e, th([void 0], i)))();
		})();
		return vh(r) && this.disposables.add(r), r;
	}, e.prototype.resolveParams = function(e, t) {
		var n = this;
		return function(r, i) {
			var a, o, s;
			try {
				return oh(r) ? sh(r) ? r.multiple ? (a = n.resolve(r.transform)).transform.apply(a, th([n.resolveAll(r.token, new mh(), r.isOptional)], r.transformArgs)) : (o = n.resolve(r.transform)).transform.apply(o, th([n.resolve(r.token, e, r.isOptional)], r.transformArgs)) : r.multiple ? n.resolveAll(r.token, new mh(), r.isOptional) : n.resolve(r.token, e, r.isOptional) : sh(r) ? (s = n.resolve(r.transform, e)).transform.apply(s, th([n.resolve(r.token, e)], r.transformArgs)) : n.resolve(r, e);
			} catch (e) {
				throw Error(_h(t, i, e));
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
var wh = Array.isArray, Th = Array.prototype.indexOf, Eh = Array.prototype.includes, Dh = Array.from, Oh = Object.keys, kh = Object.defineProperty, Ah = Object.getOwnPropertyDescriptor, jh = Object.getOwnPropertyDescriptors, Mh = Object.prototype, Nh = Array.prototype, Ph = Object.getPrototypeOf, Fh = Object.isExtensible, Ih = () => {};
function Lh(e) {
	return typeof e?.then == "function";
}
function Rh(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function zh() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var Bh = 1024, Vh = 2048, Hh = 4096, Uh = 8192, Wh = 16384, Gh = 32768, Kh = 1 << 25, qh = 65536, Jh = 1 << 19, Yh = 1 << 20, Xh = 1 << 25, Zh = 65536, Qh = 1 << 21, $h = 1 << 22, eg = 1 << 23, tg = Symbol("$state"), ng = Symbol("component"), rg = Symbol("legacy props"), ig = Symbol(""), ag = Symbol("attributes"), og = Symbol("class"), sg = Symbol("style"), cg = Symbol("text"), lg = Symbol("form reset"), ug = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), dg = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), fg = {}, pg = Symbol("uninitialized"), mg = "http://www.w3.org/1999/xhtml";
function hg() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function gg(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function _g() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var M = !1;
function vg(e) {
	M = e;
}
var N;
function yg(e) {
	if (e === null) throw gg(), fg;
	return N = e;
}
function bg() {
	return yg(/* @__PURE__ */ iv(N));
}
function P(e) {
	if (M) {
		if (/* @__PURE__ */ iv(N) !== null) throw gg(), fg;
		N = e;
	}
}
function xg(e = 1) {
	if (M) {
		for (var t = e, n = N; t--;) n = /* @__PURE__ */ iv(n);
		N = n;
	}
}
function Sg(e = !0) {
	for (var t = 0, n = N;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ iv(n);
		e && n.remove(), n = i;
	}
}
function Cg(e) {
	if (!e || e.nodeType !== 8) throw gg(), fg;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function wg(e) {
	return e === this.v;
}
function Tg(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Eg(e) {
	return !Tg(e, this.v);
}
function Dg(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Og() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function kg(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Ag(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function jg() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Mg(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ng() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pg() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Fg(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ig() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Lg() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Rg() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zg() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/shared/context.js
function Bg(e) {
	let t = e.p;
	for (; t !== null && t.c === null;) t = t.p;
	return t?.c ?? null;
}
function Vg(e, t) {
	return e === null && Dg(t), e.c ??= new Map(Bg(e) || void 0);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var Hg = null;
function Ug(e) {
	Hg = e;
}
function Wg(e) {
	return Vg(Hg, "getContext").get(e);
}
function Gg(e, t) {
	return Vg(Hg, "setContext").set(e, t), t;
}
function F(e, t = !1, n) {
	Hg = {
		p: Hg,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function I(e) {
	var t = Hg, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) yv(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, Hg = t.p, Kg(e);
}
function Kg(e = {}) {
	return kh(e, ng, { value: !0 }), e;
}
function qg() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Jg = [];
function Yg() {
	var e = Jg;
	Jg = [], Rh(e);
}
function Xg(e) {
	if (Jg.length === 0 && !O_) {
		var t = Jg;
		queueMicrotask(() => {
			t === Jg && Yg();
		});
	}
	Jg.push(e);
}
function Zg() {
	for (; Jg.length > 0;) Yg();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Qg = ~(Vh | Hh | Bh);
function $g(e, t) {
	e.f = e.f & Qg | t;
}
function e_(e) {
	e.f & 512 || e.deps === null ? $g(e, Bh) : $g(e, Hh);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function t_(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= Zh, t_(t.deps));
}
function n_(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), t_(e.deps), $g(e, Bh);
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var r_ = [];
function i_(e, t = Ih) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Tg(e, t) && (e = t, n)) {
			let t = !r_.length;
			for (let t of r) t[1](), r_.push(t, e);
			if (t) {
				for (let e = 0; e < r_.length; e += 2) r_[e][0](r_[e + 1]);
				r_.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = Ih) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || Ih), o(e), () => {
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
var a_ = !1;
function o_(e) {
	var t = a_;
	try {
		return a_ = !1, [e(), a_];
	} finally {
		a_ = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var s_ = !1;
function c_() {
	s_ || (s_ = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[lg]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function l_(e) {
	var t = G, n = K;
	Uv(null), Wv(null);
	try {
		return e();
	} finally {
		Uv(t), Wv(n);
	}
}
function u_(e, t, n, r = n) {
	e.addEventListener(t, () => l_(n));
	let i = e[lg];
	e[lg] = i ? () => {
		i(), r(!0);
	} : () => r(!0), c_();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function d_(e, t, n, r) {
	let i = qg() ? h_ : v_;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = f_(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				fv(e, s);
			}
			p_();
		}
	}
	var d = m_();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ __(e))).then(u).catch((e) => fv(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), p_();
	}) : f();
}
function f_() {
	var e = K, t = G, n = Hg, r = R;
	return function(i = !0) {
		Wv(e), Uv(t), Ug(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function p_(e = !0) {
	Wv(null), Uv(null), Ug(null), e && R?.deactivate();
}
function m_() {
	var e = K, t = e.b, n = R, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function h_(e) {
	var t = 2 | Vh;
	return K !== null && (K.f |= Jh), {
		ctx: Hg,
		deps: null,
		effects: null,
		equals: wg,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: pg,
		wv: 0,
		parent: K,
		ac: null
	};
}
var g_ = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function __(e, t, n) {
	let r = K;
	r === null && Og();
	var i = void 0, a = W_(pg), o = !G, s = /* @__PURE__ */ new Set();
	return Cv(() => {
		var t = K, n = zh();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ug && n.reject(e);
			}).finally(p_);
		} catch (e) {
			n.reject(e), p_();
		}
		var c = R;
		if (o) {
			if (t.f & 32768) var l = m_();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(g_);
			else for (let e of s.values()) e.reject(g_);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== g_ && (c.activate(), t ? (a.f |= eg, K_(a, t)) : (a.f & 8388608 && (a.f ^= eg), K_(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), _v(() => {
		for (let e of s) e.reject(g_);
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
function L(e) {
	let t = /* @__PURE__ */ h_(e);
	return Kv(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function v_(e) {
	let t = /* @__PURE__ */ h_(e);
	return t.equals = Eg, t;
}
function y_(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Av(t[n]);
	}
}
function b_(e) {
	var t, n = K, r = e.parent;
	if (!Bv && r !== null && e.v !== pg && r.f & 24576) return hg(), e.v;
	Wv(r);
	try {
		e.f &= ~Zh, y_(e), t = iy(e);
	} finally {
		Wv(n);
	}
	return t;
}
function x_(e) {
	var t = b_(e);
	if (!e.equals(t) && (e.wv = ty(), (!R?.is_fork || e.deps === null) && (R === null ? e.v = t : (R.capture(e, t, !0), T_?.capture(e, t, !0)), e.deps === null))) {
		$g(e, Bh);
		return;
	}
	Bv || (E_ === null ? e_(e) : (gv() || R?.is_fork) && E_.set(e, t));
}
function S_(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && l_(() => {
		t.ac.abort(ug), t.ac = null;
	}), t.fn !== null && (t.teardown = Ih), sy(t, 0), Ov(t));
}
function C_(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && cy(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var w_ = null, R = null, T_ = null, E_ = null, D_ = null, O_ = !1, k_ = !1, A_ = null, j_ = null, M_ = 0, N_ = 1, P_ = class e {
	id = N_++;
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
		w_ === null ? w_ = this : (w_.#n = this, this.#t = w_), w_ = this;
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
			for (var r of n.d) $g(r, Vh), t(r);
			for (r of n.m) $g(r, Hh), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, M_++ > 1e3 && (this.#x(), F_());
		for (let e of this.#u) this.#d.delete(e), $g(e, Vh), this.schedule(e);
		for (let e of this.#d) $g(e, Hh), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = A_ = [], r = [], i = j_ = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw B_(e), this.#h() || this.discard(), t;
		}
		if (R = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (A_ = null, j_ = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) z_(e, t);
			i.length > 0 && R.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), T_ = this, L_(r), L_(n), T_ = null, this.#s?.resolve();
		var s = R;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && (H_.clear(), s.#g());
	}
	#_(e, t, n) {
		e.f ^= Bh;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= Bh : i & 4 ? t.push(r) : ny(r) && (i & 16 && this.#d.add(r), cy(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), $g(i, Vh), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), R = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) n_(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== pg && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), E_?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		R = this;
	}
	deactivate() {
		R = null, E_ = null;
	}
	flush() {
		try {
			k_ = !0, R = this, this.#g();
		} finally {
			M_ = 0, D_ = null, A_ = null, j_ = null, k_ = !1, R = null, E_ = null, H_.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(g_);
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
		this.#m || (this.#m = !0, Xg(() => {
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
		return (this.#s ??= zh()).promise;
	}
	static ensure() {
		if (R === null) {
			let t = R = new e();
			!k_ && !O_ && Xg(() => {
				t.#e || t.flush();
			});
		}
		return R;
	}
	apply() {
		E_ = null;
	}
	schedule(e) {
		if (D_ = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (A_ !== null && t === K && (G === null || !(G.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= Bh;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? w_ = e : t.#t = e, this.linked = !1;
		}
	}
};
function z(e) {
	var t = O_;
	O_ = !0;
	try {
		var n;
		for (e && (R !== null && !R.is_fork && R.flush(), n = e());;) {
			if (Zg(), R === null) return n;
			R.flush();
		}
	} finally {
		O_ = t;
	}
}
function F_() {
	try {
		Ng();
	} catch (e) {
		fv(e, D_);
	}
}
var I_ = null;
function L_(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && ny(r) && (I_ = /* @__PURE__ */ new Set(), cy(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Mv(r), I_?.size > 0)) {
				H_.clear();
				for (let e of I_) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) I_.has(n) && (I_.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || cy(n);
					}
				}
				I_.clear();
			}
		}
		I_ = null;
	}
}
function R_(e) {
	R.schedule(e);
}
function z_(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), $g(e, Bh);
		for (var n = e.first; n !== null;) z_(n, t), n = n.next;
	}
}
function B_(e) {
	$g(e, Bh);
	for (var t = e.first; t !== null;) B_(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var V_ = /* @__PURE__ */ new Set(), H_ = /* @__PURE__ */ new Map(), U_ = !1;
function W_(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: wg,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function B(e, t) {
	let n = W_(e, t);
	return Kv(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function G_(e, t = !1, n = !0) {
	let r = W_(e);
	return t || (r.equals = Eg), r;
}
function V(e, t, n = !1) {
	return G !== null && (!Hv || G.f & 131072) && qg() && G.f & 4325394 && (Gv === null || !Gv.has(e)) && Rg(), K_(e, n ? X_(t) : t, j_);
}
function K_(e, t, n = null) {
	if (!e.equals(t)) {
		Bv ? H_.set(e, t) : H_.has(e) || H_.set(e, e.v);
		var r = P_.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && b_(t), E_ === null && e_(t);
		}
		e.wv = ty(), Y_(e, Vh, n), qg() && K !== null && K.f & 1024 && !(K.f & 96) && (Yv === null ? Xv([e]) : Yv.push(e)), !r.is_fork && V_.size > 0 && !U_ && q_();
	}
	return t;
}
function q_() {
	U_ = !1;
	for (let e of V_) {
		e.f & 1024 && $g(e, Hh);
		let t;
		try {
			t = ny(e);
		} catch {
			t = !0;
		}
		t && cy(e);
	}
	V_.clear();
}
function J_(e) {
	V(e, e.v + 1);
}
function Y_(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = qg(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & Vh) === 0;
			if (l && $g(s, t), c & 131072) V_.add(s);
			else if (c & 2) {
				var u = s;
				E_?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= Zh), Y_(u, Hh, n));
			} else if (l) {
				var d = s;
				c & 16 && I_ !== null && I_.add(d), n === null ? R_(d) : n.push(d);
			}
		}
	}
}
function X_(e) {
	if (typeof e != "object" || !e || tg in e || ng in e) return e;
	let t = Ph(e);
	if (t !== Mh && t !== Nh) return e;
	var n = /* @__PURE__ */ new Map(), r = wh(e), i = /* @__PURE__ */ B(0), a = null, o = $v, s = (e) => {
		if ($v === o) return e();
		var t = G, n = $v;
		Uv(null), ey(o);
		var r = e();
		return Uv(t), ey(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ B(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ig();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ B(r.value, a);
				return n.set(t, e), e;
			}) : V(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ B(pg, a));
					n.set(t, e), J_(i);
				}
			} else V(r, pg), J_(i);
			return !0;
		},
		get(t, r, i) {
			if (r === tg) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || Ah(t, r)?.writable) && (o = s(() => /* @__PURE__ */ B(X_(c ? t[r] : pg), a)), n.set(r, o)), o !== void 0) {
				var l = q(o);
				return l === pg ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = q(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== pg) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === tg) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== pg || Reflect.has(e, t);
			return (r !== void 0 || K !== null && (!i || Ah(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ B(i ? X_(e[t]) : pg, a)), n.set(t, r)), q(r) === pg) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ B(pg, a)), n.set(d + "", f)) : V(f, pg);
			}
			if (l === void 0) (!u || Ah(e, t)?.writable) && (l = s(() => /* @__PURE__ */ B(void 0, a)), V(l, X_(o)), n.set(t, l));
			else {
				u = l.v !== pg;
				var p = s(() => X_(o));
				V(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && V(h, g + 1);
				}
				J_(i);
			}
			return !0;
		},
		ownKeys(e) {
			q(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== pg;
			});
			for (var [r, a] of n) a.v !== pg && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Lg();
		}
	});
}
var Z_, Q_, $_, ev;
function tv() {
	if (Z_ === void 0) {
		Z_ = window, Q_ = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		$_ = Ah(t, "firstChild").get, ev = Ah(t, "nextSibling").get, Fh(e) && (e[og] = void 0, e[ag] = null, e[sg] = void 0, e.__e = void 0), Fh(n) && (n[cg] = void 0);
	}
}
function nv(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function rv(e) {
	return $_.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function iv(e) {
	return ev.call(e);
}
function H(e, t) {
	if (!M) return /* @__PURE__ */ rv(e);
	var n = /* @__PURE__ */ rv(N);
	if (n === null) n = N.appendChild(nv());
	else if (t && n.nodeType !== 3) {
		var r = nv();
		return n?.before(r), yg(r), r;
	}
	return t && uv(n), yg(n), n;
}
function av(e, t = !1) {
	if (!M) {
		var n = /* @__PURE__ */ rv(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ iv(n) : n;
	}
	if (t) {
		if (N?.nodeType !== 3) {
			var r = nv();
			return N?.before(r), yg(r), r;
		}
		uv(N);
	}
	return N;
}
function ov(e, t = !1) {
	if (!M) return /* @__PURE__ */ rv(e);
	var n = H(e, t);
	return P(e), n;
}
function U(e, t = 1, n = !1) {
	let r = M ? N : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ iv(r);
	if (!M) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = nv();
			return r === null ? i?.after(a) : r.before(a), yg(a), a;
		}
		uv(r);
	}
	return yg(r), r;
}
function sv(e) {
	e.textContent = "";
}
function cv() {
	return !1;
}
function lv(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function uv(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function dv(e) {
	var t = K;
	if (t === null) return G.f |= eg, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	fv(e, t);
}
function fv(e, t) {
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
function pv(e) {
	K === null && (G === null && Mg(e), jg()), Bv && Ag(e);
}
function mv(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hv(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= Uh);
	var r = {
		ctx: Hg,
		deps: null,
		nodes: null,
		f: e | Vh | 512,
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
	R?.register_created_effect(r);
	var i = r;
	if (e & 4) A_ === null ? P_.ensure().schedule(r) : A_.push(r);
	else if (t !== null) {
		try {
			cy(r);
		} catch (e) {
			throw Av(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= qh));
	}
	if (i !== null && (i.parent = n, n !== null && mv(i, n), G !== null && G.f & 2 && !(e & 64))) {
		var a = G;
		(a.effects ??= []).push(i);
	}
	return r;
}
function gv() {
	return G !== null && !Hv;
}
function _v(e) {
	let t = hv(8, null);
	return $g(t, Bh), t.teardown = e, t;
}
function vv(e) {
	pv("$effect");
	var t = K.f;
	if (!G && t & 32 && Hg !== null && !Hg.i) {
		var n = Hg;
		(n.e ??= []).push(e);
	} else return yv(e);
}
function yv(e) {
	return hv(4 | Yh, e);
}
function bv(e) {
	P_.ensure();
	let t = hv(64 | Jh, e);
	return () => {
		Av(t);
	};
}
function xv(e) {
	P_.ensure();
	let t = hv(64 | Jh, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Nv(t, () => {
			Av(t), n(void 0);
		}) : (Av(t), n(void 0));
	});
}
function Sv(e) {
	return hv(4, e);
}
function Cv(e) {
	return hv($h | Jh, e);
}
function wv(e, t = 0) {
	return hv(8 | t, e);
}
function W(e, t = [], n = [], r = []) {
	d_(r, t, n, (t) => {
		hv(8, () => {
			e(...t.map(q));
		});
	});
}
function Tv(e, t = 0) {
	return hv(16 | t, e);
}
function Ev(e) {
	return hv(32 | Jh, e);
}
function Dv(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = Bv, r = G;
		Vv(!0), Uv(null);
		try {
			t.call(null);
		} catch (t) {
			fv(t, e.parent);
		} finally {
			Vv(n), Uv(r);
		}
	}
}
function Ov(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && l_(() => {
			e.abort(ug);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Av(n, t), n = r;
	}
}
function kv(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Av(t), t = n;
	}
}
function Av(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (jv(e.nodes.start, e.nodes.end), n = !0), e.f |= Kh, Ov(e, t && !n), sy(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Dv(e), e.f ^= Kh, e.f |= Wh;
	var i = e.parent;
	i !== null && i.first !== null && Mv(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function jv(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ iv(e);
		e.remove(), e = n;
	}
}
function Mv(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Nv(e, t, n = !0) {
	var r = [];
	e.f |= 256, Pv(e, r, !0);
	var i = () => {
		n && Av(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Pv(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= Uh;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Pv(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Fv(e) {
	e.f &= -257, Iv(e, !0);
}
function Iv(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= Uh, e.f & 1024 || ($g(e, Vh), P_.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Iv(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Lv(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ iv(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Rv = null, zv = !1, Bv = !1;
function Vv(e) {
	Bv = e;
}
var G = null, Hv = !1;
function Uv(e) {
	G = e;
}
var K = null;
function Wv(e) {
	K = e;
}
var Gv = null;
function Kv(e) {
	G !== null && (Gv ??= /* @__PURE__ */ new Set()).add(e);
}
var qv = null, Jv = 0, Yv = null;
function Xv(e) {
	Yv = e;
}
var Zv = 1, Qv = 0, $v = Qv;
function ey(e) {
	$v = e;
}
function ty() {
	return ++Zv;
}
function ny(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~Zh), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (ny(a) && x_(a), a.wv > e.wv) return !0;
		}
		t & 512 && E_ === null && $g(e, Bh);
	}
	return !1;
}
function ry(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Gv !== null && Gv.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? ry(a, t, !1) : t === a && (n ? $g(a, Vh) : a.f & 1024 && $g(a, Hh), R_(a));
	}
}
function iy(e) {
	var t = qv, n = Jv, r = Yv, i = G, a = Gv, o = Hg, s = Hv, c = $v, l = e.f;
	qv = null, Jv = 0, Yv = null, G = l & 96 ? null : e, Gv = null, Ug(e.ctx), Hv = !1, $v = ++Qv, e.ac !== null && (l_(() => {
		e.ac.abort(ug);
	}), e.ac = null);
	try {
		e.f |= Qh;
		var u = e.fn, d = u();
		e.f |= Gh;
		var f = ay(e);
		if (qg() && Yv !== null && !Hv && f !== null && !(e.f & 6146)) for (var p = 0; p < Yv.length; p++) ry(Yv[p], e);
		if (i !== null && i !== e) {
			if (Qv++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Qv;
			if (t !== null) for (let e of t) e.rv = Qv;
			Yv !== null && (r === null ? r = Yv : r.push(...Yv));
		}
		return e.f & 8388608 && (e.f ^= eg), d;
	} catch (t) {
		return ay(e), dv(t);
	} finally {
		e.f ^= Qh, qv = t, Jv = n, Yv = r, G = i, Gv = a, Ug(o), Hv = s, $v = c;
	}
}
function ay(e) {
	var t = e.deps, n = R?.is_fork;
	if (qv !== null) {
		var r;
		if (n || sy(e, Jv), t !== null && Jv > 0) for (t.length = Jv + qv.length, r = 0; r < qv.length; r++) t[Jv + r] = qv[r];
		else e.deps = t = qv;
		if (gv() && e.f & 512) for (r = Jv; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && Jv < t.length && (sy(e, Jv), t.length = Jv);
	return t;
}
function oy(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = Th.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (qv === null || !Eh.call(qv, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~Zh), a.v !== pg && e_(a), a.ac !== null && l_(() => {
			a.ac.abort(ug), a.ac = null, $g(a, Vh);
		}), S_(a), sy(a, 0);
	}
}
function sy(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) oy(e, n[r]);
}
function cy(e) {
	var t = e.f;
	if (!(t & 16384)) {
		$g(e, Bh);
		var n = K, r = zv;
		K = e, zv = !(t & 96);
		try {
			t & 16777232 ? kv(e) : Ov(e), Dv(e);
			var i = iy(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Zv;
		} finally {
			zv = r, K = n;
		}
	}
}
async function ly() {
	await Promise.resolve(), z();
}
function q(e) {
	var t = !!(e.f & 2);
	if (Rv?.add(e), G !== null && !Hv && !(K !== null && K.f & 16384) && (Gv === null || !Gv.has(e))) {
		var n = G.deps;
		if (G.f & 2097152) e.rv < Qv && (e.rv = Qv, qv === null && n !== null && n[Jv] === e ? Jv++ : qv === null ? qv = [e] : qv.push(e));
		else {
			G.deps ??= [], Eh.call(G.deps, e) || G.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [G] : Eh.call(r, G) || r.push(G);
		}
	}
	if (Bv && H_.has(e)) return H_.get(e);
	if (t) {
		var i = e;
		if (Bv) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || dy(i)) && (a = b_(i)), H_.set(i, a), a;
		}
		var o = !(i.f & 512) && !Hv && G !== null && (zv || !!(G.f & 512)), s = (i.f & Gh) === 0;
		ny(i) && (o && (i.f |= 512), x_(i)), o && !s && (C_(i), uy(i));
	}
	if (E_?.has(e)) return E_.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function uy(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (C_(t), uy(t));
}
function dy(e) {
	if (e.v === pg) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (H_.has(t) || t.f & 2 && dy(t)) return !0;
	return !1;
}
function fy(e) {
	var t = Hv;
	try {
		return Hv = !0, e();
	} finally {
		Hv = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var py = ["touchstart", "touchmove"];
function my(e) {
	return py.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dev/css.js
var hy = Symbol("events"), gy = /* @__PURE__ */ new Set(), _y = /* @__PURE__ */ new Set();
function vy(e, t, n) {
	(t[hy] ??= {})[e] = n;
}
function yy(e) {
	for (var t = 0; t < e.length; t++) gy.add(e[t]);
	for (var n of _y) n(e);
}
var by = null, xy = !1;
function Sy(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	by = e, xy || (xy = !0, setTimeout(() => {
		xy = !1, by = null;
	}));
	var o = 0, s = by === e && e[hy];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[hy] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		kh(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = G, d = K;
		Uv(null), Wv(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[hy]?.[r];
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
			e[hy] = t, delete e.currentTarget, Uv(u), Wv(d);
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
	var t = lv("template");
	return t.innerHTML = wy(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ey(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function J(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (M) return Ey(N, null), N;
		i === void 0 && (i = Ty(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ rv(i)));
		var t = r || Q_ ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ rv(t), s = t.lastChild;
			Ey(o, s);
		} else Ey(t, t);
		return t;
	};
}
function Dy(e = "") {
	if (!M) {
		var t = nv(e + "");
		return Ey(t, t), t;
	}
	var n = N;
	return n.nodeType === 3 ? uv(n) : (n.before(n = nv()), yg(n)), Ey(n, n), n;
}
function Oy() {
	if (M) return Ey(N, null), N;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = nv();
	return e.append(t, n), Ey(t, n), e;
}
function Y(e, t) {
	if (M) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = N), bg();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function ky(e) {
	let t = 0, n = W_(0), r;
	return () => {
		gv() && (q(n), wv(() => (t === 0 && (r = fy(() => e(() => J_(n)))), t += 1, () => {
			Xg(() => {
				--t, t === 0 && (r?.(), r = void 0, J_(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ay = qh | Jh;
function jy(e, t, n, r) {
	new My(e, t, n, r);
}
var My = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = M ? N : null;
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
	#h = ky(() => (this.#m = W_(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Tv(() => {
			if (M) {
				let e = this.#t;
				bg();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ay), M && (this.#e = N);
	}
	#g() {
		try {
			this.#a = Ev(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Xg(r), t && (this.#s = Ev(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				_g();
				return;
			}
			t = !0, n && zg(), this.#s !== null && Nv(this.#s, () => {
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
					fv(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = Ev(() => e(this.#e)), Xg(() => {
			var e = this.#c = document.createDocumentFragment(), t = nv(), n = !1;
			if (e.append(t), this.#a = this.#S(() => {
				try {
					return Ev(() => this.#r(t));
				} catch (e) {
					try {
						this.error(e), n = !0;
					} catch (e) {
						fv(e, this.#i.parent);
					}
					return null;
				}
			}), this.#a === null) {
				this.#c = null, n && this.#x(R);
				return;
			}
			this.#u === 0 && (this.#e.before(e), this.#c = null, Nv(this.#o, () => {
				this.#o = null;
			}), this.#x(R));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = Ev(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Lv(this.#a, e);
				let t = this.#n.pending;
				this.#o = Ev(() => t(this.#e));
			} else this.#x(R);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		n_(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = G, r = Hg;
		Wv(this.#i), Uv(this.#i), Ug(this.#i.ctx);
		try {
			return P_.ensure(), e();
		} finally {
			Wv(t), Uv(n), Ug(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Nv(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Xg(() => {
			this.#d = !1, this.#m && K_(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		R?.is_fork ? (this.#a && R.skip_effect(this.#a), this.#o && R.skip_effect(this.#o), this.#s && R.skip_effect(this.#s), R.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (Av(this.#a), null), this.#o &&= (Av(this.#o), null), this.#s &&= (Av(this.#s), null), M && (yg(this.#t), xg(), yg(Sg()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return Ev(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return fv(e, this.#i.parent), null;
				}
			}));
		};
		Xg(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				fv(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => fv(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function X(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[cg] ??= e.nodeValue) && (e[cg] = n, e.nodeValue = `${n}`);
}
function Ny(e, t) {
	return Iy(e, t);
}
function Py(e, t) {
	tv(), t.intro = t.intro ?? !1;
	let n = t.target, r = M, i = N;
	try {
		for (var a = /* @__PURE__ */ rv(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ iv(a);
		if (!a) throw fg;
		vg(!0), yg(a);
		let r = Iy(e, {
			...t,
			anchor: a
		});
		return vg(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== fg && console.warn("Failed to hydrate: ", r), t.recover === !1 && Pg(), tv(), sv(n), vg(!1), Ny(e, t);
	} finally {
		vg(r), yg(i);
	}
}
var Fy = /* @__PURE__ */ new Map();
function Iy(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	tv();
	var c = void 0, l = xv(() => {
		var o = n ?? t.appendChild(nv());
		jy(o, { pending: () => {} }, (t) => {
			F({});
			var n = Hg;
			if (a && (n.c = a), i && (r.$$events = i), M && Ey(t, null), c = e(t, r) || Kg(), M && (K.nodes.end = N, N === null || N.nodeType !== 8 || N.data !== "]")) throw gg(), fg;
			I();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = my(r);
					for (let e of [t, document]) {
						var a = Fy.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Fy.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Sy, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(Dh(gy)), _y.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Fy.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Sy), r.delete(e), r.size === 0 && Fy.delete(n)) : r.set(e, i);
			}
			_y.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Ly.set(c, l), c;
}
var Ly = /* @__PURE__ */ new WeakMap();
function Ry(e, t) {
	let n = Ly.get(e);
	return n ? (Ly.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var zy = class {
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
			if (n) Fv(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Fv(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Av(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Lv(r, t), t.append(nv()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Av(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Nv(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Av(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = R, r = cv();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = nv();
				i.append(a), this.#n.set(e, {
					effect: Ev(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, Ev(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else M && (this.anchor = N), this.#a(n);
	}
}, By = 0, Vy = 1, Hy = 2;
function Uy(e, t, n, r, i) {
	M && bg();
	var a = qg(), o = pg, s = a ? W_(o) : /* @__PURE__ */ G_(o, !1, !1), c = a ? W_(o) : /* @__PURE__ */ G_(o, !1, !1), l = new zy(e);
	Tv(() => {
		var a = R, o = t(), u = !1;
		let d = M && Lh(o) === (e.data === "[!");
		if (d && (yg(Sg()), vg(!1)), Lh(o)) {
			var f = f_(), p = !1;
			let e = (e) => {
				if (!u) {
					p = !0, f(!1), R === a && a.deactivate(), P_.ensure();
					try {
						e();
					} finally {
						p_(!1), O_ || z();
					}
				}
			};
			o.then((t) => {
				e(() => {
					K_(s, t), l.ensure(Vy, r && ((e) => r(e, s)));
				});
			}, (t) => {
				e(() => {
					if (K_(c, t), l.ensure(Hy, i && ((e) => i(e, c))), !i) throw c.v;
				});
			}), M ? l.ensure(By, n) : Xg(() => {
				p || e(() => {
					l.ensure(By, n);
				});
			});
		} else K_(s, o), l.ensure(Vy, r && ((e) => r(e, s)));
		return d && vg(!0), () => {
			u = !0;
		};
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Z(e, t, n = !1) {
	var r;
	M && (r = N, bg());
	var i = new zy(e), a = n ? qh : 0;
	function o(e, t) {
		if (M) {
			var n = Cg(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Sg();
				yg(a), i.anchor = a, vg(!1), i.ensure(e, t), vg(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Tv(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Wy(e, t) {
	return t;
}
function Gy(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Nv(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Ky(e, Dh(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null && e.pending.size === 0;
		if (c) {
			var l = n, u = l.parentNode;
			sv(u), u.append(l), e.items.clear();
		}
		Ky(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Ky(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= Xh, Lv(a, document.createDocumentFragment())) : Av(t[i], n);
	}
}
var qy;
function Jy(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = M ? yg(/* @__PURE__ */ rv(c)) : c.appendChild(nv());
	}
	M && bg();
	var l = null, u = /* @__PURE__ */ v_(() => {
		var e = n();
		return wh(e) ? e : e == null ? [] : Dh(e);
	}), d, f = /* @__PURE__ */ new Map(), p = !0;
	function m(e) {
		g.effect.f & 16384 || (g.pending.delete(e), g.fallback = l, Xy(g, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= Xh, Qy(l, null, o)) : Fv(l) : Nv(l, () => {
			l = null;
		})));
	}
	function h(e) {
		g.pending.delete(e);
	}
	var g = {
		effect: Tv(() => {
			d = q(u);
			var e = d.length;
			let c = !1;
			M && Cg(o) === "[!" != (e === 0) && (o = Sg(), yg(o), vg(!1), c = !0);
			for (var g = /* @__PURE__ */ new Set(), _ = R, v = cv(), y = 0; y < e; y += 1) {
				M && N.nodeType === 8 && N.data === "]" && (o = N, c = !0, vg(!1));
				var b = d[y], x = r(b, y), S = p ? null : s.get(x);
				S ? (S.v && K_(S.v, b), S.i && K_(S.i, y), v && _.unskip_effect(S.e)) : (S = Zy(s, p ? o : qy ??= nv(), b, x, y, i, t, n), p || (S.e.f |= Xh), s.set(x, S)), g.add(x);
			}
			if (e === 0 && a && !l && (p ? l = Ev(() => a(o)) : (l = Ev(() => a(qy ??= nv())), l.f |= Xh)), e > g.size && kg("", "", ""), M && e > 0 && yg(Sg()), !p) {
				if (f.set(_, g), v) {
					for (let [e, t] of s) g.has(e) || _.skip_effect(t.e);
					_.oncommit(m), _.ondiscard(h);
				} else m(_);
			}
			c && vg(!0), q(u);
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	p = !1, M && (o = N);
}
function Yy(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Xy(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, c = Yy(e.effect.first), l, u = null, d, f = [], p = [], m, h, g, _;
	if (a) for (_ = 0; _ < o; _ += 1) m = t[_], h = i(m, _), g = s.get(h).e, g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
	for (_ = 0; _ < o; _ += 1) {
		if (m = t[_], h = i(m, _), g = s.get(h).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
		if (g.f & 8192 && (Fv(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g.f & 33554432) {
			if (g.f ^= Xh, g === c) Qy(g, null, n);
			else {
				var v = u ? u.next : c;
				g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), $y(e, u, g), $y(e, g, v), Qy(g, v, n), u = g, f = [], p = [], c = Yy(u.next);
				continue;
			}
		}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var y = p[0], b;
					u = y.prev;
					var x = f[0], S = f[f.length - 1];
					for (b = 0; b < f.length; b += 1) Qy(f[b], y, n);
					for (b = 0; b < p.length; b += 1) l.delete(p[b]);
					$y(e, x.prev, S.next), $y(e, u, x), $y(e, S, y), c = y, u = S, --_, f = [], p = [];
				} else l.delete(g), Qy(g, c, n), $y(e, g.prev, g.next), $y(e, g, u === null ? e.effect.first : u.next), $y(e, u, g), u = g;
				continue;
			}
			for (f = [], p = []; c !== null && c !== g;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = Yy(c.next);
			if (c === null) continue;
		}
		g.f & 33554432 || f.push(g), u = g, c = Yy(g.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ky(e, Dh(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var ee = [];
		if (l !== void 0) for (g of l) g.f & 8192 || ee.push(g);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = Yy(c.next);
		var C = ee.length;
		if (C > 0) {
			var te = r & 4 && o === 0 ? n : null;
			if (a) {
				for (_ = 0; _ < C; _ += 1) ee[_].nodes?.a?.measure();
				for (_ = 0; _ < C; _ += 1) ee[_].nodes?.a?.fix();
			}
			Gy(e, ee, te);
		}
	}
	a && Xg(() => {
		if (d !== void 0) for (g of d) g.nodes?.a?.apply();
	});
}
function Zy(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? W_(n) : /* @__PURE__ */ G_(n, !1, !1) : null, l = o & 2 ? W_(i) : null;
	return {
		v: c,
		i: l,
		e: Ev(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Qy(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ iv(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function $y(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function eb(e, t, ...n) {
	var r = new zy(e);
	Tv(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, qh);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function tb(e, t) {
	Sv(() => {
		e = K?.parent?.nodes?.start ?? e;
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = lv("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var nb = [..." 	\n\r\f\xA0\v﻿"];
function rb(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || nb.includes(r[o - 1])) && (s === r.length || nb.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ib(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ab(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ob(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ab)), i && c.push(...Object.keys(i).map(ab));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ab(e.substring(l, u).trim());
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
		return r && (n += ib(r)), i && (n += ib(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function sb(e, t, n, r, i, a) {
	var o = e[og];
	if (M || o !== n || o === void 0) {
		var s = rb(n, r, a);
		(!M || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[og] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function cb(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function lb(e, t, n, r) {
	var i = e[sg];
	if (M || i !== t) {
		var a = ob(t, r);
		(!M || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[sg] = t;
	} else r && (Array.isArray(r) ? (cb(e, n?.[0], r[0]), cb(e, n?.[1], r[1], "important")) : cb(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ub = Symbol("is custom element"), db = Symbol("is html"), fb = dg ? "link" : "LINK";
function pb(e) {
	if (M) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					mb(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					mb(e, "checked", null), e.checked = r;
				}
			}
		};
		e[lg] = n, Xg(n), c_();
	}
}
function mb(e, t, n, r) {
	var i = hb(e);
	M && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === fb) || i[t] !== (i[t] = n) && (t === "loading" && (e[ig] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _b(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function hb(e) {
	return e[ag] ??= {
		[ub]: e.nodeName.includes("-"),
		[db]: e.namespaceURI === mg
	};
}
var gb = /* @__PURE__ */ new Map();
function _b(e) {
	var t = e.getAttribute("is") || e.nodeName, n = gb.get(t);
	if (n) return n;
	gb.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = jh(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
		i = Ph(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function vb(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	u_(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = yb(e) ? bb(a) : a, n(a), R !== null && r.add(R), await ly(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (M && e.defaultValue !== e.value || fy(t) == null && e.value) && (n(yb(e) ? bb(e.value) : e.value), R !== null && r.add(R)), wv(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = R;
			if (r.has(i)) return;
		}
		yb(e) && n === bb(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function yb(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function bb(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function xb(e, t) {
	return e === t || e?.[tg] === t;
}
function Sb(e = Kg(), t, n, r) {
	var i = Hg.r, a = K;
	return Sv(() => {
		var o, s;
		return wv(() => {
			o = s, s = r?.() || [], fy(() => {
				xb(n(...s), e) || (t(e, ...s), o && xb(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && xb(n(...s), e) && t(null, ...s);
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
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ h_(r), q(l)) : (c && (c = !1, s = o ? fy(r) : r), s);
	let d;
	if (a) {
		var f = tg in e || rg in e;
		d = Ah(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = o_(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Fg(t), d(p)));
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
	var _ = !1, v = (n & 1 ? h_ : v_)(() => (_ = !1, h()));
	a && q(v);
	var y = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? q(v) : i && a ? X_(e) : e;
			return V(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Bv && _ || y.f & 16384 ? v.v : q(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Cb(e) {
	return new wb(e);
}
var wb = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ G_(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === rg || (q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return V(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Py : Ny)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && z(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && kh(this, e, {
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
			Ry(this.#t);
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
}, Tb;
typeof HTMLElement == "function" && (Tb = class extends HTMLElement {
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
					let n = lv("slot");
					e !== "default" && (n.name = e), Y(t, n);
				};
			}
			let t = {}, n = Db(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Eb(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Cb({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = bv(() => {
				wv(() => {
					this.$$r = !0;
					for (let e of Oh(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Eb(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Eb(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return Oh(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Eb(e, t, n, r) {
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
function Db(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function $(e, t, n, r, i, a) {
	let o = class extends Tb {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return Oh(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return Oh(t).forEach((e) => {
		kh(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Eb(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (Ah(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		kh(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
function Ob(e) {
	Hg === null && Dg("onMount"), vv(() => {
		let t = fy(e);
		if (typeof t == "function") return t;
	});
}
function kb(e) {
	Hg === null && Dg("onDestroy"), Ob(() => () => fy(e));
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
		let r = Rb(), i = new Pi(), a = this._popupContainer[e] ?? this._createPopupContainer(e, n), o = this._createPopupWrapper(t, n);
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
			afterClosed: Oa(i).then(() => console.log("afterClosed")),
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
	[yp.toString()]: "TenantHttpService",
	[Tp.toString()]: "DataSourceHttpService",
	[_p.toString()]: "EntityHttpService",
	[xp.toString()]: "EntityNameService",
	[hp.toString()]: "BaseHttpService",
	[Rm.toString()]: "LiveValueService"
};
function Hb(e, t = null) {
	let n = Vb[e.toString()] ?? e.toString(), r = window.dependencyContainer ?? Ch;
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
	let r = window.dependencyContainer ?? Ch;
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
var Kb = /* @__PURE__ */ J("<div><span class=\"material-symbols-rounded select-none\"><!></span></div>");
function qb(e, t) {
	F(t, !0);
	let n = Q(t, "icon", 7, null), r = Q(t, "size", 7, "medium"), i = Q(t, "iconSize", 7, null), a = Q(t, "variant", 7, "neutral"), o = Q(t, "className", 7, ""), s = Q(t, "title", 7, null), c = Q(t, "disabled", 7, !1), l = Q(t, "onclick", 7), u = Q(t, "children", 7), d = {
		small: 26,
		medium: 36,
		large: 40
	}, f = /* @__PURE__ */ L(() => typeof r() == "number" ? r() : d[r()]), p = /* @__PURE__ */ L(() => i() ?? Math.round(q(f) * .55));
	function m(e) {
		c() || l()?.(e);
	}
	var h = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), z();
		},
		get size() {
			return r();
		},
		set size(e = "medium") {
			r(e), z();
		},
		get iconSize() {
			return i();
		},
		set iconSize(e = null) {
			i(e), z();
		},
		get variant() {
			return a();
		},
		set variant(e = "neutral") {
			a(e), z();
		},
		get className() {
			return o();
		},
		set className(e = "") {
			o(e), z();
		},
		get title() {
			return s();
		},
		set title(e = null) {
			s(e), z();
		},
		get disabled() {
			return c();
		},
		set disabled(e = !1) {
			c(e), z();
		},
		get onclick() {
			return l();
		},
		set onclick(e) {
			l(e), z();
		},
		get children() {
			return u();
		},
		set children(e) {
			u(e), z();
		}
	}, g = Kb();
	let _;
	var v = H(g), y = H(v), b = (e) => {
		var t = Oy();
		eb(av(t), u), Y(e, t);
	}, x = (e) => {
		var t = Dy();
		W(() => X(t, n())), Y(e, t);
	};
	return Z(y, (e) => {
		u() ? e(b) : e(x, -1);
	}), P(v), P(g), W(() => {
		mb(g, "title", s()), _ = sb(g, 1, `flex shrink-0 flex-col items-center justify-center rounded-full transition-colors ${o() ?? ""}`, null, _, {
			"cursor-pointer": !c(),
			"cursor-default": c(),
			"text-primary": a() === "primary" && !c(),
			"text-ink-secondary": a() === "neutral" && !c(),
			"text-ink-disabled": c(),
			"hover:bg-primary-tint": a() === "primary" && !c(),
			"hover:bg-neutral-hover": a() === "neutral" && !c()
		}), lb(g, `height: ${q(f) ?? ""}px; width: ${q(f) ?? ""}px;`), lb(v, `font-size: ${q(p) ?? ""}px;`);
	}), vy("click", g, (e) => m(e)), Y(e, g), I(h);
}
yy(["click"]), $(qb, {
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
var Jb = /* @__PURE__ */ J("<span class=\"text-ink-tertiary\">/</span>"), Yb = /* @__PURE__ */ J("<span> </span> <!>", 1), Xb = /* @__PURE__ */ J("<div class=\"mt-[2px] flex flex-wrap items-center text-meta text-ink-secondary\"></div>"), Zb = /* @__PURE__ */ J("<div class=\"mt-[2px] text-meta text-ink-tertiary\">Suchergebnisse</div>"), Qb = /* @__PURE__ */ J("<span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span>"), $b = /* @__PURE__ */ J("<div class=\"truncate text-sub text-ink-tertiary\"> </div>"), ex = /* @__PURE__ */ J("<div class=\"truncate text-sub text-ink-tertiary\">nur Untermandanten</div>"), tx = /* @__PURE__ */ J("<span class=\"material-symbols-rounded select-none text-[18px] text-ink-tertiary\" title=\"Mandant ist deaktiviert\">lock</span>"), nx = /* @__PURE__ */ J("<span class=\"flex-none rounded-full bg-muted px-2 py-[2px] text-meta text-ink-secondary\"> </span>"), rx = /* @__PURE__ */ J("<span class=\"material-symbols-rounded select-none text-[20px] text-ink-tertiary\">chevron_right</span>"), ix = /* @__PURE__ */ J("<div><div class=\"flex h-9 w-9 flex-none items-center justify-center rounded-control bg-muted\"><span class=\"material-symbols-rounded select-none text-[20px] text-ink-secondary\">domain</span></div> <div class=\"min-w-0 flex-1\"><div class=\"truncate text-cell text-ink\"> </div> <!></div> <!> <!> <!> <!></div>"), ax = /* @__PURE__ */ J("<div class=\"flex flex-col items-center gap-2 py-10\"><span class=\"material-symbols-rounded select-none text-[24px] text-ink-tertiary\">search_off</span> <div class=\"text-cell text-ink-secondary\">Keine Mandanten gefunden</div></div>"), ox = /* @__PURE__ */ J("<div class=\"flex h-full min-h-0 w-full flex-col overflow-hidden px-5 py-[14px]\"><div class=\"mb-3 flex items-start gap-2\"><!> <div class=\"min-w-0 flex-1\"><div class=\"text-section text-ink\">Mandant auswählen</div> <!></div> <div class=\"flex h-10 w-[280px] flex-none items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Mandant finden\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <!></div></div> <div class=\"min-h-0 flex-1 overflow-auto rounded-dialog border border-line\"><!> <!></div></div>");
function sx(e, t) {
	F(t, !0);
	let n = Hb(yp), r = Q(t, "allowBack", 7, !1), i = Q(t, "ontenantSelected", 7), a = Q(t, "onback", 7), o = /* @__PURE__ */ B(X_([])), s = /* @__PURE__ */ B(X_([])), c = /* @__PURE__ */ B(""), l = /* @__PURE__ */ B(!1), u = /* @__PURE__ */ B(X_({})), d = {}, f = new Pi(), p = new Pi();
	p.pipe(po(f), eo(300), ro()).subscribe((e) => h(e)), vv(() => {
		p.next(q(c));
	});
	async function m() {
		let e = await n.getTopTenants();
		if (e.length === 1) {
			let t = e[0];
			if (t.Root == null) {
				y(t);
				return;
			}
		}
		V(o, [new Tr({
			Id: "start",
			Name: "Start"
		})], !0), _(e);
	}
	async function h(e) {
		if (!e) {
			q(l) && (V(l, !1), m());
			return;
		}
		V(l, !0);
		try {
			_(await n.filterTenantsByName(e));
		} catch (e) {
			console.error(e), _([]);
		}
	}
	async function g(e) {
		if (d[e]) return d[e];
		try {
			let t = await n.getNextTenants(e);
			return d[e] = t, t;
		} catch (e) {
			return console.error(e), [];
		}
	}
	function _(e) {
		V(s, e, !0), v(e);
	}
	function v(e) {
		for (let t of e) q(u)[t.Id] === void 0 && g(t.Id).then((e) => {
			V(u, {
				...q(u),
				[t.Id]: e.length
			}, !0);
		});
	}
	async function y(e) {
		V(c, ""), V(l, !1), V(o, [...q(o), e], !0), _(await g(e.Id));
	}
	async function b(e) {
		if (V(c, ""), V(l, !1), e.Id == "start") {
			m();
			return;
		}
		let t = q(o).findIndex((t) => t.Id === e.Id);
		V(o, q(o).slice(0, t + 1), !0), _(await g(e.Id));
	}
	function x(e) {
		if (q(u)[e.Id] > 0) {
			y(e);
			return;
		}
		e.Root && i()?.(e);
	}
	function S(e, t) {
		e.stopPropagation(), i()?.(t);
	}
	m(), kb(() => {
		f.next(), f.complete();
	});
	var ee = {
		get allowBack() {
			return r();
		},
		set allowBack(e = !1) {
			r(e), z();
		},
		get ontenantSelected() {
			return i();
		},
		set ontenantSelected(e) {
			i(e), z();
		},
		get onback() {
			return a();
		},
		set onback(e) {
			a(e), z();
		}
	}, C = ox(), te = H(C), ne = H(te), re = (e) => {
		qb(e, {
			size: 36,
			iconSize: 20,
			icon: "arrow_back",
			onclick: () => a()?.()
		});
	};
	Z(ne, (e) => {
		r() && e(re);
	});
	var ie = U(ne, 2), ae = U(H(ie), 2), oe = (e) => {
		var t = Xb();
		Jy(t, 21, () => q(o), Wy, (e, t, n) => {
			var r = Yb(), i = av(r), a = ov(i, !0), s = U(i, 2), c = (e) => {
				Y(e, Jb());
			};
			Z(s, (e) => {
				n < q(o).length - 1 && e(c);
			}), W(() => {
				sb(i, 1, `cursor-pointer rounded-[4px] px-1 py-[2px] transition-colors hover:bg-neutral-hover ${n === q(o).length - 1 ? "font-medium text-ink" : ""}`), X(a, q(t).Name);
			}), vy("click", i, () => b(q(t))), Y(e, r);
		}), P(t), Y(e, t);
	}, se = (e) => {
		Y(e, Zb());
	};
	Z(ae, (e) => {
		q(l) ? e(se, -1) : e(oe);
	}), P(ie);
	var ce = U(ie, 2), le = H(ce);
	pb(le);
	var ue = U(le, 2), de = (e) => {
		qb(e, {
			size: 26,
			iconSize: 16,
			icon: "close",
			onclick: () => V(c, "")
		});
	}, fe = (e) => {
		Y(e, Qb());
	};
	Z(ue, (e) => {
		q(c) ? e(de) : e(fe, -1);
	}), P(ce), P(te);
	var pe = U(te, 2), w = H(pe);
	Jy(w, 17, () => q(s), (e) => e.Id, (e, t) => {
		let n = /* @__PURE__ */ L(() => q(t).Enabled === !1 || q(t).Locked), r = /* @__PURE__ */ L(() => q(u)[q(t).Id] ?? 0);
		var i = ix();
		let a;
		var o = U(H(i), 2), s = H(o), c = ov(s, !0), l = U(s, 2), d = (e) => {
			var n = $b(), r = ov(n, !0);
			W(() => X(r, q(t).Description)), Y(e, n);
		}, f = (e) => {
			Y(e, ex());
		};
		Z(l, (e) => {
			q(t).Description ? e(d) : q(t).Root || e(f, 1);
		}), P(o);
		var p = U(o, 2), m = (e) => {
			Y(e, tx());
		};
		Z(p, (e) => {
			q(n) && e(m);
		});
		var h = U(p, 2), g = (e) => {
			var t = nx(), n = ov(t);
			W(() => X(n, `${q(r) ?? ""}
            ${q(r) === 1 ? "Mandant" : "Mandanten"}`)), Y(e, t);
		};
		Z(h, (e) => {
			q(r) > 0 && e(g);
		});
		var _ = U(h, 2), v = (e) => {
			qb(e, {
				size: 36,
				iconSize: 20,
				variant: "primary",
				icon: "check",
				title: "Mandant übernehmen",
				onclick: (e) => S(e, q(t))
			});
		};
		Z(_, (e) => {
			q(t).Root && !q(n) && e(v);
		});
		var y = U(_, 2), b = (e) => {
			Y(e, rx());
		};
		Z(y, (e) => {
			q(r) > 0 && e(b);
		}), P(i), W(() => {
			a = sb(i, 1, "flex items-center gap-3 border-b border-row-line px-4 py-[10px] transition-colors last:border-b-0 hover:bg-row-hover", null, a, {
				"cursor-pointer": !q(n),
				"opacity-50": q(n)
			}), X(c, q(t)?.Name);
		}), vy("click", i, () => !q(n) && x(q(t))), Y(e, i);
	});
	var me = U(w, 2), he = (e) => {
		Y(e, ax());
	};
	return Z(me, (e) => {
		q(s).length === 0 && e(he);
	}), P(pe), P(C), vb(le, () => q(c), (e) => V(c, e)), Y(e, C), I(ee);
}
yy(["click"]), $(sx, {
	allowBack: {},
	ontenantSelected: {},
	onback: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-meta.ts
var cx = {
	icon: "category",
	singular: "Eintrag",
	plural: "Einträge"
}, lx = {
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
function ux(e) {
	return lx[e] ?? cx;
}
//#endregion
//#region node_modules/@ngneat/elf/index.esm.js
function dx(...e) {
	let t = {
		config: {},
		state: {}
	};
	for (let { config: n, props: r } of e) Object.assign(t.config, n), Object.assign(t.state, r);
	return t;
}
var fx = new Ii(!1), px = fx.asObservable().pipe(Xa((e) => !e), to(1)), mx = {};
new class {
	registerPreStoreUpdate(e) {
		mx.preStoreUpdate = e;
	}
	registerPreStateInit(e) {
		mx.preStateInit = e;
	}
}();
var hx = /* @__PURE__ */ new Map(), gx = new Pi();
gx.asObservable();
function _x(e) {
	hx.set(e.name, e), gx.next({
		type: "add",
		store: e
	});
}
function vx(e) {
	hx.delete(e.name), gx.next({
		type: "remove",
		store: e
	});
}
function yx() {
	return hx;
}
var bx = [];
function xx(e) {
	bx.push(e);
}
function Sx(e) {
	bx.length && bx.forEach((t) => e.next(t)), bx = [];
}
var Cx = class extends Ii {
	constructor(e) {
		super(e.state), this.storeDef = e, this.initialState = void 0, this.state = void 0, this.batchInProgress = !1, this.events = new Pi(), this.context = {
			config: this.getConfig(),
			setEvent: (e) => {
				xx(e);
			}
		}, this.events$ = this.events.asObservable(), this.state = this.getInitialState(e.state), this.initialState = this.getValue(), _x(this);
	}
	get name() {
		return this.storeDef.name;
	}
	getInitialState(e) {
		return mx.preStateInit ? mx.preStateInit(e, this.name) : e;
	}
	getConfig() {
		return this.storeDef.config;
	}
	query(e) {
		return e(this.getValue());
	}
	update(...e) {
		let t = this.getValue(), n = e.reduce((e, t) => (e = t(e, this.context), e), t);
		mx.preStoreUpdate && (n = mx.preStoreUpdate(t, n, this.name)), n !== t && (this.state = n, fx.getValue() ? this.batchInProgress || (this.batchInProgress = !0, px.subscribe(() => {
			super.next(this.state), Sx(this.events), this.batchInProgress = !1;
		})) : (super.next(this.state), Sx(this.events)));
	}
	getValue() {
		return this.state;
	}
	reset() {
		this.update(() => this.initialState);
	}
	combine(e) {
		let t = !0, n = {};
		return new Ti((r) => {
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
		vx(this), this.reset();
	}
	next(e) {
		this.update(() => e);
	}
	error() {}
	complete() {}
};
function wx(e, ...t) {
	let { state: n, config: r } = dx(...t), { name: i } = e;
	return new Cx({
		name: i,
		state: n,
		config: r
	});
}
function Tx(e) {
	return {
		props: e,
		config: void 0
	};
}
//#endregion
//#region node_modules/@ngneat/elf-persist-state/index.esm.js
function Ex(e, t) {
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
		initialized$: Ta(!1),
		unsubscribe() {}
	};
	let { storage: r } = t, i = new Ri(1), a = wa(r.getItem(n.key)).subscribe((t) => {
		t && e.update((e) => n.preStoreInit({
			...e,
			...t
		})), i.next(!0), i.complete();
	}), o = n.source(e).pipe(uo(1), fo((t) => {
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
function Dx(e) {
	if (e) return {
		getItem(t) {
			let n = e.getItem(t);
			return Ta(n && JSON.parse(n));
		},
		setItem(t, n) {
			return e.setItem(t, JSON.stringify(n)), Ta(!0);
		},
		removeItem(t) {
			return e.removeItem(t), Ta(!0);
		}
	};
}
var Ox = Dx((() => {
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
var kx = i_(r.Signal), { config: Ax, state: jx } = dx(Tx({
	queryWithSubGroups: !0,
	selectedTenant: null,
	pageSize: 25
})), Mx = wx({ name: "entity-select-selection" }, Tx({ selectedEntities: [] })), Nx = new Cx({
	state: jx,
	config: Ax,
	name: "entity-select-global"
});
Ex(Nx, {
	key: "entity-select-global",
	storage: Ox
});
var Px = (e) => {
	let t = yx().get(`entity-select-type-${kx}`);
	if (t) return t;
	let { state: n, config: r } = dx(Tx({
		filter: null,
		selectedGroup: null,
		lastSelectedEntities: []
	}));
	return new Cx({
		state: n,
		config: r,
		name: `entity-select-type-${kx}`
	});
}, Fx = /* @__PURE__ */ J("<span class=\"material-symbols-rounded w-4 select-none text-[16px]\"> </span>"), Ix = /* @__PURE__ */ J("<div class=\"pl-3\"></div>"), Lx = /* @__PURE__ */ J("<div><div><!> <div class=\"flex-1 truncate\"> </div></div> <!></div>");
function Rx(e, t) {
	F(t, !0);
	let n = Hb(_p), i = Q(t, "group", 7), a = Q(t, "expanded", 15, !1), o = Q(t, "entityType", 7), s = Q(t, "search", 7, ""), c = /* @__PURE__ */ B(X_([])), l = /* @__PURE__ */ B(!1), u = new Pi(), d = Px(o()), f = /* @__PURE__ */ L(() => s() ? q(c).filter((e) => e.Name?.Value?.toLowerCase().includes(s().toLowerCase())) : q(c));
	d.pipe(po(u), ao("selectedGroup")).subscribe((e) => {
		V(l, e.selectedGroup?.Id === i()?.Id), i() && e.selectedGroup?.Path?.includes(i().Id) && a(!0);
	});
	async function p() {
		try {
			V(c, (await n.queryConfiguration(r.Group, { GroupId: i().Id })).data, !0);
		} catch (e) {
			console.error(e);
		}
	}
	vv(() => {
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
			i(e), z();
		},
		get expanded() {
			return a();
		},
		set expanded(e = !1) {
			a(e), z();
		},
		get entityType() {
			return o();
		},
		set entityType(e) {
			o(e), z();
		},
		get search() {
			return s();
		},
		set search(e = "") {
			s(e), z();
		}
	}, _ = Lx(), v = H(_);
	let y;
	var b = H(v), x = (e) => {
		var t = Fx(), n = ov(t, !0);
		W(() => X(n, a() ? "expand_more" : "chevron_right")), vy("click", t, (e) => m(e)), Y(e, t);
	};
	Z(b, (e) => {
		q(c).length > 0 && e(x);
	});
	var S = ov(U(b, 2), !0);
	P(v);
	var ee = U(v, 2), C = (e) => {
		var t = Ix();
		Jy(t, 21, () => q(f), (e) => e.Id, (e, t) => {
			Rx(e, {
				get group() {
					return q(t);
				},
				get entityType() {
					return o();
				},
				get search() {
					return s();
				}
			});
		}), P(t), Y(e, t);
	};
	return Z(ee, (e) => {
		a() && e(C);
	}), P(_), W(() => {
		y = sb(v, 1, "flex cursor-pointer items-center gap-[6px] rounded-control border-l-[3px] border-transparent py-2 pr-[10px] text-cell transition-colors", null, y, {
			"pl-[10px]": q(c).length > 0,
			"pl-[26px]": q(c).length === 0,
			"text-ink-secondary": !q(l),
			"hover:bg-neutral-hover": !q(l),
			"bg-primary-tint": q(l),
			"!border-primary": q(l),
			"text-ink": q(l),
			"font-medium": q(l)
		}), X(S, i()?.Name?.Value);
	}), vy("click", v, () => h()), Y(e, _), I(g);
}
yy(["click"]), $(Rx, {
	group: {},
	expanded: {},
	entityType: {},
	search: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/checkbox/Checkbox.svelte
var zx = /* @__PURE__ */ J("<span class=\"material-symbols-rounded text-on-primary\"> </span>"), Bx = /* @__PURE__ */ J("<div class=\"ml-2 text-cell text-ink\"> </div>"), Vx = /* @__PURE__ */ J("<div><div><!></div> <!></div>");
function Hx(e, t) {
	F(t, !0);
	let n = Q(t, "readonly", 7, !1), r = Q(t, "label", 7, ""), i = Q(t, "checked", 15, !1), a = Q(t, "indeterminate", 7, !1), o = Q(t, "size", 7, 16), s = Q(t, "container$class", 7, ""), c = Q(t, "onchange", 7), l = /* @__PURE__ */ L(() => a() && !i()), u = /* @__PURE__ */ L(() => i() || q(l));
	function d() {
		n() || (i(!i()), c()?.(i()));
	}
	var f = {
		get readonly() {
			return n();
		},
		set readonly(e = !1) {
			n(e), z();
		},
		get label() {
			return r();
		},
		set label(e = "") {
			r(e), z();
		},
		get checked() {
			return i();
		},
		set checked(e = !1) {
			i(e), z();
		},
		get indeterminate() {
			return a();
		},
		set indeterminate(e = !1) {
			a(e), z();
		},
		get size() {
			return o();
		},
		set size(e = 16) {
			o(e), z();
		},
		get container$class() {
			return s();
		},
		set container$class(e = "") {
			s(e), z();
		},
		get onchange() {
			return c();
		},
		set onchange(e) {
			c(e), z();
		}
	}, p = Vx(), m = H(p);
	let h;
	var g = H(m), _ = (e) => {
		var t = zx(), n = ov(t, !0);
		W(() => {
			lb(t, `font-size: ${o() - 2}px;`), X(n, q(l) ? "remove" : "check");
		}), Y(e, t);
	};
	Z(g, (e) => {
		q(u) && e(_);
	}), P(m);
	var v = U(m, 2), y = (e) => {
		var t = Bx(), n = ov(t, !0);
		W(() => X(n, r())), Y(e, t);
	};
	return Z(v, (e) => {
		r() && e(y);
	}), P(p), W(() => {
		sb(p, 1, `flex items-center ${n() ? "cursor-default" : "cursor-pointer"} ${s() ?? ""}`), h = sb(m, 1, "flex shrink-0 items-center justify-center rounded-[3px] transition-colors", null, h, {
			"border-2": !q(u),
			"border-checkbox-border": !q(u) && !n(),
			"border-checkbox-border-disabled": !q(u) && n(),
			"bg-select": q(u) && !n(),
			"bg-ink-disabled": q(u) && n()
		}), lb(m, `height: ${o() ?? ""}px; width: ${o() ?? ""}px;`);
	}), vy("click", p, () => d()), Y(e, p), I(f);
}
yy(["click"]), $(Hx, {
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
var Ux = /* @__PURE__ */ J("<div class=\"min-h-0 flex-1 overflow-auto px-[10px] pb-[10px] pt-[2px]\"><!></div>"), Wx = /* @__PURE__ */ J("<div class=\"flex-1\"></div>"), Gx = /* @__PURE__ */ J("<button type=\"button\" class=\"cursor-pointer text-[12px] text-primary hover:underline\">alle übernehmen</button>"), Kx = /* @__PURE__ */ J("<div class=\"flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-[7px] transition-colors hover:bg-neutral-hover\"><!> <div class=\"min-w-0 flex-1\"><div class=\"truncate text-cell text-ink\"> </div> <div class=\"truncate text-sub text-ink-tertiary\"> </div></div></div>"), qx = /* @__PURE__ */ J("<div class=\"max-h-[45%] flex-none overflow-y-auto border-t border-line px-[10px] pb-3 pt-[10px]\"><div class=\"mb-1 flex items-center justify-between\"><div class=\"text-meta text-ink-secondary\">Zuletzt ausgewählt</div> <!></div> <!></div>"), Jx = /* @__PURE__ */ J("<div class=\"flex h-full min-h-0 w-[280px] flex-none flex-col overflow-hidden border-r border-line\"><div class=\"flex-none px-3 pb-[10px] pt-3\"><div class=\"flex gap-2\"><button type=\"button\" class=\"flex h-[44px] flex-1 items-center gap-2 overflow-hidden rounded-control border border-line pl-[10px] pr-2 text-left transition-colors hover:border-line-strong\"><span class=\"material-symbols-rounded select-none text-[18px] text-ink-secondary\">domain</span> <div class=\"min-w-0 flex-1\"><div class=\"text-label leading-[1.2] text-ink-tertiary\">Mandant</div> <div class=\"truncate text-cell leading-[1.2] text-ink\"> </div></div> <span class=\"material-symbols-rounded select-none text-[16px] text-ink-secondary\">unfold_more</span></button> <button type=\"button\" title=\"Mandant suchen\" class=\"flex h-[44px] w-[44px] flex-none items-center justify-center rounded-control border border-line transition-colors hover:bg-primary-tint-subtle\"><span class=\"material-symbols-rounded select-none text-[20px] text-primary\">search</span></button></div> <div class=\"mt-[10px] flex h-10 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Suche\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div></div> <!> <!></div>");
function Yx(e, t) {
	F(t, !0);
	let n = Hb(_p), i = Hb(xp), a = Q(t, "entityType", 7), o = Q(t, "selectedTenant", 7), s = Q(t, "selectMultiple", 7, !1), c = Q(t, "onchangeTenant", 7), l = /* @__PURE__ */ B(null), u = /* @__PURE__ */ B(X_([])), d = /* @__PURE__ */ B(""), f = [], p = /* @__PURE__ */ B(X_({})), m = new Pi(), h = Px(a());
	h.pipe(po(m)).subscribe((e) => {
		_(e.lastSelectedEntities ?? []);
	}), Mx.pipe(po(m)).subscribe((e) => {
		f = e.selectedEntities, V(p, {}, !0);
		for (let e of f) q(p)[e.Id] = !0;
	});
	async function g(e) {
		try {
			V(l, await n.getEntityById(r.Group, e), !0), (!h.value?.selectedGroup || h.value.selectedGroup.Id != q(l).Id) && h.update((e) => ({
				...e,
				selectedGroup: q(l)
			}));
		} catch (e) {
			console.error(e);
		}
	}
	async function _(e) {
		if (e.length === q(u).length && e.every((e, t) => q(u)[t]?.id === e)) return;
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
		V(u, t.filter((e) => e != null), !0);
	}
	function v(e) {
		f = s() ? q(p)[e.id] ? f.filter((t) => t.Id !== e.id) : [...f, e.entity] : [e.entity], Mx.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function y() {
		let e = q(u).filter((e) => !q(p)[e.id]).map((e) => e.entity);
		Mx.update((t) => ({
			...t,
			selectedEntities: s() ? [...f, ...e] : f
		}));
	}
	vv(() => {
		o() && o().Root && g(o().Root);
	}), kb(() => {
		m.next(), m.complete();
	});
	var b = {
		get entityType() {
			return a();
		},
		set entityType(e) {
			a(e), z();
		},
		get selectedTenant() {
			return o();
		},
		set selectedTenant(e) {
			o(e), z();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), z();
		},
		get onchangeTenant() {
			return c();
		},
		set onchangeTenant(e) {
			c(e), z();
		}
	}, x = Jx(), S = H(x), ee = H(S), C = H(ee), te = U(H(C), 2), ne = ov(U(H(te), 2), !0);
	P(te), xg(2), P(C);
	var re = U(C, 2);
	P(ee);
	var ie = U(ee, 2), ae = H(ie);
	pb(ae), xg(2), P(ie), P(S);
	var oe = U(S, 2), se = (e) => {
		var t = Ux();
		Rx(H(t), {
			get group() {
				return q(l);
			},
			expanded: !0,
			get entityType() {
				return a();
			},
			get search() {
				return q(d);
			}
		}), P(t), Y(e, t);
	}, ce = (e) => {
		Y(e, Wx());
	};
	Z(oe, (e) => {
		q(l) ? e(se) : e(ce, -1);
	});
	var le = U(oe, 2), ue = (e) => {
		var t = qx(), n = H(t), r = U(H(n), 2), i = (e) => {
			var t = Gx();
			vy("click", t, () => y()), Y(e, t);
		};
		Z(r, (e) => {
			s() && e(i);
		}), P(n), Jy(U(n, 2), 17, () => q(u), (e) => e.id, (e, t) => {
			var n = Kx(), r = H(n), i = (e) => {
				Hx(e, {
					readonly: !0,
					get checked() {
						return q(p)[q(t).id];
					}
				});
			};
			Z(r, (e) => {
				s() && e(i);
			});
			var a = U(r, 2), o = H(a), c = ov(o, !0), l = ov(U(o, 2), !0);
			P(a), P(n), W(() => {
				X(c, q(t).name), X(l, q(t).group);
			}), vy("click", n, () => v(q(t))), Y(e, n);
		}), P(t), Y(e, t);
	};
	return Z(le, (e) => {
		q(u).length > 0 && e(ue);
	}), P(x), W(() => X(ne, o()?.Name ?? "")), vy("click", C, () => c()?.()), vy("click", re, () => c()?.()), vb(ae, () => q(d), (e) => V(d, e)), Y(e, x), I(b);
}
yy(["click"]), $(Yx, {
	entityType: {},
	selectedTenant: {},
	selectMultiple: {},
	onchangeTenant: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataCell.svelte
var Xx = /* @__PURE__ */ J("<div><!></div>");
function Zx(e, t) {
	F(t, !0);
	let n = Q(t, "container$class", 7, ""), r = Q(t, "children", 7);
	var i = {
		get container$class() {
			return n();
		},
		set container$class(e = "") {
			n(e), z();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), z();
		}
	}, a = Xx();
	return eb(H(a), () => r() ?? Ih), P(a), W(() => sb(a, 1, `overflow-hidden ${n() ?? ""}`)), Y(e, a), I(i);
}
$(Zx, {
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataRow.svelte
var Qx = /* @__PURE__ */ J("<div><!></div>"), $x = {
	hash: "svelte-1f6rjo1",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tablebody-flexrow {display:flex;height:38px;width:100%;min-width:fit-content;cursor:pointer;border-bottom:1px solid var(--color-row-line);font-size:var(--text-cell);color:var(--color-ink);}.audako-tablebody-flexrow:hover {background:var(--color-row-hover);}.audako-tablebody-flexrow-active,\n  .audako-tablebody-flexrow-active:hover {background:var(--color-row-active);}.audako-tablebody-flexrow-blocked,\n  .audako-tablebody-flexrow-blocked:hover {background:var(--color-danger-tint);color:var(--color-danger);cursor:default;}.audako-tablebody-flexrow > * {flex:1;height:100%;min-width:0;display:flex;align-items:center;}.audako-tablebody-flexrow > * + * {padding-left:12px;}.audako-tablebody-flexrow > *:first-child {padding-left:16px;}.audako-tablebody-flexrow > *:last-child {padding-right:16px;}"
};
function eS(e, t) {
	F(t, !0), tb(e, $x);
	let n = Q(t, "active", 7, !1), r = Q(t, "blocked", 7, !1), i = Q(t, "flexrow$class", 7, ""), a = Q(t, "onclick", 7), o = Q(t, "children", 7);
	function s(e) {
		r() || a()?.(e);
	}
	var c = {
		get active() {
			return n();
		},
		set active(e = !1) {
			n(e), z();
		},
		get blocked() {
			return r();
		},
		set blocked(e = !1) {
			r(e), z();
		},
		get flexrow$class() {
			return i();
		},
		set flexrow$class(e = "") {
			i(e), z();
		},
		get onclick() {
			return a();
		},
		set onclick(e) {
			a(e), z();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), z();
		}
	}, l = Qx();
	let u;
	return eb(H(l), () => o() ?? Ih), P(l), W(() => u = sb(l, 1, `audako-tablebody-flexrow ${i() ?? ""}`, null, u, {
		"audako-tablebody-flexrow-active": n() && !r(),
		"audako-tablebody-flexrow-blocked": r()
	})), vy("click", l, (e) => s(e)), Y(e, l), I(c);
}
yy(["click"]), $(eS, {
	active: {},
	blocked: {},
	flexrow$class: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderCell.svelte
var tS = /* @__PURE__ */ J("<span> </span>"), nS = /* @__PURE__ */ J("<div><div class=\"min-w-0 truncate\"><!></div> <!></div>");
function rS(e, t) {
	F(t, !0);
	let n = Q(t, "id", 7), r = Q(t, "sortable", 7, !1), i = Q(t, "container$class", 7, ""), a = Q(t, "children", 7), o = /* @__PURE__ */ B(null), s = Wg("audako:table:sort"), c = s.subscribe((e) => {
		V(o, n() && e?.active === n() ? e.direction : null, !0);
	});
	function l() {
		r() && (q(o) === "asc" ? V(o, "desc") : q(o) === "desc" ? V(o, null) : V(o, "asc"), s.set(q(o) ? {
			active: n(),
			direction: q(o)
		} : null));
	}
	kb(c);
	var u = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), z();
		},
		get sortable() {
			return r();
		},
		set sortable(e = !1) {
			r(e), z();
		},
		get container$class() {
			return i();
		},
		set container$class(e = "") {
			i(e), z();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), z();
		}
	}, d = nS(), f = H(d);
	eb(H(f), () => a() ?? Ih), P(f);
	var p = U(f, 2), m = (e) => {
		var t = tS();
		let n;
		var r = ov(t, !0);
		W(() => {
			n = sb(t, 1, "material-symbols-rounded text-[14px] transition-opacity", null, n, { "opacity-0": q(o) == null }), X(r, q(o) === "desc" ? "arrow_downward" : "arrow_upward");
		}), Y(e, t);
	};
	return Z(p, (e) => {
		r() && e(m);
	}), P(d), W(() => sb(d, 1, `flex h-full items-center gap-1 ${r() ? "cursor-pointer" : "cursor-default"} ${i() ?? ""}`)), vy("click", d, () => l()), Y(e, d), I(u);
}
yy(["click"]), $(rS, {
	id: {},
	sortable: {},
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderRow.svelte
var iS = /* @__PURE__ */ J("<div class=\"audako-tableheader-flexrow\"><!></div>"), aS = {
	hash: "svelte-11mz2do",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tableheader-flexrow {display:flex;height:40px;min-width:fit-content;position:sticky;top:0;z-index:1;background:var(--color-surface);border-bottom:1px solid var(--color-line);font-size:var(--text-cell);color:var(--color-ink-secondary);}.audako-tableheader-flexrow > * {flex:1;height:100%;min-width:0;display:flex;align-items:center;}\n\n  /* The vertical rules between header cells are what make the header read\n     like the production table. */.audako-tableheader-flexrow > * + * {padding-left:12px;border-left:1px solid var(--color-line);}.audako-tableheader-flexrow > *:first-child {padding-left:16px;}.audako-tableheader-flexrow > *:last-child {padding-right:16px;}"
};
function oS(e, t) {
	F(t, !0), tb(e, aS);
	let n = Q(t, "children", 7);
	var r = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), z();
		}
	}, i = iS();
	return eb(H(i), () => n() ?? Ih), P(i), Y(e, i), I(r);
}
$(oS, { children: {} }, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/popup-container/PopupContainer.svelte
var sS = /* @__PURE__ */ J("<div class=\"popup-element-wrapper\" style=\"position: absolute\"><div style=\"display: none\"><!></div></div>");
function cS(e, t) {
	F(t, !0);
	let n = Q(t, "closeOnClick", 7, !0), r = Q(t, "closeOnEscape", 7, !0), i = Q(t, "sizeToAnchor", 7, !1), a = Q(t, "anchorElement", 7, null), o = Q(t, "position", 7, null), s = Q(t, "popupClass", 7, ""), c = Q(t, "preferedVerticalAlignment", 7, "top"), l = Q(t, "preferedHorizontalAlignment", 7, "left"), u = Q(t, "positionOffset", 23, () => ({
		x: 0,
		y: 0
	})), d = Q(t, "children", 7), f = Hb("PopupContainerService", new Bb(document.body)), p, m, h;
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
			n(e), z();
		},
		get closeOnEscape() {
			return r();
		},
		set closeOnEscape(e = !0) {
			r(e), z();
		},
		get sizeToAnchor() {
			return i();
		},
		set sizeToAnchor(e = !1) {
			i(e), z();
		},
		get anchorElement() {
			return a();
		},
		set anchorElement(e = null) {
			a(e), z();
		},
		get position() {
			return o();
		},
		set position(e = null) {
			o(e), z();
		},
		get popupClass() {
			return s();
		},
		set popupClass(e = "") {
			s(e), z();
		},
		get preferedVerticalAlignment() {
			return c();
		},
		set preferedVerticalAlignment(e = "top") {
			c(e), z();
		},
		get preferedHorizontalAlignment() {
			return l();
		},
		set preferedHorizontalAlignment(e = "left") {
			l(e), z();
		},
		get positionOffset() {
			return u();
		},
		set positionOffset(e = {
			x: 0,
			y: 0
		}) {
			u(e), z();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), z();
		}
	}, b = sS(), x = H(b);
	return eb(H(x), () => d() ?? Ih), P(x), Sb(x, (e) => p = e, () => p), P(b), Sb(b, (e) => h = e, () => h), W(() => sb(x, 1, `absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${s() ?? ""}`)), Y(e, b), I(y);
}
$(cS, {
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
var lS = /* @__PURE__ */ J("<div class=\"absolute left-0 top-[50%] h-[20px] w-[3px] translate-y-[-50%] rounded-full bg-primary\"></div>"), uS = /* @__PURE__ */ J("<div><!> <!> <span><!></span></div>");
function dS(e, t) {
	F(t, !0);
	let n = Q(t, "value", 7, null), r = Q(t, "children", 7), i = /* @__PURE__ */ B(!1), a = null, o = null, s, c, l = Wg("audako:select:multiple"), u = Wg("audako:select:close"), d = Wg("audako:select:value"), f = Wg("audako:select:value:changed"), p = Wg("audako:select:displayValue");
	Ob(() => {
		c = s.innerText?.trim(), p.subscribe((e) => {
			o = e;
		}), d.subscribe((e) => {
			a = e, l ? V(i, e?.includes(n()), !0) : V(i, e === n()), h();
		});
	});
	function m(e) {
		e.preventDefault(), e.stopPropagation();
		let t = null;
		l ? t = q(i) ? a.filter((e) => e !== n()) : Array.isArray(a) ? [...a, n()] : [n()] : (t = n(), u()), d.set(t), f.next(t);
	}
	function h() {
		if (l) {
			let e = o;
			q(i) && !e.includes(c) ? p.set([...e, c]) : !q(i) && e.includes(c) && p.set(e.filter((e) => e !== c));
		} else q(i) && p.set(c);
	}
	var g = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), z();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), z();
		}
	}, _ = uS(), v = H(_), y = (e) => {
		Y(e, lS());
	};
	Z(v, (e) => {
		q(i) && !l && e(y);
	});
	var b = U(v, 2), x = (e) => {
		Hx(e, {
			readonly: !0,
			get checked() {
				return q(i);
			}
		});
	};
	Z(b, (e) => {
		l && e(x);
	});
	var S = U(b, 2);
	return eb(H(S), () => r() ?? Ih), P(S), Sb(S, (e) => s = e, () => s), P(_), W(() => sb(_, 1, `relative flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-2 text-cell hover:bg-neutral-hover ${q(i) && !l ? "bg-neutral-hover" : ""}`)), vy("click", _, m), Y(e, _), I(g);
}
yy(["click"]), $(dS, {
	value: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/select/Select.svelte
var fS = /* @__PURE__ */ J("<!> <!>", 1), pS = /* @__PURE__ */ J("<div><!> <input readonly=\"\"/> <div>arrow_drop_down</div></div> <!>", 1);
function mS(e, t) {
	F(t, !0);
	let n = Q(t, "value", 15, null), r = Q(t, "multiple", 7, !1), i = Q(t, "placeholder", 7, null), a = Q(t, "textfield$class", 7, ""), o = Q(t, "container$class", 7, ""), s = Q(t, "suffixIcon$class", 7, ""), c = Q(t, "options", 23, () => []), l = Q(t, "disabled", 7, !1), u = Q(t, "onvalueChanged", 7), d = Q(t, "children", 7), f = Q(t, "prefix", 7), p = /* @__PURE__ */ B(""), m = /* @__PURE__ */ B(null), h, g = i_(n()), _ = g.subscribe((e) => {
		n(e);
	}), v = new Pi(), y = v.subscribe((e) => {
		u()?.(e);
	}), b = i_(r() ? [] : ""), x = b.subscribe((e) => {
		ee(e);
	});
	function S(e) {
		e && (e.preventDefault(), e.stopPropagation()), !l() && h?.openPopup();
	}
	function ee(e) {
		if (e == null || e.length === 0) {
			V(p, null);
			return;
		}
		Array.isArray(e) ? V(p, e.join(", "), !0) : V(p, e, !0);
	}
	Gg("audako:select:multiple", r()), Gg("audako:select:value", g), Gg("audako:select:value:changed", v), Gg("audako:select:displayValue", b), Gg("audako:select:close", () => h.closePopup()), kb(() => {
		_(), y.unsubscribe(), x();
	});
	var C = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), z();
		},
		get multiple() {
			return r();
		},
		set multiple(e = !1) {
			r(e), z();
		},
		get placeholder() {
			return i();
		},
		set placeholder(e = null) {
			i(e), z();
		},
		get textfield$class() {
			return a();
		},
		set textfield$class(e = "") {
			a(e), z();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), z();
		},
		get suffixIcon$class() {
			return s();
		},
		set suffixIcon$class(e = "") {
			s(e), z();
		},
		get options() {
			return c();
		},
		set options(e = []) {
			c(e), z();
		},
		get disabled() {
			return l();
		},
		set disabled(e = !1) {
			l(e), z();
		},
		get onvalueChanged() {
			return u();
		},
		set onvalueChanged(e) {
			u(e), z();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), z();
		},
		get prefix() {
			return f();
		},
		set prefix(e) {
			f(e), z();
		}
	}, te = pS(), ne = av(te), re = H(ne);
	eb(re, () => f() ?? Ih);
	var ie = U(re, 2);
	pb(ie), Sb(ie, (e) => V(m, e), () => q(m));
	var ae = U(ie, 2);
	return P(ne), Sb(cS(U(ne, 2), {
		sizeToAnchor: !0,
		popupClass: "max-h-[400px] ",
		get anchorElement() {
			return q(m);
		},
		children: (e, t) => {
			var n = fS(), r = av(n);
			eb(r, () => d() ?? Ih), Jy(U(r, 2), 17, c, Wy, (e, t) => {
				dS(e, {
					get value() {
						return q(t).value;
					},
					children: (e, n) => {
						xg();
						var r = Dy();
						W(() => X(r, q(t).label)), Y(e, r);
					},
					$$slots: { default: !0 }
				});
			}), Y(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => h = e, () => h), W(() => {
		sb(ne, 1, `relative flex w-full cursor-pointer items-center rounded-control border border-line px-2 text-cell text-ink transition-colors focus-within:border-primary ${o() ?? ""}`), ie.disabled = l(), mb(ie, "placeholder", i()), sb(ie, 1, `w-full outline-none cursor-pointer ${a() ?? ""}`), sb(ae, 1, `material-symbols-rounded pointer-events-none select-none text-[16px] text-ink-secondary ${s() ?? ""}`);
	}), vy("click", ne, S), vb(ie, () => q(p), (e) => V(p, e)), Y(e, te), I(C);
}
yy(["click"]), $(mS, {
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
var hS = /* @__PURE__ */ J("<div><span class=\"material-symbols-rounded select-none text-[18px]\"> </span></div>"), gS = /* @__PURE__ */ J("<div class=\"flex h-[44px] w-full items-center justify-end gap-[10px] text-[13px] text-ink-secondary\"><div>Zeilen</div> <div class=\"w-[70px]\"><!></div> <div class=\"whitespace-nowrap\"> </div> <div class=\"flex h-[30px] items-stretch overflow-hidden rounded-control border border-line\"><!> <!> <!> <!></div></div>");
function _S(e, t) {
	F(t, !0);
	let n = Q(t, "pageIndex", 15, 0), r = Q(t, "pageSize", 15, 25), i = Q(t, "totalCount", 7), a = Q(t, "pageSizeOptions", 23, () => [
		25,
		50,
		100
	]), o = Q(t, "onchangePage", 7), s = /* @__PURE__ */ L(() => Math.max(Math.ceil(i() / r()) - 1, 0)), c = /* @__PURE__ */ L(() => i() === 0 ? 0 : n() * r() + 1), l = /* @__PURE__ */ L(() => Math.min((n() + 1) * r(), i())), u = /* @__PURE__ */ L(() => n() === 0), d = /* @__PURE__ */ L(() => n() >= q(s));
	function f(e) {
		n(n() + e), h();
	}
	function p(e) {
		n(e), h();
	}
	function m(e) {
		r(e), n(Math.min(n(), q(s))), h();
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
			n(e), z();
		},
		get pageSize() {
			return r();
		},
		set pageSize(e = 25) {
			r(e), z();
		},
		get totalCount() {
			return i();
		},
		set totalCount(e) {
			i(e), z();
		},
		get pageSizeOptions() {
			return a();
		},
		set pageSizeOptions(e = [
			25,
			50,
			100
		]) {
			a(e), z();
		},
		get onchangePage() {
			return o();
		},
		set onchangePage(e) {
			o(e), z();
		}
	}, _ = gS(), v = U(H(_), 2);
	mS(H(v), {
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
			var n = Oy();
			Jy(av(n), 17, a, Wy, (e, t) => {
				dS(e, {
					get value() {
						return q(t);
					},
					children: (e, n) => {
						xg();
						var r = Dy();
						W(() => X(r, q(t))), Y(e, r);
					},
					$$slots: { default: !0 }
				});
			}), Y(e, n);
		},
		$$slots: { default: !0 }
	}), P(v);
	var y = U(v, 2), b = ov(y), x = U(y, 2);
	{
		let e = (e, t = Ih, n = Ih, r = Ih) => {
			var i = hS();
			let a;
			var o = ov(H(i), !0);
			P(i), W(() => {
				a = sb(i, 1, "flex w-[34px] items-center justify-center border-l border-row-line first:border-l-0 transition-colors", null, a, {
					"cursor-pointer": !n(),
					"cursor-default": n(),
					"text-ink-secondary": !n(),
					"text-ink-disabled": n(),
					"hover:bg-neutral-hover": !n()
				}), X(o, t());
			}), vy("click", i, () => !n() && r()()), Y(e, i);
		};
		var S = H(x);
		e(S, () => "first_page", () => q(u), () => () => p(0));
		var ee = U(S, 2);
		e(ee, () => "navigate_before", () => q(u), () => () => f(-1));
		var C = U(ee, 2);
		e(C, () => "navigate_next", () => q(d), () => () => f(1)), e(U(C, 2), () => "last_page", () => q(d), () => () => p(q(s))), P(x);
	}
	return P(_), W(() => X(b, `${q(c) ?? ""} - ${q(l) ?? ""} / ${i() ?? ""}`)), Y(e, _), I(g);
}
yy(["click"]), $(_S, {
	pageIndex: {},
	pageSize: {},
	totalCount: {},
	pageSizeOptions: {},
	onchangePage: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/Table.svelte
var vS = /* @__PURE__ */ J("<div class=\"flex h-full flex-col\"><div><!></div> <!></div>");
function yS(e, t) {
	F(t, !0);
	let n = Q(t, "startSort", 7, null), r = Q(t, "container$class", 7, ""), i = Q(t, "onsort", 7), a = Q(t, "children", 7), o = Q(t, "pagination", 7), s = i_(n());
	Gg("audako:table:sort", s), kb(s.subscribe((e) => {
		i()?.(e);
	}));
	var c = {
		get startSort() {
			return n();
		},
		set startSort(e = null) {
			n(e), z();
		},
		get container$class() {
			return r();
		},
		set container$class(e = "") {
			r(e), z();
		},
		get onsort() {
			return i();
		},
		set onsort(e) {
			i(e), z();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), z();
		},
		get pagination() {
			return o();
		},
		set pagination(e) {
			o(e), z();
		}
	}, l = vS(), u = H(l);
	return eb(H(u), () => a() ?? Ih), P(u), eb(U(u, 2), () => o() ?? Ih), P(l), W(() => sb(u, 1, `relative w-full flex-1 overflow-auto rounded-dialog border border-line bg-surface ${r() ?? ""}`)), Y(e, l), I(c);
}
$(yS, {
	startSort: {},
	container$class: {},
	onsort: {},
	children: {},
	pagination: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/value-view/Led.svelte
var bS = /* @__PURE__ */ J("<div class=\"shrink-0 rounded-full\"></div>");
function xS(e, t) {
	F(t, !0);
	let n = Q(t, "color", 7, "#c1c1c1"), r = Q(t, "size", 7, "14px"), i = Q(t, "title", 7, null);
	var a = {
		get color() {
			return n();
		},
		set color(e = "#c1c1c1") {
			n(e), z();
		},
		get size() {
			return r();
		},
		set size(e = "14px") {
			r(e), z();
		},
		get title() {
			return i();
		},
		set title(e = null) {
			i(e), z();
		}
	}, o = bS();
	return W(() => {
		mb(o, "title", i()), lb(o, `height: ${r() ?? ""}; width: ${r() ?? ""}; background-color: ${(n() || "#c1c1c1") ?? ""}; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 12px inset;`);
	}), Y(e, o), I(a);
}
$(xS, {
	color: {},
	size: {},
	title: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/value-view/ValueView.svelte
var SS = /* @__PURE__ */ J("<span class=\"material-symbols-rounded select-none text-[18px] text-danger\" title=\"Keine Werte verfügbar\">warning</span>"), CS = /* @__PURE__ */ J("<span class=\"truncate\"> </span>");
function wS(e, t) {
	F(t, !0);
	let n = Q(t, "settings", 7, null), r = Q(t, "value", 7, null), i = Q(t, "ledSize", 7, "14px"), a = /* @__PURE__ */ L(() => r() != null && r().value !== null && r().value !== void 0 && r().value !== "null" && r().value !== ""), o = /* @__PURE__ */ L(() => q(a) ? Number(r().value) : NaN), s = /* @__PURE__ */ L(() => r()?.timestamp ? new Date(r().timestamp).toLocaleString("de-DE", {
		dateStyle: "medium",
		timeStyle: "medium"
	}) : null), c = /* @__PURE__ */ L(() => {
		if (!Number.isFinite(q(o))) return String(r()?.value ?? "");
		let e = n()?.decimalPlaces ?? 3;
		return q(o).toLocaleString("de-DE", {
			minimumFractionDigits: e,
			maximumFractionDigits: e
		});
	}), l = /* @__PURE__ */ L(() => Number.isFinite(q(o)) && q(o) >= 1);
	var u = {
		get settings() {
			return n();
		},
		set settings(e = null) {
			n(e), z();
		},
		get value() {
			return r();
		},
		set value(e = null) {
			r(e), z();
		},
		get ledSize() {
			return i();
		},
		set ledSize(e = "14px") {
			i(e), z();
		}
	}, d = Oy(), f = av(d), p = (e) => {
		var t = Oy(), o = av(t), u = (e) => {
			Y(e, SS());
		}, d = (e) => {
			{
				let t = /* @__PURE__ */ L(() => q(l) ? n().ledOnColor : n().ledOffColor), r = /* @__PURE__ */ L(() => (q(l) ? n().ledOnCaption : n().ledOffCaption) || q(s));
				xS(e, {
					get size() {
						return i();
					},
					get color() {
						return q(t);
					},
					get title() {
						return q(r);
					}
				});
			}
		}, f = (e) => {
			var t = CS(), r = ov(t);
			W(() => {
				mb(t, "title", q(s)), X(r, `${q(c) ?? ""}${n().unit ? ` ${n().unit}` : ""}`);
			}), Y(e, t);
		}, p = (e) => {
			var t = CS(), n = ov(t, !0);
			W(() => {
				mb(t, "title", q(s)), X(n, r().value);
			}), Y(e, t);
		};
		Z(o, (e) => {
			q(a) ? n().viewType === "led" ? e(d, 1) : n().viewType === "number" ? e(f, 2) : e(p, -1) : e(u);
		}), Y(e, t);
	};
	return Z(f, (e) => {
		n() && r() && e(p);
	}), Y(e, d), I(u);
}
$(wS, {
	settings: {},
	value: {},
	ledSize: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/value-view/value-view.types.ts
var TS = [ut.AnalogInput, ut.AnalogInOut], ES = [ut.DigitalInput, ut.DigitalInOut];
function DS(e) {
	let t = e, n = t?.Type?.Value, r = t?.Settings ?? {};
	return {
		viewType: TS.includes(n) || n === ut.Counter ? "number" : ES.includes(n) ? "led" : "text",
		decimalPlaces: r.DecimalPlaces ? r.DecimalPlaces.Value : 0,
		unit: r.Unit ? r.Unit.Value : null,
		ledOnCaption: r.DigitalTrueCaption ? r.DigitalTrueCaption.Value : null,
		ledOffCaption: r.DigitalFalseCaption ? r.DigitalFalseCaption.Value : null,
		ledOnColor: r.DigitalTrueColor ? r.DigitalTrueColor.Value : null,
		ledOffColor: r.DigitalFalseColor ? r.DigitalFalseColor.Value : null
	};
}
//#endregion
//#region src/components/entity-select/signal-format.ts
var OS = {
	[ut.AnalogInput]: "Analog",
	[ut.AnalogInOut]: "Analog E/A",
	[ut.DigitalInput]: "Digital",
	[ut.DigitalInOut]: "Digital E/A",
	[ut.Counter]: "Zähler",
	[ut.UniversalInput]: "Universal",
	[ut.UniversalInOut]: "Universal E/A"
};
function kS(e) {
	let t = e?.Type?.Value;
	return t ? OS[t] ?? t : "";
}
//#endregion
//#region src/components/entity-select/EntitySelectTable.svelte
var AS = /* @__PURE__ */ J("<!> <!>", 1), jS = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), MS = /* @__PURE__ */ J("<div class=\"audako-indeterminate-bar h-full w-full bg-primary\"></div>"), NS = /* @__PURE__ */ J("<div class=\"truncate\"> </div>"), PS = /* @__PURE__ */ J("<span class=\"truncate\"><!></span>"), FS = /* @__PURE__ */ J("<span class=\"truncate\"> </span>"), IS = /* @__PURE__ */ J("<button type=\"button\" class=\"cursor-pointer text-meta text-primary hover:underline\">Filter zurücksetzen</button>"), LS = /* @__PURE__ */ J("<div class=\"flex flex-col items-center gap-2 py-10\"><span class=\"material-symbols-rounded select-none text-[24px] text-ink-tertiary\">search_off</span> <div class=\"text-cell text-ink-secondary\"> </div> <!></div>"), RS = /* @__PURE__ */ J("<!> <div><!></div> <!> <!>", 1), zS = /* @__PURE__ */ J("<div class=\"flex h-full flex-col overflow-hidden\"><!></div>");
function BS(e, t) {
	F(t, !0);
	let n = Hb(_p), i = Hb(xp), a = Ub(Rm), o = Q(t, "entityType", 7), s = Q(t, "selectMultiple", 7, !1), c = Q(t, "additionalFilter", 7, null), l = Q(t, "totalCount", 15, 0), u = /* @__PURE__ */ B(X_([])), d = new Pi(), f = [], p = /* @__PURE__ */ B(X_({})), m = /* @__PURE__ */ B("unchecked"), h = /* @__PURE__ */ B(null), g, _, v = !1, y = /* @__PURE__ */ B(0), b = /* @__PURE__ */ B(25), x = /* @__PURE__ */ B(null), S = Px(o()), ee = Nx, C = !1, te = /* @__PURE__ */ B(!0), ne = /* @__PURE__ */ B(X_({})), re, ie = new Pi(), ae = /* @__PURE__ */ L(() => ux(o())), oe = /* @__PURE__ */ L(() => o() === r.Signal), se = /* @__PURE__ */ L(() => {
		if (q(x)?.active !== "Name") return q(u);
		let e = q(x).direction === "desc" ? -1 : 1;
		return [...q(u)].sort((t, n) => e * (t.Name?.Value ?? "").localeCompare(n.Name?.Value ?? "", "de", { sensitivity: "base" }));
	});
	Mx.pipe(po(ie)).subscribe((e) => {
		f = e.selectedEntities, pe(), de();
	}), Va([ee.asObservable(), S.asObservable()]).pipe(po(ie)).subscribe(([e, t]) => {
		_ = t.selectedGroup, g = t.selectedGroup?.Id, V(h, t.filter, !0), v = e.queryWithSubGroups, C = !0, V(y, 0), V(b, e.pageSize ?? 25, !0), d.next();
	});
	function ce() {
		let e = { $and: [] };
		v ? e.$and.push({ Path: g }) : e.$and.push({ GroupId: g }), q(h) && e.$and.push({ $or: [{ "Name.Value": {
			$regex: q(h),
			$options: "i"
		} }, { "Description.Value": {
			$regex: q(h),
			$options: "i"
		} }] }), c() && e.$and.push(c());
		let t = {
			limit: q(b),
			skip: q(y) * q(b)
		};
		return wa(n.queryConfiguration(o(), e, t));
	}
	function le(e) {
		s() ? (f.find((t) => t.Id === e.Id) ? (f = f.filter((t) => t.Id !== e.Id), q(p)[e.Id] = !1) : (f.push(e), q(p)[e.Id] = !0), de()) : f = [e], Mx.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function ue(e) {
		f = e ? [...f, ...q(u).filter((e) => !q(p)[e.Id])] : f.filter((e) => !q(u).find((t) => t.Id === e.Id)), pe(), de(), Mx.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function de() {
		let e = Object.keys(q(p)).filter((e) => q(p)[e]);
		e.length === 0 ? V(m, "unchecked") : e.length === q(u).length ? V(m, "checked") : V(m, "indeterminate");
	}
	function fe(e) {
		e.pageSize == q(b) ? V(y, e.pageIndex, !0) : (V(y, 0), V(b, e.pageSize, !0));
	}
	function pe() {
		V(p, {}, !0), q(u).forEach((e) => {
			q(p)[e.Id] = f.find((t) => t.Id === e.Id) != null;
		});
	}
	async function w(e) {
		if (re?.unsubscribe(), V(ne, {}, !0), !a || o() !== r.Signal || e.length === 0) return;
		let t = e.map((e) => e.Id);
		try {
			await a.connect();
		} catch (e) {
			console.error(e);
			return;
		}
		re = a.subscribeToSignalValues(t).pipe(po(ie)).subscribe((e) => {
			let t = { ...q(ne) };
			for (let n of e) t[n.identifier.replace("S:", "")] = {
				value: n.value,
				timestamp: n.timestamp
			};
			V(ne, t, !0);
		});
	}
	function me() {
		S.update((e) => ({
			...e,
			filter: null
		}));
	}
	vv(() => {
		q(y), d.next();
	}), vv(() => {
		ee.update((e) => ({
			...e,
			pageSize: q(b)
		}));
	}), kb(() => {
		re?.unsubscribe(), ie.next(), ie.complete();
	}), d.pipe(po(ie), Xa(() => C && !!g), _o(250), ho(() => V(te, !0)), fo(() => ce())).subscribe((e) => {
		V(te, !1), V(u, e.data, !0), pe(), de(), o() === r.Group && q(u).unshift(_), l(e.total), w(q(u));
	});
	var he = {
		get entityType() {
			return o();
		},
		set entityType(e) {
			o(e), z();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), z();
		},
		get additionalFilter() {
			return c();
		},
		set additionalFilter(e = null) {
			c(e), z();
		},
		get totalCount() {
			return l();
		},
		set totalCount(e = 0) {
			l(e), z();
		}
	}, ge = zS();
	return yS(H(ge), {
		startSort: {
			active: "Name",
			direction: "asc"
		},
		onsort: (e) => V(x, e, !0),
		pagination: (e) => {
			_S(e, {
				get pageIndex() {
					return q(y);
				},
				get pageSize() {
					return q(b);
				},
				get totalCount() {
					return l();
				},
				onchangePage: fe
			});
		},
		children: (e, t) => {
			var n = RS(), a = av(n);
			oS(a, {
				children: (e, t) => {
					var n = jS(), r = av(n), i = (e) => {
						rS(e, {
							container$class: "!flex-none w-[46px]",
							id: "select",
							children: (e, t) => {
								{
									let t = /* @__PURE__ */ L(() => q(m) === "checked"), n = /* @__PURE__ */ L(() => q(m) === "indeterminate");
									Hx(e, {
										get checked() {
											return q(t);
										},
										get indeterminate() {
											return q(n);
										},
										onchange: (e) => ue(e)
									});
								}
							},
							$$slots: { default: !0 }
						});
					};
					Z(r, (e) => {
						s() && e(i);
					});
					var a = U(r, 2);
					rS(a, {
						container$class: "flex-1 min-w-[160px]",
						id: "Name",
						sortable: !0,
						children: (e, t) => {
							xg(), Y(e, Dy("Name"));
						},
						$$slots: { default: !0 }
					});
					var o = U(a, 2);
					rS(o, {
						container$class: "!flex-none w-[200px]",
						id: "Group",
						children: (e, t) => {
							xg(), Y(e, Dy("Gruppe"));
						},
						$$slots: { default: !0 }
					});
					var c = U(o, 2), l = (e) => {
						var t = AS(), n = av(t);
						rS(n, {
							container$class: "!flex-none w-[110px]",
							id: "Type",
							children: (e, t) => {
								xg(), Y(e, Dy("Typ"));
							},
							$$slots: { default: !0 }
						}), rS(U(n, 2), {
							container$class: "!flex-none w-[120px]",
							id: "Value",
							children: (e, t) => {
								xg(), Y(e, Dy("Signalwert"));
							},
							$$slots: { default: !0 }
						}), Y(e, t);
					};
					Z(c, (e) => {
						q(oe) && e(l);
					}), Y(e, n);
				},
				$$slots: { default: !0 }
			});
			var o = U(a, 2), c = H(o), l = (e) => {
				Y(e, MS());
			};
			Z(c, (e) => {
				q(te) && e(l);
			}), P(o);
			var d = U(o, 2);
			Jy(d, 17, () => q(se), (e) => e.Id, (e, t) => {
				eS(e, {
					onclick: () => le(q(t)),
					children: (e, n) => {
						var a = jS(), o = av(a), c = (e) => {
							Zx(e, {
								container$class: "!flex-none w-[46px]",
								children: (e, n) => {
									Hx(e, {
										readonly: !0,
										get checked() {
											return q(p)[q(t).Id];
										}
									});
								},
								$$slots: { default: !0 }
							});
						};
						Z(o, (e) => {
							s() && e(c);
						});
						var l = U(o, 2);
						Zx(l, {
							container$class: "flex-1 min-w-[160px]",
							children: (e, n) => {
								var r = NS(), i = ov(r, !0);
								W(() => X(i, q(t).Name?.Value)), Y(e, r);
							},
							$$slots: { default: !0 }
						});
						var u = U(l, 2);
						Zx(u, {
							container$class: "!flex-none w-[200px] text-ink-secondary",
							children: (e, n) => {
								var a = PS();
								Uy(H(a), () => i.resolveName(r.Group, q(t).GroupId), null, (e, t) => {
									var n = Dy();
									W(() => X(n, q(t) ?? "")), Y(e, n);
								}), P(a), Y(e, a);
							},
							$$slots: { default: !0 }
						});
						var d = U(u, 2), f = (e) => {
							var n = AS(), r = av(n);
							Zx(r, {
								container$class: "!flex-none w-[110px] text-ink-secondary",
								children: (e, n) => {
									var r = FS(), i = ov(r, !0);
									W((e) => X(i, e), [() => kS(q(t))]), Y(e, r);
								},
								$$slots: { default: !0 }
							}), Zx(U(r, 2), {
								container$class: "!flex-none w-[120px]",
								children: (e, n) => {
									{
										let n = /* @__PURE__ */ L(() => DS(q(t)));
										wS(e, {
											get settings() {
												return q(n);
											},
											get value() {
												return q(ne)[q(t).Id];
											}
										});
									}
								},
								$$slots: { default: !0 }
							}), Y(e, n);
						};
						Z(d, (e) => {
							q(oe) && e(f);
						}), Y(e, a);
					},
					$$slots: { default: !0 }
				});
			});
			var f = U(d, 2), g = (e) => {
				var t = LS(), n = U(H(t), 2), r = ov(n), i = U(n, 2), a = (e) => {
					var t = IS();
					vy("click", t, () => me()), Y(e, t);
				};
				Z(i, (e) => {
					q(h) && e(a);
				}), P(t), W(() => X(r, `Keine ${q(ae).plural ?? ""} für diese Filter`)), Y(e, t);
			};
			Z(f, (e) => {
				!q(te) && q(u).length === 0 && e(g);
			}), W(() => sb(o, 1, `sticky top-10 z-[1] h-[2px] w-full overflow-hidden ${q(te) ? "bg-primary-tint" : ""}`)), Y(e, n);
		},
		$$slots: {
			pagination: !0,
			default: !0
		}
	}), P(ge), Y(e, ge), I(he);
}
yy(["click"]), $(BS, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	totalCount: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectToolbar.svelte
var VS = /* @__PURE__ */ J("<div class=\"mb-[10px] flex items-center gap-3\"><div class=\"flex-none text-section text-ink\"> </div> <div class=\"flex h-10 min-w-[120px] flex-1 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Filter\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div> <!> <!></div>");
function HS(e, t) {
	F(t, !0);
	let n = Q(t, "entityType", 7), r = Q(t, "totalCount", 7, 0), i = Q(t, "filterControl", 7), a = Px(n()), o = /* @__PURE__ */ B(!1), s = /* @__PURE__ */ B(X_(a.value.filter)), c, l = new Pi(), u = new Pi();
	Nx.pipe(po(l)).subscribe((e) => {
		V(o, e.queryWithSubGroups, !0);
	}), u.pipe(po(l), eo(200)).subscribe((e) => {
		a.update((t) => ({
			...t,
			filter: e
		}));
	}), vv(() => {
		u.next(q(s));
	});
	function d() {
		Nx.update((e) => ({
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
			n(e), z();
		},
		get totalCount() {
			return r();
		},
		set totalCount(e = 0) {
			r(e), z();
		},
		get filterControl() {
			return i();
		},
		set filterControl(e) {
			i(e), z();
		}
	}, p = VS(), m = H(p), h = ov(m), g = U(m, 2), _ = H(g);
	pb(_), Sb(_, (e) => c = e, () => c), xg(2), P(g);
	var v = U(g, 2);
	eb(v, () => i() ?? Ih);
	var y = U(v, 2);
	{
		let e = /* @__PURE__ */ L(() => q(o) ? "primary" : "neutral"), t = /* @__PURE__ */ L(() => q(o) ? "Untergruppen einbezogen" : "Nur diese Gruppe");
		qb(y, {
			size: 40,
			iconSize: 22,
			get variant() {
				return q(e);
			},
			get title() {
				return q(t);
			},
			icon: "account_tree",
			onclick: () => d()
		});
	}
	return P(p), W(() => X(h, `Einträge gesamt: ${r() ?? ""}`)), vb(_, () => q(s), (e) => V(s, e)), Y(e, p), I(f);
}
$(HS, {
	entityType: {},
	totalCount: {},
	filterControl: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelect.svelte
var US = /* @__PURE__ */ J("<!> <div class=\"flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-5 py-[14px]\"><!> <div class=\"min-h-0 flex-1\"><!></div></div>", 1), WS = /* @__PURE__ */ J("<button type=\"button\" class=\"flex h-9 cursor-pointer items-center gap-2 rounded-button bg-primary px-4 text-cell font-medium text-on-primary transition-colors hover:bg-primary-hover\"><span class=\"material-symbols-rounded select-none text-[18px]\">check</span> Übernehmen</button>"), GS = /* @__PURE__ */ J("<div class=\"flex h-full max-h-full min-h-0 w-full flex-col overflow-hidden bg-surface\"><div class=\"flex flex-none items-center gap-3 border-b border-line py-3 pl-[18px] pr-3\"><div class=\"flex h-10 w-10 flex-none items-center justify-center rounded-dialog bg-primary-tint\"><span class=\"material-symbols-rounded select-none text-[20px] text-primary\"> </span></div> <div class=\"flex-1 truncate text-dialog-title text-ink\"> </div> <!></div> <div class=\"flex min-h-0 flex-1 overflow-hidden\"><!></div> <div class=\"flex flex-none items-center gap-3 border-t border-line px-[18px] py-3\"><div class=\"flex-1 text-count text-ink-secondary\"><!></div> <button type=\"button\" class=\"h-9 cursor-pointer rounded-button border border-line px-4 text-cell font-medium text-ink transition-colors hover:bg-neutral-hover\">Abbrechen</button> <!></div></div>");
function KS(e, t) {
	F(t, !0);
	let n = Q(t, "entityType", 23, () => r.Signal), i = Q(t, "selectMultiple", 7, !1), a = Q(t, "additionalFilter", 7, null), o = Q(t, "onselectedEntities", 7), s = Q(t, "onclose", 7), c = Hb(_p), l = Hb(yp), u = /* @__PURE__ */ B(void 0), d = /* @__PURE__ */ B(!1), f = /* @__PURE__ */ B(0), p = /* @__PURE__ */ B(0), m = [], h = /* @__PURE__ */ L(() => ux(n())), g = Nx.subscribe((e) => {
		e.selectedTenant ? (V(d, !1), y(e.selectedTenant)) : V(d, !0);
	}), _ = Mx.subscribe((e) => {
		m = e.selectedEntities ?? [], V(p, m.length, !0), e.selectedEntities && !i() && (v(e.selectedEntities), o()?.(e.selectedEntities[0]));
	});
	function v(e) {
		let t = Px(n()), r = t.value.lastSelectedEntities, i = e.filter((e) => !r.includes(e.Id)).map((e) => e.Id);
		r.unshift(...i), r.splice(5), t.update((e) => ({
			...e,
			lastSelectedEntities: r
		}));
	}
	async function y(e) {
		try {
			V(u, await l.getTenantViewById(e), !0);
		} catch (e) {
			console.error(e), V(d, !0);
		}
	}
	async function b(e) {
		let t = await c.getEntityById(r.Group, e.Root);
		Nx.update((t) => ({
			...t,
			selectedTenant: e.Id
		})), Px(n()).update((e) => ({
			...e,
			selectedGroup: t
		}));
	}
	function x() {
		V(d, !0);
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
			n(e), z();
		},
		get selectMultiple() {
			return i();
		},
		set selectMultiple(e = !1) {
			i(e), z();
		},
		get additionalFilter() {
			return a();
		},
		set additionalFilter(e = null) {
			a(e), z();
		},
		get onselectedEntities() {
			return o();
		},
		set onselectedEntities(e) {
			o(e), z();
		},
		get onclose() {
			return s();
		},
		set onclose(e) {
			s(e), z();
		}
	}, C = GS(), te = H(C), ne = H(te), re = ov(H(ne), !0);
	P(ne);
	var ie = U(ne, 2), ae = ov(ie);
	qb(U(ie, 2), {
		size: 36,
		iconSize: 20,
		icon: "close",
		onclick: () => s()?.()
	}), P(te);
	var oe = U(te, 2), se = H(oe), ce = (e) => {
		{
			let t = /* @__PURE__ */ L(() => !!q(u));
			sx(e, {
				get allowBack() {
					return q(t);
				},
				onback: () => V(d, !1),
				ontenantSelected: (e) => b(e)
			});
		}
	}, le = (e) => {
		var t = US(), r = av(t);
		Yx(r, {
			get selectMultiple() {
				return i();
			},
			get entityType() {
				return n();
			},
			get selectedTenant() {
				return q(u);
			},
			onchangeTenant: () => x()
		});
		var o = U(r, 2), s = H(o);
		HS(s, {
			get entityType() {
				return n();
			},
			get totalCount() {
				return q(f);
			}
		});
		var c = U(s, 2);
		BS(H(c), {
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
				return q(f);
			},
			set totalCount(e) {
				V(f, e, !0);
			}
		}), P(c), P(o), Y(e, t);
	};
	Z(se, (e) => {
		q(d) ? e(ce) : e(le, -1);
	}), P(oe);
	var ue = U(oe, 2), de = H(ue), fe = H(de), pe = (e) => {
		var t = Dy();
		W(() => X(t, `${q(p) ?? ""} Ausgewählt`)), Y(e, t);
	};
	Z(fe, (e) => {
		i() && e(pe);
	}), P(de);
	var w = U(de, 2), me = U(w, 2), he = (e) => {
		var t = WS();
		vy("click", t, () => S()), Y(e, t);
	};
	return Z(me, (e) => {
		i() && e(he);
	}), P(ue), P(C), W(() => {
		X(re, q(h).icon), X(ae, `${q(h).singular ?? ""} auswählen`);
	}), vy("click", w, () => s()?.()), Y(e, C), I(ee);
}
yy(["click"]), $(KS, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {},
	onclose: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectDialog.svelte
var qS = /* @__PURE__ */ J("<div class=\"flex h-[660px] max-h-[90vh] w-[1280px] max-w-[95vw] overflow-hidden rounded-dialog bg-surface shadow-dialog\"><div class=\"h-full w-full\"><!></div></div>");
function JS(e, t) {
	F(t, !0);
	let n = Q(t, "open", 15, !1), i = Q(t, "entityType", 23, () => r.Signal), a = Q(t, "selectMultiple", 7, !1), o = Q(t, "additionalFilter", 7, null), s = Q(t, "onselectedEntities", 7), c = Q(t, "oncancel", 7), l = Hb("PopupService", new Bb(document.body)), u = /* @__PURE__ */ B(void 0), d;
	vv(() => {
		p(n(), q(u));
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
			n(e), z();
		},
		get entityType() {
			return i();
		},
		set entityType(e = r.Signal) {
			i(e), z();
		},
		get selectMultiple() {
			return a();
		},
		set selectMultiple(e = !1) {
			a(e), z();
		},
		get additionalFilter() {
			return o();
		},
		set additionalFilter(e = null) {
			o(e), z();
		},
		get onselectedEntities() {
			return s();
		},
		set onselectedEntities(e) {
			s(e), z();
		},
		get oncancel() {
			return c();
		},
		set oncancel(e) {
			c(e), z();
		}
	}, _ = qS(), v = H(_);
	return KS(H(v), {
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
	}), P(v), P(_), Sb(_, (e) => V(u, e), () => q(u)), vy("keydown", _, h), vy("click", _, (e) => e.stopPropagation()), Y(e, _), I(g);
}
yy(["keydown", "click"]), $(JS, {
	open: {},
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {},
	oncancel: {}
}, [], ["setOpen"], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-dialog.service.ts
var YS = class {
	selectEntity(e, t = null) {
		return this._openEntitySelectDialog(e, !1, t).then((e) => e.length === 1 ? e[0] : null);
	}
	selectMultipleEntities(e, t = null) {
		return this._openEntitySelectDialog(e, !0, t);
	}
	_openEntitySelectDialog(e, t, n) {
		return new Promise((r) => {
			let i = !1, a = Ny(JS, {
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
					Ry(a);
				}, 200), r(e));
			}
			setTimeout(() => {
				a.setOpen(!0);
			}, 50);
		});
	}
}, XS = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-600:oklch(54.6% .245 262.881);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-medium:500;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:#b2187a;--color-primary-hover:#8c1260;--color-on-primary:#fff;--color-primary-tint:#b2187a1a}@supports (color:color-mix(in lab, red, red)){:root,:host{--color-primary-tint:color-mix(in srgb, var(--color-primary) 10%, transparent)}}:root,:host{--color-primary-tint-subtle:#b2187a14}@supports (color:color-mix(in lab, red, red)){:root,:host{--color-primary-tint-subtle:color-mix(in srgb, var(--color-primary) 8%, transparent)}}:root,:host{--color-surface:#fff;--color-surface-border:#ccc;--color-ink:#000000db;--color-ink-secondary:#00000094;--color-ink-tertiary:#0006;--color-ink-disabled:#00000040;--color-line:#0000001f;--color-line-strong:#0000004d;--color-row-line:#00000014;--color-row-hover:#00000009;--color-row-active:#00000014;--color-neutral-hover:#0000000b;--color-muted:#00000009;--color-select:#1976d2;--color-checkbox-border:#00000073;--color-checkbox-border-disabled:#00000026;--color-danger:#c62828;--color-danger-tint:#c628281a;--text-dialog-title:18px;--text-section:17px;--text-count:15px;--text-cell:13.5px;--text-meta:12.5px;--text-sub:11.5px;--text-label:11px;--radius-dialog:10px;--radius-control:8px;--radius-button:6px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,:after,:before,::backdrop{border-color:var(--color-line,currentColor)}::file-selector-button{border-color:var(--color-line,currentColor)}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.\\!top-\\[-150px\\]{top:-150px!important}.\\!top-\\[2px\\]{top:2px!important}.top-0{top:0}.top-1{top:var(--spacing)}.top-10{top:calc(var(--spacing) * 10)}.top-\\[50\\%\\]{top:50%}.right-2{right:calc(var(--spacing) * 2)}.right-\\[-5px\\]{right:-5px}.left-0{left:0}.isolate{isolation:isolate}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.float-left{float:left}.float-right{float:right}.\\!container{width:100%!important}@media (width>=40rem){.\\!container{max-width:40rem!important}}@media (width>=48rem){.\\!container{max-width:48rem!important}}@media (width>=64rem){.\\!container{max-width:64rem!important}}@media (width>=80rem){.\\!container{max-width:80rem!important}}@media (width>=96rem){.\\!container{max-width:96rem!important}}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mx-2{margin-inline:calc(var(--spacing) * 2)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-\\[-10px\\]{margin-top:-10px}.mt-\\[2px\\]{margin-top:2px}.mt-\\[10px\\]{margin-top:10px}.mr-1{margin-right:var(--spacing)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-4{margin-right:calc(var(--spacing) * 4)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-\\[10px\\]{margin-bottom:10px}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-4{margin-left:calc(var(--spacing) * 4)}.\\!hidden{display:none!important}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.list-item{display:list-item}.table{display:table}.table-row{display:table-row}.\\!h-\\[30px\\]{height:30px!important}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-\\[2px\\]{height:2px}.h-\\[3px\\]{height:3px}.h-\\[4px\\]{height:4px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.h-\\[30px\\]{height:30px}.h-\\[44px\\]{height:44px}.h-\\[70vh\\]{height:70vh}.h-\\[660px\\]{height:660px}.h-full{height:100%}.max-h-\\[45\\%\\]{max-height:45%}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-0{min-height:0}.w-4{width:calc(var(--spacing) * 4)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-\\[3px\\]{width:3px}.w-\\[4px\\]{width:4px}.w-\\[18px\\]{width:18px}.w-\\[20px\\]{width:20px}.w-\\[34px\\]{width:34px}.w-\\[44px\\]{width:44px}.w-\\[46px\\]{width:46px}.w-\\[50px\\]{width:50px}.w-\\[70px\\]{width:70px}.w-\\[80vw\\]{width:80vw}.w-\\[110px\\]{width:110px}.w-\\[120px\\]{width:120px}.w-\\[200px\\]{width:200px}.w-\\[280px\\]{width:280px}.w-\\[1280px\\]{width:1280px}.w-full{width:100%}.\\!max-w-\\[400px\\]{max-width:400px!important}.max-w-\\[95vw\\]{max-width:95vw}.min-w-0{min-width:0}.min-w-\\[120px\\]{min-width:120px}.min-w-\\[160px\\]{min-width:160px}.\\!flex-none{flex:none!important}.flex-1{flex:1}.flex-\\[2\\]{flex:2}.flex-\\[50px\\]{flex:50px}.flex-none{flex:none}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.\\!scale-50{--tw-scale-x:50%!important;--tw-scale-y:50%!important;--tw-scale-z:50%!important;scale:var(--tw-scale-x) var(--tw-scale-y)!important}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform\\!{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)!important}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-\\[6px\\]{gap:6px}.gap-\\[10px\\]{gap:10px}.self-center{align-self:center}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-\\[3px\\]{border-radius:3px}.rounded-\\[4px\\]{border-radius:4px}.rounded-button{border-radius:var(--radius-button)}.rounded-control{border-radius:var(--radius-control)}.rounded-dialog{border-radius:var(--radius-dialog)}.rounded-full{border-radius:2147483647px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-\\[3px\\]{border-left-style:var(--tw-border-style);border-left-width:3px}.border-none{--tw-border-style:none;border-style:none}.\\!border-primary{border-color:var(--color-primary)!important}.border-checkbox-border{border-color:var(--color-checkbox-border)}.border-checkbox-border-disabled{border-color:var(--color-checkbox-border-disabled)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-500{border-color:var(--color-gray-500)}.border-line{border-color:var(--color-line)}.border-row-line{border-color:var(--color-row-line)}.border-slate-400{border-color:var(--color-slate-400)}.border-surface-border{border-color:var(--color-surface-border)}.border-transparent{border-color:#0000}.\\!bg-slate-300{background-color:var(--color-slate-300)!important}.bg-\\[rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{background-color:#0000001a}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-500{background-color:var(--color-green-500)}.bg-ink-disabled{background-color:var(--color-ink-disabled)}.bg-muted{background-color:var(--color-muted)}.bg-neutral-hover{background-color:var(--color-neutral-hover)}.bg-primary{background-color:var(--color-primary)}.bg-primary-tint{background-color:var(--color-primary-tint)}.bg-red-500{background-color:var(--color-red-500)}.bg-select{background-color:var(--color-select)}.bg-slate-200{background-color:var(--color-slate-200)}.bg-surface{background-color:var(--color-surface)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.p-1{padding:var(--spacing)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-\\[10px\\]{padding:10px}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-\\[5px\\]{padding-inline:5px}.px-\\[10px\\]{padding-inline:10px}.px-\\[18px\\]{padding-inline:18px}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-\\[1px\\]{padding-block:1px}.py-\\[2px\\]{padding-block:2px}.py-\\[7px\\]{padding-block:7px}.py-\\[10px\\]{padding-block:10px}.py-\\[14px\\]{padding-block:14px}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-\\[2px\\]{padding-top:2px}.pt-\\[10px\\]{padding-top:10px}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-\\[10px\\]{padding-right:10px}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-\\[10px\\]{padding-bottom:10px}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-\\[10px\\]{padding-left:10px}.pl-\\[18px\\]{padding-left:18px}.pl-\\[26px\\]{padding-left:26px}.text-center{text-align:center}.text-left{text-align:left}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\!text-\\[20px\\]{font-size:20px!important}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[20px\\]{font-size:20px}.text-\\[24px\\]{font-size:24px}.text-cell{font-size:var(--text-cell)}.text-count{font-size:var(--text-count)}.text-dialog-title{font-size:var(--text-dialog-title)}.text-label{font-size:var(--text-label)}.text-meta{font-size:var(--text-meta)}.text-section{font-size:var(--text-section)}.text-sub{font-size:var(--text-sub)}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-wrap{text-wrap:wrap}.break-normal{overflow-wrap:normal;word-break:normal}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-danger{color:var(--color-danger)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-ink{color:var(--color-ink)}.text-ink-disabled{color:var(--color-ink-disabled)}.text-ink-secondary{color:var(--color-ink-secondary)}.text-ink-tertiary{color:var(--color-ink-tertiary)}.text-on-primary{color:var(--color-on-primary)}.text-primary{color:var(--color-primary)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-dialog{--tw-shadow:0 5px 5px -3px var(--tw-shadow-color,#0003), 0 8px 10px 1px var(--tw-shadow-color,#00000024), 0 3px 14px 2px var(--tw-shadow-color,#0000001f);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0px 1.2px 3.6px var(--tw-shadow-color,#0000001c), 0px 6.4px 14.4px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0px .6px 1.8px var(--tw-shadow-color,#0000001a), 0px 3.2px 7.2px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0px .3px .9px var(--tw-shadow-color,#0000001a), 0px 1.6px 3.6px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter\\!{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-all{-webkit-user-select:all;user-select:all}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:border-gray-300:is(:where(.group):hover *){border-color:var(--color-gray-300)}}.placeholder\\:text-ink-tertiary::placeholder{color:var(--color-ink-tertiary)}.first\\:border-l-0:first-child{border-left-style:var(--tw-border-style);border-left-width:0}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.focus-within\\:border-blue-300:focus-within{border-color:var(--color-blue-300)}.focus-within\\:border-primary:focus-within{border-color:var(--color-primary)}@media (hover:hover){.hover\\:border-line-strong:hover{border-color:var(--color-line-strong)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-neutral-hover:hover{background-color:var(--color-neutral-hover)}.hover\\:bg-primary-hover:hover{background-color:var(--color-primary-hover)}.hover\\:bg-primary-tint:hover{background-color:var(--color-primary-tint)}.hover\\:bg-primary-tint-subtle:hover{background-color:var(--color-primary-tint-subtle)}.hover\\:bg-row-hover:hover{background-color:var(--color-row-hover)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:bg-slate-300:hover{background-color:var(--color-slate-300)}.hover\\:underline:hover{text-decoration-line:underline}}@media (width>=48rem){.md\\:w-\\[80vw\\]{width:80vw}}@media (width>=64rem){.lg\\:w-\\[60vw\\]{width:60vw}}@media (width>=96rem){.\\32 xl\\:w-\\[50vw\\]{width:50vw}}}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v34/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2)format(\"woff2\")}.material-symbols-rounded{font-variation-settings:\"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;font-family:Material Symbols Rounded;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.material-symbols-rounded.filled{font-variation-settings:\"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24}@keyframes indeterminateAnimation{0%{transform:translate(0)scaleX(0)}40%{transform:translate(0)scaleX(.4)}to{transform:translate(100%)scaleX(.5)}}.audako-indeterminate-bar{transform-origin:0%;animation:1s linear infinite indeterminateAnimation}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}", ZS = null;
function QS() {
	return typeof CSSStyleSheet > "u" || !("replaceSync" in CSSStyleSheet.prototype) ? null : (ZS || (ZS = new CSSStyleSheet(), ZS.replaceSync(XS)), ZS);
}
function $S(e) {
	if (!e) return;
	let t = QS();
	if (t) {
		e.adoptedStyleSheets.includes(t) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]);
		return;
	}
	if (!e.querySelector("style[data-audako-styles]")) {
		let t = document.createElement("style");
		t.setAttribute("data-audako-styles", ""), t.textContent = XS, e.prepend(t);
	}
}
function eC(e) {
	return class extends e {
		connectedCallback() {
			$S(this.shadowRoot), super.connectedCallback?.();
		}
	};
}
//#endregion
//#region src/components/entity-select/AudakoEntitySelect.svelte
var tC = /* @__PURE__ */ J("<div class=\"w-full h-full overflow-hidden\"><!></div>");
function nC(e, t) {
	F(t, !0);
	let n = Q(t, "entityType", 7, void 0), i = Q(t, "multiple", 7, !1), a = Q(t, "filter", 7, void 0);
	Wb(Bb, new Bb(document.body));
	let o = /* @__PURE__ */ L(() => Object.values(r).includes(n()));
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
			n(e), z();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), z();
		},
		get filter() {
			return a();
		},
		set filter(e = void 0) {
			a(e), z();
		}
	}, l = tC(), u = H(l), d = (e) => {
		{
			let t = /* @__PURE__ */ L(() => a() ?? {});
			KS(e, {
				get entityType() {
					return n();
				},
				get selectMultiple() {
					return i();
				},
				get additionalFilter() {
					return q(t);
				},
				onselectedEntities: s
			});
		}
	};
	return Z(u, (e) => {
		q(o) && e(d);
	}), P(l), Y(e, l), I(c);
}
$(nC, {
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
}, [], [], { mode: "open" }, eC);
//#endregion
//#region src/components/select/AudakoSelect.svelte
function rC(e, t) {
	F(t, !0);
	let n = Q(t, "value", 7, void 0), r = Q(t, "arrayvalue", 23, () => []), i = Q(t, "multiple", 7, !1), a = Q(t, "options", 23, () => []), o = Q(t, "placeholder", 7, void 0), s = Q(t, "containerClass", 7, ""), c = Q(t, "textfieldClass", 7, ""), l = Q(t, "suffixClass", 7, "");
	function u(e) {
		t.$$host.dispatchEvent(new CustomEvent("valuechanged", { detail: e }));
	}
	var d = {
		get value() {
			return n();
		},
		set value(e = void 0) {
			n(e), z();
		},
		get arrayvalue() {
			return r();
		},
		set arrayvalue(e = []) {
			r(e), z();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), z();
		},
		get options() {
			return a();
		},
		set options(e = []) {
			a(e), z();
		},
		get placeholder() {
			return o();
		},
		set placeholder(e = void 0) {
			o(e), z();
		},
		get containerClass() {
			return s();
		},
		set containerClass(e = "") {
			s(e), z();
		},
		get textfieldClass() {
			return c();
		},
		set textfieldClass(e = "") {
			c(e), z();
		},
		get suffixClass() {
			return l();
		},
		set suffixClass(e = "") {
			l(e), z();
		}
	};
	{
		let t = /* @__PURE__ */ L(() => i() ? r() : n());
		mS(e, {
			get value() {
				return q(t);
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
	return I(d);
}
$(rC, {
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
}, [], [], { mode: "open" }, eC);
//#endregion
//#region src/components/tenant-select/AudakoTenantSelect.svelte
function iC(e, t) {
	F(t, !0);
	let n = Q(t, "allowBack", 7, !1);
	function r(e, n) {
		t.$$host.dispatchEvent(new CustomEvent(e, {
			detail: n,
			bubbles: !0,
			composed: !0
		}));
	}
	return sx(e, {
		get allowBack() {
			return n();
		},
		ontenantSelected: (e) => r("tenantselected", { tenant: e }),
		onback: () => r("back", null)
	}), I({
		get allowBack() {
			return n();
		},
		set allowBack(e = !1) {
			n(e), z();
		}
	});
}
$(iC, { allowBack: {
	attribute: "allowback",
	type: "Boolean"
} }, [], [], { mode: "open" }, eC);
//#endregion
//#region src/shared/components/menu/MenuItemComponent.svelte
var aC = /* @__PURE__ */ J("<div class=\"mr-2 flex item-center\"><span class=\"material-symbols-rounded z-[1] select-none flex items-center svelte-rq91mb\"><!></span></div>"), oC = /* @__PURE__ */ J("<div class=\"hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md svelte-rq91mb\"><!> <div class=\"flex-grow\"> </div></div>"), sC = {
	hash: "svelte-rq91mb",
	code: ".hover-highlight.svelte-rq91mb:hover {background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important;}.material-symbols-rounded.svelte-rq91mb {font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;}"
};
function cC(e, t) {
	F(t, !0), tb(e, sC);
	let n = Q(t, "icon", 7, null), r = Q(t, "label", 7, null), i = Q(t, "onclick", 7), a = Q(t, "children", 7);
	var o = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), z();
		},
		get label() {
			return r();
		},
		set label(e = null) {
			r(e), z();
		},
		get onclick() {
			return i();
		},
		set onclick(e) {
			i(e), z();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), z();
		}
	}, s = oC(), c = H(s), l = (e) => {
		var t = aC(), r = H(t), i = H(r), o = (e) => {
			var t = Oy();
			eb(av(t), a), Y(e, t);
		}, s = (e) => {
			var t = Dy();
			W(() => X(t, n())), Y(e, t);
		};
		Z(i, (e) => {
			a() ? e(o) : e(s, -1);
		}), P(r), P(t), Y(e, t);
	};
	Z(c, (e) => {
		n() && e(l);
	});
	var u = ov(U(c, 2), !0);
	return P(s), W(() => X(u, r())), vy("click", s, (e) => i()?.(e)), Y(e, s), I(o);
}
yy(["click"]), $(cC, {
	icon: {},
	label: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/menu/Menu.svelte
var lC = /* @__PURE__ */ J("<div></div>");
function uC(e, t) {
	F(t, !0);
	let n = Q(t, "anchorSelector", 7), r = Q(t, "preferedVerticalAlignment", 7, "top"), i = Q(t, "preferedHorizontalAlignment", 7, "left"), a = Q(t, "positionOffset", 23, () => ({
		x: 0,
		y: 10
	})), o = Q(t, "container$class", 7, ""), s = Q(t, "closeOnClick", 7, !0), c = Q(t, "items", 23, () => []), l = /* @__PURE__ */ L(() => n() ? document.querySelector(n()) : null), u;
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
			n(e), z();
		},
		get preferedVerticalAlignment() {
			return r();
		},
		set preferedVerticalAlignment(e = "top") {
			r(e), z();
		},
		get preferedHorizontalAlignment() {
			return i();
		},
		set preferedHorizontalAlignment(e = "left") {
			i(e), z();
		},
		get positionOffset() {
			return a();
		},
		set positionOffset(e = {
			x: 0,
			y: 10
		}) {
			a(e), z();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), z();
		},
		get closeOnClick() {
			return s();
		},
		set closeOnClick(e = !0) {
			s(e), z();
		},
		get items() {
			return c();
		},
		set items(e = []) {
			c(e), z();
		}
	};
	return Sb(cS(e, {
		get closeOnClick() {
			return s();
		},
		get anchorElement() {
			return q(l);
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
			var n = lC();
			Jy(n, 21, c, Wy, (e, t) => {
				cC(e, {
					get label() {
						return q(t).label;
					},
					get icon() {
						return q(t).icon;
					},
					onclick: (e) => q(t).action(e)
				});
			}), P(n), W(() => sb(n, 1, `bg-white rounded shadow-lg ${o() ?? ""}`)), Y(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => u = e, () => u), I(p);
}
$(uC, {
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
function dC(e, t) {
	F(t, !0);
	let n = Q(t, "items", 23, () => []), r = Q(t, "closeOnClick", 7, !0), i = Q(t, "containerClass", 7, ""), a = Q(t, "anchorSelector", 7, ""), o = /* @__PURE__ */ B(void 0);
	return vv(() => {
		let e = t.$$host;
		e.openMenu = () => q(o)?.openMenu(), e.closeMenu = () => q(o)?.closeMenu();
	}), Sb(uC(e, {
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
	}), (e) => V(o, e, !0), () => q(o)), I({
		get items() {
			return n();
		},
		set items(e = []) {
			n(e), z();
		},
		get closeOnClick() {
			return r();
		},
		set closeOnClick(e = !0) {
			r(e), z();
		},
		get containerClass() {
			return i();
		},
		set containerClass(e = "") {
			i(e), z();
		},
		get anchorSelector() {
			return a();
		},
		set anchorSelector(e = "") {
			a(e), z();
		}
	});
}
$(dC, {
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
function fC(e) {
	return e.element;
}
var pC = fC(nC), mC = fC(iC), hC = fC(rC), gC = fC(dC);
function _C() {
	yC("audako-entity-select", pC), yC("audako-tenant-select", mC), yC("audako-select", hC), yC("audako-menu", gC);
}
function vC(e, t) {
	let n = new _p(e, t);
	Wb(Rm, new Rm(e, t)), Wb(_p, n), Wb(yp, new yp(e, t)), Wb(xp, new xp(n)), Wb(Tp, new Tp(e, t)), Wb(YS, new YS()), Wb(Wm, new Wm(e, t)), Wb(Cp, new Cp(e, t));
}
function yC(e, t, n) {
	customElements.get(e) || customElements.define(e, t, n);
}
//#endregion
export { Ks as AcquisitionInterval, qs as AcquisitionUnit, Zc as AlarmPlanningCheckerConfig, Xc as AlarmPlanningCheckerConfigVersion, Yc as AlarmPlanningConfig, Jc as AlarmPlanningConfigVersion, $c as AlarmTimerConfig, Qc as AlarmTimerConfigVersion, le as AlarmTrigger, dr as AlarmingPlan, zc as AudakoWidgetImageConfig, Rc as AudakoWidgetImageConfigVersion, Oo as AxisOptions, dc as Badge, hp as BaseHttpService, E as BaseWidgetConfig, Wt as BatchAction, Xt as BatchDefinition, Qt as BatchReleaseSettings, nn as BatchReportExportSettings, an as BatchReviewDefinition, rn as BatchReviewSettings, wr as BatchTrigger, $t as BatchValueObject, pt as BitSelectConversionTypes, Qs as CURRENCY_CODES, Un as Camera, Gn as CameraImage, Wn as CameraImageType, Hn as CameraViewMode, Ce as ChangeRateMonitoringSettings, g as CheckboxFieldSettings, Io as ClockType, Do as ColumnSeriesOptions, Dr as CompressionInterval, At as CompressionType, At as FormulaCompressionType, en as ConditionEventEntry, w as ConditionSettings, Sr as ConditionTrigger, u as ConfigurationEntity, ge as ConnectionFailureConditionSettings, It as Connector, Ht as ConnectorObject, Vt as ConnectorObjectAccessLevel, Bt as ConnectorObjectType, zt as ConnectorRestApiCredential, Rt as ConnectorRestApiSettings, Ft as ConnectorType, Lt as ConnectorTypedSettings, he as CounterConditionSettings, Hm as CounterOffset, xs as CrossTabMode, f as CustomFieldSettings, x as CustomMappingFieldSettings, vr as CyclicTrigger, gc as DEFAULT_MAP_ANALYSIS_DISPLAY_OPTIONS, ne as Dashboard, re as DashboardTab, ae as DashboardTabEntity, ie as DashboardTabPlaceholder, Pe as DataConnection, Ge as DataConnectionBacnetSettings, Dp as DataConnectionBrowserService, ct as DataConnectionCsvImporterSettings, Xe as DataConnectionEhWebserverSettings, _e as DataConnectionFailureConditionSettings, lt as DataConnectionFtpParserSettings, We as DataConnectionIEC104Settings, Ye as DataConnectionIot2000ModuleSettings, Je as DataConnectionKnxSettings, st as DataConnectionLoRaWANSettings, nt as DataConnectionMeterBusSettings, Ue as DataConnectionModbusSettings, Qe as DataConnectionModemInfoSettings, $e as DataConnectionMqttSettings, rt as DataConnectionMtmAdapterSettings, at as DataConnectionOTTDataLoggerSettings, et as DataConnectionOneWireSettings, ze as DataConnectionOpcUaSecurityAuthentication, Re as DataConnectionOpcUaSecurityMode, Le as DataConnectionOpcUaSecurityPolicy, He as DataConnectionOpcUaSettings, Be as DataConnectionOpcUaStringEncoding, Ve as DataConnectionOpcUaTimestampSource, Ie as DataConnectionS7Settings, Fe as DataConnectionSettings, Fe as DataConnectionTypedSettings, Ke as DataConnectionSimulationSettings, Ze as DataConnectionSnmpSettings, Ne as DataConnectionSpecialDeviceProfile, ot as DataConnectionTeltonikaGPSSettings, Me as DataConnectionType, qe as DataConnectionUniversalSettings, it as DataConnectionYDOCDataLoggerSettings, Ae as DataSource, Tp as DataSourceHttpService, ke as DataSourceType, _ as DateFieldSettings, De as DifferenceMonitoringSettings, Rn as Document, nr as EmailContact, vl as EnteredAlarmingIntervalType, jc as EntityAction, y as EntityFieldSettings, a as EntityHttpEndpoints, _p as EntityHttpService, i as EntityIcons, xp as EntityNameService, s as EntityObjectOrientationAttribute, pC as EntitySelect, YS as EntitySelectDialogService, r as EntityType, Ar as EntityTypeClassMapping, Mr as EntityUtils, Cc as EntryListViewType, bn as EventAction, pc as EventBadge, ue as EventCategory, ce as EventCategoryClass, de as EventCondition, fe as EventConditionSettingsType, oe as EventDefinition, qt as EventEntityType, yn as EventReport, vn as EventReportSettings, br as EventTrigger, Kt as EventTriggerState, se as ExpressionParameter, c as Field, o as FieldObjectOrientationAttribute, Vn as FileEntry, Tt as Formula, Ot as FormulaIntervalSettings, Et as FormulaNumericSettings, Mt as FormulaType, Nt as FormulaValueType, Dt as FormulaVariable, Ko as GaugeRange, Wo as GaugeValueObjectType, $n as Gender, Yo as GetGaugeInvertByKey, Jo as GetGaugeRotationByKey, qo as GetRangeKey, S as Group, ko as GuidelineOptions, Ns as HeatMapCategoryAxisOptions, Fs as HeatMapChartConfig, Ps as HeatMapColumnSeriesOptions, Bm as HistoricalValue, Km as HistoricalValueManipulationHttpService, Um as HistoricalValueObject, kr as HistoricalValueOperationStatus, Wm as HistoricalValueService, Uc as IframeLoadingMethods, So as IntervalSettings, ic as LeafletLatLng, Eo as LineSeriesOptions, Im as LiveHubEvent, Fm as LiveHubMethod, oc as LiveRequestType, Rm as LiveValueService, xn as MailEventAction, bc as MaintEntryState, fr as MaintenanceService, mc as MapAnalysesConfigVersion, hc as MapAnalysisValueDisplayType, ac as MapConfig, rc as MapConfigVersion, uc as MapGroup, lc as MapMarkerConfig, sc as MapRequestTypes, be as MaximumMonitoringSettings, Or as MeasurementValueSource, gC as Menu, tn as MetadataField, Jt as MetadataFieldType, Yt as MetadataSource, tt as MeterBusMode, ye as MinimumMonitoringSettings, p as NumberFieldSettings, Mc as ObjectOperations, Oe as ObjectSettings, jr as ObjectUtils, xo as ObservationPeriodUnits, Vm as OffsetSource, Pm as OperationStatus, ee as PartList, xe as PeriodMaximumMonitoringSettings, Se as PeriodMaximumMonitoringSettingsPeriod, je as PermaLiveModeSettings, Hc as PermissionsPolicyAllowList, rr as PhoneBasedContact, js as PieChartConfig, we as PlausibilityMonitoringSettings, cc as PopupSignalConfig, Te as PositionMonitoringSettings, Ut as ProcessImage, C as PropertyGroup, cr as PushoverContact, er as Recipient, tr as RecipientContact, lr as RecipientGroup, ur as RecipientGroupMember, el as RecipientType, Ee as RecordingFailureMonitoringSettings, yt as RecordingSpecialProcessingType, bt as RecordingType, pn as Report, gn as ReportCaptionElement, dn as ReportColumnType, Cn as ReportElement, wn as ReportElementSettings, on as ReportEngineType, An as ReportField, jn as ReportFieldSettings, En as ReportGroup, Dn as ReportGroupSettings, _n as ReportItemElement, un as ReportItemElementType, On as ReportList, kn as ReportListSettings, mn as ReportObject, Tn as ReportParameterDefinition, fn as ReportParameterType, Ln as ReportSettings, ln as ReportStorageType, Mn as ReportTable, Pn as ReportTableElement, Fn as ReportTableEntry, In as ReportTableHeader, Nn as ReportTableSettings, cn as ReportTemplate, sn as ReportTimeStepSize, hn as ReportTypedElement, hl as RequestIntervalType, Qn as Role, hr as RuntimeScript, Rs as SankeyChartWidgetFormAggregationTypes, Cr as ScriptBatchTriggerState, xr as ScriptConditionTriggerState, yr as ScriptEventTriggerState, _r as ScriptTrigger, hC as Select, v as SelectFieldSettings, d as SelectFieldType, Nc as SelectableEntitiesTranslation, Zs as SelectionType, wo as SeriesOptions, Co as SeriesType, wc as ServiceFilterType, us as SetPointStatus, dt as Signal, gt as SignalAnalogSettings, fc as SignalBadge, Ct as SignalCompressionSettings, T as SignalCompressionType, me as SignalConditionSettings, pe as SignalConditionSettingsOperator, _t as SignalCounterSettings, ht as SignalDigitalSettings, ts as SignalListGroup, ft as SignalOutputSettings, xt as SignalRecordingSettings, mt as SignalSettings, ut as SignalType, vt as SignalTypeSettingsMap, cs as SliderEntry, ir as SmsContact, gr as StaticScriptVariable, mr as StepDefinition, To as StepLineSeriesOptions, zn as Storage, Bn as StorageEntry, Sn as StorageEventAction, Lm as SubscriptionPrefix, Jn as SwitchOperation, qn as SwitchRule, Kn as SwitchSchedule, Yn as SwitchType, Pt as TagScope, pr as TaskDefinition, sr as TeamsContact, or as TelegramContact, te as TemplateVariable, yp as TenantHttpService, mC as TenantSelect, Tr as TenantView, h as TextAreaFieldSettings, m as TextFieldSettings, bo as TimeManagementSettings, Hs as TimeStepSize, ve as TimebasedConditionSettings, Js as TimelineOptions, Es as TrafficLightColorTranslations, Ts as TrafficLightModeTranslations, ws as TrafficLightModes, Ss as TrafficLights, l as TranslatableField, Zt as TriggerDefinition, Gt as TriggerType, Zn as User, b as UserFieldSettings, Er as UserProfile, Cp as UserProfileHttpService, Xn as UserRegistrationStates, Ao as ValueAxisOptions, yo as ValueEntityType, kt as ValueIntervalType, jt as VariableType, ar as VoipContact, Fc as WidgetAuditLogListConfig, Ac as WidgetAuditLogListFilterType, Pc as WidgetAuditLogListVersion, Bo as WidgetBasicXyChartConfig, zo as WidgetBasicXyChartConfigVersion, nc as WidgetBatchArchiveConfig, tc as WidgetBatchArchiveConfigVersion, Xs as WidgetBillingConfig, Ys as WidgetBillingConfigVersion, yc as WidgetCameraConfig, vc as WidgetCameraConfigVersion, Fo as WidgetClockConfig, Po as WidgetClockConfigVersion, gs as WidgetCounterManagementConfig, hs as WidgetCounterManagementConfigVersion, Ho as WidgetDataImportConfig, Vo as WidgetDataImportConfigVersion, $o as WidgetDigitalSwitchConfig, Qo as WidgetDigitalSwitchConfigVersion, qc as WidgetDocumentsArchiveConfig, Kc as WidgetDocumentsArchiveConfigVersion, _l as WidgetEnteredAlarmingConfig, gl as WidgetEnteredAlarmingConfigVersion, ml as WidgetEnteredEventConfig, pl as WidgetEnteredEventConfigVersion, cl as WidgetEventListConfig, sl as WidgetEventListConfigVersion, al as WidgetEventListFilterType, ol as WidgetEventListFilterTypeTranslation, ul as WidgetEventTestConfig, ll as WidgetEventTestConfigVersion, Go as WidgetGaugeChartConfig, Uo as WidgetGaugeChartConfigVersion, Is as WidgetHeatMapChartConfig, Ms as WidgetHeatMapChartConfigVersion, Gc as WidgetIframeConfig, Wc as WidgetIframeVersion, Zo as WidgetLiquidFillGaugeConfig, Xo as WidgetLiquidFillGaugeConfigVersion, Os as WidgetLiveChartConfig, Ds as WidgetLiveChartConfigVersion, vs as WidgetLiveModeConfig, _s as WidgetLiveModeConfigVersion, Sc as WidgetMaintenanceEntryListConfig, xc as WidgetMaintenanceEntryListConfigVersion, Gs as WidgetManualDataConfig, Ws as WidgetManualDataConfigVersion, kc as WidgetManualMaintenanceConfig, Oc as WidgetManualMaintenanceConfigVersion, _c as WidgetMapAnalysesConfig, fl as WidgetMonitoringOverviewConfig, dl as WidgetMonitoringOverviewConfigVersion, Dc as WidgetMyTasksConfig, Lc as WidgetNotesConfig, Ic as WidgetNotesConfigVersion, Vc as WidgetPdfViewerConfig, Bc as WidgetPdfViewerConfigVersion, As as WidgetPieChartConfig, ks as WidgetPieChartConfigVersion, bs as WidgetProcessImageConfig, ys as WidgetProcessImageConfigVersion, il as WidgetRecipientGroupConfig, rl as WidgetRecipientGroupConfigVersion, nl as WidgetRecipientsConfig, tl as WidgetRecipientsConfigVersion, Vs as WidgetReportConfig, Bs as WidgetReportConfigVersion, ms as WidgetResettableCounterConfig, ps as WidgetResettableCounterConfigVersion, zs as WidgetSankeyChartConfig, Ls as WidgetSankeyChartConfigVersion, fs as WidgetSetpointTableConfig, ds as WidgetSetpointTableConfigVersion, ns as WidgetSignalListMixedConfig, es as WidgetSignalListMixedConfigVersion, No as WidgetSingleSignalConfig, Mo as WidgetSingleSignalConfigVersion, ls as WidgetSliderConfig, ss as WidgetSliderConfigVersion, ec as WidgetStartStopBatchConfig, $s as WidgetStartStopBatchConfigVersion, os as WidgetSwitchOperationListConfig, as as WidgetSwitchOperationListConfigVersion, Ro as WidgetTextConfig, Lo as WidgetTextConfigVersion, is as WidgetTimeScheduleConfig, rs as WidgetTimeScheduleConfigVersion, Cs as WidgetTrafficLightConfig, Ec as WidgetTypePlateConfig, Tc as WidgetTypePlateConfigVersion, jo as XYChartConfig, vo as getAsyncValueAsPromise, wt as getDefaultCompressionSettingsBySignalType, St as getDefaultRecordingSettingsBySignalType, Ir as isNullOrEmpty, Fr as isNullOrUndefined, Lr as isNullOrWhitespace, vC as registerCoreServices, _C as registerCustomElements, Hb as resolveService, Gb as setGlobalDependencyContainer, Pr as tryCatch, Wb as tryRegisterService, Us as widgetReport_Name };
