import { type ConfigurationEntity, type Signal } from '@audako/core';
import { de } from '../../i18n/de';
import type { I18n } from '../../i18n/i18n.svelte';
import type { TranslationKey } from '../../i18n/types';

export function formatSignalType(entity: Partial<ConfigurationEntity>, i18n: I18n): string {
  const type = (entity as Partial<Signal>)?.Type?.Value;
  if (!type) {
    return '';
  }
  return type in de.signalTypes ? i18n.t(`signalTypes.${type}` as TranslationKey) : type;
}
