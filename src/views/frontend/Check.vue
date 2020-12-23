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
              <th scope="col" class="no-break">單價</th>
              <th scope="col" class="d-none d-md-table-cell">#</th>
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
                <div class="input-group adjust-qty d-flex d-md-none mt-2">
                  <div class="input-group-prepend">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="buffer(item.product.id, '+')"
                    >
                      <font-awesome-icon icon="plus" />
                    </button>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    :class="item.product.id"
                    min="1"
                    :value="item.qty"
                    @input="buffer(item.product.id)"
                    @blur="modify"
                  />
                  <div class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="buffer(item.product.id, '-')"
                    >
                      <font-awesome-icon icon="minus" />
                    </button>
                  </div>
                </div>
              </td>
              <td>{{ item.product.price }}</td>
              <td class="d-none d-md-table-cell">
                <div class="input-group adjust-qty">
                  <div class="input-group-prepend">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="buffer(item.product.id, '+')"
                    >
                      <font-awesome-icon icon="plus" />
                    </button>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    :class="item.product.id"
                    min="1"
                    :value="item.qty"
                    @input="buffer(item.product.id)"
                    @blur="modify"
                  />
                  <div class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="buffer(item.product.id, '-')"
                    >
                      <font-awesome-icon icon="minus" />
                    </button>
                  </div>
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
        <section class="my-3 p-2 section-additional-items rounded">
          <div class="d-flex mb-3 justify-content-between align-items-center">
            <div class="h4 ml-2 mb-0">順便看看</div>
            <div class="slide-control">
              <button
                type="button"
                class="slide-left btn btn-outline-primary mr-2"
              >
                <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg" />
              </button>
              <button type="button" class="slide-right btn btn-outline-primary">
                <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg" />
              </button>
            </div>
          </div>
          <ul id="additional-items" class="list-unstyled d-flex">
            <li v-for="prod in randAddItems" :key="prod.id">
              <Additional
                :prod="prod"
                :category-route="categoryToRoute(prod.category.class)"
                class="p-2"
              />
            </li>
          </ul>
        </section>
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
            <router-link
              tag="button"
              to="/check/customer"
              class="btn btn-primary w-100"
              :disabled="cart.carts.length == 0"
            >
              確定結帳
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { signs } from '@/assets/js/mixins'
import { tns } from 'tiny-slider/src/tiny-slider'
import Additional from '@/components/Additional'

export default {
  data () {
    return {
      couponCode: '',
      tempQty: {
        qty: 0,
        productId: '',
        inputEl: null
      }
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    randAddItems () {
      const copy = this.$store.state.products.filter(function (el) {
        return el.price <= 150
      })
      const addItems = []
      if (copy.length) {
        for (let i = 0; i < 4 && copy.length !== 0; i++) {
          const selInd = Math.floor(Math.random() * copy.length)
          addItems.push(copy.splice(selInd, 1)[0])
        }
      }
      return addItems
    }
  },
  methods: {
    applyCoupon () {
      const vm = this
      const COUPON = { code: vm.couponCode }
      const API = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`
      vm.$store.dispatch('await', true)
      vm.$http
        .post(API, { data: COUPON })
        .then(response => {
          vm.$store.dispatch('addInfo', {
            msg: response.data.message,
            status: response.data.success ? 'info' : 'danger'
          })
          if (response.data.success) {
            vm.$store.dispatch('getCart')
            vm.couponCode = ''
          }
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
      vm.$store.dispatch('rmCartItem', prodId)
    },
    modify () {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store
        .dispatch('addCartItem', {
          productId: vm.tempQty.productId,
          qty: vm.tempQty.qty
        })
        .then(() => {
          vm.tempQty.qty = 0
          vm.tempQty.productId = ''
        })
    },
    buffer (productId, mode) {
      const input = $(`.${productId}`).filter(':visible')[0]
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
          this.tempQty.qty = input.valueAsNumber <= 0 ? 1 : input.valueAsNumber
          break
      }
    },
    categoryToRoute: category =>
      signs.find(el => el.category === category).route
  },
  watch: {
    'randAddItems.length' (cur, pre) {
      if (cur > pre) {
        this.$nextTick(function () {
          tns({
            container: '#additional-items',
            controlsContainer: '.slide-control',
            navPosition: 'bottom',
            responsive: {
              768: {
                items: 2
              },
              992: {
                items: 4
              }
            }
          })
        })
      }
    }
  },
  mounted () {
    if (this.randAddItems.length) {
      this.$nextTick(function () {
        tns({
          container: '#additional-items',
          controlsContainer: '.slide-control',
          navPosition: 'bottom',
          responsive: {
            768: {
              items: 2
            },
            992: {
              items: 4
            }
          }
        })
      })
    }
  },
  components: {
    Additional
  }
}
</script>
