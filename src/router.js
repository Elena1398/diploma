import { createRouter, createWebHistory } from 'vue-router'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import HomeDes from './page/HomeDes.vue'
import DecertPage from './components/DecertPage.vue'
import Favourites from '@/page/Favourites.vue'

const routes = [
  {
    path: '/header',
    component: Header
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: Registration
  },
  {
    path: '/desert/:id',
    name: 'DecertPage',
    component: DecertPage,
    props: true
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites,
    props: true
  },
  {
    path: '/des',
    name: 'HomeDes',
    component: HomeDes,
    // alias: '/',
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
