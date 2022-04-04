import { createRouter, createWebHistory } from 'vue-router'

import Main from './pages/Main.vue'
import Add from './pages/Add.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/invoice-manager',
      name: 'Home',
      component: Main
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})

export default router
