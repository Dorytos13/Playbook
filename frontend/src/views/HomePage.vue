<template>
  <div class="px-20 py-12 font-sans">

    <header class="text-center mb-8">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-200 rounded-full px-3 py-1 mb-5">
        Playbook de transformation digitale
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
          Accompagner une micro-entreprise<br>dans sa <em class="italic text-blue-700">digitalisation</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        Une méthodologie progressive, illustrée par le cas Photogare,
        pour les ingénieurs des médias.
      </p>
    </header>

    <!-- Qu'est-ce qu'un playbook ? -->
    <section class="mb-10 rounded-2xl bg-gray-50 px-8 py-8 border border-gray-100">
      <span class="text-xs font-medium tracking-widest text-gray-400 uppercase">À propos</span>
      <h2 class="font-display text-xl font-medium text-gray-900 mt-2 mb-4">
        Qu'est-ce qu'un playbook ?
      </h2>
      <p class="text-sm text-gray-500 leading-relaxed mb-3">
        À l'origine, le terme <em>playbook</em> provient du domaine sportif. C’est un livre qui contient toutes les stratégies et les schémas de jeu permettant de maximiser la performance au sein de l’équipe. Il a été ensuite repris dans d’autres domaines dont le monde digital 
        et se décline en fonction des besoins tout en ayant toujours un même but : servir de feuille de route afin de gagner en efficacité.
      </p>
      <p class="text-sm text-gray-500 leading-relaxed">
        Dans ce contexte, il ne s'agit donc pas d'un manuel technique mais d'un <strong class="font-medium text-gray-700">guide méthodologique</strong> permettant d'optimiser l'accompagnement des petites entreprises dans leur digitalisation.
      </p>
    </section>

    <section>
      <h3 class="font-display font-medium text-xl text-gray-900 leading-snug mb-3">
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