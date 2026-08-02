<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Mesurer et faire évoluer
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Comparer avant et <em class="italic text-blue-700">après</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        L'outil est en service. Reste à savoir ce qu'il a changé, et à décider de la suite avec des faits plutôt qu'avec des impressions.
      </p>
    </header>

    <div class="px-6 xl:px-10 pb-16 flex gap-10">
      <MethodeNav />
      <div class="flex-1 flex flex-col gap-5 min-w-0">

        <!-- Principe -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="grid grid-cols-3 gap-12 items-start mb-8">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Le principe
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                Mesurer la différence
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Le principe de cette étape est de reprendre les KPI relevés durant la phase de diagnostic qui permettront de mesurer la différence. Ainsi que de tester les usages pour comprendre comment l'outil est utilisé et si les frictions ont été levées.
              </p>
            </div>
            <div></div>
          </div>

          <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            Deux mesures, deux natures
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-3">
                Ce que disent les chiffres
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Combien. Le temps passé sur une tâche, le nombre de commandes traitées, les erreurs de saisie. Ils permettent de comparer deux moments, sans pour autant expliquer pourquoi un écart existe.
              </p>
            </div>

            <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-3">
                Ce que disent les usages
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Pourquoi. L'endroit précis où quelqu'un hésite, contourne ou abandonne. On le voit en regardant travailler et en faisant tester.
              </p>
            </div>
          </div>
        </div>

        <!-- La démarche -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="flex items-end justify-between gap-8 mb-8">
            <div>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                La démarche
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug">
                D'un outil en service à une décision pour la suite
              </h2>
            </div>
          </div>

          <!-- Onglets -->
          <div class="grid grid-cols-4 gap-px rounded-xl overflow-hidden mb-8 bg-gray-200">
            <button
              v-for="(t, i) in temps"
              :key="t.num"
              type="button"
              @click="aller(i)"
              class="px-4 py-6 flex flex-col items-center text-center transition-colors duration-150"
              :class="i === actif ? 'bg-gray-950' : 'bg-gray-50'"
            >
              <span
                class="font-display text-2xl font-medium leading-none mb-2"
                :class="i === actif ? 'text-white' : 'text-blue-700'"
              >{{ t.num }}</span>
              <span
                class="font-display text-sm font-medium leading-snug"
                :class="i === actif ? 'text-white' : 'text-gray-900'"
              >{{ t.verbe }}</span>
              <span
                class="text-xs leading-relaxed"
                :class="i === actif ? 'text-gray-500' : 'text-gray-400'"
              >{{ t.objet }}</span>
            </button>
          </div>

          <!-- Cartes superposées -->
          <div class="relative">
            <div
              v-if="actif < temps.length - 1"
              class="absolute inset-x-6 -bottom-3 h-12 rounded-2xl border border-gray-200 bg-gray-50"
              aria-hidden="true"
            ></div>
            <div
              v-if="actif < temps.length - 2"
              class="absolute inset-x-12 -bottom-6 h-12 rounded-2xl border border-gray-200 bg-gray-100"
              aria-hidden="true"
            ></div>

            <Transition :name="sens" mode="out-in">
              <div
                :key="actif"
                class="relative rounded-2xl border border-gray-200 bg-gray-50 px-10 py-10"
                style="min-height: 460px"
              >
                <div class="flex items-baseline gap-4 mb-8">
                  <span class="font-display text-2xl font-medium text-blue-700 leading-snug shrink-0">
                    {{ courant.num }}
                  </span>
                  <h3 class="font-display text-2xl font-medium text-gray-900 leading-snug">
                    {{ courant.titre }}
                  </h3>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
                      {{ courant.pourquoiTitre }}
                    </p>
                    <div class="bloc-pourquoi text-sm text-gray-500 leading-relaxed">
                      <p
                        v-for="(par, j) in courant.pourquoi"
                        :key="j"
                        class="mb-3 last:mb-0"
                      >
                        {{ par }}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Ce qu'on y fait</p>
                    <p
                      v-for="(par, j) in courant.faire"
                      :key="j"
                      class="text-sm text-gray-500 leading-relaxed"
                      :class="j < courant.faire.length - 1 ? 'mb-3' : ''"
                      v-html="par"
                    ></p>
                  </div>
                </div>

                <div v-if="courant.piege" class="rounded-xl bg-blue-50 border border-blue-100 p-5 mt-8">
                  <p class="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">Le piège</p>
                  <p class="text-sm text-gray-500 leading-relaxed" v-html="courant.piege"></p>
                </div>

                <div
                  v-if="courant.outil"
                  class="rounded-xl bg-white border border-gray-200 p-6 mt-4 flex flex-wrap items-center justify-between gap-4"
                >
                  <div>
                    <p class="font-display text-sm font-medium text-gray-900 mb-1">{{ courant.outil.nom }}</p>
                    <p class="text-xs text-gray-500 leading-relaxed">{{ courant.outil.desc }}</p>
                  </div>
                  <div class="flex items-center gap-3 shrink-0">
                    <a
                      :href="courant.outil.notion" target="_blank" rel="noopener"
                      class="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                    >Ouvrir dans Notion</a>
                    <a
                      :href="courant.outil.fichier" download
                      class="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                    >↓ Télécharger</a>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Navigation -->
          <div class="flex items-center justify-between mt-10">
            <button
              type="button"
              @click="aller(actif - 1)"
              :disabled="actif === 0"
              class="text-sm text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >← {{ actif > 0 ? temps[actif - 1].verbe : '' }}</button>

            <div class="flex items-center gap-1.5">
              <button
                v-for="(t, i) in temps"
                :key="`p-${t.num}`"
                type="button"
                @click="aller(i)"
                class="h-1.5 rounded-full transition-all duration-200"
                :class="i === actif ? 'w-6 bg-gray-900' : 'w-1.5 bg-gray-300 hover:bg-gray-400'"
                :aria-label="t.verbe"
              ></button>
            </div>

            <button
              type="button"
              @click="aller(actif + 1)"
              :disabled="actif === temps.length - 1"
              class="text-sm text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >{{ actif < temps.length - 1 ? temps[actif + 1].verbe : '' }} →</button>
          </div>
        </div>

        <!-- Quels indicateurs -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="grid grid-cols-3 gap-12 items-start mb-8">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Les indicateurs
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                Quatre familles fréquentes
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Un indicateur ne vaut que s'il est relevable simplement et qu'il porte sur une friction identifiée au diagnostic. Mieux vaut trois chiffres qu'on obtient vraiment qu'une batterie de mesures qu'on ne relèvera jamais deux fois.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="f in familles" :key="f.nom" class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-1">{{ f.nom }}</p>
              <p class="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">{{ f.exemple }}</p>
              <p class="text-sm text-gray-500 leading-relaxed">{{ f.desc }}</p>
            </div>
          </div>

          <div class="rounded-xl mt-4">
            <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              Et le coût, dans la même mesure
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              Les abonnements, la maintenance et le temps d'administration se relèvent au même moment que les gains. Sans eux, on ne compare qu'une moitié de l'équation, et un gain de trois heures par semaine payé par deux heures d'administration n'en est plus vraiment un.
            </p>
          </div>
        </div>

        <!-- La boucle -->
        <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-4 border-[0.5px] border-white/30 text-white/80">
                  Pour aller plus loin
                </span>
                <h2 class="font-display text-2xl font-medium leading-snug mb-4 text-white">
                  Cette étape ne termine pas la méthode, elle y ramène
                </h2>
                <p class="text-sm leading-relaxed mb-3 text-white/75">
                  Une digitalisation ne se solde pas. L'activité change, les outils évoluent, l'équipe se renouvelle, et ce qui convenait il y a deux ans crée de nouvelles frictions. La mesure est ce qui transforme un projet livré en démarche continue.
                </p>
                <p class="text-sm leading-relaxed mb-8 text-white/75">
                  Concrètement, les résultats de cette étape deviennent la matière d'un nouveau diagnostic, beaucoup plus court que le premier puisqu'une grande partie du contexte est déjà connue.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-8 bg-white/20">
              <div class="px-8 py-8 bg-white/8">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce qui revient à l'étape 02</p>
                <p class="text-sm leading-relaxed text-white/75">
                  Les frictions qui n'ont pas bougé malgré l'outil, et celles que l'outil a créées. Un nouvel outil déplace toujours une partie du travail plutôt que de le supprimer, et ce déplacement se diagnostique comme le reste.
                </p>
              </div>
              <div class="px-8 py-8 bg-white/8">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce qui revient à l'étape 03</p>
                <p class="text-sm leading-relaxed text-white/75">
                  Les besoins reportés ou délégués, qui attendaient leur tour. Mis de côté pour ne pas surcharger le premier projet, ils peuvent être repris une fois cette première partie terminée.
                </p>
              </div>
            </div>

            <div class="rounded-xl p-6 bg-white/8">
              <p class="text-sm leading-relaxed text-white/90">
                C'est aussi ce qui distingue un accompagnement d'une prestation. Livrer un outil, c'est répondre à une commande. Accompagner une entreprise, c'est lui donner les moyens de progresser, de poursuivre sa digitalisation et de prendre les bonnes décisions pour le faire.
              </p>
            </div>
          </div>
        </div>

        <!-- Critère de sortie + piège -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div class="bg-white rounded-2xl px-10 py-10">
            <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
              Critère de sortie
            </span>
            <h2 class="font-display text-xl font-medium text-gray-900 leading-snug mb-6">
              Comment savoir que la mesure a servi
            </h2>
            <ul class="flex flex-col gap-3">
              <li v-for="(c, i) in criteres" :key="c">
                <button
                  type="button"
                  @click="coches[i] = !coches[i]"
                  class="flex gap-3 text-left w-full group"
                >
                  <span
                    class="shrink-0 mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors duration-150"
                    :class="coches[i]
                      ? 'bg-blue-600 border-blue-600'
                      : 'bg-white border-gray-300 group-hover:border-gray-400'"
                  >
                    <svg
                      v-if="coches[i]" viewBox="0 0 24 24" fill="none" stroke="white"
                      stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"
                      class="w-2.5 h-2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span
                    class="text-sm leading-relaxed transition-colors duration-150"
                    :class="coches[i] ? 'text-gray-400' : 'text-gray-500'"
                    v-html="c"
                  ></span>
                </button>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl px-10 py-10">
            <span class="text-xs px-3 py-1 rounded-full border border-blue-200 text-blue-600 inline-block mb-4">
              Le piège
            </span>
            <h2 class="font-display text-xl font-medium text-gray-900 leading-snug mb-4">
              Confondre l'activité et le résultat
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Les visites, les abonnés, le nombre de publications sont faciles à compter, se présentent bien dans un rapport, et ne disent rien du problème qu'on cherchait à résoudre.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Une entreprise dont le site double d'audience mais qui perd toujours trois heures par semaine en ressaisie n'a rien gagné sur ce qui la bloquait. Et le chiffre flatteur risque même de retarder le moment où l'on regarde le vrai problème.
            </p>
            <div class="rounded-xl bg-blue-50 border border-blue-100 p-5">
              <p class="text-sm text-gray-500 leading-relaxed">
                <strong class="font-medium text-gray-700">La bonne question :</strong> cet indicateur mesure-t-il une friction relevée au diagnostic, ou seulement quelque chose de facile à mesurer ?
              </p>
            </div>
          </div>
        </div>

        <!-- Chez Photogare -->
        <div class="section-dark rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <span class="text-xs px-3 py-1 rounded-full inline-block mb-8 border border-gray-700 text-gray-400">
              Chez Photogare
            </span>
            <h2 class="font-display text-2xl font-medium leading-snug mb-8 max-w-xl text-white">
              Une hypothèse invalidée, et une décision qui appartient à l'entreprise
            </h2>

            <p class="text-sm leading-relaxed mb-3 text-gray-500">
              La plateforme retenue n'était pas ma question de recherche mais une hypothèse de solution. Les sprints successifs l'ont mise à l'épreuve, et c'est au troisième qu'elle s'est invalidée : les limites rencontrées n'étaient plus des détails contournables. Comme expliqué dans les autres parties de l'expérience, la dernière phase a donc été réorientée vers une expérimentation comparative, qui a débouché sur des recommandations remises à l'entreprise.
            </p>
            <p class="text-sm leading-relaxed mb-10 text-gray-500">
              C'est là que s'arrête ce travail de Bachelor. L'entreprise dispose de l'ensemble des constats : ce qui a été construit, ce qui a bloqué, et ce que chaque option lui demanderait par la suite. La décision lui revient, et c'est elle qui déterminera la suite du projet. C'est cela, l'évolution que prend ce mandat.
            </p>

            <h3 class="font-display text-xl font-medium leading-snug mb-4 text-white">
              Ce qui a été mesuré
            </h3>
            <p class="text-sm leading-relaxed mb-10 text-white/85">
              La mesure a été faite phase par phase, à travers les deux grilles d'évaluation des ateliers d'accompagnement, celle remplie par le participant et celle remplie par l'animatrice. Leur comparaison indiquait, à chaque fin de phase, ce qui était acquis et ce qui méritait d'être réexpliqué. Ces grilles avaient pour objectif de mesurer l'appropriation, pas la performance.
            </p>

            <div class="rounded-xl p-8 bloc-decalage mb-10">
              <p class="text-xs font-medium uppercase tracking-widest mb-4 text-gray-500">Ce qui ne l'a pas été</p>
              <p class="text-sm leading-relaxed mb-4 text-gray-400">
                Il n'y a eu ni tests utilisateurs sur la solution en service, ni comparaison d'indicateurs entre l'avant et l'après. Cela n'avait pas lieu d'être étant donné le sens qu'a pris le projet.
              </p>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                <strong class="font-medium">Ce qui existe à la place est d'une autre nature</strong> : des constats professionnels d'ingénieure des médias sur la pertinence réelle de l'outil supposé convenir.
              </p>
              <p class="text-sm leading-relaxed text-gray-400">
                Et ce constat s'est réalisé sur la base de ce qui se construisait mais surtout sur la base des contournements qui ont dû être envisagés pour que chacun des besoins initiaux puisse trouver une réponse. Un seul rapport a suffi à justifier la réorientation : neuf limites d'outil impactantes pour huit besoins à couvrir. Le temps était plus consacré à trouver des contournements aux limites de la plateforme qu'aux besoins eux-mêmes.
              </p>
            </div>

            <h3 class="font-display text-xl font-medium leading-snug mb-4 text-white">
              Ce que la comparaison finale a produit
            </h3>
            <p class="text-sm leading-relaxed text-white/85">
              Elle a permis d'évaluer la pertinence d'une réorientation vers une solution alternative. Elle a surtout permis de mettre en évidence les frictions de la première plateforme et de les confronter à la seconde. Elle soulève ce qu'une approche permettrait de lever, et de créer des hypothèses sur ce que l'activité aurait à y gagner. La distinction compte, et c'est elle qui rend l'évaluation finale d'autant plus nécessaire le jour où l'entreprise aura tranché.
            </p>
          </div>
        </div>

        <!-- Ce que cette expérience a changé -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="flex ">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Pour finir
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                Ce playbook est soumis à sa propre méthode
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">
                Plusieurs éléments décrits dans ces pages n'ont pas pu être menés jusqu'au bout sur le mandat qui les a inspirés. L'étape 07 n'a pas eu lieu, les solutions n'ont pas été testées avant d'en retenir une à l'étape 04. 
              </p>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">
                Mais c'est précisément de ces manques que vient une partie de la méthode. Ce qui a coincé pendant le projet a été analysé, puis transformé en étape, en critère de sortie ou en piège et se trouve donc déjà dans ces pages. L'expérience a fait évoluer la démarche et c'est là tout le sens de cette approche.
              </p>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">
              C'est ce que j'espère pouvoir continuer à faire avec les mandats à venir. Chaque accompagnement révèle une limite que la méthode n'avait pas prévue, et chaque limite affinée rend le playbook un peu plus juste.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MethodeNav from '../components/MethodeNav.vue'
