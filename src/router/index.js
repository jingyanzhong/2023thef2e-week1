import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('../views/PolicyView.vue')
    },
    {
      path: '/dante',
      name: 'dante',
      component: () => import('../views/DonateView.vue')
    }
  ]
})

export default router
