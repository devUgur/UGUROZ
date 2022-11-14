import { createRouter, createWebHistory } from 'vue-router'

import mainLayout from '@/layouts/Main.layout';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: mainLayout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
