<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import Checkbox from '@/shared/components/checkbox/Checkbox.svelte';

const { Story } = defineMeta({
  title: 'Shared Components/Checkbox',
  component: Checkbox,
});
</script>

<script>
let bound = $state(false);
</script>

<Story name="Default" asChild>
  <Checkbox label="Test" />
</Story>

<Story name="Checked" asChild>
  <Checkbox label="Test" checked />
</Story>

<Story name="Indeterminate" asChild>
  <Checkbox label="Test" indeterminate />
</Story>

<Story name="Readonly" asChild>
  <Checkbox label="Test" readonly checked />
</Story>

<Story name="Bound" asChild>
  <div>
    <Checkbox label="Test" bind:checked={bound} />
    <div data-testid="bound-value">bound: {bound}</div>
  </div>
</Story>
