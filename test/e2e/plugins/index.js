const path = require('path')
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

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // load test projet .env file
  process.env.POPCORN_DIR = path.resolve(process.env.PWD, 'test/e2e/project')
  const envPath = process.env.POPCORN_DIR + '/.env'
  const result = require('dotenv').config({
    path: envPath
  })

  console.log('==============')
  console.log(
    `Cypress has loaded ${envPath} file: ' ${JSON.stringify(
      result.parsed,
      0,
      2
    )}`
  )
  console.log('==============')
  const popcornConfig = require('../../../popcorn.config')
  // passe popcornConfig and .env config to cypress, so we can access it from
  // browser tests
  config.popcorn = JSON.stringify(popcornConfig)
  config.dotenv = JSON.stringify(result.parsed)
  return config
}
