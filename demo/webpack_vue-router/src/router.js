// 导入 vue-router 包
import VueRouter from 'vue-router'

// 导入 Account 和 GoodsList 组件
import account from './view/Account.vue'
import goodslist from './view/GoodsList.vue'
// 导入 Account 的两个子组件
import login from './view/login.vue'
import register from './view/register.vue'


// 创建路由对象
var router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        {
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        }
      ]
    },
    {
      path: '/goodslist',
      component: goodslist
    }
  ]
})


// 把路由对象暴露出去
export default router