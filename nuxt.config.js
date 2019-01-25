require('dotenv').config()
const path = require('path')
const { generateSocialShareHeadersMeta } = require('./services/helpers.js')

// les informations par défaut pour les metatags à destination des réseaux sociaux
const city = process.env.CITY ? ` à ${process.env.CITY}` : ''
const ogTitle = `Popcorn : trouvez un·e développeur·e freelance${city}`
const ogDescription =
  'La plateforme avec (vraiment) 0% de commission pour tout le monde'
const ogUrl = process.env.POPCORN_BASE_URL
const ogImage = `${process.env.POPCORN_BASE_URL}/machine/images/popcorn-500.jpg`

const { POPCORN_DIR } = process.env
const POPCORN_STATIC_PATH = path.resolve(POPCORN_DIR, 'static')
const POPCORN_API_PATH = path.resolve(POPCORN_STATIC_PATH, 'api')
const POPCORN_CONTENT_PATH = path.resolve(POPCORN_DIR, 'content')

console.log(POPCORN_CONTENT_PATH)

module.exports = {
  buildDir: path.resolve(POPCORN_DIR, '.nuxt'),
  env: {
    CITY: process.env.CITY,
    POPCORN_BASE_URL: process.env.POPCORN_BASE_URL,
    POPCORN_SLACK_WEBHOOK: process.env.POPCORN_SLACK_WEBHOOK
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Popcorn',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: ogDescription
      },
      ...generateSocialShareHeadersMeta({
        title: ogTitle,
        description: ogDescription,
        image: ogImage,
        url: ogUrl
      })
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/machine/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/machine/css/bulma.min.css' }
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-lazyload'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv', 'nuxt-gustave', '@copyStatic'],
  gustave: {
    JSONDirectory: POPCORN_API_PATH,
    compilers: ['compilers/persons.js', 'compilers/pages.js'],
    contentDirectory: POPCORN_CONTENT_PATH,
  },
  dir: {
    static: POPCORN_STATIC_PATH
  },
  generate: {
    dir: path.resolve(POPCORN_DIR, 'dist')
  },
  build: {
    extend (config) {
      // override and set some aliases
      config.resolve.alias.static = POPCORN_STATIC_PATH
      config.resolve.alias['~'] = POPCORN_DIR
      config.resolve.alias['~~'] = POPCORN_DIR
      config.resolve.alias['@api'] = POPCORN_API_PATH
      delete config.resolve.alias[POPCORN_STATIC_PATH]

      // add public resolvers (http resolvers)
      // console.log(config.module.rules)
    }
  }
}
