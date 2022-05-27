<script>

    import Container from './Container.svelte';

</script>

<main>
    <div class="container">
        <div class="stash">
            <div class="stash-overflow">
                <Container width={10} height={64} items={[]}/>
            </div>

        </div>
        <div class="character">

        </div>
    </div>

</main>

<style>
    .container {
        display: grid;
        width: 97vw;
        height: 90vh;
        padding: 0.5em;
        grid-auto-flow: column;
    }

    .stash {
        display: inline-block;
        padding: 0.5em;
        background-color: #333;
        width: 40vw;
        height: 88vh;
    }

    .stash-overflow {
        overflow-y: auto;
        overflow-x: clip;
        width: inherit;
        height: inherit;
        border: #555 solid 1px;
    }
</style>