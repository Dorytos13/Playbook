<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Diagnostiquer
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Établir un <em class="italic text-blue-700">diagnostic</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        S'immiser dans l'entreprise pour comprendre les besoins et reconstituer son fonctionnement réel afin d'en tirer un diagnostic.
      </p>
    </header>

    <div class="px-6 xl:px-10 pb-16 flex gap-10">
      <MethodeNav />
      <div class="flex-1 flex flex-col gap-5 min-w-0">

        <!-- Principe -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="grid grid-cols-3 gap-12 items-start">
            <div class="col-span-2">
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                Le principe
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
                En micro-entreprise, tout est dans la tête
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">
                Quelque chose qui a pu être remarquer et qui semble être une hypothèse valable est que dans une petite structure, il n'existe ni documentation interne, ni processus écrit. L'information sur le fonctionnement réel est souvent répartie entre les personnes, sous forme d'habitudes qu'elles n'ont jamais eu besoin de formuler.
              </p>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">
                Il faut donc la reconstituer à partir de sources partielles, dont aucune ne suffit seule. <strong class="font-medium text-gray-700">La fiabilité du diagnostic ne vient pas de la profondeur d'une source, mais du croisement de plusieurs.</strong>
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Chaque étape prépare le suivant. Sauter l'un d'eux est une décision à prendre mais il pourrait nuire à la qualité du diagnostic.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <!-- ══ La démarche en six temps ══ -->
        <div class="bg-white rounded-2xl px-12 py-12">
          <div class="flex items-end justify-between gap-8 mb-8">
            <div>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
                La démarche
              </span>
              <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug">
                6 étapes clés
              </h2>
            </div>
          </div>

          <!-- Onglets -->
          <div class="grid grid-cols-6 gap-px rounded-xl overflow-hidden mb-8" style="background:#e5e7eb">
            <button
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
            <!-- épaisseur du paquet -->
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

        <!-- Quand le recueil client est hors de portée -->
        <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-4" style="border:0.5px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8)">
                  Pour aller plus loin
                </span>
                <h2 class="font-display text-2xl font-medium leading-snug mb-4" style="color:#ffffff">
                  Quand le recueil client est hors de portée ou inexistant
                </h2>
                <p class="text-sm leading-relaxed mb-8" style="color:rgba(255,255,255,0.75)">
                  Si une entreprise n'a ni base de données, ni newsletter, ni canal de diffusion, renoncer au questionnaire ne veut pas dire renoncer à des données. Pour cela il y a trois autres approches possibles pour récupérer des insights.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-3 gap-px rounded-xl overflow-hidden mb-8" style="background:rgba(255,255,255,0.2)">
              <div v-for="r in replis" :key="r.nom" class="px-8 py-8" style="background:rgba(255,255,255,0.08)">
                <p class="font-display text-base font-medium mb-3" style="color:#ffffff">{{ r.nom }}</p>
                <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.75)">{{ r.desc }}</p>
              </div>
            </div>

            <div class="rounded-xl" >
              <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.9)">
                Et si ces solutions ne sont pas envisageables, reconstruire un parcours client à partir des sources internes et le valider avec l'équipe reste une hypothèse solidement étayée. Ce n'est pas une donnée mesurée mais selon les besoins, cela suffit pour établir un diagnostic et identifier les frictions.
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
              Comment savoir que le diagnostic est fait
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
             Croire qu'on a compris parce que ça paraît simple
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
             On cartographie volontiers les processus qui semblent compliqués, et on passe vite sur ceux qui paraissent évidents ou qu'on croit connaitre, un processus de commande, des tarifs, des envois. C'est pourtant là que se logent les règles particulières qu'une entreprise s'est construites au fil des années et que personne ne pense à mentionner, justement parce qu'elles vont de soi.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Le coût de cet oubli n'apparaît pas au diagnostic. Il apparaît en réalisation, une fois la solution choisie et le travail engagé. À ce stade, découvrir qu'un processus ne rentre pas dans l'outil retenu ne se règle plus en quelques heures : cela peut remettre en cause la stratégie entière.
            </p>
            <div class="rounded-xl bg-blue-50 border border-blue-100 p-5">
              <p class="text-sm text-gray-500 leading-relaxed">
                <strong class="font-medium text-gray-700">Prendre le temps de décrire un processus qui paraît simple coûte une heure.</strong> Le découvrir en cours de route en coûte beaucoup plus, l'exemple de l'expérience chez Photogare ci-dessous en donne un exemple.
              </p>
            </div>
          </div>
        </div>

        <!-- Chez Photogare -->
        <div class="section-dark rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <span class="text-xs px-3 py-1 rounded-full inline-block mb-8"
                  style="border:0.5px solid #374151;color:#9ca3af">
              Chez Photogare
            </span>
            <h2 class="font-display text-2xl font-medium leading-snug mb-8 max-w-xl" style="color:#ffffff">
              Quatre sources croisées
            </h2>

            <!-- Le cadre temporel -->
            <div class="rounded-xl p-6 mb-8">
              <p class="text-xs font-medium uppercase tracking-widest mb-2" style="color:#6b7280">Le cadre du travail de Bachelor</p>
              <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.85)">
                Le cadre du travail de Bachelor fixait la pré-étude à quatre semaines. Un mandat ordinaire ne fonctionne pas ainsi : la durée du diagnostic se négocie, et elle dépend de ce qu'on trouve en chemin. Ceci a donné lieu à une priorisation des sources.
              </p>
            </div>

            <!-- L'observation, en continu -->
            <div class="rounded-xl p-6 mb-8" style="background:#111110;border:1px solid #1f2937">
              <p class="font-display text-sm font-medium mb-2" style="color:#ffffff">L'observation</p>
              <p class="text-sm leading-relaxed" style="color:#6b7280">
                Aucune phase d'immersion n'a été planifiée séparément. Le travail se déroulant directement dans le magasin, l'observation s'est faite en continu, au fil des journées passées sur place.
              </p>
            </div>

            <!-- Les quatre sources -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-8 mt-px" style="background:#1f2937">
              <div v-for="s in photogareSources" :key="s.nom" class="px-8 py-7" style="background:#111110">
                <p class="font-display text-sm font-medium mb-2" style="color:#ffffff">{{ s.nom }}</p>
                <p class="text-sm leading-relaxed" style="color:#6b7280">{{ s.desc }}</p>
              </div>
            </div>

            <!-- Ce que le croisement a révélé -->
            <div class="rounded-xl p-6 mb-5">
              <p class="text-xs font-medium uppercase tracking-widest mb-2" style="color:#6b7280">Ce que le croisement a révélé</p>
              <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.85)">
                L'équipe manquait de temps pour se digitaliser parce qu'elle en consacrait une part considérable à des tâches manuelles, et ces tâches persistaient faute d'outils et de temps pour en trouver. Pendant ce temps la demande augmente, sans capacité opérationnelle pour l'absorber.
              </p>
            </div>

            <!-- Le renoncement, et son coût -->
            <div class="rounded-xl p-6 mb-5">
              <p class="text-xs font-medium uppercase tracking-widest mb-2" style="color:#6b7280">Ce que j'ai choisi de ne pas faire</p>
              <p class="text-sm leading-relaxed mb-3" style="color:rgba(255,255,255,0.85)">
                Quatre semaines obligent à prioriser. J'ai décidé de ne pas cartographier les processus internes en détail : après les entretiens et les journées passées sur place, ils me paraissaient suffisamment clairs.
                C'était une erreur d'appréciation. En phase de réalisation, plusieurs règles métier que je croyais simples se sont révélées complexes voir impossibles à reproduire dans l'outil retenu. Le blocage n'est apparu qu'une fois le travail en bonne voix, et il a fini par remettre en question la stratégie elle-même.

              </p>
              <p class="text-sm leading-relaxed mb-3" style="color:#9ca3af">
                C'est exactement le piège décrit plus haut, et il s'est refermé sur des éléments clés d'un processus, comme par exemple des tarifs dégressifs irréguliers liés à un service.
              </p>
            </div>

            <!-- Ce qui n'était pas possible -->
            <div class="rounded-xl p-6">
              <p class="text-xs font-medium uppercase tracking-widest mb-2" style="color:#6b7280">Ce qui n'a pas été possible</p>
              <p class="text-sm leading-relaxed mb-3" style="color:#9ca3af">
                Une étude quantitative auprès de la clientèle avait été envisagée, mais l'entreprise ne disposait d'aucun canal pour joindre ses clients. Le nombre de réponses atteignable n'aurait pas garanti la pertinence des résultats.
                Les trois parcours clients reposent donc sur une reconstitution validée en interne. Cette limite a été assumée dès la pré-étude et elle a directement motivé l'un des premiers besoins retenus : la centralisation des données clients. Le diagnostic a ainsi révélé son propre angle mort.
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
    num: '①', verbe: "S'immerger", objet: 'sur place', cle: 'Immersion',
    titre: "S'immerger sur place",
    pourquoiTitre: 'Pourquoi en premier',
    pourquoi: "On ne sait pas quoi demander tant qu'on n'a pas vu travailler. Les contournements, en particulier, apparaissent rarement dans un entretien : le fichier tenu en parallèle, la note collée sur l'écran, le carnet sous le comptoir. Ils font tellement partie du quotidien qu'on ne pense plus à les signaler. Ce sont pourtant eux qui décideront de la réussite ou de l'échec d'un nouvel outil.",
    faire: [
      "Suivre le travail réel sur un cycle complet, en retrait. Noter les gestes, les interruptions, les temps d'attente, les allers-retours.",
      "Relever ce qui traîne : papiers, écrans ouverts, outils dont personne n'a parlé. Mais attention il ne s'agit pas de proposer quelque chose à ce stade on regarde en vue de comprendre les enjeux.",
    ],
    piege: "Observer un jour creux. Si l'activité est saisonnière ou irrégulière, choisir délibérément une période représentative qui peut être définie avec l'aide des employés. Sinon il s'agira de le mentionner",
    outil: null,
  },
  {
    num: '②', verbe: 'Interroger', objet: "l'équipe", cle: 'Entretiens',
    titre: "Interroger l'équipe",
    pourquoiTitre: "Pourquoi après l'immersion",
    pourquoi: "Souvent l'observation soulève des questions auquels on aurait pas pensé initialement. On peut demander « pourquoi vous notez cette commande à la main ? » au lieu de « comment traitez-vous les commandes ? ». La première cible un point observé etproduit une information exploitable, la seconde produit la version officielle du processus d'après une personne.",
    faire: [
      "Un entretien semi-directif avec un maximum de personnes qui font tourner la structure, et pas seulement le dirigeant. Le dirigeant a une vision globale mais pas forcément la connaissance des détails. L'équipe connaît les détails mais pas forcément la vision globale.",
      "Puis, ce qui aura d'avantage de valeur est la <strong class='font-medium text-gray-700'>synthèse croisée</strong> des regards. Relever les contradictions ou au contraire des éléments similaires sont souvent l'information la plus précieuse.",
    ],
    piege: "Ne parler qu'aux enthousiastes. Biensur s'il y en a et si l'entreprise le permet, il faut délibérément interroger les réticents et ceux qui sont mal à l'aise avec le numérique : ce sont eux qui portent le risque d'échec de l'adoption.",
    outil: {
      nom: "Guide d'entretien",
      desc: "Bases d'un guide d'entretien semi-directif, à compléter selon le contexte",
      notion: 'https://outilsplaybook.notion.site/guide-d-entretien',
      fichier: '/gabarits/guide-entretien.pdf',
    },
  },
  {
    num: '③', verbe: 'Auditer', objet: "l'existant", cle: 'Audit',
    titre: "Auditer l'existant numérique",
    pourquoiTitre: 'Pourquoi à ce moment',
    pourquoi: "Fait trop tôt, un audit donne un constat, pas un diagnostic. On voit qu'un site est daté, mais on ne sait pas si ça compte pour cette entreprise-là. Les entretiens l'ont dit, et ils indiquent aussi où regarder. C'est dans cet ordre qu'apparaît l'écart le plus parlant : entre ce que l'entreprise croit offrir et ce qu'un client trouve vraiment.",
    faire: [
      "Analyse du site, du référencement local, de la fiche d'établissement, des réseaux sociaux, de la réputation en ligne.",
      "Et si cela est possible ou semble nécessaire côté interne : le parc d'outils réellement utilisés, <strong class='font-medium text-gray-700'>y compris ceux que personne n'a officialisés</strong> — le tableur de facturation, le service de transfert gratuit, le compte partagé. Ils font partie du système même s'ils ne figurent nulle part.",
    ],
    piege: "Confondre l'audit et le jugement esthétique. On produit un relevé factuel et vérifiable, canal par canal, pas un avis sur le graphisme, bien que celui-ci puisse faire l'objet d'une analyse spéficique selon le besoin.",
    outil: {
      nom: "Audit de l'écosystème digital",
      desc: 'Grille de relevé, canal par canal',
      notion: 'https://outilsplaybook.notion.site/audit-ecosysteme-digital',
      fichier: '/gabarits/audit-ecosysteme-digital.pdf',
    },
  },
  {
    num: '④', verbe: 'Écouter', objet: 'la clientèle', cle: 'Clientèle',
    titre: 'Écouter la clientèle',
    pourquoiTitre: 'Pourquoi à ce moment',
    pourquoi: "On a compris l'entreprise vue de l'intérieur : c'est le moment de la confronter à ceux pour qui elle travaille. Effectué plus tôt, on peut ne pas savoir quoi demander et ne pas prendre assez en compte le contexte spécifique de l'entreprise.",
    faire: [
      "Deux approches, et le choix dépend de la question mais l'un n'est pas meilleur que l'autre, au contraire, ils se complètent.",
      "L'étude de marché <strong class='font-medium text-gray-700'>qualitative</strong> permet d'obtenir des ressentis, des habitudes, des représentations, des signaux faibles et se font sous le forme d'entretien semi-directif individuel ou des focus groupes.",
      "L'étude de marché <strong class='font-medium text-gray-700'>quantitative</strong> permet quant à elle, au travers d'un questionnaire de chiffer ou quantifier des éléments. Dans ce contexte innutile de poser des questions ouvertes, les personnes ne prendront pas le temps de répondre et les réponses seront peu exploitables.",
    ],
    piege: "prévoir une étude de marché sans problématisation préalable. Il est nécessaire de savoir ce que l'on cherche à comprendre avant de poser des questions. Le questionnaire doit être construit en fonction de la problématique et non l'inverse.",
    outil: null,
  },
  {
    num: '⑤', verbe: 'Situer', objet: 'le secteur', cle: 'Benchmark',
    titre: 'Situer dans le secteur',
    pourquoiTitre: 'Pourquoi à la fin plutôt qu\'au début',
    pourquoi: "On ne compare bien que ce qu'on connaît. Un benchmark mené en ouverture produit une liste de fonctionnalités enviées, qui oriente le projet vers ce que font les autres. Mené en fin de diagnostic, il répond à une question précise : <strong class='font-medium text-gray-700'>ce retard est-il un handicap sectoriel ou une fenêtre d'opportunité ?</strong>",
    faire: [
      "Quatre à six acteurs comparables, évalués sur une grille de critères. Le point décisif : une <strong class='font-medium text-gray-700'>échelle descriptive par palier</strong>, qui définit ce que vaut un 3 ou un 8. Sans elle, la note n'est qu'une impression et ne résiste pas à la contradiction.",
      "Choisir des acteurs directs et selon des critères de sélection. Un benchmark identitaire n'aurait pas les même critères qu'un benchmark concurrentiel par exemple.",
    ],
    piege: null,
    outil: {
      nom: 'Benchmark concurrentiel',
      desc: 'Grille à huit critères et échelle de notation remplissable',
      notion: 'https://outilsplaybook.notion.site/373619ce562b80f4a734ef3fa1161685',
      fichier: '/gabarits/benchmark-concurrentiel.pdf',
    },
  },
  {
    num: '⑥', verbe: 'Croiser', objet: 'les sources', cle: 'Synthèse',
    titre: 'Croiser les sources',
    pourquoiTitre: "Pourquoi c'est une étape et non une conclusion",
    pourquoi: "Le croisement produit ce qu'aucune source ne contient. C'est un travail à part entière, qui demande un certain temps d'analyse des sources précédentes.",
    faire: [
      "Il s'agira de reprendre les données ressourcées et tirer des fils entre elles ce qui peut mener à créer différents éléments : une cartographie des processus, un parcours clients, qui mettent les frictions en regard côté client et côté entreprise. Mais aussi un relevé des frictions chacune rattachée à ce qu'elle affecte.",
      "C'est cette partie qui est décisive et qui mènera à orienter stratégiquement le projet.",
    ],
    piege: "Arriver au croisement avec trop peu de matière. Si toutes les sources disent la même chose parce qu'elles viennent du même endroit, le croisement ne révélera aucun mécanisme. Il faudra retourner sur le terrain avant de conclure.",
    outil: null,
  },
]

