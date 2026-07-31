<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Organiser le projet
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Avancer par <em class="italic text-blue-700">itérations</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        La solution est choisie. Reste à organiser le travail pour que l'entreprise suive, comprenne et s'approprie ce qui se construit.
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
                Un planning figé n'est pas adapté à une petite structure
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Organiser un projet, ce n'est pas dérouler un planning établi une fois pour toutes. Dans une micro-entreprise, la disponibilité est irrégulière, les priorités bougent au rythme de l'activité, et une partie de ce qu'il faudra faire n'apparaît qu'en construisant. La gestion de projet se fait donc en posant un cadre capable d'absorber ces variations.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <!-- Cascade ou itératif -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="grid grid-cols-3 gap-12 items-start mb-8">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Le choix de méthode
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                Pourquoi itérer plutôt que tout planifier d'avance
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Les deux approches ne se distinguent pas par leur sérieux mais par le moment où l'écart se révèle. En cascade, il apparaît à la livraison. En itératif, à la fin de chaque cycle, de manière à pouvoir l'ajuster en fonction des retours.
              </p>
            </div>
            <div></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="a in approches" :key="a.nom" class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-1">{{ a.nom }}</p>
              <p class="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">{{ a.quand }}</p>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ a.desc }}</p>
              <p class="text-xs text-gray-500 leading-relaxed pt-3 border-t border-gray-200">
                <strong class="font-medium text-gray-700">Ce que ça suppose :</strong> {{ a.cout }}
              </p>
            </div>
          </div>

          <div class="rounded-xl mt-4">
            <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              S'adapter à leurs manières de travailler
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-3">
              Une micro-entreprise n'a ni équipe projet, ni responsable produit, ni gestionnaire de projet. Parfois certaines vont préférer ne pas être impliquées dans le déroulement de la mise en place et d'autres vont le vouloir. Mais de manière générale, les projets agiles permettent une vrai flexibilité et c'est souvent celle-ci qui va primer. Son avantage est de pouvoir prendre en compte l'agenda des parties prenantes, et trouver un juste milieu pour ne pas les déborder non plus.
            </p>
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
                Faire avancer un projet agile
              </h2>
            </div>
          </div>

          <!-- Onglets -->
          <div class="grid grid-cols-5 gap-px rounded-xl overflow-hidden mb-8 bg-gray-200">
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

        <!-- L'accompagnement -->
        <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-4 border-[0.5px] border-white/30 text-white/80">
                  Pour aller plus loin
                </span>
                <h2 class="font-display text-2xl font-medium leading-snug mb-4 text-white">
                  Dans une micro-entreprise, l'accompagnement fait partie du livrable
                </h2>
                <p class="text-sm leading-relaxed mb-3 text-white/75">
                  Dans une grande structure, un projet digital s'appuie souvent sur des personnes dont c'est le métier : un service informatique, un chef de projet, un référent outil. Dans une micro-entreprise, il n'y a personne. L'équipe fait déjà tourner l'entreprise et le projet vient s'ajouter à cela, sans que le travail quotidien ne s'arrête.
                </p>
                <p class="text-sm leading-relaxed mb-8 text-white/75">
                  L'accompagnement n'est donc pas un supplément de confort. C'est ce qui décide si l'outil sera encore utilisé quelques mois après votre départ.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-8 bg-white/20">
              <div class="px-8 py-8 bg-white/8">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce que vous apportez</p>
                <p class="text-sm leading-relaxed text-white/75">
                  Une compétence méthodologique et technique que l'entreprise n'a pas, et n'aura pas. C'est la raison pour laquelle elle fait appel à vous : traduire un besoin en solution, arbitrer, et tenir le cap du projet pendant que l'activité continue.
                </p>
              </div>
              <div class="px-8 py-8 bg-white/8">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce que vous ne devez pas garder</p>
                <p class="text-sm leading-relaxed text-white/75">
                  La connaissance du fonctionnement de l'outil. Si vous êtes la seule personne à savoir où l'on modifie un tarif ou comment on ajoute un produit, l'entreprise n'est pas équipée, elle est dépendante. Et cette dépendance a un coût qu'elle n'a pas prévu.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <p class="text-xs font-medium uppercase tracking-widest mb-3 text-white/50">Le critère qui tranche</p>
                <p class="text-sm leading-relaxed mb-8 text-white/75">
                  La question n'est pas « est-ce que l'outil fonctionne ? » mais <strong class="font-medium text-white">« est-ce que l'équipe saura s'en servir et le faire évoluer sans moi ? »</strong>. La première se vérifie en une démonstration. La seconde se construit à chaque cycle, en faisant manipuler l'équipe plutôt qu'en lui montrant le résultat.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <!-- Les ateliers -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="grid grid-cols-3 gap-12 items-start mb-8">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Les ateliers
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                Quatre moments où réunir l'équipe
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="a in ateliers" :key="a.nom" class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-1">{{ a.nom }}</p>
              <p class="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">{{ a.quand }}</p>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ a.desc }}</p>
              <p class="text-xs text-gray-500 leading-relaxed pt-3 border-t border-gray-200">
                <strong class="font-medium text-gray-700">Ce qui en sort :</strong> {{ a.sortie }}
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
              Comment savoir que le projet est organisé
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
              Confondre itératif et absence de cadre
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Travailler par itérations est souvent compris comme une autorisation à ne rien planifier : on avance, on verra bien. C'est l'inverse. Itérer demande plus de discipline qu'une cascade, parce qu'il va falloir parfois redéfinir un objectif au lieu de le faire une seule fois au début.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Sans ça, les cycles s'allongent, les ateliers ne sont pas organisés, et le projet reprend la forme qu'on voulait éviter : une longue phase de travail invisible, suivie d'une livraison que l'entreprise découvre.
            </p>
            <div class="rounded-xl bg-blue-50 border border-blue-100 p-5">
              <p class="text-sm text-gray-500 leading-relaxed">
                <strong class="font-medium text-gray-700">La bonne question :</strong> à la fin de ce cycle, qu'est-ce que l'entreprise pourra voir et utiliser ? Si la réponse n'existe pas avant de commencer, le cycle n'est pas cadré.
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
              Quatre phases, un atelier à chaque fin, et un cap qui a changé en cours de route
            </h2>

            <div class="grid grid-cols-3 gap-12 items-start mb-8">
              <div class="col-span-2">
                <p class="text-sm leading-relaxed mb-3 text-gray-500">
                  Après la pré-étude, les huit besoins retenus ont été répartis en quatre phases, chacune se terminant par un atelier d'accompagnement. Quand cela était nécessaire, un atelier de cadrage ouvrait la phase pour trancher certains choix avec l'équipe.
                </p>
                <p class="text-sm leading-relaxed text-gray-500">
                  Travailler directement dans le magasin rendait par ailleurs les échanges quotidiens : les questions se réglaient dans la journée, sans attendre un rendez-vous.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden mb-8 bg-gray-800">
              <div v-for="s in chiffres" :key="s.label" class="px-6 py-7 flex flex-col items-center text-center bg-gray-950">
                <p class="font-display text-4xl font-medium leading-none mb-3 text-white">{{ s.val }}</p>
                <p class="text-xs font-medium tracking-widest uppercase leading-relaxed text-gray-500">{{ s.label }}</p>
              </div>
            </div>

            <div class="rounded-xl p-6 mb-5 bg-gray-950">
              <p class="text-xs font-medium uppercase tracking-widest mb-4 text-gray-500">Le découpage</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="ph in phases" :key="ph.num">
                  <p class="font-display text-sm font-medium mb-1 text-white">
                    <span class="text-gray-500 tabular-nums mr-2">{{ ph.num }}</span>{{ ph.nom }}
                  </p>
                  <p class="text-sm leading-relaxed text-gray-500">{{ ph.desc }}</p>
                </div>
              </div>
            </div>

            <div class="rounded-xl p-8 bloc-decalage mb-5">
              <p class="text-xs font-medium uppercase tracking-widest mb-4 text-gray-500">Ce que le découpage a permis</p>
              <p class="text-sm leading-relaxed mb-4 text-gray-400">
                Les trois premières phases ont fait apparaître, de façon de plus en plus nette, les limites de la plateforme Wix. C'est surtout pendant la troisième, consacrée à l'intégration d'outils, que les blocages sont devenus difficiles à contourner.
              </p>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                <strong class="font-medium">La quatrième phase a donc été réorientée.</strong> Plutôt que de réaliser le site web comme prévu, elle a été consacrée à une phase exploratoire : évaluer une solution sur mesure et la confronter aux frictions relevées pendant les trois premières.
              </p>
              <p class="text-sm leading-relaxed text-gray-400">
                C'est exactement ce que permet une organisation par phases. Le constat est arrivé assez tôt pour être exploité, un peut trop tard pour être complétement réorienté mais il restait du temps pour en tirer quelque chose. Organisé en cascade, il serait tombé à la livraison, sans budget ni marge pour réagir.
              </p>
            </div>

            <div class="rounded-xl p-6 mb-2 ">
              <h2 class="font-display text-2xl font-medium leading-snug mb-8 max-w-xl text-white">
                Tenue des ateliers
              </h2>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                Chaque atelier de prise en main suivait la même structure : une démonstration, puis des exercices pratiques sur des cas réalistes. Quand le contenu était dense, il était découpé en plusieurs blocs répartis sur plusieurs moments, pour ne pas surcharger l'équipe qui devait continuer à faire tourner le magasin.
              </p>
              <p class="text-sm leading-relaxed text-white/85">
                L'équipe a elle-même identifié ce qui l'aidait le plus à apprendre : voir quelqu'un faire, pouvoir pratiquer ensuite, et disposer d'un support de référence court. C'est de là que sont nées des <strong class="font-medium">fiches réflexes</strong>, créées au cas par cas, volontairement minimalistes mais contenant l'essentiel.
              </p>
            </div>

            <div class="rounded-xl p-6 mb-5 bg-gray-950">
              <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">Les deux grilles d'évaluation</p>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                À la fin de chaque atelier, une grille d'auto-évaluation était remise aux participants, avec des critères adaptés à l'activité traitée. En parallèle, l'animatrice remplissait la sienne sur ce qu'elle avait observé.
              </p>
              <p class="text-sm leading-relaxed text-white/85">
                <strong class="font-medium">Le but n'était ni de noter, ni de juger.</strong> La comparaison des deux grilles servait à repérer les écarts : ce qu'une personne pensait maîtriser sans que ce soit visible, ou ce qu'elle croyait ne pas avoir compris alors que c'était acquis. Chaque écart désignait un point à réexpliquer, ou une partie de l'outil à revoir.
              </p>
            </div>

            <div class="rounded-xl p-6 bg-gray-800">
              <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">Ce que j'en retire</p>
              <p class="text-sm leading-relaxed mb-3 text-white/85">
                Ce sont les ateliers qui ont fait le lien entre ce qui se construisait et l'équipe qui allait s'en servir. Sans eux, le projet aurait produit des outils corrects que personne n'aurait ouverts.
              </p>
              <p class="text-sm leading-relaxed text-white/85">
                Et c'est le découpage en phases qui a permis de changer de direction sans casser le projet. Ni l'un ni l'autre n'était un confort : ce sont les deux éléments qui ont rendu la suite possible.
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
    num: '①', verbe: 'Découper', objet: 'le travail',
    titre: 'Découper le projet',
    pourquoiTitre: 'Pourquoi découper avant de planifier',
    pourquoi: [
      "Un projet agile a pour principe de ne pas être présenté d'un bloc. Il est divisé en plusieurs sprints dont chacun peut être livré indépendamment. L'idée est donc de structuré le projet en lots qui font sens et de pouvoir, à chaque fois, livrer quelque chose d'utile à l'entreprise.",
      "C'est pour cela qu'il est important de découper le projet en livrables, chaque livrable étant dans son propre sprint. Ainsi, chaque lot devient une décision séparée, ce qui rend l'ordre modifiable et permet à l'équipe de se l'approprier.",
    ],
    faire: [
      "Constituer des lots à partir des besoins priorisés à l'étape précédente. <strong class='font-medium text-gray-700'>Chaque lot doit être utilisable seul</strong> : livré, il apporte quelque chose à l'entreprise même si la suite n'existe pas encore.",
      "Les ordonner ensuite selon leur valeur d'usage et leurs dépendances techniques.",
    ],
    piege: "Découper par couche technique : d'abord toute la structure, puis toute l'interface, puis tout le contenu. L'entreprise ne voit rien d'utilisable avant la fin et l'on retombe dans une cascade, simplement découpée en sprints.",
    outil: null,
  },
  {
    num: '②', verbe: 'Cadencer', objet: 'le projet',
    titre: 'Poser un rythme que l\'entreprise peut tenir',
    pourquoiTitre: "Pourquoi le rythme se négocie",
    pourquoi: ["Le rythme, dans une micro-entreprise, c'est l'activité qui le donne, pas le projet. L'équipe n'a pas de temps réservé : chaque heure passée sur le projet est une heure prise ailleurs. C'est pour ça que la longueur des cycles compte autant. Pour cela il est nécessaire de s'adapter à la réalité de l'entreprise. "
    ],
    faire: [
      "Fixer des phases de deux à trois semaines est un bon juste milieu mais le tout est que ça soit en accord avec l'entreprise. Le plus important sera de bloqué le plus tôt possible<strong class='font-medium text-gray-700'>un rendez-vous de fin de cycle dans l'agenda</strong>, à un moment compatible avec l'activité de l'entreprise. Il pourra toutes fois arriver qu'un empêchement survienne dans quel cas un approche agile permet de décaler le rendez-vous sans que le projet ne s'arrête.",
      "Convenir aussi du temps que l'équipe peut réellement donner sur une phase, en heures, et construire le cadre autour de cette contrainte plutôt que l'inverse.",
    ],
    piege: "Ne pas faire preuve de flexibilité et ce piège vaut autant du côté du prestataire que de l'entreprise. Sans prendre en considération les contraintes de l'un et de l'autres, le projet ne pourra pas avancer et l'adhésion de l'équipe sera difficile à obtenir.",
    outil: null,
  },
  {
    num: '③', verbe: 'Planifier', objet: 'le déroulement',
    titre: 'Rendre le déroulement du projet concrêt',
    pourquoiTitre: 'Pourquoi concrêtiser le planning',
    pourquoi: [
      "Le déroulement vous paraît évident, et c'est normal : c'est vous qui l'avez construit. Mais tant qu'il reste dans votre tête ou dans une liste de tâches, il n'existe pas pour le mandant. Or c'est pour lui qu'il doit être clair avant tout : c'est lui qui doit s'organiser et anticiper les moments où on aura besoin de son équipe.",
      "En le posant noir sur blanc, vous vérifiez de votre côté que rien n'a été oublié, et le mandant peut le valider en connaissance de cause. À partir de là, le déroulement est validé des deux côtés.",
    ],
    faire: [
      "Placer chaque lot dans le temps, avec sa durée, ce à quoi il correspond, son ordre et ses dépendances. Y faire figurer aussi les moments où l'entreprise est attendue : ateliers, validations, retours.",
      "Plusieurs formes fonctionnent : un tableau, une kanban, un rétroplanning. La plus adéquat et lisible reste le <strong class='font-medium text-gray-700'>diagramme de Gantt</strong>, où chaque lot devient une barre sur une frise. La durée, l'ordre et les chevauchements se lisent visuellement, sans qu'il faille les décortiquer, ce qui compte beaucoup face à une équipe qui n'a pas l'habitude de la gestion de projet.",
    ],
    piege: "Présenter un planning découpé en dizaines de tâches. L'entreprise n'a pas besoin de votre plan de travail, elle a besoin de savoir quand elle sera sollicitée et quand elle verra quelque chose. Un Gantt de huit barres se retient, un Gantt de quarante lignes se referme.",
    outil: {
      nom: 'Diagramme de Gantt',
      desc: "Frise du projet : lots, durées, dépendances et moments où l'entreprise est attendue",
      notion: 'https://outilsplaybook.notion.site/diagramme-de-gantt',
      fichier: '/gabarits/diagramme-de-gantt.pdf',
    },
  },
  {
    num: '④', verbe: 'Embarquer', objet: "l'équipe",
    titre: "Faire entrer l'équipe dans le projet",
    pourquoiTitre: "Pourquoi l'équipe doit être là pendant, pas à la fin",
    pourquoi: [
      "Dans une micro-entreprise, les personnes qui vont utiliser l'outil sont celles qui font tourner l'entreprise au quotidien. Ce sont elles qui connaissent les cas particuliers que le diagnostic n'a pas vus, et il leur suffit de quelques minutes pour repérer ce qui ne tiendra pas dans leur travail.",
      "C'est tout l'intérêt d'avancer par itérations plutôt qu'en cascade : l'équipe voit l'outil se construire au lieu de le découvrir terminé.",
    ],
    faire: [
      "Prévoir des ateliers réguliers tout au long du projet, mais surtout ne jamais sauter<strong class='font-medium text-gray-700'> l'atelier d'accompagnement</strong>, en fin de phase. C'est le minimum vital : à chaque lot livré, l'équipe doit pouvoir prendre l'outil en main devant vous, sur ses propres cas.",
      "Pendant cet atelier, <strong class='font-medium text-gray-700'>varier les façons d'expliquer</strong>. Une même chose ne passe pas de la même manière pour tout le monde : certains comprennent en regardant faire, d'autres ont besoin d'un schéma sous les yeux, d'autres encore ne retiennent qu'après avoir essayé eux-mêmes. Montrer, faire faire, puis évaluer ce qui a été effectué.",
    ],
    piege: "Arriver à l'atelier sans l'avoir préparé, en se disant qu'on connaît assez bien l'outil pour improviser. Il y aura toujours quelque chose d'oublié, et l'équipe repartira avec une démonstration à trous. Préparer le déroulé coûte une heure, et offrira une réelle structure.",
    outil: {
      nom: "Atelier d'accompagnement",
      desc: "Trame d'animation : objectif, déroulé, production attendue et relevé des décisions",
      notion: 'https://outilsplaybook.notion.site/guide-atelier-accompagnement',
      fichier: '/gabarits/guide-atelier-accompagnement.pdf',
    },
  },
  {
    num: '⑤', verbe: 'Tracer', objet: 'les décisions',
    titre: 'Garder trace de ce qui se décide',
    pourquoiTitre: 'Pourquoi noter',
    pourquoi: [
      "Un projet accompagné produit énormément de décisions orales. Quelques semaines plus tard, plus personne ne se souvient pourquoi telle option a été écartée, et la question revient sur la table comme si elle n'avait jamais été tranchée.",
      "En prendre note a donc deux avantages : éviter de requestionner les mêmes éléments, et rendre la démarche défendable. C'est aussi ce qui permet de maintenir l'organisation du projet.",
    ],
    faire: [
      "Tenir ce qu'on appel un jounal de bord. Celui ci peut prendre la simple forme d'un paragraphe journalier que vous écriver pour faire un compte rendu de la journée ou être plus structuré : <strong class='font-medium text-gray-700'>ce qui a été décidé et pourquoi</strong>, ce qui a été écarté, et ce qui bloque encore.",
      "Relire ces notes pour concevoir et parler des points importants au rendez-vous de fin de cycle, c'est ce qui transforme le journal en outil de pilotage plutôt qu'en simple archive.",
    ],
    outil: {
      nom: 'Journal de bord',
      desc: 'Suivi par cycle : décisions, arbitrages, écarts et points bloquants',
      notion: 'https://outilsplaybook.notion.site/journal-de-bord',
      fichier: '/gabarits/journal-de-bord.pdf',
    },
  },
]

