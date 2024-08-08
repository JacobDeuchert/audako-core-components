<script lang="ts">
import { createEventDispatcher, getContext } from 'svelte';
import type { TWCallable } from 'twind';

import IconButton from '../icon-button/IconButton.svelte';
import Select from '../select/Select.svelte';
import SelectOption from '../select/SelectOption.svelte';
import type { PageEvent } from './table.types';

export let pageIndex: number;
export let pageSize: number;
export let totalCount: number;

let tw = getContext<TWCallable>('tw');

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
  return Math.max(Math.ceil(totalCount / pageSize) - 1, 0);
}

function pubishPageEvent(): void {
  eventDispatcher('changePage', {
    pageIndex: pageIndex,
    pageSize: pageSize,
  } as PageEvent);
}
</script>

<div class={tw`flex w-full items-center justify-end pt-1`}>
  <div class={tw`mr-1 text-xs text-gray-600`}>Items per page:</div>
  <div class={tw`w-[50px]`}>
    <Select
      tw={tw}
      textfield$class={tw`text-xs text-gray-600`}
      suffixIcon$class={tw`!top-[2px] !text-[20px]`}
      bind:value={pageSize}
      on:valueChanged={(event) => changePageSize(event.detail)}
    >
      {#each pageSizeOptions as option}
        <SelectOption value={option}>{option}</SelectOption>
      {/each}
    </Select>
  </div>
  <div class={tw`ml-4 text-xs mr-1 text-gray-600`}>
    {pageIndex * pageSize + 1}&nbsp;-&nbsp;{(pageIndex + 1) * pageSize}
  </div>
  <div class={tw`text-xs mr-4 text-gray-600`}>of {totalCount}</div>

  <IconButton disabled={pageIndex === 0} on:click={() => goToFirstPage()}>first_page</IconButton>
  <IconButton disabled={pageIndex === 0} on:click={() => changePage(-1)}>navigate_before</IconButton>
  <IconButton disabled={pageIndex === lastPageIndex} on:click={() => changePage(1)}>navigate_next</IconButton>
  <IconButton disabled={pageIndex === lastPageIndex} on:click={() => goToLastPage()}>last_page</IconButton>
</div>
