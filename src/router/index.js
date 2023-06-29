import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/mine.vue')
    },{
      path: '/type',
      name: 'type',
      component: () => import('../views/type.vue')
    },{
      path: '/Cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    }
  ]
})

export default router
