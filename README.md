# Playbook de transformation digitale

Méthodologie réplicable destinée aux ingénieur·es des médias qui accompagnent une
micro-entreprise dans la digitalisation de ses processus internes. Le site est le
livrable principal du travail ; le cas Photogare y sert d'illustration à chaque étape.

**Travail de Bachelor en Ingénierie des médias — HEIG-VD, 2026**
Doriane Rosset · Mandant : Photogare, Morges

---

## Consulter le site

**En ligne :** [dorianerosset.ch](https://playbook.dorianerosset.ch)

C'est la manière la plus simple de découvrir le travail : rien à installer.

> **À savoir** — le site est conçu pour être consulté sur ordinateur. En dessous de
> 1024 px de largeur, une page d'attente s'affiche et explique pourquoi, avec un lien
> « Continuer quand même » pour accéder au contenu malgré tout. L'adaptation aux
> mobiles fait partie des évolutions prévues.

---

## Faire tourner le site en local

**Prérequis :** [Node.js](https://nodejs.org) en version 20.19 ou supérieure
(22.12+ recommandé) et npm, installé avec Node.

```bash
git clone https://github.com/Dorytos13/Playbook.git
cd Playbook/frontend
npm install
npm run dev
```

La console affiche une adresse de type `http://localhost:5173` — c'est le site.

Pour produire la version compilée, telle qu'elle est mise en ligne :

```bash
npm run build      # génère le dossier frontend/dist
npm run preview    # sert ce dossier pour vérification
```

---

## Comment lire le site

La navigation principale est le **menu latéral**, présent sur toutes les pages excepté /outils et /contact de la
méthode. Il liste les sept étapes dans l'ordre et se replie pour libérer de la largeur.

Chaque étape suit la même structure :

| Section | Ce qu'on y trouve |
|---|---|
| Le principe | L'idée qui englobe l'étape |
| La démarche | Un carrousel de temps successifs : pourquoi, quoi faire, le piège, l'outil (si existant) |
| Blocs thématiques | Un approfondissement propre à l'étape |
| Critère de sortie | Une liste à cocher pour savoir si l'étape est terminée |
| Le piège | L'erreur la plus fréquente de la phase |
| Chez Photogare | Le cas réel, y compris ce qui n'a pas fonctionné |

Deux pages complètent la méthode : **Outils**, qui rassemble les neuf gabarits Notion et téléchargeable en PDF, et **Contact**, qui permet à une personne de me faire un retour.

---

## Structure du dépôt

```
frontend/
├── public/
│   ├── gabarits/          Les neuf gabarits en PDF, servis en téléchargement
│   └── _redirects         Règle Netlify pour le routage côté client
├── src/
│   ├── views/             Une page par étape, plus Accueil, Outils et Contact
│   ├── components/        Menu latéral, navigation, pied de page, écran mobile
│   ├── composables/       État partagé : repli du menu, détection de la largeur
│   ├── data/outils.js     Source des outils du playbook
│   ├── router/index.js    Table des routes
│   └── style.css          Import de Tailwind et définition des polices
└── index.html

backend/                   Squelette Express non déployé en l'état — voir backend/README.md
```

**Le contenu rédactionnel se trouve dans les composants**, sous forme de tableaux
JavaScript en fin de fichier (`temps`, `criteres`, `chiffres`…). Modifier un texte
revient donc à modifier le fichier de la page concernée.

**Les outils font exception.** Ils sont décrits une seule fois dans
`src/data/outils.js` et lus à la fois par les pages de la méthode et par la page
Outils. Changer un lien Notion ou un PDF ne se fait qu'à cet endroit.

---

## Technologies

| Rôle | Choix |
|---|---|
| Interface | Vue 3.5 (Composition API, `<script setup>`) |
| Navigation | Vue Router 5, historique HTML5 |
| Styles | Tailwind CSS 4, via le plugin officiel pour Vite |
| Compilation | Vite 8 |
| Hébergement | Netlify, déploiement automatique à chaque `push` sur `main` |
| Formulaire | Netlify Forms |
| Nom de domaine | Infomaniak, DNS pointant sur Netlify |
| Polices | Bricolage Grotesque et Inter (Google Fonts) |

**Le site est entièrement statique.** Il n'appelle aucun serveur applicatif : le
contenu est compilé à l'avance, les gabarits sont des fichiers, et le formulaire de
contact est intercepté par Netlify.

---

## Déploiement

Le site est construit et servi par Netlify. La configuration est la suivante :

| Réglage | Valeur |
|---|---|
| Branche | `main` |
| Base directory | `frontend` |
| Build command | `npm run build` |
| Publish directory | `dist` |

Chaque `push` sur `main` déclenche un nouveau déploiement.

---

## Licence

Voir le fichier `LICENSE`.
