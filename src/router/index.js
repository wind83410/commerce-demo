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
        name: 'Check',
        components: {
          check: () => import('../views/Check.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
