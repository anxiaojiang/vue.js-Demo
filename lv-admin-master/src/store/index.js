import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

import AppState from './appstate'
import Config from './config'
export default new Vuex.Store({
    modules:{
        appState:AppState,
        config:Config
    }
})