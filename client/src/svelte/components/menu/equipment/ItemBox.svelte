<script>
    export let x, y;
</script>

<main>
    <div class="box" style="
        grid-column-start: {x};
        grid-column-end: span 1;
        grid-row-start: {y};
        grid-row-end: span 1;">
    </div>
</main>

<style>
    .box {
        display: inline-block;
        box-sizing: border-box;
        border: #555 solid 1px;
        background-image: linear-gradient(0deg, #333 0%, #3a3a3a 100%);

        width: 4vw;
        height: 4vw;
        max-width: 4vw;
        max-height: 4vw;

        margin: 0;
        padding: 0;
    }
</style>