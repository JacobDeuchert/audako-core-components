<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import TenantSelect from '../components/tenant-select/TenantSelect.svelte';

const { Story } = defineMeta({
  title: 'Tenant Select',
  component: TenantSelect,
  parameters: { layout: 'fullscreen' },
});
</script>

<Story name="Small" asChild>
  <!-- Same as EntitySelect: the component fills its parent and scrolls its
       own list, so the story has to bound the height. -->
  <div style="height: 100vh">
    <TenantSelect />
  </div>
</Story>
