import Vue from 'vue';
import Vuex from 'vuex';
import user from "./modules/user";
import sys from "./modules/sys";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        sys,
    },
})

const getters = {

};
