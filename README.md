# POPCORN-MACHINE 🍿

La machine à Popcorn permet de créer un annuaire "Popcorn", tel que celui de [Popcorn Nantes](https://github.com/popcorn-nantes/popcorn-nantes).

## DOCUMENTATION TECHNIQUE

`popcorn-machine` est une application [Nuxt.js](https://github.com/nuxt/nuxt.js) qui permet de générer un site statique en _html_ à partir de fichiers markdowns pour créer les profils et contenus du sites.

Les fichiers markdowns sont convertis en fichier JSON via le module Nuxt [Gustave](https://github.com/yann-yinn/nuxt-gustave). Ce sont ces fichiers JSON qui sont ensuite consommés par les composants Vue.js.

Le tout est ensuite exportable en _html_ via la commande `npm run generate` et hébergeable par exemple sur [un dépôt github](https://github.com/popcorn-nantes/popcorn-nantes.github.io).

## Installation (WIP)

Créer un dossier avec l'architecture suivante:

```js
📁 content // contiendra les fichiers
  📁 pages
  📁 persons
📁 public
  📁 images
.env
.gitignore
popcorn.config.js
```

📝 **popcorn.config.js**

```js
module.exports = {
  location: 'à Nantes'
}
```

puis:

```sh
npm install popcorn-machine
```

démarrer le serveur de dev

```sh
npm run dev
```

Générer le site en html:

```sh
npm run generate
```
