import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getters from './getters'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store ({
    action:action,
    getters:getters,
    modules:{
        login
    },
    strict:true
})