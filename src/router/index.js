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
      path: '/Mine',
      name: 'Mine',
      component: () => import('../views/Mine.vue')
    },{
      path: '/Type',
      name: 'Type',
      component: () => import('../views/Type.vue')
    },{
      path: '/Cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    }
  ]
})

export default router
