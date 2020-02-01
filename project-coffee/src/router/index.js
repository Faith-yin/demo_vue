import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/Cart.vue'
import Find from '../components/Find.vue'
import Home from '../components/Home.vue'
import Person from '../components/Person.vue'
import Comment from '../components/Home/Comment.vue'
import Contact from '../components/Home/Contact.vue'
import Goods from '../components/Home/Goods.vue'
import News from '../components/Home/News.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Add from '../components/Add.vue'
import SingleNews from '../components/Home/SingleNews.vue'
import SingleGoods from '../components/Home/SingleGoods.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive && to.path=='/News') {
      console.log(to.path);
      console.log(from);
      return savedPosition;
    }
  },
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Home',
      component: Home,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Register',
      component: Register,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Find',
      component: Find,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Cart',
      component: Cart,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Person',
      component: Person,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/News',
      component: News,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Goods',
      component: Goods,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Comment',
      component: Comment,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Contact',
      component: Contact,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Add',
      component: Add,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/SingleNews/:id',
      component: SingleNews,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/SingleGoods/:id',
      component: SingleGoods,
      meta: {
        keepAlive: false
      }
    }
  ]
})
