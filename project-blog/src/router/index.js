import Vue from 'vue'
import Router from 'vue-router'

// 导入一级路由
import AddBlog from '../components/AddBlog.vue'
import ShowBlog from '../components/ShowBlog.vue'
import SingleBlog from '../components/SingleBlog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/ShowBlog' },
    { path: '/AddBlog', component: AddBlog },
    { path: '/ShowBlog', component: ShowBlog },
    { path: '/SingleBlog/:id', component: SingleBlog }
  ]
})
