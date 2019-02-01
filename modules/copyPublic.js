const fs = require('fs-extra')

const {
  POPCORN_DIR_PUBLIC_PATH,
  POPCORN_DIR_DIST_PATH,
  POPCORN_DIR_PUBLIC_NAME
} = process.env

/**
 * Copier le dossier "public" de la ville dans "static/public"
 */
export default function copyPublic() {
  this.nuxt.hook('modules:done', async ({ compiler }) => {
    return copyPublicToDist()
  })
  this.nuxt.hook('generate:before', async ({ compiler }) => {
    return copyPublicToDist()
  })
}

function copyPublicToDist() {
  const pathA = POPCORN_DIR_PUBLIC_PATH
  const pathB = POPCORN_DIR_DIST_PATH + '/' + POPCORN_DIR_PUBLIC_NAME
  return fs
    .copy(pathA, pathB)
    .then(() => console.log(`dossier ${pathA} copié vers ${pathB}`))
    .catch(e => console.log(e))
}
