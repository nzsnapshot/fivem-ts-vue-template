fivem-ts-vue-template
========
A basic FiveM resource for building UI's with VUE. Using Typescript/Vite/Esbuild
by providing a basic explanation of how to do it easily.

Look how easy it is to use:

    // Usage
    // In vue components

    const store = useStore() - import { useStore } from 'vuex' -- Import the store/state
    const router = useRouter() - import { useRouter } from 'vue-router' -- Manages what page to view

    const pog = computed(() => store.getters['module/getPog'])
    const action = () => store.dispatch('module/action')
    const mutation = () => store.commit('module/mutation')
    const goToRoute = () => router.go('/pathto')

Features
--------

- Typescript
- ESBuild - Fast compiling speed
- Vite

Installation
------------
Install modules by running:

    cd resources
    npm install | yarn | pnpm install (pnpm recommended)
    pnpm run watch

    cd ui 
    npm install | yarn | pnpm install (pnpm recommended)
    pnpm run watch

    Check it is working
    --------------------------
    You should have the vue logo on your screen.
    Using the command '/pog' in game should change the text from POG to YES

Thanks
-------
- itsGeeGeez - Help building the base resources
- AvarianKnight - Base TS resource from lcpma-weapons
