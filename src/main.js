import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFish, faCouch, faHome, faChevronLeft,
  faChevronRight, faInfoCircle, faCartPlus, faAngleLeft,
  faShoppingCart, faTrashAlt, faPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap'

library.add(
  faFish, faCouch, faHome, faChevronLeft,
  faChevronRight, faInfoCircle, faCartPlus, faAngleLeft,
  faShoppingCart, faTrashAlt, faPlus
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  next()
})
