import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 组件懒加载
const Navbar = () => import('./components/bar/navbar.vue')
const Asidebar = () => import('./components/bar/asidebar.vue')

Vue.use(ElementUi);

Vue.component('Navbar', Navbar)
Vue.component('Asidebar', Asidebar)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
