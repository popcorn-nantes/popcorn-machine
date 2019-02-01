#!/usr/bin/env node
const cli = require('@nuxt/cli')
const path = require('path')

const { PWD } = process.env

// la racine du popcorn qui utilise 'popcorn-machine'
process.env.POPCORN_DIR = PWD

// le chemin vers le module 'popcorn-machine'
process.env.POPCORN_MACHINE_DIR = __dirname

// le dossier "public" du popcorn, qui sera copié dans le dossier "dist" final
process.env.POPCORN_DIR_PUBLIC_NAME = 'public'

// le dossier "public" du popcorn, qui sera copié dans le dossier "dist" final
process.env.POPCORN_DIR_PUBLIC_PATH = path.resolve(
  process.env.POPCORN_DIR,
  process.env.POPCORN_DIR_PUBLIC_NAME
)

// le dossier du popcorn qui contiendra les fichiers markdowns à compiler
process.env.POPCORN_DIR_CONTENT_PATH = path.resolve(
  process.env.POPCORN_DIR,
  'content'
)

// le dossier du popcorn dans lequel sont crées les pages html du generate
process.env.POPCORN_DIR_DIST_PATH = path.resolve(
  process.env.POPCORN_DIR,
  'dist'
)

// le dossier du popcorn dans lequel seront crées les fichiers JSONS compilés
// depuis les fichiers markdowns
process.env.POPCORN_DIR_API_PATH = path.resolve(
  process.env.POPCORN_DIR_PUBLIC_PATH,
  'api'
)

process.chdir(__dirname)

cli.run()
