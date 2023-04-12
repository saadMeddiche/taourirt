import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Economy from '../views/Economy.vue'
import Traditions from '../views/Traditions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Economy',
    name: 'Economy',
    component: Economy
  },
  {
    path: '/History',
    name: 'History',
    component: History
  },
  {
    path: '/Traditions',
    name: 'Traditions',
    component: Traditions
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
