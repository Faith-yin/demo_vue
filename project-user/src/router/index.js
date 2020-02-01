import Vue from 'vue'
import Router from 'vue-router'
// 导入路由
import About from '../components/About.vue'
import Add from '../components/Add.vue'
import CustomerDetails from '../components/CustomerDetails.vue'
import Customers from '../components/Customers.vue'
import Edit from '../components/Edit.vue'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: Customers },
    { path: '/About', component: About },
    { path: '/Add', component: Add },
    { path: '/CustomerDetails/:id', component: CustomerDetails },
    { path: '/Edit/:id', component: Edit }
  ]
})
