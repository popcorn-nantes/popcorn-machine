const { POPCORN_BASE_URL, POPCORN_DIR } = process.env
let config = require(POPCORN_DIR + '/popcorn.config')

const title = `Popcorn : trouvez un·e développeur·e freelance ${
  config.location
}`

const subtitle = 'La plateforme avec (vraiment) 0% de commission'

const slogan = `Trouvez un développeur freelance ${
  config.location
} sans intermédiaire et sans frais.`

module.exports = {
  ...config,
  title,
  subtitle,
  slogan,

  // valeurs par défaut pour les metas de partages sur les réseaux sociaux
  ogDefaultTitle: title,
  ogDefaultDescription: slogan,
  ogDefaultUrl: POPCORN_BASE_URL,
  ogDefaultImage: POPCORN_BASE_URL + '/images/popcorn.jpg',

  // les dossiers d'une instance de popcorn à utiliser:
  // les contenus du site
  dir_content: 'content',
  // le dossier dont les fichiers seront copiés dans le répertoire "static"
  dir_public: 'public',
  // le dossier dans lequel les JSONS générés à partir des markdowns seront stockés
  dir_api: 'public/api',
  // le répertoire où seront stockés les fichier html compilés et
  // qui est à déployer sur github.io ou Netlify pour servir le site statique
  dir_dist: 'dist',
  // Les fichiers générées par nuxt lors d'un build
  dir_build: '.nuxt'
}
