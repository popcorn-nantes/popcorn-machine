<template>
  <div>
    <div style="margin-top:2rem" class="container has-text-centered">
      <h1 class="title">{{popcornConfig.title}}</h1>
      <h2 class="subtitle">
        <em>{{popcornConfig.slogan}}</em>
      </h2>
    </div>
    <div class="container">
      <div class="section">
        <div style="padding-bottom:3em">
          <PersonsSearchForm :value="$store.state.currentSearch" @input="onInput"/>
        </div>
        <Persons :persons="persons"/>
      </div>
    </div>
  </div>
</template>

<script>
import Persons from '@/components/Persons'
import PersonsSearchForm from '@/components/PersonsSearchForm'
import { getPersons } from '@/services/content'
import { title, slogan } from '@/popcorn.config.js'

export default {
  scrollToTop: false,
  components: {
    Persons,
    PersonsSearchForm
  },
  data() {
    return {
      persons: [...getPersons()]
    }
  },
  computed: {
    popcornConfig() {
      return popcornConfig
    }
  },
  methods: {
    onInput(value) {
      this.$store.commit('setCurrentSearch', value)
      this.persons = this.filterPersons(value)
    },
    filterPersons(text) {
      let persons = getPersons().filter(person => {
        let match = false
        person._exactMatch = false
        let textLowerCased = text.toLowerCase().trim()
        person.$search_keywords.forEach(keyword => {
          keyword = keyword.toLowerCase()

          if (keyword.indexOf(textLowerCased) > -1) {
            match = true
            if (textLowerCased.length === keyword.length) {
              person._exactMatch = true
            }
          }
        })
        return match
      })
      persons = persons.sort((a, b) => {
        return b._exactMatch - a._exactMatch
      })
      return persons
    }
  },
  created() {
    this.persons = this.filterPersons(this.$store.state.currentSearch)
  }
}
</script>
