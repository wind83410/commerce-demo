<template>
  <div class="p-add card bg-transparent position-relative border-0 h-100">
    <template v-if="prod.tags">
      <ul class="list-unstyled product-tags d-flex flex-column">
        <li
          v-for="(tag, ind) in prod.tags"
          :key="ind"
          class="badge mb-1"
          :class="`badge-${tag}`"
        >
          {{ $t(`tags.${tag}`) }}
        </li>
      </ul>
    </template>
    <router-link class="p-add__link bg-white rounded" :to="`/products/${categoryRoute}/${prod.id}`">
      <img
        :src="prod.imageUrl"
        class="p-add__link--img card-img-top d-block w-75 mx-auto"
        alt=""
      />
    </router-link>
    <ul class="icons list-unstyled d-flex flex-column">
      <li>
        <button
          type="button"
          class="btn p-0 icon-btn"
          @click="addToCart(prod.id)"
        >
          <font-awesome-icon class="d-block" icon="cart-plus" size="2x" />
        </button>
      </li>
    </ul>
    <div
      class="card-body px-0 pb-0 pt-1 d-flex flex-column justify-content-between"
    >
      <div>
        <span class="badge badge-dark">{{ prod.title.brand }}</span>
        {{ `${prod.title.collection} ${prod.title.type}` }}
      </div>
      <em class="p-add__price">${{ prod.price }}</em>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prod', 'categoryRoute'],
  methods: {
    addToCart (productId, qty = 1) {
      const vm = this
      const acc = true
      vm.$store.dispatch('await', true)
      vm.$store
        .dispatch('addCartItem', { productId, qty, acc })
        // if successful, the state 'await' will set to false by the signal sent from the
        // component where this component is used
        .catch(() => vm.$store.dispatch('await', false))
    }
  }
}
</script>
