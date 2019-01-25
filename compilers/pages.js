const path = require('path')
const { parseMarkdownDirectory } = require('nuxt-gustave/lib/markdown')
const { saveToJsonDirectory } = require('nuxt-gustave/lib/gustave')

exports.compile = () => {
  const resources = parseMarkdownDirectory(path.resolve(process.env.POPCORN_DIR, 'content', 'pages'))
  saveToJsonDirectory('pages.json', resources)
  return resources.map(resource => `/page/${resource.$slug}`)
}
