<template>
  <EcranMobile v-if="petitEcran && !force" />

  <template v-else>
    <AppNav />
    <RouterView />
    <AppFooter />
  </template>
</template>

<script setup>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
import EcranMobile from './components/EcranMobile.vue'
import { useEcran } from './composables/ecran.js'

const { petitEcran, force } = useEcran()
</script>
