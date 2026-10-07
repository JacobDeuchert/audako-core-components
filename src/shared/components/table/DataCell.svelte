<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  container$class?: string;
  children?: Snippet;
}

let { container$class = '', children }: Props = $props();
</script>

<!-- The row draws the separator; the cell only clips its content. -->
<div class="data-cell {container$class}">
  {@render children?.()}
</div>

<style>
.data-cell {
  overflow: hidden;
}
</style>
