<template>
  <main>

    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-dark is-size-3">{{ title }}</h1>
          <h2 class="subtitle has-text-dark is-size-5">{{ subtitle }}</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <PersonsSearchForm
            :value="$store.state.currentSearch"
            @input="onInput"
        />
        <Persons :persons="persons" />
      </div>
    </section>
  </main>
</template>

<script>
    import Persons from '@/components/Persons'
    import PersonsSearchForm from '@/components/PersonsSearchForm'
    import { getPersons } from '@/services/content'

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
            title: () => process.env.POPCORN_TITLE,
            subtitle: () => process.env.POPCORN_SUBTITLE
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
            // si on vient d'une autre page, filtrer les profils en fonction
            // de la recherche en cours, si il y en a une.
            if (this.$store.state.currentSearch.trim()) {
                this.persons = this.filterPersons(this.$store.state.currentSearch)
            }
        }
    }

</script>

<style scoped>
  .hero-body {
    padding-bottom: 0;
  }
</style>
