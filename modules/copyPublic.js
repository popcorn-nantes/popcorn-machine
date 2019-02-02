const fs = require('fs-extra')
const consola = require('consola')

const {
  POPCORN_DIR_PUBLIC_PATH,
  POPCORN_DIR_DIST_PATH,
  POPCORN_DIR_PUBLIC_NAME
} = process.env

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
  const pathA = POPCORN_DIR_PUBLIC_PATH
  const pathB = POPCORN_DIR_DIST_PATH + '/' + POPCORN_DIR_PUBLIC_NAME
  return fs
    .copy(pathA, pathB)
    .then(() => consola.success(`📂 Dossier ${pathA} copié vers ${pathB}`))
    .catch(e => consola.error(e))
}
