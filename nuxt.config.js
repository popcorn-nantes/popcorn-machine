const { POPCORN_DIR } = process.env
require('dotenv').config({ path: POPCORN_DIR + '/.env' })
const { generateSocialShareHeadersMeta } = require('./services/helpers.js')
const popcornConfig = require('./popcorn.config.js')
const serveStatic = require('serve-static')
const path = require('path')

const config = {
  mode: 'universal',
  buildDir: popcornConfig.dirBuildPath,
  // ces variables seront accessibles côté client comme côté serveur
  env: {
    POPCORN_BASE_URL: process.env.POPCORN_BASE_URL,
    POPCORN_SLACK_WEBHOOK: process.env.POPCORN_SLACK_WEBHOOK,
    POPCORN_LOCATION: popcornConfig.location,
    POPCORN_SLOGAN: popcornConfig.slogan,
    POPCORN_TITLE: popcornConfig.title,
    POPCORN_SUBTITLE: popcornConfig.subtitle,
    POPCORN_OG_DEFAULT_TITLE: popcornConfig.ogDefaultTitle,
    POPCORN_OG_DEFAULT_DESCRIPTION: popcornConfig.ogDefaultDescription,
    POPCORN_OG_DEFAULT_URL: popcornConfig.ogDefaultUrl,
    POPCORN_OG_DEFAULT_IMAGE: popcornConfig.ogDefaultImage
  },
  css: ['@/static/css/bulma.min.css', '@/static/css/app.css'],
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
        content: popcornConfig.ogDefaultDescription
      },
      ...generateSocialShareHeadersMeta({
        title: popcornConfig.ogDefaultTitle,
        description: popcornConfig.ogDefaultDescription,
        image: popcornConfig.ogDefaultImage,
        url: popcornConfig.ogDefaultUrl
      })
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
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
    'nuxt-purgecss',
    '~/modules/copyPublic.js'
  ],
  purgeCSS: {
    mode: 'postcss'
  },
  gustave: {
    JSONDirectory: popcornConfig.dirApiPath,
    compilers: [
      'compilers/persons.js',
      'compilers/pages.js',
      'compilers/popcorns.js'
    ]
  },
  generate: {
    dir: popcornConfig.dirDistPath
  },
  build: {
    extend(config) {
      // override and set some aliases
      config.resolve.alias['@api'] = popcornConfig.dirApiPath
    }
  },
  serverMiddleware: [
    {
      // servir les fichiers du dossier "public" pendant le dev
      path: '/' + path.basename(popcornConfig.dirPublicPath),
      handler: serveStatic(popcornConfig.dirPublicPath)
    }
  ]
}

if (popcornConfig.matomo) {
  config.modules.push(['nuxt-matomo', popcornConfig.matomo])
}

module.exports = config
