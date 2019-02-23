// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { resolve } = require('path')

module.exports = (on, config) => {
  process.env.POPCORN_DIR = resolve(process.env.PWD, 'test/e2e/project')
  require('dotenv').config({ path: process.env.POPCORN_DIR + '/.env' })
  const popcornConfig = require('../../../popcorn.config')
  config.popcorn = JSON.stringify(popcornConfig)
  return config
}
