#!/usr/bin/env node
const cli = require('@nuxt/cli')
const path = require('path')

const { PWD } = process.env
process.env.POPCORN_DIR = PWD
process.env.POPCORN_MACHINE_DIR = __dirname
process.env.POPCORN_DIR_PUBLIC_PATH = path.resolve(
  process.env.POPCORN_DIR,
  'public'
)
process.env.POPCORN_DIR_API_PATH = path.resolve(
  process.env.POPCORN_DIR_PUBLIC_PATH,
  'api'
)
process.env.POPCORN_DIR_CONTENT_PATH = path.resolve(
  process.env.POPCORN_DIR,
  'content'
)

process.chdir(__dirname)

cli.run()
