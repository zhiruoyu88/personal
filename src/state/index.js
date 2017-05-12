import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store ({
    action:action,
    getters:getters,
    modules:{
        login
    },
    strict:true
    
})