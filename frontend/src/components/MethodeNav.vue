<template>
  <nav class="sticky top-8">
    <p class="text-xs font-medium tracking-widest text-gray-400 uppercase mb-5">
      La méthode
    </p>

    <ol class="flex flex-col gap-0.5">
      <li v-for="e in etapes" :key="e.slug">

        <!-- Étape déjà rédigée : lien vers sa page -->
        <RouterLink
          v-if="e.route"
          :to="e.route"
          class="block px-3 py-2.5 rounded-lg transition-colors duration-150"
          :class="e.route === route.path ? 'bg-white' : 'hover:bg-white/50'"
        >
          <div class="flex items-baseline gap-2.5">
            <span
              class="font-display text-xs font-medium tabular-nums shrink-0"
              :class="e.route === route.path ? 'text-blue-700' : 'text-gray-400'"
            >
              {{ e.numero }}
            </span>
            <span
              class="font-display text-sm font-medium leading-snug"
              :class="e.route === route.path ? 'text-gray-900' : 'text-gray-500'"
            >
              {{ e.titre }}
            </span>
          </div>
        </RouterLink>

        <!-- Étape pas encore rédigée : visible mais non cliquable -->
        <div v-else class="px-3 py-2.5 cursor-default">
          <div class="flex items-baseline gap-2.5">
            <span class="font-display text-xs font-medium tabular-nums shrink-0 text-gray-300">
              {{ e.numero }}
            </span>
            <span class="font-display text-sm font-medium leading-snug text-gray-400">
              {{ e.titre }}
            </span>
          </div>
        </div>

      </li>
    </ol>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Ajouter `route: '/...'` à une étape la rend cliquable et gère son état actif.
const etapes = [
  { slug: 'contexte',    numero: '01', titre: "Comprendre avant d'agir", route: '/contexte' },
  { slug: 'diagnostic',  numero: '02', titre: 'Diagnostiquer' },
  { slug: 'orienter',    numero: '03', titre: 'Orienter le projet' },
  { slug: 'evaluer',     numero: '04', titre: 'Évaluer les solutions' },
  { slug: 'organiser',   numero: '05', titre: 'Organiser le projet'},
  { slug: 'mise-oeuvre', numero: '06', titre: 'Mettre en œuvre',},
  { slug: 'mesurer',     numero: '07', titre: 'Mesurer et faire évoluer'},
]
</script>
