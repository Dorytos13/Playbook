import { createRouter, createWebHistory } from 'vue-router'
import HomePage     from '../views/HomePage.vue'
import ContextePage from '../views/ContextePage.vue'
import DiagnostiquerPage from '../views/DiagnostiquerPage.vue'
import OrienterPage from '../views/OrienterPage.vue'
import EvaluerPage from '../views/EvaluerPage.vue'
import OrganiserPage from '../views/OrganiserPage.vue'
import ContactPage from '../views/ContactPage.vue'
import MettreEnOeuvrePage from '../views/MettreEnOeuvrePage.vue'

const routes = [
  { path: '/',         component: HomePage },
  { path: '/contexte', component: ContextePage },
  { path: '/diagnostic', component: DiagnostiquerPage },
  { path: '/orienter', component: OrienterPage },
  { path: '/evaluer', component: EvaluerPage },
  { path: '/organiser', component: OrganiserPage },
  { path: '/mise-en-oeuvre', component: MettreEnOeuvrePage },
  { path: '/contact', component: ContactPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})