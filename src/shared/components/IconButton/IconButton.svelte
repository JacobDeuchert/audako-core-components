<script lang="ts">
  import {createEventDispatcher} from 'svelte';


  export let icon: string = null;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let className: string = '';
  export let disabled: boolean = false;

  let absoluteSize: number;
  let iconFontSize: number;

  let active: boolean;
  let activeTimestamp: number;



  $: {
    switch (size) {
      case 'small':
        absoluteSize = 24;
        iconFontSize = 20;
        break;
      case 'medium':
        absoluteSize = 40;
        iconFontSize = 24;
        break;
      case 'large':
        absoluteSize = 56;
        iconFontSize = 30;
        break;
    }
  }

  let eventDispatcher = createEventDispatcher();

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

    eventDispatcher('click', event);
  }


</script>

<div
  class="container group {className}"
  style="height: {absoluteSize}px; width: {absoluteSize}px; {disabled ? 'cursor: default !important; opacity: 0.4;' : ''}"
  on:mousedown={(event) => onMouseDown(event)}
  on:mouseup={(event) => onMouseUp(event)}
  on:mouseout={(event) => onMouseUp(event)}
  on:click={(event) => onClickButton(event)}
  on:blur={(event) => {}}
>
  <div class="ripple bg-gray-200 bg-opacity-50" style="{active ? 'width: 100% !important; height: 100% !important' : ''}"/>
  <span class="material-symbols-rounded z-[1] select-none" style="font-size: {iconFontSize}px">
    <slot>{icon}</slot>
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
