import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/frontend/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/frontend/Index.vue')
      },
      {
        path: 'products/:category/',
        component: () => import('@/views/frontend/ProductsLayout.vue'),
        children: [
          {
            path: '',
            name: 'Products',
            component: () => import('@/views/frontend/Products.vue')
          },
          {
            path: ':itemId',
            name: 'Product detail',
            component: () => import('@/views/frontend/ProductDetail.vue')
          }
        ]
      },
      {
        path: 'check',
        component: () => import('@/views/frontend/CheckLayout.vue'),
        children: [
          {
            path: '',
            name: 'Check',
            component: () => import('@/views/frontend/Check.vue')
          },
          {
            path: 'customer',
            name: 'Check customer',
            component: () => import('@/views/frontend/CheckCustomer.vue'),
            meta: {
              pathFrom: '/check'
            }
          },
          {
            path: 'order/:orderId',
            name: 'Check order',
            component: () => import('@/views/frontend/CheckOrder.vue'),
            meta: {
              pathFrom: '/check/customer',
              orderSentCheck: true
            }
          },
          {
            path: 'paid/:orderId',
            name: 'Check paid',
            component: () => import('@/views/frontend/CheckPaid.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/backend/AdminLayout.vue'),
    children: [
      {
        path: 'product-list',
        name: 'Admin product list',
        component: () => import('@/views/backend/AdminProductsList.vue'),
        meta: { requireAuth: true }
      },
      {
        path: 'coupons',
        name: 'Admin coupon list',
        component: () => import('@/views/backend/AdminCouponList.vue'),
        meta: { requireAuth: true }
      },
      {
        path: 'orders',
        name: 'Backstage order list',
        component: () => import('@/views/backend/AdminOrderList.vue'),
        meta: { requireAuth: true }
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
