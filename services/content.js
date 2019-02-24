import pages from '@api/pages.json'
import persons from '@api/persons.json'
import popcorns from '@api/popcorns.json'

export function getPersons() {
  return persons
}

export function getPersonBySlug(slug) {
  return persons.find(person => person.$slug === slug)
}

export function getPageBySlug(slug) {
  return pages.find(page => page.$slug === slug)
}

export function getPopcorns() {
  return popcorns
}
