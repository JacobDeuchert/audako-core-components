<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import Table from '../shared/components/table/Table.svelte';

const { Story } = defineMeta({
  title: 'Shared Components/Table',
  component: Table,
});
</script>

<script>
import HeaderRow from '../shared/components/table/HeaderRow.svelte';
import DataRow from '../shared/components/table/DataRow.svelte';
import HeaderCell from '../shared/components/table/HeaderCell.svelte';
import DataCell from '../shared/components/table/DataCell.svelte';
import Paginator from '../shared/components/table/Paginator.svelte';

const data = new Array(100).fill(0).map(() => ({ Name: 'abc', Age: Math.random() * 100 }));
</script>

<Story name="Default" asChild>
  <!-- Table fills its parent (h-full) and scrolls internally, so the story has
       to supply a bounded height the way real usages do. -->
  <div style="height: 500px">
    <Table onsort={(sort) => console.log('table - sort', sort)}>
      <HeaderRow>
        <HeaderCell id="Name" sortable>
          <div class="bg-red-500">Test</div>
        </HeaderCell>
        <HeaderCell id="Age" sortable>
          <div class="bg-green-500 w-full">Test</div>
        </HeaderCell>
      </HeaderRow>
      {#each data as row}
        <DataRow>
          <DataCell>{row.Name}</DataCell>
          <DataCell>{row.Age}</DataCell>
        </DataRow>
      {/each}

      {#snippet pagination()}
        <Paginator onchangePage={(event) => console.log(event)} pageIndex={0} pageSize={10} totalCount={100} />
      {/snippet}
    </Table>
  </div>
</Story>
