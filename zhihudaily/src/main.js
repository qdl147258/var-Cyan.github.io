// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

/*import VueResource from 'vue-resource'
Vue.use(VueResource)*/

/*import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: '/static/loading.gif'
})*/

Vue.config.productionTip = false

// MintUI.Indicator.open()
import './assets/css/app.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
