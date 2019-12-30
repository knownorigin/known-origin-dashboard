<template>
    <router-view></router-view>
</template>

<script>
    import store from './store';

    export default {
        name: 'App',
        created: function () {
            try {
                store.dispatch('bootstrap');
            } catch (e) {
                console.error(e);
            }
        },
    };
</script>

<style lang="scss">
    // Import Main styles for this application
    @import 'assets/scss/style';
</style>
