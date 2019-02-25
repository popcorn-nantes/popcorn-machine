const config = {
  location: 'à Nantes'
}

const title = `Popcorn : trouvez un·e développeur·e freelance ${
  config.location
}`

const POPCORN_BASE_URL = 'https://popcorn-nantes.github.io'

const subtitle = 'La plateforme avec (vraiment) 0% de commission'

const slogan = `Trouvez un développeur freelance ${
  config.location
} sans intermédiaire et sans frais.`

export default {
  location: config.location,
  title,
  subtitle,
  slogan,
  // Valeurs par défaut pour les balises metas de partages pour les réseaux sociaux
  ogDefaultTitle: title,
  ogDefaultDescription: slogan,
  ogDefaultUrl: POPCORN_BASE_URL,
  ogDefaultImage: POPCORN_BASE_URL + '/images/popcorn.jpg'
}
