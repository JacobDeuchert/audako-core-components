<script lang="ts">
import { ConfigurationEntity, EntityType } from '@audako/core';
import { fade, scale } from 'svelte/transition';

import EntitySelect from './EntitySelect.svelte';

interface Props {
  // Driven by `setOpen` below as well as by the parent, so it must be bindable.
  open?: boolean;
  entityType?: EntityType;
  selectMultiple?: boolean;
  additionalFilter?: Record<string, any>;
  onselectedEntities?: (entities: Partial<ConfigurationEntity> | Partial<ConfigurationEntity>[]) => void;
  // Fired when the dialog closes without a selection (close button, Abbrechen,
  // Escape or a click on the backdrop).
  oncancel?: () => void;
}

let {
  open = $bindable(false),
  entityType = EntityType.Signal,
  selectMultiple = false,
  additionalFilter = null,
  onselectedEntities,
  oncancel,
}: Props = $props();

// Imperative handle for consumers that mount this component directly, since
// Svelte 5 removed the `$set` API used to drive the open/close animation.
export function setOpen(value: boolean): void {
  open = value;
}

function cancel(): void {
  if (!open) {
    return;
  }
  open = false;
  oncancel?.();
}

function onWindowKeyDown(event: KeyboardEvent) {
  if (open && event.key === 'Escape') {
    cancel();
  }
}
</script>

<svelte:window onkeydown={onWindowKeyDown} />

{#if open}
  <!-- The backdrop is a mouse-only affordance; Escape covers the keyboard. -->
  <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
    transition:fade={{ duration: 125 }}
    onclick={(event) => event.target === event.currentTarget && cancel()}
  >
    <div
      role="dialog"
      aria-modal="true"
      class="flex h-[660px] max-h-[90vh] w-[1280px] max-w-[95vw] overflow-hidden rounded-dialog bg-surface shadow-dialog"
      transition:scale={{ duration: 125, start: 0.95 }}
    >
      <div class="h-full w-full">
        <EntitySelect
          {selectMultiple}
          {entityType}
          {additionalFilter}
          onselectedEntities={(entities) => onselectedEntities?.(entities)}
          onclose={() => cancel()}
        />
      </div>
    </div>
  </div>
{/if}
