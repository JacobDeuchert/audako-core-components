// Tailwind is a build-time tool: its output lands in the document, which an
// open shadow root cannot see. So the compiled sheet is imported as a string
// and adopted into each custom element's shadow root instead.
//
// Tailwind 4 emits its theme variables on `:root, :host`, so the `--color-*`
// custom properties resolve correctly once the sheet is adopted.
import tailwindCss from './tailwind.css?inline';

let sharedSheet: CSSStyleSheet | null = null;

function getSharedSheet(): CSSStyleSheet | null {
  if (typeof CSSStyleSheet === 'undefined' || !('replaceSync' in CSSStyleSheet.prototype)) {
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

export function adoptShadowStyles(root: ShadowRoot | null | undefined): void {
  if (!root) {
    return;
  }

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
