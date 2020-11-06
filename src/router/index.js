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
    component: () => import('../views/frontend/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: 'products/:category/',
        component: () => import('../views/frontend/ProductsLayout.vue'),
        children: [
          {
            path: '',
            name: 'Products',
            component: () => import('../views/frontend/Products.vue')
          },
          {
            path: ':itemId',
            name: 'Product detail',
            component: () => import('../views/frontend/ProductDetail.vue')
          }
        ]
      },
      {
        path: 'check',
        component: () => import('../views/frontend/Register.vue'),
        children: [
          {
            path: '',
            name: 'Check',
            component: () => import('../views/frontend/Check.vue')
          },
          {
            path: 'recipient',
            name: 'Recipient',
            component: () => import('../views/frontend/Recipient.vue'),
            meta: {
              requireAuth: true,
              pathFrom: '/check'
            }
          },
          {
            path: 'clinch/:orderId',
            name: 'Deal clinched',
            component: () => import('../views/frontend/OrderCode.vue'),
            meta: {
              pathFrom: '/check/recipient',
              orderSentCheck: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'Backstage',
    component: () => import('../views/backend/BackendLayout.vue'),
    children: [
      {
        path: 'product-list',
        name: 'Backstage product list',
        component: () => import('../views/backend/ProductsList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
