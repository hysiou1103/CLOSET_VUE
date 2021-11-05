import App from './App.vue'
import router from './router'
import currency from './filters/currency'
import date from './filters/date'
import './bus'

import Vue from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueLazyload from 'vue-lazyload'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay } from 'swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

import store from './store'

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
swiper.use([Navigation, Pagination, Autoplay])

extend('email', email)
extend('required', {
  ...required,
  message: '這個{_field_}欄位為必填'
})
localize('zh_TW', TW)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.component('Loading', Loading)
Vue.filter('currency', currency)
Vue.filter('date', date)
Vue.component('ValidationProvider', ValidationProvider)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
