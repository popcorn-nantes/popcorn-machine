const path = require('path')
const fs = require('node-fs-extra')

const { POPCORN_DIR_PUBLIC_PATH, POPCORN_MACHINE_DIR } = process.env

/**
 * Copier le dossier "public" de la ville dans "static/public"
 */
export default function copyPublic() {
  this.nuxt.hook('modules:done', async ({ compiler }) => {
    copyPublicToStatic()
  })
  this.nuxt.hook('generate:before', async ({ compiler }) => {
    copyPublicToStatic()
  })
}

function copyPublicToStatic() {
  return fs.copy(
    path.resolve(POPCORN_DIR_PUBLIC_PATH),
    path.resolve(POPCORN_MACHINE_DIR, 'static', 'public')
  )
}
