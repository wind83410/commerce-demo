<template>
  <div class="p-nav">
    <img src="~@/assets/images/products_banner.jpg" class="img-fluid d-block" alt="">
    <nav aria-label="breadcrumb" class="product--breadcrumb">
      <div class="container">
        <ol class="breadcrumb bg-transparent px-0 mb-0">
          <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item" :class="{'active': node.last}" v-for="(node, ind) in linkMap('breadcrumb', this.$route.params.category, this.$route.params.type)" :key="ind">
            <router-link v-if="!node.last" :to="node.path">{{node.name}}</router-link>
            <span v-else>{{node.name}}</span>
          </li>
        </ol>
      </div>
    </nav>
    <section class="bg-light">
      <router-view />
    </section>
  </div>
</template>

<script>
import { twEngTable } from '../assets/js/mixins'
export default {
  mixins: [twEngTable]
}
</script>