import { outil } from '../data/outils.js'

/* ── Le carrousel ─────────────────────────────────────────────── */

const actif = ref(0)
const sens  = ref('glisse-avant')

function aller(i) {
  if (i < 0 || i > temps.length - 1 || i === actif.value) return
  sens.value = i > actif.value ? 'glisse-avant' : 'glisse-arriere'
  actif.value = i
}

const temps = [
  {
    num: '①', verbe: 'Réévaluer', objet: 'les indicateurs',
    titre: 'Reprendre les indicateurs du diagnostic',
    pourquoiTitre: 'Pourquoi les reprendre',
    pourquoi: [
      "La comparaison n'a de sens que si les deux mesures portent sur la même chose, relevée de la même façon.",
      "C'est aussi ce qui rend le résultat défendable devant le mandant : à la phase 02 il a déjà compris ce que vous aviez relevé, et les reprendre en fin de projet pour prouver l'effet aura un réel impact.",
    ],
    faire: [
      "Reprendre les KPIs de l'étape 02 et refaire la même mesure, <strong class='font-medium text-gray-700'>dans les mêmes conditions</strong> : même période de référence, même méthode de comptage, mêmes personnes interrogées si possible.",
      "Écrire les deux valeurs côte à côte, souvent dans un tableau avec la date de chaque relevé. Un écart sans date ne veut rien dire, surtout si l'activité de l'entreprise est saisonnière.",
    ],
    piege: "Changer la façon de compter entre l'avant et l'après. Compter les heures d'une tâche sur une semaine chargée puis sur une semaine creuse produit un gain qui n'existe pas, et personne ne s'en apercevra avant longtemps.",
    outil: null,
  },
  {
    num: '②', verbe: 'Tester', objet: 'les usages',
    titre: "Regarder comment l'outil est utilisé",
    pourquoiTitre: "Pourquoi le chiffre ne suffit pas",
    pourquoi: [
      "Un indicateur qui n'a pas bougé signale un problème sans jamais dire lequel. Il faut aller voir pour comprendre si l'outil est mal conçu, mal compris, ou simplement contourné.",
      "Et à ce stade, une partie des utilisateurs n'a jamais été observée : les clients de l'entreprise, dès que la solution comporte une partie publique.",
    ],
    faire: [
      "Mener des <strong class='font-medium text-gray-700'>tests utilisateurs</strong> : confier une tâche réelle à quelqu'un puis le laisser faire sans guider, en notant chaque hésitation, chaque détour et chaque abandon.",
      "Compléter par l'observation en situation quand un test n'est pas envisageable : regarder comment l'outil s'utilise une journée ordinaire suffit souvent à repérer les contournements installés.",
      "Selon le projet, l'un ou l'autre prendra le dessus. Une solution purement interne se juge avec l'équipe ; dès qu'il y a une partie publique, il faut des personnes extérieures à l'entreprise.",
    ],
    piege: "Ne prendre en compte que l'avis oral. Ce que les gens disent de leur usage et ce qu'ils en font sont deux choses différentes, sans mauvaise foi de leur part : on décrit le processus tel qu'on croit le suivre, pas tel qu'on le suit.",
    outil: null,
  },
  {
    num: '③', verbe: 'Croiser', objet: 'les résultats',
    titre: 'Mettre les chiffres et les usages en regard',
    pourquoiTitre: 'Pourquoi est-ce utile',
    pourquoi: [
      "Le quantitatif dit combien, le qualitatif dit pourquoi. Pris isolément, chacun peut mener à de mauvaises décisions : on refait une interface qui fonctionnait ou on laisse en place un blocage que trois personnes contournent en silence.",
      "C'est le même croisement que celui de l'étape 02, appliqué cette fois à ce qui a été livré.",
    ],
    faire: [
      "Rapprocher chaque écart mesuré des observations qui le concernent. Un temps de traitement qui n'a pas baissé s'explique souvent par un geste précis, visible en observation.",
      "Séparer ensuite ce qui relève de <strong class='font-medium text-gray-700'>l'outil</strong>, de <strong class='font-medium text-gray-700'>l'apprentissage</strong> et du <strong class='font-medium text-gray-700'>processus</strong>. Les trois pourront se corriger différemment.",
    ],
    piege: "Interpréter seul. Présenter le croisement à l'entreprise et lui demander ce qu'elle en pense évite de prendre un élément pour une règle générale.",
    outil: null,
  },
  {
    num: '④', verbe: 'Décider', objet: 'la suite',
    titre: 'Arbitrer ce qui vient ensuite',
    pourquoiTitre: 'Pourquoi mesurer sans décider ne sert à rien',
    pourquoi: [
      "Une mesure qui ne débouche sur aucune décision est un rapport de plus. L'intérêt de cette étape est de rendre le choix suivant discutable sur des faits, alors que le premier projet s'était décidé sur des constats.",
      "C'est aussi le moment où l'entreprise voit ce que la démarche lui a coûté et rapporté, ce qui conditionne son envie de continuer et pour cela il s'agit à nouveau d'une priorisation à soumettre d'après les résultats.",
    ],
    faire: [
      "Trier et prioriser ce qui ressort. Pour trancher, la matrice d'Eisenhower n'est pas la seule possible. Croiser la valeur ajoutée et l'effort de mise en place, ou le caractère bloquant d'un problème et la difficulté à le corriger, donne souvent un classement plus parlant à ce stade du projet.",
      "Reprendre à cette occasion les besoins reportés ou délégués à l'étape 03. Ils reviennent avec un contexte différent, et parfois une priorité inversée.", 
    ],
    piege: "Ne faire que constater et s'arrêter là. Il est important de faire prendre conscience au mandant que cette étape fait partie du processus car une première version est rarement la plus optimale.",
    outil: outil['matrices-de-decision'],
  },
]

