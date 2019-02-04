const { POPCORN_BASE_URL, POPCORN_DIR } = process.env
let config = require(POPCORN_DIR + '/popcorn.config')

const title = `Popcorn : trouvez un·e développeur·e freelance ${
  config.location
}`
const subtitle =
  'La plateforme avec (vraiment) 0% de commission pour tout le monde'
const slogan = `Trouvez un développeur freelance à Nantes à ${
  config.location
} sans intermédiaire et sans frais.`

module.exports = {
  location: config.location,
  title,
  subtitle,
  slogan,
  // valeurs par défaut pour les metas de partages sur les réseaux sociaux
  ogDefaultTitle: title,
  ogDefaultDescription: slogan,
  ogDefaultUrl: POPCORN_BASE_URL,
  ogDefaultImage: POPCORN_BASE_URL + '/images/popcorn.jpg',
  // architecture des dossiers d'une instance de popcorn
  dir_content: 'content',
  dir_public: 'public',
  dir_api: 'public/api',
  dir_dist: 'dist',
  dir_build: '.nuxt'
}
