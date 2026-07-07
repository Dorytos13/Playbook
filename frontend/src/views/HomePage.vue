<template>
  <div class="max-w-2xl mx-auto px-6 py-12 font-sans">

    <header class="text-center mb-10">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-200 rounded-full px-3 py-1 mb-5">
        Playbook de transformation digitale
      </span>
      <h1 class="font-display text-3xl font-medium text-gray-900 leading-snug mb-3">
        Accompagner une micro-entreprise<br>dans sa digitalisation
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        Une méthodologie progressive, illustrée par le cas Photogare,
        pour les ingénieurs des médias.
      </p>
    </header>

    <section>
      <h3 class="font-display font-medium text-gray-900 leading-snug mb-3">
        Choisis ton parcours
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <ParcoursCard
          title="Je découvre la méthode"
          description="Comprendre les principes et les enjeux de la transformation digitale de petites entreprises"
          linkText="Partie 1"
          to="/contexte"
        />
        <ParcoursCard
          title="Je suis en mission"
          description="Questionnaire de diagnostic en 5 questions et plan d'action adapté à vos besoins"
          linkText="Lancer le diagnostic"
          badge="Recommandé"
          :highlighted="true"
        />
        <ParcoursCard
          title="Je cherche un outil"
          description="Accédez directement à la méthodologie, aux fiches et templates en toute liberté"
          linkText="Partie 2"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import ParcoursCard from '../components/ParcoursCard.vue'
</script>