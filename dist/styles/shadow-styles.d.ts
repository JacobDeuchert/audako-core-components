export declare function adoptShadowStyles(root: ShadowRoot | null | undefined): void;
/**
 * `extend` hook for `<svelte:options customElement={{ extend: withShadowStyles }} />`.
 * Adopts the Tailwind sheet into the shadow root as the element connects.
 */
export declare function withShadowStyles<T extends new (...args: any[]) => HTMLElement>(CustomElementClass: T): T;
