import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'products/:category/',
        component: () => import('../components/ProductsLayout.vue'),
        children: [
          {
            path: '',
            name: 'Products',
            component: () => import('../views/Products.vue')
          },
          {
            path: ':itemId',
            name: 'Product detail',
            component: () => import('../views/ProductDetail.vue')
          }
        ]
      },
      {
        path: 'check',
        component: () => import('../components/Register.vue'),
        children: [
          {
            path: '',
            name: 'Check',
            component: () => import('../views/Check.vue')
          },
          {
            path: 'recipient',
            name: 'Recipient',
            component: () => import('../views/Recipient.vue'),
            meta: {
              requireAuth: true,
              pathFrom: '/check'
            }
          },
          {
            path: 'clinch/:orderId',
            name: 'Deal clinched',
            component: () => import('../views/OrderCode.vue'),
            meta: {
              pathFrom: '/check/recipient',
              orderSentCheck: true
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
