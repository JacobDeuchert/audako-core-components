import type { de } from './de';

/** A message that depends on the `count` param; keys are Intl.PluralRules categories. */
export type PluralMessage = { one: string; other: string } & Partial<Record<Intl.LDMLPluralRule, string>>;

export type Translations = typeof de;

/** Any subset of a bundle, used to add a language or override single messages. */
export type TranslationOverrides = DeepPartial<Translations>;

type DeepPartial<T> = { [K in keyof T]?: T[K] extends string | PluralMessage ? T[K] : DeepPartial<T[K]> };

type Paths<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends string | PluralMessage ? `${Prefix}${K}` : Paths<T[K], `${Prefix}${K}.`>;
}[keyof T & string];

/** Dotted path of a message, e.g. `tenantSelect.title`. */
export type TranslationKey = Paths<Translations>;

export type TranslationParams = Record<string, string | number>;
