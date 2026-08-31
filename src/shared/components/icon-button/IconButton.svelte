<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  onclick?: (event: MouseEvent) => void;
  children?: Snippet;
}

let { icon = null, size = 'medium', className = '', disabled = false, onclick, children }: Props = $props();

const absoluteSizes = { small: 24, medium: 40, large: 56 } as const;

const absoluteSize = $derived(absoluteSizes[size]);

let active = $state(false);
let activeTimestamp: number;

function onMouseDown(event: MouseEvent): void {
  if (disabled) {
    return;
  }
  active = true;
  activeTimestamp = event.timeStamp;
}

function onMouseUp(event: MouseEvent): void {
  const timeDiff = event.timeStamp - activeTimestamp;

  if (timeDiff < 300) {
    setTimeout(() => {
      active = false;
    }, 300 - timeDiff);
  } else {
    active = false;
  }
}

function onClickButton(mouseEvent: MouseEvent): void {
  if (disabled) {
    return;
  }

  onclick?.(mouseEvent);
}
</script>

<div
  class="container group {className}"
  style="height: {absoluteSize}px; width: {absoluteSize}px; {disabled ? 'cursor: default !important; opacity: 0.4;' : ''}"
  onmousedown={(event) => onMouseDown(event)}
  onmouseup={(event) => onMouseUp(event)}
  onmouseout={(event) => onMouseUp(event)}
  onclick={(event) => onClickButton(event)}
  onblur={() => {}}
>
  <div class="ripple bg-gray-200 bg-opacity-50" style={active ? 'width: 100% !important; height: 100% !important' : ''}></div>
  <span class="material-symbols-rounded z-[1] select-none">
    {#if children}{@render children()}{:else}{icon}{/if}
  </span>
</div>

<style>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 0;
  width: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: all 0.125s ease-in-out;
  z-index: 0;
}
</style>
