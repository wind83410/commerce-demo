<template>
  <div class="d-flex flex-column align-items-center">
    <h3 class="text-center">
      <font-awesome-icon icon="flag" class="mr-2" /> {{ text }}
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '查詢訂單中...'
    }
  },
  methods: {
    checkIfPaid () {
      let isPaid
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${vm.$route.params.orderId}`
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          isPaid = response.data.is_paid
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
      return isPaid
    }
  }
}
</script>
