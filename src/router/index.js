import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Main from '@/views/main/Main'
import login from '@/views/login'
import write from '@/views/write'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
        path: '/about',
        name: 'About',
        component: About
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/write',
      name:'write',
      component:write
    }
  ]
})
