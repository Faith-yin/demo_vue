import Vue from 'vue'
import Router from 'vue-router'

// 导入一级路由
import Home from '../components/Home.vue'
import Admin from '../components/Admin.vue'
import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Menu from '../components/Menu.vue'
import Register from '../components/Register.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/' ,redirect: '/Home' },
    { path: '/Home', name: 'home', component: Home },
    { path: '/Admin', name: 'admin', component: Admin,
      // beforeEnter: (to, from, next) => {
        // 路由独享守卫
        // alert('非登录状态，不能访问此页面！');
        // next(false);

        //   判断store.gettes.isLogin === false
      //   if(to.path == '/Login' || to.path == '/Register') {
      //     next();
      //   }else {
      //     alert('还未登录，请先登录！');
      //     next('/Login');
      //   }
      // }
  },
    { path: '/Header', name: 'header', component: Header },
    { path: '/Login', name: 'login', component: Login },
    { path: '/Menu', name: 'menu', component: Menu },
    { path: 'Register', name: 'register',component: Register },
    { path: '/About', name: 'about', component: About }
  ]
})
