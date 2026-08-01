<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Mettre en œuvre
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Construire sans rien <em class="italic text-blue-700">arrêter</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        Le projet est organisé. Reste à le construire pendant que l'entreprise continue de tourner, et à savoir ce que chaque écart coûtera plus tard.
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
                L'entreprise tourne
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                Une micro-entreprise ne peut pas s'arrêter pour se digitaliser. Pas de gel de l'activité, pas de période creuse, et le plus souvent pas d'environnement de test. On construit sur une structure qui tourne, et cette contrainte gouverne toutes les décisions de cette étape.
              </p>
            </div>
            <div></div>
          </div>

          <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            Deux conséquences directes
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-3">
                On travaille en production
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Chaque manipulation a un effet immédiat sur le travail réel de l'équipe. Cela impose de sauvegarder avant d'intervenir, de préférer les heures creuses, et de travailler sur des données factices tant que la structure n'est pas stabilisée.
              </p>
            </div>

            <div class="rounded-xl bg-gray-50 border border-gray-100 p-7">
              <p class="font-display text-lg font-medium text-gray-900 mb-3">
                On avance par petites touches
              </p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Pas de grande bascule un lundi matin. Chaque élément livré doit pouvoir coexister avec l'ancien fonctionnement, le temps que l'équipe prenne confiance et que les erreurs restantes se révèlent.
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
                D'un plan validé à un outil en service
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

        <!-- La dette de contournement -->
        <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
          <div class="grain-overlay"></div>
          <div class="relative z-10">
            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <span class="text-xs px-3 py-1 rounded-full inline-block mb-4 border-[0.5px] border-white/30 text-white/80">
                  Pour aller plus loin
                </span>
                <h2 class="font-display text-2xl font-medium leading-snug mb-4 text-white">
                  Un contournement n'est jamais gratuit, <br>il est seulement payé plus tard
                </h2>
                <p class="text-sm leading-relaxed mb-3 text-white/75">
                  Quand une règle métier ne rentre pas dans l'outil retenu, une des possibilités est de le contourner. Contourner, c'est obtenir le résultat voulu par un chemin que l'outil n'avait pas prévu, que ce soit un champ détourné de son usage, une extension tierce installée, un autre outil en parallèle.
                </p>
                <p class="text-sm leading-relaxed mb-8 text-white/75">
                  Ce n'est ni une faute, ni quelque chose à éviter absolument. C'est un emprunt.
                </p>
              </div>
              <div></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-8 bg-white/20">
              <div class="px-8 py-8 bg-white/8">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce que ça coûte sur le moment</p>
                <p class="text-sm leading-relaxed text-white/75">
                  Presque rien, si ce n'est peut-être un abonnement à payer. Le besoin est couvert, l'entreprise est satisfaite, et la solution paraît légitime puisqu'elle fonctionne.
                </p>
              </div>
              <div class="px-8 py-8 bg-white/8">
                <p class="font-display text-lg font-medium mb-3 text-white">Ce que ça coûte ensuite</p>
                <p class="text-sm leading-relaxed text-white/75">
                  La plateforme se met à jour et le montage casse. L'extension tierce est abandonnée par son éditeur ou son tarif augmente. 
                </p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-12 items-start">
              <div class="col-span-2">
                <p class="text-xs font-medium uppercase tracking-widest mb-3 text-white/50">La limite</p>
                <p class="text-sm leading-relaxed mb-8 text-white/75">
                    Détourner en trouvant un autre moyen est parfois la bonne décision. Ce qui est dangereux, c'est <strong class="font-medium text-white">de les accumuler</strong> : chaque ajout est une dépendance, une dette et un risque supplémentaires. Pris un par un, chacun paraît pourtant raisonnable, et c'est bien leur nombre qui renseigne. Quand le compteur monte, la question n'est plus de savoir comment contourner le prochain obstacle, mais <strong class="font-medium text-white">si la solution retenue tient toujours</strong>. Le nombre de détours nécessaires pour la faire fonctionner en dit plus long sur son adéquation que n'importe quelle grille comparative, et c'est souvent la seule alerte que vous recevrez avant qu'il ne soit coûteux de revenir en arrière.
                </p>
              </div>
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
              Comment savoir que la mise en œuvre tient
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
              S'acharner sur une solution mal évaluée
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Quand les contournements s'accumulent, continuer devient étrangement confortable. Des semaines ont déjà été investies, le mandant a validé le choix, et revenir dessus revient à reconnaître une erreur d'évaluation à l'étape 04. Alors on ajoute une astuce de plus, puis une autre.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Il ne s'agit pas pour autant de changer d'outil sur un coup de tête, et ce n'est de toute façon pas votre décision. Votre travail est de poser le constat devant le mandant, ce que coûte de continuer, ce que coûterait de changer, et ce qu'on perd dans chaque cas. C'est lui qui tranche, mais il ne peut trancher que s'il sait.
            </p>
            <div class="rounded-xl bg-blue-50 border border-blue-100 p-5">
              <p class="text-sm text-gray-500 leading-relaxed">
                <strong class="font-medium text-gray-700">La bonne question :</strong> si le choix se posait aujourd'hui, avec ce que je sais maintenant, est-ce que je retiendrais la même solution ? Si la réponse est non, le mandant doit l'entendre, même si la décision reste de continuer.
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
              Tout a construire
            </h2>

            <p class="text-sm leading-relaxed mb-3 text-gray-500">
              Photogare ne disposait d'aucune logistique structurée : ni base de données client, ni référentiel produit. La mise en œuvre a donc commencé par créer ce qui manquait. Une partie du catalogue était codifiée par les fournisseurs, mais tous les produits d'occasion n'avaient aucune référence. Il a fallu créer une nomenclature qui fasse sens pour l'entreprise, puis l'automatiser pour qu'elle n'ait pas à s'en charger manuellement. Dans la plateforme directement, toute la hiérarchie des produits, les fiches produits, la gestion du stock ont pu être créées. Le but ici a été de co-construire des logiques qui tiennent dans le temps et qui puissent évoluer.
            </p>
            <p class="text-sm leading-relaxed mb-10 text-gray-500">
              En parallèle, plusieurs éléments et outils ont été mis en place, dont deux flux de transfert de fichiers : un du client vers Photogare pour les commandes, un de Photogare vers le client pour les livraisons numériques, avec l'extension du système côté plateforme, ce qui impliquait d'y créer les services. C'est là que ses limites se sont majoritairement révélées.
            </p>

            <div class="rounded-xl p-8 bloc-decalage mb-10">
              <p class="text-xs font-medium uppercase tracking-widest mb-4 text-gray-500">Le compteur qui monte</p>
              <p class="text-sm leading-relaxed mb-4 text-gray-400">
                Parmi les services ajoutés, la tarification dégressive du service de tirage a demandé l'équivalent d'une semaine de développement pour être reproduite sur une plateforme qui ne prévoyait rien de tel. Certaines limites du panier se sont révélées impossibles à lever.
              </p>
              <p class="text-sm leading-relaxed mb-4 text-white/85">
                Au total, neuf frictions ont été relevées, dont l'ampleur variait : certaines n'étaient qu'un inconfort, d'autres empêchaient purement et simplement un processus de fonctionner. <strong class="font-medium">Chaque contournement rendait l'ensemble un peu plus fragile</strong>.
              </p>
              <p class="text-sm leading-relaxed text-gray-400">
                C'est le troisième sprint qui a fait basculer le constat. Les frictions rencontrées pendant l'intégration des outils et la création des services comme présenté ci-dessus n'étaient plus des détails de configuration mais des limites de la plateforme elle-même.
              </p>
            </div>

            <h3 class="font-display text-xl font-medium leading-snug mb-4 text-white">
              Neuf frictions, quatre familles
            </h3>
            <p class="text-sm leading-relaxed mb-6 max-w-3xl text-white/85">
              Une friction, ici, c'est un besoin identifié au diagnostic que la plateforme ne pouvait pas couvrir tel quel. Elles ont été relevées au fil de la réalisation, puis regroupées : ce classement montre qu'il ne s'agissait pas d'une série de cas isolés, mais de quatre limites structurelles de l'outil.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden mb-10 bg-gray-800">
              <div v-for="fa in familles" :key="fa.nom" class="px-8 py-7 bg-gray-950">
                <p class="font-display text-base font-medium mb-1 text-white">{{ fa.nom }}</p>
                <p class="text-xs font-medium uppercase tracking-widest mb-3 text-gray-500">{{ fa.nb }}</p>
                <p class="text-sm leading-relaxed text-gray-500">{{ fa.desc }}</p>
              </div>
            </div>

            <h3 class="font-display text-xl font-medium leading-snug mb-4 text-white">
              Un changement, une décision
            </h3>
            <p class="text-sm leading-relaxed mb-4 text-white/85">
              Le cadre d'un travail de Bachelor change la façon dont une réorientation se décide. La démarche a d'abord été discutée avec l'enseignant responsable, pour valider la suite du travail.
            </p>
            <p class="text-sm leading-relaxed mb-4 text-white/85">
              S'en est suivie une discussion avec le mandant. Il savait depuis le départ qu'un travail de Bachelor n'offre aucune garantie de fonctionnalité, ce qui a rendu la conversation plus simple qu'elle ne l'aurait été dans un mandat commercial.
              Il s'est montré très ouvert à la démarche, parce qu'il avait compris ce qui était en jeu : ce que représentait le fait de rester sur la plateforme, et ce que cela lui demanderait par la suite.

            </p>

            <h3 class="font-display text-xl font-medium leading-snug mb-4 text-white">
              Une mise en service par étapes
            </h3>
            <p class="text-sm leading-relaxed mb-4 text-white/85">
              Chaque sprint se terminait par une phase de prise en main, après laquelle l'équipe recevait les accès pour faire ce qu'il y avait à faire. Le sprint consacré à l'inventorisation en est l'exemple le plus net : une fois la structure posée et présentée, les employés pouvaient reprendre cette structure et y saisir eux-mêmes les nouveaux produits.
              La mise en service au sens strict a surtout concerné le matériel annexe, la douchette et l'imprimante d'étiquettes, qui remplaçaient un fonctionnement entièrement manuel.
              Il avait par ailleurs été convenu que <strong class="font-medium">les deux participants aux ateliers transmettraient au reste de l'équipe</strong>, c'est-à-dire aux deux apprenties. Ce relais interne faisait partie du dispositif dès le départ, plutôt que d'être laissé au hasard des échanges quotidiens.
            </p>

            <h3 class="font-display text-xl font-medium leading-snug mb-4 text-white">
              Ce qui n'a pas eu lieu
            </h3>
            <p class="text-sm leading-relaxed mb-4 text-white/85">
              Il n'y a pas eu de bascule finale de la plateforme. Le travail s'est arrêté à la comparaison entre les deux approches, et cette limite doit être posée telle quelle.
              Le proof of concept a été présenté au mandant pour expliquer la démarche et montrer les différences, mais pas sous la forme d'un atelier de prise en main : il s'agissait d'une maquette fonctionnelle dont l'expérience utilisateur n'était volontairement pas aboutie, ce n'était pas son objet, et cela a été compris.
              Aucun choix n'est arrêté à ce jour. Les possibilités sont désormais entre les mains de l'équipe, à qui revient la décision. Un accompagnement professionnel reste vivement recommandé, pour ce choix comme pour sa réalisation.
            </p>
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
    num: '①', verbe: 'Ouvrir', objet: 'les accès',
    titre: 'Réunir les accès avant de commencer',
    pourquoiTitre: 'Pourquoi ça bloque presque toujours ici',
    pourquoi: [
      "Dans une micro-entreprise, les accès sont dispersés et rarement documentés. Le nom de domaine a été pris il y a douze ans par un prestataire qui ne répond plus, la boîte mail est liée au téléphone personnel de quelqu'un, ou encore l'ancien site appartient au neveu d'un employé.",
      "Ce sont des blocages administratifs qui ne dépendent pas de vous, mais qui peuvent vite prendre du temps.",
    ],
    faire: [
      "Faire l'inventaire des accès nécessaires dès le premier jour de réalisation : domaine, hébergement, comptes des services utilisés, droits d'administration, moyens de paiement.",
      "Discuter avec le mandant des données d'accès qu'il souhaite utiliser pour l'ouverture de nouveaux comptes, mais aussi de la manière idéale pour les conserver et les transmettre à l'équipe. L'objectif est de ne pas se retrouver bloqué par un oubli ou un mot de passe perdu.",
    ],
    piege: "Créer un compte avec ses propres identifiants. Vous êtes le mandataire du projet, pas son propriétaire. L'entreprise doit pouvoir reprendre la main à tout moment.",
    outil: null,
  },
  {
    num: '②', verbe: 'Structurer', objet: 'le référentiel',
    titre: 'Décider comment ranger avant de remplir',
    pourquoiTitre: 'Pourquoi créer une structure',
    pourquoi: [
      "Dans les cas où il est nécessaire de constituer une base telle qu'un inventaire, un fichier clients, un catalogue, une base de données, la même question se pose avant toute saisie : comment les éléments seront regroupés, nommés et identifiés.",
      "Selon la situation, il faudra nettoyer une base existante avant de la reprendre, ou concevoir la structure de zéro. Dans les deux cas, il est important qu'elle soit réfléchie avant d'être remplie, sans quoi il faudra tout reprendre pour corriger les incohérences.",
    ],
    faire: [
      "Poser les quatre éléments qui composent un référentiel : les regroupements, les règles de nommage, le format des identifiants, et les informations obligatoires. Dans certains cas il faudra aussi décider d'une logique de classification, de hiérarchie ou de nommage.",
      "Soumettre la structure à l'entreprise avant de la généraliser, idéalement lors d'un <strong class='font-medium text-gray-700'>atelier de co-construction</strong>. Faisant partie de son corps de métier, elle repérera plus facilement les cas qui ne rentreraient pas.",
    ],
    piege: "Créer la structure au fil de la saisie. Quand il s'agit de peu de données comme une catégorisation par exemple, cela n'a pas de gros impacts, mais si au contraire c'est une base nourrie par un grand nombre de données, tout reprendre derrière aura un gros impact.",
    outil: null,
  },
  {
    num: '③', verbe: 'Construire', objet: 'les règles métier',
    titre: 'Traduire le métier dans l\'outil',
    pourquoiTitre: "Pourquoi l'écart apparaît maintenant",
    pourquoi: [
      "C'est ici que l'on découvre si le diagnostic a été mené jusqu'au bout, en particulier sur les processus métier. Une règle qui n'a pas été cartographiée à l'étape 02 n'a pas pu être vérifiée à l'étape 04 : elle apparaît maintenant, alors que le travail est déjà engagé.",
      "L'écart se creuse d'autant plus si la solution n'a jamais été éprouvée sur un cas réel avant d'être retenue. Sans cette pré-validation, on découvre en configurant ce qu'on aurait dû savoir en choisissant, et la correction peut être plus ou moins lourde.",
    ],
    faire: [
      "Reprendre les processus relevés au diagnostic et <strong class='font-medium text-gray-700'>les traduire un par un dans l'outil</strong>, en vérifiant à chaque fois que le résultat obtenu correspond à ce que l'entreprise produit aujourd'hui.",
      "Pour celles qui ne passent pas, commencer par mesurer ce qu'elles pèsent : un simple confort, ou une règle sans laquelle l'entreprise ne peut pas travailler. C'est cette gravité qui dira si un contournement vaut la peine d'être construit, s'il vaut mieux adapter le processus, ou si d'autres mesures doivent être prises. Et dès qu'un contournement est mis en place, en prendre note dans la foulée : ce qu'il fait, pourquoi il a été nécessaire, etc.",
    ],
    piege: "Contourner sans compter. Chaque astuce prise isolément paraît raisonnable, et c'est leur empilement qui finit par rendre l'ensemble impossible à maintenir et qui risquera surtout de créer davantage de frictions que de confort.",
    outil: null,
  },
  {
    num: '④', verbe: 'Tester', objet: 'sur du réel',
    titre: 'Tester avec l\'équipe, sur de vrais cas',
    pourquoiTitre: 'Pourquoi faire tester ',
    pourquoi: [
      "Vous testez ce que vous avez construit, donc vous testez ce que vous avez prévu. L'équipe, elle, teste ce qu'elle fait vraiment et son quotidien contient des situations que personne n'a pensé à mentionner pendant le diagnostic.",
      "Un test mené sur un exemple préparé démontre le fonctionnement et permet de prendre en main. Par contre, les réels écarts se produiront quand l'entreprise utilisera l'outil dans des conditions réelles. C'est pour cela, qu'en plus des ateliers de prise en main, il est idéal de pouvoir définir un laps de temps pendant lequel l'équipe utilisera l'outil dans son quotidien.",
    ],
    faire: [
      "<strong class='font-medium text-gray-700'>Pendant l'atelier de prise en main</strong> : reprendre de vraies commandes, de vrais clients, de vraies journées. Laisser l'équipe manipuler et n'intervenir que lorsqu'elle est bloquée. Noter chaque hésitation : elle signale soit un point à réexpliquer, soit un endroit de l'outil à revoir.",
      "<strong class='font-medium text-gray-700'>Après l'atelier, en autonomie</strong> : donner à l'équipe un accès pour qu'elle utilise l'outil dans son quotidien. Selon les cas, des droits restreints évitent qu'elle intervienne là où il ne faut pas, et une durée d'essai peut être fixée à l'avance. Surtout, convenir avec elle qu'au moindre blocage ou au moindre doute, on vient vous en parler pour en discuter et le régler.",
    ],
    piege: "Confondre la maladresse des débuts avec un défaut de l'outil. Sur une courte période d'essai, personne n'est rapide, et c'est encore plus vrai pour les personnes peu à l'aise avec la technologie. Une hésitation ou une lenteur à ce stade est normale et ne dit rien sur la qualité de ce qui a été construit.",
    outil: null,
  },
  {
    num: '⑤', verbe: 'Basculer', objet: 'en service',
    titre: 'Passer en service',
    pourquoiTitre: "Pourquoi il n'y a pas une seule façon de faire",
    pourquoi: [
      "La bonne approche dépend surtout de ce qui a été mis en place. Travailler en agile pose déjà une base : ce qui est livré à la fin d'un sprint est utilisable. La bascule n'est donc pas un événement unique en fin de projet, mais une succession de moments où un élément prend la place de celui qu'il remplace.",
      "Le moment se convient avec l'entreprise. Certaines préféreront prendre le temps de s'approprier l'outil avant de le rendre opérationnel, d'autres voudront l'utiliser tout de suite, et le choix dépend aussi de ce que la bascule touche. Dans la pratique, une période de coexistence entre l'ancien et le nouveau s'installe presque toujours.",
    ],
    faire: [
      "<strong class='font-medium text-gray-700'>Effectuer le changement avec l'équipe</strong>, à un moment qui lui convient, et profiter de l'occasion pour réexpliquer ce que ce changement recouvre concrètement : ce qui remplace quoi, et ce qui ne bouge pas.",
      "S'assurer que les personnes absentes aux ateliers reçoivent l'information autrement, par un collègue relais ou une reprise plus courte. Puis rester disponible les jours qui suivent la mise en place, car c'est là que se concentrent les questions et qu'une réponse rapide vaut plus que n'importe quelle documentation.",
    ],
    piege: "Croire que la bascule se fera toute seule. Sans moment convenu, l'ancien système reste disponible, et il gagne à chaque fois : il est connu, il est plus rapide, et personne n'a le temps d'apprendre un jour chargé. La coexistence prévue pour quelques semaines devient alors un état permanent, et le projet se termine avec deux systèmes en parallèle au lieu d'un, c'est-à-dire plus de travail qu'avant.",
    outil: null,
  },
]

