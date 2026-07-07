<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Nav -->
    <nav class="flex items-center justify-between px-8 py-4">
      <span class="text-sm font-medium text-gray-900">Playbook</span>
      <button @click="$router.push('/')" class="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors">
        <i class="ti ti-arrow-left text-sm" aria-hidden="true"></i>
        Retour à l'accueil
      </button>
    </nav>

    <div class="px-20 pb-16 flex flex-col gap-5">

      <!-- Hero -->
      <div class="bg-white rounded-2xl px-12 pt-16 pb-12">
        <p class="text-xs font-medium tracking-widest text-gray-400 uppercase mb-5">Contexte</p>
        <h1 class="font-display text-5xl font-medium leading-tight text-gray-900 max-w-xl mb-6">
          Comprendre avant<br>d'<em class="italic text-blue-700">agir</em>.
        </h1>
        <p class="text-base text-gray-500 max-w-sm leading-relaxed">
          Avant d'appliquer une méthode, il faut comprendre pourquoi la digitalisation des micro-entreprises est un cas à part et quel rôle joue l'ingénieur dans ce processus.
        </p>
      </div>

      <!-- Section 1 — PME en retard -->
      <div class="bg-white rounded-2xl px-12 py-12">
        <div class="flex flex-col items-end gap-4 text-right">
          <div class="max-w-xl">
            <div class="flex flex-row items-center justify-end gap-3 flex-wrap mb-4">
              <span class="text-xs font-medium tracking-widest text-gray-400">01 / 06</span>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 w-fit">PME en Suisse</span>
            </div>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Les petites entreprises accumulent un retard numérique qui se creuse chaque année
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-3 max-w-lg ml-auto">
              En Suisse, plus de 99% des entreprises sont des PME, dont presque 9 sur 10 sont des micro-entreprises. Elles font tourner l'économie helvétique et pourtant, elles accusent un retard significatif face aux grandes structures.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed max-w-lg ml-auto">
              Quatre freins reviennent systématiquement : le temps à disposition, la complexité technique, les ressources financières et la crainte du changement.
            </p>
          </div>
          <div class="w-full">
            <div class="grid grid-cols-3 gap-px rounded-xl overflow-hidden" style="background:#e5e7eb">
              <div v-for="stat in stats1" :key="stat.val" class="px-6 py-8 flex flex-col items-center text-center" style="background:#f9fafb">
                <p class="font-display text-5xl font-medium text-gray-900 leading-none mb-3">{{ stat.val }}</p>
                <p class="text-xs font-medium tracking-widest uppercase text-gray-400 leading-relaxed">{{ stat.label }}</p>
              </div>
            </div>
            <p class="text-xs text-gray-300 mt-3">Sources — OFS, 2023 · KOF ETH Zurich, 2025</p>
          </div>
        </div>
      </div>

      <!-- Section 2 — Comportement clients — dégradé bleu + grain -->
      <div class="section-blue rounded-2xl px-12 py-12 relative overflow-hidden">
        <div class="grain-overlay"></div>
        <div class="relative z-10 grid grid-cols-3 gap-12 items-start">
          <div class="col-span-2">
            <div class="flex flex-row items-center gap-3 flex-wrap mb-4">
              <span class="text-xs font-medium tracking-widest" style="color:rgba(255,255,255,0.5)">02 / 06</span>
              <span class="text-xs px-3 py-1 rounded-full" style="border:0.5px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8)">Comportement clients</span>
            </div>
            <h2 class="font-display text-2xl font-medium leading-snug mb-4" style="color:#ffffff">
              Se digitaliser, c'est répondre à un changement de comportement
            </h2>
            <p class="text-sm leading-relaxed mb-3" style="color:rgba(255,255,255,0.75)">
              Aujourd'hui, quand quelqu'un cherche un service ou un lieu, son premier réflexe est d'ouvrir Google. Le comportement des consommateurs a changé et les PME ne sont pas nombreuses à avoir suivi.
            </p>
            <p class="text-sm leading-relaxed mb-8" style="color:rgba(255,255,255,0.75)">
              En chiffres :
            </p>
            <div class="grid grid-cols-3 gap-px rounded-xl overflow-hidden" style="background:rgba(255,255,255,0.2)">
              <div v-for="stat in stats2" :key="stat.val" class="px-6 py-8 flex flex-col items-center text-center" style="background:rgba(255,255,255,0.08)">
                <p class="font-display text-5xl font-medium leading-none mb-3" style="color:#ffffff">{{ stat.val }}</p>
                <p class="text-xs font-medium tracking-widest uppercase leading-relaxed" style="color:rgba(255,255,255,0.7)">{{ stat.label }}</p>
              </div>
            </div>
            <p class="text-xs mt-3" style="color:rgba(255,255,255,0.4)">Sources — HSLU & Localsearch, PME Digital Pulse 2025</p>
          </div>
          <div></div>
        </div>
      </div>

      <!-- Section 3 — Posture ingénieur -->
      <div class="bg-white rounded-2xl px-12 py-12">
        <div class="grid grid-cols-3 gap-12 items-start">
          <div class="col-start-2 col-span-2 text-right">
            <div class="flex flex-row items-center justify-end gap-3 flex-wrap mb-4">
              <span class="text-xs font-medium tracking-widest text-gray-400">03 / 06</span>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 w-fit">Posture de l'ingénieur</span>
            </div>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Empathie et écoute active avant tout
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-3">
              Ces entreprises ont une culture forte, des processus ancrés depuis des décennies. Elles ont besoin de quelqu’un qui observe le terrain, quelqu’un d’humble et qui comprenne les enjeux et freins parfois divulgués.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-3">
              L'ingénieur ne doit pas se contenter de satisfaire les besoins exprimés. Il doit comprendre les enjeux, analyser le contexte et définir une stratégie qui fait sens avec l'évolution de l'entreprise et surtout l'expliquer à l'entreprise en adaptant son vocabulaire.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed ">
              L'investissement de temps, d'argent et d'énergie est tel qu'il est important de permettre à l'équipe d'être actrice de cette transformation plutôt que de lui fournir une solution clé en main dont elle n'a pas la moindre connaissance.
            </p>
            <div class="flex flex-wrap gap-2 mt-8 justify-end">
              <span v-for="pill in pillsPosture" :key="pill"
                class="text-xs px-3 py-1.5 rounded-full bg-blue-600 text-blue-50">
                {{ pill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4 — Périmètre -->
      <div class="section-gray rounded-2xl px-12 py-12 relative overflow-hidden">
        <div class="grain-overlay"></div>
        <div class="relative z-10 grid grid-cols-3 gap-12 items-start">
          <div class="col-span-2">
            <div class="flex flex-row items-center gap-3 flex-wrap mb-4">
              <span class="text-xs font-medium tracking-widest text-gray-400">04 / 06</span>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 w-fit">Périmètre et objectifs</span>
            </div>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Définir le périmètre avant de commencer.
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-3">
              L'initialisation du projet débute par un brief initial. Cela permet de saisir la vision qu'ont les responsables concernant leurs besoins numériques. Ce brief peut être fait à l'oral en présentiel — c'est souvent plus naturel — ou par écrit.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              À ce stade, l'ingénieur prend note de ce qui est dit et pourra axer ses recherches préliminaires dans ce sens, puis réaliser un premier devis et cahier des charges à soumettre au mandant.
            </p>
            <div class="mt-6 rounded-xl bg-white p-5">
              <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Points clés du brief initial</p>
              <div class="flex flex-col gap-2">
                <div v-for="point in briefPoints" :key="point" class="flex items-start gap-2.5 text-sm text-gray-600">
                  <i class="ti ti-check text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                  {{ point }}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <!-- Section 5 — Limites et évolutivité -->
      <div class="bg-white rounded-2xl px-12 py-12">
        <div class="grid grid-cols-3 gap-12 items-start">
          <div class="col-start-2 col-span-2 text-right">
            <div class="flex flex-row items-center justify-end gap-3 flex-wrap mb-4">
              <span class="text-xs font-medium tracking-widest text-gray-400">05 / 06</span>
              <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 w-fit">Limites et évolutivité</span>
            </div>
            <h2 class="font-display text-2xl font-medium text-gray-900 leading-snug mb-4">
              Un playbook en constante évolution
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">
              Ce playbook, dans sa version actuelle, se concentre délibérément sur les fondations opérationnelles. Bien que cela face l'objet de la majorité des demandes d'entreprises, la visibilité externe n'est pas la première priorité. Proposer une stratégie de communication à une entreprise dont les processus internes sont défaillants amplifie les frictions plutôt que de les résoudre.
            </p>
            <div class="flex flex-wrap gap-2 mb-6 justify-end">
              <span v-for="item in horsPerimetre" :key="item"
                class="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-400">
                ✗ {{ item }}
              </span>
              <span v-for="item in dansPerimetre" :key="item"
                class="text-xs px-3 py-1.5 rounded-full bg-gray-900 text-white border border-gray-900">
                ✓ {{ item }}
              </span>
            </div>
            <div class="rounded-xl bg-gray-50 p-5">
              <p class="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Évolutivité</p>
              <p class="text-sm text-gray-500 leading-relaxed">
                Basé sur une première expérience dans le cadre d'un travail de Bachelor, ce playbook est conçu pour être enrichi après chaque mission. Les fiches friction, les outils recommandés et les exemples terrain pourront être complétés au fil des cas rencontrés.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 6 — Photogare — fond sombre + grain -->
      <div class="section-dark rounded-2xl px-12 py-12 relative overflow-hidden">
        <div class="grain-overlay"></div>
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-xs font-medium tracking-widest" style="color:#4b5563">06 / 06</span>
            <span class="text-xs px-3 py-1 rounded-full" style="border:0.5px solid #374151;color:#9ca3af">Le cas Photogare</span>
          </div>
          <h2 class="font-display text-2xl font-medium leading-snug mb-4 max-w-xl" style="color:#ffffff">
            Photogare, Morges
          </h2>
          <p class="text-sm leading-relaxed max-w-lg mb-3" style="color:#6b7280">
            Cette méthodologie sera illustrée par un cas pratique réalisé dans le cadre d'un travail de Bachelor en Ingénierie des Médias à la HEIG-VD en 2026.
          </p>
          <p class="text-sm leading-relaxed max-w-lg mb-10" style="color:#6b7280">
            Photogare est une entreprise du domaine de la photographie implantée à Morges depuis ses débuts en 1959. Actuellement composée de 4 membres, l’objectif initial défini avant le travail consistait à les accompagner dans une transformation digitale leur permettant d’élargir leurs horizons.          
          </p>
        
          <div class="grid grid-cols-4 gap-px rounded-xl overflow-hidden" style="background:#1f2937">
            <div v-for="stat in stats6" :key="stat.val" class="px-6 py-8 flex flex-col items-center text-center" style="background:#111110">
              <p class="font-display text-5xl font-medium leading-none mb-3" style="color:#ffffff">{{ stat.val }}</p>
              <p class="text-xs font-medium tracking-widest uppercase leading-relaxed" style="color:#4b5563">{{ stat.label }}</p>
            </div>
          </div>
          <p class="text-xs mt-3" style="color:#374151">Sources — Entretien Y. Burdet, 2026 · Google Business Profile, 2026</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-white rounded-2xl px-12 py-16 text-center">
        <h2 class="font-display text-3xl font-medium text-gray-900 mb-3">
          Prêt à appliquer la méthode ?
        </h2>
        <p class="text-sm text-gray-500 mb-7">Lance le diagnostic pour obtenir un plan d'action personnalisé.</p>
        <button
          @click="$router.push('/diagnostic')"
          class="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors"
        >
          <i class="ti ti-sparkles" aria-hidden="true"></i>
          Lancer le diagnostic
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
const stats1 = [
  { val: '99%',  label: 'des entreprises suisses sont des PME' },
  { val: '4',    label: 'freins principaux identifiés' },
  { val: '9/10', label: 'sont des micro-entreprises' },
]

const stats2 = [
  { val: '80%', label: 'passent par Google avant de contacter une entreprise' },
  { val: '77%', label: 'souhaitent réserver en ligne' },
  { val: '3%',  label: 'des PME leur en donnent la possibilité' },
]

const pillsPosture = [
  'Écoute active',
  'Humilité',
  'Vulgarisation',
  'Accompagnement progressif',
  'Co-construction',
]

const briefPoints = [
  "Saisir la vision des responsables sur leurs besoins numériques",
  "Observer l'environnement et les processus en place",
  "Prendre note sans proposer de solutions à ce stade",
  "Axer les recherches préliminaires dans ce sens",
  "Produire un premier devis et cahier des charges",
]

const horsPerimetre = [
  'SEO et référencement',
  'Stratégie réseaux sociaux',
  'Publicité payante',
  'Fidélisation client',
  'Image de marque',
]

const dansPerimetre = [
  'Processus internes',
  'Outils SaaS intégrés',
  'Transfert de fichiers',
  'Suivi des commandes',
  'Accompagnement du changement',
]

const stats6 = [
  { val: '1959',   label: 'année de fondation' },
  { val: '4',      label: "membres d'équipe" },
  { val: '4.8/5',  label: 'note Google' },
  { val: 'Morges', label: 'canton de Vaud' },
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
</style>