const courant = computed(() => temps[actif.value])

/* ── Contenus des blocs ───────────────────────────────────────── */

const approches = [
  {
    nom: 'En cascade',
    quand: 'Périmètre stable et connu',
    desc: "Tout est spécifié au départ puis exécuté dans l'ordre : analyse, conception, réalisation, livraison. L'entreprise valide un document au début et découvre le résultat à la fin.",
    cout: "que le besoin ne bouge pas et que rien d'imprévu n'apparaisse en construisant. Sinon, l'écart ne se révèle qu'à la livraison.",
  },
  {
    nom: 'Agile',
    quand: 'Périmètre qui se précise en avançant',
    desc: "Le projet est découpé en sprint. Chaque cycle produit quelque chose de visible, montré à l'entreprise puis corrigé si nécessaire avant d'enchaîner sur le suivant.",
    cout: "une disponibilité régulière de l'entreprise et l'acceptation de montrer du travail inachevé. En contrepartie, une erreur ne coûte jamais plus qu'un cycle.",
  },
]

const ateliers = [
  {
    nom: 'Atelier de démarrage',
    quand: 'Au démarrage du projet',
    desc: "Présenter les lots, le rythme et les rôles de chacun. Vérifier que le découpage parle à l'équipe et récolter ce que le diagnostic n'a pas vu.",
    sortie: "un périmètre partagé et un calendrier que l'entreprise a accepté, pas seulement reçu.",
  },
  {
    nom: 'Atelier de cadrage',
    quand: 'À chaque début de cycle',
    desc: "Discuter de la phase qui va suivre et y prendre les décisions nécessaires. L'entreprise valide le contenu du cycle et l'équipe s'engage à le réaliser.",
    sortie: "le contenu de la phase est clair pour tout le monde, et l'équipe sait ce qui sera produit durant le cycle.",
  },
  {
    nom: 'Atelier de prise en main',
    quand: 'À chaque livraison de lot',
    desc: "L'équipe s'approprie l'outil selon la manière définie et continue à manipuler l'outil sur ses propres cas. Vous observez sans intervenir tant que la personne n'est pas bloquée.",
    sortie: "des correctifs identifiés en direct et des utilisateurs qui font, pas qui ont vu faire.",
  },
  {
    nom: 'Rétrospective',
    quand: 'En fin de cycle',
    desc: "Discussion autour de ce qui fonctionne, ce qui a coince, ce qu'on change pour la suite. Il peut autant s'agir d'une partie de l'atelier de prise en main que d'un rendez-vous séparé. Il aura d'avantage d'importance pour des phases ou une période de prise en main de plusieurs jours a été planifié.",
    sortie: "un ajustement concret du cadre, appliqué dès le cycle suivant.",
  },
]

