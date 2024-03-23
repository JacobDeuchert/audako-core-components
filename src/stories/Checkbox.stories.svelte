<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import Checkbox from '@/shared/components/checkbox/Checkbox.svelte';
import { tw as twDefault} from 'twind';
import { setContext } from 'svelte';

$: setContext('tw', twDefault);

</script>

<Meta title="Shared Components/Checkbox" component={Checkbox} />

<Story name="Default">
  <Checkbox readonly label="Test" />
</Story>
