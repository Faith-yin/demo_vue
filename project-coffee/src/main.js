// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import './assets/jQuery/jquery-3.4.1'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

// 完整引入：导入所有的 mint-ui 组件
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 导入格式化时间的插件
import moment from 'moment'

Vue.use(VueResource)

Vue.config.productionTip = false

// 自定义全局过滤器：用于统一货币符号
Vue.filter('Currency',function(value) {
  return '￥' + value;
})

// 自定义全局过滤器：用于格式化时间
Vue.filter('dateFormat', function(dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
