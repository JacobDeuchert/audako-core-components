<script lang="ts">
import { getContext } from 'svelte';
import type { TWCallable } from 'twind';


  let tw = getContext<TWCallable>('tw');

  export let container$class: string = '';
</script>

<div class={tw`border-t overflow-hidden ${container$class}`}>
  <slot />
</div>
