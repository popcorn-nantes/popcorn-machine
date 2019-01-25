#!/usr/bin/env node
const cli = require('@nuxt/cli')

const { PWD } = process.env

process.env.PWD == __dirname
process.env.POPCORN_DIR = PWD

process.chdir(__dirname)

cli.run()
