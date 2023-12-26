import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/innerpage',
    name: 'innerpage',
    component: () => import('@/views/InnerpageView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  // base: '/design/Prajesh/vuejs/',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
