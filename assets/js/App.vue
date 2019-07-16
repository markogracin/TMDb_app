<template>
    <main>
        <Hero/>
        <router-view/>
    </main>
</template>

<script>
    import Hero from "./components/Hero";

    export default {
        name: "App",
        components: {Hero}
    }
</script>
