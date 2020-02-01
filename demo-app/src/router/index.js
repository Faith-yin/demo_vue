import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Add from '@/views/Add.vue'
import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'
import List from '@/views/List.vue'
import User from '@/views/User.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.eny.BASE_URL,
  // 链接被激活时的class
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          // 实现懒加载
          component: List
        },
        {
          path: 'user',
          name: 'user',
          // 实现懒加载
          component: User
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
