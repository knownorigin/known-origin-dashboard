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

    // pulsing opacity animation
    @keyframes flickerAnimation {
        0% {
            opacity: .85;
        }
        50% {
            opacity: .15;
        }
        100% {
            opacity: .85;
        }
    }

    @-o-keyframes flickerAnimation {
        0% {
            opacity: .85;
        }
        50% {
            opacity: .15;
        }
        100% {
            opacity: .85;
        }
    }

    @-moz-keyframes flickerAnimation {
        0% {
            opacity: .85;
        }
        50% {
            opacity: .15;
        }
        100% {
            opacity: .85;
        }
    }

    @-webkit-keyframes flickerAnimation {
        0% {
            opacity: .85;
        }
        50% {
            opacity: .15;
        }
        100% {
            opacity: .85;
        }
    }

    // lazy loading
    img[lazy=loading] {
        -webkit-animation: flickerAnimation 4s infinite;
        -moz-animation: flickerAnimation 4s infinite;
        -o-animation: flickerAnimation 4s infinite;
        animation: flickerAnimation 4s infinite;
    }

    .v-lazy-image {
        filter: blur(0px);
        transition: filter 0.5s;
    }

    .v-lazy-image-loaded {
        filter: blur(0);
    }

</style>
