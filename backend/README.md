# Backend Node

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
