<template>
  <div class="product-card card position-relative border border-primary">
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
    <router-link
      class="product-link"
      :to="`/products/${categoryRoute}/${prod.id}`"
    >
      <img
        :src="prod.imageUrl"
        class="card-img-top product-link__img d-block w-75 mx-auto"
        alt=""
      />
    </router-link>
    <ul class="icons list-unstyled d-flex flex-column">
      <li>
        <button
          type="button"
          class="btn p-0 icon-btn text-primary"
          @click="addToCart(prod.id)"
        >
          <font-awesome-icon class="d-block" icon="cart-plus" size="2x" />
        </button>
      </li>
    </ul>
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
        .then(() => {
          vm.$store.dispatch('await', false)
        })
        .catch(() => vm.$store.dispatch('await', false))
    }
  }
}
</script>
