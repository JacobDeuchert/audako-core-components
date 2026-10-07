// Component styles are scoped <style> blocks that Svelte injects into the root
// a component renders in, shadow roots included. What remains here is the
// shared base sheet (tokens, reset, icon font), adopted into each shadow root
// the components own.
import baseCss from './base.css?inline';

let sharedSheet: CSSStyleSheet | null = null;
let documentRulesHoisted = false;
let popupRoot: ShadowRoot | null = null;

function supportsConstructableSheets(): boolean {
  return typeof CSSStyleSheet !== 'undefined' && 'replaceSync' in CSSStyleSheet.prototype;
}

function getSharedSheet(): CSSStyleSheet | null {
  if (!supportsConstructableSheets()) {
    return null;
  }

  if (!sharedSheet) {
    sharedSheet = new CSSStyleSheet();
    sharedSheet.replaceSync(baseCss);
  }

  // One sheet instance shared by every shadow root: `adoptedStyleSheets` is
  // designed for this, so the CSS is parsed once regardless of element count.
  return sharedSheet;
}

// Browsers ignore `@font-face` inside shadow roots, so the icon font would
// never load. Font faces only register something globally, so they are copied
// to the document once.
function hoistDocumentRules(): void {
  if (documentRulesHoisted || typeof document === 'undefined') {
    return;
  }
  documentRulesHoisted = true;

  const collect = (list: CSSRuleList) =>
    Array.from(list)
      .filter((rule) => rule instanceof CSSFontFaceRule)
      .map((rule) => rule.cssText);

  let rules: string[];
  const source = getSharedSheet();
  if (source) {
    rules = collect(source.cssRules);
  } else {
    const parsed = document.createElement('style');
    parsed.textContent = baseCss;
    document.head.appendChild(parsed);
    rules = collect(parsed.sheet.cssRules);
    parsed.remove();
  }

  const style = document.createElement('style');
  style.setAttribute('data-audako-document-styles', '');
  style.textContent = rules.join('\n');
  // First in <head>: of several @font-face rules for one family the last
  // declared wins, so a host app's own declaration (e.g. a local copy of the
  // icon font for offline use) takes precedence over ours.
  document.head.prepend(style);
}

export function adoptShadowStyles(root: ShadowRoot | null | undefined): void {
  if (!root) {
    return;
  }

  hoistDocumentRules();

  const sheet = getSharedSheet();

  if (sheet) {
    if (!root.adoptedStyleSheets.includes(sheet)) {
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
    }
    return;
  }

  // Fallback for engines without constructable stylesheets.
  if (!root.querySelector('style[data-audako-styles]')) {
    const style = document.createElement('style');
    style.setAttribute('data-audako-styles', '');
    style.textContent = baseCss;
    root.prepend(style);
  }
}

/**
 * Copies the component styles Svelte injected into the root of `source` over
 * to `target`. Svelte only injects them where a component first renders, so
 * markup moved into another root (popups) would otherwise lose them.
 */
export function shareComponentStyles(source: Node, target: ShadowRoot): void {
  const root = source.getRootNode();
  const container = root instanceof ShadowRoot ? root : document.head;

  // Svelte names each injected <style> after the component's scoping hash.
  for (const style of Array.from(container.querySelectorAll<HTMLStyleElement>('style[id^="svelte-"]'))) {
    if (!target.getElementById(style.id)) {
      target.appendChild(style.cloneNode(true));
    }
  }
}

/**
 * Creates a host element on `document.body` with a styled shadow root, for
 * content rendered outside any custom element (dialogs, popups). Remove the
 * returned host to tear it down.
 */
export function createStyledShadowHost(name: string): { host: HTMLElement; root: ShadowRoot } {
  const host = document.createElement('div');
  host.setAttribute(name, '');
  const root = host.attachShadow({ mode: 'open' });
  adoptShadowStyles(root);
  document.body.appendChild(host);
  return { host, root };
}

/** Shared styled root that popups (select options, menus) are rendered into. */
export function getPopupRoot(): ShadowRoot {
  if (!popupRoot?.host.isConnected) {
    popupRoot = createStyledShadowHost('data-audako-popup-root').root;
  }
  return popupRoot;
}

/**
 * `extend` hook for `<svelte:options customElement={{ extend: withShadowStyles }} />`.
 * Adopts the base sheet into the shadow root as the element connects.
 */
export function withShadowStyles<T extends new (...args: any[]) => HTMLElement>(CustomElementClass: T): T {
  return class extends CustomElementClass {
    connectedCallback() {
      adoptShadowStyles(this.shadowRoot);
      // @ts-expect-error - the Svelte-generated base class defines this
      super.connectedCallback?.();
    }
  } as T;
}
