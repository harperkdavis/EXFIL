<script>

    export let back, userData;

    import Inventory from './Inventory.svelte';
    let tab = 0;

</script>

<main>
    <div class="panel">
        <div class="window">
            <div class="nav">
                <button on:click={back}><i class="ri-arrow-left-line"></i> Back</button>
                <button on:click={() => {tab = 0}}><i class="ri-suitcase-line"></i> Inventory</button>
                <button on:click={() => {tab = 1}}><i class="ri-first-aid-kit-line"></i> Status</button>
                <button on:click={() => {tab = 2}}><i class="ri-guide-line"></i> Skills</button>
            </div>
            <div class="main">
                <Inventory />
            </div>

        </div>
    </div>

</main>

<style>

    .panel {
        width: 100%;
        height: 100%;

    }

    .window {
        position: absolute;
        left: 1vw;
        right: 1vw;
        top: 1vh;
        bottom: 1vh;
        height: 98vh;

        background-color: #2226;
    }

    .nav {
        background-color: #3336;

        padding: 0.5em 0.5em 0;
        height: 5vh;
    }

    .main {
        width: 98vw;
        height: 92vh;
    }

</style>