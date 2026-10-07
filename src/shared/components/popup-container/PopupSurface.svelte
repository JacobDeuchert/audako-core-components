<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  children?: Snippet;
}

let { children }: Props = $props();
</script>

<!-- The card most popup content sits on. PopupContainer itself is invisible,
     so each popup decides whether to draw one. -->
<div class="popup-surface" part="popup">
  {@render children?.()}
</div>

<style>
.popup-surface {
  /* PopupService lowers the cap where the viewport has less room. */
  max-height: min(400px, var(--popup-max-height, 400px));
  overflow-x: hidden;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid var(--color-surface-border);
  border-radius: var(--radius-popup);
  background-color: var(--color-surface);
  box-shadow: var(--shadow-popup);
}
</style>
