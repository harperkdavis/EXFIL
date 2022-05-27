<script>

    export let width, height, items;

    import ItemBox from './ItemBox.svelte';

</script>

<main>
    <div class="inventory" style="grid-template-columns: repeat({width}, 4vw); grid-template-rows: repeat({height}, 4vw);">
        {#each Array(height) as _, j}
            {#each Array(width) as _, i}
                <ItemBox x={i} y={j}/>
            {/each}
        {/each}
    </div>
</main>

<style>
    .inventory {
        display: grid;
    }
</style>