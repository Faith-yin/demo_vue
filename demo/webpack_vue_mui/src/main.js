// 项目的 JS 入口文件


// 导入 jquery 包
import $ from 'jquery'

// 导入 vue 包
// import Vue from '../node_modules/vue/dist/vue'
import Vue from 'vue'


// 导入 login 组件
import login from './login.vue'

// 导入 mui 样式表，和 bootstrap 用法一致
import './lib/mui/css/mui.min.css'


var vm = new Vue({
  el: '#app',
  data: {
    msg: '我是一只小小鸟'
  },
  render: c => c(login)

})


import m1, { title, title2 as title02 } from './test.js'
console.log(m1);
console.log(title + '--' + title02);


