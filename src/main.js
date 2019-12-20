import Vue from 'vue';
import App from './App';
import router from './router';
import CoreuiVue from '@coreui/vue';
import {iconsSet as icons} from './assets/icons/icons.js';

Vue.config.performance = true;
Vue.use(CoreuiVue);

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
    icons,
    apolloProvider,
    template: '<App/>',
    components: {
        App
    },
});
