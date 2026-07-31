<template>
  <nav
    class="flex items-center justify-between px-6 xl:px-10 py-4"
    style="background:#e8e8e4"
  >
    <RouterLink to="/" class="font-display text-xl font-medium text-gray-900 leading-snug">
      Playbook de transformation digitale
    </RouterLink>

    <div class="flex items-center gap-6">
      <RouterLink
		v-for="l in liens"
		:key="l.to"
		:to="l.to"
		class="text-sm transition-colors"
		:class="route.path === l.to
			? 'font-semibold text-gray-900'
			: 'font-normal text-gray-600 hover:text-gray-900'"
		>
		{{ l.label }}
		</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const liens = [
  { to: '/',       label: 'Accueil' },
  { to: '/outils', label: 'Outils' },
  { to: '/contact', label: 'Contact' },
]
</script>