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
  class="flex shrink-0 flex-col items-center justify-center rounded-full transition-colors {className}"
  class:cursor-pointer={!disabled}
  class:cursor-default={disabled}
  class:text-primary={variant === 'primary' && !disabled}
  class:text-ink-secondary={variant === 'neutral' && !disabled}
  class:text-ink-disabled={disabled}
  class:hover:bg-primary-tint={variant === 'primary' && !disabled}
  class:hover:bg-neutral-hover={variant === 'neutral' && !disabled}
  style="height: {absoluteSize}px; width: {absoluteSize}px;"
  onclick={(event) => onClickButton(event)}
>
  <span class="material-symbols-rounded select-none" style="font-size: {absoluteIconSize}px;">
    {#if children}{@render children()}{:else}{icon}{/if}
  </span>
</div>
