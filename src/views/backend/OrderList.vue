<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">購買時間</th>
          <th scope="col">Email</th>
          <th scope="col">購買品項</th>
          <th scope="col">應付金額</th>
          <th scope="col">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.create_at | msToDate }}</td>
          <td>{{ order.user.email }}</td>
          <td>
            <div
              class="d-flex justify-content-between"
              v-for="prd in order.products"
              :key="prd.id"
            >
              <span>{{ prd.product.title | titleShow }}</span>
              <span>{{ prd.qty }} {{ prd.product.unit }}</span>
            </div>
          </td>
          <td class="text-right">{{ order.total | formatCurrency }}</td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                :class="{'btn-success': order.is_paid, 'btn-danger': !order.is_paid}"
                type="button"
                id="dropdown-paid-state"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span v-if="order.is_paid">已付</span>
                <span v-else>未付</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-paid-state">
                <a class="dropdown-item" href="#" v-if="!order.is_paid" @click="pay(order, true)">已付</a>
                <a class="dropdown-item" href="#" v-else @click="pay(order, false)">未付</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pages
      @change-page="getCoupons($event)"
      :current-page="pagination.current_page"
      :has-pre="pagination.has_pre"
      :has-next="pagination.has_next"
      :total-pages="pagination.total_pages"
    />
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import Pages from '@/components/Pages'

export default {
  data () {
    return {
      pagination: {},
      tempOrder: {
        create_at: -1,
        id: '',
        is_paid: false,
        message: '',
        paid_date: -1,
        payment_method: '',
        products: [],
        total: 0,
        user: {
          address: '',
          email: '',
          name: '',
          tel: ''
        },
        num: 0
      }
    }
  },
  components: {
    Pages
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store.dispatch('getBsOrders', page).then(pagination => {
        vm.pagination = pagination
        vm.$store.dispatch('await', false)
      })
    },
    pay (order, isPaid = false) {
      const vm = this
      const orderCopy = cloneDeep(order)
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/order/${orderCopy.id}`
      orderCopy.is_paid = isPaid
      vm.$store.dispatch('await', true)
      vm.$http.put(api, { data: orderCopy }).then(async function (response) {
        if (response.data.success) {
          await vm.$store.dispatch('getBsOrders')
        } else {
          vm.$store.dispatch('addInfo', {
            msg: response.data.message,
            status: 'danger'
          })
        }
        vm.$store.dispatch('await', false)
      }).catch(() => {
        vm.$store.dispatch('addInfo', {
          msg: '更新訂單失敗',
          status: 'danger'
        })
      })
    }
  },
  computed: {
    orders () {
      return this.$store.state.bsOrders
    }
  },
  filters: {
    msToDate (sec) {
      const dateObj = new Date(sec * 1000)
      const month = dateObj.getMonth() + 1 > 10 ? dateObj.getMonth() + 1 : `0${dateObj.getMonth() + 1}`
      const date = dateObj.getDate() > 10 ? dateObj.getDate() : `0${dateObj.getDate()}`
      return `${dateObj.getFullYear()}-${month}-${date}`
    },
    formatCurrency (n) {
      var converter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'TWD'
      })
      return converter.format(n)
    },
    titleShow (titleInfo) {
      switch (typeof titleInfo) {
        case 'string':
          return titleInfo
        case 'object':
          return `${titleInfo.brand} ${titleInfo.collection} ${titleInfo.type}`
      }
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
