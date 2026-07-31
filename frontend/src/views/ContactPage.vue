<template>
  <div class="font-sans min-h-screen" style="background:#e8e8e4">

    <!-- Hero -->
    <header class="px-6 xl:px-10 pt-12 mb-12 text-center">
      <span class="inline-block font-display text-xs font-medium tracking-widest text-gray-400 border border-gray-400 rounded-full px-3 py-1 mb-5">
        Contact
      </span>
      <h1 class="font-display text-5xl font-medium text-gray-900 leading-snug mb-3">
        Prendre <em class="italic text-blue-700">contact</em>.
      </h1>
      <p class="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
        Une question sur la méthode, une remarque sur un outil, ou l'envie d'échanger sur un mandat en cours.
      </p>
    </header>

    <div class="px-6 xl:px-10 pb-16 max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">

        <!-- Qui je suis -->
        <div class="lg:col-span-2 bg-white rounded-2xl px-10 py-10">
          <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
            Qui je suis
          </span>
          <h2 class="font-display text-xl font-medium text-gray-900 leading-snug mb-4">
            Doriane Rosset
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed mb-3">
            Ce playbook est né de mon travail de Bachelor en Ingénierie des médias à la HEIG-VD, réalisé en 2026 auprès de Photogare, une entreprise de photographie établie à Morges depuis 1959.
          </p>
          <p class="text-sm text-gray-500 leading-relaxed mb-3">
            En accompagnant cette équipe, j'ai constaté qu'il n'existait pas de méthode réutilisable pour ce type de mandat. Les cadres disponibles s'adressent à des structures qui disposent d'un service informatique, d'un budget dédié et de temps. Une micro-entreprise n'a rien de tout cela.
          </p>
          <p class="text-sm text-gray-500 leading-relaxed">
            Ce site est ma tentative de formuler cette méthode à partir d'un cas réel, avec ses réussites et ses erreurs d'appréciation.
          </p>
        </div>

        <!-- Formulaire -->
        <div class="lg:col-span-3 bg-white rounded-2xl px-10 py-10">

          <!-- Confirmation -->
          <div v-if="etat === 'envoye'">
            <span class="text-xs px-3 py-1 rounded-full border border-blue-200 text-blue-600 inline-block mb-4">
              Message envoyé
            </span>
            <h2 class="font-display text-xl font-medium text-gray-900 leading-snug mb-4">
              Merci, votre message est bien parti
            </h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-8">
              Je vous réponds dès que possible, à l'adresse que vous avez indiquée.
            </p>
            <button
              type="button"
              @click="reinitialiser"
              class="text-xs text-gray-400 hover:text-gray-900 underline underline-offset-4 transition-colors"
            >
              Écrire un autre message
            </button>
          </div>

          <!-- Formulaire -->
          <template v-else>
            <span class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 inline-block mb-4">
              M'écrire
            </span>
            <h2 class="font-display text-xl font-medium text-gray-900 leading-snug mb-8">
              Envoyer un message
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              @submit.prevent="envoyer"
            >
              <!-- Requis par Netlify pour identifier le formulaire -->
              <input type="hidden" name="form-name" value="contact" />

              <!-- Champ piège : invisible pour un humain, rempli par les robots -->
              <p class="hidden">
                <label>Ne pas remplir ce champ : <input name="bot-field" v-model="formulaire['bot-field']" /></label>
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="nom" class="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                    Nom
                  </label>
                  <input
                    id="nom" name="nom" type="text" required
                    v-model="formulaire.nom"
                    autocomplete="name"
                    class="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Prénom et nom"
                  />
                </div>
                <div>
                  <label for="email" class="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                    E-mail
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    v-model="formulaire.email"
                    autocomplete="email"
                    class="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="vous@exemple.ch"
                  />
                </div>
              </div>

              <div class="mb-4">
                <label for="sujet" class="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                  Sujet
                </label>
                <select
                  id="sujet" name="sujet"
                  v-model="formulaire.sujet"
                  class="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                >
                  <option v-for="s in sujets" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="message" class="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message" name="message" required rows="7"
                  v-model="formulaire.message"
                  class="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 leading-relaxed placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors resize-y"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <div v-if="etat === 'erreur'" class="rounded-xl bg-blue-50 border border-blue-100 p-5 mb-6">
                <p class="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">L'envoi a échoué</p>
                <p class="text-sm text-gray-500 leading-relaxed">
                  Le message n'a pas pu être transmis. Vérifiez votre connexion et réessayez dans un instant.
                </p>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  :disabled="etat === 'envoi'"
                  class="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:pointer-events-none shrink-0"
                >
                  {{ etat === 'envoi' ? 'Envoi en cours…' : 'Envoyer le message' }}
                </button>
              </div>
            </form>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sujets = [
  'Une question sur la méthode',
  'Une remarque sur un outil',
  'Un retour d\'usage sur un mandat',
  'Autre',
]

const etatInitial = () => ({
  nom: '',
  email: '',
  sujet: sujets[0],
  message: '',
  'bot-field': '',
})

const formulaire = reactive(etatInitial())

// 'attente' | 'envoi' | 'envoye' | 'erreur'
const etat = ref('attente')

function encoder(donnees) {
  return Object.keys(donnees)
    .map((cle) => encodeURIComponent(cle) + '=' + encodeURIComponent(donnees[cle]))
    .join('&')
}

async function envoyer() {
  etat.value = 'envoi'
  try {
    const reponse = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoder({ 'form-name': 'contact', ...formulaire }),
    })
    if (!reponse.ok) throw new Error(reponse.status)
    etat.value = 'envoye'
  } catch (e) {
    etat.value = 'erreur'
  }
}

function reinitialiser() {
  Object.assign(formulaire, etatInitial())
  etat.value = 'attente'
}
</script>
