import Vue from 'vue'

// 导入 vue-router 包
import VueRouter from 'vue-router'
// 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 app 组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'

// 导入 vuex 包
import Vuex from 'vuex'
// 手动安装 vuex
Vue.use(Vuex)


var store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count ++
    },
    subtract(state, c) {
      state.count -= c
    }
  },
  getters: {
    // getters 只负责对外提供数据，对数据进行包装，不负责修改数据
    optCount(state) {
      return '当前最新的 count 值是：' + state.count
    }
  }
})


// 总结：
// 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations
// 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.方法名
// 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 
//    this.$store.commit('方法的名称'， 唯一的一个参数)
// 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，
//    推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.方法名


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  // 将路由对象挂载到vm实例上去
  router: router,
  // 将 vuex 实例挂载到 vm 实例上去
  store: store
})