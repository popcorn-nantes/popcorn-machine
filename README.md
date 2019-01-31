# POPCORN 🍿

_Popcorn_ est une plateforme open source et (vraiment) sans commission qui aide les développeur-e-s freelance de Nantes à trouver des projets [Voir le site](https://popcorn-nantes.github.io/)

Les objectifs de _Popcorn_ pour les développeurs freelances :

- 📈 Devenir un canal pour trouver des affaires sans commission ni intermédiaire.
- 📗 Open source : on maîtrise les fonctionnalités de la plateforme, tel que les résultats de recherche, les informations affichées par nos profils etc
- 💬 Faire circuler les tuyaux boulot entre freelances via le tchat.

## FAQ

### Quelle est la différence avec des plateformes comme Malt ou Comet ?

- _Popcorn_ est une [association à but non-lucratif](https://opencollective.com/popcorn) et ne prélève pas de commission.
- _Popcorn_ est réservé aux **développeur·e·s de la région nantaise**.
- _Popcorn_ est développé et maintenu par les développeur(e)s freelances eux-mêmes.
- _Popcorn_ n'est **pas** un intermédiaire ou une entreprise: les clients entrent directement en contact avec les freelances. _Popcorn_ ne joue aucun rôle dans les échanges qui suivent ensuite entre les deux parties.

## Documentation technique

Il s'agit d'une site généré statiquement avec [Nuxt](https://github.com/nuxt/nuxt.js). Le répertoire `content` contient les fichiers _markdown_ qui servent à produire les profils et les contenus du site. Ils sont transformés en fichiers JSON dans le dossier `/static/api/` par le module Nuxt [Gustave](https://github.com/yann-yinn/nuxt-gustave). Ce sont ces fichiers JSON qui sont ensuite consommés par les composants Vue.js, via un simple import webpack. Le tout est ensuite exporté en _html_ via la commande `npm run generate` et hébergé sur [un dépôt github](https://github.com/popcorn-nantes/popcorn-nantes.github.io).

## Pourquoi un site statique (_serverless_) ?

L'idée expérimentée par _Popcorn_ est d'avoir un site aussi léger techniquement que possible, sans serveur et base de données, afin qu'il ne requiert quasiment aucune maintenance et intervention de notre part, parce que :

- On est déjà tous "sous l'eau", ce site ne doit pas être une charge de travail supplémentaire.
- On ne veut pas que le site reste 48 heures en rade parce qu'il ya un truc qui déconne et que tout le monde est trop occupé pour intervenir dessus.
- On ne veut pas qu'au fil du temps une personne devienne "responsable" du site, qu'elle soit la seule à piger comment tout fonctionne et qu'elle parte à Barcelone ou quitte _Popcorn_ en laissant aux autres un truc compliqué qu'ils et elles ne maitrisent pas
- On veut bien être hébergé pour 0 euros chez Github ^^
- On veut bien un site qui soit capable de supporter un fort pic de charge sans broncher : évitons le cas du site qui tombe pile au moment où un article de presse le mentionne 😅
- On veut bien un moteur de recherche super-rapide et un site qui s'affiche super vite
- On veut bien que des gens puissent tout simplement forker ce dépôt pour créer leur propre annuaire 💚

## Installation

cloner ce dépôt, copier le fichier `.env.example` pour créer un fichier `.env`. Renseigner ce fichier puis :

```sh
npm install
```

démarrer le serveur de dev

```sh
npm run dev
```

Générer la version statique du site

```sh
npm run generate
```

### Déployer

1. merger la branche `master` dans la branche `published`
2. `git push`

Le déploiement du site est déclenché automatiquement par _Travis_ lors d'un _push_ sur la branche `published`. Il peut prendre quelques minutes avant d'être visible en production.
