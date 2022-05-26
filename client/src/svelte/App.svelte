<script>
	import { onMount } from 'svelte';

	import LoginPage from './components/Login.svelte';
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

	async function setLoginData(loginData) {

	}

	async function logOut() {
		await axios.post('/user/logout');
		gLoggedIn = false;
	}

</script>

<main>
	{#if !gLoggedIn}
		<LoginPage axios={axios} {checkUser}/>
	{:else}
		<h1>you are logged in son! id: {gUserId}, guest: {gGuest}</h1>
		<button on:click={logOut}>Log me out!</button>
	{/if}
</main>

<style>

</style>
