<template>
  <div>
    <div class="container py-3">
      <div class="row justify-content-center" v-if="product">
        <div class="col-sm-5 col-md-4">
          <img
            class="img-fluid border rounded"
            :src="product.imageUrl"
            alt=""
          />
          <div class="mt-3">
            <ul class="list-unstyled d-flex mb-2 p-tags" v-if="product && product.tags">
              <li
                v-for="(tag, ind) in product.tags"
                :key="ind"
                class="mt-1 badge"
                :class="`badge-${tag}`"
              >
                {{ $t(`tags.${tag}`) }}
              </li>
            </ul>
            <div class="p-detail__name">
              <div
                class="p-detail__name--brand"
                v-text="product.title.brand"
              ></div>
              <div
                class="p-detail__name--collection"
                v-text="product.title.collection"
              ></div>
              <div
                class="p-detail__name--type"
                v-text="product.title.type"
              ></div>
            </div>
            <div class="p-detail__price mt-2">
              <div
                v-if="product.origin_price && product.origin_price != 0"
                class="p-detail__price--origin text-muted"
              >
                {{ `NT$${product.origin_price} / ${product.unit}` }}
              </div>
              <strong class="p-detail__price--sale">{{
                `NT$${product.price} / ${product.unit}`
              }}</strong>
            </div>
            <div class="form-group mt-2 p-qty">
              <label for="qty">數量</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-outline-primary"
                    @click="changeQty(qty--)"
                  >
                    -
                  </button>
                </div>
                <input id="qty" type="number" class="form-control" v-model="qty" />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary"
                    @click="changeQty(qty++)"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" @click="addToCart">
              加入購物車
            </button>
          </div>
        </div>
        <div class="col-sm-7 col-md-8">
          <div
            class="description mt-3 mt-md-0"
            v-html="mdRender(product.content)"
          ></div>
        </div>
      </div>
    </div>
    <div class="py-3 section-similar-items">
      <div class="container">
        <div class="d-flex mb-3 justify-content-between align-items-center">
          <div class="h4 mb-0 text-white">類似商品</div>
        </div>
        <ul
          id="similar-items"
          class="list-unstyled row no-gutters"
          v-if="randSimilarItems.length"
        >
          <li
            v-for="prod in randSimilarItems"
            :key="prod.id"
            class="col-md-6 col-lg-3"
          >
            <ProductCardMini
              :prod="prod"
              :category-route="categoryToRoute(prod.category.class)"
              class="m-2"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'
import { signs } from '@/assets/js/mixins'
import ProductCardMini from '@/components/ProductCardMini'

const classMap = {
  table: 'table'
}
const bindings = Object.keys(classMap).map((key) => ({
  type: 'output',
  regex: new RegExp(`<${key}(.*)>`, 'g'),
  replace: `<${key} class="${classMap[key]}">`
}))
const CONVERTER = new showdown.Converter({
  tables: true,
  extensions: [...bindings]
})

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
        productId: vm.$route.params.itemId,
        qty: vm.qty,
        acc: true
      }
      vm.$store.dispatch('await', true)
      vm.$store
        .dispatch('addCartItem', data)
        .then(() => {
          vm.$store.dispatch('await', false)
        })
        .catch(() => vm.$store.dispatch('await', false))
    },
    changeQty () {
      if (this.qty < 1) {
        this.qty = 1
      }
    },
    mdRender (mdText) {
      return CONVERTER.makeHtml(mdText)
    },
    categoryToRoute: category => signs.find((el) => el.category === category).route
  },
  computed: {
    product () {
      const vm = this
      return vm.$store.state.products.find((el) => {
        return el.id === vm.$route.params.itemId
      })
    },
    itemId () {
      return this.$route.params.itemId
    },
    randSimilarItems () {
      const vm = this
      const copy = vm.$store.state.products.filter((el) => {
        return (
          el.category.class === vm.product.category.class &&
          el.id !== vm.$route.params.itemId
        )
      })
      const similarItems = []
      if (copy.length) {
        for (let i = 0; i < 4 && copy.length !== 0; i++) {
          const selInd = Math.floor(Math.random() * copy.length)
          similarItems.push(copy.splice(selInd, 1)[0])
        }
      }
      return similarItems
    }
  },
  components: {
    ProductCardMini
  }
}
</script>