const courant = computed(() => temps[actif.value])

/* ── Contenus des blocs ───────────────────────────────────────── */

const familles = [
  {
    nom: 'Le temps',
    exemple: 'Heures par jour ou semaine sur une tâche',
    desc: "L'indicateur le plus parlant en micro-entreprise, parce que le temps est presque toujours la ressource qui manquait au départ. Il peut se relever par une estimation de l'équipe, ou encore une observation en situation.",
  },
  {
    nom: 'Le volume',
    exemple: 'À effectif constant',
    desc: "Commandes traitées, clients servis, appels reçus, etc. Il dit si l'entreprise peut prendre plus de travail sans embaucher, ce qui est souvent l'enjeu réel derrière une demande de digitalisation.",
  },
  {
    nom: 'La qualité',
    exemple: 'Erreurs, ressaisies, réclamations',
    desc: "Moins spectaculaire que le temps, mais c'est fréquemment là que le gain apparaît en premier. Une erreur évitée, c'est un client qui ne rappelle pas et une correction qui ne se fait pas.",
  },
  {
    nom: "L'usage réel",
    exemple: "Part des opérations passées dans l'outil",
    desc: "Le seul indicateur qui dise si la solution est vivante. Un outil parfait utilisé par une personne sur quatre est un outil qui va disparaître dès que cette personne s'absentera.",
  },
]

