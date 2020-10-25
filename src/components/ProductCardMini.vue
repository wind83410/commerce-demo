<template>
  <router-link class="product-card-mini d-block" :to="`/products/${categoryRoute}/${prod.id}`">
    <img class="product-card-mini__img img-fluid d-block mx-auto" :src="prod.imageUrl" alt="">
    <em class="product-card-mini__price">$ {{ prod.price }}</em>
  </router-link>
</template>

<script>
export default {
  props: ['prod', 'categoryRoute']
}
</script>
