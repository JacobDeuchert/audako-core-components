function noop$1() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function is_promise(value) {
  return value && typeof value === "object" && typeof value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop$1;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function exclude_internal_props(props) {
  const result = {};
  for (const k in props)
    if (k[0] !== "$")
      result[k] = props[k];
  return result;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function compute_slots(slots) {
  const result = {};
  for (const key in slots) {
    result[key] = true;
  }
  return result;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop$1;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data2) {
  return document.createTextNode(data2);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function(event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
function stop_propagation(fn) {
  return function(event) {
    event.stopPropagation();
    return fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_attributes(node, attributes2) {
  const descriptors2 = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes2) {
    if (attributes2[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes2[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes2[key];
    } else if (descriptors2[key] && descriptors2[key].set) {
      node[key] = attributes2[key];
    } else {
      attr(node, key, attributes2[key]);
    }
  }
}
function set_svg_attributes(node, attributes2) {
  for (const key in attributes2) {
    attr(node, key, attributes2[key]);
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data2) {
  data2 = "" + data2;
  if (text2.wholeText !== data2)
    text2.data = data2;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
function attribute_to_object(attributes2) {
  const result = {};
  for (const attribute of attributes2) {
    result[attribute.name] = attribute.value;
  }
  return result;
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[node.slot || "default"] = true;
  });
  return result;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key, context2) {
  get_current_component().$$.context.set(key, context2);
  return context2;
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = /* @__PURE__ */ new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
function handle_promise(promise, info) {
  const token = info.token = {};
  function update2(type, index, key, value) {
    if (info.token !== token)
      return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i) => {
          if (i !== index && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i] === block2) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks)
      info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component2 = get_current_component();
    promise.then((value) => {
      set_current_component(current_component2);
      update2(info.then, 1, info.value, value);
      set_current_component(null);
    }, (error) => {
      set_current_component(current_component2);
      update2(info.catch, 2, info.error, error);
      set_current_component(null);
      if (!info.hasCatch) {
        throw error;
      }
    });
    if (info.current !== info.pending) {
      update2(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update2(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = promise;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const { resolved } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function bind$4(component, name, callback) {
  const index = component.$$.props[name];
  if (index !== void 0) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop$1,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }
  set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop$1;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var extendStatics$1 = function(d, b) {
  extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics$1(d, b);
};
function __extends$1(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics$1(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter$4(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator$1(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values$1(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read$1(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle3(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle3(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle3(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values$1 === "function" ? __values$1(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle3(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle3(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function applyPassive$1(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
var events = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: applyPassive$1
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function closest(element2, selector) {
  if (element2.closest) {
    return element2.closest(selector);
  }
  var el = element2;
  while (el) {
    if (matches$1(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
function matches$1(element2, selector) {
  var nativeMatches = element2.matches || element2.webkitMatchesSelector || element2.msMatchesSelector;
  return nativeMatches.call(element2, selector);
}
function estimateScrollWidth(element2) {
  var htmlEl = element2;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
var ponyfill = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest,
  matches: matches$1,
  estimateScrollWidth
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$e = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings$d = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers$8 = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends$1(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$e;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings$d;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers$8;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a2 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a2.ROOT, UNBOUNDED_1 = _a2.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a2 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a2.ROOT, UNBOUNDED_2 = _a2.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a2;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values$1(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a2 = ACTIVATION_EVENT_TYPES_1.return))
            _a2.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a2;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values$1(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a2;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values$1(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a2 = ACTIVATION_EVENT_TYPES_2.return))
          _a2.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a2;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values$1(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a2 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a2.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a2.VAR_FG_TRANSLATE_END;
    var _b2 = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b2.FG_DEACTIVATION, FG_ACTIVATION = _b2.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a2 = this.activationState, activationEvent = _a2.activationEvent, wasActivatedByPointer = _a2.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a2 = this.activationState, hasDeactivationUXRun = _a2.hasDeactivationUXRun, isActivated = _a2.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers$8.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state2 = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state2);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state2);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a2) {
    var wasActivatedByPointer = _a2.wasActivatedByPointer, wasElementMadeActive = _a2.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a2 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a2.VAR_FG_SIZE, VAR_LEFT = _a2.VAR_LEFT, VAR_TOP = _a2.VAR_TOP, VAR_FG_SCALE = _a2.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$d = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
};
var strings$c = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCIconButtonToggleFoundation = function(_super) {
  __extends$1(MDCIconButtonToggleFoundation2, _super);
  function MDCIconButtonToggleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCIconButtonToggleFoundation2.defaultAdapter), adapter)) || this;
    _this.hasToggledAriaLabel = false;
    return _this;
  }
  Object.defineProperty(MDCIconButtonToggleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$d;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "strings", {
    get: function() {
      return strings$c;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        notifyChange: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        getAttr: function() {
          return null;
        },
        setAttr: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCIconButtonToggleFoundation2.prototype.init = function() {
    var ariaLabelOn = this.adapter.getAttr(strings$c.DATA_ARIA_LABEL_ON);
    var ariaLabelOff = this.adapter.getAttr(strings$c.DATA_ARIA_LABEL_OFF);
    if (ariaLabelOn && ariaLabelOff) {
      if (this.adapter.getAttr(strings$c.ARIA_PRESSED) !== null) {
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
      }
      this.hasToggledAriaLabel = true;
    } else {
      this.adapter.setAttr(strings$c.ARIA_PRESSED, String(this.isOn()));
    }
  };
  MDCIconButtonToggleFoundation2.prototype.handleClick = function() {
    this.toggle();
    this.adapter.notifyChange({ isOn: this.isOn() });
  };
  MDCIconButtonToggleFoundation2.prototype.isOn = function() {
    return this.adapter.hasClass(cssClasses$d.ICON_BUTTON_ON);
  };
  MDCIconButtonToggleFoundation2.prototype.toggle = function(isOn) {
    if (isOn === void 0) {
      isOn = !this.isOn();
    }
    if (isOn) {
      this.adapter.addClass(cssClasses$d.ICON_BUTTON_ON);
    } else {
      this.adapter.removeClass(cssClasses$d.ICON_BUTTON_ON);
    }
    if (this.hasToggledAriaLabel) {
      var ariaLabel = isOn ? this.adapter.getAttr(strings$c.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(strings$c.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(strings$c.ARIA_LABEL, ariaLabel || "");
    } else {
      this.adapter.setAttr(strings$c.ARIA_PRESSED, "" + isOn);
    }
  };
  return MDCIconButtonToggleFoundation2;
}(MDCFoundation);
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch(element2, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element2) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
function useActions(node, actions) {
  let actionReturns = [];
  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const actionEntry = actions[i];
      const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
      if (Array.isArray(actionEntry) && actionEntry.length > 1) {
        actionReturns.push(action(node, actionEntry[1]));
      } else {
        actionReturns.push(action(node));
      }
    }
  }
  return {
    update(actions2) {
      if ((actions2 && actions2.length || 0) != actionReturns.length) {
        throw new Error("You must not change the length of an actions array.");
      }
      if (actions2) {
        for (let i = 0; i < actions2.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.update) {
            const actionEntry = actions2[i];
            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
              returnEntry.update(actionEntry[1]);
            } else {
              returnEntry.update();
            }
          }
        }
      }
    },
    destroy() {
      for (let i = 0; i < actionReturns.length; i++) {
        const returnEntry = actionReturns[i];
        if (returnEntry && returnEntry.destroy) {
          returnEntry.destroy();
        }
      }
    }
  };
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var KEY = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
};
var normalizedKeys = /* @__PURE__ */ new Set();
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = /* @__PURE__ */ new Map();
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = /* @__PURE__ */ new Set();
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
  var key = evt.key;
  if (normalizedKeys.has(key)) {
    return key;
  }
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
}
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance2;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance2 && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance2.activate();
      } else if (active === false) {
        instance2.deactivate();
      }
    }
    if (ripple && !instance2) {
      instance2 = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance2) {
          instance2.init();
          instance2.setUnbounded(unbounded);
        }
      });
    } else if (instance2 && !ripple) {
      initPromise.then(() => {
        if (instance2) {
          instance2.destroy();
          instance2 = void 0;
        }
      });
    }
    if (instance2 && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance2.destroy();
      requestAnimationFrame(() => {
        if (instance2) {
          instance2.init();
          instance2.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance2) {
      instance2.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance2) {
        instance2.destroy();
        instance2 = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
function create_fragment$K(ctx) {
  let a;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let a_levels = [{ href: ctx[1] }, ctx[4]];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, slot);
      ctx[6](a);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, a, ctx[0])),
          action_destroyer(ctx[3].call(null, a))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & 2 && { href: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(a);
      ctx[6](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$w($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "href", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("href" in $$new_props)
      $$invalidate(1, href = $$new_props.href);
  };
  return [use2, href, element2, forwardEvents, $$restProps, getElement, a_binding];
}
class A$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$w, create_fragment$K, safe_not_equal, { use: 0, href: 1, getElement: 5 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "href", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get href() {
    return this.$$.ctx[1];
  }
  set href(href) {
    this.$$set({ href });
    flush();
  }
  get getElement() {
    return this.$$.ctx[5];
  }
}
function create_fragment$J(ctx) {
  let button;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let button_levels = [ctx[3]];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, slot);
      if (button.autofocus)
        button.focus();
      ctx[5](button);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, button, ctx[0])),
          action_destroyer(ctx[2].call(null, button))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(button, button_data = get_spread_update(button_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(button);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$v($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, button_binding];
}
class Button$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$v, create_fragment$J, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$I(ctx) {
  let div;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let div_levels = [ctx[3]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, slot);
      ctx[5](div);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[2].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$u($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, div_binding];
}
class Div$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$u, create_fragment$I, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$H(ctx) {
  let h2;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let h2_levels = [ctx[3]];
  let h2_data = {};
  for (let i = 0; i < h2_levels.length; i += 1) {
    h2_data = assign(h2_data, h2_levels[i]);
  }
  return {
    c() {
      h2 = element("h2");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(h2, h2_data);
    },
    m(target, anchor) {
      insert(target, h2, anchor);
      append(h2, slot);
      ctx[5](h2);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, h2, ctx[0])),
          action_destroyer(ctx[2].call(null, h2))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(h2, h2_data = get_spread_update(h2_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(h2);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$t($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function h2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, h2_binding];
}
class H2$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$t, create_fragment$H, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$G(ctx) {
  let h3;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let h3_levels = [ctx[3]];
  let h3_data = {};
  for (let i = 0; i < h3_levels.length; i += 1) {
    h3_data = assign(h3_data, h3_levels[i]);
  }
  return {
    c() {
      h3 = element("h3");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(h3, h3_data);
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      append(h3, slot);
      ctx[5](h3);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, h3, ctx[0])),
          action_destroyer(ctx[2].call(null, h3))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(h3, h3_data = get_spread_update(h3_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(h3);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$s($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function h3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, h3_binding];
}
class H3$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$s, create_fragment$G, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$F(ctx) {
  let i;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let i_levels = [ctx[3]];
  let i_data = {};
  for (let i2 = 0; i2 < i_levels.length; i2 += 1) {
    i_data = assign(i_data, i_levels[i2]);
  }
  return {
    c() {
      i = element("i");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(i, i_data);
    },
    m(target, anchor) {
      insert(target, i, anchor);
      append(i, slot);
      ctx[5](i);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, i, ctx[0])),
          action_destroyer(ctx[2].call(null, i))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(i, i_data = get_spread_update(i_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(i);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$r($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function i_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, i_binding];
}
class I extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$r, create_fragment$F, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$E(ctx) {
  let li;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let li_levels = [ctx[3]];
  let li_data = {};
  for (let i = 0; i < li_levels.length; i += 1) {
    li_data = assign(li_data, li_levels[i]);
  }
  return {
    c() {
      li = element("li");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(li, li_data);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, slot);
      ctx[5](li);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, li, ctx[0])),
          action_destroyer(ctx[2].call(null, li))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(li, li_data = get_spread_update(li_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(li);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$q($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function li_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, li_binding];
}
class Li$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$q, create_fragment$E, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$D(ctx) {
  let nav;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let nav_levels = [ctx[3]];
  let nav_data = {};
  for (let i = 0; i < nav_levels.length; i += 1) {
    nav_data = assign(nav_data, nav_levels[i]);
  }
  return {
    c() {
      nav = element("nav");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(nav, nav_data);
    },
    m(target, anchor) {
      insert(target, nav, anchor);
      append(nav, slot);
      ctx[5](nav);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, nav, ctx[0])),
          action_destroyer(ctx[2].call(null, nav))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(nav, nav_data = get_spread_update(nav_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(nav);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$p($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function nav_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, nav_binding];
}
class Nav$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$p, create_fragment$D, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$C(ctx) {
  let span;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let span_levels = [ctx[3]];
  let span_data = {};
  for (let i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }
  return {
    c() {
      span = element("span");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(span, span_data);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, slot);
      ctx[5](span);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, span, ctx[0])),
          action_destroyer(ctx[2].call(null, span))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(span, span_data = get_spread_update(span_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$o($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function span_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, span_binding];
}
class Span$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$o, create_fragment$C, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$B(ctx) {
  let svg;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let svg_levels = [ctx[3]];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      slot = svg_element("slot");
      this.c = noop$1;
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, slot);
      ctx[5](svg);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, svg, ctx[0])),
          action_destroyer(ctx[2].call(null, svg))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(svg);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$n($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function svg_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, svg_binding];
}
class Svg extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$n, create_fragment$B, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$A(ctx) {
  let ul;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let ul_levels = [ctx[3]];
  let ul_data = {};
  for (let i = 0; i < ul_levels.length; i += 1) {
    ul_data = assign(ul_data, ul_levels[i]);
  }
  return {
    c() {
      ul = element("ul");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(ul, ul_data);
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      append(ul, slot);
      ctx[5](ul);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, ul, ctx[0])),
          action_destroyer(ctx[2].call(null, ul))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(ul, ul_data = get_spread_update(ul_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(ul);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$m($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function ul_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [use2, element2, forwardEvents, $$restProps, getElement, ul_binding];
}
class Ul$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$m, create_fragment$A, safe_not_equal, { use: 0, getElement: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
const A = A$1;
const Button = Button$1;
const Div = Div$1;
const H2 = H2$1;
const H3 = H3$1;
const Li = Li$1;
const Nav = Nav$1;
const Span = Span$1;
const Ul = Ul$1;
function create_if_block$e(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "mdc-icon-button__touch");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot$d(ctx) {
  let div;
  let t;
  let slot;
  let if_block_anchor;
  let if_block = ctx[8] && create_if_block$e();
  return {
    c() {
      div = element("div");
      t = space();
      slot = element("slot");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(div, "class", "mdc-icon-button__ripple");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      insert(target, t, anchor);
      insert(target, slot, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[8]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$e();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t);
      if (detaching)
        detach(slot);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$z(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [
        [
          Ripple,
          {
            ripple: ctx[4],
            unbounded: true,
            color: ctx[5],
            disabled: !!ctx[28].disabled,
            addClass: ctx[25],
            removeClass: ctx[26],
            addStyle: ctx[27]
          }
        ],
        ctx[21],
        ...ctx[1]
      ]
    },
    {
      class: classMap({
        [ctx[2]]: true,
        "mdc-icon-button": true,
        "mdc-icon-button--on": !ctx[22](ctx[0]) && ctx[0],
        "mdc-icon-button--touch": ctx[8],
        "mdc-icon-button--display-flex": ctx[9],
        "smui-icon-button--size-button": ctx[10] === "button",
        "mdc-icon-button--reduced-size": ctx[10] === "mini" || ctx[10] === "button",
        "mdc-card__action": ctx[23] === "card:action",
        "mdc-card__action--icon": ctx[23] === "card:action",
        "mdc-top-app-bar__navigation-icon": ctx[23] === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": ctx[23] === "top-app-bar:action",
        "mdc-snackbar__dismiss": ctx[23] === "snackbar:actions",
        "mdc-data-table__pagination-button": ctx[23] === "data-table:pagination",
        "mdc-data-table__sort-icon-button": ctx[23] === "data-table:sortable-header-cell",
        "mdc-dialog__close": ctx[23] === "dialog:header" && ctx[12] === "close",
        ...ctx[17]
      })
    },
    {
      style: Object.entries(ctx[18]).map(func$b).concat([ctx[3]]).join(" ")
    },
    {
      "aria-pressed": !ctx[22](ctx[0]) ? ctx[0] ? "true" : "false" : null
    },
    {
      "aria-label": ctx[0] ? ctx[6] : ctx[7]
    },
    {
      "data-aria-label-on": ctx[6]
    },
    {
      "data-aria-label-off": ctx[7]
    },
    {
      "aria-describedby": ctx[24]
    },
    { href: ctx[11] },
    ctx[20],
    ctx[19],
    ctx[28]
  ];
  var switch_value = ctx[13];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$d] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[32](switch_instance);
    switch_instance.$on("click", ctx[33]);
    switch_instance.$on("click", ctx[34]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty[0] & 536748031 ? get_spread_update(switch_instance_spread_levels, [
        dirty[0] & 505413682 && {
          use: [
            [
              Ripple,
              {
                ripple: ctx2[4],
                unbounded: true,
                color: ctx2[5],
                disabled: !!ctx2[28].disabled,
                addClass: ctx2[25],
                removeClass: ctx2[26],
                addStyle: ctx2[27]
              }
            ],
            ctx2[21],
            ...ctx2[1]
          ]
        },
        dirty[0] & 12719877 && {
          class: classMap({
            [ctx2[2]]: true,
            "mdc-icon-button": true,
            "mdc-icon-button--on": !ctx2[22](ctx2[0]) && ctx2[0],
            "mdc-icon-button--touch": ctx2[8],
            "mdc-icon-button--display-flex": ctx2[9],
            "smui-icon-button--size-button": ctx2[10] === "button",
            "mdc-icon-button--reduced-size": ctx2[10] === "mini" || ctx2[10] === "button",
            "mdc-card__action": ctx2[23] === "card:action",
            "mdc-card__action--icon": ctx2[23] === "card:action",
            "mdc-top-app-bar__navigation-icon": ctx2[23] === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": ctx2[23] === "top-app-bar:action",
            "mdc-snackbar__dismiss": ctx2[23] === "snackbar:actions",
            "mdc-data-table__pagination-button": ctx2[23] === "data-table:pagination",
            "mdc-data-table__sort-icon-button": ctx2[23] === "data-table:sortable-header-cell",
            "mdc-dialog__close": ctx2[23] === "dialog:header" && ctx2[12] === "close",
            ...ctx2[17]
          })
        },
        dirty[0] & 262152 && {
          style: Object.entries(ctx2[18]).map(func$b).concat([ctx2[3]]).join(" ")
        },
        dirty[0] & 4194305 && {
          "aria-pressed": !ctx2[22](ctx2[0]) ? ctx2[0] ? "true" : "false" : null
        },
        dirty[0] & 193 && {
          "aria-label": ctx2[0] ? ctx2[6] : ctx2[7]
        },
        dirty[0] & 64 && {
          "data-aria-label-on": ctx2[6]
        },
        dirty[0] & 128 && {
          "data-aria-label-off": ctx2[7]
        },
        dirty[0] & 16777216 && {
          "aria-describedby": ctx2[24]
        },
        dirty[0] & 2048 && { href: ctx2[11] },
        dirty[0] & 1048576 && get_spread_object(ctx2[20]),
        dirty[0] & 524288 && get_spread_object(ctx2[19]),
        dirty[0] & 268435456 && get_spread_object(ctx2[28])
      ]) : {};
      if (dirty[0] & 256 | dirty[1] & 512) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[13])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[32](switch_instance);
          switch_instance.$on("click", ctx2[33]);
          switch_instance.$on("click", ctx2[34]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[32](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
const func$b = ([name, value]) => `${name}: ${value};`;
function instance_1$e($$self, $$props, $$invalidate) {
  let actionProp;
  const omit_props_names = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context2 = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance2 && instance2.destroy();
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(17, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(17, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(18, internalStyles);
      } else {
        $$invalidate(18, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(19, internalAttrs[name] = value, internalAttrs);
    }
  }
  function handleChange(evtData) {
    $$invalidate(0, pressed = evtData.isOn);
  }
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(15, element2);
    });
  }
  const click_handler = () => instance2 && instance2.handleClick();
  const click_handler_1 = () => context2 === "top-app-bar:navigation" && dispatch(getElement(), "SMUITopAppBarIconButton:nav");
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(28, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(1, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(2, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("ripple" in $$new_props)
      $$invalidate(4, ripple = $$new_props.ripple);
    if ("color" in $$new_props)
      $$invalidate(5, color = $$new_props.color);
    if ("toggle" in $$new_props)
      $$invalidate(29, toggle = $$new_props.toggle);
    if ("pressed" in $$new_props)
      $$invalidate(0, pressed = $$new_props.pressed);
    if ("ariaLabelOn" in $$new_props)
      $$invalidate(6, ariaLabelOn = $$new_props.ariaLabelOn);
    if ("ariaLabelOff" in $$new_props)
      $$invalidate(7, ariaLabelOff = $$new_props.ariaLabelOff);
    if ("touch" in $$new_props)
      $$invalidate(8, touch = $$new_props.touch);
    if ("displayFlex" in $$new_props)
      $$invalidate(9, displayFlex = $$new_props.displayFlex);
    if ("size" in $$new_props)
      $$invalidate(10, size = $$new_props.size);
    if ("href" in $$new_props)
      $$invalidate(11, href = $$new_props.href);
    if ("action" in $$new_props)
      $$invalidate(12, action = $$new_props.action);
    if ("component" in $$new_props)
      $$invalidate(13, component = $$new_props.component);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 4096) {
      $$invalidate(20, actionProp = (() => {
        if (context2 === "data-table:pagination") {
          switch (action) {
            case "first-page":
              return { "data-first-page": "true" };
            case "prev-page":
              return { "data-prev-page": "true" };
            case "next-page":
              return { "data-next-page": "true" };
            case "last-page":
              return { "data-last-page": "true" };
            default:
              return { "data-action": "true" };
          }
        } else if (context2 === "dialog:header") {
          return { "data-mdc-dialog-action": action };
        } else {
          return { action };
        }
      })());
    }
    if (previousDisabled !== $$restProps.disabled) {
      const elem = getElement();
      if ("blur" in elem) {
        elem.blur();
      }
      $$invalidate(30, previousDisabled = $$restProps.disabled);
    }
    if ($$self.$$.dirty[0] & 536969216 | $$self.$$.dirty[1] & 1) {
      if (element2 && getElement() && toggle !== oldToggle) {
        if (toggle && !instance2) {
          $$invalidate(16, instance2 = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          }));
          instance2.init();
        } else if (!toggle && instance2) {
          instance2.destroy();
          $$invalidate(16, instance2 = void 0);
          $$invalidate(17, internalClasses = {});
          $$invalidate(19, internalAttrs = {});
        }
        $$invalidate(31, oldToggle = toggle);
      }
    }
    if ($$self.$$.dirty[0] & 65537) {
      if (instance2 && !isUninitializedValue(pressed) && instance2.isOn() !== pressed) {
        instance2.toggle(pressed);
      }
    }
  };
  return [
    pressed,
    use2,
    className,
    style,
    ripple,
    color,
    ariaLabelOn,
    ariaLabelOff,
    touch,
    displayFlex,
    size,
    href,
    action,
    component,
    getElement,
    element2,
    instance2,
    internalClasses,
    internalStyles,
    internalAttrs,
    actionProp,
    forwardEvents,
    isUninitializedValue,
    context2,
    ariaDescribedby,
    addClass,
    removeClass,
    addStyle,
    $$restProps,
    toggle,
    previousDisabled,
    oldToggle,
    switch_instance_binding,
    click_handler,
    click_handler_1
  ];
}
class IconButton extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$e, create_fragment$z, safe_not_equal, {
      use: 1,
      class: 2,
      style: 3,
      ripple: 4,
      color: 5,
      toggle: 29,
      pressed: 0,
      ariaLabelOn: 6,
      ariaLabelOff: 7,
      touch: 8,
      displayFlex: 9,
      size: 10,
      href: 11,
      action: 12,
      component: 13,
      getElement: 14
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "ripple",
      "color",
      "toggle",
      "pressed",
      "ariaLabelOn",
      "ariaLabelOff",
      "touch",
      "displayFlex",
      "size",
      "href",
      "action",
      "component",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get ripple() {
    return this.$$.ctx[4];
  }
  set ripple(ripple) {
    this.$$set({ ripple });
    flush();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(color) {
    this.$$set({ color });
    flush();
  }
  get toggle() {
    return this.$$.ctx[29];
  }
  set toggle(toggle) {
    this.$$set({ toggle });
    flush();
  }
  get pressed() {
    return this.$$.ctx[0];
  }
  set pressed(pressed) {
    this.$$set({ pressed });
    flush();
  }
  get ariaLabelOn() {
    return this.$$.ctx[6];
  }
  set ariaLabelOn(ariaLabelOn) {
    this.$$set({ ariaLabelOn });
    flush();
  }
  get ariaLabelOff() {
    return this.$$.ctx[7];
  }
  set ariaLabelOff(ariaLabelOff) {
    this.$$set({ ariaLabelOff });
    flush();
  }
  get touch() {
    return this.$$.ctx[8];
  }
  set touch(touch) {
    this.$$set({ touch });
    flush();
  }
  get displayFlex() {
    return this.$$.ctx[9];
  }
  set displayFlex(displayFlex) {
    this.$$set({ displayFlex });
    flush();
  }
  get size() {
    return this.$$.ctx[10];
  }
  set size(size) {
    this.$$set({ size });
    flush();
  }
  get href() {
    return this.$$.ctx[11];
  }
  set href(href) {
    this.$$set({ href });
    flush();
  }
  get action() {
    return this.$$.ctx[12];
  }
  set action(action) {
    this.$$set({ action });
    flush();
  }
  get component() {
    return this.$$.ctx[13];
  }
  set component(component) {
    this.$$set({ component });
    flush();
  }
  get getElement() {
    return this.$$.ctx[14];
  }
}
var EntityType;
(function(EntityType2) {
  EntityType2["Group"] = "Group";
  EntityType2["Signal"] = "Signal";
  EntityType2["Dashboard"] = "Dashboard";
  EntityType2["DashboardTab"] = "DashboardTab";
  EntityType2["DataConnection"] = "DataConnection";
  EntityType2["DataSource"] = "DataSource";
  EntityType2["EventCondition"] = "EventCondition";
  EntityType2["EventDefinition"] = "EventDefinition";
  EntityType2["EventCategory"] = "EventCategory";
  EntityType2["ProcessImage"] = "ProcessImage";
})(EntityType || (EntityType = {}));
({
  [EntityType.Group]: "fas fa-folder",
  [EntityType.Dashboard]: "adk adk-dashboard",
  [EntityType.Signal]: "fas fa-code",
  [EntityType.DataConnection]: "fas fa-circle-notch",
  [EntityType.DataSource]: "fas fa-server"
});
const EntityHttpEndpoints = {
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
var DataSourceType$1;
(function(DataSourceType2) {
  DataSourceType2["EdgeGateway"] = "EdgeGateway";
  DataSourceType2["DataAdapter"] = "DataAdapter";
})(DataSourceType$1 || (DataSourceType$1 = {}));
var DataSourceType;
(function(DataSourceType2) {
  DataSourceType2["S7"] = "S7";
  DataSourceType2["ModBus"] = "ModBus";
})(DataSourceType || (DataSourceType = {}));
class TenantView {
  constructor(options) {
    Object.assign(this, options);
  }
}
var axios$2 = { exports: {} };
var bind$3 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$2 = bind$3;
var toString = Object.prototype.toString;
var kindOf = function(cache) {
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}
function isArray$2(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (kindOf(val) !== "object") {
    return false;
  }
  var prototype2 = Object.getPrototypeOf(val);
  return prototype2 === null || prototype2 === Object.prototype;
}
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
function isFunction$1(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction$1(val.pipe);
}
function isFormData(thing) {
  var pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction$1(thing.toString) && thing.toString() === pattern);
}
var isURLSearchParams = kindOfTest("URLSearchParams");
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray$2(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray$2(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$2(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
function inherits(constructor, superConstructor, props, descriptors2) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}
function toFlatObject(sourceObj, destObj, filter2) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}
function toArray(thing) {
  if (!thing)
    return null;
  var i = thing.length;
  if (isUndefined(i))
    return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}
var isTypedArray = function(TypedArray) {
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
var utils$h = {
  isArray: isArray$2,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  isTypedArray,
  isFileList
};
var utils$g = utils$h;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$g.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$g.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$g.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$g.forEach(val, function parseValue(v) {
        if (utils$g.isDate(v)) {
          v = v.toISOString();
        } else if (utils$g.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$f = utils$h;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$f.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$e = utils$h;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$e.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var utils$d = utils$h;
function AxiosError$5(message, code, config2, request2, response) {
  Error.call(this);
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config2 && (this.config = config2);
  request2 && (this.request = request2);
  response && (this.response = response);
}
utils$d.inherits(AxiosError$5, Error, {
  toJSON: function toJSON() {
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
var prototype = AxiosError$5.prototype;
var descriptors = {};
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
].forEach(function(code) {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError$5, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError$5.from = function(error, code, config2, request2, response, customProps) {
  var axiosError = Object.create(prototype);
  utils$d.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  });
  AxiosError$5.call(axiosError, error.message, code, config2, request2, response);
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_1 = AxiosError$5;
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var utils$c = utils$h;
function toFormData$1(obj, formData) {
  formData = formData || new FormData();
  var stack = [];
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils$c.isDate(value)) {
      return value.toISOString();
    }
    if (utils$c.isArrayBuffer(value) || utils$c.isTypedArray(value)) {
      return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function build(data2, parentKey) {
    if (utils$c.isPlainObject(data2) || utils$c.isArray(data2)) {
      if (stack.indexOf(data2) !== -1) {
        throw Error("Circular reference detected in " + parentKey);
      }
      stack.push(data2);
      utils$c.forEach(data2, function each(value, key) {
        if (utils$c.isUndefined(value))
          return;
        var fullKey = parentKey ? parentKey + "." + key : key;
        var arr;
        if (value && !parentKey && typeof value === "object") {
          if (utils$c.endsWith(key, "{}")) {
            value = JSON.stringify(value);
          } else if (utils$c.endsWith(key, "[]") && (arr = utils$c.toArray(value))) {
            arr.forEach(function(el) {
              !utils$c.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }
        build(value, fullKey);
      });
      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data2));
    }
  }
  build(obj);
  return formData;
}
var toFormData_1 = toFormData$1;
var AxiosError$4 = AxiosError_1;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$4("Request failed with status code " + response.status, [AxiosError$4.ERR_BAD_REQUEST, AxiosError$4.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
};
var utils$b = utils$h;
var cookies$1 = utils$b.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$b.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$b.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$b.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$a = utils$h;
var ignoreDuplicateOf = [
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
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$a.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$a.trim(line.substr(0, i)).toLowerCase();
    val = utils$a.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$9 = utils$h;
var isURLSameOrigin$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$9.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
var AxiosError$3 = AxiosError_1;
var utils$8 = utils$h;
function CanceledError$3(message) {
  AxiosError$3.call(this, message == null ? "canceled" : message, AxiosError$3.ERR_CANCELED);
  this.name = "CanceledError";
}
utils$8.inherits(CanceledError$3, AxiosError$3, {
  __CANCEL__: true
});
var CanceledError_1 = CanceledError$3;
var parseProtocol$1 = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
};
var utils$7 = utils$h;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath$1 = buildFullPath$2;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var transitionalDefaults$1 = transitional;
var AxiosError$2 = AxiosError_1;
var CanceledError$2 = CanceledError_1;
var parseProtocol2 = parseProtocol$1;
var xhr = function xhrAdapter(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config2.data;
    var requestHeaders = config2.headers;
    var responseType = config2.responseType;
    var onCanceled;
    function done() {
      if (config2.cancelToken) {
        config2.cancelToken.unsubscribe(onCanceled);
      }
      if (config2.signal) {
        config2.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData) && utils$7.isStandardBrowserEnv()) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath$1(config2.baseURL, config2.url);
    request2.open(config2.method.toUpperCase(), buildURL$1(fullPath, config2.params, config2.paramsSerializer), true);
    request2.timeout = config2.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(new AxiosError$2("Request aborted", AxiosError$2.ECONNABORTED, config2, request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(new AxiosError$2("Network Error", AxiosError$2.ERR_NETWORK, config2, request2, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
      var transitional3 = config2.transitional || transitionalDefaults$1;
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(new AxiosError$2(timeoutErrorMessage, transitional3.clarifyTimeoutError ? AxiosError$2.ETIMEDOUT : AxiosError$2.ECONNABORTED, config2, request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config2.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config2.withCredentials)) {
      request2.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request2.addEventListener("progress", config2.onDownloadProgress);
    }
    if (typeof config2.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config2.onUploadProgress);
    }
    if (config2.cancelToken || config2.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new CanceledError$2() : cancel);
        request2.abort();
        request2 = null;
      };
      config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
      if (config2.signal) {
        config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    var protocol = parseProtocol2(fullPath);
    if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
      reject(new AxiosError$2("Unsupported protocol " + protocol + ":", AxiosError$2.ERR_BAD_REQUEST, config2));
      return;
    }
    request2.send(requestData);
  });
};
var _null = null;
var utils$6 = utils$h;
var normalizeHeaderName2 = normalizeHeaderName$1;
var AxiosError$1 = AxiosError_1;
var transitionalDefaults = transitional;
var toFormData = toFormData_1;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$4 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    var isObjectPayload = utils$6.isObject(data2);
    var contentType = headers && headers["Content-Type"];
    var isFileList2;
    if ((isFileList2 = utils$6.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList2 ? { "files[]": data2 } : data2, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults$4.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _null
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$4.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$4.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$4;
var utils$5 = utils$h;
var defaults$3 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context2 = this || defaults$3;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context2, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$h;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$2 = defaults_1;
var CanceledError$1 = CanceledError_1;
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError$1();
  }
}
var dispatchRequest$1 = function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData2.call(config2, config2.data, config2.headers, config2.transformRequest);
  config2.headers = utils$4.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config2.headers[method];
  });
  var adapter = config2.adapter || defaults$2.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData2.call(config2, response.data, response.headers, config2.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config2, reason.response.data, reason.response.headers, config2.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$h;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "beforeRedirect": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
};
var data = {
  "version": "0.27.2"
};
var VERSION = data.version;
var AxiosError = AxiosError_1;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional2(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$h;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var buildFullPath2 = buildFullPath$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config2) {
  if (typeof configOrUrl === "string") {
    config2 = config2 || {};
    config2.url = configOrUrl;
  } else {
    config2 = configOrUrl || {};
  }
  config2 = mergeConfig$1(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional3 = config2.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$1(this.defaults, config2);
  var fullPath = buildFullPath2(config2.baseURL, config2.url);
  return buildURL2(fullPath, config2.params, config2.paramsSerializer);
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data2, config2) {
      return this.request(mergeConfig$1(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data: data2
      }));
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_1 = Axios$1;
var CanceledError = CanceledError_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe2(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$h;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$h;
var bind$1 = bind$3;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults$1 = defaults_1;
function createInstance(defaultConfig) {
  var context2 = new Axios(defaultConfig);
  var instance2 = bind$1(Axios.prototype.request, context2);
  utils.extend(instance2, Axios.prototype, context2);
  utils.extend(instance2, context2);
  instance2.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance2;
}
var axios$1 = createInstance(defaults$1);
axios$1.Axios = Axios;
axios$1.CanceledError = CanceledError_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.toFormData = toFormData_1;
axios$1.AxiosError = AxiosError_1;
axios$1.Cancel = axios$1.CanceledError;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
function isFunction(value) {
  return typeof value === "function";
}
function createErrorClass(createImpl) {
  var _super = function(instance2) {
    Error.call(instance2);
    instance2.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a2, e_2, _b2;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values$1(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a2 = _parentage_1.return))
                _a2.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values$1(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read$1(errors)), __read$1(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b2 = _finalizers_1.return))
              _b2.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a2;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a2 = this._finalizers) !== null && _a2 !== void 0 ? _a2 : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty2 = new Subscription2();
    empty2.closed = true;
    return empty2;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
var config$1 = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read$1(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read$1(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    {
      throw err;
    }
  });
}
function noop() {
}
var context = null;
function errorContext(cb) {
  if (config$1.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a2 = context, errorThrown = _a2.errorThrown, error = _a2.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
var Subscriber = function(_super) {
  __extends$1(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped)
      ;
    else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind2(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends$1(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config$1.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind2(observerOrNext.next, context_1),
          error: observerOrNext.error && bind2(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind2(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x) {
  return x;
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var Observable = function() {
  function Observable2(subscribe3) {
    if (subscribe3) {
      this._subscribe = subscribe3;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a2 = _this, operator = _a2.operator, source2 = _a2.source;
      subscriber.add(operator ? operator.call(subscriber, source2) : source2 ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a2;
    return (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe3) {
    return new Observable2(subscribe3);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a2;
  return (_a2 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config$1.Promise) !== null && _a2 !== void 0 ? _a2 : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
function hasLift(source2) {
  return isFunction(source2 === null || source2 === void 0 ? void 0 : source2.lift);
}
function operate(init2) {
  return function(source2) {
    if (hasLift(source2)) {
      return source2.lift(function(liftedSource) {
        try {
          return init2(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends$1(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a2;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a2 = this.onFinalize) === null || _a2 === void 0 ? void 0 : _a2.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});
var Subject = function(_super) {
  __extends$1(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a2;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b2 = __values$1(_this.currentObservers), _c = _b2.next(); !_c.done; _c = _b2.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b2.return))
              _a2.call(_b2);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a2;
      return ((_a2 = this.observers) === null || _a2 === void 0 ? void 0 : _a2.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a2 = this, hasError = _a2.hasError, isStopped = _a2.isStopped, observers = _a2.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, isStopped = _a2.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source2) {
    return new AnonymousSubject(destination, source2);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends$1(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source2) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source2;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a2, _b2;
    (_b2 = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.next) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a2, _b2;
    (_b2 = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.error) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a2, _b2;
    (_b2 = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.complete) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a2, _b2;
    return (_b2 = (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber)) !== null && _b2 !== void 0 ? _b2 : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);
var BehaviorSubject = function(_super) {
  __extends$1(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, _value = _a2._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};
var ReplaySubject = function(_super) {
  __extends$1(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject2.prototype.next = function(value) {
    var _a2 = this, isStopped = _a2.isStopped, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow, _timestampProvider = _a2._timestampProvider, _windowTime = _a2._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a2 = this, _infiniteTimeWindow = _a2._infiniteTimeWindow, _buffer = _a2._buffer;
    var copy = _buffer.slice();
    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a2 = this, _bufferSize = _a2._bufferSize, _timestampProvider = _a2._timestampProvider, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last2 = 0;
      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last2 = i;
      }
      last2 && _buffer.splice(0, last2 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);
var Action = function(_super) {
  __extends$1(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state2, delay) {
    return this;
  };
  return Action2;
}(Subscription);
var intervalProvider = {
  setInterval: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read$1(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read$1(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};
var AsyncAction = function(_super) {
  __extends$1(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state2, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state2;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    intervalProvider.clearInterval(id);
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state2, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state2, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state2, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state2);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a2 = this, id = _a2.id, scheduler = _a2.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay, state2) {
    if (delay === void 0) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state2, delay);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();
var AsyncScheduler = function(_super) {
  __extends$1(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    _this._scheduled = void 0;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});
function isScheduler(value) {
  return value && isFunction(value.schedule);
}
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a2, value, done;
    return __generator$1(this, function(_b2) {
      switch (_b2.label) {
        case 0:
          reader = readableStream.getReader();
          _b2.label = 1;
        case 1:
          _b2.trys.push([1, , 9, 10]);
          _b2.label = 2;
        case 2:
          return [4, __await(reader.read())];
        case 3:
          _a2 = _b2.sent(), value = _a2.value, done = _a2.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b2.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b2.sent()];
        case 7:
          _b2.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a2;
    try {
      for (var iterable_1 = __values$1(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a2 = iterable_1.return))
          _a2.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process$1(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a2;
  return __awaiter$4(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator$1(this, function(_b2) {
      switch (_b2.label) {
        case 0:
          _b2.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b2.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b2.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b2.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b2.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b2.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a2 = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a2.call(asyncIterable_1)];
        case 7:
          _b2.sent();
          _b2.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source2, subscriber) {
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source2, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source2.subscribe(subscriber);
    }, delay));
  });
}
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator$1;
    executeSchedule(subscriber, scheduler, function() {
      iterator$1 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a2;
        var value;
        var done;
        try {
          _a2 = iterator$1.next(), value = _a2.value, done = _a2.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
    };
  });
}
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}
var EmptyError = createErrorClass(function(_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  };
});
function firstValueFrom(source2, config2) {
  var hasConfig = typeof config2 === "object";
  return new Promise(function(resolve, reject) {
    var subscriber = new SafeSubscriber({
      next: function(value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function() {
        if (hasConfig) {
          resolve(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
    source2.subscribe(subscriber);
  });
}
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
function map(project, thisArg) {
  return operate(function(source2, subscriber) {
    var index = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
var isArray$1 = Array.isArray;
function callOrApply(fn, args) {
  return isArray$1(args) ? fn.apply(void 0, __spreadArray([], __read$1(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    var first_1 = args[0];
    if (isArray(first_1)) {
      return { args: first_1, keys: null };
    }
    if (isPOJO(first_1)) {
      var keys = getKeys(first_1);
      return {
        args: keys.map(function(key) {
          return first_1[key];
        }),
        keys
      };
    }
  }
  return { args, keys: null };
}
function isPOJO(obj) {
  return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}
function createObject(keys, values) {
  return keys.reduce(function(result, key, i) {
    return result[key] = values[i], result;
  }, {});
}
function combineLatest() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var resultSelector = popResultSelector(args);
  var _a2 = argsArgArrayOrObject(args), observables = _a2.args, keys = _a2.keys;
  if (observables.length === 0) {
    return from([], scheduler);
  }
  var result = new Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
    return createObject(keys, values);
  } : identity));
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity;
  }
  return function(subscriber) {
    maybeSchedule(scheduler, function() {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;
      var _loop_1 = function(i2) {
        maybeSchedule(scheduler, function() {
          var source2 = from(observables[i2], scheduler);
          var hasFirstValue = false;
          source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
            values[i2] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function() {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };
      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
function filter(predicate, thisArg) {
  return operate(function(source2, subscriber) {
    var index = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
function catchError(selector) {
  return operate(function(source2, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source2.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
      handledResult = innerFrom(selector(err, catchError(selector)(source2)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
function take(count) {
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source2, subscriber) {
    var seen = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
function distinctUntilChanged(comparator, keySelector) {
  if (keySelector === void 0) {
    keySelector = identity;
  }
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return operate(function(source2, subscriber) {
    var previousKey;
    var first = true;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
function distinctUntilKeyChanged(key, compare) {
  return distinctUntilChanged(function(x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}
function share(options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.connector, connector = _a2 === void 0 ? function() {
    return new Subject();
  } : _a2, _b2 = options.resetOnError, resetOnError = _b2 === void 0 ? true : _b2, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
  return function(wrapperSource) {
    var connection = null;
    var resetConnection = null;
    var subject = null;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;
    var cancelReset = function() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = null;
    };
    var reset = function() {
      cancelReset();
      connection = subject = null;
      hasCompleted = hasErrored = false;
    };
    var resetAndUnsubscribe = function() {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate(function(source2, subscriber) {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function() {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection) {
        connection = new SafeSubscriber({
          next: function(value) {
            return dest.next(value);
          },
          error: function(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        from(source2).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (on === true) {
    reset();
    return null;
  }
  if (on === false) {
    return null;
  }
  return on.apply(void 0, __spreadArray([], __read$1(args))).pipe(take(1)).subscribe(function() {
    return reset();
  });
}
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var _a2, _b2, _c;
  var bufferSize;
  var refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    _a2 = configOrBufferSize.bufferSize, bufferSize = _a2 === void 0 ? Infinity : _a2, _b2 = configOrBufferSize.windowTime, windowTime = _b2 === void 0 ? Infinity : _b2, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return share({
    connector: function() {
      return new ReplaySubject(bufferSize, windowTime, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}
function skip(count) {
  return filter(function(_, index) {
    return count <= index;
  });
}
function switchMap(project, resultSelector) {
  return operate(function(source2, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function() {
      isComplete = true;
      checkComplete();
    }));
  });
}
function takeUntil(notifier) {
  return operate(function(source2, subscriber) {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
      return subscriber.complete();
    }, noop));
    !subscriber.closed && source2.subscribe(subscriber);
  });
}
function tap(observerOrNext, error, complete) {
  var tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
  return tapObserver ? operate(function(source2, subscriber) {
    var _a2;
    (_a2 = tapObserver.subscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
    var isUnsub = true;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var _a3;
      (_a3 = tapObserver.next) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, value);
      subscriber.next(value);
    }, function() {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.complete) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      subscriber.complete();
    }, function(err) {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.error) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, err);
      subscriber.error(err);
    }, function() {
      var _a3, _b2;
      if (isUnsub) {
        (_a3 = tapObserver.unsubscribe) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      }
      (_b2 = tapObserver.finalize) === null || _b2 === void 0 ? void 0 : _b2.call(tapObserver);
    }));
  }) : identity;
}
var defaultThrottleConfig = {
  leading: true,
  trailing: false
};
function throttle(durationSelector, config2) {
  if (config2 === void 0) {
    config2 = defaultThrottleConfig;
  }
  return operate(function(source2, subscriber) {
    var leading = config2.leading, trailing = config2.trailing;
    var hasValue = false;
    var sendValue = null;
    var throttled = null;
    var isComplete = false;
    var endThrottling = function() {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    var cleanupThrottling = function() {
      throttled = null;
      isComplete && subscriber.complete();
    };
    var startThrottle = function(value) {
      return throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
    };
    var send = function() {
      if (hasValue) {
        hasValue = false;
        var value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, function() {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}
function throttleTime(duration, scheduler, config2) {
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  if (config2 === void 0) {
    config2 = defaultThrottleConfig;
  }
  var duration$ = timer(duration, scheduler);
  return throttle(function() {
    return duration$;
  }, config2);
}
class BaseHttpService {
  constructor(httpConfig, accessToken) {
    this.httpConfig = httpConfig;
    if (accessToken instanceof Observable) {
      accessToken.subscribe((token) => this.accessToken = token);
    } else {
      this.accessToken = accessToken;
    }
  }
  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.accessToken}`
    };
  }
  getStructureUrl() {
    return `${this.httpConfig.Services.BaseUri}${this.httpConfig.Services.Structure}`;
  }
  static requestHttpConfig(systemUrl) {
    return axios.get(`${systemUrl}/assets/conf/application.config`).then((response) => response.data);
  }
}
var __awaiter$3 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class EntityHttpService extends BaseHttpService {
  constructor(httpConfig, accessToken) {
    super(httpConfig, accessToken);
  }
  getEntityById(entityType, id) {
    return __awaiter$3(this, void 0, void 0, function* () {
      return this.getPartialEntityById(entityType, id, null);
    });
  }
  getPartialEntityById(entityType, id, projection) {
    return __awaiter$3(this, void 0, void 0, function* () {
      let url = `${this._createBaseUrlByType(entityType)}/${id}`;
      if (projection) {
        url += `?$projection=${JSON.stringify(projection)}`;
      }
      const headers = this.getAuthorizationHeader();
      const response = yield axios.get(url, { headers });
      return response.data;
    });
  }
  queryConfiguration(entityType, query, paging, projection) {
    return __awaiter$3(this, void 0, void 0, function* () {
      const url = `${this._createBaseUrlByType(entityType)}/query`;
      const queryBody = {
        $filter: JSON.stringify(query),
        $paging: paging ? JSON.stringify(paging) : null,
        $projection: projection ? JSON.stringify(projection) : null
      };
      const headers = this.getAuthorizationHeader();
      const response = yield axios.post(url, queryBody, { headers });
      if (paging) {
        console.log(response.headers);
        const pagingResponseHeader = JSON.parse(response.headers["paging-headers"]);
        const totalCount = Number(pagingResponseHeader.TotalCount);
        return {
          data: response.data,
          total: totalCount
        };
      }
      return {
        data: response.data,
        total: response.data.length
      };
    });
  }
  resolvePathName(idPath) {
    return __awaiter$3(this, void 0, void 0, function* () {
      const pathGroups = yield this.queryConfiguration(EntityType.Group, { Id: { $in: idPath } });
      return idPath.map((id) => {
        var _a2, _b2;
        return (_b2 = (_a2 = pathGroups.data.find((x) => x.Id === id)) === null || _a2 === void 0 ? void 0 : _a2.Name) !== null && _b2 !== void 0 ? _b2 : id;
      }).join("/");
    });
  }
  uploadProcessImage(id, svg, name = "process-image.svg") {
    return __awaiter$3(this, void 0, void 0, function* () {
      const url = `${this._createBaseUrlByType(EntityType.ProcessImage)}/${id}/file/image`;
      const headers = this.getAuthorizationHeader();
      const blob = new Blob([svg], { type: "image/svg+xml" });
      const formData = new FormData();
      formData.append("file", blob, "process-image.svg");
      yield axios.post(url, formData, { headers });
    });
  }
  _createBaseUrlByType(entityType) {
    return `${this.getStructureUrl}/${EntityHttpEndpoints[entityType]}`;
  }
}
var __awaiter$2 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class TenantHttpService extends BaseHttpService {
  constructor(httpConfig, accessToken) {
    super(httpConfig, accessToken);
  }
  getTenantViewById(id) {
    return __awaiter$2(this, void 0, void 0, function* () {
      const url = `${this.getStructureUrl()}/tenant/${id}/view`;
      const headers = this.getAuthorizationHeader();
      const response = yield axios.get(url, { headers });
      return response.data;
    });
  }
  getTopTenants() {
    return __awaiter$2(this, void 0, void 0, function* () {
      const url = `${this.getStructureUrl()}/tenant/top`;
      const headers = this.getAuthorizationHeader();
      const response = yield axios.get(url, { headers });
      return response.data;
    });
  }
  getNextTenants(tenantId) {
    return __awaiter$2(this, void 0, void 0, function* () {
      const url = `${this.getStructureUrl()}/tenant/${tenantId}/next`;
      const headers = this.getAuthorizationHeader();
      const response = yield axios.get(url, { headers });
      return response.data;
    });
  }
}
var __awaiter$1 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class EntityNameService {
  constructor(httpService) {
    this.httpService = httpService;
    this._nameCache = {};
  }
  resolveEntityPath(entityType, id, includeSelf = false, limit) {
    return __awaiter$1(this, void 0, void 0, function* () {
      const entity = yield this.httpService.getPartialEntityById(entityType, id, { Name: 1, Path: 1 });
      let path = yield this.resolvePathName(entity.Path.splice(limit ? entity.Path.length - limit : 0, entity.Path.length));
      if (includeSelf) {
        path = path + "/" + entity.Name.Value;
      }
      return path;
    });
  }
  resolvePathName(idPath) {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (idPath.length === 0) {
        return "";
      }
      return firstValueFrom(combineLatest(idPath.map((id) => this.resolveName(EntityType.Group, id))).pipe(map((names) => names.join(" / "))));
    });
  }
  resolveName(entityType, id) {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (!this._nameCache[id]) {
        this._nameCache[id] = from(this.httpService.getPartialEntityById(entityType, id, { Name: 1 })).pipe(map((x) => x.Name.Value), shareReplay(1), catchError(() => of(id)));
      }
      return firstValueFrom(this._nameCache[id]);
    });
  }
}
globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Lifecycle;
(function(Lifecycle2) {
  Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
  Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
  Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
  Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
var Lifecycle$1 = Lifecycle;
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
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function isClassProvider(provider) {
  return !!provider.useClass;
}
function isFactoryProvider(provider) {
  return !!provider.useFactory;
}
var DelayedConstructor = function() {
  function DelayedConstructor2(wrap) {
    this.wrap = wrap;
    this.reflectMethods = [
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
  DelayedConstructor2.prototype.createProxy = function(createObject2) {
    var _this = this;
    var target = {};
    var init2 = false;
    var value;
    var delayedObject = function() {
      if (!init2) {
        value = createObject2(_this.wrap());
        init2 = true;
      }
      return value;
    };
    return new Proxy(target, this.createHandler(delayedObject));
  };
  DelayedConstructor2.prototype.createHandler = function(delayedObject) {
    var handler = {};
    var install = function(name) {
      handler[name] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        args[0] = delayedObject();
        var method = Reflect[name];
        return method.apply(void 0, __spread(args));
      };
    };
    this.reflectMethods.forEach(install);
    return handler;
  };
  return DelayedConstructor2;
}();
function isNormalToken(token) {
  return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
}
function isTransformDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
}
function isConstructorToken(token) {
  return typeof token === "function" || token instanceof DelayedConstructor;
}
function isTokenProvider(provider) {
  return !!provider.useToken;
}
function isValueProvider(provider) {
  return provider.useValue != void 0;
}
function isProvider(provider) {
  return isClassProvider(provider) || isValueProvider(provider) || isTokenProvider(provider) || isFactoryProvider(provider);
}
var RegistryBase = function() {
  function RegistryBase2() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  RegistryBase2.prototype.entries = function() {
    return this._registryMap.entries();
  };
  RegistryBase2.prototype.getAll = function(key) {
    this.ensure(key);
    return this._registryMap.get(key);
  };
  RegistryBase2.prototype.get = function(key) {
    this.ensure(key);
    var value = this._registryMap.get(key);
    return value[value.length - 1] || null;
  };
  RegistryBase2.prototype.set = function(key, value) {
    this.ensure(key);
    this._registryMap.get(key).push(value);
  };
  RegistryBase2.prototype.setAll = function(key, value) {
    this._registryMap.set(key, value);
  };
  RegistryBase2.prototype.has = function(key) {
    this.ensure(key);
    return this._registryMap.get(key).length > 0;
  };
  RegistryBase2.prototype.clear = function() {
    this._registryMap.clear();
  };
  RegistryBase2.prototype.ensure = function(key) {
    if (!this._registryMap.has(key)) {
      this._registryMap.set(key, []);
    }
  };
  return RegistryBase2;
}();
var Registry = function(_super) {
  __extends(Registry2, _super);
  function Registry2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return Registry2;
}(RegistryBase);
var ResolutionContext = function() {
  function ResolutionContext2() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return ResolutionContext2;
}();
function formatDependency(params, idx) {
  if (params === null) {
    return "at position #" + idx;
  }
  var argName = params.split(",")[idx].trim();
  return '"' + argName + '" at position #' + idx;
}
function composeErrorMessage(msg, e, indent) {
  if (indent === void 0) {
    indent = "    ";
  }
  return __spread([msg], e.message.split("\n").map(function(l) {
    return indent + l;
  })).join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
  var _a2 = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b2 = _a2[1], params = _b2 === void 0 ? null : _b2;
  var dep = formatDependency(params, paramIdx);
  return composeErrorMessage("Cannot inject the dependency " + dep + ' of "' + ctor.name + '" constructor. Reason:', error);
}
function isDisposable(value) {
  if (typeof value.dispose !== "function")
    return false;
  var disposeFun = value.dispose;
  if (disposeFun.length > 0) {
    return false;
  }
  return true;
}
var PreResolutionInterceptors = function(_super) {
  __extends(PreResolutionInterceptors2, _super);
  function PreResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PreResolutionInterceptors2;
}(RegistryBase);
var PostResolutionInterceptors = function(_super) {
  __extends(PostResolutionInterceptors2, _super);
  function PostResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PostResolutionInterceptors2;
}(RegistryBase);
var Interceptors = function() {
  function Interceptors2() {
    this.preResolution = new PreResolutionInterceptors();
    this.postResolution = new PostResolutionInterceptors();
  }
  return Interceptors2;
}();
var typeInfo = /* @__PURE__ */ new Map();
var InternalDependencyContainer = function() {
  function InternalDependencyContainer2(parent) {
    this.parent = parent;
    this._registry = new Registry();
    this.interceptors = new Interceptors();
    this.disposed = false;
    this.disposables = /* @__PURE__ */ new Set();
  }
  InternalDependencyContainer2.prototype.register = function(token, providerOrConstructor, options) {
    if (options === void 0) {
      options = { lifecycle: Lifecycle$1.Transient };
    }
    this.ensureNotDisposed();
    var provider;
    if (!isProvider(providerOrConstructor)) {
      provider = { useClass: providerOrConstructor };
    } else {
      provider = providerOrConstructor;
    }
    if (isTokenProvider(provider)) {
      var path = [token];
      var tokenProvider = provider;
      while (tokenProvider != null) {
        var currentToken = tokenProvider.useToken;
        if (path.includes(currentToken)) {
          throw new Error("Token registration cycle detected! " + __spread(path, [currentToken]).join(" -> "));
        }
        path.push(currentToken);
        var registration = this._registry.get(currentToken);
        if (registration && isTokenProvider(registration.provider)) {
          tokenProvider = registration.provider;
        } else {
          tokenProvider = null;
        }
      }
    }
    if (options.lifecycle === Lifecycle$1.Singleton || options.lifecycle == Lifecycle$1.ContainerScoped || options.lifecycle == Lifecycle$1.ResolutionScoped) {
      if (isValueProvider(provider) || isFactoryProvider(provider)) {
        throw new Error('Cannot use lifecycle "' + Lifecycle$1[options.lifecycle] + '" with ValueProviders or FactoryProviders');
      }
    }
    this._registry.set(token, { provider, options });
    return this;
  };
  InternalDependencyContainer2.prototype.registerType = function(from2, to) {
    this.ensureNotDisposed();
    if (isNormalToken(to)) {
      return this.register(from2, {
        useToken: to
      });
    }
    return this.register(from2, {
      useClass: to
    });
  };
  InternalDependencyContainer2.prototype.registerInstance = function(token, instance2) {
    this.ensureNotDisposed();
    return this.register(token, {
      useValue: instance2
    });
  };
  InternalDependencyContainer2.prototype.registerSingleton = function(from2, to) {
    this.ensureNotDisposed();
    if (isNormalToken(from2)) {
      if (isNormalToken(to)) {
        return this.register(from2, {
          useToken: to
        }, { lifecycle: Lifecycle$1.Singleton });
      } else if (to) {
        return this.register(from2, {
          useClass: to
        }, { lifecycle: Lifecycle$1.Singleton });
      }
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var useClass = from2;
    if (to && !isNormalToken(to)) {
      useClass = to;
    }
    return this.register(from2, {
      useClass
    }, { lifecycle: Lifecycle$1.Singleton });
  };
  InternalDependencyContainer2.prototype.resolve = function(token, context2) {
    if (context2 === void 0) {
      context2 = new ResolutionContext();
    }
    this.ensureNotDisposed();
    var registration = this.getRegistration(token);
    if (!registration && isNormalToken(token)) {
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "Single");
    if (registration) {
      var result = this.resolveRegistration(registration, context2);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    if (isConstructorToken(token)) {
      var result = this.construct(token, context2);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  };
  InternalDependencyContainer2.prototype.executePreResolutionInterceptor = function(token, resolutionType) {
    var e_1, _a2;
    if (this.interceptors.preResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b2 = __values(this.interceptors.preResolution.getAll(token)), _c = _b2.next(); !_c.done; _c = _b2.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, resolutionType);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b2.return))
            _a2.call(_b2);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.interceptors.preResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.executePostResolutionInterceptor = function(token, result, resolutionType) {
    var e_2, _a2;
    if (this.interceptors.postResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b2 = __values(this.interceptors.postResolution.getAll(token)), _c = _b2.next(); !_c.done; _c = _b2.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, result, resolutionType);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b2.return))
            _a2.call(_b2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      this.interceptors.postResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.resolveRegistration = function(registration, context2) {
    this.ensureNotDisposed();
    if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped && context2.scopedResolutions.has(registration)) {
      return context2.scopedResolutions.get(registration);
    }
    var isSingleton = registration.options.lifecycle === Lifecycle$1.Singleton;
    var isContainerScoped = registration.options.lifecycle === Lifecycle$1.ContainerScoped;
    var returnInstance = isSingleton || isContainerScoped;
    var resolved;
    if (isValueProvider(registration.provider)) {
      resolved = registration.provider.useValue;
    } else if (isTokenProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context2)) : this.resolve(registration.provider.useToken, context2);
    } else if (isClassProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context2)) : this.construct(registration.provider.useClass, context2);
    } else if (isFactoryProvider(registration.provider)) {
      resolved = registration.provider.useFactory(this);
    } else {
      resolved = this.construct(registration.provider, context2);
    }
    if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped) {
      context2.scopedResolutions.set(registration, resolved);
    }
    return resolved;
  };
  InternalDependencyContainer2.prototype.resolveAll = function(token, context2) {
    var _this = this;
    if (context2 === void 0) {
      context2 = new ResolutionContext();
    }
    this.ensureNotDisposed();
    var registrations = this.getAllRegistrations(token);
    if (!registrations && isNormalToken(token)) {
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "All");
    if (registrations) {
      var result_1 = registrations.map(function(item) {
        return _this.resolveRegistration(item, context2);
      });
      this.executePostResolutionInterceptor(token, result_1, "All");
      return result_1;
    }
    var result = [this.construct(token, context2)];
    this.executePostResolutionInterceptor(token, result, "All");
    return result;
  };
  InternalDependencyContainer2.prototype.isRegistered = function(token, recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    this.ensureNotDisposed();
    return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
  };
  InternalDependencyContainer2.prototype.reset = function() {
    this.ensureNotDisposed();
    this._registry.clear();
    this.interceptors.preResolution.clear();
    this.interceptors.postResolution.clear();
  };
  InternalDependencyContainer2.prototype.clearInstances = function() {
    var e_3, _a2;
    this.ensureNotDisposed();
    try {
      for (var _b2 = __values(this._registry.entries()), _c = _b2.next(); !_c.done; _c = _b2.next()) {
        var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
        this._registry.setAll(token, registrations.filter(function(registration) {
          return !isValueProvider(registration.provider);
        }).map(function(registration) {
          registration.instance = void 0;
          return registration;
        }));
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  InternalDependencyContainer2.prototype.createChildContainer = function() {
    var e_4, _a2;
    this.ensureNotDisposed();
    var childContainer = new InternalDependencyContainer2(this);
    try {
      for (var _b2 = __values(this._registry.entries()), _c = _b2.next(); !_c.done; _c = _b2.next()) {
        var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
        if (registrations.some(function(_a3) {
          var options = _a3.options;
          return options.lifecycle === Lifecycle$1.ContainerScoped;
        })) {
          childContainer._registry.setAll(token, registrations.map(function(registration) {
            if (registration.options.lifecycle === Lifecycle$1.ContainerScoped) {
              return {
                provider: registration.provider,
                options: registration.options
              };
            }
            return registration;
          }));
        }
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    return childContainer;
  };
  InternalDependencyContainer2.prototype.beforeResolution = function(token, callback, options) {
    if (options === void 0) {
      options = { frequency: "Always" };
    }
    this.interceptors.preResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.afterResolution = function(token, callback, options) {
    if (options === void 0) {
      options = { frequency: "Always" };
    }
    this.interceptors.postResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.dispose = function() {
    return __awaiter(this, void 0, void 0, function() {
      var promises;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            this.disposed = true;
            promises = [];
            this.disposables.forEach(function(disposable) {
              var maybePromise = disposable.dispose();
              if (maybePromise) {
                promises.push(maybePromise);
              }
            });
            return [4, Promise.all(promises)];
          case 1:
            _a2.sent();
            return [2];
        }
      });
    });
  };
  InternalDependencyContainer2.prototype.getRegistration = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.get(token);
    }
    if (this.parent) {
      return this.parent.getRegistration(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.getAllRegistrations = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.getAll(token);
    }
    if (this.parent) {
      return this.parent.getAllRegistrations(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.construct = function(ctor, context2) {
    var _this = this;
    if (ctor instanceof DelayedConstructor) {
      return ctor.createProxy(function(target) {
        return _this.resolve(target, context2);
      });
    }
    var instance2 = function() {
      var paramInfo = typeInfo.get(ctor);
      if (!paramInfo || paramInfo.length === 0) {
        if (ctor.length === 0) {
          return new ctor();
        } else {
          throw new Error('TypeInfo not known for "' + ctor.name + '"');
        }
      }
      var params = paramInfo.map(_this.resolveParams(context2, ctor));
      return new (ctor.bind.apply(ctor, __spread([void 0], params)))();
    }();
    if (isDisposable(instance2)) {
      this.disposables.add(instance2);
    }
    return instance2;
  };
  InternalDependencyContainer2.prototype.resolveParams = function(context2, ctor) {
    var _this = this;
    return function(param, idx) {
      var _a2, _b2, _c;
      try {
        if (isTokenDescriptor(param)) {
          if (isTransformDescriptor(param)) {
            return param.multiple ? (_a2 = _this.resolve(param.transform)).transform.apply(_a2, __spread([_this.resolveAll(param.token)], param.transformArgs)) : (_b2 = _this.resolve(param.transform)).transform.apply(_b2, __spread([_this.resolve(param.token, context2)], param.transformArgs));
          } else {
            return param.multiple ? _this.resolveAll(param.token) : _this.resolve(param.token, context2);
          }
        } else if (isTransformDescriptor(param)) {
          return (_c = _this.resolve(param.transform, context2)).transform.apply(_c, __spread([_this.resolve(param.token, context2)], param.transformArgs));
        }
        return _this.resolve(param, context2);
      } catch (e) {
        throw new Error(formatErrorCtor(ctor, idx, e));
      }
    };
  };
  InternalDependencyContainer2.prototype.ensureNotDisposed = function() {
    if (this.disposed) {
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
    }
  };
  return InternalDependencyContainer2;
}();
var instance$l = new InternalDependencyContainer();
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
}
function resolveService(service) {
  try {
    return instance$l.resolve(service);
  } catch {
    if (window[service == null ? void 0 : service.toString()]) {
      return window[service == null ? void 0 : service.toString()];
    }
    throw new Error(`Service ${service.toString()} not found`);
  }
}
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  child_ctx[18] = i;
  return child_ctx;
}
function create_if_block_1$6(ctx) {
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      class: "material-icons",
      size: "button",
      $$slots: { default: [create_default_slot_1$4] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on("click", ctx[7]);
  return {
    c() {
      create_component(iconbutton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const iconbutton_changes = {};
      if (dirty & 524288) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_default_slot_1$4(ctx) {
  let t;
  return {
    c() {
      t = text("arrow_back");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(ctx) {
  let div;
  let t0_value = ctx[14].Name + "";
  let t0;
  let t1_value = ctx[18] == ctx[1].length - 1 ? "" : " /";
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler_1() {
    return ctx[8](ctx[14]);
  }
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = text(t1_value);
      t2 = space();
      attr(div, "class", "cursor-pointer hover:bg-slate-100 p-1");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t0);
      append(div, t1);
      append(div, t2);
      if (!mounted) {
        dispose = listen(div, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 2 && t0_value !== (t0_value = ctx[14].Name + ""))
        set_data(t0, t0_value);
      if (dirty & 2 && t1_value !== (t1_value = ctx[18] == ctx[1].length - 1 ? "" : " /"))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$d(ctx) {
  let div;
  let iconbutton;
  let current;
  function click_handler_2(...args) {
    return ctx[9](ctx[14], ...args);
  }
  iconbutton = new IconButton({
    props: {
      class: "material-icons",
      $$slots: { default: [create_default_slot$c] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on("click", click_handler_2);
  return {
    c() {
      div = element("div");
      create_component(iconbutton.$$.fragment);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(iconbutton, div, null);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const iconbutton_changes = {};
      if (dirty & 524288) {
        iconbutton_changes.$$scope = { dirty, ctx };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(iconbutton);
    }
  };
}
function create_default_slot$c(ctx) {
  let t;
  return {
    c() {
      t = text("done");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$3(ctx) {
  var _a2;
  let div1;
  let div0;
  let t0_value = ((_a2 = ctx[14]) == null ? void 0 : _a2.Name) + "";
  let t0;
  let t1;
  let t2;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[14].Root && create_if_block$d(ctx);
  function click_handler_3() {
    return ctx[10](ctx[14]);
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      attr(div0, "class", "mt-2 ml-2 ");
      attr(div1, "class", "flex justify-between bg-slate-200 hover:bg-slate-300 shadow-sm rounded-sm cursor-pointer");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, t0);
      append(div1, t1);
      if (if_block)
        if_block.m(div1, null);
      append(div1, t2);
      current = true;
      if (!mounted) {
        dispose = listen(div1, "click", click_handler_3);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a3;
      ctx = new_ctx;
      if ((!current || dirty & 4) && t0_value !== (t0_value = ((_a3 = ctx[14]) == null ? void 0 : _a3.Name) + ""))
        set_data(t0, t0_value);
      if (ctx[14].Root) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$d(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t2);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$y(ctx) {
  let div4;
  let div1;
  let t0;
  let div0;
  let t2;
  let div2;
  let t3;
  let div3;
  let current;
  let if_block = ctx[0] && create_if_block_1$6(ctx);
  let each_value_1 = ctx[1];
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div4 = element("div");
      div1 = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      div0 = element("div");
      div0.textContent = "Mandant ausw\xE4hlen";
      t2 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t3 = space();
      div3 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.c = noop$1;
      attr(div0, "class", "font-bold text-gray-600 text-lg");
      attr(div1, "class", "flex items-center");
      attr(div2, "class", "flex mb-1");
      set_style(div3, "grid-auto-rows", "60px");
      attr(div3, "class", "grid grid-cols-2 gap-2");
      attr(div4, "class", "w-full");
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div1);
      if (if_block)
        if_block.m(div1, null);
      append(div1, t0);
      append(div1, div0);
      append(div4, t2);
      append(div4, div2);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div2, null);
      }
      append(div4, t3);
      append(div4, div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div3, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$6(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & 34) {
        each_value_1 = ctx2[1];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div2, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & 84) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div3, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$k($$self, $$props, $$invalidate) {
  let enttiyTenantSelect = resolveService(TenantHttpService);
  let { allowBack = false } = $$props;
  let tenantPath = [];
  let tenants = [];
  const eventDispatcher = createEventDispatcher();
  async function setupBrowser() {
    const topTenants = await enttiyTenantSelect.getTopTenants();
    if (topTenants.length === 1) {
      const rootTenant = topTenants[0];
      if (rootTenant.Root == null) {
        browseTenant(rootTenant);
        return;
      }
    }
    $$invalidate(1, tenantPath = [new TenantView({ Id: "start", Name: "Start" })]);
    $$invalidate(2, tenants = topTenants);
  }
  async function loadChildren(tenant) {
    const children2 = await enttiyTenantSelect.getNextTenants(tenant.Id);
    $$invalidate(2, tenants = children2);
  }
  async function browseTenant(tenant) {
    $$invalidate(1, tenantPath = [...tenantPath, tenant]);
    loadChildren(tenant);
  }
  async function selectTenantInPath(tenant) {
    if (tenant.Id == "start") {
      setupBrowser();
      return;
    }
    const index = tenantPath.findIndex((t) => t.Id === tenant.Id);
    $$invalidate(1, tenantPath = tenantPath.slice(0, index + 1));
    loadChildren(tenant);
  }
  function selectTenant(event, tenant) {
    console.log(event, tenant);
    event.stopPropagation();
    eventDispatcher("tenantSelected", { tenant });
  }
  setupBrowser();
  const click_handler = () => eventDispatcher("back");
  const click_handler_1 = (tenant) => selectTenantInPath(tenant);
  const click_handler_2 = (tenant, event) => selectTenant(event, tenant);
  const click_handler_3 = (tenant) => browseTenant(tenant);
  $$self.$$set = ($$props2) => {
    if ("allowBack" in $$props2)
      $$invalidate(0, allowBack = $$props2.allowBack);
  };
  return [
    allowBack,
    tenantPath,
    tenants,
    eventDispatcher,
    browseTenant,
    selectTenantInPath,
    selectTenant,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class TenantSelect$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$k, create_fragment$y, safe_not_equal, { allowBack: 0 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["allowBack"];
  }
  get allowBack() {
    return this.$$.ctx[0];
  }
  set allowBack(allowBack) {
    this.$$set({ allowBack });
    flush();
  }
}
function createState(...propsFactories) {
  const result = {
    config: {},
    state: {}
  };
  for (const {
    config: config2,
    props
  } of propsFactories) {
    Object.assign(result.config, config2);
    Object.assign(result.state, props);
  }
  return result;
}
const batchInProgress = new BehaviorSubject(false);
const batchDone$ = batchInProgress.asObservable().pipe(filter((inProgress) => !inProgress), take(1));
const elfHooksRegistry = {};
const registry = /* @__PURE__ */ new Map();
const registryActions = new Subject();
registryActions.asObservable();
function addStore(store) {
  registry.set(store.name, store);
  registryActions.next({
    type: "add",
    store
  });
}
function removeStore(store) {
  registry.delete(store.name);
  registryActions.next({
    type: "remove",
    store
  });
}
function getRegistry() {
  return registry;
}
class Store extends BehaviorSubject {
  constructor(storeDef) {
    super(storeDef.state);
    this.storeDef = storeDef;
    this.batchInProgress = false;
    this.context = {
      config: this.getConfig()
    };
    this.state = storeDef.state;
    this.initialState = this.getValue();
    addStore(this);
  }
  get name() {
    return this.storeDef.name;
  }
  getConfig() {
    return this.storeDef.config;
  }
  query(selector) {
    return selector(this.getValue());
  }
  update(...reducers) {
    const currentState = this.getValue();
    let nextState = reducers.reduce((value, reducer) => {
      value = reducer(value, this.context);
      return value;
    }, currentState);
    if (elfHooksRegistry.preStoreUpdate) {
      nextState = elfHooksRegistry.preStoreUpdate(currentState, nextState, this.name);
    }
    if (nextState !== currentState) {
      this.state = nextState;
      if (batchInProgress.getValue()) {
        if (!this.batchInProgress) {
          this.batchInProgress = true;
          batchDone$.subscribe(() => {
            super.next(this.state);
            this.batchInProgress = false;
          });
        }
      } else {
        super.next(this.state);
      }
    }
  }
  getValue() {
    return this.state;
  }
  reset() {
    this.update(() => this.initialState);
  }
  combine(observables) {
    let hasChange = true;
    const buffer = {};
    return new Observable((observer) => {
      for (const [key, query] of Object.entries(observables)) {
        observer.add(query.subscribe((value) => {
          buffer[key] = value;
          hasChange = true;
        }));
      }
      return this.subscribe({
        next() {
          if (hasChange) {
            observer.next(buffer);
            hasChange = false;
          }
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          observer.complete();
        }
      });
    });
  }
  destroy() {
    removeStore(this);
    this.reset();
  }
  next(value) {
    this.update(() => value);
  }
  error() {
  }
  complete() {
  }
}
function withProps(props) {
  return {
    props,
    config: void 0
  };
}
function persistState(store, options) {
  var _options$key;
  const defaultOptions = {
    source: (store2) => store2,
    preStoreInit: (value) => value,
    key: (_options$key = options.key) != null ? _options$key : `${store.name}@store`,
    runGuard() {
      return typeof window !== "undefined";
    }
  };
  const merged = Object.assign({}, defaultOptions, options);
  if (!(merged.runGuard != null && merged.runGuard())) {
    return {
      initialized$: of(false),
      unsubscribe() {
      }
    };
  }
  const {
    storage
  } = options;
  const initialized = new ReplaySubject(1);
  const loadFromStorageSubscription = from(storage.getItem(merged.key)).subscribe((value) => {
    if (value) {
      store.update((state2) => {
        return merged.preStoreInit(Object.assign({}, state2, value));
      });
    }
    initialized.next(true);
    initialized.complete();
  });
  const saveToStorageSubscription = merged.source(store).pipe(skip(1), switchMap((value) => storage.setItem(merged.key, value))).subscribe();
  return {
    initialized$: initialized.asObservable(),
    unsubscribe() {
      saveToStorageSubscription.unsubscribe();
      loadFromStorageSubscription.unsubscribe();
    }
  };
}
function createStorage(storage) {
  if (!storage) {
    return;
  }
  return {
    getItem(key) {
      const v = storage.getItem(key);
      return of(v ? JSON.parse(v) : v);
    },
    setItem(key, value) {
      storage.setItem(key, JSON.stringify(value));
      return of(true);
    },
    removeItem(key) {
      storage.removeItem(key);
      return of(true);
    }
  };
}
const localStorageStrategy = createStorage(typeof localStorage !== "undefined" ? localStorage : void 0);
const subscriber_queue = [];
function writable(value, start = noop$1) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe3(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop$1;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe3 };
}
const entitySelectEntityType = writable(EntityType.Signal);
const { config, state } = createState(withProps({
  queryWithSubGroups: true,
  selectedTenant: null
}));
const EntitySelectGlobalStore = new Store({ state, config, name: "entity-select-global" });
persistState(EntitySelectGlobalStore, {
  key: "entity-select-global",
  storage: localStorageStrategy
});
const EntitySelectTypeStore = (type) => {
  const store = getRegistry().get(`entity-select-type-${entitySelectEntityType}`);
  if (store) {
    return store;
  }
  const { state: state2, config: config2 } = createState(withProps({
    filter: null,
    selectedGroup: null,
    lastSelectedEntities: []
  }));
  return new Store({ state: state2, config: config2, name: `entity-select-type-${entitySelectEntityType}` });
};
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function create_else_block_1$2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "p-[10px]");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_1$5(ctx) {
  let div;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block_2$2;
    return create_else_block$6;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      attr(div, "class", "flex items-center");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function create_else_block$6(ctx) {
  let span;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      span.textContent = "chevron_right";
      attr(span, "class", "material-icons text-[20px] w-[20px] cursor-pointer");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if (!mounted) {
        dispose = listen(span, "click", ctx[9]);
        mounted = true;
      }
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2$2(ctx) {
  let span;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      span.textContent = "expand_more";
      attr(span, "class", "material-icons text-[20px] w-[20px] cursor-pointer");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if (!mounted) {
        dispose = listen(span, "click", ctx[8]);
        mounted = true;
      }
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$c(ctx) {
  let div2;
  let div0;
  let t;
  let div1;
  let current;
  let each_value = ctx[4];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div0, "class", "border-r group-hover:border-gray-300 border-transparent pl-1 mb-2");
      set_style(div0, "padding-right", ctx[2] * 4 + "px");
      attr(div1, "class", "w-full");
      attr(div2, "class", "flex w-full");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div2, t);
      append(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 4) {
        set_style(div0, "padding-right", ctx2[2] * 4 + "px");
      }
      if (dirty & 28) {
        each_value = ctx2[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block$2(ctx) {
  let entityselecttreenode;
  let current;
  entityselecttreenode = new EntitySelectTreeNode({
    props: {
      group: ctx[15],
      level: ctx[2] + 1,
      entityType: ctx[3]
    }
  });
  return {
    c() {
      create_component(entityselecttreenode.$$.fragment);
    },
    m(target, anchor) {
      mount_component(entityselecttreenode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const entityselecttreenode_changes = {};
      if (dirty & 16)
        entityselecttreenode_changes.group = ctx2[15];
      if (dirty & 4)
        entityselecttreenode_changes.level = ctx2[2] + 1;
      if (dirty & 8)
        entityselecttreenode_changes.entityType = ctx2[3];
      entityselecttreenode.$set(entityselecttreenode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(entityselecttreenode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(entityselecttreenode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(entityselecttreenode, detaching);
    }
  };
}
function create_fragment$x(ctx) {
  var _a2, _b2;
  let div3;
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2_value = ((_b2 = (_a2 = ctx[1]) == null ? void 0 : _a2.Name) == null ? void 0 : _b2.Value) + "";
  let t2;
  let div2_class_value;
  let t3;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[4].length > 0)
      return create_if_block_1$5;
    return create_else_block_1$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = ctx[0] && create_if_block$c(ctx);
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      if_block0.c();
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      if (if_block1)
        if_block1.c();
      this.c = noop$1;
      attr(div1, "class", "overflow-hidden whitespace-nowrap text-ellipsis w-full");
      attr(div2, "class", div2_class_value = "flex items-center hover:bg-slate-100 w-full " + (ctx[5] ? "!bg-slate-300" : ""));
      attr(div3, "class", "group cursor-pointer");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      append(div2, div0);
      append(div2, t0);
      if_block0.m(div2, null);
      append(div2, t1);
      append(div2, div1);
      append(div1, t2);
      append(div3, t3);
      if (if_block1)
        if_block1.m(div3, null);
      current = true;
      if (!mounted) {
        dispose = listen(div2, "click", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      var _a3, _b3;
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div2, t1);
        }
      }
      if ((!current || dirty & 2) && t2_value !== (t2_value = ((_b3 = (_a3 = ctx2[1]) == null ? void 0 : _a3.Name) == null ? void 0 : _b3.Value) + ""))
        set_data(t2, t2_value);
      if (!current || dirty & 32 && div2_class_value !== (div2_class_value = "flex items-center hover:bg-slate-100 w-full " + (ctx2[5] ? "!bg-slate-300" : ""))) {
        attr(div2, "class", div2_class_value);
      }
      if (ctx2[0]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$c(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  const httpService = resolveService(EntityHttpService);
  let { group } = $$props;
  let { expanded = false } = $$props;
  let { level = 1 } = $$props;
  let { entityType } = $$props;
  let children2 = [];
  let selected = false;
  let unsub = new Subject();
  let typeStore = EntitySelectTypeStore();
  typeStore.pipe(takeUntil(unsub), distinctUntilKeyChanged("selectedGroup")).subscribe((state2) => {
    var _a2, _b2;
    $$invalidate(5, selected = ((_a2 = state2.selectedGroup) == null ? void 0 : _a2.Id) === (group == null ? void 0 : group.Id));
    if (group && ((_b2 = state2.selectedGroup) == null ? void 0 : _b2.Path.includes(group.Id))) {
      $$invalidate(0, expanded = true);
    }
  });
  async function getChildren() {
    try {
      $$invalidate(4, children2 = await (await httpService.queryConfiguration(EntityType.Group, { GroupId: group.Id })).data);
    } catch (error) {
      console.error(error);
    }
  }
  function toggleExpanded() {
    $$invalidate(0, expanded = !expanded);
  }
  function selectGroup() {
    typeStore.update((state2) => ({ ...state2, selectedGroup: group }));
  }
  onDestroy(() => {
    unsub.next();
    unsub.complete();
  });
  const click_handler = () => toggleExpanded();
  const click_handler_1 = () => toggleExpanded();
  const click_handler_2 = () => selectGroup();
  $$self.$$set = ($$props2) => {
    if ("group" in $$props2)
      $$invalidate(1, group = $$props2.group);
    if ("expanded" in $$props2)
      $$invalidate(0, expanded = $$props2.expanded);
    if ("level" in $$props2)
      $$invalidate(2, level = $$props2.level);
    if ("entityType" in $$props2)
      $$invalidate(3, entityType = $$props2.entityType);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      {
        if (group) {
          getChildren();
        }
      }
    }
  };
  return [
    expanded,
    group,
    level,
    entityType,
    children2,
    selected,
    toggleExpanded,
    selectGroup,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class EntitySelectTreeNode extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$j, create_fragment$x, safe_not_equal, {
      group: 1,
      expanded: 0,
      level: 2,
      entityType: 3
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["group", "expanded", "level", "entityType"];
  }
  get group() {
    return this.$$.ctx[1];
  }
  set group(group) {
    this.$$set({ group });
    flush();
  }
  get expanded() {
    return this.$$.ctx[0];
  }
  set expanded(expanded) {
    this.$$set({ expanded });
    flush();
  }
  get level() {
    return this.$$.ctx[2];
  }
  set level(level) {
    this.$$set({ level });
    flush();
  }
  get entityType() {
    return this.$$.ctx[3];
  }
  set entityType(entityType) {
    this.$$set({ entityType });
    flush();
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function create_default_slot$b(ctx) {
  let t;
  return {
    c() {
      t = text("edit");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1$4(ctx) {
  let div;
  let entityselecttreenode;
  let current;
  entityselecttreenode = new EntitySelectTreeNode({
    props: {
      group: ctx[2],
      expanded: true,
      entityType: ctx[0]
    }
  });
  return {
    c() {
      div = element("div");
      create_component(entityselecttreenode.$$.fragment);
      attr(div, "class", "flex-[2] overflow-auto");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(entityselecttreenode, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const entityselecttreenode_changes = {};
      if (dirty & 4)
        entityselecttreenode_changes.group = ctx2[2];
      if (dirty & 1)
        entityselecttreenode_changes.entityType = ctx2[0];
      entityselecttreenode.$set(entityselecttreenode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(entityselecttreenode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(entityselecttreenode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(entityselecttreenode);
    }
  };
}
function create_if_block$b(ctx) {
  let each_1_anchor;
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 89) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_catch_block$1(ctx) {
  return { c: noop$1, m: noop$1, p: noop$1, d: noop$1 };
}
function create_then_block$1(ctx) {
  let t_value = ctx[16] + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 9 && t_value !== (t_value = ctx2[16] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_pending_block$1(ctx) {
  return { c: noop$1, m: noop$1, p: noop$1, d: noop$1 };
}
function create_each_block$1(ctx) {
  let div;
  let promise;
  let t;
  let mounted;
  let dispose;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$1,
    then: create_then_block$1,
    catch: create_catch_block$1,
    value: 16
  };
  handle_promise(promise = ctx[4].resolveName(ctx[0], ctx[13]), info);
  function click_handler_1() {
    return ctx[8](ctx[13]);
  }
  return {
    c() {
      div = element("div");
      info.block.c();
      t = space();
      attr(div, "class", "w-full hover:bg-gray-200 cursor-pointer");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = t;
      append(div, t);
      if (!mounted) {
        dispose = listen(div, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 9 && promise !== (promise = ctx[4].resolveName(ctx[0], ctx[13])) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$w(ctx) {
  var _a2;
  let div3;
  let div0;
  let t0_value = ((_a2 = ctx[1]) == null ? void 0 : _a2.Name) + "";
  let t0;
  let t1;
  let iconbutton;
  let t2;
  let t3;
  let div2;
  let div1;
  let t5;
  let current;
  let mounted;
  let dispose;
  iconbutton = new IconButton({
    props: {
      class: "material-icons group-hover:visible invisible",
      size: "button",
      $$slots: { default: [create_default_slot$b] },
      $$scope: { ctx }
    }
  });
  let if_block0 = ctx[2] && create_if_block_1$4(ctx);
  let if_block1 = ctx[3] && ctx[3].length > 0 && create_if_block$b(ctx);
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      create_component(iconbutton.$$.fragment);
      t2 = space();
      if (if_block0)
        if_block0.c();
      t3 = space();
      div2 = element("div");
      div1 = element("div");
      div1.textContent = "Zuletzt ausgew\xE4hlt";
      t5 = space();
      if (if_block1)
        if_block1.c();
      this.c = noop$1;
      attr(div0, "class", "font-bold text-lg flex items-center cursor-pointer group");
      attr(div1, "class", "font-bold text-gray-700");
      attr(div2, "class", "flex-1");
      attr(div3, "class", "flex flex-col w-full h-full overflow-hidden");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div0);
      append(div0, t0);
      append(div0, t1);
      mount_component(iconbutton, div0, null);
      append(div3, t2);
      if (if_block0)
        if_block0.m(div3, null);
      append(div3, t3);
      append(div3, div2);
      append(div2, div1);
      append(div2, t5);
      if (if_block1)
        if_block1.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = listen(div0, "click", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      var _a3;
      if ((!current || dirty & 2) && t0_value !== (t0_value = ((_a3 = ctx2[1]) == null ? void 0 : _a3.Name) + ""))
        set_data(t0, t0_value);
      const iconbutton_changes = {};
      if (dirty & 131072) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
      if (ctx2[2]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div3, t3);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[3] && ctx2[3].length > 0) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$b(ctx2);
          if_block1.c();
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(iconbutton);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  let httpService = resolveService(EntityHttpService);
  let nameService = instance$l.resolve(EntityNameService);
  let { entityType } = $$props;
  let { selectedTenant } = $$props;
  let rootGroup = null;
  let lastSelectedEntities;
  let dispatcher = createEventDispatcher();
  let unsub = new Subject();
  let typeStore = EntitySelectTypeStore();
  typeStore.pipe(takeUntil(unsub)).subscribe((state2) => {
    $$invalidate(3, lastSelectedEntities = state2.lastSelectedEntities);
  });
  async function getRootGroup(id) {
    var _a2;
    try {
      $$invalidate(2, rootGroup = await httpService.getEntityById(EntityType.Group, id));
      if (!((_a2 = typeStore.value) == null ? void 0 : _a2.selectedGroup)) {
        typeStore.update((state2) => ({ ...state2, selectedGroup: rootGroup }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  afterUpdate(() => {
    try {
      if (selectedTenant && selectedTenant.Root && rootGroup === null) {
        getRootGroup(selectedTenant.Root);
      }
    } catch {
    }
  });
  async function selectLastSelected(entityId) {
    let entity = await httpService.getEntityById(entityType, entityId);
    dispatcher("entitySelected", { selectedEntity: entity });
  }
  const click_handler = () => dispatcher("changeTenant");
  const click_handler_1 = (entityId) => selectLastSelected(entityId);
  $$self.$$set = ($$props2) => {
    if ("entityType" in $$props2)
      $$invalidate(0, entityType = $$props2.entityType);
    if ("selectedTenant" in $$props2)
      $$invalidate(1, selectedTenant = $$props2.selectedTenant);
  };
  return [
    entityType,
    selectedTenant,
    rootGroup,
    lastSelectedEntities,
    nameService,
    dispatcher,
    selectLastSelected,
    click_handler,
    click_handler_1
  ];
}
class EntitySelectSidebar extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$i, create_fragment$w, safe_not_equal, { entityType: 0, selectedTenant: 1 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["entityType", "selectedTenant"];
  }
  get entityType() {
    return this.$$.ctx[0];
  }
  set entityType(entityType) {
    this.$$set({ entityType });
    flush();
  }
  get selectedTenant() {
    return this.$$.ctx[1];
  }
  set selectedTenant(selectedTenant) {
    this.$$set({ selectedTenant });
    flush();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
};
function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === "function";
}
function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement("div");
    var _a2 = cssPropertyNameMap[cssProperty], standard = _a2.standard, prefixed = _a2.prefixed;
    var isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }
  return cssProperty;
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$c = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
};
var strings$b = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
};
var numbers$7 = {
  ANIM_END_LATCH_MS: 250
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCCheckboxFoundation = function(_super) {
  __extends$1(MDCCheckboxFoundation2, _super);
  function MDCCheckboxFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCCheckboxFoundation2.defaultAdapter), adapter)) || this;
    _this.currentCheckState = strings$b.TRANSITION_STATE_INIT;
    _this.currentAnimationClass = "";
    _this.animEndLatchTimer = 0;
    _this.enableAnimationEndHandler = false;
    return _this;
  }
  Object.defineProperty(MDCCheckboxFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$c;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation2, "strings", {
    get: function() {
      return strings$b;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation2, "numbers", {
    get: function() {
      return numbers$7;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        forceLayout: function() {
          return void 0;
        },
        hasNativeControl: function() {
          return false;
        },
        isAttachedToDOM: function() {
          return false;
        },
        isChecked: function() {
          return false;
        },
        isIndeterminate: function() {
          return false;
        },
        removeClass: function() {
          return void 0;
        },
        removeNativeControlAttr: function() {
          return void 0;
        },
        setNativeControlAttr: function() {
          return void 0;
        },
        setNativeControlDisabled: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCCheckboxFoundation2.prototype.init = function() {
    this.currentCheckState = this.determineCheckState();
    this.updateAriaChecked();
    this.adapter.addClass(cssClasses$c.UPGRADED);
  };
  MDCCheckboxFoundation2.prototype.destroy = function() {
    clearTimeout(this.animEndLatchTimer);
  };
  MDCCheckboxFoundation2.prototype.setDisabled = function(disabled) {
    this.adapter.setNativeControlDisabled(disabled);
    if (disabled) {
      this.adapter.addClass(cssClasses$c.DISABLED);
    } else {
      this.adapter.removeClass(cssClasses$c.DISABLED);
    }
  };
  MDCCheckboxFoundation2.prototype.handleAnimationEnd = function() {
    var _this = this;
    if (!this.enableAnimationEndHandler) {
      return;
    }
    clearTimeout(this.animEndLatchTimer);
    this.animEndLatchTimer = setTimeout(function() {
      _this.adapter.removeClass(_this.currentAnimationClass);
      _this.enableAnimationEndHandler = false;
    }, numbers$7.ANIM_END_LATCH_MS);
  };
  MDCCheckboxFoundation2.prototype.handleChange = function() {
    this.transitionCheckState();
  };
  MDCCheckboxFoundation2.prototype.transitionCheckState = function() {
    if (!this.adapter.hasNativeControl()) {
      return;
    }
    var oldState = this.currentCheckState;
    var newState = this.determineCheckState();
    if (oldState === newState) {
      return;
    }
    this.updateAriaChecked();
    var TRANSITION_STATE_UNCHECKED = strings$b.TRANSITION_STATE_UNCHECKED;
    var SELECTED = cssClasses$c.SELECTED;
    if (newState === TRANSITION_STATE_UNCHECKED) {
      this.adapter.removeClass(SELECTED);
    } else {
      this.adapter.addClass(SELECTED);
    }
    if (this.currentAnimationClass.length > 0) {
      clearTimeout(this.animEndLatchTimer);
      this.adapter.forceLayout();
      this.adapter.removeClass(this.currentAnimationClass);
    }
    this.currentAnimationClass = this.getTransitionAnimationClass(oldState, newState);
    this.currentCheckState = newState;
    if (this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0) {
      this.adapter.addClass(this.currentAnimationClass);
      this.enableAnimationEndHandler = true;
    }
  };
  MDCCheckboxFoundation2.prototype.determineCheckState = function() {
    var TRANSITION_STATE_INDETERMINATE = strings$b.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = strings$b.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings$b.TRANSITION_STATE_UNCHECKED;
    if (this.adapter.isIndeterminate()) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return this.adapter.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };
  MDCCheckboxFoundation2.prototype.getTransitionAnimationClass = function(oldState, newState) {
    var TRANSITION_STATE_INIT = strings$b.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = strings$b.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings$b.TRANSITION_STATE_UNCHECKED;
    var _a2 = MDCCheckboxFoundation2.cssClasses, ANIM_UNCHECKED_CHECKED = _a2.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a2.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a2.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a2.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a2.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a2.ANIM_INDETERMINATE_UNCHECKED;
    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return "";
        }
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      default:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };
  MDCCheckboxFoundation2.prototype.updateAriaChecked = function() {
    if (this.adapter.isIndeterminate()) {
      this.adapter.setNativeControlAttr(strings$b.ARIA_CHECKED_ATTR, strings$b.ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      this.adapter.removeNativeControlAttr(strings$b.ARIA_CHECKED_ATTR);
    }
  };
  return MDCCheckboxFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$b = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
};
var strings$a = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
};
var animationDimensionPercentages = {
  PRIMARY_HALF: 0.8367142,
  PRIMARY_FULL: 2.00611057,
  SECONDARY_QUARTER: 0.37651913,
  SECONDARY_HALF: 0.84386165,
  SECONDARY_FULL: 1.60277782
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLinearProgressFoundation = function(_super) {
  __extends$1(MDCLinearProgressFoundation2, _super);
  function MDCLinearProgressFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCLinearProgressFoundation2.defaultAdapter), adapter)) || this;
    _this.observer = null;
    return _this;
  }
  Object.defineProperty(MDCLinearProgressFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$b;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation2, "strings", {
    get: function() {
      return strings$a;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        attachResizeObserver: function() {
          return null;
        },
        forceLayout: function() {
          return void 0;
        },
        getWidth: function() {
          return 0;
        },
        hasClass: function() {
          return false;
        },
        setBufferBarStyle: function() {
          return null;
        },
        setPrimaryBarStyle: function() {
          return null;
        },
        setStyle: function() {
          return void 0;
        },
        removeAttribute: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        setAttribute: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCLinearProgressFoundation2.prototype.init = function() {
    var _this = this;
    this.determinate = !this.adapter.hasClass(cssClasses$b.INDETERMINATE_CLASS);
    this.adapter.addClass(cssClasses$b.ANIMATION_READY_CLASS);
    this.progress = 0;
    this.buffer = 1;
    this.observer = this.adapter.attachResizeObserver(function(entries) {
      var e_1, _a2;
      if (_this.determinate) {
        return;
      }
      try {
        for (var entries_1 = __values$1(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
          var entry = entries_1_1.value;
          if (entry.contentRect) {
            _this.calculateAndSetDimensions(entry.contentRect.width);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (entries_1_1 && !entries_1_1.done && (_a2 = entries_1.return))
            _a2.call(entries_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    });
    if (!this.determinate && this.observer) {
      this.calculateAndSetDimensions(this.adapter.getWidth());
    }
  };
  MDCLinearProgressFoundation2.prototype.setDeterminate = function(isDeterminate) {
    this.determinate = isDeterminate;
    if (this.determinate) {
      this.adapter.removeClass(cssClasses$b.INDETERMINATE_CLASS);
      this.adapter.setAttribute(strings$a.ARIA_VALUENOW, this.progress.toString());
      this.adapter.setAttribute(strings$a.ARIA_VALUEMAX, "1");
      this.adapter.setAttribute(strings$a.ARIA_VALUEMIN, "0");
      this.setPrimaryBarProgress(this.progress);
      this.setBufferBarProgress(this.buffer);
      return;
    }
    if (this.observer) {
      this.calculateAndSetDimensions(this.adapter.getWidth());
    }
    this.adapter.addClass(cssClasses$b.INDETERMINATE_CLASS);
    this.adapter.removeAttribute(strings$a.ARIA_VALUENOW);
    this.adapter.removeAttribute(strings$a.ARIA_VALUEMAX);
    this.adapter.removeAttribute(strings$a.ARIA_VALUEMIN);
    this.setPrimaryBarProgress(1);
    this.setBufferBarProgress(1);
  };
  MDCLinearProgressFoundation2.prototype.isDeterminate = function() {
    return this.determinate;
  };
  MDCLinearProgressFoundation2.prototype.setProgress = function(value) {
    this.progress = value;
    if (this.determinate) {
      this.setPrimaryBarProgress(value);
      this.adapter.setAttribute(strings$a.ARIA_VALUENOW, value.toString());
    }
  };
  MDCLinearProgressFoundation2.prototype.getProgress = function() {
    return this.progress;
  };
  MDCLinearProgressFoundation2.prototype.setBuffer = function(value) {
    this.buffer = value;
    if (this.determinate) {
      this.setBufferBarProgress(value);
    }
  };
  MDCLinearProgressFoundation2.prototype.getBuffer = function() {
    return this.buffer;
  };
  MDCLinearProgressFoundation2.prototype.open = function() {
    this.adapter.removeClass(cssClasses$b.CLOSED_CLASS);
    this.adapter.removeClass(cssClasses$b.CLOSED_ANIMATION_OFF_CLASS);
    this.adapter.removeAttribute(strings$a.ARIA_HIDDEN);
  };
  MDCLinearProgressFoundation2.prototype.close = function() {
    this.adapter.addClass(cssClasses$b.CLOSED_CLASS);
    this.adapter.setAttribute(strings$a.ARIA_HIDDEN, "true");
  };
  MDCLinearProgressFoundation2.prototype.isClosed = function() {
    return this.adapter.hasClass(cssClasses$b.CLOSED_CLASS);
  };
  MDCLinearProgressFoundation2.prototype.handleTransitionEnd = function() {
    if (this.adapter.hasClass(cssClasses$b.CLOSED_CLASS)) {
      this.adapter.addClass(cssClasses$b.CLOSED_ANIMATION_OFF_CLASS);
    }
  };
  MDCLinearProgressFoundation2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    if (this.observer) {
      this.observer.disconnect();
    }
  };
  MDCLinearProgressFoundation2.prototype.restartAnimation = function() {
    this.adapter.removeClass(cssClasses$b.ANIMATION_READY_CLASS);
    this.adapter.forceLayout();
    this.adapter.addClass(cssClasses$b.ANIMATION_READY_CLASS);
  };
  MDCLinearProgressFoundation2.prototype.setPrimaryBarProgress = function(progressValue) {
    var value = "scaleX(" + progressValue + ")";
    var transformProp = typeof window !== "undefined" ? getCorrectPropertyName(window, "transform") : "transform";
    this.adapter.setPrimaryBarStyle(transformProp, value);
  };
  MDCLinearProgressFoundation2.prototype.setBufferBarProgress = function(progressValue) {
    var value = progressValue * 100 + "%";
    this.adapter.setBufferBarStyle(strings$a.FLEX_BASIS, value);
  };
  MDCLinearProgressFoundation2.prototype.calculateAndSetDimensions = function(width) {
    var primaryHalf = width * animationDimensionPercentages.PRIMARY_HALF;
    var primaryFull = width * animationDimensionPercentages.PRIMARY_FULL;
    var secondaryQuarter = width * animationDimensionPercentages.SECONDARY_QUARTER;
    var secondaryHalf = width * animationDimensionPercentages.SECONDARY_HALF;
    var secondaryFull = width * animationDimensionPercentages.SECONDARY_FULL;
    this.adapter.setStyle("--mdc-linear-progress-primary-half", primaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -primaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-primary-full", primaryFull + "px");
    this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -primaryFull + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", secondaryQuarter + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -secondaryQuarter + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-half", secondaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -secondaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-full", secondaryFull + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -secondaryFull + "px");
    this.restartAnimation();
  };
  return MDCLinearProgressFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$a = {
  CELL: "mdc-data-table__cell",
  CELL_NUMERIC: "mdc-data-table__cell--numeric",
  CONTENT: "mdc-data-table__content",
  HEADER_CELL: "mdc-data-table__header-cell",
  HEADER_CELL_LABEL: "mdc-data-table__header-cell-label",
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  HEADER_CELL_WITH_SORT: "mdc-data-table__header-cell--with-sort",
  HEADER_CELL_WRAPPER: "mdc-data-table__header-cell-wrapper",
  HEADER_ROW: "mdc-data-table__header-row",
  HEADER_ROW_CHECKBOX: "mdc-data-table__header-row-checkbox",
  IN_PROGRESS: "mdc-data-table--in-progress",
  LINEAR_PROGRESS: "mdc-data-table__linear-progress",
  PAGINATION_ROWS_PER_PAGE_LABEL: "mdc-data-table__pagination-rows-per-page-label",
  PAGINATION_ROWS_PER_PAGE_SELECT: "mdc-data-table__pagination-rows-per-page-select",
  PROGRESS_INDICATOR: "mdc-data-table__progress-indicator",
  ROOT: "mdc-data-table",
  ROW: "mdc-data-table__row",
  ROW_CHECKBOX: "mdc-data-table__row-checkbox",
  ROW_SELECTED: "mdc-data-table__row--selected",
  SORT_ICON_BUTTON: "mdc-data-table__sort-icon-button",
  SORT_STATUS_LABEL: "mdc-data-table__sort-status-label",
  TABLE_CONTAINER: "mdc-data-table__table-container"
};
var attributes$1 = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
};
var dataAttributes = {
  COLUMN_ID: "data-column-id",
  ROW_ID: "data-row-id"
};
var selectors = {
  CONTENT: "." + cssClasses$a.CONTENT,
  HEADER_CELL: "." + cssClasses$a.HEADER_CELL,
  HEADER_CELL_WITH_SORT: "." + cssClasses$a.HEADER_CELL_WITH_SORT,
  HEADER_ROW: "." + cssClasses$a.HEADER_ROW,
  HEADER_ROW_CHECKBOX: "." + cssClasses$a.HEADER_ROW_CHECKBOX,
  PROGRESS_INDICATOR: "." + cssClasses$a.PROGRESS_INDICATOR,
  ROW: "." + cssClasses$a.ROW,
  ROW_CHECKBOX: "." + cssClasses$a.ROW_CHECKBOX,
  ROW_SELECTED: "." + cssClasses$a.ROW_SELECTED,
  SORT_ICON_BUTTON: "." + cssClasses$a.SORT_ICON_BUTTON,
  SORT_STATUS_LABEL: "." + cssClasses$a.SORT_STATUS_LABEL
};
var strings$9 = {
  ARIA_SELECTED: attributes$1.ARIA_SELECTED,
  ARIA_SORT: attributes$1.ARIA_SORT,
  DATA_ROW_ID_ATTR: dataAttributes.ROW_ID,
  HEADER_ROW_CHECKBOX_SELECTOR: selectors.HEADER_ROW_CHECKBOX,
  ROW_CHECKBOX_SELECTOR: selectors.ROW_CHECKBOX,
  ROW_SELECTED_SELECTOR: selectors.ROW_SELECTED,
  ROW_SELECTOR: selectors.ROW
};
var SortValue;
(function(SortValue2) {
  SortValue2["ASCENDING"] = "ascending";
  SortValue2["DESCENDING"] = "descending";
  SortValue2["NONE"] = "none";
  SortValue2["OTHER"] = "other";
})(SortValue || (SortValue = {}));
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCDataTableFoundation = function(_super) {
  __extends$1(MDCDataTableFoundation2, _super);
  function MDCDataTableFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCDataTableFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCDataTableFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        addClassAtRowIndex: function() {
          return void 0;
        },
        getAttributeByHeaderCellIndex: function() {
          return "";
        },
        getHeaderCellCount: function() {
          return 0;
        },
        getHeaderCellElements: function() {
          return [];
        },
        getRowCount: function() {
          return 0;
        },
        getRowElements: function() {
          return [];
        },
        getRowIdAtIndex: function() {
          return "";
        },
        getRowIndexByChildElement: function() {
          return 0;
        },
        getSelectedRowCount: function() {
          return 0;
        },
        getTableContainerHeight: function() {
          return 0;
        },
        getTableHeaderHeight: function() {
          return 0;
        },
        isCheckboxAtRowIndexChecked: function() {
          return false;
        },
        isHeaderRowCheckboxChecked: function() {
          return false;
        },
        isRowsSelectable: function() {
          return false;
        },
        notifyRowSelectionChanged: function() {
          return void 0;
        },
        notifySelectedAll: function() {
          return void 0;
        },
        notifySortAction: function() {
          return void 0;
        },
        notifyUnselectedAll: function() {
          return void 0;
        },
        notifyRowClick: function() {
          return void 0;
        },
        registerHeaderRowCheckbox: function() {
          return void 0;
        },
        registerRowCheckboxes: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        removeClassAtRowIndex: function() {
          return void 0;
        },
        removeClassNameByHeaderCellIndex: function() {
          return void 0;
        },
        setAttributeAtRowIndex: function() {
          return void 0;
        },
        setAttributeByHeaderCellIndex: function() {
          return void 0;
        },
        setClassNameByHeaderCellIndex: function() {
          return void 0;
        },
        setHeaderRowCheckboxChecked: function() {
          return void 0;
        },
        setHeaderRowCheckboxIndeterminate: function() {
          return void 0;
        },
        setProgressIndicatorStyles: function() {
          return void 0;
        },
        setRowCheckboxCheckedAtIndex: function() {
          return void 0;
        },
        setSortStatusLabelByHeaderCellIndex: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCDataTableFoundation2.prototype.layout = function() {
    if (this.adapter.isRowsSelectable()) {
      this.adapter.registerHeaderRowCheckbox();
      this.adapter.registerRowCheckboxes();
      this.setHeaderRowCheckboxState();
    }
  };
  MDCDataTableFoundation2.prototype.layoutAsync = function() {
    return __awaiter$4(this, void 0, void 0, function() {
      return __generator$1(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            if (!this.adapter.isRowsSelectable())
              return [3, 3];
            return [4, this.adapter.registerHeaderRowCheckbox()];
          case 1:
            _a2.sent();
            return [4, this.adapter.registerRowCheckboxes()];
          case 2:
            _a2.sent();
            this.setHeaderRowCheckboxState();
            _a2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  MDCDataTableFoundation2.prototype.getRows = function() {
    return this.adapter.getRowElements();
  };
  MDCDataTableFoundation2.prototype.getHeaderCells = function() {
    return this.adapter.getHeaderCellElements();
  };
  MDCDataTableFoundation2.prototype.setSelectedRowIds = function(rowIds) {
    for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
      var rowId = this.adapter.getRowIdAtIndex(rowIndex);
      var isSelected = false;
      if (rowId && rowIds.indexOf(rowId) >= 0) {
        isSelected = true;
      }
      this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
      this.selectRowAtIndex(rowIndex, isSelected);
    }
    this.setHeaderRowCheckboxState();
  };
  MDCDataTableFoundation2.prototype.getRowIds = function() {
    var rowIds = [];
    for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
      rowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
    }
    return rowIds;
  };
  MDCDataTableFoundation2.prototype.getSelectedRowIds = function() {
    var selectedRowIds = [];
    for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
      if (this.adapter.isCheckboxAtRowIndexChecked(rowIndex)) {
        selectedRowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
      }
    }
    return selectedRowIds;
  };
  MDCDataTableFoundation2.prototype.handleHeaderRowCheckboxChange = function() {
    var isHeaderChecked = this.adapter.isHeaderRowCheckboxChecked();
    for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
      this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
      this.selectRowAtIndex(rowIndex, isHeaderChecked);
    }
    if (isHeaderChecked) {
      this.adapter.notifySelectedAll();
    } else {
      this.adapter.notifyUnselectedAll();
    }
  };
  MDCDataTableFoundation2.prototype.handleRowCheckboxChange = function(event) {
    var rowIndex = this.adapter.getRowIndexByChildElement(event.target);
    if (rowIndex === -1) {
      return;
    }
    var selected = this.adapter.isCheckboxAtRowIndexChecked(rowIndex);
    this.selectRowAtIndex(rowIndex, selected);
    this.setHeaderRowCheckboxState();
    var rowId = this.adapter.getRowIdAtIndex(rowIndex);
    this.adapter.notifyRowSelectionChanged({ rowId, rowIndex, selected });
  };
  MDCDataTableFoundation2.prototype.handleSortAction = function(eventData) {
    var columnId = eventData.columnId, columnIndex = eventData.columnIndex, headerCell = eventData.headerCell;
    for (var index = 0; index < this.adapter.getHeaderCellCount(); index++) {
      if (index === columnIndex) {
        continue;
      }
      this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses$a.HEADER_CELL_SORTED);
      this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses$a.HEADER_CELL_SORTED_DESCENDING);
      this.adapter.setAttributeByHeaderCellIndex(index, strings$9.ARIA_SORT, SortValue.NONE);
      this.adapter.setSortStatusLabelByHeaderCellIndex(index, SortValue.NONE);
    }
    this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses$a.HEADER_CELL_SORTED);
    var currentSortValue = this.adapter.getAttributeByHeaderCellIndex(columnIndex, strings$9.ARIA_SORT);
    var sortValue = SortValue.NONE;
    if (currentSortValue === SortValue.ASCENDING) {
      this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses$a.HEADER_CELL_SORTED_DESCENDING);
      this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings$9.ARIA_SORT, SortValue.DESCENDING);
      sortValue = SortValue.DESCENDING;
    } else if (currentSortValue === SortValue.DESCENDING) {
      this.adapter.removeClassNameByHeaderCellIndex(columnIndex, cssClasses$a.HEADER_CELL_SORTED_DESCENDING);
      this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings$9.ARIA_SORT, SortValue.ASCENDING);
      sortValue = SortValue.ASCENDING;
    } else {
      this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings$9.ARIA_SORT, SortValue.ASCENDING);
      sortValue = SortValue.ASCENDING;
    }
    this.adapter.setSortStatusLabelByHeaderCellIndex(columnIndex, sortValue);
    this.adapter.notifySortAction({
      columnId,
      columnIndex,
      headerCell,
      sortValue
    });
  };
  MDCDataTableFoundation2.prototype.handleRowClick = function(_a2) {
    var rowId = _a2.rowId, row = _a2.row;
    this.adapter.notifyRowClick({
      rowId,
      row
    });
  };
  MDCDataTableFoundation2.prototype.showProgress = function() {
    var tableHeaderHeight = this.adapter.getTableHeaderHeight();
    var height = this.adapter.getTableContainerHeight() - tableHeaderHeight;
    var top = tableHeaderHeight;
    this.adapter.setProgressIndicatorStyles({
      height: height + "px",
      top: top + "px"
    });
    this.adapter.addClass(cssClasses$a.IN_PROGRESS);
  };
  MDCDataTableFoundation2.prototype.hideProgress = function() {
    this.adapter.removeClass(cssClasses$a.IN_PROGRESS);
  };
  MDCDataTableFoundation2.prototype.setHeaderRowCheckboxState = function() {
    if (this.adapter.getSelectedRowCount() === 0) {
      this.adapter.setHeaderRowCheckboxChecked(false);
      this.adapter.setHeaderRowCheckboxIndeterminate(false);
    } else if (this.adapter.getSelectedRowCount() === this.adapter.getRowCount()) {
      this.adapter.setHeaderRowCheckboxChecked(true);
      this.adapter.setHeaderRowCheckboxIndeterminate(false);
    } else {
      this.adapter.setHeaderRowCheckboxIndeterminate(true);
      this.adapter.setHeaderRowCheckboxChecked(false);
    }
  };
  MDCDataTableFoundation2.prototype.selectRowAtIndex = function(rowIndex, selected) {
    if (selected) {
      this.adapter.addClassAtRowIndex(rowIndex, cssClasses$a.ROW_SELECTED);
      this.adapter.setAttributeAtRowIndex(rowIndex, strings$9.ARIA_SELECTED, "true");
    } else {
      this.adapter.removeClassAtRowIndex(rowIndex, cssClasses$a.ROW_SELECTED);
      this.adapter.setAttributeAtRowIndex(rowIndex, strings$9.ARIA_SELECTED, "false");
    }
  };
  return MDCDataTableFoundation2;
}(MDCFoundation);
function create_if_block$a(ctx) {
  let div1;
  let div0;
  let t;
  let slot;
  let div1_style_value;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t = space();
      slot = element("slot");
      attr(div0, "class", "mdc-data-table__scrim");
      attr(slot, "name", "progress");
      attr(div1, "class", "mdc-data-table__progress-indicator");
      attr(div1, "style", div1_style_value = Object.entries(ctx[13]).map(func$a).join(" "));
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div1, t);
      append(div1, slot);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8192 && div1_style_value !== (div1_style_value = Object.entries(ctx2[13]).map(func$a).join(" "))) {
        attr(div1, "style", div1_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment$v(ctx) {
  let div1;
  let div0;
  let table;
  let slot0;
  let table_class_value;
  let useActions_action;
  let div0_class_value;
  let useActions_action_1;
  let t0;
  let t1;
  let slot1;
  let div1_class_value;
  let useActions_action_2;
  let mounted;
  let dispose;
  let table_levels = [
    {
      class: table_class_value = classMap({
        [ctx[6]]: true,
        "mdc-data-table__table": true
      })
    },
    prefixFilter(ctx[22], "table$")
  ];
  let table_data = {};
  for (let i = 0; i < table_levels.length; i += 1) {
    table_data = assign(table_data, table_levels[i]);
  }
  let div0_levels = [
    {
      class: div0_class_value = classMap({
        [ctx[4]]: true,
        "mdc-data-table__table-container": true
      })
    },
    prefixFilter(ctx[22], "container$")
  ];
  let div0_data = {};
  for (let i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }
  let if_block = ctx[21].progress && create_if_block$a(ctx);
  let div1_levels = [
    {
      class: div1_class_value = classMap({
        [ctx[1]]: true,
        "mdc-data-table": true,
        "mdc-data-table--sticky-header": ctx[2],
        ...ctx[12]
      })
    },
    exclude(ctx[22], ["container$", "table$"])
  ];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      table = element("table");
      slot0 = element("slot");
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      slot1 = element("slot");
      this.c = noop$1;
      set_attributes(table, table_data);
      set_attributes(div0, div0_data);
      attr(slot1, "name", "paginate");
      set_attributes(div1, div1_data);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, table);
      append(table, slot0);
      ctx[32](div0);
      append(div1, t0);
      if (if_block)
        if_block.m(div1, null);
      append(div1, t1);
      append(div1, slot1);
      ctx[33](div1);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, table, ctx[5])),
          action_destroyer(useActions_action_1 = useActions.call(null, div0, ctx[3])),
          action_destroyer(useActions_action_2 = useActions.call(null, div1, ctx[0])),
          action_destroyer(ctx[15].call(null, div1)),
          listen(div1, "SMUICheckbox:mount", ctx[34]),
          listen(div1, "SMUIDataTableHeader:mount", ctx[35]),
          listen(div1, "SMUIDataTableHeader:unmount", ctx[36]),
          listen(div1, "SMUIDataTableBody:mount", ctx[37]),
          listen(div1, "SMUIDataTableBody:unmount", ctx[38]),
          listen(div1, "SMUIDataTableHeaderCheckbox:change", ctx[39]),
          listen(div1, "SMUIDataTableHeader:click", ctx[19]),
          listen(div1, "SMUIDataTableRow:click", ctx[20]),
          listen(div1, "SMUIDataTableBodyCheckbox:change", ctx[40])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(table, table_data = get_spread_update(table_levels, [
        dirty[0] & 64 && table_class_value !== (table_class_value = classMap({
          [ctx2[6]]: true,
          "mdc-data-table__table": true
        })) && { class: table_class_value },
        dirty[0] & 4194304 && prefixFilter(ctx2[22], "table$")
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 32)
        useActions_action.update.call(null, ctx2[5]);
      set_attributes(div0, div0_data = get_spread_update(div0_levels, [
        dirty[0] & 16 && div0_class_value !== (div0_class_value = classMap({
          [ctx2[4]]: true,
          "mdc-data-table__table-container": true
        })) && { class: div0_class_value },
        dirty[0] & 4194304 && prefixFilter(ctx2[22], "container$")
      ]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & 8)
        useActions_action_1.update.call(null, ctx2[3]);
      if (ctx2[21].progress) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$a(ctx2);
          if_block.c();
          if_block.m(div1, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [
        dirty[0] & 4102 && div1_class_value !== (div1_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-data-table": true,
          "mdc-data-table--sticky-header": ctx2[2],
          ...ctx2[12]
        })) && { class: div1_class_value },
        dirty[0] & 4194304 && exclude(ctx2[22], ["container$", "table$"])
      ]));
      if (useActions_action_2 && is_function(useActions_action_2.update) && dirty[0] & 1)
        useActions_action_2.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[32](null);
      if (if_block)
        if_block.d();
      ctx[33](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func$a = ([name, value]) => `${name}: ${value};`;
function instance_1$d($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "layout",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $progressClosed;
  let $sortDirectionStore;
  let $sortStore;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const { closest: closest2 } = ponyfill;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { sortable = false } = $$props;
  let { sort = null } = $$props;
  let { sortDirection = "ascending" } = $$props;
  let { sortAscendingAriaLabel = "sorted, ascending" } = $$props;
  let { sortDescendingAriaLabel = "sorted, descending" } = $$props;
  let { container$use = [] } = $$props;
  let { container$class = "" } = $$props;
  let { table$use = [] } = $$props;
  let { table$class = "" } = $$props;
  let element2;
  let instance2;
  let container;
  let header = void 0;
  let body = void 0;
  let internalClasses = {};
  let progressIndicatorStyles = { height: "auto", top: "initial" };
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let postMount = false;
  let progressClosed = writable(false);
  component_subscribe($$self, progressClosed, (value) => $$invalidate(31, $progressClosed = value));
  let sortStore = writable(sort);
  component_subscribe($$self, sortStore, (value) => $$invalidate(43, $sortStore = value));
  let sortDirectionStore = writable(sortDirection);
  component_subscribe($$self, sortDirectionStore, (value) => $$invalidate(42, $sortDirectionStore = value));
  setContext("SMUI:checkbox:context", "data-table");
  setContext("SMUI:linear-progress:context", "data-table");
  setContext("SMUI:linear-progress:closed", progressClosed);
  setContext("SMUI:data-table:sortable", sortable);
  setContext("SMUI:data-table:sort", sortStore);
  setContext("SMUI:data-table:sortDirection", sortDirectionStore);
  setContext("SMUI:data-table:sortAscendingAriaLabel", sortAscendingAriaLabel);
  setContext("SMUI:data-table:sortDescendingAriaLabel", sortDescendingAriaLabel);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousProgressClosed = void 0;
  onMount(() => {
    $$invalidate(7, instance2 = new MDCDataTableFoundation({
      addClass,
      removeClass,
      getHeaderCellElements: () => {
        var _a2;
        return (_a2 = header === null || header === void 0 ? void 0 : header.cells.map((accessor) => accessor.element)) !== null && _a2 !== void 0 ? _a2 : [];
      },
      getHeaderCellCount: () => {
        var _a2;
        return (_a2 = header === null || header === void 0 ? void 0 : header.cells.length) !== null && _a2 !== void 0 ? _a2 : 0;
      },
      getAttributeByHeaderCellIndex: (index, name) => {
        var _a2;
        return (_a2 = header === null || header === void 0 ? void 0 : header.orderedCells[index].getAttr(name)) !== null && _a2 !== void 0 ? _a2 : null;
      },
      setAttributeByHeaderCellIndex: (index, name, value) => {
        header === null || header === void 0 ? void 0 : header.orderedCells[index].addAttr(name, value);
      },
      setClassNameByHeaderCellIndex: (index, className2) => {
        header === null || header === void 0 ? void 0 : header.orderedCells[index].addClass(className2);
      },
      removeClassNameByHeaderCellIndex: (index, className2) => {
        header === null || header === void 0 ? void 0 : header.orderedCells[index].removeClass(className2);
      },
      notifySortAction: (data2) => {
        $$invalidate(23, sort = data2.columnId);
        $$invalidate(24, sortDirection = data2.sortValue);
        dispatch(getElement(), "SMUIDataTable:sorted", data2, void 0, true);
      },
      getTableContainerHeight: () => container.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const tableHeader = getElement().querySelector(".mdc-data-table__header-row");
        if (!tableHeader) {
          throw new Error("MDCDataTable: Table header element not found.");
        }
        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (styles) => {
        $$invalidate(13, progressIndicatorStyles = styles);
      },
      addClassAtRowIndex: (rowIndex, className2) => {
        body === null || body === void 0 ? void 0 : body.orderedRows[rowIndex].addClass(className2);
      },
      getRowCount: () => {
        var _a2;
        return (_a2 = body === null || body === void 0 ? void 0 : body.rows.length) !== null && _a2 !== void 0 ? _a2 : 0;
      },
      getRowElements: () => {
        var _a2;
        return (_a2 = body === null || body === void 0 ? void 0 : body.rows.map((accessor) => accessor.element)) !== null && _a2 !== void 0 ? _a2 : [];
      },
      getRowIdAtIndex: (rowIndex) => {
        var _a2;
        return (_a2 = body === null || body === void 0 ? void 0 : body.orderedRows[rowIndex].rowId) !== null && _a2 !== void 0 ? _a2 : null;
      },
      getRowIndexByChildElement: (el) => {
        var _a2;
        return (_a2 = body === null || body === void 0 ? void 0 : body.orderedRows.map((accessor) => accessor.element).indexOf(closest2(el, ".mdc-data-table__row"))) !== null && _a2 !== void 0 ? _a2 : -1;
      },
      getSelectedRowCount: () => {
        var _a2;
        return (_a2 = body === null || body === void 0 ? void 0 : body.rows.filter((accessor) => accessor.selected).length) !== null && _a2 !== void 0 ? _a2 : 0;
      },
      isCheckboxAtRowIndexChecked: (rowIndex) => {
        const checkbox = body === null || body === void 0 ? void 0 : body.orderedRows[rowIndex].checkbox;
        if (checkbox) {
          return checkbox.checked;
        }
        return false;
      },
      isHeaderRowCheckboxChecked: () => {
        const checkbox = header === null || header === void 0 ? void 0 : header.checkbox;
        if (checkbox) {
          return checkbox.checked;
        }
        return false;
      },
      isRowsSelectable: () => !!getElement().querySelector(".mdc-data-table__row-checkbox") || !!getElement().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (data2) => {
        const row = body === null || body === void 0 ? void 0 : body.orderedRows[data2.rowIndex];
        if (row) {
          dispatch(getElement(), "SMUIDataTable:rowSelectionChanged", {
            row: row.element,
            rowId: row.rowId,
            rowIndex: data2.rowIndex,
            selected: data2.selected
          }, void 0, true);
        }
      },
      notifySelectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(getElement(), "SMUIDataTable:selectedAll", void 0, void 0, true);
      },
      notifyUnselectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(getElement(), "SMUIDataTable:unselectedAll", void 0, void 0, true);
      },
      notifyRowClick: (detail) => {
        dispatch(getElement(), "SMUIDataTable:rowClick", detail, void 0, true);
      },
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (rowIndex, className2) => {
        body === null || body === void 0 ? void 0 : body.orderedRows[rowIndex].removeClass(className2);
      },
      setAttributeAtRowIndex: (rowIndex, name, value) => {
        body === null || body === void 0 ? void 0 : body.orderedRows[rowIndex].addAttr(name, value);
      },
      setHeaderRowCheckboxChecked: (checked) => {
        const checkbox = header === null || header === void 0 ? void 0 : header.checkbox;
        if (checkbox) {
          checkbox.checked = checked;
        }
      },
      setHeaderRowCheckboxIndeterminate,
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
        const checkbox = body === null || body === void 0 ? void 0 : body.orderedRows[rowIndex].checkbox;
        if (checkbox) {
          checkbox.checked = checked;
        }
      },
      setSortStatusLabelByHeaderCellIndex: (_columnIndex, _sortValue) => {
      }
    }));
    instance2.init();
    instance2.layout();
    $$invalidate(14, postMount = true);
    return () => {
      instance2.destroy();
    };
  });
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(12, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(12, internalClasses[className2] = false, internalClasses);
    }
  }
  function setHeaderRowCheckboxIndeterminate(indeterminate) {
    const checkbox = header === null || header === void 0 ? void 0 : header.checkbox;
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  }
  function handleHeaderRowClick(event) {
    if (!instance2 || !event.detail.target) {
      return;
    }
    const headerCell = closest2(event.detail.target, ".mdc-data-table__header-cell--with-sort");
    if (headerCell) {
      handleSortAction(headerCell);
    }
  }
  function handleRowClick(event) {
    if (!instance2 || !event.detail.target) {
      return;
    }
    const row = closest2(event.detail.target, ".mdc-data-table__row");
    if (row && instance2) {
      instance2.handleRowClick({ rowId: event.detail.rowId, row });
    }
  }
  function handleSortAction(headerCell) {
    var _a2, _b2;
    const orderedCells = (_a2 = header === null || header === void 0 ? void 0 : header.orderedCells) !== null && _a2 !== void 0 ? _a2 : [];
    const columnIndex = orderedCells.map((accessor) => accessor.element).indexOf(headerCell);
    if (columnIndex === -1) {
      return;
    }
    const columnId = (_b2 = orderedCells[columnIndex].columnId) !== null && _b2 !== void 0 ? _b2 : null;
    instance2.handleSortAction({ columnId, columnIndex, headerCell });
  }
  function layout() {
    return instance2.layout();
  }
  function getElement() {
    return element2;
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(9, container);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(8, element2);
    });
  }
  const SMUICheckbox_mount_handler = () => instance2 && postMount && instance2.layout();
  const SMUIDataTableHeader_mount_handler = (event) => $$invalidate(10, header = event.detail);
  const SMUIDataTableHeader_unmount_handler = () => $$invalidate(10, header = void 0);
  const SMUIDataTableBody_mount_handler = (event) => $$invalidate(11, body = event.detail);
  const SMUIDataTableBody_unmount_handler = () => $$invalidate(11, body = void 0);
  const SMUIDataTableHeaderCheckbox_change_handler = () => instance2 && instance2.handleHeaderRowCheckboxChange();
  const SMUIDataTableBodyCheckbox_change_handler = (event) => instance2 && instance2.handleRowCheckboxChange(event);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(22, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("stickyHeader" in $$new_props)
      $$invalidate(2, stickyHeader = $$new_props.stickyHeader);
    if ("sortable" in $$new_props)
      $$invalidate(25, sortable = $$new_props.sortable);
    if ("sort" in $$new_props)
      $$invalidate(23, sort = $$new_props.sort);
    if ("sortDirection" in $$new_props)
      $$invalidate(24, sortDirection = $$new_props.sortDirection);
    if ("sortAscendingAriaLabel" in $$new_props)
      $$invalidate(26, sortAscendingAriaLabel = $$new_props.sortAscendingAriaLabel);
    if ("sortDescendingAriaLabel" in $$new_props)
      $$invalidate(27, sortDescendingAriaLabel = $$new_props.sortDescendingAriaLabel);
    if ("container$use" in $$new_props)
      $$invalidate(3, container$use = $$new_props.container$use);
    if ("container$class" in $$new_props)
      $$invalidate(4, container$class = $$new_props.container$class);
    if ("table$use" in $$new_props)
      $$invalidate(5, table$use = $$new_props.table$use);
    if ("table$class" in $$new_props)
      $$invalidate(6, table$class = $$new_props.table$class);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 8388608) {
      set_store_value(sortStore, $sortStore = sort, $sortStore);
    }
    if ($$self.$$.dirty[0] & 16777216) {
      set_store_value(sortDirectionStore, $sortDirectionStore = sortDirection, $sortDirectionStore);
    }
    if ($$self.$$.dirty[0] & 1073741952 | $$self.$$.dirty[1] & 1) {
      if ($$slots.progress && instance2 && previousProgressClosed !== $progressClosed) {
        $$invalidate(30, previousProgressClosed = $progressClosed);
        if ($progressClosed) {
          instance2.hideProgress();
        } else {
          instance2.showProgress();
        }
      }
    }
  };
  return [
    use2,
    className,
    stickyHeader,
    container$use,
    container$class,
    table$use,
    table$class,
    instance2,
    element2,
    container,
    header,
    body,
    internalClasses,
    progressIndicatorStyles,
    postMount,
    forwardEvents,
    progressClosed,
    sortStore,
    sortDirectionStore,
    handleHeaderRowClick,
    handleRowClick,
    $$slots,
    $$restProps,
    sort,
    sortDirection,
    sortable,
    sortAscendingAriaLabel,
    sortDescendingAriaLabel,
    layout,
    getElement,
    previousProgressClosed,
    $progressClosed,
    div0_binding,
    div1_binding,
    SMUICheckbox_mount_handler,
    SMUIDataTableHeader_mount_handler,
    SMUIDataTableHeader_unmount_handler,
    SMUIDataTableBody_mount_handler,
    SMUIDataTableBody_unmount_handler,
    SMUIDataTableHeaderCheckbox_change_handler,
    SMUIDataTableBodyCheckbox_change_handler
  ];
}
class DataTable extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: {
        ...attribute_to_object(this.attributes),
        $$slots: get_custom_elements_slots(this)
      },
      customElement: true
    }, instance_1$d, create_fragment$v, safe_not_equal, {
      use: 0,
      class: 1,
      stickyHeader: 2,
      sortable: 25,
      sort: 23,
      sortDirection: 24,
      sortAscendingAriaLabel: 26,
      sortDescendingAriaLabel: 27,
      container$use: 3,
      container$class: 4,
      table$use: 5,
      table$class: 6,
      layout: 28,
      getElement: 29
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "stickyHeader",
      "sortable",
      "sort",
      "sortDirection",
      "sortAscendingAriaLabel",
      "sortDescendingAriaLabel",
      "container$use",
      "container$class",
      "table$use",
      "table$class",
      "layout",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get stickyHeader() {
    return this.$$.ctx[2];
  }
  set stickyHeader(stickyHeader) {
    this.$$set({ stickyHeader });
    flush();
  }
  get sortable() {
    return this.$$.ctx[25];
  }
  set sortable(sortable) {
    this.$$set({ sortable });
    flush();
  }
  get sort() {
    return this.$$.ctx[23];
  }
  set sort(sort) {
    this.$$set({ sort });
    flush();
  }
  get sortDirection() {
    return this.$$.ctx[24];
  }
  set sortDirection(sortDirection) {
    this.$$set({ sortDirection });
    flush();
  }
  get sortAscendingAriaLabel() {
    return this.$$.ctx[26];
  }
  set sortAscendingAriaLabel(sortAscendingAriaLabel) {
    this.$$set({ sortAscendingAriaLabel });
    flush();
  }
  get sortDescendingAriaLabel() {
    return this.$$.ctx[27];
  }
  set sortDescendingAriaLabel(sortDescendingAriaLabel) {
    this.$$set({ sortDescendingAriaLabel });
    flush();
  }
  get container$use() {
    return this.$$.ctx[3];
  }
  set container$use(container$use) {
    this.$$set({ container$use });
    flush();
  }
  get container$class() {
    return this.$$.ctx[4];
  }
  set container$class(container$class) {
    this.$$set({ container$class });
    flush();
  }
  get table$use() {
    return this.$$.ctx[5];
  }
  set table$use(table$use) {
    this.$$set({ table$use });
    flush();
  }
  get table$class() {
    return this.$$.ctx[6];
  }
  set table$class(table$class) {
    this.$$set({ table$class });
    flush();
  }
  get layout() {
    return this.$$.ctx[28];
  }
  get getElement() {
    return this.$$.ctx[29];
  }
}
function create_fragment$u(ctx) {
  let thead;
  let slot;
  let useActions_action;
  let mounted;
  let dispose;
  let thead_levels = [ctx[6]];
  let thead_data = {};
  for (let i = 0; i < thead_levels.length; i += 1) {
    thead_data = assign(thead_data, thead_levels[i]);
  }
  return {
    c() {
      thead = element("thead");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(thead, thead_data);
    },
    m(target, anchor) {
      insert(target, thead, anchor);
      append(thead, slot);
      ctx[8](thead);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, thead, ctx[0])),
          action_destroyer(ctx[3].call(null, thead)),
          listen(thead, "SMUICheckbox:mount", ctx[9]),
          listen(thead, "SMUICheckbox:unmount", ctx[10]),
          listen(thead, "SMUIDataTableCell:mount", ctx[4]),
          listen(thead, "SMUIDataTableCell:unmount", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(thead, thead_data = get_spread_update(thead_levels, [dirty & 64 && ctx2[6]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(thead);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$h($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let element2;
  let checkbox = void 0;
  let cells = [];
  const cellAccessorMap = /* @__PURE__ */ new WeakMap();
  setContext("SMUI:data-table:row:header", true);
  onMount(() => {
    const accessor = {
      get cells() {
        return cells;
      },
      get orderedCells() {
        return getOrderedCells();
      },
      get checkbox() {
        return checkbox;
      }
    };
    dispatch(getElement(), "SMUIDataTableHeader:mount", accessor);
    return () => {
      dispatch(getElement(), "SMUIDataTableHeader:unmount", accessor);
    };
  });
  function handleCellMount(event) {
    cells.push(event.detail);
    cellAccessorMap.set(event.detail.element, event.detail);
    event.stopPropagation();
  }
  function handleCellUnmount(event) {
    const idx = cells.indexOf(event.detail);
    if (idx !== -1) {
      cells.splice(idx, 1);
      cells = cells;
    }
    cellAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }
  function getOrderedCells() {
    return [...getElement().querySelectorAll(".mdc-data-table__header-cell")].map((element3) => cellAccessorMap.get(element3)).filter((accessor) => accessor && accessor._smui_data_table_header_cell_accessor);
  }
  function getElement() {
    return element2;
  }
  function thead_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  const SMUICheckbox_mount_handler = (event) => $$invalidate(2, checkbox = event.detail);
  const SMUICheckbox_unmount_handler = () => $$invalidate(2, checkbox = void 0);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
  };
  return [
    use2,
    element2,
    checkbox,
    forwardEvents,
    handleCellMount,
    handleCellUnmount,
    $$restProps,
    getElement,
    thead_binding,
    SMUICheckbox_mount_handler,
    SMUICheckbox_unmount_handler
  ];
}
class Head$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$h, create_fragment$u, safe_not_equal, { use: 0, getElement: 7 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function create_fragment$t(ctx) {
  let tbody;
  let slot;
  let tbody_class_value;
  let useActions_action;
  let mounted;
  let dispose;
  let tbody_levels = [
    {
      class: tbody_class_value = classMap({
        [ctx[1]]: true,
        "mdc-data-table__content": true
      })
    },
    ctx[6]
  ];
  let tbody_data = {};
  for (let i = 0; i < tbody_levels.length; i += 1) {
    tbody_data = assign(tbody_data, tbody_levels[i]);
  }
  return {
    c() {
      tbody = element("tbody");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(tbody, tbody_data);
    },
    m(target, anchor) {
      insert(target, tbody, anchor);
      append(tbody, slot);
      ctx[8](tbody);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, tbody, ctx[0])),
          action_destroyer(ctx[3].call(null, tbody)),
          listen(tbody, "SMUIDataTableRow:mount", ctx[4]),
          listen(tbody, "SMUIDataTableRow:unmount", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(tbody, tbody_data = get_spread_update(tbody_levels, [
        dirty & 2 && tbody_class_value !== (tbody_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-data-table__content": true
        })) && { class: tbody_class_value },
        dirty & 64 && ctx2[6]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(tbody);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let element2;
  let rows = [];
  const rowAccessorMap = /* @__PURE__ */ new WeakMap();
  setContext("SMUI:data-table:row:header", false);
  onMount(() => {
    const accessor = {
      get rows() {
        return rows;
      },
      get orderedRows() {
        return getOrderedRows();
      }
    };
    dispatch(getElement(), "SMUIDataTableBody:mount", accessor);
    return () => {
      dispatch(getElement(), "SMUIDataTableBody:unmount", accessor);
    };
  });
  function handleRowMount(event) {
    rows.push(event.detail);
    rowAccessorMap.set(event.detail.element, event.detail);
    event.stopPropagation();
  }
  function handleRowUnmount(event) {
    const idx = rows.indexOf(event.detail);
    if (idx !== -1) {
      rows.splice(idx, 1);
      rows = rows;
    }
    rowAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }
  function getOrderedRows() {
    return [...getElement().querySelectorAll(".mdc-data-table__row")].map((element3) => rowAccessorMap.get(element3)).filter((accessor) => accessor && accessor._smui_data_table_row_accessor);
  }
  function getElement() {
    return element2;
  }
  function tbody_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
  };
  return [
    use2,
    className,
    element2,
    forwardEvents,
    handleRowMount,
    handleRowUnmount,
    $$restProps,
    getElement,
    tbody_binding
  ];
}
class Body$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$g, create_fragment$t, safe_not_equal, { use: 0, class: 1, getElement: 7 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function create_fragment$s(ctx) {
  let tr;
  let slot;
  let tr_class_value;
  let tr_aria_selected_value;
  let useActions_action;
  let mounted;
  let dispose;
  let tr_levels = [
    {
      class: tr_class_value = classMap({
        [ctx[1]]: true,
        "mdc-data-table__header-row": ctx[7],
        "mdc-data-table__row": !ctx[7],
        "mdc-data-table__row--selected": !ctx[7] && ctx[3] && ctx[3].checked,
        ...ctx[4]
      })
    },
    {
      "aria-selected": tr_aria_selected_value = ctx[3] ? ctx[3].checked ? "true" : "false" : void 0
    },
    ctx[5],
    ctx[10]
  ];
  let tr_data = {};
  for (let i = 0; i < tr_levels.length; i += 1) {
    tr_data = assign(tr_data, tr_levels[i]);
  }
  return {
    c() {
      tr = element("tr");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(tr, tr_data);
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, slot);
      ctx[13](tr);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, tr, ctx[0])),
          action_destroyer(ctx[6].call(null, tr)),
          listen(tr, "click", ctx[14]),
          listen(tr, "SMUICheckbox:mount", ctx[15]),
          listen(tr, "SMUICheckbox:unmount", ctx[16])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(tr, tr_data = get_spread_update(tr_levels, [
        dirty & 26 && tr_class_value !== (tr_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-data-table__header-row": ctx2[7],
          "mdc-data-table__row": !ctx2[7],
          "mdc-data-table__row--selected": !ctx2[7] && ctx2[3] && ctx2[3].checked,
          ...ctx2[4]
        })) && { class: tr_class_value },
        dirty & 8 && tr_aria_selected_value !== (tr_aria_selected_value = ctx2[3] ? ctx2[3].checked ? "true" : "false" : void 0) && { "aria-selected": tr_aria_selected_value },
        dirty & 32 && ctx2[5],
        dirty & 1024 && ctx2[10]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(tr);
      ctx[13](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
let counter$6 = 0;
function instance$f($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "rowId", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { rowId = "SMUI-data-table-row-" + counter$6++ } = $$props;
  let element2;
  let checkbox = void 0;
  let internalClasses = {};
  let internalAttrs = {};
  let header = getContext("SMUI:data-table:row:header");
  onMount(() => {
    const accessor = header ? {
      _smui_data_table_row_accessor: false,
      get element() {
        return getElement();
      },
      get checkbox() {
        return checkbox;
      },
      get rowId() {
        return void 0;
      },
      get selected() {
        var _a2;
        return (_a2 = checkbox && checkbox.checked) !== null && _a2 !== void 0 ? _a2 : false;
      },
      addClass,
      removeClass,
      getAttr,
      addAttr
    } : {
      _smui_data_table_row_accessor: true,
      get element() {
        return getElement();
      },
      get checkbox() {
        return checkbox;
      },
      get rowId() {
        return rowId;
      },
      get selected() {
        var _a2;
        return (_a2 = checkbox && checkbox.checked) !== null && _a2 !== void 0 ? _a2 : false;
      },
      addClass,
      removeClass,
      getAttr,
      addAttr
    };
    dispatch(getElement(), "SMUIDataTableRow:mount", accessor);
    return () => {
      dispatch(getElement(), "SMUIDataTableRow:unmount", accessor);
    };
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(4, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(4, internalClasses[className2] = false, internalClasses);
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(5, internalAttrs[name] = value, internalAttrs);
    }
  }
  function notifyHeaderClick(event) {
    dispatch(getElement(), "SMUIDataTableHeader:click", event);
  }
  function notifyRowClick(event) {
    dispatch(getElement(), "SMUIDataTableRow:click", { rowId, target: event.target });
  }
  function getElement() {
    return element2;
  }
  function tr_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  const click_handler = (event) => header ? notifyHeaderClick(event) : notifyRowClick(event);
  const SMUICheckbox_mount_handler = (event) => $$invalidate(3, checkbox = event.detail);
  const SMUICheckbox_unmount_handler = () => $$invalidate(3, checkbox = void 0);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("rowId" in $$new_props)
      $$invalidate(11, rowId = $$new_props.rowId);
  };
  return [
    use2,
    className,
    element2,
    checkbox,
    internalClasses,
    internalAttrs,
    forwardEvents,
    header,
    notifyHeaderClick,
    notifyRowClick,
    $$restProps,
    rowId,
    getElement,
    tr_binding,
    click_handler,
    SMUICheckbox_mount_handler,
    SMUICheckbox_unmount_handler
  ];
}
class Row$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$f, create_fragment$s, safe_not_equal, {
      use: 0,
      class: 1,
      rowId: 11,
      getElement: 12
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "rowId", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get rowId() {
    return this.$$.ctx[11];
  }
  set rowId(rowId) {
    this.$$set({ rowId });
    flush();
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
function create_else_block_1$1(ctx) {
  let td;
  let slot;
  let td_class_value;
  let useActions_action;
  let mounted;
  let dispose;
  let td_levels = [
    {
      class: td_class_value = classMap({
        [ctx[1]]: true,
        "mdc-data-table__cell": true,
        "mdc-data-table__cell--numeric": ctx[2],
        "mdc-data-table__cell--checkbox": ctx[3],
        ...ctx[7]
      })
    },
    ctx[8],
    ctx[19]
  ];
  let td_data = {};
  for (let i = 0; i < td_levels.length; i += 1) {
    td_data = assign(td_data, td_levels[i]);
  }
  return {
    c() {
      td = element("td");
      slot = element("slot");
      set_attributes(td, td_data);
    },
    m(target, anchor) {
      insert(target, td, anchor);
      append(td, slot);
      ctx[23](td);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, td, ctx[0])),
          action_destroyer(ctx[11].call(null, td)),
          listen(td, "change", ctx[24])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(td, td_data = get_spread_update(td_levels, [
        dirty & 142 && td_class_value !== (td_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-data-table__cell": true,
          "mdc-data-table__cell--numeric": ctx2[2],
          "mdc-data-table__cell--checkbox": ctx2[3],
          ...ctx2[7]
        })) && { class: td_class_value },
        dirty & 256 && ctx2[8],
        dirty & 524288 && ctx2[19]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(td);
      ctx[23](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$9(ctx) {
  let th;
  let th_class_value;
  let th_aria_sort_value;
  let useActions_action;
  let mounted;
  let dispose;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[5])
      return create_if_block_1$3;
    return create_else_block$5;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  let th_levels = [
    {
      class: th_class_value = classMap({
        [ctx[1]]: true,
        "mdc-data-table__header-cell": true,
        "mdc-data-table__header-cell--numeric": ctx[2],
        "mdc-data-table__header-cell--checkbox": ctx[3],
        "mdc-data-table__header-cell--with-sort": ctx[5],
        "mdc-data-table__header-cell--sorted": ctx[5] && ctx[9] === ctx[4],
        ...ctx[7]
      })
    },
    { role: "columnheader" },
    { scope: "col" },
    { "data-column-id": ctx[4] },
    {
      "aria-sort": th_aria_sort_value = ctx[5] ? ctx[9] === ctx[4] ? ctx[10] : "none" : void 0
    },
    ctx[8],
    ctx[19]
  ];
  let th_data = {};
  for (let i = 0; i < th_levels.length; i += 1) {
    th_data = assign(th_data, th_levels[i]);
  }
  return {
    c() {
      th = element("th");
      if_block.c();
      set_attributes(th, th_data);
    },
    m(target, anchor) {
      insert(target, th, anchor);
      if_block.m(th, null);
      ctx[21](th);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, th, ctx[0])),
          action_destroyer(ctx[11].call(null, th)),
          listen(th, "change", ctx[22])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(th, null);
        }
      }
      set_attributes(th, th_data = get_spread_update(th_levels, [
        dirty & 702 && th_class_value !== (th_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-data-table__header-cell": true,
          "mdc-data-table__header-cell--numeric": ctx2[2],
          "mdc-data-table__header-cell--checkbox": ctx2[3],
          "mdc-data-table__header-cell--with-sort": ctx2[5],
          "mdc-data-table__header-cell--sorted": ctx2[5] && ctx2[9] === ctx2[4],
          ...ctx2[7]
        })) && { class: th_class_value },
        { role: "columnheader" },
        { scope: "col" },
        dirty & 16 && { "data-column-id": ctx2[4] },
        dirty & 1584 && th_aria_sort_value !== (th_aria_sort_value = ctx2[5] ? ctx2[9] === ctx2[4] ? ctx2[10] : "none" : void 0) && { "aria-sort": th_aria_sort_value },
        dirty & 256 && ctx2[8],
        dirty & 524288 && ctx2[19]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(th);
      if_block.d();
      ctx[21](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_else_block$5(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_if_block_1$3(ctx) {
  let div1;
  let slot;
  let t0;
  let div0;
  let t1_value = (ctx[9] === ctx[4] ? ctx[10] === "ascending" ? ctx[15] : ctx[16] : "") + "";
  let t1;
  let div0_id_value;
  return {
    c() {
      div1 = element("div");
      slot = element("slot");
      t0 = space();
      div0 = element("div");
      t1 = text(t1_value);
      attr(div0, "class", "mdc-data-table__sort-status-label");
      attr(div0, "aria-hidden", "true");
      attr(div0, "id", div0_id_value = ctx[4] + "-status-label");
      attr(div1, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, slot);
      append(div1, t0);
      append(div1, div0);
      append(div0, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1552 && t1_value !== (t1_value = (ctx2[9] === ctx2[4] ? ctx2[10] === "ascending" ? ctx2[15] : ctx2[16] : "") + ""))
        set_data(t1, t1_value);
      if (dirty & 16 && div0_id_value !== (div0_id_value = ctx2[4] + "-status-label")) {
        attr(div0, "id", div0_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment$r(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[12])
      return create_if_block$9;
    return create_else_block_1$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if_block.p(ctx2, dirty);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
let counter$5 = 0;
function instance$e($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $sort;
  let $sortDirection;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let header = getContext("SMUI:data-table:row:header");
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { numeric = false } = $$props;
  let { checkbox = false } = $$props;
  let { columnId = header ? "SMUI-data-table-column-" + counter$5++ : "SMUI-data-table-unused" } = $$props;
  let { sortable = getContext("SMUI:data-table:sortable") } = $$props;
  let element2;
  let internalClasses = {};
  let internalAttrs = {};
  let sort = getContext("SMUI:data-table:sort");
  component_subscribe($$self, sort, (value) => $$invalidate(9, $sort = value));
  let sortDirection = getContext("SMUI:data-table:sortDirection");
  component_subscribe($$self, sortDirection, (value) => $$invalidate(10, $sortDirection = value));
  let sortAscendingAriaLabel = getContext("SMUI:data-table:sortAscendingAriaLabel");
  let sortDescendingAriaLabel = getContext("SMUI:data-table:sortDescendingAriaLabel");
  if (sortable) {
    setContext("SMUI:label:context", "data-table:sortable-header-cell");
    setContext("SMUI:icon-button:context", "data-table:sortable-header-cell");
    setContext("SMUI:icon-button:aria-describedby", columnId + "-status-label");
  }
  onMount(() => {
    const accessor = header ? {
      _smui_data_table_header_cell_accessor: true,
      get element() {
        return getElement();
      },
      get columnId() {
        return columnId;
      },
      addClass,
      removeClass,
      getAttr,
      addAttr
    } : {
      _smui_data_table_header_cell_accessor: false,
      get element() {
        return getElement();
      },
      get columnId() {
        return void 0;
      },
      addClass,
      removeClass,
      getAttr,
      addAttr
    };
    dispatch(getElement(), "SMUIDataTableCell:mount", accessor);
    return () => {
      dispatch(getElement(), "SMUIDataTableCell:unmount", accessor);
    };
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(7, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(7, internalClasses[className2] = false, internalClasses);
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(8, internalAttrs[name] = value, internalAttrs);
    }
  }
  function notifyHeaderChange(event) {
    dispatch(getElement(), "SMUIDataTableHeaderCheckbox:change", event);
  }
  function notifyBodyChange(event) {
    dispatch(getElement(), "SMUIDataTableBodyCheckbox:change", event);
  }
  function getElement() {
    return element2;
  }
  function th_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(6, element2);
    });
  }
  const change_handler = (event) => checkbox && notifyHeaderChange(event);
  function td_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(6, element2);
    });
  }
  const change_handler_1 = (event) => checkbox && notifyBodyChange(event);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(19, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("numeric" in $$new_props)
      $$invalidate(2, numeric = $$new_props.numeric);
    if ("checkbox" in $$new_props)
      $$invalidate(3, checkbox = $$new_props.checkbox);
    if ("columnId" in $$new_props)
      $$invalidate(4, columnId = $$new_props.columnId);
    if ("sortable" in $$new_props)
      $$invalidate(5, sortable = $$new_props.sortable);
  };
  return [
    use2,
    className,
    numeric,
    checkbox,
    columnId,
    sortable,
    element2,
    internalClasses,
    internalAttrs,
    $sort,
    $sortDirection,
    forwardEvents,
    header,
    sort,
    sortDirection,
    sortAscendingAriaLabel,
    sortDescendingAriaLabel,
    notifyHeaderChange,
    notifyBodyChange,
    $$restProps,
    getElement,
    th_binding,
    change_handler,
    td_binding,
    change_handler_1
  ];
}
class Cell$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$e, create_fragment$r, safe_not_equal, {
      use: 0,
      class: 1,
      numeric: 2,
      checkbox: 3,
      columnId: 4,
      sortable: 5,
      getElement: 20
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get numeric() {
    return this.$$.ctx[2];
  }
  set numeric(numeric) {
    this.$$set({ numeric });
    flush();
  }
  get checkbox() {
    return this.$$.ctx[3];
  }
  set checkbox(checkbox) {
    this.$$set({ checkbox });
    flush();
  }
  get columnId() {
    return this.$$.ctx[4];
  }
  set columnId(columnId) {
    this.$$set({ columnId });
    flush();
  }
  get sortable() {
    return this.$$.ctx[5];
  }
  set sortable(sortable) {
    this.$$set({ sortable });
    flush();
  }
  get getElement() {
    return this.$$.ctx[20];
  }
}
function create_if_block_1$2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<slot name="rowsPerPage"></slot>`;
      attr(div, "class", "mdc-data-table__pagination-rows-per-page");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$8(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<slot name="total"></slot>`;
      attr(div, "class", "mdc-data-table__pagination-total");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$q(ctx) {
  let div2;
  let div1;
  let t0;
  let div0;
  let t1;
  let slot;
  let div1_class_value;
  let useActions_action;
  let div2_class_value;
  let useActions_action_1;
  let mounted;
  let dispose;
  let if_block0 = ctx[7].rowsPerPage && create_if_block_1$2();
  let if_block1 = ctx[7].total && create_if_block$8();
  let div1_levels = [
    {
      class: div1_class_value = classMap({
        [ctx[3]]: true,
        "mdc-data-table__pagination-trailing": true
      })
    },
    prefixFilter(ctx[6], "trailing$")
  ];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  let div2_levels = [
    {
      class: div2_class_value = classMap({
        [ctx[1]]: true,
        "mdc-data-table__pagination": true
      })
    },
    exclude(ctx[6], ["trailing$"])
  ];
  let div2_data = {};
  for (let i = 0; i < div2_levels.length; i += 1) {
    div2_data = assign(div2_data, div2_levels[i]);
  }
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div0 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      slot = element("slot");
      this.c = noop$1;
      attr(div0, "class", "mdc-data-table__pagination-navigation");
      set_attributes(div1, div1_data);
      set_attributes(div2, div2_data);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div1);
      if (if_block0)
        if_block0.m(div1, null);
      append(div1, t0);
      append(div1, div0);
      if (if_block1)
        if_block1.m(div0, null);
      append(div0, t1);
      append(div0, slot);
      ctx[9](div2);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div1, ctx[2])),
          action_destroyer(useActions_action_1 = useActions.call(null, div2, ctx[0])),
          action_destroyer(ctx[5].call(null, div2))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[7].rowsPerPage) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_1$2();
          if_block0.c();
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[7].total) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block$8();
          if_block1.c();
          if_block1.m(div0, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [
        dirty & 8 && div1_class_value !== (div1_class_value = classMap({
          [ctx2[3]]: true,
          "mdc-data-table__pagination-trailing": true
        })) && { class: div1_class_value },
        dirty & 64 && prefixFilter(ctx2[6], "trailing$")
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 4)
        useActions_action.update.call(null, ctx2[2]);
      set_attributes(div2, div2_data = get_spread_update(div2_levels, [
        dirty & 2 && div2_class_value !== (div2_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-data-table__pagination": true
        })) && { class: div2_class_value },
        dirty & 64 && exclude(ctx2[6], ["trailing$"])
      ]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty & 1)
        useActions_action_1.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      ctx[9](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "trailing$use", "trailing$class", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { trailing$use = [] } = $$props;
  let { trailing$class = "" } = $$props;
  let element2;
  setContext("SMUI:label:context", "data-table:pagination");
  setContext("SMUI:select:context", "data-table:pagination");
  setContext("SMUI:icon-button:context", "data-table:pagination");
  function getElement() {
    return element2;
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(4, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("trailing$use" in $$new_props)
      $$invalidate(2, trailing$use = $$new_props.trailing$use);
    if ("trailing$class" in $$new_props)
      $$invalidate(3, trailing$class = $$new_props.trailing$class);
  };
  return [
    use2,
    className,
    trailing$use,
    trailing$class,
    element2,
    forwardEvents,
    $$restProps,
    $$slots,
    getElement,
    div2_binding
  ];
}
class Pagination$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: {
        ...attribute_to_object(this.attributes),
        $$slots: get_custom_elements_slots(this)
      },
      customElement: true
    }, instance$d, create_fragment$q, safe_not_equal, {
      use: 0,
      class: 1,
      trailing$use: 2,
      trailing$class: 3,
      getElement: 8
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "trailing$use", "trailing$class", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get trailing$use() {
    return this.$$.ctx[2];
  }
  set trailing$use(trailing$use) {
    this.$$set({ trailing$use });
    flush();
  }
  get trailing$class() {
    return this.$$.ctx[3];
  }
  set trailing$class(trailing$class) {
    this.$$set({ trailing$class });
    flush();
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function create_default_slot$a(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$p(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [ctx[4], ...ctx[0]]
    },
    {
      class: classMap({
        [ctx[1]]: true,
        "mdc-button__label": ctx[5] === "button",
        "mdc-fab__label": ctx[5] === "fab",
        "mdc-tab__text-label": ctx[5] === "tab",
        "mdc-image-list__label": ctx[5] === "image-list",
        "mdc-snackbar__label": ctx[5] === "snackbar",
        "mdc-banner__text": ctx[5] === "banner",
        "mdc-segmented-button__label": ctx[5] === "segmented-button",
        "mdc-data-table__pagination-rows-per-page-label": ctx[5] === "data-table:pagination",
        "mdc-data-table__header-cell-label": ctx[5] === "data-table:sortable-header-cell"
      })
    },
    ctx[5] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: ctx[6] },
    ctx[7]
  ];
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$a] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[9](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 243 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 17 && {
          use: [ctx2[4], ...ctx2[0]]
        },
        dirty & 34 && {
          class: classMap({
            [ctx2[1]]: true,
            "mdc-button__label": ctx2[5] === "button",
            "mdc-fab__label": ctx2[5] === "fab",
            "mdc-tab__text-label": ctx2[5] === "tab",
            "mdc-image-list__label": ctx2[5] === "image-list",
            "mdc-snackbar__label": ctx2[5] === "snackbar",
            "mdc-banner__text": ctx2[5] === "banner",
            "mdc-segmented-button__label": ctx2[5] === "segmented-button",
            "mdc-data-table__pagination-rows-per-page-label": ctx2[5] === "data-table:pagination",
            "mdc-data-table__header-cell-label": ctx2[5] === "data-table:sortable-header-cell"
          })
        },
        dirty & 32 && get_spread_object(ctx2[5] === "snackbar" ? { "aria-atomic": "false" } : {}),
        dirty & 64 && { tabindex: ctx2[6] },
        dirty & 128 && get_spread_object(ctx2[7])
      ]) : {};
      if (dirty & 1024) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[9](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[9](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "component", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let element2;
  let { component = Span$1 } = $$props;
  const context2 = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("component" in $$new_props)
      $$invalidate(2, component = $$new_props.component);
  };
  return [
    use2,
    className,
    component,
    element2,
    forwardEvents,
    context2,
    tabindex,
    $$restProps,
    getElement,
    switch_instance_binding
  ];
}
class CommonLabel extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$c, create_fragment$p, safe_not_equal, {
      use: 0,
      class: 1,
      component: 2,
      getElement: 8
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "component", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(component) {
    this.$$set({ component });
    flush();
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function create_default_slot$9(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$o(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [ctx[5], ...ctx[0]]
    },
    {
      class: classMap({
        [ctx[1]]: true,
        "mdc-button__icon": ctx[6] === "button",
        "mdc-fab__icon": ctx[6] === "fab",
        "mdc-icon-button__icon": ctx[6] === "icon-button",
        "mdc-icon-button__icon--on": ctx[6] === "icon-button" && ctx[2],
        "mdc-tab__icon": ctx[6] === "tab",
        "mdc-banner__icon": ctx[6] === "banner",
        "mdc-segmented-button__icon": ctx[6] === "segmented-button"
      })
    },
    { "aria-hidden": "true" },
    ctx[3] === Svg ? { focusable: "false", tabindex: "-1" } : {},
    ctx[7]
  ];
  var switch_value = ctx[3];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$9] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[9](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 239 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 33 && {
          use: [ctx2[5], ...ctx2[0]]
        },
        dirty & 70 && {
          class: classMap({
            [ctx2[1]]: true,
            "mdc-button__icon": ctx2[6] === "button",
            "mdc-fab__icon": ctx2[6] === "fab",
            "mdc-icon-button__icon": ctx2[6] === "icon-button",
            "mdc-icon-button__icon--on": ctx2[6] === "icon-button" && ctx2[2],
            "mdc-tab__icon": ctx2[6] === "tab",
            "mdc-banner__icon": ctx2[6] === "banner",
            "mdc-segmented-button__icon": ctx2[6] === "segmented-button"
          })
        },
        switch_instance_spread_levels[2],
        dirty & 8 && get_spread_object(ctx2[3] === Svg ? { focusable: "false", tabindex: "-1" } : {}),
        dirty & 128 && get_spread_object(ctx2[7])
      ]) : {};
      if (dirty & 1024) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[9](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[9](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "on", "component", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element2;
  let { component = I } = $$props;
  const context2 = getContext("SMUI:icon:context");
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(4, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("on" in $$new_props)
      $$invalidate(2, on = $$new_props.on);
    if ("component" in $$new_props)
      $$invalidate(3, component = $$new_props.component);
  };
  return [
    use2,
    className,
    on,
    component,
    element2,
    forwardEvents,
    context2,
    $$restProps,
    getElement,
    switch_instance_binding
  ];
}
class CommonIcon extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$b, create_fragment$o, safe_not_equal, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      getElement: 8
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "on", "component", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get on() {
    return this.$$.ctx[2];
  }
  set on(on) {
    this.$$set({ on });
    flush();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(component) {
    this.$$set({ component });
    flush();
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function create_fragment$n(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      this.c = noop$1;
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let $storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  component_subscribe($$self, storeValue, (value2) => $$invalidate(3, $storeValue = value2));
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  $$self.$$set = ($$props2) => {
    if ("key" in $$props2)
      $$invalidate(1, key = $$props2.key);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      set_store_value(storeValue, $storeValue = value, $storeValue);
    }
  };
  return [storeValue, key, value];
}
class ContextFragment extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$a, create_fragment$n, safe_not_equal, { key: 1, value: 2 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["key", "value"];
  }
  get key() {
    return this.$$.ctx[1];
  }
  set key(key) {
    this.$$set({ key });
    flush();
  }
  get value() {
    return this.$$.ctx[2];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
}
const Label = CommonLabel;
const Icon = CommonIcon;
const Head = Head$1;
const Body = Body$1;
const Row = Row$1;
const Cell = Cell$1;
const Pagination = Pagination$1;
function create_fragment$m(ctx) {
  let div5;
  let div2;
  let div0;
  let div0_style_value;
  let t0;
  let div1;
  let t1;
  let div3;
  let span0;
  let div3_style_value;
  let t2;
  let div4;
  let div5_class_value;
  let div5_style_value;
  let div5_aria_valuemin_value;
  let div5_aria_valuemax_value;
  let div5_aria_valuenow_value;
  let useActions_action;
  let mounted;
  let dispose;
  let div5_levels = [
    {
      class: div5_class_value = classMap({
        [ctx[1]]: true,
        "mdc-linear-progress": true,
        "mdc-linear-progress--indeterminate": ctx[3],
        "mdc-linear-progress--closed": ctx[4],
        "mdc-data-table__linear-progress": ctx[14] === "data-table",
        ...ctx[8]
      })
    },
    {
      style: div5_style_value = Object.entries(ctx[10]).map(func_2).concat([ctx[2]]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": div5_aria_valuemin_value = 0
    },
    {
      "aria-valuemax": div5_aria_valuemax_value = 1
    },
    {
      "aria-valuenow": div5_aria_valuenow_value = ctx[3] ? void 0 : ctx[5]
    },
    ctx[9],
    ctx[16]
  ];
  let div5_data = {};
  for (let i = 0; i < div5_levels.length; i += 1) {
    div5_data = assign(div5_data, div5_levels[i]);
  }
  return {
    c() {
      div5 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div3 = element("div");
      span0 = element("span");
      t2 = space();
      div4 = element("div");
      div4.innerHTML = `<span class="mdc-linear-progress__bar-inner"></span>`;
      this.c = noop$1;
      attr(div0, "class", "mdc-linear-progress__buffer-bar");
      attr(div0, "style", div0_style_value = Object.entries(ctx[11]).map(func$9).join(" "));
      attr(div1, "class", "mdc-linear-progress__buffer-dots");
      attr(div2, "class", "mdc-linear-progress__buffer");
      attr(span0, "class", "mdc-linear-progress__bar-inner");
      attr(div3, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar");
      attr(div3, "style", div3_style_value = Object.entries(ctx[12]).map(func_1$3).join(" "));
      attr(div4, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar");
      set_attributes(div5, div5_data);
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div2);
      append(div2, div0);
      append(div2, t0);
      append(div2, div1);
      append(div5, t1);
      append(div5, div3);
      append(div3, span0);
      append(div5, t2);
      append(div5, div4);
      ctx[19](div5);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div5, ctx[0])),
          action_destroyer(ctx[13].call(null, div5)),
          listen(div5, "transitionend", ctx[20])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 2048 && div0_style_value !== (div0_style_value = Object.entries(ctx2[11]).map(func$9).join(" "))) {
        attr(div0, "style", div0_style_value);
      }
      if (dirty & 4096 && div3_style_value !== (div3_style_value = Object.entries(ctx2[12]).map(func_1$3).join(" "))) {
        attr(div3, "style", div3_style_value);
      }
      set_attributes(div5, div5_data = get_spread_update(div5_levels, [
        dirty & 282 && div5_class_value !== (div5_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-linear-progress": true,
          "mdc-linear-progress--indeterminate": ctx2[3],
          "mdc-linear-progress--closed": ctx2[4],
          "mdc-data-table__linear-progress": ctx2[14] === "data-table",
          ...ctx2[8]
        })) && { class: div5_class_value },
        dirty & 1028 && div5_style_value !== (div5_style_value = Object.entries(ctx2[10]).map(func_2).concat([ctx2[2]]).join(" ")) && { style: div5_style_value },
        { role: "progressbar" },
        {
          "aria-valuemin": div5_aria_valuemin_value
        },
        {
          "aria-valuemax": div5_aria_valuemax_value
        },
        dirty & 40 && div5_aria_valuenow_value !== (div5_aria_valuenow_value = ctx2[3] ? void 0 : ctx2[5]) && {
          "aria-valuenow": div5_aria_valuenow_value
        },
        dirty & 512 && ctx2[9],
        dirty & 65536 && ctx2[16]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div5);
      ctx[19](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func$9 = ([name, value]) => `${name}: ${value};`;
const func_1$3 = ([name, value]) => `${name}: ${value};`;
const func_2 = ([name, value]) => `${name}: ${value};`;
function instance_1$c($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "indeterminate",
    "closed",
    "progress",
    "buffer",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $closedStore;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { indeterminate = false } = $$props;
  let { closed = false } = $$props;
  let { progress = 0 } = $$props;
  let { buffer = void 0 } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalAttrs = {};
  let internalStyles = {};
  let bufferBarStyles = {};
  let primaryBarStyles = {};
  let context2 = getContext("SMUI:linear-progress:context");
  let closedStore = getContext("SMUI:linear-progress:closed");
  component_subscribe($$self, closedStore, (value) => $$invalidate(21, $closedStore = value));
  onMount(() => {
    $$invalidate(6, instance2 = new MDCLinearProgressFoundation({
      addClass,
      forceLayout: () => {
        getElement().getBoundingClientRect();
      },
      setBufferBarStyle: addBufferBarStyle,
      setPrimaryBarStyle: addPrimaryBarStyle,
      hasClass,
      removeAttribute: removeAttr,
      removeClass,
      setAttribute: addAttr,
      setStyle: addStyle,
      attachResizeObserver: (callback) => {
        const RO = window.ResizeObserver;
        if (RO) {
          const ro = new RO(callback);
          ro.observe(getElement());
          return ro;
        }
        return null;
      },
      getWidth: () => getElement().offsetWidth
    }));
    instance2.init();
    return () => {
      instance2.destroy();
    };
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(8, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(8, internalClasses[className2] = false, internalClasses);
    }
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(9, internalAttrs[name] = value, internalAttrs);
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      $$invalidate(9, internalAttrs[name] = void 0, internalAttrs);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(10, internalStyles);
      } else {
        $$invalidate(10, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function addBufferBarStyle(name, value) {
    if (bufferBarStyles[name] != value) {
      if (value === "" || value == null) {
        delete bufferBarStyles[name];
        $$invalidate(11, bufferBarStyles);
      } else {
        $$invalidate(11, bufferBarStyles[name] = value, bufferBarStyles);
      }
    }
  }
  function addPrimaryBarStyle(name, value) {
    if (primaryBarStyles[name] != value) {
      if (value === "" || value == null) {
        delete primaryBarStyles[name];
        $$invalidate(12, primaryBarStyles);
      } else {
        $$invalidate(12, primaryBarStyles[name] = value, primaryBarStyles);
      }
    }
  }
  function getElement() {
    return element2;
  }
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(7, element2);
    });
  }
  const transitionend_handler = () => instance2 && instance2.handleTransitionEnd();
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(2, style = $$new_props.style);
    if ("indeterminate" in $$new_props)
      $$invalidate(3, indeterminate = $$new_props.indeterminate);
    if ("closed" in $$new_props)
      $$invalidate(4, closed = $$new_props.closed);
    if ("progress" in $$new_props)
      $$invalidate(5, progress = $$new_props.progress);
    if ("buffer" in $$new_props)
      $$invalidate(17, buffer = $$new_props.buffer);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      if (closedStore) {
        set_store_value(closedStore, $closedStore = closed, $closedStore);
      }
    }
    if ($$self.$$.dirty & 72) {
      if (instance2 && instance2.isDeterminate() !== !indeterminate) {
        instance2.setDeterminate(!indeterminate);
      }
    }
    if ($$self.$$.dirty & 96) {
      if (instance2 && instance2.getProgress() !== progress) {
        instance2.setProgress(progress);
      }
    }
    if ($$self.$$.dirty & 131136) {
      if (instance2) {
        if (buffer == null) {
          instance2.setBuffer(1);
        } else {
          instance2.setBuffer(buffer);
        }
      }
    }
    if ($$self.$$.dirty & 80) {
      if (instance2) {
        if (closed) {
          instance2.close();
        } else {
          instance2.open();
        }
      }
    }
  };
  return [
    use2,
    className,
    style,
    indeterminate,
    closed,
    progress,
    instance2,
    element2,
    internalClasses,
    internalAttrs,
    internalStyles,
    bufferBarStyles,
    primaryBarStyles,
    forwardEvents,
    context2,
    closedStore,
    $$restProps,
    buffer,
    getElement,
    div5_binding,
    transitionend_handler
  ];
}
class LinearProgress extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$c, create_fragment$m, safe_not_equal, {
      use: 0,
      class: 1,
      style: 2,
      indeterminate: 3,
      closed: 4,
      progress: 5,
      buffer: 17,
      getElement: 18
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "indeterminate",
      "closed",
      "progress",
      "buffer",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get indeterminate() {
    return this.$$.ctx[3];
  }
  set indeterminate(indeterminate) {
    this.$$set({ indeterminate });
    flush();
  }
  get closed() {
    return this.$$.ctx[4];
  }
  set closed(closed) {
    this.$$set({ closed });
    flush();
  }
  get progress() {
    return this.$$.ctx[5];
  }
  set progress(progress) {
    this.$$set({ progress });
    flush();
  }
  get buffer() {
    return this.$$.ctx[17];
  }
  set buffer(buffer) {
    this.$$set({ buffer });
    flush();
  }
  get getElement() {
    return this.$$.ctx[18];
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$9 = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFloatingLabelFoundation = function(_super) {
  __extends$1(MDCFloatingLabelFoundation2, _super);
  function MDCFloatingLabelFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation2.defaultAdapter), adapter)) || this;
    _this.shakeAnimationEndHandler = function() {
      _this.handleShakeAnimationEnd();
    };
    return _this;
  }
  Object.defineProperty(MDCFloatingLabelFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$9;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        getWidth: function() {
          return 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCFloatingLabelFoundation2.prototype.init = function() {
    this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
  };
  MDCFloatingLabelFoundation2.prototype.destroy = function() {
    this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
  };
  MDCFloatingLabelFoundation2.prototype.getWidth = function() {
    return this.adapter.getWidth();
  };
  MDCFloatingLabelFoundation2.prototype.shake = function(shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
    if (shouldShake) {
      this.adapter.addClass(LABEL_SHAKE);
    } else {
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  MDCFloatingLabelFoundation2.prototype.float = function(shouldFloat) {
    var _a2 = MDCFloatingLabelFoundation2.cssClasses, LABEL_FLOAT_ABOVE = _a2.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a2.LABEL_SHAKE;
    if (shouldFloat) {
      this.adapter.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  MDCFloatingLabelFoundation2.prototype.setRequired = function(isRequired) {
    var LABEL_REQUIRED = MDCFloatingLabelFoundation2.cssClasses.LABEL_REQUIRED;
    if (isRequired) {
      this.adapter.addClass(LABEL_REQUIRED);
    } else {
      this.adapter.removeClass(LABEL_REQUIRED);
    }
  };
  MDCFloatingLabelFoundation2.prototype.handleShakeAnimationEnd = function() {
    var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
    this.adapter.removeClass(LABEL_SHAKE);
  };
  return MDCFloatingLabelFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$8 = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLineRippleFoundation = function(_super) {
  __extends$1(MDCLineRippleFoundation2, _super);
  function MDCLineRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.transitionEndHandler = function(evt) {
      _this.handleTransitionEnd(evt);
    };
    return _this;
  }
  Object.defineProperty(MDCLineRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$8;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        setStyle: function() {
          return void 0;
        },
        registerEventHandler: function() {
          return void 0;
        },
        deregisterEventHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCLineRippleFoundation2.prototype.init = function() {
    this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
  };
  MDCLineRippleFoundation2.prototype.destroy = function() {
    this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
  };
  MDCLineRippleFoundation2.prototype.activate = function() {
    this.adapter.removeClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
    this.adapter.addClass(cssClasses$8.LINE_RIPPLE_ACTIVE);
  };
  MDCLineRippleFoundation2.prototype.setRippleCenter = function(xCoordinate) {
    this.adapter.setStyle("transform-origin", xCoordinate + "px center");
  };
  MDCLineRippleFoundation2.prototype.deactivate = function() {
    this.adapter.addClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
  };
  MDCLineRippleFoundation2.prototype.handleTransitionEnd = function(evt) {
    var isDeactivating = this.adapter.hasClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
    if (evt.propertyName === "opacity") {
      if (isDeactivating) {
        this.adapter.removeClass(cssClasses$8.LINE_RIPPLE_ACTIVE);
        this.adapter.removeClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };
  return MDCLineRippleFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$7 = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
};
var strings$8 = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
};
var numbers$6 = {
  TRANSITION_OPEN_DURATION: 120,
  TRANSITION_CLOSE_DURATION: 75,
  MARGIN_TO_EDGE: 32,
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  TOUCH_EVENT_WAIT_MS: 30
};
var CornerBit;
(function(CornerBit2) {
  CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
  CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
  CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
  CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
var Corner;
(function(Corner2) {
  Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
  Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
  Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a, _b;
var cssClasses$6 = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
_a = {}, _a["" + cssClasses$6.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses$6.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses$6.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses$6.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses$6.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses$6.ROOT] = "mdc-list", _a;
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses$6.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses$6.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses$6.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses$6.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses$6.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses$6.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses$6.ROOT] = "mdc-deprecated-list", _b);
var strings$7 = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$6.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$6.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$6.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$6.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$6.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses$6.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers$5 = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
var preventDefaultEvent = function(evt) {
  var target = evt.target;
  if (!target) {
    return;
  }
  var tagName = ("" + target.tagName).toLowerCase();
  if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
    evt.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function initState() {
  var state2 = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return state2;
}
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
  var sortedIndexByFirstChar = /* @__PURE__ */ new Map();
  for (var i = 0; i < listItemCount; i++) {
    var primaryText = getPrimaryTextByItemIndex(i).trim();
    if (!primaryText) {
      continue;
    }
    var firstChar = primaryText[0].toLowerCase();
    if (!sortedIndexByFirstChar.has(firstChar)) {
      sortedIndexByFirstChar.set(firstChar, []);
    }
    sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
  }
  sortedIndexByFirstChar.forEach(function(values) {
    values.sort(function(first, second) {
      return first.index - second.index;
    });
  });
  return sortedIndexByFirstChar;
}
function matchItem(opts, state2) {
  var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  clearTimeout(state2.bufferClearTimeout);
  state2.bufferClearTimeout = setTimeout(function() {
    clearBuffer(state2);
  }, numbers$5.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
  state2.typeaheadBuffer = state2.typeaheadBuffer + nextChar;
  var index;
  if (state2.typeaheadBuffer.length === 1) {
    index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state2);
  } else {
    index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state2);
  }
  if (index !== -1 && !skipFocus) {
    focusItemAtIndex(index);
  }
  return index;
}
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state2) {
  var firstChar = state2.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  if (firstChar === state2.currentFirstChar && itemsMatchingFirstChar[state2.sortedIndexCursor].index === focusedItemIndex) {
    state2.sortedIndexCursor = (state2.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var newIndex = itemsMatchingFirstChar[state2.sortedIndexCursor].index;
    if (!isItemAtIndexDisabled(newIndex)) {
      return newIndex;
    }
  }
  state2.currentFirstChar = firstChar;
  var newCursorPosition = -1;
  var cursorPosition;
  for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  if (newCursorPosition !== -1) {
    state2.sortedIndexCursor = newCursorPosition;
    return itemsMatchingFirstChar[state2.sortedIndexCursor].index;
  }
  return -1;
}
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state2) {
  var firstChar = state2.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  var startingItem = itemsMatchingFirstChar[state2.sortedIndexCursor];
  if (startingItem.text.lastIndexOf(state2.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
    return startingItem.index;
  }
  var cursorPosition = (state2.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
  var nextCursorPosition = -1;
  while (cursorPosition !== state2.sortedIndexCursor) {
    var currentItem = itemsMatchingFirstChar[cursorPosition];
    var matches2 = currentItem.text.lastIndexOf(state2.typeaheadBuffer, 0) === 0;
    var isEnabled = !isItemAtIndexDisabled(currentItem.index);
    if (matches2 && isEnabled) {
      nextCursorPosition = cursorPosition;
      break;
    }
    cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
  }
  if (nextCursorPosition !== -1) {
    state2.sortedIndexCursor = nextCursorPosition;
    return itemsMatchingFirstChar[state2.sortedIndexCursor].index;
  }
  return -1;
}
function isTypingInProgress(state2) {
  return state2.typeaheadBuffer.length > 0;
}
function clearBuffer(state2) {
  state2.typeaheadBuffer = "";
}
function handleKeydown(opts, state2) {
  var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  var isArrowLeft = normalizeKey(event) === "ArrowLeft";
  var isArrowUp = normalizeKey(event) === "ArrowUp";
  var isArrowRight = normalizeKey(event) === "ArrowRight";
  var isArrowDown = normalizeKey(event) === "ArrowDown";
  var isHome = normalizeKey(event) === "Home";
  var isEnd = normalizeKey(event) === "End";
  var isEnter = normalizeKey(event) === "Enter";
  var isSpace = normalizeKey(event) === "Spacebar";
  if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
    return -1;
  }
  var isCharacterKey = !isSpace && event.key.length === 1;
  if (isCharacterKey) {
    preventDefaultEvent(event);
    var matchItemOpts = {
      focusItemAtIndex,
      focusedItemIndex,
      nextChar: event.key.toLowerCase(),
      sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state2);
  }
  if (!isSpace) {
    return -1;
  }
  if (isTargetListItem) {
    preventDefaultEvent(event);
  }
  var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state2);
  if (typeaheadOnListItem) {
    var matchItemOpts = {
      focusItemAtIndex,
      focusedItemIndex,
      nextChar: " ",
      sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state2);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}
var MDCListFoundation = function(_super) {
  __extends$1(MDCListFoundation2, _super);
  function MDCListFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCListFoundation2.defaultAdapter), adapter)) || this;
    _this.wrapFocus = false;
    _this.isVertical = true;
    _this.isSingleSelectionList = false;
    _this.selectedIndex = numbers$5.UNSET_INDEX;
    _this.focusedItemIndex = numbers$5.UNSET_INDEX;
    _this.useActivatedClass = false;
    _this.useSelectedAttr = false;
    _this.ariaCurrentAttrValue = null;
    _this.isCheckboxList = false;
    _this.isRadioList = false;
    _this.hasTypeahead = false;
    _this.typeaheadState = initState();
    _this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
    return _this;
  }
  Object.defineProperty(MDCListFoundation2, "strings", {
    get: function() {
      return strings$7;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$6;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation2, "numbers", {
    get: function() {
      return numbers$5;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClassForElementIndex: function() {
          return void 0;
        },
        focusItemAtIndex: function() {
          return void 0;
        },
        getAttributeForElementIndex: function() {
          return null;
        },
        getFocusedElementIndex: function() {
          return 0;
        },
        getListItemCount: function() {
          return 0;
        },
        hasCheckboxAtIndex: function() {
          return false;
        },
        hasRadioAtIndex: function() {
          return false;
        },
        isCheckboxCheckedAtIndex: function() {
          return false;
        },
        isFocusInsideList: function() {
          return false;
        },
        isRootFocused: function() {
          return false;
        },
        listItemAtIndexHasClass: function() {
          return false;
        },
        notifyAction: function() {
          return void 0;
        },
        removeClassForElementIndex: function() {
          return void 0;
        },
        setAttributeForElementIndex: function() {
          return void 0;
        },
        setCheckedCheckboxOrRadioAtIndex: function() {
          return void 0;
        },
        setTabIndexForListItemChildren: function() {
          return void 0;
        },
        getPrimaryTextAtIndex: function() {
          return "";
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCListFoundation2.prototype.layout = function() {
    if (this.adapter.getListItemCount() === 0) {
      return;
    }
    if (this.adapter.hasCheckboxAtIndex(0)) {
      this.isCheckboxList = true;
    } else if (this.adapter.hasRadioAtIndex(0)) {
      this.isRadioList = true;
    } else {
      this.maybeInitializeSingleSelection();
    }
    if (this.hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  MDCListFoundation2.prototype.getFocusedItemIndex = function() {
    return this.focusedItemIndex;
  };
  MDCListFoundation2.prototype.setWrapFocus = function(value) {
    this.wrapFocus = value;
  };
  MDCListFoundation2.prototype.setVerticalOrientation = function(value) {
    this.isVertical = value;
  };
  MDCListFoundation2.prototype.setSingleSelection = function(value) {
    this.isSingleSelectionList = value;
    if (value) {
      this.maybeInitializeSingleSelection();
      this.selectedIndex = this.getSelectedIndexFromDOM();
    }
  };
  MDCListFoundation2.prototype.maybeInitializeSingleSelection = function() {
    var selectedItemIndex = this.getSelectedIndexFromDOM();
    if (selectedItemIndex === numbers$5.UNSET_INDEX)
      return;
    var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, cssClasses$6.LIST_ITEM_ACTIVATED_CLASS);
    if (hasActivatedClass) {
      this.setUseActivatedClass(true);
    }
    this.isSingleSelectionList = true;
    this.selectedIndex = selectedItemIndex;
  };
  MDCListFoundation2.prototype.getSelectedIndexFromDOM = function() {
    var selectedIndex = numbers$5.UNSET_INDEX;
    var listItemsCount = this.adapter.getListItemCount();
    for (var i = 0; i < listItemsCount; i++) {
      var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses$6.LIST_ITEM_SELECTED_CLASS);
      var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses$6.LIST_ITEM_ACTIVATED_CLASS);
      if (!(hasSelectedClass || hasActivatedClass)) {
        continue;
      }
      selectedIndex = i;
      break;
    }
    return selectedIndex;
  };
  MDCListFoundation2.prototype.setHasTypeahead = function(hasTypeahead) {
    this.hasTypeahead = hasTypeahead;
    if (hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  MDCListFoundation2.prototype.isTypeaheadInProgress = function() {
    return this.hasTypeahead && isTypingInProgress(this.typeaheadState);
  };
  MDCListFoundation2.prototype.setUseActivatedClass = function(useActivated) {
    this.useActivatedClass = useActivated;
  };
  MDCListFoundation2.prototype.setUseSelectedAttribute = function(useSelected) {
    this.useSelectedAttr = useSelected;
  };
  MDCListFoundation2.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  };
  MDCListFoundation2.prototype.setSelectedIndex = function(index, _a2) {
    var _b2 = _a2 === void 0 ? {} : _a2, forceUpdate = _b2.forceUpdate;
    if (!this.isIndexValid(index)) {
      return;
    }
    if (this.isCheckboxList) {
      this.setCheckboxAtIndex(index);
    } else if (this.isRadioList) {
      this.setRadioAtIndex(index);
    } else {
      this.setSingleSelectionAtIndex(index, { forceUpdate });
    }
  };
  MDCListFoundation2.prototype.handleFocusIn = function(listItemIndex) {
    if (listItemIndex >= 0) {
      this.focusedItemIndex = listItemIndex;
      this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "0");
      this.adapter.setTabIndexForListItemChildren(listItemIndex, "0");
    }
  };
  MDCListFoundation2.prototype.handleFocusOut = function(listItemIndex) {
    var _this = this;
    if (listItemIndex >= 0) {
      this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "-1");
      this.adapter.setTabIndexForListItemChildren(listItemIndex, "-1");
    }
    setTimeout(function() {
      if (!_this.adapter.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedOrFocusedItem();
      }
    }, 0);
  };
  MDCListFoundation2.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
    var _this = this;
    var isArrowLeft = normalizeKey(event) === "ArrowLeft";
    var isArrowUp = normalizeKey(event) === "ArrowUp";
    var isArrowRight = normalizeKey(event) === "ArrowRight";
    var isArrowDown = normalizeKey(event) === "ArrowDown";
    var isHome = normalizeKey(event) === "Home";
    var isEnd = normalizeKey(event) === "End";
    var isEnter = normalizeKey(event) === "Enter";
    var isSpace = normalizeKey(event) === "Spacebar";
    var isLetterA = event.key === "A" || event.key === "a";
    if (this.adapter.isRootFocused()) {
      if (isArrowUp || isEnd) {
        event.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        event.preventDefault();
        this.focusFirstElement();
      }
      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event,
          focusItemAtIndex: function(index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: -1,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(index) {
            return _this.adapter.listItemAtIndexHasClass(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
          }
        };
        handleKeydown(handleKeydownOpts, this.typeaheadState);
      }
      return;
    }
    var currentIndex = this.adapter.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        return;
      }
    }
    if (this.isVertical && isArrowDown || !this.isVertical && isArrowRight) {
      preventDefaultEvent(event);
      this.focusNextElement(currentIndex);
    } else if (this.isVertical && isArrowUp || !this.isVertical && isArrowLeft) {
      preventDefaultEvent(event);
      this.focusPrevElement(currentIndex);
    } else if (isHome) {
      preventDefaultEvent(event);
      this.focusFirstElement();
    } else if (isEnd) {
      preventDefaultEvent(event);
      this.focusLastElement();
    } else if (isLetterA && event.ctrlKey && this.isCheckboxList) {
      event.preventDefault();
      this.toggleAll(this.selectedIndex === numbers$5.UNSET_INDEX ? [] : this.selectedIndex);
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        var target = event.target;
        if (target && target.tagName === "A" && isEnter) {
          return;
        }
        preventDefaultEvent(event);
        if (this.adapter.listItemAtIndexHasClass(currentIndex, cssClasses$6.LIST_ITEM_DISABLED_CLASS)) {
          return;
        }
        if (!this.isTypeaheadInProgress()) {
          if (this.isSelectableList()) {
            this.setSelectedIndexOnAction(currentIndex);
          }
          this.adapter.notifyAction(currentIndex);
        }
      }
    }
    if (this.hasTypeahead) {
      var handleKeydownOpts = {
        event,
        focusItemAtIndex: function(index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: this.focusedItemIndex,
        isTargetListItem: isRootListItem,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: function(index) {
          return _this.adapter.listItemAtIndexHasClass(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
        }
      };
      handleKeydown(handleKeydownOpts, this.typeaheadState);
    }
  };
  MDCListFoundation2.prototype.handleClick = function(index, toggleCheckbox) {
    if (index === numbers$5.UNSET_INDEX) {
      return;
    }
    if (this.adapter.listItemAtIndexHasClass(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS)) {
      return;
    }
    if (this.isSelectableList()) {
      this.setSelectedIndexOnAction(index, toggleCheckbox);
    }
    this.adapter.notifyAction(index);
  };
  MDCListFoundation2.prototype.focusNextElement = function(index) {
    var count = this.adapter.getListItemCount();
    var nextIndex = index + 1;
    if (nextIndex >= count) {
      if (this.wrapFocus) {
        nextIndex = 0;
      } else {
        return index;
      }
    }
    this.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  MDCListFoundation2.prototype.focusPrevElement = function(index) {
    var prevIndex = index - 1;
    if (prevIndex < 0) {
      if (this.wrapFocus) {
        prevIndex = this.adapter.getListItemCount() - 1;
      } else {
        return index;
      }
    }
    this.focusItemAtIndex(prevIndex);
    return prevIndex;
  };
  MDCListFoundation2.prototype.focusFirstElement = function() {
    this.focusItemAtIndex(0);
    return 0;
  };
  MDCListFoundation2.prototype.focusLastElement = function() {
    var lastIndex = this.adapter.getListItemCount() - 1;
    this.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  MDCListFoundation2.prototype.focusInitialElement = function() {
    var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
    this.focusItemAtIndex(initialIndex);
    return initialIndex;
  };
  MDCListFoundation2.prototype.setEnabled = function(itemIndex, isEnabled) {
    if (!this.isIndexValid(itemIndex)) {
      return;
    }
    if (isEnabled) {
      this.adapter.removeClassForElementIndex(itemIndex, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, strings$7.ARIA_DISABLED, "false");
    } else {
      this.adapter.addClassForElementIndex(itemIndex, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, strings$7.ARIA_DISABLED, "true");
    }
  };
  MDCListFoundation2.prototype.setSingleSelectionAtIndex = function(index, _a2) {
    var _b2 = _a2 === void 0 ? {} : _a2, forceUpdate = _b2.forceUpdate;
    if (this.selectedIndex === index && !forceUpdate) {
      return;
    }
    var selectedClassName = cssClasses$6.LIST_ITEM_SELECTED_CLASS;
    if (this.useActivatedClass) {
      selectedClassName = cssClasses$6.LIST_ITEM_ACTIVATED_CLASS;
    }
    if (this.selectedIndex !== numbers$5.UNSET_INDEX) {
      this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
    }
    this.setAriaForSingleSelectionAtIndex(index);
    this.setTabindexAtIndex(index);
    if (index !== numbers$5.UNSET_INDEX) {
      this.adapter.addClassForElementIndex(index, selectedClassName);
    }
    this.selectedIndex = index;
  };
  MDCListFoundation2.prototype.setAriaForSingleSelectionAtIndex = function(index) {
    if (this.selectedIndex === numbers$5.UNSET_INDEX) {
      this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, strings$7.ARIA_CURRENT);
    }
    var isAriaCurrent = this.ariaCurrentAttrValue !== null;
    var ariaAttribute = isAriaCurrent ? strings$7.ARIA_CURRENT : strings$7.ARIA_SELECTED;
    if (this.selectedIndex !== numbers$5.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, "false");
    }
    if (index !== numbers$5.UNSET_INDEX) {
      var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
  };
  MDCListFoundation2.prototype.getSelectionAttribute = function() {
    return this.useSelectedAttr ? strings$7.ARIA_SELECTED : strings$7.ARIA_CHECKED;
  };
  MDCListFoundation2.prototype.setRadioAtIndex = function(index) {
    var selectionAttribute = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
    if (this.selectedIndex !== numbers$5.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, "false");
    }
    this.adapter.setAttributeForElementIndex(index, selectionAttribute, "true");
    this.selectedIndex = index;
  };
  MDCListFoundation2.prototype.setCheckboxAtIndex = function(index) {
    var selectionAttribute = this.getSelectionAttribute();
    for (var i = 0; i < this.adapter.getListItemCount(); i++) {
      var isChecked = false;
      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }
      this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? "true" : "false");
    }
    this.selectedIndex = index;
  };
  MDCListFoundation2.prototype.setTabindexAtIndex = function(index) {
    if (this.focusedItemIndex === numbers$5.UNSET_INDEX && index !== 0) {
      this.adapter.setAttributeForElementIndex(0, "tabindex", "-1");
    } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1");
    }
    if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1");
    }
    if (index !== numbers$5.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(index, "tabindex", "0");
    }
  };
  MDCListFoundation2.prototype.isSelectableList = function() {
    return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
  };
  MDCListFoundation2.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
    var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
    this.setTabindexAtIndex(targetIndex);
  };
  MDCListFoundation2.prototype.getFirstSelectedOrFocusedItemIndex = function() {
    if (!this.isSelectableList()) {
      return Math.max(this.focusedItemIndex, 0);
    }
    if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers$5.UNSET_INDEX) {
      return this.selectedIndex;
    }
    if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
      return this.selectedIndex.reduce(function(minIndex, currentIndex) {
        return Math.min(minIndex, currentIndex);
      });
    }
    return 0;
  };
  MDCListFoundation2.prototype.isIndexValid = function(index) {
    var _this = this;
    if (index instanceof Array) {
      if (!this.isCheckboxList) {
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      }
      if (index.length === 0) {
        return true;
      } else {
        return index.some(function(i) {
          return _this.isIndexInRange(i);
        });
      }
    } else if (typeof index === "number") {
      if (this.isCheckboxList) {
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
      }
      return this.isIndexInRange(index) || this.isSingleSelectionList && index === numbers$5.UNSET_INDEX;
    } else {
      return false;
    }
  };
  MDCListFoundation2.prototype.isIndexInRange = function(index) {
    var listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  };
  MDCListFoundation2.prototype.setSelectedIndexOnAction = function(index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }
    if (this.isCheckboxList) {
      this.toggleCheckboxAtIndex(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };
  MDCListFoundation2.prototype.toggleCheckboxAtIndex = function(index, toggleCheckbox) {
    var selectionAttribute = this.getSelectionAttribute();
    var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }
    this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? "true" : "false");
    var selectedIndexes = this.selectedIndex === numbers$5.UNSET_INDEX ? [] : this.selectedIndex.slice();
    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function(i) {
        return i !== index;
      });
    }
    this.selectedIndex = selectedIndexes;
  };
  MDCListFoundation2.prototype.focusItemAtIndex = function(index) {
    this.adapter.focusItemAtIndex(index);
    this.focusedItemIndex = index;
  };
  MDCListFoundation2.prototype.toggleAll = function(currentlySelectedIndexes) {
    var count = this.adapter.getListItemCount();
    if (currentlySelectedIndexes.length === count) {
      this.setCheckboxAtIndex([]);
    } else {
      var allIndexes = [];
      for (var i = 0; i < count; i++) {
        if (!this.adapter.listItemAtIndexHasClass(i, cssClasses$6.LIST_ITEM_DISABLED_CLASS) || currentlySelectedIndexes.indexOf(i) > -1) {
          allIndexes.push(i);
        }
      }
      this.setCheckboxAtIndex(allIndexes);
    }
  };
  MDCListFoundation2.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
    var _this = this;
    if (skipFocus === void 0) {
      skipFocus = false;
    }
    var opts = {
      focusItemAtIndex: function(index) {
        _this.focusItemAtIndex(index);
      },
      focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
      nextChar,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus,
      isItemAtIndexDisabled: function(index) {
        return _this.adapter.listItemAtIndexHasClass(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      }
    };
    return matchItem(opts, this.typeaheadState);
  };
  MDCListFoundation2.prototype.typeaheadInitSortedIndex = function() {
    return initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  };
  MDCListFoundation2.prototype.clearTypeaheadBuffer = function() {
    clearBuffer(this.typeaheadState);
  };
  return MDCListFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuSurfaceFoundation = function(_super) {
  __extends$1(MDCMenuSurfaceFoundation2, _super);
  function MDCMenuSurfaceFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
    _this.isSurfaceOpen = false;
    _this.isQuickOpen = false;
    _this.isHoistedElement = false;
    _this.isFixedPosition = false;
    _this.isHorizontallyCenteredOnViewport = false;
    _this.maxHeight = 0;
    _this.openAnimationEndTimerId = 0;
    _this.closeAnimationEndTimerId = 0;
    _this.animationRequestId = 0;
    _this.anchorCorner = Corner.TOP_START;
    _this.originCorner = Corner.TOP_START;
    _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
    _this.position = { x: 0, y: 0 };
    return _this;
  }
  Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$7;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
    get: function() {
      return strings$8;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
    get: function() {
      return numbers$6;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
    get: function() {
      return Corner;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        hasAnchor: function() {
          return false;
        },
        isElementInContainer: function() {
          return false;
        },
        isFocused: function() {
          return false;
        },
        isRtl: function() {
          return false;
        },
        getInnerDimensions: function() {
          return { height: 0, width: 0 };
        },
        getAnchorDimensions: function() {
          return null;
        },
        getWindowDimensions: function() {
          return { height: 0, width: 0 };
        },
        getBodyDimensions: function() {
          return { height: 0, width: 0 };
        },
        getWindowScroll: function() {
          return { x: 0, y: 0 };
        },
        setPosition: function() {
          return void 0;
        },
        setMaxHeight: function() {
          return void 0;
        },
        setTransformOrigin: function() {
          return void 0;
        },
        saveFocus: function() {
          return void 0;
        },
        restoreFocus: function() {
          return void 0;
        },
        notifyClose: function() {
          return void 0;
        },
        notifyOpen: function() {
          return void 0;
        },
        notifyClosing: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuSurfaceFoundation2.prototype.init = function() {
    var _a2 = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a2.ROOT, OPEN = _a2.OPEN;
    if (!this.adapter.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }
    if (this.adapter.hasClass(OPEN)) {
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation2.prototype.destroy = function() {
    clearTimeout(this.openAnimationEndTimerId);
    clearTimeout(this.closeAnimationEndTimerId);
    cancelAnimationFrame(this.animationRequestId);
  };
  MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
    this.anchorCorner = corner;
  };
  MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
    this.originCorner = this.originCorner ^ CornerBit.RIGHT;
  };
  MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
    this.anchorMargin.top = margin.top || 0;
    this.anchorMargin.right = margin.right || 0;
    this.anchorMargin.bottom = margin.bottom || 0;
    this.anchorMargin.left = margin.left || 0;
  };
  MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
    this.isHoistedElement = isHoisted;
  };
  MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
    this.isFixedPosition = isFixedPosition;
  };
  MDCMenuSurfaceFoundation2.prototype.isFixed = function() {
    return this.isFixedPosition;
  };
  MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x, y) {
    this.position.x = this.isFinite(x) ? x : 0;
    this.position.y = this.isFinite(y) ? y : 0;
  };
  MDCMenuSurfaceFoundation2.prototype.setIsHorizontallyCenteredOnViewport = function(isCentered) {
    this.isHorizontallyCenteredOnViewport = isCentered;
  };
  MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
    this.isQuickOpen = quickOpen;
  };
  MDCMenuSurfaceFoundation2.prototype.setMaxHeight = function(maxHeight) {
    this.maxHeight = maxHeight;
  };
  MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
    return this.isSurfaceOpen;
  };
  MDCMenuSurfaceFoundation2.prototype.open = function() {
    var _this = this;
    if (this.isSurfaceOpen) {
      return;
    }
    this.adapter.saveFocus();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = true;
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      this.dimensions = this.adapter.getInnerDimensions();
      this.autoposition();
      this.adapter.notifyOpen();
    } else {
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
      this.animationRequestId = requestAnimationFrame(function() {
        _this.dimensions = _this.adapter.getInnerDimensions();
        _this.autoposition();
        _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.openAnimationEndTimerId = setTimeout(function() {
          _this.openAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
          _this.adapter.notifyOpen();
        }, numbers$6.TRANSITION_OPEN_DURATION);
      });
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
    var _this = this;
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }
    if (!this.isSurfaceOpen) {
      return;
    }
    this.adapter.notifyClosing();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
      this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      this.adapter.notifyClose();
      return;
    }
    this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
    requestAnimationFrame(function() {
      _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      _this.closeAnimationEndTimerId = setTimeout(function() {
        _this.closeAnimationEndTimerId = 0;
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
        _this.adapter.notifyClose();
      }, numbers$6.TRANSITION_CLOSE_DURATION);
    });
    this.isSurfaceOpen = false;
    if (!skipRestoreFocus) {
      this.maybeRestoreFocus();
    }
  };
  MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
    var el = evt.target;
    if (this.adapter.isElementInContainer(el)) {
      return;
    }
    this.close();
  };
  MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
    var keyCode = evt.keyCode, key = evt.key;
    var isEscape = key === "Escape" || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };
  MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
    var _a2;
    this.measurements = this.getAutoLayoutmeasurements();
    var corner = this.getoriginCorner();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
    var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
    var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
    var horizontalOffset = this.getHorizontalOriginOffset(corner);
    var verticalOffset = this.getVerticalOriginOffset(corner);
    var _b2 = this.measurements, anchorSize = _b2.anchorSize, surfaceSize = _b2.surfaceSize;
    var position = (_a2 = {}, _a2[horizontalAlignment] = horizontalOffset, _a2[verticalAlignment] = verticalOffset, _a2);
    if (anchorSize.width / surfaceSize.width > numbers$6.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = "center";
    }
    if (this.isHoistedElement || this.isFixedPosition) {
      this.adjustPositionForHoistedElement(position);
    }
    this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter.setPosition(position);
    this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
    if (!this.hasBit(corner, CornerBit.BOTTOM)) {
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
    }
  };
  MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
    var anchorRect = this.adapter.getAnchorDimensions();
    var bodySize = this.adapter.getBodyDimensions();
    var viewportSize = this.adapter.getWindowDimensions();
    var windowScroll = this.adapter.getWindowScroll();
    if (!anchorRect) {
      anchorRect = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      };
    }
    return {
      anchorSize: anchorRect,
      bodySize,
      surfaceSize: this.dimensions,
      viewportDistance: {
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
      },
      viewportSize,
      windowScroll
    };
  };
  MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
    var corner = this.originCorner;
    var _a2 = this.measurements, viewportDistance = _a2.viewportDistance, anchorSize = _a2.anchorSize, surfaceSize = _a2.surfaceSize;
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
    var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var availableTop;
    var availableBottom;
    if (isAnchoredToBottom) {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
    } else {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
    }
    var isAvailableBottom = availableBottom - surfaceSize.height > 0;
    if (!isAvailableBottom && availableTop > availableBottom) {
      corner = this.setBit(corner, CornerBit.BOTTOM);
    }
    var isRtl = this.adapter.isRtl();
    var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
    var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
    var isAnchoredToRight = false;
    if (isRtl && isFlipRtl) {
      isAnchoredToRight = !hasRightBit;
    } else {
      isAnchoredToRight = hasRightBit;
    }
    var availableLeft;
    var availableRight;
    if (isAnchoredToRight) {
      availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
      availableRight = viewportDistance.right - this.anchorMargin.right;
    } else {
      availableLeft = viewportDistance.left + this.anchorMargin.left;
      availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
    }
    var isAvailableLeft = availableLeft - surfaceSize.width > 0;
    var isAvailableRight = availableRight - surfaceSize.width > 0;
    var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
    if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
      corner = this.unsetBit(corner, CornerBit.RIGHT);
    } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
      corner = this.setBit(corner, CornerBit.RIGHT);
    }
    return corner;
  };
  MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
    if (this.maxHeight > 0) {
      return this.maxHeight;
    }
    var viewportDistance = this.measurements.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
      if (!isBottomAnchored) {
        maxHeight += this.measurements.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
      if (isBottomAnchored) {
        maxHeight -= this.measurements.anchorSize.height;
      }
    }
    return maxHeight;
  };
  MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
    var anchorSize = this.measurements.anchorSize;
    var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
    var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
      if (this.isHoistedElement || this.isFixedPosition) {
        return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
      }
      return rightOffset;
    }
    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
  };
  MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
    var anchorSize = this.measurements.anchorSize;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var y = 0;
    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
    }
    return y;
  };
  MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
    var e_1, _a2;
    var _b2 = this.measurements, windowScroll = _b2.windowScroll, viewportDistance = _b2.viewportDistance, surfaceSize = _b2.surfaceSize, viewportSize = _b2.viewportSize;
    var props = Object.keys(position);
    try {
      for (var props_1 = __values$1(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0;
        if (this.isHorizontallyCenteredOnViewport && (prop === "left" || prop === "right")) {
          position[prop] = (viewportSize.width - surfaceSize.width) / 2;
          continue;
        }
        value += viewportDistance[prop];
        if (!this.isFixedPosition) {
          if (prop === "top") {
            value += windowScroll.y;
          } else if (prop === "bottom") {
            value -= windowScroll.y;
          } else if (prop === "left") {
            value += windowScroll.x;
          } else {
            value -= windowScroll.x;
          }
        }
        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
          _a2.call(props_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
    var _this = this;
    var isRootFocused = this.adapter.isFocused();
    var childHasFocus = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
    if (isRootFocused || childHasFocus) {
      setTimeout(function() {
        _this.adapter.restoreFocus();
      }, numbers$6.TOUCH_EVENT_WAIT_MS);
    }
  };
  MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
    return Boolean(corner & bit);
  };
  MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
    return corner | bit;
  };
  MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
    return corner ^ bit;
  };
  MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
    return typeof num === "number" && isFinite(num);
  };
  return MDCMenuSurfaceFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$5 = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
};
var strings$6 = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
};
var numbers$4 = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;
(function(DefaultFocusState2) {
  DefaultFocusState2[DefaultFocusState2["NONE"] = 0] = "NONE";
  DefaultFocusState2[DefaultFocusState2["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState2[DefaultFocusState2["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState2[DefaultFocusState2["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuFoundation = function(_super) {
  __extends$1(MDCMenuFoundation2, _super);
  function MDCMenuFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation2.defaultAdapter), adapter)) || this;
    _this.closeAnimationEndTimerId = 0;
    _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
    _this.selectedIndex = -1;
    return _this;
  }
  Object.defineProperty(MDCMenuFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$5;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "strings", {
    get: function() {
      return strings$6;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "numbers", {
    get: function() {
      return numbers$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClassToElementAtIndex: function() {
          return void 0;
        },
        removeClassFromElementAtIndex: function() {
          return void 0;
        },
        addAttributeToElementAtIndex: function() {
          return void 0;
        },
        removeAttributeFromElementAtIndex: function() {
          return void 0;
        },
        getAttributeFromElementAtIndex: function() {
          return null;
        },
        elementContainsClass: function() {
          return false;
        },
        closeSurface: function() {
          return void 0;
        },
        getElementIndex: function() {
          return -1;
        },
        notifySelected: function() {
          return void 0;
        },
        getMenuItemCount: function() {
          return 0;
        },
        focusItemAtIndex: function() {
          return void 0;
        },
        focusListRoot: function() {
          return void 0;
        },
        getSelectedSiblingOfItemAtIndex: function() {
          return -1;
        },
        isSelectableItemAtIndex: function() {
          return false;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuFoundation2.prototype.destroy = function() {
    if (this.closeAnimationEndTimerId) {
      clearTimeout(this.closeAnimationEndTimerId);
    }
    this.adapter.closeSurface();
  };
  MDCMenuFoundation2.prototype.handleKeydown = function(evt) {
    var key = evt.key, keyCode = evt.keyCode;
    var isTab = key === "Tab" || keyCode === 9;
    if (isTab) {
      this.adapter.closeSurface(true);
    }
  };
  MDCMenuFoundation2.prototype.handleItemAction = function(listItem) {
    var _this = this;
    var index = this.adapter.getElementIndex(listItem);
    if (index < 0) {
      return;
    }
    this.adapter.notifySelected({ index });
    var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings$6.SKIP_RESTORE_FOCUS) === "true";
    this.adapter.closeSurface(skipRestoreFocus);
    this.closeAnimationEndTimerId = setTimeout(function() {
      var recomputedIndex = _this.adapter.getElementIndex(listItem);
      if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };
  MDCMenuFoundation2.prototype.handleMenuSurfaceOpened = function() {
    switch (this.defaultFocusState) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;
      case DefaultFocusState.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;
      case DefaultFocusState.NONE:
        break;
      default:
        this.adapter.focusListRoot();
        break;
    }
  };
  MDCMenuFoundation2.prototype.setDefaultFocusState = function(focusState) {
    this.defaultFocusState = focusState;
  };
  MDCMenuFoundation2.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  };
  MDCMenuFoundation2.prototype.setSelectedIndex = function(index) {
    this.validatedIndex(index);
    if (!this.adapter.isSelectableItemAtIndex(index)) {
      throw new Error("MDCMenuFoundation: No selection group at specified index.");
    }
    var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
    if (prevSelectedIndex >= 0) {
      this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$6.ARIA_CHECKED_ATTR);
      this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$5.MENU_SELECTED_LIST_ITEM);
    }
    this.adapter.addClassToElementAtIndex(index, cssClasses$5.MENU_SELECTED_LIST_ITEM);
    this.adapter.addAttributeToElementAtIndex(index, strings$6.ARIA_CHECKED_ATTR, "true");
    this.selectedIndex = index;
  };
  MDCMenuFoundation2.prototype.setEnabled = function(index, isEnabled) {
    this.validatedIndex(index);
    if (isEnabled) {
      this.adapter.removeClassFromElementAtIndex(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$6.ARIA_DISABLED_ATTR, "false");
    } else {
      this.adapter.addClassToElementAtIndex(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$6.ARIA_DISABLED_ATTR, "true");
    }
  };
  MDCMenuFoundation2.prototype.validatedIndex = function(index) {
    var menuSize = this.adapter.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;
    if (!isIndexInRange) {
      throw new Error("MDCMenuFoundation: No list item at specified index.");
    }
  };
  return MDCMenuFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$5 = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
};
var numbers$3 = {
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses$4 = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCNotchedOutlineFoundation = function(_super) {
  __extends$1(MDCNotchedOutlineFoundation2, _super);
  function MDCNotchedOutlineFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCNotchedOutlineFoundation2, "strings", {
    get: function() {
      return strings$5;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation2, "numbers", {
    get: function() {
      return numbers$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        setNotchWidthProperty: function() {
          return void 0;
        },
        removeNotchWidthProperty: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCNotchedOutlineFoundation2.prototype.notch = function(notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
    if (notchWidth > 0) {
      notchWidth += numbers$3.NOTCH_ELEMENT_PADDING;
    }
    this.adapter.setNotchWidthProperty(notchWidth);
    this.adapter.addClass(OUTLINE_NOTCHED);
  };
  MDCNotchedOutlineFoundation2.prototype.closeNotch = function() {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
    this.adapter.removeClass(OUTLINE_NOTCHED);
    this.adapter.removeNotchWidthProperty();
  };
  return MDCNotchedOutlineFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$3 = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
};
var strings$4 = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
};
var numbers$2 = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCSelectFoundation = function(_super) {
  __extends$1(MDCSelectFoundation2, _super);
  function MDCSelectFoundation2(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }
    var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation2.defaultAdapter), adapter)) || this;
    _this.disabled = false;
    _this.isMenuOpen = false;
    _this.useDefaultValidation = true;
    _this.customValidity = true;
    _this.lastSelectedIndex = numbers$2.UNSET_INDEX;
    _this.clickDebounceTimeout = 0;
    _this.recentlyClicked = false;
    _this.leadingIcon = foundationMap.leadingIcon;
    _this.helperText = foundationMap.helperText;
    return _this;
  }
  Object.defineProperty(MDCSelectFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation2, "numbers", {
    get: function() {
      return numbers$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation2, "strings", {
    get: function() {
      return strings$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        activateBottomLine: function() {
          return void 0;
        },
        deactivateBottomLine: function() {
          return void 0;
        },
        getSelectedIndex: function() {
          return -1;
        },
        setSelectedIndex: function() {
          return void 0;
        },
        hasLabel: function() {
          return false;
        },
        floatLabel: function() {
          return void 0;
        },
        getLabelWidth: function() {
          return 0;
        },
        setLabelRequired: function() {
          return void 0;
        },
        hasOutline: function() {
          return false;
        },
        notchOutline: function() {
          return void 0;
        },
        closeOutline: function() {
          return void 0;
        },
        setRippleCenter: function() {
          return void 0;
        },
        notifyChange: function() {
          return void 0;
        },
        setSelectedText: function() {
          return void 0;
        },
        isSelectAnchorFocused: function() {
          return false;
        },
        getSelectAnchorAttr: function() {
          return "";
        },
        setSelectAnchorAttr: function() {
          return void 0;
        },
        removeSelectAnchorAttr: function() {
          return void 0;
        },
        addMenuClass: function() {
          return void 0;
        },
        removeMenuClass: function() {
          return void 0;
        },
        openMenu: function() {
          return void 0;
        },
        closeMenu: function() {
          return void 0;
        },
        getAnchorElement: function() {
          return null;
        },
        setMenuAnchorElement: function() {
          return void 0;
        },
        setMenuAnchorCorner: function() {
          return void 0;
        },
        setMenuWrapFocus: function() {
          return void 0;
        },
        focusMenuItemAtIndex: function() {
          return void 0;
        },
        getMenuItemCount: function() {
          return 0;
        },
        getMenuItemValues: function() {
          return [];
        },
        getMenuItemTextAtIndex: function() {
          return "";
        },
        isTypeaheadInProgress: function() {
          return false;
        },
        typeaheadMatchItem: function() {
          return -1;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectFoundation2.prototype.getSelectedIndex = function() {
    return this.adapter.getSelectedIndex();
  };
  MDCSelectFoundation2.prototype.setSelectedIndex = function(index, closeMenu, skipNotify) {
    if (closeMenu === void 0) {
      closeMenu = false;
    }
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    if (index >= this.adapter.getMenuItemCount()) {
      return;
    }
    if (index === numbers$2.UNSET_INDEX) {
      this.adapter.setSelectedText("");
    } else {
      this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
    }
    this.adapter.setSelectedIndex(index);
    if (closeMenu) {
      this.adapter.closeMenu();
    }
    if (!skipNotify && this.lastSelectedIndex !== index) {
      this.handleChange();
    }
    this.lastSelectedIndex = index;
  };
  MDCSelectFoundation2.prototype.setValue = function(value, skipNotify) {
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    var index = this.adapter.getMenuItemValues().indexOf(value);
    this.setSelectedIndex(index, false, skipNotify);
  };
  MDCSelectFoundation2.prototype.getValue = function() {
    var index = this.adapter.getSelectedIndex();
    var menuItemValues = this.adapter.getMenuItemValues();
    return index !== numbers$2.UNSET_INDEX ? menuItemValues[index] : "";
  };
  MDCSelectFoundation2.prototype.getDisabled = function() {
    return this.disabled;
  };
  MDCSelectFoundation2.prototype.setDisabled = function(isDisabled) {
    this.disabled = isDisabled;
    if (this.disabled) {
      this.adapter.addClass(cssClasses$3.DISABLED);
      this.adapter.closeMenu();
    } else {
      this.adapter.removeClass(cssClasses$3.DISABLED);
    }
    if (this.leadingIcon) {
      this.leadingIcon.setDisabled(this.disabled);
    }
    if (this.disabled) {
      this.adapter.removeSelectAnchorAttr("tabindex");
    } else {
      this.adapter.setSelectAnchorAttr("tabindex", "0");
    }
    this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
  };
  MDCSelectFoundation2.prototype.openMenu = function() {
    this.adapter.addClass(cssClasses$3.ACTIVATED);
    this.adapter.openMenu();
    this.isMenuOpen = true;
    this.adapter.setSelectAnchorAttr("aria-expanded", "true");
  };
  MDCSelectFoundation2.prototype.setHelperTextContent = function(content) {
    if (this.helperText) {
      this.helperText.setContent(content);
    }
  };
  MDCSelectFoundation2.prototype.layout = function() {
    if (this.adapter.hasLabel()) {
      var optionHasValue = this.getValue().length > 0;
      var isFocused = this.adapter.hasClass(cssClasses$3.FOCUSED);
      var shouldFloatAndNotch = optionHasValue || isFocused;
      var isRequired = this.adapter.hasClass(cssClasses$3.REQUIRED);
      this.notchOutline(shouldFloatAndNotch);
      this.adapter.floatLabel(shouldFloatAndNotch);
      this.adapter.setLabelRequired(isRequired);
    }
  };
  MDCSelectFoundation2.prototype.layoutOptions = function() {
    var menuItemValues = this.adapter.getMenuItemValues();
    var selectedIndex = menuItemValues.indexOf(this.getValue());
    this.setSelectedIndex(selectedIndex, false, true);
  };
  MDCSelectFoundation2.prototype.handleMenuOpened = function() {
    if (this.adapter.getMenuItemValues().length === 0) {
      return;
    }
    var selectedIndex = this.getSelectedIndex();
    var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
    this.adapter.focusMenuItemAtIndex(focusItemIndex);
  };
  MDCSelectFoundation2.prototype.handleMenuClosing = function() {
    this.adapter.setSelectAnchorAttr("aria-expanded", "false");
  };
  MDCSelectFoundation2.prototype.handleMenuClosed = function() {
    this.adapter.removeClass(cssClasses$3.ACTIVATED);
    this.isMenuOpen = false;
    if (!this.adapter.isSelectAnchorFocused()) {
      this.blur();
    }
  };
  MDCSelectFoundation2.prototype.handleChange = function() {
    this.layout();
    this.adapter.notifyChange(this.getValue());
    var isRequired = this.adapter.hasClass(cssClasses$3.REQUIRED);
    if (isRequired && this.useDefaultValidation) {
      this.setValid(this.isValid());
    }
  };
  MDCSelectFoundation2.prototype.handleMenuItemAction = function(index) {
    this.setSelectedIndex(index, true);
  };
  MDCSelectFoundation2.prototype.handleFocus = function() {
    this.adapter.addClass(cssClasses$3.FOCUSED);
    this.layout();
    this.adapter.activateBottomLine();
  };
  MDCSelectFoundation2.prototype.handleBlur = function() {
    if (this.isMenuOpen) {
      return;
    }
    this.blur();
  };
  MDCSelectFoundation2.prototype.handleClick = function(normalizedX) {
    if (this.disabled || this.recentlyClicked) {
      return;
    }
    this.setClickDebounceTimeout();
    if (this.isMenuOpen) {
      this.adapter.closeMenu();
      return;
    }
    this.adapter.setRippleCenter(normalizedX);
    this.openMenu();
  };
  MDCSelectFoundation2.prototype.handleKeydown = function(event) {
    if (this.isMenuOpen || !this.adapter.hasClass(cssClasses$3.FOCUSED)) {
      return;
    }
    var isEnter = normalizeKey(event) === KEY.ENTER;
    var isSpace = normalizeKey(event) === KEY.SPACEBAR;
    var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
    var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
    var isModifier = event.ctrlKey || event.metaKey;
    if (!isModifier && (!isSpace && event.key && event.key.length === 1 || isSpace && this.adapter.isTypeaheadInProgress())) {
      var key = isSpace ? " " : event.key;
      var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
      if (typeaheadNextIndex >= 0) {
        this.setSelectedIndex(typeaheadNextIndex);
      }
      event.preventDefault();
      return;
    }
    if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
      return;
    }
    if (arrowUp && this.getSelectedIndex() > 0) {
      this.setSelectedIndex(this.getSelectedIndex() - 1);
    } else if (arrowDown && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
      this.setSelectedIndex(this.getSelectedIndex() + 1);
    }
    this.openMenu();
    event.preventDefault();
  };
  MDCSelectFoundation2.prototype.notchOutline = function(openNotch) {
    if (!this.adapter.hasOutline()) {
      return;
    }
    var isFocused = this.adapter.hasClass(cssClasses$3.FOCUSED);
    if (openNotch) {
      var labelScale = numbers$2.LABEL_SCALE;
      var labelWidth = this.adapter.getLabelWidth() * labelScale;
      this.adapter.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter.closeOutline();
    }
  };
  MDCSelectFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
    if (this.leadingIcon) {
      this.leadingIcon.setAriaLabel(label);
    }
  };
  MDCSelectFoundation2.prototype.setLeadingIconContent = function(content) {
    if (this.leadingIcon) {
      this.leadingIcon.setContent(content);
    }
  };
  MDCSelectFoundation2.prototype.getUseDefaultValidation = function() {
    return this.useDefaultValidation;
  };
  MDCSelectFoundation2.prototype.setUseDefaultValidation = function(useDefaultValidation) {
    this.useDefaultValidation = useDefaultValidation;
  };
  MDCSelectFoundation2.prototype.setValid = function(isValid) {
    if (!this.useDefaultValidation) {
      this.customValidity = isValid;
    }
    this.adapter.setSelectAnchorAttr("aria-invalid", (!isValid).toString());
    if (isValid) {
      this.adapter.removeClass(cssClasses$3.INVALID);
      this.adapter.removeMenuClass(cssClasses$3.MENU_INVALID);
    } else {
      this.adapter.addClass(cssClasses$3.INVALID);
      this.adapter.addMenuClass(cssClasses$3.MENU_INVALID);
    }
    this.syncHelperTextValidity(isValid);
  };
  MDCSelectFoundation2.prototype.isValid = function() {
    if (this.useDefaultValidation && this.adapter.hasClass(cssClasses$3.REQUIRED) && !this.adapter.hasClass(cssClasses$3.DISABLED)) {
      return this.getSelectedIndex() !== numbers$2.UNSET_INDEX && (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
    }
    return this.customValidity;
  };
  MDCSelectFoundation2.prototype.setRequired = function(isRequired) {
    if (isRequired) {
      this.adapter.addClass(cssClasses$3.REQUIRED);
    } else {
      this.adapter.removeClass(cssClasses$3.REQUIRED);
    }
    this.adapter.setSelectAnchorAttr("aria-required", isRequired.toString());
    this.adapter.setLabelRequired(isRequired);
  };
  MDCSelectFoundation2.prototype.getRequired = function() {
    return this.adapter.getSelectAnchorAttr("aria-required") === "true";
  };
  MDCSelectFoundation2.prototype.init = function() {
    var anchorEl = this.adapter.getAnchorElement();
    if (anchorEl) {
      this.adapter.setMenuAnchorElement(anchorEl);
      this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
    }
    this.adapter.setMenuWrapFocus(false);
    this.setDisabled(this.adapter.hasClass(cssClasses$3.DISABLED));
    this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses$3.INVALID));
    this.layout();
    this.layoutOptions();
  };
  MDCSelectFoundation2.prototype.blur = function() {
    this.adapter.removeClass(cssClasses$3.FOCUSED);
    this.layout();
    this.adapter.deactivateBottomLine();
    var isRequired = this.adapter.hasClass(cssClasses$3.REQUIRED);
    if (isRequired && this.useDefaultValidation) {
      this.setValid(this.isValid());
    }
  };
  MDCSelectFoundation2.prototype.syncHelperTextValidity = function(isValid) {
    if (!this.helperText) {
      return;
    }
    this.helperText.setValidity(isValid);
    var helperTextVisible = this.helperText.isVisible();
    var helperTextId = this.helperText.getId();
    if (helperTextVisible && helperTextId) {
      this.adapter.setSelectAnchorAttr(strings$4.ARIA_DESCRIBEDBY, helperTextId);
    } else {
      this.adapter.removeSelectAnchorAttr(strings$4.ARIA_DESCRIBEDBY);
    }
  };
  MDCSelectFoundation2.prototype.setClickDebounceTimeout = function() {
    var _this = this;
    clearTimeout(this.clickDebounceTimeout);
    this.clickDebounceTimeout = setTimeout(function() {
      _this.recentlyClicked = false;
    }, numbers$2.CLICK_DEBOUNCE_TIMEOUT_MS);
    this.recentlyClicked = true;
  };
  return MDCSelectFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$3 = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
};
var cssClasses$2 = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCSelectHelperTextFoundation = function(_super) {
  __extends$1(MDCSelectHelperTextFoundation2, _super);
  function MDCSelectHelperTextFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCSelectHelperTextFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCSelectHelperTextFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation2, "strings", {
    get: function() {
      return strings$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        setAttr: function() {
          return void 0;
        },
        getAttr: function() {
          return null;
        },
        removeAttr: function() {
          return void 0;
        },
        setContent: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectHelperTextFoundation2.prototype.getId = function() {
    return this.adapter.getAttr("id");
  };
  MDCSelectHelperTextFoundation2.prototype.isVisible = function() {
    return this.adapter.getAttr(strings$3.ARIA_HIDDEN) !== "true";
  };
  MDCSelectHelperTextFoundation2.prototype.setContent = function(content) {
    this.adapter.setContent(content);
  };
  MDCSelectHelperTextFoundation2.prototype.setValidation = function(isValidation) {
    if (isValidation) {
      this.adapter.addClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter.removeClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  MDCSelectHelperTextFoundation2.prototype.setValidationMsgPersistent = function(isPersistent) {
    if (isPersistent) {
      this.adapter.addClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    } else {
      this.adapter.removeClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }
  };
  MDCSelectHelperTextFoundation2.prototype.setValidity = function(selectIsValid) {
    var isValidationMsg = this.adapter.hasClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG);
    if (!isValidationMsg) {
      return;
    }
    var isPersistentValidationMsg = this.adapter.hasClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    var msgShouldDisplay = !selectIsValid || isPersistentValidationMsg;
    if (msgShouldDisplay) {
      this.showToScreenReader();
      if (!selectIsValid) {
        this.adapter.setAttr(strings$3.ROLE, "alert");
      } else {
        this.adapter.removeAttr(strings$3.ROLE);
      }
      return;
    }
    this.adapter.removeAttr(strings$3.ROLE);
    this.hide();
  };
  MDCSelectHelperTextFoundation2.prototype.showToScreenReader = function() {
    this.adapter.removeAttr(strings$3.ARIA_HIDDEN);
  };
  MDCSelectHelperTextFoundation2.prototype.hide = function() {
    this.adapter.setAttr(strings$3.ARIA_HIDDEN, "true");
  };
  return MDCSelectHelperTextFoundation2;
}(MDCFoundation);
const { document: document_1 } = globals;
function create_fragment$l(ctx) {
  let t;
  let div;
  let slot;
  let div_class_value;
  let div_style_value;
  let useActions_action;
  let mounted;
  let dispose;
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[2]]: true,
        "mdc-menu-surface": true,
        "mdc-menu-surface--fixed": ctx[5],
        "mdc-menu-surface--open": ctx[4],
        "smui-menu-surface--static": ctx[4],
        "mdc-menu-surface--fullwidth": ctx[7],
        ...ctx[10]
      })
    },
    {
      style: div_style_value = Object.entries(ctx[11]).map(func$8).concat([ctx[3]]).join(" ")
    },
    ctx[13]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      t = space();
      div = element("div");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, t, anchor);
      insert(target, div, anchor);
      append(div, slot);
      ctx[31](div);
      if (!mounted) {
        dispose = [
          listen(document_1.body, "click", ctx[30], true),
          action_destroyer(useActions_action = useActions.call(null, div, ctx[1])),
          action_destroyer(ctx[12].call(null, div)),
          listen(div, "keydown", ctx[32])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty[0] & 1204 && div_class_value !== (div_class_value = classMap({
          [ctx2[2]]: true,
          "mdc-menu-surface": true,
          "mdc-menu-surface--fixed": ctx2[5],
          "mdc-menu-surface--open": ctx2[4],
          "smui-menu-surface--static": ctx2[4],
          "mdc-menu-surface--fullwidth": ctx2[7],
          ...ctx2[10]
        })) && { class: div_class_value },
        dirty[0] & 2056 && div_style_value !== (div_style_value = Object.entries(ctx2[11]).map(func$8).concat([ctx2[3]]).join(" ")) && { style: div_style_value },
        dirty[0] & 8192 && ctx2[13]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 2)
        useActions_action.update.call(null, ctx2[1]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      ctx[31](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func$8 = ([name, value]) => `${name}: ${value};`;
function instance_1$b($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "isOpen",
    "setOpen",
    "setAbsolutePosition",
    "setIsHoisted",
    "isFixed",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  var _a2, _b2, _c;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { static: isStatic = false } = $$props;
  let { anchor = true } = $$props;
  let { fixed = false } = $$props;
  let { open = isStatic } = $$props;
  let { managed = false } = $$props;
  let { fullWidth = false } = $$props;
  let { quickOpen = false } = $$props;
  let { anchorElement = void 0 } = $$props;
  let { anchorCorner = void 0 } = $$props;
  let { anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 } } = $$props;
  let { maxHeight = 0 } = $$props;
  let { horizontallyCenteredOnViewport = false } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  let previousFocus = void 0;
  setContext("SMUI:list:role", "menu");
  setContext("SMUI:list:item:role", "menuitem");
  const iCorner = Corner;
  onMount(() => {
    $$invalidate(9, instance2 = new MDCMenuSurfaceFoundation({
      addClass,
      removeClass,
      hasClass,
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        if (!managed) {
          $$invalidate(0, open = isStatic);
        }
        if (!open) {
          dispatch(element2, "SMUIMenuSurface:closed", void 0, void 0, true);
        }
      },
      notifyClosing: () => {
        if (!managed) {
          $$invalidate(0, open = isStatic);
        }
        if (!open) {
          dispatch(element2, "SMUIMenuSurface:closing", void 0, void 0, true);
        }
      },
      notifyOpen: () => {
        if (!managed) {
          $$invalidate(0, open = true);
        }
        if (open) {
          dispatch(element2, "SMUIMenuSurface:opened", void 0, void 0, true);
        }
      },
      isElementInContainer: (el) => element2.contains(el),
      isRtl: () => getComputedStyle(element2).getPropertyValue("direction") === "rtl",
      setTransformOrigin: (origin) => {
        $$invalidate(11, internalStyles["transform-origin"] = origin, internalStyles);
      },
      isFocused: () => document.activeElement === element2,
      saveFocus: () => {
        var _a3;
        previousFocus = (_a3 = document.activeElement) !== null && _a3 !== void 0 ? _a3 : void 0;
      },
      restoreFocus: () => {
        if ((!element2 || element2.contains(document.activeElement)) && previousFocus && document.contains(previousFocus) && "focus" in previousFocus) {
          previousFocus.focus();
        }
      },
      getInnerDimensions: () => {
        return {
          width: element2.offsetWidth,
          height: element2.offsetHeight
        };
      },
      getAnchorDimensions: () => anchorElement ? anchorElement.getBoundingClientRect() : null,
      getWindowDimensions: () => {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      getBodyDimensions: () => {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      },
      getWindowScroll: () => {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      setPosition: (position) => {
        $$invalidate(11, internalStyles.left = "left" in position ? `${position.left}px` : "", internalStyles);
        $$invalidate(11, internalStyles.right = "right" in position ? `${position.right}px` : "", internalStyles);
        $$invalidate(11, internalStyles.top = "top" in position ? `${position.top}px` : "", internalStyles);
        $$invalidate(11, internalStyles.bottom = "bottom" in position ? `${position.bottom}px` : "", internalStyles);
      },
      setMaxHeight: (height) => {
        $$invalidate(11, internalStyles.maxHeight = height, internalStyles);
      }
    }));
    const accessor = {
      get open() {
        return open;
      },
      set open(value) {
        $$invalidate(0, open = value);
      },
      closeProgrammatic
    };
    dispatch(element2, "SMUIMenuSurface:mount", accessor);
    instance2.init();
    return () => {
      var _a3;
      const isHoisted = instance2.isHoistedElement;
      instance2.destroy();
      if (isHoisted) {
        (_a3 = element2.parentNode) === null || _a3 === void 0 ? void 0 : _a3.removeChild(element2);
      }
    };
  });
  onDestroy(() => {
    var _a3;
    if (anchor) {
      element2 && ((_a3 = element2.parentElement) === null || _a3 === void 0 ? void 0 : _a3.classList.remove("mdc-menu-surface--anchor"));
    }
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(10, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(10, internalClasses[className2] = false, internalClasses);
    }
  }
  function closeProgrammatic(skipRestoreFocus) {
    instance2.close(skipRestoreFocus);
    $$invalidate(0, open = false);
  }
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    $$invalidate(0, open = value);
  }
  function setAbsolutePosition(x, y) {
    return instance2.setAbsolutePosition(x, y);
  }
  function setIsHoisted(isHoisted) {
    return instance2.setIsHoisted(isHoisted);
  }
  function isFixed() {
    return instance2.isFixed();
  }
  function getElement() {
    return element2;
  }
  const click_handler = (event) => instance2 && open && !managed && instance2.handleBodyClick(event);
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(8, element2);
    });
  }
  const keydown_handler = (event) => instance2 && instance2.handleKeydown(event);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(13, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(1, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(2, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("static" in $$new_props)
      $$invalidate(4, isStatic = $$new_props.static);
    if ("anchor" in $$new_props)
      $$invalidate(15, anchor = $$new_props.anchor);
    if ("fixed" in $$new_props)
      $$invalidate(5, fixed = $$new_props.fixed);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("managed" in $$new_props)
      $$invalidate(6, managed = $$new_props.managed);
    if ("fullWidth" in $$new_props)
      $$invalidate(7, fullWidth = $$new_props.fullWidth);
    if ("quickOpen" in $$new_props)
      $$invalidate(16, quickOpen = $$new_props.quickOpen);
    if ("anchorElement" in $$new_props)
      $$invalidate(14, anchorElement = $$new_props.anchorElement);
    if ("anchorCorner" in $$new_props)
      $$invalidate(17, anchorCorner = $$new_props.anchorCorner);
    if ("anchorMargin" in $$new_props)
      $$invalidate(18, anchorMargin = $$new_props.anchorMargin);
    if ("maxHeight" in $$new_props)
      $$invalidate(19, maxHeight = $$new_props.maxHeight);
    if ("horizontallyCenteredOnViewport" in $$new_props)
      $$invalidate(20, horizontallyCenteredOnViewport = $$new_props.horizontallyCenteredOnViewport);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 939557120) {
      if (element2 && anchor && !($$invalidate(27, _a2 = element2.parentElement) === null || _a2 === void 0 ? void 0 : _a2.classList.contains("mdc-menu-surface--anchor"))) {
        $$invalidate(28, _b2 = element2.parentElement) === null || _b2 === void 0 ? void 0 : _b2.classList.add("mdc-menu-surface--anchor");
        $$invalidate(14, anchorElement = $$invalidate(29, _c = element2.parentElement) !== null && _c !== void 0 ? _c : void 0);
      }
    }
    if ($$self.$$.dirty[0] & 513) {
      if (instance2 && instance2.isOpen() !== open) {
        if (open) {
          instance2.open();
        } else {
          instance2.close();
        }
      }
    }
    if ($$self.$$.dirty[0] & 66048) {
      if (instance2) {
        instance2.setQuickOpen(quickOpen);
      }
    }
    if ($$self.$$.dirty[0] & 544) {
      if (instance2) {
        instance2.setFixedPosition(fixed);
      }
    }
    if ($$self.$$.dirty[0] & 524800) {
      if (instance2 && maxHeight > 0) {
        instance2.setMaxHeight(maxHeight);
      }
    }
    if ($$self.$$.dirty[0] & 1049088) {
      if (instance2) {
        instance2.setIsHorizontallyCenteredOnViewport(horizontallyCenteredOnViewport);
      }
    }
    if ($$self.$$.dirty[0] & 131584) {
      if (instance2 && anchorCorner != null) {
        if (typeof anchorCorner === "string") {
          instance2.setAnchorCorner(iCorner[anchorCorner]);
        } else {
          instance2.setAnchorCorner(anchorCorner);
        }
      }
    }
    if ($$self.$$.dirty[0] & 262656) {
      if (instance2) {
        instance2.setAnchorMargin(anchorMargin);
      }
    }
  };
  return [
    open,
    use2,
    className,
    style,
    isStatic,
    fixed,
    managed,
    fullWidth,
    element2,
    instance2,
    internalClasses,
    internalStyles,
    forwardEvents,
    $$restProps,
    anchorElement,
    anchor,
    quickOpen,
    anchorCorner,
    anchorMargin,
    maxHeight,
    horizontallyCenteredOnViewport,
    isOpen,
    setOpen,
    setAbsolutePosition,
    setIsHoisted,
    isFixed,
    getElement,
    _a2,
    _b2,
    _c,
    click_handler,
    div_binding,
    keydown_handler
  ];
}
class MenuSurface extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$b, create_fragment$l, safe_not_equal, {
      use: 1,
      class: 2,
      style: 3,
      static: 4,
      anchor: 15,
      fixed: 5,
      open: 0,
      managed: 6,
      fullWidth: 7,
      quickOpen: 16,
      anchorElement: 14,
      anchorCorner: 17,
      anchorMargin: 18,
      maxHeight: 19,
      horizontallyCenteredOnViewport: 20,
      isOpen: 21,
      setOpen: 22,
      setAbsolutePosition: 23,
      setIsHoisted: 24,
      isFixed: 25,
      getElement: 26
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "static",
      "anchor",
      "fixed",
      "open",
      "managed",
      "fullWidth",
      "quickOpen",
      "anchorElement",
      "anchorCorner",
      "anchorMargin",
      "maxHeight",
      "horizontallyCenteredOnViewport",
      "isOpen",
      "setOpen",
      "setAbsolutePosition",
      "setIsHoisted",
      "isFixed",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get static() {
    return this.$$.ctx[4];
  }
  set static(isStatic) {
    this.$$set({ static: isStatic });
    flush();
  }
  get anchor() {
    return this.$$.ctx[15];
  }
  set anchor(anchor) {
    this.$$set({ anchor });
    flush();
  }
  get fixed() {
    return this.$$.ctx[5];
  }
  set fixed(fixed) {
    this.$$set({ fixed });
    flush();
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(open) {
    this.$$set({ open });
    flush();
  }
  get managed() {
    return this.$$.ctx[6];
  }
  set managed(managed) {
    this.$$set({ managed });
    flush();
  }
  get fullWidth() {
    return this.$$.ctx[7];
  }
  set fullWidth(fullWidth) {
    this.$$set({ fullWidth });
    flush();
  }
  get quickOpen() {
    return this.$$.ctx[16];
  }
  set quickOpen(quickOpen) {
    this.$$set({ quickOpen });
    flush();
  }
  get anchorElement() {
    return this.$$.ctx[14];
  }
  set anchorElement(anchorElement) {
    this.$$set({ anchorElement });
    flush();
  }
  get anchorCorner() {
    return this.$$.ctx[17];
  }
  set anchorCorner(anchorCorner) {
    this.$$set({ anchorCorner });
    flush();
  }
  get anchorMargin() {
    return this.$$.ctx[18];
  }
  set anchorMargin(anchorMargin) {
    this.$$set({ anchorMargin });
    flush();
  }
  get maxHeight() {
    return this.$$.ctx[19];
  }
  set maxHeight(maxHeight) {
    this.$$set({ maxHeight });
    flush();
  }
  get horizontallyCenteredOnViewport() {
    return this.$$.ctx[20];
  }
  set horizontallyCenteredOnViewport(horizontallyCenteredOnViewport) {
    this.$$set({ horizontallyCenteredOnViewport });
    flush();
  }
  get isOpen() {
    return this.$$.ctx[21];
  }
  get setOpen() {
    return this.$$.ctx[22];
  }
  get setAbsolutePosition() {
    return this.$$.ctx[23];
  }
  get setIsHoisted() {
    return this.$$.ctx[24];
  }
  get isFixed() {
    return this.$$.ctx[25];
  }
  get getElement() {
    return this.$$.ctx[26];
  }
}
function Anchor(node, { addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className) } = {}) {
  addClass("mdc-menu-surface--anchor");
  return {
    destroy() {
      removeClass("mdc-menu-surface--anchor");
    }
  };
}
function create_default_slot$8(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$k(ctx) {
  let menusurface;
  let updating_open;
  let current;
  const menusurface_spread_levels = [
    { use: ctx[5] },
    {
      class: classMap({
        [ctx[1]]: true,
        "mdc-menu": true
      })
    },
    ctx[9]
  ];
  function menusurface_open_binding(value) {
    ctx[17](value);
  }
  let menusurface_props = {
    $$slots: { default: [create_default_slot$8] },
    $$scope: { ctx }
  };
  for (let i = 0; i < menusurface_spread_levels.length; i += 1) {
    menusurface_props = assign(menusurface_props, menusurface_spread_levels[i]);
  }
  if (ctx[0] !== void 0) {
    menusurface_props.open = ctx[0];
  }
  menusurface = new MenuSurface({ props: menusurface_props });
  ctx[16](menusurface);
  binding_callbacks.push(() => bind$4(menusurface, "open", menusurface_open_binding));
  menusurface.$on("SMUIMenuSurface:mount", ctx[7]);
  menusurface.$on("SMUIList:mount", ctx[8]);
  menusurface.$on("SMUIMenuSurface:opened", ctx[18]);
  menusurface.$on("keydown", ctx[6]);
  menusurface.$on("SMUIList:action", ctx[19]);
  return {
    c() {
      create_component(menusurface.$$.fragment);
      this.c = noop$1;
    },
    m(target, anchor) {
      mount_component(menusurface, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const menusurface_changes = dirty & 546 ? get_spread_update(menusurface_spread_levels, [
        dirty & 32 && { use: ctx2[5] },
        dirty & 2 && {
          class: classMap({
            [ctx2[1]]: true,
            "mdc-menu": true
          })
        },
        dirty & 512 && get_spread_object(ctx2[9])
      ]) : {};
      if (dirty & 8388608) {
        menusurface_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & 1) {
        updating_open = true;
        menusurface_changes.open = ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      menusurface.$set(menusurface_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(menusurface.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menusurface.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[16](null);
      destroy_component(menusurface, detaching);
    }
  };
}
function instance_1$a($$self, $$props, $$invalidate) {
  let usePass;
  const omit_props_names = [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const { closest: closest2 } = ponyfill;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let element2;
  let instance2;
  let menuSurfaceAccessor;
  let listAccessor;
  onMount(() => {
    $$invalidate(3, instance2 = new MDCMenuFoundation({
      addClassToElementAtIndex: (index, className2) => {
        listAccessor.addClassForElementIndex(index, className2);
      },
      removeClassFromElementAtIndex: (index, className2) => {
        listAccessor.removeClassForElementIndex(index, className2);
      },
      addAttributeToElementAtIndex: (index, attr2, value) => {
        listAccessor.setAttributeForElementIndex(index, attr2, value);
      },
      removeAttributeFromElementAtIndex: (index, attr2) => {
        listAccessor.removeAttributeForElementIndex(index, attr2);
      },
      getAttributeFromElementAtIndex: (index, attr2) => listAccessor.getAttributeFromElementIndex(index, attr2),
      elementContainsClass: (element3, className2) => element3.classList.contains(className2),
      closeSurface: (skipRestoreFocus) => menuSurfaceAccessor.closeProgrammatic(skipRestoreFocus),
      getElementIndex: (element3) => listAccessor.getOrderedList().map((accessor) => accessor.element).indexOf(element3),
      notifySelected: (evtData) => dispatch(getElement(), "SMUIMenu:selected", {
        index: evtData.index,
        item: listAccessor.getOrderedList()[evtData.index].element
      }, void 0, true),
      getMenuItemCount: () => listAccessor.items.length,
      focusItemAtIndex: (index) => listAccessor.focusItemAtIndex(index),
      focusListRoot: () => "focus" in listAccessor.element && listAccessor.element.focus(),
      isSelectableItemAtIndex: (index) => !!closest2(listAccessor.getOrderedList()[index].element, `.${cssClasses$5.MENU_SELECTION_GROUP}`),
      getSelectedSiblingOfItemAtIndex: (index) => {
        const orderedList = listAccessor.getOrderedList();
        const selectionGroupEl = closest2(orderedList[index].element, `.${cssClasses$5.MENU_SELECTION_GROUP}`);
        const selectedItemEl = selectionGroupEl === null || selectionGroupEl === void 0 ? void 0 : selectionGroupEl.querySelector(`.${cssClasses$5.MENU_SELECTED_LIST_ITEM}`);
        return selectedItemEl ? orderedList.map((item) => item.element).indexOf(selectedItemEl) : -1;
      }
    }));
    dispatch(getElement(), "SMUIMenu:mount", instance2);
    instance2.init();
    return () => {
      instance2.destroy();
    };
  });
  function handleKeydown2(event) {
    instance2 && instance2.handleKeydown(event);
  }
  function handleMenuSurfaceAccessor(event) {
    if (!menuSurfaceAccessor) {
      menuSurfaceAccessor = event.detail;
    }
  }
  function handleListAccessor(event) {
    if (!listAccessor) {
      $$invalidate(4, listAccessor = event.detail);
    }
  }
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    $$invalidate(0, open = value);
  }
  function setDefaultFocusState(focusState) {
    instance2.setDefaultFocusState(focusState);
  }
  function getSelectedIndex() {
    return instance2.getSelectedIndex();
  }
  function getElement() {
    return element2.getElement();
  }
  function menusurface_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  function menusurface_open_binding(value) {
    open = value;
    $$invalidate(0, open);
  }
  const SMUIMenuSurface_opened_handler = () => instance2 && instance2.handleMenuSurfaceOpened();
  const SMUIList_action_handler = (event) => instance2 && instance2.handleItemAction(listAccessor.getOrderedList()[event.detail.index].element);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(10, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1024) {
      $$invalidate(5, usePass = [forwardEvents, ...use2]);
    }
  };
  return [
    open,
    className,
    element2,
    instance2,
    listAccessor,
    usePass,
    handleKeydown2,
    handleMenuSurfaceAccessor,
    handleListAccessor,
    $$restProps,
    use2,
    isOpen,
    setOpen,
    setDefaultFocusState,
    getSelectedIndex,
    getElement,
    menusurface_binding,
    menusurface_open_binding,
    SMUIMenuSurface_opened_handler,
    SMUIList_action_handler
  ];
}
class Menu extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$a, create_fragment$k, safe_not_equal, {
      use: 10,
      class: 1,
      open: 0,
      isOpen: 11,
      setOpen: 12,
      setDefaultFocusState: 13,
      getSelectedIndex: 14,
      getElement: 15
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "open",
      "isOpen",
      "setOpen",
      "setDefaultFocusState",
      "getSelectedIndex",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[10];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(open) {
    this.$$set({ open });
    flush();
  }
  get isOpen() {
    return this.$$.ctx[11];
  }
  get setOpen() {
    return this.$$.ctx[12];
  }
  get setDefaultFocusState() {
    return this.$$.ctx[13];
  }
  get getSelectedIndex() {
    return this.$$.ctx[14];
  }
  get getElement() {
    return this.$$.ctx[15];
  }
}
function create_default_slot$7(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$j(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [ctx[7], ...ctx[0]]
    },
    {
      class: classMap({
        [ctx[1]]: true,
        [ctx[5]]: true,
        ...ctx[4]
      })
    },
    ctx[6],
    ctx[8]
  ];
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$7] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[10](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 499 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 129 && {
          use: [ctx2[7], ...ctx2[0]]
        },
        dirty & 50 && {
          class: classMap({
            [ctx2[1]]: true,
            [ctx2[5]]: true,
            ...ctx2[4]
          })
        },
        dirty & 64 && get_spread_object(ctx2[6]),
        dirty & 256 && get_spread_object(ctx2[8])
      ]) : {};
      if (dirty & 8192) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[10](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[10](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function instance$9($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "component", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let element2;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  Object.entries(internals.classMap).forEach(([name, context2]) => {
    const store = getContext(context2);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        $$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder(get_current_component());
  for (let context2 in contexts) {
    if (contexts.hasOwnProperty(context2)) {
      setContext(context2, contexts[context2]);
    }
  }
  onDestroy(() => {
    for (const unsubscribe2 of smuiClassUnsubscribes) {
      unsubscribe2();
    }
  });
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("component" in $$new_props)
      $$invalidate(2, component = $$new_props.component);
  };
  return [
    use2,
    className,
    component,
    element2,
    smuiClassMap,
    smuiClass,
    props,
    forwardEvents,
    $$restProps,
    getElement,
    switch_instance_binding
  ];
}
class ClassAdder extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$9, create_fragment$j, safe_not_equal, {
      use: 0,
      class: 1,
      component: 2,
      getElement: 9
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "component", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(component) {
    this.$$set({ component });
    flush();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
function create_default_slot$6(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$i(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [ctx[17], ...ctx[0]]
    },
    {
      class: classMap({
        [ctx[1]]: true,
        "mdc-deprecated-list": true,
        "mdc-deprecated-list--non-interactive": ctx[2],
        "mdc-deprecated-list--dense": ctx[3],
        "mdc-deprecated-list--textual-list": ctx[4],
        "mdc-deprecated-list--avatar-list": ctx[5] || ctx[18],
        "mdc-deprecated-list--icon-list": ctx[6],
        "mdc-deprecated-list--image-list": ctx[7],
        "mdc-deprecated-list--thumbnail-list": ctx[8],
        "mdc-deprecated-list--video-list": ctx[9],
        "mdc-deprecated-list--two-line": ctx[10],
        "smui-list--three-line": ctx[11] && !ctx[10]
      })
    },
    { role: ctx[15] },
    ctx[23]
  ];
  var switch_value = ctx[12];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$6] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[37](switch_instance);
    switch_instance.$on("keydown", ctx[38]);
    switch_instance.$on("focusin", ctx[39]);
    switch_instance.$on("focusout", ctx[40]);
    switch_instance.$on("click", ctx[41]);
    switch_instance.$on("SMUIListItem:mount", ctx[19]);
    switch_instance.$on("SMUIListItem:unmount", ctx[20]);
    switch_instance.$on("SMUI:action", ctx[21]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty[0] & 8818687 ? get_spread_update(switch_instance_spread_levels, [
        dirty[0] & 131073 && {
          use: [ctx2[17], ...ctx2[0]]
        },
        dirty[0] & 266238 && {
          class: classMap({
            [ctx2[1]]: true,
            "mdc-deprecated-list": true,
            "mdc-deprecated-list--non-interactive": ctx2[2],
            "mdc-deprecated-list--dense": ctx2[3],
            "mdc-deprecated-list--textual-list": ctx2[4],
            "mdc-deprecated-list--avatar-list": ctx2[5] || ctx2[18],
            "mdc-deprecated-list--icon-list": ctx2[6],
            "mdc-deprecated-list--image-list": ctx2[7],
            "mdc-deprecated-list--thumbnail-list": ctx2[8],
            "mdc-deprecated-list--video-list": ctx2[9],
            "mdc-deprecated-list--two-line": ctx2[10],
            "smui-list--three-line": ctx2[11] && !ctx2[10]
          })
        },
        dirty[0] & 32768 && { role: ctx2[15] },
        dirty[0] & 8388608 && get_spread_object(ctx2[23])
      ]) : {};
      if (dirty[1] & 134217728) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[12])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[37](switch_instance);
          switch_instance.$on("keydown", ctx2[38]);
          switch_instance.$on("focusin", ctx2[39]);
          switch_instance.$on("focusout", ctx2[40]);
          switch_instance.$on("click", ctx2[41]);
          switch_instance.$on("SMUIListItem:mount", ctx2[19]);
          switch_instance.$on("SMUIListItem:unmount", ctx2[20]);
          switch_instance.$on("SMUI:action", ctx2[21]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[37](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function instance_1$9($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  var _a2;
  const { closest: closest2, matches: matches2 } = ponyfill;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { nonInteractive = false } = $$props;
  let { dense = false } = $$props;
  let { textualList = false } = $$props;
  let { avatarList = false } = $$props;
  let { iconList = false } = $$props;
  let { imageList = false } = $$props;
  let { thumbnailList = false } = $$props;
  let { videoList = false } = $$props;
  let { twoLine = false } = $$props;
  let { threeLine = false } = $$props;
  let { vertical = true } = $$props;
  let { wrapFocus = (_a2 = getContext("SMUI:list:wrapFocus")) !== null && _a2 !== void 0 ? _a2 : false } = $$props;
  let { singleSelection = false } = $$props;
  let { selectedIndex = -1 } = $$props;
  let { radioList = false } = $$props;
  let { checkList = false } = $$props;
  let { hasTypeahead = false } = $$props;
  let element2;
  let instance2;
  let items = [];
  let role = getContext("SMUI:list:role");
  let nav = getContext("SMUI:list:nav");
  const itemAccessorMap = /* @__PURE__ */ new WeakMap();
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let { component = nav ? Nav : Ul } = $$props;
  setContext("SMUI:list:nonInteractive", nonInteractive);
  setContext("SMUI:separator:context", "list");
  if (!role) {
    if (singleSelection) {
      role = "listbox";
      setContext("SMUI:list:item:role", "option");
    } else if (radioList) {
      role = "radiogroup";
      setContext("SMUI:list:item:role", "radio");
    } else if (checkList) {
      role = "group";
      setContext("SMUI:list:item:role", "checkbox");
    } else {
      role = "list";
      setContext("SMUI:list:item:role", void 0);
    }
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onMount(() => {
    $$invalidate(13, instance2 = new MDCListFoundation({
      addClassForElementIndex,
      focusItemAtIndex,
      getAttributeForElementIndex: (index, name) => {
        var _a3, _b2;
        return (_b2 = (_a3 = getOrderedList()[index]) === null || _a3 === void 0 ? void 0 : _a3.getAttr(name)) !== null && _b2 !== void 0 ? _b2 : null;
      },
      getFocusedElementIndex: () => document.activeElement ? getOrderedList().map((accessor2) => accessor2.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => items.length,
      getPrimaryTextAtIndex,
      hasCheckboxAtIndex: (index) => {
        var _a3, _b2;
        return (_b2 = (_a3 = getOrderedList()[index]) === null || _a3 === void 0 ? void 0 : _a3.hasCheckbox) !== null && _b2 !== void 0 ? _b2 : false;
      },
      hasRadioAtIndex: (index) => {
        var _a3, _b2;
        return (_b2 = (_a3 = getOrderedList()[index]) === null || _a3 === void 0 ? void 0 : _a3.hasRadio) !== null && _b2 !== void 0 ? _b2 : false;
      },
      isCheckboxCheckedAtIndex: (index) => {
        var _a3;
        const listItem = getOrderedList()[index];
        return (_a3 = (listItem === null || listItem === void 0 ? void 0 : listItem.hasCheckbox) && listItem.checked) !== null && _a3 !== void 0 ? _a3 : false;
      },
      isFocusInsideList: () => element2 != null && getElement() !== document.activeElement && getElement().contains(document.activeElement),
      isRootFocused: () => element2 != null && document.activeElement === getElement(),
      listItemAtIndexHasClass,
      notifyAction: (index) => {
        $$invalidate(24, selectedIndex = index);
        if (element2 != null) {
          dispatch(getElement(), "SMUIList:action", { index }, void 0, true);
        }
      },
      removeClassForElementIndex,
      setAttributeForElementIndex,
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        getOrderedList()[index].checked = isChecked;
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const listItem = getOrderedList()[listItemIndex];
        const selector = "button:not(:disabled), a";
        Array.prototype.forEach.call(listItem.element.querySelectorAll(selector), (el) => {
          el.setAttribute("tabindex", tabIndexValue);
        });
      }
    }));
    const accessor = {
      get element() {
        return getElement();
      },
      get items() {
        return items;
      },
      get typeaheadInProgress() {
        return instance2.isTypeaheadInProgress();
      },
      typeaheadMatchItem(nextChar, startingIndex) {
        return instance2.typeaheadMatchItem(nextChar, startingIndex, true);
      },
      getOrderedList,
      focusItemAtIndex,
      addClassForElementIndex,
      removeClassForElementIndex,
      setAttributeForElementIndex,
      removeAttributeForElementIndex,
      getAttributeFromElementIndex,
      getPrimaryTextAtIndex
    };
    dispatch(getElement(), "SMUIList:mount", accessor);
    instance2.init();
    return () => {
      instance2.destroy();
    };
  });
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function handleItemMount(event) {
    items.push(event.detail);
    itemAccessorMap.set(event.detail.element, event.detail);
    if (singleSelection && event.detail.selected) {
      $$invalidate(24, selectedIndex = getListItemIndex(event.detail.element));
    }
    event.stopPropagation();
  }
  function handleItemUnmount(event) {
    var _a3;
    const idx = (_a3 = event.detail && items.indexOf(event.detail)) !== null && _a3 !== void 0 ? _a3 : -1;
    if (idx !== -1) {
      items.splice(idx, 1);
      items = items;
      itemAccessorMap.delete(event.detail.element);
    }
    event.stopPropagation();
  }
  function handleAction(event) {
    if (radioList || checkList) {
      const index = getListItemIndex(event.target);
      if (index !== -1) {
        const item = getOrderedList()[index];
        if (item && (radioList && !item.checked || checkList)) {
          item.checked = !item.checked;
          item.activateRipple();
          window.requestAnimationFrame(() => {
            item.deactivateRipple();
          });
        }
      }
    }
  }
  function getOrderedList() {
    if (element2 == null) {
      return [];
    }
    return [...getElement().children].map((element3) => itemAccessorMap.get(element3)).filter((accessor) => accessor && accessor._smui_list_item_accessor);
  }
  function focusItemAtIndex(index) {
    const accessor = getOrderedList()[index];
    accessor && "focus" in accessor.element && accessor.element.focus();
  }
  function listItemAtIndexHasClass(index, className2) {
    var _a3;
    const accessor = getOrderedList()[index];
    return (_a3 = accessor && accessor.hasClass(className2)) !== null && _a3 !== void 0 ? _a3 : false;
  }
  function addClassForElementIndex(index, className2) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addClass(className2);
  }
  function removeClassForElementIndex(index, className2) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeClass(className2);
  }
  function setAttributeForElementIndex(index, name, value) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addAttr(name, value);
  }
  function removeAttributeForElementIndex(index, name) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeAttr(name);
  }
  function getAttributeFromElementIndex(index, name) {
    const accessor = getOrderedList()[index];
    if (accessor) {
      return accessor.getAttr(name);
    } else {
      return null;
    }
  }
  function getPrimaryTextAtIndex(index) {
    var _a3;
    const accessor = getOrderedList()[index];
    return (_a3 = accessor && accessor.getPrimaryText()) !== null && _a3 !== void 0 ? _a3 : "";
  }
  function getListItemIndex(element3) {
    const nearestParent = closest2(element3, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    if (nearestParent && matches2(nearestParent, ".mdc-deprecated-list-item")) {
      return getOrderedList().map((item) => item === null || item === void 0 ? void 0 : item.element).indexOf(nearestParent);
    }
    return -1;
  }
  function layout() {
    return instance2.layout();
  }
  function setEnabled(itemIndex, isEnabled) {
    return instance2.setEnabled(itemIndex, isEnabled);
  }
  function getTypeaheadInProgress() {
    return instance2.isTypeaheadInProgress();
  }
  function getSelectedIndex() {
    return instance2.getSelectedIndex();
  }
  function getFocusedItemIndex() {
    return instance2.getFocusedItemIndex();
  }
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(14, element2);
    });
  }
  const keydown_handler = (event) => instance2 && instance2.handleKeydown(event, event.target.classList.contains("mdc-deprecated-list-item"), getListItemIndex(event.target));
  const focusin_handler = (event) => instance2 && instance2.handleFocusIn(getListItemIndex(event.target));
  const focusout_handler = (event) => instance2 && instance2.handleFocusOut(getListItemIndex(event.target));
  const click_handler = (event) => instance2 && instance2.handleClick(getListItemIndex(event.target), !matches2(event.target, 'input[type="checkbox"], input[type="radio"]'));
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(23, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("nonInteractive" in $$new_props)
      $$invalidate(2, nonInteractive = $$new_props.nonInteractive);
    if ("dense" in $$new_props)
      $$invalidate(3, dense = $$new_props.dense);
    if ("textualList" in $$new_props)
      $$invalidate(4, textualList = $$new_props.textualList);
    if ("avatarList" in $$new_props)
      $$invalidate(5, avatarList = $$new_props.avatarList);
    if ("iconList" in $$new_props)
      $$invalidate(6, iconList = $$new_props.iconList);
    if ("imageList" in $$new_props)
      $$invalidate(7, imageList = $$new_props.imageList);
    if ("thumbnailList" in $$new_props)
      $$invalidate(8, thumbnailList = $$new_props.thumbnailList);
    if ("videoList" in $$new_props)
      $$invalidate(9, videoList = $$new_props.videoList);
    if ("twoLine" in $$new_props)
      $$invalidate(10, twoLine = $$new_props.twoLine);
    if ("threeLine" in $$new_props)
      $$invalidate(11, threeLine = $$new_props.threeLine);
    if ("vertical" in $$new_props)
      $$invalidate(25, vertical = $$new_props.vertical);
    if ("wrapFocus" in $$new_props)
      $$invalidate(26, wrapFocus = $$new_props.wrapFocus);
    if ("singleSelection" in $$new_props)
      $$invalidate(27, singleSelection = $$new_props.singleSelection);
    if ("selectedIndex" in $$new_props)
      $$invalidate(24, selectedIndex = $$new_props.selectedIndex);
    if ("radioList" in $$new_props)
      $$invalidate(28, radioList = $$new_props.radioList);
    if ("checkList" in $$new_props)
      $$invalidate(29, checkList = $$new_props.checkList);
    if ("hasTypeahead" in $$new_props)
      $$invalidate(30, hasTypeahead = $$new_props.hasTypeahead);
    if ("component" in $$new_props)
      $$invalidate(12, component = $$new_props.component);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 33562624) {
      if (instance2) {
        instance2.setVerticalOrientation(vertical);
      }
    }
    if ($$self.$$.dirty[0] & 67117056) {
      if (instance2) {
        instance2.setWrapFocus(wrapFocus);
      }
    }
    if ($$self.$$.dirty[0] & 1073750016) {
      if (instance2) {
        instance2.setHasTypeahead(hasTypeahead);
      }
    }
    if ($$self.$$.dirty[0] & 134225920) {
      if (instance2) {
        instance2.setSingleSelection(singleSelection);
      }
    }
    if ($$self.$$.dirty[0] & 151003136) {
      if (instance2 && singleSelection && getSelectedIndex() !== selectedIndex) {
        instance2.setSelectedIndex(selectedIndex);
      }
    }
  };
  return [
    use2,
    className,
    nonInteractive,
    dense,
    textualList,
    avatarList,
    iconList,
    imageList,
    thumbnailList,
    videoList,
    twoLine,
    threeLine,
    component,
    instance2,
    element2,
    role,
    matches2,
    forwardEvents,
    selectionDialog,
    handleItemMount,
    handleItemUnmount,
    handleAction,
    getListItemIndex,
    $$restProps,
    selectedIndex,
    vertical,
    wrapFocus,
    singleSelection,
    radioList,
    checkList,
    hasTypeahead,
    layout,
    setEnabled,
    getTypeaheadInProgress,
    getSelectedIndex,
    getFocusedItemIndex,
    getElement,
    switch_instance_binding,
    keydown_handler,
    focusin_handler,
    focusout_handler,
    click_handler
  ];
}
class List extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$9, create_fragment$i, safe_not_equal, {
      use: 0,
      class: 1,
      nonInteractive: 2,
      dense: 3,
      textualList: 4,
      avatarList: 5,
      iconList: 6,
      imageList: 7,
      thumbnailList: 8,
      videoList: 9,
      twoLine: 10,
      threeLine: 11,
      vertical: 25,
      wrapFocus: 26,
      singleSelection: 27,
      selectedIndex: 24,
      radioList: 28,
      checkList: 29,
      hasTypeahead: 30,
      component: 12,
      layout: 31,
      setEnabled: 32,
      getTypeaheadInProgress: 33,
      getSelectedIndex: 34,
      getFocusedItemIndex: 35,
      getElement: 36
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "nonInteractive",
      "dense",
      "textualList",
      "avatarList",
      "iconList",
      "imageList",
      "thumbnailList",
      "videoList",
      "twoLine",
      "threeLine",
      "vertical",
      "wrapFocus",
      "singleSelection",
      "selectedIndex",
      "radioList",
      "checkList",
      "hasTypeahead",
      "component",
      "layout",
      "setEnabled",
      "getTypeaheadInProgress",
      "getSelectedIndex",
      "getFocusedItemIndex",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get nonInteractive() {
    return this.$$.ctx[2];
  }
  set nonInteractive(nonInteractive) {
    this.$$set({ nonInteractive });
    flush();
  }
  get dense() {
    return this.$$.ctx[3];
  }
  set dense(dense) {
    this.$$set({ dense });
    flush();
  }
  get textualList() {
    return this.$$.ctx[4];
  }
  set textualList(textualList) {
    this.$$set({ textualList });
    flush();
  }
  get avatarList() {
    return this.$$.ctx[5];
  }
  set avatarList(avatarList) {
    this.$$set({ avatarList });
    flush();
  }
  get iconList() {
    return this.$$.ctx[6];
  }
  set iconList(iconList) {
    this.$$set({ iconList });
    flush();
  }
  get imageList() {
    return this.$$.ctx[7];
  }
  set imageList(imageList) {
    this.$$set({ imageList });
    flush();
  }
  get thumbnailList() {
    return this.$$.ctx[8];
  }
  set thumbnailList(thumbnailList) {
    this.$$set({ thumbnailList });
    flush();
  }
  get videoList() {
    return this.$$.ctx[9];
  }
  set videoList(videoList) {
    this.$$set({ videoList });
    flush();
  }
  get twoLine() {
    return this.$$.ctx[10];
  }
  set twoLine(twoLine) {
    this.$$set({ twoLine });
    flush();
  }
  get threeLine() {
    return this.$$.ctx[11];
  }
  set threeLine(threeLine) {
    this.$$set({ threeLine });
    flush();
  }
  get vertical() {
    return this.$$.ctx[25];
  }
  set vertical(vertical) {
    this.$$set({ vertical });
    flush();
  }
  get wrapFocus() {
    return this.$$.ctx[26];
  }
  set wrapFocus(wrapFocus) {
    this.$$set({ wrapFocus });
    flush();
  }
  get singleSelection() {
    return this.$$.ctx[27];
  }
  set singleSelection(singleSelection) {
    this.$$set({ singleSelection });
    flush();
  }
  get selectedIndex() {
    return this.$$.ctx[24];
  }
  set selectedIndex(selectedIndex) {
    this.$$set({ selectedIndex });
    flush();
  }
  get radioList() {
    return this.$$.ctx[28];
  }
  set radioList(radioList) {
    this.$$set({ radioList });
    flush();
  }
  get checkList() {
    return this.$$.ctx[29];
  }
  set checkList(checkList) {
    this.$$set({ checkList });
    flush();
  }
  get hasTypeahead() {
    return this.$$.ctx[30];
  }
  set hasTypeahead(hasTypeahead) {
    this.$$set({ hasTypeahead });
    flush();
  }
  get component() {
    return this.$$.ctx[12];
  }
  set component(component) {
    this.$$set({ component });
    flush();
  }
  get layout() {
    return this.$$.ctx[31];
  }
  get setEnabled() {
    return this.$$.ctx[32];
  }
  get getTypeaheadInProgress() {
    return this.$$.ctx[33];
  }
  get getSelectedIndex() {
    return this.$$.ctx[34];
  }
  get getFocusedItemIndex() {
    return this.$$.ctx[35];
  }
  get getElement() {
    return this.$$.ctx[36];
  }
}
function create_if_block$7(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      attr(span, "class", "mdc-deprecated-list-item__ripple");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot$5(ctx) {
  let slot;
  let if_block = ctx[7] && create_if_block$7();
  return {
    c() {
      if (if_block)
        if_block.c();
      slot = element("slot");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, slot, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[7]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$7();
          if_block.c();
          if_block.m(slot.parentNode, slot);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$h(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [
        ...ctx[6] ? [] : [
          [
            Ripple,
            {
              ripple: !ctx[14],
              unbounded: false,
              color: (ctx[1] || ctx[0]) && ctx[5] == null ? "primary" : ctx[5],
              disabled: ctx[9],
              addClass: ctx[22],
              removeClass: ctx[23],
              addStyle: ctx[24]
            }
          ]
        ],
        ctx[20],
        ...ctx[2]
      ]
    },
    {
      class: classMap({
        [ctx[3]]: true,
        "mdc-deprecated-list-item": true,
        "mdc-deprecated-list-item--activated": ctx[1],
        "mdc-deprecated-list-item--selected": ctx[0],
        "mdc-deprecated-list-item--disabled": ctx[9],
        "mdc-menu-item--selected": !ctx[21] && ctx[8] === "menuitem" && ctx[0],
        "smui-menu-item--non-interactive": ctx[6],
        ...ctx[16]
      })
    },
    {
      style: Object.entries(ctx[17]).map(func$7).concat([ctx[4]]).join(" ")
    },
    ctx[21] && ctx[1] ? { "aria-current": "page" } : {},
    !ctx[21] ? { role: ctx[8] } : {},
    !ctx[21] && ctx[8] === "option" ? {
      "aria-selected": ctx[0] ? "true" : "false"
    } : {},
    !ctx[21] && (ctx[8] === "radio" || ctx[8] === "checkbox") ? {
      "aria-checked": ctx[14] && ctx[14].checked ? "true" : "false"
    } : {},
    !ctx[21] ? {
      "aria-disabled": ctx[9] ? "true" : "false"
    } : {},
    {
      "data-menu-item-skip-restore-focus": ctx[10] || void 0
    },
    { tabindex: ctx[19] },
    { href: ctx[11] },
    ctx[18],
    ctx[27]
  ];
  var switch_value = ctx[12];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$5] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[32](switch_instance);
    switch_instance.$on("click", ctx[13]);
    switch_instance.$on("keydown", ctx[25]);
    switch_instance.$on("SMUIGenericInput:mount", ctx[26]);
    switch_instance.$on("SMUIGenericInput:unmount", ctx[33]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty[0] & 167726975 ? get_spread_update(switch_instance_spread_levels, [
        dirty[0] & 30425703 && {
          use: [
            ...ctx2[6] ? [] : [
              [
                Ripple,
                {
                  ripple: !ctx2[14],
                  unbounded: false,
                  color: (ctx2[1] || ctx2[0]) && ctx2[5] == null ? "primary" : ctx2[5],
                  disabled: ctx2[9],
                  addClass: ctx2[22],
                  removeClass: ctx2[23],
                  addStyle: ctx2[24]
                }
              ]
            ],
            ctx2[20],
            ...ctx2[2]
          ]
        },
        dirty[0] & 2163531 && {
          class: classMap({
            [ctx2[3]]: true,
            "mdc-deprecated-list-item": true,
            "mdc-deprecated-list-item--activated": ctx2[1],
            "mdc-deprecated-list-item--selected": ctx2[0],
            "mdc-deprecated-list-item--disabled": ctx2[9],
            "mdc-menu-item--selected": !ctx2[21] && ctx2[8] === "menuitem" && ctx2[0],
            "smui-menu-item--non-interactive": ctx2[6],
            ...ctx2[16]
          })
        },
        dirty[0] & 131088 && {
          style: Object.entries(ctx2[17]).map(func$7).concat([ctx2[4]]).join(" ")
        },
        dirty[0] & 2097154 && get_spread_object(ctx2[21] && ctx2[1] ? { "aria-current": "page" } : {}),
        dirty[0] & 2097408 && get_spread_object(!ctx2[21] ? { role: ctx2[8] } : {}),
        dirty[0] & 2097409 && get_spread_object(!ctx2[21] && ctx2[8] === "option" ? {
          "aria-selected": ctx2[0] ? "true" : "false"
        } : {}),
        dirty[0] & 2113792 && get_spread_object(!ctx2[21] && (ctx2[8] === "radio" || ctx2[8] === "checkbox") ? {
          "aria-checked": ctx2[14] && ctx2[14].checked ? "true" : "false"
        } : {}),
        dirty[0] & 2097664 && get_spread_object(!ctx2[21] ? {
          "aria-disabled": ctx2[9] ? "true" : "false"
        } : {}),
        dirty[0] & 1024 && {
          "data-menu-item-skip-restore-focus": ctx2[10] || void 0
        },
        dirty[0] & 524288 && { tabindex: ctx2[19] },
        dirty[0] & 2048 && { href: ctx2[11] },
        dirty[0] & 262144 && get_spread_object(ctx2[18]),
        dirty[0] & 134217728 && get_spread_object(ctx2[27])
      ]) : {};
      if (dirty[0] & 128 | dirty[1] & 4096) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[12])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[32](switch_instance);
          switch_instance.$on("click", ctx2[13]);
          switch_instance.$on("keydown", ctx2[25]);
          switch_instance.$on("SMUIGenericInput:mount", ctx2[26]);
          switch_instance.$on("SMUIGenericInput:unmount", ctx2[33]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[32](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
let counter$4 = 0;
const func$7 = ([name, value]) => `${name}: ${value};`;
function instance$8($$self, $$props, $$invalidate) {
  let tabindex;
  const omit_props_names = [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "action",
    "getPrimaryText",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  var _a2;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = void 0 } = $$props;
  let { nonInteractive = (_a2 = getContext("SMUI:list:nonInteractive")) !== null && _a2 !== void 0 ? _a2 : false } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  let { ripple = !nonInteractive } = $$props;
  let { activated = false } = $$props;
  let { role = getContext("SMUI:list:item:role") } = $$props;
  setContext("SMUI:list:item:role", void 0);
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { skipRestoreFocus = false } = $$props;
  let { tabindex: tabindexProp = uninitializedValue } = $$props;
  let { inputId = "SMUI-form-field-list-" + counter$4++ } = $$props;
  let { href = void 0 } = $$props;
  let element2;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let addTabindexIfNoItemsSelectedRaf;
  let nav = getContext("SMUI:list:item:nav");
  let { component = nav ? href ? A : Span : Li } = $$props;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
  onMount(() => {
    if (!selected && !nonInteractive) {
      let first = true;
      let el = element2;
      while (el.previousSibling) {
        el = el.previousSibling;
        if (el.nodeType === 1 && el.classList.contains("mdc-deprecated-list-item") && !el.classList.contains("mdc-deprecated-list-item--disabled")) {
          first = false;
          break;
        }
      }
      if (first) {
        addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(addTabindexIfNoItemsSelected);
      }
    }
    const accessor = {
      _smui_list_item_accessor: true,
      get element() {
        return getElement();
      },
      get selected() {
        return selected;
      },
      set selected(value) {
        $$invalidate(0, selected = value);
      },
      hasClass,
      addClass,
      removeClass,
      getAttr,
      addAttr,
      removeAttr,
      getPrimaryText,
      get checked() {
        var _a3;
        return (_a3 = input && input.checked) !== null && _a3 !== void 0 ? _a3 : false;
      },
      set checked(value) {
        if (input) {
          $$invalidate(14, input.checked = !!value, input);
        }
      },
      get hasCheckbox() {
        return !!(input && "_smui_checkbox_accessor" in input);
      },
      get hasRadio() {
        return !!(input && "_smui_radio_accessor" in input);
      },
      activateRipple() {
        if (input) {
          input.activateRipple();
        }
      },
      deactivateRipple() {
        if (input) {
          input.deactivateRipple();
        }
      },
      getValue() {
        return $$restProps.value;
      },
      action,
      get tabindex() {
        return tabindex;
      },
      set tabindex(value) {
        $$invalidate(28, tabindexProp = value);
      },
      get disabled() {
        return disabled;
      },
      get activated() {
        return activated;
      },
      set activated(value) {
        $$invalidate(1, activated = value);
      }
    };
    dispatch(getElement(), "SMUIListItem:mount", accessor);
    return () => {
      dispatch(getElement(), "SMUIListItem:unmount", accessor);
    };
  });
  onDestroy(() => {
    if (addTabindexIfNoItemsSelectedRaf) {
      window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
    }
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(16, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(16, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(17, internalStyles);
      } else {
        $$invalidate(17, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function getAttr(name) {
    var _a3;
    return name in internalAttrs ? (_a3 = internalAttrs[name]) !== null && _a3 !== void 0 ? _a3 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(18, internalAttrs[name] = value, internalAttrs);
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      $$invalidate(18, internalAttrs[name] = void 0, internalAttrs);
    }
  }
  function addTabindexIfNoItemsSelected() {
    let noneSelected = true;
    let el = element2.getElement();
    while (el.nextElementSibling) {
      el = el.nextElementSibling;
      if (el.nodeType === 1 && el.classList.contains("mdc-deprecated-list-item")) {
        const tabindexAttr = el.attributes.getNamedItem("tabindex");
        if (tabindexAttr && tabindexAttr.value === "0") {
          noneSelected = false;
          break;
        }
      }
    }
    if (noneSelected) {
      $$invalidate(19, tabindex = 0);
    }
  }
  function handleKeydown2(e) {
    const isEnter = e.key === "Enter";
    const isSpace = e.key === "Space";
    if (isEnter || isSpace) {
      action(e);
    }
  }
  function handleInputMount(e) {
    if ("_smui_checkbox_accessor" in e.detail || "_smui_radio_accessor" in e.detail) {
      $$invalidate(14, input = e.detail);
    }
  }
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUI:action", e);
    }
  }
  function getPrimaryText() {
    var _a3, _b2, _c;
    const element3 = getElement();
    const primaryText = element3.querySelector(".mdc-deprecated-list-item__primary-text");
    if (primaryText) {
      return (_a3 = primaryText.textContent) !== null && _a3 !== void 0 ? _a3 : "";
    }
    const text2 = element3.querySelector(".mdc-deprecated-list-item__text");
    if (text2) {
      return (_b2 = text2.textContent) !== null && _b2 !== void 0 ? _b2 : "";
    }
    return (_c = element3.textContent) !== null && _c !== void 0 ? _c : "";
  }
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(15, element2);
    });
  }
  const SMUIGenericInput_unmount_handler = () => $$invalidate(14, input = void 0);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(27, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(2, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(3, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(4, style = $$new_props.style);
    if ("color" in $$new_props)
      $$invalidate(5, color = $$new_props.color);
    if ("nonInteractive" in $$new_props)
      $$invalidate(6, nonInteractive = $$new_props.nonInteractive);
    if ("ripple" in $$new_props)
      $$invalidate(7, ripple = $$new_props.ripple);
    if ("activated" in $$new_props)
      $$invalidate(1, activated = $$new_props.activated);
    if ("role" in $$new_props)
      $$invalidate(8, role = $$new_props.role);
    if ("selected" in $$new_props)
      $$invalidate(0, selected = $$new_props.selected);
    if ("disabled" in $$new_props)
      $$invalidate(9, disabled = $$new_props.disabled);
    if ("skipRestoreFocus" in $$new_props)
      $$invalidate(10, skipRestoreFocus = $$new_props.skipRestoreFocus);
    if ("tabindex" in $$new_props)
      $$invalidate(28, tabindexProp = $$new_props.tabindex);
    if ("inputId" in $$new_props)
      $$invalidate(29, inputId = $$new_props.inputId);
    if ("href" in $$new_props)
      $$invalidate(11, href = $$new_props.href);
    if ("component" in $$new_props)
      $$invalidate(12, component = $$new_props.component);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 268452417) {
      $$invalidate(19, tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input && input.checked) ? 0 : -1 : tabindexProp);
    }
  };
  return [
    selected,
    activated,
    use2,
    className,
    style,
    color,
    nonInteractive,
    ripple,
    role,
    disabled,
    skipRestoreFocus,
    href,
    component,
    action,
    input,
    element2,
    internalClasses,
    internalStyles,
    internalAttrs,
    tabindex,
    forwardEvents,
    nav,
    addClass,
    removeClass,
    addStyle,
    handleKeydown2,
    handleInputMount,
    $$restProps,
    tabindexProp,
    inputId,
    getPrimaryText,
    getElement,
    switch_instance_binding,
    SMUIGenericInput_unmount_handler
  ];
}
class Item$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$8, create_fragment$h, safe_not_equal, {
      use: 2,
      class: 3,
      style: 4,
      color: 5,
      nonInteractive: 6,
      ripple: 7,
      activated: 1,
      role: 8,
      selected: 0,
      disabled: 9,
      skipRestoreFocus: 10,
      tabindex: 28,
      inputId: 29,
      href: 11,
      component: 12,
      action: 13,
      getPrimaryText: 30,
      getElement: 31
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "color",
      "nonInteractive",
      "ripple",
      "activated",
      "role",
      "selected",
      "disabled",
      "skipRestoreFocus",
      "tabindex",
      "inputId",
      "href",
      "component",
      "action",
      "getPrimaryText",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(color) {
    this.$$set({ color });
    flush();
  }
  get nonInteractive() {
    return this.$$.ctx[6];
  }
  set nonInteractive(nonInteractive) {
    this.$$set({ nonInteractive });
    flush();
  }
  get ripple() {
    return this.$$.ctx[7];
  }
  set ripple(ripple) {
    this.$$set({ ripple });
    flush();
  }
  get activated() {
    return this.$$.ctx[1];
  }
  set activated(activated) {
    this.$$set({ activated });
    flush();
  }
  get role() {
    return this.$$.ctx[8];
  }
  set role(role) {
    this.$$set({ role });
    flush();
  }
  get selected() {
    return this.$$.ctx[0];
  }
  set selected(selected) {
    this.$$set({ selected });
    flush();
  }
  get disabled() {
    return this.$$.ctx[9];
  }
  set disabled(disabled) {
    this.$$set({ disabled });
    flush();
  }
  get skipRestoreFocus() {
    return this.$$.ctx[10];
  }
  set skipRestoreFocus(skipRestoreFocus) {
    this.$$set({ skipRestoreFocus });
    flush();
  }
  get tabindex() {
    return this.$$.ctx[28];
  }
  set tabindex(tabindexProp) {
    this.$$set({ tabindex: tabindexProp });
    flush();
  }
  get inputId() {
    return this.$$.ctx[29];
  }
  set inputId(inputId) {
    this.$$set({ inputId });
    flush();
  }
  get href() {
    return this.$$.ctx[11];
  }
  set href(href) {
    this.$$set({ href });
    flush();
  }
  get component() {
    return this.$$.ctx[12];
  }
  set component(component) {
    this.$$set({ component });
    flush();
  }
  get action() {
    return this.$$.ctx[13];
  }
  get getPrimaryText() {
    return this.$$.ctx[30];
  }
  get getElement() {
    return this.$$.ctx[31];
  }
}
classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  component: Span
});
function create_fragment$g(ctx) {
  let span;
  let slot;
  let span_class_value;
  let useActions_action;
  let mounted;
  let dispose;
  let span_levels = [
    {
      class: span_class_value = classMap({
        [ctx[1]]: true,
        "mdc-deprecated-list-item__graphic": true,
        "mdc-menu__selection-group-icon": ctx[4]
      })
    },
    ctx[5]
  ];
  let span_data = {};
  for (let i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }
  return {
    c() {
      span = element("span");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(span, span_data);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, slot);
      ctx[7](span);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, span, ctx[0])),
          action_destroyer(ctx[3].call(null, span))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(span, span_data = get_spread_update(span_levels, [
        dirty & 2 && span_class_value !== (span_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-deprecated-list-item__graphic": true,
          "mdc-menu__selection-group-icon": ctx2[4]
        })) && { class: span_class_value },
        dirty & 32 && ctx2[5]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let element2;
  let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");
  function getElement() {
    return element2;
  }
  function span_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
  };
  return [
    use2,
    className,
    element2,
    forwardEvents,
    menuSelectionGroup,
    $$restProps,
    getElement,
    span_binding
  ];
}
class Graphic$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$7, create_fragment$g, safe_not_equal, { use: 0, class: 1, getElement: 6 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  component: Div
});
classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  component: H3
});
const Item = Item$1;
const Graphic = Graphic$1;
classAdderBuilder({
  class: "mdc-menu__selection-group-icon",
  component: Graphic
});
function create_else_block$4(ctx) {
  let label;
  let slot;
  let label_class_value;
  let label_style_value;
  let label_for_value;
  let useActions_action;
  let mounted;
  let dispose;
  let label_levels = [
    {
      class: label_class_value = classMap({
        [ctx[3]]: true,
        "mdc-floating-label": true,
        "mdc-floating-label--float-above": ctx[0],
        "mdc-floating-label--required": ctx[1],
        ...ctx[8]
      })
    },
    {
      style: label_style_value = Object.entries(ctx[9]).map(func_1$2).concat([ctx[4]]).join(" ")
    },
    {
      for: label_for_value = ctx[5] || (ctx[11] ? ctx[11].id : void 0)
    },
    ctx[12]
  ];
  let label_data = {};
  for (let i = 0; i < label_levels.length; i += 1) {
    label_data = assign(label_data, label_levels[i]);
  }
  return {
    c() {
      label = element("label");
      slot = element("slot");
      set_attributes(label, label_data);
    },
    m(target, anchor) {
      insert(target, label, anchor);
      append(label, slot);
      ctx[22](label);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, label, ctx[2])),
          action_destroyer(ctx[10].call(null, label))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(label, label_data = get_spread_update(label_levels, [
        dirty & 267 && label_class_value !== (label_class_value = classMap({
          [ctx2[3]]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": ctx2[0],
          "mdc-floating-label--required": ctx2[1],
          ...ctx2[8]
        })) && { class: label_class_value },
        dirty & 528 && label_style_value !== (label_style_value = Object.entries(ctx2[9]).map(func_1$2).concat([ctx2[4]]).join(" ")) && { style: label_style_value },
        dirty & 32 && label_for_value !== (label_for_value = ctx2[5] || (ctx2[11] ? ctx2[11].id : void 0)) && { for: label_for_value },
        dirty & 4096 && ctx2[12]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 4)
        useActions_action.update.call(null, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(label);
      ctx[22](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$6(ctx) {
  let span;
  let slot;
  let span_class_value;
  let span_style_value;
  let useActions_action;
  let mounted;
  let dispose;
  let span_levels = [
    {
      class: span_class_value = classMap({
        [ctx[3]]: true,
        "mdc-floating-label": true,
        "mdc-floating-label--float-above": ctx[0],
        "mdc-floating-label--required": ctx[1],
        ...ctx[8]
      })
    },
    {
      style: span_style_value = Object.entries(ctx[9]).map(func$6).concat([ctx[4]]).join(" ")
    },
    ctx[12]
  ];
  let span_data = {};
  for (let i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }
  return {
    c() {
      span = element("span");
      slot = element("slot");
      set_attributes(span, span_data);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, slot);
      ctx[21](span);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, span, ctx[2])),
          action_destroyer(ctx[10].call(null, span))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(span, span_data = get_spread_update(span_levels, [
        dirty & 267 && span_class_value !== (span_class_value = classMap({
          [ctx2[3]]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": ctx2[0],
          "mdc-floating-label--required": ctx2[1],
          ...ctx2[8]
        })) && { class: span_class_value },
        dirty & 528 && span_style_value !== (span_style_value = Object.entries(ctx2[9]).map(func$6).concat([ctx2[4]]).join(" ")) && { style: span_style_value },
        dirty & 4096 && ctx2[12]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 4)
        useActions_action.update.call(null, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
      ctx[21](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$f(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[6])
      return create_if_block$6;
    return create_else_block$4;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
const func$6 = ([name, value]) => `${name}: ${value};`;
const func_1$2 = ([name, value]) => `${name}: ${value};`;
function instance_1$8($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  var _a2;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { for: forId = void 0 } = $$props;
  let { floatAbove = false } = $$props;
  let { required = false } = $$props;
  let { wrapped = false } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a2 = getContext("SMUI:generic:input:props")) !== null && _a2 !== void 0 ? _a2 : {};
  let previousFloatAbove = floatAbove;
  let previousRequired = required;
  onMount(() => {
    $$invalidate(18, instance2 = new MDCFloatingLabelFoundation({
      addClass,
      removeClass,
      getWidth: () => {
        var _a3, _b2;
        const el = getElement();
        const clone = el.cloneNode(true);
        (_a3 = el.parentNode) === null || _a3 === void 0 ? void 0 : _a3.appendChild(clone);
        clone.classList.add("smui-floating-label--remove-transition");
        clone.classList.add("smui-floating-label--force-size");
        clone.classList.remove("mdc-floating-label--float-above");
        const scrollWidth = clone.scrollWidth;
        (_b2 = el.parentNode) === null || _b2 === void 0 ? void 0 : _b2.removeChild(clone);
        return scrollWidth;
      },
      registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
    }));
    const accessor = {
      get element() {
        return getElement();
      },
      addStyle,
      removeStyle
    };
    dispatch(element2, "SMUIFloatingLabel:mount", accessor);
    instance2.init();
    return () => {
      dispatch(element2, "SMUIFloatingLabel:unmount", accessor);
      instance2.destroy();
    };
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(8, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(8, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(9, internalStyles);
      } else {
        $$invalidate(9, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function removeStyle(name) {
    if (name in internalStyles) {
      delete internalStyles[name];
      $$invalidate(9, internalStyles);
    }
  }
  function shake(shouldShake) {
    instance2.shake(shouldShake);
  }
  function float(shouldFloat) {
    $$invalidate(0, floatAbove = shouldFloat);
  }
  function setRequired(isRequired) {
    $$invalidate(1, required = isRequired);
  }
  function getWidth() {
    return instance2.getWidth();
  }
  function getElement() {
    return element2;
  }
  function span_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(7, element2);
    });
  }
  function label_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(7, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(2, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(3, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(4, style = $$new_props.style);
    if ("for" in $$new_props)
      $$invalidate(5, forId = $$new_props.for);
    if ("floatAbove" in $$new_props)
      $$invalidate(0, floatAbove = $$new_props.floatAbove);
    if ("required" in $$new_props)
      $$invalidate(1, required = $$new_props.required);
    if ("wrapped" in $$new_props)
      $$invalidate(6, wrapped = $$new_props.wrapped);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 786433) {
      if (instance2 && previousFloatAbove !== floatAbove) {
        $$invalidate(19, previousFloatAbove = floatAbove);
        instance2.float(floatAbove);
      }
    }
    if ($$self.$$.dirty & 1310722) {
      if (instance2 && previousRequired !== required) {
        $$invalidate(20, previousRequired = required);
        instance2.setRequired(required);
      }
    }
  };
  return [
    floatAbove,
    required,
    use2,
    className,
    style,
    forId,
    wrapped,
    element2,
    internalClasses,
    internalStyles,
    forwardEvents,
    inputProps,
    $$restProps,
    shake,
    float,
    setRequired,
    getWidth,
    getElement,
    instance2,
    previousFloatAbove,
    previousRequired,
    span_binding,
    label_binding
  ];
}
class FloatingLabel extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$8, create_fragment$f, safe_not_equal, {
      use: 2,
      class: 3,
      style: 4,
      for: 5,
      floatAbove: 0,
      required: 1,
      wrapped: 6,
      shake: 13,
      float: 14,
      setRequired: 15,
      getWidth: 16,
      getElement: 17
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "for",
      "floatAbove",
      "required",
      "wrapped",
      "shake",
      "float",
      "setRequired",
      "getWidth",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get for() {
    return this.$$.ctx[5];
  }
  set for(forId) {
    this.$$set({ for: forId });
    flush();
  }
  get floatAbove() {
    return this.$$.ctx[0];
  }
  set floatAbove(floatAbove) {
    this.$$set({ floatAbove });
    flush();
  }
  get required() {
    return this.$$.ctx[1];
  }
  set required(required) {
    this.$$set({ required });
    flush();
  }
  get wrapped() {
    return this.$$.ctx[6];
  }
  set wrapped(wrapped) {
    this.$$set({ wrapped });
    flush();
  }
  get shake() {
    return this.$$.ctx[13];
  }
  get float() {
    return this.$$.ctx[14];
  }
  get setRequired() {
    return this.$$.ctx[15];
  }
  get getWidth() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
function create_fragment$e(ctx) {
  let div;
  let div_class_value;
  let div_style_value;
  let useActions_action;
  let mounted;
  let dispose;
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[1]]: true,
        "mdc-line-ripple": true,
        "mdc-line-ripple--active": ctx[3],
        ...ctx[5]
      })
    },
    {
      style: div_style_value = Object.entries(ctx[6]).map(func$5).concat([ctx[2]]).join(" ")
    },
    ctx[8]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      this.c = noop$1;
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      ctx[13](div);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[7].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & 42 && div_class_value !== (div_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-line-ripple": true,
          "mdc-line-ripple--active": ctx2[3],
          ...ctx2[5]
        })) && { class: div_class_value },
        dirty & 68 && div_style_value !== (div_style_value = Object.entries(ctx2[6]).map(func$5).concat([ctx2[2]]).join(" ")) && { style: div_style_value },
        dirty & 256 && ctx2[8]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[13](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func$5 = ([name, value]) => `${name}: ${value};`;
function instance_1$7($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { active = false } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  onMount(() => {
    instance2 = new MDCLineRippleFoundation({
      addClass,
      removeClass,
      hasClass,
      setStyle: addStyle,
      registerEventHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
    });
    instance2.init();
    return () => {
      instance2.destroy();
    };
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(5, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(5, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(6, internalStyles);
      } else {
        $$invalidate(6, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function activate() {
    instance2.activate();
  }
  function deactivate() {
    instance2.deactivate();
  }
  function setRippleCenter(xCoordinate) {
    instance2.setRippleCenter(xCoordinate);
  }
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(4, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(2, style = $$new_props.style);
    if ("active" in $$new_props)
      $$invalidate(3, active = $$new_props.active);
  };
  return [
    use2,
    className,
    style,
    active,
    element2,
    internalClasses,
    internalStyles,
    forwardEvents,
    $$restProps,
    activate,
    deactivate,
    setRippleCenter,
    getElement,
    div_binding
  ];
}
class LineRipple extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$7, create_fragment$e, safe_not_equal, {
      use: 0,
      class: 1,
      style: 2,
      active: 3,
      activate: 9,
      deactivate: 10,
      setRippleCenter: 11,
      getElement: 12
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "active",
      "activate",
      "deactivate",
      "setRippleCenter",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get active() {
    return this.$$.ctx[3];
  }
  set active(active) {
    this.$$set({ active });
    flush();
  }
  get activate() {
    return this.$$.ctx[9];
  }
  get deactivate() {
    return this.$$.ctx[10];
  }
  get setRippleCenter() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
function create_if_block$5(ctx) {
  let div;
  let slot;
  let div_style_value;
  return {
    c() {
      div = element("div");
      slot = element("slot");
      attr(div, "class", "mdc-notched-outline__notch");
      attr(div, "style", div_style_value = Object.entries(ctx[7]).map(func$4).join(" "));
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, slot);
    },
    p(ctx2, dirty) {
      if (dirty & 128 && div_style_value !== (div_style_value = Object.entries(ctx2[7]).map(func$4).join(" "))) {
        attr(div, "style", div_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$d(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let div2_class_value;
  let useActions_action;
  let mounted;
  let dispose;
  let if_block = !ctx[3] && create_if_block$5(ctx);
  let div2_levels = [
    {
      class: div2_class_value = classMap({
        [ctx[1]]: true,
        "mdc-notched-outline": true,
        "mdc-notched-outline--notched": ctx[2],
        "mdc-notched-outline--no-label": ctx[3],
        ...ctx[6]
      })
    },
    ctx[9]
  ];
  let div2_data = {};
  for (let i = 0; i < div2_levels.length; i += 1) {
    div2_data = assign(div2_data, div2_levels[i]);
  }
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      div1 = element("div");
      this.c = noop$1;
      attr(div0, "class", "mdc-notched-outline__leading");
      attr(div1, "class", "mdc-notched-outline__trailing");
      set_attributes(div2, div2_data);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div2, t0);
      if (if_block)
        if_block.m(div2, null);
      append(div2, t1);
      append(div2, div1);
      ctx[13](div2);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div2, ctx[0])),
          action_destroyer(ctx[8].call(null, div2)),
          listen(div2, "SMUIFloatingLabel:mount", ctx[14]),
          listen(div2, "SMUIFloatingLabel:unmount", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$5(ctx2);
          if_block.c();
          if_block.m(div2, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_attributes(div2, div2_data = get_spread_update(div2_levels, [
        dirty & 78 && div2_class_value !== (div2_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-notched-outline": true,
          "mdc-notched-outline--notched": ctx2[2],
          "mdc-notched-outline--no-label": ctx2[3],
          ...ctx2[6]
        })) && { class: div2_class_value },
        dirty & 512 && ctx2[9]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      ctx[13](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func$4 = ([name, value]) => `${name}: ${value};`;
function instance_1$6($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { notched = false } = $$props;
  let { noLabel = false } = $$props;
  let element2;
  let instance2;
  let floatingLabel;
  let internalClasses = {};
  let notchStyles = {};
  onMount(() => {
    instance2 = new MDCNotchedOutlineFoundation({
      addClass,
      removeClass,
      setNotchWidthProperty: (width) => addNotchStyle("width", width + "px"),
      removeNotchWidthProperty: () => removeNotchStyle("width")
    });
    instance2.init();
    return () => {
      instance2.destroy();
    };
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(6, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(6, internalClasses[className2] = false, internalClasses);
    }
  }
  function addNotchStyle(name, value) {
    if (notchStyles[name] != value) {
      if (value === "" || value == null) {
        delete notchStyles[name];
        $$invalidate(7, notchStyles);
      } else {
        $$invalidate(7, notchStyles[name] = value, notchStyles);
      }
    }
  }
  function removeNotchStyle(name) {
    if (name in notchStyles) {
      delete notchStyles[name];
      $$invalidate(7, notchStyles);
    }
  }
  function notch(notchWidth) {
    instance2.notch(notchWidth);
  }
  function closeNotch() {
    instance2.closeNotch();
  }
  function getElement() {
    return element2;
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(5, element2);
    });
  }
  const SMUIFloatingLabel_mount_handler = (event) => $$invalidate(4, floatingLabel = event.detail);
  const SMUIFloatingLabel_unmount_handler = () => $$invalidate(4, floatingLabel = void 0);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("notched" in $$new_props)
      $$invalidate(2, notched = $$new_props.notched);
    if ("noLabel" in $$new_props)
      $$invalidate(3, noLabel = $$new_props.noLabel);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      if (floatingLabel) {
        floatingLabel.addStyle("transition-duration", "0s");
        addClass("mdc-notched-outline--upgraded");
        requestAnimationFrame(() => {
          if (floatingLabel) {
            floatingLabel.removeStyle("transition-duration");
          }
        });
      } else {
        removeClass("mdc-notched-outline--upgraded");
      }
    }
  };
  return [
    use2,
    className,
    notched,
    noLabel,
    floatingLabel,
    element2,
    internalClasses,
    notchStyles,
    forwardEvents,
    $$restProps,
    notch,
    closeNotch,
    getElement,
    div2_binding,
    SMUIFloatingLabel_mount_handler,
    SMUIFloatingLabel_unmount_handler
  ];
}
class NotchedOutline extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$6, create_fragment$d, safe_not_equal, {
      use: 0,
      class: 1,
      notched: 2,
      noLabel: 3,
      notch: 10,
      closeNotch: 11,
      getElement: 12
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get notched() {
    return this.$$.ctx[2];
  }
  set notched(notched) {
    this.$$set({ notched });
    flush();
  }
  get noLabel() {
    return this.$$.ctx[3];
  }
  set noLabel(noLabel) {
    this.$$set({ noLabel });
    flush();
  }
  get notch() {
    return this.$$.ctx[10];
  }
  get closeNotch() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
function create_else_block$3(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[8]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 256)
        set_data(t, ctx2[8]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$4(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$c(ctx) {
  let div;
  let div_class_value;
  let div_aria_hidden_value;
  let useActions_action;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[8] == null)
      return create_if_block$4;
    return create_else_block$3;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[1]]: true,
        "mdc-select-helper-text": true,
        "mdc-select-helper-text--validation-msg": ctx[4],
        "mdc-select-helper-text--validation-msg-persistent": ctx[3],
        ...ctx[6]
      })
    },
    {
      "aria-hidden": div_aria_hidden_value = ctx[3] ? void 0 : "true"
    },
    { id: ctx[2] },
    ctx[7],
    ctx[10]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if_block.c();
      this.c = noop$1;
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_block.m(div, null);
      ctx[12](div);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[9].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & 90 && div_class_value !== (div_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-select-helper-text": true,
          "mdc-select-helper-text--validation-msg": ctx2[4],
          "mdc-select-helper-text--validation-msg-persistent": ctx2[3],
          ...ctx2[6]
        })) && { class: div_class_value },
        dirty & 8 && div_aria_hidden_value !== (div_aria_hidden_value = ctx2[3] ? void 0 : "true") && { "aria-hidden": div_aria_hidden_value },
        dirty & 4 && { id: ctx2[2] },
        dirty & 128 && ctx2[7],
        dirty & 1024 && ctx2[10]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
      ctx[12](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
let counter$3 = 0;
function instance_1$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { id = "SMUI-select-helper-text-" + counter$3++ } = $$props;
  let { persistent = false } = $$props;
  let { validationMsg = false } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalAttrs = {};
  let content = void 0;
  onMount(() => {
    instance2 = new MDCSelectHelperTextFoundation({
      addClass,
      removeClass,
      hasClass,
      getAttr,
      setAttr: addAttr,
      removeAttr,
      setContent: (value) => {
        $$invalidate(8, content = value);
      }
    });
    if (id.startsWith("SMUI-select-helper-text-")) {
      dispatch(getElement(), "SMUISelectHelperText:id", id);
    }
    dispatch(getElement(), "SMUISelectHelperText:mount", instance2);
    instance2.init();
    return () => {
      dispatch(getElement(), "SMUISelectHelperText:unmount", instance2);
      instance2.destroy();
    };
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(6, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(6, internalClasses[className2] = false, internalClasses);
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(7, internalAttrs[name] = value, internalAttrs);
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      $$invalidate(7, internalAttrs[name] = void 0, internalAttrs);
    }
  }
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(5, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(2, id = $$new_props.id);
    if ("persistent" in $$new_props)
      $$invalidate(3, persistent = $$new_props.persistent);
    if ("validationMsg" in $$new_props)
      $$invalidate(4, validationMsg = $$new_props.validationMsg);
  };
  return [
    use2,
    className,
    id,
    persistent,
    validationMsg,
    element2,
    internalClasses,
    internalAttrs,
    content,
    forwardEvents,
    $$restProps,
    getElement,
    div_binding
  ];
}
class HelperText extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$5, create_fragment$c, safe_not_equal, {
      use: 0,
      class: 1,
      id: 2,
      persistent: 3,
      validationMsg: 4,
      getElement: 11
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get id() {
    return this.$$.ctx[2];
  }
  set id(id) {
    this.$$set({ id });
    flush();
  }
  get persistent() {
    return this.$$.ctx[3];
  }
  set persistent(persistent) {
    this.$$set({ persistent });
    flush();
  }
  get validationMsg() {
    return this.$$.ctx[4];
  }
  set validationMsg(validationMsg) {
    this.$$set({ validationMsg });
    flush();
  }
  get getElement() {
    return this.$$.ctx[11];
  }
}
function create_if_block_6$1(ctx) {
  let input;
  let input_levels = [
    { type: "hidden" },
    { required: ctx[10] },
    { disabled: ctx[6] },
    { value: ctx[0] },
    prefixFilter(ctx[53], "input$")
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  return {
    c() {
      input = element("input");
      set_attributes(input, input_data);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      if (input.autofocus)
        input.focus();
    },
    p(ctx2, dirty) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "hidden" },
        dirty[0] & 1024 && { required: ctx2[10] },
        dirty[0] & 64 && { disabled: ctx2[6] },
        dirty[0] & 1 && { value: ctx2[0] },
        dirty[1] & 4194304 && prefixFilter(ctx2[53], "input$")
      ]));
    },
    d(detaching) {
      if (detaching)
        detach(input);
    }
  };
}
function create_if_block_5$1(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      attr(span, "class", "mdc-select__ripple");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_4$1(ctx) {
  let floatinglabel;
  let current;
  const floatinglabel_spread_levels = [
    { id: ctx[11] + "-smui-label" },
    {
      floatAbove: ctx[43] !== ""
    },
    { required: ctx[10] },
    prefixFilter(ctx[53], "label$")
  ];
  let floatinglabel_props = {
    $$slots: { default: [create_default_slot_5$2] },
    $$scope: { ctx }
  };
  for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }
  floatinglabel = new FloatingLabel({ props: floatinglabel_props });
  ctx[65](floatinglabel);
  return {
    c() {
      create_component(floatinglabel.$$.fragment);
    },
    m(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const floatinglabel_changes = dirty[0] & 3072 | dirty[1] & 4198400 ? get_spread_update(floatinglabel_spread_levels, [
        dirty[0] & 2048 && { id: ctx2[11] + "-smui-label" },
        dirty[1] & 4096 && {
          floatAbove: ctx2[43] !== ""
        },
        dirty[0] & 1024 && { required: ctx2[10] },
        dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "label$"))
      ]) : {};
      if (dirty[0] & 512 | dirty[3] & 128) {
        floatinglabel_changes.$$scope = { dirty, ctx: ctx2 };
      }
      floatinglabel.$set(floatinglabel_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[65](null);
      destroy_component(floatinglabel, detaching);
    }
  };
}
function create_default_slot_5$2(ctx) {
  let t_value = (ctx[9] == null ? "" : ctx[9]) + "";
  let t;
  let slot;
  return {
    c() {
      t = text(t_value);
      slot = element("slot");
      attr(slot, "name", "label");
    },
    m(target, anchor) {
      insert(target, t, anchor);
      insert(target, slot, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 512 && t_value !== (t_value = (ctx2[9] == null ? "" : ctx2[9]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(slot);
    }
  };
}
function create_if_block_2$1(ctx) {
  let notchedoutline;
  let current;
  const notchedoutline_spread_levels = [
    {
      noLabel: ctx[8] || ctx[9] == null && !ctx[52].label
    },
    prefixFilter(ctx[53], "outline$")
  ];
  let notchedoutline_props = {
    $$slots: { default: [create_default_slot_3$2] },
    $$scope: { ctx }
  };
  for (let i = 0; i < notchedoutline_spread_levels.length; i += 1) {
    notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
  }
  notchedoutline = new NotchedOutline({ props: notchedoutline_props });
  ctx[67](notchedoutline);
  return {
    c() {
      create_component(notchedoutline.$$.fragment);
    },
    m(target, anchor) {
      mount_component(notchedoutline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const notchedoutline_changes = dirty[0] & 768 | dirty[1] & 6291456 ? get_spread_update(notchedoutline_spread_levels, [
        dirty[0] & 768 | dirty[1] & 2097152 && {
          noLabel: ctx2[8] || ctx2[9] == null && !ctx2[52].label
        },
        dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "outline$"))
      ]) : {};
      if (dirty[0] & 3840 | dirty[1] & 6296064 | dirty[3] & 128) {
        notchedoutline_changes.$$scope = { dirty, ctx: ctx2 };
      }
      notchedoutline.$set(notchedoutline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(notchedoutline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(notchedoutline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[67](null);
      destroy_component(notchedoutline, detaching);
    }
  };
}
function create_if_block_3$1(ctx) {
  let floatinglabel;
  let current;
  const floatinglabel_spread_levels = [
    { id: ctx[11] + "-smui-label" },
    {
      floatAbove: ctx[43] !== ""
    },
    { required: ctx[10] },
    prefixFilter(ctx[53], "label$")
  ];
  let floatinglabel_props = {
    $$slots: { default: [create_default_slot_4$2] },
    $$scope: { ctx }
  };
  for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }
  floatinglabel = new FloatingLabel({ props: floatinglabel_props });
  ctx[66](floatinglabel);
  return {
    c() {
      create_component(floatinglabel.$$.fragment);
    },
    m(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const floatinglabel_changes = dirty[0] & 3072 | dirty[1] & 4198400 ? get_spread_update(floatinglabel_spread_levels, [
        dirty[0] & 2048 && { id: ctx2[11] + "-smui-label" },
        dirty[1] & 4096 && {
          floatAbove: ctx2[43] !== ""
        },
        dirty[0] & 1024 && { required: ctx2[10] },
        dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "label$"))
      ]) : {};
      if (dirty[0] & 512 | dirty[3] & 128) {
        floatinglabel_changes.$$scope = { dirty, ctx: ctx2 };
      }
      floatinglabel.$set(floatinglabel_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[66](null);
      destroy_component(floatinglabel, detaching);
    }
  };
}
function create_default_slot_4$2(ctx) {
  let t_value = (ctx[9] == null ? "" : ctx[9]) + "";
  let t;
  let slot;
  return {
    c() {
      t = text(t_value);
      slot = element("slot");
      attr(slot, "name", "label");
    },
    m(target, anchor) {
      insert(target, t, anchor);
      insert(target, slot, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 512 && t_value !== (t_value = (ctx2[9] == null ? "" : ctx2[9]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(slot);
    }
  };
}
function create_default_slot_3$2(ctx) {
  let if_block_anchor;
  let current;
  let if_block = !ctx[8] && (ctx[9] != null || ctx[52].label) && create_if_block_3$1(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (!ctx2[8] && (ctx2[9] != null || ctx2[52].label)) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 768 | dirty[1] & 2097152) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1$1(ctx) {
  let lineripple;
  let current;
  const lineripple_spread_levels = [prefixFilter(ctx[53], "ripple$")];
  let lineripple_props = {};
  for (let i = 0; i < lineripple_spread_levels.length; i += 1) {
    lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
  }
  lineripple = new LineRipple({ props: lineripple_props });
  ctx[69](lineripple);
  return {
    c() {
      create_component(lineripple.$$.fragment);
    },
    m(target, anchor) {
      mount_component(lineripple, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const lineripple_changes = dirty[1] & 4194304 ? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(ctx2[53], "ripple$"))]) : {};
      lineripple.$set(lineripple_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(lineripple.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(lineripple.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[69](null);
      destroy_component(lineripple, detaching);
    }
  };
}
function create_default_slot_2$2(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_default_slot_1$3(ctx) {
  let list_1;
  let updating_selectedIndex;
  let current;
  const list_1_spread_levels = [
    { role: "listbox" },
    { wrapFocus: ctx[36] },
    prefixFilter(ctx[53], "list$")
  ];
  function list_1_selectedIndex_binding(value) {
    ctx[75](value);
  }
  let list_1_props = {
    $$slots: { default: [create_default_slot_2$2] },
    $$scope: { ctx }
  };
  for (let i = 0; i < list_1_spread_levels.length; i += 1) {
    list_1_props = assign(list_1_props, list_1_spread_levels[i]);
  }
  if (ctx[24] !== void 0) {
    list_1_props.selectedIndex = ctx[24];
  }
  list_1 = new List({ props: list_1_props });
  binding_callbacks.push(() => bind$4(list_1, "selectedIndex", list_1_selectedIndex_binding));
  list_1.$on("SMUIList:mount", ctx[76]);
  return {
    c() {
      create_component(list_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(list_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const list_1_changes = dirty[1] & 4194336 ? get_spread_update(list_1_spread_levels, [
        list_1_spread_levels[0],
        dirty[1] & 32 && { wrapFocus: ctx2[36] },
        dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "list$"))
      ]) : {};
      if (dirty[3] & 128) {
        list_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_selectedIndex && dirty[0] & 16777216) {
        updating_selectedIndex = true;
        list_1_changes.selectedIndex = ctx2[24];
        add_flush_callback(() => updating_selectedIndex = false);
      }
      list_1.$set(list_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(list_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(list_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(list_1, detaching);
    }
  };
}
function create_if_block$3(ctx) {
  let helpertext;
  let current;
  const helpertext_spread_levels = [prefixFilter(ctx[53], "helperText$")];
  let helpertext_props = {
    $$slots: { default: [create_default_slot$4] },
    $$scope: { ctx }
  };
  for (let i = 0; i < helpertext_spread_levels.length; i += 1) {
    helpertext_props = assign(helpertext_props, helpertext_spread_levels[i]);
  }
  helpertext = new HelperText({ props: helpertext_props });
  helpertext.$on("SMUISelectHelperText:id", ctx[85]);
  helpertext.$on("SMUISelectHelperText:mount", ctx[86]);
  helpertext.$on("SMUISelectHelperText:unmount", ctx[87]);
  return {
    c() {
      create_component(helpertext.$$.fragment);
    },
    m(target, anchor) {
      mount_component(helpertext, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const helpertext_changes = dirty[1] & 4194304 ? get_spread_update(helpertext_spread_levels, [get_spread_object(prefixFilter(ctx2[53], "helperText$"))]) : {};
      if (dirty[3] & 128) {
        helpertext_changes.$$scope = { dirty, ctx: ctx2 };
      }
      helpertext.$set(helpertext_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(helpertext.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(helpertext.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(helpertext, detaching);
    }
  };
}
function create_default_slot$4(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      attr(slot, "name", "helperText");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$b(ctx) {
  let div1;
  let t0;
  let div0;
  let t1;
  let t2;
  let t3;
  let slot;
  let t4;
  let span1;
  let span0;
  let t5;
  let span0_id_value;
  let span0_class_value;
  let span0_aria_labelledby_value;
  let useActions_action;
  let span1_class_value;
  let useActions_action_1;
  let t6;
  let span2;
  let svg;
  let polygon0;
  let polygon1;
  let span2_class_value;
  let useActions_action_2;
  let t7;
  let div0_class_value;
  let div0_aria_required_value;
  let div0_aria_disabled_value;
  let useActions_action_3;
  let t8;
  let menu;
  let updating_open;
  let div1_class_value;
  let div1_style_value;
  let Ripple_action;
  let useActions_action_4;
  let t9;
  let if_block5_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[12] && create_if_block_6$1(ctx);
  let if_block1 = ctx[7] === "filled" && create_if_block_5$1();
  let if_block2 = ctx[7] !== "outlined" && !ctx[8] && (ctx[9] != null || ctx[52].label) && create_if_block_4$1(ctx);
  let if_block3 = ctx[7] === "outlined" && create_if_block_2$1(ctx);
  let span0_levels = [
    {
      id: span0_id_value = ctx[11] + "-smui-selected-text"
    },
    {
      class: span0_class_value = classMap({
        [ctx[19]]: true,
        "mdc-select__selected-text": true
      })
    },
    { role: "button" },
    { "aria-haspopup": "listbox" },
    {
      "aria-labelledby": span0_aria_labelledby_value = ctx[11] + "-smui-label"
    },
    prefixFilter(ctx[53], "selectedText$")
  ];
  let span0_data = {};
  for (let i = 0; i < span0_levels.length; i += 1) {
    span0_data = assign(span0_data, span0_levels[i]);
  }
  let span1_levels = [
    {
      class: span1_class_value = classMap({
        [ctx[17]]: true,
        "mdc-select__selected-text-container": true
      })
    },
    prefixFilter(ctx[53], "selectedTextContainer$")
  ];
  let span1_data = {};
  for (let i = 0; i < span1_levels.length; i += 1) {
    span1_data = assign(span1_data, span1_levels[i]);
  }
  let span2_levels = [
    {
      class: span2_class_value = classMap({
        [ctx[21]]: true,
        "mdc-select__dropdown-icon": true
      })
    },
    prefixFilter(ctx[53], "dropdownIcon$")
  ];
  let span2_data = {};
  for (let i = 0; i < span2_levels.length; i += 1) {
    span2_data = assign(span2_data, span2_levels[i]);
  }
  let if_block4 = ctx[7] !== "outlined" && ctx[5] && create_if_block_1$1(ctx);
  let div0_levels = [
    {
      class: div0_class_value = classMap({
        [ctx[15]]: true,
        "mdc-select__anchor": true
      })
    },
    {
      "aria-required": div0_aria_required_value = ctx[10] ? "true" : void 0
    },
    {
      "aria-disabled": div0_aria_disabled_value = ctx[6] ? "true" : void 0
    },
    { "aria-controls": ctx[31] },
    { "aria-describedby": ctx[31] },
    ctx[29],
    prefixFilter(ctx[53], "anchor$")
  ];
  let div0_data = {};
  for (let i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }
  const menu_spread_levels = [
    {
      class: classMap({
        [ctx[22]]: true,
        "mdc-select__menu": true,
        ...ctx[33]
      })
    },
    { fullWidth: true },
    { anchor: false },
    { anchorElement: ctx[34] },
    { anchorCorner: ctx[35] },
    prefixFilter(ctx[53], "menu$")
  ];
  function menu_open_binding(value) {
    ctx[77](value);
  }
  let menu_props = {
    $$slots: { default: [create_default_slot_1$3] },
    $$scope: { ctx }
  };
  for (let i = 0; i < menu_spread_levels.length; i += 1) {
    menu_props = assign(menu_props, menu_spread_levels[i]);
  }
  if (ctx[32] !== void 0) {
    menu_props.open = ctx[32];
  }
  menu = new Menu({ props: menu_props });
  binding_callbacks.push(() => bind$4(menu, "open", menu_open_binding));
  menu.$on("SMUIMenu:selected", ctx[78]);
  menu.$on("SMUIMenuSurface:closing", ctx[79]);
  menu.$on("SMUIMenuSurface:closed", ctx[80]);
  menu.$on("SMUIMenuSurface:opened", ctx[81]);
  let div1_levels = [
    {
      class: div1_class_value = classMap({
        [ctx[3]]: true,
        "mdc-select": true,
        "mdc-select--required": ctx[10],
        "mdc-select--disabled": ctx[6],
        "mdc-select--filled": ctx[7] === "filled",
        "mdc-select--outlined": ctx[7] === "outlined",
        "smui-select--standard": ctx[7] === "standard",
        "mdc-select--with-leading-icon": ctx[45](ctx[13]) ? ctx[52].leadingIcon : ctx[13],
        "mdc-select--no-label": ctx[8] || ctx[9] == null && !ctx[52].label,
        "mdc-select--invalid": ctx[1],
        "mdc-select--activated": ctx[32],
        "mdc-data-table__pagination-rows-per-page-select": ctx[46] === "data-table:pagination",
        ...ctx[26]
      })
    },
    {
      style: div1_style_value = Object.entries(ctx[27]).map(func$3).concat([ctx[4]]).join(" ")
    },
    exclude(ctx[53], [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  let if_block5 = ctx[52].helperText && create_if_block$3(ctx);
  return {
    c() {
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div0 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      slot = element("slot");
      t4 = space();
      span1 = element("span");
      span0 = element("span");
      t5 = text(ctx[43]);
      t6 = space();
      span2 = element("span");
      svg = svg_element("svg");
      polygon0 = svg_element("polygon");
      polygon1 = svg_element("polygon");
      t7 = space();
      if (if_block4)
        if_block4.c();
      t8 = space();
      create_component(menu.$$.fragment);
      t9 = space();
      if (if_block5)
        if_block5.c();
      if_block5_anchor = empty();
      this.c = noop$1;
      attr(slot, "name", "leadingIcon");
      set_attributes(span0, span0_data);
      set_attributes(span1, span1_data);
      attr(polygon0, "class", "mdc-select__dropdown-icon-inactive");
      attr(polygon0, "stroke", "none");
      attr(polygon0, "fill-rule", "evenodd");
      attr(polygon0, "points", "7 10 12 15 17 10");
      attr(polygon1, "class", "mdc-select__dropdown-icon-active");
      attr(polygon1, "stroke", "none");
      attr(polygon1, "fill-rule", "evenodd");
      attr(polygon1, "points", "7 15 12 10 17 15");
      attr(svg, "class", "mdc-select__dropdown-icon-graphic");
      attr(svg, "viewBox", "7 10 10 5");
      attr(svg, "focusable", "false");
      set_attributes(span2, span2_data);
      set_attributes(div0, div0_data);
      set_attributes(div1, div1_data);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      if (if_block0)
        if_block0.m(div1, null);
      append(div1, t0);
      append(div1, div0);
      if (if_block1)
        if_block1.m(div0, null);
      append(div0, t1);
      if (if_block2)
        if_block2.m(div0, null);
      append(div0, t2);
      if (if_block3)
        if_block3.m(div0, null);
      append(div0, t3);
      append(div0, slot);
      append(div0, t4);
      append(div0, span1);
      append(span1, span0);
      append(span0, t5);
      ctx[68](span0);
      append(div0, t6);
      append(div0, span2);
      append(span2, svg);
      append(svg, polygon0);
      append(svg, polygon1);
      append(div0, t7);
      if (if_block4)
        if_block4.m(div0, null);
      ctx[70](div0);
      append(div1, t8);
      mount_component(menu, div1, null);
      ctx[82](div1);
      insert(target, t9, anchor);
      if (if_block5)
        if_block5.m(target, anchor);
      insert(target, if_block5_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, span0, ctx[18])),
          action_destroyer(useActions_action_1 = useActions.call(null, span1, ctx[16])),
          action_destroyer(useActions_action_2 = useActions.call(null, span2, ctx[20])),
          action_destroyer(useActions_action_3 = useActions.call(null, div0, ctx[14])),
          listen(div0, "focus", ctx[71]),
          listen(div0, "blur", ctx[72]),
          listen(div0, "click", ctx[73]),
          listen(div0, "keydown", ctx[74]),
          listen(div0, "focus", ctx[63]),
          listen(div0, "blur", ctx[64]),
          action_destroyer(Ripple_action = Ripple.call(null, div1, {
            ripple: ctx[7] === "filled",
            unbounded: false,
            addClass: ctx[49],
            removeClass: ctx[50],
            addStyle: ctx[51]
          })),
          action_destroyer(Anchor.call(null, div1, {
            addClass: ctx[49],
            removeClass: ctx[50]
          })),
          action_destroyer(useActions_action_4 = useActions.call(null, div1, ctx[2])),
          action_destroyer(ctx[44].call(null, div1)),
          listen(div1, "SMUISelectLeadingIcon:mount", ctx[83]),
          listen(div1, "SMUISelectLeadingIcon:unmount", ctx[84])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[12]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_6$1(ctx2);
          if_block0.c();
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[7] === "filled") {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_5$1();
          if_block1.c();
          if_block1.m(div0, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[7] !== "outlined" && !ctx2[8] && (ctx2[9] != null || ctx2[52].label)) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & 896 | dirty[1] & 2097152) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_4$1(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div0, t2);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (ctx2[7] === "outlined") {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty[0] & 128) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_2$1(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div0, t3);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (!current || dirty[1] & 4096)
        set_data(t5, ctx2[43]);
      set_attributes(span0, span0_data = get_spread_update(span0_levels, [
        (!current || dirty[0] & 2048 && span0_id_value !== (span0_id_value = ctx2[11] + "-smui-selected-text")) && { id: span0_id_value },
        (!current || dirty[0] & 524288 && span0_class_value !== (span0_class_value = classMap({
          [ctx2[19]]: true,
          "mdc-select__selected-text": true
        }))) && { class: span0_class_value },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!current || dirty[0] & 2048 && span0_aria_labelledby_value !== (span0_aria_labelledby_value = ctx2[11] + "-smui-label")) && {
          "aria-labelledby": span0_aria_labelledby_value
        },
        dirty[1] & 4194304 && prefixFilter(ctx2[53], "selectedText$")
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 262144)
        useActions_action.update.call(null, ctx2[18]);
      set_attributes(span1, span1_data = get_spread_update(span1_levels, [
        (!current || dirty[0] & 131072 && span1_class_value !== (span1_class_value = classMap({
          [ctx2[17]]: true,
          "mdc-select__selected-text-container": true
        }))) && { class: span1_class_value },
        dirty[1] & 4194304 && prefixFilter(ctx2[53], "selectedTextContainer$")
      ]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & 65536)
        useActions_action_1.update.call(null, ctx2[16]);
      set_attributes(span2, span2_data = get_spread_update(span2_levels, [
        (!current || dirty[0] & 2097152 && span2_class_value !== (span2_class_value = classMap({
          [ctx2[21]]: true,
          "mdc-select__dropdown-icon": true
        }))) && { class: span2_class_value },
        dirty[1] & 4194304 && prefixFilter(ctx2[53], "dropdownIcon$")
      ]));
      if (useActions_action_2 && is_function(useActions_action_2.update) && dirty[0] & 1048576)
        useActions_action_2.update.call(null, ctx2[20]);
      if (ctx2[7] !== "outlined" && ctx2[5]) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty[0] & 160) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_1$1(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div0, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      set_attributes(div0, div0_data = get_spread_update(div0_levels, [
        (!current || dirty[0] & 32768 && div0_class_value !== (div0_class_value = classMap({
          [ctx2[15]]: true,
          "mdc-select__anchor": true
        }))) && { class: div0_class_value },
        (!current || dirty[0] & 1024 && div0_aria_required_value !== (div0_aria_required_value = ctx2[10] ? "true" : void 0)) && {
          "aria-required": div0_aria_required_value
        },
        (!current || dirty[0] & 64 && div0_aria_disabled_value !== (div0_aria_disabled_value = ctx2[6] ? "true" : void 0)) && {
          "aria-disabled": div0_aria_disabled_value
        },
        (!current || dirty[1] & 1) && { "aria-controls": ctx2[31] },
        (!current || dirty[1] & 1) && { "aria-describedby": ctx2[31] },
        dirty[0] & 536870912 && ctx2[29],
        dirty[1] & 4194304 && prefixFilter(ctx2[53], "anchor$")
      ]));
      if (useActions_action_3 && is_function(useActions_action_3.update) && dirty[0] & 16384)
        useActions_action_3.update.call(null, ctx2[14]);
      const menu_changes = dirty[0] & 4194304 | dirty[1] & 4194332 ? get_spread_update(menu_spread_levels, [
        dirty[0] & 4194304 | dirty[1] & 4 && {
          class: classMap({
            [ctx2[22]]: true,
            "mdc-select__menu": true,
            ...ctx2[33]
          })
        },
        menu_spread_levels[1],
        menu_spread_levels[2],
        dirty[1] & 8 && { anchorElement: ctx2[34] },
        dirty[1] & 16 && { anchorCorner: ctx2[35] },
        dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "menu$"))
      ]) : {};
      if (dirty[0] & 16777216 | dirty[1] & 4194400 | dirty[3] & 128) {
        menu_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty[1] & 2) {
        updating_open = true;
        menu_changes.open = ctx2[32];
        add_flush_callback(() => updating_open = false);
      }
      menu.$set(menu_changes);
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [
        (!current || dirty[0] & 67119050 | dirty[1] & 2097154 && div1_class_value !== (div1_class_value = classMap({
          [ctx2[3]]: true,
          "mdc-select": true,
          "mdc-select--required": ctx2[10],
          "mdc-select--disabled": ctx2[6],
          "mdc-select--filled": ctx2[7] === "filled",
          "mdc-select--outlined": ctx2[7] === "outlined",
          "smui-select--standard": ctx2[7] === "standard",
          "mdc-select--with-leading-icon": ctx2[45](ctx2[13]) ? ctx2[52].leadingIcon : ctx2[13],
          "mdc-select--no-label": ctx2[8] || ctx2[9] == null && !ctx2[52].label,
          "mdc-select--invalid": ctx2[1],
          "mdc-select--activated": ctx2[32],
          "mdc-data-table__pagination-rows-per-page-select": ctx2[46] === "data-table:pagination",
          ...ctx2[26]
        }))) && { class: div1_class_value },
        (!current || dirty[0] & 134217744 && div1_style_value !== (div1_style_value = Object.entries(ctx2[27]).map(func$3).concat([ctx2[4]]).join(" "))) && { style: div1_style_value },
        dirty[1] & 4194304 && exclude(ctx2[53], [
          "input$",
          "anchor$",
          "label$",
          "outline$",
          "selectedTextContainer$",
          "selectedText$",
          "dropdownIcon$",
          "ripple$",
          "menu$",
          "list$",
          "helperText$"
        ])
      ]));
      if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & 128)
        Ripple_action.update.call(null, {
          ripple: ctx2[7] === "filled",
          unbounded: false,
          addClass: ctx2[49],
          removeClass: ctx2[50],
          addStyle: ctx2[51]
        });
      if (useActions_action_4 && is_function(useActions_action_4.update) && dirty[0] & 4)
        useActions_action_4.update.call(null, ctx2[2]);
      if (ctx2[52].helperText) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
          if (dirty[1] & 2097152) {
            transition_in(if_block5, 1);
          }
        } else {
          if_block5 = create_if_block$3(ctx2);
          if_block5.c();
          transition_in(if_block5, 1);
          if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
        }
      } else if (if_block5) {
        group_outros();
        transition_out(if_block5, 1, 1, () => {
          if_block5 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      transition_in(menu.$$.fragment, local);
      transition_in(if_block5);
      current = true;
    },
    o(local) {
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      transition_out(menu.$$.fragment, local);
      transition_out(if_block5);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      ctx[68](null);
      if (if_block4)
        if_block4.d();
      ctx[70](null);
      destroy_component(menu);
      ctx[82](null);
      if (detaching)
        detach(t9);
      if (if_block5)
        if_block5.d(detaching);
      if (detaching)
        detach(if_block5_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
let counter$2 = 0;
function getNormalizedXCoordinate(evt) {
  const targetClientRect = evt.currentTarget.getBoundingClientRect();
  const xCoordinate = isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
  return xCoordinate - targetClientRect.left;
}
function isTouchEvent(evt) {
  return "touches" in evt;
}
const func$3 = ([name, value]) => `${name}: ${value};`;
function instance_1$4($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "getUseDefaultValidation",
    "setUseDefaultValidation",
    "focus",
    "layout",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selectedTextStore;
  let $valueStore;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { disabled = false } = $$props;
  let { variant = "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { value = "" } = $$props;
  let { key = (item) => item } = $$props;
  let { dirty = false } = $$props;
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  const useDefaultValidation = isUninitializedValue(invalid);
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { required = false } = $$props;
  let { inputId = "SMUI-select-" + counter$2++ } = $$props;
  let { hiddenInput = false } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { anchor$use = [] } = $$props;
  let { anchor$class = "" } = $$props;
  let { selectedTextContainer$use = [] } = $$props;
  let { selectedTextContainer$class = "" } = $$props;
  let { selectedText$use = [] } = $$props;
  let { selectedText$class = "" } = $$props;
  let { dropdownIcon$use = [] } = $$props;
  let { dropdownIcon$class = "" } = $$props;
  let { menu$class = "" } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  let selectAnchor;
  let selectAnchorAttrs = {};
  let selectText;
  let selectedIndex = -1;
  let helperId = void 0;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let menuOpen = false;
  let menuClasses = {};
  let anchorElement = void 0;
  let anchorCorner = void 0;
  let wrapFocus = false;
  let list;
  let context2 = getContext("SMUI:select:context");
  let leadingIcon = void 0;
  let helperText = void 0;
  let floatingLabel = void 0;
  let lineRipple = void 0;
  let notchedOutline = void 0;
  setContext("SMUI:list:role", "");
  setContext("SMUI:list:nav", false);
  const selectedTextStore = writable("");
  component_subscribe($$self, selectedTextStore, (value2) => $$invalidate(43, $selectedTextStore = value2));
  setContext("SMUI:select:selectedText", selectedTextStore);
  const valueStore = writable(value);
  component_subscribe($$self, valueStore, (value2) => $$invalidate(89, $valueStore = value2));
  setContext("SMUI:select:value", valueStore);
  let previousSelectedIndex = selectedIndex;
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onMount(() => {
    $$invalidate(23, instance2 = new MDCSelectFoundation({
      setSelectedText: (text2) => {
        set_store_value(selectedTextStore, $selectedTextStore = text2, $selectedTextStore);
      },
      isSelectAnchorFocused: () => document.activeElement === selectAnchor,
      getSelectAnchorAttr,
      setSelectAnchorAttr: addSelectAnchorAttr,
      removeSelectAnchorAttr,
      addMenuClass,
      removeMenuClass,
      openMenu: () => {
        $$invalidate(32, menuOpen = true);
      },
      closeMenu: () => {
        $$invalidate(32, menuOpen = false);
      },
      getAnchorElement: () => selectAnchor,
      setMenuAnchorElement: (value2) => {
        $$invalidate(34, anchorElement = value2);
      },
      setMenuAnchorCorner: (value2) => {
        $$invalidate(35, anchorCorner = value2);
      },
      setMenuWrapFocus: (value2) => {
        $$invalidate(36, wrapFocus = value2);
      },
      getSelectedIndex: () => selectedIndex,
      setSelectedIndex: (index) => {
        $$invalidate(62, previousSelectedIndex = index);
        $$invalidate(24, selectedIndex = index);
        $$invalidate(0, value = getMenuItemValues()[selectedIndex]);
      },
      focusMenuItemAtIndex: (index) => {
        list.focusItemAtIndex(index);
      },
      getMenuItemCount: () => list.items.length,
      getMenuItemValues: () => getMenuItemValues().map(key),
      getMenuItemTextAtIndex: (index) => list.getPrimaryTextAtIndex(index),
      isTypeaheadInProgress: () => list.typeaheadInProgress,
      typeaheadMatchItem: (nextChar, startingIndex) => list.typeaheadMatchItem(nextChar, startingIndex),
      addClass,
      removeClass,
      hasClass,
      setRippleCenter: (normalizedX) => lineRipple && lineRipple.setRippleCenter(normalizedX),
      activateBottomLine: () => lineRipple && lineRipple.activate(),
      deactivateBottomLine: () => lineRipple && lineRipple.deactivate(),
      notifyChange: (_selectedValue) => {
        $$invalidate(54, dirty = true);
        if (updateInvalid) {
          $$invalidate(1, invalid = !instance2.isValid());
        }
        dispatch(getElement(), "SMUISelect:change", { value, index: selectedIndex }, void 0, true);
      },
      hasOutline: () => !!notchedOutline,
      notchOutline: (labelWidth) => notchedOutline && notchedOutline.notch(labelWidth),
      closeOutline: () => notchedOutline && notchedOutline.closeNotch(),
      hasLabel: () => !!floatingLabel,
      floatLabel: (shouldFloat) => floatingLabel && floatingLabel.float(shouldFloat),
      getLabelWidth: () => floatingLabel ? floatingLabel.getWidth() : 0,
      setLabelRequired: (isRequired) => floatingLabel && floatingLabel.setRequired(isRequired)
    }, {
      get helperText() {
        return helperText;
      },
      get leadingIcon() {
        return leadingIcon;
      }
    }));
    $$invalidate(24, selectedIndex = getMenuItemValues().indexOf(value));
    instance2.init();
    setUseDefaultValidation(useDefaultValidation);
    return () => {
      instance2.destroy();
    };
  });
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(26, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(26, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value2) {
    if (internalStyles[name] != value2) {
      if (value2 === "" || value2 == null) {
        delete internalStyles[name];
        $$invalidate(27, internalStyles);
      } else {
        $$invalidate(27, internalStyles[name] = value2, internalStyles);
      }
    }
  }
  function addMenuClass(className2) {
    if (!menuClasses[className2]) {
      $$invalidate(33, menuClasses[className2] = true, menuClasses);
    }
  }
  function removeMenuClass(className2) {
    if (!(className2 in menuClasses) || menuClasses[className2]) {
      $$invalidate(33, menuClasses[className2] = false, menuClasses);
    }
  }
  function getSelectAnchorAttr(name) {
    var _a2;
    return name in selectAnchorAttrs ? (_a2 = selectAnchorAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addSelectAnchorAttr(name, value2) {
    if (selectAnchorAttrs[name] !== value2) {
      $$invalidate(29, selectAnchorAttrs[name] = value2, selectAnchorAttrs);
    }
  }
  function removeSelectAnchorAttr(name) {
    if (!(name in selectAnchorAttrs) || selectAnchorAttrs[name] != null) {
      $$invalidate(29, selectAnchorAttrs[name] = void 0, selectAnchorAttrs);
    }
  }
  function getMenuItemValues() {
    return list.getOrderedList().map((accessor) => accessor.getValue());
  }
  function getUseDefaultValidation() {
    return instance2.getUseDefaultValidation();
  }
  function setUseDefaultValidation(useDefaultValidation2) {
    instance2.setUseDefaultValidation(useDefaultValidation2);
  }
  function focus() {
    selectAnchor.focus();
  }
  function layout() {
    instance2.layout();
  }
  function getElement() {
    return element2;
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function floatinglabel_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      floatingLabel = $$value;
      $$invalidate(40, floatingLabel);
    });
  }
  function floatinglabel_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      floatingLabel = $$value;
      $$invalidate(40, floatingLabel);
    });
  }
  function notchedoutline_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      notchedOutline = $$value;
      $$invalidate(42, notchedOutline);
    });
  }
  function span0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      selectText = $$value;
      $$invalidate(30, selectText);
    });
  }
  function lineripple_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      lineRipple = $$value;
      $$invalidate(41, lineRipple);
    });
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      selectAnchor = $$value;
      $$invalidate(28, selectAnchor);
    });
  }
  const focus_handler_1 = () => instance2 && instance2.handleFocus();
  const blur_handler_1 = () => instance2 && instance2.handleBlur();
  const click_handler = (event) => {
    selectAnchor.focus();
    if (instance2) {
      instance2.handleClick(getNormalizedXCoordinate(event));
    }
  };
  const keydown_handler = (event) => instance2 && instance2.handleKeydown(event);
  function list_1_selectedIndex_binding(value2) {
    selectedIndex = value2;
    $$invalidate(24, selectedIndex);
  }
  const SMUIList_mount_handler = (event) => $$invalidate(37, list = event.detail);
  function menu_open_binding(value2) {
    menuOpen = value2;
    $$invalidate(32, menuOpen);
  }
  const SMUIMenu_selected_handler = (event) => instance2 && instance2.handleMenuItemAction(event.detail.index);
  const SMUIMenuSurface_closing_handler = () => instance2 && instance2.handleMenuClosing();
  const SMUIMenuSurface_closed_handler = () => instance2 && instance2.handleMenuClosed();
  const SMUIMenuSurface_opened_handler = () => instance2 && instance2.handleMenuOpened();
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(25, element2);
    });
  }
  const SMUISelectLeadingIcon_mount_handler = (event) => $$invalidate(38, leadingIcon = event.detail);
  const SMUISelectLeadingIcon_unmount_handler = () => $$invalidate(38, leadingIcon = void 0);
  const SMUISelectHelperText_id_handler = (event) => $$invalidate(31, helperId = event.detail);
  const SMUISelectHelperText_mount_handler = (event) => $$invalidate(39, helperText = event.detail);
  const SMUISelectHelperText_unmount_handler = () => {
    $$invalidate(31, helperId = void 0);
    $$invalidate(39, helperText = void 0);
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(53, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(2, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(3, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(4, style = $$new_props.style);
    if ("ripple" in $$new_props)
      $$invalidate(5, ripple = $$new_props.ripple);
    if ("disabled" in $$new_props)
      $$invalidate(6, disabled = $$new_props.disabled);
    if ("variant" in $$new_props)
      $$invalidate(7, variant = $$new_props.variant);
    if ("noLabel" in $$new_props)
      $$invalidate(8, noLabel = $$new_props.noLabel);
    if ("label" in $$new_props)
      $$invalidate(9, label = $$new_props.label);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("key" in $$new_props)
      $$invalidate(55, key = $$new_props.key);
    if ("dirty" in $$new_props)
      $$invalidate(54, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props)
      $$invalidate(1, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props)
      $$invalidate(56, updateInvalid = $$new_props.updateInvalid);
    if ("required" in $$new_props)
      $$invalidate(10, required = $$new_props.required);
    if ("inputId" in $$new_props)
      $$invalidate(11, inputId = $$new_props.inputId);
    if ("hiddenInput" in $$new_props)
      $$invalidate(12, hiddenInput = $$new_props.hiddenInput);
    if ("withLeadingIcon" in $$new_props)
      $$invalidate(13, withLeadingIcon = $$new_props.withLeadingIcon);
    if ("anchor$use" in $$new_props)
      $$invalidate(14, anchor$use = $$new_props.anchor$use);
    if ("anchor$class" in $$new_props)
      $$invalidate(15, anchor$class = $$new_props.anchor$class);
    if ("selectedTextContainer$use" in $$new_props)
      $$invalidate(16, selectedTextContainer$use = $$new_props.selectedTextContainer$use);
    if ("selectedTextContainer$class" in $$new_props)
      $$invalidate(17, selectedTextContainer$class = $$new_props.selectedTextContainer$class);
    if ("selectedText$use" in $$new_props)
      $$invalidate(18, selectedText$use = $$new_props.selectedText$use);
    if ("selectedText$class" in $$new_props)
      $$invalidate(19, selectedText$class = $$new_props.selectedText$class);
    if ("dropdownIcon$use" in $$new_props)
      $$invalidate(20, dropdownIcon$use = $$new_props.dropdownIcon$use);
    if ("dropdownIcon$class" in $$new_props)
      $$invalidate(21, dropdownIcon$class = $$new_props.dropdownIcon$class);
    if ("menu$class" in $$new_props)
      $$invalidate(22, menu$class = $$new_props.menu$class);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 25165825 | $$self.$$.dirty[2] & 1) {
      if (previousSelectedIndex !== selectedIndex) {
        $$invalidate(62, previousSelectedIndex = selectedIndex);
        if (instance2) {
          instance2.setSelectedIndex(selectedIndex, false, true);
        } else {
          const values = getMenuItemValues();
          if (value !== values[selectedIndex]) {
            $$invalidate(0, value = values[selectedIndex]);
          }
        }
      }
    }
    if ($$self.$$.dirty[0] & 1) {
      set_store_value(valueStore, $valueStore = value, $valueStore);
    }
    if ($$self.$$.dirty[0] & 8388609 | $$self.$$.dirty[1] & 16777216) {
      if (instance2 && instance2.getValue() !== key(value)) {
        instance2.setValue(key(value));
      }
    }
    if ($$self.$$.dirty[0] & 8388672) {
      if (instance2 && instance2.getDisabled() !== disabled) {
        instance2.setDisabled(disabled);
      }
    }
    if ($$self.$$.dirty[0] & 8388610 | $$self.$$.dirty[1] & 41943040) {
      if (instance2 && dirty && instance2.isValid() !== !invalid) {
        if (updateInvalid) {
          $$invalidate(1, invalid = !instance2.isValid());
        } else {
          instance2.setValid(!invalid);
        }
      }
    }
    if ($$self.$$.dirty[0] & 8389632) {
      if (instance2 && instance2.getRequired() !== required) {
        instance2.setRequired(required);
      }
    }
  };
  return [
    value,
    invalid,
    use2,
    className,
    style,
    ripple,
    disabled,
    variant,
    noLabel,
    label,
    required,
    inputId,
    hiddenInput,
    withLeadingIcon,
    anchor$use,
    anchor$class,
    selectedTextContainer$use,
    selectedTextContainer$class,
    selectedText$use,
    selectedText$class,
    dropdownIcon$use,
    dropdownIcon$class,
    menu$class,
    instance2,
    selectedIndex,
    element2,
    internalClasses,
    internalStyles,
    selectAnchor,
    selectAnchorAttrs,
    selectText,
    helperId,
    menuOpen,
    menuClasses,
    anchorElement,
    anchorCorner,
    wrapFocus,
    list,
    leadingIcon,
    helperText,
    floatingLabel,
    lineRipple,
    notchedOutline,
    $selectedTextStore,
    forwardEvents,
    isUninitializedValue,
    context2,
    selectedTextStore,
    valueStore,
    addClass,
    removeClass,
    addStyle,
    $$slots,
    $$restProps,
    dirty,
    key,
    updateInvalid,
    getUseDefaultValidation,
    setUseDefaultValidation,
    focus,
    layout,
    getElement,
    previousSelectedIndex,
    focus_handler,
    blur_handler,
    floatinglabel_binding,
    floatinglabel_binding_1,
    notchedoutline_binding,
    span0_binding,
    lineripple_binding,
    div0_binding,
    focus_handler_1,
    blur_handler_1,
    click_handler,
    keydown_handler,
    list_1_selectedIndex_binding,
    SMUIList_mount_handler,
    menu_open_binding,
    SMUIMenu_selected_handler,
    SMUIMenuSurface_closing_handler,
    SMUIMenuSurface_closed_handler,
    SMUIMenuSurface_opened_handler,
    div1_binding,
    SMUISelectLeadingIcon_mount_handler,
    SMUISelectLeadingIcon_unmount_handler,
    SMUISelectHelperText_id_handler,
    SMUISelectHelperText_mount_handler,
    SMUISelectHelperText_unmount_handler
  ];
}
class Select extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: {
        ...attribute_to_object(this.attributes),
        $$slots: get_custom_elements_slots(this)
      },
      customElement: true
    }, instance_1$4, create_fragment$b, safe_not_equal, {
      use: 2,
      class: 3,
      style: 4,
      ripple: 5,
      disabled: 6,
      variant: 7,
      noLabel: 8,
      label: 9,
      value: 0,
      key: 55,
      dirty: 54,
      invalid: 1,
      updateInvalid: 56,
      required: 10,
      inputId: 11,
      hiddenInput: 12,
      withLeadingIcon: 13,
      anchor$use: 14,
      anchor$class: 15,
      selectedTextContainer$use: 16,
      selectedTextContainer$class: 17,
      selectedText$use: 18,
      selectedText$class: 19,
      dropdownIcon$use: 20,
      dropdownIcon$class: 21,
      menu$class: 22,
      getUseDefaultValidation: 57,
      setUseDefaultValidation: 58,
      focus: 59,
      layout: 60,
      getElement: 61
    }, null, [-1, -1, -1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "ripple",
      "disabled",
      "variant",
      "noLabel",
      "label",
      "value",
      "key",
      "dirty",
      "invalid",
      "updateInvalid",
      "required",
      "inputId",
      "hiddenInput",
      "withLeadingIcon",
      "anchor$use",
      "anchor$class",
      "selectedTextContainer$use",
      "selectedTextContainer$class",
      "selectedText$use",
      "selectedText$class",
      "dropdownIcon$use",
      "dropdownIcon$class",
      "menu$class",
      "getUseDefaultValidation",
      "setUseDefaultValidation",
      "focus",
      "layout",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get ripple() {
    return this.$$.ctx[5];
  }
  set ripple(ripple) {
    this.$$set({ ripple });
    flush();
  }
  get disabled() {
    return this.$$.ctx[6];
  }
  set disabled(disabled) {
    this.$$set({ disabled });
    flush();
  }
  get variant() {
    return this.$$.ctx[7];
  }
  set variant(variant) {
    this.$$set({ variant });
    flush();
  }
  get noLabel() {
    return this.$$.ctx[8];
  }
  set noLabel(noLabel) {
    this.$$set({ noLabel });
    flush();
  }
  get label() {
    return this.$$.ctx[9];
  }
  set label(label) {
    this.$$set({ label });
    flush();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get key() {
    return this.$$.ctx[55];
  }
  set key(key) {
    this.$$set({ key });
    flush();
  }
  get dirty() {
    return this.$$.ctx[54];
  }
  set dirty(dirty) {
    this.$$set({ dirty });
    flush();
  }
  get invalid() {
    return this.$$.ctx[1];
  }
  set invalid(invalid) {
    this.$$set({ invalid });
    flush();
  }
  get updateInvalid() {
    return this.$$.ctx[56];
  }
  set updateInvalid(updateInvalid) {
    this.$$set({ updateInvalid });
    flush();
  }
  get required() {
    return this.$$.ctx[10];
  }
  set required(required) {
    this.$$set({ required });
    flush();
  }
  get inputId() {
    return this.$$.ctx[11];
  }
  set inputId(inputId) {
    this.$$set({ inputId });
    flush();
  }
  get hiddenInput() {
    return this.$$.ctx[12];
  }
  set hiddenInput(hiddenInput) {
    this.$$set({ hiddenInput });
    flush();
  }
  get withLeadingIcon() {
    return this.$$.ctx[13];
  }
  set withLeadingIcon(withLeadingIcon) {
    this.$$set({ withLeadingIcon });
    flush();
  }
  get anchor$use() {
    return this.$$.ctx[14];
  }
  set anchor$use(anchor$use) {
    this.$$set({ anchor$use });
    flush();
  }
  get anchor$class() {
    return this.$$.ctx[15];
  }
  set anchor$class(anchor$class) {
    this.$$set({ anchor$class });
    flush();
  }
  get selectedTextContainer$use() {
    return this.$$.ctx[16];
  }
  set selectedTextContainer$use(selectedTextContainer$use) {
    this.$$set({ selectedTextContainer$use });
    flush();
  }
  get selectedTextContainer$class() {
    return this.$$.ctx[17];
  }
  set selectedTextContainer$class(selectedTextContainer$class) {
    this.$$set({ selectedTextContainer$class });
    flush();
  }
  get selectedText$use() {
    return this.$$.ctx[18];
  }
  set selectedText$use(selectedText$use) {
    this.$$set({ selectedText$use });
    flush();
  }
  get selectedText$class() {
    return this.$$.ctx[19];
  }
  set selectedText$class(selectedText$class) {
    this.$$set({ selectedText$class });
    flush();
  }
  get dropdownIcon$use() {
    return this.$$.ctx[20];
  }
  set dropdownIcon$use(dropdownIcon$use) {
    this.$$set({ dropdownIcon$use });
    flush();
  }
  get dropdownIcon$class() {
    return this.$$.ctx[21];
  }
  set dropdownIcon$class(dropdownIcon$class) {
    this.$$set({ dropdownIcon$class });
    flush();
  }
  get menu$class() {
    return this.$$.ctx[22];
  }
  set menu$class(menu$class) {
    this.$$set({ menu$class });
    flush();
  }
  get getUseDefaultValidation() {
    return this.$$.ctx[57];
  }
  get setUseDefaultValidation() {
    return this.$$.ctx[58];
  }
  get focus() {
    return this.$$.ctx[59];
  }
  get layout() {
    return this.$$.ctx[60];
  }
  get getElement() {
    return this.$$.ctx[61];
  }
}
function create_default_slot$3(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$a(ctx) {
  let item;
  let current;
  const item_spread_levels = [
    { use: ctx[3] },
    { "data-value": ctx[0] },
    { value: ctx[0] },
    { selected: ctx[2] },
    ctx[6]
  ];
  let item_props = {
    $$slots: { default: [create_default_slot$3] },
    $$scope: { ctx }
  };
  for (let i = 0; i < item_spread_levels.length; i += 1) {
    item_props = assign(item_props, item_spread_levels[i]);
  }
  item = new Item({ props: item_props });
  ctx[11](item);
  return {
    c() {
      create_component(item.$$.fragment);
      this.c = noop$1;
    },
    m(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const item_changes = dirty & 77 ? get_spread_update(item_spread_levels, [
        dirty & 8 && { use: ctx2[3] },
        dirty & 1 && { "data-value": ctx2[0] },
        dirty & 1 && { value: ctx2[0] },
        dirty & 4 && { selected: ctx2[2] },
        dirty & 64 && get_spread_object(ctx2[6])
      ]) : {};
      if (dirty & 32768) {
        item_changes.$$scope = { dirty, ctx: ctx2 };
      }
      item.$set(item_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[11](null);
      destroy_component(item, detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let usePass;
  let selected;
  const omit_props_names = ["use", "class", "value", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selectedText;
  let $selectedValue;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  const className = "";
  let { value = "" } = $$props;
  let element2;
  const selectedText = getContext("SMUI:select:selectedText");
  component_subscribe($$self, selectedText, (value2) => $$invalidate(12, $selectedText = value2));
  const selectedValue = getContext("SMUI:select:value");
  component_subscribe($$self, selectedValue, (value2) => $$invalidate(10, $selectedValue = value2));
  setContext("SMUI:list:item:role", "option");
  onMount(setSelectedText);
  onDestroy(setSelectedText);
  function setSelectedText() {
    if (selected && element2) {
      set_store_value(selectedText, $selectedText = element2.getPrimaryText(), $selectedText);
    }
  }
  function getElement() {
    return element2.getElement();
  }
  function item_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(7, use2 = $$new_props.use);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 128) {
      $$invalidate(3, usePass = [forwardEvents, ...use2]);
    }
    if ($$self.$$.dirty & 1025) {
      $$invalidate(2, selected = value != null && value !== "" && $selectedValue === value);
    }
  };
  return [
    value,
    element2,
    selected,
    usePass,
    selectedText,
    selectedValue,
    $$restProps,
    use2,
    className,
    getElement,
    $selectedValue,
    item_binding
  ];
}
class Option$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$6, create_fragment$a, safe_not_equal, {
      use: 7,
      class: 8,
      value: 0,
      getElement: 9
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "value", "getElement"];
  }
  get use() {
    return this.$$.ctx[7];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[8];
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
const Option = Option$1;
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var CssClasses;
(function(CssClasses2) {
  CssClasses2["RICH"] = "mdc-tooltip--rich";
  CssClasses2["SHOWN"] = "mdc-tooltip--shown";
  CssClasses2["SHOWING"] = "mdc-tooltip--showing";
  CssClasses2["SHOWING_TRANSITION"] = "mdc-tooltip--showing-transition";
  CssClasses2["HIDE"] = "mdc-tooltip--hide";
  CssClasses2["HIDE_TRANSITION"] = "mdc-tooltip--hide-transition";
  CssClasses2["MULTILINE_TOOLTIP"] = "mdc-tooltip--multiline";
  CssClasses2["SURFACE"] = "mdc-tooltip__surface";
  CssClasses2["SURFACE_ANIMATION"] = "mdc-tooltip__surface-animation";
  CssClasses2["TOOLTIP_CARET_TOP"] = "mdc-tooltip__caret-surface-top";
  CssClasses2["TOOLTIP_CARET_BOTTOM"] = "mdc-tooltip__caret-surface-bottom";
})(CssClasses || (CssClasses = {}));
var numbers$1 = {
  BOUNDED_ANCHOR_GAP: 4,
  UNBOUNDED_ANCHOR_GAP: 8,
  MIN_VIEWPORT_TOOLTIP_THRESHOLD: 8,
  HIDE_DELAY_MS: 600,
  SHOW_DELAY_MS: 500,
  MIN_HEIGHT: 24,
  MAX_WIDTH: 200,
  CARET_INDENTATION: 24,
  ANIMATION_SCALE: 0.8
};
var attributes = {
  ARIA_EXPANDED: "aria-expanded",
  ARIA_HASPOPUP: "aria-haspopup",
  PERSISTENT: "data-mdc-tooltip-persistent",
  SCROLLABLE_ANCESTOR: "tooltip-scrollable-ancestor",
  HAS_CARET: "data-mdc-tooltip-has-caret"
};
var XPosition;
(function(XPosition2) {
  XPosition2[XPosition2["DETECTED"] = 0] = "DETECTED";
  XPosition2[XPosition2["START"] = 1] = "START";
  XPosition2[XPosition2["CENTER"] = 2] = "CENTER";
  XPosition2[XPosition2["END"] = 3] = "END";
})(XPosition || (XPosition = {}));
var YPosition;
(function(YPosition2) {
  YPosition2[YPosition2["DETECTED"] = 0] = "DETECTED";
  YPosition2[YPosition2["ABOVE"] = 1] = "ABOVE";
  YPosition2[YPosition2["BELOW"] = 2] = "BELOW";
})(YPosition || (YPosition = {}));
var AnchorBoundaryType;
(function(AnchorBoundaryType2) {
  AnchorBoundaryType2[AnchorBoundaryType2["BOUNDED"] = 0] = "BOUNDED";
  AnchorBoundaryType2[AnchorBoundaryType2["UNBOUNDED"] = 1] = "UNBOUNDED";
})(AnchorBoundaryType || (AnchorBoundaryType = {}));
var strings$2 = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
  TOP: "top",
  BOTTOM: "bottom"
};
var PositionWithCaret;
(function(PositionWithCaret2) {
  PositionWithCaret2[PositionWithCaret2["DETECTED"] = 0] = "DETECTED";
  PositionWithCaret2[PositionWithCaret2["ABOVE_START"] = 1] = "ABOVE_START";
  PositionWithCaret2[PositionWithCaret2["ABOVE_CENTER"] = 2] = "ABOVE_CENTER";
  PositionWithCaret2[PositionWithCaret2["ABOVE_END"] = 3] = "ABOVE_END";
  PositionWithCaret2[PositionWithCaret2["TOP_SIDE_START"] = 4] = "TOP_SIDE_START";
  PositionWithCaret2[PositionWithCaret2["CENTER_SIDE_START"] = 5] = "CENTER_SIDE_START";
  PositionWithCaret2[PositionWithCaret2["BOTTOM_SIDE_START"] = 6] = "BOTTOM_SIDE_START";
  PositionWithCaret2[PositionWithCaret2["TOP_SIDE_END"] = 7] = "TOP_SIDE_END";
  PositionWithCaret2[PositionWithCaret2["CENTER_SIDE_END"] = 8] = "CENTER_SIDE_END";
  PositionWithCaret2[PositionWithCaret2["BOTTOM_SIDE_END"] = 9] = "BOTTOM_SIDE_END";
  PositionWithCaret2[PositionWithCaret2["BELOW_START"] = 10] = "BELOW_START";
  PositionWithCaret2[PositionWithCaret2["BELOW_CENTER"] = 11] = "BELOW_CENTER";
  PositionWithCaret2[PositionWithCaret2["BELOW_END"] = 12] = "BELOW_END";
})(PositionWithCaret || (PositionWithCaret = {}));
var YPositionWithCaret;
(function(YPositionWithCaret2) {
  YPositionWithCaret2[YPositionWithCaret2["ABOVE"] = 1] = "ABOVE";
  YPositionWithCaret2[YPositionWithCaret2["BELOW"] = 2] = "BELOW";
  YPositionWithCaret2[YPositionWithCaret2["SIDE_TOP"] = 3] = "SIDE_TOP";
  YPositionWithCaret2[YPositionWithCaret2["SIDE_CENTER"] = 4] = "SIDE_CENTER";
  YPositionWithCaret2[YPositionWithCaret2["SIDE_BOTTOM"] = 5] = "SIDE_BOTTOM";
})(YPositionWithCaret || (YPositionWithCaret = {}));
var XPositionWithCaret;
(function(XPositionWithCaret2) {
  XPositionWithCaret2[XPositionWithCaret2["START"] = 1] = "START";
  XPositionWithCaret2[XPositionWithCaret2["CENTER"] = 2] = "CENTER";
  XPositionWithCaret2[XPositionWithCaret2["END"] = 3] = "END";
  XPositionWithCaret2[XPositionWithCaret2["SIDE_START"] = 4] = "SIDE_START";
  XPositionWithCaret2[XPositionWithCaret2["SIDE_END"] = 5] = "SIDE_END";
})(XPositionWithCaret || (XPositionWithCaret = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var AnimationFrame = function() {
  function AnimationFrame2() {
    this.rafIDs = /* @__PURE__ */ new Map();
  }
  AnimationFrame2.prototype.request = function(key, callback) {
    var _this = this;
    this.cancel(key);
    var frameID = requestAnimationFrame(function(frame) {
      _this.rafIDs.delete(key);
      callback(frame);
    });
    this.rafIDs.set(key, frameID);
  };
  AnimationFrame2.prototype.cancel = function(key) {
    var rafID = this.rafIDs.get(key);
    if (rafID) {
      cancelAnimationFrame(rafID);
      this.rafIDs.delete(key);
    }
  };
  AnimationFrame2.prototype.cancelAll = function() {
    var _this = this;
    this.rafIDs.forEach(function(_, key) {
      _this.cancel(key);
    });
  };
  AnimationFrame2.prototype.getQueue = function() {
    var queue = [];
    this.rafIDs.forEach(function(_, key) {
      queue.push(key);
    });
    return queue;
  };
  return AnimationFrame2;
}();
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var RICH = CssClasses.RICH, SHOWN = CssClasses.SHOWN, SHOWING = CssClasses.SHOWING, SHOWING_TRANSITION = CssClasses.SHOWING_TRANSITION, HIDE = CssClasses.HIDE, HIDE_TRANSITION = CssClasses.HIDE_TRANSITION, MULTILINE_TOOLTIP = CssClasses.MULTILINE_TOOLTIP;
var AnimationKeys;
(function(AnimationKeys2) {
  AnimationKeys2["POLL_ANCHOR"] = "poll_anchor";
})(AnimationKeys || (AnimationKeys = {}));
var HAS_WINDOW = typeof window !== "undefined";
var MDCTooltipFoundation = function(_super) {
  __extends$1(MDCTooltipFoundation2, _super);
  function MDCTooltipFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCTooltipFoundation2.defaultAdapter), adapter)) || this;
    _this.tooltipShown = false;
    _this.anchorGap = numbers$1.BOUNDED_ANCHOR_GAP;
    _this.xTooltipPos = XPosition.DETECTED;
    _this.yTooltipPos = YPosition.DETECTED;
    _this.tooltipPositionWithCaret = PositionWithCaret.DETECTED;
    _this.minViewportTooltipThreshold = numbers$1.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
    _this.hideDelayMs = numbers$1.HIDE_DELAY_MS;
    _this.showDelayMs = numbers$1.SHOW_DELAY_MS;
    _this.anchorRect = null;
    _this.parentRect = null;
    _this.frameId = null;
    _this.hideTimeout = null;
    _this.showTimeout = null;
    _this.addAncestorScrollEventListeners = new Array();
    _this.removeAncestorScrollEventListeners = new Array();
    _this.animFrame = new AnimationFrame();
    _this.anchorBlurHandler = function(evt) {
      _this.handleAnchorBlur(evt);
    };
    _this.documentClickHandler = function(evt) {
      _this.handleDocumentClick(evt);
    };
    _this.documentKeydownHandler = function(evt) {
      _this.handleKeydown(evt);
    };
    _this.tooltipMouseEnterHandler = function() {
      _this.handleTooltipMouseEnter();
    };
    _this.tooltipMouseLeaveHandler = function() {
      _this.handleTooltipMouseLeave();
    };
    _this.richTooltipFocusOutHandler = function(evt) {
      _this.handleRichTooltipFocusOut(evt);
    };
    _this.windowScrollHandler = function() {
      _this.handleWindowScrollEvent();
    };
    _this.windowResizeHandler = function() {
      _this.handleWindowChangeEvent();
    };
    return _this;
  }
  Object.defineProperty(MDCTooltipFoundation2, "defaultAdapter", {
    get: function() {
      return {
        getAttribute: function() {
          return null;
        },
        setAttribute: function() {
          return void 0;
        },
        removeAttribute: function() {
          return void 0;
        },
        addClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        removeClass: function() {
          return void 0;
        },
        getComputedStyleProperty: function() {
          return "";
        },
        setStyleProperty: function() {
          return void 0;
        },
        setSurfaceAnimationStyleProperty: function() {
          return void 0;
        },
        getViewportWidth: function() {
          return 0;
        },
        getViewportHeight: function() {
          return 0;
        },
        getTooltipSize: function() {
          return { width: 0, height: 0 };
        },
        getAnchorBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        getParentBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        getAnchorAttribute: function() {
          return null;
        },
        setAnchorAttribute: function() {
          return null;
        },
        isRTL: function() {
          return false;
        },
        anchorContainsElement: function() {
          return false;
        },
        tooltipContainsElement: function() {
          return false;
        },
        focusAnchorElement: function() {
          return void 0;
        },
        registerEventHandler: function() {
          return void 0;
        },
        deregisterEventHandler: function() {
          return void 0;
        },
        registerAnchorEventHandler: function() {
          return void 0;
        },
        deregisterAnchorEventHandler: function() {
          return void 0;
        },
        registerDocumentEventHandler: function() {
          return void 0;
        },
        deregisterDocumentEventHandler: function() {
          return void 0;
        },
        registerWindowEventHandler: function() {
          return void 0;
        },
        deregisterWindowEventHandler: function() {
          return void 0;
        },
        notifyHidden: function() {
          return void 0;
        },
        getTooltipCaretBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        setTooltipCaretStyle: function() {
          return void 0;
        },
        clearTooltipCaretStyles: function() {
          return void 0;
        },
        getActiveElement: function() {
          return null;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTooltipFoundation2.prototype.init = function() {
    this.richTooltip = this.adapter.hasClass(RICH);
    this.persistentTooltip = this.adapter.getAttribute(attributes.PERSISTENT) === "true";
    this.interactiveTooltip = !!this.adapter.getAnchorAttribute(attributes.ARIA_EXPANDED) && this.adapter.getAnchorAttribute(attributes.ARIA_HASPOPUP) === "dialog";
    this.hasCaret = this.richTooltip && this.adapter.getAttribute(attributes.HAS_CARET) === "true";
  };
  MDCTooltipFoundation2.prototype.isShown = function() {
    return this.tooltipShown;
  };
  MDCTooltipFoundation2.prototype.isRich = function() {
    return this.richTooltip;
  };
  MDCTooltipFoundation2.prototype.isPersistent = function() {
    return this.persistentTooltip;
  };
  MDCTooltipFoundation2.prototype.handleAnchorMouseEnter = function() {
    var _this = this;
    if (this.tooltipShown) {
      this.show();
    } else {
      this.clearHideTimeout();
      this.showTimeout = setTimeout(function() {
        _this.show();
      }, this.showDelayMs);
    }
  };
  MDCTooltipFoundation2.prototype.handleAnchorTouchstart = function() {
    var _this = this;
    this.showTimeout = setTimeout(function() {
      _this.show();
    }, this.showDelayMs);
    this.adapter.registerWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
  };
  MDCTooltipFoundation2.prototype.preventContextMenuOnLongTouch = function(evt) {
    evt.preventDefault();
  };
  MDCTooltipFoundation2.prototype.handleAnchorTouchend = function() {
    this.clearShowTimeout();
    if (!this.isShown()) {
      this.adapter.deregisterWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
    }
  };
  MDCTooltipFoundation2.prototype.handleAnchorFocus = function(evt) {
    var _this = this;
    var relatedTarget = evt.relatedTarget;
    var tooltipContainsRelatedTarget = relatedTarget instanceof HTMLElement && this.adapter.tooltipContainsElement(relatedTarget);
    if (tooltipContainsRelatedTarget) {
      return;
    }
    this.showTimeout = setTimeout(function() {
      _this.show();
    }, this.showDelayMs);
  };
  MDCTooltipFoundation2.prototype.handleAnchorMouseLeave = function() {
    var _this = this;
    this.clearShowTimeout();
    this.hideTimeout = setTimeout(function() {
      _this.hide();
    }, this.hideDelayMs);
  };
  MDCTooltipFoundation2.prototype.handleAnchorClick = function() {
    if (this.tooltipShown) {
      this.hide();
    } else {
      this.show();
    }
  };
  MDCTooltipFoundation2.prototype.handleDocumentClick = function(evt) {
    var anchorOrTooltipContainsTargetElement = evt.target instanceof HTMLElement && (this.adapter.anchorContainsElement(evt.target) || this.adapter.tooltipContainsElement(evt.target));
    if (this.richTooltip && this.persistentTooltip && anchorOrTooltipContainsTargetElement) {
      return;
    }
    this.hide();
  };
  MDCTooltipFoundation2.prototype.handleKeydown = function(evt) {
    var key = normalizeKey(evt);
    if (key === KEY.ESCAPE) {
      var activeElement = this.adapter.getActiveElement();
      var tooltipContainsActiveElement = activeElement instanceof HTMLElement && this.adapter.tooltipContainsElement(activeElement);
      if (tooltipContainsActiveElement) {
        this.adapter.focusAnchorElement();
      }
      this.hide();
    }
  };
  MDCTooltipFoundation2.prototype.handleAnchorBlur = function(evt) {
    if (this.richTooltip) {
      var tooltipContainsRelatedTargetElement = evt.relatedTarget instanceof HTMLElement && this.adapter.tooltipContainsElement(evt.relatedTarget);
      if (tooltipContainsRelatedTargetElement) {
        return;
      }
      if (evt.relatedTarget === null && this.interactiveTooltip) {
        return;
      }
    }
    this.hide();
  };
  MDCTooltipFoundation2.prototype.handleTooltipMouseEnter = function() {
    this.show();
  };
  MDCTooltipFoundation2.prototype.handleTooltipMouseLeave = function() {
    var _this = this;
    this.clearShowTimeout();
    this.hideTimeout = setTimeout(function() {
      _this.hide();
    }, this.hideDelayMs);
  };
  MDCTooltipFoundation2.prototype.handleRichTooltipFocusOut = function(evt) {
    var anchorOrTooltipContainsRelatedTargetElement = evt.relatedTarget instanceof HTMLElement && (this.adapter.anchorContainsElement(evt.relatedTarget) || this.adapter.tooltipContainsElement(evt.relatedTarget));
    if (anchorOrTooltipContainsRelatedTargetElement) {
      return;
    }
    if (evt.relatedTarget === null && this.interactiveTooltip) {
      return;
    }
    this.hide();
  };
  MDCTooltipFoundation2.prototype.handleWindowScrollEvent = function() {
    if (this.persistentTooltip) {
      this.handleWindowChangeEvent();
      return;
    }
    this.hide();
  };
  MDCTooltipFoundation2.prototype.handleWindowChangeEvent = function() {
    var _this = this;
    this.animFrame.request(AnimationKeys.POLL_ANCHOR, function() {
      _this.repositionTooltipOnAnchorMove();
    });
  };
  MDCTooltipFoundation2.prototype.show = function() {
    var e_1, _a2;
    var _this = this;
    this.clearHideTimeout();
    this.clearShowTimeout();
    if (this.tooltipShown) {
      return;
    }
    this.tooltipShown = true;
    this.adapter.removeAttribute("aria-hidden");
    if (this.richTooltip) {
      if (this.interactiveTooltip) {
        this.adapter.setAnchorAttribute("aria-expanded", "true");
      }
      this.adapter.registerEventHandler("focusout", this.richTooltipFocusOutHandler);
    }
    if (!this.persistentTooltip) {
      this.adapter.registerEventHandler("mouseenter", this.tooltipMouseEnterHandler);
      this.adapter.registerEventHandler("mouseleave", this.tooltipMouseLeaveHandler);
    }
    this.adapter.removeClass(HIDE);
    this.adapter.addClass(SHOWING);
    if (this.isTooltipMultiline() && !this.richTooltip) {
      this.adapter.addClass(MULTILINE_TOOLTIP);
    }
    this.anchorRect = this.adapter.getAnchorBoundingRect();
    this.parentRect = this.adapter.getParentBoundingRect();
    this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip();
    this.adapter.registerAnchorEventHandler("blur", this.anchorBlurHandler);
    this.adapter.registerDocumentEventHandler("click", this.documentClickHandler);
    this.adapter.registerDocumentEventHandler("keydown", this.documentKeydownHandler);
    this.adapter.registerWindowEventHandler("scroll", this.windowScrollHandler);
    this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler);
    try {
      for (var _b2 = __values$1(this.addAncestorScrollEventListeners), _c = _b2.next(); !_c.done; _c = _b2.next()) {
        var fn = _c.value;
        fn();
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this.frameId = requestAnimationFrame(function() {
      _this.clearAllAnimationClasses();
      _this.adapter.addClass(SHOWN);
      _this.adapter.addClass(SHOWING_TRANSITION);
    });
  };
  MDCTooltipFoundation2.prototype.hide = function() {
    var e_2, _a2;
    this.clearHideTimeout();
    this.clearShowTimeout();
    if (!this.tooltipShown) {
      return;
    }
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    this.tooltipShown = false;
    this.adapter.setAttribute("aria-hidden", "true");
    this.adapter.deregisterEventHandler("focusout", this.richTooltipFocusOutHandler);
    if (this.richTooltip) {
      if (this.interactiveTooltip) {
        this.adapter.setAnchorAttribute("aria-expanded", "false");
      }
    }
    if (!this.persistentTooltip) {
      this.adapter.deregisterEventHandler("mouseenter", this.tooltipMouseEnterHandler);
      this.adapter.deregisterEventHandler("mouseleave", this.tooltipMouseLeaveHandler);
    }
    this.clearAllAnimationClasses();
    this.adapter.addClass(HIDE);
    this.adapter.addClass(HIDE_TRANSITION);
    this.adapter.removeClass(SHOWN);
    this.adapter.deregisterAnchorEventHandler("blur", this.anchorBlurHandler);
    this.adapter.deregisterDocumentEventHandler("click", this.documentClickHandler);
    this.adapter.deregisterDocumentEventHandler("keydown", this.documentKeydownHandler);
    this.adapter.deregisterWindowEventHandler("scroll", this.windowScrollHandler);
    this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler);
    this.adapter.deregisterWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
    try {
      for (var _b2 = __values$1(this.removeAncestorScrollEventListeners), _c = _b2.next(); !_c.done; _c = _b2.next()) {
        var fn = _c.value;
        fn();
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
  };
  MDCTooltipFoundation2.prototype.handleTransitionEnd = function() {
    var isHidingTooltip = this.adapter.hasClass(HIDE);
    this.adapter.removeClass(SHOWING);
    this.adapter.removeClass(SHOWING_TRANSITION);
    this.adapter.removeClass(HIDE);
    this.adapter.removeClass(HIDE_TRANSITION);
    if (isHidingTooltip) {
      this.adapter.notifyHidden();
    }
  };
  MDCTooltipFoundation2.prototype.clearAllAnimationClasses = function() {
    this.adapter.removeClass(SHOWING_TRANSITION);
    this.adapter.removeClass(HIDE_TRANSITION);
  };
  MDCTooltipFoundation2.prototype.setTooltipPosition = function(position) {
    var xPos = position.xPos, yPos = position.yPos, withCaretPos = position.withCaretPos;
    if (this.hasCaret && withCaretPos) {
      this.tooltipPositionWithCaret = withCaretPos;
      return;
    }
    if (xPos) {
      this.xTooltipPos = xPos;
    }
    if (yPos) {
      this.yTooltipPos = yPos;
    }
  };
  MDCTooltipFoundation2.prototype.setAnchorBoundaryType = function(type) {
    if (type === AnchorBoundaryType.UNBOUNDED) {
      this.anchorGap = numbers$1.UNBOUNDED_ANCHOR_GAP;
    } else {
      this.anchorGap = numbers$1.BOUNDED_ANCHOR_GAP;
    }
  };
  MDCTooltipFoundation2.prototype.setShowDelay = function(delayMs) {
    this.showDelayMs = delayMs;
  };
  MDCTooltipFoundation2.prototype.setHideDelay = function(delayMs) {
    this.hideDelayMs = delayMs;
  };
  MDCTooltipFoundation2.prototype.isTooltipMultiline = function() {
    var tooltipSize = this.adapter.getTooltipSize();
    return tooltipSize.height > numbers$1.MIN_HEIGHT && tooltipSize.width >= numbers$1.MAX_WIDTH;
  };
  MDCTooltipFoundation2.prototype.positionPlainTooltip = function() {
    var _a2 = this.calculateTooltipStyles(this.anchorRect), top = _a2.top, yTransformOrigin = _a2.yTransformOrigin, left = _a2.left, xTransformOrigin = _a2.xTransformOrigin;
    var transformProperty = HAS_WINDOW ? getCorrectPropertyName(window, "transform") : "transform";
    this.adapter.setSurfaceAnimationStyleProperty(transformProperty + "-origin", xTransformOrigin + " " + yTransformOrigin);
    this.adapter.setStyleProperty("top", top + "px");
    this.adapter.setStyleProperty("left", left + "px");
  };
  MDCTooltipFoundation2.prototype.positionRichTooltip = function() {
    var _a2, _b2, _c, _d;
    var width = this.adapter.getComputedStyleProperty("width");
    this.adapter.setStyleProperty("width", width);
    var _e = this.hasCaret ? this.calculateTooltipWithCaretStyles(this.anchorRect) : this.calculateTooltipStyles(this.anchorRect), top = _e.top, yTransformOrigin = _e.yTransformOrigin, left = _e.left, xTransformOrigin = _e.xTransformOrigin;
    var transformProperty = HAS_WINDOW ? getCorrectPropertyName(window, "transform") : "transform";
    this.adapter.setSurfaceAnimationStyleProperty(transformProperty + "-origin", xTransformOrigin + " " + yTransformOrigin);
    var leftAdjustment = left - ((_b2 = (_a2 = this.parentRect) === null || _a2 === void 0 ? void 0 : _a2.left) !== null && _b2 !== void 0 ? _b2 : 0);
    var topAdjustment = top - ((_d = (_c = this.parentRect) === null || _c === void 0 ? void 0 : _c.top) !== null && _d !== void 0 ? _d : 0);
    this.adapter.setStyleProperty("top", topAdjustment + "px");
    this.adapter.setStyleProperty("left", leftAdjustment + "px");
  };
  MDCTooltipFoundation2.prototype.calculateTooltipStyles = function(anchorRect) {
    if (!anchorRect) {
      return { top: 0, left: 0 };
    }
    var tooltipSize = this.adapter.getTooltipSize();
    var top = this.calculateYTooltipDistance(anchorRect, tooltipSize.height);
    var left = this.calculateXTooltipDistance(anchorRect, tooltipSize.width);
    return {
      top: top.distance,
      yTransformOrigin: top.yTransformOrigin,
      left: left.distance,
      xTransformOrigin: left.xTransformOrigin
    };
  };
  MDCTooltipFoundation2.prototype.calculateXTooltipDistance = function(anchorRect, tooltipWidth) {
    var isLTR = !this.adapter.isRTL();
    var startPos, endPos, centerPos;
    var startTransformOrigin, endTransformOrigin;
    if (this.richTooltip) {
      startPos = isLTR ? anchorRect.left - tooltipWidth : anchorRect.right;
      endPos = isLTR ? anchorRect.right : anchorRect.left - tooltipWidth;
      startTransformOrigin = isLTR ? strings$2.RIGHT : strings$2.LEFT;
      endTransformOrigin = isLTR ? strings$2.LEFT : strings$2.RIGHT;
    } else {
      startPos = isLTR ? anchorRect.left : anchorRect.right - tooltipWidth;
      endPos = isLTR ? anchorRect.right - tooltipWidth : anchorRect.left;
      centerPos = anchorRect.left + (anchorRect.width - tooltipWidth) / 2;
      startTransformOrigin = isLTR ? strings$2.LEFT : strings$2.RIGHT;
      endTransformOrigin = isLTR ? strings$2.RIGHT : strings$2.LEFT;
    }
    var positionOptions = this.richTooltip ? this.determineValidPositionOptions(startPos, endPos) : this.determineValidPositionOptions(centerPos, startPos, endPos);
    if (this.xTooltipPos === XPosition.START && positionOptions.has(startPos)) {
      return { distance: startPos, xTransformOrigin: startTransformOrigin };
    }
    if (this.xTooltipPos === XPosition.END && positionOptions.has(endPos)) {
      return { distance: endPos, xTransformOrigin: endTransformOrigin };
    }
    if (this.xTooltipPos === XPosition.CENTER && positionOptions.has(centerPos)) {
      return { distance: centerPos, xTransformOrigin: strings$2.CENTER };
    }
    var possiblePositions = this.richTooltip ? [
      { distance: endPos, xTransformOrigin: endTransformOrigin },
      { distance: startPos, xTransformOrigin: startTransformOrigin }
    ] : [
      { distance: centerPos, xTransformOrigin: strings$2.CENTER },
      { distance: startPos, xTransformOrigin: startTransformOrigin },
      { distance: endPos, xTransformOrigin: endTransformOrigin }
    ];
    var validPosition = possiblePositions.find(function(_a2) {
      var distance2 = _a2.distance;
      return positionOptions.has(distance2);
    });
    if (validPosition) {
      return validPosition;
    }
    if (anchorRect.left < 0) {
      return {
        distance: this.minViewportTooltipThreshold,
        xTransformOrigin: strings$2.LEFT
      };
    } else {
      var viewportWidth = this.adapter.getViewportWidth();
      var distance = viewportWidth - (tooltipWidth + this.minViewportTooltipThreshold);
      return { distance, xTransformOrigin: strings$2.RIGHT };
    }
  };
  MDCTooltipFoundation2.prototype.determineValidPositionOptions = function() {
    var e_3, _a2;
    var positions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      positions[_i] = arguments[_i];
    }
    var posWithinThreshold = /* @__PURE__ */ new Set();
    var posWithinViewport = /* @__PURE__ */ new Set();
    try {
      for (var positions_1 = __values$1(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
        var position = positions_1_1.value;
        if (this.positionHonorsViewportThreshold(position)) {
          posWithinThreshold.add(position);
        } else if (this.positionDoesntCollideWithViewport(position)) {
          posWithinViewport.add(position);
        }
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (positions_1_1 && !positions_1_1.done && (_a2 = positions_1.return))
          _a2.call(positions_1);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
  };
  MDCTooltipFoundation2.prototype.positionHonorsViewportThreshold = function(leftPos) {
    var viewportWidth = this.adapter.getViewportWidth();
    var tooltipWidth = this.adapter.getTooltipSize().width;
    return leftPos + tooltipWidth <= viewportWidth - this.minViewportTooltipThreshold && leftPos >= this.minViewportTooltipThreshold;
  };
  MDCTooltipFoundation2.prototype.positionDoesntCollideWithViewport = function(leftPos) {
    var viewportWidth = this.adapter.getViewportWidth();
    var tooltipWidth = this.adapter.getTooltipSize().width;
    return leftPos + tooltipWidth <= viewportWidth && leftPos >= 0;
  };
  MDCTooltipFoundation2.prototype.calculateYTooltipDistance = function(anchorRect, tooltipHeight) {
    var belowYPos = anchorRect.bottom + this.anchorGap;
    var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight);
    var yPositionOptions = this.determineValidYPositionOptions(aboveYPos, belowYPos);
    if (this.yTooltipPos === YPosition.ABOVE && yPositionOptions.has(aboveYPos)) {
      return { distance: aboveYPos, yTransformOrigin: strings$2.BOTTOM };
    } else if (this.yTooltipPos === YPosition.BELOW && yPositionOptions.has(belowYPos)) {
      return { distance: belowYPos, yTransformOrigin: strings$2.TOP };
    }
    if (yPositionOptions.has(belowYPos)) {
      return { distance: belowYPos, yTransformOrigin: strings$2.TOP };
    }
    if (yPositionOptions.has(aboveYPos)) {
      return { distance: aboveYPos, yTransformOrigin: strings$2.BOTTOM };
    }
    return { distance: belowYPos, yTransformOrigin: strings$2.TOP };
  };
  MDCTooltipFoundation2.prototype.determineValidYPositionOptions = function(aboveAnchorPos, belowAnchorPos) {
    var posWithinThreshold = /* @__PURE__ */ new Set();
    var posWithinViewport = /* @__PURE__ */ new Set();
    if (this.yPositionHonorsViewportThreshold(aboveAnchorPos)) {
      posWithinThreshold.add(aboveAnchorPos);
    } else if (this.yPositionDoesntCollideWithViewport(aboveAnchorPos)) {
      posWithinViewport.add(aboveAnchorPos);
    }
    if (this.yPositionHonorsViewportThreshold(belowAnchorPos)) {
      posWithinThreshold.add(belowAnchorPos);
    } else if (this.yPositionDoesntCollideWithViewport(belowAnchorPos)) {
      posWithinViewport.add(belowAnchorPos);
    }
    return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
  };
  MDCTooltipFoundation2.prototype.yPositionHonorsViewportThreshold = function(yPos) {
    var viewportHeight = this.adapter.getViewportHeight();
    var tooltipHeight = this.adapter.getTooltipSize().height;
    return yPos + tooltipHeight + this.minViewportTooltipThreshold <= viewportHeight && yPos >= this.minViewportTooltipThreshold;
  };
  MDCTooltipFoundation2.prototype.yPositionDoesntCollideWithViewport = function(yPos) {
    var viewportHeight = this.adapter.getViewportHeight();
    var tooltipHeight = this.adapter.getTooltipSize().height;
    return yPos + tooltipHeight <= viewportHeight && yPos >= 0;
  };
  MDCTooltipFoundation2.prototype.calculateTooltipWithCaretStyles = function(anchorRect) {
    this.adapter.clearTooltipCaretStyles();
    var caretSize = this.adapter.getTooltipCaretBoundingRect();
    if (!anchorRect || !caretSize) {
      return { position: PositionWithCaret.DETECTED, top: 0, left: 0 };
    }
    var caretWidth = caretSize.width / numbers$1.ANIMATION_SCALE;
    var caretHeight = caretSize.height / numbers$1.ANIMATION_SCALE / 2;
    var tooltipSize = this.adapter.getTooltipSize();
    var yOptions = this.calculateYWithCaretDistanceOptions(anchorRect, tooltipSize.height, { caretWidth, caretHeight });
    var xOptions = this.calculateXWithCaretDistanceOptions(anchorRect, tooltipSize.width, { caretWidth, caretHeight });
    var positionOptions = this.validateTooltipWithCaretDistances(yOptions, xOptions);
    if (positionOptions.size < 1) {
      positionOptions = this.generateBackupPositionOption(anchorRect, tooltipSize, { caretWidth, caretHeight });
    }
    var _a2 = this.determineTooltipWithCaretDistance(positionOptions), position = _a2.position, xDistance = _a2.xDistance, yDistance = _a2.yDistance;
    var _b2 = this.setCaretPositionStyles(position, { caretWidth, caretHeight }), yTransformOrigin = _b2.yTransformOrigin, xTransformOrigin = _b2.xTransformOrigin;
    return {
      yTransformOrigin,
      xTransformOrigin,
      top: yDistance,
      left: xDistance
    };
  };
  MDCTooltipFoundation2.prototype.calculateXWithCaretDistanceOptions = function(anchorRect, tooltipWidth, caretSize) {
    var caretWidth = caretSize.caretWidth, caretHeight = caretSize.caretHeight;
    var isLTR = !this.adapter.isRTL();
    var anchorMidpoint = anchorRect.left + anchorRect.width / 2;
    var sideLeftAligned = anchorRect.left - (tooltipWidth + this.anchorGap + caretHeight);
    var sideRightAligned = anchorRect.right + this.anchorGap + caretHeight;
    var sideStartPos = isLTR ? sideLeftAligned : sideRightAligned;
    var sideEndPos = isLTR ? sideRightAligned : sideLeftAligned;
    var verticalLeftAligned = anchorMidpoint - (numbers$1.CARET_INDENTATION + caretWidth / 2);
    var verticalRightAligned = anchorMidpoint - (tooltipWidth - numbers$1.CARET_INDENTATION - caretWidth / 2);
    var verticalStartPos = isLTR ? verticalLeftAligned : verticalRightAligned;
    var verticalEndPos = isLTR ? verticalRightAligned : verticalLeftAligned;
    var verticalCenterPos = anchorMidpoint - tooltipWidth / 2;
    var possiblePositionsMap = /* @__PURE__ */ new Map([
      [XPositionWithCaret.START, verticalStartPos],
      [XPositionWithCaret.CENTER, verticalCenterPos],
      [XPositionWithCaret.END, verticalEndPos],
      [XPositionWithCaret.SIDE_END, sideEndPos],
      [XPositionWithCaret.SIDE_START, sideStartPos]
    ]);
    return possiblePositionsMap;
  };
  MDCTooltipFoundation2.prototype.calculateYWithCaretDistanceOptions = function(anchorRect, tooltipHeight, caretSize) {
    var caretWidth = caretSize.caretWidth, caretHeight = caretSize.caretHeight;
    var anchorMidpoint = anchorRect.top + anchorRect.height / 2;
    var belowYPos = anchorRect.bottom + this.anchorGap + caretHeight;
    var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight + caretHeight);
    var sideTopYPos = anchorMidpoint - (numbers$1.CARET_INDENTATION + caretWidth / 2);
    var sideCenterYPos = anchorMidpoint - tooltipHeight / 2;
    var sideBottomYPos = anchorMidpoint - (tooltipHeight - numbers$1.CARET_INDENTATION - caretWidth / 2);
    var possiblePositionsMap = /* @__PURE__ */ new Map([
      [YPositionWithCaret.ABOVE, aboveYPos],
      [YPositionWithCaret.BELOW, belowYPos],
      [YPositionWithCaret.SIDE_TOP, sideTopYPos],
      [YPositionWithCaret.SIDE_CENTER, sideCenterYPos],
      [YPositionWithCaret.SIDE_BOTTOM, sideBottomYPos]
    ]);
    return possiblePositionsMap;
  };
  MDCTooltipFoundation2.prototype.repositionTooltipOnAnchorMove = function() {
    var newAnchorRect = this.adapter.getAnchorBoundingRect();
    if (!newAnchorRect || !this.anchorRect)
      return;
    if (newAnchorRect.top !== this.anchorRect.top || newAnchorRect.left !== this.anchorRect.left || newAnchorRect.height !== this.anchorRect.height || newAnchorRect.width !== this.anchorRect.width) {
      this.anchorRect = newAnchorRect;
      this.parentRect = this.adapter.getParentBoundingRect();
      this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip();
    }
  };
  MDCTooltipFoundation2.prototype.validateTooltipWithCaretDistances = function(yOptions, xOptions) {
    var e_4, _a2, e_5, _b2, e_6, _c;
    var posWithinThreshold = /* @__PURE__ */ new Map();
    var posWithinViewport = /* @__PURE__ */ new Map();
    var validMappings = /* @__PURE__ */ new Map([
      [
        YPositionWithCaret.ABOVE,
        [
          XPositionWithCaret.START,
          XPositionWithCaret.CENTER,
          XPositionWithCaret.END
        ]
      ],
      [
        YPositionWithCaret.BELOW,
        [
          XPositionWithCaret.START,
          XPositionWithCaret.CENTER,
          XPositionWithCaret.END
        ]
      ],
      [
        YPositionWithCaret.SIDE_TOP,
        [XPositionWithCaret.SIDE_START, XPositionWithCaret.SIDE_END]
      ],
      [
        YPositionWithCaret.SIDE_CENTER,
        [XPositionWithCaret.SIDE_START, XPositionWithCaret.SIDE_END]
      ],
      [
        YPositionWithCaret.SIDE_BOTTOM,
        [XPositionWithCaret.SIDE_START, XPositionWithCaret.SIDE_END]
      ]
    ]);
    try {
      for (var _d = __values$1(validMappings.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var y = _e.value;
        var yDistance = yOptions.get(y);
        if (this.yPositionHonorsViewportThreshold(yDistance)) {
          try {
            for (var _f = (e_5 = void 0, __values$1(validMappings.get(y))), _g = _f.next(); !_g.done; _g = _f.next()) {
              var x = _g.value;
              var xDistance = xOptions.get(x);
              if (this.positionHonorsViewportThreshold(xDistance)) {
                var caretPositionName = this.caretPositionOptionsMapping(x, y);
                posWithinThreshold.set(caretPositionName, { xDistance, yDistance });
              }
            }
          } catch (e_5_1) {
            e_5 = { error: e_5_1 };
          } finally {
            try {
              if (_g && !_g.done && (_b2 = _f.return))
                _b2.call(_f);
            } finally {
              if (e_5)
                throw e_5.error;
            }
          }
        } else if (this.yPositionDoesntCollideWithViewport(yDistance)) {
          try {
            for (var _h = (e_6 = void 0, __values$1(validMappings.get(y))), _j = _h.next(); !_j.done; _j = _h.next()) {
              var x = _j.value;
              var xDistance = xOptions.get(x);
              if (this.positionDoesntCollideWithViewport(xDistance)) {
                var caretPositionName = this.caretPositionOptionsMapping(x, y);
                posWithinViewport.set(caretPositionName, { xDistance, yDistance });
              }
            }
          } catch (e_6_1) {
            e_6 = { error: e_6_1 };
          } finally {
            try {
              if (_j && !_j.done && (_c = _h.return))
                _c.call(_h);
            } finally {
              if (e_6)
                throw e_6.error;
            }
          }
        }
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (_e && !_e.done && (_a2 = _d.return))
          _a2.call(_d);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
  };
  MDCTooltipFoundation2.prototype.generateBackupPositionOption = function(anchorRect, tooltipSize, caretSize) {
    var isLTR = !this.adapter.isRTL();
    var xDistance;
    var xPos;
    if (anchorRect.left < 0) {
      xDistance = this.minViewportTooltipThreshold + caretSize.caretHeight;
      xPos = isLTR ? XPositionWithCaret.END : XPositionWithCaret.START;
    } else {
      var viewportWidth = this.adapter.getViewportWidth();
      xDistance = viewportWidth - (tooltipSize.width + this.minViewportTooltipThreshold + caretSize.caretHeight);
      xPos = isLTR ? XPositionWithCaret.START : XPositionWithCaret.END;
    }
    var yDistance;
    var yPos;
    if (anchorRect.top < 0) {
      yDistance = this.minViewportTooltipThreshold + caretSize.caretHeight;
      yPos = YPositionWithCaret.BELOW;
    } else {
      var viewportHeight = this.adapter.getViewportHeight();
      yDistance = viewportHeight - (tooltipSize.height + this.minViewportTooltipThreshold + caretSize.caretHeight);
      yPos = YPositionWithCaret.ABOVE;
    }
    var caretPositionName = this.caretPositionOptionsMapping(xPos, yPos);
    return /* @__PURE__ */ new Map([[caretPositionName, { xDistance, yDistance }]]);
  };
  MDCTooltipFoundation2.prototype.determineTooltipWithCaretDistance = function(options) {
    if (options.has(this.tooltipPositionWithCaret)) {
      var tooltipPos = options.get(this.tooltipPositionWithCaret);
      return {
        position: this.tooltipPositionWithCaret,
        xDistance: tooltipPos.xDistance,
        yDistance: tooltipPos.yDistance
      };
    }
    var orderPref = [
      PositionWithCaret.ABOVE_START,
      PositionWithCaret.ABOVE_CENTER,
      PositionWithCaret.ABOVE_END,
      PositionWithCaret.TOP_SIDE_START,
      PositionWithCaret.CENTER_SIDE_START,
      PositionWithCaret.BOTTOM_SIDE_START,
      PositionWithCaret.TOP_SIDE_END,
      PositionWithCaret.CENTER_SIDE_END,
      PositionWithCaret.BOTTOM_SIDE_END,
      PositionWithCaret.BELOW_START,
      PositionWithCaret.BELOW_CENTER,
      PositionWithCaret.BELOW_END
    ];
    var validPosition = orderPref.find(function(pos2) {
      return options.has(pos2);
    });
    var pos = options.get(validPosition);
    return {
      position: validPosition,
      xDistance: pos.xDistance,
      yDistance: pos.yDistance
    };
  };
  MDCTooltipFoundation2.prototype.caretPositionOptionsMapping = function(xPos, yPos) {
    switch (yPos) {
      case YPositionWithCaret.ABOVE:
        if (xPos === XPositionWithCaret.START) {
          return PositionWithCaret.ABOVE_START;
        } else if (xPos === XPositionWithCaret.CENTER) {
          return PositionWithCaret.ABOVE_CENTER;
        } else if (xPos === XPositionWithCaret.END) {
          return PositionWithCaret.ABOVE_END;
        }
        break;
      case YPositionWithCaret.BELOW:
        if (xPos === XPositionWithCaret.START) {
          return PositionWithCaret.BELOW_START;
        } else if (xPos === XPositionWithCaret.CENTER) {
          return PositionWithCaret.BELOW_CENTER;
        } else if (xPos === XPositionWithCaret.END) {
          return PositionWithCaret.BELOW_END;
        }
        break;
      case YPositionWithCaret.SIDE_TOP:
        if (xPos === XPositionWithCaret.SIDE_START) {
          return PositionWithCaret.TOP_SIDE_START;
        } else if (xPos === XPositionWithCaret.SIDE_END) {
          return PositionWithCaret.TOP_SIDE_END;
        }
        break;
      case YPositionWithCaret.SIDE_CENTER:
        if (xPos === XPositionWithCaret.SIDE_START) {
          return PositionWithCaret.CENTER_SIDE_START;
        } else if (xPos === XPositionWithCaret.SIDE_END) {
          return PositionWithCaret.CENTER_SIDE_END;
        }
        break;
      case YPositionWithCaret.SIDE_BOTTOM:
        if (xPos === XPositionWithCaret.SIDE_START) {
          return PositionWithCaret.BOTTOM_SIDE_START;
        } else if (xPos === XPositionWithCaret.SIDE_END) {
          return PositionWithCaret.BOTTOM_SIDE_END;
        }
        break;
    }
    throw new Error("MDCTooltipFoundation: Invalid caret position of " + xPos + ", " + yPos);
  };
  MDCTooltipFoundation2.prototype.setCaretPositionStyles = function(position, caretSize) {
    var e_7, _a2;
    var values = this.calculateCaretPositionOnTooltip(position, caretSize);
    if (!values) {
      return { yTransformOrigin: 0, xTransformOrigin: 0 };
    }
    this.adapter.clearTooltipCaretStyles();
    this.adapter.setTooltipCaretStyle(values.yAlignment, values.yAxisPx);
    this.adapter.setTooltipCaretStyle(values.xAlignment, values.xAxisPx);
    var skewRadians = values.skew * (Math.PI / 180);
    var scaleX = Math.cos(skewRadians);
    this.adapter.setTooltipCaretStyle("transform", "rotate(" + values.rotation + "deg) skewY(" + values.skew + "deg) scaleX(" + scaleX + ")");
    this.adapter.setTooltipCaretStyle("transform-origin", values.xAlignment + " " + values.yAlignment);
    try {
      for (var _b2 = __values$1(values.caretCorners), _c = _b2.next(); !_c.done; _c = _b2.next()) {
        var corner = _c.value;
        this.adapter.setTooltipCaretStyle(corner, "0");
      }
    } catch (e_7_1) {
      e_7 = { error: e_7_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_7)
          throw e_7.error;
      }
    }
    return {
      yTransformOrigin: values.yTransformOrigin,
      xTransformOrigin: values.xTransformOrigin
    };
  };
  MDCTooltipFoundation2.prototype.calculateCaretPositionOnTooltip = function(tooltipPos, caretSize) {
    var isLTR = !this.adapter.isRTL();
    var tooltipWidth = this.adapter.getComputedStyleProperty("width");
    var tooltipHeight = this.adapter.getComputedStyleProperty("height");
    if (!tooltipWidth || !tooltipHeight || !caretSize) {
      return;
    }
    var midpointWidth = "calc((" + tooltipWidth + " - " + caretSize.caretWidth + "px) / 2)";
    var midpointHeight = "calc((" + tooltipHeight + " - " + caretSize.caretWidth + "px) / 2)";
    var flushWithEdge = "0";
    var indentedFromEdge = numbers$1.CARET_INDENTATION + "px";
    var indentedFromWidth = "calc(" + tooltipWidth + " - " + indentedFromEdge + ")";
    var indentedFromHeight = "calc(" + tooltipHeight + " - " + indentedFromEdge + ")";
    var verticalRotation = 35;
    var horizontalRotation = Math.abs(90 - verticalRotation);
    var bottomRightTopLeftBorderRadius = ["border-bottom-right-radius", "border-top-left-radius"];
    var bottomLeftTopRightBorderRadius = ["border-bottom-left-radius", "border-top-right-radius"];
    var skewDeg = 20;
    switch (tooltipPos) {
      case PositionWithCaret.BELOW_CENTER:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: strings$2.LEFT,
          yAxisPx: flushWithEdge,
          xAxisPx: midpointWidth,
          rotation: -1 * verticalRotation,
          skew: -1 * skewDeg,
          xTransformOrigin: midpointWidth,
          yTransformOrigin: flushWithEdge,
          caretCorners: bottomRightTopLeftBorderRadius
        };
      case PositionWithCaret.BELOW_END:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: isLTR ? strings$2.RIGHT : strings$2.LEFT,
          yAxisPx: flushWithEdge,
          xAxisPx: indentedFromEdge,
          rotation: isLTR ? verticalRotation : -1 * verticalRotation,
          skew: isLTR ? skewDeg : -1 * skewDeg,
          xTransformOrigin: isLTR ? indentedFromWidth : indentedFromEdge,
          yTransformOrigin: flushWithEdge,
          caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
        };
      case PositionWithCaret.BELOW_START:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: isLTR ? strings$2.LEFT : strings$2.RIGHT,
          yAxisPx: flushWithEdge,
          xAxisPx: indentedFromEdge,
          rotation: isLTR ? -1 * verticalRotation : verticalRotation,
          skew: isLTR ? -1 * skewDeg : skewDeg,
          xTransformOrigin: isLTR ? indentedFromEdge : indentedFromWidth,
          yTransformOrigin: flushWithEdge,
          caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
        };
      case PositionWithCaret.TOP_SIDE_END:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: isLTR ? strings$2.LEFT : strings$2.RIGHT,
          yAxisPx: indentedFromEdge,
          xAxisPx: flushWithEdge,
          rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
          skew: isLTR ? -1 * skewDeg : skewDeg,
          xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
          yTransformOrigin: indentedFromEdge,
          caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
        };
      case PositionWithCaret.CENTER_SIDE_END:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: isLTR ? strings$2.LEFT : strings$2.RIGHT,
          yAxisPx: midpointHeight,
          xAxisPx: flushWithEdge,
          rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
          skew: isLTR ? -1 * skewDeg : skewDeg,
          xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
          yTransformOrigin: midpointHeight,
          caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
        };
      case PositionWithCaret.BOTTOM_SIDE_END:
        return {
          yAlignment: strings$2.BOTTOM,
          xAlignment: isLTR ? strings$2.LEFT : strings$2.RIGHT,
          yAxisPx: indentedFromEdge,
          xAxisPx: flushWithEdge,
          rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
          skew: isLTR ? skewDeg : -1 * skewDeg,
          xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
          yTransformOrigin: indentedFromHeight,
          caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
        };
      case PositionWithCaret.TOP_SIDE_START:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: isLTR ? strings$2.RIGHT : strings$2.LEFT,
          yAxisPx: indentedFromEdge,
          xAxisPx: flushWithEdge,
          rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
          skew: isLTR ? skewDeg : -1 * skewDeg,
          xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
          yTransformOrigin: indentedFromEdge,
          caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
        };
      case PositionWithCaret.CENTER_SIDE_START:
        return {
          yAlignment: strings$2.TOP,
          xAlignment: isLTR ? strings$2.RIGHT : strings$2.LEFT,
          yAxisPx: midpointHeight,
          xAxisPx: flushWithEdge,
          rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
          skew: isLTR ? skewDeg : -1 * skewDeg,
          xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
          yTransformOrigin: midpointHeight,
          caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
        };
      case PositionWithCaret.BOTTOM_SIDE_START:
        return {
          yAlignment: strings$2.BOTTOM,
          xAlignment: isLTR ? strings$2.RIGHT : strings$2.LEFT,
          yAxisPx: indentedFromEdge,
          xAxisPx: flushWithEdge,
          rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
          skew: isLTR ? -1 * skewDeg : skewDeg,
          xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
          yTransformOrigin: indentedFromHeight,
          caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
        };
      case PositionWithCaret.ABOVE_CENTER:
        return {
          yAlignment: strings$2.BOTTOM,
          xAlignment: strings$2.LEFT,
          yAxisPx: flushWithEdge,
          xAxisPx: midpointWidth,
          rotation: verticalRotation,
          skew: skewDeg,
          xTransformOrigin: midpointWidth,
          yTransformOrigin: tooltipHeight,
          caretCorners: bottomLeftTopRightBorderRadius
        };
      case PositionWithCaret.ABOVE_END:
        return {
          yAlignment: strings$2.BOTTOM,
          xAlignment: isLTR ? strings$2.RIGHT : strings$2.LEFT,
          yAxisPx: flushWithEdge,
          xAxisPx: indentedFromEdge,
          rotation: isLTR ? -1 * verticalRotation : verticalRotation,
          skew: isLTR ? -1 * skewDeg : skewDeg,
          xTransformOrigin: isLTR ? indentedFromWidth : indentedFromEdge,
          yTransformOrigin: tooltipHeight,
          caretCorners: isLTR ? bottomRightTopLeftBorderRadius : bottomLeftTopRightBorderRadius
        };
      default:
      case PositionWithCaret.ABOVE_START:
        return {
          yAlignment: strings$2.BOTTOM,
          xAlignment: isLTR ? strings$2.LEFT : strings$2.RIGHT,
          yAxisPx: flushWithEdge,
          xAxisPx: indentedFromEdge,
          rotation: isLTR ? verticalRotation : -1 * verticalRotation,
          skew: isLTR ? skewDeg : -1 * skewDeg,
          xTransformOrigin: isLTR ? indentedFromEdge : indentedFromWidth,
          yTransformOrigin: tooltipHeight,
          caretCorners: isLTR ? bottomLeftTopRightBorderRadius : bottomRightTopLeftBorderRadius
        };
    }
  };
  MDCTooltipFoundation2.prototype.clearShowTimeout = function() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  };
  MDCTooltipFoundation2.prototype.clearHideTimeout = function() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  };
  MDCTooltipFoundation2.prototype.attachScrollHandler = function(addEventListenerFn) {
    var _this = this;
    this.addAncestorScrollEventListeners.push(function() {
      addEventListenerFn("scroll", _this.windowScrollHandler);
    });
  };
  MDCTooltipFoundation2.prototype.removeScrollHandler = function(removeEventHandlerFn) {
    var _this = this;
    this.removeAncestorScrollEventListeners.push(function() {
      removeEventHandlerFn("scroll", _this.windowScrollHandler);
    });
  };
  MDCTooltipFoundation2.prototype.destroy = function() {
    var e_8, _a2;
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
    this.clearHideTimeout();
    this.clearShowTimeout();
    this.adapter.removeClass(SHOWN);
    this.adapter.removeClass(SHOWING_TRANSITION);
    this.adapter.removeClass(SHOWING);
    this.adapter.removeClass(HIDE);
    this.adapter.removeClass(HIDE_TRANSITION);
    if (this.richTooltip) {
      this.adapter.deregisterEventHandler("focusout", this.richTooltipFocusOutHandler);
    }
    if (!this.persistentTooltip) {
      this.adapter.deregisterEventHandler("mouseenter", this.tooltipMouseEnterHandler);
      this.adapter.deregisterEventHandler("mouseleave", this.tooltipMouseLeaveHandler);
    }
    this.adapter.deregisterAnchorEventHandler("blur", this.anchorBlurHandler);
    this.adapter.deregisterDocumentEventHandler("click", this.documentClickHandler);
    this.adapter.deregisterDocumentEventHandler("keydown", this.documentKeydownHandler);
    this.adapter.deregisterWindowEventHandler("scroll", this.windowScrollHandler);
    this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler);
    try {
      for (var _b2 = __values$1(this.removeAncestorScrollEventListeners), _c = _b2.next(); !_c.done; _c = _b2.next()) {
        var fn = _c.value;
        fn();
      }
    } catch (e_8_1) {
      e_8 = { error: e_8_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b2.return))
          _a2.call(_b2);
      } finally {
        if (e_8)
          throw e_8.error;
      }
    }
    this.animFrame.cancelAll();
  };
  return MDCTooltipFoundation2;
}(MDCFoundation);
function create_fragment$9(ctx) {
  let div1;
  let div0;
  let slot;
  let div0_class_value;
  let div0_style_value;
  let div1_class_value;
  let div1_style_value;
  let div1_role_value;
  let div1_tabindex_value;
  let div1_data_mdc_tooltip_persist_value;
  let div1_data_mdc_tooltip_persistent_value;
  let div1_data_hide_tooltip_from_screenreader_value;
  let useActions_action;
  let mounted;
  let dispose;
  let div0_levels = [
    {
      class: div0_class_value = classMap({
        [ctx[7]]: true,
        "mdc-tooltip__surface": true,
        "mdc-tooltip__surface-animation": true
      })
    },
    {
      style: div0_style_value = Object.entries(ctx[14]).map(func$2).concat([ctx[8]]).join(" ")
    },
    prefixFilter(ctx[19], "surface$")
  ];
  let div0_data = {};
  for (let i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }
  let div1_levels = [
    {
      class: div1_class_value = classMap({
        [ctx[1]]: true,
        "mdc-tooltip": true,
        "mdc-tooltip--rich": ctx[18],
        ...ctx[11]
      })
    },
    {
      style: div1_style_value = Object.entries(ctx[12]).map(func_1$1).concat([ctx[2]]).join(" ")
    },
    {
      role: div1_role_value = ctx[18] && ctx[5] ? "dialog" : "tooltip"
    },
    { "aria-hidden": "true" },
    { id: ctx[3] },
    {
      tabindex: div1_tabindex_value = ctx[18] && ctx[4] ? -1 : void 0
    },
    {
      "data-mdc-tooltip-persist": div1_data_mdc_tooltip_persist_value = ctx[18] && ctx[4] ? "true" : void 0
    },
    {
      "data-mdc-tooltip-persistent": div1_data_mdc_tooltip_persistent_value = ctx[18] && ctx[4] ? "true" : void 0
    },
    { "data-mdc-tooltip-has-caret": void 0 },
    {
      "data-hide-tooltip-from-screenreader": div1_data_hide_tooltip_from_screenreader_value = ctx[6] ? "true" : void 0
    },
    ctx[13],
    exclude(ctx[19], ["surface$"])
  ];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      slot = element("slot");
      this.c = noop$1;
      set_attributes(div0, div0_data);
      set_attributes(div1, div1_data);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, slot);
      ctx[30](div1);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div1, ctx[0])),
          action_destroyer(ctx[15].call(null, div1)),
          listen(div1, "transitionend", ctx[31])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(div0, div0_data = get_spread_update(div0_levels, [
        dirty[0] & 128 && div0_class_value !== (div0_class_value = classMap({
          [ctx2[7]]: true,
          "mdc-tooltip__surface": true,
          "mdc-tooltip__surface-animation": true
        })) && { class: div0_class_value },
        dirty[0] & 16640 && div0_style_value !== (div0_style_value = Object.entries(ctx2[14]).map(func$2).concat([ctx2[8]]).join(" ")) && { style: div0_style_value },
        dirty[0] & 524288 && prefixFilter(ctx2[19], "surface$")
      ]));
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [
        dirty[0] & 2050 && div1_class_value !== (div1_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-tooltip": true,
          "mdc-tooltip--rich": ctx2[18],
          ...ctx2[11]
        })) && { class: div1_class_value },
        dirty[0] & 4100 && div1_style_value !== (div1_style_value = Object.entries(ctx2[12]).map(func_1$1).concat([ctx2[2]]).join(" ")) && { style: div1_style_value },
        dirty[0] & 32 && div1_role_value !== (div1_role_value = ctx2[18] && ctx2[5] ? "dialog" : "tooltip") && { role: div1_role_value },
        { "aria-hidden": "true" },
        dirty[0] & 8 && { id: ctx2[3] },
        dirty[0] & 16 && div1_tabindex_value !== (div1_tabindex_value = ctx2[18] && ctx2[4] ? -1 : void 0) && { tabindex: div1_tabindex_value },
        dirty[0] & 16 && div1_data_mdc_tooltip_persist_value !== (div1_data_mdc_tooltip_persist_value = ctx2[18] && ctx2[4] ? "true" : void 0) && {
          "data-mdc-tooltip-persist": div1_data_mdc_tooltip_persist_value
        },
        dirty[0] & 16 && div1_data_mdc_tooltip_persistent_value !== (div1_data_mdc_tooltip_persistent_value = ctx2[18] && ctx2[4] ? "true" : void 0) && {
          "data-mdc-tooltip-persistent": div1_data_mdc_tooltip_persistent_value
        },
        { "data-mdc-tooltip-has-caret": void 0 },
        dirty[0] & 64 && div1_data_hide_tooltip_from_screenreader_value !== (div1_data_hide_tooltip_from_screenreader_value = ctx2[6] ? "true" : void 0) && {
          "data-hide-tooltip-from-screenreader": div1_data_hide_tooltip_from_screenreader_value
        },
        dirty[0] & 8192 && ctx2[13],
        dirty[0] & 524288 && exclude(ctx2[19], ["surface$"])
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[30](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
let counter$1 = 0;
const func$2 = ([name, value]) => `${name}: ${value};`;
const func_1$1 = ([name, value]) => `${name}: ${value};`;
function instance_1$3($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "id",
    "unbounded",
    "xPos",
    "yPos",
    "persistent",
    "interactive",
    "hideFromScreenreader",
    "showDelay",
    "hideDelay",
    "surface$class",
    "surface$style",
    "attachScrollHandler",
    "removeScrollHandler",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $anchor;
  let $tooltip;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { id = "SMUI-tooltip-" + counter$1++ } = $$props;
  let { unbounded = false } = $$props;
  let { xPos = "detected" } = $$props;
  let { yPos = "detected" } = $$props;
  let { persistent = false } = $$props;
  let { interactive = persistent } = $$props;
  let { hideFromScreenreader = false } = $$props;
  let { showDelay = void 0 } = $$props;
  let { hideDelay = void 0 } = $$props;
  let { surface$class = "" } = $$props;
  let { surface$style = "" } = $$props;
  let element2;
  let instance2;
  let nonReactiveLocationStore = {
    setParent(value) {
      Object.defineProperty(this, "parent", { value });
    },
    setNextSibling(value) {
      Object.defineProperty(this, "nextSibling", { value });
    }
  };
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let surfaceAnimationStyles = {};
  let anchor = getContext("SMUI:tooltip:wrapper:anchor");
  component_subscribe($$self, anchor, (value) => $$invalidate(29, $anchor = value));
  let tooltip = getContext("SMUI:tooltip:wrapper:tooltip");
  component_subscribe($$self, tooltip, (value) => $$invalidate(32, $tooltip = value));
  const rich = getContext("SMUI:tooltip:rich");
  let previousAnchor = void 0;
  onMount(() => {
    $$invalidate(9, instance2 = new MDCTooltipFoundation({
      getAttribute: getAttr,
      setAttribute: addAttr,
      removeAttribute: removeAttr,
      addClass,
      hasClass,
      removeClass,
      getComputedStyleProperty: (propertyName) => {
        const element3 = getElement();
        let style2 = getComputedStyle(element3).getPropertyValue(propertyName);
        if (style2 === "auto") {
          element3.classList.add("smui-banner--force-show");
          style2 = getComputedStyle(element3).getPropertyValue(propertyName);
          element3.classList.remove("smui-banner--force-show");
        }
        return style2;
      },
      setStyleProperty: addStyle,
      setSurfaceAnimationStyleProperty: addSurfaceAnimationStyle,
      getViewportWidth: () => window.innerWidth,
      getViewportHeight: () => window.innerHeight,
      getTooltipSize: () => {
        const element3 = getElement();
        let size = {
          width: element3.offsetWidth,
          height: element3.offsetHeight
        };
        if (size.width === 0 || size.height === 0) {
          element3.classList.add("smui-banner--force-show");
          size = {
            width: element3.offsetWidth,
            height: element3.offsetHeight
          };
          element3.classList.remove("smui-banner--force-show");
        }
        return size;
      },
      getAnchorBoundingRect: () => {
        return $anchor ? $anchor.getBoundingClientRect() : null;
      },
      getParentBoundingRect: () => {
        let parent = getElement().parentElement;
        if (!rich) {
          parent = document.body;
        }
        return (parent === null || parent === void 0 ? void 0 : parent.getBoundingClientRect()) || null;
      },
      getAnchorAttribute: (attr2) => {
        return $anchor ? $anchor.getAttribute(attr2) : null;
      },
      setAnchorAttribute: (attr2, value) => {
        $anchor && $anchor.setAttribute(attr2, value);
      },
      isRTL: () => getComputedStyle(getElement()).direction === "rtl",
      anchorContainsElement: (element3) => {
        return !!($anchor && $anchor.contains(element3));
      },
      tooltipContainsElement: (element3) => {
        return getElement().contains(element3);
      },
      focusAnchorElement: () => {
        $anchor && $anchor.focus();
      },
      registerEventHandler: (evt, handler) => {
        getElement().addEventListener(evt, handler);
      },
      deregisterEventHandler: (evt, handler) => {
        getElement().removeEventListener(evt, handler);
      },
      registerAnchorEventHandler: (evt, handler) => {
        $anchor && $anchor.addEventListener(evt, handler);
      },
      deregisterAnchorEventHandler: (evt, handler) => {
        $anchor && $anchor.removeEventListener(evt, handler);
      },
      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler, evt === "scroll" && { capture: true, passive: true });
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler, evt === "scroll" && { capture: true, passive: true });
      },
      notifyHidden: () => {
        dispatch(getElement(), "SMUITooltip:hidden", void 0, void 0, true);
      },
      getTooltipCaretBoundingRect: () => {
        const caret = getElement().querySelector(`.${CssClasses.TOOLTIP_CARET_TOP}`);
        if (!caret) {
          return null;
        }
        return caret.getBoundingClientRect();
      },
      setTooltipCaretStyle: (propertyName, value) => {
        const topCaret = getElement().querySelector(`.${CssClasses.TOOLTIP_CARET_TOP}`);
        const bottomCaret = getElement().querySelector(`.${CssClasses.TOOLTIP_CARET_BOTTOM}`);
        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.style.setProperty(propertyName, value);
        bottomCaret.style.setProperty(propertyName, value);
      },
      clearTooltipCaretStyles: () => {
        const topCaret = getElement().querySelector(`.${CssClasses.TOOLTIP_CARET_TOP}`);
        const bottomCaret = getElement().querySelector(`.${CssClasses.TOOLTIP_CARET_BOTTOM}`);
        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.removeAttribute("style");
        bottomCaret.removeAttribute("style");
      },
      getActiveElement: () => document.activeElement
    }));
    set_store_value(tooltip, $tooltip = element2, $tooltip);
    return () => {
      if ($anchor) {
        destroy($anchor);
      }
    };
  });
  onDestroy(() => {
    var _a2;
    if (!rich && typeof document !== "undefined" && document.body === getElement().parentElement && nonReactiveLocationStore.parent !== getElement().parentElement && ((_a2 = nonReactiveLocationStore.parent) === null || _a2 === void 0 ? void 0 : _a2.insertBefore) && nonReactiveLocationStore.nextSibling) {
      nonReactiveLocationStore.parent.insertBefore(getElement(), nonReactiveLocationStore.nextSibling);
    }
  });
  function destroy(anchor2) {
    anchor2.removeEventListener("focusout", handleAnchorFocusOut);
    if (rich && persistent) {
      anchor2.removeEventListener("click", handleAnchorActivate);
      anchor2.removeEventListener("keydown", handleAnchorActivate);
    } else {
      anchor2.removeEventListener("mouseenter", handleAnchorMouseEnter);
      anchor2.removeEventListener("focusin", handleAnchorFocus);
      anchor2.removeEventListener("mouseleave", handleAnchorMouseLeave);
      anchor2.removeEventListener("touchstart", handleAnchorTouchStart);
      anchor2.removeEventListener("touchend", handleAnchorTouchEnd);
    }
    if (rich && interactive) {
      anchor2.removeAttribute("aria-haspopup");
      anchor2.removeAttribute("aria-expanded");
      anchor2.removeAttribute("data-tooltip-id");
    } else {
      anchor2.removeAttribute("aria-describedby");
    }
    instance2.destroy();
  }
  function init2(anchor2) {
    anchor2.addEventListener("focusout", handleAnchorFocusOut);
    if (rich && persistent) {
      anchor2.addEventListener("click", handleAnchorActivate);
      anchor2.addEventListener("keydown", handleAnchorActivate);
    } else {
      anchor2.addEventListener("mouseenter", handleAnchorMouseEnter);
      anchor2.addEventListener("focusin", handleAnchorFocus);
      anchor2.addEventListener("mouseleave", handleAnchorMouseLeave);
      anchor2.addEventListener("touchstart", handleAnchorTouchStart);
      anchor2.addEventListener("touchend", handleAnchorTouchEnd);
    }
    if (rich && interactive) {
      anchor2.setAttribute("aria-haspopup", "dialog");
      anchor2.setAttribute("aria-expanded", "false");
      anchor2.setAttribute("data-tooltip-id", id);
    } else {
      anchor2.setAttribute("aria-describedby", id);
    }
    if (!rich) {
      hoistToBody();
    }
    instance2.init();
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(11, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(11, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(12, internalStyles);
      } else {
        $$invalidate(12, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function addSurfaceAnimationStyle(name, value) {
    if (surfaceAnimationStyles[name] != value) {
      if (value === "" || value == null) {
        delete surfaceAnimationStyles[name];
        $$invalidate(14, surfaceAnimationStyles);
      } else {
        $$invalidate(14, surfaceAnimationStyles[name] = value, surfaceAnimationStyles);
      }
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(13, internalAttrs[name] = value, internalAttrs);
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      $$invalidate(13, internalAttrs[name] = void 0, internalAttrs);
    }
  }
  function handleAnchorFocusOut(event) {
    if (element2.contains(event.relatedTarget)) {
      return;
    }
    instance2 && instance2.hide();
  }
  function handleAnchorActivate(event) {
    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") {
      return;
    }
    instance2 && instance2.handleAnchorClick();
  }
  function handleAnchorMouseEnter() {
    instance2 && instance2.handleAnchorMouseEnter();
  }
  function handleAnchorFocus(event) {
    instance2 && instance2.handleAnchorFocus(event);
  }
  function handleAnchorMouseLeave() {
    instance2 && instance2.handleAnchorMouseLeave();
  }
  function handleAnchorTouchStart() {
    instance2 && instance2.handleAnchorTouchstart();
  }
  function handleAnchorTouchEnd() {
    instance2 && instance2.handleAnchorTouchend();
  }
  function hoistToBody() {
    var _a2, _b2;
    if ($anchor && document.body !== getElement().parentNode) {
      nonReactiveLocationStore.setParent((_a2 = getElement().parentElement) !== null && _a2 !== void 0 ? _a2 : void 0);
      nonReactiveLocationStore.setNextSibling((_b2 = getElement().nextElementSibling) !== null && _b2 !== void 0 ? _b2 : void 0);
      document.body.appendChild(getElement());
    }
  }
  function attachScrollHandler(addEventListenerFn) {
    instance2 && instance2.attachScrollHandler(addEventListenerFn);
  }
  function removeScrollHandler(removeEventHandlerFn) {
    instance2 && instance2.removeScrollHandler(removeEventHandlerFn);
  }
  function getElement() {
    return element2;
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(10, element2);
    });
  }
  const transitionend_handler = () => instance2 && instance2.handleTransitionEnd();
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(19, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(2, style = $$new_props.style);
    if ("id" in $$new_props)
      $$invalidate(3, id = $$new_props.id);
    if ("unbounded" in $$new_props)
      $$invalidate(20, unbounded = $$new_props.unbounded);
    if ("xPos" in $$new_props)
      $$invalidate(21, xPos = $$new_props.xPos);
    if ("yPos" in $$new_props)
      $$invalidate(22, yPos = $$new_props.yPos);
    if ("persistent" in $$new_props)
      $$invalidate(4, persistent = $$new_props.persistent);
    if ("interactive" in $$new_props)
      $$invalidate(5, interactive = $$new_props.interactive);
    if ("hideFromScreenreader" in $$new_props)
      $$invalidate(6, hideFromScreenreader = $$new_props.hideFromScreenreader);
    if ("showDelay" in $$new_props)
      $$invalidate(23, showDelay = $$new_props.showDelay);
    if ("hideDelay" in $$new_props)
      $$invalidate(24, hideDelay = $$new_props.hideDelay);
    if ("surface$class" in $$new_props)
      $$invalidate(7, surface$class = $$new_props.surface$class);
    if ("surface$style" in $$new_props)
      $$invalidate(8, surface$style = $$new_props.surface$style);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 805306880) {
      if (instance2 && previousAnchor !== $anchor) {
        if (previousAnchor) {
          destroy(previousAnchor);
        }
        if ($anchor) {
          init2($anchor);
        }
        $$invalidate(28, previousAnchor = $anchor);
      }
    }
    if ($$self.$$.dirty[0] & 1049088) {
      if (instance2) {
        instance2.setAnchorBoundaryType(AnchorBoundaryType[unbounded ? "UNBOUNDED" : "BOUNDED"]);
      }
    }
    if ($$self.$$.dirty[0] & 6291968) {
      if (instance2) {
        instance2.setTooltipPosition({
          xPos: XPosition[xPos.toUpperCase()],
          yPos: YPosition[yPos.toUpperCase()]
        });
      }
    }
    if ($$self.$$.dirty[0] & 8389120) {
      if (instance2 && showDelay != null) {
        instance2.setShowDelay(showDelay);
      }
    }
    if ($$self.$$.dirty[0] & 16777728) {
      if (instance2 && hideDelay != null) {
        instance2.setHideDelay(hideDelay);
      }
    }
  };
  return [
    use2,
    className,
    style,
    id,
    persistent,
    interactive,
    hideFromScreenreader,
    surface$class,
    surface$style,
    instance2,
    element2,
    internalClasses,
    internalStyles,
    internalAttrs,
    surfaceAnimationStyles,
    forwardEvents,
    anchor,
    tooltip,
    rich,
    $$restProps,
    unbounded,
    xPos,
    yPos,
    showDelay,
    hideDelay,
    attachScrollHandler,
    removeScrollHandler,
    getElement,
    previousAnchor,
    $anchor,
    div1_binding,
    transitionend_handler
  ];
}
class Tooltip extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$3, create_fragment$9, safe_not_equal, {
      use: 0,
      class: 1,
      style: 2,
      id: 3,
      unbounded: 20,
      xPos: 21,
      yPos: 22,
      persistent: 4,
      interactive: 5,
      hideFromScreenreader: 6,
      showDelay: 23,
      hideDelay: 24,
      surface$class: 7,
      surface$style: 8,
      attachScrollHandler: 25,
      removeScrollHandler: 26,
      getElement: 27
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "id",
      "unbounded",
      "xPos",
      "yPos",
      "persistent",
      "interactive",
      "hideFromScreenreader",
      "showDelay",
      "hideDelay",
      "surface$class",
      "surface$style",
      "attachScrollHandler",
      "removeScrollHandler",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get id() {
    return this.$$.ctx[3];
  }
  set id(id) {
    this.$$set({ id });
    flush();
  }
  get unbounded() {
    return this.$$.ctx[20];
  }
  set unbounded(unbounded) {
    this.$$set({ unbounded });
    flush();
  }
  get xPos() {
    return this.$$.ctx[21];
  }
  set xPos(xPos) {
    this.$$set({ xPos });
    flush();
  }
  get yPos() {
    return this.$$.ctx[22];
  }
  set yPos(yPos) {
    this.$$set({ yPos });
    flush();
  }
  get persistent() {
    return this.$$.ctx[4];
  }
  set persistent(persistent) {
    this.$$set({ persistent });
    flush();
  }
  get interactive() {
    return this.$$.ctx[5];
  }
  set interactive(interactive) {
    this.$$set({ interactive });
    flush();
  }
  get hideFromScreenreader() {
    return this.$$.ctx[6];
  }
  set hideFromScreenreader(hideFromScreenreader) {
    this.$$set({ hideFromScreenreader });
    flush();
  }
  get showDelay() {
    return this.$$.ctx[23];
  }
  set showDelay(showDelay) {
    this.$$set({ showDelay });
    flush();
  }
  get hideDelay() {
    return this.$$.ctx[24];
  }
  set hideDelay(hideDelay) {
    this.$$set({ hideDelay });
    flush();
  }
  get surface$class() {
    return this.$$.ctx[7];
  }
  set surface$class(surface$class) {
    this.$$set({ surface$class });
    flush();
  }
  get surface$style() {
    return this.$$.ctx[8];
  }
  set surface$style(surface$style) {
    this.$$set({ surface$style });
    flush();
  }
  get attachScrollHandler() {
    return this.$$.ctx[25];
  }
  get removeScrollHandler() {
    return this.$$.ctx[26];
  }
  get getElement() {
    return this.$$.ctx[27];
  }
}
function create_else_block$2(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let slot;
  let div_class_value;
  let useActions_action;
  let mounted;
  let dispose;
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[1]]: true,
        "mdc-tooltip-wrapper--rich": true
      })
    },
    ctx[7]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      slot = element("slot");
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, slot);
      ctx[11](div);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[4].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & 2 && div_class_value !== (div_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-tooltip-wrapper--rich": true
        })) && { class: div_class_value },
        dirty & 128 && ctx2[7]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$8(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block$2;
    return create_else_block$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "rich", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $tooltip;
  let $anchor;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { rich = false } = $$props;
  let element2;
  const anchor = writable(void 0);
  component_subscribe($$self, anchor, (value) => $$invalidate(10, $anchor = value));
  const tooltip = writable(void 0);
  component_subscribe($$self, tooltip, (value) => $$invalidate(9, $tooltip = value));
  setContext("SMUI:tooltip:wrapper:anchor", anchor);
  setContext("SMUI:tooltip:wrapper:tooltip", tooltip);
  setContext("SMUI:tooltip:rich", rich);
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("rich" in $$new_props)
      $$invalidate(2, rich = $$new_props.rich);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1536) {
      if ($tooltip && !$anchor) {
        set_store_value(anchor, $anchor = $tooltip.previousElementSibling, $anchor);
      }
    }
  };
  return [
    use2,
    className,
    rich,
    element2,
    forwardEvents,
    anchor,
    tooltip,
    $$restProps,
    getElement,
    $tooltip,
    $anchor,
    div_binding
  ];
}
class Wrapper$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$5, create_fragment$8, safe_not_equal, { use: 0, class: 1, rich: 2, getElement: 8 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "rich", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get rich() {
    return this.$$.ctx[2];
  }
  set rich(rich) {
    this.$$set({ rich });
    flush();
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
classAdderBuilder({
  class: "mdc-tooltip__title",
  component: H2
});
classAdderBuilder({
  class: "mdc-tooltip__content",
  component: Div
});
classAdderBuilder({
  class: "mdc-tooltip__content-link",
  component: A
});
classAdderBuilder({
  class: "mdc-tooltip--rich-actions",
  component: Div,
  contexts: {
    "SMUI:button:context": "tooltip:rich-actions"
  }
});
const Wrapper = Wrapper$1;
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[33] = list[i];
  return child_ctx;
}
function create_default_slot_28(ctx) {
  let t;
  return {
    c() {
      t = text("Name");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_27(ctx) {
  let t;
  return {
    c() {
      t = text("arrow_upward");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_26(ctx) {
  let label;
  let t;
  let iconbutton;
  let current;
  label = new Label({
    props: {
      class: "font-bold text-gray-600",
      $$slots: { default: [create_default_slot_28] },
      $$scope: { ctx }
    }
  });
  iconbutton = new IconButton({
    props: {
      class: "material-icons !text-[20px]",
      size: "mini",
      $$slots: { default: [create_default_slot_27] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(label.$$.fragment);
      t = space();
      create_component(iconbutton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(label, target, anchor);
      insert(target, t, anchor);
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const label_changes = {};
      if (dirty[1] & 128) {
        label_changes.$$scope = { dirty, ctx: ctx2 };
      }
      label.$set(label_changes);
      const iconbutton_changes = {};
      if (dirty[1] & 128) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(label, detaching);
      if (detaching)
        detach(t);
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_default_slot_25(ctx) {
  let t;
  return {
    c() {
      t = text("Group");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_24(ctx) {
  let t;
  return {
    c() {
      t = text("arrow_upward");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_23(ctx) {
  let label;
  let t;
  let iconbutton;
  let current;
  label = new Label({
    props: {
      class: "font-bold text-gray-600",
      $$slots: { default: [create_default_slot_25] },
      $$scope: { ctx }
    }
  });
  iconbutton = new IconButton({
    props: {
      class: "material-icons !text-[20px]",
      size: "mini",
      $$slots: { default: [create_default_slot_24] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(label.$$.fragment);
      t = space();
      create_component(iconbutton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(label, target, anchor);
      insert(target, t, anchor);
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const label_changes = {};
      if (dirty[1] & 128) {
        label_changes.$$scope = { dirty, ctx: ctx2 };
      }
      label.$set(label_changes);
      const iconbutton_changes = {};
      if (dirty[1] & 128) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(label, detaching);
      if (detaching)
        detach(t);
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_default_slot_22(ctx) {
  let t;
  return {
    c() {
      t = text("Type");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_21(ctx) {
  let t;
  return {
    c() {
      t = text("arrow_upward");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_20(ctx) {
  let label;
  let t;
  let iconbutton;
  let current;
  label = new Label({
    props: {
      class: "font-bold text-gray-600",
      $$slots: { default: [create_default_slot_22] },
      $$scope: { ctx }
    }
  });
  iconbutton = new IconButton({
    props: {
      class: "material-icons !text-[20px]",
      size: "mini",
      $$slots: { default: [create_default_slot_21] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(label.$$.fragment);
      t = space();
      create_component(iconbutton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(label, target, anchor);
      insert(target, t, anchor);
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const label_changes = {};
      if (dirty[1] & 128) {
        label_changes.$$scope = { dirty, ctx: ctx2 };
      }
      label.$set(label_changes);
      const iconbutton_changes = {};
      if (dirty[1] & 128) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(label, detaching);
      if (detaching)
        detach(t);
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_default_slot_19(ctx) {
  let cell0;
  let t0;
  let cell1;
  let t1;
  let cell2;
  let current;
  cell0 = new Cell({
    props: {
      columnId: "Name",
      $$slots: { default: [create_default_slot_26] },
      $$scope: { ctx }
    }
  });
  cell1 = new Cell({
    props: {
      columnId: "Group",
      $$slots: { default: [create_default_slot_23] },
      $$scope: { ctx }
    }
  });
  cell2 = new Cell({
    props: {
      columnId: "Type",
      $$slots: { default: [create_default_slot_20] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
    },
    m(target, anchor) {
      mount_component(cell0, target, anchor);
      insert(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert(target, t1, anchor);
      mount_component(cell2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const cell0_changes = {};
      if (dirty[1] & 128) {
        cell0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      cell0.$set(cell0_changes);
      const cell1_changes = {};
      if (dirty[1] & 128) {
        cell1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      cell1.$set(cell1_changes);
      const cell2_changes = {};
      if (dirty[1] & 128) {
        cell2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      cell2.$set(cell2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(cell0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(cell1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(cell2, detaching);
    }
  };
}
function create_default_slot_18(ctx) {
  let row;
  let current;
  row = new Row({
    props: {
      $$slots: { default: [create_default_slot_19] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const row_changes = {};
      if (dirty[1] & 128) {
        row_changes.$$scope = { dirty, ctx: ctx2 };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_default_slot_17(ctx) {
  let t_value = ctx[33].Name.Value + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4 && t_value !== (t_value = ctx2[33].Name.Value + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_catch_block_1(ctx) {
  return { c: noop$1, m: noop$1, p: noop$1, d: noop$1 };
}
function create_then_block_1(ctx) {
  let t_value = ctx[37] + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4 && t_value !== (t_value = ctx2[37] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_pending_block_1(ctx) {
  return { c: noop$1, m: noop$1, p: noop$1, d: noop$1 };
}
function create_catch_block(ctx) {
  return { c: noop$1, m: noop$1, p: noop$1, d: noop$1 };
}
function create_then_block(ctx) {
  let span;
  let t_value = ctx[36] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4 && t_value !== (t_value = ctx2[36] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_pending_block(ctx) {
  return { c: noop$1, m: noop$1, p: noop$1, d: noop$1 };
}
function create_default_slot_16(ctx) {
  let await_block_anchor;
  let promise;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 36
  };
  handle_promise(promise = ctx[8].resolvePathName(ctx[33].Path), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty[0] & 4 && promise !== (promise = ctx[8].resolvePathName(ctx[33].Path)) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_default_slot_15(ctx) {
  let span;
  let promise;
  let t;
  let tooltip;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_1,
    then: create_then_block_1,
    catch: create_catch_block_1,
    value: 37
  };
  handle_promise(promise = ctx[8].resolveName(EntityType.Group, ctx[33].GroupId), info);
  tooltip = new Tooltip({
    props: {
      surface$class: "!max-w-[400px]",
      $$slots: { default: [create_default_slot_16] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      span = element("span");
      info.block.c();
      t = space();
      create_component(tooltip.$$.fragment);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      info.block.m(span, info.anchor = null);
      info.mount = () => span;
      info.anchor = null;
      insert(target, t, anchor);
      mount_component(tooltip, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty[0] & 4 && promise !== (promise = ctx[8].resolveName(EntityType.Group, ctx[33].GroupId)) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
      const tooltip_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        tooltip_changes.$$scope = { dirty, ctx };
      }
      tooltip.$set(tooltip_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tooltip.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tooltip.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      info.block.d();
      info.token = null;
      info = null;
      if (detaching)
        detach(t);
      destroy_component(tooltip, detaching);
    }
  };
}
function create_default_slot_14(ctx) {
  let wrapper;
  let current;
  wrapper = new Wrapper({
    props: {
      $$slots: { default: [create_default_slot_15] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(wrapper.$$.fragment);
    },
    m(target, anchor) {
      mount_component(wrapper, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const wrapper_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        wrapper_changes.$$scope = { dirty, ctx: ctx2 };
      }
      wrapper.$set(wrapper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(wrapper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(wrapper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(wrapper, detaching);
    }
  };
}
function create_default_slot_13(ctx) {
  var _a2, _b2;
  let t_value = ((_b2 = (_a2 = ctx[33]["Type"]) == null ? void 0 : _a2.Value) != null ? _b2 : "") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      var _a3, _b3;
      if (dirty[0] & 4 && t_value !== (t_value = ((_b3 = (_a3 = ctx2[33]["Type"]) == null ? void 0 : _a3.Value) != null ? _b3 : "") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_12(ctx) {
  let cell0;
  let t0;
  let cell1;
  let t1;
  let cell2;
  let t2;
  let current;
  cell0 = new Cell({
    props: {
      $$slots: { default: [create_default_slot_17] },
      $$scope: { ctx }
    }
  });
  cell1 = new Cell({
    props: {
      $$slots: { default: [create_default_slot_14] },
      $$scope: { ctx }
    }
  });
  cell2 = new Cell({
    props: {
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
      t2 = space();
    },
    m(target, anchor) {
      mount_component(cell0, target, anchor);
      insert(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert(target, t1, anchor);
      mount_component(cell2, target, anchor);
      insert(target, t2, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const cell0_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        cell0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      cell0.$set(cell0_changes);
      const cell1_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        cell1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      cell1.$set(cell1_changes);
      const cell2_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        cell2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      cell2.$set(cell2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(cell0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(cell1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(cell2, detaching);
      if (detaching)
        detach(t2);
    }
  };
}
function create_each_block(ctx) {
  let row;
  let current;
  function click_handler() {
    return ctx[12](ctx[33]);
  }
  row = new Row({
    props: {
      class: "cursor-pointer",
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  row.$on("click", click_handler);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        row_changes.$$scope = { dirty, ctx };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_default_slot_11(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1284) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_10(ctx) {
  let head;
  let t;
  let body;
  let current;
  head = new Head({
    props: {
      $$slots: { default: [create_default_slot_18] },
      $$scope: { ctx }
    }
  });
  body = new Body({
    props: {
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(head.$$.fragment);
      t = space();
      create_component(body.$$.fragment);
    },
    m(target, anchor) {
      mount_component(head, target, anchor);
      insert(target, t, anchor);
      mount_component(body, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const head_changes = {};
      if (dirty[1] & 128) {
        head_changes.$$scope = { dirty, ctx: ctx2 };
      }
      head.$set(head_changes);
      const body_changes = {};
      if (dirty[0] & 4 | dirty[1] & 128) {
        body_changes.$$scope = { dirty, ctx: ctx2 };
      }
      body.$set(body_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(head.$$.fragment, local);
      transition_in(body.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(head.$$.fragment, local);
      transition_out(body.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(head, detaching);
      if (detaching)
        detach(t);
      destroy_component(body, detaching);
    }
  };
}
function create_progress_slot(ctx) {
  let linearprogress;
  let current;
  linearprogress = new LinearProgress({
    props: {
      class: "h-[4px] z-10",
      indeterminate: true,
      closed: !ctx[7],
      slot: "progress"
    }
  });
  return {
    c() {
      create_component(linearprogress.$$.fragment);
    },
    m(target, anchor) {
      mount_component(linearprogress, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const linearprogress_changes = {};
      if (dirty[0] & 128)
        linearprogress_changes.closed = !ctx2[7];
      linearprogress.$set(linearprogress_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(linearprogress.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(linearprogress.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(linearprogress, detaching);
    }
  };
}
function create_default_slot_9$1(ctx) {
  let t;
  return {
    c() {
      t = text("first_page");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_8$1(ctx) {
  let t;
  return {
    c() {
      t = text("chevron_left");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_7$1(ctx) {
  let t;
  return {
    c() {
      t = text("chevron_right");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_6$1(ctx) {
  let t;
  return {
    c() {
      t = text("last_page");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5$1(ctx) {
  let iconbutton0;
  let t0;
  let iconbutton1;
  let t1;
  let iconbutton2;
  let t2;
  let iconbutton3;
  let current;
  iconbutton0 = new IconButton({
    props: {
      class: "material-icons",
      action: "first-page",
      title: "First page",
      disabled: ctx[0] === 0,
      $$slots: { default: [create_default_slot_9$1] },
      $$scope: { ctx }
    }
  });
  iconbutton0.$on("click", ctx[17]);
  iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      action: "prev-page",
      title: "Prev page",
      disabled: ctx[0] === 0,
      $$slots: { default: [create_default_slot_8$1] },
      $$scope: { ctx }
    }
  });
  iconbutton1.$on("click", ctx[18]);
  iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      action: "next-page",
      title: "Next page",
      disabled: ctx[0] === ctx[4],
      $$slots: { default: [create_default_slot_7$1] },
      $$scope: { ctx }
    }
  });
  iconbutton2.$on("click", ctx[19]);
  iconbutton3 = new IconButton({
    props: {
      class: "material-icons",
      action: "last-page",
      title: "Last page",
      disabled: ctx[0] === ctx[4],
      $$slots: { default: [create_default_slot_6$1] },
      $$scope: { ctx }
    }
  });
  iconbutton3.$on("click", ctx[20]);
  return {
    c() {
      create_component(iconbutton0.$$.fragment);
      t0 = space();
      create_component(iconbutton1.$$.fragment);
      t1 = space();
      create_component(iconbutton2.$$.fragment);
      t2 = space();
      create_component(iconbutton3.$$.fragment);
    },
    m(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert(target, t0, anchor);
      mount_component(iconbutton1, target, anchor);
      insert(target, t1, anchor);
      mount_component(iconbutton2, target, anchor);
      insert(target, t2, anchor);
      mount_component(iconbutton3, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const iconbutton0_changes = {};
      if (dirty[0] & 1)
        iconbutton0_changes.disabled = ctx2[0] === 0;
      if (dirty[1] & 128) {
        iconbutton0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton0.$set(iconbutton0_changes);
      const iconbutton1_changes = {};
      if (dirty[0] & 1)
        iconbutton1_changes.disabled = ctx2[0] === 0;
      if (dirty[1] & 128) {
        iconbutton1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton1.$set(iconbutton1_changes);
      const iconbutton2_changes = {};
      if (dirty[0] & 17)
        iconbutton2_changes.disabled = ctx2[0] === ctx2[4];
      if (dirty[1] & 128) {
        iconbutton2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton2.$set(iconbutton2_changes);
      const iconbutton3_changes = {};
      if (dirty[0] & 17)
        iconbutton3_changes.disabled = ctx2[0] === ctx2[4];
      if (dirty[1] & 128) {
        iconbutton3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton3.$set(iconbutton3_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      transition_in(iconbutton3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      transition_out(iconbutton3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(iconbutton1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(iconbutton2, detaching);
      if (detaching)
        detach(t2);
      destroy_component(iconbutton3, detaching);
    }
  };
}
function create_default_slot_4$1(ctx) {
  let t;
  return {
    c() {
      t = text("Rows Per Page");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3$1(ctx) {
  let t;
  return {
    c() {
      t = text("10");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let t;
  return {
    c() {
      t = text("25");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$2(ctx) {
  let t;
  return {
    c() {
      t = text("100");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$2(ctx) {
  let option0;
  let t0;
  let option1;
  let t1;
  let option2;
  let current;
  option0 = new Option({
    props: {
      value: 10,
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    }
  });
  option1 = new Option({
    props: {
      value: 25,
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  option2 = new Option({
    props: {
      value: 100,
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(option0.$$.fragment);
      t0 = space();
      create_component(option1.$$.fragment);
      t1 = space();
      create_component(option2.$$.fragment);
    },
    m(target, anchor) {
      mount_component(option0, target, anchor);
      insert(target, t0, anchor);
      mount_component(option1, target, anchor);
      insert(target, t1, anchor);
      mount_component(option2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const option0_changes = {};
      if (dirty[1] & 128) {
        option0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      option0.$set(option0_changes);
      const option1_changes = {};
      if (dirty[1] & 128) {
        option1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      option1.$set(option1_changes);
      const option2_changes = {};
      if (dirty[1] & 128) {
        option2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      option2.$set(option2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(option0.$$.fragment, local);
      transition_in(option1.$$.fragment, local);
      transition_in(option2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(option0.$$.fragment, local);
      transition_out(option1.$$.fragment, local);
      transition_out(option2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(option0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(option1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(option2, detaching);
    }
  };
}
function create_rowsPerPage_slot(ctx) {
  let label;
  let t;
  let select;
  let updating_value;
  let current;
  label = new Label({
    props: {
      $$slots: { default: [create_default_slot_4$1] },
      $$scope: { ctx }
    }
  });
  function select_value_binding(value) {
    ctx[15](value);
  }
  let select_props = {
    menu$class: "!top-[-150px]",
    variant: "outlined",
    noLabel: true,
    $$slots: { default: [create_default_slot$2] },
    $$scope: { ctx }
  };
  if (ctx[1] !== void 0) {
    select_props.value = ctx[1];
  }
  select = new Select({ props: select_props });
  binding_callbacks.push(() => bind$4(select, "value", select_value_binding));
  select.$on("change", ctx[16]);
  return {
    c() {
      create_component(label.$$.fragment);
      t = space();
      create_component(select.$$.fragment);
    },
    m(target, anchor) {
      mount_component(label, target, anchor);
      insert(target, t, anchor);
      mount_component(select, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const label_changes = {};
      if (dirty[1] & 128) {
        label_changes.$$scope = { dirty, ctx: ctx2 };
      }
      label.$set(label_changes);
      const select_changes = {};
      if (dirty[1] & 128) {
        select_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_value && dirty[0] & 2) {
        updating_value = true;
        select_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      select.$set(select_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      transition_in(select.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      transition_out(select.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(label, detaching);
      if (detaching)
        detach(t);
      destroy_component(select, detaching);
    }
  };
}
function create_total_slot(ctx) {
  let t0_value = ctx[0] * ctx[1] + 1 + "";
  let t0;
  let t1;
  let t2_value = (ctx[0] + 1) * ctx[1] + "";
  let t2;
  let t3;
  let t4;
  return {
    c() {
      t0 = text(t0_value);
      t1 = text("-");
      t2 = text(t2_value);
      t3 = text(" of ");
      t4 = text(ctx[3]);
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
      insert(target, t2, anchor);
      insert(target, t3, anchor);
      insert(target, t4, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 3 && t0_value !== (t0_value = ctx2[0] * ctx2[1] + 1 + ""))
        set_data(t0, t0_value);
      if (dirty[0] & 3 && t2_value !== (t2_value = (ctx2[0] + 1) * ctx2[1] + ""))
        set_data(t2, t2_value);
      if (dirty[0] & 8)
        set_data(t4, ctx2[3]);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(t4);
    }
  };
}
function create_fragment$7(ctx) {
  let div1;
  let div0;
  let datatable;
  let updating_sort;
  let updating_sortDirection;
  let t;
  let pagination;
  let current;
  function datatable_sort_binding(value) {
    ctx[13](value);
  }
  function datatable_sortDirection_binding(value) {
    ctx[14](value);
  }
  let datatable_props = {
    sortable: true,
    stickyHeader: true,
    class: "w-full border-none",
    $$slots: {
      progress: [create_progress_slot],
      default: [create_default_slot_10]
    },
    $$scope: { ctx }
  };
  if (ctx[5] !== void 0) {
    datatable_props.sort = ctx[5];
  }
  if (ctx[6] !== void 0) {
    datatable_props.sortDirection = ctx[6];
  }
  datatable = new DataTable({ props: datatable_props });
  binding_callbacks.push(() => bind$4(datatable, "sort", datatable_sort_binding));
  binding_callbacks.push(() => bind$4(datatable, "sortDirection", datatable_sortDirection_binding));
  datatable.$on("SMUIDataTable:sorted", ctx[9]);
  pagination = new Pagination({
    props: {
      $$slots: {
        total: [create_total_slot],
        rowsPerPage: [create_rowsPerPage_slot],
        default: [create_default_slot_5$1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(datatable.$$.fragment);
      t = space();
      create_component(pagination.$$.fragment);
      this.c = noop$1;
      attr(div0, "class", "flex-1 overflow-auto");
      attr(div1, "class", "flex flex-col h-full");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      mount_component(datatable, div0, null);
      append(div1, t);
      mount_component(pagination, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      const datatable_changes = {};
      if (dirty[0] & 132 | dirty[1] & 128) {
        datatable_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_sort && dirty[0] & 32) {
        updating_sort = true;
        datatable_changes.sort = ctx2[5];
        add_flush_callback(() => updating_sort = false);
      }
      if (!updating_sortDirection && dirty[0] & 64) {
        updating_sortDirection = true;
        datatable_changes.sortDirection = ctx2[6];
        add_flush_callback(() => updating_sortDirection = false);
      }
      datatable.$set(datatable_changes);
      const pagination_changes = {};
      if (dirty[0] & 27 | dirty[1] & 128) {
        pagination_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pagination.$set(pagination_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(datatable.$$.fragment, local);
      transition_in(pagination.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(datatable.$$.fragment, local);
      transition_out(pagination.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(datatable);
      destroy_component(pagination);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let httpService = resolveService(EntityHttpService);
  let nameService = resolveService(EntityNameService);
  let { entityType } = $$props;
  let entitites = [];
  let entitiesRequested = new Subject();
  let filterString;
  let selectedGroupId;
  let selectedGroup;
  let withSubGroups = false;
  let pageIndex = 0;
  let pageSize = 10;
  let totalCount = 0;
  let lastPageIndex = 0;
  let sort;
  let sortDirection;
  let typeStore = EntitySelectTypeStore();
  let globalStore = EntitySelectGlobalStore;
  let stateInitialized = false;
  let loading = true;
  let unsub = new Subject();
  let dispatcher = createEventDispatcher();
  combineLatest([globalStore.asObservable(), typeStore.asObservable()]).pipe(takeUntil(unsub)).subscribe(([globalState, typeState]) => {
    var _a2;
    selectedGroup = typeState.selectedGroup;
    selectedGroupId = (_a2 = typeState.selectedGroup) == null ? void 0 : _a2.Id;
    filterString = typeState.filter;
    withSubGroups = globalState.queryWithSubGroups;
    stateInitialized = true;
    $$invalidate(0, pageIndex = 0);
    entitiesRequested.next();
  });
  function queryEntities() {
    const query = { $and: [] };
    if (withSubGroups) {
      query.$and.push({ Path: selectedGroupId });
    } else {
      query.$and.push({ GroupId: selectedGroupId });
    }
    if (filterString) {
      query.$and.push({
        $or: [
          {
            "Name.Value": { $regex: filterString, $options: "i" }
          },
          {
            "Description.Value": { $regex: filterString, $options: "i" }
          }
        ]
      });
    }
    console.log("query", query);
    const paging = {
      limit: pageSize,
      skip: pageIndex * pageSize
    };
    console.log(entityType);
    return from(httpService.queryConfiguration(entityType, query, paging));
  }
  async function onSortTable() {
    console.log(sort, sortDirection);
  }
  function onEntitySelected(entity) {
    const entityTypeStore = EntitySelectTypeStore();
    const lastSelected = entityTypeStore.value.lastSelectedEntities;
    lastSelected.unshift(entity.Id);
    lastSelected.splice(5);
    entityTypeStore.update((state2) => ({
      ...state2,
      lastSelectedEntities: lastSelected
    }));
    dispatcher("entitySelected", { selectedEntity: entity });
  }
  onDestroy(() => {
    unsub.next();
    unsub.complete();
  });
  entitiesRequested.pipe(takeUntil(unsub), filter(() => stateInitialized && !!selectedGroupId), throttleTime(250), tap(() => $$invalidate(7, loading = true)), switchMap(() => queryEntities())).subscribe((response) => {
    $$invalidate(7, loading = false);
    $$invalidate(2, entitites = response.data);
    if (entityType === EntityType.Group) {
      entitites.unshift(selectedGroup);
    }
    $$invalidate(3, totalCount = response.total);
    $$invalidate(4, lastPageIndex = Math.floor(totalCount / pageSize));
  });
  const click_handler = (entity) => onEntitySelected(entity);
  function datatable_sort_binding(value) {
    sort = value;
    $$invalidate(5, sort);
  }
  function datatable_sortDirection_binding(value) {
    sortDirection = value;
    $$invalidate(6, sortDirection);
  }
  function select_value_binding(value) {
    pageSize = value;
    $$invalidate(1, pageSize), $$invalidate(27, entitiesRequested);
  }
  const change_handler = (e) => console.log(e);
  const click_handler_1 = () => $$invalidate(0, pageIndex = 0);
  const click_handler_2 = () => $$invalidate(0, pageIndex--, pageIndex);
  const click_handler_3 = () => $$invalidate(0, pageIndex++, pageIndex);
  const click_handler_4 = () => $$invalidate(0, pageIndex = lastPageIndex);
  $$self.$$set = ($$props2) => {
    if ("entityType" in $$props2)
      $$invalidate(11, entityType = $$props2.entityType);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 1) {
      {
        $$invalidate(0, pageIndex), $$invalidate(27, entitiesRequested), $$invalidate(1, pageSize);
        console.log(pageIndex);
        entitiesRequested.next();
      }
    }
    if ($$self.$$.dirty[0] & 2) {
      {
        $$invalidate(1, pageSize), $$invalidate(27, entitiesRequested);
        $$invalidate(0, pageIndex = 0);
        console.log("Pagesize changed", pageSize);
        entitiesRequested.next();
      }
    }
  };
  return [
    pageIndex,
    pageSize,
    entitites,
    totalCount,
    lastPageIndex,
    sort,
    sortDirection,
    loading,
    nameService,
    onSortTable,
    onEntitySelected,
    entityType,
    click_handler,
    datatable_sort_binding,
    datatable_sortDirection_binding,
    select_value_binding,
    change_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4
  ];
}
class EntitySelectTable extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$4, create_fragment$7, safe_not_equal, { entityType: 11 }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["entityType"];
  }
  get entityType() {
    return this.$$.ctx[11];
  }
  set entityType(entityType) {
    this.$$set({ entityType });
    flush();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$1 = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
};
var cssClasses$1 = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
};
var numbers = {
  LABEL_SCALE: 0.75
};
var VALIDATION_ATTR_WHITELIST = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
];
var ALWAYS_FLOAT_TYPES = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var POINTERDOWN_EVENTS = ["mousedown", "touchstart"];
var INTERACTION_EVENTS = ["click", "keydown"];
var MDCTextFieldFoundation = function(_super) {
  __extends$1(MDCTextFieldFoundation2, _super);
  function MDCTextFieldFoundation2(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }
    var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation2.defaultAdapter), adapter)) || this;
    _this.isFocused = false;
    _this.receivedUserInput = false;
    _this.valid = true;
    _this.useNativeValidation = true;
    _this.validateOnValueChange = true;
    _this.helperText = foundationMap.helperText;
    _this.characterCounter = foundationMap.characterCounter;
    _this.leadingIcon = foundationMap.leadingIcon;
    _this.trailingIcon = foundationMap.trailingIcon;
    _this.inputFocusHandler = function() {
      _this.activateFocus();
    };
    _this.inputBlurHandler = function() {
      _this.deactivateFocus();
    };
    _this.inputInputHandler = function() {
      _this.handleInput();
    };
    _this.setPointerXOffset = function(evt) {
      _this.setTransformOrigin(evt);
    };
    _this.textFieldInteractionHandler = function() {
      _this.handleTextFieldInteraction();
    };
    _this.validationAttributeChangeHandler = function(attributesList) {
      _this.handleValidationAttributeChange(attributesList);
    };
    return _this;
  }
  Object.defineProperty(MDCTextFieldFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldAlwaysFloat", {
    get: function() {
      var type = this.getNativeInput().type;
      return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldFloat", {
    get: function() {
      return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldShake", {
    get: function() {
      return !this.isFocused && !this.isValid() && !!this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return true;
        },
        setInputAttr: function() {
          return void 0;
        },
        removeInputAttr: function() {
          return void 0;
        },
        registerTextFieldInteractionHandler: function() {
          return void 0;
        },
        deregisterTextFieldInteractionHandler: function() {
          return void 0;
        },
        registerInputInteractionHandler: function() {
          return void 0;
        },
        deregisterInputInteractionHandler: function() {
          return void 0;
        },
        registerValidationAttributeChangeHandler: function() {
          return new MutationObserver(function() {
            return void 0;
          });
        },
        deregisterValidationAttributeChangeHandler: function() {
          return void 0;
        },
        getNativeInput: function() {
          return null;
        },
        isFocused: function() {
          return false;
        },
        activateLineRipple: function() {
          return void 0;
        },
        deactivateLineRipple: function() {
          return void 0;
        },
        setLineRippleTransformOrigin: function() {
          return void 0;
        },
        shakeLabel: function() {
          return void 0;
        },
        floatLabel: function() {
          return void 0;
        },
        setLabelRequired: function() {
          return void 0;
        },
        hasLabel: function() {
          return false;
        },
        getLabelWidth: function() {
          return 0;
        },
        hasOutline: function() {
          return false;
        },
        notchOutline: function() {
          return void 0;
        },
        closeOutline: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldFoundation2.prototype.init = function() {
    var e_1, _a2, e_2, _b2;
    if (this.adapter.hasLabel() && this.getNativeInput().required) {
      this.adapter.setLabelRequired(true);
    }
    if (this.adapter.isFocused()) {
      this.inputFocusHandler();
    } else if (this.adapter.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter.floatLabel(true);
      this.styleFloating(true);
    }
    this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler);
    this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler);
    this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
    try {
      for (var POINTERDOWN_EVENTS_1 = __values$1(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
        var evtType = POINTERDOWN_EVENTS_1_1.value;
        this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a2 = POINTERDOWN_EVENTS_1.return))
          _a2.call(POINTERDOWN_EVENTS_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    try {
      for (var INTERACTION_EVENTS_1 = __values$1(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
        var evtType = INTERACTION_EVENTS_1_1.value;
        this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b2 = INTERACTION_EVENTS_1.return))
          _b2.call(INTERACTION_EVENTS_1);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
    this.setcharacterCounter(this.getValue().length);
  };
  MDCTextFieldFoundation2.prototype.destroy = function() {
    var e_3, _a2, e_4, _b2;
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler);
    this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler);
    this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
    try {
      for (var POINTERDOWN_EVENTS_2 = __values$1(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
        var evtType = POINTERDOWN_EVENTS_2_1.value;
        this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a2 = POINTERDOWN_EVENTS_2.return))
          _a2.call(POINTERDOWN_EVENTS_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    try {
      for (var INTERACTION_EVENTS_2 = __values$1(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
        var evtType = INTERACTION_EVENTS_2_1.value;
        this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b2 = INTERACTION_EVENTS_2.return))
          _b2.call(INTERACTION_EVENTS_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
  };
  MDCTextFieldFoundation2.prototype.handleTextFieldInteraction = function() {
    var nativeInput = this.adapter.getNativeInput();
    if (nativeInput && nativeInput.disabled) {
      return;
    }
    this.receivedUserInput = true;
  };
  MDCTextFieldFoundation2.prototype.handleValidationAttributeChange = function(attributesList) {
    var _this = this;
    attributesList.some(function(attributeName) {
      if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this.styleValidity(true);
        _this.adapter.setLabelRequired(_this.getNativeInput().required);
        return true;
      }
      return false;
    });
    if (attributesList.indexOf("maxlength") > -1) {
      this.setcharacterCounter(this.getValue().length);
    }
  };
  MDCTextFieldFoundation2.prototype.notchOutline = function(openNotch) {
    if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
      return;
    }
    if (openNotch) {
      var labelWidth = this.adapter.getLabelWidth() * numbers.LABEL_SCALE;
      this.adapter.notchOutline(labelWidth);
    } else {
      this.adapter.closeOutline();
    }
  };
  MDCTextFieldFoundation2.prototype.activateFocus = function() {
    this.isFocused = true;
    this.styleFocused(this.isFocused);
    this.adapter.activateLineRipple();
    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating(this.shouldFloat);
      this.adapter.shakeLabel(this.shouldShake);
    }
    if (this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid)) {
      this.helperText.showToScreenReader();
    }
  };
  MDCTextFieldFoundation2.prototype.setTransformOrigin = function(evt) {
    if (this.isDisabled() || this.adapter.hasOutline()) {
      return;
    }
    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter.setLineRippleTransformOrigin(normalizedX);
  };
  MDCTextFieldFoundation2.prototype.handleInput = function() {
    this.autoCompleteFocus();
    this.setcharacterCounter(this.getValue().length);
  };
  MDCTextFieldFoundation2.prototype.autoCompleteFocus = function() {
    if (!this.receivedUserInput) {
      this.activateFocus();
    }
  };
  MDCTextFieldFoundation2.prototype.deactivateFocus = function() {
    this.isFocused = false;
    this.adapter.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity(isValid);
    this.styleFocused(this.isFocused);
    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating(this.shouldFloat);
      this.adapter.shakeLabel(this.shouldShake);
    }
    if (!this.shouldFloat) {
      this.receivedUserInput = false;
    }
  };
  MDCTextFieldFoundation2.prototype.getValue = function() {
    return this.getNativeInput().value;
  };
  MDCTextFieldFoundation2.prototype.setValue = function(value) {
    if (this.getValue() !== value) {
      this.getNativeInput().value = value;
    }
    this.setcharacterCounter(value.length);
    if (this.validateOnValueChange) {
      var isValid = this.isValid();
      this.styleValidity(isValid);
    }
    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating(this.shouldFloat);
      if (this.validateOnValueChange) {
        this.adapter.shakeLabel(this.shouldShake);
      }
    }
  };
  MDCTextFieldFoundation2.prototype.isValid = function() {
    return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
  };
  MDCTextFieldFoundation2.prototype.setValid = function(isValid) {
    this.valid = isValid;
    this.styleValidity(isValid);
    var shouldShake = !isValid && !this.isFocused && !!this.getValue();
    if (this.adapter.hasLabel()) {
      this.adapter.shakeLabel(shouldShake);
    }
  };
  MDCTextFieldFoundation2.prototype.setValidateOnValueChange = function(shouldValidate) {
    this.validateOnValueChange = shouldValidate;
  };
  MDCTextFieldFoundation2.prototype.getValidateOnValueChange = function() {
    return this.validateOnValueChange;
  };
  MDCTextFieldFoundation2.prototype.setUseNativeValidation = function(useNativeValidation) {
    this.useNativeValidation = useNativeValidation;
  };
  MDCTextFieldFoundation2.prototype.isDisabled = function() {
    return this.getNativeInput().disabled;
  };
  MDCTextFieldFoundation2.prototype.setDisabled = function(disabled) {
    this.getNativeInput().disabled = disabled;
    this.styleDisabled(disabled);
  };
  MDCTextFieldFoundation2.prototype.setHelperTextContent = function(content) {
    if (this.helperText) {
      this.helperText.setContent(content);
    }
  };
  MDCTextFieldFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
    if (this.leadingIcon) {
      this.leadingIcon.setAriaLabel(label);
    }
  };
  MDCTextFieldFoundation2.prototype.setLeadingIconContent = function(content) {
    if (this.leadingIcon) {
      this.leadingIcon.setContent(content);
    }
  };
  MDCTextFieldFoundation2.prototype.setTrailingIconAriaLabel = function(label) {
    if (this.trailingIcon) {
      this.trailingIcon.setAriaLabel(label);
    }
  };
  MDCTextFieldFoundation2.prototype.setTrailingIconContent = function(content) {
    if (this.trailingIcon) {
      this.trailingIcon.setContent(content);
    }
  };
  MDCTextFieldFoundation2.prototype.setcharacterCounter = function(currentLength) {
    if (!this.characterCounter) {
      return;
    }
    var maxLength = this.getNativeInput().maxLength;
    if (maxLength === -1) {
      throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
    }
    this.characterCounter.setCounterValue(currentLength, maxLength);
  };
  MDCTextFieldFoundation2.prototype.isBadInput = function() {
    return this.getNativeInput().validity.badInput || false;
  };
  MDCTextFieldFoundation2.prototype.isNativeInputValid = function() {
    return this.getNativeInput().validity.valid;
  };
  MDCTextFieldFoundation2.prototype.styleValidity = function(isValid) {
    var INVALID = MDCTextFieldFoundation2.cssClasses.INVALID;
    if (isValid) {
      this.adapter.removeClass(INVALID);
    } else {
      this.adapter.addClass(INVALID);
    }
    if (this.helperText) {
      this.helperText.setValidity(isValid);
      var helperTextValidation = this.helperText.isValidation();
      if (!helperTextValidation) {
        return;
      }
      var helperTextVisible = this.helperText.isVisible();
      var helperTextId = this.helperText.getId();
      if (helperTextVisible && helperTextId) {
        this.adapter.setInputAttr(strings$1.ARIA_DESCRIBEDBY, helperTextId);
      } else {
        this.adapter.removeInputAttr(strings$1.ARIA_DESCRIBEDBY);
      }
    }
  };
  MDCTextFieldFoundation2.prototype.styleFocused = function(isFocused) {
    var FOCUSED = MDCTextFieldFoundation2.cssClasses.FOCUSED;
    if (isFocused) {
      this.adapter.addClass(FOCUSED);
    } else {
      this.adapter.removeClass(FOCUSED);
    }
  };
  MDCTextFieldFoundation2.prototype.styleDisabled = function(isDisabled) {
    var _a2 = MDCTextFieldFoundation2.cssClasses, DISABLED = _a2.DISABLED, INVALID = _a2.INVALID;
    if (isDisabled) {
      this.adapter.addClass(DISABLED);
      this.adapter.removeClass(INVALID);
    } else {
      this.adapter.removeClass(DISABLED);
    }
    if (this.leadingIcon) {
      this.leadingIcon.setDisabled(isDisabled);
    }
    if (this.trailingIcon) {
      this.trailingIcon.setDisabled(isDisabled);
    }
  };
  MDCTextFieldFoundation2.prototype.styleFloating = function(isFloating) {
    var LABEL_FLOATING = MDCTextFieldFoundation2.cssClasses.LABEL_FLOATING;
    if (isFloating) {
      this.adapter.addClass(LABEL_FLOATING);
    } else {
      this.adapter.removeClass(LABEL_FLOATING);
    }
  };
  MDCTextFieldFoundation2.prototype.getNativeInput = function() {
    var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      required: false,
      type: "input",
      validity: {
        badInput: false,
        valid: true
      },
      value: ""
    };
  };
  return MDCTextFieldFoundation2;
}(MDCFoundation);
var HelperLine = classAdderBuilder({
  class: "mdc-text-field-helper-line",
  component: Div
});
var Prefix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  component: Span
});
var Suffix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  component: Span
});
function create_fragment$6(ctx) {
  let input;
  let input_class_value;
  let useActions_action;
  let mounted;
  let dispose;
  let input_levels = [
    {
      class: input_class_value = classMap({
        [ctx[1]]: true,
        "mdc-text-field__input": true
      })
    },
    { type: ctx[2] },
    { placeholder: ctx[3] },
    ctx[4],
    ctx[6],
    ctx[10]
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  return {
    c() {
      input = element("input");
      this.c = noop$1;
      set_attributes(input, input_data);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      if (input.autofocus)
        input.focus();
      ctx[26](input);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, input, ctx[0])),
          action_destroyer(ctx[7].call(null, input)),
          listen(input, "input", ctx[27]),
          listen(input, "change", ctx[9]),
          listen(input, "blur", ctx[24]),
          listen(input, "focus", ctx[25])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        dirty & 2 && input_class_value !== (input_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-text-field__input": true
        })) && { class: input_class_value },
        dirty & 4 && { type: ctx2[2] },
        dirty & 8 && { placeholder: ctx2[3] },
        dirty & 16 && ctx2[4],
        dirty & 64 && ctx2[6],
        dirty & 1024 && ctx2[10]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(input);
      ctx[26](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function toNumber(value) {
  if (value === "") {
    const nan = new Number(Number.NaN);
    nan.length = 0;
    return nan;
  }
  return +value;
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = " " } = $$props;
  let { value = uninitializedValue } = $$props;
  const valueUninitialized = isUninitializedValue(value);
  if (valueUninitialized) {
    value = "";
  }
  let { files = null } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { emptyValueNull = value === null } = $$props;
  if (valueUninitialized && emptyValueNull) {
    value = null;
  }
  let { emptyValueUndefined = value === void 0 } = $$props;
  if (valueUninitialized && emptyValueUndefined) {
    value = void 0;
  }
  let element2;
  let internalAttrs = {};
  let valueProp = {};
  onMount(() => {
    if (updateInvalid) {
      $$invalidate(14, invalid = element2.matches(":invalid"));
    }
  });
  function valueUpdater(e) {
    if (type === "file") {
      $$invalidate(12, files = e.currentTarget.files);
      return;
    }
    if (e.currentTarget.value === "" && emptyValueNull) {
      $$invalidate(11, value = null);
      return;
    }
    if (e.currentTarget.value === "" && emptyValueUndefined) {
      $$invalidate(11, value = void 0);
      return;
    }
    switch (type) {
      case "number":
      case "range":
        $$invalidate(11, value = toNumber(e.currentTarget.value));
        break;
      default:
        $$invalidate(11, value = e.currentTarget.value);
        break;
    }
  }
  function changeHandler(e) {
    if (type === "file" || type === "range") {
      valueUpdater(e);
    }
    $$invalidate(13, dirty = true);
    if (updateInvalid) {
      $$invalidate(14, invalid = element2.matches(":invalid"));
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      $$invalidate(6, internalAttrs[name] = value2, internalAttrs);
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      $$invalidate(6, internalAttrs[name] = void 0, internalAttrs);
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element2;
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(5, element2);
    });
  }
  const input_handler = (e) => type !== "file" && valueUpdater(e);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("type" in $$new_props)
      $$invalidate(2, type = $$new_props.type);
    if ("placeholder" in $$new_props)
      $$invalidate(3, placeholder = $$new_props.placeholder);
    if ("value" in $$new_props)
      $$invalidate(11, value = $$new_props.value);
    if ("files" in $$new_props)
      $$invalidate(12, files = $$new_props.files);
    if ("dirty" in $$new_props)
      $$invalidate(13, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props)
      $$invalidate(14, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props)
      $$invalidate(15, updateInvalid = $$new_props.updateInvalid);
    if ("emptyValueNull" in $$new_props)
      $$invalidate(16, emptyValueNull = $$new_props.emptyValueNull);
    if ("emptyValueUndefined" in $$new_props)
      $$invalidate(17, emptyValueUndefined = $$new_props.emptyValueUndefined);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2068) {
      if (type === "file") {
        delete valueProp.value;
        $$invalidate(4, valueProp), $$invalidate(2, type), $$invalidate(11, value);
      } else {
        $$invalidate(4, valueProp.value = value == null ? "" : value, valueProp);
      }
    }
  };
  return [
    use2,
    className,
    type,
    placeholder,
    valueProp,
    element2,
    internalAttrs,
    forwardEvents,
    valueUpdater,
    changeHandler,
    $$restProps,
    value,
    files,
    dirty,
    invalid,
    updateInvalid,
    emptyValueNull,
    emptyValueUndefined,
    getAttr,
    addAttr,
    removeAttr,
    focus,
    blur,
    getElement,
    blur_handler,
    focus_handler,
    input_binding,
    input_handler
  ];
}
class Input extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$3, create_fragment$6, safe_not_equal, {
      use: 0,
      class: 1,
      type: 2,
      placeholder: 3,
      value: 11,
      files: 12,
      dirty: 13,
      invalid: 14,
      updateInvalid: 15,
      emptyValueNull: 16,
      emptyValueUndefined: 17,
      getAttr: 18,
      addAttr: 19,
      removeAttr: 20,
      focus: 21,
      blur: 22,
      getElement: 23
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "type",
      "placeholder",
      "value",
      "files",
      "dirty",
      "invalid",
      "updateInvalid",
      "emptyValueNull",
      "emptyValueUndefined",
      "getAttr",
      "addAttr",
      "removeAttr",
      "focus",
      "blur",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get type() {
    return this.$$.ctx[2];
  }
  set type(type) {
    this.$$set({ type });
    flush();
  }
  get placeholder() {
    return this.$$.ctx[3];
  }
  set placeholder(placeholder) {
    this.$$set({ placeholder });
    flush();
  }
  get value() {
    return this.$$.ctx[11];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get files() {
    return this.$$.ctx[12];
  }
  set files(files) {
    this.$$set({ files });
    flush();
  }
  get dirty() {
    return this.$$.ctx[13];
  }
  set dirty(dirty) {
    this.$$set({ dirty });
    flush();
  }
  get invalid() {
    return this.$$.ctx[14];
  }
  set invalid(invalid) {
    this.$$set({ invalid });
    flush();
  }
  get updateInvalid() {
    return this.$$.ctx[15];
  }
  set updateInvalid(updateInvalid) {
    this.$$set({ updateInvalid });
    flush();
  }
  get emptyValueNull() {
    return this.$$.ctx[16];
  }
  set emptyValueNull(emptyValueNull) {
    this.$$set({ emptyValueNull });
    flush();
  }
  get emptyValueUndefined() {
    return this.$$.ctx[17];
  }
  set emptyValueUndefined(emptyValueUndefined) {
    this.$$set({ emptyValueUndefined });
    flush();
  }
  get getAttr() {
    return this.$$.ctx[18];
  }
  get addAttr() {
    return this.$$.ctx[19];
  }
  get removeAttr() {
    return this.$$.ctx[20];
  }
  get focus() {
    return this.$$.ctx[21];
  }
  get blur() {
    return this.$$.ctx[22];
  }
  get getElement() {
    return this.$$.ctx[23];
  }
}
function create_fragment$5(ctx) {
  let textarea;
  let textarea_class_value;
  let textarea_style_value;
  let useActions_action;
  let mounted;
  let dispose;
  let textarea_levels = [
    {
      class: textarea_class_value = classMap({
        [ctx[2]]: true,
        "mdc-text-field__input": true
      })
    },
    {
      style: textarea_style_value = `${ctx[4] ? "" : "resize: none; "}${ctx[3]}`
    },
    ctx[6],
    ctx[9]
  ];
  let textarea_data = {};
  for (let i = 0; i < textarea_levels.length; i += 1) {
    textarea_data = assign(textarea_data, textarea_levels[i]);
  }
  return {
    c() {
      textarea = element("textarea");
      this.c = noop$1;
      set_attributes(textarea, textarea_data);
    },
    m(target, anchor) {
      insert(target, textarea, anchor);
      if (textarea.autofocus)
        textarea.focus();
      ctx[21](textarea);
      set_input_value(textarea, ctx[0]);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, textarea, ctx[1])),
          action_destroyer(ctx[7].call(null, textarea)),
          listen(textarea, "change", ctx[8]),
          listen(textarea, "blur", ctx[19]),
          listen(textarea, "focus", ctx[20]),
          listen(textarea, "input", ctx[22])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(textarea, textarea_data = get_spread_update(textarea_levels, [
        dirty & 4 && textarea_class_value !== (textarea_class_value = classMap({
          [ctx2[2]]: true,
          "mdc-text-field__input": true
        })) && { class: textarea_class_value },
        dirty & 24 && textarea_style_value !== (textarea_style_value = `${ctx2[4] ? "" : "resize: none; "}${ctx2[3]}`) && { style: textarea_style_value },
        dirty & 64 && ctx2[6],
        dirty & 512 && ctx2[9]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 2)
        useActions_action.update.call(null, ctx2[1]);
      if (dirty & 1) {
        set_input_value(textarea, ctx2[0]);
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(textarea);
      ctx[21](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { resizable = true } = $$props;
  let element2;
  let internalAttrs = {};
  onMount(() => {
    if (updateInvalid) {
      $$invalidate(11, invalid = element2.matches(":invalid"));
    }
  });
  function changeHandler() {
    $$invalidate(10, dirty = true);
    if (updateInvalid) {
      $$invalidate(11, invalid = element2.matches(":invalid"));
    }
  }
  function getAttr(name) {
    var _a2;
    return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      $$invalidate(6, internalAttrs[name] = value2, internalAttrs);
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      $$invalidate(6, internalAttrs[name] = void 0, internalAttrs);
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element2;
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(5, element2);
    });
  }
  function textarea_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(1, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(2, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("dirty" in $$new_props)
      $$invalidate(10, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props)
      $$invalidate(11, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props)
      $$invalidate(12, updateInvalid = $$new_props.updateInvalid);
    if ("resizable" in $$new_props)
      $$invalidate(4, resizable = $$new_props.resizable);
  };
  return [
    value,
    use2,
    className,
    style,
    resizable,
    element2,
    internalAttrs,
    forwardEvents,
    changeHandler,
    $$restProps,
    dirty,
    invalid,
    updateInvalid,
    getAttr,
    addAttr,
    removeAttr,
    focus,
    blur,
    getElement,
    blur_handler,
    focus_handler,
    textarea_binding,
    textarea_input_handler
  ];
}
class Textarea extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$2, create_fragment$5, safe_not_equal, {
      use: 1,
      class: 2,
      style: 3,
      value: 0,
      dirty: 10,
      invalid: 11,
      updateInvalid: 12,
      resizable: 4,
      getAttr: 13,
      addAttr: 14,
      removeAttr: 15,
      focus: 16,
      blur: 17,
      getElement: 18
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "value",
      "dirty",
      "invalid",
      "updateInvalid",
      "resizable",
      "getAttr",
      "addAttr",
      "removeAttr",
      "focus",
      "blur",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get dirty() {
    return this.$$.ctx[10];
  }
  set dirty(dirty) {
    this.$$set({ dirty });
    flush();
  }
  get invalid() {
    return this.$$.ctx[11];
  }
  set invalid(invalid) {
    this.$$set({ invalid });
    flush();
  }
  get updateInvalid() {
    return this.$$.ctx[12];
  }
  set updateInvalid(updateInvalid) {
    this.$$set({ updateInvalid });
    flush();
  }
  get resizable() {
    return this.$$.ctx[4];
  }
  set resizable(resizable) {
    this.$$set({ resizable });
    flush();
  }
  get getAttr() {
    return this.$$.ctx[13];
  }
  get addAttr() {
    return this.$$.ctx[14];
  }
  get removeAttr() {
    return this.$$.ctx[15];
  }
  get focus() {
    return this.$$.ctx[16];
  }
  get blur() {
    return this.$$.ctx[17];
  }
  get getElement() {
    return this.$$.ctx[18];
  }
}
function create_else_block_1(ctx) {
  let div;
  let slot0;
  let t0;
  let contextfragment0;
  let t1;
  let slot1;
  let t2;
  let contextfragment1;
  let t3;
  let slot2;
  let div_class_value;
  let div_style_value;
  let Ripple_action;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  contextfragment0 = new ContextFragment({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: true,
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  contextfragment1 = new ContextFragment({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: false,
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[9]]: true,
        "mdc-text-field": true,
        "mdc-text-field--disabled": ctx[12],
        "mdc-text-field--textarea": ctx[14],
        "mdc-text-field--filled": ctx[15] === "filled",
        "mdc-text-field--outlined": ctx[15] === "outlined",
        "smui-text-field--standard": ctx[15] === "standard" && !ctx[14],
        "mdc-text-field--no-label": ctx[16] || !ctx[42].label,
        "mdc-text-field--with-leading-icon": ctx[42].leadingIcon,
        "mdc-text-field--with-trailing-icon": ctx[42].trailingIcon,
        "mdc-text-field--invalid": ctx[1],
        ...ctx[25]
      })
    },
    {
      style: div_style_value = Object.entries(ctx[26]).map(func_1).concat([ctx[10]]).join(" ")
    },
    exclude(ctx[41], ["input$", "label$", "ripple$", "outline$", "helperLine$"])
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      slot0 = element("slot");
      t0 = space();
      create_component(contextfragment0.$$.fragment);
      t1 = space();
      slot1 = element("slot");
      t2 = space();
      create_component(contextfragment1.$$.fragment);
      t3 = space();
      slot2 = element("slot");
      attr(slot0, "name", "label");
      attr(slot2, "name", "ripple");
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, slot0);
      append(div, t0);
      mount_component(contextfragment0, div, null);
      append(div, t1);
      append(div, slot1);
      append(div, t2);
      mount_component(contextfragment1, div, null);
      append(div, t3);
      append(div, slot2);
      ctx[79](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(Ripple_action = Ripple.call(null, div, {
            ripple: ctx[11],
            unbounded: false,
            addClass: ctx[38],
            removeClass: ctx[39],
            addStyle: ctx[40]
          })),
          action_destroyer(useActions_action = useActions.call(null, div, ctx[8])),
          action_destroyer(ctx[34].call(null, div)),
          listen(div, "SMUITextfieldLeadingIcon:mount", ctx[80]),
          listen(div, "SMUITextfieldLeadingIcon:unmount", ctx[81]),
          listen(div, "SMUITextfieldTrailingIcon:mount", ctx[82]),
          listen(div, "SMUITextfieldTrailingIcon:unmount", ctx[83])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const contextfragment0_changes = {};
      if (dirty[3] & 4) {
        contextfragment0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      contextfragment0.$set(contextfragment0_changes);
      const contextfragment1_changes = {};
      if (dirty[3] & 4) {
        contextfragment1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      contextfragment1.$set(contextfragment1_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [
        (!current || dirty[0] & 33673730 | dirty[1] & 2048 && div_class_value !== (div_class_value = classMap({
          [ctx2[9]]: true,
          "mdc-text-field": true,
          "mdc-text-field--disabled": ctx2[12],
          "mdc-text-field--textarea": ctx2[14],
          "mdc-text-field--filled": ctx2[15] === "filled",
          "mdc-text-field--outlined": ctx2[15] === "outlined",
          "smui-text-field--standard": ctx2[15] === "standard" && !ctx2[14],
          "mdc-text-field--no-label": ctx2[16] || !ctx2[42].label,
          "mdc-text-field--with-leading-icon": ctx2[42].leadingIcon,
          "mdc-text-field--with-trailing-icon": ctx2[42].trailingIcon,
          "mdc-text-field--invalid": ctx2[1],
          ...ctx2[25]
        }))) && { class: div_class_value },
        (!current || dirty[0] & 67109888 && div_style_value !== (div_style_value = Object.entries(ctx2[26]).map(func_1).concat([ctx2[10]]).join(" "))) && { style: div_style_value },
        dirty[1] & 1024 && exclude(ctx2[41], ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]));
      if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & 2048)
        Ripple_action.update.call(null, {
          ripple: ctx2[11],
          unbounded: false,
          addClass: ctx2[38],
          removeClass: ctx2[39],
          addStyle: ctx2[40]
        });
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 256)
        useActions_action.update.call(null, ctx2[8]);
    },
    i(local) {
      if (current)
        return;
      transition_in(contextfragment0.$$.fragment, local);
      transition_in(contextfragment1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contextfragment0.$$.fragment, local);
      transition_out(contextfragment1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(contextfragment0);
      destroy_component(contextfragment1);
      ctx[79](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let label_1;
  let t0;
  let t1;
  let contextfragment0;
  let t2;
  let slot;
  let t3;
  let current_block_type_index;
  let if_block2;
  let t4;
  let contextfragment1;
  let t5;
  let label_1_class_value;
  let label_1_style_value;
  let Ripple_action;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  let if_block0 = !ctx[14] && ctx[15] !== "outlined" && create_if_block_8(ctx);
  let if_block1 = (ctx[14] || ctx[15] === "outlined") && create_if_block_6(ctx);
  contextfragment0 = new ContextFragment({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: true,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  const if_block_creators = [create_if_block_3, create_else_block$1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[14] && typeof ctx2[0] === "string")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  contextfragment1 = new ContextFragment({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: false,
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  let if_block3 = !ctx[14] && ctx[15] !== "outlined" && ctx[11] && create_if_block_2(ctx);
  let label_1_levels = [
    {
      class: label_1_class_value = classMap({
        [ctx[9]]: true,
        "mdc-text-field": true,
        "mdc-text-field--disabled": ctx[12],
        "mdc-text-field--textarea": ctx[14],
        "mdc-text-field--filled": ctx[15] === "filled",
        "mdc-text-field--outlined": ctx[15] === "outlined",
        "smui-text-field--standard": ctx[15] === "standard" && !ctx[14],
        "mdc-text-field--no-label": ctx[16] || ctx[17] == null && !ctx[42].label,
        "mdc-text-field--label-floating": ctx[28] || ctx[0] != null && ctx[0] !== "",
        "mdc-text-field--with-leading-icon": ctx[35](ctx[22]) ? ctx[42].leadingIcon : ctx[22],
        "mdc-text-field--with-trailing-icon": ctx[35](ctx[23]) ? ctx[42].trailingIcon : ctx[23],
        "mdc-text-field--with-internal-counter": ctx[14] && ctx[42].internalCounter,
        "mdc-text-field--invalid": ctx[1],
        ...ctx[25]
      })
    },
    {
      style: label_1_style_value = Object.entries(ctx[26]).map(func$1).concat([ctx[10]]).join(" ")
    },
    {
      for: void 0
    },
    exclude(ctx[41], ["input$", "label$", "ripple$", "outline$", "helperLine$"])
  ];
  let label_1_data = {};
  for (let i = 0; i < label_1_levels.length; i += 1) {
    label_1_data = assign(label_1_data, label_1_levels[i]);
  }
  return {
    c() {
      label_1 = element("label");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      create_component(contextfragment0.$$.fragment);
      t2 = space();
      slot = element("slot");
      t3 = space();
      if_block2.c();
      t4 = space();
      create_component(contextfragment1.$$.fragment);
      t5 = space();
      if (if_block3)
        if_block3.c();
      set_attributes(label_1, label_1_data);
    },
    m(target, anchor) {
      insert(target, label_1, anchor);
      if (if_block0)
        if_block0.m(label_1, null);
      append(label_1, t0);
      if (if_block1)
        if_block1.m(label_1, null);
      append(label_1, t1);
      mount_component(contextfragment0, label_1, null);
      append(label_1, t2);
      append(label_1, slot);
      append(label_1, t3);
      if_blocks[current_block_type_index].m(label_1, null);
      append(label_1, t4);
      mount_component(contextfragment1, label_1, null);
      append(label_1, t5);
      if (if_block3)
        if_block3.m(label_1, null);
      ctx[72](label_1);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(Ripple_action = Ripple.call(null, label_1, {
            ripple: !ctx[14] && ctx[15] === "filled",
            unbounded: false,
            addClass: ctx[38],
            removeClass: ctx[39],
            addStyle: ctx[40],
            eventTarget: ctx[33],
            activeTarget: ctx[33],
            initPromise: ctx[37]
          })),
          action_destroyer(useActions_action = useActions.call(null, label_1, ctx[8])),
          action_destroyer(ctx[34].call(null, label_1)),
          listen(label_1, "SMUITextfieldLeadingIcon:mount", ctx[73]),
          listen(label_1, "SMUITextfieldLeadingIcon:unmount", ctx[74]),
          listen(label_1, "SMUITextfieldTrailingIcon:mount", ctx[75]),
          listen(label_1, "SMUITextfieldTrailingIcon:unmount", ctx[76]),
          listen(label_1, "SMUITextfieldCharacterCounter:mount", ctx[77]),
          listen(label_1, "SMUITextfieldCharacterCounter:unmount", ctx[78])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!ctx2[14] && ctx2[15] !== "outlined") {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 49152) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_8(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(label_1, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[14] || ctx2[15] === "outlined") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 49152) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_6(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(label_1, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      const contextfragment0_changes = {};
      if (dirty[3] & 4) {
        contextfragment0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      contextfragment0.$set(contextfragment0_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block2 = if_blocks[current_block_type_index];
        if (!if_block2) {
          if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block2.c();
        } else {
          if_block2.p(ctx2, dirty);
        }
        transition_in(if_block2, 1);
        if_block2.m(label_1, t4);
      }
      const contextfragment1_changes = {};
      if (dirty[3] & 4) {
        contextfragment1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      contextfragment1.$set(contextfragment1_changes);
      if (!ctx2[14] && ctx2[15] !== "outlined" && ctx2[11]) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty[0] & 51200) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_2(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(label_1, null);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      set_attributes(label_1, label_1_data = get_spread_update(label_1_levels, [
        (!current || dirty[0] & 314823171 | dirty[1] & 2048 && label_1_class_value !== (label_1_class_value = classMap({
          [ctx2[9]]: true,
          "mdc-text-field": true,
          "mdc-text-field--disabled": ctx2[12],
          "mdc-text-field--textarea": ctx2[14],
          "mdc-text-field--filled": ctx2[15] === "filled",
          "mdc-text-field--outlined": ctx2[15] === "outlined",
          "smui-text-field--standard": ctx2[15] === "standard" && !ctx2[14],
          "mdc-text-field--no-label": ctx2[16] || ctx2[17] == null && !ctx2[42].label,
          "mdc-text-field--label-floating": ctx2[28] || ctx2[0] != null && ctx2[0] !== "",
          "mdc-text-field--with-leading-icon": ctx2[35](ctx2[22]) ? ctx2[42].leadingIcon : ctx2[22],
          "mdc-text-field--with-trailing-icon": ctx2[35](ctx2[23]) ? ctx2[42].trailingIcon : ctx2[23],
          "mdc-text-field--with-internal-counter": ctx2[14] && ctx2[42].internalCounter,
          "mdc-text-field--invalid": ctx2[1],
          ...ctx2[25]
        }))) && { class: label_1_class_value },
        (!current || dirty[0] & 67109888 && label_1_style_value !== (label_1_style_value = Object.entries(ctx2[26]).map(func$1).concat([ctx2[10]]).join(" "))) && { style: label_1_style_value },
        {
          for: void 0
        },
        dirty[1] & 1024 && exclude(ctx2[41], ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]));
      if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & 49152 | dirty[1] & 4)
        Ripple_action.update.call(null, {
          ripple: !ctx2[14] && ctx2[15] === "filled",
          unbounded: false,
          addClass: ctx2[38],
          removeClass: ctx2[39],
          addStyle: ctx2[40],
          eventTarget: ctx2[33],
          activeTarget: ctx2[33],
          initPromise: ctx2[37]
        });
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 256)
        useActions_action.update.call(null, ctx2[8]);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(contextfragment0.$$.fragment, local);
      transition_in(if_block2);
      transition_in(contextfragment1.$$.fragment, local);
      transition_in(if_block3);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(contextfragment0.$$.fragment, local);
      transition_out(if_block2);
      transition_out(contextfragment1.$$.fragment, local);
      transition_out(if_block3);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(label_1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_component(contextfragment0);
      if_blocks[current_block_type_index].d();
      destroy_component(contextfragment1);
      if (if_block3)
        if_block3.d();
      ctx[72](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_default_slot_9(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      attr(slot, "name", "leadingIcon");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_default_slot_8(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      attr(slot, "name", "trailingIcon");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_if_block_8(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = ctx[15] === "filled" && create_if_block_10();
  let if_block1 = !ctx[16] && (ctx[17] != null || ctx[42].label) && create_if_block_9(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[15] === "filled") {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_10();
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!ctx2[16] && (ctx2[17] != null || ctx2[42].label)) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 196608 | dirty[1] & 2048) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_9(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_if_block_10(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      attr(span, "class", "mdc-text-field__ripple");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_9(ctx) {
  let floatinglabel;
  let current;
  const floatinglabel_spread_levels = [
    {
      floatAbove: ctx[28] || ctx[0] != null && ctx[0] !== ""
    },
    { required: ctx[13] },
    { wrapped: true },
    prefixFilter(ctx[41], "label$")
  ];
  let floatinglabel_props = {
    $$slots: { default: [create_default_slot_7] },
    $$scope: { ctx }
  };
  for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }
  floatinglabel = new FloatingLabel({ props: floatinglabel_props });
  ctx[51](floatinglabel);
  return {
    c() {
      create_component(floatinglabel.$$.fragment);
    },
    m(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const floatinglabel_changes = dirty[0] & 268443649 | dirty[1] & 1024 ? get_spread_update(floatinglabel_spread_levels, [
        dirty[0] & 268435457 && {
          floatAbove: ctx2[28] || ctx2[0] != null && ctx2[0] !== ""
        },
        dirty[0] & 8192 && { required: ctx2[13] },
        floatinglabel_spread_levels[2],
        dirty[1] & 1024 && get_spread_object(prefixFilter(ctx2[41], "label$"))
      ]) : {};
      if (dirty[0] & 131072 | dirty[3] & 4) {
        floatinglabel_changes.$$scope = { dirty, ctx: ctx2 };
      }
      floatinglabel.$set(floatinglabel_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[51](null);
      destroy_component(floatinglabel, detaching);
    }
  };
}
function create_default_slot_7(ctx) {
  let t_value = (ctx[17] == null ? "" : ctx[17]) + "";
  let t;
  let slot;
  return {
    c() {
      t = text(t_value);
      slot = element("slot");
      attr(slot, "name", "label");
    },
    m(target, anchor) {
      insert(target, t, anchor);
      insert(target, slot, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 131072 && t_value !== (t_value = (ctx2[17] == null ? "" : ctx2[17]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(slot);
    }
  };
}
function create_if_block_6(ctx) {
  let notchedoutline;
  let current;
  const notchedoutline_spread_levels = [
    {
      noLabel: ctx[16] || ctx[17] == null && !ctx[42].label
    },
    prefixFilter(ctx[41], "outline$")
  ];
  let notchedoutline_props = {
    $$slots: { default: [create_default_slot_5] },
    $$scope: { ctx }
  };
  for (let i = 0; i < notchedoutline_spread_levels.length; i += 1) {
    notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
  }
  notchedoutline = new NotchedOutline({ props: notchedoutline_props });
  ctx[53](notchedoutline);
  return {
    c() {
      create_component(notchedoutline.$$.fragment);
    },
    m(target, anchor) {
      mount_component(notchedoutline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const notchedoutline_changes = dirty[0] & 196608 | dirty[1] & 3072 ? get_spread_update(notchedoutline_spread_levels, [
        dirty[0] & 196608 | dirty[1] & 2048 && {
          noLabel: ctx2[16] || ctx2[17] == null && !ctx2[42].label
        },
        dirty[1] & 1024 && get_spread_object(prefixFilter(ctx2[41], "outline$"))
      ]) : {};
      if (dirty[0] & 268640289 | dirty[1] & 3072 | dirty[3] & 4) {
        notchedoutline_changes.$$scope = { dirty, ctx: ctx2 };
      }
      notchedoutline.$set(notchedoutline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(notchedoutline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(notchedoutline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[53](null);
      destroy_component(notchedoutline, detaching);
    }
  };
}
function create_if_block_7(ctx) {
  let floatinglabel;
  let current;
  const floatinglabel_spread_levels = [
    {
      floatAbove: ctx[28] || ctx[0] != null && ctx[0] !== ""
    },
    { required: ctx[13] },
    { wrapped: true },
    prefixFilter(ctx[41], "label$")
  ];
  let floatinglabel_props = {
    $$slots: { default: [create_default_slot_6] },
    $$scope: { ctx }
  };
  for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }
  floatinglabel = new FloatingLabel({ props: floatinglabel_props });
  ctx[52](floatinglabel);
  return {
    c() {
      create_component(floatinglabel.$$.fragment);
    },
    m(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const floatinglabel_changes = dirty[0] & 268443649 | dirty[1] & 1024 ? get_spread_update(floatinglabel_spread_levels, [
        dirty[0] & 268435457 && {
          floatAbove: ctx2[28] || ctx2[0] != null && ctx2[0] !== ""
        },
        dirty[0] & 8192 && { required: ctx2[13] },
        floatinglabel_spread_levels[2],
        dirty[1] & 1024 && get_spread_object(prefixFilter(ctx2[41], "label$"))
      ]) : {};
      if (dirty[0] & 131072 | dirty[3] & 4) {
        floatinglabel_changes.$$scope = { dirty, ctx: ctx2 };
      }
      floatinglabel.$set(floatinglabel_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[52](null);
      destroy_component(floatinglabel, detaching);
    }
  };
}
function create_default_slot_6(ctx) {
  let t_value = (ctx[17] == null ? "" : ctx[17]) + "";
  let t;
  let slot;
  return {
    c() {
      t = text(t_value);
      slot = element("slot");
      attr(slot, "name", "label");
    },
    m(target, anchor) {
      insert(target, t, anchor);
      insert(target, slot, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 131072 && t_value !== (t_value = (ctx2[17] == null ? "" : ctx2[17]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(slot);
    }
  };
}
function create_default_slot_5(ctx) {
  let if_block_anchor;
  let current;
  let if_block = !ctx[16] && (ctx[17] != null || ctx[42].label) && create_if_block_7(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (!ctx2[16] && (ctx2[17] != null || ctx2[42].label)) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 196608 | dirty[1] & 2048) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_7(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_4(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      attr(slot, "name", "leadingIcon");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_else_block$1(ctx) {
  let slot0;
  let t0;
  let t1;
  let input_1;
  let updating_value;
  let updating_files;
  let updating_dirty;
  let updating_invalid;
  let t2;
  let t3;
  let slot1;
  let current;
  let if_block0 = ctx[20] != null && create_if_block_5(ctx);
  const input_1_spread_levels = [
    { type: ctx[18] },
    { disabled: ctx[12] },
    { required: ctx[13] },
    { updateInvalid: ctx[19] },
    { "aria-controls": ctx[27] },
    { "aria-describedby": ctx[27] },
    ctx[16] && ctx[17] != null ? { placeholder: ctx[17] } : {},
    prefixFilter(ctx[41], "input$")
  ];
  function input_1_value_binding(value) {
    ctx[63](value);
  }
  function input_1_files_binding(value) {
    ctx[64](value);
  }
  function input_1_dirty_binding(value) {
    ctx[65](value);
  }
  function input_1_invalid_binding(value) {
    ctx[66](value);
  }
  let input_1_props = {};
  for (let i = 0; i < input_1_spread_levels.length; i += 1) {
    input_1_props = assign(input_1_props, input_1_spread_levels[i]);
  }
  if (ctx[0] !== void 0) {
    input_1_props.value = ctx[0];
  }
  if (ctx[3] !== void 0) {
    input_1_props.files = ctx[3];
  }
  if (ctx[4] !== void 0) {
    input_1_props.dirty = ctx[4];
  }
  if (ctx[1] !== void 0) {
    input_1_props.invalid = ctx[1];
  }
  input_1 = new Input({ props: input_1_props });
  ctx[62](input_1);
  binding_callbacks.push(() => bind$4(input_1, "value", input_1_value_binding));
  binding_callbacks.push(() => bind$4(input_1, "files", input_1_files_binding));
  binding_callbacks.push(() => bind$4(input_1, "dirty", input_1_dirty_binding));
  binding_callbacks.push(() => bind$4(input_1, "invalid", input_1_invalid_binding));
  input_1.$on("blur", ctx[67]);
  input_1.$on("focus", ctx[68]);
  input_1.$on("blur", ctx[69]);
  input_1.$on("focus", ctx[70]);
  let if_block1 = ctx[21] != null && create_if_block_4(ctx);
  return {
    c() {
      slot0 = element("slot");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      create_component(input_1.$$.fragment);
      t2 = space();
      if (if_block1)
        if_block1.c();
      t3 = space();
      slot1 = element("slot");
      attr(slot0, "name", "prefix");
      attr(slot1, "name", "suffix");
    },
    m(target, anchor) {
      insert(target, slot0, anchor);
      insert(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t1, anchor);
      mount_component(input_1, target, anchor);
      insert(target, t2, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, t3, anchor);
      insert(target, slot1, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[20] != null) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 1048576) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      const input_1_changes = dirty[0] & 135213056 | dirty[1] & 1024 ? get_spread_update(input_1_spread_levels, [
        dirty[0] & 262144 && { type: ctx2[18] },
        dirty[0] & 4096 && { disabled: ctx2[12] },
        dirty[0] & 8192 && { required: ctx2[13] },
        dirty[0] & 524288 && { updateInvalid: ctx2[19] },
        dirty[0] & 134217728 && { "aria-controls": ctx2[27] },
        dirty[0] & 134217728 && { "aria-describedby": ctx2[27] },
        dirty[0] & 196608 && get_spread_object(ctx2[16] && ctx2[17] != null ? { placeholder: ctx2[17] } : {}),
        dirty[1] & 1024 && get_spread_object(prefixFilter(ctx2[41], "input$"))
      ]) : {};
      if (!updating_value && dirty[0] & 1) {
        updating_value = true;
        input_1_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_files && dirty[0] & 8) {
        updating_files = true;
        input_1_changes.files = ctx2[3];
        add_flush_callback(() => updating_files = false);
      }
      if (!updating_dirty && dirty[0] & 16) {
        updating_dirty = true;
        input_1_changes.dirty = ctx2[4];
        add_flush_callback(() => updating_dirty = false);
      }
      if (!updating_invalid && dirty[0] & 2) {
        updating_invalid = true;
        input_1_changes.invalid = ctx2[1];
        add_flush_callback(() => updating_invalid = false);
      }
      input_1.$set(input_1_changes);
      if (ctx2[21] != null) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 2097152) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_4(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t3.parentNode, t3);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(input_1.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(input_1.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(slot0);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      ctx[62](null);
      destroy_component(input_1, detaching);
      if (detaching)
        detach(t2);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(slot1);
    }
  };
}
function create_if_block_3(ctx) {
  let span;
  let textarea_1;
  let updating_value;
  let updating_dirty;
  let updating_invalid;
  let t;
  let slot;
  let span_class_value;
  let current;
  const textarea_1_spread_levels = [
    { disabled: ctx[12] },
    { required: ctx[13] },
    { updateInvalid: ctx[19] },
    { "aria-controls": ctx[27] },
    { "aria-describedby": ctx[27] },
    prefixFilter(ctx[41], "input$")
  ];
  function textarea_1_value_binding(value) {
    ctx[55](value);
  }
  function textarea_1_dirty_binding(value) {
    ctx[56](value);
  }
  function textarea_1_invalid_binding(value) {
    ctx[57](value);
  }
  let textarea_1_props = {};
  for (let i = 0; i < textarea_1_spread_levels.length; i += 1) {
    textarea_1_props = assign(textarea_1_props, textarea_1_spread_levels[i]);
  }
  if (ctx[0] !== void 0) {
    textarea_1_props.value = ctx[0];
  }
  if (ctx[4] !== void 0) {
    textarea_1_props.dirty = ctx[4];
  }
  if (ctx[1] !== void 0) {
    textarea_1_props.invalid = ctx[1];
  }
  textarea_1 = new Textarea({ props: textarea_1_props });
  ctx[54](textarea_1);
  binding_callbacks.push(() => bind$4(textarea_1, "value", textarea_1_value_binding));
  binding_callbacks.push(() => bind$4(textarea_1, "dirty", textarea_1_dirty_binding));
  binding_callbacks.push(() => bind$4(textarea_1, "invalid", textarea_1_invalid_binding));
  textarea_1.$on("blur", ctx[58]);
  textarea_1.$on("focus", ctx[59]);
  textarea_1.$on("blur", ctx[60]);
  textarea_1.$on("focus", ctx[61]);
  return {
    c() {
      span = element("span");
      create_component(textarea_1.$$.fragment);
      t = space();
      slot = element("slot");
      attr(slot, "name", "internalCounter");
      attr(span, "class", span_class_value = classMap({
        "mdc-text-field__resizer": !("input$resizable" in ctx[41]) || ctx[41].input$resizable
      }));
    },
    m(target, anchor) {
      insert(target, span, anchor);
      mount_component(textarea_1, span, null);
      append(span, t);
      append(span, slot);
      current = true;
    },
    p(ctx2, dirty) {
      const textarea_1_changes = dirty[0] & 134754304 | dirty[1] & 1024 ? get_spread_update(textarea_1_spread_levels, [
        dirty[0] & 4096 && { disabled: ctx2[12] },
        dirty[0] & 8192 && { required: ctx2[13] },
        dirty[0] & 524288 && { updateInvalid: ctx2[19] },
        dirty[0] & 134217728 && { "aria-controls": ctx2[27] },
        dirty[0] & 134217728 && { "aria-describedby": ctx2[27] },
        dirty[1] & 1024 && get_spread_object(prefixFilter(ctx2[41], "input$"))
      ]) : {};
      if (!updating_value && dirty[0] & 1) {
        updating_value = true;
        textarea_1_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      if (!updating_dirty && dirty[0] & 16) {
        updating_dirty = true;
        textarea_1_changes.dirty = ctx2[4];
        add_flush_callback(() => updating_dirty = false);
      }
      if (!updating_invalid && dirty[0] & 2) {
        updating_invalid = true;
        textarea_1_changes.invalid = ctx2[1];
        add_flush_callback(() => updating_invalid = false);
      }
      textarea_1.$set(textarea_1_changes);
      if (!current || dirty[1] & 1024 && span_class_value !== (span_class_value = classMap({
        "mdc-text-field__resizer": !("input$resizable" in ctx2[41]) || ctx2[41].input$resizable
      }))) {
        attr(span, "class", span_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(textarea_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textarea_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      ctx[54](null);
      destroy_component(textarea_1);
    }
  };
}
function create_if_block_5(ctx) {
  let prefix_1;
  let current;
  prefix_1 = new Prefix({
    props: {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(prefix_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(prefix_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const prefix_1_changes = {};
      if (dirty[0] & 1048576 | dirty[3] & 4) {
        prefix_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      prefix_1.$set(prefix_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(prefix_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(prefix_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(prefix_1, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[20]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1048576)
        set_data(t, ctx2[20]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_4(ctx) {
  let suffix_1;
  let current;
  suffix_1 = new Suffix({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(suffix_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(suffix_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const suffix_1_changes = {};
      if (dirty[0] & 2097152 | dirty[3] & 4) {
        suffix_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      suffix_1.$set(suffix_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(suffix_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(suffix_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(suffix_1, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[21]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2097152)
        set_data(t, ctx2[21]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      attr(slot, "name", "trailingIcon");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_if_block_2(ctx) {
  let lineripple;
  let current;
  const lineripple_spread_levels = [prefixFilter(ctx[41], "ripple$")];
  let lineripple_props = {};
  for (let i = 0; i < lineripple_spread_levels.length; i += 1) {
    lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
  }
  lineripple = new LineRipple({ props: lineripple_props });
  ctx[71](lineripple);
  return {
    c() {
      create_component(lineripple.$$.fragment);
    },
    m(target, anchor) {
      mount_component(lineripple, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const lineripple_changes = dirty[1] & 1024 ? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(ctx2[41], "ripple$"))]) : {};
      lineripple.$set(lineripple_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(lineripple.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(lineripple.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[71](null);
      destroy_component(lineripple, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let helperline;
  let current;
  const helperline_spread_levels = [prefixFilter(ctx[41], "helperLine$")];
  let helperline_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < helperline_spread_levels.length; i += 1) {
    helperline_props = assign(helperline_props, helperline_spread_levels[i]);
  }
  helperline = new HelperLine({ props: helperline_props });
  helperline.$on("SMUITextfieldHelperText:id", ctx[84]);
  helperline.$on("SMUITextfieldHelperText:mount", ctx[85]);
  helperline.$on("SMUITextfieldHelperText:unmount", ctx[86]);
  helperline.$on("SMUITextfieldCharacterCounter:mount", ctx[87]);
  helperline.$on("SMUITextfieldCharacterCounter:unmount", ctx[88]);
  return {
    c() {
      create_component(helperline.$$.fragment);
    },
    m(target, anchor) {
      mount_component(helperline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const helperline_changes = dirty[1] & 1024 ? get_spread_update(helperline_spread_levels, [get_spread_object(prefixFilter(ctx2[41], "helperLine$"))]) : {};
      if (dirty[3] & 4) {
        helperline_changes.$$scope = { dirty, ctx: ctx2 };
      }
      helperline.$set(helperline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(helperline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(helperline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(helperline, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let slot;
  return {
    c() {
      slot = element("slot");
      attr(slot, "name", "helper");
    },
    m(target, anchor) {
      insert(target, slot, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(slot);
    }
  };
}
function create_fragment$4(ctx) {
  let current_block_type_index;
  let if_block0;
  let t;
  let if_block1_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[36])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = ctx[42].helper && create_if_block$1(ctx);
  return {
    c() {
      if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.c = noop$1;
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if_block0.p(ctx2, dirty);
      if (ctx2[42].helper) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[1] & 2048) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
const func$1 = ([name, value]) => `${name}: ${value};`;
const func_1 = ([name, value]) => `${name}: ${value};`;
function instance_1$2($$self, $$props, $$invalidate) {
  let inputElement;
  const omit_props_names = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const { applyPassive: applyPassive2 } = events;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { textarea = false } = $$props;
  let { variant = textarea ? "outlined" : "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { value = $$restProps.input$emptyValueUndefined ? void 0 : uninitializedValue } = $$props;
  let { files = uninitializedValue } = $$props;
  const valued = !isUninitializedValue(value) || !isUninitializedValue(files);
  if (isUninitializedValue(value)) {
    value = void 0;
  }
  if (isUninitializedValue(files)) {
    files = null;
  }
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { dirty = false } = $$props;
  let { prefix = void 0 } = $$props;
  let { suffix = void 0 } = $$props;
  let { validateOnValueChange = updateInvalid } = $$props;
  let { useNativeValidation = updateInvalid } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { withTrailingIcon = uninitializedValue } = $$props;
  let { input = void 0 } = $$props;
  let { floatingLabel = void 0 } = $$props;
  let { lineRipple = void 0 } = $$props;
  let { notchedOutline = void 0 } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  let helperId = void 0;
  let focused = false;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let initPromiseResolve;
  let initPromise = new Promise((resolve) => initPromiseResolve = resolve);
  let leadingIcon = void 0;
  let trailingIcon = void 0;
  let helperText = void 0;
  let characterCounter = void 0;
  let previousValue = value;
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onMount(() => {
    $$invalidate(49, instance2 = new MDCTextFieldFoundation({
      addClass,
      removeClass,
      hasClass,
      registerTextFieldInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
      deregisterTextFieldInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler),
      registerValidationAttributeChangeHandler: (handler) => {
        const getAttributesList = (mutationsList) => {
          return mutationsList.map((mutation) => mutation.attributeName).filter((attributeName) => attributeName);
        };
        const observer = new MutationObserver((mutationsList) => {
          if (useNativeValidation) {
            handler(getAttributesList(mutationsList));
          }
        });
        const config2 = { attributes: true };
        if (input) {
          observer.observe(input.getElement(), config2);
        }
        return observer;
      },
      deregisterValidationAttributeChangeHandler: (observer) => {
        observer.disconnect();
      },
      getNativeInput: () => {
        var _a2;
        return (_a2 = input === null || input === void 0 ? void 0 : input.getElement()) !== null && _a2 !== void 0 ? _a2 : null;
      },
      setInputAttr: (name, value2) => {
        input === null || input === void 0 ? void 0 : input.addAttr(name, value2);
      },
      removeInputAttr: (name) => {
        input === null || input === void 0 ? void 0 : input.removeAttr(name);
      },
      isFocused: () => document.activeElement === (input === null || input === void 0 ? void 0 : input.getElement()),
      registerInputInteractionHandler: (evtType, handler) => {
        input === null || input === void 0 ? void 0 : input.getElement().addEventListener(evtType, handler, applyPassive2());
      },
      deregisterInputInteractionHandler: (evtType, handler) => {
        input === null || input === void 0 ? void 0 : input.getElement().removeEventListener(evtType, handler, applyPassive2());
      },
      floatLabel: (shouldFloat) => floatingLabel && floatingLabel.float(shouldFloat),
      getLabelWidth: () => floatingLabel ? floatingLabel.getWidth() : 0,
      hasLabel: () => !!floatingLabel,
      shakeLabel: (shouldShake) => floatingLabel && floatingLabel.shake(shouldShake),
      setLabelRequired: (isRequired) => floatingLabel && floatingLabel.setRequired(isRequired),
      activateLineRipple: () => lineRipple && lineRipple.activate(),
      deactivateLineRipple: () => lineRipple && lineRipple.deactivate(),
      setLineRippleTransformOrigin: (normalizedX) => lineRipple && lineRipple.setRippleCenter(normalizedX),
      closeOutline: () => notchedOutline && notchedOutline.closeNotch(),
      hasOutline: () => !!notchedOutline,
      notchOutline: (labelWidth) => notchedOutline && notchedOutline.notch(labelWidth)
    }, {
      get helperText() {
        return helperText;
      },
      get characterCounter() {
        return characterCounter;
      },
      get leadingIcon() {
        return leadingIcon;
      },
      get trailingIcon() {
        return trailingIcon;
      }
    }));
    if (valued) {
      if (input == null) {
        throw new Error("SMUI Textfield initialized without Input component.");
      }
      instance2.init();
    } else {
      tick().then(() => {
        if (input == null) {
          throw new Error("SMUI Textfield initialized without Input component.");
        }
        instance2.init();
      });
    }
    initPromiseResolve();
    return () => {
      instance2.destroy();
    };
  });
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function hasClass(className2) {
    var _a2;
    return className2 in internalClasses ? (_a2 = internalClasses[className2]) !== null && _a2 !== void 0 ? _a2 : null : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(25, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(25, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value2) {
    if (internalStyles[name] != value2) {
      if (value2 === "" || value2 == null) {
        delete internalStyles[name];
        $$invalidate(26, internalStyles);
      } else {
        $$invalidate(26, internalStyles[name] = value2, internalStyles);
      }
    }
  }
  function focus() {
    input === null || input === void 0 ? void 0 : input.focus();
  }
  function blur() {
    input === null || input === void 0 ? void 0 : input.blur();
  }
  function layout() {
    if (instance2) {
      const openNotch = instance2.shouldFloat;
      instance2.notchOutline(openNotch);
    }
  }
  function getElement() {
    return element2;
  }
  function floatinglabel_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      floatingLabel = $$value;
      $$invalidate(5, floatingLabel);
    });
  }
  function floatinglabel_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      floatingLabel = $$value;
      $$invalidate(5, floatingLabel);
    });
  }
  function notchedoutline_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      notchedOutline = $$value;
      $$invalidate(7, notchedOutline);
    });
  }
  function textarea_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(2, input);
    });
  }
  function textarea_1_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }
  function textarea_1_dirty_binding(value2) {
    dirty = value2;
    $$invalidate(4, dirty);
  }
  function textarea_1_invalid_binding(value2) {
    invalid = value2;
    $$invalidate(1, invalid), $$invalidate(49, instance2), $$invalidate(19, updateInvalid);
  }
  const blur_handler = () => $$invalidate(28, focused = false);
  const focus_handler = () => $$invalidate(28, focused = true);
  const blur_handler_1 = (event) => dispatch(element2, "blur", event);
  const focus_handler_1 = (event) => dispatch(element2, "focus", event);
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(2, input);
    });
  }
  function input_1_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }
  function input_1_files_binding(value2) {
    files = value2;
    $$invalidate(3, files);
  }
  function input_1_dirty_binding(value2) {
    dirty = value2;
    $$invalidate(4, dirty);
  }
  function input_1_invalid_binding(value2) {
    invalid = value2;
    $$invalidate(1, invalid), $$invalidate(49, instance2), $$invalidate(19, updateInvalid);
  }
  const blur_handler_2 = () => $$invalidate(28, focused = false);
  const focus_handler_2 = () => $$invalidate(28, focused = true);
  const blur_handler_3 = (event) => dispatch(element2, "blur", event);
  const focus_handler_3 = (event) => dispatch(element2, "focus", event);
  function lineripple_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      lineRipple = $$value;
      $$invalidate(6, lineRipple);
    });
  }
  function label_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(24, element2);
    });
  }
  const SMUITextfieldLeadingIcon_mount_handler = (event) => $$invalidate(29, leadingIcon = event.detail);
  const SMUITextfieldLeadingIcon_unmount_handler = () => $$invalidate(29, leadingIcon = void 0);
  const SMUITextfieldTrailingIcon_mount_handler = (event) => $$invalidate(30, trailingIcon = event.detail);
  const SMUITextfieldTrailingIcon_unmount_handler = () => $$invalidate(30, trailingIcon = void 0);
  const SMUITextfieldCharacterCounter_mount_handler = (event) => $$invalidate(32, characterCounter = event.detail);
  const SMUITextfieldCharacterCounter_unmount_handler = () => $$invalidate(32, characterCounter = void 0);
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(24, element2);
    });
  }
  const SMUITextfieldLeadingIcon_mount_handler_1 = (event) => $$invalidate(29, leadingIcon = event.detail);
  const SMUITextfieldLeadingIcon_unmount_handler_1 = () => $$invalidate(29, leadingIcon = void 0);
  const SMUITextfieldTrailingIcon_mount_handler_1 = (event) => $$invalidate(30, trailingIcon = event.detail);
  const SMUITextfieldTrailingIcon_unmount_handler_1 = () => $$invalidate(30, trailingIcon = void 0);
  const SMUITextfieldHelperText_id_handler = (event) => $$invalidate(27, helperId = event.detail);
  const SMUITextfieldHelperText_mount_handler = (event) => $$invalidate(31, helperText = event.detail);
  const SMUITextfieldHelperText_unmount_handler = () => {
    $$invalidate(27, helperId = void 0);
    $$invalidate(31, helperText = void 0);
  };
  const SMUITextfieldCharacterCounter_mount_handler_1 = (event) => $$invalidate(32, characterCounter = event.detail);
  const SMUITextfieldCharacterCounter_unmount_handler_1 = () => $$invalidate(32, characterCounter = void 0);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(41, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(8, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(9, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(10, style = $$new_props.style);
    if ("ripple" in $$new_props)
      $$invalidate(11, ripple = $$new_props.ripple);
    if ("disabled" in $$new_props)
      $$invalidate(12, disabled = $$new_props.disabled);
    if ("required" in $$new_props)
      $$invalidate(13, required = $$new_props.required);
    if ("textarea" in $$new_props)
      $$invalidate(14, textarea = $$new_props.textarea);
    if ("variant" in $$new_props)
      $$invalidate(15, variant = $$new_props.variant);
    if ("noLabel" in $$new_props)
      $$invalidate(16, noLabel = $$new_props.noLabel);
    if ("label" in $$new_props)
      $$invalidate(17, label = $$new_props.label);
    if ("type" in $$new_props)
      $$invalidate(18, type = $$new_props.type);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("files" in $$new_props)
      $$invalidate(3, files = $$new_props.files);
    if ("invalid" in $$new_props)
      $$invalidate(1, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props)
      $$invalidate(19, updateInvalid = $$new_props.updateInvalid);
    if ("dirty" in $$new_props)
      $$invalidate(4, dirty = $$new_props.dirty);
    if ("prefix" in $$new_props)
      $$invalidate(20, prefix = $$new_props.prefix);
    if ("suffix" in $$new_props)
      $$invalidate(21, suffix = $$new_props.suffix);
    if ("validateOnValueChange" in $$new_props)
      $$invalidate(43, validateOnValueChange = $$new_props.validateOnValueChange);
    if ("useNativeValidation" in $$new_props)
      $$invalidate(44, useNativeValidation = $$new_props.useNativeValidation);
    if ("withLeadingIcon" in $$new_props)
      $$invalidate(22, withLeadingIcon = $$new_props.withLeadingIcon);
    if ("withTrailingIcon" in $$new_props)
      $$invalidate(23, withTrailingIcon = $$new_props.withTrailingIcon);
    if ("input" in $$new_props)
      $$invalidate(2, input = $$new_props.input);
    if ("floatingLabel" in $$new_props)
      $$invalidate(5, floatingLabel = $$new_props.floatingLabel);
    if ("lineRipple" in $$new_props)
      $$invalidate(6, lineRipple = $$new_props.lineRipple);
    if ("notchedOutline" in $$new_props)
      $$invalidate(7, notchedOutline = $$new_props.notchedOutline);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 4) {
      $$invalidate(33, inputElement = input && input.getElement());
    }
    if ($$self.$$.dirty[0] & 524290 | $$self.$$.dirty[1] & 262144) {
      if (instance2 && instance2.isValid() !== !invalid) {
        if (updateInvalid) {
          $$invalidate(1, invalid = !instance2.isValid());
        } else {
          instance2.setValid(!invalid);
        }
      }
    }
    if ($$self.$$.dirty[1] & 266240) {
      if (instance2 && instance2.getValidateOnValueChange() !== validateOnValueChange) {
        instance2.setValidateOnValueChange(isUninitializedValue(validateOnValueChange) ? false : validateOnValueChange);
      }
    }
    if ($$self.$$.dirty[1] & 270336) {
      if (instance2) {
        instance2.setUseNativeValidation(isUninitializedValue(useNativeValidation) ? true : useNativeValidation);
      }
    }
    if ($$self.$$.dirty[0] & 4096 | $$self.$$.dirty[1] & 262144) {
      if (instance2) {
        instance2.setDisabled(disabled);
      }
    }
    if ($$self.$$.dirty[0] & 1 | $$self.$$.dirty[1] & 786432) {
      if (instance2 && valued && previousValue !== value) {
        $$invalidate(50, previousValue = value);
        const stringValue = `${value}`;
        if (instance2.getValue() !== stringValue) {
          instance2.setValue(stringValue);
        }
      }
    }
  };
  return [
    value,
    invalid,
    input,
    files,
    dirty,
    floatingLabel,
    lineRipple,
    notchedOutline,
    use2,
    className,
    style,
    ripple,
    disabled,
    required,
    textarea,
    variant,
    noLabel,
    label,
    type,
    updateInvalid,
    prefix,
    suffix,
    withLeadingIcon,
    withTrailingIcon,
    element2,
    internalClasses,
    internalStyles,
    helperId,
    focused,
    leadingIcon,
    trailingIcon,
    helperText,
    characterCounter,
    inputElement,
    forwardEvents,
    isUninitializedValue,
    valued,
    initPromise,
    addClass,
    removeClass,
    addStyle,
    $$restProps,
    $$slots,
    validateOnValueChange,
    useNativeValidation,
    focus,
    blur,
    layout,
    getElement,
    instance2,
    previousValue,
    floatinglabel_binding,
    floatinglabel_binding_1,
    notchedoutline_binding,
    textarea_1_binding,
    textarea_1_value_binding,
    textarea_1_dirty_binding,
    textarea_1_invalid_binding,
    blur_handler,
    focus_handler,
    blur_handler_1,
    focus_handler_1,
    input_1_binding,
    input_1_value_binding,
    input_1_files_binding,
    input_1_dirty_binding,
    input_1_invalid_binding,
    blur_handler_2,
    focus_handler_2,
    blur_handler_3,
    focus_handler_3,
    lineripple_binding,
    label_1_binding,
    SMUITextfieldLeadingIcon_mount_handler,
    SMUITextfieldLeadingIcon_unmount_handler,
    SMUITextfieldTrailingIcon_mount_handler,
    SMUITextfieldTrailingIcon_unmount_handler,
    SMUITextfieldCharacterCounter_mount_handler,
    SMUITextfieldCharacterCounter_unmount_handler,
    div_binding,
    SMUITextfieldLeadingIcon_mount_handler_1,
    SMUITextfieldLeadingIcon_unmount_handler_1,
    SMUITextfieldTrailingIcon_mount_handler_1,
    SMUITextfieldTrailingIcon_unmount_handler_1,
    SMUITextfieldHelperText_id_handler,
    SMUITextfieldHelperText_mount_handler,
    SMUITextfieldHelperText_unmount_handler,
    SMUITextfieldCharacterCounter_mount_handler_1,
    SMUITextfieldCharacterCounter_unmount_handler_1
  ];
}
class Textfield extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: {
        ...attribute_to_object(this.attributes),
        $$slots: get_custom_elements_slots(this)
      },
      customElement: true
    }, instance_1$2, create_fragment$4, safe_not_equal, {
      use: 8,
      class: 9,
      style: 10,
      ripple: 11,
      disabled: 12,
      required: 13,
      textarea: 14,
      variant: 15,
      noLabel: 16,
      label: 17,
      type: 18,
      value: 0,
      files: 3,
      invalid: 1,
      updateInvalid: 19,
      dirty: 4,
      prefix: 20,
      suffix: 21,
      validateOnValueChange: 43,
      useNativeValidation: 44,
      withLeadingIcon: 22,
      withTrailingIcon: 23,
      input: 2,
      floatingLabel: 5,
      lineRipple: 6,
      notchedOutline: 7,
      focus: 45,
      blur: 46,
      layout: 47,
      getElement: 48
    }, null, [-1, -1, -1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "ripple",
      "disabled",
      "required",
      "textarea",
      "variant",
      "noLabel",
      "label",
      "type",
      "value",
      "files",
      "invalid",
      "updateInvalid",
      "dirty",
      "prefix",
      "suffix",
      "validateOnValueChange",
      "useNativeValidation",
      "withLeadingIcon",
      "withTrailingIcon",
      "input",
      "floatingLabel",
      "lineRipple",
      "notchedOutline",
      "focus",
      "blur",
      "layout",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[8];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[9];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[10];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get ripple() {
    return this.$$.ctx[11];
  }
  set ripple(ripple) {
    this.$$set({ ripple });
    flush();
  }
  get disabled() {
    return this.$$.ctx[12];
  }
  set disabled(disabled) {
    this.$$set({ disabled });
    flush();
  }
  get required() {
    return this.$$.ctx[13];
  }
  set required(required) {
    this.$$set({ required });
    flush();
  }
  get textarea() {
    return this.$$.ctx[14];
  }
  set textarea(textarea) {
    this.$$set({ textarea });
    flush();
  }
  get variant() {
    return this.$$.ctx[15];
  }
  set variant(variant) {
    this.$$set({ variant });
    flush();
  }
  get noLabel() {
    return this.$$.ctx[16];
  }
  set noLabel(noLabel) {
    this.$$set({ noLabel });
    flush();
  }
  get label() {
    return this.$$.ctx[17];
  }
  set label(label) {
    this.$$set({ label });
    flush();
  }
  get type() {
    return this.$$.ctx[18];
  }
  set type(type) {
    this.$$set({ type });
    flush();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get files() {
    return this.$$.ctx[3];
  }
  set files(files) {
    this.$$set({ files });
    flush();
  }
  get invalid() {
    return this.$$.ctx[1];
  }
  set invalid(invalid) {
    this.$$set({ invalid });
    flush();
  }
  get updateInvalid() {
    return this.$$.ctx[19];
  }
  set updateInvalid(updateInvalid) {
    this.$$set({ updateInvalid });
    flush();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(dirty) {
    this.$$set({ dirty });
    flush();
  }
  get prefix() {
    return this.$$.ctx[20];
  }
  set prefix(prefix) {
    this.$$set({ prefix });
    flush();
  }
  get suffix() {
    return this.$$.ctx[21];
  }
  set suffix(suffix) {
    this.$$set({ suffix });
    flush();
  }
  get validateOnValueChange() {
    return this.$$.ctx[43];
  }
  set validateOnValueChange(validateOnValueChange) {
    this.$$set({ validateOnValueChange });
    flush();
  }
  get useNativeValidation() {
    return this.$$.ctx[44];
  }
  set useNativeValidation(useNativeValidation) {
    this.$$set({ useNativeValidation });
    flush();
  }
  get withLeadingIcon() {
    return this.$$.ctx[22];
  }
  set withLeadingIcon(withLeadingIcon) {
    this.$$set({ withLeadingIcon });
    flush();
  }
  get withTrailingIcon() {
    return this.$$.ctx[23];
  }
  set withTrailingIcon(withTrailingIcon) {
    this.$$set({ withTrailingIcon });
    flush();
  }
  get input() {
    return this.$$.ctx[2];
  }
  set input(input) {
    this.$$set({ input });
    flush();
  }
  get floatingLabel() {
    return this.$$.ctx[5];
  }
  set floatingLabel(floatingLabel) {
    this.$$set({ floatingLabel });
    flush();
  }
  get lineRipple() {
    return this.$$.ctx[6];
  }
  set lineRipple(lineRipple) {
    this.$$set({ lineRipple });
    flush();
  }
  get notchedOutline() {
    return this.$$.ctx[7];
  }
  set notchedOutline(notchedOutline) {
    this.$$set({ notchedOutline });
    flush();
  }
  get focus() {
    return this.$$.ctx[45];
  }
  get blur() {
    return this.$$.ctx[46];
  }
  get layout() {
    return this.$$.ctx[47];
  }
  get getElement() {
    return this.$$.ctx[48];
  }
}
function create_fragment$3(ctx) {
  let div3;
  let input;
  let input_class_value;
  let input_value_value;
  let input_data_indeterminate_value;
  let useActions_action;
  let t0;
  let div1;
  let t2;
  let div2;
  let div3_class_value;
  let div3_style_value;
  let useActions_action_1;
  let Ripple_action;
  let mounted;
  let dispose;
  let input_levels = [
    {
      class: input_class_value = classMap({
        [ctx[9]]: true,
        "mdc-checkbox__native-control": true
      })
    },
    { type: "checkbox" },
    ctx[20],
    { disabled: ctx[1] },
    {
      __value: input_value_value = ctx[19](ctx[7]) ? ctx[6] : ctx[7]
    },
    {
      "data-indeterminate": input_data_indeterminate_value = !ctx[19](ctx[0]) && ctx[0] ? "true" : void 0
    },
    ctx[16],
    prefixFilter(ctx[26], "input$")
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  let div3_levels = [
    {
      class: div3_class_value = classMap({
        [ctx[3]]: true,
        "mdc-checkbox": true,
        "mdc-checkbox--disabled": ctx[1],
        "mdc-checkbox--touch": ctx[5],
        "mdc-data-table__header-row-checkbox": ctx[21] === "data-table" && ctx[22],
        "mdc-data-table__row-checkbox": ctx[21] === "data-table" && !ctx[22],
        ...ctx[14]
      })
    },
    {
      style: div3_style_value = Object.entries(ctx[15]).map(func).concat([ctx[4]]).join(" ")
    },
    exclude(ctx[26], ["input$"])
  ];
  let div3_data = {};
  for (let i = 0; i < div3_levels.length; i += 1) {
    div3_data = assign(div3_data, div3_levels[i]);
  }
  return {
    c() {
      div3 = element("div");
      input = element("input");
      t0 = space();
      div1 = element("div");
      div1.innerHTML = `<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> 
    <div class="mdc-checkbox__mixedmark"></div>`;
      t2 = space();
      div2 = element("div");
      this.c = noop$1;
      set_attributes(input, input_data);
      attr(div1, "class", "mdc-checkbox__background");
      attr(div2, "class", "mdc-checkbox__ripple");
      set_attributes(div3, div3_data);
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, input);
      if (input.autofocus)
        input.focus();
      ctx[36](input);
      input.checked = ctx[12];
      append(div3, t0);
      append(div3, div1);
      append(div3, t2);
      append(div3, div2);
      ctx[38](div3);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, input, ctx[8])),
          listen(input, "change", ctx[37]),
          listen(input, "blur", ctx[34]),
          listen(input, "focus", ctx[35]),
          action_destroyer(useActions_action_1 = useActions.call(null, div3, ctx[2])),
          action_destroyer(ctx[18].call(null, div3)),
          action_destroyer(Ripple_action = Ripple.call(null, div3, {
            unbounded: true,
            addClass: ctx[23],
            removeClass: ctx[24],
            addStyle: ctx[25],
            active: ctx[17],
            eventTarget: ctx[11]
          })),
          listen(div3, "animationend", ctx[39])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        dirty[0] & 512 && input_class_value !== (input_class_value = classMap({
          [ctx2[9]]: true,
          "mdc-checkbox__native-control": true
        })) && { class: input_class_value },
        { type: "checkbox" },
        ctx2[20],
        dirty[0] & 2 && { disabled: ctx2[1] },
        dirty[0] & 192 && input_value_value !== (input_value_value = ctx2[19](ctx2[7]) ? ctx2[6] : ctx2[7]) && { __value: input_value_value },
        dirty[0] & 1 && input_data_indeterminate_value !== (input_data_indeterminate_value = !ctx2[19](ctx2[0]) && ctx2[0] ? "true" : void 0) && {
          "data-indeterminate": input_data_indeterminate_value
        },
        dirty[0] & 65536 && ctx2[16],
        dirty[0] & 67108864 && prefixFilter(ctx2[26], "input$")
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] & 256)
        useActions_action.update.call(null, ctx2[8]);
      if (dirty[0] & 4096) {
        input.checked = ctx2[12];
      }
      set_attributes(div3, div3_data = get_spread_update(div3_levels, [
        dirty[0] & 16426 && div3_class_value !== (div3_class_value = classMap({
          [ctx2[3]]: true,
          "mdc-checkbox": true,
          "mdc-checkbox--disabled": ctx2[1],
          "mdc-checkbox--touch": ctx2[5],
          "mdc-data-table__header-row-checkbox": ctx2[21] === "data-table" && ctx2[22],
          "mdc-data-table__row-checkbox": ctx2[21] === "data-table" && !ctx2[22],
          ...ctx2[14]
        })) && { class: div3_class_value },
        dirty[0] & 32784 && div3_style_value !== (div3_style_value = Object.entries(ctx2[15]).map(func).concat([ctx2[4]]).join(" ")) && { style: div3_style_value },
        dirty[0] & 67108864 && exclude(ctx2[26], ["input$"])
      ]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & 4)
        useActions_action_1.update.call(null, ctx2[2]);
      if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & 133120)
        Ripple_action.update.call(null, {
          unbounded: true,
          addClass: ctx2[23],
          removeClass: ctx2[24],
          addStyle: ctx2[25],
          active: ctx2[17],
          eventTarget: ctx2[11]
        });
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div3);
      ctx[36](null);
      ctx[38](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const func = ([name, value]) => `${name}: ${value};`;
function instance_1$1($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  var _a2;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { disabled = false } = $$props;
  let { touch = false } = $$props;
  let { indeterminate = uninitializedValue } = $$props;
  let { group = uninitializedValue } = $$props;
  let { checked = uninitializedValue } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element2;
  let instance2;
  let checkbox;
  let internalClasses = {};
  let internalStyles = {};
  let nativeControlAttrs = {};
  let rippleActive = false;
  let inputProps = (_a2 = getContext("SMUI:generic:input:props")) !== null && _a2 !== void 0 ? _a2 : {};
  let nativeChecked = isUninitializedValue(group) ? isUninitializedValue(checked) ? false : checked !== null && checked !== void 0 ? checked : void 0 : group.indexOf(value) !== -1;
  let context2 = getContext("SMUI:checkbox:context");
  let dataTableHeader = getContext("SMUI:data-table:row:header");
  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousNativeChecked = nativeChecked;
  onMount(() => {
    $$invalidate(11, checkbox.indeterminate = !isUninitializedValue(indeterminate) && indeterminate, checkbox);
    $$invalidate(10, instance2 = new MDCCheckboxFoundation({
      addClass,
      forceLayout: () => element2.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => Boolean(element2.parentNode),
      isChecked: () => nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : false,
      isIndeterminate: () => isUninitializedValue(indeterminate) ? false : indeterminate,
      removeClass,
      removeNativeControlAttr,
      setNativeControlAttr: addNativeControlAttr,
      setNativeControlDisabled: (value2) => $$invalidate(1, disabled = value2)
    }));
    const accessor = {
      _smui_checkbox_accessor: true,
      get element() {
        return getElement();
      },
      get checked() {
        return nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : false;
      },
      set checked(value2) {
        if (nativeChecked !== value2) {
          $$invalidate(12, nativeChecked = value2);
        }
      },
      get indeterminate() {
        return isUninitializedValue(indeterminate) ? false : indeterminate;
      },
      set indeterminate(value2) {
        $$invalidate(0, indeterminate = value2);
      },
      activateRipple() {
        if (!disabled) {
          $$invalidate(17, rippleActive = true);
        }
      },
      deactivateRipple() {
        $$invalidate(17, rippleActive = false);
      }
    };
    dispatch(element2, "SMUIGenericInput:mount", accessor);
    dispatch(element2, "SMUICheckbox:mount", accessor);
    instance2.init();
    return () => {
      dispatch(element2, "SMUIGenericInput:unmount", accessor);
      dispatch(element2, "SMUICheckbox:unmount", accessor);
      instance2.destroy();
    };
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(14, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(14, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value2) {
    if (internalStyles[name] != value2) {
      if (value2 === "" || value2 == null) {
        delete internalStyles[name];
        $$invalidate(15, internalStyles);
      } else {
        $$invalidate(15, internalStyles[name] = value2, internalStyles);
      }
    }
  }
  function addNativeControlAttr(name, value2) {
    if (nativeControlAttrs[name] !== value2) {
      $$invalidate(16, nativeControlAttrs[name] = value2, nativeControlAttrs);
    }
  }
  function removeNativeControlAttr(name) {
    if (!(name in nativeControlAttrs) || nativeControlAttrs[name] != null) {
      $$invalidate(16, nativeControlAttrs[name] = void 0, nativeControlAttrs);
    }
  }
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element2;
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      checkbox = $$value;
      $$invalidate(11, checkbox), $$invalidate(27, group), $$invalidate(33, previousNativeChecked), $$invalidate(12, nativeChecked), $$invalidate(6, value), $$invalidate(32, previousGroup), $$invalidate(28, checked), $$invalidate(31, previousChecked), $$invalidate(0, indeterminate), $$invalidate(10, instance2);
    });
  }
  function input_change_handler() {
    nativeChecked = this.checked;
    $$invalidate(12, nativeChecked), $$invalidate(27, group), $$invalidate(33, previousNativeChecked), $$invalidate(6, value), $$invalidate(32, previousGroup), $$invalidate(28, checked), $$invalidate(31, previousChecked), $$invalidate(0, indeterminate), $$invalidate(11, checkbox), $$invalidate(10, instance2);
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(13, element2);
    });
  }
  const animationend_handler = () => instance2 && instance2.handleAnimationEnd();
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(26, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(2, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(3, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(4, style = $$new_props.style);
    if ("disabled" in $$new_props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("touch" in $$new_props)
      $$invalidate(5, touch = $$new_props.touch);
    if ("indeterminate" in $$new_props)
      $$invalidate(0, indeterminate = $$new_props.indeterminate);
    if ("group" in $$new_props)
      $$invalidate(27, group = $$new_props.group);
    if ("checked" in $$new_props)
      $$invalidate(28, checked = $$new_props.checked);
    if ("value" in $$new_props)
      $$invalidate(6, value = $$new_props.value);
    if ("valueKey" in $$new_props)
      $$invalidate(7, valueKey = $$new_props.valueKey);
    if ("input$use" in $$new_props)
      $$invalidate(8, input$use = $$new_props.input$use);
    if ("input$class" in $$new_props)
      $$invalidate(9, input$class = $$new_props.input$class);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 402660417 | $$self.$$.dirty[1] & 7) {
      {
        let callHandleChange = false;
        if (!isUninitializedValue(group)) {
          if (previousNativeChecked !== nativeChecked) {
            const idx = group.indexOf(value);
            if (nativeChecked && idx === -1) {
              group.push(value);
              $$invalidate(27, group), $$invalidate(33, previousNativeChecked), $$invalidate(12, nativeChecked), $$invalidate(6, value), $$invalidate(32, previousGroup), $$invalidate(28, checked), $$invalidate(31, previousChecked), $$invalidate(0, indeterminate), $$invalidate(11, checkbox), $$invalidate(10, instance2);
            } else if (!nativeChecked && idx !== -1) {
              group.splice(idx, 1);
              $$invalidate(27, group), $$invalidate(33, previousNativeChecked), $$invalidate(12, nativeChecked), $$invalidate(6, value), $$invalidate(32, previousGroup), $$invalidate(28, checked), $$invalidate(31, previousChecked), $$invalidate(0, indeterminate), $$invalidate(11, checkbox), $$invalidate(10, instance2);
            }
            callHandleChange = true;
          } else {
            const idxPrev = previousGroup.indexOf(value);
            const idx = group.indexOf(value);
            if (idxPrev > -1 && idx === -1) {
              $$invalidate(12, nativeChecked = false);
              callHandleChange = true;
            } else if (idx > -1 && idxPrev === -1) {
              $$invalidate(12, nativeChecked = true);
              callHandleChange = true;
            }
          }
        }
        if (isUninitializedValue(checked)) {
          if (!!previousNativeChecked !== !!nativeChecked) {
            callHandleChange = true;
          }
        } else if (checked !== (nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null)) {
          if (checked === previousChecked) {
            $$invalidate(28, checked = nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null);
            if (!isUninitializedValue(indeterminate)) {
              $$invalidate(0, indeterminate = false);
            }
          } else {
            $$invalidate(12, nativeChecked = checked !== null && checked !== void 0 ? checked : void 0);
          }
          callHandleChange = true;
        }
        if (checkbox) {
          if (isUninitializedValue(indeterminate)) {
            if (checkbox.indeterminate) {
              $$invalidate(11, checkbox.indeterminate = false, checkbox);
              callHandleChange = true;
            }
          } else {
            if (!indeterminate && checkbox.indeterminate) {
              $$invalidate(11, checkbox.indeterminate = false, checkbox);
              callHandleChange = true;
            } else if (indeterminate && !checkbox.indeterminate) {
              $$invalidate(11, checkbox.indeterminate = true, checkbox);
              callHandleChange = true;
            }
          }
        }
        $$invalidate(31, previousChecked = checked);
        $$invalidate(32, previousGroup = isUninitializedValue(group) ? [] : [...group]);
        $$invalidate(33, previousNativeChecked = nativeChecked);
        if (callHandleChange && instance2) {
          instance2.handleChange();
        }
      }
    }
  };
  return [
    indeterminate,
    disabled,
    use2,
    className,
    style,
    touch,
    value,
    valueKey,
    input$use,
    input$class,
    instance2,
    checkbox,
    nativeChecked,
    element2,
    internalClasses,
    internalStyles,
    nativeControlAttrs,
    rippleActive,
    forwardEvents,
    isUninitializedValue,
    inputProps,
    context2,
    dataTableHeader,
    addClass,
    removeClass,
    addStyle,
    $$restProps,
    group,
    checked,
    getId,
    getElement,
    previousChecked,
    previousGroup,
    previousNativeChecked,
    blur_handler,
    focus_handler,
    input_binding,
    input_change_handler,
    div3_binding,
    animationend_handler
  ];
}
class Checkbox extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1$1, create_fragment$3, safe_not_equal, {
      use: 2,
      class: 3,
      style: 4,
      disabled: 1,
      touch: 5,
      indeterminate: 0,
      group: 27,
      checked: 28,
      value: 6,
      valueKey: 7,
      input$use: 8,
      input$class: 9,
      getId: 29,
      getElement: 30
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return [
      "use",
      "class",
      "style",
      "disabled",
      "touch",
      "indeterminate",
      "group",
      "checked",
      "value",
      "valueKey",
      "input$use",
      "input$class",
      "getId",
      "getElement"
    ];
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(style) {
    this.$$set({ style });
    flush();
  }
  get disabled() {
    return this.$$.ctx[1];
  }
  set disabled(disabled) {
    this.$$set({ disabled });
    flush();
  }
  get touch() {
    return this.$$.ctx[5];
  }
  set touch(touch) {
    this.$$set({ touch });
    flush();
  }
  get indeterminate() {
    return this.$$.ctx[0];
  }
  set indeterminate(indeterminate) {
    this.$$set({ indeterminate });
    flush();
  }
  get group() {
    return this.$$.ctx[27];
  }
  set group(group) {
    this.$$set({ group });
    flush();
  }
  get checked() {
    return this.$$.ctx[28];
  }
  set checked(checked) {
    this.$$set({ checked });
    flush();
  }
  get value() {
    return this.$$.ctx[6];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get valueKey() {
    return this.$$.ctx[7];
  }
  set valueKey(valueKey) {
    this.$$set({ valueKey });
    flush();
  }
  get input$use() {
    return this.$$.ctx[8];
  }
  set input$use(input$use) {
    this.$$set({ input$use });
    flush();
  }
  get input$class() {
    return this.$$.ctx[9];
  }
  set input$class(input$class) {
    this.$$set({ input$class });
    flush();
  }
  get getId() {
    return this.$$.ctx[29];
  }
  get getElement() {
    return this.$$.ctx[30];
  }
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ROOT: "mdc-form-field"
};
var strings = {
  LABEL_SELECTOR: ".mdc-form-field > label"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFormFieldFoundation = function(_super) {
  __extends$1(MDCFormFieldFoundation2, _super);
  function MDCFormFieldFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCFormFieldFoundation2.defaultAdapter), adapter)) || this;
    _this.click = function() {
      _this.handleClick();
    };
    return _this;
  }
  Object.defineProperty(MDCFormFieldFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFormFieldFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFormFieldFoundation2, "defaultAdapter", {
    get: function() {
      return {
        activateInputRipple: function() {
          return void 0;
        },
        deactivateInputRipple: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCFormFieldFoundation2.prototype.init = function() {
    this.adapter.registerInteractionHandler("click", this.click);
  };
  MDCFormFieldFoundation2.prototype.destroy = function() {
    this.adapter.deregisterInteractionHandler("click", this.click);
  };
  MDCFormFieldFoundation2.prototype.handleClick = function() {
    var _this = this;
    this.adapter.activateInputRipple();
    requestAnimationFrame(function() {
      _this.adapter.deactivateInputRipple();
    });
  };
  return MDCFormFieldFoundation2;
}(MDCFoundation);
function create_fragment$2(ctx) {
  let div;
  let slot0;
  let t;
  let label_1;
  let slot1;
  let useActions_action;
  let div_class_value;
  let useActions_action_1;
  let mounted;
  let dispose;
  let label_1_levels = [{ for: ctx[4] }, prefixFilter(ctx[10], "label$")];
  let label_1_data = {};
  for (let i = 0; i < label_1_levels.length; i += 1) {
    label_1_data = assign(label_1_data, label_1_levels[i]);
  }
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[1]]: true,
        "mdc-form-field": true,
        "mdc-form-field--align-end": ctx[2] === "end",
        "mdc-form-field--nowrap": ctx[3]
      })
    },
    exclude(ctx[10], ["label$"])
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      slot0 = element("slot");
      t = space();
      label_1 = element("label");
      slot1 = element("slot");
      this.c = noop$1;
      attr(slot1, "name", "label");
      set_attributes(label_1, label_1_data);
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, slot0);
      append(div, t);
      append(div, label_1);
      append(label_1, slot1);
      ctx[12](label_1);
      ctx[13](div);
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, label_1, ctx[5])),
          action_destroyer(useActions_action_1 = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[9].call(null, div)),
          listen(div, "SMUIGenericInput:mount", ctx[14]),
          listen(div, "SMUIGenericInput:unmount", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(label_1, label_1_data = get_spread_update(label_1_levels, [
        dirty & 16 && { for: ctx2[4] },
        dirty & 1024 && prefixFilter(ctx2[10], "label$")
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 32)
        useActions_action.update.call(null, ctx2[5]);
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & 14 && div_class_value !== (div_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-form-field": true,
          "mdc-form-field--align-end": ctx2[2] === "end",
          "mdc-form-field--nowrap": ctx2[3]
        })) && { class: div_class_value },
        dirty & 1024 && exclude(ctx2[10], ["label$"])
      ]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty & 1)
        useActions_action_1.update.call(null, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[12](null);
      ctx[13](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
let counter = 0;
function instance_1($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use: use2 = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { noWrap = false } = $$props;
  let { inputId = "SMUI-form-field-" + counter++ } = $$props;
  let { label$use = [] } = $$props;
  let element2;
  let instance2;
  let label;
  let input;
  setContext("SMUI:generic:input:props", { id: inputId });
  onMount(() => {
    instance2 = new MDCFormFieldFoundation({
      activateInputRipple: () => {
        if (input) {
          input.activateRipple();
        }
      },
      deactivateInputRipple: () => {
        if (input) {
          input.deactivateRipple();
        }
      },
      deregisterInteractionHandler: (evtType, handler) => {
        label.removeEventListener(evtType, handler);
      },
      registerInteractionHandler: (evtType, handler) => {
        label.addEventListener(evtType, handler);
      }
    });
    instance2.init();
    return () => {
      instance2.destroy();
    };
  });
  function getElement() {
    return element2;
  }
  function label_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      label = $$value;
      $$invalidate(7, label);
    });
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(6, element2);
    });
  }
  const SMUIGenericInput_mount_handler = (event) => $$invalidate(8, input = event.detail);
  const SMUIGenericInput_unmount_handler = () => $$invalidate(8, input = void 0);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use2 = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("align" in $$new_props)
      $$invalidate(2, align = $$new_props.align);
    if ("noWrap" in $$new_props)
      $$invalidate(3, noWrap = $$new_props.noWrap);
    if ("inputId" in $$new_props)
      $$invalidate(4, inputId = $$new_props.inputId);
    if ("label$use" in $$new_props)
      $$invalidate(5, label$use = $$new_props.label$use);
  };
  return [
    use2,
    className,
    align,
    noWrap,
    inputId,
    label$use,
    element2,
    label,
    input,
    forwardEvents,
    $$restProps,
    getElement,
    label_1_binding,
    div_binding,
    SMUIGenericInput_mount_handler,
    SMUIGenericInput_unmount_handler
  ];
}
class FormField extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance_1, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1,
      align: 2,
      noWrap: 3,
      inputId: 4,
      label$use: 5,
      getElement: 11
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"];
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(use2) {
    this.$$set({ use: use2 });
    flush();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className) {
    this.$$set({ class: className });
    flush();
  }
  get align() {
    return this.$$.ctx[2];
  }
  set align(align) {
    this.$$set({ align });
    flush();
  }
  get noWrap() {
    return this.$$.ctx[3];
  }
  set noWrap(noWrap) {
    this.$$set({ noWrap });
    flush();
  }
  get inputId() {
    return this.$$.ctx[4];
  }
  set inputId(inputId) {
    this.$$set({ inputId });
    flush();
  }
  get label$use() {
    return this.$$.ctx[5];
  }
  set label$use(label$use) {
    this.$$set({ label$use });
    flush();
  }
  get getElement() {
    return this.$$.ctx[11];
  }
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("search");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_leadingIcon_slot(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      class: "material-icons self-center pl-2 pr-2",
      slot: "leadingIcon",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_changes = {};
      if (dirty & 8192) {
        icon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      icon.$set(icon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let checkbox;
  let updating_checked;
  let current;
  function checkbox_checked_binding(value) {
    ctx[8](value);
  }
  let checkbox_props = {};
  if (ctx[0] !== void 0) {
    checkbox_props.checked = ctx[0];
  }
  checkbox = new Checkbox({ props: checkbox_props });
  binding_callbacks.push(() => bind$4(checkbox, "checked", checkbox_checked_binding));
  return {
    c() {
      create_component(checkbox.$$.fragment);
    },
    m(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const checkbox_changes = {};
      if (!updating_checked && dirty & 1) {
        updating_checked = true;
        checkbox_changes.checked = ctx2[0];
        add_flush_callback(() => updating_checked = false);
      }
      checkbox.$set(checkbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
}
function create_label_slot(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "Mit Untergruppen";
      attr(span, "slot", "label");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let textfield;
  let updating_input;
  let updating_value;
  let t;
  let div0;
  let formfield;
  let current;
  function textfield_input_binding(value) {
    ctx[5](value);
  }
  function textfield_value_binding(value) {
    ctx[6](value);
  }
  let textfield_props = {
    class: "w-full",
    variant: "filled",
    input$placeholder: "Search",
    $$slots: { leadingIcon: [create_leadingIcon_slot] },
    $$scope: { ctx }
  };
  if (ctx[2] !== void 0) {
    textfield_props.input = ctx[2];
  }
  if (ctx[1] !== void 0) {
    textfield_props.value = ctx[1];
  }
  textfield = new Textfield({ props: textfield_props });
  binding_callbacks.push(() => bind$4(textfield, "input", textfield_input_binding));
  binding_callbacks.push(() => bind$4(textfield, "value", textfield_value_binding));
  textfield.$on("input", ctx[7]);
  formfield = new FormField({
    props: {
      $$slots: {
        label: [create_label_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      create_component(textfield.$$.fragment);
      t = space();
      div0 = element("div");
      create_component(formfield.$$.fragment);
      this.c = noop$1;
      attr(div0, "class", "flex justify-end mt-2");
      attr(div1, "class", "flex flex-col");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      mount_component(textfield, div1, null);
      append(div1, t);
      append(div1, div0);
      mount_component(formfield, div0, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const textfield_changes = {};
      if (dirty & 8192) {
        textfield_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_input && dirty & 4) {
        updating_input = true;
        textfield_changes.input = ctx2[2];
        add_flush_callback(() => updating_input = false);
      }
      if (!updating_value && dirty & 2) {
        updating_value = true;
        textfield_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      textfield.$set(textfield_changes);
      const formfield_changes = {};
      if (dirty & 8193) {
        formfield_changes.$$scope = { dirty, ctx: ctx2 };
      }
      formfield.$set(formfield_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(textfield.$$.fragment, local);
      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textfield.$$.fragment, local);
      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(textfield);
      destroy_component(formfield);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { entityType } = $$props;
  let withSubGroups = false;
  let filter2 = "";
  let filterInput;
  let unsub = new Subject();
  var typeStore = EntitySelectTypeStore();
  typeStore.pipe(takeUntil(unsub)).subscribe((state2) => {
    $$invalidate(1, filter2 = state2.filter);
  });
  let globalStore = EntitySelectGlobalStore;
  globalStore.pipe(takeUntil(unsub)).subscribe((state2) => {
    $$invalidate(0, withSubGroups = state2.queryWithSubGroups);
  });
  function onInputFilter(event) {
    $$invalidate(1, filter2 = event.target.value);
    typeStore.update((state2) => ({ ...state2, filter: filter2 }));
  }
  function onSubGroupsToggled(withSubGroups2) {
    if (withSubGroups2 != EntitySelectGlobalStore.value.queryWithSubGroups) {
      EntitySelectGlobalStore.update((state2) => ({
        ...state2,
        queryWithSubGroups: withSubGroups2
      }));
    }
  }
  onMount(() => {
    if (filterInput) {
      const inputElement = filterInput.getElement();
      inputElement.focus();
      inputElement.select();
    }
  });
  onDestroy(() => {
    unsub.next();
    unsub.complete();
  });
  function textfield_input_binding(value) {
    filterInput = value;
    $$invalidate(2, filterInput);
  }
  function textfield_value_binding(value) {
    filter2 = value;
    $$invalidate(1, filter2);
  }
  const input_handler = (e) => onInputFilter(e);
  function checkbox_checked_binding(value) {
    withSubGroups = value;
    $$invalidate(0, withSubGroups);
  }
  $$self.$$set = ($$props2) => {
    if ("entityType" in $$props2)
      $$invalidate(4, entityType = $$props2.entityType);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      onSubGroupsToggled(withSubGroups);
    }
  };
  return [
    withSubGroups,
    filter2,
    filterInput,
    onInputFilter,
    entityType,
    textfield_input_binding,
    textfield_value_binding,
    input_handler,
    checkbox_checked_binding
  ];
}
class EntitySelectFilter extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance$1, create_fragment$1, safe_not_equal, { entityType: 4 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["entityType"];
  }
  get entityType() {
    return this.$$.ctx[4];
  }
  set entityType(entityType) {
    this.$$set({ entityType });
    flush();
  }
}
function create_else_block(ctx) {
  let div0;
  let entityselectsidebar;
  let t0;
  let div3;
  let div2;
  let entityselectfilter;
  let t1;
  let div1;
  let entityselecttable;
  let current;
  entityselectsidebar = new EntitySelectSidebar({
    props: {
      entityType: ctx[0],
      selectedTenant: ctx[1]
    }
  });
  entityselectsidebar.$on("changeTenant", ctx[8]);
  entityselectsidebar.$on("entitySelected", ctx[9]);
  entityselectfilter = new EntitySelectFilter({
    props: { entityType: ctx[0] }
  });
  entityselecttable = new EntitySelectTable({
    props: { entityType: ctx[0] }
  });
  entityselecttable.$on("entitySelected", ctx[10]);
  return {
    c() {
      div0 = element("div");
      create_component(entityselectsidebar.$$.fragment);
      t0 = space();
      div3 = element("div");
      div2 = element("div");
      create_component(entityselectfilter.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(entityselecttable.$$.fragment);
      attr(div0, "class", "flex-1 border-r border-slate-400 overflow-hidden");
      attr(div1, "class", "flex-1 overflow-hidden");
      attr(div2, "class", "flex flex-col h-full overflow-hidden");
      attr(div3, "class", "flex-[2] pl-4 pt-1 h-full overflow-hidden");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      mount_component(entityselectsidebar, div0, null);
      insert(target, t0, anchor);
      insert(target, div3, anchor);
      append(div3, div2);
      mount_component(entityselectfilter, div2, null);
      append(div2, t1);
      append(div2, div1);
      mount_component(entityselecttable, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      const entityselectsidebar_changes = {};
      if (dirty & 1)
        entityselectsidebar_changes.entityType = ctx2[0];
      if (dirty & 2)
        entityselectsidebar_changes.selectedTenant = ctx2[1];
      entityselectsidebar.$set(entityselectsidebar_changes);
      const entityselectfilter_changes = {};
      if (dirty & 1)
        entityselectfilter_changes.entityType = ctx2[0];
      entityselectfilter.$set(entityselectfilter_changes);
      const entityselecttable_changes = {};
      if (dirty & 1)
        entityselecttable_changes.entityType = ctx2[0];
      entityselecttable.$set(entityselecttable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(entityselectsidebar.$$.fragment, local);
      transition_in(entityselectfilter.$$.fragment, local);
      transition_in(entityselecttable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(entityselectsidebar.$$.fragment, local);
      transition_out(entityselectfilter.$$.fragment, local);
      transition_out(entityselecttable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_component(entityselectsidebar);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div3);
      destroy_component(entityselectfilter);
      destroy_component(entityselecttable);
    }
  };
}
function create_if_block(ctx) {
  let tenantselect;
  let current;
  tenantselect = new TenantSelect$1({
    props: { allowBack: !!ctx[1] }
  });
  tenantselect.$on("back", ctx[6]);
  tenantselect.$on("tenantSelected", ctx[7]);
  return {
    c() {
      create_component(tenantselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tenantselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tenantselect_changes = {};
      if (dirty & 2)
        tenantselect_changes.allowBack = !!ctx2[1];
      tenantselect.$set(tenantselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tenantselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tenantselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tenantselect, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.c = noop$1;
      attr(div, "class", "p-4 flex w-full h-full");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { entityType = EntityType.Signal } = $$props;
  let httpService = resolveService(EntityHttpService);
  let tenantHttpService = resolveService(TenantHttpService);
  let selectedTenant;
  let inTenantSelect = false;
  let dispatcher = createEventDispatcher();
  EntitySelectGlobalStore.subscribe((state2) => {
    if (state2.selectedTenant) {
      $$invalidate(2, inTenantSelect = false);
      getTenantView(state2.selectedTenant);
    } else {
      $$invalidate(2, inTenantSelect = true);
    }
  });
  async function getTenantView(id) {
    try {
      $$invalidate(1, selectedTenant = await tenantHttpService.getTenantViewById(id));
    } catch (error) {
      console.error(error);
      $$invalidate(2, inTenantSelect = true);
    }
  }
  async function onTenantSelected(tenant) {
    console.log("Tenant selected", tenant);
    const rootGroup = await httpService.getEntityById(EntityType.Group, tenant.Root);
    EntitySelectGlobalStore.update((state2) => ({ ...state2, selectedTenant: tenant.Id }));
    EntitySelectTypeStore().update((state2) => ({ ...state2, selectedGroup: rootGroup }));
  }
  function onTenantChange() {
    $$invalidate(2, inTenantSelect = true);
  }
  const back_handler = () => $$invalidate(2, inTenantSelect = false);
  const tenantSelected_handler = (event) => onTenantSelected(event.detail.tenant);
  const changeTenant_handler = () => onTenantChange();
  const entitySelected_handler = (e) => dispatcher("entitySelected", { selectedEntity: e.detail.selectedEntity });
  const entitySelected_handler_1 = (e) => dispatcher("entitySelected", { selectedEntity: e.detail.selectedEntity });
  $$self.$$set = ($$props2) => {
    if ("entityType" in $$props2)
      $$invalidate(0, entityType = $$props2.entityType);
  };
  return [
    entityType,
    selectedTenant,
    inTenantSelect,
    dispatcher,
    onTenantSelected,
    onTenantChange,
    back_handler,
    tenantSelected_handler,
    changeTenant_handler,
    entitySelected_handler,
    entitySelected_handler_1
  ];
}
class EntitySelect$1 extends SvelteElement {
  constructor(options) {
    super();
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance, create_fragment, safe_not_equal, { entityType: 0 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["entityType"];
  }
  get entityType() {
    return this.$$.ctx[0];
  }
  set entityType(entityType) {
    this.$$set({ entityType });
    flush();
  }
}
const TenantSelect = TenantSelect$1;
const EntitySelect = EntitySelect$1;
export { EntitySelect, TenantSelect };
