import { createRouter, createWebHistory } from 'vue-router';
import Header from '@/components/Header.vue';
import Login from '@/components/Login.vue';
import Catalog from '@/components/Catalog.vue';
import Registration from '@/components/Registration.vue';


const routes = [
  {
    path: '/header',
    component: Header,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/catalog',
    component:Catalog,
  },
  {
    path: '/registration',
    component:Registration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
