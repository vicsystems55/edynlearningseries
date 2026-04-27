import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { layout: 'default' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { layout: 'default' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router