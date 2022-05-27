<script>
    export let MENUS, switchMenu, userData, logOut;
</script>

<main>
    <div class="mainMenu">
        <h1 class="gameTitle">EXFIL</h1>
        <div class="navigator">
            {#if userData !== undefined}
                <p class="usernameText"><b>{userData.username}</b></p>
                <p class="patchText">patch 1.0.0</p>
                <div class="navButtons">
                    <button class="blueSubmit" on:click={() => {switchMenu(MENUS.PLAY)}}>
                        <i class="ri-run-line"></i> DEPLOY
                    </button>
                    <button disabled={userData.guest} on:click={() => {switchMenu(MENUS.EQUIPMENT)}}>
                        <i class="ri-suitcase-line"></i> EQUIPMENT
                    </button>
                    <button disabled={userData.guest} on:click={() => {switchMenu(MENUS.MARKET)}}>
                        <i class="ri-currency-line"></i> MARKET
                    </button>
                    <button disabled={userData.guest} on:click={() => {switchMenu(MENUS.MISSIONS)}}>
                        <i class="ri-key-2-line"></i> MISSIONS
                    </button>
                    <button disabled={userData.guest} on:click={() => {switchMenu(MENUS.SOCIAL)}}>
                        <i class="ri-team-line"></i> SOCIAL
                    </button>
                    <button on:click={() => {switchMenu(MENUS.OPTIONS)}}>
                        <i class="ri-settings-3-line"></i> OPTIONS
                    </button>
                    <button class="redSubmit" on:click={logOut}><i class="ri-logout-box-line"></i> LOG OUT</button>
                </div>
            {/if}

        </div>
    </div>
</main>

<style>
    .gameTitle {
        font-family: 'Odibee Sans', sans-serif;
        text-align: center;
        font-size: 10em;
        line-height: 0.5em;
    }

    .navigator {
        background-color: #222;
        margin: auto;
        width: 30em;
        padding: 1em;
    }

    .navButtons {
        display: grid;
    }

    .usernameText {
        font-size: 1.5em;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
    }

    .patchText {
        font-size: 0.8em;
        text-align: center;
        color: #aaa;
        margin-top: 0;
        margin-bottom: 1em;
    }

    button {
        font-size: 1em;
        width: 100%
    }
</style>