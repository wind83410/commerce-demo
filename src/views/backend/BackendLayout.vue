<template>
  <div>
    <Loading :active.sync="isLoading" />
    <Alerts />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="layout-nav__title navbar-brand" to="/">MEOWOO</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-lg-between" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{'active': $route.path === '/admin/product-list'}">
              <router-link class="nav-link" to="/admin/product-list">
                產品列表 <span class="sr-only" v-if="$route.path === '/admin/product-list'">(current)</span>
              </router-link>
            </li>
            <li class="nav-item" :class="{'active': $route.path === '/admin/coupons'}">
              <router-link class="nav-link" to="/admin/coupons">
                優惠券列表 <span class="sr-only" v-if="$route.path === '/admin/coupons'">(current)</span>
              </router-link>
            </li>
            <li class="nav-item" :class="{'active': $route.path === '/admin/orders'}">
              <router-link class="nav-link" to="/admin/orders">
                訂單列表 <span class="sr-only" v-if="$route.path === '/admin/orders'">(current)</span>
              </router-link>
            </li>
          </ul>
          <button type="button" class="btn btn-outline-light" @click="logout">登出</button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Alerts from '@/components/Alerts'
import Loading from 'vue-loading-overlay'

export default {
  methods: {
    logout () {
      const vm = this
      const api = `${process.env.VUE_APP_API_PATH}/logout`
      vm.$store.dispatch('await', true)
      vm.$http
        .post(api)
        .then((response) => {
          if (response.data.success) {
            vm.$store.dispatch('sign', false)
            vm.$store.dispatch('addInfo', {
              msg: '成功登出',
              status: 'success'
            })
            vm.$router.push('/')
          }
          vm.$store.dispatch('await', false)
        })
        .catch(() => {
          vm.loginAlert = '無法和伺服器連線，請稍後再試'
          vm.$store.dispatch('await', false)
        })
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  components: {
    Alerts,
    Loading
  }
}
</script>
