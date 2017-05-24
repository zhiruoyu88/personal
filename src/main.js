// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-theme-default'
import ElementUI from 'element-ui'
import vueRouter from 'vue-router'
import axios from 'axios'
import store from './state/'

Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueRouter)
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
