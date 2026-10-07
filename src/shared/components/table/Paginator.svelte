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

<div class="paginator">
  <div>Zeilen</div>

  <div class="page-size">
    <Select
      container$class="page-size-select"
      textfield$class="page-size-input"
      bind:value={pageSize}
      onvalueChanged={(value) => changePageSize(value)}
    >
      {#each pageSizeOptions as option}
        <SelectOption value={option}>{option}</SelectOption>
      {/each}
    </Select>
  </div>

  <div class="range">{firstShown}&nbsp;-&nbsp;{lastShown} / {totalCount}</div>

  <!-- One bordered group with hairline dividers, as in the production table. -->
  <div class="pager">
    {#snippet pagerButton(icon: string, disabled: boolean, onclick: () => void)}
      <div class="pager-button" class:disabled onclick={() => !disabled && onclick()}>
        <span class="material-symbols-rounded">{icon}</span>
      </div>
    {/snippet}

    {@render pagerButton('first_page', onFirstPage, () => goToPage(0))}
    {@render pagerButton('navigate_before', onFirstPage, () => changePage(-1))}
    {@render pagerButton('navigate_next', onLastPage, () => changePage(1))}
    {@render pagerButton('last_page', onLastPage, () => goToPage(lastPageIndex))}
  </div>
</div>

<style>
.paginator {
  display: flex;
  height: 44px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: 13px;
  color: var(--color-ink-secondary);
}

.page-size {
  width: 70px;
}

.page-size :global(.page-size-select) {
  height: 30px;
}

.page-size :global(.page-size-input) {
  font-size: 13px;
  color: var(--color-ink-secondary);
}

.range {
  white-space: nowrap;
}

.pager {
  display: flex;
  height: 30px;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
}

.pager-button {
  display: flex;
  width: 34px;
  align-items: center;
  justify-content: center;
  border-left-width: 1px;
  border-color: var(--color-row-line);
  color: var(--color-ink-secondary);
  cursor: pointer;
  transition: var(--transition-colors);
}

.pager-button:first-child {
  border-left-width: 0;
}

.pager-button.disabled {
  color: var(--color-ink-disabled);
  cursor: default;
}

@media (hover: hover) {
  .pager-button:not(.disabled):hover {
    background-color: var(--color-neutral-hover);
  }
}
</style>
