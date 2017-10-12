
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import App from './App'
import router from './router'
import Echarts from  'echarts'
import mymap from 'echarts/map/js/China'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
