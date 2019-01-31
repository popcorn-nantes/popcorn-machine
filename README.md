# POPCORN-MACHINE 🍿

La machine à Popcorn permet de créer votre propre annuaire "Popcorn", tel que celui de [Popcorn Nantes](https://github.com/popcorn-nantes/popcorn-nantes).

## DOCUMENTATION TECHNIQUE

`popcorn-machine` est basé sur [Nuxt.js](https://github.com/nuxt/nuxt.js) et génére un site statique en _html_ à partir des fichiers de _markdowns_ contenu dans un dossier _content_.
Il convertit ses fichiers markdowns en fichier JSON dans le JSON dans le dossier `/static/api/` via le module Nuxt[Gustave](https://github.com/yann-yinn/nuxt-gustave). Ce sont ces fichiers JSON qui sont ensuite consommés par les composants Vue.js, via un simple import webpack. Le tout est ensuite exporté en _html_ via la commande `npm run generate` et hébergeable par exemple sur [un dépôt github](https://github.com/popcorn-nantes/popcorn-nantes.github.io).

## Installation

cloner ce dépôt, copier le fichier `.env.example` pour créer un fichier `.env`. Renseigner ce fichier puis :

```sh
npm install
```

démarrer le serveur de dev

```sh
npm run dev
```
