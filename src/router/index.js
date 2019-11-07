import Vue from 'vue'
import Router from 'vue-router'

import UrunlerSayfası from '../views/UrunlerSayfası.vue'
import Tekurun from '../views/tekurun.vue'

Vue.use(Router)

export default new Router({
 routes : [
  {
    path: '/sayfa1',
    name: 'UrunlerSayfası',
    component: UrunlerSayfası
  },
  {
    path: '/sayfa2',
    name: 'Tekurun',
    component: Tekurun
  },

  {
    path: '/about',
    name: 'about',
     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
})


