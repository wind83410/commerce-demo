import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'products/:category/:type',
        name: 'Products',
        component: () => import('../views/Products.vue')
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
