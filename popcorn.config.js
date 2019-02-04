require('dotenv').config({ path: process.env.POPCORN_DIR + '/.env' })
const { POPCORN_BASE_URL, POPCORN_DIR } = process.env
let config = {}
try {
  config = require(POPCORN_DIR + '/popcorn.config.js')
} catch (e) {
  throw new Error(
    `Il n'y as pas de fichier "popcorn.config.js" à la racine de votre projet`
  )
}

const title = `Popcorn : trouvez un·e développeur·e freelance${config.location}`
const slogan =
  'La plateforme avec (vraiment) 0% de commission pour tout le monde'

module.exports = {
  location: config.location,
  title,
  slogan,
  // valeurs par défaut pour les partages sur les réseaux sociaux
  ogTitle: title,
  ogDescription: slogan,
  ogUrl: POPCORN_BASE_URL,
  ogImage: POPCORN_BASE_URL + '/images/popcorn.jpg',
  // architecture des dossiers d'une instance de popcorn
  dir_content: 'content',
  dir_public: 'public',
  dir_api: 'public/api',
  dir_dist: 'dist',
  dir_build: '.nuxt'
}
