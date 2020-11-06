<template>
  <div class="container">
    <section class="mt-3 d-flex justify-content-between">
      <div class="d-flex btn-group" role="group">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn dropdown-toggle"
            id="check-uncheck"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon icon="check-square" />
          </button>
          <div class="dropdown-menu" aria-labelledby="check-uncheck">
            <a class="dropdown-item" href="#" @click.prevent="checkAll">全選</a>
            <a class="dropdown-item" href="#" @click.prevent="uncheckAll">全不選</a>
          </div>
        </div>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn"
            id="status-change"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon icon="tags" />
          </button>
          <div class="dropdown-menu" aria-labelledby="status-change">
            <a class="dropdown-item" href="#" @click.prevent="enable(true)">啟用</a>
            <a class="dropdown-item" href="#" @click.prevent="enable(false)">不啟用</a>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="editModal(true)">
        新增產品
      </button>
    </section>
    <table class="table mt-3">
      <tr>
        <th></th>
        <th>商品名稱</th>
        <th>原價</th>
        <th>售價</th>
        <th>啟用狀態</th>
        <th>功能</th>
      </tr>
      <tr v-for="(item, key) in bsProducts" :key="key">
        <td>
          <input
            type="checkbox"
            class="product-checkbox"
            :value="stringize(item)"
            v-model="chosenProducts"
          />
        </td>
        <td>{{ item | concat }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td>
          <span v-if="parseInt(item.is_enabled)" class="text-success"
            >啟用</span
          >
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-outline-primary">刪除</button>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="editModal(false, item)"
            >
              編輯
            </button>
          </div>
        </td>
      </tr>
    </table>
    <nav class="mt-3 d-flex" aria-label="Page navigation">
      <ul class="pagination ml-auto">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="pageBack"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="num in pages"
          :key="num"
          class="page-item"
          :class="{ active: page === num }"
          @click.prevent="page = num"
        >
          <a class="page-link" href="#"> {{ num }} </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="pageNext"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- Start of edit modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <!-- <i v-if="status.fileUploading" class="fas fa-spinner fa-spin"></i> -->
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    @change="uploadPic"
                    ref="files"
                  />
                </div>
                <img :src="tempProduct.imageUrl" class="img-fluid" alt />
              </div>
              <div class="col-sm-8">
                <div class="form-row form-group">
                  <div class="col-4"><label for="brand">品牌名</label></div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="brand"
                      v-model="tempProduct.title.brand"
                    />
                  </div>
                </div>
                <div class="form-row form-group">
                  <div class="col-4">
                    <label for="collection">商品系列名稱</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="collection"
                      v-model="tempProduct.title.collection"
                    />
                  </div>
                </div>
                <div class="form-row form-group">
                  <div class="col-4">
                    <label for="type">系列商品款式</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="type"
                      v-model="tempProduct.title.type"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="category">主分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category.class"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="type">子分類</label>
                    <input
                      type="sub-category"
                      class="form-control"
                      id="sub-category"
                      v-model="tempProduct.category.type"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-4"><legend class="col-form-label pt-0">主商品或加購商品</legend></div>
                  <div class="col-8">
                    <div class="form-row">
                      <div class="col-6">
                        <div class="form-check">
                          <input type="radio" name="isMain" value="main" id="isMain__main" class="form-check-input" v-model="tempProduct.isMain">
                          <label for="isMain__main" class="form-check-label">主商品</label>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-check">
                          <input type="radio" name="isMain" value="add" id="isMain__add" class="form-check-input" v-model="tempProduct.isMain">
                          <label for="isMain__add">加購商品</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-4">
                    <legend class="col-form-label pt-0">標籤</legend>
                  </div>
                  <div class="col-8">
                    <div class="form-row">
                      <div class="col-4">
                        <div class="form-check">
                          <input type="checkbox" name="tags" id="tags__bestseller" value="bestseller" class="form-check-input" v-model="tempProduct.tags">
                          <label for="tags__bestseller">熱賣</label>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-check">
                          <input type="checkbox" name="tags" id="tags__picked" value="picked" class="form-check-input" v-model="tempProduct.tags">
                          <label for="tags__picked">精選</label>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-check">
                          <input type="checkbox" name="tags" id="tags__new" value="new" class="form-check-input" v-model="tempProduct.tags">
                          <label for="tags__new">新品</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of edit modal -->
  </div>
</template>

<script>
import $ from 'jquery'
import cloneDeep from 'lodash/cloneDeep'

export default {
  data () {
    return {
      page: 1,
      tempProduct: {
        title: {
          brand: '',
          collection: '',
          type: ''
        },
        category: '',
        origin_price: 0,
        price: 0,
        unit: '',
        description: '',
        content: '',
        is_enabled: '0',
        imageUrl: '',
        tags: [],
        isMain: ''
      },
      isNew: false,
      fileUploading: false,
      chosenProducts: []
    }
  },
  methods: {
    pageBack () {
      if (this.page - 1 > 0) {
        this.page--
      }
    },
    pageNext () {
      if (this.page + 1 <= this.pages) {
        this.page++
      }
    },
    editModal (isNew, item) {
      if (!isNew) {
        const obj = Object.assign({ tags: [] }, cloneDeep(item)) // 後端不會儲存空陣列屬性
        this.tempProduct = cloneDeep(obj)
        this.isNew = false
      } else {
        this.tempProduct = { // 保持資料結構
          title: {
            brand: '',
            collection: '',
            type: ''
          },
          category: '',
          origin_price: 0,
          price: 0,
          unit: '',
          description: '',
          content: '',
          is_enabled: '0',
          imageUrl: '',
          tags: [],
          isMain: ''
        }
        this.isNew = true
      }
      $('#productModal').modal('show')
      $('#customFile').val('')
    },
    updateProduct () {
      const vm = this
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product`
      let command = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product/${vm.tempProduct.id}`
        command = 'put'
      }
      this.$http[command](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide')
          vm.$store.dispatch('await', true)
          vm.$store
            .dispatch('getBsProducts')
            .then(() => vm.$store.dispatch('getProducts'))
            .then(() => vm.$store.dispatch('await', false))
        } else {
          alert('更新失敗，請稍後再試')
        }
      })
    },
    uploadPic (event) {
      const pic = event.srcElement.files[0]
      if (pic) {
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/upload`
        const vm = this
        const formData = new FormData()
        formData.append('file-to-upload', pic)
        vm.fileUploading = true
        this.$http
          .post(api, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
            console.log(response.data)
            if (response.data.success) {
              vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
              vm.fileUploading = false
            }
          })
      }
    },
    stringize (item) {
      return JSON.stringify(item)
    },
    checkAll () {
      const vm = this
      $('input.product-checkbox:not(:checked)').each(function () {
        vm.chosenProducts.push($(this).val())
      })
    },
    uncheckAll () {
      const vm = this
      $('input.product-checkbox:checked').each(function () {
        const jsonVal = $(this).val()
        const ind = vm.chosenProducts.findIndex(el => el === jsonVal)
        if (ind !== -1) {
          vm.chosenProducts.splice(ind, 1)
        }
      })
    },
    enable (setting = true) {
      const vm = this
      const promises = []
      vm.$store.dispatch('await', true)
      $('input.product-checkbox:checked').each(function () {
        const jsonVal = $(this).val()
        const prod = JSON.parse(jsonVal)
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product/${prod.id}`
        prod.is_enabled = setting ? '1' : '0'
        promises.push(vm.$http.put(api, { data: prod }).then(response => {
          if (response.data.success) {
            const ind = vm.chosenProducts.findIndex(el => el === jsonVal)
            vm.chosenProducts.splice(ind, 1)
            return 'success'
          }
        }))
      })
      Promise.allSettled(promises).then(async function (val) {
        await vm.$store.dispatch('getBsProducts')
        vm.$store.dispatch('await', false)
      })
    },
    editStructure () {
      const vm = this
      const promises = []
      vm.$store.dispatch('await', true)
      vm.$store.state.bsProducts.forEach(el => {
        const obj = cloneDeep(el)
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product/${obj.id}`
        Object.assign(obj, {
          tags: []
        })
        promises.push(vm.$http.put(api, { data: obj }).then(response => {
          if (response.data.success) {
            return 'success'
          }
        }))
      })
      Promise.allSettled(promises).then(async function () {
        await vm.$store.dispatch('getBsProducts')
        vm.$store.dispatch('await', false)
      })
    }
  },
  filters: {
    concat (item) {
      return `${item.title.brand} ${item.title.collection} ${item.title.type}`
    }
  },
  computed: {
    bsProducts () {
      return this.$store.state.bsProducts.slice(
        (this.page - 1) * 10,
        this.page * 10
      )
    },
    pages () {
      return Math.ceil(Object.keys(this.$store.state.bsProducts).length / 10)
    }
  },
  mounted () {
    const vm = this
    if (!this.bsProducts.length) {
      vm.$store.dispatch('await', true)
      vm.$store.dispatch('getBsProducts').then(() => {
        vm.$store.dispatch('await', false)
      })
    }
  }
}
</script>
