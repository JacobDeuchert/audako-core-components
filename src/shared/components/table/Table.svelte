<script lang="ts">
import { getContext, onDestroy, setContext, type Snippet } from 'svelte';
import { writable } from 'svelte/store';

import type { Sort } from './table.types';

interface Props {
  startSort?: Sort;
  onsort?: (sort: Sort) => void;
  children?: Snippet;
  pagination?: Snippet;
}

let { startSort = null, onsort, children, pagination }: Props = $props();

// Layout utilities must go through twind: nothing in this project emits CSS
// for bare Tailwind class names.

const sort = writable<Sort>(startSort);

setContext('audako:table:sort', sort);

const sortUnsubscribe = sort.subscribe((value) => {
  onsort?.(value);
});

onDestroy(sortUnsubscribe);
</script>

<div class="flex flex-col h-full">
  <div class="w-full overflow-auto flex-1">
    {@render children?.()}
  </div>

  {@render pagination?.()}
</div>
