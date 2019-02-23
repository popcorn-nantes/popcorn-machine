const { POPCORN_DIR } = process.env
require('dotenv').config({ path: POPCORN_DIR + '/.env' })
const { generateSocialShareHeadersMeta } = require('./services/helpers.js')
const popcorn = require('./popcorn.config.js')
const serveStatic = require('serve-static')
const path = require('path')

if (process.env.NODE_ENV === 'development') {
  console.log('popcorn', JSON.stringify(popcorn, 0, 2))
}

module.exports = {
  mode: 'universal',
  buildDir: popcorn.dirBuildPath,
  // ces variables seront accessibles côté client comme côté serveur
  env: {
    POPCORN_BASE_URL: process.env.POPCORN_BASE_URL,
    POPCORN_SLACK_WEBHOOK: process.env.POPCORN_SLACK_WEBHOOK,
    POPCORN_LOCATION: popcorn.location,
    POPCORN_SLOGAN: popcorn.slogan,
    POPCORN_TITLE: popcorn.title,
    POPCORN_SUBTITLE: popcorn.subtitle,
    POPCORN_OG_DEFAULT_TITLE: popcorn.ogDefaultTitle,
    POPCORN_OG_DEFAULT_DESCRIPTION: popcorn.ogDefaultDescription,
    POPCORN_OG_DEFAULT_URL: popcorn.ogDefaultUrl,
    POPCORN_OG_DEFAULT_IMAGE: popcorn.ogDefaultImage
  },
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
        content: popcorn.ogDefaultDescription
      },
      ...generateSocialShareHeadersMeta({
        title: popcorn.ogDefaultTitle,
        description: popcorn.ogDefaultDescription,
        image: popcorn.ogDefaultImage,
        url: popcorn.ogDefaultUrl
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
    JSONDirectory: popcorn.dirApiPath,
    compilers: ['compilers/persons.js', 'compilers/pages.js']
  },
  generate: {
    dir: popcorn.dirDistPath
  },
  build: {
    extend(config) {
      // override and set some aliases
      config.resolve.alias['@api'] = popcorn.dirApiPath
    }
  },
  serverMiddleware: [
    {
      // servir les fichiers du dossier "public" pendant le dev
      path: '/' + path.basename(popcorn.dirPublicPath),
      handler: serveStatic(popcorn.dirPublicPath)
    }
  ]
}
