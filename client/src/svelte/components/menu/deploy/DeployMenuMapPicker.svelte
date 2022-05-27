<script>
    export let back, next;
</script>

<main>
    <div class="window">
        <h1 class="gameTitle">PICK MAP</h1>
        <button on:click={back}><i class="ri-arrow-left-line"></i> Back</button>
        <div class="picker">
            <div class="mapOptions">

            </div>
            <div class="mapInfo">
                <button>Select <i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
</main>

<style>

    .gameTitle {
        font-family: 'Odibee Sans', sans-serif;
        text-align: center;
        font-size: 5em;
        line-height: 0.2em;
    }

    .window {
        background-color: #222;
        margin: 4em auto auto;
        width: 48em;
        padding: 1em;
    }

    .picker {
        display: grid;
    }

    button {
        width: 100%;
    }

    .mapOptions {
        display: grid;
        background-color: #242424;
        grid-column: 1;
        width: 100%;
        height: 32em;
    }

    .mapInfo {
        background-color: #2c2c2c;
        grid-column: 2;
        width: 100%;
        height: 32em;
    }

</style>