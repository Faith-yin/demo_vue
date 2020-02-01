import Vue from 'vue'
import Router from 'vue-router'
// import Module from '../module/index'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   // 路由懒加载
    //   component: resolve => require(['../views/login/login.vue'], resolve)
    // },
    {
      path: '/',
      name: 'test',
      // 路由懒加载
      component: resolve => require(['../views/test.vue'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../views/login/register.vue'], resolve)
    },
    {
      path: '/atlas',
      name: 'atlas',
      component: resolve => require(['../views/map/atlas.vue'], resolve)
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: resolve => require(['../views/calendar/calendar.vue'], resolve)
    },
    {
      path: '/picture-edit',
      name: 'picture-edit',
      component: resolve => require(['../views/picture/pictureEdit.vue'], resolve)
    },
    {
      path: '/preety-pic',
      name: 'preety-pic',
      component: resolve => require(['../views/picture/preetyPic.vue'], resolve)
    },
    {
      path: '/rich-text',
      name: 'rich-text',
      component: resolve => require(['../views/richText/richText.vue'], resolve)
    },
    {
      path: '/table',
      name: 'table',
      component: resolve => require(['../views/table/table.vue'], resolve)
    },
    {
      path: '/table-edit',
      name: 'table-edit',
      component: resolve => require(['../views/table/tableEdit.vue'], resolve)
    },
    {
      path: '/person',
      name: 'person',
      component: resolve => require(['../views/Person/person.vue'], resolve)
    }
  ]
})
