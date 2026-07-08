<template>
	<nav v-if="!isHome" class="flex items-center justify-between px-8 py-4" style="background:#e8e8e4">
		<RouterLink to="/" class="font-display text-xl font-medium text-gray-900 leading-snug">
			Playbook
		</RouterLink>
		<button
			@click="router.push('/')"
			class="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
		>
			<i class="ti ti-arrow-left text-sm" aria-hidden="true"></i>
			Retour à l'accueil
		</button>
	</nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isHome = computed(() => route.path === '/')
</script>