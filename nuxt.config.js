const {
  POPCORN_DIR,
  POPCORN_DIR_PUBLIC_PATH,
  POPCORN_DIR_CONTENT_PATH,
  POPCORN_DIR_DIST_PATH,
  POPCORN_DIR_API_PATH,
  POPCORN_DIR_PUBLIC_NAME
} = process.env
const path = require('path')
const { generateSocialShareHeadersMeta } = require('./services/helpers.js')
const serveStatic = require('serve-static')
require('dotenv').config({ path: POPCORN_DIR + '/.env' })

// les informations par défaut pour les metatags à destination des réseaux sociaux
const city = process.env.POPCORN_CITY ? ` à ${process.env.POPCORN_CITY}` : ''
const ogTitle = `Popcorn : trouvez un·e développeur·e freelance${city}`
const ogDescription =
  'La plateforme avec (vraiment) 0% de commission pour tout le monde'
const ogUrl = process.env.POPCORN_BASE_URL
const ogImage = `${process.env.POPCORN_BASE_URL}/images/popcorn.jpg`

module.exports = {
  buildDir: path.resolve(POPCORN_DIR, '.nuxt'),
  env: {
    POPCORN_CITY: process.env.CITY,
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/bulma.min.css'
      }
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-lazyload'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/dotenv', { path: POPCORN_DIR }],
    'nuxt-gustave',
    '~/modules/copyPublic.js'
  ],
  gustave: {
    JSONDirectory: POPCORN_DIR_API_PATH,
    contentDirectory: POPCORN_DIR_CONTENT_PATH,
    compilers: ['compilers/persons.js', 'compilers/pages.js']
  },
  generate: {
    dir: POPCORN_DIR_DIST_PATH
  },
  build: {
    extend(config) {
      // override and set some aliases
      config.resolve.alias['@api'] = POPCORN_DIR_API_PATH
    }
  },
  serverMiddleware: [
    {
      path: '/' + POPCORN_DIR_PUBLIC_NAME,
      handler: serveStatic(POPCORN_DIR_PUBLIC_PATH)
    }
  ]
}
