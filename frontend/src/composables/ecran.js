import { ref } from 'vue'

// Largeur en dessous de laquelle la mise en page du playbook ne tient plus :
// le menu latéral, les carrousels et les grilles de comparaison ont besoin
// d'au moins 1024 px pour rester lisibles.
const REQUETE = '(max-width: 1023px)'

const mq = window.matchMedia(REQUETE)
const petitEcran = ref(mq.matches)
mq.addEventListener('change', (e) => { petitEcran.value = e.matches })

// Permet à un visiteur d'accéder quand même au contenu depuis son appareil.
const force = ref(false)

export function useEcran() {
  function continuerQuandMeme() {
    force.value = true
  }
  return { petitEcran, force, continuerQuandMeme }
}
