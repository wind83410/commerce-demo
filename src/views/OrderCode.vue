<template>
  <div class="pt-3">
    <h3 class="text-center"><font-awesome-icon icon="flag" class="mr-2" />訂單成立</h3>
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <div class="pb-3">
        <table class="table table-transparent">
          <tbody>
            <tr>
              <td>訂單 ID</td>
              <td>{{order.id}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{order.user.name}}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{order.user.email}}</td>
            </tr>
            <tr>
              <td>電話</td>
              <td>{{order.user.tel}}</td>
            </tr>
            <tr>
              <td class="no-break">應付金額</td>
              <td>{{order.total}}</td>
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
        <router-link to="/products/treats/all" class="btn btn-primary btn-block">回去逛</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrder } from '../assets/js/mixins'

export default {
  mixins: [getOrder],
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
  watch: {
    isLogined () {
      this.$router.push('/')
    }
  },
  mounted () {
    const vm = this
    this.getOrder(this.$store.state.orderIdSent).then(order => {
      vm.order = order
    })
  }
}
</script>
