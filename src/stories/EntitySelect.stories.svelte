<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import EntitySelect from '../components/entity-select/EntitySelect.svelte';

const { Story } = defineMeta({
  title: 'Entity Select',
  component: EntitySelect,
  // `fullscreen` drops the canvas padding, so 100vh really is the whole frame.
  parameters: { layout: 'fullscreen' },
});
</script>

<Story name="Small" asChild>
  <!-- EntitySelect fills its parent (h-full) and scrolls internally, so the
       story has to supply a bounded height the way the dialog does. Without
       one it grows to its content and the canvas scrolls instead. -->
  <div style="height: 100vh">
    <EntitySelect selectMultiple />
  </div>
</Story>
