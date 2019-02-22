const fs = require('fs-extra')
const path = require('path')
const consola = require('consola')
const { POPCORN_DIR } = process.env
const popcornConfig = require('../popcorn.config')

/**
 * Copier le dossier "public" de la ville dans "static/public"
 */
export default function copyPublic() {
  this.nuxt.hook('generate:done', async ({ compiler }) => {
    return copyPublicToDist()
  })
  this.nuxt.hook('build:done', async ({ compiler }) => {
    return copyPublicToDist()
  })
}

function copyPublicToDist() {
  const pathA = path.resolve(POPCORN_DIR, popcornConfig.dir_public)
  const pathB = path.resolve(
    POPCORN_DIR,
    popcornConfig.dir_dist + '/' + popcornConfig.dir_public
  )
  return fs
    .copy(pathA, pathB)
    .then(() => consola.success(`📂 Dossier ${pathA} copié vers ${pathB}`))
    .catch(e => consola.error(e))
}
