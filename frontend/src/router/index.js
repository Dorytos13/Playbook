import { createRouter, createWebHistory } from 'vue-router'
import HomePage     from '../views/HomePage.vue'
import ContextePage from '../views/ContextePage.vue'
import DiagnostiquerPage from '../views/DiagnostiquerPage.vue'

const routes = [
  { path: '/',         component: HomePage },
  { path: '/contexte', component: ContextePage },
  { path: '/diagnostic', component: DiagnostiquerPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})