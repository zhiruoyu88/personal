import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Main from '@/views/main/Main'

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
      path: '/list',
      name: 'Main',
      component: Main
    }
  ]
})
