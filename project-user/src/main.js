// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import '../src/lib/jQuery/jquery-3.4.1'
import '../src/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
