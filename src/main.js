import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFish, faCouch, faHome, faChevronLeft,
  faChevronRight, faInfoCircle, faCartPlus, faAngleLeft,
  faShoppingCart, faTrashAlt, faPlus, faUser, faUserPlus,
  faUserCircle, faSignInAlt, faSignOutAlt, faFlag, faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap'

import i18n from './i18n'
import { ValidationProvider, ValidationObserver, configure } from 'vee-validate'
import store from './assets/store'

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
configure({
  // this will be used to generate messages.
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`) // 翻譯用
    return i18n.t(`validations.messages.${values._rule_}`, values)
  },
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

library.add(
  faFish, faCouch, faHome, faChevronLeft,
  faChevronRight, faInfoCircle, faCartPlus, faAngleLeft,
  faShoppingCart, faTrashAlt, faPlus, faUser, faUserPlus,
  faUserCircle, faSignInAlt, faSignOutAlt, faFlag, faTimes
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

Vue.use(Vuex)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.pathFrom) {
    if (from.path === to.meta.pathFrom) {
      if (to.meta.requireAuth) {
        const API = `${process.env.VUE_APP_API_PATH}/api/user/check`
        axios.post(API).then(response => {
          if (response.data.success) {
            next()
          } else {
            next(false)
            store.dispatch('addInfo', {
              msg: '驗證失敗，請重新登入',
              status: 'danger',
              timeStamp: Math.floor(new Date())
            })
          }
        }).catch(() => {
          next(false)
          store.dispatch('addInfo', {
            msg: '網路斷線無法驗證，請稍後再試',
            status: 'danger',
            timeStamp: Math.floor(new Date())
          })
        })
      } else if (to.meta.orderSentCheck && store.state.orderIdSent) {
        next()
      } else {
        next(false)
      }
    } else {
      next('/check')
    }
  } else {
    next()
  }
})
