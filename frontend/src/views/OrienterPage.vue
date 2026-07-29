<template>
    <div class="font-sans min-h-screen bg-gray-100">
        <!-- Hero -->
        <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
        <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
            Orienter le projet
        </span>
        <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
            Trier avant de <em class="italic text-blue-700">promettre</em>.
        </h1>
        <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            Le diagnostic a produit des faits. Cette étape en fait une décision : ce qu'on traite, ce qu'on laisse, et dans quel ordre.
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
                    C'est ici que l'intervenant prend position
                </h2>
                <p class="text-sm text-gray-500 leading-relaxed">
                    Jusque-là, le travail consistait à comprendre. À partir de maintenant, il faut trancher et c'est le premier moment où l'on engage sa responsabilité professionnelle plutôt que sa capacité d'observation.
                </p>
                </div>
                <div></div>
            </div>

            <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                Deux choses se jouent en même temps
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
                <p class="font-display text-lg font-medium text-gray-900 mb-3">
                    Priorisation
                </p>
                <p class="text-sm text-gray-500 leading-relaxed">
                    Une quinzaine de constats ne se traitent pas de front. Il faut décider par quoi commencer, ce qui attendra, et ce qu'on assume de ne pas traiter du tout. C'est un choix arbitraire qui doit pouvoir être justifier auprès de l'entreprise.
                </p>
                </div>

                <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
                <p class="font-display text-lg font-medium text-gray-900 mb-3">
                    Confrontation à la demande initiale
                </p>
                <p class="text-sm text-gray-500 leading-relaxed">
                    En posant les besoins réels côte à côte, on découvre s'ils recouvrent ou non ce que le mandant avait initialement demandé. Quand il y a un décalage, c'est là tout l'enjeu de démontrer à l'entreprise qu'il y a d'autres étapes avant ce qu'elle souhaite ou encore que ses besoins exprimés ne sont pas les bons.
                </p>
                </div>
            </div>
        </div>

        <!-- ══ La démarche en quatre temps ══ -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="flex items-end justify-between gap-8 mb-8">
            <div>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                La démarche
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug">
                Des constats à un périmètre validé
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
                    <p class="text-sm text-gray-500 leading-relaxed" v-html="courant.pourquoi"></p>
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

        <!-- Quatre issues, pas deux -->
        <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-4" style="border:0.5px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8)">
                  Pour aller plus loin
                </span>
                <h2 class="font-display text-2xl font-medium leading-snug mb-4 text-white">
                  Avoir une vision objective
                </h2>
                <p class="text-sm leading-relaxed mb-3" style="color:rgba(255,255,255,0.75)">
                  La matrice d'Eisenhower croise l'urgence et l'importance. Elle ne dit rien d'un troisième filtre, pourtant décisif quand on intervient seul : <strong class="font-medium text-white">est-ce mon métier ?</strong>
                </p>
                <p class="text-sm leading-relaxed mb-8" style="color:rgba(255,255,255,0.75)">
                  Un besoin peut être urgent, important, et ne pas relever de vous. En micro-entreprise, un intervenant croise systématiquement des besoins qui appellent un graphiste, un comptable ou une agence. Bien que le profil d'ingénieur des médias permet une grande flexibilité, il est important de savoir dire « ce n'est pas mon métier » et de proposer une suite à l'entreprise plutôt que de promettre ce qu'on ne pourra pas tenir.
                </p>
                <p class="text-xs font-medium text-gray-200 uppercase tracking-widest mb-4">
                    Les quatres cadrants de la matrice
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden mb-8" style="background:rgba(255,255,255,0.2)">
              <div v-for="i in issues" :key="i.nom" class="px-7 py-7" style="background:rgba(255,255,255,0.08)">
                <p class="font-display text-lg font-medium mb-1 text-white">{{ i.nom }}</p>
                <p class="text-xs font-medium uppercase tracking-widest mb-3" style="color:rgba(255,255,255,0.5)">{{ i.quand }}</p>
                <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.75)">{{ i.suite }}</p>
              </div>
            </div>

            <div class="rounded-xl p-6" style="background:rgba(255,255,255,0.08)">
              <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.9)">
                La distinction entre <strong class="font-medium">délégué</strong> et <strong class="font-medium">écarté</strong> est ce qui rend un périmètre acceptable. Un besoin qu'on retire sans contrepartie donne l'impression qu'on l'a ignoré ; un besoin qu'on retire en indiquant qui saurait le traiter et pour quel ordre de grandeur reste une réponse.
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
              Comment savoir que le périmètre tient
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
                Croire qu'il faut réaliser ce que le mandant a demandé
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
                C'est la posture la plus confortable, et la plus facile à justifier : il connaît son entreprise, il paie la prestation, il a formulé une demande claire. Alors on exécute.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
                Un dirigeant de micro-entreprise formule sa demande à partir de ce qu'il voit et de ce qu'il a entendu ailleurs : qu'il faut un site, qu'il faut être sur les réseaux. Il est l'expert de son métier, de sa clientèle et de ses contraintes. Il n'est pas celui des leviers numériques.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
                Mais l'inverse est également un piège : décider à sa place revient à ignorer la seule personne qui connaisse vraiment l'entreprise. Le rôle n'est pas de trancher qui a raison, mais de faire se rencontrer deux expertises : la sienne sur son activité, la vôtre sur ce que le numérique peut y changer.
            </p>
          </div>
        </div>

        <!-- Chez Photogare -->
        <div class="section-dark rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-8 border border-gray-700 text-gray-400">
              Chez Photogare
            </span>
            <h2 class="font-display text-2xl font-medium leading-snug mb-6 max-w-xl text-white">
              Quatorze besoins priorisés
            </h2>

            <div class="grid grid-cols-3 gap-12 items-start mb-8">
              <div class="col-span-2">
                <p class="text-sm leading-relaxed text-gray-500">
                  Le croisement des sources avait produit quatorze besoins fonctionnels. Ils ont été placés sur une matrice d'Eisenhower croisant l'urgence et l'importance, puis répartis selon les quatre issues.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-8 bg-gray-800">
              <div v-for="r in resultats" :key="r.nom" class="px-8 py-7 bg-gray-950">
                <p class="font-display text-sm font-medium mb-2 text-white">{{ r.nom }}</p>
                <p class="text-sm leading-relaxed text-gray-500">{{ r.desc }}</p>
              </div>
            </div>

            <div class="mb-8">
              <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">Les contraintes transversales</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="c in contraintes"
                  :key="c"
                  class="text-xs px-3 py-1.5 rounded-full bg-blue-600 text-blue-50"
                >{{ c }}</span>
              </div>
            </div>

            <!-- Le décalage -->
            <div class="rounded-xl p-8 bloc-decalage">
              <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">Le décalage avec la demande initiale</p>
              <p class="text-sm leading-relaxed mb-4 text-gray-400">
                La demande initiale portait sur trois choses :
              </p>

              <p class="font-display text-lg font-medium leading-snug mb-5 text-white">
                <span class="whitespace-nowrap">Un site e-commerce</span>
                <span class="mx-2 text-gray-600">·</span>
                <span class="whitespace-nowrap">Une identité graphique complète</span>
                <span class="mx-2 text-gray-600">·</span>
                <span class="whitespace-nowrap">Une stratégie de communication digitale</span>
              </p>

              <p class="text-sm leading-relaxed mb-3 text-gray-400">
                <strong class="font-medium">Le périmètre retenu ne contient aucune des trois.</strong>
              </p>
              <p class="text-sm leading-relaxed mb-3 text-gray-400">
                Répondre à la demande telle quelle aurait aggravé la situation au lieu de l'améliorer. Proposer de la réservation en ligne sans système de suivi, faire de la publicité sans capacité à absorber l'afflux, vendre en ligne sans gestion de stock : chacune de ces réponses amplifiait une friction existante. Et le risque portait précisément sur ce qui faisait la force de l'enseigne prouvé par une réputation de 4,8 sur 5 construite sur la qualité du service.
              </p>
              <p class="text-sm leading-relaxed mb-4 text-gray-400">
                À la place, une priorité avant cela :
              </p>

              <p class="font-display text-lg font-medium leading-snug mb-5 text-white">
                L'optimisation des processus internes
              </p>

              <p class="text-sm leading-relaxed mb-3 text-gray-400">
                Le recentrage n'a pas été présenté comme un refus, mais comme une inversion de l'ordre : consolider d'abord les fondations opérationnelles, bâtir la présence digitale ensuite, sur des bases assainies. Les besoins sortis du mandat sont partis avec leurs recommandations chiffrées, ce qui les maintenait au programme de l'entreprise sans les garder dans le périmètre du travail.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
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
    num: '①', verbe: 'Traduire', objet: 'les constats',
    titre: 'Traduire les constats en besoins',
    pourquoiTitre: 'Pourquoi en premier',
    pourquoi: "La dernière étape jusqu'ici a été le croisement des données. cela permet de mettre en évidence les symptômes tels que les attentes, les frictions, etc. Maintenant transformer ces symptômes en besoins permettra de prioriser des objectifs plutôt que des symptômes.",
    faire: [
      "Reprendre chaque friction relevée dans le croisement des données et formuler ce qu'il faudrait pour qu'elle disparaisse, <strong class='font-medium text-gray-700'>sans nommer d'outil</strong>. « Dix appels par jour pour des informations de base » devient « rendre les informations courantes accessibles sans passer par l'équipe ».",
      "Regrouper ensuite ce qui se recoupe : plusieurs frictions renvoient souvent au même besoin, et c'est ce regroupement qui donne à chacun son poids.",
    ],
    piege: "Penser que les besoins ne sont que les points cités initialement par le mandant. Les besoins sont ce qui se cache derrière les symptômes, et ils ne sont parfois pas tous identifiés par l'entreprise. d'où l'importance de les formuler à partir des frictions et non des demandes.",
    outil: null,
  },
  {
    num: '②', verbe: 'Prioriser', objet: 'les besoins',
    titre: 'Prioriser',
    pourquoiTitre: 'Pourquoi une matrice',
    pourquoi: "Pour prioriser, ce qui fonctionnera le mieux en général est d'utiliser une matrice. Cette dernière ne décide pas à votre place, elle permettra au mandant de <strong class='font-medium text-gray-700'>visualiser et discuter</strong> autour de ces besoins. Cela aura plus de valeur que de lui dire simplement « on fait ça d'abord ».",
    faire: [
      "La matrice utilisée est celle de l'Eisenhower. Elle permet de placer chaque besoin sur deux axes : <strong class='font-medium text-gray-700'>l'urgence</strong> : est-ce que ça bloque maintenant ? et <strong class='font-medium text-gray-700'>l'importance</strong> : est-ce que ça pèse sur la suite ?",
      "A partir de cette matrice, on peut poser les besoins d'après la liste précédement réalisée aux endroits appropriés.",
    ],
    piege: 'Confondre ce qui est urgent avec ce qui est "bruyant". Le besoin que le mandant répète le plus souvent n\'est pas forcément celui qui bloque. C\'est souvent le plus visible, mais pas le plus impactant.',
    outil: {
      nom: 'Matrice de priorisation',
      desc: 'Urgence × importance, avec les quatre issues',
      notion: 'https://outilsplaybook.notion.site/matrice-priorisation',
      fichier: '/gabarits/matrice-priorisation.pdf',
    },
  },
  {
    num: '③', verbe: 'Poser', objet: 'les contraintes',
    titre: 'Poser les contraintes transversales',
    pourquoiTitre: "Pourquoi cette étape",
    pourquoi: "Prioriser dit <em>ce qu'on fait</em>. Il faut aussi dire <em>à quoi toute solution devra satisfaire</em>. Ces contraintes sont celles à prendre en compte par rapport au contexte. Elles peuvent être budgétaires, organisationnelles, techniques, etc.",
    faire: [
      "Ces contraintes vont très souvent être liées au mandat qui a été posé. Elles sont souvent formulées par le mandant mais certaines d'entre elles peuvent venir d'autres sources. Prendre le temps de les lister et d'en discuter avec le mandant permettra de les valider pour la suite.",
      "Les avoir sous la forme d'un référentiel permettra de les prendre en compte lors du choix de la solution et ne pas en oublier.",
    ],
    piege: "Ne pas les relever ou ne pas en tenir compte aura pour conséquence d'offrir une solution à l'entreprise sans tenir compte de leurs besoins à eux. Les contraintes proviennent de besoins qui ne sont pas des frictions identifiées.",
    outil: null,
  },
  {
    num: '④', verbe: 'Confronter', objet: 'la demande',
    titre: 'Mesurer l\'écart avec la demande initiale',
    pourquoiTitre: 'Pourquoi est-ce important',
    pourquoi: "Lors du premier contact, le mandant a souvent déjà identifier des problèmes et des solutions. Quiconque pourrait partir de son diagnostic et répondre à sa demande. Mais le rôle d'un intervenant, d'autant plus dans de petites entreprises où il n'y a pas de service dédié, est de <strong class='font-medium text-gray-700'>mettre en évidence les besoins réels</strong> et de les prioriser. Cela peut impliquer de ne pas répondre à la demande initiale ce qui nécessite d'expliquer en quoi notre diagnostique serait plus approrié.",
    faire: [
        "Le parallèle entre les deux est relativement simple : on compare les besoins identifiés avec ceux exprimés par le mandant.",
        "<strong class='font-medium text-gray-700'>Pas d'écart :</strong> le diagnostic confirme l'intuition du mandant. Le dire explicitement, cela donne du crédit à tout ce qui suivra.",
        "<strong class='font-medium text-gray-700'>Un écart :</strong> argumenter par le scénario d'échec de la demande, pas par ce qui serait mieux. Expliquer que la demande initiale reste au programme, elle change juste de rang. Puis Démontrer en quoi travailler de cette manière leur sera bénéfique.",
    ],
    piege: "Dérouler son argumentaire sans écouter. Le mandant connaît son métier mieux que vous, et son objection est souvent une information que le diagnostic a manquée. Et s'il se tait, ce n'est pas nécessairement qu'il est convaincu : c'est souvent qu'on lui parle dans un vocabulaire qu'il ne maîtrise pas.",
    outil: null,
  },
]

