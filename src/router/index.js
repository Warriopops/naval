/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Register from '@/components/RegisterComponent.vue'
import Connect from '@/components/ConnectComponent.vue'
import NotFound from '@/pages/NotFoundPage.vue'
import Lobby from '@/pages/LobbyPage.vue'
import Testhome from '@/HeaderPage.vue'
import Createparty from '@/pages/GameCreatePage.vue'
import Board from '@/pages/GameInfoPage.vue'
import Debug from '@/pages/DeBug.vue'
import Plateaux from '@/components/PlateauxComponent.vue'

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
    name: 'Lobby',
    path: '/dashboard',
    component: Lobby
  },
  {
    name: 'TestHome',
    path: '/testhome',
    component: Testhome
  },
  {
    name: 'CreateParty',
    path: '/createparty',
    component: Createparty
  },
  {
    name: 'board',
    path: '/board/:id',
    component: Board
  },
  {
    name: 'debug',
    path: '/debug',
    component: Debug
  },
  {
    name: 'plateaux',
    path: '/plateaux',
    component: Plateaux
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
