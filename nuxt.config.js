const { POPCORN_DIR } = process.env
require('dotenv').config({ path: POPCORN_DIR + '/.env' })
const path = require('path')
const { generateSocialShareHeadersMeta } = require('./services/helpers.js')
const popcorn = require('./popcorn.config.js')
const serveStatic = require('serve-static')

module.exports = {
  buildDir: POPCORN_DIR + '/' + popcorn.dir_build,
  env: {
    POPCORN_BASE_URL: process.env.POPCORN_BASE_URL,
    POPCORN_SLACK_WEBHOOK: process.env.POPCORN_SLACK_WEBHOOK,
    POPCORN_LOCATION: popcorn.location,
    POPCORN_SLOGAN: popcorn.slogan,
    POPCORN_TITLE: popcorn.title,
    POPCORN_SUBTITLE: popcorn.subtitle
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
    JSONDirectory: path.resolve(POPCORN_DIR, popcorn.dir_api),
    contentDirectory: path.resolve(POPCORN_DIR, popcorn.dir_content),
    compilers: ['compilers/persons.js', 'compilers/pages.js']
  },
  generate: {
    dir: path.resolve(POPCORN_DIR, popcorn.dir_dist)
  },
  build: {
    extend(config) {
      // override and set some aliases
      config.resolve.alias['@api'] = path.resolve(POPCORN_DIR, popcorn.dir_api)
    }
  },
  serverMiddleware: [
    {
      path: '/' + popcorn.dir_public,
      handler: serveStatic(path.resolve(POPCORN_DIR, popcorn.dir_public))
    }
  ]
}
