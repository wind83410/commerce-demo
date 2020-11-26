<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-4 col-lg-3">
        <div class="mb-3">
          <nav class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{ active: type === 'all' }"
              @click.prevent="
                type = 'all'
                focusBrand = 'all'
              "
              >全部分類商品</a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{ active: type === subclass }"
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
            <select
              name="brands"
              id="brands"
              class="form-control"
              v-model="focusBrand"
            >
              <option value="" disabled selected>請選擇品牌</option>
              <option value="all">所有品牌</option>
              <option v-for="brand in brandList" :key="brand" :value="brand">
                {{ brand }}
              </option>
            </select>
          </nav>
          <nav class="mt-3">
            <div class="h4">標籤</div>
            <div class="btn-group-toggle">
              <label
                v-for="(tag, ind) in tagList"
                :key="ind"
                class="btn btn-sm btn-outline-primary mx-1"
                :class="{ active: isChecked(tag) }"
              >
                <input type="checkbox" v-model="checkedTags" :value="tag" />
                <font-awesome-icon icon="tags" />
                {{ $t(`tags.${tag}`) }}
              </label>
            </div>
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
            <ProductCard
              :prod="prod"
              :category-route="categoryToRoute(prod.category.class)"
              class="m-2"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { signs } from '@/assets/js/mixins'
import ProductCard from '@/components/ProductCard'

export default {
  data () {
    return {
      focusBrand: 'all',
      type: 'all',
      checkedTags: []
    }
  },
  mixins: [signs],
  methods: {
    routeToCategory (route) {
      return this.signs.find((el) => el.route === route).category
    },
    categoryToRoute (category) {
      return this.signs.find((el) => el.category === category).route
    },
    haveTag (prodTags) {
      if (!this.checkedTags.length) {
        return true // omit the check
      } else if (!prodTags) {
        return false
      } else {
        return (
          this.checkedTags.findIndex((el) =>
            prodTags.find((tag) => tag === el)
          ) !== -1
        )
      }
    },
    isChecked (tagToCheck) {
      return this.checkedTags.some((tag) => tag === tagToCheck)
    }
  },
  computed: {
    enabledProducts () {
      const className = this.routeToCategory(this.$route.params.category)
      return this.$store.state.products.filter(
        (el) => el.category.class === className && parseInt(el.is_enabled)
      )
    },
    categorize () {
      const vm = this
      return vm.enabledProducts.filter(function (ele) {
        return (
          vm.haveTag(ele.tags) &&
          (vm.type === 'all' ? true : ele.category.type === vm.type) &&
          (vm.focusBrand === 'all' ? true : vm.focusBrand === ele.title.brand)
        )
      })
    },
    brandList () {
      const brands = []
      const vm = this
      this.enabledProducts.forEach(function (el) {
        if (
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
      this.enabledProducts.forEach((el) => {
        if (
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
    tagList () {
      const allTags = []
      this.enabledProducts.forEach((el) => {
        if (el.tags) {
          if (!allTags.length) {
            allTags.push(...el.tags)
          } else {
            el.tags.forEach((prodTag) => {
              if (!allTags.some((seen) => seen === prodTag)) {
                allTags.push(prodTag)
              }
            })
          }
        }
      })
      return allTags
    }
  },
  watch: {
    $route () {
      this.focusBrand = this.type = 'all'
      this.checkedTags = []
    }
  },
  components: {
    ProductCard
  }
}
</script>
