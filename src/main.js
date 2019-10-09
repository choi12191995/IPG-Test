import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.ignoredElements = ['copyright']

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