const courant = computed(() => temps[actif.value])

/* ── Contenus des blocs ───────────────────────────────────────── */

const replis = [
  {
    nom: 'Le relevé manuel',
    desc: "Observer sur une période définie : ce qu'il se passe au comptoir, à chaque point de contact avec la clientèle que ce soit par mail ou par téléphone. Cela peut sembler fastidieux, mais il s'agira d'une approche fiable basée sur le terrain.",
  },
  {
    nom: 'Des questions au comptoir',
    desc: "Un mini-questionnaire posé sur une période donnée, en face à face ou par QR code au comptoir. Plus productif qu'un long formulaire envoyé mais doit être concis et ciblé sur un point précis.",
  },
  {
    nom: 'Les traces existantes',
    desc: 'Avis en ligne, historique de caisse, volume de mails sur un sujet spécifique. Ce sont des données pauvres, mais qui réelles et déjà là.',
  },
]


const criteres = [
  "Chaque friction est rattachée à une source identifiable, pas à une impression",
  "Ce qui n'a pas pu être mesuré est justifié, ou remplacé par une alternative",
  "La démarche a été expliquée à l'entreprise, et elle l'a comprise",
  "Le diagnostic ne propose encore aucune solution",
]

const coches = ref(criteres.map(() => false))

const photogareSources = [
  {
    nom: 'Les entretiens',
    desc: "Deux entretiens semi-directifs d'environ 75 minutes avec le directeur et la future responsable, structurés autour de cinq axes, puis mis en regard dans une synthèse croisée. L'entreprise ne disposait ni de documentation interne, ni de base de données client : leur parole constituait la principale source sur le fonctionnement réel.",
  },
  {
    nom: "L'audit",
    desc: "Fiche d'établissement, réseaux sociaux, site, référencement local et réputation, restitués en tableaux de forces et de points d'amélioration par canal.",
  },
  {
    nom: 'Le benchmark',
    desc: "Cinq acteurs romands évalués sur huit critères, dont deux entretenant une relation de sous-traitance avec l'entreprise.",
  },
  {
    nom: 'Les parcours clients',
    desc: 'Trois parcours, un par service, construits à partir des sources précédentes et des échanges observés au comptoir.',
  },
]



</script>

<style scoped>
.section-blue {
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #2563eb 70%, #3b82f6 100%);
}

.section-gray {
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 30%, #e5e7eb 60%, #d1d5db 100%);
}

.section-dark {
  background: #111110;
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
