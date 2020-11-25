<template>
  <router-link
    class="product-card-mini d-block"
    :to="`/products/${categoryRoute}/${prod.id}`"
  >
    <ul class="list-unstyled product-tags" v-if="prod.tags">
      <li
        v-for="(tag, ind) in prod.tags"
        :key="`${tag}-${ind}`"
        class="badge"
        :class="`badge-${tag}`"
      >
        {{ $t(`tags.${tag}`) }}
      </li>
    </ul>
    <img
      class="product-card-mini__img img-fluid d-block mx-auto"
      :src="prod.imageUrl"
      alt=""
    />
    <em class="product-card-mini__price">$ {{ prod.price }}</em>
  </router-link>
</template>

<script>
export default {
  props: ['prod', 'categoryRoute']
}
</script>
