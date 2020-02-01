// 项目的 JS 入口文件


// 导入 jquery 包
import $ from 'jquery'

// 导入 vue 包
// import Vue from '../node_modules/vue/dist/vue'
import Vue from 'vue'

// 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】

// 导入 login 组件
import login from './login.vue'


var vm = new Vue({
  el: '#app',
  data: {
    msg: '我是一只小小鸟'
  },

  // render 将会把内容渲染成一个 html 组件：会覆盖容器中的其他所有元素
  // render: function(creatElements) {
  //   return creatElements(login)
  // }
  render: c => c(login)

})




// 总结梳理： webpack 中如何使用 vue :
// 1. 安装vue的包：  cnpm i vue -S
// 2. 由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier -D
// 3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'
// 4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style
// 5. 使用 import login from './login.vue' 导入这个组件
// 6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
// 7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；



import m1, { title, title2 as title02 } from './test.js'
console.log(m1);
console.log(title + '--' + title02);


