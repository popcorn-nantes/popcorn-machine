const path = require('path')
const md5 = require('md5')
const { parseMarkdownDirectory } = require('nuxt-gustave/lib/markdown')
const { saveToJsonDirectory } = require('nuxt-gustave/lib/gustave')
const { shuffle } = require('../services/helpers')

exports.compile = () => {
  let resources = parseMarkdownDirectory(path.resolve(process.env.POPCORN_DIR, 'content', 'persons'))

  // keywords
  resources = resources.map(resource => ({
    ...resource,
    $search_keywords: [
      ...resource.domaines_metiers,
      ...resource.technologies,
      resource.titre
    ],
  }))

  // gravatar
  resources = resources.map((resource) => {
    const { gravatar, mail, photo } = resource
    // no gravatar information -> quit
    if (!gravatar) return { ...resource, photo: `/public${photo}` }

    // gravatar field can be a boolean, in which case we use the mail field
    // or it can be a string, in which case we use its value
    const gravatarEmail = (typeof gravatar === 'boolean') ? mail : gravatar

    // we needs to retrieve the md5 of the email to get the avatar from gravatar
    const md5sum = md5(gravatarEmail.toLowerCase().trim())

    return {
      ...resource,
      photo: `https://www.gravatar.com/avatar/${md5sum}?s=500`
    }
  })

  // on met les personnes dans un ordre aléatoire à chaque fois.
  saveToJsonDirectory('persons.json', shuffle(resources))

  return resources.map(resource => `/person/${resource.$slug}`)
}
