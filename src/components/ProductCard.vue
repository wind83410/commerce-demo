<template>
  <div class="position-relative">
    <router-link
      tag="div"
      class="product-card card border border-primary h-100"
      :to="`/products/${categoryRoute}/${prod.id}`"
    >
      <div class="card-img-top overflow-hidden">
        <img
          :src="prod.imageUrl"
          class="product-card__img d-block w-75 mx-auto"
          alt=""
        />
      </div>
      <div
        class="card-body px-3 pb-3 pt-1 d-flex flex-column justify-content-between"
      >
        <div>
          <div class="product-info__brand">{{ prod.title.brand }}</div>
          <div class="product-info__collection mb-0">
            {{ prod.title.collection }}
          </div>
          <div class="product-info__type text-muted">
            {{ prod.title.type }}
          </div>
        </div>
        <em class="product-info__price">${{ prod.price }}</em>
      </div>
    </router-link>
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
        .catch(() => vm.$store.dispatch('await', false))
    }
  }
}
</script>
