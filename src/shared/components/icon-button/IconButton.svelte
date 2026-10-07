<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  icon?: string;
  // Named sizes match the design's round buttons: inline 26px, dialog close
  // 36px, toolbar 40px. A number sets the diameter directly.
  size?: 'small' | 'medium' | 'large' | number;
  iconSize?: number;
  variant?: 'neutral' | 'primary';
  className?: string;
  title?: string;
  disabled?: boolean;
  onclick?: (event: MouseEvent) => void;
  children?: Snippet;
}

let {
  icon = null,
  size = 'medium',
  iconSize = null,
  variant = 'neutral',
  className = '',
  title = null,
  disabled = false,
  onclick,
  children,
}: Props = $props();

const namedSizes = { small: 26, medium: 36, large: 40 } as const;

const absoluteSize = $derived(typeof size === 'number' ? size : namedSizes[size]);
const absoluteIconSize = $derived(iconSize ?? Math.round(absoluteSize * 0.55));

function onClickButton(mouseEvent: MouseEvent): void {
  if (disabled) {
    return;
  }

  onclick?.(mouseEvent);
}
</script>

<!-- Hover feedback is background-only: the design asks that nothing moves or
     resizes on hover, so the previous ripple is gone. -->
<div
  {title}
  class="icon-button {className}"
  part="icon-button"
  class:primary={variant === 'primary'}
  class:disabled
  style="height: {absoluteSize}px; width: {absoluteSize}px;"
  onclick={(event) => onClickButton(event)}
>
  <span class="material-symbols-rounded" style="font-size: {absoluteIconSize}px;">
    {#if children}{@render children()}{:else}{icon}{/if}
  </span>
</div>

<style>
.icon-button {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: var(--color-ink-secondary);
  cursor: pointer;
  transition: var(--transition-colors);
}

.icon-button.primary {
  color: var(--color-primary);
}

.icon-button.disabled {
  color: var(--color-ink-disabled);
  cursor: default;
}

@media (hover: hover) {
  .icon-button:not(.disabled):hover {
    background-color: var(--color-neutral-hover);
  }

  .icon-button.primary:not(.disabled):hover {
    background-color: var(--color-primary-tint);
  }
}
</style>
