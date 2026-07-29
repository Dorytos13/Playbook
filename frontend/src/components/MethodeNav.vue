<template>
  <aside
    class="shrink-0 transition-[width] duration-300 ease-out"
    :class="replie ? 'w-12' : 'w-[220px]'"
  >
    <nav class="sticky top-8">

      <!-- Bascule + intitulé -->
      <div
        class="flex items-center h-6 mb-5"
        :class="replie ? 'justify-center' : 'gap-2 px-3'"
      >
        <button
          type="button"
          @click="basculer"
          :title="replie ? 'Déployer le menu' : 'Replier le menu'"
          :aria-label="replie ? 'Déployer le menu' : 'Replier le menu'"
          class="shrink-0 w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-900 hover:bg-white/60 transition-colors"
        >
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-3.5 h-3.5 transition-transform duration-300"
            :class="replie ? 'rotate-180' : ''"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <p
          v-if="!replie"
          class="text-xs font-medium tracking-widest text-gray-400 uppercase"
        >
          La méthode
        </p>
      </div>

      <ol class="flex flex-col gap-0.5">
        <li v-for="e in etapes" :key="e.slug">

          <!-- Étape déjà rédigée : lien vers sa page -->
          <RouterLink
            v-if="e.route"
            :to="e.route"
            :title="replie ? e.titre : null"
            class="block rounded-lg transition-colors duration-150"
            :class="[
              replie ? 'py-2.5' : 'px-3 py-2.5',
              e.route === route.path ? 'bg-white' : 'hover:bg-white/50',
            ]"
          >
            <div class="flex items-baseline gap-2.5" :class="replie ? 'justify-center' : ''">
              <span
                class="font-display text-xs font-medium tabular-nums shrink-0"
                :class="e.route === route.path ? 'text-blue-700' : 'text-gray-400'"
              >
                {{ e.numero }}
              </span>
              <span
                v-if="!replie"
                class="font-display text-sm font-medium leading-snug"
                :class="e.route === route.path ? 'text-gray-900' : 'text-gray-500'"
              >
                {{ e.titre }}
              </span>
            </div>
          </RouterLink>

          <!-- Étape pas encore rédigée : visible mais non cliquable -->
          <div
            v-else
            :title="replie ? e.titre : null"
            class="cursor-default"
            :class="replie ? 'py-2.5' : 'px-3 py-2.5'"
          >
            <div class="flex items-baseline gap-2.5" :class="replie ? 'justify-center' : ''">
              <span class="font-display text-xs font-medium tabular-nums shrink-0 text-gray-300">
                {{ e.numero }}
              </span>
              <span
                v-if="!replie"
                class="font-display text-sm font-medium leading-snug text-gray-400"
              >
                {{ e.titre }}
              </span>
            </div>
          </div>

        </li>
      </ol>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMenu } from '../composables/menu.js'

const route = useRoute()
const { replie, basculer } = useMenu()

// Ajouter `route: '/...'` à une étape la rend cliquable et gère son état actif.
const etapes = [
  { slug: 'contexte',    numero: '01', titre: "Comprendre avant d'agir", route: '/contexte' },
  { slug: 'diagnostic',  numero: '02', titre: 'Diagnostiquer', route: '/diagnostic' },
  { slug: 'orienter',    numero: '03', titre: 'Orienter le projet', route: '/orienter' },
  { slug: 'evaluer',     numero: '04', titre: 'Évaluer les solutions' },
  { slug: 'organiser',   numero: '05', titre: 'Organiser le projet'},
  { slug: 'mise-oeuvre', numero: '06', titre: 'Mettre en œuvre',},
  { slug: 'mesurer',     numero: '07', titre: 'Mesurer et faire évoluer'},
]
</script>
