<template>
  <div class="d-flex flex-column justify-content-center h-100">
    <h3 class="text-center is-paid-message" :class="{ 'paid': isPaid }">
      <font-awesome-icon icon="flag" class="mr-2" /> {{ text }}
    </h3>
    <router-link to="/products/staple-food" tag="button" class="btn btn-primary align-self-center">回去逛逛</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '查詢訂單中...',
      isPaid: false
    }
  },
  methods: {
    checkIfPaid () {
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${vm.$route.params.orderId}`
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          vm.text = response.data.order.is_paid ? '已完成付款' : '尚未付款'
          vm.isPaid = true
        } else {
          vm.$store.dispatch('addInfo', {
            msg: response.data.message,
            status: 'danger'
          })
        }
      }).catch(() => {
        vm.$store.dispatch('addInfo', {
          msg: '無法和伺服器連線 (XMLRequest error)',
          status: 'danger'
        })
      })
    }
  },
  mounted () {
    this.checkIfPaid()
  }
}
</script>
