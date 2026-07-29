<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Évaluer les solutions
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Essayer avant d'<em class="italic text-blue-700">choisir</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        Le périmètre est arrêté. Reste à choisir avec quoi le traiter, et à vérifier que ce choix tient avant de s'y engager.
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
                Un besoin n'appelle pas forcément son outil
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Le but ici n'est pas de prendre chaque besoin séparément pour lui trouver un outil, mais de voir ce qui peut être couvert ensemble. Chercher une réponse par ligne conduit à avoir autant d'outils que de besoins et demande à l'équipe d'apprendre autant d'interfaces qu'elle n'a de besoin, et ce n'est pas ce que l'on souhaite.
              </p>
            </div>
            <div></div>
          </div>

          <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            Deux questions à cela
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-3">
                Que peut-on regrouper ?
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Plusieurs besoins se couvrent souvent d'un seul geste. Centraliser les données clients, tracer les commandes et suivre le stock relèvent d'un même système. Les traiter séparément multiplie les outils sans rien simplifier.
              </p>
            </div>

            <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-3">
                Quelle forme doit prendre la réponse ?
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Une plateforme unique, plusieurs outils qui se parlent, du sur-mesure, ou parfois rien du tout. C'est une question décisive pour la suite et pouvoir confronter une façon plutôt qu'une autre permettra de prendre la décision la plus adéquate.
              </p>
            </div>
          </div>
        </div>

        <!--  La démarche   -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="flex items-end justify-between gap-8 mb-8">
            <div>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                La démarche
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug">
                Des besoins à une solution éprouvée
              </h2>
            </div>
          </div>

          <!-- Onglets -->
