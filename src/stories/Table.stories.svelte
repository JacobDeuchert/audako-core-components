<script>

    import {Meta, Story } from '@storybook/addon-svelte-csf';
    import Table from '../shared/components/Table/Table.svelte';
    import HeaderRow from '../shared/components/Table/HeaderRow.svelte';
    import DataRow from '../shared/components/Table/DataRow.svelte';
    import HeaderCell from '../shared/components/Table/HeaderCell.svelte';

</script>

<Meta title="Shared Components/Table" component={Table}>
</Meta>

<Story name="Default">

    <Table>
        <HeaderRow>
            <HeaderCell>
                <div class="bg-red-500">Test</div>
            </HeaderCell>
            <div class="bg-green-500">Test</div>
        </HeaderRow>
    </Table>
</Story>