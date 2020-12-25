<template>
  <div class="p-nav">
    <header class="container py-3 mb-3 my-sm-3 p-banner d-flex flex-column justify-content-center align-items-start" :class="bannerBg">
      <div class="p-banner__text-wrap p-3">
        <div class="p-banner__category">{{ sign.category }}</div>
        <div class="p-banner__description">{{ sign.description }}</div>
      </div>
    </header>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import { signs } from '@/assets/js/mixins'

export default {
  computed: {
    bannerBg () {
      if (!this.sign) {
        return ''
      } else {
        return `bg-${this.$route.params.category}`
      }
    },
    sign () {
      const vm = this
      return signs.find(el => el.route === vm.$route.params.category)
    }
  },
  mounted () {
    const vm = this
    const sign = signs.find(el => el.route === vm.$route.params.category)
    if (!sign) {
      vm.$router.push('/')
      vm.$store.dispatch('addInfo', {
        msg: '找不到此分類',
        status: 'info'
      })
    }
  }
}
</script>