<div class="grid grid-cols-3 gap-px rounded-xl overflow-hidden mb-8" style="background:#e5e7eb">            <button
              v-for="(t, i) in temps"
              :key="t.num"
              type="button"
              @click="aller(i)"
              class="px-4 py-6 flex flex-col items-center text-center transition-colors duration-150"
              :style="{ background: i === actif ? '#111110' : '#f9fafb' }"
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

        <!-- Les quatre formes -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="grid grid-cols-3 gap-12 items-start mb-8">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Les formes possibles
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                Quatre réponses, et aucune n'est meilleure en soi
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Chacune règle ce que les autres laissent en suspens. Le choix ne se fait pas sur la qualité de la forme, mais sur la nature des contraintes que l'entreprise est en mesure d'assumer dans la durée.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="f in formes" :key="f.nom" class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-1">{{ f.nom }}</p>
              <p class="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">{{ f.quand }}</p>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ f.desc }}</p>
              <p class="text-xs text-gray-500 leading-relaxed pt-3 border-t border-gray-200">
                <strong class="font-medium text-gray-700">Ce que ça coûte :</strong> {{ f.cout }}
              </p>
            </div>
          </div>
          <div class="rounded-xl  mt-4">
            <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            Aucune de ces formes n'est sans maintenance
          </p>
          <p class="text-sm text-gray-500 leading-relaxed mb-3">
            Une plateforme demande de suivre les évolutions de son éditeur et d'enrichir le contenu au fil du temps ; un écosystème casse là où les outils se parlent ; le sur-mesure réclame des mises à jour et des correctifs de sécurité. Ce qui varie d'une forme à l'autre, et d'un besoin à l'autre, c'est la nature de cette maintenance et le volume qu'il représente, jamais son existence.
          </p>
          <p class="text-sm text-gray-500 leading-relaxed">
            La question à poser au mandant n'est donc pas « y aura-t-il de la maintenance ? », mais <strong class="font-medium text-gray-700">« qui la fera, et combien de temps prendra-t-elle chaque année ? »</strong>. Une solution facile à utiliser n'est pas une solution qui se maintient toute seule.
          </p>
        </div>
        </div>

        <!-- Le sur-mesure -->
        <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-4" style="border:0.5px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8)">
                  Pour aller plus loin
                </span>
                <h2 class="font-display text-2xl font-medium leading-snug mb-4 text-white">
                  Le sur-mesure n'est plus réservé aux gros budgets
                </h2>
                <p class="text-sm leading-relaxed mb-3" style="color:rgba(255,255,255,0.75)">
                  Le réflexe est bien installé : une petite structure, une équipe sans compétence technique, un budget serré... donc une plateforme toute faite. Le sur-mesure est écarté avant même d'être évalué, parce qu'il évoque des mois de développement et une facture hors de portée.
                </p>
                <p class="text-sm leading-relaxed mb-8" style="color:rgba(255,255,255,0.75)">
                  Ce réflexe mérite d'être réexaminé.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-8" style="background:rgba(255,255,255,0.2)">
              <div class="px-8 py-8" style="background:rgba(255,255,255,0.08)">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce qui a changé</p>
                <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.75)">
                  L'assistance par intelligence artificielle a fait chuter le coût de conception. Ce qui demandait des semaines s'obtient en quelques jours, à condition de savoir cadrer le travail et vérifier ce qui sort. Un ingénieur des médias a précisément ces compétences.
                </p>
              </div>
              <div class="px-8 py-8" style="background:rgba(255,255,255,0.08)">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce qui n'a pas changé</p>
                <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.75)">
                  Le coût d'exploitation. Une solution sur mesure se maintient aussi longtemps qu'elle sert : mises à jour, correctifs de sécurité, adaptation aux services externes. Pour ça, l'entreprise n'a souvent pas les compétences nécessaires ce qui nécessite une resource externe.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <p class="text-xs font-medium uppercase tracking-widest mb-3" style="color:rgba(255,255,255,0.5)">Le critère qui tranche</p>
                <p class="text-sm leading-relaxed mb-8" style="color:rgba(255,255,255,0.75)">
                  La question maintnant c'est <strong class="font-medium text-white">« qui maintiendra, dans la durée ? »</strong>. Une entreprise avec un prestataire attitré ou une personne compétente en interne peut assumer du sur-mesure. En revanche, une entreprise sans personne pour reprendre la main ne le peut pas, quelle que soit la facilité avec laquelle elle aura été construite.
                </p>
              </div>
              <div></div>
            </div>

            <div class="rounded-xl p-6" style="background:rgba(255,255,255,0.08)">
              <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.9)">
                Le point à retenir n'est pas que le sur-mesure soit devenu la bonne réponse. C'est qu'il est <strong class="font-medium">redevenu une option à évaluer</strong>, là où on l'écartait par principe. Le mettre dans la comparaison ne coûte rien ; l'en exclure d'emblée peut coûter des mois de contournements sur une plateforme qui ne convenait pas. L'exemple pratique chez Photogare en a fait la démonstration.
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
              Comment savoir que le choix tient
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
              Simple à utiliser VS simple à mettre en place
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              L'entreprise demande quelque chose de simple, et elle a raison : elle devra vivre avec. Mais cette exigence porte sur l'usage quotidien, pas sur la mise en œuvre et ce sont deux choses différentes, parfois même opposées.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Une plateforme réputée pour êtrefacile peut exiger, dès qu'un processus sort du standard, du code, des applications tierces et des contournements. À l'arrivée, l'équipe hérite d'un système qu'elle ne comprend pas mieux, et le temps passé dépasse ce qu'aurait coûté une solution construite pour elle.
            </p>
            <div class="rounded-xl bg-blue-50 border border-blue-100 p-5">
              <p class="text-sm text-gray-500 leading-relaxed">
                <strong class="font-medium text-gray-700">La bonne question :</strong> qu'est-ce qui doit être simple, et pour qui ? Simple à utiliser pour l'équipe, ou simple à installer pour vous ? La réponse n'est pas la même, et elle ne conduit pas au même outil.
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
              Une plateforme choisie sur dossier, et jamais éprouvée
            </h2>

            <div class="grid grid-cols-3 gap-12 items-start mb-8">
              <div class="col-span-2">
                <p class="text-sm leading-relaxed mb-3 text-gray-500">
                  Les huit besoins retenus ont été regroupés autour d'une plateforme de gestion unique, complétée par deux outils satellites : un pour le transfert de fichiers, un pour l'expédition, etc. La forme relevait donc de l'écosystème plutôt que de la plateforme seule.
                </p>
                <p class="text-sm leading-relaxed text-gray-500">
                  Quatre plateformes ont été comparées sur une grille de critères couvrant la courbe d'apprentissage, la maintenance, la gestion des contacts, les coûts, les intégrations possibles et la gestion des réservations. Wix a été retenu pour son interface accessible, en français, son module de contacts natif et ses systèmes intégrés en lien avec les commandes et réservations.
                </p>
              </div>
              <div></div>
            </div>

            <div class="rounded-xl p-8 bloc-decalage mb-5">
              <p class="text-xs font-medium uppercase tracking-widest mb-4 text-gray-500">L'erreur</p>
              <p class="text-sm leading-relaxed mb-4 text-gray-400">
                Le choix a reposé sur l'exploration des fonctionnalités, la lecture de la documentation et une grille comparative. Tout concordait : l'interface était accessible, les modules nécessaires existaient, le tarif convenait.
              </p>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                <strong class="font-medium">Mais aucun test n'a été mené sur un cas réel pendant la phase de définition.</strong> Les fonctionnalités ont été regardées, jamais éprouvées.
              </p>
              <p class="text-sm leading-relaxed mb-5 text-gray-400">
                Les premières semaines ont semblé confirmer le choix jusqu'au moment où il a fallu configurer :
              </p>
              <p class="font-display text-lg font-medium leading-snug mb-5 text-white">
                La tarification dégressive du service de tirage
              </p>
              <p class="text-sm leading-relaxed mb-3 text-gray-400">
                Des prix par paliers qui ne suivent pas la même logique d'un format à l'autre. Ce mécanisme ne correspondait à aucune fonction native. Des extensions existantes ne répondaient pas au besoin. Il a fallu l'équivalent d'une semaine de développement pour le reproduire, et certaines limites du panier se sont révélées impossibles à lever, dû au blocage de la plateforme.
              </p>
            </div>

            <div class="rounded-xl p-6 mb-5 bg-gray-950">
              <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">L'expérimentation</p>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                Plutôt que de continuer à empiler des couches, la dernière phase de mon travail a été consacrée à une évaluation comparative : développer, sur une durée volontairement limitée, un proof of concept en vibe coding avec Claude Opus 4.8 confronté aux frictions recensées sur la plateforme, puis mesurer lesquelles étaient réellement levées et à quel prix.
              </p>
              <p class="text-sm leading-relaxed mb-6 text-white/85">
                Les critères d'acceptation ont été posés avant la première ligne de code, l'environnement configuré à l'avance pour garantir la testabilité, et le développement mené en coworking avec Claude.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden bg-gray-800">
                <div v-for="s in chiffres" :key="s.val" class="px-6 py-7 flex flex-col items-center text-center bg-gray-950">
                  <p class="font-display text-4xl font-medium leading-none mb-3 text-white">{{ s.val }}</p>
                  <p class="text-xs font-medium tracking-widest uppercase leading-relaxed text-gray-500">{{ s.label }}</p>
                </div>
              </div>
            </div>

            <div class="rounded-xl p-6 bg-gray-800">
              <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">Ce que ça démontre</p>
              <p class="text-sm leading-relaxed mb-3 text-white/85">
                En comparaison avec la plateforme, le sur-mesure reste plus cher sur la durée, environ deux fois et demie la plateforme sur cinq ans, l'écart tenant surtout à la maintenance. En revanche l'avantage du sur-mesure est de lever des frictions qui ne peuvent pas être levées sur la plateforme. Ceci permet donc à l'équipe de se concentrer sur le travail à valeur ajoutée mais surtout d'optimiser du temps permettant d'obtenir un retour sur investissement plus rapide et ainsi minimiser les coûts supplémentaires du sur-mesure sur la durée. 
              </p>
              <p class="text-sm leading-relaxed mb-3 text-white/85">
                Celà n'est donc pas forcément la bonne réponse par défaut. Mais ce n'était pas non plus une option déraisonnable : elle n'avait simplement jamais été évaluée, écartée d'emblée parce que l'entreprise était petite et son équipe non technique.
              </p>
              <p class="text-sm leading-relaxed text-white/85">
                En prenant en compte d'entrée cette possibilité et en testant les autres solutions évaluées, le choix final n'aurait très certainement pas été le même.
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
    num: '①', verbe: 'Cadrer', objet: 'la réponse',
    titre: 'Cadrer la forme de la réponse',
    pourquoiTitre: 'Pourquoi avant de regarder des produits',
    pourquoi: [
      "Il est important de poser les bonnes questions avant de se lancer dans la recherche de solutions. C'est pour cela que les deux questions posées plus haut se tranchent maintenant, avant même d'avoir fait une selection de solution. Si on part à la recherche d'outils sans savoir ce qu'on cherche, on risque de se laisser séduire par des démonstrations commerciales et de retenir une solution qui ne convient pas.",
    ],
    faire: [
      "Même si cela n'est pas représenter noir sur blanc, il faut créer des groupes de besoins que ce soit des besoins qui touchent le même sujet, ou qui surviennent au même moment, ce sont des besoins quiforment un bloc. Ce qui reste isolé appellera soit un outil dédié, soit une liaison à construire.",
    ],
    piege: "Éliminer le sur-mesure par réflexe. Une petite structure et une équipe non technique n'excluent pas cette forme, elles rendent seulement la question de la maintenance décisive. L'écarter sans l'évaluer, c'est se priver d'un point de comparaison qui ne coûte rien à établir, surtout avec les outils actuels.",
    outil: null,
  },
  {
    num: '②', verbe: 'Comparer', objet: 'les candidates',
    titre: 'Comparer les solutions candidates',
    pourquoiTitre: 'Pourquoi une grille avant de regarder les produits',
    pourquoi: [
      "Une vidéo marketing d'un produit ou d'une solution montre l'outil sur le cas pour lequel il est conçu. Concevoir une grille basée sur des critères d'évaluation d'après les besoins identifiés force à définir ce qu'on cherche, et rend le choix défendable devant le mandant, ce qui compte autant que le choix lui-même.",
    ],
    faire: [
      "Choisir trois à cinq candidates, évaluées sur des critères d'importance (forte ou faible) qui aideront à juger de leur pertinence. Cela peut être la courbe d'apprentissage, la maintenance, le coût, etc.",
    ],
    piege: "Ne pas tenir compte d'une contrainte transversale qui doit être éliminatoire. Il est important de ne pas les omettre et d'éliminer toute solution qui ne répond pas à cette contrainte.",
    outil: {
      nom: 'Benchmark des solutions',
      desc: 'Grille comparative, critères pondérés et contraintes éliminatoires',
      notion: 'https://outilsplaybook.notion.site/benchmark-solutions',
      fichier: '/gabarits/benchmark-solutions.pdf',
    },
  },
  {
    num: '③', verbe: 'Tester', objet: 'le choix',
    titre: 'tester avant de retenir',
    pourquoiTitre: 'Pourquoi une grille ne suffit pas',
    pourquoi: [
      "Là où la grille regroupe la partie pertinente de ce que la documentation annonce, le test permet de la confronter au cas réel de l'entreprise. Sans test, l'écart entre les deux ne se manifeste pas au moment du choix, mais des semaines plus tard, quand le travail est engagé et qu'il devient coûteux de revenir en arrière.", 
      "Le test est d'autant plus important quand une solution n'a jamais été exploitée par vos soins. Avec l'expérience, vous connaissez des outils et leurs limites. Sans expérience, vous ignorez ce que vous ne savez pas, et c'est pour cela que tester vous sera bénéfique, même si la solution venait à pas être celle retenue."
    ],
    faire: [
      "<strong class='font-medium text-gray-700'>Confronter la solution au processus le plus atypique de l'entreprise.</strong> Le processus courant passe partout et c'est pour lui que les outils sont conçus. Par contre, prendre le temps de tester une option sur un cas particulier révèle si la solution tient. Contrairement à ce que l'on pourrait croire, chaque domaine a ses particularités et il est important de les tester avant de s'engager.",
      "Vérifier aussi les conditions d'usage, distinctement des fonctionnalités : le plan gratuit a-t-il des limitations ? existe-t-il un prérequis administratif ? une limite de volume ? Consigner enfin ce qui n'a pas pu être testé, pour connaître la zone d'incertitude avant d'aller plus loin.",
    ],
    piege: "Ne pas prendre le temps de tester la solution rentenue. Le test est la seule façon de savoir si la solution tient, et il est important de le faire pour garantir que le chois est le bon.",
    outil: null,
  },
]

