const path = require('path')
const { parseMarkdownDirectory } = require('nuxt-gustave/lib/markdown')
const { saveToJsonDirectory } = require('nuxt-gustave/lib/gustave')

exports.compile = () => {
  const resources = parseMarkdownDirectory('./content/popcorns')
  saveToJsonDirectory('popcorns.json', resources)
  return []
}
