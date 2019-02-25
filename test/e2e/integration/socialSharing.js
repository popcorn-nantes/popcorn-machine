import popcornConfig from '../project/popcorn.config'

describe('Check html head metas for social sharing (Facebook, Linkedin, Twitter ...)', () => {
  it('Popcorn config should be filled with default open graph values', () => {
    expect(popcornConfig.ogDefaultImage).to.contains('/images/popcorn.jpg')
    expect(popcornConfig.ogDefaultTitle).be.a('string')
    expect(popcornConfig.ogDefaultImage).be.a('string')
    expect(popcornConfig.ogDefaultUrl).be.a('string')
    expect(popcornConfig.ogDefaultDescription).be.a('string')
  })

  it('Homepage should have correct default open graph metas for social sharing', () => {
    cy.visit('/')

    // og:site_name
    cy.get('head meta[property="og:site_name"]').should(
      'have.attr',
      'content',
      'Popcorn'
    )

    // og:title
    cy.get('head meta[property="og:title"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultTitle
    )
    cy.get('head meta[property="og:title"]').should(
      'have.attr',
      'data-hid',
      'og:title'
    )
    // og:url
    cy.get('head meta[property="og:url"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultUrl
    )
    cy.get('head meta[property="og:url"]').should(
      'have.attr',
      'data-hid',
      'og:url'
    )
    // og:image
    cy.get('head meta[property="og:image"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultImage
    )
    cy.get('head meta[property="og:image"]').should(
      'have.attr',
      'data-hid',
      'og:image'
    )
    // og:description
    cy.get('head meta[property="og:description"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultDescription
    )
    cy.get('head meta[property="og:description"]').should(
      'have.attr',
      'data-hid',
      'og:description'
    )
  })

  it('Homepage should have correct default Twitter card metas', () => {
    cy.visit('/')

    // twitter:card
    cy.get('head meta[name="twitter:card"]').should(
      'have.attr',
      'content',
      'summary'
    )
    cy.get('head meta[name="twitter:card"]').should(
      'have.attr',
      'data-hid',
      'twitter:card'
    )
    // twitter:title
    cy.get('head meta[name="twitter:title"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultTitle
    )
    cy.get('head meta[name="twitter:title"]').should(
      'have.attr',
      'data-hid',
      'twitter:title'
    )
    // twitter:description
    cy.get('head meta[name="twitter:description"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultDescription
    )
    cy.get('head meta[name="twitter:description"]').should(
      'have.attr',
      'data-hid',
      'twitter:description'
    )
    // twitter:image
    cy.get('head meta[name="twitter:image"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultImage
    )
    cy.get('head meta[name="twitter:image"]').should(
      'have.attr',
      'data-hid',
      'twitter:image'
    )
  })

  it('Profile page should have correct open graph metas', () => {
    cy.visit('/person/yann-boisselier')

    // og:site_name
    cy.get('head meta[property="og:site_name"]').should(
      'have.attr',
      'content',
      'Popcorn'
    )

    // og:title
    cy.get('head meta[property="og:title"]').should(
      'have.attr',
      'content',
      'Profil de Yann Boisselier, développeur freelance Nuxt, Vue, Node, GraphQL, JAMStack'
    )
    cy.get('head meta[property="og:title"]').should(
      'have.attr',
      'data-hid',
      'og:title'
    )
    // og:url
    cy.get('head meta[property="og:url"]').should(
      'have.attr',
      'content',
      'https://popcorn-nantes.github.io/person/yann-boisselier'
    )
    cy.get('head meta[property="og:url"]').should(
      'have.attr',
      'data-hid',
      'og:url'
    )
    // og:image
    cy.get('head meta[property="og:image"]').should(
      'have.attr',
      'content',
      'https://popcorn-nantes.github.io/public/images/yineo.jpg'
    )
    cy.get('head meta[property="og:image"]').should(
      'have.attr',
      'data-hid',
      'og:image'
    )
    // og:description
    cy.get('head meta[property="og:description"]').should(
      'have.attr',
      'content',
      'Trouvez un développeur freelance à Nantes sans intermédiaire et sans frais.'
    )
    cy.get('head meta[property="og:description"]').should(
      'have.attr',
      'data-hid',
      'og:description'
    )
  })

  it('Profile page should have correct default Twitter metas', () => {
    cy.visit('/person/yann-boisselier')

    // twitter:card
    cy.get('head meta[name="twitter:card"]').should(
      'have.attr',
      'content',
      'summary'
    )
    cy.get('head meta[name="twitter:card"]').should(
      'have.attr',
      'data-hid',
      'twitter:card'
    )
    // twitter:title
    cy.get('head meta[name="twitter:title"]').should(
      'have.attr',
      'content',
      'Profil de Yann Boisselier, développeur freelance Nuxt, Vue, Node, GraphQL, JAMStack'
    )
    cy.get('head meta[name="twitter:title"]').should(
      'have.attr',
      'data-hid',
      'twitter:title'
    )
    // twitter:description
    cy.get('head meta[name="twitter:description"]').should(
      'have.attr',
      'content',
      popcornConfig.ogDefaultDescription
    )
    cy.get('head meta[name="twitter:description"]').should(
      'have.attr',
      'data-hid',
      'twitter:description'
    )
    // twitter:image
    cy.get('head meta[name="twitter:image"]').should(
      'have.attr',
      'content',
      'https://popcorn-nantes.github.io/public/images/yineo.jpg'
    )
    cy.get('head meta[name="twitter:image"]').should(
      'have.attr',
      'data-hid',
      'twitter:image'
    )
  })
})