const courant = computed(() => temps[actif.value])

/* ── Contenus des blocs ───────────────────────────────────────── */

const formes = [
  {
    nom: 'Une plateforme unique',
    quand: 'Besoins proches des standards',
    desc: "Un seul outil couvre l'essentiel. L'équipe apprend une interface, la maintenance est portée par l'éditeur, la sécurité et l'hébergement sont inclus.",
    cout: "de la rigidité dès qu'un processus s'écarte du chemin prévu et une dépendance totale aux évolutions de l'éditeur.",
  },
  {
    nom: 'Un écosystème connecté',
    quand: 'Un socle, des besoins spécifiques',
    desc: "Une plateforme unique complétée d'outils spécialisés qui communiquent avec elle. Chaque brique ajoutée permet de couvrir un besoin particulier.",
    cout: "chaque liaison est une dépendance de plus, un abonnement de plus, et un point de rupture quand l'un des services évolue.",
  },
  {
    nom: 'Du sur-mesure',
    quand: 'Des processus vraiment propres',
    desc: "Une solution construite pour l'entreprise, qui épouse ses règles métier au lieu de l'obliger à s'y plier. Plus accessible qu'avant grâce à l'assistance par IA.",
    cout: "il faut quelqu'un pour la maintenir aussi longtemps qu'elle sert, c'est le seul critère qui décide vraiment.",
  },
  {
    nom: 'Aucun outil',
    quand: 'Le gain vient de la réorganisation',
    desc: "Certaines frictions se règlent en changeant une règle de travail, un ordre d'opérations ou une responsabilité. Aucune technologie n'est nécessaire.",
    cout: "rien, sinon la difficulté de faire accepter qu'on ne livre pas d'outil mais parfois il s'agit de la meilleure solution.",
  },
]

const criteres = [
  "Les besoins ont été regroupés avant qu'aucun produit ne soit regardé",
  "La forme de la réponse a été choisie explicitement (plateforme unique, écosystème, sur-mesure ou réorganisation)",
  "Les contraintes transversales ont été appliquées comme éliminatoires",
  "La solution retenue a été confrontée aux contraintes métier de l'entreprise",
  "Les conditions d'usage ont été vérifiées, pas seulement les fonctionnalités",
  "Ce qui n'a pas pu être testé est écrit, et connu du mandant",
]

const coches = ref(criteres.map(() => false))

const chiffres = [
  { val: '5', label: 'jours de développement' },
  { val: '9', label: 'frictions levées sur 9' },
  { val: '×2,5', label: 'plus cher sur cinq ans' },
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
