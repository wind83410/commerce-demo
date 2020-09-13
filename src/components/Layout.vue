<template>
    <div class="d-flex flex-column" style="height: 100vh">
        <loading :active.sync="isLoading"></loading>
        <div class="layout-nav-mobile bg-white d-md-none position-fixed px-3">
          <div class="member mb-3 d-flex align-items-center">
            <button v-if="!isLogined" class="btn btn-outline-primary btn-login-mobile" data-toggle="modal" data-target="#login-modal">
              <font-awesome-icon icon="sign-in-alt" size="3x" />
            </button>
            <button v-else class="btn btn-outline-primary btn-login-mobile" @click="logout">
              <font-awesome-icon icon="sign-out-alt" size="3x" />
            </button>
            <div class="member-info p-2">
              <div v-if ="!isLogined" class="h6 mb-0">歡迎光臨！您還沒有登入喔！</div>
              <div v-else>管理員</div>
            </div>
          </div>
          <template v-if="navTree['貓主食']">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(val, key) in navTree" :key="key">
                <div class="card-header p-2" :id="`heading-${linkMap('route', key).replace(/\//g, '')}`">
                  <h2 class="mb-0 d-flex">
                    <a href="#" class="btn" data-toggle="collapse" aria-expanded="true" aria-controls="collapseExample" :data-target="`#${linkMap('route', key).replace(/\//g, '')}`">
                      <font-awesome-icon icon="plus" />
                      <span class="sr-only">Toggle Collapse</span>
                    </a>
                    <router-link :to="`/products/${linkMap('route', key)}`" class="btn btn-link w-100 text-left">{{key}}</router-link>
                  </h2>
                </div>
                <ul :id="linkMap('route', key).replace(/\//g, '')" class="collapse list-unstyled mb-0" :aria-labelledby="`heading-${linkMap('route', key).replace(/\//g, '')}`" data-parent="#accordionExample">
                  <li v-for="type in val" :key="key+type"><router-link class="d-block px-3 py-2" :to="`/products/${linkMap('route', key, type)}`">{{type}}</router-link></li>
                </ul>
              </div>
            </div>
          </template>
        </div>
        <nav class="layout-nav navbar navbar-expand-md navbar-light w-100 position-fixed" :class="{'bg-white': !isIndex}">
            <div class="container">
                <div class="d-flex align-items-center">
                  <router-link class="navbar-brand" to="/">喵屋</router-link>
                  <div class="position-relative">
                    <button class="btn btn-nav btn-nav__icon cart-list-trigger" :disabled="$route.path.includes('/check')"><font-awesome-icon icon="shopping-cart" size="lg" /></button>
                    <span v-if="cart.carts.length" class="badge badge-pill badge-primary prod-in-cart position-absolute">{{cart.carts.length}}</span>
                  </div>
                  <div class="d-none d-md-block">
                    <button v-if="!isLogined" class="btn btn-nav btn-nav__icon" data-toggle="modal" data-target="#login-modal"><font-awesome-icon icon="user" size="lg" /></button>
                    <div v-else class="d-flex align-items-center">
                      <font-awesome-icon icon="user-circle" size="lg" />管理員
                      <button class="btn btn-nav btn-nav__icon" @click="logout">
                        <font-awesome-icon icon="sign-out-alt" size="lg" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-none d-md-block">
                  <template v-if="navTree['貓主食']">
                    <div class="btn-group" v-for="(val, key) in navTree" :key="key">
                      <router-link :to="`/products/${linkMap('route', key)}`" class="btn btn-nav btn-nav__category">{{key}}</router-link>
                      <a href="#" class="btn btn-nav btn-nav__icon dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                      </a>
                      <div class="dropdown-menu">
                        <router-link class="dropdown-item" :to="`/products/${linkMap('route', key, type)}`" v-for="type in val" :key="key+type">{{type}}</router-link>
                      </div>
                    </div>
                  </template>
                </div>
                <button class="navbar-toggler" type="button" aria-controls="layout-nav-mobile" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <alerts />
        <router-view class="flex-grow-1" />
        <footer class="container py-2 d-flex justify-content-center" id="anouncement">
            <p class="px-2 mb-0 text-center border border-top-0 border-bottom-0">此商店純屬杜撰，所有素材皆擷取自網路</p>
        </footer>
        <button class="btn btn-primary back-to-top js-fade-out" @click="scrollToTop">
          <font-awesome-icon icon="arrow-up" size="lg" />
        </button>
        <section class="cart-list d-flex flex-column position-fixed bg-light">
          <div class="d-flex m-1">
            <router-link to="/check" class="btn btn-primary w-100">去結帳</router-link>
            <button class="btn cart-list-trigger">
              <font-awesome-icon icon="angle-left" size="lg" />
            </button>
          </div>
          <div class="table-wrap">
            <table class="table table-sm" v-if="cart.carts.length">
              <thead>
                <th></th>
                <th>名稱</th>
                <th>#</th>
                <th>小計</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td><button class="btn btn-outline-primary" @click="removeItem(item.id)"><font-awesome-icon icon="trash-alt" /></button></td>
                  <td>
                    <div>
                      <div class="text-muted">{{item.product.title.brand}}</div>
                      <div>
                        {{item.product.title.collection}}
                        <span v-if="item.coupon" class="badge badge-discount">{{`${item.coupon.percent} %`}}</span>
                      </div>
                      <div class="text-muted">{{item.product.title.type}}</div>
                    </div>
                  </td>
                  <td>{{item.qty}}</td>
                  <td class="text-right">{{item.final_total | round }}</td>
                </tr>
              </tbody>
            </table>
            <p v-else class="text-center">購物車還沒有東西，去逛逛吧！</p>
          </div>
        </section>
        <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="login-modal-label" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content p-3">
              <div class="h3 text-center">喵屋會員</div>
              <div class="alert alert-danger" v-if="loginAlert">
                {{ loginAlert }}
              </div>
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="account">帳號</label>
                  <input type="text" id="account" v-model="userData.username" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="password">密碼</label>
                  <input type="password" id="password" v-model="userData.password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-block btn-primary">登入</button>
              </form>
            </div>
          </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
