#!/usr/bin/env node
const cli = require('@nuxt/cli')

const { PWD } = process.env

// la racine du popcorn qui utilise 'popcorn-machine'
process.env.POPCORN_DIR = PWD

// le chemin vers le module 'popcorn-machine'
process.env.POPCORN_MACHINE_DIR = __dirname

process.chdir(__dirname)

const runCli = argv => cli.run(argv)
const run = async () => {
  const argv = process.argv.slice(2)
  const [command = 'dev'] = argv
  if (command === 'start') {
    await runCli(['build', ...argv.slice(1)])
  }

  await runCli(argv)

  if (command === 'generate') {
    console.log('📚 La génération des pages est terminée !')
  }

  if (!['start', 'dev'].includes(command)) {
    process.exit(0)
  }
}

run()
  .catch(error => {
    require('consola').fatal(error)
    process.exit(2)
  })
