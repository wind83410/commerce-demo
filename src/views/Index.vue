<template>
  <div>
    <header class="position-relative">
      <!-- Banner -->
      <ul class="list-unstyled my-slider mb-0">
        <li><div class="w-100 carousel-img" :style="{background: `url(\'${require('../assets/images/index_banner_carousel_1.jpg')}\') 30% center/cover`}"></div></li>
        <li><div class="w-100 carousel-img" :style="{background: `url(\'${require('../assets/images/index_banner_carousel_2.jpg')}\') 30% center/cover`}"></div></li>
        <li><div class="w-100 carousel-img" :style="{background: `url(\'${require('../assets/images/index_banner_carousel_3.jpg')}\') 30% center/cover`}"></div></li>
      </ul>
      <div
        class="slogan container position-absolute d-flex align-items-center"
      >
        <div class="slogan__content">
          <h2 class="display-4 text-white">貓好，人好</h2>
          <p class="h4 mb-4 text-white">和貓咪一起生活</p>
          <router-link to="/" class="btn btn-lg btn-primary">開始探索</router-link>
        </div>
      </div>
    </header>
    <section class="section section-copywriting">
      <!-- copywriting -->
      <div class="container">
        <h3 class="section-title">喵屋，貓奴的百寶箱</h3>
        <ul class="list-unstyled row features">
          <li class="col-md-4">
            <div class="mb-2 text-primary">
              <font-awesome-icon
                :icon="['fas', 'fish']"
                size="5x"
              />
            </div>
            <p>
              不同食材製成的各色零食，有肉泥有乾飼料，幫奴才抓住貓咪的胃；針對特定營養需求的主食，讓貓咪吃得開心也兼顧健康。
            </p>
          </li>
          <li class="col-md-4">
            <div class="mb-2 text-primary">
              <font-awesome-icon
                :icon="['fas', 'couch']"
                size="5x"
              />
            </div>
            <p>
              色彩和樣式多樣的貓咪家具和玩具，和貓奴們一起找出貓咪的喜好。小到逗貓棒，大到貓跳台，硬板軟墊各式材質五顏六色任君挑選。
            </p>
          </li>
          <li class="col-md-4">
            <div class="mb-2 text-primary">
              <font-awesome-icon
                :icon="['fas', 'home']"
                size="5x"
              />
            </div>
            <p>
              居家友善的貓咪照護用品，讓貓住得舒服貓奴也方便照顧。防噴砂的貓砂盆、一剪即斷的指甲刀、定時自動餵食機等。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section section-new-items">
      <div class="container">
        <div class="mx-auto">
          <h4>新商品搶先看</h4>
          <nav class="position-relative">
            <div class="slide-control">
              <button type="button" class="slide-left">
                <font-awesome-icon :icon="['fas', 'chevron-left']" size="3x" />
              </button>
              <button type="button" class="slide-right">
                <font-awesome-icon :icon="['fas', 'chevron-right']" size="3x" />
              </button>
            </div>
            <ul
              v-if="recomProd.length"
              class="list-unstyled new-item-list d-flex"
            >
              <li v-for="prod in recomProd" :key="prod.id">
                <div class="card position-relative border border-primary h-100">
                  <img
                    :src="prod.imageUrl"
                    class="card-img-top w-75 mx-auto"
                    alt=""
                  />
                  <div class="icons">
                    <button
                      type="button"
                      class="btn p-0 icon-btn"
                      @click="addToCart(prod.id)"
                    >
                      <font-awesome-icon
                        class="d-block"
                        icon="cart-plus"
                        size="2x"
                      />
                    </button>
                  </div>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="section section-recommand text-white">
      <!-- Recommandation from customers -->
      <div class="container">
        <h3 class="section-title">來自貓奴們的推薦</h3>
        <ul class="row list-unstyled">
          <li class="col-md-4">
            <blockquote class="blockquote">
              <p>
                喵屋推薦的貓咪用品是真的好用！尤其是快剪指甲刀讓我下刀快狠準，再也不必煩惱貓咪扭來扭去了。
              </p>
              <footer class="blockquote-footer text-right">
                Some customer
              </footer>
            </blockquote>
          </li>
          <li class="col-md-4">
            <blockquote class="blockquote">
              <p>
                家裡的貓咪年事已高，吃不能再像以前一樣不忌口了。幸好在貓屋找到低鈉高鈣主食罐，讓貓咪吃的開心健康也不用擔心。
              </p>
              <footer class="blockquote-footer text-right">
                Some customer
              </footer>
            </blockquote>
          </li>
          <li class="col-md-4">
            <blockquote class="blockquote">
              <p>
                最近養的三隻小貓活力充沛，三不五時就央求我陪牠們玩，所以買過的逗貓棒都很短命，但喵屋賣的飛天鳥逗貓棒用了三個月還很耐用！是目前最長壽的！
              </p>
              <footer class="blockquote-footer text-right">
                Some customer
              </footer>
            </blockquote>
          </li>
        </ul>
      </div>
    </section>
    <section class="coupon-evt bg-light">
      <div class="container coupon-evt__info">
        <div class="row">
          <div class="col-md-6">
            <img
              class="img-fluid"
              src="~@/assets/images/coupon_sideImg.jpg"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <div
              class="h-100 py-4 d-flex flex-column justify-content-center text-center"
            >
              <div class="mb-4 align-self-center coupon-evt__info--title">
                一同建立人貓生活
              </div>
              <p>
                貓屋邀請您一起合作，讓貓咪逐漸融入飼主的生活，享受那些可愛又可憎的大小事。
                現在起只要輸入期間限定優惠碼
                <strong>MayCatsBeWithYou</strong>，即可享有九折優惠。
              </p>
              <router-link
                to="/products/treats/all"
                class="btn btn-primary btn-lg align-self-center"
                >開始探索</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      recomProd: []
    }
  },
  methods: {
    randomRecom (prodArr) {
      if (prodArr.length > 0) {
        for (let i = 0; i < 8; i++) {
          const selInd = Math.floor(Math.random() * prodArr.length)
          this.recomProd.push(prodArr.splice(selInd, 1)[0])
        }
        this.$nextTick(function () {
          tns({
            container: '.new-item-list',
            gutter: 15,
            controlsContainer: '.slide-control',
            navPosition: 'bottom',
            responsive: {
              768: {
                items: 3
              },
              992: {
                items: 4
              }
            }
          })
        })
      }
    },
    addToCart (productId, qty = 1) {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store
        .dispatch('addCartItem', { productId, qty })
        .then(() => {
          vm.$store.dispatch('await', false)
        })
        .catch(() => vm.$store.dispatch('await', false))
    }
  },
  computed: mapState(['products']),
  watch: {
    products () {
      const arr = [...this.products]
      this.randomRecom(arr)
      this.$store.dispatch('await', false)
    }
  },
  mounted () {
    this.$store.dispatch('await', true)
    if (this.products.length) {
      const arr = [...this.products]
      this.randomRecom(arr)
      this.$store.dispatch('await', false)
    }
    tns({
      container: '.my-slider',
      mode: 'gallery',
      autoplay: true,
      speed: 1000,
      controls: false,
      nav: false,
      autoplayButtonOutput: false
    })
  }
}
</script>
