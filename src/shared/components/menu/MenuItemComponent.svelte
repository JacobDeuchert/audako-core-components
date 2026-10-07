<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  icon?: string;
  label?: string;
  onclick?: (event: MouseEvent) => void;
  children?: Snippet;
}

let { icon = null, label = null, onclick, children }: Props = $props();
</script>

<div onclick={(e) => onclick?.(e)} class="menu-item hover-highlight" part="menu-item">
  {#if icon}
    <div class="icon-wrapper">
      <span class="material-symbols-rounded icon">
        {#if children}{@render children()}{:else}{icon}{/if}
      </span>
    </div>
  {/if}
  <div class="label">
    {label}
  </div>
</div>

<style>
.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.icon-wrapper {
  display: flex;
  margin-right: 8px;
}

.icon {
  z-index: 1;
}

.label {
  flex-grow: 1;
}

/* No !important: inside a shadow root it would beat a host's ::part() rule. */
.hover-highlight:hover {
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(19.2px);
}

.highlighted {
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(19.2px);
}


.material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
</style>
