import { getContext, setContext } from 'svelte';
import { de } from './de';
import { en } from './en';
import type { PluralMessage, TranslationKey, TranslationOverrides, TranslationParams } from './types';

/** Used when neither the element, the host nor the document sets a language. */
export const DEFAULT_LOCALE = 'de';
/** Used for languages without a bundle of their own (fr, es, …). */
export const FALLBACK_LOCALE = 'en';

// Bundle keys are lower case, as language tags are case-insensitive.
let bundles = $state.raw<Record<string, TranslationOverrides>>({ de, en });

const settings = $state<{ locale: string | null; documentLocale: string | null }>({
  locale: null,
  documentLocale: readDocumentLocale(),
});

// Hosts that switch the language through `<html lang>` need no extra call.
if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
  new MutationObserver(() => (settings.documentLocale = readDocumentLocale())).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
  });
}

function readDocumentLocale(): string | null {
  return typeof document === 'undefined' ? null : document.documentElement.lang || null;
}

/** Sets the language of all components that have no `locale` of their own; null falls back to `<html lang>`. */
export function setLocale(locale: string | null): void {
  settings.locale = locale || null;
}

/** The language components without a `locale` of their own use. */
export function getLocale(): string {
  return canonicalLocale(settings.locale || settings.documentLocale || DEFAULT_LOCALE);
}

/** Adds a language, or overrides single messages of one. Missing messages fall back to English. */
export function registerTranslations(locale: string, translations: TranslationOverrides): void {
  const key = canonicalLocale(locale).toLowerCase();
  bundles = { ...bundles, [key]: deepMerge(bundles[key] ?? {}, translations) };
}

/**
 * Looks a message up in the overrides, then in the bundles for the tag, its base language, English and
 * German — so `de-AT` falls back to `de`, and `fr` to `en`. An unknown key comes back as is.
 */
export function translate(locale: string, key: TranslationKey, params?: TranslationParams, overrides: TranslationOverrides[] = []): string {
  let message: string | PluralMessage | undefined;
  for (const source of [...overrides, ...bundleChain(locale)]) {
    message = lookup(source, key);
    if (message !== undefined) {
      break;
    }
  }

  if (message === undefined) {
    return key;
  }

  const text = typeof message === 'string' ? message : (message[pluralRules(locale).select(Number(params?.count ?? 0))] ?? message.other);

  return params ? text.replace(/\{(\w+)\}/g, (match, name) => (name in params ? String(params[name]) : match)) : text;
}

export interface I18n {
  /** The resolved language tag, also meant for Intl formatting. */
  readonly locale: string;
  t(key: TranslationKey, params?: TranslationParams): string;
}

interface ScopedI18n extends I18n {
  /** Own overrides first, then the ones of the enclosing scopes. */
  readonly overrides: TranslationOverrides[];
}

export interface I18nSource {
  locale?: () => string | null | undefined;
  translations?: () => TranslationOverrides | null | undefined;
}

const I18N_CONTEXT = Symbol('audako-i18n');

function createI18n(source: I18nSource, parent: ScopedI18n | null): ScopedI18n {
  const locale = () => canonicalLocale(source.locale?.() || parent?.locale || getLocale());
  const overrides = () => {
    const inherited = parent?.overrides ?? [];
    const own = source.translations?.();
    return own ? [own, ...inherited] : inherited;
  };

  return {
    get locale() {
      return locale();
    },
    get overrides() {
      return overrides();
    },
    t: (key, params) => translate(locale(), key, params, overrides()),
  };
}

const globalI18n = createI18n({}, null);

/**
 * Scopes language and overrides for the calling component and its children; unset values fall back to
 * the enclosing scope and then to the global language. Call during component initialisation.
 */
export function provideI18n(source: I18nSource): I18n {
  const i18n = createI18n(source, getContext<ScopedI18n>(I18N_CONTEXT) ?? null);
  setContext(I18N_CONTEXT, i18n);
  return i18n;
}

/** The nearest scope set up by `provideI18n`, or the global language. Call during component initialisation. */
export function useI18n(): I18n {
  return getContext<ScopedI18n>(I18N_CONTEXT) ?? globalI18n;
}

function bundleChain(locale: string): TranslationOverrides[] {
  const tag = locale.toLowerCase();
  const base = tag.split('-')[0];
  const chain = [bundles[tag], bundles[base], bundles[FALLBACK_LOCALE], bundles[DEFAULT_LOCALE]];
  return [...new Set(chain.filter((bundle) => bundle != null))];
}

function lookup(source: unknown, key: string): string | PluralMessage | undefined {
  let node: any = source;
  for (const part of key.split('.')) {
    node = node?.[part];
  }
  return typeof node === 'string' || (typeof node === 'object' && node != null && typeof node.other === 'string') ? node : undefined;
}

// Hosts may pass `en_US` or anything else; Intl only takes valid tags.
function canonicalLocale(tag: string): string {
  try {
    return Intl.getCanonicalLocales(tag.replace(/_/g, '-'))[0] ?? DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

const pluralRulesCache: Record<string, Intl.PluralRules> = {};

function pluralRules(locale: string): Intl.PluralRules {
  return (pluralRulesCache[locale] ??= new Intl.PluralRules(locale));
}

function deepMerge<T extends object>(target: T, source: T): T {
  const result: any = { ...target };
  for (const [key, value] of Object.entries(source ?? {})) {
    result[key] = typeof value === 'object' && value != null && typeof result[key] === 'object' ? deepMerge(result[key], value) : value;
  }
  return result;
}
