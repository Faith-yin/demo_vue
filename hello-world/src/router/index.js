import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Info from '@/components/Info.vue'
import About from '@/components/About.vue'
import Demo1 from '@/components/Demo1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/demo1',
      name: '/demo1',
      component: Demo1
    }
  ]
})
