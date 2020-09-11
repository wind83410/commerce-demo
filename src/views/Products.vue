<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-3">
        <nav class="mt-2 border rounded bg-white p-3">
          <h4>商品品牌</h4>
          <ul class="list-unstyled d-none d-md-block">
            <li><a href="#" @click.prevent="focusBrand = 'all'">所有品牌</a></li>
            <li v-for="brand in brandList" :key="brand"><a href="#" @click.prevent="focusBrand = brand">{{brand}}</a></li>
          </ul>
          <select name="brands" class="form-control d-md-none" v-model="focusBrand">
            <option value="" disabled selected>請選擇品牌</option>
            <option value="all">所有品牌</option>
            <option v-for="brand in brandList" :key="brand" :value="brand">{{brand}}</option>
          </select>
        </nav>
      </div>
      <div class="col-md-9">
        <section class="row no-gutters">
          <div v-for="prod in categorize" class="col-lg-4 col-md-6 d-flex" :key="prod.id">
            <div class="card m-2 position-relative border border-primary">
              <img :src="prod.imageUrl" class="card-img-top w-75 mx-auto" alt="">
              <ul class="icons list-unstyled d-flex flex-column">
                <li>
                  <button class="btn p-0 icon-btn text-primary" @click="addToCart(prod.id)">
                    <font-awesome-icon class="d-block" icon="cart-plus" size="2x" />
                  </button>
                </li>
                <li>
                  <router-link class="btn p-0 icon-btn text-primary" :to="prod.id" append>
                    <font-awesome-icon class="d-block" icon="info-circle" size="2x" />
                  </router-link>
                </li>
              </ul>
              <div class="card-body px-3 pb-3 pt-1 d-flex flex-column justify-content-between">
                <div>
                  <div class="product-brand">{{prod.title.brand}}</div>
                  <div class="product-collection mb-0">{{prod.title.collection}}</div>
                  <div class="product-type text-muted">{{prod.title.type}}</div>
                </div>
                <em class="product-price">${{prod.price}}</em>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { twEngTable } from '../assets/js/mixins'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      focusBrand: 'all'
    }
  },
  mixins: [twEngTable],
  methods: {
    addToCart (productId, qty = 1) {
      const vm = this
      this.$store.dispatch('await', true)
      this.$store.dispatch('addCartItem', { productId, qty }).then(() => {
        vm.$store.dispatch('await', false)
      })
    }
  },
  computed: {
    categorize () {
      const obj = this.linkMap('list', this.$route.params.category, this.$route.params.type)
      const vm = this
      return this.products.filter(function (ele) {
        return ele.category.class === obj.className &&
               (obj.typeName === 'all' ? true : ele.category.type === obj.typeName) &&
               (vm.focusBrand === 'all' ? true : vm.focusBrand === ele.title.brand)
      })
    },
    brandList () {
      const brands = []
      const { className, typeName } = this.linkMap('list', this.$route.params.category, this.$route.params.type)
      this.products.forEach(function (el) {
        if ((className === el.category.class) &&
            (typeName === 'all' ? true : typeName === el.category.type) &&
            !(brands.length && brands.some(seen => seen === el.title.brand))) {
          brands.push(el.title.brand)
        }
      })
      return brands
    },
    ...mapState(['products'])
  },
  watch: {
    $route () {
      this.focusBrand = 'all'
    }
  }
}
</script>
