<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Outils
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Ne rien <em class="italic text-blue-700">refaire</em> deux fois.
      </h1>
      <p class="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
        Huit gabarits, un par moment de la méthode qui en demande un. À dupliquer dans Notion pour travailler dessus, ou à télécharger en PDF.
      </p>
    </header>

    <div class="px-6 xl:px-10 pb-16 max-w-6xl mx-auto">

      <!-- Comment les utiliser -->
      <div class="bg-white rounded-2xl px-12 py-12 mb-5">
        <div class="grid grid-cols-3 gap-12 items-start mb-8">
          <div class="col-span-2">
            <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
              Deux formats
            </span>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Comment les utiliser
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed">
              Aucun gabarit n'est à remplir tel quel. Ce sont des points de départ : la structure est posée, les questions et les critères sont là, et c'est à vous de les adapter au métier de l'entreprise que vous accompagnez.
            </p>
          </div>
          <div></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
            <p class="font-display text-lg font-medium text-gray-900 mb-3">
              Dupliquer dans Notion
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              C'est le format de travail. Les pages sont publiques et en lecture seule : pour les utiliser, dupliquez-les dans votre propre espace avec le bouton en haut à droite de la page. Vous obtenez une copie modifiable, qui reste la vôtre.
            </p>
          </div>

          <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
            <p class="font-display text-lg font-medium text-gray-900 mb-3">
              Télécharger en PDF
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              C'est exactement le même outil que celui publié sur Notion, proposé au téléchargement pour celles et ceux qui préfèrent ce format. Pratique pour imprimer une grille avant un entretien, la joindre à un rapport, ou garder une trace qui ne dépend d'aucun service en ligne.
            </p>
          </div>
        </div>
      </div>

      <!-- Filtres -->
      <div class="flex flex-wrap items-center gap-2 mb-5 px-2">
        <span class="text-xs font-medium text-gray-400 uppercase tracking-widest mr-2">
          Filtrer
        </span>
        <button
          v-for="f in filtres"
          :key="f.cle"
          type="button"
          @click="actif = f.cle"
          class="text-xs px-3 py-1.5 rounded-full transition-colors duration-150"
          :class="actif === f.cle
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-500 hover:text-gray-900'"
        >
          {{ f.libelle }}
          <span
            class="tabular-nums ml-1"
            :class="actif === f.cle ? 'text-gray-500' : 'text-gray-300'"
          >{{ f.nombre }}</span>
        </button>
      </div>

      <!-- Les outils -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          v-for="o in outilsVisibles"
          :key="o.cle"
          class="bg-white rounded-2xl px-10 py-9 flex flex-col"
        >
          <div class="flex items-center justify-between gap-4 mb-5">
            <RouterLink
              :to="o.route"
              class="inline-flex items-baseline gap-2 text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              <span class="font-display font-medium tabular-nums text-blue-700">{{ o.numero }}</span>
              {{ o.etape }}
            </RouterLink>
            <span class="text-xs text-gray-400 leading-relaxed text-right">{{ o.quand }}</span>
          </div>

          <h3 class="font-display text-xl font-medium text-gray-900 leading-snug mb-3">
            {{ o.nom }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6 grow">
            {{ o.resume }}
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-5 border-t border-gray-100">
            <a
              :href="o.notion" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
            >Ouvrir dans Notion</a>
            <a
              :href="o.fichier" download
              class="text-xs text-gray-400 hover:text-gray-900 transition-colors"
            >↓ Télécharger le PDF</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { outils } from '../data/outils.js'

const actif = ref('tous')

// Les étapes se déduisent des outils : ajouter un outil d'une nouvelle étape
// fait apparaître son filtre tout seul.
const etapes = [...new Set(outils.map((o) => o.etape))]

const filtres = computed(() => [
  { cle: 'tous', libelle: 'Tous', nombre: outils.length },
  ...etapes.map((e) => ({
    cle: e,
    libelle: e,
    nombre: outils.filter((o) => o.etape === e).length,
  })),
])

const outilsVisibles = computed(() =>
  actif.value === 'tous' ? outils : outils.filter((o) => o.etape === actif.value)
)
</script>
