# Backend Node

## Pourquoi ce dossier existe

Le site du playbook est entièrement statique et n'appelle aucun backend : le contenu
est compilé par Vite, les gabarits sont servis en fichiers depuis `public/gabarits/`,
et le formulaire de contact passe par Netlify Forms.

Ce squelette Express est **conservé volontairement**, pour une évolution identifiée :
la réintroduction de l'outil de diagnostic interactif, écarté de la version 1. Cet outil devra enregistrer les réponses saisies par les
utilisateurs, ce qui suppose une API et un stockage.

En l'état actuel, il n'est **ni déployé ni appelé** par le frontend. Netlify ne construit
et ne sert que `frontend/`.

## Instructions


Instructions rapides pour initialiser le backend Node dans ce dossier.

1) Initialiser npm :

```bash
cd backend
npm init -y
```

2) Installer dépendances :

```bash
npm install express dotenv
# Optionnel pour dev :
npm install -D nodemon
```

3) Lancer le serveur :

```bash
# production
npm start
# développement (avec nodemon)
npm run dev
```

4) Fichiers présents :
- index.js : serveur Express minimal
- .gitignore : ignore `node_modules` et `.env`

Bon développement !
