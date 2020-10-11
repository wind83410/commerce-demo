import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
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
            context.dispatch('addInfo', {
              msg: response.data.message,
              status: 'danger'
            })
            reject(Error(response.data.message))
          }
        }).catch(() => {
          context.dispatch('addInfo', {
            msg: '無法和伺服器連線 (XMLHttpRequest error)',
            status: 'danger'
          })
          reject(Error('無法和伺服器連線 (XMLHttpRequest error)'))
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
            context.dispatch('addInfo', {
              msg: response.data.message,
              status: 'danger'
            })
            reject(Error(response.data.message))
          }
        }).catch(() => {
          context.dispatch('addInfo', {
            msg: '無法和伺服器連線 (XMLHttpRequest error)',
            status: 'danger'
          })
          reject(Error('無法和伺服器連線 (XMLHttpRequest error)'))
        })
      })
    },
    rmCartItem (context, itemId) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${itemId}`
      return axios.delete(api).then(response => {
        if (response.data.success) {
          context.dispatch('getCart')
        } else {
          context.dispatch('addInfo', {
            msg: response.data.message,
            status: 'danger'
          })
        }
      }).catch(() => {
        context.dispatch('addInfo', {
          msg: '無法和伺服器連線 (XMLHttpRequest error)',
          status: 'danger'
        })
      })
    },
    addCartItem (context, { productId, qty = 1 }) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`
      const duplicate = context.getters.GET_DUPLICATED_PROD(productId)
      const key = 'product_id'
      const data = { [key]: productId, qty }
      if (duplicate) {
        let isFailed = false
        axios.delete(api + `/${duplicate.id}`).then(response => {
          if (!response.data.success) {
            context.dispatch('addInfo', {
              msg: response.data.message,
              status: 'danger'
            })
            isFailed = true
          }
        }).catch(() => {
          context.dispatch('addInfo', {
            msg: '無法和伺服器連線 (XMLHttpRequest error)',
            status: 'danger'
          })
          isFailed = true
        })
        if (isFailed) {
          return 0
        }
        data.qty += duplicate.qty
      }
      return axios.post(api, { data }).then(response => {
        if (response.data.success) {
          context.dispatch('getCart')
        } else {
          context.dispatch('addInfo', {
            msg: response.data.message,
            status: 'danger'
          })
        }
      }).catch(() => {
        context.dispatch('addInfo', {
          msg: '無法和伺服器連線 (XMLHttpRequest error)',
          status: 'danger'
        })
      })
    },
    sign ({ commit }, status) {
      commit('ISLOGINED', status)
    },
    await ({ commit }, status) {
      commit('ISLOADING', status)
    },
    recordOrderId ({ commit }, orderId) {
      commit('ORDERIDSENT_RECORD', orderId)
    },
    addInfo ({ commit, dispatch }, { msg, status }) {
      const timeStamp = Math.floor(new Date() / 1000)
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
    ISLOADING (state, status) {
      state.isLoading = status
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
  },
  getters: {
    GET_DUPLICATED_PROD: state => id => state.cart.carts.find(el => el.product_id === id)
  }
})
