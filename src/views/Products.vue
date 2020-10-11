<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-4 col-lg-3">
        <div class="mb-3">
          <nav class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{'active': type === 'all'}"
              @click.prevent="
                type = 'all'
                focusBrand = 'all'
              "
              >全部分類商品</a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{'active': type === subclass}"
              v-for="(subclass, ind) in subclassList"
              :key="ind"
              @click.prevent="
                type = subclass
                focusBrand = 'all'
              "
              >{{ subclass }}</a
            >
          </nav>
          <nav class="mt-3">
            <label for="brands" class="h4">商品品牌</label>
            <select name="brands" id="brands" class="form-control" v-model="focusBrand">
              <option value="" disabled selected>請選擇品牌</option>
              <option value="all">所有品牌</option>
              <option v-for="brand in brandList" :key="brand" :value="brand">
                {{ brand }}
              </option>
            </select>
          </nav>
          <nav class="mt-3">
            <div class="h4">標籤</div>
          </nav>
        </div>
      </div>
      <div class="col-md-8 col-lg-9">
        <section class="row no-gutters">
          <div
            v-for="prod in categorize"
            class="col-lg-4 col-md-6 d-flex"
            :key="prod.id"
          >
            <div class="card m-2 position-relative border border-primary">
              <img
                :src="prod.imageUrl"
                class="card-img-top w-75 mx-auto"
                alt=""
              />
              <ul class="icons list-unstyled d-flex flex-column">
                <li>
                  <button
                    type="button"
                    class="btn p-0 icon-btn text-primary"
                    @click="addToCart(prod.id)"
                  >
                    <font-awesome-icon
                      class="d-block"
                      icon="cart-plus"
                      size="2x"
                    />
                  </button>
                </li>
                <li>
                  <router-link
                    class="btn p-0 icon-btn text-primary"
                    :to="prod.id"
                    append
                  >
                    <font-awesome-icon
                      class="d-block"
                      icon="info-circle"
                      size="2x"
                    />
                  </router-link>
                </li>
              </ul>
              <div
                class="card-body px-3 pb-3 pt-1 d-flex flex-column justify-content-between"
              >
                <div>
                  <div class="product-brand">{{ prod.title.brand }}</div>
                  <div class="product-collection mb-0">
                    {{ prod.title.collection }}
                  </div>
                  <div class="product-type text-muted">
                    {{ prod.title.type }}
                  </div>
                </div>
                <em class="product-price">${{ prod.price }}</em>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { signs } from '../assets/js/mixins'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      focusBrand: 'all',
      type: 'all'
    }
  },
  mixins: [signs],
  methods: {
    addToCart (productId, qty = 1) {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store
        .dispatch('addCartItem', { productId, qty })
        .then(() => {
          vm.$store.dispatch('await', false)
        })
        .catch(() => vm.$store.dispatch('await', false))
    },
    routeToCategory (route) {
      return this.signs.find((el) => el.route === route).category
    }
  },
  computed: {
    categorize () {
      const vm = this
      const className = this.routeToCategory(vm.$route.params.category)
      return vm.products.filter(function (ele) {
        return (
          ele.category.class === className &&
          (vm.type === 'all' ? true : ele.category.type === vm.type) &&
          (vm.focusBrand === 'all' ? true : vm.focusBrand === ele.title.brand)
        )
      })
    },
    brandList () {
      const brands = []
      const vm = this
      const className = this.routeToCategory(vm.$route.params.category)
      this.products.forEach(function (el) {
        if (
          className === el.category.class &&
          (vm.type === 'all' ? true : vm.type === el.category.type) &&
          !(brands.length && brands.some((seen) => seen === el.title.brand))
        ) {
          brands.push(el.title.brand)
        }
      })
      return brands
    },
    subclassList () {
      const subclasses = []
      const className = this.routeToCategory(this.$route.params.category)
      this.products.forEach((el) => {
        if (
          className === el.category.class &&
          !(
            subclasses.length &&
            subclasses.some((seen) => seen === el.category.type)
          )
        ) {
          subclasses.push(el.category.type)
        }
      })
      return subclasses
    },
    ...mapState(['products'])
  },
  watch: {
    $route () {
      this.focusBrand = this.type = 'all'
    }
  }
}
</script>
