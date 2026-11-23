import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/es/' },
  { path: '/es', redirect: '/es/' },
  { path: '/en', redirect: '/en/' },
  { path: '/es/', name: 'home-es', component: Home, meta: { locale: 'es' } },
  { path: '/en/', name: 'home-en', component: Home, meta: { locale: 'en' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]
