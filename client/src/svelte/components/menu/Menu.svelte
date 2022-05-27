<script>
    export let userId, guest, userData, logOut;

    import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';

    import MainMenu from './MainMenu.svelte';
    import DeployMenu from './deploy/DeployMenu.svelte';
    import EquipmentMenu from './equipment/EquipmentMenu.svelte';

    const MENUS = {
        MAIN: 0,
        EQUIPMENT: 1,
        MISSIONS: 2,
        MARKET: 3,
        SOCIAL: 4,
        PLAY: 5,
        OPTIONS: 6,
    }

    let menu = MENUS.MAIN;

    onMount(() => {
        menu = MENUS.MAIN;
    });

    function back() {
        menu = MENUS.MAIN;
    }

    function switchMenu(newMenu) {
        menu = newMenu;
    }
</script>

<main>
    <div>
        {#if menu === MENUS.MAIN}
            <div out:fly={{y: -1000, duration: 500}} in:fly={{y: 1000, duration: 500, delay: 500}}>
                <MainMenu {MENUS} {switchMenu} {userData} {logOut} />
            </div>
        {:else if menu === MENUS.PLAY}
            <div out:fly={{y: -1000, duration: 500}} in:fly={{y: 1000, duration: 500, delay: 500}}>
                <DeployMenu back={() => {switchMenu(MENUS.MAIN)}} {userData} />
            </div>
        {:else if menu === MENUS.EQUIPMENT}
            <div style="height: 100%; width: 100%;" out:fade={{y: -1000, duration: 200}} in:fade={{y: 1000, duration: 200, delay: 500}}>
                <EquipmentMenu back={() => {switchMenu(MENUS.MAIN)}} {userData} />
            </div>
        {/if}
    </div>
</main>

<style>

</style>