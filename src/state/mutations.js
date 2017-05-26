import {LOGIN_SUCCESS,LOGOUT_SUCESS,INIT_LOGIN,LOGOUT} from './mutation-types'
import {getStore,setStore} from '../../config/until'
export default {
    [LOGIN_SUCCESS](state,info){
        state.userInfo = info;
        state.hasLogin = true;
        setStore('userInfo',state.userInfo);
        setStore('hasLogin',state.hasLogin);
        let validity = 30;
        let now = new Date();
        now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
        document.cookie = "hasLogin=" + state.hasLogin + ";expires=" + now.toGMTString();
        document.cookie = "userInfo="+state.userInfo+";expires=" + now.toGMTString();
    },
    [INIT_LOGIN](state,info){
        state.userInfo = JSON.parse(info);
        state.hasLogin=true;
    },
    [LOGOUT](state,info){
        setStore('userInfo',null);
        setStore('hasLogin',null);
    }
}