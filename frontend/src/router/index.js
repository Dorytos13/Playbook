import { createRouter, createWebHistory } from 'vue-router'
import HomePage     from '../views/HomePage.vue'
import ContextePage from '../views/ContextePage.vue'

const routes = [
  { path: '/',         component: HomePage },
  { path: '/contexte', component: ContextePage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})