import { closeSync } from 'fs'

describe('Social sharing', () => {
  /* eslint-disable */
  const popcornConfig = JSON.parse(Cypress.config('popcorn'))

  it('html head should have correct metas for social sharing', () => {
    cy.visit('/')
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
  })
})
