<script lang="ts">
import { createEventDispatcher } from 'svelte';



    export let label: string;

    export let sortDirection: 'asc' | 'desc' | null = null;


    let eventDispatcher = createEventDispatcher();

</script>

<div>

    
    <div>{label}</div>
</div>