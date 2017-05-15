import Vue from 'vue'
import {
    getUser,
    getArticle
} from '../service/getData'
import {LOGIN_SUCCESS,LOGOUT_SUCESS} from './mutation-types'

export default {
    async getUserInfo ({
        commit,
        state
    }) {
        let res = await getUser()
        commit(LOGOUT_SUCESS,res)
    }
}