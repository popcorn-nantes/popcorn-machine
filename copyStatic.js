const path = require('path')
const { promisify } = require('util')
const fs = require('node-fs-extra')

const { POPCORN_DIR } = process.env
const POPCORN_STATIC_PATH = path.resolve(POPCORN_DIR, 'static')

const copyDirectory = promisify(fs.copy)

export default function copyStatic() {
  this.nuxt.hook('modules:done', async ({ compiler }) => {
    await copyDirectory(
      path.resolve(__dirname, 'static', 'machine'),
      path.resolve(POPCORN_STATIC_PATH, 'machine')
    )
  })
}
