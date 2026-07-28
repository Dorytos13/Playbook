import { ref } from 'vue'

// État partagé par toutes les instances du menu.
// Déclaré hors de la fonction : il survit à la navigation entre les pages,
// et localStorage le conserve d'une visite à l'autre.
const CLE = 'playbook:menu-replie'
const replie = ref(localStorage.getItem(CLE) === '1')

export function useMenu() {
  function basculer() {
    replie.value = !replie.value
    localStorage.setItem(CLE, replie.value ? '1' : '0')
  }

  return { replie, basculer }
}