const criteres = [
  "Le projet est découpé stratégiquement",
  "L'ordre a été validé avec l'entreprise, et il reste modifiable",
  "Le rythme des phases est fixé et connu de tous",
  "Le temps que l'équipe peut consacrer au projet est connu",
  "Chaque cycle se termine par quelque chose que l'entreprise peut voir et manipuler",
  "L'équipe a été impliquée dans le projet, pas seulement informée",
]

const coches = ref(criteres.map(() => false))

const chiffres = [
  { val: '4', label: 'phases' },
  { val: '8', label: 'besoins répartis' },
  { val: '1', label: 'phase réorientée' },
]

const phases = [
  { num: '01', nom: "Fondation de l'infrastructure", desc: "Poser la base sur laquelle tout le reste allait s'appuyer." },
  { num: '02', nom: 'Traçabilité et stock', desc: 'Suivi des commandes, logique d\'inventaire et fiches produits.' },
  { num: '03', nom: "Intégration d'outils", desc: "Connecter les outils satellites au socle (Outils de transfert de fichiers, gestion des envois, etc). C'est ici que les limites de la plateforme sont devenues visibles." },
  { num: '04', nom: 'Réalisation du site web', desc: "Prévue avec l'ajout des services et une restructuration de l'architecture. Remplacée en cours de route par une phase exploratoire sur une solution sur mesure." },
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
