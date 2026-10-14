<svelte:options
  customElement={{
    shadow: 'open',
    extend: withShadowStyles,
    props: {
      entityType: { attribute: 'entitytype', type: 'String' },
      multiple: { attribute: 'multiple', type: 'Boolean' },
      filter: { attribute: 'filter', type: 'Object' },
      locale: { attribute: 'locale', type: 'String' },
      translations: { attribute: 'translations', type: 'Object' },
    },
  }}
/>

<script lang="ts">
import { EntityType } from '@audako/core';
import EntitySelect from './EntitySelect.svelte';
import { withShadowStyles } from '../../styles/shadow-styles';
import { provideI18n } from '../../i18n/i18n.svelte';
import type { TranslationOverrides } from '../../i18n/types';

interface Props {
  entityType?: EntityType;
  multiple?: boolean;
  filter?: Record<string, any>;
  /** Overrides the global language for this element. */
  locale?: string;
  /** Overrides single messages for this element. */
  translations?: TranslationOverrides;
}

let { entityType = undefined, multiple = false, filter = undefined, locale = undefined, translations = undefined }: Props = $props();

provideI18n({ locale: () => locale, translations: () => translations });

const isValidEntityType = $derived(Object.values(EntityType).includes(entityType as EntityType));

function forward(name: string, detail: unknown) {
  $host().dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}
</script>

<div class="entity-select">
  {#if isValidEntityType}
    <EntitySelect
      {entityType}
      selectMultiple={multiple}
      additionalFilter={filter ?? {}}
      onselectedEntities={(entities) => forward('selected', entities)}
      onclose={() => forward('close', null)}
    />
  {/if}
</div>

<style>
.entity-select {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
