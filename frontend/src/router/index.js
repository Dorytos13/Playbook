import { createRouter, createWebHistory } from 'vue-router'
import HomePage     from '../views/HomePage.vue'
import ContextePage from '../views/ContextePage.vue'
import DiagnostiquerPage from '../views/DiagnostiquerPage.vue'
import OrienterPage from '../views/OrienterPage.vue'
import EvaluerPage from '../views/EvaluerPage.vue'

const routes = [
  { path: '/',         component: HomePage },
  { path: '/contexte', component: ContextePage },
  { path: '/diagnostic', component: DiagnostiquerPage },
  { path: '/orienter', component: OrienterPage },
  { path: '/evaluer', component: EvaluerPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})