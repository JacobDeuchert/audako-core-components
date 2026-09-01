<script lang="ts">
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
  pageSize = $bindable(25),
  totalCount,
  pageSizeOptions = [25, 50, 100],
  onchangePage,
}: Props = $props();

const lastPageIndex = $derived(Math.max(Math.ceil(totalCount / pageSize) - 1, 0));
const firstShown = $derived(totalCount === 0 ? 0 : pageIndex * pageSize + 1);
const lastShown = $derived(Math.min((pageIndex + 1) * pageSize, totalCount));

const onFirstPage = $derived(pageIndex === 0);
const onLastPage = $derived(pageIndex >= lastPageIndex);

function changePage(direction: 1 | -1): void {
  pageIndex = pageIndex + direction;
  publishPageEvent();
}

function goToPage(index: number): void {
  pageIndex = index;
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

<div class="flex h-[44px] w-full items-center justify-end gap-[10px] text-[13px] text-ink-secondary">
  <div>Zeilen</div>

  <div class="w-[70px]">
    <Select
      container$class="!h-[30px]"
      textfield$class="text-[13px] text-ink-secondary"
      bind:value={pageSize}
      onvalueChanged={(value) => changePageSize(value)}
    >
      {#each pageSizeOptions as option}
        <SelectOption value={option}>{option}</SelectOption>
      {/each}
    </Select>
  </div>

  <div class="whitespace-nowrap">{firstShown}&nbsp;-&nbsp;{lastShown} / {totalCount}</div>

  <!-- One bordered group with hairline dividers, as in the production table. -->
  <div class="flex h-[30px] items-stretch overflow-hidden rounded-control border border-line">
    {#snippet pagerButton(icon: string, disabled: boolean, onclick: () => void)}
      <div
        class="flex w-[34px] items-center justify-center border-l border-row-line first:border-l-0 transition-colors"
        class:cursor-pointer={!disabled}
        class:cursor-default={disabled}
        class:text-ink-secondary={!disabled}
        class:text-ink-disabled={disabled}
        class:hover:bg-neutral-hover={!disabled}
        onclick={() => !disabled && onclick()}
      >
        <span class="material-symbols-rounded select-none text-[18px]">{icon}</span>
      </div>
    {/snippet}

    {@render pagerButton('first_page', onFirstPage, () => goToPage(0))}
    {@render pagerButton('navigate_before', onFirstPage, () => changePage(-1))}
    {@render pagerButton('navigate_next', onLastPage, () => changePage(1))}
    {@render pagerButton('last_page', onLastPage, () => goToPage(lastPageIndex))}
  </div>
</div>
