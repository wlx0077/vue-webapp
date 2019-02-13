import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/registerServiceWorker'

import './style/common.scss'

import './vendor/vant-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