const courant = computed(() => temps[actif.value])

/* ── Contenus des blocs ───────────────────────────────────────── */

const issues = [
  {
    nom: 'Cœur',
    quand: 'Urgent · important',
    suite: 'Le corps du mandat.',
  },
  {
    nom: 'Retenu',
    quand: 'Important · moins urgent',
    suite: 'Traité si le calendrier le permet.',
  },
  {
    nom: 'Délégué',
    quand: 'Urgent · moins important',
    suite: "Sort du périmètre avec une recommandation chiffrée et un type de prestataire.",
  },
  {
    nom: 'Écarté',
    quand: 'Ni urgent ni important',
    suite: 'Sort du périmètre avec la raison expliquée.',
  },
]

const criteres = [
  "Chaque besoin retenu est formulé comme un <strong class='font-medium text-gray-700'>besoin</strong>, pas comme une solution",
  "Ce qui sort du périmètre a une raison écrite et une suite proposée",
  "Les contraintes transversales sont posées",
  "L'écart avec la demande initiale a été évalué,qu'il existe ou non",
  'Le périmètre a été discuté etvalidé par le mandant',
]

const coches = ref(criteres.map(() => false))

const contraintes = [
  "Simplicité d'utilisation · des outils maîtrisables par l'équipe",
  "Outils intégrés · des outils qui communiquent entre eux pour éviter la dispersion de l'information",
  "Progressivité · des solutions qui s'installent dans le temps et ne nécessitent pas de tout changer d'un coup",
  "Maitrise des coûts · des solutions qui restent dans le budget de l'entreprise",
  "Autonomie à terme · avoir une solution comprise et utilisable par l'équipe",
]

const resultats = [
  {
    nom: 'Cinq besoins au cœur du travail',
    desc: "Centraliser les données clients, fiabiliser le transfert de fichiers, gérer le stock et la logistique, tracer les commandes, étendre les services en ligne.",
  },
  {
    nom: 'Trois besoins retenus',
    desc: "L'architecture de l'information du site, la communication proactive vers les clients, la synchronisation de la caisse.",
  },
  {
    nom: 'Cinq besoins délégués',
    desc: "L'image de marque, la stratégie digitale, le référencement, la publicité payante, la fidélisation. Sortis du périmètre non parce qu'ils étaient secondaires, mais parce qu'ils relevaient d'une autre expertise qui a fait l'objet d'une recommandation budgétaire et préstataire fournie à l'entreprise.",
  },
  {
    nom: 'Un besoin écarté',
    desc: "Un portail dédié aux partenaires sous-traitants, jugé non nécessaire à ce stade.",
  },
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

.section-dark {
  background: var(--color-gray-950);
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
.fondu-enter-active,
.fondu-leave-active { transition: opacity 0.2s ease; }
.fondu-enter-from,
.fondu-leave-to     { opacity: 0; }

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
