<script lang="ts">
import { ConfigurationEntity, EntityType } from 'audako-core';

import EntitySelect from './EntitySelect.svelte';
import { resolveService } from '../../utils/service-functions';
import { type PopupRef, PopupService } from '../../shared/services/popup.service';

interface Props {
  // Driven by `setOpen` below as well as by the parent, so it must be bindable.
  open?: boolean;
  entityType?: EntityType;
  selectMultiple?: boolean;
  additionalFilter?: Record<string, any>;
  onselectedEntities?: (entities: Partial<ConfigurationEntity> | Partial<ConfigurationEntity>[]) => void;
}

let {
  open = $bindable(false),
  entityType = EntityType.Signal,
  selectMultiple = false,
  additionalFilter = null,
  onselectedEntities,
}: Props = $props();

let popupService = resolveService<PopupService>('PopupService', new PopupService(document.body));

let dialogElement: HTMLElement = $state();

let popupRef: PopupRef;

$effect(() => {
  toggleDialog(open, dialogElement);
});

// Imperative handle for consumers that mount this component directly, since
// Svelte 5 removed the `$set` API used to drive the open/close animation.
export function setOpen(value: boolean): void {
  open = value;
}

function toggleDialog(open: boolean, dialogElement: HTMLElement) {
  if (open && !popupRef && dialogElement) {
    popupRef = popupService.openPopup('entity-select-dialog', dialogElement, {
      backdrop: true,
      closeOnClickOutside: true,
      positioning: 'center',
      inTransitionClassList: 'scale-100',
      inTransitionDuration: 125,
      outTransitionClassList: '!scale-50',
      outTransitionDuration: 125,
    });

    popupRef.afterClosed.then(() => {
      popupRef = null;
    });
  } else {
    closeDialog();
  }
}

function closeDialog(): void {
  popupRef?.close();
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeDialog();
  }
}
</script>

<div
  onkeydown={onKeyDown}
  bind:this={dialogElement}
  class="bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw] flex 2xl:w-[50vw] py-2 px-4"
  onclick={(event) => event.stopPropagation()}
>
  <div class="h-full w-full">
    <EntitySelect
      {selectMultiple}
      {entityType}
      {additionalFilter}
      onselectedEntities={(entities) => onselectedEntities?.(entities)}
    />
  </div>
</div>
