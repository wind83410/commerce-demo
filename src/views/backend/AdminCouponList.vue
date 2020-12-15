<template>
  <div class="container">
    <div class="mt-4">
      <button class="btn btn-primary" @click="editModal(true)">
        新增優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">標題</th>
          <th scope="col">打折百分比</th>
          <th scope="col">到期日</th>
          <th scope="col">啟用狀態</th>
          <th scope="col">代碼</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coupon, ind) in coupons" :key="coupon.id">
          <th scope="row">{{ ind + 1 }}</th>
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}</td>
          <td>{{ msToDate(coupon.due_date) }}</td>
          <td>
            <span v-if="parseInt(coupon.is_enabled)" class="text-success"
              >啟用</span
            >
            <span v-else class="text-secondary">未啟用</span>
          </td>
          <td>{{ coupon.code }}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                class="btn btn-outline-primary"
                @click="editModal(false, coupon)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-primary"
                @click="deleteModal(coupon)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pages
      @change-page="getCoupons($event)"
      :current-page="pagination.current_page"
      :has-pre="pagination.has_pre"
      :has-next="pagination.has_next"
      :total-pages="pagination.total_pages"
    />
    <!-- start of edit modal -->
    <div
      class="modal fade"
      id="editCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editCouponModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white" id="editCouponModalLabel">
              更新優惠券
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
            <div class="form-group">
              <label for="couponName">名稱</label>
              <input
                type="text"
                class="form-control"
                id="couponName"
                v-model="tempCoupon.title"
                placeholder="請輸入優惠券名稱"
              />
            </div>
            <div class="form-group">
              <label for="couponExpiryDate">到期日</label>
              <input
                type="date"
                class="form-control"
                id="couponExpiryDate"
                v-model="tempCoupon.due_date"
              />
            </div>
            <div class="form-group">
              <label for="couponExpiryDate">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="couponExpiryDate"
                v-model="tempCoupon.code"
                placeholder="請輸入欲指定代碼"
              />
            </div>
            <div class="form-group">
              <label for="couponExpiryDate">折扣百分比</label>
              <input
                type="number"
                class="form-control"
                id="couponExpiryDate"
                v-model="tempCoupon.percent"
                placeholder="請輸入打折比率"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="isEnabled"
                v-model="tempCoupon.is_enabled"
                true-value="1"
                false-value="0"
              />
              <label class="form-check-label" for="isEnabled"> 是否啟用 </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">
              確定更新
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of edit modal -->
    <!-- Start of delete modal -->
    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="delCouponModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="delCouponModalLabel">
              <span>刪除產品</span>
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
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
            優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of delete modal -->
  </div>
</template>

<script>
import $ from 'jquery'
import Pages from '@/components/Pages'

export default {
  data () {
    return {
      pagination: {},
      isLoading: false,
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: ''
      },
      isNew: false
    }
  },
  components: {
    Pages
  },
  methods: {
    getCoupons (page = 1) {
      const vm = this
      vm.$store.dispatch('await', true)
      vm.$store.dispatch('getBsCoupons', page).then(obj => {
        vm.pagination = obj.pagination
        vm.$store.dispatch('await', false)
      })
    },
    deleteCoupon () {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon/${this.tempCoupon.id}`
      const vm = this
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          $('#delCouponModal').modal('hide')
          vm.getCoupons()
        } else {
          vm.$store.dispatch('addInfo', {
            msg: response.data.message,
            status: 'danger'
          })
        }
      }).catch(() => {
        vm.$store.dispatch('addInfo', {
          msg: '無法和伺服器連線 (XMLHttpRequest error)',
          status: 'danger'
        })
      })
    },
    updateCoupon () {
      const vm = this
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon`
      let method = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon/${vm.tempCoupon.id}`
        method = 'put'
      }
      const couponDate = { ...vm.tempCoupon }
      couponDate.due_date = vm.dateToMs(couponDate.due_date)
      vm.$http[method](api, { data: couponDate }).then(response => {
        if (response.data.success) {
          $('#editCouponModal').modal('hide')
          vm.getCoupons()
        } else {
          vm.$store.dispatch('addInfo', {
            msg: response.data.message,
            status: 'danger'
          })
        }
      }).catch(() => {
        vm.$store.dispatch('addInfo', {
          msg: '無法和伺服器連線 (XMLHttpRequest error)',
          status: 'danger'
        })
      })
    },
    editModal (isNew, coupon) {
      if (!isNew) {
        const couponDate = { ...coupon }
        couponDate.due_date = this.msToDate(couponDate.due_date)
        console.log('coupon', couponDate)
        this.tempCoupon = Object.assign({}, couponDate)
        this.isNew = false
      } else {
        this.tempCoupon = {}
        this.isNew = true
      }
      $('#editCouponModal').modal('show')
    },
    deleteModal (coupon) {
      this.tempCoupon = Object.assign({}, coupon)
      $('#delCouponModal').modal('show')
    },
    dateToMs (date) {
      return Math.floor(new Date(date).getTime())
    },
    msToDate (ms) {
      const dateObj = new Date(ms)
      const month = dateObj.getMonth() + 1 > 10 ? dateObj.getMonth() + 1 : `0${dateObj.getMonth() + 1}`
      return `${dateObj.getFullYear()}-${month}-${dateObj.getDate() >= 10 ? dateObj.getDate() : `0${dateObj.getDate()}`}`
    }
  },
  computed: {
    coupons () {
      return this.$store.state.bsCoupons
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
