// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 全局守卫
// router.beforeEach((to, from, next) => {
//   // alert('还未登录，请先登录！');
//   // console.log(to);
//   // next();

//   判断store.gettes.isLogin === false
//   if(to.path == '/Login' || to.path == '/Register') {
//     next();
//   }else {
//     alert('还未登录，请先登录！');
//     next('/Login');
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
