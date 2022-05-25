<script>
    export let status = 0;
    export let message = '';

    $: loginStatusClass = status === 1 ? 'statusDisplayOkay'
        : (status === 2 ? 'statusDisplayWarning'
            : (status === 3 ? 'statusDisplayError' : ''));

    $: loginStatusIcon = status === 1 ? 'ri-check-line'
        : (status === 2 ? 'ri-alert-line'
            : (status === 3 ? 'ri-error-warning-line' : ''));
</script>

<main>
    {#if status > 0}
        <div class="statusDisplay {loginStatusClass}">
            <h3 class="statusText"><i class={loginStatusIcon}></i> {message}</h3>
        </div>
    {/if}
</main>

<style>
    .statusDisplay {
        width: 100%;
        padding-top: 0.05em;
        padding-bottom: 0.05em;
    }

    .statusDisplayError {
        background-color: #c11;
    }

    .statusDisplayWarning {
        background-color: #ec1;
    }

    .statusDisplayOkay {
        background-color: #1c1;
    }

    .statusText {
        margin: 0.5em;
        color: #fff;
    }
</style>