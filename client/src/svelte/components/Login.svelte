
<script>
    import { onMount } from 'svelte';

    import StatusDisplay from './StatusDisplay.svelte';
    export let axios, checkUser;

    let loggingIn = true;

    let loginUsername = '';
    let loginPassword = '';

    let loginEmail = '';
    let loginConfirmPassword = '';

    let loginStatus = 1;
    let loginMessage = 'Testing!';

    onMount(async () => {
        loggingIn = true;

        loginUsername = '';
        loginPassword = '';
        loginEmail = '';
        loginConfirmPassword = '';
        loginStatus = 0;
        loginMessage = '';
    });

    async function loginSubmit() {
        await requestAndSetStatus('/user/login', {
            username: loginUsername.trim(),
            password: loginPassword.trim()
        }).then(() => { checkUser() });
    }

    async function createSubmit() {
        if (loginConfirmPassword !== loginPassword) {
            setStatus(2, 'Passwords do not match.');
            return;
        }
        await requestAndSetStatus('/user/signup', {
            username: loginUsername.trim(),
            email: loginEmail.trim(),
            password: loginPassword.trim()
        }).then(() => { checkUser() });
    }

    async function playAsGuest() {
        // TODO
    }

    async function requestAndSetStatus(route, data) {
        await axios.post(route, data)
            .catch((error) => {
            return {
                data: {
                    status: error.response.data.status,
                    message: error.response.data.message
                }
            }
        }).then((result) => {
            setStatus(result.data.status, result.data.message);
        });
    }

    function setStatus(status, message) {
        loginStatus = status;
        loginMessage = message;
    }

</script>

<main>
    <div class="loginPanel">
        <h1 class="gameTitle">EXFIL</h1>
        <StatusDisplay status={loginStatus} message={loginMessage}/>
        <form id="loginForm">
            <div class="loginForm">
                {#if !loggingIn}
                    <h2>CREATE ACCOUNT</h2>
                    <label for="loginEmailInput">Email</label>
                    <input id="loginEmailInput" class="loginInput" type="email" bind:value={loginEmail}>
                    <label for="loginUsernameInput">Username</label>
                {:else}
                    <h2>LOGIN</h2>
                    <label for="loginUsernameInput">Username / Email</label>
                {/if}

                <input id="loginUsernameInput" class="loginInput" type="text" bind:value={loginUsername}>

                <label for="loginPasswordInput">Password</label>
                <input id="loginPasswordInput" class="loginInput" type="password" autocomplete="on" bind:value={loginPassword}>
                {#if !loggingIn}
                    <label for="loginPasswordConfirm">Confirm Password</label>
                    <input id="loginPasswordConfirm" class="loginInput" type="password" autocomplete="off" bind:value={loginConfirmPassword}>
                {/if}
            </div>

            {#if !loggingIn}

                <button class="loginInput blueSubmit" type="submit" on:click|preventDefault={createSubmit}>
                    <i class="ri-user-add-line"></i> Create
                </button>
                <button class="loginInput greenSubmit" type="submit" on:click|preventDefault={() => {loggingIn = true}}>
                    <i class="ri-arrow-left-right-line"></i> Login to Existing Account
                </button>
            {:else}
                <button class="loginInput blueSubmit" type="submit" on:click|preventDefault={loginSubmit}>
                    <i class="ri-login-box-line"></i> Login
                </button>
                <button class="loginInput greenSubmit" type="submit" on:click|preventDefault={() => {loggingIn = false}}>
                    <i class="ri-arrow-left-right-line"></i> Create a New Account
                </button>
            {/if}

            <button class="loginInput redSubmit" type="submit" on:click|preventDefault={playAsGuest}>
                <i class="ri-user-line"></i> Play as Guest
            </button>
        </form>
    </div>
</main>

<style>
    .gameTitle {
        font-family: 'Odibee Sans', sans-serif;
        text-align: center;
        font-size: 6em;
        line-height: 0;
    }

    .loginPanel {
        background-color: #222;
        margin: auto;
        width: 24em;
        padding: 1em;
    }

    .loginForm {
        padding-bottom: 1em;
    }

    .loginInput {
        vertical-align: middle;
        width: 100%;
    }

    .blueSubmit {
        background-color: #35b;
        border-color: #24a;
    }

    .blueSubmit:not(:disabled):active {
        background-color: #3050b0;
    }

    .greenSubmit {
        background-color: #5a3;
        border-color: #492;
    }

    .greenSubmit:not(:disabled):active {
        background-color: #50a030;
    }

    .redSubmit {
        background-color: #b34;
        border-color: #a23;
    }

    .redSubmit:not(:disabled):active {
        background-color: #b03040;
    }


</style>