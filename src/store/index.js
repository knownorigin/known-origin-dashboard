import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        artistMap: null,
    },
    mutations: {
        artistMap (state, artistMap) {
            console.log('artistMap', artistMap)
            state.artistMap = artistMap;
        },
    },
    actions: {
        bootstrap({commit, dispatch, state}) {
            console.log('bootstrapping...');

            const artistMap = {};
            axios.get(`https://us-central1-known-origin-io.cloudfunctions.net/main/api/artist/all`).then((res) => {
                res.data.forEach(a => {
                    a.ethAddress.forEach(add => artistMap[`${add.toLowerCase()}`] = a);
                });

                commit('artistMap', artistMap);
            });
        },
    },
});
