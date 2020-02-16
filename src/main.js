import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/css.css'
 

import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.prototype.$http=axios//全局注册
Vue.use(VueAxios,axios)
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
