<svelte:options
  customElement={{
    shadow: 'open',
    extend: withShadowStyles,
    props: {
      allowBack: { attribute: 'allowback', type: 'Boolean' },
      locale: { attribute: 'locale', type: 'String' },
      translations: { attribute: 'translations', type: 'Object' },
    },
  }}
/>

<script lang="ts">
import TenantSelect from './TenantSelect.svelte';
import { withShadowStyles } from '../../styles/shadow-styles';
import { provideI18n } from '../../i18n/i18n.svelte';
import type { TranslationOverrides } from '../../i18n/types';

interface Props {
  allowBack?: boolean;
  /** Overrides the global language for this element. */
  locale?: string;
  /** Overrides single messages for this element. */
  translations?: TranslationOverrides;
}

let { allowBack = false, locale = undefined, translations = undefined }: Props = $props();

provideI18n({ locale: () => locale, translations: () => translations });

function forward(name: string, detail: unknown) {
  $host().dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}
</script>

<TenantSelect
  {allowBack}
  ontenantSelected={(tenant) => forward('tenantselected', { tenant })}
  onback={() => forward('back', null)}
/>
