import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';
import 'popper.js';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel';
//-------------------------------
import VModal from 'vue-js-modal'

Vue.use(VModal)
//-------------------------------
Vue.use(VueCarousel);
Vue.use(VueMaterial)

window.$=window.jQuery=jQuery;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
