import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/front/Front.vue'

Vue.use(VueRouter)

const routes = [
  { // 前台
    path: '/',
    component: Front,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/Home.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue')
      },
      {
        path: 'productDetail/:productId',
        name: 'productDetail',
        component: () => import('../views/front/ProductDetail.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/Cart.vue')
      },
      {
        path: 'customer-order',
        name: 'customerOrder',
        component: () => import('../views/front/CustomerOrder.vue')
      },
      {
        path: 'customer-checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('../views/front/CustomerCheckout.vue')
      },
      {
        path: 'complete-order',
        name: 'CompleteOrder',
        component: () => import('../views/front/CompleteOrder.vue')
      },
      {
        path: 'customer-coupon',
        name: 'CustomerCoupon',
        component: () => import('../views/front/CustomerCoupon.vue')
      },
      {
        path: 'collect',
        name: 'Collect',
        component: () => import('../views/front/Collect.vue')
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: () => import('../views/front/FAQ.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/back/Login.vue')
  },
  { // 後台
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/back/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'product',
        name: 'AdminProduct',
        component: () => import('../views/back/AdminProduct.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/back/Coupon.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'order',
        name: 'AdminOrder',
        component: () => import('../views/back/AdminOrder.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

// 導航守衛
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    Vue.axios.post(api).then((response) => {
      if (response.data.success) {
        next()
        return
      }
      next({
        path: '/login'
      })
    })
    return
  }
  next()
})

export default router
