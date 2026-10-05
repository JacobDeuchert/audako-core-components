// Tailwind is a build-time tool: its output lands in the document, which an
// open shadow root cannot see. So the compiled sheet is imported as a string
// and adopted into each custom element's shadow root instead.
//
// Tailwind 4 emits its theme variables on `:root, :host`, so the `--color-*`
// custom properties resolve correctly once the sheet is adopted.
import tailwindCss from './tailwind.css?inline';

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
    sharedSheet.replaceSync(tailwindCss);
  }

  // One sheet instance shared by every shadow root: `adoptedStyleSheets` is
  // designed for this, so the CSS is parsed once regardless of element count.
  return sharedSheet;
}

// Browsers ignore `@property` and `@font-face` inside shadow roots. Tailwind 4
// relies on `@property` for the initial values of its `--tw-*` variables, so
// without them every border, shadow, ring and transform utility resolves to an
// invalid value, and the icon font never loads. Both kinds of rule only
// register something globally, so they are copied to the document once.
function hoistDocumentRules(): void {
  if (documentRulesHoisted || typeof document === 'undefined') {
    return;
  }
  documentRulesHoisted = true;

  const rules: string[] = [];
  const collect = (list: CSSRuleList) => {
    for (const rule of Array.from(list)) {
      if (rule instanceof CSSFontFaceRule || rule.cssText.startsWith('@property')) {
        rules.push(rule.cssText);
      } else if ('cssRules' in rule) {
        collect((rule as CSSGroupingRule).cssRules);
      }
    }
  };

  const source = getSharedSheet();
  if (source) {
    collect(source.cssRules);
  } else {
    const parsed = document.createElement('style');
    parsed.textContent = tailwindCss;
    document.head.appendChild(parsed);
    collect(parsed.sheet.cssRules);
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
    style.textContent = tailwindCss;
    root.prepend(style);
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
 * Adopts the Tailwind sheet into the shadow root as the element connects.
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