const criteres = [
  "Les indicateurs relevés sont ceux définis au diagnostic",
  "L'avant et l'après ont été mesurés et comparés dans les mêmes conditions",
  "Des tests utilisateurs ont été menés pour évaluer les usages",
  "Les clients finaux ont été impliqués si la solution comporte une partie publique",
  "Les résultats ont été croisés et les conclusions ont été discutées avec l'entreprise",
  "Les priorités pour la suite ont été définies",
]

const coches = ref(criteres.map(() => false))

const chiffres = [
  { val: '3', label: "sprints avant l'invalidation" },
  { val: '2', label: 'grilles croisées à chaque atelier' },
  { val: '0', label: 'comparaison avant / après' },
]
</script>

<style scoped>
.section-blue {
  background: linear-gradient(
    135deg,
    var(--color-blue-900) 0%,
    var(--color-blue-700) 40%,
    var(--color-blue-600) 70%,
    var(--color-blue-500) 100%
  );
}

.section-dark {
  background: var(--color-gray-950);
}

.bloc-decalage {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--color-slate-950) 0%,
    var(--color-slate-900) 35%,
    var(--color-slate-800) 70%,
    var(--color-slate-700) 100%
  );
}

.bloc-decalage::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.45;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

.bloc-decalage > * {
  position: relative;
}

.grain-overlay {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  pointer-events: none;
  opacity: 0.5;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

/* Transitions du carrousel */
.glisse-avant-enter-active,
.glisse-avant-leave-active,
.glisse-arriere-enter-active,
.glisse-arriere-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.glisse-avant-enter-from   { opacity: 0; transform: translateX(28px); }
.glisse-avant-leave-to     { opacity: 0; transform: translateX(-28px); }
.glisse-arriere-enter-from { opacity: 0; transform: translateX(-28px); }
.glisse-arriere-leave-to   { opacity: 0; transform: translateX(28px); }
</style>
