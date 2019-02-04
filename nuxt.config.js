const { POPCORN_DIR } = process.env
require('dotenv').config({ path: POPCORN_DIR + '/.env' })
const path = require('path')
const { generateSocialShareHeadersMeta } = require('./services/helpers.js')
const serveStatic = require('serve-static')
const popcornConfig = require('./popcorn.config')

module.exports = {
  buildDir: POPCORN_DIR + '/' + popcornConfig.dir_dist,
  env: {
    POPCORN_LOCATION: process.env.POPCORN_LOCATION,
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
        content: popcornConfig.ogDescription
      },
      ...generateSocialShareHeadersMeta({
        title: popcornConfig.title,
        description: popcornConfig.slogan,
        image: popcornConfig.ogImage,
        url: popcornConfig.ogUrl
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
    JSONDirectory: path.resolve(POPCORN_DIR, popcornConfig.dir_api),
    contentDirectory: path.resolve(POPCORN_DIR, popcornConfig.dir_content),
    compilers: ['compilers/persons.js', 'compilers/pages.js']
  },
  generate: {
    dir: path.resolve(POPCORN_DIR, popcornConfig.dir_dist)
  },
  build: {
    extend(config) {
      // override and set some aliases
      config.resolve.alias['@api'] = path.resolve(
        POPCORN_DIR,
        popcornConfig.dir_api
      )
    }
  },
  serverMiddleware: [
    {
      path: '/' + popcornConfig.dir_public,
      handler: serveStatic(path.resolve(POPCORN_DIR, popcornConfig.dir_public))
    }
  ]
}
