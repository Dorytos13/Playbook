<template>
  <div
    class="relative rounded-xl p-5 border transition-all duration-150 cursor-pointer"
    :class="highlighted
      ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
      : 'bg-gray-50 border-gray-200 hover:border-gray-300'"
  >
    <!-- Badge -->
    <span
      v-if="badge"
      class="absolute -top-2.5 left-3 text-xs font-medium px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-600 border-blue-200"
    >
      {{ badge }}
    </span>

    <!-- Titre -->
    <p class="font-display text-sm font-medium text-gray-900 mb-1">{{ title }}</p>

    <!-- Description -->
    <p class="text-xs text-gray-500 leading-relaxed mb-3">{{ description }}</p>

    <!-- Lien -->
    <span
      class="text-xs font-medium"
      :class="highlighted ? 'text-blue-600' : 'text-gray-400'"
    >
      {{ linkText }} →
    </span>
  </div>
</template>

<script setup>
defineProps({
  title:       String,
  description: String,
  linkText:    String,
  badge:       String,
  highlighted: Boolean,
})
</script>