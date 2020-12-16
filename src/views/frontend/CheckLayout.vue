<template>
  <div class="p-nav" :class="{'bg-light': !isSwitched, 'bg-order-code': isSwitched}">
    <div class="progress progress-thin">
      <div class="progress-bar" role="progressbar" :style="{width: `${progress}%`}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isSwitched () {
      if (this.$route.path === '/check' || this.$route.path === '/check/customer') {
        return false
      } else {
        return true
      }
    },
    progress () {
      if (this.$route.path === '/check') {
        return 25
      } else if (this.$route.path === '/check/customer') {
        return 50
      } else if (this.$route.path.match(/\/check\/order/)) {
        return 75
      } else {
        return 100
      }
    }
  }
}
</script>
