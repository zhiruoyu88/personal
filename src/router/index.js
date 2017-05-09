import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },{
        path: '/about',
        name: 'About',
        component: About
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