import $ from 'jquery'
import { twEngTable } from '../assets/js/mixins'
import alerts from './Alerts'
import loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'index',
  components: {
    alerts,
    loading
  },
  data () {
    return {
      isIndex: true,
      userData: {
        username: '',
        password: ''
      },
      loginAlert: ''
    }
  },
  mixins: [twEngTable],
  filters: {
    round (num, digits = 1) {
      return num.toFixed(digits)
    }
  },
  methods: {
    removeItem (productId) {
      const vm = this
      vm.$store.dispatch('await', true)
      this.$store.dispatch('rmCartItem', productId).then(() => vm.$store.dispatch('await', false))
    },
    login () {
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/admin/signIn`
      this.$http.post(api, this.userData).then(response => {
        if (response.data.success) {
          vm.$store.dispatch('sign', true)
          vm.userData.account = vm.userData.password = ''
          $('#login-modal').modal('hide')
        } else {
          vm.loginAlert = response.data.message
        }
      }).catch(() => {
        vm.loginAlert = '無法和伺服器連線，請稍後再試'
      })
    },
    logout () {
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/logout`
      this.$store.dispatch('await', true)
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.$store.dispatch('sign', false)
          vm.$store.dispatch('addInfo', {
            msg: '成功登出',
            status: 'success'
          })
        }
        this.$store.dispatch('await', false)
      }).catch(() => {
        vm.loginAlert = '無法和伺服器連線，請稍後再試'
        vm.$store.dispatch('await', false)
      })
    },
    cartSlide () {
      $('.cart-list-trigger').on('click', function () {
        $('.cart-list').toggleClass('slide-in')
      })
    },
    navSlide () {
      $('.navbar-toggler').click(function () {
        $('.layout-nav-mobile').toggleClass('slide-in')
      })
    },
    colorSwitch () {
      const navHeight = $('.layout-nav').height()
      const navTop = $('.layout-nav').offset().top
      if (navTop + navHeight / 2 >= navHeight) {
        $('.layout-nav').addClass('bg-white')
      } else {
        $('.layout-nav').removeClass('bg-white')
      }
    },
    scrollToTop () {
      $('html, body').animate({
        scrollTop: 0
      }, 700)
    },
    bottomHit () {
      const ftTop = $('#anouncement').offset().top
      const vpHeight = $(window).height()
      const vpScrollTop = $(window).scrollTop()
      if (vpHeight + vpScrollTop >= ftTop) {
        $('.js-fade-out').fadeIn(300, function () {
          $(this).removeClass('js-fade-out').addClass('js-fade-in')
        })
      } else {
        $('.back-to-top').fadeOut(300, function () {
          $(this).removeClass('js-fade-in').addClass('js-fade-out')
        })
      }
    }
  },
  computed: {
    navTree () {
      const tree = {}
      this.$store.state.products.forEach(function (el) {
        const cal = el.category.class
        const type = el.category.type
        if (Object.keys(tree).some(el => el === cal)) {
          if (!tree[cal].some(el => el === type)) {
            tree[cal].push(type)
          }
        } else {
          tree[cal] = []
          tree[cal].push(type)
        }
      })
      return tree
    },
    cart () {
      return this.$store.state.cart
    },
    isLogined () {
      return this.$store.state.isLogined
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  mounted () {
    const vm = this
    if (this.$route.path === '/') {
      $(window).on('scroll', this.colorSwitch)
    }
    $(window).on('scroll', this.bottomHit)
    $('#login-modal').on('hidden.bs.modal', function () {
      vm.loginAlert = ''
      vm.userData.username = vm.userDate.password = ''
    })
    this.cartSlide()
    this.navSlide()
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCart')
  },
  watch: {
    $route (to) {
      $('html, body').scrollTop(0)
      if (to.path === '/') {
        $(window).on('scroll', this.colorSwitch)
        this.isIndex = true
      } else {
        $(window).off('scroll', this.colorSwitch)
        this.isIndex = false
      }
      if (to.path === '/check') { $('.cart-list').removeClass('slide-in') }
      $('.layout-nav-mobile').removeClass('slide-in')
    }
  }
}
</script>
