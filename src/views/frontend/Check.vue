<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-md-8 col-lg-9">
        <h4>
          <span class="mr-1">
            <font-awesome-icon icon="shopping-cart" />購物車明細
          </span>
        </h4>
        <table v-if="cart.carts.length" class="table table-sm mt-4">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" class="d-none d-sm-table-cell"></th>
              <th scope="col">名稱</th>
              <th scope="col" class="d-none d-md-table-cell">單價</th>
              <th scope="col">#</th>
              <th scope="col" class="text-right">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="rmCartItem(item.id)"
                >
                  <font-awesome-icon icon="trash-alt" />
                </button>
              </td>
              <td class="d-none d-sm-table-cell">
                <img :src="item.product.imageUrl" width="60" />
              </td>
              <td>
                {{
                  `${item.product.title.brand} ${item.product.title.collection} ${item.product.title.type}`
                }}
                <span v-if="item.coupon" class="badge badge-discount">{{
                  `${item.coupon.percent} %`
                }}</span>
              </td>
              <td class="d-none d-md-table-cell">{{ item.product.price }}</td>
              <td>
                <div class="adjust-qty d-flex flex-column">
                  <button type="button" class="adjust-qty__add btn btn-primary" @click="buffer(item.product.id, '+')">+</button>
                  <input type="number" class="adjust-qty__input form-control" :id="item.product.id" min=1 :value="item.qty" @input="buffer(item.product.id)" @blur="modify">
                  <button type="button" class="adjust-qty__subtract btn btn-secondary" @click="buffer(item.product.id, '-')">-</button>
                </div>
              </td>
              <td class="text-right">{{ item.final_total.toFixed(1) }}</td>
            </tr>
          </tbody>
        </table>
        <div class="alert alert-info" v-if="cart.carts.length == 0">
          購物車裡還沒有東西！<router-link
            to="/products/staple-food"
            class="alert-link"
            >去逛逛吧！</router-link
          >
        </div>
      </div>
      <div class="col-md-4 col-lg-3">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title bill-title text-center">應付金額</h5>
            <table class="table table-borderless bill-detail mb-0">
              <tbody>
                <tr>
                  <td>總計</td>
                  <td>{{ cart.total }}</td>
                </tr>
                <tr>
                  <td>折扣</td>
                  <td>
                    {{ cart.total - cart.final_total.toFixed(0) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>實付</td>
                  <td>{{ cart.final_total.toFixed(0) }}</td>
                </tr>
              </tfoot>
            </table>
            <div class="form-group mb-0 mt-3">
              <label for="coupon">輸入優惠券</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="couponCode"
                  required
                />
                <div class="input-group-append">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="applyCoupon"
                    :disabled="cart.carts.length == 0"
                  >
                    送出
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer bg-white border-top-0 pt-0">
            <button
              type="button"
              @click.prevent="toRecipient"
              class="btn btn-primary w-100"
              :disabled="cart.carts.length == 0"
            >
              確定結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      couponCode: '',
      tempQty: {
        qty: 0,
        productId: ''
      }
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  methods: {
    toRecipient () {
      if (this.$store.state.isLogined && this.cart.carts.length) {
        this.$router.push('/check/recipient')
      } else {
        $('#login-modal').modal('show')
      }
    },
    applyCoupon () {
      const vm = this
      const COUPON = { code: vm.couponCode }
      const API = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`
      vm.$store.dispatch('await', true)
      vm.$http
        .post(API, { data: COUPON })
        .then((response) => {
          vm.$store.dispatch('addInfo', {
            msg: response.data.message,
            status: response.data.success ? 'info' : 'danger'
          })
          if (response.data.success) {
            vm.$store.dispatch('getCart')
            vm.couponCode = ''
          }
          vm.$store.dispatch('await', false)
        })
        .catch(() => {
          vm.$store.dispatch('addInfo', {
            msg: '無法和伺服器連線 (XMLHttpRequest error)',
            status: 'danger'
          })
        })
    },
    rmCartItem (prodId) {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store.dispatch('rmCartItem', prodId).then(() => {
        vm.$store.dispatch('await', false)
      })
    },
    modify () {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store.dispatch('addCartItem', {
        productId: this.tempQty.productId,
        qty: this.tempQty.qty
      }).then(() => {
        vm.$store.dispatch('await', false)
        vm.tempQty.qty = 0
        vm.tempQty.productId = ''
      })
    },
    buffer (productId, mode) {
      const input = $(`#${productId}`)[0]
      this.tempQty.productId = productId
      switch (mode) {
        case '+':
          this.tempQty.qty = input.valueAsNumber + 1
          input.value = this.tempQty.qty
          this.modify()
          break
        case '-':
          if (input.valueAsNumber - 1 > 0) {
            this.tempQty.qty = input.valueAsNumber - 1
            input.value = this.tempQty.qty
            this.modify()
          }
          break
        default:
          this.tempQty.qty = input.valueAsNumber
          break
      }
    }
  }
}
</script>
