<script lang="ts">
import { ConfigurationEntity, EntityType } from 'audako-core';

import EntitySelect from './EntitySelect.svelte';
import { resolveService } from '../../utils/service-functions';
import { PopupRef, PopupService } from '../../shared/services/popup.service';
import { createEventDispatcher } from 'svelte';
import {tw as twDefault } from 'twind';

export let open: boolean = false;

export let entityType: EntityType = EntityType.Signal;
export let selectMultiple: boolean = false;
export let additionalFilter: Record<string, any> = null;
export let tw = twDefault;

let popupService = resolveService<PopupService>('PopupService', new PopupService(document.body));

let dialogElement: HTMLElement;

let entitySelectComponent: EntitySelect;

let popupRef: PopupRef;

const eventDispatcher = createEventDispatcher();

$: toggleDialog(open, dialogElement);

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
      console.log('dialog closed', entitySelectComponent);
      entitySelectComponent?.$destroy();
      popupRef = null;
    });
  } else {
    closeDialog();
  }
}

function closeDialog(): void {
  console.log('closeDialog');
  popupRef?.close();
}

function onKeyDown(event: KeyboardEvent) {
  console.log(event);
  if (event.key === 'Escape') {
    closeDialog();
  }
}

function onEntitiesSelected(event: CustomEvent<ConfigurationEntity[]>): void {
  eventDispatcher('selectedEntities', event.detail);
}


</script>


  <div
    on:keydown={onKeyDown}
    bind:this={dialogElement}
    class={tw`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`}
    on:click={(event) => event.stopPropagation()}>
    <!-- <div class={tw`absolute right-2 top-1`}>
       <IconButton icon="close" on:click={() => closeDialog()}></IconButton>
    </div> -->
    <div class={tw`h-full w-full`}>
      <EntitySelect {selectMultiple} {entityType} {additionalFilter} bind:this={entitySelectComponent} on:selectedEntities={(event) => onEntitiesSelected(event)}/>
    </div>
  </div>

