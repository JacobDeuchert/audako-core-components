<script lang="ts">
import type { Subject } from 'rxjs';

    
    import { getContext, onMount } from 'svelte';
    import type { Writable } from 'svelte/store';
import Checkbox from '../Checkbox/Checkbox.svelte';
  
    export let value = null;
  
    let isSelected = false;
    let currentValue: any | any[] = null;
    let currentDisplayedValue: string | string[] = null;
    let labelElement: HTMLSpanElement;
    let optionLabel: string;
  
    const multiple = getContext<boolean>('audako:select:multiple');
    const closeMenu = getContext<() => void>('audako:select:close');
    const valueStore = getContext<Writable<any | any[]>>('audako:select:value');
    const valueChanged = getContext<Subject<any | any[]>>('audako:select:value:changed');
    const displayValueStore = getContext<Writable<string | string[]>>('audako:select:displayValue');
  
    onMount(() => {
  
      optionLabel = labelElement.innerText?.trim();
  
      displayValueStore.subscribe((value) => {
        currentDisplayedValue = value;
      });
      
      valueStore.subscribe((selectedValue) => {
        currentValue = selectedValue;
  
        if (multiple) {
          isSelected = selectedValue.includes(value);
        } else {
          isSelected = selectedValue === value;
        }
      
        setDisplayValue();
      });
    });
  
    function onClickOption(e: MouseEvent): void {
      e.preventDefault();
      e.stopPropagation();

      let newValue = null;
  
      if (multiple) {
        if (isSelected) {
          newValue = currentValue.filter((v) => v !== value)
        } else {
          newValue = [...currentValue, value];
        }
      } else {
        newValue = value;
        closeMenu();
      }

      valueStore.set(newValue);
      valueChanged.next(newValue);
    }
  
    function setDisplayValue() {
      if (multiple) {
        const displayValue = currentDisplayedValue as string[];
        if (isSelected && !displayValue.includes(optionLabel)) {
          displayValueStore.set([...displayValue, optionLabel]);
        } else if (!isSelected && displayValue.includes(optionLabel)) {
          displayValueStore.set(displayValue.filter((v) => v !== optionLabel));
        }
      } else {
        if (isSelected) {
          displayValueStore.set(optionLabel);
        }
      }
    }
  </script>
  
  <div class="flex items-center {multiple ? '' : 'pl-3 pb-2 pt-2'} pr-3 cursor-pointer hover-highlight relative rounded-md {isSelected && !multiple ? 'highlighted' : ''}" on:click={onClickOption}>
    {#if isSelected && !multiple}
    <div class="h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]" />
    {/if}
    {#if multiple}
      <Checkbox bind:checked={isSelected} />
    {/if}
    <span bind:this={labelElement}>
      <slot />
    </span>
  </div>
  