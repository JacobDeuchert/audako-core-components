<script lang="ts">
import { createEventDispatcher } from 'svelte';

    let eventDispatcher = createEventDispatcher();

    let sortDirection: 'asc' | 'desc' | null = 'asc';

    function toggleSort(): void {

        if (sortDirection === 'asc') {
            sortDirection = 'desc';
        } else if (sortDirection === 'desc') {
            sortDirection = null;
        } else {
            sortDirection = 'asc';
        }
    }

</script>

<div class="flex w-full h-full cursor-pointer" on:click="{() => toggleSort()}">
    <div>
        <slot>

        </slot>
    </div>

    {#if sortDirection == 'asc'} 
        <span class="material-symbols-rounded text-xs">
            north
        </span>
    {:else if sortDirection == 'desc'} 
        <span class="material-symbols-rounded text-xs">
            south
        </span>
    {:else} 
        <span class="material-symbols-rounded text-xs">
        
        </span>
    {/if}

    
</div>