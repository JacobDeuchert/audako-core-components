<script lang="ts">
import { createEventDispatcher, onDestroy, setContext } from 'svelte';
import { writable } from 'svelte/store';

import type { Sort } from './table.types';

export let startSort: Sort = null;

let eventDispatcher = createEventDispatcher();

let sort = writable<Sort>(startSort);

setContext('audako:table:sort', sort);

let sortUnsubscribe = sort.subscribe((sort) => {
  eventDispatcher('sort', sort);
});

onDestroy(() => {
  sortUnsubscribe();
});
</script>

<div class="flex flex-col h-full">
  <div class="w-full overflow-auto flex-1">
    <slot />
  </div>

  <slot name="pagination" />
</div>
