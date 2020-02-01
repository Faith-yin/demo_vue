import Vue from 'vue'

// 导入 vue-router 包
import VueRouter from 'vue-router'
// 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 app 组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'


// // 完整引入：导入所有的 mint-ui 组件
// // 导入 mint-ui 
// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
// // 将 MintUi 安装到 Vue中
// Vue.use(MintUi)


// 按需导入：只导入自己需要的组件
// 安装 npm install babel-plugin-component -D
import { Button } from 'mint-ui'
// 使用 Vue.component 注册 按钮组件
Vue.component('mybtn', Button)



var vm = new Vue({
  el: '#app',
  render: c => c(app),
  // 将路由对象挂载到vm实例上去
  router: router
})