var oi = Object.defineProperty;
var ii = (t, e, r) => e in t ? oi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var tt = (t, e, r) => (ii(t, typeof e != "symbol" ? e + "" : e, r), r);
function L() {
}
function si(t, e) {
  for (const r in e)
    t[r] = e[r];
  return t;
}
function ai(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function io(t) {
  return t();
}
function Jr() {
  return /* @__PURE__ */ Object.create(null);
}
function Re(t) {
  t.forEach(io);
}
function li(t) {
  return typeof t == "function";
}
function X(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ui(t) {
  return Object.keys(t).length === 0;
}
function pe(t, e, r, n) {
  if (t) {
    const o = so(t, e, r, n);
    return t[0](o);
  }
}
function so(t, e, r, n) {
  return t[1] && n ? si(r.ctx.slice(), t[1](n(e))) : r.ctx;
}
function he(t, e, r, n) {
  if (t[2] && n) {
    const o = t[2](n(r));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], s = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < s; a += 1)
        i[a] = e.dirty[a] | o[a];
      return i;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function ge(t, e, r, n, o, i) {
  if (o) {
    const s = so(e, r, n, i);
    t.p(s, o);
  }
}
function we(t) {
  if (t.ctx.length > 32) {
    const e = [], r = t.ctx.length / 32;
    for (let n = 0; n < r; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function S(t, e) {
  t.appendChild(e);
}
function Qe(t, e, r) {
  const n = ci(t);
  if (!n.getElementById(e)) {
    const o = C("style");
    o.id = e, o.textContent = r, fi(n, o);
  }
}
function ci(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function fi(t, e) {
  S(t.head || t, e);
}
function R(t, e, r) {
  t.insertBefore(e, r || null);
}
function T(t) {
  t.parentNode.removeChild(t);
}
function He(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function C(t) {
  return document.createElement(t);
}
function B(t) {
  return document.createTextNode(t);
}
function $() {
  return B(" ");
}
function yr() {
  return B("");
}
function F(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function k(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function di(t) {
  return Array.from(t.childNodes);
}
function oe(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function kt(t, e) {
  t.value = e == null ? "" : e;
}
function it(t, e, r, n) {
  r === null ? t.style.removeProperty(e) : t.style.setProperty(e, r, n ? "important" : "");
}
function pi(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  const o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, r, n, e), o;
}
let st;
function ve(t) {
  st = t;
}
function je() {
  if (!st)
    throw new Error("Function called outside component initialization");
  return st;
}
function ao(t) {
  je().$$.on_mount.push(t);
}
function hi(t) {
  je().$$.after_update.push(t);
}
function Ie(t) {
  je().$$.on_destroy.push(t);
}
function me() {
  const t = je();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const i = pi(e, r, { cancelable: n });
      return o.slice().forEach((s) => {
        s.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function Fe(t, e) {
  return je().$$.context.set(t, e), e;
}
function Ve(t) {
  return je().$$.context.get(t);
}
const nt = [], fe = [], wt = [], or = [], gi = Promise.resolve();
let ir = !1;
function wi() {
  ir || (ir = !0, gi.then(xr));
}
function sr(t) {
  wt.push(t);
}
function _r(t) {
  or.push(t);
}
const Nt = /* @__PURE__ */ new Set();
let ft = 0;
function xr() {
  const t = st;
  do {
    for (; ft < nt.length; ) {
      const e = nt[ft];
      ft++, ve(e), mi(e.$$);
    }
    for (ve(null), nt.length = 0, ft = 0; fe.length; )
      fe.pop()();
    for (let e = 0; e < wt.length; e += 1) {
      const r = wt[e];
      Nt.has(r) || (Nt.add(r), r());
    }
    wt.length = 0;
  } while (nt.length);
  for (; or.length; )
    or.pop()();
  ir = !1, Nt.clear(), ve(t);
}
function mi(t) {
  if (t.fragment !== null) {
    t.update(), Re(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(sr);
  }
}
const mt = /* @__PURE__ */ new Set();
let $e;
function te() {
  $e = {
    r: 0,
    c: [],
    p: $e
  };
}
function re() {
  $e.r || Re($e.c), $e = $e.p;
}
function x(t, e) {
  t && t.i && (mt.delete(t), t.i(e));
}
function E(t, e, r, n) {
  if (t && t.o) {
    if (mt.has(t))
      return;
    mt.add(t), $e.c.push(() => {
      mt.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function St(t, e) {
  const r = e.token = {};
  function n(o, i, s, a) {
    if (e.token !== r)
      return;
    e.resolved = a;
    let u = e.ctx;
    s !== void 0 && (u = u.slice(), u[s] = a);
    const l = o && (e.current = o)(u);
    let c = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, f) => {
      f !== i && d && (te(), E(d, 1, 1, () => {
        e.blocks[f] === d && (e.blocks[f] = null);
      }), re());
    }) : e.block.d(1), l.c(), x(l, 1), l.m(e.mount(), e.anchor), c = !0), e.block = l, e.blocks && (e.blocks[i] = l), c && xr();
  }
  if (ai(t)) {
    const o = je();
    if (t.then((i) => {
      ve(o), n(e.then, 1, e.value, i), ve(null);
    }, (i) => {
      if (ve(o), n(e.catch, 2, e.error, i), ve(null), !e.hasCatch)
        throw i;
    }), e.current !== e.pending)
      return n(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return n(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function lo(t, e, r) {
  const n = e.slice(), { resolved: o } = t;
  t.current === t.then && (n[t.value] = o), t.current === t.catch && (n[t.error] = o), t.block.p(n, r);
}
function kr(t, e, r) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = r, r(t.$$.ctx[n]));
}
function U(t) {
  t && t.c();
}
function z(t, e, r, n) {
  const { fragment: o, on_mount: i, on_destroy: s, after_update: a } = t.$$;
  o && o.m(e, r), n || sr(() => {
    const u = i.map(io).filter(li);
    s ? s.push(...u) : Re(u), t.$$.on_mount = [];
  }), a.forEach(sr);
}
function N(t, e) {
  const r = t.$$;
  r.fragment !== null && (Re(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function bi(t, e) {
  t.$$.dirty[0] === -1 && (nt.push(t), wi(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, r, n, o, i, s, a = [-1]) {
  const u = st;
  ve(t);
  const l = t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: L,
    not_equal: o,
    bound: Jr(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: Jr(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(l.root);
  let c = !1;
  if (l.ctx = r ? r(t, e.props || {}, (d, f, ...p) => {
    const g = p.length ? p[0] : f;
    return l.ctx && o(l.ctx[d], l.ctx[d] = g) && (!l.skip_bound && l.bound[d] && l.bound[d](g), c && bi(t, d)), f;
  }) : [], l.update(), c = !0, Re(l.before_update), l.fragment = n ? n(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = di(e.target);
      l.fragment && l.fragment.l(d), d.forEach(T);
    } else
      l.fragment && l.fragment.c();
    e.intro && x(t.$$.fragment), z(t, e.target, e.anchor, e.customElement), xr();
  }
  ve(u);
}
class Q {
  $destroy() {
    N(this, 1), this.$destroy = L;
  }
  $on(e, r) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !ui(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
var H;
(function(t) {
  t.Group = "Group", t.Signal = "Signal", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage";
})(H || (H = {}));
H.Group + "", H.Dashboard + "", H.Signal + "", H.DataConnection + "", H.DataSource + "";
const vi = {
  Group: "/base/Group",
  Signal: "/daq/Signal",
  Dashboard: "/base/Dashboard",
  DashboardTab: "/base/DashboardTab",
  DataConnection: "/daq/DataConnection",
  DataSource: "/daq/DataSource",
  EventCondition: "/base/condition",
  ProcessImage: "/scada/ProcessImage",
  EventCategory: "/base/EventCategory",
  EventDefinition: "/base/EventDefinition"
};
var Wr;
(function(t) {
  t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter";
})(Wr || (Wr = {}));
var Kr;
(function(t) {
  t.S7 = "S7", t.ModBus = "ModBus";
})(Kr || (Kr = {}));
class yi {
  constructor(e) {
    Object.assign(this, e);
  }
}
function _i(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var uo = { exports: {} }, Sr = { exports: {} }, co = function(e, r) {
  return function() {
    for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
      o[i] = arguments[i];
    return e.apply(r, o);
  };
}, xi = co, Er = Object.prototype.toString, Cr = function(t) {
  return function(e) {
    var r = Er.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Ue(t) {
  return t = t.toLowerCase(), function(r) {
    return Cr(r) === t;
  };
}
function Tr(t) {
  return Array.isArray(t);
}
function Et(t) {
  return typeof t > "u";
}
function ki(t) {
  return t !== null && !Et(t) && t.constructor !== null && !Et(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var fo = Ue("ArrayBuffer");
function Si(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && fo(t.buffer), e;
}
function Ei(t) {
  return typeof t == "string";
}
function Ci(t) {
  return typeof t == "number";
}
function po(t) {
  return t !== null && typeof t == "object";
}
function bt(t) {
  if (Cr(t) !== "object")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var Ti = Ue("Date"), Ri = Ue("File"), Ii = Ue("Blob"), Pi = Ue("FileList");
function Rr(t) {
  return Er.call(t) === "[object Function]";
}
function Ai(t) {
  return po(t) && Rr(t.pipe);
}
function Oi(t) {
  var e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Er.call(t) === e || Rr(t.toString) && t.toString() === e);
}
var $i = Ue("URLSearchParams");
function Di(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function zi() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Ir(t, e) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Tr(t))
      for (var r = 0, n = t.length; r < n; r++)
        e.call(null, t[r], r, t);
    else
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t);
}
function ar() {
  var t = {};
  function e(o, i) {
    bt(t[i]) && bt(o) ? t[i] = ar(t[i], o) : bt(o) ? t[i] = ar({}, o) : Tr(o) ? t[i] = o.slice() : t[i] = o;
  }
  for (var r = 0, n = arguments.length; r < n; r++)
    Ir(arguments[r], e);
  return t;
}
function Ni(t, e, r) {
  return Ir(e, function(o, i) {
    r && typeof o == "function" ? t[i] = xi(o, r) : t[i] = o;
  }), t;
}
function ji(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function Ui(t, e, r, n) {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function Mi(t, e, r) {
  var n, o, i, s = {};
  e = e || {};
  do {
    for (n = Object.getOwnPropertyNames(t), o = n.length; o-- > 0; )
      i = n[o], s[i] || (e[i] = t[i], s[i] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}
function Bi(t, e, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  var n = t.indexOf(e, r);
  return n !== -1 && n === r;
}
function Li(t) {
  if (!t)
    return null;
  var e = t.length;
  if (Et(e))
    return null;
  for (var r = new Array(e); e-- > 0; )
    r[e] = t[e];
  return r;
}
var qi = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Z = {
  isArray: Tr,
  isArrayBuffer: fo,
  isBuffer: ki,
  isFormData: Oi,
  isArrayBufferView: Si,
  isString: Ei,
  isNumber: Ci,
  isObject: po,
  isPlainObject: bt,
  isUndefined: Et,
  isDate: Ti,
  isFile: Ri,
  isBlob: Ii,
  isFunction: Rr,
  isStream: Ai,
  isURLSearchParams: $i,
  isStandardBrowserEnv: zi,
  forEach: Ir,
  merge: ar,
  extend: Ni,
  trim: Di,
  stripBOM: ji,
  inherits: Ui,
  toFlatObject: Mi,
  kindOf: Cr,
  kindOfTest: Ue,
  endsWith: Bi,
  toArray: Li,
  isTypedArray: qi,
  isFileList: Pi
}, Me = Z;
function Qr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var ho = function(e, r, n) {
  if (!r)
    return e;
  var o;
  if (n)
    o = n(r);
  else if (Me.isURLSearchParams(r))
    o = r.toString();
  else {
    var i = [];
    Me.forEach(r, function(u, l) {
      u === null || typeof u > "u" || (Me.isArray(u) ? l = l + "[]" : u = [u], Me.forEach(u, function(d) {
        Me.isDate(d) ? d = d.toISOString() : Me.isObject(d) && (d = JSON.stringify(d)), i.push(Qr(l) + "=" + Qr(d));
      }));
    }), o = i.join("&");
  }
  if (o) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}, Fi = Z;
function At() {
  this.handlers = [];
}
At.prototype.use = function(e, r, n) {
  return this.handlers.push({
    fulfilled: e,
    rejected: r,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};
At.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
At.prototype.forEach = function(e) {
  Fi.forEach(this.handlers, function(n) {
    n !== null && e(n);
  });
};
var Vi = At, Gi = Z, Hi = function(e, r) {
  Gi.forEach(e, function(o, i) {
    i !== r && i.toUpperCase() === r.toUpperCase() && (e[r] = o, delete e[i]);
  });
}, go = Z;
function Xe(t, e, r, n, o) {
  Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
go.inherits(Xe, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var wo = Xe.prototype, mo = {};
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
].forEach(function(t) {
  mo[t] = { value: t };
});
Object.defineProperties(Xe, mo);
Object.defineProperty(wo, "isAxiosError", { value: !0 });
Xe.from = function(t, e, r, n, o, i) {
  var s = Object.create(wo);
  return go.toFlatObject(t, s, function(u) {
    return u !== Error.prototype;
  }), Xe.call(s, t.message, e, r, n, o), s.name = t.name, i && Object.assign(s, i), s;
};
var Ze = Xe, bo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, de = Z;
function Xi(t, e) {
  e = e || new FormData();
  var r = [];
  function n(i) {
    return i === null ? "" : de.isDate(i) ? i.toISOString() : de.isArrayBuffer(i) || de.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function o(i, s) {
    if (de.isPlainObject(i) || de.isArray(i)) {
      if (r.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + s);
      r.push(i), de.forEach(i, function(u, l) {
        if (!de.isUndefined(u)) {
          var c = s ? s + "." + l : l, d;
          if (u && !s && typeof u == "object") {
            if (de.endsWith(l, "{}"))
              u = JSON.stringify(u);
            else if (de.endsWith(l, "[]") && (d = de.toArray(u))) {
              d.forEach(function(f) {
                !de.isUndefined(f) && e.append(c, n(f));
              });
              return;
            }
          }
          o(u, c);
        }
      }), r.pop();
    } else
      e.append(s, n(i));
  }
  return o(t), e;
}
var vo = Xi, jt, Zr;
function Yi() {
  if (Zr)
    return jt;
  Zr = 1;
  var t = Ze;
  return jt = function(r, n, o) {
    var i = o.config.validateStatus;
    !o.status || !i || i(o.status) ? r(o) : n(new t("Request failed with status code " + o.status, [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o));
  }, jt;
}
var Ut, en;
function Ji() {
  if (en)
    return Ut;
  en = 1;
  var t = Z;
  return Ut = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(n, o, i, s, a, u) {
        var l = [];
        l.push(n + "=" + encodeURIComponent(o)), t.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), t.isString(s) && l.push("path=" + s), t.isString(a) && l.push("domain=" + a), u === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(n) {
        var o = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return o ? decodeURIComponent(o[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), Ut;
}
var Wi = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Ki = function(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}, Qi = Wi, Zi = Ki, yo = function(e, r) {
  return e && !Qi(r) ? Zi(e, r) : r;
}, Mt, tn;
function es() {
  if (tn)
    return Mt;
  tn = 1;
  var t = Z, e = [
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
  return Mt = function(n) {
    var o = {}, i, s, a;
    return n && t.forEach(n.split(`
`), function(l) {
      if (a = l.indexOf(":"), i = t.trim(l.substr(0, a)).toLowerCase(), s = t.trim(l.substr(a + 1)), i) {
        if (o[i] && e.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? o[i] = (o[i] ? o[i] : []).concat([s]) : o[i] = o[i] ? o[i] + ", " + s : s;
      }
    }), o;
  }, Mt;
}
var Bt, rn;
function ts() {
  if (rn)
    return Bt;
  rn = 1;
  var t = Z;
  return Bt = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), o;
    function i(s) {
      var a = s;
      return r && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return o = i(window.location.href), function(a) {
      var u = t.isString(a) ? i(a) : a;
      return u.protocol === o.protocol && u.host === o.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Bt;
}
var Lt, nn;
function Ot() {
  if (nn)
    return Lt;
  nn = 1;
  var t = Ze, e = Z;
  function r(n) {
    t.call(this, n == null ? "canceled" : n, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(r, t, {
    __CANCEL__: !0
  }), Lt = r, Lt;
}
var qt, on;
function rs() {
  return on || (on = 1, qt = function(e) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return r && r[1] || "";
  }), qt;
}
var Ft, sn;
function an() {
  if (sn)
    return Ft;
  sn = 1;
  var t = Z, e = Yi(), r = Ji(), n = ho, o = yo, i = es(), s = ts(), a = bo, u = Ze, l = Ot(), c = rs();
  return Ft = function(f) {
    return new Promise(function(g, w) {
      var m = f.data, y = f.headers, h = f.responseType, _;
      function b() {
        f.cancelToken && f.cancelToken.unsubscribe(_), f.signal && f.signal.removeEventListener("abort", _);
      }
      t.isFormData(m) && t.isStandardBrowserEnv() && delete y["Content-Type"];
      var v = new XMLHttpRequest();
      if (f.auth) {
        var D = f.auth.username || "", P = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        y.Authorization = "Basic " + btoa(D + ":" + P);
      }
      var Y = o(f.baseURL, f.url);
      v.open(f.method.toUpperCase(), n(Y, f.params, f.paramsSerializer), !0), v.timeout = f.timeout;
      function q() {
        if (!!v) {
          var ee = "getAllResponseHeaders" in v ? i(v.getAllResponseHeaders()) : null, A = !h || h === "text" || h === "json" ? v.responseText : v.response, M = {
            data: A,
            status: v.status,
            statusText: v.statusText,
            headers: ee,
            config: f,
            request: v
          };
          e(function(O) {
            g(O), b();
          }, function(O) {
            w(O), b();
          }, M), v = null;
        }
      }
      if ("onloadend" in v ? v.onloadend = q : v.onreadystatechange = function() {
        !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(q);
      }, v.onabort = function() {
        !v || (w(new u("Request aborted", u.ECONNABORTED, f, v)), v = null);
      }, v.onerror = function() {
        w(new u("Network Error", u.ERR_NETWORK, f, v, v)), v = null;
      }, v.ontimeout = function() {
        var A = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded", M = f.transitional || a;
        f.timeoutErrorMessage && (A = f.timeoutErrorMessage), w(new u(A, M.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED, f, v)), v = null;
      }, t.isStandardBrowserEnv()) {
        var J = (f.withCredentials || s(Y)) && f.xsrfCookieName ? r.read(f.xsrfCookieName) : void 0;
        J && (y[f.xsrfHeaderName] = J);
      }
      "setRequestHeader" in v && t.forEach(y, function(A, M) {
        typeof m > "u" && M.toLowerCase() === "content-type" ? delete y[M] : v.setRequestHeader(M, A);
      }), t.isUndefined(f.withCredentials) || (v.withCredentials = !!f.withCredentials), h && h !== "json" && (v.responseType = f.responseType), typeof f.onDownloadProgress == "function" && v.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && (_ = function(ee) {
        !v || (w(!ee || ee && ee.type ? new l() : ee), v.abort(), v = null);
      }, f.cancelToken && f.cancelToken.subscribe(_), f.signal && (f.signal.aborted ? _() : f.signal.addEventListener("abort", _))), m || (m = null);
      var I = c(Y);
      if (I && ["http", "https", "file"].indexOf(I) === -1) {
        w(new u("Unsupported protocol " + I + ":", u.ERR_BAD_REQUEST, f));
        return;
      }
      v.send(m);
    });
  }, Ft;
}
var Vt, ln;
function ns() {
  return ln || (ln = 1, Vt = null), Vt;
}
var G = Z, un = Hi, cn = Ze, os = bo, is = vo, ss = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function fn(t, e) {
  !G.isUndefined(t) && G.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function as() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = an()), t;
}
function ls(t, e, r) {
  if (G.isString(t))
    try {
      return (e || JSON.parse)(t), G.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
var $t = {
  transitional: os,
  adapter: as(),
  transformRequest: [function(e, r) {
    if (un(r, "Accept"), un(r, "Content-Type"), G.isFormData(e) || G.isArrayBuffer(e) || G.isBuffer(e) || G.isStream(e) || G.isFile(e) || G.isBlob(e))
      return e;
    if (G.isArrayBufferView(e))
      return e.buffer;
    if (G.isURLSearchParams(e))
      return fn(r, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var n = G.isObject(e), o = r && r["Content-Type"], i;
    if ((i = G.isFileList(e)) || n && o === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return is(i ? { "files[]": e } : e, s && new s());
    } else if (n || o === "application/json")
      return fn(r, "application/json"), ls(e);
    return e;
  }],
  transformResponse: [function(e) {
    var r = this.transitional || $t.transitional, n = r && r.silentJSONParsing, o = r && r.forcedJSONParsing, i = !n && this.responseType === "json";
    if (i || o && G.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? cn.from(s, cn.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ns()
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
G.forEach(["delete", "get", "head"], function(e) {
  $t.headers[e] = {};
});
G.forEach(["post", "put", "patch"], function(e) {
  $t.headers[e] = G.merge(ss);
});
var Pr = $t, us = Z, cs = Pr, fs = function(e, r, n) {
  var o = this || cs;
  return us.forEach(n, function(s) {
    e = s.call(o, e, r);
  }), e;
}, Gt, dn;
function _o() {
  return dn || (dn = 1, Gt = function(e) {
    return !!(e && e.__CANCEL__);
  }), Gt;
}
var pn = Z, Ht = fs, ds = _o(), ps = Pr, hs = Ot();
function Xt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new hs();
}
var gs = function(e) {
  Xt(e), e.headers = e.headers || {}, e.data = Ht.call(e, e.data, e.headers, e.transformRequest), e.headers = pn.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), pn.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(o) {
    delete e.headers[o];
  });
  var r = e.adapter || ps.adapter;
  return r(e).then(function(o) {
    return Xt(e), o.data = Ht.call(e, o.data, o.headers, e.transformResponse), o;
  }, function(o) {
    return ds(o) || (Xt(e), o && o.response && (o.response.data = Ht.call(e, o.response.data, o.response.headers, e.transformResponse))), Promise.reject(o);
  });
}, le = Z, xo = function(e, r) {
  r = r || {};
  var n = {};
  function o(c, d) {
    return le.isPlainObject(c) && le.isPlainObject(d) ? le.merge(c, d) : le.isPlainObject(d) ? le.merge({}, d) : le.isArray(d) ? d.slice() : d;
  }
  function i(c) {
    if (le.isUndefined(r[c])) {
      if (!le.isUndefined(e[c]))
        return o(void 0, e[c]);
    } else
      return o(e[c], r[c]);
  }
  function s(c) {
    if (!le.isUndefined(r[c]))
      return o(void 0, r[c]);
  }
  function a(c) {
    if (le.isUndefined(r[c])) {
      if (!le.isUndefined(e[c]))
        return o(void 0, e[c]);
    } else
      return o(void 0, r[c]);
  }
  function u(c) {
    if (c in r)
      return o(e[c], r[c]);
    if (c in e)
      return o(void 0, e[c]);
  }
  var l = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: u
  };
  return le.forEach(Object.keys(e).concat(Object.keys(r)), function(d) {
    var f = l[d] || i, p = f(d);
    le.isUndefined(p) && f !== u || (n[d] = p);
  }), n;
}, Yt, hn;
function ko() {
  return hn || (hn = 1, Yt = {
    version: "0.27.2"
  }), Yt;
}
var ws = ko().version, xe = Ze, Ar = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  Ar[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var gn = {};
Ar.transitional = function(e, r, n) {
  function o(i, s) {
    return "[Axios v" + ws + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return function(i, s, a) {
    if (e === !1)
      throw new xe(o(s, " has been removed" + (r ? " in " + r : "")), xe.ERR_DEPRECATED);
    return r && !gn[s] && (gn[s] = !0, console.warn(o(s, " has been deprecated since v" + r + " and will be removed in the near future"))), e ? e(i, s, a) : !0;
  };
};
function ms(t, e, r) {
  if (typeof t != "object")
    throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(t), o = n.length; o-- > 0; ) {
    var i = n[o], s = e[i];
    if (s) {
      var a = t[i], u = a === void 0 || s(a, i, t);
      if (u !== !0)
        throw new xe("option " + i + " must be " + u, xe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new xe("Unknown option " + i, xe.ERR_BAD_OPTION);
  }
}
var bs = {
  assertOptions: ms,
  validators: Ar
}, So = Z, vs = ho, wn = Vi, mn = gs, Dt = xo, ys = yo, Eo = bs, Be = Eo.validators;
function Ye(t) {
  this.defaults = t, this.interceptors = {
    request: new wn(),
    response: new wn()
  };
}
Ye.prototype.request = function(e, r) {
  typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Dt(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var n = r.transitional;
  n !== void 0 && Eo.assertOptions(n, {
    silentJSONParsing: Be.transitional(Be.boolean),
    forcedJSONParsing: Be.transitional(Be.boolean),
    clarifyTimeoutError: Be.transitional(Be.boolean)
  }, !1);
  var o = [], i = !0;
  this.interceptors.request.forEach(function(p) {
    typeof p.runWhen == "function" && p.runWhen(r) === !1 || (i = i && p.synchronous, o.unshift(p.fulfilled, p.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(p) {
    s.push(p.fulfilled, p.rejected);
  });
  var a;
  if (!i) {
    var u = [mn, void 0];
    for (Array.prototype.unshift.apply(u, o), u = u.concat(s), a = Promise.resolve(r); u.length; )
      a = a.then(u.shift(), u.shift());
    return a;
  }
  for (var l = r; o.length; ) {
    var c = o.shift(), d = o.shift();
    try {
      l = c(l);
    } catch (f) {
      d(f);
      break;
    }
  }
  try {
    a = mn(l);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; )
    a = a.then(s.shift(), s.shift());
  return a;
};
Ye.prototype.getUri = function(e) {
  e = Dt(this.defaults, e);
  var r = ys(e.baseURL, e.url);
  return vs(r, e.params, e.paramsSerializer);
};
So.forEach(["delete", "get", "head", "options"], function(e) {
  Ye.prototype[e] = function(r, n) {
    return this.request(Dt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
So.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, s, a) {
      return this.request(Dt(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Ye.prototype[e] = r(), Ye.prototype[e + "Form"] = r(!0);
});
var _s = Ye, Jt, bn;
function xs() {
  if (bn)
    return Jt;
  bn = 1;
  var t = Ot();
  function e(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    var o = this;
    this.promise.then(function(i) {
      if (!!o._listeners) {
        var s, a = o._listeners.length;
        for (s = 0; s < a; s++)
          o._listeners[s](i);
        o._listeners = null;
      }
    }), this.promise.then = function(i) {
      var s, a = new Promise(function(u) {
        o.subscribe(u), s = u;
      }).then(i);
      return a.cancel = function() {
        o.unsubscribe(s);
      }, a;
    }, r(function(s) {
      o.reason || (o.reason = new t(s), n(o.reason));
    });
  }
  return e.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, e.prototype.subscribe = function(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }, e.prototype.unsubscribe = function(n) {
    if (!!this._listeners) {
      var o = this._listeners.indexOf(n);
      o !== -1 && this._listeners.splice(o, 1);
    }
  }, e.source = function() {
    var n, o = new e(function(s) {
      n = s;
    });
    return {
      token: o,
      cancel: n
    };
  }, Jt = e, Jt;
}
var Wt, vn;
function ks() {
  return vn || (vn = 1, Wt = function(e) {
    return function(n) {
      return e.apply(null, n);
    };
  }), Wt;
}
var Kt, yn;
function Ss() {
  if (yn)
    return Kt;
  yn = 1;
  var t = Z;
  return Kt = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Kt;
}
var _n = Z, Es = co, vt = _s, Cs = xo, Ts = Pr;
function Co(t) {
  var e = new vt(t), r = Es(vt.prototype.request, e);
  return _n.extend(r, vt.prototype, e), _n.extend(r, e), r.create = function(o) {
    return Co(Cs(t, o));
  }, r;
}
var se = Co(Ts);
se.Axios = vt;
se.CanceledError = Ot();
se.CancelToken = xs();
se.isCancel = _o();
se.VERSION = ko().version;
se.toFormData = vo;
se.AxiosError = Ze;
se.Cancel = se.CanceledError;
se.all = function(e) {
  return Promise.all(e);
};
se.spread = ks();
se.isAxiosError = Ss();
Sr.exports = se;
Sr.exports.default = se;
(function(t) {
  t.exports = Sr.exports;
})(uo);
const De = /* @__PURE__ */ _i(uo.exports);
var lr = function(t, e) {
  return lr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, lr(t, e);
};
function be(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  lr(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function Rs(t, e, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? i(c.value) : o(c.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function To(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
          return i;
        switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = l;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (c) {
        l = [6, c], o = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Je(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ce(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function Te(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function Ge(t) {
  return this instanceof Ge ? (this.v = t, this) : new Ge(t);
}
function Is(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), o, i = [];
  return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(f) {
    n[f] && (o[f] = function(p) {
      return new Promise(function(g, w) {
        i.push([f, p, g, w]) > 1 || a(f, p);
      });
    });
  }
  function a(f, p) {
    try {
      u(n[f](p));
    } catch (g) {
      d(i[0][3], g);
    }
  }
  function u(f) {
    f.value instanceof Ge ? Promise.resolve(f.value.v).then(l, c) : d(i[0][2], f);
  }
  function l(f) {
    a("next", f);
  }
  function c(f) {
    a("throw", f);
  }
  function d(f, p) {
    f(p), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function Ps(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Je == "function" ? Je(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(s) {
      return new Promise(function(a, u) {
        s = t[i](s), o(a, u, s.done, s.value);
      });
    };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function(l) {
      i({ value: l, done: a });
    }, s);
  }
}
function V(t) {
  return typeof t == "function";
}
function Or(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Qt = Or(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Ct(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var at = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var a = Je(s), u = a.next(); !u.done; u = a.next()) {
              var l = u.value;
              l.remove(this);
            }
          } catch (w) {
            e = { error: w };
          } finally {
            try {
              u && !u.done && (r = a.return) && r.call(a);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          s.remove(this);
      var c = this.initialTeardown;
      if (V(c))
        try {
          c();
        } catch (w) {
          i = w instanceof Qt ? w.errors : [w];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = Je(d), p = f.next(); !p.done; p = f.next()) {
            var g = p.value;
            try {
              xn(g);
            } catch (w) {
              i = i != null ? i : [], w instanceof Qt ? i = Te(Te([], Ce(i)), Ce(w.errors)) : i.push(w);
            }
          }
        } catch (w) {
          n = { error: w };
        } finally {
          try {
            p && !p.done && (o = f.return) && o.call(f);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (i)
        throw new Qt(i);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        xn(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && Ct(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && Ct(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Ro = at.EMPTY;
function Io(t) {
  return t instanceof at || t && "closed" in t && V(t.remove) && V(t.add) && V(t.unsubscribe);
}
function xn(t) {
  V(t) ? t() : t.unsubscribe();
}
var $r = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, ur = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    var o = ur.delegate;
    return o != null && o.setTimeout ? o.setTimeout.apply(o, Te([t, e], Ce(r))) : setTimeout.apply(void 0, Te([t, e], Ce(r)));
  },
  clearTimeout: function(t) {
    var e = ur.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Po(t) {
  ur.setTimeout(function() {
    throw t;
  });
}
function cr() {
}
var dt = null;
function yt(t) {
  if ($r.useDeprecatedSynchronousErrorHandling) {
    var e = !dt;
    if (e && (dt = { errorThrown: !1, error: null }), t(), e) {
      var r = dt, n = r.errorThrown, o = r.error;
      if (dt = null, n)
        throw o;
    }
  } else
    t();
}
var Dr = function(t) {
  be(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, Io(r) && r.add(n)) : n.destination = Ds, n;
  }
  return e.create = function(r, n, o) {
    return new We(r, n, o);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
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
}(at), As = Function.prototype.bind;
function Zt(t, e) {
  return As.call(t, e);
}
var Os = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        pt(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        pt(n);
      }
    else
      pt(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        pt(r);
      }
  }, t;
}(), We = function(t) {
  be(e, t);
  function e(r, n, o) {
    var i = t.call(this) || this, s;
    if (V(r) || !r)
      s = {
        next: r != null ? r : void 0,
        error: n != null ? n : void 0,
        complete: o != null ? o : void 0
      };
    else {
      var a;
      i && $r.useDeprecatedNextContext ? (a = Object.create(r), a.unsubscribe = function() {
        return i.unsubscribe();
      }, s = {
        next: r.next && Zt(r.next, a),
        error: r.error && Zt(r.error, a),
        complete: r.complete && Zt(r.complete, a)
      }) : s = r;
    }
    return i.destination = new Os(s), i;
  }
  return e;
}(Dr);
function pt(t) {
  Po(t);
}
function $s(t) {
  throw t;
}
var Ds = {
  closed: !0,
  next: cr,
  error: $s,
  complete: cr
}, zr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function lt(t) {
  return t;
}
function zs(t) {
  return t.length === 0 ? lt : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var ne = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var o = this, i = js(e) ? e : new We(e, r, n);
    return yt(function() {
      var s = o, a = s.operator, u = s.source;
      i.add(a ? a.call(i, u) : u ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = kn(r), new r(function(o, i) {
      var s = new We({
        next: function(a) {
          try {
            e(a);
          } catch (u) {
            i(u), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(s);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[zr] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return zs(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = kn(e), new e(function(n, o) {
      var i;
      r.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(i);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function kn(t) {
  var e;
  return (e = t != null ? t : $r.Promise) !== null && e !== void 0 ? e : Promise;
}
function Ns(t) {
  return t && V(t.next) && V(t.error) && V(t.complete);
}
function js(t) {
  return t && t instanceof Dr || Ns(t) && Io(t);
}
function Us(t) {
  return V(t == null ? void 0 : t.lift);
}
function ce(t) {
  return function(e) {
    if (Us(e))
      return e.lift(function(r) {
        try {
          return t(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function ae(t, e, r, n, o) {
  return new Ms(t, e, r, n, o);
}
var Ms = function(t) {
  be(e, t);
  function e(r, n, o, i, s, a) {
    var u = t.call(this, r) || this;
    return u.onFinalize = s, u.shouldUnsubscribe = a, u._next = n ? function(l) {
      try {
        n(l);
      } catch (c) {
        r.error(c);
      }
    } : t.prototype._next, u._error = i ? function(l) {
      try {
        i(l);
      } catch (c) {
        r.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, u._complete = o ? function() {
      try {
        o();
      } catch (l) {
        r.error(l);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, e;
}(Dr), Bs = Or(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ue = function(t) {
  be(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new Sn(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Bs();
  }, e.prototype.next = function(r) {
    var n = this;
    yt(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = Je(n.currentObservers), a = s.next(); !a.done; a = s.next()) {
            var u = a.value;
            u.next(r);
          }
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            a && !a.done && (i = s.return) && i.call(s);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    yt(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    yt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, e.prototype._innerSubscribe = function(r) {
    var n = this, o = this, i = o.hasError, s = o.isStopped, a = o.observers;
    return i || s ? Ro : (this.currentObservers = null, a.push(r), new at(function() {
      n.currentObservers = null, Ct(a, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? r.error(i) : s && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new ne();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new Sn(r, n);
  }, e;
}(ne), Sn = function(t) {
  be(e, t);
  function e(r, n) {
    var o = t.call(this) || this;
    return o.destination = r, o.source = n, o;
  }
  return e.prototype.next = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
  }, e.prototype.error = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
  }, e.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, e.prototype._subscribe = function(r) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Ro;
  }, e;
}(ue), Ao = function(t) {
  be(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(r) {
    var n = t.prototype._subscribe.call(this, r);
    return !n.closed && r.next(this._value), n;
  }, e.prototype.getValue = function() {
    var r = this, n = r.hasError, o = r.thrownError, i = r._value;
    if (n)
      throw o;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(r) {
    t.prototype.next.call(this, this._value = r);
  }, e;
}(ue), Nr = {
  now: function() {
    return (Nr.delegate || Date).now();
  },
  delegate: void 0
}, Oo = function(t) {
  be(e, t);
  function e(r, n, o) {
    r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), o === void 0 && (o = Nr);
    var i = t.call(this) || this;
    return i._bufferSize = r, i._windowTime = n, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, r), i._windowTime = Math.max(1, n), i;
  }
  return e.prototype.next = function(r) {
    var n = this, o = n.isStopped, i = n._buffer, s = n._infiniteTimeWindow, a = n._timestampProvider, u = n._windowTime;
    o || (i.push(r), !s && i.push(a.now() + u)), this._trimBuffer(), t.prototype.next.call(this, r);
  }, e.prototype._subscribe = function(r) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(r), o = this, i = o._infiniteTimeWindow, s = o._buffer, a = s.slice(), u = 0; u < a.length && !r.closed; u += i ? 1 : 2)
      r.next(a[u]);
    return this._checkFinalizedStatuses(r), n;
  }, e.prototype._trimBuffer = function() {
    var r = this, n = r._bufferSize, o = r._timestampProvider, i = r._buffer, s = r._infiniteTimeWindow, a = (s ? 1 : 2) * n;
    if (n < 1 / 0 && a < i.length && i.splice(0, i.length - a), !s) {
      for (var u = o.now(), l = 0, c = 1; c < i.length && i[c] <= u; c += 2)
        l = c;
      l && i.splice(0, l + 1);
    }
  }, e;
}(ue), Ls = function(t) {
  be(e, t);
  function e(r, n) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(r, n) {
    return this;
  }, e;
}(at), Tt = {
  setInterval: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    var o = Tt.delegate;
    return o != null && o.setInterval ? o.setInterval.apply(o, Te([t, e], Ce(r))) : setInterval.apply(void 0, Te([t, e], Ce(r)));
  },
  clearInterval: function(t) {
    var e = Tt.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, qs = function(t) {
  be(e, t);
  function e(r, n) {
    var o = t.call(this, r, n) || this;
    return o.scheduler = r, o.work = n, o.pending = !1, o;
  }
  return e.prototype.schedule = function(r, n) {
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = r;
    var o = this.id, i = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(i, o, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(i, this.id, n), this;
  }, e.prototype.requestAsyncId = function(r, n, o) {
    return o === void 0 && (o = 0), Tt.setInterval(r.flush.bind(r, this), o);
  }, e.prototype.recycleAsyncId = function(r, n, o) {
    if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
      return n;
    Tt.clearInterval(n);
  }, e.prototype.execute = function(r, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var o = this._execute(r, n);
    if (o)
      return o;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(r, n) {
    var o = !1, i;
    try {
      this.work(r);
    } catch (s) {
      o = !0, i = s || new Error("Scheduled action threw falsy error");
    }
    if (o)
      return this.unsubscribe(), i;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var r = this, n = r.id, o = r.scheduler, i = o.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Ct(i, this), n != null && (this.id = this.recycleAsyncId(o, n, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Ls), En = function() {
  function t(e, r) {
    r === void 0 && (r = t.now), this.schedulerActionCtor = e, this.now = r;
  }
  return t.prototype.schedule = function(e, r, n) {
    return r === void 0 && (r = 0), new this.schedulerActionCtor(this, e).schedule(n, r);
  }, t.now = Nr.now, t;
}(), Fs = function(t) {
  be(e, t);
  function e(r, n) {
    n === void 0 && (n = En.now);
    var o = t.call(this, r, n) || this;
    return o.actions = [], o._active = !1, o._scheduled = void 0, o;
  }
  return e.prototype.flush = function(r) {
    var n = this.actions;
    if (this._active) {
      n.push(r);
      return;
    }
    var o;
    this._active = !0;
    do
      if (o = r.execute(r.state, r.delay))
        break;
    while (r = n.shift());
    if (this._active = !1, o) {
      for (; r = n.shift(); )
        r.unsubscribe();
      throw o;
    }
  }, e;
}(En), jr = new Fs(qs), Vs = jr, Gs = new ne(function(t) {
  return t.complete();
});
function $o(t) {
  return t && V(t.schedule);
}
function Do(t) {
  return t[t.length - 1];
}
function Hs(t) {
  return V(Do(t)) ? t.pop() : void 0;
}
function zo(t) {
  return $o(Do(t)) ? t.pop() : void 0;
}
var No = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function jo(t) {
  return V(t == null ? void 0 : t.then);
}
function Uo(t) {
  return V(t[zr]);
}
function Mo(t) {
  return Symbol.asyncIterator && V(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Bo(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Xs() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Lo = Xs();
function qo(t) {
  return V(t == null ? void 0 : t[Lo]);
}
function Fo(t) {
  return Is(this, arguments, function() {
    var r, n, o, i;
    return To(this, function(s) {
      switch (s.label) {
        case 0:
          r = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Ge(r.read())];
        case 3:
          return n = s.sent(), o = n.value, i = n.done, i ? [4, Ge(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Ge(o)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Vo(t) {
  return V(t == null ? void 0 : t.getReader);
}
function Pe(t) {
  if (t instanceof ne)
    return t;
  if (t != null) {
    if (Uo(t))
      return Ys(t);
    if (No(t))
      return Js(t);
    if (jo(t))
      return Ws(t);
    if (Mo(t))
      return Go(t);
    if (qo(t))
      return Ks(t);
    if (Vo(t))
      return Qs(t);
  }
  throw Bo(t);
}
function Ys(t) {
  return new ne(function(e) {
    var r = t[zr]();
    if (V(r.subscribe))
      return r.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Js(t) {
  return new ne(function(e) {
    for (var r = 0; r < t.length && !e.closed; r++)
      e.next(t[r]);
    e.complete();
  });
}
function Ws(t) {
  return new ne(function(e) {
    t.then(function(r) {
      e.closed || (e.next(r), e.complete());
    }, function(r) {
      return e.error(r);
    }).then(null, Po);
  });
}
function Ks(t) {
  return new ne(function(e) {
    var r, n;
    try {
      for (var o = Je(t), i = o.next(); !i.done; i = o.next()) {
        var s = i.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (a) {
      r = { error: a };
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    e.complete();
  });
}
function Go(t) {
  return new ne(function(e) {
    Zs(t, e).catch(function(r) {
      return e.error(r);
    });
  });
}
function Qs(t) {
  return Go(Fo(t));
}
function Zs(t, e) {
  var r, n, o, i;
  return Rs(this, void 0, void 0, function() {
    var s, a;
    return To(this, function(u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), r = Ps(t), u.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = u.sent(), !!n.done)
            return [3, 4];
          if (s = n.value, e.next(s), e.closed)
            return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = u.sent(), o = { error: a }, [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
        case 7:
          u.sent(), u.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (o)
            throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function Se(t, e, r, n, o) {
  n === void 0 && (n = 0), o === void 0 && (o = !1);
  var i = e.schedule(function() {
    r(), o ? t.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (t.add(i), !o)
    return i;
}
function Ho(t, e) {
  return e === void 0 && (e = 0), ce(function(r, n) {
    r.subscribe(ae(n, function(o) {
      return Se(n, t, function() {
        return n.next(o);
      }, e);
    }, function() {
      return Se(n, t, function() {
        return n.complete();
      }, e);
    }, function(o) {
      return Se(n, t, function() {
        return n.error(o);
      }, e);
    }));
  });
}
function Xo(t, e) {
  return e === void 0 && (e = 0), ce(function(r, n) {
    n.add(t.schedule(function() {
      return r.subscribe(n);
    }, e));
  });
}
function ea(t, e) {
  return Pe(t).pipe(Xo(e), Ho(e));
}
function ta(t, e) {
  return Pe(t).pipe(Xo(e), Ho(e));
}
function ra(t, e) {
  return new ne(function(r) {
    var n = 0;
    return e.schedule(function() {
      n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
    });
  });
}
function na(t, e) {
  return new ne(function(r) {
    var n;
    return Se(r, e, function() {
      n = t[Lo](), Se(r, e, function() {
        var o, i, s;
        try {
          o = n.next(), i = o.value, s = o.done;
        } catch (a) {
          r.error(a);
          return;
        }
        s ? r.complete() : r.next(i);
      }, 0, !0);
    }), function() {
      return V(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function Yo(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new ne(function(r) {
    Se(r, e, function() {
      var n = t[Symbol.asyncIterator]();
      Se(r, e, function() {
        n.next().then(function(o) {
          o.done ? r.complete() : r.next(o.value);
        });
      }, 0, !0);
    });
  });
}
function oa(t, e) {
  return Yo(Fo(t), e);
}
function ia(t, e) {
  if (t != null) {
    if (Uo(t))
      return ea(t, e);
    if (No(t))
      return ra(t, e);
    if (jo(t))
      return ta(t, e);
    if (Mo(t))
      return Yo(t, e);
    if (qo(t))
      return na(t, e);
    if (Vo(t))
      return oa(t, e);
  }
  throw Bo(t);
}
function et(t, e) {
  return e ? ia(t, e) : Pe(t);
}
function ot() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = zo(t);
  return et(t, r);
}
var sa = Or(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function fr(t, e) {
  var r = typeof e == "object";
  return new Promise(function(n, o) {
    var i = new We({
      next: function(s) {
        n(s), i.unsubscribe();
      },
      error: o,
      complete: function() {
        r ? n(e.defaultValue) : o(new sa());
      }
    });
    t.subscribe(i);
  });
}
function aa(t) {
  return t instanceof Date && !isNaN(t);
}
function dr(t, e) {
  return ce(function(r, n) {
    var o = 0;
    r.subscribe(ae(n, function(i) {
      n.next(t.call(e, i, o++));
    }));
  });
}
var la = Array.isArray;
function ua(t, e) {
  return la(e) ? t.apply(void 0, Te([], Ce(e))) : t(e);
}
function ca(t) {
  return dr(function(e) {
    return ua(t, e);
  });
}
var fa = Array.isArray, da = Object.getPrototypeOf, pa = Object.prototype, ha = Object.keys;
function ga(t) {
  if (t.length === 1) {
    var e = t[0];
    if (fa(e))
      return { args: e, keys: null };
    if (wa(e)) {
      var r = ha(e);
      return {
        args: r.map(function(n) {
          return e[n];
        }),
        keys: r
      };
    }
  }
  return { args: t, keys: null };
}
function wa(t) {
  return t && typeof t == "object" && da(t) === pa;
}
function ma(t, e) {
  return t.reduce(function(r, n, o) {
    return r[n] = e[o], r;
  }, {});
}
function Jo() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = zo(t), n = Hs(t), o = ga(t), i = o.args, s = o.keys;
  if (i.length === 0)
    return et([], r);
  var a = new ne(ba(i, r, s ? function(u) {
    return ma(s, u);
  } : lt));
  return n ? a.pipe(ca(n)) : a;
}
function ba(t, e, r) {
  return r === void 0 && (r = lt), function(n) {
    Cn(e, function() {
      for (var o = t.length, i = new Array(o), s = o, a = o, u = function(c) {
        Cn(e, function() {
          var d = et(t[c], e), f = !1;
          d.subscribe(ae(n, function(p) {
            i[c] = p, f || (f = !0, a--), a || n.next(r(i.slice()));
          }, function() {
            --s || n.complete();
          }));
        }, n);
      }, l = 0; l < o; l++)
        u(l);
    }, n);
  };
}
function Cn(t, e, r) {
  t ? Se(r, t, e) : e();
}
function va(t, e, r) {
  t === void 0 && (t = 0), r === void 0 && (r = Vs);
  var n = -1;
  return e != null && ($o(e) ? r = e : n = e), new ne(function(o) {
    var i = aa(t) ? +t - r.now() : t;
    i < 0 && (i = 0);
    var s = 0;
    return r.schedule(function() {
      o.closed || (o.next(s++), 0 <= n ? this.schedule(void 0, n) : o.complete());
    }, i);
  });
}
function Ur(t, e) {
  return ce(function(r, n) {
    var o = 0;
    r.subscribe(ae(n, function(i) {
      return t.call(e, i, o++) && n.next(i);
    }));
  });
}
function Wo(t) {
  return ce(function(e, r) {
    var n = null, o = !1, i;
    n = e.subscribe(ae(r, void 0, void 0, function(s) {
      i = Pe(t(s, Wo(t)(e))), n ? (n.unsubscribe(), n = null, i.subscribe(r)) : o = !0;
    })), o && (n.unsubscribe(), n = null, i.subscribe(r));
  });
}
function ya(t, e) {
  return e === void 0 && (e = jr), ce(function(r, n) {
    var o = null, i = null, s = null, a = function() {
      if (o) {
        o.unsubscribe(), o = null;
        var l = i;
        i = null, n.next(l);
      }
    };
    function u() {
      var l = s + t, c = e.now();
      if (c < l) {
        o = this.schedule(void 0, l - c), n.add(o);
        return;
      }
      a();
    }
    r.subscribe(ae(n, function(l) {
      i = l, s = e.now(), o || (o = e.schedule(u, t), n.add(o));
    }, function() {
      a(), n.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
function _a(t) {
  return t <= 0 ? function() {
    return Gs;
  } : ce(function(e, r) {
    var n = 0;
    e.subscribe(ae(r, function(o) {
      ++n <= t && (r.next(o), t <= n && r.complete());
    }));
  });
}
function xa(t, e) {
  return e === void 0 && (e = lt), t = t != null ? t : ka, ce(function(r, n) {
    var o, i = !0;
    r.subscribe(ae(n, function(s) {
      var a = e(s);
      (i || !t(o, a)) && (i = !1, o = a, n.next(s));
    }));
  });
}
function ka(t, e) {
  return t === e;
}
function Sa(t, e) {
  return xa(function(r, n) {
    return e ? e(r[t], n[t]) : r[t] === n[t];
  });
}
function Ea(t) {
  t === void 0 && (t = {});
  var e = t.connector, r = e === void 0 ? function() {
    return new ue();
  } : e, n = t.resetOnError, o = n === void 0 ? !0 : n, i = t.resetOnComplete, s = i === void 0 ? !0 : i, a = t.resetOnRefCountZero, u = a === void 0 ? !0 : a;
  return function(l) {
    var c, d, f, p = 0, g = !1, w = !1, m = function() {
      d == null || d.unsubscribe(), d = void 0;
    }, y = function() {
      m(), c = f = void 0, g = w = !1;
    }, h = function() {
      var _ = c;
      y(), _ == null || _.unsubscribe();
    };
    return ce(function(_, b) {
      p++, !w && !g && m();
      var v = f = f != null ? f : r();
      b.add(function() {
        p--, p === 0 && !w && !g && (d = er(h, u));
      }), v.subscribe(b), !c && p > 0 && (c = new We({
        next: function(D) {
          return v.next(D);
        },
        error: function(D) {
          w = !0, m(), d = er(y, o, D), v.error(D);
        },
        complete: function() {
          g = !0, m(), d = er(y, s), v.complete();
        }
      }), Pe(_).subscribe(c));
    })(l);
  };
}
function er(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var o = new We({
      next: function() {
        o.unsubscribe(), t();
      }
    });
    return e.apply(void 0, Te([], Ce(r))).subscribe(o);
  }
}
function Ca(t, e, r) {
  var n, o, i, s, a = !1;
  return t && typeof t == "object" ? (n = t.bufferSize, s = n === void 0 ? 1 / 0 : n, o = t.windowTime, e = o === void 0 ? 1 / 0 : o, i = t.refCount, a = i === void 0 ? !1 : i, r = t.scheduler) : s = t != null ? t : 1 / 0, Ea({
    connector: function() {
      return new Oo(s, e, r);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: a
  });
}
function Ta(t) {
  return Ur(function(e, r) {
    return t <= r;
  });
}
function Ko(t, e) {
  return ce(function(r, n) {
    var o = null, i = 0, s = !1, a = function() {
      return s && !o && n.complete();
    };
    r.subscribe(ae(n, function(u) {
      o == null || o.unsubscribe();
      var l = 0, c = i++;
      Pe(t(u, c)).subscribe(o = ae(n, function(d) {
        return n.next(e ? e(u, d, c, l++) : d);
      }, function() {
        o = null, a();
      }));
    }, function() {
      s = !0, a();
    }));
  });
}
function Ee(t) {
  return ce(function(e, r) {
    Pe(t).subscribe(ae(r, function() {
      return r.complete();
    }, cr)), !r.closed && e.subscribe(r);
  });
}
function Ra(t, e, r) {
  var n = V(t) || e || r ? { next: t, error: e, complete: r } : t;
  return n ? ce(function(o, i) {
    var s;
    (s = n.subscribe) === null || s === void 0 || s.call(n);
    var a = !0;
    o.subscribe(ae(i, function(u) {
      var l;
      (l = n.next) === null || l === void 0 || l.call(n, u), i.next(u);
    }, function() {
      var u;
      a = !1, (u = n.complete) === null || u === void 0 || u.call(n), i.complete();
    }, function(u) {
      var l;
      a = !1, (l = n.error) === null || l === void 0 || l.call(n, u), i.error(u);
    }, function() {
      var u, l;
      a && ((u = n.unsubscribe) === null || u === void 0 || u.call(n)), (l = n.finalize) === null || l === void 0 || l.call(n);
    }));
  }) : lt;
}
var Qo = {
  leading: !0,
  trailing: !1
};
function Ia(t, e) {
  return e === void 0 && (e = Qo), ce(function(r, n) {
    var o = e.leading, i = e.trailing, s = !1, a = null, u = null, l = !1, c = function() {
      u == null || u.unsubscribe(), u = null, i && (p(), l && n.complete());
    }, d = function() {
      u = null, l && n.complete();
    }, f = function(g) {
      return u = Pe(t(g)).subscribe(ae(n, c, d));
    }, p = function() {
      if (s) {
        s = !1;
        var g = a;
        a = null, n.next(g), !l && f(g);
      }
    };
    r.subscribe(ae(n, function(g) {
      s = !0, a = g, !(u && !u.closed) && (o ? p() : f(g));
    }, function() {
      l = !0, !(i && s && u && !u.closed) && n.complete();
    }));
  });
}
function Pa(t, e, r) {
  e === void 0 && (e = jr), r === void 0 && (r = Qo);
  var n = va(t, e);
  return Ia(function() {
    return n;
  }, r);
}
class Mr {
  constructor(e, r) {
    this.httpConfig = e, r instanceof ne ? r.subscribe((n) => this.accessToken = n) : this.accessToken = r;
  }
  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.accessToken}`
    };
  }
  getStructureUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Structure}`;
  }
  static requestHttpConfig(e) {
    return De.get(`${e}/assets/conf/application.config`).then((r) => r.data);
  }
}
var rt = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? i(c.value) : o(c.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
};
class ut extends Mr {
  constructor(e, r) {
    super(e, r);
  }
  getEntityById(e, r) {
    return rt(this, void 0, void 0, function* () {
      return this.getPartialEntityById(e, r, null);
    });
  }
  getPartialEntityById(e, r, n) {
    return rt(this, void 0, void 0, function* () {
      let o = `${this._createBaseUrlByType(e)}/${r}`;
      n && (o += `?$projection=${JSON.stringify(n)}`);
      const i = this.getAuthorizationHeader();
      return (yield De.get(o, { headers: i })).data;
    });
  }
  queryConfiguration(e, r, n, o) {
    return rt(this, void 0, void 0, function* () {
      const i = `${this._createBaseUrlByType(e)}/query`, s = {
        $filter: JSON.stringify(r),
        $paging: n ? JSON.stringify(n) : null,
        $projection: o ? JSON.stringify(o) : null
      }, a = this.getAuthorizationHeader(), u = yield De.post(i, s, { headers: a });
      if (n) {
        console.log(u.headers);
        const l = JSON.parse(u.headers["paging-headers"]), c = Number(l.TotalCount);
        return {
          data: u.data,
          total: c
        };
      }
      return {
        data: u.data,
        total: u.data.length
      };
    });
  }
  resolvePathName(e) {
    return rt(this, void 0, void 0, function* () {
      const r = yield this.queryConfiguration(H.Group, { Id: { $in: e } });
      return e.map((n) => {
        var o, i;
        return (i = (o = r.data.find((s) => s.Id === n)) === null || o === void 0 ? void 0 : o.Name) !== null && i !== void 0 ? i : n;
      }).join("/");
    });
  }
  uploadProcessImage(e, r, n = "process-image.svg") {
    return rt(this, void 0, void 0, function* () {
      const o = `${this._createBaseUrlByType(H.ProcessImage)}/${e}/file/image`, i = this.getAuthorizationHeader(), s = new Blob([r], { type: "image/svg+xml" }), a = new FormData();
      a.append("file", s, "process-image.svg"), yield De.post(o, a, { headers: i });
    });
  }
  _createBaseUrlByType(e) {
    return `${this.getStructureUrl()}${vi[e]}`;
  }
}
var tr = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? i(c.value) : o(c.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
};
class Br extends Mr {
  constructor(e, r) {
    super(e, r);
  }
  getTenantViewById(e) {
    return tr(this, void 0, void 0, function* () {
      const r = `${this.getStructureUrl()}/tenant/${e}/view`, n = this.getAuthorizationHeader();
      return (yield De.get(r, { headers: n })).data;
    });
  }
  getTopTenants() {
    return tr(this, void 0, void 0, function* () {
      const e = `${this.getStructureUrl()}/tenant/top`, r = this.getAuthorizationHeader();
      return (yield De.get(e, { headers: r })).data;
    });
  }
  getNextTenants(e) {
    return tr(this, void 0, void 0, function* () {
      const r = `${this.getStructureUrl()}/tenant/${e}/next`, n = this.getAuthorizationHeader();
      return (yield De.get(r, { headers: n })).data;
    });
  }
}
var rr = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? i(c.value) : o(c.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
};
class Lr {
  constructor(e) {
    this.httpService = e, this._nameCache = {};
  }
  resolveEntityPath(e, r, n = !1, o) {
    return rr(this, void 0, void 0, function* () {
      const i = yield this.httpService.getPartialEntityById(e, r, { Name: 1, Path: 1 });
      let s = yield this.resolvePathName(i.Path.splice(o ? i.Path.length - o : 0, i.Path.length));
      return n && (s = s + "/" + i.Name.Value), s;
    });
  }
  resolvePathName(e) {
    return rr(this, void 0, void 0, function* () {
      return e.length === 0 ? "" : fr(Jo(e.map((r) => this.resolveName(H.Group, r))).pipe(dr((r) => r.join(" / "))));
    });
  }
  resolveName(e, r) {
    return rr(this, void 0, void 0, function* () {
      return this._nameCache[r] || (this._nameCache[r] = et(this.httpService.getPartialEntityById(e, r, { Name: 1 })).pipe(dr((n) => n.Name.Value), Ca(1), Wo(() => ot(r)))), fr(this._nameCache[r]);
    });
  }
}
globalThis && globalThis.__awaiter;
var pr;
(function(t) {
  t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
})(pr || (pr = {}));
const ie = pr;
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
var hr = function(t, e) {
  return hr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      n.hasOwnProperty(o) && (r[o] = n[o]);
  }, hr(t, e);
};
function qr(t, e) {
  hr(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function Aa(t, e, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? i(c.value) : o(c.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function Oa(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
          return i;
        switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = l;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (c) {
        l = [6, c], o = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function ht(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Rt(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function Oe() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Rt(arguments[e]));
  return t;
}
function Zo(t) {
  return !!t.useClass;
}
function gr(t) {
  return !!t.useFactory;
}
var ei = function() {
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
    var r = this, n = {}, o = !1, i, s = function() {
      return o || (i = e(r.wrap()), o = !0), i;
    };
    return new Proxy(n, this.createHandler(s));
  }, t.prototype.createHandler = function(e) {
    var r = {}, n = function(o) {
      r[o] = function() {
        for (var i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        i[0] = e();
        var a = Reflect[o];
        return a.apply(void 0, Oe(i));
      };
    };
    return this.reflectMethods.forEach(n), r;
  }, t;
}();
function Le(t) {
  return typeof t == "string" || typeof t == "symbol";
}
function $a(t) {
  return typeof t == "object" && "token" in t && "multiple" in t;
}
function Tn(t) {
  return typeof t == "object" && "token" in t && "transform" in t;
}
function Da(t) {
  return typeof t == "function" || t instanceof ei;
}
function _t(t) {
  return !!t.useToken;
}
function xt(t) {
  return t.useValue != null;
}
function za(t) {
  return Zo(t) || xt(t) || _t(t) || gr(t);
}
var Fr = function() {
  function t() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  return t.prototype.entries = function() {
    return this._registryMap.entries();
  }, t.prototype.getAll = function(e) {
    return this.ensure(e), this._registryMap.get(e);
  }, t.prototype.get = function(e) {
    this.ensure(e);
    var r = this._registryMap.get(e);
    return r[r.length - 1] || null;
  }, t.prototype.set = function(e, r) {
    this.ensure(e), this._registryMap.get(e).push(r);
  }, t.prototype.setAll = function(e, r) {
    this._registryMap.set(e, r);
  }, t.prototype.has = function(e) {
    return this.ensure(e), this._registryMap.get(e).length > 0;
  }, t.prototype.clear = function() {
    this._registryMap.clear();
  }, t.prototype.ensure = function(e) {
    this._registryMap.has(e) || this._registryMap.set(e, []);
  }, t;
}(), Na = function(t) {
  qr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Fr), Rn = function() {
  function t() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return t;
}();
function ja(t, e) {
  if (t === null)
    return "at position #" + e;
  var r = t.split(",")[e].trim();
  return '"' + r + '" at position #' + e;
}
function Ua(t, e, r) {
  return r === void 0 && (r = "    "), Oe([t], e.message.split(`
`).map(function(n) {
    return r + n;
  })).join(`
`);
}
function Ma(t, e, r) {
  var n = Rt(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), o = n[1], i = o === void 0 ? null : o, s = ja(i, e);
  return Ua("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', r);
}
function Ba(t) {
  if (typeof t.dispose != "function")
    return !1;
  var e = t.dispose;
  return !(e.length > 0);
}
var La = function(t) {
  qr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Fr), qa = function(t) {
  qr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Fr), Fa = function() {
  function t() {
    this.preResolution = new La(), this.postResolution = new qa();
  }
  return t;
}(), Va = /* @__PURE__ */ new Map(), Ga = function() {
  function t(e) {
    this.parent = e, this._registry = new Na(), this.interceptors = new Fa(), this.disposed = !1, this.disposables = /* @__PURE__ */ new Set();
  }
  return t.prototype.register = function(e, r, n) {
    n === void 0 && (n = { lifecycle: ie.Transient }), this.ensureNotDisposed();
    var o;
    if (za(r) ? o = r : o = { useClass: r }, _t(o))
      for (var i = [e], s = o; s != null; ) {
        var a = s.useToken;
        if (i.includes(a))
          throw new Error("Token registration cycle detected! " + Oe(i, [a]).join(" -> "));
        i.push(a);
        var u = this._registry.get(a);
        u && _t(u.provider) ? s = u.provider : s = null;
      }
    if ((n.lifecycle === ie.Singleton || n.lifecycle == ie.ContainerScoped || n.lifecycle == ie.ResolutionScoped) && (xt(o) || gr(o)))
      throw new Error('Cannot use lifecycle "' + ie[n.lifecycle] + '" with ValueProviders or FactoryProviders');
    return this._registry.set(e, { provider: o, options: n }), this;
  }, t.prototype.registerType = function(e, r) {
    return this.ensureNotDisposed(), Le(r) ? this.register(e, {
      useToken: r
    }) : this.register(e, {
      useClass: r
    });
  }, t.prototype.registerInstance = function(e, r) {
    return this.ensureNotDisposed(), this.register(e, {
      useValue: r
    });
  }, t.prototype.registerSingleton = function(e, r) {
    if (this.ensureNotDisposed(), Le(e)) {
      if (Le(r))
        return this.register(e, {
          useToken: r
        }, { lifecycle: ie.Singleton });
      if (r)
        return this.register(e, {
          useClass: r
        }, { lifecycle: ie.Singleton });
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var n = e;
    return r && !Le(r) && (n = r), this.register(e, {
      useClass: n
    }, { lifecycle: ie.Singleton });
  }, t.prototype.resolve = function(e, r) {
    r === void 0 && (r = new Rn()), this.ensureNotDisposed();
    var n = this.getRegistration(e);
    if (!n && Le(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "Single"), n) {
      var o = this.resolveRegistration(n, r);
      return this.executePostResolutionInterceptor(e, o, "Single"), o;
    }
    if (Da(e)) {
      var o = this.construct(e, r);
      return this.executePostResolutionInterceptor(e, o, "Single"), o;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  }, t.prototype.executePreResolutionInterceptor = function(e, r) {
    var n, o;
    if (this.interceptors.preResolution.has(e)) {
      var i = [];
      try {
        for (var s = ht(this.interceptors.preResolution.getAll(e)), a = s.next(); !a.done; a = s.next()) {
          var u = a.value;
          u.options.frequency != "Once" && i.push(u), u.callback(e, r);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (o = s.return) && o.call(s);
        } finally {
          if (n)
            throw n.error;
        }
      }
      this.interceptors.preResolution.setAll(e, i);
    }
  }, t.prototype.executePostResolutionInterceptor = function(e, r, n) {
    var o, i;
    if (this.interceptors.postResolution.has(e)) {
      var s = [];
      try {
        for (var a = ht(this.interceptors.postResolution.getAll(e)), u = a.next(); !u.done; u = a.next()) {
          var l = u.value;
          l.options.frequency != "Once" && s.push(l), l.callback(e, r, n);
        }
      } catch (c) {
        o = { error: c };
      } finally {
        try {
          u && !u.done && (i = a.return) && i.call(a);
        } finally {
          if (o)
            throw o.error;
        }
      }
      this.interceptors.postResolution.setAll(e, s);
    }
  }, t.prototype.resolveRegistration = function(e, r) {
    if (this.ensureNotDisposed(), e.options.lifecycle === ie.ResolutionScoped && r.scopedResolutions.has(e))
      return r.scopedResolutions.get(e);
    var n = e.options.lifecycle === ie.Singleton, o = e.options.lifecycle === ie.ContainerScoped, i = n || o, s;
    return xt(e.provider) ? s = e.provider.useValue : _t(e.provider) ? s = i ? e.instance || (e.instance = this.resolve(e.provider.useToken, r)) : this.resolve(e.provider.useToken, r) : Zo(e.provider) ? s = i ? e.instance || (e.instance = this.construct(e.provider.useClass, r)) : this.construct(e.provider.useClass, r) : gr(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, r), e.options.lifecycle === ie.ResolutionScoped && r.scopedResolutions.set(e, s), s;
  }, t.prototype.resolveAll = function(e, r) {
    var n = this;
    r === void 0 && (r = new Rn()), this.ensureNotDisposed();
    var o = this.getAllRegistrations(e);
    if (!o && Le(e))
      throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
    if (this.executePreResolutionInterceptor(e, "All"), o) {
      var i = o.map(function(a) {
        return n.resolveRegistration(a, r);
      });
      return this.executePostResolutionInterceptor(e, i, "All"), i;
    }
    var s = [this.construct(e, r)];
    return this.executePostResolutionInterceptor(e, s, "All"), s;
  }, t.prototype.isRegistered = function(e, r) {
    return r === void 0 && (r = !1), this.ensureNotDisposed(), this._registry.has(e) || r && (this.parent || !1) && this.parent.isRegistered(e, !0);
  }, t.prototype.reset = function() {
    this.ensureNotDisposed(), this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear();
  }, t.prototype.clearInstances = function() {
    var e, r;
    this.ensureNotDisposed();
    try {
      for (var n = ht(this._registry.entries()), o = n.next(); !o.done; o = n.next()) {
        var i = Rt(o.value, 2), s = i[0], a = i[1];
        this._registry.setAll(s, a.filter(function(u) {
          return !xt(u.provider);
        }).map(function(u) {
          return u.instance = void 0, u;
        }));
      }
    } catch (u) {
      e = { error: u };
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.createChildContainer = function() {
    var e, r;
    this.ensureNotDisposed();
    var n = new t(this);
    try {
      for (var o = ht(this._registry.entries()), i = o.next(); !i.done; i = o.next()) {
        var s = Rt(i.value, 2), a = s[0], u = s[1];
        u.some(function(l) {
          var c = l.options;
          return c.lifecycle === ie.ContainerScoped;
        }) && n._registry.setAll(a, u.map(function(l) {
          return l.options.lifecycle === ie.ContainerScoped ? {
            provider: l.provider,
            options: l.options
          } : l;
        }));
      }
    } catch (l) {
      e = { error: l };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return n;
  }, t.prototype.beforeResolution = function(e, r, n) {
    n === void 0 && (n = { frequency: "Always" }), this.interceptors.preResolution.set(e, {
      callback: r,
      options: n
    });
  }, t.prototype.afterResolution = function(e, r, n) {
    n === void 0 && (n = { frequency: "Always" }), this.interceptors.postResolution.set(e, {
      callback: r,
      options: n
    });
  }, t.prototype.dispose = function() {
    return Aa(this, void 0, void 0, function() {
      var e;
      return Oa(this, function(r) {
        switch (r.label) {
          case 0:
            return this.disposed = !0, e = [], this.disposables.forEach(function(n) {
              var o = n.dispose();
              o && e.push(o);
            }), [4, Promise.all(e)];
          case 1:
            return r.sent(), [2];
        }
      });
    });
  }, t.prototype.getRegistration = function(e) {
    return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null;
  }, t.prototype.getAllRegistrations = function(e) {
    return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null;
  }, t.prototype.construct = function(e, r) {
    var n = this;
    if (e instanceof ei)
      return e.createProxy(function(i) {
        return n.resolve(i, r);
      });
    var o = function() {
      var i = Va.get(e);
      if (!i || i.length === 0) {
        if (e.length === 0)
          return new e();
        throw new Error('TypeInfo not known for "' + e.name + '"');
      }
      var s = i.map(n.resolveParams(r, e));
      return new (e.bind.apply(e, Oe([void 0], s)))();
    }();
    return Ba(o) && this.disposables.add(o), o;
  }, t.prototype.resolveParams = function(e, r) {
    var n = this;
    return function(o, i) {
      var s, a, u;
      try {
        return $a(o) ? Tn(o) ? o.multiple ? (s = n.resolve(o.transform)).transform.apply(s, Oe([n.resolveAll(o.token)], o.transformArgs)) : (a = n.resolve(o.transform)).transform.apply(a, Oe([n.resolve(o.token, e)], o.transformArgs)) : o.multiple ? n.resolveAll(o.token) : n.resolve(o.token, e) : Tn(o) ? (u = n.resolve(o.transform, e)).transform.apply(u, Oe([n.resolve(o.token, e)], o.transformArgs)) : n.resolve(o, e);
      } catch (l) {
        throw new Error(Ma(r, i, l));
      }
    };
  }, t.prototype.ensureNotDisposed = function() {
    if (this.disposed)
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
  }, t;
}(), wr = new Ga();
if (typeof Reflect > "u" || !Reflect.getMetadata)
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
const Ha = {
  [Br.toString()]: "TenantHttpService",
  [ut.toString()]: "EntityHttpService",
  [Lr.toString()]: "EntityNameService",
  [Mr.toString()]: "BaseHttpService"
};
function ye(t, e) {
  var o;
  let r = window.dependencyContainer, n = (o = Ha[t.toString()]) != null ? o : t;
  try {
    return r ? r.resolve(n) : wr.resolve(n);
  } catch {
    if (window[n == null ? void 0 : n.toString()])
      return window[n == null ? void 0 : n.toString()];
    if (e)
      return e;
    throw new Error(`Service ${n == null ? void 0 : n.toString()} not found`);
  }
}
function Xa(t, e) {
  try {
    if (wr.isRegistered(t))
      return;
    wr.register(t, { useValue: e });
  } catch {
    throw new Error(`Failed to register service: ${t == null ? void 0 : t.toString()}`);
  }
}
function Vr(...t) {
  const e = {
    config: {},
    state: {}
  };
  for (const {
    config: r,
    props: n
  } of t)
    Object.assign(e.config, r), Object.assign(e.state, n);
  return e;
}
const ti = new Ao(!1), Ya = ti.asObservable().pipe(Ur((t) => !t), _a(1)), In = {}, Gr = /* @__PURE__ */ new Map(), Hr = new ue();
Hr.asObservable();
function Ja(t) {
  Gr.set(t.name, t), Hr.next({
    type: "add",
    store: t
  });
}
function Wa(t) {
  Gr.delete(t.name), Hr.next({
    type: "remove",
    store: t
  });
}
function Ka() {
  return Gr;
}
class Xr extends Ao {
  constructor(e) {
    super(e.state), this.storeDef = e, this.batchInProgress = !1, this.context = {
      config: this.getConfig()
    }, this.state = e.state, this.initialState = this.getValue(), Ja(this);
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
    const r = this.getValue();
    let n = e.reduce((o, i) => (o = i(o, this.context), o), r);
    In.preStoreUpdate && (n = In.preStoreUpdate(r, n, this.name)), n !== r && (this.state = n, ti.getValue() ? this.batchInProgress || (this.batchInProgress = !0, Ya.subscribe(() => {
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
    let r = !0;
    const n = {};
    return new ne((o) => {
      for (const [i, s] of Object.entries(e))
        o.add(s.subscribe((a) => {
          n[i] = a, r = !0;
        }));
      return this.subscribe({
        next() {
          r && (o.next(n), r = !1);
        },
        error(i) {
          o.error(i);
        },
        complete() {
          o.complete();
        }
      });
    });
  }
  destroy() {
    Wa(this), this.reset();
  }
  next(e) {
    this.update(() => e);
  }
  error() {
  }
  complete() {
  }
}
function Qa(t, ...e) {
  const {
    state: r,
    config: n
  } = Vr(...e), {
    name: o
  } = t;
  return new Xr({
    name: o,
    state: r,
    config: n
  });
}
function Yr(t) {
  return {
    props: t,
    config: void 0
  };
}
function Za(t, e) {
  var r;
  const n = {
    source: (l) => l,
    preStoreInit: (l) => l,
    key: (r = e.key) != null ? r : `${t.name}@store`,
    runGuard() {
      return typeof window < "u";
    }
  }, o = Object.assign({}, n, e);
  if (!(o.runGuard != null && o.runGuard()))
    return {
      initialized$: ot(!1),
      unsubscribe() {
      }
    };
  const {
    storage: i
  } = e, s = new Oo(1), a = et(i.getItem(o.key)).subscribe((l) => {
    l && t.update((c) => o.preStoreInit(Object.assign({}, c, l))), s.next(!0), s.complete();
  }), u = o.source(t).pipe(Ta(1), Ko((l) => i.setItem(o.key, l))).subscribe();
  return {
    initialized$: s.asObservable(),
    unsubscribe() {
      u.unsubscribe(), a.unsubscribe();
    }
  };
}
function el(t) {
  if (!!t)
    return {
      getItem(e) {
        const r = t.getItem(e);
        return ot(r && JSON.parse(r));
      },
      setItem(e, r) {
        return t.setItem(e, JSON.stringify(r)), ot(!0);
      },
      removeItem(e) {
        return t.removeItem(e), ot(!0);
      }
    };
}
const tl = el(typeof localStorage < "u" ? localStorage : void 0), qe = [];
function It(t, e = L) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (X(t, a) && (t = a, r)) {
      const u = !qe.length;
      for (const l of n)
        l[1](), qe.push(l, t);
      if (u) {
        for (let l = 0; l < qe.length; l += 2)
          qe[l][0](qe[l + 1]);
        qe.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, u = L) {
    const l = [a, u];
    return n.add(l), n.size === 1 && (r = e(o) || L), a(t), () => {
      n.delete(l), n.size === 0 && (r(), r = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
const Pn = It(H.Signal), { config: rl, state: nl } = Vr(Yr({
  queryWithSubGroups: !0,
  selectedTenant: null
})), ze = Qa({ name: "entity-select-selection" }, Yr({
  selectedEntities: []
})), Ne = new Xr({ state: nl, config: rl, name: "entity-select-global" });
Za(Ne, {
  key: "entity-select-global",
  storage: tl
});
const Ke = (t) => {
  const e = Ka().get(`entity-select-type-${Pn}`);
  if (e)
    return e;
  const { state: r, config: n } = Vr(Yr({
    filter: null,
    selectedGroup: null,
    lastSelectedEntities: []
  }));
  return new Xr({ state: r, config: n, name: `entity-select-type-${Pn}` });
};
function An(t, e, r) {
  const n = t.slice();
  return n[15] = e[r], n;
}
function ol(t) {
  let e;
  return {
    c() {
      e = C("div"), k(e, "class", "p-[10px]");
    },
    m(r, n) {
      R(r, e, n);
    },
    p: L,
    d(r) {
      r && T(e);
    }
  };
}
function il(t) {
  let e;
  function r(i, s) {
    return i[0] ? al : sl;
  }
  let n = r(t), o = n(t);
  return {
    c() {
      e = C("div"), o.c(), k(e, "class", "flex items-center");
    },
    m(i, s) {
      R(i, e, s), o.m(e, null);
    },
    p(i, s) {
      n === (n = r(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(e, null)));
    },
    d(i) {
      i && T(e), o.d();
    }
  };
}
function sl(t) {
  let e, r, n;
  return {
    c() {
      e = C("span"), e.textContent = "chevron_right", k(e, "class", "material-symbols-rounded text-[20px] w-[20px] cursor-pointer");
    },
    m(o, i) {
      R(o, e, i), r || (n = F(e, "click", t[9]), r = !0);
    },
    p: L,
    d(o) {
      o && T(e), r = !1, n();
    }
  };
}
function al(t) {
  let e, r, n;
  return {
    c() {
      e = C("span"), e.textContent = "expand_more", k(e, "class", "material-symbols-rounded text-[20px] w-[20px] cursor-pointer");
    },
    m(o, i) {
      R(o, e, i), r || (n = F(e, "click", t[8]), r = !0);
    },
    p: L,
    d(o) {
      o && T(e), r = !1, n();
    }
  };
}
function On(t) {
  let e, r, n, o, i, s = t[4], a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = $n(An(t, s, l));
  const u = (l) => E(a[l], 1, 1, () => {
    a[l] = null;
  });
  return {
    c() {
      e = C("div"), r = C("div"), n = $(), o = C("div");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      k(r, "class", "border-r group-hover:border-gray-300 border-transparent pl-1 mb-2"), it(r, "padding-right", t[2] * 4 + "px"), k(o, "class", "w-full"), k(e, "class", "flex w-full");
    },
    m(l, c) {
      R(l, e, c), S(e, r), S(e, n), S(e, o);
      for (let d = 0; d < a.length; d += 1)
        a[d].m(o, null);
      i = !0;
    },
    p(l, c) {
      if ((!i || c & 4) && it(r, "padding-right", l[2] * 4 + "px"), c & 28) {
        s = l[4];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const f = An(l, s, d);
          a[d] ? (a[d].p(f, c), x(a[d], 1)) : (a[d] = $n(f), a[d].c(), x(a[d], 1), a[d].m(o, null));
        }
        for (te(), d = s.length; d < a.length; d += 1)
          u(d);
        re();
      }
    },
    i(l) {
      if (!i) {
        for (let c = 0; c < s.length; c += 1)
          x(a[c]);
        i = !0;
      }
    },
    o(l) {
      a = a.filter(Boolean);
      for (let c = 0; c < a.length; c += 1)
        E(a[c]);
      i = !1;
    },
    d(l) {
      l && T(e), He(a, l);
    }
  };
}
function $n(t) {
  let e, r;
  return e = new ri({
    props: {
      group: t[15],
      level: t[2] + 1,
      entityType: t[3]
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & 16 && (i.group = n[15]), o & 4 && (i.level = n[2] + 1), o & 8 && (i.entityType = n[3]), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function ll(t) {
  var h, _;
  let e, r, n, o, i, s, a = ((_ = (h = t[1]) == null ? void 0 : h.Name) == null ? void 0 : _.Value) + "", u, l, c, d, f, p;
  function g(b, v) {
    return b[4].length > 0 ? il : ol;
  }
  let w = g(t), m = w(t), y = t[0] && On(t);
  return {
    c() {
      e = C("div"), r = C("div"), n = C("div"), o = $(), m.c(), i = $(), s = C("div"), u = B(a), c = $(), y && y.c(), k(s, "class", "overflow-hidden whitespace-nowrap text-ellipsis w-full"), k(r, "class", l = "flex items-center hover:bg-slate-100 w-full " + (t[5] ? "!bg-slate-300" : "")), k(e, "class", "group cursor-pointer");
    },
    m(b, v) {
      R(b, e, v), S(e, r), S(r, n), S(r, o), m.m(r, null), S(r, i), S(r, s), S(s, u), S(e, c), y && y.m(e, null), d = !0, f || (p = F(r, "click", t[10]), f = !0);
    },
    p(b, [v]) {
      var D, P;
      w === (w = g(b)) && m ? m.p(b, v) : (m.d(1), m = w(b), m && (m.c(), m.m(r, i))), (!d || v & 2) && a !== (a = ((P = (D = b[1]) == null ? void 0 : D.Name) == null ? void 0 : P.Value) + "") && oe(u, a), (!d || v & 32 && l !== (l = "flex items-center hover:bg-slate-100 w-full " + (b[5] ? "!bg-slate-300" : ""))) && k(r, "class", l), b[0] ? y ? (y.p(b, v), v & 1 && x(y, 1)) : (y = On(b), y.c(), x(y, 1), y.m(e, null)) : y && (te(), E(y, 1, 1, () => {
        y = null;
      }), re());
    },
    i(b) {
      d || (x(y), d = !0);
    },
    o(b) {
      E(y), d = !1;
    },
    d(b) {
      b && T(e), m.d(), y && y.d(), f = !1, p();
    }
  };
}
function ul(t, e, r) {
  const n = ye(ut);
  let { group: o } = e, { expanded: i = !1 } = e, { level: s = 1 } = e, { entityType: a } = e, u = [], l = !1, c = new ue(), d = Ke();
  d.pipe(Ee(c), Sa("selectedGroup")).subscribe((h) => {
    var _, b;
    r(5, l = ((_ = h.selectedGroup) == null ? void 0 : _.Id) === (o == null ? void 0 : o.Id)), o && ((b = h.selectedGroup) == null ? void 0 : b.Path.includes(o.Id)) && r(0, i = !0);
  });
  async function f() {
    try {
      r(4, u = await (await n.queryConfiguration(H.Group, { GroupId: o.Id })).data);
    } catch (h) {
      console.error(h);
    }
  }
  function p() {
    r(0, i = !i);
  }
  function g() {
    d.update((h) => ({ ...h, selectedGroup: o }));
  }
  Ie(() => {
    c.next(), c.complete();
  });
  const w = () => p(), m = () => p(), y = () => g();
  return t.$$set = (h) => {
    "group" in h && r(1, o = h.group), "expanded" in h && r(0, i = h.expanded), "level" in h && r(2, s = h.level), "entityType" in h && r(3, a = h.entityType);
  }, t.$$.update = () => {
    t.$$.dirty & 2 && o && f();
  }, [
    i,
    o,
    s,
    a,
    u,
    l,
    p,
    g,
    w,
    m,
    y
  ];
}
class ri extends Q {
  constructor(e) {
    super(), K(this, e, ul, ll, X, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    });
  }
}
function cl(t) {
  Qe(t, "svelte-ji3t05", ".container.svelte-ji3t05{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-ji3t05{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
}
function fl(t) {
  let e;
  return {
    c() {
      e = B(t[0]);
    },
    m(r, n) {
      R(r, e, n);
    },
    p(r, n) {
      n & 1 && oe(e, r[0]);
    },
    d(r) {
      r && T(e);
    }
  };
}
function dl(t) {
  let e, r, n, o, i, s, a, u, l, c;
  const d = t[11].default, f = pe(d, t, t[10], null), p = f || fl(t);
  return {
    c() {
      e = C("div"), r = C("div"), o = $(), i = C("span"), p && p.c(), k(r, "class", "ripple bg-gray-200 bg-opacity-50 svelte-ji3t05"), k(r, "style", n = t[5] ? "width: 100% !important; height: 100% !important" : ""), k(i, "class", "material-symbols-rounded z-[1] select-none"), it(i, "font-size", t[4] + "px"), k(e, "class", s = "container group " + t[1] + " svelte-ji3t05"), k(e, "style", a = "height: " + t[3] + "px; width: " + t[3] + "px; " + (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    },
    m(g, w) {
      R(g, e, w), S(e, r), S(e, o), S(e, i), p && p.m(i, null), u = !0, l || (c = [
        F(e, "mousedown", t[12]),
        F(e, "mouseup", t[13]),
        F(e, "mouseout", t[14]),
        F(e, "click", t[15]),
        F(e, "blur", pl)
      ], l = !0);
    },
    p(g, [w]) {
      (!u || w & 32 && n !== (n = g[5] ? "width: 100% !important; height: 100% !important" : "")) && k(r, "style", n), f ? f.p && (!u || w & 1024) && ge(f, d, g, g[10], u ? he(d, g[10], w, null) : we(g[10]), null) : p && p.p && (!u || w & 1) && p.p(g, u ? w : -1), (!u || w & 16) && it(i, "font-size", g[4] + "px"), (!u || w & 2 && s !== (s = "container group " + g[1] + " svelte-ji3t05")) && k(e, "class", s), (!u || w & 12 && a !== (a = "height: " + g[3] + "px; width: " + g[3] + "px; " + (g[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && k(e, "style", a);
    },
    i(g) {
      u || (x(p, g), u = !0);
    },
    o(g) {
      E(p, g), u = !1;
    },
    d(g) {
      g && T(e), p && p.d(g), l = !1, Re(c);
    }
  };
}
const pl = (t) => {
};
function hl(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { icon: i = null } = e, { size: s = "medium" } = e, { className: a = "" } = e, { disabled: u = !1 } = e, l, c, d, f, p = me();
  function g(v) {
    u || (r(5, d = !0), f = v.timeStamp);
  }
  function w(v) {
    const D = v.timeStamp - f;
    D < 300 ? setTimeout(() => {
      r(5, d = !1);
    }, 300 - D) : r(5, d = !1);
  }
  function m(v) {
    u || p("click", v);
  }
  const y = (v) => g(v), h = (v) => w(v), _ = (v) => w(v), b = (v) => m(v);
  return t.$$set = (v) => {
    "icon" in v && r(0, i = v.icon), "size" in v && r(9, s = v.size), "className" in v && r(1, a = v.className), "disabled" in v && r(2, u = v.disabled), "$$scope" in v && r(10, o = v.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & 512)
      switch (s) {
        case "small":
          r(3, l = 24), r(4, c = 20);
          break;
        case "medium":
          r(3, l = 40), r(4, c = 24);
          break;
        case "large":
          r(3, l = 56), r(4, c = 30);
          break;
      }
  }, [
    i,
    a,
    u,
    l,
    c,
    d,
    g,
    w,
    m,
    s,
    o,
    n,
    y,
    h,
    _,
    b
  ];
}
class ke extends Q {
  constructor(e) {
    super(), K(this, e, hl, dl, X, {
      icon: 0,
      size: 9,
      className: 1,
      disabled: 2
    }, cl);
  }
}
function gl(t) {
  let e, r, n, o, i, s, a;
  return {
    c() {
      e = C("div"), r = C("input"), n = $(), o = C("div"), i = B(t[1]), k(r, "type", "checkbox"), k(r, "class", "mr-2 h-[18px] w-[18px] cursor-pointer"), k(e, "class", "flex items-center cursor-pointer");
    },
    m(u, l) {
      R(u, e, l), S(e, r), t[5](r), r.checked = t[0], S(e, n), S(e, o), S(o, i), s || (a = [
        F(r, "change", t[6]),
        F(e, "click", t[7])
      ], s = !0);
    },
    p(u, [l]) {
      l & 1 && (r.checked = u[0]), l & 2 && oe(i, u[1]);
    },
    i: L,
    o: L,
    d(u) {
      u && T(e), t[5](null), s = !1, Re(a);
    }
  };
}
function wl(t, e, r) {
  let { label: n = "" } = e, { checked: o = !1 } = e, { indeterminate: i = !1 } = e, s = me(), a;
  function u(f) {
    r(0, o = !o), s("change", { checked: o });
  }
  function l(f) {
    fe[f ? "unshift" : "push"](() => {
      a = f, r(2, a), r(4, i), r(0, o);
    });
  }
  function c() {
    o = this.checked, r(0, o);
  }
  const d = (f) => u();
  return t.$$set = (f) => {
    "label" in f && r(1, n = f.label), "checked" in f && r(0, o = f.checked), "indeterminate" in f && r(4, i = f.indeterminate);
  }, t.$$.update = () => {
    t.$$.dirty & 21 && (i && a && !o ? r(2, a.indeterminate = !0, a) : a && (r(2, a.indeterminate = !1, a), r(2, a.checked = o, a)));
  }, [
    o,
    n,
    a,
    u,
    i,
    l,
    c,
    d
  ];
}
class ct extends Q {
  constructor(e) {
    super(), K(this, e, wl, gl, X, { label: 1, checked: 0, indeterminate: 4 });
  }
}
function Dn(t, e, r) {
  const n = t.slice();
  return n[17] = e[r], n[19] = r, n;
}
function ml(t) {
  let e;
  return {
    c() {
      e = B("edit");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function zn(t) {
  let e, r, n;
  return r = new ri({
    props: {
      group: t[3],
      expanded: !0,
      entityType: t[0]
    }
  }), {
    c() {
      e = C("div"), U(r.$$.fragment), k(e, "class", "flex-[2] overflow-auto");
    },
    m(o, i) {
      R(o, e, i), z(r, e, null), n = !0;
    },
    p(o, i) {
      const s = {};
      i & 8 && (s.group = o[3]), i & 1 && (s.entityType = o[0]), r.$set(s);
    },
    i(o) {
      n || (x(r.$$.fragment, o), n = !0);
    },
    o(o) {
      E(r.$$.fragment, o), n = !1;
    },
    d(o) {
      o && T(e), N(r);
    }
  };
}
function Nn(t) {
  let e, r, n = t[4], o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Un(Dn(t, n, s));
  const i = (s) => E(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = yr();
    },
    m(s, a) {
      for (let u = 0; u < o.length; u += 1)
        o[u].m(s, a);
      R(s, e, a), r = !0;
    },
    p(s, a) {
      if (a & 373) {
        n = s[4];
        let u;
        for (u = 0; u < n.length; u += 1) {
          const l = Dn(s, n, u);
          o[u] ? (o[u].p(l, a), x(o[u], 1)) : (o[u] = Un(l), o[u].c(), x(o[u], 1), o[u].m(e.parentNode, e));
        }
        for (te(), u = n.length; u < o.length; u += 1)
          i(u);
        re();
      }
    },
    i(s) {
      if (!r) {
        for (let a = 0; a < n.length; a += 1)
          x(o[a]);
        r = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        E(o[a]);
      r = !1;
    },
    d(s) {
      He(o, s), s && T(e);
    }
  };
}
function jn(t) {
  let e, r;
  return e = new ct({
    props: {
      checked: t[5][t[17]]
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & 48 && (i.checked = n[5][n[17]]), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function bl(t) {
  return { c: L, m: L, p: L, d: L };
}
function vl(t) {
  let e = t[20] + "", r;
  return {
    c() {
      r = B(e);
    },
    m(n, o) {
      R(n, r, o);
    },
    p(n, o) {
      o & 17 && e !== (e = n[20] + "") && oe(r, e);
    },
    d(n) {
      n && T(r);
    }
  };
}
function yl(t) {
  return { c: L, m: L, p: L, d: L };
}
function Un(t) {
  let e, r, n, o, i, s, a, u, l = t[2] && jn(t), c = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: yl,
    then: vl,
    catch: bl,
    value: 20
  };
  St(n = t[6].resolveName(t[0], t[17]), c);
  function d() {
    return t[10](t[17]);
  }
  return {
    c() {
      e = C("div"), l && l.c(), r = $(), c.block.c(), o = $(), k(e, "class", i = "flex w-full hover:bg-gray-200 cursor-pointer " + (t[19] < t[4].length - 1 ? "border-b" : ""));
    },
    m(f, p) {
      R(f, e, p), l && l.m(e, null), S(e, r), c.block.m(e, c.anchor = null), c.mount = () => e, c.anchor = o, S(e, o), s = !0, a || (u = F(e, "click", d), a = !0);
    },
    p(f, p) {
      t = f, t[2] ? l ? (l.p(t, p), p & 4 && x(l, 1)) : (l = jn(t), l.c(), x(l, 1), l.m(e, r)) : l && (te(), E(l, 1, 1, () => {
        l = null;
      }), re()), c.ctx = t, p & 17 && n !== (n = t[6].resolveName(t[0], t[17])) && St(n, c) || lo(c, t, p), (!s || p & 16 && i !== (i = "flex w-full hover:bg-gray-200 cursor-pointer " + (t[19] < t[4].length - 1 ? "border-b" : ""))) && k(e, "class", i);
    },
    i(f) {
      s || (x(l), s = !0);
    },
    o(f) {
      E(l), s = !1;
    },
    d(f) {
      f && T(e), l && l.d(), c.block.d(), c.token = null, c = null, a = !1, u();
    }
  };
}
function _l(t) {
  var y;
  let e, r, n = ((y = t[1]) == null ? void 0 : y.Name) + "", o, i, s, a, u, l, c, d, f, p, g;
  s = new ke({
    props: {
      size: "small",
      $$slots: { default: [ml] },
      $$scope: { ctx: t }
    }
  });
  let w = t[3] && zn(t), m = t[4] && t[4].length > 0 && Nn(t);
  return {
    c() {
      e = C("div"), r = C("div"), o = B(n), i = $(), U(s.$$.fragment), a = $(), w && w.c(), u = $(), l = C("div"), c = C("div"), c.textContent = "Zuletzt ausgew\xE4hlt", d = $(), m && m.c(), k(r, "class", "font-bold text-lg flex items-center cursor-pointer group"), k(c, "class", "font-bold text-gray-700"), k(l, "class", "flex-1"), k(e, "class", "flex flex-col w-full h-full overflow-hidden");
    },
    m(h, _) {
      R(h, e, _), S(e, r), S(r, o), S(r, i), z(s, r, null), S(e, a), w && w.m(e, null), S(e, u), S(e, l), S(l, c), S(l, d), m && m.m(l, null), f = !0, p || (g = F(r, "click", t[9]), p = !0);
    },
    p(h, [_]) {
      var v;
      (!f || _ & 2) && n !== (n = ((v = h[1]) == null ? void 0 : v.Name) + "") && oe(o, n);
      const b = {};
      _ & 2097152 && (b.$$scope = { dirty: _, ctx: h }), s.$set(b), h[3] ? w ? (w.p(h, _), _ & 8 && x(w, 1)) : (w = zn(h), w.c(), x(w, 1), w.m(e, u)) : w && (te(), E(w, 1, 1, () => {
        w = null;
      }), re()), h[4] && h[4].length > 0 ? m ? (m.p(h, _), _ & 16 && x(m, 1)) : (m = Nn(h), m.c(), x(m, 1), m.m(l, null)) : m && (te(), E(m, 1, 1, () => {
        m = null;
      }), re());
    },
    i(h) {
      f || (x(s.$$.fragment, h), x(w), x(m), f = !0);
    },
    o(h) {
      E(s.$$.fragment, h), E(w), E(m), f = !1;
    },
    d(h) {
      h && T(e), N(s), w && w.d(), m && m.d(), p = !1, g();
    }
  };
}
function xl(t, e, r) {
  let n = ye(ut), o = ye(Lr), { entityType: i } = e, { selectedTenant: s } = e, { selectMultiple: a = !1 } = e, u = null, l, c = [], d = {}, f = me(), p = new ue(), g = Ke();
  g.pipe(Ee(p)).subscribe((b) => {
    r(4, l = b.lastSelectedEntities);
  });
  const w = ze.subscribe((b) => {
    c = b.selectedEntities, r(5, d = {});
    for (let v of c)
      r(5, d[v.Id] = !0, d);
    console.log("selectedEntities", c, d);
  });
  async function m(b) {
    var v;
    try {
      r(3, u = await n.getEntityById(H.Group, b)), (!((v = g.value) != null && v.selectedGroup) || g.value.selectedGroup.Id != u.Id) && g.update((D) => ({ ...D, selectedGroup: u }));
    } catch (D) {
      console.log(D);
    }
  }
  async function y(b) {
    let v = await n.getEntityById(i, b);
    a ? d[b] ? c = c.filter((D) => D.Id !== b) : c.push(v) : c = [v], ze.update((D) => ({ ...D, selectedEntities: c }));
  }
  hi(() => {
    try {
      s && s.Root && u === null && m(s.Root);
    } catch {
    }
  }), Ie(() => {
    console.log("onDestroy"), w.unsubscribe();
  });
  const h = () => f("changeTenant"), _ = (b) => y(b);
  return t.$$set = (b) => {
    "entityType" in b && r(0, i = b.entityType), "selectedTenant" in b && r(1, s = b.selectedTenant), "selectMultiple" in b && r(2, a = b.selectMultiple);
  }, [
    i,
    s,
    a,
    u,
    l,
    d,
    o,
    f,
    y,
    h,
    _
  ];
}
class kl extends Q {
  constructor(e) {
    super(), K(this, e, xl, _l, X, {
      entityType: 0,
      selectedTenant: 1,
      selectMultiple: 2
    });
  }
}
const Sl = (t) => ({}), Mn = (t) => ({});
function El(t) {
  let e, r, n, o;
  const i = t[2].default, s = pe(i, t, t[1], null), a = t[2].pagination, u = pe(a, t, t[1], Mn);
  return {
    c() {
      e = C("div"), r = C("div"), s && s.c(), n = $(), u && u.c(), k(r, "class", "w-full overflow-auto flex-1"), k(e, "class", "flex flex-col h-full");
    },
    m(l, c) {
      R(l, e, c), S(e, r), s && s.m(r, null), S(e, n), u && u.m(e, null), o = !0;
    },
    p(l, [c]) {
      s && s.p && (!o || c & 2) && ge(s, i, l, l[1], o ? he(i, l[1], c, null) : we(l[1]), null), u && u.p && (!o || c & 2) && ge(u, a, l, l[1], o ? he(a, l[1], c, Sl) : we(l[1]), Mn);
    },
    i(l) {
      o || (x(s, l), x(u, l), o = !0);
    },
    o(l) {
      E(s, l), E(u, l), o = !1;
    },
    d(l) {
      l && T(e), s && s.d(l), u && u.d(l);
    }
  };
}
function Cl(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { startSort: i = null } = e, s = me(), a = It(i);
  Fe("audako:table:sort", a);
  let u = a.subscribe((l) => {
    s("sort", l);
  });
  return Ie(() => {
    u();
  }), t.$$set = (l) => {
    "startSort" in l && r(0, i = l.startSort), "$$scope" in l && r(1, o = l.$$scope);
  }, [i, o, n];
}
class Tl extends Q {
  constructor(e) {
    super(), K(this, e, Cl, El, X, { startSort: 0 });
  }
}
function Rl(t) {
  Qe(t, "svelte-dvksjt", ".audako-tableheader-flexrow.svelte-dvksjt{display:flex;height:40px;position:-webkit-sticky;position:sticky;top:0;background:white}.audako-tableheader-flexrow > *{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow > *:first-child{padding-left:12px !important}.audako-tableheader-flexrow > *:last-child{padding-right:12px !important}");
}
function Il(t) {
  let e, r;
  const n = t[2].default, o = pe(n, t, t[1], null);
  return {
    c() {
      e = C("div"), o && o.c(), k(e, "class", "audako-tableheader-flexrow font-bold svelte-dvksjt");
    },
    m(i, s) {
      R(i, e, s), o && o.m(e, null), t[3](e), r = !0;
    },
    p(i, [s]) {
      o && o.p && (!r || s & 2) && ge(o, n, i, i[1], r ? he(n, i[1], s, null) : we(i[1]), null);
    },
    i(i) {
      r || (x(o, i), r = !0);
    },
    o(i) {
      E(o, i), r = !1;
    },
    d(i) {
      i && T(e), o && o.d(i), t[3](null);
    }
  };
}
function Pl(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, i;
  function s(a) {
    fe[a ? "unshift" : "push"](() => {
      i = a, r(0, i);
    });
  }
  return t.$$set = (a) => {
    "$$scope" in a && r(1, o = a.$$scope);
  }, [i, o, n, s];
}
class Al extends Q {
  constructor(e) {
    super(), K(this, e, Pl, Il, X, {}, Rl);
  }
}
function Bn(t) {
  let e, r, n;
  return {
    c() {
      e = C("span"), r = B("north"), k(e, "class", "material-symbols-rounded text-xs transition-all"), k(e, "style", n = (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    },
    m(o, i) {
      R(o, e, i), S(e, r);
    },
    p(o, i) {
      i & 4 && n !== (n = (o[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (o[2] == null ? "opacity: 0;" : "opacity: 1;")) && k(e, "style", n);
    },
    d(o) {
      o && T(e);
    }
  };
}
function Ol(t) {
  let e, r, n, o, i, s, a;
  const u = t[6].default, l = pe(u, t, t[5], null);
  let c = t[0] && Bn(t);
  return {
    c() {
      e = C("div"), r = C("div"), l && l.c(), n = $(), c && c.c(), k(e, "class", o = "flex w-full h-full " + (t[0] ? "cursor-pointer" : "") + " " + t[1]);
    },
    m(d, f) {
      R(d, e, f), S(e, r), l && l.m(r, null), S(e, n), c && c.m(e, null), i = !0, s || (a = F(e, "click", t[7]), s = !0);
    },
    p(d, [f]) {
      l && l.p && (!i || f & 32) && ge(l, u, d, d[5], i ? he(u, d[5], f, null) : we(d[5]), null), d[0] ? c ? c.p(d, f) : (c = Bn(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), (!i || f & 3 && o !== (o = "flex w-full h-full " + (d[0] ? "cursor-pointer" : "") + " " + d[1])) && k(e, "class", o);
    },
    i(d) {
      i || (x(l, d), i = !0);
    },
    o(d) {
      E(l, d), i = !1;
    },
    d(d) {
      d && T(e), l && l.d(d), c && c.d(), s = !1, a();
    }
  };
}
function $l(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { sortable: i = !1 } = e, { id: s } = e, { container$class: a = "" } = e, u = "asc", l = Ve("audako:table:sort");
  console.log(l);
  let c = l.subscribe((p) => {
    s && (p == null ? void 0 : p.active) === s ? r(2, u = p.direction) : r(2, u = null);
  });
  function d() {
    u === "asc" ? r(2, u = "desc") : u === "desc" ? r(2, u = null) : r(2, u = "asc"), l.set(u ? { active: s, direction: u } : null);
  }
  Ie(() => {
    c();
  });
  const f = () => d();
  return t.$$set = (p) => {
    "sortable" in p && r(0, i = p.sortable), "id" in p && r(4, s = p.id), "container$class" in p && r(1, a = p.container$class), "$$scope" in p && r(5, o = p.$$scope);
  }, [
    i,
    a,
    u,
    d,
    s,
    o,
    n,
    f
  ];
}
class mr extends Q {
  constructor(e) {
    super(), K(this, e, $l, Ol, X, { sortable: 0, id: 4, container$class: 1 });
  }
}
function Dl(t) {
  Qe(t, "svelte-o4pyhh", ".audako-tablebody-flexrow.svelte-o4pyhh{display:flex;height:40px}.audako-tablebody-flexrow > *{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow > *:first-child{padding-left:12px}.audako-tablebody-flexrow > *:last-child{padding-right:12px}");
}
function zl(t) {
  let e, r, n, o, i;
  const s = t[3].default, a = pe(s, t, t[2], null);
  return {
    c() {
      e = C("div"), a && a.c(), k(e, "class", r = "audako-tablebody-flexrow w-full " + t[0] + " svelte-o4pyhh");
    },
    m(u, l) {
      R(u, e, l), a && a.m(e, null), n = !0, o || (i = F(e, "click", t[1]), o = !0);
    },
    p(u, [l]) {
      a && a.p && (!n || l & 4) && ge(a, s, u, u[2], n ? he(s, u[2], l, null) : we(u[2]), null), (!n || l & 1 && r !== (r = "audako-tablebody-flexrow w-full " + u[0] + " svelte-o4pyhh")) && k(e, "class", r);
    },
    i(u) {
      n || (x(a, u), n = !0);
    },
    o(u) {
      E(a, u), n = !1;
    },
    d(u) {
      u && T(e), a && a.d(u), o = !1, i();
    }
  };
}
function Nl(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { flexrow$class: i = "" } = e, s = me();
  function a(u) {
    s("click", u);
  }
  return t.$$set = (u) => {
    "flexrow$class" in u && r(0, i = u.flexrow$class), "$$scope" in u && r(2, o = u.$$scope);
  }, [i, a, o, n];
}
class jl extends Q {
  constructor(e) {
    super(), K(this, e, Nl, zl, X, { flexrow$class: 0 }, Dl);
  }
}
function Ul(t) {
  let e, r, n;
  const o = t[2].default, i = pe(o, t, t[1], null);
  return {
    c() {
      e = C("div"), i && i.c(), k(e, "class", r = "border-t overflow-hidden " + t[0]);
    },
    m(s, a) {
      R(s, e, a), i && i.m(e, null), n = !0;
    },
    p(s, [a]) {
      i && i.p && (!n || a & 2) && ge(i, o, s, s[1], n ? he(o, s[1], a, null) : we(s[1]), null), (!n || a & 1 && r !== (r = "border-t overflow-hidden " + s[0])) && k(e, "class", r);
    },
    i(s) {
      n || (x(i, s), n = !0);
    },
    o(s) {
      E(i, s), n = !1;
    },
    d(s) {
      s && T(e), i && i.d(s);
    }
  };
}
function Ml(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { container$class: i = "" } = e;
  return t.$$set = (s) => {
    "container$class" in s && r(0, i = s.container$class), "$$scope" in s && r(1, o = s.$$scope);
  }, [i, o, n];
}
class br extends Q {
  constructor(e) {
    super(), K(this, e, Ml, Ul, X, { container$class: 0 });
  }
}
var gt, Bl = new Uint8Array(16);
function Ll() {
  if (!gt && (gt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !gt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return gt(Bl);
}
const ql = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Fl(t) {
  return typeof t == "string" && ql.test(t);
}
var W = [];
for (var nr = 0; nr < 256; ++nr)
  W.push((nr + 256).toString(16).substr(1));
function Vl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = (W[t[e + 0]] + W[t[e + 1]] + W[t[e + 2]] + W[t[e + 3]] + "-" + W[t[e + 4]] + W[t[e + 5]] + "-" + W[t[e + 6]] + W[t[e + 7]] + "-" + W[t[e + 8]] + W[t[e + 9]] + "-" + W[t[e + 10]] + W[t[e + 11]] + W[t[e + 12]] + W[t[e + 13]] + W[t[e + 14]] + W[t[e + 15]]).toLowerCase();
  if (!Fl(r))
    throw TypeError("Stringified UUID is invalid");
  return r;
}
function Gl(t, e, r) {
  t = t || {};
  var n = t.random || (t.rng || Ll)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    r = r || 0;
    for (var o = 0; o < 16; ++o)
      e[r + o] = n[o];
    return e;
  }
  return Vl(n);
}
const Hl = {
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
    tt(this, "_popupContainer");
    tt(this, "rootElement");
    this.rootElement = e, this._popupContainer = {};
  }
  openPopup(e, r, n) {
    var c, d, f;
    n = { ...Hl, ...n }, console.log("openPopup", n);
    const o = Gl(), i = new ue(), s = (c = this._popupContainer[e]) != null ? c : this._createPopupContainer(e, n), a = this._createPopupWrapper(r, n);
    n.inTransitionClassList && (a.style.transition = `all ${(d = n.inTransitionDuration) != null ? d : 100}ms`, a.classList.add(n.inTransitionClassList)), s.appendChild(a);
    const u = () => {
      console.log("close"), this._removePopupWrapper(a, n), i.next(null), i.complete();
    };
    return n.closeOnClickOutside && s.addEventListener("click", (p) => {
      p.target === s && u();
    }), this._positionPopup(s, a, n), r.style.visibility = "visible", n.inTransitionClassList && (r.classList.add(n.inTransitionClassList), r.style.transition = `all ${(f = n.inTransitionDuration) != null ? f : 100}ms`), {
      popupId: o,
      afterClosed: fr(i).then(() => console.log("afterClosed")),
      close: u
    };
  }
  _removePopupWrapper(e, r) {
    var i, s;
    const n = e.parentElement, o = () => {
      e.remove(), n.children.length === 0 && this._removeContainer(n.id);
    };
    r.outTransitionClassList ? (e.style.transition = `all ${(i = r.outTransitionDuration) != null ? i : 100}ms`, e.classList.remove(r.inTransitionClassList), e.classList.add(r.outTransitionClassList), setTimeout(() => {
      o();
    }, (s = r.outTransitionDuration) != null ? s : 100)) : o();
  }
  _removeContainer(e) {
    document.getElementById(e).remove(), this._popupContainer[e] = void 0;
  }
  _createPopupContainer(e, r) {
    const n = Object.keys(this._popupContainer).length, o = document.createElement("div");
    return o.id = e, o.classList.add(`${e}`), o.style.position = "fixed", o.style.top = "0", o.style.left = "0", o.style.width = "100%", o.style.height = "100%", o.style.overflowY = "hidden", o.style.overflowX = "hidden", o.style.zIndex = (1e3 + n).toString(), r.backdrop && (o.style.backgroundColor = "rgba(0,0,0,0.5)"), this.rootElement.appendChild(o), this._popupContainer[e] = o, o;
  }
  _createPopupWrapper(e, r) {
    const n = document.createElement("div");
    return n.classList.add("popup-wrapper"), n.style.position = "absolute", n.appendChild(e), n;
  }
  _positionPopup(e, r, n) {
    var u, l, c, d, f, p, g, w, m;
    const o = r.style, i = e.getBoundingClientRect(), s = r.getBoundingClientRect(), a = (u = n.anchorElement) == null ? void 0 : u.getBoundingClientRect();
    o.position = "absolute", n.positioning === "center" ? (o.top = "50%", o.left = "50%", o.transform = "translate(-50%, -50%)") : n.positioning === "anchor" ? (r.style.top = `${this._getTopPosition(a.top, s.height, i.height, a.height) + ((c = (l = n.customPosition) == null ? void 0 : l.y) != null ? c : 0)}px`, r.style.left = `${this._getLeftPosition(a.left - 4, s.width, i.width) + ((f = (d = n.customPosition) == null ? void 0 : d.x) != null ? f : 0)}px`) : n.positioning === "custom" && (r.style.top = `${this._getTopPosition(n.customPosition.y, s.height, i.height) + ((g = (p = n.customPosition) == null ? void 0 : p.y) != null ? g : 0)}px`, r.style.left = `${this._getLeftPosition(n.customPosition.x, s.width, i.width) + ((m = (w = n.customPosition) == null ? void 0 : w.x) != null ? m : 0)}px`);
  }
  _getTopPosition(e, r, n, o = 0, i = "bottom") {
    return i == "top" ? e + r + 40 < n ? e + o / 3 : e - r + o / 3 : e - r > 40 ? e - r + o / 3 : e + o / 3;
  }
  _getLeftPosition(e, r, n, o = "right") {
    return o == "left" ? e + r + 40 < n ? e : e + r : e - r > 40 ? e - r : e + r;
  }
}
function Xl(t) {
  let e, r, n;
  const o = t[12].default, i = pe(o, t, t[11], null);
  return {
    c() {
      e = C("div"), i && i.c(), k(e, "class", r = "hidden absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border " + t[0]);
    },
    m(s, a) {
      R(s, e, a), i && i.m(e, null), t[13](e), n = !0;
    },
    p(s, [a]) {
      i && i.p && (!n || a & 2048) && ge(i, o, s, s[11], n ? he(o, s[11], a, null) : we(s[11]), null), (!n || a & 1 && r !== (r = "hidden absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border " + s[0])) && k(e, "class", r);
    },
    i(s) {
      n || (x(i, s), n = !0);
    },
    o(s) {
      E(i, s), n = !1;
    },
    d(s) {
      s && T(e), i && i.d(s), t[13](null);
    }
  };
}
function Yl(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { closeOnClick: i = !0 } = e, { sizeToAnchor: s = !1 } = e, { anchorElement: a = null } = e, { position: u = null } = e, { popupClass: l = "" } = e, { preferedVerticalAlignment: c = "top" } = e, { preferedHorizontalAlignment: d = "left" } = e, { positionOffset: f = { x: 0, y: 0 } } = e, p = ye("PopupContainerService", new vr(document.body)), g, w;
  function m() {
    console.log("openPopup");
    const _ = {
      backdrop: !1,
      closeOnClickOutside: i,
      positioning: s ? "anchor" : "custom",
      anchorElement: a,
      customPosition: s ? f : u,
      anchorHorizontal: d,
      anchorVertical: c
    };
    r(1, g.style.display = "block", g), w = p.openPopup("popup-container", g, _);
  }
  function y() {
    w == null || w.close(), r(1, g.style.display = "none", g);
  }
  function h(_) {
    fe[_ ? "unshift" : "push"](() => {
      g = _, r(1, g);
    });
  }
  return t.$$set = (_) => {
    "closeOnClick" in _ && r(2, i = _.closeOnClick), "sizeToAnchor" in _ && r(3, s = _.sizeToAnchor), "anchorElement" in _ && r(4, a = _.anchorElement), "position" in _ && r(5, u = _.position), "popupClass" in _ && r(0, l = _.popupClass), "preferedVerticalAlignment" in _ && r(6, c = _.preferedVerticalAlignment), "preferedHorizontalAlignment" in _ && r(7, d = _.preferedHorizontalAlignment), "positionOffset" in _ && r(8, f = _.positionOffset), "$$scope" in _ && r(11, o = _.$$scope);
  }, [
    l,
    g,
    i,
    s,
    a,
    u,
    c,
    d,
    f,
    m,
    y,
    o,
    n,
    h
  ];
}
class Jl extends Q {
  constructor(e) {
    super(), K(this, e, Yl, Xl, X, {
      closeOnClick: 2,
      sizeToAnchor: 3,
      anchorElement: 4,
      position: 5,
      popupClass: 0,
      preferedVerticalAlignment: 6,
      preferedHorizontalAlignment: 7,
      positionOffset: 8,
      openPopup: 9,
      closePopup: 10
    });
  }
  get openPopup() {
    return this.$$.ctx[9];
  }
  get closePopup() {
    return this.$$.ctx[10];
  }
}
const Wl = (t) => ({}), Ln = (t) => ({});
function Kl(t) {
  let e;
  const r = t[11].default, n = pe(r, t, t[15], null);
  return {
    c() {
      n && n.c();
    },
    m(o, i) {
      n && n.m(o, i), e = !0;
    },
    p(o, i) {
      n && n.p && (!e || i & 32768) && ge(n, r, o, o[15], e ? he(r, o[15], i, null) : we(o[15]), null);
    },
    i(o) {
      e || (x(n, o), e = !0);
    },
    o(o) {
      E(n, o), e = !1;
    },
    d(o) {
      n && n.d(o);
    }
  };
}
function Ql(t) {
  let e, r, n, o, i, s, a, u, l, c, d, f, p, g;
  const w = t[11].prefix, m = pe(w, t, t[15], Ln);
  let y = {
    sizeToAnchor: !0,
    popupClass: "max-h-[400px] ",
    anchorElement: t[6],
    $$slots: { default: [Kl] },
    $$scope: { ctx: t }
  };
  return d = new Jl({ props: y }), t[14](d), {
    c() {
      e = C("div"), m && m.c(), r = $(), n = C("input"), i = $(), s = C("div"), a = B("arrow_drop_down"), c = $(), U(d.$$.fragment), n.disabled = t[4], k(n, "placeholder", t[0]), n.readOnly = !0, k(n, "class", o = "w-full outline-none " + t[1]), k(s, "class", u = "material-symbols-rounded absolute right-1 pointer-events-none cursor-pointer text-md top-2 " + t[3]), k(e, "class", l = "flex items-center w-full focus-within:border-blue-300 border-gray-500 border-b-2 p-1 relative " + t[2]);
    },
    m(h, _) {
      R(h, e, _), m && m.m(e, null), S(e, r), S(e, n), kt(n, t[5]), t[13](n), S(e, i), S(e, s), S(s, a), R(h, c, _), z(d, h, _), f = !0, p || (g = [
        F(n, "input", t[12]),
        F(n, "click", t[8])
      ], p = !0);
    },
    p(h, [_]) {
      m && m.p && (!f || _ & 32768) && ge(m, w, h, h[15], f ? he(w, h[15], _, Wl) : we(h[15]), Ln), (!f || _ & 16) && (n.disabled = h[4]), (!f || _ & 1) && k(n, "placeholder", h[0]), (!f || _ & 2 && o !== (o = "w-full outline-none " + h[1])) && k(n, "class", o), _ & 32 && n.value !== h[5] && kt(n, h[5]), (!f || _ & 8 && u !== (u = "material-symbols-rounded absolute right-1 pointer-events-none cursor-pointer text-md top-2 " + h[3])) && k(s, "class", u), (!f || _ & 4 && l !== (l = "flex items-center w-full focus-within:border-blue-300 border-gray-500 border-b-2 p-1 relative " + h[2])) && k(e, "class", l);
      const b = {};
      _ & 64 && (b.anchorElement = h[6]), _ & 32768 && (b.$$scope = { dirty: _, ctx: h }), d.$set(b);
    },
    i(h) {
      f || (x(m, h), x(d.$$.fragment, h), f = !0);
    },
    o(h) {
      E(m, h), E(d.$$.fragment, h), f = !1;
    },
    d(h) {
      h && T(e), m && m.d(h), t[13](null), h && T(c), t[14](null), N(d, h), p = !1, Re(g);
    }
  };
}
function Zl(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { value: i = null } = e, { multiple: s = !1 } = e, { placeholder: a = null } = e, { textfield$class: u = "" } = e, { container$class: l = "" } = e, { suffixIcon$class: c = "" } = e, { disabled: d = !1 } = e, f = "", p, g, w = me(), m = It(i);
  const y = m.subscribe((I) => {
    r(9, i = I), console.log("Select Value", i);
  });
  let h = new ue();
  const _ = h.subscribe((I) => {
    w("valueChanged", I);
  });
  let b = It(s ? [] : ""), v = b.subscribe((I) => {
    console.log("displayValueStore", I), P(I);
  });
  function D(I) {
    console.log("open menu"), I && (I.preventDefault(), I.stopPropagation()), !d && (g == null || g.openPopup());
  }
  function P(I) {
    Array.isArray(I) ? r(5, f = I.join(",")) : r(5, f = I);
  }
  Fe("audako:select:multiple", s), Fe("audako:select:value", m), Fe("audako:select:value:changed", h), Fe("audako:select:displayValue", b), Fe("audako:select:close", () => g.closePopup()), Ie(() => {
    y(), _.unsubscribe(), v();
  });
  function Y() {
    f = this.value, r(5, f);
  }
  function q(I) {
    fe[I ? "unshift" : "push"](() => {
      p = I, r(6, p);
    });
  }
  function J(I) {
    fe[I ? "unshift" : "push"](() => {
      g = I, r(7, g);
    });
  }
  return t.$$set = (I) => {
    "value" in I && r(9, i = I.value), "multiple" in I && r(10, s = I.multiple), "placeholder" in I && r(0, a = I.placeholder), "textfield$class" in I && r(1, u = I.textfield$class), "container$class" in I && r(2, l = I.container$class), "suffixIcon$class" in I && r(3, c = I.suffixIcon$class), "disabled" in I && r(4, d = I.disabled), "$$scope" in I && r(15, o = I.$$scope);
  }, [
    a,
    u,
    l,
    c,
    d,
    f,
    p,
    g,
    D,
    i,
    s,
    n,
    Y,
    q,
    J,
    o
  ];
}
class eu extends Q {
  constructor(e) {
    super(), K(this, e, Zl, Ql, X, {
      value: 9,
      multiple: 10,
      placeholder: 0,
      textfield$class: 1,
      container$class: 2,
      suffixIcon$class: 3,
      disabled: 4
    });
  }
}
function qn(t) {
  let e;
  return {
    c() {
      e = C("div"), k(e, "class", "h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function tu(t) {
  let e, r, n;
  function o(s) {
    t[7](s);
  }
  let i = {};
  return t[0] !== void 0 && (i.checked = t[0]), e = new ct({ props: i }), fe.push(() => kr(e, "checked", o)), {
    c() {
      U(e.$$.fragment);
    },
    m(s, a) {
      z(e, s, a), n = !0;
    },
    p(s, a) {
      const u = {};
      !r && a & 1 && (r = !0, u.checked = s[0], _r(() => r = !1)), e.$set(u);
    },
    i(s) {
      n || (x(e.$$.fragment, s), n = !0);
    },
    o(s) {
      E(e.$$.fragment, s), n = !1;
    },
    d(s) {
      N(e, s);
    }
  };
}
function ru(t) {
  let e, r, n, o, i, s, a, u, l = t[0] && !t[2] && qn(), c = t[2] && tu(t);
  const d = t[6].default, f = pe(d, t, t[5], null);
  return {
    c() {
      e = C("div"), l && l.c(), r = $(), c && c.c(), n = $(), o = C("span"), f && f.c(), k(e, "class", i = "flex items-center " + (t[2] ? "" : "pl-3 pb-2 pt-2") + " pr-3 cursor-pointer hover-highlight relative rounded-md " + (t[0] && !t[2] ? "highlighted" : ""));
    },
    m(p, g) {
      R(p, e, g), l && l.m(e, null), S(e, r), c && c.m(e, null), S(e, n), S(e, o), f && f.m(o, null), t[8](o), s = !0, a || (u = F(e, "click", t[3]), a = !0);
    },
    p(p, [g]) {
      p[0] && !p[2] ? l || (l = qn(), l.c(), l.m(e, r)) : l && (l.d(1), l = null), p[2] && c.p(p, g), f && f.p && (!s || g & 32) && ge(f, d, p, p[5], s ? he(d, p[5], g, null) : we(p[5]), null), (!s || g & 1 && i !== (i = "flex items-center " + (p[2] ? "" : "pl-3 pb-2 pt-2") + " pr-3 cursor-pointer hover-highlight relative rounded-md " + (p[0] && !p[2] ? "highlighted" : ""))) && k(e, "class", i);
    },
    i(p) {
      s || (x(c), x(f, p), s = !0);
    },
    o(p) {
      E(c), E(f, p), s = !1;
    },
    d(p) {
      p && T(e), l && l.d(), c && c.d(), f && f.d(p), t[8](null), a = !1, u();
    }
  };
}
function nu(t, e, r) {
  let { $$slots: n = {}, $$scope: o } = e, { value: i = null } = e, s = !1, a = null, u = null, l, c;
  const d = Ve("audako:select:multiple"), f = Ve("audako:select:close"), p = Ve("audako:select:value"), g = Ve("audako:select:value:changed"), w = Ve("audako:select:displayValue");
  ao(() => {
    var b;
    c = (b = l.innerText) == null ? void 0 : b.trim(), w.subscribe((v) => {
      u = v;
    }), p.subscribe((v) => {
      a = v, d ? r(0, s = v.includes(i)) : r(0, s = v === i), y();
    });
  });
  function m(b) {
    b.preventDefault(), b.stopPropagation();
    let v = null;
    d ? s ? v = a.filter((D) => D !== i) : v = [...a, i] : (v = i, f()), p.set(v), g.next(v);
  }
  function y() {
    if (d) {
      const b = u;
      s && !b.includes(c) ? w.set([...b, c]) : !s && b.includes(c) && w.set(b.filter((v) => v !== c));
    } else
      s && w.set(c);
  }
  function h(b) {
    s = b, r(0, s);
  }
  function _(b) {
    fe[b ? "unshift" : "push"](() => {
      l = b, r(1, l);
    });
  }
  return t.$$set = (b) => {
    "value" in b && r(4, i = b.value), "$$scope" in b && r(5, o = b.$$scope);
  }, [
    s,
    l,
    d,
    m,
    i,
    o,
    n,
    h,
    _
  ];
}
class ou extends Q {
  constructor(e) {
    super(), K(this, e, nu, ru, X, { value: 4 });
  }
}
function Fn(t, e, r) {
  const n = t.slice();
  return n[17] = e[r], n;
}
function iu(t) {
  let e = t[17] + "", r;
  return {
    c() {
      r = B(e);
    },
    m(n, o) {
      R(n, r, o);
    },
    p(n, o) {
      o & 8 && e !== (e = n[17] + "") && oe(r, e);
    },
    d(n) {
      n && T(r);
    }
  };
}
function Vn(t) {
  let e, r;
  return e = new ou({
    props: {
      value: t[17],
      $$slots: { default: [iu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & 8 && (i.value = n[17]), o & 1048584 && (i.$$scope = { dirty: o, ctx: n }), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function su(t) {
  let e, r, n = t[3], o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Vn(Fn(t, n, s));
  const i = (s) => E(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = yr();
    },
    m(s, a) {
      for (let u = 0; u < o.length; u += 1)
        o[u].m(s, a);
      R(s, e, a), r = !0;
    },
    p(s, a) {
      if (a & 8) {
        n = s[3];
        let u;
        for (u = 0; u < n.length; u += 1) {
          const l = Fn(s, n, u);
          o[u] ? (o[u].p(l, a), x(o[u], 1)) : (o[u] = Vn(l), o[u].c(), x(o[u], 1), o[u].m(e.parentNode, e));
        }
        for (te(), u = n.length; u < o.length; u += 1)
          i(u);
        re();
      }
    },
    i(s) {
      if (!r) {
        for (let a = 0; a < n.length; a += 1)
          x(o[a]);
        r = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        E(o[a]);
      r = !1;
    },
    d(s) {
      He(o, s), s && T(e);
    }
  };
}
function au(t) {
  let e;
  return {
    c() {
      e = B("first_page");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function lu(t) {
  let e;
  return {
    c() {
      e = B("navigate_before");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function uu(t) {
  let e;
  return {
    c() {
      e = B("navigate_next");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function cu(t) {
  let e;
  return {
    c() {
      e = B("last_page");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function fu(t) {
  let e, r, n, o, i, s, a, u, l = t[1] * t[0] + 1 + "", c, d, f = (t[1] + 1) * t[0] + "", p, g, w, m, y, h, _, b, v, D, P, Y, q, J;
  function I(A) {
    t[9](A);
  }
  let ee = {
    textfield$class: "text-xs text-gray-600",
    suffixIcon$class: "!top-[2px] !text-[20px]",
    $$slots: { default: [su] },
    $$scope: { ctx: t }
  };
  return t[0] !== void 0 && (ee.value = t[0]), i = new eu({ props: ee }), fe.push(() => kr(i, "value", I)), i.$on("valueChanged", t[10]), _ = new ke({
    props: {
      disabled: t[1] === 0,
      $$slots: { default: [au] },
      $$scope: { ctx: t }
    }
  }), _.$on("click", t[11]), v = new ke({
    props: {
      disabled: t[1] === 0,
      $$slots: { default: [lu] },
      $$scope: { ctx: t }
    }
  }), v.$on("click", t[12]), P = new ke({
    props: {
      disabled: t[1] === t[4],
      $$slots: { default: [uu] },
      $$scope: { ctx: t }
    }
  }), P.$on("click", t[13]), q = new ke({
    props: {
      disabled: t[1] === t[4],
      $$slots: { default: [cu] },
      $$scope: { ctx: t }
    }
  }), q.$on("click", t[14]), {
    c() {
      e = C("div"), r = C("div"), r.textContent = "Items per page:", n = $(), o = C("div"), U(i.$$.fragment), a = $(), u = C("div"), c = B(l), d = B("\xA0-\xA0"), p = B(f), g = $(), w = C("div"), m = B("of "), y = B(t[2]), h = $(), U(_.$$.fragment), b = $(), U(v.$$.fragment), D = $(), U(P.$$.fragment), Y = $(), U(q.$$.fragment), k(r, "class", "mr-1 text-xs text-gray-600"), k(o, "class", "w-[50px]"), k(u, "class", "ml-4 text-xs mr-1 text-gray-600"), k(w, "class", "text-xs mr-4 text-gray-600"), k(e, "class", "flex w-full items-center justify-end pt-1");
    },
    m(A, M) {
      R(A, e, M), S(e, r), S(e, n), S(e, o), z(i, o, null), S(e, a), S(e, u), S(u, c), S(u, d), S(u, p), S(e, g), S(e, w), S(w, m), S(w, y), S(e, h), z(_, e, null), S(e, b), z(v, e, null), S(e, D), z(P, e, null), S(e, Y), z(q, e, null), J = !0;
    },
    p(A, [M]) {
      const Ae = {};
      M & 1048584 && (Ae.$$scope = { dirty: M, ctx: A }), !s && M & 1 && (s = !0, Ae.value = A[0], _r(() => s = !1)), i.$set(Ae), (!J || M & 3) && l !== (l = A[1] * A[0] + 1 + "") && oe(c, l), (!J || M & 3) && f !== (f = (A[1] + 1) * A[0] + "") && oe(p, f), (!J || M & 4) && oe(y, A[2]);
      const O = {};
      M & 2 && (O.disabled = A[1] === 0), M & 1048576 && (O.$$scope = { dirty: M, ctx: A }), _.$set(O);
      const j = {};
      M & 2 && (j.disabled = A[1] === 0), M & 1048576 && (j.$$scope = { dirty: M, ctx: A }), v.$set(j);
      const _e = {};
      M & 18 && (_e.disabled = A[1] === A[4]), M & 1048576 && (_e.$$scope = { dirty: M, ctx: A }), P.$set(_e);
      const zt = {};
      M & 18 && (zt.disabled = A[1] === A[4]), M & 1048576 && (zt.$$scope = { dirty: M, ctx: A }), q.$set(zt);
    },
    i(A) {
      J || (x(i.$$.fragment, A), x(_.$$.fragment, A), x(v.$$.fragment, A), x(P.$$.fragment, A), x(q.$$.fragment, A), J = !0);
    },
    o(A) {
      E(i.$$.fragment, A), E(_.$$.fragment, A), E(v.$$.fragment, A), E(P.$$.fragment, A), E(q.$$.fragment, A), J = !1;
    },
    d(A) {
      A && T(e), N(i), N(_), N(v), N(P), N(q);
    }
  };
}
function Gn(t, e) {
  return console.log(), Math.max(Math.floor(e / t) - 1, 0);
}
function du(t, e, r) {
  let { pageIndex: n } = e, { pageSize: o } = e, { totalCount: i } = e, s, { pageSizeOptions: a = [10, 20, 50, 100] } = e, u = me();
  function l(b) {
    r(1, n = n + b), p();
  }
  function c() {
    r(1, n = 0), p();
  }
  function d() {
    r(1, n = s), p();
  }
  function f(b) {
    console.log("changePageSize", b), r(0, o = b), r(4, s = Gn(o, i)), r(1, n = Math.min(n, s)), p();
  }
  function p() {
    u("changePage", { pageIndex: n, pageSize: o });
  }
  function g(b) {
    o = b, r(0, o);
  }
  const w = (b) => f(b.detail), m = () => c(), y = () => l(-1), h = () => l(1), _ = () => d();
  return t.$$set = (b) => {
    "pageIndex" in b && r(1, n = b.pageIndex), "pageSize" in b && r(0, o = b.pageSize), "totalCount" in b && r(2, i = b.totalCount), "pageSizeOptions" in b && r(3, a = b.pageSizeOptions);
  }, t.$$.update = () => {
    t.$$.dirty & 5 && r(4, s = Gn(o, i)), t.$$.dirty & 1 && console.log("pageSize", o);
  }, [
    o,
    n,
    i,
    a,
    s,
    l,
    c,
    d,
    f,
    g,
    w,
    m,
    y,
    h,
    _
  ];
}
class pu extends Q {
  constructor(e) {
    super(), K(this, e, du, fu, X, {
      pageIndex: 1,
      pageSize: 0,
      totalCount: 2,
      pageSizeOptions: 3
    });
  }
}
function hu(t) {
  Qe(t, "svelte-1ls4xm", ".progress-bar-value-animation.svelte-1ls4xm{-webkit-animation:svelte-1ls4xm-indeterminateAnimation 1s infinite linear;animation:svelte-1ls4xm-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@-webkit-keyframes svelte-1ls4xm-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}@keyframes svelte-1ls4xm-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
}
function Hn(t, e, r) {
  const n = t.slice();
  return n[32] = e[r], n;
}
function Xn(t) {
  let e, r;
  return e = new mr({
    props: {
      container$class: "basis-[50px] flex-[0] cursor-default",
      id: "Name",
      $$slots: { default: [gu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & 32 | o[1] & 32 && (i.$$scope = { dirty: o, ctx: n }), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function gu(t) {
  let e, r;
  return e = new ct({
    props: {
      checked: t[5] === "checked",
      indeterminate: t[5] === "indeterminate"
    }
  }), e.$on("change", t[13]), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & 32 && (i.checked = n[5] === "checked"), o[0] & 32 && (i.indeterminate = n[5] === "indeterminate"), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function wu(t) {
  let e;
  return {
    c() {
      e = B("Name");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function mu(t) {
  let e;
  return {
    c() {
      e = B("Group");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function bu(t) {
  let e, r, n, o, i, s = t[0] && Xn(t);
  return r = new mr({
    props: {
      container$class: "flex-[2] cursor-default",
      id: "Name",
      $$slots: { default: [wu] },
      $$scope: { ctx: t }
    }
  }), o = new mr({
    props: {
      container$class: "flex-1 curstor-default",
      id: "Name",
      $$slots: { default: [mu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      s && s.c(), e = $(), U(r.$$.fragment), n = $(), U(o.$$.fragment);
    },
    m(a, u) {
      s && s.m(a, u), R(a, e, u), z(r, a, u), R(a, n, u), z(o, a, u), i = !0;
    },
    p(a, u) {
      a[0] ? s ? (s.p(a, u), u[0] & 1 && x(s, 1)) : (s = Xn(a), s.c(), x(s, 1), s.m(e.parentNode, e)) : s && (te(), E(s, 1, 1, () => {
        s = null;
      }), re());
      const l = {};
      u[1] & 32 && (l.$$scope = { dirty: u, ctx: a }), r.$set(l);
      const c = {};
      u[1] & 32 && (c.$$scope = { dirty: u, ctx: a }), o.$set(c);
    },
    i(a) {
      i || (x(s), x(r.$$.fragment, a), x(o.$$.fragment, a), i = !0);
    },
    o(a) {
      E(s), E(r.$$.fragment, a), E(o.$$.fragment, a), i = !1;
    },
    d(a) {
      s && s.d(a), a && T(e), N(r, a), a && T(n), N(o, a);
    }
  };
}
function vu(t) {
  let e;
  return {
    c() {
      e = C("div"), k(e, "class", "w-full h-[3px]");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function yu(t) {
  let e;
  return {
    c() {
      e = C("div"), e.innerHTML = '<div class="progress-bar-value-animation wfull h-full bg-blue-600  svelte-1ls4xm"></div>', k(e, "class", "w-full h-[3px] overflow-hidden bg-blue-200");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function Yn(t) {
  let e, r;
  return e = new br({
    props: {
      container$class: "basis-[50px] flex-[0]",
      $$slots: { default: [_u] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & 24 | o[1] & 32 && (i.$$scope = { dirty: o, ctx: n }), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function _u(t) {
  let e, r;
  return e = new ct({
    props: {
      checked: t[4][t[32].Id]
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & 24 && (i.checked = n[4][n[32].Id]), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function xu(t) {
  var o;
  let e, r = ((o = t[32].Name) == null ? void 0 : o.Value) + "", n;
  return {
    c() {
      e = C("div"), n = B(r), k(e, "class", "text-sm overflow-hidden whitespace-nowrap text-ellipsis");
    },
    m(i, s) {
      R(i, e, s), S(e, n);
    },
    p(i, s) {
      var a;
      s[0] & 8 && r !== (r = ((a = i[32].Name) == null ? void 0 : a.Value) + "") && oe(n, r);
    },
    d(i) {
      i && T(e);
    }
  };
}
function ku(t) {
  return { c: L, m: L, p: L, d: L };
}
function Su(t) {
  let e = t[35] + "", r;
  return {
    c() {
      r = B(e);
    },
    m(n, o) {
      R(n, r, o);
    },
    p(n, o) {
      o[0] & 8 && e !== (e = n[35] + "") && oe(r, e);
    },
    d(n) {
      n && T(r);
    }
  };
}
function Eu(t) {
  return { c: L, m: L, p: L, d: L };
}
function Cu(t) {
  let e, r, n = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Eu,
    then: Su,
    catch: ku,
    value: 35
  };
  return St(r = t[8].resolveName(H.Group, t[32].GroupId), n), {
    c() {
      e = C("span"), n.block.c(), k(e, "class", "text-sm overflow-hidden whitespace-nowrap text-ellipsis");
    },
    m(o, i) {
      R(o, e, i), n.block.m(e, n.anchor = null), n.mount = () => e, n.anchor = null;
    },
    p(o, i) {
      t = o, n.ctx = t, i[0] & 8 && r !== (r = t[8].resolveName(H.Group, t[32].GroupId)) && St(r, n) || lo(n, t, i);
    },
    d(o) {
      o && T(e), n.block.d(), n.token = null, n = null;
    }
  };
}
function Tu(t) {
  let e, r, n, o, i, s, a = t[0] && Yn(t);
  return r = new br({
    props: {
      container$class: "flex-[2]",
      $$slots: { default: [xu] },
      $$scope: { ctx: t }
    }
  }), o = new br({
    props: {
      container$class: "flex-1",
      $$slots: { default: [Cu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      a && a.c(), e = $(), U(r.$$.fragment), n = $(), U(o.$$.fragment), i = $();
    },
    m(u, l) {
      a && a.m(u, l), R(u, e, l), z(r, u, l), R(u, n, l), z(o, u, l), R(u, i, l), s = !0;
    },
    p(u, l) {
      u[0] ? a ? (a.p(u, l), l[0] & 1 && x(a, 1)) : (a = Yn(u), a.c(), x(a, 1), a.m(e.parentNode, e)) : a && (te(), E(a, 1, 1, () => {
        a = null;
      }), re());
      const c = {};
      l[0] & 8 | l[1] & 32 && (c.$$scope = { dirty: l, ctx: u }), r.$set(c);
      const d = {};
      l[0] & 8 | l[1] & 32 && (d.$$scope = { dirty: l, ctx: u }), o.$set(d);
    },
    i(u) {
      s || (x(a), x(r.$$.fragment, u), x(o.$$.fragment, u), s = !0);
    },
    o(u) {
      E(a), E(r.$$.fragment, u), E(o.$$.fragment, u), s = !1;
    },
    d(u) {
      a && a.d(u), u && T(e), N(r, u), u && T(n), N(o, u), u && T(i);
    }
  };
}
function Jn(t) {
  let e, r;
  function n() {
    return t[14](t[32]);
  }
  return e = new jl({
    props: {
      flexrow$class: "cursor-pointer hover:bg-gray-100",
      $$slots: { default: [Tu] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", n), {
    c() {
      U(e.$$.fragment);
    },
    m(o, i) {
      z(e, o, i), r = !0;
    },
    p(o, i) {
      t = o;
      const s = {};
      i[0] & 25 | i[1] & 32 && (s.$$scope = { dirty: i, ctx: t }), e.$set(s);
    },
    i(o) {
      r || (x(e.$$.fragment, o), r = !0);
    },
    o(o) {
      E(e.$$.fragment, o), r = !1;
    },
    d(o) {
      N(e, o);
    }
  };
}
function Ru(t) {
  let e, r, n, o, i;
  e = new Al({
    props: {
      $$slots: { default: [bu] },
      $$scope: { ctx: t }
    }
  });
  function s(f, p) {
    return f[7] ? yu : vu;
  }
  let a = s(t), u = a(t), l = t[3], c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = Jn(Hn(t, l, f));
  const d = (f) => E(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      U(e.$$.fragment), r = $(), u.c(), n = $();
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      o = yr();
    },
    m(f, p) {
      z(e, f, p), R(f, r, p), u.m(f, p), R(f, n, p);
      for (let g = 0; g < c.length; g += 1)
        c[g].m(f, p);
      R(f, o, p), i = !0;
    },
    p(f, p) {
      const g = {};
      if (p[0] & 33 | p[1] & 32 && (g.$$scope = { dirty: p, ctx: f }), e.$set(g), a !== (a = s(f)) && (u.d(1), u = a(f), u && (u.c(), u.m(n.parentNode, n))), p[0] & 793) {
        l = f[3];
        let w;
        for (w = 0; w < l.length; w += 1) {
          const m = Hn(f, l, w);
          c[w] ? (c[w].p(m, p), x(c[w], 1)) : (c[w] = Jn(m), c[w].c(), x(c[w], 1), c[w].m(o.parentNode, o));
        }
        for (te(), w = l.length; w < c.length; w += 1)
          d(w);
        re();
      }
    },
    i(f) {
      if (!i) {
        x(e.$$.fragment, f);
        for (let p = 0; p < l.length; p += 1)
          x(c[p]);
        i = !0;
      }
    },
    o(f) {
      E(e.$$.fragment, f), c = c.filter(Boolean);
      for (let p = 0; p < c.length; p += 1)
        E(c[p]);
      i = !1;
    },
    d(f) {
      N(e, f), f && T(r), u.d(f), f && T(n), He(c, f), f && T(o);
    }
  };
}
function Iu(t) {
  let e, r;
  return e = new pu({
    props: {
      slot: "pagination",
      pageIndex: t[1],
      pageSize: t[2],
      totalCount: t[6]
    }
  }), e.$on("changePage", t[11]), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & 2 && (i.pageIndex = n[1]), o[0] & 4 && (i.pageSize = n[2]), o[0] & 64 && (i.totalCount = n[6]), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function Pu(t) {
  let e, r, n;
  return r = new Tl({
    props: {
      $$slots: {
        pagination: [Iu],
        default: [Ru]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = C("div"), U(r.$$.fragment), k(e, "class", "flex flex-col h-full overflow-hidden mt-[-10px]");
    },
    m(o, i) {
      R(o, e, i), z(r, e, null), n = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & 255 | i[1] & 32 && (s.$$scope = { dirty: i, ctx: o }), r.$set(s);
    },
    i(o) {
      n || (x(r.$$.fragment, o), n = !0);
    },
    o(o) {
      E(r.$$.fragment, o), n = !1;
    },
    d(o) {
      o && T(e), N(r);
    }
  };
}
function Au(t, e, r) {
  let n = ye(ut), o = ye(Lr), { entityType: i } = e, { selectMultiple: s = !1 } = e, a = [], u = new ue(), l = [], c = {}, d = "unchecked", f, p, g, w = !1, m = 0, y = 10, h = 0, _ = Ke(), b = Ne, v = !1, D = !0, P = new ue();
  me(), ze.pipe(Ee(P)).subscribe((O) => {
    l = O.selectedEntities, A(), I();
  }), Jo([b.asObservable(), _.asObservable()]).pipe(Ee(P)).subscribe(([O, j]) => {
    var _e;
    g = j.selectedGroup, p = (_e = j.selectedGroup) == null ? void 0 : _e.Id, f = j.filter, w = O.queryWithSubGroups, v = !0, r(1, m = 0), u.next();
  });
  function Y() {
    const O = { $and: [] };
    w ? O.$and.push({ Path: p }) : O.$and.push({ GroupId: p }), f && O.$and.push({
      $or: [
        {
          "Name.Value": { $regex: f, $options: "i" }
        },
        {
          "Description.Value": { $regex: f, $options: "i" }
        }
      ]
    }), console.log("query", O);
    const j = {
      limit: y,
      skip: m * y
    };
    return console.log(i), et(n.queryConfiguration(i, O, j));
  }
  function q(O) {
    s ? (l.find((j) => j.Id === O.Id) ? (l = l.filter((j) => j.Id !== O.Id), r(4, c[O.Id] = !1, c)) : (l.push(O), r(4, c[O.Id] = !0, c)), I()) : l = [O], ze.update((j) => ({ ...j, selectedEntities: l }));
  }
  function J(O) {
    O ? l = [
      ...l,
      ...a.filter((j) => !c[j.Id])
    ] : l = l.filter((j) => !a.find((_e) => _e.Id === j.Id)), A(), I(), ze.update((j) => ({ ...j, selectedEntities: l }));
  }
  function I() {
    let O = Object.keys(c).filter((j) => c[j]);
    O.length === 0 ? r(5, d = "unchecked") : O.length === a.length ? r(5, d = "checked") : r(5, d = "indeterminate");
  }
  function ee(O) {
    const j = O.detail;
    j.pageSize != y ? (r(1, m = 0), r(2, y = j.pageSize)) : r(1, m = j.pageIndex);
  }
  function A() {
    r(4, c = {}), a.forEach((O) => {
      r(4, c[O.Id] = l.find((j) => j.Id === O.Id) != null, c);
    });
  }
  Ie(() => {
    P.next(), P.complete();
  }), u.pipe(Ee(P), Ur(() => v && !!p), Pa(250), Ra(() => r(7, D = !0)), Ko(() => Y())).subscribe((O) => {
    r(7, D = !1), r(3, a = O.data), console.log("selectedEntities", l), A(), I(), console.log("selectedEntitiesInPageLookup", c), i === H.Group && a.unshift(g), r(6, h = O.total);
  });
  const M = (O) => {
    var j;
    return J((j = O.detail) == null ? void 0 : j.checked);
  }, Ae = (O) => q(O);
  return t.$$set = (O) => {
    "entityType" in O && r(12, i = O.entityType), "selectMultiple" in O && r(0, s = O.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty[0] & 2 && (r(1, m), r(22, u), r(2, y), u.next()), t.$$.dirty[0] & 4 && (r(2, y), r(22, u), r(1, m = 0), u.next());
  }, [
    s,
    m,
    y,
    a,
    c,
    d,
    h,
    D,
    o,
    q,
    J,
    ee,
    i,
    M,
    Ae
  ];
}
class Ou extends Q {
  constructor(e) {
    super(), K(this, e, Au, Pu, X, { entityType: 12, selectMultiple: 0 }, hu, [-1, -1]);
  }
}
function Wn(t) {
  let e, r, n, o;
  r = new ke({ props: { icon: "done_all" } }), r.$on("click", t[9]);
  let i = t[4].length > 0 && Kn(t);
  return {
    c() {
      e = C("div"), U(r.$$.fragment), n = $(), i && i.c(), k(e, "class", "mx-2 relative");
    },
    m(s, a) {
      R(s, e, a), z(r, e, null), S(e, n), i && i.m(e, null), o = !0;
    },
    p(s, a) {
      s[4].length > 0 ? i ? i.p(s, a) : (i = Kn(s), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i(s) {
      o || (x(r.$$.fragment, s), o = !0);
    },
    o(s) {
      E(r.$$.fragment, s), o = !1;
    },
    d(s) {
      s && T(e), N(r), i && i.d();
    }
  };
}
function Kn(t) {
  let e, r = t[4].length + "", n;
  return {
    c() {
      e = C("div"), n = B(r), k(e, "class", "pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]");
    },
    m(o, i) {
      R(o, e, i), S(e, n);
    },
    p(o, i) {
      i & 16 && r !== (r = o[4].length + "") && oe(n, r);
    },
    d(o) {
      o && T(e);
    }
  };
}
function $u(t) {
  let e, r, n, o, i, s, a, u, l, c, d, f, p, g, w = t[0] && Wn(t);
  function m(h) {
    t[10](h);
  }
  let y = { label: "Mit Untergruppen" };
  return t[1] !== void 0 && (y.checked = t[1]), c = new ct({ props: y }), fe.push(() => kr(c, "checked", m)), {
    c() {
      e = C("div"), r = C("div"), n = C("div"), o = C("span"), o.textContent = "search", i = $(), s = C("input"), a = $(), w && w.c(), u = $(), l = C("div"), U(c.$$.fragment), k(o, "class", "material-symbols-rounded mr-2"), k(s, "placeholder", "Search"), k(s, "class", "w-full outline-none"), k(n, "class", "flex items-center w-full focus-within:border-blue-300 border-gray-200 border-2 rounded-md p-2"), k(r, "class", "flex items-center"), k(l, "class", "flex justify-end mt-2"), k(e, "class", "flex flex-col");
    },
    m(h, _) {
      R(h, e, _), S(e, r), S(r, n), S(n, o), S(n, i), S(n, s), t[7](s), kt(s, t[2]), S(r, a), w && w.m(r, null), S(e, u), S(e, l), z(c, l, null), f = !0, p || (g = F(s, "input", t[8]), p = !0);
    },
    p(h, [_]) {
      _ & 4 && s.value !== h[2] && kt(s, h[2]), h[0] ? w ? (w.p(h, _), _ & 1 && x(w, 1)) : (w = Wn(h), w.c(), x(w, 1), w.m(r, null)) : w && (te(), E(w, 1, 1, () => {
        w = null;
      }), re());
      const b = {};
      !d && _ & 2 && (d = !0, b.checked = h[1], _r(() => d = !1)), c.$set(b);
    },
    i(h) {
      f || (x(w), x(c.$$.fragment, h), f = !0);
    },
    o(h) {
      E(w), E(c.$$.fragment, h), f = !1;
    },
    d(h) {
      h && T(e), t[7](null), w && w.d(), N(c), p = !1, g();
    }
  };
}
function Du(t, e, r) {
  let { entityType: n } = e, { selectMultiple: o = !1 } = e, i = me(), s = Ke(), a = !1, u = s.value.filter, l, c = new ue(), d = new ue(), f = [];
  Ne.pipe(Ee(c)).subscribe((b) => {
    r(1, a = b.queryWithSubGroups);
  }), d.pipe(Ee(c), ya(200)).subscribe((b) => {
    s.update((v) => ({ ...v, filter: b }));
  }), ze.pipe(Ee(c)).subscribe((b) => {
    r(4, f = b.selectedEntities);
  });
  function p(b) {
    console.log("onSubGroupsToggled", b), b != Ne.value.queryWithSubGroups && Ne.update((v) => ({
      ...v,
      queryWithSubGroups: b
    }));
  }
  function g() {
    i("acceptSelection");
  }
  ao(() => {
    w();
  });
  function w() {
    l && setTimeout(() => {
      l.focus(), l.select();
    }, 0);
  }
  Ie(() => {
    c.next(), c.complete();
  });
  function m(b) {
    fe[b ? "unshift" : "push"](() => {
      l = b, r(3, l);
    });
  }
  function y() {
    u = this.value, r(2, u);
  }
  const h = () => g();
  function _(b) {
    a = b, r(1, a);
  }
  return t.$$set = (b) => {
    "entityType" in b && r(6, n = b.entityType), "selectMultiple" in b && r(0, o = b.selectMultiple);
  }, t.$$.update = () => {
    t.$$.dirty & 4 && d.next(u), t.$$.dirty & 2 && p(a);
  }, [
    o,
    a,
    u,
    l,
    f,
    g,
    n,
    m,
    y,
    h,
    _
  ];
}
class zu extends Q {
  constructor(e) {
    super(), K(this, e, Du, $u, X, { entityType: 6, selectMultiple: 0 });
  }
}
function Nu(t) {
  Qe(t, "svelte-1fty7gn", ".svelte-1fty7gn,.svelte-1fty7gn::before,.svelte-1fty7gn::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-1fty7gn::before,.svelte-1fty7gn::after{--tw-content:''}.svelte-1fty7gn:-moz-focusring{outline:auto}.svelte-1fty7gn:-moz-ui-invalid{box-shadow:none}.svelte-1fty7gn::-webkit-inner-spin-button,.svelte-1fty7gn::-webkit-outer-spin-button{height:auto}.svelte-1fty7gn::-webkit-search-decoration{-webkit-appearance:none}.svelte-1fty7gn::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-1fty7gn:disabled{cursor:default}.svelte-1fty7gn,.svelte-1fty7gn::before,.svelte-1fty7gn::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1fty7gn::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1fty7gn::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.mt-2.svelte-1fty7gn{margin-top:0.5rem}.mb-1.svelte-1fty7gn{margin-bottom:0.25rem}.ml-2.svelte-1fty7gn{margin-left:0.5rem}.flex.svelte-1fty7gn{display:flex}.grid.svelte-1fty7gn{display:grid}.h-full.svelte-1fty7gn{height:100%}.w-full.svelte-1fty7gn{width:100%}.cursor-pointer.svelte-1fty7gn{cursor:pointer}.grid-cols-2.svelte-1fty7gn{grid-template-columns:repeat(2, minmax(0, 1fr))}.items-center.svelte-1fty7gn{align-items:center}.justify-between.svelte-1fty7gn{justify-content:space-between}.gap-2.svelte-1fty7gn{gap:0.5rem}.overflow-auto.svelte-1fty7gn{overflow:auto}.overflow-hidden.svelte-1fty7gn{overflow:hidden}.rounded-sm.svelte-1fty7gn{border-radius:0.125rem}.bg-slate-200.svelte-1fty7gn{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.p-1.svelte-1fty7gn{padding:0.25rem}.text-lg.svelte-1fty7gn{font-size:1.125rem;line-height:1.75rem}.font-bold.svelte-1fty7gn{font-weight:700}.text-gray-600.svelte-1fty7gn{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.shadow-sm.svelte-1fty7gn{--tw-shadow:0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);--tw-shadow-colored:0px 0.3px 0.9px var(--tw-shadow-color), 0px 1.6px 3.6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\\:bg-slate-100.svelte-1fty7gn:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-300.svelte-1fty7gn:hover{--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity))}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1536px){}");
}
function Qn(t, e, r) {
  const n = t.slice();
  return n[14] = e[r], n;
}
function Zn(t, e, r) {
  const n = t.slice();
  return n[14] = e[r], n[18] = r, n;
}
function eo(t) {
  let e, r;
  return e = new ke({
    props: {
      size: "small",
      $$slots: { default: [ju] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", t[7]), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & 524288 && (i.$$scope = { dirty: o, ctx: n }), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function ju(t) {
  let e;
  return {
    c() {
      e = B("arrow_back");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function to(t) {
  let e, r = t[14].Name + "", n, o = t[18] == t[1].length - 1 ? "" : " /", i, s, a, u;
  function l() {
    return t[8](t[14]);
  }
  return {
    c() {
      e = C("div"), n = B(r), i = B(o), s = $(), k(e, "class", "cursor-pointer hover:bg-slate-100 p-1 svelte-1fty7gn");
    },
    m(c, d) {
      R(c, e, d), S(e, n), S(e, i), S(e, s), a || (u = F(e, "click", l), a = !0);
    },
    p(c, d) {
      t = c, d & 2 && r !== (r = t[14].Name + "") && oe(n, r), d & 2 && o !== (o = t[18] == t[1].length - 1 ? "" : " /") && oe(i, o);
    },
    d(c) {
      c && T(e), a = !1, u();
    }
  };
}
function ro(t) {
  let e, r, n;
  function o(...i) {
    return t[9](t[14], ...i);
  }
  return r = new ke({
    props: {
      $$slots: { default: [Uu] },
      $$scope: { ctx: t }
    }
  }), r.$on("click", o), {
    c() {
      e = C("div"), U(r.$$.fragment), k(e, "class", "svelte-1fty7gn");
    },
    m(i, s) {
      R(i, e, s), z(r, e, null), n = !0;
    },
    p(i, s) {
      t = i;
      const a = {};
      s & 524288 && (a.$$scope = { dirty: s, ctx: t }), r.$set(a);
    },
    i(i) {
      n || (x(r.$$.fragment, i), n = !0);
    },
    o(i) {
      E(r.$$.fragment, i), n = !1;
    },
    d(i) {
      i && T(e), N(r);
    }
  };
}
function Uu(t) {
  let e;
  return {
    c() {
      e = B("done");
    },
    m(r, n) {
      R(r, e, n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function no(t) {
  var f;
  let e, r, n = ((f = t[14]) == null ? void 0 : f.Name) + "", o, i, s, a, u, l, c = t[14].Root && ro(t);
  function d() {
    return t[10](t[14]);
  }
  return {
    c() {
      e = C("div"), r = C("div"), o = B(n), i = $(), c && c.c(), s = $(), k(r, "class", "mt-2 ml-2  svelte-1fty7gn"), k(e, "class", "flex justify-between bg-slate-200 hover:bg-slate-300 shadow-sm rounded-sm cursor-pointer svelte-1fty7gn");
    },
    m(p, g) {
      R(p, e, g), S(e, r), S(r, o), S(e, i), c && c.m(e, null), S(e, s), a = !0, u || (l = F(e, "click", d), u = !0);
    },
    p(p, g) {
      var w;
      t = p, (!a || g & 4) && n !== (n = ((w = t[14]) == null ? void 0 : w.Name) + "") && oe(o, n), t[14].Root ? c ? (c.p(t, g), g & 4 && x(c, 1)) : (c = ro(t), c.c(), x(c, 1), c.m(e, s)) : c && (te(), E(c, 1, 1, () => {
        c = null;
      }), re());
    },
    i(p) {
      a || (x(c), a = !0);
    },
    o(p) {
      E(c), a = !1;
    },
    d(p) {
      p && T(e), c && c.d(), u = !1, l();
    }
  };
}
function Mu(t) {
  let e, r, n, o, i, s, a, u, l, c = t[0] && eo(t), d = t[1], f = [];
  for (let m = 0; m < d.length; m += 1)
    f[m] = to(Zn(t, d, m));
  let p = t[2], g = [];
  for (let m = 0; m < p.length; m += 1)
    g[m] = no(Qn(t, p, m));
  const w = (m) => E(g[m], 1, 1, () => {
    g[m] = null;
  });
  return {
    c() {
      e = C("div"), r = C("div"), c && c.c(), n = $(), o = C("div"), o.textContent = "Mandant ausw\xE4hlen", i = $(), s = C("div");
      for (let m = 0; m < f.length; m += 1)
        f[m].c();
      a = $(), u = C("div");
      for (let m = 0; m < g.length; m += 1)
        g[m].c();
      k(o, "class", "font-bold text-gray-600 text-lg svelte-1fty7gn"), k(r, "class", "flex items-center svelte-1fty7gn"), k(s, "class", "flex mb-1 svelte-1fty7gn"), it(u, "grid-auto-rows", "60px"), k(u, "class", "grid grid-cols-2 gap-2 h-full overflow-auto svelte-1fty7gn"), k(e, "class", "w-full overflow-hidden svelte-1fty7gn");
    },
    m(m, y) {
      R(m, e, y), S(e, r), c && c.m(r, null), S(r, n), S(r, o), S(e, i), S(e, s);
      for (let h = 0; h < f.length; h += 1)
        f[h].m(s, null);
      S(e, a), S(e, u);
      for (let h = 0; h < g.length; h += 1)
        g[h].m(u, null);
      l = !0;
    },
    p(m, [y]) {
      if (m[0] ? c ? (c.p(m, y), y & 1 && x(c, 1)) : (c = eo(m), c.c(), x(c, 1), c.m(r, n)) : c && (te(), E(c, 1, 1, () => {
        c = null;
      }), re()), y & 34) {
        d = m[1];
        let h;
        for (h = 0; h < d.length; h += 1) {
          const _ = Zn(m, d, h);
          f[h] ? f[h].p(_, y) : (f[h] = to(_), f[h].c(), f[h].m(s, null));
        }
        for (; h < f.length; h += 1)
          f[h].d(1);
        f.length = d.length;
      }
      if (y & 84) {
        p = m[2];
        let h;
        for (h = 0; h < p.length; h += 1) {
          const _ = Qn(m, p, h);
          g[h] ? (g[h].p(_, y), x(g[h], 1)) : (g[h] = no(_), g[h].c(), x(g[h], 1), g[h].m(u, null));
        }
        for (te(), h = p.length; h < g.length; h += 1)
          w(h);
        re();
      }
    },
    i(m) {
      if (!l) {
        x(c);
        for (let y = 0; y < p.length; y += 1)
          x(g[y]);
        l = !0;
      }
    },
    o(m) {
      E(c), g = g.filter(Boolean);
      for (let y = 0; y < g.length; y += 1)
        E(g[y]);
      l = !1;
    },
    d(m) {
      m && T(e), c && c.d(), He(f, m), He(g, m);
    }
  };
}
function Bu(t, e, r) {
  let n = ye(Br), { allowBack: o = !1 } = e, i = [], s = [];
  const a = me();
  async function u() {
    const y = await n.getTopTenants();
    if (y.length === 1) {
      const h = y[0];
      if (h.Root == null) {
        c(h);
        return;
      }
    }
    r(1, i = [new yi({ Id: "start", Name: "Start" })]), r(2, s = y);
  }
  async function l(y) {
    const h = await n.getNextTenants(y.Id);
    r(2, s = h);
  }
  async function c(y) {
    r(1, i = [...i, y]), l(y);
  }
  async function d(y) {
    if (y.Id == "start") {
      u();
      return;
    }
    const h = i.findIndex((_) => _.Id === y.Id);
    r(1, i = i.slice(0, h + 1)), l(y);
  }
  function f(y, h) {
    console.log(y, h), y.detail.stopPropagation(), a("tenantSelected", { tenant: h });
  }
  u();
  const p = () => a("back"), g = (y) => d(y), w = (y, h) => f(h, y), m = (y) => c(y);
  return t.$$set = (y) => {
    "allowBack" in y && r(0, o = y.allowBack);
  }, [
    o,
    i,
    s,
    a,
    c,
    d,
    f,
    p,
    g,
    w,
    m
  ];
}
class ni extends Q {
  constructor(e) {
    super(), K(this, e, Bu, Mu, X, { allowBack: 0 }, Nu);
  }
}
function Lu(t) {
  Qe(t, "svelte-2x30th", `*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.container{width:100%}@media(min-width: 640px){.container{max-width:640px}}@media(min-width: 768px){.container{max-width:768px}}@media(min-width: 1024px){.container{max-width:1024px}}@media(min-width: 1280px){.container{max-width:1280px}}@media(min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.right-2{right:0.5rem}.top-1{top:0.25rem}.top-0{top:0px}.right-\\[-5px\\]{right:-5px}.right-1{right:0.25rem}.top-2{top:0.5rem}.left-0{left:0px}.top-\\[50\\%\\]{top:50%}.\\!top-\\[2px\\]{top:2px !important}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.mx-2{margin-left:0.5rem;margin-right:0.5rem}.mt-3{margin-top:0.75rem}.mr-2{margin-right:0.5rem}.mt-2{margin-top:0.5rem}.mt-\\[-10px\\]{margin-top:-10px}.mb-2{margin-bottom:0.5rem}.mb-1{margin-bottom:0.25rem}.ml-2{margin-left:0.5rem}.mr-1{margin-right:0.25rem}.ml-4{margin-left:1rem}.mr-4{margin-right:1rem}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-full{height:100%}.h-\\[70vh\\]{height:70vh}.h-\\[3px\\]{height:3px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.max-h-\\[400px\\]{max-height:400px}.w-full{width:100%}.w-\\[80vw\\]{width:80vw}.w-\\[20px\\]{width:20px}.w-\\[18px\\]{width:18px}.w-\\[4px\\]{width:4px}.w-\\[50px\\]{width:50px}.flex-1{flex:1 1 0%}.flex-\\[2\\]{flex:2}.flex-\\[0\\]{flex:0}.basis-\\[50px\\]{flex-basis:50px}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\!scale-50{--tw-scale-x:.5 !important;--tw-scale-y:.5 !important;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-2{gap:0.5rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded-md{border-radius:0.375rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:0.125rem}.border-2{border-width:2px}.border{border-width:1px}.border-r{border-right-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-slate-400{--tw-border-opacity:1;border-color:rgb(148 163 184 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-surface-border{border-color:var(--surface-border)}.border-gray-500{--tw-border-opacity:1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-surface{background-color:var(--surface)}.bg-primary{background-color:var(--primary)}.bg-blue-200{--tw-bg-opacity:1;background-color:rgb(191 219 254 / var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.\\!bg-slate-300{--tw-bg-opacity:1 !important;background-color:rgb(203 213 225 / var(--tw-bg-opacity)) !important}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.p-2{padding:0.5rem}.p-\\[10px\\]{padding:10px}.p-1{padding:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[5px\\]{padding-left:5px;padding-right:5px}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.pl-4{padding-left:1rem}.pt-1{padding-top:0.25rem}.pl-1{padding-left:0.25rem}.pl-3{padding-left:0.75rem}.pb-2{padding-bottom:0.5rem}.pt-2{padding-top:0.5rem}.pr-3{padding-right:0.75rem}.text-center{text-align:center}.text-xs{font-size:0.75rem;line-height:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-\\[20px\\]{font-size:20px}.\\!text-\\[20px\\]{font-size:20px !important}.font-bold{font-weight:700}.text-on-primary{color:var(--on-primary)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.shadow-lg{--tw-shadow:0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13);--tw-shadow-colored:0px 1.2px 3.6px var(--tw-shadow-color), 0px 6.4px 14.4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-sm{--tw-shadow:0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);--tw-shadow-colored:0px 0.3px 0.9px var(--tw-shadow-color), 0px 1.6px 3.6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.focus-within\\:border-blue-300:focus-within{--tw-border-opacity:1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-slate-100:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-300:hover{--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity))}.group:hover .group-hover\\:border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}@media(min-width: 768px){.md\\:w-\\[80vw\\]{width:80vw}}@media(min-width: 1024px){.lg\\:w-\\[60vw\\]{width:60vw}}@media(min-width: 1536px){.\\32xl\\:w-\\[50vw\\]{width:50vw}}`);
}
function qu(t) {
  let e, r, n, o, i, s, a, u, l, c;
  return r = new kl({
    props: {
      selectMultiple: t[1],
      entityType: t[0],
      selectedTenant: t[2]
    }
  }), r.$on("changeTenant", t[10]), r.$on("entitySelected", t[11]), s = new zu({
    props: {
      entityType: t[0],
      selectMultiple: t[1]
    }
  }), s.$on("acceptSelection", t[12]), l = new Ou({
    props: {
      selectMultiple: t[1],
      entityType: t[0]
    }
  }), {
    c() {
      e = C("div"), U(r.$$.fragment), n = $(), o = C("div"), i = C("div"), U(s.$$.fragment), a = $(), u = C("div"), U(l.$$.fragment), k(e, "class", "flex-1 border-r border-slate-400 overflow-hidden"), k(u, "class", "flex-1 overflow-hidden mt-3"), k(i, "class", "flex flex-col h-full overflow-hidden"), k(o, "class", "flex-[2] pl-4 pt-1 h-full overflow-hidden");
    },
    m(d, f) {
      R(d, e, f), z(r, e, null), R(d, n, f), R(d, o, f), S(o, i), z(s, i, null), S(i, a), S(i, u), z(l, u, null), c = !0;
    },
    p(d, f) {
      const p = {};
      f & 2 && (p.selectMultiple = d[1]), f & 1 && (p.entityType = d[0]), f & 4 && (p.selectedTenant = d[2]), r.$set(p);
      const g = {};
      f & 1 && (g.entityType = d[0]), f & 2 && (g.selectMultiple = d[1]), s.$set(g);
      const w = {};
      f & 2 && (w.selectMultiple = d[1]), f & 1 && (w.entityType = d[0]), l.$set(w);
    },
    i(d) {
      c || (x(r.$$.fragment, d), x(s.$$.fragment, d), x(l.$$.fragment, d), c = !0);
    },
    o(d) {
      E(r.$$.fragment, d), E(s.$$.fragment, d), E(l.$$.fragment, d), c = !1;
    },
    d(d) {
      d && T(e), N(r), d && T(n), d && T(o), N(s), N(l);
    }
  };
}
function Fu(t) {
  let e, r;
  return e = new ni({
    props: { allowBack: !!t[2] }
  }), e.$on("back", t[8]), e.$on("tenantSelected", t[9]), {
    c() {
      U(e.$$.fragment);
    },
    m(n, o) {
      z(e, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & 4 && (i.allowBack = !!n[2]), e.$set(i);
    },
    i(n) {
      r || (x(e.$$.fragment, n), r = !0);
    },
    o(n) {
      E(e.$$.fragment, n), r = !1;
    },
    d(n) {
      N(e, n);
    }
  };
}
function Vu(t) {
  let e, r, n, o;
  const i = [Fu, qu], s = [];
  function a(u, l) {
    return u[3] ? 0 : 1;
  }
  return r = a(t), n = s[r] = i[r](t), {
    c() {
      e = C("div"), n.c(), k(e, "class", "flex w-full h-full");
    },
    m(u, l) {
      R(u, e, l), s[r].m(e, null), o = !0;
    },
    p(u, [l]) {
      let c = r;
      r = a(u), r === c ? s[r].p(u, l) : (te(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), re(), n = s[r], n ? n.p(u, l) : (n = s[r] = i[r](u), n.c()), x(n, 1), n.m(e, null));
    },
    i(u) {
      o || (x(n), o = !0);
    },
    o(u) {
      E(n), o = !1;
    },
    d(u) {
      u && T(e), s[r].d();
    }
  };
}
function Gu(t, e, r) {
  let { entityType: n = H.Signal } = e, { selectMultiple: o = !1 } = e, i = ye(ut), s = ye(Br), a, u = !1, l = [], c = me(), d = Ne.subscribe((P) => {
    P.selectedTenant ? (r(3, u = !1), g(P.selectedTenant)) : r(3, u = !0);
  }), f = ze.subscribe((P) => {
    P.selectedEntities && !o ? (p(P.selectedEntities), c("selectedEntities", P.selectedEntities[0])) : l = P.selectedEntities;
  });
  function p(P) {
    const Y = Ke(), q = Y.value.lastSelectedEntities, J = P.filter((I) => !q.includes(I.Id)).map((I) => I.Id);
    q.unshift(...J), q.splice(5), Y.update((I) => ({
      ...I,
      lastSelectedEntities: q
    }));
  }
  async function g(P) {
    try {
      r(2, a = await s.getTenantViewById(P));
    } catch (Y) {
      console.error(Y), r(3, u = !0);
    }
  }
  async function w(P) {
    console.log("Tenant selected", P);
    const Y = await i.getEntityById(H.Group, P.Root);
    Ne.update((q) => ({ ...q, selectedTenant: P.Id })), Ke().update((q) => ({ ...q, selectedGroup: Y }));
  }
  function m() {
    r(3, u = !0);
  }
  function y() {
    p(l), c("selectedEntities", l);
  }
  Ie(() => {
    d.unsubscribe(), f.unsubscribe();
  });
  const h = () => r(3, u = !1), _ = (P) => w(P.detail.tenant), b = () => m(), v = (P) => c("entitySelected", { selectedEntity: P.detail.selectedEntity }), D = () => y();
  return t.$$set = (P) => {
    "entityType" in P && r(0, n = P.entityType), "selectMultiple" in P && r(1, o = P.selectMultiple);
  }, [
    n,
    o,
    a,
    u,
    c,
    w,
    m,
    y,
    h,
    _,
    b,
    v,
    D
  ];
}
class Hu extends Q {
  constructor(e) {
    super(), K(this, e, Gu, Vu, X, { entityType: 0, selectMultiple: 1 }, Lu);
  }
}
const Pt = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.right-2{right:.5rem}.top-1{top:.25rem}.top-0{top:0px}.right-\\[-5px\\]{right:-5px}.right-1{right:.25rem}.top-2{top:.5rem}.left-0{left:0px}.top-\\[50\\%\\]{top:50%}.\\!top-\\[2px\\]{top:2px!important}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-3{margin-top:.75rem}.mr-2{margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-\\[-10px\\]{margin-top:-10px}.mb-2{margin-bottom:.5rem}.mb-1{margin-bottom:.25rem}.ml-2{margin-left:.5rem}.mr-1{margin-right:.25rem}.ml-4{margin-left:1rem}.mr-4{margin-right:1rem}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-full{height:100%}.h-\\[70vh\\]{height:70vh}.h-\\[3px\\]{height:3px}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.max-h-\\[400px\\]{max-height:400px}.w-full{width:100%}.w-\\[80vw\\]{width:80vw}.w-\\[20px\\]{width:20px}.w-\\[18px\\]{width:18px}.w-\\[4px\\]{width:4px}.w-\\[50px\\]{width:50px}.flex-1{flex:1 1 0%}.flex-\\[2\\]{flex:2}.flex-\\[0\\]{flex:0}.basis-\\[50px\\]{flex-basis:50px}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\!scale-50{--tw-scale-x: .5 !important;--tw-scale-y: .5 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.border-2{border-width:2px}.border{border-width:1px}.border-r{border-right-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-slate-400{--tw-border-opacity: 1;border-color:rgb(148 163 184 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-surface-border{border-color:var(--surface-border)}.border-gray-500{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-surface{background-color:var(--surface)}.bg-primary{background-color:var(--primary)}.bg-blue-200{--tw-bg-opacity: 1;background-color:rgb(191 219 254 / var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.\\!bg-slate-300{--tw-bg-opacity: 1 !important;background-color:rgb(203 213 225 / var(--tw-bg-opacity))!important}.bg-slate-200{--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity: .5}.p-2{padding:.5rem}.p-\\[10px\\]{padding:10px}.p-1{padding:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[5px\\]{padding-left:5px;padding-right:5px}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.pl-4{padding-left:1rem}.pt-1{padding-top:.25rem}.pl-1{padding-left:.25rem}.pl-3{padding-left:.75rem}.pb-2{padding-bottom:.5rem}.pt-2{padding-top:.5rem}.pr-3{padding-right:.75rem}.text-center{text-align:center}.text-xs{font-size:.75rem;line-height:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-\\[20px\\]{font-size:20px}.\\!text-\\[20px\\]{font-size:20px!important}.font-bold{font-weight:700}.text-on-primary{color:var(--on-primary)}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.shadow-lg{--tw-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, .11), 0px 6.4px 14.4px rgba(0, 0, 0, .13);--tw-shadow-colored: 0px 1.2px 3.6px var(--tw-shadow-color), 0px 6.4px 14.4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0px .3px .9px rgba(0, 0, 0, .1), 0px 1.6px 3.6px rgba(0, 0, 0, .13);--tw-shadow-colored: 0px .3px .9px var(--tw-shadow-color), 0px 1.6px 3.6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.material-symbols-rounded{font-variation-settings:"FILL" 1,"wght" 400,"GRAD" 100,"opsz" 48;font-family:Material Symbols Rounded;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}html{--primary: rgba(29 78 216);--on-primary: rgb(255, 255, 255);--secondary: rgb(169, 55, 122);--on-secondary: rgb(255, 255, 255);--background: rgb(238, 238, 238);--surface: rgb(255, 255, 255);--on-surface: rgb(0, 0, 0);--form-field-fill: rgb(243, 244, 246);--surface-border: rgb(204, 204, 204)}.hover-highlight:hover,.highlighted{background:rgba(0,0,0,.1)!important;box-shadow:0 4px 30px #0000001a!important;-webkit-backdrop-filter:blur(19.2px)!important;backdrop-filter:blur(19.2px)!important}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v34/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2) format("woff2")}.focus-within\\:border-blue-300:focus-within{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-slate-100:hover{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-300:hover{--tw-bg-opacity: 1;background-color:rgb(203 213 225 / var(--tw-bg-opacity))}.group:hover .group-hover\\:border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}@media (min-width: 768px){.md\\:w-\\[80vw\\]{width:80vw}}@media (min-width: 1024px){.lg\\:w-\\[60vw\\]{width:60vw}}@media (min-width: 1536px){.\\32xl\\:w-\\[50vw\\]{width:50vw}}
`;
class Xu extends HTMLElement {
  constructor() {
    super();
    tt(this, "_element");
    const r = this.attachShadow({ mode: "open" });
    let n = document.createElement("style");
    console.log(Pt), n.textContent = Pt, r.appendChild(n), Xa(vr, new vr(document.body)), this._element = new Hu({
      target: r,
      props: {}
    });
  }
  disconnectedCallback() {
    this._element.$destroy();
  }
}
class Yu extends HTMLElement {
  constructor() {
    super();
    tt(this, "_element");
    const r = this.attachShadow({ mode: "open" });
    let n = document.createElement("style");
    console.log(Pt), n.textContent = Pt, r.appendChild(n), this._element = new ni({
      target: r,
      props: {}
    });
  }
  disconnectedCallback() {
    this._element.$destroy();
  }
}
const Ju = Xu, Wu = Yu;
function Qu() {
  oo("audako-entity-select", Ju), oo("audako-tenant-select", Wu);
}
function oo(t, e) {
  customElements.get(t) || customElements.define(t, e);
}
export {
  Ju as EntitySelect,
  Wu as TenantSelect,
  Qu as registerCustomElements,
  ye as resolveService
};
