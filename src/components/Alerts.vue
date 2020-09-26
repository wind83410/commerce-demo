<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="item in popUpInfo"
      :key="item.timeStamp"
    >
      {{ item.msg }}
      <button
        type="button"
        class="close"
        @click="removeMessage(item.timeStamp)"
        aria-label="Close"
      >
        <font-awesome-icon aria-hidden="true" icon="times" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeMessage (timeStamp) {
      this.$store.dispatch('rmInfo', timeStamp)
    }
  },
  computed: {
    popUpInfo () {
      return this.$store.state.popUpInfo
    }
  }
}
</script>
