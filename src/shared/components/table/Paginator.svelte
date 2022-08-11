<script lang="ts">
import { createEventDispatcher } from 'svelte';

import IconButton from '../icon-button/IconButton.svelte';
import Select from '../select/Select.svelte';
import SelectOption from '../select/SelectOption.svelte';
import type { PageEvent } from './table.types';

export let pageIndex: number;
export let pageSize: number;
export let totalCount: number;

let lastPageIndex: number;

$: lastPageIndex = calculateLastPageIndex(pageSize, totalCount);

$: {
  console.log('pageSize', pageSize);
}

export let pageSizeOptions = [10, 20, 50, 100];

let eventDispatcher = createEventDispatcher();

function changePage(direction: 1 | -1): void {
  pageIndex = pageIndex + direction;
  pubishPageEvent();
}

function goToFirstPage(): void {
  pageIndex = 0;
  pubishPageEvent();
}

function goToLastPage(): void {
  pageIndex = lastPageIndex;
  pubishPageEvent();
}

function changePageSize(size: number): void {
  console.log('changePageSize', size);
  pageSize = size;

  lastPageIndex = calculateLastPageIndex(pageSize, totalCount);

  pageIndex = Math.min(pageIndex, lastPageIndex);
  pubishPageEvent();
}

function calculateLastPageIndex(pageSize, totalCount): number {
  console.log()
  return Math.max(Math.floor(totalCount / pageSize) - 1, 0);
}

function pubishPageEvent(): void {
  eventDispatcher('changePage', {
    pageIndex: pageIndex,
    pageSize: pageSize,
  } as PageEvent);
}
</script>

<div class="flex w-full items-center justify-end pt-1">
  <div class="mr-1 text-xs text-gray-600">Items per page:</div>
  <div class="w-[50px]">
    <Select
      textfield$class="text-xs text-gray-600"
      suffixIcon$class="!top-[2px] !text-[20px]"
      bind:value={pageSize}
      on:valueChanged={(event) => changePageSize(event.detail)}
    >
      {#each pageSizeOptions as option}
        <SelectOption value={option}>{option}</SelectOption>
      {/each}
    </Select>
  </div>
  <div class="ml-4 text-xs mr-1 text-gray-600">
    {pageIndex * pageSize + 1}&nbsp;-&nbsp;{(pageIndex + 1) * pageSize}
  </div>
  <div class="text-xs mr-4 text-gray-600">of {totalCount}</div>

  <IconButton disabled={pageIndex === 0} on:click={() => goToFirstPage()}>first_page</IconButton>
  <IconButton disabled={pageIndex === 0} on:click={() => changePage(-1)}>navigate_before</IconButton>
  <IconButton disabled={pageIndex === lastPageIndex} on:click={() => changePage(1)}>navigate_next</IconButton>
  <IconButton disabled={pageIndex === lastPageIndex} on:click={() => goToLastPage()}>last_page</IconButton>
</div>
