<script lang="ts">
import { EntityType } from 'audako-core';

import EntitySelect from './EntitySelect.svelte';
import { resolveService } from '../../utils/service-functions';
import { PopupRef, PopupService } from '../../shared/services/popup.service';

export let open: boolean = false;


export let entityType: EntityType = EntityType.Signal;
export let selectMultiple: boolean = false;

let popupService = resolveService<PopupService>('PopupService', new PopupService(document.body));

let dialogElement: HTMLElement;

let entitySelectComponent: EntitySelect;

let popupRef: PopupRef;

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
      entitySelectComponent.$destroy();
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
  console.log(event);
  if (event.key === 'Escape') {
    closeDialog();
  }
}


</script>

{#if open}
  <div
    on:keydown={onKeyDown}
    bind:this={dialogElement}
    class="bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4"
    on:click={(event) => event.stopPropagation()}>
    <!-- <div class="absolute right-2 top-1">
       <IconButton icon="close" on:click={() => closeDialog()}></IconButton>
    </div> -->
    <div class="h-full w-full">
      <EntitySelect {selectMultiple} {entityType} bind:this={entitySelectComponent}/>
    </div>
  </div>
{/if}
