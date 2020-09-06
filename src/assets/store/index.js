import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLogined: false,
    cart: {
      carts: [],
      final_total: 0,
      total: 0
    },
    products: [],
    orderIdSent: '',
    popUpInfo: []
  },
  actions: {
    getProducts (context) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`
      return new Promise(function (resolve, reject) {
        axios.get(api).then(response => {
          if (response.data.success) {
            context.commit('PRODUCTS', response.data.products)
            resolve()
          } else {
            reject(Error('failed to get product list'))
          }
        })
      })
    },
    getCart (context) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`
      return new Promise(function (resolve, reject) {
        axios.get(api).then(response => {
          if (response.data.success) {
            context.commit('CART_REFRESH', response.data.data)
            resolve()
          } else {
            reject(Error('unable to get cart from server'))
          }
        })
      })
    },
    rmCartItem (context, itemId) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${itemId}`
      return new Promise(function (resolve, reject) {
        axios.delete(api).then(response => {
          if (response.data.success) {
            context.dispatch('getCart')
            resolve()
          } else {
            reject(Error(response.data.message))
          }
        })
      })
    },
    addCartItem (context, { productId, qty = 1 }) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`
      const key = 'product_id'
      const data = { [key]: productId, qty }
      axios.post(api, { data }).then(response => {
        if (response.data.success) {
          context.dispatch('getCart')
        }
      })
    },
    sign ({ commit }, status) {
      commit('ISLOGINED', status)
    },
    recordOrderId ({ commit }, orderId) {
      commit('ORDERIDSENT_RECORD', orderId)
    },
    addInfo ({ commit, dispatch }, { msg, status, timeStamp }) {
      const infoObj = { msg, status, timeStamp }
      commit('INFO_ADD', infoObj)
      setTimeout(() => dispatch('rmInfo', timeStamp), 5000)
    },
    rmInfo ({ commit }, timeStamp) {
      commit('INFO_DEL', timeStamp)
    }
  },
  mutations: {
    PRODUCTS (state, prodArr) {
      state.products = prodArr
    },
    CART_REFRESH (state, LoadedCart) {
      state.cart = LoadedCart
    },
    ISLOGINED (state, status) {
      state.isLogined = status
    },
    ORDERIDSENT_RECORD (state, orderId) {
      state.orderIdSent = orderId
    },
    INFO_DEL (state, timeStamp) {
      const delInd = state.popUpInfo.findIndex(el => {
        return el.timeStamp === timeStamp
      })
      state.popUpInfo.splice(delInd, 1)
    },
    INFO_ADD (state, infoObj) {
      state.popUpInfo.push(infoObj)
    }
  }
})
