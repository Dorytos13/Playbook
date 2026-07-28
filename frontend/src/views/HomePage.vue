<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">
    <div class="px-6 xl:px-10 py-12">

      <!-- Hero -->
      <header class="text-center mb-12">
        <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
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

      <div class="flex gap-10">

        <!-- Menu -->
        <MethodeNav />

        <!-- Contenu -->
        <div class="flex-1 flex flex-col gap-5 min-w-0">

          <!-- Qu'est-ce qu'un playbook ? -->
          <div class="bg-white rounded-2xl px-12 py-12">
            <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
              À propos
            </span>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Qu'est-ce qu'un playbook ?
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-3 max-w-2xl">
              À l'origine, le terme <em>playbook</em> provient du domaine sportif. C'est un livre qui contient toutes les stratégies et les schémas de jeu permettant de maximiser la performance au sein de l'équipe. Il a été ensuite repris dans d'autres domaines dont le monde digital et se décline en fonction des besoins tout en ayant toujours un même but : servir de feuille de route afin de gagner en efficacité.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed max-w-2xl">
              Dans ce contexte, il ne s'agit donc pas d'un manuel technique mais d'un <strong class="font-medium text-gray-700">guide méthodologique</strong> permettant d'optimiser l'accompagnement des petites entreprises dans leur digitalisation.
            </p>
          </div>

          <!-- Comment utiliser ce playbook -->
          <div class="bg-white rounded-2xl px-12 py-12">
            <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
              Mode d'emploi
            </span>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Comment utiliser ce playbook
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Les sept étapes du menu suivent le déroulement d'un projet d'accompagnement, du premier contact jusqu'à l'autonomie de l'équipe. Rien n'oblige à les lire dans l'ordre : chacune se consulte seule, selon le moment de la mission où l'on se trouve.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div v-for="u in usages" :key="u.titre" class="rounded-xl bg-gray-50 border border-gray-100 p-6">
                <p class="font-display text-sm font-medium text-gray-900 mb-2">{{ u.titre }}</p>
                <p class="text-xs text-gray-500 leading-relaxed">{{ u.desc }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import MethodeNav from '../components/MethodeNav.vue'


const usages = [
  {
    titre: 'Une étape, un moment de la mission',
    desc: "Cette méthodologie a été pensée pour suivre l'ordre d'un projet. Si vous êtes déjà en cours de mandat, vous pouvez accéder directement à l'étape qui correspond à votre situation.",
  },
  {
    titre: 'Des outils liés à chaque étape',
    desc: "Je te mets à disposition les outils principaux que j'ai utilisé dans ma démarche chez Photogare pour que tu puisse facilement les réutiliser.",
  },
  {
    titre: 'Réitérer fait partie du processus',
    desc: "Certaines limites d'un outil n'apparaissent qu'à l'usage réel, certains points sont révélés lors de la mise en œuvre. Repasser par des étapes permet d'ajuster l'approche et toujours prendre en compte le nécessaire.",
  },
  {
    titre: 'Un cas pour illustrer la méthodologie',
    desc: "Chaque étape se termine par un exemple tiré d'une mission réelle, celle d'un travail de Bachelor chez Photogare. Elle permet d'illustrer la méthode, mais n'a pas pour but d'être rep tel quel. C'est elle qui a permis de construire ce playbook, pas l'inverse.",
  },
]

</script>
