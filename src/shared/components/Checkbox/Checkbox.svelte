<script lang="ts">

    export let label: string = '';
    export let checked: boolean = false;

    function onClick(event: MouseEvent): void {
        checked = !checked;
    }

</script>



    <div class="flex items-center cursor-pointer" on:click="{(event) => onClick(event)}">
        <input type="checkbox" class="mr-2 h-[18px] w-[18px] cursor-pointer" bind:checked="{checked}">
        <div>{label}</div>
      </div>

