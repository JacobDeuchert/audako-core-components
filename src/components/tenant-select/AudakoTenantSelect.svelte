<svelte:options
  customElement={{
    shadow: 'open',
    extend: withShadowStyles,
    props: {
      allowBack: { attribute: 'allowback', type: 'Boolean' },
    },
  }}
/>

<script lang="ts">
import TenantSelect from './TenantSelect.svelte';
import { withShadowStyles } from '../../styles/shadow-styles';

interface Props {
  allowBack?: boolean;
}

let { allowBack = false }: Props = $props();

function forward(name: string, detail: unknown) {
  $host().dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}
</script>

<TenantSelect
  {allowBack}
  ontenantSelected={(tenant) => forward('tenantselected', { tenant })}
  onback={() => forward('back', null)}
/>
