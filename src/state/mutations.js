import {LOGIN_SUCCESS,LOGOUT_SUCESS} from './mutation-types'

export default {
    [LOGIN_SUCCESS](state,info){
        state.userInfo = info;
        state.login = true;
        let validity = 30;
        let now = new Date();
        now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
        document.cookie = "USERID=" + info.id + ";expires=" + now.toGMTString();
        document.cookie = "SID=CeRxBZalHSiKuGI49DL2DhXMrOakCzQNcJFg" + ";expires=" + now.toGMTString();
    }
}