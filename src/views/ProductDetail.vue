<template>
  <div class="container py-3">
    <div class="row justify-content-center" v-if="product">
      <div class="col-sm-5 col-md-4">
        <img class="img-fluid border rounded" :src="product.imageUrl" alt="">
      </div>
      <div class="col-sm-6 col-md-5">
        <div class="pt-3 pt-md-0">
          <div class="p-detail__name">
            <div class="p-detail__name--brand text-primary" v-text="product.title.brand"></div>
            <div class="p-detail__name--collection" v-text="product.title.collection"></div>
            <div class="p-detail__name--type" v-text="product.title.type"></div>
          </div>
          <div class="p-detail__price mt-2">
            <div class="p-detail__price--origin text-muted"> {{`NT$${product.origin_price} / ${product.unit}`}} </div>
            <strong class="p-detail__price--sale">{{`NT$${product.price} / ${product.unit}`}}</strong>
          </div>
          <div class="form-group mt-2 p-qty">
            <label for="qty">數量</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary" @click="changeQty(qty--)">-</button>
              </div>
              <input type="number" class="form-control" v-model="qty">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" @click="changeQty(qty++)">+</button>
              </div>
            </div>
          </div>
          <button class="btn btn-primary" @click="addToCart">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')()

export default {
  data () {
    return {
      qty: 1
    }
  },
  methods: {
    addToCart () {
      const vm = this
      const data = {
        productId: this.$route.params.itemId,
        qty: this.qty
      }
      this.$store.dispatch('await', true)
      this.$store.dispatch('addCartItem', data).then(() => {
        vm.$store.dispatch('await', false)
      })
    },
    changeQty () {
      if (this.qty < 1) { this.qty = 1 }
    },
    mdRender (mdText) {
      return md.render(mdText)
    }
  },
  computed: {
    product () {
      const vm = this
      return this.$store.state.products.find((el) => {
        return el.id === vm.$route.params.itemId
      })
    }
  }
}
</script>
