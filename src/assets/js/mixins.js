
export const addToCart = {
  methods: {
    addToCart (productsId, qty = 1) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`
      const data = { product_id: productsId, qty }
      const vm = this
      this.$http.post(api, { data }).then(response => {
        if (response.data.success) {
          vm.$emit('cart-edited')
        }
      })
    }
  }
}

export const getOrder = {
  methods: {
    getOrder (orderId = '') {
      if (orderId !== '') {
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${orderId}`
        const vm = this
        return new Promise(function (resolve, reject) {
          vm.$http.get(api).then(response => {
            if (response.data.success) {
              resolve(response.data.order)
            } else {
              reject(Error(response.data.message))
            }
          })
        })
      }
    }
  }
}

export const twEngTable = {
  data () {
    return {
      twEngTable: {
        className: [
          {
            zhTw: '貓主食',
            eng: 'staple_food'
          },
          {
            zhTw: '貓零食',
            eng: 'treats'
          }
        ],
        typeName: [
          {
            zhTw: '冷凍乾燥主食餐',
            eng: 'freeze-dried'
          },
          {
            zhTw: '貓飼料/乾糧',
            eng: 'dry_food'
          },
          {
            zhTw: '貓罐頭/餐盒',
            eng: 'wet_food'
          },
          {
            zhTw: '肉泥',
            eng: 'lickable_treats'
          },
          {
            zhTw: '夾心餅',
            eng: 'rolls'
          }
        ]
      }
    }
  },
  methods: {
    linkMap (outputMode, className, type = 'all') {
      const allModes = ['route', 'list', 'breadcrumb']
      if (!allModes.some(el => el === outputMode)) {
        throw Error('Output mode error: should be "route," "list" or "breadcrumb"')
      }
      const inputMode = outputMode === 'route' ? 'zhTw' : 'eng'
      const theClass = this.twEngTable.className.find(function (el) {
        return el[inputMode] === className
      })
      const theType = type === 'all' ? type : this.twEngTable.typeName.find(function (el) {
        return el[inputMode] === type
      })
      switch (outputMode) {
        case 'route':
          return `${theClass.eng}/${theType === 'all' ? theType : theType.eng}`
        case 'list': {
          const obj = {}
          obj.className = theClass.zhTw
          obj.typeName = theType === 'all' ? theType : theType.zhTw
          return obj
        }
        case 'breadcrumb': {
          const arr = [theClass, theType]
          const routes = []
          arr.reduce(function (acc, cur, ind) {
            if (typeof cur !== 'string') {
              const concat = acc + `/${cur.eng}`
              routes.push({
                path: concat + '/all',
                name: arr[ind].zhTw
              })
              return concat
            } else {
              return acc
            }
          }, '/products')
          routes[routes.length - 1].last = true
          return routes
        }
      }
    }
  }
}
