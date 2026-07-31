<template>
  <div class="font-sans min-h-screen flex items-center justify-center px-6 py-12" style="background:#e8e8e4">
    <div class="bg-white rounded-2xl px-8 py-10 sm:px-12 sm:py-12 max-w-md w-full text-center">

      <svg
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        class="w-10 h-10 mx-auto mb-6 text-blue-700"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>

      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-300 rounded-full px-3 py-1 mb-5">
        Version mobile en construction
      </span>

      <h1 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
        Ce playbook se consulte<br>sur <em class="italic text-blue-700">ordinateur</em>.
      </h1>

      <p class="text-sm text-gray-500 leading-relaxed mb-3">
        La méthode s'appuie sur un menu latéral, des carrousels et des grilles de comparaison qui ont besoin de largeur pour rester lisibles. Sur un petit écran, le contenu perd la structure qui le rend utilisable.
      </p>

      <p class="text-sm text-gray-500 leading-relaxed mb-8">
        Une version adaptée aux mobiles et aux tablettes fait partie des évolutions prévues.
      </p>

      <div class="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4 mb-8">
        <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Pour y accéder</p>
        <p class="text-sm text-gray-500 leading-relaxed">
          Ouvrez <strong class="font-medium text-gray-700">playbook.dorianerosset.ch</strong> depuis un ordinateur.
        </p>
      </div>

      <button
        type="button"
        @click="continuerQuandMeme"
        class="text-xs text-gray-400 hover:text-gray-900 underline underline-offset-4 transition-colors"
      >
        Continuer quand même
      </button>

      <p class="text-xs text-gray-300 leading-relaxed mt-10">
        Playbook — Doriane Rosset · HEIG-VD 2026
      </p>
    </div>
  </div>
</template>

<script setup>
import { useEcran } from '../composables/ecran.js'

const { continuerQuandMeme } = useEcran()
</script>
