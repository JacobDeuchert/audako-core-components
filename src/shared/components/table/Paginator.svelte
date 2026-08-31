<script lang="ts">
import { getContext } from 'svelte';

import IconButton from '../icon-button/IconButton.svelte';
import Select from '../select/Select.svelte';
import SelectOption from '../select/SelectOption.svelte';
import type { PageEvent } from './table.types';

interface Props {
  // Mutated internally when the user pages, so they must be bindable.
  pageIndex?: number;
  pageSize?: number;
  totalCount: number;
  pageSizeOptions?: number[];
  onchangePage?: (event: PageEvent) => void;
}

let {
  pageIndex = $bindable(0),
  pageSize = $bindable(10),
  totalCount,
  pageSizeOptions = [10, 20, 50, 100],
  onchangePage,
}: Props = $props();

const lastPageIndex = $derived(Math.max(Math.ceil(totalCount / pageSize) - 1, 0));

function changePage(direction: 1 | -1): void {
  pageIndex = pageIndex + direction;
  publishPageEvent();
}

function goToFirstPage(): void {
  pageIndex = 0;
  publishPageEvent();
}

function goToLastPage(): void {
  pageIndex = lastPageIndex;
  publishPageEvent();
}

function changePageSize(size: number): void {
  pageSize = size;
  // lastPageIndex is derived from pageSize, so it is already up to date here.
  pageIndex = Math.min(pageIndex, lastPageIndex);
  publishPageEvent();
}

function publishPageEvent(): void {
  onchangePage?.({
    pageIndex: pageIndex,
    pageSize: pageSize,
  });
}
</script>

<div class="flex w-full items-center justify-end pt-1">
  <div class="mr-1 text-xs text-gray-600">Items per page:</div>
  <div class="w-[50px]">
    <Select
      textfield$class="text-xs text-gray-600"
      suffixIcon$class="!top-[2px] !text-[20px]"
      bind:value={pageSize}
      onvalueChanged={(value) => changePageSize(value)}
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

  <IconButton disabled={pageIndex === 0} onclick={() => goToFirstPage()}>first_page</IconButton>
  <IconButton disabled={pageIndex === 0} onclick={() => changePage(-1)}>navigate_before</IconButton>
  <IconButton disabled={pageIndex === lastPageIndex} onclick={() => changePage(1)}>navigate_next</IconButton>
  <IconButton disabled={pageIndex === lastPageIndex} onclick={() => goToLastPage()}>last_page</IconButton>
</div>
