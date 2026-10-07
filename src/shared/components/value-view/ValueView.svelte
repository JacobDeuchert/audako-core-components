<script lang="ts">
import Led from './Led.svelte';
import type { DateValuePair, ValueViewSettings } from './value-view.types';

interface Props {
  settings?: ValueViewSettings;
  value?: DateValuePair;
  ledSize?: string;
}

let { settings = null, value = null, ledSize = '14px' }: Props = $props();

// Matches the UI's adk-value-view: a value that is neither a number nor 0 is
// "no value", which the UI flags with a warning icon.
const hasValue = $derived(value != null && value.value !== null && value.value !== undefined && value.value !== 'null' && value.value !== '');

const numericValue = $derived(hasValue ? Number(value.value) : NaN);

const timestampTitle = $derived(
  value?.timestamp ? new Date(value.timestamp).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'medium' }) : null
);

const numberText = $derived.by(() => {
  if (!Number.isFinite(numericValue)) {
    return String(value?.value ?? '');
  }

  // Angular's `number: '1.d-d'` pins both ends, so the decimals never vary.
  const decimals = settings?.decimalPlaces ?? 3;

  return numericValue.toLocaleString('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
});

const ledIsOn = $derived(Number.isFinite(numericValue) && numericValue >= 1);
</script>

{#if settings && value}
  {#if !hasValue}
    <span class="material-symbols-rounded no-value" title="Keine Werte verfügbar">warning</span>
  {:else if settings.viewType === 'led'}
    <Led
      size={ledSize}
      color={ledIsOn ? settings.ledOnColor : settings.ledOffColor}
      title={(ledIsOn ? settings.ledOnCaption : settings.ledOffCaption) || timestampTitle}
    />
  {:else if settings.viewType === 'number'}
    <span class="value" title={timestampTitle}>
      {numberText}{settings.unit ? ` ${settings.unit}` : ''}
    </span>
  {:else}
    <span class="value" title={timestampTitle}>{value.value}</span>
  {/if}
{/if}

<style>
.no-value {
  color: var(--color-danger);
}

.value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
