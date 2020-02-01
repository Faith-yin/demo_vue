// 导入 vue-router 包
import VueRouter from 'vue-router'

// 导入 Ammount 和 Count 组件
import ammount from './components/Ammount.vue'
import count from './components/Count.vue'


// 创建路由对象
var router = new VueRouter({
  routes: [
    {
      path: '/ammount',
      component: ammount,
    },
    {
      path: '/count',
      component: count
    }
  ]
})


// 把路由对象暴露出去
export default router