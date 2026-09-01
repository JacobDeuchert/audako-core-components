<script lang="ts">
import { onDestroy, setContext, type Snippet } from 'svelte';
import { writable } from 'svelte/store';

import type { Sort } from './table.types';

interface Props {
  startSort?: Sort;
  container$class?: string;
  onsort?: (sort: Sort) => void;
  children?: Snippet;
  pagination?: Snippet;
}

let { startSort = null, container$class = '', onsort, children, pagination }: Props = $props();

const sort = writable<Sort>(startSort);

setContext('audako:table:sort', sort);

const sortUnsubscribe = sort.subscribe((value) => {
  onsort?.(value);
});

onDestroy(sortUnsubscribe);
</script>

<div class="flex h-full flex-col">
  <!-- The scroll container carries the card border: the header row sticks to
       its top edge, so the rounded corner must clip the rows, not the page. -->
  <div class="relative w-full flex-1 overflow-auto rounded-dialog border border-line bg-surface {container$class}">
    {@render children?.()}
  </div>

  {@render pagination?.()}
</div>
