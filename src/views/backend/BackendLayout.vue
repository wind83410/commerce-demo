<template>
  <div>
    <Loading :active.sync="isLoading" />
    <Alerts />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">貓屋</router-link>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{'active': $route.path === '/admin'}">
              <router-link class="nav-link" to="/admin">
                儀表板 <span class="sr-only" v-if="$route.path === '/admin'">(current)</span>
              </router-link>
            </li>
            <li class="nav-item" :class="{'active': $route.path === '/admin/product-list'}">
              <router-link class="nav-link" to="/admin/product-list">
                產品列表 <span class="sr-only" v-if="$route.path === '/admin/product-list'">(current)</span>
              </router-link>
            </li>
          </ul>
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
