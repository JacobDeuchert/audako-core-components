<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import Table from '../shared/components/table/Table.svelte';
import HeaderRow from '../shared/components/table/HeaderRow.svelte';
import DataRow from '../shared/components/table/DataRow.svelte';
import HeaderCell from '../shared/components/table/HeaderCell.svelte';
import DataCell from '../shared/components/table/DataCell.svelte';
import Paginator from '../shared/components/table/Paginator.svelte';

let data = new Array(100).fill(0).map((x) => ({ Name: 'abc', Age: Math.random() * 100 }));
console.log(data);
</script>

<Meta title="Shared Components/Table" component={Table} />

<Story name="Default">
  <Table on:sort={(sort) => console.log('table - sort', sort)}>
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

    <Paginator on:changePage={(event) => console.log(event?.detail)} slot="pagination" pageIndex={0} pageSize={10} totalCount={100} />
  </Table>
</Story>