const courant = computed(() => temps[actif.value])

/* ── Contenus des blocs ───────────────────────────────────────── */

const criteres = [
  "Tous les accès nécessaires sont détenus par l'entreprise, pas seulement par vous",
  "La logique des choses est définie et retrouvable par l'équipe",
  "Les règles qui ne passaient pas ont été tranchées, et le choix retenu est écrit",
  "L'équipe a utilisé l'outil dans son quotidien, sans vous, au-delà de l'atelier",
  "Le passage en service a été convenu avec l'entreprise, et cette étape est suivie",
]

const coches = ref(criteres.map(() => false))

const familles = [
  {
    nom: 'Rigidité du modèle',
    nb: '2 frictions',
    desc: "Des règles métier que le modèle de données de la plateforme Wix n'admet pas. Ni la génération automatique des références produit, ni une grille tarifaire à paliers irréguliers ne trouvaient d'équivalent, natif ou tiers.",
  },
  {
    nom: 'Fermeture technique du panier',
    nb: '3 frictions',
    desc: "Le panier restait hors de portée du code : sélecteur de quantité ni masquable ni désactivable ni configurable, lignes existantes non modifiables, et affichage rafraîchi de façon asynchrone.",
  },
  {
    nom: 'Séparation des canaux',
    nb: '2 frictions',
    desc: "Les produits créés sur mesure, qui ne figurent pas comme articles, sont inaccessibles depuis le configurateur de commande du tableau de bord. Le scan d'un article n'y est pas davantage disponible, contrairement au mode \"point de vente\".",
  },
  {
    nom: 'Tâche non automatisable',
    nb: '2 frictions',
    desc: "Des gestes répétitifs condamnés à rester manuels, faute de synchronisation possible entre le serveur de l'entreprise et Wix : création d'un lien et envoi d'un courriel pour chaque livraison de numérisation, et rattachement des fichiers déposés reposant sur une saisie du client, source d'erreur.",
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
