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
	e.Group = "Group", e.Signal = "Signal", e.Formula = "Formula", e.Dashboard = "Dashboard", e.DashboardTab = "DashboardTab", e.DataConnection = "DataConnection", e.DataSource = "DataSource", e.Connector = "Connector", e.EventCondition = "EventCondition", e.EventDefinition = "EventDefinition", e.EventCategory = "EventCategory", e.ProcessImage = "ProcessImage", e.BatchDefinition = "BatchDefinition", e.ReportTemplate = "ReportTemplate", e.Report = "Report", e.Document = "Document", e.Camera = "Camera", e.SwitchSchedule = "SwitchSchedule", e.User = "User", e.Role = "Role", e.Recipient = "Recipient", e.RecipientGroup = "RecipientGroup", e.AlarmingPlan = "AlarmingPlan", e.MaintenanceService = "MaintenanceService", e.TaskDefinition = "TaskDefinition", e.RuntimeScript = "RuntimeScript";
})(r ||= {});
var i = {
	[r.Group]: "mat folder",
	[r.Dashboard]: "adk adk-dashboard",
	[r.Signal]: "mat code",
	[r.Formula]: "mat timeline",
	[r.DataConnection]: "mat data_usage",
	[r.DataSource]: "mat storage"
}, a;
(function(e) {
	e.Locked = "Locked", e.Overwritten = "Overwritten", e.FillInVariables = "FillInVariables", e.ResolveRelative = "ResolveRelative";
})(a ||= {});
var o;
(function(e) {
	e.Locked = "Locked", e.Overwritten = "Overwritten";
})(o ||= {});
var s = class {
	constructor(e = null, t = []) {
		this.Value = e, this.OOAttributes = t;
	}
	static isField(e) {
		return e && e.Value !== void 0;
	}
}, c = class extends s {
	constructor(e = null, t = []) {
		super(e, t), this.Translations = {};
	}
}, l = class {
	constructor(e) {
		this.Name = new c(), this.Alias = new s(), this.Description = new c(), this.Tags = new s([]), this.Version = 0, this.AdditionalFields = {}, this.Id = null, this.Path = [], this.GroupId = null, this.CreatedBy = null, this.CreatedOn = null, this.ChangedBy = null, this.ChangedOn = null, this.MaintenanceMode = !1, this.IsInstanceOf = null, this.IsTemplate = !1, this.OOAttributes = [], this.ManagedBy = null, this.SynchronizedFrom = null, Object.assign(this, e);
	}
}, u;
(function(e) {
	e.RadioBox = "RadioBox", e.DropDown = "DropDown";
})(u ||= {});
var d = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.DefaultValue = null, this.Multiple = !1;
	}
}, f = class extends d {
	constructor() {
		super("NumberFieldSettings"), this.DecimalPlaces = null, this.Unit = null, this.Min = null, this.Max = null, this.StepSize = null;
	}
}, p = class extends d {
	constructor(e = "TextFieldSettings") {
		super(e), this.MaxLength = null, this.ValidationRegex = null, this.Multiline = !1;
	}
}, m = class extends p {
	constructor() {
		super("TextAreaFieldSettings"), this.Multiline = !0;
	}
}, h = class extends d {
	constructor() {
		super("CheckboxFieldSettings");
	}
}, g = class extends d {
	constructor() {
		super("DateFieldSettings");
	}
}, _ = class extends d {
	constructor() {
		super("SelectFieldSettings"), this.PossibleValues = [], this.Type = u.DropDown;
	}
}, v = class extends d {
	constructor() {
		super("EntityFieldSettings"), this.EntityType = null;
	}
}, y = class extends d {
	constructor() {
		super("UserFieldSettings");
	}
}, b = class extends d {
	constructor() {
		super("CustomMappingFieldSettings"), this.CustomMappingId = null;
	}
}, x = class extends l {
	constructor() {
		super(), this.Type = "Default", this.IsEntryPoint = !1, this.PartGroups = [], this.PropertyGroups = [], this.OOVariables = {}, this.TemplateVariables = [], this.Icon = new s(), this.Order = new s(), this.Position = new s(), this.Picture = new s();
	}
}, S = class {}, ee = class {}, C = class {}, te = class {}, ne = class extends l {
	constructor() {
		super(), this.Icon = new s(), this.Order = new s(), this.StartTabId = new s();
	}
}, re = class extends l {
	constructor() {
		super(), this.DashboardId = new s(), this.Content = new s(), this.MasterTabId = new s(), this.EntityMappings = new s(), this.PlaceholderDefinition = new s(), this.PlaceholderValues = new s();
	}
}, ie = class {}, ae = class {}, oe = class extends l {
	constructor() {
		super(), this.Enabled = new s(!0), this.EventCategoryId = new s(), this.ExpressionParameters = [], this.EventExpression = new s(), this.BlocklyXml = new s();
	}
}, se = class {
	constructor() {
		this.Type = new s(), this.ParameterId = new s(), this.ConditionId = new s();
	}
}, ce;
(function(e) {
	e.CriticalAlarm = "CriticalAlarm", e.MajorAlarm = "MajorAlarm", e.MinorAlarm = "MinorAlarm", e.WarningAlarm = "WarningAlarm", e.InformationalAlarm = "InformationalAlarm", e.IndeterminateAlarm = "IndeterminateAlarm", e.Info = "Info", e.Warning = "Warning", e.Error = "Error";
})(ce ||= {});
var le;
(function(e) {
	e[e.OnRaised = 1] = "OnRaised", e[e.OnDropped = 2] = "OnDropped";
})(le ||= {});
var ue = class extends l {
	constructor() {
		super(), this.Class = new s(ce.Info), this.RequiresAcknowledgment = new s(!0), this.NoRepeatUntilAcknowledged = new s(!1), this.AlarmOn = new s(le.OnRaised), this.Icon = new s(), this.Color = new s();
	}
}, de = class extends l {
	constructor() {
		super(), this.Enabled = new s(!0);
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
		super(fe.SignalConditionSettings), this.InConditionOperator = new s(), this.OutConditionOperator = new s(), this.InConditionValue = new s(), this.OutConditionValue = new s(), this.InDelay = new s(), this.OutDelay = new s(), this.SignalId = new s();
	}
}, he = class extends w {
	constructor() {
		super(fe.CounterConditionSettings), this.SignalId = new s(), this.Value = new s(), this.StartValue = new s(), this.StartDate = new s(), this.DelayedTriggeringEnabled = new s(!1);
	}
}, ge = class extends w {
	constructor() {
		super(fe.ConnectionFailureConditionSettings), this.MaxOfflineTime = new s(), this.DataSourceId = new s();
	}
}, _e = class extends w {
	constructor() {
		super(fe.DataConnectionFailure), this.MaxOfflineTime = new s(), this.DataConnectionId = new s();
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
		super(fe.RecordingFailureMonitoringSettings), this.SignalId = new s(null), this.MaxOutageTime = new s(6e4);
	}
}, De = class extends w {
	constructor() {
		super(fe.DifferenceMonitoringSettings);
	}
}, Oe = class {}, ke;
(function(e) {
	e.EdgeGateway = "EdgeGateway", e.DataAdapter = "DataAdapter", e.SmartDevice = "SmartDevice";
})(ke ||= {});
var Ae = class extends l {
	constructor() {
		super(), this.Address = new s(null), this.Password = new s(null), this.Type = new s(ke.EdgeGateway), this.PermaLiveModeSettings = new je(), this.Settings = {};
	}
}, je = class {
	constructor() {
		this.Enabled = new s(!1), this.BlockingTime = new s(10);
	}
}, Me;
(function(e) {
	e.S7 = "S7", e.OpcUa = "OpcUa", e.Modbus = "Modbus", e.Universal = "Universal", e.Simulation = "Simulation", e.Knx = "Knx", e.Iot2000Module = "Iot2000Module", e.ModemInfo = "ModemInfo", e.MtmAdapter = "MtmAdapter", e.YDOCDataLogger = "YDOCDataLogger", e.OTTDataLogger = "OTTDataLogger", e.TeltonikaGPSTracker = "TeltonikaGPSTracker", e.LoRaWAN = "LoRaWAN", e.CsvImporter = "CsvImporter", e.IEC104 = "IEC104", e.BACnet = "BACnet", e.EhWebserver = "EhWebserver", e.FtpParser = "FtpParser", e.Snmp = "Snmp", e.Mqtt = "Mqtt", e.OneWire = "OneWire", e.MeterBus = "MeterBus";
})(Me ||= {});
var Ne;
(function(e) {
	e.None = "None", e.JUMO = "JUMO";
})(Ne ||= {});
var Pe = class extends l {
	constructor() {
		super(), this.DataSourceId = new s(null), this.Type = new s(null), this.Settings = null, this.SpecialDeviceProfile = new s(Ne.None), this.InactivityTimeout = new s(null), this.PollingInterval = new s(null);
	}
}, Fe = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Ie = class extends Fe {
	constructor() {
		super("DataConnectionS7Settings"), this.Host = new s(null), this.Port = new s(502), this.Rack = new s(0), this.Slot = new s(2), this.Timeout = new s(5e3), this.LocalTSAP = new s(null), this.RemoteTSAP = new s(null);
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
		super("DataConnectionOpcUaSettings"), this.Url = new s(null), this.SecurityPolicy = new s(Le.None), this.SecurityMode = new s(Re.None), this.SecurityAuthentication = new s(ze.Anonymous), this.Username = new s(null), this.Password = new s(null), this.Certificate = new s(null), this.PrivateKey = new s(null), this.PublishingInterval = new s(1e3), this.SamplingInterval = new s(1e3), this.QueueSize = new s(-1), this.Timeout = new s(5e3), this.StringEncoding = new s(Be.UTF8), this.TimestampSource = new s(Ve.Connection);
	}
}, Ue = class extends Fe {
	constructor() {
		super("DataConnectionModbusSettings"), this.Host = new s(null), this.Port = new s(502);
	}
}, We = class extends Fe {
	constructor() {
		super("DataConnectionIEC104Settings"), this.Host = new s(null), this.Port = new s(2404), this.OriginatorAddress = new s(0), this.TimeSyncInterval = new s(720), this.GeneralInterrogationInterval = new s(60), this.CounterInterrogationInterval = new s(60), this.CommonAddressFieldLength = new s(2), this.CotFieldLength = new s(2), this.IoaFieldLength = new s(3), this.MaxIdleTime = new s(2e4), this.MaxTimeNoAckReceived = new s(15e3), this.MaxTimeNoAckSent = new s(1e4), this.MaxUnconfirmedIPdusReceived = new s(8), this.MaxNumOfOutstandingIPdus = new s(12), this.MessageFragmentTimeout = new s(5e3);
	}
}, Ge = class extends Fe {
	constructor() {
		super("DataConnectionBacnetSettings"), this.Port = new s(47808), this.Interface = new s(null), this.BroadcastAddress = new s(null), this.ApduTimeout = new s(6e3);
	}
}, Ke = class extends Fe {
	constructor() {
		super("DataConnectionSimulationSettings"), this.ScriptPath = new s(null), this.ScriptCycle = new s(500);
	}
}, qe = class extends Fe {
	constructor() {
		super("DataConnectionUniversalSettings"), this.DriverPath = new s(null);
	}
}, Je = class extends Fe {
	constructor() {
		super("DataConnectionKnxSettings"), this.Host = new s(null), this.Port = new s(null), this.Interface = new s(null), this.PhysicalAddress = new s("15.15.15"), this.ForceTunneling = new s(!1), this.MinimumDelay = new s(null), this.SuppressAckLDataReq = new s(!1);
	}
}, Ye = class extends Fe {
	constructor() {
		super("DataConnectionIot2000ModuleSettings"), this.MLFB = new s(null);
	}
}, Xe = class extends Fe {
	constructor() {
		super("DataConnectionEhWebserverSettings"), this.Host = new s(null), this.AccessCode = new s("0000");
	}
}, Ze = class extends Fe {
	constructor() {
		super("DataConnectionSnmpSettings"), this.Host = new s(null), this.Port = new s(161), this.Timeout = new s(5e3), this.Community = new s(null);
	}
}, Qe = class extends Fe {
	constructor() {
		super("DataConnectionModemInfoSettings");
	}
}, $e = class extends Fe {
	constructor() {
		super("DataConnectionMqttSettings"), this.Url = new s(null), this.Username = new s(null), this.Password = new s(null);
	}
}, et = class extends Fe {
	constructor() {
		super("DataConnectionOneWireSettings"), this.Host = new s("localhost"), this.Port = new s(4304);
	}
}, tt;
(function(e) {
	e.serial = "serial", e.tcp = "tcp";
})(tt ||= {});
var nt = class extends Fe {
	constructor() {
		super("DataConnectionMeterBusSettings"), this.Mode = new s(tt.tcp), this.HostOrSerialPort = new s(null), this.Port = new s(0), this.BaudRate = new s(2400), this.Timeout = new s(5e3);
	}
}, rt = class extends Fe {
	constructor() {
		super("DataConnectionMtmAdapterSettings"), this.TimeoutTime = new s(120), this.KeepAliveTime = new s(null), this.Username = new s(null), this.Password = new s(null);
	}
}, it = class extends Fe {
	constructor() {
		super("DataConnectionYDOCDataLoggerSettings"), this.DeviceId = new s(null), this.Username = new s(null), this.Password = new s(null);
	}
}, at = class extends Fe {
	constructor() {
		super("DataConnectionOTTDataLoggerSettings"), this.Station = new s(null), this.Password = new s(null);
	}
}, ot = class extends Fe {
	constructor() {
		super("DataConnectionTeltonikaGPSSettings"), this.Address = new s(null);
	}
}, st = class extends Fe {
	constructor() {
		super("DataConnectionLoRaWANSettings"), this.DeviceType = new s(null), this.DeviceEUI = new s(null), this.DeviceConfiguration = new s(null);
	}
}, ct = class extends Fe {
	constructor() {
		super("DataConnectionCsvImporterSettings"), this.Address = new s(null);
	}
}, lt = class extends Fe {
	constructor() {
		super("DataConnectionFtpParserSettings"), this.ParserType = new s(null), this.ConnectionType = new s(null), this.Address = new s(null), this.Port = new s(21), this.Username = new s(null), this.Password = new s(null), this.ValidateCertificate = new s(!1), this.FileDirectory = new s(null), this.EncryptionMode = new s(null), this.RequestInterval = new s(0), this.DeleteReadFiles = new s(!1);
	}
}, ut;
(function(e) {
	e.AnalogInput = "AnalogInput", e.AnalogInOut = "AnalogInOut", e.DigitalInput = "DigitalInput", e.DigitalInOut = "DigitalInOut", e.Counter = "Counter", e.UniversalInput = "UniversalInput", e.UniversalInOut = "UniversalInOut";
})(ut ||= {});
var dt = class extends l {
	constructor() {
		super(), this.Type = new s(ut.AnalogInput), this.DataConnectionId = new s(), this.Address = new s(), this.Settings = new gt(), this.OutputSettings = new ft(), this.RecordingSettings = new St(), this.CompressionSettings = new wt(), this.Color = new s(), this.MultiLineAddress = new s(!1);
	}
}, ft = class {
	constructor() {
		this.AutoresetEnabled = new s(!1), this.AutoresetValue = new s(0), this.AutoresetDelay = new s(3);
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
		super("SignalDigitalSettings"), this.DigitalTrueColor = new s(), this.DigitalTrueCaption = new s(), this.DigitalFalseColor = new s(), this.DigitalFalseCaption = new s(), this.Invert = new s(!1), this.BitSelect = new s(), this.BitSelectConversion = new s(pt.None);
	}
}, gt = class extends mt {
	constructor() {
		super("SignalAnalogSettings"), this.MinValue = new s(0), this.MaxValue = new s(100), this.DefaultValue = new s(null), this.DecimalPlaces = new s(0), this.Unit = new s(), this.Factor = new s(1), this.Offset = new s(0), this.ScalingCalculatorState = new s();
	}
}, _t = class {}, vt = class extends mt {
	constructor() {
		super("SignalCounterSettings"), this.MaxValue = new s(100), this.OffsetAutomatic = new s(!0), this.OffsetDetection = new s(!0), this.DecimalPlaces = new s(0), this.Unit = new s(), this.Factor = new s(1), this.Offset = new s(0), this.EnforceMonotonicInput = new s(!0);
	}
}, yt = {
	AnalogInput: gt,
	AnalogInOut: gt,
	DigitalInput: ht,
	DigitalInOut: ht,
	Counter: vt,
	UniversalInput: null,
	UniversalInOut: null
}, bt;
(function(e) {
	e.None = "None", e.LiveFlowMeter = "LiveFlowMeter", e.Watchdog = "Watchdog";
})(bt ||= {});
var xt;
(function(e) {
	e.MeanValue = "MeanValue", e.LastValue = "LastValue";
})(xt ||= {});
var St = class {
	constructor() {
		this.SpecialProcessingType = new s(bt.None), this.Type = new s(xt.MeanValue), this.Interval = new s(300);
	}
};
function Ct(e) {
	let t = new St();
	return e === ut.AnalogInput || e === ut.AnalogInOut ? t.Type.Value = xt.MeanValue : (e === ut.Counter || e === ut.DigitalInput || e === ut.DigitalInOut) && (t.Type.Value = xt.LastValue), t;
}
var T;
(function(e) {
	e.None = "None", e.WeightedMean = "WeightedMean", e.ArithmeticMean = "ArithmeticMean", e.Difference = "Difference", e.Sum = "Sum", e.Time = "Time", e.Text = "Text";
})(T ||= {});
var wt = class {
	constructor() {
		this.Timezones = new s(), this.Timezones = new s([]), this.SubIntervalCompressionType = new s(T.None), this.HourIntervalCompressionType = new s(T.None), this.TwoHourIntervalCompressionType = new s(T.None), this.DayIntervalCompressionType = new s(T.None), this.WeekIntervalCompressionType = new s(T.None), this.MonthIntervalCompressionType = new s(T.None), this.QuarterIntervalCompressionType = new s(T.None), this.YearIntervalCompressionType = new s(T.None);
	}
};
function Tt(e) {
	let t = new wt();
	return e === ut.AnalogInput || e === ut.AnalogInOut ? (t.SubIntervalCompressionType.Value = T.ArithmeticMean, t.HourIntervalCompressionType.Value = T.ArithmeticMean, t.TwoHourIntervalCompressionType.Value = T.ArithmeticMean, t.DayIntervalCompressionType.Value = T.ArithmeticMean, t.WeekIntervalCompressionType.Value = T.ArithmeticMean, t.MonthIntervalCompressionType.Value = T.ArithmeticMean, t.QuarterIntervalCompressionType.Value = T.ArithmeticMean, t.YearIntervalCompressionType.Value = T.ArithmeticMean) : e === ut.Counter && (t.SubIntervalCompressionType.Value = T.Sum, t.HourIntervalCompressionType.Value = T.Sum, t.TwoHourIntervalCompressionType.Value = T.Sum, t.DayIntervalCompressionType.Value = T.Sum, t.WeekIntervalCompressionType.Value = T.Difference, t.MonthIntervalCompressionType.Value = T.Difference, t.QuarterIntervalCompressionType.Value = T.Difference, t.YearIntervalCompressionType.Value = T.Difference), t;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/entities/formula.model.js
var Et = class extends l {
	constructor() {
		super(), this.Variables = [], this.Type = new s(Nt.Numeric), this.SignalId = new s(null), this.CalculateOnlyWithFullVariableSet = new s(!1), this.NumericSettings = new Dt(), this.ProcessIntervalSettings = new kt(), this.SubIntervalSettings = new kt(), this.HourIntervalSettings = new kt(), this.TwoHourIntervalSettings = new kt(), this.DayIntervalSettings = new kt(), this.WeekIntervalSettings = new kt(), this.MonthIntervalSettings = new kt(), this.QuarterIntervalSettings = new kt(), this.YearIntervalSettings = new kt(), this.SameFormulaForAllIntervals = new s(!1);
	}
}, Dt = class {
	constructor() {
		this.DecimalPlaces = new s(0), this.Unit = new s(null);
	}
}, Ot = class {
	constructor() {
		this.ValueType = new s(Pt.Normal), this.VariableName = new s(null), this.ObjectId = new s(null), this.ObjectType = new s(Mt.Signal), this.TagScope = new s(Ft.Global);
	}
}, kt = class {
	constructor() {
		this.Formula = new s(null), this.ValueIntervalType = new s(null), this.CompressionType = new s(jt.ArithmeticMean), this.ProvidePreValues = new s(!1), this.ProvideLastValues = new s(!1);
	}
}, At;
(function(e) {
	e.Standard = "Standard", e.ProcessInterval = "ProcessInterval", e.SubInterval = "SubInterval", e.HourInterval = "HourInterval", e.TwoHourInterval = "TwoHourInterval", e.DayInterval = "DayInterval", e.WeekInterval = "WeekInterval", e.MonthInterval = "MonthInterval", e.QuarterInterval = "QuarterInterval", e.YearInterval = "YearInterval";
})(At ||= {});
var jt;
(function(e) {
	e.ArithmeticMean = "ArithmeticMean", e.Sum = "Sum";
})(jt ||= {});
var Mt;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula", e.Tag = "Tag";
})(Mt ||= {});
var Nt;
(function(e) {
	e.Numeric = "Numeric", e.Universal = "Universal";
})(Nt ||= {});
var Pt;
(function(e) {
	e.Normal = "Normal", e.Minimum = "Minimum", e.Maximum = "Maximum";
})(Pt ||= {});
var Ft;
(function(e) {
	e.Global = "Global", e.Tenant = "Tenant", e.Group = "Group", e.GroupAndSubGroups = "GroupAndSubGroups";
})(Ft ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/entities/connector.model.js
var It;
(function(e) {
	e.RestApi = "RestApi";
})(It ||= {});
var Lt = class extends l {
	constructor() {
		super(), this.Type = new s(), this.Objects = [];
	}
}, Rt = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, zt = class extends Rt {
	constructor() {
		super("ConnectorRestApiSettings"), this.Credentials = [];
	}
}, Bt = class {
	constructor() {
		this.ClientId = new s(), this.ClientSecret = new s();
	}
}, Vt;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula", e.Group = "Group", e.EventCategory = "EventCategory", e.BatchDefinition = "BatchDefinition";
})(Vt ||= {});
var Ht;
(function(e) {
	e.Read = "Read", e.ReadWrite = "ReadWrite", e.Write = "Write";
})(Ht ||= {});
var Ut = class {
	constructor() {
		this.ObjectName = new s(), this.ObjectType = new s(), this.ObjectId = new s(), this.AccessLevel = new s();
	}
}, Wt = class extends l {
	constructor() {
		super(), this.ImageFile = new s();
	}
}, Gt;
(function(e) {
	e.Start = "Start", e.Stop = "Stop", e.Release = "Release";
})(Gt ||= {});
var Kt;
(function(e) {
	e.EventDefinition = "EventDefinition", e.Condition = "Condition", e.Manual = "Manual";
})(Kt ||= {});
var qt;
(function(e) {
	e.Raised = "Raised", e.Dropped = "Dropped";
})(qt ||= {});
var Jt;
(function(e) {
	e.EventDefinition = "EventDefinition", e.Condition = "Condition";
})(Jt ||= {});
var Yt;
(function(e) {
	e.NumberField = "NumberField", e.TextField = "TextField", e.BooleanField = "BooleanField", e.SelectField = "SelectField", e.DateField = "DateField", e.CustomMappingField = "CustomMappingField", e.UserField = "UserField", e.TextAreaField = "TextAreaField", e.CheckboxField = "CheckboxField";
})(Yt ||= {});
var Xt;
(function(e) {
	e.Manual = "Manual", e.Signal = "Signal", e.Incremental = "Incremental";
})(Xt ||= {});
var Zt = class extends l {
	constructor() {
		super(), this.ParallelBatchesEnabled = !1, this.BatchTriggers = [], this.MetadataFields = {}, this.BatchValueObjects = [], this.ConditionEventEntries = [], this.BatchReportIds = [], this.BatchReportExportSettings = [], this.BatchReviewSettings = new an(), this.ReleaseSettings = new $t();
	}
}, Qt = class {}, $t = class {
	constructor() {
		this.Enabled = !1, this.SignalId = null, this.ReleaseValue = null;
	}
}, en = class {}, tn = class {}, nn = class {}, rn = class {}, an = class {
	constructor() {
		this.Enabled = !1, this.Reviews = [], this.Ordered = !1;
	}
}, on = class {}, sn;
(function(e) {
	e.WYSIWYG = "WYSIWYG", e.JsTemplate = "JsTemplate";
})(sn ||= {});
var cn;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(cn ||= {});
var ln = class extends l {
	constructor() {
		super(), this.ScriptFile = new s(), this.TemplateFile = new s(), this.EngineType = new s(sn.JsTemplate), this.DefaultStepSize = new s(cn.Day);
	}
}, un;
(function(e) {
	e.PDF = "PDF", e.CSV = "CSV", e.XLSX = "XLSX", e.DOCX = "DOCX", e.PNG = "PNG", e.JPG = "JPG";
})(un ||= {});
var dn;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(dn ||= {});
var fn;
(function(e) {
	e.AVG = "AVG", e.SUM = "SUM", e.MIN = "MIN", e.MAX = "MAX";
})(fn ||= {});
var pn;
(function(e) {
	e.TextBox = "TextBox", e.NumberBox = "NumberBox", e.RadioList = "RadioList", e.SelectList = "SelectList", e.Signal = "Signal", e.CheckBox = "CheckBox";
})(pn ||= {});
var mn = class extends l {
	constructor() {
		super(), this.Title = new s(), this.Parameters = new s(), this.Elements = new s({}), this.Templates = new s([]), this.TimeZone = new s("CET"), this.EventReportSettings = new s(new yn());
	}
}, hn = class {}, gn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.Caption = new s(), this.Alias = new s(), this.Parameters = new s();
	}
}, _n = class extends gn {
	constructor() {
		super("ReportCaptionElement"), this.Elements = [];
	}
}, vn = class extends gn {
	constructor() {
		super("ReportItemElement"), this.Type = new s(), this.ObjectType = new s(), this.ObjectId = new s();
	}
}, yn = class {
	constructor() {
		this.EventReports = [];
	}
}, bn = class {
	constructor() {
		this.Actions = [];
	}
}, xn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Sn = class extends xn {
	constructor() {
		super("MailEventAction");
	}
}, Cn = class extends xn {
	constructor() {
		super("StorageEventAction");
	}
}, wn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, Tn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, En = class {}, Dn = class extends wn {
	constructor() {
		super("ReportGroup"), this.GroupElements = {};
	}
}, On = class extends Tn {
	constructor() {
		super("ReportGroupSettings"), this.GroupElementSettings = {};
	}
}, kn = class extends wn {
	constructor() {
		super("ReportList"), this.ListEntries = [];
	}
}, An = class extends Tn {
	constructor() {
		super("ReportListSettings");
	}
}, jn = class extends wn {
	constructor() {
		super("ReportField");
	}
}, Mn = class extends Tn {
	constructor() {
		super("ReportFieldSettings");
	}
}, Nn = class extends wn {
	constructor() {
		super("ReportTable");
	}
}, Pn = class extends Tn {
	constructor() {
		super("ReportTableSettings");
	}
}, Fn = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.AdditionalSettings = {};
	}
}, In = class extends Fn {
	constructor() {
		super("ReportTableEntry");
	}
}, Ln = class extends Fn {
	constructor() {
		super("ReportTableHeader");
	}
}, Rn = class {}, zn = class extends l {
	constructor() {
		super(), this.DocumentFile = new s();
	}
}, Bn;
(function(e) {
	e.LiveFirst = "LiveFirst", e.ArchiveFirst = "ArchiveFirst", e.ArchiveOnly = "ArchiveOnly";
})(Bn ||= {});
var Vn = class extends l {
	constructor() {
		super(), this.Address = new s(), this.Username = new s(), this.Password = new s(), this.MaxViewInterval = new s(1e4), this.ViewMode = new s(), this.EventIds = new s();
	}
}, Hn;
(function(e) {
	e.Scheduled = "Scheduled", e.Manual = "Manual", e.Event = "Event";
})(Hn ||= {});
var Un = class {}, Wn = class extends l {
	constructor() {
		super(), this.Rules = new s([]), this.Icon = new s();
	}
}, Gn = class {}, Kn = class extends l {
	constructor() {
		super(), this.RuleId = new s(), this.SwitchScheduleId = new s(), this.Enabled = new s(), this.StartValue = new s(), this.EndValue = new s(), this.Color = new s();
	}
}, qn;
(function(e) {
	e.On = "On", e.Off = "Off";
})(qn ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/entities/user.model.js
var Jn;
(function(e) {
	e.None = "None", e.Pending = "Pending", e.Failed = "Failed", e.Denied = "Denied", e.Successful = "Successful";
})(Jn ||= {});
var Yn = class extends l {
	constructor() {
		super(), this.FirstName = new s(), this.LastName = new s(), this.UserId = new s(), this.Email = new s(), this.RegistrationState = new s(Jn.None), this.RegistrationCredentials = new s(), this.RegistrationDate = new s();
	}
}, Xn = class extends l {
	constructor() {
		super(), this.RoleMember = [], this.StartDashboardId = new s();
	}
}, Zn;
(function(e) {
	e.Male = "Male", e.Female = "Female", e.Diverse = "Diverse";
})(Zn ||= {});
var Qn = class extends l {
	constructor() {
		super(), this.Salutation = new s(), this.Gender = new s(), this.Principal = new s(null), this.Contacts = new s({}), this.Enabled = new s(!1), this.FirstName = new s(null), this.LastName = new s(null);
	}
}, $n = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, er = class extends $n {
	constructor() {
		super("EmailContact");
	}
}, tr = class extends $n {
	constructor(e) {
		super(e);
	}
}, nr = class extends tr {
	constructor() {
		super("SmsContact");
	}
}, rr = class extends tr {
	constructor() {
		super("VoipContact");
	}
}, ir = class extends $n {
	constructor() {
		super("TelegramContact");
	}
}, ar = class extends $n {
	constructor() {
		super("TeamsContact");
	}
}, or = class extends $n {
	constructor() {
		super("PushoverContact");
	}
}, sr = class extends l {
	constructor() {
		super(), this.Enabled = new s(!0), this.Loops = new s(3), this.Members = [], this.Color = new s();
	}
}, cr = class {}, lr = class extends l {
	constructor() {
		super(), this.Enabled = new s(), this.Offset = new s(), this.EventCategoryIds = new s(), this.GlobalRecipient = new s(), this.DefaultRecipient = new s();
	}
}, ur = class extends l {
	constructor() {
		super(), this.Category = new s(), this.Enabled = new s(), this.Trigger = new s(), this.MaintenanceTasks = new s();
	}
}, dr = class extends l {
	constructor() {
		super(), this._t = this.constructor.name, this.DefaultAssignees = new s([]), this.AgendaDefinition = new s([]);
	}
}, fr = class {
	constructor(e) {
		this._t = e ?? this.constructor.name, this.Description = new c();
	}
}, pr = class extends l {
	constructor() {
		super(), this.Script = new s(), this.Enabled = new s(!0);
	}
}, mr = class {
	constructor() {
		this.Name = new s(), this.Value = new s();
	}
}, hr = class {
	constructor(e) {
		this._t = e ?? this.constructor.name;
	}
}, gr = class extends hr {
	constructor() {
		super("CyclicTrigger"), this.Interval = new s();
	}
}, _r;
(function(e) {
	e.Entered = "Entered", e.Dropped = "Dropped", e.Acknowledged = "Acknowledged";
})(_r ||= {});
var vr = class extends hr {
	constructor() {
		super("EventTrigger"), this.State = new s(), this.EventDefinitionId = new s();
	}
}, yr;
(function(e) {
	e.Raised = "Raised", e.Dropped = "Dropped";
})(yr ||= {});
var br = class extends hr {
	constructor() {
		super("ConditionTrigger"), this.State = new s(), this.ConditionId = new s();
	}
}, xr;
(function(e) {
	e.Started = "Started", e.Stopped = "Stopped";
})(xr ||= {});
var Sr = class extends hr {
	constructor() {
		super("BatchTrigger"), this.State = new s(), this.BatchDefinitionId = new s();
	}
}, Cr = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, wr = class {}, Tr;
(function(e) {
	e.ProcessInterval = "ProcessInterval", e.SubInterval = "SubInterval", e.HourInterval = "HourInterval", e.TwoHourInterval = "TwoHourInterval", e.DayInterval = "DayInterval", e.WeekInterval = "WeekInterval", e.MonthInterval = "MonthInterval", e.QuarterInterval = "QuarterInterval", e.YearInterval = "YearInterval";
})(Tr ||= {});
var Er;
(function(e) {
	e.System = "System", e.Process = "Process", e.Import = "Import", e.Manual = "Manual", e.Mixed = "Mixed", e.Manipulated = "Manipulated";
})(Er ||= {});
function Dr(e) {
	let t = [
		"IntervalStart",
		"Manual",
		"Note",
		"Value"
	];
	return Object.keys(e || {}).filter((e) => !t.includes(e)).map((t) => ({
		id: t,
		value: e[t]
	}));
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/historical-value-operation.model.js
var Or;
(function(e) {
	e.Pending = "Pending", e.Completed = "Completed", e.Failed = "Failed";
})(Or ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/entity-type-class-mapping.js
var kr = {
	[r.Group]: x,
	[r.Signal]: dt,
	[r.Dashboard]: ne,
	[r.DashboardTab]: re,
	[r.DataConnection]: Pe,
	[r.DataSource]: Ae,
	[r.Connector]: Lt,
	[r.EventCategory]: ue,
	[r.EventCondition]: de,
	[r.EventDefinition]: oe,
	[r.Formula]: Et,
	[r.ProcessImage]: Wt,
	[r.BatchDefinition]: Zt,
	[r.ReportTemplate]: ln,
	[r.Report]: mn,
	[r.Document]: zn,
	[r.Camera]: Vn,
	[r.SwitchSchedule]: Wn,
	[r.User]: Yn,
	[r.Role]: Xn,
	[r.Recipient]: Qn,
	[r.RecipientGroup]: sr,
	[r.AlarmingPlan]: lr,
	[r.MaintenanceService]: ur,
	[r.TaskDefinition]: dr,
	[r.RuntimeScript]: pr
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
		this._setObjectProperty(e, t.split("."), n, "", r, i);
	}
	static getPropertyValue(e, t, n) {
		let r = t.split("."), i = e, a = "";
		for (let e of r) {
			if (!i) return null;
			a === "AdditionalFields" ? i[e]?.Value && (i = Ar.tryParseJson(i[e].Value)) : i = i[e], a = e;
		}
		return n || s.isField(i) ? i?.Value : i;
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
			s.isField(n) ? r.push({
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
		let c = t.shift();
		if (t.length === 0) {
			if (a && !o.includes(c)) return;
			e[c] = i || s.isField(e[c]) ? new s(n) : n;
			return;
		}
		if (o.includes(c) && typeof e[c] == "object") {
			let r = e[c];
			this._setObjectProperty(r, t, n, c, i, a);
		}
	}
	static _setAdditionalField(e, t, n) {
		if (t.length === 0) return;
		let r = t.shift();
		if (t.length === 0) {
			e[r] = new s(n?.toString());
			return;
		}
		{
			let i = e[r] ? Ar.tryParseJson(e[r].Value, {}) ?? {} : {};
			for (let e of t) t.indexOf(e) === t.length - 1 ? i[e] = n : (i[e] = i[e] || {}, i = i[e]);
			e[r] = new s(JSON.stringify(i));
		}
	}
};
//#endregion
//#region node_modules/@audako/core/dist/mjs/utils/global-utils.js
async function Mr(e) {
	try {
		return [null, await Promise.resolve(e)];
	} catch (e) {
		return [e, null];
	}
}
function Nr(e) {
	return e == null;
}
function Pr(e) {
	return Nr(e) || e.length === 0;
}
function Fr(e) {
	return Nr(e) || e.trim().length === 0;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var Ir = function(e, t) {
	return Ir = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Ir(e, t);
};
function Lr(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Ir(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Rr(e, t, n, r) {
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
function zr(e, t) {
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
function Br(e) {
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
function Vr(e, t) {
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
function Hr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function Ur(e) {
	return this instanceof Ur ? (this.v = e, this) : new Ur(e);
}
function Wr(e, t, n) {
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
		e.value instanceof Ur ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function Gr(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof Br == "function" ? Br(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Kr(e) {
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
					for (var o = Br(a), s = o.next(); !s.done; s = o.next()) s.value.remove(this);
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
			if (Kr(c)) try {
				c();
			} catch (e) {
				i = e instanceof Jr ? e.errors : [e];
			}
			var l = this._finalizers;
			if (l) {
				this._finalizers = null;
				try {
					for (var u = Br(l), d = u.next(); !d.done; d = u.next()) {
						var f = d.value;
						try {
							$r(f);
						} catch (e) {
							i ??= [], e instanceof Jr ? i = Hr(Hr([], Vr(i)), Vr(e.errors)) : i.push(e);
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
	return e instanceof Xr || e && "closed" in e && Kr(e.remove) && Kr(e.add) && Kr(e.unsubscribe);
}
function $r(e) {
	Kr(e) ? e() : e.unsubscribe();
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
		return r?.setTimeout ? r.setTimeout.apply(r, Hr([e, t], Vr(n))) : setTimeout.apply(void 0, Hr([e, t], Vr(n)));
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
	Lr(t, e);
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
	Lr(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this, a;
		if (Kr(t) || !t) a = {
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
	return e && Kr(e.next) && Kr(e.error) && Kr(e.complete);
}
function Ei(e) {
	return e && e instanceof di || Ti(e) && Qr(e);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
function Di(e) {
	return Kr(e?.lift);
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
	Lr(t, e);
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
	Lr(t, e);
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
					for (var i = Br(t.currentObservers), a = i.next(); !a.done; a = i.next()) a.value.next(e);
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
	Lr(t, e);
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
	Lr(t, e);
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
	Lr(t, e);
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
	Lr(t, e);
	function t(t, n) {
		return e.call(this) || this;
	}
	return t.prototype.schedule = function(e, t) {
		return t === void 0 && (t = 0), this;
	}, t;
}(Xr), Ri = {
	setInterval: function(e, t) {
		var n = [...arguments].slice(2), r = Ri.delegate;
		return r?.setInterval ? r.setInterval.apply(r, Hr([e, t], Vr(n))) : setInterval.apply(void 0, Hr([e, t], Vr(n)));
	},
	clearInterval: function(e) {
		return (Ri.delegate?.clearInterval || clearInterval)(e);
	},
	delegate: void 0
}, zi = function(e) {
	Lr(t, e);
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
	Lr(t, e);
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
	return e && Kr(e.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function Gi(e) {
	return e[e.length - 1];
}
function Ki(e) {
	return Kr(Gi(e)) ? e.pop() : void 0;
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
	return Kr(e?.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function Xi(e) {
	return Kr(e[bi]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function Zi(e) {
	return Symbol.asyncIterator && Kr(e?.[Symbol.asyncIterator]);
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
	return Kr(e?.[ea]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function na(e) {
	return Wr(this, arguments, function() {
		var t, n, r, i;
		return zr(this, function(a) {
			switch (a.label) {
				case 0: t = e.getReader(), a.label = 1;
				case 1: a.trys.push([
					1,
					,
					9,
					10
				]), a.label = 2;
				case 2: return [4, Ur(t.read())];
				case 3: return n = a.sent(), r = n.value, i = n.done, i ? [4, Ur(void 0)] : [3, 5];
				case 4: return [2, a.sent()];
				case 5: return [4, Ur(r)];
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
	return Kr(e?.getReader);
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
		if (Kr(n.subscribe)) return n.subscribe(t);
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
			for (var i = Br(e), a = i.next(); !a.done; a = i.next()) {
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
	return Rr(this, void 0, void 0, function() {
		var o, s;
		return zr(this, function(c) {
			switch (c.label) {
				case 0: c.trys.push([
					0,
					5,
					6,
					11
				]), n = Gr(e), c.label = 1;
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
			return Kr(r?.return) && r.return();
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
	return !!e && (e instanceof Ci || Kr(e.lift) && Kr(e.subscribe));
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
	return ka(t) ? e.apply(void 0, Hr([], Vr(t))) : e(t);
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
	return n === void 0 && (n = Infinity), Kr(t) ? Ua(function(n, r) {
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
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function eo(e, t) {
	return t === void 0 && (t = xi), e ??= to, Oi(function(n, r) {
		var i, a = !0;
		n.subscribe(ki(r, function(n) {
			var o = t(n);
			(a || !e(i, o)) && (a = !1, i = o, r.next(n));
		}));
	});
}
function to(e, t) {
	return e === t;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js
function no(e, t) {
	return eo(function(n, r) {
		return t ? t(n[e], r[e]) : n[e] === r[e];
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function ro(e) {
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
function io(e) {
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
				s--, s === 0 && !u && !l && (r = ao(p, c));
			}), h.subscribe(m), !t && s > 0 && (t = new hi({
				next: function(e) {
					return h.next(e);
				},
				error: function(e) {
					u = !0, d(), r = ao(f, i, e), h.error(e);
				},
				complete: function() {
					l = !0, d(), r = ao(f, o), h.complete();
				}
			}), ia(e).subscribe(t));
		})(e);
	};
}
function ao(e, t) {
	var n = [...arguments].slice(2);
	if (t === !0) {
		e();
		return;
	}
	if (t !== !1) {
		var r = new hi({ next: function() {
			r.unsubscribe(), e();
		} });
		return ia(t.apply(void 0, Hr([], Vr(n)))).subscribe(r);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function oo(e, t, n) {
	var r, i, a, o, s = !1;
	return e && typeof e == "object" ? (r = e.bufferSize, o = r === void 0 ? Infinity : r, i = e.windowTime, t = i === void 0 ? Infinity : i, a = e.refCount, s = a !== void 0 && a, n = e.scheduler) : o = e ?? Infinity, io({
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
function so(e) {
	return Ja(function(t, n) {
		return e <= n;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function co(e, t) {
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
function lo(e) {
	return Oi(function(t, n) {
		ia(e).subscribe(ki(n, function() {
			return n.complete();
		}, ri)), !n.closed && t.subscribe(n);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
function uo(e, t) {
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
function fo(e, t, n) {
	var r = Kr(e) || t || n ? {
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
function po(e, t) {
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
function mo(e, t, n) {
	t === void 0 && (t = Vi);
	var r = qa(e, t);
	return po(function() {
		return r;
	}, n);
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/utils/async-value-utils.js
function ho(e) {
	return typeof e == "function" ? ho(e()) : wa(e) ? Ea(e) : Promise.resolve(e);
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/shared.js
var E = class {
	constructor() {
		this.headerExpanded = !1;
	}
}, go;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(go ||= {});
var _o = class {
	constructor() {
		this.channels = [], this.enabled = !1, this.timecontrol = !1;
	}
}, vo;
(function(e) {
	e.Second = "Second", e.Minute = "Minute", e.Hour = "Hour", e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Quarter = "Quarter", e.Year = "Year";
})(vo ||= {});
var yo = class {
	constructor() {
		this.periodOfTime = vo.Day, this.amountOfTimePeriods = 1, this.beginningOfaDay = "00:00", this.beginningOfaWeek = 1, this.offsetOfTimePeriods = 0;
	}
}, bo;
(function(e) {
	e.StepSeriesOptions = "StepSeriesOptions", e.StepLineSeriesOptions = "StepLineSeriesOptions", e.LineSeriesOptions = "LineSeriesOptions", e.SmoothedLineSeriesOptions = "SmoothedLineSeriesOptions", e.ColumnSeriesOptions = "ColumnSeriesOptions";
})(bo ||= {});
var xo = class {}, So = class extends xo {}, Co = class extends xo {
	constructor() {
		super(...arguments), this.tension = {
			tensionX: .89,
			tensionY: 1
		};
	}
}, wo = class extends xo {}, To = class {}, Eo = class {}, Do = class extends To {
	constructor() {
		super(), this.unit = "";
	}
}, Oo = class {
	constructor() {
		this.title = "", this.yAxis = [], this.series = [], this.guidelines = [], this.enableScrollbar = !1, this.smallLegend = !1, this.legend = !0, this.showAggregationGuidelines = !1, this.showAggregationBullets = !1, this.enableAnnotation = !1, this.bulletDistanceThreshold = 0;
	}
}, ko = "1", Ao = class extends E {
	constructor() {
		super(), this.version = "1", this.signalId = "", this.selectedIcon = "";
	}
}, jo = "1", Mo = class extends E {
	constructor() {
		super(), this.clockType = No.Analog, this.version = "1", this.seconds = !1, this.date = !1, this.timezone = 0;
	}
}, No;
(function(e) {
	e.Digital = "Digital", e.Analog = "Analog";
})(No ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/widget-text-config.js
var Po = "1", Fo = class extends E {
	constructor() {
		super(), this.version = "1", this.headerExpanded = !1;
	}
}, Io = "7", Lo = class extends E {
	constructor() {
		super(), this.version = "7", this.dataSettings = [], this.historicalSetting = new yo(), this.chartConfig = new Oo(), this.timeManagementSettings = new _o(), this.liveDataSettings = {
			displayTimeRange: 0,
			startupType: !1,
			enabled: !1,
			autoZoom: !1
		};
	}
}, Ro = "1", zo = class extends E {
	constructor(e) {
		super(), this.title = "WidgetDataImport", this.signals = [], this.version = "1", this.signals = [], e && Object.assign(this, e);
	}
}, Bo = "2", Vo;
(function(e) {
	e.Signal = "Signal", e.Formula = "Formula";
})(Vo ||= {});
var Ho = class extends E {
	constructor() {
		super(), this.DataType = Vo.Signal, this.version = "2";
	}
}, Uo = {
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
function Wo(e, t) {
	for (let n in Uo) if (Uo[n].start === e && Uo[n].end === t) return n;
	return null;
}
function Go(e) {
	return Uo[e]?.rotation;
}
function Ko(e) {
	return !!Uo[e]?.inverted;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/widget-liquid-fill-gauge.config.js
var qo = "1", Jo = class extends E {
	constructor() {
		super(), this.version = "1", this.minValue = 0, this.maxValue = 100, this.gaugeTitle = "", this.suffix = "", this.displaySuffix = !0, this.waveCount = 2, this.circleThickness = .05, this.circleFillGap = .05, this.animateWave = !0, this.waveColor = "#178BCA", this.circleColor = "#178BCA", this.textColor = "#045681", this.waveTextColor = "#A4DBf8", this.signalId = null, this.waveAnimateTime = 4e3, this.waveHeight = .1, this.showMinMax = !1, this.showNullLine = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, Yo = "2", Xo = class extends E {
	constructor() {
		super(), this.version = "2", this.type = null, this.caption = null, this.lockingValue = null, this.customLockingValue = null, this.lockingState = null, this.displayStatus = !1, this.manageConditions = !1, this.includeSignalHist = !1;
	}
}, Zo = "5", Qo = class {
	constructor() {
		this.expanded = !0;
	}
}, $o = class extends E {
	constructor() {
		super(), this.version = "5";
	}
}, es = "1", ts = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, ns = "1", rs = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, is = "0", as = class {
	constructor(e) {
		Object.assign(this, e);
	}
}, os = class extends E {
	constructor() {
		super(), this.version = "0", this.sliderGroups = null;
	}
}, ss;
(function(e) {
	e.Enabled = "Enabled", e.Disabled = "Disabled", e.Locked = "Locked";
})(ss ||= {});
var cs = "0", ls = class extends E {
	constructor() {
		super(), this.dataGroups = [], this.version = "0";
	}
}, us = "1", ds = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, fs = "1", ps = class extends E {
	constructor() {
		super(), this.version = "1", this.counterSignalIds = [];
	}
}, ms = "2", hs = class extends E {
	constructor() {
		super(), this.title = "", this.queryType = null, this.version = "2";
	}
}, gs = "3", _s = class extends E {
	constructor() {
		super(), this.backgroundColor = null, this.version = "3", this.mode = vs.Receive, this.backgroundColor = "#ffffff", this.transferToken = null, this.crossTabs = !1;
	}
}, vs;
(function(e) {
	e.Send = "Send", e.Receive = "Receive";
})(vs ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/widget-traffic-light-config.js
var ys;
(function(e) {
	e.Red = "Red", e.Yellow = "Yellow", e.Green = "Green", e.Off = "Off";
})(ys ||= {});
var bs = class extends E {
	constructor() {
		super(), this.version = "1", this.title = "", this.headerExpanded = !1, this.mode = xs.TrafficLight, this.settings = [], this.housingColor = null;
	}
}, xs;
(function(e) {
	e.TrafficLight = "TrafficLight", e.PedestrianLight = "PedestrianLight", e.SignalLight = "SignalLight";
})(xs ||= {});
var Ss = {
	[xs.TrafficLight]: "TRAFFIC_LIGHT",
	[xs.PedestrianLight]: "PEDESTRIAN_LIGHT",
	[xs.SignalLight]: "SIGNAL_LIGHT"
}, Cs = {
	[ys.Red]: "RED",
	[ys.Yellow]: "YELLOW",
	[ys.Green]: "GREEN",
	[ys.Off]: "OFF"
}, ws = "1", Ts = class extends E {
	constructor() {
		super(), this.signals = [], this.chartConfig = new Oo();
	}
}, Es = "5", Ds = class extends E {
	constructor() {
		super(), this.unit = "", this.version = "5", this.compressionSettings = Tr.DayInterval, this.historicalSetting = new yo(), this.timeManagementSettings = new _o(), this.headerExpanded = !1;
	}
}, Os = class {}, ks = "2", As = class {}, js = class {}, Ms = class {}, Ns = class extends E {
	constructor() {
		super(), this.version = "2";
	}
}, Ps = "2", Fs;
(function(e) {
	e.Sum = "Sum", e.Average = "Average";
})(Fs ||= {});
var Is = class extends E {
	constructor() {
		super(), this.unit = "", this.nodes = [], this.connections = [], this.version = "2", this.timeManagementSettings = new _o(), this.compressionSettings = Tr.DayInterval;
	}
}, Ls = "2", Rs = class extends E {
	constructor() {
		super(), this.version = "2", this.TemplateTimeSteps = {};
	}
}, zs;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(zs ||= {});
var Bs = "WidgetReport", Vs = "4", Hs = class extends E {
	constructor() {
		super(), this.version = "4", this.acquisitionInterval = Us.Month, this.acquisitionUnit = Ws.DayValues, this.manualDataSignalMasks = [], this.additionalOptions = {}, this.timelineOption = Gs.AUTO, this.showStatusIcons = !0, this.showAlias = !1, this.showPreviousPermanent = !1, this.showPreviousDefault = !0, this.autoSaveAndNext = !0;
	}
}, Us;
(function(e) {
	e.Week = "Week", e.Month = "Month", e.Year = "Year";
})(Us ||= {});
var Ws;
(function(e) {
	e.ProcessValues = "ProcessValues", e.HourValues = "HourValues", e.DayValues = "DayValues", e.WeekValues = "WeekValues", e.MonthValues = "MonthValues", e.YearValues = "YearValues";
})(Ws ||= {});
var Gs;
(function(e) {
	e.ENABLED = "0", e.DISABLED = "1", e.AUTO = "2";
})(Gs ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/widget-billing-config.js
var Ks = "1", qs = class extends E {
	constructor() {
		super(), this.version = "1", this.currencyCode = "€", this.counters = [];
	}
}, Js;
(function(e) {
	e.SIGNAL = "signal", e.VALUE = "value";
})(Js ||= {});
var Ys = [
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
], Xs = "1", Zs = class extends E {
	constructor(e) {
		super(), this.version = "1", this.displayedMetadataFields = [], this.orderSpecificMetadataFields = [], this.showHistory = !0, this.timePeriod = vo.Day, this.periodAmount = 1, e && Object.assign(this, e);
	}
}, Qs = "1", $s = class {
	constructor(e) {
		this.version = "1", e && Object.assign(this, e);
	}
}, ec = "8", tc = class {
	constructor(e = 0, t = 0) {
		this.lng = t, this.lat = e;
	}
}, nc = class extends E {
	constructor() {
		super(), this.Marker = [], this.mapGroups = [], this.version = "8", this.headerExpanded = !1, this.autoZoom = !0, this.defaultZoom = 20;
	}
}, rc;
(function(e) {
	e.Live = "Live";
})(rc ||= {});
var ic = {
	...rc,
	...Tr
}, ac = class {
	constructor() {
		this.intervalType = rc.Live;
	}
}, oc = class {}, sc = class {}, cc = class {
	constructor() {}
}, lc = class extends cc {}, uc = class extends cc {
	constructor() {
		super(), this.filterId = null, this.eventFilter = "Group";
	}
	static isEventBadge(e) {
		return e.eventFilter !== void 0;
	}
}, dc = "3", fc;
(function(e) {
	e.LastValue = "LastValue", e.Difference = "Difference", e.Average = "Average";
})(fc ||= {});
var pc = {
	showTimestamp: !0,
	showLatLng: !0,
	showDuration: !0
}, mc = class extends E {
	constructor(e = {}) {
		super(), Object.assign(this, e), this.version = "3";
	}
}, hc = "1", gc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, _c;
(function(e) {
	e.Ongoing = "Ongoing", e.Canceled = "Canceled", e.Completed = "Completed";
})(_c ||= {});
var vc = "2", yc = class extends E {
	constructor(e) {
		super(), this.version = "2", e && Object.assign(this, e);
	}
}, bc;
(function(e) {
	e.Open = "Open", e.History = "History", e.All = "All";
})(bc ||= {});
var xc;
(function(e) {
	e.Group = "Group", e.Service = "Service";
})(xc ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/widget-type-plate-config.js
var Sc = "1", Cc = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, wc = class extends E {
	constructor(e = "", t = !1) {
		super(), this.title = e, this.headerExpanded = t;
	}
}, Tc = "1", Ec = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, Dc;
(function(e) {
	e.Group = "Group", e.Entity = "Entity";
})(Dc ||= {});
var Oc;
(function(e) {
	e[e.Add = 0] = "Add", e[e.Update = 1] = "Update", e[e.Delete = 2] = "Delete";
})(Oc ||= {});
var kc;
(function(e) {
	e.ResetCounter_1 = "ResetCounter_1", e.Set = "Set", e.SetManualValue = "SetManualValue", e.SetNote = "SetNote", e.SetLive = "SetLive", e.SendConfig = "SendConfig", e.ImportHistoricalValues = "ImportHistoricalValues", e.HistoricalValueManipulation = "HistoricalValueManipulation", e.Deactivated = "Deactivated", e.Activated = "Activated", e.ResetBatchReview = "ResetBatchReview", e.LicenseRenewal = "LicenseRenewal";
})(kc ||= {});
var Ac;
(function(e) {
	e.Group = "GROUP", e.Signal = "SIGNAL", e.Formula = "FORMULA", e.Datasource = "DATASOURCE", e.DataConnection = "DATACONNECTION", e.Dashboard = "DASHBOARD", e.DashboardTab = "DASHBOARDTAB", e.ProcessImage = "PROCESSIMAGE", e.ReportTemplate = "REPORTTEMPLATE", e.Report = "REPORT", e.Camera = "CAMERA", e.SwitchSchedule = "SWITCHSCHEDULE", e.RecipientGroup = "RECIPIENTGROUP", e.Recipient = "RECIPIENT", e.AlarmingPlan = "ALARMINGPLAN", e.Role = "ROLE", e.Condition = "CONDITION", e.EventDefinition = "EVENTDEFINITION", e.EventCategory = "EVENTCATEGORY", e.BatchDefinition = "BATCHDEFINITION";
})(Ac ||= {});
var jc = "2", Mc = class extends E {
	constructor() {
		super(), this.version = "2";
	}
}, Nc = "1", Pc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, Fc = "2", Ic = class extends E {
	constructor() {
		super(), this.version = "2";
	}
}, Lc = "1", Rc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, zc;
(function(e) {
	e.STAR = "*", e.SELF = "self", e.SRC = "src", e.NONE = "none", e.ORIGINS = "origins";
})(zc ||= {});
var Bc;
(function(e) {
	e.LAZY = "lazy", e.EAGER = "eager", e.AUTO = "auto";
})(Bc ||= {});
var Vc = "1", Hc = class extends E {
	constructor() {
		super(), this.title = "", this.version = "1", this.headerExpanded = !1, this.permissions = "", this.restrictions = [], this.src = null, this.loadingMethod = "auto";
	}
}, Uc = "1", Wc = class extends E {
	constructor() {
		super(), this.version = "1";
	}
}, Gc = "2", Kc = class extends E {
	constructor() {
		super(), this.ReferenceId = "", this.sidebarExpandedOnLargeWidget = !1, this.version = "2";
	}
}, qc = "1", Jc = class extends E {
	constructor() {
		super(), this.AlarmingPlanID = [], this.version = "1";
	}
}, Yc = "1", Xc = class extends E {
	constructor() {
		super(), this.alarmingPlanIds = [], this.version = "1";
	}
}, Zc;
(function(e) {
	e.EmailContact = "EmailContact", e.PushoverContact = "PushoverContact", e.SmsContact = "SmsContact", e.VoipContact = "VoipContact", e.TeamsContact = "TeamsContact", e.TelegramContact = "TelegramContact";
})(Zc ||= {});
var Qc = "5", $c = class extends E {
	constructor() {
		super(), this.version = "5", this.showContacts = !1, this.showContactsMatrix = {}, this.allowEditing = !1, this.editableRecipientIds = [];
	}
}, el = "1", tl = class extends E {
	constructor() {
		super(), this.title = "Widget", this.version = "1", this.recipientGroupId = "";
	}
}, nl;
(function(e) {
	e.Group = "Group", e.EventCategory = "EventCategory", e.EventDefinition = "EventDefinition";
})(nl ||= {});
var rl;
(function(e) {
	e.Group = "GROUP", e.EventCategory = "EVENTCATEGORY", e.EventDefinition = "EVENTDEFINITION";
})(rl ||= {});
var il = "1", al = class extends E {
	constructor(e) {
		super(), this.version = "1", e && Object.assign(this, e);
	}
}, ol = "1", sl = class extends E {
	constructor() {
		super(), this.Events = [], this.version = "1";
	}
}, cl = "1", ll = class extends E {
	constructor(e) {
		super(), this.version = "1", this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, ul = "2", dl = class extends E {
	constructor(e) {
		super(), this.version = "2", this.filterType = "Group", this.onlyActive = !1, this.requestIntervalType = fl.Minutes, this.requestInterval = 5, this.selectedFilter = [], this.filterWithSubgroup = !1, e && Object.assign(this, e);
	}
}, fl;
(function(e) {
	e.Seconds = "Seconds", e.Minutes = "Minutes";
})(fl ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/models/widgets/widget-entered-alarming-config.js
var pl = "2", ml = class extends E {
	constructor() {
		super(), this.version = "2", this.DateIntervalType = hl.Day, this.filterType = "Group", this.selectedFilter = [], this.filterWithSubgroup = !1;
	}
}, hl;
(function(e) {
	e.Day = "Day", e.Week = "Week", e.Month = "Month";
})(hl ||= {});
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/adapters/entity-adapter.js
function gl(e, t, n = "full") {
	return n !== "projected" || !!e && typeof e == "object" && t in e;
}
var _l = {
	fromWire: (e) => e,
	toWire: (e) => e
}, vl = [
	"Path",
	"AclAllow",
	"AclDeny",
	"ManagedBy",
	"SynchronizedFrom"
], yl = [
	"Id",
	"CreatedBy",
	"CreatedOn",
	"ChangedBy",
	"ChangedOn"
];
function bl(e) {
	if (!e || typeof e != "object") return e;
	let t = Array.isArray(e) ? e.slice() : { ...e };
	for (let e of vl) delete t[e];
	return t;
}
var xl = /* @__PURE__ */ new Map();
function Sl(e) {
	if (!xl.has(e)) {
		let t = kr[e], n = null;
		if (t) try {
			n = new t();
		} catch {
			n = null;
		}
		xl.set(e, n);
	}
	return xl.get(e);
}
function Cl(e) {
	if (!e || typeof e != "object") return e;
	if (e instanceof Date) return new Date(e.getTime());
	if (Array.isArray(e)) return e.map(Cl);
	let t = Object.create(Object.getPrototypeOf(e));
	for (let n of Object.keys(e)) t[n] = Cl(e[n]);
	return t;
}
function wl(e) {
	return !!e && typeof e == "object" && !Array.isArray(e) && !(e instanceof Date) && !("Value" in e);
}
function Tl(e, t) {
	return "_t" in t && e._t !== t._t;
}
function El(e, t, n) {
	let r = { ...e };
	for (let i of Object.keys(t)) {
		let a = t[i];
		if (a == null || yl.includes(i)) continue;
		let o = r[i];
		if (o == null) {
			gl(e, i, n) && (r[i] = Cl(a));
			continue;
		}
		wl(a) && wl(o) && !Tl(o, a) && (r[i] = El(o, a, "full"));
	}
	return r;
}
function Dl(e, t, n = "full") {
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let r = Sl(t);
	return r ? El(e, r, n) : e;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/adapters/v4/additional-fields.v4.js
var Ol = 1048576;
function kl(e) {
	return e === null || e.trim().length === 0;
}
function Al(e) {
	return kl(e) || e.trim().toLowerCase() === "null";
}
function jl(e) {
	return {
		parse: (t) => kl(t) ? { value: null } : e !== void 0 && t.length > e ? void 0 : { value: t },
		format: (e) => e == null || e === "" ? null : String(e)
	};
}
var Ml = {
	parse: (e) => Al(e) ? { value: null } : { value: e.trim() },
	format: (e) => e == null || e === "" ? null : e
}, Nl = {
	parse: (e) => {
		let t = (e ?? "").trim().toLowerCase();
		return t === "true" ? { value: !0 } : t === "false" ? { value: !1 } : void 0;
	},
	format: (e) => e == null ? null : String(!!e)
}, Pl = {
	parse: (e) => {
		if (kl(e)) return { value: null };
		let t = e.trim();
		return /^[+-]?\d+$/.test(t) ? { value: parseInt(t, 10) } : void 0;
	},
	format: (e) => e == null ? null : String(e)
}, Fl = {
	parse: (e) => {
		if (kl(e)) return { value: null };
		let t = e.trim().toLowerCase();
		return /^#([0-9a-f]{6}|[0-9a-f]{8})$/.test(t) ? { value: t } : void 0;
	},
	format: (e) => e == null || e === "" ? null : e
};
function Il(e) {
	if (Al(e)) return { value: null };
	try {
		let t = JSON.parse(e);
		return t === null || typeof t == "object" && !Array.isArray(t) ? { value: t } : void 0;
	} catch {
		return;
	}
}
function Ll(e, t) {
	let n = t.map((e) => e.toLowerCase());
	for (let t of Object.keys(e)) if (n.indexOf(t.toLowerCase()) >= 0 && e[t] !== null && e[t] !== void 0) return e[t];
}
function Rl(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : null;
	if (typeof e == "string" && e.trim().length > 0) {
		let t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	return null;
}
var zl = {
	parse: (e) => {
		let t = Il(e);
		if (!t || t.value === null) return t;
		let n = Rl(Ll(t.value, ["lat", "latitude"])), r = Rl(Ll(t.value, ["lng", "longitude"]));
		if (n === null && r === null) return { value: null };
		if (n !== null && r !== null && !(n < -90 || n > 90 || r < -180 || r > 180)) return { value: {
			Latitude: n,
			Longitude: r
		} };
	},
	format: (e) => e == null ? null : JSON.stringify({
		lat: e.Latitude,
		lng: e.Longitude
	})
}, Bl = [
	"RealValueFrom",
	"RealValueTo",
	"TargetFrom",
	"TargetTo",
	"ReadingFrom",
	"ReadingTo",
	"CheckResult"
];
function Vl(e) {
	return e == null || typeof e == "object" ? null : String(e);
}
function Hl(e) {
	return e.charAt(0).toLowerCase() + e.slice(1) + "Control";
}
var Ul = {
	parse: (e) => {
		let t = Il(e);
		if (!t || t.value === null) return t;
		let n = (e) => Ll(t.value, [e, e + "Control"]), r = new _t();
		r.DeviceType = Vl(n("DeviceType"));
		for (let e of Bl) r[e] = Rl(n(e));
		return r.ReadingUnit = Vl(n("ReadingUnit")), { value: r };
	},
	format: (e) => {
		if (e == null) return null;
		let t = typeof e.ReadingFrom == "number" && typeof e.ReadingTo == "number" ? e.ReadingTo - e.ReadingFrom : null;
		return JSON.stringify({
			[Hl("DeviceType")]: e.DeviceType ?? null,
			[Hl("RealValueFrom")]: e.RealValueFrom ?? null,
			[Hl("RealValueTo")]: e.RealValueTo ?? null,
			[Hl("TargetFrom")]: e.TargetFrom ?? null,
			[Hl("TargetTo")]: e.TargetTo ?? null,
			[Hl("ReadingUnit")]: e.ReadingUnit ?? null,
			[Hl("ReadingFrom")]: e.ReadingFrom ?? null,
			[Hl("ReadingTo")]: e.ReadingTo ?? null,
			readingLengthControl: t,
			[Hl("CheckResult")]: e.CheckResult ?? null
		});
	}
};
function Wl(e) {
	return typeof e == "string" ? {
		raw: e,
		ooAttributes: []
	} : e && typeof e == "object" ? {
		raw: typeof e.Value == "string" ? e.Value : null,
		ooAttributes: Array.isArray(e.OOAttributes) ? e.OOAttributes : []
	} : {
		raw: null,
		ooAttributes: []
	};
}
function Gl(e, t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return;
		n = n[e];
	}
	return n;
}
function Kl(e, t, n) {
	let [r, ...i] = t;
	if (i.length === 0) {
		let t = { ...e };
		return n === void 0 ? delete t[r] : t[r] = n, t;
	}
	let a = e[r];
	return !a || typeof a != "object" ? e : {
		...e,
		[r]: Kl(a, i, n)
	};
}
function ql(e, t) {
	let n = e && e.AdditionalFields;
	if (!n || typeof n != "object" || Array.isArray(n)) return e;
	let r = e, i = n;
	for (let { key: e, path: a, codec: o } of t) {
		if (!(e in i)) continue;
		let { raw: t, ooAttributes: s } = Wl(i[e]), c = o.parse(t);
		if (!c) continue;
		let l = Kl(r, a, {
			Value: c.value,
			OOAttributes: s
		});
		l !== r && (r = l, i === n && (i = { ...n }), delete i[e]);
	}
	return i === n ? r : {
		...r,
		AdditionalFields: i
	};
}
function Jl(e, t) {
	let n = e, r = e.AdditionalFields && typeof e.AdditionalFields == "object" ? e.AdditionalFields : {}, i = !1;
	for (let { key: e, path: a, codec: o } of t) {
		let t = Gl(n, a);
		if (t === void 0) continue;
		n = Kl(n, a, void 0);
		let s = t && typeof t == "object" && "Value" in t ? t.Value : null, c = o.format(s);
		if (c === null) {
			e in r && o.parse(Wl(r[e]).raw) !== void 0 && (r = i ? r : { ...r }, delete r[e], i = !0);
			continue;
		}
		let l = t && Array.isArray(t.OOAttributes) ? t.OOAttributes : [];
		r = i ? r : { ...r }, r[e] = {
			Value: c,
			OOAttributes: l
		}, i = !0;
	}
	return i ? {
		...n,
		AdditionalFields: r
	} : n;
}
function Yl(e) {
	return {
		fromWire(t, n) {
			return !t || typeof t != "object" || !n.isV4 ? t : ql(t, e(t));
		},
		toWire(t, n) {
			return !t || typeof t != "object" || !n.isV4 ? t : Jl(t, e(t));
		}
	};
}
var Xl = "Synchronized", Zl = "unknown";
function Ql(e) {
	let t = e && e.AdditionalFields;
	if (!t || typeof t != "object" || !("Synchronized" in t)) return e;
	let n = Nl.parse(Wl(t[Xl]).raw);
	if (!n || n.value !== !0) return e;
	let { [Xl]: r, ...i } = t;
	return {
		...e,
		AdditionalFields: i,
		SynchronizedFrom: Zl
	};
}
function $l(e) {
	if (!e || typeof e != "object" || !e.SynchronizedFrom) return e;
	let t = e.AdditionalFields && typeof e.AdditionalFields == "object" ? e.AdditionalFields : {};
	return "Synchronized" in t ? e : {
		...e,
		AdditionalFields: {
			...t,
			[Xl]: {
				Value: "true",
				OOAttributes: []
			}
		}
	};
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/adapters/v4/batch-definition.adapter.v4.js
var eu = {
	fromWire(e, t) {
		if (!e || typeof e != "object" || !t.isV4 || t.isAtLeast("4.17")) return e;
		let n = e.MetadataFields;
		if (!n || typeof n != "object" || Array.isArray(n)) return e;
		let r = !1, i = {};
		for (let e of Object.keys(n)) {
			let t = n[e];
			t && typeof t == "object" && (t.Editable === void 0 || t.Editable === null) ? (i[e] = {
				...t,
				Editable: t.Source === Xt.Manual && t.ObligatoryAt === Gt.Stop
			}, r = !0) : i[e] = t;
		}
		return r ? {
			...e,
			MetadataFields: i
		} : e;
	},
	toWire(e) {
		return e;
	}
}, tu = [
	{
		key: "Icon",
		path: ["Icon"],
		codec: jl(64)
	},
	{
		key: "Order",
		path: ["Order"],
		codec: Pl
	},
	{
		key: "StartTab",
		path: ["StartTabId"],
		codec: Ml
	}
], nu = Yl(() => tu);
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/adapters/v4/dashboard-tab.adapter.v4.js
function ru(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let t = !1, n = {};
	for (let r of Object.keys(e)) {
		let i = e[r];
		if (i && typeof i == "object" && "Id" in i) {
			let { Id: e, ...a } = i;
			n[r] = {
				...a,
				EntityId: a.EntityId === void 0 || a.EntityId === null ? e : a.EntityId
			}, t = !0;
		} else n[r] = i;
	}
	return t ? n : e;
}
function iu(e) {
	let t = e.EntityMappings;
	if (!t || typeof t != "object") return e;
	let n = ru(t.Value);
	return n === t.Value ? e : {
		...e,
		EntityMappings: {
			...t,
			Value: n
		}
	};
}
var au = {
	fromWire(e, t) {
		return !e || typeof e != "object" || !t.isV4 ? e : iu(e);
	},
	toWire(e, t) {
		return !e || typeof e != "object" || !t.isV4 ? e : iu(e);
	}
}, ou = [{
	key: "Icon",
	path: ["Icon"],
	codec: jl(64)
}, {
	key: "Color",
	path: ["Color"],
	codec: Fl
}], su = {
	fromWire(e, t) {
		if (!e || typeof e != "object" || !t.isV4) return e;
		let n = ql(e, ou);
		if (!("Acknowledgment" in n)) return n;
		let { Acknowledgment: r, ...i } = n;
		return !t.isAtLeast("4.23") && r != null ? {
			...i,
			RequiresAcknowledgment: r
		} : i;
	},
	toWire(e, t) {
		if (!e || typeof e != "object" || !t.isV4) return e;
		let { Acknowledgment: n, ...r } = Jl(e, ou);
		return t.isAtLeast("4.23") ? r : "RequiresAcknowledgment" in r ? {
			...r,
			Acknowledgment: r.RequiresAcknowledgment
		} : r;
	}
}, cu = [{
	key: "BlocklyXML",
	path: ["BlocklyXml"],
	codec: jl(Ol)
}], lu = {
	SignalCondition: "SignalConditionSettings",
	CounterCondition: "CounterConditionSettings",
	DataSourceFailureCondition: "ConnectionFailureConditionSettings",
	DataConnectionFailureCondition: "DataConnectionFailure",
	RecordingFailureCondition: "RecordingFailureMonitoringSettings",
	ChangeRateMonitoring: "ChangeRateMonitoringSettings",
	MaximumMonitoring: "MaximumMonitoringSettings",
	MinimumMonitoring: "MinimumMonitoringSettings",
	PeriodMaximumMonitoring: "PeriodMaximumMonitoringSettings",
	PlausibilityMonitoring: "PlausibilityMonitoringSettings",
	PositionMonitoring: "PositionMonitoringSettings",
	DifferenceMonitoring: "DifferenceMonitoringSettings",
	TimebasedCondition: "TimebasedConditionSettings"
}, uu = Object.keys(lu).reduce((e, t) => (e[lu[t]] = t, e), {});
function du(e, t) {
	if (!Array.isArray(e.ExpressionParameters)) return e;
	let n = !1, r = e.ExpressionParameters.map((e) => {
		let r = e && e.Type ? e.Type.Value : void 0, i = typeof r == "string" ? t[r] : void 0;
		return i ? (n = !0, {
			...e,
			Type: {
				...e.Type,
				Value: i
			}
		}) : e;
	});
	return n ? {
		...e,
		ExpressionParameters: r
	} : e;
}
var fu = {
	fromWire(e, t, n) {
		if (!e || typeof e != "object" || !t.isV4) return e;
		let r = ql(e, cu);
		return !t.isAtLeast("4.17") && (r.EventCategoryId === null || r.EventCategoryId === void 0) && gl(e, "EventCategoryId", n) && (r = {
			...r,
			EventCategoryId: new s()
		}), t.isAtLeast("4.13") || (r = du(r, lu)), r;
	},
	toWire(e, t) {
		if (!e || typeof e != "object" || !t.isV4) return e;
		let n = Jl(e, cu);
		return t.isAtLeast("4.13") ? n : du(n, uu);
	}
}, pu = [{
	key: "Global",
	path: ["SameFormulaForAllIntervals"],
	codec: Nl
}], mu = Yl(() => pu), hu = [
	{
		key: "Position",
		path: ["Position"],
		codec: zl
	},
	{
		key: "Icon",
		path: ["Icon"],
		codec: jl(64)
	},
	{
		key: "Order",
		path: ["Order"],
		codec: Pl
	},
	{
		key: "Picture",
		path: ["Picture"],
		codec: jl()
	}
], gu = Yl(() => hu), _u = [{
	key: "Color",
	path: ["Color"],
	codec: Fl
}], vu = Yl(() => _u), yu = [{
	key: "StartDashboard",
	path: ["StartDashboardId"],
	codec: Ml
}], bu = Yl(() => yu), xu = {
	fromWire(e, t, n) {
		return !e || typeof e != "object" || !t.isV4 ? e : !t.isAtLeast("4.13") && (e.Enabled === null || e.Enabled === void 0) && gl(e, "Enabled", n) ? {
			...e,
			Enabled: new s(!0)
		} : e;
	},
	toWire(e) {
		return e;
	}
}, Su = "SignalCounterSettings", Cu = "SignalAnalogSettings", wu = [{
	key: "Color",
	path: ["Color"],
	codec: Fl
}, {
	key: "MultiLine",
	path: ["MultiLineAddress"],
	codec: Nl
}], Tu = {
	key: "CounterChecked",
	path: ["Settings", "EnforceMonotonicInput"],
	codec: Nl
}, Eu = {
	key: "ScalingCalculatorFormState",
	path: ["Settings", "ScalingCalculatorState"],
	codec: Ul
};
function Du(e) {
	return e.Settings && typeof e.Settings == "object" ? e.Settings._t : void 0;
}
function Ou(e) {
	switch (Du(e)) {
		case Su: return [...wu, Tu];
		case Cu: return [...wu, Eu];
		default: return wu;
	}
}
var ku = {
	fromWire(e, t, n) {
		if (!e || typeof e != "object" || !t.isV4) return e;
		let r = ql(e, Ou(e)), i = r.Settings;
		return Du(r) === Su && (i.EnforceMonotonicInput === null || i.EnforceMonotonicInput === void 0) && gl(e, "Settings", n) && (r = {
			...r,
			Settings: {
				...i,
				EnforceMonotonicInput: new s(!0)
			}
		}), r;
	},
	toWire(e, t) {
		return !e || typeof e != "object" || !t.isV4 ? e : Jl(e, Ou(e));
	}
}, Au = [{
	key: "Icon",
	path: ["Icon"],
	codec: jl(64)
}], ju = Yl(() => Au), Mu = Object.freeze({
	[r.BatchDefinition]: eu,
	[r.Dashboard]: nu,
	[r.DashboardTab]: au,
	[r.EventCategory]: su,
	[r.EventDefinition]: fu,
	[r.Formula]: mu,
	[r.Group]: gu,
	[r.RecipientGroup]: vu,
	[r.Role]: bu,
	[r.RuntimeScript]: xu,
	[r.Signal]: ku,
	[r.SwitchSchedule]: ju
});
Object.keys(Mu);
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/adapters/index.js
var Nu = Object.freeze({ ...Mu });
function Pu(e) {
	return Nu[e] || _l;
}
function Fu(e, t, n, r = "full") {
	let i = Dl(t, e, r);
	return n.isV4 && (i = Ql(i)), Pu(e).fromWire(i, n, r);
}
function Iu(e, t, n) {
	let r = Pu(e).toWire(t, n);
	return n.isV4 && (r = $l(r)), bl(r);
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/services/entity-http.service.js
function Lu(e) {
	return e == null ? void 0 : JSON.stringify(e);
}
var Ru = class {
	constructor(e) {
		this.ctx = e;
	}
	async getEntityById(e, t) {
		return this.getPartialEntityById(e, t, null);
	}
	async getPartialEntityById(e, t, n) {
		let r = await this.ctx.request({
			name: "entityById",
			entityType: e,
			id: t
		}, {
			method: "GET",
			params: { $projection: Lu(n) }
		});
		return this._fromWire(e, r.data, await this.ctx.getVersionInfo(), n ? "projected" : "full");
	}
	async queryConfiguration(e, t, n, r, i) {
		let a = await this.ctx.getVersionInfo(), o = JSON.stringify(t), s = n ? JSON.stringify(n) : null, c = r ? JSON.stringify(r) : null, l = i?.sort ? JSON.stringify(i.sort) : null, u, d, f = {};
		a.supports("queryVerb") ? (u = {
			$filter: o,
			$paging: s,
			$sort: l
		}, c && (d = { $projection: c }), i?.language && (f.Language = i.language)) : u = {
			$filter: o,
			$paging: s,
			$projection: c
		};
		let p = await this.ctx.request({
			name: "entityQuery",
			entityType: e
		}, {
			data: u,
			params: d,
			headers: f
		}), m = c ? "projected" : "full", h = (p.data || []).map((t) => this._fromWire(e, t, a, m)), g = n ? p.headers?.["paging-headers"] : null;
		return g ? {
			data: h,
			total: Number(JSON.parse(g).TotalCount)
		} : {
			data: h,
			total: h.length
		};
	}
	async uploadProcessImage(e, t, n = "process-image.svg") {
		let r = new Blob([t], { type: "image/svg+xml" }), i = new FormData();
		i.append("file", r, n), await this.ctx.request({
			name: "processImageUpload",
			id: e
		}, { data: i });
	}
	async addEntity(e, t) {
		let n = await this.ctx.getVersionInfo(), r = this._toWire(e, t, n), i = await this.ctx.request({
			name: "entityCollection",
			entityType: e
		}, { data: r });
		return this._fromWire(e, i.data, n);
	}
	async updateEntity(e, t) {
		if (!t.Id) throw Error("updateEntity needs an entity with an Id; use addEntity for new entities.");
		let n = await this.ctx.getVersionInfo(), r = this._toWire(e, t, n), i = await this.ctx.request({
			name: "entityById",
			entityType: e,
			id: t.Id
		}, {
			method: "PUT",
			data: r
		});
		return this._fromWire(e, i.data, n);
	}
	async deleteEntity(e, t) {
		await this.ctx.request({
			name: "entityById",
			entityType: e,
			id: t
		}, { method: "DELETE" });
	}
	async copyTo(e, t, n) {
		let r = await this.ctx.request({
			name: "entityCopy",
			entityType: n,
			sourceId: e,
			targetId: t
		});
		return this._fromWire(n, r.data, await this.ctx.getVersionInfo());
	}
	async copyMultipleTo(e, t, n) {
		let r = await this.ctx.request({
			name: "entityCopyMultiple",
			entityType: n,
			targetId: t
		}, { data: e });
		return this._readOperationId(r.data);
	}
	async moveTo(e, t, n) {
		let r = await this.ctx.request({
			name: "entityMove",
			entityType: n,
			sourceId: e,
			targetId: t
		});
		return this._fromWire(n, r.data, await this.ctx.getVersionInfo());
	}
	async moveMultipleTo(e, t, n) {
		let r = await this.ctx.request({
			name: "entityMoveMultiple",
			entityType: n,
			targetId: t
		}, { data: e });
		return this._readOperationId(r.data);
	}
	async countEntities(e, t) {
		let n = await this.ctx.request({
			name: "entityCount",
			entityType: e
		}, { params: { $filter: Lu(t) } });
		return Number(n.data);
	}
	async getEntityInfos(e, t) {
		let n = {};
		return t?.language && (n.Language = t.language), (await this.ctx.request({
			name: "entityInfo",
			entityType: e
		}, {
			params: {
				$filter: Lu(t?.filter),
				$sort: Lu(t?.sort),
				$paging: Lu(t?.paging)
			},
			headers: n
		})).data || [];
	}
	getEntityInfosByIds(e, t, n) {
		return this.getEntityInfos(e, {
			filter: { Id: { $in: t } },
			language: n
		});
	}
	_fromWire(e, t, n, r = "full") {
		return Fu(e, t, n, r);
	}
	_toWire(e, t, n) {
		let r = Iu(e, t, n);
		return n.supports("optimisticConcurrency") || (delete r.CreatedBy, delete r.CreatedOn), r;
	}
	_readOperationId(e) {
		if (e && typeof e == "object") return e.OperationId;
		if (typeof e == "string") {
			let t = e.trim();
			if (t.startsWith("{")) try {
				return JSON.parse(t).OperationId;
			} catch {
				return t;
			}
			return t;
		}
		return e;
	}
}, zu = class {
	constructor(e) {
		this.ctx = e;
	}
	getTenantViewById(e) {
		return this._get({
			name: "tenantViewById",
			tenantId: e
		});
	}
	getTenantViewForEntityId(e) {
		return this._get({
			name: "tenantViewForEntity",
			entityId: e
		});
	}
	getTopTenants() {
		return this._get({ name: "tenantsTop" });
	}
	getNextTenants(e) {
		return this._get({
			name: "tenantsNext",
			tenantId: e
		});
	}
	filterTenantsByName(e) {
		return this._get({
			name: "tenantsFilter",
			filter: e
		});
	}
	async _get(e) {
		return (await this.ctx.request(e)).data;
	}
};
//#endregion
//#region node_modules/@audako/core/dist/mjs/services/entity-name.service.js
function Bu(e) {
	if (s.isField(e)) {
		let t = e.Value;
		return t == null ? null : String(t);
	}
	return typeof e == "string" ? e : null;
}
var Vu = class {
	constructor(e) {
		this.httpService = e, this._nameCache = {};
	}
	async resolveEntityPath(e, t, n = !1, r, i = " / ") {
		let a = await this.httpService.getPartialEntityById(e, t, {
			Name: 1,
			Path: 1
		}), o = Array.isArray(a.Path) ? a.Path : [], s = r ? o.slice(Math.max(o.length - r, 0)) : o, c = await this.resolvePathName(s, i);
		if (n) {
			let e = Bu(a.Name) ?? t;
			c = c ? c + i + e : e;
		}
		return c;
	}
	async resolvePathName(e, t = " / ") {
		return e.length === 0 ? "" : (await this.resolveNames(r.Group, e)).join(t);
	}
	async resolveName(e, t) {
		return (await this.resolveNames(e, [t]))[0];
	}
	async resolveNames(e, t) {
		let n = t.filter((e) => !this._nameCache[e]);
		if (n.length > 0) {
			(await this.httpService.ctx.getVersionInfo()).supports("entityInfo") && await this._cacheFromEntityInfo(e, n);
			for (let t of n) this._cacheSingle(e, t);
		}
		return Ea(za(t.map((e) => this._nameCache[e])));
	}
	async _cacheFromEntityInfo(e, t) {
		let n = [];
		try {
			n = await this.httpService.getEntityInfosByIds(e, t);
		} catch {
			return;
		}
		for (let e of n) {
			let t = Bu(e?.Name);
			e?.Id && t !== null && (this._nameCache[e.Id] = Ca(t));
		}
	}
	_cacheSingle(e, t) {
		this._nameCache[t] || (this._nameCache[t] = Sa(this.httpService.getPartialEntityById(e, t, { Name: 1 })).pipe(Oa((e) => Bu(e?.Name) ?? t), oo(1), Za(() => Ca(t))));
	}
}, Hu = class {
	constructor(e) {
		this.ctx = e;
	}
	async getUserProfile() {
		return (await this.ctx.request({ name: "userProfile" }, { method: "GET" })).data;
	}
	async updateUserProfileSettings(e) {
		await this.ctx.request({ name: "userProfile" }, {
			method: "PUT",
			data: e
		});
	}
}, Uu = class {
	constructor(e) {
		this.ctx = e;
	}
	async configureDataSource(e) {
		let t = (await this.ctx.request({
			name: "driverConfigureDataSource",
			dataSourceId: e
		})).data;
		return !t || typeof t != "object" || !t.JobId ? null : {
			JobId: t.JobId,
			Timestamp: t.Timestamp
		};
	}
}, Wu = class {
	constructor(e) {
		this.ctx = e;
	}
	async browseConnection(e, t) {
		return (await this.ctx.request({
			name: "driverBrowseConnection",
			dataConnectionId: e
		}, { data: { Path: t } })).data;
	}
}, Gu = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = n;
	}
}, Ku = class extends Error {
	constructor(e = "A timeout occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, qu = class extends Error {
	constructor(e = "An abort occurred.") {
		let t = new.target.prototype;
		super(e), this.__proto__ = t;
	}
}, Ju = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = n;
	}
}, Yu = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = n;
	}
}, Xu = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = n;
	}
}, Zu = class extends Error {
	constructor(e) {
		let t = new.target.prototype;
		super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
	}
}, Qu = class extends Error {
	constructor(e, t) {
		let n = new.target.prototype;
		super(e), this.innerErrors = t, this.__proto__ = n;
	}
}, $u = class {
	constructor(e, t, n) {
		this.statusCode = e, this.statusText = t, this.content = n;
	}
}, ed = class {
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
}, D;
(function(e) {
	e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
})(D ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Loggers.js
var td = class {
	constructor() {}
	log(e, t) {}
};
td.instance = new td();
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Utils.js
var nd = "6.0.25", rd = class {
	static isRequired(e, t) {
		if (e == null) throw Error(`The '${t}' argument is required.`);
	}
	static isNotEmpty(e, t) {
		if (!e || e.match(/^\s*$/)) throw Error(`The '${t}' argument should not be empty.`);
	}
	static isIn(e, t, n) {
		if (!(e in t)) throw Error(`Unknown ${n} value: ${e}.`);
	}
}, id = class {
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
function ad(e, t) {
	let n = "";
	return sd(e) ? (n = `Binary data of length ${e.byteLength}`, t && (n += `. Content: '${od(e)}'`)) : typeof e == "string" && (n = `String data of length ${e.length}`, t && (n += `. Content: '${e}'`)), n;
}
function od(e) {
	let t = new Uint8Array(e), n = "";
	return t.forEach((e) => {
		n += `0x${e < 16 ? "0" : ""}${e.toString(16)} `;
	}), n.substr(0, n.length - 1);
}
function sd(e) {
	return e && typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || e.constructor && e.constructor.name === "ArrayBuffer");
}
async function cd(e, t, n, r, i, a, o) {
	let s = {};
	if (i) {
		let e = await i();
		e && (s = { Authorization: `Bearer ${e}` });
	}
	let [c, l] = fd();
	s[c] = l, e.log(D.Trace, `(${t} transport) sending data. ${ad(a, o.logMessageContent)}.`);
	let u = sd(a) ? "arraybuffer" : "text", d = await n.post(r, {
		content: a,
		headers: {
			...s,
			...o.headers
		},
		responseType: u,
		timeout: o.timeout,
		withCredentials: o.withCredentials
	});
	e.log(D.Trace, `(${t} transport) request complete. Response status: ${d.statusCode}.`);
}
function ld(e) {
	return e === void 0 ? new dd(D.Information) : e === null ? td.instance : e.log === void 0 ? new dd(e) : e;
}
var ud = class {
	constructor(e, t) {
		this._subject = e, this._observer = t;
	}
	dispose() {
		let e = this._subject.observers.indexOf(this._observer);
		e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((e) => {});
	}
}, dd = class {
	constructor(e) {
		this._minLevel = e, this.out = console;
	}
	log(e, t) {
		if (e >= this._minLevel) {
			let n = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${D[e]}: ${t}`;
			switch (e) {
				case D.Critical:
				case D.Error:
					this.out.error(n);
					break;
				case D.Warning:
					this.out.warn(n);
					break;
				case D.Information:
					this.out.info(n);
					break;
				default: this.out.log(n);
			}
		}
	}
};
function fd() {
	let e = "X-SignalR-User-Agent";
	return id.isNode && (e = "User-Agent"), [e, pd(nd, md(), gd(), hd())];
}
function pd(e, t, n, r) {
	let i = "Microsoft SignalR/", a = e.split(".");
	return i += `${a[0]}.${a[1]}`, i += ` (${e}; `, i += t && t !== "" ? `${t}; ` : "Unknown OS; ", i += `${n}`, i += r ? `; ${r}` : "; Unknown Runtime Version", i += ")", i;
}
/*#__PURE__*/ function md() {
	if (id.isNode) switch (process.platform) {
		case "win32": return "Windows NT";
		case "darwin": return "macOS";
		case "linux": return "Linux";
		default: return process.platform;
	}
	else return "";
}
/*#__PURE__*/ function hd() {
	if (id.isNode) return process.versions.node;
}
function gd() {
	return id.isNode ? "NodeJS" : "Browser";
}
function _d(e) {
	return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function vd() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw Error("could not find global");
}
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js
var yd = class extends ed {
	constructor(e) {
		if (super(), this._logger = e, typeof fetch > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._jar = new (e("tough-cookie")).CookieJar(), this._fetchType = e("node-fetch"), this._fetchType = e("fetch-cookie")(this._fetchType, this._jar);
		} else this._fetchType = fetch.bind(vd());
		if (typeof AbortController > "u") {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			this._abortControllerType = e("abort-controller");
		} else this._abortControllerType = AbortController;
	}
	async send(e) {
		if (e.abortSignal && e.abortSignal.aborted) throw new qu();
		if (!e.method) throw Error("No method defined.");
		if (!e.url) throw Error("No url defined.");
		let t = new this._abortControllerType(), n;
		e.abortSignal && (e.abortSignal.onabort = () => {
			t.abort(), n = new qu();
		});
		let r = null;
		if (e.timeout) {
			let i = e.timeout;
			r = setTimeout(() => {
				t.abort(), this._logger.log(D.Warning, "Timeout from HTTP request."), n = new Ku();
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
			throw n || (this._logger.log(D.Warning, `Error from HTTP request. ${e}.`), e);
		} finally {
			r && clearTimeout(r), e.abortSignal && (e.abortSignal.onabort = null);
		}
		if (!i.ok) throw new Gu(await bd(i, "text") || i.statusText, i.status);
		let a = await bd(i, e.responseType);
		return new $u(i.status, i.statusText, a);
	}
	getCookieString(e) {
		let t = "";
		return id.isNode && this._jar && this._jar.getCookies(e, (e, n) => t = n.join("; ")), t;
	}
};
function bd(e, t) {
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
var xd = class extends ed {
	constructor(e) {
		super(), this._logger = e;
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new qu()) : e.method ? e.url ? new Promise((t, n) => {
			let r = new XMLHttpRequest();
			r.open(e.method, e.url, !0), r.withCredentials = e.withCredentials === void 0 || e.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
			let i = e.headers;
			i && Object.keys(i).forEach((e) => {
				r.setRequestHeader(e, i[e]);
			}), e.responseType && (r.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
				r.abort(), n(new qu());
			}), e.timeout && (r.timeout = e.timeout), r.onload = () => {
				e.abortSignal && (e.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? t(new $u(r.status, r.statusText, r.response || r.responseText)) : n(new Gu(r.response || r.responseText || r.statusText, r.status));
			}, r.onerror = () => {
				this._logger.log(D.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), n(new Gu(r.statusText, r.status));
			}, r.ontimeout = () => {
				this._logger.log(D.Warning, "Timeout from HTTP request."), n(new Ku());
			}, r.send(e.content || "");
		}) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
}, Sd = class extends ed {
	constructor(e) {
		if (super(), typeof fetch < "u" || id.isNode) this._httpClient = new yd(e);
		else if (typeof XMLHttpRequest < "u") this._httpClient = new xd(e);
		else throw Error("No usable HttpClient found.");
	}
	send(e) {
		return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new qu()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(/* @__PURE__ */ Error("No url defined.")) : Promise.reject(/* @__PURE__ */ Error("No method defined."));
	}
	getCookieString(e) {
		return this._httpClient.getCookieString(e);
	}
}, Cd = class e {
	static write(t) {
		return `${t}${e.RecordSeparator}`;
	}
	static parse(t) {
		if (t[t.length - 1] !== e.RecordSeparator) throw Error("Message is incomplete.");
		let n = t.split(e.RecordSeparator);
		return n.pop(), n;
	}
};
Cd.RecordSeparatorCode = 30, Cd.RecordSeparator = String.fromCharCode(Cd.RecordSeparatorCode);
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js
var wd = class {
	writeHandshakeRequest(e) {
		return Cd.write(JSON.stringify(e));
	}
	parseHandshakeResponse(e) {
		let t, n;
		if (sd(e)) {
			let r = new Uint8Array(e), i = r.indexOf(Cd.RecordSeparatorCode);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, a))), n = r.byteLength > a ? r.slice(a).buffer : null;
		} else {
			let r = e, i = r.indexOf(Cd.RecordSeparator);
			if (i === -1) throw Error("Message is incomplete.");
			let a = i + 1;
			t = r.substring(0, a), n = r.length > a ? r.substring(a) : null;
		}
		let r = Cd.parse(t), i = JSON.parse(r[0]);
		if (i.type) throw Error("Expected a handshake response from the server.");
		return [n, i];
	}
}, O;
(function(e) {
	e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
})(O ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/Subject.js
var Td = class {
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
		return this.observers.push(e), new ud(this, e);
	}
}, Ed = 3e4, Dd = 15e3, Od;
(function(e) {
	e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
})(Od ||= {});
var kd = class e {
	constructor(e, t, n, r) {
		this._nextKeepAlive = 0, this._freezeEventListener = () => {
			this._logger.log(D.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
		}, rd.isRequired(e, "connection"), rd.isRequired(t, "logger"), rd.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = Ed, this.keepAliveIntervalInMilliseconds = Dd, this._logger = t, this._protocol = n, this.connection = e, this._reconnectPolicy = r, this._handshakeProtocol = new wd(), this.connection.onreceive = (e) => this._processIncomingData(e), this.connection.onclose = (e) => this._connectionClosed(e), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = Od.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: O.Ping });
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
		if (this._connectionState !== Od.Disconnected && this._connectionState !== Od.Reconnecting) throw Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
		if (!e) throw Error("The HubConnection url must be a valid url.");
		this.connection.baseUrl = e;
	}
	start() {
		return this._startPromise = this._startWithStateTransitions(), this._startPromise;
	}
	async _startWithStateTransitions() {
		if (this._connectionState !== Od.Disconnected) return Promise.reject(/* @__PURE__ */ Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
		this._connectionState = Od.Connecting, this._logger.log(D.Debug, "Starting HubConnection.");
		try {
			await this._startInternal(), id.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = Od.Connected, this._connectionStarted = !0, this._logger.log(D.Debug, "HubConnection connected successfully.");
		} catch (e) {
			return this._connectionState = Od.Disconnected, this._logger.log(D.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
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
			if (this._logger.log(D.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)), this._logger.log(D.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError) throw this._stopDuringStartError;
		} catch (e) {
			throw this._logger.log(D.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(e), e;
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
		return this._connectionState === Od.Disconnected ? (this._logger.log(D.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === Od.Disconnecting ? (this._logger.log(D.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = Od.Disconnecting, this._logger.log(D.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(D.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || /* @__PURE__ */ Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
	}
	stream(e, ...t) {
		let [n, r] = this._replaceStreamingParams(t), i = this._createStreamInvocation(e, t, r), a, o = new Td();
		return o.cancelCallback = () => {
			let e = this._createCancelInvocation(i.invocationId);
			return delete this._callbacks[i.invocationId], a.then(() => this._sendWithProtocol(e));
		}, this._callbacks[i.invocationId] = (e, t) => {
			if (t) {
				o.error(t);
				return;
			}
			e && (e.type === O.Completion ? e.error ? o.error(Error(e.error)) : o.complete() : o.next(e.item));
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
				n && (n.type === O.Completion ? n.error ? t(Error(n.error)) : e(n.result) : t(/* @__PURE__ */ Error(`Unexpected message type: ${n.type}`)));
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
				case O.Invocation:
					this._invokeClientMethod(e);
					break;
				case O.StreamItem:
				case O.Completion: {
					let t = this._callbacks[e.invocationId];
					if (t) {
						e.type === O.Completion && delete this._callbacks[e.invocationId];
						try {
							t(e);
						} catch (e) {
							this._logger.log(D.Error, `Stream callback threw error: ${_d(e)}`);
						}
					}
					break;
				}
				case O.Ping: break;
				case O.Close: {
					this._logger.log(D.Information, "Close message received from server.");
					let t = e.error ? /* @__PURE__ */ Error("Server returned an error on close: " + e.error) : void 0;
					e.allowReconnect === !0 ? this.connection.stop(t) : this._stopPromise = this._stopInternal(t);
					break;
				}
				default: this._logger.log(D.Warning, `Invalid message type: ${e.type}.`);
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
			this._logger.log(D.Error, t);
			let n = Error(t);
			throw this._handshakeRejecter(n), n;
		}
		if (t.error) {
			let e = "Server returned handshake error: " + t.error;
			this._logger.log(D.Error, e);
			let n = Error(e);
			throw this._handshakeRejecter(n), n;
		}
		return this._logger.log(D.Debug, "Server handshake complete."), this._handshakeResolver(), n;
	}
	_resetKeepAliveInterval() {
		this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
	}
	_resetTimeoutPeriod() {
		if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
			let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
			e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
				if (this._connectionState === Od.Connected) try {
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
				this._logger.log(D.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${t}'.`);
			}
			if (e.invocationId) {
				let e = "Server requested a response, which is not supported in this version of the client.";
				this._logger.log(D.Error, e), this._stopPromise = this._stopInternal(/* @__PURE__ */ Error(e));
			}
		} else this._logger.log(D.Warning, `No client method with the name '${e.target}' found.`);
	}
	_connectionClosed(e) {
		this._logger.log(D.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || /* @__PURE__ */ Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || /* @__PURE__ */ Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === Od.Disconnecting ? this._completeClose(e) : this._connectionState === Od.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === Od.Connected && this._completeClose(e);
	}
	_completeClose(e) {
		if (this._connectionStarted) {
			this._connectionState = Od.Disconnected, this._connectionStarted = !1, id.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
			try {
				this._closedCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(D.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
			}
		}
	}
	async _reconnect(e) {
		let t = Date.now(), n = 0, r = e === void 0 ? /* @__PURE__ */ Error("Attempting to reconnect due to a unknown error.") : e, i = this._getNextRetryDelay(n++, 0, r);
		if (i === null) {
			this._logger.log(D.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
			return;
		}
		if (this._connectionState = Od.Reconnecting, e ? this._logger.log(D.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(D.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
			try {
				this._reconnectingCallbacks.forEach((t) => t.apply(this, [e]));
			} catch (t) {
				this._logger.log(D.Error, `An onreconnecting callback called with error '${e}' threw error '${t}'.`);
			}
			if (this._connectionState !== Od.Reconnecting) {
				this._logger.log(D.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
				return;
			}
		}
		for (; i !== null;) {
			if (this._logger.log(D.Information, `Reconnect attempt number ${n} will start in ${i} ms.`), await new Promise((e) => {
				this._reconnectDelayHandle = setTimeout(e, i);
			}), this._reconnectDelayHandle = void 0, this._connectionState !== Od.Reconnecting) {
				this._logger.log(D.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
				return;
			}
			try {
				if (await this._startInternal(), this._connectionState = Od.Connected, this._logger.log(D.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0) try {
					this._reconnectedCallbacks.forEach((e) => e.apply(this, [this.connection.connectionId]));
				} catch (e) {
					this._logger.log(D.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
				}
				return;
			} catch (e) {
				if (this._logger.log(D.Information, `Reconnect attempt failed because of error '${e}'.`), this._connectionState !== Od.Reconnecting) {
					this._logger.log(D.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === Od.Disconnecting && this._completeClose();
					return;
				}
				r = e instanceof Error ? e : Error(e.toString()), i = this._getNextRetryDelay(n++, Date.now() - t, r);
			}
		}
		this._logger.log(D.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${n} failed attempts. Connection disconnecting.`), this._completeClose();
	}
	_getNextRetryDelay(e, t, n) {
		try {
			return this._reconnectPolicy.nextRetryDelayInMilliseconds({
				elapsedMilliseconds: t,
				previousRetryCount: e,
				retryReason: n
			});
		} catch (n) {
			return this._logger.log(D.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${n}'.`), null;
		}
	}
	_cancelCallbacksWithError(e) {
		let t = this._callbacks;
		this._callbacks = {}, Object.keys(t).forEach((n) => {
			let r = t[n];
			try {
				r(null, e);
			} catch (t) {
				this._logger.log(D.Error, `Stream 'error' callback called with '${e}' threw error: ${_d(t)}`);
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
			type: O.Invocation
		} : {
			arguments: t,
			streamIds: r,
			target: e,
			type: O.Invocation
		};
		{
			let n = this._invocationId;
			return this._invocationId++, r.length === 0 ? {
				arguments: t,
				invocationId: n.toString(),
				target: e,
				type: O.Invocation
			} : {
				arguments: t,
				invocationId: n.toString(),
				streamIds: r,
				target: e,
				type: O.Invocation
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
			type: O.StreamInvocation
		} : {
			arguments: t,
			invocationId: r.toString(),
			streamIds: n,
			target: e,
			type: O.StreamInvocation
		};
	}
	_createCancelInvocation(e) {
		return {
			invocationId: e,
			type: O.CancelInvocation
		};
	}
	_createStreamItemMessage(e, t) {
		return {
			invocationId: e,
			item: t,
			type: O.StreamItem
		};
	}
	_createCompletionMessage(e, t, n) {
		return t ? {
			error: t,
			invocationId: e,
			type: O.Completion
		} : {
			invocationId: e,
			result: n,
			type: O.Completion
		};
	}
}, Ad = [
	0,
	2e3,
	1e4,
	3e4,
	null
], jd = class {
	constructor(e) {
		this._retryDelays = e === void 0 ? Ad : [...e, null];
	}
	nextRetryDelayInMilliseconds(e) {
		return this._retryDelays[e.previousRetryCount];
	}
}, Md = class {};
Md.Authorization = "Authorization", Md.Cookie = "Cookie";
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/ITransport.js
var Nd;
(function(e) {
	e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
})(Nd ||= {});
var Pd;
(function(e) {
	e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
})(Pd ||= {});
//#endregion
//#region node_modules/@microsoft/signalr/dist/esm/AbortController.js
var Fd = class {
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
}, Id = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._pollAbort = new Fd(), this._options = r, this._running = !1, this.onreceive = null, this.onclose = null;
	}
	get pollAborted() {
		return this._pollAbort.aborted;
	}
	async connect(e, t) {
		if (rd.isRequired(e, "url"), rd.isRequired(t, "transferFormat"), rd.isIn(t, Pd, "transferFormat"), this._url = e, this._logger.log(D.Trace, "(LongPolling transport) Connecting."), t === Pd.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string") throw Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
		let [n, r] = fd(), i = {
			[n]: r,
			...this._options.headers
		}, a = {
			abortSignal: this._pollAbort.signal,
			headers: i,
			timeout: 1e5,
			withCredentials: this._options.withCredentials
		};
		t === Pd.Binary && (a.responseType = "arraybuffer");
		let o = await this._getAccessToken();
		this._updateHeaderToken(a, o);
		let s = `${e}&_=${Date.now()}`;
		this._logger.log(D.Trace, `(LongPolling transport) polling: ${s}.`);
		let c = await this._httpClient.get(s, a);
		c.statusCode === 200 ? this._running = !0 : (this._logger.log(D.Error, `(LongPolling transport) Unexpected response code: ${c.statusCode}.`), this._closeError = new Gu(c.statusText || "", c.statusCode), this._running = !1), this._receiving = this._poll(this._url, a);
	}
	async _getAccessToken() {
		return this._accessTokenFactory ? await this._accessTokenFactory() : null;
	}
	_updateHeaderToken(e, t) {
		if (e.headers ||= {}, t) {
			e.headers[Md.Authorization] = `Bearer ${t}`;
			return;
		}
		e.headers[Md.Authorization] && delete e.headers[Md.Authorization];
	}
	async _poll(e, t) {
		try {
			for (; this._running;) {
				let n = await this._getAccessToken();
				this._updateHeaderToken(t, n);
				try {
					let n = `${e}&_=${Date.now()}`;
					this._logger.log(D.Trace, `(LongPolling transport) polling: ${n}.`);
					let r = await this._httpClient.get(n, t);
					r.statusCode === 204 ? (this._logger.log(D.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : r.statusCode === 200 ? r.content ? (this._logger.log(D.Trace, `(LongPolling transport) data received. ${ad(r.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(D.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._logger.log(D.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new Gu(r.statusText || "", r.statusCode), this._running = !1);
				} catch (e) {
					this._running ? e instanceof Ku ? this._logger.log(D.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = e, this._running = !1) : this._logger.log(D.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
				}
			}
		} finally {
			this._logger.log(D.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
		}
	}
	async send(e) {
		return this._running ? cd(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	async stop() {
		this._logger.log(D.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
		try {
			await this._receiving, this._logger.log(D.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
			let e = {}, [t, n] = fd();
			e[t] = n;
			let r = {
				headers: {
					...e,
					...this._options.headers
				},
				timeout: this._options.timeout,
				withCredentials: this._options.withCredentials
			}, i = await this._getAccessToken();
			this._updateHeaderToken(r, i), await this._httpClient.delete(this._url, r), this._logger.log(D.Trace, "(LongPolling transport) DELETE request sent.");
		} finally {
			this._logger.log(D.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
		}
	}
	_raiseOnClose() {
		if (this.onclose) {
			let e = "(LongPolling transport) Firing onclose event.";
			this._closeError && (e += " Error: " + this._closeError), this._logger.log(D.Trace, e), this.onclose(this._closeError);
		}
	}
}, Ld = class {
	constructor(e, t, n, r) {
		this._httpClient = e, this._accessTokenFactory = t, this._logger = n, this._options = r, this.onreceive = null, this.onclose = null;
	}
	async connect(e, t) {
		if (rd.isRequired(e, "url"), rd.isRequired(t, "transferFormat"), rd.isIn(t, Pd, "transferFormat"), this._logger.log(D.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			let i = !1;
			if (t !== Pd.Text) {
				r(/* @__PURE__ */ Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
				return;
			}
			let a;
			if (id.isBrowser || id.isWebWorker) a = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
			else {
				let t = this._httpClient.getCookieString(e), n = {};
				n.Cookie = t;
				let [r, i] = fd();
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
						this._logger.log(D.Trace, `(SSE transport) data received. ${ad(e.data, this._options.logMessageContent)}.`), this.onreceive(e.data);
					} catch (e) {
						this._close(e);
						return;
					}
				}, a.onerror = (e) => {
					i ? this._close() : r(/* @__PURE__ */ Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
				}, a.onopen = () => {
					this._logger.log(D.Information, `SSE connected to ${this._url}`), this._eventSource = a, i = !0, n();
				};
			} catch (e) {
				r(e);
				return;
			}
		});
	}
	async send(e) {
		return this._eventSource ? cd(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(/* @__PURE__ */ Error("Cannot send until the transport is connected"));
	}
	stop() {
		return this._close(), Promise.resolve();
	}
	_close(e) {
		this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
	}
}, Rd = class {
	constructor(e, t, n, r, i, a) {
		this._logger = n, this._accessTokenFactory = t, this._logMessageContent = r, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = a;
	}
	async connect(e, t) {
		if (rd.isRequired(e, "url"), rd.isRequired(t, "transferFormat"), rd.isIn(t, Pd, "transferFormat"), this._logger.log(D.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
			let t = await this._accessTokenFactory();
			t && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(t)}`);
		}
		return new Promise((n, r) => {
			e = e.replace(/^http/, "ws");
			let i, a = this._httpClient.getCookieString(e), o = !1;
			if (id.isNode) {
				let t = {}, [n, r] = fd();
				t[n] = r, a && (t[Md.Cookie] = `${a}`), i = new this._webSocketConstructor(e, void 0, { headers: {
					...t,
					...this._headers
				} });
			}
			i ||= new this._webSocketConstructor(e), t === Pd.Binary && (i.binaryType = "arraybuffer"), i.onopen = (t) => {
				this._logger.log(D.Information, `WebSocket connected to ${e}.`), this._webSocket = i, o = !0, n();
			}, i.onerror = (e) => {
				let t = null;
				t = typeof ErrorEvent < "u" && e instanceof ErrorEvent ? e.error : "There was an error with the transport", this._logger.log(D.Information, `(WebSockets transport) ${t}.`);
			}, i.onmessage = (e) => {
				if (this._logger.log(D.Trace, `(WebSockets transport) data received. ${ad(e.data, this._logMessageContent)}.`), this.onreceive) try {
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
		return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(D.Trace, `(WebSockets transport) sending data. ${ad(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
	}
	stop() {
		return this._webSocket && this._close(void 0), Promise.resolve();
	}
	_close(e) {
		this._webSocket &&= (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), void 0), this._logger.log(D.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(/* @__PURE__ */ Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
	}
	_isCloseEvent(e) {
		return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
	}
}, zd = 100, Bd = class {
	constructor(e, t = {}) {
		if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, rd.isRequired(e, "url"), this._logger = ld(t.logger), this.baseUrl = this._resolveUrl(e), t ||= {}, t.logMessageContent = t.logMessageContent !== void 0 && t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0) t.withCredentials = t.withCredentials === void 0 || t.withCredentials;
		else throw Error("withCredentials option was not a 'boolean' or 'undefined' value");
		t.timeout = t.timeout === void 0 ? 1e5 : t.timeout;
		let r = null, i = null;
		if (id.isNode && n !== void 0) {
			let e = typeof __webpack_require__ == "function" ? __non_webpack_require__ : n;
			r = e("ws"), i = e("eventsource");
		}
		!id.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : id.isNode && !t.WebSocket && r && (t.WebSocket = r), !id.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : id.isNode && !t.EventSource && i !== void 0 && (t.EventSource = i), this._httpClient = t.httpClient || new Sd(this._logger), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
	}
	async start(e) {
		if (e ||= Pd.Binary, rd.isIn(e, Pd, "transferFormat"), this._logger.log(D.Debug, `Starting connection with transfer format '${Pd[e]}'.`), this._connectionState !== "Disconnected") return Promise.reject(/* @__PURE__ */ Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
		if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
			let e = "Failed to start the HttpConnection before stop() was called.";
			return this._logger.log(D.Error, e), await this._stopPromise, Promise.reject(/* @__PURE__ */ Error(e));
		}
		if (this._connectionState !== "Connected") {
			let e = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
			return this._logger.log(D.Error, e), Promise.reject(/* @__PURE__ */ Error(e));
		}
		this._connectionStarted = !0;
	}
	send(e) {
		return this._connectionState === "Connected" ? (this._sendQueue ||= new Hd(this.transport), this._sendQueue.send(e)) : Promise.reject(/* @__PURE__ */ Error("Cannot send data if the connection is not in the 'Connected' State."));
	}
	async stop(e) {
		if (this._connectionState === "Disconnected") return this._logger.log(D.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
		if (this._connectionState === "Disconnecting") return this._logger.log(D.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
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
				this._logger.log(D.Error, `HttpConnection.transport.stop() threw error '${e}'.`), this._stopConnection();
			}
			this.transport = void 0;
		} else this._logger.log(D.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
	}
	async _startInternal(e) {
		let t = this.baseUrl;
		this._accessTokenFactory = this._options.accessTokenFactory;
		try {
			if (this._options.skipNegotiation) {
				if (this._options.transport === Nd.WebSockets) this.transport = this._constructTransport(Nd.WebSockets), await this._startTransport(t, e);
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
				} while (n.url && r < zd);
				if (r === zd && n.url) throw Error("Negotiate redirection limit exceeded.");
				await this._createTransport(t, this._options.transport, n, e);
			}
			this.transport instanceof Id && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(D.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
		} catch (e) {
			return this._logger.log(D.Error, "Failed to start the connection: " + e), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(e);
		}
	}
	async _getNegotiationResponse(e) {
		let t = {};
		if (this._accessTokenFactory) {
			let e = await this._accessTokenFactory();
			e && (t[Md.Authorization] = `Bearer ${e}`);
		}
		let [n, r] = fd();
		t[n] = r;
		let i = this._resolveNegotiateUrl(e);
		this._logger.log(D.Debug, `Sending negotiation request: ${i}.`);
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
			return e instanceof Gu && e.statusCode === 404 && (t += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(D.Error, t), Promise.reject(new Zu(t));
		}
	}
	_createConnectUrl(e, t) {
		return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
	}
	async _createTransport(e, t, n, r) {
		let i = this._createConnectUrl(e, n.connectionToken);
		if (this._isITransport(t)) {
			this._logger.log(D.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(i, r), this.connectionId = n.connectionId;
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
					if (this._logger.log(D.Error, `Failed to start the transport '${n.transport}': ${e}`), s = void 0, a.push(new Xu(`${n.transport} failed: ${e}`, Nd[n.transport])), this._connectionState !== "Connecting") {
						let e = "Failed to select transport before stop() was called.";
						return this._logger.log(D.Debug, e), Promise.reject(/* @__PURE__ */ Error(e));
					}
				}
			}
		}
		return a.length > 0 ? Promise.reject(new Qu(`Unable to connect to the server with any of the available transports. ${a.join(" ")}`, a)) : Promise.reject(/* @__PURE__ */ Error("None of the transports supported by the client are supported by the server."));
	}
	_constructTransport(e) {
		switch (e) {
			case Nd.WebSockets:
				if (!this._options.WebSocket) throw Error("'WebSocket' is not supported in your environment.");
				return new Rd(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
			case Nd.ServerSentEvents:
				if (!this._options.EventSource) throw Error("'EventSource' is not supported in your environment.");
				return new Ld(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			case Nd.LongPolling: return new Id(this._httpClient, this._accessTokenFactory, this._logger, this._options);
			default: throw Error(`Unknown transport: ${e}.`);
		}
	}
	_startTransport(e, t) {
		return this.transport.onreceive = this.onreceive, this.transport.onclose = (e) => this._stopConnection(e), this.transport.connect(e, t);
	}
	_resolveTransportOrError(e, t, n) {
		let r = Nd[e.transport];
		if (r == null) return this._logger.log(D.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), /* @__PURE__ */ Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
		if (Vd(t, r)) {
			if (e.transferFormats.map((e) => Pd[e]).indexOf(n) >= 0) {
				if (r === Nd.WebSockets && !this._options.WebSocket || r === Nd.ServerSentEvents && !this._options.EventSource) return this._logger.log(D.Debug, `Skipping transport '${Nd[r]}' because it is not supported in your environment.'`), new Ju(`'${Nd[r]}' is not supported in your environment.`, r);
				this._logger.log(D.Debug, `Selecting transport '${Nd[r]}'.`);
				try {
					return this._constructTransport(r);
				} catch (e) {
					return e;
				}
			}
			return this._logger.log(D.Debug, `Skipping transport '${Nd[r]}' because it does not support the requested transfer format '${Pd[n]}'.`), /* @__PURE__ */ Error(`'${Nd[r]}' does not support ${Pd[n]}.`);
		}
		return this._logger.log(D.Debug, `Skipping transport '${Nd[r]}' because it was disabled by the client.`), new Yu(`'${Nd[r]}' is disabled by the client.`, r);
	}
	_isITransport(e) {
		return e && typeof e == "object" && "connect" in e;
	}
	_stopConnection(e) {
		if (this._logger.log(D.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
			this._logger.log(D.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
			return;
		}
		if (this._connectionState === "Connecting") throw this._logger.log(D.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
		if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(D.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(D.Information, "Connection disconnected."), this._sendQueue &&= (this._sendQueue.stop().catch((e) => {
			this._logger.log(D.Error, `TransportSendQueue.stop() threw error '${e}'.`);
		}), void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
			this._connectionStarted = !1;
			try {
				this.onclose && this.onclose(e);
			} catch (t) {
				this._logger.log(D.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
			}
		}
	}
	_resolveUrl(e) {
		if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0) return e;
		if (!id.isBrowser) throw Error(`Cannot resolve '${e}'.`);
		let t = window.document.createElement("a");
		return t.href = e, this._logger.log(D.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
	}
	_resolveNegotiateUrl(e) {
		let t = e.indexOf("?"), n = e.substring(0, t === -1 ? e.length : t);
		return n[n.length - 1] !== "/" && (n += "/"), n += "negotiate", n += t === -1 ? "" : e.substring(t), n.indexOf("negotiateVersion") === -1 && (n += t === -1 ? "?" : "&", n += "negotiateVersion=" + this._negotiateVersion), n;
	}
};
function Vd(e, t) {
	return !e || (t & e) !== 0;
}
var Hd = class e {
	constructor(e) {
		this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Ud(), this._transportResult = new Ud(), this._sendLoopPromise = this._sendLoop();
	}
	send(e) {
		return this._bufferData(e), this._transportResult ||= new Ud(), this._transportResult.promise;
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
			this._sendBufferedData = new Ud();
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
}, Ud = class {
	constructor() {
		this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
	}
	resolve() {
		this._resolver();
	}
	reject(e) {
		this._rejecter(e);
	}
}, Wd = "json", Gd = class {
	constructor() {
		this.name = Wd, this.version = 1, this.transferFormat = Pd.Text;
	}
	parseMessages(e, t) {
		if (typeof e != "string") throw Error("Invalid input for JSON hub protocol. Expected a string.");
		if (!e) return [];
		t === null && (t = td.instance);
		let n = Cd.parse(e), r = [];
		for (let e of n) {
			let n = JSON.parse(e);
			if (typeof n.type != "number") throw Error("Invalid payload.");
			switch (n.type) {
				case O.Invocation:
					this._isInvocationMessage(n);
					break;
				case O.StreamItem:
					this._isStreamItemMessage(n);
					break;
				case O.Completion:
					this._isCompletionMessage(n);
					break;
				case O.Ping: break;
				case O.Close: break;
				default:
					t.log(D.Information, "Unknown message type '" + n.type + "' ignored.");
					continue;
			}
			r.push(n);
		}
		return r;
	}
	writeMessage(e) {
		return Cd.write(JSON.stringify(e));
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
}, Kd = {
	trace: D.Trace,
	debug: D.Debug,
	info: D.Information,
	information: D.Information,
	warn: D.Warning,
	warning: D.Warning,
	error: D.Error,
	critical: D.Critical,
	none: D.None
};
function qd(e) {
	let t = Kd[e.toLowerCase()];
	if (t !== void 0) return t;
	throw Error(`Unknown log level: ${e}`);
}
var Jd = class {
	configureLogging(e) {
		if (rd.isRequired(e, "logging"), Yd(e)) this.logger = e;
		else if (typeof e == "string") {
			let t = qd(e);
			this.logger = new dd(t);
		} else this.logger = new dd(e);
		return this;
	}
	withUrl(e, t) {
		return rd.isRequired(e, "url"), rd.isNotEmpty(e, "url"), this.url = e, this.httpConnectionOptions = typeof t == "object" ? {
			...this.httpConnectionOptions,
			...t
		} : {
			...this.httpConnectionOptions,
			transport: t
		}, this;
	}
	withHubProtocol(e) {
		return rd.isRequired(e, "protocol"), this.protocol = e, this;
	}
	withAutomaticReconnect(e) {
		if (this.reconnectPolicy) throw Error("A reconnectPolicy has already been set.");
		return this.reconnectPolicy = e ? Array.isArray(e) ? new jd(e) : e : new jd(), this;
	}
	build() {
		let e = this.httpConnectionOptions || {};
		if (e.logger === void 0 && (e.logger = this.logger), !this.url) throw Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
		let t = new Bd(this.url, e);
		return kd.create(t, this.logger || td.instance, this.protocol || new Gd(), this.reconnectPolicy);
	}
};
function Yd(e) {
	return e.log !== void 0;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/services/live-value.service.js
var Xd;
(function(e) {
	e.Running = "Running", e.Success = "Success", e.Failed = "Failed";
})(Xd ||= {});
var Zd;
(function(e) {
	e.ChangeModeAsync = "ChangeModeAsync", e.ChangeIntervalAsync = "ChangeIntervalAsync", e.SubscribeMany = "SubscribeMany";
})(Zd ||= {});
var Qd = 500, $d = 250;
function ef(e, t) {
	return t?.isV5 ? Math.max(e, 250) : e;
}
var tf;
(function(e) {
	e.Send = "Send";
})(tf ||= {});
var nf;
(function(e) {
	e.S = "S", e.SO = "SO", e.T = "T", e.TC = "TC", e.OP = "OP";
})(nf ||= {});
var rf = class {
	constructor(e) {
		this.ctx = e, this._unsub = new Mi(), this._connectionEstablished = new Pi(!1), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Mi(), this._subscribeRequested = new Mi(), this._handleSubscriptionQueue();
	}
	async getHubUrl() {
		return (await this.ctx.resolve({ name: "liveHub" })).url;
	}
	async connect() {
		return this._versionInfo = await this.ctx.getVersionInfo(), this.connectWithUrl(await this.getHubUrl());
	}
	changeInterval(e) {
		this._sendMessage(Zd.ChangeIntervalAsync, ef(e, this._versionInfo));
	}
	connectWithUrl(e) {
		return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Ea(this._connectionEstablished.pipe(Ja((e) => e), Oa(() => void 0)));
	}
	dispose() {
		this.hubConnection?.stop(), this.hubConnection = null, this._unsub.next(), this._unsub.complete();
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
		let t = e.map((e) => `${nf.OP}:${e}`);
		return this.subscribeLiveValuePackages(t);
	}
	getOperationStatus(e) {
		let t = `${nf.OP}:${e}`;
		return this.subscribeToOperations([e]).pipe(Oa((t) => t.find((t) => t.id === e)), Ja((e) => e != null), uo((e) => e.status !== Xd.Success && e.status !== Xd.Failed, !0), ro(() => this._unsubscribeIds([t])));
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
		t.length > 0 && (this._queuedIds.push(...t), this._subscribeRequested.next());
	}
	_handleSubscriptionQueue() {
		this._subscribeRequested.pipe(lo(this._unsub), Xa(50)).subscribe(() => {
			let e = this._queuedIds;
			this._queuedIds = [], this._sendMessage(Zd.SubscribeMany, e), this._subscribedIds.push(...e);
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
			this._sendMessage(Zd.ChangeModeAsync, !0), this._sendMessage(Zd.ChangeIntervalAsync, ef(500, this._versionInfo)), e.on("Send", (e) => this._handleHubMessage(e)), console.log("Connected to SignalR"), this._connectionEstablished.next(!0);
		}).catch((e) => {
			this.hubConnection = null, this._connectionEstablished.error(e), console.log("Failed to start connection: " + e.message);
		}), e.onclose(() => {
			console.log("Hub connection closed"), this.hubConnection = null;
		});
	}
	_buildHubConnection(e) {
		return new Jd().withUrl(e, { accessTokenFactory: () => this.getAccessToken() }).build();
	}
	getAccessToken() {
		return this.ctx.getAccessToken();
	}
};
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/adapters/historical-value.adapter.v4.js
function af(e, t) {
	if (!e || typeof e != "object" || t?.isV5) return e;
	let n = { ...e };
	return !Array.isArray(n.Notes) && n.Note && (n.Notes = [{
		Note: n.Note,
		CreatedBy: n.CreatedBy,
		Timestamp: n.IntervalStart
	}]), n;
}
function of(e, t) {
	return !e || typeof e != "object" || t?.isV5 || !Array.isArray(e.Values) ? e : {
		...e,
		Values: e.Values.map((e) => af(e, t))
	};
}
function sf(e, t) {
	return t?.isV5 ? {
		Timestamp: e.Timestamp,
		Value: e.Value,
		Note: e.Note ?? null,
		Source: e.Source
	} : {
		timestamp: e.Timestamp,
		value: e.Value,
		note: e.Note ?? null,
		source: e.Source
	};
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/services/historical-value.service.js
var cf;
(function(e) {
	e.Manual = "Manual", e.CounterReplacement = "CounterReplacement", e.CounterReadingAlignment = "CounterReadingAlignment";
})(cf ||= {});
var lf = class {
	constructor(e) {
		this.ctx = e;
	}
	async queryValuesFlat(e) {
		return (await this.ctx.request({ name: "historicalValuesQueryManyFlat" }, { data: e })).data;
	}
	async queryValues(e) {
		let [t, n] = await Promise.all([this.ctx.request({ name: "historicalValuesQueryMany" }, { data: e }), this.ctx.getVersionInfo()]);
		return (Array.isArray(t.data) ? t.data : []).map((e) => of(e, n));
	}
	async getNearestValue(e) {
		let [t, n] = await Promise.all([this.ctx.request({ name: "historicalValuesNearest" }, { data: e }), this.ctx.getVersionInfo()]);
		return af(t.data, n);
	}
	async getNthValue(e) {
		let [t, n] = await Promise.all([this.ctx.request({ name: "historicalValuesNth" }, { data: e }), this.ctx.getVersionInfo()]);
		return of(t.data, n);
	}
	async addManualValues(e) {
		await this.ctx.request({ name: "historicalValuesManual" }, { data: e });
	}
	async addNotes(e) {
		await this.ctx.request({ name: "historicalValuesNotes" }, { data: e });
	}
	async getCounterOffsets(e, t, n) {
		let r = (await this.ctx.request({
			name: "counterOffsets",
			signalId: e
		}, { params: {
			$from: t?.toISOString(),
			$till: n?.toISOString()
		} })).data || {};
		return Object.keys(r).map((e) => ({
			Date: e,
			Value: r[e].Effective,
			Calculated: r[e].Calculated,
			Custom: r[e].Custom
		}));
	}
	async setCustomOffset(e, t) {
		let n = await this.ctx.getVersionInfo();
		await this.ctx.request({
			name: "counterOffsetsCustom",
			signalId: e
		}, { data: sf(t, n) });
	}
	async deleteCounterOffsets(e, t) {
		await this.ctx.request({
			name: "counterOffsetsRemove",
			signalId: e
		}, { data: t });
	}
	async deleteCustomOffsets(e, t) {
		return (await this.ctx.request({
			name: "counterOffsetsCustomRemove",
			signalId: e
		}, { data: t })).data;
	}
	async resetStatistics(e, t = {}) {
		return (await this.ctx.request({
			name: "statisticsReset",
			signalId: e
		}, { data: {
			From: t.from ? t.from.toISOString() : null,
			Till: t.till ? t.till.toISOString() : null,
			ResetOffsets: !!t.resetOffsets,
			ResetCustomOffsets: !!t.resetCustomOffsets
		} })).data;
	}
	async importValues(e) {
		return (await this.ctx.request({ name: "historicalValueImport" }, { data: { Values: e } })).data;
	}
}, uf = "Processing", df = "Undone";
function ff(e) {
	return e === Or.Completed || e === Or.Failed || e === df;
}
function pf(e) {
	switch (e) {
		case uf: return Or.Pending;
		case df: return Or.Completed;
		case Or.Completed:
		case Or.Failed:
		case Or.Pending: return e;
		default: return Or.Pending;
	}
}
function mf(e, t) {
	if (!e || typeof e != "object" || t?.isV5) return e;
	let n = e, r = n.Status, i = ff(r), { Timezone: a, CreatedOn: o, CreatedBy: s, ChangedOn: c, ChangedBy: l, ...u } = n;
	return {
		...u,
		Status: pf(r),
		UserId: n.UserId ?? s,
		StartedOn: n.StartedOn ?? o,
		StoppedOn: n.StoppedOn ?? (i ? c ?? null : null),
		IsUndoable: n.IsUndoable ?? r === Or.Completed,
		IsRedoable: n.IsRedoable ?? r === df
	};
}
function hf(e, t) {
	return Array.isArray(e) ? e.map((e) => mf(e, t)) : [];
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/services/historical-value-manipulation-http.service.js
var gf = class {
	constructor(e) {
		this.ctx = e;
	}
	async getHistoricalValueOperations(e) {
		let [t, n] = await Promise.all([this.ctx.request({
			name: "historicalValueOperations",
			signalId: e
		}), this.ctx.getVersionInfo()]);
		return hf(t.data, n);
	}
	async startHistoricalValueOperation(e, t) {
		let [n, r] = await Promise.all([this.ctx.request({
			name: "historicalValueOperationStart",
			signalId: e
		}, { data: t }), this.ctx.getVersionInfo()]);
		return mf(n.data, r);
	}
	async undoHistoricalValueOperation(e) {
		await this.ctx.request({
			name: "historicalValueOperationUndo",
			operationId: e
		});
	}
	async redoHistoricalValueOperation(e) {
		await this.ctx.request({
			name: "historicalValueOperationRedo",
			operationId: e
		});
	}
}, _f = {
	translations: "4.16",
	entityMappings: "4.15",
	queryVerb: "5.0",
	entityCount: "5.0",
	entityInfo: "5.0",
	optimisticConcurrency: "5.0",
	historicalValueOperationsV2: "5.0",
	requiresAcknowledgmentField: "4.23",
	acknowledgmentField: "5.0",
	dashboardTabOrder: "5.0",
	entryPointStartDashboard: "5.0",
	managedBy: "5.0"
};
function vf(e) {
	return (t) => t ? Tf(t, e) : !1;
}
var yf = Object.keys(_f).reduce((e, t) => (e[t] = vf(_f[t]), e), {}), bf = Object.keys(_f);
function xf(e, t) {
	let n = yf[e];
	return n ? n(t) : !1;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/api/api-version.js
function Sf(e) {
	if (!e || typeof e != "string") return null;
	let t = e.trim(), n = /^v?(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:[-+](.*))?$/.exec(t);
	return n ? {
		major: parseInt(n[1], 10),
		minor: n[2] ? parseInt(n[2], 10) : 0,
		patch: n[3] ? parseInt(n[3], 10) : 0,
		prerelease: n[4] || "",
		raw: t
	} : null;
}
function Cf(e, t) {
	return e.major - t.major || e.minor - t.minor || e.patch - t.patch;
}
function wf(e, t) {
	let n = Sf(e), r = Sf(t);
	return !n && !r ? 0 : n ? r ? Cf(n, r) : 1 : -1;
}
function Tf(e, t) {
	let n = Sf(t);
	if (!n) return !0;
	let r = typeof e == "string" ? Sf(e) : e;
	return r ? Cf(r, n) >= 0 : !1;
}
var Ef = class {
	constructor(e, t, n) {
		this.platformVersion = e, this.version = t, this.apiVersion = n;
	}
	supports(e) {
		return xf(e, this.version);
	}
	isAtLeast(e) {
		return this.version ? Tf(this.version, e) : !1;
	}
	get isV4() {
		return this.apiVersion === "V4";
	}
	get isV5() {
		return this.apiVersion === "V5";
	}
};
function Df(e) {
	return e && e.major >= 5 ? "V5" : "V4";
}
function Of(e) {
	let t = Sf(e);
	return new Ef(e, t, Df(t));
}
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function kf(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: Af } = Object.prototype, { getPrototypeOf: jf } = Object, { iterator: Mf, toStringTag: Nf } = Symbol, Pf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ff = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), If = (e, t, n) => e === Object.prototype || !n && t === null, Lf = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (Ff(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, Rf = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = jf(n);
		if (If(n, i, n === e)) return !1;
		if (Pf(n, t)) return !0;
		n = i;
	}
	return !1;
}, zf = (e, t) => e != null && Rf(e, t) ? e[t] : void 0, Bf = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = jf(e);
	if (t === null && Lf(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : jf(a);
		if (If(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) Ff(t) || Pf(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, Vf = ((e) => (t) => {
	let n = Af.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), Hf = (e) => (e = e.toLowerCase(), (t) => Vf(t) === e), Uf = (e) => (t) => typeof t === e, { isArray: Wf } = Array, Gf = Uf("undefined");
function Kf(e) {
	return e !== null && !Gf(e) && e.constructor !== null && !Gf(e.constructor) && Xf(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var qf = Hf("ArrayBuffer");
function Jf(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && qf(e.buffer), t;
}
var Yf = Uf("string"), Xf = Uf("function"), Zf = Uf("number"), Qf = (e) => typeof e == "object" && !!e, $f = (e) => e === !0 || e === !1, ep = (e) => {
	if (!Qf(e)) return !1;
	let t = jf(e);
	return (t === null || t === Object.prototype || jf(t) === null) && !Rf(e, Nf) && !Rf(e, Mf);
}, tp = (e) => {
	if (!Qf(e) || Kf(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, np = Hf("Date"), rp = Hf("File"), ip = (e) => !!(e && e.uri !== void 0), ap = (e) => e && e.getParts !== void 0, op = Hf("Blob"), sp = Hf("FileList"), cp = Hf("Set"), lp = (e) => Qf(e) && Xf(e.pipe);
function up() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var dp = up(), fp = dp.FormData === void 0 ? void 0 : dp.FormData, pp = (e) => {
	if (!e) return !1;
	if (fp && e instanceof fp) return !0;
	let t = jf(e);
	if (!t || t === Object.prototype || !Xf(e.append)) return !1;
	let n = Vf(e);
	return n === "formdata" || n === "object" && Xf(e.toString) && e.toString() === "[object FormData]";
}, mp = Hf("URLSearchParams"), [hp, gp, _p, vp] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(Hf), yp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bp(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), Wf(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (Kf(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function xp(e, t) {
	if (Kf(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var Sp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Cp = (e) => !Gf(e) && e !== Sp;
function wp(...e) {
	let { caseless: t, skipUndefined: n } = Cp(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && xp(r, i) || i, o = Pf(r, a) ? r[a] : void 0;
		ep(o) && ep(e) ? r[a] = wp(o, e) : ep(e) ? r[a] = wp({}, e) : Wf(e) ? r[a] = e.slice() : (!n || !Gf(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || Kf(n) || (bp(n, i), typeof n != "object" || Wf(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			Ip.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var Tp = (e, t, n, { allOwnKeys: r } = {}) => (bp(t, (t, r) => {
	n && Xf(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: kf(t, n),
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
}, { allOwnKeys: r }), e), Ep = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Dp = (e, t, n, r) => {
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
}, Op = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && jf(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, kp = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, Ap = (e) => {
	if (!e) return null;
	if (Wf(e)) return e;
	let t = e.length;
	if (!Zf(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, jp = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && jf(Uint8Array)), Mp = (e, t) => {
	let n = (e && e[Mf]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, Np = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Pp = Hf("HTMLFormElement"), Fp = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: Ip } = Object.prototype, Lp = Hf("RegExp"), Rp = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	bp(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, zp = (e) => {
	Rp(e, (t, n) => {
		if (Xf(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (Xf(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Bp = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return Wf(e) ? r(e) : r(String(e).split(t)), n;
}, Vp = () => {}, Hp = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Up(e) {
	return !!(e && Xf(e.append) && e[Nf] === "FormData" && e[Mf]);
}
var Wp = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (Qf(e)) {
			if (t.has(e)) return;
			if (Kf(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (cp(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!Gf(e) && r.push(e);
					}
				} else r = Wf(e) ? [] : {}, bp(e, (e, t) => {
					let i = n(e);
					!Gf(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Gp = Hf("AsyncFunction"), Kp = (e) => e && (Qf(e) || Xf(e)) && Xf(e.then) && Xf(e.catch), qp = ((e, t) => e ? setImmediate : t ? ((e, t) => (Sp.addEventListener("message", ({ source: n, data: r }) => {
	n === Sp && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), Sp.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", Xf(Sp.postMessage)), Jp = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sp) : typeof process < "u" && process.nextTick || qp, Yp = (e) => e != null && Xf(e[Mf]), k = {
	isArray: Wf,
	isArrayBuffer: qf,
	isBuffer: Kf,
	isFormData: pp,
	isArrayBufferView: Jf,
	isString: Yf,
	isNumber: Zf,
	isBoolean: $f,
	isObject: Qf,
	isPlainObject: ep,
	isEmptyObject: tp,
	isReadableStream: hp,
	isRequest: gp,
	isResponse: _p,
	isHeaders: vp,
	isUndefined: Gf,
	isDate: np,
	isFile: rp,
	isReactNativeBlob: ip,
	isReactNative: ap,
	isBlob: op,
	isRegExp: Lp,
	isFunction: Xf,
	isStream: lp,
	isURLSearchParams: mp,
	isTypedArray: jp,
	isFileList: sp,
	forEach: bp,
	merge: wp,
	extend: Tp,
	trim: yp,
	stripBOM: Ep,
	inherits: Dp,
	toFlatObject: Op,
	kindOf: Vf,
	kindOfTest: Hf,
	endsWith: kp,
	toArray: Ap,
	forEachEntry: Mp,
	matchAll: Np,
	isHTMLForm: Pp,
	hasOwnProperty: Pf,
	hasOwnProp: Pf,
	hasOwnInPrototypeChain: Rf,
	getSafeProp: zf,
	toSafeFlatObject: Bf,
	reduceDescriptors: Rp,
	freezeMethods: zp,
	toObjectSet: Bp,
	toCamelCase: Fp,
	noop: Vp,
	toFiniteNumber: Hp,
	findKey: xp,
	global: Sp,
	isContextDefined: Cp,
	isSpecCompliantForm: Up,
	toJSONObject: Wp,
	isAsyncFn: Gp,
	isThenable: Kp,
	setImmediate: qp,
	asap: Jp,
	isIterable: Yp,
	isSafeIterable: (e) => e != null && Rf(e, Mf) && Yp(e)
}, Xp = k.toObjectSet([
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
]), Zp = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = k.hasOwnProp(t, n);
		!n || a && k.hasOwnProp(Xp, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Qp(e) {
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
var $p = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), em = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function tm(e, t) {
	return k.isArray(e) ? e.map((e) => tm(e, t)) : Qp(String(e).replace(t, ""));
}
var nm = (e) => tm(e, $p), rm = (e) => tm(e, em);
function im(e) {
	let t = Object.create(null);
	return k.forEach(e.toJSON(), (e, n) => {
		t[n] = rm(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var am = Symbol("internals");
function om(e) {
	return e && String(e).trim().toLowerCase();
}
function sm(e) {
	return e === !1 || e == null ? e : k.isArray(e) ? e.map(sm) : nm(String(e));
}
function cm(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var lm = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function um(e) {
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
function dm(e) {
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
function fm(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = um(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = um(i.slice(0, a));
		if (!lm.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = um(i.slice(a + 1));
		t[s] = dm(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var pm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mm(e, t, n, r, i) {
	if (k.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), k.isString(t)) {
		if (k.isString(r)) return t.indexOf(r) !== -1;
		if (k.isRegExp(r)) return r.test(t);
	}
}
function hm(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function gm(e, t) {
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
var _m = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = om(t);
			if (!i) return;
			let a = k.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = sm(e));
		}
		let a = (e, t) => k.forEach(e, (e, n) => i(e, n, t));
		if (k.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (k.isString(e) && (e = e.trim()) && !pm(e)) a(Zp(e), t);
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
		if (e = om(e), e) {
			let n = k.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return cm(e);
				if (k.isFunction(t)) return t.call(this, e, n);
				if (k.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = om(e), e) {
			let n = k.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || mm(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = om(e), e) {
				let i = k.findKey(n, e);
				i && (!t || mm(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return k.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || mm(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return k.forEach(this, (r, i) => {
			let a = k.findKey(n, i);
			if (a) {
				t[a] = sm(r), delete t[i];
				return;
			}
			let o = e ? hm(i) : String(i).trim();
			o !== i && delete t[i], t[o] = sm(r), n[o] = !0;
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
		return fm(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[am] = this[am] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = om(e);
			t[r] || (gm(n, e), t[r] = !0);
		}
		return k.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
_m.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), k.reduceDescriptors(_m.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), k.freezeMethods(_m);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var vm = "[REDACTED ****]";
function ym(e) {
	if (k.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (k.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function bm(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || k.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof _m && (e = e.toJSON()), r.push(e);
		let t;
		if (k.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			k.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!k.isPlainObject(e) && ym(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? vm : i(a);
				k.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function xm(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function Sm(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? xm(e.message) : xm(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var A = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && k.isArray(t.errors) && t.errors.length && (s = Sm(t));
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
		let e = this.config, t = e && k.hasOwnProp(e, "redact") ? e.redact : void 0, n = k.isArray(t) && t.length > 0 ? bm(e, t) : k.toJSONObject(e);
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
function Cm(e) {
	return k.isPlainObject(e) || k.isArray(e);
}
function wm(e) {
	return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tm(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = wm(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function Em(e) {
	return k.isArray(e) && !e.some(Cm);
}
var Dm = k.toFlatObject(k, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function Om(e, t, n) {
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
		if (k.isReactNative(t) && k.isReactNativeBlob(e)) return t.append(Tm(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (k.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (k.isArray(e) && Em(e) || (k.isFileList(e) || k.endsWith(n, "[]")) && (a = k.toArray(e))) return n = wm(n), a.forEach(function(e, r) {
				!(k.isUndefined(e) || e === null) && t.append(s === !0 ? Tm([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return Cm(e) ? !0 : (t.append(Tm(r, n, o), f(e)), !1);
	}
	let g = Object.assign(Dm, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: Cm
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
function km(e) {
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
function Am(e, t) {
	this._pairs = [], e && Om(e, this, t);
}
var jm = Am.prototype;
jm.append = function(e, t) {
	this._pairs.push([e, t]);
}, jm.toString = function(e) {
	let t = e ? (t) => e.call(this, t, km) : km;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function Mm(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Nm(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = k.isFunction(n) ? { serialize: n } : n, i = k.getSafeProp(r, "encode") || Mm, a = k.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : k.isURLSearchParams(t) ? t.toString() : new Am(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var Pm = Symbol("internals");
function Fm(e) {
	return e ? e.length : 0;
}
function Im(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function Lm(e, t) {
	let n = e.handlers, r = Fm(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var Rm = class {
	constructor() {
		this.handlers = [], this[Pm] = {
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
		}, i = this[Pm];
		this.handlers ??= [], Lm(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[Pm];
		Lm(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (Im(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], Lm(this, this[Pm]));
	}
	forEach(e) {
		let t = this[Pm];
		Lm(this, t), t.iterationDepth++;
		try {
			k.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (Lm(this, t), Im(this.handlers), t.handlersLength = Fm(this.handlers));
		}
	}
}, zm = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Bm = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Am,
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
}, Vm = /* @__PURE__ */ t({
	hasBrowserEnv: () => Hm,
	hasStandardBrowserEnv: () => Wm,
	hasStandardBrowserWebWorkerEnv: () => Gm,
	navigator: () => Um,
	origin: () => Km
}), Hm = typeof window < "u" && typeof document < "u", Um = typeof navigator == "object" && navigator || void 0, Wm = Hm && (!Um || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Um.product) < 0), Gm = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Km = Hm && window.location.href || "http://localhost", qm = {
	...Vm,
	...Bm
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Jm(e, t) {
	return Om(e, new qm.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return qm.isNode && k.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Ym = 100;
function Xm(e) {
	if (e > Ym) throw new A("FormData field is too deeply nested (" + e + " levels). Max depth: " + Ym, A.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Zm(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Xm(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Qm(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function $m(e) {
	function t(e, n, r, i) {
		Xm(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && k.isArray(r) ? r.length : a, s ? (k.hasOwnProp(r, a) ? r[a] = k.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!k.hasOwnProp(r, a) || !k.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && k.isArray(r[a]) && (r[a] = Qm(r[a])), !o);
	}
	if (k.isFormData(e) && k.isFunction(e.entries)) {
		let n = {};
		return k.forEachEntry(e, (e, r) => {
			t(Zm(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var eh = Object.freeze([
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
]), th = (e, t) => e != null && k.hasOwnProp(e, t) ? e[t] : void 0;
function nh(e, t, n) {
	if (k.isString(e)) try {
		return (t || JSON.parse)(e), k.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var rh = {
	transitional: zm,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = k.isObject(e);
		if (i && k.isHTMLForm(e) && (e = new FormData(e)), k.isFormData(e)) return r ? JSON.stringify($m(e)) : e;
		if (k.isArrayBuffer(e) || k.isBuffer(e) || k.isStream(e) || k.isFile(e) || k.isBlob(e) || k.isReadableStream(e)) return e;
		if (k.isArrayBufferView(e)) return e.buffer;
		if (k.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = th(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Jm(e, t).toString();
			if ((a = k.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = th(this, "env"), r = n && n.FormData;
				return Om(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), nh(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = th(this, "transitional") || rh.transitional, n = t && t.forcedJSONParsing, r = th(this, "responseType"), i = r === "json";
		if (k.isResponse(e) || k.isReadableStream(e)) return e;
		if (e && k.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, th(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? A.from(e, A.ERR_BAD_RESPONSE, this, null, th(this, "response")) : e;
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
		FormData: qm.classes.FormData,
		Blob: qm.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
k.forEach(eh, (e) => {
	rh.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function ih(e, t) {
	let n = this || rh, r = t || n, i = _m.from(r.headers), a = r.data;
	return k.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function ah(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var oh = class extends A {
	constructor(e, t, n) {
		super(e ?? "canceled", A.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function sh(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new A("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? A.ERR_BAD_REQUEST : A.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var ch = /[\t\n\r]/g;
function lh(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(ch, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function uh(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function dh(e, t) {
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
function fh(e, t) {
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
var ph = (e, t, n = 3) => {
	let r = 0, i = dh(50, 250);
	return fh((n) => {
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
}, mh = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, hh = (e, t = k.asap) => (...n) => t(() => e(...n)), gh = qm.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, qm.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(qm.origin), qm.navigator && /(msie|trident)/i.test(qm.navigator.userAgent)) : () => !0, _h = qm.hasStandardBrowserEnv ? {
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
function vh(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function yh(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var bh = /^https?:(?!\/\/)/i;
function xh(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${vm}`);
}
function Sh(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${vm}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${vm}`);
	return n === -1 ? r : `${r}#${xh(t.slice(n + 1))}`;
}
function Ch(e, t) {
	if (typeof e == "string") {
		let n = lh(e);
		if (bh.test(n)) throw new A(`Invalid URL ${JSON.stringify(Sh(n))}: missing "//" after protocol`, A.ERR_INVALID_URL, t);
	}
}
function wh(e, t, n, r) {
	Ch(t, r);
	let i = !vh(t);
	return e && (i || n === !1) ? (Ch(e, r), yh(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var Th = (e) => e instanceof _m ? { ...e } : e, Eh = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function Dh(e, t) {
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
		headers: (e, t, n) => i(Th(e), Th(t), n, !0)
	};
	return k.forEach(Eh({
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
var Oh = ["content-type", "content-length"];
function kh(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		Oh.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var Ah = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function jh(e) {
	let t = Dh({}, e), n = (e) => k.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = _m.from(s), t.url = Nm(wh(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = k.getSafeProp(c, "username") || "", n = k.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? Ah(n) : "")));
		} catch (t) {
			throw A.from(t, A.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (k.isFormData(r)) {
		let e = k.getSafeProp(r, "getHeaders");
		qm.hasStandardBrowserEnv || qm.hasStandardBrowserWebWorkerEnv || k.isReactNative(r) ? s.setContentType(void 0) : k.isFunction(e) && kh(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (qm.hasStandardBrowserEnv && (k.isFunction(i) && (i = i(t)), i === !0 || i == null && gh(t.url))) {
		let e = a && o && _h.read(o);
		e && s.set(a, e);
	}
	return t;
}
var Mh = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = jh(e), i = r.data, a = _m.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (uh(lh(r.url)) || uh(qm.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
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
			let a = _m.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			sh(function(e) {
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
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || zm;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new A(t, i.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && k.forEach(im(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), k.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = ph(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = ph(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new oh(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = uh(r.url);
		if (v && !qm.protocols.includes(v)) {
			n(new A("Unsupported protocol " + v + ":", A.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, Nh = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof A ? t : new oh(t instanceof Error ? t.message : t));
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
}, Ph = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, Fh = async function* (e, t) {
	for await (let n of Ih(e)) yield* Ph(n, t);
}, Ih = async function* (e) {
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
}, Lh = (e, t, n, r) => {
	let i = Fh(e, t), a = 0, o, s = (e) => {
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
}, Rh = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, zh = (e, t, n) => t + 2 < n && Rh(e.charCodeAt(t + 1)) && Rh(e.charCodeAt(t + 2)), Bh = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Vh = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, Hh = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Uh = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Wh = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Gh = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && zh(e, a, t) && (o = Bh(e.charCodeAt(a + 1)) * 16 + Bh(e.charCodeAt(a + 2)), a += 2), !Hh(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!Vh(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Wh(e) : Uh(n);
}, Kh = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && zh(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function qh(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return Kh(t === -1 ? e : e.slice(0, t), Gh);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Jh = "1.20.0", Yh = 65536, Xh = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Zh } = k, Qh = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), $h = (e) => {
	if (!k.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, eg = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, tg = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, ng = (e) => {
	let t = k.global !== void 0 && k.global !== null ? k.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = k.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Zh(i) : typeof fetch == "function", c = Zh(a), l = Zh(o);
	if (!s) return !1;
	let u = s && Zh(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && eg(() => {
		let e = !1, t = new a(qm.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && eg(() => k.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
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
		if (k.isSpecCompliantForm(e)) return (await new a(qm.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
		if (k.isURLSearchParams(e) && (e += ""), k.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => k.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: ee, maxContentLength: C, maxBodyLength: te, maxRedirects: ne } = jh(e), re = k.isNumber(C) && C > -1, ie = k.isNumber(te) && te > -1, ae = (t) => k.hasOwnProp(e, t) ? e[t] : void 0, oe = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let se = Nh([l, d && d.toAbortSignal()], _), ce = null, le = se && se.unsubscribe && (() => {
			se.unsubscribe();
		}), ue, de = null, fe = () => new A("Request body larger than maxBodyLength limit", A.ERR_BAD_REQUEST, e, ce);
		try {
			let i, l = ae("auth");
			if (l && (i = {
				username: k.getSafeProp(l, "username") || "",
				password: k.getSafeProp(l, "password") || ""
			}), tg(t)) {
				let e = new URL(t, qm.origin);
				!i && (e.username || e.password) && (i = {
					username: $h(e.username),
					password: $h(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Qh((i.username || "") + ":" + (i.password || ""))))), re && typeof t == "string" && t.startsWith("data:") && qh(t) > C) throw new A("maxContentLength size of " + C + " exceeded", A.ERR_BAD_RESPONSE, e, ce);
			if (ie && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ue = e, e > te)) throw fe();
			}
			let d = ie && (k.isReadableStream(s) || k.isStream(s)), _ = (e, t, n) => Lh(e, Yh, (e) => {
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
					if (k.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && mh(ue, ph(hh(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new A("Stream request bodies are not supported by the current fetch implementation", A.ERR_NOT_SUPPORT, e, ce);
			k.isString(S) || (S = S ? "include" : "omit");
			let pe = c && "credentials" in a.prototype;
			if (k.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + Jh, !1);
			let w = ee == null ? ee : Object.assign(Object.create(null), ee);
			w && (delete w.body, delete w.headers, delete w.method, delete w.signal, delete w.duplex, delete w.credentials);
			let me = Object.assign(Object.create(null), w, {
				signal: se,
				method: n.toUpperCase(),
				headers: im(x.normalize()),
				body: s,
				duplex: "half",
				credentials: pe ? S : void 0
			});
			c && (k.forEach(Xh, (e, t) => {
				me[t] === void 0 && (me[t] = e);
			}), me.signal === void 0 && (me.signal = null), me.body === void 0 && (me.body = null)), ne === 0 && (me.redirect = "manual", w && (w.redirect = "manual")), ce = c && new a(t, me);
			let he = await (c ? oe(ce, w) : oe(t, me)), ge = _m.from(he.headers);
			if (re) {
				let t = k.toFiniteNumber(ge.getContentLength());
				if (t != null && t > C) throw new A("maxContentLength size of " + C + " exceeded", A.ERR_BAD_RESPONSE, e, ce);
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
				let n = k.toFiniteNumber(ge.getContentLength()), [r, i] = v && mh(n, ph(hh(v), !0)) || [], a = 0;
				he = new o(Lh(he.body, Yh, (t) => {
					if (re && (a = t, a > C)) throw new A("maxContentLength size of " + C + " exceeded", A.ERR_BAD_RESPONSE, e, ce);
					r && r(t);
				}, () => {
					i && i(), le && le();
				}), t);
			}
			b ||= "text";
			let ve = await m[k.findKey(m, b) || "text"](he, e);
			if (re && !p && !_e) {
				let t;
				if (ve != null && (typeof ve.byteLength == "number" ? t = ve.byteLength : typeof ve.size == "number" ? t = ve.size : typeof ve == "string" && (t = typeof r == "function" ? new r().encode(ve).byteLength : ve.length)), typeof t == "number" && t > C) throw new A("maxContentLength size of " + C + " exceeded", A.ERR_BAD_RESPONSE, e, ce);
			}
			return !_e && le && le(), await new Promise((t, n) => {
				sh(t, n, {
					data: ve,
					headers: _m.from(he.headers),
					status: he.status,
					statusText: he.statusText,
					config: e,
					request: ce
				});
			});
		} catch (t) {
			if (le && le(), se && se.aborted && se.reason instanceof A) {
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
			if (t instanceof A) throw ce && !t.request && (t.request = ce), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new A("Network Error", A.ERR_NETWORK, e, ce, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw A.from(t, t && t.code, e, ce, t && t.response);
		}
	};
}, rg = /* @__PURE__ */ new Map(), ig = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = rg;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : ng(t)), l = c;
	return c;
};
ig();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var ag = {
	http: null,
	xhr: Mh,
	fetch: { get: ig }
};
k.forEach(ag, (e, t) => {
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
var og = (e) => `- ${e}`, sg = (e) => k.isFunction(e) || e === null || e === !1;
function cg(e, t) {
	e = k.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !sg(r) && (i = ag[(n = String(r)).toLowerCase()], i === void 0)) throw new A(`Unknown adapter '${n}'`);
		if (i && (k.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new A("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(og).join("\n") : " " + og(e[0]) : "as no adapter specified"), A.ERR_NOT_SUPPORT);
	}
	return i;
}
var lg = {
	getAdapter: cg,
	adapters: ag
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function ug(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new oh(null, e);
}
function dg(e) {
	let t = k.toSafeFlatObject(e);
	return ug(t), t.headers = _m.from(k.getSafeProp(t, "headers")), t.data = ih.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), lg.getAdapter(t.adapter || rh.adapter, t)(t).then(function(e) {
		ug(t), t.response = e;
		try {
			e.data = ih.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = _m.from(e.headers), e;
	}, function(e) {
		if (!ah(e) && (ug(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = ih.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = _m.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var fg = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	fg[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var pg = {};
fg.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Jh + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new A(r(i, " has been removed" + (t ? " in " + t : "")), A.ERR_DEPRECATED);
		return t && !pg[i] && (pg[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, fg.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function mg(e, t, n) {
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
var hg = {
	assertOptions: mg,
	validators: fg
}, gg = hg.validators, _g = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Rm(),
			response: new Rm()
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
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = Dh(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && hg.assertOptions(n, {
			silentJSONParsing: gg.transitional(gg.boolean),
			forcedJSONParsing: gg.transitional(gg.boolean),
			clarifyTimeoutError: gg.transitional(gg.boolean),
			legacyInterceptorReqResOrdering: gg.transitional(gg.boolean),
			advertiseZstdAcceptEncoding: gg.transitional(gg.boolean),
			validateStatusUndefinedResolves: gg.transitional(gg.boolean)
		}, !1), r != null && (k.isFunction(r) ? t.paramsSerializer = { serialize: r } : hg.assertOptions(r, {
			encode: gg.function,
			serialize: gg.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), hg.assertOptions(t, {
			baseUrl: gg.spelling("baseURL"),
			withXsrfToken: gg.spelling("withXSRFToken")
		}, !0), t.method = (k.getSafeProp(t, "method") || k.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && k.merge(i.common, i[t.method]);
		i && k.forEach(eh.concat("common"), (e) => {
			delete i[e];
		}), t.headers = _m.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || zm;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [dg.bind(this), void 0];
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
					k.isThenable(n) && (l = Promise.resolve(n).then(() => dg.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = dg.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = Dh(this.defaults, e), Nm(wh(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
k.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	_g.prototype[e] = function(t, n) {
		return this.request(Dh(n || {}, {
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
			return this.request(Dh(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	_g.prototype[e] = t(), e !== "query" && (_g.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var vg = class e {
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
			n.reason || (n.reason = new oh(e, r, i), t(n.reason));
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
function yg(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function bg(e) {
	return k.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var xg = {
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
Object.entries(xg).forEach(([e, t]) => {
	xg[t] === void 0 && (xg[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function Sg(e) {
	let t = new _g(e), n = kf(_g.prototype.request, t);
	return k.extend(n, _g.prototype, t, { allOwnKeys: !0 }), k.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return Sg(Dh(e, t));
	}, n;
}
var Cg = Sg(rh);
Cg.Axios = _g, Cg.CanceledError = oh, Cg.CancelToken = vg, Cg.isCancel = ah, Cg.VERSION = Jh, Cg.toFormData = Om, Cg.AxiosError = A, Cg.Cancel = Cg.CanceledError, Cg.all = function(e) {
	return Promise.all(e);
}, Cg.spread = yg, Cg.isAxiosError = bg, Cg.mergeConfig = Dh, Cg.AxiosHeaders = _m, Cg.formToJSON = (e) => $m(k.isHTMLForm(e) ? new FormData(e) : e), Cg.getAdapter = lg.getAdapter, Cg.HttpStatusCode = xg, Cg.default = Cg;
//#endregion
//#region node_modules/@audako/core/dist/mjs/api/errors.js
var wg = class extends Error {
	constructor(e) {
		super(e.message || e.detail || e.title || "Request failed"), this.name = "ApiError", this.status = e.status || 0, this.title = e.title || "", this.detail = e.detail || "", this.type = e.type || "", this.instance = e.instance || "", this.raw = e.raw;
	}
}, Tg = class extends wg {
	constructor(e) {
		super(e), this.name = "EntityLockedError";
	}
};
function Eg(e) {
	return e.status === 423 ? new Tg(e) : new wg(e);
}
function Dg(e) {
	let t = e?.response, n = t?.status || 0, r = t?.data;
	if (r && typeof r == "object") {
		if (typeof r.title == "string" || typeof r.detail == "string") return Eg({
			status: n,
			title: r.title,
			detail: r.detail,
			type: r.type,
			instance: r.instance,
			raw: r
		});
		if (r.error && typeof r.error == "object") return Eg({
			status: n,
			title: r.error.code,
			detail: r.error.message,
			raw: r
		});
	}
	return typeof r == "string" && r.length > 0 ? Eg({
		status: n,
		detail: r,
		raw: r
	}) : Eg({
		status: n,
		detail: e?.message,
		raw: r,
		message: e?.message
	});
}
var Og = class extends Error {
	constructor(e, t) {
		super(t || `Unsupported audako platform version: ${e}`), this.name = "UnsupportedApiVersionError", this.platformVersion = e;
	}
}, kg = class extends Error {
	constructor(e, t) {
		super(`Endpoint "${e}" does not exist on audako platform ${t}.`), this.name = "EndpointNotAvailableError", this.endpoint = e, this.apiVersion = t;
	}
}, Ag = class extends Error {
	constructor(e) {
		super(e.message), this.name = "IncompatibleBackendError", this.result = e;
	}
}, jg = class extends Error {
	constructor(e, t, n) {
		super(t || `Could not detect the audako platform version at ${e}`), this.name = "ApiVersionDetectionError", this.apiUrl = e, this.cause = n;
	}
}, Mg = "/api/v1/structure/about/version", Ng = "/api/structure/about/version";
function Pg(e) {
	return e.trim().startsWith("<");
}
function Fg(e) {
	if (typeof e != "string") return null;
	let t = e.trim();
	return t.length >= 2 && t.startsWith("\"") && t.endsWith("\"") && (t = t.slice(1, -1).trim()), !t || Pg(t) || t.toLowerCase() === "unknown" ? null : t;
}
async function Ig(e, t, n) {
	let r = await Cg.get(e, {
		headers: n,
		responseType: "text",
		transformResponse: [(e) => e],
		timeout: t,
		validateStatus: () => !0
	});
	return {
		status: r.status,
		version: r.status === 200 ? Fg(r.data) : null
	};
}
async function Lg(e, t = {}) {
	let n = t.platformVersion || t.httpConfig?.ApiVersion;
	if (n) return Of(n);
	let r = (e || "").replace(/\/+$/, ""), i = t.timeoutMs || 1e4, a = null;
	try {
		let { version: e } = await Ig(`${r}${Mg}`, i);
		if (e) return Of(e);
	} catch (e) {
		a = e;
	}
	try {
		let e = t.accessToken ? { Authorization: `Bearer ${await ho(t.accessToken)}` } : void 0, { version: n } = await Ig(`${r}${Ng}`, i, e);
		if (n) return Of(n);
	} catch (e) {
		a = e;
	}
	throw new jg(r, void 0, a);
}
async function Rg(e, t = {}) {
	let n = (e || "").replace(/\/+$/, ""), r = t.timeoutMs || 1e4;
	for (let e of [Mg, Ng]) try {
		let { status: t, version: i } = await Ig(`${n}${e}`, r);
		if (i || t === 401) return !0;
	} catch {}
	return !1;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/api/compatibility.js
var zg = {
	v4Min: "4.12",
	v4Max: "4.23",
	v5Min: "5.0",
	v5KnownMax: "5.1"
};
function Bg(e, t, n, r) {
	return {
		status: e,
		compatible: e === "ok" || e === "newerThanKnown",
		detected: t,
		required: r,
		message: n
	};
}
function Vg(e, t = {}) {
	let n = e.version;
	if (!n) return Bg("invalidVersion", e, `Could not parse the platform version "${e.platformVersion}".`);
	if (n.major >= 6) return Bg("unknownMajor", e, `Platform ${e.platformVersion} is newer than audako-core supports (unknown major ${n.major}).`);
	if (n.major >= 5) {
		let r = t.minVersion || zg.v5Min;
		if (!Tf(n, r)) return Bg("tooOld", e, `Platform ${e.platformVersion} is older than the required ${r}.`, r);
		let i = Sf(zg.v5KnownMax);
		return i && Cf(n, i) > 0 && n.minor > i.minor ? Bg("newerThanKnown", e, `Platform ${e.platformVersion} is newer than the ${zg.v5KnownMax} audako-core was built against. Continuing, because 5.x changes are additive.`, r) : Bg("ok", e, `Platform ${e.platformVersion} is supported.`, r);
	}
	if (n.major === 4) {
		if (!Tf(zg.v4Max, `${n.major}.${n.minor}`)) return Bg("invalidVersion", e, `Platform ${e.platformVersion} is above the final v4 release ${zg.v4Max} and cannot exist.`, zg.v4Max);
		if (t.supportsV4 === !1) return Bg("unsupportedMajor", e, `Platform ${e.platformVersion} is on the v4 line, which this application does not support.`, zg.v5Min);
		let r = t.minV4Version || zg.v4Min;
		return Tf(n, r) ? Bg("ok", e, `Platform ${e.platformVersion} is supported.`, r) : Bg("tooOld", e, `Platform ${e.platformVersion} is older than the required ${r}.`, r);
	}
	return Bg("tooOld", e, `Platform ${e.platformVersion} is far older than the oldest supported release ${zg.v4Min}.`, zg.v4Min);
}
function Hg(e, t = {}) {
	let n = Vg(e, t);
	if (!n.compatible) throw new Ag(n);
	return n;
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/deprecation-logger.js
var Ug = (e) => console.warn(e), Wg = new class {
	constructor(e = Ug) {
		this._loggedPaths = /* @__PURE__ */ new Set(), this._sink = e;
	}
	setSink(e) {
		this._sink = e || Ug;
	}
	log(e) {
		return !this._loggedPaths.has(e.path) && (this._loggedPaths.add(e.path), this._sink(`[audako-core] Deprecated platform endpoint: ${e.method} ${e.path}${e.successor ? ` (successor: ${e.successor})` : ""}`, e), !0);
	}
	getLoggedPaths() {
		return Array.from(this._loggedPaths);
	}
	reset() {
		this._loggedPaths.clear();
	}
}();
function Gg(e, t) {
	if (!e) return;
	if (typeof e.get == "function") {
		let n = e.get(t);
		if (n != null) return String(n);
	}
	let n = t.toLowerCase();
	for (let t of Object.keys(e)) if (t.toLowerCase() === n) {
		let n = e[t];
		return n == null ? void 0 : String(n);
	}
}
function Kg(e) {
	return (e || "").split("?")[0];
}
function qg(e = Wg) {
	return function(t) {
		let n = t, r = Gg(n?.headers, "deprecation");
		return r && r.toLowerCase() === "true" && e.log({
			path: Kg(n?.config?.url),
			method: (n?.config?.method || "GET").toUpperCase(),
			successor: Gg(n?.headers, "link")
		}), t;
	};
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/api/deprecation.js
function Jg(e) {
	Wg.setSink(e);
}
function Yg() {
	return Wg.getLoggedPaths();
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/endpoints/endpoints.js
var Xg = {
	[r.Group]: "/base/Group",
	[r.Signal]: "/daq/Signal",
	[r.Formula]: "/daq/Formula",
	[r.Dashboard]: "/base/Dashboard",
	[r.DashboardTab]: "/base/DashboardTab",
	[r.DataConnection]: "/daq/DataConnection",
	[r.DataSource]: "/daq/DataSource",
	[r.Connector]: "/daq/Connector",
	[r.EventCondition]: "/base/condition",
	[r.EventDefinition]: "/base/EventDefinition",
	[r.EventCategory]: "/base/EventCategory",
	[r.ProcessImage]: "/scada/ProcessImage",
	[r.BatchDefinition]: "/scada/batchdefinition",
	[r.ReportTemplate]: "/scada/ReportTemplate",
	[r.Report]: "/scada/Report",
	[r.Document]: "/base/Document",
	[r.Camera]: "/scada/Camera",
	[r.SwitchSchedule]: "/scada/SwitchSchedule",
	[r.User]: "/base/User",
	[r.Role]: "/base/Role",
	[r.Recipient]: "/alarming/Recipient",
	[r.RecipientGroup]: "/alarming/RecipientGroup",
	[r.AlarmingPlan]: "/alarming/AlarmingPlan",
	[r.MaintenanceService]: "/maintenance/MaintenanceService",
	[r.TaskDefinition]: "/maintenance/TaskDefinition",
	[r.RuntimeScript]: "/runtime/RuntimeScript"
}, Zg = {
	[r.Group]: "groups",
	[r.Signal]: "signals",
	[r.Formula]: "formulas",
	[r.Dashboard]: "dashboards",
	[r.DashboardTab]: "dashboard-tabs",
	[r.DataConnection]: "data-connections",
	[r.DataSource]: "data-sources",
	[r.Connector]: "connectors",
	[r.EventCondition]: "conditions",
	[r.EventDefinition]: "event-definitions",
	[r.EventCategory]: "event-categories",
	[r.ProcessImage]: "process-images",
	[r.BatchDefinition]: "batch-definitions",
	[r.ReportTemplate]: "report-templates",
	[r.Report]: "reports",
	[r.Document]: "documents",
	[r.Camera]: "cameras",
	[r.SwitchSchedule]: "switch-schedules",
	[r.User]: "users",
	[r.Role]: "roles",
	[r.Recipient]: "recipients",
	[r.RecipientGroup]: "recipient-groups",
	[r.AlarmingPlan]: "alarming-plans",
	[r.MaintenanceService]: "maintenance-services",
	[r.TaskDefinition]: "task-definitions",
	[r.RuntimeScript]: "runtime-scripts"
}, Qg = "QUERY";
function $g(e, t, n) {
	return n === "v4" ? `${e.structure}${Xg[t]}` : `${e.structure}/${Zg[t]}`;
}
function e_(e, t) {
	return t === "v4" ? `${e.historian}/value` : `${e.historian}/historical-values`;
}
function t_(e, t) {
	return t === "v4" ? `${e.historian}/historicalvaluemanipulation/operations` : `${e.historian}/historical-value-operations`;
}
function n_(e, t) {
	return {
		method: e,
		v4: (e, n) => t(e, n, "v4"),
		v5: (e, n) => t(e, n, "v5")
	};
}
var r_ = {
	version: n_("GET", (e) => `${e.structure}/about/version`),
	entityCollection: n_("POST", (e, t, n) => $g(e, t.entityType, n)),
	entityById: n_(void 0, (e, t, n) => `${$g(e, t.entityType, n)}/${t.id}`),
	entityQuery: {
		method: {
			v4: "POST",
			v5: Qg
		},
		v4: (e, t) => `${$g(e, t.entityType, "v4")}/query`,
		v5: (e, t) => $g(e, t.entityType, "v5")
	},
	entityCount: {
		method: "GET",
		v4: null,
		v5: (e, t) => `${$g(e, t.entityType, "v5")}/count`
	},
	entityInfo: {
		method: "GET",
		v4: null,
		v5: (e, t) => `${$g(e, t.entityType, "v5")}/entity-info`
	},
	entityCopy: n_("GET", (e, t, n) => `${$g(e, t.entityType, n)}/copy/${t.sourceId}/to/${t.targetId}`),
	entityCopyMultiple: n_("PUT", (e, t, n) => `${$g(e, t.entityType, n)}/copy/multiple/${t.targetId}`),
	entityMove: n_("GET", (e, t, n) => `${$g(e, t.entityType, n)}/move/${t.sourceId}/to/${t.targetId}`),
	entityMoveMultiple: n_("PUT", (e, t, n) => `${$g(e, t.entityType, n)}/move/multiple/${t.targetId}`),
	processImageUpload: {
		method: "POST",
		v4: (e, t) => `${$g(e, r.ProcessImage, "v4")}/${t.id}/file/image`,
		v5: (e, t) => `${$g(e, r.ProcessImage, "v5")}/${t.id}/image`
	},
	tenantViewById: {
		method: "GET",
		v4: (e, t) => `${e.structure}/tenant/${t.tenantId}/view`,
		v5: (e, t) => `${e.structure}/tenants/${t.tenantId}/view`
	},
	tenantViewForEntity: {
		method: "GET",
		v4: (e, t) => `${e.structure}/tenant/entity/${t.entityId}/view`,
		v5: (e, t) => `${e.structure}/tenants/entities/${t.entityId}/view`
	},
	tenantsTop: {
		method: "GET",
		v4: (e) => `${e.structure}/tenant/top`,
		v5: (e) => `${e.structure}/tenants/top`
	},
	tenantsNext: {
		method: "GET",
		v4: (e, t) => `${e.structure}/tenant/${t.tenantId}/next`,
		v5: (e, t) => `${e.structure}/tenants/${t.tenantId}/next`
	},
	tenantsFilter: {
		method: "GET",
		v4: (e, t) => `${e.structure}/tenant/filter/${t.filter}`,
		v5: (e, t) => `${e.structure}/tenants/filter/${t.filter}`
	},
	userProfile: {
		v4: (e) => `${e.structure}/userprofile`,
		v5: (e) => `${e.structure}/user-profile`
	},
	historicalValuesQueryManyFlat: {
		method: "POST",
		v4: (e) => `${e_(e, "v4")}/manyflat`,
		v5: (e) => `${e_(e, "v5")}/query-many-flat`
	},
	historicalValuesQueryMany: {
		method: "POST",
		v4: (e) => `${e_(e, "v4")}/many`,
		v5: (e) => `${e_(e, "v5")}/query-many`
	},
	historicalValuesNearest: n_("POST", (e, t, n) => `${e_(e, n)}/nearest`),
	historicalValuesNth: n_("POST", (e, t, n) => `${e_(e, n)}/nth`),
	historicalValuesManual: n_("POST", (e, t, n) => `${e_(e, n)}/manual`),
	historicalValuesNotes: {
		method: "POST",
		v4: (e) => `${e_(e, "v4")}/note`,
		v5: (e) => `${e_(e, "v5")}/notes`
	},
	counterOffsets: {
		method: "GET",
		v4: (e, t) => `${e_(e, "v4")}/counter/${t.signalId}/offsets`,
		v5: (e, t) => `${e_(e, "v5")}/counters/${t.signalId}/offsets`
	},
	counterOffsetsCustom: {
		method: "POST",
		v4: (e, t) => `${e_(e, "v4")}/counter/${t.signalId}/offsets/custom`,
		v5: (e, t) => `${e_(e, "v5")}/counters/${t.signalId}/offsets/custom`
	},
	counterOffsetsRemove: {
		method: "POST",
		v4: (e, t) => `${e_(e, "v4")}/counter/${t.signalId}/offsets/remove`,
		v5: (e, t) => `${e_(e, "v5")}/counters/${t.signalId}/offsets/remove`
	},
	counterOffsetsCustomRemove: {
		method: "POST",
		v4: (e, t) => `${e_(e, "v4")}/counter/${t.signalId}/offsets/custom/remove`,
		v5: (e, t) => `${e_(e, "v5")}/counters/${t.signalId}/offsets/custom/remove`
	},
	statisticsReset: n_("POST", (e, t, n) => `${e_(e, n)}/statistics/${t.signalId}/reset`),
	historicalValueImport: {
		method: "POST",
		v4: (e) => `${e.historian}/historicalvalueimport/import`,
		v5: (e) => `${e.historian}/historical-value-imports`
	},
	historicalValueOperations: n_("GET", (e, t, n) => `${t_(e, n)}/${t.signalId}`),
	historicalValueOperationStart: n_("POST", (e, t, n) => `${t_(e, n)}/${t.signalId}/start`),
	historicalValueOperationUndo: {
		method: {
			v4: "PUT",
			v5: "POST"
		},
		v4: (e, t) => `${t_(e, "v4")}/${t.operationId}/undo`,
		v5: (e, t) => `${t_(e, "v5")}/${t.operationId}/undo`
	},
	historicalValueOperationRedo: {
		method: {
			v4: "PUT",
			v5: "POST"
		},
		v4: (e, t) => `${t_(e, "v4")}/${t.operationId}/redo`,
		v5: (e, t) => `${t_(e, "v5")}/${t.operationId}/redo`
	},
	driverConfigureDataSource: n_("GET", (e, t) => `${e.driver}/command/source/${t.dataSourceId}/configure`),
	driverBrowseConnection: n_("POST", (e, t) => `${e.driver}/command/conn/${t.dataConnectionId}/browse`),
	liveHub: {
		v4: (e) => `${e.live}/hub`,
		v5: (e) => `${e.live}/values`
	}
};
//#endregion
//#region node_modules/@audako/core/dist/mjs/compat/endpoints/endpoint-resolver.js
function i_(e) {
	let t = e?.Services, n = t?.BaseUri || "";
	return {
		base: n,
		structure: `${n}${t?.Structure || ""}`,
		historian: `${n}${t?.Historian || ""}`,
		driver: `${n}${t?.Driver || ""}`,
		live: `${n}${t?.Live || ""}`
	};
}
function a_(e, t, n) {
	let r = r_[n.name], i = t === "V5" ? "v5" : "v4", a = r[i];
	if (!a) throw new kg(n.name, t);
	let o = typeof r.method == "object" ? r.method[i] : r.method;
	return {
		url: a(i_(e), n),
		method: o
	};
}
//#endregion
//#region node_modules/@audako/core/dist/mjs/api/api-context.js
function o_(e) {
	return Cg.get(`${e}/assets/conf/application.config`).then((e) => e.data);
}
var s_ = class e {
	constructor(e, t, n) {
		this._httpConfig = e, this._accessToken = t, this._versionInfo = n;
	}
	static from(t) {
		return new e(t.httpConfig, t.accessToken, t.versionInfo);
	}
	static async connect(t, n, r) {
		let i = await o_(t), a = await Lg(e.getApiRootUrl(i, t), {
			httpConfig: i,
			accessToken: n
		});
		return Hg(a, r), new e(i, n, a);
	}
	static getApiRootUrl(e, t = "") {
		let n = e?.Services?.BaseUri;
		return n ? n.replace(/\/+$/, "").replace(/\/api$/i, "") : t.replace(/\/+$/, "");
	}
	getHttpConfig() {
		return ho(this._httpConfig);
	}
	getAccessToken() {
		return ho(this._accessToken);
	}
	async getAuthorizationHeader() {
		return { Authorization: `Bearer ${await this.getAccessToken()}` };
	}
	getVersionInfo() {
		return this._versionInfo ? ho(this._versionInfo) : (this._versionInfoPromise ||= this.getHttpConfig().then((t) => Lg(e.getApiRootUrl(t), {
			httpConfig: t,
			accessToken: () => this.getAccessToken()
		})).catch((e) => {
			throw this._versionInfoPromise = void 0, e;
		}), this._versionInfoPromise);
	}
	async resolve(e) {
		let [t, n] = await Promise.all([this.getHttpConfig(), this.getVersionInfo()]);
		return a_(t, n.apiVersion, e);
	}
	async request(e, t = {}) {
		let n = await this.resolve(e), r = t.method || n.method;
		if (!r) throw Error(`Endpoint "${e.name}" needs an explicit HTTP method.`);
		try {
			return await this.http.request({
				method: r,
				url: n.url,
				data: t.data,
				params: t.params,
				headers: t.headers
			});
		} catch (e) {
			throw Dg(e);
		}
	}
	get http() {
		if (!this._http) {
			let e = Cg.create();
			e.interceptors.request.use(async (e) => {
				let t = await this.getAccessToken();
				return t && e.headers.set("Authorization", `Bearer ${t}`), e;
			}), e.interceptors.response.use(qg()), this._http = e;
		}
		return this._http;
	}
}, c_;
(function(e) {
	e[e.Transient = 0] = "Transient", e[e.Singleton = 1] = "Singleton", e[e.ResolutionScoped = 2] = "ResolutionScoped", e[e.ContainerScoped = 3] = "ContainerScoped";
})(c_ ||= {});
var l_ = c_, u_ = function(e, t) {
	return u_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	}, u_(e, t);
};
function d_(e, t) {
	u_(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function f_(e, t, n, r) {
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
function p_(e, t) {
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
function m_(e) {
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
function h_(e, t) {
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
function g_() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h_(arguments[t]));
	return e;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/class-provider.js
function __(e) {
	return !!e.useClass;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function v_(e) {
	return !!e.useFactory;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/lazy-helpers.js
var y_ = function() {
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
				return t[0] = e(), Reflect[n].apply(void 0, g_(t));
			};
		}), t;
	}, e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/injection-token.js
function b_(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function x_(e) {
	return typeof e == "object" && "token" in e && "multiple" in e;
}
function S_(e) {
	return typeof e == "object" && "token" in e && "transform" in e;
}
function C_(e) {
	return typeof e == "function" || e instanceof y_;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/token-provider.js
function w_(e) {
	return !!e.useToken;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/value-provider.js
function T_(e) {
	return e.useValue != null;
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/providers/provider.js
function E_(e) {
	return __(e) || T_(e) || w_(e) || v_(e);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/registry-base.js
var D_ = function() {
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
}(), O_ = function(e) {
	d_(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(D_), k_ = function() {
	function e() {
		this.scopedResolutions = /* @__PURE__ */ new Map();
	}
	return e;
}();
//#endregion
//#region node_modules/tsyringe/dist/esm5/error-helpers.js
function A_(e, t) {
	return e === null ? "at position #" + t : "\"" + e.split(",")[t].trim() + "\" at position #" + t;
}
function j_(e, t, n) {
	return n === void 0 && (n = "    "), g_([e], t.message.split("\n").map(function(e) {
		return n + e;
	})).join("\n");
}
function M_(e, t, n) {
	var r = h_(e.toString().match(/constructor\(([\w, ]+)\)/) || [], 2)[1];
	return j_("Cannot inject the dependency " + A_(r === void 0 ? null : r, t) + " of \"" + e.name + "\" constructor. Reason:", n);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/types/disposable.js
function N_(e) {
	return !(typeof e.dispose != "function" || e.dispose.length > 0);
}
//#endregion
//#region node_modules/tsyringe/dist/esm5/interceptors.js
var P_ = function(e) {
	d_(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(D_), F_ = function(e) {
	d_(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(D_), I_ = function() {
	function e() {
		this.preResolution = new P_(), this.postResolution = new F_();
	}
	return e;
}(), L_ = /* @__PURE__ */ new Map(), R_ = new (function() {
	function e(e) {
		this.parent = e, this._registry = new O_(), this.interceptors = new I_(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
	}
	return e.prototype.register = function(e, t, n) {
		n === void 0 && (n = { lifecycle: l_.Transient }), this.ensureNotDisposed();
		var r = E_(t) ? t : { useClass: t };
		if (w_(r)) for (var i = [e], a = r; a != null;) {
			var o = a.useToken;
			if (i.includes(o)) throw Error("Token registration cycle detected! " + g_(i, [o]).join(" -> "));
			i.push(o);
			var s = this._registry.get(o);
			a = s && w_(s.provider) ? s.provider : null;
		}
		if ((n.lifecycle === l_.Singleton || n.lifecycle == l_.ContainerScoped || n.lifecycle == l_.ResolutionScoped) && (T_(r) || v_(r))) throw Error("Cannot use lifecycle \"" + l_[n.lifecycle] + "\" with ValueProviders or FactoryProviders");
		return this._registry.set(e, {
			provider: r,
			options: n
		}), this;
	}, e.prototype.registerType = function(e, t) {
		return this.ensureNotDisposed(), b_(t) ? this.register(e, { useToken: t }) : this.register(e, { useClass: t });
	}, e.prototype.registerInstance = function(e, t) {
		return this.ensureNotDisposed(), this.register(e, { useValue: t });
	}, e.prototype.registerSingleton = function(e, t) {
		if (this.ensureNotDisposed(), b_(e)) {
			if (b_(t)) return this.register(e, { useToken: t }, { lifecycle: l_.Singleton });
			if (t) return this.register(e, { useClass: t }, { lifecycle: l_.Singleton });
			throw Error("Cannot register a type name as a singleton without a \"to\" token");
		}
		var n = e;
		return t && !b_(t) && (n = t), this.register(e, { useClass: n }, { lifecycle: l_.Singleton });
	}, e.prototype.resolve = function(e, t, n) {
		t === void 0 && (t = new k_()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var r = this.getRegistration(e);
		if (!r && b_(e)) {
			if (n) return;
			throw Error("Attempted to resolve unregistered dependency token: \"" + e.toString() + "\"");
		}
		if (this.executePreResolutionInterceptor(e, "Single"), r) {
			var i = this.resolveRegistration(r, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		if (C_(e)) {
			var i = this.construct(e, t);
			return this.executePostResolutionInterceptor(e, i, "Single"), i;
		}
		throw Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
	}, e.prototype.executePreResolutionInterceptor = function(e, t) {
		var n, r;
		if (this.interceptors.preResolution.has(e)) {
			var i = [];
			try {
				for (var a = m_(this.interceptors.preResolution.getAll(e)), o = a.next(); !o.done; o = a.next()) {
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
				for (var o = m_(this.interceptors.postResolution.getAll(e)), s = o.next(); !s.done; s = o.next()) {
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
		if (this.ensureNotDisposed(), e.options.lifecycle === l_.ResolutionScoped && t.scopedResolutions.has(e)) return t.scopedResolutions.get(e);
		var n = e.options.lifecycle === l_.Singleton, r = e.options.lifecycle === l_.ContainerScoped, i = n || r, a = T_(e.provider) ? e.provider.useValue : w_(e.provider) ? i ? e.instance ||= this.resolve(e.provider.useToken, t) : this.resolve(e.provider.useToken, t) : __(e.provider) ? i ? e.instance ||= this.construct(e.provider.useClass, t) : this.construct(e.provider.useClass, t) : v_(e.provider) ? e.provider.useFactory(this) : this.construct(e.provider, t);
		return e.options.lifecycle === l_.ResolutionScoped && t.scopedResolutions.set(e, a), a;
	}, e.prototype.resolveAll = function(e, t, n) {
		var r = this;
		t === void 0 && (t = new k_()), n === void 0 && (n = !1), this.ensureNotDisposed();
		var i = this.getAllRegistrations(e);
		if (!i && b_(e)) {
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
			for (var n = m_(this._registry.entries()), r = n.next(); !r.done; r = n.next()) {
				var i = h_(r.value, 2), a = i[0], o = i[1];
				this._registry.setAll(a, o.filter(function(e) {
					return !T_(e.provider);
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
			for (var i = m_(this._registry.entries()), a = i.next(); !a.done; a = i.next()) {
				var o = h_(a.value, 2), s = o[0], c = o[1];
				c.some(function(e) {
					return e.options.lifecycle === l_.ContainerScoped;
				}) && r._registry.setAll(s, c.map(function(e) {
					return e.options.lifecycle === l_.ContainerScoped ? {
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
		return f_(this, void 0, void 0, function() {
			var e;
			return p_(this, function(t) {
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
		if (e instanceof y_) return e.createProxy(function(e) {
			return n.resolve(e, t);
		});
		var r = (function() {
			var r = L_.get(e);
			if (!r || r.length === 0) {
				if (e.length === 0) return new e();
				throw Error("TypeInfo not known for \"" + e.name + "\"");
			}
			var i = r.map(n.resolveParams(t, e));
			return new (e.bind.apply(e, g_([void 0], i)))();
		})();
		return N_(r) && this.disposables.add(r), r;
	}, e.prototype.resolveParams = function(e, t) {
		var n = this;
		return function(r, i) {
			var a, o, s;
			try {
				return x_(r) ? S_(r) ? r.multiple ? (a = n.resolve(r.transform)).transform.apply(a, g_([n.resolveAll(r.token, new k_(), r.isOptional)], r.transformArgs)) : (o = n.resolve(r.transform)).transform.apply(o, g_([n.resolve(r.token, e, r.isOptional)], r.transformArgs)) : r.multiple ? n.resolveAll(r.token, new k_(), r.isOptional) : n.resolve(r.token, e, r.isOptional) : S_(r) ? (s = n.resolve(r.transform, e)).transform.apply(s, g_([n.resolve(r.token, e)], r.transformArgs)) : n.resolve(r, e);
			} catch (e) {
				throw Error(M_(t, i, e));
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
var z_ = Array.isArray, B_ = Array.prototype.indexOf, V_ = Array.prototype.includes, H_ = Array.from, U_ = Object.keys, W_ = Object.defineProperty, G_ = Object.getOwnPropertyDescriptor, K_ = Object.getOwnPropertyDescriptors, q_ = Object.prototype, J_ = Array.prototype, Y_ = Object.getPrototypeOf, X_ = Object.isExtensible, Z_ = () => {};
function Q_(e) {
	return typeof e?.then == "function";
}
function $_(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ev() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var tv = 1024, nv = 2048, rv = 4096, iv = 8192, av = 16384, ov = 32768, sv = 1 << 25, cv = 65536, lv = 1 << 19, uv = 1 << 20, dv = 1 << 25, fv = 65536, pv = 1 << 21, mv = 1 << 22, hv = 1 << 23, gv = Symbol("$state"), _v = Symbol("component"), vv = Symbol("legacy props"), yv = Symbol(""), bv = Symbol("attributes"), xv = Symbol("class"), Sv = Symbol("style"), Cv = Symbol("text"), wv = Symbol("form reset"), Tv = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ev = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), Dv = {}, Ov = Symbol("uninitialized"), kv = "http://www.w3.org/1999/xhtml";
function Av() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function jv(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Mv() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var j = !1;
function Nv(e) {
	j = e;
}
var M;
function Pv(e) {
	if (e === null) throw jv(), Dv;
	return M = e;
}
function Fv() {
	return Pv(/* @__PURE__ */ yb(M));
}
function N(e) {
	if (j) {
		if (/* @__PURE__ */ yb(M) !== null) throw jv(), Dv;
		M = e;
	}
}
function Iv(e = 1) {
	if (j) {
		for (var t = e, n = M; t--;) n = /* @__PURE__ */ yb(n);
		M = n;
	}
}
function Lv(e = !0) {
	for (var t = 0, n = M;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ yb(n);
		e && n.remove(), n = i;
	}
}
function Rv(e) {
	if (!e || e.nodeType !== 8) throw jv(), Dv;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function zv(e) {
	return e === this.v;
}
function Bv(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Vv(e) {
	return !Bv(e, this.v);
}
function Hv(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Uv() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Wv(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Gv(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Kv() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qv(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Jv() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yv() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Xv(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Zv() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qv() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function $v() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ey() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/shared/context.js
function ty(e) {
	let t = e.p;
	for (; t !== null && t.c === null;) t = t.p;
	return t?.c ?? null;
}
function ny(e, t) {
	return e === null && Hv(t), e.c ??= new Map(ty(e) || void 0);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var ry = null;
function iy(e) {
	ry = e;
}
function ay(e) {
	return ny(ry, "getContext").get(e);
}
function oy(e, t) {
	return ny(ry, "setContext").set(e, t), t;
}
function P(e, t = !1, n) {
	ry = {
		p: ry,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function F(e) {
	var t = ry, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Nb(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, ry = t.p, sy(e);
}
function sy(e = {}) {
	return W_(e, _v, { value: !0 }), e;
}
function cy() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var ly = [];
function uy() {
	var e = ly;
	ly = [], $_(e);
}
function dy(e) {
	if (ly.length === 0 && !Uy) {
		var t = ly;
		queueMicrotask(() => {
			t === ly && uy();
		});
	}
	ly.push(e);
}
function fy() {
	for (; ly.length > 0;) uy();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var py = ~(nv | rv | tv);
function my(e, t) {
	e.f = e.f & py | t;
}
function hy(e) {
	e.f & 512 || e.deps === null ? my(e, tv) : my(e, rv);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function gy(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= fv, gy(t.deps));
}
function _y(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), gy(e.deps), my(e, tv);
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var vy = [];
function yy(e, t = Z_) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Bv(e, t) && (e = t, n)) {
			let t = !vy.length;
			for (let t of r) t[1](), vy.push(t, e);
			if (t) {
				for (let e = 0; e < vy.length; e += 2) vy[e][0](vy[e + 1]);
				vy.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = Z_) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || Z_), o(e), () => {
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
var by = !1;
function xy(e) {
	var t = by;
	try {
		return by = !1, [e(), by];
	} finally {
		by = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var Sy = !1;
function Cy() {
	Sy || (Sy = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[wv]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function wy(e) {
	var t = G, n = K;
	rx(null), ix(null);
	try {
		return e();
	} finally {
		rx(t), ix(n);
	}
}
function Ty(e, t, n, r = n) {
	e.addEventListener(t, () => wy(n));
	let i = e[wv];
	e[wv] = i ? () => {
		i(), r(!0);
	} : () => r(!0), Cy();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Ey(e, t, n, r) {
	let i = cy() ? Ay : Ny;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = Dy(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Eb(e, s);
			}
			Oy();
		}
	}
	var d = ky();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ My(e))).then(u).catch((e) => Eb(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Oy();
	}) : f();
}
function Dy() {
	var e = K, t = G, n = ry, r = L;
	return function(i = !0) {
		ix(e), rx(t), iy(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Oy(e = !0) {
	ix(null), rx(null), iy(null), e && L?.deactivate();
}
function ky() {
	var e = K, t = e.b, n = L, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ay(e) {
	var t = 2 | nv;
	return K !== null && (K.f |= lv), {
		ctx: ry,
		deps: null,
		effects: null,
		equals: zv,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Ov,
		wv: 0,
		parent: K,
		ac: null
	};
}
var jy = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function My(e, t, n) {
	let r = K;
	r === null && Uv();
	var i = void 0, a = ab(Ov), o = !G, s = /* @__PURE__ */ new Set();
	return Lb(() => {
		var t = K, n = ev();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== Tv && n.reject(e);
			}).finally(Oy);
		} catch (e) {
			n.reject(e), Oy();
		}
		var c = L;
		if (o) {
			if (t.f & 32768) var l = ky();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(jy);
			else for (let e of s.values()) e.reject(jy);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== jy && (c.activate(), t ? (a.f |= hv, sb(a, t)) : (a.f & 8388608 && (a.f ^= hv), sb(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), jb(() => {
		for (let e of s) e.reject(jy);
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
function I(e) {
	let t = /* @__PURE__ */ Ay(e);
	return ox(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function Ny(e) {
	let t = /* @__PURE__ */ Ay(e);
	return t.equals = Vv, t;
}
function Py(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Wb(t[n]);
	}
}
function Fy(e) {
	var t, n = K, r = e.parent;
	if (!ex && r !== null && e.v !== Ov && r.f & 24576) return Av(), e.v;
	ix(r);
	try {
		e.f &= ~fv, Py(e), t = vx(e);
	} finally {
		ix(n);
	}
	return t;
}
function Iy(e) {
	var t = Fy(e);
	if (!e.equals(t) && (e.wv = hx(), (!L?.is_fork || e.deps === null) && (L === null ? e.v = t : (L.capture(e, t, !0), By?.capture(e, t, !0)), e.deps === null))) {
		my(e, tv);
		return;
	}
	ex || (Vy === null ? hy(e) : (Ab() || L?.is_fork) && Vy.set(e, t));
}
function Ly(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && wy(() => {
		t.ac.abort(Tv), t.ac = null;
	}), t.fn !== null && (t.teardown = Z_), xx(t, 0), Hb(t));
}
function Ry(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Sx(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var zy = null, L = null, By = null, Vy = null, Hy = null, Uy = !1, Wy = !1, Gy = null, Ky = null, qy = 0, Jy = 1, Yy = class e {
	id = Jy++;
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
		zy === null ? zy = this : (zy.#n = this, this.#t = zy), zy = this;
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
			for (var r of n.d) my(r, nv), t(r);
			for (r of n.m) my(r, rv), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, qy++ > 1e3 && (this.#x(), Xy());
		for (let e of this.#u) this.#d.delete(e), my(e, nv), this.schedule(e);
		for (let e of this.#d) my(e, rv), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Gy = [], r = [], i = Ky = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw tb(e), this.#h() || this.discard(), t;
		}
		if (L = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Gy = null, Ky = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) eb(e, t);
			i.length > 0 && L.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), By = this, Qy(r), Qy(n), By = null, this.#s?.resolve();
		var s = L;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && (rb.clear(), s.#g());
	}
	#_(e, t, n) {
		e.f ^= tv;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= tv : i & 4 ? t.push(r) : gx(r) && (i & 16 && this.#d.add(r), Sx(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), my(i, nv), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), L = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) _y(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== Ov && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Vy?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		L = this;
	}
	deactivate() {
		L = null, Vy = null;
	}
	flush() {
		try {
			Wy = !0, L = this, this.#g();
		} finally {
			qy = 0, Hy = null, Gy = null, Ky = null, Wy = !1, L = null, Vy = null, rb.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(jy);
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
		this.#m || (this.#m = !0, dy(() => {
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
		return (this.#s ??= ev()).promise;
	}
	static ensure() {
		if (L === null) {
			let t = L = new e();
			!Wy && !Uy && dy(() => {
				t.#e || t.flush();
			});
		}
		return L;
	}
	apply() {
		Vy = null;
	}
	schedule(e) {
		if (Hy = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Gy !== null && t === K && (G === null || !(G.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= tv;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? zy = e : t.#t = e, this.linked = !1;
		}
	}
};
function R(e) {
	var t = Uy;
	Uy = !0;
	try {
		var n;
		for (e && (L !== null && !L.is_fork && L.flush(), n = e());;) {
			if (fy(), L === null) return n;
			L.flush();
		}
	} finally {
		Uy = t;
	}
}
function Xy() {
	try {
		Jv();
	} catch (e) {
		Eb(e, Hy);
	}
}
var Zy = null;
function Qy(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && gx(r) && (Zy = /* @__PURE__ */ new Set(), Sx(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Kb(r), Zy?.size > 0)) {
				rb.clear();
				for (let e of Zy) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Zy.has(n) && (Zy.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Sx(n);
					}
				}
				Zy.clear();
			}
		}
		Zy = null;
	}
}
function $y(e) {
	L.schedule(e);
}
function eb(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), my(e, tv);
		for (var n = e.first; n !== null;) eb(n, t), n = n.next;
	}
}
function tb(e) {
	my(e, tv);
	for (var t = e.first; t !== null;) tb(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var nb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Map(), ib = !1;
function ab(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: zv,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function z(e, t) {
	let n = ab(e, t);
	return ox(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function ob(e, t = !1, n = !0) {
	let r = ab(e);
	return t || (r.equals = Vv), r;
}
function B(e, t, n = !1) {
	return G !== null && (!nx || G.f & 131072) && cy() && G.f & 4325394 && (ax === null || !ax.has(e)) && $v(), sb(e, n ? db(t) : t, Ky);
}
function sb(e, t, n = null) {
	if (!e.equals(t)) {
		ex ? rb.set(e, t) : rb.has(e) || rb.set(e, e.v);
		var r = Yy.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Fy(t), Vy === null && hy(t);
		}
		e.wv = hx(), ub(e, nv, n), cy() && K !== null && K.f & 1024 && !(K.f & 96) && (lx === null ? ux([e]) : lx.push(e)), !r.is_fork && nb.size > 0 && !ib && cb();
	}
	return t;
}
function cb() {
	ib = !1;
	for (let e of nb) {
		e.f & 1024 && my(e, rv);
		let t;
		try {
			t = gx(e);
		} catch {
			t = !0;
		}
		t && Sx(e);
	}
	nb.clear();
}
function lb(e) {
	B(e, e.v + 1);
}
function ub(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = cy(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & nv) === 0;
			if (l && my(s, t), c & 131072) nb.add(s);
			else if (c & 2) {
				var u = s;
				Vy?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= fv), ub(u, rv, n));
			} else if (l) {
				var d = s;
				c & 16 && Zy !== null && Zy.add(d), n === null ? $y(d) : n.push(d);
			}
		}
	}
}
function db(e) {
	if (typeof e != "object" || !e || gv in e || _v in e) return e;
	let t = Y_(e);
	if (t !== q_ && t !== J_) return e;
	var n = /* @__PURE__ */ new Map(), r = z_(e), i = /* @__PURE__ */ z(0), a = null, o = px, s = (e) => {
		if (px === o) return e();
		var t = G, n = px;
		rx(null), mx(o);
		var r = e();
		return rx(t), mx(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ z(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Zv();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ z(r.value, a);
				return n.set(t, e), e;
			}) : B(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ z(Ov, a));
					n.set(t, e), lb(i);
				}
			} else B(r, Ov), lb(i);
			return !0;
		},
		get(t, r, i) {
			if (r === gv) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || G_(t, r)?.writable) && (o = s(() => /* @__PURE__ */ z(db(c ? t[r] : Ov), a)), n.set(r, o)), o !== void 0) {
				var l = q(o);
				return l === Ov ? void 0 : l;
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
				if (a !== void 0 && o !== Ov) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === gv) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== Ov || Reflect.has(e, t);
			return (r !== void 0 || K !== null && (!i || G_(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ z(i ? db(e[t]) : Ov, a)), n.set(t, r)), q(r) === Ov) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ z(Ov, a)), n.set(d + "", f)) : B(f, Ov);
			}
			if (l === void 0) (!u || G_(e, t)?.writable) && (l = s(() => /* @__PURE__ */ z(void 0, a)), B(l, db(o)), n.set(t, l));
			else {
				u = l.v !== Ov;
				var p = s(() => db(o));
				B(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && B(h, g + 1);
				}
				lb(i);
			}
			return !0;
		},
		ownKeys(e) {
			q(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== Ov;
			});
			for (var [r, a] of n) a.v !== Ov && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Qv();
		}
	});
}
var fb, pb, mb, hb;
function gb() {
	if (fb === void 0) {
		fb = window, pb = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		mb = G_(t, "firstChild").get, hb = G_(t, "nextSibling").get, X_(e) && (e[xv] = void 0, e[bv] = null, e[Sv] = void 0, e.__e = void 0), X_(n) && (n[Cv] = void 0);
	}
}
function _b(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function vb(e) {
	return mb.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function yb(e) {
	return hb.call(e);
}
function V(e, t) {
	if (!j) return /* @__PURE__ */ vb(e);
	var n = /* @__PURE__ */ vb(M);
	if (n === null) n = M.appendChild(_b());
	else if (t && n.nodeType !== 3) {
		var r = _b();
		return n?.before(r), Pv(r), r;
	}
	return t && wb(n), Pv(n), n;
}
function bb(e, t = !1) {
	if (!j) {
		var n = /* @__PURE__ */ vb(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ yb(n) : n;
	}
	if (t) {
		if (M?.nodeType !== 3) {
			var r = _b();
			return M?.before(r), Pv(r), r;
		}
		wb(M);
	}
	return M;
}
function H(e, t = !1) {
	if (!j) return /* @__PURE__ */ vb(e);
	var n = V(e, t);
	return N(e), n;
}
function U(e, t = 1, n = !1) {
	let r = j ? M : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ yb(r);
	if (!j) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = _b();
			return r === null ? i?.after(a) : r.before(a), Pv(a), a;
		}
		wb(r);
	}
	return Pv(r), r;
}
function xb(e) {
	e.textContent = "";
}
function Sb() {
	return !1;
}
function Cb(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function wb(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function Tb(e) {
	var t = K;
	if (t === null) return G.f |= hv, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Eb(e, t);
}
function Eb(e, t) {
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
function Db(e) {
	K === null && (G === null && qv(e), Kv()), ex && Gv(e);
}
function Ob(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function kb(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= iv);
	var r = {
		ctx: ry,
		deps: null,
		nodes: null,
		f: e | nv | 512,
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
	L?.register_created_effect(r);
	var i = r;
	if (e & 4) Gy === null ? Yy.ensure().schedule(r) : Gy.push(r);
	else if (t !== null) {
		try {
			Sx(r);
		} catch (e) {
			throw Wb(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= cv));
	}
	if (i !== null && (i.parent = n, n !== null && Ob(i, n), G !== null && G.f & 2 && !(e & 64))) {
		var a = G;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Ab() {
	return G !== null && !nx;
}
function jb(e) {
	let t = kb(8, null);
	return my(t, tv), t.teardown = e, t;
}
function Mb(e) {
	Db("$effect");
	var t = K.f;
	if (!G && t & 32 && ry !== null && !ry.i) {
		var n = ry;
		(n.e ??= []).push(e);
	} else return Nb(e);
}
function Nb(e) {
	return kb(4 | uv, e);
}
function Pb(e) {
	Yy.ensure();
	let t = kb(64 | lv, e);
	return () => {
		Wb(t);
	};
}
function Fb(e) {
	Yy.ensure();
	let t = kb(64 | lv, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? qb(t, () => {
			Wb(t), n(void 0);
		}) : (Wb(t), n(void 0));
	});
}
function Ib(e) {
	return kb(4, e);
}
function Lb(e) {
	return kb(mv | lv, e);
}
function Rb(e, t = 0) {
	return kb(8 | t, e);
}
function W(e, t = [], n = [], r = []) {
	Ey(r, t, n, (t) => {
		kb(8, () => {
			e(...t.map(q));
		});
	});
}
function zb(e, t = 0) {
	return kb(16 | t, e);
}
function Bb(e) {
	return kb(32 | lv, e);
}
function Vb(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = ex, r = G;
		tx(!0), rx(null);
		try {
			t.call(null);
		} catch (t) {
			Eb(t, e.parent);
		} finally {
			tx(n), rx(r);
		}
	}
}
function Hb(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && wy(() => {
			e.abort(Tv);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Wb(n, t), n = r;
	}
}
function Ub(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Wb(t), t = n;
	}
}
function Wb(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Gb(e.nodes.start, e.nodes.end), n = !0), e.f |= sv, Hb(e, t && !n), xx(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Vb(e), e.f ^= sv, e.f |= av;
	var i = e.parent;
	i !== null && i.first !== null && Kb(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Gb(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ yb(e);
		e.remove(), e = n;
	}
}
function Kb(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function qb(e, t, n = !0) {
	var r = [];
	e.f |= 256, Jb(e, r, !0);
	var i = () => {
		n && Wb(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Jb(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= iv;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Jb(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Yb(e) {
	e.f &= -257, Xb(e, !0);
}
function Xb(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= iv, e.f & 1024 || (my(e, nv), Yy.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Xb(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Zb(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ yb(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Qb = null, $b = !1, ex = !1;
function tx(e) {
	ex = e;
}
var G = null, nx = !1;
function rx(e) {
	G = e;
}
var K = null;
function ix(e) {
	K = e;
}
var ax = null;
function ox(e) {
	G !== null && (ax ??= /* @__PURE__ */ new Set()).add(e);
}
var sx = null, cx = 0, lx = null;
function ux(e) {
	lx = e;
}
var dx = 1, fx = 0, px = fx;
function mx(e) {
	px = e;
}
function hx() {
	return ++dx;
}
function gx(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~fv), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (gx(a) && Iy(a), a.wv > e.wv) return !0;
		}
		t & 512 && Vy === null && my(e, tv);
	}
	return !1;
}
function _x(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(ax !== null && ax.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? _x(a, t, !1) : t === a && (n ? my(a, nv) : a.f & 1024 && my(a, rv), $y(a));
	}
}
function vx(e) {
	var t = sx, n = cx, r = lx, i = G, a = ax, o = ry, s = nx, c = px, l = e.f;
	sx = null, cx = 0, lx = null, G = l & 96 ? null : e, ax = null, iy(e.ctx), nx = !1, px = ++fx, e.ac !== null && (wy(() => {
		e.ac.abort(Tv);
	}), e.ac = null);
	try {
		e.f |= pv;
		var u = e.fn, d = u();
		e.f |= ov;
		var f = yx(e);
		if (cy() && lx !== null && !nx && f !== null && !(e.f & 6146)) for (var p = 0; p < lx.length; p++) _x(lx[p], e);
		if (i !== null && i !== e) {
			if (fx++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = fx;
			if (t !== null) for (let e of t) e.rv = fx;
			lx !== null && (r === null ? r = lx : r.push(...lx));
		}
		return e.f & 8388608 && (e.f ^= hv), d;
	} catch (t) {
		return yx(e), Tb(t);
	} finally {
		e.f ^= pv, sx = t, cx = n, lx = r, G = i, ax = a, iy(o), nx = s, px = c;
	}
}
function yx(e) {
	var t = e.deps, n = L?.is_fork;
	if (sx !== null) {
		var r;
		if (n || xx(e, cx), t !== null && cx > 0) for (t.length = cx + sx.length, r = 0; r < sx.length; r++) t[cx + r] = sx[r];
		else e.deps = t = sx;
		if (Ab() && e.f & 512) for (r = cx; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && cx < t.length && (xx(e, cx), t.length = cx);
	return t;
}
function bx(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = B_.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (sx === null || !V_.call(sx, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~fv), a.v !== Ov && hy(a), a.ac !== null && wy(() => {
			a.ac.abort(Tv), a.ac = null, my(a, nv);
		}), Ly(a), xx(a, 0);
	}
}
function xx(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) bx(e, n[r]);
}
function Sx(e) {
	var t = e.f;
	if (!(t & 16384)) {
		my(e, tv);
		var n = K, r = $b;
		K = e, $b = !(t & 96);
		try {
			t & 16777232 ? Ub(e) : Hb(e), Vb(e);
			var i = vx(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = dx;
		} finally {
			$b = r, K = n;
		}
	}
}
async function Cx() {
	await Promise.resolve(), R();
}
function q(e) {
	var t = !!(e.f & 2);
	if (Qb?.add(e), G !== null && !nx && !(K !== null && K.f & 16384) && (ax === null || !ax.has(e))) {
		var n = G.deps;
		if (G.f & 2097152) e.rv < fx && (e.rv = fx, sx === null && n !== null && n[cx] === e ? cx++ : sx === null ? sx = [e] : sx.push(e));
		else {
			G.deps ??= [], V_.call(G.deps, e) || G.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [G] : V_.call(r, G) || r.push(G);
		}
	}
	if (ex && rb.has(e)) return rb.get(e);
	if (t) {
		var i = e;
		if (ex) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Tx(i)) && (a = Fy(i)), rb.set(i, a), a;
		}
		var o = !(i.f & 512) && !nx && G !== null && ($b || !!(G.f & 512)), s = (i.f & ov) === 0;
		gx(i) && (o && (i.f |= 512), Iy(i)), o && !s && (Ry(i), wx(i));
	}
	if (Vy?.has(e)) return Vy.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function wx(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ry(t), wx(t));
}
function Tx(e) {
	if (e.v === Ov) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (rb.has(t) || t.f & 2 && Tx(t)) return !0;
	return !1;
}
function Ex(e) {
	var t = nx;
	try {
		return nx = !0, e();
	} finally {
		nx = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Dx = ["touchstart", "touchmove"];
function Ox(e) {
	return Dx.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dev/css.js
var kx = Symbol("events"), Ax = /* @__PURE__ */ new Set(), jx = /* @__PURE__ */ new Set();
function Mx(e, t, n) {
	(t[kx] ??= {})[e] = n;
}
function Nx(e) {
	for (var t = 0; t < e.length; t++) Ax.add(e[t]);
	for (var n of jx) n(e);
}
var Px = null, Fx = !1;
function Ix(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Px = e, Fx || (Fx = !0, setTimeout(() => {
		Fx = !1, Px = null;
	}));
	var o = 0, s = Px === e && e[kx];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[kx] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		W_(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = G, d = K;
		rx(null), ix(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[kx]?.[r];
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
			e[kx] = t, delete e.currentTarget, rx(u), ix(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Lx = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Rx(e) {
	return Lx?.createHTML(e) ?? e;
}
function zx(e) {
	var t = Cb("template");
	return t.innerHTML = Rx(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Bx(e, t) {
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
		if (j) return Bx(M, null), M;
		i === void 0 && (i = zx(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ vb(i)));
		var t = r || pb ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ vb(t), s = t.lastChild;
			Bx(o, s);
		} else Bx(t, t);
		return t;
	};
}
function Vx(e = "") {
	if (!j) {
		var t = _b(e + "");
		return Bx(t, t), t;
	}
	var n = M;
	return n.nodeType === 3 ? wb(n) : (n.before(n = _b()), Pv(n)), Bx(n, n), n;
}
function Hx() {
	if (j) return Bx(M, null), M;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = _b();
	return e.append(t, n), Bx(t, n), e;
}
function Y(e, t) {
	if (j) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = M), Fv();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ux(e) {
	let t = 0, n = ab(0), r;
	return () => {
		Ab() && (q(n), Rb(() => (t === 0 && (r = Ex(() => e(() => lb(n)))), t += 1, () => {
			dy(() => {
				--t, t === 0 && (r?.(), r = void 0, lb(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Wx = cv | lv;
function Gx(e, t, n, r) {
	new Kx(e, t, n, r);
}
var Kx = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = j ? M : null;
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
	#h = Ux(() => (this.#m = ab(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = zb(() => {
			if (j) {
				let e = this.#t;
				Fv();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Wx), j && (this.#e = M);
	}
	#g() {
		try {
			this.#a = Bb(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		dy(r), t && (this.#s = Bb(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Mv();
				return;
			}
			t = !0, n && ey(), this.#s !== null && qb(this.#s, () => {
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
					Eb(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = Bb(() => e(this.#e)), dy(() => {
			var e = this.#c = document.createDocumentFragment(), t = _b(), n = !1;
			if (e.append(t), this.#a = this.#S(() => {
				try {
					return Bb(() => this.#r(t));
				} catch (e) {
					try {
						this.error(e), n = !0;
					} catch (e) {
						Eb(e, this.#i.parent);
					}
					return null;
				}
			}), this.#a === null) {
				this.#c = null, n && this.#x(L);
				return;
			}
			this.#u === 0 && (this.#e.before(e), this.#c = null, qb(this.#o, () => {
				this.#o = null;
			}), this.#x(L));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = Bb(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Zb(this.#a, e);
				let t = this.#n.pending;
				this.#o = Bb(() => t(this.#e));
			} else this.#x(L);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		_y(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = G, r = ry;
		ix(this.#i), rx(this.#i), iy(this.#i.ctx);
		try {
			return Yy.ensure(), e();
		} finally {
			ix(t), rx(n), iy(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && qb(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, dy(() => {
			this.#d = !1, this.#m && sb(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		L?.is_fork ? (this.#a && L.skip_effect(this.#a), this.#o && L.skip_effect(this.#o), this.#s && L.skip_effect(this.#s), L.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (Wb(this.#a), null), this.#o &&= (Wb(this.#o), null), this.#s &&= (Wb(this.#s), null), j && (Pv(this.#t), Iv(), Pv(Lv()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return Bb(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Eb(e, this.#i.parent), null;
				}
			}));
		};
		dy(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Eb(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Eb(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function X(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Cv] ??= e.nodeValue) && (e[Cv] = n, e.nodeValue = `${n}`);
}
function qx(e, t) {
	return Xx(e, t);
}
function Jx(e, t) {
	gb(), t.intro = t.intro ?? !1;
	let n = t.target, r = j, i = M;
	try {
		for (var a = /* @__PURE__ */ vb(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ yb(a);
		if (!a) throw Dv;
		Nv(!0), Pv(a);
		let r = Xx(e, {
			...t,
			anchor: a
		});
		return Nv(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== Dv && console.warn("Failed to hydrate: ", r), t.recover === !1 && Yv(), gb(), xb(n), Nv(!1), qx(e, t);
	} finally {
		Nv(r), Pv(i);
	}
}
var Yx = /* @__PURE__ */ new Map();
function Xx(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	gb();
	var c = void 0, l = Fb(() => {
		var o = n ?? t.appendChild(_b());
		Gx(o, { pending: () => {} }, (t) => {
			P({});
			var n = ry;
			if (a && (n.c = a), i && (r.$$events = i), j && Bx(t, null), c = e(t, r) || sy(), j && (K.nodes.end = M, M === null || M.nodeType !== 8 || M.data !== "]")) throw jv(), Dv;
			F();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = Ox(r);
					for (let e of [t, document]) {
						var a = Yx.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Yx.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Ix, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(H_(Ax)), jx.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Yx.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Ix), r.delete(e), r.size === 0 && Yx.delete(n)) : r.set(e, i);
			}
			jx.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Zx.set(c, l), c;
}
var Zx = /* @__PURE__ */ new WeakMap();
function Qx(e, t) {
	let n = Zx.get(e);
	return n ? (Zx.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var $x = class {
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
			if (n) Yb(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Yb(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Wb(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Zb(r, t), t.append(_b()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Wb(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), qb(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Wb(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = L, r = Sb();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = _b();
				i.append(a), this.#n.set(e, {
					effect: Bb(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, Bb(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else j && (this.anchor = M), this.#a(n);
	}
}, eS = 0, tS = 1, nS = 2;
function rS(e, t, n, r, i) {
	j && Fv();
	var a = cy(), o = Ov, s = a ? ab(o) : /* @__PURE__ */ ob(o, !1, !1), c = a ? ab(o) : /* @__PURE__ */ ob(o, !1, !1), l = new $x(e);
	zb(() => {
		var a = L, o = t(), u = !1;
		let d = j && Q_(o) === (e.data === "[!");
		if (d && (Pv(Lv()), Nv(!1)), Q_(o)) {
			var f = Dy(), p = !1;
			let e = (e) => {
				if (!u) {
					p = !0, f(!1), L === a && a.deactivate(), Yy.ensure();
					try {
						e();
					} finally {
						Oy(!1), Uy || R();
					}
				}
			};
			o.then((t) => {
				e(() => {
					sb(s, t), l.ensure(tS, r && ((e) => r(e, s)));
				});
			}, (t) => {
				e(() => {
					if (sb(c, t), l.ensure(nS, i && ((e) => i(e, c))), !i) throw c.v;
				});
			}), j ? l.ensure(eS, n) : dy(() => {
				p || e(() => {
					l.ensure(eS, n);
				});
			});
		} else sb(s, o), l.ensure(tS, r && ((e) => r(e, s)));
		return d && Nv(!0), () => {
			u = !0;
		};
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Z(e, t, n = !1) {
	var r;
	j && (r = M, Fv());
	var i = new $x(e), a = n ? cv : 0;
	function o(e, t) {
		if (j) {
			var n = Rv(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Lv();
				Pv(a), i.anchor = a, Nv(!1), i.ensure(e, t), Nv(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	zb(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function iS(e, t) {
	return t;
}
function aS(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		qb(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					oS(e, H_(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null && e.pending.size === 0;
		if (c) {
			var l = n, u = l.parentNode;
			xb(u), u.append(l), e.items.clear();
		}
		oS(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function oS(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= dv, Zb(a, document.createDocumentFragment())) : Wb(t[i], n);
	}
}
var sS;
function cS(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = j ? Pv(/* @__PURE__ */ vb(c)) : c.appendChild(_b());
	}
	j && Fv();
	var l = null, u = /* @__PURE__ */ Ny(() => {
		var e = n();
		return z_(e) ? e : e == null ? [] : H_(e);
	}), d, f = /* @__PURE__ */ new Map(), p = !0;
	function m(e) {
		g.effect.f & 16384 || (g.pending.delete(e), g.fallback = l, uS(g, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= dv, fS(l, null, o)) : Yb(l) : qb(l, () => {
			l = null;
		})));
	}
	function h(e) {
		g.pending.delete(e);
	}
	var g = {
		effect: zb(() => {
			d = q(u);
			var e = d.length;
			let c = !1;
			j && Rv(o) === "[!" != (e === 0) && (o = Lv(), Pv(o), Nv(!1), c = !0);
			for (var g = /* @__PURE__ */ new Set(), _ = L, v = Sb(), y = 0; y < e; y += 1) {
				j && M.nodeType === 8 && M.data === "]" && (o = M, c = !0, Nv(!1));
				var b = d[y], x = r(b, y), S = p ? null : s.get(x);
				S ? (S.v && sb(S.v, b), S.i && sb(S.i, y), v && _.unskip_effect(S.e)) : (S = dS(s, p ? o : sS ??= _b(), b, x, y, i, t, n), p || (S.e.f |= dv), s.set(x, S)), g.add(x);
			}
			if (e === 0 && a && !l && (p ? l = Bb(() => a(o)) : (l = Bb(() => a(sS ??= _b())), l.f |= dv)), e > g.size && Wv("", "", ""), j && e > 0 && Pv(Lv()), !p) {
				if (f.set(_, g), v) {
					for (let [e, t] of s) g.has(e) || _.skip_effect(t.e);
					_.oncommit(m), _.ondiscard(h);
				} else m(_);
			}
			c && Nv(!0), q(u);
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	p = !1, j && (o = M);
}
function lS(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function uS(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, c = lS(e.effect.first), l, u = null, d, f = [], p = [], m, h, g, _;
	if (a) for (_ = 0; _ < o; _ += 1) m = t[_], h = i(m, _), g = s.get(h).e, g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
	for (_ = 0; _ < o; _ += 1) {
		if (m = t[_], h = i(m, _), g = s.get(h).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
		if (g.f & 8192 && (Yb(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g.f & 33554432) {
			if (g.f ^= dv, g === c) fS(g, null, n);
			else {
				var v = u ? u.next : c;
				g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), pS(e, u, g), pS(e, g, v), fS(g, v, n), u = g, f = [], p = [], c = lS(u.next);
				continue;
			}
		}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var y = p[0], b;
					u = y.prev;
					var x = f[0], S = f[f.length - 1];
					for (b = 0; b < f.length; b += 1) fS(f[b], y, n);
					for (b = 0; b < p.length; b += 1) l.delete(p[b]);
					pS(e, x.prev, S.next), pS(e, u, x), pS(e, S, y), c = y, u = S, --_, f = [], p = [];
				} else l.delete(g), fS(g, c, n), pS(e, g.prev, g.next), pS(e, g, u === null ? e.effect.first : u.next), pS(e, u, g), u = g;
				continue;
			}
			for (f = [], p = []; c !== null && c !== g;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = lS(c.next);
			if (c === null) continue;
		}
		g.f & 33554432 || f.push(g), u = g, c = lS(g.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (oS(e, H_(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var ee = [];
		if (l !== void 0) for (g of l) g.f & 8192 || ee.push(g);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = lS(c.next);
		var C = ee.length;
		if (C > 0) {
			var te = r & 4 && o === 0 ? n : null;
			if (a) {
				for (_ = 0; _ < C; _ += 1) ee[_].nodes?.a?.measure();
				for (_ = 0; _ < C; _ += 1) ee[_].nodes?.a?.fix();
			}
			aS(e, ee, te);
		}
	}
	a && dy(() => {
		if (d !== void 0) for (g of d) g.nodes?.a?.apply();
	});
}
function dS(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? ab(n) : /* @__PURE__ */ ob(n, !1, !1) : null, l = o & 2 ? ab(i) : null;
	return {
		v: c,
		i: l,
		e: Bb(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function fS(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ yb(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function pS(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function mS(e, t, ...n) {
	var r = new $x(e);
	zb(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, cv);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function hS(e, t) {
	Ib(() => {
		e = K?.parent?.nodes?.start ?? e;
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = Cb("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var gS = [..." 	\n\r\f\xA0\v﻿"];
function _S(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || gS.includes(r[o - 1])) && (s === r.length || gS.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function vS(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function yS(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function bS(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(yS)), i && c.push(...Object.keys(i).map(yS));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = yS(e.substring(l, u).trim());
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
		return r && (n += vS(r)), i && (n += vS(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function xS(e, t, n, r, i, a) {
	var o = e[xv];
	if (j || o !== n || o === void 0) {
		var s = _S(n, r, a);
		(!j || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[xv] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function SS(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function CS(e, t, n, r) {
	var i = e[Sv];
	if (j || i !== t) {
		var a = bS(t, r);
		(!j || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[Sv] = t;
	} else r && (Array.isArray(r) ? (SS(e, n?.[0], r[0]), SS(e, n?.[1], r[1], "important")) : SS(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var wS = Symbol("is custom element"), TS = Symbol("is html"), ES = Ev ? "link" : "LINK";
function DS(e) {
	if (j) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					OS(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					OS(e, "checked", null), e.checked = r;
				}
			}
		};
		e[wv] = n, dy(n), Cy();
	}
}
function OS(e, t, n, r) {
	var i = kS(e);
	j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ES) || i[t] !== (i[t] = n) && (t === "loading" && (e[yv] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && jS(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function kS(e) {
	return e[bv] ??= {
		[wS]: e.nodeName.includes("-"),
		[TS]: e.namespaceURI === kv
	};
}
var AS = /* @__PURE__ */ new Map();
function jS(e) {
	var t = e.getAttribute("is") || e.nodeName, n = AS.get(t);
	if (n) return n;
	AS.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = K_(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
		i = Y_(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function MS(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Ty(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = NS(e) ? PS(a) : a, n(a), L !== null && r.add(L), await Cx(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (j && e.defaultValue !== e.value || Ex(t) == null && e.value) && (n(NS(e) ? PS(e.value) : e.value), L !== null && r.add(L)), Rb(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = L;
			if (r.has(i)) return;
		}
		NS(e) && n === PS(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function NS(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function PS(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function FS(e, t) {
	return e === t || e?.[gv] === t;
}
function IS(e = sy(), t, n, r) {
	var i = ry.r, a = K;
	return Ib(() => {
		var o, s;
		return Rb(() => {
			o = s, s = r?.() || [], Ex(() => {
				FS(n(...s), e) || (t(e, ...s), o && FS(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && FS(n(...s), e) && t(null, ...s);
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
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Ay(r), q(l)) : (c && (c = !1, s = o ? Ex(r) : r), s);
	let d;
	if (a) {
		var f = gv in e || vv in e;
		d = G_(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = xy(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Xv(t), d(p)));
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
	var _ = !1, v = (n & 1 ? Ay : Ny)(() => (_ = !1, h()));
	a && q(v);
	var y = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? q(v) : i && a ? db(e) : e;
			return B(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return ex && _ || y.f & 16384 ? v.v : q(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function LS(e) {
	return new RS(e);
}
var RS = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ ob(n, !1, !1);
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
				return r === vv || (q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return B(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Jx : qx)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && R(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && W_(this, e, {
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
			Qx(this.#t);
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
}, zS;
typeof HTMLElement == "function" && (zS = class extends HTMLElement {
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
					let n = Cb("slot");
					e !== "default" && (n.name = e), Y(t, n);
				};
			}
			let t = {}, n = VS(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = BS(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = LS({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = Pb(() => {
				Rb(() => {
					this.$$r = !0;
					for (let e of U_(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = BS(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = BS(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return U_(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function BS(e, t, n, r) {
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
function VS(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function $(e, t, n, r, i, a) {
	let o = class extends zS {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return U_(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return U_(t).forEach((e) => {
		W_(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = BS(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (G_(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		W_(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
function HS(e) {
	ry === null && Hv("onMount"), Mb(() => {
		let t = Ex(e);
		if (typeof t == "function") return t;
	});
}
function US(e) {
	ry === null && Hv("onDestroy"), HS(() => () => Ex(e));
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/uuid/dist/esm-browser/rng.js
var WS, GS = /* @__PURE__ */ new Uint8Array(16);
function KS() {
	if (!WS && (WS = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !WS)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return WS(GS);
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/regex.js
var qS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
//#endregion
//#region node_modules/uuid/dist/esm-browser/validate.js
function JS(e) {
	return typeof e == "string" && qS.test(e);
}
for (var YS = [], XS = 0; XS < 256; ++XS) YS.push((XS + 256).toString(16).substr(1));
function ZS(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (YS[e[t + 0]] + YS[e[t + 1]] + YS[e[t + 2]] + YS[e[t + 3]] + "-" + YS[e[t + 4]] + YS[e[t + 5]] + "-" + YS[e[t + 6]] + YS[e[t + 7]] + "-" + YS[e[t + 8]] + YS[e[t + 9]] + "-" + YS[e[t + 10]] + YS[e[t + 11]] + YS[e[t + 12]] + YS[e[t + 13]] + YS[e[t + 14]] + YS[e[t + 15]]).toLowerCase();
	if (!JS(n)) throw TypeError("Stringified UUID is invalid");
	return n;
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/v4.js
function QS(e, t, n) {
	e ||= {};
	var r = e.random || (e.rng || KS)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (var i = 0; i < 16; ++i) t[n + i] = r[i];
		return t;
	}
	return ZS(r);
}
//#endregion
//#region src/shared/services/popup.service.ts
var $S = {
	backdrop: !0,
	positioning: "center",
	closeOnClickOutside: !0,
	closeOnEscape: !0,
	anchorElement: null,
	customPosition: {
		x: 0,
		y: 0
	}
}, eC = class {
	_popupContainer;
	rootElement;
	constructor(e) {
		this.rootElement = e, this._popupContainer = {};
	}
	openPopup(e, t, n) {
		n = {
			...$S,
			...n
		}, console.log("openPopup", n);
		let r = QS(), i = new Mi(), a = this._popupContainer[e] ?? this._createPopupContainer(e, n), o = this._createPopupWrapper(t, n);
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
}, tC = {
	[s_.toString()]: "ApiContext",
	[zu.toString()]: "TenantHttpService",
	[Uu.toString()]: "DataSourceHttpService",
	[Ru.toString()]: "EntityHttpService",
	[Vu.toString()]: "EntityNameService",
	[rf.toString()]: "LiveValueService"
};
function nC(e, t = null) {
	let n = tC[e.toString()] ?? e.toString(), r = window.dependencyContainer ?? R_;
	if (r.isRegistered(e)) return r.resolve(e);
	if (r.isRegistered(n)) return r.resolve(n);
	if (window[n]) return window[n];
	if (t) return t;
	throw Error(`Service ${n?.toString()} not found`);
}
function rC(e, t = null) {
	try {
		return nC(e, t);
	} catch {
		return t;
	}
}
function iC(e, t, n = !0) {
	let r = window.dependencyContainer ?? R_;
	try {
		if (r.isRegistered(e) && !n) return;
		r.registerInstance(e, t);
	} catch {
		throw Error(`Failed to register service: ${e?.toString()}`);
	}
	return t;
}
function aC(e) {
	window.dependencyContainer = e;
}
//#endregion
//#region src/shared/components/icon-button/IconButton.svelte
var oC = /* @__PURE__ */ J("<div><span class=\"material-symbols-rounded select-none\"><!></span></div>");
function sC(e, t) {
	P(t, !0);
	let n = Q(t, "icon", 7, null), r = Q(t, "size", 7, "medium"), i = Q(t, "iconSize", 7, null), a = Q(t, "variant", 7, "neutral"), o = Q(t, "className", 7, ""), s = Q(t, "title", 7, null), c = Q(t, "disabled", 7, !1), l = Q(t, "onclick", 7), u = Q(t, "children", 7), d = {
		small: 26,
		medium: 36,
		large: 40
	}, f = /* @__PURE__ */ I(() => typeof r() == "number" ? r() : d[r()]), p = /* @__PURE__ */ I(() => i() ?? Math.round(q(f) * .55));
	function m(e) {
		c() || l()?.(e);
	}
	var h = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), R();
		},
		get size() {
			return r();
		},
		set size(e = "medium") {
			r(e), R();
		},
		get iconSize() {
			return i();
		},
		set iconSize(e = null) {
			i(e), R();
		},
		get variant() {
			return a();
		},
		set variant(e = "neutral") {
			a(e), R();
		},
		get className() {
			return o();
		},
		set className(e = "") {
			o(e), R();
		},
		get title() {
			return s();
		},
		set title(e = null) {
			s(e), R();
		},
		get disabled() {
			return c();
		},
		set disabled(e = !1) {
			c(e), R();
		},
		get onclick() {
			return l();
		},
		set onclick(e) {
			l(e), R();
		},
		get children() {
			return u();
		},
		set children(e) {
			u(e), R();
		}
	}, g = oC();
	let _;
	var v = V(g), y = V(v), b = (e) => {
		var t = Hx();
		mS(bb(t), u), Y(e, t);
	}, x = (e) => {
		var t = Vx();
		W(() => X(t, n())), Y(e, t);
	};
	return Z(y, (e) => {
		u() ? e(b) : e(x, -1);
	}), N(v), N(g), W(() => {
		OS(g, "title", s()), _ = xS(g, 1, `flex shrink-0 flex-col items-center justify-center rounded-full transition-colors ${o() ?? ""}`, null, _, {
			"cursor-pointer": !c(),
			"cursor-default": c(),
			"text-primary": a() === "primary" && !c(),
			"text-ink-secondary": a() === "neutral" && !c(),
			"text-ink-disabled": c(),
			"hover:bg-primary-tint": a() === "primary" && !c(),
			"hover:bg-neutral-hover": a() === "neutral" && !c()
		}), CS(g, `height: ${q(f) ?? ""}px; width: ${q(f) ?? ""}px;`), CS(v, `font-size: ${q(p) ?? ""}px;`);
	}), Mx("click", g, (e) => m(e)), Y(e, g), F(h);
}
Nx(["click"]), $(sC, {
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
function cC(e) {
	return e?.ApplicationSettings?.AdditionalSettings?.Icon || "mat-domain";
}
function lC(e) {
	if (!e) return "domain";
	let [t, ...n] = e.split(/[-\s]/), r = n.join("-");
	return r ? t === "adk" || t.startsWith("fa") ? "domain" : r : t;
}
function uC(e) {
	let t = (e) => e.Position ?? 0, n = e.filter((e) => !t(e)), r = e.filter((e) => !n.includes(e)).sort((e, n) => t(e) - t(n)), i = [], a = 0;
	return r.forEach((e) => {
		for (; t(e) - a > 1 && n.length > 0;) i.push(n[0]), n = n.filter((e) => !i.includes(e)), a = i.length;
		a = t(e), i.push(e);
	}), i.concat(n);
}
//#endregion
//#region src/components/tenant-select/TenantSelect.svelte
var dC = /* @__PURE__ */ J("<button type=\"button\" class=\"cursor-pointer whitespace-nowrap opacity-70 hover:underline focus-visible:underline\"> </button> <span class=\"material-symbols-rounded select-none text-[18px] opacity-70\">chevron_right</span>", 1), fC = /* @__PURE__ */ J("<span class=\"truncate font-medium\"> </span>"), pC = /* @__PURE__ */ J("<span class=\"opacity-70\">Suchergebnisse</span>"), mC = /* @__PURE__ */ J("<div class=\"mt-px truncate text-[12px] text-ink-secondary\"> </div>"), hC = /* @__PURE__ */ J("<span class=\"material-symbols-rounded flex-none select-none text-[20px] text-ink-secondary\" title=\"Mandant ist deaktiviert\">lock</span>"), gC = /* @__PURE__ */ J("<span class=\"flex-none whitespace-nowrap text-[12px] text-ink-secondary\"> </span>"), _C = /* @__PURE__ */ J("<div><span class=\"grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-primary-tint-subtle text-primary\"><span class=\"material-symbols-rounded select-none text-[18px]\"> </span></span> <div class=\"min-w-0 flex-1\"><div class=\"truncate text-[14px] font-semibold text-ink\"> </div> <!></div> <!> <!> <!></div>"), vC = /* @__PURE__ */ J("<div class=\"flex flex-col items-center gap-2 py-10\"><span class=\"material-symbols-rounded select-none text-[24px] text-ink-tertiary\">search_off</span> <div class=\"text-cell text-ink-secondary\">Keine Mandanten gefunden</div></div>"), yC = /* @__PURE__ */ J("<div class=\"flex h-full min-h-0 w-full flex-col gap-[14px] overflow-hidden px-5 py-[14px]\"><div class=\"flex flex-col gap-[14px]\"><div class=\"flex items-center gap-3\"><!> <div class=\"flex-none text-section font-semibold text-ink\">Mandant auswählen</div> <div class=\"ml-auto flex h-10 min-w-0 max-w-[420px] flex-1 items-center gap-2 rounded-[10px] border border-line bg-surface pl-3 pr-[6px] transition-colors focus-within:border-primary\"><span class=\"material-symbols-rounded select-none text-[20px] text-ink-tertiary\">search</span> <input placeholder=\"Mandant suchen\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <!></div></div> <div class=\"flex min-h-6 min-w-0 flex-wrap items-center text-[15px] text-ink\"><!></div></div> <div class=\"-mx-3 -mb-3 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 pb-3 pt-[2px]\"><!> <!></div></div>"), bC = {
	hash: "svelte-1ouwjqo",
	code: "\n/* Same hover lift as the UI's .tenant-row. */.tenant-row.svelte-1ouwjqo {transition:border-color 0.15s,\n    box-shadow 0.15s;}.tenant-row.svelte-1ouwjqo:not(.tenant-row--disabled):hover {border-color:rgba(0, 0, 0, 0.2);box-shadow:0 6px 18px rgba(0, 0, 0, 0.08);}.tenant-row--disabled.svelte-1ouwjqo {opacity:0.65;}"
};
function xC(e, t) {
	P(t, !0), hS(e, bC);
	let n = nC(zu), r = Q(t, "allowBack", 7, !1), i = Q(t, "ontenantSelected", 7), a = Q(t, "onback", 7), o = /* @__PURE__ */ z(db([])), s = /* @__PURE__ */ z(db([])), c = /* @__PURE__ */ z(""), l = /* @__PURE__ */ z(!1), u = /* @__PURE__ */ z(db({})), d = {}, f = new Mi(), p = new Mi();
	p.pipe(lo(f), Qa(300), eo()).subscribe((e) => h(e)), Mb(() => {
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
		B(o, [new Cr({
			Id: "start",
			Name: "Start"
		})], !0), _(e);
	}
	async function h(e) {
		if (!e) {
			q(l) && (B(l, !1), m());
			return;
		}
		B(l, !0);
		try {
			_(await n.filterTenantsByName(e), !1);
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
	function _(e, t = !0) {
		B(s, t ? uC(e) : e, !0), v(e);
	}
	function v(e) {
		for (let t of e) q(u)[t.Id] === void 0 && g(t.Id).then((e) => {
			B(u, {
				...q(u),
				[t.Id]: e.length
			}, !0);
		});
	}
	async function y(e) {
		B(c, ""), B(l, !1), B(o, [...q(o), e], !0), _(await g(e.Id));
	}
	async function b(e) {
		if (B(c, ""), B(l, !1), e.Id == "start") {
			m();
			return;
		}
		let t = q(o).findIndex((t) => t.Id === e.Id);
		B(o, q(o).slice(0, t + 1), !0), _(await g(e.Id));
	}
	function x(e) {
		if (e.Root) {
			i()?.(e);
			return;
		}
		q(u)[e.Id] > 0 && y(e);
	}
	function S(e, t) {
		e.stopPropagation(), y(t);
	}
	function ee(e) {
		return `${e} ${e === 1 ? "Mandant" : "Mandanten"}`;
	}
	m(), US(() => {
		f.next(), f.complete();
	});
	var C = {
		get allowBack() {
			return r();
		},
		set allowBack(e = !1) {
			r(e), R();
		},
		get ontenantSelected() {
			return i();
		},
		set ontenantSelected(e) {
			i(e), R();
		},
		get onback() {
			return a();
		},
		set onback(e) {
			a(e), R();
		}
	}, te = yC(), ne = V(te), re = V(ne), ie = V(re), ae = (e) => {
		sC(e, {
			size: 36,
			iconSize: 20,
			icon: "arrow_back",
			onclick: () => a()?.()
		});
	};
	Z(ie, (e) => {
		r() && e(ae);
	});
	var oe = U(ie, 4), se = U(V(oe), 2);
	DS(se);
	var ce = U(se, 2), le = (e) => {
		sC(e, {
			size: 28,
			iconSize: 18,
			icon: "close",
			title: "Suche leeren",
			onclick: () => B(c, "")
		});
	};
	Z(ce, (e) => {
		q(c) && e(le);
	}), N(oe), N(re);
	var ue = U(re, 2), de = V(ue), fe = (e) => {
		var t = Hx();
		cS(bb(t), 17, () => q(o), iS, (e, t, n) => {
			var r = Hx(), i = bb(r), a = (e) => {
				var n = dC(), r = bb(n), i = H(r, !0);
				Iv(2), W(() => X(i, q(t).Name)), Mx("click", r, () => b(q(t))), Y(e, n);
			}, s = (e) => {
				var n = fC(), r = H(n, !0);
				W(() => X(r, q(t).Name)), Y(e, n);
			};
			Z(i, (e) => {
				n < q(o).length - 1 ? e(a) : e(s, -1);
			}), Y(e, r);
		}), Y(e, t);
	}, pe = (e) => {
		Y(e, pC());
	};
	Z(de, (e) => {
		q(l) ? e(pe, -1) : e(fe);
	}), N(ue), N(ne);
	var w = U(ne, 2), me = V(w);
	cS(me, 17, () => q(s), (e) => e.Id, (e, t) => {
		let n = /* @__PURE__ */ I(() => q(t).Enabled === !1 || q(t).Locked), r = /* @__PURE__ */ I(() => q(u)[q(t).Id] ?? 0);
		var i = _C();
		let a;
		var o = V(i), s = H(V(o), !0);
		N(o);
		var c = U(o, 2), l = V(c), d = H(l, !0), f = U(l, 2), p = (e) => {
			var n = mC(), r = H(n, !0);
			W(() => X(r, q(t).Description)), Y(e, n);
		};
		Z(f, (e) => {
			q(t).Description && e(p);
		}), N(c);
		var m = U(c, 2), h = (e) => {
			Y(e, hC());
		};
		Z(m, (e) => {
			q(n) && e(h);
		});
		var g = U(m, 2), _ = (e) => {
			var t = gC(), n = H(t, !0);
			W((e) => X(n, e), [() => ee(q(r))]), Y(e, t);
		};
		Z(g, (e) => {
			q(r) > 0 && e(_);
		});
		var v = U(g, 2), y = (e) => {
			sC(e, {
				size: 32,
				iconSize: 20,
				icon: "chevron_right",
				title: "Untermandanten anzeigen",
				onclick: (e) => S(e, q(t))
			});
		};
		Z(v, (e) => {
			q(r) > 0 && !q(n) && e(y);
		}), N(i), W((e) => {
			a = xS(i, 1, "tenant-row flex flex-none items-center gap-3 rounded-[12px] border border-line bg-surface p-2 svelte-1ouwjqo", null, a, {
				"cursor-pointer": !q(n),
				"tenant-row--disabled": q(n)
			}), X(s, e), X(d, q(t)?.Name);
		}, [() => lC(cC(q(t)))]), Mx("click", i, () => !q(n) && x(q(t))), Y(e, i);
	});
	var he = U(me, 2), ge = (e) => {
		Y(e, vC());
	};
	return Z(he, (e) => {
		q(s).length === 0 && e(ge);
	}), N(w), N(te), MS(se, () => q(c), (e) => B(c, e)), Y(e, te), F(C);
}
Nx(["click"]), $(xC, {
	allowBack: {},
	ontenantSelected: {},
	onback: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-meta.ts
var SC = {
	icon: "category",
	singular: "Eintrag",
	plural: "Einträge"
}, CC = {
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
function wC(e) {
	return CC[e] ?? SC;
}
//#endregion
//#region node_modules/@ngneat/elf/index.esm.js
function TC(...e) {
	let t = {
		config: {},
		state: {}
	};
	for (let { config: n, props: r } of e) Object.assign(t.config, n), Object.assign(t.state, r);
	return t;
}
var EC = new Pi(!1), DC = EC.asObservable().pipe(Ja((e) => !e), $a(1)), OC = {};
new class {
	registerPreStoreUpdate(e) {
		OC.preStoreUpdate = e;
	}
	registerPreStateInit(e) {
		OC.preStateInit = e;
	}
}();
var kC = /* @__PURE__ */ new Map(), AC = new Mi();
AC.asObservable();
function jC(e) {
	kC.set(e.name, e), AC.next({
		type: "add",
		store: e
	});
}
function MC(e) {
	kC.delete(e.name), AC.next({
		type: "remove",
		store: e
	});
}
function NC() {
	return kC;
}
var PC = [];
function FC(e) {
	PC.push(e);
}
function IC(e) {
	PC.length && PC.forEach((t) => e.next(t)), PC = [];
}
var LC = class extends Pi {
	constructor(e) {
		super(e.state), this.storeDef = e, this.initialState = void 0, this.state = void 0, this.batchInProgress = !1, this.events = new Mi(), this.context = {
			config: this.getConfig(),
			setEvent: (e) => {
				FC(e);
			}
		}, this.events$ = this.events.asObservable(), this.state = this.getInitialState(e.state), this.initialState = this.getValue(), jC(this);
	}
	get name() {
		return this.storeDef.name;
	}
	getInitialState(e) {
		return OC.preStateInit ? OC.preStateInit(e, this.name) : e;
	}
	getConfig() {
		return this.storeDef.config;
	}
	query(e) {
		return e(this.getValue());
	}
	update(...e) {
		let t = this.getValue(), n = e.reduce((e, t) => (e = t(e, this.context), e), t);
		OC.preStoreUpdate && (n = OC.preStoreUpdate(t, n, this.name)), n !== t && (this.state = n, EC.getValue() ? this.batchInProgress || (this.batchInProgress = !0, DC.subscribe(() => {
			super.next(this.state), IC(this.events), this.batchInProgress = !1;
		})) : (super.next(this.state), IC(this.events)));
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
		MC(this), this.reset();
	}
	next(e) {
		this.update(() => e);
	}
	error() {}
	complete() {}
};
function RC(e, ...t) {
	let { state: n, config: r } = TC(...t), { name: i } = e;
	return new LC({
		name: i,
		state: n,
		config: r
	});
}
function zC(e) {
	return {
		props: e,
		config: void 0
	};
}
//#endregion
//#region node_modules/@ngneat/elf-persist-state/index.esm.js
function BC(e, t) {
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
	}), o = n.source(e).pipe(so(1), co((t) => {
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
function VC(e) {
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
var HC = VC((() => {
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
var UC = yy(r.Signal), { config: WC, state: GC } = TC(zC({
	queryWithSubGroups: !0,
	selectedTenant: null,
	pageSize: 25
})), KC = RC({ name: "entity-select-selection" }, zC({ selectedEntities: [] })), qC = new LC({
	state: GC,
	config: WC,
	name: "entity-select-global"
});
BC(qC, {
	key: "entity-select-global",
	storage: HC
});
var JC = (e) => {
	let t = NC().get(`entity-select-type-${UC}`);
	if (t) return t;
	let { state: n, config: r } = TC(zC({
		filter: null,
		selectedGroup: null,
		lastSelectedEntities: []
	}));
	return new LC({
		state: n,
		config: r,
		name: `entity-select-type-${UC}`
	});
}, YC = /* @__PURE__ */ J("<span class=\"material-symbols-rounded w-4 select-none text-[16px]\"> </span>"), XC = /* @__PURE__ */ J("<div class=\"pl-3\"></div>"), ZC = /* @__PURE__ */ J("<div><div><!> <div class=\"flex-1 truncate\"> </div></div> <!></div>");
function QC(e, t) {
	P(t, !0);
	let n = nC(Ru), i = Q(t, "group", 7), a = Q(t, "expanded", 15, !1), o = Q(t, "entityType", 7), s = Q(t, "search", 7, ""), c = /* @__PURE__ */ z(db([])), l = /* @__PURE__ */ z(!1), u = new Mi(), d = JC(o()), f = /* @__PURE__ */ I(() => s() ? q(c).filter((e) => e.Name?.Value?.toLowerCase().includes(s().toLowerCase())) : q(c));
	d.pipe(lo(u), no("selectedGroup")).subscribe((e) => {
		B(l, e.selectedGroup?.Id === i()?.Id), i() && e.selectedGroup?.Path?.includes(i().Id) && a(!0);
	});
	async function p() {
		try {
			B(c, (await n.queryConfiguration(r.Group, { GroupId: i().Id })).data, !0);
		} catch (e) {
			console.error(e);
		}
	}
	Mb(() => {
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
			i(e), R();
		},
		get expanded() {
			return a();
		},
		set expanded(e = !1) {
			a(e), R();
		},
		get entityType() {
			return o();
		},
		set entityType(e) {
			o(e), R();
		},
		get search() {
			return s();
		},
		set search(e = "") {
			s(e), R();
		}
	}, _ = ZC(), v = V(_);
	let y;
	var b = V(v), x = (e) => {
		var t = YC(), n = H(t, !0);
		W(() => X(n, a() ? "expand_more" : "chevron_right")), Mx("click", t, (e) => m(e)), Y(e, t);
	};
	Z(b, (e) => {
		q(c).length > 0 && e(x);
	});
	var S = H(U(b, 2), !0);
	N(v);
	var ee = U(v, 2), C = (e) => {
		var t = XC();
		cS(t, 21, () => q(f), (e) => e.Id, (e, t) => {
			QC(e, {
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
		}), N(t), Y(e, t);
	};
	return Z(ee, (e) => {
		a() && e(C);
	}), N(_), W(() => {
		y = xS(v, 1, "flex cursor-pointer items-center gap-[6px] rounded-control border-l-[3px] border-transparent py-2 pr-[10px] text-cell transition-colors", null, y, {
			"pl-[10px]": q(c).length > 0,
			"pl-[26px]": q(c).length === 0,
			"text-ink-secondary": !q(l),
			"hover:bg-neutral-hover": !q(l),
			"bg-primary-tint": q(l),
			"!border-primary": q(l),
			"text-ink": q(l),
			"font-medium": q(l)
		}), X(S, i()?.Name?.Value);
	}), Mx("click", v, () => h()), Y(e, _), F(g);
}
Nx(["click"]), $(QC, {
	group: {},
	expanded: {},
	entityType: {},
	search: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/checkbox/Checkbox.svelte
var $C = /* @__PURE__ */ J("<span class=\"material-symbols-rounded text-on-primary\"> </span>"), ew = /* @__PURE__ */ J("<div class=\"ml-2 text-cell text-ink\"> </div>"), tw = /* @__PURE__ */ J("<div><div><!></div> <!></div>");
function nw(e, t) {
	P(t, !0);
	let n = Q(t, "readonly", 7, !1), r = Q(t, "label", 7, ""), i = Q(t, "checked", 15, !1), a = Q(t, "indeterminate", 7, !1), o = Q(t, "size", 7, 16), s = Q(t, "container$class", 7, ""), c = Q(t, "onchange", 7), l = /* @__PURE__ */ I(() => a() && !i()), u = /* @__PURE__ */ I(() => i() || q(l));
	function d() {
		n() || (i(!i()), c()?.(i()));
	}
	var f = {
		get readonly() {
			return n();
		},
		set readonly(e = !1) {
			n(e), R();
		},
		get label() {
			return r();
		},
		set label(e = "") {
			r(e), R();
		},
		get checked() {
			return i();
		},
		set checked(e = !1) {
			i(e), R();
		},
		get indeterminate() {
			return a();
		},
		set indeterminate(e = !1) {
			a(e), R();
		},
		get size() {
			return o();
		},
		set size(e = 16) {
			o(e), R();
		},
		get container$class() {
			return s();
		},
		set container$class(e = "") {
			s(e), R();
		},
		get onchange() {
			return c();
		},
		set onchange(e) {
			c(e), R();
		}
	}, p = tw(), m = V(p);
	let h;
	var g = V(m), _ = (e) => {
		var t = $C(), n = H(t, !0);
		W(() => {
			CS(t, `font-size: ${o() - 2}px;`), X(n, q(l) ? "remove" : "check");
		}), Y(e, t);
	};
	Z(g, (e) => {
		q(u) && e(_);
	}), N(m);
	var v = U(m, 2), y = (e) => {
		var t = ew(), n = H(t, !0);
		W(() => X(n, r())), Y(e, t);
	};
	return Z(v, (e) => {
		r() && e(y);
	}), N(p), W(() => {
		xS(p, 1, `flex items-center ${n() ? "cursor-default" : "cursor-pointer"} ${s() ?? ""}`), h = xS(m, 1, "flex shrink-0 items-center justify-center rounded-[3px] transition-colors", null, h, {
			"border-2": !q(u),
			"border-checkbox-border": !q(u) && !n(),
			"border-checkbox-border-disabled": !q(u) && n(),
			"bg-select": q(u) && !n(),
			"bg-ink-disabled": q(u) && n()
		}), CS(m, `height: ${o() ?? ""}px; width: ${o() ?? ""}px;`);
	}), Mx("click", p, () => d()), Y(e, p), F(f);
}
Nx(["click"]), $(nw, {
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
var rw = /* @__PURE__ */ J("<div class=\"min-h-0 flex-1 overflow-auto px-[10px] pb-[10px] pt-[2px]\"><!></div>"), iw = /* @__PURE__ */ J("<div class=\"flex-1\"></div>"), aw = /* @__PURE__ */ J("<button type=\"button\" class=\"cursor-pointer text-[12px] text-primary hover:underline\">alle übernehmen</button>"), ow = /* @__PURE__ */ J("<div class=\"flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-[7px] transition-colors hover:bg-neutral-hover\"><!> <div class=\"min-w-0 flex-1\"><div class=\"truncate text-cell text-ink\"> </div> <div class=\"truncate text-sub text-ink-tertiary\"> </div></div></div>"), sw = /* @__PURE__ */ J("<div class=\"max-h-[45%] flex-none overflow-y-auto border-t border-line px-[10px] pb-3 pt-[10px]\"><div class=\"mb-1 flex items-center justify-between\"><div class=\"text-meta text-ink-secondary\">Zuletzt ausgewählt</div> <!></div> <!></div>"), cw = /* @__PURE__ */ J("<div class=\"flex h-full min-h-0 w-[280px] flex-none flex-col overflow-hidden border-r border-line\"><div class=\"flex-none px-3 pb-[10px] pt-3\"><div class=\"flex gap-2\"><button type=\"button\" class=\"flex h-[44px] flex-1 items-center gap-2 overflow-hidden rounded-control border border-line pl-[10px] pr-2 text-left transition-colors hover:border-line-strong\"><span class=\"material-symbols-rounded select-none text-[18px] text-ink-secondary\">domain</span> <div class=\"min-w-0 flex-1\"><div class=\"text-label leading-[1.2] text-ink-tertiary\">Mandant</div> <div class=\"truncate text-cell leading-[1.2] text-ink\"> </div></div> <span class=\"material-symbols-rounded select-none text-[16px] text-ink-secondary\">unfold_more</span></button> <button type=\"button\" title=\"Mandant suchen\" class=\"flex h-[44px] w-[44px] flex-none items-center justify-center rounded-control border border-line transition-colors hover:bg-primary-tint-subtle\"><span class=\"material-symbols-rounded select-none text-[20px] text-primary\">search</span></button></div> <div class=\"mt-[10px] flex h-10 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Suche\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div></div> <!> <!></div>");
function lw(e, t) {
	P(t, !0);
	let n = nC(Ru), i = nC(Vu), a = Q(t, "entityType", 7), o = Q(t, "selectedTenant", 7), s = Q(t, "selectMultiple", 7, !1), c = Q(t, "onchangeTenant", 7), l = /* @__PURE__ */ z(null), u = /* @__PURE__ */ z(db([])), d = /* @__PURE__ */ z(""), f = [], p = /* @__PURE__ */ z(db({})), m = new Mi(), h = JC(a());
	h.pipe(lo(m)).subscribe((e) => {
		_(e.lastSelectedEntities ?? []);
	}), KC.pipe(lo(m)).subscribe((e) => {
		f = e.selectedEntities, B(p, {}, !0);
		for (let e of f) q(p)[e.Id] = !0;
	});
	async function g(e) {
		try {
			B(l, await n.getEntityById(r.Group, e), !0), (!h.value?.selectedGroup || h.value.selectedGroup.Id != q(l).Id) && h.update((e) => ({
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
		B(u, t.filter((e) => e != null), !0);
	}
	function v(e) {
		f = s() ? q(p)[e.id] ? f.filter((t) => t.Id !== e.id) : [...f, e.entity] : [e.entity], KC.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function y() {
		let e = q(u).filter((e) => !q(p)[e.id]).map((e) => e.entity);
		KC.update((t) => ({
			...t,
			selectedEntities: s() ? [...f, ...e] : f
		}));
	}
	Mb(() => {
		o() && o().Root && g(o().Root);
	}), US(() => {
		m.next(), m.complete();
	});
	var b = {
		get entityType() {
			return a();
		},
		set entityType(e) {
			a(e), R();
		},
		get selectedTenant() {
			return o();
		},
		set selectedTenant(e) {
			o(e), R();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), R();
		},
		get onchangeTenant() {
			return c();
		},
		set onchangeTenant(e) {
			c(e), R();
		}
	}, x = cw(), S = V(x), ee = V(S), C = V(ee), te = U(V(C), 2), ne = H(U(V(te), 2), !0);
	N(te), Iv(2), N(C);
	var re = U(C, 2);
	N(ee);
	var ie = U(ee, 2), ae = V(ie);
	DS(ae), Iv(2), N(ie), N(S);
	var oe = U(S, 2), se = (e) => {
		var t = rw();
		QC(V(t), {
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
		}), N(t), Y(e, t);
	}, ce = (e) => {
		Y(e, iw());
	};
	Z(oe, (e) => {
		q(l) ? e(se) : e(ce, -1);
	});
	var le = U(oe, 2), ue = (e) => {
		var t = sw(), n = V(t), r = U(V(n), 2), i = (e) => {
			var t = aw();
			Mx("click", t, () => y()), Y(e, t);
		};
		Z(r, (e) => {
			s() && e(i);
		}), N(n), cS(U(n, 2), 17, () => q(u), (e) => e.id, (e, t) => {
			var n = ow(), r = V(n), i = (e) => {
				nw(e, {
					readonly: !0,
					get checked() {
						return q(p)[q(t).id];
					}
				});
			};
			Z(r, (e) => {
				s() && e(i);
			});
			var a = U(r, 2), o = V(a), c = H(o, !0), l = H(U(o, 2), !0);
			N(a), N(n), W(() => {
				X(c, q(t).name), X(l, q(t).group);
			}), Mx("click", n, () => v(q(t))), Y(e, n);
		}), N(t), Y(e, t);
	};
	return Z(le, (e) => {
		q(u).length > 0 && e(ue);
	}), N(x), W(() => X(ne, o()?.Name ?? "")), Mx("click", C, () => c()?.()), Mx("click", re, () => c()?.()), MS(ae, () => q(d), (e) => B(d, e)), Y(e, x), F(b);
}
Nx(["click"]), $(lw, {
	entityType: {},
	selectedTenant: {},
	selectMultiple: {},
	onchangeTenant: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataCell.svelte
var uw = /* @__PURE__ */ J("<div><!></div>");
function dw(e, t) {
	P(t, !0);
	let n = Q(t, "container$class", 7, ""), r = Q(t, "children", 7);
	var i = {
		get container$class() {
			return n();
		},
		set container$class(e = "") {
			n(e), R();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), R();
		}
	}, a = uw();
	return mS(V(a), () => r() ?? Z_), N(a), W(() => xS(a, 1, `overflow-hidden ${n() ?? ""}`)), Y(e, a), F(i);
}
$(dw, {
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/DataRow.svelte
var fw = /* @__PURE__ */ J("<div><!></div>"), pw = {
	hash: "svelte-1f6rjo1",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tablebody-flexrow {display:flex;height:38px;width:100%;min-width:fit-content;cursor:pointer;border-bottom:1px solid var(--color-row-line);font-size:var(--text-cell);color:var(--color-ink);}.audako-tablebody-flexrow:hover {background:var(--color-row-hover);}.audako-tablebody-flexrow-active,\n  .audako-tablebody-flexrow-active:hover {background:var(--color-row-active);}.audako-tablebody-flexrow-blocked,\n  .audako-tablebody-flexrow-blocked:hover {background:var(--color-danger-tint);color:var(--color-danger);cursor:default;}.audako-tablebody-flexrow > * {flex:1;height:100%;min-width:0;display:flex;align-items:center;}.audako-tablebody-flexrow > * + * {padding-left:12px;}.audako-tablebody-flexrow > *:first-child {padding-left:16px;}.audako-tablebody-flexrow > *:last-child {padding-right:16px;}"
};
function mw(e, t) {
	P(t, !0), hS(e, pw);
	let n = Q(t, "active", 7, !1), r = Q(t, "blocked", 7, !1), i = Q(t, "flexrow$class", 7, ""), a = Q(t, "onclick", 7), o = Q(t, "children", 7);
	function s(e) {
		r() || a()?.(e);
	}
	var c = {
		get active() {
			return n();
		},
		set active(e = !1) {
			n(e), R();
		},
		get blocked() {
			return r();
		},
		set blocked(e = !1) {
			r(e), R();
		},
		get flexrow$class() {
			return i();
		},
		set flexrow$class(e = "") {
			i(e), R();
		},
		get onclick() {
			return a();
		},
		set onclick(e) {
			a(e), R();
		},
		get children() {
			return o();
		},
		set children(e) {
			o(e), R();
		}
	}, l = fw();
	let u;
	return mS(V(l), () => o() ?? Z_), N(l), W(() => u = xS(l, 1, `audako-tablebody-flexrow ${i() ?? ""}`, null, u, {
		"audako-tablebody-flexrow-active": n() && !r(),
		"audako-tablebody-flexrow-blocked": r()
	})), Mx("click", l, (e) => s(e)), Y(e, l), F(c);
}
Nx(["click"]), $(mw, {
	active: {},
	blocked: {},
	flexrow$class: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderCell.svelte
var hw = /* @__PURE__ */ J("<span> </span>"), gw = /* @__PURE__ */ J("<div><div class=\"min-w-0 truncate\"><!></div> <!></div>");
function _w(e, t) {
	P(t, !0);
	let n = Q(t, "id", 7), r = Q(t, "sortable", 7, !1), i = Q(t, "container$class", 7, ""), a = Q(t, "children", 7), o = /* @__PURE__ */ z(null), s = ay("audako:table:sort"), c = s.subscribe((e) => {
		B(o, n() && e?.active === n() ? e.direction : null, !0);
	});
	function l() {
		r() && (q(o) === "asc" ? B(o, "desc") : q(o) === "desc" ? B(o, null) : B(o, "asc"), s.set(q(o) ? {
			active: n(),
			direction: q(o)
		} : null));
	}
	US(c);
	var u = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), R();
		},
		get sortable() {
			return r();
		},
		set sortable(e = !1) {
			r(e), R();
		},
		get container$class() {
			return i();
		},
		set container$class(e = "") {
			i(e), R();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), R();
		}
	}, d = gw(), f = V(d);
	mS(V(f), () => a() ?? Z_), N(f);
	var p = U(f, 2), m = (e) => {
		var t = hw();
		let n;
		var r = H(t, !0);
		W(() => {
			n = xS(t, 1, "material-symbols-rounded text-[14px] transition-opacity", null, n, { "opacity-0": q(o) == null }), X(r, q(o) === "desc" ? "arrow_downward" : "arrow_upward");
		}), Y(e, t);
	};
	return Z(p, (e) => {
		r() && e(m);
	}), N(d), W(() => xS(d, 1, `flex h-full items-center gap-1 ${r() ? "cursor-pointer" : "cursor-default"} ${i() ?? ""}`)), Mx("click", d, () => l()), Y(e, d), F(u);
}
Nx(["click"]), $(_w, {
	id: {},
	sortable: {},
	container$class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/HeaderRow.svelte
var vw = /* @__PURE__ */ J("<div class=\"audako-tableheader-flexrow\"><!></div>"), yw = {
	hash: "svelte-11mz2do",
	code: "\n/* svelte-preprocess supported <style global>; vitePreprocess does not, so\n   these table layout rules must be explicitly global - the > * selectors\n   target cells rendered by HeaderCell/DataCell, which carry a different\n   scoping hash. */.audako-tableheader-flexrow {display:flex;height:40px;min-width:fit-content;position:sticky;top:0;z-index:1;background:var(--color-surface);border-bottom:1px solid var(--color-line);font-size:var(--text-cell);color:var(--color-ink-secondary);}.audako-tableheader-flexrow > * {flex:1;height:100%;min-width:0;display:flex;align-items:center;}\n\n  /* The vertical rules between header cells are what make the header read\n     like the production table. */.audako-tableheader-flexrow > * + * {padding-left:12px;border-left:1px solid var(--color-line);}.audako-tableheader-flexrow > *:first-child {padding-left:16px;}.audako-tableheader-flexrow > *:last-child {padding-right:16px;}"
};
function bw(e, t) {
	P(t, !0), hS(e, yw);
	let n = Q(t, "children", 7);
	var r = {
		get children() {
			return n();
		},
		set children(e) {
			n(e), R();
		}
	}, i = vw();
	return mS(V(i), () => n() ?? Z_), N(i), Y(e, i), F(r);
}
$(bw, { children: {} }, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/popup-container/PopupContainer.svelte
var xw = /* @__PURE__ */ J("<div class=\"popup-element-wrapper\" style=\"position: absolute\"><div style=\"display: none\"><!></div></div>");
function Sw(e, t) {
	P(t, !0);
	let n = Q(t, "closeOnClick", 7, !0), r = Q(t, "closeOnEscape", 7, !0), i = Q(t, "sizeToAnchor", 7, !1), a = Q(t, "anchorElement", 7, null), o = Q(t, "position", 7, null), s = Q(t, "popupClass", 7, ""), c = Q(t, "preferedVerticalAlignment", 7, "top"), l = Q(t, "preferedHorizontalAlignment", 7, "left"), u = Q(t, "positionOffset", 23, () => ({
		x: 0,
		y: 0
	})), d = Q(t, "children", 7), f = nC("PopupContainerService", new eC(document.body)), p, m, h;
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
			n(e), R();
		},
		get closeOnEscape() {
			return r();
		},
		set closeOnEscape(e = !0) {
			r(e), R();
		},
		get sizeToAnchor() {
			return i();
		},
		set sizeToAnchor(e = !1) {
			i(e), R();
		},
		get anchorElement() {
			return a();
		},
		set anchorElement(e = null) {
			a(e), R();
		},
		get position() {
			return o();
		},
		set position(e = null) {
			o(e), R();
		},
		get popupClass() {
			return s();
		},
		set popupClass(e = "") {
			s(e), R();
		},
		get preferedVerticalAlignment() {
			return c();
		},
		set preferedVerticalAlignment(e = "top") {
			c(e), R();
		},
		get preferedHorizontalAlignment() {
			return l();
		},
		set preferedHorizontalAlignment(e = "left") {
			l(e), R();
		},
		get positionOffset() {
			return u();
		},
		set positionOffset(e = {
			x: 0,
			y: 0
		}) {
			u(e), R();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), R();
		}
	}, b = xw(), x = V(b);
	return mS(V(x), () => d() ?? Z_), N(x), IS(x, (e) => p = e, () => p), N(b), IS(b, (e) => h = e, () => h), W(() => xS(x, 1, `absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${s() ?? ""}`)), Y(e, b), F(y);
}
$(Sw, {
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
var Cw = /* @__PURE__ */ J("<div class=\"absolute left-0 top-[50%] h-[20px] w-[3px] translate-y-[-50%] rounded-full bg-primary\"></div>"), ww = /* @__PURE__ */ J("<div><!> <!> <span><!></span></div>");
function Tw(e, t) {
	P(t, !0);
	let n = Q(t, "value", 7, null), r = Q(t, "children", 7), i = /* @__PURE__ */ z(!1), a = null, o = null, s, c, l = ay("audako:select:multiple"), u = ay("audako:select:close"), d = ay("audako:select:value"), f = ay("audako:select:value:changed"), p = ay("audako:select:displayValue");
	HS(() => {
		c = s.innerText?.trim(), p.subscribe((e) => {
			o = e;
		}), d.subscribe((e) => {
			a = e, l ? B(i, e?.includes(n()), !0) : B(i, e === n()), h();
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
			n(e), R();
		},
		get children() {
			return r();
		},
		set children(e) {
			r(e), R();
		}
	}, _ = ww(), v = V(_), y = (e) => {
		Y(e, Cw());
	};
	Z(v, (e) => {
		q(i) && !l && e(y);
	});
	var b = U(v, 2), x = (e) => {
		nw(e, {
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
	return mS(V(S), () => r() ?? Z_), N(S), IS(S, (e) => s = e, () => s), N(_), W(() => xS(_, 1, `relative flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-2 text-cell hover:bg-neutral-hover ${q(i) && !l ? "bg-neutral-hover" : ""}`)), Mx("click", _, m), Y(e, _), F(g);
}
Nx(["click"]), $(Tw, {
	value: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/select/Select.svelte
var Ew = /* @__PURE__ */ J("<!> <!>", 1), Dw = /* @__PURE__ */ J("<div><!> <input readonly=\"\"/> <div>arrow_drop_down</div></div> <!>", 1);
function Ow(e, t) {
	P(t, !0);
	let n = Q(t, "value", 15, null), r = Q(t, "multiple", 7, !1), i = Q(t, "placeholder", 7, null), a = Q(t, "textfield$class", 7, ""), o = Q(t, "container$class", 7, ""), s = Q(t, "suffixIcon$class", 7, ""), c = Q(t, "options", 23, () => []), l = Q(t, "disabled", 7, !1), u = Q(t, "onvalueChanged", 7), d = Q(t, "children", 7), f = Q(t, "prefix", 7), p = /* @__PURE__ */ z(""), m = /* @__PURE__ */ z(null), h, g = yy(n()), _ = g.subscribe((e) => {
		n(e);
	}), v = new Mi(), y = v.subscribe((e) => {
		u()?.(e);
	}), b = yy(r() ? [] : ""), x = b.subscribe((e) => {
		ee(e);
	});
	function S(e) {
		e && (e.preventDefault(), e.stopPropagation()), !l() && h?.openPopup();
	}
	function ee(e) {
		if (e == null || e.length === 0) {
			B(p, null);
			return;
		}
		Array.isArray(e) ? B(p, e.join(", "), !0) : B(p, e, !0);
	}
	oy("audako:select:multiple", r()), oy("audako:select:value", g), oy("audako:select:value:changed", v), oy("audako:select:displayValue", b), oy("audako:select:close", () => h.closePopup()), US(() => {
		_(), y.unsubscribe(), x();
	});
	var C = {
		get value() {
			return n();
		},
		set value(e = null) {
			n(e), R();
		},
		get multiple() {
			return r();
		},
		set multiple(e = !1) {
			r(e), R();
		},
		get placeholder() {
			return i();
		},
		set placeholder(e = null) {
			i(e), R();
		},
		get textfield$class() {
			return a();
		},
		set textfield$class(e = "") {
			a(e), R();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), R();
		},
		get suffixIcon$class() {
			return s();
		},
		set suffixIcon$class(e = "") {
			s(e), R();
		},
		get options() {
			return c();
		},
		set options(e = []) {
			c(e), R();
		},
		get disabled() {
			return l();
		},
		set disabled(e = !1) {
			l(e), R();
		},
		get onvalueChanged() {
			return u();
		},
		set onvalueChanged(e) {
			u(e), R();
		},
		get children() {
			return d();
		},
		set children(e) {
			d(e), R();
		},
		get prefix() {
			return f();
		},
		set prefix(e) {
			f(e), R();
		}
	}, te = Dw(), ne = bb(te), re = V(ne);
	mS(re, () => f() ?? Z_);
	var ie = U(re, 2);
	DS(ie), IS(ie, (e) => B(m, e), () => q(m));
	var ae = U(ie, 2);
	return N(ne), IS(Sw(U(ne, 2), {
		sizeToAnchor: !0,
		popupClass: "max-h-[400px] ",
		get anchorElement() {
			return q(m);
		},
		children: (e, t) => {
			var n = Ew(), r = bb(n);
			mS(r, () => d() ?? Z_), cS(U(r, 2), 17, c, iS, (e, t) => {
				Tw(e, {
					get value() {
						return q(t).value;
					},
					children: (e, n) => {
						Iv();
						var r = Vx();
						W(() => X(r, q(t).label)), Y(e, r);
					},
					$$slots: { default: !0 }
				});
			}), Y(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => h = e, () => h), W(() => {
		xS(ne, 1, `relative flex w-full cursor-pointer items-center rounded-control border border-line px-2 text-cell text-ink transition-colors focus-within:border-primary ${o() ?? ""}`), ie.disabled = l(), OS(ie, "placeholder", i()), xS(ie, 1, `w-full outline-none cursor-pointer ${a() ?? ""}`), xS(ae, 1, `material-symbols-rounded pointer-events-none select-none text-[16px] text-ink-secondary ${s() ?? ""}`);
	}), Mx("click", ne, S), MS(ie, () => q(p), (e) => B(p, e)), Y(e, te), F(C);
}
Nx(["click"]), $(Ow, {
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
var kw = /* @__PURE__ */ J("<div><span class=\"material-symbols-rounded select-none text-[18px]\"> </span></div>"), Aw = /* @__PURE__ */ J("<div class=\"flex h-[44px] w-full items-center justify-end gap-[10px] text-[13px] text-ink-secondary\"><div>Zeilen</div> <div class=\"w-[70px]\"><!></div> <div class=\"whitespace-nowrap\"> </div> <div class=\"flex h-[30px] items-stretch overflow-hidden rounded-control border border-line\"><!> <!> <!> <!></div></div>");
function jw(e, t) {
	P(t, !0);
	let n = Q(t, "pageIndex", 15, 0), r = Q(t, "pageSize", 15, 25), i = Q(t, "totalCount", 7), a = Q(t, "pageSizeOptions", 23, () => [
		25,
		50,
		100
	]), o = Q(t, "onchangePage", 7), s = /* @__PURE__ */ I(() => Math.max(Math.ceil(i() / r()) - 1, 0)), c = /* @__PURE__ */ I(() => i() === 0 ? 0 : n() * r() + 1), l = /* @__PURE__ */ I(() => Math.min((n() + 1) * r(), i())), u = /* @__PURE__ */ I(() => n() === 0), d = /* @__PURE__ */ I(() => n() >= q(s));
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
			n(e), R();
		},
		get pageSize() {
			return r();
		},
		set pageSize(e = 25) {
			r(e), R();
		},
		get totalCount() {
			return i();
		},
		set totalCount(e) {
			i(e), R();
		},
		get pageSizeOptions() {
			return a();
		},
		set pageSizeOptions(e = [
			25,
			50,
			100
		]) {
			a(e), R();
		},
		get onchangePage() {
			return o();
		},
		set onchangePage(e) {
			o(e), R();
		}
	}, _ = Aw(), v = U(V(_), 2);
	Ow(V(v), {
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
			var n = Hx();
			cS(bb(n), 17, a, iS, (e, t) => {
				Tw(e, {
					get value() {
						return q(t);
					},
					children: (e, n) => {
						Iv();
						var r = Vx();
						W(() => X(r, q(t))), Y(e, r);
					},
					$$slots: { default: !0 }
				});
			}), Y(e, n);
		},
		$$slots: { default: !0 }
	}), N(v);
	var y = U(v, 2), b = H(y), x = U(y, 2);
	{
		let e = (e, t = Z_, n = Z_, r = Z_) => {
			var i = kw();
			let a;
			var o = H(V(i), !0);
			N(i), W(() => {
				a = xS(i, 1, "flex w-[34px] items-center justify-center border-l border-row-line first:border-l-0 transition-colors", null, a, {
					"cursor-pointer": !n(),
					"cursor-default": n(),
					"text-ink-secondary": !n(),
					"text-ink-disabled": n(),
					"hover:bg-neutral-hover": !n()
				}), X(o, t());
			}), Mx("click", i, () => !n() && r()()), Y(e, i);
		};
		var S = V(x);
		e(S, () => "first_page", () => q(u), () => () => p(0));
		var ee = U(S, 2);
		e(ee, () => "navigate_before", () => q(u), () => () => f(-1));
		var C = U(ee, 2);
		e(C, () => "navigate_next", () => q(d), () => () => f(1)), e(U(C, 2), () => "last_page", () => q(d), () => () => p(q(s))), N(x);
	}
	return N(_), W(() => X(b, `${q(c) ?? ""} - ${q(l) ?? ""} / ${i() ?? ""}`)), Y(e, _), F(g);
}
Nx(["click"]), $(jw, {
	pageIndex: {},
	pageSize: {},
	totalCount: {},
	pageSizeOptions: {},
	onchangePage: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/table/Table.svelte
var Mw = /* @__PURE__ */ J("<div class=\"flex h-full flex-col\"><div><!></div> <!></div>");
function Nw(e, t) {
	P(t, !0);
	let n = Q(t, "startSort", 7, null), r = Q(t, "container$class", 7, ""), i = Q(t, "onsort", 7), a = Q(t, "children", 7), o = Q(t, "pagination", 7), s = yy(n());
	oy("audako:table:sort", s), US(s.subscribe((e) => {
		i()?.(e);
	}));
	var c = {
		get startSort() {
			return n();
		},
		set startSort(e = null) {
			n(e), R();
		},
		get container$class() {
			return r();
		},
		set container$class(e = "") {
			r(e), R();
		},
		get onsort() {
			return i();
		},
		set onsort(e) {
			i(e), R();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), R();
		},
		get pagination() {
			return o();
		},
		set pagination(e) {
			o(e), R();
		}
	}, l = Mw(), u = V(l);
	return mS(V(u), () => a() ?? Z_), N(u), mS(U(u, 2), () => o() ?? Z_), N(l), W(() => xS(u, 1, `relative w-full flex-1 overflow-auto rounded-dialog border border-line bg-surface ${r() ?? ""}`)), Y(e, l), F(c);
}
$(Nw, {
	startSort: {},
	container$class: {},
	onsort: {},
	children: {},
	pagination: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/value-view/Led.svelte
var Pw = /* @__PURE__ */ J("<div class=\"shrink-0 rounded-full\"></div>");
function Fw(e, t) {
	P(t, !0);
	let n = Q(t, "color", 7, "#c1c1c1"), r = Q(t, "size", 7, "14px"), i = Q(t, "title", 7, null);
	var a = {
		get color() {
			return n();
		},
		set color(e = "#c1c1c1") {
			n(e), R();
		},
		get size() {
			return r();
		},
		set size(e = "14px") {
			r(e), R();
		},
		get title() {
			return i();
		},
		set title(e = null) {
			i(e), R();
		}
	}, o = Pw();
	return W(() => {
		OS(o, "title", i()), CS(o, `height: ${r() ?? ""}; width: ${r() ?? ""}; background-color: ${(n() || "#c1c1c1") ?? ""}; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 12px inset;`);
	}), Y(e, o), F(a);
}
$(Fw, {
	color: {},
	size: {},
	title: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/value-view/ValueView.svelte
var Iw = /* @__PURE__ */ J("<span class=\"material-symbols-rounded select-none text-[18px] text-danger\" title=\"Keine Werte verfügbar\">warning</span>"), Lw = /* @__PURE__ */ J("<span class=\"truncate\"> </span>");
function Rw(e, t) {
	P(t, !0);
	let n = Q(t, "settings", 7, null), r = Q(t, "value", 7, null), i = Q(t, "ledSize", 7, "14px"), a = /* @__PURE__ */ I(() => r() != null && r().value !== null && r().value !== void 0 && r().value !== "null" && r().value !== ""), o = /* @__PURE__ */ I(() => q(a) ? Number(r().value) : NaN), s = /* @__PURE__ */ I(() => r()?.timestamp ? new Date(r().timestamp).toLocaleString("de-DE", {
		dateStyle: "medium",
		timeStyle: "medium"
	}) : null), c = /* @__PURE__ */ I(() => {
		if (!Number.isFinite(q(o))) return String(r()?.value ?? "");
		let e = n()?.decimalPlaces ?? 3;
		return q(o).toLocaleString("de-DE", {
			minimumFractionDigits: e,
			maximumFractionDigits: e
		});
	}), l = /* @__PURE__ */ I(() => Number.isFinite(q(o)) && q(o) >= 1);
	var u = {
		get settings() {
			return n();
		},
		set settings(e = null) {
			n(e), R();
		},
		get value() {
			return r();
		},
		set value(e = null) {
			r(e), R();
		},
		get ledSize() {
			return i();
		},
		set ledSize(e = "14px") {
			i(e), R();
		}
	}, d = Hx(), f = bb(d), p = (e) => {
		var t = Hx(), o = bb(t), u = (e) => {
			Y(e, Iw());
		}, d = (e) => {
			{
				let t = /* @__PURE__ */ I(() => q(l) ? n().ledOnColor : n().ledOffColor), r = /* @__PURE__ */ I(() => (q(l) ? n().ledOnCaption : n().ledOffCaption) || q(s));
				Fw(e, {
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
			var t = Lw(), r = H(t);
			W(() => {
				OS(t, "title", q(s)), X(r, `${q(c) ?? ""}${n().unit ? ` ${n().unit}` : ""}`);
			}), Y(e, t);
		}, p = (e) => {
			var t = Lw(), n = H(t, !0);
			W(() => {
				OS(t, "title", q(s)), X(n, r().value);
			}), Y(e, t);
		};
		Z(o, (e) => {
			q(a) ? n().viewType === "led" ? e(d, 1) : n().viewType === "number" ? e(f, 2) : e(p, -1) : e(u);
		}), Y(e, t);
	};
	return Z(f, (e) => {
		n() && r() && e(p);
	}), Y(e, d), F(u);
}
$(Rw, {
	settings: {},
	value: {},
	ledSize: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/value-view/value-view.types.ts
var zw = [ut.AnalogInput, ut.AnalogInOut], Bw = [ut.DigitalInput, ut.DigitalInOut];
function Vw(e) {
	let t = e, n = t?.Type?.Value;
	if (zw.includes(n) || n === ut.Counter) {
		let e = t.Settings;
		return {
			viewType: "number",
			decimalPlaces: e?.DecimalPlaces?.Value ?? 0,
			unit: e?.Unit?.Value ?? null
		};
	}
	if (Bw.includes(n)) {
		let e = t.Settings;
		return {
			viewType: "led",
			ledOnCaption: e?.DigitalTrueCaption?.Value ?? null,
			ledOffCaption: e?.DigitalFalseCaption?.Value ?? null,
			ledOnColor: e?.DigitalTrueColor?.Value ?? null,
			ledOffColor: e?.DigitalFalseColor?.Value ?? null
		};
	}
	return { viewType: "text" };
}
//#endregion
//#region src/components/entity-select/signal-format.ts
var Hw = {
	[ut.AnalogInput]: "Analog",
	[ut.AnalogInOut]: "Analog E/A",
	[ut.DigitalInput]: "Digital",
	[ut.DigitalInOut]: "Digital E/A",
	[ut.Counter]: "Zähler",
	[ut.UniversalInput]: "Universal",
	[ut.UniversalInOut]: "Universal E/A"
};
function Uw(e) {
	let t = e?.Type?.Value;
	return t ? Hw[t] ?? t : "";
}
//#endregion
//#region src/components/entity-select/EntitySelectTable.svelte
var Ww = /* @__PURE__ */ J("<!> <!>", 1), Gw = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), Kw = /* @__PURE__ */ J("<div class=\"audako-indeterminate-bar h-full w-full bg-primary\"></div>"), qw = /* @__PURE__ */ J("<div class=\"truncate\"> </div>"), Jw = /* @__PURE__ */ J("<span class=\"truncate\"><!></span>"), Yw = /* @__PURE__ */ J("<span class=\"truncate\"> </span>"), Xw = /* @__PURE__ */ J("<button type=\"button\" class=\"cursor-pointer text-meta text-primary hover:underline\">Filter zurücksetzen</button>"), Zw = /* @__PURE__ */ J("<div class=\"flex flex-col items-center gap-2 py-10\"><span class=\"material-symbols-rounded select-none text-[24px] text-ink-tertiary\">search_off</span> <div class=\"text-cell text-ink-secondary\"> </div> <!></div>"), Qw = /* @__PURE__ */ J("<!> <div><!></div> <!> <!>", 1), $w = /* @__PURE__ */ J("<div class=\"flex h-full flex-col overflow-hidden\"><!></div>");
function eT(e, t) {
	P(t, !0);
	let n = nC(Ru), i = nC(Vu), a = rC(rf), o = Q(t, "entityType", 7), s = Q(t, "selectMultiple", 7, !1), c = Q(t, "additionalFilter", 7, null), l = Q(t, "totalCount", 15, 0), u = /* @__PURE__ */ z(db([])), d = new Mi(), f = [], p = /* @__PURE__ */ z(db({})), m = /* @__PURE__ */ z("unchecked"), h = /* @__PURE__ */ z(null), g, _, v = !1, y = /* @__PURE__ */ z(0), b = /* @__PURE__ */ z(25), x = /* @__PURE__ */ z(null), S = JC(o()), ee = qC, C = !1, te = /* @__PURE__ */ z(!0), ne = /* @__PURE__ */ z(db({})), re, ie = new Mi(), ae = /* @__PURE__ */ I(() => wC(o())), oe = /* @__PURE__ */ I(() => o() === r.Signal), se = /* @__PURE__ */ I(() => {
		if (q(x)?.active !== "Name") return q(u);
		let e = q(x).direction === "desc" ? -1 : 1;
		return [...q(u)].sort((t, n) => e * (t.Name?.Value ?? "").localeCompare(n.Name?.Value ?? "", "de", { sensitivity: "base" }));
	});
	KC.pipe(lo(ie)).subscribe((e) => {
		f = e.selectedEntities, pe(), de();
	}), za([ee.asObservable(), S.asObservable()]).pipe(lo(ie)).subscribe(([e, t]) => {
		_ = t.selectedGroup, g = t.selectedGroup?.Id, B(h, t.filter, !0), v = e.queryWithSubGroups, C = !0, B(y, 0), B(b, e.pageSize ?? 25, !0), d.next();
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
		return Sa(n.queryConfiguration(o(), e, t));
	}
	function le(e) {
		s() ? (f.find((t) => t.Id === e.Id) ? (f = f.filter((t) => t.Id !== e.Id), q(p)[e.Id] = !1) : (f.push(e), q(p)[e.Id] = !0), de()) : f = [e], KC.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function ue(e) {
		f = e ? [...f, ...q(u).filter((e) => !q(p)[e.Id])] : f.filter((e) => !q(u).find((t) => t.Id === e.Id)), pe(), de(), KC.update((e) => ({
			...e,
			selectedEntities: f
		}));
	}
	function de() {
		let e = Object.keys(q(p)).filter((e) => q(p)[e]);
		e.length === 0 ? B(m, "unchecked") : e.length === q(u).length ? B(m, "checked") : B(m, "indeterminate");
	}
	function fe(e) {
		e.pageSize == q(b) ? B(y, e.pageIndex, !0) : (B(y, 0), B(b, e.pageSize, !0));
	}
	function pe() {
		B(p, {}, !0), q(u).forEach((e) => {
			q(p)[e.Id] = f.find((t) => t.Id === e.Id) != null;
		});
	}
	async function w(e) {
		if (re?.unsubscribe(), B(ne, {}, !0), !a || o() !== r.Signal || e.length === 0) return;
		let t = e.map((e) => e.Id);
		try {
			await a.connect();
		} catch (e) {
			console.error(e);
			return;
		}
		re = a.subscribeToSignalValues(t).pipe(lo(ie)).subscribe((e) => {
			let t = { ...q(ne) };
			for (let n of e) t[n.identifier.replace("S:", "")] = {
				value: n.value,
				timestamp: n.timestamp
			};
			B(ne, t, !0);
		});
	}
	function me() {
		S.update((e) => ({
			...e,
			filter: null
		}));
	}
	Mb(() => {
		q(y), d.next();
	}), Mb(() => {
		ee.update((e) => ({
			...e,
			pageSize: q(b)
		}));
	}), US(() => {
		re?.unsubscribe(), ie.next(), ie.complete();
	}), d.pipe(lo(ie), Ja(() => C && !!g), mo(250), fo(() => B(te, !0)), co(() => ce())).subscribe((e) => {
		B(te, !1), B(u, e.data, !0), pe(), de(), o() === r.Group && q(u).unshift(_), l(e.total), w(q(u));
	});
	var he = {
		get entityType() {
			return o();
		},
		set entityType(e) {
			o(e), R();
		},
		get selectMultiple() {
			return s();
		},
		set selectMultiple(e = !1) {
			s(e), R();
		},
		get additionalFilter() {
			return c();
		},
		set additionalFilter(e = null) {
			c(e), R();
		},
		get totalCount() {
			return l();
		},
		set totalCount(e = 0) {
			l(e), R();
		}
	}, ge = $w();
	return Nw(V(ge), {
		startSort: {
			active: "Name",
			direction: "asc"
		},
		onsort: (e) => B(x, e, !0),
		pagination: (e) => {
			jw(e, {
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
			var n = Qw(), a = bb(n);
			bw(a, {
				children: (e, t) => {
					var n = Gw(), r = bb(n), i = (e) => {
						_w(e, {
							container$class: "!flex-none w-[46px]",
							id: "select",
							children: (e, t) => {
								{
									let t = /* @__PURE__ */ I(() => q(m) === "checked"), n = /* @__PURE__ */ I(() => q(m) === "indeterminate");
									nw(e, {
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
					_w(a, {
						container$class: "flex-1 min-w-[160px]",
						id: "Name",
						sortable: !0,
						children: (e, t) => {
							Iv(), Y(e, Vx("Name"));
						},
						$$slots: { default: !0 }
					});
					var o = U(a, 2);
					_w(o, {
						container$class: "!flex-none w-[200px]",
						id: "Group",
						children: (e, t) => {
							Iv(), Y(e, Vx("Gruppe"));
						},
						$$slots: { default: !0 }
					});
					var c = U(o, 2), l = (e) => {
						var t = Ww(), n = bb(t);
						_w(n, {
							container$class: "!flex-none w-[110px]",
							id: "Type",
							children: (e, t) => {
								Iv(), Y(e, Vx("Typ"));
							},
							$$slots: { default: !0 }
						}), _w(U(n, 2), {
							container$class: "!flex-none w-[120px]",
							id: "Value",
							children: (e, t) => {
								Iv(), Y(e, Vx("Signalwert"));
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
			var o = U(a, 2), c = V(o), l = (e) => {
				Y(e, Kw());
			};
			Z(c, (e) => {
				q(te) && e(l);
			}), N(o);
			var d = U(o, 2);
			cS(d, 17, () => q(se), (e) => e.Id, (e, t) => {
				mw(e, {
					onclick: () => le(q(t)),
					children: (e, n) => {
						var a = Gw(), o = bb(a), c = (e) => {
							dw(e, {
								container$class: "!flex-none w-[46px]",
								children: (e, n) => {
									nw(e, {
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
						dw(l, {
							container$class: "flex-1 min-w-[160px]",
							children: (e, n) => {
								var r = qw(), i = H(r, !0);
								W(() => X(i, q(t).Name?.Value)), Y(e, r);
							},
							$$slots: { default: !0 }
						});
						var u = U(l, 2);
						dw(u, {
							container$class: "!flex-none w-[200px] text-ink-secondary",
							children: (e, n) => {
								var a = Jw();
								rS(V(a), () => i.resolveName(r.Group, q(t).GroupId), null, (e, t) => {
									var n = Vx();
									W(() => X(n, q(t) ?? "")), Y(e, n);
								}), N(a), Y(e, a);
							},
							$$slots: { default: !0 }
						});
						var d = U(u, 2), f = (e) => {
							var n = Ww(), r = bb(n);
							dw(r, {
								container$class: "!flex-none w-[110px] text-ink-secondary",
								children: (e, n) => {
									var r = Yw(), i = H(r, !0);
									W((e) => X(i, e), [() => Uw(q(t))]), Y(e, r);
								},
								$$slots: { default: !0 }
							}), dw(U(r, 2), {
								container$class: "!flex-none w-[120px]",
								children: (e, n) => {
									{
										let n = /* @__PURE__ */ I(() => Vw(q(t)));
										Rw(e, {
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
				var t = Zw(), n = U(V(t), 2), r = H(n), i = U(n, 2), a = (e) => {
					var t = Xw();
					Mx("click", t, () => me()), Y(e, t);
				};
				Z(i, (e) => {
					q(h) && e(a);
				}), N(t), W(() => X(r, `Keine ${q(ae).plural ?? ""} für diese Filter`)), Y(e, t);
			};
			Z(f, (e) => {
				!q(te) && q(u).length === 0 && e(g);
			}), W(() => xS(o, 1, `sticky top-10 z-[1] h-[2px] w-full overflow-hidden ${q(te) ? "bg-primary-tint" : ""}`)), Y(e, n);
		},
		$$slots: {
			pagination: !0,
			default: !0
		}
	}), N(ge), Y(e, ge), F(he);
}
Nx(["click"]), $(eT, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	totalCount: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectToolbar.svelte
var tT = /* @__PURE__ */ J("<div class=\"mb-[10px] flex items-center gap-3\"><div class=\"flex-none text-section text-ink\"> </div> <div class=\"flex h-10 min-w-[120px] flex-1 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary\"><input placeholder=\"Filter\" class=\"w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary\"/> <span class=\"material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary\">search</span></div> <!> <!></div>");
function nT(e, t) {
	P(t, !0);
	let n = Q(t, "entityType", 7), r = Q(t, "totalCount", 7, 0), i = Q(t, "filterControl", 7), a = JC(n()), o = /* @__PURE__ */ z(!1), s = /* @__PURE__ */ z(db(a.value.filter)), c, l = new Mi(), u = new Mi();
	qC.pipe(lo(l)).subscribe((e) => {
		B(o, e.queryWithSubGroups, !0);
	}), u.pipe(lo(l), Qa(200)).subscribe((e) => {
		a.update((t) => ({
			...t,
			filter: e
		}));
	}), Mb(() => {
		u.next(q(s));
	});
	function d() {
		qC.update((e) => ({
			...e,
			queryWithSubGroups: !e.queryWithSubGroups
		}));
	}
	HS(() => {
		setTimeout(() => {
			c?.focus(), c?.select();
		}, 0);
	}), US(() => {
		l.next(), l.complete();
	});
	var f = {
		get entityType() {
			return n();
		},
		set entityType(e) {
			n(e), R();
		},
		get totalCount() {
			return r();
		},
		set totalCount(e = 0) {
			r(e), R();
		},
		get filterControl() {
			return i();
		},
		set filterControl(e) {
			i(e), R();
		}
	}, p = tT(), m = V(p), h = H(m), g = U(m, 2), _ = V(g);
	DS(_), IS(_, (e) => c = e, () => c), Iv(2), N(g);
	var v = U(g, 2);
	mS(v, () => i() ?? Z_);
	var y = U(v, 2);
	{
		let e = /* @__PURE__ */ I(() => q(o) ? "primary" : "neutral"), t = /* @__PURE__ */ I(() => q(o) ? "Untergruppen einbezogen" : "Nur diese Gruppe");
		sC(y, {
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
	return N(p), W(() => X(h, `Einträge gesamt: ${r() ?? ""}`)), MS(_, () => q(s), (e) => B(s, e)), Y(e, p), F(f);
}
$(nT, {
	entityType: {},
	totalCount: {},
	filterControl: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelect.svelte
var rT = /* @__PURE__ */ J("<!> <div class=\"flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-5 py-[14px]\"><!> <div class=\"min-h-0 flex-1\"><!></div></div>", 1), iT = /* @__PURE__ */ J("<button type=\"button\" class=\"flex h-9 cursor-pointer items-center gap-2 rounded-button bg-primary px-4 text-cell font-medium text-on-primary transition-colors hover:bg-primary-hover\"><span class=\"material-symbols-rounded select-none text-[18px]\">check</span> Übernehmen</button>"), aT = /* @__PURE__ */ J("<div class=\"flex h-full max-h-full min-h-0 w-full flex-col overflow-hidden bg-surface\"><div class=\"flex flex-none items-center gap-3 border-b border-line py-3 pl-[18px] pr-3\"><div class=\"flex h-10 w-10 flex-none items-center justify-center rounded-dialog bg-primary-tint\"><span class=\"material-symbols-rounded select-none text-[20px] text-primary\"> </span></div> <div class=\"flex-1 truncate text-dialog-title text-ink\"> </div> <!></div> <div class=\"flex min-h-0 flex-1 overflow-hidden\"><!></div> <div class=\"flex flex-none items-center gap-3 border-t border-line px-[18px] py-3\"><div class=\"flex-1 text-count text-ink-secondary\"><!></div> <button type=\"button\" class=\"h-9 cursor-pointer rounded-button border border-line px-4 text-cell font-medium text-ink transition-colors hover:bg-neutral-hover\">Abbrechen</button> <!></div></div>");
function oT(e, t) {
	P(t, !0);
	let n = Q(t, "entityType", 23, () => r.Signal), i = Q(t, "selectMultiple", 7, !1), a = Q(t, "additionalFilter", 7, null), o = Q(t, "onselectedEntities", 7), s = Q(t, "onclose", 7), c = nC(Ru), l = nC(zu), u = /* @__PURE__ */ z(void 0), d = /* @__PURE__ */ z(!1), f = /* @__PURE__ */ z(0), p = /* @__PURE__ */ z(0), m = [], h = /* @__PURE__ */ I(() => wC(n())), g = qC.subscribe((e) => {
		e.selectedTenant ? (B(d, !1), y(e.selectedTenant)) : B(d, !0);
	}), _ = KC.subscribe((e) => {
		m = e.selectedEntities ?? [], B(p, m.length, !0), e.selectedEntities && !i() && (v(e.selectedEntities), o()?.(e.selectedEntities[0]));
	});
	function v(e) {
		let t = JC(n()), r = t.value.lastSelectedEntities, i = e.filter((e) => !r.includes(e.Id)).map((e) => e.Id);
		r.unshift(...i), r.splice(5), t.update((e) => ({
			...e,
			lastSelectedEntities: r
		}));
	}
	async function y(e) {
		try {
			B(u, await l.getTenantViewById(e), !0);
		} catch (e) {
			console.error(e), B(d, !0);
		}
	}
	async function b(e) {
		let t = await c.getEntityById(r.Group, e.Root);
		qC.update((t) => ({
			...t,
			selectedTenant: e.Id
		})), JC(n()).update((e) => ({
			...e,
			selectedGroup: t
		}));
	}
	function x() {
		B(d, !0);
	}
	function S() {
		v(m), o()?.(m);
	}
	US(() => {
		g.unsubscribe(), _.unsubscribe();
	});
	var ee = {
		get entityType() {
			return n();
		},
		set entityType(e = r.Signal) {
			n(e), R();
		},
		get selectMultiple() {
			return i();
		},
		set selectMultiple(e = !1) {
			i(e), R();
		},
		get additionalFilter() {
			return a();
		},
		set additionalFilter(e = null) {
			a(e), R();
		},
		get onselectedEntities() {
			return o();
		},
		set onselectedEntities(e) {
			o(e), R();
		},
		get onclose() {
			return s();
		},
		set onclose(e) {
			s(e), R();
		}
	}, C = aT(), te = V(C), ne = V(te), re = H(V(ne), !0);
	N(ne);
	var ie = U(ne, 2), ae = H(ie);
	sC(U(ie, 2), {
		size: 36,
		iconSize: 20,
		icon: "close",
		onclick: () => s()?.()
	}), N(te);
	var oe = U(te, 2), se = V(oe), ce = (e) => {
		{
			let t = /* @__PURE__ */ I(() => !!q(u));
			xC(e, {
				get allowBack() {
					return q(t);
				},
				onback: () => B(d, !1),
				ontenantSelected: (e) => b(e)
			});
		}
	}, le = (e) => {
		var t = rT(), r = bb(t);
		lw(r, {
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
		var o = U(r, 2), s = V(o);
		nT(s, {
			get entityType() {
				return n();
			},
			get totalCount() {
				return q(f);
			}
		});
		var c = U(s, 2);
		eT(V(c), {
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
				B(f, e, !0);
			}
		}), N(c), N(o), Y(e, t);
	};
	Z(se, (e) => {
		q(d) ? e(ce) : e(le, -1);
	}), N(oe);
	var ue = U(oe, 2), de = V(ue), fe = V(de), pe = (e) => {
		var t = Vx();
		W(() => X(t, `${q(p) ?? ""} Ausgewählt`)), Y(e, t);
	};
	Z(fe, (e) => {
		i() && e(pe);
	}), N(de);
	var w = U(de, 2), me = U(w, 2), he = (e) => {
		var t = iT();
		Mx("click", t, () => S()), Y(e, t);
	};
	return Z(me, (e) => {
		i() && e(he);
	}), N(ue), N(C), W(() => {
		X(re, q(h).icon), X(ae, `${q(h).singular ?? ""} auswählen`);
	}), Mx("click", w, () => s()?.()), Y(e, C), F(ee);
}
Nx(["click"]), $(oT, {
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {},
	onclose: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/entity-select/EntitySelectDialog.svelte
var sT = /* @__PURE__ */ J("<div class=\"flex h-[660px] max-h-[90vh] w-[1280px] max-w-[95vw] overflow-hidden rounded-dialog bg-surface shadow-dialog\"><div class=\"h-full w-full\"><!></div></div>");
function cT(e, t) {
	P(t, !0);
	let n = Q(t, "open", 15, !1), i = Q(t, "entityType", 23, () => r.Signal), a = Q(t, "selectMultiple", 7, !1), o = Q(t, "additionalFilter", 7, null), s = Q(t, "onselectedEntities", 7), c = Q(t, "oncancel", 7), l = nC("PopupService", new eC(document.body)), u = /* @__PURE__ */ z(void 0), d;
	Mb(() => {
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
			n(e), R();
		},
		get entityType() {
			return i();
		},
		set entityType(e = r.Signal) {
			i(e), R();
		},
		get selectMultiple() {
			return a();
		},
		set selectMultiple(e = !1) {
			a(e), R();
		},
		get additionalFilter() {
			return o();
		},
		set additionalFilter(e = null) {
			o(e), R();
		},
		get onselectedEntities() {
			return s();
		},
		set onselectedEntities(e) {
			s(e), R();
		},
		get oncancel() {
			return c();
		},
		set oncancel(e) {
			c(e), R();
		}
	}, _ = sT(), v = V(_);
	return oT(V(v), {
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
	}), N(v), N(_), IS(_, (e) => B(u, e), () => q(u)), Mx("keydown", _, h), Mx("click", _, (e) => e.stopPropagation()), Y(e, _), F(g);
}
Nx(["keydown", "click"]), $(cT, {
	open: {},
	entityType: {},
	selectMultiple: {},
	additionalFilter: {},
	onselectedEntities: {},
	oncancel: {}
}, [], ["setOpen"], { mode: "open" });
//#endregion
//#region src/components/entity-select/entity-select-dialog.service.ts
var lT = class {
	selectEntity(e, t = null) {
		return this._openEntitySelectDialog(e, !1, t).then((e) => e.length === 1 ? e[0] : null);
	}
	selectMultipleEntities(e, t = null) {
		return this._openEntitySelectDialog(e, !0, t);
	}
	_openEntitySelectDialog(e, t, n) {
		return new Promise((r) => {
			let i = !1, a = qx(cT, {
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
					Qx(a);
				}, 200), r(e));
			}
			setTimeout(() => {
				a.setOpen(!0);
			}, 50);
		});
	}
}, uT = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-600:oklch(54.6% .245 262.881);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:#b2187a;--color-primary-hover:#8c1260;--color-on-primary:#fff;--color-primary-tint:#b2187a1a}@supports (color:color-mix(in lab, red, red)){:root,:host{--color-primary-tint:color-mix(in srgb, var(--color-primary) 10%, transparent)}}:root,:host{--color-primary-tint-subtle:#b2187a14}@supports (color:color-mix(in lab, red, red)){:root,:host{--color-primary-tint-subtle:color-mix(in srgb, var(--color-primary) 8%, transparent)}}:root,:host{--color-surface:#fff;--color-surface-border:#ccc;--color-ink:#000000db;--color-ink-secondary:#00000094;--color-ink-tertiary:#0006;--color-ink-disabled:#00000040;--color-line:#0000001f;--color-line-strong:#0000004d;--color-row-line:#00000014;--color-row-hover:#00000009;--color-row-active:#00000014;--color-neutral-hover:#0000000b;--color-muted:#00000009;--color-select:#1976d2;--color-checkbox-border:#00000073;--color-checkbox-border-disabled:#00000026;--color-danger:#c62828;--color-danger-tint:#c628281a;--text-dialog-title:18px;--text-section:17px;--text-count:15px;--text-cell:13.5px;--text-meta:12.5px;--text-sub:11.5px;--text-label:11px;--radius-dialog:10px;--radius-control:8px;--radius-button:6px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,:after,:before,::backdrop{border-color:var(--color-line,currentColor)}::file-selector-button{border-color:var(--color-line,currentColor)}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.\\!top-\\[-150px\\]{top:-150px!important}.\\!top-\\[2px\\]{top:2px!important}.top-0{top:0}.top-1{top:var(--spacing)}.top-10{top:calc(var(--spacing) * 10)}.top-\\[50\\%\\]{top:50%}.right-2{right:calc(var(--spacing) * 2)}.right-\\[-5px\\]{right:-5px}.left-0{left:0}.isolate{isolation:isolate}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.float-left{float:left}.float-right{float:right}.\\!container{width:100%!important}@media (width>=40rem){.\\!container{max-width:40rem!important}}@media (width>=48rem){.\\!container{max-width:48rem!important}}@media (width>=64rem){.\\!container{max-width:64rem!important}}@media (width>=80rem){.\\!container{max-width:80rem!important}}@media (width>=96rem){.\\!container{max-width:96rem!important}}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.-mx-3{margin-inline:calc(var(--spacing) * -3)}.mx-2{margin-inline:calc(var(--spacing) * 2)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-\\[-10px\\]{margin-top:-10px}.mt-\\[2px\\]{margin-top:2px}.mt-\\[10px\\]{margin-top:10px}.mt-px{margin-top:1px}.mr-1{margin-right:var(--spacing)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-4{margin-right:calc(var(--spacing) * 4)}.-mb-3{margin-bottom:calc(var(--spacing) * -3)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-\\[10px\\]{margin-bottom:10px}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-4{margin-left:calc(var(--spacing) * 4)}.ml-auto{margin-left:auto}.\\!hidden{display:none!important}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.list-item{display:list-item}.table{display:table}.table-row{display:table-row}.\\!h-\\[30px\\]{height:30px!important}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-\\[2px\\]{height:2px}.h-\\[3px\\]{height:3px}.h-\\[4px\\]{height:4px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.h-\\[30px\\]{height:30px}.h-\\[44px\\]{height:44px}.h-\\[70vh\\]{height:70vh}.h-\\[660px\\]{height:660px}.h-full{height:100%}.max-h-\\[45\\%\\]{max-height:45%}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-0{min-height:0}.min-h-6{min-height:calc(var(--spacing) * 6)}.w-4{width:calc(var(--spacing) * 4)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-\\[3px\\]{width:3px}.w-\\[4px\\]{width:4px}.w-\\[18px\\]{width:18px}.w-\\[20px\\]{width:20px}.w-\\[34px\\]{width:34px}.w-\\[44px\\]{width:44px}.w-\\[46px\\]{width:46px}.w-\\[50px\\]{width:50px}.w-\\[70px\\]{width:70px}.w-\\[80vw\\]{width:80vw}.w-\\[110px\\]{width:110px}.w-\\[120px\\]{width:120px}.w-\\[200px\\]{width:200px}.w-\\[280px\\]{width:280px}.w-\\[1280px\\]{width:1280px}.w-full{width:100%}.\\!max-w-\\[400px\\]{max-width:400px!important}.max-w-\\[95vw\\]{max-width:95vw}.max-w-\\[420px\\]{max-width:420px}.min-w-0{min-width:0}.min-w-\\[120px\\]{min-width:120px}.min-w-\\[160px\\]{min-width:160px}.\\!flex-none{flex:none!important}.flex-1{flex:1}.flex-\\[2\\]{flex:2}.flex-\\[50px\\]{flex:50px}.flex-none{flex:none}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.\\!scale-50{--tw-scale-x:50%!important;--tw-scale-y:50%!important;--tw-scale-z:50%!important;scale:var(--tw-scale-x) var(--tw-scale-y)!important}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform\\!{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)!important}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-\\[6px\\]{gap:6px}.gap-\\[10px\\]{gap:10px}.gap-\\[14px\\]{gap:14px}.self-center{align-self:center}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-\\[3px\\]{border-radius:3px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[12px\\]{border-radius:12px}.rounded-button{border-radius:var(--radius-button)}.rounded-control{border-radius:var(--radius-control)}.rounded-dialog{border-radius:var(--radius-dialog)}.rounded-full{border-radius:2147483647px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-\\[3px\\]{border-left-style:var(--tw-border-style);border-left-width:3px}.border-none{--tw-border-style:none;border-style:none}.\\!border-primary{border-color:var(--color-primary)!important}.border-checkbox-border{border-color:var(--color-checkbox-border)}.border-checkbox-border-disabled{border-color:var(--color-checkbox-border-disabled)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-500{border-color:var(--color-gray-500)}.border-line{border-color:var(--color-line)}.border-row-line{border-color:var(--color-row-line)}.border-slate-400{border-color:var(--color-slate-400)}.border-surface-border{border-color:var(--color-surface-border)}.border-transparent{border-color:#0000}.\\!bg-slate-300{background-color:var(--color-slate-300)!important}.bg-\\[rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{background-color:#0000001a}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-500{background-color:var(--color-green-500)}.bg-ink-disabled{background-color:var(--color-ink-disabled)}.bg-muted{background-color:var(--color-muted)}.bg-neutral-hover{background-color:var(--color-neutral-hover)}.bg-primary{background-color:var(--color-primary)}.bg-primary-tint{background-color:var(--color-primary-tint)}.bg-primary-tint-subtle{background-color:var(--color-primary-tint-subtle)}.bg-red-500{background-color:var(--color-red-500)}.bg-select{background-color:var(--color-select)}.bg-slate-200{background-color:var(--color-slate-200)}.bg-surface{background-color:var(--color-surface)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.p-1{padding:var(--spacing)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-\\[10px\\]{padding:10px}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-\\[5px\\]{padding-inline:5px}.px-\\[10px\\]{padding-inline:10px}.px-\\[18px\\]{padding-inline:18px}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-\\[1px\\]{padding-block:1px}.py-\\[2px\\]{padding-block:2px}.py-\\[7px\\]{padding-block:7px}.py-\\[10px\\]{padding-block:10px}.py-\\[14px\\]{padding-block:14px}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-\\[2px\\]{padding-top:2px}.pt-\\[10px\\]{padding-top:10px}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-\\[6px\\]{padding-right:6px}.pr-\\[10px\\]{padding-right:10px}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-\\[10px\\]{padding-bottom:10px}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-\\[10px\\]{padding-left:10px}.pl-\\[18px\\]{padding-left:18px}.pl-\\[26px\\]{padding-left:26px}.text-center{text-align:center}.text-left{text-align:left}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\!text-\\[20px\\]{font-size:20px!important}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[20px\\]{font-size:20px}.text-\\[24px\\]{font-size:24px}.text-cell{font-size:var(--text-cell)}.text-count{font-size:var(--text-count)}.text-dialog-title{font-size:var(--text-dialog-title)}.text-label{font-size:var(--text-label)}.text-meta{font-size:var(--text-meta)}.text-section{font-size:var(--text-section)}.text-sub{font-size:var(--text-sub)}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.break-normal{overflow-wrap:normal;word-break:normal}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-danger{color:var(--color-danger)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-ink{color:var(--color-ink)}.text-ink-disabled{color:var(--color-ink-disabled)}.text-ink-secondary{color:var(--color-ink-secondary)}.text-ink-tertiary{color:var(--color-ink-tertiary)}.text-on-primary{color:var(--color-on-primary)}.text-primary{color:var(--color-primary)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-dialog{--tw-shadow:0 5px 5px -3px var(--tw-shadow-color,#0003), 0 8px 10px 1px var(--tw-shadow-color,#00000024), 0 3px 14px 2px var(--tw-shadow-color,#0000001f);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0px 1.2px 3.6px var(--tw-shadow-color,#0000001c), 0px 6.4px 14.4px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0px .6px 1.8px var(--tw-shadow-color,#0000001a), 0px 3.2px 7.2px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0px .3px .9px var(--tw-shadow-color,#0000001a), 0px 1.6px 3.6px var(--tw-shadow-color,#00000021);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter\\!{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-all{-webkit-user-select:all;user-select:all}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:border-gray-300:is(:where(.group):hover *){border-color:var(--color-gray-300)}}.placeholder\\:text-ink-tertiary::placeholder{color:var(--color-ink-tertiary)}.first\\:border-l-0:first-child{border-left-style:var(--tw-border-style);border-left-width:0}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.focus-within\\:border-blue-300:focus-within{border-color:var(--color-blue-300)}.focus-within\\:border-primary:focus-within{border-color:var(--color-primary)}@media (hover:hover){.hover\\:border-line-strong:hover{border-color:var(--color-line-strong)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-neutral-hover:hover{background-color:var(--color-neutral-hover)}.hover\\:bg-primary-hover:hover{background-color:var(--color-primary-hover)}.hover\\:bg-primary-tint:hover{background-color:var(--color-primary-tint)}.hover\\:bg-primary-tint-subtle:hover{background-color:var(--color-primary-tint-subtle)}.hover\\:bg-row-hover:hover{background-color:var(--color-row-hover)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:bg-slate-300:hover{background-color:var(--color-slate-300)}.hover\\:underline:hover{text-decoration-line:underline}}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}@media (width>=48rem){.md\\:w-\\[80vw\\]{width:80vw}}@media (width>=64rem){.lg\\:w-\\[60vw\\]{width:60vw}}@media (width>=96rem){.\\32 xl\\:w-\\[50vw\\]{width:50vw}}}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v34/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2)format(\"woff2\")}.material-symbols-rounded{font-variation-settings:\"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;font-family:Material Symbols Rounded;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.material-symbols-rounded.filled{font-variation-settings:\"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24}@keyframes indeterminateAnimation{0%{transform:translate(0)scaleX(0)}40%{transform:translate(0)scaleX(.4)}to{transform:translate(100%)scaleX(.5)}}.audako-indeterminate-bar{transform-origin:0%;animation:1s linear infinite indeterminateAnimation}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}", dT = null;
function fT() {
	return typeof CSSStyleSheet > "u" || !("replaceSync" in CSSStyleSheet.prototype) ? null : (dT || (dT = new CSSStyleSheet(), dT.replaceSync(uT)), dT);
}
function pT(e) {
	if (!e) return;
	let t = fT();
	if (t) {
		e.adoptedStyleSheets.includes(t) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]);
		return;
	}
	if (!e.querySelector("style[data-audako-styles]")) {
		let t = document.createElement("style");
		t.setAttribute("data-audako-styles", ""), t.textContent = uT, e.prepend(t);
	}
}
function mT(e) {
	return class extends e {
		connectedCallback() {
			pT(this.shadowRoot), super.connectedCallback?.();
		}
	};
}
//#endregion
//#region src/components/entity-select/AudakoEntitySelect.svelte
var hT = /* @__PURE__ */ J("<div class=\"w-full h-full overflow-hidden\"><!></div>");
function gT(e, t) {
	P(t, !0);
	let n = Q(t, "entityType", 7, void 0), i = Q(t, "multiple", 7, !1), a = Q(t, "filter", 7, void 0);
	iC(eC, new eC(document.body));
	let o = /* @__PURE__ */ I(() => Object.values(r).includes(n()));
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
			n(e), R();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), R();
		},
		get filter() {
			return a();
		},
		set filter(e = void 0) {
			a(e), R();
		}
	}, l = hT(), u = V(l), d = (e) => {
		{
			let t = /* @__PURE__ */ I(() => a() ?? {});
			oT(e, {
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
	}), N(l), Y(e, l), F(c);
}
$(gT, {
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
}, [], [], { mode: "open" }, mT);
//#endregion
//#region src/components/select/AudakoSelect.svelte
function _T(e, t) {
	P(t, !0);
	let n = Q(t, "value", 7, void 0), r = Q(t, "arrayvalue", 23, () => []), i = Q(t, "multiple", 7, !1), a = Q(t, "options", 23, () => []), o = Q(t, "placeholder", 7, void 0), s = Q(t, "containerClass", 7, ""), c = Q(t, "textfieldClass", 7, ""), l = Q(t, "suffixClass", 7, "");
	function u(e) {
		t.$$host.dispatchEvent(new CustomEvent("valuechanged", { detail: e }));
	}
	var d = {
		get value() {
			return n();
		},
		set value(e = void 0) {
			n(e), R();
		},
		get arrayvalue() {
			return r();
		},
		set arrayvalue(e = []) {
			r(e), R();
		},
		get multiple() {
			return i();
		},
		set multiple(e = !1) {
			i(e), R();
		},
		get options() {
			return a();
		},
		set options(e = []) {
			a(e), R();
		},
		get placeholder() {
			return o();
		},
		set placeholder(e = void 0) {
			o(e), R();
		},
		get containerClass() {
			return s();
		},
		set containerClass(e = "") {
			s(e), R();
		},
		get textfieldClass() {
			return c();
		},
		set textfieldClass(e = "") {
			c(e), R();
		},
		get suffixClass() {
			return l();
		},
		set suffixClass(e = "") {
			l(e), R();
		}
	};
	{
		let t = /* @__PURE__ */ I(() => i() ? r() : n());
		Ow(e, {
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
	return F(d);
}
$(_T, {
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
}, [], [], { mode: "open" }, mT);
//#endregion
//#region src/components/tenant-select/AudakoTenantSelect.svelte
function vT(e, t) {
	P(t, !0);
	let n = Q(t, "allowBack", 7, !1);
	function r(e, n) {
		t.$$host.dispatchEvent(new CustomEvent(e, {
			detail: n,
			bubbles: !0,
			composed: !0
		}));
	}
	return xC(e, {
		get allowBack() {
			return n();
		},
		ontenantSelected: (e) => r("tenantselected", { tenant: e }),
		onback: () => r("back", null)
	}), F({
		get allowBack() {
			return n();
		},
		set allowBack(e = !1) {
			n(e), R();
		}
	});
}
$(vT, { allowBack: {
	attribute: "allowback",
	type: "Boolean"
} }, [], [], { mode: "open" }, mT);
//#endregion
//#region src/shared/components/menu/MenuItemComponent.svelte
var yT = /* @__PURE__ */ J("<div class=\"mr-2 flex item-center\"><span class=\"material-symbols-rounded z-[1] select-none flex items-center svelte-rq91mb\"><!></span></div>"), bT = /* @__PURE__ */ J("<div class=\"hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md svelte-rq91mb\"><!> <div class=\"flex-grow\"> </div></div>"), xT = {
	hash: "svelte-rq91mb",
	code: ".hover-highlight.svelte-rq91mb:hover {background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important;}.material-symbols-rounded.svelte-rq91mb {font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;}"
};
function ST(e, t) {
	P(t, !0), hS(e, xT);
	let n = Q(t, "icon", 7, null), r = Q(t, "label", 7, null), i = Q(t, "onclick", 7), a = Q(t, "children", 7);
	var o = {
		get icon() {
			return n();
		},
		set icon(e = null) {
			n(e), R();
		},
		get label() {
			return r();
		},
		set label(e = null) {
			r(e), R();
		},
		get onclick() {
			return i();
		},
		set onclick(e) {
			i(e), R();
		},
		get children() {
			return a();
		},
		set children(e) {
			a(e), R();
		}
	}, s = bT(), c = V(s), l = (e) => {
		var t = yT(), r = V(t), i = V(r), o = (e) => {
			var t = Hx();
			mS(bb(t), a), Y(e, t);
		}, s = (e) => {
			var t = Vx();
			W(() => X(t, n())), Y(e, t);
		};
		Z(i, (e) => {
			a() ? e(o) : e(s, -1);
		}), N(r), N(t), Y(e, t);
	};
	Z(c, (e) => {
		n() && e(l);
	});
	var u = H(U(c, 2), !0);
	return N(s), W(() => X(u, r())), Mx("click", s, (e) => i()?.(e)), Y(e, s), F(o);
}
Nx(["click"]), $(ST, {
	icon: {},
	label: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/shared/components/menu/Menu.svelte
var CT = /* @__PURE__ */ J("<div></div>");
function wT(e, t) {
	P(t, !0);
	let n = Q(t, "anchorSelector", 7), r = Q(t, "preferedVerticalAlignment", 7, "top"), i = Q(t, "preferedHorizontalAlignment", 7, "left"), a = Q(t, "positionOffset", 23, () => ({
		x: 0,
		y: 10
	})), o = Q(t, "container$class", 7, ""), s = Q(t, "closeOnClick", 7, !0), c = Q(t, "items", 23, () => []), l = /* @__PURE__ */ I(() => n() ? document.querySelector(n()) : null), u;
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
			n(e), R();
		},
		get preferedVerticalAlignment() {
			return r();
		},
		set preferedVerticalAlignment(e = "top") {
			r(e), R();
		},
		get preferedHorizontalAlignment() {
			return i();
		},
		set preferedHorizontalAlignment(e = "left") {
			i(e), R();
		},
		get positionOffset() {
			return a();
		},
		set positionOffset(e = {
			x: 0,
			y: 10
		}) {
			a(e), R();
		},
		get container$class() {
			return o();
		},
		set container$class(e = "") {
			o(e), R();
		},
		get closeOnClick() {
			return s();
		},
		set closeOnClick(e = !0) {
			s(e), R();
		},
		get items() {
			return c();
		},
		set items(e = []) {
			c(e), R();
		}
	};
	return IS(Sw(e, {
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
			var n = CT();
			cS(n, 21, c, iS, (e, t) => {
				ST(e, {
					get label() {
						return q(t).label;
					},
					get icon() {
						return q(t).icon;
					},
					onclick: (e) => q(t).action(e)
				});
			}), N(n), W(() => xS(n, 1, `bg-white rounded shadow-lg ${o() ?? ""}`)), Y(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => u = e, () => u), F(p);
}
$(wT, {
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
function TT(e, t) {
	P(t, !0);
	let n = Q(t, "items", 23, () => []), r = Q(t, "closeOnClick", 7, !0), i = Q(t, "containerClass", 7, ""), a = Q(t, "anchorSelector", 7, ""), o = /* @__PURE__ */ z(void 0);
	return Mb(() => {
		let e = t.$$host;
		e.openMenu = () => q(o)?.openMenu(), e.closeMenu = () => q(o)?.closeMenu();
	}), IS(wT(e, {
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
	}), (e) => B(o, e, !0), () => q(o)), F({
		get items() {
			return n();
		},
		set items(e = []) {
			n(e), R();
		},
		get closeOnClick() {
			return r();
		},
		set closeOnClick(e = !0) {
			r(e), R();
		},
		get containerClass() {
			return i();
		},
		set containerClass(e = "") {
			i(e), R();
		},
		get anchorSelector() {
			return a();
		},
		set anchorSelector(e = "") {
			a(e), R();
		}
	});
}
$(TT, {
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
function ET(e) {
	return e.element;
}
var DT = ET(gT), OT = ET(vT), kT = ET(_T), AT = ET(TT);
function jT() {
	NT("audako-entity-select", DT), NT("audako-tenant-select", OT), NT("audako-select", kT), NT("audako-menu", AT);
}
function MT(e, t) {
	let n = e instanceof s_ ? e : new s_(e, t), r = new Ru(n);
	iC(s_, n), iC(rf, new rf(n)), iC(Ru, r), iC(zu, new zu(n)), iC(Vu, new Vu(r)), iC(Uu, new Uu(n)), iC(lT, new lT()), iC(lf, new lf(n)), iC(Hu, new Hu(n));
}
function NT(e, t, n) {
	customElements.get(e) || customElements.define(e, t, n);
}
//#endregion
export { bf as ALL_FEATURES, Us as AcquisitionInterval, Ws as AcquisitionUnit, Jc as AlarmPlanningCheckerConfig, qc as AlarmPlanningCheckerConfigVersion, Kc as AlarmPlanningConfig, Gc as AlarmPlanningConfigVersion, Xc as AlarmTimerConfig, Yc as AlarmTimerConfigVersion, le as AlarmTrigger, lr as AlarmingPlan, s_ as ApiContext, wg as ApiError, jg as ApiVersionDetectionError, Ef as ApiVersionInfo, Ic as AudakoWidgetImageConfig, Fc as AudakoWidgetImageConfigVersion, To as AxisOptions, cc as Badge, E as BaseWidgetConfig, Gt as BatchAction, Zt as BatchDefinition, $t as BatchReleaseSettings, rn as BatchReportExportSettings, on as BatchReviewDefinition, an as BatchReviewSettings, Sr as BatchTrigger, en as BatchValueObject, pt as BitSelectConversionTypes, zg as CORE_SUPPORTED_WINDOW, Ys as CURRENCY_CODES, Vn as Camera, Un as CameraImage, Hn as CameraImageType, Bn as CameraViewMode, Ce as ChangeRateMonitoringSettings, h as CheckboxFieldSettings, No as ClockType, wo as ColumnSeriesOptions, Tr as CompressionInterval, jt as CompressionType, jt as FormulaCompressionType, tn as ConditionEventEntry, w as ConditionSettings, br as ConditionTrigger, l as ConfigurationEntity, ge as ConnectionFailureConditionSettings, Lt as Connector, Ut as ConnectorObject, Ht as ConnectorObjectAccessLevel, Vt as ConnectorObjectType, Bt as ConnectorRestApiCredential, zt as ConnectorRestApiSettings, It as ConnectorType, Rt as ConnectorTypedSettings, he as CounterConditionSettings, vs as CrossTabMode, d as CustomFieldSettings, b as CustomMappingFieldSettings, gr as CyclicTrigger, Qd as DEFAULT_LIVE_INTERVAL_MS, pc as DEFAULT_MAP_ANALYSIS_DISPLAY_OPTIONS, ne as Dashboard, re as DashboardTab, ae as DashboardTabEntity, ie as DashboardTabPlaceholder, Pe as DataConnection, Ge as DataConnectionBacnetSettings, Wu as DataConnectionBrowserService, ct as DataConnectionCsvImporterSettings, Xe as DataConnectionEhWebserverSettings, _e as DataConnectionFailureConditionSettings, lt as DataConnectionFtpParserSettings, We as DataConnectionIEC104Settings, Ye as DataConnectionIot2000ModuleSettings, Je as DataConnectionKnxSettings, st as DataConnectionLoRaWANSettings, nt as DataConnectionMeterBusSettings, Ue as DataConnectionModbusSettings, Qe as DataConnectionModemInfoSettings, $e as DataConnectionMqttSettings, rt as DataConnectionMtmAdapterSettings, at as DataConnectionOTTDataLoggerSettings, et as DataConnectionOneWireSettings, ze as DataConnectionOpcUaSecurityAuthentication, Re as DataConnectionOpcUaSecurityMode, Le as DataConnectionOpcUaSecurityPolicy, He as DataConnectionOpcUaSettings, Be as DataConnectionOpcUaStringEncoding, Ve as DataConnectionOpcUaTimestampSource, Ie as DataConnectionS7Settings, Fe as DataConnectionSettings, Fe as DataConnectionTypedSettings, Ke as DataConnectionSimulationSettings, Ze as DataConnectionSnmpSettings, Ne as DataConnectionSpecialDeviceProfile, ot as DataConnectionTeltonikaGPSSettings, Me as DataConnectionType, qe as DataConnectionUniversalSettings, it as DataConnectionYDOCDataLoggerSettings, Ae as DataSource, Uu as DataSourceHttpService, ke as DataSourceType, g as DateFieldSettings, De as DifferenceMonitoringSettings, zn as Document, er as EmailContact, kg as EndpointNotAvailableError, hl as EnteredAlarmingIntervalType, Oc as EntityAction, v as EntityFieldSettings, Ru as EntityHttpService, i as EntityIcons, Tg as EntityLockedError, Vu as EntityNameService, o as EntityObjectOrientationAttribute, DT as EntitySelect, lT as EntitySelectDialogService, r as EntityType, kr as EntityTypeClassMapping, jr as EntityUtils, bc as EntryListViewType, xn as EventAction, uc as EventBadge, ue as EventCategory, ce as EventCategoryClass, de as EventCondition, fe as EventConditionSettingsType, oe as EventDefinition, Jt as EventEntityType, bn as EventReport, yn as EventReportSettings, vr as EventTrigger, qt as EventTriggerState, se as ExpressionParameter, _f as FEATURE_MIN_VERSIONS, yf as FEATURE_PREDICATES, s as Field, a as FieldObjectOrientationAttribute, Et as Formula, kt as FormulaIntervalSettings, Dt as FormulaNumericSettings, Nt as FormulaType, Pt as FormulaValueType, Ot as FormulaVariable, Uo as GaugeRange, Vo as GaugeValueObjectType, Zn as Gender, S as GeoPosition, Ko as GetGaugeInvertByKey, Go as GetGaugeRotationByKey, Wo as GetRangeKey, x as Group, Eo as GuidelineOptions, As as HeatMapCategoryAxisOptions, Ms as HeatMapChartConfig, js as HeatMapColumnSeriesOptions, gf as HistoricalValueManipulationHttpService, Or as HistoricalValueOperationStatus, lf as HistoricalValueService, Bc as IframeLoadingMethods, Ag as IncompatibleBackendError, yo as IntervalSettings, tc as LeafletLatLng, Co as LineSeriesOptions, tf as LiveHubEvent, Zd as LiveHubMethod, rc as LiveRequestType, rf as LiveValueService, $d as MIN_LIVE_INTERVAL_MS_V5, Sn as MailEventAction, _c as MaintEntryState, ur as MaintenanceService, dc as MapAnalysesConfigVersion, fc as MapAnalysisValueDisplayType, nc as MapConfig, ec as MapConfigVersion, sc as MapGroup, oc as MapMarkerConfig, ic as MapRequestTypes, be as MaximumMonitoringSettings, Er as MeasurementValueSource, AT as Menu, nn as MetadataField, Yt as MetadataFieldType, Xt as MetadataSource, tt as MeterBusMode, ye as MinimumMonitoringSettings, f as NumberFieldSettings, kc as ObjectOperations, Oe as ObjectSettings, Ar as ObjectUtils, vo as ObservationPeriodUnits, cf as OffsetSource, Xd as OperationStatus, ee as PartList, xe as PeriodMaximumMonitoringSettings, Se as PeriodMaximumMonitoringSettingsPeriod, je as PermaLiveModeSettings, zc as PermissionsPolicyAllowList, tr as PhoneBasedContact, Os as PieChartConfig, we as PlausibilityMonitoringSettings, ac as PopupSignalConfig, Te as PositionMonitoringSettings, Wt as ProcessImage, C as PropertyGroup, or as PushoverContact, Qn as Recipient, $n as RecipientContact, sr as RecipientGroup, cr as RecipientGroupMember, Zc as RecipientType, Ee as RecordingFailureMonitoringSettings, bt as RecordingSpecialProcessingType, xt as RecordingType, mn as Report, _n as ReportCaptionElement, fn as ReportColumnType, wn as ReportElement, Tn as ReportElementSettings, sn as ReportEngineType, jn as ReportField, Mn as ReportFieldSettings, Dn as ReportGroup, On as ReportGroupSettings, vn as ReportItemElement, dn as ReportItemElementType, kn as ReportList, An as ReportListSettings, hn as ReportObject, En as ReportParameterDefinition, pn as ReportParameterType, Rn as ReportSettings, un as ReportStorageType, Nn as ReportTable, Fn as ReportTableElement, In as ReportTableEntry, Ln as ReportTableHeader, Pn as ReportTableSettings, ln as ReportTemplate, cn as ReportTimeStepSize, gn as ReportTypedElement, fl as RequestIntervalType, Xn as Role, pr as RuntimeScript, Fs as SankeyChartWidgetFormAggregationTypes, _t as ScalingCalculatorState, xr as ScriptBatchTriggerState, yr as ScriptConditionTriggerState, _r as ScriptEventTriggerState, hr as ScriptTrigger, kT as Select, _ as SelectFieldSettings, u as SelectFieldType, Ac as SelectableEntitiesTranslation, Js as SelectionType, xo as SeriesOptions, bo as SeriesType, xc as ServiceFilterType, ss as SetPointStatus, dt as Signal, gt as SignalAnalogSettings, lc as SignalBadge, wt as SignalCompressionSettings, T as SignalCompressionType, me as SignalConditionSettings, pe as SignalConditionSettingsOperator, vt as SignalCounterSettings, ht as SignalDigitalSettings, Qo as SignalListGroup, ft as SignalOutputSettings, St as SignalRecordingSettings, mt as SignalSettings, ut as SignalType, yt as SignalTypeSettingsMap, as as SliderEntry, nr as SmsContact, mr as StaticScriptVariable, fr as StepDefinition, So as StepLineSeriesOptions, Cn as StorageEventAction, nf as SubscriptionPrefix, Kn as SwitchOperation, Gn as SwitchRule, Wn as SwitchSchedule, qn as SwitchType, Ft as TagScope, dr as TaskDefinition, ar as TeamsContact, ir as TelegramContact, te as TemplateVariable, zu as TenantHttpService, OT as TenantSelect, Cr as TenantView, m as TextAreaFieldSettings, p as TextFieldSettings, _o as TimeManagementSettings, zs as TimeStepSize, ve as TimebasedConditionSettings, Gs as TimelineOptions, Cs as TrafficLightColorTranslations, Ss as TrafficLightModeTranslations, xs as TrafficLightModes, ys as TrafficLights, c as TranslatableField, Qt as TriggerDefinition, Kt as TriggerType, Og as UnsupportedApiVersionError, Yn as User, y as UserFieldSettings, wr as UserProfile, Hu as UserProfileHttpService, Jn as UserRegistrationStates, Ng as V4_VERSION_PATH, Mg as V5_VERSION_PATH, Do as ValueAxisOptions, go as ValueEntityType, At as ValueIntervalType, Mt as VariableType, rr as VoipContact, Mc as WidgetAuditLogListConfig, Dc as WidgetAuditLogListFilterType, jc as WidgetAuditLogListVersion, Lo as WidgetBasicXyChartConfig, Io as WidgetBasicXyChartConfigVersion, $s as WidgetBatchArchiveConfig, Qs as WidgetBatchArchiveConfigVersion, qs as WidgetBillingConfig, Ks as WidgetBillingConfigVersion, gc as WidgetCameraConfig, hc as WidgetCameraConfigVersion, Mo as WidgetClockConfig, jo as WidgetClockConfigVersion, ps as WidgetCounterManagementConfig, fs as WidgetCounterManagementConfigVersion, zo as WidgetDataImportConfig, Ro as WidgetDataImportConfigVersion, Xo as WidgetDigitalSwitchConfig, Yo as WidgetDigitalSwitchConfigVersion, Wc as WidgetDocumentsArchiveConfig, Uc as WidgetDocumentsArchiveConfigVersion, ml as WidgetEnteredAlarmingConfig, pl as WidgetEnteredAlarmingConfigVersion, dl as WidgetEnteredEventConfig, ul as WidgetEnteredEventConfigVersion, al as WidgetEventListConfig, il as WidgetEventListConfigVersion, nl as WidgetEventListFilterType, rl as WidgetEventListFilterTypeTranslation, sl as WidgetEventTestConfig, ol as WidgetEventTestConfigVersion, Ho as WidgetGaugeChartConfig, Bo as WidgetGaugeChartConfigVersion, Ns as WidgetHeatMapChartConfig, ks as WidgetHeatMapChartConfigVersion, Hc as WidgetIframeConfig, Vc as WidgetIframeVersion, Jo as WidgetLiquidFillGaugeConfig, qo as WidgetLiquidFillGaugeConfigVersion, Ts as WidgetLiveChartConfig, ws as WidgetLiveChartConfigVersion, hs as WidgetLiveModeConfig, ms as WidgetLiveModeConfigVersion, yc as WidgetMaintenanceEntryListConfig, vc as WidgetMaintenanceEntryListConfigVersion, Hs as WidgetManualDataConfig, Vs as WidgetManualDataConfigVersion, Ec as WidgetManualMaintenanceConfig, Tc as WidgetManualMaintenanceConfigVersion, mc as WidgetMapAnalysesConfig, ll as WidgetMonitoringOverviewConfig, cl as WidgetMonitoringOverviewConfigVersion, wc as WidgetMyTasksConfig, Pc as WidgetNotesConfig, Nc as WidgetNotesConfigVersion, Rc as WidgetPdfViewerConfig, Lc as WidgetPdfViewerConfigVersion, Ds as WidgetPieChartConfig, Es as WidgetPieChartConfigVersion, _s as WidgetProcessImageConfig, gs as WidgetProcessImageConfigVersion, tl as WidgetRecipientGroupConfig, el as WidgetRecipientGroupConfigVersion, $c as WidgetRecipientsConfig, Qc as WidgetRecipientsConfigVersion, Rs as WidgetReportConfig, Ls as WidgetReportConfigVersion, ds as WidgetResettableCounterConfig, us as WidgetResettableCounterConfigVersion, Is as WidgetSankeyChartConfig, Ps as WidgetSankeyChartConfigVersion, ls as WidgetSetpointTableConfig, cs as WidgetSetpointTableConfigVersion, $o as WidgetSignalListMixedConfig, Zo as WidgetSignalListMixedConfigVersion, Ao as WidgetSingleSignalConfig, ko as WidgetSingleSignalConfigVersion, os as WidgetSliderConfig, is as WidgetSliderConfigVersion, Zs as WidgetStartStopBatchConfig, Xs as WidgetStartStopBatchConfigVersion, rs as WidgetSwitchOperationListConfig, ns as WidgetSwitchOperationListConfigVersion, Fo as WidgetTextConfig, Po as WidgetTextConfigVersion, ts as WidgetTimeScheduleConfig, es as WidgetTimeScheduleConfigVersion, bs as WidgetTrafficLightConfig, Cc as WidgetTypePlateConfig, Sc as WidgetTypePlateConfigVersion, Oo as XYChartConfig, Df as apiVersionOf, Hg as assertCompatible, Vg as checkCompatibility, ef as clampLiveInterval, wf as compareVersionStrings, Cf as compareVersions, Of as createApiVersionInfo, Lg as detectApiVersion, ho as getAsyncValueAsPromise, Tt as getDefaultCompressionSettingsBySignalType, Ct as getDefaultRecordingSettingsBySignalType, Yg as getDeprecatedPaths, Dr as getSignalValues, Rg as isApiReachable, Tf as isAtLeast, xf as isFeatureSupported, Pr as isNullOrEmpty, Nr as isNullOrUndefined, Fr as isNullOrWhitespace, Fg as normalizeVersionBody, Dg as parseApiError, Sf as parseVersion, MT as registerCoreServices, jT as registerCustomElements, o_ as requestHttpConfig, nC as resolveService, Jg as setDeprecationSink, aC as setGlobalDependencyContainer, Mr as tryCatch, iC as tryRegisterService, Bs as widgetReport_Name };
