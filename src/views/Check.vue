<template>
  <div class="bg-light">
    <div class="container pt-3">
      <div class="row">
        <div class="col-md-9">
          <h4><span class="mr-1"><font-awesome-icon icon="shopping-cart" /></span>購物車明細</h4>
          <table v-if="cart.carts" class="table table-sm mt-4">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" class="d-none d-sm-table-cell"></th>
                <th scope="col">名稱</th>
                <th scope="col" class="d-none d-md-table-cell">單價</th>
                <th scope="col">#</th>
                <th scope="col" class="text-right">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td><button class="btn btn-sm btn-outline-primary"><font-awesome-icon icon="trash-alt" /></button></td>
                <td class="d-none d-sm-table-cell">
                  <img :src="item.product.imageUrl" width="60">
                </td>
                <td>
                  <div>{{item.product.title.brand}}</div>
                  <div>{{item.product.title.collection}}</div>
                  <div>{{item.product.title.type}}</div>
                </td>
                <td class="d-none d-md-table-cell">{{item.product.price}}</td>
                <td>
                  <div class="d-flex">
                    {{item.qty}}
                  </div>
                </td>
                <td class="text-right">{{item.total}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-3">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title bill-title text-center">應付金額</h5>
              <table class="table table-borderless bill-detail mb-0">
                <tbody>
                  <tr>
                    <td>總計</td>
                    <td>{{cart.total}}</td>
                  </tr>
                  <tr>
                    <td>折扣</td>
                    <td></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>實付</td>
                    <td>{{cart.final_total}}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="card-footer bg-white border-top-0 pt-0">
              <button class="btn btn-primary w-100">確定結帳</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCart } from '../assets/js/mixins'

export default {
  data () {
    return {
      cart: {}
    }
  },
  mixins: [getCart],
  mounted () {
    const vm = this
    this.getCart().then(obj => {
      vm.cart = obj
    })
  }
}
</script>
