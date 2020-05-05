import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import CoreuiVue from '@coreui/vue';
import {iconsSet as icons} from './assets/icons/icons.js';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    // set observer to true
    observer: true,
    lazyComponent: true,
});

Vue.config.performance = true;
Vue.use(CoreuiVue);

Vue.use(require('vue-moment'));

// Apollo gql magic
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/knownorigin/known-origin",
});

const apolloProvider = new VueApollo({
    defaultClient: client
});

Vue.use(VueApollo);

new Vue({
    el: '#app',
    router,
    store,
    icons,
    apolloProvider,
    template: '<App/>',
    components: {
        App
    },
});
