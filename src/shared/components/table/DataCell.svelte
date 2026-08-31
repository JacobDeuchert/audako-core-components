<script lang="ts">
import { getContext, type Snippet } from 'svelte';

interface Props {
  container$class?: string;
  children?: Snippet;
}

let { container$class = '', children }: Props = $props();
</script>

<div class="border-t overflow-hidden {container$class}">
  {@render children?.()}
</div>
