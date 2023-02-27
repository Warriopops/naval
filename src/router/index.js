/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/HomePage.vue'
import Register from '@/RegisterComponent.vue'
import Connect from '@/ConnectComponent.vue'
import NotFound from '@/NotFound.vue'
import Dashboard from '@/DashboardComponent.vue'
import Testhome from '@/HomeSave.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'Connect',
    path: '/connect',
    component: Connect
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)',
    component: NotFound
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'TestHome',
    path: '/testhome',
    component: Testhome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
