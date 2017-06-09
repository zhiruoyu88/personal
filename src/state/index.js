import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getters from './getters'
import login from './modules/login'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
    userInfo:null,
    hasLogin:null
}

const state = {
    userinfo: null,
    haslogin:false
}
export default new Vuex.Store ({
    state:state,
    action:action,
    getters:getters,
    login,
    mutations,
    strict:true
})
