# POPCORN-MACHINE 🍿

La machine à Popcorn permet de créer son propre "Popcorn" : un annuaire local de développeurs freelances, tel que celui de [Popcorn Nantes](https://popcorn-nantes.github.io/).

## Les objectifs d'un annuaire Popcorn

- 📈 Etre un canal pour trouver des affaires dans sa **localité** sans commission ni intermédiaire
- 📗 Open source : on maîtrise les fonctionnalités de la plateforme, tel que les résultats de recherche, les informations affichées par nos profils etc
- 💬 Faire circuler les tuyaux boulot entre freelances via le tchat.
- 💪 Offrir une alternative locale aux _market places_ de freelances centralisées

## FONCTIONNALITES

- Gestion des profils de freelance et de pages statiques
- Recherche instantanée sur les compétences et mot-clefs du profils
- SEO-friendly avec la prégénération du html et les tags pour les réseaux sociaux (Facebook, Twitter, Linkedin)
- Support Gravatar pour les photos du profil
- Un formulaire de contact qui envoie le message sur le channel #general d'un Slack
- Une page qui affichent tous les autres popcorns francophones

## Ajouter son Popcorn dans l'annuaire des Popcorns

- Forke ce dépôt
- crée ta fiche Popcorn dans `content/popcorns`
- Choisis une belle image qui symbolise bien d'après toi la localité de ton Popcorn
- Attention ! L'image doit faire 100ko maximum
- Soumettre ta pull request ! Ton popcorn apparaitra dans la page "Annuaire des Popcorns" de tous les Popcorns dès qu'ils auront mis à jour leur version de `popcorn-machine`.

## PHILOSOPHIE TECHNIQUE : 0 MAINTENANCE, 0 FRAIS, SIMPLE ET EFFICACE

Le mot "Popcorn" a été notamment choisi pour évoquer une grande légèreté. Son mantra technique pourrait être:

> Dis moi ce dont tu as besoin, je te dirai comment t'en passer.

L'idée expérimentée par _Popcorn_ est d'avoir un site aussi léger techniquement que possible, sans serveur et base de données **afin qu'il ne requiert quasiment aucune maintenance et intervention de notre part ni aucun frais, parce que :**

- On est déjà tous "sous l'eau", ce site ne doit pas être une charge de travail supplémentaire.
- On ne veut pas que le site reste 48 heures en rade parce qu'il ya un truc qui déconne et que tout le monde est trop occupé pour intervenir dessus.
- On ne veut pas qu'au fil du temps une personne devienne "responsable" du site, qu'elle soit la seule à piger comment tout fonctionne et qu'elle parte à Barcelone ou quitte _Popcorn_ en laissant aux autres un truc compliqué qu'ils et elles ne maitrisent pas
- On veut bien être hébergé pour 0 euros chez Github ^^
- On veut bien un site qui soit capable de supporter un fort pic de charge sans broncher : évitons le cas du site qui tombe pile au moment où un article de presse le mentionne 😅
- On veut bien un moteur de recherche super-rapide et un site qui s'affiche super vite
- On veut bien que des gens puissent tout simplement forker ce dépôt pour créer leur propre annuaire 💚

## DOCUMENTATION TECHNIQUE

`popcorn-machine` est une application [Nuxt.js](https://github.com/nuxt/nuxt.js) qui permet de générer un site statique en _html_ à partir de fichiers markdowns pour créer les profils et contenus du sites.

Les fichiers markdowns sont convertis en fichier JSON via le module Nuxt [Gustave](https://github.com/yann-yinn/nuxt-gustave). Ce sont ces fichiers JSON qui sont ensuite consommés par les composants Vue.js.

Le tout est ensuite exportable en _html_ via la commande `npm run generate` et hébergeable par exemple sur [un dépôt github](https://github.com/popcorn-nantes/popcorn-nantes.github.io).
