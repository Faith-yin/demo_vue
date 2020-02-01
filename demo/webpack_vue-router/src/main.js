import Vue from 'vue'

// 导入 vue-router 包
import VueRouter from 'vue-router'
// 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 app 组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  // 将路由对象挂载到vm实例上去
  router: router
})