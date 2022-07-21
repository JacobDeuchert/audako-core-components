<script lang="ts">

</script>

<div class="audako-tablebody-flexrow w-full bg-red-50">
    <slot></slot>
</div>

<style>
    .audako-tablebody-flexrow{
        display: flex;
        height: 40px;
    }

    :global(.audako-tablebody-flexrow > *) {
        flex: 1;
        height: 100%;
        padding: 4px 0;
        display: flex;
        align-items: center;
    }

    :global(.audako-tablebody-flexrow > *:first-child) {
        padding-left: 12px;
    }

    :global(.audako-tablebody-flexrow > *:last-child) {
        padding-right: 12px;
    }
</style>
