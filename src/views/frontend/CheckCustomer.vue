<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-md-7">
        <h4>
          <span class="mr-1">
            <font-awesome-icon icon="user" /> </span
          >收件人資料
        </h4>
        <p>星號（*）部分必填</p>
        <validation-observer
          tag="form"
          class="mb-3"
          @reset="clearFields"
          @submit.prevent="sendOrder"
          v-slot="{ invalid }"
          ref="form"
        >
          <validation-provider
            tag="div"
            class="form-group"
            name="full name"
            rules="required"
            v-slot="{ classes, errors }"
          >
            <label for="name">全名 <span class="text-danger">*</span></label>
            <input
              v-model="data.user.name"
              type="text"
              id="name"
              :class="classes"
              class="form-control"
              placeholder="請輸入全名"
            />
            <div class="invalid-feedback">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider
            tag="div"
            class="form-group"
            name="email"
            rules="required|email"
            v-slot="{ classes, errors }"
          >
            <label for="email">電子信箱 <span class="text-danger">*</span></label>
            <input
              v-model="data.user.email"
              type="email"
              id="email"
              :class="classes"
              class="form-control"
              placeholder="請輸入可聯絡的電子信箱"
            />
            <div class="invalid-feedback">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider
            tag="div"
            class="form-group"
            name="tel"
            rules="required"
            v-slot="{ classes, errors }"
          >
            <label for="tel">電話 <span class="text-danger">*</span></label>
            <input
              v-model="data.user.tel"
              type="tel"
              id="tel"
              :class="classes"
              class="form-control"
              placeholder="請輸入手機或市話"
            />
            <div class="invalid-feedback">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider
            tag="div"
            class="form-group"
            name="address"
            rules="required"
            v-slot="{ classes, errors }"
          >
            <label for="address">地址 <span class="text-danger">*</span></label>
            <input
              v-model="data.user.address"
              type="text"
              id="address"
              :class="classes"
              class="form-control"
              placeholder="請輸入地址"
            />
            <div class="invalid-feedback">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider
            tag="div"
            class="form-group"
          >
            <label for="message">留言</label>
            <textarea
              v-model="data.message"
              type="message"
              id="message"
              :class="classes"
              class="form-control"
            ></textarea>
          </validation-provider>
          <div class="d-flex justify-content-end">
            <button type="reset" class="btn btn-outline-dark order-btn">取消</button>
            <button type="submit" class="btn btn-primary ml-2 order-btn" :disabled="invalid">確定</button>
          </div>
        </validation-observer>
      </div>
      <div class="col-md-5">
        <section class="card my-3 my-md-0">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <span>預計購入商品</span>
            <span class="text-primary h4">{{
              `NT$ ${cart.final_total.toFixed(0)}`
            }}</span>
          </div>
          <div class="card-body">
            <div
              class="d-flex justify-content-between"
              v-for="item in cart.carts"
              :key="item.id"
            >
              <img
                :src="item.product.imageUrl"
                alt=""
                class="mx-auto"
                height="100"
              />
              <div class="d-flex w-50">
                <table class="table table-sm table-borderless">
                  <tr>
                    <td>單價</td>
                    <td class="text-right">{{ item.product.price }}</td>
                  </tr>
                  <tr>
                    <td>數量</td>
                    <td class="text-right">
                      {{ `${item.qty} ${item.product.unit}` }}
                    </td>
                  </tr>
                  <tr>
                    <td>小計</td>
                    <td class="text-right">{{ item.final_total }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { mapState } from 'vuex'

extend('required', required)
extend('email', email)

export default {
  data () {
    return {
      data: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    clearFields () {
      const vm = this
      for (const key in vm.data.user) {
        vm.data.user[key] = ''
      }
      vm.$nextTick(() => {
        vm.$refs.form.reset()
      })
    },
    sendOrder () {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$http
        .post(api, { data: vm.data })
        .then((response) => {
          if (response.data.success) {
            vm.$store.dispatch('recordOrderId', response.data.orderId)
            vm.$store.dispatch('getCart')
            vm.$store.dispatch('await', false)
            vm.$router.push({ path: `/check/order/${response.data.orderId}` })
          } else {
            vm.$store.dispatch('await', false)
            vm.$store.dispatch('addInfo', {
              msg: response.data.message,
              status: 'danger'
            })
          }
        })
        .catch(() => {
          vm.$store.dispatch('await', false)
          vm.$store.dispatch('addInfo', {
            msg: '無法和伺服器連線 (XMLHttpRequest error)',
            status: 'danger'
          })
        })
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    ...mapState(['isLogined'])
  },
  watch: {
    isLogined () {
      this.$router.push('/check')
    }
  }
}
</script>
