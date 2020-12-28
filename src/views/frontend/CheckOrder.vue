<template>
  <div class="container py-3 py-md-0 my-md-3 position-relative">
    <div class="row">
      <div class="col-md-6 side-image__img"></div>
    </div>
    <div class="row justify-content-end">
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-center">
          <h3 class="order-info-title rounded text-center py-2 px-3 mb-3">
            <font-awesome-icon icon="flag" class="mr-2" />訂單成立
          </h3>
          <table class="table w-75">
            <tbody>
              <tr>
                <td>訂單 ID</td>
                <td>{{ order.id }}</td>
              </tr>
              <tr>
                <td>姓名</td>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <td>電話</td>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <td class="no-break">應付金額</td>
                <td>{{ order.total }}</td>
              </tr>
              <tr>
                <td class="no-break">付款狀態</td>
                <td>
                  <span v-if="order.is_paid">已付</span>
                  <span v-else class="text-danger">未付</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary btn-block" @click="pay">
            立刻支付
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        id: '',
        is_paid: false,
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        }
      }
    }
  },
  computed: {
    isLogined () {
      return this.$store.state.isLogined
    }
  },
  methods: {
    getOrder (orderId = '') {
      if (orderId !== '') {
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${orderId}`
        const vm = this
        return vm.$http
          .get(api)
          .then(response => {
            if (response.data.success) {
              return response.data.order
            } else {
              vm.$store.dispatch('addInfo', {
                msg: response.data.message,
                status: 'danger'
              })
            }
          })
          .catch(() => {
            vm.$store.dispatch('addInfo', {
              msg: '無法和伺服器連線 (XMLRequest error)',
              status: 'danger'
            })
          })
      }
    },
    pay () {
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/pay/${vm.order.id}`
      vm.$http
        .post(api)
        .then(response => {
          if (response.data.success) {
            vm.$router.push(`/check/paid/${vm.order.id}`)
          } else {
            vm.$store.dispatch('addInfo', {
              msg: response.data.message,
              status: 'danger'
            })
          }
        })
        .catch(() => {
          vm.$store.dispatch('addInfo', {
            msg: '無法和伺服器連線 (XMLRequest error)',
            status: 'danger'
          })
        })
    }
  },
  watch: {
    isLogined () {
      this.$router.push('/')
    }
  },
  mounted () {
    const vm = this
    vm.$store.dispatch('await', true)
    vm.getOrder(vm.$store.state.orderIdSent).then(order => {
      vm.$store.dispatch('await', false)
      vm.order = order
    })
  }
}
</script>
