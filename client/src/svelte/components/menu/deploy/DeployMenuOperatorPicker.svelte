<script>
    export let back, next, guest;

    import { onMount } from 'svelte';

    let operator = true;

    onMount(() => {
        operator = true;
    });

    function pickOperator() {
        operator = true;
        next();
    }

    function pickCivilian() {
        operator = false;
        next();
    }
</script>

<main>
    <div class="window">
        <h1 class="gameTitle">DEPLOY</h1>
        <button on:click={back}><i class="ri-arrow-left-line"></i> Back</button>
        <div class="picker">
            <div class="picker-side" style="grid-column: 1">
                <button class="blueSubmit" on:click={pickOperator} disabled={guest}>Operator <i class="ri-arrow-right-line"></i></button>
                <p>Bring in loot, kill other players, and extract with the gains.</p>
            </div>
            <div class="picker-side" style="grid-column: 2">
                <button class="greenSubmit" on:click={pickCivilian}>Civilian <i class="ri-arrow-right-line"></i></button>
                <p>Enter with random loot, and keep loot when extracting.</p>
            </div>
        </div>
    </div>
</main>

<style>

    .picker {
        display: grid;
    }

    .picker-side {
        padding: 0.5em;
    }

    .gameTitle {
        font-family: 'Odibee Sans', sans-serif;
        text-align: center;
        font-size: 6em;
        line-height: 0.5em;
    }

    .window {
        background-color: #222;
        margin: 8em auto auto;
        width: 30em;
        padding: 1em;
    }

    button {
        width: 100%;
        padding-top: 1em;
        padding-bottom: 1em;
    }

</style>