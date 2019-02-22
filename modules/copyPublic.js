const fs = require('fs-extra')
const path = require('path')
const consola = require('consola')
const popcornConfig = require('../popcorn.config')

/**
 * Copier le dossier "public" de la location vers "dist/public"
 */
export default function copyPublic() {
  this.nuxt.hook('generate:distCopied', async ({ compiler }) => {
    return copyPublicToDist()
  })
}

function copyPublicToDist() {
  const pathA = popcornConfig.dirPublicPath
  const pathB = path.resolve(
    popcornConfig.dirDistPath,
    path.basename(popcornConfig.dirPublicPath)
  )
  return fs
    .copy(pathA, pathB)
    .then(() => consola.success(`📂 Dossier ${pathA} copié vers ${pathB}`))
    .catch(e => consola.error(e))
}
