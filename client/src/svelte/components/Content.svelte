<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import LoginPage from './Login.svelte';
    import Menu from './menu/Menu.svelte';
    import axios from 'axios';

    axios.defaults.baseURL = `http://localhost:7777/api/v1`;
    axios.defaults.withCredentials = true;

    let gLoggedIn = false;

    let gUserId = undefined;
    let gGuest = undefined;
    let gUserData = undefined;

    onMount(async () => {
        gLoggedIn = false;

        await checkUser();
    });

    async function checkUser() {
        let loginData = (await axios.get('/user')).data;

        if (loginData.active) {
            gLoggedIn = true;
            gUserId = loginData.user;
            gGuest = loginData.guest;

            gUserData = (await axios.get('/user/me')).data;
            console.log(gUserData);
        }
    }

    async function logOut() {
        await axios.post('/user/logout');
        gLoggedIn = false;
    }

</script>

<main>
    {#if !gLoggedIn}
        <div id="login" out:fly="{{y: -1000, duration: 500}}" in:fly="{{y: -1000, duration: 500, delay: 500}}">
            <LoginPage axios={axios} {checkUser} />
        </div>
    {:else}
        <div id="mainGame" style="height: 100%" in:fly="{{y: 1000, duration: 500, delay: 500}}" out:fly="{{y: 1000, duration: 500}}">
            <Menu userId={gUserId} guest={gGuest} userData={gUserData} {logOut}/>
        </div>
    {/if}
</main>

<style>

</style>
