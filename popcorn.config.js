// POPCORN_DIR est le chemin absolu vers l'instance de Popcorn courante.
const { POPCORN_BASE_URL, POPCORN_DIR } = process.env
const path = require('path')
let config = require(POPCORN_DIR + '/popcorn.config')

const title = `Popcorn : trouvez un·e développeur·e freelance ${
  config.location
}`

const subtitle = 'La plateforme avec (vraiment) 0% de commission'

const slogan = `Trouvez un développeur freelance ${
  config.location
} sans intermédiaire et sans frais.`

module.exports = {
  location: config.location,
  matomo: config.matomo ? config.matomo : null,

  title,
  subtitle,
  slogan,

  // Valeurs par défaut pour les balises metas de partages pour les réseaux sociaux
  ogDefaultTitle: title,
  ogDefaultDescription: slogan,
  ogDefaultUrl: POPCORN_BASE_URL,
  ogDefaultImage: POPCORN_BASE_URL + '/images/popcorn.jpg',

  // Les dossiers utilisés par une instance de Popcorn:
  // Dossier de contenus du site:
  dirContentPath: path.resolve(POPCORN_DIR, 'content'),
  // Dossier qui sera copié dans le dossier `dist` de Nuxt:
  dirPublicPath: path.resolve(POPCORN_DIR, 'public'),
  // Dossier dans lequel les JSONS générés par nuxt-gustave seront stockés
  dirApiPath: path.resolve(POPCORN_DIR, 'public/api'),
  // Dossier où seront stockés les fichiers html compilés et
  // qui est à déployer sur github.io ou Netlify pour servir le site
  dirDistPath: path.resolve(POPCORN_DIR, 'dist'),
  // Les fichiers générées par nuxt lors d'un build
  dirBuildPath: path.resolve(POPCORN_DIR, '.nuxt')
}
