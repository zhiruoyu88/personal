// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-theme-default'
import ElementUI from 'element-ui'
import vueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueRouter)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
// Vue.use(subMenu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
