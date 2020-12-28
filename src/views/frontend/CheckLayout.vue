<template>
  <div class="p-nav">
    <div class="progress progress-thin">
      <div class="progress-bar" role="progressbar" :style="{width: `${progress}%`}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
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
