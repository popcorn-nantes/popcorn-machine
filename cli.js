#!/usr/bin/env node
const cli = require('@nuxt/cli')
const path = require('path')

const { PWD } = process.env

// la racine du popcorn qui utilise 'popcorn-machine'
process.env.POPCORN_DIR = PWD

// le chemin vers le module 'popcorn-machine'
process.env.POPCORN_MACHINE_DIR = __dirname

process.chdir(__dirname)

cli
  .run()
  .catch(error => {
    require('consola').fatal(error)
    process.exit(2)
  })
  .then(r => {
    if (process.argv[2]) {
      if (process.argv[2] === 'generate') {
        console.log('📚 La génération des pages est terminée !')
      }
      process.exit(0)
    }
  })
