<script>
    export let back, userData;

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import DeployMenuOperatorPicker from './DeployMenuOperatorPicker.svelte';
    import DeployMenuMapPicker from './DeployMenuMapPicker.svelte';

    let stage = 0;

    let deployOperator = false;

    onMount(() => {
        stage = 0;
    });


</script>

<main>
    {#if stage === 0}
        <div in:fade={{duration: 200, delay: 200}} out:fade={{duration: 200}}>
            <DeployMenuOperatorPicker {back} next={() => {stage = 1}} guest={userData.guest} bind:operator={deployOperator}/>
        </div>
    {:else if stage === 1}
        <div in:fade={{duration: 200, delay: 200}} out:fade={{duration: 200}}>
            <DeployMenuMapPicker back={() => {stage = 0}} next={() => {stage = 1}} />
        </div>
    {/if}
</main>

<style>

</style>