import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    userinfo: null,
    haslogin:false
}
export default new Vuex.Store ({
    action:action,
    getters:getters,
    modules:{
        login
    },
    strict:true
    
})